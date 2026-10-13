"""Refresh assets/scholar.json from the public Google Scholar profile.

Google Scholar has no API and blocks browser requests, so the site reads this
JSON snapshot instead. Run weekly by .github/workflows/scholar.yml.

Order of sources:
  1. The public profile page (no key needed; sometimes blocked on CI runners).
  2. SerpAPI, if the SERPAPI_KEY environment variable is set.
If both fail, the existing snapshot is left untouched and the script exits 0.
"""

import datetime
import html
import json
import os
import re
import sys
import urllib.parse
import urllib.request

SCHOLAR_ID = "Ja7tYhcAAAAJ"
PROFILE_URL = f"https://scholar.google.com/citations?user={SCHOLAR_ID}&hl=en"
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "assets", "scholar.json")
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/129.0 Safari/537.36"
)


def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept-Language": "en"})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", "replace")


def clean(text):
    return html.unescape(re.sub(r"<[^>]+>", "", text)).strip()


def from_profile_page():
    page = fetch(f"{PROFILE_URL}&cstart=0&pagesize=100&sortby=citedby")
    if "gsc_rsb_std" not in page:
        raise RuntimeError("profile table not found (likely blocked by a CAPTCHA)")

    stats = [int(value) for value in re.findall(r'class="gsc_rsb_std">(\d+)<', page)]
    if len(stats) < 6:
        raise RuntimeError(f"expected 6 metric cells, found {len(stats)}")
    since = re.search(r"Since (\d{4})", page)

    years = [int(year) for year in re.findall(r'class="gsc_g_t"[^>]*>(\d{4})<', page)]
    counts = [int(count) for count in re.findall(r'class="gsc_g_al">(\d+)<', page)]

    papers = []
    for row in re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', page, re.S):
        title = re.search(r'class="gsc_a_at"[^>]*>(.*?)</a>', row, re.S)
        cited = re.search(r'<a href="([^"]*)" class="gsc_a_ac gs_ibl">(\d*)<', row)
        year = re.search(r'gsc_a_h gsc_a_hc gs_ibl"[^>]*>(\d*)<', row)
        if not title:
            continue
        cited_by = int(cited.group(2)) if cited and cited.group(2) else 0
        papers.append({
            "title": clean(title.group(1)),
            "year": int(year.group(1)) if year and year.group(1) else None,
            "cited_by": cited_by,
            "cited_by_url": html.unescape(cited.group(1)) if cited and cited_by else None,
        })

    return {
        "since_year": int(since.group(1)) if since else None,
        "citations": {"all": stats[0], "since": stats[1]},
        "h_index": {"all": stats[2], "since": stats[3]},
        "i10_index": {"all": stats[4], "since": stats[5]},
        "by_year": [{"year": y, "citations": c} for y, c in zip(years, counts)],
        "papers": papers,
    }


def from_serpapi(key):
    query = urllib.parse.urlencode({
        "engine": "google_scholar_author",
        "author_id": SCHOLAR_ID,
        "hl": "en",
        "num": 100,
        "sort": "citedby",
        "api_key": key,
    })
    data = json.loads(fetch(f"https://serpapi.com/search.json?{query}"))
    table = {next(iter(row)): row[next(iter(row))] for row in data["cited_by"]["table"]}
    since_key = next(k for k in table["citations"] if k.startswith("since_"))

    def pair(name):
        return {"all": table[name]["all"], "since": table[name][since_key]}

    return {
        "since_year": int(since_key.split("_")[1]),
        "citations": pair("citations"),
        "h_index": pair("h_index"),
        "i10_index": pair("i10_index"),
        "by_year": [{"year": g["year"], "citations": g["citations"]} for g in data["cited_by"].get("graph", [])],
        "papers": [
            {
                "title": article["title"],
                "year": int(article["year"]) if article.get("year") else None,
                "cited_by": (article.get("cited_by") or {}).get("value") or 0,
                "cited_by_url": (article.get("cited_by") or {}).get("link"),
            }
            for article in data.get("articles", [])
        ],
    }


def load_previous():
    try:
        with open(OUT_PATH, encoding="utf-8") as handle:
            return json.load(handle)
    except (OSError, ValueError):
        return None


def main():
    attempts = [("profile page", from_profile_page)]
    if os.environ.get("SERPAPI_KEY"):
        attempts.append(("SerpAPI", lambda: from_serpapi(os.environ["SERPAPI_KEY"])))

    snapshot = None
    for name, attempt in attempts:
        try:
            snapshot = attempt()
            print(f"Fetched metrics from {name}.")
            break
        except Exception as error:  # noqa: BLE001 - any failure falls through to the next source
            print(f"Could not fetch from {name}: {error}", file=sys.stderr)

    if snapshot is None:
        print("All sources failed; keeping the existing snapshot.")
        return

    previous = load_previous()
    if previous and snapshot["citations"]["all"] < 0.5 * previous["citations"]["all"]:
        print("Citation total dropped by more than half; assuming a bad parse and keeping the old snapshot.")
        return

    snapshot = {
        "source": "Google Scholar",
        "profile_url": PROFILE_URL,
        "updated": datetime.date.today().isoformat(),
        **snapshot,
    }
    if previous and {k: v for k, v in previous.items() if k != "updated"} == {k: v for k, v in snapshot.items() if k != "updated"}:
        print("No change in metrics.")
        return

    with open(OUT_PATH, "w", encoding="utf-8") as handle:
        json.dump(snapshot, handle, indent=2, ensure_ascii=False)
        handle.write("\n")
    print(f"Wrote {OUT_PATH}: {snapshot['citations']['all']} citations, h-index {snapshot['h_index']['all']}.")


if __name__ == "__main__":
    main()

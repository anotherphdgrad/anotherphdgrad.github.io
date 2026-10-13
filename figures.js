// Schematic "visual abstracts" for publication cards.
// Every figure is a 240x150 inline SVG styled by CSS variables, so it follows the light/dark theme.
// To use a real teaser figure instead, set `image: 'assets/figures/<file>.png'` on the paper in script.js.

const rng = (seed) => {
    let state = seed;
    return () => {
        state = (state * 9301 + 49297) % 233280;
        return state / 233280;
    };
};

const svg = (label, body) =>
    `<svg class="fig" viewBox="0 0 240 150" role="img" aria-label="${label}">${body}</svg>`;

const arrow = (x1, y1, x2, y2, cls = 'sm') => {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const head = (offset) => {
        const a = angle + offset;
        return `${(x2 - 6 * Math.cos(a)).toFixed(1)} ${(y2 - 6 * Math.sin(a)).toFixed(1)}`;
    };
    return `<path class="ln ${cls}" d="M${x1} ${y1} L${x2} ${y2}"/>` +
        `<path class="ln ${cls}" d="M${head(0.5)} L${x2} ${y2} L${head(-0.5)}"/>`;
};

const wave = (x0, x1, mid, amp, seed, step = 2) => {
    const rand = rng(seed);
    const points = [];
    for (let x = x0; x <= x1; x += step) {
        const p = (x - x0) / (x1 - x0);
        const envelope = Math.pow(Math.sin(Math.PI * p), 0.5) * (0.3 + 0.7 * Math.abs(Math.sin(p * 7 + seed)));
        points.push(`${x},${(mid + (rand() * 2 - 1) * amp * envelope).toFixed(1)}`);
    }
    return points.join(' ');
};

const ecg = (x0, x1, y0, period = 22, height = 16) => {
    let d = `M${x0} ${y0}`;
    for (let x = x0 + 6; x + 12 <= x1; x += period) {
        d += ` L${x} ${y0} L${x + 3} ${y0 - height} L${x + 6} ${y0 + height * 0.45} L${x + 9} ${y0}`;
    }
    return `${d} L${x1} ${y0}`;
};

const watch = (x, y) =>
    `<rect class="ln thin sm" x="${x + 8}" y="${y - 30}" width="20" height="96" rx="6"/>` +
    `<rect class="fs ln" x="${x}" y="${y}" width="36" height="36" rx="8"/>` +
    `<path class="ln s3 thin" d="M${x + 7} ${y + 20} L${x + 13} ${y + 20} L${x + 16} ${y + 11} L${x + 20} ${y + 27} L${x + 23} ${y + 18} L${x + 29} ${y + 18}"/>`;

const box = (x, y, w, h, label, cls = 's1', fill = 't1') =>
    `<rect class="ln ${cls} ${fill}" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>` +
    `<text x="${x + w / 2}" y="${y + h / 2 + 3}" text-anchor="middle">${label}</text>`;

const thermalBody = (uid) =>
    `<defs><linearGradient id="heat-${uid}" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" class="hot-1"/><stop offset="0.45" class="hot-2"/><stop offset="1" class="hot-3"/>` +
    `</linearGradient></defs>` +
    `<rect class="ln thin sm fs" x="30" y="14" width="96" height="126" rx="6"/>` +
    `<rect class="ln thin sm fs" x="24" y="18" width="96" height="126" rx="6"/>` +
    `<rect class="ln thin sm fs" x="18" y="22" width="96" height="124" rx="6"/>` +
    `<g opacity="0.9" fill="url(#heat-${uid})">` +
    `<ellipse cx="66" cy="56" rx="15" ry="18"/>` +
    `<path d="M58 72 h16 v8 h-16z"/>` +
    `<path d="M34 146 Q36 90 66 82 Q96 90 98 146 Z"/>` +
    `</g>`;

const Figures = {
    curvfed: () => {
        const clients = [[24, 12, 's2', 'f2'], [66, 22, 's4', 'f4'], [108, 32, 's3', 'f3']];
        let body = '<text x="12" y="14">CLIENTS</text><text x="150" y="14">GLOBAL MODEL</text>';
        clients.forEach(([y, w, stroke, fill]) => {
            body += `<rect class="ln thin sm" x="8" y="${y + 6}" width="11" height="18" rx="2.5"/>`;
            body += `<path class="ln ${stroke} thick" d="M${48 - w} ${y} Q48 ${y + 56} ${48 + w} ${y}"/>`;
            body += `<circle class="${fill}" cx="48" cy="${y + 28}" r="3"/>`;
        });
        body += '<text x="96" y="68">align</text>' + arrow(92, 76, 126, 76);
        body += '<path class="grid" d="M146 30 Q185 140 224 30"/><path class="grid" d="M152 22 Q185 130 218 22"/>';
        body += '<path class="ln s1 thick" d="M140 40 Q185 150 230 40"/>';
        body += '<circle class="f2" cx="178" cy="93.6" r="3.2"/><circle class="f4" cx="185" cy="95" r="3.2"/><circle class="f3" cx="192" cy="93.6" r="3.2"/>';
        body += '<text x="185" y="124" text-anchor="middle">flat &amp; shared curvature</text>';
        return svg('Clients with differently curved loss landscapes are aligned into one flat global minimum', body);
    },

    flare: () => {
        const rand = rng(7);
        let body = '<text x="12" y="14">NO DEMOGRAPHIC LABELS</text><text x="158" y="14">WORST GROUP</text>';
        for (let i = 0; i < 46; i++) {
            const x = 56 + (rand() + rand() - 1) * 48;
            const y = 66 + (rand() + rand() - 1) * 34;
            body += `<circle class="fm" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.4" opacity="0.7"/>`;
        }
        for (let i = 0; i < 11; i++) {
            const x = 112 + (rand() + rand() - 1) * 14;
            const y = 110 + (rand() + rand() - 1) * 12;
            body += `<circle class="f2" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6"/>`;
        }
        body += '<ellipse class="ln s2 dash" cx="112" cy="110" rx="24" ry="19"/>';
        body += '<text x="72" y="142">hidden subgroup</text>';
        body += '<path class="grid" d="M162 128 H230"/>';
        body += '<rect class="fl" x="170" y="50" width="20" height="78" rx="2"/>';
        body += '<rect class="f3" x="202" y="88" width="20" height="40" rx="2"/>';
        body += '<text x="180" y="142" text-anchor="middle">before</text><text x="212" y="142" text-anchor="middle">after</text>';
        return svg('Hidden underperforming subgroup discovered without demographic labels, and its error reduced', body);
    },

    thermalStress: (uid) => {
        let body = thermalBody(uid);
        body += '<text x="140" y="14">CO-TEACHING</text>';
        body += arrow(118, 76, 138, 76);
        body += box(142, 34, 50, 26, 'net A');
        body += box(142, 92, 50, 26, 'net B');
        body += '<path class="ln s1 dash thin" d="M160 60 L174 92 M174 60 L160 92"/>';
        body += arrow(194, 47, 214, 70) + arrow(194, 105, 214, 82);
        body += '<circle class="f2" cx="222" cy="76" r="7"/><text x="222" y="98" text-anchor="middle">stress</text>';
        return svg('Thermal video of the body feeds two co-teaching networks that detect stress', body);
    },

    thermalFM: (uid) => {
        let body = thermalBody(uid);
        body += '<rect class="ln s1 dash" x="46" y="34" width="40" height="44" rx="4"/>';
        body += '<rect class="ln s4 dash" x="40" y="96" width="52" height="34" rx="4"/>';
        body += '<text x="140" y="14">FROZEN FMs</text>';
        body += arrow(118, 76, 136, 76);
        body += box(140, 26, 46, 20, 'FM 1') + box(140, 66, 46, 20, 'FM 2') + box(140, 106, 46, 20, 'FM 3');
        body += '<path class="ln sm thin" d="M186 36 L204 76 M186 76 L204 76 M186 116 L204 76"/>';
        body += '<circle class="f2" cx="212" cy="76" r="7"/>';
        body += '<text x="212" y="100" text-anchor="middle">stress</text><text x="212" y="111" text-anchor="middle">craving</text>';
        return svg('Body-localized thermal evidence across regions is fused from frozen foundation-model encoders', body);
    },

    wearableCohort: () => {
        let body = watch(12, 58);
        body += '<rect class="t4" x="120" y="22" width="56" height="112"/><text x="148" y="16" text-anchor="middle">stress task</text>';
        body += '<path class="grid" d="M66 120 H230"/>';
        body += '<path class="ln s1 thick" d="M66 104 C100 104 112 102 124 92 S146 46 160 44 S190 70 230 84"/>';
        body += '<path class="ln s2 thick" d="M66 82 C100 82 112 80 124 76 S146 64 160 63 S190 72 230 76"/>';
        body += '<circle class="f1" cx="72" cy="140" r="3.5"/><text x="80" y="143">control</text>';
        body += '<circle class="f2" cx="136" cy="140" r="3.5"/><text x="144" y="143">OUD + methadone</text>';
        return svg('Wearable stress response during a stress task in patients with opioid use disorder versus healthy controls', body);
    },

    wearableHetero: () => {
        let body = watch(12, 58);
        body += '<text x="66" y="14">DIFFERENT PEOPLE</text>';
        body += '<path class="ln s1" d="M66 46 C86 40 96 30 112 34 S136 54 150 46"/>';
        body += '<path class="ln s5" d="M66 80 C86 84 96 66 112 70 S136 92 150 84"/>';
        body += '<path class="ln s3" d="M66 118 C86 110 96 104 112 112 S136 124 150 116"/>';
        body += arrow(158, 80, 182, 80);
        body += '<circle class="ln thin sm" cx="210" cy="80" r="22"/>';
        body += '<circle class="f1" cx="204" cy="76" r="4"/><circle class="f5" cx="214" cy="78" r="4"/><circle class="f3" cx="208" cy="86" r="4"/>';
        body += '<text x="210" y="118" text-anchor="middle">invariant</text>';
        return svg('Physiological signals from heterogeneous people mapped into a person-invariant stress representation', body);
    },

    wearableRetrace: () => {
        let body = watch(12, 58);
        body += arrow(54, 70, 74, 48) + arrow(54, 82, 74, 104);
        body += box(78, 30, 72, 28, 'stress enc.', 's3', 't3');
        body += box(78, 90, 72, 28, 'resilience', 's5', 't5');
        body += arrow(150, 44, 172, 68) + arrow(150, 104, 172, 84);
        body += '<circle class="ln s1 fs" cx="182" cy="76" r="10"/><path class="ln s1" d="M176 76 H188 M182 70 V82"/>';
        body += arrow(193, 76, 208, 76);
        body += '<circle class="f2" cx="218" cy="76" r="7"/><text x="218" y="98" text-anchor="middle">craving</text>';
        body += '<text x="182" y="58" text-anchor="middle">gate</text><text x="114" y="24" text-anchor="middle">frozen</text><text x="114" y="132" text-anchor="middle">trait proxies</text>';
        return svg('Frozen stress encoder and resilience-conditioned encoder are gated together to estimate craving', body);
    },

    wearableOlder: () => {
        let body = watch(12, 58);
        body += '<text x="70" y="14">ASSESSMENTS</text>';
        body += '<path class="grid" d="M66 120 H230"/>';
        [[82, 60], [134, 34], [186, 74]].forEach(([x, top], index) => {
            body += `<rect class="t3" x="${x}" y="${top}" width="30" height="${120 - top}" rx="3"/>`;
            body += `<text x="${x + 15}" y="136" text-anchor="middle">task ${index + 1}</text>`;
        });
        body += '<path class="ln s2" d="M97 72 L149 52 L201 92"/>';
        body += '<circle class="f2" cx="97" cy="72" r="3.5"/><circle class="f2" cx="149" cy="52" r="3.5"/><circle class="f2" cx="201" cy="92" r="3.5"/>';
        body += '<circle class="f2" cx="150" cy="16" r="3"/><text x="157" y="19">stress</text>';
        body += '<rect class="f3" x="192" y="13" width="7" height="7" rx="1"/><text x="203" y="19">engage</text>';
        return svg('Stress and engagement compared across cognitive assessments in older adults', body);
    },

    speechArousal: () => {
        let body = '<text x="12" y="14">SPEECH</text><text x="12" y="88">PHYSIOLOGY</text>';
        body += `<polyline class="ln s1 thin" points="${wave(12, 228, 48, 26, 3)}"/>`;
        body += `<path class="ln s2" d="${ecg(12, 228, 120, 24, 18)}"/>`;
        body += '<rect class="t4" x="96" y="20" width="58" height="122" rx="4"/>';
        body += '<text x="125" y="146" text-anchor="middle">arousal</text>';
        return svg('Synchronized speech and physiological arousal signals in children who stutter', body);
    },

    speechFluent: () => {
        let body = '<text x="12" y="14">SPEECH</text><text x="12" y="88">PHYSIOLOGY</text>';
        body += `<polyline class="ln s1 thin" points="${wave(12, 228, 48, 26, 11)}"/>`;
        body += `<path class="ln s2" d="${ecg(12, 228, 120, 24, 18)}"/>`;
        body += '<rect class="ln s3 dash" x="118" y="20" width="70" height="56" rx="4"/>';
        body += '<text x="153" y="90" text-anchor="middle">perceptually fluent?</text>';
        return svg('Physiology helps analyze speech segments that sound fluent in children who stutter', body);
    },

    speechFormant: () => {
        let body = '<text x="12" y="14">FORMANTS</text><text x="228" y="14" text-anchor="end">AGE·SEX NORM.</text>';
        body += '<path class="grid" d="M24 132 H228 M24 132 V22"/>';
        body += '<rect class="t2" x="96" y="22" width="60" height="110" rx="4"/>';
        body += '<path class="ln s1 thick" d="M28 112 C80 110 110 114 126 112 S180 110 224 112"/>';
        body += '<path class="ln s3 thick" d="M28 80 C80 78 104 72 126 70 S180 78 224 80"/>';
        body += '<path class="ln s2 thick" d="M28 40 C80 40 104 78 126 76 S180 42 224 40"/>';
        body += '<text x="12" y="115">F1</text><text x="12" y="83">F2</text><text x="12" y="43">F3</text>';
        body += '<text x="126" y="146" text-anchor="middle">/r/ (F3 dips)</text>';
        return svg('Formant tracks where the third formant drops during a rhotic /r/ sound', body);
    },

    speechCorpus: () => {
        let body = '<text x="12" y="14">CHILD /r/ CORPUS</text>';
        [[18, 0], [28, 1], [38, 2]].forEach(([offset, index]) => {
            const y = 22 + offset * 0.7 + index * 26;
            body += `<rect class="fs ln thin sm" x="${14 + offset}" y="${y}" width="128" height="36" rx="5"/>`;
            body += `<polyline class="ln s1 thin" points="${wave(22 + offset, 134 + offset, y + 18, 12, 5 + index)}"/>`;
        });
        body += '<text x="208" y="52" text-anchor="middle">rhotic</text><circle class="f3" cx="208" cy="34" r="6"/>';
        body += '<text x="208" y="110" text-anchor="middle">derhotic</text><circle class="f2" cx="208" cy="92" r="6"/>';
        return svg('Open-access corpus of child speech clips labeled for /r/ classification', body);
    },

    speechPrivacy: () => {
        let body = '<text x="12" y="14">VOICE</text><text x="104" y="14">PERTURB</text>';
        body += `<polyline class="ln s1 thin" points="${wave(12, 84, 76, 30, 2)}"/>`;
        body += '<path class="ln sm" d="M92 76 h8 M96 72 v8"/>';
        body += `<polyline class="ln s2 thin" points="${wave(106, 144, 76, 8, 9, 1.5)}"/>`;
        body += arrow(150, 76, 168, 76);
        body += '<rect class="ln fs" x="174" y="40" width="34" height="76" rx="12"/>';
        body += '<path class="grid" d="M180 56 H202 M180 64 H202 M180 72 H202"/>';
        body += '<circle class="f1" cx="191" cy="100" r="4"/>';
        body += '<rect class="ln s2 fs" x="164" y="12" width="62" height="20" rx="6"/><text x="195" y="25" text-anchor="middle">emotion: ?</text>';
        body += '<text x="191" y="134" text-anchor="middle">evaded</text>';
        return svg('Small acoustic perturbations stop smart speakers from detecting emotion in real time', body);
    },

    crop: () => {
        let body = '<text x="12" y="14">PERSONALIZED MODEL</text><text x="144" y="14">UNSEEN CONTEXTS</text>';
        body += '<circle class="ln s1 t1" cx="58" cy="78" r="26"/>';
        body += '<circle class="fi" cx="58" cy="70" r="6"/><path class="fi" d="M46 92 Q58 76 70 92 Z"/>';
        [['quiet', 26], ['noisy', 64], ['new room', 102]].forEach(([label, y]) => {
            body += arrow(86, 78, 136, y + 12);
            body += `<rect class="fs ln thin sm" x="140" y="${y}" width="88" height="24" rx="5"/>`;
            body += `<text x="148" y="${y + 15}">${label}</text>`;
            body += `<rect class="f3" x="194" y="${y + 8}" width="26" height="8" rx="2"/>`;
        });
        return svg('One personalized model stays accurate across unseen contexts', body);
    },

    uwb: () => {
        let body = '<text x="12" y="14">LAB &#8594; BARN</text>';
        body += '<path class="ln thin sm" d="M18 62 L120 24 L222 62 V140 H18 Z"/>';
        body += '<path class="grid" d="M38 72 L128 98 M202 72 L128 98 M38 130 L128 98 M202 130 L128 98"/>';
        [[38, 72], [202, 72], [38, 130], [202, 130]].forEach(([x, y]) => {
            body += `<path class="f1" d="M${x} ${y - 6} L${x + 6} ${y + 5} L${x - 6} ${y + 5} Z"/>`;
        });
        body += '<path class="ln s1 dash" d="M100 64 Q138 92 124 138"/>';
        body += '<path class="ln s3 dash" d="M190 70 Q128 100 72 118"/>';
        body += '<circle class="ln s2" cx="128" cy="98" r="9"/><circle class="f2" cx="128" cy="98" r="4"/>';
        body += '<text x="140" y="124">tag</text><text x="52" y="54">anchors</text>';
        return svg('UWB anchors localize a cattle tag by time-difference-of-arrival inside a barn', body);
    },

    imuLeak: () => {
        let body = '<text x="12" y="14">0-PERMISSION IMU</text>';
        body += '<rect class="ln fs" x="20" y="26" width="46" height="96" rx="9"/><path class="grid" d="M36 32 H50"/>';
        body += arrow(43, 74, 76, 74, 's1') + arrow(43, 74, 43, 40, 's3') + arrow(43, 74, 24, 96, 's2');
        body += `<polyline class="ln s1 thin" points="${wave(88, 160, 46, 10, 4)}"/>`;
        body += `<polyline class="ln s3 thin" points="${wave(88, 160, 76, 10, 8)}"/>`;
        body += `<polyline class="ln s2 thin" points="${wave(88, 160, 106, 10, 12)}"/>`;
        body += arrow(166, 76, 184, 76, 's5');
        body += '<circle class="ln s5 t5" cx="206" cy="76" r="18"/>';
        body += '<circle class="f5" cx="200" cy="71" r="2"/><circle class="f5" cx="212" cy="71" r="2"/><path class="ln s5" d="M199 85 Q206 79 213 85"/>';
        body += '<text x="206" y="112" text-anchor="middle">mental health</text><text x="206" y="123" text-anchor="middle">leaked</text>';
        return svg('Smartphone motion sensors that need no permission leak mental-health information', body);
    },

    grace: () => {
        let body = '<text x="12" y="14">32-BIT &#8594; 4-BIT</text><text x="150" y="14">PER-GROUP ACC.</text>';
        body += '<path class="grid" d="M14 128 H128"/>';
        body += '<path class="ln s1" d="M14 124 C40 124 50 40 70 40 S100 124 128 124"/>';
        body += '<path class="ln s2" d="M14 124 H34 V112 H46 V72 H58 V44 H82 V72 H94 V112 H106 V124 H128"/>';
        body += '<path class="grid" d="M150 128 H230"/>';
        body += '<rect class="fl" x="156" y="74" width="14" height="54" rx="2"/><rect class="f3" x="172" y="48" width="14" height="80" rx="2"/>';
        body += '<rect class="fl" x="200" y="52" width="14" height="76" rx="2"/><rect class="f3" x="216" y="50" width="14" height="78" rx="2"/>';
        body += '<path class="ln s3 dash thin" d="M168 48 H232"/>';
        body += '<text x="171" y="142" text-anchor="middle">group A</text><text x="215" y="142" text-anchor="middle">group B</text>';
        return svg('Low-bit quantized wearable foundation model keeps accuracy balanced across groups', body);
    },

    acorn: () => {
        let body = '<text x="12" y="14">SPEAKER &#8594; IMU</text><text x="104" y="14">ACOUSTIC CONCEPTS</text>';
        body += '<rect class="ln fs" x="10" y="64" width="8" height="20" rx="1.5"/><path class="ln fs" d="M18 64 L30 54 V94 L18 84 Z"/>';
        body += '<path class="ln s4 thin" d="M35 66 Q40 74 35 82 M40 60 Q47 74 40 88"/>';
        body += '<rect class="ln fs" x="52" y="50" width="20" height="48" rx="4"/><path class="grid" d="M58 55 H66"/>';
        body += '<path class="ln s1 thin" d="M76 64 l3 4 l-3 4 l3 4 l-3 4 l3 4"/>';
        body += '<path class="ln s1 t1" d="M84 60 L96 53 V95 L84 88 Z"/>';
        const concepts = [['loudness', 0.9, true], ['pitch', 0.7, true], ['voice q.', 0.35, false], ['spectral', 0.6, true]];
        concepts.forEach(([label, value, selected], index) => {
            const y = 24 + index * 24;
            const opacity = selected ? 1 : 0.4;
            body += `<path class="ln thin sm" d="M96 74 L104 ${y + 8}" opacity="${opacity}"/>`;
            body += `<g opacity="${opacity}"><rect class="ln thin sm fs" x="104" y="${y}" width="76" height="16" rx="4"/>`;
            body += `<text x="109" y="${y + 11}">${label}</text>`;
            body += `<rect class="fl" x="156" y="${y + 5}" width="18" height="6" rx="2"/>`;
            body += `<rect class="${selected ? 'f1' : 'fm'}" x="156" y="${y + 5}" width="${(18 * value).toFixed(1)}" height="6" rx="2"/></g>`;
            if (selected) body += `<path class="ln thin s1" d="M180 ${y + 8} L206 66"/>`;
        });
        body += '<path class="ln sm dash thin" d="M90 92 Q91 132 150 132 Q206 132 213 75"/>';
        body += '<text x="150" y="145" text-anchor="middle">residual embedding</text>';
        body += '<circle class="f2" cx="214" cy="66" r="8"/><text x="214" y="50" text-anchor="middle">task</text>';
        return svg('Phone motion sensors recover named acoustic concepts such as loudness and pitch; selected concepts plus a residual embedding predict the task, such as emotion or dementia', body);
    },

    crosscue: () => {
        let body = '<text x="12" y="14">CAMERA</text>';
        body += '<rect class="ln fs" x="16" y="62" width="44" height="32" rx="6"/><circle class="ln s1" cx="38" cy="78" r="9"/><circle class="f1" cx="38" cy="78" r="3"/>';
        body += arrow(64, 78, 96, 78);
        body += box(100, 62, 60, 32, 'model');
        body += arrow(162, 78, 192, 78);
        body += '<circle class="f2" cx="204" cy="78" r="8"/><text x="204" y="104" text-anchor="middle">stress</text>';
        body += '<rect class="ln s4 dash fs" x="110" y="12" width="40" height="22" rx="5"/><text x="130" y="26" text-anchor="middle">IMU</text>';
        body += '<path class="ln s4 dash" d="M130 36 V58"/>';
        body += '<text x="130" y="122" text-anchor="middle">IMU supervision at</text><text x="130" y="133" text-anchor="middle">training time only</text>';
        return svg('IMU signals supervise a contactless stress model during training only', body);
    }
};

window.renderFigure = (name, uid) => (Figures[name] ? Figures[name](uid) : '');

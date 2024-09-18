// script.js

document.addEventListener('DOMContentLoaded', () => {
    const publications = [
        { title: 'Fairness Without Demographics in Human-Centered Federated Learning', link: 'https://arxiv.org/abs/2404.19725' },
        { title: 'Reading Between the Heat', link: 'https://doi.org/10.1145/3631441' },
        // Add more publications here as needed
    ];

    const publicationsList = document.getElementById('publications-list');

    publications.forEach(pub => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = pub.link;
        link.textContent = pub.title;
        listItem.appendChild(link);
        publicationsList.appendChild(listItem);
    });
});

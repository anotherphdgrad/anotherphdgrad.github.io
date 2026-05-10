const focusAreas = [
    {
        title: 'Trustworthy Human Sensing',
        text: 'Machine learning methods that generalize across heterogeneous wearable, acoustic, thermal, RGB, IMU, and depth signals.'
    },
    {
        title: 'Fairness and Federated Learning',
        text: 'Fairness-enhancing mechanisms for human-centric federated learning, including work with loss landscape and curvature signals.'
    },
    {
        title: 'Robust Machine Learning',
        text: 'Modeling approaches that emphasize reliability, generalization, and calibrated interpretation across noisy real-world sensing settings.'
    },
    {
        title: 'Interpretable Affective Computing',
        text: 'Explainable models for stress, arousal, stuttering, opioid use disorder, and psycho-physiological state estimation.'
    }
];

const publicationGroups = [
    {
        theme: 'Trustworthy and Robust Human Sensing',
        papers: [
            {
                status: 'Accepted - IMWUT 2026',
                title: 'CurvFed: Curvature-Aligned Federated Learning',
                authors: 'Harshit Sharma*, Shaily Roy*, and Asif Salekin',
                venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
                venueNote: "'csrankings' listed Top Conference",
                link: 'https://arxiv.org/abs/2404.19725'
            },
            {
                status: 'Published - IMWUT 2025',
                title: 'Human Heterogeneity Invariant Stress Sensing',
                authors: 'Yi Xiao, Harshit Sharma, Sawinder Kaur, Dessa Bergen-Cico, and Asif Salekin',
                venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
                venueNote: "'csrankings' listed Top Conference",
                link: 'https://dl.acm.org/doi/abs/10.1145/3749465'
            },
            {
                status: 'Published - IMWUT 2025',
                title: 'CRoP: Context-wise Robust Static Human-Sensing Personalization',
                authors: 'Sawinder Kaur, Avery Gump, Yi Xiao, Jingyu Xin, Harshit Sharma, Nina R. Benway, Jonathan L. Preston, and Asif Salekin',
                venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
                venueNote: "'csrankings' listed Top Conference",
                link: 'https://dl.acm.org/doi/abs/10.1145/3729483'
            }
        ]
    },
    {
        theme: 'Speech, Affect, and Clinical Sensing',
        papers: [
            {
                status: 'Published - ICCPS 2025',
                title: 'Psychophysiology-aided Perceptually Fluent Speech Analysis of Children Who Stutter',
                authors: 'Yi Xiao, Harshit Sharma, Victoria Tumanova, and Asif Salekin',
                venue: 'ACM/IEEE International Conference on Cyber-Physical Systems',
                link: 'https://dl.acm.org/doi/abs/10.1145/3716550.3722019'
            },
            {
                status: 'Published - IMWUT 2022',
                title: 'Psychophysiological Arousal in Young Children Who Stutter: An Interpretable AI Approach',
                authors: 'Harshit Sharma, Yi Xiao, Victoria Tumanova, and Asif Salekin',
                venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
                venueNote: "'csrankings' listed Top Conference",
                link: 'https://doi.org/10.1145/3550326'
            },
            {
                status: 'Published - INTERSPEECH 2023',
                title: 'Classifying Rhoticity of /r/ in Speech Sound Disorder Using Age- and Sex-Normalized Formants',
                authors: 'Nina R. Benway, Jonathan L. Preston, Asif Salekin, Yi Xiao, Harshit Sharma, and Tara McAllister',
                venue: 'INTERSPEECH',
                venueNote: 'Core A Conference, 2023',
                link: 'https://arxiv.org/abs/2305.16111'
            },
            {
                status: 'Published - INTERSPEECH 2022',
                title: 'PERCEPT-R: An Open-access American English Child/Clinical Speech Corpus Specialized for the Audio Classification of /r/ Sound',
                authors: 'Nina R. Benway, Jonathan Preston, Elaine Hitchcock, Asif Salekin, Harshit Sharma, and Tara McAllister',
                venue: 'INTERSPEECH',
                venueNote: 'Core A Conference, 2022',
                link: 'https://doi.org/10.31219/osf.io/8zdsg'
            }
        ]
    },
    {
        theme: 'Multimodal and Environmental Sensing Systems',
        papers: [
            {
                status: 'Accepted - IEEE DCOSS-IoT 2026',
                title: 'From Lab to Farm: Characterizing UWB-Based TDOA Localization Reliability for Dairy Cattle Monitoring',
                authors: 'Harshit Sharma, Hao Zhang, Jakub Krzych, Lawrence Jones, Asif Salekin, and Sucheta Soundarajan',
                venue: 'IEEE International Conference on Distributed Computing in Smart Systems and the Internet of Things',
                venueNote: 'Core B Conference, 2026',
                link: ''
            },
            {
                status: 'Published - IMWUT 2023',
                title: 'Reading Between the Heat: Co-Teaching Body Thermal Signatures for Non-intrusive Stress Detection',
                authors: 'Yi Xiao, Harshit Sharma, Zhongyang Zhang, Dessa Bergen-Cico, Tauhidur Rahman, and Asif Salekin',
                venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
                venueNote: "'csrankings' listed Top Conference",
                link: 'https://doi.org/10.1145/3631441'
            },
            {
                status: 'Published - IMWUT 2023',
                title: 'Privacy Against Real-Time Speech Emotion Detection via Acoustic Adversarial Evasion of Machine Learning',
                authors: 'Brian Testa, Yi Xiao, Harshit Sharma, Avery Gump, and Asif Salekin',
                venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
                venueNote: "'csrankings' listed Top Conference",
                link: 'https://doi.org/10.1145/3610887'
            }
        ]
    },
    {
        theme: 'Earlier Work',
        papers: [
            {
                status: 'Published - ICAESMT 2019',
                title: 'An Empirical Study on the Issues of Traditional Defect Life Cycle in Agile Model',
                authors: 'Arun Prakash Agrawal, Ankur Choudhary, and Harshit Sharma',
                venue: 'International Conference on Advances in Engineering Science Management & Technology',
                link: 'https://ssrn.com/abstract=3402842'
            }
        ]
    }
];

const experiences = [
    {
        role: 'Graduate Research Associate - Fulton Fellowship',
        organization: 'School of Computing and Augmented Intelligence, Arizona State University',
        dates: '2024-Present',
        details: [
            'Build AI-driven models for human-centric data in the Ubiquitous and Intelligent Sensing Lab.',
            'Research diffusion-based acoustic-articulatory representation learning, fairness-aware federated learning, and robust multimodal representation learning.',
            'Work with UWB sensors, point clouds, physiological signals, IMU data, thermal imagery, RGB imagery, and speech features.'
        ]
    },
    {
        role: 'Research Assistant',
        organization: 'Syracuse University, College of Engineering and Computer Science',
        dates: '2020-2024',
        details: [
            'Developed machine learning systems for ubiquitous sensing, stress physiology, speech analysis, and trustworthy affective computing.',
            'Designed model evaluation workflows with explainability tools including SHAP, LIME, and related interpretability methods.'
        ]
    },
    {
        role: 'Research Assistant',
        organization: 'M.I.N.D Lab, Syracuse University',
        dates: '2019',
        details: [
            'Built a NodeJS and Neo4j backend for collecting and analyzing physiological data in mindfulness interventions for AR/VR settings.'
        ]
    }
];

const skillGroups = [
    {
        title: 'Machine Learning',
        items: ['PyTorch', 'Keras', 'scikit-learn', 'Optuna', 'SHAP', 'LIME', 'Captum', 'AI Fairness 360', 'Flower']
    },
    {
        title: 'Human Sensing',
        items: ['Wearables', 'Empatica E4', 'Biopac', 'UWB sensing', 'Point clouds', 'Thermal/RGB imaging', 'IMU', 'Audio features']
    },
    {
        title: 'Programming',
        items: ['Python', 'Julia', 'Java', 'C++', 'NodeJS', 'Android', 'SQL']
    },
    {
        title: 'Data and Signal Tools',
        items: ['Pandas', 'NumPy', 'Matplotlib', 'Librosa', 'Praat', 'PraatIO', 'MFCCs', 'Formant analysis']
    }
];

const awards = [
    { text: 'Fulton Fellowship Award, $71,500', year: '2024-2025', link: '' },
    { text: 'Lambda Research Grant Program, $500 cloud credits', year: '2026-2027', link: '' },
    { text: 'SUN Award, Arizona State University', year: '2025', link: 'https://recognition.asu.edu/Award/42c50349-d81d-4d42-9237-303abce922c2' },
    { text: 'Siemens MakeIT Real Hackathon, 1st Runner-up', year: '2017', link: 'https://www.youtube.com/watch?v=W1WmRsRgTjo' }
];

const service = [
    'Program Committee Artifact Evaluation, SenSys 2025',
    'Reviewer: IMWUT, CHI, HRI, OzCHI, ECIS, ISWC, ETRA',
    'Student Volunteer, UbiComp 2022',
    'Academic Program Senator, Graduate Student Organization, Syracuse University'
];

const news = [
    {
        text: 'Syracuse University coverage of AI and mindfulness-based interventions for opioid use disorder',
        link: 'https://www.syracuse.edu/stories/falk-addiction-studies-opioid-treatment/'
    },
    {
        text: 'Syracuse University coverage of privacy against real-time speech emotion detection',
        link: 'https://ecs.syracuse.edu/about/news/smart-speakers-smarter-protection'
    }
];

const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
};

const createLinkOrText = (item) => {
    if (!item.link) {
        return document.createTextNode(item.text || item.title);
    }

    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.text || item.title;
    return link;
};

const createAuthors = (authors) => {
    const paragraph = createElement('p', 'authors');
    const name = 'Harshit Sharma';
    const parts = authors.split(name);

    parts.forEach((part, index) => {
        if (part) paragraph.append(document.createTextNode(part));

        if (index < parts.length - 1) {
            paragraph.append(createElement('strong', 'author-self', name));
        }
    });

    return paragraph;
};

const createVenueTags = (publication) => {
    if (!publication.venueNote) return null;

    const tags = createElement('div', 'venue-tags');
    tags.append(createElement('span', 'venue-tag', publication.venueNote));
    return tags;
};

const renderFocusAreas = () => {
    const container = document.getElementById('focus-grid');
    focusAreas.forEach((area) => {
        const card = createElement('article', 'focus-card');
        card.append(createElement('h3', '', area.title));
        card.append(createElement('p', '', area.text));
        container.append(card);
    });
};

const renderPublications = () => {
    const container = document.getElementById('publication-list');
    publicationGroups.forEach((group) => {
        const section = createElement('section', 'publication-theme');
        section.append(createElement('h3', 'publication-theme-title', group.theme));

        const papers = createElement('div', 'publication-theme-list');
        group.papers.forEach((publication) => {
            const article = createElement('article', 'publication-card');
            article.append(createElement('p', 'status-label', publication.status));

            const title = createElement('h4');
            title.append(createLinkOrText(publication));
            article.append(title);

            article.append(createAuthors(publication.authors));
            article.append(createElement('p', 'venue', publication.venue));
            const venueTags = createVenueTags(publication);
            if (venueTags) article.append(venueTags);
            papers.append(article);
        });

        section.append(papers);
        container.append(section);
    });
};

const renderExperience = () => {
    const container = document.getElementById('experience-list');
    experiences.forEach((experience) => {
        const item = createElement('article', 'timeline-item');
        const header = createElement('div', 'timeline-header');
        header.append(createElement('h3', '', experience.role));
        header.append(createElement('span', '', experience.dates));
        item.append(header);
        item.append(createElement('p', 'organization', experience.organization));

        const list = document.createElement('ul');
        experience.details.forEach((detail) => {
            list.append(createElement('li', '', detail));
        });
        item.append(list);
        container.append(item);
    });
};

const renderSkills = () => {
    const container = document.getElementById('skill-grid');
    skillGroups.forEach((group) => {
        const card = createElement('section', 'skill-card');
        card.append(createElement('h3', '', group.title));
        const tags = createElement('div', 'tag-list');
        group.items.forEach((item) => tags.append(createElement('span', '', item)));
        card.append(tags);
        container.append(card);
    });
};

const renderAwards = () => {
    const container = document.getElementById('award-list');
    awards.forEach((award) => {
        const item = document.createElement('li');
        const body = createElement('span');
        body.append(createLinkOrText(award));
        item.append(body);
        item.append(createElement('strong', '', award.year));
        container.append(item);
    });
};

const renderService = () => {
    const container = document.getElementById('service-list');
    service.forEach((item) => container.append(createElement('li', '', item)));
};

const renderNews = () => {
    const container = document.getElementById('news-list');
    news.forEach((story) => {
        const item = document.createElement('li');
        item.append(createLinkOrText(story));
        container.append(item);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    renderFocusAreas();
    renderPublications();
    renderExperience();
    renderSkills();
    renderAwards();
    renderService();
    renderNews();
});

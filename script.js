// ---------- Content ----------

const news = [
    { date: 'Sep 2026', html: 'Clinical study on wearable stress physiology in patients with opioid use disorder treated with methadone published in <em>Drug and Alcohol Dependence Reports</em>.' },
    { date: 'Aug 2026', html: 'Two new preprints on arXiv: <a href="#pub-fable-therm">FABLE-Therm</a> (contactless thermal stress and craving sensing) and <a href="#pub-retrace">RETRACE</a> (resilience-guided craving estimation from wearables).' },
    { date: 'Jun 2026', html: 'Joined <strong>Optum, UnitedHealth Group</strong> as a Research Scientist Intern (AI/ML), working on language models over longitudinal EHR claims.' },
    { date: 'Jun 2026', html: '<a href="#pub-curvfed">CurvFed</a>, curvature-aligned federated learning for fairness without demographics, published in ACM IMWUT.' },
    { date: 'Jun 2026', html: 'Poster on UWB localization reliability for dairy cattle monitoring at IEEE DCOSS-IoT 2026.' },
    { date: 'Mar 2026', html: 'Preprint on <a href="#pub-flare">ethical fairness without known attributes</a> released on arXiv.' }
];

const pillars = [
    {
        title: 'Trustworthy ML: fairness, privacy & federated learning',
        color: 'var(--c1)',
        icon: '<path d="M12 3 4 6v6c0 4.4 3.4 8.3 8 9 4.6-.7 8-4.6 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
        text: 'Fairness when demographic labels are unavailable, fairness-aware federated learning and low-bit quantization, and defenses against attacks that infer emotion or mental-health state from speech and motion sensors.',
        papers: [['curvfed', 'CurvFed'], ['flare', 'Flare'], ['grace', 'GRACE'], ['speech-privacy', 'Speech privacy'], ['imu-leakage', 'IMU leakage']]
    },
    {
        title: 'Health sensing in the wild',
        color: 'var(--c4)',
        icon: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
        text: 'Stress, craving, and arousal detection from wearables, thermal video, and radar in clinical populations such as patients with opioid use disorder, using foundation-model adaptation and personalization when labeled data is scarce.',
        papers: [['fable-therm', 'FABLE-Therm'], ['retrace', 'RETRACE'], ['crosscue', 'CrossCue'], ['thermal-coteach', 'Thermal co-teaching'], ['hetero', 'Heterogeneity-invariant'], ['crop', 'CRoP']]
    },
    {
        title: 'Clinical language & speech',
        color: 'var(--c3)',
        icon: '<path d="M4 5h16v10H9l-5 4V5Z"/><path d="M8 9h8M8 12h5"/>',
        text: 'Language models over longitudinal EHR claims (TrajNote, built at Optum) and interpretable clinical speech analysis for children who stutter and children with speech sound disorders.',
        papers: [['acorn', 'ACORN'], ['stutter-imwut', 'Arousal in stuttering'], ['stutter-iccps', 'Fluent speech'], ['percept-r', 'PERCEPT-R'], ['rhoticity', 'Rhoticity']]
    }
];

const topics = [
    { key: 'all', label: 'All' },
    { key: 'fairness', label: 'Fairness & FL' },
    { key: 'privacy', label: 'Privacy' },
    { key: 'stress', label: 'Stress & addiction' },
    { key: 'adaptation', label: 'FMs & personalization' },
    { key: 'speech', label: 'Clinical speech' },
    { key: 'systems', label: 'Sensing systems' }
];

const IMWUT = 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)';

const publicationGroups = [
    {
        title: 'Preprints & ongoing work',
        papers: [
            {
                id: 'grace',
                title: 'GRACE: Fair Low-Bit Quantization of a Wearable Foundation Model',
                authors: 'Harshit Sharma, Asif Salekin',
                firstAuthor: true,
                topics: ['fairness', 'adaptation'],
                figure: 'grace',
                tldr: 'Low-bit quantization of a wearable foundation model for on-device deployment that keeps performance fair across user groups.'
            },
            {
                id: 'crosscue',
                title: 'CrossCue: Training-Time IMU Supervision for Contactless Stress Detection',
                authors: 'Harshit Sharma, Yi Xiao, Asif Salekin',
                firstAuthor: true,
                topics: ['stress'],
                figure: 'crosscue',
                tldr: 'Uses wearable IMU signals as supervision only during training, so the deployed contactless stress detector needs no wearable.'
            },
            {
                id: 'acorn',
                title: 'ACORN: Recovering Acoustic Concepts from Smartphone Motion Sensors for Interpretable Paralinguistic Sensing',
                authors: 'Harshit Sharma, Nahin Kumar Dey, Faysal Hossain Shezan, Asif Salekin',
                firstAuthor: true,
                topics: ['privacy', 'speech'],
                figure: 'acorn',
                tldr: 'Recovers named acoustic concepts (loudness, pitch, voice quality, spectral properties) from smartphone motion sensors alone, then predicts paralinguistic tasks through the informative concepts plus a residual embedding. Reaches 0.84 macro F1 on emotion recognition and 0.79 on dementia detection with unseen speakers.'
            },
            {
                id: 'flare',
                title: 'Ethical Fairness in Ubiquitous Health Sensing without Known Attributes',
                authors: 'Shaily Roy, Harshit Sharma, Daniel A. Adler, Srijan Sen, Tanzeem Choudhury, Asif Salekin',
                venue: 'arXiv preprint arXiv:2603.13373, 2026',
                badge: 'arXiv 2026',
                status: 'review',
                topics: ['fairness'],
                figure: 'flare',
                tldr: 'Flare uses Fisher information to find hidden underperforming subgroups and improves them with do-no-harm optimization. The paper also introduces BHE, a metric suite for ethical fairness (beneficence, harm avoidance, equity).',
                scholarTitle: 'Ethical Fairness without Demographics in Human-Centered AI',
                links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2603.13373' }]
            },
            {
                id: 'fable-therm',
                title: 'Representation Is Not Enough: Body-Localized Thermal Evidence for Contactless Stress and Craving Sensing in Opioid Use Disorder',
                authors: 'Sachin Deb, Harshit Sharma, Asif Salekin',
                venue: 'arXiv preprint arXiv:2608.16087, 2026',
                badge: 'arXiv 2026',
                status: 'review',
                topics: ['stress', 'adaptation'],
                figure: 'thermalFM',
                tldr: 'FABLE-Therm fuses frozen foundation-model encoders while keeping body-localized thermal evidence. It reaches 0.938 AUROC on held-out participants and gives the first evidence that craving can be recovered from contactless thermal video.',
                links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2608.16087' }]
            },
            {
                id: 'retrace',
                title: 'RETRACE: Resilience-Guided Trait-Conditioned Craving Estimation from Wearable Physiology in Opioid Use Disorder',
                authors: 'Yi Xiao, Harshit Sharma, Dessa Bergen-Cico, Asif Salekin',
                venue: 'arXiv preprint arXiv:2608.14947, 2026',
                badge: 'arXiv 2026',
                status: 'review',
                topics: ['stress', 'adaptation'],
                figure: 'wearableRetrace',
                tldr: 'Pairs a frozen stress-pretrained encoder with a resilience-conditioned craving encoder, personalizing craving detection without target-user craving labels. Improves on the strongest baseline by up to 7% absolute.',
                links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2608.14947' }]
            },
            {
                id: 'imu-leakage',
                title: 'Mental Health Leakage from Zero-Permission Inertial Motion Sensors',
                authors: 'Nahin Kumar Dey, Harshit Sharma, Yi Xiao, Faysal Hossain Shezan, Asif Salekin',
                badge: 'Under review',
                status: 'review',
                topics: ['privacy'],
                figure: 'imuLeak',
                tldr: 'Shows that smartphone motion sensors, which apps can read without any permission, leak mental-health information.'
            }
        ]
    },
    {
        title: 'Peer-reviewed',
        papers: [
            {
                id: 'curvfed',
                title: 'CurvFed: Curvature-Aligned Federated Learning for Fairness without Demographics',
                authors: 'Harshit Sharma*, Shaily Roy*, Asif Salekin',
                venue: `${IMWUT}, 10(2), 2026`,
                badge: 'ACM IMWUT 2026',
                rank: "'csrankings' listed Top Conference",
                firstAuthor: true,
                topics: ['fairness'],
                figure: 'curvfed',
                tldr: 'Aligns loss-landscape curvature across clients so federated models are fair across groups even when demographic labels are unavailable.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.1145/3810232' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2404.19725' }
                ]
            },
            {
                id: 'uwb-farm',
                title: 'From Lab to Farm: Characterizing UWB-Based TDOA Localization Reliability for Dairy Cattle Monitoring',
                authors: 'Harshit Sharma, Hao Zhang, Lawrence Jones, Jakub Krzych, Asif Salekin, Sucheta Soundarajan',
                venue: 'IEEE International Conference on Distributed Computing in Smart Systems and the Internet of Things (DCOSS-IoT), 2026',
                badge: 'IEEE DCOSS-IoT 2026',
                rank: 'Core B Conference, 2026',
                extraBadge: 'Poster',
                firstAuthor: true,
                topics: ['systems'],
                figure: 'uwb',
                tldr: 'Characterizes how reliable UWB time-difference-of-arrival localization is when it moves from controlled lab conditions to a working dairy barn.',
                links: [{ label: 'DOI', url: 'https://doi.org/10.1109/DCOSS-IoT69657.2026.00059' }]
            },
            {
                id: 'oud-methadone',
                title: 'Wearable-Derived Measures of Stress Physiology in Patients with Opioid Use Disorder Treated with Methadone: A Stress-Task Study in a Real-World Clinic with Healthy Controls',
                authors: 'Tyler S. Oesterle, Yi Xiao, Nicholas L. Bormann, Dessa K. Bergen-Cico, Benjamin Lai, Harshit Sharma, Asif Salekin',
                venue: 'Drug and Alcohol Dependence Reports, 20, 2026',
                badge: 'Medical journal',
                journal: true,
                topics: ['stress'],
                figure: 'wearableCohort',
                tldr: 'Clinical study in a real-world methadone clinic comparing wearable-measured stress physiology during a stress task between patients with opioid use disorder and healthy controls.',
                links: [{ label: 'DOI', url: 'https://doi.org/10.1016/j.dadr.2026.100457' }]
            },
            {
                id: 'older-adults',
                title: 'Comparing Task-Related Stress and Engagement Across Assessments in Older Adults: An Exploratory Study for Cognitive Screening',
                authors: 'Bernardo Villa-Sánchez, Alexandra M. Reed, Harshit Sharma, Asif Salekin, Brianna Branson, Elyana Chacon, Diane E. Adamo, Sydney Y. Schaefer',
                venue: 'Physical & Occupational Therapy in Geriatrics, 2026',
                badge: 'Medical journal',
                journal: true,
                topics: ['stress'],
                figure: 'wearableOlder',
                tldr: 'Exploratory study comparing stress and engagement across cognitive assessments in older adults, to inform how cognitive screening is designed.',
                links: [{ label: 'DOI', url: 'https://doi.org/10.1080/02703181.2026.2715409' }]
            },
            {
                id: 'hetero',
                title: 'Human Heterogeneity Invariant Stress Sensing',
                authors: 'Yi Xiao, Harshit Sharma, Sawinder Kaur, Dessa Bergen-Cico, Asif Salekin',
                venue: `${IMWUT}, 9(3), 2025`,
                badge: 'ACM IMWUT 2025',
                rank: "'csrankings' listed Top Conference",
                topics: ['stress', 'adaptation'],
                figure: 'wearableHetero',
                tldr: 'Learns stress representations that stay consistent across person-to-person physiological differences, so models generalize to people they were not trained on.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.1145/3749465' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2506.02256' }
                ]
            },
            {
                id: 'crop',
                title: 'CRoP: Context-wise Robust Static Human-Sensing Personalization',
                authors: 'Sawinder Kaur, Avery Gump, Yi Xiao, Jingyu Xin, Harshit Sharma, Nina R. Benway, Jonathan L. Preston, Asif Salekin',
                venue: `${IMWUT}, 9(2), 2025`,
                badge: 'ACM IMWUT 2025',
                rank: "'csrankings' listed Top Conference",
                topics: ['adaptation'],
                figure: 'crop',
                tldr: 'Personalizes human-sensing models from limited user data so they stay accurate in contexts the user never provided data for.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.1145/3729483' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2409.17994' }
                ]
            },
            {
                id: 'stutter-iccps',
                title: 'Psychophysiology-Aided Perceptually Fluent Speech Analysis of Children Who Stutter',
                authors: 'Yi Xiao, Harshit Sharma, Victoria Tumanova, Asif Salekin',
                venue: 'ACM/IEEE International Conference on Cyber-Physical Systems (ICCPS, CPS-IoT Week), 2025',
                badge: 'ICCPS 2025',
                topics: ['speech'],
                figure: 'speechFluent',
                tldr: 'Uses physiological signals to analyze speech from children who stutter that listeners perceive as fluent.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.1145/3716550.3722019' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2211.09089' }
                ]
            },
            {
                id: 'thermal-coteach',
                title: 'Reading Between the Heat: Co-Teaching Body Thermal Signatures for Non-intrusive Stress Detection',
                authors: 'Yi Xiao, Harshit Sharma, Zhongyang Zhang, Dessa Bergen-Cico, Tauhidur Rahman, Asif Salekin',
                venue: `${IMWUT}, 7(4), 2023`,
                badge: 'ACM IMWUT 2023',
                rank: "'csrankings' listed Top Conference",
                topics: ['stress'],
                figure: 'thermalStress',
                tldr: 'Detects stress without contact from body thermal video, using co-teaching to learn reliably from noisy thermal signatures.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.1145/3631441' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2310.09932' }
                ]
            },
            {
                id: 'speech-privacy',
                title: 'Privacy Against Real-Time Speech Emotion Detection via Acoustic Adversarial Evasion of Machine Learning',
                authors: 'Brian Testa, Yi Xiao, Harshit Sharma, Avery Gump, Asif Salekin',
                venue: `${IMWUT}, 7(3), 2023`,
                badge: 'ACM IMWUT 2023',
                rank: "'csrankings' listed Top Conference",
                topics: ['privacy', 'speech'],
                figure: 'speechPrivacy',
                tldr: 'Acoustic adversarial evasion that protects users from real-time speech emotion recognition on smart speakers.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.1145/3610887' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2211.09273' },
                    { label: 'News', url: 'https://ecs.syracuse.edu/about/news/smart-speakers-smarter-protection' }
                ]
            },
            {
                id: 'rhoticity',
                title: 'Classifying Rhoticity of /r/ in Speech Sound Disorder Using Age- and Sex-Normalized Formants',
                authors: 'Nina R. Benway, Jonathan L. Preston, Asif Salekin, Yi Xiao, Harshit Sharma, Tara McAllister',
                venue: 'INTERSPEECH, 2023',
                badge: 'INTERSPEECH 2023',
                rank: 'Core A Conference, 2023',
                topics: ['speech'],
                figure: 'speechFormant',
                tldr: 'Classifies whether children with speech sound disorder produce /r/ correctly, using formant features normalized for age and sex.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.21437/Interspeech.2023-312' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2305.16111' }
                ]
            },
            {
                id: 'stutter-imwut',
                title: 'Psychophysiological Arousal in Young Children Who Stutter: An Interpretable AI Approach',
                authors: 'Harshit Sharma, Yi Xiao, Victoria Tumanova, Asif Salekin',
                venue: `${IMWUT}, 6(3), 2022`,
                badge: 'ACM IMWUT 2022',
                rank: "'csrankings' listed Top Conference",
                firstAuthor: true,
                topics: ['speech', 'stress'],
                figure: 'speechArousal',
                tldr: 'Interpretable machine learning models of physiological arousal in young children who stutter, explaining which signals drive the predictions.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.1145/3550326' },
                    { label: 'arXiv', url: 'https://arxiv.org/abs/2208.08859' }
                ]
            },
            {
                id: 'percept-r',
                title: 'PERCEPT-R: An Open-Access American English Child/Clinical Speech Corpus Specialized for the Audio Classification of /r/',
                authors: 'Nina R. Benway, Jonathan Preston, Elaine Hitchcock, Asif Salekin, Harshit Sharma, Tara McAllister',
                venue: 'INTERSPEECH, 2022',
                badge: 'INTERSPEECH 2022',
                rank: 'Core A Conference, 2022',
                topics: ['speech'],
                figure: 'speechCorpus',
                tldr: 'An open-access corpus of American English child and clinical speech for audio classification of the /r/ sound.',
                links: [
                    { label: 'DOI', url: 'https://doi.org/10.21437/Interspeech.2022-10785' },
                    { label: 'Preprint', url: 'https://doi.org/10.31219/osf.io/8zdsg' }
                ]
            },
            {
                id: 'agile',
                title: 'An Empirical Study on the Issues of Traditional Defect Life Cycle in Agile Model',
                authors: 'Arun Prakash Agrawal, Ankur Choudhary, Harshit Sharma',
                venue: 'International Conference on Advances in Engineering Science Management & Technology (ICAESMT), 2019',
                badge: 'ICAESMT 2019',
                topics: [],
                links: [{ label: 'SSRN', url: 'https://ssrn.com/abstract=3402842' }]
            }
        ]
    }
];

const experiences = [
    {
        when: 'Jun – Aug 2026',
        title: 'Research Scientist Intern (AI/ML)',
        org: 'Optum, UnitedHealth Group',
        note: 'Mentor: Shruthi Hiremath',
        details: [
            'Built <strong>TrajNote</strong>, a clinical text-serialization framework that converts longitudinal EHR claims (<span class="metric">2.69M patients, 115.8M visits</span>) into natural language, so off-the-shelf language models can model structured medical codes without pretraining a custom foundation model.',
            'Designed a dual-window temporal modeling strategy with schema-constrained, grammar-guided LLM generation to produce valid structured outputs for high-risk clinical workflows.',
            'Benchmarked sequential architectures across multiple domain-specific text encoders, achieving a <span class="metric">+3.9% absolute AUPRC</span> improvement over production baselines for Emergency Department utilization prediction.',
            'Built a distributed embedding extraction pipeline over <span class="metric">25.14M clinical text chunks</span> and ran subgroup fairness audits across Medicare, Medicaid, and Commercial lines of business.'
        ]
    },
    {
        when: '2020 – Present',
        whenNote: 'ASU 2024 – present<br>Syracuse 2020 – 2024',
        title: 'Graduate Research Associate (Fulton Fellow) &middot; Graduate Research Assistant',
        org: 'Arizona State University, School of Computing and Augmented Intelligence &middot; Syracuse University, College of Engineering and Computer Science',
        note: 'Advisor: Dr. Asif Salekin, Ubiquitous and Intelligent Sensing (UIS) Lab',
        details: [
            'Built deep learning and multimodal fusion models for stress, craving, and arousal detection from wearable sensors (Empatica E4, Biopac: heart rate, electrodermal activity), thermal video, and speech, including studies of patients with opioid use disorder in a real-world methadone clinic.',
            'Developed a fairness-enhancing federated learning method based on loss-landscape curvature alignment (CurvFed, ACM IMWUT 2026) and fairness evaluation without demographic labels.',
            'Developed privacy-preserving methods: defenses against speech emotion recognition via acoustic adversarial evasion (ACM IMWUT 2023), analysis of mental-health leakage from zero-permission smartphone IMU sensors, and privacy- and utility-preserving synthetic data generation.',
            'Adapted foundation models and personalized models for data-scarce health sensing (thermal foundation-model adaptation for stress and craving; context-robust personalization, ACM IMWUT 2025).',
            'Applied explainable AI (SHAP, LIME, Captum), including interpretable models of psychophysiological arousal in children who stutter (ACM IMWUT 2022). Developed diffusion-based generative models for acoustic-articulatory representation learning and processed UWB radar point clouds for presence and health-biomarker detection.',
            'Collaborated with clinicians across addiction medicine, speech-language pathology, and occupational therapy, translating study protocols into ML pipelines and co-authoring medical journal papers.'
        ]
    },
    {
        when: '2019',
        title: 'Research Assistant',
        org: 'M.I.N.D. Lab, Syracuse University',
        note: 'Supervisor: Dr. Mark Costa',
        details: [
            'Developed a Node.js and Neo4j graph database backend to collect and analyze physiological data supporting mindfulness interventions in AR/VR.'
        ]
    }
];

const awards = [
    { text: 'Fulton Fellowship, Arizona State University ($71,500)', year: '2024–25' },
    { text: 'Lambda Research Grant ($500 cloud compute credits)', year: '2026–27' },
    { text: 'SUN Award, Arizona State University', year: '2025', link: 'https://recognition.asu.edu/Award/42c50349-d81d-4d42-9237-303abce922c2' },
    { text: '1st Runner-up, Siemens MakeIT Real Hackathon', year: '2017', link: 'https://www.youtube.com/watch?v=W1WmRsRgTjo' }
];

const service = [
    '<strong>Reviewer:</strong> ACM IMWUT (2024, 2025, 2026), CHI 2026, HRI 2026, OzCHI 2025, ECIS (2023, 2025), CHI 2024 Case Studies, ETRA 2021 Workshop, ISWC 2021 Posters &amp; Demos',
    '<strong>Artifact Evaluation PC:</strong> ACM SenSys 2025',
    '<strong>Student Volunteer:</strong> ACM UbiComp 2022',
    '<strong>Academic Program Senator:</strong> Graduate Student Organization, Syracuse University (2022–2023)'
];

const coverage = [
    { text: 'Syracuse University News: AI and mindfulness-based interventions for opioid use disorder', link: 'https://www.syracuse.edu/stories/falk-addiction-studies-opioid-treatment/' },
    { text: 'Syracuse ECS News: privacy against real-time speech emotion detection', link: 'https://ecs.syracuse.edu/about/news/smart-speakers-smarter-protection' }
];

const skills = [
    ['Research areas', 'Healthcare AI, LLMs, clinical NLP, generative models (diffusion), multimodal learning, foundation-model adaptation, privacy-preserving ML, federated learning, explainable AI, algorithmic fairness, signal processing, time-series modeling, model quantization'],
    ['Health data', 'EHR and claims data, wearable sensors (Empatica E4, Biopac), physiological signals (ECG/heart rate, EDA), IMU, thermal imaging, UWB radar, clinical speech'],
    ['ML frameworks', 'PyTorch, PyTorch Mobile, Keras, scikit-learn, Flower, Optuna, AI Fairness 360, SHAP, LIME, Captum'],
    ['Languages', 'Python, C++, Java, Julia, SQL, JavaScript (Node.js), Android'],
    ['Tools', 'Git, NumPy, Pandas, Matplotlib, Librosa, Praat, PraatIO, Neo4j']
];

// ---------- Helpers ----------

const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
};

const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3 6.6 7 .7-5.3 4.8 1.5 7L12 17.5 5.8 21l1.5-7L2 9.3l7-.7L12 2Z"/></svg>';

const highlightSelf = (authors) =>
    authors.replace('Harshit Sharma', '<span class="me">Harshit Sharma</span>');

// ---------- Renderers ----------

const renderNews = () => {
    const list = document.getElementById('news-list');
    news.forEach((item) => {
        const li = el('li');
        li.append(el('span', 'news-date', item.date), el('span', '', item.html));
        list.append(li);
    });
};

const renderPillars = () => {
    const grid = document.getElementById('pillar-grid');
    pillars.forEach((pillar) => {
        const card = el('article', 'pillar');
        card.style.setProperty('--pillar', pillar.color);
        card.append(
            el('div', 'pillar-icon', `<svg viewBox="0 0 24 24" aria-hidden="true">${pillar.icon}</svg>`),
            el('h3', '', pillar.title),
            el('p', '', pillar.text)
        );
        const chips = el('div', 'pillar-papers');
        pillar.papers.forEach(([id, label]) => {
            const link = el('a', '', label);
            link.href = `#pub-${id}`;
            link.dataset.pub = id;
            chips.append(link);
        });
        card.append(chips);
        grid.append(card);
    });
};

const state = { topic: 'all', firstOnly: false };

const allPapers = publicationGroups.flatMap((group) => group.papers);

const matches = (paper) =>
    (state.topic === 'all' || paper.topics.includes(state.topic)) &&
    (!state.firstOnly || paper.firstAuthor);

const renderPaper = (paper) => {
    const card = el('article', paper.figure || paper.image ? 'pub' : 'pub no-figure');
    card.id = `pub-${paper.id}`;

    if (paper.image) {
        const figure = el('figure', 'pub-figure');
        const img = el('img');
        img.src = paper.image;
        img.alt = '';
        img.loading = 'lazy';
        figure.append(img);
        card.append(figure);
    } else if (paper.figure) {
        card.append(el('figure', 'pub-figure', window.renderFigure(paper.figure, paper.id)));
    }

    const body = el('div', 'pub-body');
    const meta = el('div', 'pub-meta');
    const badgeClass = paper.status === 'review' ? 'badge review' : paper.journal ? 'badge journal' : 'badge';
    if (paper.badge) meta.append(el('span', badgeClass, paper.badge));
    if (paper.rank) meta.append(el('span', 'badge rank', `${STAR}${paper.rank}`));
    if (paper.extraBadge) meta.append(el('span', 'badge subtle', paper.extraBadge));
    if (paper.firstAuthor) meta.append(el('span', 'badge subtle', 'First author'));
    body.append(meta);

    const primary = paper.links && paper.links[0];
    body.append(el('h3', '', primary ? `<a href="${primary.url}">${paper.title}</a>` : paper.title));
    body.append(el('p', 'pub-authors', highlightSelf(paper.authors)));
    if (paper.venue) body.append(el('p', 'pub-venue', paper.venue));
    if (paper.tldr) body.append(el('p', 'pub-tldr', paper.tldr));

    const citation = scholarByPaper.get(paper.id);
    if ((paper.links && paper.links.length) || citation) {
        const links = el('div', 'pub-links');
        (paper.links || []).forEach((link) => {
            const a = el('a', '', link.label);
            a.href = link.url;
            links.append(a);
        });
        if (citation) {
            const cited = el('a', 'cited-by', `Cited by ${citation.cited_by}`);
            cited.href = citation.cited_by_url || scholarProfile;
            cited.title = 'Citation count from Google Scholar';
            links.append(cited);
        }
        body.append(links);
    }

    card.append(body);
    return card;
};

const renderPublications = () => {
    const container = document.getElementById('publication-list');
    container.replaceChildren();
    let shown = 0;

    publicationGroups.forEach((group) => {
        const papers = group.papers.filter(matches);
        if (!papers.length) return;
        shown += papers.length;
        container.append(el('h3', 'pub-group-title', `${group.title} <span>(${papers.length})</span>`));
        const list = el('div', 'pub-list');
        papers.forEach((paper) => list.append(renderPaper(paper)));
        container.append(list);
    });

    document.getElementById('pub-empty').hidden = shown > 0;
};

const renderFilters = () => {
    const row = document.getElementById('topic-filters');
    topics.forEach((topic) => {
        const count = topic.key === 'all'
            ? allPapers.length
            : allPapers.filter((paper) => paper.topics.includes(topic.key)).length;
        const chip = el('button', 'chip', `${topic.label}<span class="count">${count}</span>`);
        chip.type = 'button';
        chip.dataset.topic = topic.key;
        chip.setAttribute('aria-pressed', String(topic.key === state.topic));
        chip.addEventListener('click', () => {
            state.topic = topic.key;
            row.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
            renderPublications();
        });
        row.append(chip);
    });

    document.getElementById('first-author-toggle').addEventListener('change', (event) => {
        state.firstOnly = event.target.checked;
        renderPublications();
    });
};

// Links to a paper (from pillars or news) clear filters so the target card exists.
const showPaperOnClick = () => {
    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href^="#pub-"]');
        if (!link) return;
        const target = document.getElementById(link.getAttribute('href').slice(1));
        if (target) return;
        state.topic = 'all';
        state.firstOnly = false;
        document.getElementById('first-author-toggle').checked = false;
        document.querySelectorAll('#topic-filters .chip').forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.topic === 'all')));
        renderPublications();
    });
};

const renderExperience = () => {
    const container = document.getElementById('experience-list');
    experiences.forEach((job) => {
        const item = el('article', 'job');
        item.append(el('div', 'job-when', job.when + (job.whenNote ? `<span>${job.whenNote}</span>` : '')));
        const body = el('div');
        body.append(el('h3', '', job.title));
        body.append(el('p', 'job-org', `${job.org}${job.note ? `<br><small>${job.note}</small>` : ''}`));
        const list = el('ul');
        job.details.forEach((detail) => list.append(el('li', '', detail)));
        body.append(list);
        item.append(body);
        container.append(item);
    });
};

const renderLists = () => {
    const awardList = document.getElementById('award-list');
    awards.forEach((award) => {
        const text = award.link ? `<a href="${award.link}">${award.text}</a>` : award.text;
        awardList.append(el('li', '', `<span>${text}</span><span class="year">${award.year}</span>`));
    });

    const serviceList = document.getElementById('service-list');
    service.forEach((item) => serviceList.append(el('li', '', item)));

    const coverageList = document.getElementById('news-coverage');
    coverage.forEach((item) => coverageList.append(el('li', '', `<a href="${item.link}">${item.text}</a>`)));

    const skillList = document.getElementById('skill-list');
    skills.forEach(([term, description]) => {
        skillList.append(el('dt', '', term), el('dd', '', description));
    });
};

// ---------- Google Scholar metrics ----------
// assets/scholar.json is refreshed weekly by .github/workflows/scholar.yml.

const scholarByPaper = new Map();
let scholarProfile = 'https://scholar.google.com/citations?user=Ja7tYhcAAAAJ&hl=en';

const normalizeTitle = (title) => title.toLowerCase().replace(/^\(poster\)\s*/, '').replace(/[^a-z0-9]/g, '');

const matchScholarPapers = (scholarPapers) => {
    const normalized = scholarPapers.map((entry) => ({ entry, key: normalizeTitle(entry.title) }));
    allPapers.forEach((paper) => {
        const key = normalizeTitle(paper.scholarTitle || paper.title).slice(0, 40);
        const match = normalized.find((candidate) => candidate.key.startsWith(key) || key.startsWith(candidate.key.slice(0, 40)));
        if (match && match.entry.cited_by > 0) scholarByPaper.set(paper.id, match.entry);
    });
};

const formatDate = (iso) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const renderMetricsPanel = (data) => {
    const panel = document.getElementById('metrics-panel');
    document.getElementById('metrics-since').textContent = data.since_year ? `Since ${data.since_year}` : 'Recent';
    document.getElementById('metrics-source').href = data.profile_url || scholarProfile;

    const rows = document.getElementById('metrics-rows');
    [['Citations', data.citations], ['h-index', data.h_index], ['i10-index', data.i10_index]].forEach(([label, value]) => {
        rows.append(el('tr', '', `<th scope="row">${label}</th><td>${value.all}</td><td>${value.since}</td>`));
    });

    const bars = document.getElementById('cite-bars');
    const years = data.by_year || [];
    const max = Math.max(...years.map((point) => point.citations), 1);
    const currentYear = Number((data.updated || '').slice(0, 4));
    years.forEach((point, index) => {
        const partial = point.year === currentYear;
        const label = `${point.year}: ${point.citations} citations${partial ? ' (year to date)' : ''}`;
        const column = el('div', `cite-col${partial ? ' partial' : ''}`);
        column.tabIndex = 0;
        column.setAttribute('aria-label', label);
        column.dataset.tip = label;
        const showValue = index === years.length - 1 || point.citations === max;
        column.append(
            el('span', 'cite-value', showValue ? String(point.citations) : ''),
            el('span', 'cite-bar'),
            el('span', 'cite-year', partial ? `${point.year}*` : String(point.year))
        );
        column.querySelector('.cite-bar').style.height = `${Math.max(4, (point.citations / max) * 100)}%`;
        bars.append(column);
    });

    const ytdNote = years.some((point) => point.year === currentYear) ? ' · *year to date' : '';
    document.getElementById('metrics-updated').textContent = `Updated ${formatDate(data.updated)}${ytdNote}`;
    panel.hidden = false;
};

const loadScholarMetrics = async () => {
    try {
        const response = await fetch('assets/scholar.json', { cache: 'no-cache' });
        if (!response.ok) return;
        const data = await response.json();
        scholarProfile = data.profile_url || scholarProfile;
        matchScholarPapers(data.papers || []);
        renderMetricsPanel(data);
        renderPublications();
    } catch (error) {
        // Metrics are optional; the page works without them.
    }
};

const setupThemeToggle = () => {
    const root = document.documentElement;
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = root.dataset.theme
            || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const next = current === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        try {
            localStorage.setItem('theme', next);
        } catch (error) { /* storage unavailable */ }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    renderNews();
    renderPillars();
    renderFilters();
    renderPublications();
    showPaperOnClick();
    renderExperience();
    renderLists();
    setupThemeToggle();
    loadScholarMetrics();
});

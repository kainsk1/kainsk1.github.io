/* ─────────────────────────────────────────────────────────────
   i18n.js  —  English / French language switcher
   ───────────────────────────────────────────────────────────── */

const TRANSLATIONS = {
  en: {
    /* ── Nav ── */
    "nav.about":        "About",
    "nav.research":     "Research",
    "nav.projects":     "Projects",
    "nav.skills":       "Skills",
    "nav.education":    "Education",
    "nav.experience":   "Experience",
    "nav.cv":           "CV",
    "nav.questions":    "Questions",
    "nav.notes":        "Notes",
    "nav.blog":         "Blog",

    /* ── Home / About ── */
    "home.affil":       "MSc student · Université de Montréal &amp; Mila · Montréal, QC",
    "home.bio1":        "I'm a Master's student in Computer Science (AI) at <a href=\"https://diro.umontreal.ca/\">Université de Montréal</a> and <a href=\"https://mila.quebec/\">Mila - Quebec Artificial Intelligence Institute</a>, holding a GPA of 4.3/4.3.",
    "home.bio2":        "My research spans two areas. In <strong>reinforcement learning for drug discovery</strong>, I am building a discrete masked diffusion model that combines RL-based property optimization and natural language conditioning, reaching 76% of SOTA at 15% of the parameter count. In <strong>loss of plasticity in neural networks</strong>, I am exploring evolutionary algorithms as a remedy for degrading learning capacity over time.",
    "home.bio3":        "Before Mila I spent 3+ years at <strong>Deutsche Bank's Chief Innovation Office</strong> in Pune, building production LLM agents, RAG pipelines, and MLOps infrastructure for enterprise financial analysis. I hold a Bachelor's in Computer Science from <a href=\"https://www.nitk.ac.in/\">NIT Karnataka</a>.",
    "home.news":        "News",
    "home.research":    "Selected research",
    "home.research_all":"See the full <a href=\"/publications/\">research</a> page.",

    /* ── News items ── */
    "badge.upcoming": "upcoming",
    "news.0": "Joining CRIM as Research Intern in May 2026, working on RL and fine-tuning methods for LLM-based software co-pilots.",
    "news.1": "Started MSc at UdeM &amp; Mila (GPA 4.3/4.3).",
    "news.2": "Joined Deutsche Bank CIO as Associate; led LLM agent &amp; RAG development.",
    "news.3": "Graduated B.Tech from NIT Karnataka.",

    /* ── Research page ── */
    "research.lede":    "Research projects at Mila and selected past work.",

    /* ── Projects page ── */
    "projects.lede":    "Selected engineering and applied ML projects.",
    "projects.more":    "More on <a href=\"https://github.com/kainspraveen\">GitHub</a>.",

    /* ── CV page ── */
    "cv.lede":          "Full curriculum vitae.",
    "cv.education":     "Education",
    "cv.experience":    "Experience",
    "cv.skills":        "Skills",
    "cv.udem.degree":   "M.Sc. Computer Science, Artificial Intelligence",
    "cv.udem.detail":   "GPA 4.3 / 4.3 · Coursework: Fundamentals of ML, Data Science, Representation Learning",
    "cv.nitk.degree":   "B.Tech. Computer Science &amp; Engineering",
    "cv.nitk.detail":   "Coursework: CV, Neural Networks, Deep Learning, Algorithms, Distributed Systems, HPC, Graph Theory",
    "cv.crim.title":    "Research Intern, LLM Agents and Software Co-pilot",
    "cv.crim.detail":   "Research on enabling LLMs to navigate and operate complex software as genuine co-pilots for end users, applying RL, supervised fine-tuning, and RLVR to train agents for real-world application use.",
    "cv.db.title":      "Associate / Senior Analyst / Analyst, Chief Innovation Office",
    "cv.db.detail":     "Built LLM agents for enterprise financial QA, RAG pipelines (LangChain, LangGraph, MLflow), MLOps infrastructure on GCP/Vertex AI, and predictive ML systems for ESG compliance.",
    "cv.pulse.title":   "Software Engineer Intern",
    "cv.pulse.detail":  "Deep LSTM for insider-threat detection; Node.js log visualisation platform.",
    "cv.skills.prog":   "<strong>Languages:</strong> Python, C++, Java, Bash",
    "cv.skills.stack":  "<strong>Stack:</strong> GCP, Vertex AI, Docker, Kubernetes, Kubeflow, PyTorch, TensorFlow, LangChain, FastAPI, Scikit-learn, Pandas, Git",
    "cv.skills.soft":   "<strong>Soft skills:</strong> Project leadership, mentoring, public speaking, team collaboration",

    /* ── Research Questions page ── */
    "questions.lede":              "Open questions that drive my work. Some I am actively pursuing, others are longer-horizon interests.",
    "questions.theme1.title":      "RL for Drug Discovery",
    "questions.theme1.desc":       "How can we use reinforcement learning and generative models to design molecules that are both chemically valid and semantically aligned with natural language intent?",
    "questions.q1":                "Can multi-agent RL systems learn to collaborate on molecule generation, dividing the problem into composable sub-tasks (scaffold, side-chain, property optimisation), without explicit decomposition from a human designer?",
    "questions.q2":                "To what degree can a diffusion language model grounded in chemical space be steered by free-text biological or therapeutic constraints, and how do we measure alignment faithfully?",
    "questions.q3":                "Current RL reward signals in drug discovery are noisy proxies (docking scores, predicted ADMET). What reward-shaping or curriculum strategies prevent over-exploitation of these proxies while still driving the model toward synthesisable, potent candidates?",
    "questions.theme2.title":      "Plasticity &amp; Continual Learning",
    "questions.theme2.desc":       "Why do neural networks lose their ability to learn from new data over time, and can evolutionary or biological principles restore that capacity?",
    "questions.q4":                "What is the mechanistic relationship between dead neurons, rank collapse, and loss of plasticity? Does fixing one necessarily fix the others?",
    "questions.q5":                "Evolutionary algorithms can periodically reinitialise or mutate weights. Is there an efficient, differentiable analogue of this that preserves useful representations while recovering gradient diversity?",
    "questions.q6":                "Does plasticity loss in RL agents (as opposed to supervised learners) follow the same dynamics, or does the non-stationarity of the target distribution introduce qualitatively different failure modes?",
    "questions.theme3.title":      "Broader Interests",
    "questions.theme3.desc":       "Questions that sit at the edges of my current work but keep pulling my attention.",
    "questions.q7":                "How much of the success of large language models in reasoning tasks is attributable to genuine inductive structure versus sophisticated pattern matching over the training distribution? Can we design experiments that cleanly disambiguate the two?",
    "questions.q8":                "In agentic systems that interact with real environments (code execution, tool use, web browsing), what safety properties can be formally verified at inference time rather than hoped for through training?",

    /* ── Blog / Notes ── */
    "blog.lede":        "Occasional notes, paper reviews, and thoughts.",
    "notes.lede":       "Personal notes from graduate courses at UdeM and Mila reading groups. Rough but hopefully useful.",

    /* ── Footer ── */
    "footer.built":     "Built with Jekyll",
  },

  fr: {
    /* ── Nav ── */
    "nav.about":        "À propos",
    "nav.research":     "Recherches",
    "nav.projects":     "Projets",
    "nav.skills":       "Compétences",
    "nav.education":    "Formation",
    "nav.experience":   "Expérience",
    "nav.cv":           "CV",
    "nav.questions":    "Questions",
    "nav.notes":        "Notes",
    "nav.blog":         "Blog",

    /* ── Home / About ── */
    "home.affil":       "Étudiant à la maîtrise · Université de Montréal &amp; Mila · Montréal, QC",
    "home.bio1":        "Je suis étudiant à la maîtrise en informatique (IA) à l'<a href=\"https://diro.umontreal.ca/\">Université de Montréal</a> et à <a href=\"https://mila.quebec/\">Mila, l'Institut québécois d'intelligence artificielle</a>, avec une moyenne de 4,3/4,3.",
    "home.bio2":        "Mes recherches couvrent deux axes. En <strong>apprentissage par renforcement pour la découverte de médicaments</strong>, je développe un modèle de diffusion discrète masquée combinant optimisation par RL et conditionnement en langage naturel, atteignant 76 % des métriques SOTA à 15 % du nombre de paramètres. En <strong>perte de plasticité dans les réseaux de neurones</strong>, j'explore les algorithmes évolutionnaires comme remède à la dégradation des capacités d'apprentissage.",
    "home.bio3":        "Avant Mila, j'ai passé plus de 3 ans au <strong>Bureau de l'innovation de Deutsche Bank</strong> à Pune, où j'ai développé des agents LLM, des pipelines RAG et une infrastructure MLOps pour l'analyse financière d'entreprise. J'ai obtenu un B.Tech. en informatique du <a href=\"https://www.nitk.ac.in/\">NIT Karnataka</a>.",
    "home.news":        "Actualités",
    "home.research":    "Recherches sélectionnées",
    "home.research_all":"Voir la page <a href=\"/publications/\">recherches</a> complète.",

    /* ── News items ── */
    "badge.upcoming": "à venir",
    "news.0": "Stagiaire de recherche au CRIM à partir de mai 2026, travaillant sur des méthodes AR et d'affinage fin pour les co-pilotes logiciels basés sur des LLM.",
    "news.1": "Début de la maîtrise à UdeM &amp; Mila (moyenne 4,3/4,3).",
    "news.2": "Rejoins Deutsche Bank CIO en tant qu'associé ; développement d'agents LLM et de pipelines RAG.",
    "news.3": "Diplômé en B.Tech. du NIT Karnataka.",

    /* ── Research page ── */
    "research.lede":    "Projets de recherche à Mila et travaux antérieurs sélectionnés.",

    /* ── Projects page ── */
    "projects.lede":    "Projets d'ingénierie et d'apprentissage automatique appliqué sélectionnés.",
    "projects.more":    "Plus sur <a href=\"https://github.com/kainspraveen\">GitHub</a>.",

    /* ── CV page ── */
    "cv.lede":          "Curriculum vitae complet.",
    "cv.education":     "Formation",
    "cv.experience":    "Expérience professionnelle",
    "cv.skills":        "Compétences",
    "cv.udem.degree":   "M.Sc. Informatique, Intelligence artificielle",
    "cv.udem.detail":   "Moyenne 4,3 / 4,3 · Cours : Fondements de l'AA, Science des données, Apprentissage de représentations",
    "cv.nitk.degree":   "B.Tech. Informatique et génie logiciel",
    "cv.nitk.detail":   "Cours : Vision par ordinateur, Réseaux de neurones, Apprentissage profond, Algorithmes, Systèmes distribués, HPC, Théorie des graphes",
    "cv.crim.title":    "Stagiaire de recherche, Agents LLM et co-pilote logiciel",
    "cv.crim.detail":   "Recherche sur la capacité des LLM à naviguer et opérer des logiciels complexes comme véritables co-pilotes, en appliquant AR, apprentissage supervisé et RLVR pour entraîner des agents à usage réel.",
    "cv.db.title":      "Associé / Analyste senior / Analyste, Bureau de l'innovation",
    "cv.db.detail":     "Développement d'agents LLM pour l'analyse financière d'entreprise, pipelines RAG (LangChain, LangGraph, MLflow), infrastructure MLOps sur GCP/Vertex AI, et systèmes ML prédictifs pour la conformité ESG.",
    "cv.pulse.title":   "Stagiaire en génie logiciel",
    "cv.pulse.detail":  "LSTM profond pour la détection de menaces internes ; plateforme de visualisation de journaux en Node.js.",
    "cv.skills.prog":   "<strong>Langages :</strong> Python, C++, Java, Bash",
    "cv.skills.stack":  "<strong>Stack :</strong> GCP, Vertex AI, Docker, Kubernetes, Kubeflow, PyTorch, TensorFlow, LangChain, FastAPI, Scikit-learn, Pandas, Git",
    "cv.skills.soft":   "<strong>Compétences transversales :</strong> Leadership de projet, mentorat, prise de parole en public, collaboration en équipe",

    /* ── Research Questions page ── */
    "questions.lede":              "Questions ouvertes qui guident mes travaux. Ce sont les problèmes auxquels je pense — certains activement, d'autres de façon aspirationnelle.",
    "questions.theme1.title":      "AR pour la découverte de médicaments",
    "questions.theme1.desc":       "Comment utiliser l'apprentissage par renforcement et les modèles génératifs pour concevoir des molécules à la fois chimiquement valides et sémantiquement alignées avec l'intention exprimée en langage naturel ?",
    "questions.q1":                "Les systèmes d'AR multi-agents peuvent-ils apprendre à collaborer sur la génération de molécules — en divisant le problème en sous-tâches composables (squelette, chaîne latérale, optimisation de propriétés) — sans décomposition explicite par un concepteur humain ?",
    "questions.q2":                "Dans quelle mesure un modèle de diffusion ancré dans l'espace chimique peut-il être guidé par des contraintes biologiques ou thérapeutiques en texte libre, et comment mesurer fidèlement cet alignement ?",
    "questions.q3":                "Les signaux de récompense actuels en AR pour la découverte de médicaments sont des approximations bruyantes (scores d'ancrage, ADMET prédits). Quelles stratégies de façonnage des récompenses ou de curriculum empêchent la surexploitation de ces approximations tout en orientant le modèle vers des candidats synthétisables et puissants ?",
    "questions.theme2.title":      "Plasticité &amp; apprentissage continu",
    "questions.theme2.desc":       "Pourquoi les réseaux de neurones perdent-ils leur capacité d'apprendre de nouvelles données au fil du temps, et des principes évolutionnaires ou biologiques peuvent-ils restaurer cette capacité ?",
    "questions.q4":                "Quelle est la relation mécanistique entre les neurones morts, l'effondrement du rang et la perte de plasticité — et résoudre l'un d'eux règle-t-il nécessairement les autres ?",
    "questions.q5":                "Les algorithmes évolutionnaires peuvent réinitialiser ou muter périodiquement les poids. Existe-t-il un analogue efficace et différentiable qui préserve les représentations utiles tout en récupérant la diversité des gradients ?",
    "questions.q6":                "La perte de plasticité dans les agents d'AR (par opposition aux apprenants supervisés) suit-elle les mêmes dynamiques, ou la non-stationnarité de la distribution cible introduit-elle des modes d'échec qualitativement différents ?",
    "questions.theme3.title":      "Intérêts plus larges",
    "questions.theme3.desc":       "Questions situées aux marges de mes travaux actuels mais qui captent constamment mon attention.",
    "questions.q7":                "Quelle part du succès des grands modèles de langage dans les tâches de raisonnement est attribuable à une véritable structure inductive plutôt qu'à une correspondance de motifs sophistiquée sur la distribution d'entraînement — et peut-on concevoir des expériences qui distinguent clairement les deux ?",
    "questions.q8":                "Dans les systèmes agentiques qui interagissent avec des environnements réels (exécution de code, utilisation d'outils, navigation web), quelles propriétés de sécurité peuvent être formellement vérifiées au moment de l'inférence plutôt qu'espérées via l'entraînement ?",

    /* ── Blog / Notes ── */
    "blog.lede":        "Notes occasionnelles, analyses d'articles et réflexions.",
    "notes.lede":       "Notes personnelles des cours de deuxième cycle à l'UdeM et des groupes de lecture de Mila. Approximatives, mais utiles.",

    /* ── Footer ── */
    "footer.built":     "Construit avec Jekyll",
  }
};

/* ── Core switcher ─────────────────────────────────────────── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Toggle button label
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "en" ? "FR" : "EN";

  // html lang attribute
  document.documentElement.lang = lang;

  localStorage.setItem("lang", lang);
}

function toggleLang() {
  const current = localStorage.getItem("lang") || "en";
  applyLang(current === "en" ? "fr" : "en");
}

/* ── Init on page load ──────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("lang") || "en";
  applyLang(saved);

  const btn = document.getElementById("lang-toggle");
  if (btn) btn.addEventListener("click", toggleLang);
});

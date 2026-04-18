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
    "home.bio3":        "Before Mila I spent 3+ years at <strong>Deutsche Bank's Chief Innovation Office</strong> in Pune, building production LLM agents, RAG pipelines, and MLOps infrastructure for enterprise financial analysis. I hold a Bachelor's in Information Technology from <a href=\"https://www.nitk.ac.in/\">NIT Karnataka</a>.",
    "home.news":        "News",
    "home.research":    "Selected research",
    "home.research_all":"See the full <a href=\"/publications/\">research</a> page.",

    /* ── News items ── */
    "badge.upcoming": "upcoming",
    "news.0": "Joining CRIM as Research Intern in May 2026, working on RL and fine-tuning methods for LLM-based software co-pilots.",
    "news.1": "Started MSc at UdeM &amp; Mila (GPA 4.3/4.3).",
    "news.2": "Joined Deutsche Bank CIO; built LLM agents and RAG pipelines for enterprise financial analysis.",
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
    "cv.nitk.degree":   "B.Tech. Information Technology",
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
    "questions.lede":              "Questions I find myself thinking about. Some might be new, some I need to explore more, and some are probably plain wrong.",
    "questions.theme0.title":      "State-Dependent Exploration in Reinforcement Learning",
    "questions.theme0.desc":       "Most exploration strategies use fixed schedules agnostic to what the agent has already learned. What if the decision to explore were driven by a state-dependent threshold inferred from a warm-up phase, generalising gracefully to unseen states?",
    "questions.q0a":               "<strong>Warm-up-derived adaptive thresholds.</strong> UCB-style methods set T(s) = Q(s) + λ · σ<sub>Q</sub>(s) globally. The open question is whether a threshold learned during a warm-up phase can serve as a structured prior: exploit when Q(s, a) ≥ T(s), explore when Q(s, a) &lt; T(s). Does this warm-up prior give a meaningful advantage over a UCB baseline with no such phase?",
    "questions.q0b":               "<strong>Nearest-neighbour generalisation for unseen states.</strong> For states never visited during warm-up, the threshold can be approximated via Explore(s) = 𝕀[Q(s, a) &lt; T(NN(s))]. How does the choice of distance metric affect generalisation quality, and does it outperform learned uncertainty estimates such as ensemble disagreement or Bayesian Q-network epistemic uncertainty?",
    "questions.q0c":               "<strong>Interaction with plasticity loss.</strong> If the Q-function degrades over time, the warm-up threshold table becomes stale. Can the threshold be updated incrementally, and does this create a feedback loop where exploration recovers plasticity, which in turn improves threshold estimates?",
    "questions.theme1.title":      "Molecule–Language Alignment Without Paired Data",
    "questions.theme1.desc":       "We have millions of molecules with computable properties (via RDKit, docking, ADMET tools), but paired text–molecule data is scarce compared to image–text corpora. The open question is how to leverage abundant unlabelled chemical data to improve language-conditioned generation.",
    "questions.q1":                "<strong>Self-supervised representations as a bridge.</strong> Contrastive learning can pull together structurally similar molecules and push apart dissimilar ones — learning an embedding space without any text labels. The objective is L = −log[exp(sim(z<sub>i</sub>, z<sub>j</sub>) / τ) / Σ<sub>k</sub> exp(sim(z<sub>i</sub>, z<sub>k</sub>) / τ)]. Can representations trained this way transfer to text-conditioned generation, closing the data-scarcity gap?",
    "questions.q2":                "<strong>Curriculum learning over chemical space.</strong> Not all molecules are equally informative at every stage of training. Can Fisher information or a similar complexity measure serve as a curriculum signal — ordering pretext tasks so the model builds from simple scaffolds to complex polycyclic structures?",
    "questions.q3":                "<strong>Recursive reasoning in latent chemical space.</strong> Can a model iteratively refine a molecular latent vector z<sub>t+1</sub> = f(z<sub>t</sub>, c) conditioned on text c before decoding — analogous to chain-of-thought but operating over a continuous chemical manifold? Gated attention or a SteerViT-style mechanism could mediate this.",
    "questions.q4":                "<strong>Structured reasoning languages for chemistry.</strong> Natural language is ambiguous; SMILES is opaque. Can expressing molecular reasoning in a logically structured language (Lean-style proofs, symbolic reaction rules, or a functional EML-based representation) improve faithfulness of text-to-molecule generation and enable formal verification of molecular properties?",
    "questions.theme2.title":      "Plasticity &amp; Continual Learning",
    "questions.theme2.desc":       "Why do neural networks lose their ability to learn from new data over time, and can evolutionary or biological principles restore that capacity?",
    "questions.q5":                "What is the mechanistic relationship between dead neurons, rank collapse, and loss of plasticity? Does fixing one necessarily fix the others?",
    "questions.q6":                "Evolutionary algorithms can periodically reinitialise or mutate weights. Is there an efficient, differentiable analogue that preserves useful representations while recovering gradient diversity?",
    "questions.q7":                "Does plasticity loss in RL agents follow the same dynamics as in supervised learners, or does the non-stationarity of the target distribution introduce qualitatively different failure modes?",
    "questions.theme3.title":      "Online RL for LLMs via Multi-Agent Interaction",
    "questions.theme3.desc":       "Standard LLM training is offline. What if agents could learn in real time from interactions with other agents — selectively reinforcing or suppressing parts of their own responses without explicit human reward labels?",
    "questions.q8":                "<strong>Selective per-response gradient updates.</strong> Rather than applying a scalar reward to the entire response, can an agent apply a signed update mask M<sub>t</sub> ∈ {−1, 0, +1} to individual response segments — doing gradient descent on parts it judges poor and gradient ascent on parts it judges good? How should M<sub>t</sub> be decided, and can it be learned?",
    "questions.q9":                "<strong>Preventing sycophantic collapse.</strong> When the gradient signal is social, agents may converge on agreeable responses rather than correct ones. What constraints or divergence penalties prevent collapse? Is there a diversity-preserving intrinsic motivation — analogous to a survival drive — that keeps agents from optimising purely for social approval?",
    "questions.q10":               "<strong>Evolution of interaction dynamics.</strong> As agents co-adapt, do their update patterns show interpretable structure — specialisation, negotiation, disagreement resolution? Monitoring gradient norms and update directions over time may reveal whether agents are learning complementary or redundant roles.",
    "questions.q11":               "<strong>Measurable outcomes.</strong> Does this form of online multi-agent RL improve reasoning quality, social behaviour, conflict resolution, or performance on conversation benchmarks? What is the right evaluation protocol for a training regime with no fixed offline dataset?",

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
    "cv.nitk.degree":   "B.Tech. Technologies de l'information",
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
    "questions.lede":              "Des questions auxquelles je pense. Certaines sont peut-être nouvelles, d'autres à approfondir, et certaines sont probablement fausses.",
    "questions.theme0.title":      "Exploration adaptative au contexte en AR",
    "questions.theme0.desc":       "La plupart des stratégies d'exploration utilisent des calendriers fixes indépendants de ce que l'agent a déjà appris. Et si la décision d'explorer était guidée par un seuil dépendant de l'état, inféré d'une phase d'échauffement ?",
    "questions.q0a":               "<strong>Seuils adaptatifs dérivés de l'échauffement.</strong> Les méthodes UCB fixent T(s) = Q(s) + λ · σ<sub>Q</sub>(s) globalement. La question ouverte est de savoir si un seuil appris lors d'une phase d'échauffement peut servir de prior structuré pour les interactions ultérieures.",
    "questions.q0b":               "<strong>Généralisation par plus proche voisin pour les états non visités.</strong> Pour les états jamais visités pendant l'échauffement, le seuil peut être approximé via Explore(s) = 𝕀[Q(s, a) &lt; T(NN(s))]. Comment le choix de la métrique de distance affecte-t-il la qualité de généralisation ?",
    "questions.q0c":               "<strong>Interaction avec la perte de plasticité.</strong> Si la fonction Q se dégrade au fil du temps, la table de seuils devient obsolète. Le seuil peut-il être mis à jour de manière incrémentale, créant une boucle où l'exploration récupère la plasticité ?",
    "questions.theme1.title":      "Alignement molécule–langage sans données appariées",
    "questions.theme1.desc":       "Nous disposons de millions de molécules avec des propriétés calculables, mais les données texte–molécule appariées sont rares. Comment exploiter les données chimiques non étiquetées pour améliorer la génération conditionnée par le langage ?",
    "questions.q1":                "<strong>Représentations auto-supervisées comme pont.</strong> L'apprentissage contrastif peut rapprocher les molécules structurellement similaires et éloigner les dissemblables — sans étiquettes texte. L'objectif est L = −log[exp(sim(z<sub>i</sub>, z<sub>j</sub>) / τ) / Σ<sub>k</sub> exp(sim(z<sub>i</sub>, z<sub>k</sub>) / τ)]. Ces représentations peuvent-elles servir pour la génération conditionnée par le texte ?",
    "questions.q2":                "<strong>Apprentissage par curriculum dans l'espace chimique.</strong> L'information de Fisher ou une mesure de complexité similaire peut-elle servir de signal de curriculum pour ordonner les tâches d'entraînement, des scaffolds simples aux structures polycycliques complexes ?",
    "questions.q3":                "<strong>Raisonnement récursif dans l'espace latent chimique.</strong> Un modèle peut-il affiner itérativement un vecteur latent z<sub>t+1</sub> = f(z<sub>t</sub>, c) conditionné par un texte c avant le décodage, à l'image du chain-of-thought mais sur un manifold chimique continu ?",
    "questions.q4":                "<strong>Langages de raisonnement structurés pour la chimie.</strong> Le langage naturel est ambigu ; le SMILES est opaque. Exprimer le raisonnement moléculaire dans un langage logiquement structuré (preuves Lean, règles de réaction symboliques) peut-il améliorer la fidélité de la génération texte-vers-molécule ?",
    "questions.theme2.title":      "Plasticité &amp; apprentissage continu",
    "questions.theme2.desc":       "Pourquoi les réseaux de neurones perdent-ils leur capacité d'apprendre de nouvelles données au fil du temps, et des principes évolutionnaires ou biologiques peuvent-ils restaurer cette capacité ?",
    "questions.q5":                "Quelle est la relation mécanistique entre les neurones morts, l'effondrement du rang et la perte de plasticité ? Résoudre l'un règle-t-il nécessairement les autres ?",
    "questions.q6":                "Les algorithmes évolutionnaires peuvent réinitialiser ou muter périodiquement les poids. Existe-t-il un analogue efficace et différentiable qui préserve les représentations utiles tout en récupérant la diversité des gradients ?",
    "questions.q7":                "La perte de plasticité dans les agents d'AR suit-elle les mêmes dynamiques que chez les apprenants supervisés, ou la non-stationnarité de la distribution cible introduit-elle des modes d'échec qualitativement différents ?",
    "questions.theme3.title":      "AR en ligne pour les LLM via interaction multi-agents",
    "questions.theme3.desc":       "L'entraînement standard des LLM est hors ligne. Et si les agents pouvaient apprendre en temps réel à partir d'interactions, en renforçant ou supprimant sélectivement des parties de leurs réponses sans étiquettes de récompense humaines ?",
    "questions.q8":                "<strong>Mises à jour de gradient sélectives par réponse.</strong> Un agent peut-il appliquer un masque de mise à jour signé M<sub>t</sub> ∈ {−1, 0, +1} aux segments de réponse — descente de gradient sur les parties jugées mauvaises, ascente sur les bonnes ? Comment M<sub>t</sub> doit-il être décidé ?",
    "questions.q9":                "<strong>Prévenir l'effondrement sycophante.</strong> Quand le signal de gradient est social, les agents peuvent converger vers des réponses complaisantes plutôt que correctes. Quelle motivation intrinsèque de préservation de la diversité peut prévenir cet effondrement ?",
    "questions.q10":               "<strong>Évolution des dynamiques d'interaction.</strong> À mesure que les agents co-évoluent, leurs patterns de mise à jour montrent-ils une structure interprétable — spécialisation, négociation, résolution de conflits ?",
    "questions.q11":               "<strong>Résultats mesurables.</strong> Cette forme d'AR multi-agents en ligne améliore-t-elle le raisonnement, le comportement social, la résolution de conflits ou les benchmarks conversationnels ?",

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

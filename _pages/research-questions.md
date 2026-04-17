---
title: Research Questions
permalink: /questions/
layout: default
---

<h1 class="page-title" data-i18n="nav.questions">Research Questions</h1>
<p class="page-lede" data-i18n="questions.lede">Open questions that drive my work. These are the problems I think about — some actively, some aspirationally.</p>

<div class="rq-section">
  <h2 class="rq-theme" data-i18n="questions.theme1.title">RL for Drug Discovery</h2>
  <p class="rq-theme-desc" data-i18n="questions.theme1.desc">
    How can we use reinforcement learning and generative models to design molecules that are both chemically valid and semantically aligned with natural language intent?
  </p>

  <ol class="rq-list">
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q1">Can multi-agent RL systems learn to collaborate on molecule generation — dividing the problem into composable sub-tasks (scaffold, side-chain, property optimisation) — without explicit decomposition from a human designer?</span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q2">To what degree can a diffusion language model grounded in chemical space be steered by free-text biological or therapeutic constraints, and how do we measure alignment faithfully?</span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q3">Current RL reward signals in drug discovery are noisy proxies (docking scores, predicted ADMET). What reward-shaping or curriculum strategies prevent over-exploitation of these proxies while still driving the model toward synthesisable, potent candidates?</span>
    </li>
  </ol>
</div>

<div class="rq-divider"></div>

<div class="rq-section">
  <h2 class="rq-theme" data-i18n="questions.theme2.title">Plasticity &amp; Continual Learning</h2>
  <p class="rq-theme-desc" data-i18n="questions.theme2.desc">
    Why do neural networks lose their ability to learn from new data over time, and can evolutionary or biological principles restore that capacity?
  </p>

  <ol class="rq-list">
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q4">What is the mechanistic relationship between dead neurons, rank collapse, and loss of plasticity — and does fixing one necessarily fix the others?</span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q5">Evolutionary algorithms can periodically reinitialise or mutate weights. Is there an efficient, differentiable analogue of this that preserves useful representations while recovering gradient diversity?</span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q6">Does plasticity loss in RL agents (as opposed to supervised learners) follow the same dynamics, or does the non-stationarity of the target distribution introduce qualitatively different failure modes?</span>
    </li>
  </ol>
</div>

<div class="rq-divider"></div>

<div class="rq-section">
  <h2 class="rq-theme" data-i18n="questions.theme3.title">Broader Interests</h2>
  <p class="rq-theme-desc" data-i18n="questions.theme3.desc">
    Questions that sit at the edges of my current work but keep pulling my attention.
  </p>

  <ol class="rq-list">
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q7">How much of the success of large language models in reasoning tasks is attributable to genuine inductive structure versus sophisticated pattern matching over the training distribution — and can we design experiments that cleanly disambiguate the two?</span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q8">In agentic systems that interact with real environments (code execution, tool use, web browsing), what safety properties can be formally verified at inference time rather than hoped for through training?</span>
    </li>
  </ol>
</div>

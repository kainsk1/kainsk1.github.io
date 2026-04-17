---
title: Research Questions
permalink: /questions/
layout: default
---

<h1 class="page-title" data-i18n="nav.questions">Research Questions</h1>
<p class="page-lede" data-i18n="questions.lede">Open questions that drive my work. Some I am actively pursuing, others are longer-horizon interests.</p>

<div class="rq-section">
  <h2 class="rq-theme" data-i18n="questions.theme1.title">Molecule–Language Alignment Without Paired Data</h2>
  <p class="rq-theme-desc" data-i18n="questions.theme1.desc">
    We have millions of molecules with computable properties (via RDKit, docking, ADMET tools), but paired text–molecule data is scarce compared to image–text corpora. The open question is how to leverage the abundant unlabelled chemical data to improve language-conditioned generation.
  </p>

  <ol class="rq-list">
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q1">
        <strong>Self-supervised representations as a bridge.</strong>
        Contrastive learning can pull together structurally similar molecules and push apart dissimilar ones — learning an embedding space without any text labels. The objective is L = −log[exp(sim(z<sub>i</sub>, z<sub>j</sub>) / τ) / Σ<sub>k</sub> exp(sim(z<sub>i</sub>, z<sub>k</sub>) / τ)]. Can representations trained this way transfer to text-conditioned generation, closing the data-scarcity gap?
      </span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q2">
        <strong>Curriculum learning over chemical space.</strong>
        Not all molecules are equally informative at every stage of training. Can Fisher information (I(θ) = E[∇<sub>θ</sub> log p<sub>θ</sub>(x) ∇<sub>θ</sub> log p<sub>θ</sub>(x)<sup>T</sup>]) or a similar complexity measure serve as a curriculum signal — ordering pretext tasks or datasets so the model builds from simple scaffolds to complex polycyclic structures?
      </span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q3">
        <strong>Recursive reasoning in latent chemical space.</strong>
        Language models reason better when they can think step-by-step. Can a model iteratively refine a molecular latent vector z<sub>t+1</sub> = f(z<sub>t</sub>, c) conditioned on text c before decoding — analogous to chain-of-thought but operating over a continuous chemical manifold? Gated attention or a SteerViT-style mechanism could mediate this.
      </span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q4">
        <strong>Structured reasoning languages for chemistry.</strong>
        Natural language is ambiguous; SMILES is opaque. Can expressing molecular reasoning in a logically structured language (Lean-style proofs, symbolic reaction rules, or a functional EML-based representation) improve faithfulness of text-to-molecule generation and enable formal verification of molecular properties?
      </span>
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
      <span class="rq-q" data-i18n="questions.q5">What is the mechanistic relationship between dead neurons, rank collapse, and loss of plasticity? Does fixing one necessarily fix the others?</span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q6">Evolutionary algorithms can periodically reinitialise or mutate weights. Is there an efficient, differentiable analogue that preserves useful representations while recovering gradient diversity?</span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q7">Does plasticity loss in RL agents follow the same dynamics as in supervised learners, or does the non-stationarity of the target distribution introduce qualitatively different failure modes?</span>
    </li>
  </ol>
</div>

<div class="rq-divider"></div>

<div class="rq-section">
  <h2 class="rq-theme" data-i18n="questions.theme3.title">Online RL for LLMs via Multi-Agent Interaction</h2>
  <p class="rq-theme-desc" data-i18n="questions.theme3.desc">
    Standard LLM training is offline. What if agents could learn in real time from interactions with other agents — selectively reinforcing or suppressing parts of their own responses without explicit human reward labels?
  </p>

  <ol class="rq-list">
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q8">
        <strong>Selective per-response gradient updates.</strong>
        Rather than applying a scalar reward to the entire response, can an agent apply a signed update mask M<sub>t</sub> ∈ {−1, 0, +1} to individual response segments — doing gradient descent on parts it judges poor ("say less of this") and gradient ascent on parts it judges good ("learn to do more of this")? How should M<sub>t</sub> be decided, and can it be learned?
      </span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q9">
        <strong>Preventing sycophantic collapse.</strong>
        When the gradient signal is social, agents may converge on agreeable responses rather than correct ones. What constraints or divergence penalties prevent collapse? Is there a diversity-preserving intrinsic motivation — analogous to a survival drive — that keeps agents from optimising purely for social approval?
      </span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q10">
        <strong>Evolution of interaction dynamics.</strong>
        As agents co-adapt, do their update patterns show interpretable structure — specialisation, negotiation, disagreement resolution? Monitoring gradient norms and update directions over time may reveal whether the agents are learning complementary or redundant roles.
      </span>
    </li>
    <li class="rq-item">
      <span class="rq-q" data-i18n="questions.q11">
        <strong>Measurable outcomes.</strong>
        Does this form of online multi-agent RL improve reasoning quality, social behaviour, conflict resolution, or performance on conversation benchmarks? What is the right evaluation protocol for a training regime with no fixed offline dataset?
      </span>
    </li>
  </ol>
</div>

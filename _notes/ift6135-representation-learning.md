---
title: "IFT6135 — Representation Learning"
course: "UdeM · Winter 2026"
order: 1
description: "Lecture notes from Aaron Courville's graduate course on representation learning at Mila."
pdf: /assets/pdf/notes/ift6135.pdf
---

> These are personal notes — rough, sometimes incomplete, occasionally wrong. Use at your own risk.

## Lecture 1 — What is a representation?

A **representation** is a function $f : \mathcal{X} \to \mathbb{R}^d$ that maps raw inputs into a vector space where downstream tasks become easier. Three properties commonly come up in the literature:

**Disentanglement.** Independent factors of variation in the data are encoded on independent axes of the representation:

$$z = f(x), \quad z_i \perp z_j \text{ for } i \neq j.$$

**Sufficiency.** The representation preserves all information needed for the target task $y$:

$$I(y;\, x) = I(y;\, z).$$

**Invariance.** The representation is invariant to nuisance transformations $g \in \mathcal{G}$:

$$f(g \cdot x) = f(x) \quad \forall g \in \mathcal{G}.$$

These three objectives often conflict, and most of the course is about navigating the trade-offs.

---

## Lecture 2 — Autoencoders

An autoencoder learns a bottleneck representation by minimising reconstruction error:

$$\mathcal{L}_{\text{AE}}(\theta, \phi) = \mathbb{E}_{x \sim \mathcal{D}}\bigl[\|x - g_\phi(f_\theta(x))\|^2\bigr].$$

The encoder $f_\theta$ and decoder $g_\phi$ are jointly trained. Without regularisation the model can learn the identity function; the bottleneck dimension $d$ forces compression.

### Denoising autoencoders

Add noise $\tilde{x} = x + \epsilon$, $\epsilon \sim \mathcal{N}(0, \sigma^2 I)$, and reconstruct the clean input:

$$\mathcal{L}_{\text{DAE}} = \mathbb{E}_{x, \tilde{x}}\bigl[\|x - g_\phi(f_\theta(\tilde{x}))\|^2\bigr].$$

Vincent et al. (2008) showed this is equivalent to score matching — the encoder learns to estimate $\nabla_x \log p(x)$.

---

## Lecture 3 — Variational Autoencoders

The VAE (Kingma & Welling, 2014) places a prior $p(z) = \mathcal{N}(0, I)$ on the latent code and maximises the ELBO:

$$\mathcal{L}_{\text{ELBO}}(\theta, \phi; x)
= \underbrace{\mathbb{E}_{q_\phi(z|x)}\bigl[\log p_\theta(x|z)\bigr]}_{\text{reconstruction}}
- \underbrace{D_{\mathrm{KL}}\bigl(q_\phi(z|x) \,\|\, p(z)\bigr)}_{\text{regularisation}}.$$

The KL term with a Gaussian posterior has a closed form:

$$D_{\mathrm{KL}}\bigl(\mathcal{N}(\mu, \sigma^2 I) \,\|\, \mathcal{N}(0, I)\bigr)
= \frac{1}{2}\sum_{j=1}^{d}\bigl(\mu_j^2 + \sigma_j^2 - \log \sigma_j^2 - 1\bigr).$$

### Reparameterisation trick

To backpropagate through the sampling step $z \sim q_\phi(z|x)$, write:

$$z = \mu_\phi(x) + \sigma_\phi(x) \odot \varepsilon, \qquad \varepsilon \sim \mathcal{N}(0, I).$$

The gradient now flows through $\mu_\phi$ and $\sigma_\phi$ rather than through the stochastic node.

---

## Lecture 4 — Contrastive Learning

Given a positive pair $(x, x^+)$ and $K$ negatives $\{x^-_k\}$, InfoNCE minimises:

$$\mathcal{L}_{\text{NCE}} = -\mathbb{E}\left[\log \frac{\exp(\text{sim}(z, z^+)/\tau)}{\exp(\text{sim}(z, z^+)/\tau) + \sum_{k=1}^{K} \exp(\text{sim}(z, z^-_k)/\tau)}\right],$$

where $\text{sim}(u, v) = u^\top v / (\|u\|\|v\|)$ is cosine similarity and $\tau > 0$ is a temperature.

**Key insight.** Maximising this objective is equivalent to maximising a lower bound on the mutual information $I(z; z^+)$.

*(more lectures to be added)*

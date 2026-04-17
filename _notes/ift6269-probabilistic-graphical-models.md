---
title: "IFT6269 — Probabilistic Graphical Models"
course: "UdeM · Fall 2025"
order: 2
description: "Notes on directed and undirected graphical models, exact and approximate inference, and learning."
pdf: /assets/pdf/notes/ift6269.pdf
---

> Personal notes — use at your own risk.

## Lecture 1 — Directed graphical models

A **Bayesian network** over variables $X_1, \dots, X_n$ factorises as:

$$p(x_1, \dots, x_n) = \prod_{i=1}^{n} p\!\left(x_i \mid \mathrm{pa}(x_i)\right),$$

where $\mathrm{pa}(x_i)$ denotes the parents of $X_i$ in the DAG. The graph encodes **conditional independences** via the criterion of *d-separation*.

### d-separation

Three canonical cases for a path $X \to Z \to Y$ or $X \leftarrow Z \leftarrow Y$:

| Structure | $Z$ observed | $X \perp Y \mid Z$? |
|---|---|---|
| Chain $X \to Z \to Y$ | yes | yes |
| Fork $X \leftarrow Z \to Y$ | yes | yes |
| Collider $X \to Z \leftarrow Y$ | yes | **no** |

Conditioning on a collider *opens* the path — a key gotcha.

---

## Lecture 2 — Undirected models

A **Markov random field** (MRF) factorises over cliques $\mathcal{C}$ of the graph:

$$p(x) = \frac{1}{Z} \prod_{C \in \mathcal{C}} \psi_C(x_C), \qquad Z = \sum_x \prod_{C \in \mathcal{C}} \psi_C(x_C).$$

The partition function $Z$ is generally intractable, which makes learning and inference hard.

### Ising model

Binary variables $x_i \in \{-1, +1\}$ on a grid with pairwise potentials:

$$p(x) = \frac{1}{Z} \exp\!\left(\sum_{(i,j) \in \mathcal{E}} J_{ij} x_i x_j + \sum_i h_i x_i\right).$$

---

## Lecture 3 — Exact inference

### Variable elimination

To compute $p(x_Q)$ where $Q$ is the query set, eliminate variables one by one:

$$p(x_Q) = \sum_{x_{\bar{Q}}} p(x) = \sum_{x_{\bar{Q}}} \prod_i \phi_i(x_{\mathrm{scope}(\phi_i)}).$$

The cost depends on the **elimination order** — finding the optimal order is NP-hard, but good heuristics exist (min-fill, min-degree).

### Belief propagation

On a tree, the exact marginal $p(x_i)$ can be computed in $O(n)$ by passing messages $\mu_{j \to i}(x_i)$:

$$\mu_{j \to i}(x_i) = \sum_{x_j} \psi_{ij}(x_i, x_j) \psi_j(x_j) \prod_{k \in \mathcal{N}(j) \setminus i} \mu_{k \to j}(x_j).$$

*(more lectures to be added)*

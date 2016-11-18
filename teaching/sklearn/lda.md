---
title : "Tutoriel `scikit-learn` : <br />Latent Dirichlet Allocation"
language: fr
author: Romain Tavenard <br />(inspiré de [ce post de blog](http://blog.echen.me/2011/08/22/introduction-to-latent-dirichlet-allocation/))
rights: Creative Commons CC BY-NC-SA
---

# Le modèle _Latent Dirichlet Allocation_
## Exemple introductif (1/2)

Considérons le corpus textuel suivant :

1. J'aime manger des brocolis et des bananes.
2. J'ai mangé un smoothie banane épinard au petit déjeuner.
3. Les chinchillas et les chatons sont mignons.
4. Ma soeur a adopté un chaton hier.
5. Regarde ce mignon petit hamster en train de manger du brocoli.

# Le modèle _Latent Dirichlet Allocation_
## Exemple introductif (2/2)

Le principe de _Latent Dirichlet Allocation_ est de découvrir des thèmes (appelés _topics_) contenus dans ces phrases.
Par exemple, si on cherche 2 _topics_ dans ces phrases, on pourrait obtenir :

* Phrases 1 et 2: 100% _Topic_ A
* Phrases 3 et 4: 100% _Topic_ B
* Phrase 5: 60% _Topic_ A, 40% _Topic_ B
* _Topic_ A: 30% brocoli, 15% banane, 10% petit déjeuner, 10% manger, ...<br />(interprétation : thème "nourriture")
* _Topic_ B: 20% chinchillas, 20% chatons, 20% mignons, 15% hamster, ...<br />(interprétation : thème "animaux")

# Le modèle _Latent Dirichlet Allocation_
## Modèle génératif en toutes lettres

* 1 document = mélange de _topics_
* Modèle génératif (supposant un ensemble de $k$ _topics_ connu)
    1. Tirer un nombre de mots dans le document (_eg._ selon une distribution de Poisson)
    2. Tirer une loi multinomiale pour le document (selon une loi de Dirichlet de paramètre $\alpha$)
    3. Tirer chaque mot du document de la manière suivante :
        1. Tirer un _topic_ $z$ (selon la loi tirée en 2.)
        2. Tirer un mot $w$ selon la loi associée au _topic_ $z$
        3. ajouter ce mot au document    

# Le modèle _Latent Dirichlet Allocation_
## Modèle génératif : en Python / `numpy`

```python
def gen_doc(p_wz, lmbda, alpha_dir):
    # p_wz est p(w|z) la loi associée à chaque topic
    # (sous forme de matrice de taille k x n où n est le nombre de mots)
    # lmbda est le paramètre de la loi de Poisson (sous forme de flottant)
    # alpha_dir est le paramètre de la loi de Dirichlet
    # (sous forme de vecteur de taille k)
    k, n = p_wz.shape
    n_words_in_doc = np.random.poisson(lmbda)
    p_zd = np.random.dirichlet(alpha_dir)  # p(z|d=current_doc)
    counts = np.zeros((n, ))
    for wi in range(n_words_in_doc):
        zi = np.random.choice(np.arange(k), p=p_zd)  # Choix du topic
        wi = np.random.choice(np.arange(n), p=p_wz)  # Choix du mot
        counts[wi] += 1
    return counts
```

# Le modèle _Latent Dirichlet Allocation_
## Apprentissage : le cas du _Collapsed Gibbs Sampler_

**Objectif :** on a des mots dans les documents, on veut trouver le _topic_ duquel provient chaque mot.

1. **Initialisation :** Associer (au hasard) un _topic_ à chaque mot de chaque document
2. Répéter plusieurs fois :
    1. Pour chaque mot $w_{ij}$ de chaque document $d_j$
        1. Mettre à jour $p(z|d=d_j)$ et $p(w=w_{ij}|z)$ selon les comptes actuels (en excluant $z_{ij}$)
        2. Tirer $z$ selon la loi $p(z|d=d_j,w=w_{ij}) \propto p(z|d=d_j) \cdot p(w=w_{ij}|z)$

En fait, légèrement plus fin que ça, en prenant en compte les probabilités _a priori_ pour le calcul de $p(z|d=d_j)$ et $p(w=w_{ij}|z)$.

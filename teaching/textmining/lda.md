---
title : "TD : _Latent Dirichlet Allocation_"
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Dans cette séance, nous nous focaliserons sur la manipulation d'un modèle de
type _topic model_ vu en cours : le modèle _Latent Dirichlet Allocation_
([lien vers l'aide `sklearn`](http://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html)).

Pour s'entrainer à manipuler ce modèle, vous allez utiliser un (petit)
sous-ensemble d'un jeu de données "historique" du domaine de la fouille de texte
qui se nomme `20 Newsgroup` et qui consiste, comme son nom l'indique, en de
courts documents textuels issus de 20 forums (_newsgroups_) thématiques
différents.

Pour charger ces données enregistrées au format `numpy` compressé, vous
utiliserez la fonction `numpy.load` comme suit (après avoir téléchargé le
    fichier `20newsgroup.npz` sur CURSUS) :

```python
content = numpy.load("20newsgroup.npz")
X, y, vocab = content["X"], content["y"], content["vocabulary"]
```

`X` est une matrice terme-document (dans laquelle j'ai supprimé un certain
nombre de _stop-words_ pour obtenir des _topics_ un peu plus lisibles), y un
vecteur indiquant la catégorie dans laquelle chacun des documents a été posté et
`vocab` est un vecteur permettant de faire le lien entre des indices de termes
et les termes en question.
Ainsi, l'expression suivante affiche les termes indicés 20, 32 et 334 du corpus :

```python
print(vocab[[20, 32, 334]])
```

Pour information, les étiquettes de classe correspondent aux _newsgroups_
suivants :

```
alt.atheism 1
comp.graphics 2
comp.os.ms-windows.misc 3
comp.sys.ibm.pc.hardware 4
comp.sys.mac.hardware 5
comp.windows.x 6
misc.forsale 7
rec.autos 8
rec.motorcycles 9
rec.sport.baseball 10
rec.sport.hockey 11
sci.crypt 12
sci.electronics 13
sci.med 14
sci.space 15
soc.religion.christian 16
talk.politics.guns 17
talk.politics.mideast 18
talk.politics.misc 19
talk.religion.misc 20
```

1. Combien de documents contient la collection ? Et combien de termes sont
définis ? Parmi ces termes, combien sont présents dans au moins un document du
corpus ?

# Impact du paramètre $\eta$

2. Observez l'impact du paramètre $\eta$ sur la probabilité moyenne d'apparition
des _topics_ dans les documents. Cette probabilité moyenne d'apparition des
_topics_ dans les documents est une quantité importante qui permet de se rendre
compte de l'importance relative de chacun des topics dans le mélange.

3. Quels sont les indices des 5 _topics_ les plus importants extraits par LDA ?
Et quels sont les 20 mots les plus probables dans chacun de ces _topics_ ?

4. Faites de même document par document, pour 5 documents de votre choix.

# Exercice de synthèse

On souhaite maintenant se focaliser sur un problème de classification supervisée
à deux classes entre les articles issus des _newsgroups_
`soc.religion.christian` et `comp.sys.mac.hardware`.
Pour cela, un nouveau fichier de données a été préparé sur CURSUS, appelé
`20newsgroup_binary.npz`

Créez un modèle de classification supervisée qui fonctionne en deux étapes :

a. Extraire une représentation LDA des documents du sous-corpus en question ;
b. Effectuer une classification SVM à noyau linéaire dans l'espace des _topics_
LDA.

Vous devrez effectuer une validation croisée pour choisir le nombre de
composantes de la décomposition LDA et l'hyper-paramètre $C$ du SVM.

Quel est le contenu des _topics_ des plus discriminants pour cette
classification ?

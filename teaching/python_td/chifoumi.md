---
title : "DL #1: ChiFouMi"
subtitle: Devoir libre pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Le but de ce premier devoir libre (DL) est d'implémenter un jeu de ChiFouMi (ou [Pierre-Feuille-Ciseau](http://fr.wikipedia.org/wiki/Pierre-feuille-ciseaux)) dans lequel l'utilisateur jouera contre l'ordinateur.
Pour vous aider à commencer, un squelette de programme est fourni dans le fichier [`dl1_chifoumi.py`](../py/dl1_chifoumi.py).
Les sections de code à compléter par vos soins sont indiquées par des commentaires de la forme :
```python
# TODO : ...
```
La plupart du temps, ces commentaires sont suivis d'une instruction `pass`{.python} qui a pour seul but de ne pas faire afficher de message d'erreur à l'Interpréteur Python[^1].
Une fois votre code rajouté, vous pourrez donc supprimer ces instructions.
Le principe utilisé ici est que la fonction `tour_chifoumi`{.python} retournera une valeur qui indique le résultat du tour de jeu.
4 résultats sont possibles :

* l'utilisateur a entré le caractère `"q"`{.haskell} (majuscule ou minuscule) : il faut donc quitter le programme (à vous, en fonction de la structure du programme d'en déduire la valeur à retourner par la fonction) ;
* l'utilisateur et l'ordinateur ont choisi le même élément (pierre, feuille ou ciseau) : la valeur de retour de la fonction sera `0`{.python};
* l'utilisateur a battu, à ce tour, l'ordinateur : la fonction devra donc retourner une valeur positive (typiquement `1`{.python}) ;
* l'ordinateur a battu, à ce tour, l'utilisateur: la fonction devra donc retourner une valeur négative (typiquement `-1`{.python}).

[^1]: Par exemple, si le code à remplir se trouve dans une clause `if`{.python}, l'interpréteur attend une portion de code indentée à la suite de ce `if`{.python} et il affichera donc un message d'erreur s'il ne trouve pas de code indenté : l'instruction `pass`{.python} sert à fournir un code indenté pour éviter ce type de messages d'erreur.

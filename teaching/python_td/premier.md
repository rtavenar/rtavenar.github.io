---
title : "DL #3: Calcul du prochain nombre premier"
subtitle: Devoir libre pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Le but de ce troisième devoir libre (DL) est d'implémenter un algorithme de recherche du plus petit nombre premier supérieur à un entier donné.
Pour cela, il vous faudra :

* Une fonction qui détermine si un nombre passé en argument est premier ou non. On ne cherchera pas ici à implémenter la dernière conjecture en vogue mais on pourra toutefois remarquer que si un nombre n'est pas premier, il possède forcément un diviseur strictement plus grand que 1 et plus petit ou égal à sa racine carrée[^1].
* Une fonction qui détermine, pour deux nombres `n`{.python} et `n_div`{.python} passés en argument, si `n_div`{.python} est un diviseur de `n`{.python}.
* Une fonction qui recherche le plus petit entier premier supérieur à un entier `n`{.python} passé en argument.



[^1]: Pour calculer la racine carrée d'un nombre en Python, il faut importer le module `math`{.python} (en écrivant la ligne `import math`{.python} en début de votre fichier) puis utiliser la fonction `math.sqrt`{.python}.

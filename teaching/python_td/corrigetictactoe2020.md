---
title : Sujet du problème Tic-Tac-Toe
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Présentation du sujet

Le Tic Tac Toe est un jeu qui se joue à deux joueurs, identifiés par les symboles "X" ou "O". Les joueurs jouent chacun leur tour, en plaçant leur symbole dans une grille de 3 cases par 3. Le gagnant est le premier à réaliser un alignement de trois symboles, en vertical, en horizontal ou en diagonale. Si les joueurs remplissent toute la grille sans réussir à réaliser un alignement, alors il y a match nul.

On souhaite réaliser une implémentation qui respecte les contraintes suivantes :

* les deux joueurs sont joués par des humains,
* on jouera dans une grille de 9 cases (3*3),
* on souhaite obtenir les traces d'exécution suivantes :

	* Trace 1 (victoire d'un des joueurs) :
```python
# C'est au tour du joueur  X
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 0
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 1
# - X -
# - - -
# - - -
#
# C'est au tour du joueur  O
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 0
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 2
# - X O
# - - -
# - - -
#
# C'est au tour du joueur  X
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 1
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 1
# - X O
# - X -
# - - -
#
# C'est au tour du joueur  O
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 1
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 1
# Case non disponible (déjà remplie)
# C'est au tour du joueur  O
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 1
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 2
# - X O
# - X O
# - - -
#
# C'est au tour du joueur  X
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 2
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 1
# - X O
# - X O
# - X -
#
# Joueur X a gagné
```

	* Trace 2 (match nul) :
```python
# C'est au tour du joueur  X
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 0
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 1
# - X -
# - - -
# - - -
#
# C'est au tour du joueur  O
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 1
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 2
# - X -
# - - O
# - - -
#
# C'est au tour du joueur  X
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 2
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 1
# - X -
# - - O
# - X -
#
# C'est au tour du joueur  O
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 1
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 1
# - X -
# - O O
# - X -
#
# C'est au tour du joueur  X
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 1
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 0
# - X -
# X O O
# - X -
#
# C'est au tour du joueur  O
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 0
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 0
# O X -
# X O O
# - X -
#
# C'est au tour du joueur  X
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 2
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 2
# O X -
# X O O
# - X X
#
# C'est au tour du joueur  O
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 2
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 0
# O X -
# X O O
# O X X
#
# C'est au tour du joueur  X
# Dans quelle ligne souhaitez-vous jouer ? (0, 1 ou 2) 0
# Dans quelle colonne souhaitez-vous jouer ? (0, 1 ou 2) 2
# O X X
# X O O
# O X X
#
# Match nul
```

# Représentation des données
On représentera la grille sous la forme d'une liste de trois lignes, chaque ligne étant stockée sous la forme d'une liste de trois chaînes de caractères.
Chaque chaîne de caractère vaudra soit `"X"`{.haskell}, soit `"O"`{.haskell}, soit `"-"`{.haskell}, correspondant aux trois configurations possibles :

* le joueur `"X"`{.haskell} a joué dans cette case ;
* le joueur `"O"`{.haskell} a joué dans cette case ;
* aucun joueur n'a joué dans cette case.

# Codage des fonctions

1. Ecrire une fonction `init_tictactoe`{.python} qui retourne une grille de Tic-Tac-Toe vide (c'est-à-dire dans laquelle aucune case n'a été jouée). Cette fonction de prendra pas d'argument.

2. Ecrire une fonction `print_tictactoe`{.python} qui affiche dans le terminal une grille de Tic-Tac-Toe passée en argument (_cf._ traces d'exécution plus haut).

3. Ecrire une fonction `est_pleine`{.python} qui indique (par sa valeur de retour) si une grille passée en argument est pleine ou non.

4. Ecrire une fonction `a_gagne`{.python} qui prend en argument une grille et un joueur et indique (par sa valeur de retour) si le joueur en question a gagné ou non dans la grille. Il faudra pour cela vérifié tous les cas possibles de victoire (par ligne, par colonne, en diagonale).

5. Ecrire une fonction `tictactoe_1coup`{.python} qui prend en argument une grille et un joueur et propose au joueur en question de jouer dans la grille à la position qu'il désire (_cf._ trace d'exécution plus haut pour les questions à poser au joueur). Si le joueur demande à jouer dans une case déjà occupée, il faudra lui redemander de jouer dans une autre case, jusqu'à ce qu'il propose une case libre. La fonction `tictactoe_1coup`{.python} devra retourner l'état de la grille après que le joueur ait joué.

6. Ecrire une fonction `tictactoe`{.python} qui ne prend pas de paramètre. C'est la fonction principale qui sera appelée pour jouer au jeu. Cette fonction doit initialiser la grille, lancer le jeu et le faire dérouler tant que :

* personne n'a gagné ;
* la grille n'est pas pleine.

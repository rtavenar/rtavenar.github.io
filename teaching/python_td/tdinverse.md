---
title : Analyse et décomposition de problèmes
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Aurélie Lemaitre, Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---
# Travail à préparer chez vous avant la séance

1. Terminer le TD 5 en s'aidant si nécessaire du corrigé en ligne.

2. Vérifier que vous connaissez les règles des jeux :

* Tic-tac-toe : <https://fr.wikipedia.org/wiki/Tic-tac-toe>
* Mastermind : <https://fr.wikipedia.org/wiki/Mastermind>


#Philosophie du sujet

Lorsqu'on souhaite résoudre un problème, il est souvent nécessaire de le décomposer en sous-fonctions. En TD d'informatique, les sujets que vous recevez sont souvent déjà "pré-machés" par les enseignants : ils réfléchissent pour vous aux structures de données, à la signature des fonctions à utiliser, ainsi qu'à l'appel de la fonction principale pour résoudre un problème global.

Lors de cette séance, vous allez devoir rédiger un sujet de TD pour vos collègues, afin de leur permettre de coder les fonctions pour réaliser un jeu : le Tic Tac Toe ou le Mastermind.
Pour rédiger ce sujet de TD, vous indiquerez explicitement :

* les structures de données utiles pour représenter les éléments principaux (ex : xxx sera représenté sous la forme d'une liste, d'une matrice...)
* les noms, les signatures et le rôle des fonctions (ex : coder la fonction xxx qui prend en entrée zzz, qui calcule/affiche yyy et qui renvoie www)
* l'appel nécessaire pour lancer le jeu (ex : coder la fonction principale yyy qui sera appelée pour lancer le jeu)

Dans un second temps, vous implémenterez le sujet de TD proposé par vos collègues, sur le jeu que vous n'aurez pas étudié.

#Tic Tac Toe

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

#Mastermind

Le Mastermind est un jeu qui se joue à deux joueurs : l'un des joueurs fabrique une combinaison secrète de pions de couleurs pour le second joueur, qui doit essayer de retrouver la combinaison. Pour cela, le seond joueur effectue plusieurs tentatives de combinaison. A chaque tentative, le premier joueur indique la validité de la réponse avec un pion noir pour chaque pion de couleur correcte bien placée, et un pion blanc pour chaque pion de couleur correcte mais mal placée.

On souhaite réaliser une implémentation qui respecte les contraintes suivantes :

* le joueur qui fait deviner la combinaison secrète sera joué par l'ordinateur. Le joueur qui devine sera joué par un humain.
* on fabriquera des combinaisons de 4 pions de couleurs différentes, parmi 6 couleurs représentées par leur initiale.
* on souhaite obtenir les traces d'exécution suivantes :
```python
# Les couleurs disponibles sont : ('B', 'R', 'J', 'V', 'O', 'M')
# Entrer la valeur de la case 0 O
# Entrer la valeur de la case 1 M
# Entrer la valeur de la case 2 R
# Entrer la valeur de la case 3 J
# Tentative  1  |  ['O', 'M', 'R', 'J']  |  ['Blanc', 'Noir']
# Entrer la valeur de la case 0 B
# Entrer la valeur de la case 1 J
# Entrer la valeur de la case 2 R
# Entrer la valeur de la case 3 V
# Tentative  2  |  ['B', 'J', 'R', 'V']  |  ['Blanc', 'Blanc', 'Noir', 'Noir']
# Entrer la valeur de la case 0 V
# Entrer la valeur de la case 1 J
# Entrer la valeur de la case 2 R
# Entrer la valeur de la case 3 B
# Tentative  3  |  ['V', 'J', 'R', 'B']  |  ['Noir', 'Noir', 'Noir', 'Noir']
# Bravo, vous avez réussi en  3 essais
```


Remarque : la fonction `random.sample(lst,nb)`{.python} génère une liste en piochant aléatoirement `nb`{.python} éléments dans la liste `lst`{.python}.

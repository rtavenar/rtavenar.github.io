---
title : Bataille navale
subtitle: Suggestion de découpage numéro 1
language: fr
author: Aurélie Lemaitre, Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---


Dans votre code, la grille de bataille navale sera représentée sous la forme
d'une liste de lignes. Chaque ligne sera elle une liste.
Cette liste pourra contenir plusieurs valeurs :

- `0` indique que la case est vide ;
- un entier positif `i` indique que la case est occupée par le bateau numéro
`i` ;
- `"O"` indique que la case était auparavant occupée par un bateau qui a été
attaqué ;
- `"X"` indique que la case a été attaquée sans succès (car elle était vide).

1. Écrivez une fonction `charger_grille` qui prend en entrée un nom de fichier
et retourne une grille (telle que définie plus haut) correspondant au contenu
du fichier.

2. Écrivez une fonction `affiche_grille` qui prend en entrée une grille et
affiche son contenu.

3. Écrivez une fonction `partie_finie` qui prend en entrée une grille et
retourne un booléen indiquant si la grille correspond à une partie finie
(c'est-à-dire que tous les bateaux ont été coulés) ou non.

4. Écrivez une fonction `bateau_coule` qui prend en entrée un numéro de bateau
et une grille et retourne un booléen qui indique s'il reste au moins un morceau
de ce bateau sur une case.

5. Écrivez une fonction `jouer_coup` qui prend en entrée une grille, demande à
l'utilisateur un coup à jouer et retourne la grille modifiée une fois ce coup
joué.

6. Écrivez une fonction `bataille` qui prend en entrée un nom de fichier
contenant la description des positions de bateaux pour une partie de bataille
navale et déroule la partie correspondante.

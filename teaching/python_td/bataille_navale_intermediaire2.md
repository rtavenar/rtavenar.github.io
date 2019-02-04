---
title : Bataille navale
subtitle: Suggestion de découpage numéro 2
language: fr
author: Aurélie Lemaitre, Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---


Dans votre code, la grille de bataille navale sera représentée sous la forme
d'un dictionnaire. Ce dictionaire aura pour clés les noms de case (par exemple
`"B3"`) et pour valeurs les indices de bateaux. Si une case est vide, la clé
correspondante ne sera pas pas stockée dans le dictionaire. Enfin, au cours du
jeu, ces valeurs pourront être remplacées par les valeurs suivantes :

- `"O"` indiquera que la case était auparavant occupée par un bateau qui a été
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

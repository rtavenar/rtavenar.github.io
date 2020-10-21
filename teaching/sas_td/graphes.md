---
title : "TD 3 : Graphes en SAS"
language: fr
author: Aude Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Graphe 1

1.	Faire un histogramme vertical cumulé de la répartition du type de cholesterol (`chol_status`) par groupe de poids (`weight_status`) en utilisant le jeu de données disponible dans la bibliothèque `SASHELP` et nommé `HEART`. Les pourcentages seront calculés en considérant le nombre de patients dans chaque groupe de poids comme dénominateur.

2.	Modifier le label de l'axe y pour utiliser le label `'Proportion (%)'`.

3.	Modifier le titre de la légende pour qu'il soit en français `'Type de cholesterol'`.

# Graphe 2

1. Dans la bibliothèque `SASHELP`, nous utiliserons le jeu de données `HEART`. Avant de tracer le graphe, il faut dans un premier temps corriger les intitulés des variables `weight` et `height` qui ont été intervertis.

2.	Tracer les points en considérant le poids `weight` en ordonnée et la taille `height` en abscisse.

3.	Tracer une droite de régression donnant la tendance du poids en fonction de la taille en utilisant l'instruction `REG`.

4.	Ajouter les unités aux labels de l'axe des abscisses et de l'axe des ordonnées.

5.	Supprimer la légende du graphique.

6. Enregistrer le graphe obtenu sur votre disque.

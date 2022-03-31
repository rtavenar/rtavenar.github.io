---
title : Visualisation de données issues de bases MongoDB
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Organisation

* Groupes de 2 étudiant(e)s
* Rendu final : au plus tard le vendredi 29/04/2022, 23h59
* Exemple de notebook `R` hébergé sur Google Colab pour celles et ceux qui auraient des soucis pour interroger les base de données hébergées sur MongoDB Atlas depuis leur machine (sous R) : [ici](https://colab.research.google.com/drive/1MwSpXY8BKFlTNudC65cQm-oWfi0OOYsq?usp=sharing)


# Contenu du projet

Dans ce projet, vous serez amenés à manipuler des données issues de bases MongoDB pour générer des visualisations.
Trois visualisations sont demandées et vous devrez en réaliser au moins une en R et au moins une en Python.
Le rendu se fera sous la forme d'une page web hébergée sur GitHub Pages.
⚠️ Attention, tout _commit_ dont la date est postérieure à la date limite de rendu ne sera pas pris en compte dans l'évaluation de votre travail. ⚠️

## Centres de vaccination Covid19

La base `doctolib` contient des informations (récupérées en janvier 2022) relatives aux centres de vaccination contre la Covid19 en Bretagne.
Vous devrez pour cette première visualisation générer une carte des centres de vaccination situés à moins de 50km de Rennes.
L'icône associée à chaque centre sera de couleur rouge, orange ou vert selon le nombre de créneaux de vaccination ouverts sur la période du 26 au 29 janvier 2022 (inclus).

**Exemple de bonus.** Vous pourrez ajouter une seconde visualisation qui se concentrera sur les vaccinations pour première dose (voire même, vous pourrez ajouter un bouton qui bascule d'une visualisation à l'aure lorsque l'utilisateur clique dessus).

## Réseau de publications scientifiques

La base `publications` contient les informations relatives aux publications de scientifiques du laboratoire IRISA pour l'année 2021 (extraites du service HAL).
Visualisez les liens entre les auteurs de ces publications, en utilisant un code couleur qui permette de distinguer les auteurs par leurs nombres de publications et en représentant les liens (co-publications) existant entre les auteurs.
Le nombre d'auteurs présents dans la base étant très grand, vous vous focaliserez sur les 20 auteurs les plus prolifiques (_i.e._ qui ont participé à l'écriture du plus grand nombre d'articles) et votre requête MongoDB devra récupérer pour chacun de ces auteurs la liste de ses publications (la suite du traitement qui consiste à calculer le nombre d'articles commun par paire d'auteurs pourra être réalisée dans votre script).

**Exemple de bonus.** Vous pourrez faire en sorte que l'épaisseur des traits joignant les auteurs soit proportionnelle au nombre de publications communes.

## Visualisation libre de données issues de NYfood

La base `NYfood` contient des informations relatives à des restaurants de New-York.
Pour ce troisième exercice, vous êtes libres de visualiser les données contenues dans cette base comme bon vous semble.

## Visualisation supplémentaire pour un groupe de 3 étudiants

Dans le cas d'un groupe de 3 étudiants, vous avez une visualisation supplémentaire à faire, dont voici les instructions.
La base `elections_rennes` contient les informations relatives aux élections municipales de 2020 à Rennes.
En vous basant sur les polygones de définition des centres de votes disponibles ici (<https://data.rennesmetropole.fr/explore/dataset/perimetres_centres_vote_2014/download/?format=json&timezone=Europe/Berlin&lang=fr>), proposez une visualisation qui place sur une carte les différents bureaux de vote, indique par un code couleur le taux de participation des bureaux de vote, et indique au survol de chaque centre de vote (représenté par un polygone, donc) les totaux des nombre de voix pour chaque candidat (additionnés sur tous les bureaux de vote du centre).

# Évaluation

Pour l'évaluation, il sera porté une attention particulière à ce que :

1. votre code minimise la quantité de calculs à faire par votre machine (en Python ou en R) et que, au contraire, la majeure partie des calculs, sélections de données, _etc._, soit intégrée dans vos requêtes MongoDB ;
2. votre code minimise la quantité de données à faire transiter du serveur de bases de données à votre machine (vos requêtes MongoDB devront donc synthétiser l'information de manière à ne récupérer que les informations nécessaires à vos visualisation).

De plus, les éléments notés "Bonus" plus haut n'en sont pas vraiment : il n’est pas envisageable d'obtenir la note maximale en se contentant d'implémenter le "but principal".
Typiquement, sur les 20 points de la note finale, 6 seront dédiés à la qualité et l'originalité des bonus proposés.
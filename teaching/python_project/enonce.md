---
title : Le projet Cluedo
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---
# Énoncé du projet _Cluedo_

Ce projet est à réaliser par les étudiants en Licence 2 "Mathématiques et Informatiques Appliquées aux Sciences
Humaines et Sociales" (MIASHS) des universités de Rennes (1 et 2) dans le cadre du module de programmation en Python qui
leur est dispensé au premier semestre.

## Date et format du rendu

Ce projet est à rendre pour **le 22 décembre 23h59** dernier délai.
Le rendu prendra la forme d'un dépôt sur CURSUS du/des fichiers Python nécessaire(s) à la résolution de l'enquête.
Les fichiers déposés sur CURSUS ne devront **surtout pas** contenir vos clés d'API Google Maps ou Twitter. Celles-ci
devront être lues par votre programme dans un fichier `credentials.json` (que vous ne fournirez pas pour ne pas
divulguer vos clés d'API) au format :

```json
{
  "twitter": {
    "CONSUMER_KEY": "...",
    "CONSUMER_SECRET": "...",
    "ACCESS_TOKEN": "...",
    "ACCESS_TOKEN_SECRET": "..."
  },
  "googlemaps": {
    "API_KEY": "..."
  }
}
```

## L'enquête

Le 23 Août 2017, à 16h23 (heure locale, soit 14h23 UTC), un crime a été commis à l'UFR Sciences Sociales de l'Université de Rennes 2.
Trois suspects ont été ciblés grâce aux premiers éléments de l'enquête.
Votre rôle sera de déterminer si leur activité sur Twitter est cohérente ou non avec leur présence sur les lieux du
crime à l'heure dite.

Concrètement, votre programme devra afficher, pour chaque suspect listé dans le fichier [`suspects.csv`](../data/suspects.csv), ses nom et
prénom et s'il est possible ou non, d'après ses traces Twitter, qu'il ait commis le crime.

## Vos outils d'enquêteur

Pour mener à bien votre mission, vous pourrez utiliser (outre votre intelligence) les _packages_ Python suivant :

* `tweepy` pour récupérer les tweets émis par les suspects ;
* `googlemaps` pour calculer des temps de trajet théoriques (notez qu'on ne sait pas si les suspects se sont déplacés
à pied, en transport en commun, en vélo ou encore en voiture : il vous faudra envisager toutes les possibilités).

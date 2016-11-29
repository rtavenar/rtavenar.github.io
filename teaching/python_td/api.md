---
title : API web d'accès aux données
subtitle: Planche de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Aurélie Lemaitre, Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---
# Travail à préparer chez vous avant la séance

1. Préparez la première question de cette planche de TD concernant l'utilisation de l'API Google Maps. Pour cela :
* Créez-vous une clé pour cette API ([lien](https://developers.google.com/maps/documentation/elevation/get-api-key)) ;
* Écrivez, pour la position suivante, la requête nécessaire pour obtenir l'élévation du point en question _via_ Google Maps Elevation API :
```
longitude : -1.426533
latitude : 48.005135
```


# Énoncé

Le fichier `rando_gps.json` fournit des séries de positions GPS correspondant à des traces GPS de sorties randonnée de M. Toulemonde.
On cherchera dans ce TD à écrire un programme calculant les dénivelés cumulés positif et négatif de chacune de ces randonnées.
Pour cela, vous utiliserez l'API [`Google Maps Elevation`](https://developers.google.com/maps/documentation/elevation/intro) pour laquelle vous aurez au préalable [demandé une clé](https://developers.google.com/maps/documentation/elevation/get-api-key).

2. Écrivez une fonction qui prenne en entrée une position GPS et une clé Google Maps Elevation API et retourne l'élévation de la position.
La position GPS sera passée sous la forme d'un dictionnaire tel que :
```python
coord = {"lon": -1.426533, "lat": 48.005135}
```

3. Écrivez une fonction qui prenne en entrée une liste de positions GPS (chacune codée sous la forme d'un dictionnaire tel que précédemment) et une clé Google Maps Elevation API et retourne une liste d'élévations.
Vous pourrez utiliser l'exemple suivant pour vos tests :
```python
lst_gps = [{"lon": -1.426533, "lat": 48.005135}, {"lon": -1.418127, "lat": 47.986058},
           {"lon": -1.427611, "lat": 47.989871}, {"lon": -1.430202, "lat": 48.000354}]
```

4. Écrivez une fonction qui prenne en entrée une liste de positions GPS et une clé Google Maps Elevation API et retourne la somme des dénivelés positifs (d'une part) et négatifs (d'autre part).
Par exemple, si on a une liste de coordonnées GPS pour lesquelles on a obtenu les élévations suivantes :
```python
[38.11, 68.63, 54.60, 36.42]
```
on devrait retourner la paire de valeurs :
```python
(30.52, 32.21)
```

5. Écrivez une fonction qui prenne en entrée un nom de fichier JSON (contenant des informations sur diverses randonnées) et une clé Google Maps Elevation API et affiche, pour chaque randonnée, son nom (attribut `"name"`{.haskell}) et la somme de ses dénivelés positifs (d'une part) et négatifs (d'autre part).
Pour le fichier `rando_gps.json`, on doit obtenir une sortie du type :
```
[TraceGPS Le long de la quincampoix - Pire-sur-Seiche] D+: 111.4m, D-: 111.4m
[TraceGPS Issued  Messac - CIRCUIT DU PORT] D+: 31.7m, D-: 31.7m
[TraceGPS Issued  Coemes-Retiers] D+: 417.9m, D-: 417.9m
```

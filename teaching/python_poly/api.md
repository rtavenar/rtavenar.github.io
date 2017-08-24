# Récupération de données à partir d'API web

De nombreux services web fournissent des API (_Application Programming Interface_) pour mettre des données à disposition du grand public. Le principe de fonctionnement de ces API est le suivant : l'utilisateur effectue une requête sous la forme d'une requête HTTP, le service web met en forme les données correspondant à la requête et les renvoie à l'utilisateur, dans un format défini à l'avance.

Voici une liste (très loin d'être exhaustive) d'API web d'accès aux données :

* Google Maps
    * Directions API : permet de calculer des itinéraires ;
    * Elevation API : permet de calculer l'altitude d'un point sur le globe terrestre ;
    * Distance Matrix API : permet de calculer des distances entre points du globe ;
    * Geocoding API : permet d'associer une coordonnée GPS à une adresse.
* Twitter
    * Twitter API : permet de récupérer des informations sur les utilisateurs du réseau et leurs _tweets_.
* Facebook
    * Facebook Graph API : permet de récupérer des informations sur des utilisateurs Facebook .
* STAR (Transports en commun rennais)
    * Horaires des bus ;
    * Disponibilité des vélos dans les relais VéloStar.


Pour manipuler en Python de telles données, il faudra donc être capable :

1. d'envoyer une requête HTTP et de récupérer le résultat ;
2. de transformer le résultat en une variable Python facilement manipulable.

Pour ce qui est du second point, la plupart des API web offrent la possibilité de récupérer les données au format JSON.
Nous avons vu précédemment dans ce cours que ce format était facilement manipulable en Python, notamment parce qu'il est très proche de la notion de dictionnaire.
Ce chapitre se focalise donc sur la réalisation de requêtes HTTP en Python.

## Requêtes HTTP en Python

### Format d'une requête HTTP

Dans un premier temps, étudions le format d'une requête HTTP, telle que vous en effectuez des dizaines chaque jour, par l'intermédiaire de votre navigateur web.
Lorsque vous entrez dans la barre d'adresse de votre navigateur l'URL suivante :

```
http://people.irisa.fr/Romain.Tavenard/index.php?page=3
```

votre navigateur va envoyer une requête au serveur concerné (cette requête ne contiendra pas uniquement l'URL visée mais aussi d'autres informations sur lesquelles nous ne nous attarderons pas ici).
Dans l'URL précédente, on distingue 4 sous parties :

* `http://` indique le protocole à utiliser pour effectuer la requête (ici HTTP). Dans ce chapitre, nous ne nous intéresserons qu'aux protocoles HTTP et HTTPS (version sécurisée du protocole HTTP) ;
* `people.irisa.fr` est le nom de domaine du serveur (_ie._ de la machine) à contacter pour obtenir une réponse ;
* `/Romain.Tavenard/index.php` indique le chemin du fichier à récupérer sur cette machine ;
* `?page=3` indique que l'on doit passer la valeur `3` au paramètre `page` lors de la requête.

De la même façon, lors d'un appel à une API web, on spécifiera le protocole à utiliser, la machine à contacter, le chemin vers la ressource voulue et un certain nombre de paramètres qui décriront notre requête.
Voici un exemple de requête à une API web (l'API Google Maps Directions en l'occurrence) :
```
https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal
```

Vous pouvez copier/coller cette URL dans la barre d'adresse de votre navigateur et observer ce que vous obtenez en retour.
Observez que le résultat de cette requête est au format JSON.
En fait, si vous étudiez plus précisément l'URL fournie, vous verrez que c'est nous qui avons demandé à obtenir le résultat dans ce format.
De plus, on a spécifié dans l'URL que l'on souhaitait obtenir les informations d'itinéraire pour aller de Toronto (paramètre `origin`) à Montreal (paramètre `destination`).

En plus de ces paramètres, il est souvent utile (pour pouvoir profiter pleinement des fonctionnalités des API) de spécifier une clé d'API sous la forme d'un paramètre supplémentaire (nommé `key` dans les API Google Maps par exemple).
Ainsi, la requête précédente deviendrait :
```
https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=VOTRE_CLE
```

dans laquelle vous devrez remplacer `VOTRE_CLE` par une clé que vous aurez préalablement générée et qui vous permettra d'utiliser le service web de manière authentifiée.

### Utilisation du module `urllib.request`

La section précédente proposait un rappel sur le format des requêtes HTTP et vous avez été invités à effectuer des requêtes HTTP à l'aide de votre navigateur.
Si maintenant on souhaite récupérer de manière automatique le résultat d'une requête HTTP pour le manipuler en Python, le plus commode est d'effectuer la requête HTTP depuis Python.
Pour cela, on utilise le module `urllib.request`. Ce module contient notamment une fonction `urlopen` qui se comporte (presque) comme la fonction `open` que vous connaissez qui permet de lire le contenu d'un fichier stocké sur votre disque dur :
```python
import urllib.request

url = "..."  # Stockez ici votre requête HTTP

fp = urllib.request.urlopen(url)
contenu = fp.read().decode("utf-8")
```

On voit ici deux nuances par rapport à l'utilisation de la fonction `open`.
Tout d'abord, il n'existe pas de fonction `readlines` permettant de lire le résultat de la requête HTTP ligne par ligne, on utilisera donc la fonction `read`.
De toute façon, pour le cas de la lecture d'un résultat au format JSON, il n'aurait pas été pertinent de lire le résultat ligne par ligne car il faut avoir accès à l'ensemble du document JSON pour pouvoir le traiter avec le module `json`.
Ensuite, on ne peut pas définir l'encodage à utiliser pour la lecture lors de l'appel à `urlopen`.
On le fait donc dans un deuxième temps à l'aide de la méthode `decode`.

Une fois ces quelques lignes exécutées, la variable `contenu` contient une chaîne de caractères correspondant au document JSON retourné par l'API.
Il suffit donc alors d'utiliser le module `json` pour transformer cette chaîne de caractères en données manipulables en Python.

En pratique, dans de nombreux cas, des modules Python existent pour permettre d'utiliser les API grand public sans avoir à gérer les requêtes HTTP directement.
C'est par exemple le cas des modules `googlemaps` (qui permet d'accéder à toutes les API Google Maps citées plus haut) ou `tweepy` (pour l'API Twitter).

**Exercice 8.1**
Écrivez une fonction qui prenne en entrée une clé d'API Google Maps et deux villes et retourne le temps de trajet (en secondes) prévu par Google Maps API pour aller d'une ville à l'autre.

---
title : "Fiche : lancer MongoDB (serveur et client) sous Linux"
subtitle: Fiche pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Pour utiliser `mongodb` en salle A003, vous aurez besoin de trois fenêtres de terminal.

# Fenêtre "serveur"

Dans une première fenêtre, lancez le serveur `mongodb` :

```
mongod --port 1234 --dbpath /export/db/
```

Si un message d'erreur s'affiche, c'est probablement parce que, pour une raison ou pour une autre, vous n'avez pas le droit d'écrire dans le répertoire `/export/db/`. Dans ce cas, vous pouvez créer un sous-répertoire à utiliser pour votre serveur `mongodb` :

```
mkdir /export/db/monnomdelogin
```

Et le lancement de votre serveur s'effectue alors via la commande :

```
mongod --port 1234 --dbpath /export/db/monnomdelogin
```

# Fenêtre "client"

Une fois le serveur lancé, vous pouvez démarrer, **dans un autre terminal**, un client `mongodb` :

```
mongo localhost:1234
```

Dans cette fenêtre, vous pouvez vérifier si la base de données que vous souhaitez utiliser est déjà chargée ou non :
```
> use nomdemabase
> db.getCollectionInfos()
```

# Fenêtre auxiliaire

Si votre base n'est pas chargée dans `mongodb`, vous pouvez la charger à l'aide de l'une des commandes suivantes (exécutée dans un troisième terminal, que nous appellerons terminal auxiliaire) :

```
mongorestore --host host_name:port_num -d test /chemin/vers/test/
```

ou, si votre base est stockée non pas sous la forme d'un répertoire contenant des fichiers binaires mais sous a forme d'un fichier JSON :

```
mongoimport --db nomdelabase --file /chemin/vers/le/fichier.json --jsonArray --host host_name:port_num
```

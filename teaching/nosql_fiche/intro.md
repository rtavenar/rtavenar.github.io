---
title : "Fiche : lancer MongoDB (serveur et client) sous Linux"
subtitle: Fiche pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Pour utiliser `mongodb` en salle A003 ou A111, vous aurez besoin de trois
fenêtres de terminal.
Les couleurs utilisées dans ce document seront ré-utilisées dans les sujets et
corrigés de TD tout au long du semestre :

```bash
Ceci est une fenêtre de terminal utilisée pour lancer le serveur.
```

```bash_alt
Ceci est une fenêtre de terminal utilisée pour charger des bases
de données sur le serveur.
```

```bash_client
Ceci est une fenêtre de terminal utilisée pour lancer un client.
```

# Fenêtre "serveur"

Dans une première fenêtre, lancez le serveur `mongodb` :

```bash
mongod --port 1234 --dbpath /export/db/
```

Si un message d'erreur s'affiche, c'est probablement parce que, pour une raison
ou pour une autre, vous n'avez pas le droit d'écrire dans le répertoire
`/export/db/`. Dans ce cas, vous pouvez créer un sous-répertoire à utiliser
pour votre serveur `mongodb` :

```bash
mkdir /export/db/monnomdelogin
```

Et le lancement de votre serveur s'effectue alors via la commande :

```bash
mongod --port 1234 --dbpath /export/db/monnomdelogin
```

# Fenêtre "client"

Une fois le serveur lancé, vous pouvez démarrer, **dans un autre terminal**, un
client `mongodb` :

```bash_client
mongo localhost:1234
```

Dans cette fenêtre, vous pouvez vérifier si la base de données que vous
souhaitez utiliser est déjà chargée ou non :

```javascript
> use nomdemabase
> db.getCollectionInfos()
```

# Fenêtre auxiliaire

Si votre base n'est pas chargée dans `mongodb`, vous pouvez la charger à l'aide
de l'une des commandes suivantes (exécutée dans un troisième terminal, que nous
    appellerons terminal auxiliaire) :

```bash_alt
mongorestore --host host_name:port_num -d test /chemin/vers/test/
```

ou, si votre base est stockée non pas sous la forme d'un répertoire contenant
des fichiers binaires mais sous a forme d'un fichier JSON :

```bash_alt
mongoimport --db nomdelabase --file /chemin/vers/le/fichier.json --jsonArray --host host_name:port_num
```

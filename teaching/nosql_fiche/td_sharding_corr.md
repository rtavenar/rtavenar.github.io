---
title: "Réplication et Sharding"
subtitle: Corrigé de TD pour un cours dispensé à l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

# Réplication (utilisation de _Replica Set_)

Vous allez simuler l'existence d'un _cluster_ de 3 machines (sauf que, dans votre cas, les trois noeuds seront situés sur la même machine : la vôtre). Pour cela, lancez un client MongoDB à l'aide de la commande :

```bash
mongo --nodb
```

Le paramètre `--nodb` permet d'indiquer au client MongoDB de ne pas se connecter, pour le moment, à une quelconque base. Pour créer un cluster sur lequel répliquer des données, on utilise la classe `ReplSetTest` :

```javascript
> repSet = new ReplSetTest({"nodes" : 3})
> repSet.startSet()
> repSet.initiate()
```

Cette commande, si elle a fonctionné, a dû lancer 3 processus `mongod`. Pour le vérifier, lancez la commande suivante dans un nouveau terminal (dans le shell) :

```bash_alt
ps all
```

Si la commande précédente renvoie trop de résultats, on peut limiter l'affichage des résultats aux lignes qui contiennent le terme `mongo` :

```bash_alt
ps all | grep mongo
```

1. Dans la suite, tous les messages d'avertissement correspondant à ce _Replica Set_ seront affichés dans la console MongoDB dans laquelle vous avez créé le cluster, rendant les sorties difficilement lisibles. Gardez donc cette fenêtre ouverte dans un coin sans y toucher et ouvrez un nouveau client MongoDB en lui indiquant de se connecter au processus tournant sur le port 31000 en utilisant la base test.

```bash
mongo localhost:31000/test
```

Vous devriez obtenir une invite de commande du type :

```javascript
testReplSet:PRIMARY>
```

Cela vous indique que vous êtes connecté au noeud maître (`PRIMARY`) d'un _Replica Set_. Pour obtenir plus d'informations sur ce _Replica Set_, exécutez la commande suivante :

```javascript
testReplSet:PRIMARY> db.isMaster()
```

Lorsque vous êtes connecté, comme c'est votre cas, au noeud maître d'un _Replica Set_, vous pouvez effectuer les opérations usuelles d'insertion / recherche de données dans les bases du _Replica Set_ de manière transparente.

2. Insérez des documents dans une collection `coll` de la base courante à l'aide de la commande :

```javascript
testReplSet:PRIMARY> for(var i=0; i < 100000; i++) {db.coll.insert({count: i})}
```

Vous pouvez également avoir une vision de l'état des noeuds esclaves du _Replica Set_ à l'aide de la commande :

```javascript
testReplSet:PRIMARY> rs.printSlaveReplicationInfo()
```

Observez notamment que lors de votre dernière insertion de données dans une collection de la base test, chaque noeud a été instantanément mis à jour.
Pour finir, stoppez votre cluster en entrant la commande suivante dans la fenêtre dans laquelle vous l'aviez créé :

```javascript
> repSet.stopSet()
```

# Répartition (_Sharding_)
Vous allez simuler l'existence d'un cluster de 3 machines (sauf que, dans votre cas, les trois noeuds seront situés sur la même machine : la vôtre). Pour cela, lancez un client MongoDB à l'aide de la commande (ou utilisez la fenêtre précédemment ouverte avec la même commande) :

```bash
mongo --nodb
```

Le paramètre `--nodb` permet d'indiquer au client MongoDB de ne pas se connecter, pour le moment, à une quelconque base. Pour créer un cluster sur lequel répartir des données, on utilise la classe `ShardingTest` :

```javascript
> cluster = new ShardingTest({"shards" : 3, "chunksize" : 1})
```

Ignorez pour le moment l'attribut `chunksize`.
Cette commande, si elle a fonctionné, a dû lancer 3 processus `mongod` et un processus `mongos`. Pour le vérifier, lancez la commande suivante dans un nouveau terminal (dans le shell) :

```bash
ps all
```

Si la commande précédente renvoie trop de résultats, on peut limiter l'affichage des résultats aux lignes qui contiennent le terme mongo :

```bash
ps all | grep mongo
```

On obtient une sortie du type :

```
1797 ttys001   49:52.51 mongod
 1804 ttys002    0:01.02 mongo
54243 ttys007    0:00.13 mongo –nodb
54244 ttys007    0:02.54 mongod --port 30000 --dbpath /data/db/test0 --setParameter enableTestCommands=1
54245 ttys007    0:02.05 mongod --port 30001 --dbpath /data/db/test1 --setParameter enableTestCommands=1
54246 ttys007    0:02.06 mongod --port 30002 --dbpath /data/db/test2 --setParameter enableTestCommands=1
54247 ttys007    0:01.20 mongos --port 30999 --configdb localhost:30000 --chunkSize 1 --setParameter enableTestCommands=1
54274 ttys008    0:00.00 grep mongo
```

Par défaut, les processus `mongod` sont créés sur les ports 30000, 30001 et 30002 et le processus `mongos` sur le port 30999.

3. Dans la suite, tous les messages d'avertissement correspondant à ce cluster seront affichés dans la console MongoDB dans laquelle vous avez créé le cluster, rendant les sorties difficilement lisibles. Gardez donc cette fenêtre ouverte dans un coin sans y toucher et ouvrez un nouveau client MongoDB en lui indiquant de se connecter au processus mongos (dont vous devez connaître le port) en utilisant la base test.

```bash
mongo localhost:30999/test
```

On remarque alors que le prompt indique que l'on est connecté à un cluster :

```javascript
mongos>
```

Dans la suite, vous allez interagir avec le processus mongos d'une manière transparente (quel que soit le nombre de _shards_). Toutefois, vous pourrez toujours obtenir de l'info sur la structure du cluster utilisé à l'aide de la commande :

```javascript
mongos> sh.status(true)
```

4. Pour l'instant, vous n'avez pas inséré de collection dans la base `test`, elle n'apparaît donc pas dans la liste des bases présentes sur le cluster. Pour y remédier, insérez des données dans une collection `users`, vérifiez le nombre de documents insérés dans la collection puis répétez la commande `status` :

```javascript
mongos> for(var i=0 ; i<100000 ; i++) {
  db.users.insert({"username" : "user" + i, "created_at": new Date()}) ;
}
```

Vous devez maintenant voir la base `test` apparaître, avec un _shard_ primaire attribué au hasard. La propriété `partitioned` de la base étant fixée à `false`, cela signifie que toutes les données sont pour l'instant stockées sur le _shard_ primaire.

Pour permettre la répartition automatique des données dans le _cluster_, il faut :

a. Autoriser le _sharding_ sur la base :
```javascript
mongos> sh.enableSharding("nomDeLaBase")
```
b. créer un index sur la collection à distribuer : cet index sera celui sur lequel la répartition sera faite (ainsi les valeurs consécutives pour cet index auront plus de chances de se retrouver sur le même _shard_)
c. Demander de répartir la collection en utilisant l'index créé (le champ correspondant sera appelé clé de répartition, ou _shard key_) :
```javascript
mongos> sh.shardCollection("nomDeLaBase.nomDeLaCollec",
                           {"cleDeRepartition" : 1})
```

5. Mettez en oeuvre la répartition des données de la collection `users` à travers le cluster en utilisant `username` comme clé de répartition. Observez le statut du _cluster_ à l'issue de cette manipulation.

```javascript
mongos> sh.enableSharding("test")
mongos> db.users.ensureIndex({"username" : 1})
mongos> sh.shardCollection("test.users", {"username" : 1})
mongos> sh.status(true)
```

**Il est possible que vous n'ayez pas à faire ce qui est indiqué dans le paragraphe suivant, dépendant de la configuration de MongoDB sur votre machine.**
Si dans vos rapports de statut du cluster, vous voyez que la propriété `Currently enabled` de la section `Balancer` est à `false`, alors vos données ne seront pas réparties à travers les _shards_ de votre _cluster_. Vous devrez donc activer le _balancer_ (le processus qui se charge de l'équilibrage entre les _shards_) sur la collection visée :

```javascript
mongos> sh.enableBalancing("test.users")
mongos> sh.setBalancerState(true)
mongos> sh.status(true)
```

Un nouvel appel à la fonction `sh.status()` doit vous montrer que les _chunks_ (les morceaux de votre collection) ne se trouvent plus maintenant sur le _shard_ primaire uniquement mais sont bien répartis sur tous les _shards_.

6. Affichez le contenu correspondant à l'utilisateur `"user12345"`{.haskell} et vérifiez que la syntaxe utilisée habituellement pour ce type de requête fonctionne ici également.

```javascript
mongos> db.users.find({username : "user12345"})
```

7. Affichez les détails du déroulement de la requête à l'aide de la fonction `explain()`. Combien de _shards_ sont mobilisés pour cette requête ? S'agit-il du/des _shard(s)_ que vous auriez pu prévoir à la lecture du statut de votre _cluster_ ?

```javascript
mongos> db.users.find({username : "user12345"}).explain()
```

8. Qu'en est-il si vous souhaitez récupérer l'ensemble des documents de la collection ?

```javascript
mongos> db.users.find({}).explain()
```

On voit alors que tous les _shards_ sont mobilisés.

9. Notez (pour plus tard) la sortie de la commande suivante :

```javascript
mongos> db.users.getShardDistribution()
```

10. Insérez de nouveau des données dans la collection `users` et observez l'évolution du nombre de _chunks_ et leur répartition à travers les _shards_. Combien de _chunks_ ont été impactés par cette insertion de données ?

```javascript
mongos> for(var i=100001 ; i<110000 ; i++) {   
  db.users.insert({"username" : "user" + i, "created_at": new Date()}) ;
}
mongos> sh.status(true)
```

4 _chunks_ ont été insérés, un a vu ses bornes modifiées (celui correspondant au `$minKey`), les autres sont restés inchangés.

11. Répétez la commande de la question 9 et observez que la répartition du nombre de documents par _chunk_ a évolué. À votre avis, pourquoi le serveur MongoDB n'a-t-il pas effectué un équilibrage parfait des documents à travers les _chunks_ ?

En début de ce sujet de TD, il vous a été indiqué, à la création du _cluster_, d'affecter à l'attribut `chunksize` la valeur 1, ce qui signifie qu'un _chunk_ peut, au plus, contenir 1Mo de données.

12. Changez cette limite à l'aide de la commande suivante :

```javascript
mongos> use config
mongos> db.settings.save({"_id": "chunksize", "value": 32})
mongos> use test
```

Le nombre de _chunks_ a-t-il évolué ? Que se passe-t-il si vous répétez l'opération d'insertion de données décrite à la question 10 ?

Le nombre de _chunks_ ne baisse pas au moment de la modification de la limite, par contre, le serveur est désormais capable d'insérer 10 000 documents dans la base sans créer de nouveau _chunk_.
Pour finir, stoppez votre _cluster_ en entrant la commande suivante dans la fenêtre dans laquelle vous l'aviez créé :

```javascript
> cluster.stop()
```

# Pour aller plus loin

Si vous deviez, en pratique, mettre en place un réel cluster de réplication / _sharding_, les pages d'aide dédiée de MongoDB vous seraient d'une aide précieuse :

* <https://docs.mongodb.org/manual/core/replica-set-architectures/>
* <https://docs.mongodb.org/manual/administration/sharded-cluster-deployment/>

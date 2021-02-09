---
title: "Index"
subtitle: Corrigé de TD pour un cours dispensé à  l'université de Rennes 2
language: fr
author: Romain Tavenard
rights: Creative Commons CC BY-NC-SA
---

Pour ce TD, vous allez travailler sur une base nommée `large_db` et sa collection `users`.

1. Combien de documents contient cette collection ? Quels sont les attributs des documents de la collection ?

# Sans index

MongoDB permet d'obtenir un certain nombre d'informations sur le déroulement d'une requête à l'aide de la fonction `explain()` :

```javascript
> db.nomDeLaCollection.find({...}).explain("executionStats")
```

2. Utilisez cette méthode pour obtenir (i) le temps d'exécution, (ii) le nombre de documents parcourus et (iii) le nombre de documents retournés par une simple requête demandant d'afficher les informations des utilisateurs dont la clé `"name"`{.javascript} vaut `"user101"`{.javascript}.

3. Même chose en ne demandant de retourner qu'un utilisateur. Que remarquez-vous ?

4. Répétez encore cette opération en cherchant maintenant l'utilisateur `"user499999"`{.javascript}. Que remarquez-vous ?

# Avec un index

5. Passez maintenant à la base `large_db_with_index` ayant le même contenu que la base précédente, mais disposant d'index.
Affichez les index existant sur la collection `users` de cette base : sur quel(s) attribut(s) portent-ils ?

6. Répétez les opérations précédentes (questions 2 à 4). Que remarquez-vous ? Quel(s) index ont été utilisés par ces requêtes ?

# Index composés

7. Effectuez les requêtes suivantes et examinez leur exécution (nombre de documents parcourus, index utilisés) :

* Afficher les utilisateurs âgés de 20 ans ;
* Afficher les utilisateurs âgés de 20 ans par ordre croissant de nom d'utilisateur ;
* Afficher les utilisateurs âgés de 20 ans par ordre croissant de date de création ;
* Afficher les utilisateurs âgés de 20 ans dont le nom d'utilisateur est compris entre `"user100000"`{.javascript} et `"user500000"`{.javascript}.

# Exercice de synthèse

Liens utiles :

* <http://docs.mongodb.org/master/core/2dsphere/>
* <http://docs.mongodb.org/master/core/index-text/>
* <http://docs.mongodb.org/master/core/index-single/>

10. Passez à la base `food`. Quels sont les index définis sur la collection `NYfood` et de quel type sont-ils ?
Quelles commandes a-t-il fallu exécuter pour les créer ?

11. Vérifiez que ces index sont effectivement utilisés à l'aide de quelques requêtes simples (éventuellement issues des TD précédents).

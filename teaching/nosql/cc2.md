# MongoDB : CC2

Pour cet examen de contrôle continu, tous les documents sont autorisés et l'accès à internet n’est pas interdit à l’exception stricte des moyens de discussion de type e-mails, messagerie instantanée, etc. Toute contrevenance à cette règle simple entraînera la note de 0 sans prise en compte d’aucune excuse que ce soit.
Les questions de cet examen sont indépendantes et ne sont pas triées par ordre de difficulté, n'hésitez pas à commencer par celles qui vous semblent les plus accessibles.
Au besoin, vous créerez les structures d'index nécessaires au bon fonctionnement de vos requêtes et reporterez dans votre document-réponse les commandes MongoDB utilisées pour cela.

## Éléments utiles

Durant cet examen de contrôle continu, vous pourriez avoir besoin des pages d'aide suivantes :
* <https://docs.mongodb.org/manual/reference/operator/aggregation/substr/>
* <https://docs.mongodb.org/manual/reference/operator/aggregation-arithmetic/>

De plus, il sera utile de savoir que lorsque l'on écrit dans un client MongoDB la commande suivante :
```
d = new Date("2012/03/12 21:03Z")
```
le `"Z"` terminal signifie que la date est spécifiée dans le fuseau horaire de l’utilisateur et non pas en heure UTC (vous pouvez tester les deux versions avec et sans le `"Z"` final pour vous en convaincre : vous devriez observer un décalage d'une heure à cette période de l'année).



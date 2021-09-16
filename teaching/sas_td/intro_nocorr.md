---
title : "TD 1 : Introduction au logiciel SAS"
language: fr
author: Aude Tavenard
rights: Creative Commons CC BY-NC-SA
---

1.	Créer un répertoire SAS2021 dans Fichiers en utilisant l’aide d’utilisation de SAS OnDemand. 
Puis créer un programme nommé TD1 et l’enregistrer dans le répertoire SAS2021. 

2.	Créer la bibliothèque `td1` qui pointe sur le répertoire SAS2021.

3.	Importer des données

a.	Importer les données disponibles dans le fichier `patients.csv` dans la
    bibliothèque `td1` via le menu SAS.
    Enregistrer le programme créé par SAS pour faire l'import.

b.	Importer les données poids en utilisant le code SAS input suivant :

```SAS
data td1.poids;
Input patid $ visite $ poids;
datalines;
1007-012 V2 .
1007-012 V3 80
1007-013 V1 82
1007-013 V2 83
1007-013 V3 84
1007-014 V1 60
1007-014 V2 61
1007-014 V3 .
1007-009 V2 72
1007-009 V3 70
1007-010 V1 60
1007-010 V2 60
1007-010 V3 58
1007-001 V2 75
1007-001 V3 73
1007-004 V1 76
1007-004 V2 78
1007-004 V3 79
1007-005 V1 92
1007-005 V2 90
1007-005 V3 92
1007-006 V1 68
1007-011 V1 72
1007-011 V2 71
1007-015 V1 70
1007-015 V2 70
1007-015 V3 69
1007-016 V1 62
1007-016 V2 61
1007-016 V3 62
1007-017 V1 49
1007-017 V2 48
1007-017 V3 48
1007-018 V1 56
1007-018 V2 .
1007-018 V3 56
1007-019 V1 76
1007-019 V2 .
1007-019 V3 76
1007-020 V1 78
1007-001 V1 76
1007-006 V2 66
1007-006 V3 69
1007-007 V1 60
1007-007 V2 58
1007-002 V1 56
1007-002 V2 54
1007-002 V3 50
1007-003 V1 82
1007-003 V2 80
1007-003 V3 79
1007-007 V3 57
1007-008 V1 87
1007-008 V2 89
1007-008 V3 90
1007-009 V1 72
1007-011 V3 72
1007-012 V1 78
1007-020 V2 79
1007-020 V3 80

;
run;
```

4.	Fusionner les fichiers patients et poids dans une table `donnees`
enregistrée dans la bibliothèque.

5.	Créer les dates `datnais1` et `datnais2` en partant de la date de
naissance mais en utilisant les formats respectifs suivants :
  a.	`FRADFWDX.`
  b.	`MMYYS7.`

6.	Créer les variables suivantes en utilisant les données disponibles :

  a.	Variable `AGE` avec le label "Age (annees)" et le format `best12.`
  b.	Variable `IMC` définie comme poids/taille^2 où le poids est exprimé en
  kg et la taille en m avec le label "IMC (kg/m2)" et le format `best12.`
  c.	Variable `IMC_CAT` avec le label "Categorie IMC" et le format `$10.`
  contenant les catégories de l'IMC (<20, 20-25, >25)
  d.	Variable `NAISSY` avec le label "Annee de naissance" et le format
  `best12.` contenant l'année de naissance

7.	Créer les tables suivantes dans la bibliothèque `td1` à partir du fichier
fusionné à l'étape 4 et modifié à l'étape 6:

  a.	JEUNES contenant les patients avec date de naissance après le 01/01/1999

  b.	FILLES contenant toutes les filles

8.	Créer une table à partir de la table `FILLES` contenant l'identifiant
`patid` et la date de naissance `datenais` sans répétition de l'identifiant
`patid`.

9.	Exporter les données `td1.jeunes` dans un fichier CSV
(méthode de votre choix).

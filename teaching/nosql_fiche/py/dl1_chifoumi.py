import random

__author__ = 'Romain Tavenard romain.tavenard[at]univ-rennes2.fr'


def tirage_aleatoire(l):
    return random.choice(l)


def compare_chifoumi(joueur, ordinateur):
    # TODO: retourner une valeur indiquant l'identité du vainqueur
    pass


def tour_chifoumi():
    in_joueur = None
    valeurs_jeu = ["1", "2", "3"]
    # Ce qui suit veut dire que la valeur 1 (entrée par l'utilisateur) signifie Pierre, 2 signifie Feuille et 3 Ciseau
    d = {"1": "Pierre", "2": "Feuille", "3": "Ciseau"}
    valeurs_quitte = ["Q", "q"]
    while in_joueur not in valeurs_jeu + valeurs_quitte:
        # TODO: récupérer la valeur entrée par l'utilisateur (après lui avoir affiché les valeurs acceptables)
        pass
    if in_joueur in valeurs_quitte:
        # TODO: spécifier la valeur de retour
        pass
    else:
        in_ordinateur = tirage_aleatoire(valeurs_jeu)
        print("Tirage ordinateur : %s" % d[in_ordinateur])
        return compare_chifoumi(in_joueur, in_ordinateur)


def partie_chifoumi():
    n_victoires = 0
    n_nuls = 0
    n_tours = 0
    ret = tour_chifoumi()
    while ret is not None:
        if ret > 0:
            # TODO: afficher un texte spécifiant l'identité du vainqueur (joueur/ordinateur)
            # TODO: mettre à jour la/les variables nécessaires (si besoin)
            pass
        elif ret == 0:
            # TODO: afficher un texte spécifiant l'identité du vainqueur (joueur/ordinateur)
            # TODO: mettre à jour la/les variables nécessaires (si besoin)
            pass
        else:
            # TODO: afficher un texte spécifiant l'identité du vainqueur (joueur/ordinateur)
            # TODO: mettre à jour la/les variables nécessaires (si besoin)
            pass
        n_tours += 1
        ret = tour_chifoumi()
    print("%d parties jouées, %d parties gagnées, %d parties nulles" % (n_tours, n_victoires, n_nuls))


partie_chifoumi()
# Régression logistique et perceptron

## Retour sur la régression logistique

Dans la suite, nous nous focaliserons sur le cas de la classification binaire, mais tout ce qui est discuté dans ce document est bien entendu généralisable au cas multi-classes.
Dans le cas de la régression logistique, le modèle est le suivant :

$$\log \frac{P(1|X)}{1-P(1|X)} = \beta_0 + \sum_j \beta_j x_j$$ {#eq:model_logistic_reg}

ce qui nous donne :

$$P(1|X) = \frac{1}{1 + e^{\beta_0 + \sum_j \beta_j x_j}}$$ {#eq:proba_logistic_reg}

Cela nous amène à chercher à maximiser la log-vraisemblance qui s'écrit :

$$\ell(\beta) = \sum_i y_i P(1|X_i) + (1 - y_i) \log (1 - P(1|X_i))$$ {#eq:loglikelihood_logistic_reg}

En réintroduisant les formules (@eq:model_logistic_reg) et (@eq:proba_logistic_reg), on obtient la quantité suivante à maximiser (ou son opposé à minimiser, c'est égal) :

$$\ell(\beta) = \sum_i - \log (1 + e^{\beta_0 + \sum_j \beta_j x_{ij}}) + y_i (\beta_0 + \sum_j \beta_j x_{ij})$$ {#eq:loglikelihood_logistic_reg_final}

Pour minimiser cette quantité, on va effectuer une descente de gradient, et on devra donc calculer $\frac{\partial{\ell}}{\partial{\beta}}$ :

$$\frac{\partial{\ell}}{\partial{\beta_0}} = \sum_i - \frac{e^{\beta_0 + \sum_j \beta_j x_{ij}}}{1 + e^{\beta_0 + \sum_j \beta_j x_{ij}}} + y_i$$ {#eq:grad_logistic_reg_beta0}
$$\forall j \geq 1, \frac{\partial{\ell}}{\partial{\beta_j}} = \sum_i - \frac{e^{\beta_0 + \sum_j \beta_j x_{ij}}}{1 + e^{\beta_0 + \sum_j \beta_j x_{ij}}}x_{ij} + y_i x_{ij}$$ {#eq:grad_logistic_reg}

## Le perceptron : notations et représentation

### Poids

### Fonction d'activation

### Calcul de gradient

Blabla je parle de l'équation (@eq:description) qui est super.

$$ y = mx + b $$ {#eq:description}

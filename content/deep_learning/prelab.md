+++
title = "DL for vision: préparation"
date = 2023-09-15
description = "v1.0.0"
weight = 1
+++

# Introduction

Il nous ai demandé de réaliser quelques tâches avant le premier cours,
ces tâches comptent pour 4 points sur votre cote finale.

<!-- install python, video konbini et exo math -->
<!-- Et petite phrase sur ce qu’est le deep learning -->

<!-- Devoir à faire le WK entre jour 2 et 3?
Devoir/rapport à rendre après ?
Interro/discussion quotidienne avant fin du labo -->

# Qu'est ce que le machine learning et le deep learning ?

Commencez par visualiser [cette vidéo.](https://twitter.com/ylecun/status/1310719484831969280)

### Question: Que représente le machine learning pour vous ? et le deep learning ? Donner quelques exemples d'applications concrêtes.


# Installation software

Vous devez avoir une installation fonctionelle de python, pytorch et jupyter
**avant** d'arriver en cours.

Durant le cours, nous allons utiliser à la fois vos PCs ainsi que des ressources
GPU en ligne (cloud computing) pour entrainer des modèles de deep learning.

## Python et pytorch
Vous devez avoir une installation de python récente et fonctionelle, ainsi
qu'une installation de pytorch.

Vous pouvez consulter le guide sur le site de pytorch pour cela [(la librairie de deep learning utilisée pour ce
cours)](https://pytorch.org/get-started/locally/).

Vous installerez aussi Jupyter avec les instructions suivantes: [https://jupyter.org/install](https://jupyter.org/install)

Pour editer votre code, vous pouvez utiliser directement jupyter ou vscode.

Une fois que tout est installé vous devriez pouvoir ouvrir jupyter et executer
le programme suivant:

```python
import torch

x = torch.rand(5, 3)
print(x)

print(torch.cuda.is_available())
```
Il devrait afficher une matrice de valeurs aléatoires et ensuite "True" ou 
"False" suivant si votre ordinateur possède un GPU compatible cuda. 
Si ce code renvoie une exception, votre installation n'est pas
fonctionelle.

## GPU en ligne

Vous devez aussi avoir un compte [google colab](https://colab.research.google.com/), afin d'avoir accès aux
ressources GPU en ligne.

# Exercice sur numpy et pytorch

Commencez par cloner le dépot git suivant: [https://github.com/KenN7/deep-learning](https://github.com/KenN7/deep-learning)

[Cliquez ici pour un rappel concernant l'utilisation de git](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)

Ouvrez le fichier `preparation.ipynb` dans le dossier `homework` avec jupyter et completez l'exercice.


# Ressources

- [Understanding Deep Learning](https://udlbook.github.io/udlbook/), Simon J.D. Prince.
- CS231n: Deep Learning for Computer Vision, Stanford university.
- [Dive into Deep Learning](https://d2l.ai/)
- [Introduction to Deep Learning](https://sebastianraschka.com/blog/2021/dl-course.html), Sebastian Raschka 

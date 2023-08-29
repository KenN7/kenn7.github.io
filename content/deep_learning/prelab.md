+++
title = "DL for vision: préparation"
date = 2023-02-28
description = "v1.0.0"
weight = 1
+++

# Introduction

Il nous ai demandé de réaliser quelques tâches avant le premier cours,
ces tâches comptent pour 3 points sur votre cote finale.

<!-- install python, video konbini et exo math -->
<!-- Et petite phrase sur ce qu’est le deep learning -->

<!-- Devoir à faire le WK entre jour 2 et 3?
Devoir/rapport à rendre après ?
Interro/discussion quotidienne avant fin du labo -->

# Qu'est ce que le machine learning et le deep learning ?

Commencez par visualiser la vidéo sur le lien suivant:

https://twitter.com/ylecun/status/1310719484831969280

## Question: Qu'est ce que c'est pour vous le machine learning et le deep learning ? Donner quelques exemples d'applications concrêtes.


# Installation software

Vous devez avoir une installation fonctionelle de python, pytorch et jupyter
*avant* d'arriver en cours.

Durant ce cours, nous allons utiliser à la fois vos PCs ainsi que des ressources
GPU en ligne (cloud computing) pour entrainer des modèles de deep learning.

## Python et pytorch
Vous devez avoir une installation de python récente et fonctionelle, ainsi
qu'une installation de pytorch.
Le guide sur le site de pytorch (la librairie de deep learning utilisée pour ce
cours), vous sera utile pour ça: https://pytorch.org/get-started/locally/

Vous installerez aussi Jupypter avec ses instructions: https://jupyter.org/install

Pour editer votre code, vous pouvez utiliser directement jupyter ou vscode.

Une fois que tout est installé vous devriez pouvoir ouvrir jupyter et executer
le programme suivant:

```python
import torch

x = torch.rand(5, 3)
print(x)

print(torch.cuda.is_available())
```
Il devrait affichier une matrice de valeurs aléatoires et ensuite "True" ou 
"False" suivant si votre ordinateur possède un GPU compatible cuda. 
Si ce code renvoie une exception, votre installation n'est pas
fonctionelle.

## GPU en ligne

Vous devez aussi avoir un compte google colab, afin d'avoir accès aux
ressources GPU en ligne.

# Exercice sur numpy et pytorch

Commencez par recupérer le dépot git suivant: https://github.com/KenN7/deep-learning 

Pour un rappel concernant l'utilisation de git voir https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop

Ouvrez le fichier `homework1.ipynb` avec jupyter et completez l'exercice.


# Sources
- Deep Learning, udacity nanodegree, https://www.udacity.com/course/deep-learning-nanodegree--nd101 
- CS231n: Deep Learning for Computer Vision, Stanford university.
- Dive into Deep Learning, https://d2l.ai/
- Introduction to Deep Learning, Sebastian Raschka, https://sebastianraschka.com/blog/2021/dl-course.html
- INFO8010 - Deep Learning, Gilles Louppe, ULiège.

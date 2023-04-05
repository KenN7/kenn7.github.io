+++
title = "Session 1, Algorithmes de tris"
date = 2023-04-04
description = "v1.0.0"
weight = 1
+++

# Rappels

## Afficher une liste

Créer une variable contenant une liste d'entiers, en utilisant `IntList ma_liste;`.

- Remplir cette liste avec des nombre aléatoires

- Afficher cette liste dans la console de Processing

- Utiliser les `rect` de Processing pour afficher verticalement des rectangles de tailles
  différentes en fonction de la valeur du nombre.

Utilisez pour ça, la [documentation de référence de Processing.](https://processing.org/reference/)

## Créer des fonctions

Créer une fonction permettant l'affichage de la liste avec les rectangles ayant
pour signature `draw_array(IntList A, int size, int rect_size)`.

Où, `A` est la liste à afficher, `size` donne le nombre d'éléments, `rect_size` donne la largeur des rectangles.

# Tris

## Tri bulle

Implémenter le tri bulle, tel que vu dans le cours, et afficher la liste non
triée et la liste triée à l'aide de la fonction de l'exercice précédent.

## Tri par selection

Implémenter le [tri par sélection](https://fr.wikipedia.org/wiki/Tri_par_s%C3%A9lection) et afficher le résultat.

## Animation

Sauvergarder les états intermédiaire de chaque étape de votre tri afin de pour
l'afficher étape par étape. Créer une animation à partir de ses étapes.

Utilisez le type `ArrayList<IntList>` afin de sauver une
liste de liste d'entiers qui servira à sauver les différentes étapes.
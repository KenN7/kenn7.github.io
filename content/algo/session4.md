+++
title = "Algorithms, Session 4, Binary Search Trees and Recursion"
date = 2021-10-17
description = "v1.0.0"
+++

# Binary Search Trees

## **Find floor and ceiling**
Given a binary search tree, find the floor and ceiling of a given integer. The floor is the highest element in the tree less than or equal to an integer, while the ceiling is the lowest element in the tree greater than or equal to an integer. If either value does not exists, return `None`.

## **Convert sorted array to BST**
Given a sorted array, convert it into a height-balanced binary search tree.

## **Construct all BSTs with $n$ nodes**
Given an integer $n$, construct all possible binary search trees with $n$ ,nodes where all values from $[1, \ldots, n]$ are used.
For example, given $n$ = $3$, return the following trees:
{% mermaid() %}
graph TB
subgraph third tree
    AAA((1))-->DDD
    AAA-->BBB((3))
    BBB-->CCC((2))
    BBB-->EEE
end
subgraph second tree
    AA((2))-->BB((1))
    AA-->CC((3))
end
subgraph first tree
    A((1))-->D
    A-->B((2))
    B-->E
    B-->C((3))
end
{% end %}

{% mermaid() %}
graph TB
subgraph fifth tree
    AA((3))-->BB((2))
    AA-->DD
    BB-->CC((1))
    BB-->EE
end

subgraph fourth tree
    A((3))-->B((1))
    A-->D
    B-->E
    B-->C((2))
end
{% end %}


**TODO: clear graph !!!**

# Recursion

## **Tower of Hanoi**
The tower of Hanoi is a puzzle game with three rods and $n$ disks, each a different size. All the disks start of on the first rod in a stack. They are ordered by size, with the largest on the bottom and the smallest one at the top.
The goal of this puzzle is to move all the disks from the first rod to the last rod while following these rules:
- You can only move one disk at a time.
-  A move consists of taking the uppermost disk from one of the stacks and placing it on top of another stack.
- You cannot place a larger disk on top of a smaller disk.

Write a function that prints out all the steps necessary to complete the Tower of Hanoi. You should assume that the rods are numbered, with the first rod being $1$, the second (auxiliary) rod being $2$, and the last (goal) rod being $3$.
For example, with $n$ = $3$, we can do this in 7 moves:
-  Move upper disk from rod $1$ to rod $3$
-  Move upper disk from rod $1$ to rod $2$
-  Move upper disk from rod $3$ to rod $2$
-  Move upper disk from rod $1$ to rod $3$
-  Move upper disk from rod $2$ to rod $1$
-  Move upper disk from rod $2$ to rod $3$
-  Move upper disk from rod $1$ to rod $3$

## **Implement regular expression**
Implement regular expression matching with the following special characters:
- `.` (period) which matches any single character
- `*` (asterisk) which matches zeo or more of the preceding element

That is, implement a function that takes in a string and a valid regular expression and return whether or not the string matches the regular expression.
For example, given the regular expression `ra.` and the string `ray`, your function should return `True`. The same regular expression on the string `raymond` should return `False`.
Given the regular epxression `.*at` and the string `chat`, your finction should return `True`. The same regular expression on the string `chats` should return `False`.

## **Find array extremes efficiently**
Given an array of number of length $n$, find both the minimum and maximum using less than $2 * (n-2)$ comparisons.

## **Play Nim**
The game of Num is played as follows. Starting with three heaps, each containing a variable numbers of items, two players take turns removing one or more items from a single pile. the player who eventually is forced to take the last stone loses. For example, if the initial head sizes are $3$,$4$ and $5$, a game could be played as shown below:

| A | B | C |   Action |
| :---: |  :---:  | :-----: |   :---------------  |
| 3 | 4 | 5 | Player 1 takes 3 items from B |
| 3 | 1 | 5 | Player 2 takes 2 items from C |
| 3 | 1 | 3 | Player 1 takes 3 items from A |
| 0 | 1 | 3 | Player 2 takes 3 items from C |
| 0 | 1 | 0 | Player 1 takes 1 item from A |
| 0 | 0 | 0 | Player 1 loses |

In other words, to start, the first player takes thress items from pile $B$. The second player responds by removing two stones from pile $C$. The game continues in this way until player one takes the last stone and loses.
Given a list of non-zero starting values `[a, b, c]`, and assuming optimal play, determine whether the first player has a forced win.
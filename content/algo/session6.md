+++
title = "Algorithms, Session 6, Backtracking and Pathfinding"
date = 2021-10-19
description = "v1.0.0"
+++

# Backtracking

## **Compute flight itinerary**
Given an unordered list of flights taken by someone, each represented as `(origin, destination)` pairs, and a starting airport, compute a possible itinerary. If no such itinerary exists, return `null`. All flights must be used in the itinerary. For example, given the list of flights `[('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')]` and starting at airport `YUL`, you may return the list `[('YUL', 'YYZ'),('YYZ', 'SFO'),('SFO', 'HKO'),('HKO', 'ORD')]`. Given `[('SFO', 'COM'),('COM', 'YYZ')]` and starting at airport `COM` you should return `null`.

## **Solve Sudoku**
Sudoku is a puzzle where you're given a 9 by 9 grid partially filled with digits. The objective is to fill the grid subject to the constraint that every row, colum, and box (3 by 3 subgrid) must contain all of the digits from 1 to 9.
Implement an efficient sudoku solver.

## **Count Android unlock combinations**
One way to unlock an Android phone is by swiping in a specific pattern across a $1$ - $9$ keypad, which looks like this:
{% mermaid() %}
  graph LR
      1 --- 2
      2 --- 3
      4 --- 5
      5 --- 6
      7 --- 8
      8 --- 9
{% end %}
**TODO: improve graph!!**

For a pattern to be valid, it must satisfy the following criteria:
- All of its keys must be distinct.
- It must not connect two keys by jumping over a third key, unless that key has already been used.

For example, $4$ - $2$ - $1$ - $7$ is a valid pattern, whereas $2$ - $1$ - $7$ is not.
Find the total number of valid unlock patterns of lenght $n$ where $1$ $\leq$ $n$ $\leq$ $9$.

# Pathfinding

## **Dijkstra's algorithm**
A network consists of nodes labeled $0$ to $n$. You are given a list of edges $(a,b,t)$ describing the tume $t$ in seconds it takes for a message to be sent from node $a$ to node $b$. Whenever a node receives a message, it immediately passes the message on to a neighboring node, if possible.
Assuming all nodes are connected, determine how long it will take for every node to receive a message that begins at node $0$.
For example, given $n$ = $5$ and the following graph:
{% mermaid() %}
  graph LR
      A((0))-->|5|B((1))
      B-->|8|C((3))
      A-->|4|D((5))
      A-->|3|E((2))
      E-->|1|C
      C-->|10|D
      C-->|5|F((4))
{% end %}
You should return $9$, because propagating the message from $0 \rightarrow 2 \rightarrow 3 \rightarrow 4$ will take nine seconds.
For convenience, here is the list of the weighted edges `(u,v,weight)` for this graph.
```
[
    (0,1,5),
    (0,2,3),
    (0,5,4),
    (1,3,8),
    (2,3,1),
    (3,5,10),
    (3,4,5)
]
```
## **$A^*$ search**
An $8$-puzzle is a game played on a $3$x$3$ board of tiles with the ninth tile missing. The remaining tiles are labeled $1$ through $8$ but shuffled randomly. Tiles may slide horizontally or vertically into an empty space, but may not be removed from the board.
Design a class to represent the board and find a series of steps to bring the board to the state
```
[[1, 2, 3], [4, 5, 6], [7, 8, None]]
```
+++
title = "Algorithms, Session 5, Dijkstra and A*"
date = 2021-10-18
description = "v1.0.0"
weight = 5
+++

# Pathfinding

## **Dijkstra's algorithm**
A network consists of nodes labeled $0$ to $n$. You are given a list of edges $(a,b,t)$ describing the time $t$ in seconds it takes for a message to be sent from node $a$ to node $b$. Whenever a node receives a message, it immediately passes the message on to a neighboring node, if possible.
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

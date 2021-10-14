+++
title = "Algorithms, Session 2, Data Structures"
date = 2021-10-14
description = "v1.0.0"
+++

# Arrays

## **Get product of all other elements**

Given an array of integers, return a new array such that each element at index $i$ of the new array is the product of all the numbers in the originial array except the one at $i$. For example, if our input was $[1,2,3,4,5]$ the expected output would be $[120,60,40,30,24]$. If our input was $[3,2,1]$, the expected output would be $[2,3,6]$. 

Follow-up: what if you can't use division?

## **Locate smallest window to be sorted**

Given an array of intergers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example given $[3,7,5,6,9]$, you should return $(1,3)$.

## **Calculate maximum subarray sum**

Given an array of numbers, find the maximum sum of any contiguous subarray of the array. For example, given the array $[34,-50,42,14,-5,86]$, the maximum sum would be $137$, since we would take elements $42,14,-5$ and $86$. Given the array $[-5,-1,-8,-9]$, the maximum sum would be $0$, since we would choose not to take any elements.

## **Find number of smaller elements to the right**

Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array. For example, given the array $[3,4,9,6,1]$, return $[1,1,2,1,0]$, since:
- There is $1$ smaller element to the right of $3$
- There is $1$ smaller element to the right of $4$
- There is $2$ smaller elements to the right of $9$
- There is $1$ smaller element to the right of $6$
- There is no smaller element to the right of $1$

---

# Linked lists

## **Reverse linked list**

Given the head of singly linked list, reverse it in place.

## **Add two linked lists that represent numbers**

We can represent an integer in a linked list format by having each node represent a digit in the number. The nodes are connected in reverse order, such that the number $54321$ is represented by the following linked list: $5 \rightarrow 4 \rightarrow 3 \rightarrow 2 \rightarrow 1$. Given two linked lists in this format, return their sum. For example, given $9 \rightarrow 9$ and $5 \rightarrow 2$ you should return $124$ $(99+25)$ as $4  \rightarrow 2 \rightarrow 1$.

## **Rearrange a linked list to alternate high-low**

Given a linked list, rearrange the node values such that they appear in alternating $low \rightarrow high \rightarrow low \rightarrow high \rightarrow ...$ form. For example, given $1 \rightarrow 2 \rightarrow 3 \rightarrow 4 \rightarrow 5$ you should return $1 \rightarrow 3 \rightarrow 2 \rightarrow 5 \rightarrow 4$.

## **Find intersecting nodes of linked list**

Given two singly linked lists that intersect at some point, found the intersecting node. Assume the lists are non-cyclical. For example, given $A = 3 \rightarrow 7 \rightarrow 8 \rightarrow 10$ and B = $99 \rightarrow 1 \rightarrow 8 \rightarrow 10$, return the node with value $8$. In this example, assume nodes with the same value are the exact same node objects. Do this in $O(m+n)$ time (where $m$ and $n$ are the length of the lists) and constant space.

---

# Stacks and queues

## **Implement a max stack** 

Implement a stack that has the following methods:
- `push(val)`: push `val` onto the stack
- `pop`: pop off and return the topmost element of the stack. If there are no elements in the stack, throw an error.
- `max`: return the maximum value in the stack currently. If there are no elements in the stack, throw an error. 

Each method should run in constant time.

## **Determine whether brackets are balanced** 

Given a string of round, curly, and square opening and closing brackets, return whether the brackets are balanced (well-formed). For example, given the string "\( \[ \] \) \[ \] \( \{ \} \)", you should return `True`. Given the string "( [ ) ]" or "( ( ( )" you should return `False`. 

Similar problem: [aoc 2017 day 9](https://adventofcode.com/2017/day/9)

## **Compute maximum of k-length subarrays**

Given an array of integers and a number $k$, where $1 \leq k \leq$ array length, compute the maximum values of each subarray of length $k$. For example, let's say the array is $[10,5,2,7,8,7]$ and $k=3$. We should get $[10,7,8,8]$, since:
-  $10$ = $\max([10,5,2])$
-  $7$ = $\max([5,2,7])$
-  $8$ = $\max([2,7,8])$
-  $8$ = $\max([7,8,7])$

Do this in $O(n)$ time and $O(k)$ space. You can modify the input array in-place and you do not need to store the result. You can simply print them out as you compare them.

## **Reconstruct array using +/- signs**

The sequence $[0,1,...,N]$ has been jumbled, and the only clue you have for its order is an array representing whether each number is larger or smaller than the last. Given this information, reconstruct an array that is consistent with it. For example, given $[\text{None}, +,+,-,+]$ you should return $[0,1,3,2,4]$.

---

# Trees

## **Count unival trees**

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value. Given the root to a binary tree, count the number of unival subtrees. For example, the following tree has 5 unival subtrees:

{% mermaid() %}
graph TB
    A((0))-->B((1))
    A-->C((0))
    C-->D((1))
    C-->E((0))
    D-->F((1))
    D-->G((1))
{% end %}

## **Reconstruct tree from pre-order and in-order traversals**

Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree. For example, given the following pre-order traversal: $[a,b,d,e,c,f,g]$ and the following in-order traversal: $[d,b,e,a,f,c,g]$. You should return the following tree:

{% mermaid() %}
  graph TB
      A((a))-->B((b))
      A-->C((c))
      B-->D((d))
      B-->E((e))
      C-->F((f))
      C-->G((g))
{% end %}

## **Evaluate arithmetic tree**

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of +,-,* or /. Given the root to such a node, write a function to evaluate it. For example, given the following tree:

{% mermaid() %}
  graph TB
      A((*))-->B((+))
      A-->C((+))
      B-->D((3))
      B-->E((2))
      C-->F((4))
      C-->G((5))
{% end %}

You should return $45$ as it is $(3+2) * (4+5)$

## **Get tree level with minimum sum**

Given a binary tree, return the level of the tree that has the minimum sum. The level of a node is defined as the number of connections required to get to the root, with the root having level zero. For example:

{% mermaid() %}
  graph TB
      A((1))-->B((2))
      A-->C((3))
      C-->D((4))
      C-->E((5))
{% end %}

In this tree, level $0$ has sum $1$, level $1$ has sum $5$ and level $2$ has sum $9$, so the level with the minimum sum is $0$.

---

# Heaps

## **Compute the running median**

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far after each new element. Recall that the median of an even-numbered list is the average of the two middle numbers. For example, given the sequence $[2,1,5,7,2,0,5]$, your algorithm should print out:
```
2
1.5
2
3.5
2
2
2
```

## **Find most similar websites**

You are given a list of (`website`, `user`) pairs that represent users visiting websites. Come up with a program that identifies the top $k$ pairs of websites with the greatest similarity. For example, suppose $k=1$, and the list of tuples is:

```
[('google.com', 1), ('google.com', 3), ('google.com', 5),
('pets.com', 1), ('pets.com', 2), ('yahoo.com', 6),
    ('yahoo.com', 2), ('yahoo.com', 3),('yahoo.com', 4),
    ('yahoo.com', 5), ('wikipedia.org', 4), ('wikipedia.org', 5),
    ('wikipedia.org', 6),('wikipedia.org', 7), ('bing.com', 1),
    ('bing.com', 3),('bing.com', 5),('bing.com', 6)]
```

To compute the similarity between two websites you should compute the number of users they have in common divided by the number of users who have visited either site in total (this is known as the Jaccard index). For example, in this case, we would conclude that `google.com` and `bing.com` are the most similar with a score of $3/4$ or $0.75$

## **Generate regular numbers**

A regular number in mathematics is defined as one which evenly divides some power of $60$. Equivalently, we can say that a regular number is one whose only prime divisors are $2,3$ and $5$. These numbers have had many applications, from helping ancient Babylonians keep time to tuning instruments according to the diatonic scale. Given an integer $n$, write a program that generates, in order, the first $n$ regular numbers.

## **Build a Huffman tree**

Huffman coding is a method of encoding characters based on their frequency. Each letter is assigned a variable-length binary string, such as `0101` or `111110`, where shorter lengths correspond to more common letters. To accomplish this, a binary tree is built such that the path from the root to any leaf uniquely maps to a character. When traversing the path, descending to a left child correspond to a `0` in the prefix, while descending right corresponds to `1`. Here is an example tree (note that only the leaf nodes have letters):

{% mermaid() %}
  graph TB
      A(("."))-- 0 -->B(("."))
      A-- 1 -->C(("."))
      B-- 0 -->D(("."))
      B-- 1 -->E((a))
      D-- 0 -->F((c))
      C-- 0 -->G((t))
      C-- 1 -->H(("."))
      H-- 1 -->I((s))
{% end %}

With this encoding, "cats" would be represented as `0000110111`. Given a dictionary of character frequencies (for example `{"a":3, "c":6, "e":8, "f":2}`), build a Huffman tree, and use it to determine a mapping between characters and their encoded binary strings.

**(TODO:  tree, page 114)**



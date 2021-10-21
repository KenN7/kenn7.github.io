+++
title = "Algorithms, Session 6, Dynamic Programming"
date = 2021-10-19
description = "v1.0.0"
+++

# Dynamic Programming
## **Number of ways to climb a staircase**
There exists a staircase with $n$ steps which you can climb up either 1 or 2 steps at a time. Given $n$, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters. For example, if $n$ is 4, then there are 5 unique ways:
-  $1$,$1$,$1$,$1$
-  $2$,$1$,$1$
-  $1$,$2$,$1$
-  $1$,$1$,$2$
-  $2$,$2$

Follow-up: what if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers $X$? For example, if $X$ = $1$,$3$,$5$ you could climb 1,3 or 5 steps at a time.

## **Number of ways to decode a string**
Given the mapping $a$=$1$, $b$=$2$, $\ldots$, $z$=$26$, and an encoded message, count the number of ways it can be decoded. For example the message "`111`" should be $3$, since it could be decoded as "`aaa`", "`ka`" and "`ak`".
You can assume that the messages are always decodable. For example "`001`" is not allowed.

## **Painting houses**
A builder is looking to build a row of $n$ houses that can be of $k$ different colors. She has a goal of minimizing the cost while ensuring that no two neighboring houses are of the same color. Given an $n$ by $k$ matrix where the entry at the $i^{th}$ row and the $j^{th}$ column represents the cost to build the $i^{th}$ house with the $j^{th}$ color, return the minimum cost required to achieve this goal.

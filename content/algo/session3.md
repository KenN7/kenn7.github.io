+++
title = "Algorithms, Session 3, Hash Tables"
date = 2021-10-16
description = "v1.0.0"
+++

# Hash Tables

## **Implement an LRU cache**
Implement an LRU (Least Recently Used) cache. The cache should be able to be initialized with cache size $n$ , and provie the following methods:
- `set(key, value)`: set `key` to `value`. If there are already $n$ items in the cache and we are adding a new item, also remove the least recently used item.
- `get(key)`: get the value at `key`. If no such key exists, return null.
Each operation should run in $O(1)$ time.

## **Cut brick wall**
A wall consists of several rows of bricks of various integer lengths and uniform heigth. Your goal is to find a vertical line going from the top to the bottom of the wall that cuts through the fewest number of bricks. If the line goes through the edge between two bricks, this does not count as a cut.
For example, suppose the input is as follows, where value in each row represent the lengths of bricks in that row:
```
[[3,5,1,1],
 [2,3,3,2],
 [5,5],
 [4,4,2],
 [1,3,3,3],
 [1,1,6,1,1]]
```
The wall would then look like this: 

**TODO!!!!**

The best we can do here is to draw a line after the eighth brick, which will only require cutting through the bricks in the third and fifth row.
Given an input consisting of brick lengths for each row such as the one above, returns the fewest number of bricks that must be cut to create a vertical line.

## **Implement a sparse array**
You have a large array, most of whose elements are zero. Create a more space-efficient data structure, `SparseArray`, that implements the following interface:
- `init(arr,size)`: initialize with the original large array and size.
- `set(i,val)`: update index at `i` to be `val`.
- `get(i)`: get the value at index `i`.
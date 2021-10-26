+++
title = "Algorithms, Session 3, Hash Tables"
date = 2021-10-16
description = "v1.0.0"
weight = 3
+++

# Hash Tables

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

<canvas width=400 height=240 id="brick-wall"></canvas>
<script>
const ctx = document.getElementById('brick-wall').getContext('2d')
const array = [[3,5,1,1],[2,3,3,2],[5,5],[4,4,2],[1,3,3,3],[1,1,6,1,1]]
const rect_size = 40
ctx.beginPath()
for (const [y,subarray] of array.entries()) {
    let part_sum = 0
    for (const [x,val] of subarray.entries()) {
        ctx.strokeRect(part_sum*rect_size,y*rect_size,rect_size*val,rect_size)
        part_sum += val
    }
}
ctx.closePath()
</script>

The best we can do here is to draw a line after the eighth brick, which will only require cutting through the bricks in the third and fifth row.
Given an input consisting of brick lengths for each row such as the one above, returns the fewest number of bricks that must be cut to create a vertical line.

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

## **Implement a sparse array**
You have a large array, most of whose elements are zero. Create a more space-efficient data structure, `SparseArray`, that implements the following interface:
- `init(arr,size)`: initialize with the original large array and size.
- `set(i,val)`: update index at `i` to be `val`.
- `get(i)`: get the value at index `i`.

## **Implement an LRU cache**
Implement an LRU (Least Recently Used) cache. The cache should be able to be initialized with cache size $n$ , and provie the following methods:
- `set(key, value)`: set `key` to `value`. If there are already $n$ items in the cache and we are adding a new item, also remove the least recently used item.
- `get(key)`: get the value at `key`. If no such key exists, return null.
Each operation should run in $O(1)$ time.


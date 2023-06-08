---
sidebar_position: 10
---

# 9. Merge Sorted Array

![Merge Sorted Array](./img/Merge-sort-example.gif)

## Description:
In this tutorial, we will learn how to merge two sorted arrays efficiently into a single sorted array. We will explore different approaches, understand the algorithms involved, analyze the time and space complexities, and provide a step-by-step solution in Java.

## Algorithms:
1. Merge Sort Algorithm: This algorithm is commonly used to merge two sorted arrays or subarrays efficiently.

## Approach:
1. Initialize three pointers: one for the first array (arr1), another for the second array (arr2), and a third for the merged array (result).
2. Compare the elements at the corresponding pointers of arr1 and arr2.
3. Move the smaller element to the result array and increment the respective pointer.
4. Repeat steps 2 and 3 until we reach the end of either arr1 or arr2.
5. If any elements remain in arr1 or arr2, append them to the result array.
6. Return the merged array.

## Complexity
**Time Complexity (TC):**
The time complexity of the merge step is O(n), where n represents the total number of elements in both arrays. Thus, the overall time complexity of the merging process is O(n).

**Space Complexity (SC):**
The space complexity is O(n) because we create a new array to store the merged result.

## Flowchart:
```
                                     
           +--------------+         +--------------+       +--------------+
           |    arr1      |         |    arr2      |       |   Result     |
           +------+-------+         +------+-------+       +------+-------+
                  |                         |                    |
                  v                         v                    v
           +------+-------+         +------+-------+       +------+-------+
           |   Pointer1   |         |   Pointer2   |       |   Pointer3   |
           +------+-------+         +------+-------+       +--------------+
                  |                         |
                  v                         |
     +-----+----->|        +--------+       |
     |            v        |        |       |
     |     +------+-------+|        v       |
     |     |              |+--------+       |
     |     v              |                |
     |     |              |     Merge      |
     |     |    Compare   |     Step       |
     |     |    Pointers  |                |
     |     |              |                |
     |     +------|-------+                |
     |            v                         |
     +------------|-------------------------+
                  v
           +------+-------+
           |    Result    |
           +--------------+
```

## Solution in Java:
Here's a step-by-step solution in Java:

```java
public static int[] mergeSortedArray(int[] arr1, int[] arr2) {
    int n1 = arr1.length;
    int n2 = arr2.length;
    int[] result = new int[n1 + n2];
    int i = 0, j = 0, k = 0;

    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }

    while (i < n1) {
        result[k++] = arr1[i++];
    }

    while (j < n2) {
        result[k++] = arr2[j++];
    }

    return result;
}
```

## Explanation:
1. We create a new array, `result`, with a size equal to the combined lengths of `arr1` and `arr2`.
2. We initialize three pointers: `i` for `arr1`, `j` for `arr2`, and `k` for `result`.
3. We compare the elements at the corresponding pointers and insert the smaller element into `result`.
4. We increment the respective pointers and `k`.
5. Once we reach the end of either `arr1` or `arr2`, we append the remaining elements to `result`.
6. Finally, we return the merged array.

This solution efficiently merges two sorted arrays into a single sorted array using the merge sort algorithm.
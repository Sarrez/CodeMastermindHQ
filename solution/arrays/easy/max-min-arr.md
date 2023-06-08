---
sidebar_position: 2
---

# 1. Maximum and Minimum in Array

## Problem: Finding Maximum and Minimum Elements in an Array: A Comprehensive Guide

![Maximum and Minimum in Array](./img/max-min.png)

## Description:
In this tutorial, you will learn how to find the maximum and minimum elements in an array using efficient algorithms and approaches. We will explore different techniques, discuss their time and space complexities, and provide step-by-step solutions in Java. By the end of this tutorial, you will have a clear understanding of how to solve this common programming problem.

## Algorithms:
1. Linear Search Approach
2. Divide and Conquer Approach
3. Tournament Method

### Approach 1: Linear Search Approach
- Initialize variables max and min to the first element of the array.
- Iterate through the array from the second element.
- For each element, compare it with the current max and min values and update them if necessary.
- At the end of the iteration, max and min will contain the maximum and minimum elements of the array, respectively.

**Time Complexity:** O(n)
**Space Complexity:** O(1)

### Approach 2: Divide and Conquer Approach
- Divide the array into two halves.
- Recursively find the maximum and minimum elements in each half.
- Compare the maximum and minimum elements from the two halves to determine the overall maximum and minimum of the array.

**Time Complexity:** O(n log n)
**Space Complexity:** O(log n)

### Approach 3: Tournament Method
- Divide the array into pairs and compare each pair to determine the maximum and minimum elements within the pair.
- Compare the maximums and minimums from the pairs to find the overall maximum and minimum elements of the array.

**Time Complexity:** O(n)
**Space Complexity:** O(1)

## Flowchart:
```
START
├─ Initialize max and min variables to the first element of the array
├─ Iterate through the array from the second element
│   ├─ Compare current element with max and min
│   │   ├─ If current element is greater than max
│   │   │   └─ Update max
│   │   └─ If current element is smaller than min
│   │       └─ Update min
│   └─ Move to the next element
├─ End of iteration
├─ Print max and min
END

```

## Solution in Java:
```java title="MaxMinArray.java"
public class MaxMinArray {
    public static void findMaxAndMin(int[] arr) {
        int n = arr.length;
        int max = arr[0];
        int min = arr[0];

        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }

            if (arr[i] < min) {
                min = arr[i];
            }
        }

        System.out.println("Maximum element: " + max);
        System.out.println("Minimum element: " + min);
    }

    public static void main(String[] args) {
        int[] arr = { 5, 9, 3, 1, 7, 2 };

        findMaxAndMin(arr);
    }
}
```

## Explanation:
- The `findMaxAndMin` function takes an array `arr` as input and initializes the `max` and `min` variables to the first element of the array.
- It then iterates through the array starting from the second element.
- For each element, it compares it with the current `max` and `min` values and updates them if necessary.
- Finally, it prints the maximum and minimum elements.
- In the example `main` function, we create an array `arr` and call the `findMaxAndMin` function to find and display the maximum and minimum elements.

The linear search approach has a time complexity of **O(n)** and a space complexity of **O(1)**. It iterates through the array once, comparing each element with the current maximum and minimum. The divide and conquer approach has a

 time complexity of **O(n log n)** and a space complexity of **O(log n)**. It recursively divides the array into halves until reaching the base case of a single element, comparing and merging the maximum and minimum values. The tournament method has a time complexity of **O(n)** and a space complexity of **O(1)**. It compares elements in pairs to find the maximum and minimum values.
---
sidebar_position: 6
---

# 5. Chocolate Distribution Problem

![Chocolate Distribution Problem](./img/Chocolate%20Distribution.gif)

## Description:
In this tutorial, we will explore the Chocolate Distribution Problem, a common problem in algorithmic interviews and coding competitions. The problem involves distributing chocolates among a group of students, aiming to minimize the difference between the chocolates' packet with the most and the least number of chocolates. We will provide a step-by-step explanation of the problem, discuss different algorithms and approaches to solve it, analyze their time and space complexities, and present a Java solution with a detailed explanation.

## Algorithms:
### 1. Sorting Approach: 
Sort the array of chocolate packets and iterate over it to find the minimum difference between adjacent elements.
### 2. Sliding Window Approach: 
Use a sliding window technique to maintain a window of size m (number of students) and find the minimum difference within this window.

## Approach:
### 1. Sorting Approach:
   - Sort the array of chocolate packets in non-decreasing order.
   - Initialize a variable to store the minimum difference.
   - Iterate over the sorted array, comparing the difference between adjacent packets and updating the minimum difference if necessary.
   - Return the minimum difference as the result.

### 2. Sliding Window Approach:
   - Sort the array of chocolate packets in non-decreasing order.
   - Initialize two pointers, one at the beginning of the array and the other at the end, forming a window of size m (number of students).
   - Calculate the difference between the last and first elements of the window and store it as the current minimum difference.
   - Slide the window by incrementing both pointers simultaneously, updating the minimum difference if a smaller difference is found.
   - Repeat the sliding process until the end of the array is reached.
   - Return the minimum difference as the result.

## Complexity:

### Time Complexity (TC):
1. **Sorting Approach:** O(n log n), where n is the number of chocolate packets.
2. **Sliding Window Approach:** O(n log n), where n is the number of chocolate packets.

### Space Complexity (SC):
1. **Sorting Approach:** O(1)
2. **Sliding Window Approach:** O(1)

## Flowchart:
```
Start
├─ Input the array of chocolate packets and the number of students
│
├─ Check if the number of packets is less than the number of students
│  ├─ Yes: Print "Not enough packets for each student"
│  └─ No: Continue
│
├─ Sort the array in non-decreasing order
│
├─ Initialize minDifference as maximum value
│
├─ Iterate over the array using a sliding window of size m
│  ├─ Calculate the difference between the last and first elements of the window
│  ├─ If the difference is smaller than minDifference
│  │  ├─ Update minDifference with the new difference
│  │  └─ Move the window to the next position
│  └─ Continue until the end of the array is reached
│
├─ Print the minimum difference between packets
└─ End

```

## Solution in Java:

```java
import java.util.Arrays;

public class ChocolateDistributionProblem {
    public static int findMinDifference(int[] arr, int m) {
        int n = arr.length;
        if (n < m) {
            return -1; // Not enough packets for each student
        }

        Arrays.sort(arr); // Sort the array in non-decreasing order

        int minDifference = Integer.MAX_VALUE;

        for (int i = 0; i + m - 1 < n; i++) {
            int difference = arr[i + m - 1] - arr[i];
            if (difference < minDifference) {
                minDifference = difference;
            }
        }

        return minDifference;
    }

    public static void main(String[] args) {
        int[] arr = {3, 4, 1, 9, 56, 7, 9, 12};
        int m = 5;

        int minDifference = findMinDifference(arr, m);
        System.out.println("Minimum difference between packets: " + minDifference);
    }
}
```

## Explanation:
- The `findMinDifference` method takes an array of chocolate packets (`arr`) and the number of students (`m`) as input.
- It first checks if there are enough packets for each student. If not, it returns -1.
- Next, it sorts the array in non-decreasing order using `Arrays.sort()`.
- It initializes the `minDifference` variable to the maximum possible value (`Integer.MAX_VALUE`).
- The method then iterates over the array using a sliding window

 of size `m` and calculates the difference between the last and first elements of each window.
- If a smaller difference is found, it updates the `minDifference` variable.
- Finally, it returns the minimum difference as the result.
- In the `main` method, we provide a sample array `arr` and the number of students `m`.
- We call the `findMinDifference` method with these inputs and print the minimum difference obtained.

This tutorial provides a comprehensive explanation of the Chocolate Distribution Problem, covering the algorithms, approaches, time and space complexities, and a Java solution with a step-by-step explanation. Make sure to understand the concepts and experiment with different inputs to enhance your understanding.
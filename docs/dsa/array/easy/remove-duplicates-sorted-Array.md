---
sidebar_position: 13
---

# 12. Removing Duplicates from a Sorted Array

## Description:
In this tutorial, we will explore the problem of removing duplicates from a sorted array. We'll discuss different approaches, provide a step-by-step algorithm, and implement a solution in Java. By the end, you'll understand the problem and have a working code solution.

## Algorithm:
1. Initialize a pointer `currentIndex` to 0 to track the current position of the non-duplicate elements.
2. Iterate through the array starting from the second element (index 1):
   - If the current element is equal to the element at `currentIndex`, skip it as it is a duplicate.
   - If the current element is different from the element at `currentIndex`, store it at the next position after `currentIndex` and increment `currentIndex` by 1.
3. Return `currentIndex + 1` as the length of the array containing only unique elements.

## Approach:
The approach is to maintain a pointer to keep track of the position of the last non-duplicate element found. By iterating through the array, we compare each element with the previous non-duplicate element. If the current element is different, we store it at the next position after the last non-duplicate element.

## Complexity
**Time Complexity (TC):**
The algorithm has a time complexity of O(n), where n is the length of the input array. We iterate through each element once.

**Space Complexity (SC):**
The algorithm has a space complexity of O(1) since we are modifying the input array in-place without using any additional data structures.

## Flowchart:
```
START
Initialize currentIndex = 0
Iterate through the array from index 1 to end:
    If current element != element at currentIndex:
        Store the current element at next position after currentIndex
        Increment currentIndex by 1
Return currentIndex + 1 as the length of the array with unique elements
END
```

## Solution in Java:
```java
public static int removeDuplicates(int[] nums) {
    if (nums.length == 0) {
        return 0;
    }

    int currentIndex = 0;

    for (int i = 1; i < nums.length; i++) {
        if (nums[i] != nums[currentIndex]) {
            currentIndex++;
            nums[currentIndex] = nums[i];
        }
    }

    return currentIndex + 1;
}
```

## Explanation:
- We start by checking if the input array is empty. If it is, we return 0 since there are no elements to remove duplicates from.
- We initialize `currentIndex` to 0 since the first element is always unique.
- Using a `for` loop, we iterate through the array starting from the second element (index 1).
- For each element, we compare it with the element at `currentIndex`. If it is different, we store it at the next position after `currentIndex` and increment `currentIndex` by 1.
- After iterating through the entire array, we return `currentIndex + 1` as the length of the modified array that contains only unique elements.

This solution effectively removes duplicates from a sorted array by modifying the array in-place. The returned length represents the number of unique elements in the array.
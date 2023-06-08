---
sidebar_position: 13
---

# 12. Removing Duplicates from a Sorted Array

![Removing Duplicates from a Sorted Array](./img/Removing%20Duplicates%20from%20a%20Sorted%20Array.gif)

## Description:
In this tutorial, we will learn how to remove duplicates from a sorted array in an efficient manner. We will explore the underlying algorithms, discuss different approaches, analyze the time and space complexity, and provide a step-by-step solution implemented in Java. By the end of this tutorial, you will be able to solve the problem of removing duplicates from a sorted array and understand the reasoning behind the solution.

Algorithms:
1. Two-Pointer Technique: Using two pointers, we can traverse the sorted array and remove duplicates in-place.

## Approach:
1. Initialize two pointers, `slow` and `fast`, both initially pointing to the second element of the array.
2. Iterate through the array while the `fast` pointer is less than the length of the array:
   - If the element at the `fast` pointer is equal to the element at the `slow` pointer, move only the `fast` pointer forward.
   - If the element at the `fast` pointer is different from the element at the `slow` pointer, move both the `slow` and `fast` pointers forward, update the value at the `slow` pointer to the element at the `fast` pointer.
3. Return `slow + 1` as the new length of the array, where `slow` represents the last index of the non-duplicate elements.

Time Complexity: O(n), where n is the length of the array.
Space Complexity: O(1), as the removal is done in-place without using any extra space.

## Flowchart:
```
Start
|
Initialize slow and fast pointers
|
While fast < length of array
|    |
|    If element at fast pointer equals element at slow pointer
|    |    Move only the fast pointer forward
|    |
|    If element at fast pointer is different from element at slow pointer
|    |    Move both slow and fast pointers forward
|    |    Update the value at the slow pointer with the element at the fast pointer
|
Return slow + 1 as the new length of the array
|
End
```

## Solution in Java:
```java
public static int removeDuplicates(int[] nums) {
    if (nums.length == 0) {
        return 0;
    }

    int slow = 0;
    for (int fast = 1; fast < nums.length; fast++) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}
```

## Explanation:
1. We start by checking if the array is empty. If it is, there are no duplicates to remove, so we return 0 as the length.
2. We initialize the `slow` pointer to 0 since the first element in a sorted array is always a non-duplicate.
3. We iterate through the array using the `fast` pointer starting from the second element.
4. If the element at the `fast` pointer is different from the element at the `slow` pointer, we move both the `slow` and `fast` pointers forward. We update the value at the `slow` pointer with the element at the `fast` pointer to maintain the sorted order of the array.
5. If the element at the `fast` pointer is equal to the element at the `slow` pointer, we only move the `fast` pointer forward without updating the array since it is a duplicate.
6. Finally, we return `slow + 1` as the new length of the array, where `slow` represents the last index of the non-duplicate elements.

By following this tutorial, you can easily implement a solution in Java to remove duplicates from a sorted array while understanding the underlying algorithms and reasoning behind it.
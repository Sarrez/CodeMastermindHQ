---
sidebar_position: 7
---

# 6. Search in Rotated Sorted Array

## Description:
In this tutorial, we will explore the problem of searching for a target element in a rotated sorted array. A rotated sorted array is an array that has been rotated at some pivot point, causing the elements to shift. We will discuss an efficient approach to solve this problem and provide a step-by-step explanation along with a Java implementation.

## Algorithms:
**1. Binary Search**

## Approach:
1. Find the pivot index (the index at which the rotation occurs) using a modified binary search.
2. Determine which sorted half of the array the target element might lie in.
3. Perform a regular binary search on the appropriate sorted half to find the target element.

## Complexity:

**Time Complexity (TC):**
The time complexity of the solution is O(log n), where n is the number of elements in the input array.

**Space Complexity (SC):**
The space complexity is O(1) since we are using a constant amount of additional space.

## Flowchart:

```
START

1. Initialize low = 0 and high = nums.length - 1.

2. While low <= high:
     a. Compute mid as (low + high) / 2.
     b. If nums[mid] == target:
          - Return mid as the index of the target element.
     c. If nums[low] <= nums[mid]:
          - Check if target lies in the left half of the sorted array:
            - If target >= nums[low] and target < nums[mid], update high = mid - 1.
            - Otherwise, update low = mid + 1.
     d. If nums[mid] <= nums[high]:
          - Check if target lies in the right half of the sorted array:
            - If target > nums[mid] and target <= nums[high], update low = mid + 1.
            - Otherwise, update high = mid - 1.

3. Return -1 as the target element was not found.

END
```

## Solution in Java:
```java
public static int search(int[] nums, int target) {
    int low = 0;
    int high = nums.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (nums[mid] == target) {
            return mid;
        }

        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}
```

## Explanation:
1. We initialize the low and high pointers to the start and end indices of the array, respectively.
2. We perform a binary search by repeatedly dividing the array in half.
3. At each step, we check if the middle element is equal to the target. If it is, we return the index of the target.
4. We then check which half of the array is sorted.
5. If the left half is sorted, we check if the target lies within the range of the left half. If it does, we update the high pointer accordingly. Otherwise, we update the low pointer.
6. If the right half is sorted, we check if

 the target lies within the range of the right half. If it does, we update the low pointer accordingly. Otherwise, we update the high pointer.
7. We repeat steps 2-6 until the target element is found or the low and high pointers cross each other.
8. If the target element is not found, we return -1.

This concludes the tutorial on "Search in Rotated Sorted Array" in Java. The provided algorithm, approach, and solution should help you solve this problem efficiently.
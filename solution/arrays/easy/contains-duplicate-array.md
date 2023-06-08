---
sidebar_position: 5
---

# 4. Contains Duplicate Array

## Problem: 
**Contains Duplicate:** Identifying Duplicate Elements in an Array

![Contains Duplicate](./img/Contains-Duplicate.gif)

## Description: 
This tutorial explores the problem of determining whether an array contains duplicate elements. We will cover various algorithms, approaches, time and space complexity analysis, and provide a step-by-step solution in Java.

## Algorithms:
### 1. Brute Force: 
Compare each element with all other elements in the array.
### 2. Sorting: 
Sort the array and check for adjacent duplicate elements.
### 3. Hashing: 
Use a hash set or hash map to store visited elements and check for duplicates.

## Approach:
### 1. Brute Force:
   - Initialize two nested loops to iterate over each pair of elements in the array.
   - Compare each pair of elements and return true if a duplicate is found.
   - If no duplicates are found, return false.

### 2. Sorting:
   - Sort the array using a sorting algorithm such as quicksort or mergesort.
   - Iterate through the sorted array and check for adjacent duplicate elements.
   - If a duplicate is found, return true. Otherwise, return false.

### 3. Hashing:
   - Initialize an empty hash set or hash map.
   - Iterate through each element in the array.
   - Check if the element is already present in the hash set or hash map.
   - If it is, return true as a duplicate has been found.
   - Otherwise, add the element to the hash set or hash map.
   - If no duplicates are found, return false.

**Time Complexity (TC) and Space Complexity (SC):**
- Brute Force: TC = O(n^2), SC = O(1)
- Sorting: TC = O(n log n), SC = O(1) or O(n) depending on the sorting algorithm used
- Hashing: TC = O(n), SC = O(n)

## Flowchart:

```
   [Start]
       |
     Check
   Duplicate?
       |
    [Yes] --> Return true
       |
    [No]
       |
 Choose Algorithm:
   - Brute Force
   - Sorting
   - Hashing
       |
     Apply
   Algorithm
       |
   [End] --> Return false
```

## Solution in Java:

```java
// Brute Force approach
public boolean containsDuplicate(int[] nums) {
    int n = nums.length;
    
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (nums[i] == nums[j]) {
                return true; // Duplicate found
            }
        }
    }
    
    return false; // No duplicates found
}

// Sorting approach
public boolean containsDuplicate(int[] nums) {
    Arrays.sort(nums);
    
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            return true; // Duplicate found
        }
    }
    
    return false; // No duplicates found
}

// Hashing approach
public boolean containsDuplicate(int[] nums) {
    Set<Integer> set = new HashSet<>();
    
    for (int num : nums) {
        if (set.contains(num)) {
            return true; // Duplicate found
        }
        set.add(num);
    }
    
    return false; // No duplicates found
}
```

## Explanation:
- The brute force approach compares each element in the array with all other elements, resulting in a time complexity of O(n^2). If a duplicate is found, the method returns true; otherwise, it returns false.
- The sorting approach sorts the array in ascending order and checks for adjacent duplicate elements. If a duplicate is found, the method returns true; otherwise, it returns false. The time complexity depends on the sorting algorithm used.
- The hashing approach utilizes a hash set to store visited elements. It iterates through each element in the array and checks if it already exists in the set. If a duplicate is found, the method returns true; otherwise, it adds the element to the set. The time complexity is O(n) as checking and adding elements to the set take constant time on average.

This tutorial provides a comprehensive explanation of the "Contains Duplicate" problem, covering different algorithms, approaches, time and space complexity analysis, as well as a solution in Java with detailed explanations.
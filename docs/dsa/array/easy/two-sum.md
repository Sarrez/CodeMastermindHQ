---
sidebar_position: 12
---

# 11. Two Sum

## Description:
In this tutorial, we will explore the popular "Two Sum" problem, where given an array of integers and a target value, we need to find two numbers in the array that add up to the target. We will discuss multiple approaches to solve this problem efficiently and provide a detailed explanation along with the solution in Java.

## Algorithms:
1. Brute Force Approach
2. Two-Pass Hash Table Approach
3. One-Pass Hash Table Approach

## Approach:
1. Brute Force Approach:
   - Nested Loop
   - Check all possible pairs of numbers
   - Return indices if the sum matches the target
   
2. Two-Pass Hash Table Approach:
   - Two-pass iteration
   - Store array elements and their indices in a hash table
   - Check for the complement of each element
   - Return indices if found
   
3. One-Pass Hash Table Approach:
   - One-pass iteration
   - Store array elements and their indices in a hash table
   - Check for the complement of each element while iterating
   - Return indices if found
   - 
## Complexity:

**Time Complexity (TC):**
1. Brute Force Approach: O(n^2)
2. Two-Pass Hash Table Approach: O(n)
3. One-Pass Hash Table Approach: O(n)

**Space Complexity (SC):**
1. Brute Force Approach: O(1)
2. Two-Pass Hash Table Approach: O(n)
3. One-Pass Hash Table Approach: O(n)

## Flowchart:
```
Start
|
+-- Read array, target
|
+-- Brute Force Approach
|   |
|   +-- Loop i from 0 to n - 2
|   |   |
|   |   +-- Loop j from i + 1 to n - 1
|   |   |   |
|   |   |   +-- Check if arr[i] + arr[j] == target
|   |   |   |   |
|   |   |   |   +-- Return [i, j]
|   |
|   +-- Return empty array (no solution found)
|
+-- Two-Pass Hash Table Approach
|   |
|   +-- Create an empty hash table
|   |
|   +-- Loop i from 0 to n - 1
|   |   |
|   |   +-- Store arr[i] as key and i as value in the hash table
|   |
|   +-- Loop i from 0 to n - 1
|   |   |
|   |   +-- Calculate complement = target - arr[i]
|   |   |
|   |   +-- Check if complement exists in the hash table
|   |   |   |
|   |   |   +-- Return [i, hashTable.get(complement)]
|   |
|   +-- Return empty array (no solution found)
|
+-- One-Pass Hash Table Approach
|   |
|   +-- Create an empty hash table
|   |
|   +-- Loop i from 0 to n - 1
|   |   |
|   |   +-- Calculate complement = target - arr[i]
|   |   |
|   |   +-- Check if complement exists in the hash table
|   |   |   |
|   |   |   +-- Return [hashTable.get(complement), i]
|   |   |
|   |   +-- Store arr[i] as key and i as value in the hash table
|   |
|   +

-- Return empty array (no solution found)
|
End
```

## Solution in Java:
```java
public static int[] twoSum(int[] nums, int target) {
    // Create an empty hash table
    Map<Integer, Integer> hashMap = new HashMap<>();

    // One-pass iteration
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];

        // Check if complement exists in the hash table
        if (hashMap.containsKey(complement)) {
            return new int[] { hashMap.get(complement), i };
        }

        // Store arr[i] as key and i as value in the hash table
        hashMap.put(nums[i], i);
    }

    // Return empty array (no solution found)
    return new int[0];
}
```

## Explanation:
- The `twoSum` method takes an array of integers `nums` and a target value `target` as input.
- We create a hash table `hashMap` to store the elements and their indices.
- During the one-pass iteration, for each element `nums[i]`, we calculate the complement by subtracting it from the target.
- We check if the complement exists in the hash table. If it does, we return the indices `[hashMap.get(complement), i]`.
- If the complement does not exist, we store the current element and its index in the hash table.
- Finally, if no solution is found, we return an empty array.

This tutorial provides a comprehensive explanation of the "Two Sum" problem, along with different approaches, their time and space complexities, and a solution in Java. Remember to practice and experiment with the code to gain a better understanding.
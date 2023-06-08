---
sidebar_position: 11
---

# 10. Finding the Majority Element in an Array

![Finding the Majority Element in an Array](./img/Finding%20the%20Majority%20Element.gif)

## Description:
In this tutorial, we will explore how to find the majority element in an array. The majority element is defined as the element that appears more than n/2 times in the array, where n is the size of the array. We will discuss the algorithmic approach to solve this problem, analyze its time and space complexity, and provide a step-by-step solution in Java.

## Algorithms:
1. Brute Force Approach
2. Moore's Voting Algorithm

## Approach:
### 1. Brute Force Approach:
   - Iterate through each element in the array and count its occurrences.
   - Check if any element's count is greater than n/2, where n is the size of the array.
   - If found, return the majority element; otherwise, there is no majority element.

### 2. Moore's Voting Algorithm:
   - Initialize a candidate variable and set it to the first element of the array.
   - Iterate through the array, comparing each element with the candidate.
   - If the count of the candidate becomes zero, update the candidate with the current element.
   - At the end of the iteration, the candidate will hold the majority element.
   - Verify if the candidate appears more than n/2 times in the array.

**Time Complexity (TC):**
1. Brute Force Approach: O(n^2)
2. Moore's Voting Algorithm: O(n)

Space Complexity (SC):
1. Brute Force Approach: O(1)
2. Moore's Voting Algorithm: O(1)

Flowchart:
```
               +-------+ 
               | Start |
               +-------+ 
                  |
                  V
            +--------------+ 
            | Input Array  |
            +--------------+ 
                   |
                   V
         +----------------------+ 
         | Brute Force Approach |
         +----------------------+ 
                   |
                   V
         +------------------------+ 
         | Check Majority Element |
         +------------------------+
                   |
                   V
+----------------------------------------+
| Output Majority Element or No Majority |
+----------------------------------------+
                   |
                   V
                +-----+
                | End |
                +-----+
```

Solution in Java (using Moore's Voting Algorithm):
```java
public class MajorityElement {
    public static int findMajorityElement(int[] nums) {
        int candidate = nums[0];
        int count = 1;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == candidate) {
                count++;
            } else {
                count--;
                if (count == 0) {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }

        // Verification
        count = 0;
        for (int num : nums) {
            if (num == candidate) {
                count++;
            }
        }

        if (count > nums.length / 2) {
            return candidate;
        } else {
            return -1; // No majority element found
        }
    }

    public static void main(String[] args) {
        int[] nums = {2, 2, 1, 1, 1, 2, 2};
        int majorityElement = findMajorityElement(nums);
        System.out.println("Majority Element: " + majorityElement);
    }
}
```

Explanation:
1. We initialize the candidate as the first element and set the count to 1.
2. We iterate through the array starting from the second element.
3. If the current element is the same as the candidate, we increment the count.
4. If the current element is different, we decrement the count. If the count becomes zero, we update the candidate with the current element and reset the count to 1.
5. After the iteration, the candidate will hold the majority element.
6. We verify if the candidate appears more than n/2 times in the array.
7. Finally, we return the

 majority element or -1 if no majority element is found.

This tutorial provides a step-by-step explanation, algorithms, approach, time and space complexity analysis, and a complete Java solution for finding the majority element in an array.
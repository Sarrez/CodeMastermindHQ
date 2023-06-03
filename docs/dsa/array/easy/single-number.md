---
sidebar_position: 16
---

# 15. Single Number


## Description: 
In this tutorial, you will learn how to solve the "Single Number" problem, where you are given an array of integers with all elements repeating except for one. You will understand the problem statement, explore different approaches to solve it, and implement an efficient solution in Java.

## Algorithms and Approach:
### 1. Brute Force Approach:
   - Iterate through the array and for each element, check if it appears again in the array. If it does not, return that element as the single number.
   - **Time Complexity (TC): O(n^2)**

### 2. HashMap Approach:
   - Use a HashMap to store the frequency of each element in the array.
   - Iterate through the array and update the frequency in the HashMap.
   - Finally, iterate through the HashMap and return the element with a frequency of 1 as the single number.
   - T**C: O(n), Space Complexity (SC): O(n)**

### 3. Bit Manipulation Approach (XOR):
   - Utilize the XOR (^) operator to find the single number.
   - XORing an element with itself results in 0, and XORing an element with 0 results in the element itself.
   - Iterate through the array and perform XOR on each element.
   - The XOR of all elements will result in the non-repeating element.
   - **TC: O(n), SC: O(1)**

## Flowchart:
```
                     +--------------------+
                     |       Start        |
                     +--------------------+
                               |
                               |
      -------------------------V--------------------------- 
       |                       |                         | 
       |                       |                         |           
+------V-------------+  +------V-------------+  +--------V-----------+
|Brute Force Approach|  |  HashMap Approach  |  |  Bit Manipulation  |
+--------------------+  +--------------------+  +--------------------+
          |                        |                       |
 +--------v--------+      +--------v--------+     +--------v--------+
 |    Solution     |      |    Solution     |     |    Solution     |
 +--------|--------+      +--------|--------+     +--------|--------+   
          |                        |                       |
    -----------------------------------------------------------  
                                   |
                                   |
                         +---------V----------+
                         |      End           |
                         +--------------------+

```
## Solution in Java (Bit Manipulation Approach):
```java
public class SingleNumber {
    public static int findSingleNumber(int[] nums) {
        int singleNumber = 0;
        
        for (int num : nums) {
            singleNumber ^= num; // Perform XOR on each element
        }
        
        return singleNumber;
    }

    public static void main(String[] args) {
        int[] nums = {2, 3, 2, 4, 4, 1, 1};
        int singleNumber = findSingleNumber(nums);
        System.out.println("The single number is: " + singleNumber);
    }
}
```

## Explanation:
- The `findSingleNumber` function takes an array of integers `nums` as input and returns the non-repeating element.
- Initialize `singleNumber` as 0.
- Iterate through each element in `nums`.
- Perform XOR (^) operation between `singleNumber` and the current element.
- After iterating through all elements, the value of `singleNumber` will be the non-repeating element.
- Finally, return `singleNumber`.

By following this tutorial, you will gain a solid understanding of the Single Number problem and learn how to approach it using different techniques. The Bit Manipulation approach provides an optimal solution with a linear time complexity of O(n) and constant space complexity of O(1).
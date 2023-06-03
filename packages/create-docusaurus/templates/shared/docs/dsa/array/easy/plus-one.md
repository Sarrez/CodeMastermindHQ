---
sidebar_position: 14
---

# 13. Plus One

## Description: 
This tutorial explains how to add 1 to an integer array representing a non-negative integer, commonly encountered in coding interview questions. We'll explore the problem's background, algorithms, step-by-step approach, time and space complexity analysis, and provide a solution implemented in Java with detailed explanations.

## Algorithm:

1. Start from the last element of the array.
2. Add 1 to the current element.
3. If the sum is less than 10, update the current element and return the modified array.
4. If the sum is equal to 10, set the current element to 0 and continue the process with the previous element.
5. If we reach the first element of the array and the sum is 10, insert 1 at the beginning of the array.

## Approach:
1. Initialize a carry variable as 1.
2. Traverse the array from right to left.
3. Add the carry to the current element.
4. Check if the sum is less than 10.
   - If it is, update the current element with the sum and set the carry to 0.
   - If it is not, set the current element to 0 and carry to 1.
5. After the loop ends, if the carry is still 1, insert it at the beginning of the array.

## Complexity

**Time Complexity (TC):** O(n), where n is the length of the input array.

**Space Complexity (SC):** O(n), as we are creating a new array for the result.

## Flowchart:

```
Start
|
|--- Traverse array from right to left
|       |
|       |--- Add carry to the current element
|       |
|       |--- Check if sum < 10
|       |       |
|       |       |--- If sum < 10
|       |       |       |
|       |       |       |--- Update current element with sum
|       |       |       |--- Set carry to 0
|       |       |
|       |       |--- If sum >= 10
|       |               |
|       |               |--- Set current element to 0
|       |               |--- Set carry to 1
|       |
|--- If carry is still 1
|       |
|       |--- Insert 1 at the beginning of the array
|
|--- Return the updated array
End
```

## Solution in Java:

```java
public class PlusOne {
    public static int[] plusOne(int[] digits) {
        int n = digits.length;
        int carry = 1;

        for (int i = n - 1; i >= 0; i--) {
            int sum = digits[i] + carry;

            if (sum < 10) {
                digits[i] = sum;
                carry = 0;
            } else {
                digits[i] = 0;
                carry = 1;
            }
        }

        if (carry == 1) {
            int[] result = new int[n + 1];
            result[0] = 1;
            return result;
        }

        return digits;
    }

    public static void main(String[] args) {
        int[] digits = {9, 9, 9};
        int[] result = plusOne(digits);

        System.out.print("Result: ");
        for (int num : result) {
            System.out.print(num + " ");
        }
    }
}
```

## Explanation:

1. The `plusOne` function takes an integer array `digits` as input and returns the modified array after adding 1.
2. It initializes the `carry` variable to

 1, indicating that we want to add 1 to the number represented by the array.
3. The loop traverses the array from right to left, starting from the last element.
4. For each element, it adds the carry to the current element and checks if the sum is less than 10.
5. If the sum is less than 10, it updates the current element with the sum and sets the carry to 0.
6. If the sum is equal to or greater than 10, it sets the current element to 0 and carry to 1.
7. After the loop ends, it checks if the carry is still 1. If it is, it means we need to insert an additional digit 1 at the beginning of the array.
8. Finally, it returns the modified array as the result.
9. In the `main` function, we create an example array `digits` with the value [9, 9, 9] and call the `plusOne` function. The result is then printed.

This tutorial provides a comprehensive explanation of the "Plus One" problem, including the algorithm, approach, time and space complexity analysis, and a complete solution implemented in Java. Understanding this problem and its solution will help you in solving similar problems and enhance your problem-solving skills.
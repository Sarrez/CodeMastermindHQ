---
sidebar_position: 8
---

# 7. Pascal's Triangle

## Description:
In this tutorial, we will explore Pascal's Triangle, a fascinating mathematical construct that reveals the coefficients of the binomial expansion. We will delve into the algorithms and approaches to generate Pascal's Triangle, discuss its properties and applications, and provide a step-by-step solution in Java. By the end of this tutorial, you will have a thorough understanding of Pascal's Triangle and its various uses.

## Algorithms:
1. Pascal's Triangle Generation Algorithm:
   - Initialize an empty 2D array to store the triangle.
   - Iterate over each row of the triangle.
   - In each row, calculate the coefficients using the formula: C(n, k) = C(n-1, k-1) + C(n-1, k).
   - Store the coefficients in the corresponding positions of the triangle.
   - Return the generated Pascal's Triangle.

## Approach:
To generate Pascal's Triangle, we will use a bottom-up approach. Starting with the first row, we will calculate the coefficients of each row based on the coefficients of the previous row. By applying the formula for combinations, we can fill in the values of Pascal's Triangle row by row.

## Complexity:
**Time Complexity (TC):**
The time complexity of generating Pascal's Triangle is O(n^2), where n is the number of rows in the triangle. Since we need to calculate each coefficient, the time complexity increases quadratically with the number of rows.

**Space Complexity (SC):**
The space complexity of Pascal's Triangle is O(n^2), as we need to store the entire triangle in a 2D array.

## Flowchart:
```
Start
|
|---> Initialize an empty 2D array for Pascal's Triangle
|
|---> Iterate over each row of the triangle
|     |
|     |---> Iterate over each coefficient in the current row
|     |     |
|     |     |---> Calculate the coefficient using the formula C(n, k) = C(n-1, k-1) + C(n-1, k)
|     |     |
|     |     |---> Store the coefficient in the current position of the triangle
|     |
|     |---> Move to the next row
|
|---> Return the generated Pascal's Triangle
|
End
```

## Solution in Java:
```java
public static int[][] generatePascalsTriangle(int numRows) {
    int[][] triangle = new int[numRows][];

    for (int row = 0; row < numRows; row++) {
        triangle[row] = new int[row + 1];
        triangle[row][0] = 1; // First element of each row is always 1

        for (int col = 1; col < row; col++) {
            triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }

        triangle[row][row] = 1; // Last element of each row is always 1
    }

    return triangle;
}
```

## Explanation:
The `generatePascalsTriangle` function takes the number of rows as input and returns the generated Pascal's Triangle as a 2D array.

Inside the function, we initialize an empty 2D array called `triangle` to store the coefficients. We iterate over each row, creating a new array for each row with the appropriate size. We set the first and last elements of each row to 1, as they are always 1 in Pascal's Triangle.

For the remaining elements in each row, we calculate their values using the formula C(n, k) = C(n-1, k-1) + C(n-

1, k), where n is the row number and k is the column number. We retrieve the coefficients from the previous row and add them to generate the current coefficient.

Finally, we return the generated Pascal's Triangle.

Make sure to test the `generatePascalsTriangle` function with different inputs to verify its correctness.

This tutorial provides a comprehensive explanation of Pascal's Triangle, the algorithm to generate it, the approach used, time and space complexities, and a solution in Java.
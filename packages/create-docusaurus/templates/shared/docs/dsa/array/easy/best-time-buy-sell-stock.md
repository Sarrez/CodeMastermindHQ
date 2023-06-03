---
sidebar_position: 9
---

# 8. Best Time to Buy and Sell Stock

## Description: 
Learn how to determine the maximum profit that can be obtained by buying and selling a stock at the right time. This tutorial provides step-by-step explanations, algorithms, approaches, time and space complexities, and a solution in Java.

## Algorithm:
1. Initialize variables: minPrice = Integer.MAX_VALUE and maxProfit = 0.
2. Iterate through the array of stock prices.
   - Update minPrice: If the current price is lower than minPrice, update minPrice to the current price.
   - Update maxProfit: If the current price minus minPrice is greater than maxProfit, update maxProfit.
3. Return maxProfit.

## Approach:
The approach involves keeping track of the minimum stock price encountered so far and calculating the maximum profit that can be obtained by selling the stock at each subsequent day. By finding the minimum price and calculating the difference between the current price and the minimum price, we can update the maximum profit if necessary.

## Complexity:
**Time Complexity:** O(n), where n is the number of elements in the stock prices array.

**Space Complexity:** O(1), as we only use a constant amount of extra space.

## Flowchart (Structured Form):
```
START
Initialize minPrice as maximum value and maxProfit as 0
Iterate through each price in the stock prices array
    Update minPrice if the current price is lower
    Calculate the current profit by subtracting minPrice from the current price
    Update maxProfit if the current profit is greater
Return maxProfit
END
```

## Solution in Java:
```java
public static int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;

    for (int price : prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}
```

## Explanation:
The `maxProfit` function takes an array of stock prices as input and follows the steps described in the algorithm. It initializes `minPrice` as the maximum possible value and `maxProfit` as 0. Then, it iterates through each price in the array.

During each iteration, it checks if the current price is lower than the stored `minPrice`. If it is, `minPrice` is updated to the current price. Otherwise, it calculates the current profit by subtracting `minPrice` from the current price. If the current profit is greater than the stored `maxProfit`, `maxProfit` is updated accordingly.

Finally, the function returns the maximum profit that can be obtained by buying and selling the stock.

Make sure to test the function with different scenarios and edge cases to validate its correctness and efficiency.

I hope this tutorial provides a clear understanding of the "Best Time to Buy and Sell Stock" problem and helps you solve it efficiently in Java.
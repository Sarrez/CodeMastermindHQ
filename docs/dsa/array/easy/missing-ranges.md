---
sidebar_position: 17
---

# 16. Missing Ranges

## Description: 
This tutorial will guide you through the process of solving the "Missing Ranges" problem, where you are given a sorted array of integers and need to determine the missing intervals within a specified range. You will learn the algorithmic approach, step-by-step implementation in Java, time and space complexity analysis, and a visual representation in the form of a flowchart.

## Algorithms:
The algorithm for finding missing ranges involves iterating over the sorted array and comparing consecutive elements to identify any gaps or missing intervals within a given range.

## Approach:
1. Initialize an empty result list to store the missing ranges.
2. Iterate over the input array.
3. Compare the current element with the lower bound of the given range.
    - If the current element is greater than the lower bound, there is a missing range between the lower bound and the current element. Add it to the result list.
4. Update the lower bound to the next element in the array.
5. Repeat steps 3-4 until the end of the array.
6. Check if there is a missing range after the last element of the array.
    - If the upper bound of the given range is greater than the last element, add the missing range to the result list.
7. Return the result list.

**Time Complexity:** O(n), where n is the number of elements in the input array.

**Space Complexity:** O(1) (excluding the space for the result list).

## Flowchart:
```
Start
|
V
Initialize result list
|
V
Iterate over array
|
V
Compare current element with lower bound
|
V
Add missing range to result list if necessary
|
V
Update lower bound
|
V
Repeat until end of array
|
V
Check for missing range after last element
|
V
Add missing range to result list if necessary
|
V
Return result list
|
V
End
```

## Solution in Java:

```java
import java.util.ArrayList;
import java.util.List;

public class MissingRanges {
    public static List<String> findMissingRanges(int[] nums, int lower, int upper) {
        List<String> result = new ArrayList<>();
        int next = lower;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > next) {
                result.add(getRange(next, nums[i] - 1));
            }

            next = nums[i] + 1;
        }

        if (next <= upper) {
            result.add(getRange(next, upper));
        }

        return result;
    }

    private static String getRange(int start, int end) {
        return start == end ? String.valueOf(start) : start + "->" + end;
    }

    public static void main(String[] args) {
        int[] nums = {0, 1, 3, 50, 75};
        int lower = 0;
        int upper = 99;

        List<String> missingRanges = findMissingRanges(nums, lower, upper);
        for (String range : missingRanges) {
            System.out.println(range);
        }
    }
}
```

## Explanation:
- The `findMissingRanges` function takes the input array `nums`, the lower bound, and the upper bound as parameters and returns a list of missing ranges.
- We iterate over the `nums` array and compare each element with the lower bound.
- If there is a gap between the lower bound and the current element, we add the missing range to the result list.
- After processing all elements in the array, we check if there is a missing range after the last element.
- The `getRange` function returns the string representation of

 a range. If the start and end values are the same, it returns a single number. Otherwise, it returns a range in the form "start->end".
- In the `main` function, we demonstrate the usage of the `findMissingRanges` function with sample input.

By following this tutorial, you should now have a clear understanding of the problem, the algorithmic approach, and a working solution in Java.
---
sidebar_position: 15
---

# 14. Convert Sorted Array to Binary Search Tree

## Description:
This tutorial covers how to convert a sorted array into a balanced binary search tree (BST). A binary search tree is a binary tree where the left child of a node contains smaller values, and the right child contains larger values. By utilizing the property of a sorted array, we can efficiently construct a balanced BST.

## Algorithms:
1. **ConvertSortedArrayToBST:**
   - Takes a sorted array as input and returns the root of the resulting BST.
   - The function recursively builds a balanced BST by selecting the middle element of the array as the root and recursively constructing the left and right subtrees.

## Approach:
1. Determine the middle element of the sorted array.
2. Create a new node with the middle element as the root of the BST.
3. Recursively apply steps 1-2 to the left and right halves of the array, setting the middle element of each subarray as the root of the corresponding subtree.
4. Return the root node of the BST.

## Complexity:
**Time Complexity (TC):**
The time complexity of the solution is O(n), where n is the number of elements in the sorted array. This is because we visit each element once during the construction of the BST.

**Space Complexity (SC):**
The space complexity of the solution is O(log n) on average, representing the recursive call stack. In the worst case, it can be O(n) when the array is sorted in descending order, leading to an unbalanced BST.

## Flowchart:

```
      +-----------------------+
      | ConvertSortedArrayToBST |
      +-----------------------+
                  |
                  v
     +-------------------------+
     | ConstructBST(left, right)|
     +-------------------------+
                  |
                  v
         +--------------+
         |   Find mid   |
         +--------------+
                  |
                  v
       +------------------+
       | Create new node  |
       +------------------+
                  |
        +---------+---------+
        |                   |
        v                   v
  +-----------+       +-----------+
  | Recurse on |       | Recurse on |
  | left half  |       | right half|
  +-----------+       +-----------+
```

## Solution in Java:

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        if (nums == null || nums.length == 0) {
            return null;
        }

        return constructBST(nums, 0, nums.length - 1);
    }

    private TreeNode constructBST(int[] nums, int left, int right) {
        if (left > right) {
            return null;
        }

        int mid = left + (right - left) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        root.left = constructBST(nums, left, mid - 1);
        root.right = constructBST(nums, mid + 1, right);

        return root;
    }
}
```

## Explanation:
1. The `sortedArrayToBST` function takes a sorted array `nums` as input and returns the root of the resulting BST.
2. The function checks for the base case where the range defined by `left` and `right` is empty (i.e., `left > right`). In this case, it returns null.
3. If the range is not empty, the function calculates the middle index `mid` as the average of `left` and `right`. This index corresponds to the middle element

 of the current subarray.
4. A new node is created with the value of `nums[mid]`, representing the root of the current subtree.
5. The function recursively constructs the left and right subtrees by calling `constructBST` on the left and right halves of the array, respectively.
6. The root node is returned as the result.

This solution utilizes the divide-and-conquer approach to build a balanced BST from a sorted array efficiently.
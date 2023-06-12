---
sidebar_position: 7
tags: [CodeMasterMindHQ, Arrays in JavaScript, array in js, Array Methods in JavaScript, Sorting Arrays in JavaScript, Array Iteration in JavaScript]
---

# Arrays in JavaScript

Arrays are used to store multiple values in a single variable.

```js
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
```

## Array Methods in JavaScript

JavaScript provides built-in methods to manipulate arrays.

```js
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);  // Add an element to the end
numbers.pop();  // Remove the last element
numbers.unshift(0);  // Add an element to the beginning
numbers.shift();  // Remove the first element
let slicedArray = numbers.slice(1, 4);  // Extract a portion of the array
numbers.splice(2, 1);  // Remove or replace elements
numbers.reverse();  // Reverse the array
let joinedArray = numbers.join(',');  // Convert to a string with separator
```

## Sorting Arrays in JavaScript

JavaScript provides methods to sort arrays in ascending or descending order.

```js
let numbers = [5, 3, 1, 4, 2];
numbers.sort();  // Sort in ascending order
numbers.reverse();  // Sort in descending order
```

## Array Iteration in JavaScript

You can iterate over the elements of an array using loops or higher-order functions.

```js
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((number) => {
  console.log(number);
});
```

## Array Const in JavaScript

Although arrays declared with `const` are mutable, you can't reassign them to a new array.

```js
const numbers = [1, 2, 3];
numbers.push(4);  // Valid
numbers = [1, 2, 3, 4];  // Invalid
```
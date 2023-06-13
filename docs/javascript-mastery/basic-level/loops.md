---
sidebar_position: 12
tags: [CodeMasterMindHQ, loops, for loop, while loop, do while loop, while, do while]
---

# Loops in JavaScript

## For Loop in JavaScript

The for loop is used to iterate over a block of code a specified number of times.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## for-of in JavaScript

The for-of loop is used to iterate over elements of an iterable object (e.g., arrays, strings).

```js
let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
  console.log(fruit);
}
```

## While Loop in JavaScript

The while loop is used to repeatedly execute a block of code as long as a condition is true.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## Break and Continue in JavaScript

The `break` statement is used to exit a loop, and the `continue` statement is used to skip an iteration.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

## Iterables in JavaScript

Iterables are objects that can be iterated over using loops or higher-order functions.

```js
let numbers = [1, 2, 3];
let string = 'Hello';

for (let number of numbers) {
  console.log(number);
}

for (let char of string) {
  console.log(char);
}
```

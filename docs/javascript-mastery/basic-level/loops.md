---
sidebar_position: 12
tags: [CodeMasterMindHQ, loops, for loop, while loop, do while loop, while, do while]
---

# Loops in JavaScript

Loops are used to repeatedly execute a block of code until a certain condition is met. JavaScript provides several types of loops to cater to different looping requirements.

## For Loop
The `for` loop is used when you know the number of iterations in advance.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

In this example, the loop will iterate five times and print the values of `i` from 0 to 4.

## For...In Loop
The `for...in` loop is used to iterate over the properties of an object.

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(key, person[key]);
}
```

This loop iterates over the keys of the `person` object and prints both the key and its corresponding value.

## For...Of Loop
The `for...of` loop is used to iterate over iterable objects such as arrays or strings.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
```

In this example, the loop iterates over each element of the `numbers` array and prints its value.

## While Loop
The `while` loop is used when the number of iterations is not known in advance, and the loop continues until a certain condition becomes false.

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

This loop will iterate as long as the condition `i < 5` is true, printing the value of `i` in each iteration.

## Do-While Loop
The `do-while` loop is similar to the `while` loop, but the condition is checked after the loop body executes, guaranteeing that the loop body executes at least once.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

In this example, the loop body will execute once, even if the condition `i < 5` is false from the beginning.

## Break and Continue
The `break` statement is used to exit a loop prematurely, while the `continue` statement is used to skip the current iteration and move to the next iteration.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break; // Exit the loop when i is 2
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the iteration when i is 2
  }
  console.log(i);
}
```

In the first example, the loop is terminated when `i` is 2 due to the `break` statement. In the second example, the iteration is skipped when `i` is 2 due to the `continue` statement.

## Interview Questions

1. **What is the difference between the `for` loop and the `while` loop?**
   
   The `for` loop is used when the number of iterations is known in advance, while the `while` loop is used when the number of iterations is not known and depends on a certain condition.

2. **How can you iterate over the properties of an object?**

   You can use the `for...in` loop to iterate over the properties of an object.

3. **What is the purpose of the `break` statement?**
   
   The `break` statement is used to exit a loop prematurely, stopping the loop execution.

4. **How does the `do-while` loop differ from the `while` loop?**
   
   The main difference is that the `do-while` loop guarantees that the loop body executes at least once, as the condition is checked after the loop body.

5. **When would you use the `continue` statement?**
   
   The `continue` statement is used to skip the current iteration and move to the next iteration in a loop, typically when you want to skip certain values or conditions.

These are some common interview questions related to loops in JavaScript. Understanding and practicing these concepts will help you confidently tackle loop-related challenges in JavaScript.
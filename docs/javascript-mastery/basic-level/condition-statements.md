---
sidebar_position: 11
tags: [CodeMasterMindHQ, Conditional statements, if else in js, if, else, else if, Switch Statement]
---

# Conditional statements

Conditional statements allow you to perform different actions based on different conditions. 
In JavaScript, the most commonly used conditional statements are:

1. **if statement:** Executes a block of code if a specified condition is true.

2. **else statement:** Executes a block of code if the condition in the if statement is false.

3. **else if statement:** Allows you to specify multiple conditions to test.

4. **switch statement:** Tests a variable against multiple cases and executes a block of code based on a match.

## if Statement
The `if` statement is used to execute a block of code if a specified condition is true.

**Syntax:**

```javascript
if (condition) {
  // code to be executed if the condition is true
}
```

**Example:**

```javascript
let num = 10;

if (num > 0) {
  console.log("The number is positive.");
}
```

**Output:**

```
The number is positive.
```

## else Statement
The `else` statement is used to execute a block of code if the `if` condition is false.

**Syntax:**

```javascript
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}
```

**Example:**

```javascript
let num = -5;

if (num > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is not positive.");
}
```

**Output:**

```
The number is not positive.
```

## else if Statement

The `else if` statement allows you to check multiple conditions. It is used when you have more than two possible outcomes.

**Syntax:**

```javascript
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if all conditions are false
}
```

**Example:**

```javascript
let num = 0;

if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
```

**Output:**

```
The number is zero.
```

## Switch Statement
The `switch` statement is used to perform different actions based on different conditions. It provides a more concise way to write multiple `if...else if...else` statements.

The `switch` statement provides an alternative way to handle multiple conditions based on the value of a variable. It evaluates an expression and matches the value against multiple cases. If a match is found, the corresponding block of code is executed.

**Syntax:**

```javascript
switch (expression) {
  case value1:
    // code to be executed if expression matches value1
    break;
  case value2:
    // code to be executed if expression matches value2
    break;
  ...
  default:
    // code to be executed if expression doesn't match any case
}
```

**Example:**

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(`The day is ${dayName}.`);
```

**Output:**

```
The day is Wednesday.
```

## Common Interview Questions

1. **What is the difference between `if...else` and `switch` statements?**

   - The `if...else` statement is used to check a single condition, whereas the `switch` statement allows you to compare an expression with multiple values.
     
   - The `if...else` statement can handle complex conditions, while the `switch` statement is more suitable for comparing a single value against multiple cases.

2. **Can we have multiple `else if` statements in an `if...else` statement?**
   
   - Yes, you can have multiple `else if` statements to check multiple conditions within an `if...else` statement.

3. **What happens if no `case` matches in a `switch` statement?**
  
   - If no `case` matches the expression in a `switch` statement, the code inside the `default` block will be executed.

4. **Can we use a variable as an expression in a `switch` statement?**
   
   - Yes, you can use a variable as an expression in a `switch` statement. The value of the variable will be compared with the `case` values.

These are some common interview questions related to conditional statements in JavaScript. Make sure to practice writing code examples and understanding the concepts thoroughly to ace your interviews.

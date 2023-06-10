---
sidebar_position: 3
---

# Operators in JavaScript

***JavaScript provides various operators for performing operations on data.***

### 1. Arithmetic Operators

Arithmetic operators are used for mathematical calculations.

```js
let x = 10;
let y = 5;
let sum = x + y;  // Addition
let difference = x - y;  // Subtraction
let product = x * y;  // Multiplication
let quotient = x / y;  // Division
let remainder = x % y;  // Modulo
let increment = x++;  // Increment
let decrement = x--;  // Decrement
```

### 2. Assignment Operators

Assignment operators are used to assign values to variables.

```js
let x = 10;
x += 5;  // Equivalent to x = x + 5;
x -= 3;  // Equivalent to x = x - 3;
x *= 2;  // Equivalent to x = x * 2;
x /= 4;  // Equivalent to x = x / 4;
x %= 3;  // Equivalent to x = x % 3;
```

### 3. Comparison Operators

Comparison operators are used to compare values and return a Boolean result.

```js
let x = 5;
let y = 10;
let isEqual = x == y;  // Equal to
let isNotEqual = x != y;  // Not equal to
let isGreater = x > y;  // Greater than
let isLess = x < y;  // Less than
let isGreaterOrEqual = x >= y;  // Greater than or equal to
let isLessOrEqual = x <= y;  // Less than or equal to
```

### 4. String Operators

String operators are used for concatenating strings.

```js
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;  // Concatenation
```

### 5. Logical Operators

Logical operators are used for logical operations.

```js
let x = true;
let y = false;
let result = x && y;  // Logical AND
let result = x || y;  // Logical OR
let result = !x;  // Logical NOT
```

### 6. Bitwise Operators

Bitwise operators are used to perform operations on binary representations of numbers.

```js
let x = 5;
let y = 3;
let result = x & y;  // Bitwise AND
let result = x | y;  // Bitwise OR
let result = x ^ y;  // Bitwise XOR
let result = ~x;  // Bitwise NOT
let result = x << 1;  // Left shift
let result = x >> 1;  // Right shift
```

### 7. Ternary Operator

The ternary operator is a shorthand way of writing conditional statements.

```js
let age = 18;
let message = (age >= 18) ? 'Adult' : 'Minor';
```

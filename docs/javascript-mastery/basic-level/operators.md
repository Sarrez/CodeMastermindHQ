---
sidebar_position: 3
---

# Operators in JavaScript

Operators in JavaScript are symbols that perform operations on operands (values or variables).

**JavaScript provides various operators for performing operations on data.**

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators:
4. String Operators
5. Logical Operators
6. Bitwise Operators
7. Ternary Operator

### Arithmetic Operators

Arithmetic operators perform mathematical calculations on numeric operands.

```javascript
let a = 10;
let b = 5;

console.log(a + b);  // Addition: 15
console.log(a - b);  // Subtraction: 5
console.log(a * b);  // Multiplication: 50
console.log(a / b);  // Division: 2
console.log(a % b);  // Remainder: 0
console.log(a ** b); // Exponentiation: 100000
```

### Assignment Operators

Assignment operators assign values to variables.

```javascript
let a = 10;
let b = 5;

a += b;  // Equivalent to: a = a + b;
console.log(a);  // Output: 15

a -= b;  // Equivalent to: a = a - b;
console.log(a);  // Output: 10

a *= b;  // Equivalent to: a = a * b;
console.log(a);  // Output: 50

a /= b;  // Equivalent to: a = a / b;
console.log(a);  // Output: 10

a %= b;  // Equivalent to: a = a % b;
console.log(a);  // Output: 0
```

### Comparison Operators

Comparison operators compare values and return a boolean result (`true` or `false`).

```javascript
let a = 10;
let b = 5;

console.log(a > b);   // Greater than: true
console.log(a < b);   // Less than: false
console.log(a >= b);  // Greater than or equal to: true
console.log(a <= b);  // Less than or equal to: false
console.log(a === b); // Equal to: false
console.log(a !== b); // Not equal to: true
```

### String Operators

String operators perform string concatenation or string-related operations.

```javascript
let firstName = 'John';
let lastName = 'Doe';

let fullName = firstName + ' ' + lastName;
console.log(fullName);  // Output: "John Doe"

let greeting = 'Hello, ' + firstName + '!';
console.log(greeting);  // Output: "Hello, John!"
```

### Logical Operators

Logical operators perform logical operations on boolean operands and return a boolean result.

```javascript
let a = true;
let b = false;

console.log(a && b);  // Logical AND: false
console.log(a || b);  // Logical OR: true
console.log(!a);     // Logical NOT: false
```

### Bitwise Operators

Bitwise operators perform operations on binary representations of numbers.

```javascript
let a = 5;
let b = 3;

console.log(a & b);   // Bitwise AND: 1
console.log(a | b);   // Bitwise OR: 7
console.log(a ^ b);   // Bitwise XOR: 6
console.log(~a);      // Bitwise NOT: -6
console.log(a << 1);  // Left shift: 10
console.log(a >> 1);  // Right shift: 2
console.log(a >>> 1); // Unsigned right shift: 2
```

### Ternary Operator

The ternary operator is a shorthand for an `if-else` statement.

```javascript
let age = 20;

let message = age >= 18 ? 'You are an adult' : 'You are a minor';
console.log(message);  // Output: "You are an adult"
```

### Interview Questions:

1. What are the arithmetic operators in JavaScript?
2. What is the result of `10 / 3` in JavaScript?
3. How can you calculate the remainder of a division operation in JavaScript?
4. How can you perform exponentiation in JavaScript?
5. What is the purpose of assignment operators in JavaScript?
6. What is the difference between += and = in JavaScript?
7. How can you increment a variable by a specific value using an assignment operator in JavaScript?
8. What are comparison operators used for in JavaScript?
9. What is the difference between == and === in JavaScript?
10. How can you check if two values are not equal using a comparison operator in JavaScript?
11. What is string concatenation in JavaScript?
12. How can you combine two strings using the string operator?
13. Can you perform mathematical operations using string operators in JavaScript?
14. What are logical operators used for in JavaScript?
15. What is the difference between && and || in JavaScript?
16. How can you negate a boolean value using a logical operator in JavaScript?
17. What are bitwise operators used for in JavaScript?
18. How can you perform bitwise AND, OR, and XOR operations using bitwise operators in JavaScript?
19. What is the difference between >> and >>> in JavaScript?
20. What is the ternary operator used for in JavaScript?
21. What is the syntax of the ternary operator?
22. How can you replace an if-else statement with a ternary operator?

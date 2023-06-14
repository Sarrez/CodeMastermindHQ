---
sidebar_position: 6
---


# Numbers in JavaScript

In JavaScript, numbers are a primitive data type used to represent numeric values. JavaScript supports both whole numbers (integers) and decimal numbers (floating-point numbers).

Here's an example of declaring and using numbers in JavaScript:

```javascript
let num1 = 10;       // Integer
let num2 = 3.14;     // Floating-point number
let num3 = -5;       // Negative number
let num4 = 2e6;      // Scientific notation (2 x 10^6)
```

### BigInt in JavaScript

BigInt is a built-in object introduced in ECMAScript 2020 that allows you to represent integers with arbitrary precision. It can be used to store and perform calculations on very large numbers that exceed the maximum value supported by the `Number` data type.

To create a BigInt, append `n` to the end of an integer literal or use the `BigInt()` function:

```javascript
let largeNumber = 1234567890123456789012345678901234567890n;
let anotherLargeNumber = BigInt("9876543210987654321098765432109876543210");
```

### Number Methods in JavaScript

JavaScript provides several methods for performing operations on numbers. Here are some commonly used number methods:

- `Number.parseFloat()`: Converts a string to a floating-point number.
- `Number.parseInt()`: Converts a string to an integer.
- `Number.isNaN()`: Checks if a value is NaN (Not a Number).
- `Number.isFinite()`: Checks if a value is a finite number.
- `Number.isInteger()`: Checks if a value is an integer.
- `Number.isSafeInteger()`: Checks if a value is a safe integer.
- `Number.MAX_VALUE`: Returns the maximum representable number.
- `Number.MIN_VALUE`: Returns the minimum positive representable number.
- `Number.POSITIVE_INFINITY`: Represents positive infinity.
- `Number.NEGATIVE_INFINITY`: Represents negative infinity.

Here's an example demonstrating the use of some number methods:

```javascript
let num = "3.14";
let parsedNum = Number.parseFloat(num);
console.log(parsedNum);   // Output: 3.14

let value = "Hello";
console.log(Number.isNaN(value));   // Output: true

let infiniteNum = Number.POSITIVE_INFINITY;
console.log(infiniteNum);   // Output: Infinity
```

### Number Properties in JavaScript

JavaScript also provides some properties related to numbers:

- `Number.prototype`: Represents the prototype object for the `Number` constructor.
- `Number.EPSILON`: Represents the difference between 1 and the smallest value greater than 1 that can be represented.
- `Number.MAX_SAFE_INTEGER`: Represents the maximum safe integer that can be represented.
- `Number.MIN_SAFE_INTEGER`: Represents the minimum safe integer that can be represented.

Here's an example illustrating the usage of number properties:

```javascript
let num = 10;
console.log(num.toExponential());   // Output: 1e+1

console.log(Number.EPSILON);   // Output: 2.220446049250313e-16

console.log(Number.MAX_SAFE_INTEGER);   // Output: 9007199254740991
```

## Interview Questions

1. **What is the difference between a number and a BigInt in JavaScript?**
   - Numbers are a primitive data type used to represent numeric values, including integers and floating-point numbers. They have a limited range and precision.
   - BigInt is a built-in object used to represent integers with arbitrary precision. It can handle very large

 numbers that exceed the maximum value supported by the `Number` data type.

2. **How can you check if a value is a number in JavaScript?**
   You can use the `typeof` operator or the `Number.isFinite()` method to check if a value is a number.

   ```javascript
   let value = 42;
   console.log(typeof value === "number");   // Output: true

   console.log(Number.isFinite(value));   // Output: true
   ```

3. **What is the difference between `Number.parseFloat()` and `Number.parseInt()` methods?**
   - `Number.parseFloat()` converts a string to a floating-point number, ignoring any trailing non-numeric characters.
   - `Number.parseInt()` converts a string to an integer by parsing it until the first non-numeric character is encountered.

   ```javascript
   let numStr = "3.14";
   console.log(Number.parseFloat(numStr));   // Output: 3.14
   console.log(Number.parseInt(numStr));     // Output: 3
   ```

4. **How can you check if a value is NaN in JavaScript?**
   You can use the `Number.isNaN()` method or the global `isNaN()` function to check if a value is NaN.

   ```javascript
   let value = "Hello";
   console.log(Number.isNaN(value));   // Output: true

   console.log(isNaN(value));          // Output: true
   ```

5. **What is the difference between `Number.isInteger()` and `Number.isSafeInteger()` methods?**
   - `Number.isInteger()` checks if a value is a whole number (integer).
   - `Number.isSafeInteger()` checks if a value is a whole number within the safe range of the `Number` data type (-2^53 to 2^53).

   ```javascript
   let num = 10;
   console.log(Number.isInteger(num));       // Output: true
   console.log(Number.isSafeInteger(num));   // Output: true

   let largeNum = 9007199254740992;
   console.log(Number.isInteger(largeNum));       // Output: true
   console.log(Number.isSafeInteger(largeNum));   // Output: false
   ```

These are some important concepts, methods, properties, and interview questions related to Numbers in JavaScript. Make sure to cover them in your tutorial for a comprehensive understanding of numbers in JavaScript.
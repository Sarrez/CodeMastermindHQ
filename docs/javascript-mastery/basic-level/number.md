---
sidebar_position: 6
---

# Numbers in JavaScript

Numbers represent numeric values and can be integers or decimals.

```js
let age = 25;
let price = 10.99;
```

## BigInt in JavaScript

The `BigInt` type is used to represent arbitrarily large integers.

```js
let bigNumber = BigInt(9007199254740991);
```

## Number Methods in JavaScript

JavaScript provides built-in methods to perform operations on numbers.

```js
let number = 3.14159;
let rounded = number.toFixed(2);  // Round to 2 decimal places
let power = Math.pow(2, 3);  // Exponentiation
let squareRoot = Math.sqrt(16);  // Square root
let absolute = Math.abs(-7);  // Absolute value
let random = Math.random();  // Random number between 0 and 1
```

## Number Properties in JavaScript

JavaScript provides properties that represent special numeric values.

```js
let positiveInfinity = Infinity;  // Positive infinity
let negativeInfinity = -Infinity;  // Negative infinity
let notANumber = NaN;  // Not a Number
```
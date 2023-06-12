---
sidebar_position: 10
---

# Math Object in JavaScript

The `Math` object provides mathematical functions and constants.

```js
let x = 3.14159;
let rounded = Math.round(x);  // Round to the nearest integer
let ceiling = Math.ceil(x);  // Round up to the nearest integer
let floor = Math.floor(x);  // Round down to the nearest integer
let max = Math.max(5, 10);  // Maximum value
let min = Math.min(5, 10);  // Minimum value
```

## Random in JavaScript

You can generate random numbers using the `Math.random()` method.

```js
let random = Math.random();  // Random number between 0 and 1
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;  // Random number in a range
```
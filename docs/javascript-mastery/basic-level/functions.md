---
sidebar_position: 4
tags: [CodeMasterMindHQ, Functions, Normal Function, Arrow Function, Anonymous Function]
---

# Functions in JavaScript

**Functions are reusable blocks of code that perform specific tasks.**

### 1. Normal Function

A normal function is defined using the function keyword.

```js
function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

sayHello('John');  // Output: Hello, John!
```

### 2, Arrow Function

An arrow function is a concise way of writing functions in JavaScript.

```js
const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
}

sayHello('John');  // Output: Hello, John!
```

### 3. Anonymous Function

An anonymous function is a function without a name.

```js
const addNumbers = function (x, y) {
  return x + y;
}

let result = addNumbers(5, 10);  // Result: 15
```
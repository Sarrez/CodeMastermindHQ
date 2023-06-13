---
sidebar_position: 1
tags: [CodeMasterMindHQ, var, let, const, variable in js, var v/s let v/s const]
---

# Variable Declaration

In JavaScript, variables are used to store and manipulate data. Before using a variable, you need to declare it using one of the following keywords: `var`, `let`, or `const`. Each keyword has its own characteristics and scope rules.

### `var` keyword:

The `var` keyword was the original way to declare variables in JavaScript. However, it has some limitations and scope-related issues. Variables declared with `var` have function scope or global scope, depending on where they are declared.

Example:
```javascript
function example() {
  var message = 'Hello';
  console.log(message);
}

example(); // Output: Hello
console.log(message); // Throws an error: message is not defined
```

### `let` keyword:

The `let` keyword was introduced in ECMAScript 6 (ES6) as a replacement for `var`. Variables declared with `let` have block scope, which means they are only accessible within the block they are declared in.

Example:
```javascript
function example() {
  let message = 'Hello';
  if (true) {
    let message = 'Hi';
    console.log(message);
  }
  console.log(message);
}

example(); // Output: Hi Hello
```
### `const` keyword: 

The `const` keyword is used to declare constants in JavaScript. Constants are read-only and cannot be reassigned after they are defined. They also have block scope like variables declared with `let`.

Example:
```javascript
function example() {
  const PI = 3.14;
  console.log(PI);
}

example(); // Output: 3.14
console.log(PI); // Throws an error: PI is not defined
```

### Difference between `var`, `let`, and `const`

The main differences between `var`, `let`, and `const` are:
- `var` has function scope or global scope, while `let` and `const` have block scope.
- Variables declared with `var` can be redeclared and reassigned, while variables declared with `let` can be reassigned but not redeclared, and variables declared with `const` cannot be reassigned or redeclared.
- `let` and `const` provide better scoping and avoid common issues associated with `var`, such as variable hoisting.

#### Interview Questions:

1. What is the scope of variables declared with the `var` keyword?
2. What is the difference between variables declared with `var` and `let`?
3. What happens if you declare a variable with `var` inside a block statement?
4. What is the scope of variables declared with the `let` keyword?
5. What is the difference between variables declared with `let` and `const`?
6. Can you redeclare a variable with `let` in the same scope?
7. What is the purpose of the `const` keyword in JavaScript?
8. Can you reassign a value to a constant declared with `const`?
9. What is the difference between variables declared with `let` and `const`?
10. What is the difference between `let` and `const`?
11. When should you use `var` instead of `let` or `const`?
12. Why is it recommended to use `let` or `const` instead of `var`?


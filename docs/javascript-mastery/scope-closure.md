---
sidebar_position: 10
---

# Scope and Closures

Scope and closures are fundamental concepts in JavaScript that help define how variables and functions are accessed and used within a program. Understanding scope and closures is crucial for writing efficient and effective JavaScript code.

## 1. Understanding Scope

- In JavaScript, scope determines the accessibility of variables and functions within a program.
- There are two types of scope in JavaScript: global scope and local scope.
- Variables declared outside of any function or code block have global scope and can be accessed from anywhere in the code.
- Variables declared inside a function or code block have local scope and can only be accessed within that function or block.

  **_Example:_**

  ```js title="index.js"
  // Global scope variable
  var globalVar = "I am global!";

  function exampleFunction() {
    // Local scope variable
    var localVar = "I am local!";
    console.log(globalVar); // Accessing globalVar from local scope
  }

  console.log(globalVar); // Accessing globalVar from global scope
  console.log(localVar); // Error! localVar is not defined in this scope
  ```

## 2. Variable Hoisting

- JavaScript has a concept called "hoisting" where variable declarations are moved to the top of their scope during the compilation phase, before the code is executed.
- However, only the declarations are hoisted, not the initializations.
- It's important to understand hoisting to avoid unexpected behavior in your code.

  **_Example:_**

  ```js title="index.js"
  console.log(myVar); // Undefined, but no error
  var myVar = "Hello!"; // Variable declaration is hoisted
  ```

## 3. Understanding Closures

- Closures are functions that "remember" the environment in which they were created, including the variables and functions that were accessible at that time.
- Closures can be used to create private variables and functions in JavaScript.

  **_Example:_**

  ```js title="index.js"
  function outerFunction() {
    var outerVar = "I am outer!"; // Outer variable

    function innerFunction() {
      var innerVar = "I am inner!"; // Inner variable
      console.log(outerVar); // Accessing outerVar from inner scope
    }

    return innerFunction; // Returning innerFunction as a closure
  }

  var innerFunc = outerFunction(); // innerFunc now holds a closure of innerFunction
  innerFunc(); // Accessing outerVar from inner scope via closure
  ```

  In this example, the inner function `innerFunction()` has access to the outer variable `outerVar` even after the outer function `outerFunction()` has completed execution. This is possible because of closures.

## 4. Lexical Scope

- Lexical scope refers to the scope of a function that is determined by its position in the source code during the declaration phase.
- In JavaScript, functions are created with lexical scope, which means they can access variables from their parent or outer scopes, even after the parent scope has completed execution.

  **_Example:_**

  ```js title="index.js"
  function outerFunction() {
    var outerVar = "I am outer!"; // Outer variable

    function innerFunction() {
      console.log(outerVar); // Accessing outerVar from inner scope
    }

    innerFunction();
  }

  outerFunction(); // Logs "I am outer!" from inner scope
  ```

  In this example, the inner function `innerFunction()` has access to the outer variable outerVar because it is defined within the lexical scope of `outerFunction()`.

Immediately Invoked Function Expressions (IIFE)
An IIFE is a function that is immediately executed after its creation.
IIFEs are commonly used to create a private scope for variables and functions, preventing them from polluting the global scope.

```js title.js
(function () {
  var privateVar = "I am private!"; // Private variable
  console.log(privateVar); // Accessing privateVar within the IIFE
})();

console.log(privateVar); // Error! privateVar is not defined in this scope
```

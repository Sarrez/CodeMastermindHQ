---
sidebar_position: 18
tags: [CodeMasterMindHQ, Hoisting in JavaScript, Hoisting]
---

# Hoisting in JavaScript

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows you to use variables and functions before they are declared in your code.

## Variable Hoisting
In JavaScript, variable declarations using the `var` keyword are hoisted to the top of their scope. However, only the declarations are hoisted, not the initializations.

```javascript
console.log(name);  // Output: undefined
var name = 'John';
```

The code above is actually interpreted by the JavaScript engine as:

```javascript
var name;  // Declaration is hoisted to the top
console.log(name);  // Output: undefined
name = 'John';  // Initialization remains in place
```

## Function Hoisting
Function declarations are also hoisted to the top of their scope. This means you can call a function before it is declared in your code.

```javascript
sayHello();  // Output: Hello
function sayHello() {
  console.log('Hello');
}
```

The code above is interpreted as:

```javascript
function sayHello() {  // Function declaration is hoisted to the top
  console.log('Hello');
}
sayHello();  // Output: Hello
```

## Hoisting with let and const
Unlike `let` and `const` variables are not hoisted to the top of their block scope. They are hoisted, but in a **"temporal dead zone"** where accessing them before the actual declaration will result in a ReferenceError.

```javascript
console.log(name);  // ReferenceError: Cannot access 'name' before initialization
let name = 'John';
```

#### Hoisting Interview Questions

1. **What is hoisting in JavaScript?**
   Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.

2. **What types of declarations are hoisted in JavaScript?**
   In JavaScript, variable and function declarations are hoisted. Variable declarations using `var` are hoisted to the top of their scope, and function declarations are hoisted as well.

3. **What is the difference between variable hoisting and function hoisting?**
   Variable hoisting moves only the declaration of the variable to the top of the scope, while function hoisting moves both the function declaration and the function body to the top of the scope.

4. **Are variables initialized during hoisting?**
   No, only the declarations of variables are hoisted, not their initializations. If you try to access a variable before it is initialized, it will have the value `undefined`.

5. **What is the behavior of hoisting with `let` and `const` variables?**
   `let` and `const` variables are hoisted to the top of their block scope but remain in the "temporal dead zone" until their actual declaration. Accessing them before the declaration will result in a ReferenceError.

6. **What are some best practices to avoid issues related to hoisting?**
   It is recommended to declare variables at the beginning of their scope to avoid confusion and potential issues caused by hoisting. Also, use `let` and `const` instead of `var` to benefit from block scope and avoid hoisting-related problems.

These are some commonly asked interview questions related to hoisting in JavaScript. 
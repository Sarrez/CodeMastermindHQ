---
sidebar_position: 17
tags: [CodeMasterMindHQ, Scope in JavaScript, Scope]
---

# Scope in JavaScript

## Definition
Scope in JavaScript refers to the visibility and accessibility of variables, functions, and objects in a particular part of the code during runtime. It determines the lifetime and accessibility of these entities, ensuring that they are used correctly and do not conflict with each other.

## Types of Scope

1. **Global Scope**: Variables declared outside of any function or block have global scope. They are accessible from anywhere in the code.
   
   ```javascript
   // Global Scope
   let globalVariable = 'I am a global variable';

   function globalFunction() {
     console.log(globalVariable); // Output: I am a global variable
   }

   console.log(globalVariable); // Output: I am a global variable
   ```

2. **Function Scope**: Variables declared inside a function have function scope. They are only accessible within the function and its nested functions.

   ```javascript
   function outerFunction() {
     let outerVariable = 'I am an outer variable';

     function innerFunction() {
       let innerVariable = 'I am an inner variable';
       console.log(innerVariable); // Output: I am an inner variable
       console.log(outerVariable); // Output: I am an outer variable
     }

     innerFunction();
     console.log(outerVariable); // Output: I am an outer variable
   }

   outerFunction();
   ```

3. **Block Scope**: Variables declared with `let` or `const` inside a block (`{}`) have block scope. They are only accessible within the block where they are declared.
   
   ```javascript
   function blockScopeExample() {
     if (true) {
       let blockVariable = 'I am a block variable';
       console.log(blockVariable); // Output: I am a block variable
     }

     console.log(blockVariable); // Error: blockVariable is not defined
   }

   blockScopeExample();
   ```

## Variable Hoisting
In JavaScript, variable declarations are hoisted to the top of their scope. However, only the declaration is hoisted, not the initialization.

```javascript
function hoistingExample() {
  console.log(myVariable); // Output: undefined
  var myVariable = 'I am hoisted';
  console.log(myVariable); // Output: I am hoisted
}

hoistingExample();
```

## Interview Questions

1. **What is scope in JavaScript?**
   
   Scope refers to the visibility and accessibility of variables, functions, and objects in a particular part of the code during runtime.

2. **What are the types of scope in JavaScript?**
   
   - Global Scope
   - Function Scope
   - Block Scope

3. **What is hoisting in JavaScript?**
   
   Hoisting is a JavaScript behavior where variable declarations are moved to the top of their scope during the compilation phase.

4. **What is the difference between `var`, `let`, and `const` in terms of scope?**
   
   - Variables declared with `var` have function scope and are hoisted to the top of their scope.
   - Variables declared with `let` and `const` have block scope and are not hoisted. `let` variables can be reassigned, while `const` variables are read-only (immutable).

5. **Can you access a variable defined in a nested function from its parent function?**
   
   Yes, JavaScript follows lexical scoping, which means a nested function has access to variables defined in its parent function.

6. **What happens if you declare a variable with the same name in both the global scope and a function scope?**
   
   The variable in the function scope will take precedence over the global variable within the function.

These are some commonly asked interview questions related to the topic of scope in JavaScript. 
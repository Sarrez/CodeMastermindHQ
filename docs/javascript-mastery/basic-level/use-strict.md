---
sidebar_position: 19
tags: [Use Strict in JavaScript, Use Strict]
---

# Use Strict in JavaScript

`"use strict"` is a directive introduced in ECMAScript 5 (ES5) that enables strict mode in JavaScript. When you use strict mode, the JavaScript interpreter enforces stricter parsing and error handling, promoting safer and more reliable code.

To enable strict mode in your JavaScript code, add the following statement at the beginning of your script or function:

```javascript
"use strict";
```

Enabling strict mode affects the entire script or function it is applied to.

## Benefits of Using Strict Mode
Strict mode helps in several ways:

1. **Catching silent errors**: Strict mode highlights common coding mistakes that would otherwise fail silently, making it easier to identify and fix issues.

2. **Preventing global scope pollution**: In strict mode, variables and functions need to be explicitly declared. This prevents accidental creation of global variables and helps keep your code modular and encapsulated.

3. **Disabling certain JavaScript features**: Strict mode disables or modifies certain features that are considered problematic or prone to errors. This promotes better coding practices and avoids potential pitfalls.

## Types of Strict Mode

Strict mode can be enabled at different levels:

1. **Global Strict Mode**: Placing `"use strict";` at the beginning of your JavaScript file or script tag enables strict mode for the entire file.

   ```javascript
   "use strict";
   
   // Code in strict mode
   ```

2. **Function Strict Mode**: Placing `"use strict";` at the beginning of a function enables strict mode for that specific function.

   ```javascript
   function myFunction() {
     "use strict";
   
     // Code in strict mode
   }
   ```

3. **Module Strict Mode**: In ES6 modules, strict mode is automatically enabled by default. Each module has its own scope, and strict mode applies to that specific module.

   ```javascript
   // Module 1
   // Strict mode is automatically enabled
   
   export function myFunction() {
     // Code in strict mode
   }
   
   // Module 2
   // Strict mode is automatically enabled
   
   import { myFunction } from "./module1.js";
   
   // Code in strict mode
   ```

## Differences in Strict Mode Behavior

Strict mode introduces several changes to the default behavior of JavaScript. Here are some key differences:

1. **Variable Declaration**: Variables must be declared with `var`, `let`, or `const`. Assigning a value to an undeclared variable results in a reference error.

   ```javascript
   "use strict";
   
   x = 10; // ReferenceError: x is not defined
   
   var y = 20; // Valid declaration
   ```

2. **No Octal Literal**: Octal literals (starting with `0`) are not allowed in strict mode. They are treated as syntax errors.

   ```javascript
   "use strict";
   
   var octal = 0123; // SyntaxError: Octal literals are not allowed in strict mode
   ```

3. **No Duplicate Parameters**: Functions with duplicate parameter names are not allowed in strict mode. Non-strict mode allows duplicates, with the last parameter overwriting the previous ones.

   ```javascript
   "use strict";
   
   function myFunction(x, x) { // SyntaxError: Duplicate parameter name not allowed in this context
     return x;
   }
   ```

4. **No This Binding in Global Context**: In strict mode, the value of `this` is `undefined` in the global context, rather than referring to the global object (`window` in browsers).

   ```javascript
   "use strict";
   
   console.log(this); // undefined
   ```

5. **No Assignment to Non-Writable Global Variables**: Assigning a value to a non-writable global variable or a non-writable property throws a type error.

   ```javascript
   "use strict";
   
   undefined = 10; // TypeError: Cannot assign to read-only property 'undefined'
   ```

## Interview Questions on Use Strict

Here are some common interview questions related to "use strict" in JavaScript:

1. **What is strict mode in JavaScript?**
   - Strict mode is a feature in JavaScript that enforces stricter parsing and error handling, making the code more reliable.

2. **How do you enable strict mode in JavaScript?**
   - To enable strict mode, include the statement `"use strict";` at the beginning of your script or function.

3. **What are the benefits of using strict mode?**
   - Strict mode helps catch silent errors, prevents global scope pollution, and disables certain problematic JavaScript features.

4. **What are the types of strict mode in JavaScript?**
   - Strict mode can be enabled globally, per function, or automatically in ES6 modules.

5. **What changes when strict mode is enabled?**
   - Strict mode introduces changes such as requiring variable declaration, disallowing octal literals, preventing duplicate function parameters, and more.

6. **What happens when you assign a value to an undeclared variable in strict mode?**
   - In strict mode, assigning a value to an undeclared variable results in a reference error.

7. **What is the value of `this` in the global context when strict mode is enabled?**
   - In strict mode, the value of `this` in the global context is `undefined`.

These questions cover the basics of "use strict" in JavaScript and should help you understand and explain the concept in an interview setting.
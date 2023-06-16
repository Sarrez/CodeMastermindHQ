---
sidebar_position: 16
tags: [CodeMasterMindHQ, Errors in JavaScript, Errors]
---

# Errors in JavaScript

Errors are a common part of software development, including JavaScript. When an error occurs in JavaScript, it interrupts the normal execution of the program and can prevent the expected behavior of the code. Errors can occur due to syntax mistakes, logical errors, or runtime issues.

JavaScript provides various types of built-in errors that can help identify and handle different types of issues that may occur during code execution.

## Types of Errors in JavaScript

1. **SyntaxError**: Occurs when there is a mistake in the syntax of the code, preventing the code from being parsed and executed correctly.

   ```javascript
   // Example SyntaxError
   if (x === 5 {
     console.log('x is 5');
   }
   // SyntaxError: missing closing parenthesis after condition
   ```

2. **ReferenceError**: Occurs when trying to use a variable or function that is not defined or not accessible within the current scope.

   ```javascript
   // Example ReferenceError
   console.log(x);
   // ReferenceError: x is not defined
   ```

3. **TypeError**: Occurs when an operation is performed on a value of an unexpected type or when accessing properties or methods of an object that does not exist.

   ```javascript
   // Example TypeError
   let x = null;
   console.log(x.toUpperCase());
   // TypeError: Cannot read property 'toUpperCase' of null
   ```

4. **RangeError**: Occurs when a numeric value is outside the range of allowed values, such as using an invalid index in an array or providing an invalid argument to a function.

   ```javascript
   // Example RangeError
   let arr = [1, 2, 3];
   console.log(arr[10]);
   // RangeError: Invalid array length
   ```

5. **EvalError**: Rarely encountered in modern JavaScript, this error occurred when using the global `eval()` function incorrectly.

   ```javascript
   // Example EvalError
   eval('alert("Hello, World!");');
   // EvalError: eval() is not supported in this context
   ```

6. **URIError**: Occurs when working with invalid or malformed URIs using the `encodeURI()`, `decodeURI()`, `encodeURIComponent()`, and `decodeURIComponent()` functions.

   ```javascript
   // Example URIError
   decodeURI('%');
   // URIError: URI malformed
   ```

7. **Custom Errors**: You can also create your own custom errors by extending the `Error` class to handle specific situations in your code.

   ```javascript
   // Example Custom Error
   class MyError extends Error {
     constructor(message) {
       super(message);
       this.name = 'MyError';
     }
   }

   throw new MyError('Something went wrong');
   // MyError: Something went wrong
   ```

## Common Error Scenarios

1. **Handling Errors with try-catch**

   ```javascript
   try {
     // Code that may throw an error
   } catch (error) {
     // Handle the error
   } finally {
     // Code to be executed regardless of whether an error occurred or not
   }
   ```

2. **Throwing Errors**

   ```javascript
   throw new Error('Something went wrong');
   ```

3. **Handling Asynchronous Errors**

   ```javascript
   async function fetchData() {
     try {
       const response = await fetch('https://api.example.com/data');
       if (!response.ok) {
         throw new Error('Error: ' + response.status);
       }
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.log(error);
     }
   }
   ```

## Interview Questions

1. **What is the difference between SyntaxError and ReferenceError?**
   - SyntaxError occurs when there is a mistake in the syntax of the code, preventing it from being parsed correctly.
   - ReferenceError occurs when trying to use a variable or function that is not defined or not accessible within the current scope.

2. **How can you handle errors in JavaScript?**
   - You can handle errors using try-catch blocks, where the code that may throw an error is wrapped in the try block and any potential error is caught and handled in the catch block.

3. **How can you create custom errors in JavaScript?**
   - You can create custom errors by extending the `Error` class or any of its subclasses to create your own error type.

4. **What is the purpose of the finally block in a try-catch statement?**
   - The finally block is used to specify code that will be executed regardless of whether an error occurred or not.

5. **How can you handle errors in asynchronous code?**
   - Errors in asynchronous code can be handled using try-catch blocks or by using the `.catch()` method on Promises.

These are some of the important concepts and codes related to Errors in JavaScript. 
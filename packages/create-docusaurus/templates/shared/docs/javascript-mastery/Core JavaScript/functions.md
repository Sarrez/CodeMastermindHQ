---
sidebar_position: 5
---

# Functions in JavaScript:
- A function is a block of reusable code that performs a specific task when called or invoked.
- Functions allow you to organize code into logical and reusable units, making your code modular and easier to maintain.

### Defining Functions:
- Functions can be defined using the `function` keyword followed by a name, a list of parameters (optional), and the function body enclosed in curly braces.

  ```javascript title="script.js"
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Function invocation
  greet("Ajay");      // Output: Hello, Ajay!
  ```

- Functions can also be assigned to variables or stored in data structures like objects or arrays. These are known as function expressions.

  ```javascript title="script.js"
  // Function expression
  let greet = function(name) {
    console.log("Hello, " + name + "!");
  };
  
  // Function invocation
  greet("Ajay");      // Output: Hello, Ajay!
  ```

- **ES6** introduced **arrow functions** as a shorter syntax for defining functions.

  ```javascript title="script.js"
  let greet = (name) => {
    console.log("Hello, " + name + "!");
  };
  
  // Function invocation
  greet("Ajay");      // Output: Hello, Ajay!
  ```

### Function Parameters and Return Values:
- Functions can accept parameters, which are variables that hold values passed into the function when it is called.
  
  ```javascript title="script.js"
  function add(a, b) {
    return a + b;
  }
  
  let result = add(5, 3);
  console.log(result);    // Output: 8
  ```

- Functions can also have a return statement to provide a value back to the code that called the function. If no return statement is specified, the function returns `undefined` by default.

  ```javascript title="script.js"
  function multiply(a, b) {
    return a * b;
  }
  
  let result = multiply(4, 5);
  console.log(result);    // Output: 20
  ```

### Function Scope and Closure:
- JavaScript has function scope, meaning that variables declared within a function are only accessible within that function (local scope).

  ```javascript
  function sayHello() {
    let message = "Hello!";
    console.log(message);     // Output: Hello!
  }
  
  sayHello();
  console.log(message);       // Error: message is not defined
  ```

- Functions can also access variables from their outer (enclosing) scope, creating a closure.

  ```javascript title="script.js"
  function outerFunction() {
    let outerVariable = "I'm outside!";
  
    function innerFunction() {
      console.log(outerVariable);    // Output: I'm outside!
    }
  
    innerFunction();
  }
  
  outerFunction();
  ```

- Closures allow functions to retain access to variables from their parent scope, even after the parent function has finished executing.

### Higher-Order Functions:
- In JavaScript, functions can be assigned to variables, passed as arguments to other functions, or returned from other functions. Such functions are called higher-order functions.

  ```javascript title="script.js"
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  function sayHelloWithGreeting(greeting, name) {
    greeting(name);
  }
  
  sayHelloWithGreeting(greet, "Ajay");   // Output: Hello, Ajay!
  ```

- Higher-order functions enable powerful functional programming concepts, such as function composition and the ability to create reusable utility functions.

### Recursion:
- Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller subproblems.
- Recursion is commonly used for tasks like traversing tree structures or implementing mathematical algorithms.

  ```javascript
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5
  
  ));    // Output: 120
  ```

- When using recursion, it's important to define a base case (the condition that stops the recursive calls) to prevent infinite recursion.

### Conclusion:
- Functions are an essential concept in JavaScript, allowing you to write reusable code and organize logic into modular units.
- They can accept parameters and return values, making them versatile for various tasks.
- Understanding function scope and closures helps in managing variable access and creating reusable code.
- Higher-order functions and recursion expand the capabilities and flexibility of functions in JavaScript.


---
sidebar_position: 2
---

# Variables and Data Types

In JavaScript, variables are used to store and manipulate data. A variable is a named container that holds a value, which can be of different data types. Understanding variables and data types is fundamental in JavaScript programming.

### 1. Variable Declaration:
- Variables in JavaScript are declared using the `let`, `const`, or `var` keyword.
- Example:
  ```javascript title="script.js"
  let age;
  const PI = 3.14;
  var name;
  ```

### 2. Data Types:
- JavaScript has several built-in data types:
  - **Primitive Data Types**:
    - **Number**: Represents numeric values. Example: `let count = 5;`
    - **String**: Represents a sequence of characters. Example: `let message = "Hello";`
    - **Boolean**: Represents either `true` or `false`. Example: `let isTrue = true;`
    - **Undefined**: Represents a variable that has been declared but not assigned a value. Example: `let variableName;`
    - **Null**: Represents the absence of any object value. Example: `let value = null;`
    - **Symbol**: Represents unique and immutable values. Example: `let symbol = Symbol();`

  - **Composite Data Types**:
    - **Object**: Represents a collection of properties and methods. Example: `let person = { name: "Ajay", age: 25 };`
    - **Array**: Represents an ordered list of values. Example: `let numbers = [1, 2, 3];`

### 3. Type Coercion:
- JavaScript has dynamic typing, which means variables can hold values of different types.
- JavaScript also performs type coercion, where it automatically converts values from one type to another in certain situations.
- Example:
  ```javascript title="script.js"
  let result = 5 + "5";  // Result will be the string "55" (number coerced to a string)
  ```

### 4. Type Checking:
- JavaScript provides the `typeof` operator to check the data type of a variable.
- Example:
  ```javascript title="script.js"
  let age = 25;
  console.log(typeof age);    // Output: "number"
  ```

### 5. Variable Scope:
- Variables have a scope, which determines their accessibility and visibility within different parts of the code.
- JavaScript has function scope (prior to ES6) and block scope (introduced in ES6 with `let` and `const`).
- Example:
  ```javascript title="script.js"
  function myFunction() {
    let message = "Hello";
    console.log(message);
  }
  myFunction();    // Output: "Hello"
  console.log(message);    // Error: message is not defined (not accessible outside the function)
  ```

### 6. Variable Naming Conventions:
- It is good practice to use meaningful and descriptive names for variables to improve code readability.
- Variable names in JavaScript are case-sensitive and can start with a letter, underscore, or dollar sign.
- Example:
  ```javascript title="script.js"
  let firstName = "Ajay";
  const MAX_VALUE = 100;
  ```

### 7. Constants:
- Constants are variables whose values cannot be changed once assigned.
- They are declared using the `const` keyword.
- Example:
  ```javascript title="script.js"
  const PI = 3.14;
  PI = 3.14159;  // Error: Assignment to constant variable
  ```

### For Example:

```js title="script.js"
// Number
let age = 25;
console.log(age);

// String
let message = "Hello, World!";
console.log(message);

// Boolean
let isTrue = true;
console.log(isTrue);

// Undefined
let variableName;
console.log(variableName);

// Null
let value = null;
console.log(value);

// Symbol
let symbol = Symbol();
console.log(symbol);

// Object
let person = {
  name: "Ajay",
  age: 25,
  isStudent: true,
};
console.log(person);

// Array
let numbers = [1, 2, 3];
console.log(numbers);

// Type Coercion
let result = 5 + "5";
console.log(result);

// Type Checking
console.log(typeof age);         // Output: "number"
console.log(typeof message);     // Output: "string"
console.log(typeof isTrue);      // Output: "boolean"
console.log(typeof variableName); // Output: "undefined"
console.log(typeof value);       // Output: "object"
console.log(typeof symbol);      // Output: "symbol"
console.log(typeof person);      // Output: "object"
console.log(typeof numbers);     // Output: "object"

// Constants
const PI = 3.14;
console.log(PI);

// PI = 3.14159;  // Error: Assignment to constant variable
```

Understanding variables and data types is crucial for working with JavaScript effectively. It enables proper data manipulation and ensures code correctness.

---
sidebar_position: 2
---

# Variables, Data types in Js

### Introduction of JavaScript Variables:
- Introduce the importance of understanding variables in JavaScript.
- Highlight how variables store and manipulate data, forming the foundation of programming.

**1. Declaring Variables:**
- Explain the process of declaring variables using `var`, `let`, and `const`.
- Elaborate on the differences in behavior and scope between these keywords.
- Provide code examples to demonstrate their usage.

  ```javascript title="script.js"
  // Using var
  var name = "John";
  var age = 25;
  
  // Using let
  let city = "London";
  let isStudent = true;
  
  // Using const
  const PI = 3.14;
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday"];
  ```

**2. Variable Naming Rules:**
- Describe the essential rules for naming variables in JavaScript.
- Emphasize the use of meaningful and descriptive names.
- Show examples of proper variable naming conventions, such as camelCase.

  ```javascript title="script.js"
  // Variable naming examples
  let firstName = "John";
  let numberOfStudents = 20;
  let hasCompletedTask = false;
  ```

**3. Variable Types:**
- Discuss the various data types in JavaScript:
  - Strings: Explain how to store and manipulate text data.
  - Numbers: Discuss numeric data types and arithmetic operations.
  - Booleans: Introduce logical values true and false.
  - Objects: Explain how to create and work with objects.
  - Arrays: Discuss the concept of ordered lists and array manipulation.
  - null and undefined: Explain their special roles and distinctions.

    ```javascript title="script.js"
    // Variable types
    let name = "John";              // String
    let age = 25;                   // Number
    let isStudent = true;           // Boolean
    let person = {                  // Object
      name: "John",
      age: 25
    };
    let daysOfWeek = ["Mon", "Tue", "Wed"]; // Array
    let nullValue = null;           // Null
    let undefinedValue;             // Undefined
    ```

**4. Assigning Values to Variables:**
- Guide readers on how to assign values to variables in JavaScript.
- Provide examples illustrating the assignment process.
- Highlight the difference between assigning values and referencing variables.

  ```javascript title="script.js"
  // Assigning values to variables
  let firstName = "John";
  let lastName = "Doe";
  let fullName = firstName + " " + lastName;
  
  let x = 5;
  let y = 10;
  let sum = x + y;
  ```

**5. Variable Scope:**
- Define the concept of variable scope in JavaScript.
- Discuss global scope, function scope, and block scope.
- Present code examples to demonstrate the visibility of variables in different scopes.

  ```javascript title="script.js"
  // Global scope
  let globalVariable = "I am a global variable";
  
  function exampleFunction() {
    // Function scope
    let functionVariable = "I am a function variable";
    console.log(globalVariable);    // Accessible
    console.log(functionVariable);  // Accessible
  }
  
  exampleFunction();
  console.log(globalVariable);      // Accessible
  console.log(functionVariable);    // Not accessible (ReferenceError)
  ```

**6. Variable Hoisting:**
- Introduce variable hoisting in JavaScript.
- Explain how variables are hoisted to the top of their scope during execution.
- Provide examples to clarify the concept and its implications.

  ```javascript title="script.js"
  console.log(name);     // Output: undefined
  var name = "John";
  
  console.log(age);      // Output: ReferenceError: age is not defined
  let age = 25;
  ```

**7. Variable Reassignment:**
- Illustrate the process of reassigning variables with new values.
- Discuss how reassignment affects the previous value and memory allocation.
- Present code examples showcasing variable reassignment in different scenarios.

  ```javascript title="script.js"  
  let count = 5;
  console.log(count);    // Output: 5
  
  count = 10;
  console.log(count);    // Output: 10
  
  let message = "Hello";
  console.log(message);  // Output: Hello
  
  message = "Goodbye";
  console.log(message);  // Output: Goodbye
  ```

**8. Constants:**
- Introduce the concept of constants and their immutability.
- Explain when to use `const` instead of `let` or `var`.
- Emphasize the benefits of using constants for data that should not be changed.

  ```javascript title="script.js"
  const PI = 3.14;
  console.log(PI);       // Output: 3.14
  
  PI = 3.14159;          // Error: Assignment to constant variable
  
  const daysOfWeek = ["Mon", "Tue", "Wed"];
  console.log(daysOfWeek);   // Output: ["Mon", "Tue", "Wed"]
  
  daysOfWeek.push("Thu");    // Modifying the array is allowed
  console.log(daysOfWeek);   // Output: ["Mon", "Tue", "Wed", "Thu"]
  ```

**9. Variable Interpolation:**
- Explain template literals and their role in variable interpolation.
- Demonstrate how to concatenate variables within strings using template literals ( ` ).
- Show examples highlighting the advantages of template literals over traditional concatenation.

  ```javascript title="script.js"
  let name = "John";
  let greeting = `Hello, ${name}!`;
  
  console.log(greeting);   // Output: Hello, John!
  
  let x = 5;
  let y = 10;
  let result = `The sum of ${x} and ${y} is ${x + y}.`;
  
  console.log(result);     // Output: The sum of 5 and 10 is 15.
  ```

**10. Variable Scope Best Practices:**
- Offer best practices for variable declaration, naming, and usage.
- Encourage the use of descriptive variable names for improved code readability.
- Recommend scoping variables as narrowly as possible to prevent unintended side effects.

<!-- ========================================= -->

### Introduction of JavaScript Data Types:
- Explain the concept of data types in JavaScript.
- Highlight the importance of understanding data types for effective programming.

**JavaScript has 8 Datatypes**

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

**The Object Datatype**

1. An object
2. An array

**1. String:**
- Introduce the string data type in JavaScript used for storing and manipulating text.
- Explain the importance of strings in various programming tasks.

```javascript title="script.js"
let message = "Hello, World!";
console.log(message);              // Output: Hello, World!

let name = "John";
let greeting = "Welcome, " + name + "!";
console.log(greeting);             // Output: Welcome, John!
```

**2. Number:**
- Explain the number data type used for representing numeric values.
- Discuss arithmetic operations and common number-related functions.
- Discuss the different ways to declare and assign number variables in JavaScript.

  ```javascript title="script.js"
  let age = 25;
  let price = 9.99;
  
  console.log(age);                 // Output: 25
  console.log(price);               // Output: 9.99
  
  let sum = 10 + 5;
  let product = price * 2;
  
  console.log(sum);                 // Output: 15
  console.log(product);             // Output: 19.98
  
  let absoluteValue = Math.abs(-5);
  console.log(absoluteValue);       // Output: 5
  ```

**3. Bigint**
- Introduce the BigInt data type in JavaScript used for representing arbitrarily large integers.
- Explain the need for BigInt when dealing with numbers beyond the range of the Number data type.
  ```js title="script.js"
  let largeNumber = 123456789012345678901234567890n;
  console.log(largeNumber);           // Output: 123456789012345678901234567890n
  
  let bigSum = largeNumber + 1n;
  console.log(bigSum);                // Output: 123456789012345678901234567891n
  
  let bigProduct = largeNumber * 2n;
  console.log(bigProduct);            // Output: 246913578024691357802469135780n
  ```
- Discuss the limitations and considerations when working with BigInt.
- Explain that BigInt values are created by appending `n` to the end of an integer literal or by using the `BigInt()` function.
  ```js title="script.js"
  let bigIntLiteral = 12345n;
  console.log(bigIntLiteral);         // Output: 12345n
  
  let convertedBigInt = BigInt("67890");
  console.log(convertedBigInt);       // Output: 67890n
  ```

**4. Boolean:**
- Introduce the boolean data type representing true or false values.
- Discuss logical operations and comparisons that return boolean values.

  ```javascript title="script.js"
  let isTrue = true;
  let isFalse = false;
  
  console.log(isTrue);              // Output: true
  console.log(isFalse);             // Output: false
  
  let greaterThan = 10 > 5;
  let equalCheck = 'a' === 'b';
  
  console.log(greaterThan);         // Output: true
  console.log(equalCheck);          // Output: false
  
  let logicalAnd = true && false;
  let logicalOr = true || false;
  
  console.log(logicalAnd);          // Output: false
  console.log(logicalOr);           // Output: true
  ```

**5. Object:**
- Explain the object data type used for storing and organizing complex data structures.
- Show examples of object creation and accessing object properties.

  ```javascript title="script.js"
  let person = {
    name: 'John',
    age: 25,
    isStudent: true
  };
  
  console.log(person.name);         // Output: John
  console.log(person.age);          // Output: 25
  console.log(person.isStudent);    // Output: true
  ```

**6. Array:**
- Discuss the array data type used for storing ordered lists of values.
- Explain array creation, accessing elements, and common array operations.

  ```javascript title="script.js"
  let fruits = ['apple', 'banana', 'orange'];
  console.log(fruits[0]);           // Output: apple
  console.log(fruits.length);       // Output: 3
  
  fruits.push('grape');
  console.log(fruits);              // Output: ['apple', 'banana', 'orange', 'grape']
  
  let reversed = fruits.reverse();
  console.log(reversed);            // Output: ['grape', 'orange', 'banana', 'apple']
  ```

**7. null and undefined:**
- Discuss the special values null and undefined and their distinctions.
- Explain common scenarios where these values are used.

  ```javascript title="script.js"
  let value1 = null;
  let value2;
  
  console.log(value1);              // Output: null
  console.log(value2);              // Output: undefined
  
  let product = {
    name: 'Phone',
    price: null
  };
  
  console.log(product.price);       // Output: null
  ```

**8. Symbol**
- Introduce the Symbol data type in JavaScript used for creating unique and immutable values.
- Explain that symbols are often used as property keys in objects to avoid naming conflicts.

  ```javascript title="script.js"
  let symbol1 = Symbol();
  let symbol2 = Symbol("description");
  
  console.log(symbol1);               // Output: Symbol()
  console.log(symbol2);               // Output: Symbol(description)
  ```

- Discuss the uniqueness of each symbol, even if they have the same description.

  ```javascript title="script.js"
  let symbol3 = Symbol("description");
  console.log(symbol2 === symbol3);    // Output: false
  ```

- Show examples of using symbols as property keys in objects.

  ```javascript title="script.js"
  let obj = {
    [symbol1]: "value 1",
    [symbol2]: "value 2"
  };
  
  console.log(obj[symbol1]);           // Output: value 1
  console.log(obj[symbol2]);           // Output: value 2
  ```

- Explain that symbols are not enumerable in for...in loops or by using Object.keys().

  ```javascript title="script.js"
  for (let key in obj) {
    console.log(key);                  // No output (symbols are not enumerable)
  }
  
  console.log(Object.keys(obj));       // Output: []
  ```

- Discuss the built-in symbols provided by JavaScript, such as `Symbol.iterator` for defining iterable objects or `Symbol.match` for customizing string matching behavior.

  ```javascript title="script.js"
  let arr = [1, 2, 3];
  let iterator = arr[Symbol.iterator]();
  
  console.log(iterator.next());        // Output: { value: 1, done: false }
  console.log(iterator.next());        // Output: { value: 2, done: false }
  console.log(iterator.next());        // Output: { value: 3, done: false }
  console.log(iterator.next());        // Output: { value: undefined, done: true }
  ```

- Explain that symbols have no literal representation and cannot be coerced to strings implicitly.
- Show how to explicitly convert symbols to strings using the `symbol.description` property.

  ```javascript title="script.js"
  console.log(String(symbol2));        // Output: TypeError: Cannot convert a Symbol value to a string
  console.log(symbol2.toString());     // Output: TypeError: Cannot convert a Symbol value to a string
  
  console.log(symbol2.description);    // Output: description
  ```

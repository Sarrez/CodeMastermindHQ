---
sidebar_position: 14
tags: [CodeMasterMindHQ, Type Conversion in JavaScript, type conversion]
---

# Type Conversion in JavaScript

Type conversion, also known as type coercion, is the process of converting one data type to another in JavaScript. JavaScript provides several built-in methods and operators to perform type conversions.

## Implicit Type Conversion

Implicit type conversion occurs automatically when JavaScript converts a value from one data type to another without any explicit instruction from the developer.

```javascript
let num = 5;             // number
let str = "10";          // string
let result = num + str;  // implicit type conversion

console.log(result);     // Output: "510" (string)
```

In the example above, the `num` variable is a number, and the `str` variable is a string. When we perform the `+` operator on these values, JavaScript implicitly converts the `num` to a string and concatenates it with the `str`, resulting in the string `"510"`.

JavaScript follows certain rules for implicit type conversion. For example, when combining a string and a number using the `+` operator, JavaScript converts the number to a string and performs concatenation.

## Explicit Type Conversion

Explicit type conversion, also known as type casting or coercion, is when a developer intentionally converts a value from one data type to another using JavaScript's built-in methods or operators.

### String Conversion

To convert a value to a string, you can use the `toString()` method or the `String()` function.

```javascript
let num = 42;                      // number
let str1 = num.toString();         // using toString() method
let str2 = String(num);            // using String() function

console.log(typeof str1, str1);    // Output: string "42"
console.log(typeof str2, str2);    // Output: string "42"
```

In the example above, the `num` variable is a number. By calling the `toString()` method or using the `String()` function, we explicitly convert it to a string.

### Number Conversion

To convert a value to a number, you can use the `parseInt()` or `parseFloat()` functions.

```javascript
let str1 = "42";                   // string
let str2 = "3.14";                 // string
let num1 = parseInt(str1);         // using parseInt() function
let num2 = parseFloat(str2);       // using parseFloat() function

console.log(typeof num1, num1);    // Output: number 42
console.log(typeof num2, num2);    // Output: number 3.14
```

In the example above, the `str1` and `str2` variables are strings. By using the `parseInt()` and `parseFloat()` functions, we explicitly convert them to numbers.

### Boolean Conversion

To convert a value to a boolean, you can use the `Boolean()` function.

```javascript
let num = 42;                      // number
let str = "Hello";                 // string
let bool1 = Boolean(num);          // using Boolean() function
let bool2 = Boolean(str);          // using Boolean() function

console.log(typeof bool1, bool1);  // Output: boolean true
console.log(typeof bool2, bool2);  // Output: boolean true
```

In the example above, the `num` and `str` variables are numbers and strings, respectively. By using the `Boolean()` function, we explicitly convert them to booleans.

## Interview Questions

Here are some commonly asked interview questions related to type conversion in JavaScript:

1. **Q: What is type conversion in JavaScript?**
   
   **A:** Type conversion, also known as type coercion, is the process of converting one data type to another in JavaScript.

2. **Q: What is the difference between implicit and explicit type conversion?**
   
   **A:** Implicit type conversion occurs automatically by JavaScript, while explicit type conversion is performed intentionally by the developer using built-in methods or operators.

3. **Q: How can you convert a value to a string in JavaScript?**
   
   **A:** You can use the `toString()` method or the `String()` function to convert a value to a string.

4. **Q: How can you convert a value to a number in JavaScript?**
   
   **A:** You can use the `parseInt()` or `parseFloat()` functions to convert a value to a number.

5. **Q: How can you convert a value to a boolean in JavaScript?**
   
   **A:** You can use the `Boolean()` function to convert a value to a boolean.

These questions cover the basics of type conversion in JavaScript and should help you prepare for JavaScript interviews.

Remember to practice implementing type conversions in code to solidify your understanding of the concepts.
---
sidebar_position: 2
tags: [CodeMasterMindHQ, Object, arrays, Symbol, Symbol, BigInt, Boolean, Undefined, Data Types, String, Data Types in js, Number]
---

# Data Types

***JavaScript has several built-in data types, including:***

- **String:** Represents a sequence of characters.
- **Number:** Represents numeric values.
- **BigInt:** Represents arbitrary precision integers.
- **Boolean:** Represents true or false.
- **Undefined:** Represents an uninitialized variable.
- **Null:** Represents the absence of any object value.
- **Symbol:** Represents unique identifiers.
- **Object:** Represents a collection of key-value pairs.

### 1. String

A string is a sequence of characters enclosed in single or double quotes. It represents textual data.

```javascript
let name = 'John Doe';
let message = "Hello, world!";
console.log(name); // John Doe
console.log(message); // Hello, world!
```

### 2. Number

Number represents numeric data in JavaScript. It can be an integer or a floating-point number.

```javascript
let count = 10;
let price = 19.99;
```

### 3. BigInt

BigInt is a numeric data type in JavaScript that can represent integers with arbitrary precision.

```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
```

### 4. Boolean

Boolean represents a logical value - `true` or `false`.

```javascript
let isRaining = true;
let isLoggedIn = false;
```


### 5. Undefined

Undefined represents a variable that has been declared but has not been assigned a value.

```javascript
let age;
```

### 6. Null

Null represents the intentional absence of any object value.

```javascript
let data = null;
```

### 7. Symbol
Symbol is a unique and immutable data type that can be used as an identifier for object properties.

```javascript
let name1 = Symbol('Ajay');
let name2 = Symbol('Ajay');
if(name1==name2 || name1===name2){
  console.log("is equal");
}
else{
  console.log("is not equal");
}
```

### 8. Arrays
Arrays are used to store multiple values in a single variable. They can hold values of any data type.

```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
```


### 9. Objects

Objects are used to store key-value pairs. They represent real-world entities with properties and behaviors.

```javascript
let person = {
  name: 'John Doe',
  age: 25,
  address: {
    street: '123

 Main St',
    city: 'New York'
  }
};
```

**Interview Questions:**
1. How do you declare a string variable in JavaScript?
2. How do you concatenate two strings in JavaScript?
3. How do you find the length of a string in JavaScript?
4. How do you declare a number variable in JavaScript?
5. How do you perform mathematical operations in JavaScript?
6. What is the difference between `NaN` and `Infinity` in JavaScript?
7. What is the purpose of the BigInt data type in JavaScript?
8. How do you declare a BigInt variable in JavaScript?
9. Can you perform arithmetic operations on BigInt values?
10. What are the possible values of a boolean variable in JavaScript?
11. How do you negate a boolean value in JavaScript?
12. What is the difference between `==` and `===` operators in JavaScript?
13. What is the value of an uninitialized variable in JavaScript?
14. How do you check if a variable is undefined in JavaScript?
15. What is the difference between `undefined` and `null` in JavaScript?
16. What is the value of a variable assigned with `null` in JavaScript?
17. How do you check if a variable is `null` in JavaScript?
18. What is the difference between `undefined` and `null` in JavaScript?
19. What is a symbol in JavaScript?
20. How do you create a symbol in JavaScript?
21. Can symbols be used as keys in object properties?
22. How do you declare an array in JavaScript?
23. How do you access elements of an array in JavaScript?
24. What array methods are commonly used in JavaScript?
25. How do you create an object in JavaScript?
26. How do you access object properties in JavaScript?
27. What is the difference between dot notation and bracket notation in object property access?


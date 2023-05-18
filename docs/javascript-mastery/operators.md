---
sidebar_position: 3
---

# Operators in JavaScript:

Operators in JavaScript are symbols or keywords that perform operations on operands (values or variables) to produce a result. JavaScript supports various types of operators, including arithmetic, assignment, comparison, logical, bitwise, and more. Understanding operators is essential for manipulating data and controlling program flow in JavaScript.

### 1. Arithmetic Operators:
Arithmetic operators perform mathematical calculations on numerical values. They include addition (+), subtraction (-), multiplication (*), division (/), modulo (%), and exponentiation (**).

```javascript title="script.js"
let x = 5;
let y = 3;

console.log(x + y);     // Output: 8
console.log(x - y);     // Output: 2
console.log(x * y);     // Output: 15
console.log(x / y);     // Output: 1.6666666666666667
console.log(x % y);     // Output: 2
console.log(x ** y);    // Output: 125
```

### 2. Assignment Operators:
Assignment operators are used to assign values to variables. The most common assignment operator is the equals sign (=), but JavaScript also provides compound assignment operators such as +=, -=, *=, /=, %=, etc.

```javascript title="script.js"
let x = 10;
x += 5;    // Equivalent to: x = x + 5;
console.log(x);    // Output: 15

let y = 8;
y %= 3;    // Equivalent to: y = y % 3;
console.log(y);    // Output: 2
```

### 3. Comparison Operators:
Comparison operators compare two values and return a boolean value (true or false) indicating the result of the comparison. They include ==, ===, !=, !==, >, <, >=, and <=.

```javascript title="script.js"
let a = 5;
let b = 3;

console.log(a == b);    // Output: false
console.log(a === b);   // Output: false
console.log(a != b);    // Output: true
console.log(a !== b);   // Output: true
console.log(a > b);     // Output: true
console.log(a < b);     // Output: false
console.log(a >= b);    // Output: true
console.log(a <= b);    // Output: false
```

### 4. Logical Operators:
Logical operators are used to combine or negate boolean values. They include && (logical AND), || (logical OR), and ! (logical NOT).

```javascript title="script.js"
let x = 5;
let y = 3;
let z = 7;

console.log(x > y && x < z);    // Output: true
console.log(x > y || x > z);    // Output: true
console.log(!(x > y));          // Output: false
```

### 5. Bitwise Operators:
Bitwise operators perform operations at the binary level. They include bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise NOT (~), left shift (<<), and right shift (>>).

```javascript title="script.js"
let a = 5;    // Binary: 00000101
let b = 3;    // Binary: 00000011

console.log(a & b);    // Output: 1 (Bitwise AND)
console.log(a | b);    // Output: 7 (Bitwise OR)
console.log(a ^ b);    // Output: 6 (Bitwise XOR)
console.log(~a);       // Output: -6 (Bitwise NOT)
console.log(a << 1);   // Output: 10 (Left shift)
console.log(b >> 1);   // Output: 1 (Right shift)
```

### 6. String Operators:
String operators include the concatenation operator (+) used for joining two or more strings together.

```javascript title="script.js"
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName);    // Output: John Doe
```

### 7. Increment and Decrement Operators:
The increment (++) and decrement (--) operators are used to increase or decrease the value of a variable by one.

```javascript title="script.js"
let x = 5;
x++;    // Equivalent to: x = x + 1;
console.log(x);    // Output: 6

let y = 3;
y--;    // Equivalent to: y = y - 1;
console.log(y);    // Output: 2
```

### 8. Ternary Operator:
The ternary operator (?:) is a concise way to write conditional statements. It evaluates a condition and returns one of two expressions based on the result.

```javascript title="script.js"
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Not Adult";
console.log(isAdult);    // Output: Adult
```

### 9. typeof Operator:
The typeof operator is used to determine the data type of a value or variable.

```javascript title="script.js"
let name = "John";
console.log(typeof name);    // Output: string

let age = 25;
console.log(typeof age);     // Output: number

let isActive = true;
console.log(typeof isActive); // Output: boolean
```

### 10. Conditional Assignment Operator:
The conditional assignment operator (??=) assigns a value to a variable only if the variable is null or undefined.

```javascript title="script.js"
let x = null;
x ??= 5;
console.log(x);    // Output: 5

let y = 10;
y ??= 7;
console.log(y);    // Output: 10 (y is not null or undefined, so no assignment occurs)
```

### 11. Spread Operator:
The spread operator (...) is used to expand elements from an array or object into another array or object.

```javascript title="script.js"
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);    // Output: [1, 2, 3, 4, 5]

let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 };
console.log(obj2);    // Output: { x: 1, y: 2, z: 3 }
```

### 12. Nullish Coalescing Operator:
The nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined.

```javascript title="script.js"
let x = null;
let y = x ?? 5;
console.log(y);    // Output: 5

let z;
let w = z ?? "Default";
console.log(w);    // Output: "Default"
```

These are some of the commonly used operators in JavaScript. Understanding and mastering these operators will allow you to perform various calculations, comparisons, and logical operations efficiently in your JavaScript code. [Demo](https://codepen.io/ajay-dhangar/pen/PoyyVgb)
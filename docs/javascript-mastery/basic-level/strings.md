---
sidebar_position: 5
tags: [CodeMasterMindHQ, JavaScript Mastery, stings in Js]
---

# Strings in JavaScript

In JavaScript, a string is a sequence of characters enclosed in single quotes ('') or double quotes (""). It represents textual data and can contain letters, numbers, symbols, and special characters.

### Creating a String

Strings can be created using string literals or the String constructor.

```javascript
// String literal
let message = "Hello, World!";

// String constructor
let greeting = new String("Welcome");
```

### String Methods in JavaScript

JavaScript provides several built-in methods for manipulating and working with strings. Here are some commonly used string methods:

- `length`: Returns the length of a string.
- `charAt(index)`: Returns the character at the specified index.
- `concat(str1, str2, ...)`: Concatenates two or more strings.
- `toUpperCase()`: Converts a string to uppercase.
- `toLowerCase()`: Converts a string to lowercase.
- `slice(startIndex, endIndex)`: Extracts a portion of a string.
- `substring(startIndex, endIndex)`: Extracts a portion of a string (similar to `slice`, but doesn't support negative indices).
- `indexOf(searchValue, startIndex)`: Returns the index of the first occurrence of a substring.
- `lastIndexOf(searchValue, startIndex)`: Returns the index of the last occurrence of a substring.
- `replace(searchValue, replaceValue)`: Replaces occurrences of a substring with another substring.
- `split(separator)`: Splits a string into an array of substrings based on a specified separator.
- `trim()`: Removes leading and trailing whitespaces from a string.

```javascript
let str = "Hello, World!";
console.log(str.length);  // Output: 13
console.log(str.charAt(0));  // Output: H
console.log(str.concat(" Welcome!"));  // Output: Hello, World! Welcome!
console.log(str.toUpperCase());  // Output: HELLO, WORLD!
console.log(str.slice(0, 5));  // Output: Hello
console.log(str.indexOf("o"));  // Output: 4
console.log(str.replace("World", "John"));  // Output: Hello, John!
console.log(str.split(","));  // Output: ["Hello", " World!"]
console.log(str.trim());  // Output: Hello, World!
```

### String Search in JavaScript

JavaScript provides two methods for searching within a string: `search` and `match`.

- `search(regexp)`: Searches for a match between a regular expression and the string and returns the index of the first match.
- `match(regexp)`: Searches for a match between a regular expression and the string and returns an array containing the matches.

```javascript
let str = "Hello, World!";
console.log(str.search(/World/));  // Output: 7
console.log(str.match(/o/g));  // Output: ["o", "o"]
```

### Template Literals in JavaScript

Template literals, introduced in ECMAScript 6, provide an elegant way to create strings with embedded expressions. They are enclosed in backticks (`) and allow placeholders `${expression}` for dynamically evaluating expressions.

```javascript
let name = "John";
let age = 30;

let message = `My name is ${name} and I'm ${age} years old.`;
console.log(message);  // Output: My name is John and I'm 30 years old.
```

## Interview Questions

Here are some common interview questions related to strings in JavaScript:

1. How do you find the length of a string in JavaScript?
   ```javascript
   let str = "Hello";
   console
   
   .log(str.length);  // Output: 5
   ```

2. How do you convert a string to uppercase in JavaScript?
   ```javascript
   let str = "hello";
   console.log(str.toUpperCase());  // Output: HELLO
   ```

3. How do you replace a substring within a string in JavaScript?
   ```javascript
   let str = "Hello, World!";
   console.log(str.replace("World", "John"));  // Output: Hello, John!
   ```

4. How do you split a string into an array of substrings in JavaScript?
   ```javascript
   let str = "Hello, World!";
   console.log(str.split(","));  // Output: ["Hello", " World!"]
   ```

5. How do you check if a string contains a specific substring in JavaScript?
   ```javascript
   let str = "Hello, World!";
   console.log(str.includes("World"));  // Output: true
   ```

These are just a few examples of interview questions related to strings in JavaScript. It's important to practice and understand the concepts thoroughly to perform well in interviews.

---
sidebar_position: 5
---

# Strings in JavaScript

Strings represent sequences of characters and are enclosed in quotes.

```js
let greeting = 'Hello, World!';
let message = "I'm learning JavaScript.";
```

## String Methods in JavaScript

JavaScript provides various built-in methods to manipulate strings.

```js
let text = 'Hello, World!';
let length = text.length;  // Length of the string
let uppercase = text.toUpperCase();  // Convert to uppercase
let lowercase = text.toLowerCase();  // Convert to lowercase
let subString = text.substring(0, 5);  // Extract substring
let splitArray = text.split(',');  // Split into an array
let replacedText = text.replace('World', 'John');  // Replace text
```

## String Search in JavaScript

JavaScript provides methods to search for specific patterns in strings.

```js
let text = 'Hello, World!';
let position = text.indexOf('World');  // Index of substring
let includes = text.includes('Hello');  // Check if substring exists
let startsWith = text.startsWith('Hello');  // Check if starts with substring
let endsWith = text.endsWith('!');  // Check if ends with substring
```

## Template Literals in JavaScript

Template literals provide an easy way to work with strings that contain placeholders.

```js
let name = 'John';
let age = 25;
let message = `My name is ${name} and I'm ${age} years old.`;
```

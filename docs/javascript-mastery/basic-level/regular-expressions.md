---
sidebar_position: 15
tags: [CodeMasterMindHQ, Regular Expressions in JavaScript, Regular Expressions]
---

# Regular Expressions in JavaScript

Regular expressions (regex or regexp) are patterns used to match and manipulate text strings. In JavaScript, regular expressions are represented by objects of the `RegExp` class. Regular expressions provide a powerful and flexible way to search, match, and replace text based on specific patterns.

## Creating Regular Expressions

Regular expressions can be created using the `RegExp` constructor or by using literal notation.

```javascript
// Using the RegExp constructor
let regex = new RegExp('pattern');

// Using literal notation (enclosed in forward slashes)
let regex = /pattern/;
```

## Regular Expression Patterns

Regular expression patterns consist of a combination of characters and metacharacters that define the search criteria.

```javascript
// Matching a specific word
let regex = /hello/;

// Matching multiple characters using character classes
let regex = /[aeiou]/;      // Match any vowel
let regex = /[a-z]/;        // Match any lowercase letter
let regex = /[0-9]/;        // Match any digit

// Matching repeated characters using quantifiers
let regex = /a+/;           // Match one or more 'a'
let regex = /a*/;           // Match zero or more 'a'
let regex = /a?/;           // Match zero or one 'a'

// Matching specific positions using anchors
let regex = /^start/;      // Match 'start' at the beginning of the string
let regex = /end$/;        // Match 'end' at the end of the string

// Using metacharacters for special patterns
let regex = /\d/;          // Match any digit
let regex = /\w/;          // Match any word character
let regex = /\s/;          // Match any whitespace character

// Using groups and alternation
let regex = /(red|green|blue)/;   // Match 'red', 'green', or 'blue'
```

## Regular Expression Methods

JavaScript provides several methods for working with regular expressions:

- `test()`: Tests if a pattern matches a string and returns `true` or `false`.

```javascript
let regex = /hello/;
console.log(regex.test('hello world'));   // Output: true
console.log(regex.test('hi there'));      // Output: false
```

- `exec()`: Searches for a pattern in a string and returns an array of matched substrings or `null`.

```javascript
let regex = /hello/;
console.log(regex.exec('hello world'));    // Output: ['hello']
console.log(regex.exec('hi there'));       // Output: null
```

- `match()`: Searches for a pattern in a string and returns an array of matched substrings or `null`.

```javascript
let regex = /hello/;
console.log('hello world'.match(regex));   // Output: ['hello']
console.log('hi there'.match(regex));      // Output: null
```

- `replace()`: Searches for a pattern in a string and replaces matches with a specified replacement.

```javascript
let regex = /hello/;
console.log('hello world'.replace(regex, 'hi'));   // Output: 'hi world'
```

## Regular Expression Flags

Regular expression patterns can be accompanied by flags that modify the search behavior.

- `i` (ignore case): Perform case-insensitive matching.
- `g` (global search): Perform a global search (find all matches).
- `m` (multiline): Allow matching across multiple lines.

```javascript
let regex = /hello/i;    // Case-insensitive matching
let regex = /hello/g;    // Global search
let regex = /hello/m;    // Multiline matching
```

## Regular Expression

 Interview Questions

1. **What is a regular expression?**

   A regular expression is a pattern used to match and manipulate text strings. It provides a powerful and flexible way to search, match, and replace text based on specific patterns.

2. **How do you create a regular expression in JavaScript?**

   Regular expressions can be created using the `RegExp` constructor or by using literal notation enclosed in forward slashes (`/`).

   ```javascript
   let regex = new RegExp('pattern');
   let regex = /pattern/;
   ```

3. **What are some common metacharacters used in regular expressions?**

   Common metacharacters used in regular expressions include `^`, `$`, `.`, `*`, `+`, `?`, `[ ]`, `{ }`, `|`, `(`, and `)`.

4. **How do you test if a pattern matches a string in JavaScript?**

   You can use the `test()` method of the `RegExp` object to test if a pattern matches a string. It returns `true` if there is a match and `false` otherwise.

   ```javascript
   let regex = /pattern/;
   regex.test('string');   // Output: true or false
   ```

5. **How do you search for a pattern and replace it with a specified string in JavaScript?**

   You can use the `replace()` method of the `String` object to search for a pattern in a string and replace it with a specified string.

   ```javascript
   let regex = /pattern/;
   'string'.replace(regex, 'replacement');   // Output: modified string
   ```

6. **What are regular expression flags and how are they used?**

   Regular expression flags modify the search behavior. Some common flags include `i` (ignore case), `g` (global search), and `m` (multiline). Flags are specified after the closing slash of the regular expression.

   ```javascript
   let regex = /pattern/flags;
   ```

These are some essential concepts and interview questions related to regular expressions in JavaScript.
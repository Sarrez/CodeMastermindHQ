---
sidebar_position: 8
---

# Regular Expressions

## What are Regular Expressions?

Regular Expressions, also known as Regex or Regexp, are a powerful tool used for pattern matching in strings. They allow you to search for, match, and replace specific patterns within a larger string. Regular expressions are used in many programming languages, including JavaScript, to manipulate and process strings.

## Creating Regular Expressions

In JavaScript, you can create a regular expression using the `RegExp` object or by using a literal syntax with forward slashes `/pattern/`.

Here's an example of using the `RegExp` object:

```js title="JavaScript"
const regex = new RegExp("hello");
```

And here's an example of using the literal syntax:

```js title="JavaScript"
const regex = /hello/;
```

## Using Regular Expressions to Match Patterns

Once you have created a regular expression, you can use it to match patterns in strings using the `test()` method or the `match()` method.

### The `test()` method

The `test()` method returns a boolean value indicating whether the pattern matches the string.

Here's an example:

```js title="JavaScript"
const regex = /hello/;
const str = "Hello, World!";
const result = regex.test(str);
console.log(result); // false
```

In this example, the `test()` method returns `false` because the string `"Hello, World!"` contains a capital `"H"`, which does not match the lowercase `"h"` in the regular expression.

### The match() method

The `match()` method returns an array of all matches found in the string. If there are no matches, it returns `null`.

Here's an example:

```js title="JavaScript"
const regex = /hello/;
const str = "Hello, World!";
const result = str.match(regex);
console.log(result); // null
```

In this example, the `match()` method returns `null` because the string `"Hello, World!"` does not contain the pattern `"hello"`.

You can also use regular expression flags to modify the behavior of the regular expression. For example, the `i` flag makes the regular expression case-insensitive. Here's an example:

```js title="JavaScript"
const regex = /hello/i;
const str = "Hello, World!";
const result = regex.test(str);
console.log(result); // true
```

In this example, the `test()` method returns `true` because the `i` flag makes the regular expression case-insensitive, allowing it to match the capital `"H"` in the string.

## Common Use Cases of Regular Expressions

Regular expressions are incredibly versatile and can be used for a wide range of tasks. Here are some common use cases:

### Validating User Input

Regular expressions can be used to validate user input, such as email addresses, phone numbers, or passwords. For example, you could use the following regular expression to validate an email address:

```js title="JavaScript"
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

This regular expression checks that the string:

- Starts with one or more characters that are not whitespace or the "@" symbol (`^[^\s@]+`)
- Contains an "@" symbol (`@`)
- Contains one or more characters that are not whitespace or the "@" symbol after the "@" (`[^\s@]+`)
  Contains a "." symbol (`\.`)
- Ends with one or more characters that are not whitespace or the "@" symbol after the "." (`[^\s@]+$`)

### Parsing Text

Regular expressions can be used to extract specific information from text. For example, you could use the following regular expression to extract all the links from an HTML document:

```js title="JavaScript"
const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g;
const str =
  '<html><body><a href="https://www.google.com">Google</a><a href="https://www.apple.com">Apple</a></body></html>';
const links = [];
let match;
while ((match = regex.exec(str)) !== null) {
  links.push(match[2]);
}
console.log(links); // ['https://www.google.com', 'https://www.apple.com']
```

This regular expression matches any `<a>` tag that contains an `href` attribute and captures the value of the `href` attribute. The `g` flag at the end of the regular expression indicates that the search should be global and not stop after the first match. The code then uses a `while` loop and the `exec()` method to find all the matches and add their `href` values to an array.

### Replacing Text

Regular expressions can be used to replace specific patterns in a string with a new value. For example, you could use the following regular expression to replace all instances of "color" with "colour" in a string:

```js title="JavaScript"
const regex = /color/g;
const str = "This color is my favorite color.";
const newStr = str.replace(regex, "colour");
console.log(newStr); // 'This colour is my favorite colour.'
```

This regular expression matches all instances of the word "color" in the string and replaces them with the word "colour".

These are just a few examples of the many ways regular expressions can be used. Regular expressions are a powerful tool for manipulating and processing strings, and it's worth taking the time to learn them thoroughly.

### Regular Expression Flags

Regular expression flags are optional parameters that can modify the behavior of a regular expression. Flags are specified after the closing delimiter of a regular expression literal or as the second argument to the RegExp constructor function.

The following flags are available in JavaScript:

- **g:** Global matching (find all matches rather than stopping after the first match).
- **i:** Case-insensitive matching.
- **m:** Multi-line matching.
- **s:** Dot matches all (the dot character . matches any character including line terminators).
- **u:** Unicode matching.
- **y:** Sticky matching (matches only at the position where the previous match ended).

For example, the regular expression `/hello world/gi` matches the string "hello world" globally and case-insensitively.

I hope this helps you in your journey to learn Regular Expressions in JavaScript. Let me know if you have any further questions!

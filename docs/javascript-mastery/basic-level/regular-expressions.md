---
sidebar_position: 15
tags: [CodeMasterMindHQ, Regular Expressions in JavaScript, Regular Expressions]
---

# Regular Expressions in JavaScript

Regular expressions are used to match patterns in strings.

```js
let text = 'Hello, World!';
let pattern = /Hello/;
let result = pattern.test(text);  // Check if pattern matches
let matches = text.match(/o/g);  // Find all matches
let replacedText = text.replace(/World/, 'John');  // Replace pattern
```


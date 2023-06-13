---
sidebar_position: 18
tags: [CodeMasterMindHQ, Hoisting in JavaScript, Hoisting]
---

# Hoisting in JavaScript

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.

```js
console.log(x);  // Undefined (hoisting)
var x = 5;

console.log(y);  // Error: y is not defined (no hoisting)
let y = 10;
```
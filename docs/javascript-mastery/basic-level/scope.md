---
sidebar_position: 17
tags: [CodeMasterMindHQ, Scope in JavaScript, Scope]
---

# Scope in JavaScript

Scope defines the accessibility and visibility of variables in JavaScript.

```js
function myFunction() {
  let x = 5;  // Local variable
  console.log(x);
}

console.log(x);  // Error: x is not defined (outside the scope)
```

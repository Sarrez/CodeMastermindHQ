---
sidebar_position: 22
tags: [Shallow Copy in JavaScript, Deep Copy in JavaScript]
---

# Copies

## Shallow Copy in JavaScript

Shallow copy creates a new object that references the original object's properties.

```js
let original = { name: 'John', age: 25 };
let copy = Object.assign({}, original);
```

## Deep Copy in JavaScript

Deep copy creates a new object with all properties and nested objects copied.

```js
let original = { name: 'John', age: 25 };
let copy = JSON.parse(JSON.stringify(original));
```
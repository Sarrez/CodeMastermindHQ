---
sidebar_position: 11
tags: [CodeMasterMindHQ, Conditional statements, if else in js, if, else, else if, Switch Statement]
---

# Conditional statements

Conditional statements are used to execute different blocks of code based on conditions.


## if, else, and else if in JavaScript


```js
let age = 18;
if (age >= 18) {
  console.log('Adult');
} else if (age >= 13) {
  console.log('Teenager');
} else {
  console.log('Child');
}
```

## Switch Statement in JavaScript

The switch statement is used to perform different actions based on different cases.

```js
let day = 3;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  default:
    console.log('Invalid day');
}
```
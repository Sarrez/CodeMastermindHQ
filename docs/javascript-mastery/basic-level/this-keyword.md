---
sidebar_position: 20
tags: [this Keyword in JavaScript, this Keyword]
---

# this Keyword in JavaScript

The `this` keyword refers to the object that the function is being executed in.

```js
let person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

person.sayHello();  // Output: Hello, John!
```
---
sidebar_position: 21
tags: [Classes in JavaScript, Classes]
---

# Classes in JavaScript

Classes are used to create objects with similar properties and methods.

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(5, 3);
console.log(rectangle.getArea());  // Output: 15
```
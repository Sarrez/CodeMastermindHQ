---
sidebar_position: 5
tags: [JavaScript, Objects Advance, object literals, object constructors, prototypes, prototypal inheritance]
---

# Objects Advance in JavaScript

## Introduction to Objects Advance in JavaScript
Objects in JavaScript are complex data types that allow you to store and manipulate key-value pairs. Objects can be created using object literals or by instantiating object constructors. Objects Advance in JavaScript refers to advanced concepts and techniques related to working with objects.

## Types of Objects Advance in JavaScript
1. **Object Literals**: Objects can be created using object literals, which are enclosed in curly braces `{}`. Object literals allow you to define key-value pairs directly.
   ```javascript
   // Object literal
   const person = {
     name: 'John Doe',
     age: 25,
     address: {
       street: '123 Main St',
       city: 'New York'
     }
   };
   ```

2. **Object Constructors**: Objects can also be created using object constructors, which are functions used as templates to create multiple objects with similar properties and methods.
   ```javascript
   // Object constructor
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   
   const person1 = new Person('John Doe', 25);
   const person2 = new Person('Jane Smith', 30);
   ```

3. **Built-in Objects**: JavaScript provides several built-in objects that have predefined properties and methods. Examples include `Math`, `Date`, and `Array`.
   ```javascript
   // Built-in objects
   const today = new Date();
   const random = Math.random();
   const numbers = new Array(1, 2, 3, 4, 5);
   ```

## Object Properties and Methods
Objects have properties (keys) and methods (functions) associated with them.

### Accessing Object Properties
Object properties can be accessed using dot notation or bracket notation.
```javascript
const person = {
  name: 'John Doe',
  age: 25
};

console.log(person.name);  // Output: John Doe
console.log(person['age']);  // Output: 25
```

### Modifying Object Properties
Object properties can be modified by assigning a new value to them.
```javascript
const person = {
  name: 'John Doe',
  age: 25
};

person.name = 'Jane Smith';
person['age'] = 30;

console.log(person.name);  // Output: Jane Smith
console.log(person.age);  // Output: 30
```

### Object Methods
Object methods are functions defined inside an object. They can be called using the dot notation.
```javascript
const person = {
  name: 'John Doe',
  age: 25,
  sayHello: function() {
    console.log('Hello!');
  }
};

person.sayHello();  // Output: Hello!
```

## Object Prototypes and Prototypal Inheritance
JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects. Prototypes are used as blueprints to create objects.

### Prototype Property
Every JavaScript object has a `prototype` property that refers to its parent object. The prototype object contains properties and methods that are inherited by the child object.
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log('Hello!');
};

const person = new Person('John Doe', 25);
person.sayHello();  // Output: Hello!
```

### Inheritance using Prototype
Inheritance allows objects to inherit properties and methods from another object. It is achieved by setting the prototype of a child object to an instance of the parent object.
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log('Hello!');
};

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const student = new Student('Jane Smith', 18, 'A');
student.sayHello();  // Output: Hello!
```

## Interview Questions

1. **Q: What are objects in JavaScript?**
   
   **A:** Objects in JavaScript are complex data types that allow you to store and manipulate key-value pairs.

2. **Q: How can you create objects in JavaScript?**
   
   **A:** Objects can be created using object literals or by instantiating object constructors.

3. **Q: How do you access object properties in JavaScript?**
   
   **A:** Object properties can be accessed using dot notation (`object.property`) or bracket notation (`object['property']`).

4. **Q: What is prototypal inheritance in JavaScript?**
   
   **A:** Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects.

5. **Q: How can you achieve inheritance in JavaScript?**
   
   **A:** Inheritance can be achieved by setting the prototype of a child object to an instance of the parent object using `Object.create()`.

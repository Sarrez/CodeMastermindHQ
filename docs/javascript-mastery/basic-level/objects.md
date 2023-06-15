---
sidebar_position: 8
---

# Objects in JavaScript

In JavaScript, objects are a fundamental data type that allows you to store and manipulate collections of key-value pairs. They provide a way to represent real-world entities, organize data, and define functionality. Objects can be created using object literals or the `Object` constructor.

### Creating Objects

There are multiple ways to create objects in JavaScript:

1. **Object literals:** You can define an object using curly braces `{}` and specify key-value pairs inside.

   ```javascript
   let person = {
     name: 'John',
     age: 25,
     city: 'New York'
   };
   ```

2. **Using the `Object` constructor:** You can create an object using the `new Object()` syntax and add properties and methods dynamically.

   ```javascript
   let person = new Object();
   person.name = 'John';
   person.age = 25;
   person.city = 'New York';
   ```

3. **Object.create:** You can create a new object using the `Object.create()` method and specify the prototype object.

   ```javascript
   let personPrototype = {
     name: '',
     age: 0,
     city: ''
   };

   let person = Object.create(personPrototype);
   person.name = 'John';
   person.age = 25;
   person.city = 'New York';
   ```

### Accessing Object Properties

You can access object properties using dot notation or bracket notation.

```javascript
let person = {
  name: 'John',
  age: 25,
  city: 'New York'
};

console.log(person.name);  // Output: John
console.log(person['age']);  // Output: 25
```

### Object Methods in JavaScript

Objects in JavaScript can have methods, which are functions defined as object properties. These methods can perform operations on the object's data and provide functionality.

```javascript
let person = {
  name: 'John',
  age: 25,
  city: 'New York',
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

person.greet();  // Output: Hello, my name is John
```

### Sorting Objects in JavaScript

To sort an array of objects based on a specific property, you can use the `sort()` method and provide a comparison function.

```javascript
let people = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 32 },
  { name: 'Bob', age: 18 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);
/* Output:
[
  { name: 'Bob', age: 18 },
  { name: 'John', age: 25 },
  { name: 'Alice', age: 32 }
]
*/
```

### Object Iteration in JavaScript

There are several ways to iterate over object properties:

1. **`for...in` loop:** This loop iterates over all enumerable properties of an object.

   ```javascript
   let person = {
     name: 'John',
     age: 25,
     city: 'New York'
   };

   for (let key in person) {
     console.log(key + ': ' + person[key]);
   }
   /* Output:
   name: John
   age: 25
   city: New York
   */
   ```

2. **`Object.keys()`:** This method returns an array of an object's enumerable property names, which can be iterated using array methods.

   ```javascript
   let person = {
     name: 'John',
     age: 25,
     city: 'New York'
   };

   Object.keys(person).forEach((key) => {
     console.log(key + ': ' + person[key]);
   });
   /* Output:
   name: John
   age: 25
   city: New York
   */
   ```

### Objects Const in JavaScript

When using `const` to declare an object, the variable itself becomes immutable, meaning it cannot be reassigned to a different object. However, the object properties can still be modified.

```javascript
const person = {
  name: 'John',
  age: 25
};

person.name = 'Alice';
console.log(person.name);  // Output: Alice

person = {};  // This will throw an error because reassignment is not allowed
```

It's important to note that `const` only protects the variable binding, not the properties of the object itself. To create a fully immutable object, you would need to use additional techniques like `Object.freeze()`.

These are some of the key concepts related to objects in JavaScript. Now, let's move on to addressing interview questions related to objects.

### Interview Questions: Objects in JavaScript

1. **Q: What is the difference between dot notation and bracket notation when accessing object properties?**

   Dot notation is used when the property name is known and is a valid identifier. Bracket notation allows you to access properties dynamically using a variable or when the property name contains special characters or spaces.

   ```javascript
   let person = {
     name: 'John',
     age: 25
   };

   console.log(person.name);  // Dot notation
   console.log(person['age']);  // Bracket notation
   ```

2. **Q: How can you clone an object in JavaScript?**

   There are multiple ways to clone an object, such as using the `Object.assign()` method, spread syntax, or `JSON.parse(JSON.stringify())`. Here's an example using spread syntax:

   ```javascript
   let obj1 = { name: 'John', age: 25 };
   let obj2 = { ...obj1 };
   ```

3. **Q: What is the difference between `null` and `undefined` in JavaScript?**

   `null` is a value that represents the intentional absence of an object value, while `undefined` represents the absence of a value or an uninitialized variable.

4. **Q: How can you determine if a property exists in an object?**

   You can use the `in` operator to check if a property exists in an object.

   ```javascript
   let person = { name: 'John', age: 25 };

   console.log('name' in person);  // Output: true
   console.log('city' in person);  // Output: false
   ```

5. **Q: How do you prevent object properties from being modified?**

   You can use `Object.freeze()` to make an object and its properties immutable.

   ```javascript
   let person = { name: 'John', age: 25 };
   Object.freeze(person);
   ```

These are just a few examples of interview questions related to objects in JavaScript. It's important to have a solid understanding of the fundamental concepts and be able to apply them effectively.

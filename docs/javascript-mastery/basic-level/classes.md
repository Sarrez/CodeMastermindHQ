---
sidebar_position: 21
tags: [Classes in JavaScript, Classes]
---

# Classes in JavaScript

In JavaScript, classes are a way to define blueprints for creating objects with shared properties and methods. They provide a more structured approach to object-oriented programming.

## Defining a Class

A class is defined using the `class` keyword, followed by the name of the class. The class can have a constructor method, which is used to initialize the object when it is created.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

In the example above, we define a `Person` class with a constructor that takes `name` and `age` as parameters. The class also has a `sayHello` method, which logs a greeting message to the console.

## Creating Objects from a Class

To create an object from a class, we use the `new` keyword followed by the class name and any required arguments for the constructor.

```javascript
let person = new Person('John Doe', 25);
person.sayHello();  // Output: Hello, my name is John Doe
```

In the code above, we create a new `Person` object named `person` with the name "John Doe" and age 25. We can then call the `sayHello` method on the `person` object to greet.

## Types of Classes in JavaScript

JavaScript supports various types of classes, including regular classes, static classes, and inheritance.

### Regular Classes

Regular classes are the most common type of classes. They define the blueprint for creating objects and can have instance methods and properties.

```javascript
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

In the example above, we define a `Rectangle` class with a constructor to set the `width` and `height` properties. The class also has a `getArea` method that calculates and returns the area of the rectangle.

### Static Classes

Static classes contain static methods that belong to the class itself, rather than to instances of the class. These methods can be called directly on the class without creating an object.

```javascript
class MathUtils {
  static square(number) {
    return number * number;
  }
}

console.log(MathUtils.square(5));  // Output: 25
```

In the code above, we define a `MathUtils` class with a static method `square` that calculates the square of a number. The method can be called directly on the class without creating an object.

### Inheritance

Inheritance allows a class to inherit properties and methods from another class. The subclass (child class) extends the superclass (parent class) and can override or extend its behavior.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();  // Output: Buddy b

arks.
```

In the example above, we define an `Animal` class with a `speak` method. We then define a `Dog` class that extends the `Animal` class. The `Dog` class overrides the `speak` method to make a different sound.

## Interview Questions

Here are some common interview questions related to classes in JavaScript:

1. **Q: What are classes in JavaScript?**
   
   **A:** Classes in JavaScript are blueprints for creating objects with shared properties and methods.

2. **Q: How do you define a class in JavaScript?**
   
   **A:** Classes are defined using the `class` keyword, followed by the class name and optional constructor and methods.

3. **Q: What is the purpose of the constructor method in a class?**
   
   **A:** The constructor method is used to initialize objects created from a class. It is called automatically when a new object is created.

4. **Q: What is the difference between instance methods and static methods?**
   
   **A:** Instance methods are associated with objects created from a class, while static methods belong to the class itself and can be called directly on the class.

5. **Q: How does inheritance work in JavaScript classes?**
   
   **A:** Inheritance allows a class to inherit properties and methods from another class. The child class extends the parent class and can override or extend its behavior.


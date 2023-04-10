---
sidebar_position: 11
---

# Classes and Inheritance

**Classes** are an important concept in object-oriented programming (OOP) that allow you to create objects with their own properties and methods. In JavaScript, classes were introduced in ECMAScript 2015 (ES6) and provide a more structured way to create objects compared to traditional constructor functions.

1.  **Creating Classes**

    You can create a class in JavaScript using the `class` keyword, followed by the name of the class, and a pair of curly braces `{}`. Here's an example:

    ```js title="Javascript"
    class Animal {
      constructor(name, species) {
        this.name = name;
        this.species = species;
      }

      sound() {
        console.log("The animal makes a sound.");
      }
    }

    const lion = new Animal("Leo", "Lion");
    console.log(lion.name); // Output: Leo
    console.log(lion.species); // Output: Lion
    lion.sound(); // Output: The animal makes a sound.
    ```

    In the example above, we created a class called `Animal` with a constructor that takes `name` and `species` as parameters and sets them as properties of the class. The class also has a `sound()` method that logs a message to the console.

2.  **Inheritance and Extending Classes**

    One of the key features of classes in JavaScript is inheritance, which allows you to create a new class that inherits properties and methods from a parent class. You can use the `extends` keyword to create a subclass that extends a parent class. Here's an example:

    ```js title="JavaScript"
    class Animal {
      constructor(name, species) {
        this.name = name;
        this.species = species;
      }

      sound() {
        console.log("The animal makes a sound.");
      }
    }

    class Lion extends Animal {
      constructor(name) {
        super(name, "Lion");
      }

      sound() {
        console.log("The lion roars.");
      }
    }

    const lion = new Lion("Leo");
    console.log(lion.name); // Output: Leo
    console.log(lion.species); // Output: Lion
    lion.sound(); // Output: The lion roars.
    ```

    In the example above, we created a subclass called `Lion` that extends the `Animal` class. The `Lion` class has its own constructor that takes only the `name` parameter and uses the `super` keyword to call the parent class's constructor and pass the `name` and `"Lion"` arguments. The `Lion` class also has its own implementation of the `sound()` method, which overrides the implementation in the parent class.

3.  **Using Classes for Object-Oriented Programming**

    Classes in JavaScript can be used to implement object-oriented programming (OOP) principles such as encapsulation, inheritance, and polymorphism. Here's an example that demonstrates how to use classes to implement OOP concepts:

    ```js title="JavaScript"
    class Animal {
      constructor(name) {
        this.name = name;
      }

      sound() {
        console.log("The animal makes a sound.");
      }
    }

    class Lion extends Animal {
      constructor(name) {
        super(name);
      }

      sound() {
        console.log("The lion roars.");
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name);
      }

      sound() {
        console.log("The dog barks.");
      }
    }

    const lion = new Lion("Leo");
    const dog = new Dog("Buddy");

    lion.sound(); // Output: The lion roars.
    dog.sound(); // Output: The dog barks.
    ```

    In the example above, we have an `Animal` class that serves as the base class, and two subclasses `Lion` and `Dog` that inherit from the `Animal` class. Each subclass has its own implementation of the `sound()` method, which demonstrates polymorphism - the ability of objects of different classes to respond to the same method name.

4.  **Class Syntax vs Constructor Functions**

    Prior to the introduction of classes in ES6, constructor functions were commonly used in JavaScript to create objects. Classes provide a more concise and structured way of defining objects with their properties and methods, compared to constructor functions. Here's an example that shows the difference between class syntax and constructor functions:

    Using Class Syntax:

    ```js title="JavaScript"
    class Animal {
      constructor(name) {
        this.name = name;
      }

      sound() {
        console.log("The animal makes a sound.");
      }
    }

    const lion = new Animal("Leo");
    console.log(lion.name); // Output: Leo
    lion.sound(); // Output: The animal makes a sound.
    ```

    Using Constructor Function:

    ```js title="JavaScript"
    function Animal(name) {
      this.name = name;

      this.sound = function () {
        console.log("The animal makes a sound.");
      };
    }

    const lion = new Animal("Leo");
    console.log(lion.name); // Output: Leo
    lion.sound(); // Output: The animal makes a sound.
    ```

As you can see, the class syntax provides a more concise and organized way of defining objects with their properties and methods.

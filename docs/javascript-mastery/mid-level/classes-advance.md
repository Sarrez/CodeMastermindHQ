---
sidebar_position: 7
Tags: [JavaScript advanced classes, JavaScript inheritance, method overriding in JavaScript, static methods in JavaScript, JavaScript interview questions]
---

# Classes advance in JavaScript

## Definition
In JavaScript, classes are a way to define reusable blueprints for creating objects with similar properties and behaviors. They provide a more structured and object-oriented approach to programming. Classes encapsulate data (properties) and functions (methods) that operate on that data.

## Types of Classes in Advance in JavaScript

### Basic Class Syntax
The basic syntax for defining a class in JavaScript is as follows:

```javascript
class ClassName {
  constructor(/* constructor parameters */) {
    // initialize properties
  }

  /* methods */
}
```

### Class Inheritance
Inheritance allows a class to inherit properties and methods from another class. It helps to create a hierarchy of classes where a child class inherits the characteristics of its parent class. In JavaScript, you can achieve inheritance using the `extends` keyword.

```javascript
class ChildClass extends ParentClass {
  constructor(/* constructor parameters */) {
    super(/* arguments to parent class constructor */);
    // additional initialization for child class
  }

  /* additional methods for child class */
}
```

## Important Concepts for Classes in Advance in JavaScript

### Static Methods
Static methods belong to the class itself rather than its instances. They are called directly on the class and not on an object created from the class. Static methods are useful for utility functions or operations that don't require accessing instance-specific data.

```javascript
class MyClass {
  static staticMethod(/* parameters */) {
    // static method logic
  }
}

MyClass.staticMethod(/* arguments */);
```

### Method Overriding
Method overriding allows a child class to provide a different implementation of a method defined in its parent class. This is achieved by redefining the method in the child class. When a method is called on an object of the child class, the overridden method in the child class is executed.

```javascript
class ParentClass {
  method() {
    // parent class method logic
  }
}

class ChildClass extends ParentClass {
  method() {
    // child class method logic (overrides parent method)
  }
}

let obj = new ChildClass();
obj.method(); // calls the overridden method in the child class
```

### Getters and Setters
Getters and setters allow controlled access to object properties. Getters retrieve the value of a property, and setters set the value of a property. They provide a way to define computed properties and perform validation or additional logic when accessing or modifying property values.

```javascript
class MyClass {
  get property() {
    // getter logic
    return /* computed property value */;
  }

  set property(value) {
    // setter logic
    /* perform validation or additional operations */
  }
}

let obj = new MyClass();
let value = obj.property; // calls the getter
obj.property = newValue; // calls the setter
```

### Private Class Fields
Private class fields are properties that are scoped to the class and inaccessible from outside the class. They are defined using a `#` prefix before the field name. Private fields help encapsulate internal data and prevent direct access and modification.

```javascript
class MyClass {
  #privateField;

  constructor() {
    this.#privateField = /* initial value */;
  }

  #privateMethod() {
    // private method logic
  }
}
```

## Code Examples for Classes in Advance in JavaScript

### Basic Class Example
```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    // Note: This is just an example, not a valid implementation
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}

let rect = new Rectangle(5, 3);
console.log(rect.area); // Output: 15
rect.area = 25;
console.log(rect.width, rect.height); // Output: 5, 5
```

### Inheritance Example
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
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.
```

### Static Method Example
```javascript
class MathUtils {
  static multiply(a, b) {
    return a * b;
  }
}

let result = MathUtils.multiply(5, 3);
console.log(result); // Output: 15
```

### Private Class Fields Example
```javascript
class Counter {
  #count = 0;

  #increment() {
    this.#count++;
  }

  getCount() {
    this.#increment();
    return this.#count;
  }
}

let counter = new Counter();
console.log(counter.getCount()); // Output: 1
console.log(counter.#count); // Error: Private field '#count' must be declared in an enclosing class
```

## Interview Questions for Classes in Advance in JavaScript

1. **What are classes in JavaScript?**
    
    In JavaScript, classes are a way to define reusable blueprints for creating objects with similar properties and behaviors. They provide a more structured and object-oriented approach to programming. Classes encapsulate data (properties) and functions (methods) that operate on that data.

2. **How do you define a class in JavaScript?**

   In JavaScript, you can define a class using the `class` keyword, followed by the class name. Here's an example of a basic class definition:
   ```js
   class MyClass {
     constructor(/* constructor parameters */) {
       // initialize properties
     }
   
     /* methods */
   }
   ```

3. **What is inheritance in JavaScript classes? How is it implemented?**

   Inheritance allows a class to inherit properties and methods from another class. It helps to create a hierarchy of classes where a child class inherits the characteristics of its parent class. In JavaScript, you can achieve inheritance using the `extends` keyword. 

   Here's an example:
   ```js
   class ParentClass {
     /* properties and methods */
   }
   
   class ChildClass extends ParentClass {
     /* additional properties and methods specific to the child class */
   }
   ```

4. **Explain the concept of static methods in classes.**

   Static methods in classes belong to the class itself rather than its instances. They are called directly on the class and not on an object created from the class. Static methods are useful for utility functions or operations that don't require accessing instance-specific data. You define static methods using the `static` keyword. 
   
   Here's an example:
   ```js
   class MyClass {
     static staticMethod(/* parameters */) {
       // static method logic
     }
   }
   
   MyClass.staticMethod(/* arguments */);
   ```

5. **How do you override a method in a child class?**

   Method overriding allows a child class to provide a different implementation of a method defined in its parent class. This is achieved by redefining the method in the child class. When a method is called on an object of the child class, the overridden method in the child class is executed.
   
   Here's an example:
    ```js
    class ParentClass {
      method() {
        // parent class method logic
      }
    }
    
    class ChildClass extends ParentClass {
      method() {
        // child class method logic (overrides parent method)
      }
    }
    
    let obj = new ChildClass();
    obj.method(); // calls the overridden method in the child class
    ```

6. **What are getters and setters in classes? How are they used?**

   Getters and setters allow controlled access to object properties. Getters retrieve the value of a property, and setters set the value of a property. They provide a way to define computed properties and perform validation or additional logic when accessing or modifying property values. Getters are defined using the `get` keyword, and setters are defined using the `set` keyword. 
   
   Here's an example:
   ```js
   class MyClass {
     get property() {
       // getter logic
       return /* computed property value */;
     }
   
     set property(value) {
       // setter logic
       /* perform validation or additional operations */
     }
   }
   
   let obj = new MyClass();
   let value = obj.property; // calls the getter
   obj.property = newValue; // calls the setter
   ```

7. **What are private class fields? How do they enhance encapsulation?**
   Private class fields are properties that are scoped to the class and inaccessible from outside the class. They are defined using a `#` prefix before the field name. Private fields help encapsulate internal data and prevent direct access and modification from external code. This enhances encapsulation by hiding implementation details and providing better control over access to class properties. 
   
   Here's an example:
   ```js
   class MyClass {
     #privateField;
   
     constructor() {
       this.#privateField = /* initial value */;
     }
   
     #privateMethod() {
       // private method logic
     }
   }
   ```

   In this example, `#privateField` is a private field that can only be accessed and modified within the `MyClass` class. It cannot be accessed or modified from outside the class. Private fields and methods provide a way to ensure that the internal state of a class is not directly manipulated, improving data integrity and security.
---
sidebar_position: 22
tags: [Shallow Copy in JavaScript, Deep Copy in JavaScript]
---

# Copies in JavaScript

In JavaScript, when you assign a value from one variable to another, you are creating a copy of the value. However, the way this copy is created can vary, resulting in different behaviors and implications. Let's explore the different types of copies in JavaScript:

## 1. Shallow Copy: 
A shallow copy creates a new object or array, but the nested objects and arrays within it are still referenced from the original object. Modifying the nested objects or arrays in the copy will affect the original object.

```javascript
// Shallow copy of an object
const originalObject = { name: 'John', age: 25 };
const shallowCopy = Object.assign({}, originalObject);

shallowCopy.age = 30;

console.log(originalObject);  // { name: 'John', age: 25 }
console.log(shallowCopy);     // { name: 'John', age: 30 }

// Shallow copy of an array
const originalArray = [1, 2, [3, 4]];
const shallowCopy = originalArray.slice();

shallowCopy[2][0] = 5;

console.log(originalArray);  // [1, 2, [5, 4]]
console.log(shallowCopy);    // [1, 2, [5, 4]]
```

## 2. Deep Copy: 
A deep copy creates a completely independent copy of the object or array, including all nested objects and arrays. Modifying the copy will not affect the original object.

```javascript
// Deep copy of an object
const originalObject = { name: 'John', age: 25 };
const deepCopy = JSON.parse(JSON.stringify(originalObject));

deepCopy.age = 30;

console.log(originalObject);  // { name: 'John', age: 25 }
console.log(deepCopy);        // { name: 'John', age: 30 }

// Deep copy of an array
const originalArray = [1, 2, [3, 4]];
const deepCopy = JSON.parse(JSON.stringify(originalArray));

deepCopy[2][0] = 5;

console.log(originalArray);  // [1, 2, [3, 4]]
console.log(deepCopy);       // [1, 2, [5, 4]]
```

## Interview Questions

1. **Q: What is the difference between a shallow copy and a deep copy?**
   
   **A:** A shallow copy creates a new object or array, but the nested objects and arrays within it are still referenced from the original object. In contrast, a deep copy creates a completely independent copy of the object or array, including all nested objects and arrays.

2. **Q: How can you create a shallow copy of an object in JavaScript?**
   
   **A:** You can create a shallow copy of an object using `Object.assign()`, spread syntax (`...`), or by manually copying each property.

   ```javascript
   const originalObject = { name: 'John', age: 25 };

   // Using Object.assign()
   const shallowCopy1 = Object.assign({}, originalObject);

   // Using spread syntax
   const shallowCopy2 = { ...originalObject };
   ```

3. **Q: How can you create a deep copy of an object in JavaScript?**
   
   **A:** One way to create a deep copy of an object is by serializing it to JSON and then parsing it back into a new object.

   ```javascript
   const originalObject = { name: 'John', age: 25 };
   const deepCopy = JSON.parse(JSON.stringify(originalObject));
   ```

4. **Q: When should you use a shallow copy versus a deep copy?**
   
   **A:** Use a shallow copy when you want to create a new object or array but still maintain a reference to the original nested objects or arrays. Use a deep copy when you want to create a completely independent copy of the object or array, including all nested objects and arrays.

5. **Q: Are there any limitations or considerations when using deep copies with JSON serialization?**
   
   **A:** Yes, JSON serialization has limitations. It cannot copy certain data types such as functions, regular expressions, or undefined values. Additionally, circular references in objects or arrays can cause errors during serialization.


---
sidebar_position: 13
tags: [CodeMasterMindHQ, set in  javascript, sets, sets in js]
---

# Sets in JavaScript

A Set is a built-in object in JavaScript that allows you to store unique values of any type. It provides methods to add, delete, and check the existence of elements in a set. Sets are often used when you want to maintain a collection of unique values or need to perform operations like union, intersection, and difference on multiple sets.

## Creating a Set

You can create a new Set in JavaScript using the `Set` constructor or by initializing it with an iterable object like an array.

```javascript
// Creating an empty set
const set1 = new Set();

// Creating a set from an array
const set2 = new Set([1, 2, 3, 4, 5]);
```

## Adding and Deleting Elements

You can add elements to a set using the `add` method, and you can remove elements using the `delete` method.

```javascript
const set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set);  // Output: Set { 1, 2, 3 }

set.delete(2);

console.log(set);  // Output: Set { 1, 3 }
```

## Checking the Existence of Elements

You can check if an element exists in a set using the `has` method.

```javascript
const set = new Set([1, 2, 3]);

console.log(set.has(2));  // Output: true
console.log(set.has(4));  // Output: false
```

## Iterating over a Set

You can iterate over the elements of a set using the `for...of` loop or by using the `forEach` method.

```javascript
const set = new Set([1, 2, 3]);

// Using for...of loop
for (let item of set) {
  console.log(item);
}

// Using forEach method
set.forEach((item) => {
  console.log(item);
});
```

## Set Operations

Sets in JavaScript support various operations like union, intersection, and difference.

### Union

To perform the union of two sets, you can use the `Set` constructor along with the spread operator.

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

const unionSet = new Set([...set1, ...set2]);

console.log(unionSet);  // Output: Set { 1, 2, 3, 4, 5 }
```

### Intersection

To find the common elements between two sets, you can use the `filter` method along with the `has` method.

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

const intersectionSet = new Set([...set1].filter((item) => set2.has(item)));

console.log(intersectionSet);  // Output: Set { 3 }
```

### Difference

To find the elements that are present in one set but not in the other, you can use the `filter` method along with the `has` method.

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

const differenceSet = new Set([...set1].filter((item) => !set2.has(item)));

console.log(differenceSet);  // Output: Set { 1, 2 }
```

## Interview Questions

1. **Q: What is a Set in JavaScript?**
   
   **A:** A Set is a built-in object in JavaScript that allows you to store unique values of any type.

2. **Q: How do you create a Set in JavaScript?**
   
   **A:** You can create a Set using the `Set` constructor or by initializing it with an iterable object like an array.

3. **Q: How do you add elements to a Set?**
   
   **A:** You can add elements to a Set using the `add` method.

4. **Q: How do you delete elements from a Set?**
   
   **A:** You can delete elements from a Set using the `delete` method.

5. **Q: How do you check if an element exists in a Set?**
   
   **A:** You can check if an element exists in a Set using the `has` method.
   ```js
   const set = new Set(['apple', 'banana', 'orange']);
   console.log(set.has('apple')); // Output: true
   ```

6. **Q: How do you iterate over a Set in JavaScript?**
   
   **A:** You can iterate over a Set using the `for...of` loop or the `forEach` method.
   
7. **Q: How do you perform set operations like union, intersection, and difference?**
   
   **A:** You can use various techniques like the spread operator, `filter` method, and `has` method to perform set operations.

8. **Q: What is the difference between a Set and an Array in JavaScript?**

   - A Set stores unique values, whereas an Array can contain duplicate values.
   - Sets don't preserve the insertion order, while Arrays do.
   - Sets have built-in methods for checking existence, adding, and removing elements, while Arrays have different methods for these operations.

9. **Q: How do you remove all elements from a Set?**

   **A:** You can use the `clear` method of the Set object. It removes all elements from the Set.
   ```js
   const set = new Set(['apple', 'banana', 'orange']);
   set.clear();
   console.log(set.size); // Output: 0
   ```

10. **Q: Can a Set contain objects as elements?**

    **A:** Yes, a Set can store object references as elements. However, it considers object references as unique, so two objects with the same properties and values would still be treated as separate elements in the Set.
    ```js
    const obj1 = { name: 'John' };
    const obj2 = { name: 'John' };
    const set = new Set();
    set.add(obj1);
    set.add(obj2);
    console.log(set.size); // Output: 2
    ```

These are the basics of Sets in JavaScript. You can further explore additional methods and use cases in the official JavaScript documentation.
---
sidebar_position: 6
---

# DOM Manipulation

# Introduction to the Document Object Model (DOM)

The Document Object Model (DOM) is a programming interface for web documents. It provides a structured representation of the HTML elements and their relationships in a web page.

The DOM consists of a tree-like structure where each node represents an HTML element. This tree structure can be manipulated using JavaScript to dynamically change the content and appearance of a web page.

## Selecting Elements from the DOM

Before we can manipulate elements in the DOM, we need to be able to select them first. There are several ways to select elements from the DOM using JavaScript:

### 1. Selecting by tag name

To select elements by tag name, we use the `getElementsByTagName` method. This method returns an array-like object containing all elements with the specified tag name.

```js title="JavaScript"
const elements = document.getElementsByTagName("h1");
```

This selects all `h1` elements on the page and stores them in the `elements` variable.

### 2. Selecting by class name

To select elements by class name, we use the `getElementsByClassName` method. This method returns an array-like object containing all elements with the specified class name.

```js title="JavaScript"
const elements = document.getElementsByClassName("my-class");
```

This selects all elements with the `my-class` class and stores them in the `elements` variable.

### 3. Selecting by ID

To select elements by ID, we use the `getElementById` method. This method returns the element with the specified ID.

```js title="JavaScript"
const element = document.getElementById("my-id");
```

This selects the element with the `my-id` ID and stores it in the `element` variable.

### 4. Selecting by query selector

To select elements using more complex selectors, we can use the `querySelector` and `querySelectorAll` methods. These methods allow us to select elements using CSS-style selectors.

```js title="JavaScript"
const element = document.querySelector(".my-class");
const elements = document.querySelectorAll("p");
```

This selects the first element with the `my-class` class and stores it in the `element` variable. The second example selects all `p` elements on the page and stores them in the `elements` variable.

## Modifying Elements in the DOM

Once we have selected an element from the DOM, we can modify its content and attributes using JavaScript.

### 1. Changing element content

To change the content of an element, we can use the `innerHTML` property. This property sets or returns the HTML content inside an element.

```js title="JavaScript"
const element = document.getElementById("my-id");
element.innerHTML = "New content";
```

This changes the content of the element with the `my-id` ID to 'New content'.

### 2. Changing element attributes

To change the attributes of an element, we can use the `setAttribute` method. This method sets the value of the specified attribute for the selected element.

```js title="JavaScript"
const element = document.getElementById("my-id");
element.setAttribute("src", "new-image.jpg");
```

This changes the `src` attribute of the element with the `my-id` ID to 'new-image.jpg'.

## Responding to User Events

One of the most powerful features of the DOM is its ability to respond to user events, such as clicks and key presses.

### 1. Adding event listeners

To listen for user events, we can use the `addEventListener` method. This method attaches an event listener function to the selected element.

```js title="JavaScript"
const button = document.getElementById("my-button");

button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

This adds a click event listener to the button with the `my-button` ID. When the button is clicked, the function passed to `addEventListener` is called and logs 'Button clicked' to the console.

### 2. Event object

When an event is triggered, an event object is created that contains information about the event. This object can be accessed within the event listener function as the first argument.

```js title="JavaScript"
const button = document.getElementById("my-button");

button.addEventListener("click", function (event) {
  console.log("Button clicked");
  console.log(event);
});
```

This logs the event object to the console when the button is clicked.

### 3. Preventing default behavior

Sometimes, we want to prevent the default behavior of an element when an event is triggered. For example, we may want to prevent a form from submitting when the user clicks the submit button.

To prevent the default behavior, we can call the `preventDefault` method on the event object.

```js title="JavaScript"
const form = document.getElementById("my-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});
```

## Conclusion

In this tutorial, we covered the basics of DOM manipulation using JavaScript. We explained what the DOM is and how it works, then showed how to select and modify DOM elements. Finally, we covered how to respond to user events with JavaScript.

By understanding the DOM and how to manipulate it with JavaScript, you can create dynamic and interactive web pages that respond to user input.

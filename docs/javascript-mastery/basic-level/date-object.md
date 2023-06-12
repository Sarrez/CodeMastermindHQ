---
sidebar_position: 9
tags: [CodeMasterMindHQ, Date Objects, date, Date Formats, Date Methods]
---

# Date Objects in JavaScript

The `Date` object is used to work with dates and times in JavaScript.

```js
let currentDate = new Date();
let specificDate = new Date('2022-01-01');
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();
```

## Date Formats in JavaScript

You can format dates using methods of the `Date` object or external libraries.

```js
let currentDate = new Date();
let formattedDate = currentDate.toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
```

## Date Methods in JavaScript

JavaScript provides various methods to work with dates.

```js 
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();
```

## Set Date Methods in JavaScript

The `Date` object provides methods to set different parts of a date.

```js
let currentDate = new Date();
currentDate.setFullYear(2022);
currentDate.setMonth(0);
currentDate.setDate(1);
currentDate.setHours(0);
currentDate.setMinutes(0);
currentDate.setSeconds(0);
```
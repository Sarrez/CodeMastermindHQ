---
sidebar_position: 13
tags: [CodeMasterMindHQ, set in  javascript, sets, sets in js]
---

# Sets in JavaScript

Sets are used to store unique values of any type.

```js
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.delete(2);

console.log(set.size);  // Size of the set
console.log(set.has(3));  // Check if an element exists
```
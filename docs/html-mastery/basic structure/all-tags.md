---
position: 2
---

# HTML tags

## All HTML Tags Starting A to Z with Explaination:

### starting with the letter "A"

Here's a comprehensive explanation of HTML tags starting with the letter "A," along with their use cases, code examples, and definitions. This will provide beginners with a better understanding of these tags and their various types:

1) `<a>` **(Anchor Tag):**
   - Definition: The anchor tag is used to create a hyperlink in HTML, allowing users to navigate to another web page or a specific section within the same page.
   - Use Case: Linking to external websites, internal page navigation, email addresses, and downloadable files.
   - Code Example 1: Linking to an External Website
     ```html
     <a href="https://www.example.com">Visit Example Website</a>
     ```
   - Code Example 2: Internal Page Navigation
     ```html
     <a href="#section1">Jump to Section 1</a>
     ```
   - Code Example 3: Email Link
     ```html
     <a href="mailto:example@example.com">Send Email</a>
     ```

2) `<abbr>` **(Abbreviation Tag):**
   - Definition: The abbreviation tag is used to markup abbreviations or acronyms in HTML, providing additional information or clarification.
   - Use Case: Indicating abbreviations that may be unfamiliar to users.
   - Code Example:
     ```html
     <abbr title="World Wide Web">WWW</abbr>
     ```

3) `<address>` **(Address Tag):**
   - Definition: The address tag represents contact information or details about the author or owner of a document or article.
   - Use Case: Displaying contact information, such as postal addresses.
   - Code Example:
     ```html
     <address>
       123 Example Street, City, Country
     </address>
     ```

4) `<area>` **(Image Map Area Tag):**
   - Definition: The area tag defines a clickable area within an image map, typically used in conjunction with the `<map>` tag.
   - Use Case: Creating interactive image maps with clickable regions.
   - Code Example:
     ```html
     <map name="exampleMap">
       <area shape="rect" coords="0,0,100,100" href="page1.html" alt="Page 1">
       <area shape="rect" coords="100,0,200,100" href="page2.html" alt="Page 2">
     </map>
     <img src="example.jpg" usemap="#exampleMap" alt="Example Image">
     ```

5) `<article>` **(Article Tag):**
   - Definition: The article tag represents a self-contained, independently distributable content piece within a document, such as a blog post or news article.
   - Use Case: Marking up individual articles or blog posts within a larger webpage.
   - Code Example:
     ```html
     <article>
       <h2>Article Title</h2>
       <p>Article content goes here...</p>
     </article>
     ```

6) `<aside>` **(Aside Tag):**
   - Definition: The aside tag defines content that is tangentially related to the main content, often represented as a sidebar or a separate section.
   - Use Case: Displaying supplementary information, such as related articles, author bio, or advertisements.
   - Code Example:
     ```html
     <aside>
       <h3>Related Articles</h3>
       <ul>
         <li><a href="article1.html">Article 1</a></li>
         <li><a href="article2.html">Article 2</a></li>
       </ul>
     </aside>
     ```

7) `<audio>` **(Audio Tag):**
   - Definition: The audio tag is used to embed audio content, such as music or podcasts, within an HTML document.
   - Use Case: Embedding and playing audio files on a webpage.
   - Code Example:
     ```html
     <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
     </audio>
     ```

<hr/>

### starting with the letter "B"

Here's a detailed explanation of HTML tags starting with the letter "B," along with their use cases, examples, and definitions. This will provide beginners with a better understanding of each tag and its purpose.

1) `<b>` - **Bold**
   - Use Case: The `<b>` tag is used to make text bold.
   - Example:
     ```html
     <p>This is <b>bold text</b>.</p>
     ```
   - Definition: The `<b>` tag represents a span of text that should be stylistically offset from the normal text, typically by making it appear bold.

2) `<base>` - **Base URL**
   - Use Case: The `<base>` tag specifies the base URL for all relative URLs in a document.
   - Example:
     ```html
     <head>
       <base href="https://www.example.com/" target="_blank">
     </head>
     ```
   - Definition: The `<base>` tag specifies the base URL and target for all relative URLs in the document.

3) `<bdo>` - **Bi-Directional Override**
   - Use Case: The `<bdo>` tag is used to override the text directionality of its parent element.
   - Example:
     ```html
     <p>This is English text. <bdo dir="rtl">هذا هو نص عربي</bdo></p>
     ```
   - Definition: The `<bdo>` tag overrides the current text directionality of its parent element and forces the text to be displayed in a specified direction.

4) `<blockquote>` - **Block Quotation**
   - Use Case: The `<blockquote>` tag is used to indicate a block quotation.
   - Example:
     ```html
     <blockquote>
       <p>This is a block quotation.</p>
     </blockquote>
     ```
   - Definition: The `<blockquote>` tag represents a section that is quoted from another source.

5) `<body>` - **Document Body**
   - Use Case: The `<body>` tag represents the content of an HTML document.
   - Example:
     ```html
     <body>
       <h1>Welcome to My Website</h1>
       <p>This is the content of my web page.</p>
     </body>
     ```
   - Definition: The `<body>` tag defines the main content of an HTML document.

6) `<br>` - **Line Break**
   - Use Case: The `<br>` tag is used to insert a line break.
   - Example:
     ```html
     <p>This is the first line.<br>This is the second line.</p>
     ```
   - Definition: The `<br>` tag inserts a single line break, breaking the current line of text and moving to the next line.

7) `<button>` - **Button**
   - Use Case: The `<button>` tag represents a clickable button.
   - Example:
     ```html
     <button onclick="myFunction()">Click Me</button>
     ```
   - Definition: The `<button>` tag defines a clickable button that can be used to trigger an action or event when clicked.

8) `<basefont>` - **Base Font Size**

   - Use Case: The `<basefont>` tag specifies the base font size for the document.
   - Example:
     ```html
     <basefont size="4">
     ```
   - Definition: The `<basefont>` tag sets the base font size for all text within the document.


9) `<big>` - **Bigger Text**

   - Use Case: The `<big>` tag is used to increase the size of the text.
   - Example:
     ```html
     <p>This text is <big>larger</big> than the normal size.</p>
     ```
   - Definition: The `<big>` tag increases the size of the text relative to the surrounding text.

10) `<bdi>` - **Bi-Directional Isolation**

    - Use Case: The `<bdi>` tag is used to isolate a span of text that might be formatted in a different direction from the surrounding text.
    - Example:
     ```html
     <p>This is English text. <bdi dir="rtl">هذا هو نص عربي</bdi></p>
     ```
   - Definition: The `<bdi>` tag isolates a span of text to format it in a different direction, ensuring that it doesn't affect the surrounding text's directionality.

11) `<bgsound>` - **Background Sound**

   - Use Case: The `<bgsound>` tag is used to embed background sound in a web page.
   - Example:
     ```html
     <bgsound src="sound.wav" loop="infinite">
     ```
   - Definition: The `<bgsound>` tag embeds background sound in a web page that can play continuously or for a specified number of times.

12) `<blink>` - **Blinking Text**
   
   - Use Case: The `<blink>` tag is used to make text blink.
   - Example:
     ```html   
        <blink>This text is blinking</blink>
     ```
   - Definition: The `<blink>` tag makes the enclosed text blink on and off in a web page.

<hr />

### starting with the letter "C"

Here's the content explaining various HTML tags starting with the letter "C" along with their use cases, definitions, types of tags, and relevant code examples for better understanding:

1) `<canvas>`
   - Definition: The `<canvas>` tag is used to draw graphics, animations, and other visual images on a web page using JavaScript.
   - Use Case: It is commonly used for creating interactive games, data visualization, and drawing applications.
   - Code Example:
     ```html
     <canvas id="myCanvas" width="500" height="300"></canvas>
     ```

2) `<caption>`
   - Definition: The `<caption>` tag is used to specify a caption or title for a table.
   - Use Case: It is used to provide a descriptive title for tables to improve accessibility and readability.
   - Code Example:
     ```html
     <table>
       <caption>Monthly Sales Report</caption>
       ...
     </table>
     ```

3) `<colgroup>`
   - Definition: The `<colgroup>` tag is used to group and format columns in a table.
   - Use Case: It allows you to apply common styling or formatting to multiple columns within a table.
   - Code Example:
     ```html
     <table>
       <colgroup>
         <col style="background-color: yellow;">
         <col style="background-color: cyan;">
       </colgroup>
       ...
     </table>
     ```

4) `<col>`
   - Definition: The `<col>` tag is used to define individual columns within a `<colgroup>` element.
   - Use Case: It allows you to specify specific styling or formatting for each column within a table.
   - Code Example:
     ```html
     <table>
       <colgroup>
         <col style="background-color: yellow;">
         <col style="background-color: cyan;">
       </colgroup>
       <tr>
         <td>Column 1</td>
         <td>Column 2</td>
       </tr>
       ...
     </table>
     ```

5) `<cite>`
   - Definition: The `<cite>` tag is used to indicate the title of a creative work or the name of a reference source.
   - Use Case: It is commonly used for citing books, articles, movies, or other creative works within the content.
   - Code Example:
     ```html
     <p><cite>The Great Gatsby</cite> by F. Scott Fitzgerald</p>
     ```

6) `<code>`
   - Definition: The `<code>` tag is used to define a piece of computer code or programming code within the content.
   - Use Case: It is commonly used to display HTML, CSS, JavaScript code snippets, or any other programming code.
   - Code Example:
     ```html
     <p>Use the <code>console.log()</code> function to display output in the browser console.</p>
     ```

7) `<colgroup>`
   - Definition: The `<colgroup>` tag is used to group and format columns in a table.
   - Use Case: It allows you to apply common styling or formatting to multiple columns within a table.
   - Code Example:
     ```html
     <table>
       <colgroup>
         <col style="background-color: yellow;">
         <col style="background-color: cyan;">
       </colgroup>
       ...
     </table>
     ```

8) `<command>`
   - Definition: The `<command>` tag is used to define a command button or icon within a menu or toolbar.
   - Use Case: It was previously used for creating buttons in a menu or toolbar, but it is now deprecated and not widely supported.

   - Code Example:
     ```html
     <command type="checkbox" label="Enable Notifications" checked></command>
     ```
9) `<content>`

   - Definition: The `<content>` tag was previously used to define the content to be distributed within a shadow DOM, but it is now deprecated and its use is discouraged.
   - Use Case: It was used for creating custom elements and encapsulating their content, but it has been replaced by other mechanisms like `<slot>` and `<template>` tags.
   - Code Example:
     ```html
     <template id="myTemplate">
       <h1>Custom Element Content</h1>
       <p>This is the content of my custom element.</p>
     </template>
     ```

 <hr/>

### starting with the letter "D"

Here's a comprehensive explanation of HTML tags starting with the letter "D," along with their use cases, code examples, and definitions. This will help beginners understand the different tags and their types in a pro way.

1) `<data>`
   - Definition: The `<data>` tag represents its contents as machine-readable data that is not displayed to the user directly.
   - Use Case: It is often used to store values or data associated with an element for JavaScript manipulation or other purposes.
   - Code Example: `<data value="42">The answer is 42</data>`

2) `<datalist>`
   - Definition: The `<datalist>` tag provides a predefined list of options for input elements (`<input>` with `type="text"` or `type="search"`).
   - Use Case: It allows users to choose from a list of suggested values while typing into an input field.
   - Code Example:
     ```html
     <input list="fruits">
     <datalist id="fruits">
       <option value="Apple">
       <option value="Banana">
       <option value="Orange">
       <option value="Mango">
     </datalist>
     ```

3) `<dd>`
   - Definition: The `<dd>` tag defines a description in a description list (`<dl>`).
   - Use Case: It is typically used to provide additional information or descriptions related to a term defined by the `<dt>` tag.
   - Code Example:
     ```html
     <dl>
       <dt>HTML</dt>
       <dd>The standard markup language for creating web pages</dd>
       <dt>CSS</dt>
       <dd>The language used to style the appearance of web pages</dd>
     </dl>
     ```

4) `<del>`
   - Definition: The `<del>` tag represents text that has been deleted or removed from a document.
   - Use Case: It is often used to show strikethrough text to indicate deleted or outdated content.
   - Code Example: `<p>Our previous price was <del>$100</del> $80</p>`

5) `<details>`
   - Definition: The `<details>` tag creates a disclosure widget that can be used to show or hide additional content.
   - Use Case: It is commonly used to create expandable sections or collapsible content, such as FAQs or dropdowns.
   - Code Example:
     ```html
     <details>
       <summary>Click to show more</summary>
       <p>Additional content goes here</p>
     </details>
     ```

6) `<dfn>`
   - Definition: The `<dfn>` tag represents the defining instance of a term in a document.
   - Use Case: It is used to mark terms that need to be defined or emphasized within the context of the document.
   - Code Example: `<p><dfn>HTML</dfn> stands for Hypertext Markup Language</p>`

7) `<dialog>`
   - Definition: The `<dialog>` tag represents a dialog box or a part of a dialog box in a document.
   - Use Case: It is used to create modal dialogs or pop-up windows for displaying important information or user interactions.
   - Code Example:
     ```html
     <dialog open>
       <p>This is a dialog box.</p>
       <button>Close</button>
     </dialog>
     ```

8) `<div>`
   - Definition: The `<div>` tag is a generic container that is used to group and style HTML elements.
   - Use Case: It is one of the most commonly used tags and acts as a block-level container for organizing and styling content.
   - Code Example: `<div class="container">Content goes here</div>`


9) `<dl>`
   - Definition: The `<dl>` tag represents a description list, which consists of a series of term/definition pairs.
   - Use Case: It is commonly used for glossaries, dictionaries, or any other scenario where terms and their corresponding definitions need to be presented together.
   - Code Example:
     ```html
     <dl>
       <dt>HTML</dt>
       <dd>The standard markup language for creating web pages</dd>
       <dt>CSS</dt>
       <dd>The language used to style the appearance of web pages</dd>
     </dl>
     ```

10) `<dt>`
  
   - Definition: The `<dt>` tag defines a term in a description list (`<dl>`).
   - Use Case: It is used to label or identify the term that is being defined in conjunction with the `<dd>` tag.
   - Code Example: 
      ```html
       <dl>
         <dt>HTML</dt>
         <dd>The standard markup language for creating web pages</dd>
         <dt>CSS</dt>
         <dd>The language used to style the appearance of web pages</dd>
       </dl>
      ```

11) `<data-*>`
  - Definition: The `<data-*>` attributes provide a way to store custom data attributes on HTML elements.
  - Use Case: It allows developers to attach additional data to elements, which can be accessed and manipulated using JavaScript.
  - Code Example: 
     ```html
     <div data-category="product" data-id="12345">...</div>
     ```

12) `<dir>` (Deprecated)
  - Definition: The `<dir>` tag was used to create a directory list, displaying the contents of a directory.
  - Use Case: It is now deprecated and should not be used in modern HTML documents. Instead, `<ul>` or `<ol>` tags are preferred for creating lists.
  - Code Example (Deprecated, for reference only):
      ```html
      <dir>
        <li>File 1</li>
        <li>File 2</li>
        <li>File 3</li>
      </dir>
      ```


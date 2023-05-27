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
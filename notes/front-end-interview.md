# Front-End Interview

- `flex-grow: number` defines the space each flex element occupies. If not written manually, it is set to `1`, so all the items occupy the same fraction of space.
- Decorative images should always have an empty `alt` attribute
- `alt` attribute in images is really important for SEO purposes
- _Cache busting_ is to force the browser to download new files that may have been stored on the client side. Can be done by appending `?=v2` to the script in our file, for example
- `@media` properties -> `all`, `screen`, `print`, `speech`
- Primitives (strings and numbers) are compared by their value, while objects are compared by their reference (location in memory)
- XSS is a _cross-site scripting attack_. The attacker injects malicious code to our site, client-side. To prevent it:
  1. use `textContent` instead of `innerHTML`
  2. escape HTML tags on the server
- `var` should be avoided whenever possible and prefer `const` as the default declaration statement for all variables unless they will be reassigned later, then use `let` if so.
- CSS size -> `em` is relative to the parent element, while `rem` is relative to the root element (html, usually 16px)
- About JS expressions and statements ->
  - > If you can print it or assign it to a variable, it’s an expression. If you can’t, it’s a statement.
- **6 FALSY VALUES**: `NaN`, `0`, `undefined`, `false`, `''`, `null`
- Semicolons are not required in Javascript, only in some edge cases. The interpreter will add them automatically.
- HOISTING:
  - > No matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
- JS ASI: Automatic Semicolon Insertion that can lead to bugs.
- Difference between `defer` and `async` in a `<script>` tag:
  - > The `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it.
  - > The `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing.
- `rel="noopener"` prevents opened links from manipulating the source page. Should always put in `<a>` tags.
- Javascript data types:
  - Primitive
    1. Boolean
    2. Null
    3. Undefined
    4. Number
    5. String
    6. Symbol (newly added)
  - Non-primitive
    1. Object
    - Array
    - Date
    - function
- The `Object.create()` method creates a new object, using an existing object to provide the newly created object's `__proto__`.
- The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
- Difference between `null` and `undefined` -> `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.
- CSS specificity:
  - Value matrix: `[inline, id, class/pseudo-class/attribute, tag/pseudo-element]`
  - In cases of equal specificity, the last rule is applied
- Storing data in a user's browser. Before it was done with cookies, but these methods are faster and allow more size (5mb)
  1. `localStorage`
  - Data is permanent
  2. `sessionStorage`
  - When the user closes window or tab, the data is deleted
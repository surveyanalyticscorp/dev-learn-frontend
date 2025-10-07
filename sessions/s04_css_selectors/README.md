# A Guide to CSS Selectors: From Basic to Advanced

This guide provides a comprehensive overview of CSS selectors, ranging from the most basic to more advanced concepts. Understanding selectors is fundamental to mastering CSS, as they are the patterns used to select and style HTML elements. Each section includes explanations, code examples, and a link to the relevant MDN (Mozilla Developer Network) documentation for a deeper dive.

You can find the class recordings and materials for this session here: [CSS Selectors Session](https://drive.google.com/drive/folders/1NCXyMxOLUKR__0Z3QhOX3ZMlPRy4z4N8?usp=drive_link)

## Table of Contents

1. [What is a CSS Selector?](what-is-a-css-selector)
2. [Basic Selectors](basic-selectors)
      * [Type (or Tag Name) Selector](https://www.google.com/search?q=%23type-or-tag-name-selector)
      * [Class Selector](https://www.google.com/search?q=%23class-selector)
      * [ID Selector](id-selector)
      * [Universal Selector](universal-selector)
      * [Grouping Selector](grouping-selector)
3. [Attribute Selectors](attribute-selectors)
4. [Combinators](combinators)
      * [Descendant Combinator](descendant-combinator-space)
      * [Child Combinator](child-combinator-)
      * [General Sibling Combinator](general-sibling-combinator-)
      * [Adjacent Sibling Combinator](adjacent-sibling-combinator-)
5. [Pseudo-classes](pseudo-classes)
      * [Dynamic Pseudo-classes](dynamic-pseudo-classes)
      * [Structural Pseudo-classes](structural-pseudo-classes)
      * [Input Pseudo-classes](input-pseudo-classes)
6. [Pseudo-elements](pseudo-elements)
7. CSS Specificity
      * [The Specificity Hierarchy](the-specificity-hierarchy)
      * [Calculating Specificity](calculating-specificity)
      * [The `!important` Exception](the-important-exception)

-----

## What is a CSS Selector?

A CSS selector is the part of a CSS rule that identifies which HTML element(s) will be styled. The rule consists of a selector and a declaration block.

```css
/* h1   is the selector */
/* { ... } is the declaration block */
h1 {
  color: steelblue;
  font-size: 2em;
}
```

## Basic Selectors

These are the most common and straightforward selectors you will use.

### Type (or Tag Name) Selector

Selects all elements that have the given node name.

* **Syntax**: `elementname`
* **Example**: Selects all `<p>` elements.

    ```css
    p {
      line-height: 1.5;
    }
    ```

* **MDN Link**: [Type selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)

### Class Selector

Selects all elements with the given `class` attribute.

* **Syntax**: `.classname`
* **Example**: Selects all elements with `class="highlight"`.

    ```css
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    ```

* **MDN Link**: [Class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

### ID Selector

Selects a single element with the given `id` attribute. An `id` should be unique within a page.

* **Syntax**: `#idname`
* **Example**: Selects the element with `id="main-header"`.

    ```css
    #main-header {
      border-bottom: 2px solid black;
    }
    ```

* **MDN Link**: [ID selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)

### Universal Selector

Selects all elements of any type.

* **Syntax**: `*`
* **Example**: Applies a box-sizing rule to every single element.

    ```css
    * {
      box-sizing: border-box;
    }
    ```

* **MDN Link**: [Universal selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)

### Grouping Selector

Applies the same styles to multiple selectors by listing them, separated by commas.

* **Syntax**: `selector1, selector2, ...`
* **Example**: Applies styles to all `<h1>`, `<h2>`, and `<h3>` elements.

    ```css
    h1, h2, h3 {
      font-family: 'Georgia', serif;
      color: #333;
    }
    ```

* **MDN Link**: [Selector list](https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list)

## Attribute Selectors

These selectors target elements based on the presence or value of their HTML attributes.

* **Syntax**: `[attr]`, `[attr=value]`, `[attr~=value]`, `[attr|=value]`, `[attr^=value]`, `[attr$=value]`, `[attr*=value]`
* **Examples**:

    ```css
    /* Selects all <a> elements with a 'target' attribute */
    a[target] {
      text-decoration: none;
    }

    /* Selects all <input> elements with type="submit" */
    input[type="submit"] {
      background-color: green;
      color: white;
    }

    /* Selects <a> elements whose href starts with "https://" */
    a[href^="https://"] {
      color: teal;
    }

    /* Selects <img> elements whose src ends with ".png" */
    img[src$=".png"] {
      border: 1px solid #ccc;
    }
    ```

* **MDN Link**: [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

## Combinators

Combinators are used to create more complex selectors by defining relationships between them.

### Descendant Combinator (`     `)

* **Syntax**: `selector1 selector2`
* **Description**: Selects all `selector2` elements that are descendants (children, grandchildren, etc.) of `selector1`.
* **Example**: Selects all `<a>` elements inside a `<li>` element.

    ```css
    li a {
      color: red;
    }
    ```

* **MDN Link**: [Descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)

### Child Combinator (`>`)

* **Syntax**: `selector1 > selector2`
* **Description**: Selects all `selector2` elements that are direct children of `selector1`.
* **Example**: Selects only the `<p>` elements that are direct children of an `<article>`.

    ```css
    article > p {
      font-style: italic;
    }
    ```

* **MDN Link**: [Child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)

### General Sibling Combinator (`~`)

* **Syntax**: `selector1 ~ selector2`
* **Description**: Selects all `selector2` elements that are siblings of and come after `selector1` (they share the same parent).
* **Example**: Selects all `<p>` elements that follow an `<h2>`.

    ```css
    h2 ~ p {
      margin-left: 20px;
    }
    ```

* **MDN Link**: [General sibling combinator](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)

### Adjacent Sibling Combinator (`+`)

* **Syntax**: `selector1 + selector2`
* **Description**: Selects the `selector2` element that is the very next sibling of `selector1`.
* **Example**: Selects the `<p>` element that comes immediately after an `<h2>`.

    ```css
    h2 + p {
      font-weight: bold;
      margin-top: 0;
    }
    ```

* **MDN Link**: [Adjacent sibling combinator](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)

## Pseudo-classes

A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).

* **Syntax**: `selector:pseudo-class`

### Dynamic Pseudo-classes

These are often related to user interaction.

* `:hover`: Selects an element when the user's mouse pointer is over it.
* `:active`: Selects an element when it is being activated (e.g., clicked).
* `:focus`: Selects an element that has keyboard focus.
* `:link` & `:visited`: Style links based on whether they have been visited.
* **Example**:

    ```css
    button:hover {
      background-color: lightgray;
    }
    input:focus {
      outline: 2px solid dodgerblue;
    }
    ```

* **MDN Link**: [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

### Structural Pseudo-classes

These select elements based on their position in the document tree.

* `:first-child`: Selects the first element among a group of siblings.
* `:last-child`: Selects the last element among a group of siblings.
* `:nth-child(n)`: Selects elements based on their position using a formula.
* `:nth-of-type(n)`: Selects elements of a specific type based on their position.
* `:not(selector)`: Selects every element that is not the specified selector.
* **Example**:

    ```css
    /* Style the first paragraph in any container */
    p:first-child {
      font-weight: bold;
    }

    /* Style every odd-numbered list item */
    li:nth-child(odd) {
      background-color: #f2f2f2;
    }

    /* Style all list items except the .special one */
    li:not(.special) {
      color: #555;
    }
    ```

* **MDN Links**:
  * [`:first-child`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/CSS/:first-child%5D\(https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child\))
  * [`:nth-child()`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child%5D\(https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child\))
  * [`:not()`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/CSS/:not%5D\(https://developer.mozilla.org/en-US/docs/Web/CSS/:not\))

### Input Pseudo-classes

These relate to the state of form elements.

* `:checked`: Selects radio buttons or checkboxes that are checked.
* `:disabled`: Selects input elements that are disabled.
* `:enabled`: Selects input elements that are enabled.
* `:required`: Selects input elements with the `required` attribute.
* **Example**:

    ```css
    input[type="checkbox"]:checked + label {
      text-decoration: line-through;
    }

    input:disabled {
      opacity: 0.5;
    }
    ```

* **MDN Link**: [`:checked`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/CSS/:checked%5D\(https://developer.mozilla.org/en-US/docs/Web/CSS/:checked\))

## Pseudo-elements

A pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).

* **Syntax**: `selector::pseudo-element` (Note the double-colon `::` notation, which distinguishes pseudo-elements from pseudo-classes).

* `::before`: Creates a pseudo-element that is the first child of the selected element. Often used with the `content` property.

* `::after`: Creates a pseudo-element that is the last child of the selected element.

* `::first-line`: Styles the first line of a block-level element.

* `::first-letter`: Styles the first letter of a block-level element.

* `::selection`: Styles the portion of a document that has been highlighted by the user.

* **Example**:

    ```css
    /* Add a quote icon before every blockquote */
    blockquote::before {
      content: "\201C"; /* Left double quotation mark */
      font-size: 2em;
      margin-right: 5px;
    }

    /* Style the first letter of every paragraph inside an article */
    article p::first-letter {
      font-size: 2.5em;
      float: left;
      margin-right: 0.1em;
      line-height: 1;
    }
    ```

* **MDN Link**: [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

## Understanding CSS Specificity

When multiple CSS rules target the same element, the browser needs a way to decide which rule to apply. This decision-making process is governed by **specificity**. It is a weight or score that a selector receives, and the selector with the highest score wins.

### The Specificity Hierarchy

Specificity is calculated based on a hierarchy of selector types. From highest to lowest precedence:

1. **Inline Styles**: Styles applied directly to an element using the `style` attribute (e.g., `<p style="color: red;">`).
2. **ID Selectors**: Selectors that target an element by its `id` (e.g., `#main-content`).
3. **Classes, Attribute Selectors, and Pseudo-classes**: This group includes `.class-name`, `[type="submit"]`, and `:hover`.
4. **Type Selectors and Pseudo-elements**: This includes element/tag names (e.g., `p`, `div`) and pseudo-elements (e.g., `::before`).

The universal selector (`*`) and combinators (`+`, `>`, `~`, `     `) have no effect on specificity.

### Calculating Specificity

A common way to visualize specificity is with a score, often represented as `(IDs, Classes, Elements)`. You count the number of selectors from each category.

* **HTML**: `<button id="submitBtn" class="btn primary">Click Me</button>`

* **CSS and Specificity Scores**:

    ```css
    /* Specificity: (0, 0, 1) -> Low */
    button {
      color: black;
    }

    /* Specificity: (0, 1, 0) -> Higher */
    .btn {
      color: blue;
    }

    /* Specificity: (0, 2, 1) -> Even Higher */
    button.btn.primary {
      color: green;
    }

    /* Specificity: (1, 0, 0) -> Highest */
    #submitBtn {
      color: red;
    }
    ```

In the example above, the button text will be **red** because the ID selector `#submitBtn` has the highest specificity score, overriding all other `color` rules. When two selectors have the same specificity, the one that appears later in the CSS file takes precedence.

### The `!important` Exception

A special declaration, `!important`, can be added to a CSS property to override *all* other declarations, regardless of their specificity. It even overrides inline styles.

* **Syntax**: `property: value !important;`
* **Example**:

    ```css
    .btn {
      color: blue !important; /* This will be applied over the ID selector */
    }

    #submitBtn {
      color: red;
    }
    ```

    In this case, the button text will be **blue**.

**Caution**: Using `!important` should be avoided whenever possible. It makes debugging difficult and breaks the natural cascade of your stylesheet. It is best reserved as a last resort for overriding external CSS or troubleshooting.

* **MDN Link**: [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

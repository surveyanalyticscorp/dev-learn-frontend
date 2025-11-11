# CSS Selectors Workshop

This project demonstrates mastery of CSS selectors through 9 practical tasks without modifying HTML structure.

## Completed Tasks

### Task 1: External Links

Added an arrow icon after external links using the `[target="_blank"]` attribute selector with `::after` pseudo-element.

### Task 2: Required Fields

Marked required form fields with a red asterisk using `:has()` pseudo-class to detect adjacent required inputs.

### Task 3: Zebra List

Created alternating background colors for list items using `:nth-child(even)` pseudo-class for improved readability.

### Task 4: Adjacent Highlight

Highlighted paragraphs immediately following `<h2>` elements using the adjacent sibling combinator (`h2 + p`).

### Task 5: First/Last Styling

Applied distinct styling to the first and last `.box` elements using `:first-child` and `:last-child` pseudo-classes.

### Task 6: Form Validation

Implemented visual feedback for form fields using `:has()` with `:invalid` and `:valid` pseudo-classes for dynamic validation states.

### Task 7: Card Actions

Targeted the second button in cards containing images using `:has(img)` combined with `:nth-of-type()` selector.

### Task 8: Nested Menu

Styled direct child menu items differently from nested items using the child combinator (`>`) and descendant selectors with hover states.

### Task 9: Auto Counters

Implemented automatic numbering for step items using CSS counters (`counter-reset`, `counter-increment`) with styled circular badges.

## Key Selector Techniques Used

- **Attribute Selectors**: `[target="_blank"]`, `[required]`
- **Pseudo-classes**: `:nth-child()`, `:first-child`, `:last-child`, `:has()`, `:invalid`, `:valid`, `:hover`, `:nth-of-type()`
- **Pseudo-elements**: `::before`, `::after`
- **Combinators**: Adjacent sibling (`+`), Child (`>`), Descendant (space)
- **CSS Counters**: `counter-reset`, `counter-increment`, `counter()`

## Implementation Highlights

All solutions follow best practices:

- No HTML modifications required
- Pure CSS selector-based solutions
- Modern pseudo-classes including `:has()`
- Smooth transitions and hover effects
- Semantic and accessible approach

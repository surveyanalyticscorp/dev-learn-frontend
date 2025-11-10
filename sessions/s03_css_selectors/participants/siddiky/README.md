# Interactive List Hover Effects

This project demonstrates advanced CSS selector techniques to create layered hover interactions on a list without modifying HTML.

## Implementation

The solution creates a sophisticated hover effect system where hovering over any list item affects multiple elements in different ways:

### Hover States

1. **Hovered Item**:

   - Bold red color (#c53030)
   - Scales up to 105% with translation
   - Enhanced box shadow for depth
   - Background changes to light red (#fff5f5)

2. **Previous Adjacent Sibling**:

   - Green color (#38a169)
   - Scales to 103% with translation
   - Light green background (#f0fff4)

3. **Second Previous Sibling**:

   - Green color with 75% opacity
   - Slight scale (101%)
   - Light green background

4. **Next Adjacent Sibling**:

   - Blue color (#3182ce)
   - Scales to 103% with translation
   - Light blue background (#ebf8ff)

5. **Second Next Sibling**:

   - Blue color with 75% opacity
   - Slight scale (101%)
   - Light blue background

6. **Other Items**:
   - Reduced to 40% opacity
   - Gray background for contrast

## Key Techniques

- **`:has()` Pseudo-class**: Used to detect when any list item is being hovered
- **Adjacent Sibling Combinator (`+`)**: Targets the next sibling element
- **Chained Combinators**: `+ li + li` to reach second-level siblings
- **`:has(+ li:hover)`**: Selects items that have a hovered sibling after them
- **CSS Transitions**: Smooth cubic-bezier animation for all state changes
- **Transform Combinations**: Scale and translate for layered visual effects

## Design Features

- Modern gradient background
- Card-style list container with shadow
- Smooth cubic-bezier transitions
- Accessible color contrast
- Responsive scaling effects

This implementation showcases modern CSS selector capabilities including the powerful `:has()` pseudo-class for parent and sibling selection.

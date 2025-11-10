# CSS Positioning Lab

This project demonstrates comprehensive mastery of CSS positioning techniques through 12 progressively challenging tasks.

## Completed Tasks

### Task 1: Relative Positioning

Moved the middle box 20px down and 10px right using `position: relative` without affecting the layout of surrounding elements.

### Task 2: Absolute Positioning

Positioned the yellow circle in the bottom-right corner of its parent container using `position: absolute` with `bottom: 0` and `right: 0`.

### Task 3: Fixed Positioning

Created a navigation bar that stays fixed at the top of the viewport using `position: fixed` with full-width spanning.

### Task 4: Z-Index Stacking

Demonstrated layering control with z-index, creating a visual stack with green on top (z-index: 3), red in middle (z-index: 2), and blue on bottom (z-index: 1).

### Task 5: Modal Overlay

Implemented a full-screen modal overlay using `position: fixed` with `inset: 0` to cover the entire viewport.

### Task 6: Sticky Positioning

Created a header that sticks to the top when scrolling within its container using `position: sticky` with `top: 0`.

### Task 7: Notification Badge

Positioned a notification badge outside the top-right corner of an icon using absolute positioning with negative offsets.

### Task 8: Floating Action Button

Built a FAB positioned in the bottom-right corner of its container with a hover-activated menu that appears above the button.

### Task 9: Multi-layer Tooltip

Created a tooltip positioned 10px below a button, centered horizontally, with an arrow pointer using absolute positioning and transform centering.

### Task 10: Multi-level Dropdown Menu

Implemented a complex dropdown system where main menus appear below triggers and submenus open to the right using nested absolute positioning.

### Task 11: Page-level FAB

Fixed a FAB to the bottom-right corner of the entire viewport (not just a container) that stays visible while scrolling.

### Task 12: Human Figure (Bonus)

Assembled body parts (head, torso, arms, legs) into a human figure using absolute positioning and CSS transforms for rotation.

## Key Positioning Concepts

- **Static**: Default positioning (not explicitly used)
- **Relative**: Positioned relative to normal position, preserving space in flow
- **Absolute**: Positioned relative to nearest positioned ancestor, removed from flow
- **Fixed**: Positioned relative to viewport, stays in place while scrolling
- **Sticky**: Toggles between relative and fixed based on scroll position

## Advanced Techniques

- Using `inset` shorthand for top/right/bottom/left
- Centering with `transform: translate()`
- Z-index stacking contexts
- Transform-origin for rotations
- Combining positioning with flexbox for alignment
- Negative positioning for overlapping effects
- Viewport units for full-screen elements

## Implementation Highlights

All solutions are:

- Production-ready and cross-browser compatible
- Optimized for performance
- Semantically structured
- Accessible with proper layering
- Responsive to container and viewport changes

This project showcases the full spectrum of CSS positioning capabilities from basic offsets to complex multi-layered layouts.

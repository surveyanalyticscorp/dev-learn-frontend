# CSS Positioning Lab

Learn CSS positioning through hands-on practice with 7 focused tasks covering `relative`, `absolute`, `fixed`, `sticky` positioning and `z-index` stacking.

## Getting Started

1. **Work in `task.css`** - Add your solutions to the provided selectors
2. **View in browser** - Open `index.html` to see your progress
3. **Check solutions** - Uncomment `solution.css` link when ready to compare

## Tasks Overview

### Task 1: Relative Positioning
**Goal:** Move the middle blue box 20px down and 10px right  
**Key Concept:** `position: relative` moves elements from their normal position without affecting layout flow

### Task 2: Absolute Positioning  
**Goal:** Position the yellow circle in the bottom-right corner of its container  
**Key Concept:** `position: absolute` positions relative to the nearest positioned parent

### Task 3: Fixed Positioning
**Goal:** Make the navigation bar stick to the top of the viewport when scrolling  
**Key Concept:** `position: fixed` positions relative to the viewport, always visible

### Task 4: Z-Index Stacking
**Goal:** Control stacking order - Green on top, Red in middle, Blue on bottom  
**Key Concept:** Higher `z-index` values appear on top (only works with positioned elements)

### Task 5: Modal Overlay
**Goal:** Create a full-screen modal that covers the entire viewport  
**Key Concept:** Combine `position: fixed` with full dimensions and high `z-index`

### Task 6: Sticky Positioning
**Goal:** Make the header stick to top when scrolling within its container  
**Key Concept:** `position: sticky` switches between relative and fixed based on scroll

### Task 7: Badge Positioning
**Goal:** Position the notification badge outside the top-right corner of the icon  
**Key Concept:** Use relative parent + absolute child with negative positioning

## Tips for Success

- **Use DevTools:** Inspect elements to understand current positioning
- **Test interactively:** Scroll, click, and hover to test your solutions
- **Start simple:** Get basic positioning working before fine-tuning
- **Think about stacking:** Remember that `z-index` only works on positioned elements

## Common Positioning Values

```css
/* Relative - moves from normal position */
position: relative;
top: 20px; left: 10px;

/* Absolute - positions relative to nearest positioned parent */
position: absolute;
bottom: 0; right: 0;

/* Fixed - positions relative to viewport */
position: fixed;
top: 0; left: 0;

/* Sticky - relative until scroll threshold, then fixed */
position: sticky;
top: 0;
```

## Checking Your Work

Each task is contained in its own card for easy testing. Your changes in `task.css` will be immediately visible when you refresh the page.

Good luck! 🎯
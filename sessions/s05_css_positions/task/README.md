# CSS Positioning Lab

Learn CSS positioning through hands-on practice with 12 tasks covering `relative`, `absolute`, `fixed`, `sticky`, multi-layer stacking, advanced UI patterns (FABs, tooltips, multi-level dropdowns), and a bonus composition challenge.

## Getting Started

1. **Work in `task.css`** - Add your solutions to the provided selectors
2. **View in browser** - Open `index.html` to see your progress
3. **Check solutions** - Uncomment the `<link rel="stylesheet" href="solution.css">` line in `index.html` (near the top) when you're ready to compare. Re-comment it to hide answers again.

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

### Task 8: Floating Action Button (Container)
**Goal:** Place a FAB in the bottom-right of its scrollable demo container (20px from edges) with a menu that appears above on hover  
**Key Concept:** `position: absolute` inside a positioned container + stacking menu items vertically above using `bottom: 100%`

### Task 9: Multi-layer Tooltip
**Goal:** Show a tooltip 10px below the trigger button, centered horizontally, with an upward-pointing arrow  
**Key Concept:** Parent relative; tooltip absolutely positioned with `top: 100%` and transform centering; arrow uses CSS borders

### Task 10: Multi-level Dropdown
**Goal:** Display a dropdown below its trigger; nested submenus appear to the right and stay visible while moving between levels  
**Key Concept:** Layered absolute positioning (`top: 100%` for menus, `left: 100%` for submenus) + managing hover gaps

### Task 11: Page-level FAB (Viewport)
**Goal:** Fix a FAB to the bottom-right of the entire viewport, independent of page scroll  
**Key Concept:** `position: fixed` vs. container-scoped absolute positioning

### Task 12: Human Figure Composition (Bonus)
**Goal:** Assemble divs into a stylized human figure (head, torso, arms, legs) without altering HTML  
**Key Concept:** Relative parent + multiple absolutely positioned children using coordinates, transforms, and stacking for overlap

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
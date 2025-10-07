# CSS Positioning Lab

Learn CSS positioning through hands-on practice with 12 tasks covering `relative`, `absolute`, `fixed`, `sticky`, stacking contexts, advanced UI patterns (FABs, tooltips, multi-level dropdowns), and a bonus composition challenge.

## Important Rules

- **ONLY edit `task.css`.** That is your working file.
- **Do NOT modify**: `index.html`, `base.css`, `solution.css` (or add new files).
- The `solution.css` file is linked for reference. Treat it as a reference only—do not change or rely on it while solving. (In a real exercise environment it may be commented out.)
- If you locally comment out the solution link to practice, do **not** commit that change.

## Getting Started

1. Open `index.html` in your browser.
2. Implement each task inside the placeholder blocks in `task.css`.
3. Refresh to see results—no build step needed.
4. When you want to check an answer, visually compare with how the page should look (or temporarily inspect `solution.css`).

## Task Summary & Target Selectors
| # | Topic | You Will Edit Selector(s) |
|---|-------|---------------------------|
| 1 | Relative offset | `.middle-box` |
| 2 | Absolute inside parent | `.parent-container`, `.circle` |
| 3 | Fixed to viewport | `.navbar` |
| 4 | Stacking & z-index | `.stack-container`, `.stack-box`, `.green-box`, `.red-box`, `.blue-box` |
| 5 | Full-screen modal | `.modal-overlay` |
| 6 | Sticky inside scroll box | `.sticky-header` |
| 7 | Corner badge | `.icon-wrapper`, `.badge` |
| 8 | In-container FAB | `.fab-container`, `.fab-menu`, `.fab-item` |
| 9 | Tooltip + arrow | `.tooltip-wrapper`, `.tooltip-box`, `.tooltip-arrow`, `.tooltip-content` |
|10 | Multi-level dropdown | `.dropdown-item`, `.dropdown-menu`, `.dropdown-submenu` |
|11 | Viewport FAB | `.page-fab` |
|12 | Human figure (bonus) | `.human-stage`, `.human-wrapper`, `.human-head`, `.human-body`, `.human-arm`, `.human-leg`, `.human-arm.left-arm`, `.human-arm.right-arm`, `.human-leg.left-leg`, `.human-leg.right-leg` |

## Task Details (Goals & Key Concepts)

### 1. Relative Positioning
Move the middle blue box 20px down and 10px right using `position: relative` (does not affect siblings' layout).

### 2. Absolute Positioning
Place the yellow circle in the bottom-right of its container. Parent must be positioned (`relative`).

### 3. Fixed Positioning
Pin the navigation bar to the top of the viewport (`position: fixed; top:0; left:0; right:0;`).

### 4. Z-Index Stacking
Overlap the three colored boxes (green top, red middle, blue bottom) using absolute positioning + `z-index`.

### 5. Modal Overlay
Full-screen overlay centered content: fixed positioning + full coverage + high `z-index`.

### 6. Sticky Header
Header sticks when scrolled to the top within its scrollable container (`position: sticky; top:0;`).

### 7. Notification Badge
Badge sits slightly outside (negative offset) of the icon's top-right corner. Parent relative; badge absolute.

### 8. Floating Action Button (Container Scope)
FAB anchored bottom-right (20px inset) of scrolling demo container; on hover, menu items appear upward (`bottom:100%`).

### 9. Multi-layer Tooltip
Tooltip appears 10px below trigger, horizontally centered. Arrow positioned at tooltip top pointing to trigger.

### 10. Multi-level Dropdown
Main menu below trigger (`top:100%`). Submenus open to the right (`left:100%`, slight vertical alignment tweak).

### 11. Page-level FAB
FAB fixed to the viewport bottom-right, unaffected by container scrolling.

### 12. Human Figure (Bonus)
Assemble a simple figure: wrapper relative; head/body/arms/legs absolutely positioned with rotations and transform origins.

## Tips for Success
- Use DevTools to toggle and visualize offsets & stacking.
- Establish positioning context early (`position: relative` on the parent when needed).
- Apply shared properties to common selectors (e.g., base `.human-arm` then specialize left/right variants).
- `z-index` works only on positioned elements (non-static).
- Keep solutions minimal—only the properties required for positioning.

## Common Positioning Patterns
```css
/* Relative offset */
.relative-example { position: relative; top: 20px; left: 10px; }

/* Absolute inside nearest positioned ancestor */
.parent { position: relative; }
.child  { position: absolute; bottom: 0; right: 0; }

/* Fixed to viewport */
.banner { position: fixed; top: 0; left: 0; width: 100%; }

/* Sticky within scroll container */
.sticky { position: sticky; top: 0; }
```

## Checking Your Work
Each task lives in its own card in the page. Update `task.css`, refresh, and verify visually. For learning, you may compare with `solution.css`—but do not copy blindly.

## Do Not Touch
`index.html`, `base.css`, `solution.css` — leave them unchanged. Only `task.css` should be edited.

Good luck & have fun mastering layout control! 🎯

# 🎯 CSS Positioning Lab - Complete Solution Guide

This guide explains each task, the positioning concepts used, and the implementation details.

---

## 📚 Table of Contents

1. [Task 1: Relative Positioning](#task-1-relative-positioning)
2. [Task 2: Absolute Positioning](#task-2-absolute-positioning)
3. [Task 3: Fixed Positioning](#task-3-fixed-positioning)
4. [Task 4: Z-Index Stacking](#task-4-z-index-stacking)
5. [Task 5: Modal Overlay](#task-5-modal-overlay)
6. [Task 6: Sticky Positioning](#task-6-sticky-positioning)
7. [Task 7: Badge Positioning](#task-7-badge-positioning)
8. [Task 8: In-Container FAB](#task-8-in-container-fab)
9. [Task 9: Tooltip](#task-9-tooltip)
10. [Task 10: Dropdown Menu](#task-10-dropdown-menu)
11. [Task 11: Page-Level FAB](#task-11-page-level-fab)
12. [Task 12: Human Figure (Bonus)](#task-12-human-figure-bonus)

---

## Task 1: Relative Positioning

### 🎯 Goal

Move the middle blue box 20px down and 10px right without affecting other boxes.

### 📖 Concept

**Relative positioning** moves an element from its normal position while preserving the space it originally occupied.

### 💻 Solution

```css
.middle-box {
  position: relative;
  top: 20px;
  left: 10px;
}
```

### 🔑 Key Points

- Element moves relative to its **original position**
- Original space is **preserved** (ghost space remains)
- Other elements are **not affected**
- Uses `top`, `right`, `bottom`, `left` for offset

---

## Task 2: Absolute Positioning

### 🎯 Goal

Position the yellow circle in the bottom-right corner of the blue container.

### 📖 Concept

**Absolute positioning** removes an element from normal flow and positions it relative to its nearest positioned ancestor.

### 💻 Solution

```css
.parent-container {
  position: relative;
}
.circle {
  position: absolute;
  bottom: 0;
  right: 0;
}
```

### 🔑 Key Points

- Parent needs `position: relative` (or any positioned value)
- Child is positioned relative to the **parent's edges**
- Element is **removed from document flow**
- `bottom: 0; right: 0` anchors to bottom-right corner

---

## Task 3: Fixed Positioning

### 🎯 Goal

Make the navigation bar stick to the top of the viewport when scrolling.

### 📖 Concept

**Fixed positioning** anchors an element to the viewport. It stays in place during scrolling.

### 💻 Solution

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
```

### 🔑 Key Points

- Positioned relative to the **viewport**, not any parent
- Stays fixed during **scroll**
- `left: 0; right: 0` makes it span full width
- High `z-index` ensures it appears above other content

---

## Task 4: Z-Index Stacking

### 🎯 Goal

Stack boxes on top of each other: Green (top), Red (middle), Blue (bottom).

### 📖 Concept

**Z-index** controls the stacking order of positioned elements (only works with positioned elements).

### 💻 Solution

```css
.stack-container {
  position: relative;
}
.stack-box {
  position: absolute;
}
.green-box {
  z-index: 3;
}
.red-box {
  z-index: 2;
}
.blue-box {
  z-index: 1;
}
```

### 🔑 Key Points

- Elements must be **positioned** for z-index to work
- Higher z-index = **on top**
- base.css already has `top` and `left` values for positioning
- z-index creates **stacking context**

---

## Task 5: Modal Overlay

### 🎯 Goal

Create a full-screen modal overlay covering the entire viewport.

### 📖 Concept

**Fixed positioning** with all edges set to 0 creates a full-screen overlay.

### 💻 Solution

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
```

### 🔑 Key Points

- `position: fixed` for viewport coverage
- All edges set to **0** for full-screen
- High z-index ensures it's **above other content**
- JavaScript toggles the `.active` class for visibility

---

## Task 6: Sticky Positioning

### 🎯 Goal

Make the sub-header stick to the top when scrolling within the container.

### 📖 Concept

**Sticky positioning** is a hybrid: the element scrolls normally until reaching a threshold, then "sticks" in place.

### 💻 Solution

```css
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
}
```

### 🔑 Key Points

- Acts like `relative` until scroll threshold is reached
- Then behaves like `fixed` within its **container**
- `top: 0` defines the stick point
- Only sticks **within its parent's scroll container**

---

## Task 7: Badge Positioning

### 🎯 Goal

Position the red badge outside the top-right corner of the icon.

### 📖 Concept

**Absolute positioning** with negative offsets can place elements outside their container.

### 💻 Solution

```css
.icon-wrapper {
  position: relative;
}
.badge {
  position: absolute;
  top: -8px;
  right: -8px;
}
```

### 🔑 Key Points

- Parent is **positioned** (`relative`)
- Negative values move element **outside** bounds
- Common pattern for **notification badges**
- `-8px` creates overlap effect

---

## Task 8: In-Container FAB

### 🎯 Goal

Position FAB in bottom-right corner of the demo container (20px from edges), with menu appearing above on hover.

### 📖 Concept

**Absolute positioning** within a scrollable container, with flexbox for vertical stacking.

### 💻 Solution

```css
.fab-container {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
```

### 🔑 Key Points

- FAB demo has `position: relative` (from base.css)
- `flex-direction: column` stacks menu items **vertically**
- `align-items: flex-end` aligns to **right**
- Menu appears above button with `margin-bottom: 12px` (already in task.css)

---

## Task 9: Tooltip

### 🎯 Goal

Position tooltip 10px below button, centered, with arrow pointing up.

### 📖 Concept

**Absolute positioning** with **transform** for precise centering.

### 💻 Solution

```css
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}
.tooltip-box {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
}
.tooltip-arrow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
}
```

### 🔑 Key Points

- `top: 100%` positions below the button
- `left: 50%` + `transform: translateX(-50%)` **centers horizontally**
- Arrow uses `translateY(-100%)` to move above its own height
- Multiple transforms can be **chained**

---

## Task 10: Dropdown Menu

### 🎯 Goal

Create multi-level dropdown: main menu below trigger, submenus to the right.

### 📖 Concept

**Nested absolute positioning** for hierarchical menus.

### 💻 Solution

```css
.dropdown-item {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 2px;
}
.dropdown-submenu {
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 4px;
}
```

### 🔑 Key Points

- Each dropdown item is a **positioning context**
- `top: 100%` places menu **below** parent
- `left: 100%` places submenu to the **right** of parent
- Visibility controlled by hover states (in base.css)

---

## Task 11: Page-Level FAB

### 🎯 Goal

Position FAB in bottom-right corner of entire viewport, stays fixed when scrolling.

### 📖 Concept

**Fixed positioning** for viewport-level placement.

### 💻 Solution

```css
.page-fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
```

### 🔑 Key Points

- `position: fixed` anchors to **viewport**
- Always visible while scrolling
- High z-index keeps it **above page content**
- Different from Task 8 which is container-based

---

## Task 12: Human Figure (Bonus)

### 🎯 Goal

Assemble body parts into a human figure using absolute positioning and transforms.

### 📖 Concept

**Complex absolute positioning** with transforms for rotation and centering.

### 💻 Solution

```css
.human-wrapper {
  position: relative;
  height: 200px;
  width: 120px;
}
.human-head {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.human-body {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.human-arm {
  position: absolute;
  top: 60px;
  transform-origin: top center;
}
.human-arm.left-arm {
  left: 15px;
  transform: rotate(20deg);
}
.human-arm.right-arm {
  right: 15px;
  transform: rotate(-20deg);
}
.human-leg {
  position: absolute;
  top: 130px;
  transform-origin: top center;
}
.human-leg.left-leg {
  left: 35px;
  transform: rotate(5deg);
}
.human-leg.right-leg {
  right: 35px;
  transform: rotate(-5deg);
}
```

### 🔑 Key Points

- Wrapper is the **positioning context**
- Each body part uses `absolute` positioning
- `transform-origin` sets rotation pivot point
- `rotate()` creates natural arm/leg angles
- Head and body centered with `translateX(-50%)`

---

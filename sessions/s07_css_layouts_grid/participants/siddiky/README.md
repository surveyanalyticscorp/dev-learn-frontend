# CSS Grid Layouts Workshop

This project demonstrates comprehensive CSS Grid implementation across 11 progressively challenging tasks.

## Completed Tasks

### Task 1: Basic 3-Column Grid

Implemented a simple three-column grid layout using `grid-template-columns: repeat(3, 1fr)`.

### Task 2: Adding Gaps

Created a three-column grid with custom spacing - 20px column gap and 40px row gap.

### Task 3: Spanning Columns

Built a grid where the header element spans all three columns using `grid-column: 1 / -1`.

### Task 4: Grid Template Areas

Used `grid-template-areas` to create a semantic layout with header, sidebar, main content, and footer sections.

### Task 5: Mixed Units (Fixed and Fluid)

Implemented a hybrid layout combining fixed-width columns (150px) with flexible columns (1fr).

### Task 6: Implicit Grid

Created a grid where rows are automatically generated with a fixed height of 100px using `grid-auto-rows`.

### Task 7: Centering

Centered an element both horizontally and vertically using the `place-items: center` property.

### Task 8: Responsive Cards

Built an auto-responsive card gallery using `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` that automatically adjusts columns based on viewport width.

### Task 9: Nested Grids

Implemented a two-level grid system with a parent grid containing a nested grid inside one of its items.

### Task 10: Holy Grail Layout

Constructed the classic Holy Grail layout with header, footer, navigation, main content, and aside sections using grid template areas and mixed column widths.

### Task 11: Bento Box Layout

Created a complex responsive 4x4 grid layout using `grid-template-areas` that:

- Arranges items in a sophisticated asymmetric pattern
- Collapses to a single column on mobile devices (< 768px)
- Uses named grid areas for semantic structure

## Key Grid Concepts Applied

- **Grid Template Columns**: Defining column tracks with various units (fr, px, minmax)
- **Grid Template Areas**: Creating semantic, named grid regions
- **Grid Auto Rows**: Managing implicitly created rows
- **Gap Properties**: Controlling spacing between grid items
- **Grid Column/Row Spanning**: Making items occupy multiple tracks
- **Place Items**: Simplified alignment syntax
- **Auto-fit & Minmax**: Creating truly responsive grids without media queries
- **Nested Grids**: Building complex layouts with grid within grid
- **Responsive Design**: Using media queries to transform layouts

## Implementation Approach

All solutions use modern CSS Grid features with clean, semantic code. The implementations prioritize:

- Readability and maintainability
- Responsive behavior where appropriate
- Efficient use of grid properties
- No unnecessary complexity or workarounds

## Browser Compatibility

These solutions work with all modern browsers that support CSS Grid (all major browsers since 2017).

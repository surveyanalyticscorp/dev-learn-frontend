# Interactive List Hover Effects

> Wed Sep 24, 2025
> Focus: Advanced sibling + positional selectors. Do **not** change HTML.

---

## 🎯 Goal

Create layered hover interactions on a list using only CSS selectors. Hovering a single `<li>` should visually affect:

1. The hovered item itself
2. Its immediate previous and next siblings
3. The second-level previous and next siblings (two steps away)
4. Other items should have a distinct style.
5. With no hover, all items should have a neutral style.

---

## ✅ Requirements

- Do **not** edit the HTML markup.
- Write all styles in the provided `index.css`.

---

## 🧪 Suggested Effects (feel free to customize)

- Hovered item: scale or bold + highlight background.
- Adjacent siblings: slight tint or underline.
- Two-away siblings: reduced opacity or subtle border.
- Other items: patterned background shift / low opacity.

Keep contrast and accessibility in mind.

---

## 📸 Reference

See the screenshot for the intended layered visual relationships.

![Default](./default.png "Default")
![Expected Result](./hovered.png "Hovered")

---

## ✨ Bonus Ideas

- Add a smooth `transition` for background/transform.
- Use CSS custom properties to centralize colors.
- Dark mode friendly palette (optional).

Good luck—experiment and iterate! 🚀

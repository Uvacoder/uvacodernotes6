# CSS Grid

- [CSS Tricks Article](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Malven](http://grid.malven.co/)
- [CSS Grid Generator by Sarah Edo](https://cssgrid-generator.netlify.com/)
- [Wes Bos Video](https://www.youtube.com/watch?v=DCZdCKjnBCs&t=532s)
- [A cool game for learning CSS Grid](https://cssgridgarden.com/)
- [Grid by Example](https://gridbyexample.com/)
- [Jen Simmons' Experiments](https://labs.jensimmons.com/)

## Random Notes

- If we don't define rows/columns, they are automatically created if needed.
- By default grid items are gonna **stretch** the available space.
- **Always use `fr` instead of `%`**.
- **Grid tracks** are the divisions or lines in between columns or rows.
- Instead of `auto` we can use `fit-content(100px)` which will _clamp_ the width (not as wide as with `auto`).

## Explicit vs Implicit Grid

- **Explicit**: we defined it, we wrote it.
- **Implicit**: automatically made by the browser without us saying it.

### Implicit Grid

- By default, the browser will generate more rows. We can define it by saying: `grid-auto-flow: rows | columns`.
- We can also define the size of the implicit grid: `grid-auto-rows: 50px`.

## Sizing

- `auto`: the contained element will size the column/row.
- `fr`: fraction. Better to think about it as **free space**. For example, we size an item at 500px, after that, how many free space we have left? -> `grid-template-columns: 1fr 50px 2fr`.

## Span

- We can tell an item to span multiple rows or columns. `grid-column: span 2`.
- If the spanned item does not fit, the browser will put it where it can. It will create and implicit row/column if it cannot fit.

## Start-End

- `grid-column-start | end`: 1/4, span 2/5, 1/-1.
- Negative number means "until the end".

## Auto-fit/auto-fill

- `auto-fill`: see how many you cant fit. `repeat(auto-fill, 150px)`.
- `auto-fit`: ends the explicit grid right at the last item.
- Usually it is best to try both and see which one works :).

## minmax

- `minmax(150px, 1fr)`
- Replaces many media queries
- MAGIC: `repeat(auto-fit, minmax(x,y))`

## Template Areas

- `"x x x" "y y y" "z z ."`: the dot means a _dead space_.
- We can put `grid-template-areas` inside of media queries to totally redefine our layout.
- When we name template-areas, we get `areaname-start / areaname-end` lines, so we don't have to manually count and write the track numbers.
- We can also name lines: `[pol] 1fr [cius]`. We can give the same line multiple names (separated by space).

## Dense Auto-Flow

- `grid-auto-flow: dense`. Squeezes the item where it can instead of leaving _holes_. REALLY USEFUL.

## Centering

- `justify (x axis) / align (y axis)`
  - items
  - content: inside extra or free space
  - self

## Reordering Items

- Order property, default is 0.
- Be careful as it will mess with accessibility (tabbing, keyboard navigation).

## Grid vs. Flexbox

- Flexbox is great for some use cases, especially for varying width content.

## Responsive Grid

- Use of css vars. For example:

```html
<div class="pol" style="--span: 3;"></div>

.pol { --span: 1, grid-column: span var(--span); }
```

- `.class >* {}`: every direct child of class.
- To make our grid responsive we can **redefine template areas inside a media query** and the **minmax**.

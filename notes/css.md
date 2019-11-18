# CSS

- Adjacent selector `~`.
- Stylelint: like ESLint but for CSS. A bit annoying, but will help you write better CSS in the long run.
- :nth-child
  - [CSS Tricks 1](https://css-tricks.com/extremely-handy-nth-child-recipes-sass-mixins/)
  - [CSS Tricks 2](https://css-tricks.com/useful-nth-child-recipies/)
  - [Tester](https://css-tricks.com/examples/nth-child-tester/)
- [Debugging](https://www.freecodecamp.org/news/heres-my-favorite-weird-trick-to-debug-css-88529aa5a6a3/)
- [CSS Reference](https://cssreference.io/)

## CSS Variables

- Declared in the `:root` with `--varname`
- To use them -> `var(--name)`
- `nodeList !== array`
- Attributes that start with `data-xxx` are custom attributes, made up. We need to prefix them with `data-` (spec)
- `this.dataset` will select the `data-xxx` attributes
- If you update a `css variable`, all the selectors that use it will update as well
- Example:
  - Declaring it (usually in the `:root`:
    ```css
    element {
      --main-bg-color: brown;
    }
    ```
  - Using it:
    ```css
    element {
      background-color: var(--main-bg-color);
    }
    ```
- We can give fallbacks to the vars: `var(--name, fallback)`

## CSS Animations

- colors with `hsl (hue, saturation, light)`
- `linear-gradient (degrees, colors)`
- `transform` per donar interactivitat (on hover, etc)
- keyframes for animations

## CSS Grid

Check out the dedicated section in the notes named **CSS Grid**.

## IE11

- CSS Grid has terrible support, do not use it. Even with Autoprefixer, there are a lot of bugs and issues.
- Use this snippet to target IE11 only:

```css
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  // IE11 specific code
}
```

## Table elements

- They have their own set of CSS, usual padding/margin does not seem to work.

## Styling a scrollbar

- Can only be styled in webkit browser and is non-standard. It has different elements that can be styled (scrollbar, thumb...)

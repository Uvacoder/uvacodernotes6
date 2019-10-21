# CSS

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

# JavaScript 30

## CSS Variables

- Declared in the `:root` with `--varname`
- To use them -> `var(--name)`
- `nodeList !== array`
- Attributes that start with `data-xxx` are custom attributes, made up. We need to prefix them with `data-` (spec)
- `this.dataset` will select the `data-xxx` attributes
- If you update a `css variable`, all the selectors that use it will update as well
- Example:
  - Declaring it (usually in the `:root`:
    ``` css
      element {
        --main-bg-color: brown;
      }
    ```
  - Using it:
    ``` css
      element {
        background-color: var(--main-bg-color);
      }
    ```

## Array Cardio

- `Array.sort` -> callback function establishing the sorting order. For example: `(a,b) => (a-b)`
- `Array.reduce` -> is like one of those `for` loops where you add to a count variable.
- `reduce` first takes a callback function with `accumulator, currentvalue`, then another argument with the initial value.
- `console.table` returns a table
- `Array.from()` creates an array from another type of data, like DOM nodes
- You can call `querySelector` on other things, not only the `document` object
- `Array.includes()` returns `boolean` on the argument
- `.some` tests if at least one element passes the test of the callback fn.
- `.find` returns the value of the first element that passes the test callback.
- `.findIndex` returns the index of the first element that passes the test

## Ajax Type-Ahead

- When fetching, we always have to use the `.json()` prototype included in promises
- We cannot include a variable in a regex: we need to create a new regex variable by doing `new RegExp(variable, 'gi')` for example
- In an `input` it is common to add `change` and `keyUp` listeners

## Chrome Console Tricks

- Right click -> break on -> subtree modifications
- `console.assert()` only fires if it is wrong. Tests something in the first element.
- `console.dir`
- `console.time`, `console.timeEnd`
- `console.table`

## Shift Checkboxes

- _Flag variable_ -> we declare a Boolean variable, for example `let food = false;`. Then we can check for a condition (if statement) and inside that block set `food =!food`. This will toggle between `true` or `false` without having to manually set it.
- To check two expressions: `food === 'good' || food === 'bad'`, and NOT `food === 'good' || 'bad'`.

## Custom Video Player

- [Link](https://github.com/wesbos/JavaScript30/blob/master/11%20-%20Custom%20Video%20Player/scripts-FINISHED.js)

## Konami Code

``` js
const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    //We can do anything we want in
  }
});
```

## Slide in on scroll animation

- Debouncer function: to save a function to execute constantly. We do this to enhance perfomance. Currently used in `scroll` Events.

- We calculate our scroll position and add a CSS class to the image when we scroll to a desired position. In this case, when we reach half of the image, we add the class that shows the image with the slidein effect (CSS)

``` js
 function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }
```

## Event delegation and localStorage

- It is better to listen for `submit` events rather because we cover cases where the user presses `Enter` or clicks with just that listener.

- Forms have a built-in method called `reset()`.

- We can check the `localStorage` in DevTools -> Application -> Storage

- We need to `JSON.stringify()` our items to see them in `localStorage`. We can also parse them afterwards.

- Event delegation: we listen on the parent, and if the child matches what we want, we select it. Better than listening to all the children.

## CSS text shadow mouse move effect

- We can add multiple `text-shadow` CSS to the same element.

- If we are working with mouse position events like `offsetX` and `offsetY`, the positions reset once we enter the child elements of where we added our `mousemove` listener.

## Sorting band names without articles

- We can do whatever we want inside of the `sort()` function. This will affect the sorting itself but NOT the final result of the sorted value.
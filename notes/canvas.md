# Canvas

- [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Ken Wheeler's tutorial series](https://www.youtube.com/watch?v=2osWIorQDMU) and a [basic starter CodeSandbox](https://codesandbox.io/s/elastic-spence-1bgxs)

## Basics

To start, we need to set the context of the canvas.

Usually we will select the element in JS and then:

`const ctx = myCanvas.getContext('2d')`

Now, everything we do will be methods applied on `ctx`. For example `ctx.fillStyle`, `ctx.fillRect()`.


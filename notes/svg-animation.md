# SVG Animations using GSAP

- [GSAP Docs](https://greensock.com/docs/)
- [FreecodeCamp's Guide to GSAP](https://www.freecodecamp.org/news/the-beginners-guide-to-the-greensock-animation-platform-7dc9fd9eb826/)
- Sarah Drasner's SVG Workshop: [Part 1](https://slides.com/sdrasner/adv-svg-1?token=UCdXy3zz), [Part 2](https://slides.com/sdrasner/adv-svg-2?token=FxyYIMcu), [Part 3](https://slides.com/sdrasner/adv-svg-3?token=IiYk_UQj) and [GitHub Repo](https://github.com/sdras/svg-workshop). The password for the slides is `svgisawesome!@`.
- [Using GSAP + React](https://greensock.com/react/)
- [Using GSAP + VueJS](https://blog.usejournal.com/vue-js-gsap-animations-26fc6b1c3c5a)

## GSAP Tips

- Instead of modifying the CSS to prepare an animation, we can do a `gsap.set()` and set the properties to a starting stage. That way, all the animation logic is coupled in the same place. It is easier to read and understand.
- We can make multiple scenes. Each scene would be a function where we must return the timeline for it to work. Example:

```js
function sceneOne() {
  var timeline = gsap.timeline({ options });
  // Animations, for example:
  tl.to("#id", { properties });
  return timeline;
}
```

If we do that with multiple scenes, we can then make a master timeline and play them all, like:

```js
const master = gsap.timeline();
master.add(sceneOne(), position);
master.add(sceneTwo(), position);
master.add(sceneThree(), position);
```

## When to use animations/SVG

- **Loaders** are a great use case for animations. It is proven that people are willing to wait more with a custom loader than with a generic one.
- Sometimes SVG can be smaller than JPG/PNG images.
- SVG is resolution independent.

## Platonic shapes

The `<svg>` tag is just a container. It will have other elements inside. Platonic shapes are common elements, such as `<rect>`, `<cirle>` or `<line>`. These can be grouped under the `<g>` tag as well (g = group). Groups are really useful for animation and moving multiple things at once.

## ViewBox

The viewBox property will determine what we see of the SVG. Its syntax is `viewBox="0 0 200 300"` (pos x, pos y, width, height). Changing the `width` property of the SVG will just resize it, while changing the viewBox will determine WHAT we see of that SVG.

## Accessibility

Always put the `<title>MyTytle</title>` inside, as well as `role="presentation"`.

## Optimization

Some SVG exports are full of bloat we don't need. Use a tool like [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimize badly exported SVG.

## Designing an animation

Start from the end and then slowly unveil things. Draw storyboards. Do not do it without a plan first. You can use lo-fi prototypes as well. Do not waste a lot of time coding.

Inline SVG is the best for animation, because we can hook into all the paths and groups inside it.

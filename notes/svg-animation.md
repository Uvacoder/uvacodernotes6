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

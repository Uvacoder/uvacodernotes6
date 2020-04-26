# Design, UI/UX

- [Avoid common design mistakes](https://uxplanet.org/common-webpage-design-mistakes-59eed9831bd7)
- [Figma: Learn Design](https://www.figma.com/resources/learn-design)
- [Fonts in Use](https://fontsinuse.com/)
- Spacing is really important. Make sure spacing between content is the same and follows a rationale.
- Using patterns and textures is cool. Examples:
  - [Subtle patterns](https://www.toptal.com/designers/subtlepatterns/)
  - [Hero Patterns](https://www.heropatterns.com/)
  - [True Grit Textures](https://www.truegrittexturesupply.com/)
- Nice icons:
  - [Hero Icons](https://www.heropatterns.com/)
  - [Icons 8](https://icons8.com/icons)
- Using subtle gradients:
  - [ColorSpace](https://mycolor.space/gradient)
- Using subtle drop shadows
- Don't use true black and white. They are too harsh. Use softer variations. You can set CSS variables for `black` and `white` and then set these to softer variants.
- Default browser UI should be changed, especially checkboxes, selectors... Make sure to respect accessibility.
- Animations
  - Don't overuse them
  - Subtle scale/transitions on hover are nice
  - CSS transitions vs Physics based
  - Examples:
    - [Patagonia Bears Ears](http://bearsears.patagonia.com/)
- Good references:
  - [Site Inspire](https://www.siteinspire.com/)
  - [Awwwards](https://www.awwwards.com/)
  - [Dribbble](https://dribbble.com/)
  - [Stripe](https://stripe.com/au)
  - [UISources](https://www.uisources.com/)
- [Box-shadow CSS Generator](https://cssgenerator.org/box-shadow-css-generator.html)
- [General knowledge about logo design](https://www.websiteplanet.com/blog/logo-design-stats/) (thanks Fabiola!)
- > Always use color to support something that your design is already saying; never use it as the only means of communication.
- > Always design and think about a system before starting to code. This means, define a set of values for spacing, text, color, etc. It saves a lot of time and helps give consistency to your designs. Do not tweak pixel by pixel like a madman: too much choice, in the end, is bad.
- > Bad photos will ruin a design, even if everything else about it looks great.

## Scale and cropping

- If we create asymmetry in a symmetrical image, our eye will notice the non-symmetrical element first. It will stand out immediately.
- We always see what stands out, what is different.

## Layout and composition

- Start with the layout and simple shapes, and progressively add the other elements step by step (typography, colors, and others).

## Color

- Different modes: monotone, duotone like [Spotify](https://www.google.com/search?q=duotone+spotify&rlz=1C1CHBF_enAU875AU875&sxsrf=ACYBGNRjmml9usDz0b0XvtQ_a-65EeSfgw:1577268774513&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjCqJSIyNDmAhXnA2MBHdzjC_YQ_AUoAXoECAwQAw&biw=1536&bih=754)
- `hsla` is the most human readable color value. `HEX` is good for copying and pasting, but it does not give the reader info about the color itself. Example: `hsl(270,60%,70%, .15)`. [MDN article](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- We can make a color palette programmatically instead of by hand. It will save us if, for example, we want to change the primary color.

### Color Tools

- In [Dribble](https://dribbble.com/), we can see the palettes and copy them. We can also search by color.
- [Coolors](https://coolors.co/) to generate color palettes.
- [Paletton](http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF) is also a palette builder.
- [Adobe Color](https://color.adobe.com/create)
- [Adobe Capture](https://www.adobe.com/products/capture.html) allows us to generate a palette based on a picture.
- [Gradient Generator](https://www.colorzilla.com/gradient-editor/)

### Gradients

We have to be careful when animating a gradient because it will most likely trigger a DOM repaint. Do it [this way](https://codepen.io/sdras/pen/akAWPR/). CSS `transform` are the least expensive operation (vs margins, borders, etc.)

### Creating a color palette

Starting with a picture is easier, because we can grab colors from that image and create a palette. [Examples](https://visme.co/blog/website-color-schemes/)

## Typography

### Pairing fonts

1. One display, one sans-serif. One serif, one sans-serif
2. Only two fonts.
3. Do not pick two similar fonts.

- [Fontjoy, to generate font pairings](https://fontjoy.com/)
- [Google Fonts](https://fonts.google.com/). You can select multiple fonts and see how they would pair together. They are ordered by most used. It's not a bad idea to use popular fonts and pairing (people are used to them and they might be already cached in their browsers).

### Terminology

- Kerning: the space between letters. In CSS: `letter-spacing`.
- Leading: the space between lines. In CSS, `line-height`.
- Widows & orphans: words that are isolated, they break the flow of text and should be avoided.
- [More terms](https://creativemarket.com/blog/typography-terms-cheatsheet?utm_source=Link&utm_medium=CM+Social+Share&utm_campaign=Blog+Post+Social+Share&utm_content=Free+Typography+Basics+Cheatsheet%3A+Anatomy%2C+Classification+%26+Special+Terms+%7E+Creative+Market+Blog&ts=201811)

### Font loading performance

- [The Five Whys Of Font-Loading Performance](https://www.zachleat.com/web/five-whys/) by Zach Leatherman.
- [Subfont](https://github.com/Munter/subfont), a CLI tool to optimize perfomance.

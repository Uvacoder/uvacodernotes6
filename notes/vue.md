# VueJS

- [Sarah Drasner's "Intro to Vue"](https://github.com/sdras/intro-to-vue)
- [Awesome Vue: a great example of everything that can be made in VueJS](https://github.com/vuejs/awesome-vue)
- [VueJS Official Docs](https://vuejs.org/v2/guide/)

## Random notes

- You can have multiple instances of Vue in the same page, just using adding Vue as a CDN and targeting different IDs in the HTML. It is not what you commonly use to build, mostly used in examples and docs.
- `{{ item }}` => template. We can do simple expressions and ternary operators inside.

## Directives

- `v-if="string"`. The string may refer to a property in the Vue instance `data`. Even if it is a Boolean, number, we will write it as a string and Vue will understand.
- `v-bind:disabled="isTrue"`. We give it an argument, and tie it to an element in `data`.
- `v-on:click=''`

## Computed properties

We can access `data` and `props` only by using `this.myProp` or `this.myData`, no need to do `this.props.myProp`.

Computed properties are a 'repackaging' of our original data. They are cached so they are really useful for data calculations, unlike methods.

## Methods

- Basically function to interact with our templates. It could be an simple toggle, for example:

```js
  methods: {
    toggleIsTrue: function () {
      this.isTrue = !this.isTrue
    }
  }
```

- It is important to write methods as `function()` and NOT as arrow functions so that we correctly handle `this`.

## Handling user input with v-model

`<input type="text" v-model="hello">`. We need to attach `v-model` to an inital state, usually a filler text or an empty string.

- We do all the JS inside `script` tags, even imports.
- Directives have a shorthand. For example, `v-bind:title` => `:title`.

## Props and Components

Really similar to React. In Vue, we need to define a `props` object with their type (String, Boolean, ...)

## Looping

With the `v-for` directive. We place it in the item itself, like `<li v-for="item in list">{{ text }}</li>`.

We can easily loop through an object as well:

```html
<li v-for="(value, key) in profile">
  {{ key }}: {{ value }}
</li>
```

If we loop over a component, we need to `v-bind:key` and specify a key (like in React).

## Children to parent communication: emitting events

Everything perfectly explained in [David Egan's post](https://dev-notes.eu/2018/05/passing-data-between-vue-components/).

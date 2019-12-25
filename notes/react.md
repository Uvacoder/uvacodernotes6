# React

- [Brian Holt's Intro to React](https://btholt.github.io/complete-intro-to-react-v5/)

## Hooks

### useEffect

`useEffect` will run after the first render. It will also run on every re-render. The second argument we pass it will be its dependencies, the elements that will tell React when and if to re-run the effect or not. That's why, to make the effect run only once, we need to pass an empty array `[]` as the second argument.

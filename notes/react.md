# React

- [Brian Holt's Intro to React](https://btholt.github.io/complete-intro-to-react-v5/)
- [Base Web UI Framework, from Uber](https://baseweb.design/)

## Hooks

- [Official Hooks Docs](https://reactjs.org/docs/hooks-intro.html)
- [Codesandbox to learn and play with hooks](https://codesandbox.io/s/zr90v4jorp)

### useEffect

`useEffect` will run after the first render. It will also run on every re-render. The second argument we pass it will be its dependencies, the elements that will tell React when and if to re-run the effect or not. That's why, to make the effect run only once, we need to pass an empty array `[]` as the second argument.

### useMemo and useCallback

They are used to optimize computations to prevent re-renders. **Never** use them pre-emptively, only use them when needed, as a last resort.

### useLayoutEffect

Only used for DOM measurements. It works like `useEffect`, but `useLayoutEffect` is synchronous (render + effect). Read [this article](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect) for a more detailed explanation.

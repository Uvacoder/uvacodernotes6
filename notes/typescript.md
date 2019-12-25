# TypeScript

- [Official Docs](https://www.typescriptlang.org/docs/home.html)
- [TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [TypeScript and React](https://fettblog.eu/typescript-react/components/)
- [Types vs Interfaces](https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0)

## React & TypeScript

- In `create-react-app` there is a TS boilerplate. To create it, we need to append `--template typescript` to the script. Example: `npx create-react-app testing --template typescript`.

- When we declare a function or class component, we need to specify it in TS, so that we can get types for `React.Children`, for example. In a function component, we would do that like this: `const Hey<React.FC>`.

- We can use `as` to tell TS the types, in cases where "we know better" than TS's type inference. This is common practice in cases where we have a `never[]` type and then we can fixing by writing `as MyArray[]`.

- When we give TS an array, it will assume that the array is out of order. We can tell it which order the elements inside it will be (with `as`).

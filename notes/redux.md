# Redux

## What is it?

- A state management library for React.
- Main components are actions, reducers, store, middleware and thunks.
  - **Actions** are objects of information that we send from our application to the store. We send them using `store.dispatch()`. They have a `type` and then the action itself.
  - **Reducers** describe how the state changes in response to actions we perform. Actions only tell what happened, while reducers tell how the state changes with that action.
  - **Store** is the object that brings actions and reducers together. It is the source of truth.
  - **Middleware** is a point between when we dispatch the action and it reaches the reducer. We can do anything we want with middleware.
  - **Thunks** are functions that wrap an expression to delay its evaluation. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. It is commonly used in working with Async Redux.

## Context API

- Allows us to pass data down without _prop drilling_
- Context object:
  - Provider
  - Consumer
- We can pass down the `store` to any component

## Connect

- With `connect` we abstract that Provider/Consumer logic. We just pass `connect` a component and the data it needs.
- Connect
  - Arguments: function telling which data from the store it needs
  - Returns: function which will receive the component to render when it is invoked.
# Redux

## What is it? When to use it?

- A state management library for React.
- To be used in a complex application. We can do async Redux with thunks and sagas.
- Nowadays, we have valid alternatives for simpler apps: React Context and `useReducer`. Do not use Redux unless it is absolutely necessary.
- Redux code is super testable.
- **Main components of Redux**:
  - **Actions** are objects of information that we send from our application to the store. We send them using `store.dispatch()`. They have a `type` and then the action itself.
  - **Reducers** describe how the state changes in response to actions we perform. Actions only tell what happened, while reducers tell how the state changes with that action.
  - **Store** is the object that brings actions and reducers together. It is the source of truth.
  - **Middleware** is a point between when we dispatch the action and it reaches the reducer. We can do anything we want with middleware.
  - **Thunks** are functions that wrap an expression to delay its evaluation. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. It is commonly used in working with Async Redux.

A simplest case example:

```js
// Defining an action. This nomenclature is common practice.
const ADD = "ADD";

// Action creator:
function addMessage(message) {
  return {
    type: ADD,
    message
  };
}

// Reducer:
function messageReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}

// Creating the store
const store = Redux.createStore(messageReducer);
```

# JavaScript

- [JavaScript: The Hard Parts Slides](https://frontendmasters.com/assets/resources/willsentance/js-the-hard-parts.pdf)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

## Execution context

- When we run a function we create a new execution context.

## First-class objects

- JS defaults to `undefined` for any variable that does not have a value.
- Functions are objects, that's why we can pass a function as an argument to another function.

## Callback vs. higher-order functions

- A higher-order function is just a function that takes another function as an argument.
- A callback is a _baby function_ that gets passed unto another.

## Closure

- Closure is the preservation of the linkage to a variable. 
- When we execute a function, we get local memory and a local thread. It all gets cleared and we only care about the returned value.
- Memory = Variable Environment
- The function will look for variable names _down the call stack_.
- Closure is not a snapshot of a variable at a time, it is a reference to it. So, the "closed over" function will reference the variable, and not the variable "at a point in time".

## Lexical scope

- When we run the function we make sort of a “bond” with the data stored inside it. In this case when we run it again, the variable will “remember”. That hidden bond, that backpack, is shown in the console like this `[[scope]]`.
- The position of the function will determine the data available to us when the function gets invoked.

## Web APIs

- When adding browser APIs (features), they change the way we use JavaScript. They introduce a Callback Queue and an Event Loop to keep track of where in our code they are inserted, the order will change and we need to be careful.
- When we run a function with a Web API, we don’t create a new execution context (like we would do with a normal function). Instead, we create a reference to the web browser API which will take care of the functionality

## OOP (Object-Oriented Programming)

- `__proto__` is different than `something.prototype`
- The `new` keyword automates a lot of work. We will store new methods on the `.prototype`, which is an object attached to our `Object` that is a store for methods and other data.

### Classes

- A class is just syntactic sugar for the `new` keyword plus the methods all in one. Otherwise we have to split the `new` + function and then add the methods with `Object.prototype.method`.
- The new keyword automates: creating a new empty object and assigning it `this` and returning everything.
- We can extend classes (class X extends Y) and then use the extended class’s properties with the `super()` constructor.

## Filter, map reduce

- Fundamental array methods. [Visual explanation](https://twitter.com/itenterpriseuk/status/1210304458229506049/photo/1)

## Scope & hoisting

- Function declarations are going to be hoisted when we run our code. This means that even if we run a function before declaring it, during execution JS will "hoist it" to the top and not produce any errors. For further reading, check out [this article](https://scotch.io/tutorials/understanding-hoisting-in-javascript).
- Regarding scope, it is always more readable to avoid nesting a lot of functions. Always move functions out of scope if possible.
- If a function does not need a variable, move it out of scope as well.
- The way code is written does not always match its execution order.

## Modules

- Namespace != module
- The module pattern is namespace + encapsulation (a way of "hiding" code).
- In a module there a public and private parts. There are no modules without closure. You use a module when you want to preserve some kind of state with public and private functionalities.

### ES6 modules

- `.mjs` files, `export default` functions. Everything you export is public, everything you don't will be private to that module.

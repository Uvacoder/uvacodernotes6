# JavaScript

- [JavaScript: The Hard Parts Slides](https://frontendmasters.com/assets/resources/willsentance/js-the-hard-parts.pdf)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

## Execution context

- When we run a function we create a new execution context.

## First-class objects

- JS defaults to `undefined` for any variable that does not have a value.
- Functions are objects, that's why we can pass a function as an argument to another function.
- There are six primitive types: undefined, object, string, number, boolean and symbol.
- Functions and arrays are just a type of object. Functions are _callable objects_.
- The `typeof` operator **always** returns a string.

## NaN

- `NaN` is the only value that is not equal to itself.
- `NaN` is an invalid number.

## Coercion

- Type conversion = coercion.
- JavaScript does type conversions under the hood.
- `[]` toString is `""`, but `[]` toBoolean is _truthy_.
- The empty string `""` gets coerced to `0`. Be careful.
- Always be wary of coercion in corner cases (falsy values, empty objects, etc.)

### == and ===

- `==` allows coercion, while `===` disallows it.
- Objects are different, we cannot use `===` or `==`.
- `null === undefined` is `true`.
- If types are known, use `==`. Otherwise use `===`.
- `Object.is()` is **the most extreme equality** available. Good for corner cases like `0` and `-0` for example.

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

- When we run the function we make sort of a _bond_ with the data stored inside it. In this case when we run it again, the variable will _remember_. That hidden bond, that backpack, is shown in the console like this `[[scope]]`.
- The position of the function will determine the data available to us when the function gets invoked.
- If we assign a variable inside a function and it cannot find it in the global scope, an auto-global variable will be created. This is really bad practice.

### Undefined vs. undeclared

- Undefined: a variable exists, but it has no value. Undeclared: not declared in a scope we have access to.

## Web APIs

- When adding browser APIs (features), they change the way we use JavaScript. They introduce a Callback Queue and an Event Loop to keep track of where in our code they are inserted, the order will change and we need to be careful.
- When we run a function with a Web API, we don’t create a new execution context (like we would do with a normal function). Instead, we create a reference to the web browser API which will take care of the functionality

## OOP (Object-Oriented Programming)

- `__proto__` is different than `something.prototype`
- The `new` keyword automates a lot of work. We will store new methods on the `.prototype`, which is an object attached to our `Object` that is a store for methods and other data.

### The "this" keyword

- A function's `this` references the execution context for that call, determined entirely by how the function was called.
- If we find ourselves using `.bind()` a lot in our code, it means probably we could refactor it, because we are not really using `this` how it was intended (in a dynamic-scope way).
- If we are unsure what this is pointing to, ask these questions:
  1. Is the function called by `new`?
  2. Is the function called by `call()` or `apply()`? (`bind()` used apply under the hood)
  3. Is the function called on a context object?
  4. DEFAULT: global object (except in strict mode)
- An arrow function has no `this`.
- Objects are not scopes. Curly braces do not always mean scopes. Be careful when using arrow functions & `this`.
- The `this` value is defined by the call site, where it is called.

### Classes

- A class is just syntactic sugar for the `new` keyword plus the methods all in one. Otherwise we have to split the `new` + function and then add the methods with `Object.prototype.method`.
- The new keyword automates: creating a new empty object and assigning it `this` and returning everything.
- We can extend classes (class X extends Y) and then use the extended class’s properties with the `super()` constructor. If we do that, `super()` has to be the first thing inside the constructor:

```js
class One {
  myMethod() {
    return console.log("Hello");
  }
}

class Two extends One {
  constructor() {
    super();
    this.property = {};
    this.secondProperty = [];
  }
}
```

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
-

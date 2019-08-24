# JavaScript Algorithms

## Random notes from FreecodeCamp Algorithms exercises

- `return` stops code execution
- `Object.hasOwnProperty(propname)` returns a `Boolean` if the object contains the property we pass it.
- Private/public object properties
- `Array.map()` executes a callback function in every item of the array and returns a new array without modifying the original one.
- `Array.reduce()` is used to condense values into fewer values.
- `Array.filter()` will return a new `Array` containing every item that passes the callback function's condition.
- `Object.keys(obj)` returns an array with the names of the properties (`===keys`) of the object.
- Everytime a `constructor` creates a new object, it is called `instance` (of that constructor)
- To check if X is instance of Y => `x instanceof Y` (returns a `Boolean`)
- We can also check the `constructor` property (but usually it is better with `instanceof`)
- The `prototype` is an object shared among ALL instances of a constructor. It is kind of a _recipe_ for the instances, common shared functions and properties.
- When manually setting the `prototype`, we must manually set the `constructor` property as well.
- The `instances` inherit the `prototype` from the constructors. Check `isPrototypeOf` method.
- `supertype` and `subtype`
- `Object.create(obj)` and setting `obj` to `Constructor.prototype`, for inheritance, similar to `let x = new Boss()`
- Inheriting `prototype`, it goes from more specific to more general
- `Immediately Invoked Function Expression` (IIFE), often used to create `modules`
- Better to `filter` before `map` (will generate less arrays for `map` to work on)
- `slice` **does not** modify the original array, while `splice` **does**
- `concat` **does not** mutate the original array, while `push` **does**
- To create a copy of an array without altering it, use an empty `arr.concat()`
- Other cool methods: `every`, `some`, `split`, `join`
- The arguments of a function are grouped into the `arguments` Object. We can transform them to an array using:

```
const args = Array.from(arguments)
```

- `Array.reduce()` is the same like those for loops when we want to add an amount to a total. We can think of reduce's arguments like (total, amount).

## A Practical Guide to Algorithms with JavaScript
- From the [FrontendMasters course](https://frontendmasters.com/courses/practical-algorithms/unique-sort-exercise/)
- [Reference slides](https://slides.com/bgando/intro-to-algorithms)

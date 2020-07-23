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

### Time and space complexity
- Only think about time and space complexity IF our dataset is large
- Do not pre-optimize, in case of small datasets readability is more important than which algorithm we use
- Big-O is just a fancy name to define the complexity of an algorithm; how complexity grows according to how large our input data is
- The best, of course, is O(1)… That would be to get an already sorted dataset, and the worst is exponential O(k*n)
- O(k^n)
- Methods that take a callback (map, filter, reduce): we need to take into account the complexity of the callback fn we pass

### Optimization with caching
- To optimize a loop we can use the “breadcrumbs” method, or caching
- Memoization is the same as caching but referring to the returned value of a function
- In the browser, usually caching/memoizing is a good idea because we don’t have that many space complexity constraints
- In the browser we usually think about time complexity. Only cases when we think about space complexity (memory allocation, etc) are in “big data” scenarios
- Moving the cache from global scope to a local one is better
- “use a hash table” => memoization, object. When we memoize we are trading space for time complexity, which is usually fine

### Recursion
- Recursion is a fancy word for looping
- Important to know how to translate recursion to loops and the other way
- Sometimes recursion is easier than a loop. In terms of optimization, we do not really care.

### Divide & conquer
- “you have a sorted array…” => BINARY SEARCH question
- In a search, ‘-1’ means not found
- Always think about what happens if there is a duplicate
- Pointers => keeping track, usually indexes

### Greedy algorithms
- Used for super big data sets difficult to compute. A solution is better than no solution.













# Testing React
## Intro
- There are three types of tests: unit, integration, and e2e.
- Most used tools: Jest, Enzyme and Cypress. Everyone uses Jest as the testing framework. A lot of people choose react-testing-library instead of Enzyme.
- Useful links to get started:
  - [Tutorial by Robin Wieruch](https://www.robinwieruch.de/react-testing-tutorial/)
  - [Tutorial by freeCodeCamp](https://www.freecodecamp.org/news/components-testing-in-react-what-and-how-to-test-with-jest-and-enzyme-7c1cace99de5/)
  - [Jest official tutorial](https://jestjs.io/docs/en/tutorial-react)
  - [Revisiting React Testing in 2019, by John Tucker](https://codeburst.io/revisiting-react-testing-in-2019-ee72bb5346f4)
- Jest is a test runner and an assertion library, widely used.
- Usually we will link our testing to a CI/CD service to run our tests BEFORE we deploy. Then if tests fail, our code will not get deployed. A popular service is Travis CI.
- We can do `npm test`, NOT `npm run test`.

## What to test?
We always need to think about the user, not implementation details. We need to think as if we were a user. Always test key functionality of the components.

## Unit tests 
They only test ONE (=unit) thing. In React, for example, we would not bother about the child component in a unit. As long as we are talking about two pieces of code interacting, that's an **integration test**.

Example:
``` js
test('add', () => {
  expect(add(1,2)).toBe(3);
  expect(add(5,2)).toBe(7);
})
```

## Integration tests
When code relies on another piece of code, it is considered an integration test. That's why many times we will use a 'mock' function to mimick the output of another function.

## Mocking
A mock function would be: `const add = jest.fn(() => 3);`
They are really useful to simulate API calls and in React components.
### Mocking a module
Example: 

```js
jest.mock('./add', () => {
  add: jest.fn(() => 25)
})
```
We are mocking the module import itself, and also mocking the 'add' inside of the module and its return value. We do this because we only care about what the module returns; especially in the case of an API. We are not testing the module, we are testing our code with what that API returns us.

## React-testing-library
- React-testing-library is a great alternative to Enzyme.
- `.debug()` shows us what the test is rendering in a visual way, it outputs the DOM to a string.
- We are gonna render a component or a component tree using the `.render` method. Example:
  ``` js
  test('<Counter />', () => {
    const wrapper = render(<Counter />);
    wrapper.debug()
  })
  ```
- RTL comes with a bunch of methods to manipulate the DOM, similar to jQuery.
- We can give a component a `data-testid="hello"` attribute and then test it with `wrapper.getByTestId("hello")`.
- In general, **we test the DOM output and not the details or what React is doing**.  
### Events
- Using `fireEvent` method we can simulate events. For example, `fireEvent.click(component)`.
- `afterEach(cleanup)` will give us a clean slate after every test.
- `queryBy` != `getBy`. GetBy assumes that what wer want to get by exists, while queryBy does not.

### Snapshot testing
- `expect(container.firstChild).toMatchSnapshot()`
- Basically takes a "picture" of our rendered component. Useful to catch small errors like typos and to see a visual representation. NEVER RELY on snapshots as your only source of testing.

### Spy/mock functions
- `const onSubmit = jest.fn()`
- After a click, we expect the onSubmit handler to have been called one time. So: `expect(onSubmit).toHaveBeenCalledTimes(1)`
- With this fake function, we can spy on the component and see if when we click it, onSubmit gets called.

### Form events with controlled inputs
- We can set the value of the input to our liking, but then we need to trigger a "change" event in order to update React's state.
  ```js
  fireEvent.change(getByLabelText('Text'), {
    target: { value: 'hello' }
  });
  ```

### Components that expect props/data
- We can put a `.not` into any test to reverse the assertion
- To hit an API, we use mock data. We just need to create a mock variable.
- The `afterEach()` function runs after each test. We can pass a callback to it and do whatever we want. It is common to run `.mockClear()` on mocked functions to prevent errors on our tests, especially with components that require props.

### React-router
- There are specific and defined ways to test react-router. Check [this link](https://testing-library.com/docs/example-react-router#docsNav) for reference.

### Mocking an API call
- There is a package called `jest-fetch-mock` to help us mock fetching data.
- We need to set `global.fetch = require('jest-fetch-mock')`.
- The inside teh test we mock the response:
  ```js
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: 123
      }
    })
  )
  ```
- The problem is that API responses take time, and we need to simulate that (the rerender for our data to show on screen). To solve this, we can use the `waitForElement` method and turn our test into an async function.















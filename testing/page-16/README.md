# Testing:

ohana

{% content-ref url="./" %}
[.](./)
{% endcontent-ref %}

{% content-ref url="configure-jest-for-testing-javascript-applications.md" %}
[configure-jest-for-testing-javascript-applications.md](configure-jest-for-testing-javascript-applications.md)
{% endcontent-ref %}

{% content-ref url="install-configure-and-script-cypress-for-javascript-web-applications.md" %}
[install-configure-and-script-cypress-for-javascript-web-applications.md](install-configure-and-script-cypress-for-javascript-web-applications.md)
{% endcontent-ref %}

{% content-ref url="test-react-components-with-jest-and-react-testing-library.md" %}
[test-react-components-with-jest-and-react-testing-library.md](test-react-components-with-jest-and-react-testing-library.md)
{% endcontent-ref %}

{% content-ref url="use-testing-library-to-evaluate-any-framework....md" %}
[use-testing-library-to-evaluate-any-framework....md](use-testing-library-to-evaluate-any-framework....md)
{% endcontent-ref %}

means family... and family means no one gets left behind or forgotten...

## Fundamentals of Testing in Javascript

https://testingjavascript.com/courses/fundamentals-of-testing-in-javascript

**Table of Contents**

* 1\. Throw an Error with a Simple Test in JavaScript
* 2\. Abstract Test Assertions into a JavaScript Assertion Library
* 3\. Encapsulate and Isolate Tests by building a JavaScript Testing Framework
* 4\. Support Async Tests with JavaScripts Promises through async await
* 5\. Provide Testing Helper Functions as Globals in JavaScript
* 6\. Verify Custom JavaScript Tests with Jest

### 1. Throw an Error with a Simple Test in JavaScript

01-throw-an-error.js

```bash
$ node 01-throw-an-error.js
```

Throwing an error when a condition fails is the most fundamental aspect of a test.

### 2. Abstract Test Assertions into a JavaScript Assertion Library

02-abstract-assertions.js

```bash
$ node 02-abstract-assertions.js
```

An assertion library can be as simple as a function which takes a result and returns an object containing a number of different assertions which allows the user to determine how they want to evaluate that result against an expected value.

### 3. Encapsulate and Isolate Tests by building a JavaScript Testing Framework

03-encapsulate-and-isolate-tests.js

```bash
$ node 03-encapsulate-and-isolate-tests.js
```

Our naive implementation works, but prevents subsequent errors from being thrown. Additionally, the stack trace indicates the issue is at the location where the error was thrown. A better solution would be to allow tests to continue running beyond the failed ones, and indicates which test is revealing and issue.

This can be fixed by creating a function which takes a title, allowing us to name tests, and a callback function which will be responsible for running the actual tests, and making use of a try-catch block so as to prevent thrown errors from stopping further execution.

### 4. Support Async Tests with JavaScripts Promises through async await

04-support-async-tests.js

```bash
$ node 04-support-async-tests.js
```

In order to allow async tests to be run, we need our `test` function to be `async`, and we need to prepend the callack invocation with `await`.

### 5. Provide Testing Helper Functions as Globals in JavaScript

05-provide-testing-helpers-as-globals.js

```bash
$ node --require ./setup-globals.js 05-provide-testing-helpers-as-globals.js
```

Because of the usefulness of test utilities one could extract them into a module and import them everywhere.

Another strategy, because we're in a test environment and globals are pragmatic in this situation, is to make the helpers available globally.

The `--require ./[file].js` flag allows files to be required before executing scripts with the `node` command

### 6. Verify Custom JavaScript Tests with Jest

06-verify-custom-js-tests-with-jest.test.js

```javascript
$ npx jest
```

We've implemented the Jest API in our tests, so we can instead run Jest.

***

![](https://i.imgur.com/fDXeVIn.png)

## JavaScript Mocking Fundamentals

**Table of Contents**

* 1\. Override Object Properties to Mock with Monkey-patching in JavaScript
* 2\. Ensure Functions are Called Correctly with JavaScript Mocks
* 3\. Restore the Original Implementation of a Mocked JavaScript Function with jest.spyOn
* 4\. Mock a JavaScript module in a test
* 5\. Make a shared JavaScript mock module

### 1. Override Object Properties to Mock with Monkey-patching in JavaScript

01-override-object-props-to-mock-with-monkey-patching.no-framework.js

```bash
$ node 01-override-object-props-to-mock-with-monkey-patching.no-framework.js

# or
$ npx jest 01
```

We import both `thumb-war` and `utils`, and mock out `utils.getWinner` so that we can evaluate other aspects of `thumb-war`. We are making `utils.getWinner` deterministic, as the randomness of what it usually returns will affect the outcomes of our tests in non-deterministic ways.

After mocking, one should always clean up so that subsequent tests are not affected by the mock.

### 2. Ensure Functions are Called Correctly with JavaScript Mocks

02-ensure-functions-are-called-correctly-with-javascript-mocks.test.js

```bash
$ node 02-ensure-functions-are-called-correctly-with-javascript-mocks.no-framework.js

# or
$ npx jest 02
```

We can create a naive `jest.fn` which takes a mock implementation, and accepts all arguments passed to it.

Onto this mock function we can add a `mock` object where we can store calls to the mock function.

This can all be done using `jest.fn`.

Jest allows one to inspect a mocked function using `toHaveBeenCalledWith`, `toHaveBeenNthCalledWith`, or to inspect `mockFn.mock.calls` to inspect how the function was used for all calls.

### 3. Restore the Original Implementation of a Mocked JavaScript Function with jest.spyOn

03-restore-original-implementation-of-a-mocked-function.test.js

```bash
$ npx jest 03

# or
$ node 03-restore-original-implementation-of-a-mocked-function.no-framework.js
```

An alternative to using jest.fn to replace a function with a mock implementation is to use `jest.spyOn` to create a mock implementation. This mitigates us having to store the original function and replace it, as Jest will do the heavy lifting for us.

1. Use `jest.spyOn(myObject, 'myObjectFn')`
2. Use `myObject.myObjectFn.mockImplementation(mockFn)` to create a mock implementation of `myObjectFn`
3. Once done testing the implementation, use `myObject.myObjectFn.mockRestore()` to replace the mock implementation with the original so that other tests are not affected. `.mockRestore()` restores the mock implementation to its pre-mocked definition

### 4. Mock a JavaScript module in a test

04-mock-a-js-module-in-a-test.test.js

```bash
$ npx jest 04

# or
$ node 04-mock-a-js-module-in-a-test.no-framework.js
```

Using `jest.spyOn` is still a form of monkey-patching. Monkey-patching is great for our own modules, because we're using commonjs's `require`. When working in an es environment we'll have to mock an entire module, and `jest.mock` allows one to do this.

When using `jest.mock` we can create the mock implementation inside of the mock, and no longer need to use `jest.spyOn` and `[fnToMock].mockImplementation`.

Instead of using `mock.mockRestore()` to restore the mock implementation, we now use `mock.mockReset()`. `mock.mockRestore()` is only available for mocks created with `jest.spyOn`

`jest.mock` can be placed anywhere in the file, and Jest will hoist it to the top of the file.

***

`jest.mock` takes control of the entire module requiring system. This can be simulated using `require.cache`. `require.cache` is an object that has keys for each import, with each key being associated with an object containining information regarding the import.

We use the `exports` property to create the mock implementation of the module

### 5. Make a shared JavaScript mock module

05-make-a-shared-mock-module.test.js

```bash
$ npx jest 05

# or
$ node 05-make-a-shared-mock-module.no-framework.js
```

We can have tests automatically use the mock of a module by adding the mock to a `__mocks__` folder. Node modules can be placed in the `root` `__mocks__` that Jest inspects, by default adjacent to `node_modules`. For user-defined `modules` they can be placed in a `__mocks__` folder adjacent to the module. The mock must use the same filename as the mocked module.

For user-defined modules, if the test imports the module, then `jest.mock('./path/to/mock')` must be added to the test file.

***

Similarly to how we simulated what Jest is doing when conrolling module requiring by using `require.cache`. We create a file containing the mock, which also uses our `fn` to allow us to evaluate calls. In our test we import our mock, and then retrieve the cached paths for the actual utils and mock utils, rewriting `require.cache`'s key for the actual utils with the mocked utils.

***

![](https://i.imgur.com/fDXeVIn.png)

***

![devide](https://i.imgur.com/fDXeVIn.png)

***

![devide](https://i.imgur.com/fDXeVIn.png)

***

![devide](https://i.imgur.com/fDXeVIn.png)

***

![devide](https://i.imgur.com/fDXeVIn.png)

***

![devide](https://i.imgur.com/fDXeVIn.png)

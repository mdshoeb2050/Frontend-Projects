# Modules and Bundlers

- Here are 20 multiple-choice questions on Modules and Bundlers in JavaScript along with their respective correct answers:

1. **Question 1:**
What is the primary objective of using modules in JavaScript?
    A) To execute asynchronous operations
    B) To ensure browser compatibility
    C) To encapsulate related code into separate files
    D) To handle DOM manipulation

    **Correct answer: C) To encapsulate related code into separate files**

1. **Question 2:**
Which keyword is used to import modules in JavaScript?
    A) `require`
    B) `from`
    C) `import`
    D) `include`

    **Correct answer: C) `import`**

1. **Question 3:**
In JavaScript modules, what is the purpose of the `export` keyword?
    A) To import functions from external modules
    B) To create an instance of a class
    C) To declare a function as private
    D) To make functions or variables accessible to other modules

    **Correct answer: D) To make functions or variables accessible to other modules**

1. **Question 4:**
What is the benefit of using default exports in JavaScript modules?
    A) Ability to export multiple items from a module
    B) Convenient way to import all items from a module
    C) Simplifies the import process when a module has a single export
    D) Enables importing private functions

    **Correct answer: C) Simplifies the import process when a module has a single export**

1. **Question 5:**
Which bundler is widely used for JavaScript modules bundling?
    A) Webpack
    B) Babel
    C) Gulp
    D) ESLint

    **Correct answer: A) Webpack**

1. **Question 6:**
What is the purpose of a JavaScript bundler?
    A) To execute code asynchronously
    B) To convert ES6 code into ES5 for browser compatibility
    C) To combine multiple JavaScript files into a single file
    D) To minify CSS files

    **Correct answer: C) To combine multiple JavaScript files into a single file**

1. **Question 7:**
Which feature does Webpack provide in addition to bundling modules?
    A) Code linting
    B) Hot module replacement
    C) Asynchronous module loading
    D) Browser compatibility checks

    **Correct answer: B) Hot module replacement**

1. **Question 8:**
What is a benefit of tree shaking in the context of JavaScript bundlers?
    A) It optimizes code execution for better performance
    B) It helps in transpiling ES6 code
    C) It minifies the code for reduced file sizes
    D) It eliminates dead code to reduce the bundle size

    **Correct answer: D) It eliminates dead code to reduce the bundle size**

1. **Question 9:**
Which statement is true about CommonJS modules?
    A) They use the `import` and `export` keywords for module handling
    B) They are used primarily for client-side JavaScript
    C) They are designed for server-side JavaScript like Node.js
    D) They handle modules asynchronously

    **Correct answer: C) They are designed for server-side JavaScript like Node.js**

1.  **Question 10:**
What is the purpose of the `package.json` file in the context of modules and bundlers?
    A) To specify the entry point of the application
    B) To define the structure of CSS files
    C) To manage project dependencies and configurations
    D) To write custom JavaScript functions

    **Correct answer: C) To manage project dependencies and configurations**

1.  **Question 11:**
What role does Babel play in the context of modules and bundlers?
    A) It manages package dependencies
    B) It transpiles ES6 code into ES5 for broader browser support
    C) It bundles modules into a single file
    D) It provides code linting for JavaScript files

    **Correct answer: B) It transpiles ES6 code into ES5 for broader browser support**

1.  **Question 12:**
Which module format is widely used by Node.js for its modules?
    A) AMD (Asynchronous Module Definition)
    B) UMD (Universal Module Definition)
    C) CommonJS
    D) ES6 Modules

    **Correct answer: C) CommonJS**

1.  **Question 13:**
What does the term "chunking" refer to in the context of JavaScript bundlers?
    A) A process of compressing JavaScript files
    B) Splitting the bundle into smaller files for lazy loading
    C) A technique for concatenating CSS and JavaScript files
    D) A method for minifying modules

    **Correct answer: B) Splitting the bundle into smaller files for lazy loading**

1.  **Question 14:**
Which keyword is used in Webpack configuration to define the entry point of an application?
    A) `start`
    B) `entry`
    C) `main`
    D) `begin`

    **Correct answer: B) `entry`**

1.  **Question 15:**
What does ESLint offer in the context of modules and bundlers?
    A) Code bundling
    B) Module loading optimization
    C) Code linting and error checking
    D) Package management

    **Correct answer: C) Code linting and error checking**

1.  **Question 16:**
What type of bundling is performed by Rollup.js?
    A) Tree shaking
    B) CommonJS bundling
    C) ES6 module transpilation
    D) Code linting

    **Correct answer: A) Tree shaking**

1.  **Question 17:**
What does the term "lazy loading" signify in the context of JavaScript modules?
    A) Loading modules asynchronously
    B) Loading modules conditionally based on user actions
    C) Preloading all modules on initial page load
    D) Loading modules in a specific order

    **Correct answer: B) Loading modules conditionally based on user actions**

1.  **Question 18:**
What is a key benefit of using named exports in JavaScript modules?
    A) Simplifies importing multiple functions or variables from a module
    B) Optimizes the size of the final bundle
    C) Allows private encapsulation of variables
    D) Enables importing modules asynchronously

    **Correct answer: A) Simplifies importing multiple functions or variables from a module**

1.  **Question 19:**
Which JavaScript module system supports asynchronous loading of modules?
    A) CommonJS
    B) AMD (Asynchronous Module Definition)
    C) ES6 Modules
    D) UMD (Universal Module Definition)

    **Correct answer: B) AMD (Asynchronous Module Definition)**

1.  **Question 20:**
What is a characteristic feature of ES6 Modules in comparison to CommonJS modules?
    A) Ability to handle circular dependencies
    B) Asynchronous loading of modules
    C) Static structure at the time of module creation
    D) Absence of named exports

    **Correct answer: C) Static structure at the time of module creation**



# Here are 10 code-based questions related to Modules and Bundlers in JavaScript, asking for the expected output or result:

1. **Question 1:**
```javascript
// Module: greetings.js
export const greeting = "Hello, world!";

// main.js
import { greeting } from './greetings.js';

console.log(greeting);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
Hello, world!
```

2. **Question 2:**
```javascript
// Module: math.js
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// main.js
import { sum, multiply } from './math.js';

console.log(sum(3, multiply(2, 4)));
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
11
```

3. **Question 3:**
```javascript
// Module: myModule.js
export const value = 5;

// main.js
import { value } from './myModule.js';

console.log(value * 2);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
10
```

4. **Question 4:**
```javascript
// Module: utils.js
export default function greet(name) {
  return `Hello, ${name}!`;
}

// main.js
import greeting from './utils.js';

console.log(greeting('Alice'));
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
Hello, Alice!
```

5. **Question 5:**
```javascript
// Module: numbers.js
export const num1 = 10;
export const num2 = 5;

// main.js
import { num1, num2 } from './numbers.js';

console.log(num1 / num2);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
2
```

6. **Question 6:**
```javascript
// Module: strings.js
export const message = "Welcome";
export const name = "John";

// main.js
import * as strings from './strings.js';

console.log(strings.message + ", " + strings.name);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
Welcome, John
```

7. **Question 7:**
```javascript
// Module: users.js
export const users = ['Alice', 'Bob', 'Charlie'];

// main.js
import { users } from './users.js';

console.log(users.join(', '));
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
Alice, Bob, Charlie
```

8. **Question 8:**
```javascript
// Module: data.js
export default [1, 2, 3, 4, 5];

// main.js
import numbers from './data.js';

console.log(numbers.reduce((acc, num) => acc + num, 0));
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
15
```

9. **Question 9:**
```javascript
// Module: fruits.js
export const fruits = ['Apple', 'Banana', 'Orange'];

// main.js
import { fruits } from './fruits.js';

fruits.push('Mango');
console.log(fruits.length);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
4
```

10. **Question 10:**
```javascript
// Module: circle.js
export const PI = 3.14;
export function calculateArea(radius) {
  return PI * radius * radius;
}

// main.js
import { calculateArea } from './circle.js';

console.log(calculateArea(5));
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
78.5
```

These questions cover various scenarios related to importing/exporting modules in JavaScript and the expected outcomes when executed.







# Testing, Libraries, and Frameworks in JavaScript

- Here are 20 multiple-choice questions on the topic of "Testing, Libraries, and Frameworks in JavaScript" along with their correct answers:

1. Which framework is commonly used for unit testing in JavaScript?
   A) Mocha
   B) jQuery
   C) Angular
   D) Django
   **Correct Answer: A) Mocha**

2. Which testing framework is best known for behavior-driven development (BDD) in JavaScript?
   A) Jasmine
   B) Jest
   C) QUnit
   D) Enzyme
   **Correct Answer: A) Jasmine**

3. What does "DOM" stand for in JavaScript when discussing testing libraries?
   A) Document Object Model
   B) Data Object Model
   C) Development Objective Model
   D) Document Observation Mode
   **Correct Answer: A) Document Object Model**

4. Which tool is commonly used for end-to-end testing of JavaScript applications?
   A) Puppeteer
   B) Lodash
   C) Express
   D) Redux
   **Correct Answer: A) Puppeteer**

5. Which library is often used for making HTTP requests and mocking server responses in JavaScript tests?
   A) Axios
   B) Moment.js
   C) Fetch
   D) Sinon
   **Correct Answer: D) Sinon**

6. Which testing library can be used for testing React components by rendering them in a virtual DOM?
   A) Enzyme
   B) Polymer
   C) Riot
   D) Aurelia
   **Correct Answer: A) Enzyme**

7. Which library is best suited for functional programming utilities in JavaScript?
   A) Ramda
   B) Knockout.js
   C) Ember.js
   D) Backbone.js
   **Correct Answer: A) Ramda**

8. Which framework is primarily used for building user interfaces in JavaScript?
   A) React
   B) Vue.js
   C) Svelte
   D) Backbone.js
   **Correct Answer: A) React**

9. Which JavaScript library is known for its simplicity and ease of use in data manipulation?
   A) Lodash
   B) Underscore.js
   C) Bluebird
   D) Async.js
   **Correct Answer: A) Lodash**

10. What does "CI/CD" stand for in the context of software development and testing?
    A) Continuous Integration/Continuous Development
    B) Continuous Integration/Continuous Deployment
    C) Code Integration/Code Deployment
    D) Continuous Improvement/Continuous Deployment
    **Correct Answer: B) Continuous Integration/Continuous Deployment**

11. Which tool is commonly used for mocking and stubbing in JavaScript tests?
    A) Jest
    B) Chai
    C) Karma
    D) Cypress
    **Correct Answer: B) Chai**

12. Which testing framework is built on top of the Jasmine framework and is developed by Google?
    A) Karma
    B) QUnit
    C) Protractor
    D) Sinon
    **Correct Answer: C) Protractor**

13. Which library is primarily used for managing state in large JavaScript applications?
    A) MobX
    B) Redux
    C) Flux
    D) Vuex
    **Correct Answer: B) Redux**

14. Which tool is best for testing and debugging asynchronous JavaScript code?
    A) Async
    B) Await.js
    C) Async.js
    D) async/await syntax
    **Correct Answer: D) async/await syntax**

15. Which library is commonly used for animation and visual effects in JavaScript?
    A) Velocity.js
    B) Anime.js
    C) GSAP
    D) Phaser
    **Correct Answer: C) GSAP**

16. Which framework is known for its minimalistic approach and is used for building web components in JavaScript?
    A) Hyperapp
    B) Angular
    C) Ember.js
    D) Polymer
    **Correct Answer: D) Polymer**

17. Which library is best suited for reactive and component-based UI in JavaScript?
    A) Riot
    B) Backbone.js
    C) Aurelia
    D) Knockout.js
    **Correct Answer: A) Riot**

18. Which tool is commonly used for running JavaScript code outside of a browser environment?
    A) Node.js
    B) Deno
    C) Browserify
    D) RequireJS
    **Correct Answer: A) Node.js**

19. Which framework is known for its two-way data binding and is used for building dynamic web applications in JavaScript?
    A) Vue.js
    B) Ember.js
    C) Knockout.js
    D) Backbone.js
    **Correct Answer: C) Knockout.js**

20. Which library is often used for managing and manipulating dates and times in JavaScript?
    A) Day.js
    B) Chrono
    C) Luxon
    D) Moment.js
    **Correct Answer: D) Moment.js**


- Generate 10 code-based questions related to Modules and Bundlers in JavaScript, asking for the expected output or result.


# Here are ten code-based questions related to Testing, Libraries, and Frameworks in JavaScript, with the expected output or result:

1. **JavaScript Testing - Mocha & Chai**
    ```javascript
    // Q1.
    const assert = require('chai').assert;

    describe('Array', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
    ```
    **Expected Output**: Test case verifying the absence of value 4 within the array [1, 2, 3]. Assertion should pass.

2. **Jest Testing - Mock Functions**
    ```javascript
    // Q2.
    const myMock = jest.fn();
    myMock('hello', 'world');
    
    console.log(myMock.mock.calls);
    ```
    **Expected Output**: The mock function `myMock` is called with 'hello' and 'world'. `myMock.mock.calls` will display an array containing information about the calls made to `myMock`.

3. **React Testing Library**
    ```javascript
    // Q3.
    import { render, screen } from '@testing-library/react';
    import App from './App';

    test('renders welcome message', () => {
      render(<App />);
      const welcomeElement = screen.getByText(/Welcome/i);
      expect(welcomeElement).toBeInTheDocument();
    });
    ```
    **Expected Output**: Verifies if the text 'Welcome' is present in the rendered component 'App'.

4. **Jasmine Testing - Spies**
    ```javascript
    // Q4.
    function doSomething() {
      // some process
    }

    const spyOnDoSomething = spyOn(window, 'doSomething');
    doSomething();
    ```
    **Expected Output**: Jasmine's spy `spyOnDoSomething` spies on the `doSomething` function. Upon calling `doSomething()`, the spy monitors the function call.

5. **Mocha Testing - Asynchronous Testing**
    ```javascript
    // Q5.
    it('should resolve with the value "hello"', function() {
      return somePromiseFunction().then(function(data) {
        assert.equal(data, 'hello');
      });
    });
    ```
    **Expected Output**: Ensures the `somePromiseFunction()` resolves with the value 'hello'.

6. **Jest Testing - Snapshot Testing**
    ```javascript
    // Q6.
    import React from 'react';
    import renderer from 'react-test-renderer';
    import MyComponent from './MyComponent';

    test('renders correctly', () => {
      const tree = renderer.create(<MyComponent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    ```
    **Expected Output**: Captures and compares a snapshot of the rendered `MyComponent`, asserting that it matches the stored snapshot.

7. **Jest Testing - Mock Modules**
    ```javascript
    // Q7.
    jest.mock('axios');
    import axios from 'axios';

    axios.get.mockResolvedValue({ data: 'mocked data' });

    // ...code that uses axios.get

    expect(axios.get).toHaveBeenCalledTimes(1);
    ```
    **Expected Output**: Mocks the `axios` module and ensures that `axios.get` is called exactly once.

8. **Cypress Testing - UI Automation**
    ```javascript
    // Q8.
    describe('Login functionality', function() {
      it('successfully logs in', function() {
        cy.visit('/login');
        cy.get('input[name="username"]').type('myUsername');
        cy.get('input[name="password"]').type('myPassword');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
      });
    });
    ```
    **Expected Output**: Tests if the login functionality works by filling the form fields and clicking the submit button, then verifies the URL contains '/dashboard'.

9. **Jest Testing - Custom Matchers**
    ```javascript
    // Q9.
    expect.extend({
      toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
          return {
            message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
            pass: true,
          };
        } else {
          return {
            message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
            pass: false,
          };
        }
      },
    });

    test('checks if a number is within a specified range', () => {
      expect(10).toBeWithinRange(0, 20);
    });
    ```
    **Expected Output**: Defines a custom matcher `toBeWithinRange` and verifies if the number 10 is within the range of 0 and 20.

10. **Jest Testing - Setup and Teardown**
    ```javascript
    // Q10.
    let data;

    beforeEach(() => {
      data = ['apple', 'orange', 'banana'];
    });

    test('data contains orange', () => {
      expect(data).toContain('orange');
    });

    afterEach(() => {
      data = [];
    });
    ```
    **Expected Output**: Demonstrates setup and teardown with `beforeEach` and `afterEach` hooks. Verifies if the array `data` contains the string 'orange' and clears the data array after the test.
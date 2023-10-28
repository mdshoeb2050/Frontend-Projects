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



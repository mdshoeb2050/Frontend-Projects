# Functional Programming

Here are 20 multiple-choice questions on the topic of Functional Programming in JavaScript along with their respective correct answers:

1. What is a core principle of functional programming in JavaScript?
    A) Using only loops for iteration
    B) Manipulating global variables frequently
    C) Emphasizing immutability and pure functions
    D) Relying heavily on object-oriented programming

    Correct answer: C) Emphasizing immutability and pure functions

2. Which of the following is a characteristic of a pure function in JavaScript?
    A) Modifies variables outside its scope
    B) Produces side effects
    C) Always returns the same output for a given input
    D) Depends on a global state

    Correct answer: C) Always returns the same output for a given input

3. What does "immutability" refer to in functional programming?
    A) The ability to change variable values
    B) The inability to modify data once created
    C) The reliance on mutable state changes
    D) Altering variables in multiple scopes

    Correct answer: B) The inability to modify data once created

4. Which higher-order function is used to iterate through elements of an array in JavaScript and applies a function to each element?
    A) forEach()
    B) map()
    C) reduce()
    D) filter()

    Correct answer: A) forEach()

5. What is the purpose of the map() function in functional programming?
    A) To create a new array with elements that pass a test
    B) To execute a provided function on each element in the array
    C) To reduce the array to a single value
    D) To check if any array elements satisfy a condition

    Correct answer: B) To execute a provided function on each element in the array

6. Which function is used to combine all elements of an array into a single value from left to right?
    A) reduce()
    B) concat()
    C) join()
    D) flatMap()

    Correct answer: A) reduce()

7. In functional programming, what does the term "currying" refer to?
    A) The process of transforming an object into a function
    B) Dividing a function that takes multiple arguments into a sequence of functions
    C) Applying a function to multiple elements in an array
    D) The act of binding the 'this' keyword within a function

    Correct answer: B) Dividing a function that takes multiple arguments into a sequence of functions

8. What is the purpose of the filter() function in functional programming?
    A) To reduce the array to a single value
    B) To execute a provided function on each array element
    C) To create a new array with elements that pass a test
    D) To transform array elements into a string

    Correct answer: C) To create a new array with elements that pass a test

9. Which of these methods is used to merge two or more arrays in functional programming?
    A) join()
    B) merge()
    C) concat()
    D) mergeArrays()

    Correct answer: C) concat()

10. What does the term "side effect" mean in functional programming?
    A) An effect that alters an external variable's value
    B) A function that produces a single output
    C) The process of removing all effects from a function
    D) An error occurring within a function

    Correct answer: A) An effect that alters an external variable's value

11. Which function is used to return a new array with elements that satisfy a condition while keeping the original array intact?
    A) slice()
    B) filter()
    C) splice()
    D) map()

    Correct answer: B) filter()

12. In functional programming, what is the benefit of using recursion over loops?
    A) Recursion takes less memory than loops
    B) Recursion is faster in executing repetitive tasks
    C) Recursion is more readable and easier to debug
    D) Recursion doesn’t provide any advantages over loops

    Correct answer: C) Recursion is more readable and easier to debug

13. What is the result of invoking the 'bind()' method on a function in JavaScript?
    A) Executes the function immediately
    B) Returns a new function with a specified 'this' value and initial arguments
    C) Modifies the original function permanently
    D) Binds the function to the global scope

    Correct answer: B) Returns a new function with a specified 'this' value and initial arguments

14. Which method is used to extract a section of an array and returns a new array without modifying the original one?
    A) slice()
    B) splice()
    C) extract()
    D) cut()

    Correct answer: A) slice()

15. What is the purpose of the every() method in functional programming?
    A) Checks if any array element satisfies a condition
    B) Tests whether all array elements pass a test
    C) Executes a provided function on each array element
    D) Reduces the array to a single value

    Correct answer: B) Tests whether all array elements pass a test

16. What does the term "higher-order function" refer to in functional programming?
    A) A function that operates on other functions, either by taking them as arguments or by returning them
    B) A function that only works on primitive data types
    C) A function with a high complexity level
    D) A function with a significant number of arguments

    Correct answer: A) A function that operates on other functions, either by taking them as arguments or by returning them

17. Which method is used to join all elements of an array into a string?
    A) toString()
    B) join()
    C) concat()
    D) stringify()

    Correct answer: B) join()

18. In functional programming, what does the term "composition" mean?
    A) The process of combining two functions to create a new one
    B) The act of dividing a function into multiple smaller functions
    C) The removal of a function's side effects
    D) The transformation of data types in a function

    Correct answer: A) The process of combining two functions to create a new one

19. What is the purpose of the flatMap() method in functional programming?
    A) Executes a provided function on each array element
    B) Creates a new array by adding subarrays together
    C) Flattens and maps array elements to a single level
    D) Filters array elements based on a condition

    Correct answer: C) Flattens and maps array elements to a single level

20. Which method is used to sort the elements of an array in functional programming?
    A) order()
    B) arrange()
    C) sort()
    D) organize()

    Correct answer: C) sort()

These questions cover a range of concepts in functional programming in JavaScript, including pure functions, higher-order functions, array manipulation, immutability, recursion, and more.




# Here are 10 code-based questions related to Functional Programming in JavaScript, asking for the expected output or result:

1. **Question 1:**
```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
[1, 4, 9, 16, 25]
```

2. **Question 2:**
```javascript
const words = ['apple', 'banana', 'orange'];

const wordLengths = words.map(word => word.length);

console.log(wordLengths);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
[5, 6, 6]
```

3. **Question 3:**
```javascript
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
150
```

4. **Question 4:**
```javascript
const prices = [10, 20, 30, 40, 50];

const totalPrice = prices.reduce((acc, price) => acc + price, 0);

console.log(totalPrice);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
150
```

5. **Question 5:**
```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
[2, 4]
```

6. **Question 6:**
```javascript
const words = ['apple', 'banana', 'orange'];

const hasLetterA = words.some(word => word.includes('a'));

console.log(hasLetterA);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
true
```

7. **Question 7:**
```javascript
const numbers = [1, 2, 3, 4, 5];

const sumOfSquares = numbers.map(num => num * num).reduce((acc, square) => acc + square, 0);

console.log(sumOfSquares);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
55
```

8. **Question 8:**
```javascript
const words = ['apple', 'banana', 'orange'];

const concatenatedWords = words.reduce((acc, word) => acc + ' ' + word, '');

console.log(concatenatedWords);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
apple banana orange
```

9. **Question 9:**
```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num * num);

console.log(squaredEvenNumbers);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
[4, 16]
```

10. **Question 10:**
```javascript
const words = ['apple', 'banana', 'orange'];

const capitalizedWords = words.map(word => word.toUpperCase());

console.log(capitalizedWords);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
['APPLE', 'BANANA', 'ORANGE']
```

These questions cover various functional programming methods in JavaScript such as map, reduce, filter, and demonstrate their expected output when applied to arrays.


# Design patterns in JavaScript

# Here are 20 multiple-choice questions on the topic of Design Patterns in JavaScript, along with their respective correct answers:

1. What is the purpose of the Singleton design pattern in JavaScript?
    A) To ensure only one instance of a class is created
    B) To organize code into modular units
    C) To handle errors and exceptions
    D) To create multiple instances of a class

    Correct answer: A) To ensure only one instance of a class is created

2. Which design pattern promotes creating an interface for creating objects but allows subclasses to alter the type of objects that will be created?
    A) Prototype Pattern
    B) Singleton Pattern
    C) Factory Pattern
    D) Observer Pattern

    Correct answer: C) Factory Pattern

3. In JavaScript, which design pattern is used to separate the construction of a complex object from its representation, allowing the same construction process to create various representations?
    A) Singleton Pattern
    B) Builder Pattern
    C) Observer Pattern
    D) Decorator Pattern

    Correct answer: B) Builder Pattern

4. What does the Observer design pattern aim to achieve in JavaScript?
    A) To define a one-to-many dependency between objects
    B) To prevent the instantiation of multiple objects
    C) To handle error scenarios in code
    D) To encapsulate object creation logic

    Correct answer: A) To define a one-to-many dependency between objects

5. Which design pattern in JavaScript focuses on adding new functionalities to objects dynamically without altering their structure?
    A) Observer Pattern
    B) Adapter Pattern
    C) Decorator Pattern
    D) Proxy Pattern

    Correct answer: C) Decorator Pattern

6. What design pattern is used to provide a surrogate or placeholder for another object to control access to it?
    A) Proxy Pattern
    B) Module Pattern
    C) Factory Pattern
    D) Adapter Pattern

    Correct answer: A) Proxy Pattern

7. What is the main purpose of the Factory Method design pattern in JavaScript?
    A) To create objects based on a class hierarchy
    B) To prevent the creation of multiple instances of a class
    C) To modify object properties dynamically
    D) To organize code into modules

    Correct answer: A) To create objects based on a class hierarchy

8. Which design pattern focuses on restricting direct access to some object's components and allows access only through a set of defined methods?
    A) Adapter Pattern
    B) Facade Pattern
    C) Proxy Pattern
    D) Composite Pattern

    Correct answer: C) Proxy Pattern

9. The Command design pattern in JavaScript aims to:
    A) Encapsulate a request as an object
    B) Provide a way to access elements sequentially
    C) Modify object properties dynamically
    D) Create objects based on a class hierarchy

    Correct answer: A) Encapsulate a request as an object

10. Which design pattern is primarily used to convert the interface of a class into another interface that clients expect?
    A) Decorator Pattern
    B) Adapter Pattern
    C) Singleton Pattern
    D) Strategy Pattern

    Correct answer: B) Adapter Pattern

11. In JavaScript, the Strategy design pattern is primarily used to:
    A) Define a one-to-many dependency between objects
    B) Provide a way to access elements sequentially
    C) Encapsulate interchangeable algorithms
    D) Modify object properties dynamically

    Correct answer: C) Encapsulate interchangeable algorithms

12. What is the primary objective of the Facade design pattern in JavaScript?
    A) To encapsulate a request as an object
    B) To provide a way to access elements sequentially
    C) To simplify the interface of a complex system
    D) To restrict direct access to object components

    Correct answer: C) To simplify the interface of a complex system

13. Which design pattern allows the composition of objects into tree structures to represent part-whole hierarchies?
    A) Facade Pattern
    B) Composite Pattern
    C) Observer Pattern
    D) Factory Pattern

    Correct answer: B) Composite Pattern

14. The Chain of Responsibility design pattern in JavaScript is used for:
    A) Combining objects into a tree structure
    B) Defining a one-to-many dependency between objects
    C) Passing a request along a chain of handlers
    D) Simplifying the interface of a complex system

    Correct answer: C) Passing a request along a chain of handlers

15. What is the primary purpose of the Module design pattern in JavaScript?
    A) To combine objects into tree structures
    B) To provide a way to access elements sequentially
    C) To encapsulate functions and objects into independent modules
    D) To restrict direct access to object components

    Correct answer: C) To encapsulate functions and objects into independent modules

16. Which design pattern is used to combine multiple objects into a single object to provide a more straightforward interface?
    A) Composite Pattern
    B) Facade Pattern
    C) Adapter Pattern
    D) Strategy Pattern

    Correct answer: B) Facade Pattern

17. The Interpreter design pattern in JavaScript is primarily used for:
    A) Creating complex objects based on class hierarchies
    B) Decoupling an abstraction from its implementation
    C) Defining a grammar for interpreting language syntax
    D) Handling requests by passing them through a series of handlers

    Correct answer: C) Defining a grammar for interpreting language syntax

18. What is the primary purpose of the Mediator design pattern in JavaScript?
    A) Decoupling an abstraction from its implementation
    B) Defining a one-to-many dependency between objects
    C) Defining a mediator to handle communication between objects
    D) Creating complex objects based on class hierarchies

    Correct answer: C) Defining a mediator to handle communication between objects

19. The Flyweight design pattern in JavaScript is used to:
    A) Define a one-to-many dependency between objects
    B) Decouple an abstraction from its implementation
    C) Create objects based on a class hierarchy
    D) Reduce memory usage by sharing data across objects

    Correct answer: D) Reduce memory usage by sharing data across objects

20. What is the primary purpose of the Chain of Responsibility design pattern in JavaScript?
    A) Decoupling an abstraction from its implementation
    B) Simplifying the interface of a complex system
    C) Passing a request along a chain of handlers
    D) Combining objects into tree structures

    Correct answer: C) Passing a request along a chain of handlers

These questions cover a range of design patterns in JavaScript and their primary purposes or functionalities.


# Here are 10 code-based questions related to design patterns in JavaScript, asking for the expected output or result:

1. **Question 1:**
```javascript
// Singleton Design Pattern
const Singleton = (function() {
  let instance;
  
  function createInstance() {
    return { message: "Hello, I am a Singleton!" };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
true
```

2. **Question 2:**
```javascript
// Factory Design Pattern
function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function(type) {
  if (type === 'car') {
    return new Car();
  } else if (type === 'bike') {
    return new Bike();
  }
};

function Car() {
  this.type = 'car';
}

function Bike() {
  this.type = 'bike';
}

const factory = new VehicleFactory();
const car = factory.createVehicle('car');
const bike = factory.createVehicle('bike');

console.log(car.type + ' ' + bike.type);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
car bike
```

3. **Question 3:**
```javascript
// Observer Design Pattern
function ObserverList() {
  this.observers = [];
}

ObserverList.prototype.add = function(obj) {
  this.observers.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observers.length;
};

const observerList = new ObserverList();
observerList.add({ id: 1 });
observerList.add({ id: 2 });

console.log(observerList.count());
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
2
```

4. **Question 4:**
```javascript
// Builder Design Pattern
function Sandwich() {
  this.ingredients = [];
}

Sandwich.prototype.addIngredient = function(ingredient) {
  this.ingredients.push(ingredient);
  return this;
};

const sandwich = new Sandwich();
const order = sandwich.addIngredient('Bread').addIngredient('Cheese');

console.log(order.ingredients.join(', '));
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
Bread, Cheese
```

5. **Question 5:**
```javascript
// Decorator Design Pattern
function Coffee() {
  this.cost = function() {
    return 5;
  };
}

function Milk(coffee) {
  this.coffee = coffee;
  this.cost = function() {
    return this.coffee.cost() + 2;
  };
}

const coffee = new Coffee();
const coffeeWithMilk = new Milk(coffee);

console.log(coffeeWithMilk.cost());
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
7
```

6. **Question 6:**
```javascript
// Proxy Design Pattern
const Network = {
  accessAllowed: false
};

const ProxyNetwork = {
  accessAllowed: true
};

console.log(ProxyNetwork.accessAllowed === Network.accessAllowed);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
false
```

7. **Question 7:**
```javascript
// Command Design Pattern
function Calculator() {
  this.execute = function(val) {
    return val;
  };
}

const calc = new Calculator();
const result = calc.execute(10);

console.log(result);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
10
```

8. **Question 8:**
```javascript
// Adapter Design Pattern
function Book() {
  this.open = function() {
    return "The book is open.";
  };
}

function EReader() {
  this.turnOn = function() {
    return "The e-reader is on.";
  };
}

function EReaderAdapter() {
  const eReader = new EReader();

  this.open = function() {
    return eReader.turnOn();
  };
}

const eReaderAdapter = new EReaderAdapter();
const result = eReaderAdapter.open();

console.log(result);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
The e-reader is on.
```

9. **Question 9:**
```javascript
// Facade Design Pattern
function PowerButton() {
  this.press = function() {
    return "The device is powered on.";
  };
}

function VolumeButton() {
  this.changeVolume = function() {
    return "The volume is changed.";
  };
}

function MusicPlayer() {
  this.power = new PowerButton();
  this.volume = new VolumeButton();
  this.play = function() {
    return "Music is playing.";
  };
}

const musicPlayer = new MusicPlayer();
const result = musicPlayer.power.press();

console.log(result);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
The device is powered on.
```

10. **Question 10:**
```javascript
// Composite Design Pattern
function File(name) {
  this.name = name;
  this.type = 'file';
}

function Folder(name) {
  this.name = name;
  this.type = 'folder';
  this.files = [];
}

Folder.prototype.add = function(file) {
  this.files.push(file);
};

const file1 = new File('file1.txt');
const file2 = new File('file2.txt');
const folder = new Folder('Folder');

folder.add(file1);
folder.add(file2);

console.log(folder.files[0].name + ' ' + folder.files[1].name);
```
**What is the expected output when the above code is executed?**

**Answer:**
The expected output will be:
```
file1.txt file2.txt
```

These questions focus on code snippets related to different design patterns in JavaScript, testing your understanding of their usage and the expected outcomes when implemented.



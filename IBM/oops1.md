Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" which can contain data in the form of fields (attributes or properties) and code in the form of methods (functions or procedures). OOP concepts include Abstraction, Encapsulation, Inheritance, and Polymorphism. Here is an example showcasing these OOP principles using a hypothetical scenario of a car.

### OOP Concepts with a Car Example:

#### 1. **Abstraction:**
   - Abstraction is about representing essential features without including the background details.

```java
// Abstraction: Car as an abstract concept
public abstract class Car {
    private String model;
    
    public Car(String model) {
        this.model = model;
    }
    
    // Abstract method representing starting the car
    public abstract void start();
}

// Concrete class implementing Car
public class Sedan extends Car {
    public Sedan(String model) {
        super(model);
    }
    
    // Implementing the abstract method
    @Override
    public void start() {
        System.out.println("Starting " + getModel() + " Sedan...");
    }
    
    public String getModel() {
        return model;
    }
}
```

#### 2. **Encapsulation:**
   - Encapsulation involves bundling the data (attributes) and methods that operate on the data into a single unit (class).

```java
// Encapsulation: Attributes and methods are encapsulated within the Car class
public class Car {
    private String model;
    private int year;

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
```

#### 3. **Inheritance:**
   - Inheritance allows a class (subclass) to inherit attributes and behaviors from another class (superclass).

```java
// Inheritance: Sedan class inheriting from Car class
public class Sedan extends Car {
    // Implementations specific to Sedan
}
```

#### 4. **Polymorphism:**
   - Polymorphism allows objects of different classes to be treated as objects of a common superclass.

```java
// Polymorphism: Treating Sedan and SUV as objects of the Car class
Car myCar = new Sedan("Toyota");
myCar.start();
```

This example demonstrates how OOP concepts are applied in the context of a car. Abstraction helps to define a generic car and its behaviors, Encapsulation bundles the car's properties and methods within the class, Inheritance allows specific types of cars (Sedan) to inherit from a general Car class, and Polymorphism showcases the ability to treat different types of cars uniformly.
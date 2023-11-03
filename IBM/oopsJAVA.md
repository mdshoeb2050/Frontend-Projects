# Abstraction

Abstraction is a fundamental concept in object-oriented programming that focuses on hiding the complex implementation details while showing only the necessary features of an object. In Java, abstraction is achieved through abstract classes and interfaces.

### Example of Abstraction using Java:

```java
// Abstract class
abstract class Shape {
    // Abstract method (no method body)
    public abstract void draw();
}

// Concrete class inheriting from the abstract class
class Circle extends Shape {
    // Implementing the abstract method
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle extends Shape {
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

public class AbstractionExample {
    public static void main(String[] args) {
        // Creating objects of concrete classes
        Shape circle = new Circle();
        Shape rectangle = new Rectangle();

        // Calling the abstract method
        circle.draw(); // Output: Drawing Circle
        rectangle.draw(); // Output: Drawing Rectangle
    }
}
```

Explanation:

- The `Shape` class is an abstract class that contains an abstract method `draw()`. Abstract methods are defined without an implementation in the abstract class.
- `Circle` and `Rectangle` are concrete classes that extend the `Shape` class and provide implementations for the abstract `draw()` method.
- The `draw()` method in each concrete class specifies how a circle or rectangle is drawn.
- In the `main()` method, objects of concrete classes `Circle` and `Rectangle` are created using the abstract class `Shape`. They are referred to by the type of the abstract class, which is an example of abstraction.

This example demonstrates how abstraction in Java allows you to define a blueprint for classes by using abstract classes or interfaces, providing a way to hide the implementation details while allowing specific implementations in the concrete classes. The abstract method `draw()` in the `Shape` class declares the intention that any shape must have a `draw()` method, but the specific implementation is left to the concrete classes.







# Encapsulation

Encapsulation is a fundamental concept in object-oriented programming that involves bundling the data (attributes) and methods (behaviors) that operate on the data into a single unit known as a class. The key principle is to hide the internal state of an object and only expose necessary functionalities through well-defined interfaces. Encapsulation is achieved in Java using access modifiers such as private, protected, and public to control the access to class members.

### Example of Encapsulation in Java with an Industry Scenario:

Let's consider an example of an Employee class encapsulating its data using private access modifiers:

```java
public class Employee {
    private int employeeId;
    private String employeeName;
    private double salary;

    // Getters and setters to access and modify private member variables
    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        if (salary > 0) {
            this.salary = salary;
        } else {
            System.out.println("Invalid salary");
        }
    }
}
```

Explanation:

- In this scenario, the `Employee` class encapsulates the employee data (employeeId, employeeName, salary) using private access modifiers.
- The member variables are private, meaning they can only be accessed within the `Employee` class itself.
- To access and modify these private member variables, public getter and setter methods are provided. These methods control the access to the encapsulated data.
- Getters allow other classes to retrieve the values of employee data, and setters enable them to set or modify these values. For instance, `getSalary()` retrieves the salary, and `setSalary()` modifies it, ensuring the salary is set only if it's a positive value.

In an industry scenario, encapsulation in Java's Employee class is like a real-world employee record system where the data (employeeId, employeeName, salary) is kept private and can only be accessed or modified through authorized methods (getters and setters). This ensures data integrity and prevents unauthorized direct access, following the principle of encapsulation.







# Inheritance 

# explain Inheritance concept with an industry  example in java language .

Inheritance is a fundamental concept in object-oriented programming that allows a new class (derived or child class) to inherit attributes and methods from an existing class (base or parent class). This facilitates code reusability and establishes an "is-a" relationship between classes. In Java, inheritance is implemented using the `extends` keyword.

### Example of Inheritance in Java with an Industry Scenario:

Let's consider an example of a software company that deals with various types of employees, including regular employees and managers. We'll create a base class `Employee` and derived classes `RegularEmployee` and `Manager` to showcase inheritance:

```java
// Base class
class Employee {
    private int employeeId;
    private String employeeName;

    public Employee(int employeeId, String employeeName) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void work() {
        System.out.println("Performing general duties as an employee.");
    }
}

// Derived class (inherits from Employee)
class RegularEmployee extends Employee {
    public RegularEmployee(int employeeId, String employeeName) {
        super(employeeId, employeeName);
    }

    @Override
    public void work() {
        System.out.println("Performing specific tasks as a regular employee.");
    }
}

// Another derived class (inherits from Employee)
class Manager extends Employee {
    public Manager(int employeeId, String employeeName) {
        super(employeeId, employeeName);
    }

    @Override
    public void work() {
        System.out.println("Managing and supervising tasks as a manager.");
    }

    public void conductMeeting() {
        System.out.println("Conducting a team meeting.");
    }
}
```

Explanation:

- The `Employee` class serves as the base class, containing common attributes like employeeId and employeeName, and a generic `work()` method.
- The `RegularEmployee` and `Manager` classes are derived classes that inherit from the `Employee` class using the `extends` keyword.
- Each derived class inherits the attributes and methods from the `Employee` class.
- Additionally, they can have their specialized behavior. For example, `RegularEmployee` overrides the `work()` method to perform specific tasks, and `Manager` introduces a new method `conductMeeting()` along with overriding the `work()` method.

In this industry scenario, the software company's employee hierarchy demonstrates inheritance in Java. Both types of employees (regular and manager) inherit common attributes and methods from the base `Employee` class while having their specific behaviors tailored to their roles. This reuse of common attributes and behaviors showcases the benefits of inheritance in an object-oriented programming paradigm.








# explain Polymorphism concept with an industry  example in java language .


Polymorphism, a core concept in object-oriented programming, allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to be used for entities of different types, providing flexibility and extensibility in code. In Java, polymorphism is achieved through method overriding and method overloading.

### Example of Polymorphism in Java with an Industry Scenario:

Let's consider an example from an educational institution where the concept of polymorphism is used for handling different types of courses (Science, Arts, and Commerce) that implement a common interface `Course`:

```java
// Course interface
interface Course {
    void enroll(); // Common method for enrolling in a course
}

// Science course class implementing Course interface
class ScienceCourse implements Course {
    public void enroll() {
        System.out.println("Enrolled in Science course");
    }
}

// Arts course class implementing Course interface
class ArtsCourse implements Course {
    public void enroll() {
        System.out.println("Enrolled in Arts course");
    }
}

// Commerce course class implementing Course interface
class CommerceCourse implements Course {
    public void enroll() {
        System.out.println("Enrolled in Commerce course");
    }
}

// Educational institution handling course enrollment
public class EducationalInstitution {
    public static void main(String[] args) {
        // Polymorphism in action
        Course scienceCourse = new ScienceCourse();
        Course artsCourse = new ArtsCourse();
        Course commerceCourse = new CommerceCourse();

        // Enroll students in different courses using a common method
        enrollStudent(scienceCourse);
        enrollStudent(artsCourse);
        enrollStudent(commerceCourse);
    }

    public static void enrollStudent(Course course) {
        course.enroll(); // Polymorphic method call
    }
}
```

Explanation:

- The `Course` interface defines a common method `enroll()` that each course class must implement.
- The `ScienceCourse`, `ArtsCourse`, and `CommerceCourse` classes implement the `Course` interface and provide their specific implementation for the `enroll()` method.
- In the `EducationalInstitution` class, the `enrollStudent()` method demonstrates polymorphism. It takes a `Course` interface as a parameter and calls the `enroll()` method on different course objects without knowing their specific class types.
- This flexibility allows the same method `enrollStudent()` to work with different course types, demonstrating polymorphic behavior. During runtime, the specific `enroll()` method associated with the actual object type is executed.

In this industry scenario, the educational institution uses polymorphism to enroll students in different types of courses without needing separate methods for each course type. The ability to treat different types of courses uniformly, using a common interface, demonstrates the power of polymorphism in Java.
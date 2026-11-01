
export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type Lesson = {
  id: string;
  title: string;
  introduction: string;
  sections: { heading: string; content: string }[];
  example?: string;
  exercise: string;
  quiz: QuizQuestion[];
};

export type CourseWeek = {
  title: string;
  lessons: Lesson[];
  assignment: string;
};

export type Course = {
  title: string;
  description: string;
  project: string;
  weeks: CourseWeek[];
};

function makeLesson(
  id: number,
  title: string,
  introduction: string,
  concept: string,
  example: string,
  exercise: string,
  quiz: QuizQuestion[]
): Lesson {
  return {
    id: `lesson-${id}`,
    title,
    introduction,
    sections: [
      { heading: "Concepts explained", content: concept },
      {
        heading: "Understand the example",
        content: "Read the code carefully, identify the input and output, and then try changing the values."
      }
    ],
    example,
    exercise,
    quiz
  };
}

const q = (
  question: string,
  options: string[],
  answer: string,
  explanation: string
): QuizQuestion => ({ question, options, answer, explanation });

export const javaCourse: Course = {
  title: "Java Programming",
  description:
    "Learn Java from the basics to object-oriented programming, collections, exception handling and a final project.",
  project: "Student Record Management System",
  weeks: [
    {
      title: "Week 1: Java Fundamentals",
      assignment:
        "Create a Java program that displays your profile, stores basic details in variables, and calculates the total of three marks.",
      lessons: [
        makeLesson(
          1,
          "Introduction to Java",
          "Java is a general-purpose programming language commonly used for backend services, enterprise software and Android development.",
          "Java source code is compiled into bytecode. The Java Virtual Machine (JVM) executes that bytecode. The Java Development Kit (JDK) provides tools for developing Java programs.",
          `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
          "Write a program that prints your name and your career goal.",
          [
            q("Who executes Java bytecode?", ["JVM", "HTML", "CSS", "SQL"], "JVM", "The Java Virtual Machine executes Java bytecode."),
            q("Which tool contains Java development tools?", ["JDK", "JPG", "HTTP", "DOM"], "JDK", "The JDK contains tools used to compile and develop Java programs."),
            q("Which method is the usual entry point of a Java application?", ["start()", "main()", "runCode()", "begin()"], "main()", "A standard Java application starts from its main method."),
            q("What is Java bytecode?", ["Machine-specific source", "Compiled intermediate instructions", "A database table", "An image format"], "Compiled intermediate instructions", "Java compilers produce bytecode for the JVM."),
            q("Which statement prints text to the console?", ["System.out.println()", "console.read()", "echo.java()", "print.line()"], "System.out.println()", "System.out.println prints text and moves to a new line.")
          ]
        ),
        makeLesson(
          2,
          "Installing Java and Running a Program",
          "To run Java programs locally, install a suitable JDK and use a code editor or terminal.",
          "Save a public class in a file with the same name, such as Main.java. Compile it using javac Main.java and run it using java Main. The run command uses the class name without the .java extension.",
          `// Save as Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("My first program");
    }
}

// Terminal:
// javac Main.java
// java Main`,
          "Create Main.java, compile it and run it from your terminal.",
          [
            q("Which command compiles Main.java?", ["java Main.java", "javac Main.java", "run Main", "compile java"], "javac Main.java", "javac is the Java compiler command."),
            q("Which command runs the compiled Main class?", ["java Main", "javac Main", "start Main.java", "open Main"], "java Main", "The java command launches the class."),
            q("What extension do Java source files use?", [".js", ".java", ".py", ".class"], ".java", "Java source code files use the .java extension."),
            q("If a public class is named Main, what should its source file be named?", ["Program.java", "Main.java", "main.txt", "Java.class"], "Main.java", "The public class name must match the source filename."),
            q("What does the JDK provide?", ["Only a web browser", "Java development and compilation tools", "Only a text file", "A database server"], "Java development and compilation tools", "The JDK includes the compiler and other development utilities.")
          ]
        ),
        makeLesson(
          3,
          "Java Syntax and Variables",
          "Variables store values that a program can use and change while it runs.",
          "Java is statically typed: a variable has a declared type. Statements usually end with a semicolon. Identifiers should be descriptive, and Java is case-sensitive, so age and Age are different identifiers.",
          `public class Main {
    public static void main(String[] args) {
        int age = 20;
        String name = "Ravi";
        System.out.println(name);
        System.out.println(age);
    }
}`,
          "Declare variables for your name, age and college, then print each one.",
          [
            q("Which character usually ends a Java statement?", [":", ";", ",", "#"], ";", "Most Java statements end with a semicolon."),
            q("Which type stores whole numbers?", ["int", "String", "boolean", "char[] only"], "int", "int is a primitive type for integer values."),
            q("Is Java case-sensitive?", ["Yes", "No", "Only for numbers", "Only in comments"], "Yes", "Java treats identifiers with different capitalization as different names."),
            q("Which is a valid variable declaration?", ["int score = 90;", "score int = 90", "integer score := 90", "var = score 90;"], "int score = 90;", "The type appears before the variable name in this declaration."),
            q("Which type stores text such as a person's name?", ["boolean", "String", "int", "double only"], "String", "String represents a sequence of characters.")
          ]
        ),
        makeLesson(
          4,
          "Java Data Types and Type Conversion",
          "Java has primitive types for basic values and reference types for objects.",
          "Common primitive types include int, double, char and boolean. String is a reference type. Widening conversions such as int to double are generally automatic; narrowing conversions may require an explicit cast.",
          `int count = 5;
double price = 12.5;
char grade = 'A';
boolean passed = true;

int whole = (int) 9.8;
System.out.println(whole); // 9`,
          "Create variables using int, double, char and boolean. Try converting a double to an int.",
          [
            q("Which type stores true or false?", ["int", "boolean", "char", "String"], "boolean", "boolean stores one of two logical values: true or false."),
            q("Which type is suitable for decimal numbers?", ["double", "boolean", "char", "byte[]"], "double", "double is commonly used for floating-point numbers."),
            q("How is a single character written as a char literal?", ['"A"', "'A'", "`A`", "{A}"], "'A'", "Java char literals use single quotes."),
            q("What is narrowing conversion?", ["Converting to a potentially less precise or smaller type", "Printing a value", "Declaring a class", "Importing a package"], "Converting to a potentially less precise or smaller type", "Narrowing may lose information and often needs an explicit cast."),
            q("What value results from (int) 9.8?", ["9", "10", "9.8", "An automatic rounding to 10"], "9", "Casting a double to int truncates the fractional part.")
          ]
        )
      ]
    },
    {
      title: "Week 2: Operators and Control Flow",
      assignment:
        "Create a menu-driven calculator that accepts two numbers and performs an operation selected by the user.",
      lessons: [
        makeLesson(
          5,
          "Java Operators",
          "Operators perform calculations, comparisons and logical checks.",
          "Arithmetic operators include +, -, *, / and %. Comparison operators include ==, !=, < and >=. Logical operators include &&, || and !. Integer division discards the fractional part.",
          `int a = 7;
int b = 2;
System.out.println(a + b); // 9
System.out.println(a / b); // 3
System.out.println(a % b); // 1`,
          "Write expressions to calculate a total, an average and the remainder after division.",
          [
            q("Which operator gives the remainder?", ["/", "%", "*", "&&"], "%", "The modulo operator returns the remainder."),
            q("What is 7 / 2 when both values are int?", ["3", "3.5", "4", "2"], "3", "Integer division truncates the fractional part."),
            q("Which operator means logical AND?", ["||", "!", "&&", "=="], "&&", "&& evaluates to true when both conditions are true."),
            q("Which operator tests equality of primitive values?", ["=", "==", "!=", "%"], "==", "The equality operator compares primitive values."),
            q("What does ++ usually do to a numeric variable?", ["Decreases by one", "Increases by one", "Doubles it", "Converts it to text"], "Increases by one", "The increment operator adds one.")
          ]
        ),
        makeLesson(
          6,
          "If, Else If and Else",
          "Conditional statements let a program choose which instructions to execute.",
          "An if statement runs a block when its condition is true. else if checks another condition when earlier conditions were false. else handles the remaining case. Use braces to make blocks clear.",
          `int marks = 82;

if (marks >= 90) {
    System.out.println("A");
} else if (marks >= 75) {
    System.out.println("B");
} else {
    System.out.println("Keep practising");
}`,
          "Write a program that checks whether a number is positive, negative or zero.",
          [
            q("Which keyword starts a conditional?", ["when", "if", "choose", "caseif"], "if", "if introduces a conditional branch."),
            q("When does else execute?", ["Always", "When preceding if/else-if conditions are false", "Only after a loop", "Only when compiling"], "When preceding if/else-if conditions are false", "else handles the remaining branch."),
            q("Which operator means greater than or equal to?", ["=>", ">=", "==", "><"], ">=", "The >= operator checks greater than or equal to."),
            q("What type of expression is commonly used in an if condition?", ["boolean", "String only", "A class name only", "A file path"], "boolean", "An if condition must evaluate to a boolean."),
            q("What should a program print for number == 0 in a positive/negative/zero check?", ["Positive", "Negative", "Zero", "Nothing can be checked"], "Zero", "Zero is neither positive nor negative.")
          ]
        ),
        makeLesson(
          7,
          "For and While Loops",
          "Loops repeat a block of code while a condition or iteration rule permits it.",
          "A for loop is useful when the iteration pattern is known. A while loop repeats while its condition remains true. Update loop variables carefully to avoid infinite loops.",
          `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

int count = 3;
while (count > 0) {
    System.out.println(count);
    count--;
}`,
          "Print the numbers from 1 to 10 and calculate their sum.",
          [
            q("Which loop is often used for a counted sequence?", ["for", "class", "import", "package"], "for", "A for loop commonly expresses initialization, condition and update."),
            q("When does a while loop continue?", ["While its condition is true", "Exactly once", "Only when the condition is false", "Only during compilation"], "While its condition is true", "The condition is checked before each iteration."),
            q("What can cause an infinite loop?", ["A condition that never becomes false", "A semicolon in a statement", "A variable declaration", "A comment"], "A condition that never becomes false", "The loop must eventually stop if termination is intended."),
            q("What does break do inside a loop?", ["Skips to the next iteration", "Exits the nearest loop", "Restarts the program", "Declares a variable"], "Exits the nearest loop", "break immediately exits the loop it belongs to."),
            q("What does continue do?", ["Ends the entire application", "Skips to the next iteration", "Creates an object", "Compiles a file"], "Skips to the next iteration", "continue skips the rest of the current iteration.")
          ]
        ),
        makeLesson(
          8,
          "User Input and Console Output",
          "Programs often need to read information entered by a user and display results.",
          "Scanner can read console input. Use nextInt for integers and nextLine for a full line of text. Mixing nextInt and nextLine can leave a newline to consume, so handle that carefully.",
          `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        System.out.println("Age: " + age);
        sc.close();
    }
}`,
          "Ask for a user's name and age, then print a sentence containing both.",
          [
            q("Which class commonly reads console input?", ["Scanner", "Printer", "ConsoleWriterOnly", "ReaderSQL"], "Scanner", "java.util.Scanner can read console input."),
            q("Which import provides Scanner?", ["java.util.Scanner", "java.io.ScannerOnly", "java.lang.Scanner", "java.net.Input"], "java.util.Scanner", "Scanner is in the java.util package."),
            q("Which method reads an int with Scanner?", ["nextInt()", "readNumberText()", "getIntValue()", "inputInt"], "nextInt()", "nextInt reads an integer token."),
            q("Which method reads a full line of text?", ["nextLine()", "nextInt()", "nextBooleanOnly()", "printLine()"], "nextLine()", "nextLine reads the rest of the current line."),
            q("What does System.out.print do?", ["Prints without automatically adding a newline", "Reads keyboard input", "Closes a scanner", "Creates an integer"], "Prints without automatically adding a newline", "print writes output without appending a newline.")
          ]
        )
      ]
    },
    {
      title: "Week 3: Object-Oriented Programming",
      assignment:
        "Create a Student class with fields, a constructor and a method that displays a student's details. Create and use at least two objects.",
      lessons: [
        makeLesson(
          9,
          "Classes and Objects",
          "Object-oriented programming organizes code around objects that contain data and behaviour.",
          "A class defines a type. An object is an instance of a class. Fields store state, and methods define behaviour. The new keyword creates an object in common class-based examples.",
          `class Student {
    String name;
    int age;

    void display() {
        System.out.println(name + " " + age);
    }
}

Student s = new Student();
s.name = "Ravi";
s.age = 20;
s.display();`,
          "Create a Book class with title and author fields and a method to display them.",
          [
            q("What is a class?", ["A blueprint for objects", "A loop", "A number", "A compiler command"], "A blueprint for objects", "A class defines the fields and methods of its instances."),
            q("What is an object?", ["An instance of a class", "Only a comment", "A package import", "A boolean operator"], "An instance of a class", "Objects are created from class definitions."),
            q("Which keyword commonly creates an object?", ["new", "make", "object", "create"], "new", "The new operator creates an object."),
            q("What is a field?", ["A variable declared in a class or object context", "A loop keyword", "A package name only", "A compiler warning"], "A variable declared in a class or object context", "Fields hold object or class state."),
            q("What does a method define?", ["Behaviour or an operation", "Only a file extension", "A folder", "A numeric type"], "Behaviour or an operation", "Methods contain code that performs operations.")
          ]
        ),
        makeLesson(
          10,
          "Constructors and the this Keyword",
          "A constructor initializes a new object when it is created.",
          "A constructor has the same name as its class and no return type. Constructors can accept parameters. The this keyword refers to the current object and helps distinguish fields from parameters with the same names.",
          `class Student {
    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

Student s = new Student("Ravi", 20);`,
          "Add a constructor to your Book class that sets its title and author.",
          [
            q("What is the constructor name?", ["Any name", "The same as the class", "main only", "The package name"], "The same as the class", "A constructor uses the class name."),
            q("Does a constructor declare a return type?", ["Yes, always void", "No", "Only int", "Only String"], "No", "Constructors have no declared return type."),
            q("What does this refer to?", ["The current object", "The parent folder", "The compiler", "A static import"], "The current object", "this refers to the current instance."),
            q("When is a constructor normally called?", ["When an object is created", "When a comment is read", "Only after the program ends", "When a file is renamed"], "When an object is created", "The constructor initializes a new instance."),
            q("Why use constructor parameters?", ["To provide initial values", "To stop compilation", "To import packages automatically", "To create comments"], "To provide initial values", "Parameters allow callers to provide values during object creation.")
          ]
        ),
        makeLesson(
          11,
          "Inheritance and Polymorphism",
          "Inheritance lets a class build on another class, while polymorphism allows a common interface to have different implementations.",
          "A subclass extends a superclass. An overridden instance method can provide specialized behaviour. Use @Override to make the intention clear and help the compiler detect mistakes.",
          `class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}`,
          "Create a Vehicle class and a Car subclass with an overridden display method.",
          [
            q("Which keyword declares class inheritance?", ["extends", "inheritsFrom", "implementsOnly", "superclass"], "extends", "A class uses extends to inherit from another class."),
            q("What is method overriding?", ["A subclass provides a new implementation of an inherited method", "Deleting a class", "Renaming a file", "Declaring a variable"], "A subclass provides a new implementation of an inherited method", "Overriding changes the implementation used for a matching inherited method."),
            q("What does @Override help communicate?", ["That a method is intended to override an inherited method", "That a field is private", "That a file is executable", "That a class is abstract only"], "That a method is intended to override an inherited method", "The annotation helps the compiler verify the intended override."),
            q("What is a superclass?", ["A class being extended", "A loop counter", "A string literal", "An import statement"], "A class being extended", "The superclass is the parent class in inheritance."),
            q("What is polymorphism in this context?", ["Different implementations accessed through a common type", "Only one variable per class", "A way to print numbers", "A file format"], "Different implementations accessed through a common type", "Polymorphism allows calls to overridden methods to behave according to the actual object.")
          ]
        ),
        makeLesson(
          12,
          "Encapsulation and Access Modifiers",
          "Encapsulation protects an object's internal state and exposes a controlled way to use it.",
          "private restricts access to within the declaring class. public makes a member broadly accessible. Getters and setters can validate or control access to private fields. Keep fields private when direct external access is unnecessary.",
          `class Student {
    private int age;

    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }

    public int getAge() {
        return age;
    }
}`,
          "Make a BankAccount class with a private balance and a method to deposit a positive amount.",
          [
            q("Which modifier restricts direct access to the declaring class?", ["private", "public", "export", "global"], "private", "private members are accessible within their declaring class."),
            q("What is encapsulation?", ["Protecting internal state and controlling access", "Repeating a loop", "Converting Java to HTML", "Installing the JDK"], "Protecting internal state and controlling access", "Encapsulation groups data and behaviour and controls how state is accessed."),
            q("What does a getter commonly do?", ["Returns a field value", "Deletes the object", "Compiles the class", "Imports a package"], "Returns a field value", "A getter provides read access to a value."),
            q("Why validate a value in a setter?", ["To prevent invalid state", "To rename the class", "To add a comment", "To change Java syntax"], "To prevent invalid state", "Validation can reject values that violate class rules."),
            q("Which access modifier is broadly accessible from other classes, subject to visibility rules?", ["public", "private", "local", "hidden"], "public", "public allows access wherever the containing type and member are accessible.")
          ]
        )
      ]
    },
    {
      title: "Week 4: Collections, Exceptions and Project",
      assignment:
        "Finish the Student Record Management System, test it with different inputs, and document how each feature works.",
      lessons: [
        makeLesson(
          13,
          "Arrays and ArrayList",
          "Arrays and ArrayList both store multiple values, but they differ in size behaviour and available operations.",
          "An array has a fixed length after creation. ArrayList can grow or shrink as elements are added or removed. ArrayList uses a generic element type, such as ArrayList<String>, and is available from java.util.",
          `import java.util.ArrayList;

ArrayList<String> names = new ArrayList<>();
names.add("Ravi");
names.add("Sita");
System.out.println(names.get(0));
System.out.println(names.size());`,
          "Store five subject names in an ArrayList and print them using a loop.",
          [
            q("Can a normal Java array change length after creation?", ["No", "Yes, automatically", "Only with add()", "Only for strings"], "No", "An array's length is fixed once it is created."),
            q("Which collection can grow dynamically?", ["ArrayList", "A fixed-length array", "int", "char"], "ArrayList", "ArrayList supports adding and removing elements."),
            q("Which method adds an item to an ArrayList?", ["add()", "pushTextOnly()", "insertFile()", "appendJava()"], "add()", "add appends an element to the list."),
            q("Which method returns the element at an index?", ["get()", "size()", "clear()", "compile()"], "get()", "get(index) returns the element at that position."),
            q("What does size() return for an ArrayList?", ["Number of elements", "Last element", "Maximum possible memory", "Class name"], "Number of elements", "size returns the current element count.")
          ]
        ),
        makeLesson(
          14,
          "Java Collections and HashMap",
          "Collections provide reusable data structures for storing and managing groups of values.",
          "HashMap stores key-value pairs. Keys are unique, and putting a value for an existing key replaces the previous value. Use generics to specify key and value types.",
          `import java.util.HashMap;

HashMap<String, Integer> marks = new HashMap<>();
marks.put("Ravi", 85);
marks.put("Sita", 92);

System.out.println(marks.get("Ravi"));`,
          "Create a HashMap that maps three subject names to their marks.",
          [
            q("What does a HashMap store?", ["Key-value pairs", "Only a single number", "Only source code", "Only array indexes"], "Key-value pairs", "HashMap maps keys to associated values."),
            q("Which method adds or updates a mapping?", ["put()", "addLine()", "appendKeyOnly()", "writeMap()"], "put()", "put associates a key with a value."),
            q("What happens if put uses an existing key?", ["The associated value is replaced", "The program always stops", "The key is duplicated", "The map becomes an array"], "The associated value is replaced", "A map has at most one mapping for a given key."),
            q("Which method retrieves a value by key?", ["get()", "take()", "fetchRow()", "readKeyValue()"], "get()", "get(key) retrieves the value associated with that key."),
            q("Why use generics such as HashMap<String, Integer>?", ["To specify expected key and value types", "To turn Java into JavaScript", "To skip compilation", "To make every value a string"], "To specify expected key and value types", "Generics improve type safety and reduce casting.")
          ]
        ),
        makeLesson(
          15,
          "Exception Handling",
          "Exceptions represent problems that arise while a program runs and can be handled to prevent uncontrolled failure.",
          "Use try for code that may fail and catch to handle a matching exception. finally can perform cleanup. Checked exceptions may need to be caught or declared; unchecked exceptions include many programming errors.",
          `try {
    int result = 10 / 0;
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}`,
          "Ask the user for two integers and handle division by zero safely.",
          [
            q("Which block contains code that may throw an exception?", ["try", "catch", "package", "extends"], "try", "The try block surrounds code to monitor for exceptions."),
            q("Which block handles a matching exception?", ["catch", "class", "import", "main only"], "catch", "catch specifies how a matching exception should be handled."),
            q("What exception commonly results from integer division by zero?", ["ArithmeticException", "FileNotFoundException", "ClassNotFoundException", "IOException only"], "ArithmeticException", "Integer division by zero causes an ArithmeticException."),
            q("What is finally commonly used for?", ["Cleanup that should run after try/catch processing", "Declaring a class", "Repeating a loop", "Creating a package"], "Cleanup that should run after try/catch processing", "finally is often used for cleanup, although abrupt termination can prevent it from running."),
            q("What is the purpose of exception handling?", ["Responding to runtime problems in a controlled way", "Removing all bugs automatically", "Replacing every loop", "Changing source file names"], "Responding to runtime problems in a controlled way", "Handling exceptions lets an application respond meaningfully to failures.")
          ]
        ),
        makeLesson(
          16,
          "Final Project: Student Record Management System",
          "Combine classes, collections, loops and exception handling to build a small console application for student records.",
          "Create a Student class with an ID, name and marks. Store records in an ArrayList or a Map. Provide menu actions to add, view and search for students. Validate inputs and handle invalid menu choices.",
          `import java.util.ArrayList;

class Student {
    int id;
    String name;
    double marks;

    Student(int id, String name, double marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    void display() {
        System.out.println(id + " - " + name + " - " + marks);
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student(1, "Ravi", 85));
        students.add(new Student(2, "Sita", 92));

        for (Student student : students) {
            student.display();
        }
    }
}`,
          "Extend the starter code with a menu, adding records, listing records, searching by ID, and input validation.",
          [
            q("Which class represents one student in the starter project?", ["Student", "ArrayList", "Scanner", "System"], "Student", "Student groups the fields and behaviour for a student record."),
            q("Which collection stores multiple Student objects in the example?", ["ArrayList<Student>", "int only", "StringBuilder only", "System.out"], "ArrayList<Student>", "The ArrayList holds multiple Student objects."),
            q("What should a search-by-ID feature do?", ["Find a record matching the requested ID", "Delete every record", "Compile the project", "Rename the package"], "Find a record matching the requested ID", "A search compares the requested ID with stored records."),
            q("Why validate marks before saving a record?", ["To reject values outside the allowed range", "To increase the file size", "To remove all methods", "To change the JVM"], "To reject values outside the allowed range", "Validation prevents invalid data from entering the system."),
            q("Which is a good final testing practice?", ["Test valid and invalid inputs", "Test only one happy path", "Skip all error cases", "Remove the search feature"], "Test valid and invalid inputs", "Testing different input cases helps reveal bugs and missing validation.")
          ]
        )
      ]
    }
  ]
};

export default javaCourse;

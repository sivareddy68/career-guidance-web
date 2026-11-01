
export const programmingBasicsCourse = {
  id: "programming-basics",
  title: "Programming Basics",
  description:
    "A practical beginner course covering the programming concepts needed before learning cloud computing, IoT and other technical fields.",
  duration: "5 weeks",
  level: "Beginner",

  weeks: [
    {
      week: 1,
      title: "Programming Introduction",
      lessons: [
        {
          id: "pb-w1-l1",
          title: "What is Programming?",
          content: `
Programming means writing instructions that a computer can execute.

A program usually receives input, processes that information and produces output.

Example:

Input → Processing → Output

If a program receives two numbers:
Input: 10 and 20
Processing: Addition
Output: 30

Programming is used in websites, mobile applications, cloud systems, IoT devices, automation, artificial intelligence and many other areas.
`,
        },
        {
          id: "pb-w1-l2",
          title: "Programming Languages",
          content: `
Programming languages provide a way for humans to write instructions for computers.

Examples include:

Python:
Used in automation, AI, data science and backend development.

C:
Common in embedded systems and low-level programming.

Java:
Used for enterprise and backend applications.

JavaScript:
Widely used for web applications.

The important thing is to understand programming concepts first. Once the concepts are understood, learning another language becomes easier.
`,
        },
        {
          id: "pb-w1-l3",
          title: "Compiler and Interpreter",
          content: `
A compiler translates a program into a form that can be executed, often before the program runs.

An interpreter generally executes instructions through an interpreter environment.

Different languages use different execution models.

Examples:

C and C++ commonly use compilation.

Python commonly uses an interpreted execution model.

Understanding this difference helps explain how source code becomes executable behavior.
`,
        },
        {
          id: "pb-w1-l4",
          title: "Input, Processing and Output",
          content: `
Most basic programs can be understood using three stages:

Input:
Information provided to the program.

Processing:
Operations performed on that information.

Output:
The result produced by the program.

Example:

Input:
Student marks

Processing:
Calculate total and average

Output:
Student result
`,
        },
        {
          id: "pb-w1-l5",
          title: "Problem Solving",
          content: `
Before writing code, understand the problem.

A useful process is:

1. Read the problem carefully.
2. Identify the required input.
3. Identify the expected output.
4. Break the problem into smaller steps.
5. Write an algorithm or pseudocode.
6. Convert the logic into code.
7. Test the program.

This approach is especially useful when solving programming problems.
`,
        },
      ],

      quiz: [
        {
          question: "What is programming?",
          options: [
            "Writing instructions for a computer",
            "Repairing hardware",
            "Creating only documents",
            "Installing an operating system",
          ],
          answer: "Writing instructions for a computer",
        },
        {
          question: "Which language is widely used for AI and automation?",
          options: ["Python", "HTML", "CSS", "SQL"],
          answer: "Python",
        },
        {
          question: "What does input mean?",
          options: [
            "Information given to a program",
            "The final result",
            "A computer screen",
            "A programming error",
          ],
          answer: "Information given to a program",
        },
        {
          question: "What is processing?",
          options: [
            "Operations performed on input",
            "Deleting a file",
            "Opening a browser",
            "Changing a monitor",
          ],
          answer: "Operations performed on input",
        },
        {
          question: "What is output?",
          options: [
            "The result produced by a program",
            "Only program source code",
            "A programming language",
            "A computer cable",
          ],
          answer: "The result produced by a program",
        },
        {
          question: "Which language is commonly associated with embedded programming?",
          options: ["C", "HTML", "CSS", "SQL"],
          answer: "C",
        },
        {
          question: "Why should a problem be understood before coding?",
          options: [
            "To create correct program logic",
            "To avoid using variables",
            "To remove all testing",
            "To make the computer faster",
          ],
          answer: "To create correct program logic",
        },
        {
          question: "What is an algorithm?",
          options: [
            "A step-by-step solution",
            "A monitor",
            "A keyboard",
            "A database",
          ],
          answer: "A step-by-step solution",
        },
        {
          question: "What usually comes after processing?",
          options: ["Output", "Input", "Compiler", "Variable"],
          answer: "Output",
        },
        {
          question: "Which is a good programming habit?",
          options: [
            "Break large problems into smaller problems",
            "Never test programs",
            "Write random code",
            "Ignore the requirements",
          ],
          answer: "Break large problems into smaller problems",
        },
      ],

      assignment:
        "Write an algorithm for calculating the total and average marks of five subjects.",
    },

    {
      week: 2,
      title: "Variables and Data",
      lessons: [
        {
          id: "pb-w2-l1",
          title: "Variables",
          content: `
A variable is a named location used to store information.

Example:

age = 20

The variable is age and its value is 20.

Variables allow programs to store information and use it later.

Examples include:

name
age
salary
temperature
score
`,
        },
        {
          id: "pb-w2-l2",
          title: "Numbers and Text",
          content: `
Programs commonly work with numbers and text.

Examples of numbers:

10
25
3.14
-5

Examples of text:

"Hello"
"Cloud Computing"
"IoT"

Different programming languages provide different data types for representing these values.
`,
        },
        {
          id: "pb-w2-l3",
          title: "Boolean Values",
          content: `
Boolean values represent two states:

True
False

Boolean values are very important for decision making.

Examples:

is_logged_in = true

device_connected = false

A program can use these values to determine what action should happen next.
`,
        },
        {
          id: "pb-w2-l4",
          title: "Arithmetic Operations",
          content: `
Programs can perform mathematical operations.

Common operators:

+ Addition
- Subtraction
* Multiplication
/ Division
% Modulus

Example:

total = price * quantity

This type of calculation is common in real applications.
`,
        },
        {
          id: "pb-w2-l5",
          title: "Comparison Operators",
          content: `
Comparison operators compare values.

Common operators:

>
<
>=
<=
==
!=

Example:

temperature > 30

The result of a comparison is usually a Boolean value.

This allows programs to make decisions based on data.
`,
        },
      ],

      quiz: [
        {
          question: "What is a variable?",
          options: [
            "A named storage location",
            "A monitor",
            "A network cable",
            "A compiler",
          ],
          answer: "A named storage location",
        },
        {
          question: "Which is a Boolean value?",
          options: ["True", "25", `"Hello"`, "3.14"],
          answer: "True",
        },
        {
          question: "Which operator is used for addition?",
          options: ["+", "-", "*", "%"],
          answer: "+",
        },
        {
          question: "Which operator commonly represents modulus?",
          options: ["%", "/", "+", "="],
          answer: "%",
        },
        {
          question: "What is a string?",
          options: [
            "Text data",
            "Only a whole number",
            "A Boolean value",
            "A hardware component",
          ],
          answer: "Text data",
        },
        {
          question: "What does == commonly check?",
          options: [
            "Equality",
            "Addition",
            "Multiplication",
            "Division",
          ],
          answer: "Equality",
        },
        {
          question: "What does > mean?",
          options: ["Greater than", "Less than", "Equal", "Not equal"],
          answer: "Greater than",
        },
        {
          question: "Why are Boolean values useful?",
          options: [
            "They help represent conditions",
            "They store only images",
            "They replace programming languages",
            "They create hardware",
          ],
          answer: "They help represent conditions",
        },
        {
          question: "Which value is a decimal number?",
          options: ["3.14", "10", "True", `"Hello"`],
          answer: "3.14",
        },
        {
          question: "Can variables change their values during a program?",
          options: ["Yes", "No", "Never", "Only in HTML"],
          answer: "Yes",
        },
      ],

      assignment:
        "Create a small program that stores temperature, humidity and device status in variables and displays the values.",
    },

    {
      week: 3,
      title: "Conditions and Loops",
      lessons: [
        {
          id: "pb-w3-l1",
          title: "if Statements",
          content: `
An if statement allows a program to execute instructions when a condition is true.

Example:

IF temperature > 30
    Display "High temperature"

This is useful for automation and IoT systems because devices often need to react to conditions.
`,
        },
        {
          id: "pb-w3-l2",
          title: "if-else",
          content: `
if-else provides two possible paths.

Example:

IF device_connected
    Display "Device connected"
ELSE
    Display "Device disconnected"

This type of logic is commonly used in applications and devices.
`,
        },
        {
          id: "pb-w3-l3",
          title: "Loops",
          content: `
Loops allow a program to repeat instructions.

For example, a monitoring application might repeatedly check a sensor.

Concept:

WHILE device is active
    Read sensor
    Process value
    Display result

Loops are fundamental to automation and monitoring systems.
`,
        },
        {
          id: "pb-w3-l4",
          title: "for Loops",
          content: `
A for loop is useful when processing a known sequence or collection.

Example:

FOR each sensor reading
    Process reading

It can also be used for a fixed number of repetitions.
`,
        },
        {
          id: "pb-w3-l5",
          title: "Infinite Loops and Safety",
          content: `
A loop that never reaches a stopping condition can become an infinite loop.

Infinite loops can consume CPU resources and cause applications to become unresponsive.

Good programs should have clear conditions for stopping or controlling repeated operations.
`,
        },
      ],

      quiz: [
        {
          question: "What does an if statement provide?",
          options: [
            "Conditional execution",
            "Database storage",
            "File compression",
            "Hardware repair",
          ],
          answer: "Conditional execution",
        },
        {
          question: "What does else provide?",
          options: [
            "An alternative path",
            "A variable",
            "A loop",
            "A compiler",
          ],
          answer: "An alternative path",
        },
        {
          question: "Why are loops useful?",
          options: [
            "They repeat instructions",
            "They delete code",
            "They replace variables",
            "They create hardware",
          ],
          answer: "They repeat instructions",
        },
        {
          question: "What can cause an infinite loop?",
          options: [
            "A condition that never becomes false",
            "A correct output",
            "A variable declaration",
            "A comment",
          ],
          answer: "A condition that never becomes false",
        },
        {
          question: "Why are loops important in monitoring systems?",
          options: [
            "They can repeatedly check data",
            "They install operating systems",
            "They replace sensors",
            "They remove networks",
          ],
          answer: "They can repeatedly check data",
        },
        {
          question: "Can conditions be used with sensor values?",
          options: ["Yes", "No", "Only in Java", "Only in HTML"],
          answer: "Yes",
        },
        {
          question: "What should a repeated process have?",
          options: [
            "A suitable stopping or control condition",
            "No condition",
            "Only text",
            "Only comments",
          ],
          answer: "A suitable stopping or control condition",
        },
        {
          question: "Which structure is useful for repeated operations?",
          options: ["Loop", "Variable", "String", "Comment"],
          answer: "Loop",
        },
        {
          question: "What can excessive infinite looping cause?",
          options: [
            "High resource usage or an unresponsive program",
            "Better performance",
            "More storage",
            "Better graphics",
          ],
          answer: "High resource usage or an unresponsive program",
        },
        {
          question: "Can if-else provide two different outcomes?",
          options: ["Yes", "No", "Only in C", "Only in Python"],
          answer: "Yes",
        },
      ],

      assignment:
        "Create a temperature monitoring program that repeatedly checks a temperature value and displays whether the temperature is normal or high.",
    },

    {
      week: 4,
      title: "Functions and Data Collections",
      lessons: [
        {
          id: "pb-w4-l1",
          title: "Functions",
          content: `
Functions are reusable blocks of code.

They help divide a program into smaller tasks.

Example:

read_sensor()
calculate_average()
display_result()

Each function can perform one specific responsibility.
`,
        },
        {
          id: "pb-w4-l2",
          title: "Function Parameters",
          content: `
Functions can accept information through parameters.

Example:

calculate_average(mark1, mark2, mark3)

The values supplied to the function allow it to work with different data.
`,
        },
        {
          id: "pb-w4-l3",
          title: "Return Values",
          content: `
A function can return a result.

Example:

total = add(10, 20)

The add function calculates the value and returns the result.

Return values allow different parts of a program to communicate with each other.
`,
        },
        {
          id: "pb-w4-l4",
          title: "Lists and Arrays",
          content: `
Lists and arrays allow multiple values to be stored together.

Example:

temperatures = [28, 30, 31, 29]

A program can process each value using a loop.

Collections are extremely useful when handling sensor readings, user records or product information.
`,
        },
        {
          id: "pb-w4-l5",
          title: "Modular Programming",
          content: `
A large program should be divided into smaller logical parts.

For example, an IoT application could contain:

sensor module
data processing module
communication module
storage module
display module

Modular design makes programs easier to test and maintain.
`,
        },
      ],

      quiz: [
        {
          question: "What is a function?",
          options: [
            "A reusable block of code",
            "A computer cable",
            "A database",
            "A hardware component",
          ],
          answer: "A reusable block of code",
        },
        {
          question: "What is a parameter?",
          options: [
            "Input provided to a function",
            "A monitor",
            "A database table",
            "A network protocol",
          ],
          answer: "Input provided to a function",
        },
        {
          question: "What does a return value provide?",
          options: [
            "A result from a function",
            "A computer screen",
            "A keyboard",
            "A network cable",
          ],
          answer: "A result from a function",
        },
        {
          question: "Why are collections useful?",
          options: [
            "They store multiple related values",
            "They replace computers",
            "They create networks",
            "They install software",
          ],
          answer: "They store multiple related values",
        },
        {
          question: "Which is an example of a collection?",
          options: [
            "[10, 20, 30]",
            "10",
            "True",
            `"Hello"`,
          ],
          answer: "[10, 20, 30]",
        },
        {
          question: "Why use modular programming?",
          options: [
            "To divide large programs into manageable parts",
            "To remove functions",
            "To avoid testing",
            "To remove variables",
          ],
          answer: "To divide large programs into manageable parts",
        },
        {
          question: "Can functions accept different values?",
          options: ["Yes", "No", "Never", "Only in JavaScript"],
          answer: "Yes",
        },
        {
          question: "Which module could process sensor readings?",
          options: [
            "Data processing module",
            "Keyboard module",
            "Monitor module",
            "Printer cable",
          ],
          answer: "Data processing module",
        },
        {
          question: "Are functions useful for code reuse?",
          options: ["Yes", "No", "Never", "Only in C"],
          answer: "Yes",
        },
        {
          question: "What does modular design improve?",
          options: [
            "Organization and maintainability",
            "Screen brightness",
            "Internet speed",
            "Keyboard size",
          ],
          answer: "Organization and maintainability",
        },
      ],

      assignment:
        "Create a small program using separate functions for reading data, processing data and displaying the result.",
    },

    {
      week: 5,
      title: "Debugging and Practical Programming",
      lessons: [
        {
          id: "pb-w5-l1",
          title: "Types of Errors",
          content: `
Programs can contain different types of errors.

Syntax error:
The program violates language rules.

Runtime error:
A problem occurs while the program is executing.

Logical error:
The program runs but produces an incorrect result.

Understanding errors is an important programming skill.
`,
        },
        {
          id: "pb-w5-l2",
          title: "Debugging",
          content: `
Debugging means finding and fixing problems in a program.

Basic process:

1. Reproduce the problem.
2. Read the error.
3. Find the relevant code.
4. Check the input and variables.
5. Correct the problem.
6. Test again.

Debugging is a normal part of software development.
`,
        },
        {
          id: "pb-w5-l3",
          title: "Input Validation",
          content: `
Input validation checks whether supplied information is acceptable.

For example:

If a program expects a temperature number, text such as "hello" should not be treated as a valid temperature.

Validation improves reliability and prevents unexpected program behavior.
`,
        },
        {
          id: "pb-w5-l4",
          title: "Testing Programs",
          content: `
Testing means checking whether a program produces the expected results.

Test cases should include:

Normal values
Boundary values
Unexpected values
Empty input where relevant
Invalid input where relevant

Testing is important for both small scripts and large software systems.
`,
        },
        {
          id: "pb-w5-l5",
          title: "Practical Project Planning",
          content: `
Before building a project:

1. Define the problem.
2. Identify users.
3. List inputs.
4. Define outputs.
5. Break the system into functions or modules.
6. Design the basic algorithm.
7. Implement the program.
8. Test it.
9. Fix errors.
10. Improve the program.

This process can be applied to cloud, IoT and software projects.
`,
        },
      ],

      quiz: [
        {
          question: "What is debugging?",
          options: [
            "Finding and fixing errors",
            "Creating hardware",
            "Installing software",
            "Writing documents",
          ],
          answer: "Finding and fixing errors",
        },
        {
          question: "What is a runtime error?",
          options: [
            "An error that occurs while a program executes",
            "A programming language",
            "A database",
            "A hardware cable",
          ],
          answer: "An error that occurs while a program executes",
        },
        {
          question: "What is a logical error?",
          options: [
            "The program runs but gives the wrong result",
            "The computer is switched off",
            "The code contains comments",
            "The program has a variable",
          ],
          answer: "The program runs but gives the wrong result",
        },
        {
          question: "Why is input validation useful?",
          options: [
            "It helps prevent invalid input from causing problems",
            "It removes all variables",
            "It replaces testing",
            "It creates hardware",
          ],
          answer: "It helps prevent invalid input from causing problems",
        },
        {
          question: "Should programs be tested with different inputs?",
          options: ["Yes", "No", "Never", "Only once"],
          answer: "Yes",
        },
        {
          question: "What should be done before building a project?",
          options: [
            "Define the problem",
            "Ignore requirements",
            "Skip planning",
            "Avoid testing",
          ],
          answer: "Define the problem",
        },
        {
          question: "Why should a project be divided into modules?",
          options: [
            "To make the system easier to manage",
            "To make it impossible to test",
            "To remove functions",
            "To increase errors",
          ],
          answer: "To make the system easier to manage",
        },
        {
          question: "Is debugging a normal part of programming?",
          options: ["Yes", "No", "Never", "Only for beginners"],
          answer: "Yes",
        },
        {
          question: "What should happen after fixing an error?",
          options: [
            "Test the program again",
            "Delete the program",
            "Stop programming forever",
            "Remove all inputs",
          ],
          answer: "Test the program again",
        },
        {
          question: "Which is a good project development step?",
          options: [
            "Define inputs and outputs",
            "Skip requirements",
            "Never test",
            "Write random code",
          ],
          answer: "Define inputs and outputs",
        },
      ],

      assignment:
        "Create a basic sensor monitoring application that accepts sensor readings, validates them, calculates an average and displays whether the readings are within an expected range.",

      project: {
        title: "Basic Sensor Monitoring Program",
        description:
          "Build a beginner-friendly program that accepts multiple sensor readings, validates the input, calculates useful information and displays a simple status.",
        requirements: [
          "Accept multiple sensor readings.",
          "Store readings in a collection.",
          "Validate the input.",
          "Calculate the average.",
          "Find the minimum and maximum values.",
          "Use functions to organize the code.",
          "Use conditions to determine status.",
          "Display a clear final report.",
        ],
      },
    },
  ],
};

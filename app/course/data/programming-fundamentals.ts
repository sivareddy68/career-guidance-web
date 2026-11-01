
export const programmingFundamentalsCourse = {
  id: "programming-fundamentals",
  title: "Programming Fundamentals",
  description:
    "A beginner-friendly course covering the core concepts required to understand programming and start building real applications.",
  duration: "6 weeks",
  level: "Beginner",

  weeks: [
    {
      week: 1,
      title: "Introduction to Programming",
      lessons: [
        {
          id: "pf-w1-l1",
          title: "What is Programming?",
          content: `
Programming is the process of giving instructions to a computer to perform a task.

A computer does not understand normal human language directly. Programming languages such as Python, Java, C, JavaScript and others allow us to write instructions that can be translated into something the computer can execute.

Programming is used to build:
• Websites
• Mobile applications
• Desktop applications
• Games
• Artificial intelligence systems
• Embedded systems
• Cloud applications
• Automation tools

A program is a collection of instructions that tells a computer what to do.

Example:

Input → Processing → Output

If a program receives two numbers:
Input: 10 and 20
Processing: Add the numbers
Output: 30

Almost every program follows some form of this basic idea.
          `,
          example: `Input: 10, 20
Operation: Addition
Output: 30`,
        },

        {
          id: "pf-w1-l2",
          title: "Programming Languages",
          content: `
A programming language is a language used to communicate instructions to a computer.

Different programming languages are designed for different purposes.

Python:
• Beginner friendly
• AI and machine learning
• Automation
• Data science
• Web development

Java:
• Enterprise applications
• Backend development
• Android development
• Large software systems

C:
• Embedded systems
• Operating systems
• Hardware-related programming

JavaScript:
• Web development
• Frontend applications
• Backend applications

The important thing for a beginner is not to learn every programming language at once. First understand programming concepts. Once the concepts are clear, learning another language becomes much easier.
          `,
        },

        {
          id: "pf-w1-l3",
          title: "Algorithms and Problem Solving",
          content: `
An algorithm is a step-by-step procedure for solving a problem.

For example, suppose we want to make tea.

Algorithm:
1. Take water.
2. Heat the water.
3. Add tea powder.
4. Add milk.
5. Add sugar.
6. Boil the mixture.
7. Serve the tea.

Programming problems can also be solved using a sequence of steps.

Before writing code, a programmer should understand:
1. What is the problem?
2. What information is given?
3. What output is required?
4. What steps are needed?
5. How can those steps be converted into code?

Good problem solving is more important than memorizing programming syntax.
          `,
        },

        {
          id: "pf-w1-l4",
          title: "Flowcharts",
          content: `
A flowchart is a visual representation of an algorithm.

Common flowchart symbols include:

Oval → Start/End
Rectangle → Process
Parallelogram → Input/Output
Diamond → Decision
Arrow → Flow direction

Example:

Start
  ↓
Read number
  ↓
Is number greater than 0?
  ↓
Yes → Positive
No → Not Positive
  ↓
End

Flowcharts help programmers understand the logic before writing code.
          `,
        },

        {
          id: "pf-w1-l5",
          title: "Pseudocode",
          content: `
Pseudocode is a simple way of writing the logic of a program using normal language-like statements.

Example problem:
Find the largest of two numbers.

Pseudocode:

START
Read A
Read B

IF A > B
    Display A
ELSE
    Display B

END

Pseudocode is not tied to a specific programming language.

The same logic can later be implemented in Python, Java, C or JavaScript.
          `,
        },
      ],

      quiz: [
        {
          question: "What is programming?",
          options: [
            "Giving instructions to a computer",
            "Only designing websites",
            "Only writing documents",
            "Repairing computer hardware",
          ],
          answer: "Giving instructions to a computer",
        },
        {
          question: "What is an algorithm?",
          options: [
            "A programming language",
            "A step-by-step procedure for solving a problem",
            "A computer part",
            "A database",
          ],
          answer: "A step-by-step procedure for solving a problem",
        },
        {
          question: "Which language is commonly used for AI and data science?",
          options: ["Python", "HTML", "CSS", "SQL"],
          answer: "Python",
        },
        {
          question: "What does a flowchart represent?",
          options: [
            "Computer hardware",
            "A visual representation of an algorithm",
            "A database table",
            "A programming language",
          ],
          answer: "A visual representation of an algorithm",
        },
        {
          question: "What is pseudocode?",
          options: [
            "Machine code",
            "A visual programming language",
            "A language-like description of program logic",
            "A computer operating system",
          ],
          answer: "A language-like description of program logic",
        },
        {
          question: "What should usually be done before writing code?",
          options: [
            "Understand and plan the problem",
            "Delete the program",
            "Install a database",
            "Create a website",
          ],
          answer: "Understand and plan the problem",
        },
        {
          question: "Which flowchart symbol is commonly used for a decision?",
          options: ["Rectangle", "Diamond", "Oval", "Arrow"],
          answer: "Diamond",
        },
        {
          question: "Which symbol commonly represents a process?",
          options: ["Rectangle", "Diamond", "Oval", "Circle"],
          answer: "Rectangle",
        },
        {
          question: "Why are algorithms important?",
          options: [
            "They help organize problem-solving steps",
            "They replace computers",
            "They are only used for graphics",
            "They are used only for databases",
          ],
          answer: "They help organize problem-solving steps",
        },
        {
          question: "Can the same algorithm be implemented in different programming languages?",
          options: ["Yes", "No", "Only in Python", "Only in Java"],
          answer: "Yes",
        },
      ],

      assignment:
        "Write an algorithm and pseudocode for finding the largest of three numbers.",
    },

    {
      week: 2,
      title: "Variables, Data Types and Operators",
      lessons: [
        {
          id: "pf-w2-l1",
          title: "Variables",
          content: `
A variable is a named storage location used to hold data.

For example:

age = 20

Here:
age is the variable name.
20 is the value stored in it.

Variables allow programs to store information and use it later.

Examples:
name = "Siva"
age = 21
marks = 85.5

The exact syntax differs between programming languages, but the basic concept is common.
          `,
        },

        {
          id: "pf-w2-l2",
          title: "Constants",
          content: `
A constant is a value that should not normally change during program execution.

Examples include:
• Mathematical constants
• Configuration values
• Maximum limits

Some programming languages provide special syntax for constants while others use naming conventions.

Using constants can make programs easier to understand and maintain.
          `,
        },

        {
          id: "pf-w2-l3",
          title: "Data Types",
          content: `
A data type describes the kind of value stored by a program.

Common data types include:

Integer:
Whole numbers such as 10, 25 and -5.

Float:
Numbers containing decimal values such as 10.5.

String:
Text such as "Hello".

Boolean:
A value that is either true or false.

Character:
A single character such as 'A'.

Different programming languages have different type systems, but these basic concepts appear frequently.
          `,
        },

        {
          id: "pf-w2-l4",
          title: "Arithmetic Operators",
          content: `
Arithmetic operators are used to perform mathematical calculations.

Common operators:

+ Addition
- Subtraction
* Multiplication
/ Division
% Modulus
          `,
          example: `10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2
10 % 3 = 1`,
        },

        {
          id: "pf-w2-l5",
          title: "Comparison and Logical Operators",
          content: `
Comparison operators compare values.

Examples:

> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
== Equal to
!= Not equal to

Logical operators combine conditions.

AND:
Both conditions must be true.

OR:
At least one condition must be true.

NOT:
Reverses a condition.

These operators are very important when writing decision-making programs.
          `,
        },
      ],

      quiz: [
        {
          question: "What is a variable?",
          options: [
            "A named storage location",
            "A computer monitor",
            "A database",
            "A programming language",
          ],
          answer: "A named storage location",
        },
        {
          question: "Which data type is normally used for whole numbers?",
          options: ["Integer", "String", "Boolean", "Character"],
          answer: "Integer",
        },
        {
          question: "Which data type represents true or false?",
          options: ["Float", "Boolean", "String", "Integer"],
          answer: "Boolean",
        },
        {
          question: "What does % commonly represent?",
          options: ["Division", "Modulus", "Addition", "Power"],
          answer: "Modulus",
        },
        {
          question: "Which operator means 'not equal' in many languages?",
          options: ["==", "!=", "=", ">"],
          answer: "!=",
        },
        {
          question: "Which value is a string?",
          options: ["25", "3.14", `"Hello"`, "true"],
          answer: `"Hello"`,
        },
        {
          question: "What does AND generally require?",
          options: [
            "Both conditions to be true",
            "Only one condition",
            "No conditions",
            "A number",
          ],
          answer: "Both conditions to be true",
        },
        {
          question: "What does OR generally mean?",
          options: [
            "At least one condition is true",
            "Both must be false",
            "Only numbers are allowed",
            "The program stops",
          ],
          answer: "At least one condition is true",
        },
        {
          question: "What does > mean?",
          options: ["Less than", "Greater than", "Equal", "Not equal"],
          answer: "Greater than",
        },
        {
          question: "Which operator is commonly used for addition?",
          options: ["+", "-", "*", "%"],
          answer: "+",
        },
      ],

      assignment:
        "Create a simple program in the programming language you are learning that accepts two numbers and performs addition, subtraction, multiplication and division.",
    },

    {
      week: 3,
      title: "Conditional Statements",
      lessons: [
        {
          id: "pf-w3-l1",
          title: "Decision Making",
          content: `
Programs often need to make decisions.

For example:

If a student's marks are greater than or equal to 40:
    Pass

Otherwise:
    Fail

Conditional statements allow a program to execute different instructions depending on a condition.
          `,
        },

        {
          id: "pf-w3-l2",
          title: "if Statement",
          content: `
An if statement executes a block of code when a condition is true.

Concept:

IF condition is true
    execute instructions

Example:

if age >= 18:
    print("Eligible")

The exact syntax differs between languages, but the concept remains the same.
          `,
        },

        {
          id: "pf-w3-l3",
          title: "if-else",
          content: `
if-else allows a program to choose between two paths.

Example:

IF marks >= 40
    Display "Pass"
ELSE
    Display "Fail"

Only one of these two branches is executed.
          `,
        },

        {
          id: "pf-w3-l4",
          title: "Multiple Conditions",
          content: `
Sometimes a problem contains more than two possibilities.

For example:

90–100 → A
80–89 → B
70–79 → C
60–69 → D
Below 60 → F

Multiple conditions can be handled using else-if structures or equivalent constructs.
          `,
        },

        {
          id: "pf-w3-l5",
          title: "Nested Conditions",
          content: `
A nested condition is a condition placed inside another condition.

Example:

IF age >= 18
    IF hasLicense
        Allow driving
    ELSE
        Do not allow driving
ELSE
    Do not allow driving

Nested conditions should be used carefully because too many levels can make code difficult to understand.
          `,
        },
      ],

      quiz: [
        {
          question: "Why are conditional statements used?",
          options: [
            "To make decisions",
            "To store files",
            "To create hardware",
            "To install software",
          ],
          answer: "To make decisions",
        },
        {
          question: "What happens when an if condition is true?",
          options: [
            "Its associated instructions can execute",
            "The computer shuts down",
            "The program must always stop",
            "The data is deleted",
          ],
          answer: "Its associated instructions can execute",
        },
        {
          question: "What is the purpose of else?",
          options: [
            "To provide an alternative path",
            "To create a variable",
            "To repeat code",
            "To define a database",
          ],
          answer: "To provide an alternative path",
        },
        {
          question: "What is a nested condition?",
          options: [
            "A condition inside another condition",
            "A variable inside a string",
            "A loop inside a file",
            "A database inside a program",
          ],
          answer: "A condition inside another condition",
        },
        {
          question: "Can a program have more than two possible outcomes?",
          options: ["Yes", "No", "Only in Java", "Only in Python"],
          answer: "Yes",
        },
        {
          question: "Which concept is useful for checking whether marks are enough to pass?",
          options: ["Condition", "File handling", "Database", "Compiler"],
          answer: "Condition",
        },
        {
          question: "What can excessive nesting cause?",
          options: [
            "Harder-to-understand code",
            "Faster internet",
            "More memory automatically",
            "Better hardware",
          ],
          answer: "Harder-to-understand code",
        },
        {
          question: "Which operator is useful for checking equality?",
          options: ["==", "+", "%", "/"],
          answer: "==",
        },
        {
          question: "What is a branch in program logic?",
          options: [
            "One possible path of execution",
            "A computer cable",
            "A database row",
            "A variable type",
          ],
          answer: "One possible path of execution",
        },
        {
          question: "Which is a real-world example of decision making?",
          options: [
            "Checking whether a student passed",
            "Turning on a monitor only",
            "Typing a document",
            "Saving an image",
          ],
          answer: "Checking whether a student passed",
        },
      ],

      assignment:
        "Create a grade calculator that accepts marks and displays the appropriate grade using conditional statements.",
    },

    {
      week: 4,
      title: "Loops and Repetition",
      lessons: [
        {
          id: "pf-w4-l1",
          title: "Why Loops Are Needed",
          content: `
A loop allows a program to repeat instructions.

Without loops, if we wanted to print numbers from 1 to 100, we would have to write many separate statements.

A loop allows us to express repetition efficiently.
          `,
        },

        {
          id: "pf-w4-l2",
          title: "for Loop",
          content: `
A for loop is commonly used when the number of repetitions is known or when iterating through a collection.

Concept:

FOR each value
    perform an operation

Example:

for number from 1 to 5
    display number
          `,
        },

        {
          id: "pf-w4-l3",
          title: "while Loop",
          content: `
A while loop repeats while a condition remains true.

Example:

WHILE counter <= 5
    Display counter
    Increase counter

A loop condition must eventually become false, otherwise the program may continue indefinitely.
          `,
        },

        {
          id: "pf-w4-l4",
          title: "break and continue",
          content: `
break is used to stop a loop early.

continue skips the remaining instructions for the current iteration and moves to the next iteration.

These statements can be useful, but excessive use can make program logic harder to follow.
          `,
        },

        {
          id: "pf-w4-l5",
          title: "Nested Loops",
          content: `
A loop inside another loop is called a nested loop.

Nested loops are useful for problems involving:
• Tables
• Matrices
• Patterns
• Comparing combinations

Example:

FOR row
    FOR column
        perform operation

The inner loop usually completes its iterations for each iteration of the outer loop.
          `,
        },
      ],

      quiz: [
        {
          question: "What is the main purpose of a loop?",
          options: [
            "Repeat instructions",
            "Store a password",
            "Create a variable",
            "Install a compiler",
          ],
          answer: "Repeat instructions",
        },
        {
          question: "Which loop is commonly useful when repetitions are known?",
          options: ["for", "if", "switch", "class"],
          answer: "for",
        },
        {
          question: "What does a while loop depend on?",
          options: ["A condition", "A monitor", "A database", "A file"],
          answer: "A condition",
        },
        {
          question: "What does break generally do?",
          options: [
            "Stops the loop",
            "Starts the computer",
            "Creates a variable",
            "Repeats the program",
          ],
          answer: "Stops the loop",
        },
        {
          question: "What does continue generally do?",
          options: [
            "Moves to the next iteration",
            "Stops the computer",
            "Deletes the loop",
            "Creates a function",
          ],
          answer: "Moves to the next iteration",
        },
        {
          question: "What is a nested loop?",
          options: [
            "A loop inside another loop",
            "A variable inside a loop",
            "A program inside a computer",
            "A condition outside a program",
          ],
          answer: "A loop inside another loop",
        },
        {
          question: "What can happen if a while-loop condition never becomes false?",
          options: [
            "An infinite loop may occur",
            "The computer becomes faster",
            "The loop automatically becomes a function",
            "The program becomes shorter",
          ],
          answer: "An infinite loop may occur",
        },
        {
          question: "Which problem can nested loops help solve?",
          options: ["Matrix processing", "Installing Windows", "Changing a monitor", "Creating a password"],
          answer: "Matrix processing",
        },
        {
          question: "Are loops useful for repetitive tasks?",
          options: ["Yes", "No", "Only in Java", "Only in Python"],
          answer: "Yes",
        },
        {
          question: "What should programmers consider when creating loops?",
          options: [
            "How and when the loop should stop",
            "Only the screen size",
            "Only the keyboard",
            "Only the internet speed",
          ],
          answer: "How and when the loop should stop",
        },
      ],

      assignment:
        "Write a program that displays numbers from 1 to 100 and calculates their sum using a loop.",
    },

    {
      week: 5,
      title: "Functions, Collections and Modular Programming",
      lessons: [
        {
          id: "pf-w5-l1",
          title: "Functions",
          content: `
A function is a reusable block of code designed to perform a specific task.

Instead of writing the same logic repeatedly, we can place it inside a function and call it whenever needed.

Example concept:

function add(a, b)
    return a + b

Functions improve:
• Reusability
• Readability
• Organization
• Testing
• Maintenance
          `,
        },

        {
          id: "pf-w5-l2",
          title: "Parameters and Return Values",
          content: `
Parameters are inputs provided to a function.

A return value is the result produced by a function.

Example:

add(10, 20)

10 and 20 are arguments passed to the function.

The function can return 30.

Functions can have:
• No parameters
• One parameter
• Multiple parameters
• No return value
• A return value
          `,
        },

        {
          id: "pf-w5-l3",
          title: "Arrays and Lists",
          content: `
Programs often need to store multiple related values.

An array or list can store a collection of values.

Example:

marks = [80, 75, 90, 85]

Instead of creating separate variables for every mark, a collection can hold them together.

Collections are useful for:
• Student records
• Product lists
• Scores
• Names
• Sensor readings
          `,
        },

        {
          id: "pf-w5-l4",
          title: "Strings",
          content: `
A string is a sequence of characters used to represent text.

Examples:
"Hello"
"Siva"
"Programming Fundamentals"

Common string operations include:
• Finding length
• Searching
• Concatenation
• Changing case
• Extracting portions of text

String handling is important in almost every programming language.
          `,
        },

        {
          id: "pf-w5-l5",
          title: "Modular Programming",
          content: `
Modular programming means dividing a large program into smaller, manageable parts.

For example, a student management application might have modules for:

• Student registration
• Attendance
• Marks
• Reports
• Authentication

Functions and modules make large programs easier to understand, test and maintain.
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
            "An operating system",
          ],
          answer: "A reusable block of code",
        },
        {
          question: "What is a parameter?",
          options: [
            "An input accepted by a function",
            "A computer monitor",
            "A file extension",
            "A database server",
          ],
          answer: "An input accepted by a function",
        },
        {
          question: "What does a return value represent?",
          options: [
            "The result produced by a function",
            "The computer's screen",
            "A keyboard command",
            "A database table",
          ],
          answer: "The result produced by a function",
        },
        {
          question: "Why are functions useful?",
          options: [
            "They improve code reuse",
            "They replace the operating system",
            "They increase internet speed",
            "They remove all variables",
          ],
          answer: "They improve code reuse",
        },
        {
          question: "What is a collection?",
          options: [
            "A structure containing multiple values",
            "A computer monitor",
            "A programming language",
            "A compiler",
          ],
          answer: "A structure containing multiple values",
        },
        {
          question: "What is a string?",
          options: [
            "A sequence of characters",
            "Only a whole number",
            "A hardware component",
            "A network cable",
          ],
          answer: "A sequence of characters",
        },
        {
          question: "What is modular programming?",
          options: [
            "Dividing a program into manageable parts",
            "Deleting program files",
            "Using only one variable",
            "Writing without functions",
          ],
          answer: "Dividing a program into manageable parts",
        },
        {
          question: "Can a function have multiple parameters?",
          options: ["Yes", "No", "Only in Python", "Only in Java"],
          answer: "Yes",
        },
        {
          question: "Why are collections useful?",
          options: [
            "They allow related values to be stored together",
            "They replace all programming languages",
            "They are only for graphics",
            "They are only for networking",
          ],
          answer: "They allow related values to be stored together",
        },
        {
          question: "Which concept improves maintainability?",
          options: [
            "Modular design",
            "Repeated code everywhere",
            "No functions",
            "No structure",
          ],
          answer: "Modular design",
        },
      ],

      assignment:
        "Create a small program using at least three functions. For example: add numbers, calculate average and find the largest number.",
    },

    {
      week: 6,
      title: "Debugging, Complexity and Final Project",
      lessons: [
        {
          id: "pf-w6-l1",
          title: "Errors in Programs",
          content: `
Programs can contain errors.

Common categories include:

Syntax errors:
The code does not follow the language rules.

Runtime errors:
An error occurs while the program is running.

Logical errors:
The program runs but produces the wrong result.

Understanding the type of error helps developers find and fix problems.
          `,
        },

        {
          id: "pf-w6-l2",
          title: "Debugging",
          content: `
Debugging is the process of finding and fixing errors in a program.

A useful debugging process is:

1. Reproduce the problem.
2. Read the error message.
3. Identify where the problem occurs.
4. Check the values involved.
5. Fix the problem.
6. Test again.

Good programmers do not avoid errors completely. They learn how to identify and solve them efficiently.
          `,
        },

        {
          id: "pf-w6-l3",
          title: "Testing",
          content: `
Testing checks whether a program behaves as expected.

A program should be tested using different inputs.

For example, if creating an age calculator, test:

Normal value
Boundary value
Zero
Negative value if relevant
Unexpected input

Testing helps discover problems before users encounter them.
          `,
        },

        {
          id: "pf-w6-l4",
          title: "Introduction to Time Complexity",
          content: `
Time complexity describes how the running time of an algorithm grows as the input size increases.

Common complexity categories include:

O(1) → Constant
O(n) → Linear
O(n²) → Quadratic
O(log n) → Logarithmic

At the beginner level, the important idea is that some algorithms scale much better than others.

Choosing efficient algorithms becomes increasingly important when programs process large amounts of data.
          `,
        },

        {
          id: "pf-w6-l5",
          title: "Programming Best Practices",
          content: `
Good programming practices include:

• Use meaningful variable names.
• Keep functions focused.
• Avoid unnecessary duplicate code.
• Add comments where they provide useful information.
• Test your programs.
• Handle possible errors.
• Keep code readable.
• Break large problems into smaller problems.
• Use version control when working on real projects.

Writing code that works is important, but writing code that other people can understand and maintain is also important.
          `,
        },
      ],

      quiz: [
        {
          question: "What is a syntax error?",
          options: [
            "Code that violates language rules",
            "A correct result",
            "A network problem",
            "A database record",
          ],
          answer: "Code that violates language rules",
        },
        {
          question: "What is a logical error?",
          options: [
            "The program runs but gives the wrong result",
            "The computer is turned off",
            "The program has no variables",
            "The keyboard is disconnected",
          ],
          answer: "The program runs but gives the wrong result",
        },
        {
          question: "What is debugging?",
          options: [
            "Finding and fixing program errors",
            "Creating hardware",
            "Installing an operating system",
            "Designing a logo",
          ],
          answer: "Finding and fixing program errors",
        },
        {
          question: "Why is testing important?",
          options: [
            "It helps find problems",
            "It removes programming languages",
            "It replaces algorithms",
            "It prevents variables",
          ],
          answer: "It helps find problems",
        },
        {
          question: "What does O(n) represent?",
          options: [
            "Linear growth",
            "Constant growth",
            "Quadratic growth",
            "No growth",
          ],
          answer: "Linear growth",
        },
        {
          question: "What does O(1) represent?",
          options: [
            "Constant complexity",
            "Linear complexity",
            "Quadratic complexity",
            "Exponential complexity",
          ],
          answer: "Constant complexity",
        },
        {
          question: "What is a good variable name?",
          options: [
            "One that clearly describes its purpose",
            "A random symbol",
            "An empty name",
            "Only a number",
          ],
          answer: "One that clearly describes its purpose",
        },
        {
          question: "Why should duplicate code be reduced?",
          options: [
            "It improves maintainability",
            "It makes programs impossible to test",
            "It removes all functions",
            "It prevents programming",
          ],
          answer: "It improves maintainability",
        },
        {
          question: "Should programs be tested with different inputs?",
          options: ["Yes", "No", "Only once", "Never"],
          answer: "Yes",
        },
        {
          question: "What is an important programming practice?",
          options: [
            "Breaking large problems into smaller problems",
            "Avoiding all testing",
            "Using meaningless names",
            "Repeating every line",
          ],
          answer: "Breaking large problems into smaller problems",
        },
      ],

      assignment:
        "Build a simple Student Result Management program that accepts student details and marks, calculates the total and average, assigns a grade, and displays the result.",

      project: {
        title: "Student Result Management System",
        description:
          "Build a beginner-level console application that accepts student information and marks for multiple subjects, calculates total and average, determines the grade, and displays a formatted result.",
        requirements: [
          "Accept student name and roll number.",
          "Accept marks for multiple subjects.",
          "Calculate total marks.",
          "Calculate average.",
          "Determine grade using conditions.",
          "Use functions to organize the program.",
          "Use a collection to store marks.",
          "Validate important inputs.",
          "Display the final result clearly.",
        ],
      },
    },
  ],
};


const programBasicsCourse = {
  title: "Program Basics",
  description:
    "Learn programming fundamentals, algorithms, variables, data types, operators, conditions, loops, functions, arrays, debugging, and problem-solving.",

  weeks: [
    {
      title: "Week 1: Introduction to Programming",
      description:
        "Understand programming, algorithms, languages, variables, data types, and operators.",
      lessons: [
        {
          title: "Introduction to Programming",
          content: `
Programming is the process of writing instructions that a computer can execute to perform a task.

A program is a collection of instructions written using a programming language.

Programming is used to:
- Build websites and applications.
- Automate repetitive tasks.
- Process data.
- Develop games.
- Control electronic devices.
- Create artificial intelligence systems.

A programming language provides rules and syntax for writing instructions.

Examples of programming languages include Python, C, Java, JavaScript, and C++.

Important programming terms:

1. Source code: Instructions written by a programmer.
2. Compiler: A program that translates source code into another form, often machine code.
3. Interpreter: A program that executes source instructions through an implementation-specific process.
4. Syntax: Rules that define valid statements in a language.
5. Logic: The reasoning and steps used to solve a problem.
6. Output: Information produced by a program.

A simple program follows this general process:

Problem identification → Algorithm design → Coding → Testing → Debugging.

For example, a program that adds two numbers receives two inputs, calculates their sum, and displays the result.

Good programming involves writing understandable code, testing different cases, and correcting errors.
          `,
          quiz: [
            {
              question: "What is programming?",
              options: [
                "Writing instructions that a computer can execute",
                "Designing only computer hardware",
                "Connecting network cables",
                "Managing physical storage devices",
              ],
              answer: "Writing instructions that a computer can execute",
            },
            {
              question: "What is source code?",
              options: [
                "Instructions written by a programmer",
                "A computer's power supply",
                "A network connection",
                "A database backup",
              ],
              answer: "Instructions written by a programmer",
            },
            {
              question: "What does syntax describe?",
              options: [
                "Rules for writing valid statements in a language",
                "The physical size of a computer",
                "The speed of an Internet connection",
                "The number of installed applications",
              ],
              answer: "Rules for writing valid statements in a language",
            },
            {
              question: "Which is a programming language?",
              options: [
                "Python",
                "HDMI",
                "Ethernet",
                "USB",
              ],
              answer: "Python",
            },
            {
              question: "Which is a common first step in solving a programming problem?",
              options: [
                "Identifying the problem",
                "Deleting the source code",
                "Replacing the computer",
                "Removing all input values",
              ],
              answer: "Identifying the problem",
            },
          ],
        },
        {
          title: "Algorithms and Flowcharts",
          content: `
An algorithm is a finite sequence of clear steps used to solve a problem.

Before writing code, programmers often design an algorithm to understand the solution.

Characteristics of a good algorithm:
- It has clearly defined inputs.
- It produces the required output.
- Its steps are unambiguous.
- It eventually terminates.
- Its steps are practical to execute.

Example algorithm to add two numbers:

Step 1: Start.
Step 2: Read the first number.
Step 3: Read the second number.
Step 4: Add the two numbers.
Step 5: Display the result.
Step 6: Stop.

A flowchart represents an algorithm visually using standard symbols.

Common flowchart symbols:

1. Oval: Start or end.
2. Rectangle: Processing operation.
3. Parallelogram: Input or output.
4. Diamond: Decision.
5. Arrow: Direction of control flow.

Example:
Start → Read number → Check whether number is positive → Display result → End.

Flowcharts help programmers understand the order of operations and identify missing steps.

Algorithms can be written using natural language, pseudocode, or diagrams before implementation in a programming language.
          `,
          quiz: [
            {
              question: "What is an algorithm?",
              options: [
                "A finite sequence of steps to solve a problem",
                "A computer's physical memory",
                "A type of network cable",
                "A programming language compiler",
              ],
              answer: "A finite sequence of steps to solve a problem",
            },
            {
              question: "Which flowchart symbol represents a decision?",
              options: [
                "Diamond",
                "Rectangle",
                "Oval",
                "Parallelogram",
              ],
              answer: "Diamond",
            },
            {
              question: "Which flowchart symbol represents processing?",
              options: [
                "Rectangle",
                "Diamond",
                "Oval",
                "Arrow",
              ],
              answer: "Rectangle",
            },
            {
              question: "What does an oval represent in a flowchart?",
              options: [
                "Start or end",
                "Input or output",
                "Decision",
                "Processing",
              ],
              answer: "Start or end",
            },
            {
              question: "Why are flowcharts useful?",
              options: [
                "They visually represent the steps of an algorithm",
                "They automatically repair hardware",
                "They replace all programming languages",
                "They increase network bandwidth",
              ],
              answer: "They visually represent the steps of an algorithm",
            },
          ],
        },
        {
          title: "Variables and Data Types",
          content: `
A variable is a named storage location or binding used by a program to refer to a value.

Example in Python:

age = 20
name = "Ravi"
temperature = 28.5

Here:
- age stores an integer value.
- name stores text.
- temperature stores a decimal value.

A data type describes the kind of value represented by data.

Common data types:

1. Integer:
Whole numbers such as 10, -5, and 100.

2. Float:
Numbers containing a fractional part, such as 3.14 and 12.5.

3. String:
Text enclosed in quotation marks, such as "Hello".

4. Boolean:
Logical values True or False.

5. Character:
A single character in languages that provide a separate character type, such as C.

6. Array or list:
A collection of values stored together.

Different programming languages have different type systems. Python is dynamically typed, while C generally requires declared types for variables.

Choosing suitable data types helps programs represent information correctly and use memory appropriately.
          `,
          quiz: [
            {
              question: "What is a variable?",
              options: [
                "A named way to refer to a value",
                "A physical network cable",
                "A computer monitor",
                "A type of operating system",
              ],
              answer: "A named way to refer to a value",
            },
            {
              question: "Which data type represents whole numbers?",
              options: [
                "Integer",
                "String",
                "Boolean",
                "Character",
              ],
              answer: "Integer",
            },
            {
              question: "Which data type represents True or False?",
              options: [
                "Boolean",
                "Float",
                "String",
                "Array",
              ],
              answer: "Boolean",
            },
            {
              question: "What is the data type of 3.14 in Python?",
              options: [
                "Float",
                "Integer",
                "Boolean",
                "String",
              ],
              answer: "Float",
            },
            {
              question: "Which value is a string?",
              options: [
                "\"Hello\"",
                "25",
                "3.5",
                "True",
              ],
              answer: "\"Hello\"",
            },
          ],
        },
        {
          title: "Operators and Expressions",
          content: `
Operators are symbols or keywords used to perform operations on values and variables.

An expression combines values, variables, and operators to produce a result.

Arithmetic operators:
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulus (%)
- Exponentiation (** in Python)

Example:
result = 10 + 5

The result is 15.

Comparison operators:
- Equal to (==)
- Not equal to (!=)
- Greater than (>)
- Less than (<)
- Greater than or equal to (>=)
- Less than or equal to (<=)

Comparison expressions generally produce Boolean results.

Logical operators:
- AND: True when both conditions are true.
- OR: True when at least one condition is true.
- NOT: Reverses a Boolean value.

Assignment operators store or update values.

Example:
x = 10
x += 5

After the second statement, x is 15.

Operator precedence determines the order in which parts of an expression are evaluated. Parentheses can make the intended order clearer.

Understanding operators is important for calculations, decisions, loops, and data processing.
          `,
          quiz: [
            {
              question: "Which operator performs addition?",
              options: [
                "+",
                "-",
                "*",
                "/",
              ],
              answer: "+",
            },
            {
              question: "Which operator checks equality in Python?",
              options: [
                "==",
                "=",
                "!=",
                ">=",
              ],
              answer: "==",
            },
            {
              question: "What does the modulus operator return?",
              options: [
                "The remainder of division",
                "The sum of two values",
                "The product of two values",
                "The square root of a value",
              ],
              answer: "The remainder of division",
            },
            {
              question: "When is a logical AND expression true?",
              options: [
                "When both conditions are true",
                "When both conditions are false",
                "When at least one condition is false",
                "When no condition is evaluated",
              ],
              answer: "When both conditions are false",
            },
            {
              question: "What is the value of x after x = 10 and x += 5?",
              options: [
                "15",
                "5",
                "10",
                "50",
              ],
              answer: "15",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Control Structures and Functions",
      description:
        "Learn decision-making, loops, functions, parameters, return values, and variable scope.",
      lessons: [
        {
          title: "Conditional Statements",
          content: `
Conditional statements allow a program to make decisions based on whether an expression is true or false.

The most common conditional structures are:

1. if:
Executes a block when a condition is true.

2. if-else:
Chooses between two alternative blocks.

3. if-elif-else:
Checks multiple conditions in sequence.

Example in Python:

marks = 75

if marks >= 90:
    print("Excellent")
elif marks >= 60:
    print("Good")
else:
    print("Needs improvement")

The program checks conditions in order and executes the first matching branch.

Nested conditions place one conditional statement inside another.

Logical operators can combine conditions.

Example:
if age >= 18 and has_id:
    print("Access allowed")

Conditional statements are useful in login systems, grading applications, payment systems, and validation.

Always consider boundary values when designing conditions. For example, if a program accepts marks from 0 to 100, it should also reject values outside that range.
          `,
          quiz: [
            {
              question: "What is the purpose of an if statement?",
              options: [
                "To execute code when a condition is true",
                "To repeat code forever",
                "To define a data type",
                "To create a network connection",
              ],
              answer: "To execute code when a condition is true",
            },
            {
              question: "Which structure checks multiple conditions in Python?",
              options: [
                "if-elif-else",
                "try-only",
                "while-return",
                "import-class",
              ],
              answer: "if-elif-else",
            },
            {
              question: "What does an else block do?",
              options: [
                "Executes when earlier conditions in its conditional structure are not satisfied",
                "Always executes before if",
                "Repeats the previous block",
                "Declares a variable type",
              ],
              answer: "Executes when earlier conditions in its conditional structure are not satisfied",
            },
            {
              question: "Which operator combines two conditions that must both be true?",
              options: [
                "and",
                "or",
                "not",
                "in",
              ],
              answer: "and",
            },
            {
              question: "Why should boundary values be tested?",
              options: [
                "To check behavior at the limits of valid input",
                "To increase the program's file size",
                "To remove conditional statements",
                "To change the computer's hardware",
              ],
              answer: "To check behavior at the limits of valid input",
            },
          ],
        },
        {
          title: "Loops: For and While",
          content: `
Loops allow a program to repeat a block of instructions.

Two common loop structures are for and while.

For loop:
Used to iterate over a sequence or a range of values.

Example:

for i in range(5):
    print(i)

This prints values from 0 through 4.

While loop:
Repeats a block while a condition remains true.

Example:

count = 1

while count <= 3:
    print(count)
    count += 1

This prints 1, 2, and 3.

Important loop concepts:

- Iteration: One execution of the loop body.
- Counter: A variable used to track progress.
- Infinite loop: A loop that does not reach its stopping condition.
- break: Exits a loop.
- continue: Skips the remaining statements in the current iteration and moves to the next iteration.

Nested loops place one loop inside another.

Loops are useful for processing lists, reading records, performing calculations, and automating repeated operations.

Always ensure that a while loop can eventually reach its stopping condition unless an intentional continuous loop is required.
          `,
          quiz: [
            {
              question: "What is the purpose of a loop?",
              options: [
                "To repeat a block of instructions",
                "To declare only constants",
                "To install software",
                "To connect network devices",
              ],
              answer: "To repeat a block of instructions",
            },
            {
              question: "Which loop is commonly used to iterate over a sequence?",
              options: [
                "for loop",
                "switch loop",
                "return loop",
                "import loop",
              ],
              answer: "for loop",
            },
            {
              question: "When does a while loop continue executing?",
              options: [
                "While its condition remains true",
                "Only when the program is closed",
                "When the condition is always false",
                "Only after a function returns",
              ],
              answer: "While its condition remains true",
            },
            {
              question: "What does break do inside a loop?",
              options: [
                "Exits the loop",
                "Restarts the computer",
                "Defines a new function",
                "Skips variable declaration",
              ],
              answer: "Exits the loop",
            },
            {
              question: "What is an infinite loop?",
              options: [
                "A loop that does not reach its stopping condition",
                "A loop that executes exactly once",
                "A loop that contains no statements",
                "A loop that always uses a for statement",
              ],
              answer: "A loop that does not reach its stopping condition",
            },
          ],
        },
        {
          title: "Functions and Parameters",
          content: `
A function is a reusable block of code designed to perform a specific task.

Functions improve code organization and reduce repetition.

In Python, a function is defined using the def keyword.

Example:

def greet(name):
    print("Hello", name)

greet("Ravi")

Here:
- greet is the function name.
- name is a parameter.
- "Ravi" is an argument passed to the function.

Parameters are variables listed in the function definition. Arguments are values supplied when calling the function.

Functions can accept multiple parameters.

Example:

def add(a, b):
    return a + b

result = add(10, 20)

The return statement sends a result back to the caller.

Some functions do not need parameters or return values.

Functions may also have default parameter values.

Example:

def greet(name="Guest"):
    print("Hello", name)

A function should generally perform a clear and focused task.

Functions are used in almost every practical program, including websites, data processing systems, automation scripts, and machine learning applications.
          `,
          quiz: [
            {
              question: "What is a function?",
              options: [
                "A reusable block of code",
                "A physical network device",
                "A type of computer memory",
                "A database storage format",
              ],
              answer: "A reusable block of code",
            },
            {
              question: "Which keyword defines a function in Python?",
              options: [
                "def",
                "class",
                "import",
                "while",
              ],
              answer: "def",
            },
            {
              question: "What is a parameter?",
              options: [
                "A variable listed in a function definition",
                "A value displayed on a monitor",
                "A network cable",
                "A database backup",
              ],
              answer: "A variable listed in a function definition",
            },
            {
              question: "What does return do?",
              options: [
                "Sends a result back to the caller",
                "Repeats a loop",
                "Deletes the function",
                "Installs a library",
              ],
              answer: "Sends a result back to the caller",
            },
            {
              question: "What is an argument?",
              options: [
                "A value supplied when calling a function",
                "The name of a computer",
                "A programming language compiler",
                "A type of loop",
              ],
              answer: "A value supplied when calling a function",
            },
          ],
        },
        {
          title: "Variable Scope and Recursion",
          content: `
Variable scope determines where a variable can be accessed in a program.

Local variable:
A variable created inside a function. It is generally available within that function.

Global variable:
A variable defined outside functions. It may be accessible in multiple parts of a program, subject to language rules.

In Python, the global keyword can be used when a function needs to reassign a module-level global variable. Excessive use of global variables can make code harder to maintain.

Recursion is a programming technique in which a function calls itself.

A recursive function needs:

1. Base case:
A condition that stops further recursive calls.

2. Recursive case:
A step that reduces the problem toward the base case.

Example of factorial:

factorial(4) = 4 × factorial(3)
factorial(3) = 3 × factorial(2)
factorial(2) = 2 × factorial(1)
factorial(1) = 1

Therefore, factorial(4) = 24.

Without a suitable base case, recursion may continue until a runtime limit or error occurs.

Recursion is useful for tree traversal, divide-and-conquer algorithms, and problems with naturally recursive structures.

For some tasks, iteration can be more memory-efficient than recursion.
          `,
          quiz: [
            {
              question: "What does variable scope determine?",
              options: [
                "Where a variable can be accessed",
                "How fast a computer starts",
                "The size of a network cable",
                "The number of installed programs",
              ],
              answer: "Where a variable can be accessed",
            },
            {
              question: "What is a local variable?",
              options: [
                "A variable created inside a function",
                "A variable stored only on the Internet",
                "A variable that cannot hold a value",
                "A variable used only by a compiler",
              ],
              answer: "A variable created inside a function",
            },
            {
              question: "What is recursion?",
              options: [
                "A function calling itself",
                "A loop connecting network devices",
                "A process that deletes variables",
                "A method for installing software",
              ],
              answer: "A function calling itself",
            },
            {
              question: "What is the purpose of a base case in recursion?",
              options: [
                "To stop further recursive calls",
                "To create additional recursive calls forever",
                "To change a function into a class",
                "To import a library",
              ],
              answer: "To stop further recursive calls",
            },
            {
              question: "What is factorial of 4?",
              options: [
                "24",
                "16",
                "12",
                "8",
              ],
              answer: "24",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Data Structures and Problem Solving",
      description:
        "Learn arrays, lists, tuples, dictionaries, sets, strings, and basic algorithm analysis.",
      lessons: [
        {
          title: "Arrays and Lists",
          content: `
An array or list is a data structure used to store multiple values in an organized collection.

In Python, lists are commonly used to store collections of items.

Example:

numbers = [10, 20, 30, 40]

List elements are accessed using indexes. Python indexing starts at zero.

numbers[0] returns 10.
numbers[1] returns 20.

Common list operations:

- append(): Adds an item to the end.
- insert(): Adds an item at a specified position.
- remove(): Removes the first matching value.
- pop(): Removes and returns an item.
- sort(): Sorts list elements.
- len(): Returns the number of elements.

Lists are mutable, meaning their contents can be changed after creation.

An array in other programming languages, such as C, may have a fixed size and a more restricted element type.

Lists and arrays are useful for storing marks, product prices, sensor readings, and other collections of values.

When working with large collections, choose a suitable data structure based on the operations your program needs.
          `,
          quiz: [
            {
              question: "What is a list used for?",
              options: [
                "Storing multiple values in an organized collection",
                "Connecting computers physically",
                "Encrypting network traffic",
                "Managing computer power",
              ],
              answer: "Storing multiple values in an organized collection",
            },
            {
              question: "What is the first index of a Python list?",
              options: [
                "0",
                "1",
                "-1",
                "10",
              ],
              answer: "0",
            },
            {
              question: "Which Python list method adds an item to the end?",
              options: [
                "append()",
                "remove()",
                "sort()",
                "clear()",
              ],
              answer: "append()",
            },
            {
              question: "What does len() return for a list?",
              options: [
                "The number of elements",
                "The sum of all elements",
                "The largest element",
                "The memory address of the list",
              ],
              answer: "The number of elements",
            },
            {
              question: "What does mutable mean?",
              options: [
                "The contents can be changed",
                "The contents can never be read",
                "The collection must contain only text",
                "The collection cannot store values",
              ],
              answer: "The contents can be changed",
            },
          ],
        },
        {
          title: "Tuples, Sets, and Dictionaries",
          content: `
Python provides several built-in collection types.

Tuple:
A tuple is an ordered collection that cannot be modified after creation.

Example:
coordinates = (10, 20)

Set:
A set stores unique elements. It is useful when duplicate values should be removed or membership should be checked.

Example:
colors = {"red", "blue", "green"}

Dictionary:
A dictionary stores key-value pairs.

Example:
student = {
    "name": "Ravi",
    "age": 20
}

You can access a value using its key:

student["name"]

Important differences:

- List: Ordered and mutable.
- Tuple: Ordered and immutable.
- Set: Unique elements; does not provide positional indexing.
- Dictionary: Stores key-value mappings.

Common operations:

Set:
- add()
- remove()
- union()
- intersection()

Dictionary:
- keys()
- values()
- items()
- get()

Choose a collection based on how information needs to be stored and accessed.

For example, a dictionary is useful for storing student details, while a set is useful for maintaining unique registration IDs.
          `,
          quiz: [
            {
              question: "Which Python collection is immutable?",
              options: [
                "Tuple",
                "List",
                "Dictionary",
                "Set",
              ],
              answer: "Tuple",
            },
            {
              question: "What is a major property of a Python set?",
              options: [
                "It stores unique elements",
                "It stores only key-value pairs",
                "It always preserves positional indexes",
                "It cannot store multiple elements",
              ],
              answer: "It stores unique elements",
            },
            {
              question: "Which collection stores key-value pairs?",
              options: [
                "Dictionary",
                "Tuple",
                "Set",
                "String",
              ],
              answer: "Dictionary",
            },
            {
              question: "Which dictionary method safely retrieves a value using a key?",
              options: [
                "get()",
                "append()",
                "sort()",
                "reverse()",
              ],
              answer: "get()",
            },
            {
              question: "Which collection is useful for maintaining unique registration IDs?",
              options: [
                "Set",
                "Tuple",
                "String",
                "Float",
              ],
              answer: "Set",
            },
          ],
        },
        {
          title: "Strings and String Operations",
          content: `
A string is a sequence of characters used to represent text.

Examples:
name = "Ravi"
message = "Welcome to programming"

Strings are widely used for names, addresses, messages, and user input.

Common string operations:

1. Concatenation:
Combines strings using the + operator.

2. Indexing:
Accesses an individual character using its position.

3. Slicing:
Extracts part of a string.

4. Length:
The len() function returns the number of characters.

5. Case conversion:
upper() converts text to uppercase.
lower() converts text to lowercase.

6. Whitespace handling:
strip() removes leading and trailing whitespace.

7. Replacement:
replace() creates a string with specified text replaced.

Example:

text = "Hello World"
print(text.upper())

String formatting helps combine variables and text.

Example in Python:

name = "Ravi"
message = f"Hello {name}"

Python strings are immutable. Operations that appear to modify a string create a new string instead.

String handling is important in data cleaning, user input validation, web applications, and text processing.
          `,
          quiz: [
            {
              question: "What is a string?",
              options: [
                "A sequence of characters",
                "A collection of network devices",
                "A type of computer processor",
                "A mathematical operator",
              ],
              answer: "A sequence of characters",
            },
            {
              question: "Which operator combines strings in Python?",
              options: [
                "+",
                "%",
                ">",
                "//",
              ],
              answer: "+",
            },
            {
              question: "What does upper() do?",
              options: [
                "Converts letters to uppercase",
                "Removes all letters",
                "Sorts words alphabetically",
                "Counts the number of spaces",
              ],
              answer: "Converts letters to uppercase",
            },
            {
              question: "What does strip() commonly remove?",
              options: [
                "Leading and trailing whitespace",
                "Every character in a string",
                "All numbers from a program",
                "The first function in a file",
              ],
              answer: "Leading and trailing whitespace",
            },
            {
              question: "Are Python strings mutable?",
              options: [
                "No, strings are immutable",
                "Yes, every character can be changed in place",
                "Only strings containing numbers are mutable",
                "Only empty strings are mutable",
              ],
              answer: "No, strings are immutable",
            },
          ],
        },
        {
          title: "Searching, Sorting, and Basic Complexity",
          content: `
Searching and sorting are common operations in programming.

Searching:
Finding a particular value in a collection.

Linear search:
Checks elements one by one until the target is found or the collection ends.

For n elements, linear search can take O(n) time in the worst case.

Binary search:
Repeatedly divides a sorted search range into two halves.

Binary search takes O(log n) time in the worst case when the collection supports efficient indexed access.

Binary search requires sorted data.

Sorting:
Arranges elements in a particular order, such as ascending or descending.

Common sorting algorithms include:
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort

Time complexity describes how an algorithm's running time grows with input size.

Common complexity classes:
- O(1): Constant time.
- O(log n): Logarithmic time.
- O(n): Linear time.
- O(n log n): Common for efficient comparison sorting.
- O(n²): Quadratic time.

Space complexity describes how memory requirements grow with input size.

Complexity analysis helps programmers compare approaches and choose algorithms that can handle larger inputs.
          `,
          quiz: [
            {
              question: "What does linear search do?",
              options: [
                "Checks elements one by one",
                "Always divides the list into two halves",
                "Sorts all values automatically",
                "Removes duplicate elements",
              ],
              answer: "Checks elements one by one",
            },
            {
              question: "What condition does binary search require?",
              options: [
                "The data must be sorted",
                "The data must contain only text",
                "The data must have exactly ten elements",
                "The data must contain no numbers",
              ],
              answer: "The data must be sorted",
            },
            {
              question: "What is the worst-case time complexity of linear search?",
              options: [
                "O(n)",
                "O(1)",
                "O(log n)",
                "O(n log n)",
              ],
              answer: "O(n)",
            },
            {
              question: "What does O(1) represent?",
              options: [
                "Constant time complexity",
                "Linear time complexity",
                "Quadratic time complexity",
                "Logarithmic time complexity",
              ],
              answer: "Constant time complexity",
            },
            {
              question: "What does sorting do?",
              options: [
                "Arranges elements in a specified order",
                "Deletes all collection elements",
                "Converts a list into a network",
                "Changes a program's syntax",
              ],
              answer: "Arranges elements in a specified order",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Programming Skills",
      description:
        "Learn error handling, debugging, file operations, modules, testing, and practical program development.",
      lessons: [
        {
          title: "Errors and Exception Handling",
          content: `
Errors are problems that can prevent a program from working as expected.

Common categories:

1. Syntax error:
Occurs when code does not follow the language's syntax rules.

2. Runtime error:
Occurs while the program is running.

3. Logical error:
The program runs but produces an incorrect result.

Exception handling allows a program to respond to certain runtime problems without immediately terminating.

In Python, try and except are commonly used.

Example:

try:
    number = int(input("Enter a number: "))
    print(10 / number)
except ValueError:
    print("Enter a valid integer")
except ZeroDivisionError:
    print("Cannot divide by zero")

The try block contains code that may raise an exception.

An except block handles a matching exception.

The else block can run when no exception occurs.

The finally block runs whether an exception occurs or not, making it useful for cleanup operations.

Use specific exception types where possible. Avoid hiding all errors with a broad exception handler that provides no useful information.

Exception handling makes applications more reliable and easier to maintain.
          `,
          quiz: [
            {
              question: "What is a syntax error?",
              options: [
                "An error caused by invalid language syntax",
                "An error caused only by network speed",
                "A problem with computer hardware",
                "A type of database table",
              ],
              answer: "An error caused by invalid language syntax",
            },
            {
              question: "Which Python block contains code that may raise an exception?",
              options: [
                "try",
                "else",
                "finally",
                "import",
              ],
              answer: "try",
            },
            {
              question: "Which exception occurs when dividing an integer by zero in Python?",
              options: [
                "ZeroDivisionError",
                "ValueError",
                "NameError",
                "IndexError",
              ],
              answer: "ZeroDivisionError",
            },
            {
              question: "When does the finally block execute?",
              options: [
                "Whether an exception occurs or not",
                "Only when the program starts",
                "Only when a loop is used",
                "Only when the user enters text",
              ],
              answer: "Whether an exception occurs or not",
            },
            {
              question: "What is a logical error?",
              options: [
                "A program runs but produces an incorrect result",
                "A program contains no variables",
                "A computer has no Internet connection",
                "A file has no extension",
              ],
              answer: "A program runs but produces an incorrect result",
            },
          ],
        },
        {
          title: "Debugging and Testing",
          content: `
Debugging is the process of identifying, understanding, and correcting problems in a program.

Common debugging techniques:

1. Read error messages:
Check the error type, message, and location.

2. Use print statements:
Display variable values and program execution details.

3. Use a debugger:
Set breakpoints and inspect program state step by step.

4. Reproduce the issue:
Use the same input and conditions that caused the problem.

5. Test a correction:
Verify that the fix resolves the issue without creating new problems.

Software testing checks whether a program behaves as expected.

Common testing levels:

Unit testing:
Tests small individual functions or components.

Integration testing:
Checks whether multiple components work together.

System testing:
Tests the complete application.

Acceptance testing:
Checks whether the application meets user or business requirements.

Test cases should include:
- Normal inputs.
- Boundary values.
- Invalid inputs.
- Unexpected or empty values.

In Python, the unittest framework provides tools for automated testing.

Testing early and regularly helps identify errors before they affect larger parts of an application.
          `,
          quiz: [
            {
              question: "What is debugging?",
              options: [
                "Identifying and correcting program problems",
                "Installing a new operating system",
                "Connecting a computer to Wi-Fi",
                "Creating a database backup",
              ],
              answer: "Identifying and correcting program problems",
            },
            {
              question: "What is a breakpoint used for?",
              options: [
                "Pausing execution at a selected point during debugging",
                "Deleting the current program",
                "Changing the computer's IP address",
                "Removing all variables",
              ],
              answer: "Pausing execution at a selected point during debugging",
            },
            {
              question: "What does unit testing check?",
              options: [
                "Individual functions or components",
                "Only the complete network infrastructure",
                "Only the computer's hardware",
                "Only the application color scheme",
              ],
              answer: "Individual functions or components",
            },
            {
              question: "What does integration testing examine?",
              options: [
                "Whether multiple components work together",
                "Whether one variable has a valid name",
                "Whether a computer has enough storage",
                "Whether a program contains comments",
              ],
              answer: "Whether multiple components work together",
            },
            {
              question: "Why should boundary values be included in testing?",
              options: [
                "They help check behavior at input limits",
                "They remove the need for all other tests",
                "They guarantee every possible input is correct",
                "They automatically improve processing speed",
              ],
              answer: "They help check behavior at input limits",
            },
          ],
        },
        {
          title: "File Handling and Modules",
          content: `
File handling allows a program to read information from files and write information to files.

In Python, the open() function is commonly used.

Example:

with open("notes.txt", "r") as file:
    content = file.read()

The with statement manages the file context and helps ensure that the file is closed after use.

Common file modes:

- r: Read an existing file.
- w: Write to a file, replacing existing content.
- a: Append content to a file.
- x: Create a new file and fail if it already exists.

Python can read text files, CSV files, and many other formats using suitable libraries.

A module is a Python file containing reusable code such as functions, classes, and variables.

Example:

import math

print(math.sqrt(25))

The math module provides mathematical functions.

Programmers can also create their own modules and import them into other files.

Packages organize related modules into a directory structure.

Using modules improves code reuse, organization, and maintainability.

When working with files, handle missing files, permission problems, and invalid data carefully.
          `,
          quiz: [
            {
              question: "Which Python function is commonly used to open a file?",
              options: [
                "open()",
                "print()",
                "input()",
                "range()",
              ],
              answer: "open()",
            },
            {
              question: "Which file mode appends content?",
              options: [
                "a",
                "r",
                "w",
                "x",
              ],
              answer: "a",
            },
            {
              question: "What does the with statement help manage during file handling?",
              options: [
                "The file context and closing of the file",
                "The computer's network address",
                "The number of CPU cores",
                "The program's color scheme",
              ],
              answer: "The file context and closing of the file",
            },
            {
              question: "What is a Python module?",
              options: [
                "A file containing reusable Python code",
                "A physical computer component",
                "A network switch",
                "A type of monitor",
              ],
              answer: "A file containing reusable Python code",
            },
            {
              question: "Which statement imports Python's math module?",
              options: [
                "import math",
                "open math",
                "load math",
                "create math",
              ],
              answer: "import math",
            },
          ],
        },
        {
          title: "Final Project: Student Marks Management Program",
          content: `
Build a simple Student Marks Management Program using the programming concepts learned in this course.

Project objective:
Create a program that stores student names and marks, calculates results, and displays useful information.

Required features:

1. Add student records:
Accept a student name and marks from the user.

2. Validate input:
Ensure marks fall within an acceptable range, such as 0 to 100.

3. Store records:
Use a list of dictionaries to store student details.

Example:

students = [
    {"name": "Ravi", "marks": 85},
    {"name": "Anu", "marks": 92}
]

4. Calculate results:
Calculate the average marks and identify the highest score.

5. Assign grades:
Use conditional statements to assign grades based on defined ranges.

6. Display records:
Use loops to display each student's information.

7. Create reusable functions:
Use separate functions for adding records, calculating averages, and displaying results.

8. Handle errors:
Validate numeric input and handle invalid values.

9. Save information:
Use file handling to save records for later use.

10. Test the program:
Test normal marks, boundary values, invalid input, and empty records.

Suggested functions:
- add_student()
- calculate_average()
- find_highest_marks()
- display_students()
- save_records()

Expected result:
A beginner-friendly command-line application that demonstrates variables, data types, conditions, loops, functions, collections, file handling, and exception handling.

Document the program with its objective, features, sample output, and testing results.
          `,
          quiz: [
            {
              question: "What is the main purpose of the final project?",
              options: [
                "To manage student names and marks using a program",
                "To configure a wireless router",
                "To design a computer processor",
                "To create a website hosting server",
              ],
              answer: "To manage student names and marks using a program",
            },
            {
              question: "Which data structure is suitable for storing multiple student records as key-value pairs?",
              options: [
                "A list of dictionaries",
                "A single Boolean variable",
                "A floating-point value",
                "A single character",
              ],
              answer: "A list of dictionaries",
            },
            {
              question: "Why should the program validate marks?",
              options: [
                "To ensure marks fall within the permitted range",
                "To increase the number of students automatically",
                "To remove all student names",
                "To avoid using functions",
              ],
              answer: "To ensure marks fall within the permitted range",
            },
            {
              question: "Which programming concept is useful for repeatedly displaying student records?",
              options: [
                "Loops",
                "Network routing",
                "Hardware interrupts",
                "Database encryption",
              ],
              answer: "Loops",
            },
            {
              question: "Which feature can save student records for later use?",
              options: [
                "File handling",
                "Conditional statements only",
                "Comparison operators only",
                "Variable naming",
              ],
              answer: "File handling",
            },
          ],
        },
      ],
    },
  ],
};

export default programBasicsCourse;

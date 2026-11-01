
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

type QuizItem = [
  question: string,
  correct: string,
  wrong1: string,
  wrong2: string,
  wrong3: string,
  explanation: string
];

function makeQuiz(items: QuizItem[]): QuizQuestion[] {
  return items.map(
    ([question, answer, wrong1, wrong2, wrong3, explanation]) => ({
      question,
      options: [answer, wrong1, wrong2, wrong3],
      answer,
      explanation,
    })
  );
}

function makeLesson(
  id: string,
  title: string,
  introduction: string,
  sections: { heading: string; content: string }[],
  example: string,
  exercise: string,
  quiz: QuizItem[]
): Lesson {
  return {
    id,
    title,
    introduction,
    sections,
    example,
    exercise,
    quiz: makeQuiz(quiz),
  };
}

export const pythonCourse: Course = {
  title: "Python",
  description:
    "Learn Python step by step with explanations, code examples, practical exercises, and quizzes.",
  project: "Python Student Management System",

  weeks: [
    // WEEK 1: PYTHON FUNDAMENTALS
    {
      title: "Python Fundamentals",
      assignment:
        "Create a simple Python program that stores student details, performs calculations, and displays the results.",

      lessons: [
        makeLesson(
          "lesson-1",
          "Introduction to Python",
          "Python is a popular programming language used in web development, automation, data analysis, artificial intelligence, and many other fields.",
          [
            {
              heading: "What is Python?",
              content:
                "Python is a high-level, general-purpose programming language. Its readable syntax makes it suitable for beginners as well as experienced developers.",
            },
            {
              heading: "Why use Python?",
              content:
                "Python has a large standard library and a wide ecosystem of additional packages. Developers use it for scripts, web applications, data processing, testing, and machine learning.",
            },
            {
              heading: "Your first Python program",
              content:
                "The print() function displays information. You can use it to display text, numbers, calculations, and variable values.",
            },
          ],
          `print("Hello, World!")\nprint("Welcome to Python")\nprint(10 + 20)`,
          "Write a program that displays your name, college, branch, and one career goal.",
          [
            ["What type of language is Python?", "A high-level, general-purpose language", "Only a database language", "Only a markup language", "Only a hardware description language", "Python is a general-purpose programming language."],
            ["Which function displays output in Python?", "print()", "input()", "type()", "range()", "print() displays values in the output."],
            ["Which is a valid Python statement?", 'print("Hello")', "display = Hello", "echo Python", "<print>Hello</print>", 'print("Hello") is valid Python syntax.'],
            ["Which is a common use of Python?", "Data analysis and automation", "Only designing HTML tags", "Only writing SQL tables", "Only drawing circuit boards", "Python supports data analysis, automation, and many other applications."],
            ["What is normally needed to execute a Python script?", "A Python interpreter", "A CSS compiler only", "A web browser only", "A database table only", "The Python interpreter executes Python code."],
          ]
        ),

        makeLesson(
          "lesson-2",
          "Installing Python and Using IDLE",
          "Before writing larger programs, you need a working Python environment. You can use Python from a terminal, IDLE, or an editor such as VS Code.",
          [
            {
              heading: "Install Python",
              content:
                "Download Python from the official Python website and follow the installation instructions for your operating system. On Windows, selecting the option to add Python to PATH can make terminal usage easier.",
            },
            {
              heading: "Check the installation",
              content:
                "Open a terminal and try python --version. Depending on your installation, you may need to use py --version or python3 --version.",
            },
            {
              heading: "Run a Python file",
              content:
                "Save your program with a .py extension. From the terminal, run it using the Python command appropriate for your installation.",
            },
          ],
          `# Save this as hello.py\nprint("Python is ready!")\n\n# Run from a terminal:\n# python hello.py`,
          "Create hello.py, display three messages, and run the file from your terminal.",
          [
            ["What is the usual extension for a Python source file?", ".py", ".html", ".css", ".sql", "Python source files commonly use the .py extension."],
            ["Which command may show the installed Python version on Windows?", "py --version", "css --version", "html --version", "git style", "The py launcher can report the installed Python version on Windows."],
            ["What does an interpreter do?", "Executes Python instructions", "Styles a web page", "Stores files only", "Designs database tables automatically", "The interpreter runs Python instructions."],
            ["Where can you write Python code?", "A code editor or IDLE", "Only a spreadsheet", "Only a web browser address bar", "Only a CSS file", "Python code can be written in many editors, including IDLE and VS Code."],
            ["How can you run a saved script named hello.py?", "python hello.py", "run css hello", "open sql hello", "python style hello", "The Python command followed by the filename runs the script when Python is correctly installed."],
          ]
        ),

        makeLesson(
          "lesson-3",
          "Python Syntax and Comments",
          "Syntax describes how Python statements must be written. Python uses indentation to define code blocks.",
          [
            {
              heading: "Basic syntax",
              content:
                "Python statements often occupy one line. Names are case-sensitive, so total, Total, and TOTAL are different identifiers.",
            },
            {
              heading: "Indentation",
              content:
                "Indentation is part of Python's syntax. Statements inside a function, loop, or conditional block must be indented consistently. Four spaces are a common convention.",
            },
            {
              heading: "Comments",
              content:
                "A # symbol starts a single-line comment. Comments help explain why code exists or how a complicated section works.",
            },
          ],
          `# This is a comment\nname = "Siva"\nif name:\n    print("Hello", name)`,
          "Write a program containing two comments and an if statement with correctly indented code.",
          [
            ["How does a Python single-line comment begin?", "#", "//", "<!--", "/*", "Python uses # for single-line comments."],
            ["Which two names are different in Python?", "score and Score", "score and score", "name and name", "value and value", "Python identifiers are case-sensitive."],
            ["What is indentation used for?", "Defining code blocks", "Changing text colour", "Creating HTML links", "Encrypting variables", "Indentation identifies blocks in Python."],
            ["Which is a valid variable assignment?", "age = 20", "20 = age", "age :=: 20", "set age to 20", "The assignment operator = assigns a value to a variable."],
            ["What is a useful purpose of a comment?", "Explaining code", "Automatically fixing every error", "Replacing all program statements", "Running a database query", "Comments provide explanations for people reading the code."],
          ]
        ),

        makeLesson(
          "lesson-4",
          "Python Variables and Data Types",
          "Variables store references to values. Python determines the type of a value at runtime, so you do not normally declare a variable's type in advance.",
          [
            {
              heading: "Creating variables",
              content:
                "Use an assignment statement such as name = 'Ravi' or age = 20. Choose descriptive names that explain what each variable represents.",
            },
            {
              heading: "Common data types",
              content:
                "int represents integers, float represents floating-point numbers, str represents text, and bool represents True or False. Lists, tuples, dictionaries, and sets store collections.",
            },
            {
              heading: "Checking a type",
              content:
                "The type() function reports an object's type. A variable can be assigned a different kind of value later, although clear and consistent use makes programs easier to maintain.",
            },
          ],
          `name = "Ravi"\nage = 20\nheight = 1.72\nis_student = True\n\nprint(type(name))\nprint(type(age))\nprint(type(height))`,
          "Create variables for a student's name, age, percentage, and enrollment status. Display each value and type.",
          [
            ["Which type represents text in Python?", "str", "int", "bool", "float", "str represents strings of text."],
            ["What is the type of 25?", "int", "str", "list", "bool", "25 is an integer literal."],
            ["What is the type of 3.14?", "float", "int", "dict", "tuple", "3.14 is a floating-point literal."],
            ["Which values belong to the bool type?", "True and False", "Yes and No strings", "Only positive numbers", "Only decimal numbers", "Python's Boolean values are True and False."],
            ["Which function checks an object's type?", "type()", "print()", "input()", "len()", "type() returns information about an object's type."],
          ]
        ),
      ],
    },

    // WEEK 2: OPERATORS AND CONTROL FLOW
    {
      title: "Operators and Control Flow",
      assignment:
        "Build a student marks calculator that uses operators, conditions, and loops to process several marks.",

      lessons: [
        makeLesson(
          "lesson-5",
          "Python Operators",
          "Operators let you perform calculations, compare values, combine conditions, and update variables.",
          [
            {
              heading: "Arithmetic operators",
              content:
                "Python supports addition (+), subtraction (-), multiplication (*), division (/), floor division (//), remainder (%), and exponentiation (**).",
            },
            {
              heading: "Comparison operators",
              content:
                "Operators such as ==, !=, <, >, <=, and >= compare values and produce Boolean results.",
            },
            {
              heading: "Logical operators",
              content:
                "and requires both conditions to be true, or requires at least one condition to be true, and not reverses a Boolean result.",
            },
          ],
          `a = 10\nb = 3\n\nprint(a + b)   # 13\nprint(a // b)  # 3\nprint(a % b)   # 1\nprint(a > b)   # True`,
          "Create a calculator that adds, subtracts, multiplies, and divides two numbers.",
          [
            ["What does 10 % 3 return?", "1", "3", "3.33", "0", "% returns the remainder after division."],
            ["What does 10 // 3 return?", "3", "1", "3.33", "30", "// performs floor division."],
            ["Which operator checks equality?", "==", "=", "!=", ">=", "== compares two values for equality."],
            ["What is the result of True and False?", "False", "True", "None", "1", "The and operator is true only when both operands are true."],
            ["Which operator raises a number to a power?", "**", "//", "%", "!=", "** performs exponentiation."],
          ]
        ),

        makeLesson(
          "lesson-6",
          "Python If, Elif and Else",
          "Conditional statements allow a program to choose which block of code to execute based on a condition.",
          [
            {
              heading: "The if statement",
              content:
                "An if statement executes its indented block when its condition evaluates to true.",
            },
            {
              heading: "elif and else",
              content:
                "elif checks another condition when earlier conditions were false. An optional else block runs if no preceding branch was selected.",
            },
            {
              heading: "Conditions in real programs",
              content:
                "Conditions can validate input, check marks, determine eligibility, and choose between different actions. Keep conditions clear and test boundary values.",
            },
          ],
          `marks = 82\n\nif marks >= 90:\n    print("Excellent")\nelif marks >= 75:\n    print("Very good")\nelse:\n    print("Keep practising")`,
          "Write a marks classification program with at least three ranges and test values at the boundaries.",
          [
            ["When does an if block execute?", "When its condition is true", "Whenever the program starts", "Only when a loop ends", "Only when a function returns", "The if block executes when its condition evaluates to true."],
            ["What is elif used for?", "Checking another condition", "Declaring a class", "Importing a module", "Creating a list", "elif adds another conditional branch."],
            ["When does the else branch run in an if/elif/else chain?", "When no earlier branch is selected", "Whenever the first condition is true", "After every statement", "Only inside a class", "else handles the case where preceding conditions were not selected."],
            ["What punctuation follows an if condition?", "A colon :", "A comma only", "A semicolon only", "A question mark", "Python uses a colon before the indented block."],
            ["Why test boundary values in a marks program?", "To verify range conditions", "To increase variable names", "To remove indentation", "To turn numbers into comments", "Boundary tests help detect mistakes in comparison conditions."],
          ]
        ),

        makeLesson(
          "lesson-7",
          "Python For and While Loops",
          "Loops repeat a block of code. They are useful when processing a sequence or repeating a task until a condition changes.",
          [
            {
              heading: "The for loop",
              content:
                "A for loop iterates over items in an iterable, such as a list, string, or range object.",
            },
            {
              heading: "The while loop",
              content:
                "A while loop repeats as long as its condition remains true. Update the relevant state so the loop can eventually stop when appropriate.",
            },
            {
              heading: "range, break and continue",
              content:
                "range() generates a sequence of integers. break exits the nearest loop, while continue skips the remaining body for the current iteration.",
            },
          ],
          `for number in range(1, 6):\n    print(number)\n\ncount = 3\nwhile count > 0:\n    print(count)\n    count -= 1`,
          "Print numbers from 1 to 20 and calculate their total using a loop.",
          [
            ["What does range(1, 5) produce when iterated?", "1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4, 5", "Only 5", "The stop value 5 is excluded."],
            ["When does a while loop continue?", "While its condition is true", "Only once", "Only when its condition is false", "Only after a return statement", "A while loop tests its condition before each iteration."],
            ["What does break do inside a loop?", "Exits the nearest loop", "Restarts the entire computer", "Skips only one expression", "Defines a new function", "break exits the nearest enclosing loop."],
            ["What does continue do?", "Skips to the next iteration", "Ends the whole program", "Creates a dictionary", "Returns from every function", "continue skips the rest of the current loop iteration."],
            ["Which is a common use of a loop?", "Processing every item in a list", "Defining a CSS colour", "Creating a hardware circuit", "Changing a file extension", "Loops are useful for repeated processing."],
          ]
        ),

        makeLesson(
          "lesson-8",
          "Python Input and Output",
          "Input and output allow Python programs to receive information from users and present results.",
          [
            {
              heading: "Getting user input",
              content:
                "input() displays an optional prompt and returns the entered text as a string. Convert that string when a numeric value is needed.",
            },
            {
              heading: "Displaying results",
              content:
                "print() displays values. Commas can separate multiple values, while f-strings provide a convenient way to insert expressions into text.",
            },
            {
              heading: "Converting input",
              content:
                "Use int() for integer conversion and float() for floating-point conversion. Invalid text can raise ValueError, so programs that accept arbitrary input should handle errors appropriately.",
            },
          ],
          `name = input("Enter your name: ")\nage = int(input("Enter your age: "))\n\nprint(f"Hello {name}")\nprint(f"Next year you will be {age + 1}")`,
          "Ask for a student's name and three marks, then display the total and average.",
          [
            ["What type does input() return?", "str", "int in every case", "float in every case", "bool in every case", "input() returns the entered text as a string."],
            ["Which function converts suitable text to an integer?", "int()", "str()", "print()", "range()", "int() converts valid integer text to an integer."],
            ["Which is an f-string?", 'f"Hello {name}"', '"f Hello name"', "format = f()", "<f>Hello</f>", "An f-string uses an f prefix and braces for expressions."],
            ["What can happen when int('hello') runs?", "A ValueError is raised", "The value becomes zero automatically", "It creates a list", "It always returns True", "The text is not a valid integer representation."],
            ["How can you display several values with print()?", "Separate the values with commas", "Use only HTML tags", "Put every value in a comment", "Use a CSS selector", "print() accepts multiple arguments separated by commas."],
          ]
        ),
      ],
    },

    // WEEK 3: COLLECTIONS AND FUNCTIONS
    {
      title: "Collections and Functions",
      assignment:
        "Build a contact or student records program using collections and reusable functions.",

      lessons: [
        makeLesson(
          "lesson-9",
          "Python Strings",
          "Strings represent text. Python provides many methods for searching, cleaning, splitting, and formatting strings.",
          [
            {
              heading: "Creating strings",
              content:
                "Strings can use single or double quotes. Triple-quoted strings can span multiple lines. Strings are immutable, meaning their characters cannot be changed in place.",
            },
            {
              heading: "Indexing and slicing",
              content:
                "Indexing retrieves a character. Slicing retrieves a substring using start and stop positions, with the stop position excluded.",
            },
            {
              heading: "Useful string methods",
              content:
                "Common methods include lower(), upper(), strip(), replace(), split(), and find(). Methods such as lower() return a new string rather than changing the original string.",
            },
          ],
          `text = "  Python Programming  "\n\nprint(text.strip())\nprint(text.lower())\nprint(text[0])\nprint(text[0:6])\nprint("a,b,c".split(","))`,
          "Ask for a sentence and display its uppercase form, lowercase form, length, and words.",
          [
            ["Are Python strings mutable?", "No, strings are immutable", "Yes, every character can be changed in place", "Only strings with spaces are mutable", "Only empty strings are mutable", "String operations return new strings rather than changing individual characters in place."],
            ["What does text[0] usually select?", "The first character", "The second character", "The final two characters", "The entire string", "Python uses zero-based indexing."],
            ["What does strip() do?", "Removes surrounding whitespace by default", "Reverses every word", "Converts text to an integer", "Sorts all characters", "strip() removes leading and trailing whitespace by default."],
            ["What does split(',') do to 'a,b,c'?", "Creates a list of three strings", "Creates one integer", "Removes every character", "Creates a tuple of numbers", "split(',') separates the string at comma characters."],
            ["What does text[0:3] select?", "Characters at indices 0, 1, and 2", "Characters at indices 0 through 3", "Only the character at index 3", "The last three characters in every case", "The slice stop index is excluded."],
          ]
        ),

        makeLesson(
          "lesson-10",
          "Python Lists and Tuples",
          "Lists and tuples store ordered collections. Lists are mutable, while tuples are immutable.",
          [
            {
              heading: "Lists",
              content:
                "Lists use square brackets. They support indexing, slicing, append(), extend(), remove(), pop(), and sorting methods.",
            },
            {
              heading: "Tuples",
              content:
                "Tuples commonly use parentheses. They are useful for ordered collections that should not be modified in place. A one-item tuple needs a trailing comma, such as (5,).",
            },
            {
              heading: "Choosing a collection",
              content:
                "Choose a list when you need to modify a collection. Choose a tuple when a fixed ordered grouping better describes the data.",
            },
          ],
          `fruits = ["apple", "mango"]\nfruits.append("banana")\nprint(fruits)\n\npoint = (10, 20)\nprint(point[0])`,
          "Create a list of five subjects, add one more subject, remove one, and print the final list.",
          [
            ["Which brackets create a list literal?", "Square brackets []", "Curly braces {} only", "Angle brackets <>", "Quotation marks only", "Lists are written with square brackets."],
            ["Which collection is mutable?", "list", "tuple", "str", "int", "Lists can be changed after creation."],
            ["Which method adds one item to the end of a list?", "append()", "strip()", "split()", "upper()", "append() adds one item to the end of a list."],
            ["How do you write a one-item tuple containing 5?", "(5,)", "(5)", "[5]", "{5:}", "The comma distinguishes a one-item tuple from a parenthesized integer."],
            ["What does point[0] return for point = (10, 20)?", "10", "20", "(10, 20)", "0", "Index zero refers to the first tuple item."],
          ]
        ),

        makeLesson(
          "lesson-11",
          "Python Dictionaries and Sets",
          "Dictionaries map keys to values. Sets store unique elements and are useful for membership tests and set operations.",
          [
            {
              heading: "Dictionaries",
              content:
                "A dictionary uses key-value pairs. You can read a value using its key, add or update entries, and iterate through items(). Keys must be hashable.",
            },
            {
              heading: "Sets",
              content:
                "A set stores distinct elements. add() inserts an element, and operations such as union, intersection, and difference compare sets.",
            },
            {
              heading: "Choosing between them",
              content:
                "Use a dictionary when each key needs an associated value. Use a set when uniqueness and membership are the main requirements.",
            },
          ],
          `student = {"name": "Ravi", "marks": 85}\nprint(student["name"])\nstudent["marks"] = 90\n\nsubjects = {"Python", "SQL", "Python"}\nprint(subjects)`,
          "Create a dictionary with a student's name, branch, and marks. Create a set of subjects and demonstrate membership testing.",
          [
            ["What does a dictionary store?", "Key-value pairs", "Only unique values without keys", "Only sequential instructions", "Only decimal numbers", "Dictionaries associate keys with values."],
            ["How do you access the name in student = {'name': 'Ravi'}?", "student['name']", "student[0]", "student.name()", "student('name')", "A dictionary value can be retrieved using its key."],
            ["What happens to duplicate values in a set?", "Only one copy is retained", "They always become dictionary keys", "They are automatically sorted alphabetically", "They cause every set to fail", "Sets contain unique elements."],
            ["Which method provides dictionary key-value pairs for iteration?", "items()", "append()", "strip()", "lower()", "items() returns a view of the dictionary's key-value pairs."],
            ["Which operation finds common elements in two sets?", "Intersection", "Concatenation", "String slicing", "Integer division", "Set intersection identifies elements present in both sets."],
          ]
        ),

        makeLesson(
          "lesson-12",
          "Python Functions",
          "Functions package reusable instructions into named blocks. They help organise programs and reduce repeated code.",
          [
            {
              heading: "Defining a function",
              content:
                "Use def followed by a function name, parentheses, and a colon. The indented block contains the function body.",
            },
            {
              heading: "Parameters and return values",
              content:
                "Parameters receive values passed to a function. return sends a result back to the caller. A function without an explicit return statement returns None.",
            },
            {
              heading: "Reusable design",
              content:
                "Give functions meaningful names and keep each function focused on a clear task. Functions can accept multiple parameters and can use default parameter values.",
            },
          ],
          `def calculate_total(a, b):\n    return a + b\n\nresult = calculate_total(10, 20)\nprint(result)`,
          "Write functions to calculate the area of a rectangle, check whether a number is even, and calculate an average.",
          [
            ["Which keyword defines a function?", "def", "class", "import", "yield only", "def introduces a function definition."],
            ["What does return do?", "Sends a result back to the caller", "Displays a value only", "Repeats a loop", "Imports a package", "return provides the function's result to the caller."],
            ["What does a function without an explicit return normally return?", "None", "Always zero", "Always an empty list", "Always True", "Python functions return None when no return value is specified."],
            ["What is a parameter?", "A named input in a function definition", "A comment after a statement", "A file extension", "A type of loop", "Parameters define the inputs a function can receive."],
            ["Why use functions?", "To organise and reuse logic", "To prevent all errors automatically", "To replace every variable", "To make code impossible to test", "Functions support reuse, organisation, and testing."],
          ]
        ),
      ],
    },

    // WEEK 4: FILES, ERRORS, MODULES AND PROJECT
    {
      title: "Files, Errors and Projects",
      assignment:
        "Complete a Python Student Management System with functions, records, input validation, and file storage.",

      lessons: [
        makeLesson(
          "lesson-13",
          "Python Modules and Imports",
          "Modules let you organise Python code and reuse functionality written in other files or provided by the standard library.",
          [
            {
              heading: "Importing a module",
              content:
                "Use import module_name to access functionality from a module. You can also import selected names with from module_name import name.",
            },
            {
              heading: "Standard library",
              content:
                "Python includes modules such as math for mathematical operations, random for pseudo-random values, and datetime for working with dates and times.",
            },
            {
              heading: "Creating your own module",
              content:
                "A Python file can act as a module. Keep related functions together and import them into other scripts when needed.",
            },
          ],
          `import math\n\nprint(math.sqrt(25))\nprint(math.ceil(4.2))`,
          "Use the math module to calculate a square root and use datetime to display the current date.",
          [
            ["Which statement imports the math module?", "import math", "include math", "using math", "load <math>", "import is Python's module import statement."],
            ["What does math.sqrt(25) return?", "5.0", "25.0", "10.0", "625.0", "The square root of 25 is 5, returned as a floating-point result."],
            ["Which module supports date and time operations?", "datetime", "html", "css", "sqlite only", "datetime provides date and time types."],
            ["What can a user-created .py file provide to another script?", "Reusable functions and classes", "Only images", "Only CSS rules", "Only database passwords", "A Python module can expose functions, classes, and other names."],
            ["Why divide a large program into modules?", "To organise and reuse code", "To remove all imports", "To disable functions", "To force every variable to be global", "Modules help organise related code and reuse it across scripts."],
          ]
        ),

        makeLesson(
          "lesson-14",
          "Python Exceptions and Error Handling",
          "Errors can occur during execution, even when a program's syntax is valid. Exception handling lets you respond to expected failures.",
          [
            {
              heading: "Common exceptions",
              content:
                "ValueError can occur when a value has the wrong format. ZeroDivisionError occurs when dividing a number by zero. FileNotFoundError can occur when a requested file cannot be found.",
            },
            {
              heading: "try and except",
              content:
                "Place operations that may fail inside a try block. Use except to handle the specific exception you expect. Avoid hiding every error without understanding it.",
            },
            {
              heading: "else and finally",
              content:
                "An optional else block runs if the try block finishes without an exception. An optional finally block runs whether an exception occurred or not.",
            },
          ],
          `try:\n    age = int(input("Enter age: "))\nexcept ValueError:\n    print("Please enter a valid integer")\nelse:\n    print("Age:", age)\nfinally:\n    print("Finished")`,
          "Create a calculator that handles invalid numeric input and division by zero.",
          [
            ["Which exception can int('abc') raise?", "ValueError", "KeyError", "IndexError", "StopIteration", "The text 'abc' is not a valid integer representation."],
            ["Which block contains code that may raise an exception?", "try", "except only", "else only", "finally only", "Potentially failing operations are placed in the try block."],
            ["Which exception is associated with division by zero?", "ZeroDivisionError", "NameError", "ImportError", "AttributeError", "Python raises ZeroDivisionError for ordinary numeric division by zero."],
            ["When does an except block handle an exception?", "When a matching exception is raised in the try block", "Whenever a comment exists", "Before the try block starts", "Only when every statement succeeds", "except handles exceptions matching its specified type."],
            ["What is the purpose of finally?", "Run cleanup code whether an exception occurs or not", "Repeat the program forever", "Define a new module", "Convert every value to text", "finally is commonly used for cleanup that should occur regardless of success or failure."],
          ]
        ),

        makeLesson(
          "lesson-15",
          "Python File Handling",
          "File handling lets a program save and retrieve information beyond the lifetime of a single run.",
          [
            {
              heading: "Opening a file",
              content:
                "Use open() to access a file. Common modes include r for reading, w for writing with truncation or creation, a for appending, and x for exclusive creation.",
            },
            {
              heading: "Reading and writing",
              content:
                "Methods such as read(), readline(), and write() work with file contents. Writing in w mode replaces existing content, so choose the mode carefully.",
            },
            {
              heading: "Using with",
              content:
                "The with statement manages a file context and closes the file when the block exits, including when an exception occurs.",
            },
          ],
          `with open("notes.txt", "w", encoding="utf-8") as file:\n    file.write("Learning Python\\n")\n\nwith open("notes.txt", "r", encoding="utf-8") as file:\n    content = file.read()\n    print(content)`,
          "Write three student records to a text file and read them back.",
          [
            ["Which file mode is commonly used to read an existing file?", "r", "w", "a", "x only", "The r mode opens a file for reading."],
            ["What does w mode normally do to an existing file?", "Truncates its existing contents", "Always preserves all old contents", "Opens it only for reading", "Deletes the Python interpreter", "Opening an existing file in w mode truncates its contents."],
            ["What is a benefit of using with open(...)?", "The file is closed when the context exits", "The file can never be missing", "All writes are encrypted automatically", "The file is converted to a database", "The context manager handles file closing when the block exits."],
            ["Which method writes text to an open text file?", "write()", "append_text_only()", "print_file()", "input_file()", "write() writes a string to a file object."],
            ["What can happen when opening a missing file in r mode?", "FileNotFoundError", "A file is always created", "The contents become an empty dictionary", "Python installs the file automatically", "Reading mode expects the requested file to exist."],
          ]
        ),

        makeLesson(
          "lesson-16",
          "Final Project: Student Management System",
          "Bring together Python variables, collections, functions, loops, conditions, and file handling in a small student management application.",
          [
            {
              heading: "Project requirements",
              content:
                "Create a program that can add student records, list students, search for a student, and calculate marks or averages. A record can contain an ID, name, and marks.",
            },
            {
              heading: "Plan your data",
              content:
                "A list of dictionaries is one practical structure for storing multiple student records. Give each record clear keys and validate input before storing it.",
            },
            {
              heading: "Build and test",
              content:
                "Use separate functions for adding, listing, searching, and saving records. Test valid input, missing students, invalid marks, and file-related errors.",
            },
          ],
          `students = [\n    {"id": 1, "name": "Ravi", "marks": 85},\n    {"id": 2, "name": "Sita", "marks": 92},\n]\n\nfor student in students:\n    print(student["name"], student["marks"])`,
          "Build the Student Management System with add, view, search, and save features. Test each feature and document the result.",
          [
            ["Which structure is suitable for storing several student records?", "A list of dictionaries", "A single Boolean value", "One string containing only a heading", "A single integer", "A list can hold multiple records, and each dictionary can represent one student."],
            ["Why separate project features into functions?", "To keep logic reusable and organised", "To make every variable global", "To avoid testing", "To prevent data from being stored", "Separate functions make features easier to understand and test."],
            ["What should the search feature do when an ID is missing?", "Report that no matching student was found", "Return an unrelated student", "Delete every student", "Change the missing ID automatically", "A search should clearly handle the no-match case."],
            ["Why validate marks before saving a record?", "To reject invalid or out-of-range input", "To increase file size", "To remove all student names", "To stop using dictionaries", "Validation helps ensure stored records meet the application's requirements."],
            ["Which is a useful final testing step?", "Test normal input and error cases", "Test only one successful case", "Remove all error handling", "Skip checking saved records", "Testing both expected and invalid cases helps reveal defects."],
          ]
        ),
      ],
    },
  ],
};

export default pythonCourse;

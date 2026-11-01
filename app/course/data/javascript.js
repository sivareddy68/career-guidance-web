
export const javascriptCourse = {
  skill: "JavaScript",
  title: "JavaScript Programming",
  description:
    "Learn JavaScript from the basics to DOM manipulation, asynchronous programming, and a practical project.",
  duration: "1 Month",
  weeks: [
    {
      week: 1,
      title: "JavaScript Fundamentals",
      description: "Learn variables, data types, operators, and conditions.",
      lessons: [
        {
          title: "Introduction to JavaScript",
          explanation:
            "JavaScript is a programming language used to make websites interactive and build applications.",
          example: "console.log('Hello, World!');",
          exercise: "Write a JavaScript statement that prints your name.",
          quiz: {
            question: "Where is JavaScript commonly used?",
            options: ["Only databases", "Interactive websites", "Only spreadsheets", "Only image editing"],
            answer: 1,
          },
        },
        {
          title: "Variables and Constants",
          explanation:
            "Use let for reassignable variables and const for bindings that should not be reassigned.",
          example: "let age = 20;\nconst name = 'Ravi';",
          exercise: "Create variables for your name, age, and college.",
          quiz: {
            question: "Which keyword declares a block-scoped variable that can be reassigned?",
            options: ["const", "let", "fixed", "define"],
            answer: 1,
          },
        },
        {
          title: "Data Types and Operators",
          explanation:
            "JavaScript supports strings, numbers, booleans, objects, and other values. Operators perform calculations and comparisons.",
          example: "const total = 10 + 5;\nconsole.log(total);",
          exercise: "Calculate the sum, difference, and product of two numbers.",
          quiz: {
            question: "Which value is a boolean?",
            options: ["'hello'", "25", "true", "{ name: 'Ravi' }"],
            answer: 2,
          },
        },
        {
          title: "Conditional Statements",
          explanation:
            "Use if, else if, and else to execute different code depending on conditions.",
          example: "const marks = 80;\nif (marks >= 40) {\n  console.log('Pass');\n} else {\n  console.log('Try again');\n}",
          exercise: "Write a program that checks whether a number is positive, negative, or zero.",
          quiz: {
            question: "Which statement is used for conditional execution?",
            options: ["if", "repeat", "print", "import"],
            answer: 0,
          },
        },
      ],
      assignment:
        "Create a JavaScript program that stores student details, calculates total marks, and checks whether the student passed.",
    },
    {
      week: 2,
      title: "Loops, Functions, and Arrays",
      description: "Repeat tasks, organize reusable code, and work with collections.",
      lessons: [
        {
          title: "Loops",
          explanation:
            "Loops repeat a block of code while a condition is satisfied or for each item in a collection.",
          example: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
          exercise: "Print numbers from 1 to 20 using a loop.",
          quiz: {
            question: "Which loop is commonly used to repeat code a set number of times?",
            options: ["for", "import", "return", "className"],
            answer: 0,
          },
        },
        {
          title: "Functions",
          explanation:
            "Functions group reusable code and can accept parameters and return results.",
          example: "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 4));",
          exercise: "Write a function that multiplies two numbers.",
          quiz: {
            question: "Which keyword returns a value from a function?",
            options: ["send", "return", "yieldValue", "output"],
            answer: 1,
          },
        },
        {
          title: "Arrays",
          explanation:
            "Arrays store ordered collections of values and support methods for adding, removing, and processing items.",
          example: "const skills = ['HTML', 'CSS', 'JavaScript'];\nconsole.log(skills[0]);",
          exercise: "Create an array of five skills and print each skill.",
          quiz: {
            question: "What is the index of the first array element?",
            options: ["1", "-1", "0", "5"],
            answer: 2,
          },
        },
        {
          title: "Objects",
          explanation:
            "Objects store related information as key-value pairs.",
          example: "const student = { name: 'Ravi', age: 20 };\nconsole.log(student.name);",
          exercise: "Create a student object with name, age, and department properties.",
          quiz: {
            question: "How do you access the name property in student?",
            options: ["student->name", "student.name", "student(name)", "student:name"],
            answer: 1,
          },
        },
      ],
      assignment:
        "Create a student records program using an array of objects and functions to display student information.",
    },
    {
      week: 3,
      title: "DOM and Browser Programming",
      description: "Connect JavaScript to web pages and respond to user actions.",
      lessons: [
        {
          title: "Introduction to the DOM",
          explanation:
            "The Document Object Model represents a web page as objects that JavaScript can inspect and change.",
          example: "document.querySelector('h1');",
          exercise: "Select a heading element from a sample HTML page.",
          quiz: {
            question: "What does DOM stand for?",
            options: ["Data Object Method", "Document Object Model", "Digital Output Mode", "Document Order Map"],
            answer: 1,
          },
        },
        {
          title: "Changing HTML and CSS",
          explanation:
            "JavaScript can update element text, attributes, and styles to change a page dynamically.",
          example: "document.querySelector('h1').textContent = 'Welcome';",
          exercise: "Change a heading's text when a button is clicked.",
          quiz: {
            question: "Which property changes an element's text content?",
            options: ["textContent", "database", "fileName", "loopText"],
            answer: 0,
          },
        },
        {
          title: "Events and Event Listeners",
          explanation:
            "Events represent actions such as clicks or keyboard input. Event listeners run code when an event occurs.",
          example: "document.querySelector('button').addEventListener('click', () => {\n  console.log('Button clicked');\n});",
          exercise: "Add a button that displays a message when clicked.",
          quiz: {
            question: "Which method registers an event handler?",
            options: ["addEventListener", "addDatabase", "listenFile", "createEventPage"],
            answer: 0,
          },
        },
        {
          title: "Forms and Input Validation",
          explanation:
            "JavaScript can read form values and validate input before processing it. Server-side validation is still important for security.",
          example: "const value = document.querySelector('input').value.trim();\nconsole.log(value);",
          exercise: "Create a form that checks whether a required field is empty.",
          quiz: {
            question: "Why validate form input?",
            options: ["To check that input meets expected rules", "To delete HTML", "To install JavaScript", "To change the browser"],
            answer: 0,
          },
        },
      ],
      assignment:
        "Build an interactive web page with a form, a button, input validation, and a dynamically updated message.",
    },
    {
      week: 4,
      title: "Modern JavaScript and Mini Project",
      description: "Learn modern syntax, asynchronous operations, and build a small application.",
      lessons: [
        {
          title: "Arrow Functions and Modern Syntax",
          explanation:
            "Arrow functions provide a concise way to write functions. Template literals make it easier to combine strings and values.",
          example: "const greet = (name) => `Hello, ${name}!`;\nconsole.log(greet('Ravi'));",
          exercise: "Rewrite a simple function using arrow syntax and a template literal.",
          quiz: {
            question: "Which symbol is used in an arrow function?",
            options: ["->", "=>", "::", "**"],
            answer: 1,
          },
        },
        {
          title: "Array Methods",
          explanation:
            "Methods such as map, filter, and find help transform and search array data.",
          example: "const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map((n) => n * 2);",
          exercise: "Use filter to find all even numbers in an array.",
          quiz: {
            question: "Which method creates a new array by transforming each item?",
            options: ["map", "push", "pop", "shift"],
            answer: 0,
          },
        },
        {
          title: "Promises and Async/Await",
          explanation:
            "Promises represent the eventual result of an asynchronous operation. async and await help write asynchronous code clearly.",
          example: "async function loadData() {\n  const response = await fetch('/api/data');\n  return response.json();\n}",
          exercise: "Write an async function that fetches data from a test API and handles errors.",
          quiz: {
            question: "Which keyword allows waiting for a promise inside an async function?",
            options: ["pause", "await", "hold", "waitFor"],
            answer: 1,
          },
        },
        {
          title: "JavaScript Mini Project",
          explanation:
            "Combine variables, arrays, functions, events, and DOM updates to build a useful interactive application.",
          example: "const tasks = [];\nfunction addTask(task) {\n  tasks.push(task);\n}",
          exercise: "Build a to-do list that allows users to add and mark tasks as complete.",
          quiz: {
            question: "Which data structure is useful for storing a list of tasks?",
            options: ["Array", "Boolean only", "A single number only", "Comment"],
            answer: 0,
          },
        },
      ],
      assignment:
        "Mini project: Build a to-do list with add, complete, and delete actions. Organize your code into functions and test the main features.",
    },
  ],
};

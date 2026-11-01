
const reactCourse = {
  title: "React for Web Developer",
  description:
    "Learn React from fundamentals to advanced concepts, including components, JSX, props, state, hooks, routing, API integration, and building interactive web applications.",
  weeks: [
    {
      title: "Week 1: React Fundamentals",
      description:
        "Understand React, set up a development environment, and build your first component-based application.",
      lessons: [
        {
          title: "Introduction to React",
          content: `React is a JavaScript library used to build interactive user interfaces. It is commonly used for developing single-page applications.

React uses reusable components to divide an application into smaller parts. Instead of updating the entire page manually, React updates the parts of the interface that need to change.

Important concepts:
- React is a JavaScript library.
- Components are reusable UI building blocks.
- React uses a declarative approach.
- React applications commonly use a virtual DOM.
- React is widely used for frontend development.

React is useful for dashboards, websites, social platforms, e-commerce applications, and web portals.`,
          quiz: [
            {
              question: "What is React?",
              options: ["A database", "A JavaScript library", "An operating system", "A programming language"],
              answer: "A JavaScript library",
            },
            {
              question: "What is the main purpose of React?",
              options: ["Build user interfaces", "Manage databases", "Create operating systems", "Design hardware"],
              answer: "Build user interfaces",
            },
            {
              question: "What are React components?",
              options: ["Reusable UI building blocks", "Database tables", "CSS files", "Server devices"],
              answer: "Reusable UI building blocks",
            },
            {
              question: "React is primarily based on which language?",
              options: ["Python", "Java", "JavaScript", "C"],
              answer: "JavaScript",
            },
            {
              question: "Which type of applications commonly use React?",
              options: ["Single-page applications", "Operating systems", "Device drivers", "Firmware"],
              answer: "Single-page applications",
            },
          ],
        },
        {
          title: "Setting Up a React Project",
          content: `Before developing a React application, you need Node.js and a code editor such as Visual Studio Code.

A common way to create a modern React project is by using Vite.

Steps:
1. Install Node.js.
2. Open VS Code.
3. Open the terminal.
4. Run npm create vite@latest my-react-app.
5. Select React and JavaScript.
6. Run cd my-react-app.
7. Run npm install.
8. Start the development server using npm run dev.

The terminal provides a local URL where you can view your application.

Project files commonly include src, public, package.json, and index.html.`,
          quiz: [
            {
              question: "Which runtime is commonly used to run JavaScript tools during React development?",
              options: ["Node.js", "MySQL", "Photoshop", "MongoDB"],
              answer: "Node.js",
            },
            {
              question: "Which tool can create a modern React project?",
              options: ["Vite", "Excel", "Notepad", "PowerPoint"],
              answer: "Vite",
            },
            {
              question: "Which command installs project dependencies?",
              options: ["npm install", "npm delete", "npm remove", "npm close"],
              answer: "npm install",
            },
            {
              question: "Which command starts a typical Vite development server?",
              options: ["npm run dev", "npm run delete", "npm stop", "npm build-dev"],
              answer: "npm run dev",
            },
            {
              question: "Which file contains project dependencies and scripts?",
              options: ["package.json", "index.html", "style.css", "README only"],
              answer: "package.json",
            },
          ],
        },
        {
          title: "JSX and React Elements",
          content: `JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript code.

Example:

function Welcome() {
  return <h1>Welcome to React</h1>;
}

JSX makes UI code easier to read and maintain.

Important JSX rules:
- Return a single parent element or use a fragment.
- Close all elements.
- Use className instead of class.
- Use curly braces to insert JavaScript expressions.
- Component names should start with uppercase letters.

Example:

const name = "Siva";
return <h1>Hello {name}</h1>;

JSX is transformed into JavaScript instructions that React can use to display the interface.`,
          quiz: [
            {
              question: "What does JSX stand for?",
              options: ["JavaScript XML", "Java Syntax Extension", "Java XML", "JSON XML"],
              answer: "JavaScript XML",
            },
            {
              question: "Which attribute is used instead of HTML class in JSX?",
              options: ["className", "cssClass", "classType", "styleName"],
              answer: "className",
            },
            {
              question: "How do you insert a JavaScript expression in JSX?",
              options: ["Curly braces", "Square brackets", "Quotation marks only", "Angle brackets"],
              answer: "Curly braces",
            },
            {
              question: "How should a React component name normally begin?",
              options: ["Uppercase letter", "Number", "Special character", "Lowercase letter only"],
              answer: "Uppercase letter",
            },
            {
              question: "What should JSX return when using multiple sibling elements?",
              options: ["A single parent or fragment", "Multiple unrelated returns", "Only strings", "Only arrays"],
              answer: "A single parent or fragment",
            },
          ],
        },
        {
          title: "Creating and Reusing Components",
          content: `A component is an independent and reusable part of a React interface.

Components help organize applications into smaller sections such as Navbar, Header, Footer, Sidebar, and ProductCard.

Example:

function Header() {
  return <h1>My Website</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome!</p>
    </div>
  );
}

A component can be created as a JavaScript function that returns JSX.

Benefits:
- Code reusability.
- Better organization.
- Easier maintenance.
- Separation of responsibilities.

You can keep components in separate files and import them wherever required.`,
          quiz: [
            {
              question: "What is a React component?",
              options: ["A reusable UI unit", "A database", "A browser", "A network protocol"],
              answer: "A reusable UI unit",
            },
            {
              question: "Which syntax is used to render a Header component?",
              options: ["<Header />", "Header()", "render Header", "##Header"],
              answer: "<Header />",
            },
            {
              question: "Which naming convention is commonly used for component files?",
              options: ["PascalCase", "Only numbers", "All symbols", "Snake case only"],
              answer: "PascalCase",
            },
            {
              question: "What does component reusability help reduce?",
              options: ["Repeated code", "Browser support", "JavaScript", "HTML elements"],
              answer: "Repeated code",
            },
            {
              question: "What does a function component normally return?",
              options: ["JSX or React elements", "SQL queries", "CSS files", "Database records only"],
              answer: "JSX or React elements",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Props, State and Events",
      description:
        "Learn how components communicate, manage changing data, handle user interactions, and display dynamic lists.",
      lessons: [
        {
          title: "Understanding Props",
          content: `Props are used to pass data from a parent component to a child component.

Example:

function Student(props) {
  return <h2>{props.name}</h2>;
}

function App() {
  return <Student name="Siva" />;
}

Props make components flexible because the same component can display different information.

Important points:
- Props are passed from parent to child.
- Props are read-only.
- A child component should not directly modify its props.
- Props can contain strings, numbers, arrays, objects, and functions.

You can also use destructuring:

function Student({ name }) {
  return <h2>{name}</h2>;
}

Props are useful for passing user details, product information, titles, and other data.`,
          quiz: [
            {
              question: "What are props used for?",
              options: ["Passing data between components", "Creating databases", "Styling only", "Installing packages"],
              answer: "Passing data between components",
            },
            {
              question: "Which direction do props normally flow?",
              options: ["Parent to child", "Child to parent directly", "Database to CSS", "Browser to server only"],
              answer: "Parent to child",
            },
            {
              question: "Are props directly modified by child components?",
              options: ["No, props are read-only", "Yes, always", "Only in CSS", "Only after refresh"],
              answer: "No, props are read-only",
            },
            {
              question: "Which syntax passes a name prop?",
              options: ['<Student name="Siva" />', "<Student name />", "Student.name()", "props = Student"],
              answer: '<Student name="Siva" />',
            },
            {
              question: "What is prop destructuring?",
              options: ["Extracting values from props", "Deleting a component", "Removing CSS", "Creating a server"],
              answer: "Extracting values from props",
            },
          ],
        },
        {
          title: "State and the useState Hook",
          content: `State is data that a component manages and that can change over time.

React provides the useState Hook to add state to function components.

Example:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

Here:
- count stores the current value.
- setCount updates the value.
- useState(0) sets the initial value.

When state changes, React renders the component again to display the updated result.

Use state for counters, form inputs, menu visibility, selected tabs, and other changing interface data.

Do not directly modify state variables. Use their setter functions.`,
          quiz: [
            {
              question: "Which Hook is used to manage local component state?",
              options: ["useState", "useRoute", "useStyle", "useHTML"],
              answer: "useState",
            },
            {
              question: "What does the setter function do?",
              options: ["Updates state", "Deletes React", "Creates HTML files", "Starts the server"],
              answer: "Updates state",
            },
            {
              question: "What happens when state is updated?",
              options: ["React schedules a re-render", "The browser closes", "The project is deleted", "CSS is removed"],
              answer: "React schedules a re-render",
            },
            {
              question: "What is the initial state in useState(0)?",
              options: ["0", "1", "null", "undefined"],
              answer: "0",
            },
            {
              question: "How should React state normally be changed?",
              options: ["Using its setter function", "Directly changing the variable", "Editing package.json", "Refreshing the browser only"],
              answer: "Using its setter function",
            },
          ],
        },
        {
          title: "Handling Events in React",
          content: `Events allow React applications to respond to user actions such as clicks, typing, form submission, and mouse movement.

React uses event props such as onClick, onChange, and onSubmit.

Example:

function Button() {
  function handleClick() {
    alert("Button clicked");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

Event names use camelCase.

You pass a function to an event handler rather than calling it immediately.

Example:

<button onClick={() => console.log("Clicked")}>
  Click
</button>

Events are commonly used with state to create interactive interfaces.

Examples include opening menus, submitting forms, changing counters, and selecting items.`,
          quiz: [
            {
              question: "Which event handles a button click in React?",
              options: ["onClick", "onPressOnly", "clickEvent", "buttonClick"],
              answer: "onClick",
            },
            {
              question: "How are React event names written?",
              options: ["camelCase", "UPPERCASE", "lowercase only", "kebab-case"],
              answer: "camelCase",
            },
            {
              question: "What should be passed to onClick?",
              options: ["A function", "A CSS file", "A database", "A package name"],
              answer: "A function",
            },
            {
              question: "Which event is useful when an input value changes?",
              options: ["onChange", "onDelete", "onRoute", "onInstall"],
              answer: "onChange",
            },
            {
              question: "Which event commonly handles form submission?",
              options: ["onSubmit", "onStyle", "onLoadCSS", "onDatabase"],
              answer: "onSubmit",
            },
          ],
        },
        {
          title: "Conditional Rendering and Lists",
          content: `Conditional rendering means displaying different UI elements based on a condition.

Example:

function Greeting({ loggedIn }) {
  return loggedIn ? <h1>Welcome</h1> : <h1>Please log in</h1>;
}

React also supports logical AND rendering:

{isVisible && <p>Hello</p>}

Lists can be displayed using the JavaScript map method.

Example:

const students = ["Ravi", "Siva", "Anu"];

function StudentList() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </ul>
  );
}

Each item in a rendered list should have a stable key.

Keys help React identify items when a list changes. Avoid using array indexes as keys when list items can be reordered or removed.`,
          quiz: [
            {
              question: "What is conditional rendering?",
              options: ["Displaying UI based on conditions", "Creating databases", "Installing React", "Writing CSS only"],
              answer: "Displaying UI based on conditions",
            },
            {
              question: "Which JavaScript method is commonly used to render lists?",
              options: ["map()", "delete()", "alert()", "prompt()"],
              answer: "map()",
            },
            {
              question: "Why are keys used in React lists?",
              options: ["To identify list items", "To change fonts", "To install packages", "To create routes"],
              answer: "To identify list items",
            },
            {
              question: "Which operator can conditionally display an element?",
              options: ["&&", "===", "typeof", "delete"],
              answer: "&&",
            },
            {
              question: "Which approach is generally preferred for list keys?",
              options: ["Stable unique identifiers", "Random values every render", "Always the same key", "No keys"],
              answer: "Stable unique identifiers",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: React Hooks and API Integration",
      description:
        "Explore important React Hooks, manage side effects, work with forms, and retrieve data from APIs.",
      lessons: [
        {
          title: "Introduction to React Hooks",
          content: `Hooks are special React functions that allow function components to use React features such as state and context.

Common Hooks include:
- useState: manages component state.
- useEffect: handles side effects.
- useContext: reads context values.
- useRef: stores references to values or DOM elements.
- useMemo: caches calculated values.
- useCallback: caches function definitions.

Hooks must follow the Rules of Hooks:
- Call Hooks at the top level of React function components or custom Hooks.
- Do not call Hooks inside loops, conditions, or nested functions.
- Call Hooks only from React components or custom Hooks.

Hooks make it easier to share and organize component logic.`,
          quiz: [
            {
              question: "What are React Hooks?",
              options: ["Functions that provide React features", "Database commands", "CSS selectors", "HTML tags"],
              answer: "Functions that provide React features",
            },
            {
              question: "Which Hook manages component state?",
              options: ["useState", "useHTML", "useCSS", "useServer"],
              answer: "useState",
            },
            {
              question: "Where should Hooks generally be called?",
              options: ["At the top level of components or custom Hooks", "Inside every loop", "Inside CSS", "Only in HTML"],
              answer: "At the top level of components or custom Hooks",
            },
            {
              question: "Which Hook reads context values?",
              options: ["useContext", "useStyle", "useRouteOnly", "useDocument"],
              answer: "useContext",
            },
            {
              question: "Can Hooks be called conditionally?",
              options: ["No", "Yes, always", "Only in loops", "Only in event names"],
              answer: "No",
            },
          ],
        },
        {
          title: "Using the useEffect Hook",
          content: `The useEffect Hook is used to synchronize a component with external systems. Common examples include fetching data, setting up subscriptions, and working with browser APIs.

Example:

import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.title = "Users";
  }, []);

  return <div>Users: {users.length}</div>;
}

The dependency array controls when an effect is re-synchronized:
- No dependency array: runs after every commit.
- Empty array: runs after the initial mount, subject to React development behavior.
- Values in the array: runs when those dependencies change.

An effect can return a cleanup function to remove subscriptions or listeners.

Use effects carefully. Do not use them for values that can be calculated directly during rendering.`,
          quiz: [
            {
              question: "Which Hook is used for side effects?",
              options: ["useEffect", "useStateOnly", "useCSS", "useHTML"],
              answer: "useEffect",
            },
            {
              question: "What does an empty dependency array generally indicate?",
              options: ["Run after initial mount", "Run after every keystroke", "Never render", "Delete state"],
              answer: "Run after initial mount",
            },
            {
              question: "What can an effect return?",
              options: ["A cleanup function", "A CSS file", "A database table", "A new component name"],
              answer: "A cleanup function",
            },
            {
              question: "When does an effect with dependencies re-synchronize?",
              options: ["When a dependency changes", "Only when CSS changes", "When the computer restarts", "Never"],
              answer: "When a dependency changes",
            },
            {
              question: "Which is a suitable use of useEffect?",
              options: ["Managing an external subscription", "Calculating every simple display value", "Naming a CSS class", "Creating an HTML document"],
              answer: "Managing an external subscription",
            },
          ],
        },
        {
          title: "Fetching Data from APIs",
          content: `A web application often needs information from a backend server. An API provides a way for the frontend and backend to communicate.

JavaScript provides fetch() for making HTTP requests.

Example:

async function getUsers() {
  const response = await fetch("https://api.example.com/users");

  if (!response.ok) {
    throw new Error("Unable to fetch users");
  }

  const data = await response.json();
  return data;
}

In a React component, you can use useEffect to load data and useState to store the result.

A good API-loading interface should handle:
- Loading state.
- Successful response.
- Empty results.
- Error state.

Do not assume every request succeeds. Always handle errors and show useful feedback to users.`,
          quiz: [
            {
              question: "What is an API commonly used for?",
              options: ["Communication between applications", "Changing monitor brightness", "Writing CSS only", "Creating folders only"],
              answer: "Communication between applications",
            },
            {
              question: "Which JavaScript function can make HTTP requests?",
              options: ["fetch()", "map()", "filter()", "alert()"],
              answer: "fetch()",
            },
            {
              question: "Which method parses a JSON response body?",
              options: ["json()", "textCSS()", "parseHTML()", "mapResponse()"],
              answer: "json()",
            },
            {
              question: "What should an API interface handle?",
              options: ["Loading, success, and error states", "Only successful responses", "Only page colors", "Only button sizes"],
              answer: "Loading, success, and error states",
            },
            {
              question: "What does response.ok indicate?",
              options: ["Whether the HTTP response is in the successful range", "Whether the CSS loaded", "Whether React is installed", "Whether a component is visible"],
              answer: "Whether the HTTP response is in the successful range",
            },
          ],
        },
        {
          title: "Forms and Controlled Components",
          content: `Forms collect information from users, such as names, email addresses, search terms, and passwords.

In React, a controlled input gets its value from component state and updates that state through an event handler.

Example:

function NameForm() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}

Important form concepts:
- value controls the input value.
- onChange updates the state.
- onSubmit handles form submission.
- preventDefault() can prevent the browser's default form submission behavior.

Forms should include labels, suitable input types, validation, and clear error messages.

For larger applications, form libraries can help manage validation and complex form state.`,
          quiz: [
            {
              question: "What is a controlled component?",
              options: ["An input managed by React state", "A database table", "A CSS animation", "A server process"],
              answer: "An input managed by React state",
            },
            {
              question: "Which event handles input changes?",
              options: ["onChange", "onRoute", "onDeleteCSS", "onInstall"],
              answer: "onChange",
            },
            {
              question: "Which event handles form submission?",
              options: ["onSubmit", "onClickCSS", "onMap", "onStateOnly"],
              answer: "onSubmit",
            },
            {
              question: "Why use preventDefault() in a form handler?",
              options: ["To prevent the default browser submission behavior", "To delete form fields", "To install React", "To change the page title"],
              answer: "To prevent the default browser submission behavior",
            },
            {
              question: "What improves form accessibility?",
              options: ["Labels connected to inputs", "Removing all labels", "Using color alone", "Hiding error messages"],
              answer: "Labels connected to inputs",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: Routing, Optimization and Project",
      description:
        "Learn routing, reusable application structure, performance concepts, and build a complete React application.",
      lessons: [
        {
          title: "React Router and Navigation",
          content: `React Router is a popular library for handling navigation in React applications.

It allows users to move between pages without requiring a full browser page reload for every navigation.

Common concepts:
- BrowserRouter: provides routing context.
- Routes: groups route definitions.
- Route: maps a URL path to a component.
- Link: provides navigation between routes.
- useNavigate: navigates programmatically.

Example:

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

Install React Router with npm install react-router-dom.

For larger applications, organize routes into separate components and handle unknown routes with a not-found page.`,
          quiz: [
            {
              question: "What is React Router used for?",
              options: ["Navigation between application pages", "Managing database backups", "Writing CSS", "Installing Node.js"],
              answer: "Navigation between application pages",
            },
            {
              question: "Which component groups route definitions?",
              options: ["Routes", "Button", "Input", "Footer"],
              answer: "Routes",
            },
            {
              question: "Which component maps a path to an element?",
              options: ["Route", "Image", "Header", "Form"],
              answer: "Route",
            },
            {
              question: "Which component is used for navigation links?",
              options: ["Link", "Table", "Canvas", "Script"],
              answer: "Link",
            },
            {
              question: "Which command installs React Router?",
              options: ["npm install react-router-dom", "npm delete react-router", "npm start router", "npm create router"],
              answer: "npm install react-router-dom",
            },
          ],
        },
        {
          title: "Context API and useContext",
          content: `The Context API allows data to be shared across multiple components without passing props through every intermediate component.

This problem is commonly called prop drilling.

A context is created using createContext. A Provider makes its value available to child components, and useContext reads that value.

Example:

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}

Context is useful for shared values such as themes, language preferences, and authenticated user information.

Avoid putting every piece of application state into one context. Use it when multiple components genuinely need shared data.`,
          quiz: [
            {
              question: "What problem does Context API help reduce?",
              options: ["Prop drilling", "CSS compilation", "Database indexing", "HTML parsing"],
              answer: "Prop drilling",
            },
            {
              question: "Which function creates a context?",
              options: ["createContext", "createState", "makeRoute", "createCSS"],
              answer: "createContext",
            },
            {
              question: "Which Hook reads a context value?",
              options: ["useContext", "useEffect", "useStyle", "useRoute"],
              answer: "useContext",
            },
            {
              question: "What does a context Provider do?",
              options: ["Makes a value available to descendants", "Deletes child components", "Creates a database", "Installs dependencies"],
              answer: "Makes a value available to descendants",
            },
            {
              question: "Which is a suitable use for Context?",
              options: ["Sharing a theme preference", "Replacing all HTML", "Writing SQL queries", "Compiling CSS manually"],
              answer: "Sharing a theme preference",
            },
          ],
        },
        {
          title: "Performance and Code Optimization",
          content: `React applications should be designed to remain responsive as they grow.

Some useful optimization techniques include:
- React.memo: can skip re-rendering a component when its props have not changed.
- useMemo: caches the result of a calculation between renders.
- useCallback: caches a function definition between renders.
- Lazy loading: loads some code only when it is needed.
- Code splitting: divides application code into smaller bundles.

Example:

const value = useMemo(() => {
  return expensiveCalculation(items);
}, [items]);

Optimization should be based on actual performance needs. These tools add complexity and are not necessary for every component.

Other good practices include using stable list keys, avoiding unnecessary state, keeping components focused, and measuring performance before changing code.`,
          quiz: [
            {
              question: "What is React.memo used for?",
              options: ["Skipping some unnecessary component re-renders", "Creating database tables", "Changing routes", "Installing packages"],
              answer: "Skipping some unnecessary component re-renders",
            },
            {
              question: "Which Hook caches a calculated value?",
              options: ["useMemo", "useContext", "useEffect", "useState"],
              answer: "useMemo",
            },
            {
              question: "Which Hook caches a function definition?",
              options: ["useCallback", "useState", "useRefOnly", "useRoute"],
              answer: "useCallback",
            },
            {
              question: "What is lazy loading?",
              options: ["Loading code when it is needed", "Loading every file immediately", "Deleting unused CSS", "Stopping the application"],
              answer: "Loading code when it is needed",
            },
            {
              question: "When should optimization techniques be applied?",
              options: ["When there is a measured or expected performance need", "In every line of code", "Only before installing React", "Never"],
              answer: "When there is a measured or expected performance need",
            },
          ],
        },
        {
          title: "Final Project: Build a React Task Manager",
          content: `In this lesson, you will plan and build a simple Task Manager application using React.

Project objective:
Create an application where users can add, view, complete, and delete tasks.

Suggested components:
- App: main application component.
- Header: displays the application title.
- TaskForm: collects new task information.
- TaskList: displays all tasks.
- TaskItem: displays an individual task.

Required features:
1. Add a task using a controlled input.
2. Display tasks using map().
3. Give each task a stable unique ID.
4. Mark tasks as completed.
5. Delete tasks.
6. Display a message when there are no tasks.
7. Show the total number of tasks.

Technical concepts:
- JSX and components.
- Props and state.
- useState.
- Event handling.
- Conditional rendering.
- List rendering and keys.

Suggested improvements:
- Add task filters.
- Add form validation.
- Save tasks using localStorage.
- Improve the design with responsive CSS.

Test the application by adding multiple tasks, completing some tasks, deleting others, and checking how the interface responds.`,
          quiz: [
            {
              question: "Which Hook is suitable for storing a task list?",
              options: ["useState", "useCSS", "useRoute", "useHTML"],
              answer: "useState",
            },
            {
              question: "Which method can display multiple tasks?",
              options: ["map()", "alert()", "prompt()", "delete()"],
              answer: "map()",
            },
            {
              question: "What should each task have for reliable list rendering?",
              options: ["A stable unique key", "A random color only", "A CSS file", "A separate browser"],
              answer: "A stable unique key",
            },
            {
              question: "Which event can handle adding a task through a form?",
              options: ["onSubmit", "onStyle", "onInstall", "onRoute"],
              answer: "onSubmit",
            },
            {
              question: "Which feature can preserve tasks between browser sessions?",
              options: ["localStorage", "map()", "JSX", "className"],
              answer: "localStorage",
            },
          ],
        },
      ],
    },
  ],
};

export default reactCourse;

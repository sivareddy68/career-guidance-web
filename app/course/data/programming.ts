
const programmingAIMLCourse = {
  title: "Programming for AI/ML Engineer",
  description:
    "Master Python programming for artificial intelligence and machine learning, including data types, functions, object-oriented programming, data structures, NumPy, Pandas, file handling, APIs, and practical ML programming.",
  weeks: [
    {
      title: "Week 1: Python Programming Fundamentals",
      description:
        "Learn Python syntax, variables, data types, operators, conditions, loops, and functions.",
      lessons: [
        {
          title: "Introduction to Python for AI/ML",
          content: `Python is one of the most widely used programming languages in artificial intelligence and machine learning. Its simple syntax, large ecosystem, and extensive libraries make it suitable for data analysis, model development, automation, and scientific computing.

A Python program contains instructions that the interpreter executes. Developers can write Python code in files ending with .py or use interactive environments such as Jupyter Notebook.

Important Python characteristics include:
- High-level language with readable syntax.
- Dynamically typed variables.
- Support for procedural and object-oriented programming.
- Large library ecosystem.
- Cross-platform support.

AI/ML engineers commonly use Python with NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, and PyTorch.

Example:

print("Hello, AI World!")

The print() function displays information on the screen.

Python is generally interpreted, which makes it convenient for experimentation and rapid development. Learning programming fundamentals before using AI libraries helps developers understand how machine learning systems work internally.`,
          quiz: [
            {
              question: "Which programming language is widely used in AI/ML development?",
              options: ["Python", "HTML", "CSS", "XML"],
              answer: "Python",
            },
            {
              question: "Which file extension is commonly used for Python programs?",
              options: [".py", ".html", ".css", ".java"],
              answer: ".py",
            },
            {
              question: "What does print() do in Python?",
              options: [
                "Displays output",
                "Creates a database",
                "Deletes a variable",
                "Installs a library",
              ],
              answer: "Displays output",
            },
            {
              question: "Which environment is commonly used for interactive Python experiments?",
              options: [
                "Jupyter Notebook",
                "Microsoft Paint",
                "PowerPoint",
                "Windows Explorer",
              ],
              answer: "Jupyter Notebook",
            },
            {
              question: "Why is Python useful in AI/ML?",
              options: [
                "It has a large ecosystem of scientific libraries",
                "It only supports website styling",
                "It cannot process numerical data",
                "It does not support functions",
              ],
              answer: "It has a large ecosystem of scientific libraries",
            },
          ],
        },
        {
          title: "Variables and Data Types",
          content: `Variables store values that a program can use and modify.

Example:
name = "Siva"
age = 21
accuracy = 95.5
is_trained = True

Python determines the type of a variable from the value assigned to it.

Important built-in data types include:
- int: Whole numbers.
- float: Decimal numbers.
- str: Text.
- bool: True or False values.
- list: Ordered, changeable collection.
- tuple: Ordered, immutable collection.
- set: Collection of unique elements.
- dict: Key-value pairs.

The type() function identifies an object's type.

Example:
temperature = 28.5
print(type(temperature))

In AI/ML applications, numerical values can represent measurements, strings can represent categories, and Boolean values can represent conditions.

Choosing appropriate data types helps prevent programming errors and makes data processing easier.`,
          quiz: [
            {
              question: "Which data type stores whole numbers?",
              options: ["int", "str", "bool", "float"],
              answer: "int",
            },
            {
              question: "Which data type represents True or False?",
              options: ["bool", "list", "dict", "str"],
              answer: "bool",
            },
            {
              question: "Which Python type stores key-value pairs?",
              options: ["dict", "tuple", "set", "int"],
              answer: "dict",
            },
            {
              question: "Which function identifies an object's type?",
              options: ["type()", "print()", "input()", "range()"],
              answer: "type()",
            },
            {
              question: "Which collection does not allow item reassignment?",
              options: ["tuple", "list", "dict", "set"],
              answer: "tuple",
            },
          ],
        },
        {
          title: "Operators and Conditional Statements",
          content: `Operators perform calculations and comparisons in Python.

Arithmetic operators:
- + Addition
- - Subtraction
- * Multiplication
- / Division
- // Floor division
- % Modulus
- ** Exponentiation

Comparison operators compare values using ==, !=, >, <, >=, and <=.

Logical operators include and, or, and not.

Conditional statements allow programs to make decisions.

Example:
accuracy = 85

if accuracy >= 90:
    print("Excellent")
elif accuracy >= 75:
    print("Good")
else:
    print("Needs improvement")

Indentation defines code blocks in Python.

AI/ML programs use conditions to check model performance, validate input values, select processing methods, and handle errors.

Understanding conditions is important when building data pipelines and machine learning applications.`,
          quiz: [
            {
              question: "Which operator calculates the remainder?",
              options: ["%", "/", "**", "//"],
              answer: "%",
            },
            {
              question: "Which operator checks equality?",
              options: ["==", "=", "!=", ">"],
              answer: "==",
            },
            {
              question: "Which keyword begins a conditional statement?",
              options: ["if", "for", "def", "import"],
              answer: "if",
            },
            {
              question: "Which logical operator requires both conditions to be true?",
              options: ["and", "or", "not", "in"],
              answer: "and",
            },
            {
              question: "What does elif represent?",
              options: [
                "An additional conditional branch",
                "A function declaration",
                "A loop termination",
                "A library import",
              ],
              answer: "An additional conditional branch",
            },
          ],
        },
        {
          title: "Loops and Functions",
          content: `Loops repeat instructions without requiring developers to write the same code repeatedly.

Python provides two common loops:
- for loop: Iterates over a sequence or iterable.
- while loop: Repeats while a condition remains true.

Example:
for number in range(5):
    print(number)

Functions organize reusable instructions into named blocks.

Example:
def calculate_average(a, b):
    return (a + b) / 2

result = calculate_average(80, 90)

Functions can accept parameters and return results.

Important concepts:
- Parameters receive input values.
- Arguments are values passed to functions.
- return sends a result back to the caller.
- Local variables exist within their function scope.

AI/ML engineers use loops to process datasets and functions to organize preprocessing, feature extraction, model evaluation, and repeated calculations.

Breaking large programs into smaller functions makes code easier to test, debug, and maintain.`,
          quiz: [
            {
              question: "Which loop iterates over a sequence?",
              options: ["for", "if", "try", "class"],
              answer: "for",
            },
            {
              question: "Which loop repeats while a condition is true?",
              options: ["while", "import", "return", "break"],
              answer: "while",
            },
            {
              question: "Which keyword defines a function?",
              options: ["def", "class", "loop", "print"],
              answer: "def",
            },
            {
              question: "What does return do?",
              options: [
                "Sends a result back to the caller",
                "Starts a new loop",
                "Imports a library",
                "Deletes the function",
              ],
              answer: "Sends a result back to the caller",
            },
            {
              question: "What is a major benefit of functions?",
              options: [
                "Code reusability",
                "Automatic hardware replacement",
                "Guaranteed model accuracy",
                "Automatic internet access",
              ],
              answer: "Code reusability",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Data Structures and Python Programming",
      description:
        "Work with collections, comprehensions, error handling, file operations, and object-oriented programming.",
      lessons: [
        {
          title: "Lists, Tuples, Sets and Dictionaries",
          content: `Python provides built-in data structures for organizing information.

Lists are ordered and mutable. They support operations such as append(), remove(), pop(), and sort().

Example:
scores = [80, 90, 75]
scores.append(95)

Tuples are ordered and immutable. They are useful for representing fixed collections.

Sets store unique values and support union, intersection, and difference operations.

Dictionaries store key-value pairs.

Example:
student = {
    "name": "Siva",
    "score": 90
}

print(student["score"])

AI/ML engineers use lists to store predictions, dictionaries to represent records and configuration, and sets to identify unique categories.

Choosing the correct data structure improves code readability and processing efficiency.`,
          quiz: [
            {
              question: "Which collection is mutable and ordered?",
              options: ["list", "tuple", "str", "frozenset"],
              answer: "list",
            },
            {
              question: "Which collection stores unique elements?",
              options: ["set", "list", "tuple", "str"],
              answer: "set",
            },
            {
              question: "Which method adds an item to a list?",
              options: ["append()", "keys()", "split()", "upper()"],
              answer: "append()",
            },
            {
              question: "How does a dictionary organize data?",
              options: [
                "Key-value pairs",
                "Only sequential characters",
                "Only unique numbers",
                "Unrelated memory addresses",
              ],
              answer: "Key-value pairs",
            },
            {
              question: "Which collection is immutable?",
              options: ["tuple", "list", "dict", "set"],
              answer: "tuple",
            },
          ],
        },
        {
          title: "List Comprehensions and Advanced Iteration",
          content: `List comprehensions provide a concise way to create lists from existing iterables.

Example:
numbers = [1, 2, 3, 4, 5]
squares = [n * n for n in numbers]

A conditional comprehension can filter values:

even_numbers = [n for n in numbers if n % 2 == 0]

Python also supports generator expressions, which produce values lazily instead of creating an entire list immediately.

The enumerate() function provides both index and value during iteration.

The zip() function combines corresponding elements from multiple iterables.

Example:
names = ["A", "B"]
marks = [80, 90]

for name, mark in zip(names, marks):
    print(name, mark)

These techniques are useful when transforming datasets, matching features with labels, filtering records, and preparing machine learning inputs.

For large datasets, generators can help reduce memory usage.`,
          quiz: [
            {
              question: "What is a list comprehension used for?",
              options: [
                "Creating lists concisely",
                "Creating database servers",
                "Installing Python",
                "Encrypting network traffic",
              ],
              answer: "Creating lists concisely",
            },
            {
              question: "What does enumerate() provide?",
              options: [
                "Index and value",
                "Only database records",
                "Only file names",
                "Only random numbers",
              ],
              answer: "Index and value",
            },
            {
              question: "What does zip() do?",
              options: [
                "Combines corresponding iterable elements",
                "Deletes duplicate files",
                "Compresses Python source code",
                "Creates a new class",
              ],
              answer: "Combines corresponding iterable elements",
            },
            {
              question: "What is a benefit of generators?",
              options: [
                "Values can be produced lazily",
                "They always store every value in memory",
                "They automatically train models",
                "They replace all data types",
              ],
              answer: "Values can be produced lazily",
            },
            {
              question: "Which expression selects even numbers?",
              options: [
                "n % 2 == 0",
                "n / 2 == 1",
                "n + 2 == 0",
                "n * 2 == 1",
              ],
              answer: "n % 2 == 0",
            },
          ],
        },
        {
          title: "Object-Oriented Programming",
          content: `Object-Oriented Programming (OOP) organizes programs around classes and objects.

A class defines the structure and behavior of objects. An object is an instance of a class.

Example:
class Model:
    def __init__(self, name):
        self.name = name

    def predict(self):
        return "Prediction generated"

model = Model("Classifier")
print(model.predict())

Important OOP concepts include:
- Encapsulation: Organizing data and related methods together.
- Inheritance: Creating a class based on another class.
- Polymorphism: Supporting different implementations through a common interface.
- Abstraction: Hiding implementation details behind a clear interface.

In AI/ML projects, classes can represent datasets, preprocessing components, model configurations, and evaluation tools.

OOP is particularly useful when applications become larger and require reusable components.`,
          quiz: [
            {
              question: "What defines the structure of objects?",
              options: ["Class", "Loop", "Variable", "Comment"],
              answer: "Class",
            },
            {
              question: "What is an object?",
              options: [
                "An instance of a class",
                "A Python comment",
                "A database connection only",
                "A programming operator",
              ],
              answer: "An instance of a class",
            },
            {
              question: "Which method commonly initializes an object?",
              options: ["__init__", "__main__", "__strt__", "__loop__"],
              answer: "__init__",
            },
            {
              question: "What does inheritance allow?",
              options: [
                "A class to derive from another class",
                "A variable to delete a file",
                "A loop to create a database",
                "A function to install Python",
              ],
              answer: "A class to derive from another class",
            },
            {
              question: "What does encapsulation organize?",
              options: [
                "Data and related methods",
                "Only network cables",
                "Only HTML elements",
                "Only operating system files",
              ],
              answer: "Data and related methods",
            },
          ],
        },
        {
          title: "Exception Handling and File Operations",
          content: `Programs often encounter errors such as missing files, invalid input, and unexpected data.

Python exception handling uses try, except, else, and finally.

Example:
try:
    value = int("25")
except ValueError:
    print("Invalid number")

The with statement helps manage resources such as files.

Example:
with open("data.txt", "r") as file:
    content = file.read()

Common file modes include:
- r: Read.
- w: Write and replace existing content.
- a: Append.
- b: Binary mode.

Python supports formats such as CSV and JSON for storing structured information.

AI/ML applications frequently load datasets, save configuration, read experiment results, and export predictions.

Always handle missing files, malformed records, and invalid input carefully. Avoid silently ignoring important errors.`,
          quiz: [
            {
              question: "Which block handles exceptions?",
              options: ["except", "class", "import", "for"],
              answer: "except",
            },
            {
              question: "What does finally do?",
              options: [
                "Runs cleanup code after try/except processing",
                "Creates a new module",
                "Starts a database",
                "Defines a class",
              ],
              answer: "Runs cleanup code after try/except processing",
            },
            {
              question: "Which file mode reads an existing file?",
              options: ["r", "w", "a", "x"],
              answer: "r",
            },
            {
              question: "Which format is commonly used for structured key-value data?",
              options: ["JSON", "PNG", "MP3", "CSS"],
              answer: "JSON",
            },
            {
              question: "What is the purpose of the with statement when opening files?",
              options: [
                "Manage resources and close files automatically",
                "Train a neural network",
                "Delete every file",
                "Create a Python class",
              ],
              answer: "Manage resources and close files automatically",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: Python Libraries for Data and Machine Learning",
      description:
        "Learn NumPy, Pandas, data visualization, data preprocessing, and numerical computing.",
      lessons: [
        {
          title: "NumPy and Numerical Computing",
          content: `NumPy is a Python library designed for efficient numerical computing.

Its main structure is the ndarray, a multidimensional array that stores elements of a compatible data type.

Example:
import numpy as np

values = np.array([10, 20, 30])
print(values.mean())

Important NumPy operations include:
- Creating arrays with array(), zeros(), ones(), and arange().
- Checking dimensions using ndim.
- Checking shape using shape.
- Reshaping arrays using reshape().
- Performing vectorized arithmetic.
- Calculating statistics such as mean(), median(), and std().

Vectorization performs operations on arrays without writing explicit Python loops for each element.

NumPy is used in machine learning to represent numerical features, labels, matrices, and mathematical operations.

Understanding array dimensions and shapes is important because machine learning models expect inputs in specific formats.`,
          quiz: [
            {
              question: "What is NumPy mainly used for?",
              options: [
                "Numerical computing",
                "Website styling",
                "Video editing",
                "Email management",
              ],
              answer: "Numerical computing",
            },
            {
              question: "Which structure is central to NumPy?",
              options: ["ndarray", "HTMLDocument", "CSSGrid", "FilePath"],
              answer: "ndarray",
            },
            {
              question: "Which function creates a NumPy array?",
              options: ["np.array()", "np.page()", "np.style()", "np.browser()"],
              answer: "np.array()",
            },
            {
              question: "What does shape describe?",
              options: [
                "Array dimensions and their sizes",
                "The color of an array",
                "The file extension",
                "The operating system",
              ],
              answer: "Array dimensions and their sizes",
            },
            {
              question: "What is vectorization?",
              options: [
                "Performing operations on whole arrays efficiently",
                "Drawing only vector images",
                "Converting Python into HTML",
                "Installing a database",
              ],
              answer: "Performing operations on whole arrays efficiently",
            },
          ],
        },
        {
          title: "Pandas and DataFrame Operations",
          content: `Pandas is a Python library for data manipulation and analysis.

Its main structures are:
- Series: One-dimensional labeled data.
- DataFrame: Two-dimensional tabular data with rows and columns.

Example:
import pandas as pd

data = {
    "name": ["A", "B", "C"],
    "score": [80, 90, 85]
}

df = pd.DataFrame(data)

Common operations include:
- read_csv() to load CSV files.
- head() to inspect initial records.
- info() to inspect column types and missing values.
- describe() to summarize numerical columns.
- loc and iloc to select data.
- groupby() to aggregate records.
- dropna() and fillna() to handle missing values.

Pandas is useful for cleaning datasets, filtering records, calculating statistics, and preparing features before model training.

Always inspect data quality before using a dataset for machine learning.`,
          quiz: [
            {
              question: "Which library is commonly used for tabular data analysis?",
              options: ["Pandas", "Turtle", "Pygame", "Tkinter"],
              answer: "Pandas",
            },
            {
              question: "What does a DataFrame represent?",
              options: [
                "Two-dimensional labeled data",
                "Only a single number",
                "An image format",
                "A network protocol",
              ],
              answer: "Two-dimensional labeled data",
            },
            {
              question: "Which function reads a CSV file?",
              options: ["read_csv()", "read_html_style()", "open_image()", "make_table()"],
              answer: "read_csv()",
            },
            {
              question: "What does groupby() help perform?",
              options: [
                "Grouping and aggregation",
                "Password encryption",
                "Website deployment",
                "Image rendering",
              ],
              answer: "Grouping and aggregation",
            },
            {
              question: "Which method displays initial DataFrame rows?",
              options: ["head()", "drop()", "append()", "sort_index_only()"],
              answer: "head()",
            },
          ],
        },
        {
          title: "Data Cleaning and Preprocessing",
          content: `Data preprocessing converts raw information into a suitable format for analysis and machine learning.

Real-world datasets may contain:
- Missing values.
- Duplicate records.
- Incorrect data types.
- Inconsistent category names.
- Outliers.
- Incorrect or noisy values.

Common preprocessing operations include:
1. Inspecting data quality.
2. Removing or correcting duplicates.
3. Handling missing values.
4. Converting data types.
5. Encoding categorical variables.
6. Scaling numerical features.

Normalization and standardization are common feature scaling techniques.

Data leakage happens when information unavailable at prediction time influences model training or evaluation.

To prevent leakage, split the dataset appropriately and fit preprocessing transformations using training data only. Apply the learned transformations to validation and test data.

Careful preprocessing improves data consistency and makes model evaluation more reliable.`,
          quiz: [
            {
              question: "What is data preprocessing?",
              options: [
                "Preparing raw data for analysis or modeling",
                "Designing website logos",
                "Installing an operating system",
                "Creating network cables",
              ],
              answer: "Preparing raw data for analysis or modeling",
            },
            {
              question: "What does dropna() help handle?",
              options: [
                "Missing values",
                "Website animations",
                "Network addresses",
                "Python imports",
              ],
              answer: "Missing values",
            },
            {
              question: "What is feature scaling used for?",
              options: [
                "Adjusting numerical feature scales",
                "Changing column names only",
                "Deleting every row",
                "Creating passwords",
              ],
              answer: "Adjusting numerical feature scales",
            },
            {
              question: "What is data leakage?",
              options: [
                "Using information that should not be available during model training or evaluation",
                "Losing internet connectivity",
                "Deleting a CSV file",
                "Changing a DataFrame index",
              ],
              answer:
                "Using information that should not be available during model training or evaluation",
            },
            {
              question: "How should preprocessing transformations be fitted to avoid leakage?",
              options: [
                "Fit on training data and apply to other splits",
                "Fit on the test set first",
                "Fit separately using future test labels",
                "Skip the dataset split",
              ],
              answer: "Fit on training data and apply to other splits",
            },
          ],
        },
        {
          title: "Data Visualization with Matplotlib",
          content: `Data visualization helps developers understand patterns, relationships, distributions, and unusual values in datasets.

Matplotlib is a popular Python plotting library.

Example:
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 15, 30]

plt.plot(x, y)
plt.xlabel("Input")
plt.ylabel("Output")
plt.title("Sample Data")
plt.show()

Common chart types include:
- Line charts for trends.
- Bar charts for category comparisons.
- Histograms for numerical distributions.
- Scatter plots for relationships between variables.
- Box plots for distributions and potential outliers.

Seaborn provides a higher-level interface for statistical visualizations.

In AI/ML, visualizations help explore datasets, compare features, examine class distributions, and understand model performance.

Always select a chart that accurately represents the data.`,
          quiz: [
            {
              question: "Which library is commonly used for Python plotting?",
              options: ["Matplotlib", "Requests", "Flask", "SQLite"],
              answer: "Matplotlib",
            },
            {
              question: "Which chart is suitable for showing trends over time?",
              options: ["Line chart", "Pie chart only", "Network diagram", "Code editor"],
              answer: "Line chart",
            },
            {
              question: "What does a histogram display?",
              options: [
                "A numerical data distribution",
                "Only website links",
                "A database connection",
                "A Python class hierarchy",
              ],
              answer: "A numerical data distribution",
            },
            {
              question: "Which chart helps examine relationships between two numerical variables?",
              options: ["Scatter plot", "Navigation menu", "HTML table only", "Text paragraph"],
              answer: "Scatter plot",
            },
            {
              question: "Which command displays a Matplotlib figure?",
              options: [
                "plt.show()",
                "plt.read_csv()",
                "plt.train()",
                "plt.connect()",
              ],
              answer: "plt.show()",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: Advanced Python and AI/ML Programming",
      description:
        "Learn APIs, virtual environments, testing, model integration, and build a practical machine learning programming project.",
      lessons: [
        {
          title: "Modules, Packages and Virtual Environments",
          content: `Python modules help organize reusable code. A module is commonly a Python file containing functions, classes, or variables.

Packages organize related modules into directories.

The import statement makes functionality from modules available.

Example:
import math
print(math.sqrt(25))

Third-party packages can be installed using pip.

Example:
pip install numpy pandas scikit-learn

Virtual environments isolate project dependencies so that different projects can use different package versions.

Example:
python -m venv .venv

Activate the environment before installing project packages.

A requirements.txt file records project dependencies and can be used to install them in another environment.

For AI/ML projects, dependency management is important because frameworks and libraries may require compatible versions of Python and other packages.`,
          quiz: [
            {
              question: "What is a Python module?",
              options: [
                "A file containing reusable Python code",
                "A monitor driver",
                "An image format",
                "A network cable",
              ],
              answer: "A file containing reusable Python code",
            },
            {
              question: "Which command installs Python packages?",
              options: ["pip install", "git commit", "npm build", "mkdir install"],
              answer: "pip install",
            },
            {
              question: "What is the purpose of a virtual environment?",
              options: [
                "Isolate project dependencies",
                "Increase monitor brightness",
                "Replace the Python interpreter",
                "Automatically create datasets",
              ],
              answer: "Isolate project dependencies",
            },
            {
              question: "Which file commonly lists Python dependencies?",
              options: [
                "requirements.txt",
                "index.html",
                "style.css",
                "robots.png",
              ],
              answer: "requirements.txt",
            },
            {
              question: "Which keyword imports a module?",
              options: ["import", "return", "break", "yield"],
              answer: "import",
            },
          ],
        },
        {
          title: "APIs and JSON for AI Applications",
          content: `An Application Programming Interface (API) allows software systems to communicate.

AI applications often use APIs to send input data to a model service and receive predictions or generated results.

HTTP methods commonly include:
- GET: Retrieve information.
- POST: Submit information or request processing.
- PUT: Replace a resource.
- PATCH: Partially update a resource.
- DELETE: Remove a resource.

JSON is a common format for exchanging structured information.

Python's requests library can send HTTP requests.

Example:
import requests

response = requests.get(
    "https://api.example.com/items",
    timeout=10
)

if response.status_code == 200:
    data = response.json()

Important API concepts include status codes, request headers, authentication, timeouts, error handling, and rate limits.

Never expose private API keys in frontend code or public repositories. Store secrets securely and send requests through an appropriate backend service.`,
          quiz: [
            {
              question: "What does API stand for?",
              options: [
                "Application Programming Interface",
                "Automated Python Installation",
                "Advanced Program Internet",
                "Application Processing Input",
              ],
              answer: "Application Programming Interface",
            },
            {
              question: "Which HTTP method commonly retrieves information?",
              options: ["GET", "DELETE", "PATCH", "CONNECT"],
              answer: "GET",
            },
            {
              question: "Which Python library can send HTTP requests?",
              options: ["requests", "turtle", "random", "statistics"],
              answer: "requests",
            },
            {
              question: "What does response.json() do?",
              options: [
                "Parses a JSON response",
                "Deletes an API endpoint",
                "Installs a database",
                "Starts a Python loop",
              ],
              answer: "Parses a JSON response",
            },
            {
              question: "Where should private API keys be stored?",
              options: [
                "Secure server-side configuration",
                "Public frontend source code",
                "Public HTML comments",
                "A public Git repository",
              ],
              answer: "Secure server-side configuration",
            },
          ],
        },
        {
          title: "Testing, Debugging and Code Quality",
          content: `Testing checks whether a program behaves as expected. Debugging identifies and fixes errors.

Common error categories include:
- Syntax errors: Code does not follow Python syntax.
- Runtime errors: Problems occur while the program executes.
- Logical errors: The program runs but produces incorrect results.

Python provides tools such as assert for simple checks and unittest or pytest for structured testing.

Example:
def add(a, b):
    return a + b

assert add(2, 3) == 5

A debugger allows developers to pause execution, inspect variables, and follow program flow.

Logging records useful information about program execution. Python's logging module supports different levels such as DEBUG, INFO, WARNING, ERROR, and CRITICAL.

AI/ML applications should test preprocessing, data validation, model input shapes, prediction output, and error handling.

Readable code, meaningful names, documentation, and automated tests improve maintainability.`,
          quiz: [
            {
              question: "What is debugging?",
              options: [
                "Finding and fixing program errors",
                "Creating a new operating system",
                "Compressing images",
                "Installing a browser",
              ],
              answer: "Finding and fixing program errors",
            },
            {
              question: "What is a logical error?",
              options: [
                "A program runs but produces an incorrect result",
                "A computer has no keyboard",
                "A file has no extension",
                "A Python package is installed",
              ],
              answer: "A program runs but produces an incorrect result",
            },
            {
              question: "Which keyword can perform a simple condition check?",
              options: ["assert", "import", "class", "while"],
              answer: "assert",
            },
            {
              question: "Which Python module supports application logging?",
              options: ["logging", "turtle", "calendar", "html"],
              answer: "logging",
            },
            {
              question: "What is the purpose of automated tests?",
              options: [
                "Check program behavior repeatedly",
                "Replace all source code",
                "Guarantee perfect model accuracy",
                "Disable error handling",
              ],
              answer: "Check program behavior repeatedly",
            },
          ],
        },
        {
          title: "Final Project: Machine Learning Data Analysis Application",
          content: `Build a Python application that loads a dataset, analyzes its contents, prepares features, and trains a basic machine learning model.

Project: Student Performance Prediction.

Tools:
- Python
- NumPy
- Pandas
- Matplotlib
- Scikit-learn
- Jupyter Notebook or VS Code

Project workflow:

1. Dataset loading:
Load a CSV dataset with student study hours, attendance, and performance values.

2. Data inspection:
Use Pandas to inspect columns, data types, missing values, and basic statistics.

3. Data preprocessing:
Handle missing records, validate data, and select suitable input features.

4. Data visualization:
Use Matplotlib to explore relationships between study hours and performance.

5. Dataset splitting:
Separate training and testing data using Scikit-learn.

6. Model training:
Train a simple regression model using training data.

7. Evaluation:
Calculate suitable evaluation metrics such as mean absolute error.

8. Prediction:
Use the trained model to predict performance for new sample inputs.

9. Code organization:
Create reusable functions for loading, cleaning, training, and prediction.

10. Documentation:
Explain the dataset, assumptions, model limitations, and evaluation results.

Use sample or public educational datasets and avoid entering real private student information.

The goal is to demonstrate practical Python programming and understand how programming libraries work together in an AI/ML workflow.`,
          quiz: [
            {
              question: "Which library is useful for loading CSV datasets?",
              options: ["Pandas", "Turtle", "Pygame", "Tkinter"],
              answer: "Pandas",
            },
            {
              question: "Which library provides common machine learning algorithms?",
              options: ["Scikit-learn", "Matplotlib", "Requests", "BeautifulSoup"],
              answer: "Scikit-learn",
            },
            {
              question: "Why split data into training and testing sets?",
              options: [
                "To evaluate performance on unseen data",
                "To make every record identical",
                "To remove all input features",
                "To avoid training a model",
              ],
              answer: "To evaluate performance on unseen data",
            },
            {
              question: "Which metric measures average absolute prediction error?",
              options: ["MAE", "Accuracy only", "File size", "Memory address"],
              answer: "MAE",
            },
            {
              question: "What is the purpose of project documentation?",
              options: [
                "Explain the workflow, assumptions, and results",
                "Store private passwords publicly",
                "Replace model evaluation",
                "Delete the source code",
              ],
              answer: "Explain the workflow, assumptions, and results",
            },
          ],
        },
      ],
    },
  ],
};

export default programmingAIMLCourse;

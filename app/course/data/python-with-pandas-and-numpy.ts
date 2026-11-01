
export const pythonWithPandasAndNumpyCourse = {
  title: "Python with Pandas and NumPy",
  description:
    "Learn Python data analysis using NumPy and Pandas. Work with arrays, DataFrames, data cleaning, filtering, aggregation, and practical datasets.",
  project:
    "Build a Student Performance Analysis project using Python, NumPy, and Pandas. Load student data, clean missing values, calculate statistics, filter records, and generate useful insights.",

  weeks: [
    {
      title: "Week 1: Python and NumPy Foundations",
      description:
        "Understand Python data handling and learn how NumPy arrays make numerical calculations easier and faster.",
      assignment:
        "Create a Python program that stores student marks in NumPy arrays and calculates basic statistics.",

      lessons: [
        {
          title: "Introduction to Python for Data Analysis",
          duration: "30 minutes",
          introduction:
            "Python is a popular programming language used in data analysis because it is readable and has powerful libraries. In this lesson, you will understand how Python supports data analysis and why NumPy and Pandas are important.",

          sections: [
            {
              heading: "What is Python?",
              content:
                "Python is a high-level programming language used for software development, automation, artificial intelligence, and data analysis. Its simple syntax makes it suitable for beginners. Python can work with numbers, text, lists, dictionaries, files, and large datasets."
            },
            {
              heading: "Why use Python for data analysis?",
              content:
                "Python provides libraries that simplify data-related work. NumPy supports numerical calculations, Pandas manages structured data, and Matplotlib helps create visualizations. These libraries reduce the amount of code required for common analysis tasks."
            },
            {
              heading: "Important Python data structures",
              content:
                "Lists store ordered collections of values. Tuples store ordered values that cannot be modified. Dictionaries store key-value pairs. These structures are useful when preparing data before using Pandas and NumPy."
            }
          ],

          example:
            "marks = [80, 90, 75, 85]\nprint(marks)\nprint(sum(marks))\nprint(len(marks))\n\naverage = sum(marks) / len(marks)\nprint('Average:', average)",

          exercise:
            "Create a Python list containing five student marks. Print the total marks, number of students, and average marks.",

          quiz: [
            {
              question: "What is Python?",
              options: [
                "A programming language",
                "A database",
                "An operating system",
                "A web browser"
              ],
              answer: "A programming language",
              explanation:
                "Python is a high-level programming language used for many applications, including data analysis."
            },
            {
              question: "Which Python structure stores ordered collections of values?",
              options: [
                "List",
                "Integer",
                "Boolean",
                "Float"
              ],
              answer: "List",
              explanation:
                "A list stores multiple values in an ordered collection."
            },
            {
              question: "Which function calculates the number of items in a list?",
              options: [
                "len()",
                "sum()",
                "max()",
                "type()"
              ],
              answer: "len()",
              explanation:
                "The len() function returns the number of elements in a collection."
            },
            {
              question: "Which library is commonly used for numerical computing?",
              options: [
                "NumPy",
                "Flask",
                "Django",
                "Requests"
              ],
              answer: "NumPy",
              explanation:
                "NumPy provides efficient arrays and numerical computing operations."
            },
            {
              question: "What does sum([10, 20, 30]) return?",
              options: [
                "60",
                "30",
                "10",
                "20"
              ],
              answer: "60",
              explanation:
                "The sum() function adds all the numbers in the list: 10 + 20 + 30 = 60."
            }
          ]
        },

        {
          title: "Introduction to NumPy",
          duration: "30 minutes",
          introduction:
            "NumPy stands for Numerical Python. It is a library designed for fast numerical operations. Its main feature is the ndarray, which stores elements in an array and supports efficient mathematical operations.",

          sections: [
            {
              heading: "What is NumPy?",
              content:
                "NumPy is a Python library used for numerical computing. It supports arrays, mathematical functions, statistics, matrix operations, and multidimensional data. It is widely used in scientific computing and machine learning."
            },
            {
              heading: "Installing and importing NumPy",
              content:
                "Install NumPy using pip install numpy. Import it into your Python program using import numpy as np. The alias np is a common convention used in Python projects."
            },
            {
              heading: "Creating NumPy arrays",
              content:
                "The np.array() function converts Python sequences into NumPy arrays. Arrays can contain one dimension, two dimensions, or multiple dimensions. NumPy arrays are designed for efficient numerical calculations."
            }
          ],

          example:
            "import numpy as np\n\nmarks = np.array([80, 90, 75, 85])\nprint(marks)\nprint(type(marks))\nprint(marks + 5)",

          exercise:
            "Import NumPy and create an array containing five numbers. Add 10 to every element and print the updated array.",

          quiz: [
            {
              question: "What is the full form of NumPy?",
              options: [
                "Numerical Python",
                "Number Program",
                "New Python",
                "Numeric Programming"
              ],
              answer: "Numerical Python",
              explanation:
                "NumPy is short for Numerical Python and is used for numerical computing."
            },
            {
              question: "Which function creates a NumPy array?",
              options: [
                "np.array()",
                "np.list()",
                "np.frame()",
                "np.table()"
              ],
              answer: "np.array()",
              explanation:
                "The np.array() function creates an array from a Python sequence."
            },
            {
              question: "What is the conventional NumPy alias?",
              options: [
                "np",
                "pd",
                "plt",
                "py"
              ],
              answer: "np",
              explanation:
                "NumPy is commonly imported using the alias np."
            },
            {
              question: "Which command installs NumPy using pip?",
              options: [
                "pip install numpy",
                "pip start numpy",
                "python add numpy",
                "pip create numpy"
              ],
              answer: "pip install numpy",
              explanation:
                "The pip install command installs Python packages."
            },
            {
              question: "What does a NumPy array store?",
              options: [
                "Elements in an array structure",
                "Only website links",
                "Only Python functions",
                "Only database tables"
              ],
              answer: "Elements in an array structure",
              explanation:
                "NumPy arrays store elements in one or more dimensions."
            }
          ]
        },

        {
          title: "NumPy Array Properties and Dimensions",
          duration: "35 minutes",
          introduction:
            "NumPy arrays have useful properties that describe their structure. Understanding shape, size, dimensions, and data types helps you organize numerical data correctly.",

          sections: [
            {
              heading: "Array dimensions",
              content:
                "A one-dimensional array contains a sequence of values. A two-dimensional array contains rows and columns. Higher-dimensional arrays can represent more complex data structures."
            },
            {
              heading: "Shape and size",
              content:
                "The shape attribute returns the number of elements along each dimension. The size attribute returns the total number of elements in the array. The ndim attribute returns the number of dimensions."
            },
            {
              heading: "Data types",
              content:
                "The dtype attribute tells you the data type of array elements. Common NumPy types include integers, floating-point numbers, and Boolean values. Choosing appropriate data types can help manage memory."
            }
          ],

          example:
            "import numpy as np\n\narr = np.array([[10, 20, 30], [40, 50, 60]])\n\nprint(arr.shape)\nprint(arr.size)\nprint(arr.ndim)\nprint(arr.dtype)",

          exercise:
            "Create a 2D NumPy array with three rows and two columns. Print its shape, size, and number of dimensions.",

          quiz: [
            {
              question: "Which attribute returns the dimensions of a NumPy array?",
              options: [
                "ndim",
                "size",
                "dtype",
                "item"
              ],
              answer: "ndim",
              explanation:
                "The ndim attribute returns the number of dimensions in an array."
            },
            {
              question: "What does the shape attribute return?",
              options: [
                "Dimensions along each axis",
                "Only the total number of elements",
                "Only the data type",
                "The array values as text"
              ],
              answer: "Dimensions along each axis",
              explanation:
                "The shape attribute describes the size of the array along each dimension."
            },
            {
              question: "Which attribute returns the total number of elements?",
              options: [
                "size",
                "shape",
                "ndim",
                "dtype"
              ],
              answer: "size",
              explanation:
                "The size attribute returns the total number of elements in the array."
            },
            {
              question: "What does dtype represent?",
              options: [
                "Data type of array elements",
                "Number of array rows",
                "Array dimensions",
                "Array length only"
              ],
              answer: "Data type of array elements",
              explanation:
                "The dtype attribute identifies the type used for array elements."
            },
            {
              question: "A two-dimensional array contains which structure?",
              options: [
                "Rows and columns",
                "Only one value",
                "Only a single row",
                "Only text characters"
              ],
              answer: "Rows and columns",
              explanation:
                "A two-dimensional array organizes values into rows and columns."
            }
          ]
        },

        {
          title: "NumPy Array Operations",
          duration: "35 minutes",
          introduction:
            "NumPy makes it easy to perform calculations on entire arrays. Instead of writing loops for every element, you can use arithmetic operators and built-in functions.",

          sections: [
            {
              heading: "Arithmetic operations",
              content:
                "NumPy supports addition, subtraction, multiplication, division, and exponentiation. When compatible arrays are used, operations can be performed element by element."
            },
            {
              heading: "Aggregation functions",
              content:
                "Functions such as np.sum(), np.mean(), np.min(), and np.max() calculate useful summaries. They help analyze numerical data quickly."
            },
            {
              heading: "Indexing and slicing",
              content:
                "Indexing accesses an individual element. Slicing selects a range of elements. NumPy uses zero-based indexing, meaning the first element has index zero."
            }
          ],

          example:
            "import numpy as np\n\narr = np.array([10, 20, 30, 40])\n\nprint(arr + 5)\nprint(arr * 2)\nprint(np.mean(arr))\nprint(arr[0])\nprint(arr[1:3])",

          exercise:
            "Create a NumPy array of six numbers. Print its maximum, minimum, mean, and the first three elements.",

          quiz: [
            {
              question: "Which function calculates the average of a NumPy array?",
              options: [
                "np.mean()",
                "np.max()",
                "np.min()",
                "np.size()"
              ],
              answer: "np.mean()",
              explanation:
                "np.mean() calculates the arithmetic average of array elements."
            },
            {
              question: "What is the first index in a NumPy array?",
              options: [
                "0",
                "1",
                "-1",
                "2"
              ],
              answer: "0",
              explanation:
                "Python and NumPy use zero-based indexing."
            },
            {
              question: "Which function returns the largest value?",
              options: [
                "np.max()",
                "np.min()",
                "np.mean()",
                "np.sum()"
              ],
              answer: "np.max()",
              explanation:
                "np.max() returns the maximum value in an array."
            },
            {
              question: "What does arr[1:3] select?",
              options: [
                "Elements at indices 1 and 2",
                "Elements at indices 1, 2 and 3",
                "Only element at index 3",
                "The entire array"
              ],
              answer: "Elements at indices 1 and 2",
              explanation:
                "A slice includes the starting index and excludes the ending index."
            },
            {
              question: "Which function calculates the total of array elements?",
              options: [
                "np.sum()",
                "np.mean()",
                "np.min()",
                "np.shape()"
              ],
              answer: "np.sum()",
              explanation:
                "np.sum() adds all the elements in the array."
            }
          ]
        }
      ]
    },

    {
      title: "Week 2: Advanced NumPy Operations",
      description:
        "Learn array creation methods, indexing, filtering, reshaping, and mathematical operations.",
      assignment:
        "Analyze a collection of student marks using NumPy arrays, filtering, reshaping, and statistical functions.",

      lessons: [
        {
          title: "Creating and Initializing Arrays",
          duration: "30 minutes",
          introduction:
            "NumPy provides several functions for creating arrays without manually entering every value. These functions are useful when preparing data for calculations.",

          sections: [
            {
              heading: "Zeros and ones",
              content:
                "np.zeros() creates an array filled with zeros. np.ones() creates an array filled with ones. You can specify the shape of the resulting array."
            },
            {
              heading: "Range-based arrays",
              content:
                "np.arange() creates values within a specified interval. np.linspace() creates a specified number of evenly spaced values between a starting and ending point."
            },
            {
              heading: "Identity matrices",
              content:
                "np.eye() creates an identity matrix with ones along the main diagonal and zeros elsewhere. Identity matrices are useful in linear algebra."
            }
          ],

          example:
            "import numpy as np\n\nprint(np.zeros(4))\nprint(np.ones((2, 3)))\nprint(np.arange(1, 10, 2))\nprint(np.linspace(0, 1, 5))\nprint(np.eye(3))",

          exercise:
            "Create an array of five zeros, a 3x3 array of ones, and an array containing even numbers from 2 to 20.",

          quiz: [
            {
              question: "Which function creates an array filled with zeros?",
              options: [
                "np.zeros()",
                "np.ones()",
                "np.eye()",
                "np.max()"
              ],
              answer: "np.zeros()",
              explanation:
                "np.zeros() initializes an array with zero values."
            },
            {
              question: "Which function creates evenly spaced values with a specified count?",
              options: [
                "np.linspace()",
                "np.sum()",
                "np.reshape()",
                "np.min()"
              ],
              answer: "np.linspace()",
              explanation:
                "np.linspace() generates a specified number of evenly spaced values."
            },
            {
              question: "What does np.eye(3) create?",
              options: [
                "A 3x3 identity matrix",
                "A list of three strings",
                "A 3x3 matrix of ones",
                "A single zero"
              ],
              answer: "A 3x3 identity matrix",
              explanation:
                "np.eye(3) creates a square identity matrix with three rows and columns."
            },
            {
              question: "Which function generates values using a step interval?",
              options: [
                "np.arange()",
                "np.mean()",
                "np.dtype()",
                "np.unique()"
              ],
              answer: "np.arange()",
              explanation:
                "np.arange() generates values using a specified start, stop, and step."
            },
            {
              question: "Which function creates an array filled with ones?",
              options: [
                "np.ones()",
                "np.zeros()",
                "np.eye()",
                "np.empty_like()"
              ],
              answer: "np.ones()",
              explanation:
                "np.ones() creates an array whose elements are all one."
            }
          ]
        },

        {
          title: "Indexing, Slicing and Filtering",
          duration: "35 minutes",
          introduction:
            "Indexing and slicing help you select specific elements from arrays. Boolean filtering helps you select values that satisfy a condition.",

          sections: [
            {
              heading: "Array indexing",
              content:
                "Use square brackets to access an element by its index. In two-dimensional arrays, provide row and column indices to access an individual value."
            },
            {
              heading: "Array slicing",
              content:
                "Slicing selects part of an array using start and stop positions. You can also provide a step to skip elements."
            },
            {
              heading: "Boolean filtering",
              content:
                "Boolean conditions create True and False results for array elements. You can use these conditions to select only values that meet a requirement."
            }
          ],

          example:
            "import numpy as np\n\nmarks = np.array([45, 60, 75, 90, 35])\n\nprint(marks[0])\nprint(marks[1:4])\nprint(marks[marks >= 60])",

          exercise:
            "Create an array containing ten numbers. Select values greater than 50 and print the selected elements.",

          quiz: [
            {
              question: "How do you access the first element of an array named arr?",
              options: [
                "arr[0]",
                "arr[1]",
                "arr.first()",
                "arr[-0]"
              ],
              answer: "arr[0]",
              explanation:
                "The first element is stored at index zero."
            },
            {
              question: "What is Boolean filtering used for?",
              options: [
                "Selecting elements that satisfy conditions",
                "Changing every value into text",
                "Deleting the complete array",
                "Sorting only strings"
              ],
              answer: "Selecting elements that satisfy conditions",
              explanation:
                "Boolean filtering selects values based on True or False conditions."
            },
            {
              question: "What does arr[0:3] select?",
              options: [
                "The first three elements",
                "The first four elements",
                "Only the third element",
                "The last three elements"
              ],
              answer: "The first three elements",
              explanation:
                "The slice includes indices zero, one, and two, but excludes index three."
            },
            {
              question: "Which operator checks whether a value is greater than or equal to another?",
              options: [
                ">=",
                "<=",
                "!=",
                "=="
              ],
              answer: ">=",
              explanation:
                "The >= operator checks whether the left value is greater than or equal to the right value."
            },
            {
              question: "What does arr[arr > 10] return?",
              options: [
                "Values greater than 10",
                "Values less than 10",
                "Only values equal to 10",
                "The array dimensions"
              ],
              answer: "Values greater than 10",
              explanation:
                "The Boolean condition selects only elements greater than 10."
            }
          ]
        },

        {
          title: "Reshaping and Combining Arrays",
          duration: "35 minutes",
          introduction:
            "Reshaping changes the dimensions of an array without changing its underlying elements. Combining arrays helps organize data from multiple sources.",

          sections: [
            {
              heading: "Reshaping arrays",
              content:
                "The reshape() function changes an array's dimensions. The new shape must contain the same total number of elements as the original array."
            },
            {
              heading: "Flattening arrays",
              content:
                "The flatten() method returns a one-dimensional copy of an array. The ravel() function also creates a one-dimensional view when possible."
            },
            {
              heading: "Combining arrays",
              content:
                "np.concatenate() joins arrays along an existing axis. np.vstack() combines arrays vertically, while np.hstack() combines them horizontally."
            }
          ],

          example:
            "import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6])\n\nmatrix = arr.reshape(2, 3)\nprint(matrix)\nprint(matrix.flatten())\n\nfirst = np.array([1, 2])\nsecond = np.array([3, 4])\nprint(np.concatenate((first, second)))",

          exercise:
            "Create an array containing twelve numbers. Reshape it into three rows and four columns, then flatten it again.",

          quiz: [
            {
              question: "Which function changes the shape of a NumPy array?",
              options: [
                "reshape()",
                "replace()",
                "remove()",
                "append_text()"
              ],
              answer: "reshape()",
              explanation:
                "reshape() changes the dimensions of an array while preserving its elements."
            },
            {
              question: "How many elements are required to reshape an array into 2x3?",
              options: [
                "6",
                "5",
                "8",
                "9"
              ],
              answer: "6",
              explanation:
                "A 2x3 array contains 2 multiplied by 3, which equals 6 elements."
            },
            {
              question: "Which method converts a multidimensional array into a one-dimensional copy?",
              options: [
                "flatten()",
                "reshape()",
                "transpose()",
                "sort()"
              ],
              answer: "flatten()",
              explanation:
                "flatten() returns a one-dimensional copy of the array."
            },
            {
              question: "Which function joins arrays along an existing axis?",
              options: [
                "np.concatenate()",
                "np.mean()",
                "np.zeros()",
                "np.unique()"
              ],
              answer: "np.concatenate()",
              explanation:
                "np.concatenate() joins arrays along a specified existing axis."
            },
            {
              question: "Which function combines arrays vertically?",
              options: [
                "np.vstack()",
                "np.hstack()",
                "np.min()",
                "np.linspace()"
              ],
              answer: "np.vstack()",
              explanation:
                "np.vstack() stacks arrays vertically."
            }
          ]
        },

        {
          title: "NumPy Statistical Functions",
          duration: "35 minutes",
          introduction:
            "NumPy includes functions for calculating statistics. These functions help summarize datasets and understand numerical patterns.",

          sections: [
            {
              heading: "Central tendency",
              content:
                "np.mean() calculates the average, np.median() calculates the middle value after sorting, and np.average() calculates a weighted or ordinary average depending on the arguments."
            },
            {
              heading: "Measures of spread",
              content:
                "np.var() calculates variance, while np.std() calculates standard deviation. These functions describe how spread out numerical values are."
            },
            {
              heading: "Other useful functions",
              content:
                "np.percentile() calculates a percentile, np.min() finds the smallest value, and np.max() finds the largest value. These functions are useful for exploring datasets."
            }
          ],

          example:
            "import numpy as np\n\nmarks = np.array([60, 70, 80, 90, 100])\n\nprint(np.mean(marks))\nprint(np.median(marks))\nprint(np.std(marks))\nprint(np.var(marks))\nprint(np.percentile(marks, 75))",

          exercise:
            "Create an array of student marks and calculate its mean, median, variance, standard deviation, and 75th percentile.",

          quiz: [
            {
              question: "Which NumPy function calculates the median?",
              options: [
                "np.median()",
                "np.mean()",
                "np.var()",
                "np.sum()"
              ],
              answer: "np.median()",
              explanation:
                "np.median() calculates the middle value after ordering the data."
            },
            {
              question: "Which function calculates variance?",
              options: [
                "np.var()",
                "np.std()",
                "np.max()",
                "np.min()"
              ],
              answer: "np.var()",
              explanation:
                "np.var() calculates the variance of numerical values."
            },
            {
              question: "What does standard deviation describe?",
              options: [
                "Spread of values around the mean",
                "Number of rows",
                "Number of columns",
                "Total number of values"
              ],
              answer: "Spread of values around the mean",
              explanation:
                "Standard deviation measures how spread out values are around the mean."
            },
            {
              question: "Which function calculates a percentile?",
              options: [
                "np.percentile()",
                "np.concatenate()",
                "np.reshape()",
                "np.zeros()"
              ],
              answer: "np.percentile()",
              explanation:
                "np.percentile() calculates the value at a specified percentile."
            },
            {
              question: "Which function returns the smallest array value?",
              options: [
                "np.min()",
                "np.max()",
                "np.mean()",
                "np.std()"
              ],
              answer: "np.min()",
              explanation:
                "np.min() returns the minimum value."
            }
          ]
        }
      ]
    },

    {
      title: "Week 3: Pandas Fundamentals",
      description:
        "Learn how to load, inspect, select, filter, and manipulate structured datasets using Pandas.",
      assignment:
        "Load a student dataset into Pandas, inspect its structure, select columns, filter records, and calculate summary statistics.",

      lessons: [
        {
          title: "Introduction to Pandas",
          duration: "30 minutes",
          introduction:
            "Pandas is a Python library used to work with structured data. It provides Series and DataFrame objects that make it easier to organize, inspect, and analyze datasets.",

          sections: [
            {
              heading: "What is Pandas?",
              content:
                "Pandas is a data analysis library built on top of NumPy. It provides tools for loading, cleaning, transforming, and analyzing structured information such as CSV and Excel files."
            },
            {
              heading: "Series",
              content:
                "A Series is a one-dimensional labeled data structure. It can store values such as marks, names, or dates along with an index."
            },
            {
              heading: "DataFrame",
              content:
                "A DataFrame is a two-dimensional table containing rows and columns. It is commonly used to represent datasets with multiple features."
            }
          ],

          example:
            "import pandas as pd\n\nmarks = pd.Series([80, 90, 75, 85])\nprint(marks)\n\ndata = {\n    'Name': ['Asha', 'Ravi', 'Kiran'],\n    'Marks': [80, 90, 75]\n}\n\ndf = pd.DataFrame(data)\nprint(df)",

          exercise:
            "Import Pandas. Create a Series containing five numbers and a DataFrame containing student names and marks.",

          quiz: [
            {
              question: "What is Pandas mainly used for?",
              options: [
                "Data analysis and manipulation",
                "Operating system management",
                "Web page styling",
                "Game graphics only"
              ],
              answer: "Data analysis and manipulation",
              explanation:
                "Pandas provides tools for working with and analyzing structured data."
            },
            {
              question: "Which alias is commonly used when importing Pandas?",
              options: [
                "pd",
                "np",
                "plt",
                "os"
              ],
              answer: "pd",
              explanation:
                "Pandas is conventionally imported using the alias pd."
            },
            {
              question: "What is a Pandas Series?",
              options: [
                "A one-dimensional labeled data structure",
                "A two-dimensional table only",
                "A database server",
                "A Python package installer"
              ],
              answer: "A one-dimensional labeled data structure",
              explanation:
                "A Series stores one-dimensional data with an associated index."
            },
            {
              question: "What is a DataFrame?",
              options: [
                "A two-dimensional labeled data structure",
                "A single numerical value",
                "A Python loop",
                "A text editor"
              ],
              answer: "A two-dimensional labeled data structure",
              explanation:
                "A DataFrame organizes data into rows and columns."
            },
            {
              question: "Which function creates a Pandas DataFrame?",
              options: [
                "pd.DataFrame()",
                "pd.Array()",
                "pd.Matrix()",
                "pd.TableCreate()"
              ],
              answer: "pd.DataFrame()",
              explanation:
                "pd.DataFrame() creates a DataFrame from supported data structures."
            }
          ]
        },

        {
          title: "Loading and Saving Datasets",
          duration: "35 minutes",
          introduction:
            "Real-world analysis often begins by loading data from files. Pandas provides functions to read and write CSV and Excel files.",

          sections: [
            {
              heading: "Reading CSV files",
              content:
                "pd.read_csv() loads data from a CSV file into a DataFrame. CSV files store tabular information using comma-separated values."
            },
            {
              heading: "Reading Excel files",
              content:
                "pd.read_excel() loads data from an Excel workbook. Reading Excel files may require an additional engine such as openpyxl."
            },
            {
              heading: "Saving datasets",
              content:
                "to_csv() saves a DataFrame to a CSV file. to_excel() saves data to an Excel workbook. The index=False argument prevents Pandas from saving the DataFrame index as an extra column."
            }
          ],

          example:
            "import pandas as pd\n\ndf = pd.read_csv('students.csv')\nprint(df.head())\n\ndf.to_csv('students_output.csv', index=False)",

          exercise:
            "Load a CSV file containing student information. Display the first five rows and save the DataFrame to a new CSV file.",

          quiz: [
            {
              question: "Which function reads a CSV file?",
              options: [
                "pd.read_csv()",
                "pd.write_csv()",
                "pd.open_csv()",
                "pd.load_excel()"
              ],
              answer: "pd.read_csv()",
              explanation:
                "pd.read_csv() loads comma-separated data into a DataFrame."
            },
            {
              question: "Which function reads an Excel file?",
              options: [
                "pd.read_excel()",
                "pd.read_csv()",
                "pd.read_json()",
                "pd.open_table()"
              ],
              answer: "pd.read_excel()",
              explanation:
                "pd.read_excel() reads data from Excel workbooks."
            },
            {
              question: "Which method saves a DataFrame as a CSV file?",
              options: [
                "to_csv()",
                "read_csv()",
                "head()",
                "describe()"
              ],
              answer: "to_csv()",
              explanation:
                "The to_csv() method exports a DataFrame to a CSV file."
            },
            {
              question: "What does index=False do when saving a CSV?",
              options: [
                "Prevents saving the index column",
                "Deletes all DataFrame columns",
                "Sorts the dataset",
                "Removes missing values"
              ],
              answer: "Prevents saving the index column",
              explanation:
                "index=False prevents the DataFrame index from being written into the output file."
            },
            {
              question: "What does pd.read_csv() return?",
              options: [
                "A DataFrame",
                "A web page",
                "A Python module",
                "An operating system process"
              ],
              answer: "A DataFrame",
              explanation:
                "Pandas normally loads CSV tabular data into a DataFrame."
            }
          ]
        },

        {
          title: "Inspecting and Understanding Data",
          duration: "35 minutes",
          introduction:
            "Before analyzing a dataset, you should understand its size, column names, data types, and basic statistics. Pandas provides simple commands for inspecting this information.",

          sections: [
            {
              heading: "Viewing rows",
              content:
                "head() displays the first rows of a DataFrame. tail() displays the last rows. You can pass a number to specify how many rows to display."
            },
            {
              heading: "Dataset information",
              content:
                "info() displays column names, non-null counts, and data types. shape returns the number of rows and columns. columns returns the column labels."
            },
            {
              heading: "Descriptive statistics",
              content:
                "describe() generates summary statistics for numerical columns, including count, mean, standard deviation, minimum, quartiles, and maximum."
            }
          ],

          example:
            "import pandas as pd\n\ndf = pd.read_csv('students.csv')\n\nprint(df.head())\nprint(df.tail())\nprint(df.shape)\nprint(df.info())\nprint(df.describe())",

          exercise:
            "Load a dataset and use head(), tail(), info(), shape, columns, and describe() to understand its structure.",

          quiz: [
            {
              question: "Which method displays the first five rows by default?",
              options: [
                "head()",
                "tail()",
                "describe()",
                "info()"
              ],
              answer: "head()",
              explanation:
                "head() displays the first five rows by default."
            },
            {
              question: "Which method displays the last rows?",
              options: [
                "tail()",
                "head()",
                "info()",
                "count()"
              ],
              answer: "tail()",
              explanation:
                "tail() displays the last five rows by default."
            },
            {
              question: "What does df.shape return?",
              options: [
                "Number of rows and columns",
                "Only column names",
                "Only missing values",
                "Only numerical averages"
              ],
              answer: "Number of rows and columns",
              explanation:
                "shape returns a tuple containing the row count and column count."
            },
            {
              question: "Which method displays column data types and non-null counts?",
              options: [
                "info()",
                "head()",
                "sort_values()",
                "to_csv()"
              ],
              answer: "info()",
              explanation:
                "info() summarizes DataFrame structure, data types, and non-null counts."
            },
            {
              question: "Which method provides descriptive statistics?",
              options: [
                "describe()",
                "rename()",
                "drop()",
                "merge()"
              ],
              answer: "describe()",
              explanation:
                "describe() generates descriptive statistics for selected columns."
            }
          ]
        },

        {
          title: "Selecting, Filtering and Sorting Data",
          duration: "35 minutes",
          introduction:
            "Pandas makes it easy to select specific columns, filter rows based on conditions, and sort datasets. These operations are essential for finding useful information.",

          sections: [
            {
              heading: "Selecting columns",
              content:
                "Use df['column_name'] to select one column. Use df[['column1', 'column2']] to select multiple columns."
            },
            {
              heading: "Filtering rows",
              content:
                "Boolean conditions can filter rows. For example, df[df['Marks'] > 70] returns records where Marks is greater than 70. Multiple conditions can be combined using & and | with parentheses."
            },
            {
              heading: "Sorting values",
              content:
                "sort_values() sorts rows according to one or more columns. The ascending argument controls the sorting order."
            }
          ],

          example:
            "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Asha', 'Ravi', 'Kiran'],\n    'Marks': [80, 65, 95]\n})\n\nprint(df['Name'])\nprint(df[df['Marks'] > 70])\nprint(df.sort_values('Marks', ascending=False))",

          exercise:
            "Create a DataFrame with student names, departments, and marks. Select the names, filter students with marks greater than 75, and sort by marks in descending order.",

          quiz: [
            {
              question: "How do you select one column named Marks?",
              options: [
                "df['Marks']",
                "df(Marks)",
                "df.select.Marks",
                "df{Marks}"
              ],
              answer: "df['Marks']",
              explanation:
                "Square-bracket notation with the column name selects a single column."
            },
            {
              question: "Which method sorts a DataFrame by column values?",
              options: [
                "sort_values()",
                "head()",
                "describe()",
                "isnull()"
              ],
              answer: "sort_values()",
              explanation:
                "sort_values() sorts DataFrame rows based on selected column values."
            },
            {
              question: "What does ascending=False mean?",
              options: [
                "Sort in descending order",
                "Sort in ascending order",
                "Remove all rows",
                "Keep only text values"
              ],
              answer: "Sort in descending order",
              explanation:
                "ascending=False sorts values from larger to smaller."
            },
            {
              question: "Which operator combines two conditions where both must be True?",
              options: [
                "&",
                "|",
                "%",
                "//"
              ],
              answer: "&",
              explanation:
                "The & operator performs element-wise logical AND in Pandas conditions."
            },
            {
              question: "What does df[df['Marks'] > 70] return?",
              options: [
                "Rows with marks greater than 70",
                "Rows with marks below 70",
                "Only the Marks column name",
                "The number of DataFrame columns"
              ],
              answer: "Rows with marks greater than 70",
              explanation:
                "The Boolean condition selects rows whose Marks value exceeds 70."
            }
          ]
        }
      ]
    },

    {
      title: "Week 4: Data Cleaning and Practical Analysis",
      description:
        "Learn how to handle missing values, remove duplicates, group data, create new columns, and complete a practical analysis project.",
      assignment:
        "Complete a student performance analysis using Pandas and NumPy. Clean the data, calculate statistics, group students by department, and present useful findings.",

      lessons: [
        {
          title: "Handling Missing Values",
          duration: "35 minutes",
          introduction:
            "Real-world datasets often contain missing values. These missing entries can affect calculations and analysis. Pandas provides tools to identify and handle them.",

          sections: [
            {
              heading: "Identifying missing values",
              content:
                "isnull() and isna() identify missing values. They return True for missing entries and False for available entries. sum() can be used with these methods to count missing values in each column."
            },
            {
              heading: "Removing missing values",
              content:
                "dropna() removes rows or columns containing missing values. The axis and how arguments control what gets removed."
            },
            {
              heading: "Filling missing values",
              content:
                "fillna() replaces missing values with a selected value. You may fill numerical columns using a mean or median, depending on the data and analysis requirements."
            }
          ],

          example:
            "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Asha', 'Ravi', 'Kiran'],\n    'Marks': [80, None, 90]\n})\n\nprint(df.isnull().sum())\ndf['Marks'] = df['Marks'].fillna(df['Marks'].mean())\nprint(df)",

          exercise:
            "Create a DataFrame containing missing marks. Identify missing values and fill them using the column mean.",

          quiz: [
            {
              question: "Which method identifies missing values?",
              options: [
                "isnull()",
                "sort_values()",
                "to_csv()",
                "head()"
              ],
              answer: "isnull()",
              explanation:
                "isnull() returns True for missing entries."
            },
            {
              question: "Which method removes rows containing missing values by default?",
              options: [
                "dropna()",
                "fillna()",
                "replace()",
                "rename()"
              ],
              answer: "dropna()",
              explanation:
                "dropna() removes rows containing missing values by default."
            },
            {
              question: "Which method replaces missing values?",
              options: [
                "fillna()",
                "dropna()",
                "describe()",
                "groupby()"
              ],
              answer: "fillna()",
              explanation:
                "fillna() replaces missing entries with specified values."
            },
            {
              question: "What does df.isnull().sum() help calculate?",
              options: [
                "Missing values per column",
                "Maximum values per column",
                "Total number of rows only",
                "Average of all columns"
              ],
              answer: "Missing values per column",
              explanation:
                "isnull() identifies missing entries and sum() counts them by column."
            },
            {
              question: "Which statistic may be used to fill missing numerical values?",
              options: [
                "Mean",
                "Column name",
                "Index label",
                "File extension"
              ],
              answer: "Mean",
              explanation:
                "The mean is one possible replacement for missing numerical values when appropriate."
            }
          ]
        },

        {
          title: "Removing Duplicates and Data Transformation",
          duration: "35 minutes",
          introduction:
            "Duplicate records and inconsistent values can reduce data quality. Pandas provides methods to identify duplicates, remove repeated records, and transform columns.",

          sections: [
            {
              heading: "Identifying duplicates",
              content:
                "duplicated() identifies repeated rows or repeated values according to selected columns. It returns Boolean results that can be used to inspect duplicate records."
            },
            {
              heading: "Removing duplicates",
              content:
                "drop_duplicates() removes duplicate rows. You can select specific columns to decide which records should be treated as duplicates."
            },
            {
              heading: "Transforming columns",
              content:
                "You can create new columns using calculations, rename existing columns using rename(), and replace values using replace(). These operations help make data more consistent and useful."
            }
          ],

          example:
            "import pandas as pd\n\ndf = pd.DataFrame({\n    'Name': ['Asha', 'Ravi', 'Asha'],\n    'Marks': [80, 90, 80]\n})\n\nprint(df.duplicated())\ndf = df.drop_duplicates()\ndf['Bonus_Marks'] = df['Marks'] + 5\nprint(df)",

          exercise:
            "Create a DataFrame with repeated student records. Identify and remove duplicates, then create a new column containing marks increased by five.",

          quiz: [
            {
              question: "Which method identifies duplicate rows?",
              options: [
                "duplicated()",
                "fillna()",
                "describe()",
                "head()"
              ],
              answer: "duplicated()",
              explanation:
                "duplicated() identifies records that repeat earlier entries."
            },
            {
              question: "Which method removes duplicate rows?",
              options: [
                "drop_duplicates()",
                "dropna()",
                "isnull()",
                "sort_values()"
              ],
              answer: "drop_duplicates()",
              explanation:
                "drop_duplicates() removes repeated rows from a DataFrame."
            },
            {
              question: "Which method renames DataFrame columns?",
              options: [
                "rename()",
                "groupby()",
                "mean()",
                "tail()"
              ],
              answer: "rename()",
              explanation:
                "rename() changes selected row or column labels."
            },
            {
              question: "How can you create a new column named Bonus?",
              options: [
                "df['Bonus'] = df['Marks'] + 5",
                "df.Bonus.remove()",
                "df.delete('Bonus')",
                "df.read('Bonus')"
              ],
              answer: "df['Bonus'] = df['Marks'] + 5",
              explanation:
                "Assigning a calculated Series to a new column creates that column."
            },
            {
              question: "Why is duplicate removal useful?",
              options: [
                "To prevent repeated records from affecting analysis",
                "To increase the number of columns",
                "To convert every value into text",
                "To automatically create charts"
              ],
              answer: "To prevent repeated records from affecting analysis",
              explanation:
                "Repeated records can distort counts and summary calculations."
            }
          ]
        },

        {
          title: "Grouping and Aggregating Data",
          duration: "35 minutes",
          introduction:
            "Grouping helps analyze categories separately. You can group students by department, calculate average marks, and compare results between groups.",

          sections: [
            {
              heading: "Understanding groupby()",
              content:
                "groupby() divides a DataFrame into groups based on one or more columns. Each group can then be analyzed separately."
            },
            {
              heading: "Aggregation functions",
              content:
                "Aggregation functions summarize each group. Common examples include mean(), sum(), count(), min(), and max()."
            },
            {
              heading: "Multiple aggregations",
              content:
                "agg() applies multiple aggregation functions to selected columns. This helps generate several useful statistics in one operation."
            }
          ],

          example:
            "import pandas as pd\n\ndf = pd.DataFrame({\n    'Department': ['ECE', 'CSE', 'ECE', 'CSE'],\n    'Marks': [80, 90, 70, 85]\n})\n\nprint(df.groupby('Department')['Marks'].mean())\nprint(df.groupby('Department')['Marks'].agg(['mean', 'max', 'min']))",

          exercise:
            "Create a DataFrame containing student names, departments, and marks. Calculate the average and maximum marks for each department.",

          quiz: [
            {
              question: "Which method groups rows based on column values?",
              options: [
                "groupby()",
                "fillna()",
                "head()",
                "to_csv()"
              ],
              answer: "groupby()",
              explanation:
                "groupby() creates groups based on one or more selected columns."
            },
            {
              question: "Which function calculates the average within each group?",
              options: [
                "mean()",
                "max()",
                "min()",
                "count()"
              ],
              answer: "mean()",
              explanation:
                "mean() calculates the average of numerical values in each group."
            },
            {
              question: "What does count() calculate in grouped data?",
              options: [
                "Number of non-missing entries",
                "Average of values",
                "Largest numerical value",
                "Smallest numerical value"
              ],
              answer: "Number of non-missing entries",
              explanation:
                "count() counts non-missing values in each group."
            },
            {
              question: "Which method applies multiple aggregation functions?",
              options: [
                "agg()",
                "head()",
                "tail()",
                "dropna()"
              ],
              answer: "agg()",
              explanation:
                "agg() applies one or more aggregation functions to selected data."
            },
            {
              question: "What is one benefit of grouping by department?",
              options: [
                "Comparing statistics between departments",
                "Removing every numerical column",
                "Changing the file format automatically",
                "Deleting all department names"
              ],
              answer: "Comparing statistics between departments",
              explanation:
                "Grouping allows separate summaries for each department."
            }
          ]
        },

        {
          title: "Mini Project: Student Performance Analysis",
          duration: "45 minutes",
          introduction:
            "In this final lesson, you will combine NumPy and Pandas to analyze student performance. You will load data, inspect it, clean missing values, calculate statistics, group students, and identify useful insights.",

          sections: [
            {
              heading: "Step 1: Prepare the dataset",
              content:
                "Create a CSV file named students.csv with columns such as Name, Department, Attendance, and Marks. Include several student records so that the analysis has enough data."
            },
            {
              heading: "Step 2: Load and clean data",
              content:
                "Use pd.read_csv() to load the file. Inspect the dataset with head(), info(), and isnull().sum(). Handle missing values and remove duplicate records when appropriate."
            },
            {
              heading: "Step 3: Analyze performance",
              content:
                "Calculate average marks, highest marks, lowest marks, and standard deviation. Use filtering to find students who scored above a selected threshold."
            },
            {
              heading: "Step 4: Group and report findings",
              content:
                "Use groupby() to calculate average marks by department. Save the cleaned data and analysis results into CSV files. Write a short summary of the patterns you discovered."
            }
          ],

          example:
            "import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('students.csv')\n\nprint('First rows:')\nprint(df.head())\n\nprint('Missing values:')\nprint(df.isnull().sum())\n\ndf = df.drop_duplicates()\ndf['Marks'] = df['Marks'].fillna(df['Marks'].mean())\n\nmarks = df['Marks'].to_numpy()\n\nprint('Average:', np.mean(marks))\nprint('Highest:', np.max(marks))\nprint('Lowest:', np.min(marks))\nprint('Standard deviation:', np.std(marks))\n\nprint('Department averages:')\nprint(df.groupby('Department')['Marks'].mean())\n\nprint('Students above 75:')\nprint(df[df['Marks'] > 75])\n\ndf.to_csv('cleaned_students.csv', index=False)",

          exercise:
            "Complete the Student Performance Analysis project. Load a student CSV file, clean missing and duplicate records, calculate statistics using NumPy, group students by department using Pandas, filter students scoring above 75, and save the cleaned dataset.",

          quiz: [
            {
              question: "Which function loads the student CSV dataset?",
              options: [
                "pd.read_csv()",
                "np.array()",
                "pd.to_csv()",
                "np.mean()"
              ],
              answer: "pd.read_csv()",
              explanation:
                "pd.read_csv() loads the student records from a CSV file."
            },
            {
              question: "Which NumPy function calculates the average marks?",
              options: [
                "np.mean()",
                "np.max()",
                "np.min()",
                "np.size()"
              ],
              answer: "np.mean()",
              explanation:
                "np.mean() calculates the average of the marks array."
            },
            {
              question: "Which Pandas method calculates average marks by department?",
              options: [
                "groupby() with mean()",
                "dropna() with head()",
                "rename() with tail()",
                "fillna() with sort_values()"
              ],
              answer: "groupby() with mean()",
              explanation:
                "groupby() separates departments and mean() calculates the average for each group."
            },
            {
              question: "Which condition selects students scoring above 75?",
              options: [
                "df[df['Marks'] > 75]",
                "df[df['Marks'] < 75]",
                "df[df['Marks'] == 75]",
                "df['Marks'].head(75)"
              ],
              answer: "df[df['Marks'] > 75]",
              explanation:
                "The greater-than condition selects rows where Marks exceeds 75."
            },
            {
              question: "Which method saves the cleaned dataset as a CSV file?",
              options: [
                "to_csv()",
                "read_csv()",
                "describe()",
                "groupby()"
              ],
              answer: "to_csv()",
              explanation:
                "to_csv() exports the cleaned DataFrame to a CSV file."
            }
          ]
        }
      ]
    }
  ]
};

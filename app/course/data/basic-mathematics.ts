export const basicMathematicsCourse = {
  id: "basic-mathematics",
  title: "Basic Mathematics",
  description:
    "Learn the essential mathematics required for programming, data analysis, artificial intelligence and machine learning.",
  duration: "8 Weeks",
  level: "Beginner",

  weeks: [
    {
      week: 1,
      title: "Numbers and Mathematical Foundations",

      lessons: [
        {
          id: "bm-w1-l1",
          title: "Types of Numbers",
          content: `
Numbers are the foundation of mathematics.

Important types of numbers include:

Natural numbers:
1, 2, 3, 4, 5...

Whole numbers:
0, 1, 2, 3, 4...

Integers:
..., -3, -2, -1, 0, 1, 2, 3...

Rational numbers can be written as fractions.

Irrational numbers cannot be represented exactly as a simple fraction.

Real numbers include both rational and irrational numbers.
          `,
          example: "The number 5 is a natural number, while -5 is an integer."
        },

        {
          id: "bm-w1-l2",
          title: "Fractions and Decimals",
          content: `
A fraction represents a part of a whole.

Example:
3/4

The numerator is 3.
The denominator is 4.

Decimals are another way to represent numbers.

3/4 = 0.75

Fractions and decimals are frequently used in percentages,
probability and data analysis.
          `,
          example: "0.25 is equal to 25/100, which simplifies to 1/4."
        },

        {
          id: "bm-w1-l3",
          title: "Percentages",
          content: `
A percentage represents a value out of 100.

Formula:

Percentage = (Part / Total) × 100

Example:

If 20 students out of 25 passed:

(20 / 25) × 100 = 80%

Percentages are useful in statistics and data analysis.
          `,
          example: "If a student scores 45 out of 50, the percentage is 90%."
        },

        {
          id: "bm-w1-l4",
          title: "Ratios and Proportions",
          content: `
A ratio compares two quantities.

Example:

2 : 3

This means that for every 2 units of one quantity,
there are 3 units of another.

A proportion states that two ratios are equal.

Ratios are useful when comparing datasets, measurements
and quantities.
          `,
          example: "A ratio of 2:3 can represent 20 students compared with 30 students."
        },

        {
          id: "bm-w1-l5",
          title: "Order of Operations",
          content: `
Mathematical expressions follow an order of operations.

A common order is:

1. Parentheses
2. Exponents
3. Multiplication and division
4. Addition and subtraction

Example:

2 + 3 × 4

Multiplication is performed first:

2 + 12 = 14
          `,
          example: "Always evaluate multiplication before addition when parentheses are not present."
        }
      ],

      quiz: [
        {
          question: "Which number is a whole number?",
          options: ["-2", "0", "1/2", "√2"],
          answer: "0"
        },
        {
          question: "What is 3/4 as a decimal?",
          options: ["0.25", "0.5", "0.75", "1.25"],
          answer: "0.75"
        },
        {
          question: "What is 25% as a decimal?",
          options: ["0.025", "0.25", "2.5", "25"],
          answer: "0.25"
        },
        {
          question: "What is 50% of 200?",
          options: ["25", "50", "100", "150"],
          answer: "100"
        },
        {
          question: "What does a ratio compare?",
          options: [
            "Two quantities",
            "Only numbers greater than 100",
            "Only percentages",
            "Only decimals"
          ],
          answer: "Two quantities"
        },
        {
          question: "Which operation is normally performed first?",
          options: [
            "Addition",
            "Subtraction",
            "Parentheses",
            "Division"
          ],
          answer: "Parentheses"
        },
        {
          question: "Which is an integer?",
          options: ["2.5", "-3", "1/2", "√2"],
          answer: "-3"
        },
        {
          question: "What is 20 out of 25 as a percentage?",
          options: ["60%", "70%", "80%", "90%"],
          answer: "80%"
        },
        {
          question: "What is 2 + 3 × 4?",
          options: ["20", "14", "24", "9"],
          answer: "14"
        },
        {
          question: "Which is an irrational number?",
          options: ["2", "1/2", "√2", "0.5"],
          answer: "√2"
        }
      ],

      assignment:
        "Solve 10 problems involving fractions, decimals, percentages, ratios and order of operations."
    },

    {
      week: 2,
      title: "Algebra Fundamentals",

      lessons: [
        {
          id: "bm-w2-l1",
          title: "Variables and Constants",
          content: `
A variable represents an unknown or changing value.

Common variables:
x, y, z

A constant has a fixed value.

Example:

x + 5

Here x is a variable and 5 is a constant.

Variables are very important in programming and machine learning.
          `,
          example: "If x = 10, then x + 5 = 15."
        },

        {
          id: "bm-w2-l2",
          title: "Algebraic Expressions",
          content: `
An algebraic expression combines numbers, variables and mathematical
operations.

Examples:

x + 5
2x + 3
x² + 2x + 1

Expressions can be simplified by combining similar terms.
          `,
          example: "2x + 3x = 5x."
        },

        {
          id: "bm-w2-l3",
          title: "Linear Equations",
          content: `
A linear equation contains variables raised only to the first power.

Example:

x + 5 = 12

Subtract 5 from both sides:

x = 7

The goal is to find the value of the unknown variable.
          `,
          example: "For 2x = 10, divide both sides by 2 to get x = 5."
        },

        {
          id: "bm-w2-l4",
          title: "Exponents and Powers",
          content: `
An exponent tells how many times a number is multiplied by itself.

Example:

2³ = 2 × 2 × 2 = 8

Important rules include:

a² × a³ = a⁵

(a²)³ = a⁶

Exponents appear frequently in scientific and computational formulas.
          `,
          example: "10² = 100."
        },

        {
          id: "bm-w2-l5",
          title: "Square Roots",
          content: `
A square root of a number is a value that produces the number when
multiplied by itself.

Example:

√25 = 5

because:

5 × 5 = 25

Square roots are useful in distance calculations, statistics
and many mathematical algorithms.
          `,
          example: "√49 = 7."
        }
      ],

      quiz: [
        {
          question: "What is a variable?",
          options: [
            "A value that can change",
            "Always a fixed value",
            "Only a percentage",
            "Only a fraction"
          ],
          answer: "A value that can change"
        },
        {
          question: "What is 2x + 3x?",
          options: ["5x", "6x", "5", "x"],
          answer: "5x"
        },
        {
          question: "If x + 5 = 12, what is x?",
          options: ["5", "6", "7", "8"],
          answer: "7"
        },
        {
          question: "What is 2³?",
          options: ["6", "8", "9", "12"],
          answer: "8"
        },
        {
          question: "What is √25?",
          options: ["3", "4", "5", "6"],
          answer: "5"
        },
        {
          question: "What is 10²?",
          options: ["20", "50", "100", "1000"],
          answer: "100"
        },
        {
          question: "Which is an algebraic expression?",
          options: ["2x + 5", "Hello", "Monday", "Python"],
          answer: "2x + 5"
        },
        {
          question: "If 2x = 10, what is x?",
          options: ["2", "4", "5", "10"],
          answer: "5"
        },
        {
          question: "What is 3²?",
          options: ["6", "9", "12", "3"],
          answer: "9"
        },
        {
          question: "Which is a constant?",
          options: ["x", "y", "5", "z"],
          answer: "5"
        }
      ],

      assignment:
        "Solve 10 algebra problems involving variables, equations, powers and square roots."
    },

    {
      week: 3,
      title: "Functions and Graphs",

      lessons: [
        {
          id: "bm-w3-l1",
          title: "What is a Function?",
          content: `
A function describes a relationship between input and output.

It can be written as:

f(x) = 2x + 1

For every input x, the function produces an output.
          `,
          example: "If x = 3, then f(3) = 2(3) + 1 = 7."
        },

        {
          id: "bm-w3-l2",
          title: "Coordinates",
          content: `
A coordinate system represents points using ordered pairs.

A point is written as:

(x, y)

The x-coordinate represents horizontal position.

The y-coordinate represents vertical position.
          `,
          example: "The point (3, 5) means x = 3 and y = 5."
        },

        {
          id: "bm-w3-l3",
          title: "Linear Functions",
          content: `
A linear function can be written as:

y = mx + c

where:

m = slope
c = y-intercept

The graph of a linear function is a straight line.
          `,
          example: "For y = 2x + 1, the slope is 2 and the y-intercept is 1."
        },

        {
          id: "bm-w3-l4",
          title: "Slope",
          content: `
Slope measures how quickly y changes compared with x.

Formula:

m = (y₂ - y₁) / (x₂ - x₁)

A positive slope means y generally increases as x increases.

A negative slope means y generally decreases as x increases.
          `,
          example: "For points (1,2) and (3,6), slope = (6-2)/(3-1) = 2."
        },

        {
          id: "bm-w3-l5",
          title: "Reading Graphs",
          content: `
Graphs help us understand relationships between variables.

When reading a graph, look at:
- Axes
- Scale
- Labels
- Trends
- Increasing or decreasing behavior
- Outliers

Graphs are heavily used in data science and machine learning.
          `,
          example: "A graph showing temperature over time can reveal whether temperature is increasing or decreasing."
        }
      ],

      quiz: [
        {
          question: "What does a function describe?",
          options: [
            "A relationship between input and output",
            "Only a number",
            "Only a graph",
            "Only a variable"
          ],
          answer: "A relationship between input and output"
        },
        {
          question: "How is a coordinate written?",
          options: ["x+y", "(x,y)", "x/y", "x-y"],
          answer: "(x,y)"
        },
        {
          question: "What is the slope in y = 3x + 2?",
          options: ["2", "3", "5", "1"],
          answer: "3"
        },
        {
          question: "What is the y-intercept in y = 3x + 2?",
          options: ["1", "2", "3", "5"],
          answer: "2"
        },
        {
          question: "What does a positive slope generally mean?",
          options: [
            "y increases as x increases",
            "y always decreases",
            "x never changes",
            "Both are zero"
          ],
          answer: "y increases as x increases"
        },
        {
          question: "What is the slope formula?",
          options: [
            "(y₂-y₁)/(x₂-x₁)",
            "x+y",
            "xy",
            "x/y only"
          ],
          answer: "(y₂-y₁)/(x₂-x₁)"
        },
        {
          question: "What type of graph does a linear function produce?",
          options: ["Straight line", "Circle", "Triangle", "Random shape"],
          answer: "Straight line"
        },
        {
          question: "What does the x-axis normally represent?",
          options: [
            "Horizontal variable",
            "Vertical variable",
            "Only output",
            "Only slope"
          ],
          answer: "Horizontal variable"
        },
        {
          question: "What does the y-axis normally represent?",
          options: [
            "Vertical variable",
            "Only input",
            "Only slope",
            "Only time"
          ],
          answer: "Vertical variable"
        },
        {
          question: "Why are graphs useful in data science?",
          options: [
            "They help visualize relationships",
            "They replace all calculations",
            "They store passwords",
            "They compile code"
          ],
          answer: "They help visualize relationships"
        }
      ],

      assignment:
        "Create a table of x and y values for y = 2x + 3 and draw or describe its graph."
    },

    {
      week: 4,
      title: "Statistics Fundamentals",

      lessons: [
        {
          id: "bm-w4-l1",
          title: "Introduction to Statistics",
          content: `
Statistics is the study of collecting, organizing, analyzing and
interpreting data.

Statistics is important in:
- Data analysis
- Machine learning
- Business
- Research
- Engineering

A dataset is a collection of observations or values.
          `,
          example: "Student marks such as 70, 75, 80 and 90 form a simple dataset."
        },

        {
          id: "bm-w4-l2",
          title: "Mean",
          content: `
The mean is commonly called the average.

Formula:

Mean = Sum of values / Number of values

Example:

10, 20, 30

Mean = 60 / 3 = 20
          `,
          example: "The average of 5, 10 and 15 is 10."
        },

        {
          id: "bm-w4-l3",
          title: "Median and Mode",
          content: `
Median is the middle value after sorting the data.

Mode is the most frequently occurring value.

Example:

2, 3, 3, 5, 7

Median = 3
Mode = 3
          `,
          example: "For 1, 2, 4, 4, 6, the mode is 4."
        },

        {
          id: "bm-w4-l4",
          title: "Range and Variability",
          content: `
Range is:

Maximum value - Minimum value

It provides a simple measure of how spread out the data is.

Other measures of variability include:
- Variance
- Standard deviation
          `,
          example: "For 10, 20 and 30, the range is 30 - 10 = 20."
        },

        {
          id: "bm-w4-l5",
          title: "Data Distribution",
          content: `
A distribution describes how values are spread across a dataset.

A dataset may have:
- Central concentration
- High or low variability
- Skewness
- Outliers

Understanding distributions is important before applying statistical
or machine learning methods.
          `,
          example: "Exam marks may cluster around a particular score while a few students may have very high or low scores."
        }
      ],

      quiz: [
        {
          question: "What is the mean?",
          options: [
            "Average of values",
            "Largest value",
            "Smallest value",
            "Most frequent value only"
          ],
          answer: "Average of values"
        },
        {
          question: "What is the mean of 10, 20 and 30?",
          options: ["10", "20", "30", "60"],
          answer: "20"
        },
        {
          question: "What is the median of 2, 3, 5?",
          options: ["2", "3", "5", "10"],
          answer: "3"
        },
        {
          question: "What is the mode?",
          options: [
            "Most frequently occurring value",
            "Average",
            "Largest value",
            "Smallest value"
          ],
          answer: "Most frequently occurring value"
        },
        {
          question: "What is the range of 10, 20 and 30?",
          options: ["10", "20", "30", "40"],
          answer: "20"
        },
        {
          question: "What does statistics study?",
          options: [
            "Data",
            "Only programming",
            "Only hardware",
            "Only networking"
          ],
          answer: "Data"
        },
        {
          question: "What does variability describe?",
          options: [
            "How spread out data is",
            "Only the average",
            "Only the maximum",
            "Only the minimum"
          ],
          answer: "How spread out data is"
        },
        {
          question: "Which is a measure of central tendency?",
          options: ["Mean", "Range", "Variance", "Standard deviation"],
          answer: "Mean"
        },
        {
          question: "What is an outlier?",
          options: [
            "A value that is unusually different",
            "The average",
            "The minimum",
            "The mode"
          ],
          answer: "A value that is unusually different"
        },
        {
          question: "Why is statistics useful in machine learning?",
          options: [
            "It helps understand and analyze data",
            "It replaces programming",
            "It creates hardware",
            "It replaces networks"
          ],
          answer: "It helps understand and analyze data"
        }
      ],

      assignment:
        "Calculate mean, median, mode and range for a dataset of at least 10 numbers."
    },

    {
      week: 5,
      title: "Probability",

      lessons: [
        {
          id: "bm-w5-l1",
          title: "Introduction to Probability",
          content: `
Probability measures how likely an event is to happen.

Probability ranges from 0 to 1.

0 means impossible.

1 means certain.

It can also be represented as a percentage from 0% to 100%.
          `,
          example: "A probability of 0.5 means a 50% chance."
        },

        {
          id: "bm-w5-l2",
          title: "Basic Probability Formula",
          content: `
For equally likely outcomes:

Probability = Favorable outcomes / Total outcomes

Example:

A fair die has 6 sides.

Probability of rolling a 3:

1 / 6
          `,
          example: "The probability of getting heads when tossing a fair coin is 1/2."
        },

        {
          id: "bm-w5-l3",
          title: "Independent Events",
          content: `
Two events are independent when the outcome of one does not affect the
other.

For independent events:

P(A and B) = P(A) × P(B)
          `,
          example: "Two separate coin tosses are commonly treated as independent events."
        },

        {
          id: "bm-w5-l4",
          title: "Conditional Probability",
          content: `
Conditional probability describes the probability of an event given
that another event has occurred.

It is written as:

P(A | B)

This concept is important in statistics and machine learning.
          `,
          example: "The probability that a customer buys a product given that they visited a particular page can be viewed as conditional probability."
        },

        {
          id: "bm-w5-l5",
          title: "Probability in Machine Learning",
          content: `
Probability is used in many machine learning methods.

Examples include:
- Classification
- Prediction
- Bayesian methods
- Risk estimation
- Uncertainty measurement

Machine learning systems often need to estimate how likely different
outcomes are.
          `,
          example: "A classification model may estimate the probability that an input belongs to a particular class."
        }
      ],

      quiz: [
        {
          question: "What does probability measure?",
          options: [
            "Likelihood of an event",
            "Size of a file",
            "Network speed",
            "Processor speed"
          ],
          answer: "Likelihood of an event"
        },
        {
          question: "What is the probability of an impossible event?",
          options: ["0", "0.5", "1", "100"],
          answer: "0"
        },
        {
          question: "What is the probability of a certain event?",
          options: ["0", "0.25", "0.5", "1"],
          answer: "1"
        },
        {
          question: "What is the probability of heads on a fair coin?",
          options: ["0", "1/4", "1/2", "1"],
          answer: "1/2"
        },
        {
          question: "What are independent events?",
          options: [
            "Events where one does not affect the other",
            "Events that always happen together",
            "Impossible events",
            "Certain events"
          ],
          answer: "Events where one does not affect the other"
        },
        {
          question: "What does P(A|B) represent?",
          options: [
            "Conditional probability",
            "Average",
            "Variance",
            "Range"
          ],
          answer: "Conditional probability"
        },
        {
          question: "What is probability of rolling a 3 on a fair six-sided die?",
          options: ["1/2", "1/3", "1/6", "1"],
          answer: "1/6"
        },
        {
          question: "Where is probability used?",
          options: [
            "Machine learning",
            "Only gaming",
            "Only hardware",
            "Only networking"
          ],
          answer: "Machine learning"
        },
        {
          question: "What range does probability normally use?",
          options: ["0 to 1", "1 to 10", "10 to 100", "-10 to 10"],
          answer: "0 to 1"
        },
        {
          question: "Why is probability useful in ML?",
          options: [
            "It helps represent uncertainty",
            "It removes all uncertainty",
            "It replaces data",
            "It replaces algorithms"
          ],
          answer: "It helps represent uncertainty"
        }
      ],

      assignment:
        "Solve 10 probability problems involving coins, dice, cards and simple real-world events."
    },

    {
      week: 6,
      title: "Vectors and Matrices",

      lessons: [
        {
          id: "bm-w6-l1",
          title: "Introduction to Vectors",
          content: `
A vector is an ordered collection of numbers.

Example:

[2, 4, 6]

Vectors can represent:
- Position
- Measurements
- Features
- Machine learning inputs
          `,
          example: "A student's features could be represented as [age, score, attendance]."
        },

        {
          id: "bm-w6-l2",
          title: "Vector Addition",
          content: `
Vectors with the same dimensions can be added element by element.

Example:

[1, 2] + [3, 4]

= [4, 6]
          `,
          example: "[2, 5] + [1, 3] = [3, 8]."
        },

        {
          id: "bm-w6-l3",
          title: "Matrices",
          content: `
A matrix is a rectangular arrangement of numbers.

Example:

[1 2]
[3 4]

This matrix has 2 rows and 2 columns.

Matrices are heavily used in machine learning and computer graphics.
          `,
          example: "A dataset can be represented as a matrix where rows are observations and columns are features."
        },

        {
          id: "bm-w6-l4",
          title: "Matrix Operations",
          content: `
Common matrix operations include:
- Addition
- Subtraction
- Multiplication
- Transpose

Matrix multiplication is especially important in machine learning
because many algorithms perform repeated mathematical transformations.
          `,
          example: "Neural networks use matrix operations to transform input features into outputs."
        },

        {
          id: "bm-w6-l5",
          title: "Vectors and Matrices in AI",
          content: `
Machine learning data can often be represented numerically.

For example:

Height
Weight
Age
Income

can form a feature vector.

A complete dataset can be represented as a matrix.

This makes vectors and matrices fundamental to machine learning.
          `,
          example: "A dataset with 100 students and 4 numerical features can be represented as a 100 × 4 matrix."
        }
      ],

      quiz: [
        {
          question: "What is a vector?",
          options: [
            "An ordered collection of numbers",
            "A single character",
            "A graph only",
            "A database"
          ],
          answer: "An ordered collection of numbers"
        },
        {
          question: "What is a matrix?",
          options: [
            "A rectangular arrangement of numbers",
            "A single number",
            "A programming language",
            "A network"
          ],
          answer: "A rectangular arrangement of numbers"
        },
        {
          question: "What is [1,2] + [3,4]?",
          options: ["[4,6]", "[3,8]", "[2,4]", "[1,6]"],
          answer: "[4,6]"
        },
        {
          question: "How many rows are in a 2 × 3 matrix?",
          options: ["2", "3", "5", "6"],
          answer: "2"
        },
        {
          question: "How many columns are in a 2 × 3 matrix?",
          options: ["2", "3", "5", "6"],
          answer: "3"
        },
        {
          question: "What is a common machine learning use of matrices?",
          options: [
            "Representing datasets and transformations",
            "Creating passwords",
            "Sending emails",
            "Managing hardware power"
          ],
          answer: "Representing datasets and transformations"
        },
        {
          question: "What does a feature vector contain?",
          options: [
            "Numerical features",
            "Only images",
            "Only text",
            "Only passwords"
          ],
          answer: "Numerical features"
        },
        {
          question: "Which is a matrix?",
          options: [
            "[1 2; 3 4]",
            "5",
            "x",
            "hello"
          ],
          answer: "[1 2; 3 4]"
        },
        {
          question: "Which operation changes rows into columns?",
          options: ["Transpose", "Addition", "Division", "Subtraction"],
          answer: "Transpose"
        },
        {
          question: "Why are matrices important in neural networks?",
          options: [
            "They support numerical transformations",
            "They store passwords",
            "They replace hardware",
            "They create web pages"
          ],
          answer: "They support numerical transformations"
        }
      ],

      assignment:
        "Create three vectors and two matrices, then perform simple addition and identify their dimensions."
    },

    {
      week: 7,
      title: "Mathematics for Machine Learning",

      lessons: [
        {
          id: "bm-w7-l1",
          title: "Loss Functions",
          content: `
A loss function measures how different a model's prediction is from
the expected value.

A smaller loss generally means the prediction is closer to the target.

Examples:
- Mean Squared Error
- Mean Absolute Error
- Log loss

Loss functions help machine learning models learn from mistakes.
          `,
          example:
            "If the actual value is 10 and the predicted value is 8, a loss function can measure the prediction error."
        },

        {
          id: "bm-w7-l2",
          title: "Mean Squared Error",
          content: `
Mean Squared Error (MSE) calculates the average squared difference
between actual and predicted values.

Formula:

MSE = average of (actual - predicted)²

Squaring makes larger errors contribute more strongly.
          `,
          example:
            "If actual values are [10,20] and predictions are [8,22], the squared errors are 4 and 4."
        },

        {
          id: "bm-w7-l3",
          title: "Gradient Concept",
          content: `
A gradient describes how a function changes with respect to its
variables.

Machine learning algorithms can use gradients to determine how model
parameters should change to reduce loss.

Gradient-based optimization is fundamental to training many models.
          `,
          example:
            "If changing a parameter increases the loss, an optimization algorithm may move the parameter in the opposite direction."
        },

        {
          id: "bm-w7-l4",
          title: "Optimization",
          content: `
Optimization means finding parameter values that minimize or maximize
an objective.

In machine learning, training commonly tries to minimize a loss function.

Gradient descent is a popular optimization method.

Basic idea:

1. Start with parameters.
2. Calculate loss.
3. Calculate gradient.
4. Update parameters.
5. Repeat.
          `,
          example:
            "A model can repeatedly update its weights to reduce prediction error."
        },

        {
          id: "bm-w7-l5",
          title: "Normalization and Scaling",
          content: `
Machine learning models often work better when numerical features
are placed on comparable scales.

Common approaches include:
- Min-max scaling
- Standardization

Scaling can prevent features with large numerical values from dominating
certain algorithms.
          `,
          example:
            "Age may range from 0-100 while income may range from 0-100000. Scaling can place them on comparable numerical scales."
        }
      ],

      quiz: [
        {
          question: "What does a loss function measure?",
          options: [
            "Prediction error",
            "Network speed",
            "File size",
            "CPU temperature"
          ],
          answer: "Prediction error"
        },
        {
          question: "What does MSE stand for?",
          options: [
            "Mean Squared Error",
            "Maximum Statistical Estimate",
            "Mean Standard Equation",
            "Model System Error"
          ],
          answer: "Mean Squared Error"
        },
        {
          question: "Why are errors squared in MSE?",
          options: [
            "To make larger errors contribute more",
            "To remove all errors",
            "To convert data to text",
            "To create graphs"
          ],
          answer: "To make larger errors contribute more"
        },
        {
          question: "What does a gradient describe?",
          options: [
            "How a function changes",
            "Only the average",
            "Only the maximum",
            "Only the minimum"
          ],
          answer: "How a function changes"
        },
        {
          question: "What is optimization used for?",
          options: [
            "Finding better parameter values",
            "Deleting data",
            "Creating networks",
            "Changing screen size"
          ],
          answer: "Finding better parameter values"
        },
        {
          question: "What does gradient descent try to do?",
          options: [
            "Reduce a loss function",
            "Increase file size",
            "Delete features",
            "Create passwords"
          ],
          answer: "Reduce a loss function"
        },
        {
          question: "Why scale features?",
          options: [
            "To put numerical features on comparable scales",
            "To remove all data",
            "To create images",
            "To increase storage"
          ],
          answer: "To put numerical features on comparable scales"
        },
        {
          question: "What is a model parameter?",
          options: [
            "A value learned or adjusted by a model",
            "A network cable",
            "A file name",
            "A screen"
          ],
          answer: "A value learned or adjusted by a model"
        },
        {
          question: "What is repeated during model training?",
          options: [
            "Prediction, loss calculation and parameter updates",
            "Only printing",
            "Only reading",
            "Only file copying"
          ],
          answer: "Prediction, loss calculation and parameter updates"
        },
        {
          question: "Why is mathematics important in machine learning?",
          options: [
            "Models use mathematical operations to learn from data",
            "It replaces computers",
            "It removes datasets",
            "It replaces programming completely"
          ],
          answer: "Models use mathematical operations to learn from data"
        }
      ],

      assignment:
        "Explain in your own words how loss, gradients and optimization work together during machine learning training."
    },

    {
      week: 8,
      title: "Practical Mathematics for AI and ML",

      lessons: [
        {
          id: "bm-w8-l1",
          title: "Feature Representation",
          content: `
Machine learning algorithms require data to be represented in a useful
numerical form.

Examples:

Age = 21
Experience = 2
Score = 85

These values can form a feature vector.

Good feature representation helps models process data effectively.
          `,
          example:
            "A student prediction system could represent a student using age, attendance and marks."
        },

        {
          id: "bm-w8-l2",
          title: "Data Relationships",
          content: `
Mathematics helps identify relationships between variables.

Examples:
- Positive relationship
- Negative relationship
- Weak relationship
- Strong relationship

Correlation is one measure used to describe the strength and direction
of a linear relationship.
          `,
          example:
            "Study time and exam marks may show a positive relationship in some datasets."
        },

        {
          id: "bm-w8-l3",
          title: "Mathematical Thinking in AI",
          content: `
AI problems can often be broken into mathematical steps:

1. Represent the input numerically.
2. Apply mathematical transformations.
3. Produce a prediction.
4. Measure the error.
5. Update the model.
6. Repeat.

Understanding these ideas makes machine learning concepts easier to learn.
          `,
          example:
            "A model can convert input features into a prediction and then compare the prediction with the expected result."
        },

        {
          id: "bm-w8-l4",
          title: "Using Python for Mathematics",
          content: `
Python can perform mathematical calculations using built-in operators
and libraries.

Examples of useful tools include:
- math
- NumPy
- pandas
- matplotlib

These tools allow programmers to work with numbers, vectors, matrices
and datasets efficiently.
          `,
          example:
            "NumPy can represent a dataset as an array and perform mathematical operations on it."
        },

        {
          id: "bm-w8-l5",
          title: "Final Review",
          content: `
You have learned:

- Numbers
- Fractions
- Percentages
- Algebra
- Equations
- Functions
- Graphs
- Statistics
- Probability
- Vectors
- Matrices
- Loss functions
- Gradients
- Optimization
- Feature scaling

These concepts provide a strong mathematical foundation for AI and
machine learning.
          `,
          example:
            "A machine learning model can use vectors, matrices, probability and optimization together."
        }
      ],

      quiz: [
        {
          question: "How can machine learning data be represented?",
          options: [
            "Using numerical features",
            "Only using passwords",
            "Only using cables",
            "Only using images"
          ],
          answer: "Using numerical features"
        },
        {
          question: "What does correlation describe?",
          options: [
            "A relationship between variables",
            "Only the average",
            "Only the maximum",
            "Only the minimum"
          ],
          answer: "A relationship between variables"
        },
        {
          question: "What is a feature vector?",
          options: [
            "A collection of feature values",
            "A network cable",
            "A password",
            "A database server"
          ],
          answer: "A collection of feature values"
        },
        {
          question: "Which Python library is commonly used for numerical arrays?",
          options: ["NumPy", "Flask", "React", "Django"],
          answer: "NumPy"
        },
        {
          question: "Which library is useful for plotting data?",
          options: ["matplotlib", "NumPy only", "Git", "HTML"],
          answer: "matplotlib"
        },
        {
          question: "What happens after a model makes a prediction?",
          options: [
            "The prediction can be compared with the expected result",
            "The data must always be deleted",
            "The computer must restart",
            "The network must disconnect"
          ],
          answer: "The prediction can be compared with the expected result"
        },
        {
          question: "What is feature scaling?",
          options: [
            "Putting numerical features on comparable scales",
            "Deleting features",
            "Creating passwords",
            "Changing file names"
          ],
          answer: "Putting numerical features on comparable scales"
        },
        {
          question: "Which concept is important for model training?",
          options: ["Optimization", "Screen resolution", "Keyboard layout", "File naming"],
          answer: "Optimization"
        },
        {
          question: "What do matrices help represent?",
          options: [
            "Structured numerical data and transformations",
            "Only passwords",
            "Only network cables",
            "Only text messages"
          ],
          answer: "Structured numerical data and transformations"
        },
        {
          question: "Is mathematics important for AI and ML?",
          options: ["Yes", "No", "Only for networking", "Only for web design"],
          answer: "Yes"
        }
      ],

      assignment:
        "Choose a simple machine learning problem and describe its inputs, numerical features, expected output, possible loss function and how mathematics would be used.",

      project: {
        title: "Student Performance Prediction Mathematics Project",
        description:
          "Use mathematical concepts to analyze student data and prepare the foundation for a simple prediction system.",
        requirements: [
          "Create a dataset containing at least 10 students.",
          "Include at least three numerical features.",
          "Calculate mean, median and range.",
          "Calculate simple percentages.",
          "Represent one student's information as a feature vector.",
          "Represent the complete dataset as a matrix.",
          "Create at least one graph.",
          "Explain one relationship between two variables.",
          "Describe a possible machine learning prediction.",
          "Explain which loss function could be used.",
          "Explain how optimization could improve the prediction."
        ]
      }
    }
  ]
};
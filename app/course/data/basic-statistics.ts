export const basicStatisticsCourse = {
  id: "basic-statistics",
  title: "Basic Statistics",
  description:
    "A beginner-friendly statistics course covering data types, measures of central tendency, dispersion, probability, distributions, correlation, sampling and practical data analysis.",
  duration: "8 weeks",
  level: "Beginner",

  weeks: [
    {
      week: 1,
      title: "Introduction to Statistics and Data",
      lessons: [
        {
          id: "bs-w1-l1",
          title: "What is Statistics?",
          content: `
Statistics is the study of collecting, organizing, analyzing and interpreting data.

Statistics is widely used in:

• Business
• Data analysis
• Research
• Healthcare
• Finance
• Engineering
• Machine learning

A data analyst uses statistics to turn raw data into useful information.
`,
        },
        {
          id: "bs-w1-l2",
          title: "Population and Sample",
          content: `
A population is the complete group being studied.

A sample is a smaller group selected from the population.

Example:

A college has 5,000 students.

Population:
All 5,000 students.

Sample:
500 students selected for a survey.

Using a representative sample can make analysis more practical.
`,
        },
        {
          id: "bs-w1-l3",
          title: "Types of Data",
          content: `
Data can be classified in different ways.

Categorical data:
Describes categories.

Examples:
Department, gender category, product type.

Numerical data:
Represents numbers.

Examples:
Age, salary, marks, temperature.

Numerical data can be further divided into discrete and continuous data.
`,
        },
        {
          id: "bs-w1-l4",
          title: "Discrete and Continuous Data",
          content: `
Discrete data consists of countable values.

Example:

Number of students = 40

Continuous data can take values within a range.

Example:

Height = 172.5 cm

Understanding data type helps determine which statistical methods are appropriate.
`,
        },
        {
          id: "bs-w1-l5",
          title: "Data Collection",
          content: `
Data can be collected using:

• Surveys
• Interviews
• Experiments
• Sensors
• Databases
• Transaction systems
• Public datasets

Good data collection should aim for accuracy, consistency and relevance.
`,
        },
      ],

      quiz: [
        {
          question: "What is statistics?",
          options: [
            "The study of collecting and analyzing data",
            "Only programming",
            "Only mathematics",
            "Only database design",
          ],
          answer: "The study of collecting and analyzing data",
        },
        {
          question: "What is a population?",
          options: [
            "The complete group being studied",
            "A small sample",
            "A graph",
            "A database table",
          ],
          answer: "The complete group being studied",
        },
        {
          question: "What is a sample?",
          options: [
            "A smaller group selected from a population",
            "The complete population",
            "A graph",
            "A formula",
          ],
          answer: "A smaller group selected from a population",
        },
        {
          question: "Which is numerical data?",
          options: ["Age", "Department", "Product category", "City name"],
          answer: "Age",
        },
        {
          question: "Which is categorical data?",
          options: ["Department", "Height", "Salary", "Temperature"],
          answer: "Department",
        },
        {
          question: "What type of data is number of students?",
          options: ["Discrete", "Continuous", "Text", "Image"],
          answer: "Discrete",
        },
        {
          question: "What type of data is height?",
          options: ["Continuous", "Discrete", "Categorical only", "Boolean"],
          answer: "Continuous",
        },
        {
          question: "Why is sampling useful?",
          options: [
            "It can make data collection more practical",
            "It deletes the population",
            "It removes statistics",
            "It guarantees perfect results",
          ],
          answer: "It can make data collection more practical",
        },
        {
          question: "Which is a method of collecting data?",
          options: ["Survey", "Compiler", "Firewall", "Operating system"],
          answer: "Survey",
        },
        {
          question: "Why is data quality important?",
          options: [
            "Poor data can lead to unreliable analysis",
            "It increases screen size",
            "It replaces statistics",
            "It removes databases",
          ],
          answer: "Poor data can lead to unreliable analysis",
        },
      ],

      assignment:
        "Create a small dataset containing at least 20 records. Identify which columns are categorical, discrete and continuous.",
    },

    {
      week: 2,
      title: "Organizing and Visualizing Data",
      lessons: [
        {
          id: "bs-w2-l1",
          title: "Data Tables",
          content: `
A data table organizes information into rows and columns.

For example:

Student | Age | Marks | Department

Each row represents a record.

Each column represents a variable.

Tables are the foundation of many data analysis workflows.
`,
        },
        {
          id: "bs-w2-l2",
          title: "Frequency",
          content: `
Frequency tells us how many times a value or category occurs.

Example:

If the marks are:

70, 80, 70, 90, 70

The frequency of 70 is 3.

Frequency tables help summarize datasets.
`,
        },
        {
          id: "bs-w2-l3",
          title: "Bar Charts",
          content: `
Bar charts are useful for categorical data.

Example:

Department:
ECE
CSE
EEE
ME

The height of each bar can represent the number of students in each department.
`,
        },
        {
          id: "bs-w2-l4",
          title: "Histograms",
          content: `
A histogram displays the distribution of numerical data using intervals called bins.

For example, exam scores can be grouped into:

0-20
21-40
41-60
61-80
81-100

Histograms help identify the shape and spread of data.
`,
        },
        {
          id: "bs-w2-l5",
          title: "Pie Charts and Line Charts",
          content: `
Pie charts show parts of a whole.

Line charts are useful for showing changes over time.

Example:

Monthly sales can be displayed using a line chart to show whether sales increased or decreased.
`,
        },
      ],

      quiz: [
        {
          question: "What does a row commonly represent?",
          options: ["A record", "A database", "A graph", "A formula"],
          answer: "A record",
        },
        {
          question: "What does a column usually represent?",
          options: ["A variable", "A computer", "A network", "A chart only"],
          answer: "A variable",
        },
        {
          question: "What does frequency mean?",
          options: [
            "How often a value occurs",
            "The average only",
            "The largest value",
            "The smallest value",
          ],
          answer: "How often a value occurs",
        },
        {
          question: "Which chart is useful for categorical data?",
          options: ["Bar chart", "Histogram only", "Scatter plot only", "Line equation"],
          answer: "Bar chart",
        },
        {
          question: "Which chart groups numerical values into intervals?",
          options: ["Histogram", "Pie chart", "Bar chart", "Table only"],
          answer: "Histogram",
        },
        {
          question: "Which chart is useful for trends over time?",
          options: ["Line chart", "Pie chart", "Bar chart only", "Text file"],
          answer: "Line chart",
        },
        {
          question: "What does a pie chart show?",
          options: [
            "Parts of a whole",
            "Only averages",
            "Only minimum values",
            "Only continuous data",
          ],
          answer: "Parts of a whole",
        },
        {
          question: "What are histogram intervals called?",
          options: ["Bins", "Rows", "Columns", "Labels"],
          answer: "Bins",
        },
        {
          question: "Why visualize data?",
          options: [
            "To make patterns and trends easier to understand",
            "To delete data",
            "To replace databases",
            "To remove calculations",
          ],
          answer: "To make patterns and trends easier to understand",
        },
        {
          question: "Can frequency tables summarize data?",
          options: ["Yes", "No", "Never", "Only for text"],
          answer: "Yes",
        },
      ],

      assignment:
        "Take your Week 1 dataset and create a frequency table, bar chart and histogram.",
    },

    {
      week: 3,
      title: "Mean, Median and Mode",
      lessons: [
        {
          id: "bs-w3-l1",
          title: "Mean",
          content: `
The mean is commonly called the average.

Formula:

Mean = Sum of values / Number of values

Example:

10, 20, 30

Mean = (10 + 20 + 30) / 3
Mean = 20

The mean is useful but can be affected by extreme values.
`,
        },
        {
          id: "bs-w3-l2",
          title: "Median",
          content: `
The median is the middle value after sorting the data.

Example:

10, 20, 30

Median = 20

For an even number of values, the median is the average of the two middle values.
`,
        },
        {
          id: "bs-w3-l3",
          title: "Mode",
          content: `
The mode is the value that occurs most frequently.

Example:

2, 3, 3, 4, 5

Mode = 3

A dataset can have:

• One mode
• More than one mode
• No mode
`,
        },
        {
          id: "bs-w3-l4",
          title: "Choosing the Right Measure",
          content: `
Mean, median and mode describe the center of a dataset.

Mean:
Useful for many numerical datasets.

Median:
Useful when extreme values may affect the mean.

Mode:
Useful for identifying the most common value or category.
`,
        },
        {
          id: "bs-w3-l5",
          title: "Practical Data Example",
          content: `
Suppose salaries are:

20,000
22,000
23,000
25,000
100,000

The mean is strongly affected by the unusually large value.

The median may provide a better description of the typical salary.

This is why analysts should understand the data before choosing a summary measure.
`,
        },
      ],

      quiz: [
        {
          question: "What is the mean?",
          options: [
            "The sum divided by the number of values",
            "The middle value only",
            "The most common value",
            "The largest value",
          ],
          answer: "The sum divided by the number of values",
        },
        {
          question: "What is the mean of 10, 20 and 30?",
          options: ["20", "30", "10", "60"],
          answer: "20",
        },
        {
          question: "What is the median?",
          options: [
            "The middle value after sorting",
            "The largest value",
            "The smallest value",
            "The most common value",
          ],
          answer: "The middle value after sorting",
        },
        {
          question: "What is the mode?",
          options: [
            "The most frequently occurring value",
            "The average",
            "The middle value",
            "The smallest value",
          ],
          answer: "The most frequently occurring value",
        },
        {
          question: "Which measure can be strongly affected by extreme values?",
          options: ["Mean", "Median", "Mode", "None"],
          answer: "Mean",
        },
        {
          question: "What is the median of 2, 4, 6?",
          options: ["4", "2", "6", "12"],
          answer: "4",
        },
        {
          question: "What is the mode of 2, 3, 3, 4?",
          options: ["3", "2", "4", "12"],
          answer: "3",
        },
        {
          question: "Can a dataset have more than one mode?",
          options: ["Yes", "No", "Never", "Only with decimals"],
          answer: "Yes",
        },
        {
          question: "Why might median be preferred for salaries?",
          options: [
            "It can be less affected by extreme values",
            "It always equals the mean",
            "It removes all data",
            "It only works with categories",
          ],
          answer: "It can be less affected by extreme values",
        },
        {
          question: "Which measure identifies the most common category?",
          options: ["Mode", "Mean", "Median", "Range"],
          answer: "Mode",
        },
      ],

      assignment:
        "Calculate the mean, median and mode for at least five datasets and explain which measure best represents each dataset.",
    },

    {
      week: 4,
      title: "Range, Variance and Standard Deviation",
      lessons: [
        {
          id: "bs-w4-l1",
          title: "Range",
          content: `
Range measures the difference between the largest and smallest values.

Formula:

Range = Maximum - Minimum

Example:

10, 20, 30

Range = 30 - 10 = 20
`,
        },
        {
          id: "bs-w4-l2",
          title: "Variance",
          content: `
Variance measures how far values tend to be from the mean.

A larger variance indicates greater spread.

A smaller variance indicates that values are generally closer together.

Variance is important for understanding the variability of data.
`,
        },
        {
          id: "bs-w4-l3",
          title: "Standard Deviation",
          content: `
Standard deviation measures the spread of data around the mean.

A small standard deviation means values tend to stay close to the mean.

A large standard deviation means values are more spread out.

Standard deviation is widely used in statistics and data analysis.
`,
        },
        {
          id: "bs-w4-l4",
          title: "Population and Sample Standard Deviation",
          content: `
There are different formulas for population and sample standard deviation.

Population standard deviation describes an entire population.

Sample standard deviation estimates variability from a sample.

The distinction matters when performing statistical analysis.
`,
        },
        {
          id: "bs-w4-l5",
          title: "Interpreting Spread",
          content: `
Consider two classes with the same average mark.

Class A:
48, 49, 50, 51, 52

Class B:
20, 35, 50, 65, 80

Both may have similar means, but Class B has much greater spread.

This demonstrates why center and spread should both be examined.
`,
        },
      ],

      quiz: [
        {
          question: "What is the range?",
          options: [
            "Maximum minus minimum",
            "Mean minus median",
            "Sum divided by count",
            "Most common value",
          ],
          answer: "Maximum minus minimum",
        },
        {
          question: "What does variance measure?",
          options: [
            "Spread around the mean",
            "Only the maximum",
            "Only the minimum",
            "The number of categories",
          ],
          answer: "Spread around the mean",
        },
        {
          question: "What does standard deviation measure?",
          options: [
            "Spread of data around the mean",
            "Only the median",
            "Only the mode",
            "Number of rows",
          ],
          answer: "Spread of data around the mean",
        },
        {
          question: "What does a small standard deviation indicate?",
          options: [
            "Values tend to be close to the mean",
            "Values are always zero",
            "Values are extremely different",
            "There is no data",
          ],
          answer: "Values tend to be close to the mean",
        },
        {
          question: "What does a large standard deviation indicate?",
          options: [
            "Greater spread",
            "No variation",
            "Only one value",
            "No data",
          ],
          answer: "Greater spread",
        },
        {
          question: "What is the range of 10, 20, 30?",
          options: ["20", "10", "30", "60"],
          answer: "20",
        },
        {
          question: "Why is spread important?",
          options: [
            "It shows how variable the data is",
            "It replaces the mean",
            "It deletes extreme values",
            "It creates categories",
          ],
          answer: "It shows how variable the data is",
        },
        {
          question: "Can two datasets have the same mean but different spread?",
          options: ["Yes", "No", "Never", "Only with text"],
          answer: "Yes",
        },
        {
          question: "Is standard deviation used in data analysis?",
          options: ["Yes", "No", "Never", "Only in programming"],
          answer: "Yes",
        },
        {
          question: "What is a smaller variance generally associated with?",
          options: [
            "Values closer to the mean",
            "Greater spread",
            "More categories",
            "More missing values",
          ],
          answer: "Values closer to the mean",
        },
      ],

      assignment:
        "For five datasets, calculate the range and use a statistics tool or spreadsheet to calculate variance and standard deviation. Interpret the results.",
    },

    {
      week: 5,
      title: "Probability and Distributions",
      lessons: [
        {
          id: "bs-w5-l1",
          title: "Probability Review",
          content: `
Probability describes how likely an event is.

Probability ranges from 0 to 1.

0 means impossible.

1 means certain.

Probability is important in statistics because many real-world events involve uncertainty.
`,
        },
        {
          id: "bs-w5-l2",
          title: "Random Variables",
          content: `
A random variable represents a numerical outcome of a random process.

Example:

Number of heads when flipping three coins.

Possible values:

0, 1, 2, 3

Random variables can be discrete or continuous.
`,
        },
        {
          id: "bs-w5-l3",
          title: "Normal Distribution",
          content: `
The normal distribution is a common probability distribution.

It has a bell-shaped curve.

Many naturally occurring measurements can be approximately normally distributed.

Examples can include certain measurement errors and physical measurements.
`,
        },
        {
          id: "bs-w5-l4",
          title: "Mean and Standard Deviation in Normal Distribution",
          content: `
The mean determines the center of a normal distribution.

The standard deviation describes how spread out the distribution is.

Together they help describe the shape and location of the distribution.
`,
        },
        {
          id: "bs-w5-l5",
          title: "Outliers",
          content: `
An outlier is a value that is unusually far from other observations.

Outliers can result from:

• Measurement errors
• Data-entry mistakes
• Rare events
• Genuine unusual observations

Analysts should investigate outliers rather than automatically deleting them.
`,
        },
      ],

      quiz: [
        {
          question: "What range does probability use?",
          options: ["0 to 1", "1 to 100 only", "-1 to 1", "10 to 20"],
          answer: "0 to 1",
        },
        {
          question: "What is a random variable?",
          options: [
            "A variable representing a random numerical outcome",
            "A fixed constant",
            "A database column only",
            "A chart",
          ],
          answer: "A variable representing a random numerical outcome",
        },
        {
          question: "What shape does a normal distribution have?",
          options: ["Bell-shaped", "Square", "Triangle", "Flat only"],
          answer: "Bell-shaped",
        },
        {
          question: "What does the mean determine in a normal distribution?",
          options: ["Center", "Only spread", "Maximum", "Minimum"],
          answer: "Center",
        },
        {
          question: "What does standard deviation describe?",
          options: ["Spread", "Category name", "Database size", "Number of columns"],
          answer: "Spread",
        },
        {
          question: "What is an outlier?",
          options: [
            "An unusually distant observation",
            "The average",
            "The median",
            "The most common value",
          ],
          answer: "An unusually distant observation",
        },
        {
          question: "Should every outlier automatically be deleted?",
          options: ["No", "Yes", "Always", "Only in small datasets"],
          answer: "No",
        },
        {
          question: "Can random variables be discrete?",
          options: ["Yes", "No", "Never", "Only for graphs"],
          answer: "Yes",
        },
        {
          question: "Is probability useful in statistics?",
          options: ["Yes", "No", "Never", "Only for games"],
          answer: "Yes",
        },
        {
          question: "What can cause an outlier?",
          options: [
            "Measurement error or a genuine unusual observation",
            "Only a database",
            "Only a graph",
            "Only a formula",
          ],
          answer: "Measurement error or a genuine unusual observation",
        },
      ],

      assignment:
        "Analyze a small numerical dataset, identify possible outliers and explain whether each unusual value should be investigated or retained.",
    },

    {
      week: 6,
      title: "Correlation and Regression",
      lessons: [
        {
          id: "bs-w6-l1",
          title: "Correlation",
          content: `
Correlation measures the strength and direction of a relationship between two variables.

A positive relationship means both variables tend to increase together.

A negative relationship means one tends to increase while the other decreases.

Correlation does not automatically prove causation.
`,
        },
        {
          id: "bs-w6-l2",
          title: "Correlation Coefficient",
          content: `
A correlation coefficient is commonly represented by r.

It generally ranges from:

-1 to +1

+1:
Strong positive linear relationship.

-1:
Strong negative linear relationship.

0:
Little or no linear relationship.
`,
        },
        {
          id: "bs-w6-l3",
          title: "Scatter Plots",
          content: `
Scatter plots display pairs of numerical observations.

They are useful for visually examining relationships.

For example:

Study hours vs exam score

A scatter plot can help an analyst see whether the variables appear related.
`,
        },
        {
          id: "bs-w6-l4",
          title: "Regression",
          content: `
Regression is used to model relationships between variables and make predictions.

A simple linear regression equation can be written as:

y = mx + b

where:

y = predicted value
x = input
m = slope
b = intercept
`,
        },
        {
          id: "bs-w6-l5",
          title: "Correlation vs Causation",
          content: `
Correlation means two variables are associated.

Causation means a change in one variable directly contributes to a change in another.

Correlation alone does not prove causation.

This is one of the most important concepts for responsible data analysis.
`,
        },
      ],

      quiz: [
        {
          question: "What does correlation measure?",
          options: [
            "Strength and direction of a relationship",
            "Only the average",
            "Only the median",
            "Database size",
          ],
          answer: "Strength and direction of a relationship",
        },
        {
          question: "What range can a correlation coefficient take?",
          options: ["-1 to +1", "0 to 100", "1 to 10", "-100 to 1000"],
          answer: "-1 to +1",
        },
        {
          question: "What does +1 indicate?",
          options: [
            "Strong positive linear relationship",
            "Strong negative relationship",
            "No relationship",
            "Missing data",
          ],
          answer: "Strong positive linear relationship",
        },
        {
          question: "What does -1 indicate?",
          options: [
            "Strong negative linear relationship",
            "Strong positive relationship",
            "No relationship",
            "Perfect data",
          ],
          answer: "Strong negative linear relationship",
        },
        {
          question: "What does correlation near 0 generally indicate?",
          options: [
            "Little or no linear relationship",
            "Perfect positive relationship",
            "Perfect negative relationship",
            "Identical values",
          ],
          answer: "Little or no linear relationship",
        },
        {
          question: "What is a scatter plot useful for?",
          options: [
            "Examining relationships between numerical variables",
            "Storing passwords",
            "Creating databases",
            "Installing software",
          ],
          answer:
            "Examining relationships between numerical variables",
        },
        {
          question: "What is regression used for?",
          options: [
            "Modeling relationships and making predictions",
            "Only creating charts",
            "Deleting data",
            "Encrypting files",
          ],
          answer: "Modeling relationships and making predictions",
        },
        {
          question: "Does correlation prove causation?",
          options: ["No", "Yes", "Always", "Only with small datasets"],
          answer: "No",
        },
        {
          question: "What is the regression equation for a simple line?",
          options: ["y = mx + b", "x = y²", "a = b + c + d", "p = 1/2"],
          answer: "y = mx + b",
        },
        {
          question: "What is a positive relationship?",
          options: [
            "Variables tend to increase together",
            "Both always decrease",
            "There is no relationship",
            "One always equals zero",
          ],
          answer: "Variables tend to increase together",
        },
      ],

      assignment:
        "Choose two numerical variables from a dataset, create a scatter plot, calculate or obtain their correlation and explain what the result means.",
    },

    {
      week: 7,
      title: "Sampling and Statistical Inference",
      lessons: [
        {
          id: "bs-w7-l1",
          title: "Sampling Methods",
          content: `
Sampling methods determine how observations are selected.

Common methods include:

• Simple random sampling
• Systematic sampling
• Stratified sampling
• Cluster sampling

The sampling method can influence the quality of conclusions.
`,
        },
        {
          id: "bs-w7-l2",
          title: "Sampling Bias",
          content: `
Sampling bias occurs when the sample does not properly represent the population.

For example, asking only one department about the opinion of an entire college may produce biased results.

Good sampling aims to represent the population appropriately.
`,
        },
        {
          id: "bs-w7-l3",
          title: "Estimation",
          content: `
Statistics often uses a sample to estimate a population characteristic.

For example:

A survey of 1,000 customers can be used to estimate the satisfaction level of a much larger customer population.

Estimation always involves some uncertainty.
`,
        },
        {
          id: "bs-w7-l4",
          title: "Confidence Intervals",
          content: `
A confidence interval provides a range of plausible values for a population parameter based on sample data.

Instead of reporting only one estimate, an analyst can report an interval.

Confidence intervals help communicate uncertainty.
`,
        },
        {
          id: "bs-w7-l5",
          title: "Hypothesis Testing Introduction",
          content: `
Hypothesis testing provides a structured way to evaluate claims using data.

A simple test generally starts with:

Null hypothesis:
A default assumption.

Alternative hypothesis:
The claim being investigated.

Statistical testing helps determine whether the observed data provides enough evidence against the null hypothesis.
`,
        },
      ],

      quiz: [
        {
          question: "Why is sampling used?",
          options: [
            "To study a manageable subset of a population",
            "To delete the population",
            "To remove statistics",
            "To guarantee perfect results",
          ],
          answer: "To study a manageable subset of a population",
        },
        {
          question: "What is sampling bias?",
          options: [
            "When a sample does not properly represent the population",
            "When all data is correct",
            "When a graph is colorful",
            "When data is sorted",
          ],
          answer:
            "When a sample does not properly represent the population",
        },
        {
          question: "What is random sampling?",
          options: [
            "Selecting observations using a random process",
            "Selecting only friends",
            "Selecting only the largest values",
            "Selecting only one category",
          ],
          answer: "Selecting observations using a random process",
        },
        {
          question: "What does a confidence interval provide?",
          options: [
            "A range of plausible values",
            "Only one exact value",
            "A database",
            "A graph title",
          ],
          answer: "A range of plausible values",
        },
        {
          question: "Why are confidence intervals useful?",
          options: [
            "They communicate uncertainty",
            "They remove uncertainty completely",
            "They delete outliers",
            "They replace data collection",
          ],
          answer: "They communicate uncertainty",
        },
        {
          question: "What is a null hypothesis?",
          options: [
            "A default assumption tested using data",
            "A graph",
            "A sample",
            "A database",
          ],
          answer: "A default assumption tested using data",
        },
        {
          question: "What is an alternative hypothesis?",
          options: [
            "The claim being investigated",
            "The population",
            "A chart",
            "A file",
          ],
          answer: "The claim being investigated",
        },
        {
          question: "Can a sample be used to estimate a population?",
          options: ["Yes", "No", "Never", "Only with text data"],
          answer: "Yes",
        },
        {
          question: "Does statistical estimation involve uncertainty?",
          options: ["Yes", "No", "Never", "Always zero"],
          answer: "Yes",
        },
        {
          question: "Why is sampling quality important?",
          options: [
            "It affects the reliability of conclusions",
            "It changes screen size",
            "It removes all errors",
            "It replaces databases",
          ],
          answer: "It affects the reliability of conclusions",
        },
      ],

      assignment:
        "Design a simple survey for a college population. Define the population, sample, sampling method and possible sources of sampling bias.",
    },

    {
      week: 8,
      title: "Practical Statistics for Data Analysts",
      lessons: [
        {
          id: "bs-w8-l1",
          title: "Cleaning Statistical Data",
          content: `
Before statistical analysis, data should be checked for:

• Missing values
• Duplicate records
• Incorrect data types
• Impossible values
• Outliers
• Inconsistent categories

Statistical results are only useful when the underlying data is reasonably reliable.
`,
        },
        {
          id: "bs-w8-l2",
          title: "Descriptive Statistics",
          content: `
Descriptive statistics summarize observed data.

Common measures include:

• Count
• Mean
• Median
• Mode
• Minimum
• Maximum
• Range
• Variance
• Standard deviation

These measures provide a quick overview of a dataset.
`,
        },
        {
          id: "bs-w8-l3",
          title: "Using Spreadsheets for Statistics",
          content: `
Spreadsheet software such as Excel can calculate many statistical measures.

Useful functions include:

AVERAGE
MEDIAN
MODE
MIN
MAX
STDEV

Spreadsheets are useful for learning statistics before moving to Python or other analysis tools.
`,
        },
        {
          id: "bs-w8-l4",
          title: "Statistics in Python",
          content: `
Python libraries can automate statistical analysis.

Common libraries include:

pandas
numpy
matplotlib
scipy

For example, pandas can summarize a dataset while matplotlib can visualize it.

Learning statistics first helps you understand what these tools are calculating.
`,
        },
        {
          id: "bs-w8-l5",
          title: "Final Review",
          content: `
You have now learned:

• Data types
• Population and samples
• Data visualization
• Mean
• Median
• Mode
• Range
• Variance
• Standard deviation
• Probability
• Distributions
• Correlation
• Regression
• Sampling
• Confidence intervals
• Hypothesis testing basics

These skills form a strong foundation for practical data analysis.
`,
        },
      ],

      quiz: [
        {
          question: "What should be checked before statistical analysis?",
          options: [
            "Missing values and incorrect data",
            "Only screen size",
            "Only keyboard settings",
            "Only file names",
          ],
          answer: "Missing values and incorrect data",
        },
        {
          question: "Which is descriptive statistics?",
          options: ["Mean", "Firewall", "Compiler", "IP address"],
          answer: "Mean",
        },
        {
          question: "Which Excel function calculates an average?",
          options: ["AVERAGE", "TOTALTEXT", "NETWORK", "COUNTIP"],
          answer: "AVERAGE",
        },
        {
          question: "Which function finds the median in Excel?",
          options: ["MEDIAN", "AVERAGE", "MAX", "MIN"],
          answer: "MEDIAN",
        },
        {
          question: "Which Python library is widely used for tabular data analysis?",
          options: ["pandas", "pygame", "flask", "socket"],
          answer: "pandas",
        },
        {
          question: "Which library is commonly used for plotting?",
          options: ["matplotlib", "requests", "os", "json"],
          answer: "matplotlib",
        },
        {
          question: "Why should data be cleaned?",
          options: [
            "Poor-quality data can produce unreliable results",
            "It increases monitor size",
            "It removes statistics",
            "It replaces analysis",
          ],
          answer:
            "Poor-quality data can produce unreliable results",
        },
        {
          question: "Which is a measure of spread?",
          options: ["Standard deviation", "Mode", "Median", "Category"],
          answer: "Standard deviation",
        },
        {
          question: "Which is a measure of center?",
          options: ["Mean", "Range", "Variance", "Standard deviation"],
          answer: "Mean",
        },
        {
          question: "Is statistics important for data analysts?",
          options: ["Yes", "No", "Never", "Only for researchers"],
          answer: "Yes",
        },
      ],

      assignment:
        "Take a real or sample dataset and produce a complete statistical summary containing descriptive statistics, charts, correlation and observations.",

      project: {
        title: "Student Performance Statistical Analysis",
        description:
          "Analyze a student performance dataset and create a complete beginner-level statistical report.",
        requirements: [
          "Use at least 30 student records.",
          "Include at least three numerical variables.",
          "Include at least one categorical variable.",
          "Clean missing or incorrect values.",
          "Calculate mean, median and mode.",
          "Calculate range and standard deviation.",
          "Create at least three visualizations.",
          "Identify possible outliers.",
          "Calculate correlation between two numerical variables.",
          "Write at least five meaningful insights.",
        ],
      },
    },
  ],
};
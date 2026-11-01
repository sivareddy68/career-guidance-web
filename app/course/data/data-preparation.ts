const dataPreparationCourse = {
  title: "Data Preparation",
  description:
    "Learn data profiling, data quality, data cleaning, missing-value handling, duplicate detection, data transformation, validation, and preparing datasets for analysis and machine learning.",
  weeks: [
    {
      title: "Week 1: Introduction to Data Preparation",
      lessons: [
        {
          title: "Introduction to Data Preparation",
          content: `
Data preparation is the process of converting raw data into a clean, organized, and useful format for analysis and machine learning.

Raw data is often collected from different sources such as spreadsheets, databases, websites, sensors, surveys, and applications.

Raw datasets may contain:
- Missing values.
- Duplicate records.
- Incorrect data.
- Inconsistent formats.
- Unnecessary columns.
- Different measurement units.
- Incorrect data types.

These problems can affect the accuracy of analysis and machine learning models.

For example, consider a student dataset containing student names, attendance, and marks.

Some records may have missing attendance values. Other records may contain attendance as text instead of numbers.

Data preparation identifies and handles these issues before analysis.

The main stages include:

1. Data collection.
2. Data inspection.
3. Data cleaning.
4. Data transformation.
5. Data validation.
6. Data storage.

Data preparation is important because reliable input data helps produce more dependable analytical results.

It is commonly used in data analytics, business intelligence, artificial intelligence, machine learning, and scientific research.
          `,
          quiz: [
            {
              question: "What is data preparation?",
              options: [
                "Converting raw data into a useful format",
                "Designing computer hardware",
                "Installing an operating system",
                "Creating network cables"
              ],
              answer: "Converting raw data into a useful format"
            },
            {
              question: "Which is a common problem in raw datasets?",
              options: [
                "Missing values",
                "Excessive processor speed",
                "Large monitor size",
                "Keyboard configuration"
              ],
              answer: "Missing values"
            },
            {
              question: "Why is data preparation important?",
              options: [
                "It improves data quality and reliability",
                "It automatically increases internet speed",
                "It replaces the database server",
                "It removes the need for analysis"
              ],
              answer: "It improves data quality and reliability"
            },
            {
              question: "Which activity is part of data preparation?",
              options: [
                "Removing duplicate records",
                "Changing monitor brightness",
                "Installing a graphics card",
                "Designing a keyboard"
              ],
              answer: "Removing duplicate records"
            },
            {
              question: "Where is data preparation commonly used?",
              options: [
                "Data analytics and machine learning",
                "Only computer hardware repair",
                "Only graphic design",
                "Only operating system installation"
              ],
              answer: "Data analytics and machine learning"
            }
          ]
        },
        {
          title: "Understanding Data Sources and Formats",
          content: `
Data can be collected from multiple sources.

Common data sources include:

1. Databases: Store structured information in tables.
2. CSV files: Store tabular data separated by commas or other delimiters.
3. Excel files: Store data in worksheets.
4. APIs: Provide information through application interfaces.
5. Websites: May provide information through web pages or downloadable datasets.
6. Sensors: Generate measurements such as temperature and humidity.
7. Surveys: Collect responses from individuals.

Data can also be classified by structure.

Structured data:
Data organized into predefined rows and columns, such as a relational database table.

Semi-structured data:
Data with organizational markers but without a fixed table structure, such as JSON and XML.

Unstructured data:
Data without a predefined tabular structure, such as images, audio, videos, and free-form documents.

Common data formats include:

- CSV
- XLSX
- JSON
- XML
- TXT
- Parquet

Different formats require different methods of reading and processing.

For example, Python's pandas library can read CSV files using read_csv() and Excel files using read_excel().

Understanding the source and format helps select the correct preparation method.
          `,
          quiz: [
            {
              question: "Which format commonly stores comma-separated tabular data?",
              options: ["CSV", "PNG", "MP3", "EXE"],
              answer: "CSV"
            },
            {
              question: "Which format is commonly used for semi-structured data?",
              options: ["JSON", "JPEG", "MP4", "WAV"],
              answer: "JSON"
            },
            {
              question: "Which is an example of structured data?",
              options: [
                "A relational database table",
                "A recorded audio file",
                "A photograph",
                "A video recording"
              ],
              answer: "A relational database table"
            },
            {
              question: "Which Python library is commonly used for tabular data preparation?",
              options: ["pandas", "pygame", "turtle", "tkinter"],
              answer: "pandas"
            },
            {
              question: "Which function reads a CSV file using pandas?",
              options: ["read_csv()", "read_image()", "open_video()", "create_table()"],
              answer: "read_csv()"
            }
          ]
        },
        {
          title: "Understanding Dataset Structure",
          content: `
Before cleaning a dataset, it is important to understand its structure.

A dataset generally contains rows and columns.

Rows represent individual observations or records.

Columns represent attributes or features.

Example:

student_id | name  | attendance | marks
1          | Ravi  | 85          | 90
2          | Priya | 92          | 88
3          | Arun  | 76          | 81

In this example:
- Each row represents a student.
- Attendance and marks are numerical features.
- Name is a text feature.
- student_id is an identifier.

Important dataset inspection activities include:

1. Checking the number of rows.
2. Checking the number of columns.
3. Identifying column names.
4. Understanding data types.
5. Checking sample records.
6. Finding missing values.
7. Checking unique values.

Using pandas:

import pandas as pd

df = pd.read_csv("students.csv")

print(df.head())
print(df.shape)
print(df.columns)
print(df.info())
print(df.describe())

head() displays the first few records.

shape returns the number of rows and columns.

columns displays column names.

info() provides information about data types and non-missing values.

describe() summarizes numerical columns by default.

Dataset inspection helps identify preparation requirements before making changes.
          `,
          quiz: [
            {
              question: "What does a row represent in a dataset?",
              options: [
                "An individual observation or record",
                "A database server",
                "A file extension",
                "A programming function"
              ],
              answer: "An individual observation or record"
            },
            {
              question: "What does df.shape return?",
              options: [
                "The number of rows and columns",
                "Only the column names",
                "Only duplicate records",
                "The dataset file location"
              ],
              answer: "The number of rows and columns"
            },
            {
              question: "What does df.head() display?",
              options: [
                "The first few rows",
                "The last database backup",
                "All missing values only",
                "The computer's memory usage"
              ],
              answer: "The first few rows"
            },
            {
              question: "Which pandas method provides column data type information?",
              options: ["info()", "drop()", "merge()", "sort_values()"],
              answer: "info()"
            },
            {
              question: "What does df.columns provide?",
              options: [
                "The column names",
                "The total number of files",
                "Only numerical values",
                "The number of duplicate rows"
              ],
              answer: "The column names"
            }
          ]
        },
        {
          title: "Data Types and Feature Identification",
          content: `
A feature is an individual attribute or variable in a dataset.

Correctly identifying feature types helps determine how data should be cleaned and transformed.

Common data categories include:

1. Numerical data:
Represents measurable quantities.

Examples:
- Age
- Salary
- Temperature
- Attendance percentage

Numerical data may be:
- Discrete: Countable values, such as number of students.
- Continuous: Measurable values, such as height or temperature.

2. Categorical data:
Represents groups or labels.

Examples:
- Department
- Gender category
- Product type
- City

Categorical data may be:
- Nominal: Categories without a natural order.
- Ordinal: Categories with an order, such as low, medium, and high.

3. Date and time data:
Represents calendar dates, times, or timestamps.

4. Boolean data:
Represents true or false values.

In Python, pandas provides dtypes to inspect column types.

Example:

print(df.dtypes)

A numerical column stored as text may need conversion.

Example:

df["marks"] = pd.to_numeric(
    df["marks"],
    errors="coerce"
)

Correct feature identification is important for selecting suitable cleaning, encoding, and scaling methods.
          `,
          quiz: [
            {
              question: "What is a feature in a dataset?",
              options: [
                "An attribute or variable",
                "A database password",
                "A computer processor",
                "A file compression method"
              ],
              answer: "An attribute or variable"
            },
            {
              question: "Which is an example of numerical data?",
              options: ["Temperature", "Department name", "City name", "Product category"],
              answer: "Temperature"
            },
            {
              question: "Which is an example of nominal categorical data?",
              options: [
                "City name",
                "Low, medium, high",
                "Temperature",
                "Salary"
              ],
              answer: "City name"
            },
            {
              question: "What does df.dtypes display?",
              options: [
                "Data types of dataset columns",
                "Only the first five rows",
                "Only duplicate records",
                "The number of database users"
              ],
              answer: "Data types of dataset columns"
            },
            {
              question: "Which function can convert values into numeric data?",
              options: [
                "pd.to_numeric()",
                "pd.read_image()",
                "pd.create_database()",
                "pd.sort_database()"
              ],
              answer: "pd.to_numeric()"
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: Data Cleaning",
      lessons: [
        {
          title: "Handling Missing Values",
          content: `
Missing values occur when information is unavailable for one or more records.

Example:

student_id | name  | marks
1          | Ravi  | 85
2          | Priya | NULL
3          | Arun  | 78

Priya's marks are missing.

Missing data can occur because of:
- Incomplete forms.
- Sensor failures.
- Data entry mistakes.
- Failed data collection.
- Missing information from external sources.

Common missing-value handling methods include:

1. Removing rows:
Useful when only a small number of records are missing and removal is justified.

2. Removing columns:
Useful when a column contains too much missing information and is not essential.

3. Mean imputation:
Replacing missing numerical values with the column mean.

4. Median imputation:
Replacing missing numerical values with the median.

5. Mode imputation:
Replacing missing categorical values with the most frequent value.

Using pandas:

df.isnull().sum()

This counts missing values in each column.

df.dropna()

This removes rows containing missing values by default.

df["marks"] = df["marks"].fillna(
    df["marks"].median()
)

This replaces missing marks with the median.

The correct method depends on the amount of missing data, the feature type, and the purpose of the analysis.

Do not automatically replace all missing values with zero because zero may have a real meaning.
          `,
          quiz: [
            {
              question: "What is a missing value?",
              options: [
                "An unavailable value in a dataset",
                "A duplicate database",
                "A numerical calculation",
                "A sorted record"
              ],
              answer: "An unavailable value in a dataset"
            },
            {
              question: "Which pandas method counts missing values?",
              options: ["isnull()", "sort_values()", "merge()", "rename()"],
              answer: "isnull()"
            },
            {
              question: "Which method removes rows containing missing values by default?",
              options: ["dropna()", "fillna()", "groupby()", "astype()"],
              answer: "dropna()"
            },
            {
              question: "Which measure is often useful for imputing numerical data with extreme values?",
              options: ["Median", "File size", "Column name", "Row number"],
              answer: "Median"
            },
            {
              question: "Why should missing values not always be replaced with zero?",
              options: [
                "Zero may represent a meaningful real value",
                "Zero always means duplicate data",
                "Zero cannot be stored in databases",
                "Zero automatically changes column names"
              ],
              answer: "Zero may represent a meaningful real value"
            }
          ]
        },
        {
          title: "Detecting and Removing Duplicate Records",
          content: `
Duplicate records are repeated entries in a dataset.

Example:

student_id | name  | marks
1          | Ravi  | 85
2          | Priya | 90
1          | Ravi  | 85

The first and third rows are identical.

Duplicates can occur because of:
- Repeated file imports.
- Multiple submissions.
- Data synchronization errors.
- Repeated API responses.
- Manual entry mistakes.

Duplicates may cause incorrect totals, counts, and analytical results.

Using pandas:

df.duplicated()

This identifies duplicate rows.

df.duplicated().sum()

This counts duplicate rows.

df.drop_duplicates()

This removes duplicate rows by default and returns a new DataFrame.

To identify duplicates based on selected columns:

df.duplicated(
    subset=["student_id"]
)

To remove duplicates based on student_id:

df.drop_duplicates(
    subset=["student_id"],
    keep="first"
)

The keep parameter controls which duplicate occurrence is retained.

Before removing duplicates, decide what makes two records duplicates.

Two records with the same student name may represent different students. Therefore, checking a unique identifier is often safer than checking only a name.
          `,
          quiz: [
            {
              question: "What is a duplicate record?",
              options: [
                "A repeated record in a dataset",
                "A missing column name",
                "A new data type",
                "A database relationship"
              ],
              answer: "A repeated record in a dataset"
            },
            {
              question: "Which pandas method identifies duplicate rows?",
              options: ["duplicated()", "fillna()", "describe()", "to_numeric()"],
              answer: "duplicated()"
            },
            {
              question: "Which pandas method removes duplicate rows?",
              options: ["drop_duplicates()", "dropna()", "head()", "info()"],
              answer: "drop_duplicates()"
            },
            {
              question: "What does subset do in drop_duplicates()?",
              options: [
                "Specifies columns used to identify duplicates",
                "Changes all values to zero",
                "Sorts the entire dataset",
                "Creates a new database"
              ],
              answer: "Specifies columns used to identify duplicates"
            },
            {
              question: "Why should duplicate detection use appropriate identifiers?",
              options: [
                "Different records may share the same non-unique value",
                "Every repeated name is always an error",
                "All numerical values must be unique",
                "Identifiers automatically remove missing values"
              ],
              answer: "Different records may share the same non-unique value"
            }
          ]
        },
        {
          title: "Correcting Inconsistent and Invalid Data",
          content: `
Inconsistent data occurs when the same information is represented in different ways.

For example, a department column may contain:

ECE
e.c.e
Electronics
ECE Department

These values may refer to the same department.

Invalid data includes values that do not satisfy expected rules.

Examples:
- Attendance percentage greater than 100.
- Negative age.
- Invalid email address.
- Incorrect date format.
- Marks outside the permitted range.

Data correction includes:

1. Standardizing category names.
2. Removing unnecessary spaces.
3. Correcting known formatting mistakes.
4. Validating allowed ranges.
5. Checking values against reference information.

Using pandas:

df["department"] = (
    df["department"]
    .str.strip()
    .str.upper()
)

This removes leading and trailing spaces and converts text to uppercase.

To replace a known inconsistent label:

df["department"] = df["department"].replace({
    "ELECTRONICS": "ECE",
    "E.C.E": "ECE"
})

To identify invalid attendance values:

invalid = df[
    (df["attendance"] < 0) |
    (df["attendance"] > 100)
]

Correction should preserve the actual meaning of the information.

Never change a value simply because it looks unusual. Verify it against reliable source information whenever possible.
          `,
          quiz: [
            {
              question: "What is inconsistent data?",
              options: [
                "The same information represented in different ways",
                "A dataset containing only numerical values",
                "A table with a primary key",
                "A database with no records"
              ],
              answer: "The same information represented in different ways"
            },
            {
              question: "Which pandas string method removes leading and trailing spaces?",
              options: ["strip()", "upper()", "count()", "replace()"],
              answer: "strip()"
            },
            {
              question: "Which method replaces known incorrect labels?",
              options: ["replace()", "describe()", "head()", "duplicated()"],
              answer: "replace()"
            },
            {
              question: "Which attendance value is outside a valid 0–100 range?",
              options: ["125", "75", "50", "0"],
              answer: "125"
            },
            {
              question: "What should guide data correction?",
              options: [
                "Reliable source information and validation rules",
                "Randomly changing unusual values",
                "Deleting every text column",
                "Replacing every value with zero"
              ],
              answer: "Reliable source information and validation rules"
            }
          ]
        },
        {
          title: "Outlier Detection and Treatment",
          content: `
An outlier is a data value that is unusually far from other observations.

Example:

Exam marks:
65, 70, 72, 75, 78, 80, 98

A value of 98 is high, but it is not necessarily an error. It may be a genuine result.

Outliers can occur because of:
- Measurement errors.
- Data entry mistakes.
- Unusual real-world events.
- Natural variation.
- Incorrect units.

One common detection method is the Interquartile Range method.

IQR = Q3 - Q1

Where:
- Q1 is the first quartile.
- Q3 is the third quartile.

Common lower and upper boundaries are:

Lower boundary = Q1 - 1.5 × IQR

Upper boundary = Q3 + 1.5 × IQR

Values outside these boundaries are often flagged for investigation.

Another method is the Z-score, which measures how far a value is from the mean in standard deviation units.

Outlier treatment may include:
- Correcting verified data errors.
- Retaining genuine unusual observations.
- Applying suitable transformations.
- Using robust statistical methods.
- Removing values only when justified.

Outliers should be investigated rather than automatically deleted.
          `,
          quiz: [
            {
              question: "What is an outlier?",
              options: [
                "A value unusually far from other observations",
                "A column with no name",
                "A repeated table",
                "A database password"
              ],
              answer: "A value unusually far from other observations"
            },
            {
              question: "What does IQR stand for?",
              options: [
                "Interquartile Range",
                "Internal Query Record",
                "Input Quality Result",
                "Indexed Query Relation"
              ],
              answer: "Interquartile Range"
            },
            {
              question: "How is IQR calculated?",
              options: [
                "Q3 minus Q1",
                "Q1 plus Q3",
                "Mean divided by median",
                "Maximum minus minimum"
              ],
              answer: "Q3 minus Q1"
            },
            {
              question: "What does a Z-score measure?",
              options: [
                "Distance from the mean in standard deviation units",
                "The number of columns in a dataset",
                "The number of duplicate records",
                "The file size of a dataset"
              ],
              answer: "Distance from the mean in standard deviation units"
            },
            {
              question: "What should be done with an unusual but valid observation?",
              options: [
                "Investigate it and retain it when appropriate",
                "Always delete it immediately",
                "Always replace it with zero",
                "Convert it into a column name"
              ],
              answer: "Investigate it and retain it when appropriate"
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: Data Transformation",
      lessons: [
        {
          title: "Data Transformation Fundamentals",
          content: `
Data transformation changes data into a format suitable for analysis or machine learning.

It may involve:
- Changing data types.
- Standardizing values.
- Converting units.
- Renaming columns.
- Creating new features.
- Combining datasets.
- Reshaping data.

Example:

A dataset stores marks as text:

"85", "90", "75"

These values can be converted into numeric data before calculating an average.

Using pandas:

df["marks"] = pd.to_numeric(
    df["marks"],
    errors="coerce"
)

A new feature can also be created.

df["percentage_category"] = df["marks"].apply(
    lambda x: "Pass" if x >= 40 else "Fail"
)

The example assumes that marks are already on a scale where 40 is the passing threshold.

Transformation should preserve the meaning of the data.

It is important to document transformations so that other developers and analysts can understand how the final dataset was created.
          `,
          quiz: [
            {
              question: "What is data transformation?",
              options: [
                "Changing data into a suitable format",
                "Deleting the entire database",
                "Installing a computer operating system",
                "Creating a network connection"
              ],
              answer: "Changing data into a suitable format"
            },
            {
              question: "Which operation is an example of transformation?",
              options: [
                "Converting text numbers into numeric values",
                "Changing monitor resolution",
                "Installing a printer",
                "Creating a computer account"
              ],
              answer: "Converting text numbers into numeric values"
            },
            {
              question: "What does errors='coerce' do in pd.to_numeric()?",
              options: [
                "Converts invalid numeric values to missing values",
                "Converts every value into a date",
                "Deletes the entire DataFrame",
                "Sorts numerical values"
              ],
              answer: "Converts invalid numeric values to missing values"
            },
            {
              question: "What is feature creation?",
              options: [
                "Creating a new variable from existing data",
                "Deleting all columns",
                "Changing a file extension",
                "Removing database permissions"
              ],
              answer: "Creating a new variable from existing data"
            },
            {
              question: "Why should transformations be documented?",
              options: [
                "To make processing understandable and reproducible",
                "To prevent all future data collection",
                "To increase the number of duplicate records",
                "To hide the original dataset"
              ],
              answer: "To make processing understandable and reproducible"
            }
          ]
        },
        {
          title: "Encoding Categorical Data",
          content: `
Machine learning algorithms often require numerical input.

Categorical data contains labels such as:
- ECE
- CSE
- Mechanical
- Civil

Encoding converts these categories into numerical representations.

Common methods include:

1. Label Encoding:
Assigns an integer to each category.

Example:
ECE = 0
CSE = 1
Mechanical = 2

This is suitable when the integer representation does not create an inappropriate interpretation of category order, or when the algorithm handles such encoding appropriately.

2. One-Hot Encoding:
Creates a separate binary column for each category.

Example:

Department | ECE | CSE | Mechanical
ECE        | 1   | 0   | 0
CSE        | 0   | 1   | 0

One-hot encoding avoids assigning an artificial numerical order to nominal categories.

Using pandas:

pd.get_dummies(
    df,
    columns=["department"]
)

This creates indicator columns for department categories.

For ordinal categories such as low, medium, and high, an explicitly defined ordered encoding may be appropriate.

Encoding should be selected according to the meaning of the feature and the machine learning algorithm.
          `,
          quiz: [
            {
              question: "Why is categorical encoding used?",
              options: [
                "To represent categories in numerical form",
                "To remove every numerical column",
                "To create duplicate databases",
                "To change the operating system"
              ],
              answer: "To represent categories in numerical form"
            },
            {
              question: "What does one-hot encoding create?",
              options: [
                "Separate binary columns for categories",
                "A single date column",
                "A database backup",
                "A sorted text file"
              ],
              answer: "Separate binary columns for categories"
            },
            {
              question: "Which pandas function can perform one-hot encoding?",
              options: ["get_dummies()", "read_csv()", "dropna()", "describe()"],
              answer: "get_dummies()"
            },
            {
              question: "Which type of category has a natural order?",
              options: ["Ordinal", "Nominal", "Unstructured", "Binary file"],
              answer: "Ordinal"
            },
            {
              question: "Why can simple integer encoding be unsuitable for nominal categories?",
              options: [
                "It may imply an artificial numerical order",
                "It always removes every category",
                "It prevents the dataset from being saved",
                "It converts categories into images"
              ],
              answer: "It may imply an artificial numerical order"
            }
          ]
        },
        {
          title: "Feature Scaling and Normalization",
          content: `
Feature scaling adjusts numerical features to comparable scales.

Consider a dataset containing:

Age: 18 to 30
Salary: 20000 to 100000

Salary values are much larger than age values.

Some machine learning algorithms are sensitive to feature scales.

Common scaling methods include:

1. Min-Max Scaling:
Transforms values into a specified range, commonly 0 to 1.

Formula:

x_scaled = (x - x_min) / (x_max - x_min)

2. Standardization:
Transforms values using the mean and standard deviation.

Formula:

z = (x - mean) / standard deviation

Standardization produces values centered around zero with unit variance when the standard deviation is nonzero.

3. Robust Scaling:
Uses the median and interquartile range. It can be useful when data contains outliers.

Python example:

from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

X_scaled = scaler.fit_transform(X)

Important practice:

Fit the scaler using training data only.

Then use the fitted scaler to transform validation and test data.

This prevents information from the evaluation datasets from influencing the training transformation.

Scaling is particularly useful for methods such as K-nearest neighbors, support vector machines, and many gradient-based algorithms.
          `,
          quiz: [
            {
              question: "What is feature scaling?",
              options: [
                "Adjusting numerical features to comparable scales",
                "Removing every row from a dataset",
                "Changing database passwords",
                "Converting images into videos"
              ],
              answer: "Adjusting numerical features to comparable scales"
            },
            {
              question: "What is a common output range of Min-Max Scaling?",
              options: ["0 to 1", "10 to 100", "-1000 to -500", "100 to 1000"],
              answer: "0 to 1"
            },
            {
              question: "Which values are used in standardization?",
              options: [
                "Mean and standard deviation",
                "Minimum and maximum file size",
                "Column names and row numbers",
                "Median and mode only"
              ],
              answer: "Mean and standard deviation"
            },
            {
              question: "Which scaler uses median and interquartile range?",
              options: ["RobustScaler", "StandardScaler", "LabelEncoder", "OneHotEncoder"],
              answer: "RobustScaler"
            },
            {
              question: "Why should a scaler be fitted only on training data?",
              options: [
                "To prevent evaluation data leakage",
                "To remove all training records",
                "To increase duplicate values",
                "To convert all features into text"
              ],
              answer: "To prevent evaluation data leakage"
            }
          ]
        },
        {
          title: "Combining and Reshaping Datasets",
          content: `
Data often comes from multiple files or tables.

Combining datasets brings related information together.

Common operations include:

1. Concatenation:
Adds datasets together along rows or columns.

2. Merge:
Combines datasets based on matching columns or keys.

3. Join:
Combines data using index or key relationships, depending on the method.

Using pandas:

pd.concat([df1, df2])

This concatenates DataFrames along rows by default.

To combine student and department datasets:

pd.merge(
    students,
    departments,
    on="department_id",
    how="inner"
)

Common merge types include:
- inner
- left
- right
- outer

Reshaping changes how data is organized.

Wide format:

student | math | science
Ravi    | 85   | 90

Long format:

student | subject | marks
Ravi    | math    | 85
Ravi    | science | 90

pandas provides melt() to convert wide data into long format.

It also provides pivot() and pivot_table() for creating wider summaries.

Combining and reshaping data makes it easier to analyze information from multiple sources.
          `,
          quiz: [
            {
              question: "What is the purpose of pd.concat()?",
              options: [
                "To concatenate DataFrames",
                "To delete missing values",
                "To create a database password",
                "To encode categories"
              ],
              answer: "To concatenate DataFrames"
            },
            {
              question: "Which pandas function combines DataFrames using matching keys?",
              options: ["merge()", "head()", "info()", "dropna()"],
              answer: "merge()"
            },
            {
              question: "Which merge type returns matching rows from both datasets?",
              options: ["inner", "left", "right", "outer"],
              answer: "inner"
            },
            {
              question: "What does melt() commonly do?",
              options: [
                "Converts wide-format data into long-format data",
                "Deletes all duplicate records",
                "Converts text into dates",
                "Creates a database index"
              ],
              answer: "Converts wide-format data into long-format data"
            },
            {
              question: "What does pivot_table() help create?",
              options: [
                "Summarized data arranged in a table",
                "A computer hardware configuration",
                "A database password",
                "A compressed image"
              ],
              answer: "Summarized data arranged in a table"
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: Validation and Practical Data Preparation",
      lessons: [
        {
          title: "Data Validation and Quality Checks",
          content: `
Data validation checks whether information satisfies expected rules.

A prepared dataset should be accurate, complete, consistent, and suitable for its intended use.

Important data quality dimensions include:

1. Accuracy: Values correctly represent real-world information.
2. Completeness: Required information is present.
3. Consistency: Information follows consistent formats and rules.
4. Validity: Values follow defined requirements.
5. Uniqueness: Records do not contain unintended duplicates.
6. Timeliness: Data is sufficiently current for its purpose.

Example validation rules for a student dataset:

- student_id must be present.
- student_id must be unique.
- marks must be between 0 and 100.
- attendance must be between 0 and 100.
- student_name must not be empty.

Using pandas:

assert df["student_id"].notna().all()

assert df["student_id"].is_unique

assert df["marks"].between(0, 100).all()

These checks help identify problems before analysis.

For more complex datasets, validation can also include allowed category lists, date ranges, cross-column rules, and relationships between tables.

Validation should be performed after cleaning and transformation and repeated when the dataset changes.
          `,
          quiz: [
            {
              question: "What is data validation?",
              options: [
                "Checking whether data satisfies defined rules",
                "Deleting every database",
                "Creating random records",
                "Changing computer settings"
              ],
              answer: "Checking whether data satisfies defined rules"
            },
            {
              question: "What does data completeness measure?",
              options: [
                "Whether required information is present",
                "Whether a file has a large size",
                "Whether all columns are alphabetical",
                "Whether a database has multiple users"
              ],
              answer: "Whether required information is present"
            },
            {
              question: "What does is_unique check?",
              options: [
                "Whether values are unique",
                "Whether values are numerical",
                "Whether every row is missing",
                "Whether columns are sorted"
              ],
              answer: "Whether values are unique"
            },
            {
              question: "What does between(0, 100) check?",
              options: [
                "Whether values fall within the specified range",
                "Whether a column contains only text",
                "Whether a file is compressed",
                "Whether all rows are duplicates"
              ],
              answer: "Whether values fall within the specified range"
            },
            {
              question: "Which quality dimension concerns consistent formats?",
              options: ["Consistency", "Timeliness", "Storage", "Compression"],
              answer: "Consistency"
            }
          ]
        },
        {
          title: "Data Leakage and Train-Test Preparation",
          content: `
Data leakage occurs when information that should not be available during model training influences the training process.

Leakage can produce misleading evaluation results.

A common example is using the complete dataset to calculate scaling parameters before splitting into training and test datasets.

The test dataset then influences the preprocessing step.

A safer workflow is:

1. Separate features and target.
2. Split the data into training and test sets.
3. Fit preprocessing steps using training data.
4. Apply the fitted transformations to test data.
5. Train and evaluate the model.

Example:

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X = df.drop(columns=["result"])
y = df["result"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)

X_test_scaled = scaler.transform(X_test)

The fit_transform() method learns parameters from training data and transforms it.

The transform() method applies those learned parameters to test data.

A scikit-learn Pipeline can combine preprocessing and model training steps into a consistent workflow.

Data leakage prevention is essential for trustworthy machine learning evaluation.
          `,
          quiz: [
            {
              question: "What is data leakage?",
              options: [
                "Using information that improperly influences model training or evaluation",
                "Removing duplicate records",
                "Changing column names",
                "Saving a CSV file"
              ],
              answer: "Using information that improperly influences model training or evaluation"
            },
            {
              question: "When should a scaler normally be fitted?",
              options: [
                "Using training data only",
                "Using test data only",
                "Using future unseen data",
                "Using the target labels as features"
              ],
              answer: "Using training data only"
            },
            {
              question: "What does train_test_split() do?",
              options: [
                "Splits data into training and testing subsets",
                "Removes all missing values",
                "Creates a database table",
                "Encodes categorical values"
              ],
              answer: "Splits data into training and testing subsets"
            },
            {
              question: "What does transform() do after a scaler is fitted?",
              options: [
                "Applies the learned transformation",
                "Learns new parameters from the test dataset",
                "Deletes the test dataset",
                "Creates a new target column"
              ],
              answer: "Applies the learned transformation"
            },
            {
              question: "Why is data leakage dangerous?",
              options: [
                "It can produce misleading evaluation results",
                "It always removes duplicate records",
                "It prevents datasets from being loaded",
                "It changes the computer's operating system"
              ],
              answer: "It can produce misleading evaluation results"
            }
          ]
        },
        {
          title: "Saving, Exporting, and Documenting Prepared Data",
          content: `
After preparing a dataset, it should be saved in a suitable format.

Common output formats include:
- CSV
- Excel
- JSON
- Parquet
- Database tables

Using pandas:

df.to_csv(
    "prepared_students.csv",
    index=False
)

This saves a DataFrame as a CSV file without writing the DataFrame index as an additional column.

To save an Excel file:

df.to_excel(
    "prepared_students.xlsx",
    index=False
)

To save JSON:

df.to_json(
    "prepared_students.json",
    orient="records"
)

Documentation should describe:
- Original data source.
- Preparation steps.
- Missing-value handling.
- Duplicate-removal rules.
- Data type conversions.
- Transformation methods.
- Validation results.
- Final output location.

Versioning and keeping an unchanged copy of the original dataset help make the process reproducible.

For larger datasets, formats such as Parquet can provide efficient storage and support column-oriented data processing.

The prepared dataset should be checked again after saving to confirm that the expected columns, values, and data types are preserved.
          `,
          quiz: [
            {
              question: "Which pandas method saves a DataFrame as CSV?",
              options: ["to_csv()", "read_csv()", "dropna()", "merge()"],
              answer: "to_csv()"
            },
            {
              question: "What does index=False do in to_csv()?",
              options: [
                "Prevents the DataFrame index from being written as a column",
                "Deletes all rows",
                "Removes all numerical values",
                "Changes the file into JSON"
              ],
              answer: "Prevents the DataFrame index from being written as a column"
            },
            {
              question: "Which pandas method saves a DataFrame as Excel?",
              options: ["to_excel()", "to_csv()", "head()", "info()"],
              answer: "to_excel()"
            },
            {
              question: "Why should preparation steps be documented?",
              options: [
                "To make the process understandable and reproducible",
                "To prevent future dataset inspection",
                "To remove every original data source",
                "To increase the number of columns"
              ],
              answer: "To make the process understandable and reproducible"
            },
            {
              question: "Why should the saved dataset be checked?",
              options: [
                "To confirm that expected data was preserved",
                "To automatically create a machine learning model",
                "To delete the original source",
                "To change the database password"
              ],
              answer: "To confirm that expected data was preserved"
            }
          ]
        },
        {
          title: "Final Project: Prepare a Student Performance Dataset",
          content: `
In this project, you will prepare a student performance dataset for analysis.

Project objective:

Create a clean dataset containing student information, attendance, marks, and department details.

Step 1: Load the dataset.

import pandas as pd

df = pd.read_csv("student_performance.csv")

Step 2: Inspect the dataset.

print(df.head())
print(df.shape)
print(df.info())
print(df.isnull().sum())

Step 3: Remove unnecessary spaces from column names.

df.columns = df.columns.str.strip()

Step 4: Remove duplicate records.

df = df.drop_duplicates()

Step 5: Convert numerical columns.

df["marks"] = pd.to_numeric(
    df["marks"],
    errors="coerce"
)

df["attendance"] = pd.to_numeric(
    df["attendance"],
    errors="coerce"
)

Step 6: Handle missing numerical values.

df["marks"] = df["marks"].fillna(
    df["marks"].median()
)

df["attendance"] = df["attendance"].fillna(
    df["attendance"].median()
)

Step 7: Standardize department names.

df["department"] = (
    df["department"]
    .astype("string")
    .str.strip()
    .str.upper()
)

Step 8: Check valid ranges.

invalid_marks = df[
    ~df["marks"].between(0, 100)
]

invalid_attendance = df[
    ~df["attendance"].between(0, 100)
]

Investigate these records before deciding how to correct them.

Step 9: Validate the prepared dataset.

print(df.isnull().sum())
print(df.duplicated().sum())
print(df.describe())

Step 10: Save the prepared dataset.

df.to_csv(
    "prepared_student_performance.csv",
    index=False
)

Final project deliverables:

- Original dataset.
- Prepared dataset.
- Data cleaning script.
- Missing-value summary.
- Duplicate detection results.
- Data validation results.
- Short documentation describing each preparation step.

Important:

The example assumes that marks and attendance use a 0–100 scale. Verify the actual dataset rules before applying those limits.

This project demonstrates a practical data preparation workflow using Python and pandas.
          `,
          quiz: [
            {
              question: "What is the first step in the student performance project?",
              options: [
                "Load the dataset",
                "Delete the original dataset",
                "Train a model immediately",
                "Create random student records"
              ],
              answer: "Load the dataset"
            },
            {
              question: "Which method removes duplicate records?",
              options: ["drop_duplicates()", "fillna()", "to_csv()", "describe()"],
              answer: "drop_duplicates()"
            },
            {
              question: "Which method can convert marks into numerical values?",
              options: ["pd.to_numeric()", "pd.get_dummies()", "pd.concat()", "pd.melt()"],
              answer: "pd.to_numeric()"
            },
            {
              question: "Which method is used to save the prepared dataset?",
              options: ["to_csv()", "head()", "info()", "isnull()"],
              answer: "to_csv()"
            },
            {
              question: "What is the final goal of this project?",
              options: [
                "Produce a clean and validated student dataset",
                "Create a computer operating system",
                "Replace the database server",
                "Build a network router"
              ],
              answer: "Produce a clean and validated student dataset"
            }
          ]
        }
      ]
    }
  ]
};

export default dataPreparationCourse;
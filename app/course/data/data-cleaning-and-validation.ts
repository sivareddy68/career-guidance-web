
export const dataCleaningAndValidationCourse = {
  title: "Data Cleaning and Validation",
  description:
    "Learn how to identify, clean, validate, and organize inaccurate, incomplete, duplicated, and inconsistent datasets using practical data-cleaning techniques.",
  project:
    "Create a Clean Student Records Dataset by identifying and correcting missing values, duplicate records, inconsistent formats, invalid entries, and validation errors. Prepare a final quality-checked dataset.",

  weeks: [
    {
      title: "Week 1: Introduction to Data Cleaning",
      description:
        "Understand data quality, common data problems, and the importance of preparing reliable datasets.",
      assignment:
        "Take a sample student dataset and identify missing values, duplicate records, inconsistent entries, and incorrect formats.",

      lessons: [
        {
          title: "Introduction to Data Cleaning",
          duration: "30 minutes",
          introduction:
            "Data cleaning is the process of identifying and correcting inaccurate, incomplete, duplicated, and inconsistent information. Clean data helps analysts produce reliable reports and make better decisions.",

          sections: [
            {
              heading: "What is Data Cleaning?",
              content:
                "Data cleaning involves examining a dataset and correcting problems that affect its quality. It includes removing duplicates, handling missing values, correcting spelling mistakes, and standardizing formats.",
            },
            {
              heading: "Why is Data Cleaning Important?",
              content:
                "Incorrect data can produce misleading results. Clean data improves accuracy, consistency, reliability, and the quality of business decisions.",
            },
            {
              heading: "Common Data Problems",
              content:
                "Common problems include missing values, duplicate records, incorrect spellings, invalid dates, inconsistent capitalization, and incorrect numerical values.",
            },
          ],

          example:
            "Original data:\nName: Rahul\nAge: 20\nCity: Hyderabad\n\nProblematic data:\nName: rahul\nAge: -5\nCity: hyderbad\n\nCleaning tasks:\nStandardize the name, investigate the invalid age, and correct the city spelling after verification.",

          exercise:
            "Create a small table containing 10 student records. Intentionally include spelling mistakes, missing entries, and duplicate records. Identify each problem.",

          quiz: [
            {
              question: "What is the main purpose of data cleaning?",
              options: [
                "Improve data quality",
                "Increase file size",
                "Create animations",
                "Delete all records",
              ],
              answer: "Improve data quality",
              explanation:
                "Data cleaning improves accuracy, consistency, and reliability.",
            },
            {
              question: "Which is an example of a data quality problem?",
              options: [
                "Missing values",
                "Clear column headings",
                "Correct calculations",
                "Consistent formatting",
              ],
              answer: "Missing values",
              explanation:
                "Missing values mean that expected information is absent.",
            },
            {
              question: "What can duplicate records cause?",
              options: [
                "Incorrect counts",
                "Better accuracy",
                "Automatic formatting",
                "Smaller column widths",
              ],
              answer: "Incorrect counts",
              explanation:
                "Duplicates can cause records to be counted more than once.",
            },
            {
              question: "Which activity belongs to data cleaning?",
              options: [
                "Correcting spelling errors",
                "Adding slide transitions",
                "Changing screen brightness",
                "Creating animations",
              ],
              answer: "Correcting spelling errors",
              explanation:
                "Correcting spelling errors helps maintain consistent data.",
            },
            {
              question: "What is a dataset?",
              options: [
                "A collection of related data",
                "A computer keyboard",
                "A presentation theme",
                "A programming font",
              ],
              answer: "A collection of related data",
              explanation:
                "A dataset is an organized collection of related information.",
            },
          ],
        },

        {
          title: "Understanding Data Quality",
          duration: "30 minutes",
          introduction:
            "Data quality describes how suitable data is for its intended purpose. High-quality data should be accurate, complete, consistent, valid, and unique where required.",

          sections: [
            {
              heading: "Accuracy",
              content:
                "Accuracy means that information correctly represents the real-world value. For example, a student's actual age should be recorded correctly.",
            },
            {
              heading: "Completeness",
              content:
                "Completeness means that required information is available. Missing student names or registration numbers can reduce completeness.",
            },
            {
              heading: "Consistency and Validity",
              content:
                "Consistency means that information follows the same conventions. Validity means that values follow defined rules, such as a percentage being between 0 and 100.",
            },
          ],

          example:
            "A student dataset contains marks of 85, 92, and 140. If marks are limited to 100, the value 140 violates the expected range.",

          exercise:
            "Create five examples of inaccurate, incomplete, inconsistent, and invalid data. Classify each example.",

          quiz: [
            {
              question: "What does data accuracy mean?",
              options: [
                "Information is correct",
                "Information is duplicated",
                "Information is always empty",
                "Information is randomly arranged",
              ],
              answer: "Information is correct",
              explanation:
                "Accuracy measures whether recorded values correctly represent reality.",
            },
            {
              question: "Which dimension concerns missing information?",
              options: [
                "Completeness",
                "Color consistency",
                "File compression",
                "Visualization",
              ],
              answer: "Completeness",
              explanation:
                "Completeness concerns whether required data is present.",
            },
            {
              question: "A marks value of 150 when the maximum is 100 violates which dimension?",
              options: [
                "Validity",
                "Font size",
                "File naming",
                "Screen resolution",
              ],
              answer: "Validity",
              explanation:
                "The value does not satisfy the defined marks range.",
            },
            {
              question: "What does consistency mean in a dataset?",
              options: [
                "Values follow common conventions",
                "Every value is different",
                "All records are removed",
                "Data has no column names",
              ],
              answer: "Values follow common conventions",
              explanation:
                "Consistent data uses the same formats and conventions.",
            },
            {
              question: "Why should data quality be checked?",
              options: [
                "To support reliable analysis",
                "To make records longer",
                "To hide incorrect values",
                "To remove every column",
              ],
              answer: "To support reliable analysis",
              explanation:
                "Reliable data helps produce trustworthy analysis.",
            },
          ],
        },

        {
          title: "Identifying Missing Values",
          duration: "35 minutes",
          introduction:
            "Missing values occur when information is not recorded or is unavailable. They can affect calculations, reports, and analysis if they are not handled appropriately.",

          sections: [
            {
              heading: "Types of Missing Values",
              content:
                "Missing values may appear as empty cells, NULL values, blank strings, or special placeholders such as N/A. These representations should be identified before analysis.",
            },
            {
              heading: "Finding Missing Values",
              content:
                "In spreadsheets, filters and conditional formatting can help identify blank cells. In Python, pandas provides isna() and isnull() to detect missing values.",
            },
            {
              heading: "Handling Missing Values",
              content:
                "Depending on the situation, missing values may be filled using verified information, suitable statistical values, or left missing with a clear explanation. Removing records should be done carefully.",
            },
          ],

          example:
            "Student | Age | Marks\nAsha | 20 | 85\nRavi | blank | 78\nMeena | 21 | blank\n\nThe age and marks fields need investigation before analysis.",

          exercise:
            "Create a dataset with 10 records and at least three missing values. Identify their locations and suggest an appropriate handling method for each.",

          quiz: [
            {
              question: "What is a missing value?",
              options: [
                "An absent data entry",
                "A duplicated row",
                "A sorted record",
                "A valid calculation",
              ],
              answer: "An absent data entry",
              explanation:
                "A missing value represents information that has not been recorded or is unavailable.",
            },
            {
              question: "Which pandas method detects missing values?",
              options: [
                "isna()",
                "sort_values()",
                "groupby()",
                "rename()",
              ],
              answer: "isna()",
              explanation:
                "isna() identifies missing values in pandas objects.",
            },
            {
              question: "What does a blank spreadsheet cell potentially represent?",
              options: [
                "Missing information",
                "A duplicate column",
                "A completed calculation",
                "A chart title",
              ],
              answer: "Missing information",
              explanation:
                "A blank cell may indicate that a value has not been entered.",
            },
            {
              question: "What should be considered before filling missing values?",
              options: [
                "The meaning of the missing data",
                "The computer wallpaper",
                "The worksheet color",
                "The monitor size",
              ],
              answer: "The meaning of the missing data",
              explanation:
                "The correct treatment depends on why the information is missing and what it represents.",
            },
            {
              question: "Which method can help find blank cells in Excel?",
              options: [
                "Filtering",
                "Slide transitions",
                "Page animation",
                "Audio recording",
              ],
              answer: "Filtering",
              explanation:
                "Filters can help display records with blank fields.",
            },
          ],
        },

        {
          title: "Finding Duplicate Records",
          duration: "35 minutes",
          introduction:
            "Duplicate records occur when the same information appears more than once. They can distort totals, counts, and analysis. Identifying duplicates requires selecting suitable fields for comparison.",

          sections: [
            {
              heading: "What are Duplicates?",
              content:
                "A duplicate is a repeated record or repeated combination of values. Two records may have the same student ID even if other fields differ.",
            },
            {
              heading: "Finding Duplicates in Excel",
              content:
                "Excel provides Conditional Formatting and Remove Duplicates tools. Before removing records, identify which columns determine whether a record is genuinely duplicated.",
            },
            {
              heading: "Finding Duplicates in Python",
              content:
                "Pandas provides duplicated() to identify repeated records and drop_duplicates() to remove them. The subset parameter can specify which columns should be compared.",
            },
          ],

          example:
            "Student ID | Name\n101 | Ravi\n102 | Asha\n101 | Ravi\n\nStudent ID 101 appears twice.",

          exercise:
            "Create a dataset containing 15 student records with three duplicate records. Identify the duplicates and explain which columns you used to compare them.",

          quiz: [
            {
              question: "What is a duplicate record?",
              options: [
                "A repeated record",
                "A missing column",
                "A new worksheet",
                "A chart category",
              ],
              answer: "A repeated record",
              explanation:
                "Duplicate records repeat information that has already been recorded.",
            },
            {
              question: "Which pandas method identifies duplicate rows?",
              options: [
                "duplicated()",
                "isna()",
                "describe()",
                "head()",
              ],
              answer: "duplicated()",
              explanation:
                "duplicated() returns indicators for duplicate records.",
            },
            {
              question: "Which Excel feature can identify repeated values visually?",
              options: [
                "Conditional Formatting",
                "Page Layout",
                "Print Preview",
                "Freeze Panes",
              ],
              answer: "Conditional Formatting",
              explanation:
                "Conditional Formatting can highlight duplicate values.",
            },
            {
              question: "What should be checked before removing duplicates?",
              options: [
                "Which fields define a duplicate",
                "The worksheet background",
                "The computer model",
                "The font family only",
              ],
              answer: "Which fields define a duplicate",
              explanation:
                "A duplicate should be defined using appropriate identifying fields.",
            },
            {
              question: "Which pandas method removes duplicate rows?",
              options: [
                "drop_duplicates()",
                "fillna()",
                "isnull()",
                "value_counts()",
              ],
              answer: "drop_duplicates()",
              explanation:
                "drop_duplicates() removes duplicate records from a DataFrame.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Correcting and Standardizing Data",
      description:
        "Learn to correct incorrect entries, standardize text and dates, and handle inconsistent data formats.",
      assignment:
        "Clean a sample customer or student dataset by standardizing names, dates, categories, and numerical formats.",

      lessons: [
        {
          title: "Correcting Text and Spelling Errors",
          duration: "30 minutes",
          introduction:
            "Text errors include misspelled words, unwanted spaces, inconsistent capitalization, and incorrect category names. These problems can cause the same category to appear as multiple different values.",

          sections: [
            {
              heading: "Common Text Errors",
              content:
                "Examples include 'Hyderabad', 'hyderabad', and 'Hydrabad'. Some entries may contain extra spaces or unwanted characters.",
            },
            {
              heading: "Cleaning Text in Excel",
              content:
                "Excel provides TRIM to remove extra spaces, CLEAN to remove certain non-printing characters, and PROPER, UPPER, and LOWER to standardize capitalization.",
            },
            {
              heading: "Cleaning Text in Python",
              content:
                "Python string methods include strip(), lower(), upper(), and replace(). Pandas supports text operations using the str accessor.",
            },
          ],

          example:
            "Original: '  HYDERABAD  '\nTRIM result: 'HYDERABAD'\nLOWER result: 'hyderabad'\nPROPER result: 'Hyderabad'",

          exercise:
            "Prepare a column of 10 city names containing extra spaces and inconsistent capitalization. Standardize the values.",

          quiz: [
            {
              question: "Which Excel function removes extra spaces?",
              options: [
                "TRIM",
                "SUM",
                "COUNT",
                "ROUND",
              ],
              answer: "TRIM",
              explanation:
                "TRIM removes unnecessary spaces from text.",
            },
            {
              question: "Which Excel function converts text to uppercase?",
              options: [
                "UPPER",
                "LOWER",
                "PROPER",
                "AVERAGE",
              ],
              answer: "UPPER",
              explanation:
                "UPPER converts text into uppercase letters.",
            },
            {
              question: "Which Python method removes surrounding whitespace?",
              options: [
                "strip()",
                "append()",
                "sort()",
                "reverse()",
              ],
              answer: "strip()",
              explanation:
                "strip() removes leading and trailing whitespace.",
            },
            {
              question: "Why should spelling variations be corrected?",
              options: [
                "To maintain consistent categories",
                "To increase duplicate errors",
                "To remove column headings",
                "To change data types randomly",
              ],
              answer: "To maintain consistent categories",
              explanation:
                "Consistent category names prevent one category from being split into multiple labels.",
            },
            {
              question: "Which Excel function removes certain non-printing characters?",
              options: [
                "CLEAN",
                "MAX",
                "MIN",
                "LEFT",
              ],
              answer: "CLEAN",
              explanation:
                "CLEAN removes many non-printing characters from text.",
            },
          ],
        },

        {
          title: "Standardizing Date and Time Formats",
          duration: "35 minutes",
          introduction:
            "Dates and times may be stored in different formats. Standardization makes them easier to compare, sort, filter, and analyze.",

          sections: [
            {
              heading: "Common Date Formats",
              content:
                "Examples include DD-MM-YYYY, MM-DD-YYYY, and YYYY-MM-DD. These formats can be confused if the expected order is not clear.",
            },
            {
              heading: "Date Cleaning in Excel",
              content:
                "Excel provides DATE, DATEVALUE, and TEXT functions for working with dates. Cell formatting can change how a date is displayed, but it does not always change the underlying stored value.",
            },
            {
              heading: "Date Cleaning in Python",
              content:
                "Pandas provides to_datetime() for converting suitable values into datetime objects. The format parameter can help specify the expected input format.",
            },
          ],

          example:
            "Original date: 15/10/2026\nStandardized date: 2026-10-15\n\nAlways verify whether the original format uses day-first or month-first ordering.",

          exercise:
            "Create a column with 10 dates in different formats. Identify ambiguous dates and standardize the entries after confirming their intended meaning.",

          quiz: [
            {
              question: "Which pandas function converts values to datetime?",
              options: [
                "to_datetime()",
                "drop_duplicates()",
                "fillna()",
                "value_counts()",
              ],
              answer: "to_datetime()",
              explanation:
                "to_datetime() converts suitable values into datetime objects.",
            },
            {
              question: "Why should date formats be standardized?",
              options: [
                "To support reliable sorting and comparison",
                "To increase missing values",
                "To remove all dates",
                "To change dates into images",
              ],
              answer: "To support reliable sorting and comparison",
              explanation:
                "Consistent date formats make date operations more reliable.",
            },
            {
              question: "Which format places the year first?",
              options: [
                "YYYY-MM-DD",
                "DD-MM-YYYY",
                "MM-DD-YYYY",
                "DD-YYYY-MM",
              ],
              answer: "YYYY-MM-DD",
              explanation:
                "YYYY-MM-DD places the four-digit year before month and day.",
            },
            {
              question: "What can happen when day-first and month-first formats are confused?",
              options: [
                "Dates may be interpreted incorrectly",
                "All numbers become text automatically",
                "Duplicate rows disappear",
                "Column names are deleted",
              ],
              answer: "Dates may be interpreted incorrectly",
              explanation:
                "An ambiguous date can represent different calendar dates depending on its ordering.",
            },
            {
              question: "Which Excel function can convert recognizable date text into a date value?",
              options: [
                "DATEVALUE",
                "COUNTIF",
                "CONCAT",
                "UPPER",
              ],
              answer: "DATEVALUE",
              explanation:
                "DATEVALUE converts recognizable date text into an Excel date serial value.",
            },
          ],
        },

        {
          title: "Standardizing Numerical Data",
          duration: "35 minutes",
          introduction:
            "Numerical data may contain currency symbols, commas, decimal differences, or values stored as text. Standardizing these values helps calculations work correctly.",

          sections: [
            {
              heading: "Numbers Stored as Text",
              content:
                "A number stored as text may not behave like a numeric value in calculations. Excel can identify many such entries, and Python can convert suitable values using numeric conversion methods.",
            },
            {
              heading: "Decimal and Currency Formats",
              content:
                "A dataset should use a consistent decimal convention and clearly identify its currency. Values from different currencies should not be combined without an appropriate conversion.",
            },
            {
              heading: "Numerical Conversion in Python",
              content:
                "Pandas provides to_numeric() to convert suitable values into numeric data types. The errors parameter can control how invalid values are handled.",
            },
          ],

          example:
            "Original values: '100', '250', '300'\nAfter numeric conversion: 100, 250, 300\n\nThe converted values can now be used in numerical calculations.",

          exercise:
            "Create a dataset with numerical values stored as text, currency symbols, and inconsistent decimal places. Standardize and convert the values.",

          quiz: [
            {
              question: "Which pandas function converts suitable values into numeric types?",
              options: [
                "to_numeric()",
                "to_datetime()",
                "dropna()",
                "duplicated()",
              ],
              answer: "to_numeric()",
              explanation:
                "to_numeric() converts suitable values into numeric data.",
            },
            {
              question: "Why should numbers stored as text be identified?",
              options: [
                "They may not work correctly in calculations",
                "They automatically remove duplicates",
                "They create charts without data",
                "They always represent dates",
              ],
              answer: "They may not work correctly in calculations",
              explanation:
                "Text values may not behave as numeric values in calculations.",
            },
            {
              question: "What should be checked before combining currency values?",
              options: [
                "Whether the currencies are comparable",
                "Whether the font is bold",
                "Whether the worksheet is hidden",
                "Whether the column is colored",
              ],
              answer: "Whether the currencies are comparable",
              explanation:
                "Different currencies require a suitable conversion before comparison or addition.",
            },
            {
              question: "What does numeric standardization improve?",
              options: [
                "Consistency of numerical values",
                "Image quality",
                "Audio volume",
                "Screen resolution",
              ],
              answer: "Consistency of numerical values",
              explanation:
                "Standardization gives numerical values a consistent representation.",
            },
            {
              question: "Which Excel feature can help identify numbers stored as text?",
              options: [
                "Error indicators",
                "Page transitions",
                "Slide animations",
                "Workbook themes only",
              ],
              answer: "Error indicators",
              explanation:
                "Excel can display indicators for some numbers stored as text.",
            },
          ],
        },

        {
          title: "Handling Inconsistent Categories",
          duration: "35 minutes",
          introduction:
            "Categorical data contains labels such as department, city, gender category, or product type. Inconsistent labels can split one logical group into multiple categories.",

          sections: [
            {
              heading: "Category Inconsistency",
              content:
                "Values such as 'ECE', 'E.C.E', and 'Electronics' might refer to the same department in a particular dataset. The intended meaning must be verified before standardization.",
            },
            {
              heading: "Using Find and Replace",
              content:
                "Excel Find and Replace can update known variations. Changes should be checked carefully to avoid replacing text that has a different meaning.",
            },
            {
              heading: "Category Mapping",
              content:
                "A mapping table can connect original labels to approved category names. Pandas replace() and map() can apply such mappings.",
            },
          ],

          example:
            "Original: ECE, E.C.E, Electronics\nApproved label: ECE\n\nUse the approved label only after confirming that the original entries refer to the same category.",

          exercise:
            "Create 15 department records with different spellings and abbreviations. Build a mapping table and standardize the categories.",

          quiz: [
            {
              question: "What is categorical data?",
              options: [
                "Data representing groups or labels",
                "Only decimal numbers",
                "Only calendar dates",
                "Computer hardware information",
              ],
              answer: "Data representing groups or labels",
              explanation:
                "Categorical data represents groups, classes, or labels.",
            },
            {
              question: "Which Excel tool can replace known text variations?",
              options: [
                "Find and Replace",
                "Page Break Preview",
                "Freeze Panes",
                "Print Area",
              ],
              answer: "Find and Replace",
              explanation:
                "Find and Replace can update known text variations.",
            },
            {
              question: "What is a category mapping table used for?",
              options: [
                "Connect original labels to approved labels",
                "Calculate screen resolution",
                "Create random passwords",
                "Delete every category",
              ],
              answer: "Connect original labels to approved labels",
              explanation:
                "A mapping table defines how original labels correspond to standardized categories.",
            },
            {
              question: "Which pandas method can replace known category values?",
              options: [
                "replace()",
                "head()",
                "tail()",
                "info()",
              ],
              answer: "replace()",
              explanation:
                "replace() substitutes specified values with other values.",
            },
            {
              question: "Why should category corrections be verified?",
              options: [
                "Different labels may have different meanings",
                "Every category is always identical",
                "Verification changes the screen size",
                "Categories cannot contain text",
              ],
              answer: "Different labels may have different meanings",
              explanation:
                "Incorrectly merging different categories can change the meaning of the data.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Data Validation and Error Detection",
      description:
        "Learn how to apply validation rules, identify outliers, check data types, and detect incorrect values.",
      assignment:
        "Build a validation checklist for a student dataset and identify invalid IDs, marks, dates, and data types.",

      lessons: [
        {
          title: "Introduction to Data Validation",
          duration: "30 minutes",
          introduction:
            "Data validation checks whether entered values follow predefined rules. It helps prevent invalid or unsuitable data from entering a dataset.",

          sections: [
            {
              heading: "What is Data Validation?",
              content:
                "Data validation checks values against rules such as allowed ranges, required formats, permitted categories, and required fields.",
            },
            {
              heading: "Validation Rules",
              content:
                "Examples include marks between 0 and 100, required student IDs, valid date ranges, and department names selected from an approved list.",
            },
            {
              heading: "Validation in Excel",
              content:
                "Excel Data Validation can restrict entries using whole numbers, decimal ranges, dates, text lengths, and dropdown lists.",
            },
          ],

          example:
            "Rule: Marks must be between 0 and 100.\nValid: 85\nValid: 0\nInvalid: 120\nInvalid: -5",

          exercise:
            "Create an Excel student form with validation rules for student ID, age, marks, department, and admission date.",

          quiz: [
            {
              question: "What is the purpose of data validation?",
              options: [
                "Check whether values follow defined rules",
                "Create duplicate records",
                "Increase file size",
                "Remove every column",
              ],
              answer: "Check whether values follow defined rules",
              explanation:
                "Data validation checks whether entries satisfy specified requirements.",
            },
            {
              question: "Which Excel feature restricts cell entries?",
              options: [
                "Data Validation",
                "WordArt",
                "Page Borders",
                "Print Titles",
              ],
              answer: "Data Validation",
              explanation:
                "Data Validation can restrict the values entered into cells.",
            },
            {
              question: "If marks must be between 0 and 100, which value is invalid?",
              options: [
                "120",
                "85",
                "50",
                "0",
              ],
              answer: "120",
              explanation:
                "120 exceeds the permitted maximum of 100.",
            },
            {
              question: "What is a dropdown validation list used for?",
              options: [
                "Allow selection from approved values",
                "Automatically delete the worksheet",
                "Change the operating system",
                "Increase image resolution",
              ],
              answer: "Allow selection from approved values",
              explanation:
                "A dropdown list limits selections to the supplied options.",
            },
            {
              question: "Which is an example of a validation rule?",
              options: [
                "Age must be a positive whole number",
                "Every name must have a different font",
                "Every row must be colored blue",
                "All worksheets must be hidden",
              ],
              answer: "Age must be a positive whole number",
              explanation:
                "The rule defines which age values are acceptable.",
            },
          ],
        },

        {
          title: "Applying Range and Format Validation",
          duration: "35 minutes",
          introduction:
            "Range and format validation ensure that values stay within acceptable limits and follow the expected structure. These checks are especially useful for IDs, dates, percentages, and numerical measurements.",

          sections: [
            {
              heading: "Range Validation",
              content:
                "Range validation checks whether a number falls between a minimum and maximum value. For example, examination marks may be restricted to 0 through 100.",
            },
            {
              heading: "Format Validation",
              content:
                "Format validation checks whether information follows an expected pattern. Examples include date formats, postal codes, and identification numbers.",
            },
            {
              heading: "Custom Validation",
              content:
                "Custom rules can check conditions that are not covered by basic dropdown or range settings. Excel supports custom formulas in Data Validation.",
            },
          ],

          example:
            "Student marks: 0 to 100\nStudent age: 15 to 100 (example rule requiring confirmation)\nAdmission date: Must fall within the approved admission period.",

          exercise:
            "Design five validation rules for a student registration form. Test both valid and invalid entries.",

          quiz: [
            {
              question: "What does range validation check?",
              options: [
                "Whether a value falls within permitted limits",
                "Whether a chart has a title",
                "Whether a file has an image",
                "Whether text is bold",
              ],
              answer: "Whether a value falls within permitted limits",
              explanation:
                "Range validation checks minimum and maximum boundaries.",
            },
            {
              question: "Which validation is suitable for a fixed set of departments?",
              options: [
                "List validation",
                "Image validation",
                "Audio validation",
                "Color validation",
              ],
              answer: "List validation",
              explanation:
                "List validation allows selection from predefined department names.",
            },
            {
              question: "What does format validation examine?",
              options: [
                "Whether data follows an expected structure",
                "Whether a computer has enough RAM",
                "Whether a chart is animated",
                "Whether a workbook has a theme",
              ],
              answer: "Whether data follows an expected structure",
              explanation:
                "Format validation checks whether values match expected patterns or representations.",
            },
            {
              question: "Which Excel feature supports custom validation formulas?",
              options: [
                "Data Validation",
                "Page Setup",
                "Spell Check",
                "Print Preview",
              ],
              answer: "Data Validation",
              explanation:
                "Data Validation supports custom formulas for checking cell entries.",
            },
            {
              question: "Why should validation rules be tested?",
              options: [
                "To confirm valid and invalid entries behave correctly",
                "To remove all records",
                "To make every value identical",
                "To hide every formula",
              ],
              answer: "To confirm valid and invalid entries behave correctly",
              explanation:
                "Testing verifies that the rules accept suitable entries and reject unsuitable ones.",
            },
          ],
        },

        {
          title: "Detecting Outliers and Unusual Values",
          duration: "40 minutes",
          introduction:
            "Outliers are observations that differ substantially from other values in a dataset. They may represent errors, unusual events, or genuine observations that require further investigation.",

          sections: [
            {
              heading: "Understanding Outliers",
              content:
                "An unusually high or low value may be an outlier. However, an outlier is not automatically an error. It should be investigated using the context of the data.",
            },
            {
              heading: "Interquartile Range",
              content:
                "The interquartile range is the difference between the third quartile and first quartile. A common boxplot rule flags values below Q1 minus 1.5 times IQR or above Q3 plus 1.5 times IQR for investigation.",
            },
            {
              heading: "Handling Outliers",
              content:
                "Possible actions include verifying the original source, correcting confirmed errors, retaining valid unusual values, or using suitable analysis methods. Do not remove observations without justification.",
            },
          ],

          example:
            "Marks: 65, 70, 72, 75, 78, 98\n\nThe value 98 is higher than the other values, but it is not automatically an error. Verify it against the original record.",

          exercise:
            "Create a dataset of 20 numerical values. Calculate its median and quartiles, inspect unusual values, and explain which entries need investigation.",

          quiz: [
            {
              question: "What is an outlier?",
              options: [
                "An observation unusually different from others",
                "A column heading",
                "A missing worksheet",
                "A chart legend",
              ],
              answer: "An observation unusually different from others",
              explanation:
                "An outlier is an observation that differs substantially from the general pattern.",
            },
            {
              question: "What does IQR stand for?",
              options: [
                "Interquartile Range",
                "Internal Query Record",
                "Input Quality Result",
                "Indexed Quantity Ratio",
              ],
              answer: "Interquartile Range",
              explanation:
                "IQR is the difference between the third and first quartiles.",
            },
            {
              question: "Is every outlier necessarily an error?",
              options: [
                "No, it may be a genuine observation",
                "Yes, every outlier is incorrect",
                "Yes, every outlier is missing",
                "No, outliers are always duplicates",
              ],
              answer: "No, it may be a genuine observation",
              explanation:
                "Unusual values can be valid and should be investigated before any correction.",
            },
            {
              question: "Which chart commonly helps visualize outliers?",
              options: [
                "Boxplot",
                "Pie chart only",
                "Organization chart",
                "Flowchart",
              ],
              answer: "Boxplot",
              explanation:
                "Boxplots display quartiles and can show unusually distant observations.",
            },
            {
              question: "What should be done before removing a suspected outlier?",
              options: [
                "Investigate its source and meaning",
                "Delete the entire dataset",
                "Change every value to the median",
                "Remove all column names",
              ],
              answer: "Investigate its source and meaning",
              explanation:
                "Investigation helps distinguish genuine unusual values from data-entry errors.",
            },
          ],
        },

        {
          title: "Checking Data Types and Logical Errors",
          duration: "35 minutes",
          introduction:
            "Data types describe whether a value is text, a number, a date, or another type of information. Logical checks help identify values that may be technically valid but do not make sense in context.",

          sections: [
            {
              heading: "Common Data Types",
              content:
                "Common data types include integers, floating-point numbers, strings, dates, and Boolean values. Correct data types allow appropriate operations.",
            },
            {
              heading: "Data Type Inspection",
              content:
                "In pandas, dtypes displays column data types and info() provides a summary of a DataFrame. These checks help identify unexpected types.",
            },
            {
              heading: "Logical Validation",
              content:
                "Logical validation checks relationships between fields. For example, a student's date of birth should not be later than the current date.",
            },
          ],

          example:
            "Name: Ravi (text)\nAge: 20 (integer)\nPercentage: 85.5 (decimal)\nAdmission date: 2026-06-01 (date)\n\nA date of birth in the future requires investigation.",

          exercise:
            "Inspect a dataset containing names, ages, marks, and dates. Identify incorrect data types and logical inconsistencies.",

          quiz: [
            {
              question: "Which pandas property displays column data types?",
              options: [
                "dtypes",
                "columns",
                "index",
                "shape",
              ],
              answer: "dtypes",
              explanation:
                "dtypes displays the data type of each DataFrame column.",
            },
            {
              question: "Which pandas method provides a DataFrame summary?",
              options: [
                "info()",
                "append()",
                "reverse()",
                "clear()",
              ],
              answer: "info()",
              explanation:
                "info() summarizes columns, data types, and non-null counts.",
            },
            {
              question: "Which is an example of a logical data error?",
              options: [
                "A birth date later than the current date",
                "A bold column heading",
                "A wider column",
                "A blue worksheet tab",
              ],
              answer: "A birth date later than the current date",
              explanation:
                "A future birth date is generally inconsistent with a recorded existing person's birth date.",
            },
            {
              question: "Which data type is appropriate for a whole-number count?",
              options: [
                "Integer",
                "Image",
                "Audio",
                "Animation",
              ],
              answer: "Integer",
              explanation:
                "An integer represents a whole number without a fractional part.",
            },
            {
              question: "Why are correct data types important?",
              options: [
                "They support appropriate operations",
                "They automatically correct all spelling",
                "They remove every duplicate",
                "They guarantee every value is accurate",
              ],
              answer: "They support appropriate operations",
              explanation:
                "Correct types allow software to perform suitable calculations and comparisons.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Data Cleaning with Excel and Python",
      description:
        "Apply data-cleaning techniques to real datasets, document changes, and verify the final dataset.",
      assignment:
        "Clean a complete student dataset, document all corrections, validate the final records, and prepare a short data quality report.",

      lessons: [
        {
          title: "Data Cleaning Using Excel",
          duration: "40 minutes",
          introduction:
            "Excel provides several tools for cleaning spreadsheet data. These include Remove Duplicates, Find and Replace, Text to Columns, TRIM, filters, and Data Validation.",

          sections: [
            {
              heading: "Useful Excel Tools",
              content:
                "Remove Duplicates identifies repeated records. Find and Replace updates known text variations. Text to Columns separates combined information into different columns.",
            },
            {
              heading: "Excel Formulas for Cleaning",
              content:
                "TRIM removes extra spaces, CLEAN removes certain non-printing characters, IF checks conditions, and COUNTIF counts values that satisfy a condition.",
            },
            {
              heading: "Checking the Results",
              content:
                "After cleaning, compare the original and cleaned datasets. Check row counts, required fields, duplicate records, and validation rules.",
            },
          ],

          example:
            "Original name: '  Ravi Kumar  '\nFormula: =TRIM(A2)\nResult: 'Ravi Kumar'\n\nThe original data should be preserved separately when changes need to be audited.",

          exercise:
            "Use Excel to clean a dataset containing blank cells, duplicates, spelling variations, and invalid marks. Document the corrections.",

          quiz: [
            {
              question: "Which Excel tool removes duplicate records?",
              options: [
                "Remove Duplicates",
                "Freeze Panes",
                "Page Layout",
                "Goal Seek",
              ],
              answer: "Remove Duplicates",
              explanation:
                "Remove Duplicates removes repeated records based on selected columns.",
            },
            {
              question: "Which Excel feature separates combined text into columns?",
              options: [
                "Text to Columns",
                "Conditional Formatting",
                "Page Break Preview",
                "Workbook Protection",
              ],
              answer: "Text to Columns",
              explanation:
                "Text to Columns splits text into separate columns using delimiters or fixed widths.",
            },
            {
              question: "Which Excel formula counts cells matching a condition?",
              options: [
                "COUNTIF",
                "TRIM",
                "PROPER",
                "DATEVALUE",
              ],
              answer: "COUNTIF",
              explanation:
                "COUNTIF counts cells that satisfy a specified condition.",
            },
            {
              question: "What should be done after cleaning a dataset?",
              options: [
                "Verify the cleaned results",
                "Delete the original without checking",
                "Remove every formula",
                "Ignore invalid records",
              ],
              answer: "Verify the cleaned results",
              explanation:
                "Verification checks whether the cleaning operations produced reliable results.",
            },
            {
              question: "Why preserve an original copy of important data?",
              options: [
                "To support comparison and recovery",
                "To increase spelling errors",
                "To prevent all calculations",
                "To remove the audit trail",
              ],
              answer: "To support comparison and recovery",
              explanation:
                "An original copy allows changes to be reviewed and the source data to be recovered.",
            },
          ],
        },

        {
          title: "Data Cleaning Using Python and Pandas",
          duration: "45 minutes",
          introduction:
            "Python and pandas provide tools for cleaning larger datasets efficiently. They support missing-value detection, duplicate removal, data conversion, text cleaning, and filtering.",

          sections: [
            {
              heading: "Loading a Dataset",
              content:
                "Pandas read_csv() loads a CSV file into a DataFrame. The head() method displays the first few rows for an initial inspection.",
            },
            {
              heading: "Cleaning Missing and Duplicate Values",
              content:
                "isna() identifies missing values, fillna() fills missing values, dropna() removes selected rows or columns with missing data, and drop_duplicates() removes repeated records.",
            },
            {
              heading: "Converting Data Types",
              content:
                "to_numeric() converts suitable values into numerical data, while to_datetime() converts suitable values into dates and times.",
            },
          ],

          example:
            "import pandas as pd\n\ndf = pd.read_csv('students.csv')\nprint(df.head())\nprint(df.isna().sum())\nprint(df.duplicated().sum())\n\ndf = df.drop_duplicates()\nprint(df.head())",

          exercise:
            "Load a CSV dataset in Python. Display its first rows, count missing values, identify duplicates, and remove confirmed duplicate records.",

          quiz: [
            {
              question: "Which pandas function loads a CSV file?",
              options: [
                "read_csv()",
                "read_excel()",
                "to_datetime()",
                "drop_duplicates()",
              ],
              answer: "read_csv()",
              explanation:
                "read_csv() reads a CSV file into a pandas DataFrame.",
            },
            {
              question: "Which method displays the first rows of a DataFrame?",
              options: [
                "head()",
                "tail()",
                "info()",
                "describe()",
              ],
              answer: "head()",
              explanation:
                "head() displays the first rows of a DataFrame.",
            },
            {
              question: "Which pandas method fills missing values?",
              options: [
                "fillna()",
                "duplicated()",
                "sort_values()",
                "rename()",
              ],
              answer: "fillna()",
              explanation:
                "fillna() replaces missing values using specified replacement values or methods.",
            },
            {
              question: "Which pandas method removes rows with missing values by default?",
              options: [
                "dropna()",
                "fillna()",
                "to_numeric()",
                "groupby()",
              ],
              answer: "dropna()",
              explanation:
                "dropna() removes rows containing missing values by default.",
            },
            {
              question: "What does a pandas DataFrame represent?",
              options: [
                "A two-dimensional labeled data structure",
                "An audio recording",
                "A presentation animation",
                "A computer network",
              ],
              answer: "A two-dimensional labeled data structure",
              explanation:
                "A DataFrame organizes data into labeled rows and columns.",
            },
          ],
        },

        {
          title: "Final Data Quality Checks and Documentation",
          duration: "35 minutes",
          introduction:
            "A cleaned dataset should be checked before it is used for analysis. Documentation records the changes made, the rules applied, and any remaining limitations.",

          sections: [
            {
              heading: "Final Quality Checks",
              content:
                "Check required fields, data types, duplicate records, valid ranges, consistent formats, and logical relationships. Recheck important totals and record counts.",
            },
            {
              heading: "Data Cleaning Documentation",
              content:
                "Record the original issue, affected columns, cleaning action, reason for the action, and result. This makes the process easier to review and reproduce.",
            },
            {
              heading: "Data Quality Report",
              content:
                "A data quality report can summarize the original number of records, missing values, duplicates, invalid entries, corrections, and remaining issues.",
            },
          ],

          example:
            "Data quality report:\nOriginal records: 100\nConfirmed duplicates: 5\nMissing required values: 3\nInvalid marks: 2\nFinal records: 95\n\nEach correction should have a documented explanation.",

          exercise:
            "Prepare a data quality report for your cleaned dataset. Include the original and final record counts, problems identified, corrections made, and remaining limitations.",

          quiz: [
            {
              question: "What is the purpose of a data quality report?",
              options: [
                "Summarize data quality issues and corrections",
                "Create random records",
                "Hide missing values",
                "Replace the original dataset with an image",
              ],
              answer: "Summarize data quality issues and corrections",
              explanation:
                "A data quality report documents the condition of the data and the actions taken.",
            },
            {
              question: "Why document data-cleaning steps?",
              options: [
                "To make changes traceable",
                "To create more duplicates",
                "To remove all column names",
                "To prevent future verification",
              ],
              answer: "To make changes traceable",
              explanation:
                "Documentation helps others understand and review the cleaning process.",
            },
            {
              question: "Which should be checked before using a cleaned dataset?",
              options: [
                "Missing values and invalid entries",
                "Desktop wallpaper",
                "Keyboard layout",
                "Monitor brightness",
              ],
              answer: "Missing values and invalid entries",
              explanation:
                "These checks help confirm that important data-quality problems have been addressed.",
            },
            {
              question: "What does reproducibility mean in data cleaning?",
              options: [
                "The process can be repeated consistently",
                "Every record is deleted",
                "The dataset is always hidden",
                "The data cannot be checked",
              ],
              answer: "The process can be repeated consistently",
              explanation:
                "Documented and repeatable steps allow the cleaning process to be performed again.",
            },
            {
              question: "What should a report do with unresolved data issues?",
              options: [
                "Clearly document them",
                "Pretend they do not exist",
                "Delete the report",
                "Change unrelated values",
              ],
              answer: "Clearly document them",
              explanation:
                "Unresolved issues and limitations should be transparent to anyone using the dataset.",
            },
          ],
        },

        {
          title: "Final Project: Clean Student Records Dataset",
          duration: "60 minutes",
          introduction:
            "In this final lesson, you will combine the techniques learned throughout the course to clean and validate a student records dataset. The objective is to produce a reliable dataset and document your work.",

          sections: [
            {
              heading: "Project Requirements",
              content:
                "Create a student dataset containing student ID, name, age, department, admission date, marks, and email address. Include realistic data-quality issues in a practice copy.",
            },
            {
              heading: "Cleaning Tasks",
              content:
                "Identify missing values, investigate duplicate IDs, correct verified spelling variations, standardize dates, convert numerical columns, and investigate unusual marks.",
            },
            {
              heading: "Validation Tasks",
              content:
                "Validate student IDs, marks between 0 and 100, required fields, date formats, and approved department names. Document any values that need further investigation.",
            },
            {
              heading: "Final Submission",
              content:
                "Submit the original practice dataset, cleaned dataset, validation checklist, and a short data quality report explaining the changes.",
            },
          ],

          example:
            "Project output:\n1. Original student_records.csv\n2. cleaned_student_records.csv\n3. validation_checklist.xlsx\n4. data_quality_report.txt\n\nKeep the original and cleaned files separate.",

          exercise:
            "Complete the Student Records Data Cleaning Project. Verify the final records, document each correction, and explain any unresolved data-quality issues.",

          quiz: [
            {
              question: "What is the main goal of the final project?",
              options: [
                "Produce a cleaned and validated dataset",
                "Create a gaming application",
                "Design a presentation only",
                "Build a computer network",
              ],
              answer: "Produce a cleaned and validated dataset",
              explanation:
                "The project combines cleaning and validation techniques to prepare reliable student records.",
            },
            {
              question: "Why should student IDs be checked for duplicates?",
              options: [
                "To identify repeated or conflicting records",
                "To change student names automatically",
                "To format charts",
                "To increase file size",
              ],
              answer: "To identify repeated or conflicting records",
              explanation:
                "Student IDs can help identify records that may represent the same student.",
            },
            {
              question: "Which file should be kept separate from the cleaned dataset?",
              options: [
                "The original dataset",
                "The computer wallpaper",
                "The browser history",
                "The keyboard settings",
              ],
              answer: "The original dataset",
              explanation:
                "Preserving the original data supports comparison and recovery.",
            },
            {
              question: "What should be done with an unusual but potentially valid mark?",
              options: [
                "Investigate and verify it",
                "Delete it immediately",
                "Replace it with zero",
                "Ignore its source",
              ],
              answer: "Investigate and verify it",
              explanation:
                "Unusual values should be checked before deciding whether they are errors.",
            },
            {
              question: "What demonstrates successful project documentation?",
              options: [
                "A report describing issues and corrections",
                "An empty worksheet",
                "A screenshot of the desktop",
                "A list of unrelated websites",
              ],
              answer: "A report describing issues and corrections",
              explanation:
                "The report explains the problems found and how the dataset was cleaned.",
            },
          ],
        },
      ],
    },
  ],
};


type CourseQuiz = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

const makeLesson = (
  title: string,
  introduction: string,
  heading: string,
  content: string,
  example: string,
  exercise: string,
  quiz: CourseQuiz[]
) => ({
  title,
  duration: "35 minutes",
  introduction,
  sections: [{ heading, content }],
  example,
  exercise,
  quiz,
});

export const powerBIAndTableauDashboardsCourse = {
  title: "Power BI and Tableau Dashboards",
  description:
    "Learn business intelligence and data visualization using Power BI and Tableau. Develop skills in data importing, cleaning, data modelling, DAX, calculated fields, charts, filters and interactive dashboards.",
  project:
    "Build a complete Student Performance Analysis Dashboard using Power BI and Tableau, including student marks, attendance, pass percentage, subject analysis and performance insights.",

  weeks: [
    // =====================================================
    // WEEK 1 - POWER BI
    // =====================================================
    {
      title: "Week 1: Power BI Fundamentals",
      description:
        "Understand Power BI, its interface, data sources and basic report development.",
      assignment:
        "Explore Power BI Desktop and import a student dataset.",

      lessons: [
        makeLesson(
          "Introduction to Power BI",
          "Understand Power BI and its role in business intelligence and data analytics.",
          "Power BI Fundamentals",
          "Power BI is Microsoft's business intelligence platform. It helps users connect to data sources, transform information, create data models and develop interactive reports. Power BI Desktop is used to develop reports, while Power BI Service supports online publishing and sharing.",
          "A college can use Power BI to analyse student marks, attendance, department performance and pass percentages.",
          "Write five applications of Power BI in educational institutions.",
          [
            {
              question: "What is the primary purpose of Power BI?",
              options: [
                "Creating interactive data reports",
                "Editing video files",
                "Developing mobile games",
                "Managing operating systems",
              ],
              answer: "Creating interactive data reports",
              explanation: "Power BI is used to analyse information and create interactive visual reports.",
            },
            {
              question: "Which application is commonly used to create Power BI reports?",
              options: [
                "Power BI Desktop",
                "Notepad",
                "Paint",
                "Windows Media Player",
              ],
              answer: "Power BI Desktop",
              explanation: "Power BI Desktop provides tools for creating reports, measures and data models.",
            },
            {
              question: "Which company develops Power BI?",
              options: ["Microsoft", "Google", "Adobe", "Oracle"],
              answer: "Microsoft",
              explanation: "Power BI is Microsoft's business intelligence platform.",
            },
            {
              question: "What is a Power BI dashboard?",
              options: [
                "A visual summary of important information",
                "A computer operating system",
                "A programming language",
                "A database password",
              ],
              answer: "A visual summary of important information",
              explanation: "Dashboards display important information through visual elements and metrics.",
            },
            {
              question: "Which application is used to publish and share Power BI content online?",
              options: [
                "Power BI Service",
                "Windows Calculator",
                "Notepad",
                "Paint",
              ],
              answer: "Power BI Service",
              explanation: "Power BI Service is Microsoft's online platform for publishing and sharing Power BI content.",
            },
          ]
        ),

        makeLesson(
          "Power BI Interface and Workflow",
          "Explore the main views and tools available in Power BI Desktop.",
          "Understanding the Interface",
          "Power BI Desktop contains Report view, Table view and Model view. Report view is used to create visualizations. Table view displays loaded data. Model view helps manage table relationships. The Fields or Data pane and Visualizations pane help users build reports.",
          "Open a student dataset and explore Report view, Table view and Model view.",
          "Identify the three main views and explain the purpose of each.",
          [
            {
              question: "Which view is used to design reports?",
              options: ["Report view", "Table view", "Model view", "Settings view"],
              answer: "Report view",
              explanation: "Report view provides the canvas used to design reports and visualizations.",
            },
            {
              question: "Which view displays loaded data in rows and columns?",
              options: ["Table view", "Report view", "Model view", "Publish view"],
              answer: "Table view",
              explanation: "Table view allows users to inspect the records and columns in a table.",
            },
            {
              question: "Which view helps manage relationships between tables?",
              options: ["Model view", "Report view", "Reading view", "Print view"],
              answer: "Model view",
              explanation: "Model view displays the data model and its table relationships.",
            },
            {
              question: "What does the Visualizations pane help users do?",
              options: [
                "Choose and configure charts",
                "Install Windows",
                "Edit audio files",
                "Change computer passwords",
              ],
              answer: "Choose and configure charts",
              explanation: "The Visualizations pane provides visual types and formatting controls.",
            },
            {
              question: "What is the purpose of the report canvas?",
              options: [
                "Arranging report visualizations",
                "Storing computer hardware",
                "Managing operating system files",
                "Creating database passwords",
              ],
              answer: "Arranging report visualizations",
              explanation: "The report canvas is where users position and organize report visuals.",
            },
          ]
        ),
      ],
    },

    // =====================================================
    // WEEK 2 - POWER BI
    // =====================================================
    {
      title: "Week 2: Power BI Data Preparation and Modelling",
      description:
        "Learn data importing, Power Query, data cleaning and table relationships.",
      assignment:
        "Import student, attendance and subject datasets and prepare them for analysis.",

      lessons: [
        makeLesson(
          "Importing Data into Power BI",
          "Learn how to connect Power BI to Excel, CSV files and other data sources.",
          "Data Connections",
          "Power BI supports Excel workbooks, CSV files, databases and online data sources. The Get Data option allows users to choose a connector. After connecting, users can preview the information and load it or transform it before loading.",
          "Import a Students.csv file using Home → Get Data → Text/CSV.",
          "Import a student marks dataset and inspect its columns and records.",
          [
            {
              question: "Which option is used to connect Power BI to a data source?",
              options: ["Get Data", "Format Painter", "View Zoom", "Page Size"],
              answer: "Get Data",
              explanation: "Get Data provides connectors for different data sources.",
            },
            {
              question: "Which format is commonly used for tabular data?",
              options: [".csv", ".mp3", ".png", ".exe"],
              answer: ".csv",
              explanation: "CSV stores tabular data as comma-separated values.",
            },
            {
              question: "What does the Load option do?",
              options: [
                "Loads data into the Power BI model",
                "Deletes the report",
                "Changes the operating system",
                "Creates a computer account",
              ],
              answer: "Loads data into the Power BI model",
              explanation: "Load imports the selected data into the Power BI data model.",
            },
            {
              question: "Which file can be used as a spreadsheet data source?",
              options: [
                "Excel workbook",
                "Audio recording",
                "Video file",
                "Image file",
              ],
              answer: "Excel workbook",
              explanation: "Power BI supports Excel workbooks as a data source.",
            },
            {
              question: "What should be inspected after importing a dataset?",
              options: [
                "Columns and sample records",
                "Desktop wallpaper",
                "Keyboard settings",
                "Installed games",
              ],
              answer: "Columns and sample records",
              explanation: "Inspecting columns and records helps verify that the correct data was imported.",
            },
          ]
        ),

        makeLesson(
          "Power Query and Data Cleaning",
          "Learn to clean and transform raw datasets before analysis.",
          "Data Transformation",
          "Power Query is the data preparation environment in Power BI. It supports removing columns, filtering rows, replacing values, splitting columns, removing duplicates and changing data types. Applied Steps records the transformations performed.",
          "Remove duplicate StudentID values and change the Marks column to a numeric data type.",
          "Clean a student dataset by correcting data types, renaming columns and removing duplicate rows.",
          [
            {
              question: "What is Power Query mainly used for?",
              options: [
                "Cleaning and transforming data",
                "Editing photographs",
                "Creating operating systems",
                "Playing music",
              ],
              answer: "Cleaning and transforming data",
              explanation: "Power Query prepares raw data before it enters the data model.",
            },
            {
              question: "Which action removes repeated records?",
              options: [
                "Remove Duplicates",
                "Change Theme",
                "Insert Image",
                "Zoom In",
              ],
              answer: "Remove Duplicates",
              explanation: "Remove Duplicates removes repeated rows based on selected columns.",
            },
            {
              question: "Why are data types important?",
              options: [
                "They define how values are interpreted",
                "They change screen brightness",
                "They control keyboard speed",
                "They install applications",
              ],
              answer: "They define how values are interpreted",
              explanation: "Correct data types support accurate calculations and filtering.",
            },
            {
              question: "What do Applied Steps display?",
              options: [
                "Transformations performed in Power Query",
                "Computer startup history",
                "Installed applications",
                "Report images",
              ],
              answer: "Transformations performed in Power Query",
              explanation: "Applied Steps records the sequence of query transformations.",
            },
            {
              question: "Which data type is appropriate for student marks?",
              options: [
                "Whole number or decimal number",
                "Date only",
                "True/False only",
                "Image",
              ],
              answer: "Whole number or decimal number",
              explanation: "Marks are numeric values and should use a numeric data type.",
            },
          ]
        ),
      ],
    },

    // =====================================================
    // WEEK 3 - POWER BI
    // =====================================================
    {
      title: "Week 3: Power BI Data Modelling and DAX",
      description:
        "Understand data relationships and create measures using DAX.",
      assignment:
        "Create measures for student count, average marks, pass percentage and attendance.",

      lessons: [
        makeLesson(
          "Data Modelling and Relationships",
          "Learn how multiple tables are connected in a Power BI data model.",
          "Table Relationships",
          "Data modelling organizes information into related tables. Relationships connect matching columns, such as StudentID in a Students table and StudentID in an Attendance table. Common relationships include one-to-many and many-to-one.",
          "Connect Students and Attendance tables using StudentID.",
          "Create a model containing Students, Subjects and Attendance tables.",
          [
            {
              question: "What is a relationship in Power BI?",
              options: [
                "A connection between tables",
                "A chart colour",
                "A report background",
                "A computer shortcut",
              ],
              answer: "A connection between tables",
              explanation: "Relationships connect tables through related columns.",
            },
            {
              question: "Which column can connect student and attendance tables?",
              options: ["StudentID", "Wallpaper", "FontColour", "PageNumber"],
              answer: "StudentID",
              explanation: "StudentID identifies the same student in both tables.",
            },
            {
              question: "What does a one-to-many relationship mean?",
              options: [
                "One record relates to multiple records",
                "Every record must be deleted",
                "Two files become one image",
                "One chart has many colours",
              ],
              answer: "One record relates to multiple records",
              explanation: "A unique record on one side can be associated with multiple records on the other side.",
            },
            {
              question: "Which view helps create relationships visually?",
              options: ["Model view", "Report view", "Reading view", "Print view"],
              answer: "Model view",
              explanation: "Model view displays tables and lets users manage relationships.",
            },
            {
              question: "What is a key column used for?",
              options: [
                "Identifying and connecting records",
                "Changing chart animations",
                "Changing screen resolution",
                "Adding page backgrounds",
              ],
              answer: "Identifying and connecting records",
              explanation: "Key columns identify records and help establish relationships.",
            },
          ]
        ),

        makeLesson(
          "Introduction to DAX",
          "Learn the basics of Data Analysis Expressions and create calculations.",
          "DAX Fundamentals",
          "DAX stands for Data Analysis Expressions. It is used to create measures, calculated columns and calculated tables. Common functions include SUM, AVERAGE, COUNT, COUNTROWS and DISTINCTCOUNT. Measures are evaluated in the current filter context.",
          "Average Marks = AVERAGE(Students[Marks]).",
          "Create measures for total students, average marks and total marks.",
          [
            {
              question: "What does DAX stand for?",
              options: [
                "Data Analysis Expressions",
                "Digital Application Extension",
                "Data Access Exchange",
                "Database Automation System",
              ],
              answer: "Data Analysis Expressions",
              explanation: "DAX is the expression language used for calculations in Power BI.",
            },
            {
              question: "Which DAX function calculates an average?",
              options: ["AVERAGE", "SUM", "MAX", "COUNT"],
              answer: "AVERAGE",
              explanation: "AVERAGE returns the arithmetic mean of a numeric column.",
            },
            {
              question: "Which DAX function adds numeric values?",
              options: ["SUM", "MIN", "COUNT", "DISTINCTCOUNT"],
              answer: "SUM",
              explanation: "SUM adds the values in a specified numeric column.",
            },
            {
              question: "What is a measure?",
              options: [
                "A calculation evaluated in filter context",
                "A report background image",
                "A data source connection",
                "A table name only",
              ],
              answer: "A calculation evaluated in filter context",
              explanation: "Measures calculate results according to filters and visual context.",
            },
            {
              question: "Which function counts unique values?",
              options: [
                "DISTINCTCOUNT",
                "SUM",
                "AVERAGE",
                "MIN",
              ],
              answer: "DISTINCTCOUNT",
              explanation: "DISTINCTCOUNT counts distinct values in a column.",
            },
          ]
        ),
      ],
    },

    // =====================================================
    // WEEK 4 - POWER BI
    // =====================================================
    {
      title: "Week 4: Power BI Interactive Dashboards",
      description:
        "Develop interactive reports, configure slicers and complete a practical dashboard project.",
      assignment:
        "Complete a Student Performance Analysis Dashboard in Power BI.",

      lessons: [
        makeLesson(
          "Visualizations and Interactive Reports",
          "Choose suitable visuals and make reports easier to explore.",
          "Creating Visual Reports",
          "Power BI offers cards, bar charts, column charts, line charts, pie charts, tables, matrices and scatter charts. Slicers provide interactive filtering. Visual interactions can filter or highlight related visuals.",
          "Create a bar chart for average marks by subject and a card for total students.",
          "Build a report page with four visuals and a department slicer.",
          [
            {
              question: "Which visual is useful for comparing marks across subjects?",
              options: ["Bar chart", "Audio player", "Text editor", "File explorer"],
              answer: "Bar chart",
              explanation: "Bar charts make comparisons across categories easy to understand.",
            },
            {
              question: "What is a slicer used for?",
              options: [
                "Filtering report data interactively",
                "Installing a data source",
                "Deleting measures",
                "Changing the computer name",
              ],
              answer: "Filtering report data interactively",
              explanation: "Slicers let users filter data by selected values.",
            },
            {
              question: "Which visual displays a single key metric?",
              options: ["Card", "Map only", "Text editor", "File browser"],
              answer: "Card",
              explanation: "Cards display summarized values such as average marks and total students.",
            },
            {
              question: "Which chart is useful for displaying trends over time?",
              options: ["Line chart", "Pie chart only", "Button", "Image"],
              answer: "Line chart",
              explanation: "Line charts are commonly used to display changes over time.",
            },
            {
              question: "What can visual interactions do?",
              options: [
                "Filter or highlight related visuals",
                "Repair a computer",
                "Delete the source file",
                "Change database passwords",
              ],
              answer: "Filter or highlight related visuals",
              explanation: "Visual interactions allow report elements to respond to user selections.",
            },
          ]
        ),

        makeLesson(
          "Power BI Final Project and Publishing",
          "Complete a student performance dashboard and understand the publishing process.",
          "Dashboard Development",
          "A complete dashboard should have a clear purpose, readable visuals, useful filters and reliable measures. Power BI Desktop reports can be published to Power BI Service. Refresh settings depend on the source and permissions.",
          "Build a dashboard with student count, average marks, pass percentage, attendance and subject comparisons.",
          "Submit a dashboard with at least four visuals, two slicers and a written summary of findings.",
          [
            {
              question: "Where can a Power BI Desktop report be published?",
              options: [
                "Power BI Service",
                "Windows Calculator",
                "Notepad",
                "Paint",
              ],
              answer: "Power BI Service",
              explanation: "Power BI Service is the online platform for publishing and sharing reports.",
            },
            {
              question: "What is data refresh used for?",
              options: [
                "Updating report data from its source",
                "Changing the report title only",
                "Deleting charts",
                "Changing wallpaper",
              ],
              answer: "Updating report data from its source",
              explanation: "Refresh retrieves updated information from connected data sources.",
            },
            {
              question: "Which metric represents the percentage of students who passed?",
              options: [
                "Pass Percentage",
                "Desktop Resolution",
                "File Size",
                "Report Page Count",
              ],
              answer: "Pass Percentage",
              explanation: "Pass percentage measures the share of students who passed.",
            },
            {
              question: "What should be checked before presenting a dashboard?",
              options: [
                "Data accuracy and visual readability",
                "Only desktop wallpaper",
                "Computer sound volume",
                "Keyboard language",
              ],
              answer: "Data accuracy and visual readability",
              explanation: "Accurate information and readable visuals are important for reliable reports.",
            },
            {
              question: "What is the objective of the student performance project?",
              options: [
                "Analyse marks and attendance",
                "Create a video game",
                "Design a music player",
                "Build an operating system",
              ],
              answer: "Analyse marks and attendance",
              explanation: "The project analyses academic results and attendance patterns.",
            },
          ]
        ),
      ],
    },

    // =====================================================
    // WEEK 5 - TABLEAU
    // =====================================================
    {
      title: "Week 5: Tableau Fundamentals",
      description:
        "Understand Tableau, its interface, data connections, worksheets and dashboards.",
      assignment:
        "Connect Tableau to a student dataset and explore its fields.",

      lessons: [
        makeLesson(
          "Introduction to Tableau",
          "Understand Tableau and its use in business intelligence and data visualization.",
          "Tableau Fundamentals",
          "Tableau is a data visualization and analytics platform. It connects to different data sources and helps users explore information through worksheets, charts and dashboards. Tableau Desktop is commonly used to develop visualizations.",
          "A college can use Tableau to compare student marks across departments and semesters.",
          "Write five applications of Tableau in education.",
          [
            {
              question: "What is Tableau mainly used for?",
              options: [
                "Data visualization and analysis",
                "Video editing",
                "Operating system development",
                "Audio recording",
              ],
              answer: "Data visualization and analysis",
              explanation: "Tableau helps users analyse data through visualizations.",
            },
            {
              question: "What is a worksheet in Tableau?",
              options: [
                "A workspace for creating a visualization",
                "A computer driver",
                "A database password",
                "An operating system folder",
              ],
              answer: "A workspace for creating a visualization",
              explanation: "A worksheet is used to build an individual chart or view.",
            },
            {
              question: "What is a Tableau dashboard?",
              options: [
                "A collection of visualizations in one view",
                "A programming language",
                "A hardware device",
                "A text-only database",
              ],
              answer: "A collection of visualizations in one view",
              explanation: "A dashboard combines multiple views in a single layout.",
            },
            {
              question: "Which company develops Tableau?",
              options: [
                "Salesforce",
                "Microsoft",
                "Adobe",
                "Intel",
              ],
              answer: "Salesforce",
              explanation: "Tableau is a data analytics and visualization platform developed by Salesforce.",
            },
            {
              question: "What is the purpose of data visualization?",
              options: [
                "Making patterns easier to understand",
                "Increasing file size",
                "Changing keyboard settings",
                "Installing applications",
              ],
              answer: "Making patterns easier to understand",
              explanation: "Visualizations communicate patterns, comparisons and trends.",
            },
          ]
        ),

        makeLesson(
          "Tableau Interface and Data Connections",
          "Explore the Tableau workspace and connect to common data sources.",
          "Connecting to Data",
          "Tableau supports Excel files, CSV files, databases and other supported sources. The Data Source page is used to connect to and inspect data. Worksheets are used to create charts, while dashboards combine visualizations.",
          "Connect Tableau to an Excel workbook containing student details.",
          "Connect to an Excel or CSV file and identify its tables, fields and sample values.",
          [
            {
              question: "Which page is used to connect to and inspect data?",
              options: [
                "Data Source page",
                "Dashboard page only",
                "Story page only",
                "Format page",
              ],
              answer: "Data Source page",
              explanation: "The Data Source page helps connect to and inspect incoming data.",
            },
            {
              question: "Which file can Tableau connect to?",
              options: [".csv", ".mp3", ".exe", ".mp4"],
              answer: ".csv",
              explanation: "CSV files are supported sources for tabular data.",
            },
            {
              question: "Where are individual visualizations created?",
              options: [
                "Worksheet",
                "Operating system settings",
                "File explorer",
                "Recycle Bin",
              ],
              answer: "Worksheet",
              explanation: "Worksheets are the workspace for creating individual visualizations.",
            },
            {
              question: "What does a data connection provide?",
              options: [
                "Access to information from a source",
                "A new desktop wallpaper",
                "A computer password",
                "An audio recording",
              ],
              answer: "Access to information from a source",
              explanation: "A data connection allows Tableau to access information from a source.",
            },
            {
              question: "Why should you inspect a dataset after connecting?",
              options: [
                "To understand its fields and values",
                "To change monitor brightness",
                "To install a printer",
                "To delete Tableau",
              ],
              answer: "To understand its fields and values",
              explanation: "Inspection helps confirm the available fields and data quality.",
            },
          ]
        ),
      ],
    },

    // =====================================================
    // WEEK 6 - TABLEAU
    // =====================================================
    {
      title: "Week 6: Tableau Dimensions, Measures and Charts",
      description:
        "Learn Tableau field types and create common visualizations.",
      assignment:
        "Create charts comparing marks and performance across subjects.",

      lessons: [
        makeLesson(
          "Dimensions and Measures",
          "Understand how Tableau organizes fields into dimensions and measures.",
          "Working with Fields",
          "Dimensions categorize data, such as StudentName, Department and Subject. Measures are numeric values that can be aggregated, such as Marks and Attendance. Fields can be placed on Rows and Columns shelves to construct views.",
          "Use Subject as a dimension and Marks as a measure to compare performance.",
          "Identify five dimensions and five measures in a student dataset.",
          [
            {
              question: "What is a dimension in Tableau?",
              options: [
                "A field used to categorize data",
                "A numeric aggregation only",
                "A dashboard background",
                "A database password",
              ],
              answer: "A field used to categorize data",
              explanation: "Dimensions categorize information, such as departments and subjects.",
            },
            {
              question: "Which is an example of a measure?",
              options: ["Marks", "Student Name", "Department", "Subject Name"],
              answer: "Marks",
              explanation: "Marks are numeric values that can be aggregated.",
            },
            {
              question: "What does the Rows shelf control?",
              options: [
                "Fields arranged along the rows of a view",
                "Computer memory",
                "Report file name",
                "Installed applications",
              ],
              answer: "Fields arranged along the rows of a view",
              explanation: "The Rows shelf determines fields displayed along the rows of a visualization.",
            },
            {
              question: "What does the Columns shelf control?",
              options: [
                "Fields arranged along the columns of a view",
                "Operating system version",
                "Database password",
                "Screen brightness",
              ],
              answer: "Fields arranged along the columns of a view",
              explanation: "The Columns shelf determines the horizontal arrangement of the view.",
            },
            {
              question: "Which field is most suitable as a dimension?",
              options: [
                "Department",
                "Total Marks",
                "Average Attendance",
                "Total Fees",
              ],
              answer: "Department",
              explanation: "Department is a category used to group records.",
            },
          ]
        ),

        makeLesson(
          "Creating Charts in Tableau",
          "Create common visualizations and understand when to use each chart.",
          "Visualization Techniques",
          "Tableau supports bar charts, line charts, pie charts, scatter plots, maps and tables. The Show Me panel suggests visualization types based on selected fields. Choosing a suitable chart helps communicate analysis results.",
          "Create a bar chart showing average marks by subject.",
          "Create a bar chart, a line chart and a scatter plot using sample student data.",
          [
            {
              question: "Which chart is useful for comparing categories?",
              options: [
                "Bar chart",
                "Text editor",
                "Audio player",
                "Folder view",
              ],
              answer: "Bar chart",
              explanation: "Bar charts compare numeric values across categories.",
            },
            {
              question: "Which chart is useful for showing changes over time?",
              options: [
                "Line chart",
                "Pie chart only",
                "Text box",
                "Image",
              ],
              answer: "Line chart",
              explanation: "Line charts display trends and changes over time.",
            },
            {
              question: "What is the purpose of the Show Me panel?",
              options: [
                "Suggesting suitable visualization types",
                "Installing updates",
                "Changing computer passwords",
                "Deleting a dataset",
              ],
              answer: "Suggesting suitable visualization types",
              explanation: "Show Me suggests charts based on the selected fields.",
            },
            {
              question: "Which chart is useful for examining two numeric variables?",
              options: [
                "Scatter plot",
                "Pie chart",
                "Text label",
                "Page background",
              ],
              answer: "Scatter plot",
              explanation: "Scatter plots display the relationship between two numeric variables.",
            },
            {
              question: "What should guide your choice of visualization?",
              options: [
                "The question you want the data to answer",
                "The computer colour",
                "The file extension alone",
                "The number of desktop icons",
              ],
              answer: "The question you want the data to answer",
              explanation: "A visualization should suit the analysis goal and data.",
            },
          ]
        ),
      ],
    },

    // =====================================================
    // WEEK 7 - TABLEAU
    // =====================================================
    {
      title: "Week 7: Tableau Filters and Calculations",
      description:
        "Learn filtering, sorting, grouping, calculated fields and parameters.",
      assignment:
        "Create student performance categories and interactive filters.",

      lessons: [
        makeLesson(
          "Filters, Sorting and Groups",
          "Learn how to focus on selected records and organize data categories.",
          "Exploring Data",
          "Filters restrict the data shown in a view. Sorting arranges values in a selected order. Groups combine related dimension members into categories. These features help users focus on selected departments, subjects and student groups.",
          "Filter a report to show only the Computer Science department and sort marks from highest to lowest.",
          "Create a subject filter, sort marks and group selected subjects.",
          [
            {
              question: "What is the purpose of a filter?",
              options: [
                "Restricting the data shown in a view",
                "Changing the computer name",
                "Installing a new font",
                "Deleting Tableau",
              ],
              answer: "Restricting the data shown in a view",
              explanation: "Filters limit the records or values displayed in a visualization.",
            },
            {
              question: "What does sorting do?",
              options: [
                "Arranges values in an order",
                "Creates a new database",
                "Changes file permissions",
                "Removes all visualizations",
              ],
              answer: "Arranges values in an order",
              explanation: "Sorting arranges values, such as marks from highest to lowest.",
            },
            {
              question: "What is a group used for?",
              options: [
                "Combining related dimension members",
                "Changing data source passwords",
                "Deleting all rows",
                "Changing screen resolution",
              ],
              answer: "Combining related dimension members",
              explanation: "Groups combine selected dimension values into categories.",
            },
            {
              question: "Which order places the highest marks first?",
              options: [
                "Descending order",
                "Ascending order",
                "Random order",
                "Alphabetical order only",
              ],
              answer: "Descending order",
              explanation: "Descending order places higher numeric values before lower values.",
            },
            {
              question: "Which filter could show only one department?",
              options: [
                "Department filter",
                "Font filter",
                "Image filter",
                "File type filter",
              ],
              answer: "Department filter",
              explanation: "A department filter limits the view to a selected department.",
            },
          ]
        ),

        makeLesson(
          "Calculated Fields and Parameters",
          "Create calculations and let users change values used in analysis.",
          "Advanced Analysis Basics",
          "Calculated fields create new values using expressions. For example, a performance category can be generated from marks. Parameters are user-controlled values that can be used in calculations, filters and reference lines.",
          "Create a calculated field: IF [Marks] >= 50 THEN 'Pass' ELSE 'Fail' END.",
          "Create a Pass/Fail calculated field and a parameter for selecting a marks threshold.",
          [
            {
              question: "What is a calculated field?",
              options: [
                "A new field created using an expression",
                "A physical computer component",
                "A report background",
                "A file storage device",
              ],
              answer: "A new field created using an expression",
              explanation: "Calculated fields derive new values from existing data using expressions.",
            },
            {
              question: "Which keyword begins a conditional calculation in Tableau?",
              options: ["IF", "TABLE", "FILE", "PRINT"],
              answer: "IF",
              explanation: "IF evaluates a condition and returns a result based on it.",
            },
            {
              question: "What is a parameter?",
              options: [
                "A user-controlled value used in an analysis",
                "A physical network cable",
                "A fixed chart image",
                "An operating system folder",
              ],
              answer: "A user-controlled value used in an analysis",
              explanation: "Parameters allow users to change a value that influences calculations or views.",
            },
            {
              question: "Which expression checks whether marks are at least 50?",
              options: [
                "[Marks] >= 50",
                "[Marks] <= 0",
                "[Marks] = 'Student'",
                "[Marks] + 'Department'",
              ],
              answer: "[Marks] >= 50",
              explanation: "The >= operator checks whether marks are greater than or equal to 50.",
            },
            {
              question: "What is the purpose of a Pass/Fail calculated field?",
              options: [
                "Categorizing student results",
                "Changing report page size",
                "Installing a database",
                "Sorting computer files",
              ],
              answer: "Categorizing student results",
              explanation: "A conditional calculation can classify student results as Pass or Fail.",
            },
          ]
        ),
      ],
    },

    // =====================================================
    // WEEK 8 - TABLEAU
    // =====================================================
    {
      title: "Week 8: Tableau Dashboards and Final Project",
      description:
        "Combine worksheets, create interactive dashboards and complete a student analytics project.",
      assignment:
        "Develop and present an interactive Student Performance Dashboard in Tableau.",

      lessons: [
        makeLesson(
          "Building Interactive Dashboards",
          "Combine worksheets into one dashboard and add useful interactions.",
          "Dashboard Design",
          "A Tableau dashboard combines worksheets, text, legends and other objects in one layout. Dashboard actions can support filtering, highlighting and navigation. A good dashboard uses a clear layout and focuses on important information.",
          "Combine a marks chart, attendance chart and pass percentage chart into one dashboard.",
          "Create a dashboard with four worksheets and add a department filter.",
          [
            {
              question: "What does a Tableau dashboard combine?",
              options: [
                "Multiple worksheets and other objects",
                "Only database passwords",
                "Computer drivers",
                "Operating system files",
              ],
              answer: "Multiple worksheets and other objects",
              explanation: "A dashboard brings several visual elements together in one view.",
            },
            {
              question: "What does a filter action allow?",
              options: [
                "One visualization to filter another",
                "A report to install a printer",
                "A computer to change its password",
                "A chart to delete its source database",
              ],
              answer: "One visualization to filter another",
              explanation: "Filter actions use selections in one view to filter related views.",
            },
            {
              question: "Why is dashboard layout important?",
              options: [
                "It improves readability and navigation",
                "It increases data rows",
                "It changes the data source",
                "It removes the need for analysis",
              ],
              answer: "It improves readability and navigation",
              explanation: "A clear layout helps users understand and explore information.",
            },
            {
              question: "Which object adds explanatory text to a dashboard?",
              options: [
                "Text object",
                "Database key",
                "Operating system driver",
                "CSV delimiter",
              ],
              answer: "Text object",
              explanation: "Text objects add headings, descriptions and notes to dashboards.",
            },
            {
              question: "What is the benefit of dashboard actions?",
              options: [
                "They make dashboards interactive",
                "They correct every data error automatically",
                "They replace the data source",
                "They remove all worksheets",
              ],
              answer: "They make dashboards interactive",
              explanation: "Dashboard actions allow users to interact with related visualizations.",
            },
          ]
        ),

        makeLesson(
          "Tableau Final Project and Publishing",
          "Finish your dashboard, check its accuracy and understand publishing.",
          "Final Tableau Project",
          "Before publishing, verify calculations, labels, filters and data connections. Tableau dashboards can be shared through supported Tableau publishing platforms, depending on the account, product and permissions available.",
          "Build a dashboard with average marks, attendance, student count, pass percentage and department comparisons.",
          "Submit a dashboard with four or more visualizations, interactive filters and a short project explanation.",
          [
            {
              question: "What should be verified before publishing a dashboard?",
              options: [
                "Calculations, data and visualizations",
                "Only desktop wallpaper",
                "Computer volume",
                "Installed games",
              ],
              answer: "Calculations, data and visualizations",
              explanation: "Checking calculations and data helps prevent incorrect information from being shared.",
            },
            {
              question: "What does a dashboard KPI represent?",
              options: [
                "An important performance indicator",
                "A computer serial number",
                "A file extension",
                "A keyboard shortcut",
              ],
              answer: "An important performance indicator",
              explanation: "KPIs summarize important measures used to assess performance.",
            },
            {
              question: "Which metric can analyse student attendance?",
              options: [
                "Attendance percentage",
                "Dashboard width",
                "Font size",
                "Number of worksheets",
              ],
              answer: "Attendance percentage",
              explanation: "Attendance percentage indicates how regularly students attended classes.",
            },
            {
              question: "What is the goal of the final Tableau project?",
              options: [
                "Build an interactive student performance dashboard",
                "Create an operating system",
                "Edit a music file",
                "Develop a computer game",
              ],
              answer: "Build an interactive student performance dashboard",
              explanation: "The project applies Tableau skills to analyse student performance information.",
            },
            {
              question: "Why should a dashboard have meaningful titles and labels?",
              options: [
                "To make information easier to understand",
                "To increase file size",
                "To change the database",
                "To remove data filters",
              ],
              answer: "To make information easier to understand",
              explanation: "Clear titles and labels explain what each visualization represents.",
            },
          ]
        ),
      ],
    },
  ],
};

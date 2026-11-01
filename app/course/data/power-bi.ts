
import type { Course } from "./python";

const powerBiCourse: Course = {
  title: "Power BI for Data Analysts",
  description:
    "Learn to connect data sources, clean and transform data, build data models, write DAX calculations, and create interactive Power BI dashboards for real-world analysis.",
  project:
    "Build an interactive Sales Performance Dashboard that analyzes revenue, profit, product performance, and regional sales.",
  weeks: [
    {
      title: "Week 1: Power BI Fundamentals and Data Import",
      lessons: [
        {
          id: "pbi-w1-l1",
          title: "Introduction to Power BI",
          introduction:
            "Understand Power BI and how analysts use it to turn raw data into meaningful reports and dashboards.",
          sections: [
            {
              heading: "What is Power BI?",
              content:
                "Power BI is a business intelligence tool used to connect, analyze, visualize, and share data. It helps organizations understand performance and make data-driven decisions.",
            },
            {
              heading: "Power BI components",
              content:
                "Power BI Desktop is used to create reports. Power BI Service is used to publish and share reports online. Power BI Mobile helps users view reports on supported mobile devices.",
            },
          ],
          example:
            "A retail company uses Power BI to compare monthly revenue, identify its best-selling products, and monitor sales across regions.",
          exercise:
            "Explain three ways Power BI can help a business analyst.",
          quiz: [
            {
              question: "What is the main purpose of Power BI?",
              options: [
                "Create and analyze data visualizations",
                "Design operating systems",
                "Develop computer hardware",
                "Replace all databases",
              ],
              answer: "Create and analyze data visualizations",
              explanation:
                "Power BI helps users analyze data and communicate insights through reports and dashboards.",
            },
            {
              question: "Which application is commonly used to create Power BI reports?",
              options: [
                "Power BI Desktop",
                "Windows Notepad",
                "Paint",
                "Calculator",
              ],
              answer: "Power BI Desktop",
              explanation:
                "Power BI Desktop provides the tools needed to connect data, model it, and build reports.",
            },
          ],
        },
        {
          id: "pbi-w1-l2",
          title: "Navigating the Power BI Interface",
          introduction:
            "Learn the main areas of Power BI Desktop and how to use them when creating reports.",
          sections: [
            {
              heading: "Report, Data, and Model views",
              content:
                "Report view is used to create visualizations. Data view allows inspection of loaded tables. Model view displays relationships between tables.",
            },
            {
              heading: "Fields and visualizations",
              content:
                "The Data or Fields pane lists tables and columns. The Visualizations pane helps you select charts and configure their fields, formatting, and appearance.",
            },
          ],
          example:
            "Select a column chart, add Month to the horizontal axis, and add Revenue to the values field to visualize monthly revenue.",
          exercise:
            "Open Power BI Desktop and identify Report view, Data view, and Model view.",
          quiz: [
            {
              question: "Which view is mainly used to create charts?",
              options: [
                "Report view",
                "Model view",
                "File Explorer",
                "Command Prompt",
              ],
              answer: "Report view",
              explanation:
                "Report view provides the report canvas and visualization tools.",
            },
            {
              question: "Where can you inspect relationships between tables?",
              options: [
                "Model view",
                "Report title",
                "Windows settings",
                "Recycle Bin",
              ],
              answer: "Model view",
              explanation:
                "Model view displays tables and their relationships.",
            },
          ],
        },
        {
          id: "pbi-w1-l3",
          title: "Connecting to Data Sources",
          introduction:
            "Learn how to import data from common sources such as Excel, CSV files, and databases.",
          sections: [
            {
              heading: "Supported data sources",
              content:
                "Power BI can connect to Excel workbooks, CSV and text files, SQL databases, web sources, and many other supported services.",
            },
            {
              heading: "Import versus DirectQuery",
              content:
                "Import loads data into the Power BI model. DirectQuery sends queries to the underlying source for supported operations instead of importing all data into the model. The best choice depends on data size, freshness, source capabilities, and performance needs.",
            },
          ],
          example:
            "Choose Home > Get data > Excel workbook, select a sales workbook, preview the available sheets, and load the required table.",
          exercise:
            "Connect Power BI Desktop to a sample Excel or CSV file and inspect its preview.",
          quiz: [
            {
              question: "Which feature is used to connect to an Excel file?",
              options: [
                "Get data",
                "Page navigation",
                "Text formatting",
                "Publish only",
              ],
              answer: "Get data",
              explanation:
                "Get data lets you select and connect to supported data sources.",
            },
            {
              question: "What does Import mode do?",
              options: [
                "Loads data into the Power BI model",
                "Deletes every source file",
                "Creates a new operating system",
                "Disables all visualizations",
              ],
              answer: "Loads data into the Power BI model",
              explanation:
                "Import mode stores a copy of the selected data in the Power BI model.",
            },
          ],
        },
        {
          id: "pbi-w1-l4",
          title: "Understanding Data Types and Tables",
          introduction:
            "Learn why correct column data types and well-structured tables are important for accurate analysis.",
          sections: [
            {
              heading: "Common data types",
              content:
                "Common types include text, whole number, decimal number, date, date/time, and true/false. Correct types help Power BI sort, calculate, and visualize values properly.",
            },
            {
              heading: "Table structure",
              content:
                "A well-structured table generally has a clear header row, consistent column meanings, and one record per row. Avoid mixing unrelated information in a single column when separate fields are more appropriate.",
            },
          ],
          example:
            "Change OrderDate to Date and SalesAmount to Decimal number so date charts and numerical calculations work correctly.",
          exercise:
            "Inspect a sample dataset and identify the correct data type for each column.",
          quiz: [
            {
              question: "Which data type is suitable for an order date?",
              options: [
                "Date",
                "Boolean",
                "Image",
                "Unstructured paragraph",
              ],
              answer: "Date",
              explanation:
                "The Date type enables date-based filtering, sorting, and time analysis.",
            },
            {
              question: "Why should data types be correct?",
              options: [
                "To support accurate calculations and analysis",
                "To make every value text",
                "To remove all columns",
                "To prevent reports from opening",
              ],
              answer: "To support accurate calculations and analysis",
              explanation:
                "Correct data types help Power BI interpret and process values properly.",
            },
          ],
        },
      ],
      assignment:
        "Import a sample sales dataset, explore the Power BI interface, and verify the data types of at least five columns.",
    },
    {
      title: "Week 2: Power Query and Data Cleaning",
      lessons: [
        {
          id: "pbi-w2-l1",
          title: "Introduction to Power Query",
          introduction:
            "Learn how Power Query prepares raw data before it enters the Power BI data model.",
          sections: [
            {
              heading: "What is Power Query?",
              content:
                "Power Query is a data preparation and transformation tool. It can filter rows, change data types, remove errors, split columns, combine queries, and reshape data.",
            },
            {
              heading: "Applied transformation steps",
              content:
                "Power Query records transformations as applied steps. When data is refreshed, these steps can be executed again against the source data.",
            },
          ],
          example:
            "Open Transform data, select a sales table, remove an unnecessary column, and rename another column to make its meaning clearer.",
          exercise:
            "Open Power Query Editor and perform two transformations on a sample dataset.",
          quiz: [
            {
              question: "What is the primary role of Power Query?",
              options: [
                "Prepare and transform data",
                "Build computer processors",
                "Manage computer passwords",
                "Replace all reports with images",
              ],
              answer: "Prepare and transform data",
              explanation:
                "Power Query provides tools for cleaning and transforming data before analysis.",
            },
            {
              question: "What are applied steps?",
              options: [
                "Recorded data transformation operations",
                "Chart colors only",
                "Database passwords",
                "Operating system updates",
              ],
              answer: "Recorded data transformation operations",
              explanation:
                "Applied steps record the transformations that Power Query performs.",
            },
          ],
        },
        {
          id: "pbi-w2-l2",
          title: "Cleaning Missing and Duplicate Data",
          introduction:
            "Understand how to identify missing values, duplicate records, and common data quality problems.",
          sections: [
            {
              heading: "Missing values",
              content:
                "Missing values may appear as nulls, blanks, or empty text. Depending on the business meaning, analysts may retain them, replace them, or remove affected records.",
            },
            {
              heading: "Duplicate records",
              content:
                "Duplicates can inflate totals and distort analysis. Before removing them, identify what defines a duplicate, such as a unique transaction ID or a combination of relevant columns.",
            },
          ],
          example:
            "In Power Query, inspect a CustomerID column, determine whether duplicate IDs are valid, and remove duplicates only when the business rules permit it.",
          exercise:
            "Clean a sample table by reviewing missing values and identifying duplicate records.",
          quiz: [
            {
              question: "What can happen if duplicate sales transactions are counted twice?",
              options: [
                "Sales totals may be overstated",
                "All dates become correct",
                "The dataset becomes encrypted",
                "Charts stop using numbers",
              ],
              answer: "Sales totals may be overstated",
              explanation:
                "Counting the same transaction more than once can inflate reported sales.",
            },
            {
              question: "What should you determine before removing duplicates?",
              options: [
                "The business rule defining a duplicate",
                "The report background color",
                "The user's screen size",
                "The number of chart titles",
              ],
              answer: "The business rule defining a duplicate",
              explanation:
                "Some repeated values are valid, so duplicates must be evaluated in context.",
            },
          ],
        },
        {
          id: "pbi-w2-l3",
          title: "Transforming and Combining Data",
          introduction:
            "Learn how to reshape columns and combine data from different tables or files.",
          sections: [
            {
              heading: "Common transformations",
              content:
                "Power Query supports splitting columns, merging columns, replacing values, pivoting, unpivoting, grouping rows, and changing text case.",
            },
            {
              heading: "Append and merge",
              content:
                "Append combines rows from tables with compatible columns. Merge joins tables using matching columns, similar to joining tables in a database.",
            },
          ],
          example:
            "Append January and February sales tables to create one sales table, or merge a sales table with a product lookup table using ProductID.",
          exercise:
            "Combine two monthly sales tables using Append, then identify a suitable key for merging customer information.",
          quiz: [
            {
              question: "Which operation combines rows from multiple tables?",
              options: [
                "Append",
                "Merge",
                "Format title",
                "Sort visual",
              ],
              answer: "Append",
              explanation:
                "Append stacks rows from tables into a combined table.",
            },
            {
              question: "Which operation joins tables using matching columns?",
              options: [
                "Merge",
                "Append",
                "Rename report",
                "Change canvas size",
              ],
              answer: "Merge",
              explanation:
                "Merge joins tables based on selected matching columns.",
            },
          ],
        },
        {
          id: "pbi-w2-l4",
          title: "Loading and Refreshing Prepared Data",
          introduction:
            "Learn how to apply transformations and refresh a report when source data changes.",
          sections: [
            {
              heading: "Apply transformations",
              content:
                "After preparing data in Power Query, use Close and Apply to load the changes into the Power BI model.",
            },
            {
              heading: "Data refresh",
              content:
                "Refresh updates data from supported sources and reruns applicable query steps. Refresh behavior depends on the source, credentials, connection mode, and service configuration.",
            },
          ],
          example:
            "Update the source sales CSV with a new transaction, refresh the report, and verify that the new record appears.",
          exercise:
            "Apply your transformations, refresh the data, and document whether the new source records are included.",
          quiz: [
            {
              question: "What does Close and Apply do in Power BI Desktop?",
              options: [
                "Applies query changes and loads them into the model",
                "Deletes the source database",
                "Automatically creates all business measures",
                "Removes every relationship",
              ],
              answer: "Applies query changes and loads them into the model",
              explanation:
                "Close and Apply commits the Power Query changes to the model.",
            },
            {
              question: "Why is data refresh useful?",
              options: [
                "To retrieve updated data from supported sources",
                "To remove all report pages",
                "To disable filters",
                "To rename every table",
              ],
              answer: "To retrieve updated data from supported sources",
              explanation:
                "Refresh updates the data available to the report, subject to its connection and refresh configuration.",
            },
          ],
        },
      ],
      assignment:
        "Prepare a sales dataset in Power Query. Fix data types, review missing values and duplicates, combine tables if appropriate, and load the cleaned result.",
    },
    {
      title: "Week 3: Data Modeling, DAX, and Visualizations",
      lessons: [
        {
          id: "pbi-w3-l1",
          title: "Data Modeling and Relationships",
          introduction:
            "Understand how tables connect and why a good data model improves report accuracy and usability.",
          sections: [
            {
              heading: "Relationships",
              content:
                "Relationships connect tables through related columns. A common example is a one-to-many relationship between a Products table and a Sales table using ProductID.",
            },
            {
              heading: "Star schema",
              content:
                "A star schema typically places a central fact table, such as Sales, around dimension tables such as Date, Product, Customer, and Region. This structure often makes analytical models easier to understand and maintain.",
            },
          ],
          example:
            "Connect Products[ProductID] to Sales[ProductID] so product names can be used to analyze sales transactions.",
          exercise:
            "Create a relationship between two sample tables and identify the fact table and dimension table.",
          quiz: [
            {
              question: "What is the purpose of a relationship?",
              options: [
                "Connect related tables for analysis",
                "Change the computer's operating system",
                "Delete all data",
                "Create an email account",
              ],
              answer: "Connect related tables for analysis",
              explanation:
                "Relationships allow data from related tables to work together in reports.",
            },
            {
              question: "Which table commonly stores sales transactions in a star schema?",
              options: [
                "Fact table",
                "Report theme",
                "Navigation pane",
                "Tooltip page",
              ],
              answer: "Fact table",
              explanation:
                "A sales fact table generally contains transaction-level data and numerical values for analysis.",
            },
          ],
        },
        {
          id: "pbi-w3-l2",
          title: "Introduction to DAX Measures",
          introduction:
            "Learn the basics of Data Analysis Expressions (DAX), the formula language used in Power BI models.",
          sections: [
            {
              heading: "What is DAX?",
              content:
                "DAX is used to create measures, calculated columns, and calculated tables. Measures are evaluated in the current filter context and are commonly used for aggregations in reports.",
            },
            {
              heading: "Basic measures",
              content:
                "SUM adds values in a column. COUNTROWS counts rows in a table. DISTINCTCOUNT counts unique values. Measures can be created from the Modeling or Table tools in Power BI Desktop.",
            },
          ],
          example:
            "Create a measure: Total Sales = SUM(Sales[SalesAmount]). Use it in a card visual to show total sales for the current filter context.",
          exercise:
            "Create measures for total sales and total transaction rows using SUM and COUNTROWS.",
          quiz: [
            {
              question: "What does DAX stand for?",
              options: [
                "Data Analysis Expressions",
                "Data Access Exchange",
                "Digital Application Extension",
                "Database Automation XML",
              ],
              answer: "Data Analysis Expressions",
              explanation:
                "DAX is the formula language used for calculations in Power BI and other supported tabular models.",
            },
            {
              question: "Which DAX function adds numeric values in a column?",
              options: [
                "SUM",
                "DISTINCTCOUNT",
                "FORMAT",
                "RELATEDTABLE",
              ],
              answer: "SUM",
              explanation:
                "SUM returns the total of the numeric values in the specified column.",
            },
          ],
        },
        {
          id: "pbi-w3-l3",
          title: "Calculated Columns and Filter Context",
          introduction:
            "Understand the difference between calculated columns and measures, and how filters affect calculations.",
          sections: [
            {
              heading: "Calculated columns versus measures",
              content:
                "Calculated columns produce a value for each row and are stored in the model. Measures calculate results based on the current report context and are commonly used for dynamic summaries.",
            },
            {
              heading: "Filter context",
              content:
                "Filter context is the set of filters that affect a calculation. It can come from slicers, visual fields, page filters, report filters, and DAX expressions.",
            },
          ],
          example:
            "A measure Total Sales = SUM(Sales[SalesAmount]) displays different totals when a user filters the report to a particular region.",
          exercise:
            "Create a calculated column for a simple row-level category and a measure for total sales. Explain how a region slicer affects the measure.",
          quiz: [
            {
              question: "Which calculation is generally evaluated for each row and stored in the model?",
              options: [
                "Calculated column",
                "Report filter",
                "Slicer",
                "Chart title",
              ],
              answer: "Calculated column",
              explanation:
                "A calculated column produces row-level values and stores them in the model.",
            },
            {
              question: "What can change a measure's filter context?",
              options: [
                "A report slicer",
                "A desktop wallpaper",
                "A file icon",
                "A keyboard layout",
              ],
              answer: "A report slicer",
              explanation:
                "A slicer filters report data and can change the result returned by a measure.",
            },
          ],
        },
        {
          id: "pbi-w3-l4",
          title: "Creating Effective Data Visualizations",
          introduction:
            "Choose suitable charts and present business findings in a clear, accurate way.",
          sections: [
            {
              heading: "Choosing chart types",
              content:
                "Bar charts compare categories. Line charts show trends over time. Scatter charts help explore relationships between numeric variables. Cards highlight important single values, while tables and matrices display detailed information.",
            },
            {
              heading: "Visual design",
              content:
                "Use meaningful titles, readable labels, consistent formatting, and appropriate scales. Avoid excessive colors and unnecessary visual elements that distract from the business question.",
            },
          ],
          example:
            "Use a line chart for monthly revenue, a bar chart for sales by product, and a card for total profit.",
          exercise:
            "Create three visuals from a sales dataset and write one business insight from each.",
          quiz: [
            {
              question: "Which chart is usually suitable for showing a trend over time?",
              options: [
                "Line chart",
                "Pie chart for every category",
                "Decorative image",
                "Text box only",
              ],
              answer: "Line chart",
              explanation:
                "Line charts make changes and trends across time easier to see.",
            },
            {
              question: "What is a good visualization practice?",
              options: [
                "Use clear titles and appropriate chart types",
                "Use as many colors as possible",
                "Hide all axis labels",
                "Display unrelated metrics together",
              ],
              answer: "Use clear titles and appropriate chart types",
              explanation:
                "Clear design helps viewers interpret the data correctly.",
            },
          ],
        },
      ],
      assignment:
        "Build a basic sales report with related tables, DAX measures for sales and profit, and at least three suitable visualizations.",
    },
    {
      title: "Week 4: Interactive Dashboards and Final Project",
      lessons: [
        {
          id: "pbi-w4-l1",
          title: "Slicers, Filters, and Drill-Down",
          introduction:
            "Make reports interactive so users can explore data by date, product, and region.",
          sections: [
            {
              heading: "Slicers and filters",
              content:
                "Slicers are visible report controls that let users select values such as a year or region. Filters can also be applied at visual, page, and report levels.",
            },
            {
              heading: "Drill-down and drill-through",
              content:
                "Drill-down moves through levels in a hierarchy, such as year to quarter to month. Drill-through opens a detail page filtered to the selected data context when configured.",
            },
          ],
          example:
            "Add a Region slicer and a Year slicer so users can compare sales for a chosen region and reporting period.",
          exercise:
            "Add two slicers and configure a visual hierarchy to test drill-down.",
          quiz: [
            {
              question: "What is a slicer used for?",
              options: [
                "Let users interactively filter report data",
                "Delete model relationships",
                "Write source code automatically",
                "Change database passwords",
              ],
              answer: "Let users interactively filter report data",
              explanation:
                "Slicers provide interactive controls for filtering report visuals.",
            },
            {
              question: "What does drill-down allow users to do?",
              options: [
                "Explore different levels of a hierarchy",
                "Delete every report page",
                "Replace DAX with SQL automatically",
                "Remove all filters permanently",
              ],
              answer: "Explore different levels of a hierarchy",
              explanation:
                "Drill-down reveals more detailed levels within a configured hierarchy.",
            },
          ],
        },
        {
          id: "pbi-w4-l2",
          title: "Dashboard Layout and Report Design",
          introduction:
            "Organize report pages so users can quickly understand the most important business metrics.",
          sections: [
            {
              heading: "Page layout",
              content:
                "Place important metrics near the top, group related charts, and maintain consistent spacing. Organize the report around the decisions users need to make.",
            },
            {
              heading: "Accessibility and usability",
              content:
                "Use readable text, meaningful visual titles, adequate contrast, and descriptive alternative text where appropriate. Do not rely on color alone to communicate critical information.",
            },
          ],
          example:
            "Create a sales overview page with Total Sales, Total Profit, and Order Count cards, followed by monthly trends and regional comparisons.",
          exercise:
            "Arrange a report page with three KPI cards and two charts. Review readability and alignment.",
          quiz: [
            {
              question: "What should guide dashboard layout?",
              options: [
                "The user's business questions",
                "Random placement of visuals",
                "The number of available fonts",
                "Decorative effects only",
              ],
              answer: "The user's business questions",
              explanation:
                "A useful dashboard is organized around the information users need to understand and act on.",
            },
            {
              question: "Why is accessible color design important?",
              options: [
                "It helps more users interpret the report",
                "It guarantees correct source data",
                "It removes the need for labels",
                "It automatically creates relationships",
              ],
              answer: "It helps more users interpret the report",
              explanation:
                "Readable contrast and alternatives to color-only meaning improve report accessibility.",
            },
          ],
        },
        {
          id: "pbi-w4-l3",
          title: "Publishing, Sharing, and Refreshing Reports",
          introduction:
            "Learn the basic process for publishing reports and understanding access and refresh requirements.",
          sections: [
            {
              heading: "Publishing reports",
              content:
                "Power BI Desktop can publish reports to a workspace in Power BI Service. Sharing and collaboration depend on workspace roles, permissions, licensing, and organizational settings.",
            },
            {
              heading: "Security and refresh",
              content:
                "Only share reports with authorized users. Data refresh may require credentials and, for some on-premises sources, a configured gateway. Scheduled refresh availability depends on the source and service configuration.",
            },
          ],
          example:
            "Publish a practice report to an authorized workspace, verify that the intended audience has access, and review the dataset's refresh settings.",
          exercise:
            "Describe the steps required to publish a report and list two checks to perform before sharing it.",
          quiz: [
            {
              question: "Where can a Power BI Desktop report be published?",
              options: [
                "Power BI Service workspace",
                "A chart's axis label",
                "A DAX formula only",
                "A column header",
              ],
              answer: "Power BI Service workspace",
              explanation:
                "Reports can be published from Desktop to a workspace in Power BI Service.",
            },
            {
              question: "What should be checked before sharing a report?",
              options: [
                "Access permissions and data sensitivity",
                "The desktop wallpaper",
                "The keyboard color",
                "The number of unused fonts",
              ],
              answer: "Access permissions and data sensitivity",
              explanation:
                "Appropriate permissions and data protection help prevent unauthorized access.",
            },
          ],
        },
        {
          id: "pbi-w4-l4",
          title: "Final Project: Sales Performance Dashboard",
          introduction:
            "Apply your Power BI skills to build an interactive dashboard that answers real business questions.",
          sections: [
            {
              heading: "Project requirements",
              content:
                "Use a sales dataset with fields such as OrderDate, Product, Region, SalesAmount, Quantity, and Profit. Import the data, clean it, verify data types, and build a suitable data model.",
            },
            {
              heading: "Analysis and delivery",
              content:
                "Create measures for Total Sales, Total Profit, and Total Quantity. Add KPI cards, monthly trends, product comparisons, and regional analysis. Include slicers for date and region, then check the report for accuracy and usability.",
            },
          ],
          example:
            "A dashboard reveals that one region generates high revenue but has a lower profit margin, prompting the team to investigate its costs and discounts.",
          exercise:
            "Complete the dashboard, test every slicer, verify calculations against the source data, and write three evidence-based business insights.",
          quiz: [
            {
              question: "What should you do before presenting your final dashboard?",
              options: [
                "Validate calculations and test interactions",
                "Remove all report titles",
                "Ignore missing data",
                "Hide every important metric",
              ],
              answer: "Validate calculations and test interactions",
              explanation:
                "Checking calculations and interactions helps ensure the report is reliable and usable.",
            },
            {
              question: "What makes a business insight useful?",
              options: [
                "It is supported by data and relates to a business question",
                "It is based only on decoration",
                "It avoids examining the numbers",
                "It contains unrelated charts",
              ],
              answer:
                "It is supported by data and relates to a business question",
              explanation:
                "Useful insights connect reliable evidence to a relevant business question or decision.",
            },
          ],
        },
      ],
      assignment:
        "Deliver a complete interactive Sales Performance Dashboard with cleaned data, a suitable model, DAX measures, KPI cards, charts, slicers, and three written business insights.",
    },
  ],
};

export default powerBiCourse;

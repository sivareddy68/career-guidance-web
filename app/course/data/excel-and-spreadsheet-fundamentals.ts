
export const excelAndSpreadsheetFundamentalsCourse = {
  title: "Excel and Spreadsheet Fundamentals",
  description:
    "Learn Microsoft Excel and spreadsheet fundamentals, including data entry, formatting, formulas, functions, charts, sorting, filtering, and practical data analysis.",

  project:
    "Create a complete Student Performance Management spreadsheet. Enter student details and marks, calculate totals, averages, grades, and results using formulas, format the data professionally, apply sorting and filtering, and create charts to visualize student performance.",

  weeks: [
    {
      title: "Week 1: Introduction to Excel and Spreadsheet Basics",
      description:
        "Understand spreadsheets, Excel interface, worksheets, cells, data entry, and basic formatting.",

      assignment:
        "Create a personal information spreadsheet containing at least 10 records. Use appropriate headings, formatting, borders, and column widths.",

      lessons: [
        {
          title: "Introduction to Microsoft Excel",
          duration: "30 minutes",
          introduction:
            "Microsoft Excel is a spreadsheet application used to organize, calculate, analyze, and present information. It is widely used in education, business, finance, and data analysis.",

          sections: [
            {
              heading: "What is Microsoft Excel?",
              content:
                "Excel is a spreadsheet program that stores information in rows and columns. It allows users to perform calculations, organize data, create charts, and analyze information efficiently.",
            },
            {
              heading: "Uses of Excel",
              content:
                "Excel is used for maintaining student records, preparing budgets, managing employee information, calculating marks, tracking expenses, and preparing reports.",
            },
            {
              heading: "Understanding Workbooks and Worksheets",
              content:
                "A workbook is an Excel file. A worksheet is an individual spreadsheet inside that workbook. One workbook can contain multiple worksheets.",
            },
          ],

          example:
            "A college can use Excel to maintain student names, roll numbers, attendance, subject marks, and examination results.",

          exercise:
            "Open Microsoft Excel or another spreadsheet application. Create a blank workbook and identify the workbook, worksheet, rows, columns, and cells.",

          quiz: [
            {
              question: "What is Microsoft Excel mainly used for?",
              options: [
                "Editing videos",
                "Organizing and analyzing data",
                "Creating operating systems",
                "Designing websites",
              ],
              answer: "Organizing and analyzing data",
              explanation:
                "Excel is designed to organize, calculate, and analyze spreadsheet data.",
            },
            {
              question: "What is an Excel workbook?",
              options: [
                "A collection of worksheets",
                "A single cell",
                "A chart only",
                "A formula",
              ],
              answer: "A collection of worksheets",
              explanation:
                "An Excel workbook is a file that can contain multiple worksheets.",
            },
            {
              question: "Which application is commonly used for spreadsheets?",
              options: ["MS Word", "MS Excel", "Paint", "Notepad"],
              answer: "MS Excel",
              explanation:
                "Microsoft Excel is a spreadsheet application.",
            },
            {
              question: "What is a worksheet?",
              options: [
                "An individual spreadsheet inside a workbook",
                "A computer folder",
                "A presentation slide",
                "A database server",
              ],
              answer: "An individual spreadsheet inside a workbook",
              explanation:
                "A worksheet contains the rows, columns, and cells where data is stored.",
            },
            {
              question: "Which of these is an example of an Excel use?",
              options: [
                "Calculating student marks",
                "Recording audio",
                "Playing videos",
                "Installing software",
              ],
              answer: "Calculating student marks",
              explanation:
                "Excel can calculate totals, averages, and student results.",
            },
          ],
        },

        {
          title: "Understanding the Excel Interface",
          duration: "35 minutes",
          introduction:
            "The Excel interface contains different tools and sections that help users create and manage spreadsheets.",

          sections: [
            {
              heading: "Ribbon",
              content:
                "The Ribbon is the toolbar area containing tabs such as Home, Insert, Page Layout, Formulas, Data, Review, and View.",
            },
            {
              heading: "Formula Bar",
              content:
                "The Formula Bar displays the contents or formula of the currently selected cell. Users can edit cell values and formulas here.",
            },
            {
              heading: "Name Box",
              content:
                "The Name Box displays the address of the selected cell. It can also be used to navigate directly to a specific cell.",
            },
            {
              heading: "Sheet Tabs",
              content:
                "Sheet tabs appear at the bottom of the workbook and allow users to switch between worksheets.",
            },
          ],

          example:
            "Select cell B3. The Name Box displays B3, and the Formula Bar displays the value or formula stored in that cell.",

          exercise:
            "Open Excel and identify the Ribbon, Formula Bar, Name Box, worksheet area, and sheet tabs.",

          quiz: [
            {
              question: "Where can you see the contents of a selected cell?",
              options: [
                "Formula Bar",
                "Status Bar",
                "Title Bar",
                "Scroll Bar",
              ],
              answer: "Formula Bar",
              explanation:
                "The Formula Bar displays the selected cell's value or formula.",
            },
            {
              question: "What does the Name Box display?",
              options: [
                "Cell address",
                "File size",
                "Font name",
                "Chart title",
              ],
              answer: "Cell address",
              explanation:
                "The Name Box displays the address of the selected cell.",
            },
            {
              question: "Which tab contains font and alignment tools?",
              options: ["Home", "Data", "Review", "View"],
              answer: "Home",
              explanation:
                "The Home tab contains common formatting and editing tools.",
            },
            {
              question: "Where are worksheet tabs generally located?",
              options: [
                "Bottom of the workbook",
                "Top of the Ribbon",
                "Inside the Formula Bar",
                "In the Name Box",
              ],
              answer: "Bottom of the workbook",
              explanation:
                "Worksheet tabs are generally displayed along the bottom.",
            },
            {
              question: "Which Ribbon tab is commonly used to insert charts?",
              options: ["Insert", "Review", "View", "File"],
              answer: "Insert",
              explanation:
                "The Insert tab provides chart and other insertion options.",
            },
          ],
        },

        {
          title: "Rows, Columns, Cells, and Cell References",
          duration: "35 minutes",
          introduction:
            "Excel organizes information using rows, columns, and cells. Understanding cell references is essential for entering formulas.",

          sections: [
            {
              heading: "Rows and Columns",
              content:
                "Rows run horizontally and are identified by numbers. Columns run vertically and are identified by letters.",
            },
            {
              heading: "Cells",
              content:
                "A cell is the intersection of a row and a column. Each cell can contain text, numbers, dates, or formulas.",
            },
            {
              heading: "Cell References",
              content:
                "A cell reference identifies a cell using its column letter and row number. For example, A1 refers to the cell in column A and row 1.",
            },
            {
              heading: "Cell Ranges",
              content:
                "A range is a group of cells. For example, A1:A5 represents cells A1, A2, A3, A4, and A5.",
            },
          ],

          example:
            "If A1 contains 10 and A2 contains 20, the range A1:A2 contains both values.",

          exercise:
            "Enter numbers into cells A1 to A5. Select the range A1:A5 and identify its starting and ending cells.",

          quiz: [
            {
              question: "How are rows identified in Excel?",
              options: ["Numbers", "Letters", "Symbols", "Colors"],
              answer: "Numbers",
              explanation:
                "Rows are identified using numbers.",
            },
            {
              question: "How are columns identified?",
              options: ["Letters", "Numbers", "Dates", "Symbols"],
              answer: "Letters",
              explanation:
                "Columns are identified using letters.",
            },
            {
              question: "What is a cell?",
              options: [
                "Intersection of a row and column",
                "A complete workbook",
                "A chart",
                "A Ribbon tab",
              ],
              answer: "Intersection of a row and column",
              explanation:
                "A cell is formed where a row and a column intersect.",
            },
            {
              question: "What does cell reference B5 mean?",
              options: [
                "Column B and row 5",
                "Column 5 and row B",
                "Worksheet B",
                "Workbook 5",
              ],
              answer: "Column B and row 5",
              explanation:
                "B5 identifies column B and row 5.",
            },
            {
              question: "What does A1:A5 represent?",
              options: [
                "A range of cells",
                "A single cell",
                "A workbook name",
                "A chart type",
              ],
              answer: "A range of cells",
              explanation:
                "A1:A5 represents the group of cells from A1 through A5.",
            },
          ],
        },

        {
          title: "Entering and Editing Data",
          duration: "40 minutes",
          introduction:
            "Data entry is one of the most important spreadsheet skills. Excel allows users to enter and edit text, numbers, dates, and other information.",

          sections: [
            {
              heading: "Entering Data",
              content:
                "Select a cell, type the required information, and press Enter. Excel stores the entered information in the selected cell.",
            },
            {
              heading: "Editing Cell Contents",
              content:
                "You can edit a cell by selecting it and typing new content, using the Formula Bar, or pressing F2.",
            },
            {
              heading: "Copy, Cut, and Paste",
              content:
                "Copy duplicates selected content. Cut moves content from one location to another. Paste inserts copied or cut content.",
            },
            {
              heading: "AutoFill",
              content:
                "AutoFill helps extend patterns such as numbers, dates, and formulas by dragging the fill handle.",
            },
          ],

          example:
            "Enter January in A1 and February in A2. Use AutoFill to continue the month sequence.",

          exercise:
            "Create a table containing 10 student names, roll numbers, and departments. Practice editing, copying, and filling values.",

          quiz: [
            {
              question: "Which key commonly confirms data entry in a cell?",
              options: ["Enter", "Shift", "Esc", "Caps Lock"],
              answer: "Enter",
              explanation:
                "Pressing Enter confirms the entered value and moves the selection.",
            },
            {
              question: "Which key can be used to edit the active cell?",
              options: ["F2", "F5", "F7", "F12"],
              answer: "F2",
              explanation:
                "F2 allows users to edit the active cell.",
            },
            {
              question: "What does Copy do?",
              options: [
                "Duplicates selected content",
                "Deletes the workbook",
                "Closes Excel",
                "Changes the worksheet name",
              ],
              answer: "Duplicates selected content",
              explanation:
                "Copy creates a duplicate of the selected content.",
            },
            {
              question: "What is AutoFill used for?",
              options: [
                "Extending patterns and formulas",
                "Deleting all worksheets",
                "Changing passwords",
                "Closing workbooks",
              ],
              answer: "Extending patterns and formulas",
              explanation:
                "AutoFill can extend number sequences, dates, and formulas.",
            },
            {
              question: "Which shortcut is commonly used to paste copied data?",
              options: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
              answer: "Ctrl + V",
              explanation:
                "Ctrl + V pastes copied or cut content.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Formatting and Basic Excel Formulas",
      description:
        "Learn professional spreadsheet formatting, number formats, formulas, mathematical operators, and cell references.",

      assignment:
        "Create a monthly expense sheet with at least 10 expense records. Apply formatting and calculate the total and average expenses using formulas.",

      lessons: [
        {
          title: "Formatting Cells and Data",
          duration: "35 minutes",
          introduction:
            "Formatting improves the appearance and readability of spreadsheets. Excel provides tools to change fonts, colors, borders, alignment, and cell appearance.",

          sections: [
            {
              heading: "Font Formatting",
              content:
                "You can change font type, size, color, and style. Bold, italic, and underline help highlight important information.",
            },
            {
              heading: "Cell Background and Borders",
              content:
                "Fill Color changes the background of a cell. Borders help separate information and make tables easier to read.",
            },
            {
              heading: "Alignment",
              content:
                "Alignment controls the position of information inside a cell. Text can be aligned left, center, or right and vertically positioned.",
            },
            {
              heading: "Merge and Wrap Text",
              content:
                "Merge Cells combines selected cells into one cell. Wrap Text displays long content on multiple lines within a cell.",
            },
          ],

          example:
            "Create a heading called Monthly Expenses. Make it bold, increase its font size, apply a background color, and center the heading.",

          exercise:
            "Create a formatted student information table using bold headings, borders, background colors, and appropriate alignment.",

          quiz: [
            {
              question: "Which option makes text bold?",
              options: ["Bold", "Italic", "Wrap Text", "Merge"],
              answer: "Bold",
              explanation:
                "Bold makes text appear thicker and more prominent.",
            },
            {
              question: "What does Wrap Text do?",
              options: [
                "Displays long text on multiple lines",
                "Deletes text",
                "Changes cell references",
                "Creates a chart",
              ],
              answer: "Displays long text on multiple lines",
              explanation:
                "Wrap Text displays long cell content across multiple lines.",
            },
            {
              question: "Which feature combines multiple cells?",
              options: [
                "Merge Cells",
                "Sort",
                "Filter",
                "AutoSum",
              ],
              answer: "Merge Cells",
              explanation:
                "Merge Cells combines selected cells into one cell.",
            },
            {
              question: "What is the purpose of cell borders?",
              options: [
                "Separate and organize information",
                "Calculate totals",
                "Create formulas",
                "Delete worksheets",
              ],
              answer: "Separate and organize information",
              explanation:
                "Borders visually separate cells and improve table readability.",
            },
            {
              question: "Which alignment places content in the middle horizontally?",
              options: ["Center", "Left", "Right", "Top"],
              answer: "Center",
              explanation:
                "Center alignment positions content in the horizontal center.",
            },
          ],
        },

        {
          title: "Number Formats and Data Presentation",
          duration: "35 minutes",
          introduction:
            "Number formatting controls how numbers, dates, percentages, and currencies appear in Excel without necessarily changing their underlying values.",

          sections: [
            {
              heading: "General and Number Formats",
              content:
                "General is Excel's default format. Number format displays numerical values and allows decimal-place adjustments.",
            },
            {
              heading: "Currency and Accounting",
              content:
                "Currency and Accounting formats display monetary values with currency symbols and appropriate number alignment.",
            },
            {
              heading: "Percentage Format",
              content:
                "Percentage format displays a decimal value as a percentage. For example, 0.75 is displayed as 75%.",
            },
            {
              heading: "Date and Time Formats",
              content:
                "Excel supports different date and time formats, allowing users to display dates in readable styles.",
            },
          ],

          example:
            "Enter 0.85 into a cell and apply Percentage format. Excel displays it as 85%.",

          exercise:
            "Create a sales table with product prices, quantities, discount percentages, and purchase dates. Apply suitable number formats.",

          quiz: [
            {
              question: "Which format displays 0.75 as 75%?",
              options: [
                "Percentage",
                "Currency",
                "Date",
                "Text",
              ],
              answer: "Percentage",
              explanation:
                "Percentage formatting displays decimal values as percentages.",
            },
            {
              question: "Which format is suitable for displaying money?",
              options: ["Currency", "Date", "General", "Text"],
              answer: "Currency",
              explanation:
                "Currency formatting displays monetary values with currency symbols.",
            },
            {
              question: "What is Excel's default cell format?",
              options: ["General", "Currency", "Percentage", "Date"],
              answer: "General",
              explanation:
                "General is the default format for new cells.",
            },
            {
              question: "Which format is suitable for purchase dates?",
              options: ["Date", "Currency", "Percentage", "Accounting"],
              answer: "Date",
              explanation:
                "Date formatting displays date values in a readable date style.",
            },
            {
              question: "Does number formatting always change the underlying value?",
              options: [
                "No, it generally changes how the value is displayed",
                "Yes, it always deletes the value",
                "Yes, it always doubles the value",
                "No, it removes the worksheet",
              ],
              answer: "No, it generally changes how the value is displayed",
              explanation:
                "Formatting usually changes the display rather than the stored numerical value.",
            },
          ],
        },

        {
          title: "Introduction to Formulas and Operators",
          duration: "40 minutes",
          introduction:
            "Formulas allow Excel to perform calculations automatically. They begin with an equals sign and can use cell references, numbers, and mathematical operators.",

          sections: [
            {
              heading: "Creating Formulas",
              content:
                "Excel formulas generally begin with an equals sign (=). For example, =A1+B1 adds the values stored in cells A1 and B1.",
            },
            {
              heading: "Arithmetic Operators",
              content:
                "The main arithmetic operators are + for addition, - for subtraction, * for multiplication, and / for division.",
            },
            {
              heading: "Using Cell References",
              content:
                "Cell references allow formulas to use values stored in other cells. If a referenced value changes, Excel recalculates the formula.",
            },
            {
              heading: "Order of Operations",
              content:
                "Excel follows mathematical operator precedence. Parentheses can be used to control the order of calculations.",
            },
          ],

          example:
            "If A1 contains 20 and B1 contains 10, the formula =A1+B1 returns 30.",

          exercise:
            "Create a marks table for five students. Calculate total marks using addition formulas.",

          quiz: [
            {
              question: "Which symbol begins a formula in Excel?",
              options: ["=", "+", "#", "%"],
              answer: "=",
              explanation:
                "Excel formulas begin with an equals sign.",
            },
            {
              question: "Which operator is used for multiplication?",
              options: ["*", "/", "+", "-"],
              answer: "*",
              explanation:
                "The asterisk symbol performs multiplication.",
            },
            {
              question: "What does =A1+B1 calculate?",
              options: [
                "Addition of A1 and B1",
                "Subtraction of A1 and B1",
                "Multiplication of A1 and B1",
                "Division of A1 and B1",
              ],
              answer: "Addition of A1 and B1",
              explanation:
                "The plus operator adds the values of the two referenced cells.",
            },
            {
              question: "Which operator performs division?",
              options: ["/", "*", "+", "-"],
              answer: "/",
              explanation:
                "The forward slash is used for division.",
            },
            {
              question: "Why are cell references useful in formulas?",
              options: [
                "They use values from other cells",
                "They remove all formulas",
                "They change worksheet names",
                "They create new files",
              ],
              answer: "They use values from other cells",
              explanation:
                "Cell references allow formulas to calculate using existing spreadsheet data.",
            },
          ],
        },

        {
          title: "Relative, Absolute, and Mixed Cell References",
          duration: "45 minutes",
          introduction:
            "Cell references control how formulas behave when copied to other cells. Excel supports relative, absolute, and mixed references.",

          sections: [
            {
              heading: "Relative References",
              content:
                "A relative reference changes when a formula is copied. For example, A1 may change to A2 when the formula is moved down one row.",
            },
            {
              heading: "Absolute References",
              content:
                "An absolute reference keeps both the column and row fixed. For example, $A$1 remains unchanged when copied.",
            },
            {
              heading: "Mixed References",
              content:
                "A mixed reference fixes either the column or the row. Examples include $A1 and A$1.",
            },
            {
              heading: "Using the F4 Key",
              content:
                "While editing a formula reference, pressing F4 can cycle through relative, absolute, and mixed reference styles in Excel for Windows.",
            },
          ],

          example:
            "If a tax rate is stored in B1, the formula =A2*$B$1 keeps the tax-rate reference fixed when copied to other rows.",

          exercise:
            "Create a price and tax calculation table. Store the tax rate in one cell and use an absolute reference to calculate tax for multiple products.",

          quiz: [
            {
              question: "Which is an absolute cell reference?",
              options: ["$A$1", "A1", "A$1", "$A1"],
              answer: "$A$1",
              explanation:
                "An absolute reference fixes both the column and row.",
            },
            {
              question: "What happens to a relative reference when copied?",
              options: [
                "It adjusts based on the new position",
                "It always remains fixed",
                "It deletes the formula",
                "It becomes a chart",
              ],
              answer: "It adjusts based on the new position",
              explanation:
                "Relative references adjust according to the formula's new location.",
            },
            {
              question: "Which reference fixes only the column?",
              options: ["$A1", "A$1", "$A$1", "A1"],
              answer: "$A1",
              explanation:
                "The dollar sign before A fixes the column, while the row remains relative.",
            },
            {
              question: "Which reference fixes only the row?",
              options: ["A$1", "$A1", "$A$1", "A1"],
              answer: "A$1",
              explanation:
                "The dollar sign before 1 fixes the row.",
            },
            {
              question: "Which key can cycle through reference styles while editing a reference?",
              options: ["F4", "F1", "F5", "F12"],
              answer: "F4",
              explanation:
                "F4 can cycle through cell reference styles in Excel for Windows.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Excel Functions and Data Management",
      description:
        "Learn essential Excel functions, logical calculations, conditional formatting, sorting, filtering, and data validation.",

      assignment:
        "Create a student marks analysis spreadsheet using SUM, AVERAGE, MAX, MIN, COUNT, and IF. Apply conditional formatting and filter the student records.",

      lessons: [
        {
          title: "SUM, AVERAGE, MIN, and MAX Functions",
          duration: "40 minutes",
          introduction:
            "Excel provides built-in functions that simplify calculations and reduce manual work.",

          sections: [
            {
              heading: "SUM Function",
              content:
                "SUM adds numerical values in a range. Example: =SUM(B2:B6).",
            },
            {
              heading: "AVERAGE Function",
              content:
                "AVERAGE calculates the arithmetic mean of numerical values. Example: =AVERAGE(B2:B6).",
            },
            {
              heading: "MIN Function",
              content:
                "MIN returns the smallest numerical value in a selected range. Example: =MIN(B2:B6).",
            },
            {
              heading: "MAX Function",
              content:
                "MAX returns the largest numerical value in a selected range. Example: =MAX(B2:B6).",
            },
          ],

          example:
            "If B2:B4 contains 10, 20, and 30, =SUM(B2:B4) returns 60 and =AVERAGE(B2:B4) returns 20.",

          exercise:
            "Enter five student marks and calculate their total, average, highest mark, and lowest mark using Excel functions.",

          quiz: [
            {
              question: "Which function adds values?",
              options: ["SUM", "MIN", "MAX", "COUNT"],
              answer: "SUM",
              explanation:
                "SUM adds the numerical values in a range.",
            },
            {
              question: "Which function calculates the average?",
              options: ["AVERAGE", "SUM", "MAX", "MIN"],
              answer: "AVERAGE",
              explanation:
                "AVERAGE calculates the arithmetic mean of numerical values.",
            },
            {
              question: "Which function finds the smallest value?",
              options: ["MIN", "MAX", "SUM", "COUNT"],
              answer: "MIN",
              explanation:
                "MIN returns the smallest numerical value.",
            },
            {
              question: "Which function finds the largest value?",
              options: ["MAX", "MIN", "AVERAGE", "COUNT"],
              answer: "MAX",
              explanation:
                "MAX returns the largest numerical value.",
            },
            {
              question: "What is the result of =SUM(10,20,30)?",
              options: ["60", "50", "40", "30"],
              answer: "60",
              explanation:
                "Adding 10, 20, and 30 gives 60.",
            },
          ],
        },

        {
          title: "COUNT, COUNTA, and COUNTBLANK Functions",
          duration: "35 minutes",
          introduction:
            "Excel provides counting functions to analyze how much data is present in a worksheet.",

          sections: [
            {
              heading: "COUNT Function",
              content:
                "COUNT counts cells containing numerical values. Example: =COUNT(A1:A10).",
            },
            {
              heading: "COUNTA Function",
              content:
                "COUNTA counts non-empty cells, including cells containing text, numbers, or other values. Example: =COUNTA(A1:A10).",
            },
            {
              heading: "COUNTBLANK Function",
              content:
                "COUNTBLANK counts empty cells in a selected range. Example: =COUNTBLANK(A1:A10).",
            },
            {
              heading: "Choosing the Right Function",
              content:
                "Use COUNT for numerical entries, COUNTA for non-empty cells, and COUNTBLANK for empty cells.",
            },
          ],

          example:
            "If A1 contains 10, A2 contains Rahul, and A3 is empty, COUNT(A1:A3) returns 1, COUNTA(A1:A3) returns 2, and COUNTBLANK(A1:A3) returns 1.",

          exercise:
            "Create a student attendance table and use COUNT, COUNTA, and COUNTBLANK to analyze the entries.",

          quiz: [
            {
              question: "Which function counts cells containing numbers?",
              options: ["COUNT", "COUNTA", "COUNTBLANK", "SUM"],
              answer: "COUNT",
              explanation:
                "COUNT counts cells containing numerical values.",
            },
            {
              question: "Which function counts non-empty cells?",
              options: ["COUNTA", "COUNT", "MIN", "MAX"],
              answer: "COUNTA",
              explanation:
                "COUNTA counts cells that contain data.",
            },
            {
              question: "Which function counts empty cells?",
              options: [
                "COUNTBLANK",
                "COUNTA",
                "COUNT",
                "AVERAGE",
              ],
              answer: "COUNTBLANK",
              explanation:
                "COUNTBLANK counts blank cells in a range.",
            },
            {
              question: "Does COUNT normally count text entries?",
              options: [
                "No, it counts numerical values",
                "Yes, it counts every text entry",
                "It counts only blank cells",
                "It counts worksheets",
              ],
              answer: "No, it counts numerical values",
              explanation:
                "COUNT counts numerical entries rather than ordinary text entries.",
            },
            {
              question: "Which function is suitable for counting filled student-name cells?",
              options: ["COUNTA", "COUNTBLANK", "MIN", "MAX"],
              answer: "COUNTA",
              explanation:
                "COUNTA counts non-empty cells, including text entries.",
            },
          ],
        },

        {
          title: "IF Function and Logical Formulas",
          duration: "45 minutes",
          introduction:
            "Logical functions help Excel make decisions based on conditions. The IF function returns one result when a condition is true and another when it is false.",

          sections: [
            {
              heading: "Understanding the IF Function",
              content:
                "The syntax is =IF(logical_test, value_if_true, value_if_false). Excel checks the condition and returns the corresponding result.",
            },
            {
              heading: "Comparison Operators",
              content:
                "Comparison operators include greater than (>), less than (<), equal to (=), greater than or equal to (>=), and less than or equal to (<=).",
            },
            {
              heading: "AND Function",
              content:
                "AND returns TRUE when all specified conditions are true. It can be used inside an IF formula.",
            },
            {
              heading: "OR Function",
              content:
                "OR returns TRUE when at least one specified condition is true. It can also be used with IF.",
            },
          ],

         example:
  'If a student\'s marks are in B2, use =IF(B2>=40,"Pass","Fail") to display the result.',

exercise:
  "Create a marks sheet for 10 students. Use IF to display Pass or Fail based on a minimum mark of 40.",

          quiz: [
            {
              question: "Which function performs a logical test?",
              options: ["IF", "SUM", "MAX", "MIN"],
              answer: "IF",
              explanation:
                "IF evaluates a condition and returns a result based on whether it is true or false.",
            },
            {
              question: "What does the AND function return when all conditions are true?",
              options: ["TRUE", "FALSE", "BLANK", "ERROR"],
              answer: "TRUE",
              explanation:
                "AND returns TRUE when every supplied condition is true.",
            },
            {
              question: "When does OR return TRUE?",
              options: [
                "When at least one condition is true",
                "Only when every condition is false",
                "Only when cells are blank",
                "Only when values are equal",
              ],
              answer: "When at least one condition is true",
              explanation:
                "OR returns TRUE when one or more conditions are true.",
            },
            {
              question: "Which operator means greater than or equal to?",
              options: [">=", "<=", "<", "<>"],
              answer: ">=",
              explanation:
                "The >= operator checks whether a value is greater than or equal to another value.",
            },
            {
              question: 'What does =IF(50>=40,"Pass","Fail") return?',
              options: ["Pass", "Fail", "50", "TRUE"],
              answer: "Pass",
              explanation:
                "50 is greater than or equal to 40, so IF returns Pass.",
            },
          ],
        },

        {
          title: "Sorting, Filtering, and Data Validation",
          duration: "45 minutes",
          introduction:
            "Excel provides data management tools to organize records, display specific information, and control the values entered into cells.",

          sections: [
            {
              heading: "Sorting Data",
              content:
                "Sorting arranges data in ascending or descending order. Text can be sorted alphabetically, while numbers and dates can be sorted by value.",
            },
            {
              heading: "Filtering Data",
              content:
                "Filtering displays records that match selected conditions while temporarily hiding records that do not match.",
            },
            {
              heading: "Data Validation",
              content:
                "Data Validation controls what users can enter into selected cells. For example, you can create a dropdown list containing department names.",
            },
            {
              heading: "Removing Duplicates",
              content:
                "Remove Duplicates helps identify and remove repeated records based on selected columns.",
            },
          ],

          example:
            "In a student table, apply a filter to display only students from the ECE department. Sort their marks from highest to lowest.",

          exercise:
            "Create a student database with 15 records. Sort the marks, filter by department, and create a dropdown list for student status.",

          quiz: [
            {
              question: "What is the purpose of sorting?",
              options: [
                "Arranging data in an order",
                "Deleting formulas",
                "Creating passwords",
                "Changing file extensions",
              ],
              answer: "Arranging data in an order",
              explanation:
                "Sorting organizes records in ascending or descending order.",
            },
            {
              question: "What does filtering do?",
              options: [
                "Displays records matching conditions",
                "Deletes every record",
                "Changes all formulas",
                "Creates a new workbook",
              ],
              answer: "Displays records matching conditions",
              explanation:
                "Filtering displays records that meet selected criteria.",
            },
            {
              question: "Which feature creates a dropdown list in a cell?",
              options: [
                "Data Validation",
                "Conditional Formatting",
                "AutoSum",
                "Freeze Panes",
              ],
              answer: "Data Validation",
              explanation:
                "Data Validation can create dropdown lists and restrict cell entries.",
            },
            {
              question: "What does Remove Duplicates do?",
              options: [
                "Removes repeated records",
                "Changes font size",
                "Creates charts",
                "Calculates averages",
              ],
              answer: "Removes repeated records",
              explanation:
                "Remove Duplicates identifies and removes duplicate entries.",
            },
            {
              question: "Which sort order displays the highest number first?",
              options: [
                "Largest to Smallest",
                "Smallest to Largest",
                "A to Z",
                "Oldest to Newest",
              ],
              answer: "Largest to Smallest",
              explanation:
                "Largest to Smallest arranges numerical values in descending order.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Charts, Analysis, and Practical Projects",
      description:
        "Learn conditional formatting, charts, tables, PivotTables, and practical spreadsheet reporting.",

      assignment:
        "Prepare a sales performance report containing product details, sales calculations, conditional formatting, sorting, filtering, and at least two charts.",

      lessons: [
        {
          title: "Conditional Formatting",
          duration: "40 minutes",
          introduction:
            "Conditional Formatting automatically changes the appearance of cells based on specified conditions. It helps users identify important patterns in data.",

          sections: [
            {
              heading: "Highlight Cell Rules",
              content:
                "Highlight Cell Rules can highlight values greater than, less than, equal to, or within a specified range.",
            },
            {
              heading: "Data Bars",
              content:
                "Data Bars display horizontal bars inside cells. Longer bars represent larger values relative to other values in the selected range.",
            },
            {
              heading: "Color Scales",
              content:
                "Color Scales use different colors to represent relative numerical values, helping users identify high and low values.",
            },
            {
              heading: "Icon Sets",
              content:
                "Icon Sets display symbols such as arrows, flags, or traffic lights based on cell values.",
            },
          ],

          example:
            "Apply Conditional Formatting to student marks so that values below 40 are highlighted in red.",

          exercise:
            "Create a marks table and apply conditional formatting to highlight low marks, high marks, and performance ranges.",

          quiz: [
            {
              question: "What is Conditional Formatting used for?",
              options: [
                "Formatting cells based on conditions",
                "Creating a new workbook",
                "Deleting worksheets",
                "Changing passwords",
              ],
              answer: "Formatting cells based on conditions",
              explanation:
                "Conditional Formatting changes cell appearance according to specified rules.",
            },
            {
              question: "Which feature displays bars inside cells?",
              options: [
                "Data Bars",
                "Color Scales",
                "Icon Sets",
                "Borders",
              ],
              answer: "Data Bars",
              explanation:
                "Data Bars visually represent values using horizontal bars inside cells.",
            },
            {
              question: "What do Color Scales help identify?",
              options: [
                "Relative high and low values",
                "Worksheet names",
                "File sizes",
                "Formula errors only",
              ],
              answer: "Relative high and low values",
              explanation:
                "Color Scales use colors to show differences in numerical values.",
            },
            {
              question: "Which feature can display arrows or traffic-light symbols?",
              options: [
                "Icon Sets",
                "Data Bars",
                "Wrap Text",
                "Merge Cells",
              ],
              answer: "Icon Sets",
              explanation:
                "Icon Sets display symbols based on cell values and conditions.",
            },
            {
              question: "Can Conditional Formatting highlight values below 40?",
              options: [
                "Yes, using a cell rule",
                "No, it only works with text",
                "No, it only creates charts",
                "Yes, but only in a new workbook",
              ],
              answer: "Yes, using a cell rule",
              explanation:
                "A Highlight Cells Rule can format values less than a specified number.",
            },
          ],
        },

        {
          title: "Creating Charts and Graphs",
          duration: "45 minutes",
          introduction:
            "Charts convert numerical data into visual representations. They make comparisons, trends, and patterns easier to understand.",

          sections: [
            {
              heading: "Column and Bar Charts",
              content:
                "Column and Bar Charts compare values across different categories. Column charts use vertical bars, while bar charts use horizontal bars.",
            },
            {
              heading: "Line Charts",
              content:
                "Line Charts are commonly used to display trends over time, such as monthly sales or yearly growth.",
            },
            {
              heading: "Pie Charts",
              content:
                "Pie Charts show how individual categories contribute to a whole. They are useful for displaying proportions.",
            },
            {
              heading: "Chart Formatting",
              content:
                "Charts can be customized using titles, axis labels, legends, colors, and data labels to improve readability.",
            },
          ],

          example:
            "Create a column chart comparing sales of five products. Use a line chart to display sales changes across six months.",

          exercise:
            "Create a table containing monthly expenses and prepare a column chart and a pie chart from the data.",

          quiz: [
            {
              question: "Which chart is commonly used to show trends over time?",
              options: [
                "Line Chart",
                "Pie Chart",
                "Doughnut Chart",
                "Radar Chart",
              ],
              answer: "Line Chart",
              explanation:
                "Line Charts are useful for showing trends across time periods.",
            },
            {
              question: "Which chart displays proportions of a whole?",
              options: [
                "Pie Chart",
                "Line Chart",
                "Scatter Chart",
                "Area Chart",
              ],
              answer: "Pie Chart",
              explanation:
                "Pie Charts display the contribution of categories to a whole.",
            },
            {
              question: "Which chart is suitable for comparing product sales?",
              options: [
                "Column Chart",
                "Stock Chart",
                "Surface Chart",
                "Radar Chart",
              ],
              answer: "Column Chart",
              explanation:
                "Column Charts compare numerical values across categories.",
            },
            {
              question: "What does a chart legend explain?",
              options: [
                "The data series represented in the chart",
                "The workbook password",
                "The cell address",
                "The formula syntax",
              ],
              answer: "The data series represented in the chart",
              explanation:
                "A legend identifies the data series shown in a chart.",
            },
            {
              question: "Which Ribbon tab is commonly used to insert a chart?",
              options: ["Insert", "Review", "View", "File"],
              answer: "Insert",
              explanation:
                "The Insert tab provides options for creating charts.",
            },
          ],
        },

        {
          title: "Excel Tables and PivotTables",
          duration: "45 minutes",
          introduction:
            "Excel Tables and PivotTables help users organize large datasets and summarize information efficiently.",

          sections: [
            {
              heading: "Creating Excel Tables",
              content:
                "An Excel Table organizes a selected data range into a structured table. Tables support filters, structured references, and automatic expansion when new data is added directly below the table.",
            },
            {
              heading: "Table Features",
              content:
                "Excel Tables provide header filters, banded rows, automatic formatting, and convenient ways to manage structured records.",
            },
            {
              heading: "Introduction to PivotTables",
              content:
                "A PivotTable summarizes large datasets by grouping and calculating information. It can display totals, counts, and averages by categories.",
            },
            {
              heading: "PivotTable Fields",
              content:
                "PivotTables use fields such as Rows, Columns, Values, and Filters to organize and summarize information.",
            },
          ],

          example:
            "Use a PivotTable to summarize total sales by product category using a sales dataset.",

          exercise:
            "Create a sales table with product names, categories, quantities, and prices. Insert a PivotTable to summarize sales by category.",

          quiz: [
            {
              question: "What is an Excel Table used for?",
              options: [
                "Organizing structured data",
                "Creating operating systems",
                "Editing audio",
                "Installing applications",
              ],
              answer: "Organizing structured data",
              explanation:
                "Excel Tables organize data and provide useful table management features.",
            },
            {
              question: "What is the main purpose of a PivotTable?",
              options: [
                "Summarizing large datasets",
                "Changing computer settings",
                "Creating animations",
                "Writing programming languages",
              ],
              answer: "Summarizing large datasets",
              explanation:
                "PivotTables help summarize and analyze information from large datasets.",
            },
            {
              question: "Which PivotTable area contains values to calculate?",
              options: ["Values", "Rows", "Columns", "Filters"],
              answer: "Values",
              explanation:
                "The Values area contains fields that are summarized using calculations.",
            },
            {
              question: "Which PivotTable area can be used to group categories vertically?",
              options: ["Rows", "Values", "Filters", "Charts"],
              answer: "Rows",
              explanation:
                "The Rows area displays categories as row labels.",
            },
            {
              question: "Which keyboard shortcut commonly creates an Excel Table from selected data?",
              options: [
                "Ctrl + T",
                "Ctrl + P",
                "Ctrl + Z",
                "Ctrl + F",
              ],
              answer: "Ctrl + T",
              explanation:
                "Ctrl + T opens the Create Table option for a selected data range.",
            },
          ],
        },

        {
          title: "Final Practical Spreadsheet Project",
          duration: "60 minutes",
          introduction:
            "In this lesson, you will combine the skills learned throughout the course to create a complete spreadsheet project.",

          sections: [
            {
              heading: "Project Planning",
              content:
                "Choose a practical dataset such as student performance, monthly expenses, product sales, or employee records. Identify the columns and calculations required.",
            },
            {
              heading: "Data Entry and Formatting",
              content:
                "Enter accurate information, create suitable headings, format numbers, adjust column widths, and apply borders and alignment.",
            },
            {
              heading: "Calculations and Analysis",
              content:
                "Use formulas and functions such as SUM, AVERAGE, MIN, MAX, COUNT, and IF to calculate and analyze the data.",
            },
            {
              heading: "Visualization and Reporting",
              content:
                "Create charts, apply conditional formatting, and organize the final spreadsheet so that important information is easy to understand.",
            },
          ],

          example:
            "Build a student performance report containing names, roll numbers, subject marks, total marks, average marks, and pass or fail status.",

          exercise:
            "Complete the final project by creating a spreadsheet, checking calculations, applying formatting, and presenting the results using charts.",

          quiz: [
            {
              question: "Which function can calculate the total of student marks?",
              options: ["SUM", "MIN", "MAX", "COUNTBLANK"],
              answer: "SUM",
              explanation:
                "SUM calculates the total of numerical marks.",
            },
            {
              question: "Which function can calculate average marks?",
              options: ["AVERAGE", "COUNTBLANK", "MAX", "MIN"],
              answer: "AVERAGE",
              explanation:
                "AVERAGE calculates the mean of numerical marks.",
            },
            {
              question: "Which feature helps highlight students scoring below 40?",
              options: [
                "Conditional Formatting",
                "Merge Cells",
                "Freeze Panes",
                "Page Layout",
              ],
              answer: "Conditional Formatting",
              explanation:
                "Conditional Formatting can highlight cells based on a specified condition.",
            },
            {
              question: "Which chart is suitable for comparing subject marks?",
              options: [
                "Column Chart",
                "Pie Chart only",
                "Stock Chart",
                "Surface Chart",
              ],
              answer: "Column Chart",
              explanation:
                "A Column Chart is suitable for comparing marks across subjects.",
            },
            {
              question: "What should be checked before submitting a spreadsheet project?",
              options: [
                "Data accuracy and formulas",
                "Only the font color",
                "Only the worksheet name",
                "Only the file icon",
              ],
              answer: "Data accuracy and formulas",
              explanation:
                "Checking data and formulas helps ensure the spreadsheet produces reliable results.",
            },
          ],
        },
      ],
    },
  ],
};

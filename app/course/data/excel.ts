const excelCourse = {
  title: "Excel",
  description:
    "Learn Microsoft Excel fundamentals, worksheets, formulas, functions, data cleaning, sorting, filtering, charts, tables, pivot tables, and practical data analysis.",

  weeks: [
    {
      title: "Week 1: Excel Foundations",
      description:
        "Learn the Excel interface, workbooks, worksheets, cells, data entry, formatting, and basic calculations.",
      lessons: [
        {
          title: "Introduction to Excel and Workbooks",
          content: `
Microsoft Excel is a spreadsheet application used to store, organize, calculate, analyze, and present data.

Excel is commonly used for:
- Student marks.
- Budgets.
- Attendance records.
- Business reports.
- Sales data.
- Inventory.
- Project tracking.
- Basic data analysis.

An Excel file is commonly called a workbook.

A workbook can contain multiple worksheets.

A worksheet is organized into rows and columns.

Columns are identified using letters such as A, B, C, and D.

Rows are identified using numbers such as 1, 2, 3, and 4.

A cell is the intersection of a row and a column.

For example:
A1 refers to column A and row 1.

The selected cell is called the active cell.

A range is a group of cells.

For example:
A1:C5 represents a rectangular range from A1 through C5.

Excel can contain different types of information:
- Text.
- Numbers.
- Dates.
- Times.
- Formulas.
- Functions.

A good spreadsheet should have clear headings and consistent data.

For example, a student worksheet might contain:

Name | Roll Number | Marks | Attendance

Clear column headings make the data easier to understand and analyze.

Excel should not be treated only as a calculator. Its major value comes from organizing and analyzing structured data.
          `,
          quiz: [
            {
              question: "What is an Excel workbook?",
              options: [
                "An Excel file that can contain worksheets",
                "A single cell",
                "A chart only",
                "A formula only",
              ],
              answer: "An Excel file that can contain worksheets",
            },
            {
              question: "What is a worksheet?",
              options: [
                "A spreadsheet page inside a workbook",
                "A computer folder",
                "A database server",
                "A chart type",
              ],
              answer: "A spreadsheet page inside a workbook",
            },
            {
              question: "What does A1 identify?",
              options: [
                "A cell in column A and row 1",
                "Row A and column 1",
                "Worksheet A and workbook 1",
                "A chart named 1",
              ],
              answer: "A cell in column A and row 1",
            },
            {
              question: "What is a range such as A1:C5?",
              options: [
                "A group of cells from A1 through C5",
                "A single cell",
                "A worksheet name",
                "A workbook name",
              ],
              answer: "A group of cells from A1 through C5",
            },
            {
              question: "Which is an appropriate use of Excel?",
              options: [
                "Organizing and analyzing student marks",
                "Replacing an operating system",
                "Designing computer processors",
                "Managing network cables",
              ],
              answer: "Organizing and analyzing student marks",
            },
          ],
        },

        {
          title: "Data Entry and Cell Formatting",
          content: `
Data entry is one of the most basic Excel skills.

A cell can contain text, numbers, dates, times, or formulas.

When entering data, it is important to maintain consistent formats.

For example, if a column contains dates, use a consistent date format.

If a column contains marks, keep the values numeric rather than storing them as text.

Formatting changes how information is displayed.

Common formatting options include:
- Font style.
- Font size.
- Bold.
- Italic.
- Alignment.
- Borders.
- Number format.
- Decimal places.
- Date format.

Number formatting is particularly important.

For example, a value can be displayed as:
- General number.
- Currency.
- Percentage.
- Date.
- Decimal number.

Formatting does not necessarily change the underlying value.

For example, a number can be displayed as a percentage using percentage formatting.

Cell alignment can improve readability.

Column widths and row heights can also be adjusted.

Good formatting should make the data easier to understand rather than simply making the spreadsheet decorative.

Headers can be emphasized using bold text and appropriate alignment.

Large datasets should use consistent formatting across similar columns.

A well-formatted worksheet makes later analysis easier because the structure is clear.
          `,
          quiz: [
            {
              question: "Which type of data should normally remain numeric when calculations are required?",
              options: [
                "Marks",
                "Student names",
                "Comments",
                "Descriptions",
              ],
              answer: "Marks",
            },
            {
              question: "What does number formatting mainly change?",
              options: [
                "How a value is displayed",
                "The computer processor",
                "The workbook file name",
                "The worksheet count",
              ],
              answer: "How a value is displayed",
            },
            {
              question: "Which formatting is useful for column headings?",
              options: [
                "Bold text and clear alignment",
                "Random font sizes",
                "Hidden text",
                "Unrelated colors only",
              ],
              answer: "Bold text and clear alignment",
            },
            {
              question: "Which format is suitable for monetary values?",
              options: [
                "Currency",
                "Date",
                "Time",
                "Text-only",
              ],
              answer: "Currency",
            },
            {
              question: "Why should formatting be consistent?",
              options: [
                "It improves readability and makes data easier to understand",
                "It increases processor speed",
                "It automatically fixes formulas",
                "It removes duplicate rows automatically",
              ],
              answer:
                "It improves readability and makes data easier to understand",
            },
          ],
        },

        {
          title: "Basic Formulas and Operators",
          content: `
Excel formulas allow calculations to be performed automatically.

A formula normally begins with an equals sign.

For example:

=A1+B1

adds the values in A1 and B1.

Basic arithmetic operators include:
- + for addition.
- - for subtraction.
- * for multiplication.
- / for division.

For example:

=A2*B2

multiplies the values in A2 and B2.

Excel follows normal mathematical precedence rules.

Parentheses can be used to control the order of calculation.

For example:

=(A1+B1)*C1

calculates the addition first and then multiplies the result by C1.

Cell references make formulas useful because a formula can automatically calculate using different cell values.

If A1 contains 10 and B1 contains 20:

=A1+B1

returns 30.

If the values later change, Excel recalculates the formula.

This is one of the major advantages of spreadsheets.

Formulas should be checked carefully for:
- Incorrect cell references.
- Missing operators.
- Incorrect parentheses.
- Division by zero.
- Incorrect assumptions about the data.

Formulas can also reference ranges and other worksheets.

Understanding simple formulas provides the foundation for more advanced Excel functions.
          `,
          quiz: [
            {
              question: "What symbol normally starts an Excel formula?",
              options: [
                "=",
                "#",
                "@",
                "$",
              ],
              answer: "=",
            },
            {
              question: "Which operator performs multiplication?",
              options: [
                "*",
                "+",
                "-",
                "/",
              ],
              answer: "*",
            },
            {
              question: "What does =A1+B1 calculate?",
              options: [
                "The sum of A1 and B1",
                "The difference between A1 and B1",
                "The product of A1 and B1",
                "The division of A1 by B1",
              ],
              answer: "The sum of A1 and B1",
            },
            {
              question: "Why are parentheses useful in formulas?",
              options: [
                "They control the order of calculation",
                "They create a worksheet",
                "They rename cells",
                "They delete values",
              ],
              answer: "They control the order of calculation",
            },
            {
              question: "What happens when referenced values change?",
              options: [
                "Excel can recalculate the formula result",
                "The formula is automatically deleted",
                "The workbook is always closed",
                "The worksheet becomes read-only",
              ],
              answer: "Excel can recalculate the formula result",
            },
          ],
        },

        {
          title: "Relative and Absolute Cell References",
          content: `
Cell references are important when formulas are copied to other cells.

A relative reference changes when the formula is copied.

For example:

=A2*B2

If this formula is copied one row downward, Excel normally changes it to:

=A3*B3

This is useful when calculating many rows using the same pattern.

An absolute reference remains fixed when a formula is copied.

For example:

=$A$1

The dollar signs indicate that both the column and row are fixed.

A mixed reference fixes either the row or the column.

Examples include:
- $A1 fixes column A.
- A$1 fixes row 1.

Relative references are useful for repeated calculations.

Absolute references are useful when many formulas should use the same constant value.

For example, suppose a tax rate is stored in B1.

A calculation might use:

=A2*$B$1

When copied downward, A2 changes to A3, A4, and so on, while $B$1 remains fixed.

Understanding references prevents many spreadsheet errors.

When copying formulas, always check whether each reference should move or remain fixed.
          `,
          quiz: [
            {
              question: "What happens to a relative reference when a formula is copied?",
              options: [
                "It normally changes according to the new position",
                "It always stays fixed",
                "It is deleted",
                "It becomes text",
              ],
              answer: "It normally changes according to the new position",
            },
            {
              question: "Which is an absolute cell reference?",
              options: [
                "$A$1",
                "A1",
                "A$1",
                "$A1",
              ],
              answer: "$A$1",
            },
            {
              question: "What does $A1 fix?",
              options: [
                "The column A",
                "The row 1",
                "Both row and column",
                "Neither row nor column",
              ],
              answer: "The column A",
            },
            {
              question: "What does A$1 fix?",
              options: [
                "The row 1",
                "The column A",
                "Both row and column",
                "The worksheet",
              ],
              answer: "The row 1",
            },
            {
              question: "Why are absolute references useful?",
              options: [
                "They keep a reference fixed when formulas are copied",
                "They delete formulas",
                "They prevent calculations",
                "They convert numbers to text",
              ],
              answer:
                "They keep a reference fixed when formulas are copied",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Excel Functions and Data Management",
      description:
        "Learn important Excel functions, sorting, filtering, tables, and practical data management.",
      lessons: [
        {
          title: "SUM, AVERAGE, MIN, and MAX",
          content: `
Excel provides built-in functions for common calculations.

SUM adds values in a range.

For example:

=SUM(B2:B10)

calculates the total of the values from B2 through B10.

AVERAGE calculates the arithmetic mean.

For example:

=AVERAGE(B2:B10)

calculates the average value.

MIN returns the smallest value.

For example:

=MIN(B2:B10)

MAX returns the largest value.

These functions are useful for analyzing datasets.

For student marks, for example:
- SUM can calculate total marks.
- AVERAGE can calculate average marks.
- MIN can identify the lowest mark.
- MAX can identify the highest mark.

Functions reduce the need to write long formulas manually.

Ranges should be checked carefully to make sure all required records are included.

Blank cells and text values can affect calculations depending on the function and data structure.

A good spreadsheet should separate raw data from summary calculations when possible.

For example, a student table can contain the original marks while summary cells calculate totals and averages.

Using functions makes spreadsheets more reusable because the results can update when the underlying data changes.
          `,
          quiz: [
            {
              question: "Which function adds values?",
              options: [
                "SUM",
                "AVERAGE",
                "MIN",
                "MAX",
              ],
              answer: "SUM",
            },
            {
              question: "Which function calculates the arithmetic mean?",
              options: [
                "AVERAGE",
                "SUM",
                "COUNT",
                "MAX",
              ],
              answer: "AVERAGE",
            },
            {
              question: "Which function returns the smallest value?",
              options: [
                "MIN",
                "MAX",
                "SUM",
                "AVERAGE",
              ],
              answer: "MIN",
            },
            {
              question: "Which function returns the largest value?",
              options: [
                "MAX",
                "MIN",
                "SUM",
                "AVERAGE",
              ],
              answer: "MAX",
            },
            {
              question: "What does =SUM(B2:B10) calculate?",
              options: [
                "The total of values from B2 through B10",
                "The average of B2 through B10",
                "The smallest value in B2 through B10",
                "The largest value in B2 through B10",
              ],
              answer: "The total of values from B2 through B10",
            },
          ],
        },

        {
          title: "COUNT, COUNTA, and Conditional Functions",
          content: `
Excel includes functions that help count and evaluate data.

COUNT counts cells containing numbers.

For example:

=COUNT(B2:B20)

counts numeric values in the range.

COUNTA counts non-empty cells.

This can include text, numbers, and other non-empty values.

COUNTIF counts cells that satisfy a condition.

For example:

=COUNTIF(C2:C20,"Pass")

counts cells containing the specified value.

SUMIF can add values that satisfy a condition.

For example:

=SUMIF(B2:B20,">50",C2:C20)

adds values in C2:C20 when the corresponding value in B2:B20 is greater than 50.

The IF function performs a logical test.

For example:

=IF(B2>=40,"Pass","Fail")

checks whether B2 is at least 40.

Conditional functions are useful for:
- Attendance analysis.
- Student results.
- Sales reports.
- Inventory checks.
- Business rules.

When writing criteria, quotation marks and operators should be used correctly.

Complex formulas can combine multiple functions, but they should remain understandable.

Testing formulas with a few known values is a useful way to verify that the logic works as intended.
          `,
          quiz: [
            {
              question: "What does COUNT normally count?",
              options: [
                "Numeric cells",
                "Only blank cells",
                "Only formulas",
                "Only worksheets",
              ],
              answer: "Numeric cells",
            },
            {
              question: "What does COUNTA count?",
              options: [
                "Non-empty cells",
                "Only numbers",
                "Only blank cells",
                "Only dates",
              ],
              answer: "Non-empty cells",
            },
            {
              question: "What does COUNTIF do?",
              options: [
                "Counts cells that satisfy a condition",
                "Adds every cell",
                "Deletes matching cells",
                "Formats the worksheet",
              ],
              answer: "Counts cells that satisfy a condition",
            },
            {
              question: "What does the IF function do?",
              options: [
                "Returns results based on a logical condition",
                "Creates a worksheet",
                "Sorts every column automatically",
                "Deletes formulas",
              ],
              answer:
                "Returns results based on a logical condition",
            },
            {
              question: "Which formula can label a mark of 40 or more as Pass?",
              options: [
                '=IF(B2>=40,"Pass","Fail")',
                '=SUM(B2>=40,"Pass","Fail")',
                '=COUNT(B2>=40,"Pass","Fail")',
                '=MAX(B2>=40,"Pass","Fail")',
              ],
              answer: '=IF(B2>=40,"Pass","Fail")',
            },
          ],
        },

        {
          title: "Sorting, Filtering, and Excel Tables",
          content: `
Sorting and filtering help users work with large datasets.

Sorting rearranges records according to selected values.

For example, student marks can be sorted from highest to lowest.

Names can be sorted alphabetically.

Filtering temporarily displays only rows that satisfy selected conditions.

For example, a student dataset can be filtered to show only students with attendance below a certain value.

Filtering does not necessarily delete the hidden records.

Excel Tables provide a structured way to manage datasets.

A table normally has:
- Column headings.
- Data rows.
- Automatic filtering.
- Structured formatting.

Tables can make formulas and references easier to manage.

When data is added to a properly structured table, Excel can often extend formatting and formulas automatically.

Good data organization is important before sorting or filtering.

Each column should represent a meaningful field.

Each row should normally represent one record.

Avoid putting multiple unrelated values in a single cell when the information needs to be analyzed separately.

Sorting and filtering are especially useful for reports because they allow users to focus on specific records without changing the original data structure.
          `,
          quiz: [
            {
              question: "What does sorting do?",
              options: [
                "Rearranges records according to selected values",
                "Deletes records",
                "Creates formulas",
                "Changes the workbook format",
              ],
              answer:
                "Rearranges records according to selected values",
            },
            {
              question: "What does filtering do?",
              options: [
                "Displays records that satisfy selected conditions",
                "Permanently deletes all other records",
                "Creates a new operating system",
                "Removes formulas",
              ],
              answer:
                "Displays records that satisfy selected conditions",
            },
            {
              question: "What should a row usually represent in a structured dataset?",
              options: [
                "One record",
                "One workbook",
                "One formula",
                "One chart",
              ],
              answer: "One record",
            },
            {
              question: "What should a column usually represent?",
              options: [
                "A meaningful field or attribute",
                "An entire workbook",
                "A chart only",
                "A computer",
              ],
              answer: "A meaningful field or attribute",
            },
            {
              question: "Why are Excel Tables useful?",
              options: [
                "They provide structured data management and filtering",
                "They replace formulas completely",
                "They prevent all data errors",
                "They delete duplicate records automatically in every case",
              ],
              answer:
                "They provide structured data management and filtering",
            },
          ],
        },

        {
          title: "Data Cleaning and Validation",
          content: `
Data analysis is only useful when the underlying data is reasonably clean.

Data cleaning means identifying and correcting problems in a dataset.

Common data-quality problems include:
- Duplicate records.
- Missing values.
- Inconsistent spelling.
- Incorrect data types.
- Extra spaces.
- Invalid dates.
- Incorrect numeric values.

For example, a department column might contain:
ECE
ece
E.C.E

These values may represent the same category but are inconsistent.

Cleaning should establish consistent representations.

TRIM can help remove unnecessary spaces from text.

Data validation can restrict what users are allowed to enter.

For example, a cell can be configured to accept only:
- Whole numbers.
- Decimal values.
- Dates.
- Values from a list.

A dropdown list can reduce typing mistakes.

Duplicate detection is another important part of data cleaning.

Before deleting duplicates, the data should be reviewed carefully because two similar records may legitimately represent different people or transactions.

Missing data should also be handled carefully.

A blank value does not always mean zero.

For example, a missing exam mark should not automatically be converted to zero without understanding the context.

Good data cleaning preserves the meaning of the original information while improving consistency and usability.
          `,
          quiz: [
            {
              question: "What is data cleaning?",
              options: [
                "Identifying and correcting data-quality problems",
                "Deleting every blank cell",
                "Changing all values to text",
                "Creating charts only",
              ],
              answer:
                "Identifying and correcting data-quality problems",
            },
            {
              question: "Which is a common data-quality problem?",
              options: [
                "Duplicate records",
                "Having column headings",
                "Using tables",
                "Using formulas",
              ],
              answer: "Duplicate records",
            },
            {
              question: "What can TRIM help with?",
              options: [
                "Removing unnecessary spaces from text",
                "Calculating averages",
                "Creating charts",
                "Sorting numbers",
              ],
              answer: "Removing unnecessary spaces from text",
            },
            {
              question: "What is data validation useful for?",
              options: [
                "Restricting entries to appropriate values or formats",
                "Deleting the workbook",
                "Replacing formulas",
                "Creating operating systems",
              ],
              answer:
                "Restricting entries to appropriate values or formats",
            },
            {
              question: "Why should a blank value not automatically be treated as zero?",
              options: [
                "A blank may represent missing information rather than zero",
                "Excel cannot store zero",
                "Zero is always text",
                "Blank cells are always errors",
              ],
              answer:
                "A blank may represent missing information rather than zero",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Analysis and Visualization",
      description:
        "Learn charts, conditional formatting, lookup functions, pivot tables, and practical analysis techniques.",
      lessons: [
        {
          title: "Charts and Data Visualization",
          content: `
Charts convert spreadsheet data into visual information.

Charts can make patterns and comparisons easier to understand.

Common chart types include:
- Column charts.
- Bar charts.
- Line charts.
- Pie charts.
- Scatter charts.

Column and bar charts are useful for comparing categories.

Line charts are useful for showing trends over time.

Pie charts can show parts of a whole when there are a small number of meaningful categories.

Scatter charts are useful for examining relationships between numerical variables.

Choosing the correct chart type is important.

For example, monthly sales over a year are often better represented by a line chart than a pie chart.

A chart should have:
- A meaningful title.
- Clear categories.
- Understandable values.
- Appropriate labels where needed.

Charts should not contain unnecessary decoration.

The purpose of a chart is to communicate information clearly.

Data selection is also important.

A chart created from the wrong range can produce a misleading result.

Before presenting a chart, check that the selected data and labels are correct.

Good visualization makes important patterns easier to identify without changing the underlying data.
          `,
          quiz: [
            {
              question: "What is the main purpose of a chart?",
              options: [
                "To communicate patterns and comparisons visually",
                "To delete data",
                "To replace the worksheet",
                "To prevent formulas",
              ],
              answer:
                "To communicate patterns and comparisons visually",
            },
            {
              question: "Which chart is commonly useful for trends over time?",
              options: [
                "Line chart",
                "Pie chart",
                "Text box",
                "Table only",
              ],
              answer: "Line chart",
            },
            {
              question: "Which chart is useful for comparing categories?",
              options: [
                "Bar chart",
                "Line chart only",
                "Scatter chart only",
                "Pie chart only",
              ],
              answer: "Bar chart",
            },
            {
              question: "Why is a chart title useful?",
              options: [
                "It helps explain what the chart represents",
                "It changes the underlying values",
                "It sorts the source data",
                "It deletes incorrect rows",
              ],
              answer:
                "It helps explain what the chart represents",
            },
            {
              question: "What should be checked before presenting a chart?",
              options: [
                "That the selected data and labels are correct",
                "That every chart uses the same type",
                "That all data is deleted",
                "That formulas are removed",
              ],
              answer:
                "That the selected data and labels are correct",
            },
          ],
        },

        {
          title: "Conditional Formatting",
          content: `
Conditional formatting changes the appearance of cells based on their values or conditions.

It is useful for quickly identifying important records.

For example:
- Marks below 40 can be highlighted.
- High sales can be emphasized.
- Duplicate values can be identified.
- Attendance below a required level can be highlighted.

Conditional formatting can use rules such as:
- Greater than.
- Less than.
- Equal to.
- Text contains.
- Duplicate values.
- Data bars.
- Color scales.

For example, if attendance is stored in column D, a rule can highlight values below a chosen threshold.

Conditional formatting does not normally change the underlying data.

It changes the visual presentation.

This makes it useful for dashboards and reports.

However, too many formatting rules can make a spreadsheet difficult to read.

Rules should be meaningful and easy to interpret.

Conditional formatting can help users notice exceptions without manually inspecting every row.

It is especially useful in large datasets where important values might otherwise be difficult to identify.

The formatting should support the analysis rather than become a distraction.
          `,
          quiz: [
            {
              question: "What does conditional formatting do?",
              options: [
                "Changes cell appearance based on conditions",
                "Changes the underlying computer hardware",
                "Deletes all values",
                "Creates a new workbook",
              ],
              answer:
                "Changes cell appearance based on conditions",
            },
            {
              question: "Which is a valid use of conditional formatting?",
              options: [
                "Highlight attendance below a threshold",
                "Install Excel",
                "Create a network connection",
                "Replace formulas with text",
              ],
              answer: "Highlight attendance below a threshold",
            },
            {
              question: "Does conditional formatting normally change the underlying value?",
              options: [
                "No",
                "Yes, always",
                "Only for text",
                "Only for dates",
              ],
              answer: "No",
            },
            {
              question: "Why is conditional formatting useful in large datasets?",
              options: [
                "It helps identify important or unusual values quickly",
                "It automatically fixes every error",
                "It deletes duplicate rows",
                "It replaces data validation",
              ],
              answer:
                "It helps identify important or unusual values quickly",
            },
            {
              question: "Why should too many formatting rules be avoided?",
              options: [
                "They can make the spreadsheet difficult to understand",
                "Excel cannot store rules",
                "Rules always delete values",
                "Rules prevent calculations",
              ],
              answer:
                "They can make the spreadsheet difficult to understand",
            },
          ],
        },

        {
          title: "Lookup Functions",
          content: `
Lookup functions help find information in a dataset.

They are useful when one table contains an identifier and another table contains related information.

For example, a student ID can be used to find the student's name or department.

Traditional Excel workbooks commonly use VLOOKUP.

VLOOKUP searches for a value in the first column of a selected table and returns related information from another column.

XLOOKUP is a newer and more flexible lookup function available in modern versions of Excel.

A lookup generally involves:
- A value to search for.
- A lookup range or table.
- A result to return.

Exact matching is often appropriate when looking up identifiers such as student IDs.

Lookup formulas should be checked carefully because mismatched data types or incorrect ranges can produce unexpected results.

For example, if one sheet stores an ID as text and another stores it as a number, a lookup may not behave as expected.

Lookup functions are useful for combining information from multiple structured datasets.

They reduce the need to manually copy values between worksheets.

When using lookups, make sure identifiers are unique when uniqueness is expected.

A clear data structure makes lookup operations much easier.
          `,
          quiz: [
            {
              question: "What is the purpose of a lookup function?",
              options: [
                "To find related information using a value or identifier",
                "To format every cell",
                "To create a chart automatically",
                "To delete duplicate rows",
              ],
              answer:
                "To find related information using a value or identifier",
            },
            {
              question: "Which function is a traditional Excel lookup function?",
              options: [
                "VLOOKUP",
                "SUM",
                "AVERAGE",
                "COUNT",
              ],
              answer: "VLOOKUP",
            },
            {
              question: "Which newer function provides flexible lookup capabilities in modern Excel?",
              options: [
                "XLOOKUP",
                "XCOUNT",
                "XSEARCHTABLE",
                "XDATA",
              ],
              answer: "XLOOKUP",
            },
            {
              question: "What is an example of a useful lookup key?",
              options: [
                "A unique student ID",
                "A random chart color",
                "A worksheet background",
                "A font size",
              ],
              answer: "A unique student ID",
            },
            {
              question: "Why can mismatched data types cause lookup problems?",
              options: [
                "The values may not be recognized as matching values",
                "Excel cannot create worksheets",
                "Charts become unavailable",
                "Formulas are automatically deleted",
              ],
              answer:
                "The values may not be recognized as matching values",
            },
          ],
        },

        {
          title: "Pivot Tables and Summary Analysis",
          content: `
Pivot tables are powerful tools for summarizing structured data.

They can quickly group and summarize large datasets.

For example, a sales dataset might contain:
- Product.
- Region.
- Salesperson.
- Month.
- Amount.

A pivot table can summarize total sales by region or product.

Typical pivot-table areas include:
- Rows.
- Columns.
- Values.
- Filters.

A field placed in Rows can create categories.

A field placed in Values can be summarized using operations such as:
- Sum.
- Count.
- Average.

Filters can restrict which records are included in the summary.

Pivot tables are useful because they can provide summaries without requiring long formulas.

The source data should be structured consistently.

Column headings should be clear.

Blank headings and inconsistent records can make pivot-table analysis difficult.

Pivot tables can also support dashboards when combined with charts and filters.

After changing the source data, a pivot table may need to be refreshed depending on how it is configured.

Pivot tables are especially useful when the same dataset needs to be examined from different perspectives.

They are an important Excel skill for business and data analysis.
          `,
          quiz: [
            {
              question: "What is a pivot table mainly used for?",
              options: [
                "Summarizing and analyzing structured data",
                "Editing operating systems",
                "Creating passwords",
                "Replacing worksheets",
              ],
              answer: "Summarizing and analyzing structured data",
            },
            {
              question: "Which area of a pivot table can contain categories?",
              options: [
                "Rows",
                "Password",
                "File system",
                "Formula bar only",
              ],
              answer: "Rows",
            },
            {
              question: "Which operation can be used to summarize numeric values?",
              options: [
                "Sum",
                "Delete",
                "Rename",
                "Encrypt",
              ],
              answer: "Sum",
            },
            {
              question: "Why are pivot tables useful?",
              options: [
                "They can summarize large datasets quickly",
                "They prevent all data errors",
                "They replace databases completely",
                "They automatically write programs",
              ],
              answer:
                "They can summarize large datasets quickly",
            },
            {
              question: "What may be required after source data changes?",
              options: [
                "Refreshing the pivot table",
                "Deleting the workbook",
                "Reinstalling Excel",
                "Changing the computer",
              ],
              answer: "Refreshing the pivot table",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced Excel and Practical Project",
      description:
        "Apply formulas, dashboards, data analysis, error checking, and reporting in a complete Excel project.",
      lessons: [
        {
          title: "Advanced Formulas and Error Handling",
          content: `
As spreadsheets become more complex, formulas may contain multiple functions and conditions.

Functions such as IF, AND, OR, SUMIF, COUNTIF, and lookup functions can be combined to perform practical analysis.

For example, an eligibility rule might require:
- Marks greater than or equal to 50.
- Attendance greater than or equal to 75.

A formula can combine these conditions.

Error handling is also important.

Common Excel errors include:
- #DIV/0!
- #VALUE!
- #REF!
- #N/A
- #NAME?

#DIV/0! commonly occurs when a formula attempts to divide by zero.

#REF! can indicate an invalid cell reference.

#VALUE! can occur when a formula receives an inappropriate type of value.

#N/A often indicates that a lookup or calculation could not find the expected value.

IFERROR can be used to provide an alternative result when a formula produces an error.

For example:

=IFERROR(A2/B2,0)

can return zero when the division produces an error.

However, hiding errors is not always the best solution.

The cause of the error should be understood before deciding how to handle it.

Complex formulas should be broken into logical steps when they become difficult to understand.

Clear formulas are easier to maintain and troubleshoot.
          `,
          quiz: [
            {
              question: "What does #DIV/0! usually indicate?",
              options: [
                "Division by zero",
                "A missing worksheet",
                "A formatting issue only",
                "A duplicate row",
              ],
              answer: "Division by zero",
            },
            {
              question: "What can #REF! indicate?",
              options: [
                "An invalid cell reference",
                "A successful lookup",
                "A valid date",
                "A chart title",
              ],
              answer: "An invalid cell reference",
            },
            {
              question: "What does IFERROR help with?",
              options: [
                "Providing an alternative result when a formula produces an error",
                "Creating worksheets",
                "Sorting tables",
                "Changing fonts",
              ],
              answer:
                "Providing an alternative result when a formula produces an error",
            },
            {
              question: "Why should the cause of an error be understood?",
              options: [
                "Some errors indicate incorrect data or formulas that need correction",
                "Errors are always harmless",
                "Excel cannot calculate without errors",
                "Error messages are only decorative",
              ],
              answer:
                "Some errors indicate incorrect data or formulas that need correction",
            },
            {
              question: "Why should complex formulas remain understandable?",
              options: [
                "They are easier to maintain and troubleshoot",
                "They calculate faster in every case",
                "They prevent all errors",
                "They eliminate the need for data",
              ],
              answer:
                "They are easier to maintain and troubleshoot",
            },
          ],
        },

        {
          title: "Dashboards and Reporting",
          content: `
An Excel dashboard presents important information in a compact and understandable format.

A dashboard can combine:
- Summary values.
- Tables.
- Charts.
- Filters.
- Conditional formatting.
- Key performance indicators.

For example, a student dashboard might display:
- Total students.
- Average marks.
- Average attendance.
- Number of students below an attendance threshold.
- Department-wise performance.

A business dashboard might display:
- Total sales.
- Monthly sales.
- Top products.
- Regional performance.
- Sales trends.

A good dashboard begins with a clear question.

Instead of displaying every available number, identify the information the user actually needs.

The data should be cleaned before building the dashboard.

Calculations should be checked separately.

Charts should use meaningful labels.

The layout should be organized so that important information is easy to find.

Too many charts or colors can make a dashboard confusing.

Filters or slicers can allow users to examine specific categories.

A dashboard should communicate information rather than simply demonstrate Excel features.

Reports should also include appropriate dates, units, and labels so that users understand what the values represent.
          `,
          quiz: [
            {
              question: "What is an Excel dashboard?",
              options: [
                "A visual summary of important information and metrics",
                "A worksheet with no data",
                "A programming language",
                "A database server",
              ],
              answer:
                "A visual summary of important information and metrics",
            },
            {
              question: "What should a dashboard begin with?",
              options: [
                "A clear question or reporting objective",
                "Random charts",
                "Unformatted raw data",
                "As many colors as possible",
              ],
              answer:
                "A clear question or reporting objective",
            },
            {
              question: "Why should data be cleaned before dashboard creation?",
              options: [
                "Incorrect or inconsistent data can produce misleading results",
                "Dashboards cannot contain numbers",
                "Cleaning automatically creates charts",
                "Excel requires every cell to be deleted",
              ],
              answer:
                "Incorrect or inconsistent data can produce misleading results",
            },
            {
              question: "What can filters or slicers provide?",
              options: [
                "A way to examine selected categories or subsets of data",
                "A way to delete formulas",
                "A way to install Excel",
                "A way to replace the workbook",
              ],
              answer:
                "A way to examine selected categories or subsets of data",
            },
            {
              question: "Why should dashboards avoid unnecessary visual elements?",
              options: [
                "Too many elements can make information difficult to understand",
                "Charts cannot contain colors",
                "Excel cannot display multiple charts",
                "Formatting always deletes data",
              ],
              answer:
                "Too many elements can make information difficult to understand",
            },
          ],
        },

        {
          title: "Practical Data Analysis Workflow",
          content: `
A reliable Excel analysis workflow can be divided into several stages.

Stage 1: Understand the problem.

Identify what information needs to be analyzed.

Stage 2: Inspect the data.

Check column names, data types, missing values, duplicates, and unusual values.

Stage 3: Clean the data.

Correct inconsistent formats and handle problems carefully.

Stage 4: Structure the data.

Use clear columns and rows.

Convert appropriate datasets into Excel Tables.

Stage 5: Calculate metrics.

Use formulas and functions such as SUM, AVERAGE, COUNTIF, SUMIF, IF, and lookup functions.

Stage 6: Analyze.

Use sorting, filtering, pivot tables, and comparisons.

Stage 7: Visualize.

Choose charts that match the type of information being communicated.

Stage 8: Validate.

Check calculations against known examples and inspect unexpected results.

Stage 9: Report.

Create a clear summary or dashboard.

Stage 10: Document.

Explain important assumptions, definitions, and calculation methods.

This workflow helps prevent a common mistake: building attractive charts from incorrect data.

Excel is powerful, but the quality of the output depends heavily on the quality of the input data and the correctness of the calculations.

Good analysis combines technical Excel skills with logical thinking.
          `,
          quiz: [
            {
              question: "What should happen before detailed analysis?",
              options: [
                "The data should be inspected and understood",
                "Charts should be created immediately",
                "All formulas should be deleted",
                "The workbook should be closed",
              ],
              answer:
                "The data should be inspected and understood",
            },
            {
              question: "Why should data be cleaned?",
              options: [
                "To improve consistency and reliability of analysis",
                "To make every value zero",
                "To remove all formulas",
                "To create a new computer",
              ],
              answer:
                "To improve consistency and reliability of analysis",
            },
            {
              question: "Which tool can summarize categories and numeric values?",
              options: [
                "Pivot table",
                "Font selector",
                "Page border",
                "Spell checker only",
              ],
              answer: "Pivot table",
            },
            {
              question: "Why should calculations be validated?",
              options: [
                "To detect incorrect formulas or unexpected results",
                "To increase screen size",
                "To remove charts",
                "To rename worksheets",
              ],
              answer:
                "To detect incorrect formulas or unexpected results",
            },
            {
              question: "What determines the quality of Excel analysis?",
              options: [
                "The quality of data and correctness of analysis",
                "The number of colors used",
                "The number of worksheets only",
                "The font size only",
              ],
              answer:
                "The quality of data and correctness of analysis",
            },
          ],
        },

        {
          title: "Final Project: Student Performance Analysis Dashboard",
          content: `
The final project applies the complete Excel workflow.

Project: Build a Student Performance Analysis Dashboard.

Create a dataset containing fields such as:

Student ID
Name
Department
Marks
Attendance
Internal Marks
Final Marks

Step 1: Enter the data.

Create a structured table with clear headings.

Step 2: Clean the data.

Check:
- Missing values.
- Duplicate student IDs.
- Incorrect marks.
- Inconsistent department names.
- Incorrect attendance values.

Step 3: Add calculated fields.

For example, calculate:
- Total marks.
- Average marks.
- Pass or fail status.
- Attendance status.

Step 4: Use conditional formatting.

Highlight students with:
- Low marks.
- Low attendance.
- High performance.

Step 5: Use formulas.

Calculate:
- Total students.
- Average marks.
- Highest marks.
- Lowest marks.
- Number of students who passed.
- Number of students below an attendance threshold.

Step 6: Create pivot tables.

Analyze performance by department.

Step 7: Create charts.

Possible charts include:
- Department-wise average marks.
- Attendance distribution.
- Pass/fail counts.
- Student performance comparison.

Step 8: Build the dashboard.

Place the most important metrics and charts in an easy-to-read layout.

Step 9: Validate.

Check the calculations against the original dataset.

Step 10: Document the dashboard.

Clearly identify:
- Data source.
- Calculation rules.
- Date or reporting period.
- Important assumptions.

The final dashboard should help a user quickly understand student performance without manually examining every row.

This project demonstrates Excel skills in data entry, cleaning, formulas, analysis, visualization, and reporting.
          `,
          quiz: [
            {
              question: "What is the main purpose of the final project?",
              options: [
                "Analyze student performance using an Excel dashboard",
                "Create a computer operating system",
                "Build a network server",
                "Replace a database system",
              ],
              answer:
                "Analyze student performance using an Excel dashboard",
            },
            {
              question: "Which field can be used to uniquely identify a student?",
              options: [
                "Student ID",
                "Font size",
                "Chart color",
                "Worksheet name",
              ],
              answer: "Student ID",
            },
            {
              question: "Which Excel feature can highlight students with low attendance?",
              options: [
                "Conditional formatting",
                "Page margins",
                "Workbook protection only",
                "Chart titles",
              ],
              answer: "Conditional formatting",
            },
            {
              question: "Which tool can analyze performance by department?",
              options: [
                "Pivot table",
                "Font selector",
                "Page layout",
                "Spell checker",
              ],
              answer: "Pivot table",
            },
            {
              question: "What should be done before presenting the final dashboard?",
              options: [
                "Validate calculations and check the source data",
                "Delete the raw data",
                "Remove all formulas",
                "Hide every worksheet",
              ],
              answer:
                "Validate calculations and check the source data",
            },
          ],
        },
      ],
    },
  ],
};

export default excelCourse;
const sqlBasicsCourse = {
  title: "SQL Basics",
  description:
    "Learn SQL fundamentals, databases, tables, data types, SELECT queries, filtering, sorting, grouping, joins, subqueries, data modification, constraints, and practical database querying.",

  weeks: [
    {
      title: "Week 1: SQL and Database Foundations",
      description:
        "Understand relational databases, tables, rows, columns, keys, SQL syntax, and basic queries.",
      lessons: [
        {
          title: "Introduction to Databases and SQL",
          content: `
A database is an organized collection of data that can be stored, managed, and retrieved efficiently.

A relational database stores data in tables.

A table contains:
- Rows.
- Columns.

A row normally represents one record.

A column represents an attribute or field.

For example, a Students table could contain:

student_id
name
department
marks
attendance

One row can represent one student.

SQL stands for Structured Query Language.

SQL is used to communicate with relational databases.

SQL can be used to:
- Retrieve data.
- Insert data.
- Update data.
- Delete data.
- Create tables.
- Modify database structures.
- Control access in supported database systems.

Common relational database systems include PostgreSQL, MySQL, Microsoft SQL Server, and SQLite.

SQL is declarative. This means you generally describe what data you want rather than manually specifying every low-level operation needed to retrieve it.

A database management system processes the SQL query and produces the requested result.

Good database design is important because poorly structured data can cause duplication, inconsistency, and difficult queries.

SQL becomes especially powerful when multiple tables are related using keys.
          `,
          quiz: [
            {
              question: "What is SQL?",
              options: [
                "Structured Query Language",
                "System Query Logic",
                "Simple Question Language",
                "Structured Queue Logic",
              ],
              answer: "Structured Query Language",
            },
            {
              question: "How is data commonly organized in a relational database?",
              options: [
                "Tables containing rows and columns",
                "Only folders",
                "Only text files",
                "Only images",
              ],
              answer: "Tables containing rows and columns",
            },
            {
              question: "What does a row usually represent?",
              options: [
                "One record",
                "A database server",
                "A query language",
                "A table name only",
              ],
              answer: "One record",
            },
            {
              question: "What does a column normally represent?",
              options: [
                "An attribute or field",
                "An entire database",
                "A database server",
                "A query result only",
              ],
              answer: "An attribute or field",
            },
            {
              question: "Which is a relational database system?",
              options: [
                "PostgreSQL",
                "HTML",
                "CSS",
                "Git",
              ],
              answer: "PostgreSQL",
            },
          ],
        },

        {
          title: "Tables, Rows, Columns, and Keys",
          content: `
A relational database is built around structured tables.

Each table should represent a meaningful type of information.

For example, a Students table might contain:

student_id
name
department
email

A Courses table might contain:

course_id
course_name
credits

A row represents one record.

A column describes one property of the records.

A primary key uniquely identifies each row in a table.

For example, student_id can be a primary key in a Students table.

A primary key should normally contain unique and non-null values.

A foreign key creates a relationship between tables.

For example, an Enrollments table could contain:

student_id
course_id

student_id can reference the Students table, while course_id can reference the Courses table.

This avoids storing the same information repeatedly.

Database relationships can represent:
- One-to-one relationships.
- One-to-many relationships.
- Many-to-many relationships.

Many-to-many relationships are commonly implemented using a separate linking table.

Keys are important because they allow tables to be connected reliably.

A well-designed relational database uses keys and constraints to maintain data integrity.
          `,
          quiz: [
            {
              question: "What is a primary key?",
              options: [
                "A value that uniquely identifies a row",
                "A column containing duplicate values",
                "A database password",
                "A table description",
              ],
              answer: "A value that uniquely identifies a row",
            },
            {
              question: "What is a foreign key used for?",
              options: [
                "Creating relationships between tables",
                "Formatting a database",
                "Deleting all rows",
                "Creating a backup file",
              ],
              answer: "Creating relationships between tables",
            },
            {
              question: "Why should primary-key values normally be unique?",
              options: [
                "Each row needs a distinct identifier",
                "SQL requires every column to be text",
                "Duplicates improve performance",
                "Primary keys are used only for formatting",
              ],
              answer: "Each row needs a distinct identifier",
            },
            {
              question: "Which table could connect students and courses?",
              options: [
                "An Enrollments table",
                "A Colors table",
                "A Fonts table",
                "A Screens table",
              ],
              answer: "An Enrollments table",
            },
            {
              question: "What is a many-to-many relationship?",
              options: [
                "Many records in one table can relate to many records in another",
                "One table can contain only one row",
                "A table has no columns",
                "A database contains no keys",
              ],
              answer:
                "Many records in one table can relate to many records in another",
            },
          ],
        },

        {
          title: "SELECT and FROM",
          content: `
The SELECT statement is one of the most important SQL commands.

It is used to retrieve data.

A basic query is:

SELECT name
FROM students;

This returns the name column from the students table.

Multiple columns can be selected:

SELECT name, department, marks
FROM students;

The asterisk can be used to select all columns:

SELECT *
FROM students;

Although SELECT * is convenient during exploration, explicitly selecting required columns is often clearer in application code and reports.

SQL keywords are commonly written in uppercase for readability, although many database systems are not case-sensitive about keywords.

A query normally identifies:
- What information should be returned.
- Which table contains the information.

The FROM clause specifies the source table.

SQL statements are commonly terminated using a semicolon.

Queries should be written clearly because readable SQL is easier to maintain.

For example:

SELECT name, marks
FROM students;

is easier to understand than putting an unnecessarily complex query on one line.

SELECT can also be combined with WHERE, ORDER BY, GROUP BY, JOIN, and other clauses to create more advanced queries.
          `,
          quiz: [
            {
              question: "What does SELECT do?",
              options: [
                "Retrieves specified data",
                "Deletes a database",
                "Creates a network",
                "Formats a table",
              ],
              answer: "Retrieves specified data",
            },
            {
              question: "What does FROM specify?",
              options: [
                "The source table or data source",
                "The password",
                "The sorting direction",
                "The database color",
              ],
              answer: "The source table or data source",
            },
            {
              question: "What does SELECT * generally mean?",
              options: [
                "Select all columns",
                "Select no columns",
                "Delete all columns",
                "Select only the primary key",
              ],
              answer: "Select all columns",
            },
            {
              question: "Which query selects student names?",
              options: [
                "SELECT name FROM students;",
                "GET name FROM students;",
                "SHOW students AS name;",
                "READ name IN students;",
              ],
              answer: "SELECT name FROM students;",
            },
            {
              question: "Why is readable SQL useful?",
              options: [
                "It makes queries easier to understand and maintain",
                "It automatically makes queries faster",
                "It removes the need for indexes",
                "It prevents every SQL error",
              ],
              answer:
                "It makes queries easier to understand and maintain",
            },
          ],
        },

        {
          title: "WHERE and Filtering Data",
          content: `
The WHERE clause filters rows based on a condition.

For example:

SELECT *
FROM students
WHERE marks >= 50;

This returns students whose marks are at least 50.

Common comparison operators include:
- = equal to.
- <> or != not equal to, depending on the database.
- > greater than.
- < less than.
- >= greater than or equal to.
- <= less than or equal to.

Multiple conditions can be combined using:
- AND.
- OR.
- NOT.

For example:

SELECT *
FROM students
WHERE marks >= 50 AND attendance >= 75;

This requires both conditions to be satisfied.

OR returns rows where at least one condition is satisfied.

Parentheses can make complex conditions easier to understand.

SQL also supports operators such as IN, BETWEEN, and LIKE.

IN checks whether a value belongs to a list.

BETWEEN checks whether a value falls within a range.

LIKE is commonly used for pattern matching.

Filtering is important because databases can contain thousands or millions of records.

Instead of retrieving everything and filtering it manually in application code, a database can often perform the filtering efficiently.

Conditions should be tested carefully to make sure they match the intended business rule.
          `,
          quiz: [
            {
              question: "What is the purpose of WHERE?",
              options: [
                "Filtering rows based on conditions",
                "Creating a database",
                "Renaming a server",
                "Deleting every table",
              ],
              answer: "Filtering rows based on conditions",
            },
            {
              question: "Which operator means greater than or equal to?",
              options: [
                ">=",
                "<=",
                "<>",
                "=",
              ],
              answer: ">=",
            },
            {
              question: "What does AND require?",
              options: [
                "All specified conditions connected by AND must be true",
                "Only the first condition must be true",
                "No condition must be true",
                "The database must contain no rows",
              ],
              answer:
                "All specified conditions connected by AND must be true",
            },
            {
              question: "What does IN do?",
              options: [
                "Checks whether a value belongs to a specified list",
                "Creates an index",
                "Deletes a table",
                "Changes a column type",
              ],
              answer:
                "Checks whether a value belongs to a specified list",
            },
            {
              question: "Why is filtering useful?",
              options: [
                "It allows queries to return only relevant records",
                "It automatically creates backups",
                "It changes database hardware",
                "It removes the need for tables",
              ],
              answer:
                "It allows queries to return only relevant records",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Querying and Modifying Data",
      description:
        "Learn sorting, limiting results, NULL values, inserting data, updating records, and deleting records safely.",
      lessons: [
        {
          title: "ORDER BY and Sorting Results",
          content: `
SQL can sort query results using the ORDER BY clause.

For example:

SELECT name, marks
FROM students
ORDER BY marks;

By default, ascending order is commonly used.

DESC can be used for descending order.

For example:

SELECT name, marks
FROM students
ORDER BY marks DESC;

This displays the highest marks first.

Multiple columns can be used for sorting.

For example:

SELECT department, name, marks
FROM students
ORDER BY department ASC, marks DESC;

This first sorts by department and then sorts marks within each department.

Sorting is useful for:
- Ranking results.
- Finding highest values.
- Finding lowest values.
- Organizing reports.
- Reviewing records alphabetically.

ORDER BY normally comes after clauses such as WHERE.

For example:

SELECT name, marks
FROM students
WHERE marks >= 40
ORDER BY marks DESC;

This first filters the records and then sorts the result.

Sorting does not necessarily change how the data is stored. It changes the order of the query result.

Always identify whether ascending or descending order is appropriate for the requirement.
          `,
          quiz: [
            {
              question: "What does ORDER BY do?",
              options: [
                "Sorts query results",
                "Deletes rows",
                "Creates tables",
                "Changes passwords",
              ],
              answer: "Sorts query results",
            },
            {
              question: "What does DESC specify?",
              options: [
                "Descending order",
                "Database deletion",
                "Data description",
                "Default columns",
              ],
              answer: "Descending order",
            },
            {
              question: "What is the default ordering commonly used when ASC or DESC is not specified?",
              options: [
                "Ascending",
                "Descending",
                "Random",
                "Reverse insertion order",
              ],
              answer: "Ascending",
            },
            {
              question: "Can ORDER BY use multiple columns?",
              options: [
                "Yes",
                "No",
                "Only in SQLite",
                "Only with numbers",
              ],
              answer: "Yes",
            },
            {
              question: "Does ORDER BY normally change stored row values?",
              options: [
                "No, it changes the order of the query result",
                "Yes, it rewrites every value",
                "Yes, it deletes the original order",
                "No, because SQL cannot sort",
              ],
              answer:
                "No, it changes the order of the query result",
            },
          ],
        },

        {
          title: "LIMIT, DISTINCT, and NULL Values",
          content: `
SQL provides several tools for controlling query results.

DISTINCT removes duplicate result values.

For example:

SELECT DISTINCT department
FROM students;

This returns each department value once in the result.

LIMIT restricts the number of rows returned in database systems that support it.

For example:

SELECT *
FROM students
LIMIT 10;

This requests up to 10 rows.

The exact syntax for limiting results can differ between database systems.

NULL is a special value representing missing or unknown information.

NULL is not the same as:
- Zero.
- An empty string.
- False.

A query should use IS NULL or IS NOT NULL when checking for NULL.

For example:

SELECT *
FROM students
WHERE email IS NULL;

This finds records where email is missing.

Using:

email = NULL

does not correctly test for NULL in standard SQL semantics.

Understanding NULL is important because missing information can affect calculations and conditions.

DISTINCT, LIMIT, and NULL handling are especially useful when exploring datasets.

Before using LIMIT in an application, consider whether the result needs a specific ORDER BY so that the selected rows are predictable.
          `,
          quiz: [
            {
              question: "What does DISTINCT do?",
              options: [
                "Removes duplicate values from the result",
                "Deletes duplicate rows from the table",
                "Creates a primary key",
                "Sorts data",
              ],
              answer: "Removes duplicate values from the result",
            },
            {
              question: "What does LIMIT generally do?",
              options: [
                "Restricts the number of rows returned",
                "Limits the number of columns permanently",
                "Deletes extra rows",
                "Changes the table structure",
              ],
              answer: "Restricts the number of rows returned",
            },
            {
              question: "What does NULL represent?",
              options: [
                "Missing or unknown information",
                "Always zero",
                "Always false",
                "An empty table",
              ],
              answer: "Missing or unknown information",
            },
            {
              question: "How should NULL normally be checked?",
              options: [
                "Using IS NULL or IS NOT NULL",
                "Using = NULL",
                "Using == NULL only",
                "Using LIKE NULL",
              ],
              answer: "Using IS NULL or IS NOT NULL",
            },
            {
              question: "Why can ORDER BY be useful with LIMIT?",
              options: [
                "It can make the selected limited results predictable",
                "It creates a database",
                "It removes NULL values",
                "It changes primary keys",
              ],
              answer:
                "It can make the selected limited results predictable",
            },
          ],
        },

        {
          title: "INSERT and Adding Data",
          content: `
The INSERT statement adds new rows to a table.

A common form is:

INSERT INTO students (name, department, marks)
VALUES ('Ravi', 'ECE', 82);

The column list specifies which fields are receiving values.

The values should correspond to the same order as the specified columns.

It is good practice to explicitly list columns rather than relying on an unspecified column order.

If a table contains a primary key that is generated automatically, the insert statement may omit that column depending on the database design.

Multiple rows can also be inserted using syntax supported by the database.

Before inserting data, developers should understand:
- Required columns.
- Data types.
- Constraints.
- Default values.
- Unique fields.
- Foreign keys.

An insert can fail when data violates a constraint.

For example, inserting a duplicate value into a unique column may fail.

Foreign-key constraints can prevent inserting a reference to a record that does not exist.

Applications should validate input before inserting data.

Parameterized queries should be used when SQL is generated from user input to reduce SQL injection risk.

INSERT changes the stored data, unlike SELECT, which normally only retrieves data.
          `,
          quiz: [
            {
              question: "What does INSERT do?",
              options: [
                "Adds new rows to a table",
                "Retrieves rows",
                "Sorts rows",
                "Creates charts",
              ],
              answer: "Adds new rows to a table",
            },
            {
              question: "What does the column list in INSERT specify?",
              options: [
                "Which columns receive the supplied values",
                "Which tables should be deleted",
                "Which rows should be sorted",
                "Which database should be installed",
              ],
              answer:
                "Which columns receive the supplied values",
            },
            {
              question: "What can cause an INSERT operation to fail?",
              options: [
                "Violating a database constraint",
                "Using a SELECT query",
                "Having a table",
                "Using a primary key",
              ],
              answer: "Violating a database constraint",
            },
            {
              question: "Why should applications validate input before inserting data?",
              options: [
                "To improve data quality and reduce invalid input",
                "To remove the database",
                "To prevent all SELECT queries",
                "To disable constraints",
              ],
              answer:
                "To improve data quality and reduce invalid input",
            },
            {
              question: "What should be used with user-provided SQL values to reduce SQL injection risk?",
              options: [
                "Parameterized queries",
                "String concatenation everywhere",
                "Random SQL comments",
                "Hard-coded passwords",
              ],
              answer: "Parameterized queries",
            },
          ],
        },

        {
          title: "UPDATE and DELETE",
          content: `
UPDATE changes existing rows in a table.

For example:

UPDATE students
SET marks = 85
WHERE student_id = 10;

The WHERE clause identifies which rows should be changed.

This is extremely important.

An UPDATE without an appropriate WHERE condition can modify many rows or potentially every row.

DELETE removes rows.

For example:

DELETE FROM students
WHERE student_id = 10;

Again, the WHERE clause is important because it determines which rows are removed.

Before running UPDATE or DELETE, it is good practice to run a SELECT query using the same condition.

For example:

SELECT *
FROM students
WHERE student_id = 10;

This allows the developer to verify which records will be affected.

Transactions can provide additional safety by allowing related operations to be committed or rolled back depending on the database system.

UPDATE and DELETE should be used carefully, especially in production databases.

Backups, permissions, transactions, and testing can reduce the risk of accidental data loss.

A database command may execute successfully but still produce the wrong result if the condition is incorrect.

Always verify both the SQL syntax and the intended business logic.
          `,
          quiz: [
            {
              question: "What does UPDATE do?",
              options: [
                "Changes existing rows",
                "Creates a new database",
                "Only reads data",
                "Creates a chart",
              ],
              answer: "Changes existing rows",
            },
            {
              question: "Why is WHERE important in UPDATE?",
              options: [
                "It limits which rows are changed",
                "It creates the database",
                "It sorts the table",
                "It defines the column type",
              ],
              answer: "It limits which rows are changed",
            },
            {
              question: "What does DELETE do?",
              options: [
                "Removes rows from a table",
                "Retrieves rows",
                "Creates columns",
                "Sorts data",
              ],
              answer: "Removes rows from a table",
            },
            {
              question: "What is a useful safety step before UPDATE or DELETE?",
              options: [
                "Run a SELECT using the intended condition first",
                "Delete the database first",
                "Remove all constraints",
                "Disable backups",
              ],
              answer:
                "Run a SELECT using the intended condition first",
            },
            {
              question: "What can happen if UPDATE is executed without an appropriate WHERE condition?",
              options: [
                "Many or all rows may be changed",
                "No database can ever be changed",
                "Only one row is always changed",
                "The database automatically creates a backup",
              ],
              answer: "Many or all rows may be changed",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Joins and Aggregation",
      description:
        "Learn table relationships, joins, aggregate functions, GROUP BY, HAVING, and practical multi-table queries.",
      lessons: [
        {
          title: "INNER JOIN",
          content: `
Relational databases often store related information in separate tables.

A JOIN combines related rows from multiple tables.

INNER JOIN returns rows where matching records exist in both joined tables.

For example, suppose:

students(student_id, name)

enrollments(student_id, course_id)

courses(course_id, course_name)

A query can join these tables to display student names with their courses.

The relationship is usually based on matching keys.

For example:

students.student_id = enrollments.student_id

A basic INNER JOIN has the form:

SELECT students.name, enrollments.course_id
FROM students
INNER JOIN enrollments
ON students.student_id = enrollments.student_id;

The ON condition specifies how rows are related.

Aliases can make queries shorter and easier to read.

For example:

FROM students s
JOIN enrollments e
ON s.student_id = e.student_id

JOINs are one of the most important SQL concepts because normalized databases often distribute information across multiple tables.

A correct JOIN condition is essential.

An incorrect condition can produce too many rows or incorrect relationships.

When debugging joins, inspect the keys and verify that the relationship between tables is understood.
          `,
          quiz: [
            {
              question: "What does an INNER JOIN return?",
              options: [
                "Rows with matching records in the joined tables",
                "Only rows from the first table",
                "Every possible combination of rows",
                "Only unmatched rows",
              ],
              answer:
                "Rows with matching records in the joined tables",
            },
            {
              question: "What does the ON clause specify?",
              options: [
                "How rows in the joined tables are related",
                "How the database is installed",
                "How columns are formatted",
                "How rows are deleted",
              ],
              answer:
                "How rows in the joined tables are related",
            },
            {
              question: "Why are JOINs useful?",
              options: [
                "They allow related information from multiple tables to be combined",
                "They delete duplicate databases",
                "They replace primary keys",
                "They create operating systems",
              ],
              answer:
                "They allow related information from multiple tables to be combined",
            },
            {
              question: "What can an incorrect JOIN condition cause?",
              options: [
                "Incorrect or unexpectedly large results",
                "Automatic database backup",
                "Automatic table deletion",
                "A guaranteed correct result",
              ],
              answer:
                "Incorrect or unexpectedly large results",
            },
            {
              question: "What is a table alias useful for?",
              options: [
                "Making table references shorter and easier to read",
                "Deleting tables",
                "Changing data types",
                "Creating passwords",
              ],
              answer:
                "Making table references shorter and easier to read",
            },
          ],
        },

        {
          title: "LEFT JOIN and Other Join Types",
          content: `
Not every query should return only matching records.

A LEFT JOIN returns all rows from the left table and matching rows from the right table.

If no matching row exists on the right side, the right-side columns can contain NULL.

For example, suppose we want every student, including students who are not enrolled in a course.

A LEFT JOIN can preserve all students while adding course information where available.

This differs from INNER JOIN, which returns only rows with matching records.

Other join types include:
- RIGHT JOIN.
- FULL OUTER JOIN.
- CROSS JOIN.

Support for some join types varies by database system.

A CROSS JOIN produces combinations of rows from the participating tables and can create very large results.

JOIN choice should be based on the question being answered.

For example:
- "Show only students who have enrollments" may use INNER JOIN.
- "Show all students and their enrollments when available" may use LEFT JOIN.

NULL results from outer joins should be interpreted carefully.

A missing match does not necessarily mean the data is incorrect.

It may simply mean that a related record does not exist.

Understanding join behavior is essential for reliable reports and analytics.
          `,
          quiz: [
            {
              question: "What does a LEFT JOIN preserve?",
              options: [
                "All rows from the left table",
                "Only rows from the right table",
                "Only unmatched rows",
                "No rows",
              ],
              answer: "All rows from the left table",
            },
            {
              question: "What may appear in right-table columns when no match exists in a LEFT JOIN?",
              options: [
                "NULL",
                "Zero in every case",
                "The left table's primary key",
                "A random value",
              ],
              answer: "NULL",
            },
            {
              question: "Which join is appropriate when only matching records are required?",
              options: [
                "INNER JOIN",
                "LEFT JOIN",
                "CROSS JOIN",
                "RIGHT JOIN always",
              ],
              answer: "INNER JOIN",
            },
            {
              question: "What can a CROSS JOIN produce?",
              options: [
                "Combinations of rows from the participating tables",
                "Only matching rows",
                "Only NULL rows",
                "Only one result",
              ],
              answer:
                "Combinations of rows from the participating tables",
            },
            {
              question: "Why should JOIN type be chosen carefully?",
              options: [
                "Different joins return different sets of records",
                "All joins return exactly the same results",
                "JOIN type changes only formatting",
                "JOINs are used only for deleting data",
              ],
              answer:
                "Different joins return different sets of records",
            },
          ],
        },

        {
          title: "Aggregate Functions and GROUP BY",
          content: `
Aggregate functions calculate values across multiple rows.

Common aggregate functions include:
- COUNT.
- SUM.
- AVG.
- MIN.
- MAX.

For example:

SELECT COUNT(*)
FROM students;

counts rows.

GROUP BY divides rows into groups before aggregate calculations are performed.

For example:

SELECT department, AVG(marks)
FROM students
GROUP BY department;

This calculates the average marks for each department.

Another example:

SELECT department, COUNT(*)
FROM students
GROUP BY department;

This counts students in each department.

When using GROUP BY, selected non-aggregated columns generally need to be included in the grouping according to the database's SQL rules.

Aggregation is useful for:
- Reports.
- Business analysis.
- Student statistics.
- Sales summaries.
- Inventory analysis.

GROUP BY can be combined with WHERE.

WHERE filters rows before grouping.

For example, only students with marks above a threshold can be included in the grouping.

Understanding the order of operations helps when writing more advanced queries.

Aggregate functions summarize data, while GROUP BY determines how the summary is divided into categories.
          `,
          quiz: [
            {
              question: "What does COUNT(*) commonly calculate?",
              options: [
                "The number of rows",
                "The average value",
                "The smallest value",
                "The largest value",
              ],
              answer: "The number of rows",
            },
            {
              question: "What does GROUP BY do?",
              options: [
                "Groups rows for aggregate analysis",
                "Deletes groups",
                "Creates tables",
                "Sorts columns only",
              ],
              answer: "Groups rows for aggregate analysis",
            },
            {
              question: "Which function calculates an average?",
              options: [
                "AVG",
                "SUM",
                "COUNT",
                "MAX",
              ],
              answer: "AVG",
            },
            {
              question: "What does this query calculate: SELECT department, AVG(marks) FROM students GROUP BY department?",
              options: [
                "Average marks for each department",
                "The overall maximum mark",
                "The number of tables",
                "The names of all students",
              ],
              answer: "Average marks for each department",
            },
            {
              question: "What does WHERE generally do before GROUP BY?",
              options: [
                "Filters rows before they are grouped",
                "Creates groups after aggregation",
                "Deletes grouped rows",
                "Creates a new database",
              ],
              answer: "Filters rows before they are grouped",
            },
          ],
        },

        {
          title: "HAVING and Practical Aggregation",
          content: `
HAVING filters grouped results.

This is different from WHERE.

WHERE filters individual rows before grouping.

HAVING filters groups after aggregation.

For example:

SELECT department, AVG(marks)
FROM students
GROUP BY department
HAVING AVG(marks) >= 60;

This returns departments whose average marks are at least 60.

HAVING is especially useful when the condition depends on an aggregate value.

For example:
- Departments with more than 20 students.
- Products with total sales above a threshold.
- Customers with more than a certain number of orders.

A useful distinction is:

WHERE → filters rows.

GROUP BY → creates groups.

HAVING → filters groups.

ORDER BY → sorts the final result.

These clauses can be combined to produce meaningful reports.

For example, a sales report might:
1. Filter transactions to a specific year.
2. Group them by product.
3. Calculate total sales.
4. Keep products above a sales threshold.
5. Sort the results from highest to lowest.

Complex SQL becomes easier when each clause has a clear purpose.

When writing aggregate queries, verify the grouping logic and test the result against a small sample of known data.
          `,
          quiz: [
            {
              question: "What does HAVING filter?",
              options: [
                "Grouped results",
                "Database tables before they exist",
                "Only column names",
                "Operating system processes",
              ],
              answer: "Grouped results",
            },
            {
              question: "What is the main difference between WHERE and HAVING?",
              options: [
                "WHERE filters rows, while HAVING filters groups",
                "WHERE creates tables, while HAVING deletes them",
                "They always perform exactly the same operation",
                "HAVING can only filter text",
              ],
              answer:
                "WHERE filters rows, while HAVING filters groups",
            },
            {
              question: "Which clause normally follows GROUP BY when filtering aggregate results?",
              options: [
                "HAVING",
                "FROM",
                "INSERT",
                "VALUES",
              ],
              answer: "HAVING",
            },
            {
              question: "What can HAVING filter?",
              options: [
                "Departments whose average marks exceed a threshold",
                "Individual database columns before grouping only",
                "Operating system files",
                "SQL keywords",
              ],
              answer:
                "Departments whose average marks exceed a threshold",
            },
            {
              question: "Why should aggregate queries be tested with known data?",
              options: [
                "To verify that grouping and calculations produce the intended result",
                "To install SQL",
                "To prevent tables from being created",
                "To change database passwords",
              ],
              answer:
                "To verify that grouping and calculations produce the intended result",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced SQL Basics and Practical Project",
      description:
        "Learn subqueries, constraints, transactions, indexes, security, and build a practical SQL database project.",
      lessons: [
        {
          title: "Subqueries and Nested Queries",
          content: `
A subquery is a query written inside another SQL query.

Subqueries are useful when the result of one query is needed by another query.

For example, suppose we want students whose marks are above the average.

A subquery can calculate the average first, and the outer query can compare each student's marks with that result.

Conceptually:

SELECT name, marks
FROM students
WHERE marks > (
  SELECT AVG(marks)
  FROM students
);

The inner query calculates the average.

The outer query retrieves students above that average.

Subqueries can appear in different places depending on the database and query requirements.

They can be used with:
- WHERE.
- FROM.
- SELECT.
- EXISTS and related expressions.

A subquery can sometimes be replaced with a JOIN or another approach.

The best approach depends on readability, correctness, and database performance.

Nested queries should be kept understandable.

When a query becomes very complex, common table expressions or views may be more appropriate depending on the database system.

Subqueries are useful because they allow one query to use the result of another logical operation.
          `,
          quiz: [
            {
              question: "What is a subquery?",
              options: [
                "A query nested inside another query",
                "A database backup",
                "A table without columns",
                "A programming language",
              ],
              answer: "A query nested inside another query",
            },
            {
              question: "What can a subquery calculate?",
              options: [
                "A value or result used by an outer query",
                "Only table names",
                "Only database passwords",
                "Only column formatting",
              ],
              answer: "A value or result used by an outer query",
            },
            {
              question: "In a query comparing marks with the average, what can the subquery calculate?",
              options: [
                "The average marks",
                "The student names only",
                "The database password",
                "The table color",
              ],
              answer: "The average marks",
            },
            {
              question: "Why should complex subqueries remain readable?",
              options: [
                "Readable SQL is easier to maintain and verify",
                "Readability automatically increases storage",
                "SQL cannot run complex queries",
                "Readability deletes duplicate rows",
              ],
              answer:
                "Readable SQL is easier to maintain and verify",
            },
            {
              question: "Can some subquery problems also be solved using JOINs?",
              options: [
                "Yes",
                "No",
                "Only in spreadsheets",
                "Only in HTML",
              ],
              answer: "Yes",
            },
          ],
        },

        {
          title: "Constraints and Data Integrity",
          content: `
Database constraints help maintain valid and consistent data.

Common constraints include:
- PRIMARY KEY.
- FOREIGN KEY.
- NOT NULL.
- UNIQUE.
- CHECK.
- DEFAULT.

PRIMARY KEY identifies rows uniquely.

FOREIGN KEY enforces relationships between tables.

NOT NULL requires a value to be supplied.

UNIQUE prevents duplicate values in a constrained column or combination.

CHECK can enforce a condition supported by the database.

For example, a marks column might have a check requiring values within an appropriate range.

DEFAULT provides a value when one is not explicitly supplied.

Constraints are important because application code alone should not be the only protection for database integrity.

For example, if a student ID must be unique, a UNIQUE constraint or primary key can enforce this at the database level.

Foreign keys can prevent references to records that do not exist.

Constraints can cause INSERT or UPDATE operations to fail when the supplied data violates a rule.

This is useful because invalid data should not silently enter the database.

Good database design combines appropriate constraints with application-level validation.

Constraints should reflect real business rules rather than arbitrary restrictions.
          `,
          quiz: [
            {
              question: "What is the purpose of a PRIMARY KEY?",
              options: [
                "To uniquely identify rows",
                "To sort every table",
                "To store passwords",
                "To create charts",
              ],
              answer: "To uniquely identify rows",
            },
            {
              question: "What does NOT NULL enforce?",
              options: [
                "A value must be provided",
                "Every value must be unique",
                "Every value must be zero",
                "A row must be deleted",
              ],
              answer: "A value must be provided",
            },
            {
              question: "What does UNIQUE help prevent?",
              options: [
                "Duplicate values in the constrained field or combination",
                "All NULL values in every database",
                "All SQL queries",
                "All table relationships",
              ],
              answer:
                "Duplicate values in the constrained field or combination",
            },
            {
              question: "What does a FOREIGN KEY help enforce?",
              options: [
                "Relationships between tables",
                "Font formatting",
                "Chart styles",
                "File compression",
              ],
              answer: "Relationships between tables",
            },
            {
              question: "Why are constraints useful?",
              options: [
                "They help prevent invalid data from being stored",
                "They automatically write application code",
                "They replace every database query",
                "They remove the need for table design",
              ],
              answer:
                "They help prevent invalid data from being stored",
            },
          ],
        },

        {
          title: "Transactions, Indexes, and SQL Security",
          content: `
Transactions allow multiple database operations to be treated as a logical unit.

A transaction can generally be:
- Committed.
- Rolled back.

COMMIT makes the transaction's changes permanent according to the database system.

ROLLBACK reverses changes that have not been committed.

Transactions are useful when multiple operations must succeed together.

For example, transferring money between accounts involves changing two account balances. A transaction can help ensure that the operation does not leave the database in an inconsistent intermediate state.

Indexes improve the speed of many database searches by providing additional structures for locating rows.

However, indexes also consume storage and can add overhead to data modification.

Indexes should therefore be created based on actual query requirements.

SQL security is also important.

Applications should avoid building SQL statements by directly concatenating untrusted user input.

Parameterized queries or prepared statements should be used.

This helps reduce SQL injection risk.

Database accounts should also receive only the permissions they need.

Backups, encryption, authentication, access control, and monitoring are additional parts of database security.

Security should be considered throughout the application rather than added only after a database is deployed.
          `,
          quiz: [
            {
              question: "What does COMMIT do in a transaction?",
              options: [
                "Makes the transaction's changes permanent according to the database system",
                "Deletes the database",
                "Creates a new table automatically",
                "Removes all indexes",
              ],
              answer:
                "Makes the transaction's changes permanent according to the database system",
            },
            {
              question: "What does ROLLBACK generally do?",
              options: [
                "Reverses uncommitted transaction changes",
                "Creates a backup file",
                "Sorts rows",
                "Adds an index",
              ],
              answer: "Reverses uncommitted transaction changes",
            },
            {
              question: "What is an index mainly used for?",
              options: [
                "Improving the performance of many searches",
                "Replacing all tables",
                "Storing passwords",
                "Creating charts",
              ],
              answer: "Improving the performance of many searches",
            },
            {
              question: "What should applications use for user-provided SQL values?",
              options: [
                "Parameterized queries",
                "Direct string concatenation",
                "Random SQL text",
                "Plain passwords",
              ],
              answer: "Parameterized queries",
            },
            {
              question: "Why should database permissions be limited?",
              options: [
                "Users and applications should receive only the access they need",
                "Limited permissions make SQL impossible",
                "All users should always have full access",
                "Permissions affect only formatting",
              ],
              answer:
                "Users and applications should receive only the access they need",
            },
          ],
        },

        {
          title: "Final Project: Student Management Database",
          content: `
The final project combines the SQL concepts from the course.

Project: Build a Student Management Database.

Create tables such as:

Students
- student_id
- name
- department
- email
- attendance

Courses
- course_id
- course_name
- credits

Enrollments
- enrollment_id
- student_id
- course_id
- marks

Step 1: Design the tables.

Identify primary keys and relationships.

Step 2: Add constraints.

Use appropriate:
- PRIMARY KEY.
- FOREIGN KEY.
- NOT NULL.
- UNIQUE.
- CHECK.

Step 3: Insert sample records.

Add students, courses, and enrollment information.

Step 4: Write SELECT queries.

Retrieve:
- All students.
- Students from a department.
- Students above a marks threshold.
- Students with low attendance.

Step 5: Sort results.

Find highest marks and organize students alphabetically.

Step 6: Use aggregate functions.

Calculate:
- Number of students.
- Average marks.
- Highest marks.
- Lowest marks.
- Department-wise averages.

Step 7: Use JOINs.

Display student names with their courses and marks.

Step 8: Use GROUP BY and HAVING.

Find departments meeting a chosen performance condition.

Step 9: Practice UPDATE and DELETE safely.

Use SELECT first to verify which records will be affected.

Step 10: Add indexes where appropriate.

Consider which fields are frequently searched or joined.

Step 11: Apply security practices.

Use parameterized queries in applications and avoid storing credentials directly in source code.

The final project should demonstrate that SQL is not just a collection of commands.

It is a structured way to retrieve, modify, relate, summarize, and protect data.

A strong SQL developer understands both the syntax and the data model behind the queries.
          `,
          quiz: [
            {
              question: "What is the main goal of the final SQL project?",
              options: [
                "Build and query a relational student management database",
                "Create an operating system",
                "Design a computer network",
                "Build an Excel-only dashboard",
              ],
              answer:
                "Build and query a relational student management database",
            },
            {
              question: "Which table can represent the relationship between students and courses?",
              options: [
                "Enrollments",
                "Fonts",
                "Colors",
                "Screens",
              ],
              answer: "Enrollments",
            },
            {
              question: "Which SQL feature can calculate department-wise average marks?",
              options: [
                "GROUP BY with AVG",
                "DELETE with COUNT",
                "INSERT with MAX only",
                "DROP with SUM",
              ],
              answer: "GROUP BY with AVG",
            },
            {
              question: "What should be done before a potentially dangerous UPDATE or DELETE?",
              options: [
                "Run a SELECT with the intended condition",
                "Delete the database",
                "Remove the primary key",
                "Disable constraints",
              ],
              answer:
                "Run a SELECT with the intended condition",
            },
            {
              question: "What is an important SQL security practice for application input?",
              options: [
                "Use parameterized queries",
                "Concatenate user input into SQL",
                "Store passwords in SQL statements",
                "Give every application full database permissions",
              ],
              answer: "Use parameterized queries",
            },
          ],
        },
      ],
    },
  ],
};

export default sqlBasicsCourse;
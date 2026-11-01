const sqlCourse = {
  title: "SQL",
  description:
    "Learn SQL fundamentals, relational databases, tables, data types, SQL commands, filtering, sorting, aggregate functions, joins, subqueries, constraints, and database operations.",
  weeks: [
    {
      title: "Week 1: SQL and Database Fundamentals",
      lessons: [
        {
          title: "Introduction to SQL and Databases",
          content: `
SQL stands for Structured Query Language. It is used to communicate with relational database management systems.

A database is an organized collection of information. For example, a college database may store student details, course information, attendance, and examination results.

SQL helps users:
- Store information.
- Retrieve records.
- Update existing data.
- Delete unwanted records.
- Create and manage database structures.
- Control access to database objects.

A relational database stores information in tables. A table consists of rows and columns.

Example: A students table may contain student_id, student_name, department, and marks.

Each row represents one student. Each column represents a particular attribute.

Popular relational database systems include MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database, and SQLite.

SQL is widely used in web development, software engineering, data analytics, business intelligence, and backend development.

Understanding SQL is an important skill because many applications depend on databases to store and retrieve information.
          `,
          quiz: [
            {
              question: "What does SQL stand for?",
              options: [
                "Structured Query Language",
                "Simple Question Language",
                "System Query Logic",
                "Standard Quick Language"
              ],
              answer: "Structured Query Language"
            },
            {
              question: "What is a database?",
              options: [
                "An organized collection of information",
                "A programming language",
                "A computer processor",
                "An operating system"
              ],
              answer: "An organized collection of information"
            },
            {
              question: "How is information commonly organized in a relational database?",
              options: [
                "Tables containing rows and columns",
                "Only images and videos",
                "Folders without records",
                "Computer memory addresses only"
              ],
              answer: "Tables containing rows and columns"
            },
            {
              question: "Which of these is a relational database system?",
              options: ["MySQL", "HTML", "CSS", "Photoshop"],
              answer: "MySQL"
            },
            {
              question: "What is SQL mainly used for?",
              options: [
                "Managing and querying relational databases",
                "Designing website colors",
                "Editing photographs",
                "Creating computer hardware"
              ],
              answer: "Managing and querying relational databases"
            }
          ]
        },
        {
          title: "Relational Database Structure",
          content: `
A relational database organizes information into related tables.

Each table contains rows and columns.

Consider a students table:

student_id | student_name | department_id
1          | Ravi          | 101
2          | Priya         | 102
3          | Arun          | 101

The student_id identifies each student. The department_id connects the student to a department record.

Important database concepts include:

1. Table: Stores related records.
2. Row: Represents one record.
3. Column: Represents an attribute.
4. Primary key: Uniquely identifies each row.
5. Foreign key: References a key in another table.
6. Schema: Describes the database structure.

Relationships allow information to be separated into multiple tables instead of repeating the same details everywhere.

For example, a departments table can store department names separately. The students table then stores department_id to refer to the appropriate department.

This structure improves organization and helps maintain consistency.
          `,
          quiz: [
            {
              question: "What does a row represent in a relational table?",
              options: [
                "A single record",
                "A database server",
                "A table relationship",
                "A column definition"
              ],
              answer: "A single record"
            },
            {
              question: "What does a column represent?",
              options: [
                "An attribute of a record",
                "An entire database",
                "A backup file",
                "A database connection"
              ],
              answer: "An attribute of a record"
            },
            {
              question: "What is the purpose of a primary key?",
              options: [
                "To uniquely identify each row",
                "To store duplicate records",
                "To delete a database",
                "To sort all tables automatically"
              ],
              answer: "To uniquely identify each row"
            },
            {
              question: "What is a foreign key used for?",
              options: [
                "To reference a key in another table",
                "To encrypt every database column",
                "To change a table name",
                "To remove duplicate databases"
              ],
              answer: "To reference a key in another table"
            },
            {
              question: "What does a database schema describe?",
              options: [
                "The structure of a database",
                "The physical size of a monitor",
                "The computer's internet speed",
                "The number of software applications"
              ],
              answer: "The structure of a database"
            }
          ]
        },
        {
          title: "Installing SQL Tools and Creating a Database",
          content: `
To work with SQL, you need a database system and a tool for writing and executing queries.

Common options include:

- MySQL with MySQL Workbench.
- PostgreSQL with pgAdmin.
- SQLite with a suitable database browser.
- Microsoft SQL Server with SQL Server Management Studio.

For beginners, MySQL and MySQL Workbench provide a convenient environment for learning.

A database can be created using:

CREATE DATABASE college;

This creates a database named college.

To select it in MySQL:

USE college;

A table can then be created:

CREATE TABLE students (
  student_id INT,
  student_name VARCHAR(100),
  department VARCHAR(50),
  marks DECIMAL(5,2)
);

The CREATE TABLE statement defines the table name and its columns.

INT stores whole numbers. VARCHAR stores variable-length text. DECIMAL stores numbers with a specified precision.

SQL statements normally end with a semicolon.

Database and table names should be selected clearly so that the structure is easy to understand and maintain.
          `,
          quiz: [
            {
              question: "Which command creates a database?",
              options: [
                "CREATE DATABASE",
                "SELECT DATABASE",
                "INSERT DATABASE",
                "UPDATE DATABASE"
              ],
              answer: "CREATE DATABASE"
            },
            {
              question: "What does USE college do in MySQL?",
              options: [
                "Selects the college database",
                "Deletes the college database",
                "Creates a new table",
                "Displays all student records"
              ],
              answer: "Selects the college database"
            },
            {
              question: "Which SQL statement creates a table?",
              options: [
                "CREATE TABLE",
                "INSERT TABLE",
                "SHOW TABLE",
                "UPDATE TABLE"
              ],
              answer: "CREATE TABLE"
            },
            {
              question: "Which data type is commonly used for whole numbers?",
              options: ["INT", "VARCHAR", "DATE", "TEXT"],
              answer: "INT"
            },
            {
              question: "Which data type can store variable-length text?",
              options: ["VARCHAR", "INT", "DECIMAL", "BOOLEAN"],
              answer: "VARCHAR"
            }
          ]
        },
        {
          title: "SQL Data Types",
          content: `
Data types define the kind of values that can be stored in database columns.

Choosing appropriate data types improves storage efficiency and supports correct calculations.

Common SQL data types include:

1. INT: Stores whole numbers.
2. BIGINT: Stores large whole numbers.
3. DECIMAL: Stores exact decimal values with specified precision.
4. FLOAT: Stores approximate floating-point values.
5. VARCHAR: Stores variable-length text.
6. CHAR: Stores fixed-length text.
7. TEXT: Stores longer text in database systems that support it.
8. DATE: Stores calendar dates.
9. TIME: Stores time values.
10. DATETIME or TIMESTAMP: Stores date and time information, depending on the database system.
11. BOOLEAN: Represents true or false values in systems that support it directly.

Example:

CREATE TABLE products (
  product_id INT,
  product_name VARCHAR(100),
  price DECIMAL(10,2),
  available BOOLEAN,
  created_date DATE
);

A product price should generally use DECIMAL when exact decimal representation is required.

A product name should use a text data type.

Correct data type selection prevents many storage and calculation problems.
          `,
          quiz: [
            {
              question: "Which data type stores whole numbers?",
              options: ["INT", "VARCHAR", "DATE", "TEXT"],
              answer: "INT"
            },
            {
              question: "Which data type is suitable for product names?",
              options: ["VARCHAR", "INT", "DATE", "BOOLEAN"],
              answer: "VARCHAR"
            },
            {
              question: "Which data type is commonly used for exact decimal values?",
              options: ["DECIMAL", "VARCHAR", "DATE", "TEXT"],
              answer: "DECIMAL"
            },
            {
              question: "Which data type stores calendar dates?",
              options: ["DATE", "INT", "BOOLEAN", "CHAR"],
              answer: "DATE"
            },
            {
              question: "What is the purpose of a data type?",
              options: [
                "To define the kind of value a column can store",
                "To create a database password",
                "To remove all table records",
                "To connect two computers"
              ],
              answer: "To define the kind of value a column can store"
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: SQL Commands and Data Retrieval",
      lessons: [
        {
          title: "DDL Commands: Creating and Managing Structures",
          content: `
DDL stands for Data Definition Language.

DDL commands are used to define and modify database structures such as tables.

Important DDL commands include:

1. CREATE: Creates database objects.
2. ALTER: Changes the structure of an existing object.
3. DROP: Removes a database object.
4. TRUNCATE: Removes all rows from a table while keeping its structure.

Example:

CREATE TABLE employees (
  employee_id INT,
  employee_name VARCHAR(100)
);

To add a column:

ALTER TABLE employees
ADD salary DECIMAL(10,2);

To remove a column:

ALTER TABLE employees
DROP COLUMN salary;

To remove a table:

DROP TABLE employees;

TRUNCATE TABLE employees;

TRUNCATE removes all records but keeps the table structure.

These commands should be used carefully because some operations can remove important data or structures.

DDL syntax and transaction behavior can differ between database systems.
          `,
          quiz: [
            {
              question: "What does DDL stand for?",
              options: [
                "Data Definition Language",
                "Data Display Language",
                "Database Design Logic",
                "Digital Data Link"
              ],
              answer: "Data Definition Language"
            },
            {
              question: "Which command creates a table?",
              options: ["CREATE", "INSERT", "SELECT", "UPDATE"],
              answer: "CREATE"
            },
            {
              question: "Which command modifies an existing table structure?",
              options: ["ALTER", "SELECT", "DELETE", "GRANT"],
              answer: "ALTER"
            },
            {
              question: "What does DROP TABLE do?",
              options: [
                "Removes the table structure and its data",
                "Removes only duplicate rows",
                "Displays table records",
                "Adds a new column"
              ],
              answer: "Removes the table structure and its data"
            },
            {
              question: "What does TRUNCATE TABLE do?",
              options: [
                "Removes all rows while keeping the table structure",
                "Deletes only one selected row",
                "Changes the table name",
                "Displays all columns"
              ],
              answer: "Removes all rows while keeping the table structure"
            }
          ]
        },
        {
          title: "DML Commands: Inserting and Modifying Data",
          content: `
DML stands for Data Manipulation Language.

DML commands are used to insert, update, and delete records in database tables.

INSERT adds new records.

Example:

INSERT INTO students
(student_id, student_name, marks)
VALUES
(1, 'Ravi', 85);

UPDATE modifies existing records.

Example:

UPDATE students
SET marks = 90
WHERE student_id = 1;

DELETE removes selected records.

Example:

DELETE FROM students
WHERE student_id = 1;

The WHERE clause is important when updating or deleting specific records.

Without a WHERE condition, an UPDATE statement may modify every row, and a DELETE statement may remove every row.

Always verify the intended records before executing data modification commands.

For important databases, backups and transaction controls provide additional protection.
          `,
          quiz: [
            {
              question: "What does DML stand for?",
              options: [
                "Data Manipulation Language",
                "Database Management Link",
                "Data Monitoring Logic",
                "Digital Machine Language"
              ],
              answer: "Data Manipulation Language"
            },
            {
              question: "Which command inserts new records?",
              options: ["INSERT", "ALTER", "DROP", "SELECT"],
              answer: "INSERT"
            },
            {
              question: "Which command changes existing records?",
              options: ["UPDATE", "CREATE", "SHOW", "DESCRIBE"],
              answer: "UPDATE"
            },
            {
              question: "Which command removes selected records?",
              options: ["DELETE", "ALTER", "CREATE", "GRANT"],
              answer: "DELETE"
            },
            {
              question: "What can happen if UPDATE is executed without WHERE?",
              options: [
                "Every row may be updated",
                "The database is automatically backed up",
                "Only the first row is updated",
                "The table structure is deleted"
              ],
              answer: "Every row may be updated"
            }
          ]
        },
        {
          title: "SELECT Queries and Filtering Records",
          content: `
The SELECT statement retrieves information from database tables.

Basic syntax:

SELECT column_name
FROM table_name;

To retrieve all columns:

SELECT *
FROM students;

To retrieve selected columns:

SELECT student_name, marks
FROM students;

The WHERE clause filters records according to a condition.

Example:

SELECT *
FROM students
WHERE marks > 75;

This returns students whose marks are greater than 75.

Common comparison operators include:

- = : Equal to
- <> : Not equal to
- > : Greater than
- < : Less than
- >= : Greater than or equal to
- <= : Less than or equal to

Logical operators combine conditions.

AND requires both conditions to be true.

OR requires at least one condition to be true.

NOT reverses a condition.

Example:

SELECT *
FROM students
WHERE department = 'ECE'
AND marks >= 70;

Filtering helps retrieve only the records required for a particular task.
          `,
          quiz: [
            {
              question: "Which SQL statement retrieves records?",
              options: ["SELECT", "INSERT", "UPDATE", "DROP"],
              answer: "SELECT"
            },
            {
              question: "Which clause filters records?",
              options: ["WHERE", "ORDER BY", "GROUP BY", "CREATE"],
              answer: "WHERE"
            },
            {
              question: "Which operator means greater than or equal to?",
              options: [">=", "<=", "<>", "="],
              answer: ">="
            },
            {
              question: "When does an AND condition return true?",
              options: [
                "When both conditions are true",
                "When at least one condition is true",
                "When both conditions are false",
                "When no condition is checked"
              ],
              answer: "When both conditions are true"
            },
            {
              question: "What does SELECT * retrieve?",
              options: [
                "All columns from the selected table",
                "Only the primary key",
                "Only duplicate rows",
                "Only the first column"
              ],
              answer: "All columns from the selected table"
            }
          ]
        },
        {
          title: "Sorting, Searching, and Limiting Results",
          content: `
SQL provides clauses and operators to organize and search query results.

ORDER BY sorts records based on one or more columns.

Example:

SELECT *
FROM students
ORDER BY marks ASC;

ASC sorts values in ascending order.

DESC sorts values in descending order.

Example:

SELECT *
FROM students
ORDER BY marks DESC;

The LIKE operator searches for text patterns.

Example:

SELECT *
FROM students
WHERE student_name LIKE 'A%';

This finds names beginning with A.

Common LIKE patterns include:

- 'A%' : Starts with A.
- '%a' : Ends with a.
- '%ar%' : Contains ar.

The BETWEEN operator selects values within a range.

Example:

SELECT *
FROM students
WHERE marks BETWEEN 60 AND 90;

The IN operator checks whether a value matches one of several specified values.

Example:

SELECT *
FROM students
WHERE department IN ('ECE', 'CSE');

LIMIT restricts the number of returned rows in MySQL and several other databases.

These features make SQL queries more useful when working with large datasets.
          `,
          quiz: [
            {
              question: "Which clause sorts query results?",
              options: ["ORDER BY", "WHERE", "GROUP BY", "INSERT"],
              answer: "ORDER BY"
            },
            {
              question: "Which keyword sorts values in descending order?",
              options: ["DESC", "ASC", "DISTINCT", "BETWEEN"],
              answer: "DESC"
            },
            {
              question: "What does LIKE 'A%' match?",
              options: [
                "Text beginning with A",
                "Text ending with A",
                "Text containing only A",
                "Text without A"
              ],
              answer: "Text beginning with A"
            },
            {
              question: "What does BETWEEN do?",
              options: [
                "Selects values within a specified range",
                "Joins two tables",
                "Deletes duplicate records",
                "Creates a new database"
              ],
              answer: "Selects values within a specified range"
            },
            {
              question: "What does LIMIT do in MySQL?",
              options: [
                "Restricts the number of returned rows",
                "Changes the table structure",
                "Removes all NULL values",
                "Creates a primary key"
              ],
              answer: "Restricts the number of returned rows"
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: Functions, Grouping, and Joins",
      lessons: [
        {
          title: "Aggregate Functions in SQL",
          content: `
Aggregate functions calculate summary values from multiple records.

Common aggregate functions include:

1. COUNT(): Counts records or non-NULL values.
2. SUM(): Calculates the total of numeric values.
3. AVG(): Calculates the average.
4. MIN(): Returns the minimum value.
5. MAX(): Returns the maximum value.

Example:

SELECT COUNT(*)
FROM students;

This counts the total number of rows.

SELECT AVG(marks)
FROM students;

This calculates the average marks.

SELECT MAX(marks), MIN(marks)
FROM students;

This returns the highest and lowest marks.

Aggregate functions are commonly used in reports and analytical queries.

Most aggregate functions ignore NULL values when calculating their results. COUNT(*) is different because it counts rows regardless of whether individual columns contain NULL.

Understanding aggregate functions is important when analyzing sales, student performance, employee salaries, and other numerical information.
          `,
          quiz: [
            {
              question: "Which function counts records?",
              options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
              answer: "COUNT()"
            },
            {
              question: "Which function calculates a total?",
              options: ["SUM()", "MIN()", "LOWER()", "TRIM()"],
              answer: "SUM()"
            },
            {
              question: "Which function calculates an average?",
              options: ["AVG()", "COUNT()", "MAX()", "DISTINCT"],
              answer: "AVG()"
            },
            {
              question: "Which function returns the smallest value?",
              options: ["MIN()", "MAX()", "SUM()", "AVG()"],
              answer: "MIN()"
            },
            {
              question: "What does COUNT(*) count?",
              options: [
                "Rows in the result set",
                "Only non-NULL values in one column",
                "Only duplicate values",
                "Only numerical columns"
              ],
              answer: "Rows in the result set"
            }
          ]
        },
        {
          title: "GROUP BY and HAVING",
          content: `
GROUP BY groups rows that have the same values in selected columns.

It is commonly used with aggregate functions.

Example:

SELECT department, COUNT(*)
FROM students
GROUP BY department;

This counts students in each department.

Another example:

SELECT department, AVG(marks)
FROM students
GROUP BY department;

This calculates the average marks for each department.

HAVING filters groups after grouping and aggregation.

Example:

SELECT department, COUNT(*) AS total_students
FROM students
GROUP BY department
HAVING COUNT(*) > 10;

This displays departments containing more than ten student records.

WHERE and HAVING are different:

- WHERE filters individual rows before grouping.
- HAVING filters groups after aggregation.

SQL query execution conceptually processes filtering, grouping, and aggregate filtering in a logical sequence.

GROUP BY and HAVING are important for generating department reports, sales summaries, and performance analysis.
          `,
          quiz: [
            {
              question: "What does GROUP BY do?",
              options: [
                "Groups rows with matching values",
                "Sorts every row alphabetically",
                "Deletes duplicate tables",
                "Creates a database"
              ],
              answer: "Groups rows with matching values"
            },
            {
              question: "Which clause filters groups?",
              options: ["HAVING", "WHERE", "FROM", "LIMIT"],
              answer: "HAVING"
            },
            {
              question: "Which clause normally filters individual rows before grouping?",
              options: ["WHERE", "HAVING", "ORDER BY", "SELECT"],
              answer: "WHERE"
            },
            {
              question: "Which function is commonly used with GROUP BY?",
              options: ["COUNT()", "DROP()", "ALTER()", "CREATE()"],
              answer: "COUNT()"
            },
            {
              question: "What does HAVING COUNT(*) > 10 select?",
              options: [
                "Groups containing more than ten rows",
                "Tables containing more than ten columns",
                "Rows with exactly ten NULL values",
                "Databases containing ten users"
              ],
              answer: "Groups containing more than ten rows"
            }
          ]
        },
        {
          title: "SQL Joins and Relationships",
          content: `
SQL joins combine related information from multiple tables.

Consider two tables:

students:
student_id, student_name, department_id

departments:
department_id, department_name

The department_id connects the tables.

INNER JOIN returns records with matching values in both tables.

Example:

SELECT s.student_name, d.department_name
FROM students s
INNER JOIN departments d
ON s.department_id = d.department_id;

LEFT JOIN returns every record from the left table and matching records from the right table.

RIGHT JOIN returns every record from the right table and matching records from the left table.

FULL OUTER JOIN returns matched records and unmatched records from both tables where supported.

The ON clause defines the relationship between the tables.

Table aliases such as s and d make queries shorter and easier to read.

Joins are essential when information is separated into related tables.
          `,
          quiz: [
            {
              question: "What is the purpose of a SQL JOIN?",
              options: [
                "To combine related data from tables",
                "To remove all records",
                "To create a database user",
                "To change a column data type"
              ],
              answer: "To combine related data from tables"
            },
            {
              question: "What does INNER JOIN return?",
              options: [
                "Rows with matching values in both tables",
                "All rows from only the left table",
                "All rows from only the right table",
                "Only rows with NULL values"
              ],
              answer: "Rows with matching values in both tables"
            },
            {
              question: "Which join preserves all rows from the left table?",
              options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "RIGHT JOIN"],
              answer: "LEFT JOIN"
            },
            {
              question: "What is the purpose of the ON clause?",
              options: [
                "To specify the join condition",
                "To sort the final records",
                "To delete unmatched rows",
                "To rename the database"
              ],
              answer: "To specify the join condition"
            },
            {
              question: "What is a table alias?",
              options: [
                "A temporary name used to refer to a table in a query",
                "A permanent replacement for the table",
                "A type of database constraint",
                "A method of deleting records"
              ],
              answer: "A temporary name used to refer to a table in a query"
            }
          ]
        },
        {
          title: "Subqueries and Nested Queries",
          content: `
A subquery is a query written inside another SQL query.

Subqueries are useful when one query depends on the result of another query.

Example:

SELECT student_name, marks
FROM students
WHERE marks > (
  SELECT AVG(marks)
  FROM students
);

The inner query calculates the average marks. The outer query retrieves students whose marks are above that average.

Subqueries can be used with SELECT, INSERT, UPDATE, and DELETE statements, depending on the database system and query structure.

Common subquery operators include:

- IN: Checks whether a value belongs to a returned set.
- EXISTS: Checks whether a subquery returns any rows.
- ANY: Compares a value with at least one value in a set.
- ALL: Compares a value with every value in a set.

A subquery can return a single value, one column with multiple rows, or a table-like result depending on its structure.

Correlated subqueries refer to columns from an outer query and may be evaluated in relation to each outer row.

Subqueries help solve complex database questions in a structured way.
          `,
          quiz: [
            {
              question: "What is a subquery?",
              options: [
                "A query inside another query",
                "A database backup",
                "A table without columns",
                "A database password"
              ],
              answer: "A query inside another query"
            },
            {
              question: "Which operator checks membership in a set of values?",
              options: ["IN", "LIKE", "ORDER BY", "CREATE"],
              answer: "IN"
            },
            {
              question: "What does EXISTS check?",
              options: [
                "Whether a subquery returns any rows",
                "Whether a database has a password",
                "Whether all columns are numeric",
                "Whether a table has an index"
              ],
              answer: "Whether a subquery returns any rows"
            },
            {
              question: "What does the inner query calculate in the average-marks example?",
              options: [
                "The average marks of all students",
                "The number of departments",
                "The highest student ID",
                "The total number of tables"
              ],
              answer: "The average marks of all students"
            },
            {
              question: "What makes a subquery correlated?",
              options: [
                "It refers to a column from the outer query",
                "It always returns exactly one row",
                "It cannot contain a WHERE clause",
                "It creates a new database"
              ],
              answer: "It refers to a column from the outer query"
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: Database Constraints and Practical SQL",
      lessons: [
        {
          title: "Primary Keys, Foreign Keys, and Constraints",
          content: `
Constraints are rules applied to database columns and tables to maintain data integrity.

Important SQL constraints include:

1. PRIMARY KEY: Uniquely identifies each row and does not allow NULL values.
2. FOREIGN KEY: Maintains relationships between tables.
3. NOT NULL: Prevents a column from storing NULL.
4. UNIQUE: Requires values to be unique according to the database's constraint rules.
5. CHECK: Enforces a condition on inserted or updated values where supported.
6. DEFAULT: Provides a default value when a value is not supplied.

Example:

CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(100) UNIQUE
);

CREATE TABLE students (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL,
  department_id INT,
  marks DECIMAL(5,2),
  FOREIGN KEY (department_id)
    REFERENCES departments(department_id),
  CHECK (marks BETWEEN 0 AND 100)
);

The primary key uniquely identifies each student.

The foreign key connects students to existing departments.

The NOT NULL constraint ensures that a student name is provided.

Constraints prevent invalid data from being stored and help maintain consistent relationships.
          `,
          quiz: [
            {
              question: "What does a PRIMARY KEY do?",
              options: [
                "Uniquely identifies each row",
                "Allows unlimited duplicate IDs",
                "Stores only text values",
                "Deletes related tables"
              ],
              answer: "Uniquely identifies each row"
            },
            {
              question: "What is the purpose of a FOREIGN KEY?",
              options: [
                "To maintain relationships between tables",
                "To sort records automatically",
                "To encrypt every column",
                "To create database backups"
              ],
              answer: "To maintain relationships between tables"
            },
            {
              question: "What does NOT NULL prevent?",
              options: [
                "Storing NULL in the constrained column",
                "Storing numeric values",
                "Creating a table",
                "Using SELECT"
              ],
              answer: "Storing NULL in the constrained column"
            },
            {
              question: "What does a CHECK constraint do?",
              options: [
                "Enforces a specified condition on values",
                "Creates a new database",
                "Displays all table columns",
                "Sorts records by date"
              ],
              answer: "Enforces a specified condition on values"
            },
            {
              question: "What does a DEFAULT constraint provide?",
              options: [
                "A value used when one is not supplied",
                "A unique identifier for every database",
                "A backup of every table",
                "A method for deleting foreign keys"
              ],
              answer: "A value used when one is not supplied"
            }
          ]
        },
        {
          title: "Indexes and Query Performance",
          content: `
An index is a database structure that helps retrieve records more efficiently.

Without an appropriate index, a database may need to examine many rows to find matching records.

Indexes are commonly created on columns used frequently in filtering, joining, and searching.

Example:

CREATE INDEX idx_student_name
ON students(student_name);

This creates an index on student_name.

A query such as:

SELECT *
FROM students
WHERE student_name = 'Ravi';

may benefit from an appropriate index.

Indexes can improve read performance, but they also require storage and may increase the cost of INSERT, UPDATE, and DELETE operations because the index must be maintained.

Common index concepts include:

- Single-column index.
- Composite index.
- Unique index.
- Primary key index.

A composite index contains more than one column. Column order can influence which queries benefit from it.

Indexes should be designed based on actual query patterns and database performance measurements rather than created on every column.
          `,
          quiz: [
            {
              question: "What is an SQL index?",
              options: [
                "A structure that helps retrieve records efficiently",
                "A table containing only passwords",
                "A command for deleting databases",
                "A replacement for every primary key"
              ],
              answer: "A structure that helps retrieve records efficiently"
            },
            {
              question: "Which command creates an index?",
              options: ["CREATE INDEX", "CREATE VIEW", "INSERT INDEX", "UPDATE INDEX"],
              answer: "CREATE INDEX"
            },
            {
              question: "What is a composite index?",
              options: [
                "An index containing multiple columns",
                "An index containing no columns",
                "A backup of several databases",
                "A collection of duplicate records"
              ],
              answer: "An index containing multiple columns"
            },
            {
              question: "What is one disadvantage of indexes?",
              options: [
                "They can increase storage and write-operation costs",
                "They always delete old records",
                "They prevent all SELECT queries",
                "They remove database constraints"
              ],
              answer: "They can increase storage and write-operation costs"
            },
            {
              question: "When should indexes be created?",
              options: [
                "Based on query patterns and performance needs",
                "On every column without analysis",
                "Only on text columns",
                "Only when deleting a table"
              ],
              answer: "Based on query patterns and performance needs"
            }
          ]
        },
        {
          title: "Transactions and Database Security",
          content: `
A transaction is a group of database operations treated as one logical unit.

Transactions help maintain data consistency when multiple operations must succeed together.

The ACID properties describe important transaction characteristics:

1. Atomicity: All operations in a transaction succeed together or are rolled back.
2. Consistency: A transaction preserves database rules and constraints.
3. Isolation: Concurrent transactions are controlled to prevent inappropriate interference.
4. Durability: Committed changes persist according to the database's durability guarantees.

Common transaction commands include:

START TRANSACTION;
COMMIT;
ROLLBACK;

COMMIT saves the transaction's changes.

ROLLBACK cancels uncommitted changes.

Database security controls who can access and modify information.

Common security practices include:
- Using strong authentication.
- Granting only required permissions.
- Protecting sensitive data.
- Avoiding shared administrator accounts.
- Keeping database software updated.
- Backing up important information.

SQL permission commands include GRANT and REVOKE in database systems that support them.

Transactions and security are essential for reliable database applications.
          `,
          quiz: [
            {
              question: "What is a database transaction?",
              options: [
                "A group of operations treated as one logical unit",
                "A table containing only text",
                "A method of changing a database password",
                "A command for creating an index"
              ],
              answer: "A group of operations treated as one logical unit"
            },
            {
              question: "What does COMMIT do?",
              options: [
                "Saves the transaction's changes",
                "Cancels all committed changes",
                "Deletes the database",
                "Creates a new table"
              ],
              answer: "Saves the transaction's changes"
            },
            {
              question: "What does ROLLBACK do?",
              options: [
                "Cancels uncommitted transaction changes",
                "Creates a new database",
                "Adds a primary key",
                "Displays query results"
              ],
              answer: "Cancels uncommitted transaction changes"
            },
            {
              question: "What does Atomicity mean?",
              options: [
                "A transaction succeeds as a whole or is rolled back",
                "Every table must have four columns",
                "All users receive administrator access",
                "A query must return one row"
              ],
              answer: "A transaction succeeds as a whole or is rolled back"
            },
            {
              question: "What is the principle of least privilege?",
              options: [
                "Giving users only the permissions they need",
                "Giving every user full database access",
                "Sharing administrator passwords",
                "Disabling all authentication"
              ],
              answer: "Giving users only the permissions they need"
            }
          ]
        },
        {
          title: "Final Project: Student Management Database",
          content: `
The final project combines SQL concepts to create a small student management database.

Project objective:

Create a database that stores student details, department information, and student marks.

Step 1: Create the database.

CREATE DATABASE student_management;

Step 2: Select the database.

USE student_management;

Step 3: Create a departments table.

CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(100) UNIQUE
);

Step 4: Create a students table.

CREATE TABLE students (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL,
  department_id INT,
  marks DECIMAL(5,2),
  FOREIGN KEY (department_id)
    REFERENCES departments(department_id)
);

Step 5: Insert sample records.

INSERT INTO departments
VALUES
(101, 'ECE'),
(102, 'CSE');

INSERT INTO students
VALUES
(1, 'Ravi', 101, 85),
(2, 'Priya', 102, 92),
(3, 'Arun', 101, 76);

Step 6: Retrieve student records.

SELECT * FROM students;

Step 7: Filter students.

SELECT *
FROM students
WHERE marks > 80;

Step 8: Calculate average marks.

SELECT AVG(marks)
FROM students;

Step 9: Combine student and department information.

SELECT s.student_name, d.department_name, s.marks
FROM students s
INNER JOIN departments d
ON s.department_id = d.department_id;

Step 10: Group students by department.

SELECT department_id, COUNT(*)
FROM students
GROUP BY department_id;

Final deliverables:

- Database and table creation scripts.
- Sample student records.
- Queries for filtering and sorting.
- Aggregate reports.
- Join queries.
- A short explanation of database relationships and constraints.

This project demonstrates how SQL is used to create, manage, and query a relational database.
          `,
          quiz: [
            {
              question: "What is the purpose of the student management project?",
              options: [
                "To create and query a student database",
                "To design an electronic circuit",
                "To create a computer operating system",
                "To build a website without a database"
              ],
              answer: "To create and query a student database"
            },
            {
              question: "Which table stores department details?",
              options: ["departments", "students", "transactions", "indexes"],
              answer: "departments"
            },
            {
              question: "Which key connects students to departments?",
              options: [
                "Foreign key using department_id",
                "Only the student name",
                "A database password",
                "A table alias"
              ],
              answer: "Foreign key using department_id"
            },
            {
              question: "Which SQL function calculates average marks?",
              options: ["AVG()", "COUNT()", "MIN()", "CONCAT()"],
              answer: "AVG()"
            },
            {
              question: "Which SQL feature combines student and department records?",
              options: ["INNER JOIN", "DROP TABLE", "TRUNCATE", "CREATE INDEX"],
              answer: "INNER JOIN"
            }
          ]
        }
      ]
    }
  ]
};

export default sqlCourse;
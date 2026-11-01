const scriptingCourse = {
  title: "Scripting",
  description:
    "Learn scripting fundamentals, variables, conditions, loops, functions, files, command-line tools, Bash and Python scripting, automation, error handling, logging, scheduling, and reliable system scripting.",

  weeks: [
    {
      title: "Week 1: Scripting Foundations",
      description:
        "Understand what scripts are, how they execute, and how to build basic scripts using variables, conditions, loops, and functions.",
      lessons: [
        {
          title: "What Scripting Is and Where It Is Used",
          content: `
Scripting is the process of writing a sequence of instructions that a computer can execute to perform a task automatically. A script is usually smaller and more focused than a large software application.

Scripts are commonly used for repetitive tasks such as renaming files, processing text, checking system information, starting services, generating reports, moving data between folders, and automating development workflows.

A scripting language is normally executed by an interpreter or runtime. Python and Bash are common examples. Instead of manually performing ten repeated commands, a script can perform them consistently.

For example, a simple automation task might:
1. Read a folder.
2. Find files matching a condition.
3. Process those files.
4. Save the results.
5. Produce a log.

Scripts are useful because they reduce repetitive manual work and make procedures easier to repeat.

Scripting is different from building a complete application, although the boundary can sometimes overlap. A script generally focuses on automation or a specific task, while an application usually has a broader structure, user interface, services, or long-term functionality.

Good scripts should be readable, predictable, safe, and easy to maintain. A useful script should also handle expected errors instead of assuming everything will always work.

Common scripting languages include Python, Bash, PowerShell, JavaScript, and Ruby. Python is especially useful for automation because it provides libraries for files, operating systems, networking, data processing, and APIs.

A good scripting workflow is:
- Understand the task.
- Break it into smaller steps.
- Write the script.
- Test it with safe sample data.
- Handle errors.
- Add useful logging.
- Improve the script after testing.

Learning scripting is valuable for system administration, DevOps, cloud engineering, cybersecurity, data processing, testing, and general software development.
          `,
          quiz: [
            {
              question: "What is the main purpose of a script?",
              options: [
                "To automate a sequence of tasks",
                "To physically repair a computer",
                "To replace an operating system",
                "To increase monitor resolution",
              ],
              answer: "To automate a sequence of tasks",
            },
            {
              question: "Which language is commonly used for scripting and automation?",
              options: ["Python", "HTML", "SQL only", "CSS"],
              answer: "Python",
            },
            {
              question: "Why are scripts useful for repetitive tasks?",
              options: [
                "They perform repeated steps consistently",
                "They remove the need for an operating system",
                "They automatically create hardware",
                "They prevent every possible software error",
              ],
              answer: "They perform repeated steps consistently",
            },
            {
              question: "Which activity is a good use of scripting?",
              options: [
                "Automatically processing a group of files",
                "Replacing a laptop battery physically",
                "Increasing screen size",
                "Changing the physical keyboard",
              ],
              answer: "Automatically processing a group of files",
            },
            {
              question: "What should normally happen before deploying an automation script?",
              options: [
                "Test it with safe sample data",
                "Delete all backup data",
                "Disable error handling",
                "Remove all validation",
              ],
              answer: "Test it with safe sample data",
            },
          ],
        },

        {
          title: "Variables, Data Types, and Operators",
          content: `
Variables allow a script to store information that can be used later. A variable can hold a number, text, a Boolean value, or a collection of values.

For example, a Python script might store a user's name in one variable and a file count in another. The values can then be used in calculations, conditions, messages, or function calls.

Common data types include:
- Integer: whole numbers.
- Float: decimal numbers.
- String: text.
- Boolean: True or False.
- List: an ordered collection of values.
- Dictionary: key-value pairs.

Operators allow scripts to work with values.

Arithmetic operators perform calculations such as addition, subtraction, multiplication, and division.

Comparison operators compare values. Examples include equal to, not equal to, greater than, and less than.

Logical operators combine conditions. Common logical operations are AND, OR, and NOT.

Assignment stores a value in a variable.

A script can also convert between compatible data types. For example, text containing a number may need to be converted into an integer before arithmetic is performed.

Choosing meaningful variable names improves readability. A variable named file_count is easier to understand than a name such as x when the value represents the number of files.

Variables should also have a clear purpose. Avoid unnecessarily reusing one variable for unrelated information because it makes scripts harder to understand and maintain.

When handling input, scripts should not blindly assume that the input has the expected type. Validation helps prevent incorrect processing and unexpected errors.
          `,
          quiz: [
            {
              question: "What is a variable used for?",
              options: [
                "Storing a value for later use",
                "Physically storing a computer",
                "Connecting a monitor",
                "Installing an operating system",
              ],
              answer: "Storing a value for later use",
            },
            {
              question: "Which data type represents True or False?",
              options: ["Boolean", "String", "Float", "List"],
              answer: "Boolean",
            },
            {
              question: "Which type is normally used for text?",
              options: ["String", "Integer", "Boolean", "Float"],
              answer: "String",
            },
            {
              question: "What is the purpose of a comparison operator?",
              options: [
                "To compare values",
                "To create a physical connection",
                "To install software",
                "To compress a hard drive",
              ],
              answer: "To compare values",
            },
            {
              question: "Why should variable names be meaningful?",
              options: [
                "They make scripts easier to understand",
                "They make the CPU faster",
                "They remove the need for testing",
                "They automatically fix errors",
              ],
              answer: "They make scripts easier to understand",
            },
          ],
        },

        {
          title: "Conditions and Loops",
          content: `
Conditions allow a script to make decisions. A program can check whether something is true and execute different instructions depending on the result.

The common structure is an if condition followed by optional else-if and else branches. This allows a script to handle multiple situations.

For example, a script checking a file could determine whether the file exists. If it exists, the script can process it. Otherwise, it can display an appropriate message.

Conditions often use comparison and logical operators.

Loops are used when a group of instructions must be repeated.

A for loop is commonly used when processing each item in a collection or repeating a known sequence.

A while loop continues while a condition remains true. It is useful when the number of repetitions is not known in advance.

The break statement can stop a loop early when a required condition is reached. The continue statement skips the current iteration and moves to the next one.

Loops should always have a sensible stopping condition. An incorrectly designed while loop can continue indefinitely.

Conditions and loops are fundamental to automation. For example, a script can inspect every file in a directory and perform an operation only on files matching certain criteria.

Readable conditions are important. If a condition becomes complicated, it may be better to split it into smaller checks or move the logic into a function.

When working with files or system resources, scripts should also check whether the resource exists before attempting to use it.
          `,
          quiz: [
            {
              question: "What do conditions allow a script to do?",
              options: [
                "Make decisions based on values",
                "Increase physical storage",
                "Replace the CPU",
                "Change screen brightness automatically",
              ],
              answer: "Make decisions based on values",
            },
            {
              question: "What is a loop used for?",
              options: [
                "Repeating instructions",
                "Creating physical hardware",
                "Installing RAM",
                "Changing a keyboard",
              ],
              answer: "Repeating instructions",
            },
            {
              question: "Which loop is commonly used to process each item in a collection?",
              options: ["for", "if", "return", "import"],
              answer: "for",
            },
            {
              question: "What does break normally do inside a loop?",
              options: [
                "Stops the loop",
                "Starts the computer",
                "Creates a new file automatically",
                "Converts text to a number",
              ],
              answer: "Stops the loop",
            },
            {
              question: "Why should a while loop have a sensible stopping condition?",
              options: [
                "To prevent unintended endless execution",
                "To increase disk capacity",
                "To install libraries",
                "To remove all variables",
              ],
              answer: "To prevent unintended endless execution",
            },
          ],
        },

        {
          title: "Functions and Modular Scripts",
          content: `
Functions allow a script to organize reusable logic into named blocks. Instead of repeating the same instructions throughout a script, the instructions can be placed inside a function and called whenever needed.

A function can receive input through parameters and can produce a result using a return value.

For example, a script that calculates the size of a file could place the calculation inside a function. Other parts of the program can then call that function whenever a file needs to be checked.

Functions improve:
- Readability.
- Reusability.
- Testing.
- Maintenance.
- Organization.

A good function generally has one clear responsibility. A function that tries to read files, send network requests, calculate results, and print reports all at once becomes difficult to test.

Larger scripts can be divided into modules. A module is a separate file containing related functions, classes, or constants.

Modules allow a project to be organized into logical components. For example, one module can handle file operations while another handles reporting.

Functions should use clear names and meaningful parameters. Avoid unnecessary global variables because they make it harder to understand where data comes from and where it changes.

Returning values is often preferable to printing values inside a reusable function. The caller can decide what to do with the result.

Modular design becomes increasingly important as scripts grow. A small script can begin as one file, but reusable logic should eventually be separated into appropriate modules.
          `,
          quiz: [
            {
              question: "Why are functions useful in scripts?",
              options: [
                "They organize reusable logic",
                "They replace the operating system",
                "They increase physical memory",
                "They eliminate all testing",
              ],
              answer: "They organize reusable logic",
            },
            {
              question: "What can a function receive as input?",
              options: ["Parameters", "Monitors", "Hard drives", "Network cables"],
              answer: "Parameters",
            },
            {
              question: "What is the purpose of a return value?",
              options: [
                "To send a result back to the caller",
                "To restart the computer",
                "To install a package",
                "To create a physical device",
              ],
              answer: "To send a result back to the caller",
            },
            {
              question: "What is a module?",
              options: [
                "A separate file containing related reusable code",
                "A physical memory chip",
                "A network cable",
                "A computer monitor",
              ],
              answer: "A separate file containing related reusable code",
            },
            {
              question: "What is a good responsibility for a function?",
              options: [
                "One clear logical task",
                "Every task in the entire application",
                "Only displaying the operating system",
                "Replacing all external libraries",
              ],
              answer: "One clear logical task",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Command Line and Files",
      description:
        "Learn how scripts interact with the command line, files, directories, arguments, environment variables, and configuration data.",
      lessons: [
        {
          title: "Command-Line Basics",
          content: `
The command line is a text-based interface used to interact with an operating system. Instead of selecting actions through graphical menus, a user enters commands.

A shell is a program that interprets commands and executes them. Bash is a common shell on Linux and macOS. Windows provides shells such as PowerShell and Command Prompt.

Common Linux commands include pwd for showing the current directory, ls for listing directory contents, cd for changing directories, and mkdir for creating a directory.

The command line is especially useful for scripting because scripts can execute commands automatically.

A command usually has a name followed by optional arguments and options. Arguments provide information to the command, while options modify how it behaves.

Command output can often be redirected into a file or passed to another command. This makes it possible to build processing pipelines.

A script should not assume that a command always succeeds. Commands normally provide an exit status indicating whether execution succeeded or failed.

Command-line skills are important because many development servers, cloud systems, containers, Linux environments, and automation tools are controlled through terminals.

When learning commands, it is important to understand what a command does before executing it. Destructive file operations should especially be tested on sample data and used carefully.

Scripts can combine multiple commands into a repeatable workflow, reducing manual effort and making system administration more consistent.
          `,
          quiz: [
            {
              question: "What is a command line?",
              options: [
                "A text-based interface for interacting with an operating system",
                "A type of monitor",
                "A physical network cable",
                "A database table",
              ],
              answer:
                "A text-based interface for interacting with an operating system",
            },
            {
              question: "Which command commonly shows the current directory in Linux?",
              options: ["pwd", "cd", "mkdir", "clear"],
              answer: "pwd",
            },
            {
              question: "Which command is commonly used to list directory contents?",
              options: ["ls", "pwd", "cd", "mkdir"],
              answer: "ls",
            },
            {
              question: "What does cd normally do?",
              options: [
                "Changes the current directory",
                "Creates a user account",
                "Starts a database",
                "Deletes the operating system",
              ],
              answer: "Changes the current directory",
            },
            {
              question: "Why is the command line useful for scripting?",
              options: [
                "Scripts can automate command sequences",
                "It eliminates the need for files",
                "It physically increases CPU speed",
                "It prevents all errors",
              ],
              answer: "Scripts can automate command sequences",
            },
          ],
        },

        {
          title: "Files, Directories, and Paths in Scripts",
          content: `
Scripts frequently work with files and directories. A file path tells the operating system where a file or directory is located.

An absolute path describes a location from the root or drive level. A relative path describes a location relative to the current working directory.

For example, a script might access a configuration file stored inside a config directory relative to the project.

Using path-handling libraries is safer than manually joining strings because operating systems can use different path conventions.

Python provides pathlib for working with paths in a readable and cross-platform way.

A script can check whether a path exists, determine whether it is a file or directory, create directories when appropriate, and iterate through directory contents.

File operations should be performed carefully. A script should verify that the expected path exists and should avoid accidentally overwriting important files.

For automation, it is often useful to separate input and output directories. This makes the workflow easier to understand and reduces accidental modification of source data.

Scripts should also avoid hard-coding paths that only work on one computer when the script is intended to be portable.

Using configuration values or relative project paths can make scripts easier to move between environments.

Path validation is particularly important when paths come from user input. A script should not blindly trust arbitrary paths or allow unexpected locations to be processed.

Good file automation starts with clear assumptions about where input files are located, where output should be written, and what should happen when expected files are missing.
          `,
          quiz: [
            {
              question: "What does a file path identify?",
              options: [
                "The location of a file or directory",
                "The speed of the processor",
                "The size of the monitor",
                "The network bandwidth",
              ],
              answer: "The location of a file or directory",
            },
            {
              question: "What is an absolute path?",
              options: [
                "A path that specifies a location from the filesystem root or drive",
                "A path containing only a filename",
                "A path that always points to a website",
                "A path that contains no directories",
              ],
              answer:
                "A path that specifies a location from the filesystem root or drive",
            },
            {
              question: "What does a relative path describe?",
              options: [
                "A location relative to the current working directory",
                "A location relative to the CPU",
                "A network address only",
                "A database connection",
              ],
              answer: "A location relative to the current working directory",
            },
            {
              question: "Which Python library is useful for modern path handling?",
              options: ["pathlib", "random", "math", "statistics"],
              answer: "pathlib",
            },
            {
              question: "Why should scripts validate paths before processing them?",
              options: [
                "To avoid unexpected or incorrect file operations",
                "To increase internet speed",
                "To change file extensions automatically",
                "To remove the need for backups",
              ],
              answer: "To avoid unexpected or incorrect file operations",
            },
          ],
        },

        {
          title: "Reading, Writing, and Processing Text Files",
          content: `
Text-file processing is one of the most common scripting tasks. Scripts can read configuration files, logs, reports, CSV files, and other text-based data.

A typical file workflow is:
1. Open the file.
2. Read or write data.
3. Process the data.
4. Close the file.

Python's with statement is commonly used when working with files because it automatically handles closing the file after the block finishes.

Files can be read all at once or processed line by line. Line-by-line processing is often better for large files because it avoids loading the entire file into memory.

Scripts can search for specific text, count occurrences, filter lines, transform values, and generate a new output file.

CSV files contain structured rows and columns. Python provides the csv module for handling them more reliably than manually splitting every line.

Text encoding is another important consideration. UTF-8 is widely used and supports many languages.

When writing output files, a script should understand whether it is replacing existing content or adding new content.

Log processing is a practical example. A script might read a log file and identify lines containing a particular severity such as ERROR or WARNING.

Good scripts also handle missing files, invalid content, and permission problems rather than terminating unexpectedly without useful information.
          `,
          quiz: [
            {
              question: "What is a common use of file-processing scripts?",
              options: [
                "Reading and transforming text data",
                "Increasing processor voltage",
                "Changing monitor hardware",
                "Replacing network equipment",
              ],
              answer: "Reading and transforming text data",
            },
            {
              question: "Why is the with statement useful for Python file operations?",
              options: [
                "It helps manage the file resource safely",
                "It converts every file into a database",
                "It increases disk capacity",
                "It automatically encrypts every file",
              ],
              answer: "It helps manage the file resource safely",
            },
            {
              question: "Why can line-by-line processing be useful for large files?",
              options: [
                "It can reduce memory usage",
                "It increases monitor resolution",
                "It removes file permissions",
                "It automatically compresses the file",
              ],
              answer: "It can reduce memory usage",
            },
            {
              question: "Which Python module is designed for CSV data?",
              options: ["csv", "os", "math", "time"],
              answer: "csv",
            },
            {
              question: "Which encoding is widely used for text files?",
              options: ["UTF-8", "CPU-8", "RAM-16", "SCREEN-32"],
              answer: "UTF-8",
            },
          ],
        },

        {
          title: "Arguments, Environment Variables, and Configuration",
          content: `
Scripts often need input from the environment in which they run. Instead of changing the source code every time, values can be supplied through command-line arguments, environment variables, or configuration files.

Command-line arguments allow a user to pass information when starting a script. For example, a file-processing script might receive the input directory as an argument.

Environment variables are values provided by the operating system or execution environment. They are useful for configuration that can differ between machines.

Examples include application environment names, service URLs, and configuration flags. Sensitive values such as API keys should not be hard-coded into source files.

Configuration files are useful when many settings need to be stored together. Common formats include JSON, YAML, TOML, and INI.

A good script separates code from configuration. This makes the script easier to reuse across development, testing, and production environments.

Input should be validated regardless of where it comes from. A command-line argument can be missing or incorrectly formatted, and an environment variable can contain an unexpected value.

Default values can be helpful when a setting is optional, but important configuration should fail clearly when it is missing.

Secrets should be protected through appropriate environment or secret-management mechanisms rather than being committed to public source repositories.

Configuration management is an important part of reliable automation because the same script may run on many different systems with different settings.
          `,
          quiz: [
            {
              question: "Why are command-line arguments useful?",
              options: [
                "They allow input to be supplied when starting a script",
                "They replace the operating system",
                "They increase physical memory",
                "They automatically repair files",
              ],
              answer:
                "They allow input to be supplied when starting a script",
            },
            {
              question: "What is an environment variable?",
              options: [
                "A configuration value provided through the execution environment",
                "A physical memory component",
                "A network cable",
                "A database table",
              ],
              answer:
                "A configuration value provided through the execution environment",
            },
            {
              question: "Why should API keys generally not be hard-coded in source code?",
              options: [
                "They may be exposed accidentally",
                "They make Python slower",
                "They prevent loops from working",
                "They cannot be stored as text",
              ],
              answer: "They may be exposed accidentally",
            },
            {
              question: "What is the purpose of a configuration file?",
              options: [
                "To store settings separately from program logic",
                "To replace the CPU",
                "To create network hardware",
                "To remove all input validation",
              ],
              answer: "To store settings separately from program logic",
            },
            {
              question: "Why should configuration values be validated?",
              options: [
                "They may be missing or contain unexpected values",
                "They always contain executable code",
                "They automatically change the operating system",
                "They cannot contain text",
              ],
              answer: "They may be missing or contain unexpected values",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Bash and Python Scripting",
      description:
        "Learn the structure of Bash scripts, shell variables and pipelines, and use Python for more powerful automation and process control.",
      lessons: [
        {
          title: "Bash Script Structure and Commands",
          content: `
Bash is a command-line shell commonly used on Linux and Unix-like systems. Bash scripts combine shell commands into reusable automation workflows.

A Bash script normally begins with a shebang that identifies the interpreter intended to run the script.

Scripts can contain comments, variables, commands, conditions, loops, and functions.

Shell variables store values that can be used by later commands. When working with variables, correct quoting is important because spaces and special characters can change how the shell interprets input.

Bash can capture the output of a command and use it in another part of a script.

Commands can also be connected using pipelines. A pipeline passes the output of one command as input to another command.

Redirection allows command input or output to be connected to files. This is useful for creating reports and saving command results.

Bash scripts are particularly useful for Linux administration, deployment tasks, backups, system checks, and development workflows.

A script should check important command results rather than assuming every command succeeded.

Executable permissions may be needed when a script is run directly on Linux. The exact permissions should be kept as restrictive as practical.

Bash is powerful, but complex data processing can become difficult to maintain. Python may be a better choice when the automation requires substantial logic, structured data handling, or larger programs.
          `,
          quiz: [
            {
              question: "What is Bash?",
              options: [
                "A command-line shell commonly used on Linux systems",
                "A database engine",
                "A programming monitor",
                "A network protocol",
              ],
              answer: "A command-line shell commonly used on Linux systems",
            },
            {
              question: "What does a shebang identify in a script?",
              options: [
                "The interpreter intended to execute the script",
                "The computer's physical location",
                "The monitor resolution",
                "The database password",
              ],
              answer: "The interpreter intended to execute the script",
            },
            {
              question: "What does a Bash pipeline generally do?",
              options: [
                "Passes output from one command to another command",
                "Connects two physical computers",
                "Installs an operating system",
                "Creates a new processor",
              ],
              answer: "Passes output from one command to another command",
            },
            {
              question: "Why is quoting important in shell scripts?",
              options: [
                "It helps control how the shell interprets spaces and special characters",
                "It increases CPU speed",
                "It removes all file permissions",
                "It automatically encrypts files",
              ],
              answer:
                "It helps control how the shell interprets spaces and special characters",
            },
            {
              question: "When might Python be preferable to Bash?",
              options: [
                "When automation requires substantial application logic",
                "When no logic is required",
                "When only a monitor must be connected",
                "When changing a keyboard physically",
              ],
              answer: "When automation requires substantial application logic",
            },
          ],
        },

        {
          title: "Bash Conditions, Loops, and Functions",
          content: `
Bash supports the same major programming concepts found in other scripting languages: decisions, repetition, and reusable functions.

Conditional statements allow a script to perform different actions depending on whether a test succeeds.

For example, a script can check whether a directory exists before attempting to process it.

Loops allow commands to be repeated. A loop can process multiple files, iterate through values, or continue while a condition is satisfied.

Bash functions group commands under a reusable name. Parameters can be passed to functions so that the same logic can operate on different values.

Exit status is especially important in shell scripting. Commands commonly return a status value that indicates success or failure.

A script can use these statuses to decide whether to continue or stop.

Pipelines and command substitution allow Bash scripts to combine existing command-line tools into useful workflows.

Shell scripts should quote variables appropriately, validate input, and avoid relying on unexpected shell behavior.

For example, a file-processing script should check that an input directory exists before attempting to process it.

When a Bash script becomes very large, splitting functionality into functions or moving complex processing into Python can improve maintainability.

The goal is not simply to make a command work once. A good automation script should behave predictably when inputs change and should provide useful information when something fails.
          `,
          quiz: [
            {
              question: "What do conditions provide in Bash scripts?",
              options: [
                "Decision-making based on tests",
                "Physical disk storage",
                "Network encryption hardware",
                "Screen rendering",
              ],
              answer: "Decision-making based on tests",
            },
            {
              question: "What are loops useful for in Bash?",
              options: [
                "Repeating commands",
                "Replacing the shell",
                "Increasing RAM",
                "Changing the monitor",
              ],
              answer: "Repeating commands",
            },
            {
              question: "What is a Bash function?",
              options: [
                "A reusable group of commands",
                "A physical CPU feature",
                "A database server",
                "A network cable",
              ],
              answer: "A reusable group of commands",
            },
            {
              question: "Why is exit status useful?",
              options: [
                "It can indicate whether a command succeeded or failed",
                "It increases storage capacity",
                "It changes file encoding",
                "It creates a new shell automatically",
              ],
              answer:
                "It can indicate whether a command succeeded or failed",
            },
            {
              question: "What should a script do before processing an expected directory?",
              options: [
                "Check that the directory exists",
                "Delete the directory",
                "Disable all validation",
                "Restart the computer",
              ],
              answer: "Check that the directory exists",
            },
          ],
        },

        {
          title: "Python Scripting for Automation",
          content: `
Python is widely used for automation because its syntax is readable and its standard library provides many tools for interacting with files, directories, operating-system features, text, dates, processes, and data.

A Python automation script can combine several tasks into one workflow.

For example, a report-generation script could:
1. Read input files.
2. Extract relevant information.
3. Calculate statistics.
4. Create a report.
5. Save the output.
6. Record what happened in a log.

The pathlib module is useful for filesystem operations. The os module provides access to operating-system functionality. The csv module handles CSV files, and json handles JSON data.

Python functions help divide automation into manageable components.

Lists and dictionaries are particularly useful for storing processed information.

Automation scripts should avoid unnecessary hard-coded values. Paths, configuration values, and optional settings can be supplied through arguments or environment variables.

Python also supports exception handling, which allows a script to respond to expected failures.

Readable output and logging make automation easier to troubleshoot.

A useful automation script should be repeatable. Running it again should produce predictable results rather than unexpectedly damaging or duplicating data.

Before automating a real workflow, test the script using a small sample. This helps identify incorrect assumptions before the script processes important data.
          `,
          quiz: [
            {
              question: "Why is Python widely used for automation?",
              options: [
                "It has readable syntax and useful libraries",
                "It requires no computer",
                "It only works with monitors",
                "It cannot work with files",
              ],
              answer: "It has readable syntax and useful libraries",
            },
            {
              question: "Which Python module is useful for filesystem paths?",
              options: ["pathlib", "random", "math", "statistics"],
              answer: "pathlib",
            },
            {
              question: "Which module is commonly used for JSON data?",
              options: ["json", "time", "decimal", "calendar"],
              answer: "json",
            },
            {
              question: "What is a useful property of an automation script?",
              options: [
                "It behaves predictably when run repeatedly",
                "It always changes its output randomly",
                "It ignores errors",
                "It depends entirely on manual steps",
              ],
              answer: "It behaves predictably when run repeatedly",
            },
            {
              question: "Why should automation be tested with sample data first?",
              options: [
                "To find incorrect assumptions safely",
                "To eliminate the need for code",
                "To increase CPU temperature",
                "To disable validation",
              ],
              answer: "To find incorrect assumptions safely",
            },
          ],
        },

        {
          title: "Running Commands and Working with Processes",
          content: `
A process is a running instance of a program. Scripts sometimes need to start external programs, inspect their results, or wait for them to finish.

Python provides process-related functionality through modules such as subprocess.

Using subprocess, a script can execute an external command and capture its output or error information.

A script should prefer structured and controlled command execution rather than constructing commands from untrusted input.

Processes generally have exit codes. A successful command commonly returns a success status, while a failure produces a non-success status.

Scripts can use these results to decide what should happen next.

For example, an automation script might run a validation command. If the validation succeeds, the script can continue. If it fails, the script can record the problem and stop the workflow.

Timeouts are important when running external commands. A program may become stuck or take longer than expected.

Output should also be handled carefully. Large amounts of output may need to be redirected or processed incrementally.

Process management is useful in build systems, deployment automation, testing, data processing, and system maintenance.

When a script starts an external process, it should consider:
- What command is being executed.
- What input is supplied.
- What output is expected.
- What happens if the command fails.
- Whether a timeout is needed.
- Whether the command can safely receive the supplied input.

This makes process automation more reliable and easier to troubleshoot.
          `,
          quiz: [
            {
              question: "What is a process?",
              options: [
                "A running instance of a program",
                "A physical hard drive",
                "A programming language",
                "A network cable",
              ],
              answer: "A running instance of a program",
            },
            {
              question: "Which Python module is commonly used to run external commands?",
              options: ["subprocess", "json", "csv", "math"],
              answer: "subprocess",
            },
            {
              question: "What does an exit code commonly indicate?",
              options: [
                "Whether a command completed successfully or failed",
                "The physical size of the computer",
                "The monitor resolution",
                "The amount of RAM installed",
              ],
              answer:
                "Whether a command completed successfully or failed",
            },
            {
              question: "Why are timeouts useful for external processes?",
              options: [
                "They prevent a script from waiting indefinitely",
                "They increase CPU speed",
                "They remove all output",
                "They automatically repair failed commands",
              ],
              answer: "They prevent a script from waiting indefinitely",
            },
            {
              question: "What should be considered when passing input to an external command?",
              options: [
                "Whether the input is controlled and safe",
                "Only the monitor size",
                "Only the keyboard layout",
                "The color of the terminal",
              ],
              answer: "Whether the input is controlled and safe",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Automation and Reliable Scripts",
      description:
        "Learn error handling, logging, scheduling, security, testing, and how to design a complete system automation project.",
      lessons: [
        {
          title: "Error Handling and Logging",
          content: `
Errors are normal in real automation. A file may be missing, a network service may be unavailable, a command may fail, or input may be invalid.

Good scripts handle expected errors instead of crashing without useful information.

Python provides try and except for handling exceptions. A script can place an operation that may fail inside a try block and respond appropriately when an expected exception occurs.

Error handling should be specific enough to identify the problem. Catching every possible error without understanding it can hide real programming problems.

A useful script should also produce logs.

Logging records important events such as:
- Script start and completion.
- Files processed.
- Warnings.
- Errors.
- Important configuration decisions.
- Processing results.

Different log levels can represent different importance. Common levels include DEBUG, INFO, WARNING, ERROR, and CRITICAL.

Logs should be useful without exposing sensitive information. Passwords, API keys, and other secrets should not be written to logs.

Error messages should explain what went wrong and, when possible, what the user can do next.

A script can also return an appropriate exit status when it cannot complete successfully.

Logging and error handling work together. Error handling controls what the program does when something fails, while logging records useful information about what happened.

A reliable automation workflow should make failures visible instead of silently ignoring them.
          `,
          quiz: [
            {
              question: "Why is error handling important?",
              options: [
                "It allows scripts to respond to expected failures",
                "It makes every script error impossible",
                "It replaces testing",
                "It increases physical storage",
              ],
              answer: "It allows scripts to respond to expected failures",
            },
            {
              question: "Which Python structure is commonly used for exception handling?",
              options: ["try and except", "for and range", "if and import", "class and list"],
              answer: "try and except",
            },
            {
              question: "What is logging used for?",
              options: [
                "Recording important events and errors",
                "Increasing CPU speed",
                "Changing file permissions automatically",
                "Replacing configuration",
              ],
              answer: "Recording important events and errors",
            },
            {
              question: "Which log level usually represents a serious failure?",
              options: ["ERROR", "DEBUG", "INFO", "TRACE"],
              answer: "ERROR",
            },
            {
              question: "What should normally not be written into logs?",
              options: [
                "Passwords and API keys",
                "A general success message",
                "A file-processing count",
                "A non-sensitive warning",
              ],
              answer: "Passwords and API keys",
            },
          ],
        },

        {
          title: "Scheduling and Repeated Automation",
          content: `
Many automation tasks need to run repeatedly without manual intervention. Scheduling allows a script to execute at a particular time or according to a recurring schedule.

Linux commonly uses cron for scheduled tasks. Windows provides Task Scheduler.

Examples of scheduled automation include:
- Creating a daily report.
- Checking system health periodically.
- Processing files at regular intervals.
- Running maintenance tasks.
- Generating backups according to an approved schedule.

A scheduled script should be designed differently from an interactive script. It may run without a person watching it, so logging and error reporting become especially important.

The script should use absolute or reliably resolved paths where appropriate because the scheduled environment may have a different working directory from an interactive terminal.

Environment variables and configuration should be available to the scheduled process.

Scheduling should also consider whether multiple copies of the same script could run at the same time. If simultaneous execution could cause problems, the workflow should use an appropriate locking or coordination mechanism.

Idempotence is a useful concept for automation. An idempotent operation can be repeated without causing unintended cumulative changes.

For example, a script that ensures a directory exists is easier to schedule safely than a script that blindly creates duplicate resources every time.

Scheduled tasks should have clear logs and failure notifications when appropriate.

The goal is reliable unattended automation, not simply making a script run on a timer.
          `,
          quiz: [
            {
              question: "What does scheduling allow?",
              options: [
                "Scripts to run automatically at defined times",
                "Scripts to replace hardware",
                "Programs to remove all errors",
                "Computers to work without an operating system",
              ],
              answer: "Scripts to run automatically at defined times",
            },
            {
              question: "Which Linux tool is commonly associated with scheduled tasks?",
              options: ["cron", "grep", "mkdir", "pwd"],
              answer: "cron",
            },
            {
              question: "Which Windows feature can schedule scripts?",
              options: ["Task Scheduler", "Device Manager", "Paint", "Notepad"],
              answer: "Task Scheduler",
            },
            {
              question: "Why is logging especially important for unattended scripts?",
              options: [
                "There may be no person watching the script directly",
                "It increases memory capacity",
                "It prevents all failures",
                "It replaces configuration files",
              ],
              answer:
                "There may be no person watching the script directly",
            },
            {
              question: "What does idempotence mean in automation?",
              options: [
                "Repeating an operation does not cause unintended cumulative changes",
                "A script must always fail on its second run",
                "A script can only run once",
                "A script must delete previous results",
              ],
              answer:
                "Repeating an operation does not cause unintended cumulative changes",
            },
          ],
        },

        {
          title: "Script Security, Testing, and Best Practices",
          content: `
Scripts can perform powerful operations, so security and testing are important.

Input validation should be used whenever a script receives information from users, files, environment variables, or other systems.

A script should not blindly execute arbitrary input as a command. External command execution should be carefully controlled.

Secrets such as passwords, tokens, and API keys should not be embedded directly into source code or committed to public repositories.

Least privilege is another important principle. A script should run with only the permissions it actually needs.

Testing should cover normal cases and expected failure cases. For a file-processing script, tests might include:
- A valid file.
- An empty file.
- A missing file.
- Invalid input.
- A large file.
- Permission problems.

Scripts should be readable and maintainable. Use meaningful names, small functions, comments where useful, and consistent formatting.

Avoid unnecessary duplication. If the same logic appears multiple times, consider creating a function.

Configuration should be separated from code when values vary between environments.

A good script should have a predictable exit status, useful logging, clear errors, and safe defaults.

Before deploying automation, test it in a controlled environment. For important workflows, keep backups or recovery mechanisms.

Documentation should explain what the script does, what inputs it requires, how to run it, what configuration is needed, and what output it produces.

These practices turn a quick script into reliable automation that other developers and administrators can understand and safely maintain.
          `,
          quiz: [
            {
              question: "Why should script input be validated?",
              options: [
                "To prevent unexpected or invalid data from causing problems",
                "To increase monitor resolution",
                "To eliminate all testing",
                "To replace the operating system",
              ],
              answer:
                "To prevent unexpected or invalid data from causing problems",
            },
            {
              question: "Where should API keys generally be kept instead of hard-coded?",
              options: [
                "A suitable secret or protected configuration mechanism",
                "A public source repository",
                "A public log file",
                "A screenshot shared online",
              ],
              answer:
                "A suitable secret or protected configuration mechanism",
            },
            {
              question: "What does least privilege mean?",
              options: [
                "Give the script only the permissions it needs",
                "Give every script administrator access",
                "Remove all authentication",
                "Allow every user to modify every file",
              ],
              answer: "Give the script only the permissions it needs",
            },
            {
              question: "Which is a useful test case for a file-processing script?",
              options: [
                "A missing input file",
                "Only the perfect input",
                "A different computer monitor",
                "A keyboard color",
              ],
              answer: "A missing input file",
            },
            {
              question: "What should documentation for a script explain?",
              options: [
                "Purpose, inputs, configuration, execution, and outputs",
                "Only the author's name",
                "Only the computer brand",
                "Only the source-code file size",
              ],
              answer:
                "Purpose, inputs, configuration, execution, and outputs",
            },
          ],
        },

        {
          title: "Final Project: Build a System Automation Script",
          content: `
The final project combines the major concepts from this course into a practical automation workflow.

Project: Build a System Automation Script.

The goal is to create a safe script that performs a useful system or file-management task automatically.

A suitable beginner project could be a System Report Generator.

The script can collect non-sensitive information such as:
- Current date and time.
- Current working directory.
- Number of files in a selected directory.
- Names or sizes of selected files.
- Basic available storage information where supported.

The script should save the results into a report file.

Recommended project structure:

1. Configuration
Store configurable values separately from the main logic.

2. Input validation
Check that required directories or input values are valid.

3. Functions
Create separate functions for collecting information, processing it, generating the report, and logging.

4. File handling
Use safe path handling and appropriate file encoding.

5. Error handling
Handle expected problems such as missing directories or inaccessible files.

6. Logging
Record when the script starts, what major steps were completed, and whether an error occurred.

7. Output
Generate a readable report in a predictable location.

8. Testing
Test the script with normal input, missing input, empty directories, and other expected conditions.

A good final project should be repeatable. Running the script again should not unexpectedly destroy existing information.

The project can later be extended with command-line arguments, scheduled execution, CSV output, configuration files, and email or dashboard integration.

The most important lesson is that automation is not just about making something run. Reliable scripting means designing a process that is understandable, testable, safe, repeatable, and useful.
          `,
          quiz: [
            {
              question: "What is the main purpose of the final project?",
              options: [
                "Build a useful and reliable automation script",
                "Create a new operating system",
                "Replace a computer's hardware",
                "Build a physical network",
              ],
              answer: "Build a useful and reliable automation script",
            },
            {
              question: "Which feature should a system automation script include?",
              options: [
                "Input validation and error handling",
                "Uncontrolled command execution",
                "Hard-coded secrets",
                "No logging",
              ],
              answer: "Input validation and error handling",
            },
            {
              question: "Why should the project use functions?",
              options: [
                "To divide the automation into manageable responsibilities",
                "To remove all file operations",
                "To disable configuration",
                "To prevent testing",
              ],
              answer:
                "To divide the automation into manageable responsibilities",
            },
            {
              question: "Which is an appropriate test for the final project?",
              options: [
                "Running it with a missing or invalid input directory",
                "Testing only the perfect case",
                "Removing all error handling before testing",
                "Using unknown commands without checking them",
              ],
              answer:
                "Running it with a missing or invalid input directory",
            },
            {
              question: "What makes automation reliable?",
              options: [
                "Predictable, tested, safe, and repeatable behavior",
                "Random results on every run",
                "No validation or logging",
                "Dependence on manual intervention for every step",
              ],
              answer:
                "Predictable, tested, safe, and repeatable behavior",
            },
          ],
        },
      ],
    },
  ],
};

export default scriptingCourse;
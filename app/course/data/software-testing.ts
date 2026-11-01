const softwareTestingCourse = {
  title: "Software Testing",
  description:
    "Learn software testing fundamentals, test cases, test types, debugging, automation, API testing, and practical software quality assurance.",

  weeks: [
    {
      title: "Week 1: Software Testing Fundamentals",
      description:
        "Understand the purpose of software testing and the basic testing process.",
      lessons: [
        {
          title: "Introduction to Software Testing",
          content: `Software testing is the process of checking software to find defects and verify that it works as expected.

Testing helps developers identify problems before software reaches users. It improves software quality, reliability, security, and user experience.

Common testing activities include creating test cases, executing tests, checking expected results, reporting defects, and verifying fixes.

Software testing is not only about finding bugs. It also verifies that the software satisfies its requirements.`,
          quiz: [
            {
              question: "What is the main purpose of software testing?",
              options: [
                "To design hardware",
                "To find defects and verify software behavior",
                "To increase file size",
                "To create databases",
              ],
              answer: "To find defects and verify software behavior",
            },
            {
              question: "What does a test case contain?",
              options: [
                "Only source code",
                "Steps, inputs, and expected results",
                "Only database tables",
                "Only UI images",
              ],
              answer: "Steps, inputs, and expected results",
            },
            {
              question: "Testing mainly helps improve what?",
              options: [
                "Software quality",
                "Monitor size",
                "Keyboard speed",
                "Internet speed",
              ],
              answer: "Software quality",
            },
            {
              question: "What is a defect?",
              options: [
                "A software problem or error",
                "A programming language",
                "A database",
                "A test environment",
              ],
              answer: "A software problem or error",
            },
            {
              question: "Who can perform software testing?",
              options: [
                "Only customers",
                "Developers and testers",
                "Only hardware engineers",
                "Only managers",
              ],
              answer: "Developers and testers",
            },
          ],
        },
        {
          title: "Software Development Life Cycle and Testing",
          content: `Software testing is connected to the Software Development Life Cycle (SDLC).

A typical SDLC includes requirements, design, development, testing, deployment, and maintenance.

Testing should begin early rather than waiting until development is completely finished. Early testing can identify requirement and design problems before they become expensive to fix.

Developers can use unit tests during coding, while testers can perform functional, integration, system, and other testing activities.`,
          quiz: [
            {
              question: "What does SDLC stand for?",
              options: [
                "Software Development Life Cycle",
                "System Data Logic Control",
                "Software Design Logic Code",
                "System Development Level Control",
              ],
              answer: "Software Development Life Cycle",
            },
            {
              question: "When should testing begin?",
              options: [
                "Only after deployment",
                "As early as practical",
                "Only after one year",
                "Never",
              ],
              answer: "As early as practical",
            },
            {
              question: "Which phase usually follows development?",
              options: ["Testing", "Marketing", "Hardware design", "Hiring"],
              answer: "Testing",
            },
            {
              question: "Why is early testing useful?",
              options: [
                "It makes bugs more expensive",
                "It helps identify problems early",
                "It removes requirements",
                "It prevents coding",
              ],
              answer: "It helps identify problems early",
            },
            {
              question: "Which testing can be performed during coding?",
              options: [
                "Unit testing",
                "Acceptance testing only",
                "Production testing only",
                "Market testing",
              ],
              answer: "Unit testing",
            },
          ],
        },
        {
          title: "Test Cases and Test Scenarios",
          content: `A test scenario describes what needs to be tested, while a test case provides detailed steps for performing the test.

A good test case normally includes a test case ID, description, preconditions, test steps, input data, expected result, and actual result.

For example, for a login page, scenarios can include valid login, invalid password, empty username, and empty password.

Well-designed test cases make testing systematic and easier to repeat.`,
          quiz: [
            {
              question: "What does a test scenario describe?",
              options: [
                "What needs to be tested",
                "The programming language",
                "The database password",
                "The server hardware",
              ],
              answer: "What needs to be tested",
            },
            {
              question: "Which is part of a test case?",
              options: [
                "Expected result",
                "Monitor brand",
                "Keyboard model",
                "Office location",
              ],
              answer: "Expected result",
            },
            {
              question: "What should a login test check?",
              options: [
                "Only page color",
                "Valid and invalid login behavior",
                "Only font size",
                "Only browser history",
              ],
              answer: "Valid and invalid login behavior",
            },
            {
              question: "Why are test cases useful?",
              options: [
                "They make testing systematic",
                "They remove software",
                "They replace databases",
                "They prevent requirements",
              ],
              answer: "They make testing systematic",
            },
            {
              question: "What identifies a test case uniquely?",
              options: [
                "Test case ID",
                "Screen size",
                "CPU speed",
                "File extension",
              ],
              answer: "Test case ID",
            },
          ],
        },
        {
          title: "Bug Reporting and Defect Life Cycle",
          content: `When testing reveals unexpected behavior, the problem should be reported as a defect or bug.

A good bug report includes a clear title, description, steps to reproduce, expected result, actual result, severity, priority, and supporting information.

A defect may move through states such as New, Assigned, In Progress, Fixed, Retest, Verified, and Closed.

Clear bug reports help developers reproduce and fix problems efficiently.`,
          quiz: [
            {
              question: "What should a bug report contain?",
              options: [
                "Steps to reproduce",
                "Only the developer name",
                "Only the application logo",
                "Only the file size",
              ],
              answer: "Steps to reproduce",
            },
            {
              question: "What is the actual result?",
              options: [
                "What the software really did",
                "What should happen",
                "The project name",
                "The tester's address",
              ],
              answer: "What the software really did",
            },
            {
              question: "Which state can occur after a bug is fixed?",
              options: ["Retest", "Design", "Hiring", "Planning"],
              answer: "Retest",
            },
            {
              question: "Why are reproduction steps important?",
              options: [
                "They help reproduce the problem",
                "They increase application size",
                "They remove the bug automatically",
                "They create users",
              ],
              answer: "They help reproduce the problem",
            },
            {
              question: "What is severity related to?",
              options: [
                "Impact of the defect",
                "Developer age",
                "Computer brand",
                "File name",
              ],
              answer: "Impact of the defect",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Types and Levels of Testing",
      description:
        "Learn common testing levels and testing techniques used in software development.",
      lessons: [
        {
          title: "Unit Testing",
          content: `Unit testing checks small individual parts of a program, such as functions, methods, or classes.

Developers commonly write unit tests while implementing features. A unit test provides an input and checks whether the output matches the expected result.

Unit tests are fast and can help detect problems early.

Popular unit testing frameworks include JUnit for Java, pytest for Python, and Jest for JavaScript and TypeScript.`,
          quiz: [
            {
              question: "What does unit testing test?",
              options: [
                "Small individual software components",
                "Entire companies",
                "Only hardware",
                "Internet cables",
              ],
              answer: "Small individual software components",
            },
            {
              question: "Who commonly writes unit tests?",
              options: ["Developers", "Customers only", "Managers only", "Designers only"],
              answer: "Developers",
            },
            {
              question: "Which is a Python testing framework?",
              options: ["pytest", "Photoshop", "Excel", "Docker Hub"],
              answer: "pytest",
            },
            {
              question: "Unit tests are generally what?",
              options: ["Fast", "Always manual", "Hardware-based", "Unrelated to code"],
              answer: "Fast",
            },
            {
              question: "What does a unit test usually compare?",
              options: [
                "Actual and expected results",
                "Two monitors",
                "Two keyboards",
                "Two operating systems",
              ],
              answer: "Actual and expected results",
            },
          ],
        },
        {
          title: "Integration Testing",
          content: `Integration testing checks whether different modules or components work correctly together.

A software application may have separate modules for authentication, payments, databases, and notifications. Each module can pass unit testing but still fail when integrated.

Integration testing helps identify problems involving APIs, databases, data formats, communication, and module dependencies.`,
          quiz: [
            {
              question: "What does integration testing verify?",
              options: [
                "Interaction between components",
                "Only individual functions",
                "Only UI colors",
                "Only hardware",
              ],
              answer: "Interaction between components",
            },
            {
              question: "Which problem can integration testing detect?",
              options: [
                "API communication failure",
                "Keyboard color",
                "Monitor size",
                "Desk position",
              ],
              answer: "API communication failure",
            },
            {
              question: "Can modules pass unit tests and still fail integration testing?",
              options: ["Yes", "No", "Only on paper", "Never"],
              answer: "Yes",
            },
            {
              question: "What can be involved in integration testing?",
              options: ["Database interaction", "Chair position", "Office lighting", "Printer color"],
              answer: "Database interaction",
            },
            {
              question: "Integration testing focuses on what?",
              options: [
                "Communication between components",
                "Individual keyboard keys",
                "Computer assembly",
                "Logo design",
              ],
              answer: "Communication between components",
            },
          ],
        },
        {
          title: "System and Acceptance Testing",
          content: `System testing evaluates the complete application as a whole.

It checks whether the integrated software behaves according to its requirements. It can include functional and non-functional testing.

Acceptance testing determines whether the software is suitable for its intended users or business requirements.

User Acceptance Testing (UAT) is commonly performed from the user's or business perspective before release.`,
          quiz: [
            {
              question: "What does system testing evaluate?",
              options: [
                "The complete application",
                "Only one function",
                "Only one variable",
                "Only source code comments",
              ],
              answer: "The complete application",
            },
            {
              question: "What does UAT stand for?",
              options: [
                "User Acceptance Testing",
                "Universal Application Tool",
                "User Algorithm Testing",
                "Unified API Transfer",
              ],
              answer: "User Acceptance Testing",
            },
            {
              question: "Acceptance testing focuses on what?",
              options: [
                "Whether software meets user or business needs",
                "CPU temperature",
                "Keyboard layout",
                "File compression",
              ],
              answer: "Whether software meets user or business needs",
            },
            {
              question: "System testing happens on what?",
              options: [
                "An integrated system",
                "Only a single line of code",
                "Only a database column",
                "Only a design document",
              ],
              answer: "An integrated system",
            },
            {
              question: "Who can participate in UAT?",
              options: [
                "Users or business representatives",
                "Only hardware manufacturers",
                "Only network providers",
                "Only database servers",
              ],
              answer: "Users or business representatives",
            },
          ],
        },
        {
          title: "Functional and Non-Functional Testing",
          content: `Functional testing checks whether software performs its required functions.

Examples include login testing, registration testing, payment testing, and search functionality testing.

Non-functional testing evaluates qualities such as performance, usability, security, reliability, and scalability.

Both functional and non-functional testing are important for delivering reliable software.`,
          quiz: [
            {
              question: "What does functional testing verify?",
              options: [
                "Required software functionality",
                "Office temperature",
                "Monitor weight",
                "Keyboard size",
              ],
              answer: "Required software functionality",
            },
            {
              question: "Which is a non-functional quality?",
              options: ["Performance", "Login button existence", "Registration field", "Search button"],
              answer: "Performance",
            },
            {
              question: "Security testing is generally what type?",
              options: [
                "Non-functional testing",
                "Only unit testing",
                "Only UI testing",
                "Hardware testing",
              ],
              answer: "Non-functional testing",
            },
            {
              question: "Which is functional testing?",
              options: [
                "Checking whether login works",
                "Checking office lighting",
                "Checking keyboard weight",
                "Checking monitor size",
              ],
              answer: "Checking whether login works",
            },
            {
              question: "Why are both testing types important?",
              options: [
                "They evaluate different aspects of software quality",
                "They replace development",
                "They remove requirements",
                "They prevent deployment",
              ],
              answer: "They evaluate different aspects of software quality",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Advanced Testing and Automation",
      description:
        "Learn regression testing, API testing, automation, and performance testing.",
      lessons: [
        {
          title: "Regression and Smoke Testing",
          content: `Regression testing checks whether recent code changes have introduced problems into previously working features.

For example, changing the login system should not break registration or password recovery.

Smoke testing is a basic set of tests used to determine whether a build is stable enough for further testing.

Regression testing is usually broader, while smoke testing provides a quick initial check.`,
          quiz: [
            {
              question: "What is regression testing?",
              options: [
                "Checking that changes did not break existing functionality",
                "Testing only new hardware",
                "Deleting old tests",
                "Testing network cables",
              ],
              answer: "Checking that changes did not break existing functionality",
            },
            {
              question: "What is smoke testing used for?",
              options: [
                "Checking basic build stability",
                "Testing smoke sensors only",
                "Testing keyboards",
                "Testing databases only",
              ],
              answer: "Checking basic build stability",
            },
            {
              question: "Regression testing is useful after what?",
              options: [
                "Code changes",
                "Computer purchase",
                "Office relocation",
                "Logo design",
              ],
              answer: "Code changes",
            },
            {
              question: "Which testing is usually a quick initial check?",
              options: ["Smoke testing", "Regression testing", "Load testing", "Security audit"],
              answer: "Smoke testing",
            },
            {
              question: "Why is regression testing important?",
              options: [
                "Existing features may be affected by changes",
                "It changes hardware",
                "It removes users",
                "It replaces development",
              ],
              answer: "Existing features may be affected by changes",
            },
          ],
        },
        {
          title: "API Testing",
          content: `API testing checks whether application programming interfaces work correctly.

An API test can send a request to an endpoint and verify the response status, response data, headers, authentication, and error handling.

For example, a GET request may retrieve user information while a POST request may create a new record.

API testing is useful because modern applications often depend heavily on backend services.`,
          quiz: [
            {
              question: "What does API testing check?",
              options: [
                "API behavior and responses",
                "Monitor brightness",
                "Keyboard layout",
                "Office furniture",
              ],
              answer: "API behavior and responses",
            },
            {
              question: "Which HTTP method is commonly used to retrieve data?",
              options: ["GET", "POST", "DELETE", "PATCH"],
              answer: "GET",
            },
            {
              question: "Which HTTP method commonly creates data?",
              options: ["POST", "GET", "HEAD", "OPTIONS"],
              answer: "POST",
            },
            {
              question: "What can API testing verify?",
              options: [
                "Status codes and response data",
                "Chair height",
                "Monitor color",
                "Keyboard weight",
              ],
              answer: "Status codes and response data",
            },
            {
              question: "Why is API testing important?",
              options: [
                "Applications often depend on backend services",
                "It replaces UI design",
                "It builds computers",
                "It changes programming languages",
              ],
              answer: "Applications often depend on backend services",
            },
          ],
        },
        {
          title: "Test Automation",
          content: `Test automation uses software tools and scripts to execute tests automatically.

Automation is useful for repetitive tests such as regression testing. It can reduce manual effort and provide faster feedback.

Common tools include Selenium and Playwright for web applications, pytest for Python testing, JUnit for Java, and Jest for JavaScript or TypeScript.

Not every test should be automated. Tests that are repetitive, stable, and frequently executed are good automation candidates.`,
          quiz: [
            {
              question: "What is test automation?",
              options: [
                "Using software to execute tests automatically",
                "Testing without software",
                "Manual documentation only",
                "Hardware manufacturing",
              ],
              answer: "Using software to execute tests automatically",
            },
            {
              question: "Which is a web automation tool?",
              options: ["Selenium", "Excel", "Photoshop", "Notepad"],
              answer: "Selenium",
            },
            {
              question: "Which test is a good automation candidate?",
              options: [
                "Repetitive regression test",
                "One-time brainstorming",
                "Office meeting",
                "Manual design discussion",
              ],
              answer: "Repetitive regression test",
            },
            {
              question: "What is one benefit of automation?",
              options: [
                "Faster repeated testing",
                "More manual work",
                "No test results",
                "No software execution",
              ],
              answer: "Faster repeated testing",
            },
            {
              question: "Should every test be automated?",
              options: ["No", "Yes, always", "Only hardware tests", "Only documentation"],
              answer: "No",
            },
          ],
        },
        {
          title: "Performance Testing",
          content: `Performance testing evaluates how software behaves under different workloads.

Common performance testing types include load testing, stress testing, endurance testing, and scalability testing.

Load testing checks expected user loads. Stress testing pushes the system beyond normal conditions to understand its limits.

Performance testing can reveal slow response times, resource bottlenecks, and scalability problems.`,
          quiz: [
            {
              question: "What does performance testing evaluate?",
              options: [
                "Software behavior under workload",
                "Only UI colors",
                "Only source code formatting",
                "Only database names",
              ],
              answer: "Software behavior under workload",
            },
            {
              question: "What does load testing check?",
              options: [
                "Expected user load",
                "Only one user interface element",
                "Hardware weight",
                "File names",
              ],
              answer: "Expected user load",
            },
            {
              question: "What does stress testing do?",
              options: [
                "Tests beyond normal operating conditions",
                "Deletes the application",
                "Changes source code automatically",
                "Tests only fonts",
              ],
              answer: "Tests beyond normal operating conditions",
            },
            {
              question: "What can performance testing reveal?",
              options: [
                "Slow response times",
                "Developer names",
                "Keyboard colors",
                "Logo dimensions",
              ],
              answer: "Slow response times",
            },
            {
              question: "What does scalability relate to?",
              options: [
                "Handling increased workload",
                "Changing font size",
                "Changing passwords",
                "Writing comments",
              ],
              answer: "Handling increased workload",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Testing and Quality",
      description:
        "Apply testing concepts to real software projects and understand testing practices used by developers.",
      lessons: [
        {
          title: "Debugging and Root Cause Analysis",
          content: `Testing identifies problems, while debugging helps developers find and fix the cause of those problems.

A developer can reproduce the issue, inspect logs, examine variables, trace program execution, and isolate the faulty component.

Root cause analysis focuses on finding why the problem occurred instead of only fixing its visible symptom.

Effective debugging combines test results, logs, debugging tools, and systematic reasoning.`,
          quiz: [
            {
              question: "What is debugging?",
              options: [
                "Finding and fixing the cause of software problems",
                "Designing a logo",
                "Creating hardware",
                "Writing requirements only",
              ],
              answer: "Finding and fixing the cause of software problems",
            },
            {
              question: "What can help during debugging?",
              options: ["Logs", "Office furniture", "Monitor size", "Keyboard color"],
              answer: "Logs",
            },
            {
              question: "What does root cause analysis focus on?",
              options: [
                "Why the problem occurred",
                "Only the visible symptom",
                "Application colors",
                "File size",
              ],
              answer: "Why the problem occurred",
            },
            {
              question: "What can developers inspect while debugging?",
              options: [
                "Variables and program execution",
                "Desk position",
                "Keyboard weight",
                "Monitor brand",
              ],
              answer: "Variables and program execution",
            },
            {
              question: "Why reproduce a bug?",
              options: [
                "To understand and investigate the problem",
                "To delete the software",
                "To change the operating system",
                "To increase file size",
              ],
              answer: "To understand and investigate the problem",
            },
          ],
        },
        {
          title: "Testing in CI/CD",
          content: `Continuous Integration and Continuous Delivery or Deployment allow teams to automatically build, test, and deliver software.

Automated tests can run whenever developers push code to a repository.

A CI pipeline can run unit tests, integration tests, linting, security checks, and build verification.

If important tests fail, the pipeline can stop the change from being delivered until the problem is fixed.`,
          quiz: [
            {
              question: "What does CI stand for?",
              options: [
                "Continuous Integration",
                "Code Installation",
                "Computer Interface",
                "Central Internet",
              ],
              answer: "Continuous Integration",
            },
            {
              question: "When can automated tests run in CI?",
              options: [
                "After code changes are pushed",
                "Only once a year",
                "Only after hardware replacement",
                "Never",
              ],
              answer: "After code changes are pushed",
            },
            {
              question: "What can a CI pipeline run?",
              options: [
                "Automated tests",
                "Only meetings",
                "Only design work",
                "Only hardware repair",
              ],
              answer: "Automated tests",
            },
            {
              question: "What can happen when important tests fail?",
              options: [
                "The pipeline can stop delivery",
                "The bug disappears automatically",
                "The database is deleted",
                "The computer shuts down permanently",
              ],
              answer: "The pipeline can stop delivery",
            },
            {
              question: "Why is testing in CI useful?",
              options: [
                "It provides fast feedback on code changes",
                "It prevents all coding",
                "It replaces developers",
                "It removes requirements",
              ],
              answer: "It provides fast feedback on code changes",
            },
          ],
        },
        {
          title: "Test Strategy and Quality Assurance",
          content: `A test strategy defines how testing will be planned and performed for a project.

It can describe testing scope, test levels, tools, environments, responsibilities, automation, risks, and reporting.

Quality Assurance (QA) focuses on improving processes and preventing defects, while testing is one activity used to evaluate software.

A good testing approach balances risk, project requirements, available time, and resources.`,
          quiz: [
            {
              question: "What does a test strategy define?",
              options: [
                "How testing will be performed",
                "Only application colors",
                "Only employee salaries",
                "Only hardware design",
              ],
              answer: "How testing will be performed",
            },
            {
              question: "What can a test strategy include?",
              options: ["Testing scope", "Office location", "Keyboard model", "Monitor brand"],
              answer: "Testing scope",
            },
            {
              question: "What does QA focus on?",
              options: [
                "Improving processes and preventing defects",
                "Only writing code",
                "Only hardware design",
                "Only UI colors",
              ],
              answer: "Improving processes and preventing defects",
            },
            {
              question: "What should testing decisions consider?",
              options: [
                "Risk and project requirements",
                "Keyboard color",
                "Office furniture",
                "Monitor size",
              ],
              answer: "Risk and project requirements",
            },
            {
              question: "Is testing part of software quality activities?",
              options: ["Yes", "No", "Only for hardware", "Only for websites"],
              answer: "Yes",
            },
          ],
        },
        {
          title: "Mini Project: Automated Web Application Testing",
          content: `In this mini project, build a simple automated testing workflow for a web application.

Choose an application with features such as login, registration, search, and logout.

Create test cases for valid and invalid login, required fields, search behavior, and logout.

Then automate selected tests using a suitable framework such as Playwright, Selenium, or another testing tool.

Finally, run the tests, record failures, investigate defects, fix problems, and run the tests again.

This project demonstrates the complete cycle of test planning, execution, debugging, automation, and verification.`,
          quiz: [
            {
              question: "What is the main goal of the project?",
              options: [
                "Automated web application testing",
                "Hardware manufacturing",
                "Network cable design",
                "Database installation only",
              ],
              answer: "Automated web application testing",
            },
            {
              question: "Which feature can be tested?",
              options: ["Login", "Keyboard weight", "Monitor size", "Office lighting"],
              answer: "Login",
            },
            {
              question: "Which tool can be used for web automation?",
              options: ["Playwright", "Excel", "Notepad", "Calculator"],
              answer: "Playwright",
            },
            {
              question: "What should happen after fixing a defect?",
              options: [
                "Run the relevant tests again",
                "Delete all tests",
                "Stop development permanently",
                "Ignore the defect",
              ],
              answer: "Run the relevant tests again",
            },
            {
              question: "What does this project demonstrate?",
              options: [
                "Testing, automation, debugging, and verification",
                "Only UI design",
                "Only database creation",
                "Only hardware assembly",
              ],
              answer: "Testing, automation, debugging, and verification",
            },
          ],
        },
      ],
    },
  ],
};

export default softwareTestingCourse;
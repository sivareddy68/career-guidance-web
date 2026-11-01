
const testingCourse = {
  title: "Testing for Web Developer",
  description:
    "Learn software testing for web development, including manual testing, test case design, functional testing, API testing, automation testing, Playwright, debugging, and test reporting.",
  weeks: [
    {
      title: "Week 1: Software Testing Fundamentals",
      description:
        "Understand software testing, testing types, test planning, test cases, and bug reporting.",
      lessons: [
        {
          title: "Introduction to Software Testing",
          content: `Software testing is the process of checking an application to identify defects and verify that it works according to its requirements.

The main purpose of testing is to improve software quality, reliability, usability, and security.

Important concepts:
- Error: A human mistake during development.
- Defect or bug: A problem in the software.
- Failure: When the software does not behave as expected.
- Test case: A set of steps and expected results.
- Test data: Information used during testing.

For web developers, testing helps verify that pages, forms, buttons, navigation, and API connections work correctly.

Testing should be performed throughout development rather than only at the end of a project.`,
          quiz: [
            {
              question: "What is the main purpose of software testing?",
              options: ["Identify defects and verify behavior", "Create databases", "Design logos", "Install operating systems"],
              answer: "Identify defects and verify behavior",
            },
            {
              question: "What is a software bug?",
              options: ["A defect in software", "A design tool", "A programming language", "A server location"],
              answer: "A defect in software",
            },
            {
              question: "What is a test case?",
              options: ["Steps and expected results for testing", "A database server", "A CSS file", "A programming framework"],
              answer: "Steps and expected results for testing",
            },
            {
              question: "What is test data?",
              options: ["Information used during testing", "The website logo", "Source code only", "A browser extension"],
              answer: "Information used during testing",
            },
            {
              question: "When should testing be performed?",
              options: ["Throughout development", "Only after deployment", "Only during installation", "Never"],
              answer: "Throughout development",
            },
          ],
        },
        {
          title: "Types of Software Testing",
          content: `Different types of testing are used to verify different aspects of an application.

Important testing types:

1. Functional testing: Checks whether features work according to requirements.
2. Non-functional testing: Checks performance, usability, reliability, and other quality attributes.
3. Regression testing: Checks whether existing features still work after changes.
4. Smoke testing: Performs basic checks to confirm that a build is suitable for further testing.
5. Sanity testing: Focuses on a specific changed area after a small update.
6. Compatibility testing: Checks behavior across browsers, devices, and operating systems.

Example:
For a login page, functional testing checks whether valid users can log in. Compatibility testing checks whether the page works in different browsers.

Selecting suitable testing types depends on the application's requirements and risks.`,
          quiz: [
            {
              question: "Which testing checks whether features work as expected?",
              options: ["Functional testing", "Load balancing", "Database indexing", "Code formatting"],
              answer: "Functional testing",
            },
            {
              question: "Which testing checks whether existing features still work after changes?",
              options: ["Regression testing", "Installation testing", "Design testing only", "Unit conversion"],
              answer: "Regression testing",
            },
            {
              question: "What is the purpose of smoke testing?",
              options: ["Check basic build functionality", "Test only website colors", "Create user accounts", "Measure screen brightness"],
              answer: "Check basic build functionality",
            },
            {
              question: "Which testing checks browser compatibility?",
              options: ["Compatibility testing", "Unit testing only", "Database testing", "Code review"],
              answer: "Compatibility testing",
            },
            {
              question: "Performance testing is generally classified as which type?",
              options: ["Non-functional testing", "Functional testing only", "Unit testing", "Code formatting"],
              answer: "Non-functional testing",
            },
          ],
        },
        {
          title: "Test Planning and Test Scenarios",
          content: `Test planning defines what will be tested, how testing will be performed, and what resources are required.

A test plan commonly includes:
- Testing objectives.
- Application features to test.
- Testing scope.
- Test environment.
- Required resources.
- Schedule.
- Entry and exit criteria.
- Risks and responsibilities.

A test scenario describes a high-level situation that needs to be tested.

Example for an e-commerce website:
- Verify that users can register.
- Verify that users can search for products.
- Verify that products can be added to a cart.
- Verify that checkout works correctly.

Test scenarios are divided into detailed test cases.

A clear test plan helps developers and testers organize work, identify important areas, and avoid missing essential features.`,
          quiz: [
            {
              question: "What is the purpose of a test plan?",
              options: ["Organize testing activities", "Create website graphics", "Write database passwords", "Install browsers"],
              answer: "Organize testing activities",
            },
            {
              question: "What does a test scenario describe?",
              options: ["A high-level situation to test", "A CSS property", "A database connection", "A deployment password"],
              answer: "A high-level situation to test",
            },
            {
              question: "Which item is included in a test plan?",
              options: ["Testing scope", "Monitor wallpaper", "Keyboard layout only", "Personal browser history"],
              answer: "Testing scope",
            },
            {
              question: "What is derived from a test scenario?",
              options: ["Detailed test cases", "Image files", "Database indexes", "Operating systems"],
              answer: "Detailed test cases",
            },
            {
              question: "Why are entry and exit criteria defined?",
              options: ["To determine when testing can start and finish", "To change website colors", "To create user passwords", "To install frameworks"],
              answer: "To determine when testing can start and finish",
            },
          ],
        },
        {
          title: "Writing Effective Test Cases",
          content: `A test case provides detailed instructions for verifying a specific feature.

A typical test case contains:
- Test case ID.
- Test case title.
- Preconditions.
- Test steps.
- Test data.
- Expected result.
- Actual result.
- Status.

Example: Login with valid credentials.

Precondition: A registered user exists.

Steps:
1. Open the login page.
2. Enter a valid email address.
3. Enter the correct password.
4. Click the Login button.

Expected result: The user should be authenticated and redirected to the appropriate page.

Test cases should be clear, repeatable, and easy to understand.

Include positive test cases for valid inputs and negative test cases for invalid or unexpected inputs.`,
          quiz: [
            {
              question: "What does a test case contain?",
              options: ["Steps and expected results", "Only a website logo", "Only source code", "Only a database name"],
              answer: "Steps and expected results",
            },
            {
              question: "What is a precondition?",
              options: ["A condition required before testing", "The final test result", "A CSS class", "A browser extension"],
              answer: "A condition required before testing",
            },
            {
              question: "What is a positive test case?",
              options: ["Testing with valid input", "Testing only with invalid input", "Deleting test data", "Testing without requirements"],
              answer: "Testing with valid input",
            },
            {
              question: "What is a negative test case?",
              options: ["Testing invalid or unexpected input", "Testing only valid input", "Checking the website logo", "Installing an application"],
              answer: "Testing a negative input",
            },
            {
              question: "Why should test cases be repeatable?",
              options: ["To verify behavior consistently", "To change the programming language", "To remove application features", "To increase image size"],
              answer: "To verify behavior consistently",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Web Application and API Testing",
      description:
        "Learn how to test web pages, forms, browsers, user interactions, and backend APIs.",
      lessons: [
        {
          title: "Testing Web Application Interfaces",
          content: `Web application testing verifies that website pages and interface elements work correctly.

Important areas to test:
- Page loading.
- Navigation links.
- Buttons and menus.
- Forms and input fields.
- Images and other media.
- Responsive layouts.
- Error messages.
- User interactions.

Example:
On a registration page, verify that all required fields are visible, labels are understandable, and the submit button works.

Also check:
- Whether content is cut off.
- Whether buttons are accessible.
- Whether links lead to the correct pages.
- Whether error messages are useful.
- Whether the page works at different screen sizes.

Interface testing improves the reliability and usability of web applications.`,
          quiz: [
            {
              question: "What does interface testing verify?",
              options: ["UI elements and user interactions", "Only database storage", "Only server hardware", "Programming language installation"],
              answer: "UI elements and user interactions",
            },
            {
              question: "What should be checked on a registration page?",
              options: ["Form fields and submission", "Only background color", "Only server location", "Only image resolution"],
              answer: "Form fields and submission",
            },
            {
              question: "What is responsive testing?",
              options: ["Checking layouts at different screen sizes", "Checking only database queries", "Testing passwords only", "Measuring code length"],
              answer: "Checking layouts at different screen sizes",
            },
            {
              question: "Why test navigation links?",
              options: ["To verify correct page navigation", "To change font size", "To install packages", "To create database tables"],
              answer: "To verify correct page navigation",
            },
            {
              question: "What makes a useful error message?",
              options: ["It explains the problem clearly", "It contains random text", "It hides all information", "It displays only symbols"],
              answer: "It explains the problem clearly",
            },
          ],
        },
        {
          title: "Form Validation Testing",
          content: `Form validation testing checks whether an application accepts valid information and handles invalid information correctly.

Common fields include:
- Name.
- Email address.
- Phone number.
- Password.
- Date.
- Address.

Important test scenarios:
1. Submit all required fields with valid data.
2. Submit empty required fields.
3. Enter an invalid email address.
4. Enter values outside permitted limits.
5. Enter spaces or unexpected characters.
6. Check duplicate submissions.
7. Verify validation messages.

Validation can happen in the browser and on the server.

Client-side validation improves user experience, while server-side validation is essential for security and data integrity.

Never rely only on browser validation because users can bypass it.`,
          quiz: [
            {
              question: "What is the purpose of form validation?",
              options: ["Check whether input follows requirements", "Change website themes", "Create images", "Install browsers"],
              answer: "Check whether input follows requirements",
            },
            {
              question: "Where should important validation be performed?",
              options: ["On both client and server when appropriate", "Only in CSS", "Only in the browser", "Only in HTML comments"],
              answer: "On both client and server when appropriate",
            },
            {
              question: "What should happen when a required field is empty?",
              options: ["Show a suitable validation message", "Accept everything silently", "Delete the form", "Close the browser"],
              answer: "Show a suitable validation message",
            },
            {
              question: "What should be tested for an email field?",
              options: ["Valid and invalid email formats", "Only background color", "Only font size", "Only image dimensions"],
              answer: "Valid and invalid email formats",
            },
            {
              question: "Why is server-side validation important?",
              options: ["Client-side validation can be bypassed", "It changes CSS automatically", "It removes the need for testing", "It replaces the browser"],
              answer: "Client-side validation can be bypassed",
            },
          ],
        },
        {
          title: "Cross-Browser and Responsive Testing",
          content: `Web applications should work consistently across supported browsers and devices.

Cross-browser testing checks application behavior in browsers such as Chrome, Firefox, Safari, and Edge.

Responsive testing checks whether the interface adapts to different screen sizes.

Important checks:
- Navigation menu behavior.
- Text readability.
- Image scaling.
- Button visibility.
- Form layout.
- Scrolling behavior.
- Touch interactions.
- Page performance.

Use browser developer tools to inspect layouts at different viewport sizes.

Testing should cover the browsers and devices that the application officially supports.

Do not assume that a page working correctly in one browser guarantees that it works correctly everywhere.`,
          quiz: [
            {
              question: "What does cross-browser testing verify?",
              options: ["Behavior across different browsers", "Only database performance", "Only image editing", "Only server installation"],
              answer: "Behavior across different browsers",
            },
            {
              question: "What does responsive testing examine?",
              options: ["Layout across different screen sizes", "Database passwords", "Code formatting", "Server storage"],
              answer: "Layout across different screen sizes",
            },
            {
              question: "Which tool can help inspect viewport sizes?",
              options: ["Browser developer tools", "Spreadsheet software", "Audio player", "Calculator"],
              answer: "Browser developer tools",
            },
            {
              question: "Why test touch interactions?",
              options: ["To verify mobile usability", "To improve database indexing", "To install React", "To change server passwords"],
              answer: "To verify mobile usability",
            },
            {
              question: "Does a page working in one browser guarantee compatibility everywhere?",
              options: ["No", "Yes, always", "Only for images", "Only for CSS"],
              answer: "No",
            },
          ],
        },
        {
          title: "API Testing Fundamentals",
          content: `An API allows different software components to communicate. Web developers use APIs to exchange information between frontend and backend systems.

API testing verifies whether endpoints return the correct responses for different requests.

Important HTTP methods:
- GET: Retrieve information.
- POST: Create or submit information.
- PUT: Replace a resource.
- PATCH: Partially update a resource.
- DELETE: Remove a resource.

Important response status codes:
- 200: OK.
- 201: Created.
- 400: Bad Request.
- 401: Unauthorized.
- 403: Forbidden.
- 404: Not Found.
- 500: Internal Server Error.

Tools such as Postman can help send requests and inspect responses.

Check response status, headers, response body, validation, and error handling.`,
          quiz: [
            {
              question: "What is API testing?",
              options: ["Testing communication through API endpoints", "Testing monitor brightness", "Designing logos", "Creating CSS animations"],
              answer: "Testing communication through API endpoints",
            },
            {
              question: "Which HTTP method retrieves data?",
              options: ["GET", "POST", "DELETE", "PATCH"],
              answer: "GET",
            },
            {
              question: "Which status code represents a successful resource creation?",
              options: ["201", "404", "500", "403"],
              answer: "201",
            },
            {
              question: "Which status code means Not Found?",
              options: ["404", "200", "201", "301"],
              answer: "404",
            },
            {
              question: "Which tool can be used for API testing?",
              options: ["Postman", "Photoshop", "Paint", "Calculator"],
              answer: "Postman",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: Automation Testing",
      description:
        "Understand automation testing, JavaScript testing tools, Playwright, test scripts, and debugging.",
      lessons: [
        {
          title: "Introduction to Automation Testing",
          content: `Automation testing uses tools and scripts to execute test cases and compare actual results with expected results.

It is useful for repetitive tests and regression testing.

Benefits:
- Faster execution of repeated tests.
- Consistent test execution.
- Better coverage of important workflows.
- Easier integration into development pipelines.

Limitations:
- Initial setup takes time.
- Tests require maintenance.
- Poorly designed tests can become unreliable.
- Some usability checks still need human judgment.

Automation is especially useful for workflows such as login, registration, navigation, and checkout.

Not every manual test needs to be automated. Choose test cases that provide long-term value.`,
          quiz: [
            {
              question: "What is automation testing?",
              options: ["Using scripts and tools to execute tests", "Testing only by reading documents", "Designing website logos", "Creating databases manually"],
              answer: "Using scripts and tools to execute tests",
            },
            {
              question: "Which testing activity commonly benefits from automation?",
              options: ["Repeated regression tests", "One-time design discussions", "Choosing a company name", "Writing user stories only"],
              answer: "Repeated regression tests",
            },
            {
              question: "What is one limitation of automation testing?",
              options: ["Tests need maintenance", "It never requires setup", "It replaces all human judgment", "It cannot run scripts"],
              answer: "Tests need maintenance",
            },
            {
              question: "What should be automated first?",
              options: ["Stable and valuable repetitive workflows", "Every feature without planning", "Only decorative images", "Unclear requirements"],
              answer: "Stable and valuable repetitive workflows",
            },
            {
              question: "Does automation completely replace manual testing?",
              options: ["No", "Yes, always", "Only in small projects", "Only for forms"],
              answer: "No",
            },
          ],
        },
        {
          title: "JavaScript Testing and Unit Tests",
          content: `JavaScript testing tools help developers verify application logic and component behavior.

Unit testing checks a small, isolated part of the application.

Examples:
- Testing a function that calculates totals.
- Testing a form validation function.
- Testing a utility that formats dates.

Popular JavaScript testing tools include:
- Vitest.
- Jest.
- React Testing Library.

Example using Vitest:

import { describe, it, expect } from "vitest";

function add(a, b) {
  return a + b;
}

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

Important concepts:
- Test suite: A group of related tests.
- Test case: One individual test.
- Assertion: A check that compares actual and expected results.
- Mock: A controlled substitute for a dependency.

Good unit tests should be focused and easy to maintain.`,
          quiz: [
            {
              question: "What does unit testing verify?",
              options: ["Small isolated parts of an application", "Only the complete deployment", "Only browser compatibility", "Only database hosting"],
              answer: "Small isolated parts of an application",
            },
            {
              question: "Which is a JavaScript testing tool?",
              options: ["Vitest", "Photoshop", "Excel", "PowerPoint"],
              answer: "Vitest",
            },
            {
              question: "What is an assertion?",
              options: ["A check of an expected result", "A CSS animation", "A database connection", "A page layout"],
              answer: "A check of an expected result",
            },
            {
              question: "What is a test suite?",
              options: ["A group of related tests", "A browser theme", "A server password", "A collection of images"],
              answer: "A group of related tests",
            },
            {
              question: "What is a mock?",
              options: ["A controlled substitute for a dependency", "A real production database only", "A CSS selector", "A route folder"],
              answer: "A controlled substitute for a dependency",
            },
          ],
        },
        {
          title: "End-to-End Testing with Playwright",
          content: `End-to-end testing verifies complete user workflows through the application interface.

Playwright is an automation framework that supports browser testing.

It can test applications in Chromium, Firefox, and WebKit.

Install Playwright in a suitable JavaScript project using:

npm init playwright@latest

Example test:

import { test, expect } from "@playwright/test";

test("home page displays title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle(/Home/);
});

Common Playwright operations:
- page.goto(): Opens a URL.
- page.getByRole(): Finds elements using accessible roles.
- locator.click(): Clicks an element.
- locator.fill(): Enters text.
- expect(): Checks expected behavior.

Playwright can test login workflows, navigation, forms, and important user journeys.`,
          quiz: [
            {
              question: "What is end-to-end testing?",
              options: ["Testing complete user workflows", "Testing only one calculation", "Testing CSS variables only", "Testing database names"],
              answer: "Testing complete user workflows",
            },
            {
              question: "Which framework supports browser automation?",
              options: ["Playwright", "Photoshop", "Excel", "MySQL"],
              answer: "Playwright",
            },
            {
              question: "Which method navigates to a URL in Playwright?",
              options: ["page.goto()", "page.install()", "page.database()", "page.style()"],
              answer: "page.goto()",
            },
            {
              question: "Which method enters text into an input?",
              options: ["fill()", "delete()", "compile()", "route()"],
              answer: "fill()",
            },
            {
              question: "Which browser engine is supported by Playwright?",
              options: ["WebKit", "Only Internet Explorer", "Only Opera Mini", "None"],
              answer: "WebKit",
            },
          ],
        },
        {
          title: "Debugging and Test Reporting",
          content: `Debugging is the process of identifying and fixing problems in an application or test.

Useful debugging tools:
- Browser developer tools.
- Console logs.
- Network tab.
- Breakpoints.
- Playwright Inspector.
- Test reports.

When a test fails:
1. Read the error message.
2. Identify the failed test step.
3. Reproduce the problem.
4. Inspect browser and network behavior.
5. Find the cause.
6. Fix the issue.
7. Run the test again.

A test report summarizes testing activities and results.

It commonly includes:
- Total tests.
- Passed tests.
- Failed tests.
- Skipped tests.
- Defects found.
- Test environment.
- Recommendations.

Clear reporting helps developers understand problems and decide what needs attention.`,
          quiz: [
            {
              question: "What is debugging?",
              options: ["Finding and fixing problems", "Creating new browser tabs", "Changing only fonts", "Installing operating systems"],
              answer: "Finding and fixing problems",
            },
            {
              question: "Which browser tool helps inspect network requests?",
              options: ["Network tab", "Bookmarks tab", "History only", "Wallpaper settings"],
              answer: "Network tab",
            },
            {
              question: "What should you do when a test fails?",
              options: ["Investigate the error and reproduce it", "Ignore the failure", "Delete all test cases", "Stop all development permanently"],
              answer: "Investigate the error and reproduce it",
            },
            {
              question: "What does a test report summarize?",
              options: ["Testing results and defects", "Only website colors", "Only developer names", "Only browser history"],
              answer: "Testing results and defects",
            },
            {
              question: "Which item is useful in a test report?",
              options: ["Passed and failed test counts", "Desktop wallpaper", "Personal browsing history", "Keyboard brand"],
              answer: "Passed and failed test counts",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: Advanced Testing and Final Project",
      description:
        "Learn performance, security, accessibility, CI testing, and apply your skills to a complete web testing project.",
      lessons: [
        {
          title: "Performance Testing for Web Applications",
          content: `Performance testing checks how an application behaves under different workloads and conditions.

Important performance measurements:
- Response time.
- Page loading time.
- Throughput.
- Resource usage.
- Error rate.
- Core Web Vitals.

Common performance testing types:
- Load testing: Checks behavior under expected workloads.
- Stress testing: Examines behavior beyond normal capacity.
- Spike testing: Checks sudden changes in traffic.
- Endurance testing: Checks performance over an extended period.

Tools such as Lighthouse can help inspect web performance and provide improvement suggestions.

Performance problems may be caused by large images, unnecessary JavaScript, slow database queries, or inefficient API calls.

Use realistic test conditions and interpret results carefully.`,
          quiz: [
            {
              question: "What does performance testing evaluate?",
              options: ["Application speed and behavior under load", "Only website colors", "Only database names", "Only source code formatting"],
              answer: "Application speed and behavior under load",
            },
            {
              question: "What is load testing?",
              options: ["Testing under expected workloads", "Testing only invalid passwords", "Testing image colors", "Testing browser themes"],
              answer: "Testing under expected workloads",
            },
            {
              question: "What does stress testing examine?",
              options: ["Behavior beyond normal capacity", "Only normal page navigation", "Only CSS formatting", "Only user registration"],
              answer: "Behavior beyond normal capacity",
            },
            {
              question: "Which tool can inspect web performance?",
              options: ["Lighthouse", "Paint", "Notepad", "Calculator"],
              answer: "Lighthouse",
            },
            {
              question: "Which factor can slow down a web application?",
              options: ["Large unoptimized images", "Clear navigation labels", "Small optimized assets", "Efficient code"],
              answer: "Large unoptimized images",
            },
          ],
        },
        {
          title: "Security Testing Fundamentals",
          content: `Security testing checks whether a web application protects its users, information, and services.

Important areas:
- Authentication.
- Authorization.
- Input validation.
- Session management.
- Access control.
- Secure communication.
- Sensitive information handling.

Common web security risks include:
- Cross-Site Scripting (XSS).
- SQL Injection.
- Cross-Site Request Forgery (CSRF).
- Broken access control.
- Insecure configuration.

Testing should verify that users cannot access information or actions without proper permission.

Developers should use parameterized database queries, validate inputs, encode output appropriately, and protect sensitive credentials.

Security testing should be performed responsibly on systems where testing is authorized.`,
          quiz: [
            {
              question: "What is the purpose of security testing?",
              options: ["Identify security weaknesses", "Improve only page colors", "Create logos", "Install browsers"],
              answer: "Identify security weaknesses",
            },
            {
              question: "What does XSS stand for?",
              options: ["Cross-Site Scripting", "Extra Server Storage", "External Style System", "Cross Server Software"],
              answer: "Cross-Site Scripting",
            },
            {
              question: "What does authorization control?",
              options: ["Access permissions", "Font size", "Image resolution", "Page spacing"],
              answer: "Access permissions",
            },
            {
              question: "Which approach helps reduce SQL injection risk?",
              options: ["Parameterized queries", "Building SQL from untrusted text", "Removing validation", "Sharing database passwords"],
              answer: "Parameterized queries",
            },
            {
              question: "Where should security testing be performed?",
              options: ["Systems where testing is authorized", "Any system without permission", "Only public websites", "Only personal devices"],
              answer: "Systems where testing is authorized",
            },
          ],
        },
        {
          title: "Accessibility Testing",
          content: `Accessibility testing checks whether people with different abilities can use a web application.

Important accessibility areas:
- Keyboard navigation.
- Screen reader support.
- Color contrast.
- Text alternatives for images.
- Form labels.
- Clear headings.
- Visible focus indicators.
- Meaningful error messages.

Common standards and guidelines include the Web Content Accessibility Guidelines (WCAG).

Useful checks:
1. Navigate the page using only a keyboard.
2. Verify that images have suitable alternative text.
3. Check text and background contrast.
4. Confirm that form controls have labels.
5. Use semantic HTML elements.
6. Check that focus order is logical.

Tools such as Lighthouse and accessibility inspection tools can identify some issues.

Automated tools are helpful, but manual testing is also necessary because not every accessibility problem can be detected automatically.`,
          quiz: [
            {
              question: "What is accessibility testing?",
              options: ["Checking whether people with different abilities can use an application", "Checking only database speed", "Testing only server hardware", "Changing website themes"],
              answer: "Checking whether people with different abilities can use an application",
            },
            {
              question: "Which standard provides web accessibility guidelines?",
              options: ["WCAG", "HTTP", "SQL", "JSON"],
              answer: "WCAG",
            },
            {
              question: "Why is alternative text used for images?",
              options: ["To provide a text alternative", "To increase image size", "To change page colors", "To create database records"],
              answer: "To provide a text alternative",
            },
            {
              question: "Which input method should be tested for accessibility?",
              options: ["Keyboard navigation", "Mouse only", "Touch only", "Voice only"],
              answer: "Keyboard navigation",
            },
            {
              question: "Can automated tools detect every accessibility issue?",
              options: ["No", "Yes, always", "Only on mobile", "Only for images"],
              answer: "No",
            },
          ],
        },
        {
          title: "CI Testing and Final Web Application Testing Project",
          content: `Continuous Integration (CI) is a development practice where code changes are regularly integrated and checked through automated workflows.

Testing can be included in CI to detect problems early.

A typical workflow:
1. Developer pushes code to a repository.
2. CI starts an automated workflow.
3. Dependencies are installed.
4. Code checks and tests are executed.
5. Build is verified.
6. Results are reported.

GitHub Actions is one tool used to automate these workflows.

Final project: Test a Web Application.

Choose a sample web application such as a task manager, career portal, or e-commerce demo.

Project tasks:
- Create a test plan.
- Identify test scenarios.
- Write manual test cases.
- Test registration and login forms.
- Test navigation and responsive layouts.
- Test API endpoints.
- Write unit tests for important functions.
- Automate important user workflows using Playwright.
- Report defects and retest fixes.
- Document final test results.

Expected project deliverables:
- Test plan.
- Test case document.
- Bug report.
- Automation test scripts.
- Final test summary.

The project demonstrates practical web application testing skills.`,
          quiz: [
            {
              question: "What does CI stand for?",
              options: ["Continuous Integration", "Computer Installation", "Code Illustration", "Central Interface"],
              answer: "Continuous Integration",
            },
            {
              question: "Which tool can automate workflows in a GitHub repository?",
              options: ["GitHub Actions", "Photoshop", "Excel", "Paint"],
              answer: "GitHub Actions",
            },
            {
              question: "What can happen after code is pushed to a repository?",
              options: ["Automated tests can run", "The computer must shut down", "All files are deleted", "The database is always removed"],
              answer: "Automated tests can run",
            },
            {
              question: "Which tool can automate browser workflows in the project?",
              options: ["Playwright", "Notepad", "Calculator", "Paint"],
              answer: "Playwright",
            },
            {
              question: "Which document summarizes final testing results?",
              options: ["Test summary report", "Website logo", "CSS stylesheet", "Database password file"],
              answer: "Test summary report",
            },
          ],
        },
      ],
    },
  ],
};

export default testingCourse;

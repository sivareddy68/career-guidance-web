
const webSecurityCourse = {
  title: "Web Security for Web Developer",
  description:
    "Learn web security fundamentals, common vulnerabilities, secure authentication, authorization, data protection, security testing, and deployment practices.",
  weeks: [
    {
      title: "Week 1: Web Security Fundamentals",
      description:
        "Understand web security principles, HTTP security, common vulnerabilities, and secure development practices.",
      lessons: [
        {
          title: "Introduction to Web Security",
          content: `Web security protects websites, web applications, users, and their information from unauthorized access and misuse.

The CIA triad represents three important security goals:
- Confidentiality: Information is accessible only to authorized people.
- Integrity: Information remains accurate and is not changed without permission.
- Availability: Services remain accessible when needed.

Authentication identifies a user. Authorization determines what that user is allowed to do.

Developers should consider security throughout the development lifecycle instead of adding it only at the end.

Important practices include using HTTPS, validating inputs, protecting user sessions, keeping dependencies updated, and avoiding the exposure of sensitive information.`,
          quiz: [
            {
              question: "What does confidentiality protect?",
              options: [
                "Unauthorized information access",
                "Website loading speed",
                "Page design",
                "Database size",
              ],
              answer: "Unauthorized information access",
            },
            {
              question: "What does authentication verify?",
              options: [
                "User identity",
                "Page layout",
                "Network speed",
                "File size",
              ],
              answer: "User identity",
            },
            {
              question: "What does authorization determine?",
              options: [
                "User permissions",
                "User screen size",
                "Website theme",
                "Browser version",
              ],
              answer: "User permissions",
            },
            {
              question: "Which protocol protects data in transit?",
              options: ["HTTPS", "FTP", "HTTP", "Telnet"],
              answer: "HTTPS",
            },
            {
              question: "When should developers consider security?",
              options: [
                "Throughout development",
                "Only after deployment",
                "Only during design",
                "Only after an incident",
              ],
              answer: "Throughout development",
            },
          ],
        },
        {
          title: "HTTP, HTTPS and TLS",
          content: `HTTP is the protocol used to transfer information between browsers and web servers. Standard HTTP does not encrypt the communication.

HTTPS uses HTTP over TLS to protect communication between a browser and a server.

TLS provides encryption, integrity protection, and server authentication through digital certificates.

A valid HTTPS certificate helps a browser verify that it is communicating with the intended website.

Developers should use HTTPS across the entire application, redirect HTTP traffic to HTTPS, and avoid loading insecure resources on secure pages.`,
          quiz: [
            {
              question: "What does HTTPS use to protect communication?",
              options: ["TLS", "CSS", "HTML", "DNS"],
              answer: "TLS",
            },
            {
              question: "What is the main purpose of encryption?",
              options: [
                "Protect information from being read by unauthorized parties",
                "Increase image resolution",
                "Improve page styling",
                "Reduce HTML elements",
              ],
              answer:
                "Protect information from being read by unauthorized parties",
            },
            {
              question: "What helps a browser verify a website's identity?",
              options: [
                "Digital certificate",
                "CSS stylesheet",
                "Image file",
                "HTML comment",
              ],
              answer: "Digital certificate",
            },
            {
              question: "Which connection is encrypted?",
              options: [
                "HTTPS connection using TLS",
                "Plain HTTP connection",
                "Unencrypted FTP connection",
                "Local HTML file",
              ],
              answer: "HTTPS connection using TLS",
            },
            {
              question: "What should a secure website do with HTTP traffic?",
              options: [
                "Redirect it to HTTPS",
                "Disable all browser styles",
                "Expose its credentials",
                "Remove its certificates",
              ],
              answer: "Redirect it to HTTPS",
            },
          ],
        },
        {
          title: "Common Web Vulnerabilities",
          content: `A web vulnerability is a weakness that can affect the confidentiality, integrity, or availability of an application.

Common security risks include:
- Cross-Site Scripting (XSS): Untrusted content is executed as script in a user's browser.
- SQL Injection: Untrusted input changes the meaning of a database query.
- Cross-Site Request Forgery (CSRF): A user's browser is tricked into making an unwanted authenticated request.
- Broken Access Control: Users can access resources or actions they are not permitted to use.
- Security Misconfiguration: Incorrect settings expose application resources.

Developers should understand how these vulnerabilities occur and apply appropriate defensive controls.`,
          quiz: [
            {
              question: "What does XSS involve?",
              options: [
                "Untrusted script execution in a browser",
                "Slow database indexing",
                "Broken image compression",
                "Incorrect CSS alignment",
              ],
              answer: "Untrusted script execution in a browser",
            },
            {
              question: "What can SQL injection affect?",
              options: [
                "Database queries",
                "CSS animations",
                "Image dimensions",
                "Browser bookmarks",
              ],
              answer: "Database queries",
            },
            {
              question: "What does CSRF target?",
              options: [
                "Authenticated browser requests",
                "Image file formats",
                "CSS selectors",
                "JavaScript formatting",
              ],
              answer: "Authenticated browser requests",
            },
            {
              question: "What is broken access control?",
              options: [
                "Unauthorized access to resources or actions",
                "A missing website logo",
                "A slow page transition",
                "An incorrect font size",
              ],
              answer: "Unauthorized access to resources or actions",
            },
            {
              question: "What is security misconfiguration?",
              options: [
                "Incorrect or unsafe security settings",
                "A missing CSS class",
                "A large image file",
                "An outdated page title",
              ],
              answer: "Incorrect or unsafe security settings",
            },
          ],
        },
        {
          title: "Secure Development Lifecycle",
          content: `A Secure Software Development Lifecycle (SSDLC) integrates security into every stage of software development.

Important stages include:
1. Requirements: Identify security and privacy needs.
2. Design: Plan authentication, authorization, and data protection.
3. Development: Follow secure coding practices.
4. Testing: Perform security reviews and automated checks.
5. Deployment: Configure production systems securely.
6. Maintenance: Monitor issues and apply updates.

Threat modeling helps developers identify possible threats before implementation.

Security reviews, dependency checks, code reviews, and testing help reduce risks before a product is released.`,
          quiz: [
            {
              question: "What does SSDLC integrate into development?",
              options: [
                "Security practices",
                "Only visual design",
                "Only marketing",
                "Only advertisements",
              ],
              answer: "Security practices",
            },
            {
              question: "When should threat modeling be performed?",
              options: [
                "During design and planning",
                "Only after a security incident",
                "Only after deleting the application",
                "Only during marketing",
              ],
              answer: "During design and planning",
            },
            {
              question: "What is a code review useful for?",
              options: [
                "Finding code quality and security issues",
                "Increasing monitor brightness",
                "Changing network hardware",
                "Creating user passwords automatically",
              ],
              answer: "Finding code quality and security issues",
            },
            {
              question: "What should happen during maintenance?",
              options: [
                "Monitor issues and apply updates",
                "Ignore reported vulnerabilities",
                "Disable all security checks",
                "Publish secret credentials",
              ],
              answer: "Monitor issues and apply updates",
            },
            {
              question: "Why perform security testing before release?",
              options: [
                "To identify weaknesses before deployment",
                "To remove all application features",
                "To avoid writing documentation",
                "To replace user authentication",
              ],
              answer: "To identify weaknesses before deployment",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Secure Coding and Input Protection",
      description:
        "Learn safe input handling, SQL injection prevention, XSS protection, and browser security controls.",
      lessons: [
        {
          title: "Input Validation and Output Encoding",
          content: `Input validation checks whether user-provided data follows the expected format and rules.

For example, an email field should contain a valid email address, while an age field should contain an acceptable numeric value.

Use allowlists when possible. An allowlist defines the permitted values or formats.

Output encoding converts special characters into safe representations for the context where data is displayed.

Validation and encoding solve different problems. Validation checks data; encoding helps prevent data from being interpreted as executable content.

Never assume that frontend validation is sufficient. Always validate important data on the server as well.`,
          quiz: [
            {
              question: "What is input validation?",
              options: [
                "Checking whether input follows expected rules",
                "Encrypting every image",
                "Changing page colors",
                "Compressing database files",
              ],
              answer: "Checking whether input follows expected rules",
            },
            {
              question: "Where should important validation happen?",
              options: [
                "On the server",
                "Only in CSS",
                "Only in the browser",
                "Only in image files",
              ],
              answer: "On the server",
            },
            {
              question: "What does output encoding help prevent?",
              options: [
                "Untrusted data being interpreted as executable content",
                "Slow internet connections",
                "Large screen sizes",
                "Missing website images",
              ],
              answer:
                "Untrusted data being interpreted as executable content",
            },
            {
              question: "What is an allowlist?",
              options: [
                "A defined set of permitted inputs",
                "A list of blocked images only",
                "A database backup",
                "A browser history file",
              ],
              answer: "A defined set of permitted inputs",
            },
            {
              question: "Are validation and output encoding identical?",
              options: [
                "No, they address different security concerns",
                "Yes, they always perform the same task",
                "Yes, both only change CSS",
                "No, neither is useful",
              ],
              answer: "No, they address different security concerns",
            },
          ],
        },
        {
          title: "SQL Injection Prevention",
          content: `SQL injection happens when untrusted input is included in a database query in an unsafe way.

An attacker may attempt to change the intended meaning of a query by supplying specially crafted input.

Use parameterized queries or prepared statements so that data is treated as data rather than executable SQL.

Object-relational mapping tools can also help when used correctly.

Avoid building SQL statements by joining raw user input into query strings.

Database accounts should follow the principle of least privilege. An application should receive only the database permissions it actually needs.

Do not expose detailed database error messages to ordinary users.`,
          quiz: [
            {
              question: "What causes SQL injection?",
              options: [
                "Unsafe handling of input in database queries",
                "Using responsive CSS",
                "Compressing JavaScript files",
                "Using HTML headings",
              ],
              answer: "Unsafe handling of input in database queries",
            },
            {
              question: "Which technique helps prevent SQL injection?",
              options: [
                "Parameterized queries",
                "String concatenation with raw input",
                "Disabling page styles",
                "Removing database indexes",
              ],
              answer: "Parameterized queries",
            },
            {
              question: "How should user input be treated in a parameterized query?",
              options: [
                "As data rather than executable SQL",
                "As a database administrator",
                "As a CSS property",
                "As a server command",
              ],
              answer: "As data rather than executable SQL",
            },
            {
              question: "What does least privilege mean?",
              options: [
                "Grant only the permissions required",
                "Give every user administrator access",
                "Disable all database permissions",
                "Share one password publicly",
              ],
              answer: "Grant only the permissions required",
            },
            {
              question: "Why avoid exposing detailed database errors?",
              options: [
                "They may reveal sensitive implementation information",
                "They improve website colors",
                "They reduce image quality",
                "They automatically encrypt passwords",
              ],
              answer:
                "They may reveal sensitive implementation information",
            },
          ],
        },
        {
          title: "Cross-Site Scripting Protection",
          content: `Cross-Site Scripting (XSS) occurs when untrusted content is handled in a way that allows scripts to execute in another user's browser.

Common categories include:
- Stored XSS: Malicious content is saved and later displayed to users.
- Reflected XSS: Untrusted input is immediately included in a response.
- DOM-based XSS: Unsafe client-side code uses untrusted data to modify the page.

Defensive techniques include context-aware output encoding, safe DOM APIs, sanitizing permitted HTML, and using Content Security Policy.

Avoid inserting untrusted values through unsafe HTML rendering features.

Security should be applied wherever user-generated content enters or appears in the application.`,
          quiz: [
            {
              question: "Where does XSS execute?",
              options: [
                "In a user's browser",
                "Inside a CSS compiler",
                "Only inside a database index",
                "Inside a monitor",
              ],
              answer: "In a user's browser",
            },
            {
              question: "What is stored XSS?",
              options: [
                "Untrusted content is saved and later displayed",
                "A browser stores its screen resolution",
                "A database stores CSS colors",
                "A server stores compressed images",
              ],
              answer: "Untrusted content is saved and later displayed",
            },
            {
              question: "Which practice helps prevent XSS?",
              options: [
                "Context-aware output encoding",
                "Rendering every input as raw HTML",
                "Disabling server validation",
                "Sharing administrator credentials",
              ],
              answer: "Context-aware output encoding",
            },
            {
              question: "What does Content Security Policy help control?",
              options: [
                "Which content sources the browser may load or execute",
                "How users resize their monitors",
                "How databases store table names",
                "How CSS files are compressed",
              ],
              answer:
                "Which content sources the browser may load or execute",
            },
            {
              question: "Which approach is safer for displaying plain text?",
              options: [
                "Use text-safe DOM APIs",
                "Insert raw untrusted HTML",
                "Disable browser security",
                "Place input inside a script",
              ],
              answer: "Use text-safe DOM APIs",
            },
          ],
        },
        {
          title: "CSRF and Browser Security",
          content: `Cross-Site Request Forgery (CSRF) tricks a user's browser into sending an unwanted request to a website where the user is authenticated.

CSRF defenses include unpredictable anti-CSRF tokens, appropriate cookie settings, and checking request origins where suitable.

The SameSite cookie attribute can limit when browsers send cookies with cross-site requests.

Other useful browser security controls include:
- Content Security Policy (CSP)
- X-Content-Type-Options
- Strict-Transport-Security
- Referrer-Policy

These headers help browsers apply additional security restrictions.

Security headers should be configured according to the needs of the application and tested to avoid breaking legitimate functionality.`,
          quiz: [
            {
              question: "What does CSRF attempt to cause?",
              options: [
                "An unwanted authenticated request",
                "A faster database query",
                "A new CSS theme",
                "A larger image",
              ],
              answer: "An unwanted authenticated request",
            },
            {
              question: "Which mechanism can help defend against CSRF?",
              options: [
                "Anti-CSRF tokens",
                "HTML comments",
                "Image compression",
                "CSS variables",
              ],
              answer: "Anti-CSRF tokens",
            },
            {
              question: "What does SameSite control?",
              options: [
                "When cookies are sent in cross-site contexts",
                "How images are resized",
                "How passwords are displayed",
                "How CSS is compiled",
              ],
              answer: "When cookies are sent in cross-site contexts",
            },
            {
              question: "What does HSTS encourage browsers to use?",
              options: [
                "HTTPS connections",
                "Plain FTP connections",
                "Unencrypted HTTP connections",
                "Local file connections",
              ],
              answer: "HTTPS connections",
            },
            {
              question: "What does CSP help restrict?",
              options: [
                "Permitted content sources",
                "Database table sizes",
                "Monitor resolution",
                "Keyboard layouts",
              ],
              answer: "Permitted content sources",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: Authentication and Data Security",
      description:
        "Understand secure login systems, password storage, session management, access control, and sensitive data protection.",
      lessons: [
        {
          title: "Secure Authentication",
          content: `Authentication confirms the identity of a user before granting access to an account.

A secure login system should:
- Use established authentication libraries or trusted identity providers.
- Validate credentials on the server.
- Apply rate limits to login attempts.
- Provide safe account recovery.
- Use multi-factor authentication when appropriate.
- Avoid revealing whether a particular email address or username exists.

Multi-factor authentication uses more than one category of evidence, such as something the user knows and something the user possesses.

Authentication tokens and credentials must be handled securely and must not be exposed in logs or frontend code.`,
          quiz: [
            {
              question: "What is the purpose of authentication?",
              options: [
                "Verify a user's identity",
                "Change website colors",
                "Compress database tables",
                "Improve screen resolution",
              ],
              answer: "Verify a user's identity",
            },
            {
              question: "What does MFA stand for?",
              options: [
                "Multi-Factor Authentication",
                "Multiple File Access",
                "Managed Frontend Application",
                "Main Function API",
              ],
              answer: "Multi-Factor Authentication",
            },
            {
              question: "Why use login rate limiting?",
              options: [
                "Reduce automated repeated login attempts",
                "Increase image file sizes",
                "Disable password validation",
                "Remove user accounts",
              ],
              answer: "Reduce automated repeated login attempts",
            },
            {
              question: "Where should credential validation happen?",
              options: [
                "On the server",
                "Only in CSS",
                "Only in an HTML comment",
                "Only in an image",
              ],
              answer: "On the server",
            },
            {
              question: "What should a login system avoid revealing?",
              options: [
                "Whether a specific account exists",
                "The website's public title",
                "The current page URL",
                "The application's logo",
              ],
              answer: "Whether a specific account exists",
            },
          ],
        },
        {
          title: "Password Storage and Management",
          content: `Applications should never store user passwords as plain text.

Passwords should be stored using a password-hashing algorithm designed for this purpose, such as Argon2id, bcrypt, or scrypt.

Password hashing is intentionally expensive to make large-scale guessing more difficult.

A unique salt should be used for each password. Modern password-hashing libraries normally manage salts as part of their process.

Do not use ordinary fast hashes such as plain SHA-256 as a replacement for password hashing.

Use secure password reset procedures, short-lived reset tokens, and safe credential handling. Never write passwords or reset tokens into application logs.`,
          quiz: [
            {
              question: "How should passwords be stored?",
              options: [
                "Using a dedicated password-hashing algorithm",
                "As plain text",
                "Inside CSS files",
                "In public source code",
              ],
              answer: "Using a dedicated password-hashing algorithm",
            },
            {
              question: "Which is a password-hashing algorithm?",
              options: ["Argon2id", "Base64", "HTML5", "JPEG"],
              answer: "Argon2id",
            },
            {
              question: "What is the purpose of a password salt?",
              options: [
                "Make identical passwords produce different stored hashes",
                "Display passwords in the browser",
                "Replace user authentication",
                "Compress password data",
              ],
              answer:
                "Make identical passwords produce different stored hashes",
            },
            {
              question: "Why is a fast general-purpose hash unsuitable by itself for password storage?",
              options: [
                "It allows password guesses to be tested very quickly",
                "It changes the website layout",
                "It prevents HTTPS",
                "It removes database records",
              ],
              answer:
                "It allows password guesses to be tested very quickly",
            },
            {
              question: "What is a good password reset token property?",
              options: [
                "Short-lived and securely generated",
                "Public and permanent",
                "Shared by every account",
                "Stored in a public page",
              ],
              answer: "Short-lived and securely generated",
            },
          ],
        },
        {
          title: "Session and Token Security",
          content: `A session helps a web application recognize an authenticated user across multiple requests.

Session identifiers should be unpredictable and protected from exposure.

Secure session practices include:
- Use HTTPS.
- Set Secure and HttpOnly cookie attributes.
- Configure an appropriate SameSite value.
- Regenerate session identifiers after login or privilege changes.
- Expire sessions after an appropriate period.
- Invalidate sessions when users log out.

Access tokens should have limited permissions and appropriate lifetimes.

Never store sensitive authentication tokens in locations where untrusted scripts can easily access them. Choose token storage and session architecture based on the application's threat model.`,
          quiz: [
            {
              question: "What is a session used for?",
              options: [
                "Maintain user state across requests",
                "Style website buttons",
                "Compress images",
                "Create database tables",
              ],
              answer: "Maintain user state across requests",
            },
            {
              question: "What does the HttpOnly cookie attribute do?",
              options: [
                "Prevents JavaScript from directly reading the cookie",
                "Encrypts every database record",
                "Blocks all HTTPS requests",
                "Deletes the user account",
              ],
              answer:
                "Prevents JavaScript from directly reading the cookie",
            },
            {
              question: "What does the Secure cookie attribute require?",
              options: [
                "Send the cookie over secure connections",
                "Display the cookie publicly",
                "Store the cookie in CSS",
                "Send the cookie through plain HTTP",
              ],
              answer: "Send the cookie over secure connections",
            },
            {
              question: "When should a session identifier be regenerated?",
              options: [
                "After login or privilege changes",
                "Only when changing the website logo",
                "Every time CSS loads",
                "Never",
              ],
              answer: "After login or privilege changes",
            },
            {
              question: "What should logout do?",
              options: [
                "Invalidate the active session",
                "Publish the access token",
                "Keep every session active forever",
                "Disable server validation",
              ],
              answer: "Invalidate the active session",
            },
          ],
        },
        {
          title: "Authorization and Access Control",
          content: `Authorization determines which resources and operations an authenticated user may access.

Role-Based Access Control (RBAC) assigns permissions through roles such as administrator, editor, and viewer.

Attribute-Based Access Control (ABAC) considers attributes such as user identity, resource ownership, and environment.

Every sensitive server operation must verify permissions. Hiding a button in the frontend is not sufficient security.

Developers should check resource ownership and prevent users from changing identifiers to access other users' information.

Use the principle of least privilege and test both allowed and denied access paths.`,
          quiz: [
            {
              question: "What does authorization control?",
              options: [
                "Access to resources and operations",
                "The user's screen brightness",
                "Website font selection",
                "Image resolution",
              ],
              answer: "Access to resources and operations",
            },
            {
              question: "What does RBAC stand for?",
              options: [
                "Role-Based Access Control",
                "Remote Browser Application Code",
                "Runtime Backup Access Configuration",
                "Responsive Backend Application Control",
              ],
              answer: "Role-Based Access Control",
            },
            {
              question: "What does ABAC consider?",
              options: [
                "User, resource, and environment attributes",
                "Only website colors",
                "Only file extensions",
                "Only browser dimensions",
              ],
              answer: "User, resource, and environment attributes",
            },
            {
              question: "Is hiding a frontend button enough to protect an operation?",
              options: [
                "No, the server must verify permissions",
                "Yes, always",
                "Yes, if CSS is enabled",
                "No, but HTML comments are enough",
              ],
              answer: "No, the server must verify permissions",
            },
            {
              question: "What should a user accessing a private record be checked against?",
              options: [
                "Their permission and resource ownership",
                "Their browser theme",
                "Their screen size",
                "Their preferred font",
              ],
              answer: "Their permission and resource ownership",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: Security Testing and Deployment",
      description:
        "Learn security testing, dependency protection, safe configuration, monitoring, and a final secure web application project.",
      lessons: [
        {
          title: "Security Testing Fundamentals",
          content: `Security testing evaluates whether an application protects its data and functionality against common threats.

Important testing approaches include:
- Static Application Security Testing (SAST): Examines source code without running the application.
- Dynamic Application Security Testing (DAST): Tests a running application.
- Software Composition Analysis (SCA): Checks third-party dependencies for known vulnerabilities.
- Manual security review: Evaluates application behavior and security design.

Testing should be performed only on systems you own or have explicit permission to assess.

Developers should document findings, prioritize risks, fix issues, and retest the affected features.`,
          quiz: [
            {
              question: "What does SAST examine?",
              options: [
                "Source code without running the application",
                "Only live network traffic",
                "Only website images",
                "Only database backups",
              ],
              answer: "Source code without running the application",
            },
            {
              question: "What does DAST test?",
              options: [
                "A running application",
                "Only source code comments",
                "Only CSS variables",
                "Only static images",
              ],
              answer: "A running application",
            },
            {
              question: "What does SCA inspect?",
              options: [
                "Third-party software dependencies",
                "Monitor resolution",
                "Website colors",
                "Keyboard hardware",
              ],
              answer: "Third-party software dependencies",
            },
            {
              question: "When is security testing authorized?",
              options: [
                "On systems you own or have permission to test",
                "On any website without permission",
                "Only on public websites",
                "Only on systems with no owner",
              ],
              answer: "On systems you own or have permission to test",
            },
            {
              question: "What should developers do after finding a vulnerability?",
              options: [
                "Fix it and retest the affected feature",
                "Ignore it permanently",
                "Publish sensitive user data",
                "Disable all application logs",
              ],
              answer: "Fix it and retest the affected feature",
            },
          ],
        },
        {
          title: "Dependency and API Security",
          content: `Modern web applications depend on external packages and APIs. Vulnerabilities in these dependencies can affect the entire application.

Developers should:
- Keep packages updated.
- Review dependency security advisories.
- Remove unused packages.
- Use lockfiles for consistent installations.
- Avoid installing unknown packages without reviewing them.
- Store API keys on the server.
- Apply authentication, authorization, and rate limiting to protected API endpoints.

API responses should expose only the information required by the client.

Validate request bodies, query parameters, and headers on the server. Avoid trusting data merely because it comes from your own frontend.`,
          quiz: [
            {
              question: "Why update dependencies?",
              options: [
                "To address bugs and known vulnerabilities",
                "To increase password visibility",
                "To remove HTTPS",
                "To disable API validation",
              ],
              answer: "To address bugs and known vulnerabilities",
            },
            {
              question: "What is the purpose of a lockfile?",
              options: [
                "Keep dependency versions consistent",
                "Store user passwords",
                "Encrypt every browser request",
                "Replace API authentication",
              ],
              answer: "Keep dependency versions consistent",
            },
            {
              question: "Where should private API keys normally be kept?",
              options: [
                "On the server in protected configuration",
                "In public frontend source code",
                "Inside a public HTML comment",
                "In a public image URL",
              ],
              answer: "On the server in protected configuration",
            },
            {
              question: "What should an API response contain?",
              options: [
                "Only the information the client needs",
                "Every database record",
                "All server credentials",
                "All user passwords",
              ],
              answer: "Only the information the client needs",
            },
            {
              question: "Should a server trust data just because it comes from its own frontend?",
              options: [
                "No, it should validate incoming data",
                "Yes, frontend data is always safe",
                "Yes, if the request uses JSON",
                "No, but CSS validation is enough",
              ],
              answer: "No, it should validate incoming data",
            },
          ],
        },
        {
          title: "Secure Configuration and Deployment",
          content: `Secure deployment protects application settings, secrets, infrastructure, and production data.

Important practices include:
- Keep secret keys in environment variables or a managed secrets service.
- Never commit secrets to source control.
- Disable unnecessary debug features in production.
- Use secure HTTPS configuration.
- Apply appropriate security headers.
- Restrict database and server permissions.
- Keep frameworks and server software updated.
- Separate development, testing, and production environments.

Production systems should use secure error handling. Users should receive safe error messages while detailed diagnostic information is kept in protected server logs.

Review deployment configuration regularly and rotate exposed credentials.`,
          quiz: [
            {
              question: "Where should application secrets be stored?",
              options: [
                "Protected environment configuration or a secrets manager",
                "Public GitHub source code",
                "Frontend HTML comments",
                "Public CSS files",
              ],
              answer:
                "Protected environment configuration or a secrets manager",
            },
            {
              question: "What should happen to debug mode in production?",
              options: [
                "Disable unnecessary debug features",
                "Enable detailed public errors",
                "Expose all environment variables",
                "Disable authentication",
              ],
              answer: "Disable unnecessary debug features",
            },
            {
              question: "Why separate development and production environments?",
              options: [
                "To isolate testing from live systems",
                "To share all secrets publicly",
                "To remove application security",
                "To avoid testing",
              ],
              answer: "To isolate testing from live systems",
            },
            {
              question: "What should developers do if a secret is exposed?",
              options: [
                "Rotate or replace the exposed credential",
                "Keep using it forever",
                "Publish it in documentation",
                "Disable all application updates",
              ],
              answer: "Rotate or replace the exposed credential",
            },
            {
              question: "How should production errors be handled?",
              options: [
                "Show safe messages and protect detailed logs",
                "Display database credentials",
                "Show all environment variables",
                "Expose internal stack traces to everyone",
              ],
              answer: "Show safe messages and protect detailed logs",
            },
          ],
        },
        {
          title: "Final Project: Build a Secure Web Application",
          content: `In this final project, you will design and build a small secure web application.

Suggested application: Secure Student Portal.

Core features:
1. User registration and login.
2. Password hashing using a trusted library.
3. Session-based authentication.
4. Role-based access for students and administrators.
5. Server-side input validation.
6. Parameterized database queries.
7. Safe output rendering.
8. HTTPS and appropriate security headers.
9. Protected API endpoints.
10. Security testing and documentation.

Project workflow:
- Plan the application and identify sensitive information.
- Design authentication and access permissions.
- Build frontend pages and backend APIs.
- Connect a database using safe query methods.
- Test authorized and unauthorized access.
- Review dependencies and configuration.
- Document the security controls.

Do not use real personal information during practice. Use sample accounts and test data.

The goal is to demonstrate how security principles work together in a realistic web development project.`,
          quiz: [
            {
              question: "Which feature should a secure student portal include?",
              options: [
                "Server-side authentication",
                "Public password storage",
                "Unrestricted administrator access",
                "Disabled input validation",
              ],
              answer: "Server-side authentication",
            },
            {
              question: "How should database queries handle user input?",
              options: [
                "Use parameterized queries",
                "Join raw input into SQL",
                "Execute input as a database command",
                "Skip database validation",
              ],
              answer: "Use parameterized queries",
            },
            {
              question: "What should determine a student's access to private records?",
              options: [
                "Server-side authorization checks",
                "A hidden frontend button",
                "The browser's screen size",
                "The page's CSS theme",
              ],
              answer: "Server-side authorization checks",
            },
            {
              question: "What type of information should be used during practice?",
              options: [
                "Sample accounts and test data",
                "Real passwords from other people",
                "Public administrator credentials",
                "Unnecessary private records",
              ],
              answer: "Sample accounts and test data",
            },
            {
              question: "What is the final project's main objective?",
              options: [
                "Apply security principles in a web application",
                "Build a website without authentication",
                "Store passwords in plain text",
                "Remove all server-side checks",
              ],
              answer: "Apply security principles in a web application",
            },
          ],
        },
      ],
    },
  ],
};

export default webSecurityCourse;

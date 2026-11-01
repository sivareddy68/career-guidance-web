
export const wireframingCourse = {
  title: "Wireframing",
  description:
    "Learn how to plan website and mobile app interfaces using wireframes. Understand layout structure, navigation, user flows, low-fidelity and high-fidelity wireframes, and prototyping.",
  project:
    "Create a complete wireframe for a student learning platform with login, dashboard, course details, learning progress, and profile screens.",

  weeks: [
    {
      title: "Week 1: Introduction to Wireframing",
      description:
        "Understand wireframes, their purpose, interface structure, and basic design principles.",
      lessons: [
        {
          title: "Introduction to Wireframing",
          duration: "45 minutes",
          introduction:
            "Wireframing is an important step in UI/UX design. A wireframe is a simple visual representation of a website or mobile application screen. It shows where elements such as headings, buttons, images, navigation menus, and content will be placed. Wireframes help designers plan the structure of an interface before spending time on colors, graphics, and detailed visual design.",
          sections: [
            {
              heading: "What is a Wireframe?",
              content:
                "A wireframe is a basic blueprint of a digital product. It focuses on structure, content placement, and functionality rather than visual decoration. It helps designers communicate how a screen should work."
            },
            {
              heading: "Why Wireframes Are Important",
              content:
                "Wireframes help identify layout problems early, reduce development confusion, improve communication between team members, and make it easier to collect feedback before implementation."
            },
            {
              heading: "Common Wireframe Elements",
              content:
                "Typical elements include headers, navigation bars, buttons, input fields, image placeholders, content sections, cards, footers, and sidebars."
            }
          ],
          example:
            "For a student dashboard, a wireframe may show a header at the top, a sidebar containing Dashboard and Courses, a main area showing enrolled courses, and progress cards.",
          exercise:
            "Draw a basic wireframe for a student dashboard. Include a header, navigation menu, course cards, and a progress section.",
          quiz: [
            {
              question: "What is a wireframe?",
              options: [
                "A basic layout blueprint of an interface",
                "A finished application",
                "A programming language",
                "A database structure"
              ],
              answer: "A basic layout blueprint of an interface",
              explanation:
                "A wireframe represents the structure and placement of interface elements."
            },
            {
              question: "What is the main purpose of wireframing?",
              options: [
                "To plan interface structure",
                "To write backend code",
                "To manage databases",
                "To publish an application"
              ],
              answer: "To plan interface structure",
              explanation:
                "Wireframes help designers plan the arrangement and functionality of screens."
            },
            {
              question: "Which element can appear in a wireframe?",
              options: [
                "Navigation bar",
                "Compiler",
                "Database server",
                "Operating system kernel"
              ],
              answer: "Navigation bar",
              explanation:
                "A navigation bar is a common interface component represented in a wireframe."
            },
            {
              question: "Wireframes focus mainly on visual decoration.",
              options: ["True", "False"],
              answer: "False",
              explanation:
                "Wireframes focus mainly on structure, layout, and functionality."
            },
            {
              question: "Which activity is suitable before creating a detailed visual design?",
              options: [
                "Creating a wireframe",
                "Publishing the final application",
                "Deploying the database",
                "Writing server configuration"
              ],
              answer: "Creating a wireframe",
              explanation:
                "Wireframing helps establish the screen structure before detailed visual styling."
            }
          ]
        },

        {
          title: "Types of Wireframes",
          duration: "45 minutes",
          introduction:
            "Wireframes can be created at different levels of detail. Designers select a suitable type depending on the project stage, available information, and feedback requirements.",
          sections: [
            {
              heading: "Low-Fidelity Wireframes",
              content:
                "Low-fidelity wireframes are simple sketches. They use basic boxes, lines, and placeholders. They are useful during early brainstorming because they are quick to create and easy to change."
            },
            {
              heading: "Mid-Fidelity Wireframes",
              content:
                "Mid-fidelity wireframes contain more accurate spacing, component sizes, and interface arrangements. They provide a clearer understanding of how the final screen may be structured."
            },
            {
              heading: "High-Fidelity Wireframes",
              content:
                "High-fidelity wireframes include more detailed interface elements, accurate dimensions, and sometimes typography and visual styling. They are useful when the design direction is more established."
            }
          ],
          example:
            "A rough paper sketch of a login page is low fidelity. A digital login page with correctly sized input fields and buttons is closer to mid fidelity.",
          exercise:
            "Create three versions of a login screen: low fidelity, mid fidelity, and high fidelity. Compare their level of detail.",
          quiz: [
            {
              question: "Which wireframe type is usually created first?",
              options: [
                "Low-fidelity",
                "High-fidelity",
                "Production-ready",
                "Animated"
              ],
              answer: "Low-fidelity",
              explanation:
                "Low-fidelity wireframes are quick to create and useful for early planning."
            },
            {
              question: "What is commonly used in low-fidelity wireframes?",
              options: [
                "Simple boxes and lines",
                "Complex animations",
                "Production code",
                "Database queries"
              ],
              answer: "Simple boxes and lines",
              explanation:
                "Simple shapes represent interface elements without detailed styling."
            },
            {
              question: "Which type contains more interface detail?",
              options: [
                "High-fidelity",
                "Low-fidelity",
                "Paper-only sketch",
                "Text-only outline"
              ],
              answer: "High-fidelity",
              explanation:
                "High-fidelity wireframes represent screens with greater detail."
            },
            {
              question: "Low-fidelity wireframes are useful for early brainstorming.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Their simplicity makes them easy to create, discuss, and revise."
            },
            {
              question: "What is a key advantage of low-fidelity wireframes?",
              options: [
                "They are quick to modify",
                "They require complete backend code",
                "They include all final animations",
                "They cannot be changed"
              ],
              answer: "They are quick to modify",
              explanation:
                "Simple sketches allow designers to explore different layouts quickly."
            }
          ]
        },

        {
          title: "Wireframing Tools",
          duration: "50 minutes",
          introduction:
            "Wireframing tools help designers create, organize, and share interface layouts. Some tools support collaboration, reusable components, and interactive prototypes.",
          sections: [
            {
              heading: "Figma",
              content:
                "Figma is a browser-based design tool used for interface design, wireframing, prototyping, and collaboration. Multiple team members can work on the same design."
            },
            {
              heading: "Balsamiq",
              content:
                "Balsamiq is designed for quick, low-fidelity wireframes. Its sketch-like appearance helps teams focus on structure rather than visual styling."
            },
            {
              heading: "Adobe XD and Other Tools",
              content:
                "Adobe XD has been used for interface design and prototyping. Other tools include Sketch and diagrams.net. Tool availability and features may vary."
            }
          ],
          example:
            "A designer can use Figma to create a mobile login screen, duplicate it for a registration screen, and connect buttons to demonstrate navigation.",
          exercise:
            "Explore a wireframing tool and create a simple login screen with a title, email field, password field, and login button.",
          quiz: [
            {
              question: "Which tool is commonly used for UI design and prototyping?",
              options: ["Figma", "MySQL", "Python", "Git"]
            , answer: "Figma",
              explanation:
                "Figma supports interface design, wireframing, and interactive prototyping."
            },
            {
              question: "Which tool is known for sketch-style low-fidelity wireframes?",
              options: ["Balsamiq", "Excel", "Visual Studio", "Postman"],
              answer: "Balsamiq",
              explanation:
                "Balsamiq provides a sketch-like style for simple wireframe layouts."
            },
            {
              question: "What is one benefit of collaborative design tools?",
              options: [
                "Team members can share feedback",
                "They automatically write all backend code",
                "They remove the need for planning",
                "They replace user research"
              ],
              answer: "Team members can share feedback",
              explanation:
                "Collaboration features help team members review and discuss designs."
            },
            {
              question: "Figma can be used to create interactive prototypes.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Figma supports connecting screens and creating prototype interactions."
            },
            {
              question: "Which activity is suitable for a wireframing tool?",
              options: [
                "Arranging screen components",
                "Managing server memory",
                "Compiling a C program",
                "Creating database indexes"
              ],
              answer: "Arranging screen components",
              explanation:
                "Wireframing tools help arrange interface components and screen layouts."
            }
          ]
        },

        {
          title: "Understanding User Requirements",
          duration: "50 minutes",
          introduction:
            "A wireframe should be based on what users need to accomplish. Before designing screens, understand the target audience, their goals, and the main tasks they must complete.",
          sections: [
            {
              heading: "Identify User Goals",
              content:
                "User goals describe what people want to achieve. For example, students using a learning platform may want to find courses, watch lessons, and check their progress."
            },
            {
              heading: "Identify Required Features",
              content:
                "List the functions that the interface must support. Examples include login, search, navigation, course enrollment, progress tracking, and profile management."
            },
            {
              heading: "Organize Requirements",
              content:
                "Group related requirements into screens or sections. This prevents unnecessary screens and helps create a logical navigation structure."
            }
          ],
          example:
            "For an online learning application, requirements may include a login page, course list, course details page, lesson page, and student dashboard.",
          exercise:
            "Write five user requirements for a learning application and identify which screen would support each requirement.",
          quiz: [
            {
              question: "What should designers understand before creating wireframes?",
              options: [
                "User requirements",
                "Final source code",
                "Server hardware",
                "Database passwords"
              ],
              answer: "User requirements",
              explanation:
                "User requirements establish what the interface needs to support."
            },
            {
              question: "What does a user goal describe?",
              options: [
                "What a user wants to achieve",
                "The programming language used",
                "The server location",
                "The database size"
              ],
              answer: "What a user wants to achieve",
              explanation:
                "User goals describe the outcomes people expect from a product."
            },
            {
              question: "Which is a possible feature of a learning platform?",
              options: [
                "Course progress tracking",
                "Compiler optimization",
                "Operating system scheduling",
                "Network packet routing"
              ],
              answer: "Course progress tracking",
              explanation:
                "Learning platforms commonly show users their course completion progress."
            },
            {
              question: "User requirements can help determine which screens are needed.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Requirements help identify the screens and functions a product needs."
            },
            {
              question: "Why should related requirements be grouped?",
              options: [
                "To organize the interface logically",
                "To make navigation confusing",
                "To remove important features",
                "To avoid understanding users"
              ],
              answer: "To organize the interface logically",
              explanation:
                "Grouping related requirements makes the interface easier to plan."
            }
          ]
        }
      ],
      assignment:
        "Create a low-fidelity wireframe for a student learning application. Include a login screen, dashboard, and course list. Add labels explaining the purpose of each component."
    },

    {
      title: "Week 2: Layout and Interface Structure",
      description:
        "Learn how to organize interface elements, create navigation systems, and use grids and spacing.",
      lessons: [
        {
          title: "Layout Fundamentals",
          duration: "45 minutes",
          introduction:
            "Layout determines how information and interface components are arranged on a screen. A well-organized layout helps users understand the interface and find important information.",
          sections: [
            {
              heading: "Header",
              content:
                "The header usually appears at the top of a screen. It may contain a logo, page title, search field, profile icon, and primary navigation."
            },
            {
              heading: "Main Content Area",
              content:
                "The main content area contains the most important information for the current page, such as course cards, articles, forms, or reports."
            },
            {
              heading: "Footer and Sidebar",
              content:
                "A footer can contain secondary links and contact information. A sidebar can provide navigation or filters without taking space away from the main content."
            }
          ],
          example:
            "A course dashboard may use a top header, left sidebar, and central content area containing course cards and progress information.",
          exercise:
            "Draw a desktop dashboard layout with a header, sidebar, main content area, and footer.",
          quiz: [
            {
              question: "Where is a header commonly placed?",
              options: ["Top of the screen", "Inside the database", "At the bottom of the server", "In the source code"],
              answer: "Top of the screen",
              explanation:
                "Headers are commonly placed at the top of an interface."
            },
            {
              question: "What is the main purpose of the main content area?",
              options: [
                "Display primary page information",
                "Store application passwords",
                "Run database queries",
                "Compile source code"
              ],
              answer: "Display primary page information",
              explanation:
                "The main content area displays the information users need on that page."
            },
            {
              question: "Which component can provide side navigation?",
              options: ["Sidebar", "Footer", "Image placeholder", "Loading indicator"],
              answer: "Sidebar",
              explanation:
                "A sidebar can contain navigation links or filters."
            },
            {
              question: "A footer is always required on every interface.",
              options: ["True", "False"],
              answer: "False",
              explanation:
                "A footer is useful in many layouts but is not mandatory for every screen."
            },
            {
              question: "Which layout element commonly contains a logo?",
              options: ["Header", "Database", "API response", "Compiler"],
              answer: "Header",
              explanation:
                "A logo is commonly placed in the header for brand identification."
            }
          ]
        },

        {
          title: "Grid Systems and Alignment",
          duration: "50 minutes",
          introduction:
            "Grid systems help designers organize content into consistent columns and rows. Alignment ensures that related elements follow a clear visual structure.",
          sections: [
            {
              heading: "Columns and Rows",
              content:
                "A grid divides a screen into columns and rows. Designers use these divisions to align cards, images, headings, and text."
            },
            {
              heading: "Consistent Alignment",
              content:
                "Elements that belong together should generally share consistent alignment. This creates order and makes layouts easier to scan."
            },
            {
              heading: "Responsive Grids",
              content:
                "Responsive grids adjust the number and width of columns according to screen size. A desktop layout may show three cards in a row while a mobile layout shows one."
            }
          ],
          example:
            "A desktop course page can display three course cards in a row. On a narrow mobile screen, the cards can stack vertically.",
          exercise:
            "Create a three-column course card layout and then rearrange it for a mobile screen.",
          quiz: [
            {
              question: "What is the purpose of a grid system?",
              options: [
                "Organize and align content",
                "Store user passwords",
                "Execute JavaScript",
                "Connect a database"
              ],
              answer: "Organize and align content",
              explanation:
                "Grids help organize interface elements into consistent structures."
            },
            {
              question: "What does a column represent in a grid?",
              options: [
                "A vertical division",
                "A database record",
                "A programming function",
                "A navigation action"
              ],
              answer: "A vertical division",
              explanation:
                "Columns divide the layout vertically."
            },
            {
              question: "What does responsive grid behavior support?",
              options: [
                "Different screen sizes",
                "Only desktop screens",
                "Only printed documents",
                "Database backups"
              ],
              answer: "Different screen sizes",
              explanation:
                "Responsive grids adapt layouts to different device widths."
            },
            {
              question: "Consistent alignment can improve visual organization.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Consistent alignment makes related interface elements easier to understand."
            },
            {
              question: "What is a suitable mobile layout for course cards?",
              options: [
                "Cards stacked vertically",
                "Cards extending beyond the screen",
                "Cards hidden permanently",
                "Cards placed randomly"
              ],
              answer: "Cards stacked vertically",
              explanation:
                "Vertical stacking can make cards easier to view on narrow screens."
            }
          ]
        },

        {
          title: "Navigation Design",
          duration: "50 minutes",
          introduction:
            "Navigation helps users move between different screens and sections of an application. Clear navigation reduces confusion and helps users complete tasks efficiently.",
          sections: [
            {
              heading: "Primary Navigation",
              content:
                "Primary navigation provides access to the most important areas of a product, such as Home, Courses, Dashboard, and Profile."
            },
            {
              heading: "Secondary Navigation",
              content:
                "Secondary navigation provides access to related subsections. For example, a course page may contain tabs for Overview, Lessons, Assignments, and Reviews."
            },
            {
              heading: "Navigation Patterns",
              content:
                "Common patterns include top navigation bars, sidebars, bottom navigation bars, tabs, and breadcrumb navigation."
            }
          ],
          example:
            "A mobile learning application may use a bottom navigation bar with Home, Courses, Progress, and Profile.",
          exercise:
            "Design navigation for a learning platform. Include four primary sections and two secondary sections within Courses.",
          quiz: [
            {
              question: "What is the purpose of navigation?",
              options: [
                "Help users move between screens",
                "Store image files",
                "Run backend services",
                "Create database tables"
              ],
              answer: "Help users move between screens",
              explanation:
                "Navigation provides a way to move through an application."
            },
            {
              question: "Which is an example of primary navigation?",
              options: [
                "Home, Courses, Profile",
                "Font size, line height, color",
                "Database, server, compiler",
                "Image width, border, shadow"
              ],
              answer: "Home, Courses, Profile",
              explanation:
                "These are major sections that users may need to access frequently."
            },
            {
              question: "Which navigation pattern is common on mobile applications?",
              options: [
                "Bottom navigation bar",
                "Database index",
                "Command-line prompt",
                "Server log"
              ],
              answer: "Bottom navigation bar",
              explanation:
                "Bottom navigation is commonly used to access major mobile app sections."
            },
            {
              question: "Breadcrumbs can help users understand their location within a website.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Breadcrumbs show the hierarchy of the current page."
            },
            {
              question: "Which is an example of secondary navigation?",
              options: [
                "Overview, Lessons, Assignments",
                "Home, Courses, Profile",
                "Login, Register, Logout",
                "Header, Footer, Logo"
              ],
              answer: "Overview, Lessons, Assignments",
              explanation:
                "These options can provide access to subsections within a course."
            }
          ]
        },

        {
          title: "Forms and Input Components",
          duration: "45 minutes",
          introduction:
            "Forms allow users to enter and submit information. A wireframe should show how input fields, labels, buttons, and validation messages are arranged.",
          sections: [
            {
              heading: "Input Fields",
              content:
                "Input fields collect information such as names, email addresses, passwords, and search terms. Labels should clearly explain what users need to enter."
            },
            {
              heading: "Buttons and Actions",
              content:
                "Buttons trigger actions such as Login, Submit, Save, Search, and Continue. Their labels should describe the action clearly."
            },
            {
              heading: "Form Feedback",
              content:
                "Forms may display error messages, success messages, and validation instructions. These messages help users correct problems and understand what happens next."
            }
          ],
          example:
            "A registration form may include Name, Email, Password, Confirm Password, and a Create Account button.",
          exercise:
            "Create a registration form wireframe with four input fields, a submit button, and a validation message.",
          quiz: [
            {
              question: "What is the purpose of an input field?",
              options: [
                "Collect information from users",
                "Display server logs",
                "Store source code",
                "Run animations"
              ],
              answer: "Collect information from users",
              explanation:
                "Input fields allow users to enter information."
            },
            {
              question: "Which label is suitable for an email field?",
              options: ["Email Address", "Run Program", "Server Status", "Database Index"],
              answer: "Email Address",
              explanation:
                "Email Address clearly describes the expected input."
            },
            {
              question: "What should a button label communicate?",
              options: [
                "The action it performs",
                "The database password",
                "The screen resolution",
                "The programming language"
              ],
              answer: "The action it performs",
              explanation:
                "Clear button labels help users understand what will happen."
            },
            {
              question: "Validation messages can help users correct input errors.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Validation feedback explains problems and how users can correct them."
            },
            {
              question: "Which button label is clearest for submitting a registration form?",
              options: ["Create Account", "Something", "Maybe", "Continue Later"],
              answer: "Create Account",
              explanation:
                "Create Account communicates the result of submitting the registration form."
            }
          ]
        }
      ],
      assignment:
        "Create a responsive dashboard wireframe containing a header, sidebar, navigation, course cards, and progress information. Show both desktop and mobile layouts."
    },

    {
      title: "Week 3: User Flows and Prototyping",
      description:
        "Learn how to connect screens, map user journeys, and build interactive prototypes.",
      lessons: [
        {
          title: "Understanding User Flows",
          duration: "50 minutes",
          introduction:
            "A user flow describes the sequence of steps a person follows to complete a task in a digital product. It helps designers understand which screens and actions are needed.",
          sections: [
            {
              heading: "What is a User Flow?",
              content:
                "A user flow is a diagram showing the path users take through an application. It includes starting points, actions, decisions, and outcomes."
            },
            {
              heading: "User Flow Components",
              content:
                "Common components include start and end points, screen nodes, action steps, and decision points. Arrows indicate the direction of movement."
            },
            {
              heading: "Benefits of User Flows",
              content:
                "User flows help identify unnecessary steps, missing screens, confusing navigation, and possible usability problems."
            }
          ],
          example:
            "A login flow may be: Open App → Login Screen → Enter Credentials → Validate Details → Dashboard. If the details are incorrect, the user returns to the login screen with an error message.",
          exercise:
            "Draw a user flow for a student logging in and opening an enrolled course.",
          quiz: [
            {
              question: "What does a user flow represent?",
              options: [
                "The steps a user follows to complete a task",
                "The color palette of an application",
                "The database structure",
                "The source code of a page"
              ],
              answer: "The steps a user follows to complete a task",
              explanation:
                "A user flow maps the sequence of actions and screens in a task."
            },
            {
              question: "What do arrows represent in a user flow?",
              options: [
                "Direction between steps",
                "Font styles",
                "Image resolution",
                "Database size"
              ],
              answer: "Direction between steps",
              explanation:
                "Arrows show how users move from one step to another."
            },
            {
              question: "Which is a possible starting point in a login flow?",
              options: [
                "Open application",
                "Complete database backup",
                "Compile server code",
                "Delete the operating system"
              ],
              answer: "Open application",
              explanation:
                "Opening the application can be the first step of the login journey."
            },
            {
              question: "User flows can help identify unnecessary steps.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Mapping the journey makes extra or confusing steps easier to identify."
            },
            {
              question: "What should happen when login details are invalid?",
              options: [
                "Show an error and allow correction",
                "Display the dashboard as authenticated",
                "Delete the user profile",
                "Hide all navigation permanently"
              ],
              answer: "Show an error and allow correction",
              explanation:
                "The interface should explain the problem and allow the user to try again."
            }
          ]
        },

        {
          title: "Screen Connections",
          duration: "45 minutes",
          introduction:
            "Digital products contain multiple screens. Screen connections describe how one screen leads to another through user actions such as clicking buttons, selecting menu items, or submitting forms.",
          sections: [
            {
              heading: "Screen Relationships",
              content:
                "A screen relationship shows how pages are connected. For example, selecting a course card may open the course details screen."
            },
            {
              heading: "Navigation Actions",
              content:
                "Actions such as clicking Login, selecting a tab, or pressing Back can move users between screens."
            },
            {
              heading: "Back and Cancel Behavior",
              content:
                "Designers should consider how users return to previous screens or cancel an unfinished task. Predictable navigation makes interfaces easier to use."
            }
          ],
          example:
            "Connect Login to Dashboard, Dashboard to Course List, and Course List to Course Details.",
          exercise:
            "Create four wireframe screens and connect them using arrows that represent navigation actions.",
          quiz: [
            {
              question: "What is a screen connection?",
              options: [
                "A relationship between interface screens",
                "A database password",
                "A color selection",
                "A programming variable"
              ],
              answer: "A relationship between interface screens",
              explanation:
                "Screen connections describe how users navigate between pages."
            },
            {
              question: "What action might open a course details screen?",
              options: [
                "Selecting a course card",
                "Changing the computer wallpaper",
                "Closing the application",
                "Restarting the server"
              ],
              answer: "Selecting a course card",
              explanation:
                "Selecting a course card can navigate to its details page."
            },
            {
              question: "Why should back navigation be considered?",
              options: [
                "To help users return to previous screens",
                "To change database structure",
                "To remove all screen content",
                "To prevent navigation"
              ],
              answer: "To help users return to previous screens",
              explanation:
                "Back navigation gives users a predictable way to revisit earlier screens."
            },
            {
              question: "A prototype can demonstrate connections between screens.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Interactive prototypes can connect screens through clickable actions."
            },
            {
              question: "Which sequence represents a reasonable learning app flow?",
              options: [
                "Login → Dashboard → Course List → Course Details",
                "Database → Compiler → Server → Wallpaper",
                "Footer → Password → Operating System → Printer",
                "Image → Keyboard → Database → Shutdown"
              ],
              answer: "Login → Dashboard → Course List → Course Details",
              explanation:
                "This sequence represents a logical path through a learning application."
            }
          ]
        },

        {
          title: "Introduction to Prototyping",
          duration: "50 minutes",
          introduction:
            "A prototype is an interactive representation of a digital product. It allows designers and users to experience how screens and controls may behave before the actual application is developed.",
          sections: [
            {
              heading: "What is a Prototype?",
              content:
                "A prototype demonstrates how a design works. It may include clickable buttons, screen transitions, menus, and basic interaction behavior."
            },
            {
              heading: "Static and Interactive Prototypes",
              content:
                "A static prototype shows screen designs without active navigation. An interactive prototype connects screens and allows users to test selected actions."
            },
            {
              heading: "Prototype Benefits",
              content:
                "Prototypes help communicate design ideas, gather feedback, evaluate navigation, and discover usability problems before development."
            }
          ],
          example:
            "A login prototype can allow a user to click Login and move to a dashboard screen. It demonstrates navigation without requiring a working backend.",
          exercise:
            "Create an interactive prototype connecting Login, Dashboard, and Course Details screens.",
          quiz: [
            {
              question: "What is a prototype?",
              options: [
                "An interactive representation of a product",
                "A database backup",
                "A programming compiler",
                "A computer operating system"
              ],
              answer: "An interactive representation of a product",
              explanation:
                "A prototype demonstrates how a digital product may look and behave."
            },
            {
              question: "What does an interactive prototype allow users to do?",
              options: [
                "Test selected interactions",
                "Modify server hardware",
                "Create database backups",
                "Compile application code"
              ],
              answer: "Test selected interactions",
              explanation:
                "Interactive prototypes let users try buttons and screen transitions."
            },
            {
              question: "What is a static prototype?",
              options: [
                "A representation without active navigation",
                "A fully deployed application",
                "A database management tool",
                "A server monitoring system"
              ],
              answer: "A representation without active navigation",
              explanation:
                "A static prototype displays screens but does not provide active navigation."
            },
            {
              question: "Prototypes can help collect feedback before development.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Prototypes let people review and test a design before implementation."
            },
            {
              question: "Which feature can be included in an interactive prototype?",
              options: [
                "Clickable navigation button",
                "Production database server",
                "Real payment processing by default",
                "Operating system installation"
              ],
              answer: "Clickable navigation button",
              explanation:
                "Clickable buttons can demonstrate how users move between prototype screens."
            }
          ]
        },

        {
          title: "Creating Interactive Prototypes in Figma",
          duration: "60 minutes",
          introduction:
            "Figma provides prototyping features that allow designers to connect frames and define interactions. This helps demonstrate how an interface responds to user actions.",
          sections: [
            {
              heading: "Frames",
              content:
                "Frames represent screens or sections of a design. Designers can create separate frames for login, dashboard, profile, and other pages."
            },
            {
              heading: "Prototype Connections",
              content:
                "Designers can connect a button in one frame to another frame. The connection defines what happens when the user interacts with the element."
            },
            {
              heading: "Interactions and Transitions",
              content:
                "Common interactions include clicking, hovering, opening overlays, and navigating between frames. Transitions control how changes between screens are displayed."
            }
          ],
          example:
            "Create a Login frame and Dashboard frame. Select the Login button, connect it to Dashboard, and test the interaction in prototype preview.",
          exercise:
            "Build a three-screen Figma prototype containing Login, Dashboard, and Profile. Connect the navigation buttons and test them.",
          quiz: [
            {
              question: "What does a Figma frame represent in a screen design?",
              options: [
                "A screen or design section",
                "A database table",
                "A programming loop",
                "A server process"
              ],
              answer: "A screen or design section",
              explanation:
                "Frames are used to organize screens and sections in a Figma design."
            },
            {
              question: "What connects two screens in a prototype?",
              options: [
                "Prototype interaction",
                "Database index",
                "Text formatting",
                "File compression"
              ],
              answer: "Prototype interaction",
              explanation:
                "Prototype interactions connect elements to destination frames."
            },
            {
              question: "Which is a common prototype trigger?",
              options: ["Click", "Database backup", "Code compilation", "File encryption"],
              answer: "Click",
              explanation:
                "A click can trigger a navigation or another prototype interaction."
            },
            {
              question: "Figma supports interactive prototypes.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Figma provides prototype connections and interaction settings."
            },
            {
              question: "What should you do after connecting prototype screens?",
              options: [
                "Preview and test the interactions",
                "Delete all frames",
                "Remove navigation buttons",
                "Close the design without checking"
              ],
              answer: "Preview and test the interactions",
              explanation:
                "Testing confirms that the intended screen connections work."
            }
          ]
        }
      ],
      assignment:
        "Create a user flow and interactive prototype for a learning application. Connect Login, Dashboard, Course List, and Course Details screens. Test the navigation."
    },

    {
      title: "Week 4: Testing and Final Wireframe Project",
      description:
        "Learn how to review wireframes, collect feedback, improve usability, and prepare a complete design project.",
      lessons: [
        {
          title: "Usability Principles for Wireframes",
          duration: "50 minutes",
          introduction:
            "Usability describes how easily users can understand and operate a product. Wireframes should make important actions visible, navigation understandable, and information easy to find.",
          sections: [
            {
              heading: "Clarity",
              content:
                "Use clear labels and predictable component placement. Users should understand what each button, field, and navigation option does."
            },
            {
              heading: "Consistency",
              content:
                "Use similar layouts and interaction patterns across related screens. Consistency reduces the effort required to learn an interface."
            },
            {
              heading: "Feedback",
              content:
                "Interfaces should communicate the result of user actions. Examples include confirmation messages, loading indicators, and validation messages."
            }
          ],
          example:
            "A Save button should have a clear label. After saving, the interface can display a confirmation message so users know the action was completed.",
          exercise:
            "Review your dashboard wireframe. Identify three areas where labels, consistency, or feedback could be improved.",
          quiz: [
            {
              question: "What does usability describe?",
              options: [
                "How easily users can operate a product",
                "How many files a server stores",
                "How fast code is compiled",
                "How large a database is"
              ],
              answer: "How easily users can operate a product",
              explanation:
                "Usability concerns how effectively and easily users interact with a product."
            },
            {
              question: "Why is consistency important?",
              options: [
                "It makes interfaces more predictable",
                "It makes every screen different",
                "It removes navigation",
                "It hides interface actions"
              ],
              answer: "It makes interfaces more predictable",
              explanation:
                "Consistent patterns help users understand how similar controls behave."
            },
            {
              question: "Which is an example of interface feedback?",
              options: [
                "A save confirmation message",
                "A database password",
                "A source code comment",
                "A computer processor"
              ],
              answer: "A save confirmation message",
              explanation:
                "A confirmation message informs users that an action has completed."
            },
            {
              question: "Clear labels can improve interface understanding.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Clear labels explain the purpose of controls and content."
            },
            {
              question: "What should a Save button communicate?",
              options: [
                "That it saves the current information",
                "That it deletes the application",
                "That it changes the screen resolution",
                "That it closes the database"
              ],
              answer: "That it saves the current information",
              explanation:
                "A button label should clearly communicate its action."
            }
          ]
        },

        {
          title: "Wireframe Review and Feedback",
          duration: "45 minutes",
          introduction:
            "Reviewing wireframes helps identify missing elements, confusing layouts, and navigation problems. Feedback from users, designers, and developers can improve the design.",
          sections: [
            {
              heading: "Review Layout Structure",
              content:
                "Check whether important content is visible, related elements are grouped, and the layout supports the user's main tasks."
            },
            {
              heading: "Collect Feedback",
              content:
                "Ask reviewers to explain what they understand from each screen, where they would click, and whether any information is missing."
            },
            {
              heading: "Prioritize Improvements",
              content:
                "Fix issues that prevent users from completing important tasks before making minor visual adjustments."
            }
          ],
          example:
            "If users cannot find the Courses section, review the navigation labels and placement. Then test the revised layout with reviewers.",
          exercise:
            "Ask another person to review your wireframe. Record three observations and make at least two improvements.",
          quiz: [
            {
              question: "Why should wireframes be reviewed?",
              options: [
                "To identify design and usability problems",
                "To avoid user feedback",
                "To remove important content",
                "To replace all requirements"
              ],
              answer: "To identify design and usability problems",
              explanation:
                "Review helps discover problems before the design moves forward."
            },
            {
              question: "Who can provide useful wireframe feedback?",
              options: [
                "Users and project team members",
                "Only the database server",
                "Only the compiler",
                "Only the operating system"
              ],
              answer: "Users and project team members",
              explanation:
                "Users and team members can provide different perspectives on the design."
            },
            {
              question: "What should be fixed first?",
              options: [
                "Problems blocking important user tasks",
                "Minor decorative details only",
                "Unrelated server settings",
                "Unused computer files"
              ],
              answer: "Problems blocking important user tasks",
              explanation:
                "Task-blocking problems have a greater impact on usability."
            },
            {
              question: "Feedback can help improve a wireframe.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Feedback reveals problems and opportunities for improvement."
            },
            {
              question: "Which question is useful during a wireframe review?",
              options: [
                "Can you find the Courses section?",
                "What is the server password?",
                "Which processor is installed?",
                "How many files are on the computer?"
              ],
              answer: "Can you find the Courses section?",
              explanation:
                "This question checks whether the interface supports navigation clearly."
            }
          ]
        },

        {
          title: "Responsive Wireframe Design",
          duration: "50 minutes",
          introduction:
            "Responsive design ensures that an interface can adapt to different screen sizes. Designers should consider desktop, tablet, and mobile layouts while planning wireframes.",
          sections: [
            {
              heading: "Desktop Layout",
              content:
                "Desktop screens provide more horizontal space. Designers can use sidebars, multiple columns, and wider content sections."
            },
            {
              heading: "Tablet Layout",
              content:
                "Tablet layouts often use fewer columns and adjusted navigation. Components may change size or position to fit the available width."
            },
            {
              heading: "Mobile Layout",
              content:
                "Mobile layouts prioritize essential content, readable text, and controls that are easy to interact with on smaller screens."
            }
          ],
          example:
            "A desktop dashboard may show a sidebar and three course cards in a row. A mobile version may collapse the sidebar and display one course card at a time.",
          exercise:
            "Create desktop and mobile versions of the same dashboard. Show how navigation and course cards change.",
          quiz: [
            {
              question: "What is responsive design?",
              options: [
                "Design that adapts to different screen sizes",
                "Design that works only on desktops",
                "A database design method",
                "A programming language"
              ],
              answer: "Design that adapts to different screen sizes",
              explanation:
                "Responsive design adjusts interface layouts for different devices."
            },
            {
              question: "Which layout may be suitable for a narrow mobile screen?",
              options: [
                "A single-column layout",
                "A very wide multi-column layout",
                "A fixed desktop sidebar with no adjustment",
                "Content extending beyond the screen"
              ],
              answer: "A single-column layout",
              explanation:
                "A single-column layout can make content easier to read on narrow screens."
            },
            {
              question: "What can happen to a desktop sidebar on mobile?",
              options: [
                "It can collapse into a menu",
                "It must become wider",
                "It must cover all content",
                "It must disappear without an alternative"
              ],
              answer: "It can collapse into a menu",
              explanation:
                "Collapsible navigation can preserve access while saving screen space."
            },
            {
              question: "Responsive design should consider different device widths.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Responsive layouts adapt to different viewport sizes."
            },
            {
              question: "What is important when designing mobile controls?",
              options: [
                "They should be easy to interact with",
                "They should be extremely small",
                "They should overlap",
                "They should be hidden"
              ],
              answer: "They should be easy to interact with",
              explanation:
                "Mobile controls should be accessible and comfortable to use."
            }
          ]
        },

        {
          title: "Final Wireframing Project",
          duration: "60 minutes",
          introduction:
            "In this lesson, combine your knowledge of wireframes, layout, navigation, user flows, and prototyping to create a complete interface plan. A good project should explain the user's needs and demonstrate how the main screens work together.",
          sections: [
            {
              heading: "Project Requirements",
              content:
                "Create a student learning platform with Login, Registration, Dashboard, Course Details, Learning Progress, and Profile screens."
            },
            {
              heading: "Design and Navigation",
              content:
                "Use consistent layouts and clear navigation. Show how users move from the login screen to the dashboard and then to a course."
            },
            {
              heading: "Prototype and Review",
              content:
                "Connect the screens in a prototype, test the main interactions, and review the design for missing information and confusing navigation."
            }
          ],
          example:
            "A complete project may contain six wireframe screens, a user flow diagram, desktop and mobile layouts, and an interactive prototype.",
          exercise:
            "Finish the student learning platform wireframe. Present your screens, user flow, prototype connections, and design improvements.",
          quiz: [
            {
              question: "What should a final wireframing project demonstrate?",
              options: [
                "Screen structure and navigation",
                "Only a color palette",
                "Only programming syntax",
                "Only database queries"
              ],
              answer: "Screen structure and navigation",
              explanation:
                "A wireframing project should demonstrate how screens are arranged and connected."
            },
            {
              question: "Which screen is suitable for showing course completion?",
              options: [
                "Learning Progress",
                "Login",
                "Registration",
                "Password Reset"
              ],
              answer: "Learning Progress",
              explanation:
                "A progress screen can display completed lessons and course status."
            },
            {
              question: "Why should the final prototype be tested?",
              options: [
                "To check screen interactions",
                "To delete all design screens",
                "To remove user requirements",
                "To avoid reviewing navigation"
              ],
              answer: "To check screen interactions",
              explanation:
                "Testing confirms that the prototype demonstrates the intended user journey."
            },
            {
              question: "A final project can include both desktop and mobile wireframes.",
              options: ["True", "False"],
              answer: "True",
              explanation:
                "Showing different screen sizes demonstrates responsive layout planning."
            },
            {
              question: "Which item helps explain how users move through the application?",
              options: [
                "User flow diagram",
                "Color palette",
                "Font list",
                "Image collection"
              ],
              answer: "User flow diagram",
              explanation:
                "A user flow diagram shows the sequence of screens and actions."
            }
          ]
        }
      ],
      assignment:
        "Complete and present a student learning platform wireframe. Include six screens, a user flow diagram, desktop and mobile layouts, an interactive prototype, and a short explanation of improvements made after feedback."
    }
  ]
};

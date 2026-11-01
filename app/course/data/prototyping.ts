const prototypingCourse = {
  title: "Prototyping",
  description:
    "Learn UI/UX prototyping, wireframes, interactive prototypes, user flows, navigation, usability testing, and practical interface design.",

  weeks: [
    {
      title: "Week 1: Prototyping Fundamentals",
      description:
        "Understand the purpose of prototypes and how they are used in the UI/UX design process.",
      lessons: [
        {
          title: "Introduction to Prototyping",
          content: `A prototype is an early version of a product or interface used to explore and communicate a design idea.

Prototypes help designers understand how users may interact with an application before the final product is developed.

A prototype can show screens, navigation, buttons, forms, interactions, and user flows.

Prototyping reduces development risk because design problems can be identified and improved early.`,
          quiz: [
            {
              question: "What is a prototype?",
              options: [
                "An early version of a product or interface",
                "A final database",
                "A programming language",
                "A server",
              ],
              answer: "An early version of a product or interface",
            },
            {
              question: "Why are prototypes useful?",
              options: [
                "They help explore and test design ideas",
                "They replace all development",
                "They create databases",
                "They increase server speed",
              ],
              answer: "They help explore and test design ideas",
            },
            {
              question: "What can a prototype show?",
              options: [
                "Screens and interactions",
                "Only source code",
                "Only database tables",
                "Only server hardware",
              ],
              answer: "Screens and interactions",
            },
            {
              question: "When can prototypes be used?",
              options: [
                "Before final development",
                "Only after product release",
                "Only after deployment",
                "Never during design",
              ],
              answer: "Before final development",
            },
            {
              question: "What can prototyping reduce?",
              options: [
                "Design and development risk",
                "Screen size",
                "Internet speed",
                "Storage capacity",
              ],
              answer: "Design and development risk",
            },
          ],
        },
        {
          title: "Types of Prototypes",
          content: `Prototypes can have different levels of detail.

Low-fidelity prototypes are simple and usually focus on structure and layout. Sketches and basic wireframes are common examples.

High-fidelity prototypes look and behave more like the final product. They can include colors, typography, images, buttons, animations, and realistic interactions.

The appropriate fidelity depends on the design stage and the purpose of the prototype.`,
          quiz: [
            {
              question: "What is a low-fidelity prototype?",
              options: [
                "A simple representation of a design",
                "A completed application",
                "A production database",
                "A server configuration",
              ],
              answer: "A simple representation of a design",
            },
            {
              question: "What does a high-fidelity prototype usually contain?",
              options: [
                "Detailed visuals and interactions",
                "Only rough sketches",
                "Only text files",
                "Only database schemas",
              ],
              answer: "Detailed visuals and interactions",
            },
            {
              question: "Which is an example of low fidelity?",
              options: [
                "Basic wireframe",
                "Final production application",
                "Backend server",
                "Database",
              ],
              answer: "Basic wireframe",
            },
            {
              question: "Which prototype is closer to the final interface?",
              options: [
                "High-fidelity prototype",
                "Basic sketch",
                "Text note",
                "Requirement list",
              ],
              answer: "High-fidelity prototype",
            },
            {
              question: "What determines the required fidelity?",
              options: [
                "Design stage and purpose",
                "Computer brand",
                "Internet provider",
                "File extension",
              ],
              answer: "Design stage and purpose",
            },
          ],
        },
        {
          title: "Wireframes and Layout Structure",
          content: `A wireframe is a basic visual representation of a screen or webpage.

Wireframes focus on structure rather than detailed visual styling. They can show navigation bars, content areas, buttons, forms, images, and other interface elements.

Wireframes help designers decide how information should be organized before spending time on visual design.

A good wireframe should make the structure and content hierarchy easy to understand.`,
          quiz: [
            {
              question: "What is a wireframe?",
              options: [
                "A basic representation of an interface",
                "A final coded application",
                "A database",
                "A network protocol",
              ],
              answer: "A basic representation of an interface",
            },
            {
              question: "What do wireframes mainly focus on?",
              options: [
                "Structure and layout",
                "Server performance",
                "Database security",
                "Source code optimization",
              ],
              answer: "Structure and layout",
            },
            {
              question: "What can a wireframe show?",
              options: [
                "Buttons and content areas",
                "Only backend code",
                "Only server hardware",
                "Only database records",
              ],
              answer: "Buttons and content areas",
            },
            {
              question: "Why use wireframes early?",
              options: [
                "To organize information before detailed design",
                "To deploy the application",
                "To create a server",
                "To write database queries",
              ],
              answer: "To organize information before detailed design",
            },
            {
              question: "What should a wireframe communicate clearly?",
              options: [
                "Content hierarchy and structure",
                "Programming language",
                "Server location",
                "Database password",
              ],
              answer: "Content hierarchy and structure",
            },
          ],
        },
        {
          title: "User Flows and Navigation",
          content: `A user flow describes the steps a user takes to complete a task in an application.

For example, an online shopping flow may include opening a product, adding it to a cart, entering delivery details, and completing checkout.

User flows help designers understand navigation and identify unnecessary steps.

A prototype can connect multiple screens to represent these flows and make the experience easier to evaluate.`,
          quiz: [
            {
              question: "What does a user flow describe?",
              options: [
                "Steps a user takes to complete a task",
                "Database structure",
                "Server hardware",
                "Programming syntax",
              ],
              answer: "Steps a user takes to complete a task",
            },
            {
              question: "Why are user flows useful?",
              options: [
                "They help plan navigation",
                "They create databases",
                "They increase CPU speed",
                "They replace coding",
              ],
              answer: "They help plan navigation",
            },
            {
              question: "Which is part of an online shopping flow?",
              options: [
                "Adding a product to a cart",
                "Changing server hardware",
                "Writing operating system code",
                "Installing a router",
              ],
              answer: "Adding a product to a cart",
            },
            {
              question: "What can user flows identify?",
              options: [
                "Unnecessary steps",
                "CPU failures",
                "Database storage limits",
                "Network cables",
              ],
              answer: "Unnecessary steps",
            },
            {
              question: "What can connect multiple screens in a prototype?",
              options: [
                "Interactions",
                "Database tables",
                "Network cables",
                "Operating systems",
              ],
              answer: "Interactions",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Interactive Prototypes",
      description:
        "Learn how to create interactive screens, navigation, components, and realistic user interactions.",
      lessons: [
        {
          title: "Interactive Prototype Basics",
          content: `An interactive prototype allows users to interact with a design instead of only viewing static screens.

Buttons, links, menus, cards, forms, and other elements can be connected to different screens.

Interactive prototypes help designers demonstrate how an application will behave.

They are especially useful when presenting designs to stakeholders or testing a user flow.`,
          quiz: [
            {
              question: "What makes a prototype interactive?",
              options: [
                "Users can interact with interface elements",
                "It contains only images",
                "It contains only documentation",
                "It has no screens",
              ],
              answer: "Users can interact with interface elements",
            },
            {
              question: "What can be connected in an interactive prototype?",
              options: [
                "Buttons and screens",
                "Only databases",
                "Only servers",
                "Only source files",
              ],
              answer: "Buttons and screens",
            },
            {
              question: "Why use interactive prototypes?",
              options: [
                "To demonstrate application behavior",
                "To replace the operating system",
                "To create hardware",
                "To increase storage",
              ],
              answer: "To demonstrate application behavior",
            },
            {
              question: "Who can review a prototype?",
              options: [
                "Designers and stakeholders",
                "Only database administrators",
                "Only hardware engineers",
                "Only network engineers",
              ],
              answer: "Designers and stakeholders",
            },
            {
              question: "Which element can be interactive?",
              options: ["Button", "Database server", "CPU", "Power supply"],
              answer: "Button",
            },
          ],
        },
        {
          title: "Components and Design Systems",
          content: `Reusable components are common interface elements that can be used across multiple screens.

Examples include buttons, input fields, navigation bars, cards, dialogs, and form controls.

A design system defines reusable components, styles, spacing, typography, colors, and design guidelines.

Using reusable components improves consistency and makes prototype updates easier.`,
          quiz: [
            {
              question: "What is a reusable UI component?",
              options: [
                "An interface element used in multiple places",
                "A database record",
                "A server",
                "A programming language",
              ],
              answer: "An interface element used in multiple places",
            },
            {
              question: "Which is a UI component?",
              options: ["Button", "CPU", "Router", "Hard disk"],
              answer: "Button",
            },
            {
              question: "What does a design system provide?",
              options: [
                "Reusable design rules and components",
                "Only backend code",
                "Only database tables",
                "Only network settings",
              ],
              answer: "Reusable design rules and components",
            },
            {
              question: "What is one benefit of reusable components?",
              options: [
                "Consistency",
                "More duplicated work",
                "Less organization",
                "Slower design updates",
              ],
              answer: "Consistency",
            },
            {
              question: "What can a design system include?",
              options: [
                "Typography and spacing guidelines",
                "Only server settings",
                "Only source code",
                "Only database credentials",
              ],
              answer: "Typography and spacing guidelines",
            },
          ],
        },
        {
          title: "Microinteractions and Feedback",
          content: `Microinteractions are small interface behaviors that provide feedback when users perform actions.

Examples include button states, loading indicators, form validation messages, hover effects, and confirmation messages.

Good microinteractions help users understand what is happening and whether their action was successful.

In prototypes, these interactions can be simulated to evaluate the overall user experience.`,
          quiz: [
            {
              question: "What are microinteractions?",
              options: [
                "Small interface behaviors and feedback",
                "Database operations",
                "Server processes",
                "Network cables",
              ],
              answer: "Small interface behaviors and feedback",
            },
            {
              question: "Which is a microinteraction?",
              options: [
                "Loading indicator",
                "Database server",
                "Router",
                "CPU",
              ],
              answer: "Loading indicator",
            },
            {
              question: "Why are microinteractions useful?",
              options: [
                "They provide user feedback",
                "They replace the backend",
                "They create databases",
                "They increase storage",
              ],
              answer: "They provide user feedback",
            },
            {
              question: "Which can provide confirmation?",
              options: [
                "Success message",
                "Database table",
                "Router",
                "Operating system",
              ],
              answer: "Success message",
            },
            {
              question: "Can microinteractions be simulated in prototypes?",
              options: ["Yes", "No", "Only after deployment", "Only in hardware"],
              answer: "Yes",
            },
          ],
        },
        {
          title: "Prototyping Tools",
          content: `UI/UX designers use different tools to create wireframes and interactive prototypes.

Figma is widely used for interface design and prototyping. Other tools include Adobe XD, Sketch, and similar design platforms.

The important skill is not only knowing a tool but understanding how to translate user requirements into useful interface flows.

Designers should choose tools based on project needs, collaboration requirements, and workflow.`,
          quiz: [
            {
              question: "Which tool is widely used for UI prototyping?",
              options: ["Figma", "Excel", "Git Bash", "MySQL"],
              answer: "Figma",
            },
            {
              question: "What is another prototyping tool?",
              options: ["Sketch", "Python", "PostgreSQL", "Docker"],
              answer: "Sketch",
            },
            {
              question: "What is more important than knowing one tool?",
              options: [
                "Understanding user needs and design flows",
                "Knowing every programming language",
                "Building servers",
                "Managing databases",
              ],
              answer: "Understanding user needs and design flows",
            },
            {
              question: "Why choose a prototyping tool carefully?",
              options: [
                "Tools have different workflows and collaboration features",
                "Tools change the CPU",
                "Tools replace users",
                "Tools create operating systems",
              ],
              answer:
                "Tools have different workflows and collaboration features",
            },
            {
              question: "What can prototyping tools create?",
              options: [
                "Wireframes and interactive prototypes",
                "Only databases",
                "Only servers",
                "Only network connections",
              ],
              answer: "Wireframes and interactive prototypes",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Testing and Improving Prototypes",
      description:
        "Learn how to evaluate prototypes through usability testing, feedback, and iterative design.",
      lessons: [
        {
          title: "Usability Testing with Prototypes",
          content: `Usability testing involves observing users while they attempt realistic tasks using a prototype.

The goal is to identify usability problems, confusing navigation, unclear labels, and other obstacles.

A usability test can include a task, participant, observation, questions, and analysis of results.

Designers use the findings to improve the interface before development.`,
          quiz: [
            {
              question: "What is usability testing?",
              options: [
                "Evaluating how easily users can use a product",
                "Testing server hardware",
                "Testing database storage",
                "Testing programming languages",
              ],
              answer: "Evaluating how easily users can use a product",
            },
            {
              question: "What can usability testing identify?",
              options: [
                "Confusing navigation",
                "CPU temperature",
                "Database size",
                "Network cable length",
              ],
              answer: "Confusing navigation",
            },
            {
              question: "What do participants perform during usability testing?",
              options: [
                "Realistic tasks",
                "Server maintenance",
                "Database installation",
                "Hardware repair",
              ],
              answer: "Realistic tasks",
            },
            {
              question: "What happens after usability testing?",
              options: [
                "Design can be improved using findings",
                "All prototypes are deleted",
                "The database is removed",
                "Development stops permanently",
              ],
              answer: "Design can be improved using findings",
            },
            {
              question: "What should designers observe?",
              options: [
                "User behavior and difficulties",
                "Computer brand",
                "Office furniture",
                "Keyboard color",
              ],
              answer: "User behavior and difficulties",
            },
          ],
        },
        {
          title: "Feedback and Iteration",
          content: `Design iteration means improving a design through repeated cycles of testing, feedback, and refinement.

A prototype may reveal problems that were not visible during the initial design.

Designers can change layouts, navigation, labels, interactions, or information structure based on evidence.

Iteration helps move a design from an initial idea toward a more usable solution.`,
          quiz: [
            {
              question: "What is design iteration?",
              options: [
                "Repeated improvement of a design",
                "Deleting all designs",
                "Only writing code",
                "Creating hardware",
              ],
              answer: "Repeated improvement of a design",
            },
            {
              question: "What can guide iteration?",
              options: [
                "Testing and user feedback",
                "Keyboard color",
                "CPU brand",
                "Office location",
              ],
              answer: "Testing and user feedback",
            },
            {
              question: "What can designers change during iteration?",
              options: [
                "Layout and navigation",
                "Computer hardware",
                "Network cables",
                "Power supply",
              ],
              answer: "Layout and navigation",
            },
            {
              question: "Why iterate a prototype?",
              options: [
                "To improve usability",
                "To increase file size",
                "To remove users",
                "To replace development",
              ],
              answer: "To improve usability",
            },
            {
              question: "Should a first prototype always be final?",
              options: ["No", "Yes", "Only for mobile apps", "Only for websites"],
              answer: "No",
            },
          ],
        },
        {
          title: "Accessibility in Prototypes",
          content: `Accessibility means designing products that can be used by people with different abilities.

Prototype reviews should consider readable text, sufficient contrast, clear labels, understandable navigation, and appropriate interaction states.

Designers should also consider keyboard navigation, alternative text, focus indicators, and accessible form controls when appropriate.

Considering accessibility early can prevent problems later in development.`,
          quiz: [
            {
              question: "What does accessibility mean?",
              options: [
                "Designing products usable by people with different abilities",
                "Making software faster",
                "Reducing database size",
                "Changing programming languages",
              ],
              answer:
                "Designing products usable by people with different abilities",
            },
            {
              question: "What should designers consider?",
              options: [
                "Readable text and clear labels",
                "CPU brand",
                "Server location",
                "Keyboard weight",
              ],
              answer: "Readable text and clear labels",
            },
            {
              question: "What is a focus indicator useful for?",
              options: [
                "Showing which interface element is focused",
                "Increasing storage",
                "Changing the database",
                "Testing network speed",
              ],
              answer: "Showing which interface element is focused",
            },
            {
              question: "Why consider accessibility early?",
              options: [
                "To prevent usability problems later",
                "To remove testing",
                "To increase file size",
                "To replace development",
              ],
              answer: "To prevent usability problems later",
            },
            {
              question: "Which can improve accessibility?",
              options: [
                "Clear labels",
                "Hidden navigation",
                "Very small text",
                "Unclear icons",
              ],
              answer: "Clear labels",
            },
          ],
        },
        {
          title: "Prototype Review and Handoff",
          content: `Before development begins, designers often review prototypes with stakeholders and developers.

A design handoff communicates screen layouts, components, interactions, assets, spacing, typography, and other implementation details.

Designers should make sure the prototype reflects the agreed user flow and requirements.

Good collaboration between designers and developers helps reduce misunderstandings during implementation.`,
          quiz: [
            {
              question: "What is design handoff?",
              options: [
                "Communicating design details to developers",
                "Deleting the prototype",
                "Installing a database",
                "Building computer hardware",
              ],
              answer: "Communicating design details to developers",
            },
            {
              question: "Who can participate in prototype reviews?",
              options: [
                "Designers and developers",
                "Only database servers",
                "Only hardware engineers",
                "Only network providers",
              ],
              answer: "Designers and developers",
            },
            {
              question: "What can handoff include?",
              options: [
                "Spacing and typography",
                "CPU temperature",
                "Network cable length",
                "Server electricity usage",
              ],
              answer: "Spacing and typography",
            },
            {
              question: "Why is collaboration important?",
              options: [
                "It reduces implementation misunderstandings",
                "It removes requirements",
                "It prevents testing",
                "It replaces design",
              ],
              answer: "It reduces implementation misunderstandings",
            },
            {
              question: "What should a prototype reflect?",
              options: [
                "Agreed requirements and user flows",
                "Only developer preferences",
                "Only database structure",
                "Only hardware specifications",
              ],
              answer: "Agreed requirements and user flows",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical UI/UX Prototyping",
      description:
        "Apply prototyping skills to create and evaluate a complete application experience.",
      lessons: [
        {
          title: "Mobile App Prototyping",
          content: `Mobile app prototypes represent how users move through an application on a mobile device.

Designers need to consider screen size, touch interactions, navigation patterns, content hierarchy, and accessibility.

A mobile prototype can include onboarding, login, home, search, details, settings, and other relevant screens.

The prototype should focus on the user's main tasks rather than adding unnecessary screens.`,
          quiz: [
            {
              question: "What should mobile prototypes consider?",
              options: [
                "Screen size and touch interactions",
                "Only server hardware",
                "Only databases",
                "Only source code",
              ],
              answer: "Screen size and touch interactions",
            },
            {
              question: "Which can be part of a mobile app flow?",
              options: ["Onboarding", "CPU configuration", "Router setup", "Database backup only"],
              answer: "Onboarding",
            },
            {
              question: "Why consider content hierarchy?",
              options: [
                "To help users understand important information",
                "To increase server speed",
                "To create databases",
                "To reduce hardware cost",
              ],
              answer: "To help users understand important information",
            },
            {
              question: "What should mobile prototypes focus on?",
              options: [
                "Main user tasks",
                "Unnecessary features",
                "Server configuration",
                "Database administration",
              ],
              answer: "Main user tasks",
            },
            {
              question: "What type of interaction is common on mobile devices?",
              options: ["Touch", "Ethernet cable", "Database query", "Server command"],
              answer: "Touch",
            },
          ],
        },
        {
          title: "Web Application Prototyping",
          content: `Web application prototypes show how users interact with websites and browser-based applications.

They can include navigation bars, dashboards, forms, tables, search, filters, notifications, and responsive layouts.

Responsive prototypes should consider how the interface adapts to different screen sizes.

A good web prototype connects important screens and demonstrates the main user journey.`,
          quiz: [
            {
              question: "What can a web prototype contain?",
              options: [
                "Dashboards and forms",
                "Only source code",
                "Only hardware",
                "Only databases",
              ],
              answer: "Dashboards and forms",
            },
            {
              question: "What does responsive design consider?",
              options: [
                "Different screen sizes",
                "Only server speed",
                "Only database size",
                "Only programming language",
              ],
              answer: "Different screen sizes",
            },
            {
              question: "What should a web prototype demonstrate?",
              options: [
                "Main user journey",
                "Only backend code",
                "Only server configuration",
                "Only database tables",
              ],
              answer: "Main user journey",
            },
            {
              question: "Which can be included in a dashboard prototype?",
              options: [
                "Charts and data cards",
                "CPU hardware",
                "Network cables",
                "Power supply",
              ],
              answer: "Charts and data cards",
            },
            {
              question: "Why connect screens in a prototype?",
              options: [
                "To demonstrate navigation",
                "To increase storage",
                "To replace databases",
                "To change the operating system",
              ],
              answer: "To demonstrate navigation",
            },
          ],
        },
        {
          title: "Portfolio Prototype Case Study",
          content: `A strong UI/UX portfolio case study explains the design problem, user needs, design process, prototype, testing, and final improvements.

Start by describing the problem and target users. Then create user flows and wireframes before developing the interactive prototype.

Test the prototype with realistic tasks and document the important findings.

Finally, explain the design decisions and show how feedback influenced the final prototype.`,
          quiz: [
            {
              question: "What should a UI/UX case study explain?",
              options: [
                "Problem, process, prototype, and results",
                "Only final colors",
                "Only source code",
                "Only database structure",
              ],
              answer: "Problem, process, prototype, and results",
            },
            {
              question: "What should come before the interactive prototype?",
              options: [
                "User flows and wireframes",
                "Final deployment",
                "Database deletion",
                "Server shutdown",
              ],
              answer: "User flows and wireframes",
            },
            {
              question: "Why document usability testing?",
              options: [
                "To show findings and improvements",
                "To increase file size",
                "To replace the prototype",
                "To remove user feedback",
              ],
              answer: "To show findings and improvements",
            },
            {
              question: "What should designers explain?",
              options: [
                "Important design decisions",
                "Only computer specifications",
                "Only server settings",
                "Only database passwords",
              ],
              answer: "Important design decisions",
            },
            {
              question: "Where can a prototype case study be shown?",
              options: [
                "UI/UX portfolio",
                "Only a database",
                "Only a server",
                "Only an operating system",
              ],
              answer: "UI/UX portfolio",
            },
          ],
        },
        {
          title: "Mini Project: Complete App Prototype",
          content: `Create a complete interactive prototype for a mobile or web application.

First choose a practical problem and identify the target users. Create the main user flow and basic wireframes.

Then design the important screens and connect them into an interactive prototype using a tool such as Figma.

Test the prototype with realistic tasks, identify usability problems, and improve the design.

Finally, prepare the prototype as a portfolio case study showing the problem, user flow, wireframes, prototype, testing, feedback, and final improvements.`,
          quiz: [
            {
              question: "What is the goal of the mini project?",
              options: [
                "Create a complete interactive application prototype",
                "Build a computer",
                "Create a database server",
                "Write an operating system",
              ],
              answer: "Create a complete interactive application prototype",
            },
            {
              question: "What should be created first?",
              options: [
                "Problem definition and user flow",
                "Final deployment",
                "Database backup",
                "Server configuration",
              ],
              answer: "Problem definition and user flow",
            },
            {
              question: "Which tool can be used?",
              options: ["Figma", "MySQL", "Git", "Node.js"],
              answer: "Figma",
            },
            {
              question: "What should happen after usability testing?",
              options: [
                "Improve the prototype",
                "Delete the design",
                "Stop the project",
                "Ignore the findings",
              ],
              answer: "Improve the prototype",
            },
            {
              question: "What can the final prototype become?",
              options: [
                "A UI/UX portfolio case study",
                "A database server",
                "A network router",
                "A programming language",
              ],
              answer: "A UI/UX portfolio case study",
            },
          ],
        },
      ],
    },
  ],
};

export default prototypingCourse;
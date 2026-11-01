
export const designFundamentalsCourse = {
  skill: "Design Fundamentals",
  title: "UI/UX Design Fundamentals",
  description:
    "Learn visual design principles, color theory, typography, layout, accessibility, and user-centered design.",
  duration: "1 Month",
  weeks: [
    {
      week: 1,
      title: "Introduction to UI/UX Design",
      description:
        "Understand UI, UX, design principles, and how users interact with digital products.",
      lessons: [
        {
          title: "What Is UI and UX?",
          explanation:
            "UI means User Interface. It includes visible elements such as buttons, forms, menus, and screens. UX means User Experience. It describes how easy, useful, and satisfying a product is to use. UI focuses on the interface, while UX focuses on the complete user journey.",
          example:
            "In a shopping app, the product cards and buttons are UI elements. Finding a product easily and completing checkout smoothly are parts of UX.",
          exercise:
            "Choose a mobile app you use and write down three UI elements and three things that affect its UX.",
          quiz: {
            question: "What does UX primarily focus on?",
            options: [
              "Only colors",
              "The overall user experience",
              "Only programming",
              "Computer hardware"
            ],
            answer: 1
          }
        },
        {
          title: "Understanding User-Centered Design",
          explanation:
            "User-centered design starts by understanding users, their needs, their problems, and their environment. Designers research users, create possible solutions, test them, and improve the design using feedback.",
          example:
            "Before designing a college attendance app, interview students and teachers to understand how they check attendance.",
          exercise:
            "Identify one problem students face when using a college website and suggest a design improvement.",
          quiz: {
            question: "What should guide a user-centered design?",
            options: [
              "The designer's favorite colors only",
              "The number of animations",
              "Users' needs and feedback",
              "The longest possible page"
            ],
            answer: 2
          }
        },
        {
          title: "The Design Process",
          explanation:
            "A common design process includes understanding the problem, researching users, defining requirements, generating ideas, creating prototypes, testing, and improving the solution. Designers may repeat these steps when new problems appear.",
          example:
            "For a food delivery app, a designer researches ordering problems, sketches a better checkout, creates a prototype, and tests it with users.",
          exercise:
            "Write the main design-process steps for improving your college website.",
          quiz: {
            question: "Why do designers test prototypes?",
            options: [
              "To discover usability problems",
              "To avoid user feedback",
              "To remove all content",
              "To finish without checking"
            ],
            answer: 0
          }
        },
        {
          title: "Design Principles",
          explanation:
            "Important design principles include hierarchy, contrast, alignment, proximity, repetition, and balance. These principles help people understand information and identify important actions quickly.",
          example:
            "A clearly labeled primary button with strong contrast helps users recognize the main action on a page.",
          exercise:
            "Find an app screen and identify one example each of hierarchy, contrast, and alignment.",
          quiz: {
            question: "Which principle helps users identify the most important information first?",
            options: [
              "Randomness",
              "Visual hierarchy",
              "Decoration only",
              "Unnecessary repetition"
            ],
            answer: 1
          }
        }
      ],
      assignment:
        "Choose a digital product, identify its target users, describe one user problem, and explain how three design principles could improve it."
    },
    {
      week: 2,
      title: "Color Theory and Typography",
      description:
        "Learn how color, text, spacing, and readability influence interface design.",
      lessons: [
        {
          title: "Color Theory Basics",
          explanation:
            "Color theory explains how colors relate and how combinations affect visual communication. Designers use color palettes with primary, secondary, and neutral colors to create consistent interfaces.",
          example:
            "A finance dashboard might use a neutral background, a primary blue for actions, and carefully chosen status colors.",
          exercise:
            "Create a five-color palette for a student learning app, including a primary color and neutral colors.",
          quiz: {
            question: "Why should an interface use a consistent color palette?",
            options: [
              "To make every screen unrelated",
              "To improve consistency and recognition",
              "To make text unreadable",
              "To remove visual hierarchy"
            ],
            answer: 1
          }
        },
        {
          title: "Color Contrast and Accessibility",
          explanation:
            "Contrast helps users distinguish text and interface elements from their backgrounds. Accessible design checks contrast and does not rely on color alone to communicate meaning.",
          example:
            "A form can show an error using a message and icon, rather than relying only on a red border.",
          exercise:
            "Review a website and identify one text or button whose contrast could be improved.",
          quiz: {
            question: "What is a good accessibility practice?",
            options: [
              "Use color as the only error indicator",
              "Use very low contrast for all text",
              "Combine color with clear labels or icons",
              "Remove labels from buttons"
            ],
            answer: 2
          }
        },
        {
          title: "Typography and Readability",
          explanation:
            "Typography is the selection and arrangement of text. Font choice, size, weight, line height, and line length affect readability. A clear type scale separates headings, body text, captions, and labels.",
          example:
            "A page can use a large heading, medium section titles, and comfortable body text to make information easier to scan.",
          exercise:
            "Design a simple text hierarchy with a page title, section heading, body text, and caption.",
          quiz: {
            question: "What is the main purpose of a clear type hierarchy?",
            options: [
              "To make all text identical",
              "To help users scan and understand content",
              "To hide important information",
              "To add more colors"
            ],
            answer: 1
          }
        },
        {
          title: "Spacing and Layout",
          explanation:
            "Spacing creates breathing room and helps group related content. Consistent margins, padding, grids, and alignment make interfaces easier to understand. Responsive layouts adapt to different screen sizes.",
          example:
            "A registration form uses equal spacing between fields and consistent alignment for labels and input boxes.",
          exercise:
            "Sketch a login page with aligned fields, consistent spacing, and a clearly visible submit button.",
          quiz: {
            question: "Why is consistent spacing useful?",
            options: [
              "It groups information and improves clarity",
              "It makes layouts harder to scan",
              "It removes the need for headings",
              "It guarantees every screen looks identical"
            ],
            answer: 0
          }
        }
      ],
      assignment:
        "Create a visual style guide for a learning app. Include a color palette, typography hierarchy, spacing rules, and one accessibility consideration."
    },
    {
      week: 3,
      title: "Components and Interface Design",
      description:
        "Learn reusable UI components, forms, navigation, consistency, and responsive layouts.",
      lessons: [
        {
          title: "Buttons and Interactive Components",
          explanation:
            "Interface components are reusable building blocks such as buttons, input fields, cards, tabs, and dialogs. Components should have clear purposes and predictable behavior. Interactive components may need default, hover, focus, disabled, and loading states.",
          example:
            "A submit button can show a loading state while a form is being processed and a success message after completion.",
          exercise:
            "Sketch a primary button and a secondary button. Explain when each should be used.",
          quiz: {
            question: "Why are reusable components valuable?",
            options: [
              "They make every screen inconsistent",
              "They reduce consistency",
              "They support consistent design and reuse",
              "They eliminate user testing"
            ],
            answer: 2
          }
        },
        {
          title: "Navigation and Information Architecture",
          explanation:
            "Information architecture organizes content so users can find what they need. Navigation labels should be clear, related items should be grouped, and important destinations should be easy to reach.",
          example:
            "A learning platform may organize navigation into Dashboard, Courses, Projects, and Profile.",
          exercise:
            "Create a simple navigation structure for a career guidance application.",
          quiz: {
            question: "What is the goal of good information architecture?",
            options: [
              "To make content difficult to locate",
              "To organize information so users can find it",
              "To use as many menus as possible",
              "To hide important destinations"
            ],
            answer: 1
          }
        },
        {
          title: "Forms and Error Messages",
          explanation:
            "Forms should have understandable labels, appropriate input types, and helpful validation. Error messages should explain what went wrong and how users can fix it. Preserve entered information when possible.",
          example:
            "Instead of showing 'Invalid input', a registration form can say 'Enter a valid email address'.",
          exercise:
            "Design a registration form with name, email, password, labels, and two useful validation messages.",
          quiz: {
            question: "What makes an error message helpful?",
            options: [
              "It explains the problem and possible correction",
              "It only displays an unexplained code",
              "It removes every field",
              "It blames the user"
            ],
            answer: 0
          }
        },
        {
          title: "Responsive Design",
          explanation:
            "Responsive design adapts an interface to different screen sizes and orientations. Designers consider flexible layouts, readable text, touch targets, and content priority across mobile, tablet, and desktop screens.",
          example:
            "A desktop navigation bar may become a compact menu on a mobile screen, while important content remains available.",
          exercise:
            "Sketch how a three-column course dashboard could adapt to a phone screen.",
          quiz: {
            question: "What does responsive design help an interface do?",
            options: [
              "Work only on desktop computers",
              "Use fixed layouts on every device",
              "Adapt to different screen sizes",
              "Remove mobile content"
            ],
            answer: 2
          }
        }
      ],
      assignment:
        "Design a simple course dashboard with navigation, reusable cards, a progress indicator, responsive behavior, and accessible form controls."
    },
    {
      week: 4,
      title: "Usability Testing and Final Project",
      description:
        "Learn usability testing, feedback analysis, iteration, and project presentation.",
      lessons: [
        {
          title: "Introduction to Usability Testing",
          explanation:
            "Usability testing asks representative users to complete realistic tasks while a designer observes where they succeed, hesitate, or become confused. The aim is to discover problems rather than prove that a design is perfect.",
          example:
            "Ask a student to find a course and start its first lesson while you observe without guiding them.",
          exercise:
            "Write three tasks you could ask a user to complete on a student dashboard.",
          quiz: {
            question: "What is the main purpose of usability testing?",
            options: [
              "To confirm every assumption without evidence",
              "To identify problems users experience",
              "To test only visual colors",
              "To avoid making improvements"
            ],
            answer: 1
          }
        },
        {
          title: "Collecting and Analyzing Feedback",
          explanation:
            "Feedback can include user comments, task completion, errors, hesitation, and recurring difficulties. Look for patterns across observations and prioritize problems by their impact on users.",
          example:
            "If several users cannot find the Save button, its placement or label may need improvement.",
          exercise:
            "Write three possible usability observations and group them into high, medium, or low priority.",
          quiz: {
            question: "What should designers do with repeated usability problems?",
            options: [
              "Ignore them",
              "Remove all features",
              "Investigate and prioritize them",
              "Blame the users"
            ],
            answer: 2
          }
        },
        {
          title: "Prototypes and Iteration",
          explanation:
            "A prototype represents how a design may look or behave. Low-fidelity prototypes use simple sketches or wireframes; high-fidelity prototypes provide more realistic visuals and interactions. Iteration means improving a design through repeated testing and refinement.",
          example:
            "Start with a paper checkout sketch, test the flow, and then create a more detailed interactive prototype.",
          exercise:
            "List three improvements you would make after testing a confusing course-enrollment screen.",
          quiz: {
            question: "What does design iteration mean?",
            options: [
              "Repeating improvements based on feedback",
              "Never changing the first design",
              "Publishing without testing",
              "Adding features without a reason"
            ],
            answer: 0
          }
        },
        {
          title: "Portfolio and Design Presentation",
          explanation:
            "A design case study explains the problem, target users, research, constraints, design decisions, prototype, testing, and improvements. A good portfolio shows the reasoning behind the solution rather than only polished screenshots.",
          example:
            "Present a student dashboard redesign with the original problem, sketches, final screens, usability findings, and lessons learned.",
          exercise:
            "Outline a portfolio case study for one interface you designed during this course.",
          quiz: {
            question: "What should a useful design case study explain?",
            options: [
              "Only the designer's name",
              "Only decorative images",
              "Only the final screen",
              "The problem, process, decisions, and results"
            ],
            answer: 3
          }
        }
      ],
      assignment:
        "Final mini project: Design a student learning dashboard. Include user needs, a simple user flow, wireframes, a visual style guide, a polished interface prototype, usability feedback, and a short portfolio case study."
    }
  ]
};

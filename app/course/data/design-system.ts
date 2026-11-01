const designSystemCourse = {
  title: "Design Systems",
  description:
    "Learn UI/UX design systems, reusable components, design tokens, typography, colors, spacing, accessibility, documentation, and practical design system creation.",

  weeks: [
    {
      title: "Week 1: Design System Fundamentals",
      description:
        "Understand what design systems are, why they are useful, and the basic principles behind them.",
      lessons: [
        {
          title: "Introduction to Design Systems",
          content: `A design system is a collection of reusable design components, patterns, guidelines, and rules used to create consistent digital products.

A design system can include buttons, forms, navigation, colors, typography, spacing, icons, and interaction patterns.

It helps designers and developers work with a shared visual and interaction language.

Design systems are especially useful for products with many screens or multiple teams working on the same product.`,
          quiz: [
            {
              question: "What is a design system?",
              options: [
                "A collection of reusable design components and guidelines",
                "A programming language",
                "A database",
                "A server",
              ],
              answer:
                "A collection of reusable design components and guidelines",
            },
            {
              question: "What can a design system contain?",
              options: [
                "Buttons and typography",
                "Only source code",
                "Only databases",
                "Only server settings",
              ],
              answer: "Buttons and typography",
            },
            {
              question: "What does a design system help improve?",
              options: [
                "Consistency",
                "CPU speed",
                "Database storage",
                "Internet bandwidth",
              ],
              answer: "Consistency",
            },
            {
              question: "Who can use a design system?",
              options: [
                "Designers and developers",
                "Only database administrators",
                "Only network engineers",
                "Only hardware engineers",
              ],
              answer: "Designers and developers",
            },
            {
              question: "Why are design systems useful for large products?",
              options: [
                "They provide reusable patterns",
                "They replace all development",
                "They remove user research",
                "They eliminate testing",
              ],
              answer: "They provide reusable patterns",
            },
          ],
        },
        {
          title: "Design System Principles",
          content: `A good design system should be consistent, reusable, flexible, accessible, and easy to understand.

Consistency means similar components should behave and look similar across the product.

Reusability reduces duplicated design work. Flexibility allows components to support different situations without creating unnecessary variations.

Accessibility ensures that components can be used by people with different abilities.`,
          quiz: [
            {
              question: "Which is an important design system principle?",
              options: [
                "Consistency",
                "Randomness",
                "Duplication",
                "Complexity",
              ],
              answer: "Consistency",
            },
            {
              question: "What does reusability reduce?",
              options: [
                "Duplicated design work",
                "User feedback",
                "Accessibility",
                "Consistency",
              ],
              answer: "Duplicated design work",
            },
            {
              question: "Why should a design system be flexible?",
              options: [
                "To support different use cases",
                "To create random designs",
                "To remove components",
                "To avoid documentation",
              ],
              answer: "To support different use cases",
            },
            {
              question: "What does accessibility support?",
              options: [
                "People with different abilities",
                "Only developers",
                "Only designers",
                "Only administrators",
              ],
              answer: "People with different abilities",
            },
            {
              question: "What should a good design system avoid?",
              options: [
                "Unnecessary variations",
                "Reusable components",
                "Clear guidelines",
                "Accessibility",
              ],
              answer: "Unnecessary variations",
            },
          ],
        },
        {
          title: "Components and Patterns",
          content: `Components are reusable interface elements such as buttons, inputs, cards, checkboxes, dropdowns, and navigation bars.

Patterns describe how components work together to solve common interface problems.

For example, a login form can be considered a pattern made from input fields, labels, buttons, validation messages, and supporting text.

Using components and patterns makes interfaces easier to design and maintain.`,
          quiz: [
            {
              question: "Which is a UI component?",
              options: ["Button", "Database", "Server", "Router"],
              answer: "Button",
            },
            {
              question: "What is a design pattern?",
              options: [
                "A reusable solution for a common interface problem",
                "A database table",
                "A programming language",
                "A server configuration",
              ],
              answer:
                "A reusable solution for a common interface problem",
            },
            {
              question: "What can a login form contain?",
              options: [
                "Inputs and buttons",
                "Only images",
                "Only databases",
                "Only servers",
              ],
              answer: "Inputs and buttons",
            },
            {
              question: "Why use reusable components?",
              options: [
                "To improve consistency and efficiency",
                "To increase duplication",
                "To remove guidelines",
                "To prevent testing",
              ],
              answer: "To improve consistency and efficiency",
            },
            {
              question: "What do patterns describe?",
              options: [
                "How components work together",
                "How servers are installed",
                "How databases are backed up",
                "How hardware is assembled",
              ],
              answer: "How components work together",
            },
          ],
        },
        {
          title: "Design System vs Style Guide",
          content: `A style guide mainly documents visual rules such as colors, typography, logos, and basic visual standards.

A design system is broader. It can include visual styles, reusable components, interaction patterns, accessibility guidance, content rules, and implementation information.

A style guide can be part of a larger design system.

Understanding this difference helps teams decide what should be documented and reused.`,
          quiz: [
            {
              question: "What does a style guide mainly describe?",
              options: [
                "Visual design rules",
                "Database architecture",
                "Server configuration",
                "Programming syntax",
              ],
              answer: "Visual design rules",
            },
            {
              question: "Which is broader?",
              options: ["Design system", "Style guide", "Color palette", "Font list"],
              answer: "Design system",
            },
            {
              question: "Can a style guide be part of a design system?",
              options: ["Yes", "No", "Never", "Only for hardware"],
              answer: "Yes",
            },
            {
              question: "What can a design system include?",
              options: [
                "Components and interaction patterns",
                "Only colors",
                "Only logos",
                "Only fonts",
              ],
              answer: "Components and interaction patterns",
            },
            {
              question: "Why document a design system?",
              options: [
                "To help teams create consistent experiences",
                "To increase file size",
                "To replace development",
                "To remove user research",
              ],
              answer: "To help teams create consistent experiences",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Visual Design Foundations",
      description:
        "Learn colors, typography, spacing, grids, icons, and other foundations used in design systems.",
      lessons: [
        {
          title: "Color Systems",
          content: `A color system defines how colors are selected and used throughout a product.

It can include primary colors, secondary colors, neutral colors, semantic colors, and states such as success, warning, and error.

Colors should have clear purposes rather than being selected randomly.

A good color system also considers sufficient contrast and accessibility.`,
          quiz: [
            {
              question: "What does a color system define?",
              options: [
                "How colors are used across a product",
                "How servers operate",
                "How databases are stored",
                "How code is compiled",
              ],
              answer: "How colors are used across a product",
            },
            {
              question: "Which is a semantic color?",
              options: ["Error", "Random", "Unused", "Temporary"],
              answer: "Error",
            },
            {
              question: "What does a warning color communicate?",
              options: [
                "A warning or caution state",
                "A database",
                "A server",
                "A programming language",
              ],
              answer: "A warning or caution state",
            },
            {
              question: "Why is color contrast important?",
              options: [
                "For readability and accessibility",
                "For database speed",
                "For server performance",
                "For source code size",
              ],
              answer: "For readability and accessibility",
            },
            {
              question: "Should colors be used randomly?",
              options: ["No", "Yes", "Always", "Only in mobile apps"],
              answer: "No",
            },
          ],
        },
        {
          title: "Typography System",
          content: `A typography system defines how text is displayed consistently across a product.

It can include font families, font sizes, weights, line heights, and text styles for headings, body text, labels, captions, and other content.

A clear hierarchy helps users understand which information is more important.

Typography should remain readable across different screen sizes and interface contexts.`,
          quiz: [
            {
              question: "What does a typography system define?",
              options: [
                "Text styles and hierarchy",
                "Database tables",
                "Server settings",
                "Network protocols",
              ],
              answer: "Text styles and hierarchy",
            },
            {
              question: "Which is part of typography?",
              options: ["Font size", "CPU speed", "Database size", "Network bandwidth"],
              answer: "Font size",
            },
            {
              question: "What does typography hierarchy help users understand?",
              options: [
                "Information importance",
                "Server location",
                "Database structure",
                "Programming syntax",
              ],
              answer: "Information importance",
            },
            {
              question: "Which can be a text style?",
              options: ["Heading", "Router", "Server", "Database"],
              answer: "Heading",
            },
            {
              question: "What should typography prioritize?",
              options: [
                "Readability",
                "Randomness",
                "Complexity",
                "Inconsistency",
              ],
              answer: "Readability",
            },
          ],
        },
        {
          title: "Spacing and Grid Systems",
          content: `Spacing systems define consistent distances between interface elements.

A grid system helps organize content and align elements across screens.

Design systems often use a spacing scale so that margins, padding, and gaps follow predictable values.

Consistent spacing makes interfaces easier to scan and gives layouts a more organized appearance.`,
          quiz: [
            {
              question: "What does a spacing system define?",
              options: [
                "Consistent distances between elements",
                "Database size",
                "Server speed",
                "Programming syntax",
              ],
              answer: "Consistent distances between elements",
            },
            {
              question: "What does a grid help with?",
              options: [
                "Alignment and layout",
                "Database security",
                "Server configuration",
                "Source code compilation",
              ],
              answer: "Alignment and layout",
            },
            {
              question: "Why use a spacing scale?",
              options: [
                "To maintain consistency",
                "To create random gaps",
                "To remove components",
                "To increase file size",
              ],
              answer: "To maintain consistency",
            },
            {
              question: "Where can spacing be used?",
              options: [
                "Margins and padding",
                "Only databases",
                "Only servers",
                "Only source code",
              ],
              answer: "Margins and padding",
            },
            {
              question: "What can consistent spacing improve?",
              options: [
                "Visual organization",
                "CPU speed",
                "Network speed",
                "Database storage",
              ],
              answer: "Visual organization",
            },
          ],
        },
        {
          title: "Icons and Visual Assets",
          content: `Icons are visual symbols that communicate actions, objects, or information.

A design system should define rules for icon size, style, spacing, alignment, and usage.

Icons should be understandable and should not create confusion when their meaning is unclear.

When icons are used with text labels, designers should maintain consistent alignment and spacing.`,
          quiz: [
            {
              question: "What can icons communicate?",
              options: [
                "Actions or information",
                "Database structure",
                "Server speed",
                "Programming syntax",
              ],
              answer: "Actions or information",
            },
            {
              question: "What should an icon system define?",
              options: [
                "Size and style",
                "Database passwords",
                "Server location",
                "CPU speed",
              ],
              answer: "Size and style",
            },
            {
              question: "What should designers avoid?",
              options: [
                "Confusing icon meanings",
                "Consistent icons",
                "Clear labels",
                "Consistent spacing",
              ],
              answer: "Confusing icon meanings",
            },
            {
              question: "What should remain consistent when icons have labels?",
              options: [
                "Alignment and spacing",
                "Server settings",
                "Database structure",
                "Programming language",
              ],
              answer: "Alignment and spacing",
            },
            {
              question: "Why use an icon system?",
              options: [
                "To maintain visual consistency",
                "To replace all text",
                "To create databases",
                "To improve CPU performance",
              ],
              answer: "To maintain visual consistency",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Components and Documentation",
      description:
        "Learn how to build reusable components, define states, document usage, and maintain consistency.",
      lessons: [
        {
          title: "Buttons and Form Components",
          content: `Buttons and form controls are common components in a design system.

A button system can define variants such as primary, secondary, destructive, and disabled states.

Form components can include text fields, dropdowns, checkboxes, radio buttons, and validation messages.

Each component should have clear usage rules and interaction states.`,
          quiz: [
            {
              question: "Which is a common design system component?",
              options: ["Button", "Database", "Router", "Server"],
              answer: "Button",
            },
            {
              question: "What can a button system define?",
              options: [
                "Different button variants and states",
                "Database structure",
                "Server hardware",
                "Network routing",
              ],
              answer: "Different button variants and states",
            },
            {
              question: "Which is a form component?",
              options: ["Text field", "CPU", "Router", "Database"],
              answer: "Text field",
            },
            {
              question: "What can form components include?",
              options: [
                "Validation messages",
                "Server cables",
                "Operating systems",
                "Network switches",
              ],
              answer: "Validation messages",
            },
            {
              question: "Why define component states?",
              options: [
                "To provide consistent behavior",
                "To increase duplication",
                "To remove accessibility",
                "To avoid documentation",
              ],
              answer: "To provide consistent behavior",
            },
          ],
        },
        {
          title: "Component States and Variants",
          content: `Components can have different states depending on what the user is doing.

A button may have default, hover, focus, pressed, disabled, and loading states.

Variants allow a component to support different purposes, such as primary and secondary buttons.

Clearly defining states and variants helps designers and developers create predictable interfaces.`,
          quiz: [
            {
              question: "Which is a button state?",
              options: ["Disabled", "Database", "Server", "Router"],
              answer: "Disabled",
            },
            {
              question: "What is a variant?",
              options: [
                "A version of a component for a different purpose",
                "A database record",
                "A server setting",
                "A programming language",
              ],
              answer:
                "A version of a component for a different purpose",
            },
            {
              question: "Which is a button state?",
              options: ["Hover", "Database", "CPU", "Router"],
              answer: "Hover",
            },
            {
              question: "Why define component states?",
              options: [
                "To make behavior predictable",
                "To create random interactions",
                "To remove usability",
                "To increase duplication",
              ],
              answer: "To make behavior predictable",
            },
            {
              question: "Which can be a button variant?",
              options: ["Primary", "Database", "Server", "Network"],
              answer: "Primary",
            },
          ],
        },
        {
          title: "Documentation and Usage Guidelines",
          content: `Documentation explains how components should be used.

Good documentation can include component purpose, anatomy, variants, states, usage examples, accessibility requirements, and do-and-don't guidance.

Documentation creates a shared reference for designers and developers.

It also helps new team members understand the system quickly.`,
          quiz: [
            {
              question: "What is the purpose of component documentation?",
              options: [
                "Explain how components should be used",
                "Create databases",
                "Configure servers",
                "Write operating systems",
              ],
              answer: "Explain how components should be used",
            },
            {
              question: "What can documentation include?",
              options: [
                "Usage examples",
                "Database passwords",
                "Server hardware",
                "Network cables",
              ],
              answer: "Usage examples",
            },
            {
              question: "Why document accessibility requirements?",
              options: [
                "To help create inclusive components",
                "To increase file size",
                "To remove testing",
                "To replace developers",
              ],
              answer: "To help create inclusive components",
            },
            {
              question: "Who can use design system documentation?",
              options: [
                "Designers and developers",
                "Only database administrators",
                "Only network engineers",
                "Only hardware engineers",
              ],
              answer: "Designers and developers",
            },
            {
              question: "What does documentation provide?",
              options: [
                "A shared reference",
                "A database server",
                "A network connection",
                "A programming language",
              ],
              answer: "A shared reference",
            },
          ],
        },
        {
          title: "Design Tokens",
          content: `Design tokens are named values that store reusable design decisions.

Examples include color values, spacing values, font sizes, border radii, shadows, and other visual properties.

Instead of manually changing the same value in many places, a team can update a token and apply the change consistently.

Tokens can help connect design tools and development code.`,
          quiz: [
            {
              question: "What are design tokens?",
              options: [
                "Named reusable design values",
                "Database records",
                "Server configurations",
                "Programming languages",
              ],
              answer: "Named reusable design values",
            },
            {
              question: "Which can be a design token?",
              options: [
                "Color value",
                "Database table",
                "CPU speed",
                "Network cable",
              ],
              answer: "Color value",
            },
            {
              question: "What can tokens help maintain?",
              options: [
                "Consistency",
                "Randomness",
                "Duplication",
                "Unclear layouts",
              ],
              answer: "Consistency",
            },
            {
              question: "What can happen when a shared token changes?",
              options: [
                "The related design values can update consistently",
                "The database is deleted",
                "The server shuts down",
                "The application is removed",
              ],
              answer:
                "The related design values can update consistently",
            },
            {
              question: "Which is another example of a design token?",
              options: [
                "Spacing value",
                "Router",
                "Database",
                "CPU",
              ],
              answer: "Spacing value",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Design System Development",
      description:
        "Apply design system concepts to create, test, document, and maintain a practical UI/UX system.",
      lessons: [
        {
          title: "Accessibility in Design Systems",
          content: `Accessibility should be built into a design system rather than treated as an afterthought.

Components should consider keyboard interaction, focus states, readable text, color contrast, clear labels, and understandable feedback.

Accessible components allow teams to create more inclusive interfaces consistently.

Accessibility guidelines should be documented so designers and developers can apply them correctly.`,
          quiz: [
            {
              question: "When should accessibility be considered?",
              options: [
                "During design system development",
                "Only after release",
                "Never",
                "Only during database design",
              ],
              answer: "During design system development",
            },
            {
              question: "Which is an accessibility consideration?",
              options: [
                "Keyboard interaction",
                "Database size",
                "Server speed",
                "CPU brand",
              ],
              answer: "Keyboard interaction",
            },
            {
              question: "Why define accessible components?",
              options: [
                "To create more inclusive interfaces",
                "To increase duplication",
                "To remove testing",
                "To make navigation confusing",
              ],
              answer: "To create more inclusive interfaces",
            },
            {
              question: "What should be documented?",
              options: [
                "Accessibility guidelines",
                "Database passwords",
                "Server electricity usage",
                "Hardware weight",
              ],
              answer: "Accessibility guidelines",
            },
            {
              question: "Which can improve accessibility?",
              options: [
                "Sufficient color contrast",
                "Very small text",
                "Hidden focus states",
                "Unclear labels",
              ],
              answer: "Sufficient color contrast",
            },
          ],
        },
        {
          title: "Design System Governance",
          content: `Governance defines how a design system is maintained and improved over time.

Teams may establish rules for proposing new components, reviewing changes, managing versions, and removing outdated patterns.

Good governance prevents the system from becoming inconsistent or difficult to maintain.

Designers and developers should collaborate when making important changes to shared components.`,
          quiz: [
            {
              question: "What is design system governance?",
              options: [
                "Rules for maintaining and improving the system",
                "A programming language",
                "A database",
                "A server",
              ],
              answer:
                "Rules for maintaining and improving the system",
            },
            {
              question: "What can governance define?",
              options: [
                "How changes are reviewed",
                "CPU speed",
                "Database storage",
                "Network bandwidth",
              ],
              answer: "How changes are reviewed",
            },
            {
              question: "Why is governance useful?",
              options: [
                "To maintain consistency",
                "To create random components",
                "To remove documentation",
                "To prevent collaboration",
              ],
              answer: "To maintain consistency",
            },
            {
              question: "Who should collaborate on major component changes?",
              options: [
                "Designers and developers",
                "Only database administrators",
                "Only hardware engineers",
                "Only users",
              ],
              answer: "Designers and developers",
            },
            {
              question: "What can governance manage?",
              options: [
                "Versions and component changes",
                "Server electricity",
                "Keyboard size",
                "Office furniture",
              ],
              answer: "Versions and component changes",
            },
          ],
        },
        {
          title: "Maintaining and Scaling a Design System",
          content: `As a product grows, its design system also needs to evolve.

Teams should regularly review components, remove outdated patterns, identify duplication, and add new components only when there is a clear need.

A scalable design system should support multiple screens, platforms, and teams without becoming unnecessarily complex.

Regular maintenance keeps the system useful and consistent.`,
          quiz: [
            {
              question: "Why does a design system need maintenance?",
              options: [
                "Products and requirements change over time",
                "Databases stop working",
                "Servers become smaller",
                "Programming languages disappear",
              ],
              answer: "Products and requirements change over time",
            },
            {
              question: "What should teams remove?",
              options: [
                "Outdated patterns",
                "Useful components",
                "Accessibility rules",
                "Documentation",
              ],
              answer: "Outdated patterns",
            },
            {
              question: "When should a new component be added?",
              options: [
                "When there is a clear need",
                "Whenever someone wants a different color",
                "Randomly",
                "For every screen",
              ],
              answer: "When there is a clear need",
            },
            {
              question: "What should a scalable system support?",
              options: [
                "Multiple screens and teams",
                "Only one button",
                "Only one user",
                "Only one screen",
              ],
              answer: "Multiple screens and teams",
            },
            {
              question: "What can regular maintenance prevent?",
              options: [
                "Inconsistency and unnecessary complexity",
                "User research",
                "Accessibility",
                "Documentation",
              ],
              answer: "Inconsistency and unnecessary complexity",
            },
          ],
        },
        {
          title: "Mini Project: Build a UI Design System",
          content: `For the final project, create a small design system for a web or mobile application.

Start by defining the product, users, and visual direction. Create foundations for colors, typography, spacing, and icons.

Then create reusable components such as buttons, inputs, cards, navigation elements, and form controls.

Define component variants and states, document usage guidelines, and include accessibility considerations.

Finally, use the design system to build several application screens and show how the same components create a consistent experience.`,
          quiz: [
            {
              question: "What is the goal of the mini project?",
              options: [
                "Build a practical UI design system",
                "Build a database server",
                "Create an operating system",
                "Configure a network",
              ],
              answer: "Build a practical UI design system",
            },
            {
              question: "What should be defined first?",
              options: [
                "Product and visual direction",
                "Database password",
                "Server hardware",
                "Network configuration",
              ],
              answer: "Product and visual direction",
            },
            {
              question: "Which can be a foundation of the system?",
              options: [
                "Colors and typography",
                "Database tables",
                "Server cables",
                "CPU architecture",
              ],
              answer: "Colors and typography",
            },
            {
              question: "What should reusable components include?",
              options: [
                "Variants and states",
                "Only colors",
                "Only images",
                "Only source code",
              ],
              answer: "Variants and states",
            },
            {
              question: "What should the final screens demonstrate?",
              options: [
                "Consistent use of the design system",
                "Random visual styles",
                "Different components everywhere",
                "No reusable elements",
              ],
              answer: "Consistent use of the design system",
            },
          ],
        },
      ],
    },
  ],
};

export default designSystemCourse;

const accessibilityCourse = {
  title: "Accessibility",
  description:
    "Learn UI/UX accessibility principles, inclusive design, WCAG guidelines, accessible colors, typography, navigation, forms, and practical accessibility testing.",

  weeks: [
    {
      title: "Week 1: Accessibility Fundamentals",
      description:
        "Understand accessibility and the principles of inclusive design.",
      lessons: [
        {
          title: "Introduction to Accessibility",
          content: `Accessibility means designing digital products that people with different abilities can use.

In UI/UX, accessibility helps users interact with websites and applications regardless of visual, hearing, motor, or cognitive limitations.

Important areas include:
- Visual accessibility
- Hearing accessibility
- Motor accessibility
- Cognitive accessibility

Example: Adding alternative text to an image helps users who use screen readers understand its content.`,
          quiz: [
            {
              question: "What is accessibility in UI/UX?",
              options: [
                "Making products usable by people with different abilities",
                "Adding animations",
                "Using only bright colors",
                "Increasing image size",
              ],
              answer: "Making products usable by people with different abilities",
            },
            {
              question: "Which users benefit from screen readers?",
              options: [
                "Users with visual impairments",
                "Only developers",
                "Only designers",
                "Users with fast internet",
              ],
              answer: "Users with visual impairments",
            },
            {
              question: "What is inclusive design?",
              options: [
                "Designing for a wide range of users",
                "Designing only for experts",
                "Using complex layouts",
                "Removing navigation",
              ],
              answer: "Designing for a wide range of users",
            },
            {
              question: "Which is a type of accessibility?",
              options: [
                "Visual accessibility",
                "Animation speed",
                "Image compression",
                "Database access",
              ],
              answer: "Visual accessibility",
            },
            {
              question: "Why is accessibility important?",
              options: [
                "It makes products usable by more people",
                "It removes all design elements",
                "It increases code length",
                "It prevents user feedback",
              ],
              answer: "It makes products usable by more people",
            },
          ],
        },
        {
          title: "Types of Disabilities and User Needs",
          content: `Users may experience different types of disabilities that affect how they interact with digital products.

Common categories include:

- Visual: blindness, low vision, and color vision differences.
- Hearing: partial or complete hearing loss.
- Motor: difficulty using a mouse or keyboard.
- Cognitive: challenges with memory, attention, or information processing.

Designers should consider different interaction methods and avoid assuming that every user interacts with a product in the same way.`,
          quiz: [
            {
              question: "Which disability can affect mouse usage?",
              options: [
                "Motor disability",
                "Hearing disability",
                "Color preference",
                "None of these",
              ],
              answer: "Motor disability",
            },
            {
              question: "Which users may benefit from captions?",
              options: [
                "Users with hearing impairments",
                "Only programmers",
                "Only designers",
                "Users with slow computers",
              ],
              answer: "Users with hearing impairments",
            },
            {
              question: "Color vision differences mainly affect which area?",
              options: [
                "Visual accessibility",
                "Database design",
                "Server performance",
                "File storage",
              ],
              answer: "Visual accessibility",
            },
            {
              question: "What should designers consider?",
              options: [
                "Different user needs and abilities",
                "Only their own preferences",
                "Only mobile users",
                "Only advanced users",
              ],
              answer: "Different user needs and abilities",
            },
            {
              question: "Which users may need keyboard navigation?",
              options: [
                "Users who cannot operate a mouse easily",
                "Only users with large screens",
                "Only developers",
                "Users with fast internet",
              ],
              answer: "Users who cannot operate a mouse easily",
            },
          ],
        },
        {
          title: "Principles of Inclusive Design",
          content: `Inclusive design considers the needs of people with different abilities, backgrounds, and experiences.

Important practices:
- Provide multiple ways to interact.
- Use clear and understandable language.
- Make important information easy to find.
- Avoid relying only on color to communicate meaning.
- Keep layouts predictable and consistent.

Example: A form should show both a red border and a text message when an input contains an error.`,
          quiz: [
            {
              question: "What is the main goal of inclusive design?",
              options: [
                "Support a diverse range of users",
                "Use more animations",
                "Create complex interfaces",
                "Limit user interaction",
              ],
              answer: "Support a diverse range of users",
            },
            {
              question: "How should form errors be communicated?",
              options: [
                "Using color and clear text",
                "Using color only",
                "Using animation only",
                "Hiding the error",
              ],
              answer: "Using color and clear text",
            },
            {
              question: "Which improves inclusive design?",
              options: [
                "Clear language",
                "Unclear icons",
                "Small text",
                "Inconsistent layouts",
              ],
              answer: "Clear language",
            },
            {
              question: "Why provide multiple interaction methods?",
              options: [
                "To support different user needs",
                "To make the page confusing",
                "To remove navigation",
                "To reduce information",
              ],
              answer: "To support different user needs",
            },
            {
              question: "Which is an inclusive design practice?",
              options: [
                "Consistent navigation",
                "Color-only instructions",
                "Hidden labels",
                "Unclear error messages",
              ],
              answer: "Consistent navigation",
            },
          ],
        },
        {
          title: "Introduction to WCAG Guidelines",
          content: `WCAG stands for Web Content Accessibility Guidelines. It provides recommendations for making web content accessible.

WCAG is organized around four principles called POUR:

- Perceivable: Information must be available to users through their senses.
- Operable: Interface controls must be usable.
- Understandable: Information and interactions should be clear.
- Robust: Content should work with different assistive technologies.

WCAG conformance levels are A, AA, and AAA. Level AA is a common target for many web projects.`,
          quiz: [
            {
              question: "What does WCAG stand for?",
              options: [
                "Web Content Accessibility Guidelines",
                "Web Creative Application Guide",
                "Website Content Animation Group",
                "World Computer Access Guide",
              ],
              answer: "Web Content Accessibility Guidelines",
            },
            {
              question: "How many POUR principles are there?",
              options: ["Four", "Two", "Three", "Five"],
              answer: "Four",
            },
            {
              question: "What does Operable mean?",
              options: [
                "Interface controls can be used",
                "Content is colorful",
                "Images are compressed",
                "Pages load animations",
              ],
              answer: "Interface controls can be used",
            },
            {
              question: "Which is a WCAG conformance level?",
              options: ["AA", "HTML", "CSS", "HTTP"],
              answer: "AA",
            },
            {
              question: "What does Robust focus on?",
              options: [
                "Compatibility with assistive technologies",
                "Decorative animations",
                "Image colors",
                "Font decoration",
              ],
              answer: "Compatibility with assistive technologies",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Accessible Visual Design",
      description:
        "Learn how to create accessible colors, typography, layouts, and visual elements.",
      lessons: [
        {
          title: "Color Contrast and Color Usage",
          content: `Color contrast is the difference in brightness between text and its background.

Good contrast makes content easier to read.

Important practices:
- Use sufficient contrast between text and backgrounds.
- Do not communicate information using color alone.
- Test color combinations with contrast checkers.
- Use text labels or icons alongside colors.

WCAG 2.2 AA generally requires a contrast ratio of 4.5:1 for normal text and 3:1 for large text.`,
          quiz: [
            {
              question: "What does color contrast measure?",
              options: [
                "Difference between foreground and background colors",
                "Image resolution",
                "Font file size",
                "Animation speed",
              ],
              answer: "Difference between foreground and background colors",
            },
            {
              question: "What is the WCAG AA contrast ratio for normal text?",
              options: ["4.5:1", "1:1", "2:1", "10:1"],
              answer: "4.5:1",
            },
            {
              question: "Why should color not be the only indicator?",
              options: [
                "Some users may not distinguish certain colors",
                "Colors increase loading time",
                "Colors prevent navigation",
                "Colors reduce screen size",
              ],
              answer: "Some users may not distinguish certain colors",
            },
            {
              question: "Which tool can check color contrast?",
              options: [
                "Contrast checker",
                "Video editor",
                "Code formatter",
                "File manager",
              ],
              answer: "Contrast checker",
            },
            {
              question: "What contrast ratio is generally required for large text at WCAG AA?",
              options: ["3:1", "1:1", "2:1", "7:1"],
              answer: "3:1",
            },
          ],
        },
        {
          title: "Accessible Typography",
          content: `Accessible typography helps users read and understand content.

Good typography practices include:
- Use readable font styles.
- Maintain appropriate text size.
- Provide sufficient line spacing.
- Avoid long blocks of uppercase text.
- Allow users to resize text.
- Use clear headings to organize content.

Text should remain readable when users increase its size or change spacing settings.`,
          quiz: [
            {
              question: "What is the purpose of accessible typography?",
              options: [
                "Make text easier to read",
                "Make text decorative only",
                "Reduce page content",
                "Add more animations",
              ],
              answer: "Make text easier to read",
            },
            {
              question: "Which improves text readability?",
              options: [
                "Appropriate line spacing",
                "Very small fonts",
                "Unclear font styles",
                "Long uppercase paragraphs",
              ],
              answer: "Appropriate line spacing",
            },
            {
              question: "Why use headings?",
              options: [
                "To organize content clearly",
                "To hide information",
                "To add decoration only",
                "To replace all text",
              ],
              answer: "To organize content clearly",
            },
            {
              question: "What should happen when text is resized?",
              options: [
                "Content should remain usable",
                "Text should disappear",
                "The page should become unreadable",
                "Navigation should be removed",
              ],
              answer: "Content should remain usable",
            },
            {
              question: "Which should generally be avoided?",
              options: [
                "Long blocks of uppercase text",
                "Clear headings",
                "Readable font sizes",
                "Consistent typography",
              ],
              answer: "Long blocks of uppercase text",
            },
          ],
        },
        {
          title: "Accessible Images and Icons",
          content: `Images and icons should communicate information clearly to all users.

Important practices:
- Add meaningful alternative text to informative images.
- Use empty alt text for decorative images.
- Provide accessible names for icon-only buttons.
- Avoid using images of text when actual text is possible.
- Make icons understandable and consistent.

Example: A search icon button should have an accessible name such as "Search".`,
          quiz: [
            {
              question: "What is alt text?",
              options: [
                "Text describing an image",
                "A CSS animation",
                "A database field",
                "A font style",
              ],
              answer: "Text describing an image",
            },
            {
              question: "What should decorative images generally use?",
              options: [
                "Empty alt text",
                "Long descriptions",
                "A hidden heading",
                "A clickable link",
              ],
              answer: "Empty alt text",
            },
            {
              question: "What should an icon-only button have?",
              options: [
                "An accessible name",
                "Only a background image",
                "No label",
                "A decorative border",
              ],
              answer: "An accessible name",
            },
            {
              question: "What should alternative text describe?",
              options: [
                "The purpose or meaningful content of the image",
                "The image file size",
                "The CSS class name",
                "The screen resolution",
              ],
              answer: "The purpose or meaningful content of the image",
            },
            {
              question: "Which is better than an image containing text?",
              options: [
                "Actual selectable text",
                "A larger image",
                "A decorative icon",
                "A background animation",
              ],
              answer: "Actual selectable text",
            },
          ],
        },
        {
          title: "Accessible Layout and Spacing",
          content: `Accessible layouts help users understand and navigate a page.

Important practices:
- Maintain consistent page structure.
- Use clear visual grouping.
- Avoid unnecessary clutter.
- Keep enough spacing between interactive controls.
- Support zoom and responsive layouts.
- Do not rely only on visual position to communicate relationships.

A well-organized layout reduces confusion and makes content easier to understand.`,
          quiz: [
            {
              question: "What does a consistent layout improve?",
              options: [
                "Navigation and understanding",
                "Database speed",
                "Image compression",
                "Server memory",
              ],
              answer: "Navigation and understanding",
            },
            {
              question: "Why is spacing between controls important?",
              options: [
                "It helps users interact with controls",
                "It removes all content",
                "It changes the website language",
                "It prevents text resizing",
              ],
              answer: "It helps users interact with controls",
            },
            {
              question: "What should responsive layouts support?",
              options: [
                "Different screen sizes and zoom",
                "Only desktop screens",
                "Only one browser",
                "Fixed text size",
              ],
              answer: "Different screen sizes and zoom",
            },
            {
              question: "What should designers avoid?",
              options: [
                "Unnecessary visual clutter",
                "Clear grouping",
                "Consistent structure",
                "Readable spacing",
              ],
              answer: "Unnecessary visual clutter",
            },
            {
              question: "Why use visual grouping?",
              options: [
                "To show relationships between content",
                "To hide important information",
                "To remove headings",
                "To make controls unusable",
              ],
              answer: "To show relationships between content",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: Accessible Interaction",
      description:
        "Understand keyboard navigation, screen readers, forms, and accessible interactions.",
      lessons: [
        {
          title: "Keyboard Accessibility",
          content: `Keyboard accessibility allows users to navigate and operate a website without a mouse.

Important practices:
- Make interactive elements keyboard accessible.
- Support Tab and Shift+Tab navigation.
- Use Enter or Space where appropriate.
- Provide a visible keyboard focus indicator.
- Avoid keyboard traps.

Example: A user should be able to move through navigation links and buttons using the Tab key.`,
          quiz: [
            {
              question: "What is keyboard accessibility?",
              options: [
                "Using a website without requiring a mouse",
                "Changing keyboard colors",
                "Typing faster",
                "Adding keyboard images",
              ],
              answer: "Using a website without requiring a mouse",
            },
            {
              question: "Which key commonly moves focus forward?",
              options: ["Tab", "Esc", "Caps Lock", "Print Screen"],
              answer: "Tab",
            },
            {
              question: "What is a keyboard trap?",
              options: [
                "A situation where keyboard focus cannot move away from an element",
                "A keyboard shortcut",
                "A typing error",
                "A browser setting",
              ],
              answer: "A situation where keyboard focus cannot move away from an element",
            },
            {
              question: "Why is visible focus important?",
              options: [
                "It shows which element is currently selected",
                "It changes the page title",
                "It hides buttons",
                "It removes keyboard navigation",
              ],
              answer: "It shows which element is currently selected",
            },
            {
              question: "Which is a keyboard navigation key?",
              options: ["Shift+Tab", "Volume Up", "Power", "Scroll Lock"],
              answer: "Shift+Tab",
            },
          ],
        },
        {
          title: "Screen Readers and Semantic HTML",
          content: `Screen readers convert digital content into speech or other output that users can understand.

Semantic HTML provides meaning to webpage elements.

Examples:
- Use button for actions.
- Use a for navigation links.
- Use nav for navigation sections.
- Use main for primary content.
- Use proper heading levels.
- Associate labels with form controls.

Semantic elements help assistive technologies understand the structure and purpose of content.`,
          quiz: [
            {
              question: "What does a screen reader do?",
              options: [
                "Reads digital content through speech or other output",
                "Edits images",
                "Creates CSS",
                "Compresses files",
              ],
              answer: "Reads digital content through speech or other output",
            },
            {
              question: "Which HTML element represents an action button?",
              options: ["button", "div", "span", "section"],
              answer: "button",
            },
            {
              question: "Which element represents the main content?",
              options: ["main", "footer", "aside", "small"],
              answer: "main",
            },
            {
              question: "Why use semantic HTML?",
              options: [
                "To communicate meaning and structure",
                "To add animations",
                "To reduce all text",
                "To change image size",
              ],
              answer: "To communicate meaning and structure",
            },
            {
              question: "Which element is used for navigation links?",
              options: ["nav", "article", "strong", "label"],
              answer: "nav",
            },
          ],
        },
        {
          title: "Accessible Forms and Validation",
          content: `Forms should be easy to understand and complete.

Important practices:
- Provide visible labels for inputs.
- Explain required fields.
- Use clear instructions.
- Show helpful error messages.
- Identify errors in text, not only through color.
- Associate error messages with the relevant fields.

Example: If an email address is invalid, display a message such as "Enter a valid email address" near the email field.`,
          quiz: [
            {
              question: "What should every form input have?",
              options: [
                "A meaningful label",
                "An animation",
                "A background image",
                "A hidden instruction",
              ],
              answer: "A meaningful label",
            },
            {
              question: "How should form errors be displayed?",
              options: [
                "With clear text and visual indication",
                "Using color only",
                "Without any message",
                "Only through sound",
              ],
              answer: "With clear text and visual indication",
            },
            {
              question: "What should required fields communicate?",
              options: [
                "That user input is necessary",
                "That the field is decorative",
                "That the field is disabled",
                "That the form is complete",
              ],
              answer: "That user input is necessary",
            },
            {
              question: "Where should an error message appear?",
              options: [
                "Near the relevant field or clearly associated with it",
                "Only at the bottom of another page",
                "Inside an unrelated image",
                "Nowhere",
              ],
              answer: "Near the relevant field or clearly associated with it",
            },
            {
              question: "What makes form instructions useful?",
              options: [
                "Clear and simple language",
                "Complex technical wording",
                "Unexplained abbreviations",
                "Hidden labels",
              ],
              answer: "Clear and simple language",
            },
          ],
        },
        {
          title: "Accessible Navigation and Interactive Components",
          content: `Navigation and interactive components should be predictable and easy to operate.

Important practices:
- Use descriptive link names.
- Keep navigation consistent.
- Make dropdowns keyboard accessible.
- Provide clear button labels.
- Communicate expanded and collapsed states.
- Ensure dialogs and menus manage keyboard focus correctly.

Users should understand what will happen before activating a control.`,
          quiz: [
            {
              question: "What makes a link accessible?",
              options: [
                "A descriptive link name",
                "An unclear label",
                "A hidden destination",
                "A decorative animation",
              ],
              answer: "A descriptive link name",
            },
            {
              question: "What should dropdown menus support?",
              options: [
                "Keyboard interaction",
                "Mouse interaction only",
                "Automatic hiding",
                "Unlabeled controls",
              ],
              answer: "Keyboard interaction",
            },
            {
              question: "What should a button label communicate?",
              options: [
                "The action it performs",
                "Its CSS color",
                "Its file size",
                "Its developer name",
              ],
              answer: "The action it performs",
            },
            {
              question: "What should a dialog manage?",
              options: [
                "Keyboard focus",
                "Image compression",
                "Database queries",
                "Font downloads",
              ],
              answer: "Keyboard focus",
            },
            {
              question: "Why keep navigation consistent?",
              options: [
                "To make navigation predictable",
                "To hide important links",
                "To increase confusion",
                "To remove page structure",
              ],
              answer: "To make navigation predictable",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: Accessibility Testing and Practical Design",
      description:
        "Learn accessibility testing tools, evaluation methods, and how to improve real interfaces.",
      lessons: [
        {
          title: "Accessibility Testing Methods",
          content: `Accessibility testing checks whether a digital product can be used by people with different abilities.

Common testing methods:
- Manual keyboard testing.
- Screen reader testing.
- Color contrast checking.
- Automated accessibility scanning.
- User testing with people who have different access needs.

Automated tools can identify many issues, but they cannot detect every accessibility problem. Manual evaluation is also important.`,
          quiz: [
            {
              question: "What is accessibility testing?",
              options: [
                "Checking whether products are accessible to users",
                "Checking only website colors",
                "Testing internet speed",
                "Checking database storage",
              ],
              answer: "Checking whether products are accessible to users",
            },
            {
              question: "Which is a manual testing method?",
              options: [
                "Keyboard navigation testing",
                "Automatic image resizing",
                "Code compilation",
                "Database backup",
              ],
              answer: "Keyboard navigation testing",
            },
            {
              question: "Can automated tools find every accessibility issue?",
              options: [
                "No, manual evaluation is also needed",
                "Yes, always",
                "Only on mobile",
                "Only on desktop",
              ],
              answer: "No, manual evaluation is also needed",
            },
            {
              question: "Which testing checks color readability?",
              options: [
                "Color contrast testing",
                "Performance testing",
                "Unit testing",
                "Load testing",
              ],
              answer: "Color contrast testing",
            },
            {
              question: "Why conduct user testing?",
              options: [
                "To understand real user experiences",
                "To remove all feedback",
                "To increase animations",
                "To avoid testing",
              ],
              answer: "To understand real user experiences",
            },
          ],
        },
        {
          title: "Accessibility Tools and Resources",
          content: `Accessibility tools help designers and developers identify potential problems.

Useful tools include:
- WAVE: Identifies accessibility issues on web pages.
- axe DevTools: Helps detect accessibility problems.
- Lighthouse: Includes accessibility audits.
- Colour Contrast Analyser: Checks contrast between colors.
- Screen readers: Help evaluate how content is announced.

Tools should support a broader testing process rather than replace real user evaluation.`,
          quiz: [
            {
              question: "What is WAVE used for?",
              options: [
                "Finding web accessibility issues",
                "Editing videos",
                "Creating databases",
                "Managing email",
              ],
              answer: "Finding web accessibility issues",
            },
            {
              question: "Which tool includes accessibility audits?",
              options: [
                "Lighthouse",
                "Notepad",
                "Calculator",
                "File Explorer",
              ],
              answer: "Lighthouse",
            },
            {
              question: "What does a contrast analyser check?",
              options: [
                "Color contrast",
                "Internet speed",
                "Database size",
                "File permissions",
              ],
              answer: "Color contrast",
            },
            {
              question: "What does axe DevTools help identify?",
              options: [
                "Accessibility problems",
                "Video editing errors",
                "Network cables",
                "Storage capacity",
              ],
              answer: "Accessibility problems",
            },
            {
              question: "Should accessibility tools replace user testing?",
              options: [
                "No, they should support testing",
                "Yes, always",
                "Only for mobile apps",
                "Only for designers",
              ],
              answer: "No, they should support testing",
            },
          ],
        },
        {
          title: "Accessibility Audits and Reporting",
          content: `An accessibility audit evaluates a website or application against accessibility requirements.

A basic audit process:
1. Identify important pages and user journeys.
2. Check keyboard navigation.
3. Review headings, labels, and semantic structure.
4. Test contrast and text resizing.
5. Evaluate screen reader behavior.
6. Record issues and recommendations.

A useful report includes the problem, affected page or component, impact on users, and a suggested improvement.`,
          quiz: [
            {
              question: "What is an accessibility audit?",
              options: [
                "A structured evaluation of accessibility",
                "A website redesign only",
                "A marketing campaign",
                "A database migration",
              ],
              answer: "A structured evaluation of accessibility",
            },
            {
              question: "What should an audit report include?",
              options: [
                "Issues and recommended improvements",
                "Only website screenshots",
                "Only design colors",
                "Unrelated project details",
              ],
              answer: "Issues and recommended improvements",
            },
            {
              question: "What should be checked during an audit?",
              options: [
                "Keyboard navigation",
                "Only logo size",
                "Only background images",
                "Only page animations",
              ],
              answer: "Keyboard navigation",
            },
            {
              question: "Why record accessibility issues?",
              options: [
                "To prioritize and fix problems",
                "To ignore user needs",
                "To remove documentation",
                "To increase page complexity",
              ],
              answer: "To prioritize and fix problems",
            },
            {
              question: "What is a useful recommendation?",
              options: [
                "A practical improvement for the identified issue",
                "An unrelated design idea",
                "A vague statement",
                "A list of colors only",
              ],
              answer: "A practical improvement for the identified issue",
            },
          ],
        },
        {
          title: "Mini Project: Accessible Website Design",
          content: `In this project, create an accessible website interface using the principles learned throughout the course.

Project steps:
1. Choose a simple website such as a student dashboard or portfolio.
2. Create a clear page structure with semantic headings.
3. Use readable typography and sufficient color contrast.
4. Add meaningful alternative text to informative images.
5. Provide labels and clear error messages for forms.
6. Make all interactive elements keyboard accessible.
7. Test the interface using an accessibility tool and manual checks.
8. Document the issues found and improvements made.

Deliverables:
- Website wireframe or prototype.
- Accessible interface design.
- Accessibility testing checklist.
- Short audit report.

The goal is to create an interface that supports different users and interaction methods.`,
          quiz: [
            {
              question: "What is the main goal of this project?",
              options: [
                "Create an accessible website interface",
                "Create only a logo",
                "Build a database server",
                "Create a video animation",
              ],
              answer: "Create an accessible website interface",
            },
            {
              question: "What should be added to informative images?",
              options: [
                "Meaningful alternative text",
                "Only a border",
                "An animation",
                "A background color",
              ],
              answer: "Meaningful alternative text",
            },
            {
              question: "What should be tested with keyboard navigation?",
              options: [
                "Interactive elements",
                "Only background images",
                "Only decorative text",
                "Only the website logo",
              ],
              answer: "Interactive elements",
            },
            {
              question: "What is one project deliverable?",
              options: [
                "Accessibility testing checklist",
                "Unrelated marketing poster",
                "Database backup",
                "Video soundtrack",
              ],
              answer: "Accessibility testing checklist",
            },
            {
              question: "What should the final audit report contain?",
              options: [
                "Identified issues and improvements",
                "Only project title",
                "Only screenshots",
                "Only source code",
              ],
              answer: "Identified issues and improvements",
            },
          ],
        },
      ],
    },
  ],
};

export default accessibilityCourse;

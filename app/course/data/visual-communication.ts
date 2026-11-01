
const quiz = (
  question: string,
  options: string[],
  answer: string,
  explanation: string
) => ({
  question,
  options,
  answer,
  explanation,
});

const lesson = (
  id: string,
  title: string,
  introduction: string,
  sections: { heading: string; content: string }[],
  example: string,
  exercise: string,
  questions: ReturnType<typeof quiz>[]
) => ({
  id,
  title,
  introduction,
  sections,
  example,
  exercise,
  quiz: questions,
});

export const visualCommunicationCourse = {
  title: "Visual Communication for UI/UX Design",
  description:
    "Learn how to communicate ideas through visual elements such as color, typography, layout, imagery, icons, hierarchy, and design systems. Develop practical skills for creating clear and meaningful digital experiences.",
  project: {
    title: "Visual Communication Design Project",
    description:
      "Create a visual communication design for a mobile application or website. Develop a consistent color palette, typography system, visual hierarchy, icon set, and screen layout. Explain how your design communicates information clearly to users.",
  },

  weeks: [
    // =========================================================
    // WEEK 1
    // =========================================================
    {
      title: "Week 1: Foundations of Visual Communication",
      assignment:
        "Choose a mobile application and analyze its visual communication. Identify its colors, typography, images, icons, layout, and visual hierarchy. Prepare a short report explaining how these elements communicate with users.",

      lessons: [
        lesson(
          "visual-communication-w1-l1",
          "Introduction to Visual Communication",
          "Visual communication is the process of sharing information and ideas through visual elements instead of relying only on written or spoken words. In UI/UX design, visual communication helps users understand information, recognize actions, navigate interfaces, and complete tasks.",
          [
            {
              heading: "1. What is visual communication?",
              content:
                "Visual communication uses images, colors, symbols, shapes, typography, illustrations, and layouts to convey meaning. For example, a red notification badge communicates that something needs attention, while a magnifying-glass icon commonly represents search."
            },
            {
              heading: "2. Importance in UI/UX design",
              content:
                "A digital interface should communicate its purpose clearly. Users should understand what they can do, where they are, and what happens when they interact with an element. Good visual communication reduces confusion and makes interfaces easier to use."
            },
            {
              heading: "3. Main elements",
              content:
                "Important elements include color, typography, images, icons, shapes, spacing, alignment, contrast, and visual hierarchy. Each element contributes to the overall message and user experience."
            },
            {
              heading: "4. Visual communication in everyday applications",
              content:
                "Consider a shopping application. Product photographs communicate what is being sold, prices communicate cost, buttons communicate available actions, and icons help users recognize search, cart, and account features."
            },
            {
              heading: "5. Characteristics of effective visual communication",
              content:
                "Effective visual communication should be clear, consistent, readable, relevant, and accessible. Decorative elements should not distract users from important information."
            }
          ],
          `Example: Shopping App

Header: Shop
Search bar: Find products
Product image: Shows the item
Price: Communicates cost
Button: Add to cart
Cart icon: Shows shopping cart

The combination of these elements communicates
how users can browse and purchase products.`,
          "Choose one application you use regularly. Identify five visual elements in its interface and explain what each element communicates to the user.",
          [
            quiz("What is visual communication?", ["Sharing information through visual elements", "Writing computer programs", "Managing databases", "Testing network connections"], "Sharing information through visual elements", "Visual communication uses visual elements to convey information and meaning."),
            quiz("Which of these is a visual communication element?", ["Typography", "Database query", "Server memory", "Programming loop"], "Typography", "Typography is the visual presentation of text."),
            quiz("Why is visual communication important in UI/UX design?", ["It helps users understand and interact with interfaces", "It replaces all application functions", "It removes the need for testing", "It increases the number of database tables"], "It helps users understand and interact with interfaces", "Visual communication makes interface information and actions easier to understand."),
            quiz("What does a search icon commonly communicate?", ["Search functionality", "Delete functionality", "Payment confirmation", "Audio playback"], "Search functionality", "A magnifying-glass icon is a common visual symbol for search."),
            quiz("Which is a characteristic of effective visual communication?", ["Clarity", "Unnecessary complexity", "Inconsistent styling", "Unreadable text"], "Clarity", "Clear communication helps users understand the interface.")
          ]
        ),

        lesson(
          "visual-communication-w1-l2",
          "Principles of Visual Design",
          "Visual design principles help designers organize interface elements in a way that is understandable and visually balanced. These principles guide how users notice, interpret, and interact with information.",
          [
            {
              heading: "1. Balance",
              content:
                "Balance describes how visual weight is distributed in a design. Symmetrical balance places similar elements on both sides, while asymmetrical balance uses different elements that still create a visually stable composition."
            },
            {
              heading: "2. Contrast",
              content:
                "Contrast creates visible differences between elements. Designers use differences in color, size, shape, or weight to make important content stand out. For example, a primary action button may use a stronger color than secondary information."
            },
            {
              heading: "3. Alignment",
              content:
                "Alignment creates an organized relationship between elements. Consistent alignment makes text, images, buttons, and cards feel structured instead of randomly placed."
            },
            {
              heading: "4. Repetition",
              content:
                "Repetition means using consistent visual patterns throughout an interface. Repeated button styles, colors, headings, and spacing create familiarity and help users understand similar elements."
            },
            {
              heading: "5. Proximity",
              content:
                "Proximity means placing related elements close to one another. For example, a product title, image, price, and purchase button should appear visually connected because they belong to the same product."
            }
          ],
          `Example: Product Card

[ Product Image ]

Wireless Headphones
Price: ₹1,999

[ Add to Cart ]

Design principles:
- Alignment: Elements follow a common edge.
- Proximity: Product details are grouped.
- Contrast: Price and action button stand out.
- Repetition: All product cards use the same style.`,
          "Create a product card for an online shopping application. Apply balance, contrast, alignment, repetition, and proximity. Explain where you used each principle.",
          [
            quiz("What does visual balance describe?", ["Distribution of visual weight", "Number of database records", "Internet speed", "Text spelling"], "Distribution of visual weight", "Balance describes how visual weight is distributed in a composition."),
            quiz("Which principle makes important elements stand out?", ["Contrast", "Proximity", "Repetition", "Grouping"], "Contrast", "Contrast creates differences that help important elements attract attention."),
            quiz("What does alignment help create?", ["An organized visual structure", "Random positioning", "Unrelated content", "Unnecessary decoration"], "An organized visual structure", "Alignment establishes consistent relationships between elements."),
            quiz("What does repetition create in an interface?", ["Consistency", "Confusion", "Randomness", "Unpredictable behavior"], "Consistency", "Repeated visual patterns make interfaces familiar and consistent."),
            quiz("What does proximity mean in visual design?", ["Placing related elements close together", "Making every element a different color", "Removing all spacing", "Making all text the same size"], "Placing related elements close together", "Proximity communicates which elements belong together.")
          ]
        ),

        lesson(
          "visual-communication-w1-l3",
          "Color Theory and Color Psychology",
          "Color is an important communication tool in digital design. It helps create visual identity, distinguish information, establish mood, and guide attention. Designers use color theory to select combinations that work well together.",
          [
            {
              heading: "1. Primary and secondary colors",
              content:
                "In traditional art color theory, red, yellow, and blue are commonly described as primary colors. Mixing primary colors produces secondary colors such as green, orange, and violet. Digital screens commonly use the RGB color model, based on red, green, and blue light."
            },
            {
              heading: "2. RGB and HEX colors",
              content:
                "RGB represents colors using red, green, and blue channel values. HEX is a hexadecimal notation commonly used in web design. For example, #FFFFFF represents white and #000000 represents black."
            },
            {
              heading: "3. Color relationships",
              content:
                "Complementary colors are positioned opposite each other on a color wheel. Analogous colors sit next to each other. Monochromatic palettes use variations of one color. These relationships help designers create coordinated palettes."
            },
            {
              heading: "4. Color psychology",
              content:
                "Colors can create associations and influence how a design feels. Blue is often associated with trust, green with nature or growth, and red with urgency or attention. These associations vary across cultures and contexts, so designers should not assume that every user interprets colors identically."
            },
            {
              heading: "5. Accessibility and color",
              content:
                "Color should not be the only way to communicate important information. For example, an error should include a text message or icon in addition to a red color. Designers should also check text contrast to support readability."
            }
          ],
          `Example Color Palette

Primary: #2563EB
Secondary: #14B8A6
Background: #F8FAFC
Text: #1E293B
Error: #DC2626

Possible use:
- Blue for primary actions.
- Teal for supporting highlights.
- Light gray for backgrounds.
- Dark color for readable text.
- Red for error messages.`,
          "Create a five-color palette for a learning application. Include a primary color, secondary color, background color, text color, and error color. Explain your choices.",
          [
            quiz("Which color model is commonly used for digital screens?", ["RGB", "CMYK only", "HSL only", "Grayscale only"], "RGB", "Digital screens commonly combine red, green, and blue light."),
            quiz("What does the HEX value #FFFFFF represent?", ["White", "Black", "Red", "Blue"], "White", "The hexadecimal value #FFFFFF represents maximum red, green, and blue values."),
            quiz("What are complementary colors?", ["Colors opposite each other on the color wheel", "Colors with identical values", "Only black and white", "Colors with no relationship"], "Colors opposite each other on the color wheel", "Complementary colors are opposite each other on the color wheel."),
            quiz("Which color is often associated with nature and growth?", ["Green", "Black", "Gray", "Pink"], "Green", "Green is commonly associated with nature and growth, though meanings can vary."),
            quiz("Why should designers avoid using color as the only indicator of an error?", ["Some users may not distinguish the colors", "Colors cannot be displayed digitally", "It prevents images from loading", "It removes the need for text"], "Some users may not distinguish the colors", "Additional labels or icons make information accessible to more users.")
          ]
        ),

        lesson(
          "visual-communication-w1-l4",
          "Typography and Readability",
          "Typography is the art and technique of arranging text. In UI/UX design, typography affects readability, hierarchy, accessibility, and the overall appearance of a digital product.",
          [
            {
              heading: "1. What is typography?",
              content:
                "Typography involves selecting typefaces, font sizes, font weights, line spacing, letter spacing, and text alignment. These choices determine how information appears and how comfortably users can read it."
            },
            {
              heading: "2. Typeface categories",
              content:
                "Serif typefaces have small finishing strokes at the ends of letterforms. Sans-serif typefaces generally have simpler letterforms without these strokes. Display typefaces are often used for distinctive headings and visual emphasis."
            },
            {
              heading: "3. Font hierarchy",
              content:
                "A typography hierarchy distinguishes headings, subheadings, body text, captions, and labels. Larger or heavier text usually indicates greater importance, but hierarchy should be consistent."
            },
            {
              heading: "4. Readability and line spacing",
              content:
                "Readable text needs suitable font sizes, line lengths, contrast, and line spacing. Very small text and tightly packed paragraphs can make content difficult to read, especially on mobile screens."
            },
            {
              heading: "5. Typography consistency",
              content:
                "A design system should define a limited set of type styles. Consistent heading sizes, body styles, and button labels make the interface feel organized and easier to understand."
            }
          ],
          `Example Typography System

Page Heading: 32px / Bold
Section Heading: 24px / Semibold
Card Heading: 18px / Semibold
Body Text: 16px / Regular
Caption: 12px / Regular

Use the same styles consistently
across the application.`,
          "Design a typography system for a mobile learning application. Define styles for a page heading, section heading, card title, body text, and caption.",
          [
            quiz("What is typography?", ["The arrangement and presentation of text", "The arrangement of database tables", "A programming framework", "A network protocol"], "The arrangement and presentation of text", "Typography controls the visual presentation of text."),
            quiz("Which typeface category does not have the traditional finishing strokes of serif fonts?", ["Sans-serif", "Serif", "Script only", "Decorative only"], "Sans-serif", "Sans-serif typefaces generally lack the small finishing strokes associated with serif typefaces."),
            quiz("What does font hierarchy help communicate?", ["The importance and structure of information", "The internet connection speed", "The file storage location", "The database password"], "The importance and structure of information", "Different text styles help users distinguish headings and supporting information."),
            quiz("Which factor improves paragraph readability?", ["Suitable line spacing", "Extremely small text", "Very low contrast", "Random font changes"], "Suitable line spacing", "Appropriate line spacing makes text easier to follow."),
            quiz("Why should typography styles be consistent?", ["To create a coherent interface", "To make every heading unrelated", "To remove all visual hierarchy", "To prevent users from reading text"], "To create a coherent interface", "Consistent typography creates predictable visual patterns.")
          ]
        )
      ]
    },

    // =========================================================
    // WEEK 2
    // =========================================================
    {
      title: "Week 2: Visual Elements and Layout",
      assignment:
        "Design a mobile application screen using a consistent color palette, typography, icons, imagery, spacing, and alignment. Explain how each visual element supports the user's task.",

      lessons: [
        lesson(
          "visual-communication-w2-l1",
          "Images, Illustrations and Visual Assets",
          "Images and illustrations communicate information quickly and make interfaces more meaningful. Designers select visual assets based on the purpose of the screen, the audience, and the context in which the image appears.",
          [
            {
              heading: "1. Role of images",
              content:
                "Images help users recognize products, people, places, and concepts. A shopping application uses product images, while a travel application may use destination photographs."
            },
            {
              heading: "2. Photographs and illustrations",
              content:
                "Photographs show real-world subjects. Illustrations are created or stylized visuals that can explain ideas, represent concepts, or support a brand's identity. Both can be useful depending on the communication goal."
            },
            {
              heading: "3. Image selection",
              content:
                "Images should be relevant, clear, appropriately sized, and consistent with the interface. Decorative images should not compete with important information or actions."
            },
            {
              heading: "4. Cropping and aspect ratio",
              content:
                "Cropping determines which parts of an image remain visible. Aspect ratio describes the relationship between image width and height. Consistent image ratios can help product cards and galleries look organized."
            },
            {
              heading: "5. Accessibility and image descriptions",
              content:
                "Meaningful images should have appropriate alternative text when used in digital interfaces. Alternative text helps users who rely on screen readers understand the purpose or content of the image."
            }
          ],
          `Example: Learning App

Course Card:
- Thumbnail: Represents the course topic.
- Course title: Identifies the subject.
- Description: Explains what the learner will study.
- Progress indicator: Shows learning progress.

All images should use a consistent visual style.`,
          "Create three course cards for a learning application. Select an image or illustration for each course and explain why it is relevant.",
          [
            quiz("What is one purpose of images in UI design?", ["Communicate visual information", "Replace all navigation", "Store passwords", "Execute database queries"], "Communicate visual information", "Images can communicate subjects and ideas quickly."),
            quiz("What is an illustration?", ["A created or stylized visual", "A database record", "A programming variable", "A network connection"], "A created or stylized visual", "Illustrations are visuals created to represent or explain ideas."),
            quiz("What does aspect ratio describe?", ["The relationship between width and height", "The number of colors in a palette", "The font weight", "The image filename"], "The relationship between width and height", "Aspect ratio expresses the proportional relationship between width and height."),
            quiz("What is alternative text used for?", ["Describe meaningful images to assistive technology", "Change the image background automatically", "Increase screen brightness", "Generate passwords"], "Describe meaningful images to assistive technology", "Alternative text helps screen-reader users understand image content."),
            quiz("How should an image be selected for a course card?", ["Based on relevance to the course", "Only based on file size", "Without considering its meaning", "By choosing a random image"], "Based on relevance to the course", "Relevant imagery supports the information the card communicates.")
          ]
        ),

        lesson(
          "visual-communication-w2-l2",
          "Icons and Symbols in Interface Design",
          "Icons are simplified visual representations of actions, objects, or ideas. They help users recognize common functions and reduce the amount of text required in an interface.",
          [
            {
              heading: "1. What are icons?",
              content:
                "An icon is a small visual symbol that represents a function or concept. Examples include a house for home, a magnifying glass for search, and a bell for notifications."
            },
            {
              heading: "2. Familiarity and recognition",
              content:
                "Common icons are easier to recognize because users have seen them in many interfaces. Unfamiliar icons should be accompanied by text labels or supporting explanations."
            },
            {
              heading: "3. Icon consistency",
              content:
                "Icons in the same interface should follow a consistent visual style. They should use similar stroke thickness, corner treatment, proportions, and visual weight."
            },
            {
              heading: "4. Icon size and placement",
              content:
                "Icons should be large enough to recognize and should be positioned consistently. Interactive icon buttons also need sufficient touch area so users can activate them comfortably."
            },
            {
              heading: "5. Accessibility",
              content:
                "Interactive icons should have accessible names or labels. A screen reader should be able to communicate the purpose of an icon button even when the visible design contains only a symbol."
            }
          ],
          `Example Navigation

🏠 Home
🔍 Search
❤️ Favorites
🛒 Cart
👤 Profile

Use a consistent icon family
and provide accessible labels
for interactive icon buttons.`,
          "Create a five-icon navigation set for a shopping application. Include home, search, favorites, cart, and profile. Explain how you will maintain consistency.",
          [
            quiz("What is the main purpose of an interface icon?", ["Represent an action or concept visually", "Store application data", "Execute a server request by itself", "Replace the entire interface"], "Represent an action or concept visually", "Icons visually represent functions and concepts."),
            quiz("What should be done when an icon is unfamiliar?", ["Add a clear text label", "Remove all descriptions", "Make it smaller", "Change it randomly"], "Add a clear text label", "Labels help users understand unfamiliar symbols."),
            quiz("What should remain consistent in an icon set?", ["Visual style and proportions", "Different unrelated styles", "Random stroke thickness", "Unpredictable placement"], "Visual style and proportions", "Consistent icon styling makes the interface feel coherent."),
            quiz("What helps screen-reader users understand an icon button?", ["An accessible name", "A decorative border", "A larger shadow", "A different background color only"], "An accessible name", "Accessible names communicate the purpose of interactive controls."),
            quiz("Why should interactive icons have sufficient touch areas?", ["To make them easier to activate", "To change their meaning", "To remove their labels", "To prevent all interaction"], "To make them easier to activate", "Adequate touch areas make controls easier to use.")
          ]
        ),

        lesson(
          "visual-communication-w2-l3",
          "Layout, Grid Systems and Spacing",
          "Layout describes how content is arranged on a screen. Grid systems and spacing help designers create consistent, organized interfaces that work across different screen sizes.",
          [
            {
              heading: "1. What is layout?",
              content:
                "Layout is the arrangement of text, images, controls, and other visual elements. A good layout helps users scan information and understand how different parts of the interface are connected."
            },
            {
              heading: "2. Grid systems",
              content:
                "A grid system divides a layout into columns and rows. Designers use grids to align content and maintain consistent proportions. Common web layouts use 12-column grids, while mobile layouts may use fewer columns."
            },
            {
              heading: "3. Spacing",
              content:
                "Spacing is the empty area between elements. It separates groups, improves readability, and prevents an interface from feeling crowded. A consistent spacing scale makes layouts easier to maintain."
            },
            {
              heading: "4. Margins and padding",
              content:
                "Margins create space outside an element, while padding creates space inside an element between its content and border. Both are important for comfortable and consistent layouts."
            },
            {
              heading: "5. Responsive layout",
              content:
                "Responsive design adapts a layout to different screen sizes. Content may rearrange, columns may reduce, and navigation may change so the interface remains usable on phones, tablets, and desktops."
            }
          ],
          `Example Layout

Desktop:
| Sidebar | Main Content | Details |

Mobile:
| Header          |
| Main Content    |
| Details         |
| Bottom Navigation |

Use consistent spacing between cards,
headings, and controls.`,
          "Design a responsive dashboard layout for desktop and mobile. Draw both versions and explain how the content changes between screen sizes.",
          [
            quiz("What does layout describe?", ["Arrangement of interface elements", "Database structure only", "Internet speed", "Programming language syntax"], "Arrangement of interface elements", "Layout organizes content and controls on a screen."),
            quiz("What does a grid system help with?", ["Alignment and consistent structure", "Random element placement", "Changing user passwords", "Compressing images"], "Alignment and consistent structure", "Grids provide a structure for positioning and aligning content."),
            quiz("What is padding?", ["Space inside an element", "Space outside an element only", "A font family", "An image format"], "Space inside an element", "Padding is the space between an element's content and its boundary."),
            quiz("What is a margin?", ["Space outside an element", "Text weight", "Image resolution", "Button label"], "Space outside an element", "Margins create space around the outside of an element."),
            quiz("What is responsive design?", ["Adapting layouts to different screen sizes", "Using one fixed layout everywhere", "Removing mobile support", "Changing the brand name"], "Adapting layouts to different screen sizes", "Responsive layouts adapt to the available screen space.")
          ]
        ),

        lesson(
          "visual-communication-w2-l4",
          "Visual Hierarchy and Information Architecture",
          "Visual hierarchy determines the order in which users notice information. Information architecture organizes content so users can find what they need and understand how an application is structured.",
          [
            {
              heading: "1. What is visual hierarchy?",
              content:
                "Visual hierarchy is the arrangement of elements according to their importance. Designers use size, contrast, color, position, spacing, and typography to guide attention."
            },
            {
              heading: "2. Size and emphasis",
              content:
                "Larger or more prominent elements often attract attention first. Important page titles and primary actions should be visually distinguishable from supporting content."
            },
            {
              heading: "3. Reading patterns",
              content:
                "Users often scan interfaces rather than reading every word. Clear headings, grouped content, labels, and visual cues make important information easier to locate."
            },
            {
              heading: "4. Information architecture",
              content:
                "Information architecture is the organization and labeling of content. It includes navigation structures, categories, page relationships, and content grouping."
            },
            {
              heading: "5. Navigation and findability",
              content:
                "Navigation helps users move between sections. Clear labels, meaningful categories, predictable menus, and search functionality improve findability."
            }
          ],
          `Example: Learning Dashboard

1. Page heading: My Learning
2. Main action: Continue Course
3. Progress information: 65% complete
4. Supporting content: Upcoming tasks
5. Secondary links: Settings and Help

Important actions receive greater visual emphasis.`,
          "Create an information hierarchy for a student dashboard. Arrange page heading, course progress, continue-learning action, weekly tasks, and settings by importance.",
          [
            quiz("What does visual hierarchy determine?", ["The order in which information attracts attention", "The number of database columns", "The internet connection type", "The source-code filename"], "The order in which information attracts attention", "Visual hierarchy helps users recognize important information first."),
            quiz("Which element can create visual emphasis?", ["Size", "Database password", "File extension", "Server location"], "Size", "Size is one of the visual tools used to establish hierarchy."),
            quiz("What is information architecture?", ["Organization and labeling of information", "A type of image filter", "A programming loop", "A network cable"], "Organization and labeling of information", "Information architecture structures content so users can find it."),
            quiz("What improves navigation?", ["Clear labels", "Unrelated menu names", "Random placement", "Hidden essential actions"], "Clear labels", "Clear labels help users understand where navigation items lead."),
            quiz("Why should primary actions receive visual emphasis?", ["To make important actions easier to notice", "To hide supporting information", "To make every button identical", "To remove navigation"], "To make important actions easier to notice", "Visual emphasis guides users toward important actions.")
          ]
        )
      ]
    },

    // =========================================================
    // WEEK 3
    // =========================================================
    {
      title: "Week 3: Visual Systems and User Experience",
      assignment:
        "Create a small design system for a mobile application. Include a color palette, typography styles, button styles, icon guidelines, spacing scale, and accessibility rules.",

      lessons: [
        lesson(
          "visual-communication-w3-l1",
          "Brand Identity and Visual Consistency",
          "Brand identity is the collection of visual and verbal elements that help people recognize a product or organization. In UI/UX design, visual consistency helps create a recognizable and predictable experience.",
          [
            {
              heading: "1. What is brand identity?",
              content:
                "Brand identity includes the logo, colors, typography, imagery, graphic style, and communication tone used to represent a brand. These elements work together to create a recognizable identity."
            },
            {
              heading: "2. Logo and visual symbols",
              content:
                "A logo is a visual identifier for a brand. It should remain recognizable and should be used consistently in different parts of the product."
            },
            {
              heading: "3. Brand colors",
              content:
                "A brand color palette defines the main colors used across the product. Primary and supporting colors should be selected with readability and accessibility in mind."
            },
            {
              heading: "4. Consistent typography and imagery",
              content:
                "Using consistent fonts, image styles, and icon treatments makes different screens feel like parts of the same product. Unrelated styles can make the interface appear fragmented."
            },
            {
              heading: "5. Brand guidelines",
              content:
                "Brand guidelines document how visual elements should be used. They may define logo spacing, approved colors, typography, image usage, and examples of correct and incorrect applications."
            }
          ],
          `Example Brand Guidelines

Brand: LearnPath

Primary color: Blue
Secondary color: Green
Typography: Sans-serif
Icon style: Simple line icons
Buttons: Rounded corners
Images: Clean educational illustrations

Apply the same rules across all screens.`,
          "Create a visual identity for a fictional educational application. Define its logo concept, color palette, typography, and image style.",
          [
            quiz("What is brand identity?", ["The visual and verbal elements representing a brand", "Only the database name", "A type of programming language", "A network configuration"], "The visual and verbal elements representing a brand", "Brand identity combines visual and communication elements that represent a product or organization."),
            quiz("What is the main purpose of a logo?", ["Identify a brand", "Store user data", "Execute a payment", "Generate a password"], "Identify a brand", "A logo acts as a recognizable visual identifier."),
            quiz("What do brand guidelines document?", ["Rules for using brand elements", "Only user login details", "Only source-code comments", "Database backup schedules"], "Rules for using brand elements", "Brand guidelines explain how visual identity elements should be applied."),
            quiz("Why should typography be consistent across screens?", ["To maintain a coherent identity", "To make every screen unrelated", "To remove readability", "To change navigation behavior"], "To maintain a coherent identity", "Consistent typography makes the product feel unified."),
            quiz("What should a brand color palette consider?", ["Readability and accessibility", "Only personal preference", "Random color selection", "Maximum number of colors"], "Readability and accessibility", "Brand colors should support both recognition and usable contrast.")
          ]
        ),

        lesson(
          "visual-communication-w3-l2",
          "Design Systems and Reusable Components",
          "A design system is a collection of reusable design rules, components, and guidelines. It helps teams maintain consistency and develop digital products more efficiently.",
          [
            {
              heading: "1. What is a design system?",
              content:
                "A design system documents the visual language and reusable components of a product. It may include colors, typography, spacing, icons, buttons, form controls, navigation patterns, and usage guidelines."
            },
            {
              heading: "2. Design tokens",
              content:
                "Design tokens are named values used to store design decisions such as colors, font sizes, spacing, and corner radii. For example, a primary color token can be reused across many buttons and links."
            },
            {
              heading: "3. Reusable components",
              content:
                "Components are reusable interface elements such as buttons, cards, input fields, menus, and dialogs. Reusing components reduces inconsistent styling and makes updates easier."
            },
            {
              heading: "4. Component states",
              content:
                "Interactive components can have different states. A button may have default, hover, focus, pressed, and disabled states. A component library should define these states clearly."
            },
            {
              heading: "5. Documentation",
              content:
                "Documentation explains how to use components, when to use them, and which variations are available. Good documentation helps designers and developers work together."
            }
          ],
          `Example Design Tokens

color.primary = #2563EB
color.background = #FFFFFF
color.text = #1E293B

spacing.small = 8px
spacing.medium = 16px
spacing.large = 24px

radius.card = 12px

Component: Primary Button
- Default
- Hover
- Focus
- Disabled`,
          "Create a small design system containing three colors, three spacing values, two typography styles, and a reusable primary button with its states.",
          [
            quiz("What is a design system?", ["A collection of reusable design rules and components", "A database engine", "A network protocol", "A type of operating system"], "A collection of reusable design rules and components", "A design system organizes shared visual rules and interface components."),
            quiz("What are design tokens?", ["Named values for design decisions", "User passwords", "Image filenames", "Programming errors"], "Named values for design decisions", "Design tokens store reusable values such as colors and spacing."),
            quiz("Which is an example of a reusable component?", ["Button", "Database password", "Computer processor", "Internet router"], "Button", "Buttons are reusable interface components."),
            quiz("Which is a common button state?", ["Disabled", "Database", "Compiler", "Network"], "Disabled", "Disabled is one of the states commonly defined for interactive components."),
            quiz("Why is design-system documentation useful?", ["It explains how to use components consistently", "It replaces all design work", "It prevents collaboration", "It removes accessibility requirements"], "It explains how to use components consistently", "Documentation helps teams understand and apply shared design rules.")
          ]
        ),

        lesson(
          "visual-communication-w3-l3",
          "Accessibility and Inclusive Visual Design",
          "Accessible visual design helps people with different abilities understand and use digital products. Designers should consider readability, contrast, text alternatives, keyboard focus, and different ways of communicating information.",
          [
            {
              heading: "1. What is accessibility?",
              content:
                "Accessibility means designing products so people with different abilities can use them. It includes visual, auditory, motor, and cognitive considerations."
            },
            {
              heading: "2. Color contrast",
              content:
                "Text and important interface elements should have sufficient contrast against their backgrounds. Low contrast can make information difficult to read. Designers can use contrast-checking tools to evaluate color combinations."
            },
            {
              heading: "3. Do not rely only on color",
              content:
                "A status should not be communicated only by color. For example, an error message should include text or an icon in addition to a red indicator. This helps users who cannot easily distinguish the colors."
            },
            {
              heading: "4. Text and image accessibility",
              content:
                "Text should be readable and scalable. Meaningful images should have appropriate alternative text. Headings should follow a logical structure so assistive technologies can interpret the content."
            },
            {
              heading: "5. Focus and interaction",
              content:
                "Interactive controls should have visible focus indicators for keyboard users. Buttons, links, and form fields should be identifiable and usable without relying exclusively on a mouse."
            }
          ],
          `Example Accessible Error Message

[Warning icon]

Password is too short.
Please enter at least 8 characters.

Design considerations:
- Clear text message.
- Visible warning icon.
- Readable contrast.
- Helpful next step.`,
          "Review a mobile application screen for accessibility. Check text contrast, text size, color-only indicators, image descriptions, and interactive controls. Suggest five improvements.",
          [
            quiz("What is the purpose of accessibility in design?", ["Help people with different abilities use products", "Make interfaces more confusing", "Remove all text", "Prevent keyboard interaction"], "Help people with different abilities use products", "Accessibility aims to make digital products usable by people with different abilities."),
            quiz("Why is sufficient text contrast important?", ["It improves readability", "It changes database values", "It increases file size", "It replaces typography"], "It improves readability", "Adequate contrast makes text easier to distinguish from its background."),
            quiz("Why should an error not rely only on red color?", ["Some users may not distinguish the color", "Red cannot be displayed on screens", "It prevents text from loading", "It changes the font family"], "Some users may not distinguish the color", "Text and icons provide additional ways to communicate the error."),
            quiz("What is alternative text used for?", ["Describe meaningful images to assistive technology", "Compress a video", "Change an image format", "Create a color palette"], "Describe meaningful images to assistive technology", "Alternative text communicates image information to screen-reader users."),
            quiz("What should keyboard users be able to identify?", ["The currently focused interactive element", "Only the page background", "Only decorative images", "The database server"], "The currently focused interactive element", "Visible focus indicators help keyboard users understand where they are.")
          ]
        ),

        lesson(
          "visual-communication-w3-l4",
          "Designing for Different Platforms and Screen Sizes",
          "Digital products are used on phones, tablets, laptops, desktops, and other devices. Designers must adapt visual communication so that content remains understandable and usable across different screen sizes.",
          [
            {
              heading: "1. Mobile-first design",
              content:
                "Mobile-first design begins by considering the smallest common screen. Designers prioritize essential content and actions, then expand the layout for larger screens."
            },
            {
              heading: "2. Responsive layouts",
              content:
                "Responsive layouts adjust according to available screen space. Columns may stack, navigation may change, and cards may resize while maintaining readable content."
            },
            {
              heading: "3. Breakpoints",
              content:
                "Breakpoints are screen-width conditions where a layout changes. They should be selected based on when the content needs a different arrangement rather than relying only on specific device names."
            },
            {
              heading: "4. Touch and pointer interaction",
              content:
                "Mobile interfaces are often used through touch, while desktop interfaces may use a mouse and keyboard. Controls should be comfortable to activate and should provide clear feedback."
            },
            {
              heading: "5. Testing across devices",
              content:
                "Designers should inspect layouts at different screen sizes and test navigation, forms, images, and text. Testing helps reveal overflow, unreadable text, and poorly positioned controls."
            }
          ],
          `Example Responsive Layout

Desktop:
| Navigation | Main Content | Sidebar |

Tablet:
| Navigation |
| Main Content |
| Sidebar |

Mobile:
| Header |
| Main Content |
| Bottom Navigation |

Keep important content visible and readable.`,
          "Create desktop, tablet, and mobile versions of a student dashboard. Identify which elements change position and which elements remain consistent.",
          [
            quiz("What does mobile-first design prioritize?", ["Essential content on smaller screens", "Desktop-only decoration", "Removing mobile navigation", "Using fixed large layouts"], "Essential content on smaller screens", "Mobile-first design begins by prioritizing essential content for small screens."),
            quiz("What is a responsive layout?", ["A layout that adapts to available screen space", "A layout that never changes", "A fixed image", "A database structure"], "A layout that adapts to available screen space", "Responsive layouts adjust their arrangement according to the viewport."),
            quiz("What is a breakpoint?", ["A condition where the layout changes", "A type of font", "An image filter", "A button label"], "A condition where the layout changes", "Breakpoints define when a responsive layout changes."),
            quiz("Why should touch controls be comfortable to activate?", ["To make mobile interaction easier", "To hide the interface", "To reduce text readability", "To change the brand identity"], "To make mobile interaction easier", "Comfortable controls help users interact with touchscreens."),
            quiz("Why test a design on different screen sizes?", ["To find layout and usability problems", "To change the application name", "To remove all content", "To avoid responsive design"], "To find layout and usability problems", "Different viewports can reveal overflow, spacing, and readability issues.")
          ]
        )
      ]
    },

    // =========================================================
    // WEEK 4
    // =========================================================
    {
      title: "Week 4: Practical Visual Communication Project",
      assignment:
        "Create a complete visual communication design for a mobile application. Include a color palette, typography system, icon set, image style, layout, accessibility improvements, and a final presentation.",

      lessons: [
        lesson(
          "visual-communication-w4-l1",
          "Visual Storytelling and User Journey Communication",
          "Visual storytelling uses images, text, layout, and visual sequences to communicate a message or guide users through an experience. In UI/UX design, it can explain a process and make complex information easier to understand.",
          [
            {
              heading: "1. What is visual storytelling?",
              content:
                "Visual storytelling communicates an idea through a sequence or combination of visual elements. It may use illustrations, photographs, diagrams, typography, and short text."
            },
            {
              heading: "2. Story structure",
              content:
                "A simple story can have a beginning, middle, and end. For example, an onboarding experience can introduce a problem, explain how the application helps, and guide the user toward the first action."
            },
            {
              heading: "3. User journey",
              content:
                "A user journey describes the steps a person takes while trying to achieve a goal. Visual journey maps can show actions, touchpoints, emotions, and possible problems."
            },
            {
              heading: "4. Visual guidance",
              content:
                "Progress indicators, illustrations, step numbers, and clear headings can help users understand where they are in a process and what they should do next."
            },
            {
              heading: "5. Avoiding unnecessary complexity",
              content:
                "Visual storytelling should support the user's goal. Too many illustrations, animations, or unrelated messages can distract from the main task."
            }
          ],
          `Example: Course Enrollment Journey

1. Discover a course.
2. View course details.
3. Select Enroll.
4. Complete enrollment.
5. Start learning.

A progress indicator can communicate
the user's current step.`,
          "Create a visual journey map for a student enrolling in an online course. Show five steps and explain how the interface communicates each step.",
          [
            quiz("What is visual storytelling?", ["Communicating an idea through visual elements and sequences", "Writing database queries", "Creating a network connection", "Changing a file extension"], "Communicating an idea through visual elements and sequences", "Visual storytelling uses visual elements to communicate a message or sequence."),
            quiz("What can a user journey map show?", ["Steps and touchpoints in an experience", "Only the application's source code", "Only server settings", "Only the brand logo"], "Steps and touchpoints in an experience", "A journey map represents the stages a user goes through to achieve a goal."),
            quiz("What is one purpose of a progress indicator?", ["Show the current stage of a process", "Change the user's password", "Delete completed tasks", "Replace all navigation"], "Show the current stage of a process", "Progress indicators communicate where the user is in a sequence."),
            quiz("What should visual storytelling support?", ["The user's goal", "Unrelated decoration", "Unnecessary complexity", "Random animations"], "The user's goal", "Visual storytelling should make the message or task easier to understand."),
            quiz("What is a useful structure for a simple visual story?", ["Beginning, middle, and end", "Only a footer", "Only a title", "Random unrelated screens"], "Beginning, middle, and end", "A simple narrative sequence helps users understand how an experience develops.")
          ]
        ),

        lesson(
          "visual-communication-w4-l2",
          "Data Visualization and Visual Information",
          "Data visualization presents information through charts, graphs, diagrams, and visual summaries. It helps users recognize patterns, compare values, and understand information more quickly.",
          [
            {
              heading: "1. What is data visualization?",
              content:
                "Data visualization converts data into visual representations. Common forms include bar charts, line charts, pie charts, tables, and dashboards."
            },
            {
              heading: "2. Bar charts",
              content:
                "Bar charts compare values across categories. They are useful when users need to compare quantities such as monthly sales, course enrollments, or product counts."
            },
            {
              heading: "3. Line charts",
              content:
                "Line charts show changes over a continuous sequence, often time. They are useful for displaying trends such as monthly progress or daily activity."
            },
            {
              heading: "4. Pie charts",
              content:
                "Pie charts show how a whole is divided into parts. They are most useful when there are a small number of meaningful categories and the proportions add up to a complete whole."
            },
            {
              heading: "5. Honest and accessible charts",
              content:
                "Charts should use clear labels, appropriate scales, readable text, and understandable units. Visual choices should not exaggerate differences or hide important information."
            }
          ],
          `Example Student Dashboard

Course Completion:
Python: 80%
HTML: 60%
CSS: 45%

Possible visualizations:
- Bar chart: Compare course completion.
- Line chart: Show progress over time.
- Summary card: Display total completed lessons.`,
          "Create a student progress dashboard with one bar chart and one line chart. Explain what information each chart communicates.",
          [
            quiz("What is data visualization?", ["Presenting data through visual representations", "Writing only plain-text documents", "Creating database passwords", "Building computer hardware"], "Presenting data through visual representations", "Data visualization turns information into charts, graphs, and other visual forms."),
            quiz("Which chart is useful for comparing categories?", ["Bar chart", "Line chart only", "Decorative illustration", "Logo"], "Bar chart", "Bar charts make category values easy to compare."),
            quiz("Which chart is commonly used to show trends over time?", ["Line chart", "Pie chart only", "Icon set", "Navigation menu"], "Line chart", "Line charts show how values change across a sequence such as time."),
            quiz("What does a pie chart represent?", ["Parts of a whole", "A sequence of program instructions", "A navigation hierarchy", "A typography scale"], "Parts of a whole", "A pie chart divides a whole into proportions."),
            quiz("Why should chart labels and scales be clear?", ["To support accurate interpretation", "To make data harder to understand", "To hide differences", "To remove the need for data"], "To support accurate interpretation", "Clear labels and scales help users interpret values correctly.")
          ]
        ),

        lesson(
          "visual-communication-w4-l3",
          "Portfolio Presentation and Design Documentation",
          "A design portfolio communicates a designer's skills, design decisions, and completed work. Good documentation explains the problem, the design process, the final visual solution, and the reasoning behind important decisions.",
          [
            {
              heading: "1. What is a design portfolio?",
              content:
                "A design portfolio is a collection of selected projects that demonstrates a designer's skills and problem-solving process. It can include UI screens, visual systems, prototypes, and project explanations."
            },
            {
              heading: "2. Case study structure",
              content:
                "A case study can include the project overview, problem statement, target users, goals, research insights, design decisions, final screens, and lessons learned."
            },
            {
              heading: "3. Showing visual decisions",
              content:
                "Explain why you selected a particular color palette, typography system, icon style, layout, or image treatment. Connect each decision to the user's needs and the project's purpose."
            },
            {
              heading: "4. Presenting design work",
              content:
                "Use readable screenshots, consistent spacing, clear headings, and concise explanations. Show important screens in a logical sequence so viewers can understand the experience."
            },
            {
              heading: "5. Reflection and improvement",
              content:
                "A strong case study also describes challenges and possible improvements. Reflection demonstrates that design is an iterative process rather than a single final drawing."
            }
          ],
          `Example Portfolio Case Study

Project: Student Learning App

1. Problem: Students struggle to track learning.
2. Goal: Make course progress easy to understand.
3. Visual approach: Clear typography and hierarchy.
4. Screens: Dashboard, course page, progress page.
5. Result: A consistent learning experience.
6. Reflection: Improvements for future versions.`,
          "Prepare a one-page portfolio case study for a mobile application. Include the problem, users, visual decisions, final screens, and possible improvements.",
          [
            quiz("What is a design portfolio?", ["A collection of work demonstrating design skills", "A database backup", "A programming compiler", "A network configuration"], "A collection of work demonstrating design skills", "A portfolio presents selected work and explains the designer's capabilities."),
            quiz("What should a case study explain?", ["The problem and design process", "Only the file name", "Only the logo color", "Only the computer model"], "The problem and design process", "A case study explains the challenge, decisions, solution, and results."),
            quiz("Why explain visual design decisions?", ["To show the reasoning behind the design", "To hide the design process", "To avoid user research", "To remove project context"], "To show the reasoning behind the design", "Explaining decisions connects visual choices to the problem being solved."),
            quiz("What helps make a portfolio presentation clear?", ["Readable screenshots and organized headings", "Unrelated screenshots", "Tiny text", "Random screen order"], "Readable screenshots and organized headings", "Organized visuals and headings make the project easier to understand."),
            quiz("What is the purpose of project reflection?", ["Identify lessons and future improvements", "Claim that no improvement is possible", "Remove all documentation", "Change the project title"], "Identify lessons and future improvements", "Reflection helps designers identify what worked and what can be improved.")
          ]
        ),

        lesson(
          "visual-communication-w4-l4",
          "Final Project: Complete Visual Communication Design",
          "This final lesson brings together the principles and techniques covered throughout the course. You will create a consistent visual design, explain your decisions, and present the final result as a portfolio-ready project.",
          [
            {
              heading: "1. Select a project",
              content:
                "Choose a mobile application or website concept. Examples include a learning application, shopping application, travel application, health information interface, or student dashboard."
            },
            {
              heading: "2. Define the communication goal",
              content:
                "Describe what users should understand or accomplish. Identify the target audience, important information, primary actions, and potential communication problems."
            },
            {
              heading: "3. Develop the visual system",
              content:
                "Create a color palette, typography hierarchy, icon style, image guidelines, spacing scale, and component styles. Make sure these elements work together."
            },
            {
              heading: "4. Design the screens",
              content:
                "Create at least three connected screens. Use consistent navigation, visual hierarchy, readable typography, meaningful imagery, and appropriate spacing."
            },
            {
              heading: "5. Review and present",
              content:
                "Review the design for consistency, accessibility, readability, and responsiveness. Prepare a presentation containing the project goal, visual system, screen designs, and explanations of your decisions."
            }
          ],
          `Final Project Checklist

[ ] Project goal and target audience
[ ] Color palette
[ ] Typography system
[ ] Icon and imagery guidelines
[ ] Spacing and layout rules
[ ] Three connected interface screens
[ ] Accessibility review
[ ] Desktop or mobile layout review
[ ] Final presentation
[ ] Portfolio case study`,
          "Complete a visual communication project for a mobile application. Submit the project objective, target audience, color palette, typography, icon set, imagery, three interface screens, accessibility review, and a short presentation explaining your design choices.",
          [
            quiz("What should be identified before designing the final project?", ["Project goal and target audience", "Only the background color", "Only the application icon", "Only the file extension"], "Project goal and target audience", "Understanding the goal and audience helps guide visual decisions."),
            quiz("Which elements belong in a visual design system?", ["Colors, typography, spacing, and components", "Only passwords", "Only database records", "Only server addresses"], "Colors, typography, spacing, and components", "A visual system defines reusable rules and interface elements."),
            quiz("Why should connected screens use consistent visual styles?", ["To create a coherent experience", "To make each screen unrelated", "To remove navigation", "To hide important actions"], "To create a coherent experience", "Consistency helps users recognize patterns across the product."),
            quiz("What should an accessibility review check?", ["Contrast, readable text, and accessible controls", "Only the project title", "Only image filenames", "Only the number of screens"], "Contrast, readable text, and accessible controls", "These checks help make the interface usable by more people."),
            quiz("What is the purpose of the final presentation?", ["Explain the design process and final decisions", "Replace the actual design", "Hide the project objective", "Remove the portfolio case study"], "Explain the design process and final decisions", "The presentation communicates the problem, visual solution, and design reasoning.")
          ]
        )
      ]
    }
  ]
};

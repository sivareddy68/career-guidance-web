
export type CSSQuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type CSSLesson = {
  id: string;
  title: string;
  explanation: string;
  example: string;
  exercise: string;
  quiz: CSSQuizQuestion[];
};

export type CSSWeek = {
  week: number;
  title: string;
  description: string;
  lessons: CSSLesson[];
};

export const cssCourse = {
  title: "CSS",
  description:
    "Learn CSS from the basics to responsive website design.",
  duration: "1 Month",
  weeks: [
    {
      week: 1,
      title: "Week 1: CSS Fundamentals",
      description:
        "Learn CSS syntax, selectors, colors, backgrounds, and text styling.",
      lessons: [
        {
          id: "css-w1-l1",
          title: "Introduction to CSS",
          explanation:
            "CSS stands for Cascading Style Sheets. It controls the appearance of HTML elements, including colors, spacing, fonts, and layouts. CSS can be added inline, internally using a style element, or externally using a .css file.",
          example:
            "h1 {\n  color: blue;\n  font-size: 32px;\n}",
          exercise:
            "Create an HTML heading and use CSS to change its color and font size.",
          quiz: [
            {
              question: "What does CSS stand for?",
              options: [
                "Creative Style System",
                "Cascading Style Sheets",
                "Computer Style Syntax",
                "Colorful Styling Sheets",
              ],
              answer: 1,
              explanation:
                "CSS stands for Cascading Style Sheets.",
            },
            {
              question: "What is CSS mainly used for?",
              options: [
                "Styling web pages",
                "Storing data",
                "Creating databases",
                "Managing servers",
              ],
              answer: 0,
              explanation:
                "CSS controls the visual presentation of web pages.",
            },
            {
              question: "Which file extension is used for CSS files?",
              options: [".html", ".js", ".css", ".py"],
              answer: 2,
              explanation: "CSS files use the .css extension.",
            },
            {
              question: "Which property changes text color?",
              options: [
                "background",
                "font-size",
                "color",
                "text-style",
              ],
              answer: 2,
              explanation: "The color property changes text color.",
            },
            {
              question: "Which symbol begins a CSS ID selector?",
              options: [".", "#", "*", "&"],
              answer: 1,
              explanation: "An ID selector begins with #.",
            },
          ],
        },
        {
          id: "css-w1-l2",
          title: "CSS Selectors",
          explanation:
            "Selectors choose which HTML elements receive styles. Element selectors target tags, class selectors begin with a dot, ID selectors begin with a hash, and universal selectors use an asterisk.",
          example:
            "p {\n  color: gray;\n}\n\n.card {\n  padding: 16px;\n}\n\n#title {\n  color: navy;\n}\n\n* {\n  box-sizing: border-box;\n}",
          exercise:
            "Create one element selector, one class selector, and one ID selector in your stylesheet.",
          quiz: [
            {
              question: "Which symbol is used for a class selector?",
              options: ["#", ".", "*", ":"],
              answer: 1,
              explanation: "A class selector starts with a dot.",
            },
            {
              question: "Which symbol is used for an ID selector?",
              options: [".", "#", "@", "$"],
              answer: 1,
              explanation: "An ID selector starts with #.",
            },
            {
              question: "What does the universal selector target?",
              options: [
                "Only headings",
                "Only paragraphs",
                "All elements",
                "Only images",
              ],
              answer: 2,
              explanation: "The asterisk selector targets all elements.",
            },
            {
              question: "Which selector targets all p elements?",
              options: ["#p", ".p", "p", "*p"],
              answer: 2,
              explanation: "The element selector p targets paragraph elements.",
            },
            {
              question: "Which selector is written as .menu?",
              options: [
                "Class selector",
                "ID selector",
                "Element selector",
                "Attribute value",
              ],
              answer: 0,
              explanation: ".menu selects elements with the menu class.",
            },
          ],
        },
        {
          id: "css-w1-l3",
          title: "Colors and Backgrounds",
          explanation:
            "CSS supports named colors, hexadecimal colors, RGB, and HSL values. Background properties let you set background colors and images. Use readable color combinations so text remains easy to read.",
          example:
            "body {\n  background-color: #f1f5f9;\n  color: #1e293b;\n}\n\n.banner {\n  background-color: lightblue;\n}",
          exercise:
            "Design a page with a background color, a different heading color, and a contrasting paragraph color.",
          quiz: [
            {
              question: "Which property sets an element's background color?",
              options: [
                "color",
                "background-color",
                "font-color",
                "fill-text",
              ],
              answer: 1,
              explanation:
                "background-color sets the background color.",
            },
            {
              question: "Which is a valid hexadecimal color?",
              options: ["#ff0000", "red()", "color-red", "ff#0000"],
              answer: 0,
              explanation: "#ff0000 is a valid hexadecimal color.",
            },
            {
              question: "Which function represents RGB colors?",
              options: ["COLOR()", "RGB()", "rgb()", "PAINT()"],
              answer: 2,
              explanation: "The CSS function is written rgb().",
            },
            {
              question: "Which property can set a background image?",
              options: [
                "background-image",
                "image-color",
                "picture-style",
                "src-image",
              ],
              answer: 0,
              explanation: "background-image sets a background image.",
            },
            {
              question: "Why should text and background colors contrast?",
              options: [
                "To improve readability",
                "To increase file size",
                "To remove HTML",
                "To disable CSS",
              ],
              answer: 0,
              explanation:
                "Good contrast makes content easier to read.",
            },
          ],
        },
        {
          id: "css-w1-l4",
          title: "Text and Fonts",
          explanation:
            "CSS typography properties control how text looks. Common properties include font-family, font-size, font-weight, text-align, line-height, and text-decoration.",
          example:
            "p {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n}\n\nh1 {\n  text-align: center;\n  font-weight: bold;\n}",
          exercise:
            "Style a heading and two paragraphs using different font sizes, alignment, and line spacing.",
          quiz: [
            {
              question: "Which property changes text size?",
              options: [
                "font-size",
                "text-height",
                "font-style-size",
                "letter-size",
              ],
              answer: 0,
              explanation: "font-size controls text size.",
            },
            {
              question: "Which property aligns text?",
              options: [
                "font-weight",
                "text-align",
                "text-color",
                "align-font",
              ],
              answer: 1,
              explanation: "text-align controls horizontal text alignment.",
            },
            {
              question: "Which property makes text bold?",
              options: [
                "font-weight",
                "text-boldness",
                "font-height",
                "text-align",
              ],
              answer: 0,
              explanation: "font-weight controls the weight of text.",
            },
            {
              question: "Which property changes the font family?",
              options: [
                "font-family",
                "font-name",
                "text-family",
                "family-style",
              ],
              answer: 0,
              explanation: "font-family specifies the typeface.",
            },
            {
              question: "Which property controls line spacing?",
              options: [
                "letter-spacing",
                "line-height",
                "text-indent",
                "font-weight",
              ],
              answer: 1,
              explanation: "line-height controls the height of text lines.",
            },
          ],
        },
      ],
    },
    {
      week: 2,
      title: "Week 2: Box Model and Layout",
      description:
        "Understand margins, padding, borders, sizing, and Flexbox.",
      lessons: [
        {
          id: "css-w2-l1",
          title: "CSS Box Model",
          explanation:
            "Every element can be understood as a box. Its content is surrounded by padding, a border, and margin. Padding creates space inside the border, while margin creates space outside it.",
          example:
            ".card {\n  margin: 20px;\n  padding: 16px;\n  border: 1px solid gray;\n}",
          exercise:
            "Create a card and adjust its margin, padding, and border.",
          quiz: [
            {
              question: "Which property creates space inside an element's border?",
              options: ["margin", "padding", "outline", "gap"],
              answer: 1,
              explanation: "Padding is the space between content and border.",
            },
            {
              question: "Which property creates space outside the border?",
              options: ["padding", "margin", "width", "font-size"],
              answer: 1,
              explanation: "Margin creates space outside an element.",
            },
            {
              question: "What does border style a box with?",
              options: [
                "An outer line",
                "A database",
                "A font",
                "A JavaScript function",
              ],
              answer: 0,
              explanation: "The border property draws a boundary around an element.",
            },
            {
              question: "What does box-sizing: border-box do?",
              options: [
                "Includes padding and border in the specified size",
                "Removes all padding",
                "Hides the element",
                "Changes the font",
              ],
              answer: 0,
              explanation:
                "With border-box, the declared width includes padding and border.",
            },
            {
              question: "Which property controls an element's width?",
              options: ["width", "wide", "size-x", "length"],
              answer: 0,
              explanation: "The width property sets the width.",
            },
          ],
        },
        {
          id: "css-w2-l2",
          title: "Margins, Padding and Borders",
          explanation:
            "Margins, padding, and borders control spacing and boundaries. You can set each side separately or use shorthand declarations. Consistent spacing helps make a page easier to understand.",
          example:
            ".box {\n  margin: 12px;\n  padding: 20px 16px;\n  border: 2px solid #64748b;\n  border-radius: 8px;\n}",
          exercise:
            "Build three boxes with different padding, margins, and rounded borders.",
          quiz: [
            {
              question: "Which property rounds box corners?",
              options: [
                "corner-style",
                "border-radius",
                "round-border",
                "radius-style",
              ],
              answer: 1,
              explanation: "border-radius rounds corners.",
            },
            {
              question: "What does padding: 10px set?",
              options: [
                "10px padding on every side",
                "10px margin only",
                "10px border width",
                "10px text size",
              ],
              answer: 0,
              explanation: "One padding value applies to all four sides.",
            },
            {
              question: "Which property sets border thickness and style together?",
              options: [
                "border",
                "padding",
                "margin",
                "outline-text",
              ],
              answer: 0,
              explanation: "The border shorthand combines border settings.",
            },
            {
              question: "Which property adds space between Flexbox items?",
              options: ["gap", "font-size", "color", "opacity"],
              answer: 0,
              explanation: "The gap property sets spacing between items.",
            },
            {
              question: "Where is margin located?",
              options: [
                "Outside the border",
                "Inside the content",
                "Inside the font",
                "Inside the background image",
              ],
              answer: 0,
              explanation: "Margin is outside the border.",
            },
          ],
        },
        {
          id: "css-w2-l3",
          title: "Display and Position",
          explanation:
            "The display property controls how elements participate in layout. Common values include block, inline, inline-block, flex, and grid. Positioning options include static, relative, absolute, fixed, and sticky.",
          example:
            ".container {\n  display: flex;\n  gap: 12px;\n}\n\n.badge {\n  position: relative;\n}",
          exercise:
            "Create a horizontal navigation menu using display: flex and experiment with positioning.",
          quiz: [
            {
              question: "Which display value creates a Flexbox container?",
              options: ["block", "flex", "inline", "none"],
              answer: 1,
              explanation: "display: flex creates a Flexbox container.",
            },
            {
              question: "Which position value removes an element from normal flow and positions it relative to a positioned ancestor?",
              options: ["static", "absolute", "inline", "normal"],
              answer: 1,
              explanation:
                "Absolute positioning uses a positioned containing block.",
            },
            {
              question: "Which value hides an element and removes its layout space?",
              options: [
                "visibility: hidden",
                "display: none",
                "opacity: 0",
                "position: relative",
              ],
              answer: 1,
              explanation:
                "display: none removes the element from layout.",
            },
            {
              question: "Which positioning value can stick an element while scrolling?",
              options: ["sticky", "inline", "static", "content"],
              answer: 0,
              explanation: "position: sticky can stick an element during scrolling.",
            },
            {
              question: "Which property controls stacking order of positioned elements?",
              options: ["z-index", "stack", "layer-order", "display"],
              answer: 0,
              explanation: "z-index controls stacking order.",
            },
          ],
        },
        {
          id: "css-w2-l4",
          title: "Flexbox Layout",
          explanation:
            "Flexbox is a one-dimensional layout system for arranging items in a row or column. Use justify-content to distribute items along the main axis and align-items to align them along the cross axis.",
          example:
            ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}",
          exercise:
            "Create a responsive row of three cards using Flexbox.",
          quiz: [
            {
              question: "Which property activates Flexbox?",
              options: [
                "display: flex",
                "position: flex",
                "layout: row",
                "flex: display",
              ],
              answer: 0,
              explanation: "display: flex activates Flexbox.",
            },
            {
              question: "Which property aligns items along the cross axis?",
              options: [
                "align-items",
                "justify-content",
                "font-size",
                "z-index",
              ],
              answer: 0,
              explanation: "align-items controls cross-axis alignment.",
            },
            {
              question: "Which property distributes items along the main axis?",
              options: [
                "justify-content",
                "align-text",
                "border",
                "overflow",
              ],
              answer: 0,
              explanation: "justify-content distributes items along the main axis.",
            },
            {
              question: "Which property allows flex items to move onto another line?",
              options: [
                "flex-wrap",
                "flex-font",
                "item-break",
                "display-block",
              ],
              answer: 0,
              explanation: "flex-wrap: wrap allows items to wrap.",
            },
            {
              question: "Which property sets the spacing between flex items?",
              options: ["gap", "margin-text", "align-items", "float"],
              answer: 0,
              explanation: "gap sets the spacing between items.",
            },
          ],
        },
      ],
    },
    {
      week: 3,
      title: "Week 3: Grid and Responsive Design",
      description:
        "Learn CSS Grid, media queries, responsive units, and reusable styling.",
      lessons: [
        {
          id: "css-w3-l1",
          title: "CSS Grid",
          explanation:
            "CSS Grid is a two-dimensional layout system for rows and columns. Use display: grid to create a grid container and grid-template-columns to define its columns.",
          example:
            ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}",
          exercise:
            "Create a grid containing six cards. Use three columns on a wide screen.",
          quiz: [
            {
              question: "Which declaration creates a Grid container?",
              options: [
                "display: grid",
                "position: grid",
                "grid: display",
                "layout: grid",
              ],
              answer: 0,
              explanation: "display: grid creates a Grid container.",
            },
            {
              question: "What does 1fr represent in CSS Grid?",
              options: [
                "One fraction of available space",
                "One fixed pixel",
                "One font",
                "One row only",
              ],
              answer: 0,
              explanation: "fr represents a fraction of available grid space.",
            },
            {
              question: "Which property defines grid columns?",
              options: [
                "grid-template-columns",
                "column-color",
                "grid-width-only",
                "column-font",
              ],
              answer: 0,
              explanation: "grid-template-columns defines grid columns.",
            },
            {
              question: "Which function repeats grid track definitions?",
              options: ["repeat()", "again()", "loop()", "columns()"],
              answer: 0,
              explanation: "repeat() repeats a track pattern.",
            },
            {
              question: "Can CSS Grid arrange rows and columns?",
              options: ["Yes", "No", "Only rows", "Only text"],
              answer: 0,
              explanation: "Grid supports two-dimensional layouts.",
            },
          ],
        },
        {
          id: "css-w3-l2",
          title: "Responsive Design",
          explanation:
            "Responsive design makes a website work on different screen sizes. Flexible layouts, responsive images, relative units, and media queries help pages adapt to phones, tablets, and desktops.",
          example:
            ".cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}",
          exercise:
            "Make a card layout adapt to narrow screens without horizontal scrolling.",
          quiz: [
            {
              question: "What is the purpose of responsive design?",
              options: [
                "Adapt layouts to different screens",
                "Only support desktops",
                "Remove all images",
                "Replace HTML",
              ],
              answer: 0,
              explanation: "Responsive design adapts content to screen sizes.",
            },
            {
              question: "Which rule is commonly used for responsive breakpoints?",
              options: [
                "@media",
                "@screen-only",
                "@responsive",
                "@device-size",
              ],
              answer: 0,
              explanation: "@media applies styles under specified conditions.",
            },
            {
              question: "Which setting helps images fit their containers?",
              options: [
                "max-width: 100%",
                "width: 2000px",
                "font-size: 100%",
                "position: fixed",
              ],
              answer: 0,
              explanation: "max-width: 100% prevents images from exceeding their container width.",
            },
            {
              question: "Which unit is relative to the root font size?",
              options: ["rem", "px", "cm", "pt"],
              answer: 0,
              explanation: "rem is relative to the root element's font size.",
            },
            {
              question: "Which approach is usually best for flexible layouts?",
              options: [
                "Flexible sizing and responsive rules",
                "Fixed huge widths everywhere",
                "Disable viewport scaling",
                "Hide all content on phones",
              ],
              answer: 0,
              explanation: "Flexible layouts can adapt to available screen space.",
            },
          ],
        },
        {
          id: "css-w3-l3",
          title: "Media Queries",
          explanation:
            "Media queries apply styles when conditions such as viewport width are met. They help change layout, spacing, and typography for different screen sizes.",
          example:
            ".cards {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n@media (max-width: 700px) {\n  .cards {\n    grid-template-columns: 1fr;\n  }\n}",
          exercise:
            "Use a media query to change a three-column layout to one column on small screens.",
          quiz: [
            {
              question: "Which keyword starts a CSS media query?",
              options: ["@media", "@query", "@device", "@screen"],
              answer: 0,
              explanation: "@media starts a media query.",
            },
            {
              question: "What does max-width: 700px commonly mean in a media query?",
              options: [
                "Viewport width is at most 700px",
                "Viewport width is always above 700px",
                "Element height is 700px",
                "Font size is 700px",
              ],
              answer: 0,
              explanation: "max-width matches widths at or below the specified value.",
            },
            {
              question: "Can media queries change grid columns?",
              options: ["Yes", "No", "Only colors", "Only font names"],
              answer: 0,
              explanation: "Media queries can change grid layout rules.",
            },
            {
              question: "Where can a media query be written?",
              options: [
                "In a CSS stylesheet",
                "Only in a database",
                "Only in a file name",
                "Only in SQL",
              ],
              answer: 0,
              explanation: "Media queries are written in CSS.",
            },
            {
              question: "Why test a website at multiple widths?",
              options: [
                "To check responsive behavior",
                "To remove the stylesheet",
                "To disable links",
                "To change the file extension",
              ],
              answer: 0,
              explanation: "Testing multiple widths reveals layout problems.",
            },
          ],
        },
        {
          id: "css-w3-l4",
          title: "CSS Units and Variables",
          explanation:
            "CSS supports units such as px, %, em, rem, vw, and vh. Custom properties, often called CSS variables, help reuse values and make styles easier to maintain.",
          example:
            ":root {\n  --primary: #2563eb;\n  --spacing: 16px;\n}\n\n.button {\n  background: var(--primary);\n  padding: var(--spacing);\n}",
          exercise:
            "Define a primary color and spacing variable, then use them in two different components.",
          quiz: [
            {
              question: "Which syntax declares a CSS custom property?",
              options: [
                "--primary: blue",
                "$primary: blue",
                "var-primary: blue",
                "custom-primary: blue",
              ],
              answer: 0,
              explanation: "Custom properties are declared with names beginning with two hyphens.",
            },
            {
              question: "Which function reads a CSS custom property?",
              options: ["var()", "value()", "read()", "getCSS()"],
              answer: 0,
              explanation: "var() accesses a CSS custom property.",
            },
            {
              question: "Which unit is relative to viewport width?",
              options: ["vw", "vh", "rem", "px"],
              answer: 0,
              explanation: "vw is based on viewport width.",
            },
            {
              question: "Which unit is relative to viewport height?",
              options: ["vh", "vw", "em", "rem"],
              answer: 0,
              explanation: "vh is based on viewport height.",
            },
            {
              question: "Why use CSS variables?",
              options: [
                "To reuse and maintain values",
                "To replace all HTML",
                "To execute JavaScript",
                "To store passwords",
              ],
              answer: 0,
              explanation: "Variables make repeated design values easier to maintain.",
            },
          ],
        },
      ],
    },
    {
      week: 4,
      title: "Week 4: Effects and Final Project",
      description:
        "Practise transitions, pseudo-classes, accessibility, and build a styled website.",
      lessons: [
        {
          id: "css-w4-l1",
          title: "Hover Effects and Pseudo-classes",
          explanation:
            "Pseudo-classes style elements in particular states. For example, :hover applies when a pointer is over an element, :focus styles focused controls, and :first-child selects an element that is the first child of its parent.",
          example:
            ".button:hover {\n  background-color: #1d4ed8;\n}\n\ninput:focus {\n  outline: 2px solid #2563eb;\n}",
          exercise:
            "Add hover styles to a button and focus styles to a form input.",
          quiz: [
            {
              question: "Which pseudo-class applies when an element is hovered?",
              options: [":hover", ":click", ":mouse", ":over"],
              answer: 0,
              explanation: ":hover applies when the pointer is over an element.",
            },
            {
              question: "Which pseudo-class indicates keyboard focus?",
              options: [":focus", ":active-only", ":select", ":tab"],
              answer: 0,
              explanation: ":focus styles a focused element.",
            },
            {
              question: "Which pseudo-class selects the first child?",
              options: [
                ":first-child",
                ":first-element-only",
                ":begin",
                ":start-child",
              ],
              answer: 0,
              explanation: ":first-child selects the first child of its parent.",
            },
            {
              question: "Which selector can style a disabled input?",
              options: [
                ":disabled",
                ":off",
                ":inactive-only",
                ":blocked",
              ],
              answer: 0,
              explanation: ":disabled selects disabled form controls.",
            },
            {
              question: "Should keyboard focus remain visible?",
              options: [
                "Yes, for accessibility",
                "No, always remove it",
                "Only on images",
                "Only in print",
              ],
              answer: 0,
              explanation: "Visible focus helps keyboard users navigate a page.",
            },
          ],
        },
        {
          id: "css-w4-l2",
          title: "Transitions and Transforms",
          explanation:
            "Transitions animate changes in CSS property values. Transforms can move, rotate, scale, or skew an element. Keep effects subtle and avoid animations that make content difficult to use.",
          example:
            ".card {\n  transition: transform 0.2s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n}",
          exercise:
            "Add a smooth hover transition to a card and a button.",
          quiz: [
            {
              question: "Which property controls transition effects?",
              options: [
                "transition",
                "animate-now",
                "motion",
                "transform-only",
              ],
              answer: 0,
              explanation: "The transition property defines animated changes.",
            },
            {
              question: "Which function rotates an element?",
              options: [
                "rotate()",
                "turn-element()",
                "spin-text()",
                "angle-style()",
              ],
              answer: 0,
              explanation: "rotate() is a transform function.",
            },
            {
              question: "Which function scales an element?",
              options: [
                "scale()",
                "resize-text()",
                "zoom-page()",
                "grow-font()",
              ],
              answer: 0,
              explanation: "scale() changes an element's rendered size.",
            },
            {
              question: "Which property can move an element visually?",
              options: [
                "transform",
                "font-family",
                "text-decoration",
                "background-color-only",
              ],
              answer: 0,
              explanation: "Transforms can translate an element.",
            },
            {
              question: "What does transition-duration control?",
              options: [
                "How long a transition takes",
                "The element's width",
                "The text color only",
                "The number of grid columns",
              ],
              answer: 0,
              explanation: "transition-duration sets the transition time.",
            },
          ],
        },
        {
          id: "css-w4-l3",
          title: "Styling Forms and Accessibility",
          explanation:
            "Forms should have readable labels, clear focus states, sufficient contrast, and usable controls. CSS can improve appearance, but labels and semantic HTML are important for accessibility.",
          example:
            "input, textarea {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #94a3b8;\n  border-radius: 6px;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: 2px solid #2563eb;\n}",
          exercise:
            "Style a contact form with labels, text fields, a textarea, and a submit button.",
          quiz: [
            {
              question: "Why should form fields have labels?",
              options: [
                "To identify each field clearly",
                "To hide the input",
                "To replace CSS",
                "To make forms uneditable",
              ],
              answer: 0,
              explanation: "Labels help users understand the purpose of form controls.",
            },
            {
              question: "Which pseudo-class styles a focused input?",
              options: [":focus", ":hover-only", ":first", ":visited"],
              answer: 0,
              explanation: ":focus applies when the input receives focus.",
            },
            {
              question: "What does good color contrast improve?",
              options: [
                "Readability",
                "Database performance",
                "JavaScript syntax",
                "File compression",
              ],
              answer: 0,
              explanation: "Contrast helps users read text more easily.",
            },
            {
              question: "Which HTML element is commonly used for multi-line input?",
              options: [
                "textarea",
                "paragraph",
                "heading",
                "span",
              ],
              answer: 0,
              explanation: "textarea is used for multi-line text input.",
            },
            {
              question: "Should interactive controls be usable with a keyboard?",
              options: [
                "Yes",
                "No",
                "Only images",
                "Only on phones",
              ],
              answer: 0,
              explanation: "Keyboard support is an important accessibility requirement.",
            },
          ],
        },
        {
          id: "css-w4-l4",
          title: "Final Project: Responsive Portfolio",
          explanation:
            "Combine your CSS skills to style a personal portfolio website. Include a header, an introduction, a skills section, project cards, and contact information. Make the layout responsive and test it on different screen sizes.",
          example:
            "/* Example responsive card */\n.project-card {\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid #cbd5e1;\n  transition: transform 0.2s ease;\n}\n\n.project-card:hover {\n  transform: translateY(-3px);\n}",
          exercise:
            "Build and style a responsive portfolio with a navigation bar, introduction, skills, at least three project cards, and a contact section.",
          quiz: [
            {
              question: "What is the main goal of this final project?",
              options: [
                "Build a responsive portfolio",
                "Create a database server",
                "Write an operating system",
                "Replace HTML with CSS",
              ],
              answer: 0,
              explanation: "The project brings CSS skills together in a portfolio.",
            },
            {
              question: "Which layout tools can help arrange project cards?",
              options: [
                "Flexbox or Grid",
                "Only font-weight",
                "Only text-decoration",
                "Only border-color",
              ],
              answer: 0,
              explanation: "Flexbox and Grid are both useful layout systems.",
            },
            {
              question: "Why test a portfolio on different screen sizes?",
              options: [
                "To verify responsive behavior",
                "To remove all styling",
                "To prevent scrolling forever",
                "To change CSS into SQL",
              ],
              answer: 0,
              explanation: "Different screen sizes can reveal layout issues.",
            },
            {
              question: "Which section displays examples of completed work?",
              options: [
                "Projects section",
                "Only the footer",
                "Browser settings",
                "Database schema",
              ],
              answer: 0,
              explanation: "The projects section showcases completed work.",
            },
            {
              question: "What should you do before finishing the project?",
              options: [
                "Test layout, links, and readability",
                "Delete all styles",
                "Remove the HTML",
                "Ignore mobile screens",
              ],
              answer: 0,
              explanation: "Testing helps ensure the portfolio works as intended.",
            },
          ],
        },
      ],
    },
  ],
};


export type HTMLQuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type HTMLLesson = {
  id: string;
  title: string;
  explanation: string;
  example: string;
  exercise: string;
  quiz: HTMLQuizQuestion[];
};

export type HTMLWeek = {
  week: number;
  title: string;
  description: string;
  lessons: HTMLLesson[];
};

const makeQuiz = (
  question: string,
  options: string[],
  answer: number,
  explanation: string
): HTMLQuizQuestion => ({ question, options, answer, explanation });

const makeLesson = (
  id: string,
  title: string,
  explanation: string,
  example: string,
  exercise: string,
  questions: HTMLQuizQuestion[]
): HTMLLesson => ({
  id,
  title,
  explanation,
  example,
  exercise,
  quiz: questions,
});

export const htmlCourse = {
  title: "HTML",
  description: "Learn HTML from the basics to building complete web pages.",
  duration: "1 Month",
  weeks: [
    {
      week: 1,
      title: "HTML Fundamentals",
      description: "Learn the structure and basic elements of HTML.",
      lessons: [
        makeLesson(
          "html-w1-l1",
          "Introduction to HTML",
          "HTML stands for HyperText Markup Language. It defines the structure of a web page using elements represented by tags.",
          `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to HTML!</p>
  </body>
</html>`,
          "Create a web page that displays your name as a heading and a short introduction.",
          [
            makeQuiz("What does HTML stand for?", ["HyperText Markup Language", "HighText Machine Language", "Home Tool Markup Language", "Hyper Transfer Main Language"], 0, "HTML stands for HyperText Markup Language."),
            makeQuiz("What is HTML mainly used for?", ["Styling pages", "Structuring web pages", "Managing databases", "Editing images"], 1, "HTML defines the structure and content of web pages."),
            makeQuiz("Which declaration identifies an HTML5 document?", ["<html5>", "<doctype>", "<!DOCTYPE html>", "<head>"], 2, "The DOCTYPE declaration identifies the document as HTML5."),
            makeQuiz("Which tag contains visible page content?", ["<body>", "<head>", "<title>", "<meta>"], 0, "The body element contains the main visible page content."),
            makeQuiz("HTML elements are usually written using what?", ["Parentheses", "Tags", "SQL queries", "Python functions"], 1, "HTML uses tags such as h1, p, and div.")
          ]
        ),
        makeLesson(
          "html-w1-l2",
          "Headings and Paragraphs",
          "Headings range from h1 to h6. The h1 element represents the highest-level heading, while h6 represents the lowest. The p element creates a paragraph.",
          `<h1>My Website</h1>
<h2>About Me</h2>
<p>I am learning web development.</p>
<h3>My Goals</h3>
<p>I want to build useful websites.</p>`,
          "Create one main heading, two subheadings, and a paragraph under each subheading.",
          [
            makeQuiz("Which tag creates the highest-level heading?", ["<h6>", "<heading>", "<h1>", "<head>"], 2, "h1 is the highest-level heading."),
            makeQuiz("Which tag creates a paragraph?", ["<p>", "<para>", "<text>", "<pg>"], 0, "The p element represents a paragraph."),
            makeQuiz("How many heading levels does HTML provide?", ["3", "4", "5", "6"], 3, "HTML provides h1 through h6."),
            makeQuiz("Which heading is the lowest-level heading?", ["<h1>", "<h3>", "<h6>", "<h2>"], 2, "h6 is the lowest-level heading."),
            makeQuiz("Can a page contain multiple paragraphs?", ["Yes", "No", "Only two", "Only inside tables"], 0, "You can create as many paragraphs as the content requires.")
          ]
        ),
        makeLesson(
          "html-w1-l3",
          "Links and Images",
          "The a element creates a hyperlink using href. The img element displays an image using src and should include useful alt text.",
          `<a href="https://example.com">Visit Example</a>

<img
  src="photo.jpg"
  alt="A mountain landscape"
  width="300"
/>`,
          "Add a link to a website and display an image with descriptive alt text.",
          [
            makeQuiz("Which attribute specifies a link destination?", ["src", "href", "alt", "target"], 1, "href specifies the hyperlink destination."),
            makeQuiz("Which tag displays an image?", ["<picture-text>", "<image>", "<img>", "<photo>"], 2, "The img element embeds an image."),
            makeQuiz("Which attribute provides alternative text?", ["title", "name", "alt", "value"], 2, "alt describes the image when it cannot be seen or loaded."),
            makeQuiz("Which attribute specifies an image file?", ["href", "src", "link", "action"], 1, "src points to the image resource."),
            makeQuiz("Which tag creates a hyperlink?", ["<a>", "<linkto>", "<url>", "<href>"], 0, "The a element creates a hyperlink.")
          ]
        ),
        makeLesson(
          "html-w1-l4",
          "Lists in HTML",
          "Use ul for unordered lists, ol for ordered lists, and li for individual list items.",
          `<h2>My Skills</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>Learning Plan</h2>
<ol>
  <li>Learn HTML</li>
  <li>Practice CSS</li>
  <li>Build a project</li>
</ol>`,
          "Create an unordered list of three hobbies and an ordered list of three learning goals.",
          [
            makeQuiz("Which tag creates an unordered list?", ["<ol>", "<ul>", "<li>", "<list>"], 1, "ul creates a list without a required numerical order."),
            makeQuiz("Which tag creates a numbered list?", ["<ul>", "<li>", "<ol>", "<dl>"], 2, "ol creates an ordered list."),
            makeQuiz("Which tag represents a list item?", ["<item>", "<li>", "<ul>", "<point>"], 1, "li represents an individual list item."),
            makeQuiz("Which list is suitable for numbered steps?", ["Unordered list", "Ordered list", "Image list", "Paragraph list"], 1, "An ordered list is appropriate when sequence matters."),
            makeQuiz("Can a list contain multiple li elements?", ["Yes", "No", "Only in ol", "Only in ul"], 0, "Both ordered and unordered lists can contain multiple list items.")
          ]
        ),
      ],
    },
    {
      week: 2,
      title: "HTML Content and Structure",
      description: "Learn formatting, tables, semantic elements, and special characters.",
      lessons: [
        makeLesson(
          "html-w2-l1",
          "Text Formatting",
          "HTML provides elements such as strong for importance, em for emphasis, mark for highlighting, and code for code snippets.",
          `<p><strong>Important information</strong></p>
<p><em>Emphasized text</em></p>
<p><mark>Highlighted text</mark></p>
<p>Use <code>console.log()</code> in JavaScript.</p>`,
          "Write a paragraph with important text, emphasized text, and one highlighted word.",
          [
            makeQuiz("Which tag indicates strong importance?", ["<b>", "<strong>", "<big>", "<important>"], 1, "strong conveys strong importance."),
            makeQuiz("Which tag represents emphasis?", ["<em>", "<italicize>", "<i-text>", "<style>"], 0, "em represents stress emphasis."),
            makeQuiz("Which tag highlights text?", ["<highlight>", "<mark>", "<yellow>", "<focus>"], 1, "mark represents text highlighted for reference."),
            makeQuiz("Which tag represents inline code?", ["<pre>", "<script>", "<code>", "<program>"], 2, "code represents a fragment of computer code."),
            makeQuiz("Which tag creates a line break?", ["<lb>", "<break>", "<br>", "<newline>"], 2, "br creates a line break.")
          ]
        ),
        makeLesson(
          "html-w2-l2",
          "Tables",
          "Tables organize tabular data. Use table for the table, tr for rows, th for header cells, and td for data cells.",
          `<table>
  <tr>
    <th>Name</th>
    <th>Course</th>
  </tr>
  <tr>
    <td>Siva</td>
    <td>HTML</td>
  </tr>
</table>`,
          "Create a table with two column headings and at least two rows of student information.",
          [
            makeQuiz("Which tag creates a table row?", ["<td>", "<tr>", "<th>", "<row>"], 1, "tr represents a table row."),
            makeQuiz("Which tag represents a table header cell?", ["<head>", "<th>", "<td>", "<theadcell>"], 1, "th represents a header cell."),
            makeQuiz("Which tag represents a regular data cell?", ["<cell>", "<tr>", "<td>", "<data>"], 2, "td represents a table data cell."),
            makeQuiz("Which element contains the table?", ["<table>", "<tab>", "<grid>", "<sheet>"], 0, "The table element contains the tabular data."),
            makeQuiz("Should tables be used for the main page layout?", ["Yes, always", "No, use layout techniques such as CSS Grid or Flexbox", "Only on phones", "Only for headings"], 1, "Modern page layouts should use CSS layout techniques rather than data tables.")
          ]
        ),
        makeLesson(
          "html-w2-l3",
          "Semantic HTML",
          "Semantic elements describe the meaning of page sections. Common examples include header, nav, main, section, article, and footer.",
          `<header>
  <h1>My Portfolio</h1>
</header>
<nav>
  <a href="#about">About</a>
</nav>
<main>
  <section id="about">
    <h2>About Me</h2>
    <p>I am a student.</p>
  </section>
</main>
<footer>My Portfolio</footer>`,
          "Build a page using header, nav, main, section, and footer.",
          [
            makeQuiz("Which element represents the main page content?", ["<main>", "<footer>", "<aside>", "<nav>"], 0, "main represents the dominant content of the page."),
            makeQuiz("Which element commonly contains navigation links?", ["<nav>", "<mark>", "<summary>", "<label>"], 0, "nav represents a section of navigation links."),
            makeQuiz("Which element is often used for the bottom section of a page?", ["<bottom>", "<footer>", "<end>", "<last>"], 1, "footer commonly contains footer information."),
            makeQuiz("What is a benefit of semantic HTML?", ["It automatically adds animations", "It communicates meaning and improves accessibility", "It replaces every CSS rule", "It creates a database"], 1, "Semantic elements communicate structure to browsers and assistive technologies."),
            makeQuiz("Which element can represent a self-contained article?", ["<article>", "<font>", "<span>", "<br>"], 0, "article represents self-contained content.")
          ]
        ),
        makeLesson(
          "html-w2-l4",
          "Entities and Comments",
          "HTML entities let you display reserved characters. Comments are written between comment delimiters and are not displayed as page content.",
          `<!-- This is a comment -->
<p>Use &lt; to display a less-than sign.</p>
<p>Use &amp; to display an ampersand.</p>
<p>Copyright &copy; 2026</p>`,
          "Add a comment and display the less-than sign, ampersand, and copyright symbol.",
          [
            makeQuiz("How does an HTML comment begin?", ["//", "/*", "<!--", "#"], 2, "HTML comments begin with <!--."),
            makeQuiz("Which entity displays a less-than sign?", ["&gt;", "&lt;", "&amp;", "&nbsp;"], 1, "&lt; represents the less-than character."),
            makeQuiz("Which entity represents an ampersand?", ["&and;", "&amp;", "&symbol;", "&at;"], 1, "&amp; represents an ampersand."),
            makeQuiz("Are HTML comments normally visible on the rendered page?", ["Yes, always", "No", "Only on mobile", "Only in tables"], 1, "Comments are not rendered as visible page content."),
            makeQuiz("Which entity represents a copyright symbol?", ["&copy;", "&cr;", "&copyright-symbol;", "&right;"], 0, "&copy; represents the copyright symbol.")
          ]
        ),
      ],
    },
    {
      week: 3,
      title: "Forms and Interactive Elements",
      description: "Collect user input and build more useful web pages.",
      lessons: [
        makeLesson(
          "html-w3-l1",
          "Forms and Inputs",
          "The form element groups controls for submitting data. Input types include text, email, password, number, and checkbox.",
          `<form action="/submit" method="post">
  <label for="username">Name:</label>
  <input id="username" name="username" type="text" />

  <label for="email">Email:</label>
  <input id="email" name="email" type="email" />

  <button type="submit">Submit</button>
</form>`,
          "Create a form that asks for a name and email address and includes a submit button.",
          [
            makeQuiz("Which element creates a form?", ["<input>", "<form>", "<fieldset-only>", "<submit>"], 1, "form groups controls for submitting information."),
            makeQuiz("Which input type is designed for email addresses?", ["text", "email", "mailbox", "address"], 1, "type=email provides email-oriented input and browser validation."),
            makeQuiz("Which attribute gives submitted form data its field name?", ["id", "name", "class", "style"], 1, "The name attribute identifies a control's submitted field."),
            makeQuiz("Which element provides a clickable submit control?", ["<button type=\"submit\">", "<paragraph>", "<title>", "<meta>"], 0, "A submit button submits the form."),
            makeQuiz("What does the label element do?", ["Adds a database", "Describes a form control", "Changes the page URL automatically", "Creates a table"], 1, "Labels help users understand form controls and improve accessibility.")
          ]
        ),
        makeLesson(
          "html-w3-l2",
          "Labels, Selects, and Textareas",
          "Use label to identify a control, select and option for a dropdown, and textarea for multi-line text.",
          `<label for="course">Choose a course:</label>
<select id="course" name="course">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
</select>

<label for="message">Message:</label>
<textarea id="message" name="message"></textarea>`,
          "Create a dropdown with three courses and a textarea for feedback.",
          [
            makeQuiz("Which element creates a dropdown?", ["<dropdown>", "<select>", "<options>", "<menu-input>"], 1, "select creates a dropdown control."),
            makeQuiz("Which element defines a dropdown choice?", ["<choice>", "<option>", "<item>", "<li>"], 1, "option represents an available choice."),
            makeQuiz("Which element accepts multi-line text?", ["<input>", "<textarea>", "<textline>", "<paragraph-input>"], 1, "textarea accepts multi-line text."),
            makeQuiz("How is a label associated with a control by ID?", ["label's for matches control's id", "label's name matches control's class", "label's href matches control's src", "They cannot be associated"], 0, "The label for attribute should match the control id."),
            makeQuiz("Which attribute can make a form control mandatory?", ["needed", "required", "must", "validate-now"], 1, "required tells the browser that the control must be filled in.")
          ]
        ),
        makeLesson(
          "html-w3-l3",
          "Buttons and Fieldsets",
          "Buttons can submit forms or perform other actions. Fieldset groups related form controls, while legend provides a group caption.",
          `<form>
  <fieldset>
    <legend>Contact details</legend>
    <label for="phone">Phone:</label>
    <input id="phone" name="phone" type="tel" />
  </fieldset>
  <button type="submit">Send</button>
</form>`,
          "Group two related input fields inside a fieldset and add a legend.",
          [
            makeQuiz("Which element groups related form controls?", ["<fieldset>", "<group>", "<section-input>", "<formgroup>"], 0, "fieldset groups related controls."),
            makeQuiz("Which element captions a fieldset?", ["<caption>", "<legend>", "<title>", "<labelset>"], 1, "legend provides a caption for a fieldset."),
            makeQuiz("What is the default type of a button inside a form if type is omitted?", ["button", "submit", "reset", "link"], 1, "A button inside a form generally defaults to submit, so specify type explicitly."),
            makeQuiz("Which button type avoids submitting the form by default?", ["submit", "button", "send", "form"], 1, "type=button does not submit the form by default."),
            makeQuiz("Why should button types be specified explicitly?", ["To clarify intended behavior", "To create CSS automatically", "To add a database", "To change HTML into JavaScript"], 0, "Explicit types help avoid accidental form submissions.")
          ]
        ),
        makeLesson(
          "html-w3-l4",
          "Audio, Video, and Iframes",
          "The audio and video elements can embed media. The iframe element embeds another browsing context, such as a permitted external page.",
          `<video controls width="320">
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support video.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
</audio>`,
          "Add a video with controls and an audio element with controls. Use media files you have permission to use.",
          [
            makeQuiz("Which attribute displays media playback controls?", ["playbar", "controls", "toolbar", "buttons"], 1, "controls asks the browser to display playback controls."),
            makeQuiz("Which element embeds audio?", ["<sound>", "<audio>", "<music>", "<mp3>"], 1, "audio embeds sound content."),
            makeQuiz("Which element embeds video?", ["<movie>", "<media>", "<video>", "<film>"], 2, "video embeds video content."),
            makeQuiz("Which element embeds another browsing context?", ["<iframe>", "<framebox>", "<embed-page>", "<webpage>"], 0, "iframe embeds another browsing context."),
            makeQuiz("What is the purpose of a source element inside audio or video?", ["Specify a media resource", "Create a heading", "Set the page title", "Add a table row"], 0, "source specifies a media file and its type.")
          ]
        ),
      ],
    },
    {
      week: 4,
      title: "Advanced HTML and Mini Project",
      description: "Learn metadata, accessibility, and build a portfolio page.",
      lessons: [
        makeLesson(
          "html-w4-l1",
          "Document Head and Metadata",
          "The head contains document metadata, the title, links to stylesheets, and other resources. Meta elements can define character encoding and viewport behavior.",
          `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Portfolio</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`,
          "Create a valid HTML document with a language attribute, character encoding, viewport metadata, and title.",
          [
            makeQuiz("Which element contains document metadata?", ["<body>", "<head>", "<footer>", "<main>"], 1, "head contains document metadata and resource references."),
            makeQuiz("Which meta value identifies the common Unicode encoding?", ["UTF-8", "ASCII-16", "HTML5", "Unicode-HTML"], 0, "UTF-8 is a widely used character encoding."),
            makeQuiz("Which element sets the browser tab title?", ["<heading>", "<meta>", "<title>", "<caption>"], 2, "title sets the document title."),
            makeQuiz("What is the purpose of viewport metadata?", ["Help control layout on mobile viewports", "Create a navigation bar", "Add a video", "Submit a form"], 0, "Viewport metadata helps pages render appropriately on mobile devices."),
            makeQuiz("Which attribute can specify a document's language?", ["lang", "language-code-only", "locale-text", "charset"], 0, "The lang attribute identifies the language of the document or element.")
          ]
        ),
        makeLesson(
          "html-w4-l2",
          "Accessibility Basics",
          "Accessible HTML helps more people use your website. Use descriptive alt text, associated labels, meaningful headings, keyboard-accessible controls, and clear link text.",
          `<h1>Student Portfolio</h1>
<img src="project.jpg" alt="Automatic plant watering project" />

<label for="search">Search projects</label>
<input id="search" type="search" />

<a href="/projects">View my projects</a>`,
          "Review a sample page and add useful image alt text, labels, meaningful link text, and a logical heading structure.",
          [
            makeQuiz("What is a useful purpose of alt text?", ["Describe meaningful image content", "Style the image", "Set its file size", "Make it autoplay"], 0, "Alt text communicates image information to people who cannot see it."),
            makeQuiz("What should link text communicate?", ["Only the color", "The link's purpose or destination", "The browser version", "The image size"], 1, "Descriptive link text helps users understand where a link leads."),
            makeQuiz("How can a label be associated with an input?", ["Match for and id", "Match src and href", "Match width and height", "Use a comment"], 0, "Matching label for to input id creates an association."),
            makeQuiz("Why use headings in a logical order?", ["To support clear content structure", "To force all text to be large", "To replace images", "To submit forms"], 0, "A logical heading structure helps users navigate content."),
            makeQuiz("Which is a good accessibility practice?", ["Use only color to convey errors", "Make controls keyboard accessible", "Remove all labels", "Use vague links everywhere"], 1, "Keyboard accessibility helps users navigate and operate a page.")
          ]
        ),
        makeLesson(
          "html-w4-l3",
          "HTML Best Practices",
          "Write valid, readable HTML. Use semantic elements, quote attribute values, provide alt text where appropriate, and keep HTML structure separate from CSS styling and JavaScript behavior.",
          `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Student Portfolio</title>
</head>
<body>
  <header>
    <h1>My Portfolio</h1>
  </header>
  <main>
    <p>Welcome to my website.</p>
  </main>
</body>
</html>`,
          "Clean up a small HTML page by adding a doctype, language, title, semantic sections, and properly quoted attributes.",
          [
            makeQuiz("Why should HTML be indented consistently?", ["To improve readability", "To increase internet speed", "To create a database", "To replace CSS"], 0, "Consistent indentation makes nested structures easier to read."),
            makeQuiz("Where should the page's main visible content usually go?", ["<head>", "<main> or appropriate body sections", "<title>", "<meta>"], 1, "Visible page content belongs in the body, usually organized with semantic elements."),
            makeQuiz("Which technology primarily styles a web page?", ["HTML", "CSS", "SQL", "DNS"], 1, "CSS controls presentation and layout."),
            makeQuiz("Which technology commonly adds interactive behavior to a web page?", ["JavaScript", "HTML comments", "JPEG", "DNS"], 0, "JavaScript commonly implements interactive behavior."),
            makeQuiz("What should you do after writing HTML?", ["Never test it", "Open it in a browser and check the structure and behavior", "Rename it to SQL", "Delete the tags"], 1, "Testing in a browser helps catch structural and usability problems.")
          ]
        ),
        makeLesson(
          "html-w4-l4",
          "Mini Project: Student Portfolio",
          "Bring your skills together by creating a student portfolio with an introduction, skills, projects, education, and contact form.",
          `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Student Portfolio</title>
</head>
<body>
  <header>
    <h1>Your Name</h1>
    <p>ECE Student | Aspiring Developer</p>
  </header>

  <main>
    <section>
      <h2>About Me</h2>
      <p>Write a short introduction here.</p>
    </section>

    <section>
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>Python</li>
      </ul>
    </section>

    <section>
      <h2>Projects</h2>
      <p>Describe one project you have built.</p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>Email: student@example.com</p>
    </section>
  </main>

  <footer>
    <p>My Student Portfolio</p>
  </footer>
</body>
</html>`,
          "Build your own portfolio page with About Me, Skills, Projects, Education, and Contact sections. Add a project image with alt text and a link to one project.",
          [
            makeQuiz("Which section should introduce you?", ["About Me", "Metadata only", "A comment", "A hidden input"], 0, "The About Me section introduces the person and their background."),
            makeQuiz("Which element is suitable for grouping portfolio sections?", ["<section>", "<font>", "<blink>", "<source>"], 0, "section groups related content."),
            makeQuiz("Which element is suitable for listing skills?", ["<ul> with <li> elements", "<title>", "<meta>", "<head>"], 0, "A list is a clear way to present multiple skills."),
            makeQuiz("What should a project description include?", ["Only an unrelated symbol", "The project's purpose and what you contributed", "A password", "Only HTML comments"], 1, "A helpful description explains the project's purpose and your contribution."),
            makeQuiz("What should you do when the portfolio is complete?", ["Check it in a browser and test links", "Delete the body", "Remove all headings", "Ignore errors"], 0, "Browser testing helps verify the page structure and links.")
          ]
        ),
      ],
    },
  ],
};

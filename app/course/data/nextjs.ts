
const nextjsCourse = {
  title: "Next.js for Web Developer",
  description:
    "Learn Next.js from fundamentals to advanced concepts, including App Router, layouts, server and client components, routing, data fetching, API routes, authentication concepts, and deployment.",
  weeks: [
    {
      title: "Week 1: Next.js Fundamentals",
      description:
        "Understand Next.js, project setup, file-based routing, layouts, and navigation.",
      lessons: [
        {
          title: "Introduction to Next.js",
          content: `Next.js is a React framework used to build modern web applications. It provides features such as file-based routing, server rendering, static generation, and backend functionality.

Important features:
- Built on React.
- File-based routing.
- Server and Client Components.
- Built-in image optimization.
- Support for different rendering strategies.
- API endpoints through Route Handlers.
- Production build and deployment support.

React is primarily a UI library, while Next.js provides a broader application framework around React.

Next.js is commonly used for business websites, dashboards, e-commerce platforms, blogs, and full-stack applications.`,
          quiz: [
            {
              question: "What is Next.js?",
              options: ["A React framework", "A database", "A programming language", "An operating system"],
              answer: "A React framework",
            },
            {
              question: "Next.js is built on which library?",
              options: ["React", "Angular", "Vue", "jQuery"],
              answer: "React",
            },
            {
              question: "Which feature does Next.js provide?",
              options: ["File-based routing", "Only database management", "Hardware programming", "Operating system development"],
              answer: "File-based routing",
            },
            {
              question: "What is a common use of Next.js?",
              options: ["Building web applications", "Designing processors", "Managing hardware", "Creating device drivers"],
              answer: "Building web applications",
            },
            {
              question: "Which feature can Next.js use for image optimization?",
              options: ["Image component", "SQL component", "Database component", "Router database"],
              answer: "Image component",
            },
          ],
        },
        {
          title: "Setting Up a Next.js Project",
          content: `You can create a Next.js application using the official project creation tool.

Requirements:
- Node.js.
- Visual Studio Code or another code editor.
- Basic JavaScript and React knowledge.

Create a project using:

npx create-next-app@latest my-next-app

Then enter the project directory:

cd my-next-app

Start the development server:

npm run dev

Open http://localhost:3000 in your browser.

Common project files:
- app/: application routes and layouts.
- public/: static assets.
- package.json: dependencies and scripts.
- next.config.ts: Next.js configuration.
- tsconfig.json: TypeScript configuration when TypeScript is enabled.

Choose TypeScript when creating the project if you want type safety.`,
          quiz: [
            {
              question: "Which command creates a Next.js application?",
              options: ["npx create-next-app@latest", "npm delete-next", "python create-next", "git start-next"],
              answer: "npx create-next-app@latest",
            },
            {
              question: "Which command starts the development server?",
              options: ["npm run dev", "npm stop", "npm delete", "npm close"],
              answer: "npm run dev",
            },
            {
              question: "Which folder commonly contains App Router routes?",
              options: ["app", "node_modules only", "downloads", "database"],
              answer: "app",
            },
            {
              question: "Which file stores project dependencies and scripts?",
              options: ["package.json", "index.html", "photo.png", "style.css"],
              answer: "package.json",
            },
            {
              question: "Which language can be used with Next.js for type safety?",
              options: ["TypeScript", "SQL only", "HTML only", "CSS only"],
              answer: "TypeScript",
            },
          ],
        },
        {
          title: "Understanding App Router and File Structure",
          content: `The App Router is the modern routing system in Next.js. It uses folders and special files inside the app directory to define routes and UI.

Important files:
- page.tsx: defines the UI for a route.
- layout.tsx: defines shared layouts.
- loading.tsx: displays a loading interface.
- error.tsx: handles errors in a route segment.
- not-found.tsx: defines a not-found interface.
- route.ts: defines an API Route Handler.

Example:

app/
  page.tsx
  about/
    page.tsx
  contact/
    page.tsx

Here:
- app/page.tsx represents the home page.
- app/about/page.tsx represents /about.
- app/contact/page.tsx represents /contact.

Folders organize routes, while special files define how each route behaves.`,
          quiz: [
            {
              question: "Which routing system is used in this course?",
              options: ["App Router", "Database Router", "CSS Router", "Hardware Router"],
              answer: "App Router",
            },
            {
              question: "What does page.tsx define?",
              options: ["A route's UI", "A database table", "A server password", "A CSS configuration"],
              answer: "A route's UI",
            },
            {
              question: "Which file defines a shared layout?",
              options: ["layout.tsx", "package.json", "next.config.ts", "tsconfig.json"],
              answer: "layout.tsx",
            },
            {
              question: "Which file can display a loading interface?",
              options: ["loading.tsx", "page.css", "route.json", "index.sql"],
              answer: "loading.tsx",
            },
            {
              question: "What URL corresponds to app/about/page.tsx?",
              options: ["/about", "/page", "/app/about/page", "/contact"],
              answer: "/about",
            },
          ],
        },
        {
          title: "Layouts and Navigation",
          content: `Layouts allow multiple pages to share common UI such as headers, navigation bars, sidebars, and footers.

A root layout is required in the App Router. It commonly contains html and body elements.

Example:

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>My Website</header>
        {children}
      </body>
    </html>
  );
}

Next.js provides the Link component for navigation.

Example:

import Link from "next/link";

<Link href="/about">About</Link>

Layouts preserve shared UI between navigation changes and help organize the application.

Nested layouts can be created inside route folders to provide different layouts for different sections.`,
          quiz: [
            {
              question: "What is the purpose of a layout?",
              options: ["Share UI across routes", "Create database tables", "Install packages", "Store images only"],
              answer: "Share UI across routes",
            },
            {
              question: "Which file is commonly used for the root layout?",
              options: ["app/layout.tsx", "app/style.ts", "package.json", "public/layout.html"],
              answer: "app/layout.tsx",
            },
            {
              question: "Which component is used for internal navigation?",
              options: ["Link", "Database", "ImageEditor", "ServerFile"],
              answer: "Link",
            },
            {
              question: "Which package provides the Next.js Link component?",
              options: ["next/link", "react/database", "next/css", "node/router"],
              answer: "next/link",
            },
            {
              question: "What does children represent in a layout?",
              options: ["The nested page or UI content", "A database connection", "A CSS variable", "An image file"],
              answer: "The nested page or UI content",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Components and Dynamic Routing",
      description:
        "Understand Server Components, Client Components, dynamic routes, route parameters, and styling.",
      lessons: [
        {
          title: "Server Components and Client Components",
          content: `The Next.js App Router uses Server Components by default.

Server Components:
- Render on the server.
- Can access server-side resources.
- Can help reduce JavaScript sent to the browser.
- Are suitable for displaying data that does not require browser interaction.

Client Components:
- Support state and event handling.
- Can use browser APIs.
- Support interactive features.
- Are marked using the "use client" directive at the top of a file.

Example:

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

Use Client Components when interaction is required. Keep components on the server when client-side features are unnecessary.`,
          quiz: [
            {
              question: "What is the default component type in the App Router?",
              options: ["Server Component", "Client Component", "Database Component", "CSS Component"],
              answer: "Server Component",
            },
            {
              question: "Which directive marks a Client Component?",
              options: ['"use client"', '"use server only"', '"client mode"', '"browser component"'],
              answer: '"use client"',
            },
            {
              question: "Which component type supports useState?",
              options: ["Client Component", "Server Component directly", "CSS Component", "Route folder"],
              answer: "Client Component",
            },
            {
              question: "Which component type can access server-side resources?",
              options: ["Server Component", "Only CSS", "HTML attribute", "Browser event"],
              answer: "Server Component",
            },
            {
              question: "When should you use a Client Component?",
              options: ["When interactive browser behavior is needed", "For every file automatically", "Only for images", "Only for database tables"],
              answer: "When interactive browser behavior is needed",
            },
          ],
        },
        {
          title: "Dynamic Routes and Parameters",
          content: `Dynamic routes allow pages to display different content based on URL values.

Create a folder using square brackets to define a dynamic segment.

Example:

app/
  products/
    [id]/
      page.tsx

This route can match:
- /products/1
- /products/25
- /products/abc

In current App Router versions, page parameters are provided through the params prop and are asynchronous.

Example:

export default async function ProductPage({ params }) {
  const { id } = await params;

  return <h1>Product ID: {id}</h1>;
}

Dynamic routes are useful for product pages, user profiles, blog posts, and course details.

You can also use catch-all route segments when a route needs to match multiple path segments.`,
          quiz: [
            {
              question: "How is a dynamic route folder named?",
              options: ["[id]", "id()", "id.html", "dynamic-id"],
              answer: "[id]",
            },
            {
              question: "What can dynamic routes display?",
              options: ["Different content based on URL values", "Only one fixed page", "Only CSS files", "Database schemas"],
              answer: "Different content based on URL values",
            },
            {
              question: "Which prop provides dynamic route parameters?",
              options: ["params", "styles", "children only", "database"],
              answer: "params",
            },
            {
              question: "Which is a common use for dynamic routes?",
              options: ["Product detail pages", "Changing computer hardware", "Installing Node.js", "Creating CSS variables"],
              answer: "Product detail pages",
            },
            {
              question: "What is the folder name for a dynamic product ID route?",
              options: ["[id]", "(id)", "{id}", "<id>"],
              answer: "[id]",
            },
          ],
        },
        {
          title: "Styling Next.js Applications",
          content: `Next.js supports different styling methods for application interfaces.

Common styling options:
- Global CSS.
- CSS Modules.
- Tailwind CSS.
- Sass.
- CSS-in-JS libraries with suitable configuration.

Global CSS can be imported into the root layout.

CSS Modules provide locally scoped styles.

Example:

import styles from "./page.module.css";

export default function Home() {
  return <h1 className={styles.title}>Welcome</h1>;
}

Tailwind CSS uses utility classes directly in JSX.

Example:

<h1 className="text-2xl font-bold">
  Welcome
</h1>

Choose a styling approach that matches the project's needs. Maintain consistent spacing, colors, typography, and responsive behavior.`,
          quiz: [
            {
              question: "Which file extension is commonly used for CSS Modules?",
              options: [".module.css", ".database", ".tsx.cssonly", ".json"],
              answer: ".module.css",
            },
            {
              question: "Where is global CSS commonly imported?",
              options: ["Root layout", "Inside package.json", "Inside the database", "Only in public"],
              answer: "Root layout",
            },
            {
              question: "What is Tailwind CSS?",
              options: ["A utility-first CSS framework", "A database", "A programming language", "A routing library"],
              answer: "A utility-first CSS framework",
            },
            {
              question: "What is a benefit of CSS Modules?",
              options: ["Locally scoped styles", "Automatic database creation", "API authentication", "Server deployment"],
              answer: "Locally scoped styles",
            },
            {
              question: "What should responsive styling support?",
              options: ["Different screen sizes", "Only one screen size", "Only printers", "Only server terminals"],
              answer: "Different screen sizes",
            },
          ],
        },
        {
          title: "Images, Fonts and Metadata",
          content: `Next.js provides built-in tools to improve how images, fonts, and page metadata are handled.

The next/image component supports image optimization features such as resizing and lazy loading.

Example:

import Image from "next/image";

<Image
  src="/profile.png"
  alt="Profile"
  width={300}
  height={300}
/>

For remote images, configure permitted image sources in the Next.js configuration.

Next.js also supports optimized font loading through next/font.

Metadata can be defined using a metadata export in supported Server Component route files.

Example:

export const metadata = {
  title: "My Website",
  description: "My Next.js website",
};

Useful metadata helps browsers and search engines understand a page.

Always provide meaningful alt text for informative images.`,
          quiz: [
            {
              question: "Which component supports image optimization?",
              options: ["next/image", "next/database", "next/style", "next/form"],
              answer: "next/image",
            },
            {
              question: "Which attribute provides alternative image text?",
              options: ["alt", "titleOnly", "srcsetName", "font"],
              answer: "alt",
            },
            {
              question: "Which package provides Next.js font optimization?",
              options: ["next/font", "next/database", "next/router-css", "next/metadata-only"],
              answer: "next/font",
            },
            {
              question: "What does metadata describe?",
              options: ["Information about a page", "Database passwords", "Component state only", "Server hardware"],
              answer: "Information about a page",
            },
            {
              question: "Where can page metadata be exported in the App Router?",
              options: ["Supported Server Component route files", "Only in CSS files", "Only in images", "Inside SQL queries"],
              answer: "Supported Server Component route files",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: Data Fetching and Backend Features",
      description:
        "Learn data fetching, Route Handlers, forms, server actions, and environment configuration.",
      lessons: [
        {
          title: "Data Fetching in Next.js",
          content: `Next.js allows data to be fetched in Server Components using asynchronous functions.

Example:

export default async function UsersPage() {
  const response = await fetch("https://api.example.com/users");

  if (!response.ok) {
    throw new Error("Failed to load users");
  }

  const users = await response.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

Important concepts:
- Fetch data on the server when suitable.
- Handle loading and error states.
- Validate responses.
- Use caching and revalidation intentionally.
- Avoid exposing private credentials in browser code.

Next.js extends server-side fetch behavior with caching and revalidation options. Exact defaults and options can vary by Next.js version, so check the documentation for your installed version.`,
          quiz: [
            {
              question: "Where can asynchronous data fetching happen in the App Router?",
              options: ["Server Components", "Only CSS files", "Only HTML attributes", "Only image files"],
              answer: "Server Components",
            },
            {
              question: "Which function commonly makes HTTP requests?",
              options: ["fetch()", "map()", "alert()", "setStyle()"],
              answer: "fetch()",
            },
            {
              question: "What should happen when a request fails?",
              options: ["Handle the error", "Ignore every failure", "Delete the project", "Hide all content permanently"],
              answer: "Handle the error",
            },
            {
              question: "What does revalidation help control?",
              options: ["When cached data is refreshed", "CSS font size", "Folder names", "Browser brightness"],
              answer: "When cached data is refreshed",
            },
            {
              question: "Where should private API credentials be kept?",
              options: ["Server-side environment variables", "Public browser code", "HTML comments", "Image filenames"],
              answer: "Server-side environment variables",
            },
          ],
        },
        {
          title: "Route Handlers and API Development",
          content: `Route Handlers allow you to create HTTP endpoints inside the Next.js App Router.

They are defined using route.ts files inside the app directory.

Example structure:

app/
  api/
    users/
      route.ts

Example GET handler:

export async function GET() {
  return Response.json({
    message: "Users API",
  });
}

You can also create handlers for methods such as POST, PUT, PATCH, and DELETE.

Example POST handler:

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    received: body,
  });
}

Route Handlers are useful for processing form submissions, communicating with databases, and creating backend endpoints.

Always validate incoming data and handle errors before processing requests.`,
          quiz: [
            {
              question: "Which file defines a Route Handler?",
              options: ["route.ts", "layout.css", "package.html", "metadata.json"],
              answer: "route.ts",
            },
            {
              question: "Which function handles GET requests?",
              options: ["GET", "FETCH_ONLY", "READ_CSS", "LOAD_PAGE"],
              answer: "GET",
            },
            {
              question: "Which function handles POST requests?",
              options: ["POST", "STYLE", "ROUTE_CSS", "IMAGE"],
              answer: "POST",
            },
            {
              question: "How can a handler read a JSON request body?",
              options: ["request.json()", "request.css()", "request.map()", "request.html()"],
              answer: "request.json()",
            },
            {
              question: "What should be done before processing user input?",
              options: ["Validate the input", "Trust every value", "Expose private keys", "Delete the request"],
              answer: "Validate the input",
            },
          ],
        },
        {
          title: "Forms and Server Actions",
          content: `Forms are used to collect information from users. Next.js supports form processing through Route Handlers and Server Actions.

A Server Action is an asynchronous function that runs on the server and can be invoked from supported React form or event workflows.

Server Actions are commonly marked with the "use server" directive.

Example:

"use server";

export async function createUser(formData: FormData) {
  const name = formData.get("name");

  // Validate input and save data securely.
}

A form can use a Server Action:

<form action={createUser}>
  <input name="name" />
  <button type="submit">Submit</button>
</form>

Important practices:
- Validate all submitted data.
- Check user permissions.
- Handle errors.
- Avoid trusting client-provided values.
- Keep sensitive operations on the server.

Choose between Server Actions and Route Handlers based on the application architecture.`,
          quiz: [
            {
              question: "What is a Server Action?",
              options: ["A server-side asynchronous function", "A CSS animation", "A browser extension", "A database column"],
              answer: "A server-side asynchronous function",
            },
            {
              question: "Which directive marks a Server Action?",
              options: ['"use server"', '"use client only"', '"server css"', '"action mode"'],
              answer: '"use server"',
            },
            {
              question: "Which object can contain submitted form values?",
              options: ["FormData", "CSSData", "ImageDataOnly", "RouteStyle"],
              answer: "FormData",
            },
            {
              question: "Where should sensitive form processing happen?",
              options: ["On the server", "In public CSS", "Inside image metadata", "In HTML comments"],
              answer: "On the server",
            },
            {
              question: "What is important when handling submitted form data?",
              options: ["Validation and authorization", "Trusting every input", "Removing all error handling", "Publishing secrets"],
              answer: "Validation and authorization",
            },
          ],
        },
        {
          title: "Environment Variables and Database Integration",
          content: `Environment variables store configuration values outside application source code.

Examples include:
- Database connection strings.
- API credentials.
- Service configuration.
- Application environment settings.

In Next.js, environment variables can be stored in .env.local.

Example:

DATABASE_URL=your_database_connection
API_SECRET=your_private_secret

Server-side code can read these values using process.env.

Variables prefixed with NEXT_PUBLIC_ can be exposed to browser-side code. Never use that prefix for private credentials.

Next.js applications can connect to databases using suitable database clients or backend services.

A typical database workflow:
1. Receive a request.
2. Validate input.
3. Connect to the database.
4. Read or update records.
5. Return a safe response.

Never commit real secrets to a public repository.`,
          quiz: [
            {
              question: "Where are local environment variables commonly stored?",
              options: [".env.local", "public.html", "style.css", "image.png"],
              answer: ".env.local",
            },
            {
              question: "How can server-side code access environment variables?",
              options: ["process.env", "window.css", "document.style", "HTML.env"],
              answer: "process.env",
            },
            {
              question: "What does NEXT_PUBLIC_ indicate?",
              options: ["The variable may be exposed to browser code", "The variable is always encrypted", "The variable is a database table", "The variable is private automatically"],
              answer: "The variable may be exposed to browser code",
            },
            {
              question: "Where should private database credentials be kept?",
              options: ["Server-side environment variables", "Public JavaScript files", "HTML comments", "CSS files"],
              answer: "Server-side environment variables",
            },
            {
              question: "What should happen before storing user-submitted data?",
              options: ["Validate the data", "Trust it automatically", "Expose database credentials", "Skip authorization"],
              answer: "Validate the data",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: Advanced Next.js and Final Project",
      description:
        "Explore rendering strategies, authentication concepts, deployment, and build a complete Next.js application.",
      lessons: [
        {
          title: "Rendering Strategies and Caching",
          content: `Next.js supports multiple rendering strategies depending on the needs of a page.

Common approaches:
- Static rendering: HTML is generated ahead of time.
- Dynamic rendering: content is rendered when a request requires it.
- Streaming: parts of a page can be sent as they become ready.
- Incremental Static Regeneration: static content can be updated through revalidation.

Caching helps reduce repeated work and improve performance.

Important concepts:
- Data caching.
- Revalidation.
- Request-time rendering.
- Static generation.
- Streaming with Suspense.

The right strategy depends on how frequently data changes and whether the content is personalized.

For example, a public blog article may be suitable for static generation, while a personalized account page may need request-specific data.

Always understand the caching behavior of your installed Next.js version.`,
          quiz: [
            {
              question: "What is static rendering?",
              options: ["Generating page output ahead of time", "Rendering only after every button click", "Creating database tables", "Loading CSS only"],
              answer: "Generating page output ahead of time",
            },
            {
              question: "What is dynamic rendering?",
              options: ["Rendering based on request-time requirements", "Rendering only once during installation", "Changing image colors", "Deleting cached files automatically"],
              answer: "Rendering based on request-time requirements",
            },
            {
              question: "What is streaming used for?",
              options: ["Sending parts of a page as they become ready", "Transferring database passwords", "Changing CSS classes", "Creating folders"],
              answer: "Sending parts of a page as they become ready",
            },
            {
              question: "What does revalidation help do?",
              options: ["Refresh cached content", "Change component names", "Install dependencies", "Create HTML tags"],
              answer: "Refresh cached content",
            },
            {
              question: "Which page may benefit from request-specific rendering?",
              options: ["A personalized account page", "A fixed public logo", "A static icon", "A simple public illustration"],
              answer: "A personalized account page",
            },
          ],
        },
        {
          title: "Authentication and Authorization Concepts",
          content: `Authentication verifies who a user is. Authorization determines what an authenticated user is allowed to do.

Common authentication features:
- Registration.
- Login.
- Logout.
- Session management.
- Password reset.
- Identity verification.

Next.js applications can integrate authentication libraries or external identity providers.

Important security practices:
- Never store plain-text passwords.
- Use established password hashing methods.
- Protect private server-side routes and actions.
- Check permissions on the server.
- Validate session information.
- Avoid exposing private tokens to browser code.

Authentication and authorization are different. A user may be successfully logged in but still not have permission to access an administrator page.

A secure application checks both identity and permissions before allowing sensitive operations.`,
          quiz: [
            {
              question: "What does authentication verify?",
              options: ["A user's identity", "CSS styles", "Page colors", "Database size"],
              answer: "A user's identity",
            },
            {
              question: "What does authorization determine?",
              options: ["What a user can access", "The user's browser theme", "The page font", "The image dimensions"],
              answer: "What a user can access",
            },
            {
              question: "Should passwords be stored as plain text?",
              options: ["No", "Yes", "Only in public files", "Only in CSS"],
              answer: "No",
            },
            {
              question: "Where should sensitive permission checks be enforced?",
              options: ["On the server", "Only in button styling", "Only in browser text", "Inside image files"],
              answer: "On the server",
            },
            {
              question: "Can an authenticated user lack permission to access a page?",
              options: ["Yes", "No, never", "Only when CSS fails", "Only on mobile"],
              answer: "Yes",
            },
          ],
        },
        {
          title: "Building and Deploying Next.js Applications",
          content: `After development, a Next.js application must be tested and prepared for production.

Important steps:
1. Complete application development.
2. Test all routes and features.
3. Check loading and error states.
4. Configure environment variables.
5. Run the production build.
6. Deploy to a hosting platform.
7. Verify the deployed application.

Common commands:

npm run build

npm run start

The build command creates a production build. The start command runs the production server when the project is configured with the standard Next.js scripts.

Next.js applications can be deployed on supported platforms such as Vercel or compatible Node.js hosting environments.

Before deployment:
- Check API connections.
- Verify environment variables.
- Remove development-only settings.
- Test mobile responsiveness.
- Review security and performance.

Deployment makes the application accessible through a hosted URL.`,
          quiz: [
            {
              question: "Which command creates a production build?",
              options: ["npm run build", "npm run delete", "npm stop", "npm install build-only"],
              answer: "npm run build",
            },
            {
              question: "Which command commonly starts the production server?",
              options: ["npm run start", "npm run dev-only", "npm delete", "npm close"],
              answer: "npm run start",
            },
            {
              question: "What should be configured before deployment?",
              options: ["Environment variables", "Only the desktop wallpaper", "Browser bookmarks", "Monitor brightness"],
              answer: "Environment variables",
            },
            {
              question: "Which platform is commonly used to deploy Next.js applications?",
              options: ["Vercel", "Microsoft Paint", "Calculator", "Notepad"],
              answer: "Vercel",
            },
            {
              question: "What should be tested before deployment?",
              options: ["Routes, features, and responsiveness", "Only the project name", "Only the folder color", "Only the editor theme"],
              answer: "Routes, features, and responsiveness",
            },
          ],
        },
        {
          title: "Final Project: Build a Full-Stack Next.js Career Portal",
          content: `In this final project, you will build a Career Portal using Next.js.

Project objective:
Create a web application where users can explore careers, view career details, and save their learning progress.

Suggested pages:
- Home page.
- Careers page.
- Career details page.
- User dashboard.
- Login page.
- Registration page.

Suggested components:
- Navbar.
- CareerCard.
- CareerList.
- CareerDetails.
- ProgressCard.
- Footer.

Required features:
1. Display a list of careers.
2. Create dynamic career detail routes.
3. Navigate between pages using Link.
4. Fetch career information from an API or database.
5. Display loading and error states.
6. Build forms for user input.
7. Add authentication using a suitable authentication solution.
8. Save progress through a secure backend.

Technical concepts:
- App Router.
- Server and Client Components.
- Dynamic routes.
- Data fetching.
- Route Handlers or Server Actions.
- Environment variables.
- Responsive styling.

Testing:
- Open every route.
- Test navigation.
- Submit forms with valid and invalid data.
- Verify that private information is protected.
- Test the interface on different screen sizes.

Final outcome:
A responsive Next.js application that demonstrates frontend development, backend integration, routing, and deployment skills.`,
          quiz: [
            {
              question: "Which framework is used to build the Career Portal?",
              options: ["Next.js", "Django only", "Excel", "Photoshop"],
              answer: "Next.js",
            },
            {
              question: "Which feature is useful for individual career detail pages?",
              options: ["Dynamic routes", "CSS comments", "Static image names", "Browser bookmarks"],
              answer: "Dynamic routes",
            },
            {
              question: "Which component supports navigation between pages?",
              options: ["Link", "Database", "Image", "Footer only"],
              answer: "Link",
            },
            {
              question: "Which concept helps display a loading interface?",
              options: ["loading.tsx", "package.json", "tsconfig.json", "next.config.ts"],
              answer: "loading.tsx",
            },
            {
              question: "What is the final project intended to demonstrate?",
              options: [
                "Frontend, backend integration, routing, and deployment",
                "Only HTML formatting",
                "Only database installation",
                "Only image editing",
              ],
              answer: "Frontend, backend integration, routing, and deployment",
            },
          ],
        },
      ],
    },
  ],
};

export default nextjsCourse;

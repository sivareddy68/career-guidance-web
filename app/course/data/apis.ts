
import type { Course, Lesson, QuizQuestion } from "./python";

type QuizItem = [
  question: string,
  answer: string,
  wrong1: string,
  wrong2: string,
  wrong3: string,
  explanation: string
];

function makeQuiz(items: QuizItem[]): QuizQuestion[] {
  return items.map(
    ([question, answer, wrong1, wrong2, wrong3, explanation]) => ({
      question,
      options: [answer, wrong1, wrong2, wrong3],
      answer,
      explanation,
    })
  );
}

function makeLesson(
  id: string,
  title: string,
  introduction: string,
  sections: Lesson["sections"],
  example: string,
  exercise: string,
  quiz: QuizItem[]
): Lesson {
  return {
    id,
    title,
    introduction,
    sections,
    example,
    exercise,
    quiz: makeQuiz(quiz),
  };
}

export const apisCourse: Course = {
  title: "API Development",
  description:
    "Learn how APIs work, design REST endpoints, handle requests and responses, validate data, implement authentication, test APIs, and build a secure backend service.",
  project:
    "Build a task-management REST API with CRUD operations, validation, authentication concepts, pagination, error handling, and automated tests.",
  weeks: [
    {
      title: "Week 1: API Fundamentals and HTTP",
      assignment:
        "Explain the request-response lifecycle and create a simple API specification with endpoints, HTTP methods, status codes, and example JSON responses.",
      lessons: [
        makeLesson(
          "apis-w1-l1",
          "Introduction to APIs",
          "Understand what an API is, why applications use APIs, and how different software systems exchange data.",
          [
            {
              heading: "What is an API?",
              content:
                "API stands for Application Programming Interface. It defines how one software component can request information or functionality from another component. An API acts as a contract: it specifies available operations, required inputs, and expected outputs. APIs help applications communicate without needing to know each other's internal implementation.",
            },
            {
              heading: "How APIs work",
              content:
                "A client sends a request to a server. The server processes the request, may access a database or another service, and returns a response. For a web API, the request and response commonly travel over HTTP or HTTPS. A response often contains JSON data and an HTTP status code.",
            },
            {
              heading: "Common API types",
              content:
                "Web APIs include REST APIs and GraphQL APIs. Other interfaces include library APIs and operating-system APIs. REST commonly uses HTTP resources and methods. GraphQL allows clients to request selected fields through a query language. The right design depends on the application's needs.",
            },
            {
              heading: "API use cases",
              content:
                "A mobile app may call an API to retrieve a user's profile. A shopping website may use payment APIs. A career-guidance platform may expose endpoints for courses, learning progress, and weekly tasks. Separating the frontend from the backend makes it easier to maintain and reuse functionality.",
            },
          ],
          `# Example of a simple API response
{
  "id": 101,
  "title": "Learn API fundamentals",
  "completed": false
}`,
          "Choose an application you use and list three kinds of information its frontend might request from a backend API.",
          [
            [
              "What does API stand for?",
              "Application Programming Interface",
              "Automated Program Internet",
              "Application Process Integration",
              "Advanced Programming Installation",
              "API stands for Application Programming Interface and defines how software components interact."
            ],
            [
              "What usually sends a request to a web API?",
              "A client application",
              "Only a database",
              "A CSS stylesheet",
              "A compiler in every case",
              "A browser, mobile app, or another service can act as an API client."
            ],
            [
              "What is JSON commonly used for in web APIs?",
              "Representing structured data",
              "Styling a webpage",
              "Compiling Python code",
              "Encrypting every network connection automatically",
              "JSON represents structured objects, arrays, strings, numbers, booleans, and null values."
            ],
            [
              "What does an API contract describe?",
              "Available operations and expected inputs and outputs",
              "The color scheme of an application",
              "The physical size of a server",
              "The user's keyboard layout",
              "An API contract documents how clients can interact with the service."
            ],
            [
              "Why are APIs useful?",
              "They allow software components to communicate through defined interfaces",
              "They remove the need for all testing",
              "They guarantee that no errors occur",
              "They replace every database",
              "APIs provide defined communication boundaries, but they still require testing and maintenance."
            ],
          ]
        ),
        makeLesson(
          "apis-w1-l2",
          "HTTP Methods and Status Codes",
          "Learn how HTTP methods express an operation and how status codes communicate the result of a request.",
          [
            {
              heading: "HTTP request structure",
              content:
                "An HTTP request contains a method, a URL, headers, and sometimes a body. Headers carry metadata such as the content type or authorization token. A body often carries JSON for operations that create or update resources.",
            },
            {
              heading: "HTTP methods",
              content:
                "GET retrieves a resource. POST commonly creates a resource or triggers an operation. PUT generally replaces a resource representation, while PATCH partially updates it. DELETE requests removal. These conventions make an API easier to understand, although each endpoint must document its actual behavior.",
            },
            {
              heading: "Status code groups",
              content:
                "Status codes in the 200 range indicate success, 300-range codes concern redirection, 400-range codes indicate a client-side problem, and 500-range codes indicate a server-side failure. Common examples include 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, and 500 Internal Server Error.",
            },
            {
              heading: "Choosing appropriate responses",
              content:
                "Use a status code that accurately reflects the outcome. Return 201 when a resource is successfully created. Return 404 when the requested resource does not exist. Avoid returning 200 for every result because clients then cannot reliably distinguish success from failure.",
            },
          ],
          `GET    /api/tasks       # Read tasks
POST   /api/tasks       # Create a task
PATCH  /api/tasks/12    # Update part of task 12
DELETE /api/tasks/12    # Delete task 12

# Example response
HTTP/1.1 201 Created
Content-Type: application/json

{"id": 12, "title": "Study HTTP"}`,
          "Design five endpoints for a library application. Assign a suitable HTTP method and success status code to each endpoint.",
          [
            [
              "Which HTTP method is conventionally used to retrieve a resource?",
              "GET",
              "POST",
              "DELETE",
              "PATCH",
              "GET is used to retrieve data without intending to modify the resource."
            ],
            [
              "Which status code commonly indicates successful resource creation?",
              "201 Created",
              "404 Not Found",
              "401 Unauthorized",
              "500 Internal Server Error",
              "201 communicates that a resource was created successfully."
            ],
            [
              "What does HTTP 404 usually mean?",
              "The requested resource was not found",
              "The request was created successfully",
              "The user is always an administrator",
              "The server returned a redirect",
              "404 Not Found indicates that the requested resource could not be located."
            ],
            [
              "Which method is commonly used for a partial resource update?",
              "PATCH",
              "GET",
              "OPTIONS",
              "TRACE",
              "PATCH applies a partial modification to a resource."
            ],
            [
              "What does a 5xx status code generally indicate?",
              "A server-side error",
              "A successful creation",
              "A client-side validation error in every case",
              "A required JSON field",
              "The 5xx class represents server errors."
            ],
          ]
        ),
        makeLesson(
          "apis-w1-l3",
          "REST API Design",
          "Learn to design resource-oriented endpoints that are consistent, readable, and easy for clients to use.",
          [
            {
              heading: "Resources and URLs",
              content:
                "REST-style APIs commonly represent things as resources, such as users, courses, tasks, or projects. Use nouns in resource paths, such as /api/tasks and /api/courses. An individual resource can be identified with a path such as /api/tasks/12.",
            },
            {
              heading: "Consistent endpoint patterns",
              content:
                "A collection endpoint operates on a group of resources, while an item endpoint addresses one resource. For example, GET /api/tasks lists tasks, POST /api/tasks creates one, GET /api/tasks/12 retrieves task 12, and DELETE /api/tasks/12 requests its deletion.",
            },
            {
              heading: "Representations and statelessness",
              content:
                "A client and server exchange resource representations, often JSON. In a stateless request model, each request contains the information required to process it rather than depending on hidden conversational state on the server. Authentication credentials may be sent with each request.",
            },
            {
              heading: "Good API naming",
              content:
                "Prefer predictable names, consistent casing, and clear relationships. Avoid designing separate endpoints for every minor variation when query parameters or standard resource patterns are enough. Document special behavior so clients do not need to guess how the API works.",
            },
          ],
          `GET    /api/courses
GET    /api/courses/7
POST   /api/courses
PATCH  /api/courses/7
DELETE /api/courses/7

# Example filter
GET /api/courses?category=technology`,
          "Design REST endpoints for students and their course enrollments. Include list, create, read, update, and delete operations.",
          [
            [
              "Which path best represents a collection of tasks?",
              "/api/tasks",
              "/api/getAllTasksNow",
              "/api/task-delete",
              "/api/do-task",
              "A noun-based collection path is a clear, conventional REST design."
            ],
            [
              "How can an individual task be identified in a URL?",
              "/api/tasks/12",
              "/api/tasks/all/each/one",
              "/api/12/tasks/new/delete",
              "/api/task?id=every-task",
              "A resource identifier in the path identifies a particular task."
            ],
            [
              "What is a resource representation?",
              "A format containing resource data, such as JSON",
              "Only a server's physical hardware",
              "A browser's color theme",
              "A password stored in source code",
              "Clients and servers commonly exchange JSON representations of resources."
            ],
            [
              "What is a benefit of consistent endpoint naming?",
              "Clients can predict how endpoints behave",
              "The API never needs documentation",
              "Every request becomes faster automatically",
              "Authentication becomes unnecessary",
              "Consistent naming lowers the learning effort for API consumers."
            ],
            [
              "What does stateless request handling generally mean?",
              "Each request carries the information needed to process it",
              "The server must forget its database",
              "Requests cannot use authentication",
              "The API can only return plain text",
              "Statelessness avoids relying on hidden client-session context to interpret each request."
            ],
          ]
        ),
        makeLesson(
          "apis-w1-l4",
          "JSON, Headers, and Query Parameters",
          "Understand the data format and request metadata used by many HTTP APIs.",
          [
            {
              heading: "JSON structure",
              content:
                "JSON supports objects, arrays, strings, numbers, booleans, and null. Objects contain key-value pairs, and arrays contain ordered values. JSON is commonly used because many programming languages can parse it. Property names and string values use double quotes.",
            },
            {
              heading: "HTTP headers",
              content:
                "Headers provide metadata. Content-Type describes the format of the request or response body, such as application/json. Accept tells the server which response formats the client can handle. Authorization commonly carries credentials, such as a bearer token.",
            },
            {
              heading: "Path and query parameters",
              content:
                "Path parameters identify a specific resource, such as /api/tasks/12. Query parameters refine a collection request, such as /api/tasks?completed=true&page=2. They are useful for filtering, sorting, searching, and pagination.",
            },
            {
              heading: "Input encoding and validation",
              content:
                "Query parameters arrive as text and must be parsed into appropriate types. Validate values before using them. A page number should be positive, a boolean filter should follow a documented format, and user-provided text should not be trusted as executable code.",
            },
          ],
          `GET /api/tasks?completed=true&page=2

Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "title": "Finish API lesson",
  "completed": false
}`,
          "Write a sample JSON object for a course and design query parameters to filter courses by level, category, and page number.",
          [
            [
              "Which is valid JSON?",
              "{\"name\":\"Ravi\",\"active\":true}",
              "{name:'Ravi', active:True}",
              "name = Ravi",
              "<name>Ravi</name>",
              "JSON requires double-quoted property names and strings and uses lowercase true and false."
            ],
            [
              "What does the Content-Type header describe?",
              "The format of the message body",
              "The user's screen size",
              "The server's physical location",
              "The database password",
              "Content-Type indicates the media type of the request or response body."
            ],
            [
              "Which URL uses a query parameter?",
              "/api/tasks?page=2",
              "/api/tasks/12",
              "/api/tasks",
              "/api/tasks/new",
              "The question mark introduces a query string containing page=2."
            ],
            [
              "What is a common purpose of a path parameter?",
              "Identifying a particular resource",
              "Changing the webpage font",
              "Defining a CSS animation",
              "Replacing all HTTP headers",
              "A path parameter commonly identifies an individual resource."
            ],
            [
              "Why should query parameters be validated?",
              "To reject invalid values and handle input safely",
              "To guarantee all clients are human",
              "To avoid sending status codes",
              "To make JSON syntax optional",
              "Validation prevents malformed or unexpected values from reaching application logic."
            ],
          ]
        ),
      ],
    },
    {
      title: "Week 2: Building API Endpoints",
      assignment:
        "Create a small backend with endpoints to list, create, view, update, and delete tasks. Validate inputs and return meaningful status codes.",
      lessons: [
        makeLesson(
          "apis-w2-l1",
          "Creating a Basic API with FastAPI",
          "Build a minimal Python API and understand route functions, request handling, and automatic API documentation.",
          [
            {
              heading: "What is FastAPI?",
              content:
                "FastAPI is a Python framework for building HTTP APIs. It uses Python type hints for validation and documentation support. It can generate interactive API documentation, which helps developers explore endpoints and test requests.",
            },
            {
              heading: "Routes and path operations",
              content:
                "A route connects an HTTP method and URL path to a function. A GET route might return a list, while a POST route accepts data to create a resource. Keep each handler focused on a clear operation.",
            },
            {
              heading: "Running the application",
              content:
                "Install FastAPI and an ASGI server such as Uvicorn in your Python environment. Run the application using Uvicorn and open the local documentation route. Use a virtual environment to keep dependencies isolated for the project.",
            },
            {
              heading: "Interactive documentation",
              content:
                "FastAPI commonly exposes Swagger UI at /docs and an OpenAPI schema at /openapi.json. These are useful development tools, but production documentation and access should be configured thoughtfully when endpoints expose sensitive operations.",
            },
          ],
          `from fastapi import FastAPI

app = FastAPI()

@app.get("/api/health")
def health():
    return {"status": "ok"}

# Run from the terminal:
# uvicorn main:app --reload
# Open http://127.0.0.1:8000/docs`,
          "Create a FastAPI application with GET /api/health and GET /api/about. Return a JSON object from each route.",
          [
            [
              "What is FastAPI used for?",
              "Building HTTP APIs in Python",
              "Designing only spreadsheet formulas",
              "Editing images exclusively",
              "Replacing the Python language",
              "FastAPI is a framework for creating APIs with Python."
            ],
            [
              "What does a route connect?",
              "An HTTP method and path to application behavior",
              "A keyboard to a monitor",
              "A CSS class to a font file",
              "A database table to a physical cable",
              "A route determines which handler should process a matching request."
            ],
            [
              "What is Uvicorn commonly used for?",
              "Running an ASGI Python application",
              "Writing SQL queries automatically",
              "Creating JSON syntax",
              "Replacing all tests",
              "Uvicorn is an ASGI server often used to run FastAPI."
            ],
            [
              "What is commonly available at FastAPI's /docs route?",
              "Interactive API documentation",
              "A database backup in every project",
              "The operating system's settings",
              "An automatic production deployment",
              "FastAPI can generate Swagger UI documentation at /docs."
            ],
            [
              "Why use a Python virtual environment?",
              "To isolate project dependencies",
              "To guarantee that code has no bugs",
              "To encrypt all API responses",
              "To eliminate the need for Python",
              "Virtual environments help keep one project's packages separate from others."
            ],
          ]
        ),
        makeLesson(
          "apis-w2-l2",
          "Request Bodies and Data Validation",
          "Learn to receive structured input and reject missing or invalid data before it reaches business logic.",
          [
            {
              heading: "Request bodies",
              content:
                "A request body contains data sent by the client, often during POST, PUT, or PATCH requests. For example, creating a task may send a title and a completed flag as JSON. The API should define which fields are required and which are optional.",
            },
            {
              heading: "Schema validation",
              content:
                "FastAPI commonly uses Pydantic models to define expected request data. Type annotations describe field types, while constraints can limit lengths or numeric ranges. Invalid input can be rejected with a clear client-error response.",
            },
            {
              heading: "Validation versus business rules",
              content:
                "Schema validation checks whether data has the expected structure and format. Business rules check whether the operation is allowed in the application's context. A title may be valid text, but the user might still be forbidden from editing a particular task.",
            },
            {
              heading: "Safe error messages",
              content:
                "Tell clients which input is invalid without revealing secrets, stack traces, or internal implementation details. Do not silently accept malformed input when doing so could create incorrect data. Test both valid and invalid cases.",
            },
          ],
          `from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()

class TaskCreate(BaseModel):
    title: str = Field(min_length=1, max_length=120)
    completed: bool = False

@app.post("/api/tasks")
def create_task(task: TaskCreate):
    return {"message": "Task accepted", "task": task}`,
          "Create a Pydantic model for a course with a non-empty title, a level field, and an optional description. Decide which fields should be required.",
          [
            [
              "What is the purpose of a request-body schema?",
              "To define and validate the expected input structure",
              "To choose the server's wallpaper",
              "To automatically approve every request",
              "To store passwords in frontend code",
              "A schema defines acceptable input fields and their types or constraints."
            ],
            [
              "What can Pydantic help validate?",
              "Field types and declared constraints",
              "The physical temperature of the server",
              "Every business decision automatically",
              "Whether every user has good intentions",
              "Pydantic validates data against declared model fields and rules."
            ],
            [
              "Which is an example of a business rule?",
              "Only the task owner may edit that task",
              "A field must be a string",
              "JSON keys use double quotes",
              "An HTTP request has a method",
              "Ownership permissions depend on application context rather than data type alone."
            ],
            [
              "What should an API do with invalid input?",
              "Return an appropriate client error with useful information",
              "Always return 200 OK",
              "Expose the server's private keys",
              "Ignore every validation rule",
              "A suitable client-error response helps callers correct malformed input."
            ],
            [
              "Why limit a title's maximum length?",
              "To enforce a clear input rule and avoid unreasonable values",
              "To ensure every title has the same words",
              "To replace authentication",
              "To prevent all network failures",
              "Field constraints keep input within documented application limits."
            ],
          ]
        ),
        makeLesson(
          "apis-w2-l3",
          "CRUD Operations and Database Integration",
          "Connect API operations to persistent storage and understand create, read, update, and delete behavior.",
          [
            {
              heading: "Understanding CRUD",
              content:
                "CRUD means Create, Read, Update, and Delete. A task API may create a task, retrieve one or many tasks, modify task fields, and remove a task. REST endpoints often map these actions to POST, GET, PATCH or PUT, and DELETE.",
            },
            {
              heading: "Persistence",
              content:
                "In-memory lists are convenient for demonstrations but usually lose their contents when the process restarts. A database stores data persistently. A real application should define models, schema constraints, database access patterns, and transaction behavior.",
            },
            {
              heading: "Handling missing records",
              content:
                "When a client requests an identifier that does not exist, return an appropriate not-found response. Do not report a successful update or deletion if no record was changed. Consider whether the API should reveal resource existence to the requesting user.",
            },
            {
              heading: "Transactions and consistency",
              content:
                "A transaction groups related database operations so they succeed or fail together according to database guarantees. Transactions are important when one business action changes several records. Handle failures deliberately and avoid leaving partially updated data.",
            },
          ],
          `# Simplified in-memory demonstration only
tasks = []
next_id = 1

def add_task(title):
    global next_id
    task = {
        "id": next_id,
        "title": title,
        "completed": False
    }
    tasks.append(task)
    next_id += 1
    return task

# Production applications should use persistent storage.`,
          "Plan the CRUD operations for a course table. Define the fields and describe what should happen if a requested course ID does not exist.",
          [
            [
              "What does CRUD stand for?",
              "Create, Read, Update, Delete",
              "Connect, Run, Upload, Download",
              "Compile, Render, Use, Debug",
              "Create, Rename, Undo, Deploy",
              "CRUD names the four common data-management operations."
            ],
            [
              "Why is a database useful for an API?",
              "It can persist data beyond an application process restart",
              "It guarantees every request is authorized",
              "It removes the need for validation",
              "It automatically writes all documentation",
              "Persistent storage retains data independently of a temporary process's memory."
            ],
            [
              "What should happen when a requested record does not exist?",
              "Return an appropriate not-found response",
              "Pretend that an update succeeded",
              "Return a random record",
              "Expose database credentials",
              "The API should accurately report that the requested resource was not found."
            ],
            [
              "Why are database transactions useful?",
              "They help keep related changes consistent",
              "They convert all values into images",
              "They eliminate all possible errors",
              "They make authentication unnecessary",
              "Transactions help group operations under database consistency guarantees."
            ],
            [
              "What is a limitation of an in-memory list?",
              "Its contents usually disappear when the process restarts",
              "It cannot store strings",
              "It always requires a cloud account",
              "It cannot be accessed by Python",
              "In-memory demonstration data is not durable across process restarts."
            ],
          ]
        ),
        makeLesson(
          "apis-w2-l4",
          "Filtering, Sorting, and Pagination",
          "Design collection endpoints that return manageable, useful subsets of data.",
          [
            {
              heading: "Filtering",
              content:
                "Filtering selects records that match conditions. For example, /api/tasks?completed=false can return unfinished tasks. Document supported filters and define how multiple filters combine. Validate allowed values instead of blindly trusting query parameters.",
            },
            {
              heading: "Sorting",
              content:
                "Sorting determines the order of returned records, such as by creation date or title. Expose a controlled set of sortable fields. Never directly concatenate arbitrary client input into a database query or SQL expression.",
            },
            {
              heading: "Pagination",
              content:
                "Pagination divides a large result set into smaller responses. Page-based pagination can use page and page_size parameters. Offset-based approaches may be easy to understand, while cursor-based pagination can be more stable for large or frequently changing datasets.",
            },
            {
              heading: "Limits and metadata",
              content:
                "Apply a maximum page size to avoid returning unbounded amounts of data. Responses may include items, current page, page size, and total count. Think about empty results, invalid page numbers, stable ordering, and authorization for every returned record.",
            },
          ],
          `GET /api/tasks?completed=false&page=1&page_size=20
GET /api/courses?sort=title&direction=asc

# Example response
{
  "items": [{"id": 1, "title": "Learn APIs"}],
  "page": 1,
  "page_size": 20,
  "total": 1
}`,
          "Design a paginated endpoint for student records. Specify query parameters, a maximum page size, sorting options, and response metadata.",
          [
            [
              "What is filtering used for?",
              "Selecting records that match conditions",
              "Encrypting every response",
              "Creating a new server",
              "Changing the HTTP method automatically",
              "Filtering narrows a result set using specified criteria."
            ],
            [
              "Why should an API limit page size?",
              "To control response size and resource usage",
              "To ensure all records are identical",
              "To disable client-side applications",
              "To guarantee every query returns data",
              "A page-size limit helps prevent unexpectedly large responses."
            ],
            [
              "What does sorting determine?",
              "The order in which records are returned",
              "Which users are administrators automatically",
              "The API's programming language",
              "The encryption algorithm in every connection",
              "Sorting orders records by a supported field or rule."
            ],
            [
              "What is pagination?",
              "Dividing results into smaller responses",
              "Deleting every old record",
              "Changing JSON into HTML only",
              "Removing the need for a database",
              "Pagination allows clients to retrieve large collections in manageable portions."
            ],
            [
              "Why restrict allowed sorting fields?",
              "To keep query behavior controlled and safe",
              "To make every response empty",
              "To avoid returning status codes",
              "To make validation impossible",
              "A controlled allowlist avoids unsafe query construction and unexpected operations."
            ],
          ]
        ),
      ],
    },
    {
      title: "Week 3: Security, Authentication, and Testing",
      assignment:
        "Add an API validation checklist, define an authentication approach, document common errors, and write tests for successful and unsuccessful requests.",
      lessons: [
        makeLesson(
          "apis-w3-l1",
          "Authentication and Authorization",
          "Understand how APIs identify callers and decide which actions they may perform.",
          [
            {
              heading: "Authentication versus authorization",
              content:
                "Authentication answers who or what is making a request. Authorization determines what that identity is permitted to do. A user may be authenticated but still lack permission to read another user's private task or modify an administrator-only setting.",
            },
            {
              heading: "API credentials",
              content:
                "APIs may use sessions, API keys, or token-based systems. API keys can identify applications but should not be treated as sufficient user authorization for every sensitive operation. Secrets must be kept out of public frontend code, source repositories, logs, and screenshots.",
            },
            {
              heading: "Bearer tokens",
              content:
                "A client may send a token through an Authorization header using the Bearer scheme. The server must validate the token, including its issuer, expiration, audience, and signature where applicable. A token should not be accepted merely because it is present.",
            },
            {
              heading: "Least privilege",
              content:
                "Grant each identity only the permissions needed for its task. Check access at the server for each protected resource. Do not rely only on hiding a frontend button, because a client can still send requests directly to the API.",
            },
          ],
          `GET /api/profile
Authorization: Bearer ACCESS_TOKEN

# Server-side checks should include:
# 1. Is the credential valid?
# 2. Which identity does it represent?
# 3. Is that identity allowed to access this resource?`,
          "Create an access-control table for a course app with student, instructor, and administrator roles. Specify who can read, create, update, and delete courses.",
          [
            [
              "What does authentication determine?",
              "The identity of the caller",
              "The font used by a website",
              "The order of JSON keys",
              "The number of database tables",
              "Authentication establishes which identity or system is making the request."
            ],
            [
              "What does authorization determine?",
              "Which actions the caller is permitted to perform",
              "Whether JSON has double quotes",
              "Whether a server has a keyboard",
              "The exact network speed",
              "Authorization checks permissions for the requested operation or resource."
            ],
            [
              "Where should protected-resource permissions be enforced?",
              "On the server",
              "Only by hiding frontend buttons",
              "Only in a CSS file",
              "Only in a public README",
              "Clients can be modified, so the server must enforce access control."
            ],
            [
              "Where should secret API credentials be kept?",
              "In appropriately protected server-side configuration or secret storage",
              "In public frontend source code",
              "In a public repository",
              "Inside every user-visible error message",
              "Secret credentials must not be exposed to untrusted clients or public repositories."
            ],
            [
              "What is the principle of least privilege?",
              "Grant only the permissions needed for a task",
              "Give every user administrator access",
              "Disable all authentication",
              "Allow any token to access any record",
              "Least privilege limits potential harm by reducing unnecessary permissions."
            ],
          ]
        ),
        makeLesson(
          "apis-w3-l2",
          "API Security and Common Vulnerabilities",
          "Learn practical security habits for protecting API data and preventing common request-handling mistakes.",
          [
            {
              heading: "HTTPS and transport security",
              content:
                "HTTPS protects data in transit between a client and server using TLS. Production APIs should use HTTPS and appropriate certificate configuration. Transport security does not replace authentication, authorization, validation, or secure data storage.",
            },
            {
              heading: "Input validation and injection",
              content:
                "Treat client input as untrusted. Use parameterized database queries or a well-designed ORM rather than building SQL with string concatenation. Validate types, lengths, allowed values, and business constraints. Encode output appropriately when data is rendered in another context.",
            },
            {
              heading: "Access control and data exposure",
              content:
                "Check that users may access the specific resource they request, not merely that they have logged in. Return only fields required by the client. Avoid exposing password hashes, internal tokens, private personal data, or sensitive diagnostic details.",
            },
            {
              heading: "Rate limiting and abuse prevention",
              content:
                "Rate limiting controls how frequently clients can call an endpoint. Combine it with monitoring, sensible request-size limits, timeouts, and resource quotas where appropriate. Limits should be designed around legitimate usage and should not replace proper authorization.",
            },
          ],
          `# Unsafe pattern: do not build SQL from raw user input
# query = "SELECT * FROM users WHERE name = '" + user_input

# Prefer parameterized queries using your database library:
# cursor.execute(
#     "SELECT * FROM users WHERE name = ?",
#     (user_input,)
# )`,
          "Write a security checklist for a login API, including transport security, validation, access control, rate limiting, and safe error responses.",
          [
            [
              "What does HTTPS help protect?",
              "Data transmitted between client and server",
              "All server files from every possible threat",
              "A user's physical device from damage",
              "Every database query from logical errors",
              "HTTPS protects data in transit but does not secure every part of an application."
            ],
            [
              "What is a safer way to pass user values into SQL queries?",
              "Use parameterized queries",
              "Concatenate raw input into SQL",
              "Disable database constraints",
              "Print the database password",
              "Parameterized queries separate data values from SQL command structure."
            ],
            [
              "Why check access to each requested resource?",
              "A logged-in user may not own or be allowed to access that resource",
              "Authentication always grants full access",
              "It makes every request a POST request",
              "It removes the need for HTTPS",
              "Authorization must consider the particular resource and requested action."
            ],
            [
              "What does rate limiting help control?",
              "The frequency of requests",
              "The spelling of every JSON key",
              "The user's screen brightness",
              "The programming language of the client",
              "Rate limiting helps control request volume and reduce some forms of abuse."
            ],
            [
              "What should a public API error avoid exposing?",
              "Secrets and internal diagnostic details",
              "A clear indication that input is invalid",
              "A suitable HTTP status code",
              "A safe request identifier when useful",
              "Detailed internal errors can expose implementation information that attackers could misuse."
            ],
          ]
        ),
        makeLesson(
          "apis-w3-l3",
          "Testing APIs",
          "Test endpoint behavior systematically, including expected results, invalid requests, and permission failures.",
          [
            {
              heading: "Why API testing matters",
              content:
                "API tests check whether endpoints behave according to their contract. They can catch regressions, invalid status codes, incorrect response fields, authorization failures, and edge cases before deployment. Manual checks are useful, but automated tests are repeatable.",
            },
            {
              heading: "Testing levels",
              content:
                "Unit tests focus on small functions or business rules. Integration tests verify that components such as route handlers and databases work together. End-to-end tests exercise a complete workflow from the client's perspective. Each level finds different types of defects.",
            },
            {
              heading: "Test cases",
              content:
                "For each endpoint, test valid input, missing fields, invalid types, nonexistent identifiers, unauthorized access, and boundary values. Verify status codes and important response fields. Include regression tests for bugs that have been fixed.",
            },
            {
              heading: "Repeatable test data",
              content:
                "Tests should use controlled data and clean up after themselves where appropriate. Avoid depending on production data or external services that may change unexpectedly. Mock external services when a test should focus on local logic, and use integration tests when the real interaction matters.",
            },
          ],
          `# Example test idea using pytest and FastAPI TestClient
def test_health_endpoint(client):
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"

# The client fixture should be configured in the test setup.`,
          "Write a test plan for POST /api/tasks. Include a valid task, an empty title, a missing body, and an unauthorized request.",
          [
            [
              "What is the main purpose of an API test?",
              "To verify endpoint behavior against expected results",
              "To guarantee that the API never needs maintenance",
              "To replace all security checks",
              "To change the database schema automatically",
              "Tests verify observable behavior and help detect regressions."
            ],
            [
              "What does a unit test usually focus on?",
              "A small function or isolated piece of logic",
              "Every external system at once",
              "Only the production server's physical hardware",
              "Only the application's logo",
              "Unit tests isolate small pieces of behavior to make failures easier to diagnose."
            ],
            [
              "What does an integration test check?",
              "Whether components work together correctly",
              "Whether a title looks attractive",
              "Whether the user owns a particular keyboard",
              "Whether every endpoint uses the same status code",
              "Integration tests exercise interactions between components."
            ],
            [
              "Why test invalid input?",
              "To ensure the API rejects or handles it correctly",
              "To make invalid data silently acceptable",
              "To bypass validation",
              "To avoid documenting endpoint behavior",
              "Invalid-input tests verify validation and error handling."
            ],
            [
              "Why should automated tests use controlled data?",
              "To make results repeatable and reduce unexpected dependencies",
              "To ensure every test passes without checking anything",
              "To use real customer secrets",
              "To avoid all assertions",
              "Predictable test data makes failures more reproducible and meaningful."
            ],
          ]
        ),
        makeLesson(
          "apis-w3-l4",
          "Error Handling and API Documentation",
          "Create consistent errors and clear documentation so API consumers can integrate without guessing.",
          [
            {
              heading: "Consistent error responses",
              content:
                "An API should return errors in a predictable format. A response may include an error code, a readable message, and field-level validation details. Keep internal exceptions separate from public messages and avoid including credentials or private data.",
            },
            {
              heading: "Status codes and exceptions",
              content:
                "Use status codes to communicate the general result and a response body to provide safe details. A missing resource commonly maps to 404, invalid input to 400 or 422 depending on the framework and contract, and unexpected server failures to 500.",
            },
            {
              heading: "OpenAPI specifications",
              content:
                "OpenAPI describes endpoints, methods, parameters, request bodies, responses, and security requirements in a machine-readable format. Tools can use the specification to render documentation, generate client libraries, and support contract testing.",
            },
            {
              heading: "Writing useful API documentation",
              content:
                "Document what each endpoint does, whether authentication is required, the expected fields, validation constraints, response examples, and likely error cases. Keep documentation aligned with the actual implementation. Never place real credentials in examples.",
            },
          ],
          `{
  "error": {
    "code": "TASK_NOT_FOUND",
    "message": "The requested task was not found"
  }
}

# Example documentation should also specify:
# Method, path, parameters, authentication,
# request schema, success response, and error responses.`,
          "Document a create-task endpoint with its request schema, success response, validation errors, authentication requirement, and an example request.",
          [
            [
              "Why use a consistent error format?",
              "Clients can handle errors predictably",
              "It makes validation unnecessary",
              "It prevents all server failures",
              "It hides every status code",
              "A consistent format helps client applications interpret errors reliably."
            ],
            [
              "What does OpenAPI describe?",
              "API endpoints, parameters, schemas, responses, and security",
              "Only the application's color palette",
              "The physical network cables",
              "Only database backup schedules",
              "OpenAPI provides a machine-readable description of an API contract."
            ],
            [
              "Which response is generally appropriate for an unexpected server failure?",
              "500 Internal Server Error",
              "201 Created",
              "204 No Content",
              "301 Moved Permanently",
              "500 represents an unexpected server-side failure."
            ],
            [
              "What should API documentation include?",
              "Inputs, outputs, authentication, and likely errors",
              "Real production passwords",
              "Private customer records",
              "Only the project author's name",
              "Documentation should give consumers enough information to use endpoints correctly and safely."
            ],
            [
              "Why avoid exposing internal exception details?",
              "They may reveal sensitive implementation information",
              "They make JSON syntactically invalid in every case",
              "They prevent HTTP from working",
              "They make every response too short",
              "Internal stack traces and secrets should not be sent to untrusted clients."
            ],
          ]
        ),
      ],
    },
    {
      title: "Week 4: Advanced API Design and Final Project",
      assignment:
        "Complete the task-management API, document its contract, test CRUD and failure cases, and prepare a short report explaining design choices and limitations.",
      lessons: [
        makeLesson(
          "apis-w4-l1",
          "API Versioning and Backward Compatibility",
          "Learn how to evolve APIs without unexpectedly breaking existing clients.",
          [
            {
              heading: "Why version APIs?",
              content:
                "APIs evolve as products add features and improve data models. A breaking change can cause older clients to fail. Versioning provides a documented way to distinguish incompatible contracts and plan migration.",
            },
            {
              heading: "Common versioning strategies",
              content:
                "A version may appear in a URL, such as /api/v1/tasks, or in a request header or media type. URL versioning is easy to see and test. Header-based approaches can keep URLs stable but require clearer client configuration and documentation.",
            },
            {
              heading: "Backward-compatible changes",
              content:
                "Adding an optional field may be compatible for many clients, but assumptions differ. Removing a field, changing a field's type, changing required behavior, or changing error semantics may break consumers. Review the actual expectations of clients before deciding a change is safe.",
            },
            {
              heading: "Deprecation and migration",
              content:
                "When retiring an API version, communicate the timeline, provide migration instructions, monitor usage, and allow an appropriate transition period. Keep old versions supported according to a published policy rather than removing them without warning.",
            },
          ],
          `GET /api/v1/tasks
GET /api/v2/tasks

# Example migration notes:
# v2 adds an optional category field.
# Document any changed behavior and migration steps.`,
          "Imagine an API must change a field from a string to an object. Explain why this may be breaking and write a simple migration plan.",
          [
            [
              "Why might an API need versioning?",
              "To manage incompatible changes for existing clients",
              "To force all users to update every day",
              "To remove all documentation",
              "To disable HTTP status codes",
              "Versioning can separate incompatible contracts and give clients time to migrate."
            ],
            [
              "Which change is most likely to break an existing client?",
              "Changing a field's type unexpectedly",
              "Adding a documented optional field in a compatible way",
              "Fixing a spelling mistake in internal comments",
              "Adding a new endpoint without changing existing behavior",
              "Clients may rely on a field's existing type and fail when it changes."
            ],
            [
              "Where can an API version be placed?",
              "In a URL path or a documented header strategy",
              "Only in a CSS selector",
              "Only in a database password",
              "Only in a computer's hostname",
              "URL paths and headers are both used for API versioning strategies."
            ],
            [
              "What is API deprecation?",
              "Announcing that a feature or version will be retired",
              "Encrypting every request twice",
              "Deleting all user accounts",
              "Automatically increasing every response size",
              "Deprecation warns consumers that a feature or version is planned for retirement."
            ],
            [
              "What should a migration plan provide?",
              "Clear changes, timelines, and steps for clients",
              "Unannounced removal of endpoints",
              "Secret tokens in public documentation",
              "A guarantee that no client needs changes",
              "Migration guidance helps consumers transition with fewer unexpected failures."
            ],
          ]
        ),
        makeLesson(
          "apis-w4-l2",
          "Performance, Caching, and Timeouts",
          "Improve API responsiveness while preserving correctness and controlling resource usage.",
          [
            {
              heading: "Measure before optimizing",
              content:
                "Measure response latency, throughput, error rate, and resource usage before making performance changes. A slow request may be caused by database queries, external services, network latency, or expensive computation. Profiling helps identify the real bottleneck.",
            },
            {
              heading: "Caching",
              content:
                "Caching stores reusable results so they can be served without repeating expensive work. HTTP caching headers such as Cache-Control help clients and intermediaries determine whether a response may be reused. Be cautious with personalized or sensitive responses, which must not be exposed through shared caches.",
            },
            {
              heading: "Timeouts and retries",
              content:
                "Set appropriate timeouts for network calls so a slow dependency does not occupy resources indefinitely. Retries may help with temporary failures, but use bounded attempts and backoff. Retrying non-idempotent operations without safeguards can create duplicate side effects.",
            },
            {
              heading: "Efficient database access",
              content:
                "Use indexes where queries benefit from them, select only necessary fields, avoid repeated database calls inside loops, and paginate large collections. Measure query plans and real workloads rather than adding indexes or caching without evidence.",
            },
          ],
          `# Conceptual client-side request settings
timeout_seconds = 5
max_retries = 3

# A real implementation should use bounded retries,
# suitable backoff, and operation-aware retry rules.`,
          "Identify three possible causes of a slow task-list endpoint and explain how you would measure and improve each one.",
          [
            [
              "What should guide performance optimization?",
              "Measurements that identify actual bottlenecks",
              "Guessing without observing behavior",
              "The number of comments in source code",
              "Changing every database column",
              "Measurement and profiling help focus work on meaningful bottlenecks."
            ],
            [
              "What is caching?",
              "Reusing stored results to avoid repeating work",
              "Deleting every response immediately",
              "Converting every request to a database table",
              "Replacing authentication with a URL",
              "Caching can reduce repeated computation or retrieval when reuse is safe."
            ],
            [
              "Why are network timeouts important?",
              "They prevent waiting indefinitely for an unresponsive dependency",
              "They guarantee every request succeeds",
              "They replace error handling",
              "They ensure all APIs are public",
              "Timeouts place limits on how long a caller waits for a response."
            ],
            [
              "Why can retries be dangerous for some operations?",
              "They may repeat side effects and create duplicate actions",
              "They always delete cached data",
              "They prevent the server from receiving requests",
              "They change the JSON standard",
              "A repeated payment or creation request can cause duplicate effects without appropriate safeguards."
            ],
            [
              "What is a potential benefit of a database index?",
              "Faster lookup for suitable queries",
              "Automatic authorization of every user",
              "Guaranteed elimination of all database errors",
              "Automatic API versioning",
              "Indexes can improve certain lookups, although they have storage and write costs."
            ],
          ]
        ),
        makeLesson(
          "apis-w4-l3",
          "Async APIs and External Service Integration",
          "Understand asynchronous request handling and how to call external services reliably.",
          [
            {
              heading: "Synchronous and asynchronous work",
              content:
                "Synchronous code waits for an operation to finish before continuing. Asynchronous code can yield while waiting for supported I/O operations, allowing an event loop to handle other work. Async behavior is especially useful for concurrent network calls, but it does not automatically make CPU-heavy code faster.",
            },
            {
              heading: "Using async handlers",
              content:
                "In FastAPI, an async route can await compatible asynchronous libraries. Avoid calling long blocking operations directly inside an async handler because they can block the event loop. Use a suitable async client or move blocking work to an appropriate execution context.",
            },
            {
              heading: "External dependency failures",
              content:
                "An external service may time out, reject a request, return malformed data, or become unavailable. Handle these outcomes explicitly. Apply timeouts, validate returned data, log useful diagnostic context safely, and return a clear error to the client when the operation cannot complete.",
            },
            {
              heading: "Background tasks and durable jobs",
              content:
                "A short background task may run after the API sends a response, depending on the framework. For important or long-running jobs, a durable queue and worker may be more appropriate. Design retries, idempotency, status tracking, and failure recovery around the importance of the work.",
            },
          ],
          `from fastapi import FastAPI
import httpx

app = FastAPI()

@app.get("/api/external-status")
async def external_status():
    async with httpx.AsyncClient(timeout=5.0) as client:
        response = await client.get(
            "https://example.com"
        )
        return {"upstream_status": response.status_code}

# Production code should also handle upstream failures
# and validate the response for its intended purpose.`,
          "Design an endpoint that retrieves information from an external service. Describe how it handles timeouts, invalid responses, and service unavailability.",
          [
            [
              "What does await do in asynchronous Python?",
              "It waits for an awaitable operation while allowing cooperative scheduling",
              "It encrypts every returned value",
              "It converts every function into a database",
              "It guarantees CPU-heavy code runs faster",
              "Await allows asynchronous code to suspend until an awaitable completes."
            ],
            [
              "When is asynchronous I/O especially useful?",
              "When handling many network or other supported I/O waits",
              "When changing the color of a button",
              "When compiling every language",
              "When replacing all input validation",
              "Async I/O can improve concurrency when operations spend time waiting on supported I/O."
            ],
            [
              "What should an API do when an upstream service times out?",
              "Handle the failure deliberately and return an appropriate response",
              "Wait forever",
              "Return unvalidated private data",
              "Ignore all error conditions",
              "Timeout handling prevents indefinite waits and enables clear failure behavior."
            ],
            [
              "Why might a durable job queue be useful?",
              "For important work that needs tracking and reliable processing",
              "To make passwords public",
              "To remove every worker process",
              "To force all operations into one HTTP request",
              "Durable queues can support retries, persistence, and worker-based processing."
            ],
            [
              "Does async automatically speed up CPU-heavy calculations?",
              "No, async primarily helps coordinate waiting operations",
              "Yes, it always multiplies CPU speed",
              "Yes, it removes the need for memory",
              "No, async disables all network access",
              "CPU-bound tasks generally need profiling and suitable execution strategies rather than async alone."
            ],
          ]
        ),
        makeLesson(
          "apis-w4-l4",
          "Final Project: Task Management REST API",
          "Combine endpoint design, validation, persistence, security, testing, documentation, and performance considerations into one API project.",
          [
            {
              heading: "Project requirements",
              content:
                "Build an API for managing tasks. Each task can have an identifier, title, description, completion state, and creation timestamp. Define which fields are required, which can be updated, and how identifiers are assigned. Write down the expected behavior before implementation.",
            },
            {
              heading: "Endpoint design",
              content:
                "Implement GET /api/tasks to list tasks, POST /api/tasks to create a task, GET /api/tasks/{id} to retrieve one task, PATCH /api/tasks/{id} to update selected fields, and DELETE /api/tasks/{id} to remove a task. Add documented filtering and pagination if time allows.",
            },
            {
              heading: "Reliability and security",
              content:
                "Validate all inputs, return appropriate status codes, handle missing records, and protect private operations when authentication is implemented. Use persistent storage for a real deployment. Never commit secret keys or include private user data in error messages.",
            },
            {
              heading: "Testing and delivery",
              content:
                "Write automated tests for successful CRUD operations, invalid fields, missing identifiers, and unauthorized requests. Document the API with example requests and responses. Review the code for duplicated logic, unsafe query construction, excessive response sizes, and unclear error behavior.",
            },
          ],
          `# Suggested project checklist
# [ ] Define task schema
# [ ] Implement list and create
# [ ] Implement retrieve, update, and delete
# [ ] Validate request data
# [ ] Return correct status codes
# [ ] Add pagination and filtering
# [ ] Write automated tests
# [ ] Document endpoints
# [ ] Review security and error handling`,
          "Complete the task-management API and prepare a short report describing the architecture, endpoint contract, validation rules, test coverage, security controls, and limitations.",
          [
            [
              "What should be defined before implementing project endpoints?",
              "Resource fields and expected endpoint behavior",
              "Only the application's logo",
              "Real user passwords in a text file",
              "Random status codes for each request",
              "Clear requirements make implementation and testing more consistent."
            ],
            [
              "Which endpoint is appropriate for creating a task?",
              "POST /api/tasks",
              "GET /api/tasks",
              "DELETE /api/tasks",
              "GET /api/tasks/12",
              "POST on the collection endpoint is a conventional resource-creation pattern."
            ],
            [
              "What should happen when an update targets a missing task?",
              "Return an appropriate not-found response",
              "Report success without checking the record",
              "Return another user's task",
              "Expose the database password",
              "The API should report that the target resource does not exist."
            ],
            [
              "Which test set is most useful for a CRUD API?",
              "Success cases, invalid inputs, missing records, and access failures",
              "Only one successful GET request",
              "Only a screenshot of the homepage",
              "Only tests of variable names",
              "A broad test set checks both expected behavior and important failure cases."
            ],
            [
              "What is a good final-project deliverable?",
              "Working endpoints, automated tests, and clear API documentation",
              "Only an untested source file",
              "A list of secrets",
              "A frontend with no API contract",
              "A useful API project demonstrates behavior, verification, and clear instructions for consumers."
            ],
          ]
        ),
      ],
    },
  ],
};

export default apisCourse;

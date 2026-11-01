
const apisAIMLCourse = {
  title: "APIs for AI/ML Engineer",
  description:
    "Learn API fundamentals, HTTP, REST, JSON, Python API development, authentication, model serving, AI integrations, testing, security, and deployment.",
  weeks: [
    {
      title: "Week 1: API Fundamentals",
      description: "Understand APIs, HTTP communication, REST architecture, and JSON.",
      lessons: [
        {
          title: "Introduction to APIs",
          content: `API stands for Application Programming Interface. It is a defined way for two software systems to communicate. An API specifies how a client can request information or actions from a server and how the server responds.

For example, a weather application may request current weather information from a weather service. The application sends a request to the service API, and the service returns structured information.

The client is the system making the request. The server receives the request, performs the required operation, and returns a response.

APIs are used in websites, mobile applications, payment systems, cloud services, databases, and AI/ML applications.

In AI/ML engineering, APIs allow applications to send data to a trained model and receive predictions. An application does not need to contain the entire model internally. It can communicate with a model hosted on another server.

Common API styles include REST, GraphQL, and SOAP. REST APIs are particularly common in modern web applications.

An API contract describes available endpoints, accepted inputs, expected outputs, and possible errors. Understanding this contract helps developers integrate systems correctly.`,
          quiz: [
            {
              question: "What does API stand for?",
              options: [
                "Application Programming Interface",
                "Advanced Program Installation",
                "Application Process Integration",
                "Automated Programming Internet",
              ],
              answer: "Application Programming Interface",
            },
            {
              question: "What is the main purpose of an API?",
              options: [
                "Allow software systems to communicate",
                "Increase computer screen resolution",
                "Replace all operating systems",
                "Compress every application file",
              ],
              answer: "Allow software systems to communicate",
            },
            {
              question: "Which system normally sends an API request?",
              options: ["Client", "Compiler", "Router only", "Database index"],
              answer: "Client",
            },
            {
              question: "How can an API help an AI/ML application?",
              options: [
                "Allow an application to send input to a model and receive predictions",
                "Automatically create every training dataset",
                "Replace the need for model evaluation",
                "Convert a neural network into an operating system",
              ],
              answer: "Allow an application to send input to a model and receive predictions",
            },
            {
              question: "What does an API contract describe?",
              options: [
                "Endpoints, inputs, outputs, and possible errors",
                "Only the server's physical location",
                "The computer's hardware warranty",
                "The application's screen design",
              ],
              answer: "Endpoints, inputs, outputs, and possible errors",
            },
          ],
        },
        {
          title: "HTTP and Client-Server Communication",
          content: `HTTP stands for Hypertext Transfer Protocol. It is a communication protocol commonly used by web APIs.

An HTTP interaction usually involves a client sending a request to a server and the server returning a response. A request contains information such as a method, URL, headers, and sometimes a body.

The URL identifies the resource or endpoint. Headers carry metadata such as the content type and authorization information. The request body contains data sent to the server when required.

The server processes the request and returns a status code, response headers, and sometimes a response body.

HTTPS is HTTP protected using TLS encryption. It helps protect information while it travels between the client and server.

HTTP is stateless by default. Each request is treated as an independent request, although applications can use tokens, cookies, and other mechanisms to maintain user sessions.

In AI/ML systems, a client might send an image or text to an inference endpoint using HTTPS. The server processes the input and returns a prediction.`,
          quiz: [
            {
              question: "What does HTTP stand for?",
              options: [
                "Hypertext Transfer Protocol",
                "High Transfer Text Process",
                "Hyperlink Transmission Program",
                "Host Transfer Tracking Protocol",
              ],
              answer: "Hypertext Transfer Protocol",
            },
            {
              question: "What identifies a resource in an HTTP request?",
              options: ["URL", "GPU", "CSV", "Compiler"],
              answer: "URL",
            },
            {
              question: "What is the purpose of HTTP headers?",
              options: [
                "Carry metadata about a request or response",
                "Store the entire server operating system",
                "Replace the HTTP method",
                "Train a neural network",
              ],
              answer: "Carry metadata about a request or response",
            },
            {
              question: "What security technology protects HTTPS communication?",
              options: ["TLS", "FTP", "CSV", "SQL"],
              answer: "TLS",
            },
            {
              question: "What does stateless HTTP mean by default?",
              options: [
                "Each request is handled independently",
                "The server permanently remembers every request",
                "Requests cannot contain headers",
                "The client cannot receive responses",
              ],
              answer: "Each request is handled independently",
            },
          ],
        },
        {
          title: "HTTP Methods and Status Codes",
          content: `HTTP methods describe the operation a client wants to perform on a resource.

GET is commonly used to retrieve information. POST is commonly used to submit data or create a resource. PUT generally replaces a resource, while PATCH applies a partial update. DELETE requests removal of a resource.

A well-designed API uses methods consistently. For example, a prediction service might accept a POST request containing input data and return the model's prediction.

HTTP status codes communicate the result of a request. The 2xx range represents successful responses. The 3xx range relates to redirection. The 4xx range represents client-side errors, and the 5xx range represents server-side errors.

Common codes include 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Content, and 500 Internal Server Error.

A useful API response should communicate success or failure clearly. Developers should not return a successful status when an operation has actually failed.`,
          quiz: [
            {
              question: "Which HTTP method is commonly used to retrieve data?",
              options: ["GET", "POST", "DELETE", "PATCH"],
              answer: "GET",
            },
            {
              question: "Which method is commonly used to submit data for processing?",
              options: ["POST", "GET", "HEAD", "OPTIONS"],
              answer: "POST",
            },
            {
              question: "What does HTTP status code 404 indicate?",
              options: [
                "Resource not found",
                "Request completed successfully",
                "Resource created",
                "Server permanently stopped",
              ],
              answer: "Resource not found",
            },
            {
              question: "Which status code represents a successful resource creation?",
              options: ["201", "404", "500", "403"],
              answer: "201",
            },
            {
              question: "Which status code range generally represents server errors?",
              options: ["5xx", "2xx", "3xx", "1xx"],
              answer: "5xx",
            },
          ],
        },
        {
          title: "JSON, Request Bodies, and API Responses",
          content: `JSON stands for JavaScript Object Notation. It is a lightweight text format commonly used to exchange structured information between applications.

JSON supports objects, arrays, strings, numbers, booleans, and null values. An object contains key-value pairs, while an array contains an ordered collection of values.

Example request body:

{
  "student_id": 101,
  "marks": 85,
  "subject": "Python"
}

An API may accept JSON input and return JSON output. The Content-Type header indicates the format of the request body. For JSON, this is commonly application/json.

The Accept header can indicate which response format the client can process.

In Python, the json module provides methods such as json.loads() for converting JSON text into Python objects and json.dumps() for converting Python objects into JSON text.

AI/ML APIs frequently receive features in JSON format. The server validates those features, prepares model input, performs inference, and returns a prediction in a structured response.

Input validation is important because missing, incorrect, or unexpected values can cause application errors or unreliable predictions.`,
          quiz: [
            {
              question: "What does JSON stand for?",
              options: [
                "JavaScript Object Notation",
                "Java Source Object Network",
                "JavaScript Operating Number",
                "Joint System Object Name",
              ],
              answer: "JavaScript Object Notation",
            },
            {
              question: "Which JSON structure contains key-value pairs?",
              options: ["Object", "Array", "String", "Boolean"],
              answer: "Object",
            },
            {
              question: "Which header commonly identifies a JSON request body?",
              options: ["Content-Type", "Host-Name", "Cache-Only", "File-Size"],
              answer: "Content-Type",
            },
            {
              question: "Which Python method converts JSON text into Python objects?",
              options: ["json.loads()", "json.dumps()", "json.save()", "json.convert()"],
              answer: "json.loads()",
            },
            {
              question: "Why should an API validate JSON input?",
              options: [
                "To detect missing or incorrectly formatted values",
                "To increase the number of API endpoints",
                "To remove HTTP status codes",
                "To eliminate the need for responses",
              ],
              answer: "To detect missing or incorrectly formatted values",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Building APIs with Python",
      description: "Create API endpoints, validate data, and connect Python applications.",
      lessons: [
        {
          title: "REST API Architecture",
          content: `REST stands for Representational State Transfer. It is an architectural style used to design network-based APIs.

REST APIs commonly organize application data as resources. A resource might represent a user, student, product, model, or prediction.

Each resource is identified using a URL. For example, /students may represent a collection of students, while /students/101 may represent one student.

REST APIs commonly use HTTP methods to retrieve, create, update, and delete resources. They typically exchange data using JSON.

A RESTful design uses consistent resource naming and appropriate HTTP methods. It also uses standard HTTP status codes to communicate outcomes.

REST is not a programming language or a specific software library. It is a set of architectural constraints and design principles.

In an AI/ML application, a REST endpoint such as /predict can receive input features and return a model prediction. Other endpoints might expose model information or health status.

A well-designed API should be understandable, consistent, and documented so that other applications can use it.`,
          quiz: [
            {
              question: "What does REST stand for?",
              options: [
                "Representational State Transfer",
                "Remote Execution System Tool",
                "Resource Storage Transfer",
                "Representational Server Technology",
              ],
              answer: "Representational State Transfer",
            },
            {
              question: "How does a REST API commonly represent application data?",
              options: ["Resources", "Desktop windows", "CPU registers", "Compiler instructions"],
              answer: "Resources",
            },
            {
              question: "Which URL could represent one student?",
              options: ["/students/101", "/students/all/new/create/delete", "/cpu/101", "/python/compiler"],
              answer: "/students/101",
            },
            {
              question: "Which format is commonly used by REST APIs for data exchange?",
              options: ["JSON", "MP3", "EXE", "JPEG only"],
              answer: "JSON",
            },
            {
              question: "Is REST a programming language?",
              options: [
                "No, it is an architectural style",
                "Yes, it is a compiled language",
                "Yes, it is a database",
                "No, it is an operating system",
              ],
              answer: "No, it is an architectural style",
            },
          ],
        },
        {
          title: "Building APIs with FastAPI",
          content: `FastAPI is a Python framework for building web APIs. It supports type hints, request validation, asynchronous functions, and automatic API documentation.

A basic FastAPI application creates an instance of FastAPI and defines endpoint functions using decorators.

For example:

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "API is running"}

The @app.get("/") decorator registers a GET endpoint at the root URL. Returning a Python dictionary normally produces a JSON response.

FastAPI uses Python type hints and Pydantic models to validate request data. A Pydantic model defines the expected fields and types of incoming data.

The application can be started using an ASGI server such as Uvicorn. Once running, the API can be accessed through its local address.

FastAPI automatically generates interactive documentation, commonly available at /docs. Developers can use this interface to inspect endpoints and send test requests.

FastAPI is useful for exposing machine learning models through HTTP endpoints.`,
          quiz: [
            {
              question: "What is FastAPI?",
              options: [
                "A Python framework for building APIs",
                "A database query language",
                "An image editing application",
                "A hardware processor",
              ],
              answer: "A Python framework for building APIs",
            },
            {
              question: "Which decorator registers a GET endpoint in FastAPI?",
              options: ["@app.get()", "@app.delete()", "@app.model()", "@app.json()"],
              answer: "@app.get()",
            },
            {
              question: "What is commonly returned when a FastAPI endpoint returns a Python dictionary?",
              options: ["JSON response", "Compiled executable", "Audio stream", "Database schema"],
              answer: "JSON response",
            },
            {
              question: "Which server can run a FastAPI application?",
              options: ["Uvicorn", "Excel", "Photoshop", "GitHub Desktop"],
              answer: "Uvicorn",
            },
            {
              question: "Which path commonly displays FastAPI interactive documentation?",
              options: ["/docs", "/database", "/compiler", "/images-only"],
              answer: "/docs",
            },
          ],
        },
        {
          title: "Request Validation and Pydantic Models",
          content: `An API should validate incoming data before processing it. Validation checks whether required fields exist and whether their values have the expected types and constraints.

Pydantic is a Python library used for data validation. FastAPI integrates with Pydantic models to validate request bodies automatically.

Example:

from pydantic import BaseModel

class PredictionInput(BaseModel):
    age: int
    experience: float

A request using this model must provide values that can be validated as the declared types.

Validation can also include constraints, such as a number being greater than zero or a string having a minimum length.

For AI/ML systems, validation is especially important. A prediction model may expect a fixed set of features, numeric values, and specific ranges. Incorrect input can cause exceptions or misleading results.

A useful API should return clear validation errors rather than silently accepting invalid data.

Validation does not guarantee that data is meaningful. For example, a numeric age value may be syntactically valid but outside the expected real-world range. Developers should implement both type validation and domain-specific checks.`,
          quiz: [
            {
              question: "What is the purpose of request validation?",
              options: [
                "Check whether incoming data meets expected requirements",
                "Increase the API server's physical memory",
                "Automatically train every model",
                "Remove all response headers",
              ],
              answer: "Check whether incoming data meets expected requirements",
            },
            {
              question: "Which library is integrated with FastAPI for data validation?",
              options: ["Pydantic", "Matplotlib", "OpenCV only", "BeautifulSoup"],
              answer: "Pydantic",
            },
            {
              question: "What does a Pydantic model define?",
              options: [
                "Expected data fields and their types",
                "The computer's network address",
                "The model's GPU temperature",
                "The browser's screen dimensions",
              ],
              answer: "Expected data fields and their types",
            },
            {
              question: "Why is validation important for an ML prediction endpoint?",
              options: [
                "The model may require specific features and value types",
                "It automatically improves model accuracy",
                "It removes the need for a trained model",
                "It converts all inputs into images",
              ],
              answer: "The model may require specific features and value types",
            },
            {
              question: "Does correct data type validation guarantee that a value is meaningful?",
              options: [
                "No, domain-specific checks may also be needed",
                "Yes, every correctly typed value is meaningful",
                "Yes, validation guarantees model accuracy",
                "No, type validation never checks anything",
              ],
              answer: "No, domain-specific checks may also be needed",
            },
          ],
        },
        {
          title: "Query Parameters, Path Parameters, and Request Bodies",
          content: `APIs accept input in several ways. Path parameters, query parameters, and request bodies serve different purposes.

A path parameter is part of the URL path and commonly identifies a specific resource. For example, /students/101 uses 101 as a student identifier.

A query parameter appears after a question mark in the URL. For example, /students?department=ECE can filter the student collection.

A request body carries structured data, often JSON. It is commonly used when creating a resource or submitting complex input for processing.

In FastAPI, path parameters can be declared in the route path and function arguments. Query parameters can be declared as function arguments that are not part of the route path.

Request body data can be declared using Pydantic models.

For an ML prediction API, path parameters might identify a model version, query parameters might control an optional prediction setting, and a JSON body might contain the input features.

Choosing the correct input location improves clarity and makes API contracts easier to understand.`,
          quiz: [
            {
              question: "Where does a path parameter appear?",
              options: ["Inside the URL path", "Only inside a response body", "Inside a Python comment", "In the server log filename"],
              answer: "Inside the URL path",
            },
            {
              question: "Which symbol begins the query string in a URL?",
              options: ["?", "#", "@", "&"],
              answer: "?",
            },
            {
              question: "Which input method is commonly used for structured JSON data?",
              options: ["Request body", "URL fragment", "Browser title", "HTTP status code"],
              answer: "Request body",
            },
            {
              question: "What might /students/101 identify?",
              options: [
                "A specific student resource",
                "All server processes",
                "A database password",
                "A Python package",
              ],
              answer: "A specific student resource",
            },
            {
              question: "Which input might filter students by department?",
              options: [
                "Query parameter",
                "HTTP status code",
                "Response status phrase",
                "TLS certificate",
              ],
              answer: "Query parameter",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: APIs for Machine Learning Systems",
      description: "Connect trained models to applications through inference APIs.",
      lessons: [
        {
          title: "Serving a Trained Machine Learning Model",
          content: `Model serving means making a trained machine learning model available so that applications can request predictions.

A typical serving workflow begins with training a model using a dataset. The trained model is saved as an artifact. A server loads that artifact and exposes an inference endpoint.

When a client sends input data, the API validates it, applies the same preprocessing used during training, and passes the prepared input to the model.

The model produces a prediction. The server converts the result into a response format such as JSON and sends it back to the client.

For example, a student performance model might accept attendance and assessment scores and return a predicted performance category.

The preprocessing steps used during inference must be consistent with training. Otherwise, the model may receive values in a different format or scale and produce unreliable results.

A serving system should also handle invalid input, model loading failures, timeouts, and unexpected exceptions.

Model serving separates model computation from the client application and makes it easier to reuse a model across different interfaces.`,
          quiz: [
            {
              question: "What does model serving mean?",
              options: [
                "Making a trained model available for predictions",
                "Training a model without data",
                "Deleting model parameters",
                "Designing a database table",
              ],
              answer: "Making a trained model available for predictions",
            },
            {
              question: "What is a model artifact?",
              options: [
                "A saved model file or related deployment asset",
                "An HTTP error code",
                "A browser extension",
                "A network cable",
              ],
              answer: "A saved model file or related deployment asset",
            },
            {
              question: "What should happen before model inference?",
              options: [
                "Validate and prepare the input data",
                "Delete the model artifact",
                "Remove all input features",
                "Restart the user's browser",
              ],
              answer: "Validate and prepare the input data",
            },
            {
              question: "Why should inference preprocessing match training preprocessing?",
              options: [
                "The model expects consistent feature representation",
                "It increases the number of API endpoints",
                "It eliminates the need for evaluation",
                "It automatically changes the model architecture",
              ],
              answer: "The model expects consistent feature representation",
            },
            {
              question: "What does an inference endpoint return?",
              options: [
                "A model prediction or an appropriate error response",
                "The complete training computer",
                "Only the original dataset",
                "A programming language",
              ],
              answer: "A model prediction or an appropriate error response",
            },
          ],
        },
        {
          title: "Integrating External AI and ML APIs",
          content: `External AI/ML APIs allow an application to use capabilities hosted by another service. Examples include text analysis, image recognition, speech processing, translation, and embedding generation.

An integration usually requires an endpoint URL, an HTTP method, request headers, and a request body. The service processes the request and returns a response.

Python's requests library can send HTTP requests. For example, requests.post() can submit JSON data to an endpoint.

A developer should read the API documentation before integrating a service. Documentation explains authentication requirements, accepted parameters, response formats, usage limits, and error codes.

External API integrations introduce dependencies. The remote service may become unavailable, respond slowly, change its interface, or enforce rate limits.

Applications should handle timeouts and errors gracefully. They should also avoid exposing secret API keys in browser code or public repositories.

When integrating AI services, developers should review data handling and privacy terms before sending user information to an external provider.`,
          quiz: [
            {
              question: "What is an external AI API?",
              options: [
                "An interface to an AI capability hosted by another service",
                "A local keyboard driver",
                "A database table stored in a browser",
                "A programming language extension",
              ],
              answer: "An interface to an AI capability hosted by another service",
            },
            {
              question: "Which Python library is commonly used to send HTTP requests?",
              options: ["requests", "random", "turtle", "statistics"],
              answer: "requests",
            },
            {
              question: "Why should developers read API documentation?",
              options: [
                "To understand endpoints, inputs, authentication, and responses",
                "To avoid writing any application code",
                "To increase the server's memory",
                "To disable all HTTP methods",
              ],
              answer: "To understand endpoints, inputs, authentication, and responses",
            },
            {
              question: "What is a rate limit?",
              options: [
                "A restriction on how many requests can be made in a period",
                "The maximum number of Python files",
                "The speed of a computer fan",
                "The number of database columns",
              ],
              answer: "A restriction on how many requests can be made in a period",
            },
            {
              question: "Where should secret API keys normally be kept in a server-side application?",
              options: [
                "In protected environment variables or a secrets manager",
                "In public frontend source code",
                "In a public image filename",
                "In a shared documentation example",
              ],
              answer: "In protected environment variables or a secrets manager",
            },
          ],
        },
        {
          title: "Authentication, API Keys, and Tokens",
          content: `Authentication verifies the identity of a client or user. Authorization determines what an authenticated identity is allowed to do.

An API key is a credential that identifies or grants access to an application. It is commonly sent through a request header. API keys should be stored securely and rotated if exposed.

Bearer tokens are commonly sent using the Authorization header:

Authorization: Bearer token-value

JSON Web Tokens (JWTs) are a common token format. A JWT contains encoded claims and a signature that can be verified by the receiving system. A signed JWT is not automatically encrypted, so sensitive information should not be placed in its readable payload.

OAuth 2.0 is an authorization framework that allows applications to obtain limited access to resources. It is commonly used when one service needs authorized access to another service on behalf of a user.

A secure API should validate credentials, apply appropriate permissions, use HTTPS, and avoid logging secrets.

For AI/ML systems, access control can help prevent unauthorized users from consuming costly model services or accessing private prediction data.`,
          quiz: [
            {
              question: "What is authentication?",
              options: [
                "Verifying the identity of a user or client",
                "Determining the screen resolution",
                "Compressing a request body",
                "Training a machine learning model",
              ],
              answer: "Verifying the identity of a user or client",
            },
            {
              question: "What is authorization?",
              options: [
                "Determining what an identity is allowed to access",
                "Creating a JSON file",
                "Checking internet speed",
                "Converting text into images",
              ],
              answer: "Determining what an identity is allowed to access",
            },
            {
              question: "Where is a bearer token commonly sent?",
              options: [
                "Authorization header",
                "HTTP status code",
                "URL file extension",
                "Response image dimensions",
              ],
              answer: "Authorization header",
            },
            {
              question: "Is a signed JWT automatically encrypted?",
              options: [
                "No, signing does not automatically hide its payload",
                "Yes, every signed JWT is encrypted",
                "Yes, signing removes all claims",
                "No, JWTs cannot contain claims",
              ],
              answer: "No, signing does not automatically hide its payload",
            },
            {
              question: "What is OAuth 2.0 commonly used for?",
              options: [
                "Delegated authorization",
                "Image resizing",
                "Database compression",
                "Neural network optimization",
              ],
              answer: "Delegated authorization",
            },
          ],
        },
        {
          title: "Asynchronous APIs, Timeouts, and Background Tasks",
          content: `Some API operations take longer than others. A simple request may return quickly, while an AI inference request or a large file-processing operation may take more time.

Asynchronous programming allows an application to handle waiting operations without blocking the execution flow unnecessarily. In Python, async and await are used with asynchronous functions.

FastAPI supports asynchronous endpoint functions. They can be useful when the endpoint uses asynchronous network or database operations.

A timeout limits how long an application waits for a response. Without suitable timeouts, a client may wait too long for an unresponsive service.

Retries can help with temporary failures, but they should be used carefully. Repeating a request that creates a resource may create duplicates if the operation is not designed to be idempotent.

Background tasks are useful for work that does not need to finish before the immediate response is sent. Examples include sending notifications or generating reports.

Long-running ML jobs may be handled through job queues. The API can return a job identifier, and the client can check a status endpoint later.

Asynchronous execution does not automatically make CPU-heavy model inference faster. Heavy computation may need separate workers or suitable hardware.`,
          quiz: [
            {
              question: "What is one benefit of asynchronous programming?",
              options: [
                "Handling waiting operations without unnecessary blocking",
                "Automatically increasing model accuracy",
                "Removing the need for HTTP",
                "Making every CPU operation instant",
              ],
              answer: "Handling waiting operations without unnecessary blocking",
            },
            {
              question: "Which Python keywords are used for asynchronous functions?",
              options: ["async and await", "class and import", "try and except", "break and continue"],
              answer: "async and await",
            },
            {
              question: "What does a timeout control?",
              options: [
                "How long an application waits for an operation",
                "The number of model classes",
                "The size of a JSON key",
                "The number of installed libraries",
              ],
              answer: "How long an application waits for an operation",
            },
            {
              question: "Why should retries be used carefully for resource-creating requests?",
              options: [
                "They may create duplicate resources",
                "They always delete the server",
                "They disable authentication",
                "They convert POST into GET",
              ],
              answer: "They may create duplicate resources",
            },
            {
              question: "How can an API manage a long-running ML job?",
              options: [
                "Return a job identifier and provide a status endpoint",
                "Wait forever without a response",
                "Delete the input data immediately",
                "Return an unrelated HTTP status",
              ],
              answer: "Return a job identifier and provide a status endpoint",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: API Testing, Security, and Deployment",
      description: "Test, document, secure, and deploy APIs used by AI/ML applications.",
      lessons: [
        {
          title: "API Testing with Postman and Python",
          content: `API testing checks whether endpoints behave as expected. Tests should cover successful requests, invalid input, missing fields, authentication failures, and unexpected server conditions.

Postman is a tool for creating and sending HTTP requests. Developers can select an HTTP method, enter a URL, add headers, provide a request body, and inspect the response.

Python can also be used for automated API testing. The requests library sends HTTP requests, while pytest provides a testing framework.

A test should verify more than whether a response exists. It can check the status code, response structure, field values, and error messages.

FastAPI applications can be tested using its TestClient. This makes it possible to test endpoints without manually starting a public server.

For an ML API, tests should verify that valid input produces a response with the expected structure. They should also check that invalid features are rejected and that model-loading failures are handled appropriately.

Automated tests help detect regressions when API code or model-serving logic changes.`,
          quiz: [
            {
              question: "What is the purpose of API testing?",
              options: [
                "Verify that endpoints behave as expected",
                "Increase the number of API users",
                "Replace API documentation",
                "Change the server's operating system",
              ],
              answer: "Verify that endpoints behave as expected",
            },
            {
              question: "What is Postman commonly used for?",
              options: [
                "Sending and inspecting API requests",
                "Training convolutional networks",
                "Designing computer processors",
                "Editing Python interpreters",
              ],
              answer: "Sending and inspecting API requests",
            },
            {
              question: "Which Python testing framework is commonly used with API tests?",
              options: ["pytest", "Pillow", "NumPy only", "Tkinter"],
              answer: "pytest",
            },
            {
              question: "What should an API test check besides response existence?",
              options: [
                "Status code and response structure",
                "The user's desktop wallpaper",
                "The monitor refresh rate",
                "The browser's bookmark count",
              ],
              answer: "Status code and response structure",
            },
            {
              question: "What can FastAPI TestClient help test?",
              options: [
                "Application endpoints without manually starting a public server",
                "The physical condition of a network cable",
                "GPU temperature under every workload",
                "The operating system installation",
              ],
              answer: "Application endpoints without manually starting a public server",
            },
          ],
        },
        {
          title: "API Documentation and OpenAPI",
          content: `API documentation explains how developers can use an API. It describes endpoints, HTTP methods, parameters, request bodies, response formats, authentication, and possible errors.

OpenAPI is a specification for describing HTTP APIs in a machine-readable format. It helps tools understand the structure and behavior of an API.

FastAPI automatically generates an OpenAPI schema from route definitions and data models. It also provides interactive documentation through Swagger UI.

Good documentation includes example requests and responses. It should explain required fields, optional fields, accepted data types, and status codes.

For an AI/ML API, documentation should describe the expected model input features, their formats, output meaning, and any limitations.

Versioning helps developers introduce changes while reducing disruption to existing clients. A version may be included in the URL, such as /api/v1/predict.

Documentation should be updated when endpoint behavior changes. Incorrect documentation can cause integration failures even when the API itself is functioning.`,
          quiz: [
            {
              question: "What is the main purpose of API documentation?",
              options: [
                "Explain how developers can use the API",
                "Replace all API endpoints",
                "Increase model training time",
                "Store the server's private keys",
              ],
              answer: "Explain how developers can use the API",
            },
            {
              question: "What is OpenAPI?",
              options: [
                "A specification for describing HTTP APIs",
                "A Python database engine",
                "A neural network optimizer",
                "A network cable standard",
              ],
              answer: "A specification for describing HTTP APIs",
            },
            {
              question: "Which interface does FastAPI commonly provide for interactive API documentation?",
              options: ["Swagger UI", "Microsoft Paint", "File Explorer", "Task Manager"],
              answer: "Swagger UI",
            },
            {
              question: "What should ML API documentation explain?",
              options: [
                "Expected input features and prediction output",
                "Only the developer's computer model",
                "Only the server's wallpaper",
                "The private passwords of API users",
              ],
              answer: "Expected input features and prediction output",
            },
            {
              question: "What is one purpose of API versioning?",
              options: [
                "Manage changes while reducing disruption to clients",
                "Remove all old HTTP methods automatically",
                "Increase the size of every response",
                "Disable API authentication",
              ],
              answer: "Manage changes while reducing disruption to clients",
            },
          ],
        },
        {
          title: "API Security, Error Handling, and Rate Limiting",
          content: `API security protects services and the information they process. APIs should use HTTPS, validate input, enforce authentication and authorization, and restrict access to sensitive operations.

Sensitive credentials should not be committed to public repositories. Environment variables or dedicated secret-management systems can store configuration securely.

Input validation helps prevent malformed data from reaching application logic. Applications should avoid exposing stack traces, private configuration, or database details in public error responses.

Rate limiting restricts the number of requests a client can make during a period. It helps control resource usage and reduce abuse.

CORS, or Cross-Origin Resource Sharing, is a browser security mechanism that controls which origins can access certain resources. CORS configuration should allow only the origins required by the application.

Error responses should use appropriate HTTP status codes and clear messages. Internal logs can contain additional diagnostic details, but they should not expose sensitive information.

AI/ML endpoints may consume substantial computing resources. Authentication, request limits, input-size restrictions, and monitoring can help protect them from misuse and unexpected costs.`,
          quiz: [
            {
              question: "Why should APIs use HTTPS?",
              options: [
                "To protect data during transmission using TLS",
                "To automatically train machine learning models",
                "To remove the need for authorization",
                "To increase the number of database tables",
              ],
              answer: "To protect data during transmission using TLS",
            },
            {
              question: "What does rate limiting control?",
              options: [
                "The number of requests allowed during a period",
                "The number of model layers",
                "The size of the server monitor",
                "The number of programming languages installed",
              ],
              answer: "The number of requests allowed during a period",
            },
            {
              question: "What does CORS control?",
              options: [
                "Which browser origins may access certain resources",
                "How quickly a neural network learns",
                "How database rows are sorted",
                "How a GPU stores tensors",
              ],
              answer: "Which browser origins may access certain resources",
            },
            {
              question: "Why should public API error responses avoid exposing stack traces?",
              options: [
                "They may reveal internal implementation details",
                "They automatically improve response speed",
                "They make JSON invalid in every case",
                "They prevent all HTTP requests",
              ],
              answer: "They may reveal internal implementation details",
            },
            {
              question: "Why are request limits useful for ML APIs?",
              options: [
                "They help control resource usage and reduce abuse",
                "They guarantee that every prediction is correct",
                "They eliminate the need for authentication",
                "They replace model validation",
              ],
              answer: "They help control resource usage and reduce abuse",
            },
          ],
        },
        {
          title: "Final Project: Build an AI/ML Prediction API",
          content: `Build a REST API that exposes a trained machine learning model to an application.

Project goal:
Create a prediction service using Python and FastAPI. The service accepts structured input, validates it, runs model inference, and returns a JSON response.

Step 1: Prepare the model.
Train or select a small machine learning model. Save the trained model using an appropriate serialization method. Record the feature names, feature order, and preprocessing requirements.

Step 2: Create the application.
Create a FastAPI application and define a health endpoint. The health endpoint should report whether the service is running.

Step 3: Define input validation.
Create a Pydantic model that describes the required prediction fields. Validate data types and meaningful value ranges.

Step 4: Load the model.
Load the saved model when the application starts or through a carefully managed initialization process. Handle missing or incompatible model files.

Step 5: Create the prediction endpoint.
Create a POST endpoint such as /predict. Accept JSON input, validate it, apply the required preprocessing, call the model, and return the prediction.

Step 6: Test the API.
Use Swagger UI, Postman, or automated Python tests. Test valid requests, missing fields, invalid values, and model errors.

Step 7: Secure the service.
Use HTTPS in production, protect secrets, restrict access where needed, and apply rate limits.

Step 8: Document and deploy.
Document request and response examples. Deploy the service to an appropriate hosting environment and monitor its availability, response times, and failures.

The final result is a reusable model-serving API that can connect a web application, mobile application, or another software system to an AI/ML model.`,
          quiz: [
            {
              question: "What is the main goal of the final project?",
              options: [
                "Expose a trained ML model through a REST API",
                "Build a new operating system",
                "Create a computer network cable",
                "Replace Python with SQL",
              ],
              answer: "Expose a trained ML model through a REST API",
            },
            {
              question: "Which HTTP method is suitable for submitting prediction input?",
              options: ["POST", "GET only", "DELETE", "HEAD"],
              answer: "POST",
            },
            {
              question: "What is the purpose of the health endpoint?",
              options: [
                "Report whether the API service is running",
                "Return every training image",
                "Change the model's architecture",
                "Delete saved model files",
              ],
              answer: "Report whether the API service is running",
            },
            {
              question: "What should the prediction endpoint do before inference?",
              options: [
                "Validate and preprocess the input",
                "Delete the model",
                "Ignore the feature types",
                "Disable all error handling",
              ],
              answer: "Validate and preprocess the input",
            },
            {
              question: "Which tool can be used to manually test the completed FastAPI service?",
              options: ["Swagger UI", "File Explorer only", "Task Manager only", "Paint"],
              answer: "Swagger UI",
            },
          ],
        },
      ],
    },
  ],
};

export default apisAIMLCourse;

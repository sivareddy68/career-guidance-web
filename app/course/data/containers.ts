const containersCourse = {
  title: "Containers",
  description:
    "Learn containerization fundamentals, Docker images and containers, Dockerfiles, volumes, networking, registries, Docker Compose, security, orchestration concepts, Kubernetes, monitoring, and practical container deployment.",

  weeks: [
    {
      title: "Week 1: Container Fundamentals",
      description:
        "Understand what containers are, why they are useful, how they differ from virtual machines, and how Docker organizes images and containers.",

      lessons: [
        {
          title: "Lesson 1: What Containers Are and Why They Matter",
          content: `
Containers are a way of packaging an application together with the software, libraries, configuration, and dependencies it needs to run.

Normally, an application may work on one computer but fail on another because the operating system, Python version, libraries, environment variables, or other dependencies are different. Containers help solve this problem by creating a consistent runtime environment.

A container is an isolated process running on a host operating system. It contains the application and its required dependencies, while sharing the host operating system kernel.

For example, suppose you build a Python application that requires Python 3.12 and several packages. Instead of asking another developer to manually install everything, you can package the application into a container. The other developer can run the container using a compatible container runtime.

Docker is one of the most popular technologies used to create and manage containers.

Important container concepts include:

1. Image
An image is a packaged, read-only template used to create containers. It contains application code, libraries, dependencies, and configuration instructions.

2. Container
A container is a running instance of an image.

3. Container runtime
The runtime is responsible for starting and managing containers.

4. Registry
A registry stores container images so they can be shared and downloaded.

5. Dockerfile
A Dockerfile contains instructions for building an image.

Containers are useful for development because developers can use the same environment across different machines.

They are also useful in deployment. The same image can move from development to testing and production with fewer environment differences.

Containers are lightweight compared with traditional virtual machines because multiple containers can share the host operating system kernel.

A container should generally be designed around a specific application or service. For example, a web application can run in one container while a database runs in another container.

This separation makes applications easier to develop, test, deploy, scale, and maintain.

Containerization is especially important in modern cloud computing and DevOps workflows.
          `,
          quiz: [
            {
              question: "What is the main purpose of a container?",
              options: [
                "To package an application with its dependencies",
                "To replace every physical server",
                "To permanently store source code",
                "To increase monitor resolution",
              ],
              answer: "To package an application with its dependencies",
            },
            {
              question: "What is a container image?",
              options: [
                "A read-only template used to create containers",
                "A physical computer",
                "A network cable",
                "A database table",
              ],
              answer: "A read-only template used to create containers",
            },
            {
              question: "What is Docker commonly used for?",
              options: [
                "Creating and managing containers",
                "Designing electrical circuits",
                "Editing photographs",
                "Managing spreadsheets",
              ],
              answer: "Creating and managing containers",
            },
            {
              question: "Why are containers useful between development and production?",
              options: [
                "They provide a more consistent runtime environment",
                "They eliminate the need for application code",
                "They guarantee unlimited computing resources",
                "They remove all network communication",
              ],
              answer: "They provide a more consistent runtime environment",
            },
            {
              question: "What does a running container represent?",
              options: [
                "A running instance of an image",
                "A physical server",
                "A source-code editor",
                "A cloud account",
              ],
              answer: "A running instance of an image",
            },
          ],
        },

        {
          title: "Lesson 2: Containers vs Virtual Machines",
          content: `
Containers and virtual machines both provide isolation, but they work differently.

A virtual machine, or VM, virtualizes hardware. Each VM normally contains a complete guest operating system, including its own kernel.

A container does not normally contain a complete operating system kernel. Instead, containers share the host operating system kernel while keeping application processes isolated.

A simplified virtual machine architecture looks like:

Hardware
→ Host operating system
→ Hypervisor
→ Guest operating system
→ Application

A simplified container architecture looks like:

Hardware
→ Host operating system
→ Container runtime
→ Containers

Because containers share the host kernel, they generally require fewer resources and start faster than full virtual machines.

Virtual machines provide stronger operating-system-level isolation because each VM has its own guest operating system.

Containers are often preferred when many small services need to run on the same host efficiently.

Virtual machines are useful when applications require different operating systems or stronger isolation boundaries.

For example, a Windows virtual machine can run a Windows operating system on a Linux host using virtualization. A Linux container normally requires a compatible Linux kernel environment.

Containers are not automatically safer than virtual machines. Security depends on configuration, isolation, privileges, image contents, and the runtime.

Containers and VMs can also be used together. A cloud provider may run a group of containers inside virtual machines.

The choice depends on the application requirements, security needs, performance requirements, and operational environment.

A container is usually more lightweight, while a VM provides a complete virtualized machine environment.
          `,
          quiz: [
            {
              question: "What does a traditional virtual machine normally contain?",
              options: [
                "A complete guest operating system",
                "Only application source code",
                "Only a network address",
                "Only a container image",
              ],
              answer: "A complete guest operating system",
            },
            {
              question: "Why can containers start faster than virtual machines?",
              options: [
                "Containers share the host operating system kernel",
                "Containers always use more hardware",
                "Containers contain multiple guest operating systems",
                "Containers do not execute programs",
              ],
              answer: "Containers share the host operating system kernel",
            },
            {
              question: "Which technology virtualizes hardware for guest operating systems?",
              options: [
                "A hypervisor",
                "A Dockerfile",
                "A container image",
                "A registry",
              ],
              answer: "A hypervisor",
            },
            {
              question: "Which statement best describes containers?",
              options: [
                "They isolate application processes while commonly sharing the host kernel",
                "They always require a complete guest operating system",
                "They can only run on physical servers",
                "They cannot communicate over networks",
              ],
              answer:
                "They isolate application processes while commonly sharing the host kernel",
            },
            {
              question: "Can containers and virtual machines be used together?",
              options: [
                "Yes, containers can run inside virtual machines",
                "No, they are mutually exclusive",
                "Only on personal computers",
                "Only when there is no operating system",
              ],
              answer: "Yes, containers can run inside virtual machines",
            },
          ],
        },

        {
          title: "Lesson 3: Docker Architecture and Core Concepts",
          content: `
Docker uses several components that work together to build and run containers.

The Docker client is the command-line interface commonly used with commands such as docker run and docker build.

The Docker daemon is the background service responsible for managing Docker objects such as images, containers, networks, and volumes.

The Docker client communicates with the Docker daemon through Docker's API.

A Docker registry stores and distributes container images. Docker Hub is a widely used public registry.

Important Docker objects include:

Images:
Read-only templates used to create containers.

Containers:
Runnable instances created from images.

Networks:
Provide communication between containers and external systems.

Volumes:
Provide persistent storage for container data.

Docker Engine is commonly described as the technology that provides the Docker client, daemon, APIs, and container management functionality.

A typical workflow is:

1. Write application code.
2. Create a Dockerfile.
3. Build an image.
4. Run a container from the image.
5. Connect the container to networks and storage as needed.
6. Push the image to a registry if it needs to be shared.

Docker images are usually composed of layers. Each Dockerfile instruction can contribute a layer or affect the resulting image. Layering allows Docker to reuse unchanged parts of images.

For example, if dependencies have not changed, Docker may reuse cached build layers instead of rebuilding everything.

The Docker daemon can create, start, stop, inspect, and remove containers.

Understanding these core components makes Docker commands much easier to understand.
          `,
          quiz: [
            {
              question: "What is the Docker client primarily used for?",
              options: [
                "Sending commands to Docker",
                "Replacing the operating system",
                "Editing image pixels",
                "Creating physical hardware",
              ],
              answer: "Sending commands to Docker",
            },
            {
              question: "What does the Docker daemon manage?",
              options: [
                "Docker objects such as containers, images, networks, and volumes",
                "Only web browser bookmarks",
                "Only text documents",
                "Only physical cables",
              ],
              answer:
                "Docker objects such as containers, images, networks, and volumes",
            },
            {
              question: "What is a Docker registry used for?",
              options: [
                "Storing and distributing container images",
                "Running source-code editors",
                "Formatting hard drives",
                "Creating operating-system kernels",
              ],
              answer: "Storing and distributing container images",
            },
            {
              question: "Why are Docker image layers useful?",
              options: [
                "They allow reuse of unchanged image parts",
                "They prevent containers from starting",
                "They remove all application dependencies",
                "They convert containers into virtual machines",
              ],
              answer: "They allow reuse of unchanged image parts",
            },
            {
              question: "Which Docker object provides persistent storage?",
              options: [
                "Volume",
                "Image",
                "Container ID",
                "Dockerfile",
              ],
              answer: "Volume",
            },
          ],
        },

        {
          title: "Lesson 4: Images, Containers, and Container Lifecycle",
          content: `
A Docker image is the starting point for creating a container.

The image itself is generally immutable. A container created from that image has a writable layer where runtime changes can occur.

The basic lifecycle of a container is:

Created
→ Running
→ Stopped
→ Removed

A container can also be restarted after being stopped.

The docker run command creates and starts a container in one common operation.

For example:

docker run nginx

This command tells Docker to create and start a container using the nginx image. If the image is not available locally, Docker may attempt to pull it from a configured registry.

The docker ps command displays running containers.

The docker ps -a command displays running and stopped containers.

The docker stop command gracefully stops a running container.

The docker start command starts an existing stopped container.

The docker restart command restarts an existing container.

The docker rm command removes a container.

The docker images command lists local images.

The docker rmi command removes an image when it is no longer needed and is not being used by a container.

A container has an identifier and usually a human-readable name.

Container names make management easier than remembering long IDs.

The lifecycle is important because a stopped container still exists until it is removed.

Images and containers are different. Deleting a container does not necessarily delete the image from which it was created.

Similarly, deleting an image does not mean that all containers using it are automatically removed.

Understanding this difference prevents accidental deletion of resources that are still required.
          `,
          quiz: [
            {
              question: "What does docker run commonly do?",
              options: [
                "Creates and starts a container",
                "Deletes all images",
                "Stops every container",
                "Creates a physical server",
              ],
              answer: "Creates and starts a container",
            },
            {
              question: "Which command lists running containers?",
              options: [
                "docker ps",
                "docker images",
                "docker build",
                "docker volume",
              ],
              answer: "docker ps",
            },
            {
              question: "Which command also displays stopped containers?",
              options: [
                "docker ps -a",
                "docker ps -r",
                "docker list stopped",
                "docker show all-images",
              ],
              answer: "docker ps -a",
            },
            {
              question: "Which command stops a running container?",
              options: [
                "docker stop",
                "docker remove",
                "docker image-stop",
                "docker kill-image",
              ],
              answer: "docker stop",
            },
            {
              question: "What is the difference between an image and a container?",
              options: [
                "An image is a template and a container is a runnable instance",
                "An image is always a running process",
                "A container is always a registry",
                "They are exactly the same Docker object",
              ],
              answer: "An image is a template and a container is a runnable instance",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Building and Managing Containers",
      description:
        "Learn common Docker commands, build images with Dockerfiles, persist data using volumes, and connect containers using networks.",

      lessons: [
        {
          title: "Lesson 5: Docker Commands and Container Management",
          content: `
Docker provides a command-line interface for managing containers.

Some of the most important commands are:

docker pull
Downloads an image from a registry.

docker images
Lists images stored locally.

docker run
Creates and starts a container.

docker ps
Lists running containers.

docker ps -a
Lists all containers, including stopped containers.

docker stop
Stops a running container.

docker start
Starts a stopped container.

docker restart
Restarts a container.

docker rm
Removes a container.

docker logs
Displays output produced by a container.

docker exec
Runs a command inside a running container.

docker inspect
Displays detailed information about a Docker object.

For example, if a web application is running inside a container and you want to see its logs, you can use docker logs followed by the container name or ID.

The docker exec command is useful for debugging or performing administrative tasks inside a running container.

Container names can be assigned with the --name option.

Port publishing can be performed using the -p option. For example:

docker run -p 8080:80 nginx

This maps port 8080 on the host to port 80 in the container.

The left side represents the host port and the right side represents the container port.

Commands should be used carefully in production environments. Removing a container can remove its writable container layer. Important data should normally be stored in a volume or external storage.

Learning these commands provides the foundation for practical Docker administration.
          `,
          quiz: [
            {
              question: "What does docker pull do?",
              options: [
                "Downloads an image from a registry",
                "Deletes a container",
                "Stops a server",
                "Creates a volume automatically",
              ],
              answer: "Downloads an image from a registry",
            },
            {
              question: "What does docker logs help you view?",
              options: [
                "Output produced by a container",
                "The physical CPU temperature",
                "Only registry passwords",
                "The contents of every host file",
              ],
              answer: "Output produced by a container",
            },
            {
              question: "What is docker exec commonly used for?",
              options: [
                "Running a command inside a running container",
                "Deleting the Docker daemon",
                "Creating a physical machine",
                "Uploading a spreadsheet",
              ],
              answer: "Running a command inside a running container",
            },
            {
              question: "In docker run -p 8080:80 nginx, what does 8080 represent?",
              options: [
                "The host port",
                "The container image name",
                "The container ID",
                "The registry port",
              ],
              answer: "The host port",
            },
            {
              question: "Which command displays detailed information about a Docker object?",
              options: [
                "docker inspect",
                "docker explain",
                "docker details-only",
                "docker information",
              ],
              answer: "docker inspect",
            },
          ],
        },

        {
          title: "Lesson 6: Dockerfiles and Image Building",
          content: `
A Dockerfile is a text file containing instructions used to build a Docker image.

A simple Dockerfile might look like:

FROM python:3.12-slim
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]

Important Dockerfile instructions include:

FROM
Specifies the base image.

WORKDIR
Sets the working directory inside the image.

COPY
Copies files from the build context into the image.

RUN
Executes commands while building the image.

CMD
Provides the default command used when a container starts.

ENTRYPOINT
Defines the executable that should be run when the container starts.

EXPOSE
Documents the port that the application is expected to use. It does not by itself publish the port to the host.

ENV
Defines environment variables inside the image.

A Docker image can be built using:

docker build -t myapp .

The -t option assigns a name or tag to the image.

The final dot means that the current directory is used as the build context.

A Dockerfile should be organized to make builds efficient.

Dependencies that change less frequently can often be placed before application source code so Docker can reuse cached layers.

A .dockerignore file can prevent unnecessary files from being sent into the build context. For example, large local environments, Git metadata, and temporary files may not belong in an image.

Images should be kept reasonably small because smaller images generally require less storage and can be transferred more efficiently.

Use trusted base images and avoid including unnecessary packages.
          `,
          quiz: [
            {
              question: "What is the purpose of the FROM instruction?",
              options: [
                "It specifies the base image",
                "It starts a running container",
                "It deletes an image",
                "It publishes a host port",
              ],
              answer: "It specifies the base image",
            },
            {
              question: "What does COPY do in a Dockerfile?",
              options: [
                "Copies files into the image",
                "Copies a container to another server automatically",
                "Deletes application files",
                "Publishes a network port",
              ],
              answer: "Copies files into the image",
            },
            {
              question: "What is RUN used for?",
              options: [
                "Executing commands while building an image",
                "Starting a stopped container only",
                "Removing an image",
                "Opening a browser",
              ],
              answer: "Executing commands while building an image",
            },
            {
              question: "What does CMD commonly provide?",
              options: [
                "The default command for a container",
                "The Docker registry address",
                "The host operating system",
                "The image storage location",
              ],
              answer: "The default command for a container",
            },
            {
              question: "Does EXPOSE by itself publish a container port to the host?",
              options: [
                "No, it documents the intended container port",
                "Yes, it always publishes the port",
                "Yes, but only to every internet user",
                "No, because containers cannot use ports",
              ],
              answer: "No, it documents the intended container port",
            },
          ],
        },

        {
          title: "Lesson 7: Volumes and Persistent Data",
          content: `
Containers are often considered disposable. The writable layer of a container should not be treated as the primary location for important persistent data.

If a container is removed, data stored only in its writable layer can be lost.

Docker volumes provide a way to store persistent data outside the container's writable layer.

A volume is managed by Docker and can be attached to one or more containers as appropriate.

For example:

docker volume create appdata

creates a volume named appdata.

A volume can be mounted when starting a container:

docker run -v appdata:/data myapp

Here appdata is the volume and /data is the path inside the container.

Volumes are useful for databases, uploaded files, application data, and other information that should survive container replacement.

Another method is a bind mount, where a specific host directory is mounted into a container.

Volumes are generally preferred when Docker should manage the storage lifecycle.

Bind mounts are useful when a container needs direct access to a particular host path, especially during development.

Important storage concepts include:

Persistent data:
Data that should survive container replacement.

Ephemeral data:
Temporary data that can be discarded when the container is removed.

Volume:
Docker-managed persistent storage.

Bind mount:
A host path mounted inside a container.

For production databases, Docker volumes can be useful, but storage design should also consider backups, availability, encryption, performance, and disaster recovery.

Never assume that a container itself is a reliable backup mechanism.
          `,
          quiz: [
            {
              question: "Why are Docker volumes useful?",
              options: [
                "They provide persistent storage outside a container's writable layer",
                "They replace the Docker daemon",
                "They prevent all network communication",
                "They create operating-system kernels",
              ],
              answer:
                "They provide persistent storage outside a container's writable layer",
            },
            {
              question: "What does docker volume create appdata do?",
              options: [
                "Creates a Docker volume named appdata",
                "Creates a container named appdata",
                "Downloads an image called appdata",
                "Deletes an existing volume",
              ],
              answer: "Creates a Docker volume named appdata",
            },
            {
              question: "In -v appdata:/data, what is /data?",
              options: [
                "The mount path inside the container",
                "The registry name",
                "The host operating system",
                "The Docker image tag",
              ],
              answer: "The mount path inside the container",
            },
            {
              question: "What is ephemeral data?",
              options: [
                "Temporary data that can be discarded",
                "Data that must always be backed up",
                "A Docker image",
                "A permanent cloud account",
              ],
              answer: "Temporary data that can be discarded",
            },
            {
              question: "Which storage method uses a specific host filesystem path?",
              options: [
                "Bind mount",
                "Image layer",
                "Registry",
                "Container ID",
              ],
              answer: "Bind mount",
            },
          ],
        },

        {
          title: "Lesson 8: Container Networking",
          content: `
Containers frequently need to communicate with other containers, the host, or external systems.

Docker provides networking features that allow containers to communicate.

The default bridge network is commonly used for basic container networking.

A user-defined bridge network provides better control and allows containers on the same network to communicate using container names through Docker's internal DNS.

For example:

docker network create app-network

A container can then be started with:

docker run --network app-network --name backend myapp

Another container on the same network can communicate with the backend container using the name backend.

Container ports and host ports are different concepts.

Suppose an application listens on port 5000 inside a container. It can be published to port 8080 on the host using:

docker run -p 8080:5000 myapp

The application still listens on port 5000 inside the container.

The host can access it through port 8080.

Docker networks help separate application components. For example, a frontend and backend can communicate on an application network while the database is placed on a private network accessible only by required services.

Common Docker network types include bridge, host, none, and overlay.

Bridge networking is common for containers on one Docker host.

Host networking removes much of the network isolation and lets a container use the host network namespace.

None disables normal networking for the container.

Overlay networking is commonly associated with communication across multiple Docker hosts in distributed environments.

Good network design limits unnecessary connectivity.
          `,
          quiz: [
            {
              question: "What is the purpose of a Docker network?",
              options: [
                "To allow containers and other systems to communicate",
                "To store Docker images",
                "To compile source code",
                "To replace application databases",
              ],
              answer: "To allow containers and other systems to communicate",
            },
            {
              question: "Which network is commonly used for basic Docker container networking?",
              options: [
                "Bridge",
                "Serial",
                "Bluetooth-only",
                "Spreadsheet",
              ],
              answer: "Bridge",
            },
            {
              question: "What does docker network create app-network do?",
              options: [
                "Creates a Docker network named app-network",
                "Creates a container named app-network",
                "Builds an image named app-network",
                "Deletes all networks",
              ],
              answer: "Creates a Docker network named app-network",
            },
            {
              question: "In -p 8080:5000, which port is the container port?",
              options: [
                "5000",
                "8080",
                "Both are container ports",
                "Neither is a port",
              ],
              answer: "5000",
            },
            {
              question: "What is a benefit of a user-defined bridge network?",
              options: [
                "Containers can communicate using useful container names",
                "It removes all network isolation",
                "It prevents containers from communicating",
                "It automatically creates a virtual machine",
              ],
              answer: "Containers can communicate using useful container names",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Registries, Compose, and Security",
      description:
        "Learn how images are distributed, how multi-container applications are managed with Compose, and how to secure container workloads.",

      lessons: [
        {
          title: "Lesson 9: Container Registries and Image Distribution",
          content: `
A container registry is a service that stores and distributes container images.

Registries are useful when an image needs to move between development, testing, and production environments.

Docker Hub is a popular public registry. Organizations may also use private registries such as cloud-provider registries or self-hosted registry systems.

An image is normally identified using a repository name and tag.

For example:

mycompany/webapp:1.0

Here mycompany/webapp identifies the repository and 1.0 is the tag.

The latest tag is commonly used as a default tag, but production deployments should often use explicit version tags or immutable image references so that deployments are predictable.

The docker pull command downloads an image.

The docker push command uploads an image to a registry.

Before pushing to a private registry, authentication is normally required.

A typical workflow is:

1. Build the image.
2. Assign an appropriate tag.
3. Authenticate to the registry.
4. Push the image.
5. Deployment systems pull the image.

Image distribution is a critical part of CI/CD pipelines.

Registries can also provide image scanning, access control, signing, vulnerability information, and audit features depending on the platform.

A good image strategy uses meaningful versioning.

For example, versions such as 1.2.0 make it easier to identify releases.

Avoid relying blindly on latest in production because the tag may point to a different image later.

Private images should be protected with appropriate authentication and permissions.
          `,
          quiz: [
            {
              question: "What is a container registry?",
              options: [
                "A service for storing and distributing container images",
                "A physical CPU",
                "A Dockerfile instruction",
                "A local text editor",
              ],
              answer: "A service for storing and distributing container images",
            },
            {
              question: "What does docker push do?",
              options: [
                "Uploads an image to a registry",
                "Stops a container",
                "Deletes a volume",
                "Creates a network",
              ],
              answer: "Uploads an image to a registry",
            },
            {
              question: "What does the tag 1.0 commonly represent in mycompany/webapp:1.0?",
              options: [
                "An image version tag",
                "A container port",
                "A host address",
                "A volume name",
              ],
              answer: "An image version tag",
            },
            {
              question: "Why can explicit image versions be useful in production?",
              options: [
                "They make deployments more predictable",
                "They automatically encrypt every container",
                "They remove the need for registries",
                "They prevent all application updates",
              ],
              answer: "They make deployments more predictable",
            },
            {
              question: "What normally happens before pushing to a private registry?",
              options: [
                "The user authenticates to the registry",
                "The container is converted into a VM",
                "All local files are deleted",
                "The operating system is replaced",
              ],
              answer: "The user authenticates to the registry",
            },
          ],
        },

        {
          title: "Lesson 10: Docker Compose and Multi-Container Applications",
          content: `
Real applications often contain multiple services.

For example, a web application may include:

Frontend
Backend API
Database
Cache

Running each service manually can become difficult.

Docker Compose provides a way to define and manage multiple containers as an application.

A Compose configuration is usually stored in a YAML file such as compose.yaml.

A simplified example might define:

services:
  web:
    image: nginx
  api:
    image: myapi
  database:
    image: postgres

Compose can create the required network and start the services together.

Services can communicate using service names.

For example, if a service is named database, the API can connect to the database using database as the hostname on the Compose network.

Environment variables can be provided through the Compose configuration.

Volumes can be declared for persistent data.

Ports can be published when external access is required.

Common commands include:

docker compose up

Starts the application services.

docker compose up -d

Starts services in detached mode.

docker compose down

Stops and removes the Compose application resources created by the command.

docker compose logs

Displays service logs.

Compose is particularly useful for local development, testing, and small deployments.

Compose does not replace a full orchestration platform for large distributed production environments, but it is excellent for defining a reproducible multi-container environment.

A Compose file also acts as documentation because it describes how application components are connected.
          `,
          quiz: [
            {
              question: "What problem does Docker Compose help solve?",
              options: [
                "Managing multiple related containers as an application",
                "Replacing every operating system",
                "Editing Docker images manually",
                "Creating physical network cables",
              ],
              answer: "Managing multiple related containers as an application",
            },
            {
              question: "What file format is commonly used for Compose configuration?",
              options: [
                "YAML",
                "JPEG",
                "MP3",
                "EXE",
              ],
              answer: "YAML",
            },
            {
              question: "What does docker compose up do?",
              options: [
                "Starts the services defined by the Compose application",
                "Deletes every Docker image",
                "Stops the Docker daemon",
                "Creates a physical server",
              ],
              answer: "Starts the services defined by the Compose application",
            },
            {
              question: "How can one Compose service commonly reach another service?",
              options: [
                "Using the other service's name as a hostname",
                "Using the monitor's screen size",
                "Using a random image filename",
                "Using the host's keyboard layout",
              ],
              answer: "Using the other service's name as a hostname",
            },
            {
              question: "What does docker compose down generally do?",
              options: [
                "Stops and removes Compose application resources",
                "Uploads images to a registry",
                "Builds a new operating system",
                "Deletes the Docker installation",
              ],
              answer: "Stops and removes Compose application resources",
            },
          ],
        },

        {
          title: "Lesson 11: Container Security and Best Practices",
          content: `
Container security starts with the image and continues through deployment and runtime.

A container image can contain vulnerable libraries or unnecessary software. Therefore, images should be built from trusted and maintained base images.

One important practice is to avoid running applications as root when root privileges are unnecessary.

A Dockerfile can create a non-root user and run the application using that user.

Images should contain only the packages and files needed by the application.

Smaller images can reduce the attack surface and make image distribution more efficient.

Dependencies should be kept updated and scanned for known vulnerabilities.

Secrets such as passwords, API keys, and database credentials should not be hard-coded into Dockerfiles or source code.

Security also involves limiting container capabilities and permissions.

Containers should receive only the access they actually need.

The principle of least privilege means giving a process the minimum permissions necessary to perform its job.

Images should come from trusted sources.

Production images should ideally be built through a controlled process and scanned before deployment.

A .dockerignore file can prevent unnecessary files from entering the build context.

Sensitive files such as local configuration files should not accidentally be copied into images.

Network access should also be restricted. A service should not be able to communicate with every other service unless that communication is required.

Security is not a single feature. It is a combination of safe images, secure configuration, limited permissions, network controls, monitoring, and regular updates.

Container security should be considered throughout the application lifecycle.
          `,
          quiz: [
            {
              question: "What does the principle of least privilege mean?",
              options: [
                "Give only the permissions required for the task",
                "Give every container administrator access",
                "Disable all application security",
                "Run every process as root",
              ],
              answer: "Give only the permissions required for the task",
            },
            {
              question: "Why should unnecessary packages be removed from container images?",
              options: [
                "To reduce attack surface and image size",
                "To prevent the application from running",
                "To disable all networking",
                "To turn the image into a VM",
              ],
              answer: "To reduce attack surface and image size",
            },
            {
              question: "Where should production passwords generally NOT be hard-coded?",
              options: [
                "Dockerfiles and application source code",
                "A properly managed secret store",
                "A secure deployment system",
                "A protected secret-management service",
              ],
              answer: "Dockerfiles and application source code",
            },
            {
              question: "Why are trusted base images important?",
              options: [
                "They reduce the risk of using compromised or poorly maintained software",
                "They guarantee zero vulnerabilities forever",
                "They remove the need for authentication",
                "They prevent containers from using CPU",
              ],
              answer:
                "They reduce the risk of using compromised or poorly maintained software",
            },
            {
              question: "What is one reason to avoid running an application as root?",
              options: [
                "It reduces the impact of a possible compromise",
                "It makes containers larger",
                "It prevents all application updates",
                "It disables Docker networking",
              ],
              answer: "It reduces the impact of a possible compromise",
            },
          ],
        },

        {
          title: "Lesson 12: Environment Variables, Secrets, and Configuration",
          content: `
Applications often need configuration values such as database URLs, API endpoints, ports, feature flags, and credentials.

Hard-coding these values into application code makes deployments difficult and can expose sensitive information.

Environment variables provide one way to supply configuration at runtime.

For example, an application might read:

DATABASE_URL

from the environment.

Docker can pass environment variables using the -e option.

For example:

docker run -e APP_MODE=production myapp

A Compose file can also define environment variables.

Configuration and secrets should be treated differently.

A normal configuration value might be a public API endpoint or application mode.

A secret might be a password, API key, private token, or encryption key.

Secrets should be stored using appropriate secret-management mechanisms rather than being committed to source control.

Examples of secret-management systems include cloud secret managers and orchestrator-specific secret mechanisms.

Environment variables are convenient, but simply putting a secret into an environment variable does not automatically make it secure in every environment. Access permissions, logs, debugging tools, and process inspection must also be considered.

Configuration should be externalized so that the same image can be used in different environments.

For example, the same application image can run in development with one database URL and production with another.

This follows the idea of separating configuration from application code.

Never commit .env files containing real production credentials into a public repository.

Use placeholders or safe example configuration files for documentation.

Good configuration management improves portability, security, and deployment consistency.
          `,
          quiz: [
            {
              question: "Why should application configuration often be externalized?",
              options: [
                "The same image can be used with different environments",
                "It makes source code impossible to execute",
                "It removes the need for application settings",
                "It prevents containers from communicating",
              ],
              answer: "The same image can be used with different environments",
            },
            {
              question: "Which is an example of a secret?",
              options: [
                "A database password",
                "A public application name",
                "A public documentation URL",
                "A container port number",
              ],
              answer: "A database password",
            },
            {
              question: "What does docker run -e APP_MODE=production myapp provide?",
              options: [
                "An environment variable named APP_MODE",
                "A new image tag named production",
                "A new Docker network",
                "A persistent volume",
              ],
              answer: "An environment variable named APP_MODE",
            },
            {
              question: "Why should real production credentials not be committed to source control?",
              options: [
                "They could be exposed to unauthorized people",
                "They make containers start faster",
                "They prevent YAML files from working",
                "They automatically delete images",
              ],
              answer: "They could be exposed to unauthorized people",
            },
            {
              question: "What is the difference between configuration and secrets?",
              options: [
                "Secrets contain sensitive values that require stronger protection",
                "Configuration is always encrypted while secrets are never protected",
                "Secrets are always public",
                "There is never any difference between them",
              ],
              answer:
                "Secrets contain sensitive values that require stronger protection",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Orchestration and Practical Deployment",
      description:
        "Understand orchestration, Kubernetes fundamentals, monitoring and health checks, and apply container knowledge in a practical deployment project.",

      lessons: [
        {
          title: "Lesson 13: Container Orchestration Concepts",
          content: `
Running one container manually is simple. Managing hundreds or thousands of containers across multiple machines is much more difficult.

Container orchestration platforms automate many operational tasks.

Common orchestration responsibilities include:

Scheduling containers onto available machines.
Restarting failed containers.
Scaling services.
Service discovery.
Load balancing.
Rolling updates.
Configuration management.
Health monitoring.

Kubernetes is one of the most widely used container orchestration platforms.

In a Kubernetes environment, the desired state of an application is declared. Kubernetes controllers continuously work to make the actual state match the desired state.

For example, if a deployment specifies three replicas and one container fails, Kubernetes can create another instance to restore the desired number.

Orchestration is useful because modern applications often contain many independent services.

A scheduler determines where workloads should run based on available resources and constraints.

Service discovery allows applications to find other services without depending on changing container IP addresses.

Load balancing can distribute requests among multiple application instances.

Rolling updates allow new versions to be introduced gradually.

Orchestration does not remove the need for good application design. Developers still need to design stateless services, handle failures, manage data correctly, and define appropriate resource limits.

A container platform should be selected based on the size and complexity of the workload.

For small local projects, Docker Compose may be sufficient.

For large distributed applications, Kubernetes or another orchestration platform may be appropriate.
          `,
          quiz: [
            {
              question: "What is the main purpose of container orchestration?",
              options: [
                "Automating management of containers across infrastructure",
                "Replacing application source code",
                "Editing container images manually",
                "Creating physical CPUs",
              ],
              answer: "Automating management of containers across infrastructure",
            },
            {
              question: "Which platform is widely used for container orchestration?",
              options: [
                "Kubernetes",
                "Photoshop",
                "Excel",
                "Git",
              ],
              answer: "Kubernetes",
            },
            {
              question: "What can an orchestrator do when a container fails?",
              options: [
                "Restart or replace the failed workload according to its desired state",
                "Delete the entire cloud account",
                "Disable every network",
                "Remove all application source code",
              ],
              answer:
                "Restart or replace the failed workload according to its desired state",
            },
            {
              question: "What is service discovery used for?",
              options: [
                "Helping services find and communicate with other services",
                "Building Docker images",
                "Editing configuration files",
                "Compressing source code",
              ],
              answer:
                "Helping services find and communicate with other services",
            },
            {
              question: "What is a rolling update?",
              options: [
                "Gradually replacing old application instances with a new version",
                "Deleting every application instance at once",
                "Updating only the host operating system",
                "Copying a Dockerfile into a registry",
              ],
              answer:
                "Gradually replacing old application instances with a new version",
            },
          ],
        },

        {
          title: "Lesson 14: Kubernetes Fundamentals",
          content: `
Kubernetes is a container orchestration platform designed to manage containerized workloads.

A Kubernetes cluster contains a control plane and worker nodes.

The control plane manages the desired state of the cluster.

Worker nodes run application workloads.

A Pod is the smallest deployable unit in Kubernetes. A Pod can contain one or more containers that share networking and storage resources.

A Deployment manages a set of replicated Pods and provides a mechanism for updates and rollbacks.

A Service provides a stable network endpoint for accessing a set of Pods.

A ConfigMap can store non-sensitive configuration data.

A Secret is designed for sensitive configuration values, although proper access control and secret-management practices are still necessary.

A Namespace provides a logical separation within a Kubernetes cluster.

A common application structure is:

Deployment
→ Pods
→ Containers

Service
→ Provides access to Pods

Kubernetes resources are commonly described using YAML manifests.

For example, a Deployment can specify:

The application image.
Number of replicas.
Container ports.
Environment variables.
Resource requests and limits.

Kubernetes continuously compares actual cluster state with the declared desired state.

If a Deployment requires three replicas and one Pod disappears, the controller attempts to create another Pod.

A Service can route traffic to healthy matching Pods.

Kubernetes is powerful but has a significant learning curve. Understanding containers, networking, Linux, YAML, and basic cloud concepts makes Kubernetes easier to learn.
          `,
          quiz: [
            {
              question: "What is the smallest deployable unit in Kubernetes?",
              options: [
                "Pod",
                "Cluster",
                "Registry",
                "Dockerfile",
              ],
              answer: "Pod",
            },
            {
              question: "What does a Kubernetes Deployment manage?",
              options: [
                "Replicated application Pods and their updates",
                "Physical network cables",
                "Source-code repositories",
                "Only database passwords",
              ],
              answer: "Replicated application Pods and their updates",
            },
            {
              question: "What does a Kubernetes Service provide?",
              options: [
                "A stable network endpoint for accessing Pods",
                "A Docker image build environment",
                "A source-code editor",
                "A physical server",
              ],
              answer: "A stable network endpoint for accessing Pods",
            },
            {
              question: "What is a ConfigMap primarily intended to store?",
              options: [
                "Non-sensitive configuration data",
                "Encrypted private keys only",
                "Container images",
                "Physical hardware",
              ],
              answer: "Non-sensitive configuration data",
            },
            {
              question: "What is a Kubernetes worker node responsible for?",
              options: [
                "Running application workloads",
                "Only storing Git repositories",
                "Replacing every control-plane function",
                "Creating Docker Hub accounts",
              ],
              answer: "Running application workloads",
            },
          ],
        },

        {
          title: "Lesson 15: Monitoring, Logging, Health Checks, and Deployment",
          content: `
Containerized applications need monitoring just like traditional applications.

Important signals include:

CPU usage
Memory usage
Network traffic
Request rate
Error rate
Response latency
Container restarts

Logs provide information about what an application is doing.

A containerized application should normally write application logs to standard output and standard error so the container platform can collect them.

Docker provides docker logs for viewing container logs.

Health checks help determine whether an application is functioning correctly.

A health check may verify that an HTTP endpoint responds successfully.

A container being alive does not necessarily mean the application inside it is healthy.

For example, the process may still exist while the application is unable to connect to its database.

Kubernetes provides readiness and liveness concepts.

A readiness check indicates whether an application is ready to receive traffic.

A liveness check helps determine whether an application should be restarted.

Monitoring should also track resource usage and service-level metrics.

Before deploying a containerized application, it is useful to verify:

The image builds successfully.
The container starts.
Required ports are configured.
Environment variables are available.
Persistent data is correctly mounted.
The application responds to health checks.
Logs are available.
Security controls are applied.

Deployment strategies can include rolling updates, blue-green deployments, and canary releases.

A rolling update gradually replaces old instances.

A blue-green deployment maintains separate old and new environments and switches traffic between them.

A canary deployment sends a small portion of traffic to the new version before increasing it.

Good monitoring makes failures easier to detect and troubleshoot.
          `,
          quiz: [
            {
              question: "Why are health checks useful?",
              options: [
                "They help determine whether an application is functioning correctly",
                "They build Docker images",
                "They create source-code repositories",
                "They replace application logs",
              ],
              answer:
                "They help determine whether an application is functioning correctly",
            },
            {
              question: "What does a readiness check indicate?",
              options: [
                "Whether an application is ready to receive traffic",
                "Whether an image has been uploaded",
                "Whether a server has a keyboard",
                "Whether a Dockerfile exists",
              ],
              answer: "Whether an application is ready to receive traffic",
            },
            {
              question: "Which metric is useful for detecting application performance problems?",
              options: [
                "Response latency",
                "Monitor brightness",
                "Keyboard language",
                "File icon size",
              ],
              answer: "Response latency",
            },
            {
              question: "What is a canary deployment?",
              options: [
                "Sending a small portion of traffic to a new version first",
                "Deleting the old version immediately",
                "Running only one container forever",
                "Building an image without dependencies",
              ],
              answer:
                "Sending a small portion of traffic to a new version first",
            },
            {
              question: "Where should containerized applications commonly write application logs?",
              options: [
                "Standard output and standard error",
                "Only inside the Dockerfile",
                "Only into image metadata",
                "Only into the container name",
              ],
              answer: "Standard output and standard error",
            },
          ],
        },

        {
          title: "Lesson 16: Final Project - Containerize and Run a Full-Stack Application",
          content: `
The final project combines the concepts learned throughout the course.

Project goal:

Containerize a simple full-stack application consisting of:

Frontend
Backend API
Database

A practical example could be a student task management application.

The frontend displays tasks.

The backend provides API endpoints such as:

GET /tasks
POST /tasks
DELETE /tasks/{id}

The database stores task information.

Step 1: Prepare the backend.

Create a backend Dockerfile using a suitable base image.

Set the working directory.

Copy dependency files.

Install dependencies.

Copy application source code.

Define the startup command.

Step 2: Prepare the frontend.

Create a separate Dockerfile for the frontend.

Build the frontend application.

Serve the resulting application using an appropriate web server.

Step 3: Configure the database.

Use a database container and attach a persistent volume.

The database should not rely only on the container writable layer.

Step 4: Create a Compose file.

Define frontend, backend, and database services.

Create appropriate networks.

Provide required environment variables.

Attach the database volume.

Publish only the ports that need external access.

Step 5: Build and start.

Use:

docker compose build

Then:

docker compose up

Check running services using:

docker compose ps

View logs using:

docker compose logs

Step 6: Test communication.

Verify that the frontend can reach the backend.

Verify that the backend can reach the database.

Verify that data remains available after restarting containers.

Step 7: Improve security.

Do not hard-code real passwords.

Use appropriate environment variables or secret-management mechanisms.

Run applications as non-root users where practical.

Use trusted base images.

Keep dependencies updated.

Step 8: Add health checks and monitoring.

Verify that the backend responds correctly.

Check logs.

Monitor CPU and memory usage.

Step 9: Create a release image.

Tag the application image with a meaningful version.

Push it to a registry if required.

The project demonstrates the complete container workflow:

Application
→ Dockerfile
→ Image
→ Registry
→ Container
→ Network
→ Volume
→ Compose
→ Monitoring
→ Deployment

After completing this project, you should be able to understand and build basic containerized applications and have a strong foundation for learning Kubernetes and cloud-native deployment.
          `,
          quiz: [
            {
              question: "Which three components are used in the final full-stack project?",
              options: [
                "Frontend, backend, and database",
                "Only frontend and spreadsheet",
                "Only database and image editor",
                "Only Dockerfile and registry",
              ],
              answer: "Frontend, backend, and database",
            },
            {
              question: "Why should the database use persistent storage?",
              options: [
                "To preserve database data when the container is replaced",
                "To make the database image larger",
                "To prevent all database connections",
                "To remove the need for backups",
              ],
              answer:
                "To preserve database data when the container is replaced",
            },
            {
              question: "Which command starts the services defined by a Compose application?",
              options: [
                "docker compose up",
                "docker compose delete",
                "docker compose image",
                "docker compose registry",
              ],
              answer: "docker compose up",
            },
            {
              question: "What should you avoid putting directly into application source code?",
              options: [
                "Real production passwords and API keys",
                "Function definitions",
                "Application routes",
                "Normal configuration structure",
              ],
              answer: "Real production passwords and API keys",
            },
            {
              question: "What is the main workflow demonstrated by the final project?",
              options: [
                "Build an image, run containers, connect services, persist data, and monitor the application",
                "Create a spreadsheet and convert it into a virtual machine",
                "Install an operating system inside every application function",
                "Run all application components without any networking",
              ],
              answer:
                "Build an image, run containers, connect services, persist data, and monitor the application",
            },
          ],
        },
      ],
    },
  ],
};

export default containersCourse;
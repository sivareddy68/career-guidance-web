
export const cloudCourse = {
  skill: "Cloud Computing",
  title: "Cloud Computing Fundamentals",
  description:
    "Learn cloud computing concepts, service models, deployment models, storage, networking, security, and practical cloud architecture.",
  duration: "1 Month",
  weeks: [
    {
      week: 1,
      title: "Cloud Computing Fundamentals",
      description:
        "Understand cloud computing, its benefits, service models, and deployment types.",
      lessons: [
        {
          title: "Introduction to Cloud Computing",
          explanation:
            "Cloud computing provides computing resources such as servers, storage, databases, networking, and software over a network, usually the internet. Instead of purchasing and maintaining all physical infrastructure yourself, you can use resources offered by cloud providers. Common benefits include scalability, flexible resource usage, and reduced upfront hardware costs.",
          example:
            "A college can host its student portal on a cloud server instead of maintaining a physical server on campus.",
          exercise:
            "Write down five services that could be hosted in the cloud and explain why.",
          quiz: {
            question: "What is cloud computing?",
            options: [
              "Delivering computing resources over a network",
              "Repairing computer hardware",
              "Designing only printed documents",
              "A type of keyboard"
            ],
            answer: 0
          }
        },
        {
          title: "Benefits of Cloud Computing",
          explanation:
            "Cloud platforms allow resources to scale as demand changes. Many services use pay-as-you-go pricing, although costs depend on usage and configuration. Cloud providers operate infrastructure, while customers remain responsible for certain settings, applications, and data. Availability, backup, and disaster recovery options can improve reliability when configured correctly.",
          example:
            "An online shopping application can increase its server capacity during a busy festival sale.",
          exercise:
            "List three benefits and one possible disadvantage of using cloud services.",
          quiz: {
            question: "What does scalability mean in cloud computing?",
            options: [
              "Adjusting resources as demand changes",
              "Changing a computer's physical color",
              "Removing all user accounts",
              "Disabling the internet"
            ],
            answer: 0
          }
        },
        {
          title: "Cloud Service Models",
          explanation:
            "Infrastructure as a Service (IaaS) provides resources such as virtual machines and networks. Platform as a Service (PaaS) provides a managed environment for developing and deploying applications. Software as a Service (SaaS) provides ready-to-use software through a browser or application. Each model shifts different management responsibilities to the provider.",
          example:
            "A virtual machine is an IaaS example, a managed application platform is a PaaS example, and web-based email is a SaaS example.",
          exercise:
            "Choose one real-world example for IaaS, PaaS, and SaaS.",
          quiz: {
            question: "Which model provides ready-to-use software to end users?",
            options: ["SaaS", "IaaS", "PaaS", "LAN"],
            answer: 0
          }
        },
        {
          title: "Cloud Deployment Models",
          explanation:
            "A public cloud offers services over provider-managed infrastructure to multiple customers. A private cloud is dedicated to one organization. A hybrid cloud combines private infrastructure with public cloud services. A community cloud serves organizations with shared requirements. The right choice depends on cost, control, security, and compliance needs.",
          example:
            "A company may keep sensitive internal systems on private infrastructure and host its public website in a public cloud.",
          exercise:
            "Compare public, private, and hybrid clouds using one practical example for each.",
          quiz: {
            question: "Which deployment model combines public and private cloud environments?",
            options: ["Hybrid cloud", "Public cloud only", "Standalone desktop", "Offline storage only"],
            answer: 0
          }
        }
      ],
      assignment:
        "Prepare a one-page comparison of IaaS, PaaS, and SaaS, including one example and typical responsibility for each."
    },
    {
      week: 2,
      title: "Cloud Infrastructure and Storage",
      description:
        "Explore virtual machines, containers, storage, and cloud networking basics.",
      lessons: [
        {
          title: "Virtual Machines",
          explanation:
            "A virtual machine (VM) is a software-based computer that runs its own operating system using virtualized hardware. A hypervisor manages virtual machines on physical hosts. VMs can isolate workloads and make it easier to provision or resize computing environments, subject to the provider's available configurations.",
          example:
            "A developer can create a Linux virtual machine to test an application without buying another computer.",
          exercise:
            "Draw a diagram showing one physical server running two virtual machines.",
          quiz: {
            question: "What is a virtual machine?",
            options: [
              "A software-based computer environment",
              "A physical network cable",
              "A printed circuit board",
              "A database table"
            ],
            answer: 0
          }
        },
        {
          title: "Containers and Their Uses",
          explanation:
            "Containers package an application and its dependencies into an isolated environment. They generally share the host operating system kernel, unlike traditional VMs that run separate guest operating systems. Containers can help make application deployment more consistent across development and production environments.",
          example:
            "A team can package a web application and its dependencies into a container image for repeatable deployment.",
          exercise:
            "Explain two differences between containers and virtual machines.",
          quiz: {
            question: "What do containers generally share with the host?",
            options: [
              "The operating system kernel",
              "Every user's password",
              "The same physical monitor",
              "All application data automatically"
            ],
            answer: 0
          }
        },
        {
          title: "Cloud Storage",
          explanation:
            "Cloud storage keeps data on infrastructure managed by a cloud provider. Object storage stores data as objects and is useful for files, images, backups, and logs. Block storage provides disk-like volumes for virtual machines. File storage provides shared file-system access. Data protection depends on permissions, encryption, backup, and retention settings.",
          example:
            "A photo-sharing application can store uploaded images in object storage.",
          exercise:
            "Compare object, block, and file storage and describe one use for each.",
          quiz: {
            question: "Which storage type is commonly used for large collections of uploaded images?",
            options: [
              "Object storage",
              "CPU cache only",
              "Keyboard storage",
              "Screen storage"
            ],
            answer: 0
          }
        },
        {
          title: "Cloud Networking Basics",
          explanation:
            "Cloud networking connects virtual machines, applications, and other services. Virtual networks, subnets, routes, firewalls, and load balancers help control communication. Public-facing services need carefully configured access rules, while private services should be restricted to authorized networks and systems.",
          example:
            "A public load balancer can receive website traffic and forward requests to application servers in a private subnet.",
          exercise:
            "Draw a basic cloud network containing a public website entry point and a private application server.",
          quiz: {
            question: "What is a subnet?",
            options: [
              "A smaller network segment within a larger network",
              "A programming loop",
              "A cloud billing invoice",
              "A type of computer display"
            ],
            answer: 0
          }
        }
      ],
      assignment:
        "Design a basic cloud architecture containing a virtual machine, storage service, virtual network, and controlled network access."
    },
    {
      week: 3,
      title: "Cloud Security and Operations",
      description:
        "Learn identity management, monitoring, backups, and cloud cost awareness.",
      lessons: [
        {
          title: "Identity and Access Management",
          explanation:
            "Identity and Access Management (IAM) controls which users and services can access cloud resources. Roles and policies grant specific permissions. The principle of least privilege means giving each identity only the access required for its task. Strong authentication and regular permission reviews help reduce unauthorized access.",
          example:
            "A student developer may receive permission to view a test database but not delete production data.",
          exercise:
            "Create a table listing three cloud roles and the minimum permissions each role needs.",
          quiz: {
            question: "What does least privilege mean?",
            options: [
              "Granting only the permissions needed",
              "Giving every user administrator access",
              "Sharing passwords with everyone",
              "Disabling all access controls"
            ],
            answer: 0
          }
        },
        {
          title: "Cloud Security Fundamentals",
          explanation:
            "Cloud security involves protecting accounts, networks, applications, and data. Common practices include multifactor authentication, encryption, secure configuration, patching, secret management, and audit logging. Cloud security follows a shared-responsibility model: the provider secures parts of the underlying service, while customers secure their workloads and settings.",
          example:
            "An application can keep database credentials in a managed secrets service instead of storing them directly in source code.",
          exercise:
            "List five security controls you would use for a small cloud-hosted application.",
          quiz: {
            question: "Why should passwords and API keys not be committed to source code?",
            options: [
              "They could be exposed to unauthorized people",
              "They automatically improve performance",
              "They make files smaller",
              "They replace encryption"
            ],
            answer: 0
          }
        },
        {
          title: "Monitoring and Logging",
          explanation:
            "Monitoring tracks metrics such as CPU usage, memory use, latency, and request counts. Logs record events produced by systems and applications. Alerts can notify operators when a defined condition occurs. Useful monitoring helps detect failures, investigate errors, and understand performance trends.",
          example:
            "An alert can notify a developer when a website's error rate remains above a defined threshold.",
          exercise:
            "Choose three metrics for a web application and explain why each matters.",
          quiz: {
            question: "What is the main purpose of application logs?",
            options: [
              "Record events that help investigate behavior and errors",
              "Physically cool the processor",
              "Replace all backups",
              "Create network cables"
            ],
            answer: 0
          }
        },
        {
          title: "Backup and Disaster Recovery",
          explanation:
            "Backups create recoverable copies of data, while disaster recovery plans describe how systems can be restored after major failures. Important concepts include recovery point objective (RPO), which concerns acceptable data loss, and recovery time objective (RTO), which concerns acceptable restoration time. Backups should be protected and restoration should be tested.",
          example:
            "A student project can use scheduled database backups and periodically test whether a backup can be restored.",
          exercise:
            "Write a simple backup and recovery plan for a student information application.",
          quiz: {
            question: "What does RTO describe?",
            options: [
              "The target time for restoring a service",
              "The number of user accounts",
              "The size of a monitor",
              "The speed of a keyboard"
            ],
            answer: 0
          }
        }
      ],
      assignment:
        "Prepare a security and operations checklist covering IAM, authentication, monitoring, backups, and recovery testing."
    },
    {
      week: 4,
      title: "Cloud Architecture and Mini Project",
      description:
        "Understand serverless services, cost management, architecture, and a final design project.",
      lessons: [
        {
          title: "Serverless Computing",
          explanation:
            "Serverless computing lets developers run code or use managed services without directly managing the underlying servers. The provider handles much of the infrastructure management. Some services run code in response to events, and billing may depend on requests or execution. Serverless does not mean that servers do not exist.",
          example:
            "A function can resize an image automatically when a new image is uploaded to storage.",
          exercise:
            "Describe one repetitive task that could be automated using an event-triggered cloud function.",
          quiz: {
            question: "What does serverless computing generally reduce?",
            options: [
              "The need to manage underlying server infrastructure",
              "The need for application logic",
              "The need to protect data",
              "The need to test software"
            ],
            answer: 0
          }
        },
        {
          title: "Cloud Cost Management",
          explanation:
            "Cloud resources can create ongoing costs based on compute time, storage, requests, and network transfer. Cost management involves setting budgets, reviewing usage, choosing suitable resource sizes, and removing unused resources. Free tiers have conditions and limits, so always check current pricing before deploying.",
          example:
            "A developer can stop a test virtual machine when it is no longer needed and review storage charges.",
          exercise:
            "Create a checklist of five actions that could prevent unexpected cloud costs.",
          quiz: {
            question: "Which practice can help prevent unexpected cloud bills?",
            options: [
              "Setting budgets and reviewing usage",
              "Leaving every test resource running",
              "Ignoring billing notifications",
              "Creating duplicate resources without checking"
            ],
            answer: 0
          }
        },
        {
          title: "Designing a Cloud Application",
          explanation:
            "Cloud architecture describes how application components work together. A typical web application may use a front end, application service, database, object storage, identity controls, monitoring, and backups. Good design considers reliability, security, performance, cost, and maintainability. Not every project needs every component.",
          example:
            "A student portfolio can use a web front end, an application API, a database, and access controls.",
          exercise:
            "Draw a cloud architecture for a student career guidance application and label each component.",
          quiz: {
            question: "Which concern should be considered when designing cloud architecture?",
            options: [
              "Security, reliability, performance, and cost",
              "Only the website's color",
              "Only the keyboard layout",
              "Only the file names"
            ],
            answer: 0
          }
        },
        {
          title: "Cloud Computing Mini Project",
          explanation:
            "In this project, design a cloud-hosted student portfolio or career guidance application. Identify the application components, select appropriate storage, define access permissions, and describe how you would monitor the service and control costs. You can prepare the design without purchasing cloud services.",
          example:
            "A project report can include an architecture diagram, a service selection table, security rules, backup plan, and estimated cost categories.",
          exercise:
            "Create a cloud architecture report for a student portfolio app. Include components, data flow, security, monitoring, backups, and cost controls.",
          quiz: {
            question: "What should a cloud mini-project demonstrate?",
            options: [
              "A reasoned design covering services, security, and operations",
              "Only a list of cloud provider names",
              "Only a decorative website banner",
              "A collection of passwords"
            ],
            answer: 0
          }
        }
      ],
      assignment:
        "Final mini-project: design a secure, monitored, and cost-aware cloud architecture for a student portfolio or career guidance application. Submit an architecture diagram and a short report explaining your choices."
    }
  ]
};

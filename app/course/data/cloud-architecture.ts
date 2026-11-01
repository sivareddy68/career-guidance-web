
const cloudArchitectureCourse = {
  title: "Cloud Architecture",
  description:
    "Learn cloud computing fundamentals, service and deployment models, cloud infrastructure, virtualization, storage, networking, security, scalability, monitoring, and cloud architecture design.",
  weeks: [
    {
      title: "Week 1: Cloud Computing Fundamentals",
      description:
        "Understand cloud computing, its benefits, deployment models, service models, and essential infrastructure.",
      lessons: [
        {
          title: "1. Introduction to Cloud Computing",
          content: `Cloud computing is the delivery of computing resources over a network, usually the internet. Instead of purchasing and maintaining every server, an organization can use computing resources provided by a cloud provider.

Cloud resources include:
- Virtual machines and processing power.
- Storage for files and databases.
- Networking services.
- Application hosting.
- Security and identity services.
- Data analytics and artificial intelligence services.

For example, when you store photographs in an online storage service, the files may be stored on remote cloud infrastructure rather than only on your personal computer.

Important characteristics:

1. On-demand self-service: Users can provision resources when required.
2. Broad network access: Services can be accessed through supported network connections.
3. Resource pooling: Providers share infrastructure among multiple customers while maintaining logical separation.
4. Rapid elasticity: Resources can scale up or down according to demand.
5. Measured service: Usage can be monitored and billed according to the service model.

Cloud computing helps organizations reduce the need to operate physical infrastructure themselves. However, cloud services still require planning, configuration, security, and cost management.`,
          quiz: [
            {
              question: "What is cloud computing?",
              options: [
                "Delivery of computing resources over a network",
                "A method of repairing computer hardware",
                "A programming language",
                "A type of computer monitor"
              ],
              answer: "Delivery of computing resources over a network"
            },
            {
              question: "Which is an example of a cloud resource?",
              options: ["Virtual machine", "Keyboard key", "Monitor stand", "Mouse pad"],
              answer: "Virtual machine"
            },
            {
              question: "What does on-demand self-service mean?",
              options: [
                "Users can provision resources when needed",
                "Users must purchase physical servers every time",
                "Cloud resources cannot be changed",
                "Only administrators can access websites"
              ],
              answer: "Users can provision resources when needed"
            },
            {
              question: "What is rapid elasticity?",
              options: [
                "Resources can scale according to demand",
                "Data is always stored on one computer",
                "A network cable becomes longer",
                "A server cannot change capacity"
              ],
              answer: "Resources can scale according to demand"
            },
            {
              question: "What does measured service help track?",
              options: [
                "Resource usage",
                "Keyboard color",
                "Monitor size",
                "Computer weight"
              ],
              answer: "Resource usage"
            }
          ]
        },
        {
          title: "2. Benefits and Challenges of Cloud Computing",
          content: `Cloud computing provides several benefits, but organizations must also understand its limitations.

Benefits:

1. Lower initial investment:
Organizations can avoid purchasing large amounts of hardware before starting a project.

2. Scalability:
Resources can be increased or reduced as application demand changes.

3. Availability:
Cloud providers offer infrastructure and services designed to support availability. The actual availability depends on configuration and service agreements.

4. Global access:
Applications can be hosted in regions closer to users.

5. Managed services:
Providers can manage certain infrastructure components, allowing teams to focus on applications.

6. Backup and recovery:
Cloud storage and recovery services can help protect data when configured properly.

Challenges:

- Unexpected usage charges.
- Dependence on internet connectivity.
- Security misconfiguration.
- Data privacy and regulatory requirements.
- Vendor lock-in.
- Service outages.
- Migration complexity.

Cost management is important. A virtual machine left running when it is not required can continue generating charges.

A good cloud strategy evaluates performance, security, reliability, cost, and business requirements before selecting services.`,
          quiz: [
            {
              question: "Which cloud benefit allows resources to change with demand?",
              options: ["Scalability", "Vendor lock-in", "Downtime", "Manual maintenance"],
              answer: "Scalability"
            },
            {
              question: "What is vendor lock-in?",
              options: [
                "Difficulty moving away from a provider's services",
                "Automatic deletion of all data",
                "A method of increasing internet speed",
                "A physical server installation"
              ],
              answer: "Difficulty moving away from a provider's services"
            },
            {
              question: "Which situation can create unnecessary cloud costs?",
              options: [
                "Leaving unused virtual machines running",
                "Turning off resources that are not needed",
                "Reviewing usage reports",
                "Setting budget alerts"
              ],
              answer: "Leaving unused virtual machines running"
            },
            {
              question: "Why are cloud regions useful?",
              options: [
                "They allow services to be deployed in different geographical areas",
                "They remove the need for applications",
                "They replace all network protocols",
                "They guarantee zero downtime"
              ],
              answer: "They allow services to be deployed in different geographical areas"
            },
            {
              question: "Which factor should be considered before choosing a cloud service?",
              options: [
                "Security and business requirements",
                "Only the color of the provider's logo",
                "Keyboard size",
                "Monitor brightness"
              ],
              answer: "Security and business requirements"
            }
          ]
        },
        {
          title: "3. Cloud Deployment Models",
          content: `A cloud deployment model describes how cloud infrastructure is owned, managed, and made available.

1. Public Cloud:
Infrastructure is provided by a cloud provider and shared among multiple customers through logically separated environments.

Examples include services from AWS, Microsoft Azure, and Google Cloud.

2. Private Cloud:
Cloud infrastructure is dedicated to one organization. It may be operated by the organization or a service provider.

3. Hybrid Cloud:
Combines private infrastructure with public cloud services. Organizations can keep certain workloads in private environments while using public cloud resources for other workloads.

4. Community Cloud:
Infrastructure is shared by organizations with common requirements, such as regulatory or operational needs.

Choosing a deployment model depends on:
- Data sensitivity.
- Security requirements.
- Budget.
- Control requirements.
- Existing infrastructure.
- Compliance obligations.

Example:
A company may store sensitive internal records in a private environment while hosting its public website in a public cloud. This is a possible hybrid architecture.

No single deployment model is suitable for every organization.`,
          quiz: [
            {
              question: "Which deployment model provides infrastructure to multiple customers through logically separated environments?",
              options: ["Public cloud", "Private cloud", "Local desktop", "Standalone computer"],
              answer: "Public cloud"
            },
            {
              question: "Which model dedicates cloud infrastructure to one organization?",
              options: ["Private cloud", "Public cloud", "Community website", "Open internet"],
              answer: "Private cloud"
            },
            {
              question: "Which model combines private infrastructure and public cloud services?",
              options: ["Hybrid cloud", "Public-only cloud", "Standalone hosting", "Offline computing"],
              answer: "Hybrid cloud"
            },
            {
              question: "Which deployment model can serve organizations with shared requirements?",
              options: ["Community cloud", "Personal computer", "Standalone server", "Desktop application"],
              answer: "Community cloud"
            },
            {
              question: "Which factor influences the choice of a deployment model?",
              options: [
                "Data sensitivity",
                "Mouse shape",
                "Monitor color",
                "Keyboard language only"
              ],
              answer: "Data sensitivity"
            }
          ]
        },
        {
          title: "4. Cloud Service Models: IaaS, PaaS, and SaaS",
          content: `Cloud service models describe how much of the computing environment is managed by the cloud provider.

1. IaaS - Infrastructure as a Service:
Provides fundamental computing resources such as virtual machines, storage, and networking.

The customer generally manages the operating system, applications, and much of the configuration above the infrastructure layer.

2. PaaS - Platform as a Service:
Provides a managed platform for developing and running applications.

The provider manages much of the underlying infrastructure and platform components. Developers focus more on application code and data.

3. SaaS - Software as a Service:
Provides ready-to-use software over a network. The provider manages the application and its underlying infrastructure.

Examples:
- IaaS: Renting a virtual machine.
- PaaS: Deploying an application to a managed application platform.
- SaaS: Using an online email or document application.

Responsibility changes between models:
IaaS provides more infrastructure control but requires more customer management.
PaaS reduces infrastructure administration.
SaaS generally requires the least infrastructure management by the customer.

Even with managed services, customers remain responsible for appropriate access control and data handling.`,
          quiz: [
            {
              question: "What does IaaS stand for?",
              options: [
                "Infrastructure as a Service",
                "Internet as a System",
                "Integration as a Software",
                "Information as a Server"
              ],
              answer: "Infrastructure as a Service"
            },
            {
              question: "Which service model provides a managed application development platform?",
              options: ["PaaS", "IaaS", "SaaS", "LAN"],
              answer: "PaaS"
            },
            {
              question: "Which model commonly provides ready-to-use online software?",
              options: ["SaaS", "IaaS", "PaaS", "Bare metal only"],
              answer: "SaaS"
            },
            {
              question: "Which model generally gives customers more control over the operating system?",
              options: ["IaaS", "SaaS", "Fully managed SaaS", "Email service"],
              answer: "IaaS"
            },
            {
              question: "What is a major responsibility customers retain across cloud models?",
              options: [
                "Appropriate data handling and access control",
                "Manufacturing the provider's servers",
                "Building the provider's data center",
                "Maintaining every physical network cable"
              ],
              answer: "Appropriate data handling and access control"
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: Cloud Infrastructure and Architecture",
      description:
        "Explore virtualization, compute, storage, cloud networking, regions, availability zones, and infrastructure design.",
      lessons: [
        {
          title: "5. Virtualization and Virtual Machines",
          content: `Virtualization allows multiple virtual computing environments to run on shared physical hardware.

A virtual machine (VM) behaves like a separate computer. It has virtual CPU, memory, storage, and network interfaces.

Hypervisor:
A hypervisor creates and manages virtual machines.

Type 1 hypervisor:
Runs directly on physical hardware.

Type 2 hypervisor:
Runs as software on top of a host operating system.

Important VM components:
- Virtual CPU: Processing capacity allocated to the VM.
- Virtual memory: RAM allocated to the VM.
- Virtual disk: Storage assigned to the VM.
- Virtual network interface: Provides network connectivity.
- Guest operating system: OS installed inside the VM.

Benefits:
- Better use of physical hardware.
- Isolation between virtual environments.
- Easier testing and deployment.
- Flexible resource allocation.
- Support for different operating systems.

A cloud provider can use virtualization to offer computing instances to customers without giving each customer a separate physical server.

VMs still require security updates, resource monitoring, and correct configuration.`,
          quiz: [
            {
              question: "What is virtualization?",
              options: [
                "Creating virtual computing environments on shared hardware",
                "Replacing all software with cables",
                "Increasing physical monitor size",
                "Converting a website into a document"
              ],
              answer: "Creating virtual computing environments on shared hardware"
            },
            {
              question: "What manages the creation of virtual machines?",
              options: ["Hypervisor", "Text editor", "Web browser", "Printer driver"],
              answer: "Hypervisor"
            },
            {
              question: "Which hypervisor runs directly on physical hardware?",
              options: ["Type 1", "Type 2", "Type 3", "Type 4"],
              answer: "Type 1"
            },
            {
              question: "Which is a component of a virtual machine?",
              options: ["Virtual CPU", "Physical keyboard layout", "Website favicon", "Email signature"],
              answer: "Virtual CPU"
            },
            {
              question: "What is one benefit of virtualization?",
              options: [
                "Better utilization of physical hardware",
                "Guaranteed unlimited memory",
                "Removal of all security requirements",
                "Elimination of network configuration"
              ],
              answer: "Better utilization of physical hardware"
            }
          ]
        },
        {
          title: "6. Cloud Compute Services",
          content: `Cloud compute services provide processing resources for running applications and workloads.

Common compute options include:

1. Virtual Machines:
Provide configurable virtual servers with operating systems, CPU, memory, and storage.

2. Containers:
Package applications and their dependencies into portable units. Containers share the host operating system kernel.

3. Serverless Functions:
Run small units of code in response to events without requiring the customer to manage the underlying server infrastructure.

4. Managed Application Platforms:
Provide an environment for deploying applications while the provider manages many infrastructure components.

5. Batch Computing:
Runs large groups of jobs, often for data processing, simulations, or scheduled workloads.

Choosing a compute service depends on:
- Workload type.
- Processing requirements.
- Runtime duration.
- Scaling needs.
- Management effort.
- Cost.

For example, a long-running application may use virtual machines or containers. An event-driven task may be suitable for a serverless function.

Cloud architecture often combines multiple compute services to meet different application requirements.`,
          quiz: [
            {
              question: "What do cloud compute services provide?",
              options: [
                "Processing resources for workloads",
                "Only physical printing services",
                "Only email addresses",
                "Monitor display settings"
              ],
              answer: "Processing resources for workloads"
            },
            {
              question: "Which compute option provides a configurable virtual server?",
              options: ["Virtual machine", "DNS record", "Firewall rule", "Object bucket"],
              answer: "Virtual machine"
            },
            {
              question: "Which service runs code in response to events without customer-managed server infrastructure?",
              options: ["Serverless functions", "Physical desktop", "Network switch", "Local spreadsheet"],
              answer: "Serverless functions"
            },
            {
              question: "What is batch computing commonly used for?",
              options: [
                "Running groups of processing jobs",
                "Changing a website font",
                "Connecting a keyboard",
                "Editing a monitor setting"
              ],
              answer: "Running groups of processing jobs"
            },
            {
              question: "What should influence the choice of a compute service?",
              options: [
                "Workload and scaling requirements",
                "Only the device wallpaper",
                "The developer's keyboard color",
                "The office chair design"
              ],
              answer: "Workload and scaling requirements"
            }
          ]
        },
        {
          title: "7. Cloud Storage and Databases",
          content: `Cloud storage services allow applications to store and retrieve information using provider-managed infrastructure.

Common storage types:

1. Object Storage:
Stores data as objects with associated metadata and identifiers. It is useful for photographs, videos, backups, and documents.

2. Block Storage:
Provides storage volumes that can be attached to virtual machines. It is commonly used for operating systems and application data.

3. File Storage:
Provides shared file systems that multiple systems can access using supported protocols.

Cloud databases:

Relational databases:
Store structured information in tables with rows and columns. SQL is used to query and manage relational data.

NoSQL databases:
Support data models such as documents, key-value pairs, graphs, and wide-column structures.

Important database considerations:
- Data consistency.
- Backup and recovery.
- Performance.
- Replication.
- Availability.
- Access control.

Storage selection depends on access patterns, data structure, performance needs, durability, and cost.

For example, an image-sharing application may store image files in object storage and keep user information and image metadata in a database.`,
          quiz: [
            {
              question: "Which storage type is suitable for photographs and videos?",
              options: ["Object storage", "CPU cache", "Register storage", "Keyboard memory"],
              answer: "Object storage"
            },
            {
              question: "Which storage type can provide volumes for virtual machines?",
              options: ["Block storage", "DNS storage", "Email storage", "Display storage"],
              answer: "Block storage"
            },
            {
              question: "How does a relational database organize data?",
              options: [
                "In tables containing rows and columns",
                "Only as audio files",
                "Only as network cables",
                "As monitor pixels"
              ],
              answer: "In tables containing rows and columns"
            },
            {
              question: "Which is an example of a NoSQL data model?",
              options: ["Document", "Relational table only", "HTML heading", "Ethernet frame"],
              answer: "Document"
            },
            {
              question: "What should be considered when selecting cloud storage?",
              options: [
                "Access patterns and performance needs",
                "Only the user's screen brightness",
                "The color of the server room",
                "The keyboard manufacturer"
              ],
              answer: "Access patterns and performance needs"
            }
          ]
        },
        {
          title: "8. Cloud Regions, Availability Zones, and Networking",
          content: `Cloud infrastructure is organized geographically to support deployment, connectivity, and availability.

Region:
A geographical area where a cloud provider operates infrastructure.

Availability Zone:
An isolated location or group of data centers within a region. Providers design zones to reduce the impact of certain failures.

Virtual Private Cloud (VPC) or Virtual Network:
A logically isolated network environment in which customers deploy cloud resources.

Subnet:
A smaller network segment within a virtual network.

Route Table:
Defines where network traffic should be forwarded.

Internet Gateway:
Provides a path between a virtual network and the public internet when configured.

NAT Gateway:
Allows resources in private subnets to initiate supported outbound connections without directly accepting unsolicited inbound connections through that gateway.

Security Groups and Network ACLs:
Apply network traffic rules at supported resource or subnet boundaries.

Example architecture:
- Public subnet: Contains internet-facing components such as a load balancer.
- Private subnet: Contains application servers or databases that should not be directly accessible from the public internet.

When selecting regions and zones, consider latency, availability, service support, data residency, and cost.`,
          quiz: [
            {
              question: "What is a cloud region?",
              options: [
                "A geographical area containing provider infrastructure",
                "A single application password",
                "A type of programming variable",
                "A physical keyboard connection"
              ],
              answer: "A geographical area containing provider infrastructure"
            },
            {
              question: "What is an availability zone designed to provide?",
              options: [
                "Infrastructure isolation within a region",
                "A replacement for every database",
                "Unlimited internet bandwidth",
                "Automatic application development"
              ],
              answer: "Infrastructure isolation within a region"
            },
            {
              question: "What does a virtual private cloud provide?",
              options: [
                "A logically isolated network environment",
                "A physical office building",
                "A programming language",
                "A type of spreadsheet"
              ],
              answer: "A logically isolated network environment"
            },
            {
              question: "Where are internet-facing components commonly placed?",
              options: ["Public subnet", "Private database subnet only", "Offline storage", "Local clipboard"],
              answer: "Public subnet"
            },
            {
              question: "What is an important factor when selecting a cloud region?",
              options: [
                "Latency and data residency requirements",
                "The color of the cloud dashboard",
                "The size of a keyboard",
                "The desktop background"
              ],
              answer: "Latency and data residency requirements"
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: Cloud Security, Reliability, and Scalability",
      description:
        "Learn identity management, shared responsibility, encryption, backups, high availability, and scaling strategies.",
      lessons: [
        {
          title: "9. Cloud Security and Shared Responsibility",
          content: `Cloud security protects cloud infrastructure, applications, identities, and data.

Cloud providers and customers share security responsibilities, but the exact division depends on the service model.

Provider responsibilities commonly include:
- Physical data center security.
- Physical server maintenance.
- Core infrastructure protection.
- Management of provider-operated services.

Customer responsibilities may include:
- Identity and access management.
- Application security.
- Data classification.
- Secure configuration.
- User permissions.
- Workload updates, depending on the service.

This is called the shared responsibility model.

Important security principles:

Least privilege:
Give each user or service only the permissions needed for its work.

Defense in depth:
Use multiple layers of security instead of relying on one control.

Secure defaults:
Avoid unnecessary public access and insecure default configurations.

Regular updates:
Apply supported security patches.

Logging:
Record important activities to help investigate problems.

For example, a customer using a virtual machine service may be responsible for configuring its operating system firewall and applying operating system updates.

Cloud security requires continuous review because applications, users, and infrastructure configurations change over time.`,
          quiz: [
            {
              question: "What does the shared responsibility model describe?",
              options: [
                "Security duties divided between provider and customer",
                "A method of sharing passwords publicly",
                "A cloud storage file format",
                "A network topology"
              ],
              answer: "Security duties divided between provider and customer"
            },
            {
              question: "What does least privilege mean?",
              options: [
                "Granting only the permissions required",
                "Giving every user administrator access",
                "Disabling all security controls",
                "Sharing credentials between teams"
              ],
              answer: "Granting only the permissions required"
            },
            {
              question: "Which is commonly a cloud provider responsibility?",
              options: [
                "Physical data center security",
                "The customer's application passwords",
                "Every customer's data classification",
                "Every customer's business logic"
              ],
              answer: "Physical data center security"
            },
            {
              question: "What is defense in depth?",
              options: [
                "Using multiple layers of security controls",
                "Using one password for every service",
                "Removing network segmentation",
                "Disabling security logs"
              ],
              answer: "Using multiple layers of security controls"
            },
            {
              question: "Why are security patches important?",
              options: [
                "They address known software vulnerabilities and issues",
                "They increase screen size",
                "They remove the need for backups",
                "They replace the application database"
              ],
              answer: "They address known software vulnerabilities and issues"
            }
          ]
        },
        {
          title: "10. Identity and Access Management",
          content: `Identity and Access Management (IAM) controls who can access cloud resources and what actions they can perform.

Important IAM components:

Identity:
Represents a user, application, service, or other entity that needs access.

Authentication:
Verifies an identity. Passwords, security keys, and multi-factor authentication are examples.

Authorization:
Determines which actions an authenticated identity is allowed to perform.

Roles:
Group permissions for a particular job or function.

Policies:
Define allowed or denied actions on resources.

Multi-factor authentication (MFA):
Requires more than one type of authentication evidence.

Service identities:
Allow applications and automated workloads to access resources without relying on a person's credentials.

Best practices:
- Use individual accounts.
- Enable MFA where supported.
- Avoid sharing administrator accounts.
- Grant only necessary permissions.
- Review unused accounts and permissions.
- Use temporary credentials where possible.
- Protect access keys and secrets.

Example:
A developer may be allowed to deploy an application but not change billing settings. An administrator may have broader permissions.

IAM reduces the risk of unauthorized access and accidental changes.`,
          quiz: [
            {
              question: "What does IAM stand for?",
              options: [
                "Identity and Access Management",
                "Internet Application Machine",
                "Internal Address Mapping",
                "Information Access Monitor"
              ],
              answer: "Identity and Access Management"
            },
            {
              question: "What is authentication?",
              options: [
                "Verifying an identity",
                "Choosing a storage region",
                "Compressing a database",
                "Creating a network cable"
              ],
              answer: "Verifying an identity"
            },
            {
              question: "What is authorization?",
              options: [
                "Determining permitted actions",
                "Checking monitor resolution",
                "Assigning physical server locations",
                "Transferring files without permissions"
              ],
              answer: "Determining permitted actions"
            },
            {
              question: "What does MFA require?",
              options: [
                "More than one type of authentication evidence",
                "Only a public username",
                "A single shared password",
                "A new operating system"
              ],
              answer: "More than one type of authentication evidence"
            },
            {
              question: "Which is an IAM best practice?",
              options: [
                "Review permissions regularly",
                "Share administrator credentials",
                "Give every user all permissions",
                "Publish access keys in source code"
              ],
              answer: "Review permissions regularly"
            }
          ]
        },
        {
          title: "11. Encryption, Backups, and Disaster Recovery",
          content: `Cloud data protection involves encryption, backups, and recovery planning.

Encryption at rest:
Protects stored data, such as files, disks, and databases.

Encryption in transit:
Protects information while it moves across networks. TLS is commonly used to protect network communication.

Encryption keys:
Control encryption and decryption. Key management systems help organizations create, protect, rotate, and audit keys.

Backups:
Copies of data that can be used to restore information after accidental deletion, corruption, or other incidents.

Snapshots:
Point-in-time representations of supported storage resources.

Disaster Recovery (DR):
A planned approach to restoring systems and data after a major disruption.

Important recovery measures:

RPO - Recovery Point Objective:
The maximum acceptable amount of data loss measured in time.

RTO - Recovery Time Objective:
The target time within which a service should be restored.

Example:
If a system has an RPO of one hour, its recovery plan aims to limit data loss to approximately one hour of changes.

If its RTO is four hours, the target is to restore service within four hours.

A backup is useful only when it can be restored successfully. Organizations should test recovery procedures and protect backup copies from unauthorized changes.`,
          quiz: [
            {
              question: "What does encryption at rest protect?",
              options: [
                "Stored data",
                "Only moving network packets",
                "Physical monitor settings",
                "Keyboard input layout"
              ],
              answer: "Stored data"
            },
            {
              question: "What does TLS commonly protect?",
              options: [
                "Data transmitted across a network",
                "The physical size of a server",
                "The color of a website",
                "The arrangement of desktop icons"
              ],
              answer: "Data transmitted across a network"
            },
            {
              question: "What does RPO represent?",
              options: [
                "Maximum acceptable data loss measured in time",
                "The time required to install a keyboard",
                "The number of cloud regions",
                "The storage capacity of a virtual machine"
              ],
              answer: "Maximum acceptable data loss measured in time"
            },
            {
              question: "What does RTO represent?",
              options: [
                "Target time to restore a service",
                "Maximum number of users in a database",
                "Amount of network storage",
                "A type of encryption algorithm"
              ],
              answer: "Target time to restore a service"
            },
            {
              question: "Why should backup restoration be tested?",
              options: [
                "To verify that data can actually be recovered",
                "To increase the number of passwords",
                "To eliminate all cloud charges",
                "To replace the application source code"
              ],
              answer: "To verify that data can actually be recovered"
            }
          ]
        },
        {
          title: "12. High Availability and Scalability",
          content: `High availability and scalability help cloud applications remain useful as workloads and traffic change.

High Availability:
Designing systems to remain operational despite certain failures.

Redundancy:
Providing additional components or paths so that a single failure does not necessarily stop the service.

Load Balancer:
Distributes incoming requests across multiple application instances.

Horizontal Scaling:
Adds or removes instances to change total capacity.

Vertical Scaling:
Increases or decreases the resources of an individual instance, such as CPU or memory.

Auto Scaling:
Automatically adjusts the number of instances according to configured conditions.

Fault Tolerance:
The ability of a system to continue operating despite certain component failures.

Important design practices:
- Deploy across multiple availability zones where appropriate.
- Avoid single points of failure.
- Monitor application health.
- Use health checks.
- Keep backups.
- Test failure and recovery procedures.

Example:
An online shopping application may run several application instances behind a load balancer. If one instance becomes unhealthy, the load balancer can stop sending new requests to it.

High availability requires thoughtful design. Simply hosting an application in the cloud does not guarantee that it will remain available.`,
          quiz: [
            {
              question: "What is high availability?",
              options: [
                "Designing systems to remain operational during certain failures",
                "Increasing the size of a monitor",
                "Storing every file on one device",
                "Disabling system monitoring"
              ],
              answer: "Designing systems to remain operational during certain failures"
            },
            {
              question: "What does a load balancer do?",
              options: [
                "Distributes requests across application instances",
                "Encrypts every database automatically",
                "Creates source code",
                "Assigns email passwords"
              ],
              answer: "Distributes requests across application instances"
            },
            {
              question: "What is horizontal scaling?",
              options: [
                "Adding or removing instances",
                "Increasing the RAM of one instance only",
                "Changing the display orientation",
                "Replacing the application language"
              ],
              answer: "Adding or removing instances"
            },
            {
              question: "What is vertical scaling?",
              options: [
                "Changing resources of an individual instance",
                "Adding more geographical regions only",
                "Creating more user accounts",
                "Changing DNS record names"
              ],
              answer: "Changing resources of an individual instance"
            },
            {
              question: "What is a single point of failure?",
              options: [
                "A component whose failure can interrupt the whole system",
                "A backup stored in multiple locations",
                "A successful health check",
                "A monitoring dashboard"
              ],
              answer: "A component whose failure can interrupt the whole system"
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: Cloud Operations and Practical Architecture",
      description:
        "Learn monitoring, cost optimization, infrastructure as code, architecture patterns, and build a complete cloud design.",
      lessons: [
        {
          title: "13. Cloud Monitoring and Logging",
          content: `Cloud monitoring helps teams understand the health, performance, and usage of cloud applications and infrastructure.

Monitoring:
Collects measurements about resources and services.

Metrics:
Numerical measurements collected over time.

Examples:
- CPU utilization.
- Memory usage.
- Network throughput.
- Request count.
- Response time.
- Error rate.
- Storage consumption.

Logs:
Records of events generated by applications, operating systems, and services.

Traces:
Follow a request as it travels through multiple services. Distributed tracing helps identify where delays or failures occur.

Alerts:
Notifications triggered when monitored conditions meet defined rules.

Example:
A monitoring system may generate an alert when CPU utilization remains above a configured threshold for a period of time.

Good monitoring practices:
- Monitor application and infrastructure health.
- Collect useful logs.
- Use meaningful alert thresholds.
- Avoid unnecessary alert noise.
- Protect log data.
- Review incidents and improve alerts.

Observability commonly combines metrics, logs, and traces to help teams understand system behavior.

Monitoring is not just about collecting data. Teams must use the information to identify issues and improve reliability.`,
          quiz: [
            {
              question: "What does cloud monitoring help measure?",
              options: [
                "Health and performance of cloud resources",
                "Only keyboard speed",
                "Monitor screen dimensions",
                "The color of application icons"
              ],
              answer: "Health and performance of cloud resources"
            },
            {
              question: "Which is an example of a metric?",
              options: [
                "CPU utilization",
                "A paragraph in a report",
                "A user's profile photograph",
                "A website's logo"
              ],
              answer: "CPU utilization"
            },
            {
              question: "What are logs?",
              options: [
                "Records of events generated by systems",
                "Physical server racks",
                "Network cables",
                "Database table colors"
              ],
              answer: "Records of events generated by systems"
            },
            {
              question: "What does distributed tracing follow?",
              options: [
                "A request across multiple services",
                "A physical cable through an office",
                "The user's keyboard movements",
                "A monitor's display settings"
              ],
              answer: "A request across multiple services"
            },
            {
              question: "What is the purpose of an alert?",
              options: [
                "Notify teams when defined conditions occur",
                "Automatically write application code",
                "Replace the database",
                "Change the cloud region"
              ],
              answer: "Notify teams when defined conditions occur"
            }
          ]
        },
        {
          title: "14. Cloud Cost Optimization",
          content: `Cloud cost optimization means using cloud resources efficiently while meeting performance, reliability, and security requirements.

Common sources of cloud costs include:
- Compute instances.
- Storage capacity and operations.
- Network data transfer.
- Managed databases.
- Monitoring and logging.
- Additional service features.

Useful optimization methods:

1. Right-sizing:
Choose compute and storage resources that match actual workload requirements.

2. Remove unused resources:
Identify and delete resources that are no longer needed, after confirming that they are safe to remove.

3. Scheduling:
Stop non-production resources outside working hours when appropriate.

4. Storage lifecycle policies:
Move older or less frequently accessed data to suitable storage classes when supported.

5. Budgets and alerts:
Set spending limits and notifications to identify unexpected usage.

6. Cost allocation:
Use tags, labels, or accounts to understand which teams or applications generate costs.

7. Review data transfer:
Unnecessary transfers between regions or services may increase costs.

Cost optimization should not reduce required security or reliability. A cheaper architecture is not useful if it cannot meet the application's requirements.

Regular reviews help organizations identify waste and plan their cloud spending.`,
          quiz: [
            {
              question: "What is cloud cost optimization?",
              options: [
                "Using cloud resources efficiently while meeting requirements",
                "Deleting all application data",
                "Disabling every security service",
                "Increasing every virtual machine size"
              ],
              answer: "Using cloud resources efficiently while meeting requirements"
            },
            {
              question: "What is right-sizing?",
              options: [
                "Matching resource capacity to workload needs",
                "Making every server as large as possible",
                "Changing the shape of a monitor",
                "Removing all monitoring tools"
              ],
              answer: "Matching resource capacity to workload needs"
            },
            {
              question: "Why are cloud budgets useful?",
              options: [
                "They help monitor spending against planned limits",
                "They automatically guarantee zero cost",
                "They replace application databases",
                "They prevent all network failures"
              ],
              answer: "They help monitor spending against planned limits"
            },
            {
              question: "What can storage lifecycle policies help manage?",
              options: [
                "Movement of data between storage classes",
                "User keyboard shortcuts",
                "Network cable colors",
                "Application font sizes"
              ],
              answer: "Movement of data between storage classes"
            },
            {
              question: "Which practice helps identify unused cloud resources?",
              options: [
                "Regular resource reviews",
                "Ignoring usage reports",
                "Disabling billing alerts",
                "Increasing all resource sizes"
              ],
              answer: "Regular resource reviews"
            }
          ]
        },
        {
          title: "15. Infrastructure as Code and Cloud Architecture Patterns",
          content: `Infrastructure as Code (IaC) is the practice of defining and managing infrastructure through machine-readable configuration files.

Instead of manually creating every resource through a dashboard, teams can describe the desired infrastructure in code.

Benefits of IaC:
- Repeatable deployments.
- Version control.
- Easier review of infrastructure changes.
- Consistent environments.
- Automation.
- Reduced manual configuration errors.

Examples of IaC tools include Terraform, AWS CloudFormation, and Azure Bicep.

Common cloud architecture patterns:

Three-tier architecture:
Separates an application into presentation, application logic, and data layers.

Microservices:
Divides an application into smaller services that can be developed and deployed independently.

Event-driven architecture:
Uses events to trigger communication or processing between components.

Serverless architecture:
Uses managed services and functions without requiring customers to manage underlying server infrastructure.

API-based architecture:
Allows applications and services to communicate through defined interfaces.

A good architecture considers:
- Business requirements.
- Security.
- Availability.
- Performance.
- Maintainability.
- Cost.
- Scalability.

IaC and architecture patterns help teams build systems that are easier to reproduce, review, and maintain.`,
          quiz: [
            {
              question: "What does Infrastructure as Code mean?",
              options: [
                "Managing infrastructure through machine-readable configuration",
                "Writing code only for mobile screens",
                "Storing passwords in public documents",
                "Manually connecting every network cable"
              ],
              answer: "Managing infrastructure through machine-readable configuration"
            },
            {
              question: "Which is an example of an IaC tool?",
              options: ["Terraform", "Notepad", "Paint", "Calculator"],
              answer: "Terraform"
            },
            {
              question: "What are the common layers in a three-tier architecture?",
              options: [
                "Presentation, application, and data",
                "Keyboard, mouse, and monitor",
                "Email, printer, and speaker",
                "Power, battery, and display"
              ],
              answer: "Presentation, application, and data"
            },
            {
              question: "What is a key characteristic of microservices?",
              options: [
                "Application functionality is divided into smaller services",
                "All application logic must run in one file",
                "Every service must use the same database table",
                "Applications cannot communicate through APIs"
              ],
              answer: "Application functionality is divided into smaller services"
            },
            {
              question: "What triggers processing in an event-driven architecture?",
              options: ["Events", "Monitor brightness", "Keyboard layout", "File extensions only"],
              answer: "Events"
            }
          ]
        },
        {
          title: "16. Final Project: Design a Scalable Cloud Application",
          content: `In this final lesson, design a cloud architecture for a student learning platform.

Project scenario:
A learning platform allows students to register, log in, view courses, complete lessons, take quizzes, and track progress.

Requirements:
- Students should access the application through a web browser.
- The application should support multiple users.
- User information and course progress must be stored.
- Uploaded learning materials must be stored.
- Access must be controlled.
- Application performance should be monitored.
- The system should support growth in user traffic.

Suggested architecture:

1. Frontend:
Host the web application using a suitable web hosting service.

2. Load balancing:
Distribute incoming requests across application instances where required.

3. Application layer:
Run the backend using virtual machines, containers, or a managed application platform.

4. Database:
Use a managed relational database for user accounts and course progress.

5. Object storage:
Store uploaded course documents and media.

6. Identity management:
Use authentication and authorization to control access.

7. Network:
Separate public-facing components from private application and database components.

8. Monitoring:
Collect metrics, logs, and alerts.

9. Backup:
Create and test database and file recovery procedures.

10. Cost management:
Review resource usage, set budgets, and remove unnecessary resources.

Project deliverables:
- Cloud architecture diagram.
- List of cloud services and their roles.
- Network layout.
- Security and access plan.
- Backup and recovery plan.
- Monitoring plan.
- Cost optimization checklist.

Evaluation checklist:
- Can students access the application?
- Are database resources protected?
- Can uploaded files be retrieved?
- Are permissions configured correctly?
- Can the system scale when traffic increases?
- Are important errors monitored?
- Can data be restored from backups?

This project brings together cloud infrastructure, networking, storage, IAM, security, monitoring, scalability, and cost management.`,
          quiz: [
            {
              question: "Which service is suitable for storing uploaded course documents and media?",
              options: ["Object storage", "CPU register", "DNS cache", "Keyboard buffer"],
              answer: "Object storage"
            },
            {
              question: "Which component stores structured student progress data?",
              options: ["Database", "Load balancer", "Internet gateway", "Monitor"],
              answer: "Database"
            },
            {
              question: "What is the purpose of a load balancer in this project?",
              options: [
                "Distribute incoming requests across application instances",
                "Store uploaded photographs",
                "Create student passwords",
                "Replace the database"
              ],
              answer: "Distribute incoming requests across application instances"
            },
            {
              question: "Which component manages student authentication and permissions?",
              options: [
                "Identity and Access Management",
                "Object storage",
                "Network cable",
                "CPU scheduler"
              ],
              answer: "Identity and Access Management"
            },
            {
              question: "Why should the project include backup testing?",
              options: [
                "To verify that important data can be restored",
                "To increase the website's font size",
                "To remove the need for authentication",
                "To guarantee unlimited cloud resources"
              ],
              answer: "To verify that important data can be restored"
            }
          ]
        }
      ]
    }
  ]
};

export default cloudArchitectureCourse;

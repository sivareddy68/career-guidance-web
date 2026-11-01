const networkSecurityCourse = {
  title: "Network Security",

  description:
    "Learn network security fundamentals, threats, authentication, firewalls, secure communication, and practical network protection.",

  weeks: [
    {
      title: "Week 1: Network Security Fundamentals",
      description:
        "Understand the basics of network security, threats, vulnerabilities, and security principles.",

      lessons: [
        {
          title: "Introduction to Network Security",
          content: `
Network security protects computers, devices, applications, and data from unauthorized access and attacks.

It uses technologies, policies, and security practices to protect network communication. Network security is important in enterprise networks, cloud systems, IoT devices, and embedded systems.

Common security goals include protecting confidentiality, maintaining data integrity, and keeping services available.
          `,
          quiz: [
            {
              question: "What is the main purpose of network security?",
              options: [
                "Protect networks and data",
                "Increase monitor size",
                "Store files",
                "Increase CPU speed",
              ],
              answer: "Protect networks and data",
            },
            {
              question: "Which is a major network security goal?",
              options: [
                "Confidentiality",
                "Screen brightness",
                "File size",
                "Keyboard speed",
              ],
              answer: "Confidentiality",
            },
            {
              question: "Network security protects against what?",
              options: [
                "Unauthorized access and attacks",
                "Low battery only",
                "Screen damage",
                "Keyboard errors",
              ],
              answer: "Unauthorized access and attacks",
            },
            {
              question: "Where is network security important?",
              options: [
                "Enterprise and IoT networks",
                "Only calculators",
                "Only keyboards",
                "Only monitors",
              ],
              answer: "Enterprise and IoT networks",
            },
            {
              question: "What does integrity protect?",
              options: [
                "Accuracy and correctness of data",
                "Screen resolution",
                "Battery capacity",
                "CPU temperature",
              ],
              answer: "Accuracy and correctness of data",
            },
          ],
        },

        {
          title: "Network Threats",
          content: `
A network threat is an activity that can damage systems, steal information, or interrupt services.

Common threats include malware, phishing, unauthorized access, denial-of-service attacks, and network scanning.

Understanding threats helps administrators select suitable security controls and reduce the risk of attacks.
          `,
          quiz: [
            {
              question: "What is a network threat?",
              options: [
                "An activity that can harm a network",
                "A network cable",
                "A switch port",
                "A database table",
              ],
              answer: "An activity that can harm a network",
            },
            {
              question: "Which is a common network threat?",
              options: [
                "Malware",
                "Keyboard",
                "Monitor",
                "Printer paper",
              ],
              answer: "Malware",
            },
            {
              question: "What can a denial-of-service attack affect?",
              options: [
                "Service availability",
                "Screen color",
                "Keyboard layout",
                "File extension",
              ],
              answer: "Service availability",
            },
            {
              question: "What does network scanning attempt to discover?",
              options: [
                "Network devices and services",
                "Monitor size",
                "Battery level",
                "Keyboard shortcuts",
              ],
              answer: "Network devices and services",
            },
            {
              question: "Why should threats be identified?",
              options: [
                "To select appropriate security controls",
                "To increase screen size",
                "To remove all switches",
                "To change file formats",
              ],
              answer: "To select appropriate security controls",
            },
          ],
        },

        {
          title: "Vulnerabilities and Risk",
          content: `
A vulnerability is a weakness that could be exploited to affect a system.

Network vulnerabilities can result from outdated software, weak configurations, unnecessary services, poor access control, or insecure protocols.

Risk assessment considers the likelihood and potential impact of a security problem. Regular updates, secure configuration, and monitoring can reduce risk.
          `,
          quiz: [
            {
              question: "What is a vulnerability?",
              options: [
                "A weakness in a system",
                "A network cable",
                "A firewall",
                "A backup file",
              ],
              answer: "A weakness in a system",
            },
            {
              question: "Which can create a network vulnerability?",
              options: [
                "Outdated software",
                "Strong authentication",
                "Regular updates",
                "Secure configuration",
              ],
              answer: "Outdated software",
            },
            {
              question: "What does risk assessment consider?",
              options: [
                "Likelihood and impact",
                "Screen resolution",
                "CPU brand",
                "Keyboard size",
              ],
              answer: "Likelihood and impact",
            },
            {
              question: "What can reduce security risk?",
              options: [
                "Regular updates",
                "Weak passwords",
                "Unused services",
                "Poor configuration",
              ],
              answer: "Regular updates",
            },
            {
              question: "Why should unnecessary services be disabled?",
              options: [
                "To reduce the attack surface",
                "To increase screen size",
                "To increase storage",
                "To change MAC addresses",
              ],
              answer: "To reduce the attack surface",
            },
          ],
        },

        {
          title: "CIA Security Principles",
          content: `
The CIA triad is a basic model used in information and network security.

Confidentiality means information should only be accessible to authorized users. Integrity means information should not be changed improperly. Availability means systems and services should remain accessible when needed.

These principles help guide security design and risk management.
          `,
          quiz: [
            {
              question: "What does CIA stand for in security?",
              options: [
                "Confidentiality, Integrity, Availability",
                "Control, Internet, Access",
                "Computer, Information, Application",
                "Connection, Internet, Authentication",
              ],
              answer: "Confidentiality, Integrity, Availability",
            },
            {
              question: "What does confidentiality protect?",
              options: [
                "Information from unauthorized access",
                "CPU speed",
                "Screen brightness",
                "Cable length",
              ],
              answer: "Information from unauthorized access",
            },
            {
              question: "What does integrity ensure?",
              options: [
                "Data is not improperly changed",
                "Data is always deleted",
                "Network is disconnected",
                "CPU is faster",
              ],
              answer: "Data is not improperly changed",
            },
            {
              question: "What does availability mean?",
              options: [
                "Systems are accessible when needed",
                "Data is always public",
                "Passwords are removed",
                "Files are compressed",
              ],
              answer: "Systems are accessible when needed",
            },
            {
              question: "The CIA triad is used for what?",
              options: [
                "Security planning",
                "Video editing",
                "Database indexing",
                "Hardware assembly",
              ],
              answer: "Security planning",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Authentication and Access Control",
      description:
        "Learn authentication, authorization, passwords, and access control mechanisms.",

      lessons: [
        {
          title: "Authentication",
          content: `
Authentication is the process of verifying the identity of a user or device.

Common authentication methods include passwords, security keys, certificates, and multi-factor authentication.

Strong authentication helps prevent unauthorized users from accessing network resources.
          `,
          quiz: [
            {
              question: "What does authentication verify?",
              options: [
                "Identity",
                "Screen size",
                "File size",
                "CPU speed",
              ],
              answer: "Identity",
            },
            {
              question: "Which is an authentication method?",
              options: [
                "Password",
                "Monitor",
                "Ethernet cable",
                "Printer",
              ],
              answer: "Password",
            },
            {
              question: "What does MFA provide?",
              options: [
                "Multiple authentication factors",
                "Multiple monitors",
                "Multiple cables",
                "Multiple IP addresses",
              ],
              answer: "Multiple authentication factors",
            },
            {
              question: "Why is strong authentication useful?",
              options: [
                "It reduces unauthorized access",
                "It increases storage",
                "It improves screen resolution",
                "It changes hardware",
              ],
              answer: "It reduces unauthorized access",
            },
            {
              question: "Certificates can be used for what?",
              options: [
                "Authentication",
                "Screen control",
                "File compression",
                "Battery charging",
              ],
              answer: "Authentication",
            },
          ],
        },

        {
          title: "Authorization and Access Control",
          content: `
Authorization determines what an authenticated user or device is allowed to access.

Access control policies can restrict users based on their roles and permissions. For example, an administrator may have more privileges than a normal user.

Applying least privilege means giving users and devices only the permissions they actually need.
          `,
          quiz: [
            {
              question: "What does authorization determine?",
              options: [
                "What a user can access",
                "User identity",
                "Screen size",
                "CPU speed",
              ],
              answer: "What a user can access",
            },
            {
              question: "What is least privilege?",
              options: [
                "Giving only required permissions",
                "Giving everyone administrator access",
                "Removing authentication",
                "Sharing all passwords",
              ],
              answer: "Giving only required permissions",
            },
            {
              question: "What can access control restrict?",
              options: [
                "Resources and actions",
                "Screen brightness",
                "Cable length",
                "CPU temperature",
              ],
              answer: "Resources and actions",
            },
            {
              question: "Who normally has more privileges?",
              options: [
                "Administrator",
                "Guest user",
                "Unknown device",
                "Unregistered user",
              ],
              answer: "Administrator",
            },
            {
              question: "Why use access control?",
              options: [
                "To prevent unauthorized resource access",
                "To increase RAM",
                "To improve display quality",
                "To increase cable speed",
              ],
              answer: "To prevent unauthorized resource access",
            },
          ],
        },

        {
          title: "Secure Password Management",
          content: `
Passwords are commonly used for authentication and should be protected carefully.

Strong passwords should be difficult to guess. Systems should avoid storing passwords in plain text and should use secure password storage mechanisms.

Password policies, account protection, and multi-factor authentication can improve security.
          `,
          quiz: [
            {
              question: "What should a strong password be?",
              options: [
                "Difficult to guess",
                "Very short",
                "Shared publicly",
                "The same everywhere",
              ],
              answer: "Difficult to guess",
            },
            {
              question: "How should passwords be stored?",
              options: [
                "Using secure password storage mechanisms",
                "As plain text",
                "In public files",
                "Inside usernames",
              ],
              answer: "Using secure password storage mechanisms",
            },
            {
              question: "What can improve account security?",
              options: [
                "Multi-factor authentication",
                "Password sharing",
                "Simple passwords",
                "Public credentials",
              ],
              answer: "Multi-factor authentication",
            },
            {
              question: "Why should passwords not be shared?",
              options: [
                "It reduces account security",
                "It increases storage",
                "It changes IP addresses",
                "It improves network speed",
              ],
              answer: "It reduces account security",
            },
            {
              question: "What should organizations use for password storage?",
              options: [
                "Secure hashing mechanisms",
                "Plain text files",
                "Public spreadsheets",
                "Screen notes",
              ],
              answer: "Secure hashing mechanisms",
            },
          ],
        },

        {
          title: "Network Access Control",
          content: `
Network access control determines which users and devices are allowed to connect to network resources.

Access control can use authentication, device identification, VLANs, security policies, and network monitoring.

In enterprise and IoT environments, access control helps prevent unknown or unauthorized devices from accessing sensitive systems.
          `,
          quiz: [
            {
              question: "What does network access control manage?",
              options: [
                "Network access",
                "Screen brightness",
                "CPU speed",
                "File compression",
              ],
              answer: "Network access",
            },
            {
              question: "What can identify devices?",
              options: [
                "Device credentials or identifiers",
                "Monitor size",
                "Keyboard color",
                "File extension",
              ],
              answer: "Device credentials or identifiers",
            },
            {
              question: "Why is access control important for IoT?",
              options: [
                "To restrict unauthorized devices",
                "To increase battery voltage",
                "To remove sensors",
                "To change display settings",
              ],
              answer: "To restrict unauthorized devices",
            },
            {
              question: "Which can support network access control?",
              options: ["Authentication", "Screen brightness", "File names", "Speakers"],
              answer: "Authentication",
            },
            {
              question: "Access control helps protect what?",
              options: [
                "Network resources",
                "Keyboard buttons",
                "Monitor pixels",
                "Printer paper",
              ],
              answer: "Network resources",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Firewalls and Secure Communication",
      description:
        "Learn firewalls, encryption, secure protocols, and network traffic protection.",

      lessons: [
        {
          title: "Firewalls",
          content: `
A firewall controls network traffic based on predefined security rules.

Firewalls can allow or block traffic based on information such as IP addresses, ports, protocols, and connection state.

They can be implemented as hardware devices, software applications, or cloud-based services.
          `,
          quiz: [
            {
              question: "What is the main purpose of a firewall?",
              options: [
                "Control network traffic",
                "Store files",
                "Increase CPU speed",
                "Display images",
              ],
              answer: "Control network traffic",
            },
            {
              question: "What can firewall rules examine?",
              options: [
                "IP addresses and ports",
                "Screen size",
                "Keyboard color",
                "Battery level",
              ],
              answer: "IP addresses and ports",
            },
            {
              question: "What can a firewall do with unwanted traffic?",
              options: [
                "Block it",
                "Store it as a picture",
                "Increase its speed",
                "Convert it to audio",
              ],
              answer: "Block it",
            },
            {
              question: "A firewall can be implemented as what?",
              options: [
                "Hardware or software",
                "Only a keyboard",
                "Only a monitor",
                "Only a printer",
              ],
              answer: "Hardware or software",
            },
            {
              question: "Firewall rules are used to do what?",
              options: [
                "Control allowed and blocked traffic",
                "Increase storage",
                "Change screen resolution",
                "Create passwords",
              ],
              answer: "Control allowed and blocked traffic",
            },
          ],
        },

        {
          title: "Encryption Basics",
          content: `
Encryption converts readable information into a protected form so that unauthorized users cannot easily understand it.

Encryption can protect data while it is being transmitted or stored. Decryption converts encrypted information back into a usable form for an authorized recipient.

Modern network security uses well-tested cryptographic algorithms rather than custom encryption methods.
          `,
          quiz: [
            {
              question: "What is the purpose of encryption?",
              options: [
                "Protect information",
                "Increase CPU speed",
                "Change screen size",
                "Remove authentication",
              ],
              answer: "Protect information",
            },
            {
              question: "What converts encrypted data back to usable form?",
              options: ["Decryption", "Compression", "Routing", "Switching"],
              answer: "Decryption",
            },
            {
              question: "Encryption can protect data in which situations?",
              options: [
                "During transmission and storage",
                "Only on monitors",
                "Only inside keyboards",
                "Only during printing",
              ],
              answer: "During transmission and storage",
            },
            {
              question: "Who should normally be able to decrypt protected data?",
              options: [
                "Authorized recipients",
                "Every network user",
                "Unknown devices",
                "Any public user",
              ],
              answer: "Authorized recipients",
            },
            {
              question: "What should developers use instead of custom cryptography?",
              options: [
                "Well-tested cryptographic algorithms",
                "Random formulas",
                "Plain text",
                "Unverified code",
              ],
              answer: "Well-tested cryptographic algorithms",
            },
          ],
        },

        {
          title: "Secure Network Protocols",
          content: `
Secure protocols provide protection for network communication.

HTTPS protects web communication using TLS. SSH provides secure remote administration. Secure versions of common protocols help protect information from interception or unauthorized modification.

Using secure protocols is especially important when sensitive information is transmitted over networks.
          `,
          quiz: [
            {
              question: "What protects HTTPS communication?",
              options: ["TLS", "FTP", "DNS only", "SMTP only"],
              answer: "TLS",
            },
            {
              question: "What is SSH commonly used for?",
              options: [
                "Secure remote administration",
                "Video editing",
                "Printing",
                "Image compression",
              ],
              answer: "Secure remote administration",
            },
            {
              question: "Why use secure protocols?",
              options: [
                "To protect network communication",
                "To increase monitor size",
                "To reduce RAM",
                "To remove passwords",
              ],
              answer: "To protect network communication",
            },
            {
              question: "HTTPS is commonly used for what?",
              options: ["Secure web communication", "File deletion", "CPU control", "Printer setup"],
              answer: "Secure web communication",
            },
            {
              question: "Secure communication can help prevent what?",
              options: [
                "Unauthorized interception",
                "Screen damage",
                "Keyboard failure",
                "Battery discharge",
              ],
              answer: "Unauthorized interception",
            },
          ],
        },

        {
          title: "VPN and Secure Remote Access",
          content: `
A Virtual Private Network, or VPN, creates a protected communication path over an existing network.

VPNs are commonly used to provide secure remote access to private network resources. They can protect traffic while it travels across untrusted networks.

Organizations can use VPNs for remote administration, employee access, and secure connections between locations.
          `,
          quiz: [
            {
              question: "What does VPN stand for?",
              options: [
                "Virtual Private Network",
                "Verified Public Network",
                "Virtual Port Node",
                "Variable Private Node",
              ],
              answer: "Virtual Private Network",
            },
            {
              question: "What is a common use of a VPN?",
              options: [
                "Secure remote access",
                "Screen sharing only",
                "Increasing CPU speed",
                "Printing documents",
              ],
              answer: "Secure remote access",
            },
            {
              question: "What does a VPN provide?",
              options: [
                "A protected communication path",
                "More storage",
                "A new monitor",
                "A faster CPU",
              ],
              answer: "A protected communication path",
            },
            {
              question: "VPNs are useful over what type of network?",
              options: [
                "Untrusted networks",
                "Only offline networks",
                "Only USB connections",
                "Only local keyboards",
              ],
              answer: "Untrusted networks",
            },
            {
              question: "Organizations can use VPNs for what?",
              options: [
                "Remote administration",
                "Screen calibration",
                "Battery charging",
                "File naming",
              ],
              answer: "Remote administration",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Network Security",
      description:
        "Apply network security concepts to monitoring, IoT systems, and practical protection.",

      lessons: [
        {
          title: "Network Monitoring",
          content: `
Network monitoring observes network devices, traffic, connections, and security events.

Monitoring can help identify unusual activity, configuration problems, and possible security incidents.

Logs, alerts, and network analysis tools can provide useful information for administrators.
          `,
          quiz: [
            {
              question: "What does network monitoring observe?",
              options: [
                "Network activity and events",
                "Only screen brightness",
                "Only keyboard input",
                "Only file names",
              ],
              answer: "Network activity and events",
            },
            {
              question: "Why is network monitoring important?",
              options: [
                "To identify unusual activity",
                "To increase storage",
                "To change screen size",
                "To improve keyboard speed",
              ],
              answer: "To identify unusual activity",
            },
            {
              question: "What can provide information about security events?",
              options: ["Logs", "Monitors", "Keyboards", "Speakers"],
              answer: "Logs",
            },
            {
              question: "What can monitoring detect?",
              options: [
                "Configuration problems",
                "Screen color",
                "Battery brand",
                "Keyboard layout",
              ],
              answer: "Configuration problems",
            },
            {
              question: "Who commonly uses network monitoring information?",
              options: [
                "Network administrators",
                "Printers",
                "Monitors",
                "Speakers",
              ],
              answer: "Network administrators",
            },
          ],
        },

        {
          title: "Network Security for IoT",
          content: `
IoT networks contain many connected devices, which makes security especially important.

IoT security can include device authentication, encrypted communication, network segmentation, secure firmware, access control, and regular updates.

Security should be considered throughout the device lifecycle, from development to deployment and maintenance.
          `,
          quiz: [
            {
              question: "Why is IoT security important?",
              options: [
                "IoT devices are connected to networks",
                "IoT devices have monitors",
                "IoT devices use keyboards",
                "IoT devices store music",
              ],
              answer: "IoT devices are connected to networks",
            },
            {
              question: "Which can improve IoT security?",
              options: [
                "Encrypted communication",
                "Weak passwords",
                "Unused services",
                "Public credentials",
              ],
              answer: "Encrypted communication",
            },
            {
              question: "What can separate IoT devices from other systems?",
              options: ["Network segmentation", "Screen sharing", "File compression", "Printing"],
              answer: "Network segmentation",
            },
            {
              question: "Why are device updates important?",
              options: [
                "They can fix security vulnerabilities",
                "They increase monitor size",
                "They remove all networking",
                "They change keyboard layout",
              ],
              answer: "They can fix security vulnerabilities",
            },
            {
              question: "When should security be considered?",
              options: [
                "Throughout the device lifecycle",
                "Only after an attack",
                "Only during shutdown",
                "Only during testing",
              ],
              answer: "Throughout the device lifecycle",
            },
          ],
        },

        {
          title: "Security Testing and Incident Response",
          content: `
Security testing helps identify weaknesses before they cause serious problems.

Testing can include vulnerability assessment, configuration review, and controlled security testing. When a security incident occurs, organizations need an incident response process.

A typical response includes identifying the problem, containing its impact, removing the cause, recovering services, and reviewing the incident.
          `,
          quiz: [
            {
              question: "What is the purpose of security testing?",
              options: [
                "Identify security weaknesses",
                "Increase screen brightness",
                "Increase storage",
                "Change keyboard settings",
              ],
              answer: "Identify security weaknesses",
            },
            {
              question: "What should happen when an incident is detected?",
              options: [
                "It should be investigated and contained",
                "It should always be ignored",
                "All systems should be deleted",
                "Passwords should be shared",
              ],
              answer: "It should be investigated and contained",
            },
            {
              question: "What is containment?",
              options: [
                "Limiting the impact of an incident",
                "Deleting all files",
                "Increasing network speed",
                "Changing screen resolution",
              ],
              answer: "Limiting the impact of an incident",
            },
            {
              question: "What happens after recovery?",
              options: [
                "The incident can be reviewed",
                "Security is permanently disabled",
                "All passwords are published",
                "The network is removed",
              ],
              answer: "The incident can be reviewed",
            },
            {
              question: "Which is part of incident response?",
              options: ["Recovery", "Screen calibration", "Printing", "Video editing"],
              answer: "Recovery",
            },
          ],
        },

        {
          title: "Mini Project: Secure IoT Network",
          content: `
In this mini project, design a secure network for an IoT system.

The network can contain sensors, controllers, a gateway, and a monitoring system. Use network segmentation to separate device traffic and apply access control to restrict unnecessary connections.

Add secure communication, strong authentication, firewall rules, and monitoring. Finally, test connectivity and review the security configuration.

This project combines authentication, access control, firewalls, encryption, monitoring, and IoT network security.
          `,
          quiz: [
            {
              question: "What is the main goal of the project?",
              options: [
                "Build a secure IoT network",
                "Build a video editor",
                "Create a database only",
                "Design a keyboard",
              ],
              answer: "Build a secure IoT network",
            },
            {
              question: "What can separate IoT traffic?",
              options: ["Network segmentation", "Screen sharing", "File compression", "Printing"],
              answer: "Network segmentation",
            },
            {
              question: "What can control unwanted network connections?",
              options: ["Firewall", "Monitor", "Keyboard", "Speaker"],
              answer: "Firewall",
            },
            {
              question: "What protects sensitive communication?",
              options: ["Encryption", "Plain text", "Public passwords", "Open access"],
              answer: "Encryption",
            },
            {
              question: "Which concepts are combined in the project?",
              options: [
                "Authentication, firewalls, encryption, and monitoring",
                "Only HTML and CSS",
                "Only database design",
                "Only hardware assembly",
              ],
              answer: "Authentication, firewalls, encryption, and monitoring",
            },
          ],
        },
      ],
    },
  ],
};

export default networkSecurityCourse;
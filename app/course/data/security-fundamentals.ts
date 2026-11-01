const securityFundamentalsCourse = {
  title: "Security Fundamentals",
  description:
    "Learn cybersecurity fundamentals, common threats, authentication, access control, network security, system security, data protection, security monitoring, and basic security best practices.",

  weeks: [
    {
      title: "Week 1: Cybersecurity Foundations",
      description:
        "Understand cybersecurity concepts, threats, vulnerabilities, risks, and security principles.",

      lessons: [
        {
          title: "Introduction to Cybersecurity",
          content: `
Cybersecurity is the practice of protecting computers, networks, applications, and data from unauthorized access, misuse, disruption, or damage.

Security is important for individuals, businesses, governments, and organizations.

The main goals of cybersecurity are often described using the CIA triad:

- Confidentiality: Information should only be accessible to authorized people.
- Integrity: Information should remain accurate and protected from unauthorized changes.
- Availability: Systems and information should be available when needed.

Cybersecurity involves people, processes, and technology.

Examples of security controls include passwords, access permissions, firewalls, encryption, backups, monitoring, and security policies.

Good security is based on multiple layers of protection rather than relying on a single control.
          `,
          quiz: [
            {
              question: "What is cybersecurity?",
              options: [
                "Protecting systems, networks, and data from threats",
                "Only installing software",
                "Only creating websites",
                "Managing computer graphics",
              ],
              answer:
                "Protecting systems, networks, and data from threats",
            },
            {
              question: "What does confidentiality protect?",
              options: [
                "Information from unauthorized access",
                "System speed",
                "Screen resolution",
                "Network cable quality",
              ],
              answer: "Information from unauthorized access",
            },
            {
              question: "What does integrity mean?",
              options: [
                "Protecting information from unauthorized changes",
                "Making systems faster",
                "Increasing storage capacity",
                "Allowing everyone to access data",
              ],
              answer:
                "Protecting information from unauthorized changes",
            },
            {
              question: "What does availability mean?",
              options: [
                "Systems and information are available when needed",
                "All information is public",
                "Only administrators can use systems",
                "Data is always encrypted",
              ],
              answer:
                "Systems and information are available when needed",
            },
            {
              question: "Which is an example of a security control?",
              options: ["Firewall", "Wallpaper", "Keyboard", "Monitor"],
              answer: "Firewall",
            },
          ],
        },

        {
          title: "Threats, Vulnerabilities, and Risks",
          content: `
A threat is something that can potentially cause harm to a system or organization.

A vulnerability is a weakness that could be exploited by a threat.

Risk represents the possibility and potential impact of a security problem.

For example, outdated software may contain a vulnerability. An attacker could exploit it, creating security risk.

Common threats include malware, phishing, unauthorized access, data theft, and denial-of-service attacks.

Security teams identify vulnerabilities and apply controls to reduce risk.

Regular updates, secure configurations, access control, monitoring, and user awareness can reduce many common risks.
          `,
          quiz: [
            {
              question: "What is a vulnerability?",
              options: [
                "A weakness that could be exploited",
                "A security policy",
                "A backup file",
                "A network device",
              ],
              answer: "A weakness that could be exploited",
            },
            {
              question: "What is a threat?",
              options: [
                "Something that can potentially cause harm",
                "A software update",
                "A backup",
                "A security control",
              ],
              answer: "Something that can potentially cause harm",
            },
            {
              question: "What does security risk represent?",
              options: [
                "The possibility and impact of a security problem",
                "Only the number of computers",
                "Only network speed",
                "Only storage capacity",
              ],
              answer: "The possibility and impact of a security problem",
            },
            {
              question: "Which is a common cybersecurity threat?",
              options: ["Phishing", "Screen brightness", "Keyboard failure", "File formatting"],
              answer: "Phishing",
            },
            {
              question: "Which action can reduce vulnerabilities?",
              options: [
                "Applying security updates",
                "Disabling all security controls",
                "Sharing passwords",
                "Ignoring system warnings",
              ],
              answer: "Applying security updates",
            },
          ],
        },

        {
          title: "Malware and Common Attacks",
          content: `
Malware is malicious software designed to perform harmful or unauthorized actions.

Common types include viruses, worms, trojans, ransomware, spyware, and keyloggers.

A virus usually requires some form of user or program interaction to spread.

A worm can spread automatically between vulnerable systems.

A trojan disguises itself as legitimate software.

Ransomware can prevent access to data or systems and demand payment.

Spyware is designed to collect information without appropriate authorization.

Security controls such as endpoint protection, software updates, backups, and user awareness can reduce the impact of malware.
          `,
          quiz: [
            {
              question: "What is malware?",
              options: [
                "Malicious software",
                "Network hardware",
                "A backup system",
                "A security policy",
              ],
              answer: "Malicious software",
            },
            {
              question: "Which malware type can spread automatically between vulnerable systems?",
              options: ["Worm", "Trojan", "Spyware", "Firewall"],
              answer: "Worm",
            },
            {
              question: "What is a trojan?",
              options: [
                "Malicious software disguised as legitimate software",
                "A network switch",
                "A backup file",
                "An encryption algorithm",
              ],
              answer:
                "Malicious software disguised as legitimate software",
            },
            {
              question: "What is ransomware designed to do?",
              options: [
                "Restrict access to data or systems and demand payment",
                "Improve network performance",
                "Create user accounts",
                "Manage DNS",
              ],
              answer:
                "Restrict access to data or systems and demand payment",
            },
            {
              question: "Which can help reduce malware impact?",
              options: [
                "Regular backups and security updates",
                "Sharing passwords",
                "Ignoring updates",
                "Disabling all security software",
              ],
              answer:
                "Regular backups and security updates",
            },
          ],
        },

        {
          title: "Social Engineering and Phishing",
          content: `
Social engineering involves manipulating people into revealing information or performing unsafe actions.

Phishing is a common form of social engineering that uses deceptive messages to trick users.

Phishing messages may attempt to obtain passwords, financial information, verification codes, or other sensitive data.

Attackers may use urgency, fear, rewards, or impersonation to influence users.

Common warning signs include unexpected links, unusual requests, spelling inconsistencies, suspicious sender information, and requests for sensitive information.

Users should verify requests through trusted channels instead of immediately following suspicious instructions.
          `,
          quiz: [
            {
              question: "What is social engineering?",
              options: [
                "Manipulating people into taking unsafe actions",
                "Installing a firewall",
                "Encrypting a database",
                "Updating software",
              ],
              answer:
                "Manipulating people into taking unsafe actions",
            },
            {
              question: "What is phishing?",
              options: [
                "A deceptive attempt to obtain information",
                "A type of backup",
                "A network protocol",
                "A storage technology",
              ],
              answer: "A deceptive attempt to obtain information",
            },
            {
              question: "Which is a phishing warning sign?",
              options: [
                "An unexpected request for sensitive information",
                "A normal system update",
                "A known internal document",
                "A routine software notification",
              ],
              answer:
                "An unexpected request for sensitive information",
            },
            {
              question: "Why might attackers create urgency?",
              options: [
                "To pressure users into acting without checking",
                "To improve system performance",
                "To increase storage",
                "To update DNS",
              ],
              answer:
                "To pressure users into acting without checking",
            },
            {
              question: "What should users do with suspicious requests?",
              options: [
                "Verify them through a trusted channel",
                "Immediately provide the requested information",
                "Forward them to everyone",
                "Disable security software",
              ],
              answer:
                "Verify them through a trusted channel",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Authentication and Access Control",
      description:
        "Learn passwords, multi-factor authentication, authorization, least privilege, and account security.",

      lessons: [
        {
          title: "Passwords and Authentication",
          content: `
Authentication is the process of verifying the identity of a user or system.

Passwords are a common authentication method.

Strong passwords should be difficult to guess and should not be reused across important accounts.

Password managers can help users create and store unique passwords.

Systems should protect passwords using secure password-storage methods rather than storing plain-text passwords.

Authentication should be combined with other controls when possible.

Account lockout and monitoring can help detect repeated failed login attempts.
          `,
          quiz: [
            {
              question: "What is authentication?",
              options: [
                "Verifying an identity",
                "Assigning network addresses",
                "Encrypting a disk",
                "Backing up files",
              ],
              answer: "Verifying an identity",
            },
            {
              question: "What is a good password practice?",
              options: [
                "Use unique passwords for important accounts",
                "Use the same password everywhere",
                "Share passwords with friends",
                "Use very short passwords",
              ],
              answer: "Use unique passwords for important accounts",
            },
            {
              question: "What can a password manager help with?",
              options: [
                "Creating and storing unique passwords",
                "Replacing a firewall",
                "Monitoring network cables",
                "Changing IP addresses",
              ],
              answer: "Creating and storing unique passwords",
            },
            {
              question: "How should passwords generally be stored by applications?",
              options: [
                "Using secure password-storage methods",
                "As plain text",
                "Inside public files",
                "Inside URLs",
              ],
              answer: "Using secure password-storage methods",
            },
            {
              question: "What can account lockout help detect?",
              options: [
                "Repeated failed login attempts",
                "Network bandwidth",
                "Disk temperature",
                "Screen brightness",
              ],
              answer: "Repeated failed login attempts",
            },
          ],
        },

        {
          title: "Multi-Factor Authentication",
          content: `
Multi-factor authentication, or MFA, requires more than one type of authentication factor.

Common factor categories include:
- Something you know, such as a password.
- Something you have, such as a security device.
- Something you are, such as a biometric characteristic.

MFA provides additional protection if a password is compromised.

For example, a service may require a password and a verification method from another device.

MFA is useful for email, cloud accounts, administrative systems, and other important services.

Users should still protect their authentication devices and recovery methods.
          `,
          quiz: [
            {
              question: "What does MFA provide?",
              options: [
                "More than one authentication factor",
                "Only a longer password",
                "Only network encryption",
                "Only file backups",
              ],
              answer: "More than one authentication factor",
            },
            {
              question: "Which is an example of something you know?",
              options: ["Password", "Security key", "Fingerprint", "Smart card"],
              answer: "Password",
            },
            {
              question: "Which is an example of something you have?",
              options: ["Security key", "Password", "PIN", "Fingerprint"],
              answer: "Security key",
            },
            {
              question: "Why is MFA useful?",
              options: [
                "It provides another layer if a password is compromised",
                "It removes the need for security",
                "It increases storage capacity",
                "It replaces network routing",
              ],
              answer:
                "It provides another layer if a password is compromised",
            },
            {
              question: "Where is MFA especially useful?",
              options: [
                "Important accounts and administrative systems",
                "Only offline calculators",
                "Only printers",
                "Only keyboards",
              ],
              answer: "Important accounts and administrative systems",
            },
          ],
        },

        {
          title: "Authorization and Access Control",
          content: `
Authorization determines what an authenticated user or system is allowed to access.

Authentication answers "Who are you?" while authorization answers "What are you allowed to do?"

Access control can restrict access to files, applications, databases, networks, and other resources.

Role-based access control assigns permissions based on job roles.

For example, an administrator may have more privileges than a regular user.

Access should be reviewed regularly to remove unnecessary permissions.

Good access control reduces the chance of unauthorized changes or data access.
          `,
          quiz: [
            {
              question: "What does authorization determine?",
              options: [
                "What an authenticated user can access",
                "Who the user is",
                "Network speed",
                "Disk capacity",
              ],
              answer: "What an authenticated user can access",
            },
            {
              question: "What does authentication determine?",
              options: [
                "Who a user or system is",
                "What files are stored",
                "How fast a network is",
                "Which printer is used",
              ],
              answer: "Who a user or system is",
            },
            {
              question: "What is role-based access control?",
              options: [
                "Assigning permissions based on roles",
                "Encrypting all files",
                "Changing IP addresses",
                "Monitoring CPU usage",
              ],
              answer: "Assigning permissions based on roles",
            },
            {
              question: "Why should permissions be reviewed?",
              options: [
                "To remove unnecessary access",
                "To increase monitor size",
                "To change DNS",
                "To remove all users",
              ],
              answer: "To remove unnecessary access",
            },
            {
              question: "What can access control help prevent?",
              options: [
                "Unauthorized resource access",
                "All hardware failures",
                "All network delays",
                "Power outages",
              ],
              answer: "Unauthorized resource access",
            },
          ],
        },

        {
          title: "Least Privilege and Account Security",
          content: `
The principle of least privilege means users and systems should receive only the permissions necessary to perform their required tasks.

Giving excessive permissions increases the potential impact of a compromised account.

Administrative accounts should be used only when administrative tasks are required.

Separate accounts can be used for normal work and administrative activities.

Unused accounts should be disabled or removed according to organizational policy.

Access should also be reviewed when employees change roles or leave an organization.

Least privilege is an important security principle for systems, applications, and networks.
          `,
          quiz: [
            {
              question: "What does least privilege mean?",
              options: [
                "Give only the permissions required for a task",
                "Give every user administrator access",
                "Remove all authentication",
                "Allow unrestricted access",
              ],
              answer: "Give only the permissions required for a task",
            },
            {
              question: "Why is excessive privilege risky?",
              options: [
                "A compromised account may cause greater damage",
                "It increases screen brightness",
                "It improves security automatically",
                "It reduces storage",
              ],
              answer:
                "A compromised account may cause greater damage",
            },
            {
              question: "When should administrator privileges be used?",
              options: [
                "When administrative tasks are required",
                "For every normal activity",
                "Only when browsing websites",
                "Never",
              ],
              answer: "When administrative tasks are required",
            },
            {
              question: "What should happen to unused accounts?",
              options: [
                "They should be disabled or removed according to policy",
                "They should always remain active",
                "They should receive more privileges",
                "They should be shared",
              ],
              answer:
                "They should be disabled or removed according to policy",
            },
            {
              question: "When should access be reviewed?",
              options: [
                "When roles or responsibilities change",
                "Only after hardware failure",
                "Only during installation",
                "Never",
              ],
              answer: "When roles or responsibilities change",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Network and System Security",
      description:
        "Learn firewalls, encryption, secure systems, patching, backups, and network security controls.",

      lessons: [
        {
          title: "Firewalls and Network Security",
          content: `
A firewall controls network traffic according to security rules.

Firewalls can be implemented as network devices, software, or cloud services.

Rules can allow or block traffic based on IP addresses, ports, protocols, and connection information.

A firewall can reduce exposure by blocking unnecessary inbound connections.

Outbound traffic can also be controlled when required.

Firewalls are only one part of security and should be combined with secure configuration, authentication, monitoring, updates, and other controls.

Firewall rules should be reviewed and kept as simple as practical.
          `,
          quiz: [
            {
              question: "What is the main purpose of a firewall?",
              options: [
                "Control network traffic",
                "Increase CPU speed",
                "Store passwords",
                "Create backups",
              ],
              answer: "Control network traffic",
            },
            {
              question: "What can firewall rules use?",
              options: [
                "IP addresses and ports",
                "Screen resolution",
                "Keyboard type",
                "File names only",
              ],
              answer: "IP addresses and ports",
            },
            {
              question: "Why block unnecessary inbound connections?",
              options: [
                "To reduce exposure to unwanted traffic",
                "To increase storage",
                "To change usernames",
                "To improve display quality",
              ],
              answer:
                "To reduce exposure to unwanted traffic",
            },
            {
              question: "Can firewalls control outbound traffic?",
              options: [
                "Yes, when configured with appropriate rules",
                "No, never",
                "Only on printers",
                "Only through DNS",
              ],
              answer:
                "Yes, when configured with appropriate rules",
            },
            {
              question: "Why are firewalls not sufficient by themselves?",
              options: [
                "Security requires multiple controls",
                "Firewalls cannot process network traffic",
                "Firewalls are only storage devices",
                "Firewalls replace authentication",
              ],
              answer: "Security requires multiple controls",
            },
          ],
        },

        {
          title: "Encryption and Secure Communication",
          content: `
Encryption transforms readable information into protected data so unauthorized parties cannot easily understand it.

Encryption can protect data while it is stored or while it is being transmitted.

HTTPS uses TLS to protect web communication between clients and servers.

Encrypted communication helps protect sensitive information from interception.

A digital certificate helps a client establish trust in a server during secure TLS connections.

Encryption does not replace authentication or authorization. These controls solve different security problems.

Organizations should use appropriate encryption for sensitive information based on their security requirements.
          `,
          quiz: [
            {
              question: "What is encryption used for?",
              options: [
                "Protecting information from unauthorized reading",
                "Increasing disk size",
                "Changing usernames",
                "Creating network cables",
              ],
              answer: "Protecting information from unauthorized reading",
            },
            {
              question: "What technology protects HTTPS communication?",
              options: ["TLS", "FTP", "ARP", "DHCP"],
              answer: "TLS",
            },
            {
              question: "What can encryption protect?",
              options: [
                "Stored and transmitted data",
                "Only monitors",
                "Only keyboards",
                "Only usernames",
              ],
              answer: "Stored and transmitted data",
            },
            {
              question: "What can a digital certificate help establish?",
              options: [
                "Trust in a server's identity",
                "Disk capacity",
                "CPU speed",
                "File permissions",
              ],
              answer: "Trust in a server's identity",
            },
            {
              question: "Does encryption replace authorization?",
              options: [
                "No, they address different security needs",
                "Yes, always",
                "Only for websites",
                "Only for Linux",
              ],
              answer: "No, they address different security needs",
            },
          ],
        },

        {
          title: "System Hardening and Patch Management",
          content: `
System hardening means reducing unnecessary security weaknesses in a system.

Common hardening steps include removing unnecessary software, disabling unused services, applying updates, configuring permissions, and using secure settings.

Patch management is the process of identifying, testing, and applying software updates.

Updates can fix security vulnerabilities as well as bugs.

Organizations should have a process for prioritizing important security updates.

Hardening should be based on the purpose of the system. A server does not need the same configuration as a workstation.

Secure configuration should be reviewed regularly.
          `,
          quiz: [
            {
              question: "What is system hardening?",
              options: [
                "Reducing unnecessary security weaknesses",
                "Increasing monitor brightness",
                "Adding unnecessary services",
                "Removing authentication",
              ],
              answer: "Reducing unnecessary security weaknesses",
            },
            {
              question: "What is patch management?",
              options: [
                "Managing software updates",
                "Managing keyboard settings",
                "Creating user photographs",
                "Designing websites",
              ],
              answer: "Managing software updates",
            },
            {
              question: "Why are security updates important?",
              options: [
                "They can fix security vulnerabilities",
                "They always increase storage",
                "They remove all passwords",
                "They disable all networking",
              ],
              answer: "They can fix security vulnerabilities",
            },
            {
              question: "Which is a hardening activity?",
              options: [
                "Disabling unused services",
                "Enabling every service",
                "Sharing administrator passwords",
                "Removing firewall rules",
              ],
              answer: "Disabling unused services",
            },
            {
              question: "Why should secure configurations be reviewed?",
              options: [
                "Systems and requirements can change",
                "Monitors become larger",
                "Passwords stop existing",
                "Networks never change",
              ],
              answer: "Systems and requirements can change",
            },
          ],
        },

        {
          title: "Backups and Data Protection",
          content: `
Backups are copies of important data that can be used for recovery.

Backups can help recover from accidental deletion, hardware failure, malware incidents, and other problems.

A useful backup strategy considers how often data changes, how quickly it must be restored, and how much data can be lost.

Backup copies should be protected from unauthorized access.

Organizations should periodically test whether backups can actually be restored.

Keeping appropriate copies in separate locations can improve resilience.

Data protection also includes access control, encryption, retention policies, and secure disposal.
          `,
          quiz: [
            {
              question: "What is a backup?",
              options: [
                "A copy of data used for recovery",
                "A firewall rule",
                "A network protocol",
                "A user account",
              ],
              answer: "A copy of data used for recovery",
            },
            {
              question: "What can backups help recover from?",
              options: [
                "Accidental deletion and system failures",
                "Only slow Internet",
                "Only screen problems",
                "Only keyboard errors",
              ],
              answer: "Accidental deletion and system failures",
            },
            {
              question: "Why should backups be tested?",
              options: [
                "To verify that data can actually be restored",
                "To increase network speed",
                "To create users",
                "To change IP addresses",
              ],
              answer: "To verify that data can actually be restored",
            },
            {
              question: "What should backup copies receive?",
              options: [
                "Appropriate security protection",
                "Public access",
                "No access controls",
                "Shared passwords",
              ],
              answer: "Appropriate security protection",
            },
            {
              question: "What can separate backup locations improve?",
              options: [
                "Resilience",
                "Screen resolution",
                "CPU speed",
                "Keyboard performance",
              ],
              answer: "Resilience",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Security Monitoring and Practical Security",
      description:
        "Learn security monitoring, incident basics, vulnerability management, and practical security workflows.",

      lessons: [
        {
          title: "Security Monitoring",
          content: `
Security monitoring involves observing systems and network activity to identify suspicious or abnormal behavior.

Useful security data can include login events, firewall activity, endpoint alerts, application logs, and network events.

Monitoring can help detect repeated failed logins, unusual access, unexpected network connections, and other indicators of potential problems.

Centralized logging can make it easier to analyze events across multiple systems.

Alerts should be prioritized based on severity and potential impact.

Good monitoring requires appropriate logging, time synchronization, useful alerts, and regular review.
          `,
          quiz: [
            {
              question: "What is security monitoring?",
              options: [
                "Observing activity to identify suspicious behavior",
                "Only installing software",
                "Only creating backups",
                "Only managing printers",
              ],
              answer:
                "Observing activity to identify suspicious behavior",
            },
            {
              question: "Which can be useful security data?",
              options: [
                "Login events and firewall activity",
                "Screen brightness",
                "Keyboard color",
                "Wallpaper settings",
              ],
              answer: "Login events and firewall activity",
            },
            {
              question: "What can repeated failed logins indicate?",
              options: [
                "Potential suspicious activity",
                "A larger disk",
                "Better network speed",
                "A successful backup",
              ],
              answer: "Potential suspicious activity",
            },
            {
              question: "Why is centralized logging useful?",
              options: [
                "It can simplify analysis across systems",
                "It increases CPU speed",
                "It removes all security risks",
                "It replaces authentication",
              ],
              answer: "It can simplify analysis across systems",
            },
            {
              question: "Why should alerts be prioritized?",
              options: [
                "To focus attention on important events",
                "To delete all logs",
                "To disable monitoring",
                "To increase storage speed",
              ],
              answer: "To focus attention on important events",
            },
          ],
        },

        {
          title: "Vulnerability Management",
          content: `
Vulnerability management is the process of identifying, evaluating, prioritizing, and addressing security weaknesses.

Organizations can use vulnerability scanners to identify known weaknesses.

Not every vulnerability has the same level of risk.

Prioritization can consider factors such as severity, exploitability, exposure, affected systems, and business impact.

Remediation may involve applying patches, changing configurations, removing software, or adding compensating controls.

After remediation, systems should be checked again to confirm that the issue has been addressed.
          `,
          quiz: [
            {
              question: "What is vulnerability management?",
              options: [
                "Identifying and addressing security weaknesses",
                "Managing screen settings",
                "Managing printers",
                "Creating websites",
              ],
              answer: "Identifying and addressing security weaknesses",
            },
            {
              question: "What can vulnerability scanners help identify?",
              options: [
                "Known security weaknesses",
                "Keyboard problems",
                "Monitor brightness",
                "User preferences",
              ],
              answer: "Known security weaknesses",
            },
            {
              question: "Why are vulnerabilities prioritized?",
              options: [
                "They can have different levels of risk",
                "All vulnerabilities are identical",
                "To increase disk size",
                "To change usernames",
              ],
              answer: "They can have different levels of risk",
            },
            {
              question: "Which can be a remediation action?",
              options: [
                "Applying a security patch",
                "Sharing passwords",
                "Disabling monitoring",
                "Removing backups",
              ],
              answer: "Applying a security patch",
            },
            {
              question: "What should happen after remediation?",
              options: [
                "Verify that the issue has been addressed",
                "Ignore the system",
                "Delete all logs",
                "Disable security controls",
              ],
              answer: "Verify that the issue has been addressed",
            },
          ],
        },

        {
          title: "Basic Incident Response",
          content: `
An incident is a security event that requires investigation and response.

Incident response is a structured process for handling security incidents.

Common stages include preparation, detection and analysis, containment, eradication, recovery, and lessons learned.

The exact process can vary between organizations.

During an incident, teams should collect relevant information, limit further impact, remove the cause where possible, restore normal operations, and document what happened.

Good preparation includes having contacts, procedures, backups, logging, and appropriate tools ready before an incident occurs.
          `,
          quiz: [
            {
              question: "What is incident response?",
              options: [
                "A structured process for handling security incidents",
                "A method for designing websites",
                "A type of database",
                "A network cable standard",
              ],
              answer:
                "A structured process for handling security incidents",
            },
            {
              question: "What is containment intended to do?",
              options: [
                "Limit further impact",
                "Increase system speed",
                "Delete all evidence",
                "Disable all monitoring",
              ],
              answer: "Limit further impact",
            },
            {
              question: "What is recovery focused on?",
              options: [
                "Restoring normal operations",
                "Creating phishing messages",
                "Removing backups",
                "Changing monitor settings",
              ],
              answer: "Restoring normal operations",
            },
            {
              question: "Why should incidents be documented?",
              options: [
                "To preserve information and support future improvements",
                "To increase storage speed",
                "To remove security controls",
                "To replace authentication",
              ],
              answer:
                "To preserve information and support future improvements",
            },
            {
              question: "What is an important part of preparation?",
              options: [
                "Having procedures and contacts ready",
                "Ignoring security alerts",
                "Removing backups",
                "Sharing passwords",
              ],
              answer: "Having procedures and contacts ready",
            },
          ],
        },

        {
          title: "Final Project: Basic Security Assessment",
          content: `
For the final project, perform a basic security assessment of a small computer environment.

Start by identifying important systems, applications, users, and data.

Check whether accounts use appropriate authentication and access permissions.

Review software versions and identify systems that may need updates.

Check firewall settings and unnecessary network services.

Review backup availability and verify that important data can be recovered.

Look at available logs and identify unusual login or system activity.

Create a simple list of risks and prioritize them based on potential impact.

Finally, recommend practical improvements such as stronger authentication, least privilege, patching, backups, monitoring, and secure configuration.

The goal is to apply fundamental security principles to a realistic environment.
          `,
          quiz: [
            {
              question: "What should be identified first in a basic security assessment?",
              options: [
                "Important systems, applications, users, and data",
                "Only monitor sizes",
                "Only keyboard settings",
                "Only wallpaper preferences",
              ],
              answer:
                "Important systems, applications, users, and data",
            },
            {
              question: "What should be reviewed for user accounts?",
              options: [
                "Authentication and access permissions",
                "Screen brightness",
                "Keyboard color",
                "Printer paper size",
              ],
              answer: "Authentication and access permissions",
            },
            {
              question: "Why should software updates be reviewed?",
              options: [
                "Updates can address security vulnerabilities",
                "They always increase storage",
                "They remove all security controls",
                "They replace backups",
              ],
              answer: "Updates can address security vulnerabilities",
            },
            {
              question: "What should be checked for important data?",
              options: [
                "Whether backups can support recovery",
                "Only file names",
                "Only screen resolution",
                "Only keyboard settings",
              ],
              answer: "Whether backups can support recovery",
            },
            {
              question: "Which is a practical security improvement?",
              options: [
                "Using least privilege and strong authentication",
                "Sharing administrator passwords",
                "Disabling monitoring",
                "Ignoring security updates",
              ],
              answer: "Using least privilege and strong authentication",
            },
          ],
        },
      ],
    },
  ],
};

export default securityFundamentalsCourse;
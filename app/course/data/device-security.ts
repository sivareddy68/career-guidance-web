const deviceSecurityCourse = {
  title: "Device Security",
  description:
    "Learn embedded device security, authentication, secure communication, access control, firmware protection, and IoT security practices.",

  weeks: [
    {
      title: "Week 1: Device Security Fundamentals",
      description:
        "Understand common security threats and the basic security requirements of embedded devices.",

      lessons: [
        {
          title: "Introduction to Device Security",
          content: `
Device security protects embedded devices, their data, communication, and software from unauthorized access or modification.

Embedded devices are used in IoT systems, vehicles, industrial systems, healthcare equipment, and smart homes.

Security is important because compromised devices can expose sensitive information or perform unwanted actions.

A secure device should protect confidentiality, integrity, availability, and authorized access.
          `,
          quiz: [
            {
              question: "What is the main purpose of device security?",
              options: [
                "Protect devices and their data",
                "Increase screen size",
                "Increase battery weight",
                "Replace sensors",
              ],
              answer: "Protect devices and their data",
            },
            {
              question: "Where are embedded devices commonly used?",
              options: [
                "IoT systems",
                "Only calculators",
                "Only keyboards",
                "Only printers",
              ],
              answer: "IoT systems",
            },
            {
              question: "A compromised device may?",
              options: [
                "Expose data or perform unauthorized actions",
                "Always become faster",
                "Automatically repair itself",
                "Increase storage",
              ],
              answer: "Expose data or perform unauthorized actions",
            },
            {
              question: "Which is a security requirement?",
              options: ["Integrity", "Brightness", "Screen size", "Speaker volume"],
              answer: "Integrity",
            },
            {
              question: "Device security should protect?",
              options: ["Data and software", "Only the display", "Only the battery", "Only the enclosure"],
              answer: "Data and software",
            },
          ],
        },

        {
          title: "Security Threats",
          content: `
Embedded devices can face different security threats.

Unauthorized access can allow an attacker to use device functions without permission.

Malware can modify or damage device software.

Data interception can expose information transmitted over a network.

Physical attacks can involve unauthorized access to the hardware or storage.

Understanding threats helps developers design suitable security controls.
          `,
          quiz: [
            {
              question: "What can unauthorized access cause?",
              options: [
                "Unapproved use of device functions",
                "Better battery life",
                "More storage",
                "Faster display",
              ],
              answer: "Unapproved use of device functions",
            },
            {
              question: "Malware can?",
              options: ["Modify or damage software", "Increase RAM", "Improve sensors", "Repair hardware"],
              answer: "Modify or damage software",
            },
            {
              question: "Data interception can expose?",
              options: ["Network information", "Only battery power", "Only GPIO pins", "Only clock signals"],
              answer: "Network information",
            },
            {
              question: "Physical attacks target?",
              options: ["Hardware or storage", "Only software documentation", "Only cloud dashboards", "Only displays"],
              answer: "Hardware or storage",
            },
            {
              question: "Threat analysis helps developers?",
              options: [
                "Choose security controls",
                "Remove all sensors",
                "Increase display size",
                "Reduce memory automatically",
              ],
              answer: "Choose security controls",
            },
          ],
        },

        {
          title: "CIA Security Principles",
          content: `
The CIA triad represents three important security principles: Confidentiality, Integrity, and Availability.

Confidentiality means preventing unauthorized people from accessing protected information.

Integrity means ensuring that data and software are not changed without authorization.

Availability means keeping systems and services accessible when they are needed.

These principles provide a basic framework for designing secure embedded systems.
          `,
          quiz: [
            {
              question: "What does CIA stand for in security?",
              options: [
                "Confidentiality, Integrity, Availability",
                "Control, Internet, Access",
                "Communication, IoT, Application",
                "Code, Interface, Architecture",
              ],
              answer: "Confidentiality, Integrity, Availability",
            },
            {
              question: "Confidentiality protects against?",
              options: ["Unauthorized information access", "Power failure", "Low battery", "High temperature"],
              answer: "Unauthorized information access",
            },
            {
              question: "Integrity protects?",
              options: ["Data from unauthorized modification", "Only power supply", "Only display", "Only cables"],
              answer: "Data from unauthorized modification",
            },
            {
              question: "Availability means?",
              options: ["System remains accessible when needed", "Data is always public", "Passwords are removed", "Hardware is replaced"],
              answer: "System remains accessible when needed",
            },
            {
              question: "CIA principles are used in?",
              options: ["Security design", "Only circuit design", "Only PCB layout", "Only sensor selection"],
              answer: "Security design",
            },
          ],
        },

        {
          title: "Security in IoT Devices",
          content: `
IoT devices communicate through networks and may interact with cloud services.

This creates additional security requirements.

Devices should authenticate with cloud services and use protected communication.

Access to device functions should be limited to authorized users or systems.

Security updates should also be considered because vulnerabilities may be discovered after deployment.
          `,
          quiz: [
            {
              question: "IoT devices commonly communicate through?",
              options: ["Networks", "Only GPIO", "Only timers", "Only ADC"],
              answer: "Networks",
            },
            {
              question: "IoT devices should authenticate with?",
              options: ["Cloud services when required", "Only LEDs", "Only sensors", "Only batteries"],
              answer: "Cloud services when required",
            },
            {
              question: "Device functions should be available to?",
              options: ["Authorized users or systems", "Everyone", "Unknown devices", "No one"],
              answer: "Authorized users or systems",
            },
            {
              question: "Security updates are needed because?",
              options: [
                "New vulnerabilities may be discovered",
                "Sensors always fail",
                "Displays change automatically",
                "Batteries become larger",
              ],
              answer: "New vulnerabilities may be discovered",
            },
            {
              question: "IoT security protects?",
              options: ["Devices and communication", "Only screens", "Only batteries", "Only keyboards"],
              answer: "Devices and communication",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Authentication and Access Control",
      description:
        "Learn authentication, authorization, passwords, keys, and secure access to embedded devices.",

      lessons: [
        {
          title: "Authentication",
          content: `
Authentication verifies the identity of a user, device, or service.

Embedded systems may use passwords, tokens, certificates, or cryptographic keys for authentication.

For example, an IoT device may need to prove its identity before connecting to a cloud service.

Strong authentication reduces the risk of unauthorized access.

Authentication should be combined with secure credential management.
          `,
          quiz: [
            {
              question: "What does authentication verify?",
              options: ["Identity", "Temperature", "Voltage", "Memory size"],
              answer: "Identity",
            },
            {
              question: "Which can be used for authentication?",
              options: ["Passwords and certificates", "GPIO pins", "PWM signals", "ADC values"],
              answer: "Passwords and certificates",
            },
            {
              question: "An IoT device may authenticate before connecting to?",
              options: ["Cloud service", "LED", "GPIO pin", "Battery"],
              answer: "Cloud service",
            },
            {
              question: "Strong authentication reduces?",
              options: ["Unauthorized access", "Power consumption always", "Screen brightness", "Sensor noise"],
              answer: "Unauthorized access",
            },
            {
              question: "Authentication should be combined with?",
              options: ["Secure credential management", "Public passwords", "Open access", "No protection"],
              answer: "Secure credential management",
            },
          ],
        },

        {
          title: "Authorization and Access Control",
          content: `
Authentication identifies a user or device, while authorization determines what that identity is allowed to do.

Access control can limit which resources a device or user can access.

For example, a monitoring device may be allowed to read sensor data but not change system configuration.

Using least privilege reduces the impact of a compromised account or device.
          `,
          quiz: [
            {
              question: "What does authorization determine?",
              options: ["Allowed actions", "Identity", "Temperature", "Battery level"],
              answer: "Allowed actions",
            },
            {
              question: "Access control limits?",
              options: ["Resource access", "CPU speed", "Screen size", "Sensor voltage"],
              answer: "Resource access",
            },
            {
              question: "A monitoring device may be allowed to?",
              options: ["Read sensor data", "Change everything", "Disable all security", "Access every device"],
              answer: "Read sensor data",
            },
            {
              question: "Least privilege means?",
              options: [
                "Give only required permissions",
                "Give every permission",
                "Remove authentication",
                "Make all data public",
              ],
              answer: "Give only required permissions",
            },
            {
              question: "Authorization occurs after?",
              options: ["Authentication", "Power-off", "Compilation", "PCB manufacturing"],
              answer: "Authentication",
            },
          ],
        },

        {
          title: "Secure Credential Management",
          content: `
Credentials such as passwords, API keys, and tokens should be protected.

Hard-coding sensitive credentials directly into public source code can expose them.

Secure storage mechanisms can be used to protect important secrets.

Credentials should have appropriate permissions and should be changed or revoked when necessary.

Developers should avoid sharing sensitive credentials through source code repositories or public messages.
          `,
          quiz: [
            {
              question: "Which is a sensitive credential?",
              options: ["API key", "LED color", "GPIO number", "Clock frequency"],
              answer: "API key",
            },
            {
              question: "Sensitive credentials should be?",
              options: ["Protected", "Published publicly", "Shared everywhere", "Ignored"],
              answer: "Protected",
            },
            {
              question: "Hard-coding credentials can?",
              options: ["Expose secrets", "Improve security", "Increase storage", "Reduce network traffic"],
              answer: "Expose secrets",
            },
            {
              question: "Credentials may need to be?",
              options: ["Changed or revoked", "Published", "Removed from security systems", "Shared publicly"],
              answer: "Changed or revoked",
            },
            {
              question: "Developers should avoid placing secrets in?",
              options: ["Public source repositories", "Secure storage", "Protected systems", "Secret managers"],
              answer: "Public source repositories",
            },
          ],
        },

        {
          title: "Secure Device Access",
          content: `
Device interfaces such as debugging ports, configuration interfaces, and network services should be protected.

Unused interfaces should be disabled when appropriate.

Access to sensitive operations should require authorization.

Devices should also use secure configuration settings and avoid unnecessary services.

Reducing the exposed attack surface makes it harder for unauthorized users to interact with the device.
          `,
          quiz: [
            {
              question: "Device interfaces should be?",
              options: ["Protected", "Always public", "Always disabled", "Ignored"],
              answer: "Protected",
            },
            {
              question: "Unused interfaces should be?",
              options: ["Disabled when appropriate", "Published", "Opened to everyone", "Ignored"],
              answer: "Disabled when appropriate",
            },
            {
              question: "Sensitive operations should require?",
              options: ["Authorization", "No access control", "Public access", "No authentication"],
              answer: "Authorization",
            },
            {
              question: "Reducing exposed interfaces reduces?",
              options: ["Attack surface", "Battery size", "Screen size", "CPU frequency"],
              answer: "Attack surface",
            },
            {
              question: "Secure configuration helps?",
              options: ["Protect device access", "Increase display brightness", "Replace sensors", "Remove storage"],
              answer: "Protect device access",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Secure Communication and Firmware",
      description:
        "Learn encryption, secure communication, firmware protection, secure boot, and software updates.",

      lessons: [
        {
          title: "Encryption Basics",
          content: `
Encryption converts readable information into a protected form so unauthorized users cannot easily understand it.

Encrypted communication is important when embedded devices send sensitive information over networks.

Encryption uses cryptographic algorithms and keys.

The receiving system uses the appropriate key or mechanism to recover the original information.

Encryption helps protect confidentiality during communication and storage.
          `,
          quiz: [
            {
              question: "What is the purpose of encryption?",
              options: ["Protect information", "Increase CPU size", "Replace sensors", "Increase voltage"],
              answer: "Protect information",
            },
            {
              question: "Encryption protects mainly?",
              options: ["Confidentiality", "Screen size", "Battery weight", "GPIO count"],
              answer: "Confidentiality",
            },
            {
              question: "Encryption uses?",
              options: ["Cryptographic algorithms and keys", "Only GPIO", "Only ADC", "Only PWM"],
              answer: "Cryptographic algorithms and keys",
            },
            {
              question: "Encrypted communication is useful for?",
              options: ["Network security", "Only display control", "Only battery charging", "Only PCB design"],
              answer: "Network security",
            },
            {
              question: "The receiving system uses cryptographic information to?",
              options: ["Recover protected data", "Increase voltage", "Replace hardware", "Disable networking"],
              answer: "Recover protected data",
            },
          ],
        },

        {
          title: "Secure Network Communication",
          content: `
Embedded devices often communicate with cloud services or other devices over networks.

Secure protocols can protect information during transmission.

TLS is commonly used to provide encrypted communication for many network applications.

Devices should verify the identity of the remote service when required.

Secure communication helps reduce risks such as unauthorized reading or modification of transmitted data.
          `,
          quiz: [
            {
              question: "What can protect network communication?",
              options: ["TLS", "GPIO", "ADC", "PWM"],
              answer: "TLS",
            },
            {
              question: "Secure communication protects data during?",
              options: ["Transmission", "Only manufacturing", "Only booting", "Only storage"],
              answer: "Transmission",
            },
            {
              question: "A device may verify the identity of?",
              options: ["Remote service", "LED", "Battery", "GPIO pin"],
              answer: "Remote service",
            },
            {
              question: "Secure communication reduces?",
              options: ["Unauthorized data access", "Sensor size", "CPU size", "Battery capacity"],
              answer: "Unauthorized data access",
            },
            {
              question: "TLS is related to?",
              options: ["Secure network communication", "GPIO control", "ADC conversion", "PWM generation"],
              answer: "Secure network communication",
            },
          ],
        },

        {
          title: "Secure Boot",
          content: `
Secure boot helps ensure that only trusted software is executed during device startup.

The boot process verifies firmware before allowing it to run.

If firmware is not trusted or has been modified unexpectedly, the device can prevent or restrict execution depending on its security design.

Secure boot helps protect devices against unauthorized firmware modification.
          `,
          quiz: [
            {
              question: "What does secure boot verify?",
              options: ["Firmware", "Battery voltage", "Screen brightness", "GPIO level"],
              answer: "Firmware",
            },
            {
              question: "Secure boot operates during?",
              options: ["Device startup", "Only shutdown", "Only network transfer", "Only sensor reading"],
              answer: "Device startup",
            },
            {
              question: "Secure boot helps prevent?",
              options: ["Unauthorized firmware execution", "Battery charging", "Sensor measurement", "Display output"],
              answer: "Unauthorized firmware execution",
            },
            {
              question: "Trusted software is allowed to?",
              options: ["Execute", "Always be deleted", "Remain inaccessible", "Disable the processor"],
              answer: "Execute",
            },
            {
              question: "Secure boot improves?",
              options: ["Firmware security", "Screen resolution", "Battery capacity", "Sensor accuracy"],
              answer: "Firmware security",
            },
          ],
        },

        {
          title: "Secure Firmware Updates",
          content: `
Embedded devices may need firmware updates to fix bugs and security vulnerabilities.

Updates should be delivered through a trusted process.

Firmware authenticity and integrity should be checked before installation.

Devices should also handle failed updates safely so that an interrupted update does not leave the system unusable.

Secure update mechanisms help maintain device security throughout its lifetime.
          `,
          quiz: [
            {
              question: "Why are firmware updates needed?",
              options: [
                "To fix bugs and security vulnerabilities",
                "Only to change screen color",
                "Only to increase battery size",
                "Only to replace sensors",
              ],
              answer: "To fix bugs and security vulnerabilities",
            },
            {
              question: "Firmware updates should use?",
              options: ["Trusted processes", "Public unknown files", "Random sources", "No verification"],
              answer: "Trusted processes",
            },
            {
              question: "Before installation, firmware should be checked for?",
              options: ["Authenticity and integrity", "Screen size", "Battery weight", "GPIO count"],
              answer: "Authenticity and integrity",
            },
            {
              question: "A secure update system should handle?",
              options: ["Failed updates", "Only successful updates", "Only sensor readings", "Only display settings"],
              answer: "Failed updates",
            },
            {
              question: "Secure updates help protect devices?",
              options: ["Throughout their lifetime", "Only before deployment", "Only during manufacturing", "Never"],
              answer: "Throughout their lifetime",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Device Security",
      description:
        "Apply security concepts to embedded and IoT systems and learn practical security practices.",

      lessons: [
        {
          title: "Secure IoT Device Design",
          content: `
Security should be considered from the beginning of an IoT project.

The device should use authentication, protected communication, secure credential storage, and appropriate access control.

Unused services and interfaces should be disabled when possible.

The system should also support secure updates and monitoring.

A secure design reduces risks before the device is deployed in the real world.
          `,
          quiz: [
            {
              question: "When should security be considered?",
              options: ["From the beginning of the project", "Only after deployment", "Only after an attack", "Never"],
              answer: "From the beginning of the project",
            },
            {
              question: "A secure IoT device should use?",
              options: [
                "Authentication and access control",
                "Public credentials",
                "No encryption",
                "Open access",
              ],
              answer: "Authentication and access control",
            },
            {
              question: "Unused services should be?",
              options: ["Disabled when possible", "Opened publicly", "Ignored", "Shared"],
              answer: "Disabled when possible",
            },
            {
              question: "Secure updates help?",
              options: ["Maintain device security", "Increase screen size", "Replace hardware", "Remove sensors"],
              answer: "Maintain device security",
            },
            {
              question: "Security-by-design reduces?",
              options: ["Security risks", "Sensor readings", "Network availability", "Storage capacity"],
              answer: "Security risks",
            },
          ],
        },

        {
          title: "Device Security Testing",
          content: `
Security testing checks whether a device and its software resist unauthorized access and common attacks.

Testing may include checking authentication, access control, network communication, firmware updates, and exposed interfaces.

Developers can inspect logs and test abnormal situations.

Security testing should be performed throughout development rather than only at the final stage.

Regular testing helps identify weaknesses before deployment.
          `,
          quiz: [
            {
              question: "What is the purpose of security testing?",
              options: ["Find security weaknesses", "Increase display size", "Replace sensors", "Increase voltage"],
              answer: "Find security weaknesses",
            },
            {
              question: "Security testing can check?",
              options: ["Authentication", "Only screen brightness", "Only battery weight", "Only GPIO voltage"],
              answer: "Authentication",
            },
            {
              question: "Developers can inspect?",
              options: ["Logs", "Only LEDs", "Only cables", "Only batteries"],
              answer: "Logs",
            },
            {
              question: "Security testing should happen?",
              options: ["Throughout development", "Only after deployment", "Never", "Only during manufacturing"],
              answer: "Throughout development",
            },
            {
              question: "Regular testing helps identify?",
              options: ["Security weaknesses", "Only sensor values", "Only CPU speed", "Only display problems"],
              answer: "Security weaknesses",
            },
          ],
        },

        {
          title: "Security Monitoring",
          content: `
Security monitoring helps detect unusual device or network activity.

An IoT system can monitor login attempts, communication errors, device status, and other security-related events.

Logs can help developers investigate problems.

Monitoring can also help identify repeated unauthorized access attempts or unexpected device behavior.

Security monitoring is especially useful when many devices are deployed.
          `,
          quiz: [
            {
              question: "What does security monitoring detect?",
              options: ["Unusual activity", "Only temperature", "Only battery voltage", "Only screen size"],
              answer: "Unusual activity",
            },
            {
              question: "What can be monitored?",
              options: ["Login attempts", "Only GPIO labels", "Only PCB size", "Only display color"],
              answer: "Login attempts",
            },
            {
              question: "Logs can help with?",
              options: ["Security investigation", "Battery charging", "Sensor manufacturing", "Screen replacement"],
              answer: "Security investigation",
            },
            {
              question: "Monitoring can identify?",
              options: ["Unauthorized access attempts", "Only CPU temperature", "Only ADC values", "Only PWM signals"],
              answer: "Unauthorized access attempts",
            },
            {
              question: "Monitoring is especially useful when?",
              options: ["Many devices are deployed", "There is no network", "Only one sensor exists", "The device is powered off"],
              answer: "Many devices are deployed",
            },
          ],
        },

        {
          title: "Mini Project: Secure IoT Device",
          content: `
Build a basic secure IoT device using an ESP32 and a sensor.

The ESP32 reads sensor data and connects to a cloud service.

Use authentication for the cloud connection and protect the communication channel.

Store credentials securely and restrict access to device functions.

Add a secure firmware update approach and monitor important device events.

The project demonstrates how authentication, encryption, access control, firmware security, and monitoring work together in an IoT system.
          `,
          quiz: [
            {
              question: "Which controller can be used in the project?",
              options: ["ESP32", "Only keyboard", "Only printer", "Only monitor"],
              answer: "ESP32",
            },
            {
              question: "What should protect the cloud connection?",
              options: ["Authentication and secure communication", "Public credentials", "No security", "Open access"],
              answer: "Authentication and secure communication",
            },
            {
              question: "Credentials should be?",
              options: ["Stored securely", "Published publicly", "Shared with everyone", "Ignored"],
              answer: "Stored securely",
            },
            {
              question: "What should be monitored?",
              options: ["Important device events", "Only screen color", "Only keyboard input", "Only battery weight"],
              answer: "Important device events",
            },
            {
              question: "The project demonstrates?",
              options: [
                "Practical IoT security",
                "Only GPIO programming",
                "Only ADC conversion",
                "Only display control",
              ],
              answer: "Practical IoT security",
            },
          ],
        },
      ],
    },
  ],
};

export default deviceSecurityCourse;
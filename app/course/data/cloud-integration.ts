const cloudIntegrationCourse = {
  title: "Cloud Integration",
  description:
    "Learn cloud concepts, IoT cloud integration, APIs, data storage, dashboards, and connecting embedded devices to cloud platforms.",

  weeks: [
    {
      title: "Week 1: Cloud Fundamentals",
      description:
        "Understand cloud computing, services, architecture, and how cloud systems support IoT applications.",

      lessons: [
        {
          title: "Introduction to Cloud Computing",
          content: `
Cloud computing provides computing resources such as servers, storage, databases, and software through a network.

Instead of keeping all processing and storage on a local computer, applications can use cloud services.

Cloud computing is useful in IoT because devices can send data to remote servers for storage, processing, and monitoring.

Common cloud applications include data storage, web applications, analytics, device management, and IoT monitoring.
          `,
          quiz: [
            {
              question: "What does cloud computing provide?",
              options: [
                "Computing resources through a network",
                "Only physical cables",
                "Only microcontrollers",
                "Only sensors",
              ],
              answer: "Computing resources through a network",
            },
            {
              question: "Cloud computing can provide?",
              options: ["Storage and computing", "Only GPIO", "Only ADC", "Only PWM"],
              answer: "Storage and computing",
            },
            {
              question: "Why is cloud useful in IoT?",
              options: [
                "For remote storage and processing",
                "To replace every sensor",
                "To remove all networks",
                "To manufacture microcontrollers",
              ],
              answer: "For remote storage and processing",
            },
            {
              question: "Which is a common cloud application?",
              options: ["Data storage", "GPIO control only", "Battery charging", "PCB manufacturing"],
              answer: "Data storage",
            },
            {
              question: "Cloud services are accessed through?",
              options: ["A network", "Only GPIO", "Only SPI", "Only ADC"],
              answer: "A network",
            },
          ],
        },

        {
          title: "Cloud Service Models",
          content: `
Cloud services are commonly grouped into IaaS, PaaS, and SaaS.

Infrastructure as a Service (IaaS) provides computing infrastructure such as virtual machines and storage.

Platform as a Service (PaaS) provides a platform for developing and deploying applications without managing all the underlying infrastructure.

Software as a Service (SaaS) provides ready-to-use software through the network.

Understanding these models helps developers select suitable cloud services.
          `,
          quiz: [
            {
              question: "What does IaaS stand for?",
              options: [
                "Infrastructure as a Service",
                "Internet as a System",
                "IoT as a Service",
                "Interface as a Server",
              ],
              answer: "Infrastructure as a Service",
            },
            {
              question: "What does PaaS provide?",
              options: [
                "Application development platform",
                "Only physical sensors",
                "Only cables",
                "Only databases",
              ],
              answer: "Application development platform",
            },
            {
              question: "What does SaaS provide?",
              options: [
                "Ready-to-use software",
                "Only processors",
                "Only network cables",
                "Only storage chips",
              ],
              answer: "Ready-to-use software",
            },
            {
              question: "Which model provides virtual machines?",
              options: ["IaaS", "SaaS", "GPIO", "PWM"],
              answer: "IaaS",
            },
            {
              question: "Cloud service models help developers?",
              options: [
                "Select suitable cloud services",
                "Design CPUs",
                "Build sensors",
                "Program only GPIO",
              ],
              answer: "Select suitable cloud services",
            },
          ],
        },

        {
          title: "Cloud Architecture",
          content: `
A basic cloud-based IoT system contains devices, a network, cloud services, storage, processing, and a user application.

The device collects data from sensors and sends it through a network.

Cloud services receive the data and store or process it.

A dashboard or application can then display the information to the user.

This architecture allows users to monitor devices from different locations.
          `,
          quiz: [
            {
              question: "What collects data in an IoT cloud system?",
              options: ["Sensors and devices", "Cloud storage only", "Dashboard only", "Database only"],
              answer: "Sensors and devices",
            },
            {
              question: "Where can IoT data be stored?",
              options: ["Cloud storage", "Only GPIO", "Only RAM of a sensor", "Only a keyboard"],
              answer: "Cloud storage",
            },
            {
              question: "What can process IoT data?",
              options: ["Cloud services", "GPIO pin", "LED", "Switch"],
              answer: "Cloud services",
            },
            {
              question: "Who can display cloud data?",
              options: ["Dashboard or application", "Only sensor", "Only broker", "Only ADC"],
              answer: "Dashboard or application",
            },
            {
              question: "Cloud architecture supports?",
              options: [
                "Remote monitoring",
                "Only local programming",
                "Only hardware manufacturing",
                "Only offline storage",
              ],
              answer: "Remote monitoring",
            },
          ],
        },

        {
          title: "Cloud and IoT",
          content: `
Cloud computing and IoT work together to handle large amounts of device data.

An IoT device can collect information such as temperature, humidity, location, or machine status.

The device sends this information to a cloud platform.

The cloud can store the data, analyze it, generate alerts, and provide dashboards.

This makes cloud integration useful for smart agriculture, industrial monitoring, smart homes, and other IoT applications.
          `,
          quiz: [
            {
              question: "IoT devices commonly collect?",
              options: [
                "Sensor data",
                "Only source code",
                "Only images",
                "Only passwords",
              ],
              answer: "Sensor data",
            },
            {
              question: "Cloud platforms can?",
              options: [
                "Store and analyze data",
                "Only turn LEDs on",
                "Only read GPIO",
                "Only manufacture sensors",
              ],
              answer: "Store and analyze data",
            },
            {
              question: "Cloud integration is useful in?",
              options: ["Smart agriculture", "Only calculators", "Only keyboards", "Only printers"],
              answer: "Smart agriculture",
            },
            {
              question: "Cloud systems can generate?",
              options: ["Alerts", "Only voltage", "Only PWM", "Only GPIO"],
              answer: "Alerts",
            },
            {
              question: "IoT and cloud integration enables?",
              options: ["Remote data access", "No networking", "No storage", "Only local processing"],
              answer: "Remote data access",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Connecting Devices to Cloud",
      description:
        "Learn device connectivity, APIs, MQTT, HTTP, and sending IoT data to cloud platforms.",

      lessons: [
        {
          title: "Device-to-Cloud Communication",
          content: `
A device needs a network connection to communicate with a cloud service.

Microcontrollers such as ESP32 can use Wi-Fi to send sensor information to a cloud platform.

The communication can use protocols such as MQTT or HTTP.

The device collects sensor data, formats the information, and sends it to the cloud.

The cloud receives the data and stores or processes it for further use.
          `,
          quiz: [
            {
              question: "What does a device need to communicate with the cloud?",
              options: ["Network connection", "Only GPIO", "Only ADC", "Only PWM"],
              answer: "Network connection",
            },
            {
              question: "Which ESP32 feature is useful for cloud communication?",
              options: ["Wi-Fi", "Only GPIO", "Only ADC", "Only timer"],
              answer: "Wi-Fi",
            },
            {
              question: "Which protocol can be used for device-cloud communication?",
              options: ["MQTT", "GPIO", "PWM", "ADC"],
              answer: "MQTT",
            },
            {
              question: "What does the device collect?",
              options: ["Sensor data", "Cloud passwords only", "Source code only", "CPU instructions"],
              answer: "Sensor data",
            },
            {
              question: "The cloud can?",
              options: ["Store and process device data", "Only provide power", "Only control GPIO", "Only compile code"],
              answer: "Store and process device data",
            },
          ],
        },

        {
          title: "HTTP and REST APIs",
          content: `
HTTP is widely used for communication between applications and cloud services.

A REST API provides endpoints that applications can use to send or request data.

An IoT device can send sensor information to a cloud API using an HTTP request.

The cloud server processes the request and may store the received information in a database.

REST APIs are commonly used when devices and applications need structured communication with cloud services.
          `,
          quiz: [
            {
              question: "HTTP is used for?",
              options: [
                "Network communication",
                "Only GPIO control",
                "Only analog conversion",
                "Only memory storage",
              ],
              answer: "Network communication",
            },
            {
              question: "What does a REST API provide?",
              options: ["Endpoints for communication", "Only sensors", "Only processors", "Only displays"],
              answer: "Endpoints for communication",
            },
            {
              question: "An IoT device can send sensor data using?",
              options: ["HTTP request", "GPIO only", "PWM only", "ADC only"],
              answer: "HTTP request",
            },
            {
              question: "A cloud API can store data in?",
              options: ["Database", "GPIO pin", "Timer", "LED"],
              answer: "Database",
            },
            {
              question: "REST APIs are useful for?",
              options: [
                "Structured application communication",
                "Only hardware manufacturing",
                "Only battery charging",
                "Only display control",
              ],
              answer: "Structured application communication",
            },
          ],
        },

        {
          title: "MQTT Cloud Integration",
          content: `
MQTT is commonly used to connect IoT devices with cloud platforms.

A device can publish sensor data to an MQTT topic.

A cloud service or application can subscribe to that topic and process the received data.

The reverse is also possible. A cloud application can publish a command to a topic, and the device can subscribe to the topic.

This provides two-way communication between IoT devices and cloud applications.
          `,
          quiz: [
            {
              question: "MQTT is commonly used for?",
              options: ["IoT cloud communication", "Only image editing", "Only programming", "Only printing"],
              answer: "IoT cloud communication",
            },
            {
              question: "A device can send data using?",
              options: ["MQTT publish", "Only GPIO", "Only PWM", "Only ADC"],
              answer: "MQTT publish",
            },
            {
              question: "A cloud application can receive MQTT data by?",
              options: ["Subscribing to a topic", "Using a GPIO pin", "Using an ADC", "Using a timer"],
              answer: "Subscribing to a topic",
            },
            {
              question: "Can cloud applications send commands using MQTT?",
              options: ["Yes", "No", "Only offline", "Only through GPIO"],
              answer: "Yes",
            },
            {
              question: "MQTT supports?",
              options: ["Two-way communication", "Only one-way communication", "No communication", "Only local storage"],
              answer: "Two-way communication",
            },
          ],
        },

        {
          title: "Sending Sensor Data to Cloud",
          content: `
A typical cloud-connected sensor system follows several steps.

First, the microcontroller reads the sensor.

Next, the data is converted into a suitable format such as JSON.

The device then sends the data using MQTT or HTTP.

The cloud service receives the information and stores it in a database.

Finally, an application or dashboard displays the sensor readings.
          `,
          quiz: [
            {
              question: "What is the first step?",
              options: ["Read the sensor", "Display the dashboard", "Create a database", "Generate an alert"],
              answer: "Read the sensor",
            },
            {
              question: "Sensor data can be formatted as?",
              options: ["JSON", "GPIO", "PWM", "ADC"],
              answer: "JSON",
            },
            {
              question: "Which protocols can send sensor data?",
              options: ["MQTT and HTTP", "GPIO and ADC", "PWM and UART only", "SPI only"],
              answer: "MQTT and HTTP",
            },
            {
              question: "Where can cloud data be stored?",
              options: ["Database", "GPIO", "Timer", "LED"],
              answer: "Database",
            },
            {
              question: "What displays the final information?",
              options: ["Dashboard", "Sensor", "GPIO", "ADC"],
              answer: "Dashboard",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Cloud Data and Security",
      description:
        "Learn cloud databases, dashboards, authentication, security, and data management.",

      lessons: [
        {
          title: "Cloud Databases",
          content: `
Cloud databases store information on cloud infrastructure and allow applications to access the data over a network.

IoT systems can store sensor readings such as temperature, humidity, and device status.

Cloud databases make it easier to manage data from many devices.

Applications can query stored data to create reports, charts, and analytics.

The database design should consider the amount of data, access requirements, and storage costs.
          `,
          quiz: [
            {
              question: "What is the purpose of a cloud database?",
              options: ["Store application data", "Generate electricity", "Control GPIO only", "Replace sensors"],
              answer: "Store application data",
            },
            {
              question: "IoT systems can store?",
              options: ["Sensor readings", "Only source code", "Only images", "Only passwords"],
              answer: "Sensor readings",
            },
            {
              question: "Applications can use stored data for?",
              options: ["Reports and charts", "Only GPIO", "Only PWM", "Only ADC"],
              answer: "Reports and charts",
            },
            {
              question: "Cloud databases can support data from?",
              options: ["Many devices", "Only one GPIO", "Only one sensor", "Only one program"],
              answer: "Many devices",
            },
            {
              question: "Database design should consider?",
              options: [
                "Data size and access requirements",
                "Only LED color",
                "Only CPU clock",
                "Only screen size",
              ],
              answer: "Data size and access requirements",
            },
          ],
        },

        {
          title: "Cloud Dashboards",
          content: `
A cloud dashboard provides a visual way to monitor device data.

Sensor values can be displayed using numbers, tables, charts, and status indicators.

For example, a dashboard can show the current temperature and a graph of temperature changes over time.

Dashboards help users understand IoT data without directly connecting to the device.

They are useful for home automation, agriculture, industrial monitoring, and other applications.
          `,
          quiz: [
            {
              question: "What does a cloud dashboard provide?",
              options: ["Visual data monitoring", "Only hardware control", "Only programming", "Only storage chips"],
              answer: "Visual data monitoring",
            },
            {
              question: "Sensor values can be displayed using?",
              options: ["Charts", "Only GPIO", "Only ADC", "Only registers"],
              answer: "Charts",
            },
            {
              question: "A dashboard can show?",
              options: ["Temperature trends", "Only source code", "Only CPU instructions", "Only passwords"],
              answer: "Temperature trends",
            },
            {
              question: "Dashboards help users monitor devices?",
              options: ["Remotely", "Only after removing sensors", "Only offline", "Never"],
              answer: "Remotely",
            },
            {
              question: "Cloud dashboards are useful in?",
              options: ["Industrial monitoring", "Only text editing", "Only gaming", "Only printing"],
              answer: "Industrial monitoring",
            },
          ],
        },

        {
          title: "Cloud Authentication",
          content: `
Cloud applications need to identify users and devices before allowing access to resources.

Authentication verifies the identity of a user or device.

Authorization determines what that authenticated user or device is allowed to access.

IoT systems may use API keys, tokens, usernames, passwords, certificates, or other authentication mechanisms.

Credentials should be protected and should not be placed directly in public source code.
          `,
          quiz: [
            {
              question: "What does authentication verify?",
              options: ["Identity", "Temperature", "Voltage", "Memory size"],
              answer: "Identity",
            },
            {
              question: "What does authorization determine?",
              options: ["Access permissions", "CPU speed", "Sensor type", "Battery voltage"],
              answer: "Access permissions",
            },
            {
              question: "Which can be used for authentication?",
              options: ["API keys", "GPIO pins", "PWM signals", "ADC values"],
              answer: "API keys",
            },
            {
              question: "Credentials should be?",
              options: ["Protected", "Published publicly", "Shared everywhere", "Ignored"],
              answer: "Protected",
            },
            {
              question: "Authentication is important for?",
              options: ["Secure cloud access", "Only display control", "Only sensor reading", "Only PWM"],
              answer: "Secure cloud access",
            },
          ],
        },

        {
          title: "Cloud Security",
          content: `
Security is an important part of cloud integration.

Communication should be protected using encryption where appropriate.

Devices should use secure authentication and access permissions.

Cloud resources should be configured so that only authorized users and devices can access them.

Sensitive information such as passwords, API keys, and access tokens should be protected.

Security should be considered during system design rather than added only at the end.
          `,
          quiz: [
            {
              question: "Why is cloud security important?",
              options: ["To protect data and resources", "To increase CPU size", "To replace sensors", "To remove networks"],
              answer: "To protect data and resources",
            },
            {
              question: "Cloud communication can be protected using?",
              options: ["Encryption", "GPIO", "PWM", "ADC"],
              answer: "Encryption",
            },
            {
              question: "Who should access protected cloud resources?",
              options: ["Authorized users and devices", "Everyone", "Unknown devices", "No one"],
              answer: "Authorized users and devices",
            },
            {
              question: "API keys should be?",
              options: ["Protected", "Shared publicly", "Posted online", "Ignored"],
              answer: "Protected",
            },
            {
              question: "Security should be considered?",
              options: ["During system design", "Only after failure", "Never", "Only during testing"],
              answer: "During system design",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Cloud Integration",
      description:
        "Apply cloud integration concepts to embedded and IoT applications.",

      lessons: [
        {
          title: "Cloud Integration with ESP32",
          content: `
ESP32 can connect sensors and embedded devices to cloud services using Wi-Fi.

The ESP32 reads sensor values and sends them to a cloud platform through MQTT or HTTP.

The cloud stores the information and provides it to dashboards or applications.

The ESP32 can also receive commands from the cloud.

This makes ESP32 a useful platform for developing cloud-connected IoT prototypes.
          `,
          quiz: [
            {
              question: "Which ESP32 feature connects it to cloud services?",
              options: ["Wi-Fi", "Only GPIO", "Only ADC", "Only PWM"],
              answer: "Wi-Fi",
            },
            {
              question: "ESP32 can send sensor data using?",
              options: ["MQTT or HTTP", "Only GPIO", "Only ADC", "Only PWM"],
              answer: "MQTT or HTTP",
            },
            {
              question: "Where can the cloud store sensor data?",
              options: ["Cloud database", "GPIO pin", "Timer", "LED"],
              answer: "Cloud database",
            },
            {
              question: "Can ESP32 receive commands from the cloud?",
              options: ["Yes", "No", "Only offline", "Only through ADC"],
              answer: "Yes",
            },
            {
              question: "ESP32 cloud projects are examples of?",
              options: ["IoT applications", "Only desktop applications", "Only offline systems", "Only databases"],
              answer: "IoT applications",
            },
          ],
        },

        {
          title: "Cloud Alerts and Automation",
          content: `
Cloud systems can monitor incoming sensor data and generate alerts when conditions are met.

For example, a smart agriculture system can send an alert when soil moisture becomes too low.

A cloud application can also trigger actions based on sensor data.

For example, it can send a command to a device to turn on a water pump.

This allows IoT systems to perform monitoring and automation remotely.
          `,
          quiz: [
            {
              question: "Cloud systems can generate alerts based on?",
              options: ["Sensor conditions", "Only CPU speed", "Only screen size", "Only keyboard input"],
              answer: "Sensor conditions",
            },
            {
              question: "Low soil moisture can trigger?",
              options: ["An alert", "Only a compiler", "Only a display driver", "Only a timer"],
              answer: "An alert",
            },
            {
              question: "Cloud systems can trigger?",
              options: ["Device actions", "Only storage", "Only source code", "Only GPIO configuration"],
              answer: "Device actions",
            },
            {
              question: "A smart agriculture system can control?",
              options: ["Water pump", "Only keyboard", "Only monitor", "Only processor"],
              answer: "Water pump",
            },
            {
              question: "Cloud automation allows?",
              options: ["Remote control and monitoring", "Only local storage", "No communication", "Only offline processing"],
              answer: "Remote control and monitoring",
            },
          ],
        },

        {
          title: "Cloud Data Analytics",
          content: `
Cloud platforms can process large amounts of IoT data.

Historical sensor data can be analyzed to identify patterns and trends.

For example, temperature readings collected over several weeks can be used to understand environmental changes.

Analytics can help identify abnormal values and support better decisions.

Cloud-based analytics becomes especially useful when data is collected from many devices.
          `,
          quiz: [
            {
              question: "What can cloud analytics process?",
              options: ["IoT data", "Only GPIO signals", "Only source code", "Only images"],
              answer: "IoT data",
            },
            {
              question: "Historical sensor data can show?",
              options: ["Patterns and trends", "Only CPU speed", "Only voltage", "Only passwords"],
              answer: "Patterns and trends",
            },
            {
              question: "Analytics can help identify?",
              options: ["Abnormal values", "Only GPIO pins", "Only cables", "Only displays"],
              answer: "Abnormal values",
            },
            {
              question: "Cloud analytics is useful when data comes from?",
              options: ["Many devices", "Only one GPIO", "Only one timer", "Only one LED"],
              answer: "Many devices",
            },
            {
              question: "Cloud analytics can support?",
              options: ["Better decisions", "Only hardware assembly", "Only programming syntax", "Only battery charging"],
              answer: "Better decisions",
            },
          ],
        },

        {
          title: "Mini Project: Cloud-Based IoT Monitoring",
          content: `
Build a cloud-connected IoT monitoring system using an ESP32 and a sensor.

The ESP32 reads a sensor such as temperature or soil moisture.

It connects to Wi-Fi and sends the sensor data to a cloud service using MQTT or HTTP.

The cloud stores the received values in a database.

A dashboard displays the current readings and historical data.

As an extension, create an alert when the sensor value crosses a selected threshold.

This project demonstrates the complete flow from sensor to device, network, cloud, database, and dashboard.
          `,
          quiz: [
            {
              question: "What device can be used in the project?",
              options: ["ESP32", "Only keyboard", "Only printer", "Only monitor"],
              answer: "ESP32",
            },
            {
              question: "How does the ESP32 connect to the cloud?",
              options: ["Wi-Fi", "Only GPIO", "Only ADC", "Only PWM"],
              answer: "Wi-Fi",
            },
            {
              question: "Which protocols can be used?",
              options: ["MQTT or HTTP", "Only GPIO", "Only ADC", "Only PWM"],
              answer: "MQTT or HTTP",
            },
            {
              question: "Where can the cloud store the readings?",
              options: ["Database", "GPIO pin", "Timer", "LED"],
              answer: "Database",
            },
            {
              question: "What can be added as an extension?",
              options: ["Sensor threshold alert", "Only another compiler", "Only a keyboard", "Only a display cable"],
              answer: "Sensor threshold alert",
            },
          ],
        },
      ],
    },
  ],
};

export default cloudIntegrationCourse;
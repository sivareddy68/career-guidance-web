const mqttCourse = {
  title: "MQTT",
  description:
    "Learn MQTT messaging, publishers, subscribers, brokers, topics, QoS, and IoT communication.",

  weeks: [
    {
      title: "Week 1: MQTT Fundamentals",
      description:
        "Understand MQTT architecture, communication model, and basic messaging concepts.",

      lessons: [
        {
          title: "Introduction to MQTT",
          content: `
MQTT stands for Message Queuing Telemetry Transport. It is a lightweight messaging protocol commonly used in IoT systems.

MQTT allows devices such as sensors, microcontrollers, and gateways to exchange data with low network overhead.

It is useful when devices have limited processing power, memory, or network bandwidth.

Common MQTT applications include smart homes, industrial monitoring, agriculture, healthcare devices, and environmental monitoring.

The main components of MQTT communication are clients, a broker, publishers, subscribers, topics, and messages.
          `,
          quiz: [
            {
              question: "What does MQTT stand for?",
              options: [
                "Message Queuing Telemetry Transport",
                "Micro Message Transfer Technology",
                "Machine Query Transfer Tool",
                "Message Quality Transport Technology",
              ],
              answer: "Message Queuing Telemetry Transport",
            },
            {
              question: "MQTT is mainly used for?",
              options: [
                "IoT messaging",
                "Image editing",
                "Video compression",
                "Operating system installation",
              ],
              answer: "IoT messaging",
            },
            {
              question: "MQTT is designed to be?",
              options: ["Lightweight", "Very large", "Hardware-only", "Offline-only"],
              answer: "Lightweight",
            },
            {
              question: "Which systems commonly use MQTT?",
              options: ["IoT systems", "Printers only", "Gaming consoles only", "Text editors"],
              answer: "IoT systems",
            },
            {
              question: "MQTT transfers information using?",
              options: ["Messages", "Files only", "Images only", "Programs"],
              answer: "Messages",
            },
          ],
        },

        {
          title: "MQTT Architecture",
          content: `
MQTT uses a client-server style architecture with a broker in the middle.

An MQTT client can be a sensor, microcontroller, computer, or application.

The broker receives messages from publishers and sends them to subscribers who are interested in the corresponding topic.

This design separates the sender and receiver. A publisher does not need to know the exact device receiving the message.

The broker manages connections, topics, subscriptions, and message delivery.
          `,
          quiz: [
            {
              question: "What is the central component in MQTT?",
              options: ["Broker", "Sensor", "GPIO", "ADC"],
              answer: "Broker",
            },
            {
              question: "What can act as an MQTT client?",
              options: ["Microcontroller", "Only a router", "Only a broker", "Only a sensor"],
              answer: "Microcontroller",
            },
            {
              question: "Who receives published messages?",
              options: ["Subscribers", "Only publishers", "Only sensors", "Power supply"],
              answer: "Subscribers",
            },
            {
              question: "The broker manages?",
              options: [
                "Connections and messages",
                "CPU manufacturing",
                "Battery charging only",
                "Display brightness only",
              ],
              answer: "Connections and messages",
            },
            {
              question: "MQTT separates publishers and subscribers using?",
              options: ["A broker", "GPIO", "ADC", "PWM"],
              answer: "A broker",
            },
          ],
        },

        {
          title: "Publisher and Subscriber",
          content: `
MQTT uses the publish-subscribe communication model.

A publisher sends a message to a specific topic. A subscriber subscribes to that topic to receive messages.

For example, a temperature sensor can publish a temperature value to the topic "home/temperature".

A monitoring application can subscribe to the same topic and receive the temperature value.

This model allows many devices to communicate without directly connecting to each other.
          `,
          quiz: [
            {
              question: "Who sends a message in MQTT?",
              options: ["Publisher", "Subscriber", "Only broker", "Router"],
              answer: "Publisher",
            },
            {
              question: "Who receives messages from a topic?",
              options: ["Subscriber", "Publisher only", "GPIO", "ADC"],
              answer: "Subscriber",
            },
            {
              question: "What communication model does MQTT use?",
              options: [
                "Publish-subscribe",
                "Point-to-point only",
                "Parallel bus",
                "Ring communication",
              ],
              answer: "Publish-subscribe",
            },
            {
              question: "A temperature sensor can publish data to a?",
              options: ["Topic", "Register only", "GPIO pin only", "Compiler"],
              answer: "Topic",
            },
            {
              question: "Can multiple subscribers receive messages from one topic?",
              options: ["Yes", "No", "Only one", "Only two"],
              answer: "Yes",
            },
          ],
        },

        {
          title: "MQTT Topics",
          content: `
A topic identifies the destination category of an MQTT message.

Topics are arranged using levels separated by a slash.

Examples include:
home/temperature
home/room1/light
factory/machine1/status

A publisher sends a message to a topic, while subscribers subscribe to one or more topics.

Topics make it easier to organize data from many IoT devices.
          `,
          quiz: [
            {
              question: "What identifies the category of an MQTT message?",
              options: ["Topic", "Port only", "GPIO", "Register"],
              answer: "Topic",
            },
            {
              question: "Which is a valid MQTT topic?",
              options: [
                "home/temperature",
                "home temperature",
                "temperature=home",
                "GPIO.temperature",
              ],
              answer: "home/temperature",
            },
            {
              question: "Topic levels are commonly separated by?",
              options: ["/", "#", "@", ":"],
              answer: "/",
            },
            {
              question: "A subscriber subscribes to?",
              options: ["A topic", "A CPU", "A GPIO register", "A compiler"],
              answer: "A topic",
            },
            {
              question: "Topics help organize?",
              options: ["IoT data", "CPU instructions only", "Power supply", "Memory chips"],
              answer: "IoT data",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: MQTT Communication",
      description:
        "Learn brokers, connections, subscriptions, messages, and MQTT communication flow.",

      lessons: [
        {
          title: "MQTT Broker",
          content: `
The MQTT broker is responsible for receiving and distributing messages.

When a client connects to a broker, it can publish messages, subscribe to topics, or perform both operations.

The broker checks which clients are subscribed to a topic and forwards messages accordingly.

Popular MQTT brokers include Mosquitto, EMQX, and HiveMQ.

A broker can support communication between many IoT devices.
          `,
          quiz: [
            {
              question: "What is the main job of an MQTT broker?",
              options: [
                "Receive and distribute messages",
                "Generate electricity",
                "Compile programs",
                "Control CPU speed",
              ],
              answer: "Receive and distribute messages",
            },
            {
              question: "Can an MQTT client publish and subscribe?",
              options: ["Yes", "No", "Only publishers can", "Only brokers can"],
              answer: "Yes",
            },
            {
              question: "Which is an MQTT broker?",
              options: ["Mosquitto", "Arduino IDE", "VS Code", "Git"],
              answer: "Mosquitto",
            },
            {
              question: "The broker checks?",
              options: [
                "Topic subscriptions",
                "Keyboard input",
                "Screen resolution",
                "CPU temperature only",
              ],
              answer: "Topic subscriptions",
            },
            {
              question: "MQTT brokers are useful for?",
              options: [
                "IoT device communication",
                "Photo editing",
                "Word processing",
                "Game design",
              ],
              answer: "IoT device communication",
            },
          ],
        },

        {
          title: "MQTT Connection Process",
          content: `
Before exchanging messages, an MQTT client establishes a connection with the broker.

The client sends a connection request and the broker responds with the connection result.

After connecting, the client can publish messages or subscribe to topics.

A client can later disconnect from the broker when communication is no longer required.

Reliable connection management is important in IoT applications because devices may frequently connect and disconnect.
          `,
          quiz: [
            {
              question: "What must a client establish before MQTT communication?",
              options: ["Connection", "PWM", "ADC", "Interrupt"],
              answer: "Connection",
            },
            {
              question: "Who accepts MQTT client connections?",
              options: ["Broker", "Sensor", "GPIO", "Compiler"],
              answer: "Broker",
            },
            {
              question: "After connecting, a client can?",
              options: [
                "Publish or subscribe",
                "Only shut down",
                "Only read GPIO",
                "Only reset",
              ],
              answer: "Publish or subscribe",
            },
            {
              question: "A client can disconnect when?",
              options: [
                "Communication is no longer required",
                "Always after publishing",
                "Only after one second",
                "Never",
              ],
              answer: "Communication is no longer required",
            },
            {
              question: "Connection management is important because IoT devices may?",
              options: [
                "Frequently connect and disconnect",
                "Never lose power",
                "Always stay offline",
                "Never communicate",
              ],
              answer: "Frequently connect and disconnect",
            },
          ],
        },

        {
          title: "MQTT Messages",
          content: `
An MQTT message contains data that is published to a topic.

For example, a temperature sensor may publish "28.5" to the topic "home/temperature".

The message payload contains the actual application data.

MQTT does not require the payload to follow one fixed application format. Applications can exchange text, numbers, JSON, or other data formats.

This flexibility makes MQTT suitable for different IoT applications.
          `,
          quiz: [
            {
              question: "Where is MQTT application data carried?",
              options: ["Payload", "GPIO", "Clock", "Register"],
              answer: "Payload",
            },
            {
              question: "A temperature value can be sent as?",
              options: ["Payload", "Topic name only", "Port number", "CPU register only"],
              answer: "Payload",
            },
            {
              question: "MQTT payload can contain?",
              options: ["Application data", "Only passwords", "Only addresses", "Only commands"],
              answer: "Application data",
            },
            {
              question: "MQTT payload can contain JSON?",
              options: ["Yes", "No", "Only in hardware", "Only with SPI"],
              answer: "Yes",
            },
            {
              question: "The payload is associated with a?",
              options: ["Topic", "CPU", "GPIO pin", "Timer"],
              answer: "Topic",
            },
          ],
        },

        {
          title: "MQTT Subscribe and Publish Flow",
          content: `
A typical MQTT communication begins when a client connects to the broker.

A subscriber subscribes to a topic. Another client publishes a message to that topic.

The broker receives the message and forwards it to the subscribed client.

For example, an ESP32 can publish sensor readings while a mobile or computer application subscribes to the sensor topic.

This approach is commonly used in IoT monitoring systems.
          `,
          quiz: [
            {
              question: "What does a subscriber do?",
              options: ["Subscribes to a topic", "Creates hardware", "Compiles code", "Controls voltage"],
              answer: "Subscribes to a topic",
            },
            {
              question: "Who forwards a published message?",
              options: ["Broker", "GPIO", "ADC", "CPU fan"],
              answer: "Broker",
            },
            {
              question: "An ESP32 can act as a?",
              options: ["MQTT client", "Only broker", "Only router", "Only database"],
              answer: "MQTT client",
            },
            {
              question: "A monitoring application can?",
              options: ["Subscribe to sensor data", "Only publish code", "Only control GPIO", "Only compile"],
              answer: "Subscribe to sensor data",
            },
            {
              question: "MQTT communication is useful for?",
              options: ["IoT monitoring", "Only gaming", "Only printing", "Only image editing"],
              answer: "IoT monitoring",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: MQTT Quality and Security",
      description:
        "Understand QoS, retained messages, security, and reliable MQTT communication.",

      lessons: [
        {
          title: "MQTT Quality of Service",
          content: `
MQTT provides Quality of Service levels to control message delivery reliability.

QoS 0 provides at-most-once delivery. The message is delivered without confirmation.

QoS 1 provides at-least-once delivery. The message is acknowledged, but duplicates can occur.

QoS 2 provides exactly-once delivery and uses additional communication steps.

Higher QoS generally requires more communication overhead.
          `,
          quiz: [
            {
              question: "How many standard MQTT QoS levels are there?",
              options: ["3", "2", "4", "5"],
              answer: "3",
            },
            {
              question: "QoS 0 provides?",
              options: ["At-most-once delivery", "Exactly-once delivery", "At-least-three delivery", "No communication"],
              answer: "At-most-once delivery",
            },
            {
              question: "QoS 1 provides?",
              options: ["At-least-once delivery", "Exactly-zero delivery", "No delivery", "Only local delivery"],
              answer: "At-least-once delivery",
            },
            {
              question: "QoS 2 provides?",
              options: ["Exactly-once delivery", "At-most-once", "No delivery", "Broadcast only"],
              answer: "Exactly-once delivery",
            },
            {
              question: "Higher QoS generally requires?",
              options: ["More communication overhead", "Less communication always", "No network", "No broker"],
              answer: "More communication overhead",
            },
          ],
        },

        {
          title: "Retained Messages",
          content: `
MQTT supports retained messages.

When a broker receives a retained message, it stores the latest message for that topic.

When a new subscriber subscribes to the topic, the broker can immediately send the retained message.

For example, a device can publish its current status as a retained message. A new monitoring application can receive the latest status after subscribing.

Retained messages are useful for maintaining the latest known state.
          `,
          quiz: [
            {
              question: "What does a retained message store?",
              options: [
                "Latest message for a topic",
                "All messages forever",
                "Only passwords",
                "Only client names",
              ],
              answer: "Latest message for a topic",
            },
            {
              question: "Who stores a retained message?",
              options: ["Broker", "Publisher CPU", "Subscriber keyboard", "GPIO"],
              answer: "Broker",
            },
            {
              question: "A new subscriber can receive?",
              options: ["Latest retained message", "Only old code", "Only hardware data", "Nothing"],
              answer: "Latest retained message",
            },
            {
              question: "Retained messages are useful for?",
              options: ["Latest device state", "CPU manufacturing", "Video editing", "Power generation"],
              answer: "Latest device state",
            },
            {
              question: "Retained messages are associated with?",
              options: ["Topics", "GPIO pins", "Timers", "Registers"],
              answer: "Topics",
            },
          ],
        },

        {
          title: "MQTT Security",
          content: `
Security is important when MQTT is used over networks.

MQTT systems can use authentication to control which clients are allowed to connect.

Encryption such as TLS can protect MQTT communication from being read or modified during transmission.

Access control can restrict which topics a client can publish or subscribe to.

A secure IoT system should protect broker credentials, use appropriate access permissions, and encrypt sensitive communication.
          `,
          quiz: [
            {
              question: "Why is MQTT security important?",
              options: [
                "To protect IoT communication",
                "To increase screen size",
                "To control CPU temperature",
                "To replace sensors",
              ],
              answer: "To protect IoT communication",
            },
            {
              question: "Which technology can encrypt MQTT communication?",
              options: ["TLS", "GPIO", "PWM", "ADC"],
              answer: "TLS",
            },
            {
              question: "Authentication controls?",
              options: ["Client access", "Display brightness", "CPU clock only", "Sensor voltage"],
              answer: "Client access",
            },
            {
              question: "Access control can restrict?",
              options: [
                "Topic publishing and subscription",
                "Keyboard layout",
                "CPU manufacturing",
                "Screen resolution",
              ],
              answer: "Topic publishing and subscription",
            },
            {
              question: "Sensitive MQTT credentials should be?",
              options: ["Protected", "Shared publicly", "Printed everywhere", "Ignored"],
              answer: "Protected",
            },
          ],
        },

        {
          title: "Reliable MQTT Communication",
          content: `
Reliable MQTT communication depends on selecting suitable QoS, handling network failures, and managing client connections.

IoT devices may lose network connectivity temporarily.

Applications should be designed to reconnect when necessary and handle messages correctly.

The choice of QoS depends on the application. Simple sensor readings may use lower QoS, while important control information may require stronger delivery guarantees.

Good MQTT design balances reliability, speed, and network overhead.
          `,
          quiz: [
            {
              question: "IoT devices may experience?",
              options: ["Network failures", "Unlimited bandwidth", "Permanent connectivity", "No communication"],
              answer: "Network failures",
            },
            {
              question: "What can improve MQTT reliability?",
              options: ["Reconnect handling", "Removing the broker", "Ignoring errors", "Disabling communication"],
              answer: "Reconnect handling",
            },
            {
              question: "QoS selection depends on?",
              options: ["Application requirements", "Screen size", "Keyboard type", "CPU brand"],
              answer: "Application requirements",
            },
            {
              question: "Higher reliability can require?",
              options: ["More network overhead", "No network", "No broker", "Less hardware always"],
              answer: "More network overhead",
            },
            {
              question: "Good MQTT design balances?",
              options: [
                "Reliability, speed, and overhead",
                "Only speed",
                "Only memory",
                "Only CPU temperature",
              ],
              answer: "Reliability, speed, and overhead",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: MQTT with IoT",
      description:
        "Apply MQTT with microcontrollers, sensors, dashboards, and practical IoT systems.",

      lessons: [
        {
          title: "MQTT with ESP32",
          content: `
ESP32 is commonly used with MQTT in IoT projects because it provides Wi-Fi connectivity and enough processing capability for many sensor applications.

The ESP32 can connect to an MQTT broker and publish sensor readings.

It can also subscribe to control topics and receive commands.

For example, an ESP32 can publish temperature data and subscribe to a topic used to control an LED or relay.
          `,
          quiz: [
            {
              question: "Why is ESP32 useful for MQTT projects?",
              options: ["It provides Wi-Fi connectivity", "It has no processor", "It cannot communicate", "It is only a display"],
              answer: "It provides Wi-Fi connectivity",
            },
            {
              question: "ESP32 can publish?",
              options: ["Sensor readings", "Only programs", "Only images", "Only passwords"],
              answer: "Sensor readings",
            },
            {
              question: "ESP32 can subscribe to?",
              options: ["Control topics", "Only GPIO pins", "Only CPU registers", "Only files"],
              answer: "Control topics",
            },
            {
              question: "MQTT allows ESP32 to communicate through?",
              options: ["Broker", "ADC only", "Timer only", "Compiler"],
              answer: "Broker",
            },
            {
              question: "ESP32 MQTT applications are common in?",
              options: ["IoT", "Only gaming", "Only printing", "Only word processing"],
              answer: "IoT",
            },
          ],
        },

        {
          title: "MQTT Sensor Monitoring",
          content: `
MQTT can be used to build sensor monitoring systems.

A sensor connected to a microcontroller measures values such as temperature, humidity, light, or soil moisture.

The microcontroller publishes the readings to MQTT topics.

A dashboard or computer subscribes to those topics and displays the received values.

This creates a simple architecture for monitoring remote sensors.
          `,
          quiz: [
            {
              question: "What can an MQTT sensor system monitor?",
              options: ["Temperature and humidity", "Only keyboard input", "Only video", "Only files"],
              answer: "Temperature and humidity",
            },
            {
              question: "Who publishes sensor readings?",
              options: ["Microcontroller", "Keyboard", "Display", "Printer"],
              answer: "Microcontroller",
            },
            {
              question: "Where are readings published?",
              options: ["MQTT topics", "CPU cache only", "GPIO labels", "Compiler"],
              answer: "MQTT topics",
            },
            {
              question: "Who can display sensor data?",
              options: ["Dashboard", "Only sensor", "Only GPIO", "Only timer"],
              answer: "Dashboard",
            },
            {
              question: "MQTT sensor monitoring is useful for?",
              options: ["Remote monitoring", "Only offline programming", "Only gaming", "Only printing"],
              answer: "Remote monitoring",
            },
          ],
        },

        {
          title: "MQTT Control Applications",
          content: `
MQTT is not limited to sensor monitoring. It can also be used to control devices.

For example, a mobile application can publish an ON or OFF command to a topic.

A microcontroller subscribes to the topic and changes an output such as an LED, relay, or motor controller.

This creates two-way communication between an IoT application and an embedded device.

Proper authentication and access control should be used for control systems.
          `,
          quiz: [
            {
              question: "MQTT can be used for?",
              options: ["Device control", "Only monitoring", "Only file storage", "Only programming"],
              answer: "Device control",
            },
            {
              question: "A mobile application can publish?",
              options: ["ON/OFF commands", "Only sensor hardware", "Only source code", "Only images"],
              answer: "ON/OFF commands",
            },
            {
              question: "A microcontroller receives commands by?",
              options: ["Subscribing to a topic", "Reading a keyboard", "Using an ADC only", "Using a compiler"],
              answer: "Subscribing to a topic",
            },
            {
              question: "MQTT control can operate an?",
              options: ["LED", "Only monitor", "Only keyboard", "Only compiler"],
              answer: "LED",
            },
            {
              question: "Control systems should use?",
              options: ["Authentication and access control", "No security", "Public credentials", "No broker"],
              answer: "Authentication and access control",
            },
          ],
        },

        {
          title: "Mini Project: IoT Sensor Monitoring with MQTT",
          content: `
In this project, build a simple IoT sensor monitoring system using a microcontroller and MQTT.

The microcontroller reads a sensor such as temperature or soil moisture.

It connects to an MQTT broker and publishes the sensor value to a suitable topic.

A computer or dashboard subscribes to the topic and displays the received value.

You can extend the project by adding a control topic. The dashboard can publish a command and the microcontroller can control an LED based on the received command.

This project demonstrates the complete MQTT publish-subscribe workflow.
          `,
          quiz: [
            {
              question: "What does the microcontroller read in the project?",
              options: ["Sensor data", "Only source code", "Only images", "Only passwords"],
              answer: "Sensor data",
            },
            {
              question: "Where does the microcontroller publish data?",
              options: ["MQTT topic", "Keyboard", "GPIO label", "Compiler"],
              answer: "MQTT topic",
            },
            {
              question: "What subscribes to the sensor topic?",
              options: ["Dashboard", "Power supply", "GPIO", "CPU fan"],
              answer: "Dashboard",
            },
            {
              question: "What can be added for device control?",
              options: ["Control topic", "Only another sensor", "Only a display", "Only a timer"],
              answer: "Control topic",
            },
            {
              question: "The project demonstrates?",
              options: [
                "MQTT publish-subscribe workflow",
                "Only GPIO programming",
                "Only ADC conversion",
                "Only CPU architecture",
              ],
              answer: "MQTT publish-subscribe workflow",
            },
          ],
        },
      ],
    },
  ],
};

export default mqttCourse;
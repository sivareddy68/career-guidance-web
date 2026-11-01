const troubleshootingCourse = {
  title: "Troubleshooting",

  description:
    "Learn systematic troubleshooting, hardware and software diagnosis, network debugging, embedded system testing, and practical problem solving.",

  weeks: [
    {
      title: "Week 1: Troubleshooting Fundamentals",
      description:
        "Learn the basic troubleshooting process and how to identify problems systematically.",

      lessons: [
        {
          title: "Introduction to Troubleshooting",
          content: `
Troubleshooting is the process of identifying, analyzing, and fixing problems in a system.

A good troubleshooting process starts by understanding the symptoms and collecting information. The problem is then isolated, possible causes are considered, and solutions are tested.

Troubleshooting is important in computers, embedded systems, networks, IoT devices, and electronic systems.
          `,
          quiz: [
            {
              question: "What is troubleshooting?",
              options: [
                "Finding and fixing problems",
                "Writing only programs",
                "Designing websites",
                "Installing games",
              ],
              answer: "Finding and fixing problems",
            },
            {
              question: "What should be done first when troubleshooting?",
              options: [
                "Understand the symptoms",
                "Replace every component",
                "Delete all files",
                "Restart the entire network",
              ],
              answer: "Understand the symptoms",
            },
            {
              question: "Why is troubleshooting important?",
              options: [
                "It helps identify and solve system problems",
                "It increases screen size",
                "It creates new hardware",
                "It increases storage automatically",
              ],
              answer: "It helps identify and solve system problems",
            },
            {
              question: "What should be collected during troubleshooting?",
              options: [
                "Problem information",
                "Only passwords",
                "Only usernames",
                "Only file names",
              ],
              answer: "Problem information",
            },
            {
              question: "Troubleshooting is useful in which systems?",
              options: [
                "Computers, networks, and embedded systems",
                "Only televisions",
                "Only keyboards",
                "Only printers",
              ],
              answer: "Computers, networks, and embedded systems",
            },
          ],
        },

        {
          title: "Troubleshooting Process",
          content: `
A systematic troubleshooting process reduces unnecessary changes and helps find the actual cause.

A common process is to identify the problem, gather information, form possible causes, test the most likely cause, apply a solution, and verify the result.

If the problem is not solved, the process is repeated using the new information.
          `,
          quiz: [
            {
              question: "Why use a systematic troubleshooting process?",
              options: [
                "To find the actual cause efficiently",
                "To make random changes",
                "To delete data",
                "To avoid testing",
              ],
              answer: "To find the actual cause efficiently",
            },
            {
              question: "What comes before testing a possible cause?",
              options: [
                "Forming a hypothesis",
                "Deleting the system",
                "Replacing everything",
                "Removing all cables",
              ],
              answer: "Forming a hypothesis",
            },
            {
              question: "What should happen after applying a solution?",
              options: [
                "Verify the result",
                "Ignore the problem",
                "Delete the logs",
                "Change unrelated settings",
              ],
              answer: "Verify the result",
            },
            {
              question: "What should be done if the solution fails?",
              options: [
                "Continue troubleshooting using new information",
                "Stop immediately",
                "Delete the system",
                "Replace every device",
              ],
              answer: "Continue troubleshooting using new information",
            },
            {
              question: "What is a hypothesis in troubleshooting?",
              options: [
                "A possible explanation for the problem",
                "A final repair",
                "A network cable",
                "A software license",
              ],
              answer: "A possible explanation for the problem",
            },
          ],
        },

        {
          title: "Problem Identification",
          content: `
Correctly identifying a problem is an important troubleshooting step.

Symptoms such as error messages, unexpected behavior, loss of connectivity, or incorrect sensor readings provide clues about the underlying problem.

The problem should be described clearly before changing system components or configurations.
          `,
          quiz: [
            {
              question: "What can provide clues during troubleshooting?",
              options: [
                "Symptoms and error messages",
                "Screen color only",
                "Keyboard size",
                "File names only",
              ],
              answer: "Symptoms and error messages",
            },
            {
              question: "Why should a problem be clearly described?",
              options: [
                "To understand what needs to be fixed",
                "To increase storage",
                "To change the hardware",
                "To remove logs",
              ],
              answer: "To understand what needs to be fixed",
            },
            {
              question: "Which is a troubleshooting symptom?",
              options: [
                "Loss of network connectivity",
                "Keyboard color",
                "Monitor brand",
                "Desk size",
              ],
              answer: "Loss of network connectivity",
            },
            {
              question: "What can an error message provide?",
              options: [
                "Information about a problem",
                "Extra memory",
                "Network speed",
                "Battery power",
              ],
              answer: "Information about a problem",
            },
            {
              question: "What should be avoided before understanding the problem?",
              options: [
                "Random configuration changes",
                "Information gathering",
                "Testing",
                "Observation",
              ],
              answer: "Random configuration changes",
            },
          ],
        },

        {
          title: "Root Cause Analysis",
          content: `
Root cause analysis attempts to identify the underlying reason for a problem instead of only treating its symptoms.

For example, if an embedded sensor stops reporting data, simply restarting the device may temporarily restore operation. Root cause analysis investigates whether the problem is caused by power, wiring, software, communication, or the sensor itself.

Finding the root cause helps prevent the same problem from happening again.
          `,
          quiz: [
            {
              question: "What does root cause analysis identify?",
              options: [
                "The underlying reason for a problem",
                "Only the visible symptom",
                "The device color",
                "The file name",
              ],
              answer: "The underlying reason for a problem",
            },
            {
              question: "Why is root cause analysis useful?",
              options: [
                "It can help prevent repeated problems",
                "It increases CPU speed",
                "It changes hardware automatically",
                "It removes all errors",
              ],
              answer: "It can help prevent repeated problems",
            },
            {
              question: "Which can cause a sensor problem?",
              options: [
                "Power, wiring, or software issues",
                "Monitor brightness",
                "Keyboard color",
                "Printer paper",
              ],
              answer: "Power, wiring, or software issues",
            },
            {
              question: "What is only treating a symptom?",
              options: [
                "Fixing the visible effect without finding the cause",
                "Finding the root cause",
                "Testing the system",
                "Checking logs",
              ],
              answer: "Fixing the visible effect without finding the cause",
            },
            {
              question: "Root cause analysis is useful for what?",
              options: [
                "Long-term problem prevention",
                "Increasing screen size",
                "Changing usernames",
                "Creating passwords",
              ],
              answer: "Long-term problem prevention",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Hardware and Software Troubleshooting",
      description:
        "Learn how to diagnose hardware, software, power, and configuration problems.",

      lessons: [
        {
          title: "Hardware Troubleshooting",
          content: `
Hardware troubleshooting involves checking physical components and connections.

Common problems include loose cables, damaged components, overheating, insufficient power, and faulty peripherals.

A systematic approach can include visual inspection, checking connections, measuring signals where appropriate, and testing components individually.
          `,
          quiz: [
            {
              question: "What does hardware troubleshooting examine?",
              options: [
                "Physical components and connections",
                "Only software code",
                "Only databases",
                "Only websites",
              ],
              answer: "Physical components and connections",
            },
            {
              question: "Which is a common hardware problem?",
              options: [
                "Loose cable",
                "Correct configuration",
                "Valid password",
                "Working connection",
              ],
              answer: "Loose cable",
            },
            {
              question: "What can cause hardware failure?",
              options: [
                "Overheating",
                "Correct voltage",
                "Proper cooling",
                "Good connections",
              ],
              answer: "Overheating",
            },
            {
              question: "What should be checked during hardware troubleshooting?",
              options: [
                "Physical connections",
                "Only usernames",
                "Only URLs",
                "Only file names",
              ],
              answer: "Physical connections",
            },
            {
              question: "Why test components individually?",
              options: [
                "To isolate the faulty component",
                "To increase storage",
                "To change the operating system",
                "To improve screen quality",
              ],
              answer: "To isolate the faulty component",
            },
          ],
        },

        {
          title: "Power and Connectivity Problems",
          content: `
Power and connectivity problems are common causes of system failures.

For embedded devices, troubleshooting may include checking the power supply, voltage levels, cables, connectors, and communication interfaces.

A device that does not start should first be checked for basic power and connection problems before investigating more complex software issues.
          `,
          quiz: [
            {
              question: "What should be checked when a device does not start?",
              options: [
                "Power and connections",
                "Only software documentation",
                "Only screen brightness",
                "Only usernames",
              ],
              answer: "Power and connections",
            },
            {
              question: "Which can cause connectivity problems?",
              options: [
                "Damaged cable",
                "Correct connection",
                "Proper configuration",
                "Working port",
              ],
              answer: "Damaged cable",
            },
            {
              question: "What can be measured when checking power?",
              options: [
                "Voltage levels",
                "Screen size",
                "File names",
                "Username length",
              ],
              answer: "Voltage levels",
            },
            {
              question: "Why check basic power first?",
              options: [
                "It can reveal simple causes quickly",
                "It changes the software",
                "It removes all bugs",
                "It increases memory",
              ],
              answer: "It can reveal simple causes quickly",
            },
            {
              question: "What can connectors affect?",
              options: [
                "Electrical or communication connections",
                "Screen resolution",
                "File compression",
                "CPU architecture",
              ],
              answer: "Electrical or communication connections",
            },
          ],
        },

        {
          title: "Software Troubleshooting",
          content: `
Software problems can result from incorrect configurations, bugs, missing dependencies, incompatible versions, or unexpected input.

Logs and error messages are useful sources of information. Reproducing the problem under controlled conditions can also help identify its cause.

Software troubleshooting should involve controlled changes so that the effect of each change can be understood.
          `,
          quiz: [
            {
              question: "Which can cause software problems?",
              options: [
                "Incorrect configuration",
                "Correct configuration",
                "Working dependency",
                "Valid input",
              ],
              answer: "Incorrect configuration",
            },
            {
              question: "What can help identify software problems?",
              options: [
                "Logs and error messages",
                "Monitor size",
                "Keyboard color",
                "Desk size",
              ],
              answer: "Logs and error messages",
            },
            {
              question: "Why reproduce a software problem?",
              options: [
                "To study the problem under controlled conditions",
                "To delete the software",
                "To increase RAM",
                "To change hardware",
              ],
              answer: "To study the problem under controlled conditions",
            },
            {
              question: "What can cause compatibility problems?",
              options: [
                "Incompatible versions",
                "Correct versions",
                "Proper dependencies",
                "Valid configuration",
              ],
              answer: "Incompatible versions",
            },
            {
              question: "Why make controlled changes?",
              options: [
                "To understand the effect of each change",
                "To create more errors",
                "To delete logs",
                "To remove backups",
              ],
              answer: "To understand the effect of each change",
            },
          ],
        },

        {
          title: "Logs and Error Messages",
          content: `
Logs record events that occur inside a system. They can provide information about errors, warnings, connections, and system activity.

Error messages can provide useful clues about the location or type of a problem. However, messages should be interpreted together with other evidence.

Keeping useful logs makes troubleshooting easier and can help identify repeated problems.
          `,
          quiz: [
            {
              question: "What do logs record?",
              options: [
                "System events",
                "Only passwords",
                "Only images",
                "Only usernames",
              ],
              answer: "System events",
            },
            {
              question: "What can error messages provide?",
              options: [
                "Clues about a problem",
                "Extra storage",
                "More CPU cores",
                "Network cables",
              ],
              answer: "Clues about a problem",
            },
            {
              question: "Should an error message always be considered the complete cause?",
              options: [
                "No",
                "Yes",
                "Only on networks",
                "Only on computers",
              ],
              answer: "No",
            },
            {
              question: "Why are logs useful?",
              options: [
                "They provide information about system activity",
                "They increase CPU speed",
                "They change hardware",
                "They improve display quality",
              ],
              answer: "They provide information about system activity",
            },
            {
              question: "Logs can help identify what?",
              options: [
                "Repeated problems",
                "Monitor size",
                "Keyboard color",
                "Desk dimensions",
              ],
              answer: "Repeated problems",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Network and Embedded Troubleshooting",
      description:
        "Learn practical techniques for diagnosing network and embedded system problems.",

      lessons: [
        {
          title: "Network Troubleshooting",
          content: `
Network troubleshooting identifies problems with connectivity, addressing, routing, switching, or network services.

A basic process can include checking cables, link status, IP configuration, connectivity, routing, and service availability.

Tools such as ping, traceroute, and network configuration commands can provide useful information.
          `,
          quiz: [
            {
              question: "What can network troubleshooting identify?",
              options: [
                "Connectivity and configuration problems",
                "Screen brightness",
                "Keyboard size",
                "File formatting",
              ],
              answer: "Connectivity and configuration problems",
            },
            {
              question: "Which tool can test basic connectivity?",
              options: ["ping", "notepad", "calculator", "paint"],
              answer: "ping",
            },
            {
              question: "What can traceroute help identify?",
              options: [
                "The path taken by network traffic",
                "CPU temperature",
                "File size",
                "Screen resolution",
              ],
              answer: "The path taken by network traffic",
            },
            {
              question: "What should be checked for a basic network problem?",
              options: [
                "IP configuration and connectivity",
                "Monitor color",
                "Keyboard layout",
                "Printer paper",
              ],
              answer: "IP configuration and connectivity",
            },
            {
              question: "What can cause network problems?",
              options: [
                "Incorrect IP configuration",
                "Correct addressing",
                "Working cables",
                "Valid routes",
              ],
              answer: "Incorrect IP configuration",
            },
          ],
        },

        {
          title: "UART, SPI, and I2C Troubleshooting",
          content: `
Communication interfaces such as UART, SPI, and I2C are commonly used in embedded systems.

Problems can occur because of incorrect baud rate, wiring errors, wrong device addresses, incorrect clock settings, or software configuration.

A logic analyzer or oscilloscope can help observe communication signals when appropriate.
          `,
          quiz: [
            {
              question: "Which is an embedded communication interface?",
              options: ["UART", "HTML", "CSS", "SQL"],
              answer: "UART",
            },
            {
              question: "What can cause UART communication failure?",
              options: [
                "Incorrect baud rate",
                "Correct baud rate",
                "Proper wiring",
                "Valid configuration",
              ],
              answer: "Incorrect baud rate",
            },
            {
              question: "What can cause I2C communication problems?",
              options: [
                "Incorrect device address",
                "Correct address",
                "Proper wiring",
                "Valid configuration",
              ],
              answer: "Incorrect device address",
            },
            {
              question: "Which tool can help observe communication signals?",
              options: [
                "Logic analyzer",
                "Printer",
                "Keyboard",
                "Monitor",
              ],
              answer: "Logic analyzer",
            },
            {
              question: "What should be checked when debugging communication?",
              options: [
                "Wiring and configuration",
                "Screen size",
                "File names",
                "Keyboard color",
              ],
              answer: "Wiring and configuration",
            },
          ],
        },

        {
          title: "Sensor and Embedded System Debugging",
          content: `
Embedded systems often use sensors to collect real-world information. Incorrect readings may be caused by wiring, power problems, sensor configuration, calibration, communication errors, or software bugs.

Troubleshooting should compare expected values with actual measurements.

Testing the sensor, communication interface, and software separately can help isolate the problem.
          `,
          quiz: [
            {
              question: "What can cause incorrect sensor readings?",
              options: [
                "Wiring or configuration problems",
                "Correct calibration",
                "Proper power",
                "Working communication",
              ],
              answer: "Wiring or configuration problems",
            },
            {
              question: "What should actual sensor values be compared with?",
              options: [
                "Expected values",
                "Screen size",
                "Keyboard color",
                "File names",
              ],
              answer: "Expected values",
            },
            {
              question: "Why test components separately?",
              options: [
                "To isolate the problem",
                "To increase memory",
                "To change the display",
                "To remove the sensor",
              ],
              answer: "To isolate the problem",
            },
            {
              question: "Which can affect sensor readings?",
              options: [
                "Calibration",
                "Monitor brightness",
                "Keyboard layout",
                "File extension",
              ],
              answer: "Calibration",
            },
            {
              question: "What should be checked when a sensor fails?",
              options: [
                "Power, wiring, communication, and software",
                "Only the screen",
                "Only the keyboard",
                "Only the file system",
              ],
              answer: "Power, wiring, communication, and software",
            },
          ],
        },

        {
          title: "Debugging with Test Equipment",
          content: `
Test equipment helps engineers observe electrical and communication signals.

A multimeter can measure quantities such as voltage, current, and resistance. An oscilloscope can display electrical signals over time. A logic analyzer is useful for observing digital communication.

Using the correct instrument and measurement method helps avoid incorrect conclusions.
          `,
          quiz: [
            {
              question: "What can a multimeter measure?",
              options: [
                "Voltage, current, and resistance",
                "Only network names",
                "Only files",
                "Only passwords",
              ],
              answer: "Voltage, current, and resistance",
            },
            {
              question: "What does an oscilloscope display?",
              options: [
                "Electrical signals over time",
                "Only files",
                "Only network names",
                "Only passwords",
              ],
              answer: "Electrical signals over time",
            },
            {
              question: "What is a logic analyzer useful for?",
              options: [
                "Observing digital communication",
                "Editing documents",
                "Charging batteries",
                "Displaying images",
              ],
              answer: "Observing digital communication",
            },
            {
              question: "Why use test equipment?",
              options: [
                "To obtain measurements and observe signals",
                "To increase storage",
                "To change software automatically",
                "To remove all errors",
              ],
              answer: "To obtain measurements and observe signals",
            },
            {
              question: "What should be selected carefully during measurement?",
              options: [
                "The correct instrument and method",
                "The monitor color",
                "The keyboard size",
                "The file name",
              ],
              answer: "The correct instrument and method",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced Troubleshooting and Practical Debugging",
      description:
        "Apply systematic debugging techniques to real embedded, IoT, and network problems.",

      lessons: [
        {
          title: "Fault Isolation",
          content: `
Fault isolation means narrowing a problem down to a specific component, connection, software module, or configuration.

One useful method is to divide a system into smaller sections and test each section independently.

Isolation reduces the number of possible causes and makes troubleshooting more efficient.
          `,
          quiz: [
            {
              question: "What is fault isolation?",
              options: [
                "Finding the specific source of a problem",
                "Deleting all components",
                "Replacing every device",
                "Stopping all testing",
              ],
              answer: "Finding the specific source of a problem",
            },
            {
              question: "Why divide a system into smaller sections?",
              options: [
                "To reduce possible causes",
                "To increase storage",
                "To remove software",
                "To increase screen size",
              ],
              answer: "To reduce possible causes",
            },
            {
              question: "What can be tested independently?",
              options: [
                "System sections",
                "Only passwords",
                "Only monitors",
                "Only files",
              ],
              answer: "System sections",
            },
            {
              question: "Fault isolation makes troubleshooting what?",
              options: [
                "More efficient",
                "More random",
                "More complicated",
                "Impossible",
              ],
              answer: "More efficient",
            },
            {
              question: "What does isolation reduce?",
              options: [
                "The number of possible causes",
                "Network speed",
                "Memory",
                "Screen resolution",
              ],
              answer: "The number of possible causes",
            },
          ],
        },

        {
          title: "Performance Troubleshooting",
          content: `
Performance troubleshooting identifies why a system is slower or less responsive than expected.

Possible causes include high CPU usage, memory limitations, excessive network traffic, inefficient software, or hardware limitations.

Measurements should be collected before making changes so that the actual performance problem can be identified.
          `,
          quiz: [
            {
              question: "What does performance troubleshooting investigate?",
              options: [
                "Why a system performs poorly",
                "Only passwords",
                "Only screen color",
                "Only file names",
              ],
              answer: "Why a system performs poorly",
            },
            {
              question: "Which can affect system performance?",
              options: [
                "High CPU usage",
                "Correct configuration",
                "Available memory",
                "Proper network traffic",
              ],
              answer: "High CPU usage",
            },
            {
              question: "What should be collected before making performance changes?",
              options: [
                "Measurements",
                "Passwords",
                "Random files",
                "Usernames",
              ],
              answer: "Measurements",
            },
            {
              question: "What can excessive network traffic cause?",
              options: [
                "Reduced network performance",
                "More storage",
                "Better screen resolution",
                "Faster CPU execution",
              ],
              answer: "Reduced network performance",
            },
            {
              question: "Why measure performance?",
              options: [
                "To identify the actual bottleneck",
                "To change hardware randomly",
                "To delete software",
                "To remove logs",
              ],
              answer: "To identify the actual bottleneck",
            },
          ],
        },

        {
          title: "Preventive Maintenance",
          content: `
Preventive maintenance reduces the chance of future failures.

It can include software updates, checking connections, monitoring system health, reviewing logs, testing backups, and inspecting hardware.

Regular maintenance helps identify problems before they become major failures.
          `,
          quiz: [
            {
              question: "What is preventive maintenance?",
              options: [
                "Actions taken to reduce future failures",
                "Repairing only after complete failure",
                "Deleting logs",
                "Removing backups",
              ],
              answer: "Actions taken to reduce future failures",
            },
            {
              question: "Which is an example of preventive maintenance?",
              options: [
                "Applying software updates",
                "Ignoring warnings",
                "Disabling monitoring",
                "Deleting backups",
              ],
              answer: "Applying software updates",
            },
            {
              question: "Why review system logs regularly?",
              options: [
                "To identify potential problems",
                "To increase screen size",
                "To change passwords automatically",
                "To remove hardware",
              ],
              answer: "To identify potential problems",
            },
            {
              question: "What should be checked on hardware?",
              options: [
                "Connections and physical condition",
                "Only usernames",
                "Only file names",
                "Only web pages",
              ],
              answer: "Connections and physical condition",
            },
            {
              question: "What is a benefit of preventive maintenance?",
              options: [
                "Reduced unexpected failures",
                "More random errors",
                "Less monitoring",
                "Less reliability",
              ],
              answer: "Reduced unexpected failures",
            },
          ],
        },

        {
          title: "Mini Project: Embedded System Troubleshooting",
          content: `
In this mini project, troubleshoot an embedded IoT system containing a microcontroller, sensor, communication interface, and network connection.

Start by identifying the symptoms. Check power and physical connections, then test the sensor and communication interface. Verify software configuration and network connectivity.

Use logs and measurements to isolate the root cause. Apply a fix and verify that the system operates correctly.

This project combines hardware, software, communication, network, and systematic troubleshooting techniques.
          `,
          quiz: [
            {
              question: "What is the first step in the project?",
              options: [
                "Identify the symptoms",
                "Replace all components",
                "Delete the software",
                "Change every configuration",
              ],
              answer: "Identify the symptoms",
            },
            {
              question: "What should be checked before complex debugging?",
              options: [
                "Power and physical connections",
                "Only application code",
                "Only the database",
                "Only the display",
              ],
              answer: "Power and physical connections",
            },
            {
              question: "What can help isolate the root cause?",
              options: [
                "Logs and measurements",
                "Random changes",
                "Deleting files",
                "Replacing everything",
              ],
              answer: "Logs and measurements",
            },
            {
              question: "What should be done after applying a fix?",
              options: [
                "Verify the system",
                "Stop testing",
                "Delete the logs",
                "Change unrelated settings",
              ],
              answer: "Verify the system",
            },
            {
              question: "What areas are combined in this project?",
              options: [
                "Hardware, software, communication, and networking",
                "Only HTML",
                "Only databases",
                "Only graphics",
              ],
              answer: "Hardware, software, communication, and networking",
            },
          ],
        },
      ],
    },
  ],
};

export default troubleshootingCourse;
const switchingCourse = {
  title: "Switching",

  description:
    "Learn network switching, Ethernet, MAC addresses, VLANs, switching methods, and practical network configuration.",

  weeks: [
    {
      title: "Week 1: Switching Fundamentals",
      description:
        "Understand the basics of network switches and Ethernet communication.",

      lessons: [
        {
          title: "Introduction to Switching",
          content: `
Switching is the process of forwarding data from one device to another within a network. A network switch connects devices such as computers, servers, sensors, and embedded systems.

A switch receives an Ethernet frame and determines where it should be forwarded. Unlike a simple hub, a switch can send the frame only toward the required destination.

Switching is widely used in LAN networks because it improves communication efficiency and reduces unnecessary traffic.
          `,
          quiz: [
            {
              question: "What is the main purpose of a network switch?",
              options: [
                "Forward data between network devices",
                "Store files",
                "Generate electricity",
                "Convert analog signals",
              ],
              answer: "Forward data between network devices",
            },
            {
              question: "Where are switches commonly used?",
              options: ["LAN networks", "Power grids only", "Printers only", "GPS systems"],
              answer: "LAN networks",
            },
            {
              question: "What does a switch forward?",
              options: ["Ethernet frames", "Passwords", "Programs", "Images only"],
              answer: "Ethernet frames",
            },
            {
              question: "What device can connect computers within a LAN?",
              options: ["Network switch", "Monitor", "Keyboard", "Speaker"],
              answer: "Network switch",
            },
            {
              question: "What does switching help reduce?",
              options: [
                "Unnecessary network traffic",
                "Screen brightness",
                "CPU temperature",
                "Storage capacity",
              ],
              answer: "Unnecessary network traffic",
            },
          ],
        },

        {
          title: "Ethernet Communication",
          content: `
Ethernet is one of the most common technologies used for wired local area networks. Ethernet uses frames to carry data between network devices.

An Ethernet frame contains information such as source MAC address, destination MAC address, and payload data.

Switches use Ethernet frames to determine where data should be forwarded. Ethernet can operate at different speeds depending on the network hardware.
          `,
          quiz: [
            {
              question: "What does Ethernet use to carry data?",
              options: ["Frames", "Files", "Programs", "Registers"],
              answer: "Frames",
            },
            {
              question: "Which address identifies an Ethernet device?",
              options: ["MAC address", "URL", "File address", "Port address only"],
              answer: "MAC address",
            },
            {
              question: "What does an Ethernet frame contain?",
              options: [
                "Source and destination information",
                "Only a password",
                "Only an IP address",
                "Only sensor data",
              ],
              answer: "Source and destination information",
            },
            {
              question: "Ethernet is commonly used in which type of network?",
              options: ["LAN", "Satellite only", "Bluetooth only", "GPS"],
              answer: "LAN",
            },
            {
              question: "What device commonly forwards Ethernet frames?",
              options: ["Switch", "Monitor", "Keyboard", "Printer"],
              answer: "Switch",
            },
          ],
        },

        {
          title: "MAC Addresses",
          content: `
A MAC address is a hardware-level address associated with a network interface. It is used to identify devices within an Ethernet network.

Switches learn MAC addresses by examining the source address of incoming frames. The switch stores this information in a MAC address table.

When a frame arrives, the switch checks its MAC address table and forwards the frame through the appropriate port when the destination is known.
          `,
          quiz: [
            {
              question: "What does a MAC address identify?",
              options: [
                "A network interface",
                "A website",
                "A file",
                "A programming language",
              ],
              answer: "A network interface",
            },
            {
              question: "Where does a switch store learned MAC addresses?",
              options: [
                "MAC address table",
                "File system",
                "CPU cache only",
                "Hard disk",
              ],
              answer: "MAC address table",
            },
            {
              question: "How does a switch learn MAC addresses?",
              options: [
                "By examining source addresses",
                "By asking the user",
                "By scanning files",
                "By using GPS",
              ],
              answer: "By examining source addresses",
            },
            {
              question: "What address does Ethernet switching primarily use?",
              options: ["MAC address", "URL", "Email address", "File name"],
              answer: "MAC address",
            },
            {
              question: "What happens when a destination MAC is known?",
              options: [
                "Frame is forwarded to the appropriate port",
                "Frame is deleted",
                "Switch shuts down",
                "Frame becomes an IP packet",
              ],
              answer: "Frame is forwarded to the appropriate port",
            },
          ],
        },

        {
          title: "Switching Methods",
          content: `
Switches can use different methods to forward frames. Common methods include store-and-forward, cut-through, and fragment-free switching.

Store-and-forward receives the complete frame and checks it before forwarding. Cut-through begins forwarding after reading enough information to determine the destination.

The choice of switching method can affect latency, error handling, and network performance.
          `,
          quiz: [
            {
              question: "Which switching method receives the complete frame first?",
              options: [
                "Store-and-forward",
                "Cut-through",
                "Fragment-only",
                "Broadcast-only",
              ],
              answer: "Store-and-forward",
            },
            {
              question: "Which method can provide lower latency?",
              options: ["Cut-through", "Store-and-forward", "Offline switching", "Manual switching"],
              answer: "Cut-through",
            },
            {
              question: "What does store-and-forward allow a switch to do?",
              options: [
                "Check the complete frame",
                "Change the computer",
                "Increase storage",
                "Create a new MAC address",
              ],
              answer: "Check the complete frame",
            },
            {
              question: "Switching methods can affect what?",
              options: ["Latency and performance", "Keyboard speed", "Screen size", "Battery color"],
              answer: "Latency and performance",
            },
            {
              question: "Which method starts forwarding before receiving the entire frame?",
              options: ["Cut-through", "Store-and-forward", "File transfer", "Broadcast"],
              answer: "Cut-through",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: VLANs and Network Segmentation",
      description:
        "Learn VLAN concepts and how switches separate network traffic.",

      lessons: [
        {
          title: "Introduction to VLANs",
          content: `
A VLAN, or Virtual Local Area Network, logically separates devices within a physical switch network.

Devices in different VLANs can be separated even when they are connected to the same physical switch. VLANs help organize networks and control broadcast traffic.

For example, an organization can create separate VLANs for administration, development, and IoT devices.
          `,
          quiz: [
            {
              question: "What does VLAN stand for?",
              options: [
                "Virtual Local Area Network",
                "Variable Local Access Network",
                "Virtual Link Address Network",
                "Verified LAN",
              ],
              answer: "Virtual Local Area Network",
            },
            {
              question: "What is a major purpose of VLANs?",
              options: [
                "Logical network separation",
                "Increasing monitor size",
                "Storing files",
                "Programming CPUs",
              ],
              answer: "Logical network separation",
            },
            {
              question: "Can multiple VLANs exist on one physical switch?",
              options: ["Yes", "No", "Only with Wi-Fi", "Only on routers"],
              answer: "Yes",
            },
            {
              question: "VLANs can help reduce what?",
              options: ["Broadcast traffic", "CPU instructions", "Storage", "Screen resolution"],
              answer: "Broadcast traffic",
            },
            {
              question: "VLANs are useful for what?",
              options: [
                "Network organization",
                "Video editing",
                "Battery charging",
                "Image processing",
              ],
              answer: "Network organization",
            },
          ],
        },

        {
          title: "Access and Trunk Ports",
          content: `
Switch ports can operate as access ports or trunk ports.

An access port normally carries traffic for a single VLAN and is commonly connected to end devices such as computers or embedded devices.

A trunk port can carry traffic from multiple VLANs between network devices. VLAN tagging is used to identify the VLAN associated with frames.
          `,
          quiz: [
            {
              question: "What type of port normally connects an end device to one VLAN?",
              options: ["Access port", "Trunk port", "Console port", "Power port"],
              answer: "Access port",
            },
            {
              question: "What can a trunk port carry?",
              options: [
                "Multiple VLANs",
                "Only one device",
                "Only power",
                "Only audio",
              ],
              answer: "Multiple VLANs",
            },
            {
              question: "Why is VLAN tagging used?",
              options: [
                "To identify VLAN traffic",
                "To increase voltage",
                "To identify users",
                "To store passwords",
              ],
              answer: "To identify VLAN traffic",
            },
            {
              question: "Which port is commonly connected to a PC?",
              options: ["Access port", "Trunk port", "Console-only port", "WAN-only port"],
              answer: "Access port",
            },
            {
              question: "Which port is useful between switches?",
              options: ["Trunk port", "Keyboard port", "Audio port", "Power port"],
              answer: "Trunk port",
            },
          ],
        },

        {
          title: "VLAN Communication",
          content: `
Devices belonging to different VLANs are logically separated. Communication between different VLANs requires Layer 3 routing.

A router or Layer 3 switch can perform inter-VLAN routing. This allows devices in different VLANs to communicate while maintaining logical separation.

Inter-VLAN routing is commonly used in enterprise and IoT networks.
          `,
          quiz: [
            {
              question: "Can devices in different VLANs communicate directly at Layer 2?",
              options: ["Normally no", "Always yes", "Only through USB", "Only through Bluetooth"],
              answer: "Normally no",
            },
            {
              question: "What is required for inter-VLAN communication?",
              options: ["Layer 3 routing", "Keyboard input", "File sharing", "Bluetooth"],
              answer: "Layer 3 routing",
            },
            {
              question: "Which device can perform inter-VLAN routing?",
              options: ["Router", "Monitor", "Keyboard", "Printer"],
              answer: "Router",
            },
            {
              question: "What does inter-VLAN routing allow?",
              options: [
                "Communication between VLANs",
                "Changing MAC addresses",
                "Increasing storage",
                "Creating Ethernet cables",
              ],
              answer: "Communication between VLANs",
            },
            {
              question: "VLANs provide what?",
              options: [
                "Logical separation",
                "Physical power",
                "CPU cooling",
                "File compression",
              ],
              answer: "Logical separation",
            },
          ],
        },

        {
          title: "Network Segmentation",
          content: `
Network segmentation divides a larger network into smaller logical sections. VLANs are one common method of segmentation.

Segmentation can improve network organization, reduce unnecessary broadcasts, and help control access between groups of devices.

In IoT networks, segmentation can separate sensors, controllers, user devices, and management systems.
          `,
          quiz: [
            {
              question: "What is network segmentation?",
              options: [
                "Dividing a network into smaller sections",
                "Increasing cable length",
                "Removing switches",
                "Changing passwords",
              ],
              answer: "Dividing a network into smaller sections",
            },
            {
              question: "Which technology can provide logical segmentation?",
              options: ["VLAN", "USB", "HDMI", "GPS"],
              answer: "VLAN",
            },
            {
              question: "Segmentation can reduce what?",
              options: ["Unnecessary broadcasts", "RAM size", "CPU speed", "Screen brightness"],
              answer: "Unnecessary broadcasts",
            },
            {
              question: "Why segment IoT devices?",
              options: [
                "To organize and control network traffic",
                "To increase battery voltage",
                "To change sensor values",
                "To remove Ethernet",
              ],
              answer: "To organize and control network traffic",
            },
            {
              question: "Which devices can be placed in separate network segments?",
              options: [
                "Sensors and user devices",
                "Only monitors",
                "Only keyboards",
                "Only printers",
              ],
              answer: "Sensors and user devices",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Switching and Network Reliability",
      description:
        "Understand switching loops, STP, redundancy, and network reliability.",

      lessons: [
        {
          title: "Switching Loops",
          content: `
A switching loop occurs when network switches create a circular path for Layer 2 frames.

Loops can cause frames to circulate repeatedly and can create broadcast storms. This can seriously affect network performance.

Network designs therefore use mechanisms such as Spanning Tree Protocol to prevent unwanted Layer 2 loops.
          `,
          quiz: [
            {
              question: "What is a switching loop?",
              options: [
                "A circular Layer 2 path",
                "A broken cable",
                "A router address",
                "A VLAN name",
              ],
              answer: "A circular Layer 2 path",
            },
            {
              question: "What can switching loops cause?",
              options: ["Broadcast storms", "Better battery life", "More storage", "Faster CPUs"],
              answer: "Broadcast storms",
            },
            {
              question: "Which protocol helps prevent Layer 2 loops?",
              options: ["STP", "HTTP", "FTP", "DNS"],
              answer: "STP",
            },
            {
              question: "STP stands for what?",
              options: [
                "Spanning Tree Protocol",
                "Switch Transfer Protocol",
                "System Transport Program",
                "Serial Transmission Protocol",
              ],
              answer: "Spanning Tree Protocol",
            },
            {
              question: "Switching loops mainly affect which network layer?",
              options: ["Layer 2", "Layer 1 only", "Layer 5", "Application layer only"],
              answer: "Layer 2",
            },
          ],
        },

        {
          title: "Spanning Tree Protocol",
          content: `
Spanning Tree Protocol, or STP, is used to prevent loops in switched Ethernet networks.

STP identifies redundant paths and places some ports into a blocking state. If the active path fails, STP can allow another path to become active.

This provides a balance between redundancy and loop prevention.
          `,
          quiz: [
            {
              question: "What is the main purpose of STP?",
              options: [
                "Prevent switching loops",
                "Assign IP addresses",
                "Encrypt data",
                "Store files",
              ],
              answer: "Prevent switching loops",
            },
            {
              question: "What does STP do with some redundant paths?",
              options: [
                "Blocks selected ports",
                "Deletes switches",
                "Changes MAC addresses",
                "Removes VLANs",
              ],
              answer: "Blocks selected ports",
            },
            {
              question: "Why are redundant paths useful?",
              options: [
                "They provide an alternative path",
                "They increase screen size",
                "They store data",
                "They reduce RAM",
              ],
              answer: "They provide an alternative path",
            },
            {
              question: "What happens when an active path fails?",
              options: [
                "Another path can become active",
                "All devices must be replaced",
                "The switch becomes a router",
                "The VLAN disappears",
              ],
              answer: "Another path can become active",
            },
            {
              question: "STP is mainly associated with which technology?",
              options: ["Ethernet switching", "Bluetooth", "GPS", "USB"],
              answer: "Ethernet switching",
            },
          ],
        },

        {
          title: "Switch Redundancy",
          content: `
Redundancy means providing alternative network components or paths so that communication can continue when a component fails.

In switched networks, redundant links and switches can improve availability. However, redundant Layer 2 paths must be managed carefully to avoid loops.

Protocols such as STP help networks use redundancy safely.
          `,
          quiz: [
            {
              question: "What does redundancy provide?",
              options: ["Alternative resources or paths", "More passwords", "More storage only", "Faster displays"],
              answer: "Alternative resources or paths",
            },
            {
              question: "Why are redundant links useful?",
              options: [
                "They can provide backup connectivity",
                "They remove IP addresses",
                "They reduce Ethernet speed",
                "They disable switches",
              ],
              answer: "They can provide backup connectivity",
            },
            {
              question: "What problem can redundant Layer 2 paths create?",
              options: ["Loops", "Low screen resolution", "File corruption only", "Battery charging"],
              answer: "Loops",
            },
            {
              question: "Which protocol helps manage Layer 2 redundancy?",
              options: ["STP", "HTTP", "SMTP", "DNS"],
              answer: "STP",
            },
            {
              question: "What is the main benefit of redundancy?",
              options: ["Improved availability", "More memory", "More CPU cores", "Larger monitors"],
              answer: "Improved availability",
            },
          ],
        },

        {
          title: "Switching Troubleshooting",
          content: `
Switching problems can occur because of incorrect VLAN configuration, damaged cables, incorrect port settings, loops, or hardware failures.

Troubleshooting usually starts by checking physical connectivity and link status. Network administrators can then examine VLAN assignments, MAC address tables, and switch logs.

Tools such as ping and switch diagnostic commands can help identify connectivity problems.
          `,
          quiz: [
            {
              question: "What should be checked first during many network problems?",
              options: ["Physical connectivity", "Website design", "CPU temperature", "File names"],
              answer: "Physical connectivity",
            },
            {
              question: "What table can help identify learned devices?",
              options: ["MAC address table", "File table", "User table", "Image table"],
              answer: "MAC address table",
            },
            {
              question: "What can cause switching problems?",
              options: [
                "Incorrect VLAN configuration",
                "Screen brightness",
                "Keyboard layout",
                "File extension",
              ],
              answer: "Incorrect VLAN configuration",
            },
            {
              question: "Which tool can test basic network connectivity?",
              options: ["ping", "paint", "calculator", "notepad"],
              answer: "ping",
            },
            {
              question: "What can switch logs provide?",
              options: [
                "Information about network events",
                "Video files",
                "Music files",
                "CPU instructions",
              ],
              answer: "Information about network events",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Switching and IoT",
      description:
        "Apply switching concepts to practical networks and IoT systems.",

      lessons: [
        {
          title: "Switching in IoT Networks",
          content: `
IoT systems can contain many sensors, controllers, gateways, and servers. Ethernet switches can connect these devices in a reliable local network.

Switches can be used with VLANs to separate different types of IoT traffic. For example, sensor devices can be placed in one VLAN while management devices use another.

Proper network design improves reliability and simplifies management.
          `,
          quiz: [
            {
              question: "What can switches connect in an IoT network?",
              options: [
                "Sensors and controllers",
                "Only monitors",
                "Only keyboards",
                "Only phones",
              ],
              answer: "Sensors and controllers",
            },
            {
              question: "Why can VLANs be useful in IoT networks?",
              options: [
                "To separate different types of traffic",
                "To increase sensor voltage",
                "To replace sensors",
                "To remove Ethernet",
              ],
              answer: "To separate different types of traffic",
            },
            {
              question: "What can good network design improve?",
              options: ["Reliability and management", "Screen size", "Battery color", "Keyboard speed"],
              answer: "Reliability and management",
            },
            {
              question: "Which device can connect many wired IoT devices?",
              options: ["Network switch", "Monitor", "Keyboard", "Speaker"],
              answer: "Network switch",
            },
            {
              question: "IoT networks may contain what?",
              options: [
                "Sensors, controllers, and gateways",
                "Only computers",
                "Only printers",
                "Only phones",
              ],
              answer: "Sensors, controllers, and gateways",
            },
          ],
        },

        {
          title: "Managed and Unmanaged Switches",
          content: `
Unmanaged switches are simple devices that generally work without manual configuration. They are useful for basic network connectivity.

Managed switches provide configuration and monitoring features. Administrators can configure VLANs, port settings, security features, and network monitoring.

Managed switches are useful in larger enterprise and industrial IoT networks.
          `,
          quiz: [
            {
              question: "Which switch type normally requires little configuration?",
              options: ["Unmanaged switch", "Managed switch", "Router", "Firewall"],
              answer: "Unmanaged switch",
            },
            {
              question: "Which switch supports VLAN configuration?",
              options: ["Managed switch", "Basic hub", "Monitor", "Keyboard"],
              answer: "Managed switch",
            },
            {
              question: "What can managed switches provide?",
              options: [
                "Configuration and monitoring",
                "Video editing",
                "File compression",
                "Battery charging",
              ],
              answer: "Configuration and monitoring",
            },
            {
              question: "Where are managed switches useful?",
              options: [
                "Enterprise and industrial networks",
                "Only home keyboards",
                "Only mobile phones",
                "Only cameras",
              ],
              answer: "Enterprise and industrial networks",
            },
            {
              question: "What is a common advantage of an unmanaged switch?",
              options: [
                "Simple operation",
                "Advanced routing",
                "Complex VLAN control",
                "Advanced monitoring",
              ],
              answer: "Simple operation",
            },
          ],
        },

        {
          title: "Switch Security",
          content: `
Switch security protects network ports and connected devices from unauthorized access.

Common techniques include port security, disabling unused ports, controlling VLAN access, and monitoring network activity.

In IoT environments, switch security can help prevent unauthorized devices from connecting to the network.
          `,
          quiz: [
            {
              question: "What is the purpose of switch security?",
              options: [
                "Protect network access",
                "Increase screen size",
                "Store files",
                "Change sensor values",
              ],
              answer: "Protect network access",
            },
            {
              question: "What should often be done with unused ports?",
              options: [
                "Disable them when appropriate",
                "Increase their speed",
                "Connect them to every device",
                "Remove VLANs",
              ],
              answer: "Disable them when appropriate",
            },
            {
              question: "What can port security help control?",
              options: [
                "Devices connecting to ports",
                "Monitor brightness",
                "CPU temperature",
                "File names",
              ],
              answer: "Devices connecting to ports",
            },
            {
              question: "Switch security is especially useful for what?",
              options: ["Network access control", "Video editing", "Gaming graphics", "File compression"],
              answer: "Network access control",
            },
            {
              question: "What can monitoring help identify?",
              options: [
                "Unusual network activity",
                "Screen size",
                "Keyboard type",
                "File format",
              ],
              answer: "Unusual network activity",
            },
          ],
        },

        {
          title: "Mini Project: IoT Network Switching",
          content: `
In this mini project, design a small IoT network using an Ethernet switch.

Connect sensors, an IoT controller, and a monitoring computer to the switch. Create separate VLANs for sensor devices and management devices if the switch supports VLAN configuration.

Configure the required ports, verify MAC address learning, test connectivity, and troubleshoot any communication problems.

This project combines Ethernet, MAC addresses, VLANs, switching, and network troubleshooting.
          `,
          quiz: [
            {
              question: "What is the main component used in this project?",
              options: ["Ethernet switch", "Monitor", "Keyboard", "Speaker"],
              answer: "Ethernet switch",
            },
            {
              question: "What can be used to separate sensor and management traffic?",
              options: ["VLANs", "Keyboard shortcuts", "File folders", "USB cables"],
              answer: "VLANs",
            },
            {
              question: "What should be checked after configuring the network?",
              options: [
                "Connectivity",
                "Screen brightness",
                "Keyboard color",
                "File size",
              ],
              answer: "Connectivity",
            },
            {
              question: "What does the switch learn from incoming frames?",
              options: ["MAC addresses", "Passwords", "File names", "Sensor passwords"],
              answer: "MAC addresses",
            },
            {
              question: "What concepts are combined in the project?",
              options: [
                "Ethernet, VLANs, and switching",
                "Only programming",
                "Only databases",
                "Only web design",
              ],
              answer: "Ethernet, VLANs, and switching",
            },
          ],
        },
      ],
    },
  ],
};

export default switchingCourse;
const routingCourse = {
  title: "Routing",
  description:
    "Learn routing fundamentals, IP addressing, routing tables, routing protocols, and routing for IoT and embedded networks.",

  weeks: [
    {
      title: "Week 1: Routing Fundamentals",
      description:
        "Understand networks, IP addresses, routers, packets, and the basic purpose of routing.",

      lessons: [
        {
          title: "Introduction to Routing",
          content: `
Routing is the process of selecting a path for data packets to travel from a source network to a destination network.

Routers connect different networks and forward packets between them.

For example, when an IoT device sends data to a cloud server, the data may pass through multiple routers before reaching the destination.

Routing helps networks communicate efficiently and reach the correct destination.
          `,
          quiz: [
            {
              question: "What is routing?",
              options: [
                "Selecting a path for data packets",
                "Programming a microcontroller",
                "Measuring voltage",
                "Storing sensor data",
              ],
              answer: "Selecting a path for data packets",
            },
            {
              question: "Which device connects different networks?",
              options: ["Router", "Sensor", "ADC", "LED"],
              answer: "Router",
            },
            {
              question: "What does a router forward?",
              options: ["Data packets", "Only power", "Only programs", "Only sensor values"],
              answer: "Data packets",
            },
            {
              question: "Routing is important for?",
              options: ["Network communication", "Only GPIO control", "Only battery charging", "Only display control"],
              answer: "Network communication",
            },
            {
              question: "An IoT device sending data to the cloud may use?",
              options: ["Multiple routers", "Only one GPIO", "Only an ADC", "Only a timer"],
              answer: "Multiple routers",
            },
          ],
        },

        {
          title: "IP Addressing",
          content: `
An IP address identifies a device or network interface on an IP network.

IPv4 addresses contain 32 bits and are commonly written in dotted decimal notation, such as 192.168.1.10.

IPv6 uses 128-bit addresses and provides a much larger address space.

Routers use destination IP addresses to determine where packets should be forwarded.

Correct IP addressing is essential for communication between networks.
          `,
          quiz: [
            {
              question: "What does an IP address identify?",
              options: [
                "A device or network interface",
                "Only a sensor",
                "Only a processor",
                "Only a battery",
              ],
              answer: "A device or network interface",
            },
            {
              question: "How many bits does IPv4 use?",
              options: ["32", "16", "64", "128"],
              answer: "32",
            },
            {
              question: "How many bits does IPv6 use?",
              options: ["128", "32", "16", "64"],
              answer: "128",
            },
            {
              question: "Routers examine which address when forwarding packets?",
              options: ["Destination IP address", "MAC color", "GPIO address", "Sensor value"],
              answer: "Destination IP address",
            },
            {
              question: "Which is an IPv4 address?",
              options: [
                "192.168.1.10",
                "192-168-1",
                "GPIO.10",
                "TEMP.25",
              ],
              answer: "192.168.1.10",
            },
          ],
        },

        {
          title: "Routers and Packets",
          content: `
A packet contains information that allows network data to be delivered to its destination.

A router receives a packet, examines its destination address, and selects an appropriate next hop.

The router then forwards the packet toward the destination.

Routers maintain routing information to make forwarding decisions.

This process continues until the packet reaches the destination network.
          `,
          quiz: [
            {
              question: "What does a router examine?",
              options: ["Destination address", "Screen size", "Battery level", "Sensor voltage"],
              answer: "Destination address",
            },
            {
              question: "What does a router forward?",
              options: ["Packets", "Only programs", "Only sensors", "Only power"],
              answer: "Packets",
            },
            {
              question: "A next hop is?",
              options: ["The next routing destination", "A sensor value", "A GPIO pin", "A CPU register"],
              answer: "The next routing destination",
            },
            {
              question: "Routers use routing information to?",
              options: ["Make forwarding decisions", "Measure temperature", "Control LEDs", "Charge batteries"],
              answer: "Make forwarding decisions",
            },
            {
              question: "Packet forwarding continues until?",
              options: ["The destination is reached", "The sensor stops", "The battery doubles", "The CPU shuts down"],
              answer: "The destination is reached",
            },
          ],
        },

        {
          title: "Subnetworks and Subnet Masks",
          content: `
A network can be divided into smaller networks called subnetworks or subnets.

A subnet mask helps determine which portion of an IPv4 address represents the network and which portion represents the host.

For example, 192.168.1.10 with a common /24 network has 24 network bits.

Subnetting helps organize networks and can reduce unnecessary traffic.

It is widely used in home, enterprise, cloud, and IoT networks.
          `,
          quiz: [
            {
              question: "What is a smaller division of a network called?",
              options: ["Subnet", "Sensor", "Packet", "Gateway"],
              answer: "Subnet",
            },
            {
              question: "What does a subnet mask help identify?",
              options: ["Network and host portions", "CPU and RAM", "Sensor and actuator", "Power and ground"],
              answer: "Network and host portions",
            },
            {
              question: "A /24 IPv4 network has how many network bits?",
              options: ["24", "8", "16", "32"],
              answer: "24",
            },
            {
              question: "Subnetting can help?",
              options: ["Organize networks", "Increase battery voltage", "Replace routers", "Remove IP addresses"],
              answer: "Organize networks",
            },
            {
              question: "Subnetting is useful in?",
              options: ["IoT and enterprise networks", "Only analog circuits", "Only displays", "Only sensors"],
              answer: "IoT and enterprise networks",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Routing Tables and Gateways",
      description:
        "Learn routing tables, default gateways, static routes, and packet forwarding decisions.",

      lessons: [
        {
          title: "Routing Tables",
          content: `
A routing table contains information used by a router to decide where packets should be forwarded.

Entries can contain destination networks, next-hop information, interfaces, and metrics.

When a packet arrives, the router compares its destination address with routing table entries.

The best matching route is selected for forwarding.

Routing tables may contain directly connected, static, and dynamically learned routes.
          `,
          quiz: [
            {
              question: "What is the purpose of a routing table?",
              options: [
                "Help decide where packets are forwarded",
                "Store sensor temperature",
                "Control an LED",
                "Store passwords",
              ],
              answer: "Help decide where packets are forwarded",
            },
            {
              question: "A routing table can contain?",
              options: ["Destination networks", "Only sensor values", "Only GPIO pins", "Only passwords"],
              answer: "Destination networks",
            },
            {
              question: "A router compares a packet with?",
              options: ["Routing table entries", "Battery voltage", "Screen size", "Sensor type"],
              answer: "Routing table entries",
            },
            {
              question: "Which route is selected when multiple routes match?",
              options: ["Best matching route", "Random route", "First sensor", "Last packet"],
              answer: "Best matching route",
            },
            {
              question: "Routes can be learned dynamically?",
              options: ["Yes", "No", "Only by sensors", "Only by LEDs"],
              answer: "Yes",
            },
          ],
        },

        {
          title: "Default Gateway",
          content: `
A default gateway is the router used by a device when the destination is outside its local network.

For example, a computer on a home network may send Internet traffic to its local router.

The router then forwards the traffic toward the destination.

The default gateway provides a path from the local network to other networks.

Incorrect gateway configuration can prevent devices from reaching external networks.
          `,
          quiz: [
            {
              question: "What is a default gateway?",
              options: [
                "Router used for destinations outside the local network",
                "A sensor",
                "A database",
                "A GPIO pin",
              ],
              answer: "Router used for destinations outside the local network",
            },
            {
              question: "A device uses the default gateway for?",
              options: ["External network traffic", "Only local GPIO", "Only ADC", "Only PWM"],
              answer: "External network traffic",
            },
            {
              question: "In a home network, the default gateway is commonly?",
              options: ["The local router", "The temperature sensor", "The keyboard", "The monitor"],
              answer: "The local router",
            },
            {
              question: "Incorrect gateway configuration can cause?",
              options: ["Loss of external connectivity", "Higher battery capacity", "Better sensors", "More storage"],
              answer: "Loss of external connectivity",
            },
            {
              question: "The gateway connects a local network to?",
              options: ["Other networks", "Only LEDs", "Only sensors", "Only GPIO pins"],
              answer: "Other networks",
            },
          ],
        },

        {
          title: "Static Routing",
          content: `
Static routing uses routes that are manually configured by a network administrator.

A static route can specify a destination network and the next hop or outgoing interface.

Static routing is simple and predictable for small networks.

However, manually configured routes may become difficult to manage as the network grows.

Static routes are useful in small networks and specific network designs where the path is known.
          `,
          quiz: [
            {
              question: "Who configures a static route?",
              options: ["Network administrator", "Sensor", "ADC", "Dashboard"],
              answer: "Network administrator",
            },
            {
              question: "Static routes are?",
              options: ["Manually configured", "Always automatically learned", "Generated by sensors", "Created by LEDs"],
              answer: "Manually configured",
            },
            {
              question: "Static routing is useful for?",
              options: ["Small networks", "Only huge networks", "Only sensors", "Only cloud storage"],
              answer: "Small networks",
            },
            {
              question: "A static route can specify?",
              options: ["Next hop", "Sensor temperature only", "Battery level", "Screen size"],
              answer: "Next hop",
            },
            {
              question: "A limitation of static routing is?",
              options: [
                "Manual management as networks grow",
                "No IP addresses",
                "No routers",
                "No packets",
              ],
              answer: "Manual management as networks grow",
            },
          ],
        },

        {
          title: "Dynamic Routing",
          content: `
Dynamic routing allows routers to learn routes automatically using routing protocols.

Routers exchange routing information and update their routing tables when network conditions change.

Dynamic routing is useful for larger or changing networks.

Examples of routing protocols include RIP, OSPF, and BGP.

Dynamic routing can reduce the need for manually configuring every route.
          `,
          quiz: [
            {
              question: "What does dynamic routing allow?",
              options: [
                "Automatic route learning",
                "Only manual routes",
                "Only sensor communication",
                "Only local storage",
              ],
              answer: "Automatic route learning",
            },
            {
              question: "Routers exchange?",
              options: ["Routing information", "Only sensor data", "Only passwords", "Only GPIO values"],
              answer: "Routing information",
            },
            {
              question: "Which is a routing protocol?",
              options: ["OSPF", "GPIO", "PWM", "ADC"],
              answer: "OSPF",
            },
            {
              question: "Dynamic routing is useful for?",
              options: ["Larger networks", "Only one device", "Only sensors", "Only offline systems"],
              answer: "Larger networks",
            },
            {
              question: "Dynamic routing can reduce?",
              options: ["Manual route configuration", "IP addresses", "Network connectivity", "Packet forwarding"],
              answer: "Manual route configuration",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Routing Protocols",
      description:
        "Understand common routing protocols and how routers select paths.",

      lessons: [
        {
          title: "RIP Protocol",
          content: `
RIP, or Routing Information Protocol, is a distance-vector routing protocol.

RIP uses hop count as its routing metric.

A hop represents one router crossed by a packet.

RIP is simple to configure but has limitations for large networks.

It is mainly useful for understanding basic dynamic routing concepts.
          `,
          quiz: [
            {
              question: "What does RIP stand for?",
              options: [
                "Routing Information Protocol",
                "Remote Internet Protocol",
                "Router Interface Process",
                "Routing Internet Platform",
              ],
              answer: "Routing Information Protocol",
            },
            {
              question: "RIP is a?",
              options: ["Distance-vector protocol", "Hardware interface", "Sensor protocol", "Storage protocol"],
              answer: "Distance-vector protocol",
            },
            {
              question: "What metric does RIP use?",
              options: ["Hop count", "Temperature", "Voltage", "Bandwidth only"],
              answer: "Hop count",
            },
            {
              question: "A hop represents?",
              options: ["A router crossed by a packet", "A sensor reading", "A GPIO signal", "A database"],
              answer: "A router crossed by a packet",
            },
            {
              question: "RIP is mainly useful for?",
              options: ["Basic routing concepts", "Only cloud storage", "Only IoT sensors", "Only encryption"],
              answer: "Basic routing concepts",
            },
          ],
        },

        {
          title: "OSPF Protocol",
          content: `
OSPF stands for Open Shortest Path First.

It is a link-state routing protocol commonly used in IP networks.

OSPF builds knowledge of the network topology and uses this information to calculate suitable paths.

It can support larger networks more effectively than simple distance-vector protocols.

OSPF uses a cost metric when selecting routes.
          `,
          quiz: [
            {
              question: "What does OSPF stand for?",
              options: [
                "Open Shortest Path First",
                "Open Secure Packet Forwarding",
                "Online Shortest Protocol Framework",
                "Open System Packet Flow",
              ],
              answer: "Open Shortest Path First",
            },
            {
              question: "OSPF is a?",
              options: ["Link-state protocol", "Sensor protocol", "Storage protocol", "Hardware protocol"],
              answer: "Link-state protocol",
            },
            {
              question: "OSPF builds knowledge of?",
              options: ["Network topology", "Battery level", "Sensor temperature", "Screen resolution"],
              answer: "Network topology",
            },
            {
              question: "OSPF uses which metric?",
              options: ["Cost", "Temperature", "Voltage", "GPIO number"],
              answer: "Cost",
            },
            {
              question: "OSPF is suitable for?",
              options: ["Larger IP networks", "Only one device", "Only sensors", "Only offline systems"],
              answer: "Larger IP networks",
            },
          ],
        },

        {
          title: "BGP and Internet Routing",
          content: `
BGP, or Border Gateway Protocol, is used to exchange routing information between large networks called autonomous systems.

The Internet consists of many independently managed networks.

BGP helps these networks exchange information about reachable destinations.

Unlike protocols designed mainly for routing inside one organization, BGP is widely used for inter-domain routing.

BGP plays an important role in Internet connectivity.
          `,
          quiz: [
            {
              question: "What does BGP stand for?",
              options: [
                "Border Gateway Protocol",
                "Basic Gateway Process",
                "Broadband Gateway Program",
                "Binary Gateway Protocol",
              ],
              answer: "Border Gateway Protocol",
            },
            {
              question: "BGP is mainly used between?",
              options: ["Autonomous systems", "GPIO pins", "Sensors", "Microcontrollers only"],
              answer: "Autonomous systems",
            },
            {
              question: "BGP is important for?",
              options: ["Internet routing", "Only local GPIO", "Only sensor readings", "Only cloud storage"],
              answer: "Internet routing",
            },
            {
              question: "An autonomous system is?",
              options: [
                "A network under common administrative control",
                "A temperature sensor",
                "A microcontroller register",
                "A battery",
              ],
              answer: "A network under common administrative control",
            },
            {
              question: "BGP exchanges?",
              options: ["Routing information", "Only sensor data", "Only passwords", "Only GPIO values"],
              answer: "Routing information",
            },
          ],
        },

        {
          title: "Routing Metrics and Path Selection",
          content: `
Routing protocols use metrics to compare possible paths.

Different protocols may use different metrics, such as hop count, cost, bandwidth, delay, or other values.

The routing protocol uses its rules to select an appropriate path.

A shorter path is not always the best path if another path provides better network characteristics.

Understanding metrics helps explain how routers make routing decisions.
          `,
          quiz: [
            {
              question: "Why are routing metrics used?",
              options: [
                "To compare possible paths",
                "To measure battery voltage",
                "To control sensors",
                "To increase storage",
              ],
              answer: "To compare possible paths",
            },
            {
              question: "Which can be a routing metric?",
              options: ["Hop count", "Temperature", "Screen size", "Battery weight"],
              answer: "Hop count",
            },
            {
              question: "Can bandwidth be used as a routing metric?",
              options: ["Yes", "No", "Only with sensors", "Only with LEDs"],
              answer: "Yes",
            },
            {
              question: "Is the shortest path always the best?",
              options: ["Not necessarily", "Always", "Never", "Only for GPIO"],
              answer: "Not necessarily",
            },
            {
              question: "Routing metrics help routers?",
              options: ["Select suitable paths", "Read sensors", "Control LEDs", "Store passwords"],
              answer: "Select suitable paths",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Routing for IoT and Embedded Systems",
      description:
        "Apply routing concepts to IoT, wireless networks, troubleshooting, and practical projects.",

      lessons: [
        {
          title: "Routing in IoT Networks",
          content: `
IoT networks may contain many sensors, gateways, and cloud-connected devices.

Routing allows data to move between these devices and remote services.

Some IoT networks use gateways to connect local sensor networks to IP networks.

Efficient routing is important because many IoT devices have limited power and processing resources.

Routing decisions should consider reliability, network size, and resource constraints.
          `,
          quiz: [
            {
              question: "IoT networks may contain?",
              options: ["Sensors and gateways", "Only computers", "Only printers", "Only displays"],
              answer: "Sensors and gateways",
            },
            {
              question: "What allows data to move between networks?",
              options: ["Routing", "ADC", "PWM", "GPIO"],
              answer: "Routing",
            },
            {
              question: "What can connect local sensor networks to IP networks?",
              options: ["Gateway", "LED", "ADC", "Timer"],
              answer: "Gateway",
            },
            {
              question: "IoT routing should consider?",
              options: ["Power and resource limitations", "Only screen size", "Only keyboard type", "Only display color"],
              answer: "Power and resource limitations",
            },
            {
              question: "Efficient routing helps IoT systems?",
              options: ["Communicate reliably", "Remove all sensors", "Increase voltage", "Disable networks"],
              answer: "Communicate reliably",
            },
          ],
        },

        {
          title: "Routing and Wireless Networks",
          content: `
Wireless IoT networks require careful routing because signal quality and device availability can change.

Devices may communicate through intermediate nodes before reaching a gateway.

Wireless routing can consider link quality, energy usage, and network connectivity.

In low-power IoT networks, efficient routing can help extend device battery life.

Network topology can also change when devices move, sleep, or become unavailable.
          `,
          quiz: [
            {
              question: "Wireless routing can be affected by?",
              options: ["Signal quality", "Screen brightness", "CPU color", "Keyboard size"],
              answer: "Signal quality",
            },
            {
              question: "Devices may communicate through?",
              options: ["Intermediate nodes", "Only batteries", "Only sensors", "Only displays"],
              answer: "Intermediate nodes",
            },
            {
              question: "IoT routing can consider?",
              options: ["Energy usage", "Only screen size", "Only keyboard type", "Only speaker volume"],
              answer: "Energy usage",
            },
            {
              question: "Efficient routing can help extend?",
              options: ["Battery life", "Screen size", "CPU size", "Sensor weight"],
              answer: "Battery life",
            },
            {
              question: "Wireless topology may change when devices?",
              options: ["Move or become unavailable", "Increase screen size", "Change color", "Increase storage"],
              answer: "Move or become unavailable",
            },
          ],
        },

        {
          title: "Routing Troubleshooting",
          content: `
Routing problems can prevent devices from reaching their destination.

Common issues include incorrect IP addresses, wrong subnet masks, incorrect gateways, missing routes, and interface failures.

Tools such as ping, traceroute, and routing-table commands can help identify network problems.

Troubleshooting should begin by checking basic connectivity and then examining routing information.

A systematic approach makes network troubleshooting easier.
          `,
          quiz: [
            {
              question: "Which can cause routing problems?",
              options: ["Incorrect gateway", "Correct IP address", "Working interface", "Valid route"],
              answer: "Incorrect gateway",
            },
            {
              question: "Which tool can test basic connectivity?",
              options: ["Ping", "Compiler", "ADC", "PWM"],
              answer: "Ping",
            },
            {
              question: "Which tool can show the path packets take?",
              options: ["Traceroute", "GPIO", "UART", "ADC"],
              answer: "Traceroute",
            },
            {
              question: "Troubleshooting should begin with?",
              options: ["Basic connectivity checks", "Changing all configurations", "Replacing hardware", "Deleting routes"],
              answer: "Basic connectivity checks",
            },
            {
              question: "Routing-table information helps identify?",
              options: ["Missing or incorrect routes", "Sensor temperature", "Battery level", "Screen size"],
              answer: "Missing or incorrect routes",
            },
          ],
        },

        {
          title: "Mini Project: IoT Network Routing",
          content: `
Build a small IoT network with multiple devices connected through a router or gateway.

Configure IP addresses for the devices and verify that they can communicate.

Create a simple network where sensor data travels from an IoT device through the network to a monitoring application.

Use basic routing information to understand how packets reach the destination.

Test connectivity using tools such as ping and examine the routing path when required.

This project connects networking concepts with practical IoT communication.
          `,
          quiz: [
            {
              question: "What is configured for IoT devices?",
              options: ["IP addresses", "Only screen brightness", "Only battery size", "Only sensor color"],
              answer: "IP addresses",
            },
            {
              question: "What device can connect the IoT network to another network?",
              options: ["Router or gateway", "LED", "ADC", "Timer"],
              answer: "Router or gateway",
            },
            {
              question: "Which tool can test connectivity?",
              options: ["Ping", "PWM", "GPIO", "ADC"],
              answer: "Ping",
            },
            {
              question: "What travels through the network?",
              options: ["Data packets", "Only power", "Only sensor hardware", "Only source code"],
              answer: "Data packets",
            },
            {
              question: "The project demonstrates?",
              options: [
                "Routing for IoT communication",
                "Only sensor programming",
                "Only battery charging",
                "Only display control",
              ],
              answer: "Routing for IoT communication",
            },
          ],
        },
      ],
    },
  ],
};

export default routingCourse;
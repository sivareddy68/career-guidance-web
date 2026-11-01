const networkingFundamentalsCourse = {
  title: "Networking Fundamentals",
  description:
    "Learn the foundations of computer networking, OSI and TCP/IP models, Ethernet, IP addressing, ports, TCP and UDP, DNS, DHCP, switching, routing, wireless networking, troubleshooting, and practical network design.",

  weeks: [
    {
      title: "Week 1: Networking Foundations",
      description:
        "Understand what computer networks are, common network types and devices, the OSI model, and the TCP/IP model.",

      lessons: [
        {
          title: "What Computer Networks Are",
          content: `
A computer network is a group of devices connected so they can communicate and share resources.

Common network devices include computers, phones, servers, printers, switches, and routers.

Networks allow users to share files, access websites, communicate with other systems, and use shared resources.

A network can be small, such as a few computers in a home, or very large, such as the Internet.

Important networking terms include:
- Node: Any device connected to a network.
- Client: A device or application requesting a service.
- Server: A system providing a service.
- Protocol: A set of rules used for communication.
- Network medium: The method used to carry data, such as Ethernet cable or Wi-Fi.

Data is divided into smaller units and transmitted between devices.

A basic communication process is:
Sender → Network → Receiver

Reliable communication requires addressing, protocols, and suitable network devices.
          `,
          quiz: [
            {
              question: "What is a computer network?",
              options: [
                "A group of connected devices that communicate",
                "A single computer with many files",
                "A program used only for typing",
                "A storage device",
              ],
              answer: "A group of connected devices that communicate",
            },
            {
              question: "What is a node in networking?",
              options: [
                "A device connected to a network",
                "Only a network cable",
                "Only a router",
                "A type of password",
              ],
              answer: "A device connected to a network",
            },
            {
              question: "What is a protocol?",
              options: [
                "A set of communication rules",
                "A physical cable",
                "A computer monitor",
                "A storage location",
              ],
              answer: "A set of communication rules",
            },
            {
              question: "Which device commonly provides services to clients?",
              options: ["Server", "Keyboard", "Monitor", "Printer"],
              answer: "Server",
            },
            {
              question: "What is one major purpose of networking?",
              options: [
                "Sharing resources and information",
                "Increasing monitor size",
                "Replacing computer memory",
                "Changing keyboard layouts",
              ],
              answer: "Sharing resources and information",
            },
          ],
        },

        {
          title: "Network Types, Topologies, and Devices",
          content: `
Networks can be classified based on their size and purpose.

PAN stands for Personal Area Network and usually covers a very small area around a person.

LAN stands for Local Area Network. It is commonly used in homes, schools, offices, and laboratories.

MAN stands for Metropolitan Area Network and can cover a city or large campus.

WAN stands for Wide Area Network and connects networks across large geographical areas.

Network topology describes how devices are arranged.

Common topologies include:
- Star
- Bus
- Ring
- Mesh

A switch connects devices within a local network.

A router connects different networks and forwards packets between them.

An access point provides wireless network connectivity.

A modem can provide the connection between a local network and an Internet service.

Choosing a network type and topology depends on size, cost, reliability, and requirements.
          `,
          quiz: [
            {
              question: "What does LAN stand for?",
              options: [
                "Local Area Network",
                "Large Access Network",
                "Linked Area Node",
                "Local Access Node",
              ],
              answer: "Local Area Network",
            },
            {
              question: "Which network type normally covers the largest geographical area?",
              options: ["WAN", "PAN", "LAN", "CAN"],
              answer: "WAN",
            },
            {
              question: "Which topology commonly connects devices to a central switch?",
              options: ["Star", "Ring", "Bus", "Line"],
              answer: "Star",
            },
            {
              question: "Which device connects different networks?",
              options: ["Router", "Keyboard", "Monitor", "Repeater"],
              answer: "Router",
            },
            {
              question: "Which device commonly provides Wi-Fi connectivity?",
              options: [
                "Wireless access point",
                "Printer",
                "Hard disk",
                "Keyboard",
              ],
              answer: "Wireless access point",
            },
          ],
        },

        {
          title: "OSI Model",
          content: `
The OSI model is a conceptual model used to understand network communication.

It contains seven layers:

1. Physical
2. Data Link
3. Network
4. Transport
5. Session
6. Presentation
7. Application

The Physical layer deals with signals, cables, connectors, and physical transmission.

The Data Link layer handles frames and local network communication.

The Network layer deals with logical addressing and routing.

The Transport layer provides communication between applications and can provide reliability.

The Session layer manages communication sessions.

The Presentation layer deals with data representation, encoding, and related transformations.

The Application layer provides network services used by applications.

The OSI model helps network engineers understand where a problem or protocol belongs.
          `,
          quiz: [
            {
              question: "How many layers are in the OSI model?",
              options: ["7", "4", "5", "8"],
              answer: "7",
            },
            {
              question: "Which OSI layer deals with routing and logical addressing?",
              options: [
                "Network",
                "Physical",
                "Presentation",
                "Session",
              ],
              answer: "Network",
            },
            {
              question: "Which layer is responsible for physical signals?",
              options: [
                "Physical",
                "Transport",
                "Application",
                "Network",
              ],
              answer: "Physical",
            },
            {
              question: "Which OSI layer handles end-to-end transport?",
              options: [
                "Transport",
                "Data Link",
                "Physical",
                "Presentation",
              ],
              answer: "Transport",
            },
            {
              question: "Which is the highest OSI layer?",
              options: [
                "Application",
                "Transport",
                "Network",
                "Session",
              ],
              answer: "Application",
            },
          ],
        },

        {
          title: "TCP/IP Model and Encapsulation",
          content: `
The TCP/IP model is widely used in real computer networks and the Internet.

A commonly used version contains four layers:
- Application
- Transport
- Internet
- Network Access

The Application layer includes protocols used by applications, such as HTTP, DNS, and SMTP.

The Transport layer includes TCP and UDP.

The Internet layer handles IP addressing and routing.

The Network Access layer handles communication over the local network medium.

When data is sent, each layer adds information needed by the next layer. This process is called encapsulation.

At the receiving side, the added information is removed as data moves upward through the layers. This is called decapsulation.

Understanding encapsulation helps explain how data travels through a network.
          `,
          quiz: [
            {
              question: "Which model is widely used for Internet communication?",
              options: ["TCP/IP", "OSI only", "BIOS", "HTML"],
              answer: "TCP/IP",
            },
            {
              question: "Which TCP/IP layer contains TCP and UDP?",
              options: [
                "Transport",
                "Application",
                "Internet",
                "Network Access",
              ],
              answer: "Transport",
            },
            {
              question: "Which TCP/IP layer handles IP routing?",
              options: [
                "Internet",
                "Application",
                "Transport",
                "Network Access",
              ],
              answer: "Internet",
            },
            {
              question: "What is encapsulation?",
              options: [
                "Adding control information as data moves through layers",
                "Deleting all network data",
                "Disconnecting a network",
                "Changing a computer's hardware",
              ],
              answer:
                "Adding control information as data moves through layers",
            },
            {
              question: "What is decapsulation?",
              options: [
                "Removing protocol information at the receiving side",
                "Adding a new router",
                "Creating a Wi-Fi network",
                "Replacing an IP address",
              ],
              answer: "Removing protocol information at the receiving side",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Addressing and Protocols",
      description:
        "Learn Ethernet, MAC addresses, IP addressing, ports, TCP, UDP, DNS, and DHCP.",

      lessons: [
        {
          title: "MAC Addresses and Ethernet",
          content: `
A MAC address is a hardware-level address associated with a network interface.

MAC addresses are normally represented using hexadecimal values.

Ethernet is a common technology used for wired local area networks.

Ethernet sends data using frames.

A frame can contain source and destination MAC addresses along with other control information and payload data.

Switches use MAC addresses to make forwarding decisions within a LAN.

A switch learns which MAC addresses are available on which ports by observing network traffic.

ARP can be used with IPv4 networks to discover the MAC address associated with a local IP address.

MAC addresses are mainly used for communication on the local network.
          `,
          quiz: [
            {
              question: "What does a MAC address identify?",
              options: [
                "A network interface",
                "A website",
                "A DNS server only",
                "A file",
              ],
              answer: "A network interface",
            },
            {
              question: "Ethernet commonly uses which type of data unit?",
              options: ["Frame", "Segment", "File", "Query"],
              answer: "Frame",
            },
            {
              question: "Which device uses MAC addresses to forward LAN traffic?",
              options: ["Switch", "Router only", "Modem only", "Printer"],
              answer: "Switch",
            },
            {
              question: "What number system is commonly used to represent MAC addresses?",
              options: ["Hexadecimal", "Binary only", "Roman", "Decimal only"],
              answer: "Hexadecimal",
            },
            {
              question: "What does ARP help discover in IPv4 LANs?",
              options: [
                "A MAC address associated with an IP address",
                "A website domain",
                "A TCP port",
                "A Wi-Fi password",
              ],
              answer: "A MAC address associated with an IP address",
            },
          ],
        },

        {
          title: "IPv4 and IPv6 Basics",
          content: `
An IP address identifies a device interface at the network layer.

IPv4 uses 32-bit addresses and is normally written as four decimal numbers separated by dots.

For example, 192.168.1.10 is an IPv4 address.

IPv6 was developed to provide a much larger address space. IPv6 addresses use 128 bits and are written using hexadecimal notation.

IPv4 networks can contain private address ranges used inside local networks.

A public IP address can be reachable through the Internet, depending on network configuration and security controls.

The address 127.0.0.1 is the IPv4 loopback address and refers to the local machine.

IPv6 uses a special loopback address written as ::1.

Understanding IP addressing is essential for routing and troubleshooting.
          `,
          quiz: [
            {
              question: "How many bits are in an IPv4 address?",
              options: ["32", "64", "128", "16"],
              answer: "32",
            },
            {
              question: "How many bits are in an IPv6 address?",
              options: ["128", "32", "64", "256"],
              answer: "128",
            },
            {
              question: "Which address is the IPv4 loopback address?",
              options: ["127.0.0.1", "192.168.1.1", "8.8.8.8", "255.255.255.0"],
              answer: "127.0.0.1",
            },
            {
              question: "Which notation is commonly used for IPv4 addresses?",
              options: [
                "Dotted decimal",
                "Hexadecimal groups only",
                "Roman numerals",
                "Binary words",
              ],
              answer: "Dotted decimal",
            },
            {
              question: "What is a major reason for IPv6?",
              options: [
                "A much larger address space",
                "Removing all network protocols",
                "Replacing Ethernet cables",
                "Eliminating routers",
              ],
              answer: "A much larger address space",
            },
          ],
        },

        {
          title: "Ports, TCP, and UDP",
          content: `
A port identifies a particular network service or application endpoint.

For example, web services commonly use ports such as 80 for HTTP and 443 for HTTPS.

TCP is connection-oriented and provides reliable, ordered delivery.

TCP uses mechanisms such as acknowledgments, sequencing, retransmission, and flow control.

UDP is connectionless and has less overhead than TCP. It does not provide the same built-in reliability and ordering.

UDP is useful when low overhead and speed are important, such as some real-time applications.

A socket can be understood as an endpoint used for network communication, commonly involving an IP address and port.

Choosing TCP or UDP depends on the application's requirements.
          `,
          quiz: [
            {
              question: "What does a network port identify?",
              options: [
                "A service or application endpoint",
                "A physical monitor",
                "A computer's keyboard",
                "A file extension",
              ],
              answer: "A service or application endpoint",
            },
            {
              question: "Which protocol provides reliable ordered delivery?",
              options: ["TCP", "UDP", "ARP", "DNS"],
              answer: "TCP",
            },
            {
              question: "Which protocol generally has lower overhead?",
              options: ["UDP", "TCP", "HTTP", "Ethernet"],
              answer: "UDP",
            },
            {
              question: "Which port is commonly associated with HTTPS?",
              options: ["443", "21", "25", "53"],
              answer: "443",
            },
            {
              question: "Which protocol uses acknowledgments and retransmission for reliability?",
              options: ["TCP", "UDP", "ARP", "DHCP"],
              answer: "TCP",
            },
          ],
        },

        {
          title: "DNS and DHCP",
          content: `
DNS stands for Domain Name System.

DNS translates domain names into IP addresses so users can access services using names instead of remembering numerical addresses.

For example, a domain name can be resolved to an IP address before a connection is established.

DNS can use different record types. An A record maps a name to an IPv4 address, while an AAAA record maps a name to an IPv6 address.

DHCP stands for Dynamic Host Configuration Protocol.

DHCP can automatically provide devices with network configuration such as an IP address, subnet mask, default gateway, and DNS server.

A common DHCP process is called DORA:
- Discover
- Offer
- Request
- Acknowledge

DNS and DHCP are important services in most networks.
          `,
          quiz: [
            {
              question: "What is the main purpose of DNS?",
              options: [
                "Resolve domain names to IP addresses",
                "Encrypt hard drives",
                "Assign MAC addresses",
                "Create Ethernet cables",
              ],
              answer: "Resolve domain names to IP addresses",
            },
            {
              question: "Which DNS record maps a name to an IPv4 address?",
              options: ["A", "AAAA", "MX", "PTR"],
              answer: "A",
            },
            {
              question: "What does DHCP provide automatically?",
              options: [
                "Network configuration",
                "Computer hardware",
                "Application source code",
                "Monitor settings",
              ],
              answer: "Network configuration",
            },
            {
              question: "What does DORA stand for in DHCP?",
              options: [
                "Discover, Offer, Request, Acknowledge",
                "Discover, Open, Route, Assign",
                "Data, Output, Request, Access",
                "Domain, Offer, Route, Address",
              ],
              answer: "Discover, Offer, Request, Acknowledge",
            },
            {
              question: "Which DNS record is used for an IPv6 address?",
              options: ["AAAA", "A", "MX", "NS"],
              answer: "AAAA",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Switching, Routing, and Wireless",
      description:
        "Understand switches, LANs, VLANs, routers, NAT, firewalls, and wireless networking.",

      lessons: [
        {
          title: "Switches, LANs, and VLAN Concepts",
          content: `
A switch connects devices within a local network and forwards Ethernet frames based on MAC addresses.

A LAN usually represents a local group of connected devices.

A broadcast is traffic intended for devices in the same broadcast domain.

A VLAN, or Virtual LAN, logically separates devices into different network segments even when they use the same physical switching infrastructure.

VLANs can improve organization and help separate different groups of devices.

For example, an organization could use separate VLANs for employees, guests, and servers.

Communication between different VLANs normally requires Layer 3 routing.

Switches are important building blocks for wired LANs.
          `,
          quiz: [
            {
              question: "What does a switch primarily use to forward Ethernet frames?",
              options: [
                "MAC addresses",
                "Domain names",
                "File names",
                "Email addresses",
              ],
              answer: "MAC addresses",
            },
            {
              question: "What is a VLAN?",
              options: [
                "A logical network segment",
                "A type of CPU",
                "A physical cable",
                "A DNS record",
              ],
              answer: "A logical network segment",
            },
            {
              question: "Why are VLANs commonly used?",
              options: [
                "To logically separate network groups",
                "To increase monitor resolution",
                "To replace all routers",
                "To store files",
              ],
              answer: "To logically separate network groups",
            },
            {
              question: "What type of device is mainly used to connect devices in a wired LAN?",
              options: ["Switch", "Router", "Modem", "Firewall only"],
              answer: "Switch",
            },
            {
              question: "Communication between different VLANs normally requires what?",
              options: [
                "Layer 3 routing",
                "A keyboard",
                "A printer",
                "A new monitor",
              ],
              answer: "Layer 3 routing",
            },
          ],
        },

        {
          title: "Routers and Routing",
          content: `
A router connects different IP networks and forwards packets toward their destination.

Routers maintain routing information that helps them determine where packets should be sent.

A routing table can contain destination networks, next hops, interfaces, and other information.

The default gateway is usually the router that a device uses when communicating with destinations outside its local network.

Routers can use directly connected routes, static routes, or dynamic routing protocols.

A packet may pass through multiple routers before reaching its final destination.

Routing is different from switching: switching mainly forwards frames within a LAN, while routing forwards packets between networks.
          `,
          quiz: [
            {
              question: "What is the main role of a router?",
              options: [
                "Forward packets between networks",
                "Store application files",
                "Display web pages",
                "Create passwords",
              ],
              answer: "Forward packets between networks",
            },
            {
              question: "What does a routing table contain?",
              options: [
                "Information used to forward packets",
                "User photographs",
                "Keyboard shortcuts",
                "Application source code",
              ],
              answer: "Information used to forward packets",
            },
            {
              question: "What is a default gateway?",
              options: [
                "A router used to reach external networks",
                "A local file",
                "A DNS record",
                "A type of Ethernet frame",
              ],
              answer: "A router used to reach external networks",
            },
            {
              question: "Which device mainly forwards packets between networks?",
              options: ["Router", "Switch", "Access point", "Printer"],
              answer: "Router",
            },
            {
              question: "What is the main difference between switching and routing?",
              options: [
                "Switching forwards frames in LANs while routing forwards packets between networks",
                "Switching uses only DNS while routing uses only DHCP",
                "Routing works only with cables while switching works only with Wi-Fi",
                "They are exactly the same operation",
              ],
              answer:
                "Switching forwards frames in LANs while routing forwards packets between networks",
            },
          ],
        },

        {
          title: "NAT, Firewalls, and Network Security Basics",
          content: `
NAT stands for Network Address Translation.

NAT is commonly used to allow devices with private IP addresses to communicate with external networks using a public IP address.

Many home networks use NAT on the router.

A firewall controls network traffic according to defined security rules.

Firewalls can allow or block traffic based on information such as IP addresses, ports, protocols, and connection state.

Basic network security includes using strong authentication, keeping systems updated, limiting unnecessary services, and separating sensitive systems from less trusted networks.

Security should be considered when designing and operating a network, not only after a problem occurs.
          `,
          quiz: [
            {
              question: "What does NAT stand for?",
              options: [
                "Network Address Translation",
                "Network Access Transfer",
                "Node Address Technology",
                "Network Application Transport",
              ],
              answer: "Network Address Translation",
            },
            {
              question: "What is a common purpose of NAT?",
              options: [
                "Allow private addresses to communicate through a public address",
                "Create computer passwords",
                "Replace Ethernet with Wi-Fi",
                "Store DNS records",
              ],
              answer:
                "Allow private addresses to communicate through a public address",
            },
            {
              question: "What is a firewall used for?",
              options: [
                "Controlling network traffic",
                "Increasing CPU speed",
                "Creating documents",
                "Managing keyboard input",
              ],
              answer: "Controlling network traffic",
            },
            {
              question: "Which can a firewall use when filtering traffic?",
              options: ["Ports and IP addresses", "Screen size", "Keyboard type", "File font"],
              answer: "Ports and IP addresses",
            },
            {
              question: "Which is a basic network security practice?",
              options: [
                "Keeping systems updated",
                "Disabling all passwords",
                "Allowing every network connection",
                "Removing all security controls",
              ],
              answer: "Keeping systems updated",
            },
          ],
        },

        {
          title: "Wireless Networking",
          content: `
Wireless networks allow devices to communicate without a physical network cable.

Wi-Fi is based on IEEE 802.11 standards.

An access point provides wireless connectivity to client devices.

An SSID is the name used to identify a wireless network.

Wi-Fi commonly operates in frequency bands such as 2.4 GHz, 5 GHz, and newer 6 GHz environments.

The 2.4 GHz band can provide good range but may experience more interference.

Higher-frequency bands can provide higher performance under suitable conditions but generally have shorter effective range and greater sensitivity to obstacles.

Wireless security commonly uses technologies such as WPA2 or WPA3.

Good wireless design considers coverage, interference, channel usage, client density, and security.
          `,
          quiz: [
            {
              question: "What is an SSID?",
              options: [
                "The name of a wireless network",
                "A type of IP address",
                "A routing protocol",
                "A firewall rule",
              ],
              answer: "The name of a wireless network",
            },
            {
              question: "Which technology is used for Wi-Fi?",
              options: [
                "IEEE 802.11",
                "IEEE 802.3 only",
                "USB",
                "HDMI",
              ],
              answer: "IEEE 802.11",
            },
            {
              question: "Which device commonly provides Wi-Fi connectivity?",
              options: [
                "Access point",
                "Hard drive",
                "Printer",
                "Keyboard",
              ],
              answer: "Access point",
            },
            {
              question: "Which is a common Wi-Fi security technology?",
              options: ["WPA3", "FTP", "DNS", "DHCP"],
              answer: "WPA3",
            },
            {
              question: "What can negatively affect Wi-Fi performance?",
              options: [
                "Wireless interference",
                "Using a larger monitor",
                "Changing keyboard settings",
                "Installing a text editor",
              ],
              answer: "Wireless interference",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Troubleshooting and Practical Networking",
      description:
        "Learn practical troubleshooting, common networking commands, performance concepts, and basic network design.",

      lessons: [
        {
          title: "Network Troubleshooting Methodology",
          content: `
Network troubleshooting is the process of identifying and fixing problems that prevent normal communication.

A good troubleshooting process starts by clearly identifying the problem.

Check simple issues first, such as cables, power, Wi-Fi connection, and configuration.

Then verify the device's IP address, gateway, and DNS configuration.

Test connectivity step by step, starting with the local device and moving toward the destination.

Useful troubleshooting questions include:
- Is the device connected?
- Does it have an IP address?
- Can it reach the gateway?
- Can it reach another IP address?
- Can DNS resolve names?
- Is the application service available?

After identifying the cause, apply the smallest suitable fix and test again.

Documenting the problem and solution helps prevent repeated issues.
          `,
          quiz: [
            {
              question: "What should troubleshooting begin with?",
              options: [
                "Clearly identifying the problem",
                "Replacing every device",
                "Deleting all configurations",
                "Restarting every network",
              ],
              answer: "Clearly identifying the problem",
            },
            {
              question: "Which configuration should be checked on a device?",
              options: [
                "IP address and default gateway",
                "Screen brightness",
                "Keyboard language only",
                "Printer paper size",
              ],
              answer: "IP address and default gateway",
            },
            {
              question: "Why should connectivity be tested step by step?",
              options: [
                "To isolate where the problem occurs",
                "To increase CPU speed",
                "To change the operating system",
                "To remove network protocols",
              ],
              answer: "To isolate where the problem occurs",
            },
            {
              question: "What should be done after applying a network fix?",
              options: [
                "Test the connection again",
                "Delete the network",
                "Turn off all devices",
                "Change every IP address",
              ],
              answer: "Test the connection again",
            },
            {
              question: "Why is documenting troubleshooting useful?",
              options: [
                "It helps with future similar problems",
                "It increases bandwidth",
                "It replaces network hardware",
                "It automatically fixes DNS",
              ],
              answer: "It helps with future similar problems",
            },
          ],
        },

        {
          title: "Common Network Tools and Commands",
          content: `
Network administrators use command-line tools to check connectivity and configuration.

ping tests whether a destination can respond to network requests.

ipconfig on Windows displays IP configuration information. Similar systems may use commands such as ifconfig or ip.

tracert on Windows and traceroute on many Unix-like systems show the path toward a destination.

nslookup can be used to query DNS information.

arp can display or inspect ARP information on systems that support the command.

netstat or ss can show network connections and listening ports, depending on the operating system.

These tools provide useful evidence during troubleshooting.

A good administrator interprets command output instead of relying on a single test.
          `,
          quiz: [
            {
              question: "What is ping commonly used for?",
              options: [
                "Testing network reachability",
                "Editing documents",
                "Changing passwords",
                "Creating VLANs",
              ],
              answer: "Testing network reachability",
            },
            {
              question: "Which Windows command displays IP configuration?",
              options: ["ipconfig", "ping", "nslookup", "tracert"],
              answer: "ipconfig",
            },
            {
              question: "Which command can show the path to a destination on Windows?",
              options: ["tracert", "ipconfig", "arp", "netstat"],
              answer: "tracert",
            },
            {
              question: "Which command can query DNS information?",
              options: ["nslookup", "ping", "ipconfig", "arp"],
              answer: "nslookup",
            },
            {
              question: "Which command can show network connections and listening ports?",
              options: ["netstat", "nslookup", "ping", "tracert"],
              answer: "netstat",
            },
          ],
        },

        {
          title: "Network Performance, Reliability, and Design",
          content: `
Network performance describes how effectively data moves through a network.

Important measurements include latency, throughput, bandwidth, jitter, and packet loss.

Latency is the time required for data to travel between endpoints.

Throughput is the amount of useful data successfully transferred over a period of time.

Packet loss occurs when packets do not successfully reach their destination.

Reliability can be improved through appropriate network design, redundancy, monitoring, and backup connectivity.

A good network design considers the number of users, applications, expected traffic, security requirements, growth, and available budget.

Performance problems can be caused by congestion, weak wireless signals, faulty equipment, overloaded systems, or poor configuration.
          `,
          quiz: [
            {
              question: "What does latency measure?",
              options: [
                "Time taken for data to travel",
                "Amount of storage space",
                "Number of users",
                "CPU temperature",
              ],
              answer: "Time taken for data to travel",
            },
            {
              question: "What is throughput?",
              options: [
                "Amount of useful data transferred over time",
                "Number of routers in a network",
                "Time needed to boot a computer",
                "Number of passwords",
              ],
              answer: "Amount of useful data transferred over time",
            },
            {
              question: "What is packet loss?",
              options: [
                "Packets failing to reach their destination",
                "Deleting files from storage",
                "Changing a MAC address",
                "Changing a Wi-Fi name",
              ],
              answer: "Packets failing to reach their destination",
            },
            {
              question: "Which can cause network congestion?",
              options: [
                "Too much traffic",
                "A larger monitor",
                "A new keyboard",
                "Changing the desktop wallpaper",
              ],
              answer: "Too much traffic",
            },
            {
              question: "What should network design consider?",
              options: [
                "Users, traffic, security, and future growth",
                "Only monitor size",
                "Only keyboard type",
                "Only operating system wallpaper",
              ],
              answer: "Users, traffic, security, and future growth",
            },
          ],
        },

        {
          title: "Final Project: Build and Troubleshoot a Small Network",
          content: `
In this project, design a small network for a basic office or home environment.

Example requirements:
- Several computers
- A printer
- Wi-Fi devices
- Internet access
- Basic security

Start by identifying the required devices.

A simple design may contain:
Internet → Router → Switch → Computers

The router can provide Internet connectivity and act as the default gateway.

The switch can connect wired computers and other Ethernet devices.

An access point can provide Wi-Fi connectivity.

Configure suitable IP addresses and verify that devices can communicate.

Use tools such as ping and ipconfig to test the network.

Test DNS resolution using nslookup.

If a device cannot communicate, check its physical connection, IP configuration, gateway, DNS, and firewall settings.

The final goal is not only to create the network but also to understand how to identify and fix common problems.
          `,
          quiz: [
            {
              question: "Which device normally connects a small LAN to the Internet?",
              options: ["Router", "Keyboard", "Printer", "Monitor"],
              answer: "Router",
            },
            {
              question: "Which device is commonly used to connect multiple wired computers?",
              options: ["Switch", "DNS server", "Monitor", "Keyboard"],
              answer: "Switch",
            },
            {
              question: "Which command can test connectivity between devices?",
              options: ["ping", "nslookup", "ipconfig", "tracert"],
              answer: "ping",
            },
            {
              question: "Which tool can check DNS name resolution?",
              options: ["nslookup", "ping", "ipconfig", "arp"],
              answer: "nslookup",
            },
            {
              question: "What is an important first step when troubleshooting a device that cannot communicate?",
              options: [
                "Check its network connection and configuration",
                "Replace every network device",
                "Delete the operating system",
                "Change every IP address",
              ],
              answer: "Check its network connection and configuration",
            },
          ],
        },
      ],
    },
  ],
};

export default networkingFundamentalsCourse;
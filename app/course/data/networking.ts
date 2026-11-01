
const networkingCourse = {
  title: "Networking",
  description:
    "Learn computer networking fundamentals, network devices, OSI and TCP/IP models, IP addressing, subnet masks, routing, DNS, DHCP, network security, troubleshooting, and practical network configuration.",

  weeks: [
    {
      title: "Week 1: Networking Fundamentals",
      description:
        "Understand computer networks, network types, topologies, devices, and communication models.",
      lessons: [
        {
          title: "Introduction to Computer Networking",
          content: `
Computer networking is the process of connecting two or more computing devices so they can exchange information and share resources.

A network can connect computers, laptops, servers, printers, mobile phones, and other devices.

Why do we use computer networks?

1. Resource sharing: Multiple computers can use shared printers, storage, and applications.
2. Communication: Users can exchange messages, files, and other information.
3. Data sharing: Devices can access information stored on other systems.
4. Internet access: Networks allow devices to connect to online services.
5. Centralized management: Administrators can manage users, devices, and resources.

Important networking terms:

- Node: Any device connected to a network.
- Host: A device that sends or receives network data.
- Link: A connection between network devices.
- Packet: A formatted unit of data transmitted across a network.
- Protocol: A set of rules that controls communication.
- Bandwidth: The maximum data transfer capacity of a connection.
- Latency: The time taken for data to travel from one point to another.

For example, when you open a website, your device sends network requests to a server. The server processes the request and sends information back.

Networks are essential for websites, cloud computing, online communication, business applications, and AI services.
          `,
          quiz: [
            {
              question: "What is computer networking?",
              options: [
                "Connecting devices to exchange information and share resources",
                "Installing applications on one computer",
                "Designing computer processors",
                "Creating programming languages",
              ],
              answer: "Connecting devices to exchange information and share resources",
            },
            {
              question: "What is a node in networking?",
              options: [
                "A device connected to a network",
                "A programming variable",
                "A type of computer screen",
                "A database query",
              ],
              answer: "A device connected to a network",
            },
            {
              question: "What is a network protocol?",
              options: [
                "A set of rules for communication",
                "A physical computer component",
                "A type of storage device",
                "A programming editor",
              ],
              answer: "A set of rules for communication",
            },
            {
              question: "What does bandwidth describe?",
              options: [
                "Maximum data transfer capacity",
                "The physical length of a computer",
                "The number of installed applications",
                "The age of a network device",
              ],
              answer: "Maximum data transfer capacity",
            },
            {
              question: "What does network latency measure?",
              options: [
                "Time taken for data to travel between points",
                "Number of computers in a building",
                "Amount of storage on a server",
                "Number of network cables",
              ],
              answer: "Time taken for data to travel between points",
            },
          ],
        },
        {
          title: "Types of Computer Networks: LAN, MAN, WAN, and PAN",
          content: `
Computer networks can be classified according to the geographical area they cover.

1. PAN – Personal Area Network

A PAN connects personal devices over a short distance. For example, a phone connected to wireless earbuds using Bluetooth.

2. LAN – Local Area Network

A LAN connects devices within a limited area such as a home, school, office, or laboratory.

Ethernet and Wi-Fi are commonly used to create LANs.

3. MAN – Metropolitan Area Network

A MAN connects networks across a city or metropolitan area. It may connect multiple buildings or organizational locations.

4. WAN – Wide Area Network

A WAN connects networks over large geographical distances, including across countries and continents.

The Internet is the largest example of an interconnected global network.

Comparison:

- PAN: Personal surroundings.
- LAN: Building or campus.
- MAN: City or metropolitan region.
- WAN: Large geographical region.

The network type selected depends on the required coverage, number of devices, cost, performance, and management needs.

A company may use a LAN inside its office and connect multiple office locations through a WAN.
          `,
          quiz: [
            {
              question: "Which network type is commonly used to connect personal devices over a short distance?",
              options: [
                "PAN",
                "WAN",
                "MAN",
                "SAN",
              ],
              answer: "PAN",
            },
            {
              question: "Which network commonly connects devices inside an office?",
              options: [
                "LAN",
                "WAN",
                "MAN",
                "GAN",
              ],
              answer: "LAN",
            },
            {
              question: "What is the typical coverage area of a MAN?",
              options: [
                "A metropolitan or city area",
                "Only one person's desk",
                "A single computer component",
                "Only a small room",
              ],
              answer: "A metropolitan or city area",
            },
            {
              question: "Which network type connects geographically distant networks?",
              options: [
                "WAN",
                "PAN",
                "LAN",
                "CAN",
              ],
              answer: "WAN",
            },
            {
              question: "Which is an example of a PAN?",
              options: [
                "A phone connected to wireless earbuds",
                "A network connecting offices across countries",
                "A city-wide government network",
                "A network connecting multiple continents",
              ],
              answer: "A phone connected to wireless earbuds",
            },
          ],
        },
        {
          title: "Network Topologies",
          content: `
Network topology describes how devices and connections are arranged in a network.

There are two important types:

1. Physical topology:
   Describes the actual physical arrangement of devices and cables.

2. Logical topology:
   Describes how data moves through the network.

Common network topologies:

Bus topology:
All devices share a common communication cable. It is simple but a failure in the main cable can affect the entire network.

Star topology:
All devices connect to a central device, commonly a switch. It is widely used in modern LANs. A central device failure can affect connected devices.

Ring topology:
Devices form a circular connection. Data travels around the ring according to the network's communication method.

Mesh topology:
Devices have multiple connections to other devices. This can provide alternative communication paths and improve resilience.

Tree topology:
Multiple star networks are connected in a hierarchical structure.

Hybrid topology:
Combines two or more topology types.

Topology selection depends on cost, scalability, reliability, cable requirements, and network size.

For example, a school computer laboratory may use star topology with a central switch connecting all computers.
          `,
          quiz: [
            {
              question: "What does network topology describe?",
              options: [
                "The arrangement of devices and connections",
                "The speed of a computer processor",
                "The size of a database",
                "The programming language used by a server",
              ],
              answer: "The arrangement of devices and connections",
            },
            {
              question: "Which topology connects devices to a central switch?",
              options: [
                "Star topology",
                "Bus topology",
                "Ring topology",
                "Linear topology",
              ],
              answer: "Star topology",
            },
            {
              question: "Which topology uses a shared main communication cable?",
              options: [
                "Bus topology",
                "Star topology",
                "Mesh topology",
                "Tree topology",
              ],
              answer: "Bus topology",
            },
            {
              question: "What is a major advantage of mesh topology?",
              options: [
                "Multiple possible communication paths",
                "It requires no connections",
                "It uses only one central cable",
                "It eliminates network protocols",
              ],
              answer: "Multiple possible communication paths",
            },
            {
              question: "What does logical topology describe?",
              options: [
                "How data moves through a network",
                "The color of network cables",
                "The physical size of a router",
                "The number of computers in a room",
              ],
              answer: "How data moves through a network",
            },
          ],
        },
        {
          title: "Network Devices: Router, Switch, Hub, and Modem",
          content: `
Network devices help computers communicate with each other and with other networks.

1. Hub:
A hub connects multiple Ethernet devices and sends incoming data to all its ports. It does not intelligently forward frames to a specific destination.

2. Switch:
A switch connects devices in a LAN. It learns MAC addresses and forwards Ethernet frames to the appropriate port when possible.

3. Router:
A router connects different IP networks and forwards packets using routing information.

4. Modem:
A modem converts signals or adapts them for communication over a service provider's access technology.

5. Wireless Access Point:
An access point allows wireless devices to connect to a wired network through Wi-Fi.

6. Firewall:
A firewall applies security rules to control network traffic.

Example home network:

Internet service → Modem or gateway → Router → Switch or Wi-Fi → Computers and phones.

Some home devices combine modem, router, switch, and wireless access point functions.

Understanding network devices is important for setting up, maintaining, and troubleshooting networks.
          `,
          quiz: [
            {
              question: "Which device forwards Ethernet frames using MAC address information?",
              options: [
                "Switch",
                "Hub",
                "Modem",
                "Repeater",
              ],
              answer: "Switch",
            },
            {
              question: "What is the main function of a router?",
              options: [
                "Forward packets between IP networks",
                "Print documents",
                "Store website files",
                "Convert source code into machine code",
              ],
              answer: "Forward packets between IP networks",
            },
            {
              question: "How does a traditional hub handle incoming data?",
              options: [
                "It sends the data to all its ports",
                "It selects a route using IP tables",
                "It blocks all network communication",
                "It converts data into database records",
              ],
              answer: "It sends the data to all its ports",
            },
            {
              question: "What does a wireless access point provide?",
              options: [
                "Wireless connection to a network",
                "A replacement for all IP addresses",
                "A method for creating databases",
                "A system for compiling programs",
              ],
              answer: "Wireless connection to a network",
            },
            {
              question: "What is a firewall used for?",
              options: [
                "Controlling network traffic using security rules",
                "Increasing the physical size of a network",
                "Storing computer memory",
                "Replacing the operating system",
              ],
              answer: "Controlling network traffic using security rules",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Networking Models and Protocols",
      description:
        "Understand the OSI model, TCP/IP model, data encapsulation, Ethernet, and common network protocols.",
      lessons: [
        {
          title: "OSI Model and Its Seven Layers",
          content: `
The OSI model is a conceptual framework that explains how network communication can be divided into seven layers.

The seven layers from bottom to top are:

1. Physical Layer:
Transmits raw bits through cables, radio signals, and other physical media.

2. Data Link Layer:
Handles communication over a local link. Ethernet and MAC addressing operate here.

3. Network Layer:
Handles logical addressing and routing. IP operates here.

4. Transport Layer:
Provides end-to-end transport services. TCP and UDP operate here.

5. Session Layer:
Manages communication sessions between applications.

6. Presentation Layer:
Deals with data representation, translation, and related formatting functions.

7. Application Layer:
Provides network services used by applications.

A common memory aid from Layer 7 to Layer 1 is:
All People Seem To Need Data Processing.

The OSI model is useful for understanding network architecture and troubleshooting.

For example, a broken Ethernet cable is a Physical Layer issue, while an incorrect IP route is a Network Layer issue.

Real-world network protocols do not always fit perfectly into one conceptual layer, but the model provides a useful way to organize networking concepts.
          `,
          quiz: [
            {
              question: "How many layers are in the OSI model?",
              options: [
                "Seven",
                "Four",
                "Five",
                "Eight",
              ],
              answer: "Seven",
            },
            {
              question: "Which OSI layer handles logical addressing and routing?",
              options: [
                "Network Layer",
                "Physical Layer",
                "Session Layer",
                "Presentation Layer",
              ],
              answer: "Network Layer",
            },
            {
              question: "At which OSI layer does Ethernet framing primarily operate?",
              options: [
                "Data Link Layer",
                "Application Layer",
                "Session Layer",
                "Transport Layer",
              ],
              answer: "Data Link Layer",
            },
            {
              question: "Which OSI layer transmits raw bits?",
              options: [
                "Physical Layer",
                "Network Layer",
                "Transport Layer",
                "Application Layer",
              ],
              answer: "Physical Layer",
            },
            {
              question: "Which OSI layer provides services directly used by network applications?",
              options: [
                "Application Layer",
                "Physical Layer",
                "Data Link Layer",
                "Network Layer",
              ],
              answer: "Application Layer",
            },
          ],
        },
        {
          title: "TCP/IP Model",
          content: `
The TCP/IP model describes the architecture used by the Internet and many modern networks.

A common four-layer version contains:

1. Network Access Layer:
Handles communication over the local network, including technologies such as Ethernet and Wi-Fi.

2. Internet Layer:
Handles logical addressing and packet routing. IP is the main protocol.

3. Transport Layer:
Provides communication between applications. TCP and UDP are important protocols.

4. Application Layer:
Provides application-level network services. Examples include HTTP, DNS, SMTP, and SSH.

Relationship with the OSI model:

- TCP/IP Application Layer covers functions associated with OSI Application, Presentation, and Session layers.
- TCP/IP Transport Layer corresponds broadly to the OSI Transport Layer.
- TCP/IP Internet Layer corresponds broadly to the OSI Network Layer.
- TCP/IP Network Access Layer covers OSI Data Link and Physical functions.

TCP/IP is a practical protocol suite. The OSI model is commonly used as a conceptual reference.

Understanding the TCP/IP model helps explain how data travels from an application on one computer to an application on another.
          `,
          quiz: [
            {
              question: "How many layers are commonly used in the four-layer TCP/IP model?",
              options: [
                "Four",
                "Seven",
                "Three",
                "Six",
              ],
              answer: "Four",
            },
            {
              question: "Which TCP/IP layer handles IP routing?",
              options: [
                "Internet Layer",
                "Application Layer",
                "Transport Layer",
                "Network Access Layer",
              ],
              answer: "Internet Layer",
            },
            {
              question: "Which protocols operate at the TCP/IP Transport Layer?",
              options: [
                "TCP and UDP",
                "HTTP and DNS",
                "Ethernet and Wi-Fi",
                "ARP and ICMP",
              ],
              answer: "TCP and UDP",
            },
            {
              question: "Which TCP/IP layer includes HTTP and DNS?",
              options: [
                "Application Layer",
                "Internet Layer",
                "Transport Layer",
                "Network Access Layer",
              ],
              answer: "Application Layer",
            },
            {
              question: "Which model is commonly described using seven layers?",
              options: [
                "OSI model",
                "Four-layer TCP/IP model",
                "Star topology",
                "Client-server model",
              ],
              answer: "OSI model",
            },
          ],
        },
        {
          title: "Data Encapsulation and Ethernet",
          content: `
Data encapsulation is the process of adding protocol information as data moves down the networking layers.

When an application sends information, each layer adds information needed for communication.

A simplified process:

1. Application data is created.
2. The transport layer adds a TCP or UDP header, producing a segment or datagram.
3. The network layer adds an IP header, producing a packet.
4. The data link layer adds a frame header and trailer.
5. The physical layer transmits bits.

At the receiving device, decapsulation removes and processes these headers in reverse order.

Ethernet is a widely used LAN technology.

An Ethernet frame commonly contains:
- Destination MAC address
- Source MAC address
- Type or length information
- Payload
- Frame Check Sequence

A MAC address identifies a network interface at the data link level. A typical Ethernet MAC address is 48 bits long and is commonly written in hexadecimal notation.

For example:
00:1A:2B:3C:4D:5E

Ethernet switches use MAC address information to forward frames within a LAN.

Encapsulation helps each networking layer perform its specific communication task.
          `,
          quiz: [
            {
              question: "What is data encapsulation?",
              options: [
                "Adding protocol information as data moves through network layers",
                "Deleting all network headers",
                "Converting a router into a switch",
                "Removing every data packet",
              ],
              answer: "Adding protocol information as data moves through network layers",
            },
            {
              question: "What does the transport layer add during TCP communication?",
              options: [
                "A TCP header",
                "An Ethernet cable",
                "A monitor driver",
                "A database table",
              ],
              answer: "A TCP header",
            },
            {
              question: "What is the data unit commonly called at the IP layer?",
              options: [
                "Packet",
                "Frame",
                "Bit",
                "File",
              ],
              answer: "Packet",
            },
            {
              question: "How long is a typical Ethernet MAC address?",
              options: [
                "48 bits",
                "16 bits",
                "32 bits",
                "128 bits",
              ],
              answer: "48 bits",
            },
            {
              question: "What is decapsulation?",
              options: [
                "Processing and removing protocol headers at the receiving side",
                "Adding a new computer to a network",
                "Increasing a router's memory",
                "Creating an IP address",
              ],
              answer: "Processing and removing protocol headers at the receiving side",
            },
          ],
        },
        {
          title: "Common Network Protocols",
          content: `
Network protocols define how devices communicate and exchange information.

Important protocols include:

HTTP:
Used for transferring web resources. HTTPS protects HTTP communication using TLS.

DNS:
Translates domain names such as example.com into IP addresses and provides other DNS information.

DHCP:
Automatically provides network configuration to clients, commonly including IP address, subnet mask, default gateway, and DNS server information.

FTP:
A protocol designed for file transfer. Traditional FTP does not encrypt its traffic.

SSH:
Provides secure remote login and command execution.

SMTP:
Used to send email between mail systems and from email clients to servers.

TCP:
Provides a reliable, ordered byte stream with connection management and retransmission mechanisms.

UDP:
Provides a connectionless datagram service without TCP's built-in delivery and ordering guarantees.

ICMP:
Used for network control and diagnostic messages, including messages used by ping.

Different protocols serve different purposes. For example, DNS helps find a server's IP address, while HTTPS protects communication with a website.
          `,
          quiz: [
            {
              question: "Which protocol is commonly used to translate domain names into IP addresses?",
              options: [
                "DNS",
                "FTP",
                "SMTP",
                "SSH",
              ],
              answer: "DNS",
            },
            {
              question: "Which protocol automatically provides IP configuration to network clients?",
              options: [
                "DHCP",
                "HTTP",
                "SMTP",
                "FTP",
              ],
              answer: "DHCP",
            },
            {
              question: "Which protocol provides secure remote command-line access?",
              options: [
                "SSH",
                "HTTP",
                "FTP",
                "DNS",
              ],
              answer: "SSH",
            },
            {
              question: "Which protocol is commonly used to send email between mail systems?",
              options: [
                "SMTP",
                "DHCP",
                "ICMP",
                "ARP",
              ],
              answer: "SMTP",
            },
            {
              question: "Which protocol provides a connectionless datagram service?",
              options: [
                "UDP",
                "TCP",
                "SSH",
                "HTTPS",
              ],
              answer: "UDP",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: IP Addressing and Routing",
      description:
        "Learn IPv4 and IPv6 concepts, subnet masks, default gateways, routing, and address resolution.",
      lessons: [
        {
          title: "Introduction to IPv4 and IPv6",
          content: `
An IP address is a logical address used to identify an interface on an IP network.

IPv4:
IPv4 uses 32-bit addresses. It is commonly written as four decimal octets separated by dots.

Example:
192.168.1.10

Each octet represents 8 bits and has a decimal range from 0 to 255.

IPv6:
IPv6 uses 128-bit addresses. It is written using hexadecimal groups separated by colons.

Example:
2001:db8::10

IPv6 provides a much larger address space than IPv4.

Important IPv4 address categories:

- Private addresses: Used inside private networks and not directly routed on the public Internet.
- Public addresses: Globally assigned addresses used for Internet communication.
- Loopback address: 127.0.0.1 is commonly used to refer to the local IPv4 host.
- Link-local addresses: Used for communication on a local link when applicable.

Common private IPv4 ranges:
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16

IPv6 also has special address types, including loopback (::1) and link-local addresses.

IP addressing is essential for communication between networks and is a foundation for routing.
          `,
          quiz: [
            {
              question: "How many bits are in an IPv4 address?",
              options: [
                "32 bits",
                "64 bits",
                "128 bits",
                "16 bits",
              ],
              answer: "32 bits",
            },
            {
              question: "How many bits are in an IPv6 address?",
              options: [
                "128 bits",
                "32 bits",
                "48 bits",
                "64 bits",
              ],
              answer: "128 bits",
            },
            {
              question: "Which address is commonly used for IPv4 loopback?",
              options: [
                "127.0.0.1",
                "192.168.1.1",
                "8.8.8.8",
                "255.255.255.0",
              ],
              answer: "127.0.0.1",
            },
            {
              question: "Which is a private IPv4 address?",
              options: [
                "192.168.1.10",
                "8.8.8.8",
                "1.1.1.1",
                "203.0.113.10",
              ],
              answer: "192.168.1.10",
            },
            {
              question: "What is one major advantage of IPv6?",
              options: [
                "A much larger address space",
                "It does not require addressing",
                "It eliminates all network devices",
                "It uses only 8-bit addresses",
              ],
              answer: "A much larger address space",
            },
          ],
        },
        {
          title: "Subnet Masks and Network Identification",
          content: `
A subnet mask identifies which bits of an IPv4 address represent the network portion and which represent the host portion.

Example:
IP address: 192.168.1.10
Subnet mask: 255.255.255.0

The subnet mask in this example is also written as /24.

The /24 notation means that the first 24 bits are network bits.

The network address identifies the subnet. The host portion identifies an interface within that subnet.

For the example above:
- Network address: 192.168.1.0
- Typical usable host range: 192.168.1.1 to 192.168.1.254
- Broadcast address: 192.168.1.255

These usable host calculations apply to a normal IPv4 /24 subnet, not every possible subnet configuration.

Subnetting divides a larger network into smaller logical networks.

Benefits include:
- More organized address allocation.
- Smaller broadcast domains.
- Easier network administration.
- Separation of departments or device groups.

CIDR notation represents network prefixes using a slash followed by the number of network bits.

Detailed subnet calculations will be covered in the separate Subnetting course.
          `,
          quiz: [
            {
              question: "What does a subnet mask identify?",
              options: [
                "Network and host portions of an IPv4 address",
                "The computer's processor speed",
                "The type of operating system",
                "The physical size of a switch",
              ],
              answer: "Network and host portions of an IPv4 address",
            },
            {
              question: "What does /24 represent in CIDR notation?",
              options: [
                "24 network bits",
                "24 host bits",
                "24 network devices",
                "24 bytes of data",
              ],
              answer: "24 network bits",
            },
            {
              question: "What is the network address of 192.168.1.10/24?",
              options: [
                "192.168.1.0",
                "192.168.1.10",
                "192.168.1.255",
                "192.168.0.10",
              ],
              answer: "192.168.1.0",
            },
            {
              question: "What is the broadcast address of 192.168.1.0/24?",
              options: [
                "192.168.1.255",
                "192.168.1.0",
                "192.168.1.1",
                "192.168.0.255",
              ],
              answer: "192.168.1.255",
            },
            {
              question: "What is one benefit of subnetting?",
              options: [
                "Organizing a network into smaller logical networks",
                "Removing all IP addresses",
                "Eliminating the need for routers",
                "Converting IPv4 into a MAC address",
              ],
              answer: "Organizing a network into smaller logical networks",
            },
          ],
        },
        {
          title: "Default Gateway and Routing",
          content: `
A default gateway is the router or other routing device that a host uses to send traffic outside its local subnet when no more specific route is available.

For example, a computer may have:
IP address: 192.168.1.20
Subnet mask: 255.255.255.0
Default gateway: 192.168.1.1

If the computer communicates with another device in the same subnet, it can usually send traffic directly over the local network.

If it needs to reach a different network, it sends the traffic to its default gateway.

Routing is the process of selecting paths for packets to travel between networks.

Routers use routing tables containing information such as:
- Destination network
- Prefix length or subnet mask
- Next hop
- Outgoing interface
- Route metric

A router can have:
1. Directly connected routes.
2. Static routes configured by an administrator.
3. Dynamic routes learned through routing protocols.

Examples of dynamic routing protocols include OSPF and BGP.

The most specific matching route is generally preferred when a router selects a route. This is called longest-prefix matching.
          `,
          quiz: [
            {
              question: "What is the purpose of a default gateway?",
              options: [
                "To forward traffic toward other networks when no more specific route is available",
                "To assign a computer its username",
                "To store application files",
                "To replace the subnet mask",
              ],
              answer: "To forward traffic toward other networks when no more specific route is available",
            },
            {
              question: "What is a routing table?",
              options: [
                "A collection of information used to select packet paths",
                "A list of computer passwords",
                "A database of installed applications",
                "A record of monitor settings",
              ],
              answer: "A collection of information used to select packet paths",
            },
            {
              question: "What is a static route?",
              options: [
                "A route manually configured by an administrator",
                "A route automatically learned from every website",
                "A route used only by printers",
                "A route without a destination network",
              ],
              answer: "A route manually configured by an administrator",
            },
            {
              question: "Which is an example of a dynamic routing protocol?",
              options: [
                "OSPF",
                "HTTP",
                "SMTP",
                "FTP",
              ],
              answer: "OSPF",
            },
            {
              question: "What does longest-prefix matching select?",
              options: [
                "The most specific matching route",
                "The route with the oldest configuration date",
                "The route with the largest router name",
                "The route with the fewest characters",
              ],
              answer: "The most specific matching route",
            },
          ],
        },
        {
          title: "ARP, MAC Addresses, and IP Communication",
          content: `
IP addresses and MAC addresses perform different roles in network communication.

An IP address is a logical address used for communication across IP networks.

A MAC address is a link-layer address used for communication on a local network technology such as Ethernet.

When a host needs to send an IPv4 packet to another device on its local network, it needs the destination MAC address for the local frame.

ARP, or Address Resolution Protocol, helps discover the MAC address associated with a local IPv4 address.

A simplified ARP process:

1. A host checks its ARP cache.
2. If the mapping is missing, it broadcasts an ARP request on the local network.
3. The device with the matching IPv4 address responds with its MAC address.
4. The sender can then create an Ethernet frame.

When sending traffic to a different network, the sender generally resolves the MAC address of its default gateway rather than the remote destination.

IPv6 does not use ARP. It uses Neighbor Discovery mechanisms based on ICMPv6.

ARP is important when troubleshooting local IPv4 connectivity problems.
          `,
          quiz: [
            {
              question: "What is the main purpose of ARP in IPv4 networks?",
              options: [
                "To discover a local MAC address associated with an IPv4 address",
                "To assign domain names to websites",
                "To encrypt application messages",
                "To select a dynamic routing protocol",
              ],
              answer: "To discover a local MAC address associated with an IPv4 address",
            },
            {
              question: "What does an IP address identify?",
              options: [
                "A logical network interface address",
                "A computer's keyboard layout",
                "A file's extension",
                "A processor's clock speed",
              ],
              answer: "A logical network interface address",
            },
            {
              question: "What does a MAC address identify in Ethernet communication?",
              options: [
                "A network interface at the data link level",
                "A website's domain name",
                "A user's email account",
                "A transport-layer port",
              ],
              answer: "A network interface at the data link level",
            },
            {
              question: "What happens when a host needs a local IPv4-to-MAC mapping that is not cached?",
              options: [
                "It can broadcast an ARP request",
                "It automatically changes its subnet",
                "It sends an email using SMTP",
                "It disables its network interface",
              ],
              answer: "It can broadcast an ARP request",
            },
            {
              question: "Which technology does IPv6 use instead of ARP?",
              options: [
                "Neighbor Discovery using ICMPv6",
                "SMTP",
                "FTP",
                "DHCPv4",
              ],
              answer: "Neighbor Discovery using ICMPv6",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Network Security and Troubleshooting",
      description:
        "Understand network security, common threats, diagnostic commands, monitoring, and practical network troubleshooting.",
      lessons: [
        {
          title: "Network Security Fundamentals",
          content: `
Network security protects network devices, communication, services, and data from unauthorized access and disruption.

The CIA triad is a basic information security model:

1. Confidentiality:
Ensures that information is accessible only to authorized people and systems.

2. Integrity:
Protects information from unauthorized or unintended modification.

3. Availability:
Ensures that authorized users can access systems and information when needed.

Common network security controls include:

- Firewalls: Filter network traffic according to security rules.
- Encryption: Protects information during transmission.
- Authentication: Verifies the identity of a user or device.
- Access control: Determines what an authenticated user is allowed to access.
- Network segmentation: Separates networks to limit unnecessary access.
- Monitoring: Helps identify unusual activity.

HTTPS uses TLS to protect communication between clients and servers.

Strong authentication and secure configuration are important for routers, switches, wireless networks, and servers.

Network security is not achieved by one tool alone. It requires appropriate technology, policies, updates, and monitoring.
          `,
          quiz: [
            {
              question: "What does confidentiality mean in network security?",
              options: [
                "Only authorized people and systems can access information",
                "All information is publicly available",
                "Every device uses the same password",
                "Network traffic is always unencrypted",
              ],
              answer: "Only authorized people and systems can access information",
            },
            {
              question: "Which part of the CIA triad protects information from unauthorized modification?",
              options: [
                "Integrity",
                "Availability",
                "Confidentiality",
                "Scalability",
              ],
              answer: "Integrity",
            },
            {
              question: "What is the purpose of authentication?",
              options: [
                "To verify the identity of a user or device",
                "To increase the size of an IP address",
                "To replace every network protocol",
                "To delete network logs",
              ],
              answer: "To verify the identity of a user or device",
            },
            {
              question: "Which technology protects HTTP communication?",
              options: [
                "TLS through HTTPS",
                "Traditional FTP",
                "ARP",
                "DHCP",
              ],
              answer: "TLS through HTTPS",
            },
            {
              question: "Why is network segmentation useful?",
              options: [
                "It separates network areas and can limit unnecessary access",
                "It removes all network security controls",
                "It makes every device publicly accessible",
                "It eliminates the need for IP addressing",
              ],
              answer: "It separates network areas and can limit unnecessary access",
            },
          ],
        },
        {
          title: "Common Network Threats and Protection",
          content: `
Networks can face different security threats.

Malware:
Malicious software that may steal information, disrupt systems, or damage data.

Phishing:
Fraudulent messages or websites designed to trick people into revealing information or taking unsafe actions.

Denial-of-Service (DoS):
An attempt to make a service unavailable by overwhelming it or exhausting its resources.

Distributed Denial-of-Service (DDoS):
A denial-of-service attack involving traffic or activity from multiple sources.

Man-in-the-Middle (MitM):
An attacker attempts to intercept or alter communication between parties.

Spoofing:
An attacker falsifies identifying information, such as an IP address or sender identity.

Common protective measures:

1. Keep network devices and software updated.
2. Use strong, unique passwords and multi-factor authentication.
3. Apply firewall rules based on least privilege.
4. Use secure protocols such as HTTPS and SSH.
5. Monitor network activity.
6. Back up important configurations and data.
7. Separate guest and internal networks.
8. Train users to recognize suspicious messages.

No single control prevents every threat. Organizations use multiple layers of protection to reduce risk.
          `,
          quiz: [
            {
              question: "What is phishing?",
              options: [
                "A fraudulent attempt to trick people into revealing information",
                "A method for assigning IP addresses",
                "A technique for compressing network packets",
                "A process for updating router firmware",
              ],
              answer: "A fraudulent attempt to trick people into revealing information",
            },
            {
              question: "What is a DDoS attack?",
              options: [
                "An attempt to disrupt a service using activity from multiple sources",
                "A process for securely transferring files",
                "A technique for assigning MAC addresses",
                "A method for measuring CPU temperature",
              ],
              answer: "An attempt to disrupt a service using activity from multiple sources",
            },
            {
              question: "What does spoofing involve?",
              options: [
                "Falsifying identifying information",
                "Creating a subnet mask",
                "Measuring network latency",
                "Updating a software package",
              ],
              answer: "Falsifying identifying information",
            },
            {
              question: "Which practice improves account security?",
              options: [
                "Using strong unique passwords and multi-factor authentication",
                "Sharing passwords with everyone",
                "Disabling all security updates",
                "Using the same password for every service",
              ],
              answer: "Using strong unique passwords and multi-factor authentication",
            },
            {
              question: "What is a man-in-the-middle attack?",
              options: [
                "An attempt to intercept or alter communication between parties",
                "A method for measuring bandwidth",
                "A technique for configuring DHCP",
                "A process for creating Ethernet frames",
              ],
              answer: "An attempt to intercept or alter communication between parties",
            },
          ],
        },
        {
          title: "Network Troubleshooting Commands",
          content: `
Network troubleshooting is the process of identifying and resolving problems that affect connectivity or performance.

Useful commands include:

1. ping:
Tests reachability and reports round-trip timing when responses are received.

Example:
ping 8.8.8.8

2. ipconfig:
Displays Windows IP configuration.

Example:
ipconfig /all

3. ip:
Displays or manages Linux network interfaces, addresses, and routes.

Example:
ip addr

4. tracert:
On Windows, traces the route toward a destination.

Example:
tracert example.com

5. traceroute:
A common Linux and Unix command for tracing a route.

Example:
traceroute example.com

6. nslookup:
Queries DNS information.

Example:
nslookup example.com

7. netstat:
Displays network connections and related information on supported systems.

8. arp:
Displays or manages the IPv4 ARP cache on supported systems.

A simple troubleshooting process:

Step 1: Check physical connections or Wi-Fi status.
Step 2: Check the device's IP configuration.
Step 3: Test the local network gateway.
Step 4: Test an external IP address.
Step 5: Test DNS resolution.
Step 6: Investigate routing, firewall, and service issues.

A successful ping does not prove that every application service is working. Use multiple checks to identify the actual problem.
          `,
          quiz: [
            {
              question: "Which command tests network reachability?",
              options: [
                "ping",
                "mkdir",
                "copy",
                "format",
              ],
              answer: "ping",
            },
            {
              question: "Which Windows command displays detailed IP configuration?",
              options: [
                "ipconfig /all",
                "dir /all",
                "tasklist /ip",
                "format /network",
              ],
              answer: "ipconfig /all",
            },
            {
              question: "Which command can query DNS information?",
              options: [
                "nslookup",
                "mkdir",
                "whoami",
                "shutdown",
              ],
              answer: "nslookup",
            },
            {
              question: "Which Windows command traces the route to a destination?",
              options: [
                "tracert",
                "ipconfig",
                "hostname",
                "cls",
              ],
              answer: "tracert",
            },
            {
              question: "Which Linux command displays IP addresses on network interfaces?",
              options: [
                "ip addr",
                "ls -la",
                "pwd",
                "touch",
              ],
              answer: "ip addr",
            },
          ],
        },
        {
          title: "Final Project: Design and Troubleshoot a Small Network",
          content: `
In this final lesson, design a small network for a computer laboratory or office.

Project objective:
Create a basic network plan, identify the required devices, document IP settings, and practice troubleshooting.

Scenario:
A small laboratory has:
- 10 desktop computers
- 1 network printer
- 1 wireless access point
- 1 router
- 1 network switch

Project steps:

1. Draw the network topology:
Use a star topology with the switch connecting the wired devices.

2. Identify network devices:
Explain the purpose of the router, switch, access point, and printer.

3. Plan the IP addressing:
Choose a private IPv4 subnet, such as 192.168.10.0/24.

Example device addresses:
Router: 192.168.10.1
Computer 1: 192.168.10.11
Computer 2: 192.168.10.12
Printer: 192.168.10.50
Access point management address: 192.168.10.2

These are example addresses for a lab design. Ensure that the chosen addresses do not conflict with DHCP assignments.

4. Configure network settings:
Document the subnet mask, default gateway, and DNS settings.

5. Test connectivity:
Use ping to test the gateway and other permitted devices.

6. Test DNS:
Use nslookup to check whether domain names resolve correctly.

7. Trace network paths:
Use tracert or traceroute to inspect the path to an external destination.

8. Document troubleshooting:
Record the issue, the command used, the observation, and the resolution.

9. Add basic security:
Use strong administrator credentials, appropriate Wi-Fi security, firewall rules, and a separate guest network where suitable.

10. Prepare the final report:
Include the topology diagram, device list, addressing plan, test results, security controls, and known limitations.

The final deliverable is a small network design and troubleshooting report.
          `,
          quiz: [
            {
              question: "Which topology is used in the example laboratory design?",
              options: [
                "Star topology",
                "Ring topology",
                "Bus topology",
                "Full mesh topology",
              ],
              answer: "Star topology",
            },
            {
              question: "Which device connects the wired laboratory computers within the LAN?",
              options: [
                "Network switch",
                "Modem only",
                "Printer",
                "DNS server only",
              ],
              answer: "Network switch",
            },
            {
              question: "Which address is used as the example router address?",
              options: [
                "192.168.10.1",
                "192.168.10.11",
                "192.168.10.50",
                "192.168.10.255",
              ],
              answer: "192.168.10.1",
            },
            {
              question: "Which command can test connectivity to the laboratory gateway?",
              options: [
                "ping",
                "mkdir",
                "notepad",
                "copy",
              ],
              answer: "ping",
            },
            {
              question: "What should the final project report include?",
              options: [
                "Topology, device list, addressing plan, test results, and security controls",
                "Only the computer brand names",
                "Only the switch model number",
                "Only the names of installed applications",
              ],
              answer: "Topology, device list, addressing plan, test results, and security controls",
            },
          ],
        },
      ],
    },
  ],
};

export default networkingCourse;

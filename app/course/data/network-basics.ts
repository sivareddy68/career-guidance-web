const networkBasicsCourse = {
  title: "Network Basics",
  description:
    "Learn the fundamentals of computer networks, network devices, IP addresses, protocols, ports, DNS, DHCP, routing, switching, wireless networking, troubleshooting, and practical network concepts.",

  weeks: [
    {
      title: "Week 1: Network Foundations",
      description:
        "Understand what networks are, how devices communicate, and the role of common networking components.",
      lessons: [
        {
          title: "What Is a Computer Network?",
          content: `
A computer network is a collection of connected devices that communicate and share information.

Networked devices can include:
- Computers.
- Smartphones.
- Servers.
- Printers.
- Routers.
- Switches.
- IoT devices.

Networks allow devices to share:
- Files.
- Applications.
- Internet connections.
- Printers.
- Services.
- Data.

A small home network may contain phones, laptops, a smart TV, and a wireless router.

A company network can be much larger and may contain servers, switches, routers, firewalls, access points, and many client devices.

Communication happens using networking protocols. A protocol is a set of rules that defines how devices communicate.

Networks can be classified by their size and purpose.

A LAN covers a relatively small area such as a home, office, or building.

A WAN connects networks across larger geographic areas.

The Internet is a global network made up of many interconnected networks.

Every network must address important requirements such as connectivity, reliability, security, performance, and scalability.

Understanding these basic concepts makes it easier to learn IP addressing, routing, DNS, and other networking topics.
          `,
          quiz: [
            {
              question: "What is a computer network?",
              options: [
                "A collection of connected devices that communicate",
                "A single computer without connections",
                "A type of programming language",
                "A database table",
              ],
              answer:
                "A collection of connected devices that communicate",
            },
            {
              question: "Which device can be part of a computer network?",
              options: [
                "Printer",
                "Notebook paper",
                "Mechanical pencil",
                "Desk lamp without network capability",
              ],
              answer: "Printer",
            },
            {
              question: "What does a networking protocol define?",
              options: [
                "Rules for communication between devices",
                "The physical size of a computer",
                "The color of a network cable",
                "The brand of a monitor",
              ],
              answer:
                "Rules for communication between devices",
            },
            {
              question: "What does LAN generally describe?",
              options: [
                "A local area network",
                "A global database",
                "A programming language",
                "A storage format",
              ],
              answer: "A local area network",
            },
            {
              question: "What is the Internet?",
              options: [
                "A global system of interconnected networks",
                "A single local computer",
                "Only a wireless router",
                "A type of Ethernet cable",
              ],
              answer:
                "A global system of interconnected networks",
            },
          ],
        },

        {
          title: "Network Types and Topologies",
          content: `
Networks can be classified based on their geographic coverage and design.

Common network types include:

PAN:
A Personal Area Network covers a very small area around an individual.

LAN:
A Local Area Network usually covers a home, office, classroom, or building.

MAN:
A Metropolitan Area Network can connect networks across a city or metropolitan area.

WAN:
A Wide Area Network connects networks across large geographic distances.

Network topology describes how devices are arranged and connected.

Common topologies include:
- Star.
- Bus.
- Ring.
- Mesh.

In a star topology, devices connect to a central device such as a switch.

Star topology is widely used in modern Ethernet networks because individual devices can connect independently to the central switch.

In a bus topology, devices share a common communication path.

In a ring topology, devices form a logical or physical ring.

A mesh topology provides multiple paths between devices and can improve redundancy.

The choice of topology depends on cost, reliability, performance, physical environment, and scalability.

Modern networks may combine multiple topology concepts rather than using only one topology.
          `,
          quiz: [
            {
              question: "What does LAN stand for?",
              options: [
                "Local Area Network",
                "Large Access Network",
                "Linked Application Node",
                "Local Application Number",
              ],
              answer: "Local Area Network",
            },
            {
              question: "Which network type covers a large geographic area?",
              options: [
                "WAN",
                "PAN",
                "LAN",
                "USB",
              ],
              answer: "WAN",
            },
            {
              question: "What characterizes a star topology?",
              options: [
                "Devices connect to a central device",
                "Every device connects only to itself",
                "All devices use one circular path",
                "No devices are connected",
              ],
              answer: "Devices connect to a central device",
            },
            {
              question: "What is a mesh topology known for?",
              options: [
                "Multiple possible paths between devices",
                "Having only one device",
                "Using no connections",
                "Always requiring a single cable",
              ],
              answer:
                "Multiple possible paths between devices",
            },
            {
              question: "What does topology describe?",
              options: [
                "How network devices are arranged and connected",
                "The operating system version",
                "The database schema",
                "The CPU architecture",
              ],
              answer:
                "How network devices are arranged and connected",
            },
          ],
        },

        {
          title: "Network Devices",
          content: `
Different networking devices perform different roles.

A switch connects devices within a local network and forwards Ethernet frames based on MAC addresses.

A router connects different networks and forwards packets based on IP addresses.

A wireless access point allows wireless devices to connect to a network.

A modem provides connectivity between a local network and a service provider's network in setups where modem functionality is required.

A firewall controls network traffic according to configured security rules.

A network interface card, or NIC, allows a device to connect to a network.

A hub is an older type of networking device that broadcasts incoming traffic to its ports. Modern switched networks generally use switches instead.

Devices may perform multiple functions.

For example, a home router often combines:
- Router functionality.
- Switch ports.
- Wireless access point.
- Basic firewall.
- DHCP services.

Understanding device roles is useful when troubleshooting.

For example:
- If devices on the same LAN cannot communicate, the switch or local configuration may need investigation.
- If local devices work but Internet access fails, the router, WAN connection, DNS, or service provider connection may need investigation.
- If wireless devices cannot connect, the access point configuration may need investigation.

Knowing the purpose of each device makes troubleshooting more systematic.
          `,
          quiz: [
            {
              question: "What does a switch primarily connect?",
              options: [
                "Devices within a local network",
                "Only databases",
                "Only websites",
                "Only printers",
              ],
              answer: "Devices within a local network",
            },
            {
              question: "What does a router primarily connect?",
              options: [
                "Different networks",
                "Only USB devices",
                "Only monitors",
                "Only files",
              ],
              answer: "Different networks",
            },
            {
              question: "What does a wireless access point provide?",
              options: [
                "Wireless network connectivity",
                "Database storage",
                "CPU processing",
                "File compression",
              ],
              answer: "Wireless network connectivity",
            },
            {
              question: "What is the purpose of a firewall?",
              options: [
                "Control network traffic according to security rules",
                "Increase monitor resolution",
                "Store application files",
                "Replace every network cable",
              ],
              answer:
                "Control network traffic according to security rules",
            },
            {
              question: "What does a NIC provide?",
              options: [
                "A network interface for a device",
                "A database schema",
                "A programming compiler",
                "A display driver",
              ],
              answer: "A network interface for a device",
            },
          ],
        },

        {
          title: "Client, Server, and Peer-to-Peer Communication",
          content: `
Network applications commonly use client-server communication.

A client is a device or application that requests a service.

A server provides a service.

For example, when a browser requests a webpage, the browser acts as a client and the web server provides the requested resource.

Other examples include:
- Email clients and mail servers.
- Database applications and database servers.
- Mobile applications and API servers.

A server does not necessarily have to be a special physical machine. A normal computer can run server software.

Cloud platforms can also provide server-based services.

In a peer-to-peer network, devices can communicate more directly and may provide services to one another.

Client-server architectures are common because centralized services can simplify:
- Authentication.
- Data management.
- Security.
- Backups.
- Administration.

A network application normally depends on several layers working together.

For example, a web application may involve:
client device → wireless network → router → Internet → server → database.

If any important component fails, the application may become unavailable.

Understanding the communication roles helps identify where a problem may occur.
          `,
          quiz: [
            {
              question: "What does a client normally do?",
              options: [
                "Requests a service",
                "Always routes every network",
                "Only stores backups",
                "Only provides electricity",
              ],
              answer: "Requests a service",
            },
            {
              question: "What does a server normally provide?",
              options: [
                "A network service or resource",
                "Only a keyboard",
                "Only a network cable",
                "Only a display",
              ],
              answer: "A network service or resource",
            },
            {
              question: "Which is an example of client-server communication?",
              options: [
                "A browser requesting a webpage from a web server",
                "A keyboard pressing a key",
                "A monitor displaying pixels",
                "A battery charging a laptop",
              ],
              answer:
                "A browser requesting a webpage from a web server",
            },
            {
              question: "What is a peer-to-peer network?",
              options: [
                "A network where devices can communicate and provide services directly to one another",
                "A network with only one device",
                "A network with no communication",
                "A network containing only routers",
              ],
              answer:
                "A network where devices can communicate and provide services directly to one another",
            },
            {
              question: "Why is understanding client-server roles useful?",
              options: [
                "It helps understand how network services communicate",
                "It removes the need for IP addresses",
                "It prevents every network failure",
                "It replaces network devices",
              ],
              answer:
                "It helps understand how network services communicate",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Addressing and Communication",
      description:
        "Learn MAC addresses, IPv4, IPv6, ports, protocols, TCP, UDP, and basic network communication.",
      lessons: [
        {
          title: "MAC Addresses and Ethernet",
          content: `
A MAC address is a hardware-level network identifier associated with a network interface.

MAC addresses are commonly represented as hexadecimal values.

For example:

00:1A:2B:3C:4D:5E

Ethernet networks use MAC addresses when delivering frames within a local network.

A switch learns which MAC addresses are reachable through its ports.

When a switch receives an Ethernet frame, it can use its MAC address table to determine where to forward the frame.

Ethernet is one of the most widely used LAN technologies.

An Ethernet frame contains information required for local delivery and includes source and destination MAC addresses.

MAC addressing is different from IP addressing.

MAC addresses are primarily used for local network delivery, while IP addresses provide logical addressing used for communication across networks.

Network devices can use ARP in IPv4 networks to determine the MAC address associated with a local IPv4 address.

Understanding the difference between MAC and IP addresses is important when learning switching and routing.

A device can have a MAC address associated with its network interface and an IP address assigned for network communication.
          `,
          quiz: [
            {
              question: "What is a MAC address primarily associated with?",
              options: [
                "A network interface",
                "A database table",
                "A web page",
                "A CPU instruction",
              ],
              answer: "A network interface",
            },
            {
              question: "What does a switch use to make local forwarding decisions?",
              options: [
                "MAC addresses",
                "File names",
                "CPU temperatures",
                "Email subjects",
              ],
              answer: "MAC addresses",
            },
            {
              question: "How is a MAC address commonly represented?",
              options: [
                "Hexadecimal values",
                "Only decimal fractions",
                "Only alphabetic words",
                "Binary files only",
              ],
              answer: "Hexadecimal values",
            },
            {
              question: "What is one major difference between MAC and IP addresses?",
              options: [
                "MAC addresses are used for local network delivery while IP provides logical addressing",
                "MAC addresses are used only for databases",
                "IP addresses cannot identify network interfaces",
                "They are exactly the same concept",
              ],
              answer:
                "MAC addresses are used for local network delivery while IP provides logical addressing",
            },
            {
              question: "What does ARP help determine in IPv4 networks?",
              options: [
                "The MAC address associated with a local IPv4 address",
                "The CPU speed of a device",
                "The website's HTML",
                "The user's password",
              ],
              answer:
                "The MAC address associated with a local IPv4 address",
            },
          ],
        },

        {
          title: "IPv4 and IPv6 Basics",
          content: `
IP addressing provides logical addresses for devices communicating over IP networks.

IPv4 uses 32-bit addresses.

A common IPv4 address is:

192.168.1.10

IPv4 addresses are written as four decimal octets separated by periods.

IPv4 has a limited address space, which contributed to the development and adoption of IPv6.

IPv6 uses 128-bit addresses.

An IPv6 address can look like:

2001:db8::10

IPv6 uses hexadecimal notation and supports a much larger address space.

Some IPv4 addresses are private addresses used inside local networks.

Common private IPv4 ranges include:
- 10.0.0.0/8.
- 172.16.0.0/12.
- 192.168.0.0/16.

Private addresses are not directly routable across the public Internet.

Network Address Translation can allow private devices to communicate with public networks through a gateway.

An IP address may be assigned dynamically using DHCP or configured manually.

Understanding IP addressing is essential for troubleshooting network connectivity.

The address, subnet, gateway, and DNS configuration all influence whether a device can communicate successfully.
          `,
          quiz: [
            {
              question: "How many bits are in an IPv4 address?",
              options: [
                "32",
                "16",
                "64",
                "128",
              ],
              answer: "32",
            },
            {
              question: "How many bits are in an IPv6 address?",
              options: [
                "128",
                "32",
                "48",
                "64",
              ],
              answer: "128",
            },
            {
              question: "Which is an IPv4 address?",
              options: [
                "192.168.1.10",
                "2001:db8::10",
                "00:1A:2B:3C:4D:5E",
                "example.com",
              ],
              answer: "192.168.1.10",
            },
            {
              question: "Which range is a private IPv4 range?",
              options: [
                "192.168.0.0/16",
                "8.8.8.0/24",
                "1.1.1.0/24",
                "224.0.0.0/4",
              ],
              answer: "192.168.0.0/16",
            },
            {
              question: "Why was IPv6 developed in part?",
              options: [
                "To provide a much larger address space",
                "To replace Ethernet frames",
                "To eliminate all network devices",
                "To remove the need for routing",
              ],
              answer:
                "To provide a much larger address space",
            },
          ],
        },

        {
          title: "Ports and Network Protocols",
          content: `
An IP address identifies a network endpoint, while a port helps identify a particular service or application endpoint on that device.

Ports are numbered from 0 through 65535.

Commonly known service ports include:
- HTTP: 80.
- HTTPS: 443.
- DNS: 53.
- SSH: 22.

A port number alone does not guarantee that a service is actually running there. It is a convention used by applications and protocols.

Protocols define communication rules.

Examples include:
- HTTP for web communication.
- HTTPS for encrypted web communication.
- DNS for name resolution.
- DHCP for automatic network configuration.
- SSH for secure remote administration.

A network connection can therefore be thought of as involving an address and a service endpoint.

For example, a client might connect to a web server using its IP address and TCP port 443.

Firewalls can use IP addresses and ports when controlling network traffic.

Understanding ports is useful for troubleshooting because a host may be reachable while a specific service is unavailable.

For example, if a server responds to network tests but a web application cannot connect, the issue may involve the application service, port, firewall, or protocol configuration.
          `,
          quiz: [
            {
              question: "What does a port help identify?",
              options: [
                "A particular service or application endpoint",
                "A physical keyboard",
                "A database row",
                "A monitor",
              ],
              answer:
                "A particular service or application endpoint",
            },
            {
              question: "Which port is commonly associated with HTTPS?",
              options: [
                "443",
                "80",
                "22",
                "53",
              ],
              answer: "443",
            },
            {
              question: "Which port is commonly associated with SSH?",
              options: [
                "22",
                "443",
                "53",
                "25",
              ],
              answer: "22",
            },
            {
              question: "What does DNS provide?",
              options: [
                "Name resolution",
                "Disk formatting",
                "CPU scheduling",
                "File compression",
              ],
              answer: "Name resolution",
            },
            {
              question: "Why are ports useful when troubleshooting?",
              options: [
                "A host may be reachable while a particular service is unavailable",
                "Ports replace IP addresses completely",
                "Ports identify the monitor model",
                "Ports prevent every network failure",
              ],
              answer:
                "A host may be reachable while a particular service is unavailable",
            },
          ],
        },

        {
          title: "TCP and UDP",
          content: `
TCP and UDP are transport-layer protocols.

TCP is connection-oriented and provides mechanisms for reliable, ordered delivery.

TCP uses acknowledgments, sequencing, and retransmission mechanisms to help deliver data reliably.

It is commonly used for applications where reliable delivery is important.

Examples include:
- HTTPS.
- SSH.
- Many database connections.

UDP is connectionless and has less protocol overhead than TCP.

UDP does not provide TCP's built-in reliability mechanisms.

It is useful when low overhead or timing is important and the application can handle loss or recovery itself.

Examples of UDP use include:
- DNS queries in many common cases.
- Real-time communication.
- Streaming-related applications.
- Some network discovery protocols.

TCP is not automatically "better" than UDP.

The appropriate protocol depends on application requirements.

TCP can introduce overhead because it maintains connection and reliability mechanisms.

UDP can be faster or simpler for some use cases, but applications may need to handle reliability themselves if required.

Understanding this difference helps when learning web communication, DNS, real-time applications, and network troubleshooting.
          `,
          quiz: [
            {
              question: "Which transport protocol provides reliable ordered delivery mechanisms?",
              options: [
                "TCP",
                "UDP",
                "ARP",
                "DNS",
              ],
              answer: "TCP",
            },
            {
              question: "Which protocol is connectionless?",
              options: [
                "UDP",
                "TCP",
                "HTTPS",
                "SSH",
              ],
              answer: "UDP",
            },
            {
              question: "Why might an application choose UDP?",
              options: [
                "It can provide lower overhead for suitable applications",
                "It always guarantees delivery",
                "It automatically encrypts every message",
                "It replaces IP addressing",
              ],
              answer:
                "It can provide lower overhead for suitable applications",
            },
            {
              question: "Which protocol commonly supports HTTPS connections?",
              options: [
                "TCP",
                "UDP only",
                "ARP",
                "DHCP only",
              ],
              answer: "TCP",
            },
            {
              question: "Is TCP always better than UDP?",
              options: [
                "No, the choice depends on application requirements",
                "Yes, in every network",
                "Yes, because UDP cannot transmit data",
                "No, because TCP is not a transport protocol",
              ],
              answer:
                "No, the choice depends on application requirements",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Core Network Services",
      description:
        "Understand DNS, DHCP, routing, switching, NAT, and wireless networking.",
      lessons: [
        {
          title: "DNS and Name Resolution",
          content: `
DNS stands for Domain Name System.

DNS translates domain names into IP addresses and supports other types of name and service information.

Humans generally prefer names such as example.com instead of remembering numeric IP addresses.

When a user enters a website address, the device may need to resolve the domain name before connecting to the server.

DNS uses a distributed hierarchy.

Important DNS components include:
- Root servers.
- Top-level domain servers.
- Authoritative name servers.
- Recursive resolvers.

A recursive DNS resolver performs queries on behalf of clients and can cache responses.

Caching improves performance and reduces repeated queries.

DNS records can contain different types of information.

Common records include:
- A for IPv4 address mapping.
- AAAA for IPv6 address mapping.
- CNAME for canonical name aliases.
- MX for mail exchange information.
- TXT for text-based information.

DNS problems can cause websites to appear unavailable even when general network connectivity is working.

For example, a device may successfully reach an IP address but fail to resolve a domain name.

Troubleshooting DNS separately from general connectivity is therefore important.
          `,
          quiz: [
            {
              question: "What does DNS stand for?",
              options: [
                "Domain Name System",
                "Data Network Service",
                "Digital Node Security",
                "Domain Network Server",
              ],
              answer: "Domain Name System",
            },
            {
              question: "What is a major purpose of DNS?",
              options: [
                "Resolving domain names to IP addresses",
                "Encrypting every network packet",
                "Replacing routers",
                "Storing operating systems",
              ],
              answer:
                "Resolving domain names to IP addresses",
            },
            {
              question: "Which DNS record maps a name to an IPv4 address?",
              options: [
                "A",
                "AAAA",
                "MX",
                "CNAME",
              ],
              answer: "A",
            },
            {
              question: "Which DNS record is associated with IPv6 address mapping?",
              options: [
                "AAAA",
                "A",
                "MX",
                "TXT",
              ],
              answer: "AAAA",
            },
            {
              question: "Why is DNS caching useful?",
              options: [
                "It can reduce repeated DNS queries and improve response time",
                "It replaces IP addresses permanently",
                "It disables routers",
                "It removes all DNS records",
              ],
              answer:
                "It can reduce repeated DNS queries and improve response time",
            },
          ],
        },

        {
          title: "DHCP and Automatic Network Configuration",
          content: `
DHCP stands for Dynamic Host Configuration Protocol.

DHCP allows devices to receive network configuration automatically.

A DHCP server can provide:
- IP address.
- Subnet mask or prefix information.
- Default gateway.
- DNS server information.
- Lease duration.

Without automatic configuration, devices can require manual network settings.

A common DHCP process is often described using DORA:
- Discover.
- Offer.
- Request.
- Acknowledge.

The client discovers available DHCP servers.

A server offers configuration.

The client requests an offered configuration.

The server acknowledges the assignment.

DHCP leases are temporary and can be renewed.

A DHCP server can be provided by:
- A home router.
- A dedicated server.
- A network service.

DHCP reduces configuration effort in networks with many devices.

However, incorrect DHCP settings can cause connectivity problems.

For example, an incorrect default gateway can prevent access to remote networks even if the device has an IP address.

When troubleshooting, inspect the assigned IP address, subnet information, gateway, and DNS settings.

DHCP and DNS often work together: DHCP can provide clients with the DNS server address they should use.
          `,
          quiz: [
            {
              question: "What does DHCP provide?",
              options: [
                "Automatic network configuration",
                "Only file storage",
                "Only web pages",
                "Only encryption keys",
              ],
              answer: "Automatic network configuration",
            },
            {
              question: "What does DORA describe?",
              options: [
                "A common DHCP exchange",
                "A routing algorithm",
                "A wireless encryption method",
                "A database operation",
              ],
              answer: "A common DHCP exchange",
            },
            {
              question: "Which can DHCP provide to a client?",
              options: [
                "Default gateway",
                "CPU instructions",
                "Application source code",
                "Monitor resolution",
              ],
              answer: "Default gateway",
            },
            {
              question: "Why are DHCP leases used?",
              options: [
                "Network configuration can be assigned for a period and renewed",
                "They permanently delete addresses",
                "They replace DNS",
                "They encrypt Ethernet frames",
              ],
              answer:
                "Network configuration can be assigned for a period and renewed",
            },
            {
              question: "What can an incorrect default gateway cause?",
              options: [
                "Difficulty reaching remote networks",
                "A faster Internet connection",
                "Automatic database repair",
                "A new MAC address",
              ],
              answer: "Difficulty reaching remote networks",
            },
          ],
        },

        {
          title: "Routing and Default Gateways",
          content: `
Routing determines how packets move between different IP networks.

A router maintains routing information that helps it decide where to forward packets.

A routing table can contain:
- Destination network.
- Next hop.
- Interface.
- Metric or preference information.

When a device needs to communicate with a destination outside its local network, it usually sends the packet to a default gateway.

The default gateway is normally a router interface on the local network.

Routers can use:
- Static routes.
- Dynamic routing protocols.

A static route is manually configured.

Dynamic routing protocols allow routers to exchange routing information.

Examples of routing protocols include OSPF and BGP, which are used in different environments.

The Internet relies heavily on BGP to exchange reachability information between autonomous systems.

Routing problems can result from:
- Incorrect routes.
- Incorrect gateways.
- Interface failures.
- Firewall rules.
- Addressing errors.

A basic troubleshooting process can inspect the local IP configuration, gateway, routing table, and reachability of the destination.

Understanding routing is essential because a device can successfully communicate with local devices while being unable to reach remote networks.
          `,
          quiz: [
            {
              question: "What is routing?",
              options: [
                "Determining how packets move between networks",
                "Formatting a hard drive",
                "Creating database tables",
                "Encrypting every file",
              ],
              answer:
                "Determining how packets move between networks",
            },
            {
              question: "What is a default gateway?",
              options: [
                "A router used to reach destinations outside the local network",
                "A DNS record",
                "A MAC address table",
                "A database server",
              ],
              answer:
                "A router used to reach destinations outside the local network",
            },
            {
              question: "What does a routing table contain?",
              options: [
                "Information used to determine packet forwarding",
                "Only user passwords",
                "Only website content",
                "Only MAC addresses",
              ],
              answer:
                "Information used to determine packet forwarding",
            },
            {
              question: "What is a static route?",
              options: [
                "A manually configured route",
                "A wireless password",
                "A DNS cache entry",
                "A database record",
              ],
              answer: "A manually configured route",
            },
            {
              question: "Which protocol is widely used for Internet inter-domain routing?",
              options: [
                "BGP",
                "DHCP",
                "DNS",
                "ARP",
              ],
              answer: "BGP",
            },
          ],
        },

        {
          title: "NAT and Wireless Networking",
          content: `
NAT stands for Network Address Translation.

NAT allows network devices to translate addresses between different address spaces.

A common home network uses private IPv4 addresses internally.

The router can translate outgoing connections from private addresses to a public address.

This helps conserve IPv4 addresses and allows many internal devices to share public connectivity.

NAT is not a complete security solution. Security should also use appropriate firewall rules and other controls.

Wireless networking allows devices to communicate without physical Ethernet cables.

Wi-Fi networks use wireless access points.

Important wireless concepts include:
- SSID.
- Frequency bands.
- Channels.
- Signal strength.
- Encryption.
- Authentication.

The SSID is the network name presented to users.

Modern Wi-Fi security commonly uses WPA2 or WPA3 depending on equipment and configuration.

Wireless performance can be affected by:
- Distance.
- Obstacles.
- Interference.
- Channel congestion.
- Device capabilities.

A strong wireless network should use appropriate security settings and a strong password.

Troubleshooting wireless connectivity involves checking signal strength, authentication, IP configuration, DNS, and Internet reachability.

NAT and wireless networking are common parts of home and small-office networks.
          `,
          quiz: [
            {
              question: "What does NAT stand for?",
              options: [
                "Network Address Translation",
                "Network Access Transfer",
                "Node Address Technology",
                "Network Application Table",
              ],
              answer: "Network Address Translation",
            },
            {
              question: "Why is NAT commonly used with private IPv4 addresses?",
              options: [
                "To allow internal devices to share public connectivity",
                "To replace DNS completely",
                "To remove all routers",
                "To create MAC addresses",
              ],
              answer:
                "To allow internal devices to share public connectivity",
            },
            {
              question: "What does SSID identify?",
              options: [
                "A wireless network name",
                "A CPU",
                "A database",
                "A MAC address vendor",
              ],
              answer: "A wireless network name",
            },
            {
              question: "Which can affect Wi-Fi performance?",
              options: [
                "Interference",
                "Database schema",
                "SQL syntax",
                "Programming language",
              ],
              answer: "Interference",
            },
            {
              question: "Is NAT by itself a complete security solution?",
              options: [
                "No",
                "Yes",
                "Only for wireless networks",
                "Only for IPv6",
              ],
              answer: "No",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Troubleshooting and Practical Networking",
      description:
        "Learn network troubleshooting, common tools, performance concepts, security basics, and complete a practical network project.",
      lessons: [
        {
          title: "Network Troubleshooting Method",
          content: `
Network troubleshooting is the process of identifying and resolving connectivity or performance problems.

A systematic approach is better than randomly changing settings.

A useful process is:

1. Identify the problem.
2. Gather information.
3. Check physical connectivity.
4. Verify configuration.
5. Test local connectivity.
6. Test remote connectivity.
7. Check DNS and services.
8. Apply a change.
9. Test again.
10. Document the solution.

Start with simple checks.

For a wired device, check:
- Cable connection.
- Link lights.
- Network interface status.

For wireless devices, check:
- Wi-Fi enabled.
- Correct SSID.
- Signal strength.
- Authentication.

Then inspect IP configuration.

Check:
- IP address.
- Subnet.
- Default gateway.
- DNS servers.

Testing the local gateway can help determine whether the local network is functioning.

Testing a remote IP can help separate routing problems from DNS problems.

Testing a domain name can reveal DNS issues.

Avoid changing many settings at once.

If multiple changes are made simultaneously, it becomes difficult to identify which change solved the problem or caused a new issue.

Good troubleshooting also includes documenting the symptoms, tests, findings, and final solution.
          `,
          quiz: [
            {
              question: "What should be done first in systematic troubleshooting?",
              options: [
                "Identify the problem",
                "Replace every device",
                "Delete the configuration",
                "Restart every server",
              ],
              answer: "Identify the problem",
            },
            {
              question: "Which configuration should be checked on an IP device?",
              options: [
                "IP address, subnet, gateway, and DNS",
                "Only screen brightness",
                "Only keyboard layout",
                "Only file names",
              ],
              answer:
                "IP address, subnet, gateway, and DNS",
            },
            {
              question: "Why should changes be made systematically?",
              options: [
                "It helps identify which change affected the problem",
                "It makes every network faster",
                "It removes the need for testing",
                "It guarantees no future failures",
              ],
              answer:
                "It helps identify which change affected the problem",
            },
            {
              question: "What can testing a domain name help identify?",
              options: [
                "Potential DNS resolution problems",
                "CPU overheating",
                "Hard-disk fragmentation",
                "Keyboard problems",
              ],
              answer:
                "Potential DNS resolution problems",
            },
            {
              question: "Why document troubleshooting results?",
              options: [
                "It helps future troubleshooting and knowledge sharing",
                "It automatically repairs networks",
                "It replaces network configuration",
                "It prevents all failures",
              ],
              answer:
                "It helps future troubleshooting and knowledge sharing",
            },
          ],
        },

        {
          title: "Common Network Commands",
          content: `
Operating systems provide commands for checking network configuration and connectivity.

Common commands include:

ipconfig on Windows displays IP configuration information.

ip on Linux can display and manage network interfaces and addresses.

ping tests basic IP reachability using ICMP in common implementations.

tracert on Windows and traceroute on many Unix-like systems help show the path toward a destination.

nslookup and dig can be used to investigate DNS resolution.

arp can display or inspect ARP-related information on systems that provide the command.

netstat or newer socket tools can help inspect network connections and listening services depending on the operating system.

These commands should be interpreted rather than simply executed.

For example, a successful ping does not prove that a web application is working.

A device may respond to ICMP while a specific TCP service is unavailable.

Similarly, successful DNS resolution does not prove that the application server itself is healthy.

Network tools provide evidence.

A good troubleshooter combines command output with the symptoms and expected network behavior.

Always use the appropriate command for the operating system being investigated.
          `,
          quiz: [
            {
              question: "Which Windows command displays IP configuration?",
              options: [
                "ipconfig",
                "ping",
                "nslookup",
                "tracert",
              ],
              answer: "ipconfig",
            },
            {
              question: "What does ping commonly test?",
              options: [
                "Basic IP reachability",
                "Database performance",
                "File permissions",
                "CPU temperature",
              ],
              answer: "Basic IP reachability",
            },
            {
              question: "What does tracert help show?",
              options: [
                "The path toward a destination",
                "Database tables",
                "CPU instructions",
                "File contents",
              ],
              answer: "The path toward a destination",
            },
            {
              question: "Which tools can investigate DNS resolution?",
              options: [
                "nslookup and dig",
                "ping and ipconfig only",
                "task manager and editor",
                "compiler and linker",
              ],
              answer: "nslookup and dig",
            },
            {
              question: "Does a successful ping guarantee that a web application is working?",
              options: [
                "No",
                "Yes",
                "Only on Wi-Fi",
                "Only on IPv6",
              ],
              answer: "No",
            },
          ],
        },

        {
          title: "Network Performance and Security Basics",
          content: `
Network performance describes how effectively a network carries data.

Important concepts include:
- Bandwidth.
- Throughput.
- Latency.
- Jitter.
- Packet loss.

Bandwidth describes the theoretical capacity of a network connection.

Throughput describes the amount of data actually transferred over a period.

Latency is the time taken for data to travel between endpoints.

Jitter describes variation in packet delay.

Packet loss occurs when packets fail to reach their destination.

Different applications have different requirements.

A file transfer may benefit from high throughput.

Interactive communication is often sensitive to latency and jitter.

Security is also an important part of network design.

Basic network security measures include:
- Firewalls.
- Strong authentication.
- Network segmentation.
- Secure protocols.
- Software updates.
- Access control.
- Monitoring.

HTTPS should be preferred over unencrypted HTTP when protecting web communication.

Wireless networks should use appropriate modern security mechanisms.

Network segmentation can reduce the impact of a compromised device by separating systems into different network areas.

Good network design balances performance, availability, security, cost, and manageability.
          `,
          quiz: [
            {
              question: "What does latency describe?",
              options: [
                "Time taken for data to travel between endpoints",
                "Maximum disk capacity",
                "Number of database rows",
                "CPU clock speed",
              ],
              answer:
                "Time taken for data to travel between endpoints",
            },
            {
              question: "What does packet loss mean?",
              options: [
                "Packets fail to reach their destination",
                "A file is renamed",
                "A router changes color",
                "A database is backed up",
              ],
              answer:
                "Packets fail to reach their destination",
            },
            {
              question: "What does bandwidth describe?",
              options: [
                "The theoretical capacity of a network connection",
                "The number of users in a database",
                "The number of CPU cores",
                "The size of a web page",
              ],
              answer:
                "The theoretical capacity of a network connection",
            },
            {
              question: "Which is a basic network security measure?",
              options: [
                "Firewall",
                "Screen brightness",
                "Keyboard shortcut",
                "File rename",
              ],
              answer: "Firewall",
            },
            {
              question: "Why is network segmentation useful?",
              options: [
                "It can limit the impact of a compromised device",
                "It removes the need for authentication",
                "It guarantees unlimited bandwidth",
                "It replaces DNS",
              ],
              answer:
                "It can limit the impact of a compromised device",
            },
          ],
        },

        {
          title: "Final Project: Build a Small Network",
          content: `
The final project combines the main concepts from Network Basics.

Project: Design and troubleshoot a small office network.

Assume the office contains:
- 10 computers.
- 2 printers.
- 2 wireless access points.
- 1 router.
- 1 switch.
- Internet connectivity.

Step 1: Design the network.

Connect the computers and printers to the switch.

Connect the switch to the router.

Connect wireless access points to the appropriate network infrastructure.

Step 2: Plan IP addressing.

Choose a private IPv4 network.

Assign appropriate addresses to network devices.

Use DHCP for client devices where appropriate.

Step 3: Configure the gateway.

The router provides the default gateway for the local network.

Step 4: Configure DNS.

Clients should receive appropriate DNS server information.

Step 5: Test local connectivity.

Verify that computers can communicate with local devices.

Step 6: Test Internet connectivity.

Check whether clients can reach remote destinations.

Step 7: Test DNS.

Check whether domain names resolve correctly.

Step 8: Test services.

Verify that required services and ports are reachable.

Step 9: Apply basic security.

Use firewall rules, strong wireless authentication, software updates, and appropriate access controls.

Step 10: Troubleshoot a simulated problem.

For example:
- A client has no IP address.
- A client has an incorrect gateway.
- DNS resolution fails.
- A wireless device cannot authenticate.
- A web service is unavailable.

Use a systematic troubleshooting process to identify the cause.

Step 11: Document the network.

Create a simple network diagram and record:
- Devices.
- IP ranges.
- Gateway.
- DNS.
- Wireless networks.
- Security controls.

The project demonstrates the complete network troubleshooting cycle from physical connectivity through application-level testing.
          `,
          quiz: [
            {
              question: "What is the main purpose of the final project?",
              options: [
                "Design and troubleshoot a small office network",
                "Build a database server only",
                "Create a programming compiler",
                "Design a mobile application",
              ],
              answer:
                "Design and troubleshoot a small office network",
            },
            {
              question: "Which device normally connects different IP networks?",
              options: [
                "Router",
                "Printer",
                "Keyboard",
                "Monitor",
              ],
              answer: "Router",
            },
            {
              question: "What can DHCP provide to office computers?",
              options: [
                "Automatic IP configuration",
                "Only usernames",
                "Only web pages",
                "Only application code",
              ],
              answer: "Automatic IP configuration",
            },
            {
              question: "What should be checked if a client cannot resolve domain names?",
              options: [
                "DNS configuration and resolution",
                "Monitor brightness",
                "Keyboard layout",
                "CPU fan speed",
              ],
              answer:
                "DNS configuration and resolution",
            },
            {
              question: "What is an important final step after troubleshooting?",
              options: [
                "Document the findings and solution",
                "Delete all configurations",
                "Remove the router",
                "Disable all security controls",
              ],
              answer:
                "Document the findings and solution",
            },
          ],
        },
      ],
    },
  ],
};

export default networkBasicsCourse;
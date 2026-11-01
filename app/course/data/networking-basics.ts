export const networkingBasicsCourse = {
  id: "networking-basics",
  title: "Networking Basics",
  description:
    "Learn IP addressing, subnetting concepts, network devices, protocols, wireless networking, troubleshooting, and practical network design.",
  duration: "8 Weeks",
  level: "Beginner",

  weeks: [
    {
      week: 1,
      title: "Introduction to Computer Networking",

      lessons: [
        {
          id: "nb-w1-l1",
          title: "What is Computer Networking?",
          content: `
Computer networking is the process of connecting computers, phones, servers,
IoT devices and other systems so they can exchange data.

Examples:
- Laptop connected to Wi-Fi
- Mobile phone connected to the internet
- Computers connected in a college laboratory
- Smart sensors connected to an IoT network

A network normally contains:
- Devices
- Communication media
- Network devices
- Protocols
- Addresses

The main purpose of networking is communication and resource sharing.
          `,
          example:
            "A college computer lab can connect 30 computers to a switch so that they can communicate and access shared resources."
        },

        {
          id: "nb-w1-l2",
          title: "Types of Networks",
          content: `
Common types of networks include:

PAN - Personal Area Network
A small network around one person.

LAN - Local Area Network
A network covering a small area such as a home, office or laboratory.

MAN - Metropolitan Area Network
A network covering a city or large campus.

WAN - Wide Area Network
A network covering large geographical areas.

The Internet is the world's largest interconnected network.
          `,
          example:
            "Your home Wi-Fi is normally a LAN, while the Internet is a WAN."
        },

        {
          id: "nb-w1-l3",
          title: "Network Topologies",
          content: `
Network topology describes how devices are connected.

Common topologies:

Bus:
All devices share a common communication line.

Star:
All devices connect to a central switch or hub.

Ring:
Devices form a circular connection.

Mesh:
Devices have multiple connections with each other.

Tree:
Networks are arranged in hierarchical levels.

Star topology is commonly used in modern Ethernet networks.
          `,
          example:
            "In a school computer lab, every computer can connect to one central switch. This is a star topology."
        },

        {
          id: "nb-w1-l4",
          title: "Bandwidth and Latency",
          content: `
Bandwidth represents the amount of data that can be transferred over a
network connection in a given period.

Common units:
- Kbps
- Mbps
- Gbps

Latency is the delay between sending and receiving data.

High bandwidth can support large amounts of data.

Low latency is important for applications such as:
- Online gaming
- Video calls
- Real-time IoT systems
- Remote control systems
          `,
          example:
            "A network may have 100 Mbps bandwidth but still experience high latency if the connection has a long delay."
        },

        {
          id: "nb-w1-l5",
          title: "Packets and Data Transmission",
          content: `
Large amounts of network data are divided into smaller units called packets.

A packet can contain:
- Source information
- Destination information
- Data
- Control information

Packets travel through network devices until they reach the destination.

The destination device reassembles the received data.
          `,
          example:
            "When you open a website, information between your device and the server is transferred through many packets."
        }
      ],

      quiz: [
        {
          question: "What is a computer network?",
          options: [
            "A group of connected devices",
            "Only a computer",
            "Only a cable",
            "A programming language"
          ],
          answer: "A group of connected devices"
        },
        {
          question: "What does LAN stand for?",
          options: [
            "Local Area Network",
            "Large Access Network",
            "Local Access Node",
            "Long Area Network"
          ],
          answer: "Local Area Network"
        },
        {
          question: "Which network covers a large geographical area?",
          options: ["PAN", "LAN", "WAN", "CAN"],
          answer: "WAN"
        },
        {
          question: "Which topology uses a central device?",
          options: ["Ring", "Star", "Bus", "Mesh"],
          answer: "Star"
        },
        {
          question: "What does bandwidth describe?",
          options: [
            "Data carrying capacity",
            "Device name",
            "IP address",
            "Password"
          ],
          answer: "Data carrying capacity"
        },
        {
          question: "What is latency?",
          options: [
            "Network delay",
            "Network password",
            "Cable type",
            "IP address"
          ],
          answer: "Network delay"
        },
        {
          question: "What is a packet?",
          options: [
            "A unit of network data",
            "A network cable",
            "A router",
            "A switch"
          ],
          answer: "A unit of network data"
        },
        {
          question: "Which network is normally used inside a home?",
          options: ["LAN", "WAN", "MAN", "PAN only"],
          answer: "LAN"
        },
        {
          question: "What is the Internet?",
          options: [
            "A global interconnected network",
            "A single computer",
            "A single router",
            "A programming language"
          ],
          answer: "A global interconnected network"
        },
        {
          question: "Which topology provides multiple paths between devices?",
          options: ["Bus", "Mesh", "Ring", "Star"],
          answer: "Mesh"
        }
      ],

      assignment:
        "Draw a diagram of your home or college network and identify the devices, connections and network type."
    },

    {
      week: 2,
      title: "Network Devices and Communication Media",

      lessons: [
        {
          id: "nb-w2-l1",
          title: "Network Interface Card",
          content: `
A Network Interface Card (NIC) allows a device to communicate with a network.

NICs can support:
- Ethernet
- Wi-Fi
- Other communication technologies

Every network interface normally has a MAC address.
          `,
          example:
            "A laptop uses its Wi-Fi network interface to connect to a wireless router."
        },

        {
          id: "nb-w2-l2",
          title: "Hub and Switch",
          content: `
A hub sends received data to multiple connected ports.

A switch is more intelligent and can forward Ethernet frames toward the
appropriate destination device.

Switches are commonly used in LANs.
          `,
          example:
            "An office can use a switch to connect multiple desktop computers."
        },

        {
          id: "nb-w2-l3",
          title: "Router",
          content: `
A router connects different networks.

Routers make forwarding decisions using network addressing information.

A home router commonly connects:
- Home LAN
- Internet service provider network

Many home routers also provide Wi-Fi, DHCP and basic firewall features.
          `,
          example:
            "Your home router connects your private home network to the Internet."
        },

        {
          id: "nb-w2-l4",
          title: "Access Point and Modem",
          content: `
An access point provides wireless network connectivity.

A modem provides communication with an Internet service provider's
communication system.

Modern home devices may combine:
- Router
- Switch
- Access point
- Other networking functions
          `,
          example:
            "A Wi-Fi router acts as the wireless access point for phones and laptops."
        },

        {
          id: "nb-w2-l5",
          title: "Network Cables and Wireless Communication",
          content: `
Common wired communication media include:
- Twisted-pair Ethernet cable
- Fiber optic cable

Wireless communication can use:
- Wi-Fi
- Bluetooth
- Cellular networks

Fiber optic communication uses light and can support high-speed
long-distance communication.
          `,
          example:
            "Ethernet cables are common inside offices, while Wi-Fi is convenient for mobile devices."
        }
      ],

      quiz: [
        {
          question: "What does NIC stand for?",
          options: [
            "Network Interface Card",
            "Network Internet Cable",
            "Node Interface Controller",
            "Network Input Connection"
          ],
          answer: "Network Interface Card"
        },
        {
          question: "Which device connects different networks?",
          options: ["Router", "Keyboard", "Monitor", "Printer"],
          answer: "Router"
        },
        {
          question: "Which device commonly connects computers in a LAN?",
          options: ["Switch", "Scanner", "Speaker", "Camera"],
          answer: "Switch"
        },
        {
          question: "What does an access point provide?",
          options: [
            "Wireless network connectivity",
            "Electrical power only",
            "Storage",
            "Programming"
          ],
          answer: "Wireless network connectivity"
        },
        {
          question: "Which cable uses light for communication?",
          options: [
            "Fiber optic",
            "Copper wire",
            "Power cable",
            "USB cable"
          ],
          answer: "Fiber optic"
        },
        {
          question: "Which technology is wireless?",
          options: ["Wi-Fi", "Ethernet cable", "Fiber", "Coaxial cable"],
          answer: "Wi-Fi"
        },
        {
          question: "What is a router mainly used for?",
          options: [
            "Connecting networks",
            "Displaying images",
            "Printing documents",
            "Storing files"
          ],
          answer: "Connecting networks"
        },
        {
          question: "What does a hub generally do?",
          options: [
            "Broadcasts received data to connected ports",
            "Creates websites",
            "Stores databases",
            "Compiles programs"
          ],
          answer: "Broadcasts received data to connected ports"
        },
        {
          question: "Which is a wired technology?",
          options: ["Ethernet", "Wi-Fi", "Bluetooth", "Cellular"],
          answer: "Ethernet"
        },
        {
          question: "Which device provides wireless connectivity?",
          options: ["Access Point", "Monitor", "Keyboard", "Printer"],
          answer: "Access Point"
        }
      ],

      assignment:
        "Create a table comparing hub, switch, router, modem and access point."
    },

    {
      week: 3,
      title: "IP Addressing and MAC Addresses",

      lessons: [
        {
          id: "nb-w3-l1",
          title: "What is an IP Address?",
          content: `
An IP address identifies a network interface at the network layer.

IPv4 addresses contain 32 bits and are normally written as four decimal
numbers separated by dots.

Example:
192.168.1.10

IPv6 uses 128-bit addresses and was created to provide a much larger address
space.
          `,
          example:
            "192.168.1.25 is an example of an IPv4 address."
        },

        {
          id: "nb-w3-l2",
          title: "Private and Public IP Addresses",
          content: `
Private IP addresses are commonly used inside local networks.

Common private IPv4 ranges include:
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16

Public IP addresses are used for communication across the public Internet.

Network Address Translation (NAT) can allow many private devices to share
a public IPv4 address.
          `,
          example:
            "A home laptop may have 192.168.1.20 internally while the home router uses a public Internet address."
        },

        {
          id: "nb-w3-l3",
          title: "MAC Address",
          content: `
A MAC address is a link-layer hardware address associated with a network
interface.

It is normally represented using hexadecimal values.

Example:
00:1A:2B:3C:4D:5E

MAC addresses are commonly used by Ethernet and Wi-Fi networks for local
network communication.
          `,
          example:
            "A switch can use MAC addresses to decide where to forward Ethernet frames."
        },

        {
          id: "nb-w3-l4",
          title: "DHCP",
          content: `
DHCP stands for Dynamic Host Configuration Protocol.

DHCP can automatically provide network configuration such as:
- IP address
- Subnet information
- Default gateway
- DNS server information

This reduces the need to manually configure every device.
          `,
          example:
            "When your phone connects to home Wi-Fi, the router can automatically assign it an IP address using DHCP."
        },

        {
          id: "nb-w3-l5",
          title: "DNS",
          content: `
DNS stands for Domain Name System.

DNS converts domain names into IP addresses.

Example:

www.example.com
        ↓
IP address

Humans prefer names, while network communication uses addresses.
          `,
          example:
            "When you enter a website name in a browser, DNS helps find the server's IP address."
        }
      ],

      quiz: [
        {
          question: "How many bits are in an IPv4 address?",
          options: ["16", "32", "64", "128"],
          answer: "32"
        },
        {
          question: "How many bits are in an IPv6 address?",
          options: ["32", "64", "96", "128"],
          answer: "128"
        },
        {
          question: "Which is a private IPv4 address?",
          options: ["192.168.1.10", "8.8.8.8", "1.1.1.1", "142.250.1.1"],
          answer: "192.168.1.10"
        },
        {
          question: "What does DHCP provide?",
          options: [
            "Network configuration",
            "Only web pages",
            "Only passwords",
            "Only files"
          ],
          answer: "Network configuration"
        },
        {
          question: "What does DNS do?",
          options: [
            "Maps domain names to IP addresses",
            "Creates electricity",
            "Stores images",
            "Controls monitors"
          ],
          answer: "Maps domain names to IP addresses"
        },
        {
          question: "What identifies a network interface at the link layer?",
          options: ["MAC address", "URL", "Username", "Password"],
          answer: "MAC address"
        },
        {
          question: "What does NAT commonly allow?",
          options: [
            "Private devices to share a public IPv4 address",
            "More RAM",
            "Faster processors",
            "More storage"
          ],
          answer: "Private devices to share a public IPv4 address"
        },
        {
          question: "Which is an IPv4 address?",
          options: [
            "192.168.1.10",
            "AB-CD-EF",
            "example.com",
            "HTTP"
          ],
          answer: "192.168.1.10"
        },
        {
          question: "What does IPv6 provide?",
          options: [
            "A much larger address space",
            "Only wireless communication",
            "Only email",
            "Only local storage"
          ],
          answer: "A much larger address space"
        },
        {
          question: "What does MAC stand for in networking?",
          options: [
            "Media Access Control",
            "Machine Access Computer",
            "Main Address Connection",
            "Media Application Control"
          ],
          answer: "Media Access Control"
        }
      ],

      assignment:
        "Write down the IP address, default gateway and DNS information of a computer on your own network using normal system network settings."
    },

    {
      week: 4,
      title: "Network Protocols",

      lessons: [
        {
          id: "nb-w4-l1",
          title: "What is a Network Protocol?",
          content: `
A protocol is a set of rules used by devices to communicate.

Protocols define:
- Message format
- Communication procedures
- Addressing
- Error handling
- Timing

Examples include TCP, UDP, HTTP, HTTPS, DNS, DHCP and ICMP.
          `,
          example:
            "Web browsers use HTTP or HTTPS to communicate with web servers."
        },

        {
          id: "nb-w4-l2",
          title: "TCP",
          content: `
TCP stands for Transmission Control Protocol.

TCP provides reliable, ordered delivery of data.

Important characteristics:
- Connection-oriented communication
- Reliability
- Error recovery
- Ordered data delivery

TCP is useful when reliable delivery is important.
          `,
          example:
            "Web applications commonly use TCP-based connections when reliable data delivery is required."
        },

        {
          id: "nb-w4-l3",
          title: "UDP",
          content: `
UDP stands for User Datagram Protocol.

UDP is connectionless and has lower overhead than TCP.

UDP does not provide the same built-in reliability and ordering guarantees
as TCP.

It can be useful for applications where low delay is important.
          `,
          example:
            "Some real-time applications can use UDP when speed and low delay are more important than retransmitting every packet."
        },

        {
          id: "nb-w4-l4",
          title: "HTTP and HTTPS",
          content: `
HTTP stands for Hypertext Transfer Protocol.

HTTPS is HTTP protected using encryption through TLS.

Web browsers use HTTP-based protocols to communicate with web servers.

HTTPS helps protect data from being read or modified during transmission.
          `,
          example:
            "When a browser opens an HTTPS website, the communication is protected using TLS."
        },

        {
          id: "nb-w4-l5",
          title: "ICMP",
          content: `
ICMP stands for Internet Control Message Protocol.

It is used for network control and diagnostic messages.

Tools such as ping use ICMP to test network reachability.

ICMP can help identify whether a destination responds to network requests.
          `,
          example:
            "The ping command can help determine whether another device is reachable."
        }
      ],

      quiz: [
        {
          question: "What is a protocol?",
          options: [
            "A set of communication rules",
            "A computer screen",
            "A keyboard",
            "A power supply"
          ],
          answer: "A set of communication rules"
        },
        {
          question: "Which protocol provides reliable ordered delivery?",
          options: ["TCP", "UDP", "ICMP", "DNS"],
          answer: "TCP"
        },
        {
          question: "Which protocol has lower overhead?",
          options: ["UDP", "TCP", "HTTP", "DNS"],
          answer: "UDP"
        },
        {
          question: "What does HTTPS provide?",
          options: [
            "Protected web communication",
            "More RAM",
            "File compression only",
            "Physical security"
          ],
          answer: "Protected web communication"
        },
        {
          question: "Which protocol is commonly used for web communication?",
          options: ["HTTP", "DHCP", "ARP only", "ICMP only"],
          answer: "HTTP"
        },
        {
          question: "Which protocol is used by ping?",
          options: ["ICMP", "HTTP", "FTP", "SMTP"],
          answer: "ICMP"
        },
        {
          question: "What does TCP provide?",
          options: [
            "Reliable data delivery",
            "Only wireless access",
            "Only DNS",
            "Only encryption"
          ],
          answer: "Reliable data delivery"
        },
        {
          question: "What does UDP mean?",
          options: [
            "User Datagram Protocol",
            "Universal Data Process",
            "User Data Program",
            "Unified Device Protocol"
          ],
          answer: "User Datagram Protocol"
        },
        {
          question: "What does HTTP stand for?",
          options: [
            "Hypertext Transfer Protocol",
            "High Transfer Text Process",
            "Hyper Terminal Transfer Program",
            "Host Transfer Technology Protocol"
          ],
          answer: "Hypertext Transfer Protocol"
        },
        {
          question: "What is ping mainly useful for?",
          options: [
            "Testing network reachability",
            "Editing images",
            "Writing code",
            "Creating databases"
          ],
          answer: "Testing network reachability"
        }
      ],

      assignment:
        "Create a comparison table for TCP, UDP, HTTP, HTTPS, DNS, DHCP and ICMP."
    },

    {
      week: 5,
      title: "Wireless and IoT Networking",

      lessons: [
        {
          id: "nb-w5-l1",
          title: "Wi-Fi Networking",
          content: `
Wi-Fi provides wireless local area networking.

Important concepts include:
- SSID
- Access point
- Authentication
- Wireless channels
- Signal strength

A Wi-Fi network allows devices to communicate without physical Ethernet
connections.
          `,
          example:
            "A smartphone connects to an access point using a Wi-Fi network name called an SSID."
        },

        {
          id: "nb-w5-l2",
          title: "Bluetooth and Bluetooth Low Energy",
          content: `
Bluetooth is a short-range wireless communication technology.

Bluetooth Low Energy (BLE) is designed for devices that need low power
consumption.

BLE is useful for:
- Sensors
- Wearable devices
- Small IoT devices
- Health and fitness devices
          `,
          example:
            "A small temperature sensor can use BLE to send readings to a nearby phone."
        },

        {
          id: "nb-w5-l3",
          title: "MQTT",
          content: `
MQTT is a lightweight messaging protocol commonly used in IoT systems.

MQTT uses a publish/subscribe model.

Main components:
- Publisher
- Subscriber
- Broker
- Topic

A device publishes data to a topic and other devices can subscribe to it.
          `,
          example:
            "A temperature sensor can publish readings to the topic home/temperature."
        },

        {
          id: "nb-w5-l4",
          title: "IoT Device-to-Cloud Communication",
          content: `
IoT devices can collect sensor information and send it to cloud services.

Typical flow:

Sensor
  ↓
Microcontroller
  ↓
Network
  ↓
Cloud service
  ↓
Application

The network connection can use Wi-Fi, Ethernet, cellular or other suitable
technologies.
          `,
          example:
            "A smart temperature monitor can send sensor readings through Wi-Fi to a cloud dashboard."
        },

        {
          id: "nb-w5-l5",
          title: "Choosing a Network for IoT",
          content: `
Different IoT applications need different communication technologies.

Consider:
- Range
- Power consumption
- Data rate
- Cost
- Reliability
- Security
- Environment

Wi-Fi can provide high data rates.
BLE can provide low-power short-range communication.
Cellular networks can provide wide-area connectivity.
          `,
          example:
            "A battery-powered wearable may prefer BLE, while a smart home camera may need Wi-Fi."
        }
      ],

      quiz: [
        {
          question: "What does SSID identify?",
          options: [
            "A Wi-Fi network name",
            "A processor",
            "A battery",
            "A file"
          ],
          answer: "A Wi-Fi network name"
        },
        {
          question: "Which technology is designed for low-power short-range communication?",
          options: ["BLE", "Ethernet", "Fiber", "HDMI"],
          answer: "BLE"
        },
        {
          question: "What is MQTT commonly used for?",
          options: [
            "IoT messaging",
            "Video editing",
            "Word processing",
            "Image compression"
          ],
          answer: "IoT messaging"
        },
        {
          question: "What is an MQTT broker?",
          options: [
            "A message intermediary",
            "A power supply",
            "A sensor",
            "A monitor"
          ],
          answer: "A message intermediary"
        },
        {
          question: "What model does MQTT use?",
          options: [
            "Publish/Subscribe",
            "Client-only",
            "Peer-only",
            "File-only"
          ],
          answer: "Publish/Subscribe"
        },
        {
          question: "Which is an IoT sensor example?",
          options: [
            "Temperature sensor",
            "Monitor only",
            "Keyboard",
            "Printer"
          ],
          answer: "Temperature sensor"
        },
        {
          question: "Which technology can provide wide-area wireless connectivity?",
          options: ["Cellular", "USB", "HDMI", "VGA"],
          answer: "Cellular"
        },
        {
          question: "What should be considered when choosing IoT networking?",
          options: [
            "Power and range",
            "Only device color",
            "Only screen size",
            "Only keyboard layout"
          ],
          answer: "Power and range"
        },
        {
          question: "What publishes sensor data in MQTT?",
          options: ["Publisher", "Subscriber", "Monitor", "Switch"],
          answer: "Publisher"
        },
        {
          question: "What receives MQTT messages by subscribing to a topic?",
          options: ["Subscriber", "Router", "Cable", "Keyboard"],
          answer: "Subscriber"
        }
      ],

      assignment:
        "Design a simple IoT system containing a sensor, microcontroller, network connection, cloud service and user application."
    },

    {
      week: 6,
      title: "Network Troubleshooting",

      lessons: [
        {
          id: "nb-w6-l1",
          title: "Network Troubleshooting Process",
          content: `
Network troubleshooting should be systematic.

A simple process is:

1. Identify the problem.
2. Check physical connections.
3. Check network configuration.
4. Test connectivity.
5. Identify the cause.
6. Apply a suitable fix.
7. Test again.

Avoid changing many settings at once because it makes the actual cause
harder to identify.
          `,
          example:
            "If a computer cannot access the Internet, first check whether it is connected to Wi-Fi or Ethernet."
        },

        {
          id: "nb-w6-l2",
          title: "ipconfig and ifconfig",
          content: `
Operating systems provide commands for viewing network configuration.

Windows commonly provides:
ipconfig

Linux commonly provides:
ip addr

These can show information such as:
- IP address
- Network interface
- Gateway information
- Interface state
          `,
          example:
            "Running ipconfig on Windows can help determine whether a computer received an IPv4 address."
        },

        {
          id: "nb-w6-l3",
          title: "Ping",
          content: `
The ping command can test whether a destination responds to network
requests.

It can help identify:
- Basic reachability
- Packet loss
- Approximate response time

Ping is a diagnostic tool, not a guarantee that every network service is
working.
          `,
          example:
            "If a device responds to ping but a website does not open, the problem may be related to a specific service or DNS."
        },

        {
          id: "nb-w6-l4",
          title: "Traceroute",
          content: `
Traceroute shows the network path toward a destination.

Windows commonly uses:
tracert

Linux commonly uses:
traceroute

It can help identify where delays or routing problems may occur.
          `,
          example:
            "tracert example.com can show intermediate network hops toward a destination."
        },

        {
          id: "nb-w6-l5",
          title: "DNS Troubleshooting",
          content: `
If websites cannot be opened by name but network connectivity otherwise
works, DNS may be involved.

The nslookup command can help query DNS information.

A useful troubleshooting sequence is:
- Check network connection
- Check IP configuration
- Test an IP address
- Test DNS resolution
- Check the application
          `,
          example:
            "If a domain name cannot be resolved but a known IP address responds, investigate DNS configuration."
        }
      ],

      quiz: [
        {
          question: "What should be checked first during basic troubleshooting?",
          options: [
            "Physical/network connection",
            "Replace the computer",
            "Delete all files",
            "Install random software"
          ],
          answer: "Physical/network connection"
        },
        {
          question: "Which Windows command displays IP configuration?",
          options: ["ipconfig", "ping", "tracert", "nslookup"],
          answer: "ipconfig"
        },
        {
          question: "Which command tests basic network reachability?",
          options: ["ping", "ipconfig", "dir", "cd"],
          answer: "ping"
        },
        {
          question: "Which command shows a network path?",
          options: ["tracert", "ipconfig", "ping", "mkdir"],
          answer: "tracert"
        },
        {
          question: "Which command can query DNS information?",
          options: ["nslookup", "ping", "cd", "copy"],
          answer: "nslookup"
        },
        {
          question: "What does packet loss indicate?",
          options: [
            "Some packets did not reach their destination",
            "More storage",
            "More RAM",
            "A larger screen"
          ],
          answer: "Some packets did not reach their destination"
        },
        {
          question: "What is a systematic troubleshooting process useful for?",
          options: [
            "Finding the actual cause",
            "Changing random settings",
            "Deleting data",
            "Formatting every device"
          ],
          answer: "Finding the actual cause"
        },
        {
          question: "Which command is commonly used on Linux to view addresses?",
          options: ["ip addr", "ipconfig", "tracert", "nslookup"],
          answer: "ip addr"
        },
        {
          question: "What does DNS troubleshooting investigate?",
          options: [
            "Name resolution",
            "Screen brightness",
            "Keyboard layout",
            "Battery level"
          ],
          answer: "Name resolution"
        },
        {
          question: "Does ping guarantee that every application service is working?",
          options: ["No", "Yes", "Always", "Only on Wi-Fi"],
          answer: "No"
        }
      ],

      assignment:
        "Create a troubleshooting checklist for a computer that is connected to Wi-Fi but cannot access websites."
    },

    {
      week: 7,
      title: "Network Security Basics",

      lessons: [
        {
          id: "nb-w7-l1",
          title: "Why Network Security Matters",
          content: `
Network security protects systems, devices and data from unauthorized
access and disruption.

Important goals include:
- Confidentiality
- Integrity
- Availability

Every connected device should be considered part of the security environment.
          `,
          example:
            "A company can use access controls and network security policies to protect internal systems."
        },

        {
          id: "nb-w7-l2",
          title: "Firewalls",
          content: `
A firewall controls network traffic according to defined rules.

Firewalls can help:
- Allow approved traffic
- Block unwanted traffic
- Restrict access
- Monitor network connections

Firewalls can exist on computers, routers and dedicated security devices.
          `,
          example:
            "A firewall can block unwanted inbound network connections while allowing required services."
        },

        {
          id: "nb-w7-l3",
          title: "Secure Wi-Fi",
          content: `
Good Wi-Fi security practices include:
- Use strong authentication
- Use modern security standards
- Change default administrative credentials
- Keep router firmware updated
- Avoid sharing passwords unnecessarily

Security settings should be configured according to the capabilities of
the network equipment.
          `,
          example:
            "A home Wi-Fi network should use a strong password and current security settings."
        },

        {
          id: "nb-w7-l4",
          title: "Network Segmentation",
          content: `
Network segmentation separates devices or systems into different logical
network areas.

Benefits can include:
- Reduced unnecessary communication
- Easier management
- Better isolation
- Improved security

IoT devices can sometimes be placed on a separate network from important
personal or business systems.
          `,
          example:
            "A smart-home network can separate IoT devices from computers containing important files."
        },

        {
          id: "nb-w7-l5",
          title: "Secure Network Practices",
          content: `
Basic defensive practices include:
- Keep software updated
- Use strong unique passwords
- Enable appropriate authentication
- Protect network devices
- Monitor unusual activity
- Back up important data
- Avoid unnecessary open services

Security is a continuous process rather than a one-time configuration.
          `,
          example:
            "Regularly updating a router and its connected devices can reduce exposure to known security problems."
        }
      ],

      quiz: [
        {
          question: "What is the main purpose of network security?",
          options: [
            "Protect systems and data",
            "Increase screen size",
            "Improve keyboard layout",
            "Create images"
          ],
          answer: "Protect systems and data"
        },
        {
          question: "What does a firewall control?",
          options: [
            "Network traffic",
            "Screen brightness",
            "Keyboard input",
            "CPU temperature only"
          ],
          answer: "Network traffic"
        },
        {
          question: "Which is a good Wi-Fi security practice?",
          options: [
            "Use strong authentication",
            "Keep default passwords forever",
            "Share passwords publicly",
            "Disable all security"
          ],
          answer: "Use strong authentication"
        },
        {
          question: "What is network segmentation?",
          options: [
            "Separating network areas",
            "Deleting a network",
            "Increasing screen resolution",
            "Installing games"
          ],
          answer: "Separating network areas"
        },
        {
          question: "Why update network devices?",
          options: [
            "To improve security and reliability",
            "To change the keyboard",
            "To reduce storage",
            "To delete configuration"
          ],
          answer: "To improve security and reliability"
        },
        {
          question: "Which is a security goal?",
          options: [
            "Confidentiality",
            "Brightness",
            "Volume",
            "Screen size"
          ],
          answer: "Confidentiality"
        },
        {
          question: "Should important passwords be shared unnecessarily?",
          options: ["No", "Yes", "Always", "Only publicly"],
          answer: "No"
        },
        {
          question: "Can IoT devices be placed on a separate network?",
          options: ["Yes", "No", "Never", "Only without Wi-Fi"],
          answer: "Yes"
        },
        {
          question: "What is one benefit of segmentation?",
          options: [
            "Better isolation",
            "Less security",
            "More unauthorized access",
            "No network control"
          ],
          answer: "Better isolation"
        },
        {
          question: "Is network security a one-time task?",
          options: [
            "No, it is continuous",
            "Yes, always",
            "Only once per year",
            "Only during installation"
          ],
          answer: "No, it is continuous"
        }
      ],

      assignment:
        "Create a defensive security checklist for a small home or college network."
    },

    {
      week: 8,
      title: "Practical Network Design",

      lessons: [
        {
          id: "nb-w8-l1",
          title: "Understanding Network Requirements",
          content: `
Before designing a network, identify:

- Number of users
- Number of devices
- Required Internet speed
- Wired or wireless requirements
- Security requirements
- Coverage area
- Expected future growth

Good network design starts with requirements.
          `,
          example:
            "A small office with 20 computers may require switches, a router, Wi-Fi access points and suitable security controls."
        },

        {
          id: "nb-w8-l2",
          title: "Designing a Small Network",
          content: `
A simple network can contain:

Internet
   ↓
Router
   ↓
Switch
   ↓
Computers

A wireless access point can also connect to the network for Wi-Fi devices.
          `,
          example:
            "A small office can connect desktop computers to a switch and wireless devices to an access point."
        },

        {
          id: "nb-w8-l3",
          title: "IP Planning",
          content: `
A network needs an addressing plan.

The plan should consider:
- Network address
- Available host addresses
- Gateway
- DNS
- DHCP
- Future devices

Good planning prevents address conflicts and makes troubleshooting easier.
          `,
          example:
            "A small home network might use a private IPv4 range such as 192.168.1.0/24."
        },

        {
          id: "nb-w8-l4",
          title: "IoT Network Design",
          content: `
An IoT network should consider:

- Sensor type
- Number of devices
- Power requirements
- Communication range
- Data rate
- Security
- Cloud connectivity

A simple IoT architecture can be:

Sensors
   ↓
Microcontroller
   ↓
Wi-Fi / Ethernet
   ↓
Router
   ↓
Cloud
   ↓
Dashboard
          `,
          example:
            "A smart agriculture system can use sensors connected to a microcontroller that sends readings to a cloud dashboard."
        },

        {
          id: "nb-w8-l5",
          title: "Final Review",
          content: `
You have now covered:

- Network fundamentals
- Network devices
- IP and MAC addresses
- DHCP and DNS
- TCP and UDP
- HTTP and HTTPS
- Wi-Fi and Bluetooth
- MQTT and IoT networking
- Troubleshooting
- Network security
- Network design

The next step is to apply these concepts to a practical network project.
          `,
          example:
            "Combine addressing, devices, protocols and security to design a complete small IoT network."
        }
      ],

      quiz: [
        {
          question: "What should be considered before designing a network?",
          options: [
            "Network requirements",
            "Only device color",
            "Only screen size",
            "Only keyboard type"
          ],
          answer: "Network requirements"
        },
        {
          question: "Which device commonly connects a LAN to the Internet?",
          options: ["Router", "Keyboard", "Monitor", "Printer"],
          answer: "Router"
        },
        {
          question: "Why is IP planning important?",
          options: [
            "To avoid address conflicts",
            "To increase monitor size",
            "To create images",
            "To install games"
          ],
          answer: "To avoid address conflicts"
        },
        {
          question: "Which device can connect multiple wired computers?",
          options: ["Switch", "Speaker", "Camera", "Scanner"],
          answer: "Switch"
        },
        {
          question: "What can an IoT network connect?",
          options: [
            "Sensors and applications",
            "Only keyboards",
            "Only monitors",
            "Only printers"
          ],
          answer: "Sensors and applications"
        },
        {
          question: "What should an IoT network consider?",
          options: [
            "Power, range and security",
            "Only screen size",
            "Only keyboard layout",
            "Only color"
          ],
          answer: "Power, range and security"
        },
        {
          question: "What can an access point provide?",
          options: [
            "Wireless connectivity",
            "Database storage",
            "Programming",
            "Electrical generation"
          ],
          answer: "Wireless connectivity"
        },
        {
          question: "What is an important part of network design?",
          options: [
            "Future growth",
            "Ignoring requirements",
            "Removing security",
            "Using random addresses"
          ],
          answer: "Future growth"
        },
        {
          question: "What can a cloud dashboard display?",
          options: [
            "IoT sensor data",
            "Only passwords",
            "Only cables",
            "Only MAC addresses"
          ],
          answer: "IoT sensor data"
        },
        {
          question: "What is the final goal of learning networking?",
          options: [
            "Apply networking concepts to real systems",
            "Memorize device names only",
            "Avoid practical work",
            "Only read theory"
          ],
          answer: "Apply networking concepts to real systems"
        }
      ],

      assignment:
        "Prepare a complete network design for a small office or IoT system, including devices, topology, IP plan, communication protocols, security measures and data flow.",

      project: {
        title: "Small IoT Network Design",
        description:
          "Design a complete network for a small IoT monitoring system.",
        requirements: [
          "Choose at least two sensors.",
          "Choose a suitable microcontroller.",
          "Design the local network.",
          "Select Wi-Fi, Ethernet, BLE or another suitable technology.",
          "Create a simple IP addressing plan.",
          "Show the router, switch or access point where appropriate.",
          "Explain how sensor data reaches the application or cloud.",
          "Include basic defensive security measures.",
          "Create a network topology diagram.",
          "Explain the complete data flow from sensor to user."
        ]
      }
    }
  ]
};
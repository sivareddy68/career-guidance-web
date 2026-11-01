const ipAddressingCourse = {
  title: "IP Addressing",
  description:
    "Learn IPv4 and IPv6 addressing, public and private addresses, subnet masks, CIDR notation, gateways, DNS, DHCP, address allocation, troubleshooting, and practical IP addressing.",

  weeks: [
    {
      title: "Week 1: IP Addressing Foundations",
      description:
        "Understand IP addresses, IPv4 structure, address classes, private and public addressing, and basic network configuration.",
      lessons: [
        {
          title: "What Is an IP Address?",
          content: `
An IP address is a logical address used to identify a device or network interface on an IP network.

IP addresses allow devices to communicate with other devices across local and remote networks.

For example:

192.168.1.10

This is an IPv4 address.

An IP address is different from a MAC address.

A MAC address is associated with a network interface and is primarily used for local network communication.

An IP address is a logical address used by the IP protocol for communication across networks.

Every device communicating through IP normally needs an appropriate IP configuration.

A typical configuration can include:
- IP address.
- Subnet mask or prefix length.
- Default gateway.
- DNS server.

The subnet information determines which destinations are considered local.

The default gateway is normally used when a destination is outside the local network.

DNS is used to resolve names such as example.com into IP addresses.

IP addressing is therefore one of the most important foundations of computer networking.

Understanding IP addresses helps with network configuration, troubleshooting, routing, and network design.
          `,
          quiz: [
            {
              question: "What is an IP address?",
              options: [
                "A logical address used for communication on an IP network",
                "A physical keyboard identifier",
                "A database table name",
                "A programming language",
              ],
              answer:
                "A logical address used for communication on an IP network",
            },
            {
              question: "Which is an IPv4 address?",
              options: [
                "192.168.1.10",
                "00:1A:2B:3C:4D:5E",
                "example.com",
                "HTTP",
              ],
              answer: "192.168.1.10",
            },
            {
              question: "Which configuration identifies the local network portion of an IPv4 address?",
              options: [
                "Subnet mask",
                "MAC address",
                "Port number",
                "DNS record name",
              ],
              answer: "Subnet mask",
            },
            {
              question: "What is normally used to reach destinations outside the local network?",
              options: [
                "Default gateway",
                "MAC address only",
                "Hostname only",
                "Local printer",
              ],
              answer: "Default gateway",
            },
            {
              question: "What is one important purpose of IP addressing?",
              options: [
                "Allowing devices to communicate across networks",
                "Increasing monitor resolution",
                "Creating database tables",
                "Compiling programs",
              ],
              answer:
                "Allowing devices to communicate across networks",
            },
          ],
        },

        {
          title: "IPv4 Address Structure",
          content: `
IPv4 addresses are 32 bits long.

They are normally written as four decimal numbers called octets.

For example:

192.168.10.25

Each octet can contain a value from 0 through 255.

The four octets represent 32 total bits:

8 + 8 + 8 + 8 = 32 bits.

An IPv4 address can be divided into:
- Network portion.
- Host portion.

The subnet mask determines how many bits belong to the network portion.

For example:

192.168.1.25
255.255.255.0

The mask 255.255.255.0 is commonly written as /24.

A /24 prefix means that 24 of the 32 IPv4 bits represent the network portion.

The remaining 8 bits are available for host addressing within that subnet, subject to the addressing rules of the network.

The network address identifies the subnet.

The broadcast address is used in IPv4 to communicate with all hosts on a subnet.

Host addresses are assigned to individual devices.

Understanding the relationship between the IP address and subnet mask is essential for determining whether two devices belong to the same subnet.
          `,
          quiz: [
            {
              question: "How many bits does an IPv4 address contain?",
              options: ["32", "16", "64", "128"],
              answer: "32",
            },
            {
              question: "How many bits are in each IPv4 octet?",
              options: ["8", "4", "16", "32"],
              answer: "8",
            },
            {
              question: "What does a subnet mask determine?",
              options: [
                "The network and host portions of an IPv4 address",
                "The device's MAC address",
                "The application protocol",
                "The DNS server software",
              ],
              answer:
                "The network and host portions of an IPv4 address",
            },
            {
              question: "What does /24 represent in IPv4 CIDR notation?",
              options: [
                "24 network bits",
                "24 host devices exactly",
                "24 total IPv4 addresses",
                "24 octets",
              ],
              answer: "24 network bits",
            },
            {
              question: "What does the IPv4 broadcast address identify?",
              options: [
                "All hosts on the local subnet",
                "Only the router",
                "Only the DNS server",
                "Only the first computer",
              ],
              answer: "All hosts on the local subnet",
            },
          ],
        },

        {
          title: "Public and Private IPv4 Addresses",
          content: `
IPv4 addresses can be broadly discussed as public or private depending on how they are used.

Private IPv4 address ranges are reserved for use inside private networks.

The major private ranges are:

10.0.0.0/8

172.16.0.0/12

192.168.0.0/16

Examples include:

10.0.0.5
172.16.10.20
192.168.1.50

These addresses are commonly used inside homes, offices, schools, and private networks.

Private addresses are not directly routed across the public Internet.

A router using NAT can translate private addresses into a public address for Internet connectivity.

Public IP addresses are used for communication across public networks such as the Internet.

A public address must be appropriately allocated and routed.

The use of private addresses helps conserve the limited IPv4 address space.

It also allows organizations to use the same private ranges internally in separate networks.

However, private addressing alone should not be treated as a complete security mechanism.

Firewalls, access control, authentication, monitoring, and secure configuration are still important.
          `,
          quiz: [
            {
              question: "Which is a private IPv4 range?",
              options: [
                "10.0.0.0/8",
                "8.8.8.0/24",
                "1.1.1.0/24",
                "224.0.0.0/4",
              ],
              answer: "10.0.0.0/8",
            },
            {
              question: "Which address is private?",
              options: [
                "192.168.1.20",
                "8.8.8.8",
                "1.1.1.1",
                "9.9.9.9",
              ],
              answer: "192.168.1.20",
            },
            {
              question: "Where are private IPv4 addresses commonly used?",
              options: [
                "Inside private networks",
                "Only on Internet backbone routers",
                "Only on public websites",
                "Only in DNS root servers",
              ],
              answer: "Inside private networks",
            },
            {
              question: "What can NAT do for private IPv4 devices?",
              options: [
                "Translate private addresses for public network connectivity",
                "Create a new CPU",
                "Replace all DNS records",
                "Remove the need for routing",
              ],
              answer:
                "Translate private addresses for public network connectivity",
            },
            {
              question: "Does using a private IP address by itself provide complete security?",
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
          title: "IP Address Configuration",
          content: `
An IP address can be assigned manually or automatically.

A static configuration means the network settings are explicitly configured.

A dynamically assigned address is commonly provided through DHCP.

A typical IPv4 configuration contains:

IP address:
192.168.1.25

Subnet mask:
255.255.255.0

Default gateway:
192.168.1.1

DNS server:
192.168.1.1

The exact values depend on the network.

Static addresses are often useful for infrastructure that needs predictable addressing.

Examples include:
- Servers.
- Network printers.
- Network devices.
- Certain infrastructure services.

DHCP is commonly used for general client devices.

Dynamic addressing reduces manual configuration and helps organizations manage larger numbers of devices.

Incorrect configuration can cause different problems.

An incorrect IP address may prevent local communication.

An incorrect subnet mask can make a device incorrectly classify destinations as local or remote.

An incorrect gateway can prevent communication with remote networks.

An incorrect DNS configuration can prevent names from resolving even when IP connectivity works.

Learning to inspect each configuration value separately is an important troubleshooting skill.
          `,
          quiz: [
            {
              question: "Which protocol commonly assigns IP configuration automatically?",
              options: [
                "DHCP",
                "DNS",
                "HTTP",
                "ARP",
              ],
              answer: "DHCP",
            },
            {
              question: "Which device might commonly benefit from a predictable static IP?",
              options: [
                "Network printer",
                "Temporary guest phone",
                "Random web browser tab",
                "USB keyboard",
              ],
              answer: "Network printer",
            },
            {
              question: "What can an incorrect subnet mask cause?",
              options: [
                "Incorrect determination of local and remote destinations",
                "A new MAC address",
                "A faster connection",
                "A new DNS domain",
              ],
              answer:
                "Incorrect determination of local and remote destinations",
            },
            {
              question: "What can an incorrect default gateway affect?",
              options: [
                "Communication with remote networks",
                "Keyboard input",
                "Screen resolution",
                "File names",
              ],
              answer: "Communication with remote networks",
            },
            {
              question: "What can an incorrect DNS configuration affect?",
              options: [
                "Name resolution",
                "Ethernet cable length",
                "CPU clock speed",
                "Monitor size",
              ],
              answer: "Name resolution",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Subnets and CIDR",
      description:
        "Learn subnet masks, CIDR notation, network and broadcast addresses, and basic subnet calculations.",
      lessons: [
        {
          title: "Subnet Masks",
          content: `
A subnet mask determines which bits of an IPv4 address identify the network and which identify hosts.

A common subnet mask is:

255.255.255.0

This corresponds to:

/24

The first 24 bits represent the network portion.

The remaining 8 bits represent the host portion.

Another example is:

255.255.255.128

This corresponds to:

/25

A larger prefix length means more bits are used for the network portion and fewer bits remain for hosts.

Some common prefixes are:

/8
/16
/24
/25
/26
/27
/28

The number of possible addresses in a subnet depends on the number of host bits.

For a normal IPv4 subnet, the basic host calculation is:

2^host_bits - 2

The subtraction accounts for the network address and broadcast address in traditional IPv4 subnetting.

For example, a /24 has 8 host bits.

2^8 = 256 total addresses.

256 - 2 = 254 traditionally usable host addresses.

Subnet masks are fundamental to routing because they define network boundaries.
          `,
          quiz: [
            {
              question: "What does 255.255.255.0 represent in CIDR notation?",
              options: ["/24", "/16", "/8", "/32"],
              answer: "/24",
            },
            {
              question: "How many host bits are present in a /24 IPv4 network?",
              options: ["8", "24", "16", "32"],
              answer: "8",
            },
            {
              question: "How many total IPv4 addresses exist in a /24 subnet?",
              options: ["256", "254", "128", "512"],
              answer: "256",
            },
            {
              question: "Traditionally, how many usable host addresses are available in a /24 subnet?",
              options: ["254", "256", "128", "252"],
              answer: "254",
            },
            {
              question: "What does a larger CIDR prefix generally mean?",
              options: [
                "More network bits and fewer host bits",
                "More host bits and fewer network bits",
                "More physical cables",
                "A larger MAC address",
              ],
              answer:
                "More network bits and fewer host bits",
            },
          ],
        },

        {
          title: "CIDR Notation",
          content: `
CIDR stands for Classless Inter-Domain Routing.

CIDR represents an IP address together with a prefix length.

For example:

192.168.1.0/24

The /24 indicates that the first 24 bits are the network prefix.

CIDR replaced the older class-based approach as the primary way of representing IP networks.

Common examples include:

192.168.1.0/24
10.0.0.0/8
172.16.0.0/16
192.168.10.0/26

The prefix length determines the size of the network.

A /24 contains 256 total IPv4 addresses.

A /25 contains 128 total addresses.

A /26 contains 64 total addresses.

A /27 contains 32 total addresses.

A /28 contains 16 total addresses.

Traditional usable host counts are normally two fewer than the total address count.

CIDR allows networks to be divided into smaller subnets and also allows address blocks to be represented efficiently.

CIDR is important in:
- Network design.
- Routing.
- Firewall configuration.
- Cloud networking.
- Security groups.
- IP allocation.
          `,
          quiz: [
            {
              question: "What does CIDR stand for?",
              options: [
                "Classless Inter-Domain Routing",
                "Central Internet Data Routing",
                "Class Internet Device Resolution",
                "Computer Internal Domain Routing",
              ],
              answer: "Classless Inter-Domain Routing",
            },
            {
              question: "What does /26 specify?",
              options: [
                "26 network prefix bits",
                "26 total addresses",
                "26 host bits",
                "26 octets",
              ],
              answer: "26 network prefix bits",
            },
            {
              question: "How many total IPv4 addresses are in a /25 subnet?",
              options: ["128", "64", "256", "32"],
              answer: "128",
            },
            {
              question: "How many total IPv4 addresses are in a /27 subnet?",
              options: ["32", "64", "16", "128"],
              answer: "32",
            },
            {
              question: "Where is CIDR commonly used?",
              options: [
                "Network design and routing",
                "Only word processing",
                "Only image editing",
                "Only database formatting",
              ],
              answer: "Network design and routing",
            },
          ],
        },

        {
          title: "Network and Broadcast Addresses",
          content: `
Every traditional IPv4 subnet has important address types.

The network address identifies the subnet itself.

The broadcast address represents all hosts on that IPv4 subnet.

Host addresses are assigned to devices.

For example, consider:

192.168.1.0/24

The network address is:

192.168.1.0

The broadcast address is:

192.168.1.255

Traditional usable host addresses are:

192.168.1.1 through 192.168.1.254

Now consider:

192.168.1.64/26

A /26 contains 64 total addresses.

The network address is:

192.168.1.64

The broadcast address is:

192.168.1.127

Traditional usable host addresses are:

192.168.1.65 through 192.168.1.126

The next /26 subnet begins at:

192.168.1.128

Understanding these boundaries is essential for subnet calculations.

A device should not normally be assigned the network or broadcast address as an ordinary host address in a traditional IPv4 subnet.

These concepts also help explain why subnet masks are important when determining whether two addresses belong to the same network.
          `,
          quiz: [
            {
              question: "What does the network address identify?",
              options: [
                "The subnet itself",
                "Only one host",
                "A DNS server",
                "A TCP port",
              ],
              answer: "The subnet itself",
            },
            {
              question: "What does the broadcast address represent?",
              options: [
                "All hosts on the IPv4 subnet",
                "Only the gateway",
                "Only the DNS server",
                "Only the first host",
              ],
              answer: "All hosts on the IPv4 subnet",
            },
            {
              question: "What is the broadcast address of 192.168.1.0/24?",
              options: [
                "192.168.1.255",
                "192.168.1.0",
                "192.168.1.1",
                "192.168.2.255",
              ],
              answer: "192.168.1.255",
            },
            {
              question: "What is the network address of 192.168.1.64/26?",
              options: [
                "192.168.1.64",
                "192.168.1.65",
                "192.168.1.127",
                "192.168.1.128",
              ],
              answer: "192.168.1.64",
            },
            {
              question: "Which address range contains traditional usable hosts for 192.168.1.64/26?",
              options: [
                "192.168.1.65–192.168.1.126",
                "192.168.1.64–192.168.1.127",
                "192.168.1.0–192.168.1.63",
                "192.168.1.128–192.168.1.255",
              ],
              answer: "192.168.1.65–192.168.1.126",
            },
          ],
        },

        {
          title: "Subnet Calculation Basics",
          content: `
Subnetting divides a larger IP network into smaller networks.

Subnetting can improve:
- Address organization.
- Network management.
- Security segmentation.
- Routing efficiency.
- Broadcast-domain design.

Suppose a network is:

192.168.1.0/24

If it is divided into /26 subnets, the block size becomes 64 addresses.

The resulting ranges are:

192.168.1.0–63
192.168.1.64–127
192.168.1.128–191
192.168.1.192–255

Each /26 contains:
64 total addresses.

Traditionally:
62 usable host addresses.

The block size can be calculated as:

256 - subnet-mask value in the relevant octet.

For /26:

Subnet mask:
255.255.255.192

Block size:

256 - 192 = 64

This makes it easier to identify subnet boundaries.

Subnet calculations become increasingly useful when designing networks for different departments.

For example:
- Administration.
- Engineering.
- Students.
- Guest devices.

Each group can be placed into an appropriate subnet.

Subnetting is therefore not only a mathematical exercise; it is a practical network design technique.
          `,
          quiz: [
            {
              question: "What is the purpose of subnetting?",
              options: [
                "Divide a larger network into smaller networks",
                "Increase monitor resolution",
                "Replace all routers",
                "Create database tables",
              ],
              answer:
                "Divide a larger network into smaller networks",
            },
            {
              question: "What is the block size for a /26 network?",
              options: ["64", "32", "128", "16"],
              answer: "64",
            },
            {
              question: "What subnet mask corresponds to /26?",
              options: [
                "255.255.255.192",
                "255.255.255.0",
                "255.255.255.128",
                "255.255.0.0",
              ],
              answer: "255.255.255.192",
            },
            {
              question: "How many /26 subnets can be formed from a /24 block?",
              options: ["4", "2", "8", "16"],
              answer: "4",
            },
            {
              question: "What is one practical benefit of subnetting?",
              options: [
                "Better network organization and segmentation",
                "Automatic CPU upgrades",
                "Elimination of all routing",
                "Removal of all IP addresses",
              ],
              answer:
                "Better network organization and segmentation",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: IPv6 and Network Addressing",
      description:
        "Learn IPv6 structure, address types, gateways, DNS, DHCP, and practical address planning.",
      lessons: [
        {
          title: "IPv6 Addressing",
          content: `
IPv6 was developed to provide a much larger address space than IPv4.

IPv6 addresses contain 128 bits.

They are written using hexadecimal numbers separated by colons.

Example:

2001:db8:abcd:0012:0000:0000:0000:0010

IPv6 addresses can be shortened using zero-compression rules.

For example:

2001:db8:abcd:12::10

The double colon represents one sequence of consecutive zero groups.

IPv6 does not use IPv4-style broadcast addresses.

Instead, IPv6 uses multicast and other mechanisms for communication.

IPv6 supports several address types, including:
- Global unicast.
- Link-local.
- Unique local.
- Multicast.

Link-local IPv6 addresses are used for communication on the local link.

IPv6 interfaces commonly have a link-local address even when global addressing is also configured.

IPv6 can use automatic configuration mechanisms such as SLAAC.

DHCPv6 can also be used depending on network requirements.

Understanding IPv6 is increasingly important because modern networks may operate IPv4 and IPv6 together.
          `,
          quiz: [
            {
              question: "How many bits does an IPv6 address contain?",
              options: ["128", "32", "64", "256"],
              answer: "128",
            },
            {
              question: "How are IPv6 addresses normally written?",
              options: [
                "Hexadecimal groups separated by colons",
                "Four decimal octets only",
                "MAC address notation only",
                "Words separated by spaces",
              ],
              answer:
                "Hexadecimal groups separated by colons",
            },
            {
              question: "What does :: represent in a compressed IPv6 address?",
              options: [
                "A sequence of zero groups",
                "A broadcast address",
                "A TCP port",
                "A DNS server",
              ],
              answer: "A sequence of zero groups",
            },
            {
              question: "Which IPv6 address type is used for local-link communication?",
              options: [
                "Link-local",
                "Global unicast only",
                "Broadcast",
                "Public IPv4",
              ],
              answer: "Link-local",
            },
            {
              question: "Which mechanism can automatically configure IPv6 addresses?",
              options: [
                "SLAAC",
                "FTP",
                "HTTP",
                "ARP",
              ],
              answer: "SLAAC",
            },
          ],
        },

        {
          title: "IPv6 Address Types",
          content: `
IPv6 has several important address categories.

Global unicast addresses are generally used for globally routable IPv6 communication.

Link-local addresses are used for communication on the local network link.

They commonly begin with:

fe80::

Unique local addresses are intended for private internal addressing.

They commonly use the prefix:

fc00::/7

Multicast addresses are used to send traffic to multiple interested receivers.

They use the prefix:

ff00::/8

IPv6 does not use broadcast in the same way as IPv4.

Instead, multicast is used for many functions that might require broadcast-like communication.

An IPv6 interface can have multiple addresses at the same time.

For example, a network interface may have:
- Link-local address.
- Global unicast address.
- Additional addresses.

This is different from the simple assumption that one interface always has exactly one IP address.

Understanding address types helps troubleshoot IPv6 communication.

For example, a link-local address can be useful for communication on the same network link but is not intended to serve as a globally routable Internet address.
          `,
          quiz: [
            {
              question: "Which prefix is associated with IPv6 link-local addresses?",
              options: ["fe80::/10", "ff00::/8", "fc00::/7", "2000::/3"],
              answer: "fe80::/10",
            },
            {
              question: "Which IPv6 prefix is associated with multicast?",
              options: ["ff00::/8", "fe80::/10", "fc00::/7", "127.0.0.0/8"],
              answer: "ff00::/8",
            },
            {
              question: "What are unique local IPv6 addresses intended for?",
              options: [
                "Private internal addressing",
                "Only DNS root servers",
                "Only public websites",
                "Only broadcast communication",
              ],
              answer: "Private internal addressing",
            },
            {
              question: "Does IPv6 use broadcast in the same way as IPv4?",
              options: [
                "No",
                "Yes",
                "Only for DNS",
                "Only for Wi-Fi",
              ],
              answer: "No",
            },
            {
              question: "Can one IPv6 interface have multiple addresses?",
              options: [
                "Yes",
                "No",
                "Only when disconnected",
                "Only with IPv4",
              ],
              answer: "Yes",
            },
          ],
        },

        {
          title: "Default Gateway and DNS Configuration",
          content: `
IP addressing is not only about assigning an IP address.

A complete network configuration usually includes a subnet or prefix and information about how to reach other networks.

The default gateway is the local router used when the destination is outside the local subnet.

For example, a device might have:

IP:
192.168.10.25

Mask:
255.255.255.0

Gateway:
192.168.10.1

If the device communicates with another device in the same subnet, it can usually communicate directly at the local network level.

If it needs to communicate with a remote network, the packet is sent toward the default gateway.

DNS provides name resolution.

For example:

www.example.com

may resolve to an IP address.

DNS is separate from the default gateway.

A device can have working IP connectivity but incorrect DNS configuration.

In that case, connections to IP addresses may work while domain names fail to resolve.

This distinction is extremely useful when troubleshooting.

A basic troubleshooting sequence can be:

1. Check local IP configuration.
2. Test the local gateway.
3. Test a remote IP.
4. Test DNS resolution.
5. Test the required application service.
          `,
          quiz: [
            {
              question: "What does the default gateway provide?",
              options: [
                "A path toward destinations outside the local network",
                "A replacement for DNS",
                "A MAC address",
                "A database connection",
              ],
              answer:
                "A path toward destinations outside the local network",
            },
            {
              question: "What does DNS provide?",
              options: [
                "Name resolution",
                "Ethernet switching",
                "CPU scheduling",
                "Disk storage",
              ],
              answer: "Name resolution",
            },
            {
              question: "Can IP connectivity work while DNS is misconfigured?",
              options: [
                "Yes",
                "No",
                "Only with IPv6",
                "Only with Wi-Fi",
              ],
              answer: "Yes",
            },
            {
              question: "What should generally be tested before an application service?",
              options: [
                "Basic network connectivity",
                "Monitor brightness",
                "Keyboard layout",
                "File compression",
              ],
              answer: "Basic network connectivity",
            },
            {
              question: "What is the gateway usually responsible for?",
              options: [
                "Forwarding traffic toward other networks",
                "Storing browser history",
                "Creating passwords",
                "Formatting disks",
              ],
              answer:
                "Forwarding traffic toward other networks",
            },
          ],
        },

        {
          title: "IP Address Planning",
          content: `
IP address planning determines how addresses will be organized across a network.

Good planning avoids conflicts and makes troubleshooting easier.

A plan should consider:
- Number of devices.
- Network departments.
- Growth.
- Servers.
- Printers.
- Wireless clients.
- Guest devices.
- Infrastructure.
- Security requirements.

For example, an organization might use different subnets for:

Administration:
192.168.10.0/24

Engineering:
192.168.20.0/24

Guest:
192.168.30.0/24

Servers:
192.168.40.0/24

The exact addressing scheme can vary.

The important goal is predictable organization.

Larger organizations may use hierarchical addressing.

Address planning should also reserve suitable addresses for infrastructure.

For example:
- Router interfaces.
- Network management.
- Servers.
- Printers.

DHCP pools can be defined for normal client devices.

Static or reserved addresses can be used where predictable addressing is useful.

IPv6 planning also requires consideration of prefixes and network structure.

A good address plan should be documented.

Documentation can include:
- Network name.
- Subnet.
- Gateway.
- DHCP range.
- DNS servers.
- Reserved addresses.
- Purpose.

Good IP planning reduces accidental conflicts and makes future expansion easier.
          `,
          quiz: [
            {
              question: "What is the main purpose of IP address planning?",
              options: [
                "Organize addresses predictably and avoid conflicts",
                "Increase CPU speed",
                "Replace DNS",
                "Remove network devices",
              ],
              answer:
                "Organize addresses predictably and avoid conflicts",
            },
            {
              question: "Which device may need a predictable IP address?",
              options: [
                "Network printer",
                "Temporary guest device",
                "Random web browser",
                "Keyboard",
              ],
              answer: "Network printer",
            },
            {
              question: "Why separate guest devices into their own subnet?",
              options: [
                "It can improve network organization and isolation",
                "It makes every device public",
                "It removes the need for security",
                "It disables routing",
              ],
              answer:
                "It can improve network organization and isolation",
            },
            {
              question: "What should an address plan document?",
              options: [
                "Subnets, gateways, DHCP ranges, and reserved addresses",
                "Only monitor models",
                "Only usernames",
                "Only application logos",
              ],
              answer:
                "Subnets, gateways, DHCP ranges, and reserved addresses",
            },
            {
              question: "Why is documentation useful?",
              options: [
                "It makes network management and troubleshooting easier",
                "It automatically fixes every network problem",
                "It eliminates IP addresses",
                "It removes the need for routers",
              ],
              answer:
                "It makes network management and troubleshooting easier",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Troubleshooting and Practical IP Addressing",
      description:
        "Apply IP addressing knowledge to troubleshooting, configuration, subnet planning, and a practical network project.",
      lessons: [
        {
          title: "IP Address Conflicts",
          content: `
An IP address conflict occurs when two devices are incorrectly configured with the same address on a network where the address must be unique.

Address conflicts can cause unpredictable communication.

Symptoms may include:
- Intermittent connectivity.
- Devices becoming unreachable.
- Duplicate-address warnings.
- Network communication changing depending on which device is active.

Conflicts can occur because of:
- Manual configuration mistakes.
- Incorrect DHCP configuration.
- Devices using outdated static addresses.
- Incorrect network cloning or imaging.
- Poor address management.

DHCP helps reduce conflicts by automatically managing address leases.

However, manually configured addresses should be planned carefully.

A troubleshooting process can include:
1. Identify the affected device.
2. Check its IP configuration.
3. Check whether another device is using the same address.
4. Review DHCP leases.
5. Review static address assignments.
6. Correct the configuration.
7. Test communication again.

Keeping a documented address plan is one of the best ways to reduce these problems.

Network administrators should avoid assigning arbitrary static addresses inside a DHCP pool unless the network is designed to handle reservations appropriately.
          `,
          quiz: [
            {
              question: "What is an IP address conflict?",
              options: [
                "Two devices incorrectly using the same IP address",
                "A DNS server having two records",
                "A router having multiple ports",
                "A computer having multiple files",
              ],
              answer:
                "Two devices incorrectly using the same IP address",
            },
            {
              question: "Which can cause an IP conflict?",
              options: [
                "Manual configuration mistakes",
                "Using a monitor",
                "Opening a text file",
                "Changing screen brightness",
              ],
              answer: "Manual configuration mistakes",
            },
            {
              question: "What can DHCP help manage?",
              options: [
                "IP address leases",
                "CPU instructions",
                "Monitor settings",
                "Database indexes",
              ],
              answer: "IP address leases",
            },
            {
              question: "What should be checked during conflict troubleshooting?",
              options: [
                "DHCP leases and static assignments",
                "Only keyboard settings",
                "Only monitor resolution",
                "Only application colors",
              ],
              answer: "DHCP leases and static assignments",
            },
            {
              question: "Why is an address plan useful?",
              options: [
                "It reduces accidental address conflicts",
                "It removes the need for IP addresses",
                "It replaces all switches",
                "It guarantees unlimited bandwidth",
              ],
              answer: "It reduces accidental address conflicts",
            },
          ],
        },

        {
          title: "IP Troubleshooting Commands",
          content: `
IP troubleshooting uses operating-system tools to inspect configuration and connectivity.

On Windows, ipconfig can display IPv4 and IPv6 configuration.

Useful options include checking:
- IP address.
- Subnet mask.
- Default gateway.
- DNS servers.

The ping command can test basic reachability.

For example, testing the local gateway can help determine whether the device can communicate with its local router.

Testing a known remote IP can help determine whether traffic can reach a remote network.

Testing a domain name can also involve DNS resolution.

tracert can help identify the path toward a destination.

On Linux, the ip command is commonly used to inspect interfaces and addresses.

The route information can also be inspected using appropriate Linux networking commands.

DNS can be tested with tools such as dig or nslookup.

Remember that each tool tests a different part of the network.

A successful ping does not prove that every application is working.

A successful DNS lookup does not prove that a web server is healthy.

The best approach is to combine multiple tests and compare their results with expected behavior.
          `,
          quiz: [
            {
              question: "Which Windows command displays IP configuration?",
              options: [
                "ipconfig",
                "tracert",
                "nslookup",
                "ping",
              ],
              answer: "ipconfig",
            },
            {
              question: "What can ping help test?",
              options: [
                "Basic network reachability",
                "Database schema",
                "CPU speed",
                "File permissions",
              ],
              answer: "Basic network reachability",
            },
            {
              question: "What can tracert help identify?",
              options: [
                "The network path toward a destination",
                "The user's password",
                "The monitor resolution",
                "The database engine",
              ],
              answer:
                "The network path toward a destination",
            },
            {
              question: "Which tools can test DNS resolution?",
              options: [
                "dig or nslookup",
                "ipconfig only",
                "ping only",
                "task manager",
              ],
              answer: "dig or nslookup",
            },
            {
              question: "Why should multiple network tests be used?",
              options: [
                "Different tools test different parts of connectivity",
                "One command always provides every answer",
                "It prevents all network failures",
                "It replaces network documentation",
              ],
              answer:
                "Different tools test different parts of connectivity",
            },
          ],
        },

        {
          title: "IP Addressing Security and Best Practices",
          content: `
IP addressing is also related to network security.

Good address management helps administrators understand which devices should exist on a network.

Important practices include:
- Maintain an address inventory.
- Avoid duplicate addresses.
- Separate important systems into appropriate networks.
- Restrict unnecessary communication.
- Use firewalls.
- Monitor unexpected devices.
- Protect network management interfaces.
- Keep network documentation updated.

Network segmentation can separate systems according to their purpose.

For example, servers can be placed in a different subnet from guest devices.

This does not automatically secure the environment, but it can make access control and monitoring easier.

Public and private addressing should also be understood correctly.

A private address does not automatically mean that a device is secure.

Likewise, a public address does not automatically mean that every service is exposed.

Exposure depends on routing, firewall rules, listening services, and other configuration.

Network administrators should use the principle of least privilege.

Only required communication should be permitted where practical.

IP addressing information should also be protected as part of network documentation because it can reveal information about network structure.

Good IP management combines correct addressing, security controls, monitoring, and documentation.
          `,
          quiz: [
            {
              question: "Why maintain an IP address inventory?",
              options: [
                "To know which devices and addresses are expected",
                "To increase CPU speed",
                "To replace DNS",
                "To remove subnetting",
              ],
              answer:
                "To know which devices and addresses are expected",
            },
            {
              question: "What can network segmentation provide?",
              options: [
                "Separation of systems into different network areas",
                "Automatic encryption of every file",
                "Unlimited bandwidth",
                "Removal of all routing",
              ],
              answer:
                "Separation of systems into different network areas",
            },
            {
              question: "Does a private IP address automatically make a device secure?",
              options: [
                "No",
                "Yes",
                "Only on Ethernet",
                "Only with IPv6",
              ],
              answer: "No",
            },
            {
              question: "What does least privilege mean in network access?",
              options: [
                "Allow only the access that is required",
                "Allow every device to access everything",
                "Disable all firewalls",
                "Give every user administrator access",
              ],
              answer:
                "Allow only the access that is required",
            },
            {
              question: "What should network documentation include?",
              options: [
                "Relevant addressing and network structure information",
                "Only employee birthdays",
                "Only computer wallpapers",
                "Only application colors",
              ],
              answer:
                "Relevant addressing and network structure information",
            },
          ],
        },

        {
          title: "Final Project: Design an IP Addressing Plan",
          content: `
The final project applies IPv4 and IPv6 addressing concepts to a practical network.

Project scenario:

A small organization has:
- Administration.
- Development.
- Support.
- Guest users.
- Servers.

You need to design an organized IP addressing plan.

Step 1: Identify requirements.

Estimate how many devices each department needs now and how much future growth may be required.

Step 2: Choose private IPv4 ranges.

For example:

Administration:
192.168.10.0/24

Development:
192.168.20.0/24

Support:
192.168.30.0/24

Guest:
192.168.40.0/24

Servers:
192.168.50.0/24

These are example choices. A real organization should select addressing based on its existing network and requirements.

Step 3: Identify gateways.

Each subnet needs an appropriate gateway for communication with other networks.

Step 4: Define DHCP ranges.

Reserve suitable addresses for infrastructure and provide DHCP ranges for normal clients.

Step 5: Define static or reserved addresses.

Servers, printers, and network devices may require predictable addressing.

Step 6: Document the plan.

Create a table containing:

- Network name.
- Network address.
- Prefix.
- Gateway.
- DHCP range.
- Reserved addresses.
- Purpose.

Step 7: Add security considerations.

Separate guest systems from internal systems where appropriate.

Use firewall rules to control communication.

Step 8: Test the design.

Check whether the planned addresses are inside the correct subnet.

Check whether the DHCP range overlaps with reserved addresses.

Check whether gateways belong to the appropriate subnet.

Step 9: Consider IPv6.

Identify where IPv6 addressing could be introduced and document the assigned prefix structure.

Step 10: Create a troubleshooting plan.

Document what you would check if:
- A device receives no address.
- Two devices have the same address.
- A local device works but remote communication fails.
- IP connectivity works but DNS fails.

This project demonstrates how IP addressing moves from theory into practical network planning and troubleshooting.
          `,
          quiz: [
            {
              question: "What is the first step in designing an IP addressing plan?",
              options: [
                "Identify network requirements",
                "Delete all existing addresses",
                "Disable DHCP",
                "Remove the router",
              ],
              answer: "Identify network requirements",
            },
            {
              question: "Why should different departments sometimes use separate subnets?",
              options: [
                "For organization, segmentation, and access control",
                "To eliminate IP addresses",
                "To remove routing",
                "To guarantee unlimited bandwidth",
              ],
              answer:
                "For organization, segmentation, and access control",
            },
            {
              question: "What should be kept outside a DHCP pool when appropriate?",
              options: [
                "Reserved static infrastructure addresses",
                "Every client address",
                "Every possible IP address",
                "The network address only",
              ],
              answer:
                "Reserved static infrastructure addresses",
            },
            {
              question: "What should be checked when reviewing a subnet plan?",
              options: [
                "That gateways and DHCP ranges belong to the correct subnet",
                "Only the computer wallpaper",
                "Only CPU temperature",
                "Only monitor size",
              ],
              answer:
                "That gateways and DHCP ranges belong to the correct subnet",
            },
            {
              question: "What does the final project demonstrate?",
              options: [
                "Practical IP planning, configuration, and troubleshooting",
                "Only programming syntax",
                "Only database design",
                "Only hardware assembly",
              ],
              answer:
                "Practical IP planning, configuration, and troubleshooting",
            },
          ],
        },
      ],
    },
  ],
};

export default ipAddressingCourse;
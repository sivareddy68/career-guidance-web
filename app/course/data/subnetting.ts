const subnettingCourse = {
  title: "Subnetting",
  description:
    "Learn IPv4 subnetting, binary conversion, subnet masks, CIDR, network and broadcast addresses, host calculations, VLSM, subnet planning, and practical network troubleshooting.",

  weeks: [
    {
      title: "Week 1: Subnetting Foundations",
      description:
        "Understand subnetting, binary numbers, IPv4 structure, and subnet masks.",
      lessons: [
        {
          title: "Introduction to Subnetting",
          content: `
Subnetting is the process of dividing a larger IP network into smaller logical networks called subnets.

It is used to organize devices, manage IP addresses, and separate network traffic.

For example, an organization may have one large network containing computers from different departments. Instead of placing every device in the same subnet, administrators can create separate subnets for administration, development, servers, and guest devices.

Important benefits include:

- Better network organization.
- More efficient address management.
- Easier troubleshooting.
- Improved network segmentation.
- Better control of communication.
- Reduced broadcast traffic within individual subnets.

An IPv4 address contains 32 bits. A subnet mask identifies which bits represent the network and which bits represent hosts.

For example:

192.168.1.0/24

The /24 indicates that 24 bits are used for the network prefix and 8 bits remain for host addressing.

If this /24 network is divided into /26 subnets, four smaller subnets are created.

Each /26 contains 64 total IPv4 addresses. In a traditional IPv4 subnet, 62 are normally usable for hosts.

Subnetting is important in enterprise networks, cloud infrastructure, office networks, and data centers.
          `,
          quiz: [
            {
              question: "What is subnetting?",
              options: [
                "Dividing a larger network into smaller networks",
                "Combining all computers into one server",
                "Converting IP addresses into MAC addresses",
                "Replacing network devices",
              ],
              answer:
                "Dividing a larger network into smaller networks",
            },
            {
              question: "What is a subnet?",
              options: [
                "A smaller logical network within a larger network",
                "A type of processor",
                "A database table",
                "A wireless password",
              ],
              answer:
                "A smaller logical network within a larger network",
            },
            {
              question: "How many bits are in an IPv4 address?",
              options: ["32", "16", "64", "128"],
              answer: "32",
            },
            {
              question: "What does /24 represent?",
              options: [
                "24 network prefix bits",
                "24 total IP addresses",
                "24 host bits",
                "24 network devices",
              ],
              answer: "24 network prefix bits",
            },
            {
              question: "Which is a benefit of subnetting?",
              options: [
                "Better network organization",
                "Elimination of IP addressing",
                "Removal of all routers",
                "Automatic CPU upgrades",
              ],
              answer: "Better network organization",
            },
          ],
        },

        {
          title: "Binary Number System for Subnetting",
          content: `
Subnetting becomes easier when you understand binary numbers.

Computers represent information using binary digits called bits.

A bit can have one of two values:

0 or 1.

An IPv4 address contains 32 bits divided into four groups of 8 bits.

Each 8-bit group is called an octet.

The decimal values represented by the eight bit positions are:

128, 64, 32, 16, 8, 4, 2, 1.

For example:

Binary:
11000000

Decimal:
128 + 64 = 192.

Therefore, the binary octet 11000000 represents decimal 192.

Another example:

Binary:
11111100

Decimal:
128 + 64 + 32 + 16 + 8 + 4 = 252.

This is useful because subnet masks are based on consecutive network bits followed by host bits.

For example:

255.255.255.192

The last octet 192 is:

11000000

This means two bits in that octet are network bits and six bits are host bits.

Binary conversion helps determine subnet boundaries, block sizes, and valid host ranges.

You do not need to convert every address manually once you understand the patterns, but binary knowledge helps explain why subnetting calculations work.
          `,
          quiz: [
            {
              question: "Which two digits are used in binary?",
              options: [
                "0 and 1",
                "1 and 2",
                "0 and 9",
                "2 and 3",
              ],
              answer: "0 and 1",
            },
            {
              question: "How many bits are in one IPv4 octet?",
              options: ["8", "4", "16", "32"],
              answer: "8",
            },
            {
              question: "What is the decimal value of binary 11000000?",
              options: ["192", "128", "224", "255"],
              answer: "192",
            },
            {
              question: "What is the binary representation of decimal 192 in eight bits?",
              options: [
                "11000000",
                "11110000",
                "10000000",
                "11111100",
              ],
              answer: "11000000",
            },
            {
              question: "Why is binary knowledge useful in subnetting?",
              options: [
                "It explains network and host bits",
                "It replaces IP addresses",
                "It identifies computer brands",
                "It automatically configures routers",
              ],
              answer: "It explains network and host bits",
            },
          ],
        },

        {
          title: "Understanding Subnet Masks",
          content: `
A subnet mask determines which part of an IPv4 address represents the network and which part represents the host.

A common subnet mask is:

255.255.255.0

In binary, it is:

11111111.11111111.11111111.00000000

The first 24 bits are network bits. The last 8 bits are host bits.

This is written as /24.

Another example:

255.255.255.192

In binary:

11111111.11111111.11111111.11000000

This represents /26.

A subnet mask contains consecutive 1 bits followed by 0 bits.

The 1 bits identify the network prefix. The 0 bits identify the host portion.

Common subnet masks include:

/24 = 255.255.255.0

/25 = 255.255.255.128

/26 = 255.255.255.192

/27 = 255.255.255.224

/28 = 255.255.255.240

As the prefix length increases, more bits are used for the network and fewer bits remain for hosts.

This is the basic principle behind dividing networks into smaller subnets.
          `,
          quiz: [
            {
              question: "What does a subnet mask identify?",
              options: [
                "Network and host portions of an IPv4 address",
                "The computer's processor",
                "The application version",
                "The device's screen size",
              ],
              answer:
                "Network and host portions of an IPv4 address",
            },
            {
              question: "Which subnet mask represents /24?",
              options: [
                "255.255.255.0",
                "255.255.255.128",
                "255.255.255.192",
                "255.255.255.224",
              ],
              answer: "255.255.255.0",
            },
            {
              question: "Which subnet mask represents /26?",
              options: [
                "255.255.255.192",
                "255.255.255.0",
                "255.255.255.128",
                "255.255.255.240",
              ],
              answer: "255.255.255.192",
            },
            {
              question: "What does a binary 1 in a subnet mask represent?",
              options: [
                "A network bit",
                "A host bit",
                "A TCP port",
                "A MAC address",
              ],
              answer: "A network bit",
            },
            {
              question: "What happens when the prefix length increases?",
              options: [
                "More bits are used for the network portion",
                "More bits are always available for hosts",
                "The IPv4 address becomes 64 bits",
                "The MAC address changes",
              ],
              answer:
                "More bits are used for the network portion",
            },
          ],
        },

        {
          title: "Network Bits and Host Bits",
          content: `
An IPv4 address contains 32 bits.

Subnetting divides these bits into network bits and host bits.

The prefix length tells us how many bits belong to the network.

For example:

192.168.1.0/24

Network bits = 24.

Host bits = 32 - 24 = 8.

The number of total addresses can be calculated using:

2^host_bits.

For a /24:

2^8 = 256 total addresses.

In a traditional IPv4 subnet, two addresses are normally reserved:

- Network address.
- Broadcast address.

Therefore:

256 - 2 = 254 usable host addresses.

For a /26:

Host bits = 32 - 26 = 6.

Total addresses:

2^6 = 64.

Traditional usable host addresses:

64 - 2 = 62.

For a /28:

Host bits = 32 - 28 = 4.

Total addresses:

2^4 = 16.

Traditional usable host addresses:

16 - 2 = 14.

This calculation is fundamental to subnet planning.

Special-purpose subnets and point-to-point configurations may use different addressing rules, so the traditional subtraction should be applied with the correct context.
          `,
          quiz: [
            {
              question: "How many host bits are in a /24 IPv4 subnet?",
              options: ["8", "24", "16", "32"],
              answer: "8",
            },
            {
              question: "How many total addresses are in a /26 subnet?",
              options: ["64", "32", "128", "256"],
              answer: "64",
            },
            {
              question: "How many traditionally usable host addresses are in a /26 subnet?",
              options: ["62", "64", "60", "32"],
              answer: "62",
            },
            {
              question: "How many total addresses are in a /28 subnet?",
              options: ["16", "32", "64", "8"],
              answer: "16",
            },
            {
              question: "Which two addresses are normally excluded from traditional usable host counts?",
              options: [
                "Network and broadcast addresses",
                "Gateway and DNS addresses",
                "Public and private addresses",
                "Source and destination ports",
              ],
              answer: "Network and broadcast addresses",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Subnet Calculations",
      description:
        "Calculate block sizes, subnet ranges, network addresses, broadcast addresses, and usable host ranges.",
      lessons: [
        {
          title: "Calculating Subnet Block Size",
          content: `
The subnet block size tells you how many addresses are present in each subnet.

For common subnet masks, block size can be calculated using:

256 - subnet mask value in the changing octet.

For example, a /26 subnet has this mask:

255.255.255.192

The changing octet is 192.

Block size:

256 - 192 = 64.

Therefore, the subnet boundaries in the last octet are:

0, 64, 128, 192.

Another example is /27:

Subnet mask:

255.255.255.224

Block size:

256 - 224 = 32.

The subnet boundaries are:

0, 32, 64, 96, 128, 160, 192, 224.

For /28:

Subnet mask:

255.255.255.240

Block size:

256 - 240 = 16.

The boundaries are:

0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240.

Block size makes subnet range calculations much easier.

Always identify the octet where the subnet mask changes from 255 to a partial value.
          `,
          quiz: [
            {
              question: "What is the block size for /26?",
              options: ["64", "32", "128", "16"],
              answer: "64",
            },
            {
              question: "What is the block size for /27?",
              options: ["32", "64", "16", "128"],
              answer: "32",
            },
            {
              question: "What is the subnet mask value in the changing octet for /28?",
              options: ["240", "192", "224", "128"],
              answer: "240",
            },
            {
              question: "How is the block size commonly calculated?",
              options: [
                "256 minus the mask value in the changing octet",
                "32 minus the IP address",
                "128 plus the gateway",
                "The MAC address divided by two",
              ],
              answer:
                "256 minus the mask value in the changing octet",
            },
            {
              question: "Which are the subnet boundaries for /27 in the last octet?",
              options: [
                "0, 32, 64, 96, 128, 160, 192, 224",
                "0, 64, 128, 192",
                "0, 16, 32, 48",
                "0, 128",
              ],
              answer:
                "0, 32, 64, 96, 128, 160, 192, 224",
            },
          ],
        },

        {
          title: "Finding Network and Broadcast Addresses",
          content: `
The network address and broadcast address define the boundaries of an IPv4 subnet.

Consider:

192.168.1.70/26

A /26 has a block size of 64.

The subnet boundaries are:

0, 64, 128, 192.

The address 70 falls between 64 and 127.

Therefore:

Network address:
192.168.1.64

Broadcast address:
192.168.1.127

The traditional usable host range is:

192.168.1.65 through 192.168.1.126.

Another example:

192.168.1.150/26

The address 150 falls between 128 and 191.

Network address:
192.168.1.128

Broadcast address:
192.168.1.191

Usable host range:
192.168.1.129 through 192.168.1.190.

The process is:

1. Find the block size.
2. Identify the subnet range containing the IP address.
3. Use the starting value as the network address.
4. Use the final value before the next subnet as the broadcast address.
5. Identify the usable host range.

This method is especially useful for /25, /26, /27, and /28 calculations.
          `,
          quiz: [
            {
              question: "What is the network address of 192.168.1.70/26?",
              options: [
                "192.168.1.64",
                "192.168.1.0",
                "192.168.1.70",
                "192.168.1.128",
              ],
              answer: "192.168.1.64",
            },
            {
              question: "What is the broadcast address of 192.168.1.70/26?",
              options: [
                "192.168.1.127",
                "192.168.1.64",
                "192.168.1.128",
                "192.168.1.70",
              ],
              answer: "192.168.1.127",
            },
            {
              question: "What is the network address of 192.168.1.150/26?",
              options: [
                "192.168.1.128",
                "192.168.1.64",
                "192.168.1.150",
                "192.168.1.192",
              ],
              answer: "192.168.1.128",
            },
            {
              question: "What is the broadcast address of 192.168.1.150/26?",
              options: [
                "192.168.1.191",
                "192.168.1.128",
                "192.168.1.150",
                "192.168.1.255",
              ],
              answer: "192.168.1.191",
            },
            {
              question: "What is the traditional usable host range for 192.168.1.64/26?",
              options: [
                "192.168.1.65–192.168.1.126",
                "192.168.1.64–192.168.1.127",
                "192.168.1.1–192.168.1.62",
                "192.168.1.128–192.168.1.190",
              ],
              answer: "192.168.1.65–192.168.1.126",
            },
          ],
        },

        {
          title: "Calculating Usable Host Addresses",
          content: `
The number of host addresses depends on the number of host bits.

The basic formula for a traditional IPv4 subnet is:

Total addresses = 2^host_bits.

Usable host addresses = 2^host_bits - 2.

Examples:

/24:
Host bits = 8.
Total = 256.
Usable = 254.

/25:
Host bits = 7.
Total = 128.
Usable = 126.

/26:
Host bits = 6.
Total = 64.
Usable = 62.

/27:
Host bits = 5.
Total = 32.
Usable = 30.

/28:
Host bits = 4.
Total = 16.
Usable = 14.

/29:
Host bits = 3.
Total = 8.
Usable = 6.

A network administrator uses these values to select a subnet large enough for the required devices.

For example, a network needing 25 traditional host addresses could use a /27, which provides 30 usable addresses.

A /28 would provide only 14 and would not be sufficient.

Always consider future growth rather than planning only for the current device count.
          `,
          quiz: [
            {
              question: "How many traditionally usable hosts are in a /25 subnet?",
              options: ["126", "128", "254", "62"],
              answer: "126",
            },
            {
              question: "How many traditionally usable hosts are in a /27 subnet?",
              options: ["30", "32", "62", "14"],
              answer: "30",
            },
            {
              question: "How many traditionally usable hosts are in a /29 subnet?",
              options: ["6", "8", "14", "30"],
              answer: "6",
            },
            {
              question: "Which subnet provides 30 traditionally usable host addresses?",
              options: ["/27", "/28", "/29", "/30"],
              answer: "/27",
            },
            {
              question: "Which factor should be considered when selecting a subnet?",
              options: [
                "Current device count and future growth",
                "Monitor size only",
                "Keyboard type only",
                "Application color scheme",
              ],
              answer: "Current device count and future growth",
            },
          ],
        },

        {
          title: "Determining Whether Two IPs Are in the Same Subnet",
          content: `
Two devices can communicate directly at the local IP network level when their addresses belong to the same subnet.

The subnet mask determines the network portion of each address.

Consider:

Device A:
192.168.1.20/24

Device B:
192.168.1.80/24

Both addresses belong to:

192.168.1.0/24

Therefore, they are in the same subnet.

Now consider:

Device A:
192.168.1.20/25

Device B:
192.168.1.150/25

The first address belongs to:

192.168.1.0/25

The second belongs to:

192.168.1.128/25

They are in different subnets.

When devices are in different subnets, communication normally requires routing.

A practical way to check this is to compare each device's network address after applying the subnet mask.

This is important when diagnosing:
- Incorrect subnet masks.
- Wrong IP assignments.
- Gateway problems.
- Unexpected routing behavior.

Two devices may have similar-looking IP addresses but still belong to different subnets.

Always consider the prefix length along with the address itself.
          `,
          quiz: [
            {
              question: "Are 192.168.1.20/24 and 192.168.1.80/24 in the same subnet?",
              options: [
                "Yes",
                "No",
                "Only if both use Wi-Fi",
                "Only if both use DNS",
              ],
              answer: "Yes",
            },
            {
              question: "Are 192.168.1.20/25 and 192.168.1.150/25 in the same subnet?",
              options: [
                "No",
                "Yes",
                "Only with NAT",
                "Only with DHCP",
              ],
              answer: "No",
            },
            {
              question: "What normally enables communication between different IP subnets?",
              options: [
                "Routing",
                "File compression",
                "Screen sharing",
                "Keyboard input",
              ],
              answer: "Routing",
            },
            {
              question: "Why must the subnet mask be considered?",
              options: [
                "It determines the network portion of an address",
                "It determines the computer brand",
                "It identifies the application name",
                "It replaces the default gateway",
              ],
              answer:
                "It determines the network portion of an address",
            },
            {
              question: "Can similar-looking IP addresses belong to different subnets?",
              options: [
                "Yes",
                "No",
                "Only when using IPv6",
                "Only when using wireless",
              ],
              answer: "Yes",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Advanced Subnetting",
      description:
        "Learn subnet allocation, VLSM, route summarization, and practical subnet design.",
      lessons: [
        {
          title: "Subnetting a Network into Multiple Subnets",
          content: `
A network can be divided into multiple equal-sized subnets by borrowing host bits.

Consider the network:

192.168.1.0/24

If two additional network bits are borrowed, the prefix becomes /26.

The number of resulting subnets is:

2^2 = 4.

The four subnets are:

192.168.1.0/26
192.168.1.64/26
192.168.1.128/26
192.168.1.192/26

Each subnet contains 64 total addresses and 62 traditional usable host addresses.

The original /24 network has 256 total addresses.

The four /26 subnets together still contain 256 total addresses.

Subnetting does not create new IP addresses. It divides an existing address block into smaller blocks.

This is useful when different departments or network segments need separate address ranges.

The number of subnets and the number of hosts per subnet must be considered together.

Borrowing more bits creates more subnets but reduces the number of host addresses available in each subnet.
          `,
          quiz: [
            {
              question: "How many subnets are created by borrowing 2 bits?",
              options: ["4", "2", "8", "16"],
              answer: "4",
            },
            {
              question: "What happens when more host bits are borrowed?",
              options: [
                "More subnets can be created, but each has fewer host bits",
                "The IPv4 address becomes longer",
                "Every subnet gains more host addresses",
                "Routing is no longer required",
              ],
              answer:
                "More subnets can be created, but each has fewer host bits",
            },
            {
              question: "How many /26 subnets fit inside a /24 block?",
              options: ["4", "2", "8", "16"],
              answer: "4",
            },
            {
              question: "What is the third /26 subnet within 192.168.1.0/24?",
              options: [
                "192.168.1.128/26",
                "192.168.1.64/26",
                "192.168.1.0/26",
                "192.168.1.192/26",
              ],
              answer: "192.168.1.128/26",
            },
            {
              question: "Does subnetting create additional IPv4 addresses?",
              options: [
                "No, it divides an existing address block",
                "Yes, it doubles the address space",
                "Yes, it creates unlimited addresses",
                "Only when using DHCP",
              ],
              answer: "No, it divides an existing address block",
            },
          ],
        },

        {
          title: "Variable Length Subnet Masking (VLSM)",
          content: `
VLSM stands for Variable Length Subnet Masking.

It allows different subnets within an address block to use different prefix lengths.

Without VLSM, a network may be divided into equal-sized subnets even when different departments need different numbers of addresses.

For example:

Administration needs 50 hosts.

Development needs 25 hosts.

Support needs 10 hosts.

Using the same large subnet size for all three groups can waste addresses.

VLSM allows an administrator to select different subnet sizes.

A /26 provides 62 traditional usable hosts.

A /27 provides 30 traditional usable hosts.

A /28 provides 14 traditional usable hosts.

One possible allocation from a suitable address block could therefore use:

Administration: /26.

Development: /27.

Support: /28.

When planning VLSM:
1. List the required host counts.
2. Include reasonable growth.
3. Select the smallest suitable subnet for each requirement.
4. Allocate larger subnets first.
5. Check that ranges do not overlap.
6. Document each allocation.

VLSM helps use address space more efficiently.

It is widely useful in enterprise and service-provider network design.
          `,
          quiz: [
            {
              question: "What does VLSM stand for?",
              options: [
                "Variable Length Subnet Masking",
                "Virtual Local Server Management",
                "Variable Link System Mapping",
                "Verified LAN Security Method",
              ],
              answer: "Variable Length Subnet Masking",
            },
            {
              question: "What is the main benefit of VLSM?",
              options: [
                "Using different subnet sizes according to requirements",
                "Making all subnets identical",
                "Removing IP addresses",
                "Replacing routing protocols",
              ],
              answer:
                "Using different subnet sizes according to requirements",
            },
            {
              question: "Which prefix provides 62 traditional usable hosts?",
              options: ["/26", "/27", "/28", "/29"],
              answer: "/26",
            },
            {
              question: "Which prefix provides 14 traditional usable hosts?",
              options: ["/28", "/26", "/25", "/24"],
              answer: "/28",
            },
            {
              question: "Why are larger subnet requirements normally allocated first in VLSM planning?",
              options: [
                "It helps avoid fragmentation of the available address block",
                "It increases the number of IPv4 bits",
                "It removes the need for gateways",
                "It makes all subnet masks equal",
              ],
              answer:
                "It helps avoid fragmentation of the available address block",
            },
          ],
        },

        {
          title: "Subnet Allocation and Address Planning",
          content: `
Subnet allocation assigns address ranges to specific network segments.

A good allocation plan should be organized and documented.

For example, an organization may use:

Administration:
192.168.10.0/24

Development:
192.168.20.0/24

Support:
192.168.30.0/24

Servers:
192.168.40.0/24

Guest:
192.168.50.0/24

In a real design, the prefix sizes should match the number of devices and expected growth.

Each subnet may require:
- Network address.
- Broadcast address for traditional IPv4.
- Gateway address.
- DHCP range.
- Reserved infrastructure addresses.

Avoid overlapping address ranges.

Overlapping subnets can create routing ambiguity and connectivity problems.

Address planning should also consider network segmentation.

For example, guest devices may be separated from internal servers.

A subnet plan should be recorded in a central document so that network administrators can understand the structure.

Cloud networks use similar concepts. Virtual networks and subnets are used to organize cloud resources and control connectivity.

Good subnet allocation supports scalability and makes network management easier.
          `,
          quiz: [
            {
              question: "What does subnet allocation do?",
              options: [
                "Assigns address ranges to network segments",
                "Creates physical Ethernet cables",
                "Changes CPU architecture",
                "Deletes network routes",
              ],
              answer:
                "Assigns address ranges to network segments",
            },
            {
              question: "Why should overlapping subnet ranges be avoided?",
              options: [
                "They can create routing and connectivity problems",
                "They increase monitor resolution",
                "They improve all DNS responses",
                "They eliminate the need for IP addresses",
              ],
              answer:
                "They can create routing and connectivity problems",
            },
            {
              question: "What should a subnet plan include?",
              options: [
                "Network ranges, gateways, and DHCP allocations",
                "Only computer colors",
                "Only user photographs",
                "Only application names",
              ],
              answer:
                "Network ranges, gateways, and DHCP allocations",
            },
            {
              question: "Why separate guest devices from internal servers?",
              options: [
                "To support network isolation and access control",
                "To make guest devices administrators",
                "To remove all firewalls",
                "To avoid using IP addresses",
              ],
              answer:
                "To support network isolation and access control",
            },
            {
              question: "Which environment also uses subnet concepts?",
              options: [
                "Cloud virtual networks",
                "Word processing documents",
                "Image editing software",
                "Standalone calculators",
              ],
              answer: "Cloud virtual networks",
            },
          ],
        },

        {
          title: "Route Summarization",
          content: `
Route summarization combines multiple network routes into a larger summarized route when the address ranges allow it.

It is also called route aggregation.

Instead of advertising many individual routes, a router may advertise one summary route.

For example, four consecutive /24 networks may be summarized as a /22 when they are correctly aligned:

192.168.0.0/24
192.168.1.0/24
192.168.2.0/24
192.168.3.0/24

These can be summarized as:

192.168.0.0/22

The summary covers the address range from:

192.168.0.0 through 192.168.3.255.

Route summarization can:
- Reduce routing table size.
- Reduce routing update information.
- Simplify network management.
- Support hierarchical network design.

However, summarization must be done carefully.

The networks must form a suitable contiguous and aligned block.

Incorrect summarization can include address ranges that do not belong to the intended network.

Summarization is used in larger routed networks and is important for understanding scalable network architecture.
          `,
          quiz: [
            {
              question: "What is route summarization?",
              options: [
                "Combining multiple suitable routes into a larger route",
                "Dividing one network into smaller subnets",
                "Assigning MAC addresses",
                "Encrypting network traffic",
              ],
              answer:
                "Combining multiple suitable routes into a larger route",
            },
            {
              question: "What is another name for route summarization?",
              options: [
                "Route aggregation",
                "Address translation",
                "Name resolution",
                "Packet fragmentation",
              ],
              answer: "Route aggregation",
            },
            {
              question: "Which route summarizes four aligned /24 networks from 192.168.0.0 through 192.168.3.255?",
              options: [
                "192.168.0.0/22",
                "192.168.0.0/24",
                "192.168.1.0/22",
                "192.168.4.0/22",
              ],
              answer: "192.168.0.0/22",
            },
            {
              question: "What is one benefit of route summarization?",
              options: [
                "Reducing routing table size",
                "Increasing the number of MAC addresses",
                "Removing all network devices",
                "Replacing DNS servers",
              ],
              answer: "Reducing routing table size",
            },
            {
              question: "What must be checked before summarizing routes?",
              options: [
                "The networks must form a suitable contiguous and aligned block",
                "The devices must have identical screen sizes",
                "The routers must use the same brand",
                "The network must contain only wireless devices",
              ],
              answer:
                "The networks must form a suitable contiguous and aligned block",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Subnetting and Troubleshooting",
      description:
        "Apply subnetting to network design, configuration checks, and practical troubleshooting.",
      lessons: [
        {
          title: "Subnetting for Office Networks",
          content: `
Subnetting is commonly used to organize office networks.

Consider a company with four departments:

Administration.
Development.
Support.
Guest users.

Each department may need its own subnet.

This helps organize addressing and apply different network access policies.

A subnet design should consider:
- Number of devices.
- Expected growth.
- Required services.
- Security boundaries.
- Routing requirements.
- DHCP configuration.

For example, an office might use a separate subnet for guest devices so that guests do not have unrestricted access to internal systems.

The router or Layer 3 switch can provide routing between permitted subnets.

Firewalls or access control lists can restrict communication.

When designing a subnet, calculate the required number of addresses and select a suitable prefix.

Reserve appropriate addresses for gateways and infrastructure.

Document each subnet and its purpose.

After configuration, test local connectivity, gateway reachability, DNS resolution, and required application services.

Subnetting is most useful when it is combined with sensible network design and security policies.
          `,
          quiz: [
            {
              question: "Why might an office use separate subnets for departments?",
              options: [
                "To organize traffic and apply different access policies",
                "To eliminate routers",
                "To increase monitor brightness",
                "To remove all gateways",
              ],
              answer:
                "To organize traffic and apply different access policies",
            },
            {
              question: "Which devices can provide routing between subnets?",
              options: [
                "Router or Layer 3 switch",
                "Keyboard or mouse",
                "Printer or monitor",
                "USB drive or camera",
              ],
              answer: "Router or Layer 3 switch",
            },
            {
              question: "What should be considered when selecting a subnet prefix?",
              options: [
                "Device count and expected growth",
                "Monitor size",
                "Keyboard layout",
                "Application color",
              ],
              answer: "Device count and expected growth",
            },
            {
              question: "What can control communication between subnets?",
              options: [
                "Firewall rules or access control lists",
                "Screen brightness settings",
                "File extensions",
                "Desktop wallpaper",
              ],
              answer:
                "Firewall rules or access control lists",
            },
            {
              question: "Which tests are useful after configuring a subnet?",
              options: [
                "Gateway, DNS, and application connectivity tests",
                "Only keyboard testing",
                "Only monitor testing",
                "Only file compression testing",
              ],
              answer:
                "Gateway, DNS, and application connectivity tests",
            },
          ],
        },

        {
          title: "Common Subnetting Mistakes",
          content: `
Subnetting errors can cause devices to become unreachable or communicate through unexpected paths.

Common mistakes include:

1. Incorrect prefix length.

A device may be configured with /24 when the network requires /26.

2. Incorrect subnet mask.

A wrong mask can make the device identify local and remote destinations incorrectly.

3. Incorrect network address.

The selected address may not be a valid subnet boundary.

4. Incorrect broadcast address.

The broadcast address must match the subnet range.

5. Overlapping subnets.

Two network segments should not accidentally use overlapping ranges in a design that expects distinct routed subnets.

6. Incorrect gateway.

The configured gateway should be reachable through the local subnet.

7. Insufficient host capacity.

A subnet may not provide enough usable addresses for the required devices.

8. DHCP range errors.

The DHCP pool should belong to the intended subnet and should not conflict with reserved addresses.

A reliable checking process is:

- Verify the prefix.
- Calculate the subnet mask.
- Determine the network address.
- Determine the broadcast address.
- Calculate the host range.
- Verify the gateway.
- Check for overlapping ranges.

Practice and careful documentation help prevent these mistakes.
          `,
          quiz: [
            {
              question: "What can an incorrect prefix length cause?",
              options: [
                "Incorrect subnet interpretation",
                "Automatic hardware upgrades",
                "A new MAC vendor",
                "A faster processor",
              ],
              answer: "Incorrect subnet interpretation",
            },
            {
              question: "What is a subnet overlap?",
              options: [
                "Two subnet ranges share address space unexpectedly",
                "Two computers use different keyboards",
                "Two DNS servers have different names",
                "Two routers have different brands",
              ],
              answer:
                "Two subnet ranges share address space unexpectedly",
            },
            {
              question: "What should be checked about a configured gateway?",
              options: [
                "It should be reachable through the local subnet",
                "It must be a public DNS server",
                "It must use a /32 prefix in every case",
                "It must have the same MAC address as the client",
              ],
              answer:
                "It should be reachable through the local subnet",
            },
            {
              question: "What happens if a subnet has insufficient host capacity?",
              options: [
                "It may not have enough addresses for all required devices",
                "It automatically expands",
                "It creates additional public IPs",
                "It removes the need for DHCP",
              ],
              answer:
                "It may not have enough addresses for all required devices",
            },
            {
              question: "Which is a useful subnetting validation process?",
              options: [
                "Check prefix, mask, range, gateway, and overlaps",
                "Change random addresses until communication works",
                "Disable all routing",
                "Remove the subnet mask",
              ],
              answer:
                "Check prefix, mask, range, gateway, and overlaps",
            },
          ],
        },

        {
          title: "Subnetting Tools and Verification",
          content: `
Subnetting can be checked manually or with network tools.

Manual calculations are useful because they help you understand address boundaries.

Subnet calculators can help verify:
- Network address.
- Broadcast address.
- Subnet mask.
- Host range.
- Number of addresses.
- Number of usable hosts.

A calculator should be treated as a verification aid rather than a replacement for understanding.

Operating-system tools can help inspect configured addresses.

On Windows:

ipconfig

On Linux:

ip addr

Routing information can be inspected using suitable route commands.

Ping can help test basic reachability.

Traceroute or tracert can help investigate the path toward a destination.

When checking a subnet design, verify that:
- Every device uses the correct prefix.
- The gateway is in the expected subnet.
- DHCP ranges are correct.
- Reserved addresses do not overlap with dynamic assignments.
- Different routed networks do not overlap unexpectedly.

Keep a record of the expected values so that test results can be compared with the design.

Tools are most useful when combined with a clear understanding of what each test is intended to verify.
          `,
          quiz: [
            {
              question: "What is the purpose of a subnet calculator?",
              options: [
                "Verify subnet ranges and address calculations",
                "Replace all network routers",
                "Create MAC addresses",
                "Encrypt network packets",
              ],
              answer:
                "Verify subnet ranges and address calculations",
            },
            {
              question: "Which Windows command displays IP configuration?",
              options: [
                "ipconfig",
                "tracert",
                "nslookup",
                "netstat",
              ],
              answer: "ipconfig",
            },
            {
              question: "Which Linux command can display IP addresses on interfaces?",
              options: [
                "ip addr",
                "ipconfig",
                "format",
                "mkdir",
              ],
              answer: "ip addr",
            },
            {
              question: "What does ping help verify?",
              options: [
                "Basic network reachability",
                "Subnet documentation quality",
                "The number of CPU cores",
                "Database table structure",
              ],
              answer: "Basic network reachability",
            },
            {
              question: "Why should subnet calculators be used with subnetting knowledge?",
              options: [
                "Understanding helps verify and interpret the results",
                "Calculators always configure routers automatically",
                "Calculators replace IP addressing",
                "Calculators remove the need for testing",
              ],
              answer:
                "Understanding helps verify and interpret the results",
            },
          ],
        },

        {
          title: "Final Project: Design a Subnetted Network",
          content: `
Project: Design a subnetted network for a small organization.

The organization has:

- Administration: 45 devices.
- Development: 25 devices.
- Support: 12 devices.
- Guest network: 20 devices.

Your task is to create an IP addressing plan using an appropriate private IPv4 address block.

Step 1: Identify host requirements.

Administration needs at least 45 host addresses.

Development needs at least 25.

Support needs at least 12.

Guest needs at least 20.

Step 2: Select subnet sizes.

Using traditional IPv4 host calculations:

A /26 provides 62 usable host addresses.

A /27 provides 30 usable host addresses.

A /28 provides 14 usable host addresses.

A suitable starting plan is:

Administration: /26.

Development: /27.

Support: /28.

Guest: /27.

Step 3: Allocate non-overlapping ranges.

Choose a sufficiently large address block and allocate each subnet on a valid boundary.

Step 4: Identify network and broadcast addresses.

Calculate the network address, broadcast address, and usable host range for each subnet.

Step 5: Assign gateways.

Select an available host address in each subnet for its gateway.

Step 6: Plan DHCP.

Create suitable DHCP ranges for client devices.

Reserve appropriate addresses for infrastructure.

Step 7: Consider network security.

Keep guest devices separate from internal resources.

Use firewall rules or access control lists to control communication between subnets.

Step 8: Verify the plan.

Check:
- Host capacity.
- Prefix lengths.
- Network boundaries.
- Broadcast addresses.
- Gateway addresses.
- Overlapping ranges.

Step 9: Document the design.

Create a table with the department, network address, prefix, mask, gateway, and usable host range.

Step 10: Prepare a troubleshooting plan.

Describe how you would investigate:
- A device with the wrong subnet mask.
- An unreachable gateway.
- An overlapping subnet.
- An incorrect DHCP pool.
- A device with an insufficient address range.

The completed project should demonstrate accurate subnet calculations and a practical network design.
          `,
          quiz: [
            {
              question: "What is the main objective of the final project?",
              options: [
                "Design a network divided into appropriate subnets",
                "Build a database application",
                "Create a mobile game",
                "Install an operating system",
              ],
              answer:
                "Design a network divided into appropriate subnets",
            },
            {
              question: "Which prefix provides at least 45 traditional usable host addresses?",
              options: ["/26", "/27", "/28", "/29"],
              answer: "/26",
            },
            {
              question: "Which prefix provides at least 25 traditional usable host addresses?",
              options: ["/27", "/28", "/29", "/30"],
              answer: "/27",
            },
            {
              question: "What should be checked to avoid subnet conflicts?",
              options: [
                "That allocated subnet ranges do not overlap",
                "That all computers have identical monitors",
                "That every device uses the same IP address",
                "That all devices use public addresses",
              ],
              answer:
                "That allocated subnet ranges do not overlap",
            },
            {
              question: "What should the final project documentation contain?",
              options: [
                "Network ranges, masks, gateways, and host ranges",
                "Only user passwords",
                "Only computer brands",
                "Only application screenshots",
              ],
              answer:
                "Network ranges, masks, gateways, and host ranges",
            },
          ],
        },
      ],
    },
  ],
};

export default subnettingCourse;
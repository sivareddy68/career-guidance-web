
const communicationProtocolsCourse = {
  title: "Communication Protocols",
  description:
    "Learn the basics of UART, SPI, I2C, CAN, and other communication protocols used in embedded systems.",

  weeks: [
    {
      title: "Week 1: Communication Fundamentals",
      description:
        "Understand communication basics and common serial protocols.",
      lessons: [
        {
          title: "1. Introduction to Communication Protocols",
          content: `
Communication protocols define how electronic devices exchange data.

A protocol specifies how data is formatted, transmitted, received, and checked for errors.

Common embedded communication protocols include:
- UART: Simple serial communication.
- SPI: High-speed communication between controllers and peripherals.
- I2C: Communication using two signal lines.
- CAN: Reliable communication in automotive and industrial systems.

Protocols are selected based on speed, wiring, distance, cost, and reliability requirements.
          `,
          quiz: [
            {
              question: "What is the main purpose of a communication protocol?",
              options: [
                "To define rules for exchanging data",
                "To increase battery size",
                "To store source code",
                "To generate clock pulses only",
              ],
              answer: "To define rules for exchanging data",
            },
            {
              question: "Which protocol commonly uses two signal lines?",
              options: ["UART", "I2C", "CAN", "USB"],
              answer: "I2C",
            },
            {
              question: "Which protocol is commonly used in automotive networks?",
              options: ["CAN", "I2C", "UART only", "GPIO"],
              answer: "CAN",
            },
            {
              question: "What should be considered when selecting a protocol?",
              options: [
                "Speed and wiring requirements",
                "Monitor size only",
                "Keyboard layout",
                "File name length",
              ],
              answer: "Speed and wiring requirements",
            },
            {
              question: "Which is a common embedded communication protocol?",
              options: ["SPI", "HTML", "CSS", "JPEG"],
              answer: "SPI",
            },
          ],
        },
        {
          title: "2. Serial and Parallel Communication",
          content: `
Serial communication transfers data one bit at a time over a data path. It generally requires fewer wires and is widely used in embedded systems.

Parallel communication transfers multiple bits simultaneously over separate data lines. It can transfer several bits per clock event but needs more wires.

Serial communication is commonly used between microcontrollers and sensors, while parallel interfaces may be found in displays and memory systems.

The appropriate method depends on speed, distance, cost, and hardware complexity.
          `,
          quiz: [
            {
              question: "How does serial communication transfer data?",
              options: [
                "One bit at a time over a serial data path",
                "All bits over separate data lines simultaneously",
                "Only through analog voltage",
                "Without any signal",
              ],
              answer: "One bit at a time over a serial data path",
            },
            {
              question: "What is a common advantage of serial communication?",
              options: [
                "Fewer signal wires",
                "No need for timing",
                "Unlimited data speed",
                "No electrical connections",
              ],
              answer: "Fewer signal wires",
            },
            {
              question: "How does parallel communication transfer a group of bits?",
              options: [
                "Using multiple data lines",
                "Using one data line for every bit in sequence",
                "Using only a wireless link",
                "Using no data lines",
              ],
              answer: "Using multiple data lines",
            },
            {
              question: "Which communication method usually needs more data wires?",
              options: ["Parallel", "Serial", "UART", "I2C"],
              answer: "Parallel",
            },
            {
              question: "What helps determine whether serial or parallel communication is suitable?",
              options: [
                "Speed and wiring constraints",
                "Programming language name only",
                "File extension",
                "Screen brightness",
              ],
              answer: "Speed and wiring constraints",
            },
          ],
        },
        {
          title: "3. Synchronous and Asynchronous Communication",
          content: `
Synchronous communication uses a shared or transmitted clock to coordinate data transfer. SPI and I2C are common examples.

Asynchronous communication does not use a separate shared clock signal for each transfer. UART commonly uses agreed baud rates and start and stop bits to identify each data frame.

Synchronous communication can provide efficient timing coordination. Asynchronous communication can simplify wiring because a separate clock line is not normally required.

Both methods need compatible configurations at the communicating devices.
          `,
          quiz: [
            {
              question: "What coordinates data timing in synchronous communication?",
              options: [
                "A clock signal",
                "A file extension",
                "A display",
                "A battery indicator",
              ],
              answer: "A clock signal",
            },
            {
              question: "Which protocol commonly uses asynchronous communication?",
              options: ["UART", "I2C", "SPI", "None of these"],
              answer: "UART",
            },
            {
              question: "What does UART use to identify a typical data frame?",
              options: [
                "Start and stop bits",
                "A dedicated clock for every bit",
                "An address line only",
                "A video signal",
              ],
              answer: "Start and stop bits",
            },
            {
              question: "Which protocols commonly use a clock signal?",
              options: ["SPI and I2C", "UART only", "GPIO only", "PWM only"],
              answer: "SPI and I2C",
            },
            {
              question: "What must communicating devices have for UART data to be interpreted correctly?",
              options: [
                "Compatible serial settings",
                "Identical display sizes",
                "The same source-code file",
                "The same power rating",
              ],
              answer: "Compatible serial settings",
            },
          ],
        },
        {
          title: "4. Baud Rate and Data Frames",
          content: `
Baud rate measures the number of signal symbols transmitted per second. In common binary UART systems, baud rate often matches the bit rate.

A UART configuration commonly specifies baud rate, data bits, parity, and stop bits.

For example, 9600 baud is a common setting for simple serial devices. Both endpoints normally need matching settings.

A mismatch can produce unreadable characters or communication errors. The frame format determines how each data unit is transmitted.
          `,
          quiz: [
            {
              question: "What does baud rate measure?",
              options: [
                "Signal symbols transmitted per second",
                "Memory capacity",
                "Battery voltage",
                "Number of connected sensors",
              ],
              answer: "Signal symbols transmitted per second",
            },
            {
              question: "Which setting is part of a typical UART configuration?",
              options: ["Parity", "Screen resolution", "File size", "Pixel density"],
              answer: "Parity",
            },
            {
              question: "What may happen when UART settings do not match?",
              options: [
                "Received data may be corrupted",
                "The clock frequency always doubles",
                "The program automatically changes hardware",
                "All errors disappear",
              ],
              answer: "Received data may be corrupted",
            },
            {
              question: "Which is a common UART baud rate?",
              options: ["9600", "9600 kilograms", "9600 volts", "9600 pixels"],
              answer: "9600",
            },
            {
              question: "What is a UART data frame?",
              options: [
                "A structured unit of transmitted serial data",
                "A microcontroller enclosure",
                "A power supply",
                "A programming language",
              ],
              answer: "A structured unit of transmitted serial data",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: UART, SPI, and I2C",
      description:
        "Learn the working principles and uses of the three common peripheral protocols.",
      lessons: [
        {
          title: "5. UART Communication",
          content: `
UART stands for Universal Asynchronous Receiver/Transmitter. It converts parallel data inside a device into serial data for transmission and converts received serial data back into parallel data.

Basic UART signals are TX (transmit) and RX (receive). A typical connection connects TX on one device to RX on the other and shares a common ground.

UART is often used for debugging, GPS modules, Bluetooth modules, and serial terminals. Basic UART does not normally provide device addressing, so separate links or higher-level arrangements may be needed for multiple devices.
          `,
          quiz: [
            {
              question: "What does UART stand for?",
              options: [
                "Universal Asynchronous Receiver/Transmitter",
                "Universal Analog Routing Technology",
                "Unified Automatic Register Transfer",
                "Universal Address Register Table",
              ],
              answer: "Universal Asynchronous Receiver/Transmitter",
            },
            {
              question: "What does TX mean?",
              options: ["Transmit", "Transfer clock", "Text extension", "Timer execution"],
              answer: "Transmit",
            },
            {
              question: "How are two UART devices commonly connected?",
              options: [
                "TX to RX, RX to TX, with common ground",
                "TX to TX only",
                "RX to RX only",
                "Only through a clock line",
              ],
              answer: "TX to RX, RX to TX, with common ground",
            },
            {
              question: "Which is a common use of UART?",
              options: [
                "Serial debugging",
                "Rendering web pages",
                "Image compression",
                "Database indexing",
              ],
              answer: "Serial debugging",
            },
            {
              question: "Does basic UART normally provide built-in device addressing?",
              options: ["No", "Yes, always", "Only through the TX pin", "Only at 9600 baud"],
              answer: "No",
            },
          ],
        },
        {
          title: "6. SPI Communication",
          content: `
SPI stands for Serial Peripheral Interface. It is a synchronous protocol commonly used for fast, short-distance communication between a controller and peripheral devices.

Typical SPI signals are:
- SCLK: Clock.
- MOSI: Controller-to-peripheral data.
- MISO: Peripheral-to-controller data.
- CS or SS: Chip-select signal.

SPI can transfer data in both directions simultaneously when the hardware supports full-duplex operation. Separate chip-select signals are often used to select peripherals.
          `,
          quiz: [
            {
              question: "What does SPI stand for?",
              options: [
                "Serial Peripheral Interface",
                "Synchronous Program Instruction",
                "System Peripheral Internet",
                "Serial Power Input",
              ],
              answer: "Serial Peripheral Interface",
            },
            {
              question: "Which SPI signal carries the clock?",
              options: ["SCLK", "MISO", "MOSI", "CS"],
              answer: "SCLK",
            },
            {
              question: "What is the purpose of chip select?",
              options: [
                "To select a peripheral",
                "To provide the power supply",
                "To store received data permanently",
                "To set the baud rate of every UART",
              ],
              answer: "To select a peripheral",
            },
            {
              question: "Which SPI signal carries data from controller to peripheral?",
              options: ["MOSI", "MISO", "SCLK", "CS"],
              answer: "MOSI",
            },
            {
              question: "What is one advantage of SPI?",
              options: [
                "It can support high-speed full-duplex transfers",
                "It always uses only two wires",
                "It never needs a clock",
                "It requires no peripheral selection",
              ],
              answer: "It can support high-speed full-duplex transfers",
            },
          ],
        },
        {
          title: "7. I2C Communication",
          content: `
I2C stands for Inter-Integrated Circuit. It is a synchronous serial protocol that uses two main signal lines: SDA for data and SCL for clock.

Multiple devices can share the bus. Devices commonly have addresses, allowing a controller to communicate with a selected device.

I2C lines usually use pull-up resistors because devices pull the lines low when needed. Bus speed, device addresses, wiring capacitance, and pull-up values affect reliable operation.

I2C is widely used for sensors, EEPROMs, and low-speed peripheral devices.
          `,
          quiz: [
            {
              question: "Which two signals are used by I2C?",
              options: [
                "SDA and SCL",
                "TX and RX",
                "MOSI and MISO",
                "CS and MISO",
              ],
              answer: "SDA and SCL",
            },
            {
              question: "Why do I2C devices commonly have addresses?",
              options: [
                "To identify devices on the shared bus",
                "To generate the power supply",
                "To select the baud rate of UART",
                "To replace the data line",
              ],
              answer: "To identify devices on the shared bus",
            },
            {
              question: "What is the role of SCL?",
              options: [
                "It carries the clock",
                "It stores program code",
                "It selects a UART baud rate",
                "It supplies all device power",
              ],
              answer: "It carries the clock",
            },
            {
              question: "Why are pull-up resistors commonly used on I2C lines?",
              options: [
                "To pull the bus lines high when they are released",
                "To convert serial data into video",
                "To permanently force the lines low",
                "To replace device addresses",
              ],
              answer: "To pull the bus lines high when they are released",
            },
            {
              question: "Which device commonly uses I2C?",
              options: ["A digital sensor", "A keyboard layout file", "A CSS stylesheet", "A video codec"],
              answer: "A digital sensor",
            },
          ],
        },
        {
          title: "8. Comparing UART, SPI, and I2C",
          content: `
UART, SPI, and I2C serve different communication needs.

UART commonly uses TX and RX and does not require a shared clock line. It is useful for point-to-point links and debugging.

SPI uses clock, data, and usually chip-select signals. It offers high throughput but often requires more wires.

I2C uses SDA and SCL and supports multiple addressed devices on a shared bus. It can simplify wiring but requires correct addressing and pull-up resistors.

Choose a protocol based on device support, speed, wiring, complexity, and reliability.
          `,
          quiz: [
            {
              question: "Which protocol commonly uses TX and RX?",
              options: ["UART", "SPI", "I2C", "CAN"],
              answer: "UART",
            },
            {
              question: "Which protocol commonly uses SDA and SCL?",
              options: ["I2C", "UART", "SPI", "PWM"],
              answer: "I2C",
            },
            {
              question: "Which protocol commonly uses a chip-select signal for each selected peripheral?",
              options: ["SPI", "UART", "I2C", "ADC"],
              answer: "SPI",
            },
            {
              question: "Which protocol supports addressed devices on a shared two-wire bus?",
              options: ["I2C", "Basic UART", "GPIO", "PWM"],
              answer: "I2C",
            },
            {
              question: "What is a sensible basis for choosing between these protocols?",
              options: [
                "Speed, wiring, and peripheral requirements",
                "The operating system's wallpaper",
                "The source file's name",
                "The color of the development board",
              ],
              answer: "Speed, wiring, and peripheral requirements",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: CAN and Network Communication",
      description:
        "Understand reliable embedded communication and basic network concepts.",
      lessons: [
        {
          title: "9. CAN Protocol Basics",
          content: `
CAN stands for Controller Area Network. It is a message-based communication protocol used in vehicles, industrial equipment, and distributed embedded systems.

CAN nodes communicate using messages identified by identifiers rather than relying on a destination address in every message. Multiple nodes can share the same bus.

CAN includes arbitration and error-detection mechanisms. Classical CAN commonly uses two bus lines, CAN_H and CAN_L, and often uses termination resistors at the two ends of the bus.
          `,
          quiz: [
            {
              question: "What does CAN stand for?",
              options: [
                "Controller Area Network",
                "Central Analog Node",
                "Computer Access Number",
                "Control Address Notation",
              ],
              answer: "Controller Area Network",
            },
            {
              question: "Where is CAN commonly used?",
              options: [
                "Automotive systems",
                "Web page styling",
                "Image editing",
                "Spreadsheet formatting",
              ],
              answer: "Automotive systems",
            },
            {
              question: "How are CAN messages commonly identified?",
              options: [
                "By message identifiers",
                "By screen resolution",
                "By file extensions",
                "By UART TX pin names",
              ],
              answer: "By message identifiers",
            },
            {
              question: "What is the purpose of CAN arbitration?",
              options: [
                "To resolve which message can transmit when nodes compete",
                "To convert DC into AC power",
                "To store firmware in flash",
                "To set the display brightness",
              ],
              answer: "To resolve which message can transmit when nodes compete",
            },
            {
              question: "What is a common CAN bus signal pair?",
              options: [
                "CAN_H and CAN_L",
                "SDA and SCL",
                "TX and RX",
                "MOSI and MISO",
              ],
              answer: "CAN_H and CAN_L",
            },
          ],
        },
        {
          title: "10. CAN Frames and Arbitration",
          content: `
A CAN frame carries information such as an identifier, control information, data, and error-checking fields. The exact format depends on the CAN frame type.

The identifier helps determine message priority during arbitration. In standard CAN arbitration, a lower numerical identifier has higher priority because dominant bits take precedence over recessive bits.

When multiple nodes begin transmitting together, arbitration allows the higher-priority message to continue while other nodes defer. This supports predictable bus access when message priorities and timing are designed properly.
          `,
          quiz: [
            {
              question: "What does a CAN identifier help determine?",
              options: [
                "Message identity and arbitration priority",
                "The battery chemistry",
                "The display color",
                "The source-code language",
              ],
              answer: "Message identity and arbitration priority",
            },
            {
              question: "In standard CAN arbitration, which identifier has higher priority?",
              options: [
                "The lower numerical identifier",
                "The higher numerical identifier",
                "The longer device name",
                "The identifier sent last",
              ],
              answer: "The lower numerical identifier",
            },
            {
              question: "What happens to a node that loses arbitration?",
              options: [
                "It defers and can retry later",
                "It permanently damages the bus",
                "It erases every message",
                "It becomes the clock source",
              ],
              answer: "It defers and can retry later",
            },
            {
              question: "Which field carries application information in a CAN data frame?",
              options: ["Data field", "Termination resistor", "Power pin", "Oscillator casing"],
              answer: "Data field",
            },
            {
              question: "Why is message priority useful in CAN?",
              options: [
                "It helps time-critical messages gain bus access",
                "It guarantees unlimited bandwidth",
                "It eliminates all wiring",
                "It removes the need for error detection",
              ],
              answer: "It helps time-critical messages gain bus access",
            },
          ],
        },
        {
          title: "11. Error Detection and Reliable Communication",
          content: `
Communication errors can occur because of electrical noise, timing problems, wiring faults, or incompatible settings.

Common error-detection techniques include parity bits, checksums, and cyclic redundancy checks (CRC). Different protocols use different mechanisms.

CAN provides CRC checks, acknowledgements, error signaling, and fault-confinement mechanisms. UART may use parity, while higher-level protocols may add checksums.

Reliable designs also require suitable wiring, grounding, timing, and testing.
          `,
          quiz: [
            {
              question: "What is one common cause of communication errors?",
              options: [
                "Electrical noise",
                "A descriptive variable name",
                "A large monitor",
                "A source-code comment",
              ],
              answer: "Electrical noise",
            },
            {
              question: "What does CRC help detect?",
              options: [
                "Errors in transmitted data",
                "The physical size of a device",
                "The programming language",
                "The screen refresh rate",
              ],
              answer: "Errors in transmitted data",
            },
            {
              question: "Which technique may be used in UART for basic error detection?",
              options: ["Parity", "Chip select", "PWM", "DMA address mapping"],
              answer: "Parity",
            },
            {
              question: "What can improve communication reliability?",
              options: [
                "Correct wiring and compatible settings",
                "Random baud-rate changes",
                "Removing required ground connections",
                "Ignoring all error reports",
              ],
              answer: "Correct wiring and compatible settings",
            },
            {
              question: "Which protocol includes error signaling and fault-confinement mechanisms?",
              options: ["CAN", "Basic GPIO", "HTML", "CSS"],
              answer: "CAN",
            },
          ],
        },
        {
          title: "12. Protocol Selection in Embedded Systems",
          content: `
Protocol selection depends on the application.

Use UART for simple serial links, debugging, or modules with serial interfaces. Use SPI when high speed and direct peripheral control are important. Use I2C when several low-to-moderate-speed peripherals need to share two signal lines. Use CAN when robust communication between multiple controllers is needed.

Also consider cable length, noise, throughput, number of devices, hardware support, power consumption, and software complexity.

A practical design should match the protocol to real system requirements instead of choosing one protocol for every device.
          `,
          quiz: [
            {
              question: "Which protocol is often suitable for a simple serial debugging console?",
              options: ["UART", "CAN only", "I2C only", "SPI only"],
              answer: "UART",
            },
            {
              question: "Which protocol is often selected for fast communication with a peripheral?",
              options: ["SPI", "UART only", "GPIO only", "Analog input"],
              answer: "SPI",
            },
            {
              question: "Which protocol allows several addressed peripherals to share two main signal lines?",
              options: ["I2C", "Basic UART", "PWM", "ADC"],
              answer: "I2C",
            },
            {
              question: "Which protocol is commonly selected for communication among vehicle controllers?",
              options: ["CAN", "HTML", "CSS", "JPEG"],
              answer: "CAN",
            },
            {
              question: "What should guide protocol selection?",
              options: [
                "Application requirements and hardware constraints",
                "The programmer's favorite file extension",
                "The monitor's screen size",
                "The folder's name",
              ],
              answer: "Application requirements and hardware constraints",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Communication and Debugging",
      description:
        "Apply protocol concepts, troubleshoot common problems, and combine devices.",
      lessons: [
        {
          title: "13. Connecting Sensors and Modules",
          content: `
Embedded projects often connect sensors, displays, memory chips, and wireless modules to a microcontroller.

Before connecting a device, check its voltage requirements, pinout, protocol, maximum clock or baud rate, and timing requirements.

Use the correct interface pins and ensure compatible electrical levels. Some devices require pull-up resistors, chip-select signals, or additional level-shifting hardware.

Read the device datasheet and verify connections before powering the circuit.
          `,
          quiz: [
            {
              question: "What should be checked before connecting a module?",
              options: [
                "Voltage, pinout, and protocol",
                "Desktop wallpaper",
                "Source file color",
                "Keyboard language",
              ],
              answer: "Voltage, pinout, and protocol",
            },
            {
              question: "Where can hardware timing requirements be found?",
              options: [
                "The device datasheet",
                "A CSS stylesheet",
                "A file icon",
                "The computer's wallpaper",
              ],
              answer: "The device datasheet",
            },
            {
              question: "Why might a circuit need a level shifter?",
              options: [
                "To adapt incompatible logic voltage levels",
                "To rename a source file",
                "To increase flash storage",
                "To remove the communication protocol",
              ],
              answer: "To adapt incompatible logic voltage levels",
            },
            {
              question: "What should be done before powering newly connected hardware?",
              options: [
                "Check the wiring and voltage compatibility",
                "Ignore the pinout",
                "Connect every pin together",
                "Change the source file extension",
              ],
              answer: "Check the wiring and voltage compatibility",
            },
            {
              question: "Which device is commonly connected to a microcontroller through I2C?",
              options: [
                "A digital sensor",
                "A desktop wallpaper",
                "A source-code editor",
                "A text document",
              ],
              answer: "A digital sensor",
            },
          ],
        },
        {
          title: "14. Communication Driver Software",
          content: `
A communication driver provides software functions for sending and receiving data through a hardware interface.

A driver may configure baud rate or clock speed, initialize pins, transmit bytes, receive data, and report errors.

Drivers may use polling, interrupts, or DMA. Polling repeatedly checks device status. Interrupts notify the processor when an event occurs. DMA can move data with less CPU involvement.

A well-designed driver separates hardware-specific operations from application logic and handles timeouts and failures.
          `,
          quiz: [
            {
              question: "What is the role of a communication driver?",
              options: [
                "To provide software access to a hardware interface",
                "To design the physical enclosure",
                "To replace every sensor",
                "To generate web page styles",
              ],
              answer: "To provide software access to a hardware interface",
            },
            {
              question: "What does polling do?",
              options: [
                "Repeatedly checks device status",
                "Permanently disables the processor",
                "Changes a device's physical address",
                "Removes all error conditions",
              ],
              answer: "Repeatedly checks device status",
            },
            {
              question: "How does an interrupt-driven design notify the processor?",
              options: [
                "Through an interrupt event",
                "By changing the file extension",
                "By removing the clock",
                "By rewriting the application",
              ],
              answer: "Through an interrupt event",
            },
            {
              question: "What is a benefit of DMA?",
              options: [
                "It can transfer data with less CPU involvement",
                "It eliminates all hardware requirements",
                "It automatically fixes every wiring fault",
                "It replaces all communication protocols",
              ],
              answer: "It can transfer data with less CPU involvement",
            },
            {
              question: "Why should a driver handle timeouts?",
              options: [
                "To detect operations that take too long",
                "To increase the display resolution",
                "To rename a microcontroller",
                "To disable data reception permanently",
              ],
              answer: "To detect operations that take too long",
            },
          ],
        },
        {
          title: "15. Debugging Communication Problems",
          content: `
Common communication problems include incorrect pin connections, mismatched UART settings, wrong I2C addresses, incorrect SPI modes, missing pull-ups, and unsuitable CAN termination.

A systematic debugging process is useful:
1. Verify power, ground, and wiring.
2. Check the protocol configuration.
3. Inspect signals using a serial terminal, logic analyzer, or oscilloscope.
4. Check error codes and device responses.
5. Test one device at a time.

Changing one variable at a time makes it easier to identify the cause.
          `,
          quiz: [
            {
              question: "What is a useful first step when debugging a communication failure?",
              options: [
                "Check power, ground, and wiring",
                "Rewrite the entire operating system",
                "Ignore hardware connections",
                "Increase every setting randomly",
              ],
              answer: "Check power, ground, and wiring",
            },
            {
              question: "Which tool can inspect digital communication signals?",
              options: [
                "Logic analyzer",
                "Text editor",
                "Image viewer",
                "Spreadsheet",
              ],
              answer: "Logic analyzer",
            },
            {
              question: "What can cause an I2C device not to respond?",
              options: [
                "An incorrect device address",
                "A variable name being too short",
                "A large source file",
                "A display theme",
              ],
              answer: "An incorrect device address",
            },
            {
              question: "What may happen if the SPI mode is configured incorrectly?",
              options: [
                "Data may be sampled at the wrong time",
                "The device always receives perfect data",
                "The power supply becomes unnecessary",
                "The bus becomes wireless",
              ],
              answer: "Data may be sampled at the wrong time",
            },
            {
              question: "Why should one configuration change be tested at a time?",
              options: [
                "To help isolate the cause of the problem",
                "To guarantee the fastest possible clock",
                "To remove the need for testing",
                "To prevent all future hardware failures",
              ],
              answer: "To help isolate the cause of the problem",
            },
          ],
        },
        {
          title: "16. Mini Project: Multi-Protocol Sensor System",
          content: `
Build a small embedded system that collects sensor data and sends it to a controller or computer.

Suggested design:
- Read a sensor through I2C.
- Send diagnostic messages through UART.
- Use SPI to communicate with a supported display or memory device, if available.
- Record communication failures and display useful error messages.

Project steps:
1. Select a microcontroller and compatible peripherals.
2. Read the datasheets and plan the wiring.
3. Initialize each communication interface.
4. Test every peripheral independently.
5. Combine the modules and test normal and failure conditions.

The project demonstrates how different protocols can work together in one embedded application.
          `,
          quiz: [
            {
              question: "Which interface could be used to read a compatible I2C sensor?",
              options: ["I2C", "HTML", "CSS", "JPEG"],
              answer: "I2C",
            },
            {
              question: "Which interface is suitable for sending diagnostic text to a serial terminal?",
              options: ["UART", "SPI chip select only", "ADC", "PWM"],
              answer: "UART",
            },
            {
              question: "What is a useful project development practice?",
              options: [
                "Test each peripheral independently before integration",
                "Connect everything without checking compatibility",
                "Skip all initialization",
                "Ignore error conditions",
              ],
              answer: "Test each peripheral independently before integration",
            },
            {
              question: "Why should communication failures be recorded?",
              options: [
                "To support debugging and fault diagnosis",
                "To increase the number of source files",
                "To replace the sensor",
                "To disable the controller clock",
              ],
              answer: "To support debugging and fault diagnosis",
            },
            {
              question: "What does the mini project demonstrate?",
              options: [
                "Using multiple protocols in one embedded system",
                "Designing only a web page",
                "Replacing all hardware with software",
                "Removing the need for testing",
              ],
              answer: "Using multiple protocols in one embedded system",
            },
          ],
        },
      ],
    },
  ],
};

export default communicationProtocolsCourse;

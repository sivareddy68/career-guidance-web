const microcontrollerBasicsCourse = {
  title: "Microcontroller Basics",
  description:
    "Learn microcontroller architecture, memory, GPIO, timers, interrupts, serial communication, embedded C, sensors, and practical embedded system design.",
  weeks: [
    {
      title: "Week 1: Introduction and Architecture",
      lessons: [
        {
          title: "Introduction to Microcontrollers and Embedded Systems",
          content: `
A microcontroller is a compact integrated circuit designed to control a specific task or function. It combines a processor, memory, and input/output peripherals on a single chip.

Microcontrollers are commonly used in embedded systems. An embedded system is a combination of hardware and software designed to perform a particular function.

Examples include washing machines, digital thermometers, automatic lighting systems, traffic signal controllers, and simple robotics projects.

Main components of a microcontroller:
1. CPU: Executes instructions and controls operations.
2. RAM: Temporarily stores data while a program is running.
3. ROM or Flash: Stores the program permanently.
4. GPIO: Connects external devices such as LEDs and switches.
5. Timers: Measure time and generate delays.
6. Communication interfaces: Exchange data with other devices.

A microcontroller repeatedly reads inputs, processes information according to its program, and controls outputs.

For example, a temperature monitoring system reads a sensor value, compares it with a programmed threshold, and displays the temperature or activates an indicator.

Microcontrollers are useful because they are compact, relatively inexpensive, consume limited power, and can be programmed for specific applications.
          `,
          quiz: [
            {
              question: "What is a microcontroller?",
              options: [
                "A compact chip containing a processor, memory, and peripherals",
                "A device used only for displaying images",
                "A computer network connection",
                "A storage device without processing capability"
              ],
              answer: "A compact chip containing a processor, memory, and peripherals"
            },
            {
              question: "What is an embedded system?",
              options: [
                "A system designed for a specific function",
                "A system used only for gaming",
                "A general-purpose internet connection",
                "A device used only for storing files"
              ],
              answer: "A system designed for a specific function"
            },
            {
              question: "Which component executes program instructions?",
              options: ["CPU", "RAM", "GPIO", "Timer"],
              answer: "CPU"
            },
            {
              question: "Which memory temporarily stores data during program execution?",
              options: ["RAM", "Flash", "ROM", "EEPROM"],
              answer: "RAM"
            },
            {
              question: "Which is a common application of microcontrollers?",
              options: [
                "Automatic washing machine control",
                "Building a large database server",
                "Creating an internet cable",
                "Manufacturing a computer monitor screen"
              ],
              answer: "Automatic washing machine control"
            }
          ]
        },
        {
          title: "Microcontroller vs Microprocessor",
          content: `
A microcontroller and a microprocessor both contain a CPU, but they are designed for different purposes.

A microprocessor generally focuses on processing power. It commonly requires external components such as RAM, storage, and input/output controllers to build a complete computer system.

A microcontroller integrates the CPU, memory, and many peripherals into one chip. This makes it suitable for dedicated control applications.

Important differences:

1. Integration: A microcontroller combines several components on one chip, while a microprocessor commonly uses external supporting components.
2. Application: Microcontrollers are used in embedded control systems. Microprocessors are commonly used in computers and more complex processing systems.
3. Power: Many microcontrollers are designed for low-power operation.
4. Cost and size: Microcontroller-based systems can often be smaller and simpler.
5. Operating systems: Microprocessors frequently run full operating systems, while microcontrollers often run a small program or real-time operating system.

For example, a simple electronic temperature controller may use a microcontroller. A laptop generally uses a microprocessor-based architecture.

The correct choice depends on the application's processing requirements, memory needs, power consumption, cost, and hardware complexity.
          `,
          quiz: [
            {
              question: "What is a major feature of a microcontroller?",
              options: [
                "CPU, memory, and peripherals integrated on one chip",
                "Only a CPU with no other components",
                "A display without a processor",
                "A network cable with memory"
              ],
              answer: "CPU, memory, and peripherals integrated on one chip"
            },
            {
              question: "Which device is commonly used in a laptop's main processing system?",
              options: ["Microprocessor", "LED", "Relay", "Temperature sensor"],
              answer: "Microprocessor"
            },
            {
              question: "Which application is suitable for a microcontroller?",
              options: [
                "Controlling an automatic water-level indicator",
                "Running a large desktop operating system as its main computer",
                "Manufacturing a processor chip",
                "Replacing a network router's internet connection"
              ],
              answer: "Controlling an automatic water-level indicator"
            },
            {
              question: "Why can microcontroller-based systems be compact?",
              options: [
                "Many required components are integrated into one chip",
                "They do not need any program",
                "They work without electricity",
                "They contain no memory"
              ],
              answer: "Many required components are integrated into one chip"
            },
            {
              question: "What should guide the choice between a microcontroller and microprocessor?",
              options: [
                "Application requirements",
                "The device's color",
                "The manufacturer's logo",
                "The length of its product name"
              ],
              answer: "Application requirements"
            }
          ]
        },
        {
          title: "Basic Microcontroller Architecture",
          content: `
Microcontroller architecture describes how the internal components of a microcontroller are organized and communicate.

The CPU is the main processing unit. It fetches instructions from program memory, decodes them, and executes them.

Important CPU components include:

1. ALU: The Arithmetic Logic Unit performs arithmetic operations such as addition and subtraction and logical operations such as AND and OR.
2. Control Unit: Directs the movement of data and coordinates instruction execution.
3. Registers: Small, fast storage locations used by the CPU.
4. Program Counter: Holds the address of the next instruction.
5. Stack Pointer: Keeps track of the current position in the stack.

The internal bus system transfers information between the CPU, memory, and peripherals. Common bus types include the address bus, data bus, and control bus.

A microcontroller may use Harvard architecture, where program memory and data memory have separate paths, or Von Neumann architecture, where instructions and data share memory space.

Understanding architecture helps programmers understand how instructions are executed and how hardware resources are used.
          `,
          quiz: [
            {
              question: "What does the ALU perform?",
              options: [
                "Arithmetic and logical operations",
                "Only memory storage",
                "Wireless communication",
                "Display control only"
              ],
              answer: "Arithmetic and logical operations"
            },
            {
              question: "What is the role of the Control Unit?",
              options: [
                "Coordinates instruction execution",
                "Stores files permanently",
                "Measures external temperature",
                "Generates network addresses"
              ],
              answer: "Coordinates instruction execution"
            },
            {
              question: "What does the Program Counter store?",
              options: [
                "Address of the next instruction",
                "Temperature sensor reading",
                "Number of connected LEDs",
                "Power supply voltage"
              ],
              answer: "Address of the next instruction"
            },
            {
              question: "Which bus carries data between components?",
              options: ["Data bus", "Address bus", "Power cable", "Clock display"],
              answer: "Data bus"
            },
            {
              question: "What is a CPU register?",
              options: [
                "A small, fast storage location inside the processor",
                "An external speaker",
                "A type of network cable",
                "A permanent file folder"
              ],
              answer: "A small, fast storage location inside the processor"
            }
          ]
        },
        {
          title: "Memory Organization and Registers",
          content: `
Memory organization describes how a microcontroller stores program instructions and working data.

Common memory types include:

1. RAM: Stores temporary variables and data. Its contents are generally lost when power is removed.
2. Flash memory: Stores program code and retains it without power.
3. EEPROM: Stores small amounts of data that should remain available after power is removed.
4. Registers: Provide fast access to values used by the CPU and peripherals.

Registers are important because they allow software to control hardware directly. For example, a GPIO direction register may determine whether a pin operates as an input or output.

Memory is divided into locations, each identified by an address. The CPU uses addresses to access the required information.

Some microcontrollers use memory-mapped I/O. In this arrangement, hardware peripheral registers are assigned addresses within the processor's address space.

Programmers must understand memory size and organization because embedded devices often have limited resources.

Efficient memory use helps prevent problems such as insufficient RAM, excessive storage use, and unexpected program failures.
          `,
          quiz: [
            {
              question: "Which memory normally loses its contents when power is removed?",
              options: ["RAM", "Flash", "ROM", "EEPROM"],
              answer: "RAM"
            },
            {
              question: "Where is the program commonly stored in a modern microcontroller?",
              options: ["Flash memory", "Temporary RAM only", "GPIO pin", "Timer register only"],
              answer: "Flash memory"
            },
            {
              question: "What is the purpose of EEPROM?",
              options: [
                "Store data that should remain after power is removed",
                "Perform arithmetic operations",
                "Control the CPU clock only",
                "Replace all input/output pins"
              ],
              answer: "Store data that should remain after power is removed"
            },
            {
              question: "Why are registers important?",
              options: [
                "They provide fast storage for CPU and peripheral operations",
                "They are used only to store photographs",
                "They provide internet access",
                "They replace the power supply"
              ],
              answer: "They provide fast storage for CPU and peripheral operations"
            },
            {
              question: "What identifies a memory location?",
              options: ["Memory address", "Display brightness", "Cable color", "Screen resolution"],
              answer: "Memory address"
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: I/O and Timing",
      lessons: [
        {
          title: "GPIO Ports and Digital I/O",
          content: `
GPIO stands for General Purpose Input/Output. GPIO pins allow a microcontroller to communicate with external electronic components.

A GPIO pin can usually be configured as an input or output.

Input mode allows the microcontroller to read an external digital signal. For example, a switch can provide a HIGH or LOW signal.

Output mode allows the microcontroller to control an external component. For example, a pin can control an LED through a suitable current-limiting resistor.

Digital signals have two logical states:
- HIGH: Represents logical 1.
- LOW: Represents logical 0.

GPIO pins are often grouped into ports. A port may contain several pins controlled through related hardware registers.

Important configuration settings include direction, output state, pull-up or pull-down configuration, and sometimes drive strength.

A floating input is a pin that is not held at a defined logic level. It can produce unpredictable readings. Pull-up and pull-down resistors help establish a stable default state.

Always check the microcontroller's voltage limits and pin current specifications before connecting external components.
          `,
          quiz: [
            {
              question: "What does GPIO stand for?",
              options: [
                "General Purpose Input/Output",
                "General Program Internal Operation",
                "Global Processor Input Option",
                "General Power Interface Output"
              ],
              answer: "General Purpose Input/Output"
            },
            {
              question: "What does a GPIO input pin do?",
              options: [
                "Reads an external signal",
                "Stores the entire program",
                "Generates source code",
                "Replaces the CPU"
              ],
              answer: "Reads an external signal"
            },
            {
              question: "What does a HIGH digital signal normally represent?",
              options: ["Logical 1", "Logical 0", "No program", "Memory failure"],
              answer: "Logical 1"
            },
            {
              question: "Why is a pull-up resistor used?",
              options: [
                "To provide a defined HIGH state",
                "To increase program memory",
                "To change the CPU architecture",
                "To store sensor readings permanently"
              ],
              answer: "To provide a defined HIGH state"
            },
            {
              question: "What should be checked before connecting a component to a GPIO pin?",
              options: [
                "Voltage and current limits",
                "The computer wallpaper",
                "The file name",
                "The internet browser version"
              ],
              answer: "Voltage and current limits"
            }
          ]
        },
        {
          title: "Input Devices, Switches, and LEDs",
          content: `
Microcontrollers interact with the physical world through input and output devices.

Input devices provide information to the microcontroller. Examples include push buttons, switches, temperature sensors, light sensors, and motion sensors.

Output devices receive control signals. Examples include LEDs, buzzers, displays, and small control modules.

A push button can be connected to a digital input pin. When the button is pressed, the input logic level changes depending on the circuit arrangement.

An LED can be controlled using a GPIO output. A suitable current-limiting resistor is required to protect the LED and the microcontroller pin.

Switch bounce is a common issue. Mechanical contacts may rapidly change state for a short time when a button is pressed. This can cause the program to detect several presses instead of one.

Debouncing can be performed using software delays, timing checks, or suitable hardware circuits.

A simple practical application is a push-button-controlled LED. The microcontroller reads the button state and changes the LED output based on the input.
          `,
          quiz: [
            {
              question: "Which is an input device?",
              options: ["Push button", "LED", "Buzzer", "Output display"],
              answer: "Push button"
            },
            {
              question: "Which is an output device?",
              options: ["LED", "Push button", "Temperature input sensor", "Switch"],
              answer: "LED"
            },
            {
              question: "Why is a current-limiting resistor used with an LED?",
              options: [
                "To limit current and protect components",
                "To store program instructions",
                "To increase memory capacity",
                "To generate clock signals"
              ],
              answer: "To limit current and protect components"
            },
            {
              question: "What is switch bounce?",
              options: [
                "Rapid unwanted changes in a mechanical switch signal",
                "A permanent memory error",
                "A processor overheating condition",
                "A type of wireless protocol"
              ],
              answer: "Rapid unwanted changes in a mechanical switch signal"
            },
            {
              question: "What is debouncing used for?",
              options: [
                "To detect a button press reliably",
                "To increase Flash memory",
                "To change the CPU frequency permanently",
                "To remove all input pins"
              ],
              answer: "To detect a button press reliably"
            }
          ]
        },
        {
          title: "Timers and Counters",
          content: `
Timers and counters are hardware peripherals used to measure time and count events.

A timer generally counts clock pulses from an internal clock source. By using the clock frequency and a configured prescaler, the microcontroller can generate delays or periodic events.

A counter can count external events, such as pulses received from a sensor.

Common applications include:
- Generating regular time intervals.
- Measuring how long an event takes.
- Counting objects passing a sensor.
- Producing periodic control signals.
- Measuring signal frequency.

A prescaler divides the incoming clock frequency before it reaches the timer. This allows the timer to count at a slower rate.

A timer may generate an interrupt when it reaches a selected value or overflows.

Hardware timers are usually more reliable for precise timing than software delay loops because the CPU can perform other work while the timer operates.

For example, a digital counter can use a timer to update a display at regular intervals.
          `,
          quiz: [
            {
              question: "What is the main purpose of a timer?",
              options: [
                "Measure time intervals",
                "Store program files",
                "Display images",
                "Connect to the internet"
              ],
              answer: "Measure time intervals"
            },
            {
              question: "What does a counter commonly count?",
              options: [
                "External events or pulses",
                "Program comments",
                "Memory addresses only",
                "Display colors"
              ],
              answer: "External events or pulses"
            },
            {
              question: "What does a prescaler do?",
              options: [
                "Divides the input clock frequency",
                "Increases Flash storage",
                "Removes interrupts",
                "Changes a digital input into a sensor"
              ],
              answer: "Divides the input clock frequency"
            },
            {
              question: "Which application can use a hardware timer?",
              options: [
                "Generating periodic events",
                "Saving a photograph",
                "Editing a text document",
                "Creating a network password"
              ],
              answer: "Generating periodic events"
            },
            {
              question: "Why are hardware timers useful?",
              options: [
                "They can measure time while the CPU performs other work",
                "They eliminate the need for a CPU",
                "They permanently store all variables",
                "They replace every GPIO pin"
              ],
              answer: "They can measure time while the CPU performs other work"
            }
          ]
        },
        {
          title: "Interrupts and Interrupt Handling",
          content: `
An interrupt is a signal that temporarily changes the normal execution flow of a program so that an important event can be handled.

Interrupts are useful when a microcontroller must respond quickly to an event without continuously checking whether that event has occurred.

Examples include a timer overflow, a button press, a received serial byte, or a sensor event.

When an interrupt occurs, the processor typically:
1. Completes the current instruction.
2. Saves important execution information.
3. Transfers control to an Interrupt Service Routine.
4. Executes the interrupt-handling code.
5. Returns to the previous program flow.

An Interrupt Service Routine (ISR) should generally be short and efficient. Long operations inside an ISR can delay other important work.

Interrupts may be classified as hardware or software interrupts. Hardware interrupts are triggered by external or peripheral events, while software interrupts are generated by program instructions or system mechanisms.

Interrupt priority determines which interrupt is handled first when multiple requests occur.

Correct interrupt design improves responsiveness, but careless use can create timing problems and shared-data errors.
          `,
          quiz: [
            {
              question: "What is an interrupt?",
              options: [
                "A signal that requests immediate event handling",
                "A type of permanent storage",
                "A display configuration",
                "A network address"
              ],
              answer: "A signal that requests immediate event handling"
            },
            {
              question: "What does ISR stand for?",
              options: [
                "Interrupt Service Routine",
                "Internal Storage Register",
                "Input Signal Reader",
                "Integrated System Response"
              ],
              answer: "Interrupt Service Routine"
            },
            {
              question: "Why should an ISR generally be short?",
              options: [
                "To reduce delays in handling other tasks",
                "To increase screen resolution",
                "To store more program files",
                "To disable the CPU"
              ],
              answer: "To reduce delays in handling other tasks"
            },
            {
              question: "Which event can trigger a hardware interrupt?",
              options: [
                "A timer overflow",
                "Changing a document font",
                "Opening a web browser",
                "Renaming a computer folder"
              ],
              answer: "A timer overflow"
            },
            {
              question: "What is interrupt priority used for?",
              options: [
                "Deciding which interrupt is handled first",
                "Selecting a memory file name",
                "Controlling display brightness",
                "Changing the programming language"
              ],
              answer: "Deciding which interrupt is handled first"
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: Communication and Programming",
      lessons: [
        {
          title: "Serial Communication: UART",
          content: `
Serial communication transfers data one bit at a time over a communication channel.

UART stands for Universal Asynchronous Receiver/Transmitter. It is a common serial communication interface used by microcontrollers.

UART communication generally uses:
- TX: Transmit data.
- RX: Receive data.
- Ground: Provides a common electrical reference.

UART is asynchronous, meaning it does not normally require a separate clock wire between the communicating devices. Both devices must agree on communication settings such as baud rate, data bits, parity, and stop bits.

Baud rate describes the signaling rate. Common configurations include 9600 and 115200 baud.

UART is often used for communication with computers, GPS modules, Bluetooth modules, and other embedded devices.

A serial monitor can help programmers view messages sent by a microcontroller. This is useful for debugging and checking sensor readings.

Before connecting UART devices, verify their voltage levels and signal compatibility.
          `,
          quiz: [
            {
              question: "What does UART stand for?",
              options: [
                "Universal Asynchronous Receiver/Transmitter",
                "Universal Automatic Routing Terminal",
                "Unified Analog Register Transfer",
                "User Access Response Tool"
              ],
              answer: "Universal Asynchronous Receiver/Transmitter"
            },
            {
              question: "Which UART pin transmits data?",
              options: ["TX", "RX", "GND", "VCC"],
              answer: "TX"
            },
            {
              question: "What does baud rate describe?",
              options: [
                "The signaling rate",
                "The memory capacity",
                "The number of GPIO ports",
                "The processor's physical size"
              ],
              answer: "The signaling rate"
            },
            {
              question: "Why must two UART devices use compatible settings?",
              options: [
                "To interpret transmitted data correctly",
                "To increase Flash memory",
                "To remove the need for power",
                "To change their physical dimensions"
              ],
              answer: "To interpret transmitted data correctly"
            },
            {
              question: "Which tool can display UART messages during development?",
              options: [
                "Serial monitor",
                "Spreadsheet editor",
                "Image viewer",
                "File compressor"
              ],
              answer: "Serial monitor"
            }
          ]
        },
        {
          title: "SPI and I2C Fundamentals",
          content: `
SPI and I2C are serial communication protocols commonly used to connect microcontrollers with peripheral devices.

SPI stands for Serial Peripheral Interface. It commonly uses separate data lines for transmission and reception, a clock signal, and a chip-select signal.

Common SPI signals:
- SCLK: Serial clock.
- MOSI: Master Out, Slave In.
- MISO: Master In, Slave Out.
- CS or SS: Chip Select.

SPI is often used when high-speed communication is needed between a controller and peripherals.

I2C stands for Inter-Integrated Circuit. It generally uses two signal lines:
- SDA: Serial Data.
- SCL: Serial Clock.

I2C supports device addressing, allowing multiple compatible devices to share the same bus.

Important differences:
1. SPI commonly uses more signal lines.
2. I2C uses two main signal lines.
3. I2C uses addresses to identify devices.
4. SPI commonly uses chip-select signals to select peripherals.

The choice depends on speed, wiring, number of devices, available hardware, and system requirements.
          `,
          quiz: [
            {
              question: "What does SPI stand for?",
              options: [
                "Serial Peripheral Interface",
                "System Program Input",
                "Serial Processing Instruction",
                "Standard Peripheral Internet"
              ],
              answer: "Serial Peripheral Interface"
            },
            {
              question: "Which SPI signal carries data from master to peripheral?",
              options: ["MOSI", "MISO", "SCLK", "CS"],
              answer: "MOSI"
            },
            {
              question: "How many main signal lines does I2C use?",
              options: ["Two", "One", "Four", "Six"],
              answer: "Two"
            },
            {
              question: "Which I2C line carries clock signals?",
              options: ["SCL", "SDA", "MOSI", "MISO"],
              answer: "SCL"
            },
            {
              question: "How can I2C identify different devices on the same bus?",
              options: [
                "Using device addresses",
                "Using different power supplies for every bit",
                "Using a separate CPU for each device",
                "Using display resolution"
              ],
              answer: "Using device addresses"
            }
          ]
        },
        {
          title: "Embedded C Programming Basics",
          content: `
Embedded C is the use of the C programming language to develop software for microcontrollers and other embedded devices.

C is widely used in embedded development because it offers efficient execution, direct hardware access, and control over memory.

A typical embedded C program contains:
1. Header files: Provide declarations and hardware definitions.
2. Variable declarations: Store program data.
3. Initialization: Configure pins and peripherals.
4. Main loop: Repeatedly performs the main application tasks.
5. Functions: Organize program operations into reusable sections.

A microcontroller program often runs continuously in a loop. For example, it may read a sensor, process the value, and update an output repeatedly.

Embedded C programs may use special registers and library functions to control GPIO, timers, communication interfaces, and other peripherals.

Good coding practices include using meaningful variable names, keeping functions organized, documenting important logic, and checking data types.

The exact hardware libraries and register names depend on the selected microcontroller and development environment.
          `,
          quiz: [
            {
              question: "What is Embedded C used for?",
              options: [
                "Programming microcontrollers and embedded devices",
                "Designing only web page layouts",
                "Creating database tables only",
                "Editing photographs"
              ],
              answer: "Programming microcontrollers and embedded devices"
            },
            {
              question: "What is the purpose of a header file?",
              options: [
                "Provide declarations and definitions",
                "Supply electrical power",
                "Measure external temperature",
                "Store permanent sensor readings"
              ],
              answer: "Provide declarations and definitions"
            },
            {
              question: "What does a main loop commonly do in an embedded program?",
              options: [
                "Repeatedly performs the main application tasks",
                "Deletes the program after one execution",
                "Changes the processor hardware",
                "Disconnects every peripheral"
              ],
              answer: "Repeatedly performs the main application tasks"
            },
            {
              question: "Why is C commonly used in embedded systems?",
              options: [
                "It provides efficient execution and hardware access",
                "It requires no processor",
                "It works only for website design",
                "It eliminates all memory limitations"
              ],
              answer: "It provides efficient execution and hardware access"
            },
            {
              question: "Which practice improves embedded code readability?",
              options: [
                "Using meaningful variable names",
                "Removing all function names",
                "Writing all code in one long line",
                "Using unexplained numerical values everywhere"
              ],
              answer: "Using meaningful variable names"
            }
          ]
        },
        {
          title: "ADC, PWM, and Sensor Interfacing",
          content: `
Microcontrollers often need to work with analog signals from sensors and control devices using different output levels.

An Analog-to-Digital Converter (ADC) converts an analog voltage into a digital value that the processor can read.

For example, an analog temperature sensor may produce a voltage that changes with temperature. The ADC converts that voltage into a numerical reading.

ADC resolution determines how many digital levels are available. An n-bit ADC provides 2^n possible output codes.

Pulse Width Modulation (PWM) is a technique for controlling the average power delivered to a load by rapidly switching a digital output.

The duty cycle is the percentage of one PWM period during which the signal remains HIGH.

PWM is commonly used for LED brightness control and suitable motor-control applications.

Sensor interfacing requires attention to signal type, voltage range, calibration, noise, and sampling rate.

For reliable operation, the sensor's output range must be compatible with the microcontroller's input specifications.
          `,
          quiz: [
            {
              question: "What does an ADC do?",
              options: [
                "Converts an analog signal into a digital value",
                "Converts a digital value into a network cable",
                "Stores the program permanently",
                "Controls the CPU instruction sequence"
              ],
              answer: "Converts an analog signal into a digital value"
            },
            {
              question: "How many output codes can an n-bit ADC represent?",
              options: ["2^n", "n^2", "2n", "n + 2"],
              answer: "2^n"
            },
            {
              question: "What is PWM commonly used for?",
              options: [
                "Controlling average power through switching",
                "Storing program instructions",
                "Creating memory addresses",
                "Replacing serial communication"
              ],
              answer: "Controlling average power through switching"
            },
            {
              question: "What does PWM duty cycle represent?",
              options: [
                "Percentage of the period the signal is HIGH",
                "Total program memory",
                "Number of processor registers",
                "The sensor's physical size"
              ],
              answer: "Percentage of the period the signal is HIGH"
            },
            {
              question: "What should be checked when connecting an analog sensor?",
              options: [
                "Its output voltage range",
                "Its product packaging color",
                "The computer's screen size",
                "The name of the source-code file"
              ],
              answer: "Its output voltage range"
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: Practical Embedded Systems",
      lessons: [
        {
          title: "Microcontroller Development Boards and Toolchains",
          content: `
A microcontroller development board is a platform that makes it easier to build and test embedded applications.

It usually contains a microcontroller, power connections, programming interface, and accessible input/output pins. Some boards also include LEDs, buttons, USB connections, and communication interfaces.

Examples of popular development platforms include Arduino-compatible boards, ESP32 boards, and STM32 development boards.

A toolchain is a collection of software tools used to develop and run embedded programs.

A typical toolchain includes:
1. Code editor or IDE: Used to write source code.
2. Compiler: Converts source code into machine instructions.
3. Linker: Combines program sections and required libraries.
4. Programmer or debugger: Transfers the program to the board and helps examine execution.
5. Serial monitor: Displays communication messages during testing.

The general development workflow is to write the program, compile it, correct errors, upload it to the board, and test its behavior.

Selecting a board depends on processing requirements, memory, available peripherals, connectivity, development support, and project cost.
          `,
          quiz: [
            {
              question: "What is a development board?",
              options: [
                "A platform used to build and test embedded applications",
                "A device used only for data storage",
                "A network cable connector",
                "A replacement for programming software"
              ],
              answer: "A platform used to build and test embedded applications"
            },
            {
              question: "What does a compiler do?",
              options: [
                "Converts source code into machine instructions",
                "Measures electrical resistance",
                "Supplies power to the board",
                "Displays sensor temperature"
              ],
              answer: "Converts source code into machine instructions"
            },
            {
              question: "What is the purpose of a linker?",
              options: [
                "Combines program sections and required libraries",
                "Reads analog sensor voltage",
                "Controls LED brightness directly",
                "Measures timer frequency"
              ],
              answer: "Combines program sections and required libraries"
            },
            {
              question: "Which tool can display messages sent through UART?",
              options: [
                "Serial monitor",
                "Image editor",
                "Spreadsheet application",
                "File explorer"
              ],
              answer: "Serial monitor"
            },
            {
              question: "What is an important factor when choosing a development board?",
              options: [
                "Required peripherals and project needs",
                "The board's packaging design",
                "The color of the USB cable",
                "The desktop wallpaper"
              ],
              answer: "Required peripherals and project needs"
            }
          ]
        },
        {
          title: "Debugging and Testing Embedded Programs",
          content: `
Debugging is the process of identifying and correcting problems in a program or embedded system.

Embedded software can fail because of incorrect logic, configuration errors, timing problems, memory limitations, or hardware connections.

Common debugging methods include:

1. Serial output: Print important variable values and program status messages.
2. Breakpoints: Pause execution at selected instructions when using a supported debugger.
3. Step execution: Run the program one instruction or source line at a time.
4. Register inspection: Examine hardware register values.
5. Hardware testing: Check wiring, power connections, and signal levels.

Testing should cover normal operation and unusual conditions. For example, a sensor application should be tested with different readings, disconnected sensor conditions, and expected operating limits.

A useful debugging process is to reproduce the issue, collect evidence, identify the likely cause, change one relevant part, and test again.

Documentation of test results helps developers understand whether a correction actually solved the problem.
          `,
          quiz: [
            {
              question: "What is debugging?",
              options: [
                "Identifying and correcting program problems",
                "Increasing the physical size of a board",
                "Replacing all program instructions",
                "Changing a computer's wallpaper"
              ],
              answer: "Identifying and correcting program problems"
            },
            {
              question: "What does a breakpoint do?",
              options: [
                "Pauses execution at a selected point",
                "Deletes all program memory",
                "Increases sensor voltage",
                "Disconnects the power supply"
              ],
              answer: "Pauses execution at a selected point"
            },
            {
              question: "Why is serial output useful during debugging?",
              options: [
                "It displays program status and variable values",
                "It permanently changes the CPU architecture",
                "It replaces every hardware connection",
                "It automatically fixes all software errors"
              ],
              answer: "It displays program status and variable values"
            },
            {
              question: "What should be checked when an embedded circuit does not work?",
              options: [
                "Power, wiring, and signal connections",
                "Only the computer's screen brightness",
                "Only the file extension",
                "The keyboard layout"
              ],
              answer: "Power, wiring, and signal connections"
            },
            {
              question: "Why should test results be documented?",
              options: [
                "To record evidence and verify corrections",
                "To increase the microcontroller's clock speed",
                "To change the board's pin arrangement",
                "To remove the need for testing"
              ],
              answer: "To record evidence and verify corrections"
            }
          ]
        },
        {
          title: "Low-Power Design and Reliability",
          content: `
Low-power design aims to reduce the energy consumed by an embedded system while maintaining the required functionality.

Many embedded devices operate using batteries, so efficient power management is important.

Common low-power techniques include:
1. Sleep modes: Allow the microcontroller to enter a reduced-power state when processing is not required.
2. Clock management: Use an appropriate clock frequency for the task.
3. Peripheral control: Disable unused peripherals when possible.
4. Duty cycling: Operate sensors or communication modules only when required.
5. Efficient software: Avoid unnecessary processing and repeated operations.

Reliability means that a system performs its intended function consistently under expected operating conditions.

Important reliability practices include checking voltage limits, using appropriate components, handling unexpected sensor readings, testing different conditions, and designing clear recovery behavior.

Watchdog timers can help recover from certain situations where a program stops operating as expected. A watchdog requires the program to periodically signal that it is running correctly.

Good power and reliability design can extend battery life and reduce unexpected failures.
          `,
          quiz: [
            {
              question: "What is the main goal of low-power design?",
              options: [
                "Reduce energy consumption while maintaining functionality",
                "Increase unnecessary processor activity",
                "Remove all memory",
                "Disable every input device"
              ],
              answer: "Reduce energy consumption while maintaining functionality"
            },
            {
              question: "What does a sleep mode help achieve?",
              options: [
                "Reduced power consumption during idle periods",
                "Higher screen resolution",
                "Permanent program deletion",
                "Faster internet connectivity"
              ],
              answer: "Reduced power consumption during idle periods"
            },
            {
              question: "What is duty cycling?",
              options: [
                "Operating a device only during selected intervals",
                "Keeping every peripheral active continuously",
                "Changing the programming language",
                "Increasing the number of memory addresses"
              ],
              answer: "Operating a device only during selected intervals"
            },
            {
              question: "What is the purpose of a watchdog timer?",
              options: [
                "Help recover when software stops operating correctly",
                "Store sensor readings permanently",
                "Convert analog signals into digital values",
                "Increase the number of GPIO pins"
              ],
              answer: "Help recover when software stops operating correctly"
            },
            {
              question: "Which practice improves embedded system reliability?",
              options: [
                "Testing expected and unusual operating conditions",
                "Ignoring sensor errors",
                "Using components beyond their rated limits",
                "Removing all error handling"
              ],
              answer: "Testing expected and unusual operating conditions"
            }
          ]
        },
        {
          title: "Final Project: Build a Simple Microcontroller-Based Sensor System",
          content: `
In this project, you will design a simple sensor monitoring system using a microcontroller development board.

The system reads a sensor value, processes the reading, and displays or indicates the result.

Project objectives:
1. Understand how a microcontroller interacts with a sensor.
2. Configure the required input and output pins.
3. Read sensor data using a suitable interface.
4. Process the readings in a program.
5. Display the result using a serial monitor or suitable display.
6. Test the system under different input conditions.

Main project stages:

Stage 1: Select a suitable development board and a compatible low-voltage sensor.

Stage 2: Identify the sensor's output type and voltage requirements.

Stage 3: Connect the sensor to the appropriate input pin using the board manufacturer's instructions.

Stage 4: Write an Embedded C or supported development-environment program to read the sensor.

Stage 5: Process the sensor reading and display it.

Stage 6: Test the system with different readings and check its behavior.

Stage 7: Document the circuit connections, program logic, test results, and limitations.

The project can be extended with an LED indicator, a buzzer module, or a display.

Use only compatible low-voltage development hardware, follow the manufacturer's connection guidance, and disconnect power before changing circuit wiring.
          `,
          quiz: [
            {
              question: "What is the main purpose of the sensor monitoring project?",
              options: [
                "Read and process sensor data using a microcontroller",
                "Create a desktop operating system",
                "Build a large database server",
                "Design a computer network cable"
              ],
              answer: "Read and process sensor data using a microcontroller"
            },
            {
              question: "What should be checked before connecting a sensor?",
              options: [
                "Output type and voltage requirements",
                "The sensor's packaging color",
                "The computer's screen resolution",
                "The name of the project folder"
              ],
              answer: "Output type and voltage requirements"
            },
            {
              question: "Which interface can display sensor readings during testing?",
              options: [
                "Serial monitor",
                "Image editor",
                "Text formatting toolbar",
                "File compression utility"
              ],
              answer: "Serial monitor"
            },
            {
              question: "Why should the system be tested with different readings?",
              options: [
                "To check its behavior under different input conditions",
                "To increase the physical size of the board",
                "To remove the need for a program",
                "To change the sensor's manufacturer"
              ],
              answer: "To check its behavior under different input conditions"
            },
            {
              question: "What is a useful project extension?",
              options: [
                "Adding an LED indicator or display",
                "Removing the sensor input",
                "Disconnecting the microcontroller",
                "Deleting the program after every reading"
              ],
              answer: "Adding an LED indicator or display"
            }
          ]
        }
      ]
    }
  ]
};

export default microcontrollerBasicsCourse;
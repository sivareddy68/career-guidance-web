
const microcontrollerCourse = {
  title: "Microcontrollers",
  description:
    "Learn microcontroller architecture, GPIO, timers, interrupts, ADC, PWM, memory, and practical embedded applications.",

  weeks: [
    {
      title: "Week 1: Microcontroller Fundamentals",
      description:
        "Understand microcontrollers, their architecture, and basic operation.",
      lessons: [
        {
          title: "1. Introduction to Microcontrollers",
          content: `
A microcontroller is a compact integrated circuit designed to control electronic systems.

A typical microcontroller contains:
- CPU
- RAM
- Flash memory
- GPIO pins
- Timers and counters
- Communication peripherals
- ADC and other peripherals

Unlike a general-purpose computer, a microcontroller is designed for specific control and embedded applications.

Microcontrollers are commonly used in appliances, automobiles, industrial systems, IoT devices, and consumer electronics.
          `,
          quiz: [
            {
              question: "What is the main purpose of a microcontroller?",
              options: [
                "To control embedded systems",
                "To replace all computers",
                "To store movies only",
                "To provide internet access only",
              ],
              answer: "To control embedded systems",
            },
            {
              question: "Which component executes instructions in a microcontroller?",
              options: ["CPU", "GPIO", "ADC", "Timer"],
              answer: "CPU",
            },
            {
              question: "Which memory commonly stores the program?",
              options: ["Flash", "RAM", "Cache only", "Register only"],
              answer: "Flash",
            },
            {
              question: "Which is commonly found inside a microcontroller?",
              options: [
                "GPIO peripherals",
                "Desktop monitor",
                "Keyboard",
                "Hard disk drive",
              ],
              answer: "GPIO peripherals",
            },
            {
              question: "Where are microcontrollers commonly used?",
              options: [
                "Embedded systems",
                "Only supercomputers",
                "Only web servers",
                "Only desktop computers",
              ],
              answer: "Embedded systems",
            },
          ],
        },

        {
          title: "2. Microcontroller Architecture",
          content: `
Microcontroller architecture describes how the CPU, memory, buses, and peripherals are organized.

Important parts include:
- CPU core: Executes instructions.
- Program memory: Stores firmware.
- Data memory: Stores temporary data.
- Registers: Hold control and processing information.
- Peripherals: Provide hardware functions.
- Bus system: Transfers data between internal components.

Many modern microcontrollers use a Harvard-style architecture or variations of it, where program and data accesses can use separate paths.
          `,
          quiz: [
            {
              question: "What does the CPU do?",
              options: [
                "Executes instructions",
                "Only stores data",
                "Only provides power",
                "Only generates analog signals",
              ],
              answer: "Executes instructions",
            },
            {
              question: "What is the purpose of registers?",
              options: [
                "Hold processor and peripheral information",
                "Store unlimited files",
                "Replace the power supply",
                "Generate network cables",
              ],
              answer: "Hold processor and peripheral information",
            },
            {
              question: "What connects internal components for data transfer?",
              options: ["Bus system", "Battery", "GPIO LED", "Crystal package"],
              answer: "Bus system",
            },
            {
              question: "Which memory stores firmware in many microcontrollers?",
              options: ["Flash", "RAM only", "GPIO", "Timer"],
              answer: "Flash",
            },
            {
              question: "What is architecture concerned with?",
              options: [
                "Organization of CPU, memory, and peripherals",
                "Only the PCB color",
                "Only the programming language",
                "Only the display size",
              ],
              answer: "Organization of CPU, memory, and peripherals",
            },
          ],
        },

        {
          title: "3. CPU, Registers, and Clock",
          content: `
The CPU executes the instructions of an embedded program.

Registers are small storage locations inside the processor or peripheral hardware. They are used to hold values, configuration settings, and status information.

The clock provides timing for processor operations. Clock frequency is commonly expressed in hertz.

A higher clock frequency can allow more operations per second, but performance also depends on the CPU architecture, memory access, instruction set, and software.
          `,
          quiz: [
            {
              question: "What is a register?",
              options: [
                "A small storage location used by the CPU or peripheral",
                "A power cable",
                "A display device",
                "A communication protocol",
              ],
              answer: "A small storage location used by the CPU or peripheral",
            },
            {
              question: "What provides timing for processor operations?",
              options: ["Clock", "GPIO", "ADC", "UART"],
              answer: "Clock",
            },
            {
              question: "What unit is commonly used for clock frequency?",
              options: ["Hertz", "Volts", "Amperes", "Ohms"],
              answer: "Hertz",
            },
            {
              question: "What does the CPU execute?",
              options: ["Instructions", "Wires", "Resistors", "Sensors"],
              answer: "Instructions",
            },
            {
              question: "Does clock frequency alone determine total system performance?",
              options: [
                "No",
                "Yes, always",
                "Only for GPIO",
                "Only for ADC",
              ],
              answer: "No",
            },
          ],
        },

        {
          title: "4. Memory in Microcontrollers",
          content: `
Microcontrollers normally contain different types of memory.

Flash memory is commonly used for storing program code and persistent data.

RAM is temporary working memory used while the program is running. Its contents are normally lost when power is removed.

EEPROM is available on some microcontrollers and can store small amounts of data that should survive power loss.

Memory-mapped peripherals allow software to access hardware registers using specific addresses.
          `,
          quiz: [
            {
              question: "Which memory commonly stores program code?",
              options: ["Flash", "RAM", "GPIO", "Timer"],
              answer: "Flash",
            },
            {
              question: "What happens to normal RAM contents when power is removed?",
              options: [
                "They are normally lost",
                "They are permanently stored",
                "They move automatically to GPIO",
                "They become Flash",
              ],
              answer: "They are normally lost",
            },
            {
              question: "Which memory can retain data after power is removed?",
              options: ["EEPROM", "RAM", "Register only", "Cache only"],
              answer: "EEPROM",
            },
            {
              question: "What is RAM mainly used for?",
              options: [
                "Temporary working data",
                "Permanent firmware storage",
                "Generating clock signals",
                "Connecting external sensors",
              ],
              answer: "Temporary working data",
            },
            {
              question: "What can memory-mapped registers allow software to access?",
              options: [
                "Hardware peripherals",
                "Only external websites",
                "Only source-code comments",
                "Only display pixels",
              ],
              answer: "Hardware peripherals",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: GPIO, Timers, and Interrupts",
      description:
        "Learn how microcontrollers interact with hardware and respond to events.",
      lessons: [
        {
          title: "5. GPIO and Digital I/O",
          content: `
GPIO stands for General-Purpose Input/Output.

A GPIO pin can usually be configured as:
- Digital input
- Digital output

As an input, the microcontroller reads an external digital signal such as a switch.

As an output, it can control devices such as LEDs, relays, or digital control signals.

GPIO pins may also support alternate functions such as UART, SPI, PWM, or timer signals.
          `,
          quiz: [
            {
              question: "What does GPIO stand for?",
              options: [
                "General-Purpose Input/Output",
                "General Program Input Operation",
                "General Peripheral Internal Output",
                "Global Processing Input Option",
              ],
              answer: "General-Purpose Input/Output",
            },
            {
              question: "What can a GPIO input do?",
              options: [
                "Read a digital signal",
                "Store firmware permanently",
                "Generate program code",
                "Replace the CPU",
              ],
              answer: "Read a digital signal",
            },
            {
              question: "What can a GPIO output control?",
              options: ["An LED", "Source code", "Flash memory size", "CPU architecture"],
              answer: "An LED",
            },
            {
              question: "What is an alternate GPIO function?",
              options: [
                "UART signal",
                "Battery chemistry",
                "Screen resolution",
                "File compression",
              ],
              answer: "UART signal",
            },
            {
              question: "How is a GPIO pin normally configured before use?",
              options: [
                "As an input or output",
                "As a database",
                "As a file",
                "As a programming language",
              ],
              answer: "As an input or output",
            },
          ],
        },

        {
          title: "6. Timers and Counters",
          content: `
Timers are hardware peripherals used to measure time intervals and generate timing events.

A timer can be used for:
- Delays
- Periodic events
- Frequency measurement
- PWM generation
- Event counting

A counter can count external or internal events depending on the microcontroller.

Hardware timers are generally more reliable for precise timing than software delay loops because they can operate independently of many CPU instructions.
          `,
          quiz: [
            {
              question: "What is a common use of a timer?",
              options: [
                "Generating timing events",
                "Storing source code permanently",
                "Changing CPU architecture",
                "Replacing RAM",
              ],
              answer: "Generating timing events",
            },
            {
              question: "What can a counter measure?",
              options: ["Events", "Source files", "Screen colors", "Program names"],
              answer: "Events",
            },
            {
              question: "Which feature can be generated using a timer?",
              options: ["PWM", "HTML", "CSS", "Database tables"],
              answer: "PWM",
            },
            {
              question: "Why are hardware timers useful?",
              options: [
                "They provide accurate hardware-based timing",
                "They remove the need for a CPU",
                "They permanently store firmware",
                "They replace communication protocols",
              ],
              answer: "They provide accurate hardware-based timing",
            },
            {
              question: "What can a timer measure?",
              options: [
                "Time intervals",
                "File names",
                "Source-code length",
                "Display resolution",
              ],
              answer: "Time intervals",
            },
          ],
        },

        {
          title: "7. Interrupts",
          content: `
An interrupt allows hardware or software to request processor attention.

Instead of continuously checking a device, the processor can perform other work until an interrupt occurs.

Common interrupt sources include:
- GPIO changes
- Timer events
- UART reception
- ADC completion
- External hardware events

The interrupt service routine (ISR) handles the event. ISRs should generally be short and efficient so that other important operations are not delayed.
          `,
          quiz: [
            {
              question: "What is the purpose of an interrupt?",
              options: [
                "To notify the processor about an event",
                "To permanently stop the CPU",
                "To store firmware",
                "To increase RAM size",
              ],
              answer: "To notify the processor about an event",
            },
            {
              question: "What handles an interrupt event?",
              options: [
                "Interrupt Service Routine",
                "Flash memory",
                "GPIO resistor",
                "Power supply",
              ],
              answer: "Interrupt Service Routine",
            },
            {
              question: "Which can generate an interrupt?",
              options: [
                "Timer event",
                "File name",
                "Monitor color",
                "Source-code comment",
              ],
              answer: "Timer event",
            },
            {
              question: "Why should ISRs generally be short?",
              options: [
                "To reduce delays to other operations",
                "To increase flash capacity",
                "To remove all peripherals",
                "To change the CPU architecture",
              ],
              answer: "To reduce delays to other operations",
            },
            {
              question: "Which peripheral can generate a receive interrupt?",
              options: ["UART", "Flash only", "GPIO resistor", "Battery"],
              answer: "UART",
            },
          ],
        },

        {
          title: "8. Interrupt Priority and Handling",
          content: `
Some microcontrollers support multiple interrupt sources and priority levels.

Interrupt priority determines which interrupt should be serviced first when several events require attention.

Important interrupt concepts include:
- Interrupt enable and disable
- Interrupt flags
- Priority
- ISR execution
- Nested interrupts

Shared data between normal program code and an ISR must be handled carefully to avoid inconsistent values or race conditions.
          `,
          quiz: [
            {
              question: "What does interrupt priority determine?",
              options: [
                "Which interrupt receives attention first",
                "Which file is opened first",
                "Which sensor gets power",
                "Which memory is physically larger",
              ],
              answer: "Which interrupt receives attention first",
            },
            {
              question: "What indicates that an interrupt event occurred?",
              options: [
                "An interrupt flag",
                "A CSS rule",
                "A file extension",
                "A display pixel",
              ],
              answer: "An interrupt flag",
            },
            {
              question: "What should be considered when sharing data with an ISR?",
              options: [
                "Race conditions and data consistency",
                "Monitor resolution",
                "Keyboard layout",
                "File compression",
              ],
              answer: "Race conditions and data consistency",
            },
            {
              question: "What does ISR stand for?",
              options: [
                "Interrupt Service Routine",
                "Internal System Register",
                "Input Signal Router",
                "Integrated Software Resource",
              ],
              answer: "Interrupt Service Routine",
            },
            {
              question: "What can multiple interrupt sources have?",
              options: [
                "Different priorities",
                "Different programming languages",
                "Different source-code editors",
                "Different file extensions",
              ],
              answer: "Different priorities",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: ADC, PWM, and Communication",
      description:
        "Learn important peripherals used to connect microcontrollers with real-world signals and devices.",
      lessons: [
        {
          title: "9. Analog-to-Digital Converter",
          content: `
An ADC converts an analog voltage into a digital value that the microcontroller can process.

Sensors such as temperature, light, and potentiometers can produce analog signals.

Important ADC concepts include:
- Resolution
- Reference voltage
- Sampling
- Conversion time
- Input range

For an N-bit ADC, the number of possible digital levels is 2^N.

For example, a 10-bit ADC provides 1024 possible digital levels.
          `,
          quiz: [
            {
              question: "What does an ADC do?",
              options: [
                "Converts an analog signal into a digital value",
                "Converts source code into hardware",
                "Generates a clock only",
                "Stores firmware permanently",
              ],
              answer: "Converts an analog signal into a digital value",
            },
            {
              question: "What does ADC resolution describe?",
              options: [
                "Number of available digital levels",
                "Physical size of the sensor",
                "Communication cable length",
                "CPU temperature",
              ],
              answer: "Number of available digital levels",
            },
            {
              question: "How many levels does a 10-bit ADC provide?",
              options: ["1024", "100", "512", "2048"],
              answer: "1024",
            },
            {
              question: "Which device can provide an analog signal?",
              options: ["Potentiometer", "UART cable", "Flash memory", "GPIO register"],
              answer: "Potentiometer",
            },
            {
              question: "What can affect an ADC conversion?",
              options: [
                "Reference voltage",
                "File name",
                "Keyboard layout",
                "Monitor size",
              ],
              answer: "Reference voltage",
            },
          ],
        },

        {
          title: "10. PWM",
          content: `
PWM stands for Pulse Width Modulation.

PWM generates a digital waveform with a controlled duty cycle.

Duty cycle is the percentage of one period during which the signal is active.

PWM is commonly used for:
- LED brightness control
- Motor speed control
- Servo control
- Power control

For example, increasing the duty cycle of a PWM signal can increase the average power delivered to certain loads.
          `,
          quiz: [
            {
              question: "What does PWM stand for?",
              options: [
                "Pulse Width Modulation",
                "Program Wave Memory",
                "Peripheral Width Module",
                "Pulse Wire Management",
              ],
              answer: "Pulse Width Modulation",
            },
            {
              question: "What does duty cycle represent?",
              options: [
                "Percentage of the period the signal is active",
                "Number of GPIO pins",
                "CPU memory size",
                "Communication distance",
              ],
              answer: "Percentage of the period the signal is active",
            },
            {
              question: "Which is a common PWM application?",
              options: [
                "LED brightness control",
                "Permanent program storage",
                "File compression",
                "CPU instruction decoding",
              ],
              answer: "LED brightness control",
            },
            {
              question: "What can PWM control in a motor application?",
              options: ["Motor speed", "Flash size", "UART address", "RAM capacity"],
              answer: "Motor speed",
            },
            {
              question: "What happens when PWM duty cycle is increased for a suitable load?",
              options: [
                "Average delivered power can increase",
                "The CPU always stops",
                "The memory becomes Flash",
                "The signal becomes an analog sensor",
              ],
              answer: "Average delivered power can increase",
            },
          ],
        },

        {
          title: "11. UART, SPI, and I2C Interfaces",
          content: `
Microcontrollers commonly include hardware communication peripherals.

UART is useful for simple serial communication and debugging.

SPI provides synchronous high-speed communication and commonly uses clock, data, and chip-select signals.

I2C uses SDA and SCL and allows multiple addressed devices to share the same bus.

The correct interface depends on the connected device and system requirements.
          `,
          quiz: [
            {
              question: "Which interface commonly uses TX and RX?",
              options: ["UART", "SPI", "I2C", "PWM"],
              answer: "UART",
            },
            {
              question: "Which interface commonly uses SDA and SCL?",
              options: ["I2C", "UART", "SPI", "ADC"],
              answer: "I2C",
            },
            {
              question: "Which interface commonly uses chip select?",
              options: ["SPI", "UART", "I2C", "PWM"],
              answer: "SPI",
            },
            {
              question: "Which interface is commonly useful for debugging through a serial terminal?",
              options: ["UART", "ADC", "PWM", "GPIO only"],
              answer: "UART",
            },
            {
              question: "What determines the appropriate communication interface?",
              options: [
                "Peripheral requirements and system needs",
                "Source file name",
                "Monitor size",
                "Keyboard type",
              ],
              answer: "Peripheral requirements and system needs",
            },
          ],
        },

        {
          title: "12. Watchdog Timer",
          content: `
A watchdog timer is a hardware timer used to detect software failures.

The program periodically refreshes or "kicks" the watchdog. If the software stops responding and fails to refresh it within the configured time, the watchdog can reset the microcontroller.

Watchdogs are useful in systems that must recover automatically from unexpected software problems.

The timeout must be selected carefully so that normal operation does not cause unnecessary resets.
          `,
          quiz: [
            {
              question: "What is the purpose of a watchdog timer?",
              options: [
                "To recover from software failures",
                "To increase Flash memory",
                "To generate source code",
                "To replace the CPU",
              ],
              answer: "To recover from software failures",
            },
            {
              question: "What does software normally do with a watchdog?",
              options: [
                "Refreshes it periodically",
                "Deletes it",
                "Converts it into RAM",
                "Uses it as a display",
              ],
              answer: "Refreshes it periodically",
            },
            {
              question: "What may happen if the watchdog is not refreshed?",
              options: [
                "The microcontroller may reset",
                "The Flash becomes RAM",
                "The CPU frequency becomes zero permanently",
                "The sensor automatically changes type",
              ],
              answer: "The microcontroller may reset",
            },
            {
              question: "Why is a watchdog useful?",
              options: [
                "It can help a system recover automatically",
                "It eliminates every hardware fault",
                "It increases screen resolution",
                "It replaces all interrupts",
              ],
              answer: "It can help a system recover automatically",
            },
            {
              question: "What should be configured carefully?",
              options: [
                "Watchdog timeout",
                "File extension",
                "Monitor brightness",
                "Keyboard language",
              ],
              answer: "Watchdog timeout",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Embedded Programming and Applications",
      description:
        "Apply microcontroller concepts to practical embedded systems.",
      lessons: [
        {
          title: "13. Microcontroller Programming",
          content: `
Embedded programs are usually written in C or C++ and compiled into machine code for the target microcontroller.

A typical embedded program performs initialization and then repeatedly handles application tasks.

Common steps include:
1. Configure the clock.
2. Initialize GPIO.
3. Configure communication peripherals.
4. Initialize timers and interrupts.
5. Read sensors.
6. Process data.
7. Control outputs.

Programs should consider memory limits, timing requirements, power consumption, and reliability.
          `,
          quiz: [
            {
              question: "Which language is commonly used for microcontroller programming?",
              options: ["C", "HTML", "CSS", "SQL"],
              answer: "C",
            },
            {
              question: "What is commonly done first in an embedded program?",
              options: [
                "Initialize required hardware",
                "Delete the firmware",
                "Disable every peripheral",
                "Format the microcontroller",
              ],
              answer: "Initialize required hardware",
            },
            {
              question: "What can an embedded program read?",
              options: ["Sensor data", "Only source files", "Only web pages", "Only images"],
              answer: "Sensor data",
            },
            {
              question: "What can a microcontroller control?",
              options: ["Hardware outputs", "Only text files", "Only web pages", "Only databases"],
              answer: "Hardware outputs",
            },
            {
              question: "What is important in embedded programming?",
              options: [
                "Timing and memory constraints",
                "Only screen resolution",
                "Only file names",
                "Only keyboard shortcuts",
              ],
              answer: "Timing and memory constraints",
            },
          ],
        },

        {
          title: "14. Low-Power Operation",
          content: `
Many embedded systems operate from batteries, so power consumption is important.

Microcontrollers often provide low-power modes such as sleep or standby.

Power can be reduced by:
- Lowering clock frequency when possible
- Disabling unused peripherals
- Using sleep modes
- Reducing unnecessary processing
- Controlling sensor power

The appropriate low-power method depends on how quickly the system must respond to events.
          `,
          quiz: [
            {
              question: "Why are low-power modes useful?",
              options: [
                "They reduce energy consumption",
                "They increase source-code size",
                "They remove all peripherals",
                "They increase display resolution",
              ],
              answer: "They reduce energy consumption",
            },
            {
              question: "Which can reduce power consumption?",
              options: [
                "Disabling unused peripherals",
                "Enabling every peripheral",
                "Increasing unnecessary processing",
                "Running all devices continuously",
              ],
              answer: "Disabling unused peripherals",
            },
            {
              question: "What type of system especially benefits from low-power operation?",
              options: ["Battery-powered device", "Desktop monitor", "Printer cable", "Web page"],
              answer: "Battery-powered device",
            },
            {
              question: "What may wake a microcontroller from sleep?",
              options: [
                "An interrupt",
                "A source-code comment",
                "A file name",
                "A monitor pixel",
              ],
              answer: "An interrupt",
            },
            {
              question: "What must be considered when selecting a low-power mode?",
              options: [
                "Required response time",
                "File extension",
                "Keyboard type",
                "Screen color",
              ],
              answer: "Required response time",
            },
          ],
        },

        {
          title: "15. Microcontroller Debugging",
          content: `
Debugging helps identify hardware and software problems in embedded systems.

Common tools include:
- Debugger
- Breakpoints
- Serial terminal
- Logic analyzer
- Oscilloscope
- Multimeter

A debugger can inspect variables, registers, and program execution.

Serial output can help identify program states. Hardware measurement tools help verify actual electrical signals.

A systematic debugging process should separate software problems from hardware and wiring problems.
          `,
          quiz: [
            {
              question: "What can a debugger help inspect?",
              options: [
                "Variables and program execution",
                "Only PCB color",
                "Only battery chemistry",
                "Only source file names",
              ],
              answer: "Variables and program execution",
            },
            {
              question: "What can an oscilloscope measure?",
              options: [
                "Electrical waveforms",
                "Source-code quality",
                "File names",
                "Database records",
              ],
              answer: "Electrical waveforms",
            },
            {
              question: "What can a multimeter measure?",
              options: [
                "Electrical quantities such as voltage",
                "Program instructions directly",
                "Source-code comments",
                "File extensions",
              ],
              answer: "Electrical quantities such as voltage",
            },
            {
              question: "What can a serial terminal help with?",
              options: [
                "Viewing debug messages",
                "Changing PCB wiring automatically",
                "Increasing RAM",
                "Replacing the CPU",
              ],
              answer: "Viewing debug messages",
            },
            {
              question: "Why use a systematic debugging process?",
              options: [
                "To isolate the source of a problem",
                "To avoid testing",
                "To remove all hardware",
                "To increase file size",
              ],
              answer: "To isolate the source of a problem",
            },
          ],
        },

        {
          title: "16. Mini Project: Sensor-Based Microcontroller System",
          content: `
Build a small embedded system using a microcontroller, sensor, display or communication interface, and an output device.

Example system:
- Read a sensor using ADC or I2C.
- Process the sensor value.
- Display or transmit the result.
- Control an LED or other output based on the measured value.
- Use a timer or interrupt for periodic operation.

Development steps:
1. Select the microcontroller and sensor.
2. Configure GPIO and required peripherals.
3. Test the sensor independently.
4. Process and display the sensor data.
5. Add output control.
6. Test normal and abnormal conditions.

This project combines GPIO, ADC/I2C, timers, interrupts, and communication concepts.
          `,
          quiz: [
            {
              question: "What is the main purpose of the project?",
              options: [
                "To combine multiple microcontroller peripherals",
                "To design a web page",
                "To create a database",
                "To replace the microcontroller",
              ],
              answer: "To combine multiple microcontroller peripherals",
            },
            {
              question: "Which peripheral can read an analog sensor?",
              options: ["ADC", "UART only", "PWM only", "Watchdog only"],
              answer: "ADC",
            },
            {
              question: "Which peripheral can generate periodic events?",
              options: ["Timer", "Flash", "GPIO resistor", "EEPROM"],
              answer: "Timer",
            },
            {
              question: "What should be done before combining all modules?",
              options: [
                "Test individual components",
                "Ignore the datasheets",
                "Connect everything randomly",
                "Disable all debugging",
              ],
              answer: "Test individual components",
            },
            {
              question: "What does this project demonstrate?",
              options: [
                "Practical use of microcontroller peripherals",
                "Only programming syntax",
                "Only web development",
                "Only database design",
              ],
              answer: "Practical use of microcontroller peripherals",
            },
          ],
        },
      ],
    },
  ],
};

export default microcontrollerCourse;
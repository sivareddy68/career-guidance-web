
export const deviceDriversCourse = {
  title: "Embedded Device Drivers",
  description:
    "Learn embedded device drivers, GPIO, UART, SPI, I2C, ADC, PWM, interrupts, DMA, driver architecture, debugging, and practical microcontroller interfacing.",
  weeks: [
    {
      title: "Week 1: Device Driver Fundamentals",
      description:
        "Understand device drivers, microcontroller peripherals, GPIO, and register-level programming.",
      lessons: [
        {
          title: "Lesson 1: Introduction to Device Drivers",
          content: `
A device driver is software that allows an application or operating system to communicate with a hardware device.

In embedded systems, drivers connect application software to microcontroller peripherals such as GPIO, UART, SPI, I2C, ADC, timers, and PWM modules.

Why are device drivers needed?
- They hide low-level hardware details from application code.
- They provide reusable interfaces.
- They help organize hardware-specific operations.
- They can centralize error handling and configuration.
- They make applications easier to maintain and test.

Example:
A temperature-monitoring application needs sensor data. Instead of directly manipulating hardware registers throughout the application, it can call a sensor-driver function such as read_temperature().

Typical software layers:
1. Application layer: implements product behavior.
2. Driver layer: controls or communicates with hardware.
3. Hardware abstraction layer (HAL): offers standardized peripheral interfaces where provided.
4. Hardware layer: contains the processor and physical peripherals.

A driver may be polling-based, interrupt-driven, or DMA-assisted, depending on the device and requirements.

Remember: a driver is not necessarily a separate operating-system component. Small bare-metal microcontrollers can use drivers without an RTOS.
          `,
          quiz: [
            {
              question: "What is the main purpose of a device driver?",
              options: [
                "Provide software access to hardware devices",
                "Replace the microcontroller",
                "Increase physical RAM automatically",
                "Design the circuit board"
              ],
              answer: "Provide software access to hardware devices",
              explanation:
                "A driver implements the software operations needed to control or communicate with a hardware peripheral."
            },
            {
              question: "Which component commonly uses a device driver?",
              options: [
                "Application software",
                "A resistor by itself",
                "A PCB mounting hole",
                "A battery enclosure"
              ],
              answer: "Application software",
              explanation:
                "Application code calls driver interfaces to use hardware functionality."
            },
            {
              question: "Which is a common microcontroller peripheral?",
              options: [
                "UART",
                "HTML",
                "CSS",
                "SQL query"
              ],
              answer: "UART",
              explanation:
                "UART is a hardware peripheral used for serial communication."
            },
            {
              question: "Can a bare-metal embedded system use device drivers without an RTOS?",
              options: [
                "Yes, drivers can run without an RTOS",
                "No, all drivers require an RTOS",
                "Only if the system has no processor",
                "Only when the application has no functions"
              ],
              answer: "Yes, drivers can run without an RTOS",
              explanation:
                "Bare-metal firmware can directly call driver functions without an operating-system kernel."
            },
            {
              question: "What is one benefit of separating drivers from application logic?",
              options: [
                "Improved reuse and maintainability",
                "Guaranteed unlimited memory",
                "Automatic removal of all hardware faults",
                "Elimination of all timing requirements"
              ],
              answer: "Improved reuse and maintainability",
              explanation:
                "Separating hardware operations from application behavior makes the code easier to reuse, test, and update."
            }
          ]
        },
        {
          title: "Lesson 2: Microcontroller Registers",
          content: `
A hardware register is a small storage location inside a peripheral or processor used to configure hardware or inspect its status.

Common register types:
- Control registers: select operating modes and enable features.
- Status registers: report events or hardware state.
- Data registers: hold transmitted, received, or converted data.
- Interrupt registers: enable, flag, or acknowledge interrupt events.

Register-level programming:
A driver configures a peripheral by writing specific bit patterns to its registers and reads registers to check results.

Bit operations:
- Set a bit: use bitwise OR with a mask.
- Clear a bit: use bitwise AND with the inverted mask.
- Toggle a bit: use bitwise XOR with a mask.
- Test a bit: use bitwise AND and compare the result.

Example in C:
register |= (1U << 3); sets bit 3.
register &= ~(1U << 3); clears bit 3.
if (register & (1U << 3)) checks bit 3.

The exact register addresses, bit definitions, and access rules are device-specific. Use the microcontroller reference manual and vendor header files.

Some registers have special behavior, such as write-one-to-clear status flags. Ordinary read-modify-write operations may be incorrect for those registers, so follow the hardware documentation.
          `,
          quiz: [
            {
              question: "What is a hardware register commonly used for?",
              options: [
                "Configuring a peripheral or checking its status",
                "Storing an entire application indefinitely",
                "Replacing every RAM chip",
                "Creating source-code comments"
              ],
              answer: "Configuring a peripheral or checking its status",
              explanation:
                "Registers expose control, status, and data information for hardware peripherals."
            },
            {
              question: "Which bitwise operator is commonly used to set a bit using a mask?",
              options: [
                "|",
                "&",
                "^",
                "%"
              ],
              answer: "|",
              explanation:
                "Bitwise OR sets every bit that is set in the mask while preserving other bits in the original value."
            },
            {
              question: "What does `register &= ~(1U << 3);` normally do?",
              options: [
                "Clear bit 3",
                "Set bit 3",
                "Toggle every bit",
                "Shift the register right by three bits"
              ],
              answer: "Clear bit 3",
              explanation:
                "The inverted mask has a zero at bit 3 and ones elsewhere, so the AND operation clears bit 3."
            },
            {
              question: "Where should a developer verify peripheral register definitions?",
              options: [
                "The device reference manual and vendor headers",
                "An unrelated web page layout",
                "A battery label only",
                "A database table name"
              ],
              answer: "The device reference manual and vendor headers",
              explanation:
                "Official device documentation defines register addresses, bit meanings, and access restrictions."
            },
            {
              question: "Why must special status-register behavior be checked before writing to it?",
              options: [
                "Some registers use special rules such as write-one-to-clear",
                "Every register stores text only",
                "All registers are read-only",
                "Register behavior is identical across all microcontrollers"
              ],
              answer: "Some registers use special rules such as write-one-to-clear",
              explanation:
                "Some hardware registers have special write semantics that make ordinary read-modify-write operations unsafe."
            }
          ]
        },
        {
          title: "Lesson 3: GPIO Driver",
          content: `
GPIO stands for General-Purpose Input/Output. It allows a microcontroller to read digital signals and control digital output signals.

Input examples:
- Reading a push button
- Detecting a digital sensor output
- Monitoring a logic-level signal

Output examples:
- Turning an LED on or off
- Controlling a digital enable signal
- Driving a compatible logic input

Typical GPIO configuration:
1. Select input or output mode.
2. Configure pull-up or pull-down resistors if required.
3. Set output type and speed where applicable.
4. Read the input state or write the output state.

Pull-up and pull-down resistors help prevent an input from floating when no external device is actively driving it.

A floating input can change unpredictably because of electrical noise. An internal pull resistor may be sufficient for simple cases, but hardware design requirements still matter.

Switch debouncing:
Mechanical buttons may produce several rapid transitions during one press. Software or hardware debouncing can filter these transitions.

GPIO voltage limits, current limits, and logic thresholds depend on the microcontroller. Do not connect a pin to a voltage outside its specified ratings.
          `,
          quiz: [
            {
              question: "What does GPIO stand for?",
              options: [
                "General-Purpose Input/Output",
                "General Processor Internal Operation",
                "Global Peripheral Interface Order",
                "Graphical Program Input Option"
              ],
              answer: "General-Purpose Input/Output",
              explanation:
                "GPIO pins can be configured for general-purpose digital input or output."
            },
            {
              question: "Which is a common GPIO input application?",
              options: [
                "Reading a push button",
                "Generating an analog waveform with no supporting hardware",
                "Storing a program in flash",
                "Scheduling an RTOS task"
              ],
              answer: "Reading a push button",
              explanation:
                "A configured GPIO input can detect the digital level produced by a button circuit."
            },
            {
              question: "Why might a pull-up resistor be used on a digital input?",
              options: [
                "To establish a defined logic level when the input is otherwise undriven",
                "To increase the processor's clock speed",
                "To store serial data permanently",
                "To replace the input pin"
              ],
              answer: "To establish a defined logic level when the input is otherwise undriven",
              explanation:
                "A pull-up helps prevent the input from floating when no external circuit drives it."
            },
            {
              question: "What is switch debouncing used for?",
              options: [
                "Filtering rapid transitions from a mechanical switch",
                "Increasing the GPIO voltage rating",
                "Changing UART into SPI",
                "Increasing flash memory capacity"
              ],
              answer: "Filtering rapid transitions from a mechanical switch",
              explanation:
                "Mechanical contacts may bounce and generate multiple transitions during one physical press."
            },
            {
              question: "What should be checked before connecting an external signal to a GPIO pin?",
              options: [
                "Voltage and current ratings of the pin",
                "The color of the code editor",
                "The length of the project title",
                "The number of comments in the program"
              ],
              answer: "Voltage and current ratings of the pin",
              explanation:
                "Exceeding electrical ratings can damage the microcontroller or cause unreliable operation."
            }
          ]
        },
        {
          title: "Lesson 4: Driver Initialization and Error Handling",
          content: `
Driver initialization prepares a peripheral before the application uses it.

A typical initialization sequence may include:
1. Enable the peripheral clock.
2. Configure the relevant pins.
3. Select communication or operating modes.
4. Set timing parameters.
5. Configure interrupts or DMA if required.
6. Clear relevant pending status flags according to the manual.
7. Enable the peripheral.
8. Check whether initialization succeeded.

The order matters. For example, a peripheral may not respond correctly until its clock and pins are configured.

Error handling:
A driver should communicate failures to the application. Depending on the interface, it may return a status code, report a timeout, or provide an error flag.

Common errors:
- Invalid configuration
- Peripheral busy
- Timeout
- Communication failure
- Unsupported operation
- Hardware not responding

Timeouts are important because a driver should not wait forever for a peripheral that never responds.

Initialization should be repeatable only when the driver and hardware support it. Some devices require a reset or a particular shutdown sequence before reinitialization.

Use clear return values and document whether a function blocks, can time out, or must run in a particular execution context.
          `,
          quiz: [
            {
              question: "What is the purpose of driver initialization?",
              options: [
                "Prepare a peripheral for operation",
                "Permanently delete peripheral registers",
                "Increase the physical size of RAM",
                "Remove the need for hardware documentation"
              ],
              answer: "Prepare a peripheral for operation",
              explanation:
                "Initialization configures clocks, pins, modes, timing, and other settings needed by a peripheral."
            },
            {
              question: "Why can enabling a peripheral clock be necessary?",
              options: [
                "The peripheral may require its clock to operate",
                "It automatically increases the battery voltage",
                "It removes all communication errors",
                "It creates unlimited queue storage"
              ],
              answer: "The peripheral may require its clock to operate",
              explanation:
                "Many microcontrollers gate peripheral clocks to save power, so the clock must be enabled before use."
            },
            {
              question: "What is a driver timeout intended to prevent?",
              options: [
                "Waiting indefinitely for an operation",
                "All successful data transfers",
                "Every interrupt from occurring",
                "All function calls"
              ],
              answer: "Waiting indefinitely for an operation",
              explanation:
                "A timeout allows the driver to stop waiting and report a failure when an operation takes too long."
            },
            {
              question: "How should a driver commonly report an operation failure?",
              options: [
                "Return or expose a defined error status",
                "Silently pretend every operation succeeded",
                "Change unrelated application variables",
                "Disable the processor clock permanently"
              ],
              answer: "Return or expose a defined error status",
              explanation:
                "Defined status reporting allows the application to detect and handle failures."
            },
            {
              question: "Why must initialization order follow device documentation?",
              options: [
                "Some peripherals require clocks, pins, and modes to be configured in a specific sequence",
                "All peripherals have identical startup requirements",
                "Initialization order changes the programming language",
                "The manual determines variable names"
              ],
              answer: "Some peripherals require clocks, pins, and modes to be configured in a specific sequence",
              explanation:
                "Hardware dependencies and startup requirements vary by peripheral and microcontroller."
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: Serial Communication Drivers",
      description:
        "Learn UART, SPI, I2C, and reliable communication handling.",
      lessons: [
        {
          title: "Lesson 5: UART Driver",
          content: `
UART stands for Universal Asynchronous Receiver/Transmitter. It is widely used for serial communication between embedded devices.

Common signals:
- TX: transmit data
- RX: receive data
- GND: common electrical reference

UART is asynchronous, meaning the sender and receiver do not normally share a separate clock signal for each bit. Both ends must use compatible communication settings.

Important parameters:
- Baud rate
- Data bits
- Parity
- Stop bits
- Flow control, when used

A UART driver may provide:
- Initialization
- Blocking transmit and receive
- Non-blocking transfer
- Interrupt-driven reception
- DMA-assisted transfers
- Error reporting

Common communication errors include framing errors, parity errors, overrun errors, and baud-rate mismatch.

Polling is simple but can waste processor time while waiting. Interrupts or DMA can improve efficiency for larger or continuous transfers.

Always check the device documentation for supported baud rates, pin configuration, and electrical interface requirements. UART logic signals are not necessarily compatible with RS-232 voltage levels without suitable interface hardware.
          `,
          quiz: [
            {
              question: "What does UART stand for?",
              options: [
                "Universal Asynchronous Receiver/Transmitter",
                "Unified Analog Register Transfer",
                "Universal Address Routing Table",
                "User Application Response Timer"
              ],
              answer: "Universal Asynchronous Receiver/Transmitter",
              explanation:
                "UART is a peripheral for asynchronous serial transmission and reception."
            },
            {
              question: "Which UART signal normally carries data from a device?",
              options: [
                "TX",
                "GND",
                "VCC",
                "RESET only"
              ],
              answer: "TX",
              explanation:
                "TX is the transmit signal; RX is the receive signal."
            },
            {
              question: "Which setting must normally be compatible at both UART endpoints?",
              options: [
                "Baud rate",
                "Screen resolution",
                "Source-code filename",
                "Task title"
              ],
              answer: "Baud rate",
              explanation:
                "The transmitter and receiver must use compatible baud rates and frame settings."
            },
            {
              question: "What can a UART overrun error indicate?",
              options: [
                "New data arrived before earlier data was read",
                "The GPIO pin changed color",
                "The processor has unlimited receive storage",
                "The program has no variables"
              ],
              answer: "New data arrived before earlier data was read",
              explanation:
                "An overrun can occur when received data is not consumed before another item arrives."
            },
            {
              question: "Why might DMA be used for UART transfers?",
              options: [
                "To move data with less CPU involvement",
                "To remove the need for baud-rate configuration",
                "To convert every serial link into analog communication",
                "To eliminate all possible communication errors"
              ],
              answer: "To move data with less CPU involvement",
              explanation:
                "DMA can transfer data between a peripheral and memory without requiring the CPU to handle every item."
            }
          ]
        },
        {
          title: "Lesson 6: SPI Driver",
          content: `
SPI stands for Serial Peripheral Interface. It is a synchronous serial communication interface commonly used to connect a controller to sensors, displays, memory chips, and other peripherals.

Common SPI signals:
- SCLK: serial clock
- MOSI: controller-to-peripheral data in conventional naming
- MISO: peripheral-to-controller data
- CS or SS: chip-select signal

A typical SPI transaction:
1. Select the target peripheral.
2. Generate clock pulses.
3. Shift data out and receive data in.
4. Finish the transaction and release chip select.

SPI can transmit and receive bits simultaneously in full-duplex configurations.

Important configuration options:
- Clock polarity (CPOL)
- Clock phase (CPHA)
- Clock frequency
- Bit order
- Chip-select behavior

Devices may require different SPI modes or maximum clock frequencies. Incorrect mode or timing can produce corrupted data.

SPI does not define one universal higher-level command format for all devices. The connected peripheral's datasheet specifies register addresses, command bytes, timing, and transaction boundaries.

A driver should coordinate access if multiple tasks share the same SPI controller or peripheral.
          `,
          quiz: [
            {
              question: "What does SPI stand for?",
              options: [
                "Serial Peripheral Interface",
                "Synchronous Program Index",
                "System Process Interrupt",
                "Serial Pin Initialization"
              ],
              answer: "Serial Peripheral Interface",
              explanation:
                "SPI is a synchronous serial interface used to communicate with peripherals."
            },
            {
              question: "Which signal usually provides the SPI clock?",
              options: [
                "SCLK",
                "MISO",
                "CS only",
                "GND"
              ],
              answer: "SCLK",
              explanation:
                "SCLK carries the serial clock used to time data transfers."
            },
            {
              question: "What do CPOL and CPHA configure?",
              options: [
                "SPI clock polarity and clock phase",
                "UART baud rate and parity",
                "GPIO input voltage and current limits",
                "ADC resolution and reference voltage"
              ],
              answer: "SPI clock polarity and clock phase",
              explanation:
                "CPOL defines the clock's idle polarity, while CPHA determines the sampling phase."
            },
            {
              question: "What does chip select usually do in SPI?",
              options: [
                "Select the peripheral for a transaction",
                "Set the processor's clock frequency",
                "Store received data permanently",
                "Replace the serial clock"
              ],
              answer: "Select the peripheral for a transaction",
              explanation:
                "The chip-select signal identifies the target peripheral for a transfer."
            },
            {
              question: "Where should a driver developer check the required SPI mode and timing?",
              options: [
                "The peripheral datasheet",
                "An unrelated application stylesheet",
                "The battery's exterior color",
                "The task's variable names"
              ],
              answer: "The peripheral datasheet",
              explanation:
                "The datasheet defines supported clock modes, timing limits, and transaction requirements."
            }
          ]
        },
        {
          title: "Lesson 7: I2C Driver",
          content: `
I2C, commonly called Inter-Integrated Circuit, is a synchronous serial bus that uses two main signal lines.

SDA: serial data.
SCL: serial clock.

I2C commonly supports multiple devices on the same bus. Devices are selected using addresses, subject to the addressing mode and device design.

Typical transaction:
1. The controller generates a START condition.
2. It sends the target address and read/write direction.
3. The addressed device acknowledges when appropriate.
4. Data bytes are transferred with acknowledgment handling.
5. The controller ends the transaction with a STOP condition, or uses a repeated START when required.

I2C lines are commonly open-drain or open-collector and use pull-up resistors. The correct pull-up values depend on bus capacitance, speed, voltage, and device requirements.

Common errors:
- No acknowledgment
- Incorrect address
- Bus stuck low
- Timing problems
- Electrical pull-up problems

A driver should detect failures and provide recovery behavior when supported. Bus recovery must follow the microcontroller and peripheral requirements.

Before connecting devices, confirm logic voltage compatibility and whether level shifting is needed.
          `,
          quiz: [
            {
              question: "Which two lines are used by a typical I2C bus?",
              options: [
                "SDA and SCL",
                "TX and RX only",
                "MOSI and MISO only",
                "CS and RESET only"
              ],
              answer: "SDA and SCL",
              explanation:
                "I2C uses SDA for data and SCL for the clock."
            },
            {
              question: "How does a controller commonly select an I2C peripheral?",
              options: [
                "By using its bus address",
                "By changing the source-code filename",
                "By changing the processor's physical size",
                "By disabling the SCL signal permanently"
              ],
              answer: "By using its bus address",
              explanation:
                "The controller sends the address of the target device as part of the transaction."
            },
            {
              question: "What is the purpose of pull-up resistors on a typical I2C bus?",
              options: [
                "Bring open-drain bus lines to a logic-high level",
                "Replace every device address",
                "Increase the number of data bits in each byte",
                "Store data after power is removed"
              ],
              answer: "Bring open-drain bus lines to a logic-high level",
              explanation:
                "Pull-ups allow open-drain or open-collector I2C lines to reach the high logic level."
            },
            {
              question: "What does a missing acknowledgment commonly indicate?",
              options: [
                "The expected device did not acknowledge the transaction",
                "The bus has unlimited devices",
                "The source code compiled successfully",
                "The clock is no longer needed"
              ],
              answer: "The expected device did not acknowledge the transaction",
              explanation:
                "A missing ACK may result from an incorrect address, absent device, wiring problem, or other communication issue."
            },
            {
              question: "What should be checked before connecting two I2C devices?",
              options: [
                "Voltage compatibility and bus electrical requirements",
                "The color of their circuit boards",
                "Whether their variable names match",
                "The number of functions in the application"
              ],
              answer: "Voltage compatibility and bus electrical requirements",
              explanation:
                "Logic voltage, pull-ups, capacitance, and bus timing must be compatible with connected devices."
            }
          ]
        },
        {
          title: "Lesson 8: Comparing UART, SPI, and I2C",
          content: `
UART, SPI, and I2C are common embedded communication interfaces, but they serve different needs.

UART:
- Asynchronous serial communication.
- Commonly uses TX and RX.
- Requires compatible baud and frame settings.
- Often useful for debugging consoles and point-to-point links.

SPI:
- Synchronous serial communication.
- Commonly uses SCLK, MOSI, MISO, and chip select.
- Often supports high throughput.
- Requires chip-select handling and compatible clock mode.

I2C:
- Synchronous two-wire bus.
- Uses SDA and SCL.
- Supports addressed devices on a shared bus.
- Requires correct pull-ups and acknowledgment handling.

Selection depends on:
- Data rate
- Number of devices
- Number of available pins
- Cable or PCB layout
- Electrical requirements
- Peripheral capabilities
- Software complexity

No interface is best for every situation. For example, I2C can reduce pin count when connecting multiple addressed peripherals, while SPI may suit devices needing higher throughput. UART is useful when an asynchronous point-to-point link is appropriate.

Always verify the capabilities of the specific microcontroller and connected devices.
          `,
          quiz: [
            {
              question: "Which interface is asynchronous by default?",
              options: [
                "UART",
                "SPI",
                "I2C",
                "A synchronous parallel bus"
              ],
              answer: "UART",
              explanation:
                "UART sends framed serial data without a shared clock line."
            },
            {
              question: "Which interface commonly uses chip-select signals?",
              options: [
                "SPI",
                "UART",
                "I2C only",
                "A GPIO input-only connection"
              ],
              answer: "SPI",
              explanation:
                "SPI commonly selects a target peripheral using a chip-select line."
            },
            {
              question: "Which interface commonly addresses multiple devices on two shared signal lines?",
              options: [
                "I2C",
                "UART point-to-point only",
                "GPIO output only",
                "PWM"
              ],
              answer: "I2C",
              explanation:
                "I2C uses SDA and SCL and commonly identifies devices by bus address."
            },
            {
              question: "Which factor should influence interface selection?",
              options: [
                "Required data rate and available pins",
                "Only the source-code file name",
                "The keyboard layout",
                "The color of the development board"
              ],
              answer: "Required data rate and available pins",
              explanation:
                "Bandwidth, pin count, electrical constraints, and peripheral support affect interface selection."
            },
            {
              question: "Is one communication interface always best for every embedded device?",
              options: [
                "No, the choice depends on application requirements",
                "Yes, UART is always fastest",
                "Yes, I2C never needs pull-ups",
                "No, because microcontrollers cannot communicate"
              ],
              answer: "No, the choice depends on application requirements",
              explanation:
                "Each interface has different capabilities and trade-offs."
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: Analog, Timing, and Data Transfer",
      description:
        "Study ADC, PWM, timers, interrupts, and DMA-assisted drivers.",
      lessons: [
        {
          title: "Lesson 9: ADC Driver",
          content: `
An Analog-to-Digital Converter (ADC) converts an analog voltage into a digital representation.

ADCs are used to measure signals from temperature sensors, potentiometers, light sensors, battery-monitoring circuits, and other analog sources.

Important ADC properties:
- Resolution, often expressed in bits
- Reference voltage
- Sampling rate
- Input voltage range
- Conversion time
- Input impedance and acquisition requirements

For an ideal N-bit ADC, there are 2^N possible digital codes. For example, a 12-bit ADC has 4096 possible codes, from 0 through 4095.

A simplified conversion estimate is:
Digital code ≈ (Vin / Vref) × (2^N − 1)

This approximation assumes the input lies within the supported range and ignores device-specific errors.

Typical driver sequence:
1. Configure the analog pin.
2. Configure the ADC channel and reference.
3. Start conversion.
4. Wait for completion or handle an interrupt.
5. Read the conversion result.
6. Check status and process the result.

Noise can be reduced through suitable hardware design, filtering, averaging, or oversampling where appropriate. Software processing cannot compensate for every electrical design problem.
          `,
          quiz: [
            {
              question: "What does an ADC do?",
              options: [
                "Converts an analog signal into a digital representation",
                "Converts a digital number directly into a mechanical switch",
                "Schedules tasks by priority",
                "Transmits asynchronous serial frames"
              ],
              answer: "Converts an analog signal into a digital representation",
              explanation:
                "An ADC samples an analog input and produces a digital code."
            },
            {
              question: "How many possible codes does an ideal 12-bit ADC provide?",
              options: [
                "4096",
                "1024",
                "2048",
                "8192"
              ],
              answer: "4096",
              explanation:
                "A 12-bit converter has 2^12 = 4096 possible codes, numbered from 0 to 4095."
            },
            {
              question: "What is the role of an ADC reference voltage?",
              options: [
                "It provides a voltage reference for conversion",
                "It specifies the UART stop-bit count",
                "It selects an RTOS task",
                "It stores converted samples permanently"
              ],
              answer: "It provides a voltage reference for conversion",
              explanation:
                "The ADC uses its reference to map input voltages to digital codes."
            },
            {
              question: "What is a typical way to detect conversion completion?",
              options: [
                "Check a status flag or handle a completion interrupt",
                "Rename the ADC source file",
                "Disable every processor clock",
                "Read the battery label"
              ],
              answer: "Check a status flag or handle a completion interrupt",
              explanation:
                "Depending on the peripheral, software can poll a completion flag or respond to an interrupt."
            },
            {
              question: "Which factor can affect ADC measurement quality?",
              options: [
                "Input noise and reference accuracy",
                "The color of the source-code editor",
                "The task's display name",
                "The number of comments in a file"
              ],
              answer: "Input noise and reference accuracy",
              explanation:
                "Electrical noise and reference-voltage error can affect conversion accuracy."
            }
          ]
        },
        {
          title: "Lesson 10: PWM Driver",
          content: `
Pulse-Width Modulation (PWM) controls the proportion of time a digital output stays high during a repeating period.

Duty cycle is the percentage of the period for which the signal is active.

For example:
- 0% duty cycle: output is never active during the period.
- 50% duty cycle: output is active for half the period.
- 100% duty cycle: output is active for the entire period.

PWM applications include:
- LED brightness control
- Motor speed control
- Power conversion
- Servo control, when the pulse format is appropriate

PWM frequency determines how often the waveform repeats. Duty cycle determines the relative active time. Both must suit the load and application.

A microcontroller timer often generates PWM using a period or auto-reload register and a compare register.

For a simple edge-aligned PWM configuration, the duty cycle is related to the compare value and timer period. The exact formula depends on timer mode, counting direction, and whether the active output is inverted.

Drivers commonly provide functions to initialize the timer, configure frequency, set duty cycle, enable the output, and stop PWM.

Do not connect a motor or other high-current load directly to a GPIO pin unless the hardware is explicitly designed for that load. A suitable driver circuit may be required.
          `,
          quiz: [
            {
              question: "What does PWM stand for?",
              options: [
                "Pulse-Width Modulation",
                "Programmed Wire Memory",
                "Peripheral Write Mode",
                "Processor Wake Management"
              ],
              answer: "Pulse-Width Modulation",
              explanation:
                "PWM controls the active fraction of a repeating digital waveform."
            },
            {
              question: "What does duty cycle describe?",
              options: [
                "The fraction of a period for which the output is active",
                "The number of UART devices",
                "The amount of flash memory",
                "The number of RTOS tasks"
              ],
              answer: "The fraction of a period for which the output is active",
              explanation:
                "Duty cycle represents the active time as a proportion of the signal period."
            },
            {
              question: "What is a common application of PWM?",
              options: [
                "Controlling LED brightness",
                "Storing source code permanently",
                "Addressing I2C devices",
                "Scheduling every RTOS task"
              ],
              answer: "Controlling LED brightness",
              explanation:
                "PWM can adjust average LED power and therefore perceived brightness."
            },
            {
              question: "Which hardware peripheral commonly generates PWM?",
              options: [
                "A timer with PWM capability",
                "A UART receive buffer alone",
                "A flash memory address",
                "A software comment parser"
              ],
              answer: "A timer with PWM capability",
              explanation:
                "Microcontroller timers commonly generate PWM using period and compare settings."
            },
            {
              question: "Why may a motor require an external driver circuit?",
              options: [
                "The motor's current and voltage requirements may exceed GPIO ratings",
                "PWM cannot control motors",
                "Every motor is a digital input",
                "A timer cannot produce a repeating signal"
              ],
              answer: "The motor's current and voltage requirements may exceed GPIO ratings",
              explanation:
                "A suitable power stage protects the microcontroller and supplies the load's required current."
            }
          ]
        },
        {
          title: "Lesson 11: Timer and Counter Drivers",
          content: `
Hardware timers count clock events and can generate interrupts, measure intervals, capture input edges, or produce output waveforms.

Common timer modes:
- Periodic timer: generates an event at repeated intervals.
- Input capture: records the timer value when an input event occurs.
- Output compare: triggers an output or event when the counter reaches a configured value.
- PWM mode: generates a waveform with a configured period and duty cycle.

Timer configuration often involves:
- Clock source
- Prescaler
- Counter period or auto-reload value
- Compare or capture channel
- Interrupt enable settings

A prescaler divides the timer input clock. For a simple timer, the counter frequency may be calculated from the input clock and prescaler. Exact formulas depend on whether the hardware uses a prescaler value or a divisor value.

Timers support:
- Periodic sensor sampling
- Event timestamps
- Pulse-width measurement
- Motor-control timing
- Scheduling hardware events

A timer interrupt should be handled efficiently. If longer processing is required, the ISR can signal a task or store the event for later processing.
          `,
          quiz: [
            {
              question: "What does a hardware timer commonly do?",
              options: [
                "Count clock events and generate timing events",
                "Compile C source files",
                "Store an entire application in RAM",
                "Replace every GPIO pin"
              ],
              answer: "Count clock events and generate timing events",
              explanation:
                "Timers can measure time, count events, generate interrupts, and control output timing."
            },
            {
              question: "What is the purpose of a timer prescaler?",
              options: [
                "Divide the timer's input clock",
                "Increase the number of program files",
                "Change the UART data format",
                "Store analog measurements permanently"
              ],
              answer: "Divide the timer's input clock",
              explanation:
                "A prescaler divides the clock supplied to the timer counter."
            },
            {
              question: "Which timer mode records a counter value when an input event occurs?",
              options: [
                "Input capture",
                "Output compare only",
                "UART framing",
                "I2C acknowledgment"
              ],
              answer: "Input capture",
              explanation:
                "Input capture records a timer value in response to a configured input event."
            },
            {
              question: "What is a common use of output compare?",
              options: [
                "Trigger an event when a counter reaches a configured value",
                "Read an I2C address automatically in every design",
                "Store task stacks in flash",
                "Measure source-code length"
              ],
              answer: "Trigger an event when a counter reaches a configured value",
              explanation:
                "Output-compare hardware can trigger an output action or event when the counter matches a compare value."
            },
            {
              question: "Why should a timer ISR be kept efficient?",
              options: [
                "To reduce interrupt latency and timing interference",
                "To increase the physical size of the timer",
                "To eliminate the timer clock",
                "To prevent all tasks from running"
              ],
              answer: "To reduce interrupt latency and timing interference",
              explanation:
                "Long interrupt handlers can delay other events and disrupt real-time responsiveness."
            }
          ]
        },
        {
          title: "Lesson 12: DMA-Based Drivers",
          content: `
Direct Memory Access (DMA) allows a hardware controller to transfer data between memory and peripherals with less CPU involvement.

Common DMA uses:
- UART receive and transmit
- SPI data transfers
- ADC sample collection
- Memory-to-memory copying, where supported

Typical DMA transfer sequence:
1. Configure the peripheral.
2. Configure the source and destination addresses.
3. Set the transfer length and direction.
4. Configure the required transfer mode.
5. Enable the DMA channel and start the operation.
6. Wait for completion or handle an interrupt.
7. Check error flags and process the completed buffer.

Benefits:
- Reduced CPU work for each transferred item
- Efficient handling of larger data streams
- More time for other application tasks

Important concerns:
- Buffer lifetime must cover the transfer.
- Buffer ownership must be clear.
- Some systems require cache maintenance for DMA buffers.
- Transfer errors must be detected.
- Hardware-specific alignment and memory-region restrictions may apply.

DMA does not eliminate all CPU work. The CPU still configures transfers, handles completion, and processes the data.
          `,
          quiz: [
            {
              question: "What does DMA stand for?",
              options: [
                "Direct Memory Access",
                "Digital Module Address",
                "Device Management Application",
                "Dynamic Mode Allocation"
              ],
              answer: "Direct Memory Access",
              explanation:
                "DMA is a hardware mechanism for transferring data with reduced CPU involvement."
            },
            {
              question: "What is a common benefit of DMA?",
              options: [
                "Reduced CPU involvement in data transfers",
                "Automatic removal of every driver",
                "Unlimited RAM capacity",
                "Guaranteed error-free communication"
              ],
              answer: "Reduced CPU involvement in data transfers",
              explanation:
                "DMA can move blocks of data without the CPU handling each individual item."
            },
            {
              question: "What should remain valid while a DMA transfer is active?",
              options: [
                "The transfer's source and destination buffers",
                "Only the editor window",
                "The task's display title",
                "The color of the circuit board"
              ],
              answer: "The transfer's source and destination buffers",
              explanation:
                "DMA may continue accessing the configured memory after the initiating function returns."
            },
            {
              question: "How does software commonly learn that a DMA transfer has completed?",
              options: [
                "Through a completion flag or interrupt",
                "By changing a variable name",
                "By reading the battery label",
                "By disabling all memory"
              ],
              answer: "Through a completion flag or interrupt",
              explanation:
                "The DMA controller commonly reports completion through status flags or interrupts."
            },
            {
              question: "Why can cache maintenance matter for DMA on some processors?",
              options: [
                "The CPU cache and DMA controller may not automatically see identical memory contents",
                "DMA always changes the processor's clock frequency",
                "Every microcontroller has no cache",
                "Cache maintenance sets the UART baud rate"
              ],
              answer: "The CPU cache and DMA controller may not automatically see identical memory contents",
              explanation:
                "On systems with non-coherent caches, explicit cache operations may be required to synchronize memory and DMA data."
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: Driver Design and Practical Projects",
      description:
        "Learn robust driver architecture, debugging, validation, and integration.",
      lessons: [
        {
          title: "Lesson 13: Interrupt-Driven Device Drivers",
          content: `
An interrupt-driven driver responds to peripheral events through interrupt service routines rather than continuously checking the peripheral in a loop.

Examples:
- UART data received
- Timer expiration
- GPIO edge detected
- ADC conversion completed

Typical design:
1. Configure the peripheral and interrupt source.
2. Enable the required interrupt.
3. Handle the event in the ISR.
4. Record minimal information or move data into a suitable buffer.
5. Signal a task or update a safe event flag.
6. Perform longer processing outside interrupt context.

Benefits:
- Less wasted processor time than continuous polling in many applications.
- Faster response to supported hardware events.
- Better integration with multitasking systems.

Challenges:
- Shared data may require synchronization.
- Interrupt priorities affect response times.
- ISR-safe APIs must be used.
- Interrupt handlers must acknowledge or clear the source as required by the hardware.

Some events are better handled by polling, especially when the operation is simple, infrequent, or the platform has limited interrupt support. The choice depends on timing, complexity, and power requirements.
          `,
          quiz: [
            {
              question: "What triggers an interrupt-driven driver to respond?",
              options: [
                "A peripheral interrupt event",
                "A source-code comment",
                "A change to a project title",
                "An unrelated database update"
              ],
              answer: "A peripheral interrupt event",
              explanation:
                "Interrupt-driven drivers respond when the configured hardware event raises an interrupt."
            },
            {
              question: "What should an ISR generally do when longer processing is needed?",
              options: [
                "Record or signal the event and defer longer work",
                "Block indefinitely waiting for a task",
                "Run every application function inside the ISR",
                "Disable all future interrupts permanently"
              ],
              answer: "Record or signal the event and defer longer work",
              explanation:
                "Short interrupt handlers help reduce latency and leave complex work to task context."
            },
            {
              question: "Which APIs are suitable for use from an ISR?",
              options: [
                "APIs documented as safe for interrupt context",
                "Every blocking task API",
                "Any function without checking its restrictions",
                "Only filesystem functions"
              ],
              answer: "APIs documented as safe for interrupt context",
              explanation:
                "Interrupt context has special constraints, so the driver must follow the RTOS API documentation."
            },
            {
              question: "What is one drawback of continuously polling a peripheral?",
              options: [
                "It can waste processor time while waiting",
                "It always requires DMA",
                "It prevents every status register from being read",
                "It automatically causes deadlock"
              ],
              answer: "It can waste processor time while waiting",
              explanation:
                "Polling may repeatedly check a condition even when no new event has occurred."
            },
            {
              question: "What affects the response time of an interrupt-driven driver?",
              options: [
                "Interrupt priority and time spent handling interrupts",
                "The source-code editor's theme",
                "The number of comments in a file",
                "The name of the project folder"
              ],
              answer: "Interrupt priority and time spent handling interrupts",
              explanation:
                "Interrupt priorities, disabled-interrupt intervals, and handler execution time affect response latency."
            }
          ]
        },
        {
          title: "Lesson 14: Hardware Abstraction and Driver Architecture",
          content: `
A Hardware Abstraction Layer (HAL) provides a more consistent software interface to hardware details.

For example, an application might call a GPIO function such as gpio_write(pin, state) rather than manipulating a specific register directly.

Common architecture patterns:
- Direct register drivers
- Vendor-provided peripheral libraries
- Hardware abstraction layers
- Bus drivers with individual device drivers
- Dedicated driver tasks in multitasking applications

Benefits of abstraction:
- Easier reuse across related hardware
- Reduced duplication
- Easier unit testing
- Clearer separation between application and hardware code

However, abstraction can hide device-specific capabilities or add overhead. A well-designed driver interface should expose important configuration options without forcing every application to understand every register.

A useful driver API should define:
- Initialization behavior
- Valid parameters
- Return values and errors
- Blocking and non-blocking behavior
- Concurrency requirements
- Interrupt-context restrictions
- Resource ownership

Abstraction does not make different hardware devices identical. Hardware-specific constraints must still be handled correctly.
          `,
          quiz: [
            {
              question: "What is the purpose of a Hardware Abstraction Layer?",
              options: [
                "Provide a more consistent interface to hardware operations",
                "Replace every physical peripheral",
                "Guarantee unlimited processor performance",
                "Remove all hardware-specific differences"
              ],
              answer: "Provide a more consistent interface to hardware operations",
              explanation:
                "A HAL hides some low-level details behind reusable software functions."
            },
            {
              question: "Which is a benefit of separating hardware access from application logic?",
              options: [
                "Improved reuse and unit testing",
                "Guaranteed absence of every bug",
                "Automatic expansion of flash memory",
                "Elimination of electrical constraints"
              ],
              answer: "Improved reuse and unit testing",
              explanation:
                "Clear interfaces make hardware-dependent code easier to isolate and test."
            },
            {
              question: "What should a driver API document?",
              options: [
                "Errors, parameters, and execution-context restrictions",
                "Only the developer's preferred editor theme",
                "The color of every PCB component",
                "The number of comments in every source file"
              ],
              answer: "Errors, parameters, and execution-context restrictions",
              explanation:
                "API documentation must explain how functions are called and what limitations apply."
            },
            {
              question: "Does a HAL eliminate all differences between hardware devices?",
              options: [
                "No, device-specific constraints still need to be handled",
                "Yes, every peripheral has identical registers",
                "Yes, all devices use the same electrical voltage",
                "No, because abstraction cannot be used in embedded systems"
              ],
              answer: "No, device-specific constraints still need to be handled",
              explanation:
                "A HAL simplifies access but cannot erase real differences in capabilities and electrical behavior."
            },
            {
              question: "Which approach can simplify reuse across related microcontrollers?",
              options: [
                "A well-defined hardware abstraction interface",
                "Duplicating all hardware logic inside every application function",
                "Removing driver interfaces",
                "Ignoring peripheral documentation"
              ],
              answer: "A well-defined hardware abstraction interface",
              explanation:
                "A stable interface can isolate applications from some device-specific implementation details."
            }
          ]
        },
        {
          title: "Lesson 15: Driver Debugging and Testing",
          content: `
Device-driver debugging verifies that software and hardware interact correctly.

Common problems:
- Incorrect pin mapping
- Peripheral clock not enabled
- Wrong communication settings
- Incorrect register bits
- Missing pull-up resistors
- Interrupt not enabled or acknowledged
- Buffer overflow
- Incorrect timeout handling
- Electrical incompatibility

Useful tools:
- Debugger and breakpoints
- Logic analyzer
- Oscilloscope
- Serial console
- Register inspection
- Unit tests with mocked hardware interfaces
- Hardware-in-the-loop testing

Testing strategy:
1. Check initialization and configuration.
2. Verify expected signal levels.
3. Confirm protocol timing and transactions.
4. Test success and error paths.
5. Test timeouts and disconnected devices.
6. Test under repeated and heavy operation.
7. Check resource cleanup and reinitialization where supported.

A logic analyzer is useful for decoding digital protocols such as SPI, I2C, and UART. An oscilloscope can show signal shape, voltage levels, rise times, and noise.

Debugging tools can change timing or electrical loading, so measurements should be interpreted with their limitations in mind.
          `,
          quiz: [
            {
              question: "Which tool is commonly used to inspect SPI or I2C digital transactions?",
              options: [
                "Logic analyzer",
                "Text formatter only",
                "Database editor",
                "Photo viewer"
              ],
              answer: "Logic analyzer",
              explanation:
                "A logic analyzer captures digital signals and can decode supported communication protocols."
            },
            {
              question: "What can an oscilloscope help inspect?",
              options: [
                "Voltage waveforms and signal timing",
                "The source-code filename",
                "The number of software comments",
                "The task's priority name only"
              ],
              answer: "Voltage waveforms and signal timing",
              explanation:
                "An oscilloscope shows electrical waveforms, timing, noise, and signal transitions."
            },
            {
              question: "Why should driver tests include error paths?",
              options: [
                "To verify safe behavior when communication or hardware operations fail",
                "To guarantee that failures never happen",
                "To eliminate the need for return codes",
                "To make all peripherals identical"
              ],
              answer: "To verify safe behavior when communication or hardware operations fail",
              explanation:
                "Error-path testing checks that failures are reported and handled correctly."
            },
            {
              question: "What is a common reason a peripheral fails to respond?",
              options: [
                "Its clock or configuration may be incorrect",
                "The source-code comments are too clear",
                "The project title is too short",
                "The editor uses a dark theme"
              ],
              answer: "Its clock or configuration may be incorrect",
              explanation:
                "Peripheral clock, pin mapping, and configuration errors can prevent proper operation."
            },
            {
              question: "What is hardware-in-the-loop testing?",
              options: [
                "Testing software while interacting with real or simulated hardware",
                "Testing only variable names",
                "Compiling code without executing it",
                "Replacing every physical input with a comment"
              ],
              answer: "Testing software while interacting with real or simulated hardware",
              explanation:
                "Hardware-in-the-loop testing evaluates software using connected hardware or a representative hardware simulation."
            }
          ]
        },
        {
          title: "Lesson 16: Mini Project - Multi-Peripheral Driver System",
          content: `
Project objective:
Build a small embedded application that uses multiple peripheral drivers in a structured way.

Suggested project:
Create a sensor monitoring system with a UART console, an I2C or SPI sensor, a timer, and an LED output.

Example components:
- Microcontroller development board
- Digital sensor
- UART-to-USB interface
- LED with a suitable current-limiting resistor
- Optional logic analyzer

Suggested architecture:

1. Sensor driver:
Reads data from the selected I2C or SPI sensor.

2. Timer driver:
Provides periodic timing for sensor sampling.

3. UART driver:
Reports sensor readings and error messages.

4. GPIO driver:
Controls the LED status indicator.

5. Application layer:
Coordinates sampling, data validation, and reporting.

Development steps:
1. Read the board and peripheral documentation.
2. Configure clocks and pin mappings.
3. Verify each peripheral separately.
4. Implement initialization and error reporting.
5. Integrate the drivers through clean interfaces.
6. Add timeouts and safe error handling.
7. Test communication failures and invalid readings.
8. Measure timing and verify electrical behavior.

Expected learning outcomes:
- Configure microcontroller peripherals.
- Build reusable driver interfaces.
- Debug serial protocols.
- Handle errors and timeouts.
- Separate application logic from hardware access.

Safety:
Use the correct voltage levels and current-limiting components. Never assume a GPIO pin can directly power a motor or other high-current device.
          `,
          quiz: [
            {
              question: "What is the main objective of the multi-peripheral project?",
              options: [
                "Integrate multiple hardware drivers into one application",
                "Replace the microcontroller with software",
                "Eliminate all peripheral configuration",
                "Use only source-code comments"
              ],
              answer: "Integrate multiple hardware drivers into one application",
              explanation:
                "The project combines sensor, timer, UART, and GPIO functions through structured driver interfaces."
            },
            {
              question: "Which driver would normally report sensor readings through a serial console?",
              options: [
                "UART driver",
                "ADC driver in every design",
                "PWM driver only",
                "GPIO input driver only"
              ],
              answer: "UART driver",
              explanation:
                "The UART driver handles serial transmission of formatted readings to a console."
            },
            {
              question: "Why should each peripheral be tested separately before integration?",
              options: [
                "To isolate hardware and configuration problems",
                "To guarantee that integration testing is unnecessary",
                "To eliminate the need for documentation",
                "To increase the number of physical pins"
              ],
              answer: "To isolate hardware and configuration problems",
              explanation:
                "Testing components independently helps identify whether a problem belongs to one peripheral or the integration."
            },
            {
              question: "What should a sensor driver do when a read operation times out?",
              options: [
                "Report the failure and follow a defined recovery policy",
                "Pretend the reading is always valid",
                "Write outside the data buffer",
                "Disable every peripheral permanently"
              ],
              answer: "Report the failure and follow a defined recovery policy",
              explanation:
                "Timeouts should be reported and handled safely instead of treating failed reads as valid data."
            },
            {
              question: "Why should driver interfaces be separated from application logic?",
              options: [
                "To improve modularity and simplify testing",
                "To guarantee unlimited RAM",
                "To remove all electrical limits",
                "To make all protocols use the same signals"
              ],
              answer: "To improve modularity and simplify testing",
              explanation:
                "Separate interfaces make hardware-specific code easier to reuse, test, and maintain."
            }
          ]
        }
      ]
    }
  ]
};

export default deviceDriversCourse;

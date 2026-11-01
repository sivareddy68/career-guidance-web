
import type { Course } from "./python";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type Lesson = {
  id: string;
  title: string;
  introduction: string;
  sections: { heading: string; content: string }[];
  example?: string;
  exercise: string;
  quiz: QuizQuestion[];
};

type CourseWeek = {
  title: string;
  lessons: Lesson[];
  assignment: string;
};

const q = (
  question: string,
  options: string[],
  answer: string,
  explanation: string
): QuizQuestion => ({ question, options, answer, explanation });

const lesson = (
  id: string,
  title: string,
  introduction: string,
  sections: { heading: string; content: string }[],
  example: string,
  exercise: string,
  quiz: QuizQuestion[]
): Lesson => ({
  id,
  title,
  introduction,
  sections,
  example,
  exercise,
  quiz,
});

const embeddedSystemsCourse: Course = {
  title: "Embedded Systems Engineering",
  description:
    "Master Embedded C programming, real-time operating systems, device-driver development, and embedded communication protocols through structured theory, coding exercises, practical assignments, and a final project.",
  project:
    "Develop a microcontroller-based monitoring system using Embedded C, periodic tasks, interrupt handling, device drivers, and UART, I2C, or SPI communication. Document the design, testing, timing behavior, and limitations.",

  weeks: [
    {
      title: "Week 1: Embedded C Programming",
      assignment:
        "Create a small Embedded C application that reads simulated sensor values, validates the data, applies a threshold, and controls an output. Document data types, functions, bitwise operations, state transitions, and test results.",

      lessons: [
        lesson(
          "es-w1-l1",
          "Introduction to Embedded Systems",
          "An embedded system is a computer-based system designed to perform a specific function within a larger product. It combines hardware and software and often interacts directly with sensors, actuators, and communication interfaces.",
          [
            {
              heading: "System architecture",
              content:
                "A typical embedded system contains a microcontroller or microprocessor, program memory, data memory, input/output peripherals, a clock source, and a power supply. Sensors provide input, firmware processes it, and outputs control indicators, motors, relays, or communication devices. The design depends on cost, performance, power consumption, timing, and reliability requirements.",
            },
            {
              heading: "Firmware and hardware",
              content:
                "Firmware is software intended to operate a device's hardware. It configures registers and peripherals, reads inputs, processes information, and controls outputs. Hardware provides physical interfaces and computing resources. Firmware developers must understand pin assignments, voltage levels, peripheral capabilities, clock configuration, and the device data sheet.",
            },
            {
              heading: "Bare-metal operation",
              content:
                "A bare-metal application runs directly on the processor without a general-purpose operating system. Its main loop repeatedly checks inputs and performs work. Interrupt service routines respond to selected events. Bare-metal designs can be efficient for small systems, but increasingly complex applications may benefit from an RTOS to organize concurrent tasks.",
            },
          ],
          "A temperature monitor reads a sensor, compares the value with a threshold, and activates an indicator when the temperature exceeds that threshold.",
          "Draw a block diagram for a temperature-monitoring system. Identify the processor, sensor, power source, firmware responsibilities, and output device.",
          [
            q("What is the main purpose of an embedded system?", ["Perform a defined function within a product", "Replace every computer", "Provide unlimited computing resources", "Operate without hardware"], "Perform a defined function within a product", "Embedded systems are designed for specific functions within larger products."),
            q("What is firmware?", ["Software designed to operate a device's hardware", "A circuit-board coating", "A connector type", "A battery chemistry"], "Software designed to operate a device's hardware", "Firmware controls hardware resources and implements the device's behavior."),
            q("Which component typically executes embedded instructions?", ["Microcontroller or microprocessor", "Passive resistor alone", "PCB mounting screw", "Plastic enclosure"], "Microcontroller or microprocessor", "The processor executes program instructions."),
            q("What characterizes a bare-metal application?", ["It runs without a general-purpose operating system", "It requires several operating systems", "It cannot access peripherals", "It contains no executable code"], "It runs without a general-purpose operating system", "Bare-metal software directly manages the processor and its peripherals."),
            q("Why should an engineer consult a microcontroller data sheet?", ["To understand electrical limits and peripheral capabilities", "To avoid testing the hardware", "To remove all timing requirements", "To guarantee that every pin has the same function"], "To understand electrical limits and peripheral capabilities", "The data sheet documents device characteristics, pin functions, and operating limits.")
          ]
        ),

        lesson(
          "es-w1-l2",
          "Embedded C Data Types, Memory, and Pointers",
          "Embedded C uses the C language to control hardware efficiently. Understanding data representation, memory allocation, and pointers is essential because embedded processors have finite resources and memory-mapped peripherals.",
          [
            {
              heading: "Data types and fixed-width integers",
              content:
                "C provides types such as char, int, and unsigned integer types. Their sizes can vary by implementation, so embedded software often uses fixed-width types from stdint.h, such as uint8_t, uint16_t, and int32_t. Unsigned values are useful for bit fields and nonnegative counters. Signedness, overflow, conversions, and operator precedence must be considered carefully.",
            },
            {
              heading: "Memory regions",
              content:
                "Program code and constant data commonly reside in nonvolatile memory such as flash. Variables and the stack generally use RAM. Static-storage variables exist for the duration of the program, while automatic local variables typically exist during a function call. Dynamic allocation is possible on some systems, but repeated allocation can create fragmentation and unpredictable failure in constrained devices.",
            },
            {
              heading: "Pointers and memory-mapped registers",
              content:
                "A pointer stores an address. Dereferencing a pointer accesses the object at that address, subject to the language and hardware rules. Microcontrollers commonly expose peripheral registers through memory-mapped addresses. Production code should use the vendor's device headers and documented register definitions rather than inventing addresses. Incorrect pointers can corrupt memory or cause hardware faults.",
            },
          ],
          "A uint8_t can represent unsigned values from 0 through 255. It is suitable for a small sensor code but not for every measurement or counter.",
          "Write a C program that declares fixed-width integer variables, converts a simulated sensor reading, and documents the expected range of every variable. Do not access undocumented hardware addresses.",
          [
            q("Which header defines uint32_t?", ["stdint.h", "stdio.h only", "string.h only", "math.h only"], "stdint.h", "The standard stdint.h header provides fixed-width integer type definitions."),
            q("What does a pointer store?", ["A memory address", "A source-code comment", "A resistor value only", "A processor temperature"], "A memory address", "A pointer represents the address of an object or function, depending on its type."),
            q("What is the maximum value of uint8_t?", ["127", "255", "256", "65535"], "255", "An unsigned 8-bit integer represents values from 0 through 255."),
            q("What can happen when an invalid pointer is dereferenced?", ["Undefined behavior or a hardware fault", "Automatic program correction", "Guaranteed data recovery", "A change in the processor's physical size"], "Undefined behavior or a hardware fault", "Invalid memory access can corrupt data or trigger a fault."),
            q("Why are fixed-width integer types useful in embedded C?", ["They specify the intended integer width", "They guarantee that every operation takes one cycle", "They eliminate all overflow", "They automatically allocate more RAM"], "They specify the intended integer width", "Fixed-width types make the intended representation explicit.")
          ]
        ),

        lesson(
          "es-w1-l3",
          "Bitwise Operations and Register Control",
          "Bitwise operations manipulate individual bits within integers. Embedded firmware uses them to configure peripheral registers, inspect status flags, and enable or disable hardware features.",
          [
            {
              heading: "AND, OR, XOR, and NOT",
              content:
                "Bitwise AND retains a bit only when both corresponding bits are one. OR produces one when either corresponding bit is one. XOR produces one when the bits differ. NOT inverts each bit. These operations are different from logical operators such as && and ||, which evaluate logical conditions.",
            },
            {
              heading: "Masks and register fields",
              content:
                "A bit mask selects specific bits. To set a documented bit, firmware commonly uses a pattern such as register |= mask. To clear selected bits, it may use register &= ~mask. To test whether a bit is set, use an AND operation and compare the result with zero. Real hardware registers may have special write semantics, so the device reference manual must be consulted.",
            },
            {
              heading: "Shifts and portability",
              content:
                "Left and right shifts move bit positions. A mask for bit n can be constructed using a suitably typed unsigned value shifted by n. The shift count must be valid for the operand width. Signed shifts and integer promotions require care. Read-modify-write operations may also be unsafe when a register changes asynchronously or has write-one-to-clear behavior.",
            },
          ],
          "If bit 2 is represented by the mask 0x04, `value |= 0x04` sets that bit without intentionally changing the other bits of an ordinary integer value.",
          "Write a short C exercise that sets, clears, and tests three bits in an unsigned variable. Explain why real peripheral registers must be handled according to the hardware documentation.",
          [
            q("Which operator performs bitwise AND in C?", ["&", "&&", "||", "!="], "&", "The single ampersand performs bitwise AND on integer operands."),
            q("What does a bit mask select?", ["Specific bit positions", "A PCB's physical dimensions", "The processor's clock source automatically", "Every memory location"], "Specific bit positions", "Masks isolate or modify selected bits."),
            q("What does XOR return for two equal bits?", ["0", "1", "2", "The original register address"], "0", "XOR produces zero when the corresponding bits are equal."),
            q("Why can a register read-modify-write operation require caution?", ["Hardware may change bits or use special write semantics", "Registers never contain bits", "All registers are ordinary RAM", "It always disables the processor permanently"], "Hardware may change bits or use special write semantics", "Peripheral registers can have behavior that differs from ordinary memory."),
            q("Which expression tests whether a mask is present in value?", ["(value & mask) != 0", "value + mask == 0", "value / mask == 0", "value = mask"], "(value & mask) != 0", "AND isolates the selected bits, and a nonzero result indicates that at least one selected bit is set.")
          ]
        ),

        lesson(
          "es-w1-l4",
          "Functions, State Machines, and Interrupts",
          "Embedded programs are easier to maintain when divided into small functions and clear states. Interrupts allow a processor to respond to hardware events without continuously checking every input.",
          [
            {
              heading: "Modular functions",
              content:
                "Functions separate tasks such as sensor reading, validation, decision-making, and output control. Each function should have a clear responsibility, documented inputs, and predictable outputs. Header files declare interfaces, while source files contain implementations. This separation supports unit testing and makes hardware-specific code easier to replace.",
            },
            {
              heading: "Finite-state machines",
              content:
                "A finite-state machine models behavior using a set of states and transitions triggered by events or conditions. A device may have IDLE, MEASURING, ALARM, and ERROR states. Explicit states make it easier to reason about what should happen after a timeout, invalid reading, button press, or communication failure.",
            },
            {
              heading: "Interrupt service routines",
              content:
                "An interrupt service routine (ISR) handles an event such as a timer overflow or peripheral data arrival. ISRs should generally be short and predictable. They may record a timestamp, capture data, or set a flag for processing in the main loop. Shared data requires careful synchronization, and volatile alone does not make complex operations atomic or thread-safe.",
            },
          ],
          "A timer ISR can set a flag every millisecond while the main loop checks that flag and performs noncritical work.",
          "Design a three-state machine for a sensor monitor. Describe the transitions and write pseudocode showing how a timer event can request a measurement.",
          [
            q("What is a benefit of modular functions?", ["They separate responsibilities and simplify testing", "They guarantee unlimited memory", "They remove the need for requirements", "They make every bug impossible"], "They separate responsibilities and simplify testing", "Well-defined functions improve maintainability and support unit testing."),
            q("What does a finite-state machine define?", ["States and transitions between them", "Only variable names", "Only processor packaging", "The physical length of a PCB"], "States and transitions between them", "A state machine models behavior through states and transition rules."),
            q("Why should an ISR generally be short?", ["To limit interrupt latency and unpredictable blocking", "To increase the number of bugs", "To remove the need for event handling", "To guarantee that interrupts never occur"], "To limit interrupt latency and unpredictable blocking", "Short ISRs help keep response time predictable."),
            q("Does volatile alone guarantee thread safety?", ["Yes, for every operation", "No, it does not provide general atomicity or synchronization", "Yes, including every multi-step update", "No, because it prevents all memory access"], "No, it does not provide general atomicity or synchronization", "Volatile affects compiler access behavior but does not replace synchronization mechanisms."),
            q("What is a common use of a timer interrupt?", ["Request periodic work", "Change the PCB layout", "Rewrite the compiler", "Increase every sensor's accuracy automatically"], "Request periodic work", "Timer interrupts can provide periodic events for scheduling or measurement.")
          ]
        ),
      ],
    },

    {
      title: "Week 2: RTOS and Real-Time Design",
      assignment:
        "Design a task-based sensor monitor with measurement, processing, and reporting tasks. Specify priorities, periodic intervals, communication between tasks, and how the system handles missed deadlines and shared data.",

      lessons: [
        lesson(
          "es-w2-l1",
          "RTOS Concepts and Task Scheduling",
          "A real-time operating system organizes software into tasks and provides scheduling and synchronization services. Real-time correctness depends on producing the correct result within the required time, not merely producing the right result eventually.",
          [
            {
              heading: "Tasks and states",
              content:
                "An RTOS task is an independently scheduled unit of execution. Depending on the RTOS, tasks may be ready, running, blocked, suspended, or in other defined states. A task may wait for a delay, event, queue message, semaphore, or resource. Each task commonly has its own stack and control information, which consume finite memory.",
            },
            {
              heading: "Scheduling and priority",
              content:
                "The scheduler selects a task to execute. A priority-based scheduler favors tasks according to their priority and the RTOS's scheduling rules. A preemptive scheduler can suspend a lower-priority task when a higher-priority ready task must run. Poor priority assignment, excessive blocking, or unbounded operations can prevent important tasks from meeting deadlines.",
            },
            {
              heading: "Real-time requirements",
              content:
                "Hard real-time systems have deadlines whose violation may be unacceptable; soft real-time systems tolerate some deadline misses with degraded quality. Engineers specify task periods, execution-time estimates, deadlines, and response-time requirements. Scheduling should be evaluated using the actual RTOS behavior and the worst-case workload rather than relying only on average execution time.",
            },
          ],
          "A periodic sensor task may run every 20 ms, while a reporting task runs every 200 ms. Their priorities depend on timing requirements and consequences of delay.",
          "Create a task table with task name, period, priority, estimated execution time, and deadline for a simple sensor-monitoring system.",
          [
            q("What does an RTOS scheduler select?", ["Which ready task executes", "Which component color to use", "The PCB's shape", "The battery's chemical composition"], "Which ready task executes", "The scheduler chooses among tasks according to the RTOS scheduling policy."),
            q("What is a real-time deadline?", ["The latest required time for a result or action", "A variable name", "A connector pin", "A source-code comment"], "The latest required time for a result or action", "Real-time systems must satisfy timing requirements as well as functional requirements."),
            q("What is preemption?", ["Suspending one task so another can execute", "Removing all task priorities", "Deleting program memory", "Converting an analog signal to a connector"], "Suspending one task so another can execute", "Preemptive scheduling allows an eligible task to interrupt another task's execution."),
            q("What is a task period?", ["The interval between scheduled activations of periodic work", "The length of a source-code file", "The voltage across a resistor", "The number of PCB layers"], "The interval between scheduled activations of periodic work", "A periodic task is intended to run at a defined recurring interval."),
            q("Why is average execution time insufficient for some real-time analysis?", ["Worst-case execution and blocking can determine deadline misses", "Average time always equals worst-case time", "Tasks do not consume processor time", "Deadlines never depend on timing"], "Worst-case execution and blocking can determine deadline misses", "Deadline analysis must account for demanding execution conditions and interference.")
          ]
        ),

        lesson(
          "es-w2-l2",
          "RTOS Queues, Semaphores, and Mutexes",
          "Tasks often need to exchange data and coordinate access to shared resources. RTOS synchronization mechanisms help structure this communication while preventing race conditions and uncontrolled blocking.",
          [
            {
              heading: "Queues and message passing",
              content:
                "A queue transfers messages between tasks or between an ISR and a task when supported by the RTOS API. A sensor task may place readings in a queue while a reporting task consumes them. Queue capacity and overflow behavior must be defined. Messages can be copied or represented through pointers, depending on the RTOS and API.",
            },
            {
              heading: "Semaphores and event signaling",
              content:
                "A binary semaphore can signal that an event occurred or a resource is available. A counting semaphore tracks a count of available events or resources. Their exact behavior depends on the RTOS. An ISR may use a specially permitted API to wake a task, which then performs the heavier processing outside interrupt context.",
            },
            {
              heading: "Mutexes and shared resources",
              content:
                "A mutex protects a shared resource so that only one eligible task owns it at a time. Priority inversion can occur when a high-priority task waits for a mutex held by a lower-priority task. Priority inheritance, where supported, can temporarily raise the owner's priority. Lock ordering and bounded critical sections help prevent deadlocks and long delays.",
            },
          ],
          "A sensor task can enqueue a reading, and a logging task can receive it without both tasks directly modifying the same data structure.",
          "Choose a queue, semaphore, or mutex for three scenarios: passing sensor readings, signaling an event, and protecting a shared configuration structure. Explain each choice.",
          [
            q("What is a common use of an RTOS queue?", ["Passing messages between tasks", "Changing the processor's package", "Measuring resistance without a meter", "Replacing the firmware image automatically"], "Passing messages between tasks", "Queues provide a structured way to exchange data between concurrent tasks."),
            q("What does a mutex protect?", ["A shared resource during exclusive ownership", "The color of a user interface", "Every memory address permanently", "A circuit from all possible faults"], "A shared resource during exclusive ownership", "A mutex coordinates access to a resource that should not be used concurrently."),
            q("What is priority inversion?", ["A high-priority task is delayed by a lower-priority task holding a needed resource", "A signal changes from analog to digital", "Every task receives the same deadline", "A queue automatically becomes a timer"], "A high-priority task is delayed by a lower-priority task holding a needed resource", "Priority inversion can occur when a low-priority task holds a resource required by a high-priority task."),
            q("Why must queue overflow behavior be defined?", ["Messages may be lost or rejected when capacity is reached", "Queues have infinite capacity", "It determines the board's color", "It removes the need for task synchronization"], "Messages may be lost or rejected when capacity is reached", "Finite queues need a documented strategy for handling capacity limits."),
            q("What should an ISR use to signal an RTOS task?", ["An ISR-safe API supported by the RTOS", "Any blocking API without checking", "A mutex operation that waits indefinitely", "An undocumented register write"], "An ISR-safe API supported by the RTOS", "Only APIs specifically permitted from interrupt context should be used.")
          ]
        ),

        lesson(
          "es-w2-l3",
          "Real-Time Timing, Deadlocks, and Watchdogs",
          "Predictable timing requires control over execution time, blocking, resource ownership, and recovery. Watchdogs and deadline monitoring can help detect software that has stopped making expected progress.",
          [
            {
              heading: "Timing analysis",
              content:
                "Engineers examine task periods, worst-case execution time, interrupt interference, blocking time, and deadline constraints. Excessive polling, long critical sections, and unbounded loops can delay important work. Measurements are useful, but they should be combined with analysis of worst-case conditions and the scheduler's behavior.",
            },
            {
              heading: "Deadlocks and starvation",
              content:
                "A deadlock can occur when tasks wait indefinitely for resources held by one another. Consistent lock ordering, limited lock duration, and clear ownership rules reduce the risk. Starvation occurs when a task is repeatedly denied execution or resources. Scheduling and resource policies should ensure that required work can make progress.",
            },
            {
              heading: "Watchdogs and fault recovery",
              content:
                "A watchdog detects when software fails to service it within a configured interval. A reset may recover some failures, but it does not correct their underlying causes. The design should define safe startup behavior, fault logging where possible, reset-cause analysis, and recovery of persistent state. A watchdog should be serviced only when the required system health conditions have been verified.",
            },
          ],
          "If a task must finish within 10 ms, its worst-case execution time plus relevant blocking and scheduling interference must fit within the available deadline budget.",
          "Draw a fault-handling flowchart for a stalled sensor task. Include timeout detection, logging, safe output state, and recovery.",
          [
            q("What can contribute to a missed deadline?", ["Execution time, blocking, and scheduling interference", "Only the file name", "Only the PCB color", "The number of comments in a report"], "Execution time, blocking, and scheduling interference", "Task execution and delays from other work affect whether a deadline can be met."),
            q("What is a deadlock?", ["A situation where tasks wait indefinitely for resources", "A successful sensor reading", "A type of ADC", "A fixed-width integer"], "A situation where tasks wait indefinitely for resources", "Deadlock prevents involved tasks from making progress."),
            q("What does a watchdog primarily detect?", ["Failure to service it within the expected interval", "Every possible software defect", "Incorrect component color", "Every incorrect sensor calibration"], "Failure to service it within the expected interval", "A watchdog detects a missing or late service event but cannot diagnose every fault."),
            q("Why should a watchdog not be serviced blindly?", ["The system might be unhealthy even while the service code runs", "A watchdog always damages RAM", "Servicing it removes every interrupt", "The watchdog measures resistor tolerance"], "The system might be unhealthy even while the service code runs", "Health checks help prevent a stalled or malfunctioning application from repeatedly refreshing the watchdog."),
            q("What is starvation in task scheduling?", ["A task is repeatedly denied needed execution or resources", "A task has no source code", "A task always finishes before its deadline", "A task becomes a physical connector"], "A task is repeatedly denied needed execution or resources", "Starvation occurs when a task cannot obtain sufficient execution or resources to progress.")
          ]
        ),

        lesson(
          "es-w2-l4",
          "RTOS Project Architecture and Testing",
          "A robust RTOS application needs clear task responsibilities, documented priorities, controlled data exchange, and repeatable tests. Architecture decisions should be based on the actual system requirements rather than adding concurrency without a clear reason.",
          [
            {
              heading: "Task decomposition",
              content:
                "Separate activities with different timing, resource, or responsibility requirements. A typical monitoring system may contain sensor acquisition, data processing, communication, and diagnostics tasks. Define which task owns each resource and how data moves between tasks. Avoid creating many tasks that perform trivial work if they increase stack use and coordination overhead without a benefit.",
            },
            {
              heading: "Testing concurrent behavior",
              content:
                "Test normal operation, delayed responses, queue overflow, invalid sensor values, and communication loss. Measure response time and task execution where the platform permits. Use logging carefully because excessive logging can change timing. Test the system under representative load and include cases where multiple events occur close together.",
            },
            {
              heading: "Configuration and documentation",
              content:
                "Record RTOS version, configuration options, task stack sizes, priorities, tick rate, and memory usage. Document assumptions about interrupt priorities and API restrictions. Review stack high-water marks and failure handling using the available RTOS tools. Configuration changes should be version controlled and tested because they can alter timing and memory behavior.",
            },
          ],
          "A sensor-monitoring project may use one task for acquisition, another for data processing, and a third for reporting through a serial connection.",
          "Create a task architecture diagram for a sensor monitor. Include data-flow arrows, task priorities, synchronization mechanisms, and at least four test cases.",
          [
            q("What is a good reason to create separate RTOS tasks?", ["Different activities have distinct timing or responsibility needs", "Every function must become a task", "Tasks automatically eliminate bugs", "Task count should be maximized regardless of memory"], "Different activities have distinct timing or responsibility needs", "Task separation is useful when it improves scheduling or responsibility boundaries."),
            q("Why can excessive logging be problematic in a real-time system?", ["It can add execution time and change timing behavior", "It guarantees shorter response times", "It eliminates all memory usage", "It automatically validates the scheduler"], "It can add execution time and change timing behavior", "Logging consumes resources and may affect deadlines."),
            q("What is a useful test for concurrent software?", ["Check behavior when multiple events occur close together", "Check only the source-code font", "Assume queues never fill", "Ignore delayed tasks"], "Check behavior when multiple events occur close together", "Closely spaced events can reveal synchronization and buffering problems."),
            q("Why should task stack usage be monitored?", ["Stack exhaustion can corrupt memory or cause faults", "Stack size determines PCB color", "All tasks use unlimited stack", "Stack monitoring replaces functional testing"], "Stack exhaustion can corrupt memory or cause faults", "Stack resources are finite and must be sufficient for the task's execution paths."),
            q("What should be recorded for a reproducible RTOS build?", ["Relevant RTOS configuration and version information", "Only the developer's preferred editor theme", "Only the enclosure dimensions", "No build settings"], "Relevant RTOS configuration and version information", "Configuration records help reproduce and troubleshoot the firmware build.")
          ]
        ),
      ],
    },

    {
      title: "Week 3: Device Drivers and Hardware Interfaces",
      assignment:
        "Design a driver interface for a simulated sensor. Include initialization, reading, error reporting, timeout handling, and a small test harness. Explain which functions are hardware-independent and which depend on the selected microcontroller.",

      lessons: [
        lesson(
          "es-w3-l1",
          "Device Driver Architecture",
          "A device driver provides a software interface for controlling or communicating with a hardware peripheral. Good driver design separates hardware-specific operations from higher-level application logic.",
          [
            {
              heading: "Driver responsibilities",
              content:
                "A driver may initialize a peripheral, configure operating modes, start transfers, read status, retrieve data, handle errors, and shut down safely. The driver must follow the device data sheet and the microcontroller's reference manual. Error codes and return values should communicate failures rather than silently returning invalid data.",
            },
            {
              heading: "Layered architecture",
              content:
                "A hardware abstraction layer provides common interfaces for peripheral access. A device-specific driver implements the protocol and register behavior of a sensor or other component. The application uses higher-level operations such as read_temperature rather than manipulating registers throughout the code. This separation makes code easier to test and port to different hardware.",
            },
            {
              heading: "Initialization and lifecycle",
              content:
                "Initialization should configure the required pins, clocks, buses, and device settings in the correct order. Drivers should define whether initialization can be repeated and how partial failure is handled. A robust interface documents valid call sequences, timeouts, buffer ownership, concurrency expectations, and the device state after an error.",
            },
          ],
          "An application can call sensor_read() and receive a status code plus a measurement, while the driver handles the sensor's bus transactions.",
          "Design a driver API with initialize, read, configure, and shutdown operations. Define return codes for success, timeout, invalid arguments, and communication failure.",
          [
            q("What is the main purpose of a device driver?", ["Provide software control and access to a hardware device", "Replace the physical sensor", "Guarantee every bus transfer succeeds", "Set the product's marketing name"], "Provide software control and access to a hardware device", "Drivers implement the software interface to hardware behavior."),
            q("What is a benefit of hardware abstraction?", ["It separates application logic from hardware details", "It removes the need for device documentation", "It guarantees zero execution time", "It prevents all communication errors"], "It separates application logic from hardware details", "An abstraction layer can make applications easier to test and port."),
            q("Why should a driver report errors explicitly?", ["Applications need to distinguish failures from valid data", "Error codes increase sensor resolution", "Every operation always succeeds", "Errors cannot occur in digital circuits"], "Applications need to distinguish failures from valid data", "Explicit status reporting enables appropriate application-level recovery."),
            q("What should driver initialization account for?", ["Required hardware configuration and initialization order", "Only source-code indentation", "Only the user interface theme", "No device-specific requirements"], "Required hardware configuration and initialization order", "A device often requires clocks, pins, buses, and registers to be configured correctly."),
            q("What should a driver interface document?", ["Timeouts, errors, ownership, and valid call sequences", "Only the developer's name", "Only the circuit-board color", "No information about concurrency"], "Timeouts, errors, ownership, and valid call sequences", "Clear interface contracts prevent misuse and simplify debugging.")
          ]
        ),

        lesson(
          "es-w3-l2",
          "GPIO, Timers, ADC, and PWM Drivers",
          "Microcontroller peripherals provide digital input/output, timing, analog measurement, and pulse-width modulation. Drivers configure these peripherals and present controlled interfaces to the application.",
          [
            {
              heading: "GPIO and timers",
              content:
                "GPIO pins can operate as inputs or outputs, with configurable modes and sometimes pull-up or pull-down resistors. Timers count clock events and can generate periodic interrupts, capture input transitions, or produce output compare events. Clock configuration and timer prescalers affect timing, so the actual register settings must be checked against the device documentation.",
            },
            {
              heading: "Analog-to-digital conversion",
              content:
                "An ADC converts an analog input into a digital code. Resolution, reference voltage, input range, sampling time, source impedance, and conversion rate affect results. For an ideal N-bit ADC, there are 2^N possible codes. The relationship between code and input voltage depends on the ADC transfer characteristics and reference configuration.",
            },
            {
              heading: "Pulse-width modulation",
              content:
                "PWM generates a repeating digital signal with an adjustable duty cycle. Duty cycle is the percentage of each period for which the signal is active. PWM is used for LED brightness, motor-control interfaces, and other applications when supported by the hardware. Frequency and duty cycle must be selected to suit the load and device requirements.",
            },
          ],
          "An ideal 10-bit ADC has 1024 possible output codes. If its input range is 0–3.3 V, its nominal code spacing is approximately 3.3/1024 V.",
          "Create a peripheral configuration table for GPIO, a periodic timer, an ADC channel, and a PWM output. Identify the expected settings and how each would be tested.",
          [
            q("What does a GPIO peripheral control?", ["Configurable digital input and output pins", "Cloud database storage", "The compiler's grammar", "PCB fabrication materials"], "Configurable digital input and output pins", "GPIO supports digital input and output functions."),
            q("How many possible codes does an ideal 10-bit ADC have?", ["10", "100", "1024", "4096"], "1024", "An N-bit converter has 2^N possible codes; 2^10 equals 1024."),
            q("What does PWM duty cycle describe?", ["The fraction of a period for which the signal is active", "The ADC's number of bits", "The memory address of a sensor", "The number of source files"], "The fraction of a period for which the signal is active", "Duty cycle represents the active portion of each PWM period."),
            q("What can a hardware timer provide?", ["Periodic events and timing measurements", "Guaranteed cloud access", "Automatic source-code generation", "Unlimited RAM"], "Periodic events and timing measurements", "Timers can count events, trigger interrupts, and measure intervals."),
            q("What can affect ADC measurement quality?", ["Reference voltage, input range, and sampling conditions", "Only the variable name", "Only the PCB's label", "Only the programming language's popularity"], "Reference voltage, input range, and sampling conditions", "ADC results depend on the converter configuration and analog input conditions.")
          ]
        ),

        lesson(
          "es-w3-l3",
          "UART, I2C, and SPI Driver Concepts",
          "UART, I2C, and SPI are common interfaces for communication between embedded devices. A driver must configure the peripheral and implement the protocol's transfer and error-handling requirements.",
          [
            {
              heading: "UART serial communication",
              content:
                "UART commonly sends asynchronous serial data using transmit and receive signals. Both ends must agree on baud rate, data bits, parity, and stop bits. UART does not inherently define a universal packet format or device-addressing scheme. Applications often add framing, checksums, and command formats to support reliable communication.",
            },
            {
              heading: "I2C bus operation",
              content:
                "I2C typically uses SDA for data and SCL for clock. Devices share the bus and are selected using addresses, with details depending on the device and addressing mode. Pull-up resistors are commonly required because the bus uses open-drain or open-collector signaling. Capacitance, speed, pull-up values, and device compatibility affect signal quality.",
            },
            {
              heading: "SPI bus operation",
              content:
                "SPI commonly uses clock, controller-out data, controller-in data, and a chip-select signal. It supports full-duplex transfers in common configurations and can provide high throughput. Clock polarity, clock phase, bit order, and chip-select timing must match the peripheral. Unlike I2C, SPI does not define one universal addressing protocol shared by all devices.",
            },
          ],
          "A UART link configured for 115200 baud must use compatible serial settings at both endpoints.",
          "Create a comparison table for UART, I2C, and SPI covering signal lines, addressing, typical use cases, and configuration requirements.",
          [
            q("Which UART parameter describes the signaling rate?", ["Baud rate", "ADC resolution", "PWM duty cycle", "Stack size"], "Baud rate", "UART endpoints must use compatible communication timing settings."),
            q("Which two signals are commonly used by I2C?", ["SDA and SCL", "TX and RX only", "MOSI and MISO only", "RESET and BOOT only"], "SDA and SCL", "I2C uses a serial data line and a serial clock line."),
            q("Which signal commonly selects a peripheral in SPI?", ["Chip select", "I2C address byte only", "UART parity bit", "ADC reference"], "Chip select", "SPI devices are commonly selected using a dedicated chip-select signal."),
            q("What must UART endpoints normally agree on?", ["Baud rate and frame settings", "PCB layer count", "ADC reference only", "RTOS task names"], "Baud rate and frame settings", "Matching serial frame settings are needed for correct UART interpretation."),
            q("Why may I2C require pull-up resistors?", ["Its bus signaling commonly uses open-drain outputs", "It always sends data without wires", "It uses a separate clock for every bit", "It cannot connect multiple devices"], "Its bus signaling commonly uses open-drain outputs", "Pull-ups establish the high bus level for open-drain I2C signaling.")
          ]
        ),

        lesson(
          "es-w3-l4",
          "Driver Testing, Debugging, and Error Handling",
          "Driver tests verify peripheral configuration, normal transfers, edge cases, and recovery from hardware errors. Since hardware behavior may be difficult to reproduce, structured logging and simulated dependencies can improve debugging.",
          [
            {
              heading: "Unit tests and hardware tests",
              content:
                "Unit tests check isolated logic such as data conversion, parameter validation, and packet parsing. Hardware-in-the-loop tests exercise the actual peripheral and connected device. A fake or mock bus can simulate responses and errors, while hardware tests reveal timing and electrical issues that a software-only test cannot capture.",
            },
            {
              heading: "Timeouts and recovery",
              content:
                "Every operation that waits for external hardware should have a documented timeout where practical. A timeout prevents indefinite waiting when a device is absent or unresponsive. Recovery may include resetting a peripheral, retrying a bounded number of times, reinitializing a device, or reporting a persistent fault. Retries must be chosen carefully because some commands are not safe to repeat.",
            },
            {
              heading: "Debugging evidence",
              content:
                "Record status codes, bus state, timeout occurrence, and relevant configuration. A logic analyzer can show digital transitions, while an oscilloscope can reveal electrical waveform quality. Avoid relying on logs alone: incorrect clock settings, signal integrity, power problems, and wiring faults can produce similar symptoms. Change one factor at a time and rerun the same test.",
            },
          ],
          "A driver test can simulate a sensor that does not respond and verify that the function returns a timeout rather than waiting forever.",
          "Write pseudocode for a driver read function that validates inputs, starts a transfer, applies a timeout, checks status, and reports an error when necessary.",
          [
            q("What is a unit test suited to checking?", ["Isolated software logic and parameter validation", "Every electrical property of a real PCB", "The enclosure's mechanical strength", "The battery chemistry"], "Isolated software logic and parameter validation", "Unit tests can validate software behavior without requiring the complete physical system."),
            q("Why should hardware waits have suitable timeouts?", ["To avoid indefinite blocking when hardware fails to respond", "To make every transfer succeed", "To increase the bus voltage", "To remove the need for error handling"], "To avoid indefinite blocking when hardware fails to respond", "Timeouts let software detect and handle operations that do not complete."),
            q("What does a logic analyzer help inspect?", ["Digital signal transitions and timing", "Only analog component temperature", "The source-code indentation", "The cloud billing plan"], "Digital signal transitions and timing", "A logic analyzer captures digital signals for protocol and timing analysis."),
            q("Why can retrying every failed command be unsafe?", ["Some operations may not be safe to repeat", "Retries always delete firmware", "Hardware errors never happen twice", "Retries eliminate all race conditions"], "Some operations may not be safe to repeat", "Repeated commands can have unintended effects if the operation is not idempotent."),
            q("What is a benefit of changing one diagnostic factor at a time?", ["It helps identify which change affects the result", "It guarantees zero faults", "It eliminates the need for measurements", "It automatically calibrates the instrument"], "It helps identify which change affects the result", "Controlled experiments make troubleshooting results easier to interpret.")
          ]
        ),
      ],
    },

    {
      title: "Week 4: Communication Protocols and Final Project",
      assignment:
        "Complete a microcontroller monitoring project using Embedded C, an organized task or event loop, a reusable driver interface, and one communication protocol. Provide the architecture, source code, test plan, measured or simulated results, error-handling strategy, and final report.",

      lessons: [
        lesson(
          "es-w4-l1",
          "Communication Protocols and Packet Design",
          "Embedded communication requires agreement on message structure, timing, addressing, and error handling. Protocol design defines how devices interpret data and recover when messages are corrupted or incomplete.",
          [
            {
              heading: "Framing and packet structure",
              content:
                "A packet may contain a start marker, message type, address, payload length, payload, sequence number, and checksum or cyclic redundancy check. Not every protocol requires every field. The receiver needs a defined way to identify packet boundaries, validate length, and reject malformed messages. A robust parser should handle partial, repeated, or corrupted input.",
            },
            {
              heading: "Checksums and CRC",
              content:
                "A checksum or CRC can detect many accidental data errors. The exact algorithm, initialization, bit order, and coverage must be agreed upon by both endpoints. Error detection does not automatically correct the data or authenticate the sender. Security-sensitive systems may require cryptographic authentication in addition to error-detection mechanisms.",
            },
            {
              heading: "Timeouts and retries",
              content:
                "Protocols may define acknowledgments, sequence numbers, retries, and timeout behavior. A retry can recover from temporary loss but may duplicate an operation if the receiver already processed the original message. Sequence numbers and idempotent command design can help manage duplicates. The application should define what happens after repeated failure.",
            },
          ],
          "A sensor packet might contain a message type, payload length, sensor value, sequence number, and CRC. The receiver validates the frame before using the measurement.",
          "Design a packet format for transmitting a sensor value. Define the fields, byte order, length validation, error detection, and behavior for invalid packets.",
          [
            q("What is the purpose of packet framing?", ["Identify message boundaries", "Increase the physical size of the microcontroller", "Set the PCB color", "Replace all timing requirements"], "Identify message boundaries", "Framing lets a receiver determine where messages begin and end."),
            q("What does a CRC primarily help detect?", ["Accidental data corruption", "Every malicious sender", "Every hardware failure", "Incorrect component placement"], "Accidental data corruption", "A CRC detects many common transmission errors but does not authenticate the sender."),
            q("Why should a receiver validate a payload length?", ["To reject malformed or out-of-bounds messages", "To increase the supply voltage", "To change the clock frequency automatically", "To avoid using buffers"], "To reject malformed or out-of-bounds messages", "Length validation helps prevent invalid parsing and memory access."),
            q("What problem can repeated commands cause?", ["An operation may be performed more than once", "Every packet becomes authenticated", "The CRC becomes a voltage regulator", "The bus automatically changes protocol"], "An operation may be performed more than once", "A retry can duplicate an operation if the original request was already processed."),
            q("Does a CRC authenticate the sender?", ["Yes, for every threat model", "No, it detects transmission errors but does not prove identity", "Yes, when the payload is short", "No, because CRCs cannot detect any errors"], "No, it detects transmission errors but does not prove identity", "A CRC is an error-detection mechanism, not cryptographic authentication.")
          ]
        ),

        lesson(
          "es-w4-l2",
          "Embedded Communication Debugging",
          "Communication problems may arise from software configuration, wiring, signal integrity, addressing, timing, or device state. Effective debugging combines protocol knowledge with measurements and repeatable tests.",
          [
            {
              heading: "Configuration checks",
              content:
                "Confirm baud rate, clock polarity and phase, bus speed, address format, voltage compatibility, pin mapping, and device initialization. Read the peripheral and connected-device documentation. Two devices can use the same protocol but still fail to communicate because their settings or electrical requirements differ.",
            },
            {
              heading: "Electrical and timing checks",
              content:
                "Use a logic analyzer to inspect protocol timing and an oscilloscope when analog waveform quality matters. Check rise times, signal levels, ringing, and grounding where relevant. Long wires and excessive bus capacitance can affect communication. Use appropriate measurement connections and equipment limits, and avoid probing in a way that creates shorts.",
            },
            {
              heading: "Protocol-level diagnostics",
              content:
                "Check whether a message was transmitted, received, acknowledged, parsed, and accepted by the application. Record status codes and timestamps. A missing acknowledgment can indicate a physical, configuration, addressing, or software issue. Build a diagnostic sequence that tests each layer instead of assuming every communication failure has the same cause.",
            },
          ],
          "If an I2C device does not acknowledge its address, check power, ground, pull-ups, wiring, address configuration, and bus initialization before changing unrelated code.",
          "Create a diagnostic checklist for a nonresponsive I2C sensor. Separate electrical checks, configuration checks, protocol observations, and application-level checks.",
          [
            q("What should be checked when two UART devices cannot communicate?", ["Compatible serial settings and wiring", "Only the PCB's color", "Only the operating system's wallpaper", "The sensor's marketing name"], "Compatible serial settings and wiring", "UART communication requires compatible frame settings and correct signal connections."),
            q("What can a logic analyzer reveal?", ["Protocol transitions and relative timing", "The chemical composition of a battery", "Every source-code bug", "The product's lifetime with certainty"], "Protocol transitions and relative timing", "Captured digital transitions help identify framing and timing issues."),
            q("Why can excessive bus capacitance affect I2C?", ["It can slow signal transitions", "It guarantees stronger high levels", "It removes the need for pull-ups", "It converts I2C into UART"], "It can slow signal transitions", "Bus capacitance affects rise time and may prevent signals meeting timing requirements."),
            q("What is a useful diagnostic sequence?", ["Check transmission, reception, acknowledgment, parsing, and application handling", "Replace every component immediately", "Skip all electrical checks", "Change the protocol after every failed message"], "Check transmission, reception, acknowledgment, parsing, and application handling", "Layer-by-layer checks help isolate where the communication path fails."),
            q("Why should instrument grounding and limits be considered?", ["Incorrect connections can disturb the circuit or create hazards", "Grounding never matters", "It changes the protocol specification", "It guarantees the software has no bugs"], "Incorrect connections can disturb the circuit or create hazards", "Measurement equipment must be connected according to its specifications and the circuit's grounding arrangement.")
          ]
        ),

        lesson(
          "es-w4-l3",
          "Embedded Reliability, Security, and Maintainability",
          "Embedded firmware must remain understandable and recover predictably from faults. Reliability and security depend on design choices across startup, updates, communications, memory use, and error handling.",
          [
            {
              heading: "Defensive programming",
              content:
                "Validate inputs, bound buffer lengths, check return values, and define behavior for invalid sensor readings. Avoid uncontrolled recursion and unbounded waits where resources are constrained. Use assertions and diagnostic logging appropriately. Error handling should lead to a documented safe state rather than leaving outputs in an unknown condition.",
            },
            {
              heading: "Secure firmware practices",
              content:
                "Only accept commands and updates through authorized mechanisms. Protect secrets, validate external input, and consider secure boot or signed firmware updates when supported by the platform. Communication integrity checks such as CRC are not substitutes for authentication. Limit debug access in deployed devices and keep dependencies and firmware versions documented.",
            },
            {
              heading: "Maintainability and verification",
              content:
                "Use clear interfaces, consistent naming, code reviews, version control, and automated tests. Separate application logic from hardware-specific code so that modules can be tested independently. Record requirements and link them to tests. Review worst-case timing and memory use after significant changes because a functional modification can affect real-time behavior.",
            },
          ],
          "A communication handler should reject an oversized packet before copying data into a fixed-size buffer.",
          "Review a small embedded-program design and list ten reliability or security checks, including input validation, bounded waiting, update verification, and error handling.",
          [
            q("Why should external packet lengths be validated?", ["To prevent out-of-bounds memory access", "To increase the radio frequency automatically", "To guarantee every packet is authentic", "To remove the need for buffers"], "To prevent out-of-bounds memory access", "Untrusted length values must be checked before memory operations."),
            q("What does secure firmware update verification help establish?", ["That an update is authorized and has valid integrity evidence", "That the device never needs testing", "That every sensor reading is accurate", "That the PCB has no solder defects"], "That an update is authorized and has valid integrity evidence", "Signature verification can help prevent unauthorized firmware installation."),
            q("Why is a CRC not enough to authenticate a command?", ["A CRC is not a cryptographic proof of sender identity", "A CRC always encrypts the payload", "A CRC changes the processor architecture", "A CRC prevents every replay attack"], "A CRC is not a cryptographic proof of sender identity", "Error detection and cryptographic authentication solve different problems."),
            q("What is a benefit of version control?", ["It tracks changes and supports reproducible collaboration", "It removes all runtime errors", "It increases RAM capacity", "It replaces the device data sheet"], "It tracks changes and supports reproducible collaboration", "Version control records source changes and helps teams review and reproduce builds."),
            q("Why should memory and timing be reviewed after major changes?", ["The changes may affect resource use and deadline behavior", "Memory and timing never change", "The compiler ignores all source changes", "Testing is unnecessary for embedded code"], "The changes may affect resource use and deadline behavior", "New features can alter execution time, stack usage, and memory consumption.")
          ]
        ),

        lesson(
          "es-w4-l4",
          "Final Project: Microcontroller Monitoring System",
          "The final project integrates Embedded C, scheduling concepts, driver interfaces, and communication protocols into a testable embedded application. The objective is to demonstrate a clear architecture and verified behavior rather than simply produce a working demonstration.",
          [
            {
              heading: "Project requirements and architecture",
              content:
                "Define a measurable use case such as temperature monitoring, light-level reporting, or simulated environmental sensing. Identify inputs, outputs, sampling interval, expected ranges, communication method, and failure behavior. Draw a block diagram and divide the firmware into acquisition, processing, communication, and diagnostics modules. Use an RTOS only if its task and synchronization model is appropriate for the project.",
            },
            {
              heading: "Implementation and integration",
              content:
                "Implement input validation, a driver interface, bounded waits, and explicit error reporting. Choose UART, I2C, or SPI based on the devices and requirements. If hardware is unavailable, use a clearly labeled simulation for the relevant module. Verify that the application can handle invalid data, missing devices, and communication failures without pretending that simulated tests are physical measurements.",
            },
            {
              heading: "Verification and final report",
              content:
                "Prepare test cases for normal operation, boundary values, invalid input, timeout behavior, and recovery. Record actual or simulated results with their status clearly identified. Document build configuration, timing assumptions, resource limitations, and known issues. The final report should explain design decisions, test evidence, and improvements that would be required for a production-quality device.",
            },
          ],
          "A sensor monitor may sample every 100 ms, reject invalid readings, and transmit a validated record over UART. The report should show how timing and communication were tested.",
          "Build or simulate a sensor-monitoring system. Submit the architecture diagram, Embedded C source, driver API, protocol description, test cases, results table, and a short explanation of timing and error recovery.",
          [
            q("What should be defined before implementation?", ["Measurable requirements and acceptance criteria", "A conclusion that all tests passed", "Random peripheral settings", "A fixed result for every test"], "Measurable requirements and acceptance criteria", "Requirements guide architecture decisions and determine how the implementation will be evaluated."),
            q("What should happen when sensor data is outside its valid range?", ["Handle it according to a documented error policy", "Always transmit it as valid", "Silently overwrite unrelated memory", "Increase the supply voltage without checking"], "Handle it according to a documented error policy", "Validation and explicit fault handling prevent invalid data from being treated as trustworthy."),
            q("What must be disclosed when simulated hardware is used?", ["Which results are simulated rather than physically measured", "Nothing about the testing method", "That the device passed every physical test", "Only the name of the code editor"], "Which results are simulated rather than physically measured", "Clear reporting prevents simulated evidence from being mistaken for hardware measurements."),
            q("Which test checks recovery from a missing device?", ["A communication-timeout test", "A source-code formatting test only", "A PCB color inspection", "A test that never exercises communication"], "A communication-timeout test", "A timeout test verifies the software's response when the expected device does not respond."),
            q("What makes a final embedded project report useful?", ["Architecture, implementation, test evidence, and limitations", "Only a screenshot of the editor", "Only the project title", "A list of features without verification"], "Architecture, implementation, test evidence, and limitations", "A useful engineering report connects design decisions with test results and known constraints.")
          ]
        ),
      ],
    },
  ],
};

export default embeddedSystemsCourse;


export const rtosCourse = {
  title: "Real-Time Operating Systems (RTOS)",
  description:
    "Learn RTOS fundamentals, task scheduling, multitasking, inter-task communication, synchronization, interrupts, memory management, and embedded RTOS development.",
  weeks: [
    {
      title: "Week 1: RTOS Fundamentals",
      description:
        "Understand real-time systems, RTOS architecture, tasks, and scheduling basics.",
      lessons: [
        {
          title: "Lesson 1: Introduction to RTOS",
          content: `
A Real-Time Operating System (RTOS) is an operating system designed to provide predictable responses to events within specified time limits.

RTOS is widely used in embedded systems where the timing of an operation is as important as its correctness.

Examples:
- Automotive engine control systems
- Industrial automation
- Medical monitoring devices
- Robotics
- Smart appliances

What is a real-time system?
A real-time system must produce a correct result within a defined time constraint. A result that arrives too late may be considered incorrect, even if its value is right.

Types of real-time systems:

1. Hard real-time system:
Missing a deadline is considered a system failure. Example: a critical flight-control function.

2. Firm real-time system:
A result arriving after its deadline has little or no value, but an occasional missed deadline may not destroy the entire system.

3. Soft real-time system:
Occasional deadline misses are acceptable, although performance may decrease. Example: audio or video streaming.

Main functions of an RTOS:
- Task scheduling
- Task switching
- Interrupt handling
- Inter-task communication
- Synchronization
- Timing and delay management
- Resource management

RTOS examples include FreeRTOS, Zephyr, and ThreadX.

Remember: RTOS does not necessarily mean the system is faster than every general-purpose OS. Its key feature is predictable, bounded timing behavior.
          `,
          quiz: [
            {
              question: "What is the main purpose of an RTOS?",
              options: [
                "To provide predictable timing for tasks",
                "To increase screen resolution",
                "To store files permanently",
                "To design circuit boards"
              ],
              answer: "To provide predictable timing for tasks",
              explanation:
                "An RTOS is designed to manage tasks and respond to events within timing constraints."
            },
            {
              question: "Which type of real-time system treats a missed deadline as a system failure?",
              options: [
                "Soft real-time",
                "Hard real-time",
                "Batch processing",
                "Time-sharing only"
              ],
              answer: "Hard real-time",
              explanation:
                "Hard real-time systems require critical operations to meet their specified deadlines."
            },
            {
              question: "Which is an example of an RTOS?",
              options: [
                "FreeRTOS",
                "HTML",
                "MySQL",
                "CSS"
              ],
              answer: "FreeRTOS",
              explanation:
                "FreeRTOS is a real-time operating system kernel commonly used in embedded devices."
            },
            {
              question: "In a real-time system, what can make a result incorrect?",
              options: [
                "Arriving after a required deadline",
                "Using a small processor",
                "Having a short variable name",
                "Using a sensor"
              ],
              answer: "Arriving after a required deadline",
              explanation:
                "Real-time correctness includes meeting timing requirements, not just producing the right value."
            },
            {
              question: "Which system may tolerate occasional timing delays with reduced quality?",
              options: [
                "Hard real-time system",
                "Soft real-time system",
                "Deadline-free system only",
                "Offline compiler"
              ],
              answer: "Soft real-time system",
              explanation:
                "Soft real-time systems can tolerate some missed deadlines, although quality or performance may suffer."
            }
          ]
        },
        {
          title: "Lesson 2: RTOS Architecture",
          content: `
RTOS architecture describes how the kernel, hardware, tasks, and services work together.

Main components:

1. Kernel:
The core component responsible for task scheduling, task switching, synchronization, and communication.

2. Scheduler:
Chooses which ready task should execute according to the scheduling policy.

3. Interrupt Service Routine (ISR):
A function that handles a hardware or software interrupt. ISRs should generally be short so important work is not delayed.

4. Device drivers:
Software modules that control hardware peripherals such as UART, SPI, I2C, timers, and GPIO.

5. Memory management:
Controls allocation and use of memory, depending on the RTOS configuration.

6. Application tasks:
Independent execution units that perform application functions, such as reading sensors or controlling a motor.

Typical execution flow:
A sensor generates an interrupt. The ISR records or signals the event. A task wakes up, processes the data, and updates the output.

The kernel is not the same as the entire application. Application code uses kernel services to coordinate its work.
          `,
          quiz: [
            {
              question: "Which component selects the next ready task to execute?",
              options: [
                "Scheduler",
                "GPIO pin",
                "Battery",
                "Display driver"
              ],
              answer: "Scheduler",
              explanation:
                "The scheduler selects a task according to the RTOS scheduling policy."
            },
            {
              question: "What is the main role of a device driver?",
              options: [
                "Control or communicate with a hardware peripheral",
                "Replace the processor",
                "Create application requirements",
                "Remove all interrupts"
              ],
              answer: "Control or communicate with a hardware peripheral",
              explanation:
                "Drivers provide software interfaces for using hardware devices."
            },
            {
              question: "What does an ISR handle?",
              options: [
                "An interrupt event",
                "Only database queries",
                "Only source-code formatting",
                "Permanent file storage"
              ],
              answer: "An interrupt event",
              explanation:
                "An interrupt service routine responds to an interrupt from hardware or software."
            },
            {
              question: "Which component provides core services such as task management?",
              options: [
                "RTOS kernel",
                "Sensor enclosure",
                "Power connector",
                "PCB solder mask"
              ],
              answer: "RTOS kernel",
              explanation:
                "The kernel provides the fundamental operating-system services used by tasks."
            },
            {
              question: "Why should interrupt service routines usually be short?",
              options: [
                "To reduce delays to other important work",
                "To increase the number of source files",
                "To prevent every task from being created",
                "To eliminate the need for a scheduler"
              ],
              answer: "To reduce delays to other important work",
              explanation:
                "Long ISRs can delay other interrupts and task execution, increasing response latency."
            }
          ]
        },
        {
          title: "Lesson 3: Tasks and Task States",
          content: `
A task is an independently scheduled unit of execution in an RTOS. Some RTOS documentation uses the term thread.

For example, an embedded controller may have:
- A sensor-reading task
- A communication task
- A motor-control task
- A diagnostic task

Common task states:

1. Running:
The task is currently executing on the processor.

2. Ready:
The task can execute but is waiting for processor time.

3. Blocked:
The task is waiting for an event, a delay to expire, or a resource.

4. Suspended:
The task has been explicitly suspended and is not eligible to run until resumed.

A task usually has its own stack and task-control information. The RTOS stores information needed to pause and resume execution.

Task creation typically specifies a task function, stack size, priority, and sometimes parameters.

A blocked task should not continuously consume processor time while waiting for an event. Blocking allows other ready tasks to run.
          `,
          quiz: [
            {
              question: "What is a task in an RTOS?",
              options: [
                "An independently scheduled unit of execution",
                "A physical resistor",
                "A permanent storage chip",
                "A network cable"
              ],
              answer: "An independently scheduled unit of execution",
              explanation:
                "A task or thread represents a unit of work managed by the scheduler."
            },
            {
              question: "Which task state means the task is currently executing?",
              options: [
                "Blocked",
                "Suspended",
                "Running",
                "Deleted"
              ],
              answer: "Running",
              explanation:
                "A running task is the task currently using the processor."
            },
            {
              question: "A task waiting for a queue message is commonly in which state?",
              options: [
                "Blocked",
                "Running continuously",
                "Ready at all times",
                "Terminated"
              ],
              answer: "Blocked",
              explanation:
                "A task waiting for an event or queue data is generally blocked until the wait condition is satisfied."
            },
            {
              question: "What does a task priority help determine?",
              options: [
                "Which ready task should receive processor time",
                "The physical size of the processor",
                "The color of the circuit board",
                "The number of sensor wires"
              ],
              answer: "Which ready task should receive processor time",
              explanation:
                "Priority is an input to scheduling decisions in priority-based RTOS configurations."
            },
            {
              question: "Why does a task need a stack?",
              options: [
                "To hold call information and local execution data",
                "To replace the scheduler",
                "To measure the supply voltage directly",
                "To store the entire operating system permanently"
              ],
              answer: "To hold call information and local execution data",
              explanation:
                "A task's stack commonly stores return addresses, local variables, and other execution context."
            }
          ]
        },
        {
          title: "Lesson 4: Task Scheduling",
          content: `
Task scheduling determines which ready task executes next.

Common scheduling approaches:

1. Preemptive scheduling:
A higher-priority ready task can interrupt a lower-priority running task.

2. Cooperative scheduling:
A task continues until it yields, blocks, or otherwise gives up execution according to the system design.

3. Round-robin scheduling:
Tasks of the same priority share processor time in rotating turns, often using time slices.

4. Priority-based scheduling:
The scheduler chooses tasks according to their assigned priorities. Exact behavior depends on the RTOS configuration.

Example:
Task A has high priority and reads an emergency sensor. Task B has lower priority and updates a display. If Task A becomes ready in a preemptive priority-based system, it can preempt Task B.

Scheduling must be designed carefully. A high-priority task that never blocks or yields may prevent lower-priority tasks from running.

A deadline is the time by which an operation must complete. Worst-case execution time (WCET) is the maximum execution time considered under specified assumptions. WCET and scheduling analysis help assess whether deadlines can be met.
          `,
          quiz: [
            {
              question: "What happens in preemptive scheduling when a higher-priority task becomes ready?",
              options: [
                "It may preempt a lower-priority running task",
                "It must wait until the device is powered off",
                "All tasks are permanently deleted",
                "The processor changes its clock hardware automatically"
              ],
              answer: "It may preempt a lower-priority running task",
              explanation:
                "In a preemptive priority-based configuration, a higher-priority ready task can take processor time from a lower-priority task."
            },
            {
              question: "What is the purpose of round-robin scheduling?",
              options: [
                "Share processor time among tasks in rotation",
                "Permanently disable task switching",
                "Assign every task identical source code",
                "Remove all task priorities in every RTOS"
              ],
              answer: "Share processor time among tasks in rotation",
              explanation:
                "Round-robin scheduling gives eligible tasks turns, commonly among tasks of equal priority."
            },
            {
              question: "What does WCET stand for?",
              options: [
                "Worst-Case Execution Time",
                "Wireless Clock Encoding Type",
                "Working Circuit Evaluation Test",
                "Window Control Execution Task"
              ],
              answer: "Worst-Case Execution Time",
              explanation:
                "WCET estimates the maximum execution time for a task or code segment under specified assumptions."
            },
            {
              question: "What is a deadline in a real-time task?",
              options: [
                "The required completion time limit",
                "The number of variables in a task",
                "The physical length of a circuit",
                "The task's source-code filename"
              ],
              answer: "The required completion time limit",
              explanation:
                "A deadline specifies when a task or operation must finish."
            },
            {
              question: "What risk can occur if a high-priority task never blocks or yields?",
              options: [
                "Lower-priority tasks may be starved",
                "All interrupts disappear permanently",
                "The stack automatically becomes unlimited",
                "The processor no longer executes instructions"
              ],
              answer: "Lower-priority tasks may be starved",
              explanation:
                "A continuously runnable high-priority task can prevent lower-priority tasks from receiving processor time."
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: Communication and Synchronization",
      description:
        "Learn queues, semaphores, mutexes, shared resources, and deadlocks.",
      lessons: [
        {
          title: "Lesson 5: Inter-Task Communication",
          content: `
Inter-task communication (ITC) allows tasks to exchange information or signal events.

Common mechanisms include:

1. Queues:
Queues transfer data between tasks, often in FIFO order. Some RTOS queues also support sending from interrupt context using special APIs.

2. Task notifications:
A lightweight mechanism in some RTOS kernels for signaling a task or passing a small amount of information.

3. Shared memory:
Two or more tasks access a common memory region. Access must be coordinated when data can be modified concurrently.

4. Event flags or event groups:
Represent events as bits. A task can wait for one or more specified events.

Example:
A sensor task reads temperature and sends the value to a logging task through a queue. The logging task receives the data and records it.

Queues are useful when the receiver may not be ready at the moment the sender produces data. Queue capacity must be considered because a full queue may cause a send operation to fail or wait, depending on the API.
          `,
          quiz: [
            {
              question: "Which RTOS mechanism is commonly used to transfer data between tasks?",
              options: [
                "Queue",
                "Heat sink",
                "Resistor",
                "Oscillator crystal only"
              ],
              answer: "Queue",
              explanation:
                "Queues can pass messages or data from one task to another."
            },
            {
              question: "What is one risk of using shared memory without coordination?",
              options: [
                "Tasks may interfere with each other's data updates",
                "The processor automatically gains more RAM",
                "All task priorities become equal",
                "Every queue becomes larger"
              ],
              answer: "Tasks may interfere with each other's data updates",
              explanation:
                "Concurrent access can cause race conditions or inconsistent data."
            },
            {
              question: "What does FIFO mean for a queue?",
              options: [
                "First In, First Out",
                "Fast Interrupt Function Only",
                "Fixed Input Frequency Output",
                "First Instruction, Final Operation"
              ],
              answer: "First In, First Out",
              explanation:
                "In a FIFO queue, the earliest queued item is normally removed first."
            },
            {
              question: "What can happen when a bounded queue is full?",
              options: [
                "A send may fail or wait, depending on the API",
                "It automatically stores unlimited messages",
                "All queued data is always copied to ROM",
                "The RTOS must reboot immediately"
              ],
              answer: "A send may fail or wait, depending on the API",
              explanation:
                "A queue has a configured capacity, and the send behavior depends on its API and timeout."
            },
            {
              question: "What is a common use of event flags?",
              options: [
                "Representing and signaling event conditions",
                "Changing the CPU's physical size",
                "Replacing all device drivers",
                "Manufacturing hardware timers"
              ],
              answer: "Representing and signaling event conditions",
              explanation:
                "Event flags or event groups let tasks signal and wait for specified conditions."
            }
          ]
        },
        {
          title: "Lesson 6: Semaphores and Mutexes",
          content: `
Semaphores and mutexes help coordinate concurrent tasks.

Binary semaphore:
Has two logical states and is commonly used for event signaling or simple coordination.

Counting semaphore:
Maintains a count. It can represent multiple available resources or count occurrences of an event.

Mutex:
A mutual-exclusion lock used to protect a shared resource so that only one task owns the lock at a time.

Example:
Two tasks need to update a shared configuration structure. A mutex can protect the update so that one task completes its critical section before another task enters it.

A critical section is code that accesses shared data or a resource that must not be modified concurrently.

Mutexes may support priority inheritance. If a low-priority task holds a mutex needed by a high-priority task, priority inheritance temporarily raises the owner's priority to reduce priority inversion.

Important distinction:
A mutex has ownership: the task that locks it is generally the task that must unlock it. A semaphore is commonly used for signaling and does not necessarily have the same ownership rules.

Never hold a lock longer than necessary, and avoid waiting indefinitely while holding other resources.
          `,
          quiz: [
            {
              question: "What is the primary purpose of a mutex?",
              options: [
                "Protect a shared resource from concurrent access",
                "Increase the processor's clock frequency",
                "Store application files permanently",
                "Convert analog signals to digital signals"
              ],
              answer: "Protect a shared resource from concurrent access",
              explanation:
                "A mutex provides mutual exclusion around a critical section."
            },
            {
              question: "Which semaphore type can represent several available identical resources?",
              options: [
                "Counting semaphore",
                "Binary semaphore only",
                "Hardware fuse",
                "Software compiler"
              ],
              answer: "Counting semaphore",
              explanation:
                "A counting semaphore tracks a count that can represent multiple available resources or events."
            },
            {
              question: "What is a critical section?",
              options: [
                "Code that accesses a resource requiring coordinated access",
                "Any comment in source code",
                "A circuit's outer casing",
                "A file that cannot be compiled"
              ],
              answer: "Code that accesses a resource requiring coordinated access",
              explanation:
                "A critical section must be protected when concurrent access could corrupt shared state."
            },
            {
              question: "What does priority inheritance help reduce?",
              options: [
                "Priority inversion",
                "Queue capacity",
                "Flash memory size",
                "The number of GPIO pins"
              ],
              answer: "Priority inversion",
              explanation:
                "Priority inheritance can temporarily raise a mutex owner's priority when a higher-priority task is waiting for that mutex."
            },
            {
              question: "How does a mutex differ from a typical signaling semaphore?",
              options: [
                "A mutex has ownership rules",
                "A mutex is always a hardware sensor",
                "A mutex permanently stores data in ROM",
                "A mutex can only be used by a compiler"
              ],
              answer: "A mutex has ownership rules",
              explanation:
                "Mutexes are ownership-based locks, while semaphores are often used for signaling or counting."
            }
          ]
        },
        {
          title: "Lesson 7: Race Conditions and Deadlocks",
          content: `
A race condition occurs when the result depends on the timing or order of concurrent operations on shared state.

Example:
Two tasks both read a counter with value 5, increment their local copies, and write back 6. The expected final value of 7 is lost because the updates overlap.

Prevention methods include:
- Protect shared data with appropriate mutexes or critical sections.
- Prefer queues to pass data between tasks when practical.
- Minimize shared mutable state.
- Keep protected sections short.

A deadlock occurs when tasks wait indefinitely for resources held by one another.

Example:
Task A locks Resource 1 and waits for Resource 2. Task B locks Resource 2 and waits for Resource 1. Neither can proceed.

Common deadlock conditions include mutual exclusion, holding a resource while waiting for another, lack of forced resource preemption, and circular waiting.

Ways to reduce deadlock risk:
- Acquire multiple locks in a consistent global order.
- Avoid nested locks where possible.
- Use timeouts where appropriate.
- Design clear resource ownership rules.

A timeout can prevent indefinite waiting, but it does not automatically fix every synchronization problem. The application must handle timeout failures correctly.
          `,
          quiz: [
            {
              question: "What is a race condition?",
              options: [
                "A result that depends on the timing of concurrent operations",
                "A fixed processor clock rate",
                "A method of storing data in ROM",
                "A type of circuit connector"
              ],
              answer: "A result that depends on the timing of concurrent operations",
              explanation:
                "Race conditions occur when overlapping operations make the outcome depend on their execution order."
            },
            {
              question: "Which technique can protect a shared counter from concurrent updates?",
              options: [
                "A mutex around the update",
                "Removing all variable declarations",
                "Increasing the screen brightness",
                "Renaming the counter"
              ],
              answer: "A mutex around the update",
              explanation:
                "A mutex can ensure only one task performs the protected update at a time."
            },
            {
              question: "What is a deadlock?",
              options: [
                "Tasks waiting indefinitely for resources held by one another",
                "A task completing before its deadline",
                "A successful queue transfer",
                "A normal variable assignment"
              ],
              answer: "Tasks waiting indefinitely for resources held by one another",
              explanation:
                "Deadlock prevents progress when tasks form a circular dependency on resources."
            },
            {
              question: "How can a system reduce deadlock risk when multiple locks are needed?",
              options: [
                "Acquire locks in a consistent order",
                "Acquire locks in a random order",
                "Disable all task scheduling permanently",
                "Never release any mutex"
              ],
              answer: "Acquire locks in a consistent order",
              explanation:
                "A consistent lock order helps prevent circular wait among tasks."
            },
            {
              question: "Does adding a timeout automatically fix every race condition?",
              options: [
                "No, shared-data access still needs correct coordination",
                "Yes, all data becomes atomic",
                "Yes, all mutexes become unnecessary",
                "No, because RTOS tasks cannot use timers"
              ],
              answer: "No, shared-data access still needs correct coordination",
              explanation:
                "Timeouts limit waiting; they do not automatically make concurrent data updates safe."
            }
          ]
        },
        {
          title: "Lesson 8: Timers and Delays",
          content: `
RTOS timing services let tasks delay execution, measure intervals, and schedule callbacks.

Common services include:
- Task delay
- Delay until a periodic wake-up time
- Software timers
- Hardware timers and timer interrupts

Relative delay:
A task waits for a specified duration from the time the delay call is made. If the task's work duration varies, its cycle can drift.

Periodic delay:
A delay-until approach uses a target wake-up time. It is often preferable for periodic tasks because it helps maintain a consistent schedule.

Software timer:
An RTOS-managed timer can trigger a callback after a duration or at repeated intervals. Callback context and permitted operations depend on the RTOS implementation.

Hardware timer:
A peripheral that measures time or generates events independently of ordinary task execution.

Example:
A temperature task may sample a sensor every 100 milliseconds. The design must also account for execution time, scheduling delay, and sensor communication time.

A delay is not a guarantee that a task will execute at the exact expiration instant. The scheduler and interrupt load affect when the task actually runs.
          `,
          quiz: [
            {
              question: "What is an RTOS delay service used for?",
              options: [
                "Waiting for a specified time or timing event",
                "Increasing RAM capacity",
                "Changing the source-code language",
                "Removing every task from memory"
              ],
              answer: "Waiting for a specified time or timing event",
              explanation:
                "Delay services allow a task to wait instead of continuously consuming processor time."
            },
            {
              question: "Why can a relative delay cause periodic task drift?",
              options: [
                "Work duration is added before each new delay",
                "It always disables all interrupts",
                "It makes the CPU clock stop",
                "It automatically removes the task stack"
              ],
              answer: "Work duration is added before each new delay",
              explanation:
                "A repeated work-then-delay pattern can lengthen the interval when execution time varies."
            },
            {
              question: "What does a periodic delay-until pattern help maintain?",
              options: [
                "A consistent periodic schedule",
                "Unlimited queue storage",
                "Automatic memory expansion",
                "Permanent task suspension"
              ],
              answer: "A consistent periodic schedule",
              explanation:
                "Using a fixed target wake-up schedule can reduce drift between periodic iterations."
            },
            {
              question: "What is a software timer?",
              options: [
                "An RTOS-managed timer that triggers an action or callback",
                "A physical resistor that stores time",
                "A type of task stack",
                "A compiler warning"
              ],
              answer: "An RTOS-managed timer that triggers an action or callback",
              explanation:
                "Software timers are managed by the RTOS and can invoke configured callbacks when they expire."
            },
            {
              question: "Does a timer expiring guarantee that a task runs at that exact instant?",
              options: [
                "No, scheduling and interrupt activity can delay execution",
                "Yes, all tasks run simultaneously",
                "Yes, the timer replaces the processor",
                "No, because timers cannot generate events"
              ],
              answer: "No, scheduling and interrupt activity can delay execution",
              explanation:
                "Expiration makes an event or task eligible for handling, but execution may occur later."
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: Embedded RTOS Development",
      description:
        "Explore interrupts, memory, priority inversion, real-time analysis, and debugging.",
      lessons: [
        {
          title: "Lesson 9: Interrupts and RTOS Integration",
          content: `
An interrupt allows the processor to respond to an event that requires attention.

Examples:
- A UART receives data.
- A timer reaches a configured count.
- A GPIO pin detects a signal.
- An ADC conversion completes.

An Interrupt Service Routine (ISR) handles the immediate event. In an RTOS, an ISR may record minimal information and notify a task to do the longer processing.

Why defer work to a task?
- Keeps interrupt latency low.
- Allows more complex processing in task context.
- Makes communication and synchronization easier to manage.

Important rules:
- Use only ISR-safe RTOS APIs from interrupt context.
- Some APIs require a special ISR-specific version.
- Do not call blocking functions from an ISR.
- Follow the platform's interrupt-priority restrictions.
- Clear or acknowledge the interrupt according to the peripheral's requirements.

Example:
A UART ISR receives a byte and places it in an interrupt-safe buffer. A communication task later parses the complete message.

The exact API names and restrictions depend on the RTOS and hardware platform.
          `,
          quiz: [
            {
              question: "What is a common purpose of an ISR in an embedded RTOS system?",
              options: [
                "Respond to an interrupt event",
                "Compile the application source",
                "Store all application data permanently",
                "Replace all device drivers"
              ],
              answer: "Respond to an interrupt event",
              explanation:
                "An ISR performs immediate handling for a hardware or software interrupt."
            },
            {
              question: "Why is lengthy processing often deferred from an ISR to a task?",
              options: [
                "To reduce time spent in interrupt context",
                "To remove the need for a scheduler",
                "To make the ISR block indefinitely",
                "To prevent tasks from using queues"
              ],
              answer: "To reduce time spent in interrupt context",
              explanation:
                "Deferring work helps keep interrupt handling short and reduces delays to other activity."
            },
            {
              question: "Which type of API should be used from interrupt context?",
              options: [
                "An API explicitly documented as ISR-safe",
                "Any blocking task API",
                "A filesystem API in every case",
                "An arbitrary function with no context restrictions"
              ],
              answer: "An API explicitly documented as ISR-safe",
              explanation:
                "RTOS APIs have context restrictions; only suitable interrupt-safe functions should be called from an ISR."
            },
            {
              question: "Which event could generate an interrupt?",
              options: [
                "UART data arriving",
                "A source-code comment being added",
                "A variable name being changed in an editor",
                "A document being printed on another computer"
              ],
              answer: "UART data arriving",
              explanation:
                "A UART peripheral can raise an interrupt when data is received."
            },
            {
              question: "Why must a blocking delay generally not be called from an ISR?",
              options: [
                "An ISR must not wait like an ordinary task",
                "ISRs always run on a separate computer",
                "A delay permanently increases clock frequency",
                "Blocking delays automatically repair memory leaks"
              ],
              answer: "An ISR must not wait like an ordinary task",
              explanation:
                "Interrupt context has special execution constraints, and blocking can disrupt system responsiveness."
            }
          ]
        },
        {
          title: "Lesson 10: Memory Management and Task Stacks",
          content: `
Memory management is important in embedded systems because RAM may be limited.

Common memory areas include:
- Program code, often stored in flash
- Global and static variables
- Heap memory used for dynamic allocation
- Stack memory used by tasks and function calls

Task stack:
Each task generally needs enough stack space for its execution context, local variables, function calls, and interrupt-related requirements of the platform.

Stack overflow:
A stack overflow occurs when a task uses more stack than allocated. It can corrupt nearby memory or cause unpredictable behavior.

Dynamic memory:
Some RTOS configurations support dynamic allocation for tasks, queues, and other objects. Allocation can fail, fragment memory, or have variable execution time depending on the allocator.

Static allocation:
Resources are assigned fixed memory at build time or through statically declared buffers. This can make memory use more predictable.

Best practices:
- Measure stack high-water marks when supported.
- Enable stack overflow checking where available.
- Check allocation failures.
- Avoid unnecessary dynamic allocation in time-critical paths.
- Select stack sizes based on testing and analysis, not guesswork.

Exact memory behavior depends on the RTOS port, compiler, processor, and configuration.
          `,
          quiz: [
            {
              question: "What does a task stack commonly store?",
              options: [
                "Local variables and function-call information",
                "Only permanent application files",
                "Only the processor's physical pins",
                "Only network passwords"
              ],
              answer: "Local variables and function-call information",
              explanation:
                "Stacks commonly hold local execution data, return addresses, and saved context."
            },
            {
              question: "What can a stack overflow cause?",
              options: [
                "Memory corruption and unpredictable behavior",
                "Unlimited RAM availability",
                "Guaranteed deadline improvements",
                "Automatic removal of all bugs"
              ],
              answer: "Memory corruption and unpredictable behavior",
              explanation:
                "Exceeding the allocated stack can overwrite other memory or trigger a fault."
            },
            {
              question: "What is one potential advantage of static allocation?",
              options: [
                "More predictable resource allocation",
                "Unlimited memory capacity",
                "No need to estimate memory usage",
                "Automatic correction of every race condition"
              ],
              answer: "More predictable resource allocation",
              explanation:
                "Static allocation avoids runtime allocation for the statically assigned objects."
            },
            {
              question: "What should an application do if a dynamic allocation fails?",
              options: [
                "Handle the failure safely",
                "Assume the requested memory exists",
                "Write past the allocated buffer",
                "Disable every safety check"
              ],
              answer: "Handle the failure safely",
              explanation:
                "Allocation failure must be checked so the application can respond without using invalid memory."
            },
            {
              question: "What can a stack high-water mark help estimate?",
              options: [
                "How much of a task stack has been used",
                "The exact battery lifetime",
                "The number of UART wires",
                "The network's physical distance"
              ],
              answer: "How much of a task stack has been used",
              explanation:
                "Supported high-water-mark tools help identify the minimum unused stack observed during testing."
            }
          ]
        },
        {
          title: "Lesson 11: Priority Inversion",
          content: `
Priority inversion occurs when a high-priority task is indirectly delayed by a lower-priority task.

Example:
1. A low-priority task locks a shared resource.
2. A high-priority task needs that resource and blocks.
3. A medium-priority task runs and prevents the low-priority task from running to release the resource.
4. The high-priority task remains blocked longer than expected.

This can affect real-time deadlines.

Priority inheritance:
A mutex implementation may temporarily raise the priority of the task holding the mutex to help it finish the protected work and release the mutex.

Priority ceiling:
Some protocols assign a resource-related priority ceiling to control scheduling interactions. Support and exact behavior vary.

Prevention and mitigation:
- Keep critical sections short.
- Avoid unnecessary resource sharing.
- Use appropriate mutex protocols.
- Analyze task priorities and resource dependencies.
- Never assume every semaphore provides priority inheritance.

Priority inheritance reduces certain forms of priority inversion, but it does not automatically solve deadlocks or every timing problem.
          `,
          quiz: [
            {
              question: "What is priority inversion?",
              options: [
                "A high-priority task is delayed by resource or scheduling interactions involving lower-priority work",
                "All tasks receive infinite processor time",
                "A processor changes from digital to analog",
                "A queue permanently loses its capacity"
              ],
              answer: "A high-priority task is delayed by resource or scheduling interactions involving lower-priority work",
              explanation:
                "Priority inversion can occur when a high-priority task waits for a resource held by a lower-priority task."
            },
            {
              question: "Which mechanism may temporarily raise a mutex owner's priority?",
              options: [
                "Priority inheritance",
                "Round-robin rotation alone",
                "Dynamic memory allocation",
                "A UART baud-rate setting"
              ],
              answer: "Priority inheritance",
              explanation:
                "Priority inheritance temporarily raises the owner's priority in supported mutex implementations."
            },
            {
              question: "What is one practical way to reduce the impact of priority inversion?",
              options: [
                "Keep critical sections short",
                "Hold mutexes indefinitely",
                "Add unrelated tasks at the highest priority",
                "Disable all synchronization"
              ],
              answer: "Keep critical sections short",
              explanation:
                "Shorter protected sections reduce the time other tasks may have to wait for a resource."
            },
            {
              question: "Does priority inheritance automatically prevent every deadlock?",
              options: [
                "No, deadlock prevention needs additional design measures",
                "Yes, every resource becomes available immediately",
                "Yes, all tasks stop sharing resources",
                "No, because priorities cannot be changed by any RTOS"
              ],
              answer: "No, deadlock prevention needs additional design measures",
              explanation:
                "Priority inheritance addresses certain priority inversions but does not guarantee deadlock prevention."
            },
            {
              question: "Why should an engineer check the RTOS mutex documentation?",
              options: [
                "Priority-inheritance support varies by implementation",
                "All RTOS mutexes are identical in every detail",
                "Mutexes always increase clock speed",
                "Documentation determines the number of processor pins"
              ],
              answer: "Priority-inheritance support varies by implementation",
              explanation:
                "Mutex features and scheduling behavior depend on the RTOS and its configuration."
            }
          ]
        },
        {
          title: "Lesson 12: Real-Time Performance Analysis",
          content: `
Real-time analysis checks whether tasks can complete within their timing requirements.

Important terms:

Period:
The interval between successive releases of a periodic task.

Execution time:
The processor time required by a task during an execution.

Deadline:
The time by which the task must complete.

Response time:
The elapsed time from a task's release or triggering event until it completes.

Jitter:
Variation in timing, such as variation in a task's start time or output interval.

Utilization:
The fraction of processor capacity used by tasks under a chosen model.

For a simple periodic task, utilization is often estimated as execution time divided by period.

Example:
A task takes 2 milliseconds of processor time and repeats every 10 milliseconds. Its nominal utilization is 2/10 = 0.2, or 20%.

This calculation alone does not prove that deadlines are met. Interrupts, blocking, task priorities, execution-time variation, and scheduling overhead must also be considered.

Measurement tools can record task execution, context switches, interrupt latency, and deadline misses. Testing should include heavy-load conditions and realistic worst-case scenarios.
          `,
          quiz: [
            {
              question: "How is nominal utilization estimated for a simple periodic task?",
              options: [
                "Execution time divided by period",
                "Period divided by processor temperature",
                "Stack size divided by queue length",
                "Deadline multiplied by variable count"
              ],
              answer: "Execution time divided by period",
              explanation:
                "For a simple periodic task, utilization is commonly estimated as C/T, where C is execution time and T is period."
            },
            {
              question: "A task executes for 2 ms every 10 ms. What is its nominal utilization?",
              options: [
                "20%",
                "2%",
                "50%",
                "200%"
              ],
              answer: "20%",
              explanation:
                "Utilization is 2 ms / 10 ms = 0.2, which is 20%."
            },
            {
              question: "What does jitter describe?",
              options: [
                "Variation in timing",
                "The number of source files",
                "The physical weight of the processor",
                "The total number of GPIO pins"
              ],
              answer: "Variation in timing",
              explanation:
                "Jitter is the variation in timing, such as differences between expected and actual release times."
            },
            {
              question: "What does response time measure?",
              options: [
                "Elapsed time from a task's release until completion",
                "Only the amount of flash memory installed",
                "The task's source-code length",
                "The voltage of every circuit node"
              ],
              answer: "Elapsed time from a task's release until completion",
              explanation:
                "Response time includes the time a task spends waiting and executing until it completes."
            },
            {
              question: "Does low processor utilization alone prove all deadlines will be met?",
              options: [
                "No, blocking and scheduling behavior must also be analyzed",
                "Yes, utilization is the only timing factor",
                "Yes, interrupts cannot affect task timing",
                "No, because execution time is never measurable"
              ],
              answer: "No, blocking and scheduling behavior must also be analyzed",
              explanation:
                "Deadline feasibility also depends on priorities, blocking, overhead, interrupt behavior, and execution-time assumptions."
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: RTOS Applications and Best Practices",
      description:
        "Apply RTOS concepts to embedded projects, testing, and debugging.",
      lessons: [
        {
          title: "Lesson 13: Device Drivers and Peripheral Tasks",
          content: `
Device drivers provide software interfaces for hardware peripherals.

Common embedded peripherals include:
- GPIO for digital input and output
- UART for serial communication
- SPI for synchronous serial data
- I2C for communication with supported devices
- ADC for converting analog signals into digital values
- PWM for controlling duty-cycle-based outputs
- Timers for measuring intervals and generating events

A common design separates hardware interaction from application logic.

For example:
1. A driver reads sensor data.
2. A sensor task processes the measurement.
3. A queue sends the result to a control task.
4. The control task updates an actuator.

This structure can make code easier to test and maintain.

Shared peripherals need careful ownership. If two tasks attempt to use the same device simultaneously, a mutex, a dedicated driver task, or another suitable design may be needed.

The correct choice depends on the peripheral, driver API, latency requirements, and RTOS platform.
          `,
          quiz: [
            {
              question: "Which peripheral is commonly used for asynchronous serial communication?",
              options: [
                "UART",
                "ADC",
                "PWM",
                "GPIO alone"
              ],
              answer: "UART",
              explanation:
                "UART provides asynchronous serial communication using transmit and receive signals."
            },
            {
              question: "What does an ADC do?",
              options: [
                "Converts an analog input into a digital value",
                "Converts a queue into a task",
                "Schedules all RTOS threads",
                "Locks shared memory"
              ],
              answer: "Converts an analog input into a digital value",
              explanation:
                "An analog-to-digital converter samples an analog signal and represents it digitally."
            },
            {
              question: "What is a benefit of separating a driver from application logic?",
              options: [
                "Improved modularity and testability",
                "Guaranteed unlimited memory",
                "Elimination of every timing constraint",
                "Automatic prevention of all hardware faults"
              ],
              answer: "Improved modularity and testability",
              explanation:
                "Separating hardware access from application behavior makes modules easier to test and maintain."
            },
            {
              question: "Which interface is commonly used for synchronous serial communication?",
              options: [
                "SPI",
                "UART only",
                "Analog voltage input only",
                "A task stack"
              ],
              answer: "SPI",
              explanation:
                "SPI is a synchronous serial interface commonly used between controllers and peripherals."
            },
            {
              question: "What may be needed when multiple tasks access the same peripheral?",
              options: [
                "A suitable ownership or synchronization strategy",
                "Removing the peripheral driver",
                "Increasing every task's priority to the maximum",
                "Disabling all error handling"
              ],
              answer: "A suitable ownership or synchronization strategy",
              explanation:
                "Coordinating access helps prevent conflicting operations on a shared peripheral."
            }
          ]
        },
        {
          title: "Lesson 14: Power Management in RTOS",
          content: `
Many embedded devices run on batteries, so energy efficiency matters.

Common power-management methods:
- Idle modes
- Sleep and deep-sleep modes
- Peripheral clock gating
- Dynamic frequency scaling, when supported
- Waking on interrupts or scheduled events

An RTOS may detect when no task is ready and execute an idle task. A configured idle hook or power-management component may place the processor in a low-power state.

Before entering sleep, the system must consider:
- Pending interrupts
- Timers and deadlines
- Peripheral activity
- Wake-up sources
- Whether memory and device state are retained
- The time needed to resume execution

Deep sleep can save more energy but may have a longer wake-up latency or require peripheral reinitialization.

Power management must be balanced with response-time requirements. A system should not choose a sleep mode that prevents it from responding within required deadlines.
          `,
          quiz: [
            {
              question: "What is a common goal of RTOS power management?",
              options: [
                "Reduce energy consumption while meeting timing requirements",
                "Keep every peripheral running continuously",
                "Eliminate every interrupt",
                "Increase memory usage without limit"
              ],
              answer: "Reduce energy consumption while meeting timing requirements",
              explanation:
                "Power management aims to save energy without violating required system behavior."
            },
            {
              question: "When might an RTOS enter an idle-related low-power state?",
              options: [
                "When no task is ready and the system configuration permits it",
                "Whenever any task is running",
                "Whenever the source code is edited",
                "Only when all RAM is removed"
              ],
              answer: "When no task is ready and the system configuration permits it",
              explanation:
                "Idle-time power management can use periods without ready work to reduce power."
            },
            {
              question: "What is a possible trade-off of deep sleep?",
              options: [
                "Longer wake-up latency",
                "Unlimited processor speed",
                "Automatic removal of all deadlines",
                "Guaranteed zero energy use"
              ],
              answer: "Longer wake-up latency",
              explanation:
                "Deeper sleep modes may take longer to resume and may require restoring peripheral state."
            },
            {
              question: "Why must wake-up sources be configured correctly?",
              options: [
                "The device must be able to resume when required events occur",
                "The device must store every event in flash",
                "The scheduler must permanently stop",
                "All tasks must use identical stacks"
              ],
              answer: "The device must be able to resume when required events occur",
              explanation:
                "Wake-up sources allow the processor to resume operation when relevant interrupts or events happen."
            },
            {
              question: "How should a sleep mode be selected for a real-time application?",
              options: [
                "Balance energy savings against wake-up latency and deadlines",
                "Always choose the deepest sleep mode",
                "Ignore peripheral state",
                "Disable every timer permanently"
              ],
              answer: "Balance energy savings against wake-up latency and deadlines",
              explanation:
                "Sleep behavior must remain compatible with response-time and peripheral requirements."
            }
          ]
        },
        {
          title: "Lesson 15: RTOS Debugging and Testing",
          content: `
RTOS debugging checks both functional correctness and timing behavior.

Common issues:
- Stack overflow
- Deadlock
- Race conditions
- Missed deadlines
- Queue overflow
- Incorrect task priorities
- Memory allocation failure
- Excessive interrupt latency

Useful techniques:
1. Logging:
Record important events, errors, and timing information. Logging itself can affect timing, so keep its overhead in mind.

2. Trace tools:
Trace task switches, interrupts, and synchronization events to understand execution order.

3. Assertions:
Check assumptions during development and testing.

4. Stack monitoring:
Use supported stack watermark or overflow-detection tools.

5. Stress testing:
Test under high interrupt load, heavy communication, and boundary conditions.

6. Watchdogs:
A watchdog can detect certain failures to make progress and trigger recovery. It should be designed so normal but lengthy work does not cause false resets.

Testing should include both normal operation and failure scenarios. A successful demonstration does not prove all timing deadlines are guaranteed.
          `,
          quiz: [
            {
              question: "What is one purpose of RTOS trace tools?",
              options: [
                "Inspect task switches and event timing",
                "Increase physical RAM without hardware changes",
                "Replace every device driver",
                "Automatically prove every deadline"
              ],
              answer: "Inspect task switches and event timing",
              explanation:
                "Trace tools record execution events that help diagnose scheduling and timing problems."
            },
            {
              question: "What can stack monitoring help detect?",
              options: [
                "Insufficient task stack capacity",
                "Incorrect display colors only",
                "A missing network cable in every case",
                "The processor's manufacturing date"
              ],
              answer: "Insufficient task stack capacity",
              explanation:
                "Stack monitoring can reveal whether task stack allocation is too small."
            },
            {
              question: "What is the purpose of a watchdog?",
              options: [
                "Detect certain failures to make progress and trigger recovery",
                "Replace all mutexes",
                "Store every task's source code",
                "Guarantee that no software bug exists"
              ],
              answer: "Detect certain failures to make progress and trigger recovery",
              explanation:
                "A watchdog can initiate recovery if expected progress or servicing does not occur."
            },
            {
              question: "Why should logging overhead be considered in a real-time system?",
              options: [
                "Logging can consume processor time and affect timing",
                "Logging always eliminates context switches",
                "Logging makes all tasks execute simultaneously",
                "Logging automatically expands the stack"
              ],
              answer: "Logging can consume processor time and affect timing",
              explanation:
                "Logging adds execution and possibly I/O overhead, which can affect deadlines."
            },
            {
              question: "Does passing a normal functional test prove every deadline will always be met?",
              options: [
                "No, timing analysis and broader testing are also needed",
                "Yes, one test proves all possible executions",
                "Yes, interrupts cannot affect execution",
                "No, because RTOS applications cannot be tested"
              ],
              answer: "No, timing analysis and broader testing are also needed",
              explanation:
                "Testing samples behavior; timing guarantees require suitable analysis and assumptions."
            }
          ]
        },
        {
          title: "Lesson 16: Mini Project - RTOS-Based Sensor Monitoring",
          content: `
Project objective:
Build a small embedded monitoring system that samples a sensor, processes the reading, and reports the result using RTOS tasks.

Example hardware:
- A microcontroller supported by your selected RTOS
- A temperature sensor
- A UART serial interface
- Optional LED or buzzer for status indication

Suggested task design:

1. Sensor Task:
Reads the sensor periodically and validates the reading.

2. Processing Task:
Receives measurements through a queue and checks threshold conditions.

3. Communication Task:
Sends formatted readings and status messages over UART.

4. Optional Alert Task:
Handles alarm actions when a threshold is exceeded.

Suggested development steps:
1. Confirm the microcontroller and RTOS port are supported.
2. Configure the RTOS and create the required tasks.
3. Create a queue for transferring measurements.
4. Use an appropriate delay or periodic scheduling API for sensor sampling.
5. Add error handling for invalid sensor readings and queue failures.
6. Coordinate access to shared peripherals.
7. Measure task execution and verify response-time requirements.
8. Test behavior during communication load and sensor errors.

Expected learning outcomes:
- Create and schedule tasks.
- Use queues for inter-task communication.
- Handle periodic timing.
- Manage task priorities and shared resources.
- Debug timing and synchronization problems.

Safety and reliability:
Do not use an educational prototype as the sole controller for safety-critical machinery. Verify the hardware, RTOS APIs, and electrical requirements for your particular platform.
          `,
          quiz: [
            {
              question: "What is the main purpose of the sensor task in this project?",
              options: [
                "Read and validate sensor measurements",
                "Compile the RTOS kernel during every sample",
                "Replace the microcontroller",
                "Delete all queued messages"
              ],
              answer: "Read and validate sensor measurements",
              explanation:
                "The sensor task is responsible for collecting measurements and checking that they are usable."
            },
            {
              question: "Which mechanism can transfer sensor readings to a processing task?",
              options: [
                "RTOS queue",
                "Heat sink",
                "Clock crystal alone",
                "Source-code comment"
              ],
              answer: "RTOS queue",
              explanation:
                "A queue can safely transfer measurement messages between tasks when used with the appropriate API."
            },
            {
              question: "What should the application do if sending a measurement to a queue fails?",
              options: [
                "Handle the failure according to the system requirements",
                "Assume the message was delivered",
                "Write outside the queue buffer",
                "Disable every task"
              ],
              answer: "Handle the failure according to the system requirements",
              explanation:
                "Queue operations can fail or time out, so the application needs a defined error-handling policy."
            },
            {
              question: "Why should the project measure task execution and response time?",
              options: [
                "To check whether timing requirements are satisfied",
                "To change the sensor's physical dimensions",
                "To remove all task stacks",
                "To ensure that every queue is unlimited"
              ],
              answer: "To check whether timing requirements are satisfied",
              explanation:
                "Timing measurements help evaluate task performance against the project's deadlines."
            },
            {
              question: "Which task could send formatted readings over UART?",
              options: [
                "Communication Task",
                "Stack Overflow Task",
                "Compiler Task",
                "Power Connector Task"
              ],
              answer: "Communication Task",
              explanation:
                "A communication task can format measurement data and transmit it using the UART driver."
            }
          ]
        }
      ]
    }
  ]
};

export default rtosCourse;

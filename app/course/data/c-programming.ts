
export const cProgrammingCourse = {
  skill: "C Programming",
  title: "C Programming for Embedded Systems",
  description:
    "Learn C programming from the basics to functions, pointers, memory, bitwise operations, and embedded programming concepts.",
  duration: "1 Month",
  weeks: [
    {
      week: 1,
      title: "C Programming Fundamentals",
      description: "Learn program structure, variables, data types, operators, and input/output.",
      lessons: [
        {
          title: "Introduction to C Programming",
          explanation:
            "C is a general-purpose programming language widely used in embedded systems because it provides efficient execution and access to low-level operations. A C program typically contains header files, a main function, statements, and a return value. The compiler translates source code into executable code for the target platform.",
          example:
            "#include <stdio.h>\nint main(void) {\n    printf(\"Hello, Embedded World!\\n\");\n    return 0;\n}",
          exercise:
            "Write a C program that prints your name and one reason C is useful in embedded systems.",
          quiz: {
            question: "Which function is the usual entry point of a C program?",
            options: ["start()", "main()", "print()", "run()"],
            answer: 1,
          },
        },
        {
          title: "Variables and Data Types",
          explanation:
            "Variables store values that a program can use or change. Common C data types include char, int, float, and double. The exact size of some types depends on the compiler and target system. Embedded programming often uses fixed-width integer types such as uint8_t and uint16_t from stdint.h when a specific bit width is important.",
          example:
            "#include <stdint.h>\nuint8_t sensor_value = 25;\nint temperature = 30;",
          exercise:
            "Declare variables for a sensor reading, a counter, and a temperature value. Choose appropriate data types.",
          quiz: {
            question: "Which header provides types such as uint8_t?",
            options: ["stdio.h", "string.h", "stdint.h", "math.h"],
            answer: 2,
          },
        },
        {
          title: "Operators and Expressions",
          explanation:
            "C supports arithmetic operators such as +, -, *, /, and %, comparison operators such as == and <, and logical operators such as &&, ||, and !. Assignment uses =, while equality comparison uses ==. Operator precedence affects how expressions are evaluated, so parentheses can make complex expressions clearer.",
          example:
            "int a = 10;\nint b = 3;\nint remainder = a % b; // remainder is 1",
          exercise:
            "Write expressions to add two values, find their remainder, and check whether one value is greater than another.",
          quiz: {
            question: "Which operator checks whether two values are equal?",
            options: ["=", "==", "!=", "%"],
            answer: 1,
          },
        },
        {
          title: "Input, Output, and Type Conversion",
          explanation:
            "The printf function displays formatted output, while scanf can read formatted input. Format specifiers must match the types of the corresponding arguments. Type conversion changes a value from one type to another, either implicitly or through a cast. In embedded programs, input often comes from sensors or communication interfaces rather than a keyboard.",
          example:
            "#include <stdio.h>\nint main(void) {\n    int reading = 42;\n    printf(\"Sensor reading: %d\\n\", reading);\n    return 0;\n}",
          exercise:
            "Write a program that stores an integer sensor value and prints it with a descriptive message.",
          quiz: {
            question: "Which function is commonly used to display formatted output in C?",
            options: ["printf()", "scanf()", "malloc()", "sizeof()"],
            answer: 0,
          },
        },
      ],
      assignment:
        "Write four small C programs using variables, data types, operators, and formatted output. Compile and test each program.",
    },
    {
      week: 2,
      title: "Conditions, Loops, Arrays, and Functions",
      description: "Control program flow and organize reusable code.",
      lessons: [
        {
          title: "Conditional Statements",
          explanation:
            "Conditional statements allow a program to choose different actions based on a condition. The if statement executes a block when a condition is true. else provides an alternative, and else if checks additional conditions. The switch statement is useful when selecting among several constant cases. Conditions commonly use comparison and logical operators.",
          example:
            "int temperature = 35;\nif (temperature > 30) {\n    printf(\"High temperature\\n\");\n} else {\n    printf(\"Normal range\\n\");\n}",
          exercise:
            "Write a program that checks whether a sensor value is below, within, or above a chosen range.",
          quiz: {
            question: "Which statement is used to select an action based on a condition?",
            options: ["if", "include", "define only", "typedef only"],
            answer: 0,
          },
        },
        {
          title: "Loops in C",
          explanation:
            "Loops repeat a block of code. A for loop is useful when the number of iterations is known or controlled by a counter. A while loop continues as long as its condition is true. A do-while loop executes its body at least once before checking the condition. Embedded software uses loops to process data and repeatedly check system state.",
          example:
            "for (int i = 0; i < 5; i++) {\n    printf(\"%d\\n\", i);\n}",
          exercise:
            "Write a loop that prints numbers from 1 to 10 and another that calculates their sum.",
          quiz: {
            question: "Which loop always executes its body at least once?",
            options: ["for", "while", "do-while", "None of these"],
            answer: 2,
          },
        },
        {
          title: "Arrays and Strings",
          explanation:
            "An array stores multiple elements of the same type in contiguous memory. In C, array indexing starts at zero, so the first element is array[0]. Accessing beyond an array's valid bounds can cause undefined behavior. A C string is a character array terminated by the null character '\\0'. Programs should reserve sufficient space for string contents and the terminator.",
          example:
            "int readings[3] = {10, 20, 30};\nint first = readings[0];",
          exercise:
            "Create an array of five sensor readings and calculate the total using a loop.",
          quiz: {
            question: "What is the index of the first element in a C array?",
            options: ["0", "1", "-1", "Depends on the value"],
            answer: 0,
          },
        },
        {
          title: "Functions and Code Reuse",
          explanation:
            "A function groups instructions into a reusable unit. A function can accept parameters and return a value. A declaration or prototype tells the compiler about a function's name, return type, and parameters before it is used. Splitting embedded software into functions makes sensor reading, data processing, and output control easier to test and maintain.",
          example:
            "int add(int a, int b) {\n    return a + b;\n}",
          exercise:
            "Create a function that receives a sensor value and returns 1 if it exceeds a threshold, otherwise 0.",
          quiz: {
            question: "Which keyword returns a value from a function?",
            options: ["break", "return", "continue", "case"],
            answer: 1,
          },
        },
      ],
      assignment:
        "Build a sensor-reading simulation that uses conditions, loops, an array of readings, and at least two functions.",
    },
    {
      week: 3,
      title: "Pointers, Structures, and Bitwise Operations",
      description: "Understand memory addresses and operations useful in embedded software.",
      lessons: [
        {
          title: "Pointers and Memory Addresses",
          explanation:
            "A pointer stores the address of an object. The address-of operator & obtains an object's address, and the dereference operator * accesses the object through a valid pointer. Pointer types should match the objects they refer to. Uninitialized, invalid, or dangling pointers can cause serious errors, so pointers must be initialized and used carefully.",
          example:
            "int value = 10;\nint *ptr = &value;\nint copy = *ptr;",
          exercise:
            "Write a program that prints a variable's value and accesses that value through a pointer.",
          quiz: {
            question: "What does the address-of operator & do?",
            options: [
              "Returns an object's address",
              "Deletes a variable",
              "Multiplies two values",
              "Ends a function",
            ],
            answer: 0,
          },
        },
        {
          title: "Structures and Enumerations",
          explanation:
            "A structure groups related fields that may have different data types. It is useful for representing a sensor record with a reading, status, and identifier. An enumeration defines named integer constants, making states and modes easier to understand. Structures and enumerations improve clarity in embedded applications and device drivers.",
          example:
            "typedef struct {\n    int temperature;\n    int status;\n} SensorData;",
          exercise:
            "Define a structure for a sensor containing a reading and a status field.",
          quiz: {
            question: "What is the main purpose of a C structure?",
            options: [
              "Group related fields",
              "Repeat a loop",
              "Allocate a clock signal",
              "Replace every function",
            ],
            answer: 0,
          },
        },
        {
          title: "Bitwise Operators",
          explanation:
            "Bitwise operators work on individual bits of integer values. AND (&), OR (|), XOR (^), NOT (~), left shift (<<), and right shift (>>) are useful for manipulating flags and binary fields. Embedded software often uses masks to set, clear, or test specific bits. The appropriate integer width and device documentation must be considered.",
          example:
            "uint8_t flags = 0;\nflags |= (1u << 2); // Set bit 2",
          exercise:
            "Write expressions to set bit 1, clear bit 1, and test bit 1 of an unsigned integer.",
          quiz: {
            question: "Which operator is commonly used to set selected bits using a mask?",
            options: ["|=", "&=", "==", "&&"],
            answer: 0,
          },
        },
        {
          title: "The volatile Keyword",
          explanation:
            "The volatile qualifier tells the compiler that an object's value may change in ways not fully visible in ordinary program flow. It is often relevant to memory-mapped hardware registers and variables updated by an interrupt handler. volatile does not by itself make an operation atomic, provide thread synchronization, or guarantee safe communication between tasks.",
          example:
            "volatile int event_flag;\n/* A hardware event or interrupt may update this flag. */",
          exercise:
            "Explain why a hardware status register may be declared volatile and name one thing volatile does not guarantee.",
          quiz: {
            question: "What does volatile mainly tell the compiler?",
            options: [
              "The value may change unexpectedly",
              "The variable is always constant",
              "The value is stored permanently",
              "The program needs no testing",
            ],
            answer: 0,
          },
        },
      ],
      assignment:
        "Create a C program using a structure, a pointer, and bitwise operations. Explain how volatile can be relevant to hardware registers.",
    },
    {
      week: 4,
      title: "Embedded C Concepts and Mini Project",
      description: "Apply C fundamentals to a simulated embedded control system.",
      lessons: [
        {
          title: "Microcontrollers and Memory-Mapped Registers",
          explanation:
            "A microcontroller combines a processor, memory, and peripherals on a chip. Peripherals may include timers, GPIO, ADC, UART, SPI, and I2C interfaces. In memory-mapped systems, peripheral registers are accessed through defined addresses and documented register fields. The correct addresses and access methods depend on the specific microcontroller and its reference manual.",
          example:
            "A GPIO output register can control a pin when configured correctly for the selected microcontroller.",
          exercise:
            "List five common microcontroller peripherals and explain the purpose of each.",
          quiz: {
            question: "Which peripheral is commonly used to convert an analog voltage into a digital value?",
            options: ["ADC", "UART", "GPIO only", "Timer only"],
            answer: 0,
          },
        },
        {
          title: "GPIO and Sensor Logic",
          explanation:
            "General-purpose input/output (GPIO) pins can read digital input levels or control digital outputs. A pin usually needs to be configured for the required direction and electrical mode. Sensors may provide analog voltages, digital logic levels, or data over a communication bus. Input voltage limits, pull-up or pull-down requirements, and the microcontroller's specifications must be observed.",
          example:
            "A push button can be connected to a digital input configured with an appropriate pull-up or pull-down.",
          exercise:
            "Write pseudocode for reading a digital button and turning an indicator output on when the button is pressed.",
          quiz: {
            question: "What does GPIO stand for?",
            options: [
              "General-Purpose Input/Output",
              "General Program Instruction Order",
              "Global Peripheral Internal Operation",
              "Graphic Processor Input Option",
            ],
            answer: 0,
          },
        },
        {
          title: "Interrupts and Timers",
          explanation:
            "An interrupt allows a processor to respond to an event without continuously checking for it in a tight polling loop. An interrupt service routine should generally be short and predictable. Timers can measure intervals, generate periodic events, count pulses, or support pulse-width modulation. Exact behavior depends on the microcontroller and its configuration.",
          example:
            "A timer interrupt can set a flag periodically so the main program performs a sensor check.",
          exercise:
            "Explain the difference between polling and interrupts, and describe one use of a timer.",
          quiz: {
            question: "What is a common advantage of interrupts?",
            options: [
              "Respond to events without continuous polling",
              "Remove the need for a processor",
              "Guarantee that bugs cannot occur",
              "Replace all memory",
            ],
            answer: 0,
          },
        },
        {
          title: "C Programming Mini Project",
          explanation:
            "A simple embedded-style project can simulate temperature monitoring. Store several sample readings in an array, calculate their average, compare it with a threshold, and report whether the simulated temperature is normal or high. This project practices variables, arrays, loops, functions, conditions, and structured output without needing physical hardware. Later, the simulated input can be replaced with readings from a real sensor.",
          example:
            "For readings 24, 26, and 28, the average is (24 + 26 + 28) / 3 = 26.",
          exercise:
            "Implement the temperature-monitoring simulation with a function for calculating the average and another for classifying the result.",
          quiz: {
            question: "What is the main purpose of the temperature-monitoring mini project?",
            options: [
              "Practice C concepts in a practical example",
              "Replace a microcontroller with a resistor",
              "Generate unlimited electrical power",
              "Avoid using variables and functions",
            ],
            answer: 0,
          },
        },
      ],
      assignment:
        "Final mini-project: build a temperature-monitoring simulation in C. Include an array of readings, average calculation, threshold checking, functions, and sample test results. Explain how a real microcontroller sensor could replace the simulated readings.",
    },
  ],
};

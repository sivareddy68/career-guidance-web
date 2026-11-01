
const systemVerilogCourse = {
  title: "SystemVerilog",
  description:
    "Learn SystemVerilog for VLSI design and verification, including data types, modules, procedural blocks, interfaces, assertions, testbenches, and functional verification.",

  weeks: [
    {
      title: "Week 1: SystemVerilog Fundamentals",
      description:
        "Understand SystemVerilog basics, data types, variables, operators, and design structure.",
      lessons: [
        {
          title: "Introduction to SystemVerilog",
          content: `SystemVerilog is a hardware description and verification language used in digital IC design.

It extends Verilog with additional features for designing and verifying complex digital systems.

Applications include:
- RTL design
- Functional verification
- ASIC development
- FPGA design
- Digital circuit simulation

SystemVerilog supports both hardware modeling and verification methodologies.

It is widely used in VLSI workflows because it provides advanced data types, interfaces, assertions, and object-oriented verification features.`,
          quiz: [
            {
              question: "What is SystemVerilog?",
              options: [
                "A hardware description and verification language",
                "A database language",
                "A web development framework",
                "An operating system",
              ],
              answer: "A hardware description and verification language",
            },
            {
              question: "SystemVerilog is mainly used in which field?",
              options: ["VLSI design and verification", "Web design", "Cloud storage", "Mobile development"],
              answer: "VLSI design and verification",
            },
            {
              question: "SystemVerilog extends which language?",
              options: ["Verilog", "Python", "Java", "HTML"],
              answer: "Verilog",
            },
            {
              question: "Which is an application of SystemVerilog?",
              options: ["RTL design", "Photo editing", "Website hosting", "Text formatting"],
              answer: "RTL design",
            },
            {
              question: "What does RTL stand for?",
              options: [
                "Register Transfer Level",
                "Real Time Language",
                "Register Testing Logic",
                "Read Transfer Line",
              ],
              answer: "Register Transfer Level",
            },
          ],
        },
        {
          title: "Data Types and Variables",
          content: `SystemVerilog provides several data types for representing hardware signals and verification data.

Important data types:

- bit: A two-state data type containing 0 or 1.
- logic: A four-state data type containing 0, 1, X, and Z.
- byte: An 8-bit signed integer by default.
- int: A 32-bit signed integer.
- integer: A traditional four-state integer type.

The logic type is commonly used for RTL signals.

Example:

logic clk;
logic reset;
logic [7:0] data;

Here, clk and reset are single-bit signals, while data is an 8-bit vector.`,
          quiz: [
            {
              question: "Which data type supports four states?",
              options: ["logic", "bit", "byte", "shortint"],
              answer: "logic",
            },
            {
              question: "Which values can a logic variable represent?",
              options: [
                "0, 1, X, Z",
                "Only 0 and 1",
                "Only X and Z",
                "Only positive numbers",
              ],
              answer: "0, 1, X, Z",
            },
            {
              question: "What is the width of an int variable?",
              options: ["32 bits", "8 bits", "16 bits", "64 bits"],
              answer: "32 bits",
            },
            {
              question: "Which data type is commonly used for RTL signals?",
              options: ["logic", "string", "real", "shortreal"],
              answer: "logic",
            },
            {
              question: "What is the width of logic [7:0] data?",
              options: ["8 bits", "7 bits", "16 bits", "4 bits"],
              answer: "8 bits",
            },
          ],
        },
        {
          title: "Operators and Expressions",
          content: `Operators perform calculations and comparisons on signals and variables.

Important SystemVerilog operators include:

- Arithmetic: +, -, *, /
- Logical: &&, ||, !
- Bitwise: &, |, ^, ~
- Relational: <, >, <=, >=
- Equality: ==, !=, ===, !==
- Shift: <<, >>

Example:

logic [3:0] a, b;
logic [4:0] sum;

assign sum = a + b;

The equality operators == and === differ in how they handle unknown and high-impedance values.`,
          quiz: [
            {
              question: "Which operator performs bitwise AND?",
              options: ["&", "&&", "|", "^"],
              answer: "&",
            },
            {
              question: "Which operator performs logical OR?",
              options: ["||", "|", "&", "~"],
              answer: "||",
            },
            {
              question: "Which operator performs XOR?",
              options: ["^", "&", "!", "&&"],
              answer: "^",
            },
            {
              question: "Which operator shifts bits to the left?",
              options: ["<<", ">>", "==", "!="],
              answer: "<<",
            },
            {
              question: "Which equality operator checks exact four-state matching?",
              options: ["===", "==", "<=", ">="],
              answer: "===",
            },
          ],
        },
        {
          title: "Modules and Design Structure",
          content: `A module is the basic building block of a SystemVerilog hardware design.

A module describes a digital hardware component and its inputs, outputs, and internal logic.

Example:

module and_gate (
    input logic a,
    input logic b,
    output logic y
);
    assign y = a & b;
endmodule

Important module elements:
- Module name
- Input and output ports
- Internal signals
- Continuous assignments
- Procedural blocks

Large digital systems are usually divided into smaller modules to improve readability, reuse, and testing.`,
          quiz: [
            {
              question: "What is the basic building block of a SystemVerilog design?",
              options: ["Module", "Class only", "Package only", "Task"],
              answer: "Module",
            },
            {
              question: "Which keyword starts a module?",
              options: ["module", "begin", "class", "program"],
              answer: "module",
            },
            {
              question: "Which keyword ends a module?",
              options: ["endmodule", "endclass", "endtask", "finish"],
              answer: "endmodule",
            },
            {
              question: "Which keyword declares an input port?",
              options: ["input", "output", "assign", "always"],
              answer: "input",
            },
            {
              question: "What is the purpose of modular design?",
              options: [
                "Improve reuse and organization",
                "Increase circuit complexity",
                "Remove all signals",
                "Avoid simulation",
              ],
              answer: "Improve reuse and organization",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: RTL Design Using SystemVerilog",
      description:
        "Learn procedural blocks, combinational logic, sequential logic, and synthesizable RTL coding.",
      lessons: [
        {
          title: "Procedural Blocks: always_comb and always_ff",
          content: `SystemVerilog provides specialized procedural blocks for describing combinational and sequential logic.

always_comb:
- Used for combinational logic.
- Automatically determines sensitivity to signals read in the block.
- Helps identify incomplete combinational assignments.

always_ff:
- Used for sequential logic.
- Represents flip-flop-based behavior.
- Commonly uses a clock edge.

Example:

always_ff @(posedge clk) begin
    q <= d;
end

This describes a flip-flop that captures d on the rising edge of clk.`,
          quiz: [
            {
              question: "Which block is used for combinational logic?",
              options: ["always_comb", "always_ff", "initial", "final"],
              answer: "always_comb",
            },
            {
              question: "Which block is intended for sequential logic?",
              options: ["always_ff", "always_comb", "assign", "function"],
              answer: "always_ff",
            },
            {
              question: "Which event represents the rising clock edge?",
              options: ["posedge", "negedge", "posedge reset", "always"],
              answer: "posedge",
            },
            {
              question: "Which assignment is commonly used in always_ff?",
              options: ["<=", "==", "===", "&&"],
              answer: "<=",
            },
            {
              question: "What does always_comb help describe?",
              options: [
                "Combinational hardware logic",
                "Only clock generation",
                "Only file operations",
                "Database transactions",
              ],
              answer: "Combinational hardware logic",
            },
          ],
        },
        {
          title: "Combinational Logic Design",
          content: `Combinational logic produces outputs based on current inputs.

Examples include:
- Multiplexers
- Encoders
- Decoders
- Adders
- Comparators

Example of a 2-to-1 multiplexer:

always_comb begin
    case (sel)
        1'b0: y = a;
        1'b1: y = b;
        default: y = 1'b0;
    endcase
end

All possible conditions should be handled so that unintended latch inference is avoided.

Combinational logic does not require a clock to update its output.`,
          quiz: [
            {
              question: "What determines the output of combinational logic?",
              options: [
                "Current inputs",
                "Previous clock cycles only",
                "Stored memory only",
                "Clock frequency only",
              ],
              answer: "Current inputs",
            },
            {
              question: "Which is an example of combinational logic?",
              options: ["Multiplexer", "Flip-flop", "Register", "Counter"],
              answer: "Multiplexer",
            },
            {
              question: "Which block is suitable for combinational logic?",
              options: ["always_comb", "always_ff", "initial", "final"],
              answer: "always_comb",
            },
            {
              question: "Why should all branches be assigned in combinational logic?",
              options: [
                "To avoid unintended latch inference",
                "To create more clock cycles",
                "To remove input signals",
                "To increase memory size",
              ],
              answer: "To avoid unintended latch inference",
            },
            {
              question: "Does combinational logic require a clock?",
              options: ["No", "Yes, always", "Only during reset", "Only during synthesis"],
              answer: "No",
            },
          ],
        },
        {
          title: "Sequential Logic and Flip-Flops",
          content: `Sequential logic depends on current inputs and previously stored state.

Flip-flops store one bit of information and update their output based on clock events.

Common types:
- D flip-flop
- JK flip-flop
- T flip-flop

Example of a D flip-flop:

always_ff @(posedge clk) begin
    q <= d;
end

The output q captures the input d at the rising edge of the clock.

Sequential circuits are important for registers, counters, state machines, and control units.`,
          quiz: [
            {
              question: "What does sequential logic depend on?",
              options: [
                "Current inputs and previous state",
                "Only current inputs",
                "Only output voltage",
                "Only source code comments",
              ],
              answer: "Current inputs and previous state",
            },
            {
              question: "What is the main purpose of a flip-flop?",
              options: [
                "Store one bit of information",
                "Perform multiplication only",
                "Generate source code",
                "Display text",
              ],
              answer: "Store one bit of information",
            },
            {
              question: "Which flip-flop is commonly used to capture input data?",
              options: ["D flip-flop", "Only XOR gate", "Decoder", "Multiplexer"],
              answer: "D flip-flop",
            },
            {
              question: "When does a positive-edge-triggered flip-flop update?",
              options: [
                "At the rising clock edge",
                "At every source-code line",
                "Only when the clock is low",
                "During compilation",
              ],
              answer: "At the rising clock edge",
            },
            {
              question: "Which is an application of sequential logic?",
              options: ["Counter", "Pure combinational adder", "Decoder only", "Comparator only"],
              answer: "Counter",
            },
          ],
        },
        {
          title: "Finite State Machines Using SystemVerilog",
          content: `A Finite State Machine (FSM) is a sequential circuit that moves between defined states based on inputs and clock events.

FSMs are used in:
- Control units
- Communication controllers
- Protocol handling
- Digital system sequencing

Two common FSM types are:

Moore machine:
Output depends on the current state.

Mealy machine:
Output depends on the current state and inputs.

SystemVerilog enumerated types make state declarations easier to read.

Example:

typedef enum logic [1:0] {
    IDLE, START, ACTIVE, DONE
} state_t;

FSM logic commonly includes state registers, next-state logic, and output logic.`,
          quiz: [
            {
              question: "What does FSM stand for?",
              options: [
                "Finite State Machine",
                "Fast Signal Module",
                "Frequency System Memory",
                "Fixed State Method",
              ],
              answer: "Finite State Machine",
            },
            {
              question: "In a Moore machine, output depends on:",
              options: [
                "Current state",
                "Only current input",
                "Clock frequency only",
                "Previous output only",
              ],
              answer: "Current state",
            },
            {
              question: "In a Mealy machine, output depends on:",
              options: [
                "Current state and inputs",
                "Only current state",
                "Only reset",
                "Only clock frequency",
              ],
              answer: "Current state and inputs",
            },
            {
              question: "Which SystemVerilog feature can define named FSM states?",
              options: ["enum", "string", "real", "time"],
              answer: "enum",
            },
            {
              question: "Which is an application of FSMs?",
              options: [
                "Communication controller",
                "Image compression only",
                "Text formatting",
                "Web page styling",
              ],
              answer: "Communication controller",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: Advanced SystemVerilog Features",
      description:
        "Explore arrays, structures, interfaces, tasks, functions, and object-oriented programming concepts.",
      lessons: [
        {
          title: "Arrays and Structures",
          content: `SystemVerilog supports different array types and structures for organizing data.

Common array types:
- Fixed-size arrays
- Dynamic arrays
- Associative arrays
- Queues

Structures use the struct keyword to combine multiple variables into one data type.

Example:

typedef struct packed {
    logic [7:0] address;
    logic [7:0] data;
} transaction_t;

Arrays and structures are useful in RTL design and verification environments.

Packed arrays represent contiguous bit vectors, while unpacked arrays organize elements as separate array entries.`,
          quiz: [
            {
              question: "Which keyword declares a structure?",
              options: ["struct", "module", "always", "assign"],
              answer: "struct",
            },
            {
              question: "Which array type can change its size dynamically?",
              options: ["Dynamic array", "Fixed-size array", "Packed array only", "Scalar"],
              answer: "Dynamic array",
            },
            {
              question: "Which array type supports key-based access?",
              options: ["Associative array", "Fixed-size array", "Scalar", "Packed vector"],
              answer: "Associative array",
            },
            {
              question: "What does a packed array represent?",
              options: [
                "A contiguous collection of bits",
                "Only a text string",
                "A clock signal",
                "A module instance",
              ],
              answer: "A contiguous collection of bits",
            },
            {
              question: "Why use structures?",
              options: [
                "To group related data fields",
                "To remove all variables",
                "To generate clock signals",
                "To replace modules",
              ],
              answer: "To group related data fields",
            },
          ],
        },
        {
          title: "Tasks and Functions",
          content: `Tasks and functions help organize reusable code in SystemVerilog.

Functions:
- Return a value.
- Execute without consuming simulation time.
- Are useful for calculations and data processing.

Tasks:
- Can have input, output, and inout arguments.
- Can contain timing controls.
- Are useful for testbench procedures.

Example function:

function automatic int add(input int a, b);
    return a + b;
endfunction

Example task:

task automatic display_value(input int value);
    $display("Value = %0d", value);
endtask

Tasks and functions improve code reuse and readability.`,
          quiz: [
            {
              question: "What does a function return?",
              options: [
                "A value",
                "A hardware clock",
                "A module",
                "A physical pin",
              ],
              answer: "A value",
            },
            {
              question: "Can a task contain timing controls?",
              options: ["Yes", "No", "Only in synthesis", "Only in packages"],
              answer: "Yes",
            },
            {
              question: "Which system task displays simulation information?",
              options: ["$display", "$module", "$input", "$assign"],
              answer: "$display",
            },
            {
              question: "Which keyword defines a function?",
              options: ["function", "task", "module", "interface"],
              answer: "function",
            },
            {
              question: "Why use tasks and functions?",
              options: [
                "To improve code reuse",
                "To remove verification",
                "To replace all signals",
                "To create physical layouts",
              ],
              answer: "To improve code reuse",
            },
          ],
        },
        {
          title: "Interfaces and Modports",
          content: `An interface groups related signals and communication information into a reusable structure.

Interfaces simplify connections between design modules and testbenches.

Example:

interface bus_if;
    logic clk;
    logic valid;
    logic ready;
    logic [7:0] data;
endinterface

Modports define the direction and permitted use of signals for different interface connections.

Benefits:
- Reduces repeated port declarations.
- Improves design organization.
- Simplifies communication between components.
- Supports reusable verification environments.`,
          quiz: [
            {
              question: "What is the purpose of an interface?",
              options: [
                "Group related signals",
                "Store only simulation logs",
                "Replace all modules",
                "Generate physical masks",
              ],
              answer: "Group related signals",
            },
            {
              question: "Which keyword defines an interface?",
              options: ["interface", "module", "program", "function"],
              answer: "interface",
            },
            {
              question: "What does a modport specify?",
              options: [
                "Signal directions and access for a connection",
                "Clock frequency only",
                "Memory size",
                "Simulation duration",
              ],
              answer: "Signal directions and access for a connection",
            },
            {
              question: "Which is a benefit of interfaces?",
              options: [
                "Reduced repeated port declarations",
                "More duplicated code",
                "No signal connections",
                "Removal of testbenches",
              ],
              answer: "Reduced repeated port declarations",
            },
            {
              question: "Interfaces are useful in:",
              options: [
                "Design and verification environments",
                "Image editing",
                "Web styling",
                "Database backups",
              ],
              answer: "Design and verification environments",
            },
          ],
        },
        {
          title: "Object-Oriented Programming in SystemVerilog",
          content: `SystemVerilog supports object-oriented programming features that are especially useful in verification.

Important concepts:
- Class: Defines data and methods.
- Object: An instance of a class.
- Inheritance: Allows one class to extend another.
- Encapsulation: Groups data and methods.
- Polymorphism: Allows different implementations through a common interface.

Example:

class packet;
    int address;
    int data;
endclass

Classes are commonly used to create transactions, drivers, monitors, and other verification components.`,
          quiz: [
            {
              question: "Which keyword declares a class?",
              options: ["class", "module", "interface", "assign"],
              answer: "class",
            },
            {
              question: "What is an object?",
              options: [
                "An instance of a class",
                "A clock signal",
                "A module port",
                "A continuous assignment",
              ],
              answer: "An instance of a class",
            },
            {
              question: "What is inheritance?",
              options: [
                "Creating a class based on another class",
                "Deleting variables",
                "Generating a clock",
                "Connecting two wires",
              ],
              answer: "Creating a class based on another class",
            },
            {
              question: "What is encapsulation?",
              options: [
                "Combining data and methods in a class",
                "Removing all methods",
                "Changing signal voltage",
                "Creating a clock divider",
              ],
              answer: "Combining data and methods in a class",
            },
            {
              question: "Where are classes commonly used?",
              options: [
                "Functional verification",
                "Only physical chip packaging",
                "Image processing",
                "Website layout",
              ],
              answer: "Functional verification",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: SystemVerilog Verification and VLSI Applications",
      description:
        "Learn testbenches, assertions, constrained random verification, functional coverage, and practical verification.",
      lessons: [
        {
          title: "SystemVerilog Testbench Development",
          content: `A testbench is a simulation environment used to verify the behavior of a hardware design.

A basic testbench generally contains:
- Design Under Test (DUT)
- Clock generation
- Reset generation
- Input stimulus
- Output monitoring
- Result checking

Example:

module tb;
    logic a, b;
    logic y;

    and_gate dut (
        .a(a),
        .b(b),
        .y(y)
    );

    initial begin
        a = 0;
        b = 0;
        #10;
        a = 1;
        b = 1;
        #10;
        $finish;
    end
endmodule

Testbenches help identify functional errors before hardware implementation.`,
          quiz: [
            {
              question: "What is a testbench?",
              options: [
                "An environment used to verify a design",
                "A physical chip package",
                "A synthesis library",
                "A PCB layout",
              ],
              answer: "An environment used to verify a design",
            },
            {
              question: "What does DUT stand for?",
              options: [
                "Design Under Test",
                "Data Usage Tool",
                "Digital Unit Transfer",
                "Design Utility Type",
              ],
              answer: "Design Under Test",
            },
            {
              question: "Which block commonly generates testbench stimulus?",
              options: ["initial", "endmodule", "assign only", "typedef"],
              answer: "initial",
            },
            {
              question: "What is clock generation used for?",
              options: [
                "Providing clock events to sequential designs",
                "Changing source code colors",
                "Creating image files",
                "Removing registers",
              ],
              answer: "Providing clock events to sequential designs",
            },
            {
              question: "Why use a testbench before hardware implementation?",
              options: [
                "To find functional errors",
                "To manufacture chips directly",
                "To replace synthesis",
                "To create PCB tracks",
              ],
              answer: "To find functional errors",
            },
          ],
        },
        {
          title: "Assertions and Functional Verification",
          content: `Assertions are used to check whether a design follows expected behavior.

SystemVerilog Assertions (SVA) help verify temporal relationships between signals.

Two common types are:

- Immediate assertions: Evaluated when the statement executes.
- Concurrent assertions: Evaluated over clocked simulation time.

Example:

assert property (
    @(posedge clk) req |-> ##1 ack
);

This checks that when req is true at a clock edge, ack becomes true one clock cycle later.

Assertions help detect protocol violations and design errors early.`,
          quiz: [
            {
              question: "What is the purpose of assertions?",
              options: [
                "Check expected design behavior",
                "Create physical layouts",
                "Generate source code automatically",
                "Replace all modules",
              ],
              answer: "Check expected design behavior",
            },
            {
              question: "What does SVA stand for?",
              options: [
                "SystemVerilog Assertions",
                "System Verification Architecture",
                "Signal Value Assignment",
                "Sequential Variable Access",
              ],
              answer: "SystemVerilog Assertions",
            },
            {
              question: "Which assertion type is evaluated over clocked simulation time?",
              options: ["Concurrent assertion", "Immediate assertion", "Continuous assignment", "Module assertion"],
              answer: "Concurrent assertion",
            },
            {
              question: "Which event control is used in the example assertion?",
              options: ["@(posedge clk)", "@(negedge data)", "initial", "always_comb"],
              answer: "@(posedge clk)",
            },
            {
              question: "Assertions can help identify:",
              options: [
                "Protocol violations",
                "Font size problems",
                "Website color errors",
                "Image compression issues",
              ],
              answer: "Protocol violations",
            },
          ],
        },
        {
          title: "Constrained Random Verification and Functional Coverage",
          content: `Constrained random verification generates different test values automatically while following specified rules.

It helps explore many possible input combinations.

Example:

class packet;
    rand bit [7:0] data;

    constraint data_range {
        data inside {[10:100]};
    }
endclass

The rand keyword marks a variable for randomization.

Functional coverage measures whether important scenarios and conditions have been exercised during verification.

Coverage helps identify missing test scenarios, but high coverage alone does not prove that a design is correct.`,
          quiz: [
            {
              question: "What is constrained random verification?",
              options: [
                "Generating random values under specified rules",
                "Using only fixed input values",
                "Removing all test cases",
                "Creating physical chip layouts",
              ],
              answer: "Generating random values under specified rules",
            },
            {
              question: "Which keyword marks a variable for randomization?",
              options: ["rand", "logic", "module", "assign"],
              answer: "rand",
            },
            {
              question: "What does functional coverage measure?",
              options: [
                "Whether important scenarios have been exercised",
                "Clock voltage",
                "Chip package size",
                "Source code formatting",
              ],
              answer: "Whether important scenarios have been exercised",
            },
            {
              question: "What does a constraint specify?",
              options: [
                "Rules for generated random values",
                "A physical wire length",
                "A clock pin location",
                "A module name",
              ],
              answer: "Rules for generated random values",
            },
            {
              question: "Does high functional coverage alone prove correctness?",
              options: [
                "No",
                "Yes, always",
                "Only for ASICs",
                "Only for FPGA designs",
              ],
              answer: "No",
            },
          ],
        },
        {
          title: "Mini Project: RTL Design and Verification",
          content: `In this project, design and verify a simple digital module using SystemVerilog.

Project: 4-bit Up Counter

Design requirements:
- Create a 4-bit counter.
- Use a clock input.
- Include synchronous or asynchronous reset.
- Increment the counter on the required clock edge.
- Verify counter behavior using a testbench.

Project steps:
1. Write the RTL module.
2. Declare clock, reset, and counter signals.
3. Implement sequential logic using always_ff.
4. Develop a testbench.
5. Generate clock and reset signals.
6. Apply different test scenarios.
7. Check the counter output.
8. Add assertions for important expected behavior.
9. Run simulation and analyze waveforms.

Deliverables:
- SystemVerilog RTL code.
- Testbench code.
- Simulation waveform.
- Verification results.

This project introduces the practical RTL design and verification workflow used in VLSI development.`,
          quiz: [
            {
              question: "What is the counter width in this project?",
              options: ["4 bits", "2 bits", "8 bits", "16 bits"],
              answer: "4 bits",
            },
            {
              question: "Which block is suitable for counter sequential logic?",
              options: ["always_ff", "always_comb", "initial only", "assign only"],
              answer: "always_ff",
            },
            {
              question: "What is the purpose of reset?",
              options: [
                "Initialize the counter to a known state",
                "Increase the clock frequency",
                "Remove the output",
                "Generate random data",
              ],
              answer: "Initialize the counter to a known state",
            },
            {
              question: "What is used to verify counter behavior?",
              options: [
                "Testbench",
                "Color checker",
                "Web browser",
                "Image editor",
              ],
              answer: "Testbench",
            },
            {
              question: "What can simulation waveforms help inspect?",
              options: [
                "Signal changes over time",
                "PCB color",
                "Font size",
                "File permissions",
              ],
              answer: "Signal changes over time",
            },
          ],
        },
      ],
    },
  ],
};

export default systemVerilogCourse;

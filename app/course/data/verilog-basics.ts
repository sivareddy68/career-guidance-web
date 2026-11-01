
const quiz = (
  question: string,
  options: string[],
  answer: string,
  explanation: string
) => ({
  question,
  options,
  answer,
  explanation,
});

const lesson = (
  id: string,
  title: string,
  introduction: string,
  sections: { heading: string; content: string }[],
  example: string,
  exercise: string,
  questions: ReturnType<typeof quiz>[]
) => ({
  id,
  title,
  introduction,
  sections,
  example,
  exercise,
  quiz: questions,
});

export const verilogBasicsCourse = {
  title: "Verilog HDL for VLSI Engineering",
  description:
    "Learn digital hardware design using Verilog HDL, from basic modules and logic gates to combinational circuits, sequential circuits, testbenches, simulation, and a final digital design project.",
  project: {
    title: "Verilog Digital Design Mini Project",
    description:
      "Design and verify a digital circuit using Verilog HDL. Choose a traffic-light controller or digital counter. Develop the design module, create a testbench, simulate the circuit, verify the outputs, and prepare a short technical report.",
  },

  weeks: [
    // =========================================================
    // WEEK 1
    // =========================================================
    {
      title: "Week 1: Introduction to Verilog HDL",
      assignment:
        "Create Verilog modules for AND, OR, NOT, and XOR gates. Declare the required inputs and outputs, implement the logic, and explain how each module works.",
      lessons: [
        lesson(
          "verilog-w1-l1",
          "Introduction to Verilog HDL",
          "Verilog HDL stands for Verilog Hardware Description Language. It is used to describe, design, and simulate digital electronic circuits. Engineers use Verilog to represent hardware such as logic gates, adders, counters, registers, processors, and controllers.",
          [
            {
              heading: "1. What is Verilog HDL?",
              content:
                "Verilog is a Hardware Description Language (HDL). It describes the structure and behavior of digital hardware. Unlike C or Python, which are general-purpose software programming languages, Verilog describes hardware that can be simulated and synthesized into a digital circuit."
            },
            {
              heading: "2. Why is Verilog important?",
              content:
                "Modern digital systems contain thousands or millions of logic elements. Drawing every gate manually would be difficult. Verilog allows engineers to describe circuits using code, simulate their behavior, identify design errors, and prepare designs for FPGA or ASIC implementation."
            },
            {
              heading: "3. Applications of Verilog",
              content:
                "Verilog is used in FPGA development, ASIC design, processor design, memory controllers, communication circuits, digital signal processing hardware, counters, timers, and finite state machines."
            },
            {
              heading: "4. What is a module?",
              content:
                "A module is the basic building block of a Verilog design. It represents a hardware component. A module can contain input ports, output ports, internal signals, and circuit descriptions. A large design can be divided into multiple smaller modules."
            },
            {
              heading: "5. Basic module structure",
              content:
                "A Verilog module begins with the module keyword and ends with endmodule. The port list describes how signals enter and leave the hardware component. The statements inside the module describe the required circuit behavior."
            }
          ],
          `module and_gate(
    input a,
    input b,
    output y
);

assign y = a & b;

endmodule`,
          "Write a Verilog module for an AND gate. Identify the module name, two input signals, one output signal, and the operator used. Then write three differences between a software programming language and a hardware description language.",
          [
            quiz(
              "What does Verilog HDL stand for?",
              ["Verilog Hardware Description Language", "Variable Hardware Design Logic", "Virtual Hardware Development Language", "Verified High-level Design Language"],
              "Verilog Hardware Description Language",
              "Verilog HDL is the name of the hardware description language used to describe digital circuits."
            ),
            quiz(
              "Which keyword is used to begin a Verilog module?",
              ["always", "module", "assign", "begin"],
              "module",
              "The module keyword starts a module declaration."
            ),
            quiz(
              "Which keyword marks the end of a Verilog module?",
              ["end", "endmodule", "finish", "stop"],
              "endmodule",
              "Every module declaration ends with endmodule."
            ),
            quiz(
              "Which of these is an application of Verilog?",
              ["Designing digital circuits", "Editing photographs", "Creating spreadsheets", "Writing website styles"],
              "Designing digital circuits",
              "Verilog is used to describe and design digital hardware."
            ),
            quiz(
              "What is the basic building block of a Verilog design?",
              ["Function", "Class", "Module", "Package"],
              "Module",
              "A module represents a hardware component and forms the basic design unit."
            )
          ]
        ),

        lesson(
          "verilog-w1-l2",
          "Verilog Design Flow",
          "The Verilog design flow is the sequence of steps followed to develop a digital hardware system. It normally includes specification, RTL coding, simulation, synthesis, implementation, and verification.",
          [
            {
              heading: "1. Design specification",
              content:
                "The first step is understanding what the circuit must do. The engineer identifies inputs, outputs, operating conditions, timing requirements, and expected behavior. For example, a counter specification may require counting from zero to nine and then returning to zero."
            },
            {
              heading: "2. RTL coding",
              content:
                "RTL means Register Transfer Level. At this stage, the engineer writes Verilog code to describe the required digital behavior. The code describes how data moves between registers and how combinational logic processes signals."
            },
            {
              heading: "3. Simulation",
              content:
                "Simulation checks the behavior of the Verilog design before hardware implementation. A testbench applies input patterns and observes outputs. The simulation results are compared with the expected behavior."
            },
            {
              heading: "4. Synthesis",
              content:
                "Synthesis converts synthesizable Verilog RTL into a hardware representation made from logic gates, flip-flops, and other digital elements. The synthesis tool analyzes the code and creates a netlist."
            },
            {
              heading: "5. Implementation and verification",
              content:
                "For FPGA designs, implementation includes mapping and placing the circuit into the FPGA resources. For ASIC designs, implementation includes physical-design stages. Verification checks that the final design satisfies functional and timing requirements."
            }
          ],
          `// Simple combinational design
module or_gate(
    input a,
    input b,
    output y
);

assign y = a | b;

endmodule`,
          "Draw a flowchart showing specification, RTL coding, simulation, synthesis, and implementation. Explain the purpose of each stage.",
          [
            quiz("What is the first step in a typical digital design flow?", ["Synthesis", "Design specification", "Implementation", "Simulation"], "Design specification", "The specification defines the required behavior before coding begins."),
            quiz("What does RTL stand for?", ["Register Transfer Level", "Real Time Logic", "Register Timing Language", "Reduced Transfer Logic"], "Register Transfer Level", "RTL describes data movement and operations between registers."),
            quiz("Which stage checks the behavior of a design using input patterns?", ["Simulation", "Placement", "Fabrication", "Packaging"], "Simulation", "Simulation applies test inputs and observes the design outputs."),
            quiz("What does synthesis produce from synthesizable RTL?", ["A photograph", "A hardware netlist", "A database", "A web page"], "A hardware netlist", "Synthesis translates RTL into a representation of hardware elements and connections."),
            quiz("Why is verification performed?", ["To change the programming language", "To check whether the design meets requirements", "To remove all input signals", "To create a user interface"], "To check whether the design meets requirements", "Verification checks whether the design behaves as required.")
          ]
        ),

        lesson(
          "verilog-w1-l3",
          "Verilog Syntax, Modules and Ports",
          "Verilog syntax defines how hardware descriptions are written. Understanding module declarations, port directions, statements, comments, and identifiers is essential before developing larger digital circuits.",
          [
            {
              heading: "1. Module declaration",
              content:
                "A module declaration starts with module followed by the module name and its port list. The module name should clearly describe the hardware component. For example, an adder module can be named half_adder."
            },
            {
              heading: "2. Input and output ports",
              content:
                "The input keyword declares signals entering a module. The output keyword declares signals leaving a module. The inout keyword is used for bidirectional ports when the design requires them."
            },
            {
              heading: "3. Internal signals",
              content:
                "A design may require internal connections between its components. The wire data type is commonly used for these connections. Internal signals help organize a design into smaller logical parts."
            },
            {
              heading: "4. Statements and semicolons",
              content:
                "Most Verilog statements end with a semicolon. A missing semicolon can cause a syntax error during compilation. Keywords such as module, input, output, assign, always, and endmodule have special meanings."
            },
            {
              heading: "5. Comments",
              content:
                "Single-line comments begin with //, while block comments are enclosed by /* and */. Comments explain the purpose of the code and make a design easier to understand."
            }
          ],
          `module simple_logic(
    input a,
    input b,
    output y
);

wire temp;

assign temp = a & b;
assign y = temp;

endmodule`,
          "Create a module named simple_logic with two inputs, one output, and one internal wire. Add comments explaining each part.",
          [
            quiz("Which keyword declares an input port?", ["output", "wire", "input", "assign"], "input", "The input keyword declares a signal entering a module."),
            quiz("Which keyword declares an output port?", ["output", "module", "reg", "always"], "output", "The output keyword declares a module's output signal."),
            quiz("Which symbol begins a single-line comment?", ["/*", "//", "#", "--"], "//", "Two forward slashes begin a single-line Verilog comment."),
            quiz("Which data type is commonly used for an internal connection?", ["wire", "module", "endmodule", "parameter"], "wire", "A wire represents a connection between hardware elements."),
            quiz("Which statement is correctly terminated?", ["assign y = a & b;", "assign y = a & b", "assign; y = a & b", "y assign = a & b;"], "assign y = a & b;", "A continuous assignment statement ends with a semicolon.")
          ]
        ),

        lesson(
          "verilog-w1-l4",
          "Verilog Data Types and Values",
          "Verilog data types represent signals and values used in a digital design. Understanding wire, reg, integer, parameter, and four-state logic values helps prevent coding and simulation errors.",
          [
            {
              heading: "1. Wire",
              content:
                "A wire represents a connection between hardware elements. It is commonly driven by a continuous assignment or by the output of a module or gate primitive. A wire does not store a value by itself."
            },
            {
              heading: "2. Reg",
              content:
                "The reg data type is used for variables assigned inside procedural blocks such as always and initial. The name reg does not automatically mean that a physical register or flip-flop will be created. The synthesized hardware depends on the coding style."
            },
            {
              heading: "3. Integer",
              content:
                "An integer is a signed variable commonly used for loop counters, calculations, and testbench code. It is generally not the first choice for defining individual hardware ports."
            },
            {
              heading: "4. Parameter",
              content:
                "A parameter defines a constant value in a module. Parameters make designs reusable because a value can be changed when the module is instantiated without rewriting the internal logic."
            },
            {
              heading: "5. Four-state logic",
              content:
                "Verilog supports 0, 1, X, and Z. Zero represents logic low, one represents logic high, X represents an unknown value, and Z represents a high-impedance state. X and Z are useful when analyzing simulation behavior."
            }
          ],
          `module data_example(
    input a,
    input b,
    output y
);

wire temp;
reg stored_value;
parameter WIDTH = 4;

assign temp = a & b;
assign y = temp;

endmodule`,
          "Create a small module using a wire, a reg variable, and a parameter. Write a short explanation of the difference between wire and reg.",
          [
            quiz("Which data type commonly represents a connection between hardware elements?", ["wire", "integer", "parameter", "real"], "wire", "A wire represents a connection and does not store a value by itself."),
            quiz("Which data type is used for variables assigned inside procedural blocks?", ["wire", "reg", "module", "endmodule"], "reg", "A reg variable can be assigned inside an always or initial block."),
            quiz("Which Verilog value represents an unknown logic state?", ["0", "1", "X", "Z"], "X", "X represents an unknown logic value."),
            quiz("Which keyword defines a constant value in a module?", ["always", "parameter", "assign", "input"], "parameter", "A parameter defines a constant that can configure a module."),
            quiz("Does declaring a variable as reg always create a physical flip-flop?", ["Yes, always", "No, synthesis depends on how it is used", "Only when it is an input", "Only when it is a wire"], "No, synthesis depends on how it is used", "The hardware inferred depends on the procedural logic and coding style.")
          ]
        )
      ]
    },

    // =========================================================
    // WEEK 2
    // =========================================================
    {
      title: "Week 2: Combinational Circuit Modeling",
      assignment:
        "Design a half adder, full adder, 2:1 multiplexer, and 2-to-4 decoder. Write Verilog modules and explain the truth table for each circuit.",
      lessons: [
        lesson(
          "verilog-w2-l1",
          "Logic Gates Using Verilog",
          "Logic gates are the basic elements of digital circuits. Verilog can describe AND, OR, NOT, NAND, NOR, XOR, and XNOR gates using operators or gate-level primitives.",
          [
            {
              heading: "1. AND gate",
              content:
                "An AND gate produces logic 1 only when all its inputs are 1. For two inputs, the output is Y = A AND B. In Verilog, the bitwise AND operator is &."
            },
            {
              heading: "2. OR and NOT gates",
              content:
                "An OR gate produces logic 1 when at least one input is 1. The bitwise OR operator is |. A NOT gate inverts its input and uses the ~ operator."
            },
            {
              heading: "3. NAND and NOR gates",
              content:
                "A NAND gate is the inverse of an AND gate. A NOR gate is the inverse of an OR gate. These gates are called universal gates because combinations of NAND gates alone or NOR gates alone can implement any Boolean function."
            },
            {
              heading: "4. XOR and XNOR gates",
              content:
                "An XOR gate produces 1 when its two inputs are different. An XNOR gate produces 1 when its two inputs are equal. Their Verilog operators are ^ and ~^ respectively."
            },
            {
              heading: "5. Gate-level primitives",
              content:
                "Verilog provides built-in gate primitives such as and, or, not, nand, nor, xor, and xnor. These can be used to describe a circuit at gate level."
            }
          ],
          `module gates(
    input a,
    input b,
    output and_y,
    output or_y,
    output xor_y,
    output not_y
);

assign and_y = a & b;
assign or_y  = a | b;
assign xor_y = a ^ b;
assign not_y = ~a;

endmodule`,
          "Write separate Verilog modules for AND, OR, NOT, NAND, NOR, XOR, and XNOR gates. Prepare a truth table for each gate.",
          [
            quiz("Which operator represents bitwise AND?", ["|", "&", "^", "~"], "&", "The ampersand operator performs bitwise AND."),
            quiz("When does a two-input XOR gate produce 1?", ["When both inputs are 0", "When both inputs are 1", "When the inputs are different", "When the inputs are equal"], "When the inputs are different", "XOR produces 1 when its two input bits differ."),
            quiz("Which gate is the inverse of an OR gate?", ["NAND", "NOR", "XOR", "XNOR"], "NOR", "A NOR gate performs OR followed by inversion."),
            quiz("Which operator represents bitwise NOT?", ["~", "&", "|", "^"], "~", "The tilde operator inverts each bit."),
            quiz("Which pair consists of universal logic gates?", ["AND and OR", "XOR and XNOR", "NAND and NOR", "NOT and XOR"], "NAND and NOR", "NAND and NOR can each be used alone to implement any Boolean function.")
          ]
        ),

        lesson(
          "verilog-w2-l2",
          "Dataflow Modeling and Operators",
          "Dataflow modeling describes how data moves through a digital circuit using continuous assignments and Boolean expressions. It is especially useful for combinational circuits.",
          [
            {
              heading: "1. Continuous assignment",
              content:
                "The assign statement continuously drives a net with the value of an expression. When an input used in the expression changes, the output is updated automatically."
            },
            {
              heading: "2. Bitwise operators",
              content:
                "Bitwise operators work on individual bits. Common examples include &, |, ~, ^, ~^, and ^~. They are useful for describing logic operations on one-bit and multi-bit signals."
            },
            {
              heading: "3. Arithmetic operators",
              content:
                "The + and - operators perform addition and subtraction. The * and / operators represent multiplication and division. Hardware cost and synthesis support should be considered when using complex arithmetic operations."
            },
            {
              heading: "4. Relational and logical operators",
              content:
                "Relational operators such as <, >, <=, and >= compare values. Logical operators such as &&, ||, and ! combine or invert logical conditions."
            },
            {
              heading: "5. Expression width",
              content:
                "Verilog expressions have bit widths. The width of operands and results matters because values can be extended or truncated. Engineers should carefully select signal widths to avoid unexpected results."
            }
          ],
          `module dataflow_example(
    input [3:0] a,
    input [3:0] b,
    output [3:0] sum,
    output equal
);

assign sum = a + b;
assign equal = (a == b);

endmodule`,
          "Create a four-bit dataflow circuit that adds two inputs and produces an equality output. Explain the operators used.",
          [
            quiz("Which keyword is used for continuous assignment?", ["always", "initial", "assign", "begin"], "assign", "The assign statement continuously drives a net."),
            quiz("Which operator performs bitwise XOR?", ["&", "|", "^", "~"], "^", "The caret operator represents bitwise XOR."),
            quiz("Which operator checks equality?", ["=", "==", "!=", "&&"], "==", "The double equals operator compares two values for equality."),
            quiz("Which operator represents addition?", ["+", "^", "&", "~"], "+", "The plus operator performs arithmetic addition."),
            quiz("What should be considered when designing multi-bit expressions?", ["Signal width", "Comment length", "Module name color", "File icon"], "Signal width", "Operand and result widths affect how Verilog expressions are evaluated.")
          ]
        ),

        lesson(
          "verilog-w2-l3",
          "Behavioral Modeling and Always Blocks",
          "Behavioral modeling describes what a circuit should do using procedural statements. It is commonly written using always blocks and is useful for describing combinational and sequential logic.",
          [
            {
              heading: "1. What is an always block?",
              content:
                "An always block is a procedural block that executes whenever an event in its sensitivity list occurs. It is used to describe hardware behavior that responds to changing signals."
            },
            {
              heading: "2. Combinational always blocks",
              content:
                "A combinational always block describes logic whose outputs depend on current inputs. In classic Verilog, always @(*) automatically includes signals read inside the block in the sensitivity list."
            },
            {
              heading: "3. Blocking assignment",
              content:
                "The blocking assignment operator = updates a procedural variable immediately within the procedural flow. It is commonly used for combinational procedural logic."
            },
            {
              heading: "4. Nonblocking assignment",
              content:
                "The nonblocking assignment operator <= schedules an update for the end of the current simulation time step. It is commonly used for sequential logic such as flip-flops."
            },
            {
              heading: "5. Complete assignments",
              content:
                "A combinational block should assign every output on every possible execution path. Missing assignments can cause unintended latch inference. Default assignments are a useful way to avoid this problem."
            }
          ],
          `module mux2(
    input a,
    input b,
    input sel,
    output reg y
);

always @(*) begin
    if (sel == 1'b0)
        y = a;
    else
        y = b;
end

endmodule`,
          "Write a 2:1 multiplexer using an always @(*) block. Use an if-else statement and explain why the output is declared reg.",
          [
            quiz("Which keyword starts a procedural always block?", ["assign", "always", "module", "wire"], "always", "The always keyword begins a procedural block."),
            quiz("Which sensitivity-list form is commonly used for combinational logic?", ["always @(posedge clk)", "always @(*)", "always @(negedge clk)", "assign @(*)"], "always @(*)", "The wildcard sensitivity list includes signals read in the block."),
            quiz("Which assignment operator is commonly used for combinational procedural logic?", ["=", "<=", "==", "!="], "=", "Blocking assignment is commonly used in combinational procedural blocks."),
            quiz("Which assignment operator is commonly used for clocked sequential logic?", ["=", "<=", "&", "|"], "<=", "Nonblocking assignment is commonly used for sequential logic."),
            quiz("What can an incomplete combinational assignment cause?", ["A latch", "A clock generator", "A module declaration", "A comment"], "A latch", "If a value must be retained when no assignment occurs, synthesis may infer a latch.")
          ]
        ),

        lesson(
          "verilog-w2-l4",
          "Arithmetic Circuits: Half Adder and Full Adder",
          "Adders are important combinational circuits used in arithmetic units and processors. Verilog can describe half adders and full adders using Boolean expressions or structural connections.",
          [
            {
              heading: "1. Half adder",
              content:
                "A half adder adds two one-bit inputs A and B. It produces a sum output and a carry output. The sum is A XOR B, and the carry is A AND B."
            },
            {
              heading: "2. Half-adder truth table",
              content:
                "For A=0 and B=0, sum and carry are both 0. For A=0 and B=1, sum is 1 and carry is 0. For A=1 and B=0, sum is 1 and carry is 0. For A=1 and B=1, sum is 0 and carry is 1."
            },
            {
              heading: "3. Full adder",
              content:
                "A full adder adds three one-bit inputs: A, B, and carry-in (Cin). It produces sum and carry-out (Cout). The sum is A XOR B XOR Cin."
            },
            {
              heading: "4. Carry generation",
              content:
                "The full-adder carry output is 1 when at least two of the three inputs are 1. It can be expressed as (A AND B) OR (B AND Cin) OR (A AND Cin)."
            },
            {
              heading: "5. Applications",
              content:
                "Adders are used in arithmetic logic units, processors, address-generation circuits, counters, and digital signal processing systems."
            }
          ],
          `module half_adder(
    input a,
    input b,
    output sum,
    output carry
);

assign sum = a ^ b;
assign carry = a & b;

endmodule`,
          "Design a half adder and a full adder. Write the truth table, Verilog code, and Boolean expressions for sum and carry.",
          [
            quiz("How many input bits does a half adder have?", ["One", "Two", "Three", "Four"], "Two", "A half adder adds two one-bit inputs."),
            quiz("Which operation produces the half-adder sum?", ["A AND B", "A OR B", "A XOR B", "A NAND B"], "A XOR B", "The half-adder sum is A XOR B."),
            quiz("Which operation produces the half-adder carry?", ["A AND B", "A XOR B", "A OR B", "A XNOR B"], "A AND B", "The carry is 1 only when both inputs are 1."),
            quiz("How many input bits does a full adder have?", ["One", "Two", "Three", "Four"], "Three", "A full adder uses A, B, and carry-in."),
            quiz("What does Cin represent in a full adder?", ["Clock input", "Carry input", "Control output", "Complement input"], "Carry input", "Cin is the carry input from a previous addition stage.")
          ]
        )
      ]
    },

    // =========================================================
    // WEEK 3
    // =========================================================
    {
      title: "Week 3: Sequential Logic and Registers",
      assignment:
        "Design a D flip-flop, a four-bit register, and a four-bit binary counter. Explain the role of the clock and reset signals.",
      lessons: [
        lesson(
          "verilog-w3-l1",
          "Multiplexers and Decoders",
          "Multiplexers and decoders are common combinational circuits. A multiplexer selects one of several inputs, while a decoder activates an output based on a binary input code.",
          [
            {
              heading: "1. Multiplexer",
              content:
                "A multiplexer (MUX) selects one input from multiple data inputs and forwards it to a single output. Selection is controlled by select signals. A 2:1 MUX has two data inputs, one select input, and one output."
            },
            {
              heading: "2. 2:1 MUX operation",
              content:
                "When select is 0, the output follows input A. When select is 1, the output follows input B. Its Boolean expression is Y = (NOT S AND A) OR (S AND B)."
            },
            {
              heading: "3. Decoder",
              content:
                "A decoder converts an n-bit binary input into up to 2^n output combinations. A 2-to-4 decoder has two inputs and four outputs. For each valid input combination, one corresponding output is activated."
            },
            {
              heading: "4. Enable input",
              content:
                "Some decoders contain an enable signal. When the decoder is disabled, its outputs remain inactive. When enabled, the input code determines which output becomes active."
            },
            {
              heading: "5. Applications",
              content:
                "Multiplexers are used in data selection and communication paths. Decoders are used in memory address selection, instruction decoding, and display-control circuits."
            }
          ],
          `module mux2(
    input a,
    input b,
    input sel,
    output y
);

assign y = sel ? b : a;

endmodule`,
          "Write Verilog code for a 2:1 multiplexer and a 2-to-4 decoder. Prepare truth tables and explain their applications.",
          [
            quiz("What is the main function of a multiplexer?", ["Select one input for an output", "Store data permanently", "Generate a clock", "Count clock pulses"], "Select one input for an output", "A multiplexer selects one of several inputs and forwards it to its output."),
            quiz("How many select lines are required for a 2:1 multiplexer?", ["One", "Two", "Three", "Four"], "One", "A 2:1 multiplexer needs one select bit to choose between two inputs."),
            quiz("How many outputs does a basic 2-to-4 decoder have?", ["Two", "Three", "Four", "Eight"], "Four", "A two-bit input can represent four combinations."),
            quiz("What does a decoder do?", ["Converts an input code into an output selection", "Adds two binary numbers", "Stores a bit", "Divides a clock"], "Converts an input code into an output selection", "A decoder activates an output according to the binary input code."),
            quiz("Which circuit is commonly used for data selection?", ["Multiplexer", "Decoder", "Flip-flop", "Counter"], "Multiplexer", "A multiplexer chooses one data input from multiple sources.")
          ]
        ),

        lesson(
          "verilog-w3-l2",
          "Introduction to Sequential Circuits",
          "Sequential circuits are digital circuits whose outputs depend on current inputs and stored previous information. They use memory elements such as latches and flip-flops.",
          [
            {
              heading: "1. Combinational versus sequential logic",
              content:
                "Combinational logic depends only on current input values. Sequential logic depends on current inputs and stored state. A basic AND gate is combinational, while a counter is sequential."
            },
            {
              heading: "2. Memory elements",
              content:
                "Memory elements store binary information. Latches and flip-flops are common storage elements. They allow a digital system to remember previous values."
            },
            {
              heading: "3. Clock signal",
              content:
                "A clock is a periodic signal used to coordinate state changes in synchronous circuits. A positive edge occurs when the clock changes from 0 to 1. A negative edge occurs when it changes from 1 to 0."
            },
            {
              heading: "4. Reset signal",
              content:
                "A reset initializes a circuit to a known state. Reset can be synchronous or asynchronous. A synchronous reset is acted upon at a clock edge, while an asynchronous reset can act independently of the active clock edge."
            },
            {
              heading: "5. Applications",
              content:
                "Sequential circuits are used in counters, registers, digital clocks, processors, controllers, and communication systems."
            }
          ],
          `module dff(
    input clk,
    input d,
    output reg q
);

always @(posedge clk) begin
    q <= d;
end

endmodule`,
          "Explain the difference between combinational and sequential circuits. Draw a D flip-flop block diagram and identify its clock, input, and output.",
          [
            quiz("What does a sequential circuit depend on?", ["Only current inputs", "Current inputs and stored state", "Only output signals", "Only comments"], "Current inputs and stored state", "Sequential logic uses stored information as well as current inputs."),
            quiz("What is the purpose of a clock in a synchronous circuit?", ["Coordinate state changes", "Rename signals", "Remove outputs", "Create comments"], "Coordinate state changes", "Clock edges coordinate when sequential elements update."),
            quiz("What is a positive clock edge?", ["1 to 0 transition", "0 to 1 transition", "A constant 0", "A constant 1"], "0 to 1 transition", "A positive edge is a rising transition from 0 to 1."),
            quiz("What is the purpose of reset?", ["Initialize a circuit to a known state", "Increase the number of inputs", "Change the HDL", "Remove the clock"], "Initialize a circuit to a known state", "Reset places sequential logic into a defined starting state."),
            quiz("Which is an example of a sequential circuit?", ["AND gate", "OR gate", "Binary counter", "NOT gate"], "Binary counter", "A counter stores and updates its current state.")
          ]
        ),

        lesson(
          "verilog-w3-l3",
          "Flip-Flops and Registers",
          "Flip-flops are one-bit storage elements used in sequential circuits. Registers are groups of flip-flops that store multiple bits. They are essential components in processors and digital systems.",
          [
            {
              heading: "1. D flip-flop",
              content:
                "A D flip-flop captures the value at its D input on the active clock edge and transfers it to Q. The stored value remains until the next active clock edge or a reset operation."
            },
            {
              heading: "2. D flip-flop in Verilog",
              content:
                "A positive-edge-triggered D flip-flop can be described using always @(posedge clk). The nonblocking assignment operator <= is commonly used to update the stored output."
            },
            {
              heading: "3. Resettable flip-flop",
              content:
                "A resettable flip-flop can initialize its output. An asynchronous active-low reset can be described by including negedge reset_n in the event control and checking reset_n inside the block."
            },
            {
              heading: "4. Registers",
              content:
                "A register is a collection of storage bits. A four-bit register stores four binary values. Registers are used for temporary data storage, pipeline stages, and processor state."
            },
            {
              heading: "5. Register enable",
              content:
                "An enable signal controls whether a register captures new data. When enable is active at the clock edge, the register loads its input. Otherwise, it retains its previous value."
            }
          ],
          `module register4(
    input clk,
    input enable,
    input [3:0] d,
    output reg [3:0] q
);

always @(posedge clk) begin
    if (enable)
        q <= d;
end

endmodule`,
          "Design a four-bit register with a clock and enable input. Explain what happens when enable is 1 and when enable is 0.",
          [
            quiz("How many bits can a single flip-flop store?", ["One", "Two", "Four", "Eight"], "One", "A flip-flop is a one-bit storage element."),
            quiz("What does a D flip-flop capture?", ["The D input at the active clock edge", "The output of a comment", "Only the reset signal", "The module name"], "The D input at the active clock edge", "The D flip-flop transfers its D input to Q at the active edge."),
            quiz("How many flip-flops are needed for a four-bit register?", ["One", "Two", "Four", "Eight"], "Four", "Each flip-flop stores one bit, so four are needed for four bits."),
            quiz("Which operator is commonly used for sequential updates?", ["=", "<=", "==", "&"], "<=", "Nonblocking assignment is the common style for clocked sequential logic."),
            quiz("What happens when a register enable is inactive?", ["It loads new data", "It retains its previous value", "It becomes a module", "It removes the clock"], "It retains its previous value", "Without an enabled load, the register holds its stored value.")
          ]
        ),

        lesson(
          "verilog-w3-l4",
          "Counters and Clock Dividers",
          "Counters are sequential circuits that move through a sequence of binary states. They are used in timers, event counting, digital clocks, and control circuits.",
          [
            {
              heading: "1. Binary counter",
              content:
                "A binary counter increments or decrements its stored binary value. A four-bit up counter can represent values from 0 through 15 before returning to 0 when allowed to wrap around."
            },
            {
              heading: "2. Up counter",
              content:
                "An up counter increases its value on each active clock edge. In Verilog, the increment operation can be described using count <= count + 1'b1."
            },
            {
              heading: "3. Down counter",
              content:
                "A down counter decreases its value on each active clock edge. It is useful in countdown timers and control systems."
            },
            {
              heading: "4. Modulo counter",
              content:
                "A modulo-N counter cycles through N states. For example, a modulo-10 counter counts from 0 to 9 and then returns to 0."
            },
            {
              heading: "5. Clock divider",
              content:
                "A clock divider uses counting logic to generate a slower timing signal from a faster clock. The output frequency depends on the counter and toggle conditions. Real FPGA clocking designs should use suitable clock-management resources when required."
            }
          ],
          `module counter4(
    input clk,
    input reset,
    output reg [3:0] count
);

always @(posedge clk) begin
    if (reset)
        count <= 4'b0000;
    else
        count <= count + 1'b1;
end

endmodule`,
          "Write a four-bit up counter with reset. Modify it to create a modulo-10 counter and explain its counting sequence.",
          [
            quiz("What does an up counter do?", ["Decreases its value", "Increases its value", "Stores only text", "Removes clock pulses"], "Increases its value", "An up counter increments its stored value."),
            quiz("What is the maximum unsigned value represented by four bits?", ["7", "8", "15", "16"], "15", "Four unsigned bits represent values from 0 through 15."),
            quiz("What does a modulo-10 counter count through?", ["0 to 7", "0 to 9", "1 to 15", "0 to 10"], "0 to 9", "A modulo-10 counter has ten states, normally numbered 0 through 9."),
            quiz("Which operation increments a counter by one?", ["count - 1", "count + 1", "count == 1", "count & 1"], "count + 1", "Adding one increases the counter value by one."),
            quiz("Where are counters commonly used?", ["Digital timers", "Image editing", "Text formatting", "Web styling"], "Digital timers", "Counters are common in timers, clocks, and event-counting circuits.")
          ]
        )
      ]
    },

    // =========================================================
    // WEEK 4
    // =========================================================
    {
      title: "Week 4: Testbenches, Simulation and Final Project",
      assignment:
        "Create a testbench for your four-bit counter. Apply reset, generate a clock, observe the output sequence, and record the simulation results.",
      lessons: [
        lesson(
          "verilog-w4-l1",
          "Introduction to Testbenches",
          "A testbench is a Verilog module used to test another design module. It applies input signals, observes outputs, and checks whether the design behaves as expected.",
          [
            {
              heading: "1. What is a testbench?",
              content:
                "A testbench is a simulation environment. It is normally not synthesized into the final hardware. Its purpose is to provide test inputs and observe the behavior of the design under test."
            },
            {
              heading: "2. Design under test",
              content:
                "The design being tested is often called the DUT, or Design Under Test. The testbench instantiates the DUT and connects its ports to testbench signals."
            },
            {
              heading: "3. Applying input signals",
              content:
                "A testbench can change input signals at selected simulation times. These input patterns are called stimulus. Stimulus can represent normal operation, boundary conditions, and unusual cases."
            },
            {
              heading: "4. Monitoring outputs",
              content:
                "System tasks such as $display and $monitor help print values during simulation. $display prints when executed, while $monitor reports changes in its listed signals."
            },
            {
              heading: "5. Test coverage",
              content:
                "A useful testbench should check normal conditions, boundary conditions, reset behavior, and relevant combinations of inputs. Testing only one input pattern may miss important design errors."
            }
          ],
          `module tb_and_gate;

reg a, b;
wire y;

and_gate dut(
    .a(a),
    .b(b),
    .y(y)
);

initial begin
    a = 0; b = 0;
    #10 a = 0; b = 1;
    #10 a = 1; b = 0;
    #10 a = 1; b = 1;
    #10 $finish;
end

initial begin
    $monitor("a=%b b=%b y=%b", a, b, y);
end

endmodule`,
          "Create a testbench for an AND gate. Apply all four input combinations and use $monitor to display the inputs and output.",
          [
            quiz("What is the main purpose of a testbench?", ["Test a design in simulation", "Create a physical chip", "Replace all modules", "Format source code"], "Test a design in simulation", "A testbench applies stimulus and checks the behavior of a design."),
            quiz("What does DUT stand for?", ["Design Under Test", "Digital Unit Transfer", "Data Utility Tool", "Design Update Timing"], "Design Under Test", "DUT is the module or design being tested."),
            quiz("What is stimulus in a testbench?", ["Test input signals", "A module name", "A physical resistor", "A synthesis report"], "Test input signals", "Stimulus is the set of input patterns applied during simulation."),
            quiz("Which system task displays values when executed?", ["$display", "$finish", "$stop", "$time"], "$display", "$display prints messages and values during simulation."),
            quiz("Is a normal testbench usually synthesized into the final hardware?", ["Yes", "No", "Only its comments", "Only its module name"], "No", "A testbench is normally simulation-only code.")
          ]
        ),

        lesson(
          "verilog-w4-l2",
          "Clock Generation and Simulation Control",
          "Sequential circuits need clock signals to update their state. Testbenches generate clocks and control simulation time so engineers can observe the behavior of a design.",
          [
            {
              heading: "1. Clock signal",
              content:
                "A clock signal repeatedly changes between logic 0 and logic 1. Its period is the time required for one complete cycle. Its frequency is the number of cycles per second."
            },
            {
              heading: "2. Clock generation",
              content:
                "A testbench can generate a clock by repeatedly inverting a reg variable after a delay. This creates rising and falling edges for the DUT."
            },
            {
              heading: "3. Delay control",
              content:
                "The delay operator # is used in simulation to schedule procedural statements after a specified amount of simulation time. Delays are useful in testbenches but generally are not used to describe synthesizable hardware timing."
            },
            {
              heading: "4. Simulation control",
              content:
                "$finish ends the simulation. $stop pauses or suspends the simulation depending on the simulator. These tasks help control the testbench run."
            },
            {
              heading: "5. Timing observation",
              content:
                "Engineers observe when outputs change relative to clock edges and input changes. This helps identify incorrect state updates and unexpected timing behavior."
            }
          ],
          `module tb_counter;

reg clk;
reg reset;
wire [3:0] count;

counter4 dut(
    .clk(clk),
    .reset(reset),
    .count(count)
);

initial begin
    clk = 0;
    forever #5 clk = ~clk;
end

initial begin
    reset = 1;
    #12 reset = 0;
    #100 $finish;
end

initial begin
    $monitor("time=%0t reset=%b count=%d",
             $time, reset, count);
end

endmodule`,
          "Write a testbench clock that changes state every five time units. Connect it to a four-bit counter and observe the counter output.",
          [
            quiz("What is the time for one complete clock cycle called?", ["Amplitude", "Period", "Resistance", "Logic level"], "Period", "The period is the time required for one complete clock cycle."),
            quiz("Which operator is commonly used for simulation delays?", ["@", "#", "&", "^"], "#", "The # operator introduces a simulation delay in procedural code."),
            quiz("What does forever do in the clock-generation example?", ["Repeats the clock toggle continuously", "Ends the simulation", "Declares an output", "Creates a parameter"], "Repeats the clock toggle continuously", "The forever loop repeatedly toggles the clock signal."),
            quiz("Which system task ends a simulation?", ["$monitor", "$display", "$finish", "$time"], "$finish", "$finish terminates the simulation."),
            quiz("A clock with a period of 10 ns has what frequency?", ["10 MHz", "50 MHz", "100 MHz", "1 GHz"], "100 MHz", "Frequency is the reciprocal of the period: 1 divided by 10 ns equals 100 MHz.")
          ]
        ),

        lesson(
          "verilog-w4-l3",
          "Simulation, Waveforms and Debugging",
          "Simulation allows engineers to observe how a Verilog design behaves over time. Waveforms display signal transitions and help identify functional errors in digital circuits.",
          [
            {
              heading: "1. What is simulation?",
              content:
                "Simulation executes a hardware description in a simulator. The simulator evaluates signal changes and procedural events according to Verilog simulation rules."
            },
            {
              heading: "2. Waveform",
              content:
                "A waveform is a graphical representation of signal values over time. It helps engineers see clock transitions, input changes, output responses, and stored state."
            },
            {
              heading: "3. Reading waveforms",
              content:
                "To read a waveform, identify the time axis, signal names, logic values, and transitions. Compare output transitions with the expected circuit behavior and the active clock edge when applicable."
            },
            {
              heading: "4. Debugging",
              content:
                "Debugging means finding and correcting errors. Common problems include incorrect operators, wrong port connections, incomplete assignments, incorrect reset conditions, and missing test cases."
            },
            {
              heading: "5. Functional verification",
              content:
                "Functional verification checks whether a design produces the correct outputs for the applied inputs. A good verification process includes different input combinations, boundary values, and reset conditions."
            }
          ],
          `initial begin
    $dumpfile("design.vcd");
    $dumpvars(0, tb_counter);
end`,
          "Run a simulation for your counter. Record the waveform, identify the clock and count signals, and write down any mismatch between expected and actual results.",
          [
            quiz("What does a waveform show?", ["Signal values over time", "Only source-code comments", "The physical chip package", "The project folder"], "Signal values over time", "A waveform displays signal transitions against simulation time."),
            quiz("What is the purpose of debugging?", ["Find and correct errors", "Delete all outputs", "Change every signal name", "Stop writing testbenches"], "Find and correct errors", "Debugging identifies the cause of incorrect behavior and helps correct it."),
            quiz("What should be checked when debugging a counter?", ["Clock and reset behavior", "Font size", "File color", "Comment alignment"], "Clock and reset behavior", "Clock and reset conditions directly affect a sequential counter."),
            quiz("What does functional verification check?", ["Whether outputs match expected behavior", "Whether comments are colorful", "Whether the code has a short filename", "Whether the computer is connected to a printer"], "Whether outputs match expected behavior", "Functional verification compares actual behavior with the design requirements."),
            quiz("What does a VCD file commonly contain?", ["Simulation waveform data", "A photograph", "A spreadsheet formula", "A processor instruction manual"], "Simulation waveform data", "VCD stands for Value Change Dump and records signal changes.")
          ]
        ),

        lesson(
          "verilog-w4-l4",
          "Final Project: Traffic-Light Controller or Digital Counter",
          "In this lesson, you combine Verilog concepts to develop a complete digital design. You will create a module, write a testbench, run a simulation, and explain the results.",
          [
            {
              heading: "1. Project selection",
              content:
                "Choose either a traffic-light controller or a digital counter. The traffic-light controller uses states to represent red, yellow, and green lights. The digital counter stores and updates a binary value."
            },
            {
              heading: "2. Design requirements",
              content:
                "Write down the inputs, outputs, reset behavior, clock requirements, and expected state transitions. A clear specification makes it easier to develop and test the design."
            },
            {
              heading: "3. RTL implementation",
              content:
                "Create a Verilog module for the selected project. Use suitable data types, parameters, combinational logic, and sequential logic. Keep the design organized and use meaningful signal names."
            },
            {
              heading: "4. Testbench development",
              content:
                "Create a separate testbench. Generate a clock if the design is sequential, apply reset, provide different input conditions, and observe the outputs. Include normal operation and boundary cases."
            },
            {
              heading: "5. Project documentation",
              content:
                "Prepare a short report containing the project objective, block diagram, Verilog source code, testbench, simulation waveform, expected results, observed results, and conclusion. Explain any errors you found and corrected."
            }
          ],
          `// Example: simple modulo-10 counter

module modulo10_counter(
    input clk,
    input reset,
    output reg [3:0] count
);

always @(posedge clk) begin
    if (reset)
        count <= 4'd0;
    else if (count == 4'd9)
        count <= 4'd0;
    else
        count <= count + 1'b1;
end

endmodule`,
          "Complete one project: (1) write the design specification, (2) draw a block diagram, (3) write the Verilog module, (4) create a testbench, (5) simulate and inspect waveforms, and (6) prepare a short report with screenshots and observations.",
          [
            quiz("What should be prepared before writing the project RTL?", ["Design specification", "Final presentation colors", "A photograph", "A website logo"], "Design specification", "The specification defines what the circuit must do."),
            quiz("Which component is required to test the design in simulation?", ["Testbench", "Printer", "Keyboard driver", "Image editor"], "Testbench", "The testbench applies inputs and checks the design outputs."),
            quiz("What is the purpose of a block diagram?", ["Show the main components and their connections", "Replace the Verilog source code", "Generate a clock automatically", "Remove the need for testing"], "Show the main components and their connections", "A block diagram communicates the organization of the design."),
            quiz("Which item provides a graphical view of simulated signal changes?", ["Waveform", "Module name", "Comment", "Parameter"], "Waveform", "Waveforms show signal values and transitions over time."),
            quiz("Which item should be included in a final project report?", ["Design objective and simulation results", "Only the project title", "Only the folder name", "Only the computer specifications"], "Design objective and simulation results", "The report should explain the objective, implementation, verification, and results.")
          ]
        )
      ]
    }
  ]
};

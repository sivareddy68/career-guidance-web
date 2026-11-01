const digitalElectronicsCourse = {
  title: "Digital Electronics",
  description:
    "Learn number systems, binary arithmetic, logic gates, Boolean algebra, logic simplification, combinational circuits, sequential circuits, flip-flops, counters, registers, and digital system design.",

  weeks: [
    {
      title: "Week 1: Digital Electronics Fundamentals",
      description:
        "Understand digital signals, number systems, binary arithmetic, and logic gates.",
      lessons: [
        {
          title: "Introduction to Digital Electronics",
          content: `
Digital electronics is the branch of electronics that deals with signals represented by discrete values.

Most digital systems use two logic levels:
- Logic 0: LOW.
- Logic 1: HIGH.

Digital circuits are used in computers, calculators, mobile phones, microcontrollers, communication systems, and digital control equipment.

Analog signals can vary continuously, while digital signals represent information using discrete states.

Important advantages of digital systems include:
- Reliable data processing.
- Easy storage and transmission of information.
- Good noise tolerance within specified logic limits.
- Programmable operation.
- Integration into compact integrated circuits.

A digital system is built using logic gates and other digital components.

Combinational circuits produce outputs based on present inputs.

Sequential circuits depend on present inputs and stored previous states.

Digital electronics is an important foundation for microprocessors, embedded systems, computer architecture, and VLSI design.
          `,
          quiz: [
            {
              question: "What type of values are used in basic binary digital systems?",
              options: [
                "Discrete logic values",
                "Only continuously varying values",
                "Only mechanical values",
                "Only temperature values",
              ],
              answer: "Discrete logic values",
            },
            {
              question: "Which two logic levels are commonly used?",
              options: [
                "0 and 1",
                "2 and 3",
                "5 and 10",
                "10 and 20",
              ],
              answer: "0 and 1",
            },
            {
              question: "Which is an application of digital electronics?",
              options: [
                "Microcontrollers",
                "Wooden furniture",
                "Mechanical pencils",
                "Paper manufacturing only",
              ],
              answer: "Microcontrollers",
            },
            {
              question: "What is a major difference between analog and digital signals?",
              options: [
                "Analog signals vary continuously, while digital signals use discrete levels",
                "Both always have identical signal representations",
                "Digital signals cannot carry information",
                "Analog signals only use binary digits",
              ],
              answer:
                "Analog signals vary continuously, while digital signals use discrete levels",
            },
            {
              question: "Which circuit depends on stored previous states?",
              options: [
                "Sequential circuit",
                "Combinational circuit",
                "Resistor network only",
                "Passive filter only",
              ],
              answer: "Sequential circuit",
            },
          ],
        },

        {
          title: "Number Systems",
          content: `
A number system is a method of representing numerical values using a set of symbols.

Digital electronics commonly uses four number systems.

Decimal:
Uses digits 0 to 9.
Base = 10.

Binary:
Uses digits 0 and 1.
Base = 2.

Octal:
Uses digits 0 to 7.
Base = 8.

Hexadecimal:
Uses digits 0 to 9 and letters A to F.
Base = 16.

The base of a number system is also called its radix.

In a positional number system, each digit has a value based on its position.

For example:

Binary 1011₂

= 1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰

= 8 + 0 + 2 + 1

= 11₁₀.

Hexadecimal is commonly used because one hexadecimal digit represents four binary bits.

Example:

Binary 1111₂ = Hexadecimal F.

Number system conversions are important in digital circuits, computer programming, memory addressing, and processor design.
          `,
          quiz: [
            {
              question: "What is the base of the binary number system?",
              options: ["2", "8", "10", "16"],
              answer: "2",
            },
            {
              question: "Which digits are used in the octal system?",
              options: [
                "0 to 7",
                "0 to 9",
                "0 and 1 only",
                "0 to 15",
              ],
              answer: "0 to 7",
            },
            {
              question: "What is the base of hexadecimal?",
              options: ["16", "2", "8", "10"],
              answer: "16",
            },
            {
              question: "What is the decimal equivalent of binary 1011?",
              options: ["11", "10", "12", "13"],
              answer: "11",
            },
            {
              question: "How many binary bits are represented by one hexadecimal digit?",
              options: ["4", "2", "8", "16"],
              answer: "4",
            },
          ],
        },

        {
          title: "Binary Arithmetic",
          content: `
Binary arithmetic performs mathematical operations using only 0 and 1.

Binary addition follows four basic rules:

0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10

The last result produces a carry.

Example:

  101
+ 011
-----
 1000

Binary subtraction also uses borrowing.

Important binary operations include:
- Addition.
- Subtraction.
- Multiplication.
- Division.

Binary multiplication follows the same general process as decimal multiplication, but uses only binary digits.

Two's complement is a common method of representing signed integers in digital systems.

To obtain the two's complement of a binary number:
1. Invert every bit.
2. Add 1.

For example, using 4 bits:

Number: 0101
Invert: 1010
Add 1: 1011

Therefore, 1011 is the 4-bit two's complement representation of -5.

Binary arithmetic is performed by arithmetic logic units inside processors.
          `,
          quiz: [
            {
              question: "What is the result of binary 1 + 1?",
              options: ["10", "01", "11", "00"],
              answer: "10",
            },
            {
              question: "What is binary 101 + 011?",
              options: ["1000", "1100", "0110", "1010"],
              answer: "1000",
            },
            {
              question: "Which operation is used after inverting bits to obtain two's complement?",
              options: ["Add 1", "Subtract 1", "Multiply by 2", "Divide by 2"],
              answer: "Add 1",
            },
            {
              question: "What is the 4-bit two's complement representation of -5?",
              options: ["1011", "0101", "1101", "1001"],
              answer: "1011",
            },
            {
              question: "Which processor unit performs arithmetic and logical operations?",
              options: ["Arithmetic Logic Unit", "Control panel", "Power supply", "Display unit"],
              answer: "Arithmetic Logic Unit",
            },
          ],
        },

        {
          title: "Basic Logic Gates",
          content: `
Logic gates are the basic building blocks of digital circuits.

They perform logical operations on one or more binary inputs and produce a binary output.

AND gate:
Produces 1 only when all inputs are 1.

OR gate:
Produces 1 when at least one input is 1.

NOT gate:
Produces the opposite of its input.

For a two-input AND gate:

A B | Y
0 0 | 0
0 1 | 0
1 0 | 0
1 1 | 1

For a two-input OR gate:

A B | Y
0 0 | 0
0 1 | 1
1 0 | 1
1 1 | 1

For a NOT gate:

A | Y
0 | 1
1 | 0

The output of a logic gate can be represented using a Boolean expression.

AND: Y = A · B

OR: Y = A + B

NOT: Y = A'

Logic gates are implemented using semiconductor devices and are available in digital integrated circuits.
          `,
          quiz: [
            {
              question: "What is the output of an AND gate when both inputs are 1?",
              options: ["1", "0", "Undefined", "High impedance"],
              answer: "1",
            },
            {
              question: "When does an OR gate produce output 1?",
              options: [
                "When at least one input is 1",
                "Only when all inputs are 0",
                "Only when both inputs are 0",
                "Only when inputs are disconnected",
              ],
              answer: "When at least one input is 1",
            },
            {
              question: "What does a NOT gate do?",
              options: [
                "Inverts its input",
                "Adds two inputs",
                "Multiplies two numbers",
                "Stores a bit",
              ],
              answer: "Inverts its input",
            },
            {
              question: "Which Boolean expression represents an AND gate?",
              options: ["A · B", "A + B", "A'", "A ⊕ B"],
              answer: "A · B",
            },
            {
              question: "What is the output of an OR gate for inputs 0 and 0?",
              options: ["0", "1", "10", "Undefined"],
              answer: "0",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Boolean Algebra and Combinational Circuits",
      description:
        "Study universal gates, Boolean laws, simplification, and common combinational circuits.",
      lessons: [
        {
          title: "NAND and NOR Gates",
          content: `
NAND and NOR gates are called universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates.

NAND gate:
It is the complement of an AND gate.

Y = (A · B)'

The output is 0 only when both inputs are 1.

NOR gate:
It is the complement of an OR gate.

Y = (A + B)'

The output is 1 only when both inputs are 0.

Truth table:

A B | NAND | NOR
0 0 | 1 | 1
0 1 | 1 | 0
1 0 | 1 | 0
1 1 | 0 | 0

Universal gates are useful because complex digital circuits can be constructed using one basic gate type.

A NOT gate can be constructed using a NAND gate by connecting both its inputs together.

Similarly, a NOR gate can act as a NOT gate when its inputs are connected together.

NAND and NOR gates are commonly used in digital IC design and logic implementation.
          `,
          quiz: [
            {
              question: "Why are NAND and NOR called universal gates?",
              options: [
                "They can implement any Boolean function",
                "They store unlimited data",
                "They convert AC into DC",
                "They operate without power",
              ],
              answer: "They can implement any Boolean function",
            },
            {
              question: "Which expression represents a NAND gate?",
              options: ["(A · B)'", "A · B", "A + B", "A'"],
              answer: "(A · B)'",
            },
            {
              question: "When does a NAND gate produce output 0?",
              options: [
                "When all inputs are 1",
                "When all inputs are 0",
                "When exactly one input is 0",
                "For every input combination",
              ],
              answer: "When all inputs are 1",
            },
            {
              question: "When does a NOR gate produce output 1?",
              options: [
                "When all inputs are 0",
                "When all inputs are 1",
                "When any input is 1",
                "When exactly one input is 1",
              ],
              answer: "When all inputs are 0",
            },
            {
              question: "How can a NAND gate act as a NOT gate?",
              options: [
                "Connect both NAND inputs together",
                "Disconnect both inputs",
                "Connect its output to ground",
                "Add a third input",
              ],
              answer: "Connect both NAND inputs together",
            },
          ],
        },

        {
          title: "XOR and XNOR Gates",
          content: `
XOR and XNOR are special-purpose logic gates used in arithmetic and comparison circuits.

XOR means Exclusive OR.

Its output is 1 when the inputs are different.

For two inputs:

A B | XOR
0 0 | 0
0 1 | 1
1 0 | 1
1 1 | 0

The Boolean expression is:

Y = A ⊕ B

XNOR is the complement of XOR.

Its output is 1 when the inputs are equal.

A B | XNOR
0 0 | 1
0 1 | 0
1 0 | 0
1 1 | 1

The expression is:

Y = (A ⊕ B)'

Applications of XOR include:
- Binary addition.
- Parity generation.
- Error detection.
- Bit manipulation.

Applications of XNOR include:
- Equality comparison.
- Digital matching circuits.

An XOR gate is used in the sum output of a half adder.
          `,
          quiz: [
            {
              question: "When does an XOR gate produce output 1?",
              options: [
                "When its inputs are different",
                "When both inputs are 0",
                "When both inputs are 1",
                "When inputs are always equal",
              ],
              answer: "When its inputs are different",
            },
            {
              question: "What is the output of XOR for inputs 1 and 1?",
              options: ["0", "1", "10", "Undefined"],
              answer: "0",
            },
            {
              question: "What is the output of XNOR for inputs 0 and 0?",
              options: ["1", "0", "10", "Undefined"],
              answer: "1",
            },
            {
              question: "Which gate is commonly used for binary parity generation?",
              options: ["XOR", "AND only", "NOR only", "NOT only"],
              answer: "XOR",
            },
            {
              question: "What is the relationship between XOR and XNOR?",
              options: [
                "XNOR is the complement of XOR",
                "XNOR is identical to AND",
                "XOR is the complement of NOT",
                "Both always produce the same output",
              ],
              answer: "XNOR is the complement of XOR",
            },
          ],
        },

        {
          title: "Boolean Algebra and Laws",
          content: `
Boolean algebra is a mathematical system used to represent and simplify logical expressions.

Boolean variables have only two possible values:
0 and 1.

Important Boolean laws include:

Identity laws:
A + 0 = A
A · 1 = A

Null laws:
A + 1 = 1
A · 0 = 0

Idempotent laws:
A + A = A
A · A = A

Complement laws:
A + A' = 1
A · A' = 0

Double complement:
(A')' = A

Commutative laws:
A + B = B + A
A · B = B · A

Associative laws:
(A + B) + C = A + (B + C)

Distributive laws:
A · (B + C) = A·B + A·C

De Morgan's laws:

(A · B)' = A' + B'

(A + B)' = A' · B'

These laws help simplify digital circuits by reducing the number of required gates.

Simplified circuits can reduce component count, power consumption, and implementation complexity.
          `,
          quiz: [
            {
              question: "What values can a Boolean variable represent?",
              options: ["0 and 1", "0 to 9", "Any real number", "Only negative numbers"],
              answer: "0 and 1",
            },
            {
              question: "What is A + 0 according to the identity law?",
              options: ["A", "0", "1", "A'"],
              answer: "A",
            },
            {
              question: "What is A · 0?",
              options: ["0", "A", "1", "A'"],
              answer: "0",
            },
            {
              question: "Which law states A + A' = 1?",
              options: [
                "Complement law",
                "Associative law",
                "Commutative law",
                "Idempotent law",
              ],
              answer: "Complement law",
            },
            {
              question: "Which expression is De Morgan's law for (A · B)'?",
              options: ["A' + B'", "A' · B'", "A + B", "A · B"],
              answer: "A' + B'",
            },
          ],
        },

        {
          title: "Half Adders and Full Adders",
          content: `
Adders are combinational circuits used to perform binary addition.

Half adder:

A half adder adds two single-bit binary inputs.

It produces two outputs:
- Sum.
- Carry.

Boolean expressions:

Sum = A ⊕ B

Carry = A · B

Truth table:

A B | Sum Carry
0 0 | 0   0
0 1 | 1   0
1 0 | 1   0
1 1 | 0   1

A half adder does not accept a carry input from a previous stage.

Full adder:

A full adder adds three single-bit inputs:
- A.
- B.
- Carry input (Cin).

It produces:
- Sum.
- Carry output (Cout).

Expressions:

Sum = A ⊕ B ⊕ Cin

Cout = AB + ACin + BCin

Full adders are used to construct multi-bit binary adders.

Multiple full adders can be connected to create a ripple-carry adder.

Adders are important parts of arithmetic logic units and processors.
          `,
          quiz: [
            {
              question: "How many input bits does a half adder accept?",
              options: ["Two", "One", "Three", "Four"],
              answer: "Two",
            },
            {
              question: "Which gate is used for the half-adder sum?",
              options: ["XOR", "AND", "NOR", "NOT"],
              answer: "XOR",
            },
            {
              question: "Which gate produces the half-adder carry?",
              options: ["AND", "OR", "XOR", "XNOR"],
              answer: "AND",
            },
            {
              question: "How many input bits does a full adder add?",
              options: ["Three", "Two", "One", "Four"],
              answer: "Three",
            },
            {
              question: "What is a ripple-carry adder made from?",
              options: [
                "Multiple connected full adders",
                "Only NOT gates",
                "A single resistor",
                "Only memory cells",
              ],
              answer: "Multiple connected full adders",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Combinational and Sequential Circuits",
      description:
        "Understand multiplexers, decoders, encoders, flip-flops, and sequential logic.",
      lessons: [
        {
          title: "Multiplexers and Demultiplexers",
          content: `
A multiplexer (MUX) is a combinational circuit that selects one of several input signals and forwards it to a single output.

The selection is controlled by select lines.

For a 4-to-1 multiplexer:
- Four data inputs are available.
- Two select lines are required.
- One output is produced.

A demultiplexer (DEMUX) performs the reverse type of selection.

It takes one input and routes it to one of several outputs based on select lines.

Applications of multiplexers include:
- Data selection.
- Communication systems.
- Processor datapaths.
- Signal routing.

Applications of demultiplexers include:
- Data distribution.
- Communication receivers.
- Output selection.

The number of select lines for selecting among 2ⁿ inputs is n.

For example, an 8-to-1 multiplexer requires 3 select lines because 2³ = 8.
          `,
          quiz: [
            {
              question: "What does a multiplexer do?",
              options: [
                "Selects one of several inputs for a single output",
                "Stores data permanently",
                "Adds binary numbers",
                "Converts analog signals into sound",
              ],
              answer: "Selects one of several inputs for a single output",
            },
            {
              question: "How many select lines are required for a 4-to-1 MUX?",
              options: ["2", "1", "3", "4"],
              answer: "2",
            },
            {
              question: "What does a demultiplexer do?",
              options: [
                "Routes one input to a selected output",
                "Combines all outputs into one voltage",
                "Stores every input permanently",
                "Performs binary subtraction only",
              ],
              answer: "Routes one input to a selected output",
            },
            {
              question: "How many select lines are required for an 8-to-1 MUX?",
              options: ["3", "2", "4", "8"],
              answer: "3",
            },
            {
              question: "Which is a common application of a multiplexer?",
              options: [
                "Data selection",
                "Voltage generation",
                "Mechanical movement",
                "Temperature measurement only",
              ],
              answer: "Data selection",
            },
          ],
        },

        {
          title: "Encoders and Decoders",
          content: `
An encoder and decoder are combinational logic circuits used for converting information between different representations.

Encoder:

An encoder converts an active input line into a coded binary output.

For example, an 8-to-3 encoder has eight input lines and three output bits.

A priority encoder assigns priority when more than one input is active.

Decoder:

A decoder converts an n-bit binary input into one of up to 2ⁿ output lines.

For example, a 3-to-8 decoder has three input bits and eight output lines.

Only the output corresponding to the input code is activated in a basic active-high decoder.

Applications of encoders include:
- Keyboard encoding.
- Position detection.
- Data representation.

Applications of decoders include:
- Memory address decoding.
- Display control.
- Instruction decoding.

Encoders and decoders are widely used in digital systems to translate between input signals and coded information.
          `,
          quiz: [
            {
              question: "What does an encoder convert?",
              options: [
                "An active input into a coded output",
                "Binary data into electrical energy",
                "AC into DC",
                "Temperature into pressure",
              ],
              answer: "An active input into a coded output",
            },
            {
              question: "How many output bits does an 8-to-3 encoder have?",
              options: ["3", "8", "2", "11"],
              answer: "3",
            },
            {
              question: "How many outputs can a basic 3-to-8 decoder provide?",
              options: ["8", "3", "6", "16"],
              answer: "8",
            },
            {
              question: "What is the purpose of a priority encoder?",
              options: [
                "Assign priority when multiple inputs are active",
                "Store all input values permanently",
                "Convert voltage into resistance",
                "Generate a clock signal",
              ],
              answer: "Assign priority when multiple inputs are active",
            },
            {
              question: "Which is an application of a decoder?",
              options: [
                "Memory address decoding",
                "Battery charging",
                "Mechanical speed control only",
                "Audio recording only",
              ],
              answer: "Memory address decoding",
            },
          ],
        },

        {
          title: "Introduction to Sequential Circuits",
          content: `
Sequential circuits are digital circuits whose outputs depend on present inputs and previous stored states.

Unlike combinational circuits, sequential circuits contain memory elements.

Important features include:
- State storage.
- Feedback connections.
- Clock-controlled operation in synchronous circuits.

Sequential circuits are commonly classified into:

Synchronous circuits:
Their state changes are controlled by a clock signal.

Asynchronous circuits:
Their state changes are not controlled by a single common clock in the same way.

A clock is a periodic signal used to coordinate circuit operations.

The state of a sequential circuit represents the information currently stored in its memory elements.

Applications include:
- Digital counters.
- Registers.
- Memory systems.
- Control units.
- Sequence detectors.

Sequential circuits are essential for building processors and digital control systems.
          `,
          quiz: [
            {
              question: "What determines the output of a sequential circuit?",
              options: [
                "Present inputs and previous stored states",
                "Present inputs only",
                "Power supply color",
                "Component size only",
              ],
              answer: "Present inputs and previous stored states",
            },
            {
              question: "What do sequential circuits contain?",
              options: [
                "Memory elements",
                "Only resistors",
                "Only combinational gates",
                "No feedback or state",
              ],
              answer: "Memory elements",
            },
            {
              question: "What controls state changes in a synchronous circuit?",
              options: ["Clock signal", "Speaker output", "Temperature only", "Light intensity"],
              answer: "Clock signal",
            },
            {
              question: "Which is an application of sequential circuits?",
              options: ["Digital counters", "Simple voltage divider", "Fixed resistor", "Passive wire"],
              answer: "Digital counters",
            },
            {
              question: "What does the state of a sequential circuit represent?",
              options: [
                "Information currently stored",
                "The physical size of the circuit",
                "The supply cable length",
                "The resistor's color",
              ],
              answer: "Information currently stored",
            },
          ],
        },

        {
          title: "SR and D Flip-Flops",
          content: `
A flip-flop is a bistable digital circuit that can store one bit of information.

It has two stable output states, representing 0 and 1.

SR flip-flop:

An SR flip-flop has:
- Set input (S).
- Reset input (R).

For a basic active-high SR latch:
- S = 1, R = 0 sets the output.
- S = 0, R = 1 resets the output.
- S = 0, R = 0 retains the previous state.
- S = 1, R = 1 is an invalid condition for the basic NOR-based SR latch.

D flip-flop:

A D flip-flop has one data input.

At the active clock edge, it transfers the D input to the output.

Q(next) = D

The D flip-flop avoids the invalid input combination of the basic SR latch.

Applications include:
- Data storage.
- Registers.
- Synchronization.
- Digital control systems.

Flip-flops are fundamental building blocks of sequential digital circuits.
          `,
          quiz: [
            {
              question: "How many bits can a basic flip-flop store?",
              options: ["One", "Two", "Four", "Eight"],
              answer: "One",
            },
            {
              question: "What are the inputs of an SR flip-flop?",
              options: [
                "Set and Reset",
                "Source and Receiver",
                "Data and Clock only",
                "Gate and Drain",
              ],
              answer: "Set and Reset",
            },
            {
              question: "What happens when an SR latch receives S=0 and R=0?",
              options: [
                "It retains its previous state",
                "It always resets",
                "It always sets",
                "It loses its power supply",
              ],
              answer: "It retains its previous state",
            },
            {
              question: "What does a D flip-flop transfer at its active clock edge?",
              options: [
                "The D input to the output",
                "The clock input to the reset pin",
                "The output to the power supply",
                "The reset signal to every input",
              ],
              answer: "The D input to the output",
            },
            {
              question: "Which is a common application of flip-flops?",
              options: [
                "Digital data storage",
                "AC voltage generation",
                "Mechanical rotation",
                "Heat measurement",
              ],
              answer: "Digital data storage",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Counters, Registers, and Practical Design",
      description:
        "Study counters, registers, state machines, and a practical digital electronics project.",
      lessons: [
        {
          title: "Counters and Their Types",
          content: `
A counter is a sequential digital circuit that changes its stored binary state in response to clock pulses.

Counters are used to count events, measure time intervals, divide clock frequencies, and control digital sequences.

Counters are commonly classified as:

Asynchronous counters:
The clock input is applied to the first flip-flop, and subsequent flip-flops are triggered through preceding stages.

They are also called ripple counters.

Synchronous counters:
All flip-flops receive a common clock signal.

Their state changes occur together at the active clock edge, subject to propagation delays.

Up counter:
Counts in increasing order.

Down counter:
Counts in decreasing order.

Up/down counter:
Can count in either direction depending on a control input.

A MOD-N counter has N distinct states before repeating.

For example, a MOD-10 counter cycles through ten states.

The number of flip-flops required for a counter with N states must satisfy:

2ⁿ ≥ N.

Counters are used in digital clocks, frequency dividers, timers, and control circuits.
          `,
          quiz: [
            {
              question: "What does a digital counter count?",
              options: [
                "Clock pulses or events",
                "Only analog voltage",
                "Physical wire length",
                "Temperature units only",
              ],
              answer: "Clock pulses or events",
            },
            {
              question: "What is another name for an asynchronous counter?",
              options: ["Ripple counter", "Ring amplifier", "Binary decoder", "Parallel adder"],
              answer: "Ripple counter",
            },
            {
              question: "How are flip-flops clocked in a synchronous counter?",
              options: [
                "By a common clock signal",
                "Only by the previous output",
                "Without any clock",
                "By a temperature sensor",
              ],
              answer: "By a common clock signal",
            },
            {
              question: "How many states does a MOD-10 counter have?",
              options: ["10", "2", "8", "16"],
              answer: "10",
            },
            {
              question: "Which counter can count in increasing or decreasing order?",
              options: ["Up/down counter", "Ring oscillator", "Half adder", "Decoder"],
              answer: "Up/down counter",
            },
          ],
        },

        {
          title: "Registers and Shift Registers",
          content: `
A register is a group of flip-flops used to store multiple bits of binary information.

An n-bit register generally uses n flip-flops.

For example, an 8-bit register stores eight bits.

Registers are used in processors, memory systems, communication devices, and digital controllers.

A shift register is a register that moves stored data from one stage to another in response to clock pulses.

Common shift-register types include:

Serial-In Serial-Out (SISO):
Data enters one bit at a time and leaves one bit at a time.

Serial-In Parallel-Out (SIPO):
Data enters serially and is available simultaneously at multiple outputs.

Parallel-In Serial-Out (PISO):
Multiple bits are loaded together and shifted out serially.

Parallel-In Parallel-Out (PIPO):
Multiple bits are loaded and read in parallel.

Shift registers are used in:
- Serial-to-parallel conversion.
- Parallel-to-serial conversion.
- Temporary data storage.
- Digital communication.
- Sequence generation.

The clock controls when data moves between register stages.
          `,
          quiz: [
            {
              question: "What is a register?",
              options: [
                "A group of flip-flops storing binary data",
                "A group of resistors only",
                "An analog amplifier",
                "A power supply",
              ],
              answer: "A group of flip-flops storing binary data",
            },
            {
              question: "How many flip-flops are generally used in an 8-bit register?",
              options: ["8", "4", "16", "2"],
              answer: "8",
            },
            {
              question: "What does SISO stand for?",
              options: [
                "Serial-In Serial-Out",
                "Single-In Single-Out",
                "Serial-Input System-Output",
                "Synchronous-In Synchronous-Out",
              ],
              answer: "Serial-In Serial-Out",
            },
            {
              question: "Which register accepts serial input and provides parallel output?",
              options: ["SIPO", "PISO", "PIPO", "SISO"],
              answer: "SIPO",
            },
            {
              question: "What controls data movement in a typical shift register?",
              options: ["Clock pulses", "Temperature", "Light intensity", "Resistance color"],
              answer: "Clock pulses",
            },
          ],
        },

        {
          title: "Finite State Machines",
          content: `
A finite state machine (FSM) is a model used to design sequential systems that move between a limited number of states.

An FSM consists of:
- A set of states.
- Inputs.
- Outputs.
- State transition rules.
- Initial state.

The current state and inputs determine the next state.

Two common FSM models are:

Moore machine:
The output depends only on the current state.

Mealy machine:
The output depends on the current state and current inputs.

FSMs are used in:
- Traffic light controllers.
- Vending machines.
- Communication protocols.
- Sequence detectors.
- Digital control systems.

Designing an FSM usually involves:

1. Understanding the required behavior.
2. Identifying all possible states.
3. Defining input conditions.
4. Creating a state transition diagram.
5. Constructing a state table.
6. Implementing the logic.
7. Testing state transitions.

FSMs help organize complex control behavior into clear and manageable states.
          `,
          quiz: [
            {
              question: "What is an FSM?",
              options: [
                "A model of a system with a finite number of states",
                "A type of resistor",
                "A memory device that stores files permanently",
                "An analog voltage regulator",
              ],
              answer: "A model of a system with a finite number of states",
            },
            {
              question: "What determines the next state of an FSM?",
              options: [
                "Current state and inputs",
                "Output color only",
                "Power supply size only",
                "Component package only",
              ],
              answer: "Current state and inputs",
            },
            {
              question: "In a Moore machine, what determines the output?",
              options: [
                "Current state",
                "Current input only",
                "Previous output only",
                "Clock frequency only",
              ],
              answer: "Current state",
            },
            {
              question: "In a Mealy machine, what determines the output?",
              options: [
                "Current state and current inputs",
                "Current state only",
                "Power supply voltage only",
                "Previous clock period only",
              ],
              answer: "Current state and current inputs",
            },
            {
              question: "Which is a common FSM application?",
              options: [
                "Traffic light controller",
                "Fixed resistor",
                "Passive capacitor",
                "Simple wire connection",
              ],
              answer: "Traffic light controller",
            },
          ],
        },

        {
          title: "Final Project: Digital Counter Design",
          content: `
Project: Design and test a digital counter.

The objective is to combine logic gates, flip-flops, clock signals, and sequential circuit concepts.

A suitable project is a 4-bit binary up counter.

Required concepts:
- Binary counting.
- Flip-flops.
- Clock signals.
- State transitions.
- Output observation.

Project stages:

1. Define the counter requirement.

The counter should progress through binary states from 0000 to 1111 and then repeat.

2. Select the flip-flops.

A 4-bit counter requires four storage bits.

3. Design the counting logic.

Determine how the stored state changes after each clock pulse.

4. Create a state table.

List the current state and corresponding next state.

5. Implement the circuit.

Use an appropriate digital design simulator or low-voltage educational logic circuit setup.

6. Apply clock pulses.

Observe how the binary output changes.

7. Verify the sequence.

Check that the output advances through the expected binary values.

8. Test reset behavior.

If a reset input is included, verify that it returns the counter to its defined starting state.

9. Record results.

Document the circuit diagram, state table, timing observations, and test results.

10. Review the design.

Check whether the counter behaves correctly for all required states.

This project introduces sequential logic design and demonstrates how counters are built from digital storage elements.
          `,
          quiz: [
            {
              question: "What is the objective of the final project?",
              options: [
                "Design and test a digital counter",
                "Build an analog radio",
                "Create a database",
                "Design a computer network",
              ],
              answer: "Design and test a digital counter",
            },
            {
              question: "How many bits are required for a 4-bit binary counter?",
              options: ["4", "2", "8", "16"],
              answer: "4",
            },
            {
              question: "How many distinct binary states can a 4-bit counter represent?",
              options: ["16", "4", "8", "32"],
              answer: "16",
            },
            {
              question: "What is the purpose of a state table?",
              options: [
                "Show current states and corresponding next states",
                "List component prices only",
                "Measure wire resistance",
                "Store program files",
              ],
              answer: "Show current states and corresponding next states",
            },
            {
              question: "What should be verified during counter testing?",
              options: [
                "The output follows the expected binary sequence",
                "The circuit changes its physical size",
                "The clock signal becomes a resistor",
                "The power supply stores the output permanently",
              ],
              answer: "The output follows the expected binary sequence",
            },
          ],
        },
      ],
    },
  ],
};

export default digitalElectronicsCourse;
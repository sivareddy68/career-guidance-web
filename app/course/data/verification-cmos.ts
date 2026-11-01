
const cmosVerificationCourse = {
  title: "CMOS Verification",
  description:
    "Learn CMOS circuit verification, transistor-level simulation, static timing analysis, power analysis, design rule checks, layout verification, and debugging techniques used in VLSI design.",

  weeks: [
    {
      title: "Week 1: CMOS Verification Fundamentals",
      description:
        "Understand CMOS technology, transistor behavior, circuit operation, and verification fundamentals.",
      lessons: [
        {
          title: "Introduction to CMOS Verification",
          content: `CMOS verification is the process of checking whether CMOS circuits operate according to their design requirements.

CMOS stands for Complementary Metal-Oxide-Semiconductor.

It uses PMOS and NMOS transistors to implement digital circuits.

Verification helps identify:
- Functional errors
- Timing problems
- Power-related issues
- Electrical violations
- Layout-related problems

CMOS verification is important in ASIC and VLSI development because errors should be identified before chip fabrication.

Common tools include SPICE simulators, waveform viewers, and physical verification tools.`,
          quiz: [
            {
              question: "What does CMOS stand for?",
              options: [
                "Complementary Metal-Oxide-Semiconductor",
                "Common Metal Operating System",
                "Computer MOS Structure",
                "Complementary Machine Output System",
              ],
              answer: "Complementary Metal-Oxide-Semiconductor",
            },
            {
              question: "Which transistors are used in CMOS technology?",
              options: [
                "NMOS and PMOS",
                "Only NMOS",
                "Only PMOS",
                "BJT and JFET only",
              ],
              answer: "NMOS and PMOS",
            },
            {
              question: "What is the purpose of CMOS verification?",
              options: [
                "Check whether circuits meet design requirements",
                "Create PCB designs only",
                "Write software applications",
                "Design web pages",
              ],
              answer: "Check whether circuits meet design requirements",
            },
            {
              question: "Which tool is commonly used for transistor-level simulation?",
              options: ["SPICE", "HTML", "Photoshop", "Excel"],
              answer: "SPICE",
            },
            {
              question: "When should design errors ideally be identified?",
              options: [
                "Before chip fabrication",
                "Only after manufacturing",
                "After product delivery",
                "Only during packaging",
              ],
              answer: "Before chip fabrication",
            },
          ],
        },
        {
          title: "NMOS and PMOS Transistor Operation",
          content: `NMOS and PMOS are the two main transistor types used in CMOS circuits.

NMOS:
- Turns ON when the gate voltage is sufficiently higher than its source voltage.
- Commonly provides a pull-down path.
- Conducts strongly when the gate voltage is high.

PMOS:
- Turns ON when the gate voltage is sufficiently lower than its source voltage.
- Commonly provides a pull-up path.
- Conducts strongly when the gate voltage is low.

In a CMOS inverter, NMOS and PMOS operate in complementary ways.

Verification checks whether transistor behavior produces the expected output for different input conditions.`,
          quiz: [
            {
              question: "Which transistor commonly provides the pull-down path?",
              options: ["NMOS", "PMOS", "BJT", "JFET"],
              answer: "NMOS",
            },
            {
              question: "Which transistor commonly provides the pull-up path?",
              options: ["PMOS", "NMOS", "BJT", "SCR"],
              answer: "PMOS",
            },
            {
              question: "When does an NMOS transistor generally turn ON?",
              options: [
                "When gate voltage is sufficiently high relative to source",
                "When gate voltage is always zero",
                "Only when source voltage is higher than gate voltage",
                "Only during simulation",
              ],
              answer: "When gate voltage is sufficiently high relative to source",
            },
            {
              question: "When does a PMOS transistor generally turn ON?",
              options: [
                "When gate voltage is sufficiently low relative to source",
                "When gate voltage is always high",
                "Only when drain current is zero",
                "Only when the circuit is disconnected",
              ],
              answer: "When gate voltage is sufficiently low relative to source",
            },
            {
              question: "What is a common CMOS inverter structure?",
              options: [
                "One NMOS and one PMOS transistor",
                "Two resistors only",
                "One capacitor only",
                "Two inductors",
              ],
              answer: "One NMOS and one PMOS transistor",
            },
          ],
        },
        {
          title: "CMOS Inverter Characteristics",
          content: `A CMOS inverter is a basic digital circuit that produces the opposite of its input.

When input is LOW:
- PMOS turns ON.
- NMOS turns OFF.
- Output becomes HIGH.

When input is HIGH:
- PMOS turns OFF.
- NMOS turns ON.
- Output becomes LOW.

Important inverter characteristics include:
- Voltage Transfer Characteristic (VTC)
- Switching threshold
- Noise margins
- Propagation delay
- Power consumption

Verification checks whether the inverter produces the expected output and meets electrical performance requirements.`,
          quiz: [
            {
              question: "What does a CMOS inverter produce?",
              options: [
                "Complement of the input",
                "Same value as input",
                "Always HIGH",
                "Always LOW",
              ],
              answer: "Complement of the input",
            },
            {
              question: "What happens when the inverter input is LOW?",
              options: [
                "Output becomes HIGH",
                "Output becomes LOW",
                "Output becomes Z",
                "Output is disconnected",
              ],
              answer: "Output becomes HIGH",
            },
            {
              question: "What is VTC?",
              options: [
                "Voltage Transfer Characteristic",
                "Variable Timing Control",
                "Voltage Testing Circuit",
                "Virtual Transistor Connection",
              ],
              answer: "Voltage Transfer Characteristic",
            },
            {
              question: "What does propagation delay measure?",
              options: [
                "Time between input change and corresponding output response",
                "Chip package weight",
                "Number of transistors",
                "Memory capacity",
              ],
              answer: "Time between input change and corresponding output response",
            },
            {
              question: "Which characteristic is related to noise tolerance?",
              options: [
                "Noise margin",
                "Clock period",
                "Chip area only",
                "File size",
              ],
              answer: "Noise margin",
            },
          ],
        },
        {
          title: "CMOS Logic Gates and Circuit Testing",
          content: `CMOS technology can implement logic gates such as NAND, NOR, AND, OR, and XOR.

Each gate uses transistor networks to implement its logic function.

Examples:
- NAND: Output is LOW only when all inputs are HIGH.
- NOR: Output is HIGH only when all inputs are LOW.
- AND: Output is HIGH when all inputs are HIGH.
- OR: Output is HIGH when at least one input is HIGH.

Circuit verification involves:
1. Applying input combinations.
2. Observing output responses.
3. Comparing results with the truth table.
4. Checking delay and electrical behavior.

Test cases should cover all possible input combinations for small logic circuits.`,
          quiz: [
            {
              question: "When does a NAND gate produce LOW?",
              options: [
                "When all inputs are HIGH",
                "When all inputs are LOW",
                "When one input is LOW",
                "Always",
              ],
              answer: "When all inputs are HIGH",
            },
            {
              question: "When does a NOR gate produce HIGH?",
              options: [
                "When all inputs are LOW",
                "When all inputs are HIGH",
                "When one input is HIGH",
                "Always",
              ],
              answer: "When all inputs are LOW",
            },
            {
              question: "What is used to compare expected and actual logic outputs?",
              options: [
                "Truth table",
                "Floorplan",
                "Package diagram",
                "Clock tree",
              ],
              answer: "Truth table",
            },
            {
              question: "What should be tested in a small combinational circuit?",
              options: [
                "All possible input combinations",
                "Only one input combination",
                "Only the clock signal",
                "Only the supply voltage",
              ],
              answer: "All possible input combinations",
            },
            {
              question: "Which is a CMOS logic gate?",
              options: ["NAND", "Transformer", "Antenna", "Inductor"],
              answer: "NAND",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Transistor-Level Simulation and Analysis",
      description:
        "Learn SPICE simulation, testbench creation, waveform analysis, and electrical performance verification.",
      lessons: [
        {
          title: "Introduction to SPICE Simulation",
          content: `SPICE stands for Simulation Program with Integrated Circuit Emphasis.

It is used to simulate analog and transistor-level circuits.

SPICE helps designers analyze:
- Voltage and current
- Transistor operating conditions
- Switching behavior
- Power consumption
- Circuit response over time

Common simulation types include:

DC analysis:
Studies steady-state voltage and current.

AC analysis:
Studies small-signal frequency response.

Transient analysis:
Studies circuit behavior over time.

SPICE simulation is widely used for CMOS circuit verification.`,
          quiz: [
            {
              question: "What does SPICE stand for?",
              options: [
                "Simulation Program with Integrated Circuit Emphasis",
                "System Program for Internal Circuit Evaluation",
                "Signal Processing Integrated Circuit Engine",
                "Simulation Platform for IC Engineering",
              ],
              answer: "Simulation Program with Integrated Circuit Emphasis",
            },
            {
              question: "Which analysis studies circuit behavior over time?",
              options: ["Transient analysis", "DC analysis", "Static analysis", "Layout analysis"],
              answer: "Transient analysis",
            },
            {
              question: "Which analysis studies steady-state voltage and current?",
              options: ["DC analysis", "Transient analysis", "AC analysis", "Timing analysis"],
              answer: "DC analysis",
            },
            {
              question: "Which analysis studies small-signal frequency response?",
              options: ["AC analysis", "DC analysis", "DRC", "LVS"],
              answer: "AC analysis",
            },
            {
              question: "SPICE is commonly used for:",
              options: [
                "Transistor-level circuit simulation",
                "Web development",
                "Database management",
                "Image editing",
              ],
              answer: "Transistor-level circuit simulation",
            },
          ],
        },
        {
          title: "CMOS Testbench and Test Vector Creation",
          content: `A CMOS testbench provides input signals and operating conditions to verify a circuit.

Test vectors are sets of input values applied during simulation.

A good verification testbench includes:
- Input stimulus
- Power supply conditions
- Input transition timing
- Output observation
- Expected result checking

For a CMOS inverter, test vectors should include LOW-to-HIGH and HIGH-to-LOW input transitions.

For larger circuits, test vectors should cover different functional conditions and boundary cases.`,
          quiz: [
            {
              question: "What is a test vector?",
              options: [
                "A set of input values applied to a circuit",
                "A physical transistor",
                "A layout layer",
                "A power supply",
              ],
              answer: "A set of input values applied to a circuit",
            },
            {
              question: "What is the purpose of a testbench?",
              options: [
                "Apply inputs and observe circuit behavior",
                "Manufacture transistors",
                "Create masks",
                "Design chip packaging",
              ],
              answer: "Apply inputs and observe circuit behavior",
            },
            {
              question: "Which transitions should be checked in an inverter?",
              options: [
                "LOW-to-HIGH and HIGH-to-LOW",
                "Only LOW-to-LOW",
                "Only HIGH-to-HIGH",
                "No transitions",
              ],
              answer: "LOW-to-HIGH and HIGH-to-LOW",
            },
            {
              question: "Why include boundary cases in testing?",
              options: [
                "To examine behavior under important operating conditions",
                "To remove all input signals",
                "To avoid simulation",
                "To increase file size",
              ],
              answer: "To examine behavior under important operating conditions",
            },
            {
              question: "What should be observed during simulation?",
              options: [
                "Circuit outputs and electrical behavior",
                "Only source code comments",
                "Only folder names",
                "Only layout colors",
              ],
              answer: "Circuit outputs and electrical behavior",
            },
          ],
        },
        {
          title: "Waveform Analysis and Debugging",
          content: `Waveform analysis is used to study signal changes during circuit simulation.

Waveforms can display:
- Input voltage
- Output voltage
- Clock signals
- Internal node voltages
- Current waveforms

Important debugging checks:
- Unexpected output transitions
- Incorrect logic behavior
- Propagation delay
- Glitches
- Slow signal transitions

Waveform viewers help designers compare expected and actual circuit responses.

A common workflow is to run simulation, inspect waveforms, identify unexpected behavior, and modify the circuit if needed.`,
          quiz: [
            {
              question: "What is waveform analysis used for?",
              options: [
                "Inspect signal behavior over time",
                "Create PCB layouts",
                "Write documentation only",
                "Generate transistor masks",
              ],
              answer: "Inspect signal behavior over time",
            },
            {
              question: "Which signal can be displayed in a waveform viewer?",
              options: ["Output voltage", "Only file names", "Only comments", "Only folder paths"],
              answer: "Output voltage",
            },
            {
              question: "What is a glitch?",
              options: [
                "An unwanted temporary signal transition",
                "A transistor package",
                "A layout boundary",
                "A power supply",
              ],
              answer: "An unwanted temporary signal transition",
            },
            {
              question: "What should be done after identifying unexpected waveform behavior?",
              options: [
                "Investigate and debug the circuit",
                "Ignore the result",
                "Delete the testbench",
                "Stop all verification",
              ],
              answer: "Investigate and debug the circuit",
            },
            {
              question: "Which tool feature helps inspect signal timing?",
              options: [
                "Waveform viewer",
                "Text editor only",
                "File manager",
                "Spreadsheet",
              ],
              answer: "Waveform viewer",
            },
          ],
        },
        {
          title: "Power and Performance Verification",
          content: `CMOS circuit verification includes checking power consumption and performance.

Three important power components are:

Dynamic power:
Power consumed during switching activity.

Static power:
Power consumed when the circuit is not actively switching, often due to leakage.

Short-circuit power:
Power consumed briefly when PMOS and NMOS conduct simultaneously during transitions.

Dynamic power is approximately:

P = alpha × C × V² × f

Where:
- alpha is switching activity.
- C is effective capacitance.
- V is supply voltage.
- f is clock frequency.

Performance verification also checks propagation delay and transition times.`,
          quiz: [
            {
              question: "Which power component is associated with switching activity?",
              options: ["Dynamic power", "Static power only", "Leakage-free power", "Mechanical power"],
              answer: "Dynamic power",
            },
            {
              question: "What causes static power consumption in CMOS?",
              options: [
                "Leakage currents",
                "Only clock switching",
                "Only output transitions",
                "External mechanical movement",
              ],
              answer: "Leakage currents",
            },
            {
              question: "Which factor appears squared in the dynamic power equation?",
              options: ["Supply voltage", "Frequency", "Capacitance", "Switching activity"],
              answer: "Supply voltage",
            },
            {
              question: "When does short-circuit power occur?",
              options: [
                "During transitions when both transistor networks conduct",
                "Only when power is disconnected",
                "Only during layout generation",
                "Only during packaging",
              ],
              answer: "During transitions when both transistor networks conduct",
            },
            {
              question: "Which is a performance parameter?",
              options: ["Propagation delay", "File size", "Screen resolution", "Folder name"],
              answer: "Propagation delay",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Timing and Physical Verification",
      description:
        "Understand static timing analysis, setup and hold checks, design rule checks, and layout versus schematic verification.",
      lessons: [
        {
          title: "Static Timing Analysis Fundamentals",
          content: `Static Timing Analysis (STA) checks whether signals can reach their destination within required timing limits.

It evaluates timing paths without applying simulation vectors.

Important concepts:
- Startpoint
- Endpoint
- Data path
- Clock path
- Setup time
- Hold time
- Clock period

STA helps identify timing violations before fabrication.

Timing constraints are commonly specified using clock definitions, input delays, and output delays.`,
          quiz: [
            {
              question: "What does STA stand for?",
              options: [
                "Static Timing Analysis",
                "Signal Testing Application",
                "System Transfer Architecture",
                "Static Transistor Assembly",
              ],
              answer: "Static Timing Analysis",
            },
            {
              question: "What does STA primarily check?",
              options: [
                "Whether timing requirements are met",
                "Only circuit colors",
                "Only transistor count",
                "Only file size",
              ],
              answer: "Whether timing requirements are met",
            },
            {
              question: "What is an endpoint in a timing path?",
              options: [
                "The destination of the timing path",
                "The power supply",
                "The clock generator only",
                "The layout boundary",
              ],
              answer: "The destination of the timing path",
            },
            {
              question: "Does STA require simulation test vectors?",
              options: [
                "No",
                "Yes, always",
                "Only for DC analysis",
                "Only for layout extraction",
              ],
              answer: "No",
            },
            {
              question: "Which is a timing constraint?",
              options: [
                "Clock period",
                "Image resolution",
                "Folder location",
                "Font size",
              ],
              answer: "Clock period",
            },
          ],
        },
        {
          title: "Setup Time and Hold Time Verification",
          content: `Setup time and hold time are important timing requirements of flip-flops.

Setup time:
The input data must remain stable for a specified period before the active clock edge.

Hold time:
The input data must remain stable for a specified period after the active clock edge.

Setup violation:
Data arrives too late before the capturing clock edge.

Hold violation:
Data changes too early after the capturing clock edge.

Both violations can cause unreliable sequential circuit operation.

STA tools analyze these requirements and report timing violations.`,
          quiz: [
            {
              question: "What is setup time?",
              options: [
                "Required data stability time before the clock edge",
                "Data stability time after the clock edge",
                "Clock generation delay only",
                "Reset pulse width",
              ],
              answer: "Required data stability time before the clock edge",
            },
            {
              question: "What is hold time?",
              options: [
                "Required data stability time after the clock edge",
                "Data stability time before the clock edge",
                "Clock period",
                "Power-up delay",
              ],
              answer: "Required data stability time after the clock edge",
            },
            {
              question: "What causes a setup violation?",
              options: [
                "Data arrives too late",
                "Data arrives too early",
                "Supply voltage increases",
                "Clock stops permanently",
              ],
              answer: "Data arrives too late",
            },
            {
              question: "What causes a hold violation?",
              options: [
                "Data changes too early after the clock edge",
                "Data arrives too late before the clock edge",
                "Clock frequency becomes zero",
                "Power consumption decreases",
              ],
              answer: "Data changes too early after the clock edge",
            },
            {
              question: "Which tool is commonly used to analyze setup and hold timing?",
              options: ["STA tool", "Image editor", "Text formatter", "Web browser"],
              answer: "STA tool",
            },
          ],
        },
        {
          title: "Design Rule Check (DRC)",
          content: `Design Rule Check (DRC) verifies whether a physical layout follows the manufacturing rules of a semiconductor process.

Common DRC checks include:
- Minimum spacing between metal wires.
- Minimum width of layout shapes.
- Via dimensions and spacing.
- Enclosure requirements.
- Minimum area requirements.

DRC violations can make a layout unsuitable for fabrication.

Physical verification tools compare the layout against technology-specific design rules.

DRC should be run repeatedly as the layout is developed and updated.`,
          quiz: [
            {
              question: "What does DRC stand for?",
              options: [
                "Design Rule Check",
                "Digital Register Control",
                "Data Routing Circuit",
                "Design Response Calculation",
              ],
              answer: "Design Rule Check",
            },
            {
              question: "What does DRC verify?",
              options: [
                "Layout compliance with manufacturing rules",
                "Only RTL functionality",
                "Only software syntax",
                "Only clock frequency",
              ],
              answer: "Layout compliance with manufacturing rules",
            },
            {
              question: "Which is a common DRC check?",
              options: [
                "Minimum metal spacing",
                "Programming language version",
                "Database connection",
                "Font alignment",
              ],
              answer: "Minimum metal spacing",
            },
            {
              question: "Why are DRC violations important?",
              options: [
                "They may make the layout unsuitable for fabrication",
                "They improve transistor performance automatically",
                "They remove timing constraints",
                "They reduce all power consumption",
              ],
              answer: "They may make the layout unsuitable for fabrication",
            },
            {
              question: "Which information defines physical design rules?",
              options: [
                "Technology-specific rule files",
                "HTML files",
                "User manuals only",
                "Source code comments",
              ],
              answer: "Technology-specific rule files",
            },
          ],
        },
        {
          title: "Layout Versus Schematic (LVS)",
          content: `Layout Versus Schematic (LVS) checks whether the physical layout represents the intended circuit schematic.

It compares extracted layout connectivity with the reference schematic.

Common LVS checks include:
- Device count
- Device types
- Transistor dimensions
- Electrical connectivity
- Net matching

A mismatch may indicate missing connections, incorrect devices, or unintended shorts.

DRC checks manufacturing rules, while LVS checks whether the physical circuit matches the intended schematic.`,
          quiz: [
            {
              question: "What does LVS stand for?",
              options: [
                "Layout Versus Schematic",
                "Logic Verification System",
                "Low Voltage Supply",
                "Layout Variable Structure",
              ],
              answer: "Layout Versus Schematic",
            },
            {
              question: "What does LVS compare?",
              options: [
                "Extracted layout circuit and reference schematic",
                "Two source code files",
                "Two simulation waveforms only",
                "Two timing reports",
              ],
              answer: "Extracted layout circuit and reference schematic",
            },
            {
              question: "Which can cause an LVS mismatch?",
              options: [
                "Missing electrical connection",
                "Correct device matching",
                "Valid metal spacing",
                "Readable documentation",
              ],
              answer: "Missing electrical connection",
            },
            {
              question: "What does DRC mainly check?",
              options: [
                "Manufacturing layout rules",
                "Schematic connectivity only",
                "Clock frequency only",
                "Software compilation",
              ],
              answer: "Manufacturing layout rules",
            },
            {
              question: "What does LVS mainly check?",
              options: [
                "Circuit correspondence between layout and schematic",
                "Metal spacing only",
                "Power supply stability only",
                "Simulation speed",
              ],
              answer: "Circuit correspondence between layout and schematic",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced CMOS Verification and Practical Project",
      description:
        "Learn post-layout simulation, parasitic analysis, verification debugging, and a complete CMOS inverter verification project.",
      lessons: [
        {
          title: "Post-Layout Simulation and Parasitic Extraction",
          content: `Post-layout simulation checks circuit behavior after physical layout information is included.

Physical layouts introduce parasitic effects such as:
- Wire resistance
- Wire capacitance
- Coupling capacitance
- Interconnect delay

Parasitic extraction calculates these electrical effects from the layout.

Extracted information is used in post-layout simulation to evaluate more realistic circuit behavior.

Post-layout results may differ from pre-layout simulation because physical interconnect effects are included.`,
          quiz: [
            {
              question: "What is post-layout simulation?",
              options: [
                "Simulation using physical layout information",
                "Simulation without any circuit model",
                "Only RTL compilation",
                "Only source code formatting",
              ],
              answer: "Simulation using physical layout information",
            },
            {
              question: "Which is a parasitic effect?",
              options: [
                "Wire capacitance",
                "HTML formatting",
                "Source code comments",
                "File compression",
              ],
              answer: "Wire capacitance",
            },
            {
              question: "What does parasitic extraction calculate?",
              options: [
                "Electrical effects of physical interconnects",
                "Only transistor names",
                "Only module descriptions",
                "Only clock frequency",
              ],
              answer: "Electrical effects of physical interconnects",
            },
            {
              question: "Why can post-layout results differ from pre-layout results?",
              options: [
                "Physical interconnect effects are included",
                "The circuit has no transistors",
                "The clock is always removed",
                "The source code is deleted",
              ],
              answer: "Physical interconnect effects are included",
            },
            {
              question: "Which effect can increase signal delay?",
              options: [
                "Interconnect resistance and capacitance",
                "Comments in RTL",
                "File names",
                "Documentation formatting",
              ],
              answer: "Interconnect resistance and capacitance",
            },
          ],
        },
        {
          title: "CMOS Verification Debugging Techniques",
          content: `Verification debugging identifies and resolves problems found during simulation and physical verification.

Common problems include:
- Incorrect logic output.
- Unexpected voltage levels.
- Excessive propagation delay.
- High power consumption.
- DRC violations.
- LVS mismatches.

A systematic debugging process includes:
1. Reproduce the issue.
2. Inspect simulation waveforms and reports.
3. Identify the affected circuit section.
4. Find the root cause.
5. Correct the design.
6. Repeat verification.

Keeping simulation results and reports helps track design changes.`,
          quiz: [
            {
              question: "What is the purpose of verification debugging?",
              options: [
                "Identify and resolve design problems",
                "Increase source code size",
                "Remove all test cases",
                "Create documentation only",
              ],
              answer: "Identify and resolve design problems",
            },
            {
              question: "What can help identify an unexpected output?",
              options: [
                "Simulation waveform",
                "Image editor",
                "File manager",
                "Text color",
              ],
              answer: "Simulation waveform",
            },
            {
              question: "What should be identified when debugging?",
              options: [
                "Root cause",
                "Only file name",
                "Only project title",
                "Only folder size",
              ],
              answer: "Root cause",
            },
            {
              question: "Which report identifies layout rule violations?",
              options: ["DRC report", "HTML report", "Database report", "Email report"],
              answer: "DRC report",
            },
            {
              question: "What should happen after correcting a design issue?",
              options: [
                "Repeat verification",
                "Delete all results",
                "Skip testing",
                "Stop simulation permanently",
              ],
              answer: "Repeat verification",
            },
          ],
        },
        {
          title: "CMOS Verification Tools and Design Flow",
          content: `CMOS verification uses different tools at different stages of the VLSI design flow.

Common tool categories:

- SPICE simulators: Transistor-level circuit simulation.
- Waveform viewers: Signal inspection and debugging.
- STA tools: Timing analysis.
- DRC tools: Manufacturing rule checking.
- LVS tools: Layout and schematic comparison.
- Parasitic extraction tools: Calculation of interconnect effects.

A simplified flow:

Schematic Design
→ Pre-layout Simulation
→ Physical Layout
→ DRC
→ LVS
→ Parasitic Extraction
→ Post-layout Simulation

The exact flow and tool selection depend on the technology, project, and design methodology.`,
          quiz: [
            {
              question: "Which tool category is used for transistor-level simulation?",
              options: [
                "SPICE simulator",
                "STA tool",
                "DRC tool",
                "LVS tool",
              ],
              answer: "SPICE simulator",
            },
            {
              question: "Which tool performs timing analysis?",
              options: ["STA tool", "SPICE only", "DRC tool", "LVS tool"],
              answer: "STA tool",
            },
            {
              question: "Which tool checks manufacturing rules?",
              options: ["DRC tool", "LVS tool", "Waveform viewer", "Text editor"],
              answer: "DRC tool",
            },
            {
              question: "Which tool compares layout and schematic?",
              options: ["LVS tool", "STA tool", "Waveform viewer", "Compiler"],
              answer: "LVS tool",
            },
            {
              question: "What normally follows parasitic extraction in a post-layout flow?",
              options: [
                "Post-layout simulation",
                "HTML development",
                "Database creation",
                "Source code formatting",
              ],
              answer: "Post-layout simulation",
            },
          ],
        },
        {
          title: "Mini Project: CMOS Inverter Verification",
          content: `In this project, design and verify a CMOS inverter at transistor level.

Project objective:
Check whether an NMOS and PMOS transistor pair produces the expected inverter behavior.

Project steps:

1. Create a CMOS inverter schematic.
2. Select suitable NMOS and PMOS device models.
3. Connect the supply voltage and ground.
4. Apply an input pulse signal.
5. Run DC analysis to examine the voltage transfer characteristic.
6. Run transient analysis to observe input and output transitions.
7. Measure propagation delay and transition times.
8. Examine power consumption.
9. Review the simulation waveforms.
10. Document the verification results.

Expected behavior:
- LOW input produces HIGH output.
- HIGH input produces LOW output.

Deliverables:
- CMOS inverter schematic.
- Simulation setup.
- DC and transient analysis results.
- Waveform screenshots.
- Verification report.

This project introduces the transistor-level simulation and verification process used in CMOS circuit development.`,
          quiz: [
            {
              question: "What circuit is developed in this project?",
              options: [
                "CMOS inverter",
                "Full adder only",
                "SRAM array",
                "PLL",
              ],
              answer: "CMOS inverter",
            },
            {
              question: "Which transistors are required for a CMOS inverter?",
              options: [
                "NMOS and PMOS",
                "Only NMOS",
                "Only PMOS",
                "Only BJT",
              ],
              answer: "NMOS and PMOS",
            },
            {
              question: "Which analysis examines the voltage transfer characteristic?",
              options: [
                "DC analysis",
                "LVS",
                "DRC",
                "STA only",
              ],
              answer: "DC analysis",
            },
            {
              question: "Which analysis observes input and output transitions over time?",
              options: [
                "Transient analysis",
                "DC analysis",
                "DRC",
                "LVS",
              ],
              answer: "Transient analysis",
            },
            {
              question: "What is the expected output for a HIGH inverter input?",
              options: [
                "LOW",
                "HIGH",
                "Z",
                "X",
              ],
              answer: "LOW",
            },
          ],
        },
      ],
    },
  ],
};

export default cmosVerificationCourse;

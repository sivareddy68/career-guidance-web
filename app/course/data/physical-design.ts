
const physicalDesignCourse = {
  title: "Physical Design Concepts",
  description:
    "Learn VLSI physical design fundamentals, floorplanning, placement, clock tree synthesis, routing, timing closure, power optimization, and physical verification.",

  weeks: [
    {
      title: "Week 1: Physical Design Fundamentals",
      description:
        "Understand the physical design flow, chip architecture, floorplanning, and design constraints.",
      lessons: [
        {
          title: "Introduction to VLSI Physical Design",
          content: `Physical design is the process of converting a synthesized digital circuit into a physical layout that can be manufactured as an integrated circuit.

The physical design process determines where standard cells, macros, and interconnections are placed on a chip.

Major stages include:
- Floorplanning
- Power planning
- Placement
- Clock Tree Synthesis (CTS)
- Routing
- Timing optimization
- Physical verification

Physical design aims to satisfy timing, power, and area requirements.

It is an important stage in ASIC development.`,
          quiz: [
            {
              question: "What is physical design in VLSI?",
              options: [
                "Converting a synthesized design into a physical layout",
                "Writing application software",
                "Creating web interfaces",
                "Designing only transistor models",
              ],
              answer: "Converting a synthesized design into a physical layout",
            },
            {
              question: "Which is a major physical design stage?",
              options: ["Placement", "HTML coding", "Database design", "Software testing"],
              answer: "Placement",
            },
            {
              question: "What does CTS stand for?",
              options: [
                "Clock Tree Synthesis",
                "Circuit Timing Simulation",
                "Cell Transfer System",
                "Clock Testing Sequence",
              ],
              answer: "Clock Tree Synthesis",
            },
            {
              question: "Which three goals are commonly considered in physical design?",
              options: [
                "Power, Performance, and Area",
                "Programming, Testing, and Analysis",
                "Memory, Software, and Networking",
                "Voltage, HTML, and Storage",
              ],
              answer: "Power, Performance, and Area",
            },
            {
              question: "Physical design is mainly associated with which development process?",
              options: ["ASIC development", "Web development", "Mobile application design", "Database administration"],
              answer: "ASIC development",
            },
          ],
        },
        {
          title: "VLSI Design Flow",
          content: `The VLSI design flow contains several stages that transform a design idea into a manufactured chip.

A simplified digital design flow is:

1. Specification
2. RTL design
3. Functional verification
4. Logic synthesis
5. Floorplanning
6. Placement
7. Clock Tree Synthesis
8. Routing
9. Signoff verification
10. Tapeout

Each stage produces information needed by the next stage.

Physical design generally starts with a synthesized netlist and technology information.

The final layout must satisfy manufacturing and electrical requirements before tapeout.`,
          quiz: [
            {
              question: "Which stage generally comes before physical design?",
              options: ["Logic synthesis", "Tapeout", "Packaging", "Chip testing"],
              answer: "Logic synthesis",
            },
            {
              question: "What is produced by logic synthesis?",
              options: [
                "Gate-level netlist",
                "Final chip package",
                "Manufactured wafer",
                "PCB assembly",
              ],
              answer: "Gate-level netlist",
            },
            {
              question: "Which stage generally follows routing?",
              options: ["Signoff verification", "RTL coding", "Specification", "Logic synthesis"],
              answer: "Signoff verification",
            },
            {
              question: "What does tapeout represent?",
              options: [
                "Release of the final design data for manufacturing",
                "Writing the first RTL statement",
                "Creating a simulation testbench",
                "Selecting a programming language",
              ],
              answer: "Release of the final design data for manufacturing",
            },
            {
              question: "Why is the VLSI design flow divided into stages?",
              options: [
                "To organize design and verification activities",
                "To remove all verification",
                "To avoid circuit simulation",
                "To increase code complexity",
              ],
              answer: "To organize design and verification activities",
            },
          ],
        },
        {
          title: "Floorplanning and Chip Architecture",
          content: `Floorplanning determines the major physical organization of a chip.

It defines the locations and dimensions of important design regions.

Important floorplanning elements:
- Core area
- Die area
- Standard cell regions
- Macro locations
- Input and output pins
- Power distribution planning

The core contains the main circuit elements, while the die represents the overall chip area.

Good floorplanning helps reduce routing congestion and improves timing and power characteristics.`,
          quiz: [
            {
              question: "What is floorplanning?",
              options: [
                "Planning the physical organization of a chip",
                "Writing Verilog test cases",
                "Creating a software interface",
                "Manufacturing a PCB",
              ],
              answer: "Planning the physical organization of a chip",
            },
            {
              question: "What does the core area contain?",
              options: [
                "Main circuit elements",
                "Only package pins",
                "Only external cables",
                "Only documentation",
              ],
              answer: "Main circuit elements",
            },
            {
              question: "What does die area represent?",
              options: [
                "Overall chip area",
                "Only the clock network",
                "Only one standard cell",
                "Only the power supply",
              ],
              answer: "Overall chip area",
            },
            {
              question: "Which element is considered during floorplanning?",
              options: ["Macro locations", "Website links", "Source code comments", "Database tables"],
              answer: "Macro locations",
            },
            {
              question: "Good floorplanning can help reduce:",
              options: [
                "Routing congestion",
                "Functional requirements",
                "All transistor count",
                "Simulation accuracy",
              ],
              answer: "Routing congestion",
            },
          ],
        },
        {
          title: "Design Constraints and Timing Requirements",
          content: `Design constraints describe the electrical and timing requirements that physical design tools must satisfy.

Common constraints include:
- Clock period
- Input delay
- Output delay
- Clock uncertainty
- Input transition
- Output load
- False paths
- Multicycle paths

Synopsys Design Constraints (SDC) is commonly used to specify timing constraints.

Example:

create_clock -name clk -period 10 [get_ports clk]

This defines a clock with a 10 ns period.

Correct constraints are important because physical design optimization depends on them.`,
          quiz: [
            {
              question: "What does SDC stand for?",
              options: [
                "Synopsys Design Constraints",
                "Standard Digital Circuit",
                "Signal Design Controller",
                "System Data Configuration",
              ],
              answer: "Synopsys Design Constraints",
            },
            {
              question: "Which command defines a clock in SDC?",
              options: ["create_clock", "create_cell", "add_route", "make_layout"],
              answer: "create_clock",
            },
            {
              question: "What does a clock period specify?",
              options: [
                "Time between successive clock cycles",
                "Physical chip width",
                "Number of standard cells",
                "Power supply current",
              ],
              answer: "Time between successive clock cycles",
            },
            {
              question: "What is clock uncertainty?",
              options: [
                "A timing allowance for clock variations and uncertainty",
                "The total chip area",
                "The number of metal layers",
                "The number of macros",
              ],
              answer: "A timing allowance for clock variations and uncertainty",
            },
            {
              question: "Why are correct timing constraints important?",
              options: [
                "They guide timing optimization",
                "They remove the need for placement",
                "They determine programming syntax",
                "They replace physical verification",
              ],
              answer: "They guide timing optimization",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Placement and Power Planning",
      description:
        "Understand standard cell placement, utilization, congestion, power distribution, and placement optimization.",
      lessons: [
        {
          title: "Standard Cell Placement",
          content: `Placement determines the physical locations of standard cells within the core area.

Standard cells include:
- Logic gates
- Flip-flops
- Buffers
- Inverters
- Multiplexers

Placement can be broadly divided into:
- Global placement
- Detailed placement

Global placement determines approximate cell locations while considering timing and congestion.

Detailed placement legalizes and refines cell positions according to placement rows and physical rules.

Good placement reduces wire length and helps improve timing.`,
          quiz: [
            {
              question: "What is standard cell placement?",
              options: [
                "Assigning physical locations to standard cells",
                "Creating RTL modules",
                "Writing verification assertions",
                "Designing chip packaging",
              ],
              answer: "Assigning physical locations to standard cells",
            },
            {
              question: "Which is a standard cell?",
              options: ["Flip-flop", "External monitor", "Keyboard", "Network cable"],
              answer: "Flip-flop",
            },
            {
              question: "Which placement stage determines approximate cell positions?",
              options: ["Global placement", "Detailed routing", "Tapeout", "Packaging"],
              answer: "Global placement",
            },
            {
              question: "What does detailed placement help achieve?",
              options: [
                "Legal and refined cell locations",
                "RTL simulation",
                "Functional specification",
                "Chip packaging",
              ],
              answer: "Legal and refined cell locations",
            },
            {
              question: "Good placement can reduce:",
              options: [
                "Wire length",
                "Design requirements",
                "Number of clock cycles",
                "Verification scenarios",
              ],
              answer: "Wire length",
            },
          ],
        },
        {
          title: "Placement Optimization and Utilization",
          content: `Placement optimization improves the arrangement of standard cells to satisfy design requirements.

Important optimization goals:
- Reduce wire length.
- Improve timing.
- Reduce congestion.
- Control power consumption.
- Maintain legal cell placement.

Placement utilization describes how much of the available placement area is occupied by standard cells.

A simplified utilization calculation is:

Utilization = (Standard Cell Area / Core Area) × 100

Very high utilization can make routing difficult because less space remains for interconnections.`,
          quiz: [
            {
              question: "What is placement utilization?",
              options: [
                "Percentage of core area occupied by standard cells",
                "Clock frequency",
                "Number of metal layers",
                "Power supply voltage",
              ],
              answer: "Percentage of core area occupied by standard cells",
            },
            {
              question: "Which factor can make routing difficult?",
              options: [
                "Very high utilization",
                "Low source code length",
                "More simulation comments",
                "Smaller file names",
              ],
              answer: "Very high utilization",
            },
            {
              question: "Which is a placement optimization goal?",
              options: ["Reduce wire length", "Increase unnecessary congestion", "Remove timing constraints", "Delete all buffers"],
              answer: "Reduce wire length",
            },
            {
              question: "What is the formula for utilization?",
              options: [
                "(Standard Cell Area / Core Area) × 100",
                "(Core Area / Die Area) × 10",
                "Clock Period × Voltage",
                "Power / Frequency",
              ],
              answer: "(Standard Cell Area / Core Area) × 100",
            },
            {
              question: "What does placement optimization improve?",
              options: [
                "Physical arrangement and design quality",
                "Programming language syntax",
                "Simulation file names",
                "Documentation formatting",
              ],
              answer: "Physical arrangement and design quality",
            },
          ],
        },
        {
          title: "Power Planning and Power Distribution Network",
          content: `Power planning creates a network to distribute supply voltage and ground throughout the chip.

A Power Distribution Network (PDN) delivers power to standard cells and macros.

Common power structures include:
- Power rings
- Power stripes
- Power rails
- Power vias

Important power planning considerations:
- Voltage drop
- Electromigration
- Current density
- Power connectivity
- IR drop

A reliable power network helps ensure that cells receive sufficient supply voltage during operation.`,
          quiz: [
            {
              question: "What does PDN stand for?",
              options: [
                "Power Distribution Network",
                "Physical Design Node",
                "Power Delay Number",
                "Programmable Digital Network",
              ],
              answer: "Power Distribution Network",
            },
            {
              question: "What is the purpose of a power network?",
              options: [
                "Distribute power throughout the chip",
                "Generate RTL code",
                "Perform functional simulation",
                "Create test vectors",
              ],
              answer: "Distribute power throughout the chip",
            },
            {
              question: "Which is a power distribution structure?",
              options: ["Power stripe", "Signal waveform", "Testbench task", "RTL register"],
              answer: "Power stripe",
            },
            {
              question: "What does IR drop refer to?",
              options: [
                "Voltage drop caused by current flowing through resistance",
                "Clock frequency increase",
                "Increase in chip area",
                "Reduction in transistor count",
              ],
              answer: "Voltage drop caused by current flowing through resistance",
            },
            {
              question: "Which issue is associated with excessive current density?",
              options: ["Electromigration", "Code formatting", "Simulation syntax", "Logic simplification"],
              answer: "Electromigration",
            },
          ],
        },
        {
          title: "Congestion Analysis and Optimization",
          content: `Routing congestion occurs when too many signal connections compete for limited routing resources in a physical region.

Congestion can cause:
- Routing detours
- Increased wire length
- Timing degradation
- Routing violations
- Difficult timing closure

Congestion analysis identifies regions with insufficient routing resources.

Possible optimization techniques include:
- Improving floorplanning.
- Adjusting cell placement.
- Reducing unnecessary cell density.
- Moving macros.
- Optimizing high-fanout nets.

Congestion should be monitored during placement and routing.`,
          quiz: [
            {
              question: "What is routing congestion?",
              options: [
                "Too many connections competing for limited routing resources",
                "Too many RTL comments",
                "High simulation speed",
                "Low clock frequency only",
              ],
              answer: "Too many connections competing for limited routing resources",
            },
            {
              question: "Which can result from routing congestion?",
              options: ["Longer wire length", "Reduced file size", "Improved readability", "Fewer timing paths"],
              answer: "Longer wire length",
            },
            {
              question: "When should congestion be monitored?",
              options: [
                "During placement and routing",
                "Only after packaging",
                "Only during RTL writing",
                "Only after chip testing",
              ],
              answer: "During placement and routing",
            },
            {
              question: "Which can help reduce congestion?",
              options: [
                "Improving cell placement",
                "Increasing unnecessary cell density",
                "Removing all routing resources",
                "Ignoring macro locations",
              ],
              answer: "Improving cell placement",
            },
            {
              question: "What does congestion analysis identify?",
              options: [
                "Regions with insufficient routing resources",
                "Software syntax errors",
                "Incorrect HTML tags",
                "Database problems",
              ],
              answer: "Regions with insufficient routing resources",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Clock Tree Synthesis and Routing",
      description:
        "Learn clock distribution, clock skew, routing methods, signal integrity, and timing optimization.",
      lessons: [
        {
          title: "Clock Tree Synthesis Fundamentals",
          content: `Clock Tree Synthesis (CTS) builds a clock distribution network to deliver clock signals to sequential elements.

Before CTS, the clock may be represented as an ideal signal during early implementation stages.

CTS inserts buffers and inverters to distribute the clock.

Main objectives:
- Control clock skew.
- Manage clock latency.
- Improve clock transition time.
- Distribute clock signals reliably.

Clock trees are important because flip-flops must receive clock signals with suitable timing relationships.`,
          quiz: [
            {
              question: "What does CTS stand for?",
              options: [
                "Clock Tree Synthesis",
                "Circuit Timing Setup",
                "Clock Transfer Signal",
                "Cell Testing System",
              ],
              answer: "Clock Tree Synthesis",
            },
            {
              question: "What is the main purpose of CTS?",
              options: [
                "Distribute clock signals to sequential elements",
                "Create input test vectors",
                "Generate RTL modules",
                "Perform layout extraction",
              ],
              answer: "Distribute clock signals to sequential elements",
            },
            {
              question: "Which components are commonly inserted during CTS?",
              options: ["Buffers and inverters", "Only resistors", "Only capacitors", "Only multiplexers"],
              answer: "Buffers and inverters",
            },
            {
              question: "Which parameter describes the difference in clock arrival times?",
              options: ["Clock skew", "IR drop", "Cell utilization", "Metal width"],
              answer: "Clock skew",
            },
            {
              question: "Which elements commonly receive clock signals?",
              options: ["Flip-flops", "Only resistors", "Only power rings", "Only routing blockages"],
              answer: "Flip-flops",
            },
          ],
        },
        {
          title: "Clock Skew and Clock Latency",
          content: `Clock skew is the difference in clock arrival time between two sequential elements.

Clock latency is the time taken by the clock signal to travel from its source to a clock endpoint.

Types of clock latency:
- Source latency
- Network latency

Clock skew can be:
- Positive skew
- Negative skew
- Zero skew

Clock skew affects setup and hold timing.

CTS optimization attempts to control skew and clock transition time while managing clock network power.`,
          quiz: [
            {
              question: "What is clock skew?",
              options: [
                "Difference in clock arrival times",
                "Difference in supply voltages",
                "Difference in cell areas",
                "Difference in metal widths",
              ],
              answer: "Difference in clock arrival times",
            },
            {
              question: "What is clock latency?",
              options: [
                "Time taken by a clock signal to reach an endpoint",
                "Total chip area",
                "Number of standard cells",
                "Power consumption only",
              ],
              answer: "Time taken by a clock signal to reach an endpoint",
            },
            {
              question: "Which is a type of clock latency?",
              options: ["Network latency", "Database latency", "Software latency", "Internet latency"],
              answer: "Network latency",
            },
            {
              question: "Clock skew can affect:",
              options: ["Setup and hold timing", "Only chip color", "Only source code length", "Only die thickness"],
              answer: "Setup and hold timing",
            },
            {
              question: "What is a major CTS optimization goal?",
              options: [
                "Control clock skew",
                "Increase unnecessary clock delay",
                "Remove sequential cells",
                "Delete timing constraints",
              ],
              answer: "Control clock skew",
            },
          ],
        },
        {
          title: "Routing Fundamentals",
          content: `Routing connects placed standard cells and macros using metal interconnect layers.

Routing is performed after placement and clock tree synthesis.

Two major routing stages are:

Global routing:
Determines approximate routing paths and estimates routing resource usage.

Detailed routing:
Creates actual geometrical wire connections and vias according to design rules.

Routing considerations include:
- Wire length
- Metal layer availability
- Via count
- Signal integrity
- Timing requirements
- Design rule compliance

Good routing helps complete electrical connectivity while satisfying physical constraints.`,
          quiz: [
            {
              question: "What is routing in physical design?",
              options: [
                "Connecting circuit elements using metal interconnects",
                "Writing RTL code",
                "Creating a simulation testbench",
                "Designing a chip package",
              ],
              answer: "Connecting circuit elements using metal interconnects",
            },
            {
              question: "Which routing stage estimates approximate routing paths?",
              options: ["Global routing", "Detailed routing", "Tapeout", "Packaging"],
              answer: "Global routing",
            },
            {
              question: "Which stage creates actual wire geometries?",
              options: ["Detailed routing", "Global placement", "Floorplanning", "Logic synthesis"],
              answer: "Detailed routing",
            },
            {
              question: "What connects different metal layers?",
              options: ["Vias", "Flip-flops", "Clock constraints", "Macros"],
              answer: "Vias",
            },
            {
              question: "Which factor is considered during routing?",
              options: ["Signal integrity", "Font size", "Website layout", "Database schema"],
              answer: "Signal integrity",
            },
          ],
        },
        {
          title: "Signal Integrity and Crosstalk",
          content: `Signal integrity refers to maintaining the quality and reliability of electrical signals.

Physical interconnects can introduce unwanted effects.

Important signal integrity problems include:
- Crosstalk
- Noise
- Coupling capacitance
- Signal delay variation
- Glitches

Crosstalk occurs when switching activity on one signal affects a nearby signal through electrical coupling.

Possible solutions include:
- Increasing spacing.
- Using suitable shielding.
- Changing routing layers.
- Improving routing topology.
- Managing signal transition times.

Signal integrity analysis is important for reliable high-speed designs.`,
          quiz: [
            {
              question: "What is signal integrity?",
              options: [
                "Maintaining reliable electrical signal behavior",
                "Maintaining source code formatting",
                "Reducing file size",
                "Creating chip packaging",
              ],
              answer: "Maintaining reliable electrical signal behavior",
            },
            {
              question: "What is crosstalk?",
              options: [
                "Unwanted coupling between nearby signals",
                "Clock generation",
                "Power supply connection",
                "Cell placement",
              ],
              answer: "Unwanted coupling between nearby signals",
            },
            {
              question: "Which electrical effect contributes to crosstalk?",
              options: ["Coupling capacitance", "File compression", "Clock period definition", "Logic synthesis"],
              answer: "Coupling capacitance",
            },
            {
              question: "Which method can reduce crosstalk?",
              options: [
                "Increasing spacing between signals",
                "Reducing all metal widths",
                "Ignoring neighboring signals",
                "Removing all timing constraints",
              ],
              answer: "Increasing spacing between signals",
            },
            {
              question: "Why is signal integrity important?",
              options: [
                "It supports reliable circuit operation",
                "It removes the need for power planning",
                "It replaces functional verification",
                "It determines source code style",
              ],
              answer: "It supports reliable circuit operation",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Timing Closure and Physical Design Signoff",
      description:
        "Learn timing closure, power optimization, physical verification, signoff reports, and a practical implementation project.",
      lessons: [
        {
          title: "Timing Closure and Optimization",
          content: `Timing closure is the process of meeting all required timing constraints in a physical design.

Timing optimization can be required after placement, CTS, and routing.

Common optimization techniques include:
- Cell resizing
- Buffer insertion
- Logic restructuring
- Placement refinement
- Routing optimization
- Hold fixing

Timing analysis checks setup and hold requirements.

A design is not ready for signoff if required timing constraints are still violated.

Timing closure involves repeated analysis and optimization.`,
          quiz: [
            {
              question: "What is timing closure?",
              options: [
                "Meeting the required timing constraints",
                "Completing source code documentation",
                "Increasing chip package size",
                "Removing all sequential elements",
              ],
              answer: "Meeting the required timing constraints",
            },
            {
              question: "Which is a timing optimization technique?",
              options: ["Cell resizing", "Image resizing", "File compression", "Database indexing"],
              answer: "Cell resizing",
            },
            {
              question: "When may timing optimization be needed?",
              options: [
                "After placement, CTS, and routing",
                "Only before RTL coding",
                "Only after packaging",
                "Only during chip testing",
              ],
              answer: "After placement, CTS, and routing",
            },
            {
              question: "Which timing checks are important?",
              options: [
                "Setup and hold checks",
                "Only DRC checks",
                "Only LVS checks",
                "Only package checks",
              ],
              answer: "Setup and hold checks",
            },
            {
              question: "What should happen after a timing fix?",
              options: [
                "Run timing analysis again",
                "Delete all reports",
                "Skip verification",
                "Stop implementation",
              ],
              answer: "Run timing analysis again",
            },
          ],
        },
        {
          title: "Power Optimization in Physical Design",
          content: `Power optimization reduces the power consumed by a physical design while maintaining required functionality and performance.

Three important power components are:
- Dynamic power
- Short-circuit power
- Leakage power

Common optimization techniques:
- Clock gating
- Multi-bit flip-flops
- Cell selection and sizing
- Reducing unnecessary switching activity
- Power-aware placement

Clock gating reduces unnecessary clock switching in inactive parts of a design.

Power optimization should be evaluated along with timing and area requirements.`,
          quiz: [
            {
              question: "What is the goal of power optimization?",
              options: [
                "Reduce power consumption while meeting design requirements",
                "Increase unnecessary switching",
                "Remove all timing checks",
                "Increase chip area only",
              ],
              answer: "Reduce power consumption while meeting design requirements",
            },
            {
              question: "Which technique reduces unnecessary clock switching?",
              options: ["Clock gating", "Detailed routing", "LVS", "Floorplanning"],
              answer: "Clock gating",
            },
            {
              question: "Which is a component of CMOS power consumption?",
              options: ["Leakage power", "Database power", "Software power", "Display power"],
              answer: "Leakage power",
            },
            {
              question: "What is a benefit of multi-bit flip-flops?",
              options: [
                "Potential reduction in clock network overhead",
                "Automatic removal of all timing constraints",
                "Elimination of routing",
                "Removal of power planning",
              ],
              answer: "Potential reduction in clock network overhead",
            },
            {
              question: "Power optimization should be considered with:",
              options: [
                "Timing and area requirements",
                "Only source code formatting",
                "Only file size",
                "Only documentation",
              ],
              answer: "Timing and area requirements",
            },
          ],
        },
        {
          title: "Physical Verification and Signoff",
          content: `Physical verification checks whether the final layout satisfies manufacturing and electrical requirements.

Important signoff checks include:

DRC:
Checks physical layout against manufacturing rules.

LVS:
Checks whether the layout matches the reference schematic or netlist.

Antenna checks:
Identify potential manufacturing-related antenna violations.

IR drop analysis:
Checks voltage drop in the power distribution network.

Electromigration analysis:
Checks whether current density may cause reliability problems.

Signoff analysis provides confidence that the layout is ready for manufacturing release.`,
          quiz: [
            {
              question: "What is the purpose of physical verification?",
              options: [
                "Check final layout correctness and manufacturability",
                "Write RTL code",
                "Create testbench stimulus",
                "Design software interfaces",
              ],
              answer: "Check final layout correctness and manufacturability",
            },
            {
              question: "Which check verifies manufacturing design rules?",
              options: ["DRC", "LVS", "STA only", "RTL simulation"],
              answer: "DRC",
            },
            {
              question: "Which check compares layout and schematic?",
              options: ["LVS", "CTS", "Placement", "Global routing"],
              answer: "LVS",
            },
            {
              question: "What does IR drop analysis examine?",
              options: [
                "Voltage drop in the power network",
                "Clock tree structure only",
                "Metal spacing only",
                "RTL syntax",
              ],
              answer: "Voltage drop in the power network",
            },
            {
              question: "What does electromigration analysis evaluate?",
              options: [
                "Current-density-related reliability",
                "Source code quality",
                "Functional test coverage",
                "Clock naming",
              ],
              answer: "Current-density-related reliability",
            },
          ],
        },
        {
          title: "Mini Project: Physical Design Flow of a Digital Block",
          content: `In this project, implement a small digital design through the major stages of the physical design flow.

Project: Physical Implementation of a 4-bit Counter

Project requirements:
- Use a verified RTL counter design.
- Synthesize the RTL into a gate-level netlist.
- Define timing constraints.
- Create a floorplan.
- Perform power planning.
- Place standard cells.
- Run Clock Tree Synthesis.
- Perform routing.
- Analyze timing and congestion.
- Run physical verification checks.

Project steps:
1. Prepare RTL and verification results.
2. Synthesize the design.
3. Import the netlist into a physical design tool.
4. Define floorplan dimensions.
5. Create the power distribution network.
6. Run placement.
7. Perform CTS.
8. Run global and detailed routing.
9. Review timing, power, and area reports.
10. Run DRC and LVS where supported.

Deliverables:
- Synthesized netlist.
- Floorplan screenshot.
- Placement screenshot.
- Clock tree report.
- Routed layout.
- Timing and area reports.
- Physical verification report.

The project demonstrates how a digital circuit is transformed into a physical chip layout.`,
          quiz: [
            {
              question: "Which design is implemented in the project?",
              options: [
                "4-bit counter",
                "Web browser",
                "Database server",
                "Mobile application",
              ],
              answer: "4-bit counter",
            },
            {
              question: "What is the input to the physical implementation stage?",
              options: [
                "Synthesized netlist and design constraints",
                "Only a screenshot",
                "Only a software manual",
                "Only a database table",
              ],
              answer: "Synthesized netlist and design constraints",
            },
            {
              question: "Which stage distributes the clock?",
              options: ["CTS", "Floorplanning", "DRC", "LVS"],
              answer: "CTS",
            },
            {
              question: "Which stage connects placed cells using metal wires?",
              options: ["Routing", "RTL coding", "Functional verification", "Logic specification"],
              answer: "Routing",
            },
            {
              question: "Which reports help evaluate implementation quality?",
              options: [
                "Timing, area, and power reports",
                "Only source code comments",
                "Only project titles",
                "Only folder names",
              ],
              answer: "Timing, area, and power reports",
            },
          ],
        },
      ],
    },
  ],
};

export default physicalDesignCourse;

const pcbDesignCourse = {
  title: "PCB Design",
  description:
    "Learn PCB fundamentals, schematic capture, component footprints, board layout, routing, design rules, grounding, signal integrity, manufacturing, and PCB testing.",
  weeks: [
    {
      title: "Week 1: PCB Design Fundamentals",
      lessons: [
        {
          title: "Introduction to Printed Circuit Boards",
          content: `
A Printed Circuit Board (PCB) is a board used to mechanically support and electrically connect electronic components. Copper tracks, pads, and conductive layers provide electrical connections between components.

PCBs are widely used in computers, mobile phones, communication equipment, embedded systems, and industrial electronics.

Main PCB elements include:

1. Substrate: The insulating base material that supports the board.
2. Copper layer: Conductive material used to create electrical connections.
3. Tracks: Copper paths connecting different components.
4. Pads: Conductive areas where component leads or terminals are connected.
5. Vias: Conductive holes that connect copper layers.
6. Solder mask: Protective coating that helps prevent solder bridges.
7. Silkscreen: Printed labels and component identifiers.

PCBs can be single-sided, double-sided, or multilayer.

A single-sided PCB has copper on one side. A double-sided PCB has copper on both sides. A multilayer PCB contains multiple copper layers separated by insulating material.

PCB design converts an electronic circuit into a physical board that can be manufactured and assembled.
          `,
          quiz: [
            {
              question: "What does PCB stand for?",
              options: [
                "Printed Circuit Board",
                "Programmed Control Board",
                "Power Connection Base",
                "Printed Component Battery"
              ],
              answer: "Printed Circuit Board"
            },
            {
              question: "What is the main purpose of copper tracks?",
              options: [
                "To provide electrical connections",
                "To protect the board from dust only",
                "To display component names",
                "To insulate all components"
              ],
              answer: "To provide electrical connections"
            },
            {
              question: "What is the function of the substrate?",
              options: [
                "To provide an insulating base for the board",
                "To generate electrical signals",
                "To store program instructions",
                "To act as a soldering tool"
              ],
              answer: "To provide an insulating base for the board"
            },
            {
              question: "Which PCB layer protects copper from unwanted solder contact?",
              options: ["Solder mask", "Copper track", "Substrate", "Via"],
              answer: "Solder mask"
            },
            {
              question: "What is a multilayer PCB?",
              options: [
                "A PCB containing multiple copper layers",
                "A board with no copper",
                "A board containing only one component",
                "A board without electrical connections"
              ],
              answer: "A PCB containing multiple copper layers"
            }
          ]
        },
        {
          title: "Types of PCBs and Board Materials",
          content: `
PCBs are classified according to their construction, number of layers, and flexibility.

Common types include:

1. Single-sided PCB: Copper tracks are present on one side.
2. Double-sided PCB: Copper tracks are present on both sides.
3. Multilayer PCB: Three or more conductive layers are arranged with insulating layers between them.
4. Flexible PCB: Uses flexible insulating material and can bend.
5. Rigid PCB: Uses a solid board material and maintains its shape.
6. Rigid-flex PCB: Combines rigid and flexible sections.

FR-4 is a commonly used PCB substrate made from woven glass fiber and epoxy resin. It offers good electrical insulation and mechanical strength.

Other materials are selected for special requirements, such as high-frequency operation, flexibility, or thermal performance.

The choice of material depends on operating frequency, temperature, mechanical requirements, cost, and manufacturing capability.

Selecting the correct PCB type and material is an important early design decision.
          `,
          quiz: [
            {
              question: "How many copper sides does a single-sided PCB normally have?",
              options: ["One", "Two", "Three", "Four"],
              answer: "One"
            },
            {
              question: "What is a flexible PCB designed to do?",
              options: [
                "Bend according to its application",
                "Operate without copper",
                "Generate its own power",
                "Replace all electronic components"
              ],
              answer: "Bend according to its application"
            },
            {
              question: "Which material is commonly used as a PCB substrate?",
              options: ["FR-4", "Pure copper only", "Aluminium foil only", "Rubber"],
              answer: "FR-4"
            },
            {
              question: "What is a rigid-flex PCB?",
              options: [
                "A PCB combining rigid and flexible sections",
                "A PCB containing only flexible copper",
                "A board without an insulating substrate",
                "A PCB with no electrical tracks"
              ],
              answer: "A PCB combining rigid and flexible sections"
            },
            {
              question: "Which factor influences PCB material selection?",
              options: [
                "Operating frequency and temperature",
                "Only the board's printed label",
                "Only the computer monitor size",
                "The keyboard layout"
              ],
              answer: "Operating frequency and temperature"
            }
          ]
        },
        {
          title: "Electronic Components and PCB Footprints",
          content: `
A PCB footprint is the physical arrangement of pads and outlines used to mount a particular electronic component on a board.

Each component requires a suitable footprint that matches its package and terminal arrangement.

Common component types include:

- Resistors
- Capacitors
- Diodes
- Transistors
- Integrated circuits
- Connectors
- LEDs

Components may use through-hole or surface-mount technology.

Through-hole components have leads that pass through holes in the PCB. Surface-mount components are mounted directly onto surface pads.

A footprint normally contains:
1. Copper pads for electrical connections.
2. A component outline.
3. A silkscreen reference designator.
4. Courtyard and assembly information where required.

Incorrect footprints can cause assembly problems or prevent components from fitting on the board.

Before selecting a footprint, check the component datasheet for package dimensions, pin spacing, pad recommendations, and pin numbering.
          `,
          quiz: [
            {
              question: "What is a PCB footprint?",
              options: [
                "Physical pad arrangement for mounting a component",
                "A software password",
                "A copper manufacturing machine",
                "A type of power supply"
              ],
              answer: "Physical pad arrangement for mounting a component"
            },
            {
              question: "What does SMT stand for?",
              options: [
                "Surface-Mount Technology",
                "Signal Measurement Tool",
                "Standard Metal Track",
                "System Management Terminal"
              ],
              answer: "Surface-Mount Technology"
            },
            {
              question: "How are through-hole component leads connected?",
              options: [
                "They pass through PCB holes",
                "They are placed only on silkscreen",
                "They connect without any pads",
                "They are printed as text"
              ],
              answer: "They pass through PCB holes"
            },
            {
              question: "Where should component package dimensions be checked?",
              options: [
                "Component datasheet",
                "PCB silkscreen only",
                "Computer wallpaper",
                "Solder mask color chart"
              ],
              answer: "Component datasheet"
            },
            {
              question: "What can an incorrect footprint cause?",
              options: [
                "Component fitting or assembly problems",
                "Automatic circuit optimization",
                "Improved electrical insulation",
                "Higher software processing speed"
              ],
              answer: "Component fitting or assembly problems"
            }
          ]
        },
        {
          title: "PCB Design Workflow and Software",
          content: `
PCB design usually follows a sequence of steps that converts a circuit idea into a manufactured board.

A typical workflow includes:

1. Circuit planning: Identify components and electrical connections.
2. Schematic capture: Draw the circuit using electronic symbols.
3. Footprint assignment: Select physical packages for components.
4. Board outline: Define the physical dimensions of the PCB.
5. Component placement: Arrange components on the board.
6. Routing: Connect pads using copper tracks.
7. Design rule checking: Identify layout violations.
8. Manufacturing output: Generate files required for fabrication and assembly.

Common PCB design tools include KiCad, Autodesk Fusion Electronics, and Altium Designer.

KiCad is a widely used PCB design application that supports schematic capture, board layout, and manufacturing output generation.

A well-organized design workflow reduces mistakes and makes the board easier to manufacture, assemble, and maintain.
          `,
          quiz: [
            {
              question: "What is the first major electrical design document?",
              options: [
                "Circuit schematic",
                "Manufacturing invoice",
                "Board photograph",
                "Assembly advertisement"
              ],
              answer: "Circuit schematic"
            },
            {
              question: "What is footprint assignment?",
              options: [
                "Selecting physical packages for components",
                "Selecting the PCB's background color",
                "Changing the circuit voltage",
                "Printing a component datasheet"
              ],
              answer: "Selecting physical packages for components"
            },
            {
              question: "What is routing?",
              options: [
                "Creating copper connections between pads",
                "Changing component names",
                "Printing the board outline",
                "Selecting a project folder"
              ],
              answer: "Creating copper connections between pads"
            },
            {
              question: "Which software is used for PCB design?",
              options: ["KiCad", "Microsoft Paint only", "Calculator", "Notepad only"],
              answer: "KiCad"
            },
            {
              question: "Why is design rule checking important?",
              options: [
                "To identify layout and manufacturing violations",
                "To increase the number of components automatically",
                "To remove the circuit schematic",
                "To change the board material"
              ],
              answer: "To identify layout and manufacturing violations"
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: Schematic Design and Component Placement",
      lessons: [
        {
          title: "Schematic Capture and Circuit Symbols",
          content: `
Schematic capture is the process of drawing an electronic circuit using standardized symbols and connection lines.

A schematic describes electrical relationships rather than the physical positions of components.

Common schematic symbols include resistors, capacitors, inductors, diodes, transistors, integrated circuits, switches, connectors, and voltage sources.

Each component is normally assigned a reference designator. Examples include:

- R1 for a resistor.
- C1 for a capacitor.
- D1 for a diode.
- U1 for an integrated circuit.
- J1 for a connector.

Net labels can identify electrical connections without drawing long wires across the schematic.

Power symbols and ground symbols make supply connections easier to understand.

A clear schematic should have readable labels, organized signal paths, correct pin connections, and suitable component values.

Before transferring a schematic to the PCB layout, check electrical connections and component pin assignments carefully.
          `,
          quiz: [
            {
              question: "What is schematic capture?",
              options: [
                "Drawing an electronic circuit using symbols",
                "Manufacturing copper sheets",
                "Testing a finished enclosure",
                "Printing a board photograph"
              ],
              answer: "Drawing an electronic circuit using symbols"
            },
            {
              question: "What does R1 commonly identify?",
              options: ["A resistor", "A capacitor", "A diode", "A connector"],
              answer: "A resistor"
            },
            {
              question: "What does U1 commonly identify?",
              options: [
                "An integrated circuit",
                "A resistor",
                "A capacitor",
                "A fuse"
              ],
              answer: "An integrated circuit"
            },
            {
              question: "What is the purpose of a net label?",
              options: [
                "To identify an electrical connection",
                "To define the board thickness",
                "To select the PCB color",
                "To set the soldering temperature"
              ],
              answer: "To identify an electrical connection"
            },
            {
              question: "What should be checked before PCB layout?",
              options: [
                "Electrical connections and component pin assignments",
                "Only the silkscreen color",
                "The computer's desktop theme",
                "The project file's font size"
              ],
              answer: "Electrical connections and component pin assignments"
            }
          ]
        },
        {
          title: "Electrical Rules and Netlists",
          content: `
Electrical Rule Check (ERC) is used during schematic design to identify possible electrical connection problems.

It can detect issues such as:
- Unconnected required pins.
- Output pins connected incorrectly.
- Power input pins without a valid supply.
- Conflicting electrical pin types.

A netlist is a description of the electrical connections between component pins.

The netlist helps the PCB layout tool understand which pads must be connected.

A schematic may contain many components, but the netlist records their electrical relationships.

ERC warnings should be reviewed instead of ignored. Some warnings may be intentional, but each should be understood and documented.

The schematic and netlist must remain consistent. If the schematic changes, the PCB design should be updated accordingly.

Electrical checks reduce connection mistakes before the board is manufactured.
          `,
          quiz: [
            {
              question: "What does ERC stand for?",
              options: [
                "Electrical Rule Check",
                "Electronic Routing Cable",
                "External Resistance Control",
                "Electrical Register Code"
              ],
              answer: "Electrical Rule Check"
            },
            {
              question: "What is a netlist?",
              options: [
                "A description of electrical connections between pins",
                "A list of PCB colors",
                "A manufacturing price sheet",
                "A list of computer programs"
              ],
              answer: "A description of electrical connections between pins"
            },
            {
              question: "Which problem can ERC detect?",
              options: [
                "Unconnected required pins",
                "Incorrect computer wallpaper",
                "Low monitor brightness",
                "A missing project photograph"
              ],
              answer: "Unconnected required pins"
            },
            {
              question: "Why should warnings be reviewed?",
              options: [
                "They may indicate electrical design problems",
                "They always improve circuit performance",
                "They automatically manufacture the PCB",
                "They change the substrate material"
              ],
              answer: "They may indicate electrical design problems"
            },
            {
              question: "What should happen when the schematic changes?",
              options: [
                "The PCB design should be synchronized and reviewed",
                "The board should always be deleted",
                "All components should be renamed",
                "The netlist should be ignored"
              ],
              answer: "The PCB design should be synchronized and reviewed"
            }
          ]
        },
        {
          title: "PCB Layout and Component Placement",
          content: `
PCB layout is the process of arranging components and conductive tracks on the physical board.

Component placement has a major effect on board size, electrical performance, heat management, and ease of assembly.

Important placement guidelines include:

1. Place related components near each other.
2. Keep connectors accessible at the board edges where appropriate.
3. Follow the recommended orientation and spacing for components.
4. Keep sensitive analog signals away from noisy switching sections when practical.
5. Provide suitable space for mounting holes and mechanical parts.
6. Consider component height and enclosure requirements.

Decoupling capacitors are commonly placed close to the power pins of integrated circuits to reduce local supply disturbances.

High-power components may require additional spacing or thermal considerations.

Good placement makes routing easier and can reduce interference and manufacturing problems.

Placement should be reviewed before detailed routing begins.
          `,
          quiz: [
            {
              question: "What is PCB component placement?",
              options: [
                "Arranging components on the board",
                "Creating a software database",
                "Measuring only the supply voltage",
                "Printing the board's packaging"
              ],
              answer: "Arranging components on the board"
            },
            {
              question: "Why should related components be placed near each other?",
              options: [
                "To simplify connections and improve layout organization",
                "To increase board thickness",
                "To remove the need for a schematic",
                "To eliminate all electrical resistance"
              ],
              answer: "To simplify connections and improve layout organization"
            },
            {
              question: "Where are decoupling capacitors commonly placed?",
              options: [
                "Close to integrated circuit power pins",
                "Only outside the PCB",
                "On the board's silkscreen",
                "Inside mounting holes"
              ],
              answer: "Close to integrated circuit power pins"
            },
            {
              question: "What should be considered for high-power components?",
              options: [
                "Spacing and thermal requirements",
                "Only reference designator font",
                "Only the board's logo",
                "The computer's operating system"
              ],
              answer: "Spacing and thermal requirements"
            },
            {
              question: "Why should placement be reviewed before routing?",
              options: [
                "Good placement can make routing easier",
                "Routing automatically corrects every component",
                "Placement determines the PCB's color only",
                "It removes the need for electrical checks"
              ],
              answer: "Good placement can make routing easier"
            }
          ]
        },
        {
          title: "Board Outline, Layers, and Stackup",
          content: `
The PCB board outline defines the physical shape and dimensions of the finished board.

The outline must consider mounting holes, connectors, enclosure space, and manufacturing requirements.

PCB layers are used for different electrical and mechanical purposes.

Common layers include:

- Top copper: Conductive layer on the top side.
- Bottom copper: Conductive layer on the bottom side.
- Inner copper: Conductive layers in multilayer boards.
- Solder mask: Protective coating.
- Silkscreen: Component labels and markings.
- Board outline: Defines the board boundary.

A PCB stackup describes the arrangement of copper and insulating layers.

For example, a four-layer board may contain top signal, ground, power, and bottom signal layers, separated by insulating materials.

The actual stackup should be selected according to the design requirements and the PCB manufacturer's capabilities.

Correct layer planning supports routing, grounding, power distribution, and signal integrity.
          `,
          quiz: [
            {
              question: "What does the PCB board outline define?",
              options: [
                "The physical shape and dimensions of the board",
                "The electrical resistance of every component",
                "The operating system of the design computer",
                "The component's software version"
              ],
              answer: "The physical shape and dimensions of the board"
            },
            {
              question: "What is a PCB stackup?",
              options: [
                "Arrangement of conductive and insulating layers",
                "A list of component prices",
                "A collection of circuit equations",
                "A method of soldering connectors"
              ],
              answer: "Arrangement of conductive and insulating layers"
            },
            {
              question: "Which layer carries electrical connections?",
              options: ["Copper layer", "Silkscreen layer", "Solder mask layer", "Board outline layer"],
              answer: "Copper layer"
            },
            {
              question: "What is an inner copper layer used for?",
              options: [
                "Conductive routing inside a multilayer PCB",
                "Printing component labels",
                "Protecting the board surface from dust only",
                "Defining the enclosure shape"
              ],
              answer: "Conductive routing inside a multilayer PCB"
            },
            {
              question: "Why should the PCB manufacturer's capabilities be considered?",
              options: [
                "To ensure the chosen stackup can be manufactured",
                "To determine the computer screen size",
                "To avoid creating a schematic",
                "To change component values automatically"
              ],
              answer: "To ensure the chosen stackup can be manufactured"
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: Routing and Design Quality",
      lessons: [
        {
          title: "PCB Routing Fundamentals",
          content: `
Routing is the process of creating copper tracks that connect component pads according to the schematic.

A PCB layout tool displays unrouted connections as airwires or connection guides. These show which pads still need to be connected.

Routing can be performed manually or with interactive routing assistance.

Important routing considerations include:

1. Track width: Selected according to current and temperature requirements.
2. Clearance: Minimum spacing between conductive objects.
3. Via usage: Vias connect tracks between copper layers.
4. Path length: Important for timing and signal behavior.
5. Routing direction: Organized routing can improve board readability.

Power and ground tracks may require wider copper than low-current signal tracks.

Avoid unnecessary bends, long routes, and crowded connections where practical.

Routing should follow the electrical connectivity defined in the schematic. After routing, the board must be checked for missing connections and design rule violations.
          `,
          quiz: [
            {
              question: "What is PCB routing?",
              options: [
                "Creating copper tracks between component pads",
                "Changing component names",
                "Selecting the board's logo",
                "Creating a project folder"
              ],
              answer: "Creating copper tracks between component pads"
            },
            {
              question: "What do airwires represent?",
              options: [
                "Connections that still need routing",
                "Completed solder joints",
                "Board mounting holes",
                "Mechanical dimensions"
              ],
              answer: "Connections that still need routing"
            },
            {
              question: "What determines suitable track width?",
              options: [
                "Current and temperature requirements",
                "Only the component's reference number",
                "Only the silkscreen font",
                "The computer's processor speed"
              ],
              answer: "Current and temperature requirements"
            },
            {
              question: "What is a via used for?",
              options: [
                "Connecting copper layers",
                "Displaying component names",
                "Measuring board temperature",
                "Protecting the board from sunlight"
              ],
              answer: "Connecting copper layers"
            },
            {
              question: "What should routing follow?",
              options: [
                "Electrical connectivity in the schematic",
                "The order of component names alphabetically",
                "The color of the PCB",
                "The computer's file structure"
              ],
              answer: "Electrical connectivity in the schematic"
            }
          ]
        },
        {
          title: "Track Width, Clearance, and Vias",
          content: `
Track width and clearance are important PCB design parameters.

Track width determines the cross-sectional area of the copper path. Wider tracks generally have lower resistance and can carry more current for a given temperature rise.

Clearance is the minimum spacing between conductive objects such as tracks, pads, and copper areas.

Insufficient clearance may lead to manufacturing defects or unintended electrical connections.

A via is a plated conductive hole that connects copper layers.

Common via types include:

1. Through via: Connects layers through the full board thickness.
2. Blind via: Connects an outer layer to one or more inner layers.
3. Buried via: Connects internal layers without reaching the outer surfaces.

The PCB manufacturer provides minimum limits for track width, spacing, hole diameter, and other fabrication features.

Designers should follow these limits and apply appropriate safety margins.
          `,
          quiz: [
            {
              question: "What does track width describe?",
              options: [
                "Width of a copper conductive path",
                "Height of a component",
                "Thickness of the silkscreen text",
                "Diameter of a mounting screw"
              ],
              answer: "Width of a copper conductive path"
            },
            {
              question: "What is clearance?",
              options: [
                "Minimum spacing between conductive objects",
                "Distance between the board and computer screen",
                "The number of components on a board",
                "Thickness of the substrate only"
              ],
              answer: "Minimum spacing between conductive objects"
            },
            {
              question: "What is a through via?",
              options: [
                "A via connecting layers through the full board thickness",
                "A via connecting only two external pads without a hole",
                "A printed component label",
                "A mounting hole without conductive plating"
              ],
              answer: "A via connecting layers through the full board thickness"
            },
            {
              question: "What can insufficient clearance cause?",
              options: [
                "Electrical shorts or manufacturing defects",
                "Automatic circuit improvement",
                "Higher software performance",
                "Reduced file size"
              ],
              answer: "Electrical shorts or manufacturing defects"
            },
            {
              question: "Where should PCB manufacturing limits be obtained?",
              options: [
                "PCB manufacturer's specifications",
                "Component silkscreen",
                "Computer keyboard manual",
                "Project title"
              ],
              answer: "PCB manufacturer's specifications"
            }
          ]
        },
        {
          title: "Ground Planes and Power Distribution",
          content: `
Ground and power distribution are important parts of PCB layout.

A ground plane is a large copper area connected to the circuit's ground reference. It can provide a low-impedance return path and help reduce interference when designed appropriately.

Power planes or power copper regions distribute supply voltage to different parts of the circuit.

Important practices include:

- Provide clear return paths for signals.
- Avoid unnecessarily splitting important ground return paths.
- Place decoupling capacitors near IC power pins.
- Use suitable copper widths for power connections.
- Keep noisy switching currents from disturbing sensitive signals where practical.

Grounding is not simply connecting every point randomly. The return-current path and circuit function must be considered.

In multilayer boards, dedicated ground and power planes can simplify routing and improve electrical performance.

Good power distribution helps maintain stable supply voltages across the board.
          `,
          quiz: [
            {
              question: "What is a ground plane?",
              options: [
                "A large copper area connected to ground",
                "A plastic board cover",
                "A component identification label",
                "A type of resistor"
              ],
              answer: "A large copper area connected to ground"
            },
            {
              question: "What is a main benefit of a ground plane?",
              options: [
                "Providing a low-impedance return path",
                "Increasing component height",
                "Replacing all power supplies",
                "Removing the need for copper tracks"
              ],
              answer: "Providing a low-impedance return path"
            },
            {
              question: "Where should decoupling capacitors be placed?",
              options: [
                "Near IC power pins",
                "Only at the board corners",
                "On the board outline",
                "Outside the circuit"
              ],
              answer: "Near IC power pins"
            },
            {
              question: "What is a power plane used for?",
              options: [
                "Distributing supply voltage",
                "Printing component names",
                "Measuring signal frequency",
                "Protecting the silkscreen"
              ],
              answer: "Distributing supply voltage"
            },
            {
              question: "Why should return-current paths be considered?",
              options: [
                "They affect signal quality and interference",
                "They determine the PCB's color",
                "They replace component footprints",
                "They eliminate the need for testing"
              ],
              answer: "They affect signal quality and interference"
            }
          ]
        },
        {
          title: "Signal Integrity and EMI Basics",
          content: `
Signal integrity describes how accurately an electrical signal travels through a circuit or PCB.

At higher frequencies and faster edge rates, PCB traces can behave like transmission lines. Their geometry and surrounding materials influence signal behavior.

Common signal integrity concerns include:

1. Reflections caused by impedance discontinuities.
2. Crosstalk between nearby signal paths.
3. Excessive noise.
4. Ground bounce.
5. Timing and propagation delay.

Electromagnetic interference (EMI) is unwanted electromagnetic energy that can disturb electronic operation or affect nearby equipment.

Good PCB practices include maintaining suitable return paths, reducing unnecessary loop areas, separating noisy and sensitive circuits where practical, and following appropriate routing rules.

Controlled impedance routing may be required for high-speed interfaces.

Signal integrity and EMI should be considered during component placement, layer planning, and routing rather than only after the board is completed.
          `,
          quiz: [
            {
              question: "What does signal integrity describe?",
              options: [
                "How accurately signals travel through a circuit",
                "The physical color of a PCB",
                "The number of mounting holes",
                "The weight of a connector"
              ],
              answer: "How accurately signals travel through a circuit"
            },
            {
              question: "What can cause signal reflections?",
              options: [
                "Impedance discontinuities",
                "Component labels",
                "Board photographs",
                "Silkscreen font size"
              ],
              answer: "Impedance discontinuities"
            },
            {
              question: "What is crosstalk?",
              options: [
                "Unwanted coupling between nearby signal paths",
                "A method of printing PCB labels",
                "A type of board material",
                "A mechanical mounting process"
              ],
              answer: "Unwanted coupling between nearby signal paths"
            },
            {
              question: "What does EMI stand for?",
              options: [
                "Electromagnetic Interference",
                "Electronic Manufacturing Input",
                "Electrical Measurement Indicator",
                "External Memory Interface"
              ],
              answer: "Electromagnetic Interference"
            },
            {
              question: "Which practice can help reduce EMI?",
              options: [
                "Maintaining suitable return paths and reducing loop areas",
                "Placing all signals randomly",
                "Removing every ground connection",
                "Increasing every track length"
              ],
              answer: "Maintaining suitable return paths and reducing loop areas"
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: Manufacturing, Testing, and Practical Design",
      lessons: [
        {
          title: "Design Rule Checking and PCB Verification",
          content: `
Design Rule Checking (DRC) verifies whether a PCB layout follows selected electrical and manufacturing constraints.

Common DRC checks include:

- Track-to-track clearance.
- Track-to-pad clearance.
- Minimum track width.
- Unconnected nets.
- Hole and via dimensions.
- Copper-to-board-edge clearance.
- Solder mask and silkscreen constraints.

An unrouted connection indicates that required electrical connectivity is incomplete.

A DRC error should be investigated and corrected where necessary. Warnings should also be reviewed because they may indicate issues that affect manufacturing or reliability.

A board should be checked after routing and again after any significant layout changes.

Electrical Rule Check (ERC) is generally associated with schematic verification, while DRC is associated with PCB layout verification.

Both checks help identify problems before manufacturing.
          `,
          quiz: [
            {
              question: "What does DRC stand for?",
              options: [
                "Design Rule Checking",
                "Digital Routing Control",
                "Device Resistance Calculation",
                "Data Recording Circuit"
              ],
              answer: "Design Rule Checking"
            },
            {
              question: "What does DRC check?",
              options: [
                "PCB layout and manufacturing constraints",
                "Only component operating temperature",
                "Only the circuit's software code",
                "The computer's storage capacity"
              ],
              answer: "PCB layout and manufacturing constraints"
            },
            {
              question: "What does an unrouted connection indicate?",
              options: [
                "A required electrical connection is incomplete",
                "The board has been manufactured",
                "The circuit is fully assembled",
                "The component is automatically tested"
              ],
              answer: "A required electrical connection is incomplete"
            },
            {
              question: "Which check is mainly associated with schematic verification?",
              options: ["ERC", "DRC", "EMI", "SPI"],
              answer: "ERC"
            },
            {
              question: "When should DRC be performed?",
              options: [
                "After routing and significant layout changes",
                "Only before creating the schematic",
                "Only after the PCB is discarded",
                "Never during PCB design"
              ],
              answer: "After routing and significant layout changes"
            }
          ]
        },
        {
          title: "PCB Manufacturing and Gerber Files",
          content: `
PCB manufacturing converts the digital board layout into a physical printed circuit board.

A designer must provide manufacturing information in a format supported by the PCB fabrication company.

Gerber files are commonly used to describe individual PCB image layers, such as copper, solder mask, and silkscreen.

Drill files describe hole locations and sizes.

Other manufacturing information may include board thickness, copper weight, surface finish, and layer stackup.

The manufacturing workflow commonly includes:

1. Preparing and checking design files.
2. Creating copper patterns.
3. Drilling holes.
4. Applying plating where required.
5. Applying solder mask.
6. Adding silkscreen markings.
7. Applying surface finish.
8. Inspecting the finished board.

The exact process depends on the board type and manufacturer's technology.

Before sending files, verify the board outline, layer order, drill information, and manufacturing requirements.
          `,
          quiz: [
            {
              question: "What are Gerber files used for?",
              options: [
                "Describing PCB image layers for manufacturing",
                "Writing embedded software",
                "Measuring battery capacity",
                "Creating component datasheets"
              ],
              answer: "Describing PCB image layers for manufacturing"
            },
            {
              question: "What do drill files describe?",
              options: [
                "Hole locations and sizes",
                "Component operating frequencies",
                "Signal voltage levels",
                "Soldering iron temperatures"
              ],
              answer: "Hole locations and sizes"
            },
            {
              question: "Which information may be included in manufacturing specifications?",
              options: [
                "Board thickness and copper weight",
                "Computer screen resolution",
                "Programming language version",
                "Keyboard model"
              ],
              answer: "Board thickness and copper weight"
            },
            {
              question: "Why should the board outline be checked before manufacturing?",
              options: [
                "To ensure the physical board dimensions are correct",
                "To increase the number of electrical nets",
                "To remove the need for drilling",
                "To change the component values"
              ],
              answer: "To ensure the physical board dimensions are correct"
            },
            {
              question: "Who determines the accepted manufacturing file requirements?",
              options: [
                "The PCB fabrication manufacturer",
                "The computer's operating system",
                "The component silkscreen",
                "The keyboard manufacturer"
              ],
              answer: "The PCB fabrication manufacturer"
            }
          ]
        },
        {
          title: "PCB Assembly, Testing, and Troubleshooting",
          content: `
After fabrication, electronic components are assembled onto the PCB.

Common assembly methods include through-hole soldering and surface-mount assembly.

After assembly, the board should be inspected and tested.

Typical verification activities include:

1. Visual inspection for incorrect placement or visible solder defects.
2. Continuity checks to verify intended electrical paths.
3. Short-circuit checks between power and ground where appropriate.
4. Power supply verification.
5. Functional testing of circuit operation.

A multimeter can measure voltage, resistance, and continuity. An oscilloscope can display signals and help investigate timing or waveform problems.

If a circuit does not operate correctly, troubleshooting should begin with basic checks such as supply voltage, component orientation, solder joints, and connection errors.

Testing should be performed using appropriate low-voltage laboratory equipment and established safety procedures.

A documented test procedure helps make results repeatable and easier to compare.
          `,
          quiz: [
            {
              question: "What is PCB assembly?",
              options: [
                "Mounting electronic components onto a PCB",
                "Drawing a circuit schematic only",
                "Creating a board outline",
                "Selecting a substrate material"
              ],
              answer: "Mounting electronic components onto a PCB"
            },
            {
              question: "What does a continuity test verify?",
              options: [
                "Whether an intended electrical path is connected",
                "The physical color of a component",
                "The board's manufacturing cost",
                "The operating system version"
              ],
              answer: "Whether an intended electrical path is connected"
            },
            {
              question: "Which instrument can display electrical waveforms?",
              options: ["Oscilloscope", "Soldering iron", "Drill machine", "Magnifying glass"],
              answer: "Oscilloscope"
            },
            {
              question: "What should be checked first when a PCB does not operate?",
              options: [
                "Supply voltage and basic connections",
                "Only the board's logo",
                "The computer's wallpaper",
                "The silkscreen font"
              ],
              answer: "Supply voltage and basic connections"
            },
            {
              question: "Why is a documented test procedure useful?",
              options: [
                "It makes testing repeatable and comparable",
                "It eliminates all circuit components",
                "It replaces the manufacturing process",
                "It changes the PCB layer count"
              ],
              answer: "It makes testing repeatable and comparable"
            }
          ]
        },
        {
          title: "Final Project: Design a Basic PCB",
          content: `
The final project combines schematic design, component selection, PCB layout, verification, and manufacturing preparation.

Project: Design a basic low-voltage LED indicator PCB.

The board should contain:
- A suitable low-voltage supply connector.
- An LED.
- A current-limiting resistor.
- Optional power indication or test points.

Project workflow:

1. Define the circuit requirements.
2. Draw the schematic.
3. Select components and check their datasheets.
4. Assign suitable PCB footprints.
5. Create the board outline.
6. Place the components.
7. Route the electrical connections.
8. Add clear reference labels.
9. Run ERC and DRC.
10. Generate Gerber and drill files.
11. Review the manufacturing outputs.
12. Prepare a test plan for the assembled board.

The design should use an appropriate low-voltage supply and a correctly selected current-limiting resistor.

The final documentation should include the schematic, PCB layout, component list, manufacturing files, and test results.

This project demonstrates the complete PCB design workflow from circuit planning to manufacturing preparation.
          `,
          quiz: [
            {
              question: "What is the purpose of the final PCB project?",
              options: [
                "To apply the complete PCB design workflow",
                "To study only computer programming",
                "To manufacture a battery",
                "To replace all electronic components"
              ],
              answer: "To apply the complete PCB design workflow"
            },
            {
              question: "Why does an LED circuit require a current-limiting resistor?",
              options: [
                "To limit current through the LED",
                "To increase current without restriction",
                "To convert the LED into a capacitor",
                "To remove the supply voltage"
              ],
              answer: "To limit current through the LED"
            },
            {
              question: "Which document shows the circuit connections?",
              options: [
                "Schematic",
                "Drill file",
                "Board photograph",
                "Manufacturing invoice"
              ],
              answer: "Schematic"
            },
            {
              question: "Which files are commonly prepared for PCB fabrication?",
              options: [
                "Gerber and drill files",
                "Audio and video files",
                "Spreadsheet and presentation files",
                "Source code and image files only"
              ],
              answer: "Gerber and drill files"
            },
            {
              question: "What should the final project documentation contain?",
              options: [
                "Schematic, PCB layout, component list, and test results",
                "Only the project title",
                "Only a photograph of the computer",
                "Only the component prices"
              ],
              answer: "Schematic, PCB layout, component list, and test results"
            }
          ]
        }
      ]
    }
  ]
};

export default pcbDesignCourse;
const circuitTheoryCourse = {
  title: "Circuit Theory",
  description:
    "Learn electrical circuit fundamentals, Ohm's law, Kirchhoff's laws, network theorems, AC circuit analysis, impedance, resonance, transient response, and circuit applications.",
  weeks: [
    {
      title: "Week 1: Electrical Circuit Fundamentals",
      lessons: [
        {
          title: "Introduction to Electrical Circuits",
          content: `
An electrical circuit is a closed path through which electric current can flow. It contains electrical components connected by conducting wires.

A basic circuit may contain a voltage source, resistor, switch, and connecting wires.

Important circuit quantities include:

1. Voltage: Electrical potential difference between two points, measured in volts.
2. Current: Rate of flow of electric charge, measured in amperes.
3. Resistance: Opposition to current flow, measured in ohms.
4. Power: Rate of electrical energy transfer, measured in watts.
5. Energy: Total electrical work transferred over time, measured in joules.

Circuits can be classified as DC or AC circuits. In a DC circuit, current generally flows in one direction. In an AC circuit, voltage and current vary periodically with time.

Circuit diagrams use standard symbols to represent components. These diagrams help engineers understand connections and analyze circuit behavior.

Circuit theory provides mathematical methods for calculating voltages, currents, and power in electrical networks.
          `,
          quiz: [
            {
              question: "What is an electrical circuit?",
              options: [
                "A closed path through which current can flow",
                "A storage device without connections",
                "A material that blocks every signal",
                "A system used only for displaying images"
              ],
              answer: "A closed path through which current can flow"
            },
            {
              question: "What is the unit of voltage?",
              options: ["Volt", "Ampere", "Ohm", "Watt"],
              answer: "Volt"
            },
            {
              question: "What is the unit of resistance?",
              options: ["Ohm", "Volt", "Farad", "Henry"],
              answer: "Ohm"
            },
            {
              question: "What is the main difference between AC and DC?",
              options: [
                "AC varies periodically while DC maintains one direction of flow",
                "AC has no voltage while DC always has zero voltage",
                "DC changes direction every cycle",
                "Both always behave identically"
              ],
              answer: "AC varies periodically while DC maintains one direction of flow"
            },
            {
              question: "Which diagram represents electrical components using standard symbols?",
              options: [
                "Circuit diagram",
                "Flowchart",
                "Database diagram",
                "Network map"
              ],
              answer: "Circuit diagram"
            }
          ]
        },
        {
          title: "Ohm's Law and Electrical Power",
          content: `
Ohm's law describes the relationship between voltage, current, and resistance in an ohmic conductor under suitable physical conditions.

The equation is:

V = IR

Where:
- V is voltage in volts.
- I is current in amperes.
- R is resistance in ohms.

For example, if a 10-ohm resistor is connected across a 20-volt supply, the current is 2 amperes.

Electrical power is the rate at which electrical energy is transferred.

The basic power equation is:

P = VI

Using Ohm's law, power can also be expressed as:

P = I²R

P = V²/R

These equations are useful when selecting resistors and estimating circuit energy consumption.

A resistor must have an appropriate power rating. If it dissipates more power than its rating, it may overheat or become damaged.

Understanding Ohm's law and power is essential for solving simple and complex electrical networks.
          `,
          quiz: [
            {
              question: "Which equation represents Ohm's law?",
              options: ["V = IR", "V = I/R", "R = VI", "I = VR"],
              answer: "V = IR"
            },
            {
              question: "What is the current through a 10-ohm resistor connected to 20 V?",
              options: ["2 A", "10 A", "20 A", "200 A"],
              answer: "2 A"
            },
            {
              question: "Which equation calculates electrical power?",
              options: ["P = VI", "P = V + I", "P = R/I", "P = V - I"],
              answer: "P = VI"
            },
            {
              question: "Which is another expression for resistive power?",
              options: ["P = I²R", "P = I/R", "P = R²/I", "P = V + R"],
              answer: "P = I²R"
            },
            {
              question: "Why should a resistor's power rating be checked?",
              options: [
                "To prevent excessive heating and damage",
                "To increase its resistance automatically",
                "To remove current from the circuit",
                "To change AC into DC"
              ],
              answer: "To prevent excessive heating and damage"
            }
          ]
        },
        {
          title: "Series and Parallel Circuits",
          content: `
Electrical components can be connected in series, parallel, or a combination of both.

In a series circuit, components are connected along one current path. The same current flows through every component.

The equivalent resistance of series resistors is:

Req = R1 + R2 + R3 + ...

The supply voltage is divided across the resistors according to their resistance values.

In a parallel circuit, components are connected across the same two nodes. Each branch has the same voltage.

The equivalent resistance of parallel resistors is calculated using:

1/Req = 1/R1 + 1/R2 + 1/R3 + ...

For two parallel resistors:

Req = (R1 × R2)/(R1 + R2)

The equivalent resistance of ordinary positive resistors in parallel is lower than the smallest individual resistance.

Series and parallel combinations are used in voltage dividers, current dividers, household circuits, and electronic systems.
          `,
          quiz: [
            {
              question: "What remains the same through all components in a series circuit?",
              options: ["Current", "Voltage", "Resistance", "Power"],
              answer: "Current"
            },
            {
              question: "What remains the same across parallel branches?",
              options: ["Voltage", "Current", "Resistance", "Power"],
              answer: "Voltage"
            },
            {
              question: "What is the equivalent resistance of 5 ohms and 10 ohms in series?",
              options: ["15 ohms", "5 ohms", "10 ohms", "50 ohms"],
              answer: "15 ohms"
            },
            {
              question: "What is the equivalent resistance of two 10-ohm resistors in parallel?",
              options: ["5 ohms", "10 ohms", "20 ohms", "100 ohms"],
              answer: "5 ohms"
            },
            {
              question: "How are parallel components connected?",
              options: [
                "Across the same two nodes",
                "One after another in a single path",
                "Without any electrical connection",
                "Only through a transformer"
              ],
              answer: "Across the same two nodes"
            }
          ]
        },
        {
          title: "Kirchhoff's Laws",
          content: `
Kirchhoff's laws are fundamental rules used to analyze electrical networks.

There are two main laws:

1. Kirchhoff's Current Law (KCL)
2. Kirchhoff's Voltage Law (KVL)

Kirchhoff's Current Law states that the algebraic sum of currents at a node is zero.

In simple terms, total current entering a junction equals total current leaving it.

For example, if 5 A enters a node and 2 A leaves through one branch, the remaining outgoing current is 3 A.

Kirchhoff's Voltage Law states that the algebraic sum of all voltage changes around a closed loop is zero.

This means the total voltage rises equal the total voltage drops around a closed path.

KCL is based on conservation of electric charge, while KVL is based on conservation of energy.

These laws are useful for analyzing networks that contain multiple sources and resistors.
          `,
          quiz: [
            {
              question: "What does KCL stand for?",
              options: [
                "Kirchhoff's Current Law",
                "Kirchhoff's Circuit Load",
                "Key Current Level",
                "Known Circuit Loop"
              ],
              answer: "Kirchhoff's Current Law"
            },
            {
              question: "What does KCL state?",
              options: [
                "Total current entering a node equals total current leaving it",
                "Voltage is always zero in every branch",
                "Resistance is equal to current",
                "Power is always constant in every component"
              ],
              answer: "Total current entering a node equals total current leaving it"
            },
            {
              question: "What does KVL stand for?",
              options: [
                "Kirchhoff's Voltage Law",
                "Known Voltage Level",
                "Key Variable Loop",
                "Kirchhoff's Variable Load"
              ],
              answer: "Kirchhoff's Voltage Law"
            },
            {
              question: "What is the algebraic sum of voltages around a closed loop?",
              options: ["Zero", "One volt", "Infinite", "Equal to resistance"],
              answer: "Zero"
            },
            {
              question: "KCL is based on which conservation principle?",
              options: [
                "Conservation of electric charge",
                "Conservation of magnetic poles",
                "Conservation of temperature",
                "Conservation of frequency"
              ],
              answer: "Conservation of electric charge"
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: Network Analysis and Theorems",
      lessons: [
        {
          title: "Node Voltage and Mesh Current Methods",
          content: `
Node voltage and mesh current methods are systematic techniques for solving electrical networks.

The node voltage method uses Kirchhoff's Current Law. One node is selected as the reference node, usually called ground. Voltages at the remaining nodes are calculated relative to this reference.

For each unknown node, an equation is formed by adding currents entering or leaving the node.

The mesh current method uses Kirchhoff's Voltage Law. It assigns a current to each independent mesh in a planar circuit and writes voltage equations around the loops.

A mesh is a loop that does not contain another loop inside it.

These methods are especially useful when a circuit contains several resistors and independent sources.

The node voltage method is often convenient when a circuit has fewer essential nodes, while mesh analysis may be convenient when there are fewer independent meshes.

Both methods convert a circuit into a set of algebraic equations that can be solved for unknown voltages and currents.
          `,
          quiz: [
            {
              question: "Which law is used in node voltage analysis?",
              options: [
                "Kirchhoff's Current Law",
                "Kirchhoff's Voltage Law only",
                "Faraday's law",
                "Coulomb's law only"
              ],
              answer: "Kirchhoff's Current Law"
            },
            {
              question: "What is the reference node commonly called?",
              options: ["Ground", "Collector", "Emitter", "Load"],
              answer: "Ground"
            },
            {
              question: "Which law is used in mesh current analysis?",
              options: [
                "Kirchhoff's Voltage Law",
                "Kirchhoff's Current Law only",
                "Ohm's law only",
                "Lenz's law"
              ],
              answer: "Kirchhoff's Voltage Law"
            },
            {
              question: "What is a mesh?",
              options: [
                "A loop containing no other loop inside it",
                "A resistor connected to ground",
                "A voltage source without a circuit",
                "An open electrical path"
              ],
              answer: "A loop containing no other loop inside it"
            },
            {
              question: "What do these analysis methods help determine?",
              options: [
                "Unknown circuit voltages and currents",
                "Physical color of circuit components",
                "The manufacturing date of a resistor",
                "The length of a program"
              ],
              answer: "Unknown circuit voltages and currents"
            }
          ]
        },
        {
          title: "Superposition Theorem",
          content: `
The superposition theorem is used in linear circuits containing multiple independent sources.

It states that the voltage or current in any element of a linear network is the algebraic sum of the contributions produced by each independent source acting separately.

To apply the theorem:

1. Select one independent source.
2. Keep that source active.
3. Replace other independent ideal voltage sources with short circuits.
4. Replace other independent ideal current sources with open circuits.
5. Calculate the required voltage or current contribution.
6. Repeat for every independent source.
7. Add all contributions algebraically.

Dependent sources remain active during superposition analysis.

The theorem applies to voltages and currents, not directly to power. Power must be calculated from the final combined voltage or current.

Superposition is useful for understanding how multiple sources influence a circuit.
          `,
          quiz: [
            {
              question: "Where is the superposition theorem applied?",
              options: [
                "Linear circuits with multiple independent sources",
                "Only nonlinear circuits",
                "Circuits without any sources",
                "Mechanical systems only"
              ],
              answer: "Linear circuits with multiple independent sources"
            },
            {
              question: "What replaces an ideal independent voltage source when deactivated?",
              options: [
                "Short circuit",
                "Open circuit",
                "Infinite resistance",
                "Capacitor"
              ],
              answer: "Short circuit"
            },
            {
              question: "What replaces an ideal independent current source when deactivated?",
              options: [
                "Open circuit",
                "Short circuit",
                "Inductor",
                "Voltage source"
              ],
              answer: "Open circuit"
            },
            {
              question: "What happens to dependent sources during superposition?",
              options: [
                "They remain active",
                "They are always removed",
                "They are replaced with open circuits",
                "They are replaced with short circuits"
              ],
              answer: "They remain active"
            },
            {
              question: "Can power contributions be added directly using superposition?",
              options: [
                "No, calculate power from the final combined voltage or current",
                "Yes, in every circuit without exception",
                "Only when resistance is zero",
                "Only when all sources are current sources"
              ],
              answer: "No, calculate power from the final combined voltage or current"
            }
          ]
        },
        {
          title: "Thevenin's and Norton's Theorems",
          content: `
Thevenin's and Norton's theorems simplify a linear two-terminal network into an equivalent circuit.

Thevenin's theorem states that a linear network can be represented by an equivalent voltage source in series with an equivalent resistance.

The equivalent voltage is the open-circuit voltage measured at the output terminals.

The equivalent resistance is found by looking into the network with independent sources deactivated, or by using suitable test-source methods when dependent sources are present.

Norton's theorem represents the same type of network using an equivalent current source in parallel with an equivalent resistance.

The Norton current is the short-circuit current between the output terminals.

The two equivalent forms are related by:

Vth = In × Rth

These theorems simplify load calculations and help analyze how a circuit behaves when different loads are connected.
          `,
          quiz: [
            {
              question: "What does Thevenin's theorem produce?",
              options: [
                "A voltage source in series with a resistance",
                "A current source in series with a capacitor",
                "A resistor without a source",
                "A transformer connected to ground"
              ],
              answer: "A voltage source in series with a resistance"
            },
            {
              question: "What is Thevenin voltage?",
              options: [
                "Open-circuit terminal voltage",
                "Short-circuit current",
                "Maximum resistor power",
                "Total circuit resistance"
              ],
              answer: "Open-circuit terminal voltage"
            },
            {
              question: "What does Norton's theorem produce?",
              options: [
                "A current source in parallel with a resistance",
                "A voltage source in series with a capacitor",
                "An open circuit without a source",
                "A resistor connected in series with an inductor"
              ],
              answer: "A current source in parallel with a resistance"
            },
            {
              question: "What is Norton current?",
              options: [
                "Short-circuit current at the output terminals",
                "Open-circuit voltage at the input",
                "Current through every resistor",
                "Current stored in a capacitor"
              ],
              answer: "Short-circuit current at the output terminals"
            },
            {
              question: "What is the relationship between Thevenin voltage and Norton current?",
              options: ["Vth = In × Rth", "Vth = In / Rth", "Vth = In + Rth", "Vth = Rth - In"],
              answer: "Vth = In × Rth"
            }
          ]
        },
        {
          title: "Maximum Power Transfer and Reciprocity Theorems",
          content: `
The maximum power transfer theorem identifies the load condition under which a source network delivers maximum power to a load.

For a DC network represented by a Thevenin equivalent, maximum power is transferred when the load resistance equals the Thevenin resistance.

RL = Rth

For AC networks, maximum average power transfer occurs when the load impedance is the complex conjugate of the source impedance under the usual linear steady-state assumptions.

The reciprocity theorem states that in a linear, bilateral network with a single independent source, the response at one location due to an excitation at another location can be interchanged under suitable conditions.

These theorems are useful in communication circuits, impedance matching, and network analysis.

Maximum power transfer does not necessarily mean maximum efficiency. In the simple resistive case, the load receives maximum power when the load resistance equals the source resistance, and equal power is dissipated in the source resistance.
          `,
          quiz: [
            {
              question: "When does maximum power transfer occur in a DC Thevenin equivalent?",
              options: [
                "When load resistance equals Thevenin resistance",
                "When load resistance is zero",
                "When load resistance is infinite",
                "When load resistance is always twice the source voltage"
              ],
              answer: "When load resistance equals Thevenin resistance"
            },
            {
              question: "What is the maximum power transfer condition for AC impedance matching?",
              options: [
                "Load impedance equals the complex conjugate of source impedance",
                "Load impedance is always zero",
                "Load impedance equals source voltage",
                "Load impedance is always purely capacitive"
              ],
              answer: "Load impedance equals the complex conjugate of source impedance"
            },
            {
              question: "What kind of network is required for the reciprocity theorem?",
              options: [
                "Linear and bilateral network",
                "Only nonlinear network",
                "Only unilateral network",
                "Network without any components"
              ],
              answer: "Linear and bilateral network"
            },
            {
              question: "Does maximum power transfer always mean maximum efficiency?",
              options: [
                "No, maximum power and maximum efficiency are different conditions",
                "Yes, in every possible circuit",
                "Yes, when resistance is zero",
                "Only in open circuits"
              ],
              answer: "No, maximum power and maximum efficiency are different conditions"
            },
            {
              question: "Which theorem helps identify the load condition for maximum delivered power?",
              options: [
                "Maximum power transfer theorem",
                "Kirchhoff's Current Law",
                "Faraday's law",
                "Ampere's law"
              ],
              answer: "Maximum power transfer theorem"
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: AC Circuit Analysis",
      lessons: [
        {
          title: "AC Fundamentals and Phasors",
          content: `
Alternating current changes its magnitude and direction periodically.

A sinusoidal AC voltage can be represented as:

v(t) = Vm sin(ωt + φ)

Where:
- Vm is peak voltage.
- ω is angular frequency.
- t is time.
- φ is phase angle.

Angular frequency is related to frequency by:

ω = 2πf

A phasor is a complex-number representation of a sinusoidal quantity. It simplifies AC circuit calculations by representing magnitude and phase together.

Phasors are especially useful when a circuit contains resistors, capacitors, and inductors.

The RMS value of a sinusoidal voltage is:

Vrms = Vm / √2

Similarly:

Irms = Im / √2

Phasor analysis converts differential relationships in steady-state sinusoidal circuits into algebraic relationships.

It is widely used in power systems, communication circuits, and AC network analysis.
          `,
          quiz: [
            {
              question: "What does AC stand for?",
              options: [
                "Alternating Current",
                "Automatic Circuit",
                "Applied Capacitor",
                "Analog Connection"
              ],
              answer: "Alternating Current"
            },
            {
              question: "What is angular frequency?",
              options: ["ω = 2πf", "ω = f/2", "ω = 2f", "ω = f + 2π"],
              answer: "ω = 2πf"
            },
            {
              question: "What does a phasor represent?",
              options: [
                "Magnitude and phase of a sinusoidal quantity",
                "Only a resistor's physical size",
                "A permanent memory address",
                "A circuit's manufacturing date"
              ],
              answer: "Magnitude and phase of a sinusoidal quantity"
            },
            {
              question: "What is the RMS value of a sinusoidal voltage?",
              options: ["Vm / √2", "2Vm", "Vm × √2", "Vm / 2π"],
              answer: "Vm / √2"
            },
            {
              question: "What is the main advantage of phasor analysis?",
              options: [
                "It simplifies steady-state AC circuit calculations",
                "It removes all circuit resistance",
                "It converts AC directly into mechanical power",
                "It eliminates the need for voltage sources"
              ],
              answer: "It simplifies steady-state AC circuit calculations"
            }
          ]
        },
        {
          title: "AC Circuits with Resistors, Inductors, and Capacitors",
          content: `
Resistors, inductors, and capacitors respond differently to alternating current.

In a pure resistive circuit, voltage and current are in phase.

In an ideal inductive circuit, current lags voltage by 90 degrees.

In an ideal capacitive circuit, current leads voltage by 90 degrees.

Inductive reactance is:

XL = ωL

Capacitive reactance is:

XC = 1/(ωC)

Both reactance quantities are measured in ohms.

As frequency increases, inductive reactance increases while capacitive reactance decreases.

In an RLC circuit, resistance, inductance, and capacitance together determine the impedance and phase relationship.

These principles are used in filters, tuning circuits, and AC power applications.
          `,
          quiz: [
            {
              question: "What is the phase relationship in a pure resistive AC circuit?",
              options: [
                "Voltage and current are in phase",
                "Current always leads by 90 degrees",
                "Current always lags by 90 degrees",
                "Voltage and current are unrelated"
              ],
              answer: "Voltage and current are in phase"
            },
            {
              question: "In an ideal inductor, current:",
              options: [
                "Lags voltage by 90 degrees",
                "Leads voltage by 90 degrees",
                "Is always zero",
                "Is always in phase with voltage"
              ],
              answer: "Lags voltage by 90 degrees"
            },
            {
              question: "In an ideal capacitor, current:",
              options: [
                "Leads voltage by 90 degrees",
                "Lags voltage by 90 degrees",
                "Is always zero",
                "Has no phase relationship"
              ],
              answer: "Leads voltage by 90 degrees"
            },
            {
              question: "What is inductive reactance?",
              options: ["XL = ωL", "XL = 1/(ωL)", "XL = ω/L", "XL = L/ω²"],
              answer: "XL = ωL"
            },
            {
              question: "What happens to capacitive reactance when frequency increases?",
              options: [
                "It decreases",
                "It increases",
                "It remains constant in every case",
                "It becomes equal to resistance"
              ],
              answer: "It decreases"
            }
          ]
        },
        {
          title: "Impedance, Admittance, and Power Factor",
          content: `
Impedance is the total opposition offered by an AC circuit to current flow. It includes resistance and reactance.

Impedance is represented by the complex quantity:

Z = R + jX

Here, R is resistance, X is net reactance, and j represents the imaginary unit.

Admittance is the reciprocal of impedance:

Y = 1/Z

It represents how easily AC current flows through a circuit.

In AC circuits, power is commonly divided into three quantities:

1. Active power: Power converted into useful work or heat, measured in watts.
2. Reactive power: Power exchanged between source and reactive components, measured in volt-amperes reactive.
3. Apparent power: Product of RMS voltage and RMS current, measured in volt-amperes.

Power factor is the ratio of active power to apparent power.

For a sinusoidal circuit:

Power factor = cos φ

where φ is the phase angle between voltage and current.

Power factor is important in electrical systems because a low power factor can increase current for a given active power.
          `,
          quiz: [
            {
              question: "What does impedance represent?",
              options: [
                "Total opposition to AC current",
                "Only the active power",
                "The number of circuit branches",
                "The physical size of a capacitor"
              ],
              answer: "Total opposition to AC current"
            },
            {
              question: "What is admittance?",
              options: [
                "Reciprocal of impedance",
                "Square of resistance",
                "Sum of voltage and current",
                "Product of frequency and power"
              ],
              answer: "Reciprocal of impedance"
            },
            {
              question: "What is the unit of active power?",
              options: ["Watt", "Ohm", "Farad", "Henry"],
              answer: "Watt"
            },
            {
              question: "What is the power factor for a sinusoidal circuit?",
              options: ["cos φ", "sin φ only", "tan φ", "1/φ"],
              answer: "cos φ"
            },
            {
              question: "What can a low power factor cause in a power system?",
              options: [
                "Higher current for a given active power",
                "Zero current in every branch",
                "Automatic voltage regulation in all loads",
                "Removal of all reactive components"
              ],
              answer: "Higher current for a given active power"
            }
          ]
        },
        {
          title: "Series and Parallel RLC Circuits",
          content: `
An RLC circuit contains resistance, inductance, and capacitance.

In a series RLC circuit, the components are connected along one current path. The same current flows through all three components.

The impedance is:

Z = R + j(XL - XC)

At low frequencies, capacitive reactance may dominate. At high frequencies, inductive reactance may dominate.

In a parallel RLC circuit, all branches share the same voltage. The total current is the sum of the branch currents.

Series and parallel RLC circuits can show resonance when inductive and capacitive effects balance.

RLC networks are used in filters, frequency-selective circuits, and communication systems.

Understanding their impedance helps determine how a circuit responds at different frequencies.
          `,
          quiz: [
            {
              question: "What components are present in an RLC circuit?",
              options: [
                "Resistor, inductor, and capacitor",
                "Relay, lamp, and connector",
                "Transistor, battery, and switch only",
                "Diode, motor, and fuse only"
              ],
              answer: "Resistor, inductor, and capacitor"
            },
            {
              question: "What is the series RLC impedance?",
              options: [
                "Z = R + j(XL - XC)",
                "Z = R + XL + XC",
                "Z = XL / XC",
                "Z = R × XL × XC"
              ],
              answer: "Z = R + j(XL - XC)"
            },
            {
              question: "What is common to all components in a series RLC circuit?",
              options: ["Current", "Voltage", "Power", "Reactance"],
              answer: "Current"
            },
            {
              question: "What is common to branches in a parallel RLC circuit?",
              options: ["Voltage", "Current", "Resistance", "Power"],
              answer: "Voltage"
            },
            {
              question: "What can RLC circuits be used for?",
              options: [
                "Frequency-selective circuits",
                "Permanent digital storage",
                "Mechanical gear manufacturing",
                "Computer file compression"
              ],
              answer: "Frequency-selective circuits"
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: Transient Response and Applications",
      lessons: [
        {
          title: "Transient and Steady-State Response",
          content: `
Circuit response describes how voltages and currents change when a circuit is excited by a source.

Transient response is the temporary behavior that occurs after a change, such as switching a supply on or changing an input.

Steady-state response is the behavior after the transient effects have sufficiently settled.

In an RC circuit, the capacitor voltage changes gradually rather than instantly.

In an RL circuit, the inductor current changes gradually because an inductor opposes sudden changes in current.

The time constant describes how quickly a first-order circuit responds.

For an RC circuit:

τ = RC

For an RL circuit:

τ = L/R

After approximately five time constants, a simple first-order response is generally considered very close to its final value.

Transient analysis is important in switching circuits, power supplies, timing circuits, and signal processing.
          `,
          quiz: [
            {
              question: "What is transient response?",
              options: [
                "Temporary circuit behavior after a change",
                "Permanent behavior before a circuit is connected",
                "A type of semiconductor material",
                "A circuit's physical layout"
              ],
              answer: "Temporary circuit behavior after a change"
            },
            {
              question: "What is steady-state response?",
              options: [
                "Circuit behavior after transient effects settle",
                "The first instant of switching",
                "A disconnected circuit condition",
                "An unwanted signal only"
              ],
              answer: "Circuit behavior after transient effects settle"
            },
            {
              question: "What is the RC time constant?",
              options: ["τ = RC", "τ = R/C", "τ = C/R", "τ = R + C"],
              answer: "τ = RC"
            },
            {
              question: "What is the RL time constant?",
              options: ["τ = L/R", "τ = R/L", "τ = RL", "τ = R + L"],
              answer: "τ = L/R"
            },
            {
              question: "Why does an inductor oppose sudden current changes?",
              options: [
                "A changing current induces an opposing voltage",
                "It stores charge on two plates",
                "It removes all resistance",
                "It blocks every frequency permanently"
              ],
              answer: "A changing current induces an opposing voltage"
            }
          ]
        },
        {
          title: "RC and RL Circuit Analysis",
          content: `
RC and RL circuits are first-order networks that contain one independent energy-storage element.

An RC circuit contains a resistor and capacitor. During charging, the capacitor voltage gradually approaches the supply voltage.

For a simple charging RC circuit:

Vc(t) = Vs(1 - e^(-t/RC))

During discharging, the capacitor voltage decreases exponentially.

An RL circuit contains a resistor and inductor. When a DC supply is applied, the current gradually approaches its final value.

The time constant of an RC circuit is RC, while the time constant of an RL circuit is L/R.

The response depends on the component values and the initial conditions.

These circuits are used in timing networks, filters, delay circuits, and power electronics.

Understanding the exponential response helps engineers estimate how long a circuit takes to reach a particular voltage or current.
          `,
          quiz: [
            {
              question: "Which components form an RC circuit?",
              options: [
                "Resistor and capacitor",
                "Resistor and inductor",
                "Diode and transistor",
                "Two voltage sources"
              ],
              answer: "Resistor and capacitor"
            },
            {
              question: "Which components form an RL circuit?",
              options: [
                "Resistor and inductor",
                "Resistor and capacitor",
                "Two capacitors",
                "Two diodes"
              ],
              answer: "Resistor and inductor"
            },
            {
              question: "What happens to capacitor voltage during charging in a simple RC circuit?",
              options: [
                "It gradually approaches the supply voltage",
                "It instantly becomes infinite",
                "It remains zero forever",
                "It changes randomly without a source"
              ],
              answer: "It gradually approaches the supply voltage"
            },
            {
              question: "What type of response is common in first-order RC circuits?",
              options: [
                "Exponential response",
                "Only linear response",
                "Random response",
                "Constant response under all conditions"
              ],
              answer: "Exponential response"
            },
            {
              question: "Which application can use an RC timing network?",
              options: [
                "Delay circuit",
                "Permanent data storage",
                "Mechanical gear assembly",
                "Wireless antenna construction only"
              ],
              answer: "Delay circuit"
            }
          ]
        },
        {
          title: "Resonance in Electrical Circuits",
          content: `
Resonance occurs in an RLC circuit when the inductive reactance and capacitive reactance are equal in magnitude.

The resonance condition is:

XL = XC

For an ideal series RLC circuit, the resonance frequency is:

fr = 1/(2π√LC)

At series resonance, the net reactance becomes zero and the impedance is purely resistive. Current reaches its maximum value for a fixed applied voltage in the ideal series model.

In a parallel resonant circuit, the input impedance becomes high around the resonant frequency under ideal conditions.

Important terms include:

1. Resonant frequency: Frequency at which resonance occurs.
2. Bandwidth: Difference between upper and lower cutoff frequencies.
3. Quality factor: Indicates the sharpness of resonance.

Resonance is used in radio tuning, communication circuits, filters, and frequency-selective networks.

Practical circuits have resistance and losses, so their behavior is not perfectly ideal.
          `,
          quiz: [
            {
              question: "When does resonance occur in an ideal RLC circuit?",
              options: [
                "When inductive and capacitive reactances are equal",
                "When resistance becomes infinite",
                "When current is always zero",
                "When capacitance becomes zero"
              ],
              answer: "When inductive and capacitive reactances are equal"
            },
            {
              question: "What is the resonance frequency of an ideal RLC circuit?",
              options: [
                "1/(2π√LC)",
                "2πLC",
                "R/L",
                "1/(RC)"
              ],
              answer: "1/(2π√LC)"
            },
            {
              question: "What is the impedance of an ideal series RLC circuit at resonance?",
              options: [
                "Purely resistive",
                "Purely capacitive",
                "Purely inductive",
                "Always infinite"
              ],
              answer: "Purely resistive"
            },
            {
              question: "What does bandwidth describe?",
              options: [
                "Difference between upper and lower cutoff frequencies",
                "Total number of circuit resistors",
                "Supply voltage divided by current",
                "Physical width of the circuit board"
              ],
              answer: "Difference between upper and lower cutoff frequencies"
            },
            {
              question: "Which application uses resonance?",
              options: [
                "Radio tuning",
                "Permanent file storage",
                "Mechanical printing",
                "Computer keyboard scanning only"
              ],
              answer: "Radio tuning"
            }
          ]
        },
        {
          title: "Circuit Simulation, Measurement, and Final Project",
          content: `
Circuit simulation and measurement help engineers verify circuit designs before and after hardware construction.

Simulation software allows users to create a circuit model, select component values, apply input sources, and examine calculated voltages and currents.

Common analysis types include:
- DC operating-point analysis.
- AC frequency-response analysis.
- Transient analysis.
- Parameter variation analysis.

Laboratory instruments provide real measurements.

A multimeter measures quantities such as voltage, current, and resistance. An oscilloscope displays voltage waveforms over time.

A function generator produces test signals such as sine, square, and triangular waves.

Final project: Analyze a basic RC low-pass filter.

Project steps:
1. Draw the circuit with a resistor and capacitor.
2. Select suitable low-voltage component values.
3. Calculate the theoretical cutoff frequency.
4. Simulate the circuit response.
5. Measure input and output signals using appropriate laboratory instruments.
6. Compare the theoretical, simulated, and measured results.
7. Record observations and explain differences.

Use appropriate low-voltage educational equipment and follow laboratory safety instructions. Disconnect power before changing circuit connections.
          `,
          quiz: [
            {
              question: "What is circuit simulation used for?",
              options: [
                "Predicting circuit behavior using a model",
                "Replacing every electrical component",
                "Manufacturing resistors",
                "Changing the physical laws of a circuit"
              ],
              answer: "Predicting circuit behavior using a model"
            },
            {
              question: "Which analysis examines circuit behavior over time?",
              options: [
                "Transient analysis",
                "DC operating-point analysis only",
                "File analysis",
                "Database analysis"
              ],
              answer: "Transient analysis"
            },
            {
              question: "Which instrument measures voltage, current, and resistance?",
              options: ["Multimeter", "Oscillator", "Function generator", "Transformer"],
              answer: "Multimeter"
            },
            {
              question: "Which instrument displays voltage waveforms over time?",
              options: ["Oscilloscope", "Ohmmeter only", "Soldering iron", "Power adapter"],
              answer: "Oscilloscope"
            },
            {
              question: "What is an important step in the RC filter project?",
              options: [
                "Compare theoretical, simulated, and measured results",
                "Ignore component values",
                "Disconnect the capacitor permanently",
                "Avoid checking the output signal"
              ],
              answer: "Compare theoretical, simulated, and measured results"
            }
          ]
        }
      ]
    }
  ]
};

export default circuitTheoryCourse;
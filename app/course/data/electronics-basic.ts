const electronicsBasicCourse = {
  title: "Electronics Basic",
  description:
    "Learn basic electronics, voltage, current, resistance, electrical components, circuit laws, diodes, transistors, capacitors, sensors, and practical electronic circuits.",

  weeks: [
    {
      title: "Week 1: Fundamentals of Electronics",
      description:
        "Understand electricity, electronic quantities, components, and basic circuit concepts.",
      lessons: [
        {
          title: "Introduction to Electronics",
          content: `
Electronics is the branch of engineering that deals with the flow and control of electrical energy using electronic components.

Electronic systems are used in computers, mobile phones, televisions, communication systems, medical equipment, automobiles, and industrial machines.

An electronic circuit consists of components connected together to perform a particular function.

Examples of electronic components include:

- Resistors
- Capacitors
- Inductors
- Diodes
- Transistors
- Integrated circuits
- Sensors

Electronics can be divided into two broad areas:

Analog electronics:
It deals with continuously varying signals. Examples include audio amplifiers and temperature-sensing circuits.

Digital electronics:
It deals with discrete signal levels, commonly represented by binary 0 and 1. Examples include processors and digital controllers.

An electronic circuit usually requires a power source, components, and suitable connections.

Understanding basic electronic quantities and components is important before studying advanced subjects such as communication systems, embedded systems, VLSI, and microcontrollers.
          `,
          quiz: [
            {
              question: "What does electronics mainly deal with?",
              options: [
                "Control and use of electrical energy",
                "Study of planets",
                "Design of buildings",
                "Study of chemical reactions only",
              ],
              answer: "Control and use of electrical energy",
            },
            {
              question: "Which is an electronic component?",
              options: ["Resistor", "Hammer", "Screwdriver", "Paper clip"],
              answer: "Resistor",
            },
            {
              question: "Which field deals with continuously varying signals?",
              options: [
                "Analog electronics",
                "Digital electronics",
                "Mechanical engineering",
                "Civil engineering",
              ],
              answer: "Analog electronics",
            },
            {
              question: "Which signals are commonly used in digital electronics?",
              options: [
                "Binary 0 and 1",
                "Only sound waves",
                "Only temperature values",
                "Only mechanical movement",
              ],
              answer: "Binary 0 and 1",
            },
            {
              question: "Where are electronic systems commonly used?",
              options: [
                "Mobile phones and computers",
                "Only wooden furniture",
                "Only paper documents",
                "Only building foundations",
              ],
              answer: "Mobile phones and computers",
            },
          ],
        },

        {
          title: "Voltage, Current, and Resistance",
          content: `
Voltage, current, and resistance are three fundamental quantities in electrical and electronic circuits.

Voltage:
Voltage is the electrical potential difference between two points. It provides the energy per unit charge that can drive current through a circuit.

The unit of voltage is the volt (V).

Current:
Electric current is the rate at which electric charge flows through a conductor.

The unit of current is the ampere (A).

Resistance:
Resistance is the opposition offered to the flow of electric current.

The unit of resistance is the ohm (Ω).

These quantities are related through Ohm's law:

V = I × R

Where:
V = Voltage
I = Current
R = Resistance

Example:

If a 10 Ω resistor is connected across a 20 V supply:

I = V / R

I = 20 / 10

I = 2 A.

This means that 2 amperes of current flow through the resistor under the stated ideal conditions.

Understanding these quantities helps in selecting components and calculating circuit behavior.
          `,
          quiz: [
            {
              question: "What is the unit of voltage?",
              options: ["Volt", "Ampere", "Ohm", "Watt"],
              answer: "Volt",
            },
            {
              question: "What is the unit of electric current?",
              options: ["Ampere", "Volt", "Ohm", "Farad"],
              answer: "Ampere",
            },
            {
              question: "What is the unit of resistance?",
              options: ["Ohm", "Watt", "Volt", "Hertz"],
              answer: "Ohm",
            },
            {
              question: "Which law relates voltage, current, and resistance?",
              options: [
                "Ohm's law",
                "Faraday's law",
                "Newton's law",
                "Kirchhoff's voltage law only",
              ],
              answer: "Ohm's law",
            },
            {
              question: "What current flows through a 10 Ω resistor connected to 20 V?",
              options: ["2 A", "10 A", "20 A", "0.5 A"],
              answer: "2 A",
            },
          ],
        },

        {
          title: "Electrical Power and Energy",
          content: `
Electrical power describes how quickly electrical energy is transferred or converted.

The unit of power is the watt (W).

In a basic DC circuit, electrical power can be calculated using:

P = V × I

Where:
P = Power in watts.
V = Voltage in volts.
I = Current in amperes.

Using Ohm's law, power can also be written as:

P = I²R

P = V²/R

Example:

A circuit uses a 12 V supply and draws 2 A current.

P = 12 × 2

P = 24 W.

Electrical energy is the amount of energy consumed over time.

Energy = Power × Time.

The SI unit of energy is the joule (J). Electrical energy consumption is also commonly measured in kilowatt-hours (kWh).

For example, a 100 W device operating for 2 hours consumes:

100 × 2 = 200 Wh

= 0.2 kWh.

Power ratings are important when selecting resistors, power supplies, and other electronic components.

A component should not be operated beyond its specified electrical and thermal ratings.
          `,
          quiz: [
            {
              question: "What is the SI unit of electrical power?",
              options: ["Watt", "Volt", "Ampere", "Ohm"],
              answer: "Watt",
            },
            {
              question: "Which formula calculates DC electrical power?",
              options: ["P = V × I", "P = V + I", "P = R / I", "P = V - R"],
              answer: "P = V × I",
            },
            {
              question: "What is the power when voltage is 12 V and current is 2 A?",
              options: ["24 W", "12 W", "6 W", "14 W"],
              answer: "24 W",
            },
            {
              question: "Which unit is commonly used for electrical energy consumption?",
              options: ["Kilowatt-hour", "Ohm", "Ampere", "Volt"],
              answer: "Kilowatt-hour",
            },
            {
              question: "Why are component power ratings important?",
              options: [
                "They help prevent operation beyond safe electrical and thermal limits",
                "They determine the component's color",
                "They replace circuit diagrams",
                "They eliminate resistance",
              ],
              answer:
                "They help prevent operation beyond safe electrical and thermal limits",
            },
          ],
        },

        {
          title: "Types of Electronic Components",
          content: `
Electronic components are the basic building blocks of electronic circuits.

They are commonly classified as passive and active components.

Passive components:
These components do not provide power gain.

Examples include:

Resistors:
Limit current and produce voltage drops.

Capacitors:
Store electrical energy in an electric field.

Inductors:
Store energy in a magnetic field.

Active components:
These components can control current or provide amplification when used with suitable power and circuit connections.

Examples include:

Diodes:
Allow current to flow more easily in one direction under normal forward-bias conditions.

Transistors:
Can act as electronic switches or amplifiers.

Integrated circuits:
Contain multiple electronic components fabricated together on a semiconductor chip.

Components are selected based on voltage, current, power, frequency, tolerance, and operating conditions.

Reading component markings and datasheets helps engineers choose suitable parts for a circuit.
          `,
          quiz: [
            {
              question: "Which is a passive electronic component?",
              options: ["Resistor", "Transistor", "Operational amplifier", "Integrated circuit"],
              answer: "Resistor",
            },
            {
              question: "Which component stores energy in an electric field?",
              options: ["Capacitor", "Inductor", "Diode", "Fuse"],
              answer: "Capacitor",
            },
            {
              question: "Which component stores energy in a magnetic field?",
              options: ["Inductor", "Resistor", "Diode", "LED"],
              answer: "Inductor",
            },
            {
              question: "Which component can work as an electronic switch?",
              options: ["Transistor", "Resistor", "Capacitor", "Connector"],
              answer: "Transistor",
            },
            {
              question: "What is an integrated circuit?",
              options: [
                "A chip containing multiple electronic circuit elements",
                "A single long electrical wire",
                "A mechanical switch only",
                "A type of battery",
              ],
              answer:
                "A chip containing multiple electronic circuit elements",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Basic Electronic Components",
      description:
        "Study resistors, capacitors, inductors, diodes, and transistors.",
      lessons: [
        {
          title: "Resistors and Resistance",
          content: `
A resistor is a passive electronic component that limits or controls current in a circuit.

Resistance is measured in ohms (Ω).

Resistors are used for:

- Limiting current through LEDs.
- Dividing voltage.
- Setting transistor operating conditions.
- Providing pull-up and pull-down connections.
- Controlling signal levels.

Resistors are available in different resistance values and power ratings.

For example, a 1 kΩ resistor has a resistance of 1000 ohms.

Resistors can be connected in series or parallel.

For series resistors:

Rtotal = R1 + R2 + R3.

Example:

10 Ω + 20 Ω = 30 Ω.

For two resistors in parallel:

1/Rtotal = 1/R1 + 1/R2.

For two parallel resistors:

Rtotal = (R1 × R2) / (R1 + R2).

Resistors also have tolerance, which indicates how much their actual resistance may vary from the stated value.

Common resistor tolerances include 1%, 5%, and 10%.

The resistor's power rating should be selected according to the expected circuit power dissipation.
          `,
          quiz: [
            {
              question: "What is the primary function of a resistor?",
              options: [
                "Limit or control current",
                "Generate wireless signals",
                "Store data permanently",
                "Convert light into sound",
              ],
              answer: "Limit or control current",
            },
            {
              question: "What is the resistance of a 1 kΩ resistor in ohms?",
              options: ["1000 Ω", "100 Ω", "10 Ω", "10000 Ω"],
              answer: "1000 Ω",
            },
            {
              question: "How are resistors combined in series?",
              options: [
                "Their resistance values are added",
                "Their resistance values are multiplied only",
                "Their resistance values are divided by voltage",
                "Their resistance values are always equal",
              ],
              answer: "Their resistance values are added",
            },
            {
              question: "What is the total resistance of 10 Ω and 20 Ω in series?",
              options: ["30 Ω", "10 Ω", "20 Ω", "200 Ω"],
              answer: "30 Ω",
            },
            {
              question: "What does resistor tolerance indicate?",
              options: [
                "Possible variation from its stated resistance",
                "Its physical length only",
                "Its operating frequency only",
                "Its manufacturing color",
              ],
              answer: "Possible variation from its stated resistance",
            },
          ],
        },

        {
          title: "Capacitors and Capacitance",
          content: `
A capacitor is a passive electronic component that stores electrical energy in an electric field.

It consists of two conductive plates separated by an insulating material called a dielectric.

Capacitance is the ability to store electric charge for a given voltage.

The unit of capacitance is the farad (F).

Common capacitor units include:

- Microfarad (µF)
- Nanofarad (nF)
- Picofarad (pF)

Capacitors are used in:

- Power supply filtering.
- Signal coupling.
- Timing circuits.
- Noise reduction.
- Energy storage.
- Oscillator circuits.

Different capacitor types include ceramic, electrolytic, film, and tantalum capacitors.

Electrolytic capacitors are generally polarized, so their positive and negative terminals must be connected correctly.

Ceramic capacitors are commonly non-polarized.

In a DC circuit, an ideal capacitor initially allows charging current, but after reaching steady state it behaves like an open circuit.

In AC circuits, capacitors provide frequency-dependent opposition called capacitive reactance.

The choice of capacitor depends on capacitance, voltage rating, tolerance, temperature, and frequency requirements.
          `,
          quiz: [
            {
              question: "What does a capacitor store?",
              options: [
                "Electrical energy in an electric field",
                "Mechanical energy in a spring",
                "Sound energy in air",
                "Magnetic data on a disk",
              ],
              answer: "Electrical energy in an electric field",
            },
            {
              question: "What is the unit of capacitance?",
              options: ["Farad", "Ohm", "Volt", "Ampere"],
              answer: "Farad",
            },
            {
              question: "Which capacitor type is generally polarized?",
              options: [
                "Electrolytic capacitor",
                "Ceramic capacitor",
                "Film capacitor",
                "Paper capacitor",
              ],
              answer: "Electrolytic capacitor",
            },
            {
              question: "What is a common use of capacitors in power supplies?",
              options: [
                "Filtering voltage variations",
                "Generating mechanical rotation",
                "Replacing all resistors",
                "Measuring network bandwidth",
              ],
              answer: "Filtering voltage variations",
            },
            {
              question: "How does an ideal capacitor behave in steady-state DC?",
              options: [
                "Like an open circuit",
                "Like a short circuit permanently",
                "Like a battery",
                "Like a transformer",
              ],
              answer: "Like an open circuit",
            },
          ],
        },

        {
          title: "Inductors and Magnetic Fields",
          content: `
An inductor is a passive electronic component that stores energy in a magnetic field when current flows through it.

It is usually made from a coil of wire and may contain an air, iron, or ferrite core.

Inductance is measured in henries (H).

Common inductor applications include:

- Power supply converters.
- Filters.
- Oscillator circuits.
- Radio-frequency circuits.
- Energy storage in switching regulators.

An inductor opposes changes in current.

When current through an inductor changes, a voltage is induced across it.

The ideal inductor voltage relationship is:

V = L × (di/dt)

Where:
L is inductance.
di/dt is the rate of change of current.

In a DC circuit at steady state, an ideal inductor behaves like a short circuit.

In AC circuits, an inductor provides inductive reactance.

Inductors and capacitors are often combined to create filters and resonant circuits.

The inductor's current rating, resistance, core type, and operating frequency are important when selecting it for a circuit.
          `,
          quiz: [
            {
              question: "What does an inductor store?",
              options: [
                "Energy in a magnetic field",
                "Energy in an electric field",
                "Sound energy",
                "Mechanical energy only",
              ],
              answer: "Energy in a magnetic field",
            },
            {
              question: "What is the unit of inductance?",
              options: ["Henry", "Farad", "Ohm", "Watt"],
              answer: "Henry",
            },
            {
              question: "What does an inductor oppose?",
              options: [
                "Changes in current",
                "Changes in component color",
                "Changes in temperature only",
                "Changes in physical length",
              ],
              answer: "Changes in current",
            },
            {
              question: "How does an ideal inductor behave in steady-state DC?",
              options: [
                "Like a short circuit",
                "Like an open circuit",
                "Like a capacitor",
                "Like a diode",
              ],
              answer: "Like a short circuit",
            },
            {
              question: "Where are inductors commonly used?",
              options: [
                "Switching power supplies and filters",
                "Keyboard layouts",
                "Paper printing",
                "Mechanical keyboards only",
              ],
              answer: "Switching power supplies and filters",
            },
          ],
        },

        {
          title: "Diodes and Their Applications",
          content: `
A diode is a semiconductor component that allows current to flow more easily in one direction than the other.

It has two terminals:

- Anode.
- Cathode.

A diode is forward biased when the anode is at a higher potential than the cathode, allowing current to flow when the applied voltage is sufficient.

A diode is reverse biased when the polarity is reversed. It normally blocks current, apart from a small leakage current.

Important diode applications include:

Rectification:
Converting AC into pulsating DC.

Protection:
Preventing damage from incorrect polarity or voltage transients in suitable circuits.

Signal processing:
Detecting or shaping electrical signals.

Voltage regulation:
Zener diodes can maintain an approximately controlled voltage under specified operating conditions.

LEDs:
Light-emitting diodes produce light when forward biased.

A diode must be selected according to its forward current, reverse voltage, power rating, switching speed, and application.

A rectifier circuit may use one diode for half-wave rectification or four diodes in a bridge rectifier.
          `,
          quiz: [
            {
              question: "How many terminals does a basic diode have?",
              options: ["Two", "One", "Three", "Four"],
              answer: "Two",
            },
            {
              question: "What are the two diode terminals?",
              options: [
                "Anode and cathode",
                "Source and drain",
                "Gate and base",
                "Collector and emitter",
              ],
              answer: "Anode and cathode",
            },
            {
              question: "When is a diode forward biased?",
              options: [
                "When the anode is at a higher potential than the cathode",
                "When the cathode is always disconnected",
                "When both terminals have no voltage",
                "When current is forced backward",
              ],
              answer:
                "When the anode is at a higher potential than the cathode",
            },
            {
              question: "What is a common application of a rectifier diode?",
              options: [
                "Converting AC into pulsating DC",
                "Storing files",
                "Amplifying sound mechanically",
                "Generating a clock calendar",
              ],
              answer: "Converting AC into pulsating DC",
            },
            {
              question: "What does an LED produce?",
              options: ["Light", "Magnetic storage", "Mechanical pressure", "Sound only"],
              answer: "Light",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Semiconductor Devices and Circuit Laws",
      description:
        "Understand transistors, semiconductor behavior, circuit laws, and basic signal concepts.",
      lessons: [
        {
          title: "Transistors and Their Types",
          content: `
A transistor is a semiconductor device used to control current.

Transistors are important in amplification, switching, signal processing, and digital circuits.

Two common transistor families are:

Bipolar Junction Transistors (BJTs):
They are current-controlled devices in their basic operating description.

A BJT has three terminals:
- Base.
- Collector.
- Emitter.

The two main BJT types are NPN and PNP.

Field Effect Transistors (FETs):
They use an electric field to control current through a channel.

A common FET is the MOSFET.

A MOSFET has three main terminals in a basic description:
- Gate.
- Drain.
- Source.

Transistors can operate as switches or amplifiers.

In switching applications, a transistor is controlled between suitable OFF and ON operating regions.

In amplifier applications, it is biased in an appropriate operating region to reproduce an amplified signal.

Transistors are widely used in processors, power supplies, audio systems, motor controllers, and communication circuits.
          `,
          quiz: [
            {
              question: "What is a major use of a transistor?",
              options: [
                "Switching and amplification",
                "Storing mechanical pressure",
                "Measuring physical length",
                "Printing documents",
              ],
              answer: "Switching and amplification",
            },
            {
              question: "How many main terminals does a basic BJT have?",
              options: ["Three", "Two", "Four", "Five"],
              answer: "Three",
            },
            {
              question: "Which are the terminals of a BJT?",
              options: [
                "Base, collector, emitter",
                "Gate, drain, source",
                "Anode, cathode, gate",
                "Input, output, ground",
              ],
              answer: "Base, collector, emitter",
            },
            {
              question: "Which is a common type of field-effect transistor?",
              options: ["MOSFET", "LED", "Zener diode", "Photodiode"],
              answer: "MOSFET",
            },
            {
              question: "What controls the channel in a MOSFET?",
              options: [
                "An electric field controlled by the gate",
                "A mechanical spring",
                "A magnetic disk",
                "A sound wave",
              ],
              answer: "An electric field controlled by the gate",
            },
          ],
        },

        {
          title: "NPN and PNP Transistors",
          content: `
NPN and PNP are the two main types of bipolar junction transistors.

An NPN transistor consists of a P-type semiconductor region between two N-type regions.

A PNP transistor consists of an N-type region between two P-type regions.

Both devices have three terminals:

Base.
Collector.
Emitter.

In a typical NPN common-emitter switching circuit, a positive base voltage relative to the emitter can turn the transistor ON when sufficient base current is supplied.

In a typical PNP circuit, the base is driven to a lower voltage than the emitter to turn the transistor ON.

The direction of conventional current and required control polarity differ between NPN and PNP circuits.

A transistor must be operated within its voltage, current, power, and temperature ratings.

A base resistor is commonly used with a BJT switching circuit to limit base current.

NPN and PNP transistors are used in switching circuits, complementary amplifier stages, and control applications.
          `,
          quiz: [
            {
              question: "What are the two main BJT types?",
              options: [
                "NPN and PNP",
                "NMOS and CMOS",
                "LED and LCD",
                "AC and DC",
              ],
              answer: "NPN and PNP",
            },
            {
              question: "Which semiconductor structure describes an NPN transistor?",
              options: [
                "N-type, P-type, N-type",
                "P-type, N-type, P-type",
                "N-type, N-type, N-type",
                "P-type, P-type, P-type",
              ],
              answer: "N-type, P-type, N-type",
            },
            {
              question: "In a typical NPN common-emitter circuit, what can turn the transistor ON?",
              options: [
                "A suitable positive base voltage relative to the emitter",
                "A negative supply on every terminal",
                "Disconnecting the base permanently",
                "Applying light to the collector only",
              ],
              answer:
                "A suitable positive base voltage relative to the emitter",
            },
            {
              question: "Why is a base resistor commonly used?",
              options: [
                "To limit base current",
                "To increase the transistor's physical size",
                "To replace the power supply",
                "To convert DC into sound",
              ],
              answer: "To limit base current",
            },
            {
              question: "What should be checked when selecting a transistor?",
              options: [
                "Voltage, current, power, and temperature ratings",
                "Only its package color",
                "Only its printed logo",
                "Only the length of its pins",
              ],
              answer:
                "Voltage, current, power, and temperature ratings",
            },
          ],
        },

        {
          title: "Kirchhoff's Circuit Laws",
          content: `
Kirchhoff's laws are fundamental tools for analyzing electrical circuits.

There are two main laws.

Kirchhoff's Current Law (KCL):

The total current entering a junction equals the total current leaving it.

This is based on conservation of electric charge.

For example:

If 5 A enters a junction and two currents leave it, with one equal to 2 A, the other is:

5 A - 2 A = 3 A.

Kirchhoff's Voltage Law (KVL):

The algebraic sum of all voltage rises and drops around a closed loop is zero.

This is based on conservation of energy.

For example, a 12 V source connected in series with two components having voltage drops of 5 V and 7 V satisfies:

12 - 5 - 7 = 0.

KCL is used to analyze currents at circuit nodes.

KVL is used to analyze voltages around closed loops.

These laws are used in DC circuits, AC circuit analysis, and more advanced electrical engineering calculations.
          `,
          quiz: [
            {
              question: "What does Kirchhoff's Current Law state?",
              options: [
                "Current entering a junction equals current leaving it",
                "Voltage is always zero",
                "Resistance is equal to power",
                "Frequency is equal to current",
              ],
              answer:
                "Current entering a junction equals current leaving it",
            },
            {
              question: "Which physical principle supports KCL?",
              options: [
                "Conservation of electric charge",
                "Conservation of mass only",
                "Newton's third law",
                "Conservation of angular momentum",
              ],
              answer: "Conservation of electric charge",
            },
            {
              question: "What does Kirchhoff's Voltage Law apply to?",
              options: [
                "Voltage around a closed loop",
                "Current at a single junction only",
                "Magnetic field strength only",
                "Resistance color codes",
              ],
              answer: "Voltage around a closed loop",
            },
            {
              question: "A 5 A current enters a junction. If 2 A leaves through one branch, how much leaves through the other branch?",
              options: ["3 A", "2 A", "5 A", "7 A"],
              answer: "3 A",
            },
            {
              question: "A 12 V source has voltage drops of 5 V and 7 V. What is their total?",
              options: ["12 V", "10 V", "14 V", "2 V"],
              answer: "12 V",
            },
          ],
        },

        {
          title: "Series and Parallel Circuits",
          content: `
Electronic components can be connected in series, parallel, or a combination of both.

Series circuits:
Components are connected along a single current path.

The same current flows through each component in an ideal series circuit.

The total resistance is:

Rtotal = R1 + R2 + R3.

The supply voltage is divided across the components according to their resistance values.

Parallel circuits:
Components are connected across the same two nodes.

The voltage across each parallel branch is the same.

For resistors in parallel:

1/Rtotal = 1/R1 + 1/R2 + 1/R3.

The total current divides among the branches.

For two resistors in parallel:

Rtotal = (R1 × R2)/(R1 + R2).

A mixed circuit contains both series and parallel combinations.

To analyze a mixed circuit, simplify one section at a time.

Understanding series and parallel connections helps engineers design voltage dividers, current paths, filters, and power distribution circuits.
          `,
          quiz: [
            {
              question: "What is common to all components in an ideal series circuit?",
              options: [
                "The same current",
                "The same resistance",
                "The same power",
                "The same physical size",
              ],
              answer: "The same current",
            },
            {
              question: "What is common across parallel branches?",
              options: [
                "The same voltage",
                "The same current in every branch",
                "The same resistance",
                "The same power rating",
              ],
              answer: "The same voltage",
            },
            {
              question: "How is total resistance calculated for series resistors?",
              options: [
                "By adding their resistance values",
                "By multiplying all values",
                "By subtracting each value",
                "By dividing by voltage",
              ],
              answer: "By adding their resistance values",
            },
            {
              question: "What happens to current in parallel branches?",
              options: [
                "It divides among the branches",
                "It becomes zero in every branch",
                "It must be identical in all branches",
                "It changes into voltage",
              ],
              answer: "It divides among the branches",
            },
            {
              question: "What is a mixed circuit?",
              options: [
                "A circuit containing series and parallel connections",
                "A circuit containing only batteries",
                "A circuit without components",
                "A circuit containing only one resistor",
              ],
              answer:
                "A circuit containing series and parallel connections",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Electronics",
      description:
        "Explore sensors, power supplies, circuit testing, and a practical electronics project.",
      lessons: [
        {
          title: "Sensors and Their Applications",
          content: `
A sensor is an electronic device that detects a physical quantity and converts it into a usable electrical signal.

Sensors allow electronic systems to interact with the physical environment.

Common examples include:

Temperature sensors:
Measure temperature.

Light sensors:
Detect light intensity.

Pressure sensors:
Measure pressure.

Proximity sensors:
Detect nearby objects.

Humidity sensors:
Measure moisture in the air.

Motion sensors:
Detect movement.

Sensors may produce analog or digital outputs.

An analog sensor provides a continuously varying output voltage or current.

A digital sensor may provide discrete logic signals or digital data through an interface such as I2C, SPI, or UART.

Sensor applications include:

- Automatic lighting.
- Temperature monitoring.
- Smart agriculture.
- Industrial automation.
- Medical instruments.
- Robotics.
- Environmental monitoring.

A sensor system may also require signal conditioning, filtering, calibration, and an analog-to-digital converter.

The selected sensor should match the measurement range, accuracy, response time, interface, and environmental conditions.
          `,
          quiz: [
            {
              question: "What is the main function of a sensor?",
              options: [
                "Detect a physical quantity and produce a usable signal",
                "Store files permanently",
                "Generate mechanical force only",
                "Replace all processors",
              ],
              answer:
                "Detect a physical quantity and produce a usable signal",
            },
            {
              question: "Which sensor measures temperature?",
              options: [
                "Temperature sensor",
                "Light sensor",
                "Pressure sensor",
                "Proximity sensor",
              ],
              answer: "Temperature sensor",
            },
            {
              question: "Which sensor detects light intensity?",
              options: [
                "Light sensor",
                "Humidity sensor",
                "Pressure sensor",
                "Motion sensor",
              ],
              answer: "Light sensor",
            },
            {
              question: "Which is a common digital sensor communication interface?",
              options: ["I2C", "HDMI", "VGA", "DisplayPort"],
              answer: "I2C",
            },
            {
              question: "Why may signal conditioning be required?",
              options: [
                "To prepare a sensor signal for further processing",
                "To increase the sensor's physical size",
                "To remove all electrical connections",
                "To replace the measured quantity",
              ],
              answer: "To prepare a sensor signal for further processing",
            },
          ],
        },

        {
          title: "Power Supplies and Voltage Regulation",
          content: `
An electronic circuit requires a suitable power source to operate.

A power supply provides electrical energy at the voltage and current required by a circuit.

Common power supply types include:

DC power supplies:
Provide direct current at a particular voltage.

AC power supplies:
Provide alternating current.

Regulated power supplies:
Maintain an output voltage within specified limits as input voltage or load changes.

A basic DC power supply may contain:

1. Transformer or input stage.
2. Rectifier.
3. Filter.
4. Voltage regulator.

A rectifier converts AC into pulsating DC.

A filter, often using capacitors, reduces variations in the rectified output.

A regulator helps maintain a more stable output voltage.

Voltage regulators can be linear or switching types.

Linear regulators are relatively simple but may dissipate significant power as heat.

Switching regulators can provide higher efficiency in many applications but require more complex circuit design.

Power supply selection should consider output voltage, current capacity, ripple, regulation, efficiency, and protection features.
          `,
          quiz: [
            {
              question: "What is the purpose of a power supply?",
              options: [
                "Provide electrical energy to a circuit",
                "Store source code",
                "Measure physical distance",
                "Generate sound only",
              ],
              answer: "Provide electrical energy to a circuit",
            },
            {
              question: "What does a rectifier do?",
              options: [
                "Converts AC into pulsating DC",
                "Converts sound into light",
                "Stores electrical data",
                "Measures temperature",
              ],
              answer: "Converts AC into pulsating DC",
            },
            {
              question: "What is a common function of a filter capacitor?",
              options: [
                "Reduce variations in rectified voltage",
                "Increase the frequency of the processor",
                "Replace the transformer",
                "Generate a clock signal in every circuit",
              ],
              answer: "Reduce variations in rectified voltage",
            },
            {
              question: "What does a voltage regulator help maintain?",
              options: [
                "A stable output voltage",
                "A fixed resistor color",
                "A constant circuit temperature in all conditions",
                "A particular wire length",
              ],
              answer: "A stable output voltage",
            },
            {
              question: "Which is a key factor when selecting a power supply?",
              options: [
                "Required output voltage and current",
                "Enclosure color only",
                "Brand name only",
                "Cable length only",
              ],
              answer: "Required output voltage and current",
            },
          ],
        },

        {
          title: "Basic Electronic Circuit Testing",
          content: `
Testing is an important part of electronic circuit development and troubleshooting.

A multimeter is a common instrument used to measure voltage, current, and resistance.

Voltage measurement:
A voltmeter or multimeter in voltage mode is connected in parallel with the component or points being measured.

Current measurement:
An ammeter or multimeter in current mode is placed in series with the circuit path, following the instrument's connection and rating requirements.

Resistance measurement:
Resistance should normally be measured with circuit power removed and the component isolated when necessary.

An oscilloscope displays electrical signals as waveforms over time.

It can be used to observe:
- Signal amplitude.
- Frequency.
- Period.
- Noise.
- Distortion.
- Timing relationships.

A function generator produces test signals such as sine, square, and triangle waves.

A systematic troubleshooting process includes:

1. Inspect the circuit visually.
2. Check the power supply.
3. Verify component orientation.
4. Measure important voltages.
5. Compare readings with expected values.
6. Inspect signal waveforms if needed.
7. Identify and correct the fault.
8. Test again.

Use instruments within their specified ratings and follow proper measurement procedures.
          `,
          quiz: [
            {
              question: "Which instrument commonly measures voltage, current, and resistance?",
              options: [
                "Multimeter",
                "Oscilloscope only",
                "Function generator",
                "Power amplifier",
              ],
              answer: "Multimeter",
            },
            {
              question: "How is voltage measured across a component?",
              options: [
                "By connecting the meter in parallel",
                "By connecting the meter in series only",
                "By disconnecting the meter",
                "By connecting both probes to earth only",
              ],
              answer: "By connecting the meter in parallel",
            },
            {
              question: "How is current normally measured in a circuit?",
              options: [
                "By placing the meter in series",
                "By placing the meter in parallel across the supply",
                "By measuring resistance only",
                "By using a temperature sensor",
              ],
              answer: "By placing the meter in series",
            },
            {
              question: "What does an oscilloscope display?",
              options: [
                "Electrical signals as waveforms over time",
                "Only resistance color codes",
                "Only stored files",
                "Only component prices",
              ],
              answer: "Electrical signals as waveforms over time",
            },
            {
              question: "What should normally be done before measuring resistance?",
              options: [
                "Remove power from the circuit",
                "Increase the supply voltage",
                "Short the power supply",
                "Connect the meter across a live high-voltage source",
              ],
              answer: "Remove power from the circuit",
            },
          ],
        },

        {
          title: "Final Project: Build a Basic Electronic Circuit",
          content: `
Project: Design and test a basic sensor-based electronic circuit.

The objective is to understand how electronic components work together.

Suggested project: Automatic LED indicator using a light sensor.

Required components:

- Light-dependent resistor (LDR).
- Fixed resistor.
- LED.
- Suitable transistor or comparator circuit.
- Appropriate DC power supply.
- Breadboard.
- Connecting wires.

Project stages:

1. Understand the circuit requirement.

The circuit should respond to changes in surrounding light.

2. Study the LDR.

An LDR changes its resistance according to the amount of light falling on it.

3. Design a voltage divider.

Combine the LDR with a fixed resistor to produce a voltage that changes with light intensity.

4. Select a switching stage.

A suitable transistor or comparator can control the LED based on the sensor signal.

5. Select the LED current-limiting resistor.

Calculate a suitable resistor value using the supply voltage, LED forward voltage, and desired current.

6. Assemble the circuit.

Connect the components on a breadboard according to the circuit diagram and component polarity.

7. Test the circuit.

Observe the output under different light conditions.

8. Record measurements.

Record sensor voltage and LED behavior under different conditions.

9. Troubleshoot.

Check power connections, component orientation, resistor values, and transistor connections if the circuit does not behave as expected.

10. Document the project.

Include the circuit diagram, component list, calculations, test observations, and conclusion.

The project introduces sensor interfacing, voltage dividers, transistor switching, and practical circuit testing.

Use a low-voltage, current-limited supply and follow component ratings while assembling the circuit.
          `,
          quiz: [
            {
              question: "What is the main objective of the final project?",
              options: [
                "Build and test a sensor-based electronic circuit",
                "Create a database server",
                "Design a computer network",
                "Develop a mobile application",
              ],
              answer: "Build and test a sensor-based electronic circuit",
            },
            {
              question: "What does an LDR respond to?",
              options: [
                "Light intensity",
                "Sound frequency",
                "Magnetic storage",
                "Mechanical pressure only",
              ],
              answer: "Light intensity",
            },
            {
              question: "What is the purpose of a voltage divider in the project?",
              options: [
                "Produce a changing voltage from the sensor and resistor",
                "Store program instructions",
                "Generate mechanical motion",
                "Replace the power supply",
              ],
              answer:
                "Produce a changing voltage from the sensor and resistor",
            },
            {
              question: "Why is a current-limiting resistor used with an LED?",
              options: [
                "To control LED current",
                "To increase the LED's physical size",
                "To convert light into sound",
                "To remove the need for a power source",
              ],
              answer: "To control LED current",
            },
            {
              question: "What should be included in the project documentation?",
              options: [
                "Circuit diagram, components, calculations, and test results",
                "Only the project title",
                "Only the component packaging",
                "Only the power supply brand",
              ],
              answer:
                "Circuit diagram, components, calculations, and test results",
            },
          ],
        },
      ],
    },
  ],
};

export default electronicsBasicCourse;
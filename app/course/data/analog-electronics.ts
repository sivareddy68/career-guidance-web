const analogElectronicsCourse = {
  title: "Analog Electronics",
  description:
    "Learn analog signals, semiconductor devices, diodes, transistors, amplifiers, operational amplifiers, filters, oscillators, and practical analog circuit design.",
  weeks: [
    {
      title: "Week 1: Analog Electronics Foundations",
      lessons: [
        {
          title: "Introduction to Analog Electronics",
          content: `
Analog electronics deals with circuits that process continuously varying electrical signals.

An analog signal can take a range of values over time. Examples include sound signals from a microphone, temperature sensor outputs, and changing light intensity measurements.

Analog circuits are important in communication systems, audio equipment, sensor interfaces, and measurement instruments.

Main characteristics of analog signals:

1. Continuous variation: The signal can change smoothly over time.
2. Amplitude: Represents the signal's magnitude.
3. Frequency: Describes how many cycles occur per second.
4. Phase: Describes the relative position of a waveform in time.
5. Noise: Unwanted electrical disturbances that affect the signal.

Common analog electronic components include resistors, capacitors, inductors, diodes, transistors, and operational amplifiers.

An analog circuit may amplify a weak sensor signal, filter unwanted frequencies, or convert a signal into a suitable form for further processing.

For example, a microphone produces a small electrical signal. An amplifier increases its strength so that another circuit can process it.
          `,
          quiz: [
            {
              question: "What does analog electronics mainly deal with?",
              options: [
                "Continuously varying electrical signals",
                "Only binary data storage",
                "Only digital file management",
                "Wireless network configuration"
              ],
              answer: "Continuously varying electrical signals"
            },
            {
              question: "What does signal amplitude represent?",
              options: [
                "Signal magnitude",
                "Number of circuit components",
                "Battery manufacturing date",
                "Program execution time"
              ],
              answer: "Signal magnitude"
            },
            {
              question: "What is frequency measured in?",
              options: ["Hertz", "Ohms", "Volts", "Farads"],
              answer: "Hertz"
            },
            {
              question: "Which is an example of an analog signal source?",
              options: [
                "Microphone output",
                "Binary memory address",
                "Digital file name",
                "Program instruction"
              ],
              answer: "Microphone output"
            },
            {
              question: "What is electrical noise?",
              options: [
                "Unwanted disturbance in a signal",
                "A type of permanent memory",
                "A required circuit supply",
                "A transistor terminal"
              ],
              answer: "Unwanted disturbance in a signal"
            }
          ]
        },
        {
          title: "Analog Signals and Waveforms",
          content: `
An analog waveform describes how an electrical signal changes with time.

Common waveforms include sine waves, square waves, triangular waves, and sawtooth waves.

A sine wave is widely used in AC circuits and communication systems. It is described by its amplitude, frequency, and phase.

Important waveform terms:

1. Peak value: The maximum magnitude measured from the reference level.
2. Peak-to-peak value: Difference between the maximum and minimum values.
3. RMS value: Effective value of an AC signal for calculating equivalent heating effect in a resistor.
4. Time period: Time taken to complete one cycle.
5. Frequency: Number of cycles completed in one second.

Frequency and time period are inversely related. A signal with a shorter period has a higher frequency.

Waveforms help engineers understand circuit behavior. For example, an oscilloscope displays voltage against time and allows the waveform to be examined.

When analyzing a signal, engineers also consider distortion, noise, and changes in amplitude or frequency.
          `,
          quiz: [
            {
              question: "Which waveform is commonly used to represent AC signals?",
              options: ["Sine wave", "Random text", "Binary address", "Memory table"],
              answer: "Sine wave"
            },
            {
              question: "What is the time period of a waveform?",
              options: [
                "Time taken to complete one cycle",
                "Maximum voltage of the circuit",
                "Number of circuit resistors",
                "Current flowing through a diode"
              ],
              answer: "Time taken to complete one cycle"
            },
            {
              question: "What is the relationship between frequency and time period?",
              options: [
                "They are inversely related",
                "They are always equal",
                "Both are measured in volts",
                "They are unrelated quantities"
              ],
              answer: "They are inversely related"
            },
            {
              question: "What does peak-to-peak voltage represent?",
              options: [
                "Difference between maximum and minimum voltage",
                "Average circuit resistance",
                "Total number of waveform cycles",
                "Power consumed by a resistor"
              ],
              answer: "Difference between maximum and minimum voltage"
            },
            {
              question: "Which instrument displays voltage waveforms over time?",
              options: ["Oscilloscope", "Ohmmeter only", "Soldering iron", "Power switch"],
              answer: "Oscilloscope"
            }
          ]
        },
        {
          title: "Resistors, Capacitors, and Inductors",
          content: `
Resistors, capacitors, and inductors are basic passive components used in analog circuits.

A resistor opposes the flow of electric current. Its resistance is measured in ohms. Resistors are used for current limiting, voltage division, and biasing.

A capacitor stores energy in an electric field. Its capacitance is measured in farads. Capacitors are used for filtering, coupling, decoupling, and temporary energy storage.

An inductor stores energy in a magnetic field when current flows through it. Its inductance is measured in henries. Inductors are commonly used in filters and power-conversion circuits.

Their behavior depends on signal frequency:

- A resistor ideally has the same resistance regardless of frequency.
- A capacitor offers lower reactance at higher frequencies.
- An inductor offers higher reactance at higher frequencies.

These components are often combined to create filters, timing circuits, and signal-conditioning networks.

Understanding passive components is essential before studying amplifiers and other active analog circuits.
          `,
          quiz: [
            {
              question: "What does a resistor oppose?",
              options: [
                "Flow of electric current",
                "Storage of magnetic energy",
                "Light emission",
                "Program execution"
              ],
              answer: "Flow of electric current"
            },
            {
              question: "What is the unit of capacitance?",
              options: ["Farad", "Ohm", "Henry", "Watt"],
              answer: "Farad"
            },
            {
              question: "Where does an ideal inductor store energy?",
              options: [
                "Magnetic field",
                "Electric field",
                "Mechanical spring",
                "Permanent memory"
              ],
              answer: "Magnetic field"
            },
            {
              question: "What happens to capacitive reactance as frequency increases?",
              options: [
                "It decreases",
                "It increases",
                "It always becomes infinite",
                "It remains unchanged"
              ],
              answer: "It decreases"
            },
            {
              question: "Which passive component is commonly used for current limiting?",
              options: ["Resistor", "Capacitor", "Inductor", "Transformer core"],
              answer: "Resistor"
            }
          ]
        },
        {
          title: "Voltage, Current, Power, and Impedance",
          content: `
Voltage is the electrical potential difference between two points. It is measured in volts.

Current is the rate of flow of electric charge and is measured in amperes.

Electrical power represents the rate at which electrical energy is transferred or consumed. It is measured in watts.

In a simple resistive circuit, Ohm's law relates voltage, current, and resistance:

V = IR

Electrical power can be calculated using:

P = VI

In AC circuits, voltage and current may not always be in phase. This behavior is related to capacitance and inductance.

Impedance represents the total opposition to AC current. It includes resistance and reactance and is measured in ohms.

Impedance is important in filters, amplifiers, communication circuits, and signal matching.

When analyzing analog circuits, engineers consider both the magnitude and phase relationship of voltage and current.
          `,
          quiz: [
            {
              question: "What is the SI unit of voltage?",
              options: ["Volt", "Ampere", "Ohm", "Watt"],
              answer: "Volt"
            },
            {
              question: "What is the SI unit of electric current?",
              options: ["Ampere", "Farad", "Henry", "Joule"],
              answer: "Ampere"
            },
            {
              question: "Which equation represents Ohm's law?",
              options: ["V = IR", "P = I/R", "R = VI", "I = VR"],
              answer: "V = IR"
            },
            {
              question: "What does impedance represent?",
              options: [
                "Total opposition to AC current",
                "Only the stored electrical charge",
                "The number of circuit terminals",
                "The physical length of a wire"
              ],
              answer: "Total opposition to AC current"
            },
            {
              question: "What is the unit of electrical power?",
              options: ["Watt", "Volt", "Ohm", "Farad"],
              answer: "Watt"
            }
          ]
        }
      ]
    },
    {
      title: "Week 2: Semiconductor Devices",
      lessons: [
        {
          title: "Semiconductor Fundamentals",
          content: `
Semiconductors are materials whose electrical conductivity lies between that of conductors and insulators.

Silicon is the most widely used semiconductor material in electronic devices.

Pure semiconductor material is called an intrinsic semiconductor. Its conductivity can be changed by adding controlled impurities, a process known as doping.

Doping produces two main types:

1. N-type semiconductor: Contains donor impurities that provide additional free electrons.
2. P-type semiconductor: Contains acceptor impurities that create holes as majority charge carriers.

Electrons and holes are called charge carriers because they participate in electrical conduction.

A PN junction is formed by joining P-type and N-type semiconductor regions. It is the basic structure of a semiconductor diode.

Semiconductor principles are used in diodes, transistors, integrated circuits, and many other electronic components.

Understanding charge carriers and PN junctions helps explain how semiconductor devices control current.
          `,
          quiz: [
            {
              question: "Which material is commonly used in semiconductor devices?",
              options: ["Silicon", "Wood", "Rubber", "Glass"],
              answer: "Silicon"
            },
            {
              question: "What is doping?",
              options: [
                "Adding controlled impurities to a semiconductor",
                "Removing all charge carriers",
                "Connecting two batteries",
                "Changing a circuit's physical shape"
              ],
              answer: "Adding controlled impurities to a semiconductor"
            },
            {
              question: "What is the majority charge carrier in N-type material?",
              options: ["Electrons", "Holes", "Neutrons", "Photons"],
              answer: "Electrons"
            },
            {
              question: "What is the majority charge carrier in P-type material?",
              options: ["Holes", "Electrons", "Neutrons", "Protons"],
              answer: "Holes"
            },
            {
              question: "What is formed by joining P-type and N-type regions?",
              options: ["PN junction", "Magnetic core", "Capacitor plate", "Resistor network"],
              answer: "PN junction"
            }
          ]
        },
        {
          title: "PN Junction Diodes",
          content: `
A PN junction diode is a semiconductor device that allows current to flow easily in one direction under normal operating conditions.

It contains a P-type region called the anode and an N-type region called the cathode.

When a diode is forward biased, the anode is connected to a higher potential than the cathode. The depletion region becomes narrower and current can flow.

When a diode is reverse biased, the depletion region becomes wider and only a small leakage current normally flows, until breakdown conditions are reached.

Important diode characteristics include:
- Forward voltage drop.
- Reverse leakage current.
- Maximum forward current.
- Reverse voltage rating.
- Breakdown voltage.

A silicon diode commonly has a forward voltage drop around 0.7 V under typical conditions, although the actual value depends on current and temperature.

Diodes are used in rectifiers, protection circuits, signal processing, and switching applications.
          `,
          quiz: [
            {
              question: "What is the main function of a PN junction diode?",
              options: [
                "Allow current mainly in one direction",
                "Store large amounts of program data",
                "Amplify every signal automatically",
                "Generate mechanical movement"
              ],
              answer: "Allow current mainly in one direction"
            },
            {
              question: "What is the P-type terminal of a diode called?",
              options: ["Anode", "Cathode", "Collector", "Emitter"],
              answer: "Anode"
            },
            {
              question: "What happens to the depletion region during forward bias?",
              options: [
                "It becomes narrower",
                "It becomes infinitely wide",
                "It disappears from the entire circuit",
                "It changes into a resistor"
              ],
              answer: "It becomes narrower"
            },
            {
              question: "What is the approximate forward voltage drop of a typical silicon diode?",
              options: ["0.7 V", "5 V", "12 V", "100 V"],
              answer: "0.7 V"
            },
            {
              question: "Which application commonly uses diodes?",
              options: ["Rectification", "Permanent data storage", "Program compilation", "Mechanical gear control"],
              answer: "Rectification"
            }
          ]
        },
        {
          title: "Rectifiers and Diode Applications",
          content: `
A rectifier converts alternating current (AC) into pulsating direct current (DC).

Diodes are used because they conduct mainly in one direction.

Common rectifier types:

1. Half-wave rectifier: Uses one diode to pass one half-cycle of the AC input.
2. Full-wave center-tapped rectifier: Uses two diodes and a center-tapped transformer arrangement to use both half-cycles.
3. Bridge rectifier: Uses four diodes arranged so that both half-cycles produce output current in the same direction through the load.

A filter capacitor can be connected after the rectifier to reduce output voltage ripple.

Ripple is the remaining variation in the rectified output voltage.

Rectifier circuits are commonly found in DC power supplies and electronic equipment.

Diodes also have other applications, including reverse-polarity protection, voltage clamping, and signal detection.
          `,
          quiz: [
            {
              question: "What does a rectifier convert?",
              options: [
                "AC into pulsating DC",
                "DC into sound",
                "Light into magnetic energy",
                "Digital data into resistance"
              ],
              answer: "AC into pulsating DC"
            },
            {
              question: "How many diodes are commonly used in a bridge rectifier?",
              options: ["Four", "One", "Two", "Six"],
              answer: "Four"
            },
            {
              question: "Which rectifier uses one diode?",
              options: ["Half-wave rectifier", "Bridge rectifier", "Three-phase rectifier", "Full-wave bridge rectifier"],
              answer: "Half-wave rectifier"
            },
            {
              question: "Why is a filter capacitor used after a rectifier?",
              options: [
                "To reduce output voltage ripple",
                "To increase diode leakage current",
                "To reverse the output polarity",
                "To remove the transformer"
              ],
              answer: "To reduce output voltage ripple"
            },
            {
              question: "Which is another application of a diode?",
              options: [
                "Reverse-polarity protection",
                "Permanent file storage",
                "CPU instruction decoding",
                "Wireless data encryption"
              ],
              answer: "Reverse-polarity protection"
            }
          ]
        },
        {
          title: "Zener Diodes and Special Diodes",
          content: `
A Zener diode is designed to operate in reverse breakdown within its specified ratings. It is commonly used for voltage regulation and reference circuits.

When the reverse voltage reaches the Zener voltage, the diode can maintain a nearly constant voltage across it over a suitable operating-current range.

A current-limiting resistor is normally required to keep the diode current within its specified limits.

Other special diodes include:

1. LED: Emits light when forward biased.
2. Photodiode: Converts light into electrical current.
3. Schottky diode: Uses a metal-semiconductor junction and generally has a lower forward voltage drop than a typical silicon PN diode.
4. Varactor diode: Uses voltage-dependent junction capacitance in tuning circuits.

Each diode type is designed for a particular application.

Choosing the correct device requires checking its voltage, current, power, and temperature ratings.
          `,
          quiz: [
            {
              question: "What is a common application of a Zener diode?",
              options: [
                "Voltage regulation",
                "Magnetic storage",
                "Mechanical switching",
                "Program execution"
              ],
              answer: "Voltage regulation"
            },
            {
              question: "What does an LED do?",
              options: [
                "Emits light when forward biased",
                "Stores electrical energy permanently",
                "Measures magnetic field only",
                "Converts sound into resistance"
              ],
              answer: "Emits light when forward biased"
            },
            {
              question: "What does a photodiode respond to?",
              options: ["Light", "Mechanical pressure only", "Sound only", "Magnetic storage"],
              answer: "Light"
            },
            {
              question: "Which diode commonly has a relatively low forward voltage drop?",
              options: ["Schottky diode", "Zener diode only", "Varactor diode", "Ordinary high-voltage rectifier diode"],
              answer: "Schottky diode"
            },
            {
              question: "Why is a resistor used with a Zener diode?",
              options: [
                "To limit current",
                "To increase its breakdown voltage without limit",
                "To store program instructions",
                "To eliminate reverse bias"
              ],
              answer: "To limit current"
            }
          ]
        }
      ]
    },
    {
      title: "Week 3: Transistors and Amplifiers",
      lessons: [
        {
          title: "BJT Fundamentals",
          content: `
A Bipolar Junction Transistor (BJT) is a semiconductor device used for amplification and switching.

A BJT has three terminals:
1. Emitter
2. Base
3. Collector

There are two main types:
- NPN transistor.
- PNP transistor.

A small base current controls a larger collector current in a BJT operating in its active region.

The three common BJT configurations are:
- Common emitter.
- Common base.
- Common collector.

The common-emitter configuration is widely used because it provides useful voltage and current gain.

Important current relationship:

IE = IB + IC

where IE is emitter current, IB is base current, and IC is collector current.

The current gain beta is approximately the ratio of collector current to base current in the active region.

A transistor's operating region depends on the applied bias conditions. Common regions include cutoff, active, and saturation.
          `,
          quiz: [
            {
              question: "What does BJT stand for?",
              options: [
                "Bipolar Junction Transistor",
                "Binary Junction Terminal",
                "Basic Junction Transformer",
                "Balanced Current Transfer"
              ],
              answer: "Bipolar Junction Transistor"
            },
            {
              question: "How many terminals does a BJT have?",
              options: ["Three", "Two", "Four", "Five"],
              answer: "Three"
            },
            {
              question: "Which are the terminals of a BJT?",
              options: [
                "Emitter, Base, Collector",
                "Anode, Cathode, Gate",
                "Source, Drain, Gate",
                "Input, Output, Ground"
              ],
              answer: "Emitter, Base, Collector"
            },
            {
              question: "Which BJT configuration is widely used for voltage amplification?",
              options: [
                "Common emitter",
                "Common collector only",
                "Common base only",
                "Open circuit"
              ],
              answer: "Common emitter"
            },
            {
              question: "What is the BJT current relationship?",
              options: [
                "IE = IB + IC",
                "IE = IB - IC",
                "IC = IE + IB",
                "IB = IE + IC"
              ],
              answer: "IE = IB + IC"
            }
          ]
        },
        {
          title: "BJT Biasing and Operating Regions",
          content: `
Biasing means applying suitable DC voltages and currents to establish a transistor's operating point.

The operating point, also called the Q-point, determines the transistor's quiescent collector current and collector-emitter voltage.

A properly biased transistor can amplify an AC signal without unwanted clipping.

Common BJT operating regions:

1. Cutoff: The transistor is effectively OFF, with very little collector current.
2. Active: The transistor operates in the amplification region.
3. Saturation: The transistor is strongly ON, with a low collector-emitter voltage.

Voltage-divider biasing is a commonly used method for establishing a relatively stable operating point.

Bias stability matters because transistor parameters and temperature can change.

If the Q-point is poorly selected, the output waveform may become distorted or clipped.

Understanding biasing is important in amplifier design and transistor switching circuits.
          `,
          quiz: [
            {
              question: "What is transistor biasing?",
              options: [
                "Applying suitable DC conditions to set its operating point",
                "Removing every transistor terminal",
                "Changing the transistor's material into metal",
                "Storing a program in the transistor"
              ],
              answer: "Applying suitable DC conditions to set its operating point"
            },
            {
              question: "What does Q-point represent?",
              options: [
                "Quiescent operating point",
                "Maximum memory address",
                "Input frequency only",
                "Power supply connector"
              ],
              answer: "Quiescent operating point"
            },
            {
              question: "In which region does a BJT normally amplify signals?",
              options: ["Active region", "Cutoff region", "Saturation region", "Breakdown region"],
              answer: "Active region"
            },
            {
              question: "What is the condition of a transistor in cutoff?",
              options: [
                "Effectively OFF",
                "Strongly ON",
                "Operating as an ideal short circuit",
                "Producing maximum output voltage"
              ],
              answer: "Effectively OFF"
            },
            {
              question: "What can poor biasing cause in an amplifier?",
              options: [
                "Output waveform distortion",
                "Automatic memory expansion",
                "Higher network speed",
                "Permanent frequency independence"
              ],
              answer: "Output waveform distortion"
            }
          ]
        },
        {
          title: "FET and MOSFET Fundamentals",
          content: `
A Field Effect Transistor (FET) is a transistor in which an electric field controls current flow.

Unlike a BJT, which is controlled by base current, a FET is primarily controlled by voltage at its gate terminal.

Common FET types include JFET and MOSFET.

A MOSFET has three main terminals:
- Gate
- Drain
- Source

Many MOSFETs also have a body or substrate connection.

MOSFETs are widely used in digital circuits, switching power supplies, motor-control circuits, and analog amplifiers.

Important characteristics include threshold voltage, on-resistance, gate capacitance, maximum drain current, and maximum voltage ratings.

MOSFETs are available in enhancement and depletion types. Enhancement-mode MOSFETs are commonly used in switching applications.

A MOSFET's gate is insulated, so it draws very little steady-state DC current under normal conditions. However, gate capacitance must be charged and discharged during switching.

Selecting a MOSFET requires checking its ratings and ensuring that the gate drive is suitable.
          `,
          quiz: [
            {
              question: "What controls current in a FET?",
              options: [
                "Electric field",
                "Only mechanical pressure",
                "Magnetic storage",
                "Optical reflection"
              ],
              answer: "Electric field"
            },
            {
              question: "Which are the main MOSFET terminals?",
              options: [
                "Gate, Drain, Source",
                "Emitter, Base, Collector",
                "Anode, Cathode, Gate",
                "Input, Output, Clock"
              ],
              answer: "Gate, Drain, Source"
            },
            {
              question: "Which terminal controls a MOSFET?",
              options: ["Gate", "Drain", "Source", "Case"],
              answer: "Gate"
            },
            {
              question: "Why does a MOSFET draw very little steady-state gate current?",
              options: [
                "Its gate is insulated",
                "It has no semiconductor material",
                "It does not use voltage",
                "Its drain is disconnected internally"
              ],
              answer: "Its gate is insulated"
            },
            {
              question: "Which is a common MOSFET application?",
              options: [
                "Switching power supplies",
                "Permanent document storage",
                "Measuring time directly without a clock",
                "Generating database queries"
              ],
              answer: "Switching power supplies"
            }
          ]
        },
        {
          title: "Small-Signal Amplifiers and Gain",
          content: `
An amplifier increases the strength of an input signal.

The amount of amplification is described by gain.

Voltage gain is the ratio of output voltage to input voltage:

Av = Vout / Vin

Current gain is the ratio of output current to input current.

Power gain compares output power with input power.

Amplifiers are commonly classified according to their input and output characteristics, frequency response, and circuit configuration.

A small-signal amplifier is designed to amplify relatively small variations around a selected DC operating point.

The common-emitter BJT amplifier is a typical example. It can provide voltage gain and normally produces an output signal that is inverted relative to the input.

Coupling capacitors can allow AC signals to pass while blocking unwanted DC components between stages.

The frequency response describes how amplifier gain changes with signal frequency.

A good amplifier should provide suitable gain while controlling distortion, noise, and bandwidth.
          `,
          quiz: [
            {
              question: "What is the main function of an amplifier?",
              options: [
                "Increase the strength of a signal",
                "Store data permanently",
                "Convert all signals into mechanical energy",
                "Remove the need for a power supply"
              ],
              answer: "Increase the strength of a signal"
            },
            {
              question: "How is voltage gain calculated?",
              options: [
                "Vout / Vin",
                "Vin / Vout",
                "Vout + Vin",
                "Vin - Vout"
              ],
              answer: "Vout / Vin"
            },
            {
              question: "What does frequency response describe?",
              options: [
                "How gain changes with signal frequency",
                "How memory changes with temperature",
                "How resistor color changes with time",
                "How the power supply changes shape"
              ],
              answer: "How gain changes with signal frequency"
            },
            {
              question: "What is a coupling capacitor commonly used for?",
              options: [
                "Passing AC while blocking DC between stages",
                "Increasing transistor terminal count",
                "Storing program instructions",
                "Replacing the amplifier's power supply"
              ],
              answer: "Passing AC while blocking DC between stages"
            },
            {
              question: "What is a common characteristic of a common-emitter amplifier?",
              options: [
                "Its output is normally inverted relative to its input",
                "It cannot provide voltage gain",
                "It operates without biasing",
                "It always produces zero output"
              ],
              answer: "Its output is normally inverted relative to its input"
            }
          ]
        }
      ]
    },
    {
      title: "Week 4: Op-Amps, Filters, and Applications",
      lessons: [
        {
          title: "Operational Amplifier Fundamentals",
          content: `
An operational amplifier, commonly called an op-amp, is a high-gain differential amplifier.

It has two input terminals:
- Inverting input (-).
- Non-inverting input (+).

It also has an output terminal and requires a suitable power supply.

An op-amp amplifies the difference between its two input voltages.

Important ideal op-amp characteristics include:
1. Very high open-loop voltage gain.
2. Very high input impedance.
3. Very low output impedance.
4. Large bandwidth in the ideal model.
5. Zero input offset voltage in the ideal model.

Real op-amps have limitations such as finite gain, limited bandwidth, input offset, and output voltage restrictions.

Negative feedback is commonly used to create stable amplifier circuits.

Op-amps are used in signal amplification, filtering, comparison, mathematical operations, and sensor signal conditioning.
          `,
          quiz: [
            {
              question: "What is an operational amplifier?",
              options: [
                "A high-gain differential amplifier",
                "A passive storage device",
                "A mechanical switching component",
                "A digital memory address"
              ],
              answer: "A high-gain differential amplifier"
            },
            {
              question: "Which is the inverting input of an op-amp?",
              options: ["Negative input", "Positive input", "Output terminal", "Power ground only"],
              answer: "Negative input"
            },
            {
              question: "What does an op-amp amplify?",
              options: [
                "Difference between its input voltages",
                "Only the power supply current",
                "The physical size of a resistor",
                "The number of circuit connections"
              ],
              answer: "Difference between its input voltages"
            },
            {
              question: "What is a characteristic of an ideal op-amp?",
              options: [
                "Very high input impedance",
                "Zero open-loop gain",
                "Very high output impedance",
                "Infinite input current"
              ],
              answer: "Very high input impedance"
            },
            {
              question: "What is negative feedback used for?",
              options: [
                "To improve circuit stability and control gain",
                "To remove the op-amp's power supply",
                "To permanently store input signals",
                "To eliminate all circuit components"
              ],
              answer: "To improve circuit stability and control gain"
            }
          ]
        },
        {
          title: "Inverting and Non-Inverting Amplifiers",
          content: `
Operational amplifiers can be connected in different configurations to provide controlled voltage gain.

An inverting amplifier applies the input signal through a resistor to the inverting terminal. The non-inverting terminal is commonly connected to the reference ground in a basic circuit.

Its ideal voltage gain is:

Av = -Rf / Rin

The negative sign indicates phase inversion.

A non-inverting amplifier applies the input signal to the non-inverting terminal. Its ideal voltage gain is:

Av = 1 + (Rf / R1)

The output signal has the same phase as the input.

In both configurations, negative feedback helps determine the closed-loop gain.

The gain is controlled by resistor values, making these circuits useful for sensor interfaces and signal-conditioning applications.

Real circuit performance also depends on the op-amp's supply voltage, input range, output range, and bandwidth.
          `,
          quiz: [
            {
              question: "Which op-amp configuration produces an inverted output?",
              options: [
                "Inverting amplifier",
                "Non-inverting amplifier",
                "Voltage follower",
                "Comparator without feedback"
              ],
              answer: "Inverting amplifier"
            },
            {
              question: "What is the ideal voltage gain of an inverting amplifier?",
              options: [
                "-Rf / Rin",
                "1 + Rf / R1",
                "Rf + Rin",
                "Rin / Rf"
              ],
              answer: "-Rf / Rin"
            },
            {
              question: "What is the ideal voltage gain of a non-inverting amplifier?",
              options: [
                "1 + (Rf / R1)",
                "-Rf / Rin",
                "Rf - R1",
                "R1 / Rf"
              ],
              answer: "1 + (Rf / R1)"
            },
            {
              question: "What is the phase relationship in a non-inverting amplifier?",
              options: [
                "Output is in phase with input",
                "Output is always opposite in phase",
                "Output is always zero",
                "Output has no relationship to input"
              ],
              answer: "Output is in phase with input"
            },
            {
              question: "What mainly controls the closed-loop gain in these circuits?",
              options: [
                "Feedback resistor network",
                "The color of the circuit board",
                "The number of screws",
                "The programming language"
              ],
              answer: "Feedback resistor network"
            }
          ]
        },
        {
          title: "Analog Filters and Frequency Response",
          content: `
An analog filter allows selected frequency components of a signal to pass while reducing others.

Filters are used in audio circuits, communication systems, sensor processing, and power supplies.

Common filter types:

1. Low-pass filter: Passes lower frequencies and attenuates higher frequencies.
2. High-pass filter: Passes higher frequencies and attenuates lower frequencies.
3. Band-pass filter: Passes a selected range of frequencies.
4. Band-stop filter: Attenuates a selected frequency range.

A simple RC filter uses a resistor and capacitor.

The cutoff frequency is the frequency at which the output magnitude reaches approximately 70.7% of its passband value for a first-order filter.

For a simple RC filter:

fc = 1 / (2πRC)

Frequency response is often represented using a graph of gain against frequency.

Filters help remove unwanted noise, separate frequency bands, and improve signal quality.
          `,
          quiz: [
            {
              question: "What does a low-pass filter allow to pass?",
              options: [
                "Lower frequencies",
                "Only the highest frequencies",
                "No frequencies",
                "Only DC current in every circuit"
              ],
              answer: "Lower frequencies"
            },
            {
              question: "What does a high-pass filter attenuate?",
              options: [
                "Lower frequencies",
                "Higher frequencies",
                "All power supply voltages",
                "Only mechanical signals"
              ],
              answer: "Lower frequencies"
            },
            {
              question: "Which filter passes a selected range of frequencies?",
              options: [
                "Band-pass filter",
                "Low-pass filter",
                "High-pass filter",
                "Rectifier"
              ],
              answer: "Band-pass filter"
            },
            {
              question: "What is the cutoff frequency of a first-order filter commonly associated with?",
              options: [
                "Approximately 70.7% of passband output magnitude",
                "Zero output at every frequency",
                "Twice the supply voltage",
                "The maximum resistor temperature"
              ],
              answer: "Approximately 70.7% of passband output magnitude"
            },
            {
              question: "Which equation gives the cutoff frequency of a simple RC filter?",
              options: [
                "1 / (2πRC)",
                "RC",
                "2πR / C",
                "R + C"
              ],
              answer: "1 / (2πRC)"
            }
          ]
        },
        {
          title: "Oscillators and Practical Analog Applications",
          content: `
An oscillator is an electronic circuit that generates a periodic signal without requiring a periodic input signal.

Oscillators are used in clocks, communication equipment, signal generators, and electronic measurement systems.

Common oscillator types include:
- RC oscillators.
- LC oscillators.
- Crystal oscillators.
- Relaxation oscillators.

An oscillator generally uses an amplifier and a feedback network. Sustained oscillation requires suitable feedback conditions and sufficient loop gain at the oscillation frequency.

Crystal oscillators use the mechanical resonance of a piezoelectric crystal to provide a stable frequency.

Analog circuits are also used in practical systems such as:
1. Audio amplifiers.
2. Sensor signal-conditioning circuits.
3. Active and passive filters.
4. Voltage regulators.
5. Signal generators.

A complete analog design must consider supply voltage, component ratings, frequency response, noise, temperature, and stability.

Testing with a multimeter and oscilloscope helps verify that the circuit operates as expected.
          `,
          quiz: [
            {
              question: "What does an oscillator generate?",
              options: [
                "A periodic electrical signal",
                "A permanent memory file",
                "A mechanical document",
                "A network address"
              ],
              answer: "A periodic electrical signal"
            },
            {
              question: "Which component is commonly used for frequency stability?",
              options: [
                "Crystal resonator",
                "Ordinary switch",
                "LED indicator",
                "Fuse holder"
              ],
              answer: "Crystal resonator"
            },
            {
              question: "What is a common use of an oscillator?",
              options: [
                "Generating clock signals",
                "Storing source code",
                "Measuring resistance without a circuit",
                "Replacing all power supplies"
              ],
              answer: "Generating clock signals"
            },
            {
              question: "Which instrument helps observe an oscillator's output waveform?",
              options: [
                "Oscilloscope",
                "Soldering iron",
                "File manager",
                "Keyboard"
              ],
              answer: "Oscilloscope"
            },
            {
              question: "Which factor should be considered in analog circuit design?",
              options: [
                "Component ratings and frequency response",
                "Only the circuit board color",
                "The computer's wallpaper",
                "The project folder name"
              ],
              answer: "Component ratings and frequency response"
            }
          ]
        }
      ]
    }
  ]
};

export default analogElectronicsCourse;
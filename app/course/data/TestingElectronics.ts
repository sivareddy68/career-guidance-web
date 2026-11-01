
import type { Course } from "./python";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type Lesson = {
  id: string;
  title: string;
  introduction: string;
  sections: { heading: string; content: string }[];
  example?: string;
  exercise: string;
  quiz: QuizQuestion[];
};

type CourseWeek = {
  title: string;
  lessons: Lesson[];
  assignment: string;
};

const q = (
  question: string,
  options: string[],
  answer: string,
  explanation: string
): QuizQuestion => ({ question, options, answer, explanation });

const lesson = (
  id: string,
  title: string,
  introduction: string,
  sections: { heading: string; content: string }[],
  example: string,
  exercise: string,
  quiz: QuizQuestion[]
): Lesson => ({
  id,
  title,
  introduction,
  sections,
  example,
  exercise,
  quiz,
});

const testingElectronicsCourse: Course = {
  title: "Testing Electronics",
  description:
    "Learn how to test electronic components, measure electrical signals, inspect PCBs, diagnose circuit faults, document test results, and develop a structured electronics testing project using safe, low-voltage equipment.",
  project:
    "Design and test a low-voltage electronic monitoring circuit. Prepare a test plan, measure component values and signals, introduce safe simulated faults, diagnose failures, record results, and present a final verification report.",

  weeks: [
    {
      title: "Week 1: Testing Fundamentals and Instruments",
      assignment:
        "Prepare a testing laboratory report using a low-voltage battery-powered circuit. Identify the circuit's expected behavior, select suitable instruments, take voltage and resistance measurements, and document instrument settings, results, and safety precautions.",

      lessons: [
        lesson(
          "te-w1-l1",
          "Introduction to Electronics Testing",
          "Electronics testing determines whether a component, circuit, or complete device operates according to its design requirements. Testing is used during product development, manufacturing, repair, and maintenance.",
          [
            {
              heading: "1. Purpose of testing",
              content:
                "Testing helps verify electrical performance, detect manufacturing defects, confirm component values, identify incorrect connections, and check whether a circuit meets its specifications. A circuit that looks correct may still contain an open connection, a short circuit, a damaged component, or an incorrect value. Testing provides measurable evidence rather than relying only on appearance.",
            },
            {
              heading: "2. Types of electronic tests",
              content:
                "A visual inspection checks physical condition and assembly quality. An electrical test measures quantities such as voltage, current, resistance, and continuity. A functional test verifies the intended behavior of the complete circuit. A performance test compares measurements against specified limits. Reliability testing investigates whether a device continues to perform correctly under defined operating conditions.",
            },
            {
              heading: "3. Test specifications and acceptance criteria",
              content:
                "A test specification identifies what must be measured, the expected value, the allowed tolerance, the equipment required, and the conditions under which the test is performed. Acceptance criteria define pass or fail. For example, a low-voltage indicator circuit may be required to illuminate when its input exceeds a specified threshold. The test report should record actual measurements and not simply state that the circuit works.",
            },
          ],
          "For a 5 V indicator circuit, the test plan may specify a supply range, correct LED operation, expected resistor value, and the absence of unintended shorts.",
          "Write a test plan for a battery-powered LED circuit. Include five checks, expected results, suitable instruments, and a clear pass/fail criterion for each check.",
          [
            q("What is the main purpose of electronics testing?", ["To decorate a circuit board", "To verify electrical performance against requirements", "To increase component size", "To remove all circuit documentation"], "To verify electrical performance against requirements", "Testing checks whether a device meets its intended electrical and functional requirements."),
            q("Which activity is a visual inspection?", ["Measuring resistance", "Reading a waveform", "Checking for cracked components", "Measuring current"], "Checking for cracked components", "Visual inspection identifies visible defects before or alongside electrical measurements."),
            q("What defines whether a test passes?", ["The color of the instrument", "Acceptance criteria", "The technician's guess", "The age of the notebook"], "Acceptance criteria", "Acceptance criteria specify the conditions that measured results must satisfy."),
            q("Which test checks the intended operation of a complete circuit?", ["Functional test", "Paint test", "Packaging test only", "Label test only"], "Functional test", "A functional test verifies that the circuit performs its intended task."),
            q("Why should actual test measurements be recorded?", ["To make the report longer", "To provide evidence for evaluation and troubleshooting", "To avoid using instruments", "To replace circuit diagrams"], "To provide evidence for evaluation and troubleshooting", "Recorded values make results traceable and help identify changes or faults.")
          ]
        ),

        lesson(
          "te-w1-l2",
          "Digital Multimeter Fundamentals",
          "A digital multimeter (DMM) is one of the most frequently used instruments in electronics laboratories. It can measure several electrical quantities using the appropriate function and connection method.",
          [
            {
              heading: "1. Main controls and connections",
              content:
                "A typical DMM has a display, function selector, common terminal, voltage/resistance terminal, and a separate current terminal. The black lead normally connects to COM. The red lead is placed in the terminal specified for the selected measurement. Some meters have additional terminals for high current, capacitance, or temperature. Always read the instrument labels and manual before measuring.",
            },
            {
              heading: "2. Voltage, resistance, and continuity",
              content:
                "Voltage is measured across two points, so the meter is connected in parallel with the circuit element. Resistance is measured with the circuit de-energized and the component isolated when necessary. Continuity mode uses an audible signal or display indication to identify a low-resistance path. A continuity beep does not prove that a circuit functions correctly at its normal operating voltage.",
            },
            {
              heading: "3. Range, resolution, and accuracy",
              content:
                "Resolution is the smallest change that the display can show. Accuracy describes how close a measurement is to the actual value within stated conditions. Auto-ranging meters select a suitable range automatically, while manual-ranging meters require the user to select one. A reading outside the selected range may show an overload indication. Measurement uncertainty and instrument specifications should be considered when judging close results.",
            },
          ],
          "A DMM can measure the voltage across a 3 V battery by selecting DC voltage and placing the probes across its positive and negative terminals.",
          "Using a supervised low-voltage training setup, identify the DMM terminals and measure a battery voltage. With power disconnected, test continuity of a suitable wire. Record the selected mode and reading.",
          [
            q("Where is the black DMM lead normally connected?", ["COM", "Current output", "Display port", "Earth terminal in every situation"], "COM", "COM is the common measurement terminal on a typical digital multimeter."),
            q("How should voltage be measured across a resistor?", ["In series only", "In parallel", "With both probes in the same socket", "By removing the meter battery"], "In parallel", "Voltage is the potential difference between two points and is measured across the element."),
            q("When should resistance normally be measured?", ["While the circuit is powered", "With the circuit de-energized", "During a lightning storm", "Only when current is flowing"], "With the circuit de-energized", "External power can produce incorrect readings and may damage the meter or circuit."),
            q("What does continuity mode help identify?", ["A low-resistance electrical path", "The color of a wire", "The software version", "The temperature of every component"], "A low-resistance electrical path", "Continuity mode helps check whether an electrical path is connected."),
            q("What does resolution describe?", ["The smallest displayed change", "The circuit's maximum power", "The component's brand", "The test duration"], "The smallest displayed change", "Resolution describes the smallest increment that an instrument can display.")
          ]
        ),

        lesson(
          "te-w1-l3",
          "Measuring Voltage, Current, and Resistance",
          "Accurate measurements depend on choosing the correct quantity, instrument mode, circuit connection, and measurement range. Understanding the relationships among voltage, current, and resistance makes test results easier to interpret.",
          [
            {
              heading: "1. Voltage measurement",
              content:
                "Voltage is measured between two circuit nodes. Before testing, identify the reference point and expected polarity. For DC circuits, a reversed probe connection may produce a negative reading rather than damage a suitable meter. Compare the measured value with the circuit's design value and consider supply variation and measurement tolerance.",
            },
            {
              heading: "2. Current measurement",
              content:
                "Current measurement requires the meter to be placed in series with the current path. The circuit must be opened at an appropriate point and the meter inserted correctly. Never place a meter configured for current measurement directly across a battery or voltage source; this can create a short circuit. Confirm the correct input terminal and current rating before proceeding.",
            },
            {
              heading: "3. Resistance and Ohm's law",
              content:
                "Resistance is measured without external power. Ohm's law relates voltage, current, and resistance: V = IR. It can be used to estimate expected current or determine an unknown quantity. For example, a 1 kΩ resistor across 5 V ideally carries 5 mA. Real circuits may differ because of component tolerances and other circuit elements.",
            },
          ],
          "For a 1 kΩ resistor supplied by 5 V, the ideal current is I = V/R = 5/1000 A = 0.005 A, or 5 mA.",
          "Calculate the ideal current through 2.2 kΩ connected across 3.3 V. Then describe how you would safely verify the circuit's voltage and resistance using a DMM.",
          [
            q("Which equation represents Ohm's law?", ["V = IR", "V = I + R", "R = V × I", "I = V × R"], "V = IR", "Ohm's law states that voltage equals current multiplied by resistance for an ohmic element under the stated conditions."),
            q("How is current normally measured with a multimeter?", ["In series with the current path", "In parallel across the source", "With the probes disconnected", "Only using resistance mode"], "In series with the current path", "The current passing through the circuit must also pass through the meter's current input."),
            q("What should be done before measuring resistance?", ["Increase the supply voltage", "Disconnect circuit power", "Short the battery", "Select AC current regardless of the meter"], "Disconnect circuit power", "Resistance measurements should be made on de-energized circuits."),
            q("What is the ideal current through 1 kΩ across 5 V?", ["0.5 mA", "5 mA", "50 mA", "500 mA"], "5 mA", "Using I = V/R gives 5 V divided by 1000 Ω, which equals 5 mA."),
            q("What may a negative DC voltage reading indicate?", ["Reversed probe polarity relative to the reference", "The meter has no display", "Resistance is always zero", "The circuit must be an AC circuit"], "Reversed probe polarity relative to the reference", "A negative reading can indicate that the probes are reversed relative to the selected voltage reference.")
          ]
        ),

        lesson(
          "te-w1-l4",
          "Oscilloscopes and Function Generators",
          "Oscilloscopes display voltage as a function of time, while function generators produce test signals. Together they help engineers examine dynamic circuit behavior that a simple multimeter cannot fully reveal.",
          [
            {
              heading: "1. Understanding an oscilloscope",
              content:
                "An oscilloscope plots signal voltage vertically and time horizontally. Common controls include volts per division, seconds per division, trigger level, and coupling. A stable trigger helps keep repeating waveforms stationary on the display. Probe attenuation must match the scope setting. The input limits and grounding arrangement must be understood before connecting a probe.",
            },
            {
              heading: "2. Measuring waveform properties",
              content:
                "Peak voltage is the maximum excursion from the reference level, while peak-to-peak voltage is the difference between the highest and lowest waveform values. Period is the time taken for one cycle, and frequency is the reciprocal of period: f = 1/T. A waveform with a period of 1 ms has a frequency of 1 kHz. DC offset describes a waveform's average displacement from zero.",
            },
            {
              heading: "3. Function generator operation",
              content:
                "A function generator can produce sine, square, and triangular waveforms with adjustable frequency and amplitude. It is useful for checking amplifiers, filters, and signal-processing circuits. Start with a low amplitude and a suitable frequency. Confirm the circuit input limits, generator output settings, and common-ground arrangement before connecting equipment.",
            },
          ],
          "If an oscilloscope shows a repeating waveform with a period of 2 ms, its frequency is 1/0.002 = 500 Hz.",
          "Using a low-voltage training signal and suitable supervision, display a sine wave. Estimate its period, calculate its frequency, and record the generator's amplitude and frequency settings.",
          [
            q("What does an oscilloscope display?", ["Voltage versus time", "Only component color", "Only resistance versus temperature", "The contents of a text file"], "Voltage versus time", "An oscilloscope displays how a measured electrical signal varies over time."),
            q("What is the frequency of a waveform with a 1 ms period?", ["10 Hz", "100 Hz", "1 kHz", "10 kHz"], "1 kHz", "Frequency equals one divided by period; 1/0.001 s equals 1000 Hz."),
            q("Which instrument generates a test waveform?", ["Function generator", "Soldering stand", "Passive probe alone", "Continuity buzzer"], "Function generator", "A function generator produces controlled waveforms for circuit testing."),
            q("What does peak-to-peak voltage represent?", ["The difference between maximum and minimum voltage", "The time for one cycle", "The resistance of a wire", "The number of scope channels"], "The difference between maximum and minimum voltage", "Peak-to-peak voltage spans the waveform's highest and lowest points."),
            q("Why must oscilloscope probe settings match the instrument settings?", ["To ensure correct measurement scaling", "To change the component's resistance", "To remove the need for grounding", "To increase the supply voltage automatically"], "To ensure correct measurement scaling", "A mismatched attenuation setting can cause the displayed voltage to be scaled incorrectly.")
          ]
        ),
      ],
    },

    {
      title: "Week 2: Component and Circuit Testing",
      assignment:
        "Build or use a safe, low-voltage LED and resistor circuit. Prepare a component checklist, calculate expected values, test resistors and diodes with suitable equipment, measure operating voltage, and compare actual results with theoretical predictions and component tolerances.",

      lessons: [
        lesson(
          "te-w2-l1",
          "Testing Resistors, Capacitors, and Inductors",
          "Passive components influence current, voltage, energy storage, filtering, and timing. Testing their values and condition is an essential part of diagnosing electronic circuits.",
          [
            {
              heading: "1. Resistor testing",
              content:
                "A resistor can be measured with a DMM in resistance mode after circuit power is disconnected. In-circuit measurements may be affected by parallel paths, so lifting one lead may be necessary for a reliable value. Compare the reading with the marked or specified value and tolerance. Inspect for cracks, discoloration, and signs of overheating.",
            },
            {
              heading: "2. Capacitor testing",
              content:
                "A capacitor stores energy in an electric field. Capacitance may be measured with a meter that supports the function, preferably after the capacitor has been safely discharged according to the equipment procedure. In-circuit readings may not represent the individual capacitor. Capacitance alone does not establish full condition; leakage, equivalent series resistance, and voltage rating may also matter.",
            },
            {
              heading: "3. Inductor testing",
              content:
                "An inductor stores energy in a magnetic field. A continuity or resistance check can reveal an open winding, but a normal DC resistance reading does not prove that inductance is correct. Specialized LCR meters measure inductance under specified conditions. Physical inspection can reveal damaged windings or a cracked core.",
            },
          ],
          "A resistor marked 1 kΩ with a ±5% tolerance should ideally measure between 950 Ω and 1050 Ω, assuming the test conditions and instrument accuracy support that comparison.",
          "Measure several unpowered resistors. Calculate their tolerance ranges, compare readings, and explain why an in-circuit capacitor reading may be misleading.",
          [
            q("What should be done before measuring a resistor's resistance?", ["Disconnect circuit power", "Apply maximum supply voltage", "Connect the meter in current mode across the supply", "Heat the resistor"], "Disconnect circuit power", "Resistance should be measured on a de-energized circuit."),
            q("What range corresponds to a 1 kΩ resistor with ±5% tolerance?", ["900–1100 Ω", "950–1050 Ω", "990–1010 Ω", "500–1500 Ω"], "950–1050 Ω", "Five percent of 1000 Ω is 50 Ω, giving a range of 950 Ω to 1050 Ω."),
            q("What does a capacitor primarily store?", ["Energy in an electric field", "Only mechanical energy", "Information in a file", "Energy exclusively as sound"], "Energy in an electric field", "A capacitor stores electrical energy in the electric field between its conductors."),
            q("Which instrument can measure inductance directly when equipped for it?", ["LCR meter", "Ordinary ruler", "Continuity buzzer alone", "Screwdriver"], "LCR meter", "An LCR meter can measure inductance, capacitance, and resistance."),
            q("Why may an in-circuit resistance measurement be inaccurate?", ["Other circuit paths affect the reading", "Resistance cannot be measured digitally", "All resistors become capacitors", "A circuit board blocks every measurement"], "Other circuit paths affect the reading", "Parallel components and other paths can influence the measured resistance.")
          ]
        ),

        lesson(
          "te-w2-l2",
          "Testing Diodes, LEDs, and Transistors",
          "Semiconductor components have electrical behavior that depends on polarity and operating conditions. Appropriate testing can help identify open circuits, shorts, incorrect orientation, and damaged devices.",
          [
            {
              heading: "1. Diode testing",
              content:
                "A diode normally conducts more readily in the forward direction than in the reverse direction. A DMM's diode mode applies a small test signal and displays a forward voltage for a suitable connected diode. The result depends on diode type and meter characteristics. Testing in-circuit can be affected by parallel components, so isolate the component if the result is ambiguous.",
            },
            {
              heading: "2. LED testing",
              content:
                "An LED emits light when forward current flows through it. Its forward voltage depends on its semiconductor material and operating current. In a working circuit, a suitable series resistor limits current. Testing should use a meter or controlled low-voltage source with current limiting. Do not assume that every meter can supply enough voltage to illuminate every LED.",
            },
            {
              heading: "3. Transistor checks",
              content:
                "A bipolar junction transistor has emitter, base, and collector terminals. It contains two semiconductor junctions that can be checked in diode mode when the pinout and device type are known. A good junction check does not prove that the transistor's gain or high-frequency performance is correct. MOSFETs require attention to gate behavior, polarity, and electrostatic discharge precautions.",
            },
          ],
          "A red LED may show a forward voltage of approximately 1.8–2.2 V under some test conditions, but the actual value varies with device type and current.",
          "Use a low-voltage training kit to identify diode and LED polarity. Record diode-mode readings in both directions and explain why transistor pin identification is important.",
          [
            q("What is typical diode behavior in forward bias?", ["It conducts more readily", "It always blocks all current", "It becomes a resistor with exactly zero ohms", "It generates unlimited voltage"], "It conducts more readily", "A normal diode permits current more readily in its forward direction."),
            q("What limits current through an LED in a simple circuit?", ["A suitable series resistor", "A parallel wire short", "Removing all resistance", "A larger display"], "A suitable series resistor", "A series resistor limits the current and helps protect the LED."),
            q("Why can a diode test be misleading when performed in-circuit?", ["Other components can affect the reading", "Diodes have no polarity", "Meters cannot display numbers", "Every circuit contains no parallel paths"], "Other components can affect the reading", "Alternative current paths can influence the meter's test result."),
            q("Which terminals belong to a bipolar junction transistor?", ["Gate, drain, source", "Emitter, base, collector", "Anode, cathode, shield", "Input, display, common"], "Emitter, base, collector", "A bipolar junction transistor has emitter, base, and collector terminals."),
            q("What is an important precaution when handling MOSFETs?", ["Observe electrostatic discharge precautions", "Touch the gate repeatedly to discharge it", "Apply arbitrary high voltage", "Ignore the pinout"], "Observe electrostatic discharge precautions", "MOSFET gates can be sensitive to electrostatic discharge.")
          ]
        ),

        lesson(
          "te-w2-l3",
          "Power Supply and Voltage Regulator Testing",
          "Power supply circuits convert an input source into the voltage and current needed by electronic components. Testing checks output level, stability, polarity, and behavior under an appropriate load.",
          [
            {
              heading: "1. DC supply measurements",
              content:
                "First inspect the supply specifications, polarity, rated output, and permitted load. Measure the output with a suitable DMM on the correct voltage range. Compare the result with the required limits. A no-load reading may differ from a reading under load, so use only a load within the supply's ratings and follow the manufacturer's procedure.",
            },
            {
              heading: "2. Voltage regulators",
              content:
                "A voltage regulator maintains an output within a specified range despite changes in input or load, within its operating limits. Linear regulators can dissipate power as heat, while switching regulators use switching and energy-storage components to achieve conversion. Measure input and output voltages, confirm correct connections, and check for unexpected heating without touching potentially hot parts.",
            },
            {
              heading: "3. Ripple and stability",
              content:
                "Ripple is a periodic variation superimposed on a DC output. An oscilloscope can reveal ripple that is not obvious from a DMM reading. Probe grounding, bandwidth, coupling, and measurement setup affect the result. Compare ripple and transient behavior with the specification instead of judging quality from a single voltage reading.",
            },
          ],
          "For a regulator specified to output 3.3 V, record the measured output and determine whether it falls inside the manufacturer's stated tolerance.",
          "Test a supervised low-voltage regulated supply. Record input and output voltage, inspect polarity, and compare the measured output with its specification. Do not connect unknown loads.",
          [
            q("What is the primary purpose of a voltage regulator?", ["Maintain output voltage within specified limits", "Convert every signal to sound", "Measure component color", "Eliminate the need for circuit protection"], "Maintain output voltage within specified limits", "A regulator controls output voltage within its operating conditions."),
            q("What is ripple on a DC supply?", ["Periodic variation superimposed on the DC level", "The resistor's color code", "The physical length of a wire", "A type of PCB coating"], "Periodic variation superimposed on the DC level", "Ripple is an AC-like variation present on a DC output."),
            q("Which instrument is useful for examining supply ripple over time?", ["Oscilloscope", "Ruler", "Label printer", "Continuity mode only"], "Oscilloscope", "An oscilloscope shows the waveform and variation of supply voltage."),
            q("Why should the load rating be checked before testing a supply?", ["To avoid exceeding its permitted operating limits", "To change the output polarity automatically", "To remove all voltage", "To make the meter more accurate without calibration"], "To avoid exceeding its permitted operating limits", "An unsuitable load can overload or damage a power supply."),
            q("Why is output voltage compared with a specification?", ["To determine whether it meets acceptance limits", "To determine the board's color", "To replace all circuit measurements", "To guarantee unlimited lifetime"], "To determine whether it meets acceptance limits", "A specification provides the limits used to evaluate the measured output.")
          ]
        ),

        lesson(
          "te-w2-l4",
          "Testing Basic Analog Circuits",
          "Analog circuits process continuously varying signals. Testing these circuits involves examining input-output relationships, gain, bias conditions, frequency response, and distortion.",
          [
            {
              heading: "1. Operational amplifier basics",
              content:
                "An operational amplifier can be used in amplifier, buffer, comparator, and filter circuits, depending on its configuration. Real devices have supply-voltage requirements, input common-mode limits, output-swing limits, and bandwidth restrictions. Check the device data sheet and circuit diagram before interpreting a measurement. An unexpected output may result from incorrect supply connections or operation outside the device's limits.",
            },
            {
              heading: "2. Gain and bias measurements",
              content:
                "Voltage gain is the ratio of output signal amplitude to input signal amplitude when both are measured consistently. For example, an output amplitude of 2 V produced by a 0.2 V input corresponds to a gain magnitude of 10. DC bias measurements establish whether the circuit's operating point is appropriate before a dynamic signal is applied.",
            },
            {
              heading: "3. Frequency response and distortion",
              content:
                "A circuit may behave correctly at low frequency but lose gain at higher frequencies. Frequency response testing changes the input frequency while measuring output amplitude. Distortion occurs when the output waveform differs from the expected shape. Keep input amplitudes within the circuit's linear operating range and compare results with the intended design.",
            },
          ],
          "If a circuit receives a 0.2 V signal and produces a 1 V signal under the same amplitude convention, its voltage gain magnitude is 1/0.2 = 5.",
          "Use a low-voltage analog training circuit to measure input and output amplitudes at two frequencies. Calculate gain at each frequency and describe any difference.",
          [
            q("How is voltage gain calculated?", ["Output amplitude divided by input amplitude", "Input amplitude minus resistance", "Frequency divided by PCB area", "Supply voltage multiplied by time"], "Output amplitude divided by input amplitude", "Voltage gain is the ratio of output voltage amplitude to input voltage amplitude."),
            q("What does a DC bias measurement help determine?", ["The circuit's operating point", "The board's manufacturing date only", "The color of the waveform", "The size of the enclosure"], "The circuit's operating point", "Bias measurements reveal whether a circuit's DC operating conditions are appropriate."),
            q("What does frequency response testing investigate?", ["How circuit behavior changes with frequency", "How a PCB changes color", "The number of solder joints only", "The software license"], "How circuit behavior changes with frequency", "Frequency response shows how gain or phase changes with signal frequency."),
            q("What may cause an amplifier output to clip?", ["The signal exceeds the circuit's available output range", "The circuit diagram is printed clearly", "The resistor is measured correctly", "The meter is turned off"], "The signal exceeds the circuit's available output range", "Clipping can occur when an amplifier reaches its output limits."),
            q("Why should a circuit's data sheet be consulted?", ["To verify operating limits and pin connections", "To avoid checking polarity", "To guarantee every component is identical", "To replace the test plan with guesses"], "To verify operating limits and pin connections", "The data sheet provides electrical limits, pinouts, and other essential device information.")
          ]
        ),
      ],
    },

    {
      title: "Week 3: PCB Testing and Fault Diagnosis",
      assignment:
        "Inspect a low-voltage PCB or training board. Create a visual inspection checklist, perform safe power-off continuity and resistance checks, test the circuit's expected input and output, and prepare a fault-diagnosis table that connects symptoms, possible causes, measurements, and corrective actions.",

      lessons: [
        lesson(
          "te-w3-l1",
          "PCB Visual Inspection and Assembly Quality",
          "A printed circuit board connects components through copper tracks, pads, vias, and connectors. Visual inspection can reveal assembly problems before power is applied.",
          [
            {
              heading: "1. Board and component inspection",
              content:
                "Inspect the PCB for cracks, damaged pads, contamination, missing components, incorrect component orientation, and signs of overheating. Compare component locations and values with the assembly drawing and bill of materials. Verify polarized components such as diodes, LEDs, electrolytic capacitors, and integrated circuits against their documented orientation.",
            },
            {
              heading: "2. Solder joint quality",
              content:
                "Solder joints should provide reliable electrical and mechanical connections. Common defects include insufficient solder, bridges between adjacent pads, poor wetting, and cracked joints. A magnifier and suitable lighting can help identify defects. Do not assume that a shiny joint is always good or that a dull appearance alone proves failure; judge the joint using applicable workmanship criteria.",
            },
            {
              heading: "3. Inspection documentation",
              content:
                "Use a checklist to record board identification, inspected locations, observed defects, severity, and disposition. Photographs or annotated diagrams can help communicate the defect location. Inspection records improve repeatability and help distinguish an original defect from damage introduced during later handling or repair.",
            },
          ],
          "A solder bridge between adjacent pads may create an unintended electrical connection even when every component appears correctly positioned.",
          "Inspect a de-energized training PCB or board photograph. Record at least five inspection points and explain which defects must be corrected before power is applied.",
          [
            q("What is the purpose of PCB visual inspection?", ["Identify visible assembly and physical defects", "Measure every waveform without instruments", "Change the firmware automatically", "Guarantee unlimited product life"], "Identify visible assembly and physical defects", "Visual inspection can identify assembly problems before functional testing."),
            q("What is a solder bridge?", ["Unintended solder connecting separate conductive areas", "A printed component label", "A type of battery", "A test report"], "Unintended solder connecting separate conductive areas", "A solder bridge can create an unwanted electrical connection."),
            q("Why should polarized components be checked for orientation?", ["Incorrect orientation can prevent operation or damage components", "Polarity affects only the board's color", "All components have identical pinouts", "Orientation removes the need for testing"], "Incorrect orientation can prevent operation or damage components", "Polarized devices must be installed according to their specified connections."),
            q("What helps make inspections repeatable?", ["A documented checklist", "Memory alone", "Changing criteria every time", "Ignoring the assembly drawing"], "A documented checklist", "A checklist makes the inspection process consistent and traceable."),
            q("What should happen before powered PCB testing?", ["Resolve relevant safety and assembly concerns", "Connect every unknown wire", "Ignore visible shorts", "Use the highest available voltage"], "Resolve relevant safety and assembly concerns", "Potential shorts, damage, and assembly problems should be addressed before power is applied.")
          ]
        ),

        lesson(
          "te-w3-l2",
          "Continuity Testing and PCB Track Diagnosis",
          "Continuity tests help verify that conductive paths connect where intended and remain isolated where required. They are useful for checking PCB tracks, connectors, wires, and solder joints.",
          [
            {
              heading: "1. Open circuits and short circuits",
              content:
                "An open circuit is an unintended break in a path that should conduct. A short circuit is an unintended low-resistance connection between points that should remain separate. Both can prevent correct operation. Continuity checks must be interpreted using the circuit diagram because some legitimate paths contain resistors, semiconductor junctions, or other components.",
            },
            {
              heading: "2. Checking tracks and connectors",
              content:
                "With the board de-energized, identify the two intended endpoints and use the meter's continuity or resistance mode. Check accessible connector contacts, wires, tracks, and relevant solder joints. Avoid probing in a way that bridges neighboring pins. A continuity result alone cannot prove that a connection can carry the required current or that the complete circuit behaves correctly.",
            },
            {
              heading: "3. Systematic isolation",
              content:
                "Use the schematic to follow the path from source to destination. Divide a complex path into smaller sections and test each section separately. Compare readings between equivalent channels when the design allows it. If an unexpected result appears, repeat the measurement, verify probe contact, and check whether parallel circuit paths explain the reading.",
            },
          ],
          "If a connector pin should connect directly to a PCB test point but the meter indicates an open circuit, inspect the track and solder joints between them.",
          "On a de-energized training board, check three intended connections and two points that should be isolated. Record expected and actual results.",
          [
            q("What is an open circuit?", ["An unintended break in a conducting path", "A connection with no resistance in every case", "A perfectly functioning fuse", "A type of waveform"], "An unintended break in a conducting path", "An open circuit interrupts the intended current path."),
            q("What is a short circuit in a PCB context?", ["An unintended low-resistance connection between separate nodes", "A correct printed label", "A normal open switch", "A software comment"], "An unintended low-resistance connection between separate nodes", "A short connects points that should not be electrically joined."),
            q("Why should continuity be checked with power disconnected?", ["To improve safety and avoid misleading or damaging measurements", "To increase the battery voltage", "To force every diode to conduct", "To remove the need for a schematic"], "To improve safety and avoid misleading or damaging measurements", "Power-off continuity testing reduces risk and prevents interference from active circuitry."),
            q("What is a useful way to trace a complex PCB connection?", ["Divide the path into smaller sections", "Probe random pins without a diagram", "Increase supply voltage repeatedly", "Ignore the endpoints"], "Divide the path into smaller sections", "Section-by-section testing narrows down the location of a fault."),
            q("Does a continuity beep prove the complete circuit works correctly?", ["Yes, in every possible condition", "No, it only indicates a low-resistance path under the test conditions", "Yes, and it verifies frequency response", "No, because continuity meters never work"], "No, it only indicates a low-resistance path under the test conditions", "Continuity testing is limited and does not replace functional testing.")
          ]
        ),

        lesson(
          "te-w3-l3",
          "Systematic Fault Finding",
          "Fault finding is a structured process for identifying why a circuit does not meet its requirements. A disciplined approach reduces unnecessary component replacement and makes troubleshooting more reliable.",
          [
            {
              heading: "1. Define the symptom",
              content:
                "Record exactly what the circuit does and does not do. Examples include no output, an incorrect output voltage, intermittent behavior, excessive noise, or operation only under certain conditions. Reproduce the symptom under safe, documented conditions and compare it with the expected behavior. Avoid changing several things at once because that makes results difficult to interpret.",
            },
            {
              heading: "2. Test likely causes",
              content:
                "Start with simple checks: supply presence, polarity, connectors, visible damage, and incorrect assembly. Use the schematic to identify expected voltages and signal paths. Measure at selected nodes and compare results with expected values. A block-by-block method checks power, input, processing, and output stages to isolate the area where behavior first becomes incorrect.",
            },
            {
              heading: "3. Confirm the repair",
              content:
                "After identifying and correcting a fault, repeat the original test and perform relevant regression checks. Confirm that the intended symptom is resolved and that other functions still work. Record the cause, corrective action, before-and-after measurements, and any remaining limitations. Replacing a component without confirming the root cause can lead to repeated failures.",
            },
          ],
          "If an indicator does not illuminate, first verify the supply, LED orientation, resistor connection, and wiring before assuming the LED itself is defective.",
          "Create a troubleshooting flowchart for a non-working LED circuit. Include at least four possible checks and specify what measurement determines the next step.",
          [
            q("What is a good first step in fault finding?", ["Clearly define and reproduce the symptom", "Replace every component", "Change several connections simultaneously", "Ignore the circuit requirements"], "Clearly define and reproduce the symptom", "A clear symptom helps guide the investigation and establish a repeatable test."),
            q("What does a block-by-block method do?", ["Narrows the fault to a circuit section", "Removes the need for measurements", "Changes the circuit design automatically", "Guarantees every part is faulty"], "Narrows the fault to a circuit section", "Testing individual functional blocks helps isolate where behavior first differs from expectations."),
            q("Why should only a controlled change be made during diagnosis?", ["To understand which change affects the result", "To make the report shorter", "To prevent recording measurements", "To ensure multiple faults are created"], "To understand which change affects the result", "Changing one factor at a time makes cause and effect easier to determine."),
            q("What is a regression check?", ["A check that existing functions still work after a change", "A check of the PCB color", "A method of avoiding documentation", "A measurement of wire length only"], "A check that existing functions still work after a change", "Regression testing checks for unintended effects of a repair or modification."),
            q("What should a repair record include?", ["Cause, corrective action, and verification results", "Only the technician's favorite instrument", "Only a component's color", "No measured values"], "Cause, corrective action, and verification results", "A useful record makes the diagnosis and repair traceable.")
          ]
        ),

        lesson(
          "te-w3-l4",
          "Signal Tracing and Test Points",
          "Signal tracing follows a signal through a circuit to identify where its behavior changes. Test points provide accessible locations for measurement and can make production testing and maintenance more efficient.",
          [
            {
              heading: "1. Following the signal path",
              content:
                "Begin with the input and follow the schematic through each functional stage. At each stage, identify the expected voltage range, waveform, timing, or logic state. Use an instrument suited to the signal: a DMM for steady voltage, an oscilloscope for waveform behavior, and a logic analyzer for suitable digital signals. Use appropriate probes and respect the circuit's input limits.",
            },
            {
              heading: "2. Choosing test points",
              content:
                "A useful test point is accessible, clearly identified, and connected to a node that reveals important circuit behavior. Ground references must be chosen carefully, especially when using grounded bench instruments. Test-point labels and documentation should match the schematic and PCB layout. Avoid probing adjacent fine-pitch pins when a safer dedicated test point is available.",
            },
            {
              heading: "3. Comparing stages",
              content:
                "Record measurements at successive stages and identify the first point where the signal differs from its expected form. Consider loading effects: a probe or instrument can alter a high-impedance circuit. Compare amplitude, frequency, timing, polarity, and DC level where relevant. Repeat measurements to confirm that the observation is not caused by poor contact or an incorrect instrument setting.",
            },
          ],
          "If a filter receives a known sine wave but its output is unexpectedly absent, measuring the input and output test points can help isolate whether the problem is upstream, within the filter, or downstream.",
          "Draw a three-stage signal path and specify a test point, expected signal, instrument, and pass criterion for each stage.",
          [
            q("What is signal tracing used for?", ["Finding where a signal stops meeting expectations", "Measuring board weight", "Replacing the circuit diagram", "Changing all component values"], "Finding where a signal stops meeting expectations", "Signal tracing compares expected and observed behavior at successive stages."),
            q("Which instrument is best suited to viewing a changing waveform?", ["Oscilloscope", "Ruler", "Label maker", "Resistance color chart"], "Oscilloscope", "An oscilloscope displays signal variation over time."),
            q("Why are test points useful?", ["They provide accessible measurement locations", "They eliminate all safety requirements", "They guarantee no circuit faults", "They replace component specifications"], "They provide accessible measurement locations", "Test points make important circuit nodes easier to measure consistently."),
            q("What is a possible effect of an unsuitable probe?", ["It can load or disturb the circuit", "It always improves the signal", "It automatically repairs an open track", "It changes the schematic"], "It can load or disturb the circuit", "Probe impedance and capacitance can influence sensitive circuits."),
            q("What should be compared at successive signal stages?", ["Observed measurements against expected behavior", "Only the board's color", "Only the number of screws", "Only the equipment brand"], "Observed measurements against expected behavior", "Comparing measurements with expected signals helps locate the first incorrect stage.")
          ]
        ),
      ],
    },

    {
      title: "Week 4: Reliability, Automation, and Final Project",
      assignment:
        "Complete the final testing project. Submit a circuit diagram, test plan, component inspection record, expected and measured values, fault-diagnosis table, pass/fail results, and a conclusion explaining the circuit's verified performance and limitations.",

      lessons: [
        lesson(
          "te-w4-l1",
          "ESD Protection and Laboratory Safety",
          "Electronic test work requires safe equipment handling, appropriate measurement procedures, and protection against electrostatic discharge (ESD). Good laboratory practice protects people, components, and measurement equipment.",
          [
            {
              heading: "1. Electrical safety",
              content:
                "Use low-voltage training circuits appropriate to the laboratory and the user's level of supervision. Inspect leads and equipment before use, keep the workspace dry and orderly, and follow equipment instructions. Disconnect power before resistance or continuity tests and before changing circuit connections. Do not open or repair mains-powered equipment unless qualified and working under approved procedures.",
            },
            {
              heading: "2. Electrostatic discharge",
              content:
                "ESD is a sudden transfer of electrical charge that can damage sensitive semiconductor devices even when the damage is not immediately visible. Use approved ESD work surfaces, wrist straps, and handling procedures when required. Hold components by their edges, use suitable packaging, and follow the lab's grounding procedure. A wrist strap must be used according to the relevant safety guidance and never in a way that creates an electrical hazard.",
            },
            {
              heading: "3. Equipment and workspace practices",
              content:
                "Use the correct probe, range, terminal, and instrument rating for each task. Keep current-measurement leads out of the current jack when they are no longer needed. Do not bypass fuses or safety features. Label test setups, secure loose wires, and document any equipment abnormality. Stop testing if a component becomes unexpectedly hot, emits an unusual odor, or shows visible damage.",
            },
          ],
          "Before handling a sensitive microcontroller, check the laboratory's ESD procedure and place the device on approved protective packaging.",
          "Prepare a laboratory safety checklist covering power-off testing, meter settings, lead inspection, ESD handling, workspace organization, and reporting abnormal conditions.",
          [
            q("What does ESD stand for?", ["Electrostatic discharge", "Electronic signal display", "External supply design", "Electrical sampling diagram"], "Electrostatic discharge", "ESD is the transfer of electrostatic charge that can damage sensitive components."),
            q("When should resistance testing normally be performed?", ["On a de-energized circuit", "On a powered circuit at any voltage", "Only during a short circuit", "Only when the meter is in current mode"], "On a de-energized circuit", "Resistance measurements should be made with circuit power disconnected."),
            q("How should sensitive components be handled?", ["Follow approved ESD precautions", "Rub their pins on clothing", "Place them on any charged surface", "Ignore the lab's handling procedure"], "Follow approved ESD precautions", "ESD precautions reduce the risk of damage to semiconductor devices."),
            q("What should be done if equipment behaves abnormally?", ["Stop and follow the lab's safety and reporting procedure", "Increase the voltage immediately", "Bypass the equipment fuse", "Ignore unusual heating"], "Stop and follow the lab's safety and reporting procedure", "Abnormal behavior can indicate a hazard or equipment fault."),
            q("Why should the correct meter terminal be selected?", ["To avoid incorrect connections and potential damage", "To change the PCB layout", "To guarantee zero measurement error", "To remove the need for a test plan"], "To avoid incorrect connections and potential damage", "Incorrect meter connections can produce misleading results or create a short circuit.")
          ]
        ),

        lesson(
          "te-w4-l2",
          "Reliability Testing and Environmental Effects",
          "Reliability testing evaluates whether an electronic device continues to perform as required over time and under defined operating conditions. It helps identify weaknesses and improve design quality.",
          [
            {
              heading: "1. Reliability and failure modes",
              content:
                "A failure occurs when a device no longer meets a specified requirement. Possible causes include component aging, thermal stress, vibration, poor solder joints, contamination, and manufacturing defects. Failure mode analysis lists ways a product may fail, the effects of each failure, likely causes, and methods of detection or prevention. The analysis helps prioritize testing and design improvements.",
            },
            {
              heading: "2. Environmental influences",
              content:
                "Temperature, humidity, vibration, dust, and mechanical stress can affect electronic performance. Environmental tests should use defined conditions and appropriate equipment. Do not expose an ordinary circuit to extreme temperatures or moisture without an approved test procedure. For learning exercises, analyze documented test data or use safe simulated conditions rather than creating hazardous setups.",
            },
            {
              heading: "3. Reliability data and interpretation",
              content:
                "Reliability reports record test duration, sample size, conditions, failures, and corrective actions. A small test sample cannot prove that a device will never fail. Engineers interpret results in the context of the test method, operating environment, and product requirements. Repeatable procedures and traceable records make comparisons between designs more meaningful.",
            },
          ],
          "If a sensor becomes inaccurate at higher temperatures, engineers can compare measurements across defined temperature points and determine whether the deviation exceeds the permitted limit.",
          "Create a failure-mode table for an LED indicator circuit. List at least four possible failure modes, their effects, ways to detect them, and a prevention or correction.",
          [
            q("What does reliability testing investigate?", ["Whether a device continues to meet requirements under defined conditions", "Only the board's appearance", "Only the packaging font", "The technician's typing speed"], "Whether a device continues to meet requirements under defined conditions", "Reliability testing examines continued performance under specified conditions."),
            q("Which is an environmental influence on electronics?", ["Temperature", "Document title", "Keyboard layout", "Report page number"], "Temperature", "Temperature can affect component parameters and product performance."),
            q("What does failure-mode analysis document?", ["Potential failures, effects, causes, and detection methods", "Only component colors", "Only purchase prices", "Only the software's font"], "Potential failures, effects, causes, and detection methods", "Failure-mode analysis organizes potential failures and helps prioritize risk reduction."),
            q("Why must reliability test conditions be recorded?", ["To make results interpretable and repeatable", "To guarantee the device never fails", "To avoid defining requirements", "To eliminate sample-size limitations"], "To make results interpretable and repeatable", "Recorded conditions are necessary to understand and reproduce test results."),
            q("Does passing a limited reliability test prove a device can never fail?", ["Yes, permanently", "No, results apply within the limits of the test evidence", "Yes, if the report is long", "No, because testing cannot provide any useful evidence"], "No, results apply within the limits of the test evidence", "Testing provides evidence but cannot establish unlimited reliability.")
          ]
        ),

        lesson(
          "te-w4-l3",
          "Automated Testing and Test Documentation",
          "Automated testing uses instruments, software, or programmed procedures to perform measurements consistently. Documentation makes those tests repeatable and helps engineers compare results over time.",
          [
            {
              heading: "1. What automated testing does",
              content:
                "An automated test system may control a programmable power supply, signal generator, electronic load, switching unit, or measurement instrument. Software sets test conditions, collects measurements, compares them with limits, and records results. Automation is especially useful for repeated production checks, but the test sequence must be validated and the instruments must be suitable for the measurements.",
            },
            {
              heading: "2. Test sequences and pass/fail logic",
              content:
                "A test sequence defines setup, measurement order, expected results, decision limits, and recovery actions. The system should handle missing readings, communication errors, out-of-range values, and equipment faults. Pass/fail thresholds should come from the design specification rather than being chosen simply to make a test pass. Manual review may still be needed for unusual or ambiguous results.",
            },
            {
              heading: "3. Reports and traceability",
              content:
                "A useful report identifies the device or board, test version, date, equipment used, relevant calibration status, test conditions, measurements, and final outcome. Raw measurements should be preserved where practical. Clear file naming and version control help prevent confusion between different designs and test procedures. Test software should be checked to confirm that it records and evaluates values correctly.",
            },
          ],
          "A simple automated test could measure a regulated output, compare it with specified upper and lower limits, and save the measured voltage with a pass/fail result.",
          "Design a flowchart for an automated voltage test. Include setup, measurement, limit comparison, error handling, and result recording. You may implement the decision logic using simulated data.",
          [
            q("What is an advantage of automated testing?", ["Consistent execution of repeatable test sequences", "No need for test specifications", "Guaranteed elimination of every fault", "No need to validate test software"], "Consistent execution of repeatable test sequences", "Automation can improve consistency and efficiency for repeated tests."),
            q("Where should pass/fail limits come from?", ["Applicable design requirements or specifications", "A random number generator", "The operator's guess", "The color of the instrument"], "Applicable design requirements or specifications", "Acceptance limits must be based on documented requirements."),
            q("What should happen when a measurement is missing?", ["The test should handle and record the error appropriately", "The software should always report pass", "The missing value should be silently invented", "The entire specification should be deleted"], "The test should handle and record the error appropriately", "Robust test logic identifies missing data instead of producing misleading results."),
            q("Why is test software validation important?", ["To check that the test sequence and decisions work correctly", "To avoid measuring the circuit", "To make every value equal", "To remove instrument limitations"], "To check that the test sequence and decisions work correctly", "Incorrect software can misclassify devices even when the instruments are working."),
            q("Which information improves test traceability?", ["Device identity, test version, conditions, and results", "Only the operator's favorite color", "Only the computer wallpaper", "No dates or identifiers"], "Device identity, test version, conditions, and results", "Traceable records connect results to the device and procedure used.")
          ]
        ),

        lesson(
          "te-w4-l4",
          "Final Project: Design and Verify an Electronic Test Procedure",
          "This capstone lesson combines test planning, instrument selection, component verification, fault diagnosis, and reporting. The objective is to demonstrate a repeatable testing process for a simple low-voltage circuit.",
          [
            {
              heading: "1. Define the project requirements",
              content:
                "Select a safe, low-voltage circuit such as an LED indicator, sensor interface, or regulated-output demonstration board. Document the intended behavior, supply limits, important component values, and expected output. Establish measurable acceptance criteria before beginning tests. Prepare a schematic or block diagram and identify possible faults without deliberately creating dangerous electrical conditions.",
            },
            {
              heading: "2. Execute and document the test plan",
              content:
                "Perform a visual inspection, check component orientation, and complete appropriate power-off continuity and resistance tests. Then apply the specified low-voltage supply and measure expected operating values. Use a suitable oscilloscope only when waveform information is needed. Record instrument settings, actual values, acceptance limits, pass/fail status, and any deviations from the procedure.",
            },
            {
              heading: "3. Diagnose, verify, and report",
              content:
                "If a result fails, record the symptom, develop possible causes, and test them systematically. Use simulated fault data or a supervised training board to practice diagnosis safely. After a correction, repeat the original test and relevant regression checks. The final report should include the design, procedure, results table, fault analysis, conclusion, and limitations. Never report simulated measurements as actual measurements.",
            },
          ],
          "For a 3.3 V indicator project, the report might include a supply measurement, resistor value check, LED polarity inspection, output observation, acceptance limits, and a final verified result.",
          "Complete the project by testing a low-voltage circuit or analyzing a documented training setup. Submit the circuit diagram, test procedure, at least eight checks, measurement table, fault analysis, pass/fail decisions, and a final report.",
          [
            q("What should be defined before the final project testing begins?", ["Requirements and acceptance criteria", "The conclusion before taking measurements", "Random component replacements", "A pass result for every test"], "Requirements and acceptance criteria", "Requirements and acceptance criteria provide the basis for meaningful test decisions."),
            q("Why should the test procedure be repeatable?", ["So another test run can follow the same defined method", "So measurements do not need to be recorded", "So all components show identical values", "So specifications can be ignored"], "So another test run can follow the same defined method", "Repeatability supports consistent results and meaningful comparisons."),
            q("What should be done after correcting a fault?", ["Repeat relevant tests and check existing functions", "Assume the repair is successful without testing", "Delete the failed measurements", "Change the acceptance limits to force a pass"], "Repeat relevant tests and check existing functions", "Verification confirms the fault is resolved and the repair has not introduced another problem."),
            q("How should simulated measurements be presented?", ["Clearly labeled as simulated data", "As real measurements without disclosure", "As calibrated instrument readings", "Without any explanation"], "Clearly labeled as simulated data", "Reports must distinguish simulated results from measurements actually collected."),
            q("Which item belongs in the final test report?", ["Test method, measurements, acceptance limits, and conclusions", "Only the project title", "Only a list of component brands", "Only a screenshot of the editor"], "Test method, measurements, acceptance limits, and conclusions", "A complete report provides the method, evidence, evaluation, and conclusion.")
          ]
        ),
      ],
    },
  ],
};

export default testingElectronicsCourse;

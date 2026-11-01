
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

const instrumentationCourse: Course = {
  title: "Instrumentation",
  description:
    "A practical, four-week introduction to electrical and electronic measurement, sensors, signal conditioning, calibration, data acquisition, and industrial instrumentation. Includes 16 lessons, 80 quiz questions, weekly assignments, and a final monitoring-system project.",
  project:
    "Build a low-voltage temperature and light monitoring system. Select suitable sensors, explain their operating principles, condition and measure their signals, calibrate the readings against reference values, record the results, and prepare a test report. Use a simulation or a low-voltage educational development board, document measurement uncertainty, and never connect experimental circuits directly to mains electricity.",
  weeks: [
    {
      title: "Week 1: Measurement Fundamentals and Sensors",
      assignment:
        "Prepare a measurement report for temperature, light, and distance. For each quantity, identify a suitable sensor, explain its operating principle, specify its output type, describe at least three possible error sources, and compare the advantages and limitations of two sensor choices.",
      lessons: [
        lesson(
          "inst-w1-l1",
          "Introduction to Instrumentation and Measurement",
          "Instrumentation is the science and practice of measuring physical quantities and converting measurements into information that people or control systems can use. Electronic instrumentation connects real-world quantities such as temperature, pressure, light, and position to electrical signals.",
          [
            {
              heading: "What instrumentation does",
              content:
                "A typical measurement system contains a measurand, a sensor, a transducer or conversion stage, signal-conditioning circuitry, a display or data-acquisition unit, and sometimes a controller. The measurand is the quantity being measured. The sensor responds to it, and subsequent stages convert the response into a useful value. Not every instrument contains every stage as a separate component.",
            },
            {
              heading: "Measurement chain",
              content:
                "Consider a temperature-monitoring system. The temperature is the measurand. A temperature sensor produces a resistance, voltage, or digital reading. Signal conditioning may amplify or filter the signal. A converter or digital interface transfers the measurement to a processor, which displays the temperature and may activate an alarm. Each stage can introduce errors, so the entire chain must be considered.",
            },
            {
              heading: "Open-loop and closed-loop systems",
              content:
                "An open-loop measurement system reports a measurement without automatically changing the process. A closed-loop control system compares the measured value with a desired value and adjusts an actuator when needed. For example, a thermometer simply displays temperature, while a temperature controller may operate a heater based on the measured temperature. Measurement and control are related but distinct functions.",
            },
            {
              heading: "Choosing an instrument",
              content:
                "Selection depends on measurement range, accuracy, resolution, response time, operating environment, electrical interface, cost, and maintenance. A laboratory instrument may prioritize precision, while an industrial monitor may prioritize robustness, isolation, and reliable operation over a long period.",
            },
          ],
          "A sensor produces 0.20 V at one temperature and 0.40 V at a higher temperature. The voltage alone does not establish the temperature. A calibration relationship is required to convert the measured voltage into a temperature estimate.",
          "Draw a block diagram for a room-temperature monitor. Label the measurand, sensor, signal-conditioning stage, processing unit, display, and optional alarm. Explain what could go wrong if any one stage fails.",
          [
            q("What is a measurand?", ["The quantity intended to be measured", "The instrument's battery", "The display enclosure", "The calibration document"], "The quantity intended to be measured", "The measurand is the physical quantity that the measurement process aims to determine."),
            q("What is the main role of a sensor?", ["To respond to a physical quantity", "To store every measurement forever", "To guarantee zero error", "To replace all signal processing"], "To respond to a physical quantity", "A sensor detects a physical condition and produces a corresponding response."),
            q("Which block commonly makes a weak sensor signal easier to use?", ["Signal conditioner", "Mechanical label", "Storage cabinet", "Power switch alone"], "Signal conditioner", "Signal conditioning can amplify, filter, or otherwise adapt a sensor signal."),
            q("Which system automatically adjusts a process using measurement feedback?", ["Closed-loop control system", "Unconnected display", "Passive label", "Open-loop reporting system"], "Closed-loop control system", "A closed-loop system uses feedback to compare the measured state with a desired state."),
            q("Why should the entire measurement chain be evaluated?", ["Errors can arise in multiple stages", "Only the display affects accuracy", "Sensors never drift", "Calibration is unnecessary"], "Errors can arise in multiple stages", "Sensor, wiring, conditioning, conversion, and display stages may all contribute uncertainty or error."),
          ]
        ),
        lesson(
          "inst-w1-l2",
          "Accuracy, Precision, Resolution, and Error",
          "Measurement quality is described using several related but different terms. Understanding these distinctions helps engineers decide whether a reading is trustworthy and whether an instrument is suitable for a task.",
          [
            {
              heading: "Accuracy and precision",
              content:
                "Accuracy describes closeness to an accepted reference value. Precision describes how closely repeated measurements agree with each other. A sensor may repeatedly report almost the same value and still be inaccurate if it has a consistent offset. Good repeatability does not, by itself, prove good accuracy.",
            },
            {
              heading: "Resolution and sensitivity",
              content:
                "Resolution is the smallest change in indication that an instrument can distinguish. Sensitivity describes how much the output changes for a change in input. For a linear sensor, sensitivity is often calculated as output change divided by input change. A device with fine display increments may still be inaccurate or noisy.",
            },
            {
              heading: "Absolute and percentage error",
              content:
                "Absolute error is the measured value minus the reference value, with its sign indicating direction. Its magnitude is the absolute difference. Percentage error is often calculated by dividing the absolute error magnitude by the magnitude of the reference value and multiplying by 100%. Percentage error is unsuitable when the reference is zero and may be misleading when the reference is extremely small.",
            },
            {
              heading: "Random and systematic errors",
              content:
                "Random errors cause readings to vary unpredictably, often because of noise or changing environmental conditions. Systematic errors produce a consistent bias, such as a calibration offset. Repeated measurements can help characterize random variation, while calibration against a suitable reference can reveal systematic bias.",
            },
          ],
          "A reference thermometer reads 25.0 °C while the instrument under test reads 26.0 °C. The signed error is +1.0 °C. The absolute error is 1.0 °C and the absolute percentage error relative to the reference is 4%.",
          "Record five readings from a simulated or safely available sensor. Calculate the mean, range, absolute error against a reference, and percentage error when the reference is nonzero. Explain whether the readings indicate repeatability, accuracy, or both.",
          [
            q("What does accuracy describe?", ["Closeness to a reference value", "Agreement among repeated readings only", "Number of display digits", "Battery capacity"], "Closeness to a reference value", "Accuracy concerns how close a measurement is to an accepted reference."),
            q("What does precision mainly describe?", ["Agreement among repeated measurements", "The physical size of an instrument", "The sensor's color", "The cable length alone"], "Agreement among repeated measurements", "Precision is associated with the closeness of repeated readings."),
            q("A sensor output changes by 2 V when its input changes by 4 units. What is its average sensitivity?", ["0.5 V per unit", "2 V per unit", "4 V per unit", "8 V per unit"], "0.5 V per unit", "Sensitivity is output change divided by input change: 2/4 = 0.5 V per unit."),
            q("Which error type is commonly associated with unpredictable noise?", ["Random error", "Systematic offset only", "Unit conversion error only", "A guaranteed zero error"], "Random error", "Random variation can make repeated measurements differ unpredictably."),
            q("Why can percentage error be misleading at a zero reference value?", ["Division by zero is undefined", "The instrument becomes digital", "Resolution becomes infinite", "The sensor changes type"], "Division by zero is undefined", "Percentage error divides by the reference magnitude, so it cannot be calculated in the usual way when that value is zero."),
          ]
        ),
        lesson(
          "inst-w1-l3",
          "Classification of Sensors and Transducers",
          "Sensors and transducers connect physical phenomena to measurable signals. They can be classified by the energy they require, the form of their output, the physical principle they use, and whether they contact the measured object.",
          [
            {
              heading: "Active and passive sensors",
              content:
                "In common instrumentation terminology, self-generating sensors such as thermocouples can produce an electrical signal from the measured phenomenon. Resistive sensors such as thermistors generally require excitation or a measurement circuit to reveal their resistance. Terminology can vary by textbook, so always check the convention used in a particular course.",
            },
            {
              heading: "Analog and digital outputs",
              content:
                "An analog sensor provides a continuously varying signal over its operating range, such as a voltage proportional to light intensity. A digital sensor provides discrete data, often through a digital communication interface or pulse output. Digital output can simplify transmission, but the sensor may still perform analog sensing internally.",
            },
            {
              heading: "Contact and non-contact measurement",
              content:
                "Contact sensors physically interact with the object or medium being measured. A thermistor attached to a surface is an example. Non-contact devices measure without direct contact, such as an infrared temperature sensor or optical distance sensor. Non-contact measurements can be useful for moving, delicate, or inaccessible targets but may depend on surface properties and viewing conditions.",
            },
            {
              heading: "Transduction principles",
              content:
                "Common principles include resistive, capacitive, inductive, piezoelectric, thermoelectric, optical, and magnetic effects. The right choice depends on the target quantity, range, environmental conditions, bandwidth, required accuracy, and available electronics. A piezoelectric sensor is useful for changing force or vibration but may not be appropriate for measuring a perfectly steady force indefinitely without specialized circuitry.",
            },
          ],
          "A light-dependent resistor changes resistance as illumination changes. A thermocouple produces a voltage related to the temperature difference between its junctions. These devices use different physical principles and require different measurement circuits.",
          "Create a comparison table for a thermistor, thermocouple, light-dependent resistor, capacitive proximity sensor, and optical distance sensor. Include measurand, principle, output, excitation needs, advantages, and limitations.",
          [
            q("Which device commonly changes resistance with temperature?", ["Thermistor", "Speaker", "Fuse holder", "LED alone"], "Thermistor", "A thermistor is a temperature-sensitive resistor."),
            q("Which sensor can generate a voltage from a temperature difference?", ["Thermocouple", "Light-dependent resistor", "Potentiometer", "Capacitor alone"], "Thermocouple", "A thermocouple uses the thermoelectric effect to produce a voltage."),
            q("Which output is an example of an analog signal?", ["A voltage varying continuously with light level", "A fixed serial message only", "A printed label", "A connector shape"], "A voltage varying continuously with light level", "An analog signal varies continuously within its operating range."),
            q("Which is a non-contact measurement example?", ["Infrared temperature measurement", "A thermistor bonded to a surface", "A probe inserted into a liquid", "A contact switch"], "Infrared temperature measurement", "Infrared sensors estimate temperature from emitted radiation without touching the target."),
            q("What is an important factor when selecting a transducer?", ["Operating range and measurement principle", "Only the casing color", "The number of screws alone", "The brand name alone"], "Operating range and measurement principle", "The sensor must match the physical quantity and conditions of the application."),
          ]
        ),
        lesson(
          "inst-w1-l4",
          "Temperature, Light, and Position Sensors",
          "Temperature, illumination, and position are common variables in electronic products and industrial systems. Different sensors convert these variables into resistance, voltage, current, pulses, or digital data.",
          [
            {
              heading: "Temperature sensing",
              content:
                "NTC thermistors generally decrease in resistance as temperature rises, while PTC devices generally increase resistance over their specified operating region. Resistance temperature detectors use the predictable resistance change of a sensing material. Thermocouples generate a small voltage related to a temperature difference and usually need suitable amplification and reference-junction compensation.",
            },
            {
              heading: "Light sensing",
              content:
                "A light-dependent resistor often decreases in resistance as illumination increases. Photodiodes convert incident light into current and can respond quickly when correctly biased. Phototransistors can provide higher output current but may be slower in some configurations. Sensor selection depends on spectral response, sensitivity, speed, ambient light, and required linearity.",
            },
            {
              heading: "Position and distance sensing",
              content:
                "Potentiometers can measure position by producing a variable voltage when used with suitable excitation. Encoders provide pulses or digital position data. Hall-effect sensors detect magnetic fields, while optical and ultrasonic sensors can estimate distance using reflected light or sound. Each method has limitations related to alignment, target material, range, noise, and motion.",
            },
            {
              heading: "Interfaces and practical limits",
              content:
                "A sensor's electrical output must be compatible with the following circuit. Check voltage limits, output impedance, supply requirements, sampling rate, environmental protection, and the manufacturer's recommended circuit. Wiring and grounding matter, particularly when signals are small or the environment contains electrical interference.",
            },
          ],
          "A potentiometer supplied with 3.3 V can provide an adjustable output between approximately 0 V and 3.3 V when wired as a voltage divider. A controller can read this voltage using an analog-to-digital converter and map it to a position estimate after calibration.",
          "Design a sensor-selection sheet for a room monitor that measures temperature and light. Choose a sensor for each variable, explain the output interface, and identify one calibration method and two likely sources of error.",
          [
            q("What normally happens to an NTC thermistor's resistance as temperature increases?", ["It decreases", "It always doubles", "It becomes a perfect conductor", "It is always unchanged"], "It decreases", "NTC means negative temperature coefficient over its specified operating region."),
            q("Which sensor detects light by producing a photocurrent?", ["Photodiode", "Thermistor", "Potentiometer", "Strain gauge"], "Photodiode", "A photodiode converts incident light into an electrical current."),
            q("What does an encoder commonly provide?", ["Pulses or digital position information", "Only a chemical concentration", "A guaranteed temperature reading", "An unchanging resistance in every position"], "Pulses or digital position information", "Encoders translate motion or position into pulses or digital data."),
            q("Why is a sensor calibration curve useful?", ["It relates sensor output to the measured quantity", "It removes the need for wiring", "It guarantees no noise", "It determines the enclosure color"], "It relates sensor output to the measured quantity", "Calibration establishes the relationship between indications and reference values."),
            q("What should be checked before connecting a sensor to a controller?", ["Output voltage and interface compatibility", "Only the cable's color", "Only the sensor's weight", "The computer wallpaper"], "Output voltage and interface compatibility", "Electrical limits and interface requirements help prevent damage and incorrect readings."),
          ]
        ),
      ],
    },
    {
      title: "Week 2: Signal Conditioning and Measurement Circuits",
      assignment:
        "Design and document a low-voltage signal-conditioning chain for a resistive sensor. Include the sensor interface, an appropriate divider or bridge where relevant, an amplifier or buffer if required, a simple filter, and the ADC interface. Show equations, expected signal ranges, component choices, and safe operating limits. Simulation is acceptable.",
      lessons: [
        lesson(
          "inst-w2-l1",
          "Voltage Dividers and Resistive Sensor Interfaces",
          "Many sensors encode a physical quantity as a resistance change. A voltage divider can convert that change into a voltage that is easier to measure with a voltmeter or an analog-to-digital converter.",
          [
            {
              heading: "Voltage-divider operation",
              content:
                "For two series resistors connected across a supply, the voltage across one resistor is determined by the resistor values. If the output is taken across R2, the ideal unloaded relationship is Vout = Vin × R2/(R1 + R2). A sensor can replace one resistor, causing the output to vary with the measured quantity.",
            },
            {
              heading: "Choosing resistor values",
              content:
                "The divider current is approximately Vin/(R1 + R2). Lower resistance values reduce the effects of input loading and some noise sources but consume more current. Higher values reduce current but may make the circuit more sensitive to input leakage, noise, and ADC acquisition requirements. The values should be chosen using the sensor datasheet and the following circuit's input characteristics.",
            },
            {
              heading: "Loading and measurement effects",
              content:
                "A connected measuring device can alter the divider voltage if its input resistance is not sufficiently high. This is called loading. ADC inputs may also require time to charge an internal sampling capacitor. A buffer amplifier or a suitable resistor range can reduce measurement errors, provided the circuit remains stable and within voltage limits.",
            },
            {
              heading: "Sensor polarity and nonlinear response",
              content:
                "Placing a variable sensor in the upper or lower divider position changes the direction in which the output moves as resistance changes. The resulting relationship may not be linear with the physical quantity, especially for thermistors. Calibration or a mathematical conversion may therefore be necessary.",
            },
          ],
          "With Vin = 5 V, R1 = 10 kΩ, and R2 = 10 kΩ, the unloaded output across R2 is 5 × 10/(10 + 10) = 2.5 V. If R2 increases to 20 kΩ while R1 remains 10 kΩ, the output becomes approximately 3.33 V.",
          "Calculate divider outputs for three resistor combinations. Then replace one resistor conceptually with a temperature-dependent sensor and explain how you would map the output voltage to temperature. Keep all proposed voltages within the receiving device's rated input range.",
          [
            q("What is the unloaded divider output across R2?", ["Vin × R2/(R1 + R2)", "Vin × R1 × R2", "R1 + R2 only", "Vin/(R1 − R2)"], "Vin × R2/(R1 + R2)", "The output fraction is determined by the resistor across which the output is measured."),
            q("What is the output for equal resistors across a 6 V supply?", ["3 V", "6 V", "12 V", "0 V in every case"], "3 V", "Equal resistors divide the supply voltage equally in the ideal unloaded circuit."),
            q("What is loading?", ["A connected circuit changes the measured circuit's behavior", "A resistor is given a label", "A sensor is placed in storage", "An instrument is switched off"], "A connected circuit changes the measured circuit's behavior", "Finite input impedance can draw current and alter a divider's output."),
            q("What is one reason to use a buffer amplifier?", ["To reduce loading on the sensor circuit", "To guarantee perfect calibration", "To remove the need for a power supply", "To make every signal digital"], "To reduce loading on the sensor circuit", "A suitably designed buffer provides high input impedance and low output impedance."),
            q("Why may a thermistor divider require calibration?", ["Its voltage-to-temperature relationship may be nonlinear", "All resistors are always identical", "Voltage cannot be measured", "Thermistors produce only digital data"], "Its voltage-to-temperature relationship may be nonlinear", "A conversion curve is often needed to map thermistor resistance or divider voltage to temperature."),
          ]
        ),
        lesson(
          "inst-w2-l2",
          "Wheatstone Bridges and Strain Measurement",
          "Bridge circuits are useful for detecting small changes in resistance. They are commonly used with strain gauges, resistance-based sensors, and precision measurement systems.",
          [
            {
              heading: "Bridge structure",
              content:
                "A Wheatstone bridge has four resistive arms arranged as two voltage dividers. The differential output is the voltage difference between their midpoint nodes. When the ratios of the two resistor pairs are equal, the ideal bridge is balanced and the differential output is zero. A small resistance change unbalances the bridge and produces a measurable output.",
            },
            {
              heading: "Why differential measurement helps",
              content:
                "The bridge output can be much smaller than its supply voltage. A differential amplifier or instrumentation amplifier can amplify the difference between the midpoint voltages while rejecting some common-mode voltage. The amplifier's input range, common-mode range, offset, noise, and gain must be appropriate for the application.",
            },
            {
              heading: "Strain gauges",
              content:
                "A strain gauge changes resistance when stretched or compressed. Its response is often characterized by the gauge factor, which relates fractional resistance change to mechanical strain. Small strain produces a small resistance change, so bridge completion, stable excitation, careful wiring, and amplification are often needed.",
            },
            {
              heading: "Practical considerations",
              content:
                "Temperature changes can alter gauge resistance and lead resistance can affect the measurement. Half-bridge and full-bridge arrangements can improve sensitivity or compensate for selected effects when the gauges are arranged correctly. Excitation must be limited to avoid excessive self-heating, and mechanical mounting strongly affects the result.",
            },
          ],
          "If a bridge is designed so both midpoint voltages are 2.5 V, the ideal differential output is 0 V. If one midpoint becomes 2.51 V while the other remains 2.50 V, the difference is 10 mV and may require amplification.",
          "Draw a bridge and label the four arms, supply, midpoint voltages, and differential output. Explain how a strain-induced resistance change affects balance and why an instrumentation amplifier may be required.",
          [
            q("When is an ideal Wheatstone bridge balanced?", ["When the resistor ratios in the two arms match", "When every resistor is zero", "When the supply is disconnected in every case", "When the output is always at the supply voltage"], "When the resistor ratios in the two arms match", "Equal divider ratios produce equal midpoint voltages and ideally zero differential output."),
            q("What does a strain gauge respond to?", ["Mechanical strain", "Light wavelength only", "Sound speed only", "Battery age only"], "Mechanical strain", "A strain gauge converts mechanical deformation into a resistance change."),
            q("Why is bridge output often amplified?", ["The differential signal may be very small", "The output is always above the supply", "The bridge cannot produce a voltage", "Amplification eliminates every error"], "The differential signal may be very small", "Small resistance changes often produce millivolt-level or smaller outputs."),
            q("What is the role of an instrumentation amplifier in a bridge system?", ["Amplify a small differential signal with high input impedance", "Replace all four bridge arms", "Measure mechanical strain without a sensor", "Guarantee zero temperature drift"], "Amplify a small differential signal with high input impedance", "Instrumentation amplifiers are designed for small differential signals riding on a common-mode voltage."),
            q("What can excessive bridge excitation cause?", ["Sensor self-heating", "Guaranteed infinite sensitivity", "Automatic calibration", "Removal of all wiring effects"], "Sensor self-heating", "Electrical power dissipated in resistive elements can warm the sensor and alter its reading."),
          ]
        ),
        lesson(
          "inst-w2-l3",
          "Operational Amplifiers and Instrumentation Amplifiers",
          "Amplifiers adapt sensor signals to the range and impedance required by later stages. Operational amplifiers can be used for buffering, amplification, filtering, and mathematical operations, while instrumentation amplifiers are particularly useful for small differential signals.",
          [
            {
              heading: "Ideal op-amp model",
              content:
                "An ideal operational amplifier is modeled as having infinite open-loop gain, infinite input impedance, and zero output impedance. Real devices have finite gain, input bias current, offset voltage, limited bandwidth, and restricted input and output ranges. Negative feedback is commonly used to set a predictable closed-loop gain.",
            },
            {
              heading: "Non-inverting and inverting circuits",
              content:
                "A non-inverting amplifier produces an output with the same polarity as its input; its ideal gain is 1 + Rf/Rg for the usual feedback arrangement. An inverting amplifier reverses polarity and has gain −Rf/Rin. Component tolerances, amplifier limitations, and loading affect real performance.",
            },
            {
              heading: "Buffers and differential signals",
              content:
                "A voltage follower has a gain close to one and is used to isolate a sensor from a load. Differential amplifiers respond to the difference between two inputs. Instrumentation amplifiers typically offer high input impedance and good common-mode rejection, which is valuable when measuring bridge outputs or other small signals.",
            },
            {
              heading: "Saturation and real limits",
              content:
                "An amplifier cannot produce arbitrary output voltage. Its output is limited by the supply rails and device specifications. Inputs may also have common-mode limits, and the output may not swing fully to either rail. Before choosing gain, calculate the largest expected sensor signal and verify that the output remains inside the valid range.",
            },
          ],
          "For a non-inverting amplifier with Rf = 30 kΩ and Rg = 10 kΩ, the ideal gain is 1 + 30/10 = 4. An input of 0.2 V ideally produces 0.8 V, provided the amplifier's supply and output range allow it.",
          "Calculate the gain and output of two non-inverting amplifier examples. Then identify what happens if the predicted output exceeds the amplifier's allowed output range. Use simulation or calculations rather than connecting an unverified circuit.",
          [
            q("What is the ideal gain of a non-inverting amplifier?", ["1 + Rf/Rg", "−Rf/Rin", "Rf + Rg only", "Vin × Rf × Rg"], "1 + Rf/Rg", "The standard non-inverting configuration has a closed-loop gain of one plus the feedback-to-ground resistance ratio."),
            q("What is the approximate output of a gain-4 amplifier for a 0.5 V input?", ["2 V", "0.125 V", "4.5 V", "0 V in every case"], "2 V", "Output is gain multiplied by input, assuming the amplifier does not saturate."),
            q("What is a common use of a voltage follower?", ["Buffering a sensor signal", "Increasing voltage gain to infinity", "Changing analog signals into printed text", "Eliminating the power supply"], "Buffering a sensor signal", "A follower provides approximately unity gain while isolating source and load."),
            q("What does amplifier saturation mean?", ["The output reaches a limiting range and cannot follow the requested value", "The sensor becomes perfectly calibrated", "The gain becomes exactly zero in every case", "The circuit no longer needs a supply"], "The output reaches a limiting range and cannot follow the requested value", "Real amplifiers have finite output-voltage limits set by the device and supply."),
            q("Why are instrumentation amplifiers used for bridge sensors?", ["They can amplify small differential signals", "They replace the physical measurand", "They work without electrical power", "They guarantee no noise in every environment"], "They can amplify small differential signals", "Their high input impedance and differential performance suit small bridge outputs."),
          ]
        ),
        lesson(
          "inst-w2-l4",
          "Noise, Filtering, and Isolation",
          "A sensor signal may contain unwanted variations caused by electrical interference, switching circuits, wiring, and the sensor itself. Filtering and appropriate isolation can improve measurement quality, but every processing step must preserve the information needed by the application.",
          [
            {
              heading: "Sources of noise",
              content:
                "Noise can arise from thermal agitation, semiconductor devices, power supplies, electromagnetic coupling, ground loops, long wires, and digital switching. Poor connections can also produce unstable readings. Identify whether the problem is random noise, interference at a particular frequency, a grounding problem, or an actual change in the measurand before choosing a remedy.",
            },
            {
              heading: "Low-pass and high-pass filters",
              content:
                "A low-pass filter passes slower variations and attenuates higher-frequency components. A high-pass filter attenuates slow changes and passes faster components. Band-pass filters retain a selected frequency band, while notch filters suppress a narrow band. The right filter depends on the sensor's useful bandwidth and the unwanted signal.",
            },
            {
              heading: "First-order RC filter",
              content:
                "A simple RC low-pass filter uses a resistor and capacitor. Its ideal cutoff frequency is fc = 1/(2πRC). Frequencies well below cutoff pass with relatively little attenuation, while frequencies above cutoff are progressively reduced. The actual response depends on source impedance, load impedance, component tolerances, and circuit layout.",
            },
            {
              heading: "Isolation and grounding",
              content:
                "Isolation can help prevent unwanted current paths between circuit sections and protect interfaces when designed for the required conditions. Differential wiring, short sensor leads, suitable cable shielding, careful grounding, decoupling capacitors, and separation from switching-current paths can reduce interference. Isolation components must be chosen according to their ratings and application requirements.",
            },
          ],
          "For R = 10 kΩ and C = 0.1 µF, the ideal cutoff is approximately 1/(2π × 10,000 × 0.0000001) = 159 Hz. A temperature sensor changing slowly can often tolerate a much lower cutoff than a vibration sensor.",
          "Calculate the cutoff frequency for two RC combinations. Choose a suitable filter for a slowly changing temperature measurement and explain why the same cutoff may be unsuitable for fast vibration measurements.",
          [
            q("What does a low-pass filter attenuate?", ["Higher-frequency components", "All DC signals in every case", "Only the power supply label", "Every input signal equally"], "Higher-frequency components", "A low-pass filter passes low frequencies more readily than high frequencies."),
            q("What is the ideal first-order RC cutoff formula?", ["1/(2πRC)", "R × C × 2π", "R/C only", "2πR/C"], "1/(2πRC)", "The RC time constant determines the characteristic cutoff frequency."),
            q("Why should filter bandwidth match the application?", ["Excessive filtering can hide useful signal changes", "Filters always improve every measurement", "Bandwidth determines sensor color", "Filtering removes the need for calibration"], "Excessive filtering can hide useful signal changes", "A filter that is too slow can attenuate or delay useful changes."),
            q("Which can help reduce electromagnetic interference in wiring?", ["Appropriate cable routing and shielding", "Long unprotected parallel runs beside switching wires", "Loose connections", "Removing all decoupling capacitors"], "Appropriate cable routing and shielding", "Careful wiring practices can reduce unwanted coupling into sensitive signals."),
            q("What is one purpose of electrical isolation?", ["To interrupt an unwanted direct electrical path between sections", "To guarantee all readings are exact", "To make every signal higher in frequency", "To eliminate the need for system design"], "To interrupt an unwanted direct electrical path between sections", "Isolation can separate circuit grounds or provide a protective interface when correctly designed."),
          ]
        ),
      ],
    },
    {
      title: "Week 3: Calibration and Data Acquisition",
      assignment:
        "Create a calibration and data-acquisition report for a simulated sensor. Use at least five reference points, calculate offset and measurement errors, plot or tabulate the calibration relationship, discuss repeatability and uncertainty, and explain how sampling rate and ADC resolution affect the recorded results.",
      lessons: [
        lesson(
          "inst-w3-l1",
          "Calibration and Reference Standards",
          "Calibration establishes how an instrument's indications relate to reference values. It supports traceability, comparison between instruments, and informed decisions about whether the measurement is fit for its intended purpose.",
          [
            {
              heading: "What calibration establishes",
              content:
                "Calibration compares an instrument with a reference under specified conditions. The result may be a set of corrections, a calibration curve, an uncertainty statement, or a documented relationship between input and indication. Calibration does not automatically adjust the instrument; adjustment is a separate action that may follow the comparison.",
            },
            {
              heading: "Reference standards and traceability",
              content:
                "A reference should be appropriate for the quantity, range, and required uncertainty. Metrological traceability means the result can be related to a recognized reference through a documented chain of calibrations, each contributing uncertainty. A certificate is useful only when its range, conditions, and uncertainty are relevant to the measurement task.",
            },
            {
              heading: "Calibration procedure",
              content:
                "A basic procedure defines the instrument, range, environmental conditions, reference equipment, test points, stabilization time, and acceptance criteria. Record the reference and instrument readings at each point. Calculate errors, investigate unusual results, document any adjustment, and repeat measurements when needed.",
            },
            {
              heading: "As-found and as-left results",
              content:
                "As-found results describe the instrument before an adjustment or repair. As-left results describe it afterward. Keeping both records helps identify drift and verify that corrective work was effective. A calibration interval should reflect stability, use, environment, manufacturer guidance, and the consequences of an incorrect measurement.",
            },
          ],
          "If a reference standard indicates 50.0 °C and the instrument reads 51.2 °C, the indication error is +1.2 °C. A correction based on that point is −1.2 °C, but a single point may not describe behavior over the entire range.",
          "Write a calibration procedure for a temperature instrument with five test points. Include reference equipment, stabilization, data recording, error calculation, acceptance criteria, and a record of any adjustment.",
          [
            q("What does calibration establish?", ["A relationship between indication and reference values", "A guarantee that all future errors are zero", "The instrument's appearance", "The number of users"], "A relationship between indication and reference values", "Calibration characterizes measurement performance relative to a suitable reference."),
            q("Does calibration always adjust the instrument?", ["No, calibration and adjustment are distinct", "Yes, every calibration changes hardware", "Yes, calibration always replaces the sensor", "No, calibration never uses references"], "No, calibration and adjustment are distinct", "Calibration compares and documents behavior; adjustment changes the instrument when needed."),
            q("What is an as-found record?", ["Results obtained before adjustment or repair", "The product advertisement", "A list of spare screws", "A future estimate with no measurements"], "Results obtained before adjustment or repair", "As-found data preserve evidence of performance before intervention."),
            q("Why does reference uncertainty matter?", ["It contributes to the uncertainty of the calibration result", "It guarantees a larger display", "It sets the sensor's color", "It removes the need for documentation"], "It contributes to the uncertainty of the calibration result", "A reference is not perfectly exact, so its uncertainty affects the comparison."),
            q("What should determine a calibration interval?", ["Stability, use, environment, and measurement risk", "Only the instrument's color", "Only the day it was purchased", "A random number unrelated to use"], "Stability, use, environment, and measurement risk", "Calibration frequency should be justified by evidence and the consequences of errors."),
          ]
        ),
        lesson(
          "inst-w3-l2",
          "Calibration Curves, Linearity, and Hysteresis",
          "A calibration curve converts a sensor's output into an estimate of the physical quantity. Studying its shape reveals whether a simple equation is sufficient or a lookup table and nonlinear conversion are needed.",
          [
            {
              heading: "Linear calibration",
              content:
                "For an approximately linear sensor, the relationship can be represented as y = mx + b, where x is the input quantity, y is the measured output, m is sensitivity or slope, and b is the offset. Two points determine a straight line mathematically, but additional points are needed to evaluate how well that line describes the actual instrument over its range.",
            },
            {
              heading: "Linearity and residuals",
              content:
                "Linearity describes how closely a sensor's response follows a specified straight-line relationship. Residuals are differences between observed values and the values predicted by a chosen model. Plotting residuals can reveal curvature, an incorrect model, or an isolated measurement problem that is difficult to notice from the raw readings alone.",
            },
            {
              heading: "Hysteresis",
              content:
                "Hysteresis occurs when the output at a particular input depends on the direction from which that input was approached. For example, a mechanical sensor may indicate slightly different values while an input is increasing and decreasing. Measuring in both directions helps characterize this behavior.",
            },
            {
              heading: "Interpolation and extrapolation",
              content:
                "Interpolation estimates a value between calibrated points and is generally safer when the calibration model is appropriate. Extrapolation predicts outside the calibrated range and can be unreliable because the sensor may behave differently there. Always state the range over which the calibration relationship has been validated.",
            },
          ],
          "Suppose a linear sensor produces 1 V at 10 units and 5 V at 50 units. Its slope is (5 − 1)/(50 − 10) = 0.1 V per unit. The line is V = 0.1x, so a 3 V output corresponds to 30 units under this model.",
          "Use five input-output pairs to estimate a calibration line. Calculate predicted outputs and residuals. Explain how you would test for hysteresis by measuring the same input while increasing and decreasing the input.",
          [
            q("What does the slope of a linear calibration curve represent?", ["Change in output per change in input", "The enclosure height", "The number of readings only", "The supply voltage in every circuit"], "Change in output per change in input", "Slope describes the sensitivity of the chosen linear relationship."),
            q("What is a residual?", ["Observed value minus model-predicted value", "The sensor's serial number", "The reference instrument's color", "The cable's length"], "Observed value minus model-predicted value", "Residuals show how far observations depart from the fitted model."),
            q("What is hysteresis?", ["Output depends on the direction of input change", "Output is always perfectly linear", "The display has more digits", "The supply current is always zero"], "Output depends on the direction of input change", "Hysteresis creates different indications for the same input depending on the approach direction."),
            q("Why is extrapolation risky?", ["Behavior outside the calibrated range may differ", "It always improves accuracy", "It removes uncertainty", "It is identical to taking a reference measurement"], "Behavior outside the calibrated range may differ", "A model verified over one range is not automatically valid beyond it."),
            q("What is a useful way to evaluate a calibration model?", ["Examine residuals across the range", "Inspect only the sensor's color", "Discard every reference value", "Assume all sensors are perfectly linear"], "Examine residuals across the range", "Residual patterns help reveal nonlinearity, bias, or an unsuitable model."),
          ]
        ),
        lesson(
          "inst-w3-l3",
          "Uncertainty, Repeatability, and Significant Digits",
          "No measurement is perfectly exact. Measurement uncertainty expresses the range of values reasonably associated with a result, considering available information about the instrument, reference, method, and environment.",
          [
            {
              heading: "Uncertainty versus error",
              content:
                "Error is the difference between a measured result and a reference value. Uncertainty characterizes doubt about the measurement result. The true error is often unknown because the exact true value is not known. A small displayed error does not prove small uncertainty, and a measurement can be useful even when uncertainty is not zero.",
            },
            {
              heading: "Type A and Type B evaluation",
              content:
                "Type A uncertainty evaluation uses statistical analysis of repeated observations. Type B evaluation uses other information, such as instrument specifications, calibration certificates, resolution, or prior technical knowledge. These categories describe evaluation methods rather than automatically identifying a particular error as random or systematic.",
            },
            {
              heading: "Combining uncertainty",
              content:
                "When uncertainty contributions are independent and expressed as standard uncertainties, a common combination method is the root-sum-square: the square root of the sum of their squares. This method requires suitable assumptions. Correlated contributions and complex measurement models need more careful treatment, and uncertainty should be propagated through calculations when the final result depends on several measured quantities.",
            },
            {
              heading: "Reporting results",
              content:
                "Report the measured value with suitable units and an uncertainty statement where required. Avoid reporting many digits unsupported by the instrument and method. Rounding should not hide meaningful uncertainty, and calculations should retain enough intermediate precision before the final result is rounded.",
            },
          ],
          "If two independent standard uncertainty contributions are 0.3 °C and 0.4 °C, their combined standard uncertainty is approximately √(0.3² + 0.4²) = 0.5 °C. This assumes independence and comparable uncertainty definitions.",
          "Prepare an uncertainty budget for a simulated temperature measurement. Include repeatability, instrument resolution, reference uncertainty, and environmental effects. State assumptions and report the result with appropriate units and rounding.",
          [
            q("What does measurement uncertainty describe?", ["Doubt associated with a measurement result", "The color of a measuring device", "The exact true error in every case", "The number of buttons on the instrument"], "Doubt associated with a measurement result", "Uncertainty characterizes the range of values reasonably attributable to the measured quantity."),
            q("What is an example of Type A evaluation?", ["Statistical analysis of repeated measurements", "Reading a device's color", "Choosing a random number", "Ignoring every measurement"], "Statistical analysis of repeated measurements", "Type A evaluation uses statistical methods applied to observed data."),
            q("Under independence assumptions, how are standard uncertainty contributions commonly combined?", ["By root-sum-square", "By multiplying all values", "By selecting the largest digit only", "By subtracting every contribution"], "By root-sum-square", "Independent standard uncertainties are commonly combined using the square root of the sum of their squares."),
            q("Why should unsupported extra digits be avoided?", ["They imply more precision than the measurement supports", "They automatically improve accuracy", "They remove calibration needs", "They guarantee zero uncertainty"], "They imply more precision than the measurement supports", "Reported digits should be consistent with the instrument and uncertainty."),
            q("What should accompany a reported measurement?", ["A suitable unit", "Only an unexplained number", "An invented reference value", "A claim of perfect accuracy"], "A suitable unit", "Units identify the physical quantity scale and are essential for interpreting results."),
          ]
        ),
        lesson(
          "inst-w3-l4",
          "ADC Resolution, Sampling, and Data Acquisition",
          "Data acquisition converts sensor information into a digital record. It includes input interfacing, sampling, analog-to-digital conversion, timing, storage, and software that interprets the collected values.",
          [
            {
              heading: "Analog-to-digital conversion",
              content:
                "An ADC maps an analog input voltage to one of a finite number of digital codes. An ideal N-bit converter has 2^N possible codes. Its nominal voltage step is often approximated as full-scale range divided by 2^N, though exact endpoint conventions depend on the converter. Reference accuracy, noise, linearity, and input circuitry also affect the final measurement.",
            },
            {
              heading: "Sampling rate",
              content:
                "Sampling records a signal at discrete time intervals. Slowly changing temperature may need only a low sampling rate, while vibration or rapidly changing electrical signals need faster sampling. For a band-limited signal, the sampling rate must be greater than twice the highest frequency component of interest to satisfy the basic Nyquist condition, and practical systems often need additional margin and anti-alias filtering.",
            },
            {
              heading: "Aliasing and anti-alias filters",
              content:
                "Aliasing occurs when high-frequency signal content is represented incorrectly as lower-frequency content because sampling is insufficient. An analog low-pass filter before the ADC can reduce frequencies that would otherwise alias into the measurement band. A digital filter applied after sampling cannot undo aliasing that has already occurred.",
            },
            {
              heading: "Data quality and storage",
              content:
                "A useful data record includes the measured value, unit, timestamp, sensor identity, calibration information, sampling configuration, and relevant environmental conditions. Software should handle invalid codes, communication failures, missing samples, and out-of-range readings. Data should be stored in a format that supports later analysis without confusing units or time bases.",
            },
          ],
          "An ideal 10-bit ADC with a 0–5 V input span has 1024 codes. The nominal step is approximately 5/1024 = 4.88 mV per code. This is quantization resolution, not a guarantee of 4.88 mV absolute accuracy.",
          "Compare 8-bit, 10-bit, and 12-bit ADCs over a 0–3.3 V range. Calculate nominal step sizes, select a reasonable sampling rate for a slow temperature sensor, and explain how you would prevent aliasing in a faster measurement.",
          [
            q("How many possible codes does an ideal N-bit ADC provide?", ["2^N", "N²", "2N", "N + 1 only"], "2^N", "An N-bit converter represents 2 raised to the power N distinct binary codes."),
            q("What is the nominal step size of a 10-bit ADC over 0–5 V using the common range/2^N approximation?", ["About 4.88 mV", "About 50 V", "About 0.5 V", "Exactly 5 V per code"], "About 4.88 mV", "Five volts divided by 1024 codes is approximately 4.88 millivolts per code."),
            q("What is aliasing?", ["Incorrect representation of frequency content due to insufficient sampling", "A calibration certificate", "A type of sensor enclosure", "A method of increasing ADC bit count"], "Incorrect representation of frequency content due to insufficient sampling", "Sampling too slowly can make high-frequency content appear at an incorrect lower frequency."),
            q("Where should an anti-alias filter normally be placed?", ["Before the ADC", "Only after all digital processing", "Inside a printed report", "After the measurement is discarded"], "Before the ADC", "The analog filter reduces unwanted frequency content before sampling."),
            q("Which information improves the usefulness of a recorded measurement?", ["Timestamp, unit, and calibration context", "Only an unexplained number", "A random filename alone", "Only the computer's wallpaper"], "Timestamp, unit, and calibration context", "Context allows measurements to be interpreted, compared, and traced later."),
          ]
        ),
      ],
    },
    {
      title: "Week 4: Industrial Instrumentation and Project",
      assignment:
        "Create a complete design and validation report for a low-voltage monitoring system. Include a block diagram, sensor selection, signal conditioning, ADC or digital interface, calibration table, error analysis, a safe test plan, sample data, fault-handling behavior, and recommendations for improving reliability.",
      lessons: [
        lesson(
          "inst-w4-l1",
          "Industrial Sensors and Process Measurement",
          "Industrial instrumentation measures process variables and provides information needed for monitoring, quality control, safety, and automation. Reliable design considers not only sensor accuracy but also installation, maintenance, environmental conditions, and signal transmission.",
          [
            {
              heading: "Common process variables",
              content:
                "Temperature, pressure, flow, level, humidity, speed, and position are widely measured process variables. A sensor is selected for the required range, material compatibility, response time, accuracy, and environment. For example, a liquid-level sensor must suit the vessel, liquid properties, installation arrangement, and expected operating conditions.",
            },
            {
              heading: "Transmitter functions",
              content:
                "A transmitter converts a sensor measurement into a standardized signal suitable for transmission to a controller or monitoring system. Depending on the system, signals may use voltage, current, pulses, or digital communication. Standardization simplifies integration, but wiring limits, grounding, isolation, configuration, and fault detection still require attention.",
            },
            {
              heading: "Current-loop concepts",
              content:
                "Industrial current loops are widely used because current signaling can be less sensitive to voltage drop along a suitable cable than a simple voltage signal. A 4–20 mA loop commonly represents the lower and upper measurement limits with 4 mA and 20 mA. The live zero allows some fault conditions to be distinguished from the valid lower-range value, depending on the transmitter and system's configured fault behavior.",
            },
            {
              heading: "Installation and maintenance",
              content:
                "Sensor placement affects representativeness and response time. Incorrect insertion depth, poor thermal contact, vibration, contamination, moisture, and cable damage can degrade measurements. Maintenance plans should include visual inspection, functional checks, calibration when appropriate, and clear documentation of changes.",
            },
          ],
          "For a 4–20 mA transmitter representing 0–100 units, an ideal 12 mA output represents 50 units: (12 − 4)/(20 − 4) × 100 = 50 units.",
          "Design a block diagram for a process temperature monitor. Explain the roles of sensor, transmitter, controller, display, alarm, and communication link. Include one example of a fault that should trigger a diagnostic message.",
          [
            q("What is a transmitter's common role?", ["Convert a sensor measurement to a suitable transmission signal", "Replace all calibration records", "Eliminate the physical sensor", "Guarantee perfect process conditions"], "Convert a sensor measurement to a suitable transmission signal", "A transmitter adapts the sensor measurement for reliable communication with monitoring or control equipment."),
            q("What are the nominal endpoints of a common 4–20 mA measurement range?", ["4 mA and 20 mA", "0 mA and 4 mA only", "20 A and 40 A", "4 V and 20 V in every system"], "4 mA and 20 mA", "The standard current range uses 4 mA and 20 mA to represent its configured lower and upper limits."),
            q("What does a live zero help with?", ["Distinguishing some fault conditions from a valid low reading", "Guaranteeing no wiring faults", "Removing the transmitter", "Eliminating the need for a configured range"], "Distinguishing some fault conditions from a valid low reading", "A nonzero lower-range signal can help identify certain faults, depending on the system design."),
            q("Why is sensor installation important?", ["Placement affects representativeness and response", "Location never affects measurement", "Installation determines the number of ADC bits", "It replaces calibration"], "Placement affects representativeness and response", "Poor contact, unsuitable position, and environmental effects can distort a measurement."),
            q("What should a maintenance plan include?", ["Inspection, functional checks, and appropriate records", "Only repainting the enclosure", "Deleting all previous readings", "Changing settings without documentation"], "Inspection, functional checks, and appropriate records", "Documented maintenance helps identify drift, faults, and changes over time."),
          ]
        ),
        lesson(
          "inst-w4-l2",
          "Industrial Communication and Control Interfaces",
          "Measured values often travel from field instruments to controllers, computers, or supervisory systems. Understanding signal interfaces and communication basics helps engineers connect devices without confusing electrical signaling with the data protocol.",
          [
            {
              heading: "Analog and digital interfaces",
              content:
                "Analog interfaces communicate a value through a continuously varying electrical quantity, such as voltage or current. Digital interfaces encode information into discrete data. Analog signals may be straightforward to interpret but can be affected by noise and scaling errors; digital communication can include addressing and error detection but depends on correct configuration and protocol compatibility.",
            },
            {
              heading: "Serial communication concepts",
              content:
                "Serial communication sends bits in sequence. UART commonly uses transmit and receive lines with agreed baud rate, data bits, parity configuration, and stop bits. SPI uses a clock and data lines with a chip-select arrangement, while I2C uses shared clock and data lines with addressing. Each interface has its own electrical and protocol requirements.",
            },
            {
              heading: "Industrial buses and networks",
              content:
                "Industrial communication systems connect sensors, controllers, and supervisory software. The right network depends on distance, speed, topology, noise environment, device support, and required reliability. A protocol's name alone does not establish compatibility; physical-layer requirements, addressing, timing, and data formats must also match.",
            },
            {
              heading: "Scaling and diagnostics",
              content:
                "Raw digital values often need scaling before display. For example, a count range may map to a temperature range according to a documented formula. Systems should detect missing communication, invalid values, stale timestamps, and out-of-range readings. A displayed value should not silently appear trustworthy when its underlying data are unavailable or old.",
            },
          ],
          "If a sensor's digital count spans 0–1000 and is configured to represent 0–100 °C, a count of 250 maps to 25 °C under a simple linear scaling model. This mapping must be verified against the actual device configuration.",
          "Write a simple interface specification for a sensor connected to a microcontroller. Include the physical interface, electrical levels, data format, scaling formula, sampling interval, and behavior when communication fails.",
          [
            q("What is UART?", ["A serial communication interface", "A temperature unit", "A calibration standard", "A type of strain gauge"], "A serial communication interface", "UART transfers serial data using configured timing and frame parameters."),
            q("Which two lines are central to basic I2C signaling?", ["Clock and data", "Power and enclosure", "Two analog temperature outputs only", "Display and alarm"], "Clock and data", "I2C uses a serial clock line and a serial data line, commonly shared among addressed devices."),
            q("Why must digital scaling be documented?", ["Raw counts do not inherently identify the physical unit", "Scaling changes the sensor's color", "All digital values are already degrees Celsius", "Documentation eliminates every fault"], "Raw counts do not inherently identify the physical unit", "The mapping from code to physical quantity depends on the device and configuration."),
            q("What is one useful communication diagnostic?", ["Detecting stale or missing data", "Ignoring timestamps", "Assuming every message is valid", "Removing device addresses"], "Detecting stale or missing data", "Diagnostics help prevent unavailable or outdated readings from being treated as current."),
            q("What determines whether two devices can communicate?", ["Compatible electrical interfaces and protocol settings", "Only matching enclosure sizes", "Only the same product color", "The user's desktop wallpaper"], "Compatible electrical interfaces and protocol settings", "Both physical signaling and protocol configuration must be compatible."),
          ]
        ),
        lesson(
          "inst-w4-l3",
          "Fault Diagnosis, Safety, and Reliability",
          "A good instrumentation system should detect failures, avoid misleading displays, and allow maintenance staff to identify likely causes. Safe testing and clear fault-handling rules are as important as obtaining a normal reading.",
          [
            {
              heading: "A structured troubleshooting method",
              content:
                "Start by describing the symptom and checking the measurement range, configuration, power status, connections, and recent changes. Compare the suspect reading with an independent reference when possible. Trace the signal through the measurement chain one stage at a time. Change one factor at a time and document the result instead of replacing parts without evidence.",
            },
            {
              heading: "Common fault patterns",
              content:
                "A fixed output can indicate a disconnected sensor, a saturated amplifier, a stuck digital value, or an input outside its range. Excessive noise can arise from loose connections, interference, grounding, or a failing component. A drifting reading may be caused by temperature effects, sensor aging, contamination, supply variation, or calibration changes. Symptoms narrow the search but rarely prove a single cause by themselves.",
            },
            {
              heading: "Fail-safe behavior",
              content:
                "A system should distinguish valid measurements from invalid, missing, or stale data. Depending on the application, a fault may trigger an alarm, mark the value invalid, or place a controller into a defined safe state. The appropriate response is application-specific and must be determined through risk assessment rather than assumed to be the same for every system.",
            },
            {
              heading: "Safe bench practice",
              content:
                "Use low-voltage, current-limited educational circuits when learning measurement techniques. Check component ratings and polarity before powering a circuit. Disconnect power before rewiring, avoid short circuits, and never probe exposed mains wiring as a beginner exercise. Industrial or hazardous equipment requires suitable training, approved procedures, and qualified supervision.",
            },
          ],
          "If a temperature display suddenly reads an impossible value, check whether the sensor is connected, the ADC value is within range, the conversion formula is correct, and the reading is recent. Mark the value invalid while investigating rather than presenting it as a reliable temperature.",
          "Create a troubleshooting decision tree for a sensor that produces an unstable output. Include wiring checks, supply checks, independent comparison, noise investigation, and a clear rule for marking the measurement invalid.",
          [
            q("What is a good first troubleshooting step?", ["Describe the symptom and verify basic configuration and connections", "Replace every component immediately", "Ignore the recorded symptom", "Change many settings at once"], "Describe the symptom and verify basic configuration and connections", "A structured investigation begins with the symptom, setup, power, and connections."),
            q("What can a fixed sensor reading indicate?", ["Several possible faults that require investigation", "Guaranteed perfect accuracy", "A need to remove every filter", "A proof that the system is safe"], "Several possible faults that require investigation", "Disconnection, saturation, stale data, and out-of-range conditions can produce fixed values."),
            q("What should a system do with a known invalid reading?", ["Identify it as invalid and follow the defined fault response", "Always display it as correct", "Delete the calibration procedure", "Treat it as a guaranteed reference value"], "Identify it as invalid and follow the defined fault response", "Fault handling prevents unreliable data from being mistaken for valid measurements."),
            q("Why is changing one factor at a time useful?", ["It helps identify which change affects the symptom", "It guarantees the first guess is correct", "It removes the need for measurements", "It makes all sensors linear"], "It helps identify which change affects the symptom", "Controlled troubleshooting preserves evidence about cause and effect."),
            q("Which practice is appropriate for a beginner's electronics experiment?", ["Use a low-voltage, current-limited setup", "Probe exposed mains wiring", "Rewire powered circuits without checking", "Ignore component ratings"], "Use a low-voltage, current-limited setup", "Low-voltage educational circuits reduce hazards and make controlled testing easier."),
          ]
        ),
        lesson(
          "inst-w4-l4",
          "Instrumentation System Integration and Final Project",
          "The final lesson brings sensor selection, conditioning, calibration, digital measurement, communication, and fault handling together. A complete system is more than a sensor connected to a display: it is a documented measurement chain whose behavior can be tested.",
          [
            {
              heading: "Define requirements first",
              content:
                "Specify the measured quantities, operating range, acceptable error, response time, environment, update rate, power budget, and expected user interface. Define what should happen when a sensor fails or a reading leaves the valid range. These requirements guide component choices and provide objective criteria for testing.",
            },
            {
              heading: "Build a traceable measurement chain",
              content:
                "Document the sensor and its output, wiring, signal conditioning, ADC or digital interface, conversion formula, and display. Record units and calibration information alongside the measurement. Where a conversion uses assumptions or a limited calibration range, state those limitations clearly.",
            },
            {
              heading: "Verification and validation",
              content:
                "Verification asks whether the system was built according to its specification. Validation asks whether it meets the intended user's needs. Test known inputs across the operating range, repeat selected tests, check response time, examine noisy or missing data, and confirm that the displayed units and alarms behave correctly.",
            },
            {
              heading: "Communicate engineering results",
              content:
                "A useful project report contains a block diagram, design choices, calculations, bill of materials, safe test procedure, calibration results, limitations, and recommendations. Include both successful tests and failures. Engineering documentation should allow another person to reproduce the tests and understand the evidence supporting the conclusions.",
            },
          ],
          "For a room monitor, the design may use a temperature sensor and a light sensor, a low-voltage controller, calibrated conversion functions, periodic sampling, and a display. The project report should specify how the readings are checked and what the system shows if a sensor is disconnected.",
          "Complete the final project described below. Submit a block diagram, sensor-selection rationale, circuit or simulation, calculations, calibration table, sample data, uncertainty discussion, fault tests, and a conclusion describing what works and what should be improved.",
          [
            q("What should be defined before selecting project components?", ["Measurement requirements and acceptance criteria", "Only the display font", "The final report's page color", "A random component list"], "Measurement requirements and acceptance criteria", "Requirements establish the range, performance, interface, and behavior the design must meet."),
            q("What is verification?", ["Checking that the system meets its specified design requirements", "Assuming users like the product", "Changing all components at random", "Ignoring the test results"], "Checking that the system meets its specified design requirements", "Verification evaluates conformance to the specification."),
            q("What is validation?", ["Checking whether the system meets its intended purpose", "Counting wires without considering requirements", "Measuring only the supply voltage", "Removing all user needs"], "Checking whether the system meets its intended purpose", "Validation asks whether the system is suitable for its intended use."),
            q("Why should fault cases be tested?", ["To check that the system handles invalid or missing measurements appropriately", "To prove faults can never happen", "To avoid recording results", "To remove the need for a sensor"], "To check that the system handles invalid or missing measurements appropriately", "Testing faults helps verify diagnostic messages and safe responses."),
            q("What makes a project report reproducible?", ["Documented setup, procedure, calculations, and results", "Only a final screenshot", "Unexplained numbers", "Undocumented component changes"], "Documented setup, procedure, calculations, and results", "A reproducible report provides enough information for another person to repeat the work."),
          ]
        ),
      ],
    },
  ],
};

export default instrumentationCourse;

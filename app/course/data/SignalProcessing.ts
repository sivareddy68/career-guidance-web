
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

const question = (
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

const signalProcessingCourse: Course = {
  title: "Signal Processing",
  description:
    "A structured four-week course covering continuous and discrete signals, linear systems, convolution, sampling, digital filters, Fourier analysis, the DFT, FFT, and practical DSP applications. Includes 16 lessons, 80 quiz questions, weekly assignments, and a final project.",
  project:
    "Build a digital signal-processing application that generates or imports a low-voltage sensor signal, samples it, displays the raw waveform, applies a digital filter, and compares its frequency content before and after filtering. Document the sampling rate, filter design, calculations, test results, limitations, and possible improvements. Simulation or recorded sample data may be used.",
  weeks: [
    {
      title: "Week 1: Signals and Systems Fundamentals",
      assignment:
        "Prepare a signal-analysis workbook containing examples of continuous and discrete signals, unit-step and impulse sequences, sinusoidal signals, basic system properties, and discrete-time convolution. Show equations, intermediate calculations, sketches, and interpretations of the results.",
      lessons: [
        lesson(
          "sp-w1-l1",
          "Introduction to Signals and Signal Processing",
          "Signal processing is the analysis and manipulation of signals to extract information, reduce unwanted components, or prepare data for a particular application. Signals may represent sound, temperature, pressure, images, communication waveforms, or biomedical measurements.",
          [
            {
              heading: "What is a signal?",
              content:
                "A signal is a function that represents information about a physical phenomenon or a data source. A continuous-time signal is written as x(t), where t can take any real value in the specified interval. A discrete-time signal is written as x[n], where n is an integer sample index. The distinction describes the time axis, not whether the signal's amplitude is necessarily continuous or discrete.",
            },
            {
              heading: "Analog and digital signals",
              content:
                "An analog signal commonly varies continuously in time and amplitude. A digital representation stores values using a finite set of numerical codes at discrete sample times. Converting an analog signal into digital data generally involves sampling, quantization, and binary encoding. Digital processing enables repeatable algorithms, storage, and software-based analysis, but its quality depends on the sensor, sampling process, quantization, and numerical implementation.",
            },
            {
              heading: "Why signal processing is useful",
              content:
                "Signal processing can suppress noise, estimate frequency, detect events, compress data, recover information, and extract useful features. Audio systems use it for equalization and noise reduction. Communications use it for modulation and demodulation. Instrumentation uses it to smooth sensor readings, detect faults, and estimate physical quantities from sampled data.",
            },
            {
              heading: "The DSP processing chain",
              content:
                "A typical digital signal-processing chain contains a signal source, an analog front end, an anti-alias filter, an ADC, a digital processing algorithm, and an output or storage stage. Some applications add a DAC and reconstruction filter. The exact architecture depends on whether the goal is analysis, control, communication, audio playback, or measurement.",
            },
          ],
          "A temperature sensor may produce a changing voltage. An ADC samples the voltage, software converts the samples into temperature values, and a low-pass filter can reduce rapid fluctuations before the result is displayed.",
          "Draw a block diagram for a digital audio or sensor-monitoring system. Identify which stages are analog and which are digital, and explain one possible source of error at each stage.",
          [
            question("What does a signal represent?", ["Information about a phenomenon or data source", "Only a circuit's physical size", "Only a power-supply rating", "A component's color"], "Information about a phenomenon or data source", "A signal represents information that can be measured, transmitted, stored, or processed."),
            question("How is a discrete-time signal commonly written?", ["x[n]", "x(t) only", "R/L", "V = IR only"], "x[n]", "The integer index n identifies samples in a discrete-time sequence."),
            question("Which operation converts a continuous-time signal into values at selected time instants?", ["Sampling", "Amplification alone", "Enclosure design", "Cable labeling"], "Sampling", "Sampling measures or records the signal at discrete time instants."),
            question("What is a common purpose of digital signal processing?", ["Reducing noise or extracting useful information", "Guaranteeing every sensor is exact", "Eliminating all physical sensors", "Making every signal constant"], "Reducing noise or extracting useful information", "DSP algorithms transform sampled data to improve usability or reveal information."),
            question("What is the role of an ADC?", ["Convert an analog input into digital codes", "Convert software into a sensor", "Store mechanical energy", "Always remove all noise"], "Convert an analog input into digital codes", "An ADC quantizes its input and represents it using digital output codes."),
          ]
        ),
        lesson(
          "sp-w1-l2",
          "Classification and Basic Properties of Signals",
          "Signal classification helps engineers select suitable analysis techniques. Important categories include periodic and aperiodic, deterministic and random, even and odd, energy and power, and real and complex signals.",
          [
            {
              heading: "Periodic and aperiodic signals",
              content:
                "A continuous-time periodic signal satisfies x(t + T) = x(t) for a positive period T. A discrete-time periodic sequence satisfies x[n + N] = x[n] for a positive integer period N. A signal that does not repeat in this manner is aperiodic. A periodic signal may have more than one period; the fundamental period is the smallest positive period when it exists.",
            },
            {
              heading: "Deterministic and random signals",
              content:
                "A deterministic signal is described by a known mathematical rule or fully specified sequence. A random signal has uncertainty and is often characterized statistically using quantities such as mean, variance, autocorrelation, and probability distributions. Real measurements may combine a deterministic component, such as a tone, with random noise.",
            },
            {
              heading: "Even and odd signals",
              content:
                "A continuous signal is even if x(t) = x(−t), and odd if x(t) = −x(−t). For sequences, the equivalent relationships use x[n] and x[−n]. Any signal can be decomposed into an even part and an odd part using x_even(t) = [x(t) + x(−t)]/2 and x_odd(t) = [x(t) − x(−t)]/2. These properties are useful in Fourier analysis.",
            },
            {
              heading: "Energy and power",
              content:
                "For a continuous signal, total energy is often defined as the integral of |x(t)|² over time. Average power is the long-term average of |x(t)|². Discrete-time definitions use sums. Finite-energy signals have finite total energy and typically zero long-term average power; nonzero periodic signals typically have infinite total energy but finite average power. These are mathematical classifications, not claims about electrical energy delivered by every physical system.",
            },
          ],
          "For x(t) = cos(2πt), the signal repeats every 1 second, so its fundamental period is 1 s. Since cos(−2πt) = cos(2πt), it is also an even signal.",
          "Classify a constant signal, a cosine wave, a single impulse, and a measured noisy waveform. For each, explain which properties can be established from the definition and which require more information.",
          [
            question("What condition defines a continuous-time periodic signal?", ["x(t + T) = x(t) for a positive period T", "x(t) must always equal zero", "Its amplitude must always increase", "It must contain random noise"], "x(t + T) = x(t) for a positive period T", "Periodicity means the signal repeats after a fixed positive time interval."),
            question("What is the even-signal condition?", ["x(t) = x(−t)", "x(t) = −x(t)", "x(t) = t² in every case", "x(t) must be complex"], "x(t) = x(−t)", "An even signal is symmetric about the vertical axis in its time representation."),
            question("Which quantity describes the average squared magnitude over time?", ["Average power", "Sampling index only", "Phase alone", "ADC bit count"], "Average power", "Average power is based on the long-term average of squared signal magnitude."),
            question("Which is commonly associated with a random signal?", ["Statistical characterization", "A fully known repeating pattern in every case", "A guaranteed zero variance", "No uncertainty at all"], "Statistical characterization", "Random signals are often described using probability and statistical measures."),
            question("What is the even component of x(t)?", ["[x(t) + x(−t)]/2", "[x(t) − x(−t)]/2", "x(t) × t only", "The derivative of every signal"], "[x(t) + x(−t)]/2", "Averaging a signal with its time-reversed version extracts its even component."),
          ]
        ),
        lesson(
          "sp-w1-l3",
          "Elementary Signals: Impulse, Step, Ramp, and Exponential",
          "Elementary signals provide building blocks for understanding complex waveforms and system responses. Engineers use them to describe switching events, sudden inputs, gradual changes, and transient behavior.",
          [
            {
              heading: "Unit impulse",
              content:
                "The discrete-time unit impulse δ[n] equals 1 at n = 0 and 0 at every other integer index. Shifting it produces δ[n − k], which is nonzero at n = k. An impulse sequence is useful for identifying a discrete-time linear time-invariant system's impulse response. The continuous-time Dirac impulse is an idealized generalized function with unit integral rather than an ordinary finite-height waveform.",
            },
            {
              heading: "Unit step",
              content:
                "The discrete unit step u[n] is zero for n < 0 and one for n ≥ 0 under the common convention. It models a signal that switches on at a selected instant. A shifted step u[n − k] turns on at index k. Differences of shifted steps can describe finite-duration pulses.",
            },
            {
              heading: "Ramp and exponential signals",
              content:
                "A discrete ramp may be defined as r[n] = n u[n]. It begins at zero and increases linearly for nonnegative n. An exponential sequence x[n] = a^n u[n] grows when |a| > 1, decays when 0 < |a| < 1, and has special alternating behavior when a is negative. The unit-step factor limits the sequence to the chosen time region.",
            },
            {
              heading: "Sinusoids and phase",
              content:
                "A sinusoid can be represented as x(t) = A cos(2πft + φ), where A is amplitude, f is frequency, and φ is phase. Frequency determines how rapidly the waveform repeats; phase determines its alignment relative to a reference. Sinusoids are fundamental in system analysis because linear time-invariant systems respond to them at the same frequency, although amplitude and phase may change.",
            },
          ],
          "For x[n] = (0.5)^n u[n], the first four samples at n = 0, 1, 2, 3 are 1, 0.5, 0.25, and 0.125. The sequence decays because the magnitude of the base is less than one.",
          "Write the first six samples of u[n], δ[n], n u[n], and (0.8)^n u[n]. Sketch each sequence and describe how shifting it by three samples changes its location.",
          [
            question("At which index is δ[n] equal to one?", ["n = 0", "Every index", "Only n = 10", "No index"], "n = 0", "The discrete unit impulse is one at zero and zero elsewhere."),
            question("What does u[n − 3] do under the usual step convention?", ["Turns on at n = 3", "Turns on at n = −3 only", "Remains zero for every n", "Oscillates at every sample"], "Turns on at n = 3", "The shift delays the unit step until index three."),
            question("What is the value of (0.5)^2?", ["0.25", "0.5", "1", "2"], "0.25", "Squaring 0.5 gives 0.25, illustrating exponential decay."),
            question("Which parameter controls a sinusoid's cycles per second?", ["Frequency", "Phase alone", "DC offset alone", "Sample index origin"], "Frequency", "Frequency is measured in hertz and specifies cycles per second."),
            question("What does phase describe?", ["Relative position within a cycle", "Only the signal's maximum voltage", "The ADC's number of bits", "The number of files saved"], "Relative position within a cycle", "Phase describes the sinusoid's angular displacement relative to a reference."),
          ]
        ),
        lesson(
          "sp-w1-l4",
          "Systems, Linearity, and Time Invariance",
          "A system transforms an input signal into an output signal. Testing system properties helps determine whether powerful tools such as convolution and frequency-response analysis can be applied.",
          [
            {
              heading: "Input-output description",
              content:
                "A system can be represented as y = T{x}, where T denotes the operation applied to input x to produce output y. Systems may be described by equations, block diagrams, algorithms, or measured responses. Examples include amplifiers, filters, communication channels, and software that converts sensor counts into physical units.",
            },
            {
              heading: "Linearity",
              content:
                "A system is linear if it satisfies superposition. For inputs x1 and x2 and constants a and b, T{a x1 + b x2} must equal aT{x1} + bT{x2}. This includes additivity and scaling. Saturation, clipping, and many nonlinear sensor characteristics violate linearity over at least part of their operating range.",
            },
            {
              heading: "Time invariance",
              content:
                "A system is time-invariant if delaying the input produces the same delay in the output, with no other change. In discrete time, if input x[n] produces y[n], input x[n − k] should produce y[n − k]. A system whose behavior changes according to the clock time or sample index may be time-varying.",
            },
            {
              heading: "Causality and stability",
              content:
                "A causal system does not depend on future input values. A system is BIBO stable if every bounded input produces a bounded output. These properties are important for real-time processing. For example, an algorithm that needs future samples may be useful for offline analysis but introduces latency or requires buffering when used in a real-time application.",
            },
          ],
          "For y[n] = 2x[n], the system is linear and time-invariant. For y[n] = x[n]², the system is generally nonlinear because squaring does not satisfy superposition.",
          "Test y[n] = 3x[n] + 2, y[n] = x[n]², and y[n] = x[n] + x[n − 1] for linearity, time invariance, causality, and stability. Show the reasoning for each property.",
          [
            question("What principle defines a linear system?", ["Superposition", "Clipping every input", "Changing behavior with time in every case", "Ignoring the input"], "Superposition", "Linearity requires additivity and scaling to hold together."),
            question("What does time invariance mean?", ["A time shift in the input produces the same shift in the output", "The output is always constant", "The system has no input", "The signal must be random"], "A time shift in the input produces the same shift in the output", "Time invariance means the system's rule does not depend on absolute time."),
            question("Which system is generally nonlinear?", ["y[n] = x[n]²", "y[n] = 2x[n]", "y[n] = x[n] + x[n − 1]", "y[n] = −x[n]"], "y[n] = x[n]²", "Squaring does not satisfy the superposition property for arbitrary inputs."),
            question("What does causality require?", ["No dependence on future input values", "Dependence on all future values", "No response to any input", "An infinite sampling rate"], "No dependence on future input values", "A causal system uses present and past inputs, not future values."),
            question("What is BIBO stability?", ["Bounded inputs produce bounded outputs", "Every output is zero", "Every system has infinite gain", "Inputs must be periodic"], "Bounded inputs produce bounded outputs", "Bounded-input bounded-output stability is a standard input-output stability criterion."),
          ]
        ),
      ],
    },
    {
      title: "Week 2: Sampling and Digital Filters",
      assignment:
        "Create a sampling and filtering study. Compare multiple sampling rates, explain aliasing with a numerical example, calculate ADC resolution for a selected input span, and design a simple low-pass filter. Include raw and filtered sample tables and explain the trade-off between noise reduction and response speed.",
      lessons: [
        lesson(
          "sp-w2-l1",
          "Sampling Theorem and Aliasing",
          "Sampling converts a continuous-time signal into a sequence of values. Choosing the sampling rate correctly is essential because undersampling can cause different continuous signals to produce indistinguishable or misleading sample sequences.",
          [
            {
              heading: "Sampling process",
              content:
                "Uniform sampling takes measurements at equal intervals Ts. The sampling frequency is fs = 1/Ts. The resulting sequence can be written as x[n] = x(nTs). The ADC records a finite-resolution representation of these samples, but sampling itself describes the selection of time instants.",
            },
            {
              heading: "Nyquist condition",
              content:
                "For a signal band-limited to a maximum frequency B, ideal reconstruction requires a sampling frequency greater than twice B, subject to the assumptions of the sampling theorem. The Nyquist rate is 2B. Real systems need practical margin because signals may not be perfectly band-limited and anti-alias filters have finite transition bands.",
            },
            {
              heading: "Aliasing",
              content:
                "When sampling is insufficient, higher-frequency components may appear as lower-frequency components. This effect is called aliasing. Once different analog frequencies have mapped to the same sampled sequence, software cannot reliably determine the original frequency from those samples alone. An anti-alias filter before sampling helps reduce unwanted components above the usable band.",
            },
            {
              heading: "Sampling-rate selection",
              content:
                "The rate should reflect the fastest useful change, the signal's bandwidth, processing capacity, storage limits, and timing requirements. A temperature monitor may update slowly, while vibration analysis or audio requires much faster sampling. Oversampling can simplify filtering in some systems, but it increases data volume and does not replace proper analog input design.",
            },
          ],
          "A 200 Hz sinusoid sampled at 1,000 samples per second has five samples per cycle. Sampling a 700 Hz sinusoid at the same rate can produce an apparent lower-frequency component because 700 Hz exceeds the 500 Hz Nyquist frequency.",
          "For signals whose highest useful frequencies are 50 Hz, 1 kHz, and 10 kHz, calculate the ideal Nyquist rates. Suggest practical sampling rates and explain the role of an anti-alias filter.",
          [
            question("How are sampling frequency and sampling interval related?", ["fs = 1/Ts", "fs = Ts²", "fs = Ts + 1", "fs = 2Ts in every case"], "fs = 1/Ts", "Sampling frequency is the reciprocal of the time between uniform samples."),
            question("What is the Nyquist rate for a band-limited signal with maximum frequency 100 Hz?", ["200 samples per second", "50 samples per second", "100 samples per hour", "1 sample per second"], "200 samples per second", "The ideal Nyquist rate is twice the maximum signal frequency."),
            question("What is aliasing?", ["Higher-frequency content appearing as misleading lower-frequency content", "A sensor's calibration certificate", "An increase in ADC bit count", "A type of circuit enclosure"], "Higher-frequency content appearing as misleading lower-frequency content", "Insufficient sampling can make different analog frequencies indistinguishable."),
            question("Where is an anti-alias filter usually placed?", ["Before sampling and ADC conversion", "Only after the final digital display", "Inside a report file", "After the samples have been deleted"], "Before sampling and ADC conversion", "The filter limits unwanted analog frequency content before the ADC samples it."),
            question("Why might a real system sample faster than the theoretical Nyquist rate?", ["To allow practical filter transition bands and implementation margin", "To guarantee zero noise", "To remove the need for an ADC", "To make every signal periodic"], "To allow practical filter transition bands and implementation margin", "Practical filters and real signals often require margin beyond the ideal minimum."),
          ]
        ),
        lesson(
          "sp-w2-l2",
          "Quantization, ADCs, and Digital Representation",
          "After sampling, an ADC represents each sample using a finite number of digital levels. Understanding quantization helps explain why increasing bit depth can improve amplitude resolution but cannot eliminate every measurement error.",
          [
            {
              heading: "Quantization process",
              content:
                "Quantization maps a sample's amplitude to one of a finite set of levels. An N-bit ideal converter has 2^N possible codes. The quantization step depends on the full-scale input range and the converter's coding convention. Quantization introduces a difference between the analog sample and its represented value.",
            },
            {
              heading: "Quantization error",
              content:
                "For an ideal uniform quantizer under common assumptions, the quantization error is bounded by approximately half a step around the represented level. The actual behavior depends on clipping, code definitions, input statistics, and converter imperfections. Quantization error is not automatically independent random noise, particularly for slowly changing or periodic signals.",
            },
            {
              heading: "ADC performance",
              content:
                "Resolution describes the number of codes, while actual performance also depends on offset error, gain error, integral nonlinearity, differential nonlinearity, noise, reference quality, and effective number of bits. A nominally high-resolution ADC can perform poorly if its analog front end, reference, grounding, or input signal is noisy.",
            },
            {
              heading: "Signed and fixed-point data",
              content:
                "Digital signal-processing systems represent values using integer, floating-point, or fixed-point formats. Signed integers represent positive and negative values. Fixed-point arithmetic can be efficient on embedded processors but requires careful scaling and overflow analysis. Floating-point arithmetic offers a wide dynamic range on supported hardware, though it still has finite precision and computational cost.",
            },
          ],
          "For a 12-bit ADC over a 0–3.3 V range, the common nominal step approximation is 3.3/4096 ≈ 0.806 mV. This describes the code spacing approximation, not the total measurement accuracy.",
          "Calculate the nominal voltage step for 8-bit, 10-bit, and 12-bit ADCs over 0–5 V. Explain quantization error and identify two non-quantization sources of ADC error.",
          [
            question("How many codes does an ideal 8-bit ADC have?", ["256", "8", "16", "512"], "256", "An 8-bit converter has 2^8 = 256 possible codes."),
            question("What generally happens to nominal code spacing when bit depth increases over the same range?", ["It decreases", "It always doubles", "It becomes infinite", "It is always unchanged"], "It decreases", "More codes across the same input range mean smaller nominal voltage steps."),
            question("What is quantization?", ["Mapping sample amplitudes to finite discrete levels", "Changing the sampling clock into a sensor", "Removing every measurement error", "Changing voltage directly into mechanical motion"], "Mapping sample amplitudes to finite discrete levels", "Quantization represents continuous amplitude values using a finite set of levels."),
            question("Which is a possible ADC error other than quantization?", ["Offset error", "A mathematical definition of frequency", "A file extension", "A cable label"], "Offset error", "Offset error shifts the converter's input-output relationship."),
            question("What must be considered in fixed-point DSP?", ["Scaling and overflow", "Only display color", "Only file names", "The assumption that values have infinite precision"], "Scaling and overflow", "Fixed-point systems need deliberate scaling to prevent overflow and preserve useful precision."),
          ]
        ),
        lesson(
          "sp-w2-l3",
          "Discrete-Time Systems and Difference Equations",
          "A discrete-time system transforms an input sequence into an output sequence. Difference equations provide a compact way to describe digital filters and many other algorithms used in embedded signal-processing systems.",
          [
            {
              heading: "Difference-equation models",
              content:
                "A difference equation relates current output samples to current or previous inputs and, for recursive systems, previous outputs. A general linear constant-coefficient form is y[n] = Σ b_k x[n−k] − Σ a_k y[n−k], with indexing and coefficient signs defined consistently. Such equations can be implemented using delays, multipliers, and adders.",
            },
            {
              heading: "Feedforward and feedback",
              content:
                "A finite impulse response filter uses a finite set of input samples and no output feedback in its standard form. An infinite impulse response filter commonly uses feedback from previous outputs. Feedback can achieve useful responses with fewer coefficients, but stability and numerical behavior require attention.",
            },
            {
              heading: "Delays and initial conditions",
              content:
                "The term x[n−1] represents a one-sample delay. A delay element stores the previous sample, allowing an algorithm to combine information from multiple times. Recursive systems also depend on previous outputs or internal state, so their initial conditions affect the early samples and must be defined for a reproducible implementation.",
            },
            {
              heading: "Implementation considerations",
              content:
                "Real-time systems must complete each processing step within the sample interval. Coefficient precision, computational load, memory, overflow, and latency affect implementation. A filter that works mathematically may fail in embedded software if the processor cannot execute it fast enough or if numerical precision is insufficient.",
            },
          ],
          "For y[n] = 0.5x[n] + 0.5x[n−1], the current output averages the current input and the previous input. If the inputs are 2 and 4 at successive samples, the corresponding second output is 0.5(4) + 0.5(2) = 3.",
          "Calculate the first five outputs of y[n] = 0.25x[n] + 0.75x[n−1] for a supplied input sequence. Draw the delay-line structure and explain the initial condition used for x[−1].",
          [
            question("What does x[n−1] represent?", ["The input delayed by one sample", "The square of the input", "A future sample", "The sampling frequency"], "The input delayed by one sample", "The index n−1 refers to the preceding discrete-time sample."),
            question("What is a difference equation used for?", ["Describing relationships between input and output samples", "Describing only enclosure dimensions", "Replacing all sensor calibration", "Setting the display color"], "Describing relationships between input and output samples", "Difference equations define how discrete-time algorithms compute their outputs."),
            question("What characterizes a standard FIR filter?", ["A finite impulse response using feedforward input samples", "Mandatory output feedback", "An infinite number of stored outputs", "No input signal"], "A finite impulse response using feedforward input samples", "An FIR filter uses a finite set of input-sample coefficients without recursive output feedback."),
            question("Why do recursive filters need stability analysis?", ["Previous outputs feed into later calculations", "They have no coefficients", "They cannot process sampled data", "Their outputs are always constant"], "Previous outputs feed into later calculations", "Feedback can cause responses to persist or grow depending on the system poles and coefficients."),
            question("What is an important real-time DSP constraint?", ["Processing must finish within the timing budget", "Every algorithm must use unlimited memory", "The sample rate does not matter", "Every result must be calculated manually"], "Processing must finish within the timing budget", "Missing a processing deadline can cause lost samples or delayed output."),
          ]
        ),
        lesson(
          "sp-w2-l4",
          "FIR and IIR Digital Filters",
          "Digital filters selectively change frequency components in sampled data. FIR and IIR filters offer different trade-offs in stability, computational cost, phase response, and implementation complexity.",
          [
            {
              heading: "Finite impulse response filters",
              content:
                "An FIR filter can be written as y[n] = Σ b_k x[n−k]. Its output depends on a finite number of input samples. A standard FIR filter is BIBO stable when its coefficients are finite because its impulse response has finite length. Symmetric coefficients can produce linear phase, which is valuable when preserving waveform shape matters.",
            },
            {
              heading: "Infinite impulse response filters",
              content:
                "An IIR filter uses feedback, so its response may theoretically continue indefinitely after an impulse. IIR filters can achieve a target magnitude response with fewer coefficients than a comparable FIR design, but stability, coefficient quantization, and phase response must be evaluated. Not every IIR design is stable.",
            },
            {
              heading: "Magnitude and phase response",
              content:
                "Magnitude response describes how strongly each frequency is passed or attenuated. Phase response describes the phase shift introduced at each frequency. A filter with nonlinear phase can change the shape of a composite waveform even when its magnitude response is suitable. Selection depends on whether amplitude, timing, waveform shape, or computational cost is most important.",
            },
            {
              heading: "Choosing a filter",
              content:
                "FIR filters are useful when predictable stability and linear phase are important. IIR filters can be efficient for many embedded applications. Engineers should consider cutoff frequency, passband ripple, stopband attenuation, phase, group delay, numerical precision, and available processing resources. Testing should include representative signals and edge cases.",
            },
          ],
          "A three-point moving average y[n] = (x[n] + x[n−1] + x[n−2])/3 is an FIR filter. For input samples 3, 6, and 9, the output after all three samples are available is (3 + 6 + 9)/3 = 6.",
          "Implement a three-point moving average on paper or in code. Compare its output with the raw sequence and explain why it smooths some rapid variations while also delaying or reducing some genuine changes.",
          [
            question("Which filter uses a finite set of input samples in its standard form?", ["FIR", "Recursive IIR only", "A mechanical relay", "A calibration table only"], "FIR", "A standard FIR filter computes its output from a finite set of input samples."),
            question("What is a key advantage of many FIR designs?", ["They can provide linear phase and straightforward stability", "They are always computationally free", "They never introduce delay", "They always use fewer coefficients than IIR filters"], "They can provide linear phase and straightforward stability", "Finite coefficients yield a finite impulse response, and symmetric coefficients can provide linear phase."),
            question("What distinguishes a typical IIR filter?", ["Feedback from previous outputs", "No input samples", "Mandatory infinite memory hardware", "A fixed output regardless of input"], "Feedback from previous outputs", "IIR filters use recursive feedback, giving a theoretically continuing impulse response."),
            question("What does magnitude response describe?", ["Frequency-dependent amplification or attenuation", "Only the filter's physical dimensions", "The number of code comments", "The battery's age"], "Frequency-dependent amplification or attenuation", "Magnitude response indicates how the filter changes each frequency's amplitude."),
            question("Why is phase response sometimes important?", ["It can affect the timing and shape of a waveform", "It determines the filename", "It replaces sampling", "It guarantees zero quantization error"], "It can affect the timing and shape of a waveform", "Frequency-dependent phase shifts can alter the shape of combined signals."),
          ]
        ),
      ],
    },
    {
      title: "Week 3: Frequency-Domain Analysis",
      assignment:
        "Analyze a sampled signal containing two sinusoidal components. Calculate its sampling interval and frequency resolution, sketch its time-domain waveform, estimate its spectrum, and explain how an FFT can reveal the components. Include a short discussion of windowing, spectral leakage, and the limitations of the chosen sample length.",
      lessons: [
        lesson(
          "sp-w3-l1",
          "Fourier Series and Frequency Components",
          "Fourier analysis represents suitable signals in terms of sinusoidal components. It provides a way to understand which frequencies are present and how systems affect different parts of a signal.",
          [
            {
              heading: "Sinusoidal decomposition",
              content:
                "A periodic signal can be represented by a Fourier series under suitable conditions. The series includes a DC term and sinusoidal components at the fundamental frequency and its harmonics. The coefficients describe the amplitudes and phases of those components. A pure sinusoid has one primary frequency component, while many nonsinusoidal periodic waveforms contain several harmonics.",
            },
            {
              heading: "Fundamental frequency and harmonics",
              content:
                "The fundamental frequency is the repetition frequency of a periodic signal. Harmonics occur at integer multiples of the fundamental. A waveform's harmonic content influences its shape. For example, a square-like waveform requires multiple odd harmonics in its ideal Fourier representation, while other periodic waveforms have different harmonic patterns.",
            },
            {
              heading: "Amplitude and phase",
              content:
                "Fourier coefficients can be expressed as sine-cosine coefficients or as magnitude and phase. Magnitude describes how much of a frequency component is present, while phase describes its alignment relative to the reference. Two signals can have the same magnitude spectrum but different phase spectra and therefore different time-domain waveforms.",
            },
            {
              heading: "Applications",
              content:
                "Fourier series are used in harmonic analysis, power-quality studies, audio synthesis, periodic vibration analysis, and understanding linear systems. They help separate a complicated periodic waveform into simpler components that can be studied individually.",
            },
          ],
          "A 100 Hz periodic signal can contain harmonics at 200 Hz, 300 Hz, and higher integer multiples. The strength of each harmonic depends on the waveform shape and its Fourier coefficients.",
          "Sketch a sinusoid and a square-like periodic waveform. Identify their fundamental frequencies and explain why the square-like waveform contains multiple harmonics.",
          [
            question("What is the fundamental frequency of a periodic signal?", ["Its basic repetition frequency", "The highest possible ADC code", "The filter's resistor value", "The sampling index"], "Its basic repetition frequency", "The fundamental frequency defines the primary repetition rate of the periodic signal."),
            question("Where do harmonics occur?", ["At integer multiples of the fundamental frequency", "Only at negative frequencies", "At arbitrary values unrelated to the signal", "Only at zero frequency"], "At integer multiples of the fundamental frequency", "Harmonics are integer multiples of the fundamental."),
            question("What does a Fourier-series coefficient describe?", ["A component's contribution to the signal", "The circuit board's size", "Only the number of samples", "The battery voltage in every system"], "A component's contribution to the signal", "Fourier coefficients describe the magnitude and phase contributions of sinusoidal components."),
            question("Can two signals have the same magnitude spectrum but different waveforms?", ["Yes, if their phase information differs", "No, never", "Only when both signals are zero", "Only when sampling is impossible"], "Yes, if their phase information differs", "Phase affects how components combine in time."),
            question("Which application commonly uses harmonic analysis?", ["Power-quality analysis", "Cable color selection", "Enclosure painting", "Keyboard layout design"], "Power-quality analysis", "Harmonic analysis helps characterize distortion and frequency components in electrical waveforms."),
          ]
        ),
        lesson(
          "sp-w3-l2",
          "Discrete-Time Fourier Transform",
          "The discrete-time Fourier transform describes the frequency content of a discrete-time sequence. It is useful for understanding digital filters and the spectral behavior of sampled data.",
          [
            {
              heading: "DTFT definition",
              content:
                "For a discrete-time sequence x[n], the DTFT is X(e^jω) = Σ x[n]e^(−jωn), when the sum converges in the required sense. The angular frequency ω is measured in radians per sample. Because the sequence is discrete in time, its DTFT is periodic in ω with period 2π.",
            },
            {
              heading: "Frequency interpretation",
              content:
                "The DTFT describes a continuous frequency variable for a discrete-time signal. A digital sinusoid's frequency is defined modulo 2π radians per sample. To express frequency in hertz, the sampling frequency must be known. The conversion is ω = 2πf/fs for frequencies represented within the usual principal range.",
            },
            {
              heading: "Magnitude and phase",
              content:
                "The transform is generally complex. Its magnitude indicates the strength of frequency components, and its phase indicates their relative angular alignment. The power or energy spectrum may be derived from the transform under appropriate definitions, but magnitude, power, and energy are different quantities and should not be confused.",
            },
            {
              heading: "DTFT and digital systems",
              content:
                "The DTFT is especially useful for studying linear time-invariant discrete systems. Convolution in the time domain corresponds to multiplication in the frequency domain under the appropriate conditions. A system's frequency response shows how sinusoidal inputs at different frequencies are changed in magnitude and phase.",
            },
          ],
          "If fs = 1,000 Hz and a component has f = 100 Hz, its normalized angular frequency is ω = 2π(100/1000) = 0.2π radians per sample.",
          "Convert 50 Hz, 125 Hz, and 400 Hz to normalized angular frequencies for fs = 1,000 Hz. Explain why the DTFT repeats every 2π radians per sample.",
          [
            question("What is the frequency variable commonly used in the DTFT?", ["ω in radians per sample", "Only volts", "Only seconds", "The resistor tolerance"], "ω in radians per sample", "The DTFT uses normalized angular frequency for discrete-time signals."),
            question("What is the DTFT's periodicity in normalized angular frequency?", ["2π", "1/2π only", "1000π in every case", "It has no periodicity"], "2π", "The DTFT of a discrete-time sequence repeats every 2π radians per sample."),
            question("How is normalized angular frequency related to frequency in hertz?", ["ω = 2πf/fs", "ω = fs/f²", "ω = f + fs only", "ω = 2f/fs²"], "ω = 2πf/fs", "The sampling rate converts frequency in hertz to normalized angular frequency."),
            question("What does the magnitude of the DTFT indicate?", ["Frequency-component magnitude", "Only the number of samples", "The physical cable length", "The file's creation date"], "Frequency-component magnitude", "The transform's magnitude describes the strength of its frequency components."),
            question("What time-domain operation corresponds to multiplication in the frequency domain for suitable LTI systems?", ["Convolution", "File compression only", "Sensor mounting", "Cable shielding"], "Convolution", "Convolution and multiplication are paired by the Fourier-transform relationship."),
          ]
        ),
        lesson(
          "sp-w3-l3",
          "Discrete Fourier Transform and Frequency Resolution",
          "The discrete Fourier transform converts a finite sequence into a finite set of frequency-domain values. It is widely used because digital computers can calculate it directly or through efficient algorithms such as the FFT.",
          [
            {
              heading: "DFT equation",
              content:
                "For an N-point sequence, the DFT is X[k] = Σ from n = 0 to N−1 of x[n]e^(−j2πkn/N), for k = 0, 1, ..., N−1. Each index k represents a frequency bin. The inverse DFT reconstructs the finite sequence from its complex frequency coefficients, subject to the chosen normalization convention.",
            },
            {
              heading: "Frequency-bin spacing",
              content:
                "For N uniformly sampled points at sampling rate fs, the usual bin spacing is Δf = fs/N. Increasing N by collecting a longer observation at the same sampling rate reduces bin spacing. Adding zero-valued samples can make the plotted spectrum smoother through interpolation-like display effects but does not create additional information or improve the fundamental ability to separate closely spaced components.",
            },
            {
              heading: "Real-valued signals",
              content:
                "For real-valued input data, the DFT has conjugate symmetry. Positive- and negative-frequency components are related, so the spectrum does not contain independent information in every bin. Single-sided magnitude plots often display only the nonnegative-frequency portion, with suitable amplitude scaling that accounts for paired components and special bins such as DC and, when present, Nyquist.",
            },
            {
              heading: "Practical limitations",
              content:
                "The DFT analyzes a finite observation. If a sinusoid does not align with a DFT bin, its energy spreads across neighboring bins, producing spectral leakage. Window functions can reduce sidelobes but affect main-lobe width and amplitude scaling. Correct interpretation requires attention to the window, record length, sample rate, and normalization.",
            },
          ],
          "If N = 1,000 samples are collected at fs = 2,000 Hz, the bin spacing is Δf = 2,000/1,000 = 2 Hz. This spacing describes the DFT grid; the ability to resolve real components also depends on signal duration, windowing, noise, and component separation.",
          "Calculate the bin spacing for 512 samples at 8 kHz and 2,048 samples at 8 kHz. Explain how increasing the record length changes the frequency grid and why zero-padding does not add new measured information.",
          [
            question("What does a DFT produce?", ["A finite set of complex frequency coefficients", "Only a temperature reading", "A sensor enclosure", "A continuous-time waveform without sampling"], "A finite set of complex frequency coefficients", "The DFT maps a finite discrete-time sequence to a finite set of complex frequency-domain values."),
            question("What is the usual DFT bin spacing for N samples at sampling rate fs?", ["fs/N", "N/fs²", "fs × N", "1/N² only"], "fs/N", "The frequency spacing is the sampling rate divided by the number of samples."),
            question("What often causes spectral leakage?", ["A finite record that does not contain an integer number of cycles of a component", "A perfectly matched sample count in every case", "The use of volts instead of millivolts", "The presence of a filename"], "A finite record that does not contain an integer number of cycles of a component", "A finite observation can spread a component's energy across DFT bins."),
            question("What does zero-padding primarily do to a plotted DFT?", ["Creates a denser displayed frequency grid", "Adds new measured signal information", "Guarantees perfect component separation", "Eliminates all noise"], "Creates a denser displayed frequency grid", "Zero-padding interpolates the displayed spectrum but does not extend the original measured record."),
            question("What symmetry does the DFT have for real-valued input?", ["Conjugate symmetry", "No relationship between any bins", "All bins must be zero", "Every bin has the same phase"], "Conjugate symmetry", "Real input sequences produce conjugate-symmetric DFT coefficients."),
          ]
        ),
        lesson(
          "sp-w3-l4",
          "Fast Fourier Transform and Windowing",
          "The fast Fourier transform is an efficient family of algorithms for computing the DFT. Windowing and careful spectrum scaling are essential when interpreting the FFT of finite measurement records.",
          [
            {
              heading: "Why FFT is fast",
              content:
                "Direct DFT evaluation requires work proportional to approximately N² operations for N points. Common FFT algorithms reduce the work to approximately N log₂N operations when their assumptions and sizes fit the implementation. Radix-2 FFT algorithms commonly split an even-length sequence into smaller transforms, combine the results using twiddle factors, and repeat the process recursively.",
            },
            {
              heading: "Butterfly computation",
              content:
                "An FFT butterfly combines intermediate complex values through addition, subtraction, and multiplication by a complex exponential called a twiddle factor. Different FFT algorithms arrange these operations differently. Understanding the butterfly helps explain why the computation can reuse intermediate results instead of independently calculating every DFT coefficient.",
            },
            {
              heading: "Window functions",
              content:
                "A finite record effectively multiplies the underlying signal by an observation window. A rectangular window corresponds to selecting the record without tapering its edges. Hann and Hamming windows gradually reduce edge values, often lowering sidelobes and leakage at the cost of a wider main lobe. The best choice depends on whether detecting weak nearby components or distinguishing close frequencies is more important.",
            },
            {
              heading: "Spectrum scaling and interpretation",
              content:
                "FFT software may return unscaled complex coefficients, normalized coefficients, or magnitude values. Convert bins to frequency using the sampling rate and FFT length. Apply appropriate amplitude scaling for the chosen window and single- or double-sided spectrum. Inspect units, DC offset, leakage, noise floor, and frequency-axis limits before interpreting peaks.",
            },
          ],
          "For an FFT length of 1,024 at 8,192 samples per second, the bin spacing is 8 Hz. A peak near bin 25 corresponds approximately to 25 × 8 = 200 Hz, assuming the usual bin indexing and frequency interpretation.",
          "Draw a simplified FFT butterfly and explain the role of a twiddle factor. Compare rectangular and Hann windows and identify when each might be suitable.",
          [
            question("What is the main benefit of a common FFT algorithm?", ["It computes the DFT more efficiently", "It eliminates the need for samples", "It guarantees no leakage", "It converts every signal to DC"], "It computes the DFT more efficiently", "FFT algorithms reuse calculations to reduce computational cost compared with direct DFT evaluation."),
            question("What is the approximate complexity of a common radix-2 FFT?", ["O(N log₂N)", "O(N³) in every implementation", "O(1) regardless of N", "O(2^N) for all practical FFTs"], "O(N log₂N)", "The FFT reduces the amount of work to roughly N log₂N for common implementations."),
            question("What is a twiddle factor?", ["A complex exponential used in FFT computations", "A physical sensor mounting screw", "A type of ADC enclosure", "A calibration date"], "A complex exponential used in FFT computations", "Twiddle factors provide the phase rotations used to combine intermediate FFT results."),
            question("Why use a Hann window?", ["To reduce spectral leakage sidelobes", "To guarantee infinite frequency resolution", "To create additional measured samples", "To remove the need for an FFT"], "To reduce spectral leakage sidelobes", "A Hann window tapers record edges and often reduces leakage sidelobes."),
            question("What determines the FFT bin frequencies?", ["Sampling rate and transform length", "Only the sensor's color", "Only the computer brand", "The file's name"], "Sampling rate and transform length", "The frequency grid follows the sample rate divided by the FFT length."),
          ]
        ),
      ],
    },
    {
      title: "Week 4: DSP Applications and Final Project",
      assignment:
        "Complete a DSP mini-project using a simulated or recorded signal. Show the input signal, sampling configuration, selected filter, raw and filtered outputs, frequency analysis, and validation tests. Include a short report discussing computational cost, latency, numerical limits, and how you would adapt the design to an embedded processor.",
      lessons: [
        lesson(
          "sp-w4-l1",
          "Digital Filter Design and Frequency Response",
          "Filter design begins with a specification and translates it into a system that passes desired frequency components while attenuating unwanted ones. The design must satisfy both signal-quality goals and implementation constraints.",
          [
            {
              heading: "Filter specifications",
              content:
                "A filter specification may include passband edges, stopband edges, passband ripple, stopband attenuation, phase requirements, and maximum allowed latency. The transition band separates frequencies that should pass from those that should be strongly attenuated. More demanding specifications generally require more computation, more coefficients, or more complex design methods.",
            },
            {
              heading: "Low-pass, high-pass, band-pass, and notch",
              content:
                "A low-pass filter retains lower frequencies and attenuates higher ones. A high-pass filter does the opposite. A band-pass filter retains a selected range, and a notch filter suppresses a narrow frequency band. A 50 Hz interference component, for example, may motivate a notch filter when the useful signal occupies other frequencies, but a notch can also remove useful information near that frequency.",
            },
            {
              heading: "FIR design concepts",
              content:
                "FIR filters can be designed using windowed ideal responses or numerical optimization methods. The window method starts from a desired ideal frequency response and truncates its impulse response using a selected window. The choice of window affects transition width and sidelobes. Filter length influences frequency selectivity, computational cost, and delay.",
            },
            {
              heading: "IIR design concepts",
              content:
                "IIR filters are often derived from analog prototype designs or designed directly in the digital domain. Common families include Butterworth, Chebyshev, and elliptic filters, each trading passband behavior, stopband behavior, and order differently. A practical implementation must verify pole locations, numerical sensitivity, phase behavior, and performance using the actual coefficients and arithmetic.",
            },
          ],
          "A sensor application may require a low-pass filter that preserves changes below 5 Hz while reducing high-frequency noise. The cutoff alone is not a complete specification; transition width, attenuation, phase, and latency must also be considered.",
          "Write a filter specification for smoothing a slowly changing sensor signal. Choose a filter type and propose passband, stopband, and latency requirements. Explain why a single cutoff number is insufficient.",
          [
            question("What is a low-pass filter designed to do?", ["Pass lower frequencies more readily than higher frequencies", "Pass only high frequencies", "Remove every frequency equally", "Convert all signals into binary text"], "Pass lower frequencies more readily than higher frequencies", "A low-pass filter attenuates higher-frequency components relative to lower ones."),
            question("What does a stopband specification describe?", ["The frequency region where strong attenuation is desired", "The sensor's mounting position", "The file size", "The ADC's supply voltage only"], "The frequency region where strong attenuation is desired", "The stopband defines frequencies that should be substantially suppressed."),
            question("Which is a possible trade-off of increasing FIR filter length?", ["More computation and potentially greater delay", "Guaranteed zero computation", "Removal of the sample rate", "No effect on implementation"], "More computation and potentially greater delay", "Longer FIR filters usually need more multiply-accumulate operations and can increase delay."),
            question("Which filter type is often characterized by a maximally flat magnitude response in its passband?", ["Butterworth", "Hann window only", "Rectangular ADC", "Wheatstone bridge"], "Butterworth", "Butterworth designs are known for a maximally flat magnitude response in the passband."),
            question("Why should a notch filter be chosen carefully?", ["It may suppress useful signal content near the notch frequency", "It always passes every frequency unchanged", "It removes the need for sampling", "It cannot affect a frequency component"], "It may suppress useful signal content near the notch frequency", "Removing a narrow band can also remove information the application needs."),
          ]
        ),
        lesson(
          "sp-w4-l2",
          "Correlation, Convolution, and System Response",
          "Convolution predicts the output of a linear time-invariant system from its input and impulse response. Correlation measures similarity between signals or shifted versions of a signal and is useful for detection and delay estimation.",
          [
            {
              heading: "Discrete convolution",
              content:
                "For discrete-time sequences, convolution is y[n] = Σ x[k]h[n−k], where x is the input and h is the impulse response. Equivalently, y[n] = Σ h[k]x[n−k] under suitable indexing. The operation combines shifted, weighted copies of the impulse response to determine the output. Finite sequences can be evaluated by listing the overlapping products at each output index.",
            },
            {
              heading: "Impulse response",
              content:
                "For a linear time-invariant system, the impulse response completely characterizes the system's input-output behavior under suitable conditions. If the impulse response is known, convolution predicts the response to other inputs. In practice, impulse responses may be measured, calculated from a model, or estimated from data.",
            },
            {
              heading: "Correlation",
              content:
                "Cross-correlation measures how similar two signals are as one is shifted relative to the other. It is used to estimate time delay, detect known patterns, align recordings, and identify repeating features. Autocorrelation compares a signal with shifted versions of itself and can reveal periodicity. Correlation conventions differ in conjugation and lag sign, so the definition should be checked.",
            },
            {
              heading: "Efficient computation",
              content:
                "Direct convolution is suitable for short sequences. For long sequences, FFT-based convolution can be faster by transforming the sequences, multiplying their frequency-domain representations, and transforming back. To obtain linear rather than circular convolution, adequate zero-padding or a block method such as overlap-add or overlap-save is required.",
            },
          ],
          "Let x = [1, 2] and h = [1, 1]. Their linear convolution is [1, 3, 2]. The middle output is 1×1 + 2×1 = 3 because both input samples overlap with the two-tap impulse response.",
          "Calculate the linear convolution of x = [1, 2, 1] and h = [1, −1]. Then explain how cross-correlation could estimate the delay between two recordings of the same event.",
          [
            question("What does convolution calculate for an LTI system?", ["Output from input and impulse response", "Only the sensor's resistance", "The number of ADC bits", "The sampling clock's color"], "Output from input and impulse response", "Convolution combines the input with the system's impulse response to determine output."),
            question("What does an impulse response describe?", ["An LTI system's response to an impulse input", "Only the display's startup time", "A file name", "The ADC's bit count"], "An LTI system's response to an impulse input", "The impulse response characterizes an LTI system under standard assumptions."),
            question("What can cross-correlation help estimate?", ["Relative delay between signals", "The sensor's physical color", "The exact ADC supply current in every case", "The file's author"], "Relative delay between signals", "Correlation can reveal the shift that produces the strongest alignment between signals."),
            question("Why is zero-padding used in FFT-based linear convolution?", ["To prevent circular wraparound from corrupting the linear result", "To add new measured information", "To remove every filter coefficient", "To guarantee zero numerical error"], "To prevent circular wraparound from corrupting the linear result", "Adequate padding separates the linear convolution result from circular overlap."),
            question("What does autocorrelation compare?", ["A signal with shifted versions of itself", "Two unrelated file names only", "Only two resistor values", "An ADC and a battery"], "A signal with shifted versions of itself", "Autocorrelation can reveal repeating patterns and periodicity."),
          ]
        ),
        lesson(
          "sp-w4-l3",
          "DSP Applications in Audio, Communications, and Instrumentation",
          "Digital signal processing supports a wide range of engineering systems. Although the algorithms vary, the common workflow is to acquire a suitable signal, apply processing that matches the application, and verify the output against measurable requirements.",
          [
            {
              heading: "Audio processing",
              content:
                "Audio DSP includes equalization, dynamic-range control, echo effects, noise reduction, and speech-feature extraction. The audible result depends on sampling rate, bit depth, filter response, latency, and loudness handling. In interactive audio, excessive delay can be disruptive even when the filtered signal sounds clean.",
            },
            {
              heading: "Communication systems",
              content:
                "Communication receivers use filtering, synchronization, modulation or demodulation, channel estimation, and error detection. DSP helps recover information from noisy or distorted signals. Performance depends on the modulation scheme, channel conditions, timing, bandwidth, and the quality of the transmitter and receiver implementations.",
            },
            {
              heading: "Instrumentation and condition monitoring",
              content:
                "Sensor systems use averaging, digital filtering, spectral analysis, threshold detection, and feature extraction. Vibration analysis may detect frequency components associated with rotating machinery, while temperature monitoring may focus on trends and abnormal rates of change. A processing algorithm must preserve the signal characteristics that indicate a real fault.",
            },
            {
              heading: "Biomedical and image applications",
              content:
                "Biomedical systems may filter physiological measurements, remove baseline variation, or identify waveform features. Image processing applies related ideas in two dimensions for smoothing, sharpening, edge detection, and compression. In safety-sensitive applications, algorithm performance must be validated carefully and should not be treated as a substitute for qualified assessment.",
            },
          ],
          "A vibration monitor may sample acceleration, remove unwanted low-frequency drift, calculate an FFT, and track selected spectral peaks. Changes in a peak can provide a useful maintenance indicator, but the result must be interpreted alongside sensor placement, operating speed, load, and other evidence.",
          "Choose one application—audio, communication, vibration, temperature, or image processing. Define the input, sampling requirements, processing stages, output, likely errors, and a test that demonstrates whether the algorithm works.",
          [
            question("Which is a common audio DSP task?", ["Equalization", "Changing the enclosure color", "Replacing every speaker with an ADC", "Eliminating the sampling rate"], "Equalization", "Equalization adjusts the frequency-dependent response of an audio signal."),
            question("Why does latency matter in interactive audio?", ["Excessive delay can disrupt real-time interaction", "It determines only the file name", "It guarantees zero noise", "It removes the need for processing"], "Excessive delay can disrupt real-time interaction", "Audio processing must finish quickly enough for the application's timing requirements."),
            question("What is one purpose of vibration spectral analysis?", ["Identifying important frequency components", "Measuring a cable's paint thickness", "Changing the sampling index origin only", "Guaranteeing that machinery never fails"], "Identifying important frequency components", "Spectral peaks can help reveal vibration patterns relevant to condition monitoring."),
            question("What should a signal-processing algorithm preserve?", ["The information needed for the application", "Only the largest possible output", "Every unwanted noise component", "A fixed waveform regardless of input"], "The information needed for the application", "Processing must reduce unwanted components without destroying features important to the task."),
            question("Why must DSP systems be tested with representative data?", ["Performance depends on real signal and operating conditions", "Testing automatically removes all uncertainty", "Every algorithm works identically for every input", "It replaces requirements"], "Performance depends on real signal and operating conditions", "Representative tests reveal whether the processing meets the intended application's needs."),
          ]
        ),
        lesson(
          "sp-w4-l4",
          "DSP Implementation, Testing, and Final Project",
          "A working DSP design must be converted into a reproducible implementation. This includes clear requirements, appropriate numerical methods, timing checks, test cases, and a report that distinguishes measured results from assumptions.",
          [
            {
              heading: "Define requirements",
              content:
                "State the signal type, sampling rate, input range, useful bandwidth, acceptable error, latency, and processing target. Define measurable acceptance criteria such as attenuation at selected frequencies, detection accuracy on test data, or maximum processing time per sample block. Requirements make it possible to decide objectively whether the implementation is successful.",
            },
            {
              heading: "Implementation choices",
              content:
                "A desktop program can use numerical libraries for array processing and FFT analysis. An embedded implementation may require fixed-point arithmetic, bounded memory, careful interrupt handling, and predictable execution time. The same mathematical design can behave differently due to coefficient quantization, rounding, overflow, and differences in library conventions.",
            },
            {
              heading: "Testing and debugging",
              content:
                "Test with a known sinusoid, a sum of sinusoids, an impulse, a step, noisy data, and boundary cases appropriate to the design. Compare expected results with measured outputs. Check frequency axes, units, scaling, initialization, and behavior when input data are missing or outside the expected range. Record failures and corrections instead of reporting only successful tests.",
            },
            {
              heading: "Final documentation",
              content:
                "The final report should include a block diagram, equations, parameter choices, software or simulation details, test signals, raw and processed plots, spectral results, performance measurements, and limitations. Explain why the design choices are suitable and identify improvements that could be made with more computation, better acquisition hardware, or a longer measurement record.",
            },
          ],
          "For a sampled signal containing a 10 Hz component and high-frequency noise, a low-pass filter may reduce the noise while retaining the 10 Hz component. Testing should measure both the wanted component's gain and the unwanted components' attenuation rather than relying only on visual smoothness.",
          "Complete the final project described below. Submit your signal-generation or data-import method, sampling calculations, filtering design, raw and processed waveforms, FFT comparison, test cases, and a short engineering report.",
          [
            question("What should be specified before implementing a DSP system?", ["Signal requirements and measurable acceptance criteria", "Only the application title", "A random sample rate", "The display color alone"], "Signal requirements and measurable acceptance criteria", "Requirements determine suitable algorithms and objective tests."),
            question("Which is a useful test input for an LTI system?", ["An impulse", "Only an arbitrary filename", "A screenshot without signal data", "A disconnected display"], "An impulse", "An impulse can reveal the system's impulse response and is useful for validating LTI behavior."),
            question("Why should embedded DSP code check for overflow?", ["Finite numeric representations have limits", "Every integer has unlimited range", "Overflow always improves accuracy", "Sampling removes arithmetic limits"], "Finite numeric representations have limits", "Fixed-point and integer calculations can exceed their representable range."),
            question("What is a useful way to evaluate a filter?", ["Measure wanted-signal preservation and unwanted-frequency attenuation", "Judge only the source-code length", "Assume smoothness proves accuracy", "Ignore the input data"], "Measure wanted-signal preservation and unwanted-frequency attenuation", "A filter must meet quantitative response requirements, not merely look smooth."),
            question("What makes a DSP report reproducible?", ["Documented parameters, inputs, methods, and results", "Only a claim that it works", "Unexplained plots", "Undocumented code changes"], "Documented parameters, inputs, methods, and results", "Clear documentation enables another person to repeat the analysis and check the conclusions."),
          ]
        ),
      ],
    },
  ],
};

export default signalProcessingCourse;

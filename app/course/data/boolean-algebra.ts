
export const booleanAlgebraCourse = {
  skill: "Boolean Algebra",
  title: "Boolean Algebra for VLSI Engineering",
  description:
    "Learn Boolean logic, logic gates, Boolean laws, expression simplification, Karnaugh maps, and digital circuit design.",
  duration: "1 Month",
  weeks: [
    {
      week: 1,
      title: "Boolean Logic Fundamentals",
      description:
        "Understand binary values, Boolean variables, logic operators, and basic logic gates.",
      lessons: [
        {
          title: "Introduction to Boolean Algebra",
          explanation:
            "Boolean algebra is a mathematical system used to represent and simplify digital logic. A Boolean variable has only two possible values: 0 or 1. These values commonly represent LOW and HIGH logic states in digital circuits.",
          example:
            "If A = 1 and B = 0, the Boolean expression A AND B evaluates to 0.",
          exercise:
            "Write three examples of Boolean variables and assign each a value of either 0 or 1.",
          quiz: {
            question: "How many possible values can a Boolean variable have?",
            options: ["One", "Two", "Three", "Four"],
            answer: 1
          }
        },
        {
          title: "AND, OR, and NOT Operations",
          explanation:
            "The AND operation outputs 1 only when all inputs are 1. The OR operation outputs 1 when at least one input is 1. The NOT operation reverses its input: 0 becomes 1 and 1 becomes 0.",
          example:
            "For A = 1 and B = 0, A AND B = 0, A OR B = 1, and NOT A = 0.",
          exercise:
            "Calculate A AND B, A OR B, NOT A, and NOT B for A = 0 and B = 1.",
          quiz: {
            question: "What is the result of 1 OR 0?",
            options: ["0", "1", "Undefined", "2"],
            answer: 1
          }
        },
        {
          title: "Truth Tables",
          explanation:
            "A truth table lists all possible input combinations and the output of a Boolean expression. For n binary inputs, there are 2^n possible combinations. Truth tables help verify the behavior of logic gates and circuits.",
          example:
            "For two-input AND, the output is 1 only for the input combination A = 1, B = 1.",
          exercise:
            "Create the truth table for a two-input OR gate with inputs A and B.",
          quiz: {
            question: "How many input combinations are possible for three Boolean inputs?",
            options: ["3", "6", "8", "9"],
            answer: 2
          }
        },
        {
          title: "Basic Logic Gates",
          explanation:
            "Logic gates implement Boolean operations in digital hardware. AND, OR, and NOT are basic gates. NAND, NOR, XOR, and XNOR are also widely used. Each gate has a defined relationship between its inputs and output.",
          example:
            "An XOR gate outputs 1 when its two inputs differ, while an XNOR gate outputs 1 when the inputs are equal.",
          exercise:
            "Draw the symbols and truth tables for AND, OR, NOT, NAND, NOR, XOR, and XNOR gates.",
          quiz: {
            question: "When does a two-input XOR gate output 1?",
            options: [
              "When both inputs are 0",
              "When both inputs are 1",
              "When the inputs are different",
              "For every input combination"
            ],
            answer: 2
          }
        }
      ],
      assignment:
        "Prepare truth tables for the seven common logic gates and explain the difference between AND, OR, NAND, NOR, XOR, and XNOR."
    },
    {
      week: 2,
      title: "Boolean Laws and Simplification",
      description:
        "Learn important Boolean identities and use them to simplify logic expressions.",
      lessons: [
        {
          title: "Identity and Null Laws",
          explanation:
            "Boolean identity laws include A + 0 = A and A · 1 = A. Null laws include A + 1 = 1 and A · 0 = 0. Here, + represents OR and · represents AND.",
          example:
            "The expression A · 1 simplifies to A because AND with 1 leaves the value unchanged.",
          exercise:
            "Simplify A + 0, A · 1, A + 1, and A · 0.",
          quiz: {
            question: "Simplify A + 0.",
            options: ["0", "1", "A", "NOT A"],
            answer: 2
          }
        },
        {
          title: "Complement and Idempotent Laws",
          explanation:
            "Complement laws include A + NOT A = 1 and A · NOT A = 0. Idempotent laws state that A + A = A and A · A = A. These identities help remove redundant terms.",
          example:
            "The expression A + A simplifies to A because OR-ing a value with itself does not change it.",
          exercise:
            "Simplify A + A, A · A, A + NOT A, and A · NOT A.",
          quiz: {
            question: "What is A AND NOT A?",
            options: ["A", "1", "NOT A", "0"],
            answer: 3
          }
        },
        {
          title: "Commutative, Associative, and Distributive Laws",
          explanation:
            "The commutative laws allow the order of operands to change. Associative laws allow regrouping. Distributive laws include A(B + C) = AB + AC and A + BC = (A + B)(A + C). These laws help transform expressions into useful forms.",
          example:
            "A + B can be rewritten as B + A using the commutative law.",
          exercise:
            "Apply a Boolean law to rewrite AB, A + B, and A(B + C).",
          quiz: {
            question: "Which law allows A + B to be rewritten as B + A?",
            options: [
              "Complement law",
              "Commutative law",
              "Null law",
              "De Morgan's law"
            ],
            answer: 1
          }
        },
        {
          title: "De Morgan's Theorems",
          explanation:
            "De Morgan's theorems state that NOT(A AND B) equals NOT A OR NOT B, and NOT(A OR B) equals NOT A AND NOT B. They are important for simplifying expressions and converting between NAND and NOR implementations.",
          example:
            "NOT(A · B) = NOT A + NOT B.",
          exercise:
            "Apply De Morgan's theorems to simplify NOT(A + B) and NOT(A · B).",
          quiz: {
            question: "NOT(A OR B) is equivalent to which expression?",
            options: [
              "NOT A OR NOT B",
              "A AND B",
              "NOT A AND NOT B",
              "A OR B"
            ],
            answer: 2
          }
        }
      ],
      assignment:
        "Simplify at least ten Boolean expressions using identity, complement, distributive, associative, commutative, and De Morgan's laws."
    },
    {
      week: 3,
      title: "Canonical Forms and Karnaugh Maps",
      description:
        "Understand minterms, maxterms, SOP, POS, and Karnaugh-map simplification.",
      lessons: [
        {
          title: "Minterms and Maxterms",
          explanation:
            "A minterm is an AND term containing every input variable once, either complemented or uncomplemented. It is 1 for exactly one input combination. A maxterm is an OR term containing every variable once and is 0 for exactly one input combination.",
          example:
            "For inputs A and B, A · NOT B is a minterm that is 1 when A = 1 and B = 0.",
          exercise:
            "Write all minterms for two variables A and B and identify the input combination for each.",
          quiz: {
            question: "For how many input combinations is a minterm equal to 1?",
            options: [
              "Exactly one",
              "Exactly two",
              "Every combination",
              "No combination"
            ],
            answer: 0
          }
        },
        {
          title: "Sum of Products and Product of Sums",
          explanation:
            "Sum of Products (SOP) is an OR of AND terms. Product of Sums (POS) is an AND of OR terms. Canonical SOP uses minterms, while canonical POS uses maxterms. Both forms represent Boolean functions.",
          example:
            "AB + NOT A · B is an SOP expression because two product terms are combined using OR.",
          exercise:
            "Identify whether AB + AC is SOP or POS, and whether (A + B)(A + C) is SOP or POS.",
          quiz: {
            question: "Which expression is in Product of Sums form?",
            options: ["AB + AC", "A + B + C", "AB", "(A + B)(A + C)"],
            answer: 3
          }
        },
        {
          title: "Karnaugh Maps",
          explanation:
            "A Karnaugh map, or K-map, is a visual method for simplifying Boolean functions. Cells are arranged in Gray-code order so adjacent cells differ in one variable. Groups of 1, 2, 4, 8, or more cells can be used to form simpler expressions.",
          example:
            "In a four-variable K-map, a group of four adjacent 1s can eliminate two changing variables from the corresponding product term.",
          exercise:
            "Draw a two-variable K-map and place the output values for the function F(A,B) = A OR B.",
          quiz: {
            question: "What group sizes are normally used in K-map simplification?",
            options: [
              "Only groups of three",
              "Powers of two",
              "Only groups of five",
              "Any arbitrary number"
            ],
            answer: 1
          }
        },
        {
          title: "K-Map Simplification Practice",
          explanation:
            "To simplify with a K-map, enter the function's 1s, form the largest valid adjacent groups, and derive the simplified terms. Groups may wrap around map edges. Overlapping groups are allowed when they help produce a simpler result.",
          example:
            "For F(A,B) = Σm(1,3), the two minterms correspond to A = 0, B = 1 and A = 1, B = 1. Grouping them eliminates A, giving F = B.",
          exercise:
            "Simplify F(A,B) = Σm(2,3) using a two-variable K-map.",
          quiz: {
            question: "For F(A,B) = Σm(1,3), what is the simplified expression?",
            options: ["A", "B", "NOT A", "A AND B"],
            answer: 1
          }
        }
      ],
      assignment:
        "Convert truth tables into SOP and POS forms, then simplify at least four two- or three-variable Boolean functions using K-maps."
    },
    {
      week: 4,
      title: "Logic Circuit Design and Final Project",
      description:
        "Convert Boolean expressions into circuits and explore how simplification helps hardware design.",
      lessons: [
        {
          title: "From Boolean Expressions to Circuits",
          explanation:
            "A Boolean expression can be implemented using logic gates. Each operation maps to a gate, and parentheses determine the order of operations. A circuit diagram represents how gates connect to produce the required output.",
          example:
            "For F = AB + C, connect A and B to an AND gate, then connect its output and C to an OR gate.",
          exercise:
            "Draw the logic circuit for F = (A + B)C.",
          quiz: {
            question: "Which gates implement F = AB + C?",
            options: [
              "Only a NOT gate",
              "An AND gate followed by an OR gate",
              "Only an XOR gate",
              "Only a NOR gate"
            ],
            answer: 1
          }
        },
        {
          title: "Universal Gates: NAND and NOR",
          explanation:
            "NAND and NOR are called universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates. They are useful in digital circuit design and standard-cell implementations.",
          example:
            "A NOT operation can be built using a NAND gate by connecting both inputs to A: NOT A = NAND(A,A).",
          exercise:
            "Write NAND-only implementations for NOT A and A AND B.",
          quiz: {
            question: "Why are NAND and NOR called universal gates?",
            options: [
              "They have no Boolean output",
              "They work only with analog signals",
              "They can be combined to implement any Boolean function",
              "They cannot implement NOT"
            ],
            answer: 2
          }
        },
        {
          title: "Circuit Simplification and Hardware Cost",
          explanation:
            "Simplifying Boolean expressions can reduce the number of gates and logic levels. This may reduce area, power consumption, and propagation delay. The actual benefit depends on the technology and the way the circuit is implemented.",
          example:
            "If an expression reduces from several redundant gates to a simpler equivalent circuit, it may require less hardware.",
          exercise:
            "Simplify a Boolean expression and compare the number of gates needed before and after simplification.",
          quiz: {
            question: "Why is Boolean simplification useful in VLSI?",
            options: [
              "It always increases gate count",
              "It can reduce hardware complexity",
              "It removes all input signals",
              "It guarantees zero power consumption"
            ],
            answer: 1
          }
        },
        {
          title: "Verification and Final Project",
          explanation:
            "Logic verification checks that a circuit produces the required output for all possible inputs. Truth tables, Boolean algebra, and simulation can be used to compare an implementation against its specification before moving to more advanced digital design.",
          example:
            "For a two-input alarm function, compare every possible input combination against the required truth table.",
          exercise:
            "Choose a simple digital function, write its truth table, simplify its Boolean expression, and draw the resulting circuit.",
          quiz: {
            question: "What is one way to verify a small combinational logic circuit?",
            options: [
              "Ignore its inputs",
              "Check only one random case",
              "Remove its output",
              "Compare its outputs against a truth table"
            ],
            answer: 3
          }
        }
      ],
      assignment:
        "Final mini project: Design a combinational logic circuit for a simple alarm or access-control function. Define the requirements, prepare a truth table, derive and simplify the Boolean expression, draw the circuit, and verify every input combination."
    }
  ]
};

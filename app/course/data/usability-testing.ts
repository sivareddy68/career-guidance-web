const usabilityTestingCourse = {
  title: "Usability Testing",
  description:
    "Learn usability testing, user research, test planning, task design, user observation, feedback analysis, accessibility, and practical UX evaluation.",

  weeks: [
    {
      title: "Week 1: Usability Testing Fundamentals",
      description:
        "Understand usability testing, its purpose, users, tasks, and the testing process.",
      lessons: [
        {
          title: "Introduction to Usability Testing",
          content: `Usability testing is a UX research method used to evaluate how easily people can use a product or interface.

During a usability test, participants perform realistic tasks while the researcher observes their behavior and difficulties.

The goal is to discover usability problems and understand where users become confused or blocked.

Usability testing can be performed on websites, mobile applications, prototypes, dashboards, and other digital products.`,
          quiz: [
            {
              question: "What is usability testing?",
              options: [
                "Evaluating how easily users can use a product",
                "Testing computer hardware",
                "Writing application code",
                "Managing databases",
              ],
              answer: "Evaluating how easily users can use a product",
            },
            {
              question: "What do participants perform during a usability test?",
              options: [
                "Realistic tasks",
                "Database administration",
                "Server configuration",
                "Hardware repair",
              ],
              answer: "Realistic tasks",
            },
            {
              question: "What is the main goal of usability testing?",
              options: [
                "Find usability problems",
                "Increase storage",
                "Change programming languages",
                "Build servers",
              ],
              answer: "Find usability problems",
            },
            {
              question: "What can be tested?",
              options: [
                "Websites and applications",
                "Only hardware",
                "Only databases",
                "Only operating systems",
              ],
              answer: "Websites and applications",
            },
            {
              question: "Who performs tasks during usability testing?",
              options: [
                "Participants",
                "Servers",
                "Databases",
                "Routers",
              ],
              answer: "Participants",
            },
          ],
        },
        {
          title: "Usability Principles",
          content: `Usability describes how effectively, efficiently, and comfortably users can complete tasks with a product.

Important usability principles include clear navigation, understandable content, consistency, feedback, error prevention, and ease of learning.

A usable interface should help users understand what to do without unnecessary confusion.

Designers use these principles when creating and evaluating interfaces.`,
          quiz: [
            {
              question: "What does usability focus on?",
              options: [
                "How effectively users can complete tasks",
                "Server hardware",
                "Database size",
                "Programming language",
              ],
              answer: "How effectively users can complete tasks",
            },
            {
              question: "Which is a usability principle?",
              options: [
                "Clear navigation",
                "Hidden controls",
                "Confusing labels",
                "Inconsistent layouts",
              ],
              answer: "Clear navigation",
            },
            {
              question: "Why is consistency useful?",
              options: [
                "It makes interfaces easier to understand",
                "It increases CPU speed",
                "It creates databases",
                "It replaces testing",
              ],
              answer: "It makes interfaces easier to understand",
            },
            {
              question: "What should a usable interface reduce?",
              options: [
                "User confusion",
                "User understanding",
                "Helpful feedback",
                "Clear navigation",
              ],
              answer: "User confusion",
            },
            {
              question: "What can help users understand an action?",
              options: [
                "Feedback",
                "Hidden messages",
                "Unclear buttons",
                "Random navigation",
              ],
              answer: "Feedback",
            },
          ],
        },
        {
          title: "Usability Testing Methods",
          content: `Usability testing can be moderated or unmoderated.

In moderated testing, a researcher guides the session, observes the participant, and can ask questions when appropriate.

In unmoderated testing, participants complete tasks independently using a testing platform or prototype.

Testing can also be conducted remotely or in person depending on the project and research needs.`,
          quiz: [
            {
              question: "What happens in moderated testing?",
              options: [
                "A researcher guides the session",
                "No one observes the test",
                "Only developers participate",
                "The interface is not tested",
              ],
              answer: "A researcher guides the session",
            },
            {
              question: "What happens in unmoderated testing?",
              options: [
                "Participants complete tasks independently",
                "A researcher performs every task",
                "Only developers test",
                "No tasks are given",
              ],
              answer: "Participants complete tasks independently",
            },
            {
              question: "Where can usability testing happen?",
              options: [
                "Remotely or in person",
                "Only in a laboratory",
                "Only at a company office",
                "Only after deployment",
              ],
              answer: "Remotely or in person",
            },
            {
              question: "Who observes moderated testing?",
              options: [
                "Researcher",
                "Database",
                "Router",
                "Operating system",
              ],
              answer: "Researcher",
            },
            {
              question: "Which is a usability testing method?",
              options: [
                "Moderated testing",
                "Database testing only",
                "Hardware assembly",
                "Network configuration",
              ],
              answer: "Moderated testing",
            },
          ],
        },
        {
          title: "Planning a Usability Test",
          content: `A usability test should be planned before participants begin testing.

The plan should define the research goal, target users, tasks, prototype or product, testing method, metrics, and session procedure.

Clear planning helps researchers collect useful and consistent information.

The test should focus on specific questions rather than trying to evaluate everything at once.`,
          quiz: [
            {
              question: "What should be defined before testing?",
              options: [
                "Research goals",
                "Only colors",
                "Only programming language",
                "Only database size",
              ],
              answer: "Research goals",
            },
            {
              question: "What should tasks represent?",
              options: [
                "Realistic user activities",
                "Random actions",
                "Server maintenance",
                "Database administration",
              ],
              answer: "Realistic user activities",
            },
            {
              question: "Why plan a usability test?",
              options: [
                "To collect useful and consistent information",
                "To increase application size",
                "To remove users",
                "To avoid research",
              ],
              answer: "To collect useful and consistent information",
            },
            {
              question: "What should a test focus on?",
              options: [
                "Specific research questions",
                "Every possible problem",
                "Only visual colors",
                "Only source code",
              ],
              answer: "Specific research questions",
            },
            {
              question: "Which can be part of a test plan?",
              options: [
                "Target users",
                "Computer brand",
                "Office furniture",
                "Server electricity",
              ],
              answer: "Target users",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Test Tasks and User Observation",
      description:
        "Learn how to create realistic tasks, conduct sessions, observe users, and collect useful evidence.",
      lessons: [
        {
          title: "Creating Usability Test Tasks",
          content: `A usability test task asks participants to complete a realistic goal using a product.

Good tasks describe what the user wants to accomplish without unnecessarily telling them exactly which buttons to press.

For example, instead of saying "Click the search icon and type a product name," a better task may be "Find a laptop suitable for your needs."

Tasks should be clear, realistic, and connected to the research objectives.`,
          quiz: [
            {
              question: "What should a usability task represent?",
              options: [
                "A realistic user goal",
                "A random button click",
                "A database operation",
                "A server configuration",
              ],
              answer: "A realistic user goal",
            },
            {
              question: "What should a task avoid?",
              options: [
                "Unnecessarily giving exact interaction instructions",
                "Having a clear goal",
                "Being realistic",
                "Being related to the research",
              ],
              answer:
                "Unnecessarily giving exact interaction instructions",
            },
            {
              question: "Which is a better usability task?",
              options: [
                "Find a suitable laptop",
                "Click the blue button",
                "Press the third icon",
                "Open the exact menu specified",
              ],
              answer: "Find a suitable laptop",
            },
            {
              question: "Tasks should be connected to what?",
              options: [
                "Research objectives",
                "Computer brand",
                "Server size",
                "Database password",
              ],
              answer: "Research objectives",
            },
            {
              question: "What makes a task useful?",
              options: [
                "Clear and realistic goal",
                "Random instructions",
                "Hidden purpose",
                "Unrelated actions",
              ],
              answer: "Clear and realistic goal",
            },
          ],
        },
        {
          title: "Observing User Behavior",
          content: `Observation is an important part of usability testing.

Researchers can observe where users hesitate, what they click, where they make mistakes, and how they complete tasks.

The researcher should avoid unnecessarily influencing the participant.

Instead of immediately explaining how an interface works, the researcher should allow the participant to attempt the task and record useful observations.`,
          quiz: [
            {
              question: "What can researchers observe?",
              options: [
                "User behavior and difficulties",
                "Only source code",
                "Only database records",
                "Only server speed",
              ],
              answer: "User behavior and difficulties",
            },
            {
              question: "What should researchers avoid?",
              options: [
                "Unnecessarily influencing participants",
                "Taking notes",
                "Observing behavior",
                "Recording findings",
              ],
              answer: "Unnecessarily influencing participants",
            },
            {
              question: "What can hesitation indicate?",
              options: [
                "Possible usability difficulty",
                "Server failure",
                "Database failure",
                "Hardware damage",
              ],
              answer: "Possible usability difficulty",
            },
            {
              question: "What should a researcher do during a task?",
              options: [
                "Observe and record useful behavior",
                "Complete the task for the participant",
                "Change the interface",
                "Give every answer",
              ],
              answer: "Observe and record useful behavior",
            },
            {
              question: "Why observe users directly?",
              options: [
                "To understand how they actually use the interface",
                "To increase storage",
                "To replace development",
                "To configure servers",
              ],
              answer:
                "To understand how they actually use the interface",
            },
          ],
        },
        {
          title: "Think-Aloud Testing",
          content: `Think-aloud testing asks participants to describe what they are thinking while performing a task.

Participants may explain what they expect to happen, what they are looking for, or why they are unsure about an interface element.

This can reveal users' expectations and mental models.

Researchers should give simple instructions and avoid interrupting participants unnecessarily.`,
          quiz: [
            {
              question: "What happens in think-aloud testing?",
              options: [
                "Participants describe their thoughts while completing tasks",
                "Researchers complete all tasks",
                "Developers write code",
                "Users test hardware",
              ],
              answer:
                "Participants describe their thoughts while completing tasks",
            },
            {
              question: "What can think-aloud reveal?",
              options: [
                "User expectations",
                "Server temperature",
                "Database size",
                "CPU speed",
              ],
              answer: "User expectations",
            },
            {
              question: "What might a participant describe?",
              options: [
                "What they expect to happen",
                "Database architecture",
                "Server hardware",
                "Network topology",
              ],
              answer: "What they expect to happen",
            },
            {
              question: "Should researchers constantly interrupt users?",
              options: ["No", "Yes", "Always", "Only during login"],
              answer: "No",
            },
            {
              question: "What does think-aloud help understand?",
              options: [
                "Users' mental models",
                "CPU architecture",
                "Database indexing",
                "Network routing",
              ],
              answer: "Users' mental models",
            },
          ],
        },
        {
          title: "Recording and Documenting Findings",
          content: `Usability sessions produce observations that should be documented carefully.

Researchers can record task completion, errors, time taken, user comments, and notable behaviors.

Notes should distinguish between direct observations and personal assumptions.

Organized findings make it easier to identify patterns across multiple participants.`,
          quiz: [
            {
              question: "What should researchers record?",
              options: [
                "Task results and user observations",
                "Only computer specifications",
                "Only source code",
                "Only database tables",
              ],
              answer: "Task results and user observations",
            },
            {
              question: "Which can be recorded?",
              options: [
                "Task completion time",
                "Monitor weight",
                "Keyboard color",
                "Office size",
              ],
              answer: "Task completion time",
            },
            {
              question: "What should notes distinguish?",
              options: [
                "Observations from assumptions",
                "Users from developers",
                "Servers from routers",
                "Code from databases",
              ],
              answer: "Observations from assumptions",
            },
            {
              question: "Why organize findings?",
              options: [
                "To identify patterns",
                "To increase file size",
                "To remove feedback",
                "To replace testing",
              ],
              answer: "To identify patterns",
            },
            {
              question: "What is a useful research record?",
              options: [
                "User comments and observed behavior",
                "Only interface colors",
                "Only server logs",
                "Only database records",
              ],
              answer: "User comments and observed behavior",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Analyzing Usability Results",
      description:
        "Learn how to analyze test results, identify patterns, prioritize problems, and turn findings into design improvements.",
      lessons: [
        {
          title: "Usability Metrics",
          content: `Usability metrics provide measurable information about how users interact with a product.

Common metrics include task completion rate, task time, error rate, and user satisfaction.

Metrics should be selected based on the research objectives.

Quantitative metrics can be combined with qualitative observations to provide a more complete understanding of usability.`,
          quiz: [
            {
              question: "What are usability metrics?",
              options: [
                "Measurements used to evaluate usability",
                "Programming languages",
                "Database commands",
                "Server settings",
              ],
              answer: "Measurements used to evaluate usability",
            },
            {
              question: "Which is a usability metric?",
              options: [
                "Task completion rate",
                "CPU brand",
                "Monitor size",
                "Keyboard weight",
              ],
              answer: "Task completion rate",
            },
            {
              question: "What can task time measure?",
              options: [
                "How long users take to complete a task",
                "Server temperature",
                "Database size",
                "Screen resolution",
              ],
              answer: "How long users take to complete a task",
            },
            {
              question: "What can error rate indicate?",
              options: [
                "How often users make errors",
                "Internet speed",
                "CPU speed",
                "Storage capacity",
              ],
              answer: "How often users make errors",
            },
            {
              question: "What can quantitative metrics be combined with?",
              options: [
                "Qualitative observations",
                "Hardware specifications",
                "Network cables",
                "Database passwords",
              ],
              answer: "Qualitative observations",
            },
          ],
        },
        {
          title: "Analyzing User Feedback",
          content: `User feedback can contain comments, complaints, suggestions, and observations.

Researchers should group similar feedback into themes instead of treating every comment as a separate problem.

For example, comments about difficulty finding a feature may indicate a navigation problem.

The analysis should focus on evidence and repeated patterns rather than relying on one isolated opinion.`,
          quiz: [
            {
              question: "What can user feedback contain?",
              options: [
                "Comments and suggestions",
                "Only source code",
                "Only database records",
                "Only server logs",
              ],
              answer: "Comments and suggestions",
            },
            {
              question: "Why group similar feedback?",
              options: [
                "To identify common themes",
                "To delete feedback",
                "To increase storage",
                "To replace research",
              ],
              answer: "To identify common themes",
            },
            {
              question: "What can repeated navigation complaints indicate?",
              options: [
                "A navigation problem",
                "CPU failure",
                "Database failure",
                "Hardware damage",
              ],
              answer: "A navigation problem",
            },
            {
              question: "Should one isolated opinion always determine a design change?",
              options: [
                "Not necessarily",
                "Always",
                "Yes in every case",
                "Only for websites",
              ],
              answer: "Not necessarily",
            },
            {
              question: "What should analysis focus on?",
              options: [
                "Evidence and patterns",
                "Personal guesses only",
                "Computer specifications",
                "Server hardware",
              ],
              answer: "Evidence and patterns",
            },
          ],
        },
        {
          title: "Identifying and Prioritizing Usability Problems",
          content: `A usability test may reveal many problems, but not every problem has the same impact.

Problems can be prioritized based on factors such as severity, frequency, number of users affected, and importance of the affected task.

High-impact problems should generally receive attention before minor visual issues.

Prioritization helps teams use limited design and development time effectively.`,
          quiz: [
            {
              question: "Why prioritize usability problems?",
              options: [
                "Not all problems have the same impact",
                "To ignore users",
                "To remove testing",
                "To increase code size",
              ],
              answer: "Not all problems have the same impact",
            },
            {
              question: "What can influence priority?",
              options: [
                "Severity and frequency",
                "Keyboard color",
                "Monitor size",
                "Office location",
              ],
              answer: "Severity and frequency",
            },
            {
              question: "Which problem usually deserves more attention?",
              options: [
                "A problem preventing users from completing an important task",
                "A minor spacing issue",
                "A small color preference",
                "A decorative detail",
              ],
              answer:
                "A problem preventing users from completing an important task",
            },
            {
              question: "What does severity describe?",
              options: [
                "Impact of a usability problem",
                "Number of screens",
                "File size",
                "Server speed",
              ],
              answer: "Impact of a usability problem",
            },
            {
              question: "What does prioritization help manage?",
              options: [
                "Limited design and development time",
                "Computer hardware",
                "Database passwords",
                "Network cables",
              ],
              answer: "Limited design and development time",
            },
          ],
        },
        {
          title: "Improving Designs from Test Results",
          content: `The purpose of usability testing is not only to identify problems but also to improve the product.

Designers can revise navigation, labels, layouts, forms, content, interactions, or information architecture based on findings.

After making significant changes, another round of testing can verify whether the problems were reduced.

This creates an iterative cycle of design, testing, analysis, and improvement.`,
          quiz: [
            {
              question: "What should happen after identifying important usability problems?",
              options: [
                "Improve the design",
                "Ignore the findings",
                "Delete the product",
                "Stop research",
              ],
              answer: "Improve the design",
            },
            {
              question: "What can be changed based on findings?",
              options: [
                "Navigation and layouts",
                "CPU hardware",
                "Network cables",
                "Server electricity",
              ],
              answer: "Navigation and layouts",
            },
            {
              question: "Why conduct another test after major changes?",
              options: [
                "To verify improvements",
                "To remove feedback",
                "To replace the application",
                "To increase storage",
              ],
              answer: "To verify improvements",
            },
            {
              question: "What is the general cycle?",
              options: [
                "Design, test, analyze, improve",
                "Code, delete, repeat",
                "Deploy, ignore, stop",
                "Design, deploy, forget",
              ],
              answer: "Design, test, analyze, improve",
            },
            {
              question: "What is the ultimate purpose of usability testing?",
              options: [
                "Improve the user experience",
                "Increase database size",
                "Change hardware",
                "Replace developers",
              ],
              answer: "Improve the user experience",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical UX Evaluation",
      description:
        "Apply usability testing to real products and build a complete UX testing case study.",
      lessons: [
        {
          title: "Remote Usability Testing",
          content: `Remote usability testing allows participants to test a product from their own location.

It can be moderated through video communication or unmoderated through online testing platforms.

Remote testing can make it easier to reach participants from different locations.

Researchers should provide clear instructions and ensure that the testing setup works before the session begins.`,
          quiz: [
            {
              question: "What is remote usability testing?",
              options: [
                "Testing with participants from different locations",
                "Testing only inside an office",
                "Testing hardware remotely",
                "Testing databases only",
              ],
              answer: "Testing with participants from different locations",
            },
            {
              question: "How can moderated remote testing be conducted?",
              options: [
                "Through video communication",
                "Only through databases",
                "Only through servers",
                "Only through hardware",
              ],
              answer: "Through video communication",
            },
            {
              question: "What is one advantage of remote testing?",
              options: [
                "Access to participants in different locations",
                "No need for tasks",
                "No research required",
                "No prototype required",
              ],
              answer: "Access to participants in different locations",
            },
            {
              question: "What should researchers prepare?",
              options: [
                "Clear instructions and testing setup",
                "Only source code",
                "Only database tables",
                "Only server hardware",
              ],
              answer: "Clear instructions and testing setup",
            },
            {
              question: "Can remote testing be moderated or unmoderated?",
              options: ["Yes", "No", "Only moderated", "Only unmoderated"],
              answer: "Yes",
            },
          ],
        },
        {
          title: "Accessibility Usability Testing",
          content: `Accessibility usability testing evaluates whether people with different abilities can use an interface effectively.

Testing can consider keyboard navigation, readable text, labels, focus states, alternative text, and understandable error messages.

Accessibility testing should involve appropriate users when possible rather than relying only on assumptions.

Combining accessibility checks with usability testing helps create more inclusive products.`,
          quiz: [
            {
              question: "What does accessibility testing evaluate?",
              options: [
                "Whether people with different abilities can use the interface",
                "Only server performance",
                "Only database speed",
                "Only source code",
              ],
              answer:
                "Whether people with different abilities can use the interface",
            },
            {
              question: "What can accessibility testing check?",
              options: [
                "Keyboard navigation",
                "CPU speed",
                "Database size",
                "Server location",
              ],
              answer: "Keyboard navigation",
            },
            {
              question: "Why involve appropriate users?",
              options: [
                "They can provide direct experience and feedback",
                "They increase storage",
                "They replace developers",
                "They create databases",
              ],
              answer: "They can provide direct experience and feedback",
            },
            {
              question: "Which can improve accessibility?",
              options: [
                "Clear labels",
                "Unclear navigation",
                "Tiny unreadable text",
                "Hidden focus states",
              ],
              answer: "Clear labels",
            },
            {
              question: "What can accessibility testing help create?",
              options: [
                "More inclusive products",
                "Faster processors",
                "Larger databases",
                "New programming languages",
              ],
              answer: "More inclusive products",
            },
          ],
        },
        {
          title: "Usability Testing Report",
          content: `A usability testing report communicates what was tested, who participated, what was observed, and what should be improved.

A useful report can include the research objective, participant information, tasks, findings, metrics, screenshots, severity, and recommendations.

The report should separate observed evidence from assumptions.

Clear reporting helps designers, developers, and stakeholders understand the results and decide what to improve.`,
          quiz: [
            {
              question: "What is the purpose of a usability report?",
              options: [
                "Communicate testing findings and recommendations",
                "Replace the prototype",
                "Create a database",
                "Write application code",
              ],
              answer: "Communicate testing findings and recommendations",
            },
            {
              question: "What can a report include?",
              options: [
                "Tasks and findings",
                "Only source code",
                "Only server settings",
                "Only hardware specifications",
              ],
              answer: "Tasks and findings",
            },
            {
              question: "Why include metrics?",
              options: [
                "To provide measurable evidence",
                "To increase file size",
                "To replace user feedback",
                "To remove testing",
              ],
              answer: "To provide measurable evidence",
            },
            {
              question: "What should findings be based on?",
              options: [
                "Observed evidence",
                "Random guesses",
                "Personal assumptions only",
                "Computer specifications",
              ],
              answer: "Observed evidence",
            },
            {
              question: "Who can use the report?",
              options: [
                "Designers, developers, and stakeholders",
                "Only servers",
                "Only databases",
                "Only hardware engineers",
              ],
              answer: "Designers, developers, and stakeholders",
            },
          ],
        },
        {
          title: "Mini Project: Complete Usability Testing Study",
          content: `For the final project, choose a website or mobile application prototype and conduct a complete usability testing study.

First define the research goal and identify suitable participants. Create realistic tasks that represent important user activities.

Conduct the sessions while observing user behavior and recording useful evidence.

Analyze task completion, errors, time, comments, and recurring problems. Prioritize the most important usability issues.

Finally, improve the prototype and create a usability testing report showing the original problem, test plan, findings, design changes, and final results.`,
          quiz: [
            {
              question: "What is the goal of the mini project?",
              options: [
                "Conduct a complete usability testing study",
                "Build a server",
                "Create a database",
                "Write an operating system",
              ],
              answer: "Conduct a complete usability testing study",
            },
            {
              question: "What should be defined first?",
              options: [
                "Research goal",
                "Final report color",
                "Server hardware",
                "Database password",
              ],
              answer: "Research goal",
            },
            {
              question: "What should participants perform?",
              options: [
                "Realistic tasks",
                "Server maintenance",
                "Database administration",
                "Hardware repair",
              ],
              answer: "Realistic tasks",
            },
            {
              question: "What should be analyzed?",
              options: [
                "Task results, errors, time, and feedback",
                "Only screen colors",
                "Only computer hardware",
                "Only source code",
              ],
              answer: "Task results, errors, time, and feedback",
            },
            {
              question: "What should the final report contain?",
              options: [
                "Test plan, findings, improvements, and results",
                "Only screenshots",
                "Only source code",
                "Only database tables",
              ],
              answer: "Test plan, findings, improvements, and results",
            },
          ],
        },
      ],
    },
  ],
};

export default usabilityTestingCourse;
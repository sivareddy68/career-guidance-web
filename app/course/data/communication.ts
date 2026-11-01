export const communicationCourse = {
  id: "communication",
  title: "Communication Skills",
  description:
    "Build practical communication skills for college, interviews, teamwork, presentations and professional situations.",
  duration: "8 Weeks",
  level: "Beginner",

  weeks: [
    {
      week: 1,
      title: "Communication Fundamentals",

      lessons: [
        {
          id: "comm-w1-l1",
          title: "What is Communication?",
          content: `
Communication is the process of sharing information, ideas, thoughts
and feelings between people.

Communication can happen through:

- Speaking
- Writing
- Listening
- Body language
- Facial expressions
- Visual information

Good communication means expressing information clearly and
understanding the other person correctly.
          `,
          example:
            "A student explaining a project to a teacher is an example of communication."
        },

        {
          id: "comm-w1-l2",
          title: "Elements of Communication",
          content: `
The main elements of communication are:

Sender
The person who sends the message.

Message
The information being communicated.

Medium
The method used to communicate.

Receiver
The person who receives the message.

Feedback
The response from the receiver.

Effective communication happens when the receiver understands
the intended message.
          `,
          example:
            "In an interview, the interviewer is the receiver when the candidate answers a question."
        },

        {
          id: "comm-w1-l3",
          title: "Verbal Communication",
          content: `
Verbal communication uses spoken words.

Important areas include:

- Clear pronunciation
- Suitable vocabulary
- Correct sentence structure
- Appropriate tone
- Speaking at a comfortable speed

The goal is not to use complicated words. The goal is to communicate
ideas clearly.
          `,
          example:
            "Instead of using complicated technical words, explain a project using simple language when speaking to a non-technical person."
        },

        {
          id: "comm-w1-l4",
          title: "Non-Verbal Communication",
          content: `
Non-verbal communication includes information communicated without
spoken words.

Examples:

- Facial expressions
- Eye contact
- Posture
- Gestures
- Hand movements
- Personal space

Non-verbal communication can support spoken communication.
          `,
          example:
            "Maintaining appropriate eye contact during an interview can show that you are engaged in the conversation."
        },

        {
          id: "comm-w1-l5",
          title: "Barriers to Communication",
          content: `
Communication barriers can make a message difficult to understand.

Common barriers include:

- Poor listening
- Unclear language
- Noise
- Language differences
- Lack of attention
- Wrong assumptions
- Fear of speaking
- Technical problems

Identifying the barrier is the first step toward improving communication.
          `,
          example:
            "Background noise during an online meeting can make communication difficult."
        }
      ],

      quiz: [
        {
          question: "What is communication?",
          options: [
            "Sharing information and ideas",
            "Only writing",
            "Only speaking",
            "Only listening"
          ],
          answer: "Sharing information and ideas"
        },
        {
          question: "Who sends a message?",
          options: ["Sender", "Receiver", "Audience only", "Observer"],
          answer: "Sender"
        },
        {
          question: "Who receives a message?",
          options: ["Receiver", "Sender", "Writer", "Speaker"],
          answer: "Receiver"
        },
        {
          question: "What is feedback?",
          options: [
            "A response to communication",
            "A database",
            "A programming language",
            "A document"
          ],
          answer: "A response to communication"
        },
        {
          question: "Which is verbal communication?",
          options: [
            "Speaking",
            "Posture",
            "Facial expression",
            "Gesture"
          ],
          answer: "Speaking"
        },
        {
          question: "Which is non-verbal communication?",
          options: [
            "Facial expression",
            "Speaking",
            "Writing an email",
            "Reading"
          ],
          answer: "Facial expression"
        },
        {
          question: "What can be a communication barrier?",
          options: [
            "Poor listening",
            "Clear speech",
            "Good feedback",
            "Attention"
          ],
          answer: "Poor listening"
        },
        {
          question: "What is the main goal of communication?",
          options: [
            "Clear understanding",
            "Using difficult words",
            "Speaking quickly",
            "Speaking for a long time"
          ],
          answer: "Clear understanding"
        },
        {
          question: "Can body language communicate information?",
          options: ["Yes", "No", "Never", "Only online"],
          answer: "Yes"
        },
        {
          question: "Is feedback part of communication?",
          options: ["Yes", "No", "Only in writing", "Only in interviews"],
          answer: "Yes"
        }
      ],

      assignment:
        "Write a one-page explanation of communication and identify five communication barriers you have observed in everyday situations."
    },

    {
      week: 2,
      title: "Listening Skills",

      lessons: [
        {
          id: "comm-w2-l1",
          title: "What is Active Listening?",
          content: `
Active listening means paying attention to the speaker and trying
to understand the complete message.

Active listening includes:

- Paying attention
- Avoiding unnecessary interruptions
- Understanding the main idea
- Asking relevant questions
- Giving appropriate feedback
          `,
          example:
            "During a team discussion, listen to the complete explanation before responding."
        },

        {
          id: "comm-w2-l2",
          title: "Listening vs Hearing",
          content: `
Hearing is the ability to receive sound.

Listening requires attention and understanding.

A person may hear a teacher's words without actually understanding
the lesson.

Effective listening requires active attention.
          `,
          example:
            "Hearing a presentation is different from actively understanding and remembering its main points."
        },

        {
          id: "comm-w2-l3",
          title: "Asking Questions",
          content: `
Good questions help clarify information.

Useful question types include:

- What?
- Why?
- How?
- When?
- Where?
- Which?

Ask questions when something is unclear instead of making assumptions.
          `,
          example:
            "If a project requirement is unclear, ask the team member to explain the expected result."
        },

        {
          id: "comm-w2-l4",
          title: "Note Taking",
          content: `
Good note taking helps remember important information.

Useful methods include:

- Writing keywords
- Recording important numbers
- Using headings
- Creating short bullet points
- Summarizing information

Avoid trying to write every word.
          `,
          example:
            "During a lecture, write the main concepts and examples instead of copying every sentence."
        },

        {
          id: "comm-w2-l5",
          title: "Listening in Meetings",
          content: `
During meetings:

1. Pay attention.
2. Understand the topic.
3. Take important notes.
4. Ask relevant questions.
5. Confirm responsibilities.
6. Summarize important decisions.

Good listening improves teamwork.
          `,
          example:
            "Before leaving a meeting, confirm your assigned task and deadline."
        }
      ],

      quiz: [
        {
          question: "What is active listening?",
          options: [
            "Paying attention and understanding",
            "Only hearing sounds",
            "Interrupting frequently",
            "Ignoring the speaker"
          ],
          answer: "Paying attention and understanding"
        },
        {
          question: "Is hearing the same as listening?",
          options: ["No", "Yes", "Always", "Only in meetings"],
          answer: "No"
        },
        {
          question: "What should you do when something is unclear?",
          options: [
            "Ask a relevant question",
            "Guess",
            "Ignore it",
            "Change the topic"
          ],
          answer: "Ask a relevant question"
        },
        {
          question: "What helps remember important information?",
          options: ["Note taking", "Ignoring", "Interrupting", "Guessing"],
          answer: "Note taking"
        },
        {
          question: "Should notes contain every spoken word?",
          options: [
            "No, focus on important information",
            "Yes, always",
            "Only names",
            "Only numbers"
          ],
          answer: "No, focus on important information"
        },
        {
          question: "Why is listening important in teamwork?",
          options: [
            "It improves understanding",
            "It avoids all communication",
            "It removes responsibilities",
            "It replaces meetings"
          ],
          answer: "It improves understanding"
        },
        {
          question: "Which question asks for a reason?",
          options: ["Why?", "What?", "Where?", "When?"],
          answer: "Why?"
        },
        {
          question: "What should be confirmed after a meeting?",
          options: [
            "Tasks and responsibilities",
            "Only the meeting room",
            "Only the date",
            "Nothing"
          ],
          answer: "Tasks and responsibilities"
        },
        {
          question: "Does active listening reduce misunderstandings?",
          options: ["Yes", "No", "Never", "Only online"],
          answer: "Yes"
        },
        {
          question: "What should you avoid while someone is explaining something?",
          options: [
            "Unnecessary interruptions",
            "Attention",
            "Questions",
            "Note taking"
          ],
          answer: "Unnecessary interruptions"
        }
      ],

      assignment:
        "Listen to a short lecture, presentation or educational video and create a one-page summary using your own words."
    },

    {
      week: 3,
      title: "Speaking and Conversation Skills",

      lessons: [
        {
          id: "comm-w3-l1",
          title: "Speaking Clearly",
          content: `
Clear speaking means expressing your ideas so that others can
understand them easily.

Focus on:

- Pronunciation
- Suitable speed
- Simple vocabulary
- Clear sentence structure
- Appropriate volume

Speaking slowly enough to be understood is better than speaking
very quickly.
          `,
          example:
            "When explaining a project, introduce the problem first and then explain your solution."
        },

        {
          id: "comm-w3-l2",
          title: "Starting a Conversation",
          content: `
A professional conversation can begin with:

- A greeting
- Introducing yourself
- Asking a simple relevant question
- Mentioning the purpose of the conversation

Keep the opening natural and appropriate to the situation.
          `,
          example:
            "Hello, I'm Siva. I'm working on a student career guidance project. Could I ask you about your experience?"
        },

        {
          id: "comm-w3-l3",
          title: "Maintaining a Conversation",
          content: `
A good conversation is a two-way process.

Useful habits:

- Listen carefully
- Respond to the previous point
- Ask relevant follow-up questions
- Avoid changing topics suddenly
- Give the other person a chance to speak
          `,
          example:
            "If someone explains their project, ask a question about the technology they used instead of immediately changing the subject."
        },

        {
          id: "comm-w3-l4",
          title: "Explaining Ideas",
          content: `
A simple structure for explaining an idea is:

1. What is the topic?
2. Why is it important?
3. How does it work?
4. Give an example.
5. Summarize the main point.

This structure is useful for interviews and presentations.
          `,
          example:
            "Explain an AI application by first describing the problem, then the solution, technology and result."
        },

        {
          id: "comm-w3-l5",
          title: "Handling Questions",
          content: `
When someone asks a question:

1. Listen completely.
2. Understand the question.
3. Think briefly.
4. Answer directly.
5. Add an explanation if needed.

If you do not know the answer, be honest and explain what you know.
          `,
          example:
            "I don't know the exact answer, but I understand that the system uses a database to store the information."
        }
      ],

      quiz: [
        {
          question: "What makes speaking effective?",
          options: [
            "Clear and understandable language",
            "Speaking extremely fast",
            "Using difficult words",
            "Speaking without pauses"
          ],
          answer: "Clear and understandable language"
        },
        {
          question: "How should a professional conversation begin?",
          options: [
            "With an appropriate greeting",
            "By interrupting",
            "By changing the topic",
            "By asking unrelated questions"
          ],
          answer: "With an appropriate greeting"
        },
        {
          question: "What makes a conversation two-way?",
          options: [
            "Both people participate",
            "Only one person speaks",
            "Nobody listens",
            "Only questions are asked"
          ],
          answer: "Both people participate"
        },
        {
          question: "What should you do when answering a question?",
          options: [
            "Listen and answer directly",
            "Ignore it",
            "Change the subject",
            "Speak without understanding"
          ],
          answer: "Listen and answer directly"
        },
        {
          question: "Should you use complicated words whenever possible?",
          options: [
            "No",
            "Yes",
            "Always",
            "Only in college"
          ],
          answer: "No"
        },
        {
          question: "What should you do if you don't know an answer?",
          options: [
            "Be honest",
            "Invent information",
            "Avoid the question",
            "Blame someone"
          ],
          answer: "Be honest"
        },
        {
          question: "What helps explain an idea?",
          options: [
            "A clear structure",
            "Random information",
            "Very fast speech",
            "No examples"
          ],
          answer: "A clear structure"
        },
        {
          question: "Should the other person get a chance to speak?",
          options: ["Yes", "No", "Never", "Only online"],
          answer: "Yes"
        },
        {
          question: "What is a useful follow-up question?",
          options: [
            "A question related to the previous point",
            "An unrelated question",
            "No question",
            "A repeated greeting"
          ],
          answer: "A question related to the previous point"
        },
        {
          question: "Is honesty important when answering questions?",
          options: ["Yes", "No", "Never", "Only in interviews"],
          answer: "Yes"
        }
      ],

      assignment:
        "Record yourself giving a two-minute explanation of one technical project. Review your clarity, speed and structure."
    },

    {
      week: 4,
      title: "Professional Writing",

      lessons: [
        {
          id: "comm-w4-l1",
          title: "Professional Messages",
          content: `
Professional messages should be:

- Clear
- Short when possible
- Polite
- Relevant
- Easy to understand

Include the important information without unnecessary details.
          `,
          example:
            "A message to a professor should clearly mention the purpose, required action and relevant date."
        },

        {
          id: "comm-w4-l2",
          title: "Email Structure",
          content: `
A professional email normally contains:

- Subject
- Greeting
- Purpose
- Main information
- Required action
- Closing
- Name

The subject should clearly describe the purpose of the email.
          `,
          example:
            "Subject: Request for Project Review"
        },

        {
          id: "comm-w4-l3",
          title: "Formal and Informal Language",
          content: `
Informal communication is common with close friends.

Professional communication normally requires more formal and
respectful language.

Choose language according to:

- Audience
- Situation
- Relationship
- Purpose
          `,
          example:
            "A message to a friend can be casual, while a message to a company recruiter should be professional."
        },

        {
          id: "comm-w4-l4",
          title: "Writing Clear Paragraphs",
          content: `
A clear paragraph normally contains:

1. Main idea
2. Supporting information
3. Example or explanation
4. Closing point

Avoid very long sentences when shorter sentences can communicate
the idea more clearly.
          `,
          example:
            "Explain one main project feature in one paragraph instead of combining several unrelated ideas."
        },

        {
          id: "comm-w4-l5",
          title: "Proofreading",
          content: `
Before sending professional writing, check:

- Spelling
- Grammar
- Names
- Dates
- Numbers
- Formatting
- Tone
- Missing information

Proofreading helps avoid simple mistakes.
          `,
          example:
            "Read an important email once before sending it to check names and dates."
        }
      ],

      quiz: [
        {
          question: "What should a professional message be?",
          options: [
            "Clear and relevant",
            "Very long",
            "Confusing",
            "Unrelated"
          ],
          answer: "Clear and relevant"
        },
        {
          question: "What should an email subject describe?",
          options: [
            "The purpose of the email",
            "The sender's hobbies",
            "The recipient's age",
            "Nothing"
          ],
          answer: "The purpose of the email"
        },
        {
          question: "Should communication style depend on the audience?",
          options: ["Yes", "No", "Never", "Only at school"],
          answer: "Yes"
        },
        {
          question: "What should a paragraph normally have?",
          options: [
            "A main idea",
            "Only random sentences",
            "Only numbers",
            "Only questions"
          ],
          answer: "A main idea"
        },
        {
          question: "Why proofread?",
          options: [
            "To find mistakes",
            "To make writing longer",
            "To remove all punctuation",
            "To change the topic"
          ],
          answer: "To find mistakes"
        },
        {
          question: "Which is important in a professional email?",
          options: [
            "Greeting and purpose",
            "Only emojis",
            "Only a subject",
            "No closing"
          ],
          answer: "Greeting and purpose"
        },
        {
          question: "Should a professional email be unnecessarily long?",
          options: ["No", "Yes", "Always", "Only for recruiters"],
          answer: "No"
        },
        {
          question: "Which should be checked before sending an email?",
          options: [
            "Names and dates",
            "Computer wallpaper",
            "Keyboard",
            "Screen size"
          ],
          answer: "Names and dates"
        },
        {
          question: "Should formal language be used with a recruiter?",
          options: ["Yes", "No", "Never", "Only in messages"],
          answer: "Yes"
        },
        {
          question: "Is clarity important in professional writing?",
          options: ["Yes", "No", "Never", "Only in reports"],
          answer: "Yes"
        }
      ],

      assignment:
        "Write three professional emails: one to a professor, one to a recruiter and one requesting a project review."
    },

    {
      week: 5,
      title: "Presentation Skills",

      lessons: [
        {
          id: "comm-w5-l1",
          title: "Planning a Presentation",
          content: `
A good presentation starts with planning.

Basic structure:

1. Introduction
2. Main topic
3. Supporting points
4. Examples
5. Conclusion

Understand the audience before preparing the content.
          `,
          example:
            "A technical presentation for engineers can contain more technical details than a presentation for general students."
        },

        {
          id: "comm-w5-l2",
          title: "Presentation Introduction",
          content: `
A strong introduction should tell the audience:

- Who you are
- What the topic is
- Why the topic matters
- What will be covered

Keep the introduction short.
          `,
          example:
            "Good morning. I'm Siva. Today I will explain our student career guidance application and how it recommends learning roadmaps."
        },

        {
          id: "comm-w5-l3",
          title: "Using Visual Aids",
          content: `
Visual aids can include:

- Slides
- Diagrams
- Charts
- Images
- Demonstrations

Visuals should support your explanation rather than replace it.

Avoid overcrowding slides with text.
          `,
          example:
            "Use a simple architecture diagram to explain how an application works."
        },

        {
          id: "comm-w5-l4",
          title: "Managing Presentation Time",
          content: `
A presentation should fit the available time.

Plan approximately:

Introduction
Main content
Demonstration
Questions
Conclusion

Practice before the presentation to estimate timing.
          `,
          example:
            "For a 10-minute presentation, do not prepare 30 minutes of material."
        },

        {
          id: "comm-w5-l5",
          title: "Handling Audience Questions",
          content: `
When answering questions:

- Listen carefully
- Repeat or clarify the question if necessary
- Answer directly
- Explain briefly
- Admit when you do not know something

Remain respectful even when a question is difficult.
          `,
          example:
            "That is a good question. I haven't implemented that feature yet, but it can be added in a future version."
        }
      ],

      quiz: [
        {
          question: "What should a presentation have?",
          options: [
            "Introduction, main content and conclusion",
            "Only slides",
            "Only images",
            "Only questions"
          ],
          answer: "Introduction, main content and conclusion"
        },
        {
          question: "Why understand the audience?",
          options: [
            "To choose suitable content",
            "To make the presentation longer",
            "To avoid preparation",
            "To remove examples"
          ],
          answer: "To choose suitable content"
        },
        {
          question: "What can be used as a visual aid?",
          options: ["Diagram", "Password", "Database", "Keyboard"],
          answer: "Diagram"
        },
        {
          question: "Should slides contain too much text?",
          options: ["No", "Yes", "Always", "Only in technical presentations"],
          answer: "No"
        },
        {
          question: "Why practice a presentation?",
          options: [
            "To improve timing and delivery",
            "To avoid learning",
            "To increase slide count",
            "To remove questions"
          ],
          answer: "To improve timing and delivery"
        },
        {
          question: "What should you do when asked a difficult question?",
          options: [
            "Listen and answer honestly",
            "Become angry",
            "Ignore the audience",
            "Invent information"
          ],
          answer: "Listen and answer honestly"
        },
        {
          question: "Should visuals support the explanation?",
          options: ["Yes", "No", "Never", "Only in online meetings"],
          answer: "Yes"
        },
        {
          question: "What should the conclusion do?",
          options: [
            "Summarize the main points",
            "Introduce a new unrelated topic",
            "Add random information",
            "End without explanation"
          ],
          answer: "Summarize the main points"
        },
        {
          question: "Should a presentation fit its time limit?",
          options: ["Yes", "No", "Never", "Only in college"],
          answer: "Yes"
        },
        {
          question: "Is audience interaction useful?",
          options: ["Yes", "No", "Never", "Only online"],
          answer: "Yes"
        }
      ],

      assignment:
        "Prepare and deliver a five-minute presentation about one technical project using a clear introduction, three main points and a conclusion."
    },

    {
      week: 6,
      title: "Interview Communication",

      lessons: [
        {
          id: "comm-w6-l1",
          title: "Interview Introduction",
          content: `
A self-introduction should be short and relevant.

A useful structure is:

- Name
- Education
- Relevant skills
- Project or experience
- Career interest

Avoid giving unnecessary personal details.
          `,
          example:
            "Hello, I'm Siva. I completed my B.Tech in ECE and have worked on Python-based projects including an AI Calling Agent."
        },

        {
          id: "comm-w6-l2",
          title: "Answering Common Questions",
          content: `
Common interview questions include:

- Tell me about yourself.
- What are your strengths?
- Why should we hire you?
- Explain your project.
- Why are you interested in this role?
- Where do you see yourself developing?

Keep answers relevant to the question.
          `,
          example:
            "When explaining a project, describe the problem, your role, technologies used and result."
        },

        {
          id: "comm-w6-l3",
          title: "STAR Method",
          content: `
The STAR method can help structure answers to experience-based
questions.

S = Situation
T = Task
A = Action
R = Result

Explain the situation, your responsibility, what you did and what
happened as a result.
          `,
          example:
            "Use STAR when answering a question about solving a difficult project problem."
        },

        {
          id: "comm-w6-l4",
          title: "Technical Interview Communication",
          content: `
During technical interviews:

- Think before answering.
- Explain your reasoning clearly.
- Use examples.
- Ask for clarification when necessary.
- Admit when you do not know something.
- Do not pretend to know an answer.

Clear reasoning is often as important as the final answer.
          `,
          example:
            "If you are unsure about a programming problem, explain your approach and what you would test."
        },

        {
          id: "comm-w6-l5",
          title: "Interview Etiquette",
          content: `
Professional interview behavior includes:

- Being punctual
- Listening carefully
- Speaking respectfully
- Maintaining appropriate eye contact
- Keeping answers focused
- Thanking the interviewer

Online interviews also require checking audio, camera and internet
before the meeting.
          `,
          example:
            "Join an online interview early enough to test your microphone and connection."
        }
      ],

      quiz: [
        {
          question: "What should a self-introduction focus on?",
          options: [
            "Relevant education, skills and experience",
            "Every personal detail",
            "Unrelated hobbies only",
            "Very long stories"
          ],
          answer: "Relevant education, skills and experience"
        },
        {
          question: "What does STAR stand for?",
          options: [
            "Situation Task Action Result",
            "Skill Technology Answer Resume",
            "Situation Test Action Review",
            "Study Task Answer Result"
          ],
          answer: "Situation Task Action Result"
        },
        {
          question: "When is STAR useful?",
          options: [
            "Experience-based questions",
            "Only greetings",
            "Only emails",
            "Only technical diagrams"
          ],
          answer: "Experience-based questions"
        },
        {
          question: "Should you pretend to know something you don't know?",
          options: ["No", "Yes", "Always", "Only in technical interviews"],
          answer: "No"
        },
        {
          question: "What should you do if a question is unclear?",
          options: [
            "Ask for clarification",
            "Guess immediately",
            "Ignore it",
            "Change the topic"
          ],
          answer: "Ask for clarification"
        },
        {
          question: "Should interview answers stay relevant?",
          options: ["Yes", "No", "Never", "Only for HR"],
          answer: "Yes"
        },
        {
          question: "What should you check before an online interview?",
          options: [
            "Audio, camera and internet",
            "Only wallpaper",
            "Only keyboard",
            "Nothing"
          ],
          answer: "Audio, camera and internet"
        },
        {
          question: "What should you do before answering a difficult question?",
          options: [
            "Think briefly",
            "Interrupt",
            "Guess immediately",
            "Leave"
          ],
          answer: "Think briefly"
        },
        {
          question: "Is punctuality important in interviews?",
          options: ["Yes", "No", "Never", "Only offline"],
          answer: "Yes"
        },
        {
          question: "What should you do after an interview?",
          options: [
            "Thank the interviewer",
            "Ignore everyone",
            "Send unrelated information",
            "Delete your resume"
          ],
          answer: "Thank the interviewer"
        }
      ],

      assignment:
        "Prepare answers for 10 common interview questions and practice a two-minute self-introduction."
    },

    {
      week: 7,
      title: "Teamwork and Professional Communication",

      lessons: [
        {
          id: "comm-w7-l1",
          title: "Communication in Teams",
          content: `
Team communication should help everyone understand:

- Goals
- Responsibilities
- Deadlines
- Progress
- Problems
- Decisions

Clear communication reduces confusion.
          `,
          example:
            "A developer should communicate when a task is blocked instead of waiting until the deadline."
        },

        {
          id: "comm-w7-l2",
          title: "Giving Constructive Feedback",
          content: `
Constructive feedback focuses on improvement.

A useful structure is:

- Mention what works.
- Explain the issue.
- Suggest an improvement.
- Keep the language respectful.

Focus on the work rather than attacking the person.
          `,
          example:
            "The project explanation is clear. Adding a diagram could make the architecture easier to understand."
        },

        {
          id: "comm-w7-l3",
          title: "Receiving Feedback",
          content: `
When receiving feedback:

- Listen completely.
- Avoid reacting immediately.
- Ask questions if needed.
- Identify useful points.
- Apply appropriate improvements.

Feedback can help improve technical and communication skills.
          `,
          example:
            "If someone suggests improving your presentation structure, try the new structure and evaluate the result."
        },

        {
          id: "comm-w7-l4",
          title: "Handling Disagreements",
          content: `
Professional disagreements should focus on ideas and evidence.

A useful approach:

1. Listen to the other view.
2. Explain your reasoning.
3. Compare evidence.
4. Find common goals.
5. Agree on a practical solution.
          `,
          example:
            "Two developers can compare performance results before deciding which implementation to use."
        },

        {
          id: "comm-w7-l5",
          title: "Remote Communication",
          content: `
Remote teams use:

- Email
- Chat
- Video meetings
- Project management tools
- Documentation

Be clear about status, deadlines and blockers.

Written communication is especially important because team members
may not be available at the same time.
          `,
          example:
            "A developer can send a short update explaining completed work, current work and any blocker."
        }
      ],

      quiz: [
        {
          question: "What should team communication clarify?",
          options: [
            "Goals and responsibilities",
            "Only personal opinions",
            "Only salaries",
            "Nothing"
          ],
          answer: "Goals and responsibilities"
        },
        {
          question: "What is constructive feedback?",
          options: [
            "Feedback focused on improvement",
            "Personal criticism",
            "An insult",
            "Ignoring problems"
          ],
          answer: "Feedback focused on improvement"
        },
        {
          question: "What should feedback focus on?",
          options: [
            "The work or behavior",
            "Personal attacks",
            "Unrelated topics",
            "Appearance"
          ],
          answer: "The work or behavior"
        },
        {
          question: "How should feedback be received?",
          options: [
            "Listen and consider useful points",
            "Immediately argue",
            "Ignore it",
            "Leave the team"
          ],
          answer: "Listen and consider useful points"
        },
        {
          question: "How should professional disagreements be handled?",
          options: [
            "Using reasoning and evidence",
            "Using personal attacks",
            "Ignoring everyone",
            "Shouting"
          ],
          answer: "Using reasoning and evidence"
        },
        {
          question: "Why is written communication important in remote teams?",
          options: [
            "People may not be available at the same time",
            "It removes all meetings",
            "It replaces all work",
            "It prevents documentation"
          ],
          answer: "People may not be available at the same time"
        },
        {
          question: "What should a progress update include?",
          options: [
            "Completed work and blockers",
            "Only jokes",
            "Only personal details",
            "Nothing"
          ],
          answer: "Completed work and blockers"
        },
        {
          question: "Should disagreements focus on ideas?",
          options: ["Yes", "No", "Never", "Only online"],
          answer: "Yes"
        },
        {
          question: "Can feedback improve communication skills?",
          options: ["Yes", "No", "Never", "Only in college"],
          answer: "Yes"
        },
        {
          question: "Is teamwork communication important in professional jobs?",
          options: ["Yes", "No", "Only for managers", "Only for developers"],
          answer: "Yes"
        }
      ],

      assignment:
        "Write a sample team progress update containing completed work, current work, blockers and next steps."
    },

    {
      week: 8,
      title: "Professional Communication Project",

      lessons: [
        {
          id: "comm-w8-l1",
          title: "Building Your Professional Introduction",
          content: `
Create a short professional introduction that can be used for:

- College events
- Interviews
- Career fairs
- Networking
- Project demonstrations

Keep it relevant and easy to understand.
          `,
          example:
            "Prepare a 60-90 second introduction covering education, skills, project experience and career interest."
        },

        {
          id: "comm-w8-l2",
          title: "Project Explanation",
          content: `
A strong project explanation can follow:

Problem
What problem exists?

Solution
What did you build?

Technology
What tools did you use?

Role
What did you personally do?

Result
What did you achieve?

Future
What can be improved?
          `,
          example:
            "Use this structure when explaining a college project during an interview."
        },

        {
          id: "comm-w8-l3",
          title: "Professional Networking",
          content: `
Networking means building professional relationships.

Good networking communication should be:

- Respectful
- Short
- Relevant
- Genuine

Introduce yourself and explain why you are contacting the person.
          `,
          example:
            "A student can introduce themselves to an industry professional and ask about their career experience."
        },

        {
          id: "comm-w8-l4",
          title: "Communication Self-Assessment",
          content: `
Evaluate your communication skills in:

- Listening
- Speaking
- Writing
- Presentation
- Interview communication
- Teamwork

Identify strengths and choose two areas to improve further.
          `,
          example:
            "If your technical knowledge is strong but presentation is difficult, practice short project explanations regularly."
        },

        {
          id: "comm-w8-l5",
          title: "Final Communication Assessment",
          content: `
By completing this course, you should be able to:

- Communicate clearly
- Listen actively
- Speak professionally
- Write emails
- Give presentations
- Answer interview questions
- Work in teams
- Give and receive feedback
- Handle professional disagreements
- Explain projects confidently
          `,
          example:
            "Use these skills throughout college, internships and your professional career."
        }
      ],

      quiz: [
        {
          question: "What should a professional introduction contain?",
          options: [
            "Relevant education, skills and experience",
            "Every personal detail",
            "Only your name",
            "Only your hobbies"
          ],
          answer: "Relevant education, skills and experience"
        },
        {
          question: "What should a project explanation include?",
          options: [
            "Problem, solution, technology and result",
            "Only the project name",
            "Only code",
            "Only the conclusion"
          ],
          answer: "Problem, solution, technology and result"
        },
        {
          question: "What is professional networking?",
          options: [
            "Building professional relationships",
            "Collecting random contacts",
            "Sending spam",
            "Avoiding people"
          ],
          answer: "Building professional relationships"
        },
        {
          question: "Should networking communication be relevant?",
          options: ["Yes", "No", "Never", "Only online"],
          answer: "Yes"
        },
        {
          question: "Why self-assess communication skills?",
          options: [
            "To identify areas for improvement",
            "To avoid practice",
            "To stop learning",
            "To compare with everyone"
          ],
          answer: "To identify areas for improvement"
        },
        {
          question: "Is project explanation useful in interviews?",
          options: ["Yes", "No", "Never", "Only for designers"],
          answer: "Yes"
        },
        {
          question: "Can communication skills improve with practice?",
          options: ["Yes", "No", "Never", "Only at school"],
          answer: "Yes"
        },
        {
          question: "What is important when networking?",
          options: [
            "Respectful communication",
            "Sending spam",
            "Long unrelated messages",
            "Ignoring the other person"
          ],
          answer: "Respectful communication"
        },
        {
          question: "Should professional communication be adapted to the audience?",
          options: ["Yes", "No", "Never", "Only for interviews"],
          answer: "Yes"
        },
        {
          question: "Is communication important for career development?",
          options: ["Yes", "No", "Only for managers", "Only for sales"],
          answer: "Yes"
        }
      ],

      assignment:
        "Prepare a complete professional communication portfolio containing your self-introduction, project explanation, interview answers, one professional email and one team progress update.",

      project: {
        title: "Professional Communication Portfolio",
        description:
          "Create a practical communication portfolio that can be used for interviews, internships, presentations and professional networking.",

        requirements: [
          "Write a 60-90 second self-introduction.",
          "Prepare a professional project explanation.",
          "Write answers to at least 10 common interview questions.",
          "Prepare one STAR-method answer.",
          "Create one professional email.",
          "Create one professional team progress update.",
          "Prepare a five-minute project presentation.",
          "Create a short networking introduction.",
          "Record at least one practice presentation.",
          "Review your speaking clarity and structure.",
          "Identify three communication strengths.",
          "Identify three areas for improvement.",
          "Create a personal communication improvement plan."
        ]
      }
    }
  ]
};
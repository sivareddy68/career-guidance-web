const incidentResponseCourse = {
  title: "Incident Response",
  description:
    "Learn incident response fundamentals, incident identification, triage, evidence collection, containment, eradication, recovery, communication, documentation, and practical incident response workflows.",

  weeks: [
    {
      title: "Week 1: Incident Response Foundations",
      description:
        "Learn what security incidents are, how incident response works, how incidents are identified and classified, and how teams prepare for them.",
      lessons: [
        {
          title: "Introduction to Incident Response",
          content: `
Incident response is the organized process used to detect, analyze, contain, and recover from security incidents.

A security incident can include unauthorized access, malware detection, suspicious account activity, data exposure, or other events that may affect the confidentiality, integrity, or availability of systems and information.

Incident response is important because security incidents can develop quickly. A structured process helps organizations respond consistently instead of making decisions randomly during a stressful situation.

A typical incident response lifecycle includes:

1. Preparation
2. Detection and analysis
3. Containment
4. Eradication
5. Recovery
6. Lessons learned

Preparation happens before an incident. Organizations define procedures, identify important systems, prepare communication channels, train staff, and make sure useful logs and tools are available.

Detection and analysis involves determining whether suspicious activity is actually a security incident and understanding its scope.

Containment focuses on limiting the impact while preserving the ability to investigate.

Eradication removes the underlying cause, such as malicious software, unauthorized accounts, or compromised credentials.

Recovery returns systems to normal operation while monitoring for signs that the problem has returned.

Lessons learned happen after the incident. The team reviews what happened, what worked, what failed, and what should be improved.

Incident response is not simply fixing a computer. It is a coordinated process involving technical investigation, communication, documentation, decision-making, and recovery.
          `,
          quiz: [
            {
              question: "What is incident response?",
              options: [
                "A structured process for handling security incidents",
                "A method for designing computer hardware",
                "A technique for increasing internet speed",
                "A method for creating databases",
              ],
              answer: "A structured process for handling security incidents",
            },
            {
              question: "Which activity happens before an incident?",
              options: [
                "Preparation",
                "Eradication",
                "Recovery",
                "Lessons learned",
              ],
              answer: "Preparation",
            },
            {
              question: "What is the main goal of containment?",
              options: [
                "Limit the impact of an incident",
                "Delete all organizational records",
                "Replace every computer",
                "Disable all security controls",
              ],
              answer: "Limit the impact of an incident",
            },
            {
              question: "What is recovery concerned with?",
              options: [
                "Returning systems to normal operation safely",
                "Creating the original attack",
                "Removing all monitoring",
                "Deleting all evidence",
              ],
              answer: "Returning systems to normal operation safely",
            },
            {
              question: "Why are lessons learned important?",
              options: [
                "They help improve future incident response",
                "They automatically prevent every attack",
                "They replace security monitoring",
                "They remove the need for documentation",
              ],
              answer: "They help improve future incident response",
            },
          ],
        },

        {
          title: "Security Events and Incidents",
          content: `
Not every unusual event is a confirmed security incident.

A security event is an observable occurrence in a system. Examples include a user logging in, a server restarting, a file being created, or an application generating an error.

A security alert is a notification that something may require investigation.

A security incident is an event or series of events that has been determined to violate security policies or negatively affect systems, information, or users.

For example, a single failed login may be a normal event. Hundreds of failed login attempts followed by a successful login from an unusual location may require investigation.

Incident responders need to distinguish normal activity from suspicious activity.

Important information includes:
- What happened?
- When did it happen?
- Which system was involved?
- Which account was involved?
- What evidence is available?
- What is the potential impact?
- Is the activity still happening?

Incident classification helps teams organize their response. Categories may include malware, unauthorized access, phishing, account compromise, data exposure, or service disruption.

Classification should be based on evidence rather than assumptions.

An incident may also change classification as more information becomes available. Initial information is often incomplete, so responders should update their understanding during the investigation.

Good incident response requires careful separation between facts, observations, assumptions, and conclusions.
          `,
          quiz: [
            {
              question: "What is a security event?",
              options: [
                "An observable occurrence in a system",
                "Always a confirmed attack",
                "A physical computer component",
                "A type of backup",
              ],
              answer: "An observable occurrence in a system",
            },
            {
              question: "Is every security event automatically a security incident?",
              options: [
                "No",
                "Yes",
                "Only on weekends",
                "Only on Linux",
              ],
              answer: "No",
            },
            {
              question: "What does a security alert usually indicate?",
              options: [
                "Something may require investigation",
                "A system must always be shut down",
                "An attack is always confirmed",
                "All evidence has been destroyed",
              ],
              answer: "Something may require investigation",
            },
            {
              question: "Why is classification useful?",
              options: [
                "It helps organize the response",
                "It guarantees that an incident will never happen",
                "It replaces investigation",
                "It removes the need for evidence",
              ],
              answer: "It helps organize the response",
            },
            {
              question: "What should incident classification be based on?",
              options: [
                "Available evidence",
                "Guesswork only",
                "Rumors",
                "The age of the computer",
              ],
              answer: "Available evidence",
            },
          ],
        },

        {
          title: "Incident Identification and Triage",
          content: `
Incident identification determines whether suspicious activity represents a security incident.

Triage is the process of quickly assessing an alert or incident to determine its importance, scope, and appropriate response.

During triage, responders collect basic information before making major decisions.

Useful questions include:
- What happened?
- Which systems are affected?
- Which users or accounts are involved?
- Is the activity still occurring?
- What is the potential business impact?
- Is sensitive information potentially affected?

Severity is often based on factors such as impact, urgency, scope, and sensitivity.

A low-severity incident may affect a single non-critical workstation.

A high-severity incident may affect important systems, many users, or sensitive information.

Triage does not mean performing the entire investigation immediately. Its purpose is to quickly establish enough information to prioritize the incident and determine the next steps.

False positives must also be considered. A security tool may generate an alert that appears suspicious but is actually legitimate activity.

Responders should avoid making decisions based only on a single alert. Related logs, authentication records, endpoint information, and other evidence can provide useful context.

Good triage is fast but careful. Moving too slowly can increase impact, while acting without enough information can create unnecessary disruption.

Incident records should be updated as new evidence becomes available.
          `,
          quiz: [
            {
              question: "What is incident triage?",
              options: [
                "A quick assessment used to prioritize and understand an incident",
                "A method of deleting logs",
                "A replacement for security monitoring",
                "A process for installing hardware",
              ],
              answer:
                "A quick assessment used to prioritize and understand an incident",
            },
            {
              question: "Which factor can affect incident severity?",
              options: ["Potential impact", "Keyboard color", "Monitor size", "Computer brand"],
              answer: "Potential impact",
            },
            {
              question: "What is a false positive?",
              options: [
                "An alert that appears suspicious but is actually legitimate",
                "A confirmed security breach",
                "A successful backup",
                "A recovered system",
              ],
              answer:
                "An alert that appears suspicious but is actually legitimate",
            },
            {
              question: "Why should responders examine related evidence?",
              options: [
                "It provides additional context",
                "It guarantees the attacker is identified",
                "It removes the need for documentation",
                "It prevents all future incidents",
              ],
              answer: "It provides additional context",
            },
            {
              question: "What is a major risk of acting without enough information?",
              options: [
                "Unnecessary disruption",
                "Automatic recovery",
                "Improved evidence quality",
                "Reduced investigation time in every case",
              ],
              answer: "Unnecessary disruption",
            },
          ],
        },

        {
          title: "Incident Response Preparation",
          content: `
Preparation is one of the most important parts of incident response because decisions made before an incident can significantly improve the response.

An organization should identify important systems, applications, accounts, data, and dependencies.

An incident response plan should describe:
- Roles and responsibilities.
- Escalation procedures.
- Communication methods.
- Investigation procedures.
- Containment approaches.
- Recovery procedures.
- Documentation requirements.

Contact information should be maintained for relevant technical teams, management, and other responsible groups.

Logging and monitoring should be configured before incidents occur. Without useful evidence, investigation can become difficult.

Backups are also important. They provide recovery options when systems or data are damaged.

Incident response tools should be available and tested. Teams should know how to access relevant logs and monitoring systems.

Training and exercises can help responders practice decision-making without waiting for a real incident.

Preparation should also include legal, organizational, and communication considerations where applicable.

A response plan should not be treated as a document that is written once and forgotten. Systems, employees, software, and threats change over time.

Plans should be reviewed and updated regularly.

Good preparation reduces confusion during incidents and helps teams respond consistently.
          `,
          quiz: [
            {
              question: "Why is preparation important in incident response?",
              options: [
                "It improves readiness before an incident occurs",
                "It guarantees no incident will occur",
                "It removes the need for monitoring",
                "It replaces all backups",
              ],
              answer: "It improves readiness before an incident occurs",
            },
            {
              question: "What should an incident response plan define?",
              options: [
                "Roles and response procedures",
                "Only employee birthdays",
                "Only computer colors",
                "Only software advertisements",
              ],
              answer: "Roles and response procedures",
            },
            {
              question: "Why are backups useful during incident response?",
              options: [
                "They provide recovery options",
                "They identify every attacker",
                "They replace monitoring",
                "They prevent all phishing",
              ],
              answer: "They provide recovery options",
            },
            {
              question: "Why should incident response plans be reviewed?",
              options: [
                "Systems and circumstances change over time",
                "Plans never change",
                "Reviewing plans deletes evidence",
                "Reviewing plans disables security tools",
              ],
              answer: "Systems and circumstances change over time",
            },
            {
              question: "What can incident response exercises provide?",
              options: [
                "Practice for real response situations",
                "Guaranteed prevention of attacks",
                "Automatic system recovery",
                "Permanent removal of all risks",
              ],
              answer: "Practice for real response situations",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Investigation and Containment",
      description:
        "Learn evidence collection, investigation techniques, scope determination, containment decisions, and safe handling of incident information.",
      lessons: [
        {
          title: "Evidence Collection and Preservation",
          content: `
Incident investigation depends on reliable evidence.

Evidence can include system logs, authentication records, application logs, network information, timestamps, alerts, and other relevant records.

Evidence should be collected carefully so that important information is not accidentally changed or lost.

Time information is especially important. Different systems may use different time zones or clock settings, so investigators may need to normalize timestamps when building a timeline.

Evidence should be documented. A record should explain what was collected, when it was collected, where it came from, and who handled it.

Preservation is important because evidence may later be needed for deeper investigation, auditing, or organizational processes.

Responders should avoid making unnecessary changes to affected systems before understanding what information may be valuable.

Logs should be copied or preserved using appropriate organizational procedures.

Integrity checks such as hashes can help demonstrate whether a collected file has changed after collection.

Access to evidence should be restricted to authorized personnel.

The goal is to preserve useful facts while allowing the investigation to continue.

Incident responders should distinguish original evidence from analysis or interpretation. The raw evidence should be retained where appropriate, while conclusions should be documented separately.
          `,
          quiz: [
            {
              question: "Why is evidence preservation important?",
              options: [
                "It helps maintain reliable information for investigation",
                "It automatically identifies the attacker",
                "It deletes old logs",
                "It guarantees recovery",
              ],
              answer:
                "It helps maintain reliable information for investigation",
            },
            {
              question: "Why are timestamps important?",
              options: [
                "They help establish the sequence of events",
                "They increase network speed",
                "They replace authentication",
                "They automatically classify incidents",
              ],
              answer: "They help establish the sequence of events",
            },
            {
              question: "What can a hash help demonstrate?",
              options: [
                "Whether collected data has changed",
                "Who caused an incident automatically",
                "The physical location of a server",
                "The user's password",
              ],
              answer: "Whether collected data has changed",
            },
            {
              question: "Who should have access to incident evidence?",
              options: [
                "Authorized personnel",
                "Every employee",
                "Any internet user",
                "Unknown visitors",
              ],
              answer: "Authorized personnel",
            },
            {
              question: "What should be documented about collected evidence?",
              options: [
                "What was collected and when and where it came from",
                "Only the color of the device",
                "Only the investigator's favorite tool",
                "Nothing",
              ],
              answer:
                "What was collected and when and where it came from",
            },
          ],
        },

        {
          title: "Incident Investigation and Timeline Analysis",
          content: `
Investigation attempts to determine what happened, when it happened, how it happened, and what systems or information may have been affected.

A timeline is one of the most useful investigation tools.

A timeline combines events from different sources and places them into chronological order.

Possible timeline entries include:
- Authentication events.
- Process activity.
- File changes.
- Application events.
- Network connections.
- Security alerts.
- Administrative actions.

Investigators compare information from multiple sources because one source may not contain the complete story.

For example, an endpoint log may show that a user logged in, while an authentication system may provide additional information about the login location and time.

Correlation helps connect related events.

Investigators should avoid assuming that two events are related simply because they happened close together. Evidence should support the relationship.

A useful investigation separates:
- Confirmed facts.
- Reasonable findings.
- Unknown information.
- Hypotheses that require additional evidence.

This prevents premature conclusions.

Investigation notes should be clear enough that another responder can understand what was examined and why a conclusion was reached.

The final goal is to understand the incident sufficiently to support containment, eradication, and recovery decisions.
          `,
          quiz: [
            {
              question: "What is the purpose of a timeline?",
              options: [
                "To organize events chronologically",
                "To delete evidence",
                "To replace all security tools",
                "To hide system activity",
              ],
              answer: "To organize events chronologically",
            },
            {
              question: "Why use multiple evidence sources?",
              options: [
                "One source may not contain the complete picture",
                "Multiple sources are always inaccurate",
                "It removes the need for analysis",
                "It guarantees attribution",
              ],
              answer:
                "One source may not contain the complete picture",
            },
            {
              question: "What should investigators avoid?",
              options: [
                "Making unsupported conclusions",
                "Recording evidence",
                "Building timelines",
                "Comparing logs",
              ],
              answer: "Making unsupported conclusions",
            },
            {
              question: "What is correlation useful for?",
              options: [
                "Connecting related events using evidence",
                "Deleting unrelated files",
                "Creating passwords",
                "Replacing backups",
              ],
              answer:
                "Connecting related events using evidence",
            },
            {
              question: "What should investigation notes contain?",
              options: [
                "Relevant observations, evidence, and reasoning",
                "Only personal opinions",
                "Only system passwords",
                "No details",
              ],
              answer:
                "Relevant observations, evidence, and reasoning",
            },
          ],
        },

        {
          title: "Incident Scope and Impact Assessment",
          content: `
Determining the scope of an incident means identifying which systems, accounts, data, and users may be affected.

The initial alert rarely provides the complete scope.

Responders may need to examine related systems and events to determine whether the incident is isolated or widespread.

Important scope questions include:
- How many systems are affected?
- Which accounts are involved?
- Which applications are involved?
- Is sensitive data potentially affected?
- Is the incident still active?
- Are other systems showing similar activity?

Impact assessment considers the consequences of the incident.

Impact may involve:
- Confidentiality.
- Integrity.
- Availability.
- Financial or operational disruption.
- Loss of important data.
- User or customer impact.

Scope and impact are related but different.

Scope describes what may be affected. Impact describes what the consequences may be.

Investigators should update scope estimates as new evidence becomes available.

A system should not automatically be considered unaffected simply because no alert was generated for it. Monitoring coverage and evidence availability must be considered.

Documenting affected and potentially affected systems helps containment teams decide what actions are appropriate.

Clear scope assessment also improves communication with management and other teams.
          `,
          quiz: [
            {
              question: "What does incident scope describe?",
              options: [
                "Which systems, accounts, or data may be affected",
                "Only the cost of software",
                "Only the age of the server",
                "The number of employees in an organization",
              ],
              answer:
                "Which systems, accounts, or data may be affected",
            },
            {
              question: "What does impact describe?",
              options: [
                "The consequences of the incident",
                "Only the number of logs",
                "Only the attacker's identity",
                "The operating system version",
              ],
              answer: "The consequences of the incident",
            },
            {
              question: "Which is part of the CIA security model?",
              options: [
                "Confidentiality",
                "Configuration",
                "Compilation",
                "Compression",
              ],
              answer: "Confidentiality",
            },
            {
              question: "Why should scope be updated during investigation?",
              options: [
                "New evidence may reveal additional affected systems",
                "Scope never changes",
                "Updating scope deletes evidence",
                "It disables monitoring",
              ],
              answer:
                "New evidence may reveal additional affected systems",
            },
            {
              question: "What is a useful scope question?",
              options: [
                "How many systems may be affected?",
                "What color is the office?",
                "Which keyboard is newest?",
                "What is the monitor brand?",
              ],
              answer: "How many systems may be affected?",
            },
          ],
        },

        {
          title: "Containment Strategies",
          content: `
Containment aims to limit the spread and impact of an incident while allowing the investigation to continue.

Containment decisions depend on the type and severity of the incident.

Examples of defensive containment actions can include isolating an affected endpoint, disabling a compromised account, blocking a known malicious connection, or temporarily restricting access to an affected service.

Containment can be short-term or longer-term.

Short-term containment attempts to quickly reduce immediate risk.

Longer-term containment may involve temporary architectural or access changes while the underlying problem is investigated and removed.

Containment decisions should consider business impact. Completely shutting down a critical service may reduce security risk but create major operational problems.

Responders should document containment actions and their timing.

Evidence preservation should also be considered. Some actions can change system state or remove information that investigators may need.

Communication is important when containment affects users or services.

Containment is not the same as eradication. Containment limits the problem, while eradication focuses on removing its underlying cause.

After containment, responders should verify whether suspicious activity has actually stopped.

If the activity continues, containment may need to be expanded.

Good containment balances security, evidence preservation, business continuity, and response speed.
          `,
          quiz: [
            {
              question: "What is the main purpose of containment?",
              options: [
                "Limit the spread and impact of an incident",
                "Erase all investigation records",
                "Guarantee attribution",
                "Replace every affected computer",
              ],
              answer: "Limit the spread and impact of an incident",
            },
            {
              question: "Which can be a containment action?",
              options: [
                "Isolating an affected endpoint",
                "Publishing credentials",
                "Deleting all logs",
                "Disabling every security control",
              ],
              answer: "Isolating an affected endpoint",
            },
            {
              question: "Why should containment consider business impact?",
              options: [
                "Security actions can affect important services",
                "Business impact is unrelated to response",
                "It eliminates evidence",
                "It guarantees recovery",
              ],
              answer:
                "Security actions can affect important services",
            },
            {
              question: "Is containment the same as eradication?",
              options: [
                "No",
                "Yes",
                "Only during weekends",
                "Only for network incidents",
              ],
              answer: "No",
            },
            {
              question: "What should responders do after containment?",
              options: [
                "Verify whether suspicious activity has stopped",
                "Immediately delete all evidence",
                "Ignore monitoring",
                "Assume the incident is completely solved",
              ],
              answer:
                "Verify whether suspicious activity has stopped",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Eradication, Recovery, and Communication",
      description:
        "Learn how responders remove incident causes, restore systems safely, communicate during incidents, and validate recovery.",
      lessons: [
        {
          title: "Eradication and Root Cause Analysis",
          content: `
Eradication focuses on removing the cause of an incident and reducing the chance that the same problem immediately returns.

Depending on the incident, eradication may involve removing malicious software, correcting vulnerable configurations, resetting compromised credentials, removing unauthorized access, or applying security fixes.

Before performing eradication, responders should understand enough about the incident to avoid removing important evidence unnecessarily.

Root cause analysis asks why the incident was possible.

For example, if an account was compromised, the investigation may examine how the credentials were exposed, whether authentication controls were sufficient, and whether suspicious activity was detected quickly.

Root cause analysis should focus on evidence and contributing factors rather than simply blaming an individual.

There may be multiple contributing causes.

A system can be restored without fully addressing the underlying weakness, but that creates a risk of recurrence.

Eradication should therefore include both removal of the immediate problem and correction of relevant weaknesses.

Examples of corrective actions include patching software, changing access controls, improving authentication, updating configurations, and improving monitoring.

After eradication, responders should verify that the original indicators are no longer present.

The eradication stage should be documented carefully so the organization knows what was changed and why.
          `,
          quiz: [
            {
              question: "What is the goal of eradication?",
              options: [
                "Remove the underlying cause of the incident",
                "Increase the number of alerts",
                "Delete all evidence",
                "Disable recovery",
              ],
              answer: "Remove the underlying cause of the incident",
            },
            {
              question: "What does root cause analysis examine?",
              options: [
                "Why the incident was possible",
                "Only the color of the affected device",
                "Only the number of employees",
                "Only the network speed",
              ],
              answer: "Why the incident was possible",
            },
            {
              question: "Why should eradication be based on evidence?",
              options: [
                "To avoid incorrect changes and preserve useful investigation information",
                "To guarantee attribution",
                "To remove all monitoring",
                "To avoid documenting changes",
              ],
              answer:
                "To avoid incorrect changes and preserve useful investigation information",
            },
            {
              question: "Which can be a corrective action?",
              options: [
                "Applying relevant security patches",
                "Publishing passwords",
                "Removing all authentication",
                "Disabling all logs permanently",
              ],
              answer: "Applying relevant security patches",
            },
            {
              question: "Why should eradication be verified?",
              options: [
                "To check that the original problem has actually been removed",
                "To delete the incident report",
                "To prevent recovery",
                "To avoid monitoring",
              ],
              answer:
                "To check that the original problem has actually been removed",
            },
          ],
        },

        {
          title: "Recovery and System Restoration",
          content: `
Recovery is the process of returning affected systems to normal operation after containment and eradication.

Recovery should be controlled rather than simply turning systems back on.

Before restoring a system, responders should confirm that the underlying issue has been addressed.

If backups are used, they should be checked to ensure that the selected recovery point is appropriate and trustworthy.

Systems may need to be patched, reconfigured, or rebuilt before returning to normal operation.

Recovery should happen in stages when possible. Critical systems can be restored and monitored before additional systems are brought back.

Validation is important after restoration.

Teams should check:
- Is the system functioning correctly?
- Are security controls active?
- Are expected logs being generated?
- Are suspicious indicators absent?
- Are users able to perform required tasks?
- Is monitoring working?

Enhanced monitoring can be useful immediately after recovery because responders need to detect any recurrence quickly.

Recovery should also consider dependencies. Restoring one system may not be sufficient if another required service remains unavailable.

The recovery process should be documented, including what was restored, when it was restored, and what validation was performed.

Successful recovery means more than making the system available. The system should be operational and appropriately secured.
          `,
          quiz: [
            {
              question: "What is the goal of recovery?",
              options: [
                "Return affected systems to safe normal operation",
                "Remove all security controls",
                "Delete incident records",
                "Stop monitoring permanently",
              ],
              answer: "Return affected systems to safe normal operation",
            },
            {
              question: "What should happen before restoring a compromised system?",
              options: [
                "The underlying issue should be addressed",
                "All logs should be deleted",
                "Security controls should be disabled",
                "Passwords should be published",
              ],
              answer: "The underlying issue should be addressed",
            },
            {
              question: "Why can staged recovery be useful?",
              options: [
                "It allows systems to be restored and monitored gradually",
                "It guarantees no future incidents",
                "It removes the need for testing",
                "It prevents documentation",
              ],
              answer:
                "It allows systems to be restored and monitored gradually",
            },
            {
              question: "What should be checked after restoration?",
              options: [
                "System functionality and security controls",
                "Only the monitor size",
                "Only the keyboard",
                "Only the office temperature",
              ],
              answer: "System functionality and security controls",
            },
            {
              question: "Why is enhanced monitoring useful after recovery?",
              options: [
                "It can help detect recurrence quickly",
                "It prevents all attacks",
                "It replaces backups",
                "It removes the need for validation",
              ],
              answer: "It can help detect recurrence quickly",
            },
          ],
        },

        {
          title: "Incident Communication and Coordination",
          content: `
Incident response often involves multiple teams. Technical responders may need to coordinate with management, IT operations, security teams, legal teams, communications teams, or other authorized groups.

Clear communication helps everyone understand what is happening and what actions are required.

Incident communications should distinguish confirmed facts from assumptions.

A useful update might explain:
- What is known.
- What is currently being investigated.
- Which systems are affected.
- What actions have been taken.
- What decisions are needed.
- What will happen next.

Communication should be appropriate for the audience. Technical responders may need detailed technical information, while management may need a concise summary of impact, risk, and business decisions.

Sensitive information should only be shared with authorized people.

Incident teams should establish a communication channel that remains available during the incident.

Updates should be regular enough to keep responsible people informed without generating unnecessary noise.

Poor communication can cause duplicated work, conflicting actions, confusion, or delays.

A clear incident owner or coordinator can help organize responsibilities.

Documentation should continue during the incident rather than waiting until everything is finished.

Communication and technical response should support each other. A technical team may discover new information that changes the business assessment, while management decisions may affect containment or recovery priorities.
          `,
          quiz: [
            {
              question: "Why is communication important during incidents?",
              options: [
                "It helps teams coordinate response actions",
                "It automatically fixes systems",
                "It replaces evidence",
                "It guarantees no data loss",
              ],
              answer: "It helps teams coordinate response actions",
            },
            {
              question: "What should incident updates distinguish?",
              options: [
                "Confirmed facts and assumptions",
                "Hardware brands and colors",
                "Employees and visitors",
                "Old and new keyboards",
              ],
              answer: "Confirmed facts and assumptions",
            },
            {
              question: "Who should receive sensitive incident information?",
              options: [
                "Authorized people",
                "Everyone on the internet",
                "Unknown users",
                "Any person who requests it",
              ],
              answer: "Authorized people",
            },
            {
              question: "Why should communication be appropriate for the audience?",
              options: [
                "Different audiences need different levels of detail",
                "All audiences need exactly the same information",
                "It eliminates technical investigation",
                "It prevents documentation",
              ],
              answer:
                "Different audiences need different levels of detail",
            },
            {
              question: "What can poor communication cause?",
              options: [
                "Confusion and duplicated work",
                "Automatic recovery",
                "Better evidence",
                "Guaranteed prevention",
              ],
              answer: "Confusion and duplicated work",
            },
          ],
        },

        {
          title: "Incident Documentation and Reporting",
          content: `
Documentation creates a reliable record of what happened during an incident.

An incident record may contain:
- Detection time.
- Incident description.
- Affected systems.
- Evidence.
- Investigation notes.
- Containment actions.
- Eradication actions.
- Recovery actions.
- Communications.
- Final conclusions.

Good documentation should be factual and organized.

Timestamps are important because they help establish the sequence of actions.

Incident notes should record significant decisions and, when appropriate, why those decisions were made.

A final incident report can summarize the incident for future reference.

The report may include:
1. Executive summary.
2. Timeline.
3. Technical findings.
4. Impact assessment.
5. Response actions.
6. Root cause.
7. Recovery.
8. Lessons learned.
9. Recommended improvements.

Documentation should not expose unnecessary sensitive information.

Reports can also help identify recurring problems across multiple incidents.

For example, if several incidents involve outdated software, the organization may need to improve patch management.

Documentation is therefore not just an administrative task. It supports investigation, communication, accountability, learning, and long-term security improvement.
          `,
          quiz: [
            {
              question: "Why is incident documentation important?",
              options: [
                "It creates a reliable record of the response",
                "It automatically prevents attacks",
                "It replaces monitoring",
                "It deletes evidence",
              ],
              answer: "It creates a reliable record of the response",
            },
            {
              question: "Which item can appear in an incident report?",
              options: [
                "Incident timeline",
                "Personal entertainment history",
                "Monitor color",
                "Keyboard brand",
              ],
              answer: "Incident timeline",
            },
            {
              question: "Why are timestamps useful in documentation?",
              options: [
                "They help establish event order",
                "They increase system speed",
                "They replace authentication",
                "They automatically identify attackers",
              ],
              answer: "They help establish event order",
            },
            {
              question: "What can repeated incident reports reveal?",
              options: [
                "Recurring security problems",
                "The physical size of computers",
                "The best keyboard brand",
                "Monitor preferences",
              ],
              answer: "Recurring security problems",
            },
            {
              question: "What should incident reports generally be?",
              options: [
                "Factual and organized",
                "Based only on rumors",
                "Completely undocumented",
                "Filled with unrelated information",
              ],
              answer: "Factual and organized",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced Response and Practical Workflow",
      description:
        "Apply incident response concepts to realistic defensive workflows, improve response quality, and complete a practical incident response project.",
      lessons: [
        {
          title: "Incident Response Metrics and Improvement",
          content: `
Organizations can use metrics to understand how well their incident response process works.

Useful metrics can include:
- Number of incidents.
- Number of false positives.
- Mean time to detect.
- Mean time to respond.
- Mean time to recover.
- Number of recurring incidents.
- Percentage of incidents with complete documentation.

Metrics should be interpreted carefully.

For example, reducing response time is useful, but speed should not come at the cost of evidence preservation or incorrect decisions.

Mean time to detect measures how long it takes to identify an incident.

Mean time to respond measures how long it takes to begin an appropriate response.

Mean time to recover measures how long it takes to restore affected services.

Teams can use these measurements to identify weaknesses.

If detection takes too long, monitoring or alerting may need improvement.

If response takes too long, roles, procedures, or communication may need improvement.

If recovery takes too long, backups, restoration procedures, or system dependencies may need improvement.

Metrics should support improvement rather than encourage teams to manipulate numbers.

After an incident, teams should identify specific improvements and assign responsibility for completing them.

Continuous improvement turns individual incidents into organizational learning.
          `,
          quiz: [
            {
              question: "What can incident response metrics help identify?",
              options: [
                "Weaknesses in the response process",
                "The color of computers",
                "Employee hobbies",
                "Monitor sizes",
              ],
              answer: "Weaknesses in the response process",
            },
            {
              question: "What does mean time to detect measure?",
              options: [
                "How long it takes to identify an incident",
                "How long a computer takes to boot",
                "How long a backup takes to delete",
                "How long a password is",
              ],
              answer: "How long it takes to identify an incident",
            },
            {
              question: "What does mean time to recover measure?",
              options: [
                "How long it takes to restore affected services",
                "How long it takes to create a user",
                "How long it takes to write a report",
                "How long a network cable is",
              ],
              answer: "How long it takes to restore affected services",
            },
            {
              question: "Why should response metrics be interpreted carefully?",
              options: [
                "Speed should not replace response quality",
                "Metrics are always useless",
                "Metrics automatically prevent incidents",
                "Metrics replace evidence",
              ],
              answer: "Speed should not replace response quality",
            },
            {
              question: "What should teams do after identifying a response weakness?",
              options: [
                "Plan and assign improvements",
                "Ignore it",
                "Delete the incident report",
                "Disable monitoring",
              ],
              answer: "Plan and assign improvements",
            },
          ],
        },

        {
          title: "Incident Response Playbooks",
          content: `
A playbook is a predefined set of procedures for handling a particular type of incident.

Playbooks make response more consistent and reduce the amount of decision-making required for common situations.

Examples of defensive playbooks include:
- Phishing response.
- Malware response.
- Account compromise response.
- Lost device response.
- Suspicious login response.
- Data exposure response.

A playbook can define:
1. Detection criteria.
2. Initial triage.
3. Evidence to collect.
4. Containment options.
5. Escalation requirements.
6. Recovery steps.
7. Communication requirements.
8. Documentation requirements.

Playbooks should not be treated as completely automatic instructions. Responders still need to use judgment because incidents may differ from the expected scenario.

A playbook should include decision points.

For example, if an affected account is confirmed compromised, the playbook may guide responders through containment and credential recovery. If the alert turns out to be legitimate activity, the response can stop or change direction.

Playbooks should be tested and updated.

Exercises can reveal missing steps, unclear responsibilities, or unavailable tools.

Good playbooks are concise enough to use during stressful situations but detailed enough to prevent important steps from being forgotten.
          `,
          quiz: [
            {
              question: "What is an incident response playbook?",
              options: [
                "A predefined procedure for handling a type of incident",
                "A database of employee salaries",
                "A hardware repair manual",
                "A network cable diagram",
              ],
              answer:
                "A predefined procedure for handling a type of incident",
            },
            {
              question: "Why are playbooks useful?",
              options: [
                "They make response more consistent",
                "They guarantee no incidents occur",
                "They eliminate all human judgment",
                "They replace security monitoring",
              ],
              answer: "They make response more consistent",
            },
            {
              question: "Which can be a playbook category?",
              options: [
                "Phishing response",
                "Monitor color selection",
                "Keyboard design",
                "Office decoration",
              ],
              answer: "Phishing response",
            },
            {
              question: "Why should playbooks be tested?",
              options: [
                "Testing can reveal missing or unclear procedures",
                "Testing deletes incident records",
                "Testing guarantees prevention",
                "Testing removes the need for training",
              ],
              answer:
                "Testing can reveal missing or unclear procedures",
            },
            {
              question: "Should playbooks eliminate responder judgment?",
              options: [
                "No",
                "Yes",
                "Only for phishing",
                "Only for servers",
              ],
              answer: "No",
            },
          ],
        },

        {
          title: "Coordinated Incident Response Workflow",
          content: `
A complete incident response workflow combines preparation, detection, investigation, containment, eradication, recovery, and improvement.

Consider a hypothetical situation where monitoring identifies suspicious authentication activity.

First, the team validates the alert and determines whether it represents legitimate behavior.

If it is suspicious, responders begin triage.

They identify the account, affected systems, timestamps, and available evidence.

The team determines the possible scope and impact.

If necessary, containment actions are taken to limit further activity.

Investigation continues while the team determines how the incident occurred.

Once the cause is understood, eradication can remove the underlying problem and correct relevant weaknesses.

Systems are then recovered carefully.

After recovery, monitoring is increased to verify that suspicious activity does not return.

Throughout the process, responders document actions and communicate important information to authorized stakeholders.

After the incident, the team performs a lessons-learned review.

The review should identify:
- What happened.
- Why it happened.
- What worked.
- What did not work.
- What evidence was missing.
- Which controls should be improved.
- Who owns each improvement.

The important principle is that incident response is a continuous workflow rather than a single action.

Every stage should provide information that helps the next stage.
          `,
          quiz: [
            {
              question: "What should happen after a suspicious alert is detected?",
              options: [
                "Validate and triage the alert",
                "Immediately delete all logs",
                "Ignore the alert",
                "Publish the incident publicly",
              ],
              answer: "Validate and triage the alert",
            },
            {
              question: "What should be determined during investigation?",
              options: [
                "Scope and potential impact",
                "Only the computer's brand",
                "Only the monitor size",
                "Only the keyboard layout",
              ],
              answer: "Scope and potential impact",
            },
            {
              question: "When is containment used?",
              options: [
                "When action is needed to limit further impact",
                "Only after every system is replaced",
                "Only after the report is deleted",
                "Never during investigation",
              ],
              answer:
                "When action is needed to limit further impact",
            },
            {
              question: "What follows eradication in the normal lifecycle?",
              options: [
                "Recovery",
                "Preparation",
                "Initial detection",
                "Alert generation",
              ],
              answer: "Recovery",
            },
            {
              question: "What happens after recovery?",
              options: [
                "Monitoring and lessons learned can continue",
                "All security controls are removed",
                "Evidence is automatically destroyed",
                "The incident record is deleted",
              ],
              answer:
                "Monitoring and lessons learned can continue",
            },
          ],
        },

        {
          title: "Final Project: Build an Incident Response Workflow",
          content: `
The final project combines the concepts learned throughout the course.

Project: Build an Incident Response Workflow.

The goal is to design a defensive workflow for handling a hypothetical security incident.

A suitable scenario is a suspicious account login.

Your project should include the following sections.

1. Incident description

Describe the initial alert and explain why it requires investigation.

2. Triage

Identify:
- Account involved.
- Systems involved.
- Time of activity.
- Initial severity.
- Potential impact.

3. Evidence

List the evidence that should be reviewed, such as authentication logs, endpoint information, application logs, and relevant alerts.

4. Investigation

Create a simple timeline and distinguish confirmed facts from assumptions.

5. Containment

Describe appropriate defensive containment actions and explain why they are necessary.

6. Eradication

Explain how the underlying problem could be removed or corrected.

7. Recovery

Describe how affected systems or accounts could be safely returned to normal operation.

8. Communication

Identify which authorized teams should receive updates and what information they need.

9. Documentation

Create an incident record containing important timestamps, actions, findings, and decisions.

10. Lessons learned

Identify improvements that could reduce the chance or impact of a similar incident in the future.

The final workflow should demonstrate that you understand the complete incident response lifecycle.

Focus on evidence-based decisions, safe defensive actions, clear communication, and good documentation.

The purpose of the project is not to simulate attacking a system. It is to practice how a security team would responsibly identify, investigate, contain, recover from, and learn from a security incident.
          `,
          quiz: [
            {
              question: "What is the purpose of the final project?",
              options: [
                "Design a defensive incident response workflow",
                "Build malware",
                "Create unauthorized access tools",
                "Disable security monitoring",
              ],
              answer: "Design a defensive incident response workflow",
            },
            {
              question: "What should the project include during triage?",
              options: [
                "Affected account, systems, timing, and potential impact",
                "Only the monitor model",
                "Only the keyboard type",
                "Only the office location",
              ],
              answer:
                "Affected account, systems, timing, and potential impact",
            },
            {
              question: "What should the investigation timeline contain?",
              options: [
                "Relevant events arranged chronologically",
                "Only unrelated events",
                "Only personal opinions",
                "No timestamps",
              ],
              answer:
                "Relevant events arranged chronologically",
            },
            {
              question: "What should lessons learned identify?",
              options: [
                "Improvements that can strengthen future response",
                "Ways to remove all security controls",
                "Ways to hide incidents",
                "Ways to delete evidence",
              ],
              answer:
                "Improvements that can strengthen future response",
            },
            {
              question: "What is the main focus of responsible incident response?",
              options: [
                "Evidence-based investigation and safe defensive recovery",
                "Unauthorized access",
                "Destroying evidence",
                "Disabling security systems",
              ],
              answer:
                "Evidence-based investigation and safe defensive recovery",
            },
          ],
        },
      ],
    },
  ],
};

export default incidentResponseCourse;
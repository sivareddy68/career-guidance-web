const riskAssessmentCourse = {
  title: "Risk Assessment",
  description:
    "Learn risk assessment fundamentals, assets, threats, vulnerabilities, likelihood, impact, risk analysis, risk treatment, controls, risk registers, and practical security risk assessment.",

  weeks: [
    {
      title: "Week 1: Risk Assessment Foundations",
      description:
        "Understand risk, assets, threats, vulnerabilities, and the basic process of identifying security risks.",
      lessons: [
        {
          title: "Introduction to Risk Assessment",
          content: `
Risk assessment is the process of identifying, analyzing, and evaluating risks that may affect an organization, system, project, or process.

A risk is the possibility that an event or condition could negatively affect an objective.

For example, an organization may depend on an important application. If that application becomes unavailable, business operations may be interrupted. The possibility of that disruption represents a risk.

Risk assessment helps organizations make informed decisions instead of treating every possible problem as equally important.

A basic risk assessment process includes:

1. Identify important assets and objectives.
2. Identify threats.
3. Identify vulnerabilities.
4. Estimate likelihood.
5. Estimate impact.
6. Determine risk level.
7. Decide how the risk should be treated.
8. Monitor the risk over time.

Risk assessment is not about predicting the future perfectly. It is about understanding uncertainty well enough to make reasonable decisions.

Risk assessments can be performed for applications, networks, cloud systems, business processes, projects, vendors, or entire organizations.

The result should help decision-makers understand where attention and resources are needed.

A good assessment should be based on evidence and clearly documented assumptions.

Risk assessment should also be repeated because systems, threats, vulnerabilities, and business requirements change over time.
          `,
          quiz: [
            {
              question: "What is risk assessment?",
              options: [
                "The process of identifying and analyzing potential risks",
                "A method for replacing computer hardware",
                "A process for writing application code only",
                "A method for increasing network speed",
              ],
              answer:
                "The process of identifying and analyzing potential risks",
            },
            {
              question: "Why is risk assessment useful?",
              options: [
                "It helps organizations make informed decisions about risks",
                "It guarantees that no risks exist",
                "It eliminates the need for security controls",
                "It automatically prevents every incident",
              ],
              answer:
                "It helps organizations make informed decisions about risks",
            },
            {
              question: "Which is normally identified during risk assessment?",
              options: [
                "Threats and vulnerabilities",
                "Monitor colors",
                "Keyboard brands",
                "Employee hobbies",
              ],
              answer: "Threats and vulnerabilities",
            },
            {
              question: "Why should risk assessments be repeated?",
              options: [
                "Systems and threats change over time",
                "Risk never changes",
                "It deletes previous assessments",
                "It replaces backups",
              ],
              answer: "Systems and threats change over time",
            },
            {
              question: "What should risk assessment decisions be based on?",
              options: [
                "Evidence and documented assumptions",
                "Guesswork only",
                "Rumors",
                "Personal preferences alone",
              ],
              answer: "Evidence and documented assumptions",
            },
          ],
        },

        {
          title: "Assets and Business Objectives",
          content: `
An asset is something valuable that an organization needs to protect or maintain.

Assets can include:
- Customer information.
- Employee information.
- Applications.
- Databases.
- Servers.
- Network infrastructure.
- Cloud resources.
- Intellectual property.
- Business processes.
- Physical equipment.

Not every asset has the same importance.

An asset's importance can be evaluated based on factors such as business value, sensitivity, availability requirements, regulatory requirements, and operational dependency.

Business objectives describe what an organization needs to achieve.

For example, an online service may need to remain available to customers. A financial system may require accurate transaction processing. A healthcare organization may need to protect sensitive information.

Risk assessment should connect technical risks to business objectives.

A technical vulnerability matters because it may affect something valuable.

Asset identification therefore provides the foundation for meaningful risk analysis.

Asset owners should be identified when possible. An asset owner is responsible for understanding the asset's importance and making decisions about its protection.

Asset inventories should be kept reasonably current. New applications, cloud resources, vendors, and systems may introduce additional assets.

Understanding what needs protection makes it easier to determine which risks deserve attention first.
          `,
          quiz: [
            {
              question: "What is an asset?",
              options: [
                "Something valuable that needs protection or maintenance",
                "Only a computer password",
                "Only a network cable",
                "Only a security alert",
              ],
              answer:
                "Something valuable that needs protection or maintenance",
            },
            {
              question: "Which can be an organizational asset?",
              options: [
                "A customer database",
                "A random keyboard color",
                "An empty screen",
                "A desk decoration",
              ],
              answer: "A customer database",
            },
            {
              question: "Why are business objectives relevant to risk assessment?",
              options: [
                "Risks matter because they can affect important objectives",
                "Objectives have no connection to risk",
                "They replace asset identification",
                "They eliminate vulnerabilities",
              ],
              answer:
                "Risks matter because they can affect important objectives",
            },
            {
              question: "What can determine an asset's importance?",
              options: [
                "Business value and sensitivity",
                "Monitor size only",
                "Keyboard color only",
                "Employee preference only",
              ],
              answer: "Business value and sensitivity",
            },
            {
              question: "Why should asset inventories be maintained?",
              options: [
                "New systems and resources can be introduced over time",
                "Assets never change",
                "It removes the need for controls",
                "It prevents every threat",
              ],
              answer:
                "New systems and resources can be introduced over time",
            },
          ],
        },

        {
          title: "Threats and Threat Sources",
          content: `
A threat is a potential cause of harm to an asset or objective.

Threats can come from different sources.

Examples include:
- Malware.
- Phishing.
- Accidental mistakes.
- Hardware failure.
- Software failure.
- Natural events.
- Service outages.
- Unauthorized access.
- Supply-chain problems.

A threat source is the origin of a threat.

Threats can be intentional or accidental.

For example, an attacker attempting unauthorized access is an intentional threat. An employee accidentally sending information to the wrong recipient is an accidental threat.

Threat identification should consider the environment in which a system operates.

A threat that is realistic for one organization may not be relevant to another.

Historical incidents, industry information, system architecture, and business processes can help identify relevant threats.

Risk assessment should avoid listing every imaginable threat without considering relevance.

A useful threat analysis asks:
- What could go wrong?
- What could cause it?
- Which assets could be affected?
- How realistic is the scenario?
- What existing controls reduce the possibility or impact?

Threats are not automatically risks. A risk results from the possibility that a relevant threat could exploit a weakness and cause an unwanted outcome.

Understanding threats helps organizations focus their security efforts on realistic scenarios.
          `,
          quiz: [
            {
              question: "What is a threat?",
              options: [
                "A potential cause of harm",
                "A guaranteed incident",
                "A security control",
                "A backup",
              ],
              answer: "A potential cause of harm",
            },
            {
              question: "Which is an example of an accidental threat?",
              options: [
                "An employee sending information to the wrong recipient",
                "A planned security test",
                "A scheduled backup",
                "A normal software update",
              ],
              answer:
                "An employee sending information to the wrong recipient",
            },
            {
              question: "Which can be a threat source?",
              options: [
                "An attacker",
                "A documented backup",
                "A security policy",
                "A monitoring dashboard",
              ],
              answer: "An attacker",
            },
            {
              question: "Why should threats be evaluated for relevance?",
              options: [
                "Not every imaginable threat is realistic for every environment",
                "All threats have identical probability",
                "Threats never change",
                "It removes the need for assets",
              ],
              answer:
                "Not every imaginable threat is realistic for every environment",
            },
            {
              question: "What should threat analysis consider?",
              options: [
                "Potential causes, affected assets, and realistic scenarios",
                "Only computer brands",
                "Only screen size",
                "Only employee age",
              ],
              answer:
                "Potential causes, affected assets, and realistic scenarios",
            },
          ],
        },

        {
          title: "Vulnerabilities and Weaknesses",
          content: `
A vulnerability is a weakness that could be exploited or could contribute to an unwanted outcome.

Vulnerabilities can exist in software, hardware, configurations, processes, people, or physical environments.

Examples include:
- Unpatched software.
- Weak authentication.
- Excessive permissions.
- Incorrect network configuration.
- Missing backups.
- Poor security procedures.
- Unsupported software.
- Inadequate monitoring.

A vulnerability does not automatically mean an incident will occur.

Risk depends on how a vulnerability relates to threats, assets, and potential impact.

For example, an outdated application may represent a vulnerability. If that application is exposed to a relevant threat and contains valuable information, the associated risk may be significant.

Vulnerability identification can involve vulnerability scanners, configuration reviews, code reviews, audits, penetration testing performed with authorization, and manual assessments.

Findings should be validated because automated tools can sometimes produce inaccurate or incomplete results.

Vulnerabilities should be prioritized rather than treated as equally urgent.

Factors can include:
- Severity.
- Exploitability.
- Asset importance.
- Exposure.
- Existing controls.
- Potential impact.

Remediation may involve patching, configuration changes, access-control improvements, architectural changes, or process improvements.

Regular vulnerability management helps keep risk assessments current.
          `,
          quiz: [
            {
              question: "What is a vulnerability?",
              options: [
                "A weakness that could contribute to harm",
                "A guaranteed attack",
                "A backup file",
                "A security policy",
              ],
              answer: "A weakness that could contribute to harm",
            },
            {
              question: "Which is an example of a vulnerability?",
              options: [
                "Unpatched software",
                "A successful backup",
                "A security training session",
                "A monitoring dashboard",
              ],
              answer: "Unpatched software",
            },
            {
              question: "Does a vulnerability automatically mean an incident will happen?",
              options: [
                "No",
                "Yes",
                "Only on servers",
                "Only in cloud systems",
              ],
              answer: "No",
            },
            {
              question: "Why should vulnerability findings be validated?",
              options: [
                "Automated tools can produce inaccurate or incomplete results",
                "Validation removes all vulnerabilities",
                "Vulnerabilities never change",
                "Validation replaces risk analysis",
              ],
              answer:
                "Automated tools can produce inaccurate or incomplete results",
            },
            {
              question: "Which factor can help prioritize vulnerabilities?",
              options: [
                "Potential impact",
                "Monitor color",
                "Keyboard type",
                "Office decoration",
              ],
              answer: "Potential impact",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Risk Analysis",
      description:
        "Learn likelihood, impact, risk levels, qualitative and quantitative analysis, and how to build useful risk scenarios.",
      lessons: [
        {
          title: "Likelihood and Probability",
          content: `
Likelihood describes how possible or probable a risk event is within a defined context and time period.

Risk assessment often uses qualitative categories such as:
- Very low.
- Low.
- Medium.
- High.
- Very high.

Some assessments use numerical probability estimates.

Likelihood should be based on evidence where possible.

Factors that can affect likelihood include:
- Exposure.
- Threat activity.
- Vulnerability severity.
- Existing controls.
- Historical events.
- Attacker opportunity.
- Frequency of similar events.

Likelihood is not the same as certainty.

A highly likely event may still not happen during a particular period.

When estimating likelihood, assumptions should be documented.

For example, an internet-facing service with a known weakness may have a higher likelihood of exploitation than an isolated internal system with the same weakness.

Existing controls can reduce likelihood.

However, controls should not automatically be considered perfect. Their effectiveness should be evaluated.

Risk assessments should define the scale being used. A "high likelihood" rating should have a clear meaning within the organization's assessment method.

Consistent definitions make risk ratings easier to compare.
          `,
          quiz: [
            {
              question: "What does likelihood describe?",
              options: [
                "How possible a risk event is",
                "The value of an asset only",
                "The cost of a computer",
                "The number of employees",
              ],
              answer: "How possible a risk event is",
            },
            {
              question: "Which can affect likelihood?",
              options: [
                "Exposure and existing controls",
                "Monitor color",
                "Keyboard layout",
                "Office furniture",
              ],
              answer: "Exposure and existing controls",
            },
            {
              question: "Is high likelihood the same as certainty?",
              options: [
                "No",
                "Yes",
                "Only for software",
                "Only for networks",
              ],
              answer: "No",
            },
            {
              question: "Why should likelihood assumptions be documented?",
              options: [
                "They make the assessment easier to understand and review",
                "They guarantee the event will occur",
                "They remove all uncertainty",
                "They replace controls",
              ],
              answer:
                "They make the assessment easier to understand and review",
            },
            {
              question: "Why should rating scales have clear definitions?",
              options: [
                "They make ratings more consistent",
                "They eliminate vulnerabilities",
                "They prevent all attacks",
                "They remove the need for evidence",
              ],
              answer: "They make ratings more consistent",
            },
          ],
        },

        {
          title: "Impact Assessment",
          content: `
Impact describes the consequences if a risk event occurs.

Impact can affect different areas.

Confidentiality impact occurs when information is exposed to unauthorized parties.

Integrity impact occurs when information or systems are changed incorrectly or without authorization.

Availability impact occurs when systems or information become unavailable.

Organizations may also consider financial, operational, legal, regulatory, safety, and reputational consequences.

Impact should be considered in relation to specific assets and business objectives.

For example, a short outage may have a small impact on a non-critical internal application but a significant impact on a service that customers depend on continuously.

Impact categories can be qualitative or quantitative.

A qualitative assessment may use low, medium, and high.

A quantitative assessment may estimate financial loss, downtime, number of affected users, or other measurable values.

It is important not to confuse impact with likelihood.

An event can have a high impact but low likelihood.

Another event may have a low impact but high likelihood.

Both dimensions are useful for understanding overall risk.

Impact estimates should use available evidence and clearly stated assumptions.

Understanding impact helps decision-makers determine which risks require stronger treatment.
          `,
          quiz: [
            {
              question: "What does impact describe?",
              options: [
                "The consequences if a risk event occurs",
                "The number of vulnerabilities only",
                "The age of a system",
                "The number of security tools",
              ],
              answer: "The consequences if a risk event occurs",
            },
            {
              question: "Which is an availability impact?",
              options: [
                "A critical service becoming unavailable",
                "A password being changed normally",
                "A successful backup",
                "A routine software update",
              ],
              answer: "A critical service becoming unavailable",
            },
            {
              question: "Can a risk have high impact and low likelihood?",
              options: [
                "Yes",
                "No",
                "Only for hardware",
                "Only for cloud services",
              ],
              answer: "Yes",
            },
            {
              question: "Which is a quantitative impact measure?",
              options: [
                "Estimated financial loss",
                "Low",
                "Medium",
                "High",
              ],
              answer: "Estimated financial loss",
            },
            {
              question: "Why should impact be connected to business objectives?",
              options: [
                "Consequences depend on what the organization values and needs",
                "Business objectives eliminate risks",
                "Impact is unrelated to assets",
                "It prevents every incident",
              ],
              answer:
                "Consequences depend on what the organization values and needs",
            },
          ],
        },

        {
          title: "Risk Calculation and Risk Levels",
          content: `
Risk analysis combines information about likelihood and impact.

A simple qualitative model may use:

Risk level = Likelihood × Impact

The exact scoring method depends on the organization's risk framework.

For example, if likelihood and impact are each rated from 1 to 5, multiplying the two values can produce a score between 1 and 25.

The number itself has meaning only when the organization defines how scores map to risk categories.

For example, an organization might define certain score ranges as low, medium, or high risk.

Risk matrices are commonly used to visualize combinations of likelihood and impact.

A high-likelihood, high-impact scenario generally receives more attention than a low-likelihood, low-impact scenario.

However, organizations should not blindly rely on a numerical score.

Some risks may require special treatment because of legal, regulatory, safety, or business requirements even if their numerical score appears moderate.

Risk ratings should therefore combine structured scoring with appropriate professional judgment.

The calculation method should be documented so that different assessments are consistent.

Risk scores can also change when controls are introduced or when the environment changes.

The purpose of risk scoring is prioritization, not mathematical certainty.
          `,
          quiz: [
            {
              question: "What two factors are commonly combined in a simple risk model?",
              options: [
                "Likelihood and impact",
                "Password and username",
                "CPU and RAM",
                "File and folder",
              ],
              answer: "Likelihood and impact",
            },
            {
              question: "If likelihood is 4 and impact is 5 using multiplication, what is the score?",
              options: ["20", "9", "1", "45"],
              answer: "20",
            },
            {
              question: "Why does a numerical risk score need defined categories?",
              options: [
                "The organization needs to know what the score means",
                "Numbers automatically explain themselves",
                "Scores always represent financial loss",
                "Scoring eliminates judgment",
              ],
              answer:
                "The organization needs to know what the score means",
            },
            {
              question: "What does a risk matrix commonly show?",
              options: [
                "Combinations of likelihood and impact",
                "Computer hardware specifications",
                "Employee attendance",
                "Network cable lengths",
              ],
              answer: "Combinations of likelihood and impact",
            },
            {
              question: "What is the main purpose of risk scoring?",
              options: [
                "Prioritizing risks",
                "Guaranteeing future events",
                "Replacing all controls",
                "Eliminating uncertainty completely",
              ],
              answer: "Prioritizing risks",
            },
          ],
        },

        {
          title: "Qualitative and Quantitative Risk Analysis",
          content: `
Risk analysis can be qualitative, quantitative, or a combination of both.

Qualitative analysis uses categories and descriptions such as low, medium, and high.

It is useful when exact numerical information is unavailable or when a quick structured assessment is needed.

Quantitative analysis uses numerical estimates.

Examples include:
- Estimated financial loss.
- Expected downtime.
- Number of affected records.
- Probability estimates.
- Recovery costs.

Quantitative analysis can provide more detailed information, but it may require reliable data and assumptions.

If the underlying estimates are weak, precise-looking numbers can create a false sense of accuracy.

Qualitative analysis is often easier to perform and communicate.

Organizations may use both approaches.

For example, a qualitative assessment can identify high-priority risks, while quantitative analysis can be used for selected risks where financial or operational data is available.

The selected method should match the purpose of the assessment.

All important assumptions should be documented.

Risk analysis should also be understandable to decision-makers. A technically complex model is not useful if nobody understands how its results should influence decisions.

The objective is to produce useful information for risk treatment and decision-making.
          `,
          quiz: [
            {
              question: "What does qualitative risk analysis use?",
              options: [
                "Categories such as low, medium, and high",
                "Only financial equations",
                "Only source code",
                "Only network packets",
              ],
              answer: "Categories such as low, medium, and high",
            },
            {
              question: "What does quantitative analysis use?",
              options: [
                "Numerical estimates",
                "Only descriptions",
                "Only colors",
                "Only opinions",
              ],
              answer: "Numerical estimates",
            },
            {
              question: "What is a potential problem with weak quantitative data?",
              options: [
                "Precise-looking numbers may create false confidence",
                "It always prevents risk analysis",
                "It automatically increases accuracy",
                "It eliminates assumptions",
              ],
              answer:
                "Precise-looking numbers may create false confidence",
            },
            {
              question: "Why might an organization use both methods?",
              options: [
                "Different risks may require different levels of analysis",
                "The methods are always identical",
                "Quantitative analysis cannot use numbers",
                "Qualitative analysis always requires financial data",
              ],
              answer:
                "Different risks may require different levels of analysis",
            },
            {
              question: "What should risk analysis ultimately support?",
              options: [
                "Risk treatment and decision-making",
                "Monitor selection",
                "Keyboard design",
                "Employee entertainment",
              ],
              answer: "Risk treatment and decision-making",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Risk Treatment and Controls",
      description:
        "Learn how organizations respond to identified risks through controls, mitigation, transfer, avoidance, and acceptance.",
      lessons: [
        {
          title: "Risk Treatment Options",
          content: `
After risks are analyzed and prioritized, organizations decide how to treat them.

Common risk treatment options include:
- Risk reduction or mitigation.
- Risk avoidance.
- Risk transfer or sharing.
- Risk acceptance.

Risk reduction means implementing controls that reduce likelihood, impact, or both.

Examples include improving authentication, applying patches, adding backups, or improving monitoring.

Risk avoidance means changing the activity so the risk no longer applies or is significantly reduced.

Risk transfer means shifting some financial or operational consequences to another party, such as through insurance or contractual arrangements. Transfer does not necessarily eliminate the underlying risk.

Risk acceptance means consciously deciding to live with a risk because the cost or effort of additional treatment may not be justified.

Acceptance should be an informed decision by an appropriate risk owner.

Risk treatment should consider cost, effectiveness, business requirements, and remaining risk.

There is rarely one universal solution.

For example, adding a highly expensive control to protect a low-value asset may not be reasonable.

Treatment decisions should be documented.

Risk treatment also requires follow-up because controls can become ineffective as systems and threats change.
          `,
          quiz: [
            {
              question: "What is risk mitigation?",
              options: [
                "Reducing the likelihood or impact of a risk",
                "Ignoring every risk",
                "Deleting all systems",
                "Removing all monitoring",
              ],
              answer: "Reducing the likelihood or impact of a risk",
            },
            {
              question: "What does risk avoidance involve?",
              options: [
                "Changing an activity to avoid the risk",
                "Accepting every risk",
                "Increasing exposure",
                "Removing backups",
              ],
              answer: "Changing an activity to avoid the risk",
            },
            {
              question: "What does risk transfer involve?",
              options: [
                "Shifting some consequences to another party",
                "Guaranteeing zero risk",
                "Deleting the asset",
                "Ignoring the threat",
              ],
              answer: "Shifting some consequences to another party",
            },
            {
              question: "What is risk acceptance?",
              options: [
                "A conscious decision to retain a risk",
                "Automatic failure to identify a risk",
                "Deleting a risk register",
                "Removing all controls",
              ],
              answer: "A conscious decision to retain a risk",
            },
            {
              question: "What should treatment decisions consider?",
              options: [
                "Cost, effectiveness, and business requirements",
                "Only monitor size",
                "Only keyboard type",
                "Only employee preference",
              ],
              answer:
                "Cost, effectiveness, and business requirements",
            },
          ],
        },

        {
          title: "Security Controls",
          content: `
A security control is a safeguard designed to reduce risk.

Controls can be technical, administrative, or physical.

Technical controls include:
- Firewalls.
- Access controls.
- Encryption.
- Multi-factor authentication.
- Security monitoring.
- Endpoint protection.

Administrative controls include:
- Policies.
- Procedures.
- Training.
- Risk assessments.
- Security standards.

Physical controls include:
- Locks.
- Security barriers.
- Access badges.
- Surveillance systems.

Controls can also be classified by purpose.

Preventive controls attempt to prevent unwanted events.

Detective controls help identify events that have occurred.

Corrective controls help restore or correct a situation after an event.

A single control rarely provides complete protection.

Defense in depth uses multiple layers of controls so that the failure of one control does not automatically result in complete compromise.

Control effectiveness should be evaluated.

A control may exist but still be poorly configured, inconsistently applied, or ineffective against the relevant threat.

Risk assessments should therefore consider not just whether a control exists, but whether it actually reduces the relevant risk.
          `,
          quiz: [
            {
              question: "What is a security control?",
              options: [
                "A safeguard designed to reduce risk",
                "A type of threat",
                "A vulnerability",
                "An incident report",
              ],
              answer: "A safeguard designed to reduce risk",
            },
            {
              question: "Which is a technical control?",
              options: [
                "Multi-factor authentication",
                "Security policy",
                "Employee training",
                "Physical door lock",
              ],
              answer: "Multi-factor authentication",
            },
            {
              question: "Which is an administrative control?",
              options: [
                "Security policy",
                "Firewall",
                "Encryption",
                "Door lock",
              ],
              answer: "Security policy",
            },
            {
              question: "What is a detective control designed to do?",
              options: [
                "Help identify unwanted events",
                "Prevent every possible event",
                "Delete evidence",
                "Replace backups",
              ],
              answer: "Help identify unwanted events",
            },
            {
              question: "What does defense in depth mean?",
              options: [
                "Using multiple layers of protection",
                "Using no security controls",
                "Using only one password",
                "Removing monitoring",
              ],
              answer: "Using multiple layers of protection",
            },
          ],
        },

        {
          title: "Residual Risk and Risk Acceptance",
          content: `
Risk rarely becomes zero.

After controls are implemented, some amount of remaining risk usually exists. This is called residual risk.

For example, an organization may implement multi-factor authentication to reduce account compromise risk. The risk may become lower, but other possible weaknesses can still exist.

Residual risk should be evaluated after treatment.

Organizations should determine whether the remaining risk is acceptable.

Risk acceptance should be intentional and documented.

The appropriate risk owner should understand:
- The remaining risk.
- Potential consequences.
- Existing controls.
- Available treatment options.
- Cost of additional treatment.

Risk acceptance is not the same as ignoring a risk.

An ignored risk may exist without anyone understanding or taking responsibility for it.

A formally accepted risk has an identified owner and a documented decision.

Risk acceptance may also have conditions. For example, an organization may accept a risk temporarily while a long-term control is being implemented.

Accepted risks should be reviewed periodically.

If the environment changes, the accepted risk may become more serious.

Residual risk is therefore an important part of ongoing risk management.
          `,
          quiz: [
            {
              question: "What is residual risk?",
              options: [
                "Risk remaining after controls are applied",
                "Risk before any analysis",
                "A type of security tool",
                "A completed incident",
              ],
              answer: "Risk remaining after controls are applied",
            },
            {
              question: "Does implementing controls normally guarantee zero risk?",
              options: [
                "No",
                "Yes",
                "Only for cloud systems",
                "Only for physical systems",
              ],
              answer: "No",
            },
            {
              question: "What should formal risk acceptance include?",
              options: [
                "An informed and documented decision",
                "No owner",
                "No analysis",
                "No documentation",
              ],
              answer: "An informed and documented decision",
            },
            {
              question: "Who should understand an accepted risk?",
              options: [
                "The appropriate risk owner",
                "Only an unrelated employee",
                "Unknown internet users",
                "No one",
              ],
              answer: "The appropriate risk owner",
            },
            {
              question: "Why should accepted risks be reviewed?",
              options: [
                "The environment and risk can change",
                "Accepted risks never change",
                "Reviewing removes all controls",
                "Reviewing guarantees prevention",
              ],
              answer: "The environment and risk can change",
            },
          ],
        },

        {
          title: "Risk Register and Risk Tracking",
          content: `
A risk register is a structured record used to track identified risks.

A risk register may contain:
- Risk ID.
- Risk description.
- Asset or process affected.
- Threat.
- Vulnerability.
- Likelihood.
- Impact.
- Risk level.
- Existing controls.
- Risk owner.
- Treatment decision.
- Target date.
- Current status.
- Residual risk.

The exact fields depend on the organization.

Risk registers help teams maintain visibility into outstanding risks.

They can also help prioritize treatment activities.

For example, a high-risk issue with no owner should receive attention because nobody is currently responsible for resolving or accepting it.

Risk status can change over time.

A risk may move from open to treated, accepted, transferred, avoided, or closed.

Risk registers should be reviewed regularly.

They should not become static documents that nobody updates.

Clear ownership is especially important.

Each significant risk should have someone responsible for coordinating its treatment or acceptance.

A risk register also supports communication between technical teams and management.

Technical details can be connected to business impact and treatment decisions.

This makes risk management more organized and measurable.
          `,
          quiz: [
            {
              question: "What is a risk register?",
              options: [
                "A structured record for tracking risks",
                "A firewall configuration",
                "A backup server",
                "A vulnerability scanner",
              ],
              answer: "A structured record for tracking risks",
            },
            {
              question: "Which item can appear in a risk register?",
              options: [
                "Risk owner",
                "Monitor color",
                "Keyboard brand",
                "Employee favorite food",
              ],
              answer: "Risk owner",
            },
            {
              question: "Why is risk ownership important?",
              options: [
                "Someone needs responsibility for treatment or acceptance",
                "Ownership guarantees zero risk",
                "Ownership replaces controls",
                "Ownership removes documentation",
              ],
              answer:
                "Someone needs responsibility for treatment or acceptance",
            },
            {
              question: "Why should risk registers be updated?",
              options: [
                "Risk status and conditions can change",
                "Risks never change",
                "Updates delete evidence",
                "Updates prevent every incident",
              ],
              answer:
                "Risk status and conditions can change",
            },
            {
              question: "What can a risk register improve?",
              options: [
                "Visibility and prioritization of risks",
                "Monitor resolution",
                "Keyboard performance",
                "Internet speed automatically",
              ],
              answer: "Visibility and prioritization of risks",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Practical Risk Assessment",
      description:
        "Apply risk assessment concepts to real-world scenarios, prioritize risks, document findings, and complete a practical security risk assessment.",
      lessons: [
        {
          title: "Third-Party and Vendor Risk",
          content: `
Organizations often depend on external vendors and service providers.

Examples include:
- Cloud providers.
- Payment processors.
- Software vendors.
- Managed service providers.
- Data-processing services.

A third-party relationship can introduce additional risk because the organization may not directly control the vendor's systems.

Vendor risk assessment considers:
- What information the vendor can access.
- What systems the vendor connects to.
- How important the service is.
- Security controls used by the vendor.
- Incident response capabilities.
- Contractual requirements.
- Availability and recovery arrangements.

Vendor risk should be proportional to the relationship.

A vendor handling sensitive information may require more detailed assessment than a vendor providing a low-risk service.

Contracts can include security requirements, reporting obligations, data protection requirements, and service expectations.

Third-party risk should not be treated as a one-time activity.

Vendors can change their systems, services, personnel, or security posture.

Periodic review can help identify changes.

Organizations should also understand their dependencies. If a critical vendor becomes unavailable, the organization may need a contingency or alternative arrangement.
          `,
          quiz: [
            {
              question: "Why can vendors introduce additional risk?",
              options: [
                "The organization may not directly control the vendor's systems",
                "Vendors can never have vulnerabilities",
                "Vendors automatically eliminate risks",
                "Vendors do not handle information",
              ],
              answer:
                "The organization may not directly control the vendor's systems",
            },
            {
              question: "What should vendor risk assessment consider?",
              options: [
                "Information and systems the vendor can access",
                "Only the vendor's office color",
                "Only the vendor's logo",
                "Only the number of employees",
              ],
              answer:
                "Information and systems the vendor can access",
            },
            {
              question: "Should every vendor receive exactly the same assessment?",
              options: [
                "Not necessarily; assessment should reflect the relationship and risk",
                "Yes, always",
                "Only small vendors need assessment",
                "Only cloud vendors matter",
              ],
              answer:
                "Not necessarily; assessment should reflect the relationship and risk",
            },
            {
              question: "Why can contracts help manage vendor risk?",
              options: [
                "They can define security and reporting requirements",
                "They guarantee zero vulnerabilities",
                "They replace all monitoring",
                "They remove the need for assessment",
              ],
              answer:
                "They can define security and reporting requirements",
            },
            {
              question: "Why should vendor risk be reviewed periodically?",
              options: [
                "Vendor systems and services can change",
                "Vendor risk never changes",
                "Reviewing removes contracts",
                "Reviewing guarantees availability",
              ],
              answer:
                "Vendor systems and services can change",
            },
          ],
        },

        {
          title: "Risk Assessment Methodology",
          content: `
A risk assessment methodology defines how an organization performs risk assessments consistently.

A basic methodology can include:

Step 1: Define scope.

Identify the system, process, application, project, or business area being assessed.

Step 2: Identify assets and objectives.

Determine what needs to be protected or maintained.

Step 3: Identify threats.

Determine realistic events or sources that could cause harm.

Step 4: Identify vulnerabilities.

Find weaknesses that could contribute to unwanted outcomes.

Step 5: Identify existing controls.

Determine which safeguards are already in place.

Step 6: Estimate likelihood.

Assess how possible the risk event is.

Step 7: Estimate impact.

Assess the consequences if the event occurs.

Step 8: Determine risk level.

Use the organization's defined scoring or categorization method.

Step 9: Select treatment.

Choose mitigation, avoidance, transfer, or acceptance.

Step 10: Document and monitor.

Record the assessment and review the risk as conditions change.

A methodology improves consistency between different assessments.

It should be flexible enough to handle different types of systems while maintaining common definitions and scoring rules.

The methodology should also define who participates in the assessment and who approves important decisions.
          `,
          quiz: [
            {
              question: "What is the first step of a basic risk assessment methodology?",
              options: [
                "Define the scope",
                "Delete the risk register",
                "Apply every possible control",
                "Ignore business objectives",
              ],
              answer: "Define the scope",
            },
            {
              question: "What should be identified after defining scope?",
              options: [
                "Assets and objectives",
                "Keyboard brands",
                "Monitor sizes",
                "Employee hobbies",
              ],
              answer: "Assets and objectives",
            },
            {
              question: "What comes after identifying vulnerabilities?",
              options: [
                "Identify existing controls",
                "Delete all evidence",
                "Stop the assessment",
                "Ignore the asset",
              ],
              answer: "Identify existing controls",
            },
            {
              question: "Why does a methodology improve consistency?",
              options: [
                "It provides common assessment steps and definitions",
                "It guarantees every risk is identical",
                "It removes the need for evidence",
                "It prevents all incidents",
              ],
              answer:
                "It provides common assessment steps and definitions",
            },
            {
              question: "Why should risk assessments be monitored after completion?",
              options: [
                "Conditions and risks can change",
                "Risk assessments never become outdated",
                "Monitoring deletes risks",
                "Monitoring replaces treatment",
              ],
              answer: "Conditions and risks can change",
            },
          ],
        },

        {
          title: "Risk Assessment Reporting and Decision-Making",
          content: `
A risk assessment should communicate its findings clearly to the people responsible for making decisions.

A good report can include:
- Scope.
- Methodology.
- Assets.
- Threats.
- Vulnerabilities.
- Risk ratings.
- Existing controls.
- Treatment recommendations.
- Residual risks.
- Owners.
- Review dates.

Technical findings should be translated into meaningful business consequences.

For example, instead of only saying that a server has a configuration weakness, the report can explain that exploitation could interrupt a critical service.

Risk reports should distinguish facts from assumptions.

Recommendations should be realistic and prioritized.

A report may identify several risks, but not every risk can be treated immediately.

Prioritization should consider severity, business importance, cost, available resources, and organizational requirements.

Decision-makers may need to choose between several treatment options.

The risk assessment should provide enough information for them to understand the trade-offs.

A clear report does not hide uncertainty.

If information is incomplete, the report should state that limitation.

Risk assessment is ultimately a decision-support activity.

The purpose is not to create a perfect document. The purpose is to help the organization understand uncertainty and choose appropriate actions.
          `,
          quiz: [
            {
              question: "What should a risk report communicate?",
              options: [
                "Important risks and their potential consequences",
                "Only technical tool names",
                "Only employee information",
                "Only hardware specifications",
              ],
              answer:
                "Important risks and their potential consequences",
            },
            {
              question: "Why should technical findings be connected to business consequences?",
              options: [
                "Decision-makers need to understand why the risk matters",
                "Technical details are always useless",
                "Business consequences remove vulnerabilities",
                "It guarantees risk elimination",
              ],
              answer:
                "Decision-makers need to understand why the risk matters",
            },
            {
              question: "Should a risk report hide uncertainty?",
              options: [
                "No",
                "Yes",
                "Only for high risks",
                "Only for vendors",
              ],
              answer: "No",
            },
            {
              question: "Why should recommendations be prioritized?",
              options: [
                "Resources and time are limited",
                "Every recommendation is equally urgent",
                "Prioritization removes risk",
                "It replaces controls",
              ],
              answer: "Resources and time are limited",
            },
            {
              question: "What is the purpose of risk assessment?",
              options: [
                "Support informed decisions about uncertainty and risk",
                "Guarantee zero risk",
                "Replace incident response",
                "Eliminate every vulnerability",
              ],
              answer:
                "Support informed decisions about uncertainty and risk",
            },
          ],
        },

        {
          title: "Final Project: Security Risk Assessment",
          content: `
The final project combines the concepts from this course into a practical security risk assessment.

Project: Perform a Security Risk Assessment for a Small Organization.

Choose a simple environment such as a small company network, student management application, or cloud-based web application.

Step 1: Define scope.

Clearly state what system or business process is being assessed.

Step 2: Identify assets.

List important systems, applications, databases, information, and business processes.

Step 3: Identify threats.

List realistic threats relevant to the environment.

Step 4: Identify vulnerabilities.

Identify weaknesses that could allow threats to cause harm.

Step 5: Identify existing controls.

Document controls such as authentication, backups, firewalls, encryption, monitoring, and access control.

Step 6: Estimate likelihood.

Use a defined scale such as 1 to 5 or low to high.

Step 7: Estimate impact.

Consider confidentiality, integrity, availability, financial impact, operational impact, and other relevant consequences.

Step 8: Determine risk.

Use a consistent method to combine likelihood and impact.

Step 9: Select treatment.

For each important risk, choose mitigation, avoidance, transfer, or acceptance.

Step 10: Document residual risk.

Explain what risk remains after treatment.

Step 11: Assign ownership.

Identify who is responsible for managing each important risk.

Step 12: Create a final report.

Summarize the most important risks, recommended actions, and review requirements.

The final project should demonstrate that risk assessment is more than finding vulnerabilities.

The complete process connects assets, threats, vulnerabilities, likelihood, impact, controls, treatment, and business decisions.

The goal is to create a clear and practical assessment that helps an organization decide what should be done next.
          `,
          quiz: [
            {
              question: "What is the purpose of the final project?",
              options: [
                "Perform a structured security risk assessment",
                "Build malware",
                "Disable security controls",
                "Create unauthorized access",
              ],
              answer: "Perform a structured security risk assessment",
            },
            {
              question: "What should be identified first after defining project scope?",
              options: [
                "Important assets",
                "Monitor colors",
                "Keyboard types",
                "Office decorations",
              ],
              answer: "Important assets",
            },
            {
              question: "Which factors are used to determine risk in the project?",
              options: [
                "Likelihood and impact",
                "CPU and RAM",
                "Username and password",
                "File size and extension",
              ],
              answer: "Likelihood and impact",
            },
            {
              question: "What should happen after risks are analyzed?",
              options: [
                "Appropriate treatment should be selected",
                "All risks should be ignored",
                "All systems should be deleted",
                "Monitoring should be disabled",
              ],
              answer: "Appropriate treatment should be selected",
            },
            {
              question: "What should the final report help decision-makers understand?",
              options: [
                "Important risks, consequences, and recommended actions",
                "Only computer specifications",
                "Only software version numbers",
                "Only employee preferences",
              ],
              answer:
                "Important risks, consequences, and recommended actions",
            },
          ],
        },
      ],
    },
  ],
};

export default riskAssessmentCourse;
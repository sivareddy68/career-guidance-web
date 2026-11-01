const experimentAnalysisCourse = {
  title: "Experiment Analysis",
  description:
    "Learn A/B testing, experiment design, hypothesis testing, statistical significance, experiment metrics, and data-driven product decisions.",

  weeks: [
    {
      title: "Week 1: Experiment Fundamentals",
      description:
        "Understand experiments, hypotheses, control groups, treatment groups, and key experiment concepts.",
      lessons: [
        {
          title: "Introduction to Product Experiments",
          content: `Product experiments help teams understand whether a product change improves user behavior or business outcomes.

A common experiment is an A/B test where users are divided into two groups. One group sees the existing product experience, while another group sees the new version.

Product analysts use experiment data to compare the groups and determine whether the change produced a meaningful result.

Experiments are useful for testing new features, pricing changes, onboarding flows, notifications, and other product decisions.`,
          quiz: [
            {
              question: "What is the main purpose of a product experiment?",
              options: [
                "To collect random data",
                "To understand the effect of a product change",
                "To design a website",
                "To remove all users",
              ],
              answer: "To understand the effect of a product change",
            },
            {
              question: "What is A/B testing?",
              options: [
                "Comparing two product experiences",
                "Testing two databases",
                "Creating two websites",
                "Comparing two developers",
              ],
              answer: "Comparing two product experiences",
            },
            {
              question: "Why are experiments useful?",
              options: [
                "They support data-driven decisions",
                "They remove analytics",
                "They increase coding speed",
                "They replace databases",
              ],
              answer: "They support data-driven decisions",
            },
            {
              question: "What can product experiments test?",
              options: [
                "Only colors",
                "Only pricing",
                "Features and product changes",
                "Only databases",
              ],
              answer: "Features and product changes",
            },
            {
              question: "Who commonly analyzes experiment results?",
              options: [
                "Product analyst",
                "Graphic designer",
                "Network administrator",
                "Hardware technician",
              ],
              answer: "Product analyst",
            },
          ],
        },

        {
          title: "Hypothesis and Experiment Goals",
          content: `Every experiment should start with a clear hypothesis.

A hypothesis describes what the team expects to happen after a product change. For example, a team may believe that simplifying signup will increase the signup completion rate.

The experiment goal should be measurable. Product analysts define the primary metric and supporting metrics before analyzing the results.

A clear hypothesis makes it easier to determine whether the experiment produced the expected outcome.`,
          quiz: [
            {
              question: "What should an experiment begin with?",
              options: [
                "A hypothesis",
                "A dashboard color",
                "A database backup",
                "A random number",
              ],
              answer: "A hypothesis",
            },
            {
              question: "What does a hypothesis describe?",
              options: [
                "Expected effect of a change",
                "Database structure",
                "Employee salary",
                "Server location",
              ],
              answer: "Expected effect of a change",
            },
            {
              question: "Why should experiment goals be measurable?",
              options: [
                "To evaluate the result",
                "To increase code size",
                "To remove users",
                "To avoid metrics",
              ],
              answer: "To evaluate the result",
            },
            {
              question: "What is a primary metric?",
              options: [
                "The main metric used to evaluate an experiment",
                "A random metric",
                "A server metric",
                "A coding metric",
              ],
              answer: "The main metric used to evaluate an experiment",
            },
            {
              question: "A signup experiment may measure what?",
              options: [
                "Signup completion rate",
                "Keyboard speed",
                "Screen brightness",
                "Computer temperature",
              ],
              answer: "Signup completion rate",
            },
          ],
        },

        {
          title: "Control and Treatment Groups",
          content: `A control group represents the existing product experience, while a treatment group receives the new product change.

For example, in a checkout experiment, the control group may use the current checkout page and the treatment group may use a redesigned checkout page.

The analyst compares the groups using predefined metrics. Random assignment helps make the groups comparable and reduces bias.

The difference between the groups can then be analyzed to understand the impact of the change.`,
          quiz: [
            {
              question: "What does the control group usually receive?",
              options: [
                "Existing experience",
                "New experiment only",
                "No product",
                "Random data",
              ],
              answer: "Existing experience",
            },
            {
              question: "What does the treatment group receive?",
              options: [
                "The new experience",
                "No experience",
                "Only advertisements",
                "Old database",
              ],
              answer: "The new experience",
            },
            {
              question: "Why use random assignment?",
              options: [
                "To reduce bias",
                "To increase coding",
                "To remove metrics",
                "To change the database",
              ],
              answer: "To reduce bias",
            },
            {
              question: "What is compared between groups?",
              options: [
                "Experiment metrics",
                "Computer models",
                "Employee records",
                "Source code",
              ],
              answer: "Experiment metrics",
            },
            {
              question: "What does the treatment group help measure?",
              options: [
                "Effect of the new change",
                "Server speed",
                "Database size",
                "Developer performance",
              ],
              answer: "Effect of the new change",
            },
          ],
        },

        {
          title: "Experiment Design",
          content: `Good experiment design helps produce reliable results.

Before launching an experiment, analysts define the target population, control and treatment groups, primary metric, secondary metrics, experiment duration, and success criteria.

The analyst should also consider possible risks such as selection bias, insufficient sample size, and external events.

A well-designed experiment makes the final analysis easier and helps product teams make better decisions.`,
          quiz: [
            {
              question: "What should be defined before an experiment?",
              options: [
                "Metrics and success criteria",
                "Only colors",
                "Only database size",
                "Only employee names",
              ],
              answer: "Metrics and success criteria",
            },
            {
              question: "What is the target population?",
              options: [
                "Users included in the experiment",
                "Developers only",
                "Database tables",
                "Servers",
              ],
              answer: "Users included in the experiment",
            },
            {
              question: "What can affect experiment reliability?",
              options: [
                "Selection bias",
                "Font size only",
                "Keyboard type",
                "Screen resolution only",
              ],
              answer: "Selection bias",
            },
            {
              question: "Why define success criteria?",
              options: [
                "To determine whether the experiment achieved its goal",
                "To create users",
                "To remove data",
                "To increase server memory",
              ],
              answer:
                "To determine whether the experiment achieved its goal",
            },
            {
              question: "What does good experiment design provide?",
              options: [
                "More reliable analysis",
                "More source code",
                "Fewer users",
                "Less data",
              ],
              answer: "More reliable analysis",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Metrics and Statistical Analysis",
      description:
        "Learn experiment metrics, conversion rates, statistical significance, confidence intervals, and practical result analysis.",
      lessons: [
        {
          title: "Experiment Metrics",
          content: `Experiment metrics are used to measure the effect of a product change.

Common metrics include conversion rate, revenue per user, retention rate, engagement rate, and average order value.

The primary metric should directly represent the main objective of the experiment. Secondary metrics can provide additional context.

Analysts should also monitor guardrail metrics to make sure an improvement in one area does not cause serious problems elsewhere.`,
          quiz: [
            {
              question: "What is a conversion rate?",
              options: [
                "Percentage of users completing an action",
                "Number of servers",
                "Database size",
                "Number of developers",
              ],
              answer: "Percentage of users completing an action",
            },
            {
              question: "Which is an experiment metric?",
              options: [
                "Retention rate",
                "Laptop model",
                "Keyboard type",
                "Screen size",
              ],
              answer: "Retention rate",
            },
            {
              question: "What should the primary metric represent?",
              options: [
                "Main experiment objective",
                "Server location",
                "Developer activity",
                "Database size",
              ],
              answer: "Main experiment objective",
            },
            {
              question: "What are guardrail metrics used for?",
              options: [
                "Monitoring unwanted negative effects",
                "Creating user accounts",
                "Writing code",
                "Designing logos",
              ],
              answer: "Monitoring unwanted negative effects",
            },
            {
              question: "Why use secondary metrics?",
              options: [
                "To provide additional context",
                "To replace all primary metrics",
                "To delete experiment data",
                "To avoid analysis",
              ],
              answer: "To provide additional context",
            },
          ],
        },

        {
          title: "Statistical Significance",
          content: `Statistical significance helps analysts evaluate whether an observed difference between groups is likely to be caused by the experiment rather than random variation.

A commonly used concept is the p-value. Analysts may compare the p-value with a predefined significance level.

However, statistical significance alone does not mean that a change is practically important. Product analysts should also consider the size of the effect, business impact, and user experience.`,
          quiz: [
            {
              question: "What does statistical significance help evaluate?",
              options: [
                "Whether an observed difference may be due to random variation",
                "Website design",
                "Database structure",
                "Server location",
              ],
              answer:
                "Whether an observed difference may be due to random variation",
            },
            {
              question: "What is commonly used to evaluate statistical significance?",
              options: [
                "p-value",
                "HTML",
                "CSS",
                "URL",
              ],
              answer: "p-value",
            },
            {
              question: "Does statistical significance always mean business importance?",
              options: [
                "No",
                "Yes",
                "Only for websites",
                "Only for mobile apps",
              ],
              answer: "No",
            },
            {
              question: "What else should analysts consider?",
              options: [
                "Effect size and business impact",
                "Only p-value",
                "Only sample names",
                "Only database size",
              ],
              answer: "Effect size and business impact",
            },
            {
              question: "Why is random variation important?",
              options: [
                "It can affect observed experiment results",
                "It changes HTML",
                "It removes users",
                "It creates databases",
              ],
              answer: "It can affect observed experiment results",
            },
          ],
        },

        {
          title: "Confidence Intervals",
          content: `A confidence interval provides a range of plausible values for an estimated effect.

For example, an experiment may estimate that conversion increased by 4%, with a confidence interval showing a range around that estimate.

Confidence intervals help analysts understand uncertainty rather than looking only at a single number.

When analyzing experiments, confidence intervals can provide useful information about the likely size and direction of an effect.`,
          quiz: [
            {
              question: "What does a confidence interval provide?",
              options: [
                "A range of plausible values",
                "A database",
                "A user account",
                "A source code file",
              ],
              answer: "A range of plausible values",
            },
            {
              question: "Why are confidence intervals useful?",
              options: [
                "They show uncertainty around an estimate",
                "They remove all uncertainty",
                "They create experiments",
                "They replace metrics",
              ],
              answer: "They show uncertainty around an estimate",
            },
            {
              question: "What can a confidence interval describe?",
              options: [
                "Likely range of an effect",
                "Computer memory",
                "Screen size",
                "Network speed",
              ],
              answer: "Likely range of an effect",
            },
            {
              question: "Should analysts look only at one estimate?",
              options: [
                "No",
                "Yes",
                "Only in small experiments",
                "Only in mobile apps",
              ],
              answer: "No",
            },
            {
              question: "Confidence intervals are related to what?",
              options: [
                "Statistical uncertainty",
                "CSS styling",
                "Database design",
                "UI colors",
              ],
              answer: "Statistical uncertainty",
            },
          ],
        },

        {
          title: "Analyzing Experiment Results",
          content: `Experiment analysis involves comparing the control and treatment groups using the predefined metrics.

The analyst should examine the difference between groups, statistical evidence, confidence intervals, sample size, and possible data quality problems.

Results should be interpreted in the context of the original hypothesis and business objective.

A good analysis does not simply say that a metric increased or decreased. It explains the size of the change, the uncertainty, and what the result means for the product.`,
          quiz: [
            {
              question: "What groups are compared in an A/B test?",
              options: [
                "Control and treatment",
                "Developers and designers",
                "Servers and databases",
                "Customers and employees",
              ],
              answer: "Control and treatment",
            },
            {
              question: "What should results be compared against?",
              options: [
                "Original hypothesis and objective",
                "Random opinions",
                "Source code",
                "Screen size",
              ],
              answer: "Original hypothesis and objective",
            },
            {
              question: "What should a good analysis explain?",
              options: [
                "Change size and uncertainty",
                "Only whether a number changed",
                "Only the UI",
                "Only the database",
              ],
              answer: "Change size and uncertainty",
            },
            {
              question: "Why check data quality?",
              options: [
                "To avoid incorrect conclusions",
                "To increase coding",
                "To remove users",
                "To design dashboards",
              ],
              answer: "To avoid incorrect conclusions",
            },
            {
              question: "What is important besides metric change?",
              options: [
                "Statistical evidence and business context",
                "Only colors",
                "Only code length",
                "Only server memory",
              ],
              answer: "Statistical evidence and business context",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: A/B Testing and Experiment Evaluation",
      description:
        "Understand A/B testing workflows, sample size, experiment duration, segmentation, and common experiment problems.",
      lessons: [
        {
          title: "A/B Testing Workflow",
          content: `A/B testing usually follows a structured workflow.

First, the team defines the problem and hypothesis. Next, the analyst identifies the target users, experiment groups, metrics, and duration.

After launching the experiment, data is collected and validated. The analyst then compares the groups and evaluates the statistical and practical impact.

Finally, the result is communicated to the product team and used to decide whether to launch, modify, or stop the change.`,
          quiz: [
            {
              question: "What is usually defined first?",
              options: [
                "Problem and hypothesis",
                "Dashboard colors",
                "Database size",
                "Server location",
              ],
              answer: "Problem and hypothesis",
            },
            {
              question: "What happens after launching the experiment?",
              options: [
                "Data is collected",
                "All users are removed",
                "The database is deleted",
                "The product is always stopped",
              ],
              answer: "Data is collected",
            },
            {
              question: "What happens after analysis?",
              options: [
                "Results are communicated",
                "All data is deleted",
                "Users are removed",
                "Metrics are ignored",
              ],
              answer: "Results are communicated",
            },
            {
              question: "What can an experiment result support?",
              options: [
                "Product decision",
                "Computer repair",
                "Network installation",
                "Hardware manufacturing",
              ],
              answer: "Product decision",
            },
            {
              question: "Why validate experiment data?",
              options: [
                "To ensure the analysis is reliable",
                "To increase source code",
                "To change the hypothesis",
                "To remove metrics",
              ],
              answer: "To ensure the analysis is reliable",
            },
          ],
        },

        {
          title: "Sample Size and Experiment Duration",
          content: `The number of users in an experiment affects the reliability of its results.

Small samples may produce unstable estimates and make it difficult to detect meaningful differences. Larger samples can provide more precise estimates, although collecting more data does not automatically make an experiment well designed.

Experiment duration should also be considered carefully. Running an experiment for too short a period may miss normal user behavior patterns or weekly effects.

Product analysts consider expected effect size, baseline conversion, statistical requirements, and business constraints when planning experiments.`,
          quiz: [
            {
              question: "Why is sample size important?",
              options: [
                "It affects result reliability",
                "It changes website colors",
                "It removes users",
                "It replaces metrics",
              ],
              answer: "It affects result reliability",
            },
            {
              question: "What can a very small sample cause?",
              options: [
                "Unstable estimates",
                "Better certainty always",
                "No data",
                "Automatic success",
              ],
              answer: "Unstable estimates",
            },
            {
              question: "Why can experiment duration matter?",
              options: [
                "User behavior can vary over time",
                "It changes HTML",
                "It changes databases",
                "It removes the control group",
              ],
              answer: "User behavior can vary over time",
            },
            {
              question: "Does a larger sample automatically guarantee a good experiment?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only for websites",
              ],
              answer: "No",
            },
            {
              question: "What can influence sample planning?",
              options: [
                "Expected effect and baseline conversion",
                "Logo design",
                "Screen brightness",
                "Keyboard type",
              ],
              answer: "Expected effect and baseline conversion",
            },
          ],
        },

        {
          title: "Experiment Segmentation",
          content: `Experiment results can be analyzed across different user segments.

Examples include new users versus existing users, mobile versus desktop users, or users from different regions.

Segmentation can reveal whether a product change affects some groups differently.

However, analysts should avoid searching through many segments only to find a significant result by chance. Important segments should ideally be defined before the experiment or analyzed carefully with appropriate statistical considerations.`,
          quiz: [
            {
              question: "What is experiment segmentation?",
              options: [
                "Analyzing results for different user groups",
                "Deleting users",
                "Changing source code",
                "Creating databases",
              ],
              answer: "Analyzing results for different user groups",
            },
            {
              question: "Which is a possible segment?",
              options: [
                "New users",
                "Database tables",
                "Developers only",
                "Servers",
              ],
              answer: "New users",
            },
            {
              question: "Why analyze segments?",
              options: [
                "Different groups may respond differently",
                "To remove the control group",
                "To avoid metrics",
                "To change the hypothesis",
              ],
              answer: "Different groups may respond differently",
            },
            {
              question: "What is a risk of checking many segments?",
              options: [
                "Finding results by chance",
                "Increasing database size",
                "Removing users",
                "Changing HTML",
              ],
              answer: "Finding results by chance",
            },
            {
              question: "How should important segments be handled?",
              options: [
                "Plan them carefully",
                "Choose them randomly after results",
                "Ignore them",
                "Delete them",
              ],
              answer: "Plan them carefully",
            },
          ],
        },

        {
          title: "Common Experiment Problems",
          content: `Experiments can produce misleading results when there are problems with data collection or experiment setup.

Common issues include incorrect group assignment, tracking errors, insufficient sample size, unexpected external events, and users being exposed to multiple conflicting experiments.

Analysts should validate experiment data before drawing conclusions.

A useful experiment analysis includes checks for data quality, exposure, metric calculation, and consistency between the experiment design and collected data.`,
          quiz: [
            {
              question: "What can cause misleading experiment results?",
              options: [
                "Tracking errors",
                "Good documentation",
                "Clear metrics",
                "Correct randomization",
              ],
              answer: "Tracking errors",
            },
            {
              question: "Why check group assignment?",
              options: [
                "To ensure users are in the correct groups",
                "To change the product",
                "To delete data",
                "To remove metrics",
              ],
              answer: "To ensure users are in the correct groups",
            },
            {
              question: "What should analysts validate before conclusions?",
              options: [
                "Experiment data",
                "Only colors",
                "Only source code",
                "Only user names",
              ],
              answer: "Experiment data",
            },
            {
              question: "What is an external event?",
              options: [
                "An outside factor that may affect results",
                "A database table",
                "A CSS rule",
                "A source code function",
              ],
              answer: "An outside factor that may affect results",
            },
            {
              question: "Why check metric calculations?",
              options: [
                "To avoid incorrect conclusions",
                "To increase users",
                "To change the experiment",
                "To remove the treatment group",
              ],
              answer: "To avoid incorrect conclusions",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Product Decisions and Experiment Reporting",
      description:
        "Learn how to interpret experiment outcomes, communicate findings, and turn experiment data into product decisions.",
      lessons: [
        {
          title: "Interpreting Experiment Outcomes",
          content: `An experiment can produce different outcomes.

The treatment may show a meaningful improvement, no meaningful difference, or a negative effect.

Analysts should consider statistical evidence, effect size, confidence intervals, business impact, and potential risks before recommending an action.

A result should not automatically be treated as a success simply because a metric increased. The analyst must understand whether the increase is reliable and valuable for the product.`,
          quiz: [
            {
              question: "What are possible experiment outcomes?",
              options: [
                "Positive, neutral, or negative effects",
                "Only positive effects",
                "Only negative effects",
                "No measurable outcomes",
              ],
              answer: "Positive, neutral, or negative effects",
            },
            {
              question: "Should an increased metric automatically be called a success?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only for mobile apps",
              ],
              answer: "No",
            },
            {
              question: "What should analysts consider?",
              options: [
                "Effect size and business impact",
                "Only metric direction",
                "Only colors",
                "Only source code",
              ],
              answer: "Effect size and business impact",
            },
            {
              question: "Why consider risks?",
              options: [
                "A change may improve one metric while harming another",
                "Risks remove all users",
                "Risks change HTML",
                "Risks replace the database",
              ],
              answer:
                "A change may improve one metric while harming another",
            },
            {
              question: "What is the purpose of interpreting results?",
              options: [
                "Support product decisions",
                "Write source code",
                "Create servers",
                "Design logos",
              ],
              answer: "Support product decisions",
            },
          ],
        },

        {
          title: "Experiment Reporting",
          content: `Experiment results should be communicated clearly to product managers and other stakeholders.

A useful experiment report includes the hypothesis, experiment setup, sample size, primary metric, treatment and control results, estimated effect, statistical evidence, limitations, and recommendation.

Charts and simple tables can make the findings easier to understand.

The report should focus on what the data means for the product rather than presenting unnecessary statistical details.`,
          quiz: [
            {
              question: "What should an experiment report include?",
              options: [
                "Hypothesis and results",
                "Only source code",
                "Only screenshots",
                "Only database details",
              ],
              answer: "Hypothesis and results",
            },
            {
              question: "Who may use experiment reports?",
              options: [
                "Product stakeholders",
                "Only database servers",
                "Only browsers",
                "Only hardware engineers",
              ],
              answer: "Product stakeholders",
            },
            {
              question: "Why use charts?",
              options: [
                "To communicate results clearly",
                "To hide data",
                "To delete metrics",
                "To replace experiments",
              ],
              answer: "To communicate results clearly",
            },
            {
              question: "What should a report explain?",
              options: [
                "What the results mean for the product",
                "Only statistical formulas",
                "Only code",
                "Only database structure",
              ],
              answer: "What the results mean for the product",
            },
            {
              question: "What is an important report section?",
              options: [
                "Limitations",
                "Keyboard settings",
                "Screen brightness",
                "Computer brand",
              ],
              answer: "Limitations",
            },
          ],
        },

        {
          title: "Experiment-Based Product Decisions",
          content: `Product teams use experiment results to decide what to do next.

If a change performs well and meets the required criteria, the team may consider expanding or launching it. If results are unclear, the team may collect more evidence or redesign the experiment.

If the change performs poorly, the team may stop it and investigate why.

Product analysts support these decisions by explaining the evidence, uncertainty, business impact, and limitations of the experiment.`,
          quiz: [
            {
              question: "What can a successful experiment support?",
              options: [
                "Product rollout decision",
                "Database deletion",
                "Server shutdown",
                "Removing analytics",
              ],
              answer: "Product rollout decision",
            },
            {
              question: "What may happen when results are unclear?",
              options: [
                "Collect more evidence",
                "Always launch immediately",
                "Delete the data",
                "Ignore the experiment",
              ],
              answer: "Collect more evidence",
            },
            {
              question: "What can happen after poor results?",
              options: [
                "Stop or redesign the change",
                "Always launch",
                "Remove all users",
                "Delete analytics",
              ],
              answer: "Stop or redesign the change",
            },
            {
              question: "What does a product analyst provide?",
              options: [
                "Evidence and interpretation",
                "Only source code",
                "Only designs",
                "Only server configuration",
              ],
              answer: "Evidence and interpretation",
            },
            {
              question: "What should product decisions consider?",
              options: [
                "Evidence, uncertainty, and business impact",
                "Only opinions",
                "Only metric increases",
                "Only design",
              ],
              answer: "Evidence, uncertainty, and business impact",
            },
          ],
        },

        {
          title: "Mini Project: A/B Test Analysis",
          content: `In this mini project, analyze an A/B test for a product signup page.

Suppose the existing signup page is the control version and a simplified signup page is the treatment version.

Analyze the number of users, conversions, conversion rates, difference between groups, and experiment evidence.

Create a simple report that explains whether the new signup experience appears useful, what limitations exist, and what the product team should consider next.

This project combines experiment design, metric analysis, statistical reasoning, and product decision-making.`,
          quiz: [
            {
              question: "What is the control in this project?",
              options: [
                "Existing signup page",
                "Simplified signup page",
                "Database",
                "Analytics dashboard",
              ],
              answer: "Existing signup page",
            },
            {
              question: "What is the treatment?",
              options: [
                "Simplified signup page",
                "Existing signup page",
                "Database",
                "Server",
              ],
              answer: "Simplified signup page",
            },
            {
              question: "What should be compared?",
              options: [
                "Conversions and conversion rates",
                "Screen sizes",
                "Computer brands",
                "Source code length",
              ],
              answer: "Conversions and conversion rates",
            },
            {
              question: "What should the final report include?",
              options: [
                "Results and limitations",
                "Only code",
                "Only screenshots",
                "Only database tables",
              ],
              answer: "Results and limitations",
            },
            {
              question: "What skills does this project combine?",
              options: [
                "Experiment analysis and product decision-making",
                "Only HTML",
                "Only CSS",
                "Only networking",
              ],
              answer: "Experiment analysis and product decision-making",
            },
          ],
        },
      ],
    },
  ],
};

export default experimentAnalysisCourse;
const productMetricsCourse = {
  title: "Product Metrics",

  description:
    "Learn product metrics, KPIs, funnels, activation, retention, engagement, conversion, cohorts, and data-driven product analysis.",

  weeks: [
    {
      title: "Week 1: Product Metrics Fundamentals",
      description:
        "Understand product metrics, KPIs, users, events, and how product teams measure success.",

      lessons: [
        {
          title: "Introduction to Product Metrics",
          content: `
Product metrics are measurements used to understand how users interact with a product and how well the product is performing.

Product analysts use metrics to answer questions such as how many users are active, how often users return, where users leave a process, and which features are being used.

Good metrics should connect user behavior with a meaningful product objective.
          `,
          quiz: [
            {
              question: "What are product metrics used for?",
              options: [
                "Measuring product performance and user behavior",
                "Designing hardware",
                "Writing operating systems",
                "Managing network cables",
              ],
              answer: "Measuring product performance and user behavior",
            },
            {
              question: "Who commonly uses product metrics?",
              options: [
                "Product teams and analysts",
                "Only hardware engineers",
                "Only network administrators",
                "Only graphic designers",
              ],
              answer: "Product teams and analysts",
            },
            {
              question: "What should a good product metric connect?",
              options: [
                "User behavior with a meaningful product objective",
                "Screen size with storage",
                "CPU speed with keyboard size",
                "File size with monitor resolution",
              ],
              answer: "User behavior with a meaningful product objective",
            },
            {
              question: "Which is a product metric?",
              options: [
                "Daily active users",
                "Monitor resolution",
                "CPU temperature",
                "Cable length",
              ],
              answer: "Daily active users",
            },
            {
              question: "Product metrics help teams make what?",
              options: [
                "Data-informed decisions",
                "Hardware repairs",
                "Network cables",
                "Operating systems",
              ],
              answer: "Data-informed decisions",
            },
          ],
        },

        {
          title: "KPIs and North Star Metrics",
          content: `
A Key Performance Indicator, or KPI, is a metric that helps measure progress toward an important business or product goal.

A North Star Metric represents an important measure of the value users receive from a product. Different products can have different North Star Metrics.

For example, a learning application might monitor completed learning sessions, while a marketplace might monitor successful transactions.
          `,
          quiz: [
            {
              question: "What does KPI stand for?",
              options: [
                "Key Performance Indicator",
                "Key Product Interface",
                "Known Performance Input",
                "Key Program Integration",
              ],
              answer: "Key Performance Indicator",
            },
            {
              question: "What does a KPI measure?",
              options: [
                "Progress toward an important goal",
                "Only application size",
                "Only server temperature",
                "Only screen resolution",
              ],
              answer: "Progress toward an important goal",
            },
            {
              question: "What is a North Star Metric?",
              options: [
                "A key measure of product value",
                "A database table",
                "A programming language",
                "A design component",
              ],
              answer: "A key measure of product value",
            },
            {
              question: "Can different products have different North Star Metrics?",
              options: ["Yes", "No", "Only websites", "Only mobile apps"],
              answer: "Yes",
            },
            {
              question: "Which could be a metric for a learning app?",
              options: [
                "Completed learning sessions",
                "Monitor size",
                "CPU speed",
                "File extension",
              ],
              answer: "Completed learning sessions",
            },
          ],
        },

        {
          title: "Users, Events, and Properties",
          content: `
Product analytics commonly records user events such as sign-up, login, search, purchase, lesson completion, or feature usage.

An event represents an action that happened. Properties provide additional information about that event, such as device type, product category, location at a broad level, or subscription type.

Well-designed event tracking makes it possible to calculate meaningful product metrics.
          `,
          quiz: [
            {
              question: "What is an event in product analytics?",
              options: [
                "A user action",
                "A database server",
                "A programming language",
                "A design template",
              ],
              answer: "A user action",
            },
            {
              question: "Which is an example of an event?",
              options: [
                "User completes a purchase",
                "Database exists",
                "Server has memory",
                "Website has a logo",
              ],
              answer: "User completes a purchase",
            },
            {
              question: "What do event properties provide?",
              options: [
                "Additional information about an event",
                "Only passwords",
                "Only source code",
                "Only images",
              ],
              answer: "Additional information about an event",
            },
            {
              question: "Why is event tracking important?",
              options: [
                "It helps measure user behavior",
                "It increases screen size",
                "It changes application colors",
                "It creates hardware",
              ],
              answer: "It helps measure user behavior",
            },
            {
              question: "Which could be an event property?",
              options: [
                "Subscription type",
                "Keyboard color",
                "Monitor size",
                "Desk height",
              ],
              answer: "Subscription type",
            },
          ],
        },

        {
          title: "Metric Types and Dimensions",
          content: `
Product analysts work with different types of metrics. Counts measure the number of events or users, while rates and percentages describe relationships between values.

Dimensions allow analysts to break metrics into groups. For example, conversion can be analyzed by device type, country, acquisition source, or subscription plan.

Breaking down metrics often reveals patterns that are hidden in overall numbers.
          `,
          quiz: [
            {
              question: "What does a count measure?",
              options: [
                "The number of occurrences",
                "Only percentages",
                "Only averages",
                "Only ratios",
              ],
              answer: "The number of occurrences",
            },
            {
              question: "What can dimensions be used for?",
              options: [
                "Breaking metrics into groups",
                "Deleting metrics",
                "Creating passwords",
                "Designing hardware",
              ],
              answer: "Breaking metrics into groups",
            },
            {
              question: "Which is a possible dimension?",
              options: [
                "Device type",
                "CPU temperature",
                "Keyboard color",
                "Monitor size",
              ],
              answer: "Device type",
            },
            {
              question: "Why analyze metrics by dimension?",
              options: [
                "To identify patterns",
                "To increase storage",
                "To change application code",
                "To remove users",
              ],
              answer: "To identify patterns",
            },
            {
              question: "Which metric type can describe the relationship between two values?",
              options: [
                "Rate",
                "File",
                "Image",
                "String",
              ],
              answer: "Rate",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Acquisition, Activation, and Conversion",
      description:
        "Learn how to analyze user acquisition, activation, conversion, and product funnels.",

      lessons: [
        {
          title: "Acquisition Metrics",
          content: `
Acquisition metrics measure how users discover and enter a product.

Common acquisition measurements include new users, sign-ups, acquisition channels, and cost-related metrics.

Analysts can compare channels to understand which sources bring users into the product and how those users behave after joining.
          `,
          quiz: [
            {
              question: "What do acquisition metrics measure?",
              options: [
                "How users enter a product",
                "How servers are configured",
                "How hardware is built",
                "How databases are deleted",
              ],
              answer: "How users enter a product",
            },
            {
              question: "Which is an acquisition metric?",
              options: [
                "New users",
                "CPU temperature",
                "Memory voltage",
                "Screen resolution",
              ],
              answer: "New users",
            },
            {
              question: "What can acquisition channels tell analysts?",
              options: [
                "Where users come from",
                "Which keyboard is used",
                "Which monitor is connected",
                "How much RAM exists",
              ],
              answer: "Where users come from",
            },
            {
              question: "Why compare acquisition channels?",
              options: [
                "To understand channel performance",
                "To change product colors",
                "To increase storage",
                "To remove users",
              ],
              answer: "To understand channel performance",
            },
            {
              question: "What is a new user?",
              options: [
                "A user who has recently entered the product",
                "A database record",
                "A server process",
                "A product feature",
              ],
              answer: "A user who has recently entered the product",
            },
          ],
        },

        {
          title: "Activation Metrics",
          content: `
Activation measures whether new users reach an important early product experience.

An activation event should represent meaningful value rather than simply opening an application. For example, activation for a learning platform might be completing the first lesson.

Analysts study activation rates to understand how effectively a product turns new users into users who experience its value.
          `,
          quiz: [
            {
              question: "What does activation measure?",
              options: [
                "Whether users reach an important early experience",
                "Server speed",
                "Database size",
                "Screen resolution",
              ],
              answer: "Whether users reach an important early experience",
            },
            {
              question: "What should an activation event represent?",
              options: [
                "Meaningful product value",
                "Only application opening",
                "A server restart",
                "A database backup",
              ],
              answer: "Meaningful product value",
            },
            {
              question: "Which could be an activation event for a learning app?",
              options: [
                "Completing the first lesson",
                "Opening a monitor",
                "Changing a password",
                "Installing a printer",
              ],
              answer: "Completing the first lesson",
            },
            {
              question: "What is activation rate?",
              options: [
                "The proportion of users who become activated",
                "The number of servers",
                "The number of features",
                "The size of a database",
              ],
              answer: "The proportion of users who become activated",
            },
            {
              question: "Why study activation?",
              options: [
                "To understand early user value",
                "To increase hardware speed",
                "To reduce storage",
                "To change the UI automatically",
              ],
              answer: "To understand early user value",
            },
          ],
        },

        {
          title: "Conversion Metrics",
          content: `
Conversion measures the percentage of users who complete a desired action.

Examples include signing up, starting a subscription, purchasing a product, or completing an application.

Conversion rate is commonly calculated as the number of users who complete the desired action divided by the relevant total population.
          `,
          quiz: [
            {
              question: "What does conversion measure?",
              options: [
                "Users completing a desired action",
                "Server uptime only",
                "Database size",
                "Application size",
              ],
              answer: "Users completing a desired action",
            },
            {
              question: "Which is a conversion event?",
              options: [
                "Starting a subscription",
                "Opening a monitor",
                "Restarting a computer",
                "Changing screen brightness",
              ],
              answer: "Starting a subscription",
            },
            {
              question: "How is conversion rate commonly calculated?",
              options: [
                "Desired actions divided by relevant users",
                "Users multiplied by servers",
                "Features divided by files",
                "Sessions divided by screens",
              ],
              answer: "Desired actions divided by relevant users",
            },
            {
              question: "Why monitor conversion?",
              options: [
                "To understand how effectively users complete a goal",
                "To increase CPU speed",
                "To change hardware",
                "To remove features",
              ],
              answer: "To understand how effectively users complete a goal",
            },
            {
              question: "Which can have a conversion rate?",
              options: [
                "Sign-up process",
                "Monitor resolution",
                "CPU model",
                "Keyboard size",
              ],
              answer: "Sign-up process",
            },
          ],
        },

        {
          title: "Funnel Analysis",
          content: `
A funnel represents a sequence of steps users take toward a goal.

For example, an e-commerce funnel may contain product view, add to cart, checkout, and purchase.

Funnel analysis shows how many users continue at each step and where users drop out. This helps product teams identify areas that may need improvement.
          `,
          quiz: [
            {
              question: "What does a funnel represent?",
              options: [
                "A sequence of user steps toward a goal",
                "A database schema",
                "A server architecture",
                "A network cable",
              ],
              answer: "A sequence of user steps toward a goal",
            },
            {
              question: "What is a funnel drop-off?",
              options: [
                "Users leaving before completing the next step",
                "A server shutting down",
                "A database growing",
                "A feature being added",
              ],
              answer: "Users leaving before completing the next step",
            },
            {
              question: "What can funnel analysis identify?",
              options: [
                "Where users leave a process",
                "CPU temperature",
                "Memory size",
                "Network cable length",
              ],
              answer: "Where users leave a process",
            },
            {
              question: "Which is a funnel example?",
              options: [
                "View product → Cart → Checkout → Purchase",
                "Login → CPU → RAM",
                "Server → Cable → Monitor",
                "Database → Keyboard → Printer",
              ],
              answer: "View product → Cart → Checkout → Purchase",
            },
            {
              question: "Why is funnel analysis useful?",
              options: [
                "It helps identify conversion problems",
                "It increases storage",
                "It changes hardware",
                "It creates user accounts",
              ],
              answer: "It helps identify conversion problems",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Engagement, Retention, and Cohorts",
      description:
        "Learn how to measure ongoing product usage and understand user retention.",

      lessons: [
        {
          title: "Engagement Metrics",
          content: `
Engagement metrics measure how actively users interact with a product.

Examples include sessions, actions per user, feature usage, time spent, and frequency of important actions.

The most useful engagement metric depends on the product. Analysts should focus on meaningful actions rather than simply maximizing activity.
          `,
          quiz: [
            {
              question: "What do engagement metrics measure?",
              options: [
                "How actively users interact with a product",
                "Server temperature",
                "Database size",
                "Screen resolution",
              ],
              answer: "How actively users interact with a product",
            },
            {
              question: "Which is an engagement metric?",
              options: [
                "Feature usage",
                "CPU temperature",
                "Memory voltage",
                "Cable length",
              ],
              answer: "Feature usage",
            },
            {
              question: "Should teams maximize every type of activity?",
              options: [
                "No, activity should be meaningful",
                "Yes, always",
                "Only for websites",
                "Only for games",
              ],
              answer: "No, activity should be meaningful",
            },
            {
              question: "What can sessions measure?",
              options: [
                "User interaction periods",
                "Database storage",
                "CPU architecture",
                "Network cable speed",
              ],
              answer: "User interaction periods",
            },
            {
              question: "Why choose meaningful engagement metrics?",
              options: [
                "To understand useful product usage",
                "To increase random activity",
                "To reduce data quality",
                "To remove users",
              ],
              answer: "To understand useful product usage",
            },
          ],
        },

        {
          title: "Retention Metrics",
          content: `
Retention measures whether users continue to return to a product after an initial period.

A retention rate can be calculated for different time periods, such as day 1, day 7, or day 30.

Retention helps teams understand whether a product continues to provide value over time.
          `,
          quiz: [
            {
              question: "What does retention measure?",
              options: [
                "Whether users continue returning",
                "Server capacity",
                "Database size",
                "Screen resolution",
              ],
              answer: "Whether users continue returning",
            },
            {
              question: "Which is a retention period?",
              options: ["Day 30", "CPU 30", "Screen 30", "File 30"],
              answer: "Day 30",
            },
            {
              question: "Why is retention important?",
              options: [
                "It helps understand continued product value",
                "It increases CPU speed",
                "It changes application colors",
                "It removes inactive features",
              ],
              answer: "It helps understand continued product value",
            },
            {
              question: "What does a retention rate represent?",
              options: [
                "The proportion of users who return",
                "The number of servers",
                "The number of features",
                "The amount of storage",
              ],
              answer: "The proportion of users who return",
            },
            {
              question: "Can retention be measured over different time periods?",
              options: ["Yes", "No", "Only daily", "Only monthly"],
              answer: "Yes",
            },
          ],
        },

        {
          title: "Cohort Analysis",
          content: `
A cohort is a group of users who share a common characteristic or starting point.

In product analytics, users are often grouped by sign-up date, acquisition source, or another meaningful attribute.

Cohort analysis allows analysts to compare how different groups behave over time, especially for retention and engagement.
          `,
          quiz: [
            {
              question: "What is a cohort?",
              options: [
                "A group of users with a shared characteristic",
                "A database server",
                "A product feature",
                "A network device",
              ],
              answer: "A group of users with a shared characteristic",
            },
            {
              question: "How can users be grouped into cohorts?",
              options: [
                "By sign-up date",
                "By monitor size",
                "By keyboard color",
                "By CPU brand only",
              ],
              answer: "By sign-up date",
            },
            {
              question: "What can cohort analysis compare?",
              options: [
                "User behavior over time",
                "Screen resolution",
                "Hardware voltage",
                "File sizes",
              ],
              answer: "User behavior over time",
            },
            {
              question: "Cohort analysis is useful for studying what?",
              options: [
                "Retention and engagement",
                "Keyboard design",
                "CPU architecture",
                "Monitor manufacturing",
              ],
              answer: "Retention and engagement",
            },
            {
              question: "Why compare different cohorts?",
              options: [
                "To identify differences in user behavior",
                "To change the database",
                "To increase storage",
                "To remove all users",
              ],
              answer: "To identify differences in user behavior",
            },
          ],
        },

        {
          title: "DAU, WAU, and MAU",
          content: `
DAU, WAU, and MAU are commonly used measures of active users.

DAU means Daily Active Users, WAU means Weekly Active Users, and MAU means Monthly Active Users.

These metrics help teams understand the size and frequency of product usage. They should be defined consistently so that comparisons remain meaningful.
          `,
          quiz: [
            {
              question: "What does DAU stand for?",
              options: [
                "Daily Active Users",
                "Daily Application Usage",
                "Data Analysis Users",
                "Daily Account Updates",
              ],
              answer: "Daily Active Users",
            },
            {
              question: "What does WAU measure?",
              options: [
                "Weekly active users",
                "Wireless active users",
                "Website account users",
                "Weekly application updates",
              ],
              answer: "Weekly active users",
            },
            {
              question: "What does MAU stand for?",
              options: [
                "Monthly Active Users",
                "Monthly Account Usage",
                "Main Application Users",
                "Metric Analysis Users",
              ],
              answer: "Monthly Active Users",
            },
            {
              question: "Why define active users consistently?",
              options: [
                "To make comparisons meaningful",
                "To increase storage",
                "To change product design",
                "To remove users",
              ],
              answer: "To make comparisons meaningful",
            },
            {
              question: "What do DAU, WAU, and MAU measure?",
              options: [
                "Active user levels over different periods",
                "Server capacity",
                "Database size",
                "Feature count",
              ],
              answer: "Active user levels over different periods",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Product Analysis and Decision Making",
      description:
        "Use product metrics to analyze problems, experiments, and product performance.",

      lessons: [
        {
          title: "Feature Usage Metrics",
          content: `
Feature usage metrics measure how users interact with individual product features.

Analysts can track feature adoption, frequency of use, completion rates, and repeat usage.

These metrics can help determine whether a feature is being discovered and whether users find it valuable.
          `,
          quiz: [
            {
              question: "What do feature usage metrics measure?",
              options: [
                "How users interact with features",
                "Server temperature",
                "Database size",
                "CPU speed",
              ],
              answer: "How users interact with features",
            },
            {
              question: "What is feature adoption?",
              options: [
                "The proportion of relevant users using a feature",
                "The number of servers",
                "The size of a database",
                "The number of developers",
              ],
              answer: "The proportion of relevant users using a feature",
            },
            {
              question: "What can feature usage reveal?",
              options: [
                "Whether users are using a feature",
                "Monitor resolution",
                "CPU architecture",
                "Network cable length",
              ],
              answer: "Whether users are using a feature",
            },
            {
              question: "Which is a feature metric?",
              options: [
                "Feature adoption rate",
                "CPU voltage",
                "Screen brightness",
                "Keyboard size",
              ],
              answer: "Feature adoption rate",
            },
            {
              question: "Why analyze feature usage?",
              options: [
                "To understand feature value and adoption",
                "To increase storage",
                "To change hardware",
                "To remove analytics",
              ],
              answer: "To understand feature value and adoption",
            },
          ],
        },

        {
          title: "A/B Testing Metrics",
          content: `
A/B testing compares different versions of a product experience using defined metrics.

For example, one group may see version A while another group sees version B. Analysts compare outcomes such as conversion, activation, or retention.

A test should have a clearly defined primary metric and should be interpreted using appropriate statistical analysis.
          `,
          quiz: [
            {
              question: "What does A/B testing compare?",
              options: [
                "Different product versions",
                "Different databases",
                "Different keyboards",
                "Different servers only",
              ],
              answer: "Different product versions",
            },
            {
              question: "What should an A/B test define?",
              options: [
                "A primary metric",
                "A new programming language",
                "A hardware component",
                "A database server",
              ],
              answer: "A primary metric",
            },
            {
              question: "Which could be an A/B test metric?",
              options: [
                "Conversion rate",
                "Monitor size",
                "CPU temperature",
                "Keyboard color",
              ],
              answer: "Conversion rate",
            },
            {
              question: "Why use a control group?",
              options: [
                "To provide a comparison",
                "To increase storage",
                "To remove users",
                "To change the database",
              ],
              answer: "To provide a comparison",
            },
            {
              question: "How should experiment results be interpreted?",
              options: [
                "Using appropriate statistical analysis",
                "By guessing",
                "By looking only at one user",
                "By ignoring the metric",
              ],
              answer: "Using appropriate statistical analysis",
            },
          ],
        },

        {
          title: "Metric Diagnosis and Product Decisions",
          content: `
Product analysts often investigate why a metric changed.

A metric drop should not automatically be treated as a product failure. Analysts should examine segments, funnels, cohorts, recent releases, tracking changes, and external factors.

The goal is to identify the most likely explanation using evidence and then provide useful information for product decisions.
          `,
          quiz: [
            {
              question: "What should an analyst do when a metric changes unexpectedly?",
              options: [
                "Investigate possible causes",
                "Immediately delete the feature",
                "Ignore the change",
                "Change all metrics",
              ],
              answer: "Investigate possible causes",
            },
            {
              question: "What can help diagnose a metric change?",
              options: [
                "Segments and cohorts",
                "Monitor color",
                "Keyboard size",
                "CPU brand",
              ],
              answer: "Segments and cohorts",
            },
            {
              question: "Why check recent product releases?",
              options: [
                "They may have affected user behavior",
                "They increase storage",
                "They change hardware",
                "They remove databases",
              ],
              answer: "They may have affected user behavior",
            },
            {
              question: "Should a metric drop automatically be considered a product failure?",
              options: ["No", "Yes", "Always", "Only for mobile apps"],
              answer: "No",
            },
            {
              question: "What is the goal of metric diagnosis?",
              options: [
                "Find evidence-based explanations",
                "Change all product features",
                "Remove users",
                "Increase database size",
              ],
              answer: "Find evidence-based explanations",
            },
          ],
        },

        {
          title: "Mini Project: Product Metrics Dashboard",
          content: `
In this mini project, design a product metrics dashboard for a digital product.

Track key metrics such as active users, activation rate, conversion rate, retention, feature adoption, and funnel performance.

Break the metrics down by useful dimensions and cohorts. Identify important changes and write short explanations supported by the available data.

The project combines product metrics, funnel analysis, retention, cohort analysis, and data-driven product decision making.
          `,
          quiz: [
            {
              question: "What is the main purpose of the dashboard?",
              options: [
                "Monitor important product metrics",
                "Manage computer hardware",
                "Configure network cables",
                "Design a database only",
              ],
              answer: "Monitor important product metrics",
            },
            {
              question: "Which metric can be included in the dashboard?",
              options: [
                "Retention rate",
                "CPU temperature",
                "Keyboard size",
                "Monitor resolution",
              ],
              answer: "Retention rate",
            },
            {
              question: "What can funnel analysis show?",
              options: [
                "Where users drop out",
                "Server temperature",
                "Database size",
                "CPU speed",
              ],
              answer: "Where users drop out",
            },
            {
              question: "Why use cohorts in the dashboard?",
              options: [
                "To compare user behavior over time",
                "To increase storage",
                "To change the UI",
                "To remove users",
              ],
              answer: "To compare user behavior over time",
            },
            {
              question: "What is the final goal of product metrics analysis?",
              options: [
                "Support better product decisions",
                "Increase hardware speed",
                "Create network cables",
                "Replace the database",
              ],
              answer: "Support better product decisions",
            },
          ],
        },
      ],
    },
  ],
};

export default productMetricsCourse;
const statisticsCourse = {
  title: "Statistics",
  description:
    "Learn statistics fundamentals, probability, distributions, sampling, hypothesis testing, correlation, regression, and practical analysis for product decisions.",

  weeks: [
    {
      title: "Week 1: Statistics Fundamentals",
      description:
        "Learn the basic statistical concepts used by product analysts to understand and summarize data.",
      lessons: [
        {
          title: "Introduction to Statistics",
          content: `Statistics is the process of collecting, organizing, analyzing, and interpreting data.

Product analysts use statistics to understand user behavior, product performance, business metrics, and experiment results.

Statistics helps answer questions such as how users behave, how metrics change, and whether a difference between groups may be meaningful.

The two major areas are descriptive statistics and inferential statistics. Descriptive statistics summarize existing data, while inferential statistics help make conclusions about a larger population from a sample.`,
          quiz: [
            {
              question: "What is statistics mainly used for?",
              options: [
                "Analyzing and interpreting data",
                "Designing websites",
                "Writing HTML",
                "Managing servers",
              ],
              answer: "Analyzing and interpreting data",
            },
            {
              question: "Which type summarizes existing data?",
              options: [
                "Descriptive statistics",
                "Inferential statistics",
                "Network statistics",
                "Database statistics",
              ],
              answer: "Descriptive statistics",
            },
            {
              question: "What does inferential statistics help with?",
              options: [
                "Making conclusions from samples",
                "Designing interfaces",
                "Writing code",
                "Creating databases",
              ],
              answer: "Making conclusions from samples",
            },
            {
              question: "Why do product analysts use statistics?",
              options: [
                "To understand product and user data",
                "To replace product managers",
                "To create hardware",
                "To design logos",
              ],
              answer: "To understand product and user data",
            },
            {
              question: "Which is a statistical activity?",
              options: [
                "Analyzing user behavior",
                "Changing a keyboard",
                "Installing a monitor",
                "Designing a cable",
              ],
              answer: "Analyzing user behavior",
            },
          ],
        },

        {
          title: "Population and Sample",
          content: `A population is the complete group that an analyst wants to understand. A sample is a smaller group selected from that population.

For example, if a product has one million users, all one million users represent the population. An analyst may study a sample of users to understand overall behavior.

Sampling saves time and resources, but the sample should represent the population reasonably well.

Poor sampling can introduce bias and lead to conclusions that do not represent the larger population.`,
          quiz: [
            {
              question: "What is a population?",
              options: [
                "The complete group being studied",
                "A small selected group",
                "A database table",
                "A product feature",
              ],
              answer: "The complete group being studied",
            },
            {
              question: "What is a sample?",
              options: [
                "A smaller group selected from a population",
                "The complete population",
                "A product metric",
                "A database",
              ],
              answer: "A smaller group selected from a population",
            },
            {
              question: "Why use samples?",
              options: [
                "They can reduce time and resources",
                "They always remove bias",
                "They replace all data",
                "They increase database size",
              ],
              answer: "They can reduce time and resources",
            },
            {
              question: "What can poor sampling cause?",
              options: [
                "Bias",
                "Better accuracy always",
                "More users",
                "Faster servers",
              ],
              answer: "Bias",
            },
            {
              question: "A sample should ideally be what?",
              options: [
                "Reasonably representative of the population",
                "Completely random without purpose",
                "The smallest possible group",
                "Only existing customers",
              ],
              answer: "Reasonably representative of the population",
            },
          ],
        },

        {
          title: "Mean, Median, and Mode",
          content: `Mean, median, and mode are common measures of central tendency.

The mean is calculated by adding all values and dividing by the number of values. The median is the middle value after sorting the data. The mode is the value that occurs most frequently.

For product analysis, these measures can describe metrics such as order value, session duration, or number of purchases.

The mean can be strongly affected by extreme values, while the median is often more stable when data is highly skewed.`,
          quiz: [
            {
              question: "How is the mean calculated?",
              options: [
                "Sum of values divided by number of values",
                "Largest value only",
                "Most frequent value",
                "Middle value only",
              ],
              answer: "Sum of values divided by number of values",
            },
            {
              question: "What is the median?",
              options: [
                "The middle value after sorting",
                "The most frequent value",
                "The largest value",
                "The average of all databases",
              ],
              answer: "The middle value after sorting",
            },
            {
              question: "What is the mode?",
              options: [
                "Most frequently occurring value",
                "Middle value",
                "Average value",
                "Smallest value",
              ],
              answer: "Most frequently occurring value",
            },
            {
              question: "Which measure can be strongly affected by extreme values?",
              options: [
                "Mean",
                "Median",
                "Mode",
                "Count",
              ],
              answer: "Mean",
            },
            {
              question: "Which measure can be useful for skewed data?",
              options: [
                "Median",
                "Mean only",
                "Mode only",
                "Count only",
              ],
              answer: "Median",
            },
          ],
        },

        {
          title: "Variance and Standard Deviation",
          content: `Variance and standard deviation describe how spread out data values are.

A low standard deviation means values tend to be closer to the average. A high standard deviation means values are more spread out.

For example, two products may have the same average order value but very different variation in customer spending.

Product analysts use these measures to understand consistency and variability in metrics.`,
          quiz: [
            {
              question: "What does standard deviation measure?",
              options: [
                "Spread of data",
                "Number of users",
                "Database size",
                "Conversion definition",
              ],
              answer: "Spread of data",
            },
            {
              question: "What does low standard deviation indicate?",
              options: [
                "Values are closer to the average",
                "Values are always increasing",
                "There are no users",
                "The metric is invalid",
              ],
              answer: "Values are closer to the average",
            },
            {
              question: "What does high standard deviation indicate?",
              options: [
                "Greater spread in values",
                "No variation",
                "No data",
                "Higher conversion automatically",
              ],
              answer: "Greater spread in values",
            },
            {
              question: "What does variance describe?",
              options: [
                "Variation in data",
                "Number of products",
                "Database structure",
                "User interface",
              ],
              answer: "Variation in data",
            },
            {
              question: "Why is variability useful to product analysts?",
              options: [
                "It helps understand consistency in metrics",
                "It replaces all metrics",
                "It removes users",
                "It creates dashboards automatically",
              ],
              answer: "It helps understand consistency in metrics",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Probability and Distributions",
      description:
        "Understand probability, distributions, normal distribution, skewness, and how product data behaves.",
      lessons: [
        {
          title: "Probability Basics",
          content: `Probability describes how likely an event is to occur.

Probability values range from 0 to 1, where 0 means an event is impossible and 1 means it is certain.

Product analysts use probability in areas such as conversion analysis, experiment analysis, forecasting, and risk estimation.

For example, if 20 out of 100 users complete a purchase, the observed purchase rate is 20%. This can be used as a probability estimate for that behavior in the observed sample.`,
          quiz: [
            {
              question: "What does probability describe?",
              options: [
                "Likelihood of an event",
                "Database size",
                "Number of screens",
                "Source code length",
              ],
              answer: "Likelihood of an event",
            },
            {
              question: "What is the probability of an impossible event?",
              options: ["0", "1", "10", "100"],
              answer: "0",
            },
            {
              question: "What is the probability of a certain event?",
              options: ["1", "0", "0.1", "10"],
              answer: "1",
            },
            {
              question: "Where can product analysts use probability?",
              options: [
                "Conversion and experiment analysis",
                "Only web design",
                "Only database creation",
                "Only coding",
              ],
              answer: "Conversion and experiment analysis",
            },
            {
              question: "A conversion rate can be interpreted as what?",
              options: [
                "Observed probability of conversion",
                "Database size",
                "Server capacity",
                "Source code size",
              ],
              answer: "Observed probability of conversion",
            },
          ],
        },

        {
          title: "Probability Distributions",
          content: `A probability distribution describes how possible values of a variable are distributed.

Different types of distributions are useful for different types of data.

For example, discrete distributions can represent count-based events, while continuous distributions can represent measurements such as time or revenue.

Understanding distributions helps analysts choose appropriate statistical methods and understand how product metrics behave.`,
          quiz: [
            {
              question: "What does a probability distribution describe?",
              options: [
                "How possible values are distributed",
                "How websites are designed",
                "How databases are stored",
                "How code is compiled",
              ],
              answer: "How possible values are distributed",
            },
            {
              question: "What type of data can a discrete distribution represent?",
              options: [
                "Count-based events",
                "Only images",
                "Only text",
                "Only web pages",
              ],
              answer: "Count-based events",
            },
            {
              question: "What can continuous distributions represent?",
              options: [
                "Measurements such as time",
                "Only usernames",
                "Only product names",
                "Only categories",
              ],
              answer: "Measurements such as time",
            },
            {
              question: "Why understand distributions?",
              options: [
                "To choose suitable statistical methods",
                "To remove all data",
                "To create websites",
                "To replace product metrics",
              ],
              answer: "To choose suitable statistical methods",
            },
            {
              question: "Distribution analysis helps understand what?",
              options: [
                "Behavior of data",
                "HTML structure",
                "Database passwords",
                "Computer hardware",
              ],
              answer: "Behavior of data",
            },
          ],
        },

        {
          title: "Normal Distribution",
          content: `The normal distribution is a common statistical distribution with a bell-shaped pattern.

Many natural measurements approximately follow a normal distribution, although product data does not always follow it.

The mean, median, and mode are equal in an ideal normal distribution.

Understanding the normal distribution is useful when learning concepts such as standard deviation, confidence intervals, and statistical testing.`,
          quiz: [
            {
              question: "What shape is associated with the normal distribution?",
              options: [
                "Bell-shaped",
                "Square",
                "Triangle",
                "Random line",
              ],
              answer: "Bell-shaped",
            },
            {
              question: "In an ideal normal distribution, mean and median are:",
              options: [
                "Equal",
                "Always unrelated",
                "Always zero",
                "Always negative",
              ],
              answer: "Equal",
            },
            {
              question: "Is all product data normally distributed?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only for websites",
              ],
              answer: "No",
            },
            {
              question: "What concept is related to normal distributions?",
              options: [
                "Standard deviation",
                "HTML",
                "CSS",
                "SQL syntax",
              ],
              answer: "Standard deviation",
            },
            {
              question: "Why learn normal distribution?",
              options: [
                "It supports understanding statistical methods",
                "It creates dashboards automatically",
                "It replaces product data",
                "It removes outliers automatically",
              ],
              answer: "It supports understanding statistical methods",
            },
          ],
        },

        {
          title: "Skewness and Outliers",
          content: `Skewness describes the asymmetry of a distribution.

Product metrics such as revenue per user or session duration can sometimes be heavily skewed because a small number of users have very large values.

Outliers are unusually large or small observations. Analysts should investigate outliers rather than automatically removing them.

Outliers may represent data errors, unusual users, or genuine business behavior.`,
          quiz: [
            {
              question: "What does skewness describe?",
              options: [
                "Asymmetry of a distribution",
                "Number of users",
                "Database size",
                "Conversion definition",
              ],
              answer: "Asymmetry of a distribution",
            },
            {
              question: "What is an outlier?",
              options: [
                "An unusually large or small observation",
                "The average value",
                "The most common value",
                "The median value",
              ],
              answer: "An unusually large or small observation",
            },
            {
              question: "Should outliers always be removed?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only in experiments",
              ],
              answer: "No",
            },
            {
              question: "What can an outlier represent?",
              options: [
                "Data error or genuine behavior",
                "Only a database error",
                "Only a user deletion",
                "Only a product success",
              ],
              answer: "Data error or genuine behavior",
            },
            {
              question: "Which metric can be skewed?",
              options: [
                "Revenue per user",
                "Only product names",
                "Only user IDs",
                "Only categories",
              ],
              answer: "Revenue per user",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Sampling and Hypothesis Testing",
      description:
        "Learn sampling methods, confidence levels, hypothesis testing, p-values, and practical statistical decisions.",
      lessons: [
        {
          title: "Sampling Methods",
          content: `Sampling is the process of selecting a subset of a population for analysis.

Common approaches include random sampling, stratified sampling, and systematic sampling.

Random sampling gives members of a population a chance of being selected. Stratified sampling divides the population into groups and samples from each group.

Product analysts should select sampling approaches that reduce bias and match the purpose of the analysis.`,
          quiz: [
            {
              question: "What is sampling?",
              options: [
                "Selecting a subset of a population",
                "Deleting data",
                "Creating a product",
                "Designing a dashboard",
              ],
              answer: "Selecting a subset of a population",
            },
            {
              question: "What does random sampling do?",
              options: [
                "Gives population members a chance of selection",
                "Selects only premium users",
                "Removes all users",
                "Uses only the largest values",
              ],
              answer:
                "Gives population members a chance of selection",
            },
            {
              question: "What does stratified sampling involve?",
              options: [
                "Dividing the population into groups",
                "Deleting groups",
                "Using only one user",
                "Ignoring user types",
              ],
              answer: "Dividing the population into groups",
            },
            {
              question: "Why is sampling method important?",
              options: [
                "It can affect bias and representativeness",
                "It changes the website design",
                "It creates source code",
                "It removes metrics",
              ],
              answer: "It can affect bias and representativeness",
            },
            {
              question: "What should sampling match?",
              options: [
                "Purpose of the analysis",
                "Screen size",
                "Logo design",
                "Programming language",
              ],
              answer: "Purpose of the analysis",
            },
          ],
        },

        {
          title: "Hypothesis Testing",
          content: `Hypothesis testing is a statistical method used to evaluate a claim about data.

A null hypothesis generally represents no meaningful difference or effect. An alternative hypothesis represents the effect or difference the analyst wants to investigate.

The analyst uses sample data and statistical methods to evaluate the evidence against the null hypothesis.

Hypothesis testing is commonly used in product experiments and comparisons between groups.`,
          quiz: [
            {
              question: "What is hypothesis testing used for?",
              options: [
                "Evaluating claims using data",
                "Designing websites",
                "Creating databases",
                "Writing HTML",
              ],
              answer: "Evaluating claims using data",
            },
            {
              question: "What does the null hypothesis generally represent?",
              options: [
                "No meaningful difference or effect",
                "Guaranteed success",
                "Maximum revenue",
                "Product failure",
              ],
              answer: "No meaningful difference or effect",
            },
            {
              question: "What does the alternative hypothesis represent?",
              options: [
                "A difference or effect being investigated",
                "No data",
                "Database structure",
                "User interface",
              ],
              answer: "A difference or effect being investigated",
            },
            {
              question: "What is used to evaluate hypotheses?",
              options: [
                "Sample data and statistical methods",
                "Only opinions",
                "Only design",
                "Only source code",
              ],
              answer: "Sample data and statistical methods",
            },
            {
              question: "Where is hypothesis testing commonly used?",
              options: [
                "Product experiments",
                "Only website design",
                "Only hardware repair",
                "Only networking",
              ],
              answer: "Product experiments",
            },
          ],
        },

        {
          title: "P-Values and Significance Levels",
          content: `A p-value is a measure used in hypothesis testing to evaluate how compatible observed data is with a null hypothesis.

A significance level is chosen before testing. A common example is 0.05, although the appropriate threshold depends on the analysis.

A small p-value can provide evidence against the null hypothesis, but it does not measure the size or practical importance of an effect.

Product analysts should interpret p-values together with effect size, confidence intervals, and business context.`,
          quiz: [
            {
              question: "What is a p-value used for?",
              options: [
                "Evaluating evidence against a null hypothesis",
                "Calculating database size",
                "Designing a dashboard",
                "Measuring screen size",
              ],
              answer: "Evaluating evidence against a null hypothesis",
            },
            {
              question: "What is a significance level?",
              options: [
                "A predefined threshold for statistical testing",
                "A product metric",
                "A database value",
                "A user property",
              ],
              answer: "A predefined threshold for statistical testing",
            },
            {
              question: "What is a commonly used significance level?",
              options: ["0.05", "5", "50", "500"],
              answer: "0.05",
            },
            {
              question: "Does a p-value measure effect size?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only in A/B tests",
              ],
              answer: "No",
            },
            {
              question: "What should be considered with p-values?",
              options: [
                "Effect size and business context",
                "Only screen size",
                "Only code",
                "Only database size",
              ],
              answer: "Effect size and business context",
            },
          ],
        },

        {
          title: "Confidence Levels and Intervals",
          content: `Confidence intervals provide a range of plausible values for an estimated population parameter.

A confidence level describes the long-run procedure used to create the interval. A commonly used confidence level is 95%.

In product analysis, confidence intervals can help communicate uncertainty around conversion rates, revenue estimates, or experiment effects.

Analysts should avoid treating a confidence interval as an absolute guarantee about the true value.`,
          quiz: [
            {
              question: "What does a confidence interval provide?",
              options: [
                "A range of plausible values",
                "A fixed guaranteed value",
                "A database",
                "A product feature",
              ],
              answer: "A range of plausible values",
            },
            {
              question: "What is a commonly used confidence level?",
              options: ["95%", "10%", "5%", "200%"],
              answer: "95%",
            },
            {
              question: "What does a confidence interval communicate?",
              options: [
                "Uncertainty around an estimate",
                "Source code quality",
                "Website speed",
                "Database size",
              ],
              answer: "Uncertainty around an estimate",
            },
            {
              question: "Can a confidence interval guarantee the true value?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only for large data",
              ],
              answer: "No",
            },
            {
              question: "Where can confidence intervals be useful?",
              options: [
                "Experiment and metric analysis",
                "Only CSS design",
                "Only hardware testing",
                "Only database creation",
              ],
              answer: "Experiment and metric analysis",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Correlation, Regression, and Practical Analysis",
      description:
        "Learn relationships between variables, regression basics, statistical interpretation, and practical product analysis.",
      lessons: [
        {
          title: "Correlation",
          content: `Correlation describes the relationship between two variables.

A positive correlation means that higher values of one variable tend to be associated with higher values of another. A negative correlation means that higher values of one tend to be associated with lower values of the other.

Correlation does not prove causation.

For example, product analysts may find that users who spend more time in an application also have higher retention. This relationship does not automatically mean that increasing session time causes retention to increase.`,
          quiz: [
            {
              question: "What does correlation describe?",
              options: [
                "Relationship between variables",
                "Database size",
                "Source code length",
                "Product design",
              ],
              answer: "Relationship between variables",
            },
            {
              question: "What does positive correlation mean?",
              options: [
                "Variables tend to increase together",
                "Variables always decrease",
                "There is no relationship",
                "One variable is deleted",
              ],
              answer: "Variables tend to increase together",
            },
            {
              question: "What does negative correlation mean?",
              options: [
                "One variable tends to increase as another decreases",
                "Both always increase",
                "There is no data",
                "Both variables are identical",
              ],
              answer:
                "One variable tends to increase as another decreases",
            },
            {
              question: "Does correlation prove causation?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only for product data",
              ],
              answer: "No",
            },
            {
              question: "Why is correlation useful?",
              options: [
                "It helps identify relationships in data",
                "It replaces experiments",
                "It deletes outliers",
                "It creates dashboards",
              ],
              answer: "It helps identify relationships in data",
            },
          ],
        },

        {
          title: "Regression Basics",
          content: `Regression is a statistical method used to model relationships between variables.

In simple linear regression, one variable is used to help explain or predict another variable.

For example, a product analyst could study whether the number of product interactions is associated with revenue.

Regression can help identify patterns, estimate relationships, and control for additional variables in more advanced models. However, regression results still require careful interpretation and do not automatically prove causation.`,
          quiz: [
            {
              question: "What is regression used for?",
              options: [
                "Modeling relationships between variables",
                "Designing websites",
                "Creating databases",
                "Writing HTML",
              ],
              answer: "Modeling relationships between variables",
            },
            {
              question: "What can simple linear regression study?",
              options: [
                "Relationship between two variables",
                "Only database tables",
                "Only user names",
                "Only product colors",
              ],
              answer: "Relationship between two variables",
            },
            {
              question: "What can regression help with?",
              options: [
                "Estimating relationships",
                "Deleting data",
                "Replacing all experiments",
                "Designing logos",
              ],
              answer: "Estimating relationships",
            },
            {
              question: "Does regression automatically prove causation?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only with large samples",
              ],
              answer: "No",
            },
            {
              question: "What should regression results receive?",
              options: [
                "Careful interpretation",
                "Automatic acceptance",
                "No analysis",
                "Immediate deletion",
              ],
              answer: "Careful interpretation",
            },
          ],
        },

        {
          title: "Statistics for Product Decisions",
          content: `Statistics becomes useful when it helps answer real product questions.

A product analyst may use statistics to compare user groups, analyze conversion rates, understand retention, evaluate experiments, identify relationships, and estimate uncertainty.

Statistical results should always be connected to the product objective.

A statistically significant result may not have enough business impact to justify a product change. Similarly, a practically useful effect may require more data before the evidence becomes strong enough.`,
          quiz: [
            {
              question: "Why use statistics in product analysis?",
              options: [
                "To support data-driven decisions",
                "To replace product teams",
                "To design interfaces",
                "To write source code",
              ],
              answer: "To support data-driven decisions",
            },
            {
              question: "What can statistics help analyze?",
              options: [
                "Conversion and retention",
                "Only HTML",
                "Only CSS",
                "Only hardware",
              ],
              answer: "Conversion and retention",
            },
            {
              question: "Should statistics be connected to product objectives?",
              options: [
                "Yes",
                "No",
                "Only sometimes",
                "Never",
              ],
              answer: "Yes",
            },
            {
              question: "Does statistical significance guarantee business value?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only for large products",
              ],
              answer: "No",
            },
            {
              question: "What should analysts consider with statistical results?",
              options: [
                "Business impact and uncertainty",
                "Only p-values",
                "Only database size",
                "Only UI design",
              ],
              answer: "Business impact and uncertainty",
            },
          ],
        },

        {
          title: "Mini Project: Product Statistics Analysis",
          content: `In this mini project, analyze a product dataset containing user activity, sessions, purchases, and revenue.

Calculate basic statistics such as mean, median, and standard deviation. Analyze the distribution of important metrics and identify possible outliers.

Next, examine relationships between user activity and revenue using correlation. Compare relevant user groups and explain the differences.

Finally, prepare a short analysis explaining the key findings, limitations, and possible product actions based on the data.`,
          quiz: [
            {
              question: "Which statistics should be calculated first?",
              options: [
                "Mean, median, and standard deviation",
                "Only maximum",
                "Only minimum",
                "Only product names",
              ],
              answer: "Mean, median, and standard deviation",
            },
            {
              question: "What should be checked in metric distributions?",
              options: [
                "Skewness and outliers",
                "Only colors",
                "Only source code",
                "Only database names",
              ],
              answer: "Skewness and outliers",
            },
            {
              question: "What can correlation help analyze?",
              options: [
                "Relationship between user activity and revenue",
                "Website colors",
                "Database size",
                "Screen resolution",
              ],
              answer:
                "Relationship between user activity and revenue",
            },
            {
              question: "What should the final analysis include?",
              options: [
                "Findings and limitations",
                "Only code",
                "Only screenshots",
                "Only database structure",
              ],
              answer: "Findings and limitations",
            },
            {
              question: "What is the main goal of the project?",
              options: [
                "Use statistics to support product analysis",
                "Build a website",
                "Create a database",
                "Configure a server",
              ],
              answer: "Use statistics to support product analysis",
            },
          ],
        },
      ],
    },
  ],
};

export default statisticsCourse;
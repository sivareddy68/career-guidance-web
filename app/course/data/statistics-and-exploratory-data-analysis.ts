
export const statisticsAndExploratoryDataAnalysisCourse = {
  title: "Statistics and Exploratory Data Analysis",
  description:
    "Learn descriptive statistics, probability, data distributions, correlation, hypothesis testing, and exploratory data analysis using Excel and Python.",
  project:
    "Perform an Exploratory Data Analysis project on a student performance dataset. Calculate statistical measures, identify patterns, visualize relationships, investigate outliers, and prepare a data insights report.",

  weeks: [
    {
      title: "Week 1: Fundamentals of Statistics",
      description:
        "Understand statistical concepts, types of data, populations, samples, and descriptive statistics.",
      assignment:
        "Collect a small dataset of student marks and calculate its mean, median, mode, range, and standard deviation.",

      lessons: [
        {
          title: "Introduction to Statistics",
          duration: "30 minutes",
          introduction:
            "Statistics is the study of collecting, organizing, analyzing, interpreting, and presenting data. It helps us understand information and make decisions based on evidence.",

          sections: [
            {
              heading: "What is Statistics?",
              content:
                "Statistics provides methods for summarizing data, identifying patterns, comparing groups, and drawing conclusions. It is widely used in business, education, healthcare, engineering, and research.",
            },
            {
              heading: "Descriptive Statistics",
              content:
                "Descriptive statistics summarize the main characteristics of a dataset. Common measures include mean, median, mode, range, variance, and standard deviation.",
            },
            {
              heading: "Inferential Statistics",
              content:
                "Inferential statistics uses information from a sample to draw conclusions about a larger population. It includes estimation and hypothesis testing.",
            },
          ],

          example:
            "Student marks: 60, 70, 80, 90, 100\n\nMean = (60 + 70 + 80 + 90 + 100) / 5\nMean = 80\n\nThe average mark is 80.",

          exercise:
            "Collect marks of 10 students. Calculate the average and identify the highest and lowest marks.",

          quiz: [
            {
              question: "What is the main purpose of statistics?",
              options: [
                "Analyze and interpret data",
                "Create computer hardware",
                "Design websites",
                "Develop operating systems",
              ],
              answer: "Analyze and interpret data",
              explanation:
                "Statistics provides methods to understand data and support decisions.",
            },
            {
              question: "Which branch summarizes collected data?",
              options: [
                "Descriptive statistics",
                "Inferential statistics",
                "Computer graphics",
                "Network security",
              ],
              answer: "Descriptive statistics",
              explanation:
                "Descriptive statistics summarizes and presents the characteristics of data.",
            },
            {
              question: "Which branch draws conclusions about a population using a sample?",
              options: [
                "Inferential statistics",
                "Descriptive statistics",
                "Database design",
                "Data formatting",
              ],
              answer: "Inferential statistics",
              explanation:
                "Inferential statistics uses sample information to make conclusions about a population.",
            },
            {
              question: "Where is statistics commonly used?",
              options: [
                "Business and research",
                "Only computer gaming",
                "Only image editing",
                "Only document printing",
              ],
              answer: "Business and research",
              explanation:
                "Statistics is used across many fields to understand information and support decisions.",
            },
            {
              question: "Which is an example of statistical information?",
              options: [
                "Average examination marks",
                "Keyboard color",
                "Monitor size",
                "Desktop wallpaper",
              ],
              answer: "Average examination marks",
              explanation:
                "An average summarizes numerical observations.",
            },
          ],
        },

        {
          title: "Types of Data and Variables",
          duration: "35 minutes",
          introduction:
            "Understanding data types is important because different types of data require different statistical methods. Variables represent characteristics that can take different values.",

          sections: [
            {
              heading: "Qualitative Data",
              content:
                "Qualitative data represents categories or labels. Examples include department names, city names, and product categories.",
            },
            {
              heading: "Quantitative Data",
              content:
                "Quantitative data represents numerical measurements or counts. Examples include age, salary, examination marks, and number of products sold.",
            },
            {
              heading: "Discrete and Continuous Variables",
              content:
                "Discrete variables represent countable values, such as the number of students. Continuous variables can take any value within a range, such as height or temperature.",
            },
          ],

          example:
            "Department: ECE (qualitative)\nAge: 21 years (quantitative)\nNumber of students: 45 (discrete)\nHeight: 172.5 cm (continuous)",

          exercise:
            "Create a table with 15 variables and classify each as qualitative, quantitative, discrete, or continuous where applicable.",

          quiz: [
            {
              question: "Which is an example of qualitative data?",
              options: [
                "Department name",
                "Student age",
                "Student marks",
                "Monthly salary",
              ],
              answer: "Department name",
              explanation:
                "Department names are categories rather than numerical measurements.",
            },
            {
              question: "Which is an example of quantitative data?",
              options: [
                "Height",
                "City name",
                "Department",
                "Blood group",
              ],
              answer: "Height",
              explanation:
                "Height is a numerical measurement.",
            },
            {
              question: "Which is a discrete variable?",
              options: [
                "Number of students",
                "Body temperature",
                "Height",
                "Weight",
              ],
              answer: "Number of students",
              explanation:
                "The number of students is a countable quantity.",
            },
            {
              question: "Which is a continuous variable?",
              options: [
                "Temperature",
                "Number of books",
                "Number of students",
                "Number of computers",
              ],
              answer: "Temperature",
              explanation:
                "Temperature can take fractional values within a range.",
            },
            {
              question: "What is a variable?",
              options: [
                "A characteristic that can take different values",
                "A fixed computer screen",
                "A type of keyboard",
                "A presentation template",
              ],
              answer: "A characteristic that can take different values",
              explanation:
                "A variable represents a measurable or observable characteristic.",
            },
          ],
        },

        {
          title: "Population and Sampling",
          duration: "35 minutes",
          introduction:
            "A population is the complete group being studied, while a sample is a smaller group selected from that population. Sampling makes research more practical when studying every member is difficult.",

          sections: [
            {
              heading: "Population",
              content:
                "A population includes all individuals or observations relevant to a study. For example, all students in a college can form a population.",
            },
            {
              heading: "Sample",
              content:
                "A sample is a subset of the population. A researcher may select 100 students from a college to study their learning habits.",
            },
            {
              heading: "Sampling Methods",
              content:
                "Common methods include simple random sampling, systematic sampling, stratified sampling, and cluster sampling. Each method has different selection procedures.",
            },
          ],

          example:
            "Population: 2,000 students in a college\nSample: 200 selected students\n\nThe sample is used to study characteristics of the larger population.",

          exercise:
            "Imagine a college with 1,000 students. Design a sample of 100 students and describe how you would select them fairly.",

          quiz: [
            {
              question: "What is a population in statistics?",
              options: [
                "The complete group being studied",
                "Only five selected observations",
                "A chart of numerical values",
                "A calculation formula",
              ],
              answer: "The complete group being studied",
              explanation:
                "A population includes the entire group relevant to a study.",
            },
            {
              question: "What is a sample?",
              options: [
                "A subset of a population",
                "The entire world",
                "A type of graph",
                "A missing value",
              ],
              answer: "A subset of a population",
              explanation:
                "A sample is a selected part of the population.",
            },
            {
              question: "Which sampling method gives each population member an equal chance of selection?",
              options: [
                "Simple random sampling",
                "Convenience sampling",
                "Judgment sampling",
                "Quota sampling",
              ],
              answer: "Simple random sampling",
              explanation:
                "Simple random sampling selects individuals so each has an equal selection probability.",
            },
            {
              question: "Why is sampling useful?",
              options: [
                "It can reduce the time and cost of research",
                "It always eliminates bias",
                "It removes the need for data",
                "It guarantees perfect results",
              ],
              answer: "It can reduce the time and cost of research",
              explanation:
                "Studying a suitable sample can be more practical than examining the entire population.",
            },
            {
              question: "A researcher selects 50 students from 500 students. What are the 50 students?",
              options: [
                "Sample",
                "Population",
                "Variable",
                "Parameter",
              ],
              answer: "Sample",
              explanation:
                "The 50 selected students are a subset of the population.",
            },
          ],
        },

        {
          title: "Measures of Central Tendency",
          duration: "40 minutes",
          introduction:
            "Measures of central tendency describe the center of a dataset. The mean, median, and mode are common measures used to summarize numerical observations.",

          sections: [
            {
              heading: "Mean",
              content:
                "The mean is calculated by adding all observations and dividing by the number of observations. It is affected by unusually high or low values.",
            },
            {
              heading: "Median",
              content:
                "The median is the middle value after sorting the observations. If there are an even number of observations, it is the average of the two middle values.",
            },
            {
              heading: "Mode",
              content:
                "The mode is the most frequently occurring value. A dataset may have one mode, multiple modes, or no repeated mode.",
            },
          ],

          example:
            "Data: 10, 20, 20, 30, 40\n\nMean = 24\nMedian = 20\nMode = 20",

          exercise:
            "Calculate mean, median, and mode for five different datasets. Compare how the three measures describe each dataset.",

          quiz: [
            {
              question: "How is the mean calculated?",
              options: [
                "Sum divided by number of observations",
                "Maximum minus minimum",
                "Most frequent value",
                "Middle observation only",
              ],
              answer: "Sum divided by number of observations",
              explanation:
                "The mean is the arithmetic average of all observations.",
            },
            {
              question: "What is the median?",
              options: [
                "Middle value after sorting",
                "Largest value",
                "Smallest value",
                "Most frequent value",
              ],
              answer: "Middle value after sorting",
              explanation:
                "The median is determined by the central position in ordered data.",
            },
            {
              question: "What is the mode?",
              options: [
                "Most frequently occurring value",
                "Average of all values",
                "Difference between extremes",
                "Smallest observation",
              ],
              answer: "Most frequently occurring value",
              explanation:
                "The mode is the value with the highest frequency.",
            },
            {
              question: "Which measure is generally less affected by extreme values?",
              options: [
                "Median",
                "Mean",
                "Range",
                "Variance",
              ],
              answer: "Median",
              explanation:
                "The median depends on the middle position rather than the magnitude of extreme observations.",
            },
            {
              question: "What is the mean of 4, 6, and 8?",
              options: [
                "6",
                "4",
                "8",
                "18",
              ],
              answer: "6",
              explanation:
                "The mean is (4 + 6 + 8) / 3 = 6.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Descriptive Statistics and Probability",
      description:
        "Study data spread, variance, standard deviation, quartiles, probability, and common distributions.",
      assignment:
        "Calculate range, variance, standard deviation, and quartiles for a dataset and explain its distribution.",

      lessons: [
        {
          title: "Measures of Dispersion",
          duration: "35 minutes",
          introduction:
            "Measures of dispersion describe how spread out observations are. They help explain whether values are close together or widely distributed.",

          sections: [
            {
              heading: "Range",
              content:
                "Range is the difference between the maximum and minimum observations. It is simple to calculate but depends only on the two extreme values.",
            },
            {
              heading: "Variance",
              content:
                "Variance measures the average squared deviation from the mean. Population variance divides by the population size, while sample variance uses one less than the sample size.",
            },
            {
              heading: "Standard Deviation",
              content:
                "Standard deviation is the square root of variance. It describes spread in the same measurement units as the original data.",
            },
          ],

          example:
            "Data: 2, 4, 6\n\nRange = 6 - 2 = 4\nMean = 4\nPopulation variance = ((2-4)² + (4-4)² + (6-4)²) / 3 = 8/3\nPopulation standard deviation = √(8/3) ≈ 1.63",

          exercise:
            "Choose two datasets with the same mean but different spread. Calculate their ranges and population standard deviations and compare them.",

          quiz: [
            {
              question: "What is the range of a dataset?",
              options: [
                "Maximum minus minimum",
                "Sum divided by count",
                "Middle value",
                "Most frequent value",
              ],
              answer: "Maximum minus minimum",
              explanation:
                "Range measures the difference between the largest and smallest values.",
            },
            {
              question: "What does variance measure?",
              options: [
                "Average squared deviation from the mean",
                "Number of missing values",
                "Most common category",
                "Largest observation only",
              ],
              answer: "Average squared deviation from the mean",
              explanation:
                "Variance summarizes squared differences from the mean.",
            },
            {
              question: "How is standard deviation related to variance?",
              options: [
                "It is the square root of variance",
                "It is twice the variance",
                "It is the maximum value",
                "It is the median of the data",
              ],
              answer: "It is the square root of variance",
              explanation:
                "Standard deviation is defined as the square root of variance.",
            },
            {
              question: "Which measure uses the same units as the original data?",
              options: [
                "Standard deviation",
                "Variance",
                "Squared deviation",
                "Squared range",
              ],
              answer: "Standard deviation",
              explanation:
                "Taking the square root of variance returns the measurement to the original units.",
            },
            {
              question: "What does a larger standard deviation generally indicate?",
              options: [
                "Greater spread around the mean",
                "All values are identical",
                "There are no observations",
                "The median is always zero",
              ],
              answer: "Greater spread around the mean",
              explanation:
                "A larger standard deviation indicates more variability around the mean.",
            },
          ],
        },

        {
          title: "Quartiles and Percentiles",
          duration: "35 minutes",
          introduction:
            "Quartiles divide ordered data into four parts, while percentiles describe positions within a distribution. These measures help summarize how observations are distributed.",

          sections: [
            {
              heading: "Quartiles",
              content:
                "Q1 is the 25th percentile, Q2 is the median or 50th percentile, and Q3 is the 75th percentile.",
            },
            {
              heading: "Percentiles",
              content:
                "The kth percentile is a value at or below which approximately k percent of observations fall, subject to the calculation convention used.",
            },
            {
              heading: "Interquartile Range",
              content:
                "The interquartile range is Q3 minus Q1. It describes the spread of the middle half of the observations.",
            },
          ],

          example:
            "Ordered data: 10, 20, 30, 40, 50, 60, 70\n\nMedian (Q2) = 40\n\nQuartile calculation depends on the chosen convention. Under the median-of-halves method, Q1 = 20 and Q3 = 60.",

          exercise:
            "Arrange 15 numerical observations in ascending order. Calculate Q1, Q2, Q3, and IQR using a clearly stated quartile convention.",

          quiz: [
            {
              question: "What does Q2 represent?",
              options: [
                "Median",
                "Minimum",
                "Maximum",
                "Range",
              ],
              answer: "Median",
              explanation:
                "Q2 is the 50th percentile and represents the median.",
            },
            {
              question: "Which percentile corresponds to Q1?",
              options: [
                "25th percentile",
                "50th percentile",
                "75th percentile",
                "100th percentile",
              ],
              answer: "25th percentile",
              explanation:
                "The first quartile corresponds to the 25th percentile.",
            },
            {
              question: "How is IQR calculated?",
              options: [
                "Q3 minus Q1",
                "Q1 minus Q3",
                "Maximum plus minimum",
                "Mean divided by median",
              ],
              answer: "Q3 minus Q1",
              explanation:
                "IQR measures the distance between the third and first quartiles.",
            },
            {
              question: "What percentage of observations is approximately below the 75th percentile?",
              options: [
                "75%",
                "25%",
                "50%",
                "100%",
              ],
              answer: "75%",
              explanation:
                "The 75th percentile is the value at or below which approximately 75% of observations fall.",
            },
            {
              question: "What does IQR describe?",
              options: [
                "Spread of the middle half of data",
                "Total number of columns",
                "Largest value only",
                "Number of categories",
              ],
              answer: "Spread of the middle half of data",
              explanation:
                "The interval between Q1 and Q3 contains the middle 50% of ordered observations.",
            },
          ],
        },

        {
          title: "Introduction to Probability",
          duration: "40 minutes",
          introduction:
            "Probability measures how likely an event is to occur. Its value ranges from 0 to 1, where 0 represents an impossible event and 1 represents a certain event.",

          sections: [
            {
              heading: "Basic Probability",
              content:
                "For equally likely outcomes, probability of an event is the number of favorable outcomes divided by the total number of possible outcomes.",
            },
            {
              heading: "Events",
              content:
                "An event is a collection of outcomes. Events can be simple or compound, and they may be independent, dependent, mutually exclusive, or overlapping.",
            },
            {
              heading: "Complementary Events",
              content:
                "The complement of an event represents the outcomes where that event does not occur. The probability of an event and its complement add up to 1.",
            },
          ],

          example:
            "A fair six-sided die has six equally likely outcomes.\n\nProbability of rolling a 2 = 1/6\nProbability of rolling an even number = 3/6 = 1/2",

          exercise:
            "Create five probability examples using coins, dice, and cards. Calculate the probability of each event.",

          quiz: [
            {
              question: "What is the possible range of probability?",
              options: [
                "0 to 1",
                "1 to 10",
                "-10 to 10",
                "0 to 1000",
              ],
              answer: "0 to 1",
              explanation:
                "Probability is between 0 and 1 inclusive.",
            },
            {
              question: "What does probability 0 represent?",
              options: [
                "Impossible event",
                "Certain event",
                "Equally likely events",
                "A guaranteed outcome",
              ],
              answer: "Impossible event",
              explanation:
                "An event with probability zero is impossible under the specified model.",
            },
            {
              question: "What does probability 1 represent?",
              options: [
                "Certain event",
                "Impossible event",
                "Random error",
                "Missing observation",
              ],
              answer: "Certain event",
              explanation:
                "An event with probability one is certain under the specified model.",
            },
            {
              question: "What is the probability of getting heads on a fair coin?",
              options: [
                "1/2",
                "1/4",
                "1/3",
                "1",
              ],
              answer: "1/2",
              explanation:
                "A fair coin has two equally likely outcomes, and one is heads.",
            },
            {
              question: "What is the sum of the probabilities of an event and its complement?",
              options: [
                "1",
                "0",
                "2",
                "0.5",
              ],
              answer: "1",
              explanation:
                "An event and its complement cover all possible outcomes.",
            },
          ],
        },

        {
          title: "Common Probability Distributions",
          duration: "40 minutes",
          introduction:
            "Probability distributions describe how probabilities are assigned to possible values of a random variable. Different distributions model different types of events and measurements.",

          sections: [
            {
              heading: "Normal Distribution",
              content:
                "The normal distribution is a continuous, symmetric, bell-shaped distribution characterized by its mean and standard deviation.",
            },
            {
              heading: "Binomial Distribution",
              content:
                "The binomial distribution models the number of successes in a fixed number of independent trials, each with the same success probability.",
            },
            {
              heading: "Uniform Distribution",
              content:
                "A discrete uniform distribution assigns equal probability to a finite set of outcomes. A continuous uniform distribution has constant density across an interval.",
            },
          ],

          example:
            "A fair coin is tossed 3 times.\n\nThe number of heads follows a binomial distribution with n = 3 and p = 0.5.",

          exercise:
            "Identify real-world examples of normal, binomial, and uniform distributions. Explain why each distribution may be suitable.",

          quiz: [
            {
              question: "Which distribution has a symmetric bell-shaped curve?",
              options: [
                "Normal distribution",
                "Binomial distribution",
                "Geometric distribution",
                "Poisson distribution",
              ],
              answer: "Normal distribution",
              explanation:
                "The normal distribution is symmetric and bell-shaped.",
            },
            {
              question: "Which distribution models successes in a fixed number of independent trials?",
              options: [
                "Binomial distribution",
                "Normal distribution",
                "Continuous uniform distribution",
                "Exponential distribution",
              ],
              answer: "Binomial distribution",
              explanation:
                "The binomial distribution counts successes across a fixed number of independent trials with constant success probability.",
            },
            {
              question: "What does a discrete uniform distribution assign?",
              options: [
                "Equal probability to each allowed outcome",
                "Probability only to the largest value",
                "Zero probability to all outcomes",
                "Different fixed probabilities to every outcome",
              ],
              answer: "Equal probability to each allowed outcome",
              explanation:
                "All outcomes in a discrete uniform distribution are equally likely.",
            },
            {
              question: "Which parameters describe a normal distribution?",
              options: [
                "Mean and standard deviation",
                "Maximum and minimum only",
                "Mode and range only",
                "Sample size and category name",
              ],
              answer: "Mean and standard deviation",
              explanation:
                "The normal distribution is determined by its mean and standard deviation.",
            },
            {
              question: "Which is a suitable binomial experiment?",
              options: [
                "Counting heads in a fixed number of fair coin tosses",
                "Measuring the height of a person",
                "Recording the temperature every hour",
                "Measuring the distance between two cities",
              ],
              answer: "Counting heads in a fixed number of fair coin tosses",
              explanation:
                "Each toss is an independent trial with two outcomes and a fixed probability of heads.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Relationships and Statistical Analysis",
      description:
        "Learn correlation, covariance, hypothesis testing, confidence intervals, and statistical interpretation.",
      assignment:
        "Analyze the relationship between study hours and student marks. Calculate correlation and explain the findings.",

      lessons: [
        {
          title: "Correlation Analysis",
          duration: "40 minutes",
          introduction:
            "Correlation measures the direction and strength of association between two variables. It helps analysts understand whether variables tend to change together.",

          sections: [
            {
              heading: "Positive Correlation",
              content:
                "Positive correlation means that larger values of one variable tend to be associated with larger values of another variable.",
            },
            {
              heading: "Negative Correlation",
              content:
                "Negative correlation means that larger values of one variable tend to be associated with smaller values of another variable.",
            },
            {
              heading: "Correlation Coefficient",
              content:
                "Pearson's correlation coefficient ranges from -1 to +1. Values near +1 indicate strong positive linear association, values near -1 indicate strong negative linear association, and values near 0 indicate little or no linear association.",
            },
          ],

          example:
            "Study hours: 1, 2, 3, 4, 5\nMarks: 40, 50, 60, 70, 80\n\nThese values show a perfect positive linear relationship in this example.",

          exercise:
            "Collect study-hour and examination-mark data for 10 observations. Create a scatter plot and calculate the correlation coefficient.",

          quiz: [
            {
              question: "What does positive correlation indicate?",
              options: [
                "Variables tend to increase together",
                "One variable always decreases",
                "Both variables are unrelated",
                "All values are missing",
              ],
              answer: "Variables tend to increase together",
              explanation:
                "Positive correlation indicates that higher values of one variable tend to accompany higher values of another.",
            },
            {
              question: "What is the range of Pearson's correlation coefficient?",
              options: [
                "-1 to +1",
                "0 to 100",
                "-10 to +10",
                "1 to 10",
              ],
              answer: "-1 to +1",
              explanation:
                "Pearson's correlation coefficient ranges from negative one to positive one.",
            },
            {
              question: "What does a correlation coefficient near -1 indicate?",
              options: [
                "Strong negative linear association",
                "Strong positive linear association",
                "Perfectly constant values",
                "No observations",
              ],
              answer: "Strong negative linear association",
              explanation:
                "A value near -1 indicates a strong negative linear relationship.",
            },
            {
              question: "Which chart is useful for visualizing correlation?",
              options: [
                "Scatter plot",
                "Pie chart",
                "Flowchart",
                "Gantt chart",
              ],
              answer: "Scatter plot",
              explanation:
                "A scatter plot displays paired numerical observations and helps reveal relationships.",
            },
            {
              question: "Does correlation automatically prove causation?",
              options: [
                "No",
                "Yes, always",
                "Only when values are positive",
                "Only when the sample is small",
              ],
              answer: "No",
              explanation:
                "An association alone does not establish that one variable causes another.",
            },
          ],
        },

        {
          title: "Covariance and Relationship Analysis",
          duration: "35 minutes",
          introduction:
            "Covariance measures how two variables vary together. It indicates whether they tend to move in the same or opposite directions, but its magnitude depends on their measurement scales.",

          sections: [
            {
              heading: "Understanding Covariance",
              content:
                "Positive covariance indicates that two variables tend to move in the same direction. Negative covariance indicates that they tend to move in opposite directions.",
            },
            {
              heading: "Covariance and Correlation",
              content:
                "Covariance depends on the units of the variables. Correlation standardizes covariance and provides a unit-free measure between -1 and +1.",
            },
            {
              heading: "Interpreting Relationships",
              content:
                "Relationships should be examined with scatter plots and domain knowledge. Outliers and nonlinear patterns can influence the interpretation.",
            },
          ],

          example:
            "If study hours and marks tend to increase together, their covariance may be positive.\n\nThis alone does not prove that study hours cause higher marks.",

          exercise:
            "Use two numerical variables from a sample dataset. Calculate covariance and correlation and compare their interpretations.",

          quiz: [
            {
              question: "What does covariance measure?",
              options: [
                "How two variables vary together",
                "The number of rows",
                "The number of missing columns",
                "The largest observation only",
              ],
              answer: "How two variables vary together",
              explanation:
                "Covariance indicates the direction in which two variables tend to vary together.",
            },
            {
              question: "What does positive covariance indicate?",
              options: [
                "Variables tend to move in the same direction",
                "Variables are always unrelated",
                "One variable must be missing",
                "Both variables are constant",
              ],
              answer: "Variables tend to move in the same direction",
              explanation:
                "Positive covariance indicates that deviations from their means tend to have the same sign.",
            },
            {
              question: "Why is correlation easier to compare across measurement scales?",
              options: [
                "It is unit-free and standardized",
                "It always equals covariance",
                "It only accepts text values",
                "It ignores both variables",
              ],
              answer: "It is unit-free and standardized",
              explanation:
                "Correlation is standardized, so its value does not depend on the original measurement units.",
            },
            {
              question: "Which value indicates negative covariance?",
              options: [
                "-5",
                "5",
                "10",
                "0",
              ],
              answer: "-5",
              explanation:
                "A negative covariance indicates that the variables tend to move in opposite directions.",
            },
            {
              question: "Which visualization helps inspect the relationship between two numerical variables?",
              options: [
                "Scatter plot",
                "Text box",
                "Page border",
                "Flowchart",
              ],
              answer: "Scatter plot",
              explanation:
                "Scatter plots display the paired values of two numerical variables.",
            },
          ],
        },

        {
          title: "Introduction to Hypothesis Testing",
          duration: "45 minutes",
          introduction:
            "Hypothesis testing is a statistical method used to evaluate claims about populations using sample data. It helps determine whether observed evidence is inconsistent with a specified null hypothesis.",

          sections: [
            {
              heading: "Null Hypothesis",
              content:
                "The null hypothesis, commonly written as H0, represents a specified baseline claim, such as no difference or no association.",
            },
            {
              heading: "Alternative Hypothesis",
              content:
                "The alternative hypothesis, written as H1 or Ha, represents the competing claim that is being investigated.",
            },
            {
              heading: "P-value and Significance Level",
              content:
                "A p-value measures how unusual the observed test result, or a more extreme result, would be if the null hypothesis were true. The significance level is a threshold chosen before interpreting the result.",
            },
          ],

          example:
            "H0: The average marks of two groups are equal.\nH1: The average marks of two groups are different.\n\nA test is used to evaluate the evidence against H0.",

          exercise:
            "Write null and alternative hypotheses for three research questions. Identify an appropriate significance level for each example.",

          quiz: [
            {
              question: "What is the null hypothesis commonly represented by?",
              options: [
                "H0",
                "H1",
                "R2",
                "X2",
              ],
              answer: "H0",
              explanation:
                "H0 is the standard notation for the null hypothesis.",
            },
            {
              question: "What does the alternative hypothesis represent?",
              options: [
                "A competing research claim",
                "A missing observation",
                "A data column heading",
                "A chart title",
              ],
              answer: "A competing research claim",
              explanation:
                "The alternative hypothesis represents the claim being considered against the null hypothesis.",
            },
            {
              question: "What does a p-value describe?",
              options: [
                "Probability of the observed or more extreme result under H0",
                "Probability that H0 is certainly true",
                "The size of the dataset",
                "The number of missing values",
              ],
              answer: "Probability of the observed or more extreme result under H0",
              explanation:
                "A p-value is calculated assuming the null hypothesis and test assumptions hold.",
            },
            {
              question: "What is a significance level?",
              options: [
                "A threshold selected for a statistical test",
                "The maximum number of dataset rows",
                "The average of the sample",
                "A type of chart",
              ],
              answer: "A threshold selected for a statistical test",
              explanation:
                "The significance level is the preselected threshold used in decision-making.",
            },
            {
              question: "What should be considered when interpreting a hypothesis test?",
              options: [
                "The test assumptions and study context",
                "Only the worksheet color",
                "Only the column width",
                "The computer wallpaper",
              ],
              answer: "The test assumptions and study context",
              explanation:
                "Statistical conclusions depend on assumptions, study design, and the meaning of the data.",
            },
          ],
        },

        {
          title: "Confidence Intervals and Statistical Interpretation",
          duration: "40 minutes",
          introduction:
            "A confidence interval provides a range of plausible values for a population parameter using sample data and a specified procedure. It communicates estimation uncertainty.",

          sections: [
            {
              heading: "Understanding Confidence Intervals",
              content:
                "A confidence interval is calculated from sample information and a statistical method. Its width depends on factors such as sample size, variability, and the confidence level.",
            },
            {
              heading: "Confidence Level",
              content:
                "A 95% confidence procedure has a long-run success rate of 95% in covering the fixed population parameter when its assumptions hold and the procedure is repeated.",
            },
            {
              heading: "Interpreting Results",
              content:
                "A confidence interval should be interpreted in the context of its parameter, units, sampling method, and assumptions. It is not a guarantee that a particular interval contains the parameter.",
            },
          ],

          example:
            "Estimated average mark: 75\n95% confidence interval: 72 to 78\n\nThe interval gives a range of plausible values under the method's assumptions.",

          exercise:
            "Find an example of a confidence interval from a statistical report. Identify the estimated parameter, interval, confidence level, and units.",

          quiz: [
            {
              question: "What does a confidence interval provide?",
              options: [
                "A range of plausible parameter values",
                "A list of all individual records",
                "A guarantee of perfect accuracy",
                "A list of missing values",
              ],
              answer: "A range of plausible parameter values",
              explanation:
                "A confidence interval gives a range of values estimated using a statistical procedure.",
            },
            {
              question: "What affects the width of a confidence interval?",
              options: [
                "Sample size and variability",
                "Font color only",
                "Worksheet name only",
                "Computer wallpaper",
              ],
              answer: "Sample size and variability",
              explanation:
                "Sample size and variability influence the uncertainty of an estimate.",
            },
            {
              question: "What does a 95% confidence level describe?",
              options: [
                "Long-run coverage of the interval procedure",
                "A 95% probability that every sample value is correct",
                "A guarantee of no sampling error",
                "A requirement that 95% of rows are complete",
              ],
              answer: "Long-run coverage of the interval procedure",
              explanation:
                "Across repeated samples, the procedure covers the fixed parameter in approximately 95% of intervals under its assumptions.",
            },
            {
              question: "Which information should accompany a confidence interval?",
              options: [
                "Parameter and measurement units",
                "Desktop background",
                "Keyboard model",
                "Browser theme",
              ],
              answer: "Parameter and measurement units",
              explanation:
                "The parameter and units explain what the interval estimates.",
            },
            {
              question: "Does a confidence interval guarantee that one calculated interval contains the true parameter?",
              options: [
                "No",
                "Yes, always",
                "Only for small datasets",
                "Only for categorical variables",
              ],
              answer: "No",
              explanation:
                "The confidence level describes the long-run performance of the procedure, not a guarantee for one particular interval.",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Exploratory Data Analysis and Visualization",
      description:
        "Learn how to inspect datasets, summarize distributions, create visualizations, and communicate data insights.",
      assignment:
        "Perform EDA on a student performance dataset and prepare charts, descriptive statistics, and a written insights report.",

      lessons: [
        {
          title: "Introduction to Exploratory Data Analysis",
          duration: "35 minutes",
          introduction:
            "Exploratory Data Analysis, or EDA, is the process of examining and summarizing a dataset before detailed modeling or decision-making. It helps reveal patterns, unusual values, and relationships.",

          sections: [
            {
              heading: "What is EDA?",
              content:
                "EDA uses summaries, visualizations, and data inspection to understand a dataset and identify potential quality issues or patterns.",
            },
            {
              heading: "Univariate Analysis",
              content:
                "Univariate analysis examines one variable at a time. It may use frequency tables, histograms, and descriptive statistics.",
            },
            {
              heading: "Bivariate and Multivariate Analysis",
              content:
                "Bivariate analysis examines two variables, while multivariate analysis studies more than two variables together.",
            },
          ],

          example:
            "For student performance data:\n\nUnivariate: Distribution of marks.\nBivariate: Study hours compared with marks.\nMultivariate: Marks compared with study hours, attendance, and assignment scores.",

          exercise:
            "Choose a student dataset. Perform univariate analysis on marks, bivariate analysis on study hours and marks, and multivariate analysis using three or more variables.",

          quiz: [
            {
              question: "What does EDA stand for?",
              options: [
                "Exploratory Data Analysis",
                "Electronic Data Access",
                "Extended Database Application",
                "External Data Arrangement",
              ],
              answer: "Exploratory Data Analysis",
              explanation:
                "EDA means Exploratory Data Analysis.",
            },
            {
              question: "What is the main purpose of EDA?",
              options: [
                "Understand patterns and characteristics in data",
                "Create operating systems",
                "Design computer hardware",
                "Remove every numerical value",
              ],
              answer: "Understand patterns and characteristics in data",
              explanation:
                "EDA helps reveal patterns, distributions, relationships, and unusual observations.",
            },
            {
              question: "What does univariate analysis examine?",
              options: [
                "One variable",
                "Two variables",
                "Only three variables",
                "Every possible dataset",
              ],
              answer: "One variable",
              explanation:
                "Univariate analysis focuses on a single variable.",
            },
            {
              question: "What does bivariate analysis examine?",
              options: [
                "Two variables",
                "One variable",
                "Only missing values",
                "Only text formatting",
              ],
              answer: "Two variables",
              explanation:
                "Bivariate analysis examines relationships or comparisons involving two variables.",
            },
            {
              question: "Which is a common EDA technique?",
              options: [
                "Creating visualizations",
                "Installing operating systems",
                "Changing keyboard settings",
                "Editing computer wallpapers",
              ],
              answer: "Creating visualizations",
              explanation:
                "Visualizations help reveal distributions and relationships in a dataset.",
            },
          ],
        },

        {
          title: "Statistical Summaries Using Python",
          duration: "40 minutes",
          introduction:
            "Python libraries make it easier to calculate descriptive statistics and inspect datasets. Pandas provides convenient methods for summarizing numerical and categorical information.",

          sections: [
            {
              heading: "Descriptive Summary",
              content:
                "The pandas describe() method summarizes numerical columns using count, mean, standard deviation, minimum, quartiles, and maximum.",
            },
            {
              heading: "Frequency Counts",
              content:
                "value_counts() counts how frequently each distinct value occurs. It is useful for analyzing categories and repeated values.",
            },
            {
              heading: "Grouping Data",
              content:
                "groupby() groups observations according to one or more columns. Aggregation functions can then calculate statistics for each group.",
            },
          ],

          example:
            "import pandas as pd\n\ndf = pd.DataFrame({\n    'Department': ['ECE', 'CSE', 'ECE', 'CSE'],\n    'Marks': [80, 90, 75, 85]\n})\n\nprint(df.describe())\nprint(df['Department'].value_counts())\nprint(df.groupby('Department')['Marks'].mean())",

          exercise:
            "Load a dataset using pandas. Generate descriptive statistics, category frequency counts, and average marks by department.",

          quiz: [
            {
              question: "Which pandas method generates descriptive statistics?",
              options: [
                "describe()",
                "rename()",
                "drop()",
                "insert()",
              ],
              answer: "describe()",
              explanation:
                "describe() provides summary statistics for selected columns.",
            },
            {
              question: "Which method counts occurrences of unique values?",
              options: [
                "value_counts()",
                "to_datetime()",
                "dropna()",
                "astype()",
              ],
              answer: "value_counts()",
              explanation:
                "value_counts() returns the frequency of each distinct value.",
            },
            {
              question: "What does groupby() do?",
              options: [
                "Groups records for analysis",
                "Deletes all columns",
                "Changes every value to text",
                "Creates random values",
              ],
              answer: "Groups records for analysis",
              explanation:
                "groupby() divides observations into groups for calculations and summaries.",
            },
            {
              question: "Which statistic describes the average?",
              options: [
                "Mean",
                "Range",
                "Minimum",
                "Maximum",
              ],
              answer: "Mean",
              explanation:
                "Mean is the arithmetic average of the observations.",
            },
            {
              question: "Which value represents the highest observation?",
              options: [
                "Maximum",
                "Minimum",
                "Median",
                "Mode",
              ],
              answer: "Maximum",
              explanation:
                "The maximum is the largest value in the dataset.",
            },
          ],
        },

        {
          title: "Data Visualization for EDA",
          duration: "45 minutes",
          introduction:
            "Data visualization converts information into graphical form. Charts help identify distributions, comparisons, trends, and relationships that may be difficult to notice in tables.",

          sections: [
            {
              heading: "Histogram",
              content:
                "A histogram shows the distribution of numerical values using intervals called bins. It helps identify shape, spread, and possible unusual values.",
            },
            {
              heading: "Boxplot",
              content:
                "A boxplot summarizes a distribution using quartiles, median, and whiskers. It can also display observations flagged as potential outliers.",
            },
            {
              heading: "Scatter Plot and Bar Chart",
              content:
                "Scatter plots display relationships between two numerical variables. Bar charts compare values across categories.",
            },
          ],

          example:
            "import matplotlib.pyplot as plt\n\nmarks = [55, 60, 65, 70, 75, 80, 85]\n\nplt.hist(marks, bins=5)\nplt.title('Distribution of Student Marks')\nplt.xlabel('Marks')\nplt.ylabel('Frequency')\nplt.show()",

          exercise:
            "Create a histogram, boxplot, bar chart, and scatter plot using a sample dataset. Write one observation from each chart.",

          quiz: [
            {
              question: "Which chart displays the distribution of numerical data?",
              options: [
                "Histogram",
                "Flowchart",
                "Organization chart",
                "Gantt chart",
              ],
              answer: "Histogram",
              explanation:
                "A histogram groups numerical values into intervals and displays their frequencies.",
            },
            {
              question: "Which chart summarizes quartiles and can highlight potential outliers?",
              options: [
                "Boxplot",
                "Pie chart",
                "Flowchart",
                "Timeline",
              ],
              answer: "Boxplot",
              explanation:
                "A boxplot displays the median, quartiles, and potential outlying observations.",
            },
            {
              question: "Which chart is suitable for comparing two numerical variables?",
              options: [
                "Scatter plot",
                "Pie chart",
                "Organization chart",
                "Calendar",
              ],
              answer: "Scatter plot",
              explanation:
                "A scatter plot displays paired numerical values.",
            },
            {
              question: "Which chart is commonly used to compare categories?",
              options: [
                "Bar chart",
                "Histogram only",
                "Flowchart",
                "Network diagram",
              ],
              answer: "Bar chart",
              explanation:
                "Bar charts compare quantities across different categories.",
            },
            {
              question: "What is a bin in a histogram?",
              options: [
                "An interval grouping numerical values",
                "A column heading",
                "A missing observation",
                "A chart title",
              ],
              answer: "An interval grouping numerical values",
              explanation:
                "Bins divide the numerical range into intervals for frequency counting.",
            },
          ],
        },

        {
          title: "Final Project: Student Performance EDA",
          duration: "60 minutes",
          introduction:
            "In this final lesson, you will apply statistical analysis and EDA techniques to a student performance dataset. You will calculate descriptive statistics, explore distributions, analyze relationships, and present useful findings.",

          sections: [
            {
              heading: "Project Dataset",
              content:
                "Use a student performance dataset with student ID, department, attendance, study hours, assignment scores, examination marks, and final results.",
            },
            {
              heading: "Statistical Analysis",
              content:
                "Calculate mean, median, mode, minimum, maximum, range, variance, standard deviation, and quartiles for suitable numerical columns.",
            },
            {
              heading: "Exploratory Analysis",
              content:
                "Examine distributions, compare departments, explore the relationship between study hours and marks, and investigate unusual observations.",
            },
            {
              heading: "Final Report",
              content:
                "Prepare visualizations and summarize the findings. Explain limitations and avoid claiming causation from correlation alone.",
            },
          ],

          example:
            "Project outputs:\n1. student_performance.csv\n2. descriptive_statistics.xlsx\n3. eda_analysis.ipynb\n4. charts/\n5. student_performance_report.pdf",

          exercise:
            "Complete the Student Performance EDA project. Submit your dataset, statistical summaries, charts, analysis notebook, and findings report.",

          quiz: [
            {
              question: "What is the main objective of the final EDA project?",
              options: [
                "Explore and explain student performance data",
                "Create a gaming website",
                "Install an operating system",
                "Design a computer network",
              ],
              answer: "Explore and explain student performance data",
              explanation:
                "The project applies statistics and visualization to understand student performance.",
            },
            {
              question: "Which measure describes the average student marks?",
              options: [
                "Mean",
                "Range",
                "Minimum",
                "Maximum",
              ],
              answer: "Mean",
              explanation:
                "The mean provides the arithmetic average of student marks.",
            },
            {
              question: "Which chart can show the relationship between study hours and marks?",
              options: [
                "Scatter plot",
                "Pie chart",
                "Flowchart",
                "Gantt chart",
              ],
              answer: "Scatter plot",
              explanation:
                "A scatter plot displays paired study-hour and marks observations.",
            },
            {
              question: "What should be included in the final EDA report?",
              options: [
                "Statistical summaries and visual findings",
                "Only the computer wallpaper",
                "Only the dataset filename",
                "Unrelated software screenshots",
              ],
              answer: "Statistical summaries and visual findings",
              explanation:
                "The report should communicate the analysis and its main findings.",
            },
            {
              question: "What should be considered when interpreting a relationship between two variables?",
              options: [
                "Correlation does not establish causation",
                "Every correlation proves causation",
                "All unusual values must be deleted",
                "A chart always proves a hypothesis",
              ],
              answer: "Correlation does not establish causation",
              explanation:
                "An observed association does not by itself establish a cause-and-effect relationship.",
            },
          ],
        },
      ],
    },
  ],
};

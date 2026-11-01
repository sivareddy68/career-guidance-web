
export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type Lesson = {
  id: string;
  title: string;
  introduction: string;
  sections: { heading: string; content: string }[];
  example?: string;
  exercise: string;
  quiz: QuizQuestion[];
};

export type CourseWeek = {
  title: string;
  lessons: Lesson[];
  assignment: string;
};

export type Course = {
  title: string;
  description: string;
  project: string;
  weeks: CourseWeek[];
};

type LessonInput = {
  id: string;
  title: string;
  introduction: string;
  concept: string;
  example: string;
  exercise: string;
};

function makeQuiz(topic: string, concept: string): QuizQuestion[] {
  const items = [
    {
      question: `What is the main purpose of ${topic}?`,
      answer: concept,
      wrong: [
        "To remove the need for data",
        "To guarantee perfect predictions",
        "To avoid testing a model",
      ],
      explanation: `${topic} helps develop a reliable machine-learning workflow. ${concept}`,
    },
    {
      question: `Before applying ${topic}, what should you do?`,
      answer: "Understand the data and define the problem",
      wrong: [
        "Always select the most complex model",
        "Ignore missing values",
        "Evaluate only on training data",
      ],
      explanation:
        "Understanding the data and problem helps you choose an appropriate method.",
    },
    {
      question: `Which practice improves the reliability of ${topic}?`,
      answer: "Validate assumptions and check the results",
      wrong: [
        "Assume every result is correct",
        "Skip evaluation",
        "Use test data to repeatedly tune the model",
      ],
      explanation:
        "Validation and careful evaluation help reveal mistakes and unreliable results.",
    },
    {
      question: `Which is a common mistake when working with ${topic}?`,
      answer: "Ignoring data quality or evaluation limitations",
      wrong: [
        "Documenting the workflow",
        "Checking edge cases",
        "Comparing against a baseline",
      ],
      explanation:
        "Data-quality issues and evaluation mistakes can make a model appear better than it really is.",
    },
    {
      question: `How should you finish a practical task involving ${topic}?`,
      answer: "Test the result and document limitations",
      wrong: [
        "Assume it works without testing",
        "Delete the evaluation results",
        "Report only the best result",
      ],
      explanation:
        "Testing and documenting limitations make the result easier to trust and reproduce.",
    },
  ];

  return items.map((item) => ({
    question: item.question,
    options: [item.answer, ...item.wrong],
    answer: item.answer,
    explanation: item.explanation,
  }));
}

function makeLesson(input: LessonInput): Lesson {
  return {
    id: input.id,
    title: input.title,
    introduction: input.introduction,
    sections: [
      {
        heading: "Core concept",
        content: input.concept,
      },
      {
        heading: "Practical workflow",
        content:
          "Start with a small dataset, identify the expected outcome, apply the method, and inspect the result. Record important assumptions and compare the outcome against a simple baseline where appropriate.",
      },
      {
        heading: "Common mistakes",
        content:
          "Check for missing or incorrect data, avoid using information that would not be available at prediction time, and keep evaluation data separate from the data used to make modelling decisions.",
      },
    ],
    example: input.example,
    exercise: input.exercise,
    quiz: makeQuiz(input.title, input.concept),
  };
}

function lesson(
  id: string,
  title: string,
  introduction: string,
  concept: string,
  example: string,
  exercise: string
): Lesson {
  return makeLesson({
    id,
    title,
    introduction,
    concept,
    example,
    exercise,
  });
}

export const machineLearningCourse: Course = {
  title: "Machine Learning",
  description:
    "Learn machine learning through data preparation, algorithms, model training, evaluation, and responsible deployment.",
  project:
    "Build a student-performance prediction model, evaluate it properly, and document its limitations.",

  weeks: [
    {
      title: "Week 1: Machine Learning Foundations",
      assignment:
        "Choose a suitable dataset, identify its features and target, inspect data quality, and prepare a short dataset report.",

      lessons: [
        lesson(
          "lesson-1",
          "Introduction to Machine Learning",
          "Machine learning allows computers to learn patterns from examples and use those patterns to make predictions or discover structure.",
          "Supervised learning uses labelled examples, unsupervised learning explores unlabelled data, and reinforcement learning studies decisions using feedback or rewards. Choose an approach based on the problem.",
          `# Example: a simple rule-based prediction\nhours_studied = 5\nprint("Hours studied:", hours_studied)\n# A trained ML model would learn patterns from many examples.`,
          "Describe one real-world prediction problem. Identify the input information, desired output, and why machine learning might be useful."
        ),
        lesson(
          "lesson-2",
          "Features, Targets, and Problem Types",
          "A well-defined machine-learning problem identifies what information the model receives and what it must predict.",
          "Features are input variables and the target is the value to predict. Classification predicts categories, regression predicts numerical values, and clustering groups examples without known target labels.",
          `features = ["attendance", "study_hours", "previous_marks"]\ntarget = "final_marks"\nprint("Inputs:", features)\nprint("Target:", target)`,
          "For a house-price, spam-detection, and customer-grouping problem, identify the features and select the appropriate problem type."
        ),
        lesson(
          "lesson-3",
          "Data Cleaning and Preparation",
          "Data quality strongly affects machine-learning results. Real datasets may contain missing values, duplicates, inconsistent formats, or invalid records.",
          "Inspect columns and data types, identify missing values, remove genuine duplicates when appropriate, and choose a documented strategy for missing data. Fit preprocessing steps using training data only.",
          `import pandas as pd\n\ndf = pd.DataFrame({\n    "hours": [2, 4, None, 5],\n    "marks": [50, 65, 70, 80]\n})\nprint(df.isna().sum())\ndf["hours"] = df["hours"].fillna(df["hours"].median())\nprint(df)`,
          "Create a small dataset with a missing value and a duplicate row. Inspect the issues and document how you would handle them."
        ),
        lesson(
          "lesson-4",
          "Exploratory Data Analysis",
          "Exploratory data analysis helps you understand a dataset before choosing and training a model.",
          "Use summary statistics, distributions, category counts, and feature relationships to find patterns and data-quality concerns. Correlation can show association but does not prove causation.",
          `import pandas as pd\n\ndf = pd.DataFrame({\n    "hours": [1, 2, 3, 4],\n    "marks": [40, 50, 65, 75]\n})\nprint(df.describe())\nprint(df.corr(numeric_only=True))`,
          "Calculate summary statistics for a dataset and write three observations. Explain one limitation of interpreting correlations."
        ),
      ],
    },

    {
      title: "Week 2: Core Machine-Learning Algorithms",
      assignment:
        "Train two suitable baseline models on a dataset and compare their results using a consistent data split.",

      lessons: [
        lesson(
          "lesson-5",
          "Training and Testing Data",
          "A model must be evaluated on examples that were not used to fit it, so its performance on new data can be estimated.",
          "A training set fits model parameters. A validation set helps select models or settings, while a test set provides a final evaluation. Random splitting may need special handling for time-dependent or grouped data.",
          `from sklearn.model_selection import train_test_split\n\nX = [[1], [2], [3], [4], [5], [6]]\ny = [10, 20, 30, 40, 50, 60]\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.33, random_state=42\n)\nprint(len(X_train), len(X_test))`,
          "Split a sample dataset into training and testing sets. Explain why test data should not be used repeatedly to tune the model."
        ),
        lesson(
          "lesson-6",
          "Linear and Logistic Regression",
          "Regression algorithms learn relationships between input variables and an output.",
          "Linear regression predicts a numerical value using a linear relationship. Logistic regression estimates class probabilities and is commonly used for classification. Feature scaling and suitable evaluation can matter depending on the model and dataset.",
          `from sklearn.linear_model import LinearRegression\n\nX = [[1], [2], [3], [4]]\ny = [2, 4, 6, 8]\nmodel = LinearRegression()\nmodel.fit(X, y)\nprint(model.predict([[5]]))`,
          "Fit a linear regression model on a small numeric dataset. Predict one new value and compare it with the expected value."
        ),
        lesson(
          "lesson-7",
          "Decision Trees and Random Forests",
          "Tree-based models make predictions by learning decision rules from data.",
          "A decision tree splits examples according to feature values. Deep trees may overfit. A random forest combines predictions from multiple trees to improve robustness on many datasets.",
          `from sklearn.tree import DecisionTreeRegressor\n\nX = [[1], [2], [3], [4]]\ny = [10, 20, 30, 40]\nmodel = DecisionTreeRegressor(random_state=42, max_depth=2)\nmodel.fit(X, y)\nprint(model.predict([[2.5]]))`,
          "Train a shallow decision tree and a deeper tree on the same dataset. Compare their training and test performance."
        ),
        lesson(
          "lesson-8",
          "Clustering and Unsupervised Learning",
          "Unsupervised learning explores structure in data without requiring a labelled target for every example.",
          "K-means groups data around cluster centres. The choice of cluster count, feature scaling, and outliers can affect the result. A cluster is not automatically a meaningful real-world category; interpretation requires context.",
          `from sklearn.cluster import KMeans\n\nX = [[1, 1], [1.2, 1.1], [8, 8], [8.2, 8.1]]\nmodel = KMeans(n_clusters=2, random_state=42, n_init=10)\nprint(model.fit_predict(X))`,
          "Cluster a small dataset with two groups. Describe what the groups appear to represent and why clustering alone cannot prove that interpretation."
        ),
      ],
    },

    {
      title: "Week 3: Model Training and Evaluation",
      assignment:
        "Evaluate a model using suitable metrics, explain its errors, and recommend an improvement supported by evidence.",

      lessons: [
        lesson(
          "lesson-9",
          "The Model Training Workflow",
          "A repeatable training workflow makes it easier to compare models and identify problems.",
          "Separate features and targets, split the data, fit preprocessing and model steps on training data, make predictions, and evaluate on held-out data. Pipelines help keep preprocessing consistent.",
          `from sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\n# Example for a numeric classification dataset:\n# model = make_pipeline(StandardScaler(), LogisticRegression())\n# model.fit(X_train, y_train)`,
          "Draw the stages of a model-training workflow and explain where preprocessing, fitting, prediction, and evaluation occur."
        ),
        lesson(
          "lesson-10",
          "Classification Metrics",
          "Classification metrics describe different kinds of prediction success and error.",
          "Accuracy measures the fraction of correct predictions. Precision measures how many predicted positives are correct. Recall measures how many actual positives are found. F1 balances precision and recall; the confusion matrix displays error counts.",
          `from sklearn.metrics import classification_report, confusion_matrix\n\ny_true = [1, 0, 1, 1, 0]\ny_pred = [1, 0, 0, 1, 1]\nprint(confusion_matrix(y_true, y_pred))\nprint(classification_report(y_true, y_pred, zero_division=0))`,
          "Calculate a confusion matrix for sample predictions and explain whether precision or recall is more important for a chosen use case."
        ),
        lesson(
          "lesson-11",
          "Regression Metrics",
          "Regression models predict numeric values, so evaluation focuses on the size and pattern of prediction errors.",
          "MAE is the average absolute error. MSE averages squared errors and penalises large errors more strongly. RMSE is in the target's units. R-squared compares model performance with a simple mean-based baseline under its standard definition.",
          `from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\n\ny_true = [10, 20, 30]\ny_pred = [12, 18, 33]\nprint(mean_absolute_error(y_true, y_pred))\nprint(mean_squared_error(y_true, y_pred) ** 0.5)\nprint(r2_score(y_true, y_pred))`,
          "Calculate MAE and RMSE for a set of actual and predicted values. Explain how one unusually large error affects these metrics."
        ),
        lesson(
          "lesson-12",
          "Overfitting and Cross-Validation",
          "A model can perform well on training examples but poorly on unseen examples when it learns noise or overly specific patterns.",
          "Compare training and validation performance to diagnose overfitting and underfitting. Cross-validation repeats evaluation across data folds. Choose complexity and hyperparameters using validation data, not the final test set.",
          `from sklearn.model_selection import cross_val_score\nfrom sklearn.tree import DecisionTreeClassifier\n\n# X and y should contain a suitable labelled dataset.\n# scores = cross_val_score(\n#     DecisionTreeClassifier(max_depth=3), X, y, cv=5\n# )\n# print(scores.mean())`,
          "Compare a simple and a complex model. Describe the signs you would look for to decide whether either model is overfitting."
        ),
      ],
    },

    {
      title: "Week 4: Improving and Deploying Models",
      assignment:
        "Complete an end-to-end machine-learning project with a documented pipeline, evaluation, limitations, and responsible-use considerations.",

      lessons: [
        lesson(
          "lesson-13",
          "Feature Engineering",
          "Feature engineering transforms raw information into useful model inputs.",
          "Examples include extracting date parts, combining meaningful measurements, encoding categories, and scaling numeric features. Avoid target leakage and create features that would genuinely be available when predictions are made.",
          `import pandas as pd\n\ndf = pd.DataFrame({"study_minutes": [60, 90, 120]})\ndf["study_hours"] = df["study_minutes"] / 60\nprint(df)`,
          "Create two useful features from a sample dataset and explain why each might help the model."
        ),
        lesson(
          "lesson-14",
          "Hyperparameter Tuning",
          "Hyperparameters control model configuration and can affect performance, complexity, and training time.",
          "Grid search and random search compare candidate settings using cross-validation or validation data. Define a suitable scoring metric and avoid choosing settings based on the final test results.",
          `from sklearn.model_selection import GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\n\n# search = GridSearchCV(\n#     DecisionTreeClassifier(random_state=42),\n#     {"max_depth": [2, 3, 5]}, cv=5\n# )\n# search.fit(X_train, y_train)\n# print(search.best_params_)`,
          "Choose three hyperparameters for a model and design a small tuning experiment with a clear evaluation metric."
        ),
        lesson(
          "lesson-15",
          "Pipelines and Saving Models",
          "A deployed model must use the same preprocessing and feature order expected during training.",
          "A pipeline bundles preprocessing and prediction steps. Save model artifacts only from trusted workflows, record dependency versions, and load only files you trust because some serialization formats can execute code when loaded.",
          `from sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression\nimport joblib\n\n# model = make_pipeline(StandardScaler(), LinearRegression())\n# model.fit(X_train, y_train)\n# joblib.dump(model, "model.joblib")`,
          "Design a pipeline for a dataset and document how you would save it, record its dependencies, and verify predictions after loading."
        ),
        lesson(
          "lesson-16",
          "Deployment, Monitoring, and Responsible ML",
          "A model's work does not end after training. Deployed systems need monitoring, maintenance, and safeguards.",
          "Monitor data drift, prediction quality when labels become available, latency, failures, and relevant subgroup performance. Protect personal data, document limitations, and use human review when decisions could significantly affect people.",
          `# Example deployment checklist\nchecks = [\n    "Validate incoming data",\n    "Measure prediction latency",\n    "Monitor data drift",\n    "Review errors and subgroup performance",\n    "Document limitations",\n]\nprint("\\n".join(checks))`,
          "Write a deployment checklist that covers input validation, monitoring, privacy, model limitations, and when a human should review a prediction."
        ),
      ],
    },
  ],
};

export default machineLearningCourse;

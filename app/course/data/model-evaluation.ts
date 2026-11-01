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

type QuizItem = [
  question: string,
  correct: string,
  wrong1: string,
  wrong2: string,
  wrong3: string,
  explanation: string
];

function makeQuiz(items: QuizItem[]): QuizQuestion[] {
  return items.map(([question, answer, wrong1, wrong2, wrong3, explanation]) => ({
    question,
    options: [answer, wrong1, wrong2, wrong3],
    answer,
    explanation,
  }));
}

function makeLesson(
  id: string,
  title: string,
  introduction: string,
  sections: { heading: string; content: string }[],
  example: string,
  exercise: string,
  quiz: QuizItem[]
): Lesson {
  return {
    id,
    title,
    introduction,
    sections,
    example,
    exercise,
    quiz: makeQuiz(quiz),
  };
}

export const modelEvaluationCourse: Course = {
  title: "Model Evaluation",
  description:
    "Learn how to evaluate machine learning models using classification and regression metrics, confusion matrices, precision, recall, F1-score, ROC-AUC, cross-validation, error analysis, model selection, and responsible evaluation.",
  project:
    "Build a complete model evaluation report for a student-performance prediction model. Compare multiple models, select appropriate metrics, analyse errors, prevent data leakage, and justify the final model using evidence.",

  weeks: [
    // WEEK 1
    {
      title: "Foundations of Model Evaluation",
      assignment:
        "Explain the difference between training and testing, evaluate a simple classifier, and prepare a confusion matrix with accuracy, precision, recall, and F1-score.",

      lessons: [
        makeLesson(
          "lesson-1",
          "Introduction to Model Evaluation",
          "Model evaluation is the process of measuring how well a machine learning model performs on data. A model that performs well on its training data may still fail on new examples. Evaluation helps us understand whether a model is useful, reliable, and appropriate for its intended purpose.",
          [
            {
              heading: "What is model evaluation?",
              content:
                "Model evaluation uses data and measurable criteria to assess a model's predictions. For a student-performance model, evaluation might measure how well it predicts whether a student needs additional academic support. For a price-prediction model, evaluation might measure the difference between predicted and actual prices. The correct evaluation method depends on the problem.",
            },
            {
              heading: "Training performance versus generalization",
              content:
                "Training performance measures predictions on examples used to fit the model. Generalization describes performance on previously unseen data from the intended population. A model can memorize training examples and achieve excellent training results while making poor predictions on new data.",
            },
            {
              heading: "Evaluation metrics",
              content:
                "Metrics summarize different aspects of model performance. Accuracy measures the fraction of correct classification predictions. Precision measures how often positive predictions are correct. Recall measures how many actual positive examples are found. Regression metrics measure numerical prediction errors. No single metric answers every question.",
            },
            {
              heading: "Why evaluation matters",
              content:
                "Evaluation supports model selection, debugging, risk assessment, and deployment decisions. It can reveal whether a model is too complex, misses important cases, behaves differently across groups, or performs worse than a simple baseline. Metrics should be interpreted alongside the real consequences of prediction errors.",
            },
          ],
          `actual = ["yes", "no", "yes", "yes", "no"]\npredicted = ["yes", "no", "no", "yes", "no"]\n\ncorrect = sum(a == p for a, p in zip(actual, predicted))\naccuracy = correct / len(actual)\n\nprint("Correct predictions:", correct)\nprint("Accuracy:", accuracy)`,
          "Explain model evaluation in your own words. Describe a classification problem and a regression problem, and explain why checking training performance alone is insufficient.",
          [
            ["What is the main purpose of model evaluation?", "Measure how well a model performs against suitable criteria", "Guarantee that every prediction is correct", "Increase the number of training rows automatically", "Replace the need for data preparation", "Evaluation measures model performance; it cannot guarantee perfect predictions."],
            ["What does generalization describe?", "Performance on previously unseen relevant data", "Performance only on the training examples", "The number of variables in a dataset", "The time required to install Python", "Generalization concerns how well a learned model works on new data."],
            ["Which is a regression problem?", "Predicting a house price", "Classifying an email as spam or not spam", "Identifying whether an image contains a cat", "Predicting whether a student passes", "A house price is a numerical quantity, making this a regression task."],
            ["Why can training accuracy be misleading?", "A model may memorize training examples and fail on new data", "Training accuracy always equals zero", "Training data cannot contain labels", "Accuracy cannot be calculated for training data", "Overfitting can produce excellent training performance but poor generalization."],
            ["Which statement about evaluation metrics is correct?", "The appropriate metric depends on the task and its error costs", "Accuracy is always the best metric", "All metrics measure exactly the same thing", "Metrics eliminate the need to inspect data", "Different metrics capture different performance characteristics and trade-offs."],
          ]
        ),

        makeLesson(
          "lesson-2",
          "Training, Validation and Test Sets",
          "A dataset is often divided into separate subsets so that model fitting, model selection, and final evaluation do not all rely on the same examples.",
          [
            {
              heading: "Training set",
              content:
                "The training set is used to learn model parameters. For example, a classifier estimates relationships between student attendance, study time, and an outcome using training examples. Preprocessing steps such as scaling or imputation must also be fitted using training data only.",
            },
            {
              heading: "Validation set",
              content:
                "A validation set helps compare candidate models, tune hyperparameters, and select decision thresholds. Because repeated decisions are made using validation results, the chosen model may become adapted to that set. Validation performance should not be presented as an untouched final test result.",
            },
            {
              heading: "Test set",
              content:
                "The test set is reserved for final assessment after the model and its evaluation choices have been settled. It should represent the intended prediction setting. Repeatedly checking test results and changing the model in response gradually turns the test set into another validation set.",
            },
            {
              heading: "Splitting correctly",
              content:
                "Random splitting can be appropriate for independent, similarly distributed examples. Classification tasks with imbalanced labels may benefit from stratified splitting. Time-dependent data generally requires chronological splitting. Data from the same person, household, device, or institution may need group-aware splitting to avoid related examples crossing between subsets.",
            },
          ],
          `from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y,\n    test_size=0.2,\n    random_state=42,\n    stratify=y\n)\n\nprint(len(X_train), len(X_test))`,
          "Create a proposed train-validation-test split for a classification dataset. Explain what each subset is used for and choose an appropriate splitting strategy for either ordinary independent data or time-series data.",
          [
            ["Which subset is normally used to fit model parameters?", "Training set", "Test set only", "Validation set only", "A set containing only predictions", "The model learns its parameters from training examples."],
            ["What is a common purpose of a validation set?", "Selecting models and tuning hyperparameters", "Providing an untouched final score after unlimited experimentation", "Replacing all training data", "Guaranteeing that labels are correct", "Validation results help guide model selection and tuning."],
            ["Why should the test set be reserved until final evaluation?", "Repeatedly using it for decisions can bias the reported performance", "It must contain only incorrect predictions", "It is always smaller than one training example", "It automatically improves model parameters", "Repeated test-guided changes undermine its role as an independent final assessment."],
            ["Which splitting strategy can help preserve class proportions?", "Stratified splitting", "Sorting every row by its target and taking only the first class", "Duplicating all minority examples into the test set", "Removing every label", "Stratification aims to preserve class proportions across subsets."],
            ["What is often appropriate for forecasting future values from past observations?", "Chronological splitting", "Randomly mixing all future and past observations without considering time", "Training on the test labels", "Using the same rows for every subset", "Chronological evaluation respects the direction of time and better reflects forecasting."],
          ]
        ),

        makeLesson(
          "lesson-3",
          "Confusion Matrix and Classification Outcomes",
          "A confusion matrix compares actual class labels with predicted class labels. It reveals which kinds of classification errors a model makes instead of summarizing every outcome in one number.",
          [
            {
              heading: "True positives and true negatives",
              content:
                "A true positive (TP) is a positive case correctly predicted as positive. A true negative (TN) is a negative case correctly predicted as negative. The meaning of positive depends on the problem; for example, it could mean a message is spam or a student needs support.",
            },
            {
              heading: "False positives and false negatives",
              content:
                "A false positive (FP) occurs when a negative case is predicted positive. A false negative (FN) occurs when a positive case is predicted negative. These mistakes can have different consequences. An unnecessary warning may cost time, while a missed warning may fail to provide needed support.",
            },
            {
              heading: "Matrix layout",
              content:
                "In a common binary-classification layout, rows represent actual labels and columns represent predicted labels. However, some libraries and reports use a different convention. Always check the axis labels before interpreting the cells.",
            },
            {
              heading: "Beyond binary classification",
              content:
                "For multiclass classification, a confusion matrix contains one row and one column per class. Diagonal cells are correct predictions, while off-diagonal cells show which classes are confused. Per-class metrics can reveal weaknesses hidden by an overall score.",
            },
          ],
          `from sklearn.metrics import confusion_matrix\n\nactual = [1, 1, 0, 0, 1, 0]\npredicted = [1, 0, 0, 0, 1, 1]\n\nmatrix = confusion_matrix(actual, predicted, labels=[0, 1])\nprint(matrix)\n\n# With labels [0, 1], a binary matrix is commonly:\n# [[TN, FP],\n#  [FN, TP]]`,
          "Create a confusion matrix for 12 fictional predictions. Label TP, TN, FP, and FN, then explain which error would be more costly for a student-support alert system and why.",
          [
            ["What is a true positive?", "An actual positive correctly predicted as positive", "An actual negative incorrectly predicted positive", "An actual positive predicted negative", "An actual negative correctly predicted negative", "A true positive is a correctly identified positive example."],
            ["What is a false positive?", "A negative example predicted as positive", "A positive example predicted as positive", "A negative example predicted as negative", "A positive example predicted as negative", "A false positive is a positive prediction that is incorrect."],
            ["What is a false negative?", "A positive example predicted as negative", "A negative example predicted as positive", "A positive example predicted as positive", "A negative example predicted as negative", "A false negative means the model misses an actual positive case."],
            ["In a common binary confusion matrix, what do diagonal cells represent?", "Correct predictions", "Only false positives", "Only false negatives", "Missing input features", "The diagonal contains correctly classified examples for each class."],
            ["Why must you check confusion-matrix axis labels?", "Libraries and reports can use different row and column conventions", "The matrix never contains correct predictions", "Axis labels determine the model's training speed", "A confusion matrix cannot contain class names", "Knowing the axis convention prevents misinterpreting TP, TN, FP, and FN."],
          ]
        ),

        makeLesson(
          "lesson-4",
          "Accuracy, Precision, Recall and Specificity",
          "These metrics describe different aspects of classification performance. Understanding their formulas and limitations helps you choose a metric that matches the problem.",
          [
            {
              heading: "Accuracy",
              content:
                "Accuracy = (TP + TN) / (TP + TN + FP + FN). It measures the fraction of all predictions that are correct. It can be misleading when one class is much more common than another. A model that predicts every case as the majority class may achieve high accuracy while missing the minority class completely.",
            },
            {
              heading: "Precision",
              content:
                "Precision = TP / (TP + FP), when the denominator is nonzero. It answers: among the cases predicted positive, what fraction were actually positive? Higher precision means fewer false positives relative to positive predictions. It matters when unnecessary positive alerts or interventions are costly.",
            },
            {
              heading: "Recall or sensitivity",
              content:
                "Recall = TP / (TP + FN), when the denominator is nonzero. It answers: among all actual positive cases, what fraction did the model find? High recall means fewer actual positives were missed. It is important when failing to detect a positive case has a significant cost.",
            },
            {
              heading: "Specificity and trade-offs",
              content:
                "Specificity = TN / (TN + FP), when the denominator is nonzero. It measures the fraction of actual negatives correctly identified. Precision and recall can move in opposite directions as a decision threshold changes. Always report the relevant denominator and consider the consequences of each error.",
            },
          ],
          `TP, TN, FP, FN = 40, 50, 10, 20\n\naccuracy = (TP + TN) / (TP + TN + FP + FN)\nprecision = TP / (TP + FP)\nrecall = TP / (TP + FN)\nspecificity = TN / (TN + FP)\n\nprint("Accuracy:", accuracy)\nprint("Precision:", precision)\nprint("Recall:", recall)\nprint("Specificity:", specificity)`,
          "Calculate accuracy, precision, recall, and specificity using the supplied example. Explain why a high-recall model might be preferred when missing positive cases is especially costly.",
          [
            ["What does accuracy measure?", "The fraction of all predictions that are correct", "The fraction of positive predictions that are correct", "The fraction of actual positives found", "The fraction of actual negatives found only", "Accuracy counts correct positive and negative predictions over all examples."],
            ["What is the precision formula?", "TP / (TP + FP)", "TP / (TP + FN)", "TN / (TN + FN)", "(TP + TN) / total", "Precision divides true positives by all positive predictions."],
            ["What is the recall formula?", "TP / (TP + FN)", "TP / (TP + FP)", "TN / (TN + FP)", "FP / (TP + TN)", "Recall divides true positives by all actual positive cases."],
            ["What does specificity measure?", "The proportion of actual negatives correctly identified", "The proportion of predicted positives that are correct", "The fraction of training examples used", "The average size of a dataset", "Specificity is TN divided by TN plus FP."],
            ["Why can accuracy be misleading on an imbalanced dataset?", "A model can predict the majority class and still score highly", "Accuracy cannot be calculated using labels", "Accuracy always becomes negative", "Imbalanced data contains no actual outcomes", "A majority-class model may ignore the minority class while retaining high accuracy."],
          ]
        ),
      ],
    },

    // WEEK 2
    {
      title: "Classification Metrics and Thresholds",
      assignment:
        "Evaluate an imbalanced binary classifier with precision, recall, F1-score, balanced accuracy, ROC-AUC, and precision-recall analysis. Explain the metric choices.",

      lessons: [
        makeLesson(
          "lesson-5",
          "F1-Score and F-Beta Score",
          "F1-score combines precision and recall into a single measure. It is useful when both false positives and false negatives matter, but it does not replace the need to inspect the two component metrics.",
          [
            {
              heading: "Harmonic mean",
              content:
                "F1 = 2 × (precision × recall) / (precision + recall), provided the sum is nonzero. The harmonic mean penalizes a low component more strongly than the arithmetic mean. A model with very high precision but very low recall will therefore not receive a high F1-score.",
            },
            {
              heading: "Interpreting F1",
              content:
                "F1 ranges from 0 to 1 under ordinary definitions, with higher values indicating a stronger balance between precision and recall. It does not directly include true negatives, so it may not reflect all aspects of performance. Two models can have similar F1 values but very different precision and recall.",
            },
            {
              heading: "F-beta",
              content:
                "F-beta generalizes F1. Beta greater than 1 gives more weight to recall; beta less than 1 gives more weight to precision. Choose beta according to the task's error costs rather than selecting a value solely to improve a score.",
            },
            {
              heading: "Macro, micro and weighted averages",
              content:
                "For multiclass tasks, macro averaging calculates a metric for each class and averages them equally. Weighted averaging weights each class by its support. Micro averaging combines contributions across classes before computing the metric. These averages can give different views when class frequencies vary.",
            },
          ],
          `from sklearn.metrics import precision_score, recall_score, f1_score\n\nactual = [1, 1, 1, 0, 0, 0]\npredicted = [1, 1, 0, 1, 0, 0]\n\nprint("Precision:", precision_score(actual, predicted))\nprint("Recall:", recall_score(actual, predicted))\nprint("F1:", f1_score(actual, predicted))`,
          "Calculate F1 from precision = 0.80 and recall = 0.60. Then describe a situation where recall deserves more weight than precision.",
          [
            ["How is F1-score calculated?", "The harmonic mean of precision and recall", "The sum of accuracy and specificity", "The difference between precision and recall", "The number of training samples divided by epochs", "F1 combines precision and recall using their harmonic mean."],
            ["What happens when one of precision or recall is very low?", "F1 is reduced substantially", "F1 must equal 1", "F1 ignores the low metric", "F1 becomes the number of classes", "The harmonic mean penalizes a low component."],
            ["Which F-beta setting places more emphasis on recall?", "Beta greater than 1", "Beta equal to zero in every implementation", "Beta less than 1", "Beta has no effect on the metric", "F-beta with beta above 1 gives recall greater relative importance."],
            ["What does macro averaging do?", "Calculates a metric per class and averages classes equally", "Uses only the largest class", "Removes minority-class predictions", "Averages all feature values instead of class metrics", "Macro averaging gives each class equal weight regardless of its size."],
            ["Why should F1 not be reported alone in every situation?", "It can hide the separate precision and recall values", "It cannot ever be calculated", "It measures only model training time", "It always measures calibration perfectly", "The component metrics reveal trade-offs hidden by a single F1 value."],
          ]
        ),

        makeLesson(
          "lesson-6",
          "Imbalanced Classification and Balanced Metrics",
          "Class imbalance occurs when some classes appear much more often than others. Evaluation should make clear whether the model identifies less frequent classes rather than simply predicting the most common outcome.",
          [
            {
              heading: "Why imbalance matters",
              content:
                "Suppose 98% of examples are negative. A model that predicts negative for every example achieves 98% accuracy but never detects a positive example. This shows why accuracy alone can give an incomplete picture of an imbalanced problem.",
            },
            {
              heading: "Balanced accuracy",
              content:
                "For binary classification, balanced accuracy is commonly the average of sensitivity and specificity. It gives equal weight to the recall of each class and can be more informative than ordinary accuracy when class frequencies differ substantially.",
            },
            {
              heading: "Precision-recall analysis",
              content:
                "Precision-recall curves show how precision and recall change as the decision threshold changes. They are especially useful when the positive class is rare and detecting positives is important. Precision can change with prevalence, so the class distribution of the evaluation data should be understood.",
            },
            {
              heading: "Stratification and sampling",
              content:
                "Stratified splitting helps preserve class proportions across data subsets. Class weighting or resampling may help model training, but any resampling must happen within training folds, not before splitting the complete dataset. Evaluation should use data that reflects the intended real-world distribution whenever possible.",
            },
          ],
          `from sklearn.metrics import balanced_accuracy_score, classification_report\n\nactual = [0] * 98 + [1] * 2\npredicted = [0] * 100\n\nprint("Ordinary accuracy:", sum(a == p for a, p in zip(actual, predicted)) / len(actual))\nprint("Balanced accuracy:", balanced_accuracy_score(actual, predicted))\nprint(classification_report(actual, predicted, zero_division=0))`,
          "Create a fictional dataset with 95 negative and 5 positive cases. Compare a majority-class predictor using accuracy and balanced accuracy, then explain its limitations.",
          [
            ["What is class imbalance?", "A situation where class frequencies differ substantially", "A situation where all classes have exactly the same count", "A missing Python package", "A model with no parameters", "Imbalance refers to unequal class frequencies, often with one class dominating."],
            ["Why is a 98% accuracy score potentially misleading on data with 98% negatives?", "The model may predict every case as negative and miss all positives", "The score proves every class is identified well", "Negative examples cannot be evaluated", "Accuracy always measures recall", "A majority-class predictor can obtain high accuracy without identifying positives."],
            ["What does binary balanced accuracy commonly average?", "Sensitivity and specificity", "Precision and training speed", "Loss and number of features", "Dataset size and memory use", "Balanced accuracy averages the recall for each class in the binary case."],
            ["Where should oversampling be applied during cross-validation?", "Only within each training fold", "To the complete dataset before splitting", "Only to the final test labels", "To validation labels after predictions", "Resampling the complete dataset before splitting can cause leakage and unrealistic evaluation."],
            ["Which curve is particularly useful for examining positive-class precision and recall?", "Precision-recall curve", "A chart of file sizes", "A plot of feature names only", "A chart of Python indentation", "The precision-recall curve shows the relationship between precision and recall across thresholds."],
          ]
        ),

        makeLesson(
          "lesson-7",
          "ROC Curve and ROC-AUC",
          "A receiver operating characteristic curve examines the trade-off between true-positive rate and false-positive rate across decision thresholds. ROC-AUC summarizes the ranking ability represented by this curve.",
          [
            {
              heading: "True-positive and false-positive rates",
              content:
                "The true-positive rate is recall: TP / (TP + FN). The false-positive rate is FP / (FP + TN). The ROC curve plots true-positive rate against false-positive rate as the threshold changes.",
            },
            {
              heading: "Understanding AUC",
              content:
                "ROC-AUC measures the area under the ROC curve. A value near 1 indicates strong ranking discrimination, while a value near 0.5 indicates performance similar to random ranking under common assumptions. AUC does not specify one operational threshold or guarantee good calibration.",
            },
            {
              heading: "Threshold effects",
              content:
                "Lowering the positive-class threshold typically increases the number of positive predictions, often increasing recall while also increasing false positives. Raising it often reduces false positives while missing more positives. The precise behavior depends on the model's scores and the data.",
            },
            {
              heading: "Limitations",
              content:
                "ROC-AUC can look strong on a highly imbalanced dataset even when precision is low at practical thresholds. Inspect the confusion matrix and precision-recall behavior, and consider the cost of errors. Choose a threshold using validation data and an explicit decision objective.",
            },
          ],
          `from sklearn.metrics import roc_auc_score, roc_curve\n\nactual = [0, 0, 1, 1, 0, 1]\nprobabilities = [0.10, 0.35, 0.45, 0.90, 0.20, 0.70]\n\nprint("ROC-AUC:", roc_auc_score(actual, probabilities))\nfpr, tpr, thresholds = roc_curve(actual, probabilities)\nprint("False-positive rates:", fpr)\nprint("True-positive rates:", tpr)`,
          "Explain what the ROC curve and ROC-AUC measure. Describe why a high ROC-AUC score alone may not be enough to approve a model for an imbalanced classification task.",
          [
            ["What does the ROC curve plot?", "True-positive rate against false-positive rate", "Precision against training loss only", "Actual prices against predicted prices", "The number of features against file size", "ROC curves examine true-positive and false-positive rates across thresholds."],
            ["What does ROC-AUC near 0.5 commonly indicate?", "Ranking discrimination similar to random ranking", "Perfect predictions at every threshold", "Perfect calibration", "Zero false positives at every threshold", "An AUC near 0.5 indicates little ranking discrimination under common conditions."],
            ["What does a lower classification threshold often do?", "Increase positive predictions and often increase recall", "Guarantee fewer positive predictions", "Improve every metric simultaneously", "Turn a classifier into a regression model", "A lower threshold labels more scores as positive, often increasing recall and false positives."],
            ["Does a high ROC-AUC guarantee good probability calibration?", "No, discrimination and calibration are different properties", "Yes, every high-AUC model is perfectly calibrated", "Yes, AUC directly measures calibration error", "No model can produce probabilities", "AUC evaluates ranking discrimination rather than whether predicted probabilities match observed frequencies."],
            ["Why can precision-recall analysis complement ROC-AUC on rare-positive data?", "It focuses on precision and recall for the positive class", "It removes the need for actual labels", "It measures only inference speed", "It guarantees no false negatives", "Precision-recall analysis can make positive-class performance more visible when positives are rare."],
          ]
        ),

        makeLesson(
          "lesson-8",
          "Choosing Decision Thresholds and Costs",
          "Many classifiers produce scores or probabilities rather than final labels. A decision threshold turns those scores into decisions, and the chosen threshold should reflect validation evidence and the costs of different mistakes.",
          [
            {
              heading: "Scores and labels",
              content:
                "A binary classifier may estimate a positive-class probability. A common default decision rule predicts positive when the probability is at least 0.5, but this threshold is not automatically optimal. Some classifiers output decision scores rather than calibrated probabilities.",
            },
            {
              heading: "Choosing a threshold",
              content:
                "Evaluate candidate thresholds using validation data. Examine confusion matrices, precision, recall, specificity, and any domain-specific cost function. The best threshold depends on the desired trade-off and constraints, such as a minimum recall or an acceptable false-positive rate.",
            },
            {
              heading: "Cost-sensitive decisions",
              content:
                "A false positive and a false negative may have different costs. A simple expected-cost calculation can combine the frequency of each error with its estimated consequence. These costs should come from a justified decision process, not arbitrary choices made merely to improve a metric.",
            },
            {
              heading: "Avoiding threshold leakage",
              content:
                "Do not select the threshold by repeatedly examining the final test set. Choose it on training/validation data or within a suitable cross-validation process, then assess the complete decision rule on the untouched test set.",
            },
          ],
          `import numpy as np\nfrom sklearn.metrics import precision_score, recall_score\n\nactual = np.array([0, 1, 1, 0, 1, 0])\nprobabilities = np.array([0.20, 0.65, 0.45, 0.70, 0.90, 0.10])\n\nfor threshold in [0.3, 0.5, 0.7]:\n    predicted = (probabilities >= threshold).astype(int)\n    print("Threshold:", threshold)\n    print("Precision:", precision_score(actual, predicted, zero_division=0))\n    print("Recall:", recall_score(actual, predicted, zero_division=0))`,
          "Compare at least three thresholds on fictional validation predictions. Explain which threshold you would choose if missing positive cases were more costly than generating extra alerts.",
          [
            ["What does a classification threshold do?", "Converts scores into class decisions", "Changes the actual labels automatically", "Guarantees a perfect model", "Removes the need for evaluation data", "A threshold maps scores to predicted classes according to a decision rule."],
            ["Why might a threshold of 0.5 be inappropriate?", "The desired trade-off and error costs may require another threshold", "It is invalid for every classifier", "It guarantees recall is zero", "It is only used for regression", "The default threshold is not necessarily optimal for a particular task."],
            ["Which data should normally guide threshold selection?", "Validation data or an appropriate training-fold procedure", "The final test set repeatedly", "Only the model's variable names", "Data collected after reporting the final score without a new evaluation plan", "Threshold selection is part of model selection and should not repeatedly use the final test set."],
            ["If missing positive cases is especially costly, which metric may deserve emphasis?", "Recall", "File size", "Number of input columns alone", "Training duration alone", "Recall measures the fraction of actual positive cases detected."],
            ["What should a cost-sensitive threshold decision consider?", "The estimated consequences of false positives and false negatives", "Only the largest possible accuracy number", "Only the number of classes in the dataset", "The colour of the plotted curve", "Cost-sensitive decisions account for the consequences of different error types."],
          ]
        ),
      ],
    },

    // WEEK 3
    {
      title: "Regression Evaluation and Model Reliability",
      assignment:
        "Evaluate two regression models using MAE, MSE, RMSE, and R-squared. Compare cross-validation results and explain the effects of outliers.",

      lessons: [
        makeLesson(
          "lesson-9",
          "Regression Metrics: MAE, MSE and RMSE",
          "Regression models predict numerical values such as house prices, delivery times, or student marks. Evaluation metrics quantify how far those predictions are from observed values.",
          [
            {
              heading: "Mean Absolute Error",
              content:
                "MAE = mean(|actual - predicted|). It measures the average absolute prediction error in the target's units. If MAE is 4 marks, the model's average absolute error is 4 marks on the evaluated examples. MAE is generally less sensitive to large individual errors than squared-error metrics.",
            },
            {
              heading: "Mean Squared Error",
              content:
                "MSE = mean((actual - predicted)^2). Squaring errors gives greater influence to large mistakes. MSE is expressed in squared target units, so its numeric value can be less intuitive to interpret directly.",
            },
            {
              heading: "Root Mean Squared Error",
              content:
                "RMSE = square root of MSE. It returns the error to the original target units while retaining a stronger penalty for large errors. RMSE is useful when large mistakes deserve particular attention.",
            },
            {
              heading: "Metric selection",
              content:
                "Compare metrics on the same evaluation examples and target scale. A lower MAE or RMSE usually indicates smaller errors for that metric. If large errors are especially harmful, RMSE may be informative; if an easily interpretable typical absolute error is desired, MAE may be preferable.",
            },
          ],
          `from sklearn.metrics import mean_absolute_error, mean_squared_error\nfrom math import sqrt\n\ny_true = [100, 120, 130, 150]\ny_pred = [110, 115, 128, 170]\n\nmae = mean_absolute_error(y_true, y_pred)\nmse = mean_squared_error(y_true, y_pred)\nrmse = sqrt(mse)\n\nprint("MAE:", mae)\nprint("MSE:", mse)\nprint("RMSE:", rmse)`,
          "Calculate the absolute errors for four predictions. Explain why MAE and RMSE can rank models differently when one model makes a few very large mistakes.",
          [
            ["What does MAE measure?", "The average absolute prediction error", "The average squared error", "The proportion of positive predictions", "The number of model parameters", "MAE averages the absolute differences between actual and predicted values."],
            ["Why does MSE emphasize large errors?", "It squares each error before averaging", "It removes every error above one", "It averages only correct predictions", "It divides each error by the number of features", "Squaring gives larger errors disproportionate influence."],
            ["What is a benefit of RMSE over MSE for interpretation?", "RMSE is expressed in the original target units", "RMSE is always zero", "RMSE ignores large errors", "RMSE measures classification precision", "Taking the square root returns the metric to the target's original units."],
            ["Which metric is usually less sensitive to a very large individual error?", "MAE", "MSE", "RMSE in every possible dataset", "Accuracy", "Absolute errors increase linearly, whereas squared errors increase quadratically."],
            ["What does a lower MAE usually indicate when models are evaluated on the same examples?", "Smaller average absolute prediction errors", "More false positives by definition", "Better probability calibration by definition", "More training rows", "Lower MAE indicates a smaller average absolute difference between predictions and actual values."],
          ]
        ),

        makeLesson(
          "lesson-10",
          "R-Squared and Adjusted R-Squared",
          "R-squared describes how a regression model compares with a mean-based reference under a particular evaluation setup. It should be interpreted alongside error metrics and the problem's context.",
          [
            {
              heading: "Understanding R-squared",
              content:
                "R-squared is commonly defined as 1 minus the ratio of residual sum of squares to total sum of squares. It describes the fraction of target variation accounted for relative to predicting the evaluation-set mean, under the usual definition. It is not simply the percentage of predictions that are correct.",
            },
            {
              heading: "Positive, zero and negative values",
              content:
                "An R-squared of 1 indicates perfect predictions for the evaluated targets when the standard definition applies. Zero means the model performs like the mean baseline under that definition. A negative score can occur on evaluation data when predictions are worse than the mean baseline.",
            },
            {
              heading: "Adjusted R-squared",
              content:
                "Adjusted R-squared modifies R-squared to account for the number of predictors relative to sample size in common linear-regression settings. It can help when comparing linear models with different numbers of predictors, but it is not a universal model-selection criterion for all algorithms.",
            },
            {
              heading: "Important limitations",
              content:
                "R-squared does not indicate whether predictions are unbiased for important subgroups, whether errors are acceptable in the target's units, or whether a model will generalize. Compare it with MAE or RMSE, residual analysis, baseline performance, and an appropriate held-out evaluation.",
            },
          ],
          `from sklearn.metrics import r2_score, mean_absolute_error\n\ny_true = [10, 20, 30, 40, 50]\ny_pred = [12, 18, 29, 42, 48]\n\nprint("R-squared:", r2_score(y_true, y_pred))\nprint("MAE:", mean_absolute_error(y_true, y_pred))`,
          "Explain what R-squared compares, why a negative value is possible on a test set, and why a high R-squared does not automatically make a model suitable for deployment.",
          [
            ["What does R-squared compare in its common definition?", "Residual error relative to a mean-based reference", "Precision relative to recall", "Number of labels relative to features", "Training time relative to memory use", "The standard R-squared formula compares residual sum of squares with total sum of squares."],
            ["What can a negative test R-squared indicate?", "The model performed worse than the mean baseline on the evaluated data", "The model predicted every value perfectly", "The dataset has no target values", "The model must be a classifier", "A negative score can occur when residual error exceeds the mean-baseline reference error."],
            ["Does R-squared equal the percentage of predictions that are correct?", "No, it is a regression goodness-of-fit measure", "Yes, for every regression model", "Yes, when the target is numerical", "No, because regression cannot be evaluated", "R-squared is not a classification-style percentage of correct predictions."],
            ["What does adjusted R-squared account for in common linear-regression settings?", "The number of predictors and sample size", "Only the colour of the regression plot", "Only false positives", "The order of Python imports", "Adjusted R-squared penalizes unnecessary predictors in its conventional linear-model setting."],
            ["Why should R-squared be considered with MAE or RMSE?", "Error metrics express prediction errors in target units", "R-squared always measures every important error cost", "MAE and RMSE only apply to images", "R-squared cannot be calculated on evaluation data", "MAE and RMSE provide interpretable error magnitudes that complement R-squared."],
          ]
        ),

        makeLesson(
          "lesson-11",
          "Cross-Validation and Reliable Estimates",
          "Cross-validation evaluates a modelling process across multiple data splits. It can provide a more stable estimate than relying on a single validation split, although its quality depends on the splitting strategy and data assumptions.",
          [
            {
              heading: "K-fold cross-validation",
              content:
                "In k-fold cross-validation, the data is divided into k folds. The model is fitted on k minus one folds and evaluated on the remaining fold. This process repeats until each fold has served as the evaluation fold, and the results are summarized.",
            },
            {
              heading: "Choosing the number of folds",
              content:
                "Five-fold and ten-fold cross-validation are common choices, but the appropriate number depends on dataset size, computational cost, and the problem. Each fold should contain enough relevant examples for the chosen metric to be meaningful.",
            },
            {
              heading: "Specialized splitting strategies",
              content:
                "Stratified cross-validation helps preserve class proportions. Group cross-validation keeps related groups together. Time-series splitting respects chronological order. Ordinary shuffled k-fold splitting can create misleading estimates when samples are dependent or future information leaks into past predictions.",
            },
            {
              heading: "Mean and variation",
              content:
                "Report the average cross-validation score and, where useful, the variability across folds. A high mean with large variation may indicate instability or data sensitivity. Fold scores are not necessarily independent observations, so their standard deviation should not automatically be treated as a formal confidence interval.",
            },
          ],
          `from sklearn.model_selection import StratifiedKFold, cross_val_score\nfrom sklearn.ensemble import RandomForestClassifier\n\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\nmodel = RandomForestClassifier(random_state=42)\n\nscores = cross_val_score(model, X, y, cv=cv, scoring="f1")\nprint("Fold scores:", scores)\nprint("Mean F1:", scores.mean())\nprint("Fold standard deviation:", scores.std())`,
          "Describe five-fold cross-validation. Choose a suitable split strategy for (a) independent classification data, (b) repeated records from the same student, and (c) monthly forecasting data.",
          [
            ["What happens in k-fold cross-validation?", "Each fold is used for evaluation while the other folds are used for fitting", "Every fold is used only as the final test set and never for fitting", "The model is evaluated on no data", "The same example is removed from every fold", "K-fold validation rotates the evaluation fold while using the remaining folds for fitting."],
            ["What is a benefit of stratified cross-validation for classification?", "It helps preserve class proportions in folds", "It guarantees perfect predictions", "It automatically removes every outlier", "It eliminates the need for labels", "Stratification aims to maintain class representation across folds."],
            ["Which strategy is useful when records from the same person must not cross folds?", "Group cross-validation", "Random row splitting regardless of identity", "Training on every validation fold", "Sorting the target labels alphabetically", "Group-aware splitting keeps related observations together."],
            ["Which approach is generally more appropriate for forecasting future time periods?", "Time-aware splitting", "Randomly mixing future and past observations without regard to time", "Using future target values as training features", "Duplicating the test targets", "Time-aware splitting avoids evaluating on past-to-future leakage."],
            ["What does high variation among fold scores suggest?", "Performance may depend on the particular split", "The model is guaranteed to be perfect", "The target variable is unnecessary", "The score is always invalid", "Large fold variation can indicate instability or sensitivity to the data split."],
          ]
        ),

        makeLesson(
          "lesson-12",
          "Overfitting, Underfitting and Learning Curves",
          "Overfitting and underfitting describe different ways a model can fail to generalize. Learning curves and comparisons between training and validation performance help diagnose these problems.",
          [
            {
              heading: "Overfitting",
              content:
                "An overfit model learns patterns specific to its training examples, including noise that does not generalize. A common sign is excellent training performance but substantially worse validation performance. More complex models, small datasets, or weak regularization can contribute to overfitting.",
            },
            {
              heading: "Underfitting",
              content:
                "An underfit model is too limited to capture important relationships. It often performs poorly on both training and validation data. Possible responses include improving features, choosing a more suitable model, or allowing greater model complexity.",
            },
            {
              heading: "Learning curves",
              content:
                "Learning curves compare performance as training-set size or training progress changes. Training and validation curves can reveal high variance or persistent bias. Interpret the direction carefully because some plots show scores where higher is better, while others show losses where lower is better.",
            },
            {
              heading: "Improving generalization",
              content:
                "Useful strategies include gathering representative data, simplifying an overly complex model, applying regularization, selecting features responsibly, and tuning hyperparameters with validation or cross-validation. A final untouched test set helps assess the resulting approach.",
            },
          ],
          `from sklearn.model_selection import learning_curve\nfrom sklearn.ensemble import RandomForestClassifier\nimport numpy as np\n\nsizes, train_scores, valid_scores = learning_curve(\n    RandomForestClassifier(random_state=42),\n    X, y,\n    cv=5,\n    scoring="accuracy",\n    train_sizes=np.linspace(0.2, 1.0, 5)\n)\n\nprint("Training means:", train_scores.mean(axis=1))\nprint("Validation means:", valid_scores.mean(axis=1))`,
          "Create a comparison table of training and validation scores for three hypothetical models. Identify one overfit model and one underfit model, and propose a suitable improvement for each.",
          [
            ["What is a common sign of overfitting?", "Strong training performance but weaker validation performance", "Poor performance on training and validation data in every case", "Identical predictions for every possible input by definition", "A model with no training data", "An overfit model performs well on training examples but does not generalize as well."],
            ["What is a common sign of underfitting?", "Poor performance on both training and validation data", "Perfect training results and much poorer validation results only", "A high file download speed", "A large number of class labels alone", "An underfit model fails to learn enough useful structure from the data."],
            ["What can learning curves help diagnose?", "How performance changes with training size or progress", "Whether a Python file has a valid extension only", "Whether every label is correct without checking", "The colour of a dataset", "Learning curves show trends in training and validation performance."],
            ["Which is a possible response to overfitting?", "Use regularization or a simpler model", "Repeatedly tune against the final test set", "Add future information to training features", "Ignore validation results", "Regularization and reduced model complexity can improve generalization."],
            ["What is a reasonable response when both training and validation performance are poor?", "Investigate features and consider a more suitable model", "Assume the model is perfect", "Use only the test score for tuning", "Delete all validation data", "Poor performance on both subsets can indicate underfitting or unsuitable data and features."],
          ]
        ),
      ],
    },

    // WEEK 4
    {
      title: "Advanced Evaluation, Model Selection and Deployment",
      assignment:
        "Produce a final evaluation report comparing at least two models. Include data-splitting choices, classification or regression metrics, error analysis, calibration or subgroup checks where appropriate, and a justified deployment recommendation.",

      lessons: [
        makeLesson(
          "lesson-13",
          "Data Leakage and Evaluation Pitfalls",
          "Data leakage occurs when information unavailable at prediction time influences model training or evaluation. Leakage can produce impressive scores that fail to represent real-world performance.",
          [
            {
              heading: "Target leakage",
              content:
                "Target leakage occurs when a feature directly or indirectly reveals the answer the model is supposed to predict. For example, using a final examination result to predict whether a student will pass that same examination leaks the outcome into the inputs.",
            },
            {
              heading: "Preprocessing leakage",
              content:
                "Fitting a scaler, imputer, feature selector, or dimensionality-reduction step on the entire dataset allows information from evaluation examples to influence training. Fit preprocessing steps on training data only, then apply the learned transformations to validation and test data.",
            },
            {
              heading: "Duplicate and temporal leakage",
              content:
                "Duplicate or closely related records across train and test sets can make evaluation artificially easy. Temporal leakage occurs when future information is used to predict an earlier outcome. Grouped or time-aware splitting may be necessary to prevent these issues.",
            },
            {
              heading: "Preventing leakage with pipelines",
              content:
                "A machine-learning pipeline bundles preprocessing and model fitting so each cross-validation fold learns its transformations from that fold's training portion. Also inspect feature definitions, collection times, identifiers, duplicates, and the intended prediction moment before accepting a score.",
            },
          ],
          `from sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import cross_val_score\n\npipeline = make_pipeline(\n    StandardScaler(),\n    LogisticRegression(max_iter=1000)\n)\n\nscores = cross_val_score(pipeline, X, y, cv=5, scoring="accuracy")\nprint(scores)\nprint(scores.mean())`,
          "Review a fictional student-risk dataset containing attendance, final examination marks, and the final pass/fail label. Identify potential leakage and explain how to redesign the features and evaluation split.",
          [
            ["What is data leakage?", "Using information in a way that makes evaluation unrealistically optimistic", "Using a separate test set correctly", "Calculating a metric after prediction", "Recording a model's version number", "Leakage allows information that should be unavailable to influence model fitting or evaluation."],
            ["Why is using final examination marks to predict the result of that same examination problematic?", "The feature may reveal the target outcome", "Examination marks are always text", "Classification cannot use numerical inputs", "The model must always be a neural network", "The feature may expose information that would not be available at the prediction time."],
            ["When should a scaler normally be fitted during evaluation?", "On the training portion of each split or fold", "On the complete dataset before every split", "On the final test labels", "Only after reporting the final score", "Fitting on training data alone avoids evaluation data influencing preprocessing parameters."],
            ["What is a benefit of a machine-learning pipeline?", "It helps keep preprocessing within the training process of each fold", "It automatically guarantees unbiased labels", "It eliminates the need for test data", "It makes every model perfectly accurate", "Pipelines help prevent preprocessing leakage during cross-validation."],
            ["When can random row splitting be risky?", "When related records or future information cross between subsets", "When the dataset contains column names", "When a model uses numerical features", "When accuracy is calculated", "Dependent records and temporal relationships may require group-aware or chronological splitting."],
          ]
        ),

        makeLesson(
          "lesson-14",
          "Cross-Model Comparison and Hyperparameter Tuning",
          "Model selection compares candidate approaches using consistent evaluation procedures. Hyperparameter tuning searches for settings that improve the chosen objective without using the final test set as a repeated decision tool.",
          [
            {
              heading: "Establish a baseline",
              content:
                "A baseline provides a simple reference point. Classification baselines may predict the most frequent class, while regression baselines may predict the training target mean or median. A complex model should provide a meaningful improvement over an appropriate baseline.",
            },
            {
              heading: "Fair model comparisons",
              content:
                "Compare models using the same data splits, metric definitions, preprocessing rules, and evaluation conditions. Differences caused by different test samples can be mistaken for differences in model quality. Consider computational cost, interpretability, and operational requirements alongside metrics.",
            },
            {
              heading: "Grid search and randomized search",
              content:
                "Grid search evaluates specified combinations of hyperparameters. Randomized search samples a defined number of combinations from chosen distributions or lists. Both should operate within an appropriate cross-validation procedure, with preprocessing fitted separately in each fold.",
            },
            {
              heading: "Nested cross-validation",
              content:
                "When a reliable performance estimate is needed after extensive hyperparameter tuning, nested cross-validation separates inner-loop tuning from outer-loop evaluation. The inner loop selects settings; the outer loop estimates the performance of that selection process. This can be computationally expensive but reduces optimistic selection bias.",
            },
          ],
          `from sklearn.model_selection import GridSearchCV, StratifiedKFold\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\npipeline = make_pipeline(\n    StandardScaler(),\n    LogisticRegression(max_iter=1000)\n)\n\nparams = {\n    "logisticregression__C": [0.1, 1, 10]\n}\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\nsearch = GridSearchCV(pipeline, params, cv=cv, scoring="f1")\nsearch.fit(X_train, y_train)\n\nprint(search.best_params_)\nprint(search.best_score_)`,
          "Compare a majority-class baseline, logistic regression, and a tree-based classifier. Specify a primary metric, a cross-validation strategy, and two non-metric considerations for selecting a model.",
          [
            ["Why establish a baseline model?", "To determine whether more complex approaches provide meaningful improvement", "To guarantee the final model is perfect", "To avoid defining evaluation metrics", "To replace all data validation", "A baseline provides a reference point for interpreting model performance."],
            ["What makes a model comparison fairer?", "Using consistent splits and evaluation procedures", "Giving each model a different test set and comparing scores without qualification", "Selecting the best result from the test set repeatedly", "Changing metric definitions for each model", "Consistent evaluation conditions make performance differences more interpretable."],
            ["What does grid search do?", "Evaluates specified hyperparameter combinations", "Automatically fixes incorrect target labels", "Guarantees a model has no leakage", "Uses every possible value in every mathematical space", "Grid search evaluates combinations from the defined search grid."],
            ["Why use randomized search?", "To sample a limited number of candidate settings from defined choices", "To guarantee it checks every possible hyperparameter combination", "To remove the need for validation", "To convert regression into clustering", "Randomized search samples a specified number of candidate configurations."],
            ["What is the role of the inner loop in nested cross-validation?", "Selecting hyperparameters", "Providing an untouched global final test score", "Collecting future production labels automatically", "Removing the target variable from the problem", "The inner loop performs model and hyperparameter selection."],
          ]
        ),

        makeLesson(
          "lesson-15",
          "Probability Calibration, Error Analysis and Responsible Evaluation",
          "A strong evaluation process looks beyond one score. It checks whether probabilities are trustworthy, where errors occur, and whether performance is acceptable for the people and situations affected by the model.",
          [
            {
              heading: "Calibration versus discrimination",
              content:
                "A model is well calibrated when, among cases assigned a particular probability, the observed event frequency is approximately consistent with that probability over suitable groups of predictions. Discrimination measures how well scores rank positive cases above negative ones. A model can discriminate well without being well calibrated.",
            },
            {
              heading: "Calibration methods",
              content:
                "Reliability diagrams compare predicted probabilities with observed outcome frequencies. Platt scaling and isotonic regression are common calibration approaches. Calibration should be fitted using data separate from the data used to train the base model, or through a carefully designed cross-validation procedure.",
            },
            {
              heading: "Error analysis",
              content:
                "Inspect false positives, false negatives, large regression errors, and patterns in residuals. Investigate whether mistakes concentrate in particular ranges, locations, data sources, or relevant groups. Review data quality and possible distribution shifts before concluding that an algorithm is solely responsible.",
            },
            {
              heading: "Fairness and responsible use",
              content:
                "Compare appropriate performance measures across relevant groups when lawful, ethical, and supported by reliable data. Group differences may reflect data quality, representation, different operating conditions, or other factors. Metrics alone do not establish fairness. Document limitations, provide appropriate human oversight, and avoid using a model beyond its validated purpose.",
            },
          ],
          `from sklearn.calibration import calibration_curve\nfrom sklearn.metrics import brier_score_loss\n\n# y_true contains binary outcomes.\n# probabilities contains predicted positive-class probabilities.\nobserved_rate, mean_probability = calibration_curve(\n    y_true, probabilities, n_bins=5, strategy="uniform"\n)\n\nprint("Brier score:", brier_score_loss(y_true, probabilities))\nprint("Observed rates:", observed_rate)\nprint("Mean predicted probabilities:", mean_probability)`,
          "Write an evaluation checklist that includes calibration, false-positive and false-negative review, performance across relevant groups, data quality, model limitations, and human oversight.",
          [
            ["What does probability calibration assess?", "Whether predicted probabilities align with observed event frequencies", "Whether a model has the largest number of features", "Whether training always finishes quickly", "Whether all predictions have the same label", "Calibration compares predicted probabilities with observed outcome frequencies."],
            ["How is discrimination different from calibration?", "Discrimination concerns ranking; calibration concerns probability reliability", "They are exactly the same metric", "Calibration measures only model size", "Discrimination measures file permissions", "A model may rank cases well but still assign probabilities that are systematically inaccurate."],
            ["What can a reliability diagram show?", "Predicted probabilities compared with observed event frequencies", "Only the number of Python files", "Only the training dataset's column names", "The model's source-code length", "Reliability diagrams visualize the relationship between predicted probabilities and observed rates."],
            ["What is a useful step in error analysis?", "Investigate patterns among incorrect predictions", "Delete every incorrect prediction from the evaluation set", "Report only successful examples", "Change test labels to match model outputs", "Reviewing errors can reveal data problems, weak subgroups, and systematic failure patterns."],
            ["Why should group performance checks be interpreted carefully?", "Differences need context and do not by themselves establish the cause or fairness of outcomes", "A single group metric always proves fairness", "Group analysis guarantees no future errors", "Every group must have identical raw data", "Group metrics are evidence to investigate, not a complete explanation of fairness or causation."],
          ]
        ),

        makeLesson(
          "lesson-16",
          "Final Project: Complete Model Evaluation Report",
          "This project brings together dataset splitting, metric selection, model comparison, error analysis, and responsible reporting. The aim is to justify a model choice with evidence rather than simply choosing the largest score.",
          [
            {
              heading: "Define the prediction problem",
              content:
                "Describe the target, intended users, prediction time, and consequences of errors. Identify whether the task is classification or regression. Select the primary metric before comparing candidate models, and state why it matches the use case.",
            },
            {
              heading: "Prepare and split the data",
              content:
                "Inspect missing values, duplicates, target distributions, unusual values, and potential leakage. Choose random, stratified, grouped, or chronological splitting according to the data-generating process. Keep final test data separate from feature and hyperparameter decisions.",
            },
            {
              heading: "Compare and analyse models",
              content:
                "Evaluate a simple baseline and at least two candidate models. Use consistent validation or cross-validation procedures. Report relevant metrics, variation across folds when available, and confusion matrices or residual analysis. Inspect important error types and determine whether the differences are practically meaningful.",
            },
            {
              heading: "Report and recommend",
              content:
                "Document the final test results, limitations, known data gaps, and intended operating conditions. If probabilities are used for decisions, assess calibration when relevant. Explain the trade-offs, monitoring requirements, and situations where human review is needed. Do not claim the model is reliable outside the evidence collected.",
            },
          ],
          `# Example report outline\nreport = {\n    "problem": "Predict whether additional academic support may be needed",\n    "primary_metric": "Recall",\n    "other_metrics": [\n        "Precision",\n        "F1-score",\n        "Balanced accuracy"\n    ],\n    "evaluation": [\n        "Compare against a baseline",\n        "Use stratified cross-validation",\n        "Reserve a final test set",\n        "Review false positives and false negatives"\n    ],\n    "limitations": [\n        "Check for data leakage",\n        "Review data quality and subgroup performance",\n        "Document intended use and human oversight"\n    ]\n}\n\nfor section, details in report.items():\n    print(section, ":", details)`,
          "Submit a report comparing at least two models. Include the problem definition, dataset split strategy, baseline, chosen metrics, validation results, final test results, error analysis, limitations, and a justified recommendation.",
          [
            ["What should be defined before choosing a primary evaluation metric?", "The prediction problem and the consequences of errors", "The preferred chart colour", "The final test score after tuning", "The number of comments in the code", "Metric choice should follow the task and its error costs."],
            ["Why include a simple baseline in the report?", "It shows whether complex models add useful predictive value", "It guarantees that every candidate will perform worse", "It replaces the need for validation", "It proves the dataset has no missing values", "A baseline makes model improvements easier to assess."],
            ["What should remain separate during model selection?", "The final test data", "The model's title", "The Python import statements", "The list of lesson IDs", "The final test set should not guide repeated model-selection decisions."],
            ["What should a final recommendation include?", "Evidence, trade-offs, limitations, and intended use", "Only the largest score without context", "A guarantee of perfect future predictions", "Only the number of lines of code", "A responsible recommendation explains performance and limitations in context."],
            ["When is a model ready for real-world use?", "When evidence, validation, risk controls, and operational requirements support the intended use", "Whenever training accuracy is 100%", "Whenever one test metric is high", "Before checking the input data", "Deployment requires more than a single high score; suitability depends on validated performance and appropriate safeguards."],
          ]
        ),
      ],
    },
  ],
};

export default modelEvaluationCourse;
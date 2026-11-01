
import type { Course } from "./python";

const modelEvaluationCourse: Course = {
  title: "Model Evaluation",
  description:
    "Learn how to evaluate machine learning models using suitable metrics, validation strategies, cross-validation, error analysis, threshold selection, and reliable model comparison.",
  project:
    "Evaluate and compare classification and regression models, select appropriate metrics, investigate errors, and produce a report justifying the final model.",
  weeks: [
    {
      title: "Week 1: Evaluation Fundamentals",
      lessons: [
        {
          id: "me-w1-l1",
          title: "Introduction to Model Evaluation",
          introduction:
            "Understand why models must be evaluated on data that was not used to train them.",
          sections: [
            {
              heading: "Why evaluate a model?",
              content:
                "Model evaluation estimates how well a trained model performs on relevant unseen data. It helps identify weak models, compare alternatives, and understand whether a model is suitable for its intended use.",
            },
            {
              heading: "Generalization and baselines",
              content:
                "Generalization means performing well on new data drawn from the relevant problem setting. Compare a model with a simple baseline, such as predicting the majority class or the average training target.",
            },
          ],
          example:
            "Compare a customer-churn classifier with a majority-class baseline before deciding whether its predictions are useful.",
          exercise:
            "Choose a machine learning problem, define its goal, and identify a simple baseline model.",
          quiz: [
            {
              question: "What does model evaluation primarily estimate?",
              options: [
                "Performance on relevant unseen data",
                "The number of lines in the code",
                "The computer's screen resolution",
                "The size of the model's name",
              ],
              answer: "Performance on relevant unseen data",
              explanation:
                "Evaluation helps estimate how well a model generalizes beyond its training data.",
            },
            {
              question: "Why use a baseline model?",
              options: [
                "To establish a simple reference for comparison",
                "To guarantee perfect accuracy",
                "To avoid collecting data",
                "To eliminate the need for testing",
              ],
              answer: "To establish a simple reference for comparison",
              explanation:
                "A baseline shows whether a more complex model provides meaningful improvement.",
            },
          ],
        },
        {
          id: "me-w1-l2",
          title: "Training, Validation, and Test Sets",
          introduction:
            "Learn the role of each dataset partition in model development and final evaluation.",
          sections: [
            {
              heading: "Dataset partitions",
              content:
                "Training data fits model parameters. Validation data supports model selection and hyperparameter tuning. A test set is held aside for final evaluation after development decisions are complete.",
            },
            {
              heading: "Choosing a split strategy",
              content:
                "Random splitting can suit independent observations. Stratified splitting can help preserve class proportions in classification. Time-dependent data usually requires a split that respects chronological order.",
            },
          ],
          example:
            "Split a classification dataset into training and test sets using stratification when suitable, then use cross-validation within training data for model selection.",
          exercise:
            "Design a train-validation-test strategy for your chosen problem and explain why it is appropriate.",
          quiz: [
            {
              question: "Which set is normally reserved for final evaluation?",
              options: [
                "Test set",
                "Training set",
                "Feature list",
                "Model configuration file",
              ],
              answer: "Test set",
              explanation:
                "The test set should remain separate from model fitting and tuning decisions.",
            },
            {
              question: "Why may time-series data require chronological splitting?",
              options: [
                "To avoid training on future information when predicting the past",
                "To make every class equally frequent",
                "To remove all timestamps",
                "To guarantee a higher score",
              ],
              answer:
                "To avoid training on future information when predicting the past",
              explanation:
                "Chronological splitting better reflects the direction of time in forecasting tasks.",
            },
          ],
        },
        {
          id: "me-w1-l3",
          title: "Overfitting and Underfitting",
          introduction:
            "Recognize models that memorize training data or fail to capture important patterns.",
          sections: [
            {
              heading: "Overfitting",
              content:
                "An overfit model performs well on training data but substantially worse on new data. It may learn noise or overly specific patterns rather than generalizable relationships.",
            },
            {
              heading: "Underfitting",
              content:
                "An underfit model fails to learn important patterns and performs poorly on both training and evaluation data. Model complexity, feature quality, regularization, and data volume can affect these behaviors.",
            },
          ],
          example:
            "A decision tree with excellent training accuracy but much lower validation accuracy may be overfitting.",
          exercise:
            "Compare training and validation scores for two models and explain whether either shows signs of overfitting or underfitting.",
          quiz: [
            {
              question: "What is a common sign of overfitting?",
              options: [
                "Strong training performance and weaker validation performance",
                "Identical column names",
                "A small dataset filename",
                "A chart with a legend",
              ],
              answer:
                "Strong training performance and weaker validation performance",
              explanation:
                "A large performance gap can indicate that a model does not generalize well.",
            },
            {
              question: "What is a common sign of underfitting?",
              options: [
                "Poor performance on both training and validation data",
                "Perfect performance on every dataset",
                "A model containing numerical features",
                "A saved evaluation report",
              ],
              answer:
                "Poor performance on both training and validation data",
              explanation:
                "An underfit model has not captured enough of the relevant data patterns.",
            },
          ],
        },
        {
          id: "me-w1-l4",
          title: "Choosing the Right Evaluation Metric",
          introduction:
            "Learn why the best metric depends on the prediction task and the consequences of errors.",
          sections: [
            {
              heading: "Classification and regression",
              content:
                "Classification metrics include precision, recall, F1-score, ROC-AUC, and accuracy. Regression metrics include MAE, MSE, RMSE, and R-squared. These metrics answer different questions about model behavior.",
            },
            {
              heading: "Business requirements",
              content:
                "The cost of false positives, false negatives, large numerical errors, and missed events can differ substantially. Select metrics that reflect the task's actual priorities rather than relying on one score for every problem.",
            },
          ],
          example:
            "For a rare-event classifier, inspect precision and recall alongside accuracy because a model can achieve high accuracy by predicting the majority class.",
          exercise:
            "Select a primary metric and two supporting metrics for a classification or regression problem and justify your choices.",
          quiz: [
            {
              question: "Which is a common regression metric?",
              options: ["MAE", "Recall", "Precision", "ROC-AUC"],
              answer: "MAE",
              explanation:
                "Mean Absolute Error measures the average absolute difference between predictions and actual values.",
            },
            {
              question: "Why can accuracy be misleading on imbalanced data?",
              options: [
                "A model may predict the majority class and still achieve high accuracy",
                "Accuracy can only be used for regression",
                "Accuracy measures file size",
                "Accuracy automatically identifies leakage",
              ],
              answer:
                "A model may predict the majority class and still achieve high accuracy",
              explanation:
                "Accuracy alone may hide poor performance on a rare but important class.",
            },
          ],
        },
      ],
      assignment:
        "Define an evaluation plan for a machine learning task, establish a baseline, choose appropriate dataset splits, and justify the metrics you will use.",
    },
    {
      title: "Week 2: Classification Evaluation Metrics",
      lessons: [
        {
          id: "me-w2-l1",
          title: "Confusion Matrix",
          introduction:
            "Learn how to summarize classification predictions using true positives, true negatives, false positives, and false negatives.",
          sections: [
            {
              heading: "Confusion matrix components",
              content:
                "For binary classification, a confusion matrix counts true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN). The counts show which types of predictions are correct and which are errors.",
            },
            {
              heading: "Interpreting errors",
              content:
                "A false positive predicts a positive class when the true class is negative. A false negative misses a real positive case. The relative importance of these errors depends on the application.",
            },
          ],
          example:
            "Use sklearn.metrics.confusion_matrix to compare true labels with predicted labels and inspect which class the model confuses most often.",
          exercise:
            "Create a confusion matrix for a binary classifier and explain the meaning of all four components.",
          quiz: [
            {
              question: "What is a false negative?",
              options: [
                "A real positive case predicted as negative",
                "A real negative case predicted as positive",
                "A real positive case predicted as positive",
                "A real negative case predicted as negative",
              ],
              answer: "A real positive case predicted as negative",
              explanation:
                "A false negative is a positive instance that the classifier misses.",
            },
            {
              question: "What does a true negative represent?",
              options: [
                "A negative case correctly predicted as negative",
                "A positive case missed by the model",
                "A positive case correctly predicted as positive",
                "A negative case incorrectly predicted as positive",
              ],
              answer: "A negative case correctly predicted as negative",
              explanation:
                "True negatives are negative instances correctly identified by the model.",
            },
          ],
        },
        {
          id: "me-w2-l2",
          title: "Precision, Recall, and F1-Score",
          introduction:
            "Compare classification metrics that measure positive prediction quality and the ability to find positive cases.",
          sections: [
            {
              heading: "Precision and recall",
              content:
                "Precision = TP / (TP + FP). Recall = TP / (TP + FN). Precision measures how many predicted positives are correct, while recall measures how many actual positives are detected.",
            },
            {
              heading: "F1-score",
              content:
                "F1-score is the harmonic mean of precision and recall: 2 × precision × recall / (precision + recall), when the denominator is nonzero. Macro, micro, and weighted averages summarize multiclass metrics in different ways.",
            },
          ],
          example:
            "Use classification_report in scikit-learn to inspect per-class precision, recall, F1-score, and support.",
          exercise:
            "Calculate precision, recall, and F1-score from a small confusion matrix and explain which metric matters most for your scenario.",
          quiz: [
            {
              question: "Which metric measures the proportion of predicted positives that are correct?",
              options: ["Precision", "Recall", "MSE", "R-squared"],
              answer: "Precision",
              explanation:
                "Precision divides true positives by all predicted positives.",
            },
            {
              question: "Which metric combines precision and recall using their harmonic mean?",
              options: ["F1-score", "Accuracy only", "RMSE", "Specificity only"],
              answer: "F1-score",
              explanation:
                "F1-score combines precision and recall into a single measure.",
            },
          ],
        },
        {
          id: "me-w2-l3",
          title: "ROC Curve and AUC",
          introduction:
            "Understand how classification performance changes across decision thresholds.",
          sections: [
            {
              heading: "ROC curve",
              content:
                "The receiver operating characteristic curve plots true positive rate against false positive rate across thresholds. It shows the trade-off between detecting positives and incorrectly flagging negatives.",
            },
            {
              heading: "Area under the curve",
              content:
                "ROC-AUC summarizes ranking discrimination across thresholds. It is useful for comparing models, but it does not by itself identify the best operational threshold or guarantee good performance for every class.",
            },
          ],
          example:
            "Use roc_curve and roc_auc_score in scikit-learn with true labels and predicted scores or probabilities from a binary classifier.",
          exercise:
            "Plot an ROC curve for a binary classification model and explain what its AUC suggests about ranking performance.",
          quiz: [
            {
              question: "What does the ROC curve compare?",
              options: [
                "True positive rate and false positive rate",
                "Training time and file size",
                "Mean and median",
                "Feature names and target names",
              ],
              answer: "True positive rate and false positive rate",
              explanation:
                "The ROC curve displays the true positive rate against the false positive rate at different thresholds.",
            },
            {
              question: "What does ROC-AUC primarily summarize?",
              options: [
                "The model's ability to rank positive cases above negative cases",
                "The number of columns in a dataset",
                "The exact cost of every error",
                "The speed of data entry",
              ],
              answer:
                "The model's ability to rank positive cases above negative cases",
              explanation:
                "ROC-AUC measures discrimination across possible score thresholds.",
            },
          ],
        },
        {
          id: "me-w2-l4",
          title: "Threshold Selection and Imbalanced Classification",
          introduction:
            "Learn how decision thresholds and class imbalance affect classification outcomes.",
          sections: [
            {
              heading: "Decision thresholds",
              content:
                "A classifier may produce a probability or score that is converted to a class using a threshold. Lowering the threshold often increases recall while also increasing false positives; the exact trade-off depends on the model and data.",
            },
            {
              heading: "Imbalanced datasets",
              content:
                "For rare classes, examine per-class recall, precision, F1-score, and a precision-recall curve. Thresholds should be selected using validation data and the application’s error costs, not tuned on the final test set.",
            },
          ],
          example:
            "Compare precision and recall at several thresholds on validation data for a rare-event classifier, then evaluate the chosen threshold once on held-out test data.",
          exercise:
            "Compare two decision thresholds and explain how each changes false positives, false negatives, precision, and recall.",
          quiz: [
            {
              question: "What may happen when a classification threshold is lowered?",
              options: [
                "Recall may increase while false positives also increase",
                "Every prediction becomes correct",
                "The test data becomes training data",
                "The target labels disappear",
              ],
              answer:
                "Recall may increase while false positives also increase",
              explanation:
                "A lower threshold can classify more cases as positive, potentially catching more positives but creating more false alarms.",
            },
            {
              question: "Which data should be used to select a decision threshold?",
              options: [
                "Validation data",
                "The final test labels repeatedly",
                "Unrelated future labels",
                "Column headers only",
              ],
              answer: "Validation data",
              explanation:
                "Threshold selection is a model-development decision and should not repeatedly use the final test set.",
            },
          ],
        },
      ],
      assignment:
        "Evaluate a classification model with a confusion matrix, precision, recall, F1-score, ROC-AUC, and a justified threshold-selection strategy.",
    },
    {
      title: "Week 3: Regression Metrics and Validation",
      lessons: [
        {
          id: "me-w3-l1",
          title: "Evaluating Regression Models",
          introduction:
            "Learn to measure prediction errors when the target is a continuous numerical value.",
          sections: [
            {
              heading: "MAE and MSE",
              content:
                "Mean Absolute Error averages absolute prediction errors. Mean Squared Error averages squared errors and penalizes large errors more strongly.",
            },
            {
              heading: "RMSE and R-squared",
              content:
                "Root Mean Squared Error is the square root of MSE and uses the target's units. R-squared compares model error with a baseline based on the target mean under its standard definition; it can be negative when a model performs worse than that baseline on evaluation data.",
            },
          ],
          example:
            "Compare a house-price model using MAE and RMSE. MAE describes typical absolute error, while RMSE places greater weight on large mistakes.",
          exercise:
            "Calculate MAE, MSE, RMSE, and R-squared for a regression model and interpret the results.",
          quiz: [
            {
              question: "Which metric gives greater weight to large errors through squaring?",
              options: ["MSE", "MAE", "Recall", "Precision"],
              answer: "MSE",
              explanation:
                "MSE squares each error before averaging, so large errors contribute disproportionately.",
            },
            {
              question: "What is one benefit of RMSE?",
              options: [
                "It is expressed in the target variable's units",
                "It always ranges from zero to one",
                "It measures only classification recall",
                "It guarantees no large errors",
              ],
              answer: "It is expressed in the target variable's units",
              explanation:
                "Taking the square root of MSE returns the metric to the target's scale.",
            },
          ],
        },
        {
          id: "me-w3-l2",
          title: "Residual Analysis",
          introduction:
            "Inspect regression errors to uncover patterns that summary metrics may hide.",
          sections: [
            {
              heading: "Residuals",
              content:
                "A residual is the observed target minus the predicted target. Residual plots can reveal systematic patterns, changing error variance, outliers, or relationships that the model has not captured.",
            },
            {
              heading: "Residual assumptions",
              content:
                "The interpretation of residuals depends on the model and task. For some statistical models, assumptions about independence, variance, or error distributions matter for inference; predictive performance should also be checked on appropriate held-out data.",
            },
          ],
          example:
            "Plot residuals against predicted house prices. A curved pattern may indicate that the model misses a nonlinear relationship.",
          exercise:
            "Create a residual plot and describe whether the errors show visible patterns or unusually large deviations.",
          quiz: [
            {
              question: "How is a residual commonly calculated?",
              options: [
                "Observed value minus predicted value",
                "Predicted value divided by row number",
                "Feature count minus column count",
                "Mean plus median",
              ],
              answer: "Observed value minus predicted value",
              explanation:
                "A residual measures the difference between an observed value and its prediction.",
            },
            {
              question: "What can a residual plot help reveal?",
              options: [
                "Systematic patterns in prediction errors",
                "The computer's operating system",
                "The number of project folders",
                "The color of the report title",
              ],
              answer: "Systematic patterns in prediction errors",
              explanation:
                "Residual plots help identify patterns that may indicate model limitations.",
            },
          ],
        },
        {
          id: "me-w3-l3",
          title: "Cross-Validation",
          introduction:
            "Use repeated training and validation folds to estimate how model performance varies across data partitions.",
          sections: [
            {
              heading: "K-fold cross-validation",
              content:
                "In K-fold cross-validation, data is divided into K folds. Each fold is used for validation once while the remaining folds are used for training. The results provide a more informative view of performance variability than a single split in many settings.",
            },
            {
              heading: "Choosing a suitable strategy",
              content:
                "Use stratified folds when class proportions matter. Grouped observations may require group-aware splitting. Time-series data needs a strategy that respects time order.",
            },
          ],
          example:
            "Use cross_val_score with an appropriate scikit-learn estimator and cross-validation strategy to obtain scores across multiple folds.",
          exercise:
            "Evaluate one model using five-fold cross-validation and report the mean and variation of the scores.",
          quiz: [
            {
              question: "What happens in K-fold cross-validation?",
              options: [
                "Each fold serves as validation once",
                "The test set is used to train every fold",
                "All data is deleted except one row",
                "Only one model feature is allowed",
              ],
              answer: "Each fold serves as validation once",
              explanation:
                "K-fold cross-validation rotates the validation fold across K partitions.",
            },
            {
              question: "Which strategy is often suitable when observations are grouped by person?",
              options: [
                "Group-aware cross-validation",
                "Randomly mixing every group without checks",
                "Sorting by feature name",
                "Using the test set as training data",
              ],
              answer: "Group-aware cross-validation",
              explanation:
                "Group-aware splitting helps prevent records from the same group appearing in both training and validation partitions.",
            },
          ],
        },
        {
          id: "me-w3-l4",
          title: "Hyperparameter Tuning and Model Selection",
          introduction:
            "Compare model configurations systematically without using final test results to make repeated decisions.",
          sections: [
            {
              heading: "Hyperparameters",
              content:
                "Hyperparameters are settings chosen before or during model selection, such as tree depth, regularization strength, or the number of neighbors. They differ from model parameters learned during training.",
            },
            {
              heading: "Search methods",
              content:
                "Grid search evaluates specified combinations, while randomized search samples combinations from defined distributions. Cross-validation can estimate how each configuration performs on training data.",
            },
          ],
          example:
            "Use GridSearchCV with a pipeline and a suitable scoring metric to compare several decision-tree depth values.",
          exercise:
            "Tune at least two hyperparameters using cross-validation and document the chosen configuration and scoring metric.",
          quiz: [
            {
              question: "What is a hyperparameter?",
              options: [
                "A model setting selected during configuration or tuning",
                "A true label in the test set",
                "A missing data value",
                "A chart title",
              ],
              answer: "A model setting selected during configuration or tuning",
              explanation:
                "Hyperparameters control aspects of the learning process and are selected rather than directly learned as ordinary model parameters.",
            },
            {
              question: "What is a purpose of GridSearchCV?",
              options: [
                "Compare specified parameter combinations using cross-validation",
                "Delete all training data",
                "Guarantee the highest possible real-world score",
                "Replace the evaluation metric",
              ],
              answer:
                "Compare specified parameter combinations using cross-validation",
              explanation:
                "GridSearchCV evaluates a defined parameter grid using the selected cross-validation strategy and scoring method.",
            },
          ],
        },
      ],
      assignment:
        "Evaluate a regression model using multiple metrics, inspect residuals, run a suitable cross-validation strategy, and tune selected hyperparameters.",
    },
    {
      title: "Week 4: Model Comparison and Evaluation Reporting",
      lessons: [
        {
          id: "me-w4-l1",
          title: "Comparing Multiple Models",
          introduction:
            "Develop a fair process for comparing different algorithms on the same prediction task.",
          sections: [
            {
              heading: "Fair comparisons",
              content:
                "Compare models using the same evaluation data, a consistent target definition, suitable preprocessing, and an appropriate metric. Make sure each model receives only information available at prediction time.",
            },
            {
              heading: "Beyond the highest score",
              content:
                "Consider stability, inference speed, interpretability, resource requirements, calibration, and operational constraints. Small score differences may not justify a much more complex model.",
            },
          ],
          example:
            "Compare logistic regression, a decision tree, and a random forest using the same cross-validation folds and a metric chosen for the business problem.",
          exercise:
            "Create a comparison table for three models, including mean validation score, variation, and practical trade-offs.",
          quiz: [
            {
              question: "What supports a fair model comparison?",
              options: [
                "Consistent evaluation data and suitable metrics",
                "Different test sets selected for each model",
                "Repeated tuning on the final test set",
                "Comparing unrelated target variables",
              ],
              answer: "Consistent evaluation data and suitable metrics",
              explanation:
                "Consistent evaluation conditions make model comparisons more meaningful.",
            },
            {
              question: "Why consider model complexity in addition to score?",
              options: [
                "Complexity can affect speed, maintenance, and interpretability",
                "Complex models always perform worse",
                "Complexity determines the target labels",
                "Model complexity removes all errors",
              ],
              answer:
                "Complexity can affect speed, maintenance, and interpretability",
              explanation:
                "The best practical model must satisfy performance and operational requirements.",
            },
          ],
        },
        {
          id: "me-w4-l2",
          title: "Probability Calibration and Prediction Confidence",
          introduction:
            "Understand whether predicted probabilities correspond to observed event frequencies.",
          sections: [
            {
              heading: "Calibration",
              content:
                "A well-calibrated classifier assigns probabilities that agree with observed frequencies over suitable groups of predictions. Calibration is different from discrimination: a model may rank cases well while its probabilities are poorly calibrated.",
            },
            {
              heading: "Calibration methods",
              content:
                "Reliability diagrams can compare predicted probabilities with observed event rates. Platt-style sigmoid calibration and isotonic calibration are common methods; calibration should be fitted using appropriate held-out or cross-validated predictions.",
            },
          ],
          example:
            "Use a calibration curve to check whether predictions near 0.8 correspond to positive outcomes about 80% of the time across a sufficiently large, representative group.",
          exercise:
            "Plot a reliability diagram for a classifier and explain whether its probabilities appear overconfident or underconfident.",
          quiz: [
            {
              question: "What does probability calibration assess?",
              options: [
                "Agreement between predicted probabilities and observed event frequencies",
                "The number of model features",
                "The speed of a file download",
                "The color of a confusion matrix",
              ],
              answer:
                "Agreement between predicted probabilities and observed event frequencies",
              explanation:
                "Calibration assesses whether predicted probabilities match observed frequencies.",
            },
            {
              question: "Can a model rank cases well but be poorly calibrated?",
              options: [
                "Yes, ranking and calibration measure different properties",
                "No, they are exactly the same metric",
                "Only when no labels exist",
                "Only for regression",
              ],
              answer:
                "Yes, ranking and calibration measure different properties",
              explanation:
                "Discrimination and calibration assess different aspects of probabilistic predictions.",
            },
          ],
        },
        {
          id: "me-w4-l3",
          title: "Error Analysis and Model Limitations",
          introduction:
            "Investigate where a model fails and whether those failures reveal useful improvements or risks.",
          sections: [
            {
              heading: "Error slices",
              content:
                "Analyze errors by relevant segments, such as region, time period, data quality, or class. Segment analysis may reveal uneven performance that an overall metric hides.",
            },
            {
              heading: "Limitations and responsible use",
              content:
                "Check whether the evaluation data represents expected future use. Document uncertainty, data limitations, subgroup performance, and potential consequences of mistakes. Avoid treating historical correlations as proof of causation.",
            },
          ],
          example:
            "A model performs well overall but misses a larger share of positive cases in one region. Investigate sample size, data quality, and possible distribution differences before drawing conclusions.",
          exercise:
            "Analyze a model's errors across at least two meaningful groups and document limitations without making unsupported claims.",
          quiz: [
            {
              question: "Why examine model errors by subgroup?",
              options: [
                "To discover performance differences hidden by an overall score",
                "To guarantee identical results for every group",
                "To remove the need for test data",
                "To change the target after evaluation",
              ],
              answer:
                "To discover performance differences hidden by an overall score",
              explanation:
                "Segmented evaluation can reveal important weaknesses concealed by aggregate metrics.",
            },
            {
              question: "What should an evaluation report say about limitations?",
              options: [
                "Describe uncertainty and relevant weaknesses",
                "Claim the model cannot make mistakes",
                "Hide every failed prediction",
                "Ignore the evaluation dataset",
              ],
              answer: "Describe uncertainty and relevant weaknesses",
              explanation:
                "Transparent limitations help stakeholders interpret the evidence responsibly.",
            },
          ],
        },
        {
          id: "me-w4-l4",
          title: "Final Project: Machine Learning Evaluation Report",
          introduction:
            "Bring together model evaluation, metric selection, validation, error analysis, and final reporting.",
          sections: [
            {
              heading: "Project workflow",
              content:
                "Choose a classification or regression dataset, define the target, establish a baseline, and select appropriate evaluation metrics. Compare at least two models using a sound validation strategy and keep the final test set isolated until decisions are complete.",
            },
            {
              heading: "Final report",
              content:
                "Report the evaluation setup, metrics, model comparisons, error patterns, limitations, and recommended model. Include enough information for another person to reproduce the analysis.",
            },
          ],
          example:
            "Evaluate two churn classifiers using cross-validation, precision, recall, F1-score, and a confusion matrix. Select a model based on validation results and business needs, then report final test performance once.",
          exercise:
            "Submit a reproducible evaluation notebook or script, a model-comparison table, error analysis, and a written recommendation supported by the results.",
          quiz: [
            {
              question: "When should the final test set normally be evaluated?",
              options: [
                "After model selection and tuning are complete",
                "After every hyperparameter change",
                "Before defining the target",
                "During every preprocessing fit",
              ],
              answer: "After model selection and tuning are complete",
              explanation:
                "A final evaluation after development decisions reduces repeated adaptation to test-set results.",
            },
            {
              question: "What makes a model recommendation strong?",
              options: [
                "Evidence from appropriate metrics, validation, and practical constraints",
                "The highest training score alone",
                "A model with the longest name",
                "An undocumented experiment",
              ],
              answer:
                "Evidence from appropriate metrics, validation, and practical constraints",
              explanation:
                "A useful recommendation combines reliable evaluation evidence with the requirements of the task.",
            },
          ],
        },
      ],
      assignment:
        "Complete a model evaluation report with baseline results, at least two model comparisons, appropriate metrics, validation results, error analysis, limitations, and a justified final recommendation.",
    },
  ],
};

export default modelEvaluationCourse;

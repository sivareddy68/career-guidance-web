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

export const deepLearningCourse: Course = {
  title: "Deep Learning",
  description:
    "Learn neural networks, backpropagation, activation functions, optimization, CNNs, sequence models, transformers, regularization, and deep-learning deployment through detailed explanations and practical Python examples.",
  project:
    "Build and evaluate an image-classification neural network using TensorFlow or PyTorch. Compare a baseline with an improved model, document training experiments, and evaluate its limitations.",

  weeks: [
    {
      title: "Neural Network Fundamentals",
      assignment:
        "Explain neural-network architecture, implement a simple neural network, compare activation functions, and document how training changes model parameters.",

      lessons: [
        makeLesson(
          "lesson-1",
          "Introduction to Deep Learning",
          "Deep learning is a branch of machine learning that uses neural networks with multiple layers to learn patterns from data. It is widely used in image recognition, speech processing, language understanding, recommendation systems, and scientific applications.",
          [
            {
              heading: "What is deep learning?",
              content:
                "A deep-learning model learns numerical representations from examples. Instead of manually defining every feature, the network can learn useful patterns during training. For instance, an image model may learn edges in early layers and more complex shapes in later layers.",
            },
            {
              heading: "Machine learning versus deep learning",
              content:
                "Traditional machine-learning workflows often rely on manually designed features, although this is not always necessary. Deep-learning systems can learn hierarchical representations directly from raw or lightly processed data. They often require more data and computation, and they are not automatically better for every problem.",
            },
            {
              heading: "Neurons and layers",
              content:
                "A neural network consists of computational units connected through trainable weights. An input layer receives features, hidden layers transform representations, and an output layer produces predictions. The number of hidden layers and their units are architectural choices.",
            },
            {
              heading: "Common applications",
              content:
                "Convolutional neural networks are often used for images, sequence models process ordered information, and transformers support language and other data types. The choice depends on the task, data volume, computational resources, and required reliability.",
            },
          ],
          `# A simple neural network using TensorFlow/Keras\nimport tensorflow as tf\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Input(shape=(10,)),\n    tf.keras.layers.Dense(16, activation="relu"),\n    tf.keras.layers.Dense(1, activation="sigmoid")\n])\n\nmodel.summary()`,
          "Explain the difference between machine learning and deep learning. Draw an input layer, two hidden layers, and an output layer for a student-performance prediction task.",
          [
            ["What is deep learning primarily based on?", "Neural networks with multiple computational layers", "Only relational database queries", "Only handwritten rules", "Only HTML and CSS", "Deep learning learns representations using multilayer neural networks."],
            ["What is a hidden layer?", "A layer between the input and output layers", "A database table that stores labels", "A layer that always contains the correct answers", "A programming language", "Hidden layers transform inputs into intermediate representations."],
            ["Which is a common deep-learning application?", "Image recognition", "Only writing SQL schemas", "Only styling web pages", "Only compressing text files", "Deep-learning models are commonly used to recognize objects and patterns in images."],
            ["Does deep learning always outperform traditional machine learning?", "No, performance depends on the task and available data", "Yes, in every dataset", "Yes, even without training", "No, because neural networks cannot learn", "Model suitability depends on data, task complexity, resources, and evaluation."],
            ["What is a neural-network weight?", "A trainable numerical parameter affecting computations", "A dataset filename", "A fixed quiz answer", "A Python comment", "Weights influence how information is transformed through the network."],
          ]
        ),

        makeLesson(
          "lesson-2",
          "Neurons, Weights, Biases and Forward Propagation",
          "A neural-network neuron combines input values with weights and a bias, then applies an activation function. Forward propagation carries these computations through the network to produce an output.",
          [
            {
              heading: "Weighted sum",
              content:
                "For inputs x and weights w, a basic neuron computes z = w1x1 + w2x2 + ... + b. The bias b shifts the weighted sum. The result is passed to an activation function to produce the neuron's output.",
            },
            {
              heading: "Activation functions",
              content:
                "An activation function transforms the weighted sum. Without suitable nonlinear activations, stacking ordinary linear layers would still produce an overall linear transformation. Nonlinear activations let networks learn more complex relationships.",
            },
            {
              heading: "Forward propagation",
              content:
                "Forward propagation calculates predictions from the input through each layer. The output may be a class probability, a set of class scores, or a numerical regression value, depending on the architecture and output layer.",
            },
            {
              heading: "Tensor shapes",
              content:
                "A batch is often represented as a matrix with one row per example and one column per feature. If a batch contains 32 examples and each has 10 features, its input shape is commonly (32, 10). Understanding tensor shapes helps prevent dimension mismatch errors.",
            },
          ],
          `import numpy as np\n\nx = np.array([2.0, 3.0])\nw = np.array([0.5, -0.2])\nb = 0.1\n\nz = np.dot(x, w) + b\noutput = max(0, z)  # ReLU for this single value\n\nprint("Weighted sum:", z)\nprint("Output:", output)`,
          "Calculate the weighted sum for inputs [2, 3], weights [0.5, -0.2], and bias 0.1. Then apply ReLU and explain the result.",
          [
            ["What is the role of a neuron's bias?", "It shifts the weighted sum before activation", "It stores the full training dataset", "It calculates test accuracy automatically", "It replaces all input features", "The bias is an adjustable parameter added to the weighted sum."],
            ["What does forward propagation do?", "Computes predictions by passing inputs through network layers", "Updates weights using the loss gradient", "Splits data into train and test sets", "Deletes model parameters", "Forward propagation calculates the network output from the input."],
            ["Why are nonlinear activation functions useful?", "They allow networks to learn nonlinear relationships", "They guarantee every prediction is correct", "They remove the need for training", "They make every layer identical", "Without nonlinear activations, stacked linear layers remain equivalent to a linear transformation."],
            ["What is the common shape of a batch with 32 examples and 10 features?", "(32, 10)", "(10, 32, 10, 32)", "(32,)", "(10,)", "A two-dimensional batch matrix commonly has shape (examples, features)."],
            ["What does a neuron commonly calculate before activation?", "A weighted sum plus a bias", "A list of filenames", "A database join", "The final test report", "The neuron computes a weighted combination of inputs and adds its bias."],
          ]
        ),

        makeLesson(
          "lesson-3",
          "Activation Functions: ReLU, Sigmoid and Tanh",
          "Activation functions determine how neurons transform their inputs. Their properties influence gradient flow, output interpretation, and the kinds of relationships a neural network can learn.",
          [
            {
              heading: "ReLU",
              content:
                "ReLU is f(x) = max(0, x). It outputs zero for negative inputs and the input itself for positive inputs. It is computationally simple and commonly used in hidden layers, although some neurons can stop receiving useful gradients for inputs in its negative region.",
            },
            {
              heading: "Sigmoid",
              content:
                "Sigmoid maps real-valued inputs into the interval (0, 1). It is often used for a binary classifier's output when interpreting the output as a probability is appropriate. At very large positive or negative inputs, its gradient becomes small, which can slow learning in some settings.",
            },
            {
              heading: "Tanh",
              content:
                "Tanh maps values into (-1, 1) and is centered around zero. It can be useful in certain recurrent architectures, but its gradients also become small when inputs saturate at extreme values.",
            },
            {
              heading: "Choosing an activation",
              content:
                "ReLU and related functions are common in hidden layers. Sigmoid is common for a binary output, and softmax is often used to produce a probability distribution over mutually exclusive classes. The activation must match the output interpretation and loss function.",
            },
          ],
          `import tensorflow as tf\n\nx = tf.constant([-2.0, -1.0, 0.0, 1.0, 2.0])\n\nprint("ReLU:", tf.nn.relu(x).numpy())\nprint("Sigmoid:", tf.nn.sigmoid(x).numpy())\nprint("Tanh:", tf.nn.tanh(x).numpy())`,
          "Create a table comparing ReLU, sigmoid, tanh, and softmax. Include output ranges and a typical use case for each.",
          [
            ["What is the ReLU function?", "max(0, x)", "1 / (1 + exp(x))", "x squared for every input", "Always returns 1", "ReLU returns zero for negative inputs and the input itself for nonnegative inputs."],
            ["What is the output range of sigmoid?", "Strictly between 0 and 1", "Between -1 and 1 only", "Any integer", "Always exactly 0 or 1", "The sigmoid function approaches zero and one but does not reach them for finite real inputs."],
            ["What is the usual output range of tanh?", "Between -1 and 1", "Between 0 and 1 only", "Between 10 and 100", "Only positive integers", "Tanh produces values in the interval (-1, 1) for finite real inputs."],
            ["What is a common use for softmax?", "Producing class probabilities for mutually exclusive classes", "Sorting input filenames", "Normalizing database identifiers", "Replacing every hidden layer", "Softmax converts class scores into normalized values that sum to one."],
            ["What can happen when sigmoid saturates at extreme inputs?", "Its gradient can become very small", "Its output becomes a string", "It always produces a gradient of 100", "It automatically removes all weights", "Sigmoid's derivative becomes small near its output limits."],
          ]
        ),

        makeLesson(
          "lesson-4",
          "Loss Functions and Neural-Network Objectives",
          "A loss function measures how far model predictions are from target values. Training algorithms use this value and its gradients to adjust trainable parameters.",
          [
            {
              heading: "What is a loss function?",
              content:
                "Loss assigns a numerical penalty to a prediction or batch of predictions. The optimizer attempts to minimize the chosen training objective. The loss must be compatible with the task, output layer, target encoding, and implementation.",
            },
            {
              heading: "Mean squared error",
              content:
                "Mean squared error averages the squared differences between predicted and actual numerical values. It is a common regression loss and gives larger errors greater influence because the differences are squared.",
            },
            {
              heading: "Cross-entropy",
              content:
                "Binary cross-entropy is commonly used for binary classification with suitable probability outputs. Categorical cross-entropy is often used for mutually exclusive multiclass classification. The exact configuration depends on whether labels are encoded as class indices or one-hot vectors and whether logits or probabilities are supplied.",
            },
            {
              heading: "Loss versus evaluation metrics",
              content:
                "The training loss is the objective optimized by the algorithm. Evaluation metrics describe performance in terms useful for the task. They need not be identical: a model can be trained with cross-entropy while also being evaluated with precision, recall, or F1-score.",
            },
          ],
          `import tensorflow as tf\n\n# Regression loss\nmse = tf.keras.losses.MeanSquaredError()\nprint(mse([3.0, 5.0], [2.0, 7.0]).numpy())\n\n# Binary classification loss\nbce = tf.keras.losses.BinaryCrossentropy()\nprint(bce([1.0, 0.0], [0.9, 0.2]).numpy())`,
          "Choose a suitable loss function for house-price regression, binary classification, and mutually exclusive multiclass classification. Explain each choice.",
          [
            ["What is the main purpose of a training loss?", "Quantify prediction error for optimization", "Count source-code lines", "Choose a dataset filename", "Guarantee a fair model automatically", "A loss supplies an objective that training procedures attempt to minimize."],
            ["Which is a common loss for numerical regression?", "Mean squared error", "Binary cross-entropy for every target", "Softmax itself", "Confusion matrix size", "Mean squared error is a common objective for numerical prediction."],
            ["Which loss is commonly used for binary classification with suitable probability outputs?", "Binary cross-entropy", "Mean absolute percentage of HTML tags", "Sorting loss", "File-system loss", "Binary cross-entropy compares predicted probabilities with binary targets."],
            ["Is the training loss always the only metric needed for final evaluation?", "No, task-specific evaluation metrics are also important", "Yes, for every application", "Yes, because loss always measures fairness", "No, because training loss cannot be calculated", "Different evaluation metrics can reveal operational performance not captured by training loss alone."],
            ["What should guide the choice of a loss function?", "The task, target encoding, output configuration, and implementation", "Only the model's name", "Only the computer's wallpaper", "Only the number of folders in the project", "Loss configuration must match the learning task and output representation."],
          ]
        ),
      ],
    },

    {
      title: "Training and Optimization",
      assignment:
        "Train a small neural network and compare learning rates, batch sizes, and optimizers. Record training and validation loss and explain any signs of overfitting.",

      lessons: [
        makeLesson(
          "lesson-5",
          "Backpropagation and Gradients",
          "Backpropagation efficiently calculates how a loss changes with respect to network parameters. Optimizers use these gradients to update weights and biases.",
          [
            {
              heading: "The gradient",
              content:
                "A gradient describes how a function changes with respect to its parameters. For a scalar loss and many trainable weights, the gradient contains one partial derivative for each parameter. The gradient indicates how a small parameter change affects the loss locally.",
            },
            {
              heading: "The chain rule",
              content:
                "Backpropagation applies the chain rule to calculate derivatives through a composition of network operations. Starting from the loss, it propagates derivative information backward through the output and hidden layers.",
            },
            {
              heading: "Parameter updates",
              content:
                "Gradient descent commonly updates a parameter by subtracting the learning rate multiplied by its gradient. The learning rate controls the update scale. Too large a rate may cause unstable training, while too small a rate can make learning slow.",
            },
            {
              heading: "Automatic differentiation",
              content:
                "Frameworks such as TensorFlow and PyTorch track suitable operations and calculate gradients automatically. Developers still need to choose a valid loss, construct the computation correctly, and check that gradients and parameter updates behave as expected.",
            },
          ],
          `import torch\n\nw = torch.tensor(2.0, requires_grad=True)\nloss = (w - 5.0) ** 2\nloss.backward()\n\nprint("Loss:", loss.item())\nprint("Gradient:", w.grad.item())\n\nwith torch.no_grad():\n    w -= 0.1 * w.grad\nprint("Updated weight:", w.item())`,
          "For the loss L = (w - 5)^2, calculate the gradient when w = 2. Explain how a gradient-descent update changes w.",
          [
            ["What does backpropagation calculate?", "Gradients of the loss with respect to trainable parameters", "The number of files in a project", "The final test labels automatically", "The network's hardware temperature", "Backpropagation uses the chain rule to compute parameter gradients."],
            ["What does the learning rate control?", "The scale of gradient-based parameter updates", "The number of target classes automatically", "The file extension", "The size of the test labels", "The learning rate determines how strongly gradients affect each update."],
            ["What is the chain rule used for in backpropagation?", "Computing derivatives through composed operations", "Sorting class names", "Splitting a dataset alphabetically", "Saving a model to disk only", "Neural networks are compositions of functions, so the chain rule propagates derivatives through them."],
            ["What can an excessively large learning rate cause?", "Unstable updates or failure to converge", "Guaranteed perfect accuracy", "Automatic data cleaning", "A zero-sized model in every case", "Large updates may overshoot useful parameter values and destabilize optimization."],
            ["What does requires_grad=True do for a PyTorch tensor in this example?", "Tracks operations needed to calculate its gradient", "Converts the tensor into a CSV file", "Automatically splits training data", "Guarantees the gradient is zero", "PyTorch can track operations involving the tensor and compute its gradient during backpropagation."],
          ]
        ),

        makeLesson(
          "lesson-6",
          "Gradient Descent, SGD and Adam",
          "Optimizers determine how trainable parameters are updated using gradients. Different optimization algorithms can affect convergence speed, stability, and final performance.",
          [
            {
              heading: "Batch gradient descent",
              content:
                "Full-batch gradient descent calculates gradients using the complete training set before an update. It can be expensive for large datasets. Mini-batch training estimates gradients using a smaller subset, providing a practical compromise between computation and gradient noise.",
            },
            {
              heading: "Stochastic gradient descent",
              content:
                "SGD updates parameters using gradients from individual examples or, in common deep-learning implementations, mini-batches. Its noisy updates can be useful for optimization, but learning-rate schedules and other settings strongly influence behavior.",
            },
            {
              heading: "Momentum",
              content:
                "Momentum combines information from recent gradients to smooth updates and help movement in persistent directions. It can accelerate progress through some regions of the loss surface and reduce oscillation in others.",
            },
            {
              heading: "Adam",
              content:
                "Adam maintains moving estimates of gradient means and squared gradients to adapt parameter-specific update scales. It is a popular starting point for many tasks, but it is not universally best. Learning rate, regularization, batch size, and the data still require careful consideration.",
            },
          ],
          `import tensorflow as tf\n\nsgd = tf.keras.optimizers.SGD(learning_rate=0.01, momentum=0.9)\nadam = tf.keras.optimizers.Adam(learning_rate=0.001)\n\nprint("SGD:", sgd.get_config())\nprint("Adam:", adam.get_config())`,
          "Train the same small model using SGD and Adam under a consistent evaluation procedure. Record the learning rate, training time, validation score, and limitations of the comparison.",
          [
            ["What is a mini-batch?", "A small subset of training examples used for an update", "The complete test set by definition", "A group of model names", "A neural network's output activation", "Mini-batches provide data for individual optimization steps."],
            ["What does momentum do?", "Uses information from recent gradients to influence updates", "Removes the loss function", "Guarantees that gradients are always zero", "Replaces model weights with labels", "Momentum accumulates a running direction based on previous gradients."],
            ["What is a characteristic of Adam?", "It adapts update scales using moving estimates of gradients", "It never uses gradients", "It is only a dataset splitting algorithm", "It guarantees the global minimum for every problem", "Adam maintains moving estimates of gradients and squared gradients."],
            ["Why compare optimizers under consistent conditions?", "To make differences in results more interpretable", "To guarantee that every model has identical weights", "To avoid measuring validation performance", "To force all losses to equal zero", "Consistent conditions reduce confounding factors in the comparison."],
            ["Is Adam always the best optimizer?", "No, performance depends on the model, data, and settings", "Yes, for every possible task", "Yes, because it does not need a learning rate", "No, because it cannot update weights", "Adam is widely used but still requires appropriate settings and empirical validation."],
          ]
        ),

        makeLesson(
          "lesson-7",
          "Epochs, Batch Size and Learning-Rate Scheduling",
          "Training settings control how frequently parameters are updated, how long training runs, and how the learning rate changes over time.",
          [
            {
              heading: "Epochs",
              content:
                "One epoch means the training algorithm has processed the training examples once, although details can vary with data pipelines and dropped incomplete batches. More epochs can improve learning initially but may eventually lead to overfitting.",
            },
            {
              heading: "Batch size",
              content:
                "Batch size is the number of examples processed for an update. Small batches use less memory but produce noisier gradient estimates. Larger batches can improve hardware utilization but require more memory and may need different learning-rate settings.",
            },
            {
              heading: "Learning-rate schedules",
              content:
                "A schedule changes the learning rate during training. Reducing it over time can support finer updates after initial progress. Common approaches include step decay, exponential decay, cosine schedules, and reductions triggered by validation plateaus.",
            },
            {
              heading: "Early stopping",
              content:
                "Early stopping monitors a chosen validation measure and stops training when improvement stalls for a specified patience period. It can reduce wasted computation and limit overfitting, but the monitored metric, patience, and best-weight restoration behavior should be chosen deliberately.",
            },
          ],
          `import tensorflow as tf\n\ncallbacks = [\n    tf.keras.callbacks.EarlyStopping(\n        monitor="val_loss",\n        patience=3,\n        restore_best_weights=True\n    ),\n    tf.keras.callbacks.ReduceLROnPlateau(\n        monitor="val_loss",\n        factor=0.5,\n        patience=2\n    )\n]\n\n# model.fit(X_train, y_train,\n#           validation_data=(X_val, y_val),\n#           epochs=50, callbacks=callbacks)`,
          "Design a training experiment comparing two batch sizes and an early-stopping configuration. Explain how you would select the best checkpoint without using test data.",
          [
            ["What is one epoch?", "One pass through the training examples", "One prediction only", "One validation metric only", "One layer in a neural network", "An epoch generally represents processing the training dataset once."],
            ["What is a possible drawback of a very large batch size?", "Higher memory requirements", "It eliminates every gradient", "It prevents any matrix multiplication", "It guarantees underfitting", "Large batches generally require more memory and may affect optimization behavior."],
            ["Why use a learning-rate schedule?", "To adjust update size during training", "To automatically correct all incorrect labels", "To replace the output layer", "To make the test set part of training", "Learning-rate schedules change optimization behavior over the course of training."],
            ["What does early stopping commonly monitor?", "A validation measure such as validation loss", "Only the number of code comments", "The name of the model file", "The computer's screen resolution", "Early stopping uses monitored validation behavior to determine when training should stop."],
            ["Why restore the best validation checkpoint?", "The final epoch may perform worse than an earlier epoch", "The first epoch always has perfect accuracy", "Validation loss is never allowed to change", "The test labels must be copied into training", "Training can continue past the best validation result, so restoring the selected checkpoint can be useful."],
          ]
        ),

        makeLesson(
          "lesson-8",
          "Regularization and Preventing Overfitting",
          "Regularization encourages a model to generalize instead of memorizing training examples. It can be combined with appropriate data splitting, monitoring, and model selection.",
          [
            {
              heading: "L1 and L2 regularization",
              content:
                "L1 regularization adds a penalty related to the absolute values of parameters. L2 regularization penalizes squared parameter magnitudes. These penalties can discourage overly large weights, though their effects depend on model architecture and optimization.",
            },
            {
              heading: "Dropout",
              content:
                "Dropout randomly disables selected activations during training to reduce reliance on particular pathways. During inference, the framework typically disables dropout and applies the appropriate scaling convention. Excessive dropout can make learning harder.",
            },
            {
              heading: "Data augmentation",
              content:
                "Data augmentation creates modified training examples, such as small image rotations or crops, when those changes preserve the label. Augmentation can improve robustness but should reflect realistic transformations and be applied only to training data in a properly separated evaluation workflow.",
            },
            {
              heading: "Validation and capacity",
              content:
                "Regularization is not a substitute for clean data or correct splitting. Compare training and validation curves, tune regularization settings using validation procedures, and keep the final test set separate. A model that is too constrained may underfit.",
            },
          ],
          `import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Input(shape=(20,)),\n    tf.keras.layers.Dense(\n        64, activation="relu",\n        kernel_regularizer=tf.keras.regularizers.l2(0.001)\n    ),\n    tf.keras.layers.Dropout(0.3),\n    tf.keras.layers.Dense(1, activation="sigmoid")\n])`,
          "Train a model with and without dropout or L2 regularization. Compare training and validation results and explain whether each version appears underfit or overfit.",
          [
            ["What is a goal of regularization?", "Reduce overfitting and improve generalization", "Guarantee every training label is correct", "Increase the number of duplicate records", "Remove the need for validation", "Regularization discourages model behavior that may fit training noise too closely."],
            ["What does dropout do during training?", "Randomly disables selected activations", "Deletes the test dataset permanently", "Changes every target label", "Converts images to database tables", "Dropout reduces reliance on particular activations during training."],
            ["What does L2 regularization penalize?", "Squared parameter magnitudes", "The number of test examples only", "All correct predictions", "The number of file extensions", "L2 regularization adds a penalty related to squared parameter values."],
            ["When should image data augmentation normally be applied?", "To training examples using label-preserving transformations", "To final test examples to improve the reported score", "To test labels only", "Only after final evaluation to choose the best model", "Training-only augmentation avoids contaminating evaluation and should preserve the target meaning."],
            ["Can too much regularization cause problems?", "Yes, it can make a model underfit", "No, regularization always improves every metric", "Yes, it automatically makes every model a classifier", "No, it removes all training requirements", "Excessive regularization can prevent a model from learning useful patterns."],
          ]
        ),
      ],
    },

    {
      title: "Computer Vision and Sequence Models",
      assignment:
        "Build a small image classifier or sequence model. Explain the architecture, input shapes, evaluation metrics, and common failure modes.",

      lessons: [
        makeLesson(
          "lesson-9",
          "Convolutional Neural Networks",
          "Convolutional neural networks (CNNs) are designed to learn spatial patterns. They are widely used in image classification, object detection, medical-image analysis, and related tasks.",
          [
            {
              heading: "Convolution layers",
              content:
                "A convolution applies learned filters across local regions of an input. The resulting feature maps respond to patterns detected by those filters. Weight sharing allows the same filter to be applied at different spatial positions.",
            },
            {
              heading: "Stride and padding",
              content:
                "Stride controls how far the filter moves between positions. Padding adds values around the input boundary, often zeros, to control output dimensions. These settings affect the size and spatial resolution of feature maps.",
            },
            {
              heading: "Pooling",
              content:
                "Pooling reduces spatial dimensions by summarizing local regions, for example with max pooling. Some modern architectures instead use strided convolutions or other downsampling methods. Pooling can reduce computation but may discard useful spatial information.",
            },
            {
              heading: "Feature hierarchy",
              content:
                "Early CNN layers may detect simple edges and textures, while deeper layers combine them into more complex patterns. The features learned depend on the training data and objective; a network does not automatically learn meaningful or unbiased representations.",
            },
          ],
          `import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Input(shape=(64, 64, 3)),\n    tf.keras.layers.Conv2D(32, 3, activation="relu"),\n    tf.keras.layers.MaxPooling2D(),\n    tf.keras.layers.Conv2D(64, 3, activation="relu"),\n    tf.keras.layers.GlobalAveragePooling2D(),\n    tf.keras.layers.Dense(10, activation="softmax")\n])\n\nmodel.summary()`,
          "Draw a CNN containing two convolution layers, one pooling layer, and an output layer. Explain what happens to image dimensions and feature representations.",
          [
            ["What is a convolution filter used for?", "Learning local spatial patterns in data", "Storing the final test labels", "Replacing all input pixels with text", "Choosing a database username", "Convolution filters learn patterns that are applied across spatial positions."],
            ["What does stride control?", "The step size when a filter moves", "The number of target labels", "The model's filename", "The training set's class names", "Stride determines the spatial step between convolution positions."],
            ["What is a common purpose of pooling?", "Reducing spatial dimensions", "Increasing the number of labels automatically", "Guaranteeing correct predictions", "Replacing every learned filter with a fixed answer", "Pooling summarizes local regions and often reduces feature-map dimensions."],
            ["What is weight sharing in a convolution?", "The same filter parameters are used at multiple spatial positions", "Each pixel must have a completely unrelated filter", "All layers use the same output labels", "The training data is shared publicly", "A convolution applies the same learned filter across different positions."],
            ["What is a common CNN application?", "Image classification", "Only relational database design", "Only file encryption", "Only spreadsheet formatting", "CNNs are widely used to recognize visual patterns in images."],
          ]
        ),

        makeLesson(
          "lesson-10",
          "Image Classification and Transfer Learning",
          "Image classification assigns one or more labels to an image. Transfer learning reuses representations learned from a previously trained model to improve learning efficiency on a new task.",
          [
            {
              heading: "Image preprocessing",
              content:
                "Images often need consistent dimensions, channel ordering, and numeric scaling. Some pretrained architectures require a specific preprocessing function. The preprocessing used during training must be consistent with the model's expectations at inference time.",
            },
            {
              heading: "Transfer learning",
              content:
                "A pretrained model has already learned representations from another dataset. You can use it as a fixed feature extractor or fine-tune some of its layers on the new task. Transfer learning can reduce data and computation requirements, but the source and target domains must be sufficiently compatible.",
            },
            {
              heading: "Freezing and fine-tuning",
              content:
                "Freezing a layer prevents its weights from being updated. Fine-tuning unfreezes selected layers and trains them on the target data, often with a smaller learning rate. Fine-tuning too aggressively on a small dataset can damage useful pretrained representations or overfit.",
            },
            {
              heading: "Evaluation and data splits",
              content:
                "Keep related images, near-duplicates, and images from the same source from leaking across train and test sets when they could inflate performance. Evaluate class-specific errors and consider whether the test images represent the intended deployment environment.",
            },
          ],
          `import tensorflow as tf\n\nbase = tf.keras.applications.MobileNetV2(\n    weights="imagenet",\n    include_top=False,\n    input_shape=(160, 160, 3)\n)\nbase.trainable = False\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Input(shape=(160, 160, 3)),\n    tf.keras.layers.Rescaling(1.0 / 127.5, offset=-1),\n    base,\n    tf.keras.layers.GlobalAveragePooling2D(),\n    tf.keras.layers.Dense(3, activation="softmax")\n])`,
          "Plan an image classifier using transfer learning. Describe preprocessing, freezing the base model, training a classification head, and evaluating on held-out images.",
          [
            ["What is transfer learning?", "Reusing knowledge from a pretrained model for a related task", "Training without any data", "Copying test labels into the training set", "Replacing images with database keys", "Transfer learning starts from representations learned on another task or dataset."],
            ["What happens when a layer is frozen?", "Its trainable parameters are not updated during training", "Its output is always empty", "The dataset is permanently deleted", "Every later layer becomes frozen automatically in every framework", "Freezing generally prevents the layer's weights from being updated."],
            ["Why is preprocessing consistency important?", "The model expects inputs in a particular format and numerical range", "It guarantees perfect accuracy", "It removes the need for labels", "It prevents every kind of data drift", "Inconsistent preprocessing can cause a mismatch between training and inference inputs."],
            ["What is a risk of fine-tuning too aggressively on a small dataset?", "Overfitting or damaging useful pretrained representations", "Guaranteed improvement in all metrics", "Automatic conversion to regression", "The disappearance of every convolution filter", "Small datasets can provide insufficient evidence for safely changing many pretrained parameters."],
            ["Why keep near-duplicate images out of separate train and test sets when appropriate?", "To avoid overly optimistic evaluation from highly similar examples", "To increase the number of model layers", "To make every label identical", "To eliminate the need for preprocessing", "Related images crossing the split can make the test task unrealistically easy."],
          ]
        ),

        makeLesson(
          "lesson-11",
          "Recurrent Neural Networks, LSTM and GRU",
          "Sequence models learn from ordered data such as text, sensor readings, and time series. Recurrent neural networks process a sequence step by step while maintaining a hidden state.",
          [
            {
              heading: "Sequential inputs",
              content:
                "A sequence contains ordered elements, such as daily attendance values or words in a sentence. A sequence model may use the order and context of earlier elements to interpret later elements. Input shape often includes batch size, time steps, and features.",
            },
            {
              heading: "Recurrent neural networks",
              content:
                "An RNN updates a hidden state at each time step using the current input and previous state. This allows information from earlier steps to influence later outputs. Basic RNNs can struggle to learn long-range dependencies because gradients may vanish or explode during training.",
            },
            {
              heading: "LSTM and GRU",
              content:
                "LSTM networks use gates and a cell state to control information retention and updates. GRUs use a related gating mechanism with a simpler structure. They can help with longer dependencies, although their performance depends on the task, data, and training process.",
            },
            {
              heading: "Sequence evaluation",
              content:
                "For forecasting, preserve chronological order and avoid using future observations as inputs for earlier predictions. For sequence classification, ensure the evaluation split reflects how sequences will be encountered in real use. Compare against suitable simple baselines.",
            },
          ],
          `import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Input(shape=(20, 5)),\n    tf.keras.layers.LSTM(32),\n    tf.keras.layers.Dense(1)\n])\n\nmodel.summary()`,
          "Design an LSTM or GRU model for predicting a future sensor value. Define the sequence length, features per time step, target, and time-aware evaluation strategy.",
          [
            ["What is the purpose of an RNN hidden state?", "Carry information across sequence steps", "Store the Python source code", "Replace every target label", "Calculate a confusion matrix without predictions", "The hidden state passes information from earlier time steps to later computations."],
            ["Which is a common challenge for basic RNNs?", "Vanishing or exploding gradients over long sequences", "Inability to accept ordered inputs", "Inability to use numerical features", "Guaranteed zero training loss", "Gradient problems can make long-range dependencies difficult to learn."],
            ["What is a characteristic of LSTM networks?", "Gates control information flow through a cell state", "They only perform SQL joins", "They require every sequence to be unordered", "They cannot be trained with gradients", "LSTMs use gates and a cell state to manage information over time."],
            ["What is a common input shape for a sequence batch?", "Batch size, time steps, and features", "Only the model filename", "Only the number of classes in every task", "A single scalar for all possible sequences", "Sequence models commonly represent inputs using batch, time, and feature dimensions."],
            ["Why is chronological evaluation important for forecasting?", "It avoids using future information to predict the past", "It guarantees that all future predictions are correct", "It makes every sequence independent", "It removes the need for a target", "Time-aware splitting better reflects forecasting future observations from past data."],
          ]
        ),

        makeLesson(
          "lesson-12",
          "Attention Mechanisms and Transformers",
          "Attention mechanisms let a model combine information from different input positions. Transformer architectures use attention and feed-forward layers to learn relationships across sequences and are widely used in language, vision, and multimodal tasks.",
          [
            {
              heading: "The attention idea",
              content:
                "Attention computes relevance weights that determine how information from different positions contributes to a representation. In scaled dot-product attention, queries and keys determine compatibility scores, which are scaled and normalized before weighting values.",
            },
            {
              heading: "Self-attention",
              content:
                "Self-attention allows each position to combine information from other positions in the same sequence. This can capture relationships that are far apart. A standard full self-attention operation has computational and memory costs that grow quadratically with sequence length.",
            },
            {
              heading: "Multi-head attention",
              content:
                "Multi-head attention runs several attention computations in parallel, allowing the model to represent different relationships. The resulting representations are combined through learned transformations. More heads and larger dimensions increase computational demands.",
            },
            {
              heading: "Positional information",
              content:
                "Attention alone does not inherently encode the order of a sequence. Transformers therefore use positional encodings, positional embeddings, or other position-aware mechanisms. Without suitable positional information, word order may not be represented as intended.",
            },
          ],
          `# Conceptual attention calculation\nimport torch\nimport torch.nn.functional as F\n\nquery = torch.randn(2, 4, 8)\nkey = torch.randn(2, 4, 8)\nvalue = torch.randn(2, 4, 8)\n\nscores = query @ key.transpose(-2, -1) / (8 ** 0.5)\nweights = F.softmax(scores, dim=-1)\noutput = weights @ value\n\nprint("Attention output shape:", output.shape)`,
          "Explain queries, keys, and values in self-attention. Draw a transformer block containing attention, a feed-forward network, residual connections, and normalization.",
          [
            ["What is the main role of attention?", "Weight information from different positions according to relevance scores", "Sort Python files by name", "Remove all hidden layers", "Guarantee correct answers without training", "Attention computes weights that determine how information contributes to an output representation."],
            ["What does self-attention compare or combine?", "Representations from positions within the same input sequence", "Only filenames from different projects", "Only training and test accuracy numbers", "Only image file extensions", "Self-attention relates elements within the same input sequence."],
            ["Why do transformers need positional information mechanisms?", "Attention alone does not inherently encode sequence order", "Attention cannot process numerical vectors", "Every transformer must be a regression model", "Positional information guarantees perfect predictions", "Position-aware mechanisms help transformers represent the order of tokens."],
            ["What does multi-head attention provide?", "Several attention computations that can represent different relationships", "A guarantee that every output is correct", "A way to remove all input tokens", "A database index for each feature", "Multiple heads can learn different attention patterns."],
            ["How does full self-attention typically scale with sequence length?", "Its pairwise attention computation has quadratic scaling", "Its cost is always constant regardless of sequence length", "Its cost decreases to zero as sequences grow", "It uses no memory", "Each position can interact with every other position, leading to quadratic scaling in standard full attention."],
          ]
        ),
      ],
    },

    {
      title: "Advanced Training and Deployment",
      assignment:
        "Complete an image-classification or sequence-model project. Compare at least two approaches, document reproducible training settings, evaluate held-out performance, and prepare a model card with limitations.",

      lessons: [
        makeLesson(
          "lesson-13",
          "Hyperparameter Tuning and Experiment Tracking",
          "Deep-learning performance depends on architecture and training choices. Systematic experiments make it easier to understand which changes help and to reproduce a successful run.",
          [
            {
              heading: "Parameters versus hyperparameters",
              content:
                "Parameters such as weights and biases are learned from training data. Hyperparameters are configuration choices, including learning rate, batch size, number of layers, hidden dimensions, dropout rate, and optimizer settings.",
            },
            {
              heading: "Controlled experiments",
              content:
                "Change a limited number of settings at a time or use a documented search strategy. Keep data splits and evaluation metrics consistent. Because training can be stochastic, results may vary across random seeds, hardware, or library versions.",
            },
            {
              heading: "Experiment records",
              content:
                "Record model architecture, dataset version, preprocessing, random seed, hyperparameters, training curves, validation scores, and software environment. Tools such as TensorBoard and experiment-tracking platforms can organize runs and visualizations.",
            },
            {
              heading: "Avoiding selection bias",
              content:
                "Use validation results for tuning and reserve the final test set for final evaluation. When many experiments are compared, the best validation score may be optimistic due to selection. A separate test set or nested evaluation can help assess the selected approach more fairly.",
            },
          ],
          `import tensorflow as tf\n\nlog_dir = "logs/training"\ntensorboard = tf.keras.callbacks.TensorBoard(\n    log_dir=log_dir,\n    histogram_freq=1\n)\n\n# model.fit(\n#     X_train, y_train,\n#     validation_data=(X_val, y_val),\n#     epochs=20,\n#     callbacks=[tensorboard]\n# )`,
          "Create an experiment table for three learning rates. Record the model configuration, random seed, training duration, best validation score, and final test score only after selection.",
          [
            ["What is a hyperparameter?", "A configuration choice set for the training process", "A weight necessarily learned by backpropagation", "An actual class label", "A test example's filename", "Hyperparameters configure training and architecture rather than being learned as ordinary model weights."],
            ["Why keep an experiment log?", "To compare runs and reproduce results", "To guarantee zero prediction error", "To remove the need for data splits", "To automatically fix every model defect", "Experiment tracking records settings and outcomes for analysis and reproducibility."],
            ["Why should comparisons use consistent evaluation metrics?", "To make performance differences easier to interpret", "To guarantee identical model weights", "To avoid recording results", "To ensure every model has the same number of layers", "Consistent metrics enable meaningful comparison between runs."],
            ["What can happen after testing many configurations against one validation set?", "The selected validation result may be optimistically biased", "The final model must have no parameters", "Every run becomes a baseline model", "Validation data is automatically converted into test data", "Selecting the best of many trials can overfit the validation set."],
            ["Which tool can visualize training curves in TensorFlow?", "TensorBoard", "HTML", "CSS", "SQLite alone", "TensorBoard can visualize logged metrics and training behavior."],
          ]
        ),

        makeLesson(
          "lesson-14",
          "Transfer Learning, Fine-Tuning and Efficient Models",
          "Transfer learning reuses representations from pretrained networks. Efficient-model design balances accuracy, latency, memory, energy use, and deployment constraints.",
          [
            {
              heading: "Feature extraction",
              content:
                "A pretrained base can be frozen and used to generate features for a new classifier. This reduces the number of trainable parameters and can be effective when the target dataset is small or similar to the pretraining domain.",
            },
            {
              heading: "Fine-tuning strategy",
              content:
                "After training a new output head, selected pretrained layers may be unfrozen and fine-tuned with a small learning rate. Monitor validation performance and preserve the correct preprocessing. Batch-normalization behavior may need special attention when fine-tuning on small datasets.",
            },
            {
              heading: "Efficiency and compression",
              content:
                "Smaller architectures, quantization, pruning, and knowledge distillation can reduce inference cost. These techniques can also affect accuracy, numerical stability, or hardware compatibility, so each compressed model must be evaluated after conversion.",
            },
            {
              heading: "Deployment constraints",
              content:
                "Measure end-to-end latency, memory use, throughput, and model size on the intended hardware. A model that is accurate on a powerful training computer may be too slow for a mobile device or edge sensor. Benchmark with realistic inputs and workloads.",
            },
          ],
          `# Example: freeze a pretrained base first\nbase.trainable = False\n\nmodel.compile(\n    optimizer="adam",\n    loss="categorical_crossentropy",\n    metrics=["accuracy"]\n)\n\n# Train the new classification head before selectively fine-tuning.\n# Verify that the preprocessing matches the selected base model.`,
          "Compare a frozen pretrained model with a fine-tuned model. Record validation performance, model size, inference latency, and any signs of overfitting.",
          [
            ["What is a common reason to freeze a pretrained base initially?", "To train a new head while keeping pretrained features fixed", "To make all weights random again automatically", "To eliminate the output layer", "To copy the test labels into training", "Freezing allows the new task-specific head to train without changing the base weights."],
            ["Why can fine-tuning use a smaller learning rate?", "To make more cautious updates to useful pretrained parameters", "To guarantee every prediction is correct", "To avoid computing gradients entirely", "To increase every weight by the same amount", "Small updates can help preserve useful pretrained representations while adapting to the new task."],
            ["What is quantization?", "Representing numerical values with lower precision to reduce resource use", "Increasing every image's dimensions", "Converting all labels into class names", "Replacing model evaluation with a quiz", "Quantization can reduce model size and computation by using lower-precision representations."],
            ["Why benchmark a model on its intended hardware?", "Latency and memory use depend on the deployment environment", "Training accuracy determines all runtime costs", "Every processor executes models identically", "Hardware cannot affect inference speed", "Actual hardware and workload influence operational performance."],
            ["What should happen after model compression?", "Re-evaluate accuracy and operational performance", "Assume the model is unchanged in every respect", "Delete the validation dataset", "Skip deployment testing", "Compression may change both predictive quality and runtime behavior."],
          ]
        ),

        makeLesson(
          "lesson-15",
          "Deep-Learning Deployment, Monitoring and Responsible Use",
          "Deploying a trained model involves more than saving its weights. The system must accept valid inputs, use the right preprocessing, produce interpretable outputs, and be monitored for changes and failures.",
          [
            {
              heading: "Saving and loading a model",
              content:
                "Save the model architecture and weights in a supported format and preserve any required preprocessing, label mappings, and configuration. Test that loading the saved artifact produces results consistent with the selected model before deploying it.",
            },
            {
              heading: "Inference pipeline",
              content:
                "The inference pipeline validates incoming data, applies the correct preprocessing, runs the model, and converts outputs into the required result format. Training and inference preprocessing must match. Invalid inputs should be handled safely rather than silently producing misleading predictions.",
            },
            {
              heading: "Monitoring performance",
              content:
                "Monitor data quality, input distributions, latency, errors, resource consumption, and—when trustworthy labels become available—predictive performance. Data drift describes changes in input distributions, while concept drift concerns changes in the relationship between inputs and targets. Drift is a signal to investigate, not proof that performance has declined.",
            },
            {
              heading: "Responsible deployment",
              content:
                "Document intended use, known limitations, training data characteristics, and evaluation results. Consider privacy, security, fairness, human review, and recovery plans. Avoid making consequential decisions solely from a model when the system has not been validated for that purpose.",
            },
          ],
          `# Example: save and reload a Keras model\nmodel.save("deep_learning_model.keras")\n\nloaded_model = tf.keras.models.load_model(\n    "deep_learning_model.keras"\n)\n\npredictions = loaded_model.predict(X_test[:5])\nprint(predictions)`,
          "Write a deployment checklist covering saved artifacts, preprocessing, input validation, inference testing, monitoring, privacy, and documented limitations.",
          [
            ["What should be preserved with a deployed model?", "Required preprocessing and label mappings as well as the model artifact", "Only the training computer's wallpaper", "Only the final accuracy number", "Only the Python file's title", "A reliable deployment needs the model and the configuration required to interpret its inputs and outputs."],
            ["What is data drift?", "A change in the distribution of incoming data", "A guarantee that the model has improved", "A type of activation function", "A rule that every input must be identical", "Data drift refers to a change in the input-data distribution."],
            ["What is concept drift?", "A change in the relationship between inputs and target outcomes", "A change in the model filename only", "A type of image pooling", "A rule that training must stop after one epoch", "Concept drift concerns changes in the data-generating relationship relevant to predictions."],
            ["Why validate inference inputs?", "To detect invalid or unexpected data before producing misleading results", "To guarantee every input belongs to the training set", "To remove the need for testing", "To automatically improve every prediction", "Input validation helps detect malformed or unsupported inputs."],
            ["What should responsible deployment documentation include?", "Intended use, evaluation evidence, and known limitations", "Only a claim of perfect accuracy", "Only the model's colour scheme", "Only the number of neurons", "Documentation helps users understand what the model is and is not validated to do."],
          ]
        ),

        makeLesson(
          "lesson-16",
          "Final Project: Image Classification with Deep Learning",
          "Build a complete deep-learning workflow that includes dataset preparation, model training, evaluation, error analysis, and a documented recommendation. Focus on reproducible evidence rather than only achieving a high training score.",
          [
            {
              heading: "Step 1: Define the task",
              content:
                "Choose a manageable image-classification dataset with clearly defined classes and appropriate permissions. Describe the intended use and define the primary evaluation metric. Inspect class counts, image quality, duplicate images, and possible sources of bias.",
            },
            {
              heading: "Step 2: Build a baseline",
              content:
                "Create a simple baseline, such as a small CNN or a suitable pretrained feature extractor. Split the data appropriately, apply training-only augmentation, and configure the output layer and loss to match the labels.",
            },
            {
              heading: "Step 3: Train and compare",
              content:
                "Track training and validation loss, use a documented early-stopping or checkpoint strategy, and compare at least two model configurations. Avoid selecting the final model using test results. Record hyperparameters, runtime, and software versions.",
            },
            {
              heading: "Step 4: Evaluate and report",
              content:
                "Evaluate the selected model on held-out test data. Include a confusion matrix, per-class metrics, example errors, and known limitations. Discuss whether model size and latency are suitable for the intended use, and specify further tests required before deployment.",
            },
          ],
          `# Final project workflow\n# 1. Prepare and split the dataset.\n# 2. Define a baseline CNN or pretrained model.\n# 3. Train using the training split.\n# 4. Select settings using validation data.\n# 5. Evaluate once on the final test set.\n# 6. Record metrics, errors, limitations, and model version.\n\n# Example evaluation:\n# test_loss, test_accuracy = model.evaluate(X_test, y_test)\n# print("Test accuracy:", test_accuracy)`,
          "Submit a project with the dataset description, architecture diagram, training configuration, learning curves, confusion matrix, per-class metrics, error analysis, model limitations, and a recommendation for future improvements.",
          [
            ["What is the purpose of a project baseline?", "Provide a simple reference for judging model improvement", "Guarantee that the final model is perfect", "Replace all held-out evaluation", "Ensure every class has identical images", "A baseline shows whether the more complex approach provides useful gains."],
            ["Which dataset should guide hyperparameter selection?", "Validation data or an appropriate cross-validation process", "The final test set used repeatedly", "Only the list of image filenames", "Only the model's source-code length", "Validation data guides selection while the final test set remains reserved."],
            ["Why include a confusion matrix in an image-classification report?", "To show which classes are correctly classified or confused", "To show only the number of model layers", "To replace every numerical metric", "To guarantee the dataset has no duplicates", "A confusion matrix reveals class-specific prediction patterns."],
            ["What is useful to include in a reproducible experiment report?", "Data splits, preprocessing, random seeds, model settings, and metrics", "Only the final model name", "Only the training accuracy", "Only a screenshot of the code editor", "Documenting experimental settings helps others understand and reproduce the results."],
            ["When should the final test set be used?", "For final assessment after model selection is complete", "After every hyperparameter change", "To fit the model's weights", "To select the best epoch repeatedly", "The final test set provides a final evaluation after training and selection decisions are finished."],
          ]
        ),
      ],
    },
  ],
};

export default deepLearningCourse;
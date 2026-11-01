
const deepLearningAIMLCourse = {
  title: "Deep Learning for AI/ML Engineer",
  description:
    "Learn neural networks, perceptrons, activation functions, forward and backpropagation, optimization, CNNs, RNNs, attention, transformers, and practical deep learning workflows.",
  weeks: [
    {
      title: "Week 1: Deep Learning Foundations",
      description: "Understand neural networks and the mathematical ideas behind deep learning.",
      lessons: [
        {
          title: "Introduction to Deep Learning and Neural Networks",
          content: `Deep learning is a branch of machine learning that uses neural networks with multiple layers to learn patterns from data. It is commonly used in image recognition, speech processing, language understanding, recommendation systems, and autonomous systems.

Traditional machine learning often requires manually selecting useful features. Deep learning models can learn many useful representations automatically from large datasets.

A neural network contains an input layer, one or more hidden layers, and an output layer. Each layer contains computational units called neurons. Neurons receive values, apply weights and biases, and pass the result through an activation function.

Deep learning requires data, a model architecture, a loss function, an optimization algorithm, and a training process. During training, the model compares its predictions with the expected answers and updates its parameters to reduce errors.

Deep learning is useful when relationships in data are complex. However, it may require more data and computing resources than simpler machine learning methods.`,
          quiz: [
            {
              question: "What is deep learning?",
              options: [
                "A branch of machine learning using multilayer neural networks",
                "A database management technique",
                "A programming language",
                "A network routing protocol",
              ],
              answer: "A branch of machine learning using multilayer neural networks",
            },
            {
              question: "What is the basic computational unit of a neural network?",
              options: ["Neuron", "Router", "Database", "Compiler"],
              answer: "Neuron",
            },
            {
              question: "Which layer receives the original input data?",
              options: ["Input layer", "Output layer", "Hidden layer", "Pooling layer"],
              answer: "Input layer",
            },
            {
              question: "What is a major capability of deep learning?",
              options: [
                "Learning complex patterns from data",
                "Replacing every database",
                "Increasing internet speed",
                "Managing operating system files",
              ],
              answer: "Learning complex patterns from data",
            },
            {
              question: "What does a loss function measure?",
              options: [
                "Difference between predictions and expected results",
                "Number of computer users",
                "Network connection speed",
                "Storage capacity",
              ],
              answer: "Difference between predictions and expected results",
            },
          ],
        },
        {
          title: "Perceptrons, Layers, Weights, and Biases",
          content: `A perceptron is one of the simplest neural network models. It receives input values, multiplies them by corresponding weights, adds a bias, and applies an activation function.

The weighted sum is:

z = w1x1 + w2x2 + ... + wnxn + b

Here, x represents input values, w represents weights, and b represents the bias. The activation function transforms the weighted sum into the neuron's output.

Weights control how strongly each input contributes to the result. Bias allows a neuron to adjust its output independently of the input values.

A layer contains multiple neurons. In a dense layer, each neuron receives inputs from all neurons in the previous layer. A neural network combines several layers to learn increasingly complex relationships.

The input layer receives features, hidden layers perform transformations, and the output layer produces the final prediction. The number of output neurons depends on the task. For example, a binary classifier may use one output, while a classifier with ten classes may use ten output units.`,
          quiz: [
            {
              question: "What does a perceptron calculate before applying its activation function?",
              options: ["Weighted sum plus bias", "Only the largest input", "Input average only", "Number of training samples"],
              answer: "Weighted sum plus bias",
            },
            {
              question: "What do weights represent in a neural network?",
              options: [
                "The influence of input values",
                "The number of hidden layers",
                "The size of the dataset",
                "The training duration",
              ],
              answer: "The influence of input values",
            },
            {
              question: "What is the purpose of bias?",
              options: [
                "To adjust a neuron's output independently of its input values",
                "To remove all input features",
                "To store training images",
                "To select the dataset",
              ],
              answer: "To adjust a neuron's output independently of its input values",
            },
            {
              question: "What is a dense layer?",
              options: [
                "A layer where each neuron connects to all neurons in the previous layer",
                "A layer containing only one input",
                "A layer used only for file storage",
                "A layer without trainable parameters",
              ],
              answer: "A layer where each neuron connects to all neurons in the previous layer",
            },
            {
              question: "Which layer produces the network's final prediction?",
              options: ["Output layer", "Input layer", "First hidden layer", "Data loading layer"],
              answer: "Output layer",
            },
          ],
        },
        {
          title: "Activation Functions and Loss Functions",
          content: `Activation functions introduce non-linearity into neural networks. Without non-linear activation functions, stacking multiple linear layers would still behave like a single linear transformation. Non-linearity allows a network to learn more complicated patterns.

ReLU (Rectified Linear Unit) returns zero for negative inputs and the input itself for positive inputs. It is widely used in hidden layers.

Sigmoid converts a value into a range between zero and one. It is often used for binary classification outputs. Softmax converts a group of output values into probabilities that sum to one, making it useful for multiclass classification.

A loss function measures how far the model's predictions are from the expected values. Binary cross-entropy is commonly used for binary classification. Categorical cross-entropy is commonly used for multiclass classification. Mean squared error is often used for regression.

The model's training objective is to minimize the selected loss function. The output activation and loss function should be chosen according to the prediction task.`,
          quiz: [
            {
              question: "Why are activation functions used?",
              options: [
                "To introduce non-linearity",
                "To increase dataset size",
                "To save files",
                "To connect to the internet",
              ],
              answer: "To introduce non-linearity",
            },
            {
              question: "What does ReLU return for a negative input?",
              options: ["Zero", "The same negative value", "One", "The absolute value"],
              answer: "Zero",
            },
            {
              question: "Which activation function is commonly used to produce multiclass probabilities?",
              options: ["Softmax", "ReLU", "Linear", "Step counter"],
              answer: "Softmax",
            },
            {
              question: "Which loss function is commonly used for binary classification?",
              options: ["Binary cross-entropy", "Mean absolute deviation of weights", "Sorting loss", "Image compression loss"],
              answer: "Binary cross-entropy",
            },
            {
              question: "What is the purpose of a loss function?",
              options: [
                "To measure prediction error",
                "To count network layers",
                "To install a framework",
                "To increase image resolution",
              ],
              answer: "To measure prediction error",
            },
          ],
        },
        {
          title: "Forward Propagation and Backpropagation",
          content: `Forward propagation is the process of passing input data through a neural network to calculate a prediction. Each layer receives the previous layer's output, performs its computation, and sends the result to the next layer.

After the prediction is produced, the loss function calculates the difference between the prediction and the expected result.

Backpropagation calculates how much each trainable parameter contributes to the loss. It uses the chain rule of calculus to compute gradients from the output layer backward through the network.

An optimizer uses these gradients to update weights and biases. The goal is to reduce the loss over repeated training iterations.

A typical training cycle includes forward propagation, loss calculation, gradient calculation through backpropagation, and parameter updates.

Backpropagation calculates gradients; it is not itself the parameter-update algorithm. The optimizer performs the updates using those gradients.`,
          quiz: [
            {
              question: "What happens during forward propagation?",
              options: [
                "Input data passes through the network to produce predictions",
                "Weights are always deleted",
                "The dataset is compressed",
                "The model is removed",
              ],
              answer: "Input data passes through the network to produce predictions",
            },
            {
              question: "What does backpropagation calculate?",
              options: ["Gradients of the loss", "Number of images", "File sizes", "Internet bandwidth"],
              answer: "Gradients of the loss",
            },
            {
              question: "Which mathematical rule is used in backpropagation?",
              options: ["Chain rule", "Remainder theorem", "Pythagorean theorem", "Bayes rule only"],
              answer: "Chain rule",
            },
            {
              question: "What is the optimizer responsible for?",
              options: [
                "Updating trainable parameters using gradients",
                "Creating the original dataset",
                "Displaying the user interface",
                "Naming neural network layers",
              ],
              answer: "Updating trainable parameters using gradients",
            },
            {
              question: "Which sequence describes a basic training iteration?",
              options: [
                "Forward pass, loss calculation, backpropagation, parameter update",
                "Parameter deletion, file saving, shutdown, restart",
                "Dataset download, model deletion, prediction, shutdown",
                "Prediction, dataset deletion, installation, restart",
              ],
              answer: "Forward pass, loss calculation, backpropagation, parameter update",
            },
          ],
        },
      ],
    },
    {
      title: "Week 2: Training and Optimization",
      description: "Learn how neural networks improve through gradient-based training.",
      lessons: [
        {
          title: "Gradient Descent and Learning Rate",
          content: `Gradient descent is an optimization method used to reduce a model's loss. It adjusts parameters in the direction that decreases the loss.

A gradient indicates how the loss changes when a parameter changes. The gradient's direction points toward increasing loss locally, so gradient descent moves in the opposite direction.

A simplified update rule is:

new parameter = old parameter - learning rate × gradient

The learning rate controls the size of each update. If it is too large, training may become unstable or fail to converge. If it is too small, learning may be very slow.

Batch gradient descent calculates gradients using the entire training dataset. Stochastic gradient descent uses one training example at a time. Mini-batch gradient descent uses a small group of examples and is widely used in deep learning.

Choosing a suitable learning rate is important for stable and efficient training.`,
          quiz: [
            {
              question: "What is the main goal of gradient descent?",
              options: ["Reduce the loss function", "Increase the number of labels", "Delete model weights", "Compress the dataset"],
              answer: "Reduce the loss function",
            },
            {
              question: "In which direction does gradient descent update parameters?",
              options: ["Opposite to the gradient", "Always along the positive gradient", "Randomly upward", "Without using gradients"],
              answer: "Opposite to the gradient",
            },
            {
              question: "What does the learning rate control?",
              options: ["Size of parameter updates", "Number of classes", "Dataset format", "Number of input columns"],
              answer: "Size of parameter updates",
            },
            {
              question: "What can happen when the learning rate is too large?",
              options: [
                "Training may become unstable",
                "The model always becomes perfect",
                "The dataset automatically grows",
                "The loss function is removed",
              ],
              answer: "Training may become unstable",
            },
            {
              question: "Which gradient descent method uses a small group of training examples?",
              options: ["Mini-batch gradient descent", "Full-batch only", "Random forest", "K-means"],
              answer: "Mini-batch gradient descent",
            },
          ],
        },
        {
          title: "Optimizers: SGD, Momentum, and Adam",
          content: `An optimizer determines how neural network parameters are updated during training. Different optimizers use gradients in different ways.

Stochastic Gradient Descent (SGD) updates parameters using gradients calculated from a training example or mini-batch. It is simple and can work well, but its updates may fluctuate.

Momentum adds a running contribution from previous gradients. This can reduce oscillations and help training move consistently in useful directions.

Adam combines ideas related to momentum and adaptive learning rates. It maintains estimates of the first and second moments of gradients and adjusts parameter updates accordingly.

No optimizer is guaranteed to work best for every model. The choice depends on the architecture, dataset, learning rate, and training objective.

An optimizer does not replace the loss function. The loss measures model error, backpropagation computes gradients, and the optimizer uses those gradients to update parameters.`,
          quiz: [
            {
              question: "What is the role of an optimizer?",
              options: [
                "To update model parameters during training",
                "To create labels automatically",
                "To store image files",
                "To select computer hardware",
              ],
              answer: "To update model parameters during training",
            },
            {
              question: "What does momentum use?",
              options: [
                "Information from previous gradients",
                "Only the dataset filename",
                "The number of output classes",
                "The computer's screen resolution",
              ],
              answer: "Information from previous gradients",
            },
            {
              question: "Which optimizer uses adaptive estimates of gradient moments?",
              options: ["Adam", "Basic sorting", "K-means", "Decision tree"],
              answer: "Adam",
            },
            {
              question: "What is one possible benefit of momentum?",
              options: [
                "Reducing oscillations during optimization",
                "Removing the need for training data",
                "Converting classification into clustering",
                "Deleting the loss function",
              ],
              answer: "Reducing oscillations during optimization",
            },
            {
              question: "Which component measures the prediction error?",
              options: ["Loss function", "Optimizer", "Input layer", "Data loader"],
              answer: "Loss function",
            },
          ],
        },
        {
          title: "Overfitting, Underfitting, and Regularization",
          content: `Overfitting occurs when a model learns the training data too closely, including noise or accidental patterns. It may perform well on training data but poorly on unseen data.

Underfitting occurs when a model is too simple or has not learned enough to capture important patterns. It often performs poorly on both training and validation data.

Regularization methods help control model complexity. L1 regularization adds a penalty based on the absolute values of parameters. L2 regularization adds a penalty based on squared parameter values.

Dropout randomly disables selected neurons during training. This encourages the network not to depend too heavily on particular neurons.

Early stopping monitors validation performance and stops training when improvement no longer occurs.

A useful model should generalize: it should perform well on new examples, not only on the data used to train it.`,
          quiz: [
            {
              question: "What is overfitting?",
              options: [
                "Learning training data too closely and generalizing poorly",
                "Failing to load any dataset",
                "Using no trainable parameters",
                "Always predicting the same class by design",
              ],
              answer: "Learning training data too closely and generalizing poorly",
            },
            {
              question: "What is underfitting?",
              options: [
                "A model failing to learn important patterns",
                "A model memorizing all training examples",
                "A model using too much storage",
                "A model having too many labels",
              ],
              answer: "A model failing to learn important patterns",
            },
            {
              question: "What does dropout do during training?",
              options: [
                "Randomly disables selected neurons",
                "Deletes the entire dataset",
                "Changes all labels",
                "Increases every weight equally",
              ],
              answer: "Randomly disables selected neurons",
            },
            {
              question: "Which regularization method penalizes squared parameter values?",
              options: ["L2 regularization", "L1 regularization", "Data shuffling", "One-hot encoding"],
              answer: "L2 regularization",
            },
            {
              question: "What is the purpose of early stopping?",
              options: [
                "Stop training when validation improvement no longer occurs",
                "Stop data collection before training begins",
                "Delete all model parameters",
                "Increase the number of training epochs",
              ],
              answer: "Stop training when validation improvement no longer occurs",
            },
          ],
        },
        {
          title: "Training, Validation, Test Splits, and Metrics",
          content: `Datasets are commonly divided into training, validation, and test sets.

The training set is used to learn model parameters. The validation set helps compare models and tune settings such as learning rate, architecture, and regularization. The test set provides a final evaluation on data that was not used for training or model selection.

Data leakage occurs when information from validation or test data improperly influences training or model selection. This can make evaluation results overly optimistic.

For classification, accuracy measures the proportion of correct predictions. Precision measures how many predicted positive cases are actually positive. Recall measures how many actual positive cases the model identifies. The F1-score combines precision and recall using their harmonic mean.

A confusion matrix summarizes true positives, true negatives, false positives, and false negatives.

For regression, common metrics include mean absolute error and mean squared error. Metric selection should reflect the actual problem and the cost of different errors.`,
          quiz: [
            {
              question: "Which dataset is used to learn model parameters?",
              options: ["Training set", "Test set", "Validation set only", "Deployment set"],
              answer: "Training set",
            },
            {
              question: "What is the main purpose of a validation set?",
              options: [
                "Tune model settings and compare models",
                "Replace all training examples",
                "Store model source code",
                "Generate internet requests",
              ],
              answer: "Tune model settings and compare models",
            },
            {
              question: "What does precision measure?",
              options: [
                "How many predicted positive cases are actually positive",
                "How many model layers exist",
                "How many examples are stored",
                "How quickly training runs",
              ],
              answer: "How many predicted positive cases are actually positive",
            },
            {
              question: "Which metric combines precision and recall?",
              options: ["F1-score", "Mean squared error", "Training loss only", "R-squared only"],
              answer: "F1-score",
            },
            {
              question: "What is data leakage?",
              options: [
                "Improper use of information from evaluation data during model development",
                "A model running out of memory",
                "A missing Python package",
                "A slow internet connection",
              ],
              answer: "Improper use of information from evaluation data during model development",
            },
          ],
        },
      ],
    },
    {
      title: "Week 3: Deep Learning Architectures",
      description: "Explore architectures designed for images, sequences, and language.",
      lessons: [
        {
          title: "Convolutional Neural Networks (CNNs)",
          content: `Convolutional Neural Networks are widely used for image-related tasks. They are designed to learn spatial patterns such as edges, textures, shapes, and object parts.

A convolution layer applies learnable filters, also called kernels, to an input image or feature map. Each filter produces a feature map that indicates where a learned pattern appears.

Stride controls how far a filter moves at each step. Padding adds values around the input boundaries and can help control the output dimensions.

A pooling layer reduces the spatial size of feature maps. Max pooling selects the maximum value in a local region, while average pooling calculates the average.

CNNs often combine convolution, activation, and pooling layers. Later layers can learn more complex visual features. A classification network eventually converts learned features into class scores or probabilities.

CNNs are used in image classification, object detection, medical image analysis, and visual inspection.`,
          quiz: [
            {
              question: "What are CNNs especially useful for?",
              options: ["Image processing", "Database indexing only", "Text file compression", "Network routing"],
              answer: "Image processing",
            },
            {
              question: "What is a convolution filter?",
              options: [
                "A learnable kernel that detects patterns",
                "A file encryption key",
                "A database table",
                "A fixed screen setting",
              ],
              answer: "A learnable kernel that detects patterns",
            },
            {
              question: "What does stride control?",
              options: [
                "How far the filter moves at each step",
                "The number of output labels",
                "The training dataset size",
                "The number of epochs",
              ],
              answer: "How far the filter moves at each step",
            },
            {
              question: "What does max pooling select?",
              options: [
                "The maximum value in a local region",
                "The minimum value in the entire dataset",
                "The average of all labels",
                "The first image filename",
              ],
              answer: "The maximum value in a local region",
            },
            {
              question: "What is a feature map?",
              options: [
                "An output showing detected patterns after applying a filter",
                "A list of user passwords",
                "A model installation file",
                "A network address table",
              ],
              answer: "An output showing detected patterns after applying a filter",
            },
          ],
        },
        {
          title: "RNNs, LSTM, GRU, and Sequence Data",
          content: `Recurrent Neural Networks (RNNs) are designed to process sequential data. They maintain a hidden state that carries information from earlier steps into later steps.

This makes RNNs useful for tasks involving text, time series, speech, and other ordered data. However, basic RNNs can struggle to learn long-term relationships because gradients may vanish or grow during training.

Long Short-Term Memory networks (LSTMs) introduce a cell state and gates that control what information is retained, updated, and exposed. These gates help LSTMs preserve useful information over longer sequences.

Gated Recurrent Units (GRUs) use a simpler gating structure than LSTMs. They combine certain state operations and often have fewer parameters.

The choice between RNN, LSTM, and GRU depends on the task, dataset, computational requirements, and sequence length.`,
          quiz: [
            {
              question: "What type of data are RNNs designed to process?",
              options: ["Sequential data", "Only unordered database rows", "Only static images", "Hardware addresses"],
              answer: "Sequential data",
            },
            {
              question: "What information does an RNN carry between steps?",
              options: ["Hidden state", "File extension", "Screen size", "Database password"],
              answer: "Hidden state",
            },
            {
              question: "What is a common limitation of basic RNNs?",
              options: [
                "Difficulty learning long-term dependencies",
                "Inability to read any numerical input",
                "Inability to produce predictions",
                "Requirement for image filters",
              ],
              answer: "Difficulty learning long-term dependencies",
            },
            {
              question: "What controls information flow in an LSTM?",
              options: ["Gates", "Convolution filters", "SQL indexes", "IP addresses"],
              answer: "Gates",
            },
            {
              question: "How does a GRU generally differ from an LSTM?",
              options: [
                "It uses a simpler gating structure",
                "It has no recurrent state",
                "It is only used for image pooling",
                "It cannot process sequences",
              ],
              answer: "It uses a simpler gating structure",
            },
          ],
        },
        {
          title: "Embeddings and Attention Mechanisms",
          content: `An embedding represents a discrete item, such as a word or category, as a dense numerical vector. Similar items can learn representations that are close in the embedding space, depending on the training objective.

In natural language processing, embeddings convert token IDs into vectors that neural networks can process. Embeddings can capture useful relationships between words and other tokens.

Attention allows a model to focus on different parts of an input when producing a representation. Instead of treating every token equally, attention calculates relevance scores and uses them to combine information.

In scaled dot-product attention, queries are compared with keys to calculate scores. These scores are scaled, normalized with softmax, and used to combine value vectors.

Attention is useful because a token can directly use information from other relevant tokens. It is a central component of transformer architectures.`,
          quiz: [
            {
              question: "What is an embedding?",
              options: [
                "A dense numerical representation of an item",
                "A computer network cable",
                "A database backup",
                "A model evaluation report",
              ],
              answer: "A dense numerical representation of an item",
            },
            {
              question: "What does an embedding layer convert token IDs into?",
              options: ["Numerical vectors", "Audio files", "HTML pages", "IP addresses"],
              answer: "Numerical vectors",
            },
            {
              question: "What is the purpose of attention?",
              options: [
                "To focus on relevant parts of the input",
                "To remove every hidden layer",
                "To compress model source code",
                "To create training labels manually",
              ],
              answer: "To focus on relevant parts of the input",
            },
            {
              question: "Which operation commonly normalizes attention scores?",
              options: ["Softmax", "Pooling", "Sorting", "Dropout"],
              answer: "Softmax",
            },
            {
              question: "Which three components are compared or combined in scaled dot-product attention?",
              options: [
                "Queries, keys, and values",
                "Inputs, labels, and filenames",
                "Weights, epochs, and batches",
                "Images, pixels, and folders",
              ],
              answer: "Queries, keys, and values",
            },
          ],
        },
        {
          title: "Transformers and Transfer Learning",
          content: `Transformers are neural network architectures built around attention mechanisms. Unlike traditional recurrent models, transformer layers can process relationships between many tokens without requiring a sequential recurrent update.

Self-attention lets each token use information from other tokens in the same sequence. Multi-head attention runs multiple attention operations so that different relationships can be learned.

Positional information is added because attention alone does not automatically represent token order. Transformer models commonly use encoder blocks, decoder blocks, or combinations of both.

Transfer learning uses knowledge from a model trained on one dataset or task to help with another related task. A pretrained model can be used as a fixed feature extractor or fine-tuned on new data.

Fine-tuning updates some or all pretrained model parameters using task-specific examples. It can reduce training requirements compared with training a large model from scratch, although data quality and evaluation remain important.`,
          quiz: [
            {
              question: "What is a central component of transformers?",
              options: ["Attention mechanisms", "SQL joins", "IP routing", "File compression"],
              answer: "Attention mechanisms",
            },
            {
              question: "What does self-attention allow a token to do?",
              options: [
                "Use information from other tokens in the sequence",
                "Delete other tokens",
                "Change the dataset filename",
                "Create a network connection",
              ],
              answer: "Use information from other tokens in the sequence",
            },
            {
              question: "Why is positional information used in transformers?",
              options: [
                "To represent token order",
                "To increase image brightness",
                "To store passwords",
                "To select GPU drivers",
              ],
              answer: "To represent token order",
            },
            {
              question: "What is transfer learning?",
              options: [
                "Reusing knowledge from a pretrained model for another task",
                "Moving files between folders",
                "Transferring data through a router",
                "Replacing training with random guesses",
              ],
              answer: "Reusing knowledge from a pretrained model for another task",
            },
            {
              question: "What happens during fine-tuning?",
              options: [
                "A pretrained model is further trained on task-specific data",
                "A model is converted into a database",
                "All training examples are removed",
                "The network is disconnected from its output",
              ],
              answer: "A pretrained model is further trained on task-specific data",
            },
          ],
        },
      ],
    },
    {
      title: "Week 4: Practical Deep Learning Workflow",
      description: "Apply deep learning concepts using frameworks, datasets, and evaluation.",
      lessons: [
        {
          title: "TensorFlow, Keras, and PyTorch",
          content: `Deep learning frameworks provide tools for creating, training, and evaluating neural networks.

TensorFlow is a machine learning framework that provides tools for numerical computation and model development. Keras provides a high-level interface for building and training models, and is integrated with TensorFlow in common workflows.

PyTorch is another widely used deep learning framework. It provides tensor operations, automatic differentiation, neural network modules, and GPU support.

A typical workflow includes importing a framework, preparing tensors, defining a model, choosing a loss function and optimizer, training the model, and evaluating its predictions.

Frameworks automate many mathematical operations, but understanding tensors, gradients, layers, and training remains important.

The choice of framework depends on project requirements, available tools, team experience, and deployment environment.`,
          quiz: [
            {
              question: "What is the main purpose of a deep learning framework?",
              options: [
                "To provide tools for building and training neural networks",
                "To replace all computer hardware",
                "To manage social media accounts",
                "To create network cables",
              ],
              answer: "To provide tools for building and training neural networks",
            },
            {
              question: "What is Keras commonly used for?",
              options: [
                "Building neural networks through a high-level API",
                "Managing IP addresses",
                "Editing audio recordings",
                "Creating database backups",
              ],
              answer: "Building neural networks through a high-level API",
            },
            {
              question: "Which framework provides automatic differentiation and tensor operations?",
              options: ["PyTorch", "HTML", "SQLite", "Git"],
              answer: "PyTorch",
            },
            {
              question: "What is a tensor?",
              options: [
                "A multidimensional data structure",
                "A network security policy",
                "A text document format",
                "A database connection string",
              ],
              answer: "A multidimensional data structure",
            },
            {
              question: "What is automatic differentiation used for in training?",
              options: [
                "Computing gradients",
                "Creating labels",
                "Installing Python",
                "Compressing images",
              ],
              answer: "Computing gradients",
            },
          ],
        },
        {
          title: "Dataset Preparation, Batching, and GPU Concepts",
          content: `Good dataset preparation is essential for deep learning. Data should be checked for missing values, incorrect labels, duplicates, and inconsistent formats.

Images may need resizing and normalization. Text may need tokenization and conversion into numerical representations. Numerical features may need scaling depending on the model and data.

A batch is a group of training examples processed together. Batch size affects memory usage and the number of parameter updates per epoch. An epoch is one complete pass through the training dataset.

Shuffling training data can help prevent the model from depending on the original example order.

Graphics Processing Units (GPUs) can accelerate many deep learning operations because they perform large numbers of parallel calculations. However, a GPU does not automatically improve every task; model size, data transfer, and hardware support also matter.

Data loaders help retrieve, batch, and sometimes shuffle examples during training.`,
          quiz: [
            {
              question: "Why is dataset preparation important?",
              options: [
                "It improves data consistency and training quality",
                "It removes the need for model evaluation",
                "It automatically selects the best architecture",
                "It replaces the optimizer",
              ],
              answer: "It improves data consistency and training quality",
            },
            {
              question: "What is a batch?",
              options: [
                "A group of examples processed together",
                "A complete model architecture",
                "A type of activation function",
                "A GPU driver",
              ],
              answer: "A group of examples processed together",
            },
            {
              question: "What is one epoch?",
              options: [
                "One complete pass through the training dataset",
                "One single neuron calculation",
                "One model installation",
                "One validation example",
              ],
              answer: "One complete pass through the training dataset",
            },
            {
              question: "Why are GPUs useful in deep learning?",
              options: [
                "They can accelerate parallel numerical computations",
                "They automatically correct labels",
                "They remove the need for training",
                "They guarantee perfect predictions",
              ],
              answer: "They can accelerate parallel numerical computations",
            },
            {
              question: "What is a data loader commonly responsible for?",
              options: [
                "Retrieving and batching training examples",
                "Selecting the final model architecture",
                "Writing activation functions",
                "Calculating internet speed",
              ],
              answer: "Retrieving and batching training examples",
            },
          ],
        },
        {
          title: "Model Evaluation, Error Analysis, and Deployment Basics",
          content: `Model evaluation checks how well a trained model performs on data that was not used to fit its parameters. The evaluation metric should match the task.

For classification, useful measurements include accuracy, precision, recall, F1-score, and confusion matrices. For regression, metrics such as MAE and MSE measure prediction errors.

Error analysis means examining incorrect predictions to identify patterns. Errors may result from poor-quality data, class imbalance, insufficient examples, incorrect labels, or limitations in the architecture.

Deployment makes a trained model available for use by an application or service. A model may be exposed through an API, packaged in an application, or hosted on a cloud platform.

A production workflow should consider input validation, model versioning, latency, resource usage, monitoring, and data privacy. Model performance should be checked after deployment because real-world data may differ from training data.

A successful project is not only a model with good training accuracy. It should also be reliable, maintainable, and useful in its intended environment.`,
          quiz: [
            {
              question: "Why should a model be evaluated on unseen data?",
              options: [
                "To estimate how well it generalizes",
                "To increase its number of layers",
                "To remove its training history",
                "To change its programming language",
              ],
              answer: "To estimate how well it generalizes",
            },
            {
              question: "What is error analysis?",
              options: [
                "Examining incorrect predictions to identify patterns",
                "Deleting all incorrect examples",
                "Changing every model weight manually",
                "Measuring computer screen resolution",
              ],
              answer: "Examining incorrect predictions to identify patterns",
            },
            {
              question: "What does deployment mean?",
              options: [
                "Making a trained model available for use",
                "Deleting the training dataset",
                "Stopping all model evaluation",
                "Converting labels into filenames",
              ],
              answer: "Making a trained model available for use",
            },
            {
              question: "Which is an important deployment consideration?",
              options: [
                "Input validation and monitoring",
                "Removing all documentation",
                "Ignoring resource usage",
                "Using training accuracy as the only metric",
              ],
              answer: "Input validation and monitoring",
            },
            {
              question: "Why should a deployed model be monitored?",
              options: [
                "Real-world data and model performance can change",
                "A deployed model never receives new inputs",
                "Monitoring automatically creates training labels",
                "Monitoring removes the need for security",
              ],
              answer: "Real-world data and model performance can change",
            },
          ],
        },
        {
          title: "Final Project: Image Classification with a Neural Network",
          content: `In this project, build an image classification system that predicts the category of an image. For example, the dataset may contain images from two or more everyday object categories.

First, define the problem and choose a labeled dataset. Organize images into training, validation, and test groups. Ensure that the test images are not used during training or model selection.

Next, preprocess the images. Resize them to a consistent shape, convert pixel values into numerical tensors, and apply suitable normalization. Create batches to process examples efficiently.

Build a CNN using convolution layers, activation functions, and pooling layers. Add a classification head that produces one output score per class. Select a suitable loss function and optimizer.

Train the model over multiple epochs. Observe training and validation loss to identify possible overfitting or underfitting. Adjust the learning rate or model configuration when justified by validation results.

Evaluate the final model on the held-out test set. Review incorrect predictions and examine the confusion matrix. Record the model architecture, dataset details, metrics, and limitations.

Finally, save the trained model and create a simple prediction interface. The interface should accept an image, preprocess it consistently with training, and return the predicted class and confidence information. Avoid treating confidence as a guarantee that the prediction is correct.`,
          quiz: [
            {
              question: "What is the main goal of the image classification project?",
              options: [
                "Predict the category of an image",
                "Increase internet bandwidth",
                "Create a database server",
                "Compress every image into text",
              ],
              answer: "Predict the category of an image",
            },
            {
              question: "Why should test images remain separate during training?",
              options: [
                "To provide an independent final evaluation",
                "To increase the number of training epochs",
                "To change image dimensions",
                "To remove the need for validation",
              ],
              answer: "To provide an independent final evaluation",
            },
            {
              question: "Which architecture is commonly suitable for image classification?",
              options: ["CNN", "Basic SQL query", "IP router", "File system"],
              answer: "CNN",
            },
            {
              question: "What should be checked when training and validation losses behave very differently?",
              options: [
                "Possible overfitting or underfitting",
                "The computer's wallpaper",
                "The image filename length",
                "The number of installed browsers",
              ],
              answer: "Possible overfitting or underfitting",
            },
            {
              question: "Why must prediction preprocessing match training preprocessing?",
              options: [
                "The model expects inputs in a consistent format",
                "The model can only read original filenames",
                "It automatically increases the dataset size",
                "It removes the need for a trained model",
              ],
              answer: "The model expects inputs in a consistent format",
            },
          ],
        },
      ],
    },
  ],
};

export default deepLearningAIMLCourse;

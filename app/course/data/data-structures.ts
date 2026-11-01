const dataStructuresCourse = {
  title: "Data Structures",
  description:
    "Learn arrays, linked lists, stacks, queues, hash tables, trees, heaps, graphs, and practical data structure usage for software development.",

  weeks: [
    {
      title: "Week 1: Data Structure Fundamentals",
      description:
        "Understand data structures, complexity, arrays, strings, and linked lists.",
      lessons: [
        {
          title: "Introduction to Data Structures",
          content: `Data structures are ways of organizing and storing data so that programs can access and modify it efficiently.

Common data structures include arrays, linked lists, stacks, queues, hash tables, trees, and graphs.

Choosing the correct data structure can improve the performance, readability, and maintainability of software.

For example, an array is useful when elements need fast access by index, while a linked list can be useful when frequent insertions and deletions are required.`,
          quiz: [
            {
              question: "What is a data structure?",
              options: [
                "A way to organize and store data",
                "A programming language",
                "A database server",
                "A user interface",
              ],
              answer: "A way to organize and store data",
            },
            {
              question: "Which is a data structure?",
              options: ["Array", "Compiler", "Browser", "Operating system"],
              answer: "Array",
            },
            {
              question: "Why are data structures important?",
              options: [
                "They help organize and process data efficiently",
                "They replace programming languages",
                "They create hardware",
                "They remove all bugs",
              ],
              answer: "They help organize and process data efficiently",
            },
            {
              question: "Which structure provides indexed access?",
              options: ["Array", "Stack", "Queue", "Graph"],
              answer: "Array",
            },
            {
              question: "Which structure can support efficient insertions and deletions?",
              options: [
                "Linked list",
                "Constant",
                "String literal",
                "Boolean",
              ],
              answer: "Linked list",
            },
          ],
        },

        {
          title: "Time and Space Complexity",
          content: `Algorithm and data structure performance is commonly analyzed using time complexity and space complexity.

Time complexity describes how the running time of an algorithm grows as the input size increases.

Space complexity describes how much additional memory an algorithm requires.

Big O notation is commonly used to describe complexity. Examples include O(1), O(log n), O(n), and O(n²).

Understanding complexity helps developers choose efficient solutions for large datasets.`,
          quiz: [
            {
              question: "What does time complexity describe?",
              options: [
                "How running time grows with input size",
                "Memory capacity",
                "Database size",
                "Screen resolution",
              ],
              answer: "How running time grows with input size",
            },
            {
              question: "What does space complexity describe?",
              options: [
                "Memory usage",
                "Execution time only",
                "Network speed",
                "Database design",
              ],
              answer: "Memory usage",
            },
            {
              question: "Which notation is commonly used for complexity?",
              options: ["Big O", "HTML", "CSS", "JSON"],
              answer: "Big O",
            },
            {
              question: "Which represents constant complexity?",
              options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
              answer: "O(1)",
            },
            {
              question: "Why analyze complexity?",
              options: [
                "To choose efficient solutions",
                "To design logos",
                "To create databases",
                "To remove programming",
              ],
              answer: "To choose efficient solutions",
            },
          ],
        },

        {
          title: "Arrays and Strings",
          content: `An array stores multiple elements in an ordered collection and usually provides direct access using an index.

Arrays are useful when the number of elements or their positions are important.

Strings are sequences of characters and are commonly used to represent text.

Developers frequently perform operations such as searching, inserting, deleting, sorting, and traversing arrays and strings.

Understanding these operations is important because arrays and strings appear in many real-world software applications.`,
          quiz: [
            {
              question: "How are array elements commonly accessed?",
              options: [
                "Using an index",
                "Using a password",
                "Using a server",
                "Using a database",
              ],
              answer: "Using an index",
            },
            {
              question: "What is a string?",
              options: [
                "A sequence of characters",
                "A database",
                "A network",
                "A processor",
              ],
              answer: "A sequence of characters",
            },
            {
              question: "Which operation can be performed on an array?",
              options: ["Searching", "Only printing", "Only deleting", "Only connecting"],
              answer: "Searching",
            },
            {
              question: "Why are arrays commonly used?",
              options: [
                "They store ordered collections of elements",
                "They replace operating systems",
                "They create networks",
                "They store passwords only",
              ],
              answer: "They store ordered collections of elements",
            },
            {
              question: "Which data type commonly represents text?",
              options: ["String", "Integer", "Boolean", "Float"],
              answer: "String",
            },
          ],
        },

        {
          title: "Linked Lists",
          content: `A linked list consists of nodes where each node stores data and a reference to another node.

Unlike an array, linked list elements do not need to occupy consecutive memory locations.

A singly linked list contains a reference to the next node. A doubly linked list contains references to both the next and previous nodes.

Linked lists are useful when frequent insertion and deletion operations are required, especially when direct indexed access is not the main requirement.`,
          quiz: [
            {
              question: "What does a linked list contain?",
              options: [
                "Nodes connected by references",
                "Only indexes",
                "Only database tables",
                "Only strings",
              ],
              answer: "Nodes connected by references",
            },
            {
              question: "What does a singly linked list node usually contain?",
              options: [
                "Data and a reference to the next node",
                "Only data",
                "Only an index",
                "Two databases",
              ],
              answer: "Data and a reference to the next node",
            },
            {
              question: "What does a doubly linked list provide?",
              options: [
                "Next and previous references",
                "Only next reference",
                "Only indexes",
                "No references",
              ],
              answer: "Next and previous references",
            },
            {
              question: "When are linked lists useful?",
              options: [
                "When insertions and deletions are frequent",
                "Only for graphics",
                "Only for databases",
                "Only for strings",
              ],
              answer: "When insertions and deletions are frequent",
            },
            {
              question: "Do linked lists require consecutive memory locations?",
              options: [
                "No",
                "Yes",
                "Always",
                "Only in Python",
              ],
              answer: "No",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Stacks, Queues, and Hash Tables",
      description:
        "Learn linear data structures used in software applications and understand efficient key-value storage.",
      lessons: [
        {
          title: "Stacks",
          content: `A stack is a linear data structure that follows the Last In, First Out principle, commonly called LIFO.

The main operations are push, which adds an element, and pop, which removes the top element.

Stacks are used in function calls, undo operations, expression evaluation, browser history, and depth-first search.

A stack can be implemented using arrays or linked lists depending on the requirements.`,
          quiz: [
            {
              question: "What principle does a stack follow?",
              options: ["LIFO", "FIFO", "Random order", "Sorted order"],
              answer: "LIFO",
            },
            {
              question: "Which operation adds an item to a stack?",
              options: ["Push", "Pop", "Search", "Sort"],
              answer: "Push",
            },
            {
              question: "Which operation removes the top item?",
              options: ["Pop", "Push", "Insert", "Append"],
              answer: "Pop",
            },
            {
              question: "Where can stacks be used?",
              options: [
                "Undo operations",
                "Only image editing",
                "Only databases",
                "Only networking",
              ],
              answer: "Undo operations",
            },
            {
              question: "Which search commonly uses a stack?",
              options: [
                "Depth-first search",
                "Binary search only",
                "Linear search only",
                "SQL search",
              ],
              answer: "Depth-first search",
            },
          ],
        },

        {
          title: "Queues",
          content: `A queue is a linear data structure that follows the First In, First Out principle, known as FIFO.

The element that enters first is normally processed first.

Common queue operations include enqueue for adding an element and dequeue for removing an element.

Queues are useful in task scheduling, print systems, request processing, message handling, and breadth-first search.`,
          quiz: [
            {
              question: "What principle does a queue follow?",
              options: ["FIFO", "LIFO", "Random order", "Reverse sorting"],
              answer: "FIFO",
            },
            {
              question: "Which operation adds an element to a queue?",
              options: ["Enqueue", "Dequeue", "Pop", "Peek"],
              answer: "Enqueue",
            },
            {
              question: "Which operation removes an element from a queue?",
              options: ["Dequeue", "Push", "Enqueue", "Insert"],
              answer: "Dequeue",
            },
            {
              question: "Where are queues commonly used?",
              options: [
                "Task scheduling",
                "Only image editing",
                "Only CSS",
                "Only databases",
              ],
              answer: "Task scheduling",
            },
            {
              question: "Which search commonly uses a queue?",
              options: [
                "Breadth-first search",
                "Depth-first search",
                "Binary search",
                "Hash search",
              ],
              answer: "Breadth-first search",
            },
          ],
        },

        {
          title: "Hash Tables",
          content: `A hash table stores data using key-value pairs.

A hash function converts a key into a location used to store or retrieve the associated value.

Hash tables are commonly used for fast lookup operations.

They are useful in caches, dictionaries, databases, frequency counting, and application configuration.

A good hash function helps distribute keys effectively and reduces collisions.`,
          quiz: [
            {
              question: "What does a hash table store?",
              options: [
                "Key-value pairs",
                "Only numbers",
                "Only strings",
                "Only arrays",
              ],
              answer: "Key-value pairs",
            },
            {
              question: "What does a hash function do?",
              options: [
                "Maps a key to a storage location",
                "Sorts every value",
                "Deletes data",
                "Creates a database",
              ],
              answer: "Maps a key to a storage location",
            },
            {
              question: "What is a collision?",
              options: [
                "Different keys mapping to the same location",
                "Deleting a key",
                "Sorting keys",
                "Creating a new array",
              ],
              answer: "Different keys mapping to the same location",
            },
            {
              question: "Where can hash tables be used?",
              options: [
                "Caching and fast lookup",
                "Only graphics",
                "Only networking",
                "Only hardware",
              ],
              answer: "Caching and fast lookup",
            },
            {
              question: "What helps reduce hash collisions?",
              options: [
                "A good hash function",
                "More HTML",
                "A larger screen",
                "More CSS",
              ],
              answer: "A good hash function",
            },
          ],
        },

        {
          title: "Practical Linear Data Structures",
          content: `Arrays, linked lists, stacks, queues, and hash tables solve different problems.

Arrays provide convenient indexed access. Linked lists support flexible node-based insertion and deletion. Stacks are useful for LIFO workflows, while queues are useful for FIFO processing.

Hash tables are useful when fast key-based lookup is required.

Software developers should select a data structure based on the operations their application performs most frequently.`,
          quiz: [
            {
              question: "Which structure provides indexed access?",
              options: ["Array", "Queue", "Stack", "Graph"],
              answer: "Array",
            },
            {
              question: "Which structure follows LIFO?",
              options: ["Stack", "Queue", "Array", "Hash table"],
              answer: "Stack",
            },
            {
              question: "Which structure follows FIFO?",
              options: ["Queue", "Stack", "Tree", "Array"],
              answer: "Queue",
            },
            {
              question: "Which structure is useful for key-based lookup?",
              options: ["Hash table", "Stack", "Queue", "Linked list"],
              answer: "Hash table",
            },
            {
              question: "What should determine data structure selection?",
              options: [
                "Required operations and performance",
                "Screen size",
                "Programming font",
                "Computer brand",
              ],
              answer: "Required operations and performance",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Trees and Heaps",
      description:
        "Learn tree structures, binary search trees, balanced trees, heaps, and priority queues.",
      lessons: [
        {
          title: "Tree Data Structures",
          content: `A tree is a hierarchical data structure made up of nodes connected by edges.

The top node is called the root. Nodes can have children, and nodes without children are called leaves.

Trees are useful for representing hierarchical information such as file systems, organization structures, and application data.

Different tree structures are designed for different operations and performance requirements.`,
          quiz: [
            {
              question: "What is the top node of a tree called?",
              options: ["Root", "Leaf", "Child", "Edge"],
              answer: "Root",
            },
            {
              question: "What are nodes without children called?",
              options: ["Leaves", "Roots", "Parents", "Edges"],
              answer: "Leaves",
            },
            {
              question: "What connects nodes in a tree?",
              options: ["Edges", "Arrays", "Keys", "Indexes"],
              answer: "Edges",
            },
            {
              question: "What type of structure is a tree?",
              options: [
                "Hierarchical",
                "Only linear",
                "Only circular",
                "Only sequential",
              ],
              answer: "Hierarchical",
            },
            {
              question: "Where can trees be used?",
              options: [
                "File systems",
                "Only CSS",
                "Only networking cables",
                "Only text editors",
              ],
              answer: "File systems",
            },
          ],
        },

        {
          title: "Binary Search Trees",
          content: `A binary search tree is a binary tree organized according to a search property.

For each node, values in the left subtree are generally smaller and values in the right subtree are generally larger.

This organization can make searching, insertion, and deletion efficient when the tree remains reasonably balanced.

If a binary search tree becomes highly unbalanced, its performance can approach that of a linked list.`,
          quiz: [
            {
              question: "How many children can a binary tree node have at most?",
              options: ["Two", "One", "Three", "Unlimited"],
              answer: "Two",
            },
            {
              question: "In a binary search tree, smaller values are generally placed where?",
              options: ["Left subtree", "Right subtree", "Root only", "Outside the tree"],
              answer: "Left subtree",
            },
            {
              question: "Where are larger values generally placed?",
              options: ["Right subtree", "Left subtree", "Root only", "Outside the tree"],
              answer: "Right subtree",
            },
            {
              question: "What can happen if a BST becomes highly unbalanced?",
              options: [
                "Performance can degrade",
                "It becomes a graph automatically",
                "It becomes sorted automatically",
                "It uses no memory",
              ],
              answer: "Performance can degrade",
            },
            {
              question: "What can a BST support?",
              options: [
                "Searching and insertion",
                "Only printing",
                "Only deletion",
                "Only sorting strings",
              ],
              answer: "Searching and insertion",
            },
          ],
        },

        {
          title: "Heaps and Priority Queues",
          content: `A heap is a specialized tree-based data structure commonly used to implement priority queues.

In a min-heap, the smallest element has the highest priority and is kept near the root. In a max-heap, the largest element has the highest priority.

Heaps are useful in scheduling, priority-based processing, and algorithms such as heap sort and certain graph algorithms.

Priority queues process elements according to priority rather than simple insertion order.`,
          quiz: [
            {
              question: "What is a heap commonly used to implement?",
              options: [
                "Priority queue",
                "Linked list",
                "Hash table",
                "String",
              ],
              answer: "Priority queue",
            },
            {
              question: "What is at the root of a min-heap?",
              options: [
                "Smallest-priority element",
                "Largest element",
                "Random element",
                "Last inserted element always",
              ],
              answer: "Smallest-priority element",
            },
            {
              question: "What is at the root of a max-heap?",
              options: [
                "Largest-priority element",
                "Smallest element",
                "Random element",
                "First inserted element always",
              ],
              answer: "Largest-priority element",
            },
            {
              question: "Where are heaps useful?",
              options: [
                "Scheduling and priority processing",
                "Only web design",
                "Only CSS",
                "Only databases",
              ],
              answer: "Scheduling and priority processing",
            },
            {
              question: "How does a priority queue process elements?",
              options: [
                "According to priority",
                "Always randomly",
                "Only alphabetically",
                "Only by index",
              ],
              answer: "According to priority",
            },
          ],
        },

        {
          title: "Tree Traversal",
          content: `Tree traversal means visiting the nodes of a tree in a particular order.

Common depth-first traversals include preorder, inorder, and postorder.

Inorder traversal of a binary search tree visits values in sorted order.

Breadth-first traversal visits nodes level by level and is commonly implemented using a queue.

Understanding traversal is important for searching, processing, and analyzing hierarchical data.`,
          quiz: [
            {
              question: "What is tree traversal?",
              options: [
                "Visiting tree nodes in a defined order",
                "Deleting a tree",
                "Creating a database",
                "Sorting only arrays",
              ],
              answer: "Visiting tree nodes in a defined order",
            },
            {
              question: "Which is a depth-first traversal?",
              options: ["Inorder", "Level-order only", "Queue-order", "Hash-order"],
              answer: "Inorder",
            },
            {
              question: "What does inorder traversal of a BST produce?",
              options: [
                "Values in sorted order",
                "Random values",
                "Only root values",
                "Only leaf values",
              ],
              answer: "Values in sorted order",
            },
            {
              question: "What does breadth-first traversal visit?",
              options: [
                "Nodes level by level",
                "Only leaves",
                "Only roots",
                "Only the deepest nodes",
              ],
              answer: "Nodes level by level",
            },
            {
              question: "Which structure commonly supports breadth-first traversal?",
              options: ["Queue", "Stack", "Hash table", "Array only"],
              answer: "Queue",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Graphs and Practical Problem Solving",
      description:
        "Learn graphs, graph traversal, searching, sorting, and how to select data structures in software projects.",
      lessons: [
        {
          title: "Graph Data Structures",
          content: `A graph is a data structure consisting of vertices and edges.

Graphs can represent relationships between objects. For example, a social network can represent people as vertices and connections as edges.

Graphs can be directed or undirected and may have weighted edges.

They are useful in maps, social networks, recommendation systems, dependency management, and network analysis.`,
          quiz: [
            {
              question: "What are the main components of a graph?",
              options: [
                "Vertices and edges",
                "Keys and values",
                "Stacks and queues",
                "Arrays and strings",
              ],
              answer: "Vertices and edges",
            },
            {
              question: "What can a graph represent?",
              options: [
                "Relationships between objects",
                "Only text",
                "Only numbers",
                "Only databases",
              ],
              answer: "Relationships between objects",
            },
            {
              question: "What is a directed graph?",
              options: [
                "A graph with directed edges",
                "A graph with no edges",
                "A graph with only one node",
                "A sorted array",
              ],
              answer: "A graph with directed edges",
            },
            {
              question: "Where are graphs useful?",
              options: [
                "Maps and social networks",
                "Only CSS",
                "Only image files",
                "Only text editors",
              ],
              answer: "Maps and social networks",
            },
            {
              question: "Can graph edges have weights?",
              options: [
                "Yes",
                "No",
                "Never",
                "Only in arrays",
              ],
              answer: "Yes",
            },
          ],
        },

        {
          title: "Graph Traversal",
          content: `Two fundamental graph traversal methods are Breadth-First Search and Depth-First Search.

Breadth-First Search explores nearby vertices level by level and commonly uses a queue.

Depth-First Search explores as far as possible along a path before backtracking. It can be implemented using a stack or recursion.

These methods are useful for searching graphs, finding paths, exploring networks, and solving many programming problems.`,
          quiz: [
            {
              question: "Which traversal uses a queue?",
              options: ["BFS", "DFS", "Binary search", "Hash search"],
              answer: "BFS",
            },
            {
              question: "Which traversal explores deeply before backtracking?",
              options: ["DFS", "BFS", "Linear search", "Sorting"],
              answer: "DFS",
            },
            {
              question: "What does BFS mean?",
              options: [
                "Breadth-First Search",
                "Binary File System",
                "Basic Function Search",
                "Buffer File Structure",
              ],
              answer: "Breadth-First Search",
            },
            {
              question: "What does DFS mean?",
              options: [
                "Depth-First Search",
                "Data File System",
                "Direct Function Search",
                "Dynamic File Structure",
              ],
              answer: "Depth-First Search",
            },
            {
              question: "Where can graph traversal be used?",
              options: [
                "Path and network exploration",
                "Only UI design",
                "Only CSS",
                "Only databases",
              ],
              answer: "Path and network exploration",
            },
          ],
        },

        {
          title: "Searching and Sorting",
          content: `Searching and sorting are fundamental operations in software development.

Linear search checks elements one by one and can work on unsorted data.

Binary search repeatedly divides a sorted search range and can be much faster than linear search for large sorted collections.

Sorting algorithms arrange elements in a chosen order. Common algorithms include bubble sort, insertion sort, merge sort, and quicksort.

Understanding their complexity helps developers select appropriate algorithms.`,
          quiz: [
            {
              question: "How does linear search work?",
              options: [
                "Checks elements one by one",
                "Always divides data in half",
                "Uses only trees",
                "Uses only graphs",
              ],
              answer: "Checks elements one by one",
            },
            {
              question: "What does binary search require?",
              options: [
                "Sorted data",
                "Only a graph",
                "Only a stack",
                "Unsorted data",
              ],
              answer: "Sorted data",
            },
            {
              question: "What does sorting do?",
              options: [
                "Arranges elements in an order",
                "Deletes elements",
                "Creates databases",
                "Encrypts data",
              ],
              answer: "Arranges elements in an order",
            },
            {
              question: "Which is a sorting algorithm?",
              options: ["Merge sort", "Binary search", "BFS", "DFS"],
              answer: "Merge sort",
            },
            {
              question: "Why analyze algorithm complexity?",
              options: [
                "To select efficient algorithms",
                "To design logos",
                "To create users",
                "To change hardware",
              ],
              answer: "To select efficient algorithms",
            },
          ],
        },

        {
          title: "Mini Project: Data Structure Based Application",
          content: `Build a small application that uses multiple data structures.

For example, create a task management system where tasks are stored in an array or linked list, urgent tasks are handled using a priority queue, and completed actions are tracked using a stack.

Use a hash table to quickly find tasks by ID.

Analyze the operations used by the application and explain why each data structure was selected.

This project helps connect theoretical data structures with practical software development.`,
          quiz: [
            {
              question: "Which structure can store tasks in order?",
              options: ["Array", "Compiler", "Browser", "Operating system"],
              answer: "Array",
            },
            {
              question: "Which structure can handle urgent tasks?",
              options: ["Priority queue", "String", "Array only", "Graph only"],
              answer: "Priority queue",
            },
            {
              question: "Which structure can track undo operations?",
              options: ["Stack", "Queue", "Graph", "Tree"],
              answer: "Stack",
            },
            {
              question: "Which structure can provide fast task lookup by ID?",
              options: ["Hash table", "Stack", "Queue", "Heap only"],
              answer: "Hash table",
            },
            {
              question: "What is the main goal of the project?",
              options: [
                "Apply data structures in a practical application",
                "Only create a user interface",
                "Only create a database",
                "Only write documentation",
              ],
              answer: "Apply data structures in a practical application",
            },
          ],
        },
      ],
    },
  ],
};

export default dataStructuresCourse;
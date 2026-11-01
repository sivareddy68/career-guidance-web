const algorithmsCourse = {
  title: "Algorithms",
  description:
    "Learn algorithm fundamentals, searching, sorting, recursion, divide and conquer, greedy algorithms, dynamic programming, and practical problem solving.",

  weeks: [
    {
      title: "Week 1: Algorithm Fundamentals",
      description:
        "Understand algorithms, complexity, problem-solving approaches, and basic searching techniques.",
      lessons: [
        {
          title: "Introduction to Algorithms",
          content: `An algorithm is a step-by-step procedure used to solve a problem or perform a task.

Software developers use algorithms for searching data, sorting information, processing user requests, finding paths, and solving computational problems.

A good algorithm should be correct, understandable, and reasonably efficient.

The choice of algorithm depends on the problem, input size, performance requirements, and available resources.`,
          quiz: [
            {
              question: "What is an algorithm?",
              options: [
                "A step-by-step procedure for solving a problem",
                "A programming language",
                "A database",
                "A user interface",
              ],
              answer: "A step-by-step procedure for solving a problem",
            },
            {
              question: "What should a good algorithm provide?",
              options: [
                "Correct and efficient problem solving",
                "Only more code",
                "Only a user interface",
                "Only database storage",
              ],
              answer: "Correct and efficient problem solving",
            },
            {
              question: "What can algorithms be used for?",
              options: [
                "Searching and sorting data",
                "Only designing websites",
                "Only creating databases",
                "Only writing documentation",
              ],
              answer: "Searching and sorting data",
            },
            {
              question: "What can influence algorithm selection?",
              options: [
                "Input size and performance requirements",
                "Screen brightness",
                "Keyboard type",
                "Computer color",
              ],
              answer: "Input size and performance requirements",
            },
            {
              question: "Who commonly uses algorithms?",
              options: [
                "Software developers",
                "Only designers",
                "Only network technicians",
                "Only hardware engineers",
              ],
              answer: "Software developers",
            },
          ],
        },

        {
          title: "Algorithm Complexity",
          content: `Algorithm complexity describes how an algorithm's resource requirements change as the input size increases.

Time complexity focuses on execution time, while space complexity focuses on additional memory usage.

Big O notation is commonly used to describe upper-bound growth rates.

Examples include O(1), O(log n), O(n), O(n log n), and O(n²).

Understanding complexity helps developers avoid inefficient solutions when working with large amounts of data.`,
          quiz: [
            {
              question: "What does time complexity describe?",
              options: [
                "Growth of running time with input size",
                "Database storage",
                "Screen size",
                "Network speed",
              ],
              answer: "Growth of running time with input size",
            },
            {
              question: "What does space complexity measure?",
              options: [
                "Additional memory usage",
                "Execution time only",
                "Number of users",
                "Network bandwidth",
              ],
              answer: "Additional memory usage",
            },
            {
              question: "Which notation is commonly used for complexity?",
              options: ["Big O", "HTML", "CSS", "JSON"],
              answer: "Big O",
            },
            {
              question: "Which represents constant time?",
              options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
              answer: "O(1)",
            },
            {
              question: "Why is complexity important?",
              options: [
                "It helps choose efficient algorithms",
                "It creates databases",
                "It designs interfaces",
                "It removes all bugs",
              ],
              answer: "It helps choose efficient algorithms",
            },
          ],
        },

        {
          title: "Linear Search",
          content: `Linear search is a simple searching algorithm that checks elements one by one until the target is found or all elements have been checked.

It can be used on both sorted and unsorted collections.

For an array containing n elements, the worst-case time complexity of linear search is O(n).

Although it is simple, linear search can become inefficient for very large datasets when faster searching methods are available.`,
          quiz: [
            {
              question: "How does linear search work?",
              options: [
                "Checks elements one by one",
                "Always divides data in half",
                "Uses a tree only",
                "Uses a graph only",
              ],
              answer: "Checks elements one by one",
            },
            {
              question: "Can linear search work on unsorted data?",
              options: ["Yes", "No", "Only sometimes", "Only with strings"],
              answer: "Yes",
            },
            {
              question: "What is the worst-case complexity of linear search?",
              options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
              answer: "O(n)",
            },
            {
              question: "When can linear search be inefficient?",
              options: [
                "With very large datasets",
                "With one element",
                "With empty data only",
                "Never",
              ],
              answer: "With very large datasets",
            },
            {
              question: "What does linear search return when the target is found?",
              options: [
                "The target or its position",
                "A database",
                "A new program",
                "A sorted tree",
              ],
              answer: "The target or its position",
            },
          ],
        },

        {
          title: "Binary Search",
          content: `Binary search is an efficient searching algorithm that works on sorted data.

It repeatedly compares the target with the middle element and eliminates half of the remaining search space.

Its time complexity is O(log n), making it much faster than linear search for many large sorted collections.

Binary search is widely used in programming problems and applications where data is maintained in sorted order.`,
          quiz: [
            {
              question: "What does binary search require?",
              options: [
                "Sorted data",
                "Only unsorted data",
                "A graph",
                "A stack",
              ],
              answer: "Sorted data",
            },
            {
              question: "What happens during binary search?",
              options: [
                "Half of the search space is eliminated",
                "Every element is always checked",
                "The data is deleted",
                "A graph is created",
              ],
              answer: "Half of the search space is eliminated",
            },
            {
              question: "What is binary search complexity?",
              options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
              answer: "O(log n)",
            },
            {
              question: "Why is binary search efficient?",
              options: [
                "It reduces the search space by half",
                "It checks every item",
                "It uses more memory always",
                "It sorts the data every time",
              ],
              answer: "It reduces the search space by half",
            },
            {
              question: "Where is binary search commonly used?",
              options: [
                "Sorted collections",
                "Only images",
                "Only databases",
                "Only networks",
              ],
              answer: "Sorted collections",
            },
          ],
        },
      ],
    },

    {
      title: "Week 2: Sorting and Recursion",
      description:
        "Learn common sorting algorithms, recursion, and how to analyze their performance.",
      lessons: [
        {
          title: "Bubble Sort and Selection Sort",
          content: `Bubble sort repeatedly compares adjacent elements and swaps them when they are in the wrong order.

Selection sort repeatedly finds the smallest remaining element and places it in the correct position.

Both algorithms are easy to understand but generally have O(n²) time complexity in typical implementations.

They are useful for learning sorting concepts, although more efficient algorithms are preferred for large datasets.`,
          quiz: [
            {
              question: "What does bubble sort compare?",
              options: [
                "Adjacent elements",
                "Only the first element",
                "Only the last element",
                "Database rows",
              ],
              answer: "Adjacent elements",
            },
            {
              question: "What does selection sort repeatedly find?",
              options: [
                "The smallest remaining element",
                "The largest database",
                "A random node",
                "A graph path",
              ],
              answer: "The smallest remaining element",
            },
            {
              question: "What is the typical complexity of these basic sorts?",
              options: ["O(n²)", "O(1)", "O(log n)", "O(log log n)"],
              answer: "O(n²)",
            },
            {
              question: "Why are these algorithms useful for learning?",
              options: [
                "They demonstrate basic sorting concepts",
                "They are always the fastest",
                "They replace databases",
                "They remove recursion",
              ],
              answer: "They demonstrate basic sorting concepts",
            },
            {
              question: "Are they usually preferred for very large datasets?",
              options: ["No", "Yes", "Always", "Only for databases"],
              answer: "No",
            },
          ],
        },

        {
          title: "Merge Sort",
          content: `Merge sort is a divide-and-conquer sorting algorithm.

It divides an array into smaller parts, recursively sorts those parts, and then merges the sorted parts.

Its time complexity is O(n log n), which makes it efficient for large datasets.

Merge sort usually requires additional memory for the merging process, making space complexity an important consideration.`,
          quiz: [
            {
              question: "Which approach does merge sort use?",
              options: [
                "Divide and conquer",
                "Greedy only",
                "Random search",
                "Hashing",
              ],
              answer: "Divide and conquer",
            },
            {
              question: "What does merge sort do after dividing data?",
              options: [
                "Sorts and merges the parts",
                "Deletes the parts",
                "Creates a graph",
                "Stops immediately",
              ],
              answer: "Sorts and merges the parts",
            },
            {
              question: "What is merge sort time complexity?",
              options: ["O(n log n)", "O(n²)", "O(n)", "O(1)"],
              answer: "O(n log n)",
            },
            {
              question: "Does merge sort usually require additional memory?",
              options: ["Yes", "No", "Never", "Only for one element"],
              answer: "Yes",
            },
            {
              question: "Why is merge sort useful?",
              options: [
                "It efficiently sorts large datasets",
                "It only works on one item",
                "It replaces databases",
                "It removes all memory usage",
              ],
              answer: "It efficiently sorts large datasets",
            },
          ],
        },

        {
          title: "Quick Sort",
          content: `Quick sort is another divide-and-conquer sorting algorithm.

It selects a pivot and partitions the elements around the pivot. The smaller elements are placed on one side and larger elements on the other.

The average time complexity is O(n log n), while the worst case can be O(n²) depending on pivot selection and input arrangement.

Good pivot selection and implementation techniques can improve practical performance.`,
          quiz: [
            {
              question: "What does quick sort use?",
              options: ["A pivot", "A queue only", "A database", "A graph"],
              answer: "A pivot",
            },
            {
              question: "What does partitioning do?",
              options: [
                "Separates elements around a pivot",
                "Deletes all elements",
                "Creates a database",
                "Reverses every string",
              ],
              answer: "Separates elements around a pivot",
            },
            {
              question: "What is the average complexity of quick sort?",
              options: ["O(n log n)", "O(n²)", "O(1)", "O(log n)"],
              answer: "O(n log n)",
            },
            {
              question: "What can cause the worst-case complexity?",
              options: [
                "Poor pivot selection",
                "Using an array",
                "Using numbers",
                "Using recursion",
              ],
              answer: "Poor pivot selection",
            },
            {
              question: "What approach does quick sort use?",
              options: [
                "Divide and conquer",
                "Breadth-first search",
                "Hashing",
                "Dynamic programming only",
              ],
              answer: "Divide and conquer",
            },
          ],
        },

        {
          title: "Recursion",
          content: `Recursion occurs when a function calls itself to solve a smaller version of the same problem.

A recursive solution needs a base case that stops further recursive calls.

Recursion is useful for problems involving trees, graphs, divide-and-conquer algorithms, and mathematical definitions.

Developers should consider the call stack and possible stack overflow when using deep recursion.`,
          quiz: [
            {
              question: "What is recursion?",
              options: [
                "A function calling itself",
                "A function calling another program",
                "A database operation",
                "A sorting-only technique",
              ],
              answer: "A function calling itself",
            },
            {
              question: "What stops recursive calls?",
              options: ["Base case", "Database", "Loop only", "Compiler"],
              answer: "Base case",
            },
            {
              question: "Where is recursion useful?",
              options: [
                "Tree and divide-and-conquer problems",
                "Only CSS",
                "Only databases",
                "Only networking",
              ],
              answer: "Tree and divide-and-conquer problems",
            },
            {
              question: "What can deep recursion cause?",
              options: [
                "Stack overflow",
                "Automatic sorting",
                "Database creation",
                "Faster execution always",
              ],
              answer: "Stack overflow",
            },
            {
              question: "What does each recursive call generally solve?",
              options: [
                "A smaller version of the problem",
                "A completely unrelated problem",
                "A database problem",
                "Only a UI problem",
              ],
              answer: "A smaller version of the problem",
            },
          ],
        },
      ],
    },

    {
      title: "Week 3: Algorithmic Problem Solving",
      description:
        "Learn divide and conquer, greedy algorithms, backtracking, and common problem-solving techniques.",
      lessons: [
        {
          title: "Divide and Conquer",
          content: `Divide and conquer solves a problem by dividing it into smaller subproblems, solving those subproblems, and combining their results.

Merge sort and quick sort are common examples.

The technique can make difficult problems easier to manage and can lead to efficient algorithms.

A good divide-and-conquer solution should define how the problem is divided, how smaller problems are solved, and how their results are combined.`,
          quiz: [
            {
              question: "What are the main steps of divide and conquer?",
              options: [
                "Divide, solve, and combine",
                "Search, delete, and stop",
                "Sort, print, and delete",
                "Hash, queue, and stack",
              ],
              answer: "Divide, solve, and combine",
            },
            {
              question: "Which is an example of divide and conquer?",
              options: ["Merge sort", "Linear search", "Hash lookup", "Queue"],
              answer: "Merge sort",
            },
            {
              question: "Why divide a problem?",
              options: [
                "To solve smaller subproblems",
                "To delete data",
                "To increase memory",
                "To avoid algorithms",
              ],
              answer: "To solve smaller subproblems",
            },
            {
              question: "What happens after subproblems are solved?",
              options: [
                "Their results are combined",
                "They are always deleted",
                "A database is created",
                "The program stops",
              ],
              answer: "Their results are combined",
            },
            {
              question: "What can divide and conquer improve?",
              options: [
                "Problem-solving efficiency",
                "Screen resolution",
                "Database passwords",
                "UI colors",
              ],
              answer: "Problem-solving efficiency",
            },
          ],
        },

        {
          title: "Greedy Algorithms",
          content: `A greedy algorithm makes the best-looking choice at each step with the goal of producing a good overall solution.

Greedy methods can be efficient and simple when the problem has the right mathematical properties.

Examples include certain approaches to activity selection, minimum spanning tree algorithms, and shortest-path algorithms under appropriate conditions.

A greedy choice is not always globally optimal, so developers must verify that the approach is valid for the problem.`,
          quiz: [
            {
              question: "What does a greedy algorithm do?",
              options: [
                "Makes the best local choice at each step",
                "Always tries every possibility",
                "Only uses recursion",
                "Only sorts arrays",
              ],
              answer: "Makes the best local choice at each step",
            },
            {
              question: "Are greedy algorithms always globally optimal?",
              options: ["No", "Yes", "Always", "Only for arrays"],
              answer: "No",
            },
            {
              question: "When should a greedy method be used?",
              options: [
                "When its correctness is appropriate for the problem",
                "For every problem",
                "Only for strings",
                "Only for databases",
              ],
              answer:
                "When its correctness is appropriate for the problem",
            },
            {
              question: "What is a local choice?",
              options: [
                "A choice that looks best at the current step",
                "The final answer always",
                "A random value",
                "A database record",
              ],
              answer: "A choice that looks best at the current step",
            },
            {
              question: "What is an advantage of greedy algorithms?",
              options: [
                "They can be simple and efficient",
                "They always use recursion",
                "They require all possible solutions",
                "They never need analysis",
              ],
              answer: "They can be simple and efficient",
            },
          ],
        },

        {
          title: "Backtracking",
          content: `Backtracking is a problem-solving technique that builds a solution step by step and abandons a path when it cannot lead to a valid solution.

It is commonly used for constraint-based problems such as generating combinations, solving puzzles, and exploring possible arrangements.

Backtracking often uses recursion.

Although it can be powerful, the number of possibilities may grow rapidly, so pruning invalid choices early can improve performance.`,
          quiz: [
            {
              question: "What does backtracking do?",
              options: [
                "Builds solutions and abandons invalid paths",
                "Only sorts data",
                "Only searches arrays",
                "Only stores values",
              ],
              answer: "Builds solutions and abandons invalid paths",
            },
            {
              question: "What is commonly used with backtracking?",
              options: ["Recursion", "SQL only", "HTML", "CSS"],
              answer: "Recursion",
            },
            {
              question: "What happens when a path cannot produce a valid solution?",
              options: [
                "It is abandoned",
                "It is always accepted",
                "It becomes a database",
                "It is sorted",
              ],
              answer: "It is abandoned",
            },
            {
              question: "What type of problems use backtracking?",
              options: [
                "Constraint-based problems",
                "Only database queries",
                "Only UI design",
                "Only networking",
              ],
              answer: "Constraint-based problems",
            },
            {
              question: "What can improve backtracking performance?",
              options: [
                "Pruning invalid choices early",
                "Trying more invalid paths",
                "Removing recursion",
                "Adding random data",
              ],
              answer: "Pruning invalid choices early",
            },
          ],
        },

        {
          title: "Two Pointers and Sliding Window",
          content: `Two-pointer and sliding-window techniques are useful for solving array and string problems efficiently.

The two-pointer technique uses two indexes that move through a collection according to specific conditions.

The sliding-window technique maintains a range of elements and moves the range as the algorithm processes data.

These techniques can reduce repeated work and often improve solutions from O(n²) to O(n) for suitable problems.`,
          quiz: [
            {
              question: "What does the two-pointer technique use?",
              options: [
                "Two indexes or references",
                "Two databases",
                "Two servers",
                "Two programming languages",
              ],
              answer: "Two indexes or references",
            },
            {
              question: "What does a sliding window represent?",
              options: [
                "A moving range of elements",
                "A database table",
                "A user interface",
                "A graph root",
              ],
              answer: "A moving range of elements",
            },
            {
              question: "What can these techniques reduce?",
              options: [
                "Repeated work",
                "All memory",
                "All data",
                "Source code",
              ],
              answer: "Repeated work",
            },
            {
              question: "What complexity can suitable problems improve from?",
              options: [
                "O(n²) to O(n)",
                "O(1) to O(n²)",
                "O(log n) to O(n²)",
                "O(n) to O(n³)",
              ],
              answer: "O(n²) to O(n)",
            },
            {
              question: "Where are these techniques commonly used?",
              options: [
                "Array and string problems",
                "Only databases",
                "Only graphics",
                "Only operating systems",
              ],
              answer: "Array and string problems",
            },
          ],
        },
      ],
    },

    {
      title: "Week 4: Advanced Algorithms and Practical Development",
      description:
        "Learn dynamic programming, graph algorithms, algorithm selection, and practical software problem solving.",
      lessons: [
        {
          title: "Dynamic Programming",
          content: `Dynamic programming solves problems by breaking them into overlapping subproblems and storing previously calculated results.

It can avoid repeated calculations and significantly improve performance for suitable problems.

Two common approaches are memoization, which stores results during recursive execution, and tabulation, which builds results iteratively.

Dynamic programming is commonly used in optimization and sequence problems.`,
          quiz: [
            {
              question: "What does dynamic programming do?",
              options: [
                "Stores results of overlapping subproblems",
                "Only sorts arrays",
                "Only uses graphs",
                "Only creates databases",
              ],
              answer: "Stores results of overlapping subproblems",
            },
            {
              question: "What is memoization?",
              options: [
                "Storing results during recursive computation",
                "Sorting data",
                "Deleting results",
                "Creating a queue",
              ],
              answer: "Storing results during recursive computation",
            },
            {
              question: "What is tabulation?",
              options: [
                "Building results iteratively",
                "Using only recursion",
                "Deleting previous results",
                "Searching a graph",
              ],
              answer: "Building results iteratively",
            },
            {
              question: "Why use dynamic programming?",
              options: [
                "To avoid repeated calculations",
                "To increase repeated work",
                "To remove all memory",
                "To replace data structures",
              ],
              answer: "To avoid repeated calculations",
            },
            {
              question: "What type of problems can use dynamic programming?",
              options: [
                "Optimization problems",
                "Only UI problems",
                "Only network configuration",
                "Only database creation",
              ],
              answer: "Optimization problems",
            },
          ],
        },

        {
          title: "Graph Algorithms",
          content: `Graph algorithms solve problems involving relationships, paths, and networks.

Breadth-first search and depth-first search can explore graph structures.

Shortest-path algorithms can find efficient routes between vertices. Dijkstra's algorithm is commonly used for graphs with non-negative edge weights.

Graph algorithms are useful in maps, recommendation systems, network analysis, dependency management, and routing.`,
          quiz: [
            {
              question: "What do graph algorithms work with?",
              options: [
                "Vertices and edges",
                "Only arrays",
                "Only strings",
                "Only databases",
              ],
              answer: "Vertices and edges",
            },
            {
              question: "Which algorithm can find shortest paths with non-negative weights?",
              options: ["Dijkstra's algorithm", "Bubble sort", "Binary search", "DFS only"],
              answer: "Dijkstra's algorithm",
            },
            {
              question: "Which methods can explore graphs?",
              options: ["BFS and DFS", "Bubble sort and merge sort", "Hashing only", "Binary search only"],
              answer: "BFS and DFS",
            },
            {
              question: "Where can graph algorithms be used?",
              options: [
                "Maps and routing",
                "Only CSS",
                "Only image editing",
                "Only text formatting",
              ],
              answer: "Maps and routing",
            },
            {
              question: "What does a shortest-path algorithm find?",
              options: [
                "A path with minimum cost or distance",
                "The largest database",
                "The longest source code",
                "A UI color",
              ],
              answer: "A path with minimum cost or distance",
            },
          ],
        },

        {
          title: "Choosing the Right Algorithm",
          content: `There is rarely one algorithm that is best for every situation.

Developers should consider input size, data structure, required operations, time constraints, memory limits, implementation complexity, and maintainability.

For example, binary search is appropriate for sorted data, while linear search can be useful for small or unsorted collections.

Choosing an algorithm involves balancing performance, simplicity, correctness, and application requirements.`,
          quiz: [
            {
              question: "Is one algorithm always best for every problem?",
              options: ["No", "Yes", "Always", "Only for arrays"],
              answer: "No",
            },
            {
              question: "What should influence algorithm selection?",
              options: [
                "Input size and requirements",
                "Screen color",
                "Keyboard type",
                "Computer brand",
              ],
              answer: "Input size and requirements",
            },
            {
              question: "When is binary search appropriate?",
              options: [
                "When data is sorted",
                "Only when data is random",
                "Only for graphs",
                "Only for databases",
              ],
              answer: "When data is sorted",
            },
            {
              question: "What should developers balance?",
              options: [
                "Performance, simplicity, and correctness",
                "Only code length",
                "Only memory",
                "Only speed",
              ],
              answer: "Performance, simplicity, and correctness",
            },
            {
              question: "Why does input size matter?",
              options: [
                "Algorithm performance can change with input size",
                "It changes the programming language",
                "It removes the need for algorithms",
                "It changes the screen",
              ],
              answer: "Algorithm performance can change with input size",
            },
          ],
        },

        {
          title: "Mini Project: Algorithm Problem Solver",
          content: `In this mini project, build a small application that solves several common programming problems.

Implement searching, sorting, and at least one optimization technique such as dynamic programming or a greedy algorithm.

Measure the performance of different approaches using inputs of different sizes.

Compare the algorithms using time complexity and practical execution time.

Finally, document why each algorithm was selected and explain how the solution could be improved for larger inputs.`,
          quiz: [
            {
              question: "What should the project implement?",
              options: [
                "Searching and sorting algorithms",
                "Only a user interface",
                "Only a database",
                "Only a login page",
              ],
              answer: "Searching and sorting algorithms",
            },
            {
              question: "What can be used for optimization?",
              options: [
                "Dynamic programming or greedy algorithms",
                "Only HTML",
                "Only CSS",
                "Only strings",
              ],
              answer: "Dynamic programming or greedy algorithms",
            },
            {
              question: "Why test different input sizes?",
              options: [
                "To understand algorithm performance",
                "To change the UI",
                "To delete data",
                "To create a database",
              ],
              answer: "To understand algorithm performance",
            },
            {
              question: "What should be documented?",
              options: [
                "Why each algorithm was selected",
                "Only the application color",
                "Only the computer model",
                "Only the file name",
              ],
              answer: "Why each algorithm was selected",
            },
            {
              question: "What is the main goal of the project?",
              options: [
                "Apply algorithms to practical problems",
                "Only write documentation",
                "Only create a website",
                "Only create a database",
              ],
              answer: "Apply algorithms to practical problems",
            },
          ],
        },
      ],
    },
  ],
};

export default algorithmsCourse;
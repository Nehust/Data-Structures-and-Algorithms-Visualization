import * as algo from "./algo";

// AlgorithmName: ['Menu Display Name', ClassName, 'Verbose Display Name (optional)'],
export const algoMap = {
  ArrayList: ["ArrayList", algo.ArrayList, "ArrayList"],
  LinkedList: ["Singly LinkedList", algo.LinkedList, "SinglyLinkedList"],
  DoublyLinkedList: [
    "Doubly LinkedList",
    algo.DoublyLinkedList,
    "DoublyLinkedList",
  ],
  CircularlyLinkedList: [
    "Circularly LinkedList",
    algo.CircularlyLinkedList,
    "CircularlyLinkedList",
  ],
  StackArray: ["Stack (Array)", algo.StackArray, "StackArray"],
  StackLL: ["Stack (LinkedList)", algo.StackLL, "StackLL"],
  QueueArray: ["Queue (Array)", algo.QueueArray, "QueueArray"],
  QueueLL: ["Queue (LinkedList)", algo.QueueLL, "QueueLL"],
  DequeArray: ["Deque (Array)", algo.DequeArray, "DequeArray"],
  DequeLL: ["Deque (LinkedList)", algo.DequeLL, "DequeLL"],
  BST: ["Binary Search Tree", algo.BST, "BST"],
  Heap: ["Heap (PriorityQueue)", algo.Heap, "Heap"],
  AVL: ["AVL", algo.AVL, "AVL"],
  BubbleSort: ["Bubble Sort", algo.BubbleSort, "BubbleSort"],
  InsertionSort: ["Insertion Sort", algo.InsertionSort, "InsertionSort"],
  SelectionSort: ["Selection Sort", algo.SelectionSort, "SelectionSort"],
  Quicksort: ["Quicksort", algo.Quicksort, "Quicksort"],
  MergeSort: ["MergeSort", algo.MergeSort, "MergeSort"],
  CreateGraph: ["Graph Representations", algo.CreateGraph, "CreateGraph"],
  BFS: ["Breadth-First Search", algo.BFS, "BFS"],
  DFS: ["Depth-First Search", algo.DFS, "DFS"],
  Dijkstra: ["Dijkstra's", algo.Dijkstras, "Dijkstra"],
  Kruskal: ["Kruskal's", algo.Kruskals, "Kruskal"],
};
export const algoFilter = [
  {
    id: "ArrayList",
    category: "Linear Data Structures",
    operations: [
      { name: "Get", complexity: "O(1)" },
      { name: "Add (Back)", complexity: "O(1)" },
      { name: "Add (Index)", complexity: "O(n)" },
      { name: "Remove (Back)", complexity: "O(1)" },
      { name: "Remove (Index)", complexity: "O(n)" },
    ],
  },
  {
    id: "LinkedList",
    category: "Linear Data Structures",
    operations: [
      { name: "Add Front", complexity: "O(1)" },
      { name: "Add Back", complexity: "O(n)" },
      { name: "Add Index", complexity: "O(n)" },
      { name: "Remove Front", complexity: "O(1)" },
      { name: "Remove Back", complexity: "O(n)" },
      { name: "Remove Index", complexity: "O(n)" },
    ],
  },
  {
    id: "DoublyLinkedList",
    category: "Linear Data Structures",
    operations: [
      { name: "Add Front", complexity: "O(1)" },
      { name: "Add Back", complexity: "O(1)" },
      { name: "Add Index", complexity: "O(n)" },
      { name: "Remove Front", complexity: "O(1)" },
      { name: "Remove Back", complexity: "O(1)" },
      { name: "Remove Index", complexity: "O(n)" },
    ],
  },
  {
    id: "CircularlyLinkedList",
    category: "Linear Data Structures",
    operations: [
      { name: "Add Front", complexity: "O(1)" },
      { name: "Add Back", complexity: "O(1)" },
      { name: "Remove Front", complexity: "O(1)" },
      { name: "Remove Back", complexity: "O(1)" },
    ],
  },
  {
    id: "StackArray",
    category: "Linear Data Structures",
    operations: [
      { name: "Push", complexity: "O(1)" },
      { name: "Pop", complexity: "O(1)" },
      { name: "Peek", complexity: "O(1)" },
    ],
  },
  {
    id: "StackLL",
    category: "Linear Data Structures",
    operations: [
      { name: "Push", complexity: "O(1)" },
      { name: "Pop", complexity: "O(1)" },
      { name: "Peek", complexity: "O(1)" },
    ],
  },
  {
    id: "QueueArray",
    category: "Linear Data Structures",
    operations: [
      { name: "Enqueue", complexity: "O(1)" },
      { name: "Dequeue", complexity: "O(1)" },
      { name: "Peek", complexity: "O(1)" },
    ],
  },
  {
    id: "QueueLL",
    category: "Linear Data Structures",
    operations: [
      { name: "Enqueue", complexity: "O(1)" },
      { name: "Dequeue", complexity: "O(1)" },
      { name: "Peek", complexity: "O(1)" },
    ],
  },
  {
    id: "DequeArray",
    category: "Linear Data Structures",
    operations: [
      { name: "Add Front", complexity: "O(1)" },
      { name: "Add Back", complexity: "O(1)" },
      { name: "Remove Front", complexity: "O(1)" },
      { name: "Remove Back", complexity: "O(1)" },
    ],
  },
  {
    id: "DequeLL",
    category: "Linear Data Structures",
    operations: [
      { name: "Add Front", complexity: "O(1)" },
      { name: "Add Back", complexity: "O(1)" },
      { name: "Remove Front", complexity: "O(1)" },
      { name: "Remove Back", complexity: "O(1)" },
    ],
  },
  {
    id: "BST",
    category: "Tree",
    operations: [
      { name: "Search", complexity: "O(h)" },
      { name: "Insert", complexity: "O(h)" },
      { name: "Delete", complexity: "O(h)" },
    ],
  },
  {
    id: "Heap",
    category: "Tree",
    operations: [
      { name: "Insert", complexity: "O(log n)" },
      { name: "Extract Max/Min", complexity: "O(log n)" },
      { name: "Peek", complexity: "O(1)" },
    ],
  },
  {
    id: "AVL",
    category: "Tree",
    operations: [
      { name: "Search", complexity: "O(log n)" },
      { name: "Insert", complexity: "O(log n)" },
      { name: "Delete", complexity: "O(log n)" },
    ],
  },
  {
    id: "BubbleSort",
    category: "Sorting",
    operations: [
      { name: "Best Case", complexity: "O(n)" },
      { name: "Average Case", complexity: "O(n²)" },
      { name: "Worst Case", complexity: "O(n²)" },
    ],
  },
  {
    id: "SelectionSort",
    category: "Sorting",
    operations: [
      { name: "Best Case", complexity: "O(n²)" },
      { name: "Average Case", complexity: "O(n²)" },
      { name: "Worst Case", complexity: "O(n²)" },
    ],
  },
  {
    id: "InsertionSort",
    category: "Sorting",
    operations: [
      { name: "Best Case", complexity: "O(n)" },
      { name: "Average Case", complexity: "O(n²)" },
      { name: "Worst Case", complexity: "O(n²)" },
    ],
  },
  {
    id: "Quicksort",
    category: "Sorting",
    operations: [
      { name: "Best Case", complexity: "O(n log n)" },
      { name: "Average Case", complexity: "O(n log n)" },
      { name: "Worst Case", complexity: "O(n²)" },
    ],
  },
  {
    id: "MergeSort",
    category: "Sorting",
    operations: [
      { name: "Best Case", complexity: "O(n log n)" },
      { name: "Average Case", complexity: "O(n log n)" },
      { name: "Worst Case", complexity: "O(n log n)" },
    ],
  },
  {
    id: "BFS",
    category: "Graph Algorithms",
    operations: [
      { name: "Traversal", complexity: "O(V + E)" },
      { name: "Space", complexity: "O(V)" },
    ],
  },
  {
    id: "DFS",
    category: "Graph Algorithms",
    operations: [
      { name: "Traversal", complexity: "O(V + E)" },
      { name: "Space", complexity: "O(V)" },
    ],
  },
  {
    id: "Dijkstra",
    category: "Graph Algorithms",
    operations: [
      { name: "Adj Matrix", complexity: "O(V²)" },
      { name: "Adj List + Heap", complexity: "O(E log V)" },
    ],
  },
  {
    id: "CreateGraph",
    category: "Graph Algorithms",
    operations: [
      { name: "Add Vertex", complexity: "O(1)" },
      { name: "Add Edge", complexity: "O(1)" },
      { name: "Remove Edge", complexity: "O(E)" },
    ],
  },
  {
    id: "Kruskal",
    category: "Graph Algorithms",
    operations: [{ name: "Complexity", complexity: "O(E log E)" }],
  },
];

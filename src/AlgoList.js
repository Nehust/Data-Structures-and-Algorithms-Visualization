import * as algo from "./algo";

// AlgorithmName: ['Menu Display Name', ClassName, hasPseudoCode, 'Verbose Display Name (optional)'],
export const algoMap = {
  ArrayList: ["ArrayList", algo.ArrayList, false, "ArrayList"],
  LinkedList: ["Singly LinkedList", algo.LinkedList, false, "SinglyLinkedList"],
  DoublyLinkedList: [
    "Doubly LinkedList",
    algo.DoublyLinkedList,
    false,
    "DoublyLinkedList",
  ],
  CircularlyLinkedList: [
    "Circularly LinkedList",
    algo.CircularlyLinkedList,
    false,
    "CircularlyLinkedList",
  ],
  StackArray: ["Stack (Array)", algo.StackArray, false, "StackArray"],
  StackLL: ["Stack (LinkedList)", algo.StackLL, false, "StackLL"],
  QueueArray: ["Queue (Array)", algo.QueueArray, false, "QueueArray"],
  QueueLL: ["Queue (LinkedList)", algo.QueueLL, false, "QueueLL"],
  DequeArray: ["Deque (Array)", algo.DequeArray, false, "DequeArray"],
  DequeLL: ["Deque (LinkedList)", algo.DequeLL, false, "DequeLL"],
  BST: ["Binary Search Tree", algo.BST, false, "BST"],
  Heap: ["Heap (PriorityQueue)", algo.Heap, false, "Heap"],
  AVL: ["AVL", algo.AVL, false, "AVL"],
  BubbleSort: ["Bubble Sort", algo.BubbleSort, false, "BubbleSort"],
  InsertionSort: ["Insertion Sort", algo.InsertionSort, false, "InsertionSort"],
  SelectionSort: ["Selection Sort", algo.SelectionSort, false, "SelectionSort"],
  Quicksort: ["Quicksort", algo.Quicksort, false, "Quicksort"],
  MergeSort: ["MergeSort", algo.MergeSort, false, "MergeSort"],
  CreateGraph: [
    "Graph Representations",
    algo.CreateGraph,
    false,
    "CreateGraph",
  ],
  BFS: ["Breadth-First Search", algo.BFS, false, "BFS"],
  DFS: ["Depth-First Search", algo.DFS, false, "DFS"],
  Dijkstra: ["Dijkstra's", algo.Dijkstras, false, "Dijkstra"],
  Kruskal: ["Kruskal's", algo.Kruskals, false, "Kruskal"],
};
export const algoFilter = [
  {
    id: "ArrayList",
    category: " Linear Data Structures",
  },
  {
    id: "LinkedList",
    category: " Linear Data Structures",
  },
  {
    id: "DoublyLinkedList",
    category: " Linear Data Structures",
  },
  {
    id: "CircularlyLinkedList",
    category: " Linear Data Structures",
  },
  {
    id: "StackArray",
    category: " Linear Data Structures",
  },
  {
    id: "StackLL",
    category: " Linear Data Structures",
  },
  {
    id: "QueueArray",
    category: " Linear Data Structures",
  },
  {
    id: "QueueLL",
    category: " Linear Data Structures",
  },
  {
    id: "DequeArray",
    category: " Linear Data Structures",
  },
  {
    id: "DequeLL",
    category: "Linear Data Structures",
  },
  {
    id: "BST",
    category: "Tree",
  },
  {
    id: "Heap",
    category: "Tree",
  },
  {
    id: "AVL",
    category: "Tree",
  },
  {
    id: "BubbleSort",
    category: "Sorting",
  },
  {
    id: "SelectionSort",
    category: "Sorting",
  },
  {
    id: "InsertionSort",
    category: "Sorting",
  },
  {
    id: "Quicksort",
    category: "Sorting",
  },
  {
    id: "MergeSort",
    category: "Sorting",
  },
  {
    id: "BFS",
    category: "Graph Algorithms",
  },
  {
    id: "DFS",
    category: "Graph Algorithms",
  },
  {
    id: "Dijkstra",
    category: "Graph Algorithms",
  },
  {
    id: "CreateGraph",
    category: "Graph Algorithms",
  },
  {
    id: "Kruskal",
    category: "Graph Algorithms",
  },
];

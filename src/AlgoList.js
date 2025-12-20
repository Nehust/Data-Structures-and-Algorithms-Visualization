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
  BST: ["Binary Search Tree", null, false, "BST"],
  Heap: ["Heap (PriorityQueue)", null, false, "Heap"],
  AVL: ["AVL", null, false, "AVL"],
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
    category: "Lists",
  },
  {
    id: "LinkedList",
    category: "Lists",
  },
  {
    id: "DoublyLinkedList",
    category: "Lists",
  },
  {
    id: "CircularlyLinkedList",
    category: "Lists",
  },
  {
    id: "StackArray",
    category: "Linear Data Structures",
  },
  {
    id: "StackLL",
    category: "Linear Data Structures",
  },
  {
    id: "QueueArray",
    category: "Linear Data Structures",
  },
  {
    id: "QueueLL",
    category: "Linear Data Structures",
  },
  {
    id: "DequeArray",
    category: "Linear Data Structures",
  },
  {
    id: "DequeLL",
    category: "Linear Data Structures",
  },
  {
    id: "BST",
    category: "Trees and SkipList",
  },
  {
    id: "Heap",
    category: "Trees and SkipList",
  },
  {
    id: "AVL",
    category: "Trees and SkipList",
  },
  {
    id: "BTree",
    category: "Trees and SkipList",
  },
  {
    id: "SkipList",
    category: "Trees and SkipList",
  },
  {
    id: "OpenHash",
    category: "HashMaps",
  },
  {
    id: "ClosedHash",
    category: "HashMaps",
  },
  {
    id: "BubbleSort",
    category: "Sorting and Quickselect",
  },
  {
    id: "CocktailSort",
    category: "Sorting and Quickselect",
  },
  {
    id: "SelectionSort",
    category: "Sorting and Quickselect",
  },
  {
    id: "InsertionSort",
    category: "Sorting and Quickselect",
  },
  {
    id: "Quicksort",
    category: "Sorting and Quickselect",
  },
  {
    id: "Quickselect",
    category: "Sorting and Quickselect",
  },
  {
    id: "MergeSort",
    category: "Sorting and Quickselect",
  },
  {
    id: "LSDRadix",
    category: "Sorting and Quickselect",
  },
  {
    id: "HeapSort",
    category: "Sorting and Quickselect",
  },
  {
    id: "BruteForce",
    category: "Pattern Matching",
  },
  {
    id: "BoyerMoore",
    category: "Pattern Matching",
  },
  {
    id: "KMP",
    category: "Pattern Matching",
  },
  {
    id: "RabinKarp",
    category: "Pattern Matching",
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
    id: "Prim",
    category: "Graph Algorithms",
  },
  {
    id: "Kruskal",
    category: "Graph Algorithms",
  },
  {
    id: "LCS",
    category: "DP & Extras",
  },
  {
    id: "Floyd",
    category: "DP & Extras",
  },
  {
    id: "CreateGraph",
    category: "DP & Extras",
  },
  {
    id: "DisjointSet",
    category: "DP & Extras",
  },
  {
    id: "SplayTree",
    category: "DP & Extras",
  },
  {
    id: "FredSort",
    category: "DP & Extras",
  },
  {
    id: "SleepSort",
    category: "DP & Extras",
  },
  {
    id: "MiracleSort",
    category: "DP & Extras",
  },
  {
    id: "DropSort",
    category: "DP & Extras",
  },
];

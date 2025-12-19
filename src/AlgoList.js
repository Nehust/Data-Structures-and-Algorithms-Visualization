import * as algo from "./algo";

// AlgorithmName: ['Menu Display Name', ClassName, hasPseudoCode, 'Verbose Display Name (optional)'],
export const algoMap = {
  ArrayList: ["ArrayList", algo.ArrayList, false, "ArrayList"],
  LinkedList: ["Singly LinkedList", algo.LinkedList, false, "SinglyLinkedList"],
  DoublyLinkedList: ["Doubly LinkedList", algo.DoublyLinkedList, false, "DoublyLinkedList"],
  CircularlyLinkedList: [
    "Circularly LinkedList",
    null,
    false,
    "CircularlyLinkedList",
  ],
  StackArray: ["Stack (Array)", null, false, "StackArray"],
  StackLL: ["Stack (LinkedList)", null, false, "StackLL"],
  QueueArray: ["Queue (Array)", null, false, "QueueArray"],
  QueueLL: ["Queue (LinkedList)", null, false, "QueueLL"],
  DequeArray: ["Deque (Array)", null, false, "DequeArray"],
  DequeLL: ["Deque (LinkedList)", null, false, "DequeLL"],
  BST: ["Binary Search Tree", null, false, "BST"],
  AVL: ["AVL", null, false, "AVL"],
  BubbleSort: ["Bubble Sort", null, false, "BubbleSort"],
  InsertionSort: ["Insertion Sort", null, false, "InsertionSort"],
  SelectionSort: ["Selection Sort", null, false, "SelectionSort"],
  Quicksort: ["Quicksort", null, false, "Quicksort"],
  Quickselect: ["Quickselect (kᵗʰ Select)", null, false, "Quickselect"],
  MergeSort: ["MergeSort", null, false, "MergeSort"],
  RabinKarp: ["Rabin-Karp", null, false, "RabinKarp"],
  CreateGraph: ["Graph Representations", null, false, "CreateGraph"],
  BFS: ["Breadth-First Search", null, false, "BFS"],
  DFS: ["Depth-First Search", null, false, "DFS"],
  Dijkstra: ["Dijkstra's", null, false, "Dijkstra"],
  //Prim: ["Prim's", null, "Prim"],
  Kruskal: ["Kruskal's", null, false, "Kruskal"],
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

import * as algos from "./algo";

// AlgorithmName: ['Menu Display Name', ClassName, hasPseudoCode, 'Verbose Display Name (optional)', 'Rainbow Color (optional)'],
export const algoMap = {
  // AlgorithmName: ['Menu Display Name', algos.ClassName, hasPseudoCode, 'Verbose Display Name (optional)', 'Rainbow Color (optional)'],
  LVA: ["LVA", algos.LVA, false, "Landis-Velsky-Adelson Tree"],
  BogoSort: ["Bogo Sort", algos.BogoSort, false, "Bogo Sort"],
  DropSort: ["Drop Sort", algos.DropSort, false, "Drop Sort"],
  SleepSort: ["Sleep Sort", algos.SleepSort, false, "Sleep Sort"],
  MiracleSort: ["Miracle Sort", algos.MiracleSort, false, "Miracle Sort"],
  FredSort: ["Fred Sort", algos.FredSort, false, "Fred Sort"],
  ArrayList: ["ArrayList", algos.ArrayList, true],
  LinkedList: ["Singly LinkedList", algos.LinkedList, true],
  DoublyLinkedList: ["Doubly LinkedList", algos.DoublyLinkedList, true],
  CircularlyLinkedList: [
    "Circularly LinkedList",
    algos.CircularlyLinkedList,
    true,
  ],
  StackArray: ["Stack (Array)", algos.StackArray, true],
  StackLL: ["Stack (LinkedList)", algos.StackLL, true],
  QueueArray: ["Queue (Array)", algos.QueueArray, true],
  QueueLL: ["Queue (LinkedList)", algos.QueueLL, true],
  DequeArray: ["Deque (Array)", algos.DequeArray, true],
  DequeLL: ["Deque (LinkedList)", algos.DequeLL],
  BST: ["Binary Search Tree", algos.BST, true],
  Heap: ["Heap (PriorityQueue)", algos.Heap],
  SkipList: ["SkipList", algos.SkipList],
  OpenHash: ["HashMap (Probing)", algos.OpenHash],
  ClosedHash: ["HashMap (Chaining)", algos.ClosedHash],
  SplayTree: ["SplayTree", algos.SplayTree],
  AVL: ["AVL", algos.AVL],
  BTree: ["2-4 Tree", algos.BTree],
  BubbleSort: ["Bubble Sort", algos.BubbleSort, true],
  CocktailSort: ["Cocktail Shaker Sort", algos.CocktailSort, true],
  InsertionSort: ["Insertion Sort", algos.InsertionSort, true],
  SelectionSort: ["Selection Sort", algos.SelectionSort, true],
  Quicksort: ["Quicksort", algos.Quicksort, true],
  Quickselect: ["Quickselect (kᵗʰ Select)", algos.Quickselect, true],
  MergeSort: ["MergeSort", algos.MergeSort, true],
  LSDRadix: ["LSD Radix Sort", algos.LSDRadix, true],
  HeapSort: ["HeapSort", algos.HeapSort, true],
  BruteForce: ["Brute Force", algos.BruteForce, true],
  BoyerMoore: ["Boyer-Moore", algos.BoyerMoore, true],
  KMP: ["KMP", algos.KMP, true],
  RabinKarp: ["Rabin-Karp", algos.RabinKarp, true],
  CreateGraph: ["Graph Representations", algos.CreateGraph, true],
  BFS: ["Breadth-First Search", algos.BFS, true],
  DFS: ["Depth-First Search", algos.DFS, true],
  Dijkstra: ["Dijkstra's", algos.Dijkstras, true],
  Prim: ["Prim's", algos.Prims, true],
  Kruskal: ["Kruskal's", algos.Kruskals, true],
  DisjointSet: ["Disjoint Set", algos.DisjointSet, true],
  LCS: ["LCS", algos.LCS, true, "Longest Common Subsequence"],
  Floyd: ["Floyd-Warshall", algos.Floyd],
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

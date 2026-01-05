import { Company, Question } from '../types';

export const companies: Company[] = [
  {
    id: 'google',
    name: 'Google',
    role: 'Software Engineer',
    level: 'L4 (Senior)',
    logo: '🔵',
    color: '#4285F4',
    bgGradient: 'from-blue-600 to-blue-800',
    description: 'System design at scale, algorithmic thinking, and Googleyness',
    categories: [
      { id: 'coding', name: 'Coding', type: 'coding', timeLimit: 45, questionCount: 70, icon: '💻' },
      { id: 'system-design', name: 'System Design', type: 'system-design', timeLimit: 60, questionCount: 10, icon: '🏗️' },
      { id: 'behavioral', name: 'Googleyness & Leadership', type: 'behavioral', timeLimit: 30, questionCount: 12, icon: '🎯' },
      { id: 'phone-screen', name: 'Phone Screen', type: 'coding', timeLimit: 45, questionCount: 8, icon: '📱' },
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    role: 'Software Dev Engineer',
    level: 'SDE3 (Senior)',
    logo: '🟠',
    color: '#FF9900',
    bgGradient: 'from-orange-500 to-orange-700',
    description: 'Leadership Principles obsession, customer focus, system design',
    categories: [
      { id: 'coding', name: 'Coding', type: 'coding', timeLimit: 45, questionCount: 15, icon: '💻' },
      { id: 'system-design', name: 'System Design', type: 'system-design', timeLimit: 60, questionCount: 10, icon: '🏗️' },
      { id: 'leadership-principles', name: 'Leadership Principles', type: 'behavioral', timeLimit: 45, questionCount: 16, icon: '⭐' },
      { id: 'bar-raiser', name: 'Bar Raiser', type: 'behavioral', timeLimit: 45, questionCount: 8, icon: '📊' },
    ]
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    role: 'Member of Technical Staff',
    level: 'SMTS (Senior)',
    logo: '☁️',
    color: '#00A1E0',
    bgGradient: 'from-cyan-500 to-blue-600',
    description: 'Multi-tenant architecture, platform thinking, Apex expertise',
    categories: [
      { id: 'coding', name: 'Coding & Apex', type: 'coding', timeLimit: 45, questionCount: 12, icon: '💻' },
      { id: 'system-design', name: 'System Design', type: 'system-design', timeLimit: 60, questionCount: 8, icon: '🏗️' },
      { id: 'platform', name: 'Platform Knowledge', type: 'technical', timeLimit: 30, questionCount: 10, icon: '☁️' },
      { id: 'behavioral', name: 'Behavioral', type: 'behavioral', timeLimit: 30, questionCount: 8, icon: '🤝' },
    ]
  },
  {
    id: 'uber',
    name: 'Uber',
    role: 'Software Engineer',
    level: 'SSE (Senior)',
    logo: '⬛',
    color: '#000000',
    bgGradient: 'from-gray-800 to-black',
    description: 'Real-time systems, distributed computing, geo-spatial problems',
    categories: [
      { id: 'coding', name: 'Coding', type: 'coding', timeLimit: 45, questionCount: 12, icon: '💻' },
      { id: 'system-design', name: 'System Design', type: 'system-design', timeLimit: 60, questionCount: 10, icon: '🏗️' },
      { id: 'real-time', name: 'Real-time Systems', type: 'technical', timeLimit: 45, questionCount: 8, icon: '⚡' },
      { id: 'behavioral', name: 'Behavioral', type: 'behavioral', timeLimit: 30, questionCount: 8, icon: '🎯' },
    ]
  }
];

export const questions: Question[] = [
  // ============ GOOGLE L4 QUESTIONS ============
  // Coding
  {
    id: 'g-code-1',
    companyId: 'google',
    categoryId: 'coding',
    title: 'LRU Cache Implementation',
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if it exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if it exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

Example:
Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
       [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output: [null, null, null, 1, null, -1, null, -1, 3, 4]`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Think about using a HashMap + Doubly Linked List', 'What operations need to be O(1)?'],
    expectedTopics: ['Hash Map', 'Doubly Linked List', 'Design'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-2',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Median of Two Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
- nums1.length == m, nums2.length == n
- 0 <= m <= 1000, 0 <= n <= 1000
- 1 <= m + n <= 2000
- -10^6 <= nums1[i], nums2[i] <= 10^6`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Binary search on the smaller array', 'Think about partitioning both arrays'],
    expectedTopics: ['Binary Search', 'Divide and Conquer'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-3',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Word Ladder II',
    description: `A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
- Every adjacent pair of words differs by a single letter.
- Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
- sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists.

Example:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['BFS to find shortest path length first', 'Then DFS/backtracking to find all paths'],
    expectedTopics: ['BFS', 'DFS', 'Backtracking', 'Graph'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-4',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Serialize and Deserialize Binary Tree',
    description: `Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

The encoded string should be as compact as possible.`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Preorder traversal works well', 'Use a delimiter and null marker'],
    expectedTopics: ['Tree', 'DFS', 'BFS', 'Design'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-5',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Minimum Window Substring',
    description: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Sliding window technique', 'Two pointers with character frequency map'],
    expectedTopics: ['Sliding Window', 'Hash Map', 'Two Pointers'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-6',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Merge k Sorted Lists',
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[1->4->5, 1->3->4, 2->6]
merging them into one sorted list: 1->1->2->3->4->4->5->6

Constraints:
- k == lists.length
- 0 <= k <= 10^4
- 0 <= lists[i].length <= 500
- -10^4 <= lists[i][j] <= 10^4`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Use a min-heap/priority queue', 'Divide and conquer also works'],
    expectedTopics: ['Heap', 'Linked List', 'Divide and Conquer', 'Merge Sort'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-7',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Trapping Rain Water',
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Two pointers approach', 'Or use monotonic stack', 'Or precompute left max and right max'],
    expectedTopics: ['Two Pointers', 'Stack', 'Dynamic Programming', 'Array'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-8',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Longest Substring Without Repeating Characters',
    description: `Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Sliding window with a set/map', 'Track the start of current window'],
    expectedTopics: ['Sliding Window', 'Hash Map', 'String'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-9',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Valid Parentheses',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false`,
    difficulty: 'Easy',
    timeLimit: 15,
    hints: ['Use a stack', 'Map closing brackets to opening brackets'],
    expectedTopics: ['Stack', 'String'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-10',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Number of Islands',
    description: `Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['DFS or BFS from each unvisited land cell', 'Mark visited cells to avoid counting twice'],
    expectedTopics: ['DFS', 'BFS', 'Union Find', 'Matrix'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-11',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Course Schedule II',
    description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are 2 courses. To take course 1 you should have finished course 0. So the correct order is [0,1].

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3] or [0,1,2,3]

Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Topological sort using Kahn\'s algorithm (BFS)', 'Or use DFS with cycle detection'],
    expectedTopics: ['Graph', 'Topological Sort', 'BFS', 'DFS'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-12',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Word Search II',
    description: `Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example:
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Constraints:
- m == board.length, n == board[i].length
- 1 <= m, n <= 12
- 1 <= words.length <= 3 * 10^4
- 1 <= words[i].length <= 10`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Build a Trie from words', 'DFS from each cell with Trie prefix checking', 'Optimize by removing found words from Trie'],
    expectedTopics: ['Trie', 'DFS', 'Backtracking', 'Matrix'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-13',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Alien Dictionary',
    description: `There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

Example 1:
Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"

Example 2:
Input: words = ["z","x"]
Output: "zx"

Example 3:
Input: words = ["z","x","z"]
Output: "" (cycle detected)`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Build a graph from adjacent word comparisons', 'Topological sort on the graph', 'Handle cycles and invalid inputs'],
    expectedTopics: ['Graph', 'Topological Sort', 'BFS', 'DFS'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-14',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Longest Increasing Path in a Matrix',
    description: `Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary.

Example 1:
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

Example 2:
Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6].`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['DFS with memoization', 'No need for visited array since we only go to strictly larger values'],
    expectedTopics: ['DFS', 'Dynamic Programming', 'Memoization', 'Matrix'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-15',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Find Median from Data Stream',
    description: `The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

Implement the MedianFinder class:
- MedianFinder() initializes the MedianFinder object.
- void addNum(int num) adds the integer num from the data stream to the data structure.
- double findMedian() returns the median of all elements so far.

Example:
Input: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output: [null, null, null, 1.5, null, 2.0]

Explanation:
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Use two heaps: max-heap for lower half, min-heap for upper half', 'Keep heaps balanced'],
    expectedTopics: ['Heap', 'Design', 'Data Stream'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-16',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Regular Expression Matching',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
- '.' Matches any single character.
- '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Example 1:
Input: s = "aa", p = "a"
Output: false

Example 2:
Input: s = "aa", p = "a*"
Output: true

Example 3:
Input: s = "ab", p = ".*"
Output: true`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Dynamic programming with 2D table', 'Handle * by either using 0 occurrences or more'],
    expectedTopics: ['Dynamic Programming', 'String', 'Recursion'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-17',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Wildcard Matching',
    description: `Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
- '?' Matches any single character.
- '*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

Example 1:
Input: s = "aa", p = "a"
Output: false

Example 2:
Input: s = "aa", p = "*"
Output: true

Example 3:
Input: s = "cb", p = "?a"
Output: false`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['DP similar to regex matching', 'Or use two-pointer greedy approach'],
    expectedTopics: ['Dynamic Programming', 'Greedy', 'String'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-18',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Sliding Window Maximum',
    description: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Constraints:
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- 1 <= k <= nums.length`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Use monotonic decreasing deque', 'Store indices, not values'],
    expectedTopics: ['Sliding Window', 'Monotonic Deque', 'Heap'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-19',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Basic Calculator II',
    description: `Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-2^31, 2^31 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions.

Example 1:
Input: s = "3+2*2"
Output: 7

Example 2:
Input: s = " 3/2 "
Output: 1

Example 3:
Input: s = " 3+5 / 2 "
Output: 5`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Use a stack for numbers', 'Process * and / immediately, defer + and -'],
    expectedTopics: ['Stack', 'String', 'Math'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-20',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Basic Calculator III',
    description: `Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and open '(' and closing ')' parentheses. The integer division should truncate toward zero.

You may assume that the given expression is always valid.

Example 1:
Input: s = "1+1"
Output: 2

Example 2:
Input: s = "6-4/2"
Output: 4

Example 3:
Input: s = "2*(5+5*2)/3+(6/2+8)"
Output: 21`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Recursion for parentheses', 'Stack for operators', 'Or use two stacks: one for numbers, one for operators'],
    expectedTopics: ['Stack', 'Recursion', 'String', 'Math'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-21',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Decode Ways',
    description: `A message containing letters from A-Z can be encoded into numbers using the following mapping:
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above.

Given a string s containing only digits, return the number of ways to decode it.

Example 1:
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:
Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped because "6" is not a valid encoding.`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['DP similar to climbing stairs', 'Handle edge cases: 0, leading zeros'],
    expectedTopics: ['Dynamic Programming', 'String'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-22',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Word Break',
    description: `Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['DP with boolean array', 'dp[i] = true if s[0:i] can be segmented', 'Use a set for O(1) word lookup'],
    expectedTopics: ['Dynamic Programming', 'Trie', 'Hash Set'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-23',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Word Break II',
    description: `Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

Example 1:
Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]

Example 2:
Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: []`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Backtracking with memoization', 'First check if breakable with Word Break I approach'],
    expectedTopics: ['Dynamic Programming', 'Backtracking', 'Memoization'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-24',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Longest Valid Parentheses',
    description: `Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:
Input: s = ""
Output: 0`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Stack storing indices', 'Or DP where dp[i] = length of valid ending at i', 'Or two-pass scan (left-to-right, right-to-left)'],
    expectedTopics: ['Stack', 'Dynamic Programming', 'String'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-25',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Largest Rectangle in Histogram',
    description: `Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The largest rectangle has an area = 10 units (height 5, width 2).

Example 2:
Input: heights = [2,4]
Output: 4`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Monotonic increasing stack', 'When popping, calculate area with popped height', 'Or use divide and conquer'],
    expectedTopics: ['Stack', 'Monotonic Stack', 'Array'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-26',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Maximal Rectangle',
    description: `Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example:
Input: matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
Explanation: The maximal rectangle is shown above (3 wide, 2 tall).`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Build histogram for each row', 'Apply Largest Rectangle in Histogram for each', 'Or use DP with height, left, right arrays'],
    expectedTopics: ['Stack', 'Dynamic Programming', 'Matrix'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-27',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Jump Game II',
    description: `You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i.

Return the minimum number of jumps to reach nums[n - 1].

Example 1:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [2,3,0,1,4]
Output: 2`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Greedy: track farthest reachable at each level', 'BFS-like level traversal'],
    expectedTopics: ['Greedy', 'Array', 'Dynamic Programming'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-28',
    companyId: 'google',
    categoryId: 'coding',
    title: 'N-Queens',
    description: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement.

Example:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Backtracking', 'Use sets to track occupied columns, diagonals, anti-diagonals'],
    expectedTopics: ['Backtracking', 'Recursion', 'Array'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-29',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Sudoku Solver',
    description: `Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:
1. Each of the digits 1-9 must occur exactly once in each row.
2. Each of the digits 1-9 must occur exactly once in each column.
3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes.

The '.' character indicates empty cells.

Example:
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: Solved board`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Backtracking with constraint propagation', 'Use sets for each row, column, and box'],
    expectedTopics: ['Backtracking', 'Matrix', 'Recursion'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-30',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Clone Graph',
    description: `Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

Example:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: Node 1's value is 1, and it has two neighbors: Node 2 and 4.`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['BFS or DFS', 'Use a hashmap to track cloned nodes'],
    expectedTopics: ['Graph', 'BFS', 'DFS', 'Hash Map'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-31',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Graph Valid Tree',
    description: `You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi.

Return true if the edges make up a valid tree, and false otherwise.

A valid tree has:
1. n-1 edges
2. All nodes are connected
3. No cycles

Example 1:
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true

Example 2:
Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Check if exactly n-1 edges', 'Union-Find to detect cycles', 'Or BFS/DFS to check connectivity'],
    expectedTopics: ['Graph', 'Union Find', 'BFS', 'DFS'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-32',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Number of Connected Components',
    description: `You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

Example 1:
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Example 2:
Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Union-Find with path compression', 'Or BFS/DFS from each unvisited node'],
    expectedTopics: ['Graph', 'Union Find', 'BFS', 'DFS'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-33',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Longest Consecutive Sequence',
    description: `Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Use a HashSet for O(1) lookups', 'Only start counting from sequence start (num-1 not in set)'],
    expectedTopics: ['Hash Set', 'Array', 'Union Find'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-34',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Meeting Rooms II',
    description: `Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Sort by start time, use min-heap for end times', 'Or use chronological ordering of events'],
    expectedTopics: ['Heap', 'Sorting', 'Intervals'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-35',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Merge Intervals',
    description: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Sort by start time', 'Merge if current start <= previous end'],
    expectedTopics: ['Array', 'Sorting', 'Intervals'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-36',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Insert Interval',
    description: `You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Three parts: before, overlapping, after', 'Merge all overlapping intervals with new one'],
    expectedTopics: ['Array', 'Intervals'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-37',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Minimum Number of Arrows to Burst Balloons',
    description: `There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend.

You need to find the minimum number of arrows to burst all balloons. An arrow shot at x can burst all balloons where xstart <= x <= xend.

Example 1:
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows: Shoot at x = 6 (bursts [2,8] and [1,6]) and x = 11 (bursts [10,16] and [7,12]).

Example 2:
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Sort by end point', 'Greedy: shoot at first balloon end, skip all it bursts'],
    expectedTopics: ['Greedy', 'Sorting', 'Intervals'],
    yearAsked: 2024,
    frequency: 'Medium'
  },
  {
    id: 'g-code-38',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Candy',
    description: `There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:
1. Each child must have at least one candy.
2. Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.

Example 1:
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate 2, 1, 2 candies respectively.

Example 2:
Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate 1, 2, 1 candies respectively.`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Two passes: left to right, then right to left', 'Take max of both passes for each child'],
    expectedTopics: ['Greedy', 'Array'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-39',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Maximum Product Subarray',
    description: `Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Track both max and min at each position', 'Min can become max when multiplied by negative'],
    expectedTopics: ['Dynamic Programming', 'Array'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-40',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Best Time to Buy and Sell Stock III',
    description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 3.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['State machine DP with 4 states', 'Or split array and find max profit on each side'],
    expectedTopics: ['Dynamic Programming', 'Array'],
    yearAsked: 2024,
    frequency: 'Medium'
  },
  {
    id: 'g-code-41',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Best Time to Buy and Sell Stock IV',
    description: `You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions.

Note: You may not engage in multiple transactions simultaneously.

Example 1:
Input: k = 2, prices = [2,4,1]
Output: 2

Example 2:
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['DP with 3D state: day, transactions used, holding stock', 'Optimize to 2D by noticing state transitions'],
    expectedTopics: ['Dynamic Programming', 'Array'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-42',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Edit Distance',
    description: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character

Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')

Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Classic 2D DP', 'dp[i][j] = min operations to convert word1[0:i] to word2[0:j]'],
    expectedTopics: ['Dynamic Programming', 'String'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-43',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Distinct Subsequences',
    description: `Given two strings s and t, return the number of distinct subsequences of s which equals t.

The answer is guaranteed to fit in a 32-bit signed integer.

Example 1:
Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation: There are 3 ways you can generate "rabbit" from "rabbbit".

Example 2:
Input: s = "babgbag", t = "bag"
Output: 5`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['2D DP similar to edit distance', 'dp[i][j] = ways to form t[0:j] from s[0:i]'],
    expectedTopics: ['Dynamic Programming', 'String'],
    yearAsked: 2023,
    frequency: 'Medium'
  },
  {
    id: 'g-code-44',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Interleaving String',
    description: `Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
- s = s1 + s2 + ... + sn
- t = t1 + t2 + ... + tm
- |n - m| <= 1
- The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

Example:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['2D DP where dp[i][j] = s1[0:i] and s2[0:j] can form s3[0:i+j]'],
    expectedTopics: ['Dynamic Programming', 'String'],
    yearAsked: 2024,
    frequency: 'Medium'
  },
  {
    id: 'g-code-45',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Validate Binary Search Tree',
    description: `Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Pass min/max bounds down', 'Or use inorder traversal (should be strictly increasing)'],
    expectedTopics: ['Tree', 'DFS', 'BST'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-46',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Kth Smallest Element in a BST',
    description: `Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:
Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

Follow up: If the BST is modified often and you need to find the kth smallest frequently, how would you optimize?`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Inorder traversal gives sorted order', 'Stop when k nodes visited', 'Follow-up: augment nodes with subtree size'],
    expectedTopics: ['Tree', 'DFS', 'BST'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-47',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Lowest Common Ancestor of a Binary Tree',
    description: `Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (a node can be a descendant of itself).

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Recursively search left and right', 'If both return non-null, current node is LCA', 'If only one returns non-null, that\'s the LCA'],
    expectedTopics: ['Tree', 'DFS', 'Recursion'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-48',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Binary Tree Maximum Path Sum',
    description: `A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. The path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a sum of 2 + 1 + 3 = 6.

Example 2:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a sum of 15 + 20 + 7 = 42.`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['At each node, consider: node alone, node + left, node + right, node + left + right', 'Return to parent: max of first three options'],
    expectedTopics: ['Tree', 'DFS', 'Dynamic Programming'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-49',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Count of Smaller Numbers After Self',
    description: `Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

Example:
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Merge sort counting inversions', 'Or BST with size tracking', 'Or Binary Indexed Tree'],
    expectedTopics: ['Merge Sort', 'BST', 'Binary Indexed Tree', 'Segment Tree'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-code-50',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Range Sum Query - Mutable',
    description: `Given an integer array nums, handle multiple queries of the following types:
1. Update the value of an element in nums.
2. Calculate the sum of the elements of nums between indices left and right inclusive.

Implement the NumArray class:
- NumArray(int[] nums) Initializes the object with the integer array nums.
- void update(int index, int val) Updates the value of nums[index] to be val.
- int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive.

Example:
Input: ["NumArray", "sumRange", "update", "sumRange"]
       [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output: [null, 9, null, 8]`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Segment Tree for O(log n) update and query', 'Or Binary Indexed Tree (Fenwick Tree)'],
    expectedTopics: ['Segment Tree', 'Binary Indexed Tree', 'Design'],
    yearAsked: 2024,
    frequency: 'High'
  },
  
  // Google 2025 DSA Questions
  {
    id: 'g-code-51',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Design a Text Editor',
    description: `Design a text editor with a cursor that can do the following:
- addText(text) - Appends text to where the cursor is. The cursor ends to the right of text.
- deleteText(k) - Deletes k characters to the left of the cursor. Returns the number of characters actually deleted.
- cursorLeft(k) - Moves the cursor to the left k times. Returns the last min(10, len) characters to the left of the cursor.
- cursorRight(k) - Moves the cursor to the right k times. Returns the last min(10, len) characters to the left of the cursor.

Example:
Input: ["TextEditor", "addText", "deleteText", "addText", "cursorRight", "cursorLeft", "deleteText", "cursorLeft", "cursorRight"]
[[], ["leetcode"], [4], ["practice"], [3], [8], [10], [2], [6]]
Output: [null, null, 4, null, "etpractice", "leet", 4, "", "practi"]`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Use two stacks: one for left of cursor, one for right', 'Or use a doubly linked list with cursor pointer'],
    expectedTopics: ['Design', 'Stack', 'Linked List', 'String'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-52',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Minimum Cost to Make Array Equal',
    description: `You are given two 0-indexed arrays nums and cost consisting each of n positive integers.

You can do the following operation any number of times:
- Increase or decrease any element of the array nums by 1.

The cost of doing one operation on the ith element is cost[i].

Return the minimum total cost such that all the elements of the array nums become equal.

Example 1:
Input: nums = [1,3,5,2], cost = [2,3,1,14]
Output: 8
Explanation: We can make all elements equal to 2 with total cost = |1-2|*2 + |3-2|*3 + |5-2|*1 + |2-2|*14 = 2 + 3 + 3 + 0 = 8.

Example 2:
Input: nums = [2,2,2,2,2], cost = [4,2,8,1,3]
Output: 0`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Binary search on the target value', 'Or weighted median approach', 'The optimal target is always one of the existing values'],
    expectedTopics: ['Binary Search', 'Greedy', 'Sorting', 'Prefix Sum'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-53',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Minimum Obstacle Removal to Reach Corner',
    description: `You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:
- 0 represents an empty cell
- 1 represents an obstacle that may be removed

You can move up, down, left, or right from and to an empty cell.

Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).

Example 1:
Input: grid = [[0,1,1],[1,1,0],[1,1,0]]
Output: 2
Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path.

Example 2:
Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]
Output: 0`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['0-1 BFS using deque', 'Add to front if cost is 0, back if cost is 1', 'Or Dijkstra with priority queue'],
    expectedTopics: ['BFS', '0-1 BFS', 'Graph', 'Shortest Path'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-54',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Minimum Replacements to Sort the Array',
    description: `You are given a 0-indexed integer array nums. In one operation you can replace any element of the array with any two elements that sum to it.

Return the minimum number of operations to make an array that is sorted in non-decreasing order.

Example 1:
Input: nums = [3,9,3]
Output: 2
Explanation: Here are the steps to sort the array: [3,9,3] → [3,4,5,3] → [3,4,2,3,3]
Wait, that's wrong. Let's think again: [3,9,3] → [3,3,6,3] → [3,3,3,3,3]

Example 2:
Input: nums = [1,2,3,4,5]
Output: 0`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Work backwards from the end', 'For each element, split it into parts <= next element', 'Greedy: maximize the leftmost part after splitting'],
    expectedTopics: ['Greedy', 'Math', 'Array'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-55',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Amount of Time for Binary Tree to Be Infected',
    description: `You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.

Each minute, a node becomes infected if:
- The node is currently uninfected.
- The node is adjacent to an infected node.

Return the number of minutes needed for the entire tree to be infected.

Example 1:
Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4

Example 2:
Input: root = [1], start = 1
Output: 0`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Convert tree to graph with parent pointers', 'BFS from start node', 'Track max distance reached'],
    expectedTopics: ['Tree', 'BFS', 'Graph', 'DFS'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-56',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Count Subarrays With Fixed Bounds',
    description: `You are given an integer array nums and two integers minK and maxK.

A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
- The minimum value in the subarray is equal to minK.
- The maximum value in the subarray is equal to maxK.

Return the number of fixed-bound subarrays.

Example 1:
Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

Example 2:
Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Track last position of minK, maxK, and invalid elements', 'For each position, count valid subarrays ending there'],
    expectedTopics: ['Sliding Window', 'Array', 'Two Pointers'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-57',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Maximum Value of K Coins From Piles',
    description: `There are n piles of coins on a table. Each pile consists of a positive number of coins of assorted denominations.

In one move, you can choose any coin on top of any pile, remove it, and add it to your wallet.

Given a list piles, where piles[i] is a list of integers denoting the composition of the ith pile from top to bottom, and a positive integer k, return the maximum total value of coins you can have in your wallet if you choose exactly k coins optimally.

Example 1:
Input: piles = [[1,100,3],[7,8,9]], k = 2
Output: 101
Explanation: Take 1 from pile 0, then 100 from pile 0.

Example 2:
Input: piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], k = 7
Output: 706`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['DP with pile index and remaining coins', 'For each pile, precompute prefix sums', 'dp[i][k] = max value using first i piles and k coins'],
    expectedTopics: ['Dynamic Programming', 'Prefix Sum', 'Array'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-58',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Parallel Courses III',
    description: `You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given a 2D integer array relations where relations[j] = [prevCourse, nextCourse] indicates that course prevCourse must be completed before course nextCourse. Finally, you are given an integer array time where time[i] indicates the number of months needed to complete the (i+1)th course.

You can start multiple courses at the same time if their prerequisites are satisfied.

Return the minimum number of months needed to complete all the courses.

Example 1:
Input: n = 3, relations = [[1,3],[2,3]], time = [3,2,5]
Output: 8
Explanation: Courses 1 and 2 start at month 0. Course 1 finishes at month 3, course 2 at month 2. Course 3 starts at month 3 and finishes at month 8.

Example 2:
Input: n = 5, relations = [[1,5],[2,5],[3,5],[3,4],[4,5]], time = [1,2,3,4,5]
Output: 12`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Topological sort with dynamic programming', 'For each course, track the earliest start time', 'Start time = max finish time of all prerequisites'],
    expectedTopics: ['Graph', 'Topological Sort', 'Dynamic Programming'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-59',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Find the Longest Valid Obstacle Course',
    description: `You want to build some obstacle courses. You are given a 0-indexed integer array obstacles of length n, where obstacles[i] describes the height of the ith obstacle.

For every index i between 0 and n - 1 (inclusive), find the length of the longest obstacle course in obstacles such that:
- You choose any number of obstacles between 0 and i inclusive.
- You must include the ith obstacle in the course.
- You must put the chosen obstacles in the same order as they appear in obstacles.
- Every obstacle (except the first) is taller than or the same height as the obstacle immediately before it.

Return an array ans of length n, where ans[i] is the length of the longest obstacle course for index i.

Example:
Input: obstacles = [1,2,3,2]
Output: [1,2,3,3]`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Similar to Longest Increasing Subsequence', 'Use binary search with patience sorting', 'Handle equal elements with upper_bound'],
    expectedTopics: ['Binary Search', 'Dynamic Programming', 'Array'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-60',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Number of Ways to Arrive at Destination',
    description: `You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection.

You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel.

Return the number of ways you can arrive at intersection n - 1 from intersection 0 in the shortest amount of time. Since the answer may be large, return it modulo 10^9 + 7.

Example:
Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
Output: 4`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Dijkstra with path counting', 'Track both shortest distance and number of ways', 'Update count when finding equal distance path'],
    expectedTopics: ['Graph', 'Dijkstra', 'Shortest Path', 'Dynamic Programming'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-61',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Maximum Running Time of N Computers',
    description: `You have n computers. You are given the integer n and a 0-indexed integer array batteries where the ith battery can run a computer for batteries[i] minutes. You want to run all n computers simultaneously using the given batteries.

Initially, you can insert at most one battery into each computer. After that, at any point in time you can remove a battery from a computer and insert another battery any number of times. The computer runs only when there is a battery in it.

Return the maximum number of minutes you can run all n computers simultaneously.

Example 1:
Input: n = 2, batteries = [3,3,3]
Output: 4
Explanation: Insert battery 0 in computer 0, battery 1 in computer 1. After 2 mins, remove battery 1 from computer 1, insert battery 2. Total: 4 minutes running simultaneously.

Example 2:
Input: n = 2, batteries = [1,1,1,1]
Output: 2`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Binary search on the answer', 'Check if running time T is achievable', 'Total power needed is n * T, available power is min(batteries[i], T) for each'],
    expectedTopics: ['Binary Search', 'Greedy', 'Sorting'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-62',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Shortest Path to Get All Keys',
    description: `You are given an m x n grid where:
- '.' is an empty cell.
- '#' is a wall.
- '@' is the starting point.
- Lowercase letters represent keys.
- Uppercase letters represent locks.

You start at the starting point and one move consists of walking one space in one of the four cardinal directions. You cannot walk outside the grid, or walk into a wall.

If you walk over a key, you can pick it up and you cannot walk over a lock unless you have its corresponding key.

Return the lowest number of moves to acquire all keys. If it is impossible, return -1.

Example 1:
Input: grid = ["@.a..","###.#","b.A.B"]
Output: 8

Example 2:
Input: grid = ["@..aA","..B#.","....b"]
Output: 6`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['BFS with state = (row, col, keys_bitmask)', 'Use bitmask to represent collected keys', 'Goal state is when all keys are collected'],
    expectedTopics: ['BFS', 'Bit Manipulation', 'Graph', 'Matrix'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-63',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Maximum Profit in Job Scheduling',
    description: `We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.

Example 1:
Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job. Profit = 50 + 70 = 120.

Example 2:
Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Sort by end time', 'DP with binary search for last non-overlapping job', 'dp[i] = max(dp[i-1], profit[i] + dp[last_non_overlapping])'],
    expectedTopics: ['Dynamic Programming', 'Binary Search', 'Sorting'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-64',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Bus Routes',
    description: `You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 → 5 → 7 → 1 → 5 → 7 → ... forever.

You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

Example 1:
Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: Take bus 0 from stop 1 to stop 7, then bus 1 from stop 7 to stop 6.

Example 2:
Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
Output: -1`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['BFS on buses, not stops', 'Map each stop to list of buses serving it', 'Track visited buses and visited stops'],
    expectedTopics: ['BFS', 'Graph', 'Hash Map'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-65',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Minimum Cost to Hire K Workers',
    description: `There are n workers. You are given two arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation of the ith worker.

We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay according to these rules:
1. Every worker in the paid group should be paid in the ratio of their quality compared to other workers in the paid group.
2. Every worker must be paid at least their minimum wage expectation.

Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions.

Example:
Input: quality = [10,20,5], wage = [70,50,30], k = 2
Output: 105.00000
Explanation: We pay 70 to worker 0 and 35 to worker 2.`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Sort by wage/quality ratio', 'Use max-heap to track k smallest qualities', 'Cost = ratio * sum_of_qualities'],
    expectedTopics: ['Heap', 'Greedy', 'Sorting'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-66',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Split Array Largest Sum',
    description: `Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.

Example 1:
Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays. The best way is [7,2,5] and [10,8], where the largest sum is 18.

Example 2:
Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: [1,2,3] and [4,5] gives largest sum = 9.`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Binary search on the answer (the largest sum)', 'Check if we can split into k parts with max sum <= mid', 'Greedy check: greedily fill each part'],
    expectedTopics: ['Binary Search', 'Greedy', 'Dynamic Programming'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-67',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Shortest Path in a Grid with Obstacles Elimination',
    description: `You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

Example 1:
Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
Output: 6
Explanation: The shortest path without eliminating any obstacles is 10. With one elimination, the shortest path is 6.

Example 2:
Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
Output: -1`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['BFS with state = (row, col, remaining_eliminations)', 'Track visited with 3D array or map', 'Early termination if k >= m + n - 3'],
    expectedTopics: ['BFS', 'Graph', 'Matrix'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-68',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Making A Large Island',
    description: `You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

Return the size of the largest island in grid after applying this operation.

An island is a 4-directionally connected group of 1s.

Example 1:
Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

Example 2:
Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.

Example 3:
Input: grid = [[1,1],[1,1]]
Output: 4`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['First label each island and compute its area', 'For each 0, sum adjacent island areas', 'Use set to avoid counting same island twice'],
    expectedTopics: ['DFS', 'BFS', 'Union Find', 'Matrix'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-69',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Maximum Frequency Stack',
    description: `Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:
- FreqStack() constructs an empty frequency stack.
- void push(int val) pushes an integer val onto the top of the stack.
- int pop() removes and returns the most frequent element in the stack. If there is a tie, the element closest to the top of the stack is removed and returned.

Example:
Input: ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]
Output: [null, null, null, null, null, null, null, 5, 7, 5, 4]`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Track frequency of each element', 'Map from frequency to stack of elements with that frequency', 'Track max frequency'],
    expectedTopics: ['Stack', 'Hash Map', 'Design'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'g-code-70',
    companyId: 'google',
    categoryId: 'coding',
    title: 'Minimum Operations to Make Array Continuous',
    description: `You are given an integer array nums. In one operation, you can replace any element in nums with any integer.

nums is considered continuous if both of the following conditions are fulfilled:
- All elements in nums are unique.
- The difference between the maximum and minimum elements equals nums.length - 1.

Return the minimum number of operations to make nums continuous.

Example 1:
Input: nums = [4,2,5,3]
Output: 0
Explanation: [4,2,5,3] is already continuous.

Example 2:
Input: nums = [1,2,3,5,6]
Output: 1
Explanation: Replace 6 with 4 to get [1,2,3,5,4], which is continuous.

Example 3:
Input: nums = [1,10,100,1000]
Output: 3`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Sort and remove duplicates', 'Sliding window to find max elements in range [x, x + n - 1]', 'Answer = n - max_elements_in_valid_range'],
    expectedTopics: ['Sliding Window', 'Binary Search', 'Sorting'],
    yearAsked: 2025,
    frequency: 'High'
  },
  
  // Google System Design
  {
    id: 'g-sd-1',
    companyId: 'google',
    categoryId: 'system-design',
    title: 'Design YouTube',
    description: `Design a video sharing platform like YouTube.

Requirements:
- Users can upload videos
- Users can watch videos
- Users can search for videos
- Users can like/comment on videos
- Support for different video qualities
- Handle millions of concurrent viewers

Consider:
- How would you handle video encoding?
- How would you design the recommendation system?
- How would you handle live streaming?
- What's your CDN strategy?`,
    difficulty: 'Hard',
    timeLimit: 45,
    expectedTopics: ['CDN', 'Video Encoding', 'Distributed Storage', 'Recommendation Engine', 'Load Balancing'],
    followUps: ['How would you handle copyright detection?', 'How would you design the comments section to handle millions of comments?'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-sd-2',
    companyId: 'google',
    categoryId: 'system-design',
    title: 'Design Google Maps',
    description: `Design a navigation system like Google Maps.

Requirements:
- Show map with real-time traffic
- Calculate routes between two points
- Provide turn-by-turn navigation
- Handle millions of users simultaneously
- Support different transport modes (driving, walking, transit)

Consider:
- How would you store and serve map data?
- How would you calculate shortest paths at scale?
- How would you handle real-time traffic updates?
- How would you design the ETA prediction system?`,
    difficulty: 'Hard',
    timeLimit: 50,
    expectedTopics: ['Graph Algorithms', 'Geospatial Indexing', 'Real-time Systems', 'Caching', 'Map Tiles'],
    followUps: ['How would you handle offline mode?', 'How would you design the places/reviews system?'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-sd-3',
    companyId: 'google',
    categoryId: 'system-design',
    title: 'Design Google Search',
    description: `Design a web search engine like Google Search.

Requirements:
- Crawl and index billions of web pages
- Return relevant results in < 200ms
- Handle millions of queries per second
- Support autocomplete
- Rank results by relevance

Consider:
- How would you design the web crawler?
- How would you build and maintain the inverted index?
- How would you rank pages (PageRank)?
- How would you handle query understanding and spell correction?`,
    difficulty: 'Hard',
    timeLimit: 55,
    expectedTopics: ['Inverted Index', 'PageRank', 'Distributed Systems', 'MapReduce', 'Caching'],
    followUps: ['How would you handle real-time indexing?', 'How would you personalize search results?'],
    yearAsked: 2023,
    frequency: 'Medium'
  },

  // Google Behavioral
  {
    id: 'g-beh-1',
    companyId: 'google',
    categoryId: 'behavioral',
    title: 'Tell me about a time you disagreed with your manager',
    description: `Describe a situation where you had a different opinion than your manager or tech lead. How did you handle it? What was the outcome?

Google is looking for:
- Respectful disagreement and debate
- Data-driven arguments
- Ability to commit even if you disagree
- Self-awareness about when you were wrong`,
    difficulty: 'Medium',
    timeLimit: 8,
    expectedTopics: ['Conflict Resolution', 'Communication', 'Leadership'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-beh-2',
    companyId: 'google',
    categoryId: 'behavioral',
    title: 'Describe a project that failed',
    description: `Tell me about a project or initiative that didn't succeed. What happened? What did you learn? What would you do differently?

Google is looking for:
- Ownership and accountability
- Growth mindset
- Ability to learn from failures
- Honest self-reflection`,
    difficulty: 'Medium',
    timeLimit: 8,
    expectedTopics: ['Failure', 'Learning', 'Accountability'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'g-beh-3',
    companyId: 'google',
    categoryId: 'behavioral',
    title: 'How do you handle ambiguity?',
    description: `Tell me about a time when you had to work on something with unclear requirements or direction. How did you approach it?

Google is looking for:
- Comfort with uncertainty
- Proactive clarification seeking
- Ability to make progress without perfect information
- Iterative approach`,
    difficulty: 'Medium',
    timeLimit: 8,
    expectedTopics: ['Ambiguity', 'Problem Solving', 'Initiative'],
    yearAsked: 2024,
    frequency: 'High'
  },

  // ============ AMAZON SDE3 QUESTIONS ============
  // Coding
  {
    id: 'a-code-1',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Optimize Delivery Routes',
    description: `Amazon has a fleet of delivery trucks and needs to optimize routes.

Given a list of delivery locations represented as (x, y) coordinates and a warehouse at origin (0, 0), find the k closest delivery locations to the warehouse.

You may return the answer in any order. The answer is guaranteed to be unique.

Example:
Input: locations = [[1,3],[-2,2],[5,8],[0,1]], k = 2
Output: [[-2,2],[0,1]] or [[0,1],[-2,2]]

Follow-up: What if k is very large? What if locations list is streaming?`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Consider using a max-heap of size k', 'QuickSelect can give O(n) average'],
    expectedTopics: ['Heap', 'QuickSelect', 'Sorting'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'a-code-2',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Product of Array Except Self',
    description: `Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Follow-up: Can you solve it in O(1) extra space complexity? (The output array does not count as extra space.)`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Think about prefix and suffix products', 'Can you combine them in one pass?'],
    expectedTopics: ['Array', 'Prefix Sum'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'a-code-3',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Number of Islands',
    description: `Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

Example:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Follow-up: What if the grid is too large to fit in memory?`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['DFS/BFS to explore each island', 'Mark visited cells to avoid re-counting'],
    expectedTopics: ['DFS', 'BFS', 'Union Find', 'Matrix'],
    yearAsked: 2024,
    frequency: 'High'
  },

  // Amazon System Design
  {
    id: 'a-sd-1',
    companyId: 'amazon',
    categoryId: 'system-design',
    title: 'Design Amazon.com',
    description: `Design the e-commerce platform Amazon.com.

Requirements:
- Product catalog with millions of items
- Shopping cart functionality
- Order processing and fulfillment
- User reviews and ratings
- Search and recommendations
- Handle peak traffic (Prime Day, Black Friday)

Consider:
- How would you design the inventory management system?
- How would you handle distributed transactions?
- How would you design the recommendation engine?
- How would you ensure high availability during peak?`,
    difficulty: 'Hard',
    timeLimit: 50,
    expectedTopics: ['Microservices', 'Event-Driven Architecture', 'Caching', 'Database Sharding', 'Search'],
    followUps: ['How would you handle returns and refunds?', 'How would you design the seller platform?'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'a-sd-2',
    companyId: 'amazon',
    categoryId: 'system-design',
    title: 'Design a Rate Limiter',
    description: `Design a distributed rate limiter for Amazon's APIs.

Requirements:
- Limit requests per user/API key
- Support different rate limiting strategies (fixed window, sliding window, token bucket)
- Work across multiple data centers
- Handle millions of requests per second
- Low latency (< 1ms overhead)

Consider:
- How would you handle distributed state?
- How would you handle race conditions?
- How would you make it fault-tolerant?`,
    difficulty: 'Medium',
    timeLimit: 40,
    expectedTopics: ['Distributed Systems', 'Redis', 'Token Bucket', 'Sliding Window'],
    followUps: ['How would you handle rate limiting for DDoS protection?'],
    yearAsked: 2024,
    frequency: 'High'
  },

  // Amazon Leadership Principles
  {
    id: 'a-lp-1',
    companyId: 'amazon',
    categoryId: 'leadership-principles',
    title: 'Customer Obsession',
    description: `Tell me about a time when you went above and beyond for a customer (internal or external). What did you do and what was the impact?

Amazon LP Focus: Customer Obsession
"Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust."

Interviewers look for:
- Customer-first thinking
- Concrete actions taken
- Measurable impact
- Trade-offs considered`,
    difficulty: 'Medium',
    timeLimit: 8,
    expectedTopics: ['Customer Focus', 'Impact', 'Trade-offs'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'a-lp-2',
    companyId: 'amazon',
    categoryId: 'leadership-principles',
    title: 'Ownership',
    description: `Tell me about a time when you took ownership of something outside your area of responsibility. Why did you do it? What was the outcome?

Amazon LP Focus: Ownership
"Leaders are owners. They think long term and don't sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team."

Interviewers look for:
- Initiative beyond job scope
- Long-term thinking
- Accountability
- Impact on the broader organization`,
    difficulty: 'Medium',
    timeLimit: 8,
    expectedTopics: ['Ownership', 'Initiative', 'Accountability'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'a-lp-3',
    companyId: 'amazon',
    categoryId: 'leadership-principles',
    title: 'Dive Deep',
    description: `Tell me about a time when you had to dive deep into data or details to solve a problem. What did you find? How did it change your approach?

Amazon LP Focus: Dive Deep
"Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdote differ."

Interviewers look for:
- Attention to detail
- Data-driven decision making
- Skepticism and verification
- Connecting details to strategy`,
    difficulty: 'Medium',
    timeLimit: 8,
    expectedTopics: ['Analysis', 'Data', 'Problem Solving'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'a-lp-4',
    companyId: 'amazon',
    categoryId: 'leadership-principles',
    title: 'Have Backbone; Disagree and Commit',
    description: `Tell me about a time when you disagreed with a decision. How did you handle it?

Amazon LP Focus: Have Backbone; Disagree and Commit
"Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable. Once a decision is determined, they commit wholly."

Interviewers look for:
- Courage to speak up
- Respectful disagreement with data
- Commitment after decision
- Not being a pushover OR being unable to commit`,
    difficulty: 'Medium',
    timeLimit: 8,
    expectedTopics: ['Conflict', 'Commitment', 'Courage'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'a-lp-5',
    companyId: 'amazon',
    categoryId: 'leadership-principles',
    title: 'Invent and Simplify',
    description: `Tell me about a time when you invented something or simplified a complex process. What was the problem? What did you do?

Amazon LP Focus: Invent and Simplify
"Leaders expect and require innovation and invention from their teams and always find ways to simplify."

Interviewers look for:
- Innovation mindset
- Simplification of complexity
- Not just doing what's always been done
- Practical implementation`,
    difficulty: 'Medium',
    timeLimit: 8,
    expectedTopics: ['Innovation', 'Simplification', 'Creativity'],
    yearAsked: 2024,
    frequency: 'High'
  },

  // ============ SALESFORCE SMTS QUESTIONS ============
  // Coding
  {
    id: 's-code-1',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Multi-tenant Data Isolation',
    description: `You're building a multi-tenant SaaS application. Design and implement a class that manages tenant-specific data while ensuring complete isolation.

Requirements:
- Store key-value data for multiple tenants
- Ensure no tenant can access another tenant's data
- Support CRUD operations
- Handle concurrent access from multiple tenants
- Implement a method to get all keys for a tenant

Write the implementation in your preferred language with proper error handling.`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Consider using tenant ID as part of the key', 'Think about thread safety'],
    expectedTopics: ['Multi-tenancy', 'Data Structures', 'Concurrency'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 's-code-2',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Governor Limits Handler',
    description: `In Salesforce, there are governor limits that restrict resource usage (e.g., max 100 SOQL queries per transaction).

Design a system to:
1. Track resource usage across different categories
2. Warn when approaching limits (80% threshold)
3. Throw an exception when limits are exceeded
4. Support reset for new transaction context

Implement this in your preferred language.`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Use a map for different limit types', 'Consider percentage-based warnings'],
    expectedTopics: ['Resource Management', 'Design Patterns', 'Error Handling'],
    yearAsked: 2024,
    frequency: 'Medium'
  },

  // Salesforce System Design
  {
    id: 's-sd-1',
    companyId: 'salesforce',
    categoryId: 'system-design',
    title: 'Design a Multi-tenant CRM Platform',
    description: `Design a multi-tenant CRM platform like Salesforce.

Requirements:
- Support millions of tenants (organizations)
- Custom fields and objects per tenant
- Role-based access control
- Workflow automation
- API access for integrations
- Reporting and analytics

Consider:
- How would you design the data model for multi-tenancy?
- How would you handle custom fields without schema changes?
- How would you ensure tenant isolation?
- How would you handle a tenant with massive data vs small tenants?`,
    difficulty: 'Hard',
    timeLimit: 50,
    expectedTopics: ['Multi-tenancy', 'Metadata-driven Architecture', 'RBAC', 'Database Design'],
    followUps: ['How would you handle tenant migration?', 'How would you design the permission system?'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 's-sd-2',
    companyId: 'salesforce',
    categoryId: 'system-design',
    title: 'Design an API Rate Limiter for Multi-tenant Platform',
    description: `Design an API rate limiting system for a multi-tenant platform.

Requirements:
- Different rate limits per tenant tier (Free, Professional, Enterprise)
- Per-user and per-tenant limits
- Daily, hourly, and per-minute limits
- Fair usage across tenants
- Real-time limit checking with < 5ms latency

Consider:
- How would you handle burst traffic?
- How would you implement fair queuing?
- How would you handle distributed rate limiting across regions?`,
    difficulty: 'Medium',
    timeLimit: 40,
    expectedTopics: ['Rate Limiting', 'Multi-tenancy', 'Distributed Systems', 'Caching'],
    yearAsked: 2024,
    frequency: 'Medium'
  },

  // Salesforce Platform Knowledge
  {
    id: 's-plat-1',
    companyId: 'salesforce',
    categoryId: 'platform',
    title: 'Explain Salesforce Governor Limits',
    description: `Explain Salesforce Governor Limits and their purpose.

Questions to address:
1. Why do governor limits exist?
2. What are the key limits you need to be aware of?
3. How do you design code to work within these limits?
4. What happens when limits are exceeded?
5. How do you handle bulk operations efficiently?

Provide specific examples and best practices.`,
    difficulty: 'Medium',
    timeLimit: 10,
    expectedTopics: ['Governor Limits', 'Bulkification', 'Best Practices'],
    yearAsked: 2024,
    frequency: 'High'
  },

  // ============ UBER SSE QUESTIONS ============
  // Coding
  {
    id: 'u-code-1',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Find Nearby Drivers',
    description: `You're building Uber's driver matching system. Given a rider's location and a list of available drivers with their locations, find the k nearest drivers.

Requirements:
- Driver locations are given as (lat, lng) pairs
- Return k nearest drivers sorted by distance
- Handle edge cases (no drivers, k > available drivers)
- Consider efficiency for millions of drivers

Example:
Rider: (37.7749, -122.4194)
Drivers: [(37.7751, -122.4180), (37.7845, -122.4089), ...]
k = 3

Follow-up: How would you handle drivers moving in real-time?`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Consider using a max-heap of size k', 'Haversine formula for accurate distance'],
    expectedTopics: ['Heap', 'Geospatial', 'Algorithms'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'u-code-2',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Surge Pricing Calculator',
    description: `Design and implement a surge pricing algorithm for Uber.

Given:
- Current demand (ride requests) in a zone
- Current supply (available drivers) in a zone
- Base fare

Implement a function that:
1. Calculates surge multiplier based on supply/demand ratio
2. Has a minimum multiplier of 1.0 (no surge)
3. Has a maximum multiplier of 5.0
4. Increases smoothly as demand/supply ratio increases

Also implement:
- A method to get price estimate with surge
- A method to check if surge is active in a zone`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Think about the mathematical relationship', 'Consider edge cases like zero supply'],
    expectedTopics: ['Algorithms', 'Math', 'System Design'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'u-code-3',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Ride Matching System',
    description: `Implement a ride matching algorithm that matches riders with drivers.

Requirements:
- Match rider to the best available driver
- Consider: distance, driver rating, ETA
- Handle driver acceptance/rejection
- Implement timeout if no driver accepts
- Support for driver preferences (vehicle type, etc.)

Provide the class structure and key method implementations.`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Consider a scoring function for matching', 'Think about the state machine for ride status'],
    expectedTopics: ['System Design', 'Algorithms', 'State Management'],
    yearAsked: 2024,
    frequency: 'High'
  },

  // Uber System Design
  {
    id: 'u-sd-1',
    companyId: 'uber',
    categoryId: 'system-design',
    title: 'Design Uber',
    description: `Design a ride-hailing platform like Uber.

Requirements:
- Riders can request rides
- Match riders with nearby drivers
- Real-time location tracking
- ETA calculation
- Fare calculation with surge pricing
- Handle millions of concurrent rides

Consider:
- How would you design the location tracking system?
- How would you match riders to drivers efficiently?
- How would you handle surge pricing?
- How would you design for different regions/cities?`,
    difficulty: 'Hard',
    timeLimit: 50,
    expectedTopics: ['Geospatial Systems', 'Real-time', 'Matching Algorithms', 'Distributed Systems'],
    followUps: ['How would you handle scheduled rides?', 'How would you design UberPool?'],
    yearAsked: 2024,
    frequency: 'High'
  },
  {
    id: 'u-sd-2',
    companyId: 'uber',
    categoryId: 'system-design',
    title: 'Design Real-time Location Tracking',
    description: `Design a system to track millions of drivers in real-time.

Requirements:
- Receive location updates from millions of drivers every 4 seconds
- Query nearby drivers within a radius
- Historical location data for trip replay
- Low latency queries (< 100ms)
- Handle driver going offline/online

Consider:
- What data structures would you use for geo-queries?
- How would you handle the write-heavy workload?
- How would you ensure data consistency?
- How would you design for global scale?`,
    difficulty: 'Hard',
    timeLimit: 45,
    expectedTopics: ['Geospatial Indexing', 'Real-time Systems', 'Time-series Data', 'Caching'],
    followUps: ['How would you optimize for battery life?', 'How would you handle location spoofing?'],
    yearAsked: 2024,
    frequency: 'High'
  },

  // Uber Real-time Systems
  {
    id: 'u-rt-1',
    companyId: 'uber',
    categoryId: 'real-time',
    title: 'Explain Event-Driven Architecture',
    description: `Explain event-driven architecture and how you would use it in a ride-hailing platform.

Questions to address:
1. What is event-driven architecture?
2. When would you use it vs request-response?
3. What are the key components (producers, consumers, brokers)?
4. How do you handle event ordering?
5. How do you handle failures and retries?

Give specific examples from ride-hailing context.`,
    difficulty: 'Medium',
    timeLimit: 12,
    expectedTopics: ['Event-Driven Architecture', 'Kafka', 'Message Queues', 'Distributed Systems'],
    yearAsked: 2024,
    frequency: 'High'
  },

  // Uber Behavioral
  {
    id: 'u-beh-1',
    companyId: 'uber',
    categoryId: 'behavioral',
    title: 'Tell me about a complex system you built',
    description: `Describe the most complex technical system you've designed and built.

Uber is looking for:
- Technical depth and breadth
- End-to-end ownership
- Trade-offs considered
- Scale and performance thinking
- Collaboration with other teams`,
    difficulty: 'Medium',
    timeLimit: 10,
    expectedTopics: ['Technical Leadership', 'System Design', 'Ownership'],
    yearAsked: 2024,
    frequency: 'High'
  }
];

// Helper functions
export function getCompanyById(id: string): Company | undefined {
  return companies.find(c => c.id === id);
}

export function getQuestionsByCompany(companyId: string): Question[] {
  return questions.filter(q => q.companyId === companyId);
}

export function getQuestionsByCategory(companyId: string, categoryId: string): Question[] {
  return questions.filter(q => q.companyId === companyId && q.categoryId === categoryId);
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find(q => q.id === id);
}

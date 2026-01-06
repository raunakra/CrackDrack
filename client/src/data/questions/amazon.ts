import { Question } from '../../types';

export const amazonQuestions: Question[] = [
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
  {
    id: 'a-code-4',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'LRU Cache',
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if exists. Otherwise, add the key-value pair. If the number of keys exceeds capacity, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

Example:
Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output: [null, null, null, 1, null, -1, null, -1, 3, 4]`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['HashMap + Doubly Linked List', 'Move accessed nodes to front'],
    expectedTopics: ['Design', 'Hash Map', 'Linked List'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-5',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Warehouse Robot Path',
    description: `Amazon's warehouse robots need to navigate from their current position to a pickup location avoiding obstacles.

Given a 2D grid where:
- 0 represents empty space
- 1 represents an obstacle
- 'S' represents the robot's starting position
- 'E' represents the destination

Return the shortest path length. If no path exists, return -1.

Bonus: Return the actual path taken.

Example:
Input: grid = [
  ['S', 0, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 'E']
]
Output: 7`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['BFS for shortest path in unweighted graph', 'Track parent pointers for path reconstruction'],
    expectedTopics: ['BFS', 'Matrix', 'Graph'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-6',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Minimum Cost to Connect All Warehouses',
    description: `Amazon has n warehouses. You're given the positions of these warehouses as 2D coordinates.

You need to connect all warehouses with minimum total cable length. The cost of connecting two warehouses is the Manhattan distance between them.

Return the minimum cost to connect all warehouses.

Example:
Input: warehouses = [[0,0], [2,2], [3,10], [5,2], [7,0]]
Output: 20

Constraints:
- 1 <= n <= 1000
- 0 <= x, y <= 10^6`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Minimum Spanning Tree problem', 'Use Prim\'s or Kruskal\'s algorithm', 'For dense graphs, Prim\'s with priority queue is efficient'],
    expectedTopics: ['Graph', 'MST', 'Prim', 'Kruskal', 'Union Find'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-7',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Optimal Package Loading',
    description: `Amazon delivery trucks have limited capacity. Given a list of package weights and a truck capacity, find the maximum number of packages that can be loaded.

Additionally, if two combinations have the same number of packages, prefer the one with higher total weight (fuller truck).

Example:
Input: weights = [3, 1, 2, 5, 4, 7], capacity = 10
Output: 4 (packages with weights [1, 2, 3, 4] = 10)

Follow-up: What if each package also has a priority value, and you want to maximize priority sum within capacity?`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Sort weights ascending', 'Greedy selection for max count', 'For follow-up: 0/1 Knapsack DP'],
    expectedTopics: ['Greedy', 'Sorting', 'Dynamic Programming', 'Knapsack'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-8',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Prime Delivery Scheduling',
    description: `Amazon Prime promises delivery within specific time windows. Given a list of delivery requests with start and end times, and a number of available drivers, determine if all deliveries can be completed.

Each delivery takes exactly 1 hour and a driver can only do one delivery at a time.

Input:
- deliveries: [[start1, end1], [start2, end2], ...]
- drivers: number of available drivers

Output: true if all deliveries can be scheduled, false otherwise

Example:
Input: deliveries = [[0,2], [1,3], [2,4], [3,5], [4,6]], drivers = 2
Output: true

Example 2:
Input: deliveries = [[0,1], [0,1], [0,1]], drivers = 2
Output: false`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Similar to Meeting Rooms II', 'Min heap to track driver availability', 'Or event-based simulation'],
    expectedTopics: ['Heap', 'Greedy', 'Sorting', 'Intervals'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-9',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Search Suggestions System',
    description: `You are given an array of strings products and a string searchWord. Design a system that suggests at most three product names from products after each character of searchWord is typed.

Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimum products.

Return a list of lists of the suggested products after each character of searchWord is typed.

Example:
Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Sort products first', 'Binary search for prefix', 'Or build a Trie for efficient prefix search'],
    expectedTopics: ['Trie', 'Binary Search', 'Sorting', 'String'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-10',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'K Closest Points to Origin',
    description: `Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points is the Euclidean distance: sqrt((x1-x2)^2 + (y1-y2)^2).

You may return the answer in any order.

Example 1:
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Max heap of size k', 'Or quickselect for O(n) average', 'No need for sqrt in comparison'],
    expectedTopics: ['Heap', 'Quickselect', 'Sorting'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-11',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Reorder Data in Log Files',
    description: `You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:
- Letter-logs: All words (except the identifier) consist of lowercase English letters.
- Digit-logs: All words (except the identifier) consist of digits.

Reorder so that:
1. Letter-logs come before all digit-logs.
2. Letter-logs are sorted lexicographically by content, then by identifier if content is the same.
3. Digit-logs maintain their relative order.

Example:
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Custom comparator', 'Separate letter and digit logs', 'Stable sort for digit logs'],
    expectedTopics: ['Sorting', 'String', 'Custom Comparator'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-12',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Trapping Rain Water',
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Two pointers approach', 'Or use monotonic stack', 'Or precompute left max and right max'],
    expectedTopics: ['Two Pointers', 'Stack', 'Dynamic Programming', 'Array'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-13',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Word Ladder',
    description: `A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
- Every adjacent pair of words differs by a single letter.
- Every si is in wordList. Note that beginWord does not need to be in wordList.
- sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

Example:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: "hit" -> "hot" -> "dot" -> "dog" -> "cog"`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['BFS to find shortest path', 'Preprocess words into pattern buckets', 'Bidirectional BFS for optimization'],
    expectedTopics: ['BFS', 'Graph', 'Hash Map'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-14',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Merge k Sorted Lists',
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Use a min-heap/priority queue', 'Or divide and conquer (merge pairs)'],
    expectedTopics: ['Heap', 'Linked List', 'Divide and Conquer'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-15',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Copy List with Random Pointer',
    description: `A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes.

Return the head of the copied linked list.

Example:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['HashMap: old node -> new node', 'Or interleave: A->A\'->B->B\' then separate'],
    expectedTopics: ['Hash Map', 'Linked List'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-16',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Sliding Window Maximum',
    description: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]`,
    difficulty: 'Hard',
    timeLimit: 25,
    hints: ['Monotonic decreasing deque', 'Store indices in deque'],
    expectedTopics: ['Sliding Window', 'Monotonic Deque', 'Heap'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-17',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Word Search II',
    description: `Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example:
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Build a Trie from words', 'DFS from each cell with Trie pruning', 'Remove found words from Trie for optimization'],
    expectedTopics: ['Trie', 'DFS', 'Backtracking', 'Matrix'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-18',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Maximum Profit in Job Scheduling',
    description: `We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

Return the maximum profit you can take such that there are no two jobs with overlapping time range.

Example:
Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120

Example 2:
Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Sort by end time', 'DP with binary search for last non-overlapping job'],
    expectedTopics: ['Dynamic Programming', 'Binary Search', 'Sorting'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-19',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Reorganize String',
    description: `Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

Example 1:
Input: s = "aab"
Output: "aba"

Example 2:
Input: s = "aaab"
Output: ""`,
    difficulty: 'Medium',
    timeLimit: 20,
    hints: ['Max heap with (count, char) pairs', 'Alternating placement', 'Check if max count > (n+1)/2'],
    expectedTopics: ['Heap', 'Greedy', 'Hash Map', 'String'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'a-code-20',
    companyId: 'amazon',
    categoryId: 'coding',
    title: 'Design In-Memory File System',
    description: `Design a data structure that simulates an in-memory file system.

Implement the FileSystem class:
- FileSystem() Initializes the object.
- List<String> ls(String path) Returns list of file/directory names in given path. If path is a file, returns just that file name. Sort in lexicographic order.
- void mkdir(String path) Makes a new directory according to the given path. Creates intermediate directories if they don't exist.
- void addContentToFile(String filePath, String content) Creates a new file if path doesn't exist, or appends content if it does.
- String readContentFromFile(String filePath) Returns the content in the file.

Example:
Input: ["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]
Output: [null,[],null,null,["a"],"hello"]`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Trie-like structure with file/directory nodes', 'Store content only for files', 'Path parsing with split'],
    expectedTopics: ['Design', 'Trie', 'Hash Map', 'String'],
    yearAsked: 2025,
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

];

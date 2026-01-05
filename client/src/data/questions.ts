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
      { id: 'coding', name: 'Coding', type: 'coding', timeLimit: 45, questionCount: 15, icon: '💻' },
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

import { Question } from '../../types';

export const uberQuestions: Question[] = [
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
  {
    id: 'u-code-4',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Geohash Implementation',
    description: `Implement a Geohash encoder/decoder for Uber's location services.

Geohash is a geocoding system that encodes geographic coordinates into a short string. Nearby locations share similar prefixes.

Implement:
- encode(latitude, longitude, precision) -> string
- decode(geohash) -> { lat, lng, error }
- getNeighbors(geohash) -> string[] (8 neighboring cells)
- getBoundingBox(geohash) -> { minLat, maxLat, minLng, maxLng }

Example:
encode(37.7749, -122.4194, 6) -> "9q8yyk"
decode("9q8yyk") -> { lat: 37.774, lng: -122.419, error: 0.001 }`,
    difficulty: 'Hard',
    timeLimit: 40,
    hints: ['Interleave latitude and longitude bits', 'Use base32 encoding', 'Precision determines string length'],
    expectedTopics: ['Geospatial', 'Bit Manipulation', 'Encoding'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-5',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'ETA Prediction with Traffic',
    description: `Implement an ETA calculation system that accounts for real-time traffic conditions.

Given:
- Road network as a weighted graph (edge weight = base travel time)
- Traffic multipliers for each edge (1.0 = normal, 2.0 = 2x slower)
- Start and end locations

Implement:
- calculateETA(start, end, trafficData) -> minutes
- findFastestRoute(start, end, trafficData) -> path[]
- getAlternativeRoutes(start, end, trafficData, k) -> path[][] (top k routes)

Example:
Graph: A --5min--> B --10min--> C
Traffic: { 'A-B': 1.5, 'B-C': 2.0 }
ETA from A to C = 5*1.5 + 10*2.0 = 27.5 minutes`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Modified Dijkstra with traffic weights', 'Yen\'s algorithm for k-shortest paths', 'Consider caching for common routes'],
    expectedTopics: ['Graph', 'Dijkstra', 'Shortest Path', 'Real-time Systems'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-6',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Optimal Meeting Point',
    description: `Given multiple people's locations, find the optimal meeting point that minimizes total travel time (like UberPool pickup optimization).

Example:
People at: [(0,0), (2,2), (4,0)]
Using Manhattan distance, optimal point minimizes sum of distances.

Implement:
- findOptimalPoint(locations) -> { x, y }
- findOptimalPointWeighted(locations, weights) -> { x, y }
- findOptimalAmongCandidates(locations, candidates) -> candidate

For weighted version, each person has an importance weight.`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['For Manhattan distance, x and y are independent', 'Optimal x is the weighted median of x-coordinates', 'Same for y'],
    expectedTopics: ['Geometry', 'Median', 'Optimization'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-7',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Time-based Key-Value Store',
    description: `Design a time-based key-value data structure that can store multiple values for the same key at different timestamps and retrieve the value at a certain timestamp.

Implement the TimeMap class:
- set(key, value, timestamp): Stores the key with the value at the given timestamp.
- get(key, timestamp): Returns a value such that set was called previously with timestamp_prev <= timestamp. If there are multiple such values, return the one with the largest timestamp_prev. If there are no values, return "".

Example:
timeMap.set("foo", "bar", 1);
timeMap.get("foo", 1);         // returns "bar"
timeMap.get("foo", 3);         // returns "bar"
timeMap.set("foo", "bar2", 4);
timeMap.get("foo", 4);         // returns "bar2"
timeMap.get("foo", 5);         // returns "bar2"`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['HashMap of key to list of (timestamp, value)', 'Binary search for the right timestamp'],
    expectedTopics: ['Binary Search', 'Hash Map', 'Design'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-8',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Driver Availability Tracker',
    description: `Design a system to track driver availability across different time slots for scheduling purposes.

Requirements:
- Drivers can set their available hours
- Query which drivers are available at a given time
- Find time slots when minimum N drivers are available
- Handle recurring schedules (weekly patterns)

Implement:
- setAvailability(driverId, dayOfWeek, startHour, endHour)
- getAvailableDrivers(dayOfWeek, hour) -> driverId[]
- findSlotsWithMinDrivers(minDrivers, dayOfWeek) -> timeSlots[]
- getDriverSchedule(driverId) -> schedule`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Interval tree or segment array per day', 'Count drivers per hour slot', 'Handle overlapping intervals'],
    expectedTopics: ['Intervals', 'Data Structures', 'Design'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-9',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Ride Price Estimator',
    description: `Implement a ride price estimation system with multiple factors.

Factors affecting price:
- Base fare
- Per-mile rate (varies by vehicle type)
- Per-minute rate
- Surge multiplier
- Tolls (if any on route)
- Airport fees (if applicable)
- Booking fee

Implement:
- estimatePrice(pickup, dropoff, vehicleType, currentTime) -> { min, max, breakdown }
- applyPromoCode(estimate, promoCode) -> adjustedEstimate
- compareVehicleTypes(pickup, dropoff) -> comparison[]`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Strategy pattern for different vehicle types', 'Use dependency injection for rate fetching', 'Return price range, not exact'],
    expectedTopics: ['OOP', 'Design Patterns', 'Business Logic'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-10',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Minimum Fuel Cost to Report to Capital',
    description: `There is a tree (connected graph with no cycles) structure rooted at node 0 with n nodes. You are given a 2D integer array roads where roads[i] = [ai, bi] indicates a road between cities ai and bi.

Each city has representatives that need to travel to city 0 (capital). There is one representative in each city.

Traveling between two adjacent cities costs 1 liter of fuel.

Given an integer seats (the number of seats in each car), return the minimum number of liters of fuel to reach the capital.

Example:
Input: roads = [[0,1],[0,2],[0,3]], seats = 5
Output: 3
Explanation: Representative from each city drives their own car to city 0.

Example 2:
Input: roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2
Output: 7`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['DFS from root, count representatives from each subtree', 'Calculate cars needed at each node', 'Ceil(representatives / seats) cars needed'],
    expectedTopics: ['Tree', 'DFS', 'Greedy'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-11',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Number of Flowers in Full Bloom',
    description: `You are given a 0-indexed 2D integer array flowers, where flowers[i] = [starti, endi] means the ith flower is in full bloom from starti to endi (inclusive). You are also given a 0-indexed integer array people of size n, where people[i] is the time at which the ith person arrives to see the flowers.

Return an integer array answer of size n, where answer[i] is the number of flowers that are in full bloom when the ith person arrives.

Example:
Input: flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]
Output: [1,2,2,2]
Explanation: 
- Person 0 arrives at time 2: flower 0 is in bloom.
- Person 1 arrives at time 3: flowers 0, 1 are in bloom.
- Person 2 arrives at time 7: flowers 1, 3 are in bloom.
- Person 3 arrives at time 11: flowers 2, 3 are in bloom.`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['Separate start and end events', 'Binary search for starts before and ends before each person', 'Or use coordinate compression + prefix sum'],
    expectedTopics: ['Binary Search', 'Sorting', 'Prefix Sum'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-12',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Detonate the Maximum Bombs',
    description: `You are given a list of bombs. The range of a bomb is defined as the area where its effect can be felt. Each bomb can detonate other bombs within its range, causing a chain reaction.

You are given a 2D array bombs where bombs[i] = [xi, yi, ri]. xi and yi denote the X and Y coordinates of the ith bomb, and ri is its radius.

Return the maximum number of bombs that can be detonated if you choose to detonate only one bomb.

Example:
Input: bombs = [[2,1,3],[6,1,4]]
Output: 2
Explanation: Detonating bomb at [2,1] will trigger bomb at [6,1] (distance 4 <= radius 4 of bomb at [6,1]).

Example 2:
Input: bombs = [[1,1,5],[10,10,5]]
Output: 1`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Build directed graph: edge from A to B if A can reach B', 'For each bomb, BFS/DFS to count reachable bombs', 'Return maximum count'],
    expectedTopics: ['Graph', 'BFS', 'DFS', 'Geometry'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-13',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Shortest Path in a Grid with Obstacles Elimination',
    description: `You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible, return -1.

Example:
Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
Output: 6

Example 2:
Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
Output: -1`,
    difficulty: 'Hard',
    timeLimit: 30,
    hints: ['BFS with state = (row, col, obstacles_remaining)', '3D visited array or map', 'Early termination if k >= m + n - 3'],
    expectedTopics: ['BFS', 'Graph', 'Matrix', 'State Space Search'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-14',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Minimum Time to Collect All Apples in a Tree',
    description: `Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time to collect all apples and come back to vertex 0.

The edges of the tree are given in the array edges where edges[i] = [ai, bi]. Additionally, there is a boolean array hasApple where hasApple[i] = true means vertex i has an apple.

Example:
Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
Output: 8
Explanation: The path: 0-1-4-1-5-1-0-2-3-2-0 takes 8 seconds.`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['DFS from root', 'If subtree has any apple, include edge cost (2 for round trip)', 'Return total cost from children + self'],
    expectedTopics: ['Tree', 'DFS', 'Graph'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 'u-code-15',
    companyId: 'uber',
    categoryId: 'coding',
    title: 'Graph Connectivity After Edge Removal',
    description: `You are given an undirected graph with n nodes and a list of edges. For each edge, determine if removing it would disconnect the graph (i.e., is it a bridge).

Also implement:
- findBridges() -> edges that are bridges
- isConnected() -> boolean
- getConnectedComponents() -> number of components after all bridge removals

Example:
Input: n = 5, edges = [[0,1],[1,2],[2,0],[1,3],[3,4]]
Output: bridges = [[1,3],[3,4]]`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Tarjan\'s algorithm for bridges', 'Track discovery time and low values', 'Edge is bridge if low[v] > disc[u]'],
    expectedTopics: ['Graph', 'Tarjan', 'Bridge Detection', 'DFS'],
    yearAsked: 2025,
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

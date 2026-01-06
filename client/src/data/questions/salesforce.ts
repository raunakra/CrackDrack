import { Question } from '../../types';

export const salesforceQuestions: Question[] = [
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
  {
    id: 's-code-3',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Batch Processing Engine',
    description: `Salesforce processes millions of records using batch jobs. Design a batch processing system.

Requirements:
- Process records in configurable batch sizes (default 200)
- Handle failures gracefully (continue processing on error)
- Track progress and provide status updates
- Support pause/resume functionality
- Implement retry logic for failed batches

Implement the core BatchProcessor class with the following methods:
- start(records, batchSize)
- pause()
- resume()
- getStatus()
- getFailedRecords()`,
    difficulty: 'Medium',
    timeLimit: 35,
    hints: ['Use state machine for batch states', 'Consider async processing', 'Store failed records for retry'],
    expectedTopics: ['Batch Processing', 'State Management', 'Error Handling', 'Design'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 's-code-4',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'SOQL Query Builder',
    description: `Build a type-safe SOQL query builder that prevents injection attacks and validates field references.

Requirements:
- Chainable API for building queries
- Support SELECT, FROM, WHERE, ORDER BY, LIMIT
- Validate field names against a schema
- Prevent SOQL injection
- Support nested queries

Example Usage:
const query = new SOQLBuilder('Account')
  .select(['Id', 'Name', 'Industry'])
  .where('Industry', '=', 'Technology')
  .orderBy('Name', 'ASC')
  .limit(100)
  .build();
// Returns: "SELECT Id, Name, Industry FROM Account WHERE Industry = 'Technology' ORDER BY Name ASC LIMIT 100"`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Builder pattern', 'Whitelist valid field names', 'Escape string values'],
    expectedTopics: ['Builder Pattern', 'Security', 'String Manipulation'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 's-code-5',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Trigger Handler Framework',
    description: `Design a trigger handler framework that follows Salesforce best practices.

Requirements:
- One trigger per object calling a handler class
- Support all trigger contexts (before/after insert/update/delete/undelete)
- Prevent recursive trigger execution
- Allow bypassing triggers programmatically
- Support multiple handler methods per context

Implement the base TriggerHandler class that concrete handlers will extend.`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Template method pattern', 'Static recursion counter', 'Map of bypass settings'],
    expectedTopics: ['Design Patterns', 'Salesforce Best Practices', 'OOP'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 's-code-6',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Rate Limiter',
    description: `Design a rate limiter for API calls that Salesforce makes to external services.

Requirements:
- Limit requests per second/minute/hour
- Support multiple rate limit tiers
- Thread-safe implementation
- Return time until next available slot when limited
- Support burst capacity

Example:
const limiter = new RateLimiter({
  requestsPerSecond: 10,
  requestsPerMinute: 100,
  burstCapacity: 20
});

limiter.tryAcquire(); // true/false
limiter.waitForPermit(); // blocks until available`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Token bucket or sliding window algorithm', 'Consider using timestamps', 'Handle edge cases with time window boundaries'],
    expectedTopics: ['Rate Limiting', 'Concurrency', 'Token Bucket', 'Design'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 's-code-7',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'LRU Cache with TTL',
    description: `Implement an LRU (Least Recently Used) Cache with Time-To-Live (TTL) support.

Requirements:
- Fixed capacity cache
- O(1) get and put operations
- Entries expire after TTL
- Evict least recently used when at capacity
- Support cache statistics (hits, misses, evictions)

Example:
const cache = new LRUCacheWithTTL(capacity=100, defaultTTL=3600);
cache.put('key1', 'value1');
cache.put('key2', 'value2', ttl=60); // custom TTL
cache.get('key1'); // returns 'value1', updates access time
cache.getStats(); // { hits: 1, misses: 0, evictions: 0 }`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['HashMap + Doubly Linked List', 'Store expiry timestamp with each entry', 'Lazy expiration on access'],
    expectedTopics: ['Cache', 'Linked List', 'Hash Map', 'Design'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 's-code-8',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Event Bus Implementation',
    description: `Implement a publish-subscribe event bus for decoupled communication between components.

Requirements:
- Subscribe to events by topic
- Publish events to all subscribers
- Support wildcard subscriptions (e.g., 'account.*')
- Async and sync delivery modes
- Unsubscribe capability
- Dead letter queue for failed deliveries

Example:
const bus = new EventBus();
bus.subscribe('account.created', handler1);
bus.subscribe('account.*', handler2); // wildcard
bus.publish('account.created', { id: '123', name: 'Acme' });`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Map of topic to subscriber list', 'Regex or prefix matching for wildcards', 'Consider retry logic'],
    expectedTopics: ['Pub/Sub', 'Design Patterns', 'Event-Driven Architecture'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 's-code-9',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Merge Intervals with Labels',
    description: `Given a list of time intervals with associated labels (like Salesforce business hours), merge overlapping intervals and combine their labels.

Example:
Input: [
  { start: 9, end: 12, labels: ['sales'] },
  { start: 10, end: 14, labels: ['support'] },
  { start: 15, end: 17, labels: ['sales'] }
]
Output: [
  { start: 9, end: 14, labels: ['sales', 'support'] },
  { start: 15, end: 17, labels: ['sales'] }
]

Handle edge cases: adjacent intervals, single point intervals, empty input.`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Sort by start time', 'Track current merged interval', 'Combine labels on overlap'],
    expectedTopics: ['Intervals', 'Sorting', 'Array'],
    yearAsked: 2025,
    frequency: 'Medium'
  },
  {
    id: 's-code-10',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Dependency Injection Container',
    description: `Implement a simple dependency injection container similar to what Salesforce uses internally.

Requirements:
- Register dependencies with a key
- Support singleton and transient lifetimes
- Resolve dependencies by key
- Handle circular dependency detection
- Support constructor injection

Example:
const container = new DIContainer();
container.register('logger', Logger, 'singleton');
container.register('service', MyService, 'transient', ['logger']);
const service = container.resolve('service');`,
    difficulty: 'Hard',
    timeLimit: 35,
    hints: ['Use a registry map', 'Track resolution stack for circular detection', 'Factory functions for transient'],
    expectedTopics: ['Dependency Injection', 'Design Patterns', 'OOP'],
    yearAsked: 2025,
    frequency: 'Medium'
  },
  {
    id: 's-code-11',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Field-Level Security Checker',
    description: `Implement a field-level security (FLS) checker that determines if a user can access specific fields.

Given:
- User's profile/permission sets
- Object permissions (CRUD)
- Field permissions (Read/Edit)

Implement:
- canRead(objectName, fieldName)
- canEdit(objectName, fieldName)
- getAccessibleFields(objectName)
- checkBulkAccess(objectName, fieldNames)

Handle inheritance where permission sets extend profiles.`,
    difficulty: 'Medium',
    timeLimit: 30,
    hints: ['Combine permissions from profile + permission sets', 'Cache permission calculations', 'Use sets for efficient lookup'],
    expectedTopics: ['Security', 'Authorization', 'Data Structures'],
    yearAsked: 2025,
    frequency: 'High'
  },
  {
    id: 's-code-12',
    companyId: 'salesforce',
    categoryId: 'coding',
    title: 'Serialize and Deserialize N-ary Tree',
    description: `Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a tree where each node can have any number of children.

Example:
       1
     / | \\
    3  2  4
   / \\
  5   6

Serialized: "1[3[5,6],2,4]" or any format that works

Implement:
- serialize(root): returns string
- deserialize(data): returns root node`,
    difficulty: 'Medium',
    timeLimit: 25,
    hints: ['Preorder traversal with child count', 'Use delimiters to separate nodes and children', 'Recursive parsing for deserialize'],
    expectedTopics: ['Tree', 'Recursion', 'String', 'Serialization'],
    yearAsked: 2025,
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

];

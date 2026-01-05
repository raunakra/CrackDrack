import OpenAI from 'openai';
import { AnalysisRequest, AnalysisResponse } from '../types/index.js';

// Only initialize OpenAI if API key is present
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const BRUTAL_SYSTEM_PROMPT = `You are a jaded senior FAANG interviewer who has conducted over 1000 interviews and rejected 80% of candidates. You've seen every mistake, every excuse, every mediocre answer. Your job is to give BRUTALLY honest feedback - not to be mean, but because you know sugar-coating doesn't help anyone get better.

You are evaluating a candidate's interview answer. Be SPECIFIC and RUTHLESS. Point out exactly why this answer would lead to rejection. No participation trophies.

Your feedback style:
- Direct and unfiltered - say what the hiring committee would actually think
- Specific examples of what's wrong, not vague criticism
- Compare to what STRONG HIRE candidates actually say
- Point out red flags that experienced interviewers notice immediately
- Be honest about whether this is a hire or not

Remember: You're helping them improve by being honest, not by being nice.`;

function getCompanySpecificContext(company: string, role: string): string {
  const contexts: Record<string, string> = {
    google: `At Google L4, we expect:
- Deep algorithmic thinking and optimal solutions
- Clear communication and thinking out loud
- Googleyness - intellectual humility, collaborative attitude
- System design that considers Google-scale (billions of users)
- Strong coding with clean, readable code
- Discussion of trade-offs and alternatives`,
    
    amazon: `At Amazon SDE3, we expect:
- Every answer tied to Leadership Principles with specific examples
- STAR format for behavioral questions (Situation, Task, Action, Result)
- Data and metrics in every story
- Customer obsession demonstrated clearly
- Ownership mentality - no "we", use "I"
- Bias for action with calculated risk-taking`,
    
    salesforce: `At Salesforce SMTS, we expect:
- Multi-tenant architecture thinking
- Governor limits awareness and bulkification
- Platform-first solutions
- Understanding of metadata-driven development
- Scalability for millions of orgs
- Trust and security considerations`,
    
    uber: `At Uber SSE, we expect:
- Real-time systems thinking
- Geo-spatial problem solving
- Distributed systems expertise
- Handling of high availability requirements
- Understanding of eventual consistency
- Mobile and API design considerations`,
  };
  
  return contexts[company.toLowerCase()] || contexts.google;
}

function getQuestionTypeGuidance(type: string): string {
  const guidance: Record<string, string> = {
    coding: `For coding questions, evaluate:
- Did they clarify requirements first?
- Did they discuss approach before coding?
- Is the code correct and handles edge cases?
- Did they analyze time/space complexity?
- Is the code clean and well-structured?
- Did they test their solution?`,
    
    'system-design': `For system design questions, evaluate:
- Did they gather requirements and estimate scale?
- Did they discuss high-level architecture?
- Did they dive deep into key components?
- Did they discuss trade-offs?
- Did they consider failure modes?
- Did they address scalability and performance?`,
    
    behavioral: `For behavioral questions, evaluate:
- Did they use STAR format properly?
- Was the example specific and relevant?
- Did they show ownership and impact?
- Were there quantifiable results?
- Did they show self-awareness and learning?
- Did they demonstrate the relevant competency?`,
    
    technical: `For technical questions, evaluate:
- Depth of knowledge in the domain
- Ability to explain complex concepts simply
- Awareness of trade-offs and alternatives
- Practical experience vs theoretical knowledge
- Understanding of best practices
- Awareness of common pitfalls`,
  };
  
  return guidance[type] || guidance.coding;
}

export async function analyzeAnswer(request: AnalysisRequest): Promise<AnalysisResponse> {
  const companyContext = getCompanySpecificContext(request.company, request.role);
  const questionGuidance = getQuestionTypeGuidance(request.questionType);
  
  const timeUsed = Math.round(request.timeSpent / 60);
  const timeAllowed = Math.round(request.timeLimit / 60);
  const timePercentage = Math.round((request.timeSpent / request.timeLimit) * 100);
  
  const userPrompt = `
## Company & Role
${request.company} - ${request.role}

## Question
**Title:** ${request.questionTitle}
**Type:** ${request.questionType}
**Description:**
${request.questionDescription}

## Expected Topics/Concepts
${request.expectedTopics?.join(', ') || 'General knowledge expected'}

## Time
- Used: ${timeUsed} minutes of ${timeAllowed} minutes allowed (${timePercentage}%)

## Candidate's Answer
${request.answer}

---

${companyContext}

${questionGuidance}

Based on this answer, provide your brutal analysis. Remember, you're a senior interviewer who has seen thousands of candidates. Be specific about:
1. Why this answer would lead to REJECTION (be specific)
2. Red flags you noticed immediately
3. What a STRONG HIRE candidate would have said instead
4. Concepts/topics they missed or got wrong
5. Communication problems
6. Specific areas to improve (actionable, not vague)
7. Resources they should study

Rate each dimension 0-100:
- Technical Accuracy
- Problem Solving Approach  
- Communication Clarity
- Depth of Knowledge

Give an overall score 0-100 and verdict (PASS if 70+, WEAK_PASS if 50-69, FAIL if below 50).

Respond in this exact JSON format:
{
  "score": <number>,
  "verdict": "<PASS|WEAK_PASS|FAIL>",
  "whyYoudGetRejected": ["<specific reason 1>", "<specific reason 2>", ...],
  "redFlags": ["<red flag 1>", "<red flag 2>", ...],
  "whatStrongCandidateSaid": "<paragraph describing ideal answer>",
  "missingConcepts": ["<concept 1>", "<concept 2>", ...],
  "communicationIssues": ["<issue 1>", "<issue 2>", ...],
  "technicalAccuracy": <number>,
  "problemSolvingApproach": <number>,
  "communicationClarity": <number>,
  "depthOfKnowledge": <number>,
  "improvementAreas": ["<specific action 1>", "<specific action 2>", ...],
  "resourcesRecommended": ["<resource 1>", "<resource 2>", ...]
}`;

  // If no OpenAI key, use fallback
  if (!openai) {
    console.log('No OpenAI API key configured, using fallback analysis');
    return generateFallbackAnalysis(request);
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: BRUTAL_SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 2000,
      response_format: { type: 'json_object' },
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const analysis = JSON.parse(content) as AnalysisResponse;
    return analysis;
  } catch (error) {
    console.error('Error analyzing answer:', error);
    
    // Return a fallback analysis if AI fails
    return generateFallbackAnalysis(request);
  }
}

function generateFallbackAnalysis(request: AnalysisRequest): AnalysisResponse {
  const answer = request.answer;
  const length = answer.length;
  
  // Basic heuristics
  const hasCode = /function|def |class |const |let |var |=>|->/.test(answer);
  const hasComplexity = /O\(|time complexity|space complexity/i.test(answer);
  const hasEdgeCases = /edge case|null|empty|boundary/i.test(answer);
  const hasTradeoffs = /trade-?off|alternative|instead|versus|vs\./i.test(answer);
  const hasStructure = /first|second|then|finally|step/i.test(answer);
  
  let score = 35;
  if (length > 200) score += 10;
  if (length > 500) score += 10;
  if (hasCode) score += 15;
  if (hasComplexity) score += 10;
  if (hasEdgeCases) score += 10;
  if (hasTradeoffs) score += 10;
  if (hasStructure) score += 5;
  
  score = Math.min(score, 90);
  
  const verdict = score >= 70 ? 'PASS' : score >= 50 ? 'WEAK_PASS' : 'FAIL';
  
  return {
    score,
    verdict,
    whyYoudGetRejected: [
      !hasCode ? "No actual code or implementation shown - just talking isn't enough" : null,
      !hasComplexity ? "No complexity analysis - senior engineers always discuss Big-O" : null,
      !hasEdgeCases ? "No edge case consideration - shows shallow thinking" : null,
      !hasTradeoffs ? "No alternative approaches discussed - we want to see breadth" : null,
      length < 300 ? "Answer too brief - either don't know enough or poor communication" : null,
    ].filter(Boolean) as string[],
    redFlags: [
      !hasStructure ? "Unstructured, rambling answer" : null,
      request.timeSpent < request.timeLimit * 0.3 ? "Rushed through without thinking" : null,
    ].filter(Boolean) as string[],
    whatStrongCandidateSaid: `A strong candidate would have: (1) Clarified requirements and asked good questions, (2) Discussed 2-3 approaches with trade-offs, (3) Chosen optimal approach with clear reasoning, (4) Provided clean implementation with edge case handling, (5) Analyzed time/space complexity, (6) Tested with examples.`,
    missingConcepts: [
      !hasComplexity ? 'Complexity Analysis' : null,
      !hasEdgeCases ? 'Edge Case Handling' : null,
      !hasTradeoffs ? 'Alternative Approaches' : null,
    ].filter(Boolean) as string[],
    communicationIssues: [
      !hasStructure ? 'Needs better structure (first, then, finally)' : null,
      length < 300 ? 'Too brief - needs more explanation' : null,
    ].filter(Boolean) as string[],
    technicalAccuracy: hasCode ? 60 : 35,
    problemSolvingApproach: hasTradeoffs ? 65 : 40,
    communicationClarity: hasStructure ? 60 : 40,
    depthOfKnowledge: hasComplexity && hasEdgeCases ? 65 : 40,
    improvementAreas: [
      'Practice writing actual code under time pressure',
      'Always state time and space complexity',
      'List edge cases before implementing',
      'Discuss at least one alternative approach',
      'Structure answers: approach first, then implementation',
    ],
    resourcesRecommended: [
      'Grokking the Coding Interview (Educative)',
      'System Design Interview by Alex Xu',
      'Cracking the Coding Interview',
      'LeetCode Premium for company-specific questions',
    ],
  };
}

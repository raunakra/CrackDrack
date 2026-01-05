# CrackDrack - Brutal Interview Prep 💀

> No sugar-coating. No participation trophies. Just the cold, hard truth about why you'd get rejected.

![CrackDrack](https://img.shields.io/badge/Mode-Brutal-red)
![Target](https://img.shields.io/badge/Target-FAANG-blue)
![Status](https://img.shields.io/badge/Status-Ready-green)

## 🎯 Target Roles

- **Google L4** (Senior Software Engineer)
- **Amazon SDE3** (Senior Software Development Engineer)
- **Salesforce SMTS** (Senior Member of Technical Staff)
- **Uber SSE** (Senior Software Engineer)

## 🔥 Features

### 📚 Company-Wise Question Bank
Real interview questions from previous years, organized by:
- Coding (LeetCode-style)
- System Design
- Behavioral/Leadership Principles
- Platform-specific (Salesforce Apex, etc.)

### ⏱️ Timed Mock Rounds
- Realistic time pressure
- Visual timer with warnings
- No pausing (like real interviews!)

### 🤖 Brutal AI Analysis
The AI doesn't hold back:
- Exactly **why you'd get rejected**
- **Red flags** interviewers notice
- What a **STRONG HIRE** candidate would say
- Specific **improvement areas**
- **Resources** to study

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenAI API key (for AI analysis)

### Installation

```bash
# Clone the repo
cd CrackDrack

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

# Setup environment
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY
```

### Running the App

```bash
# Terminal 1: Start the server
cd server
npm run dev

# Terminal 2: Start the client
cd client
npm run dev
```

Open http://localhost:3000 in your browser.

## 📁 Project Structure

```
CrackDrack/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/        # UI Components
│   │   │   ├── Layout.tsx
│   │   │   ├── Timer.tsx
│   │   │   ├── CompanyCard.tsx
│   │   │   ├── QuestionCard.tsx
│   │   │   └── BrutalFeedback.tsx
│   │   ├── pages/             # Route Pages
│   │   │   ├── Dashboard.tsx
│   │   │   ├── CompanyQuestions.tsx
│   │   │   ├── MockInterview.tsx
│   │   │   ├── Analysis.tsx
│   │   │   └── History.tsx
│   │   ├── stores/            # Zustand State
│   │   ├── data/              # Question Bank
│   │   ├── types/             # TypeScript Types
│   │   └── services/          # API Client
│   └── package.json
├── server/                    # Express Backend
│   ├── src/
│   │   ├── routes/
│   │   │   ├── analyze.ts     # AI Analysis Endpoint
│   │   │   └── sessions.ts    # Session Management
│   │   ├── services/
│   │   │   └── aiAnalyzer.ts  # Brutal AI Logic
│   │   └── types/
│   └── package.json
└── README.md
```

## 🧠 How the Brutal AI Works

The AI is prompted to act as a **jaded FAANG interviewer** who has:
- Conducted 1000+ interviews
- Rejected 80% of candidates
- Seen every mistake and excuse

It evaluates your answer on:
- **Technical Accuracy** (0-100)
- **Problem Solving Approach** (0-100)
- **Communication Clarity** (0-100)
- **Depth of Knowledge** (0-100)

And provides:
- Overall score (0-100)
- Verdict: `STRONG_HIRE`, `HIRE`, `LEAN_HIRE`, `LEAN_NO_HIRE`, `NO_HIRE`, `STRONG_NO_HIRE`
- Specific rejection reasons
- Red flags noticed
- What a strong candidate would say
- Missing concepts
- Communication issues
- Improvement areas with resources

## 📝 Question Categories

### Google L4
- Coding (Medium-Hard LeetCode)
- System Design (YouTube, Maps scale)
- Googleyness & Leadership

### Amazon SDE3
- Coding (Optimization focus)
- System Design (AWS-scale)
- Leadership Principles (all 16!)
- Bar Raiser questions

### Salesforce SMTS
- Apex & Platform coding
- Multi-tenant architecture
- Governor limits & best practices

### Uber SSE
- Real-time systems
- Geo-spatial problems
- Distributed systems

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS |
| State | Zustand |
| Icons | Lucide React |
| Backend | Express + TypeScript |
| AI | OpenAI GPT-4 |

## 📈 Roadmap

- [x] Phase 1: Core app with question bank
- [ ] Phase 2: Full AI integration
- [ ] Phase 3: Progress tracking & analytics
- [ ] Phase 4: Spaced repetition
- [ ] Phase 5: Peer mock interviews

## 💀 Why "Brutal"?

Because:
1. **Real interviews are brutal** - Better to fail here than there
2. **Sugar-coating doesn't help** - You need honest feedback
3. **Growth requires discomfort** - Embrace the rejection
4. **FAANG standards are high** - We hold you to them

## 🤝 Contributing

PRs welcome! Add more questions, improve the AI prompts, or fix bugs.

## 📜 License

MIT - Use it to land that dream job!

---

**Remember:** Every rejection makes you stronger. Now go practice. 💀

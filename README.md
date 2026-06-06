---
---
---
---
---
---
---
---
# InterviewIQ — AI-powered interview practice

> Practice realistic interviews with voice-enabled AI, resume-driven questions, and downloadable performance reports.

---

**Live Demo:** [interviewiq-aiclient2.onrender.com](https://interviewiq-aiclient2.onrender.com)

---

## 🎯 Problem Statement

Digital interview practice is often unaffordable, inconsistent, or non-actionable. Candidates need realistic, repeatable practice with clear scoring and improvement guidance.

## 💡 Solution

InterviewIQ delivers an end-to-end AI interview platform that:

- Extracts structured context from uploaded resumes.
- Generates tailored interview questions with progressive difficulty.
- Runs voice-driven interviews (speech synthesis + recognition).
- Evaluates answers using AI to produce scores and human-like feedback.
- Exports professional PDF reports and analytics.

---

## 🚀 Key Features

- AI Resume Analysis: Server-side PDF parsing and structured context extraction.
- Question Generation: `POST /api/interview/generate-questions` — AI-backed question sets.
- Voice Interview: Browser `SpeechSynthesis` and `webkitSpeechRecognition` integration.
- Auto Evaluation: `POST /api/interview/submit-answer` — AI evaluates and stores scores/feedback.
- Reports & Analytics: Visual reports (Recharts) and PDF export (`jsPDF`, `jspdf-autotable`).
- Usage Controls: Credits and user state stored in MongoDB; Razorpay payments supported.

---

## ✅ Google Technologies Used

| Google Technology | Implementation Detail | Status |
|---|---|---|
| Firebase Authentication | Identity management and social login hooks in client | Active |
| Google Cloud (target) | Suggested for serverless deployment to handle bursty ML workloads | Target |
| Chrome DevTools Protocol | Evidence engine and automated PDF renders (used in original project) | Active |
| Google Search API | Smart scrapers / monitoring (rate-limit aware) | Optimized |
| Google Vision / Hybrid matching | pHash + transformers used for frame similarity in original project | Optimized |

---

## ⚡ Quick Start

Clone and run locally:

```bash
# Clone repository
git clone <your-repo-url>
cd Interview

# Backend
cd server
npm install
# create .env with MONGO_URI, JWT_SECRET, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, AI_API_KEY, CLIENT_URL
npm run dev

# Frontend (new terminal)
cd ../client
npm install
npm run dev
```

### Required environment variables

Server (.env):

```
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
AI_API_KEY=your_ai_key
```

Client (.env):

```
VITE_API_URL=http://localhost:8080/api
```

---

## Project Structure

- `client/` — React frontend (pages: `InterviewPage`, `InterviewReport`, `InterviewHistory`)
- `client/src/components` — `Step1SetUp`, `Step2Interview`, `Step3Report`, `Timer`, `AuthModel`
- `server/` — Express backend (`routes`, `controllers`, `models`, `services`)
- Key endpoints: `/api/interview/*`, `/api/auth/*`, `/api/payment/*`, `/api/user/*`

---

## Notes & Next Steps

- Add README badges for build, license, and dependencies.
- Add `.env.example` files for `client` and `server`.
- Add a short demo GIF or hosted staging link for quick demos (live demo is provided above).

---

**Built with ❤️ by Krish Bhandari**

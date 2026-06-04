# Interview AI — AI-powered interview practice

> Practice realistic interviews, get AI-generated questions from your resume, receive voice-based interview experience, and download a professional performance report.

---

## 🔗 Quick Links

- Local app: `http://localhost:5173` (frontend)
- API base: `http://localhost:8080/api` (backend)
- See: [client](client) and [server](server) folders

---

## 🎯 Problem Statement

Candidates lack affordable, realistic, and actionable interview practice with clear scoring and human-like feedback. Manual mock interviews are time-consuming and inconsistent, and automated tools rarely provide structured improvement plans.

## 💡 What this project does

This project provides a complete AI-powered interview practice platform that:

- Extracts structured data from uploaded resumes (PDF) to build context.
- Generates a tailored set of interview questions using an AI service.
- Runs voice-enabled interviews (speech synthesis + speech recognition).
- Evaluates answers via AI to produce scores and concise human-like feedback.
- Aggregates results into downloadable PDF reports and analytics.

---

## 🚀 Key Features (from code)

- Resume analysis: Server-side PDF parsing with `pdfjs-dist` and AI (`/api/interview/resume`).
- Question generation: `POST /api/interview/generate-questions` creates 5 questions with time limits and difficulty progression.
- Voice interview: Frontend uses `SpeechSynthesis` and `webkitSpeechRecognition` to speak questions and capture answers.
- Auto-evaluation: `POST /api/interview/submit-answer` sends answers to the AI evaluator and stores scores/feedback.
- Interview lifecycle: `finishInterview` computes overall metrics and `GET /api/interview/report/:id` returns results for reporting.
- Reports: Client builds visual analytics (Recharts) and exports a PDF via `jsPDF` + `jspdf-autotable`.
- User & credits: Backend enforces credit usage when generating questions; user state stored in MongoDB.
- Payments: Razorpay integration available under `server` (payment routes/services).

---

## 🛠️ Tech Stack (seen in repository)

- Frontend: React, Vite, TailwindCSS, Recharts, jsPDF
- Backend: Node.js (ESM), Express, Mongoose (MongoDB)
- AI integration: `server/services/openRouter.service.js` (AI request wrapper)
- PDF parsing: `pdfjs-dist` for resume text extraction
- Auth: JWT + Firebase hooks in client (social login)
- Payments: Razorpay (`razorpay` package)

---

## ⚡ Quick Start (run locally)

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

### Important environment variables

Server (.env) — minimal set used by this repo:

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

## Project Structure (high level)

- `client/` — React frontend (pages: `InterviewPage`, `InterviewReport`, `InterviewHistory`)
- `client/src/components` — Step components (`Step1SetUp`, `Step2Interview`, `Step3Report`), `Timer`, `AuthModel`
- `server/` — Express backend (`routes`, `controllers`, `models`, `services`)
- Key API endpoints: `/api/interview/*`, `/api/auth/*`, `/api/payment/*`, `/api/user/*`

---

## Notes & Next steps I recommend

- Add README badges for build, license, and dependencies.
- Add `.env.example` files for `client` and `server` with required variables.
- Add a short demo GIF or host a staging deployment for quick demos.

---

**Built with ❤️ by  Krish Bhandari ;**

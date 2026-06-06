import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";
dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://interviewiq-aiclient2.onrender.com"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user" , userRouter);
app.use("/api/interview" , interviewRouter);
app.use("/api/payment" , paymentRouter);

const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log(`App is listening on port ${port}`);
    connectDb();
})
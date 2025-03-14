import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import { ConnectDB } from "./utils/db";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, try again later.",
});
app.use(limiter);
ConnectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

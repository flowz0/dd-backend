import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
const allowedOrigins = [
  "https://dd-frontend-liart.vercel.app/",
  "https://dd-frontend-flowz0s-projects.vercel.app/",
  "https://dd-frontend-git-main-flowz0s-projects.vercel.app/",
  "https://dd-frontend-95q5wgv0y-flowz0s-projects.vercel.app/"
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(express.json()); // parse JSON bodies: req.body
app.use(cookieParser());
app.use(rateLimiter);

app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});

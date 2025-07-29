import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors({
  origin: "https://www.ductdaddykc.com",
  credentials: true,
}));
app.use(express.json()); // parse JSON bodies: req.body
app.use(cookieParser());

app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});

import express from "express";
import { checkAuth, login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check", checkAuth);

export default router;
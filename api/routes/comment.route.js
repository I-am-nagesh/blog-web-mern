import express from "express";
const router = express.Router();
import { cretateComment } from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

router.post("/create", verifyToken, cretateComment);


export default router;

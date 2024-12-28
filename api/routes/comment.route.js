import express from "express";
const router = express.Router();
import { cretateComment,  getPostComments } from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

router.post("/create", verifyToken, cretateComment);
router.get('/getPostComments/:postId', getPostComments);


export default router;

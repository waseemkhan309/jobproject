import express from "express";
const router = express.Router();
import {
  signupController,
  signinController,
} from "../controller/user.controller.js";

router.post("/user/signup", signupController);
router.post("/user/signin", signinController);

export default router;

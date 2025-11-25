import { Router } from "express";
import { handleSendMail } from "../controllers/mailController.js";

const router = Router();

router.post("/send-mail", handleSendMail);

export default router;

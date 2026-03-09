import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();

router.post("/", authController.register);
router.get("/", authController.getAllStaff);

export default router;

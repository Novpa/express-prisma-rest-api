import { Router } from "express";
import { membersController } from "../controllers/members.controller";

const router = Router();

router.post("/", membersController.createMember);

export default router;

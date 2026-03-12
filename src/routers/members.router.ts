import { Router } from "express";
import { membersController } from "../controllers/members.controller";

const router = Router();

router.post("/new", membersController.createMember);
router.get("/", membersController.getAllMembers);

export default router;

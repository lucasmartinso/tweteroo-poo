import { Router } from "express"; 
import tweetRouter from "./tweetsRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(tweetRouter);

export default router;
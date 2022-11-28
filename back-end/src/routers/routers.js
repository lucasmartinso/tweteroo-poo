import { Router } from "express"; 
import tweetRouter from "./tweetsRouter";
import userRouter from "./userRouter";

const router = Router();

router.use(userRouter);
router.use(tweetRouter);

export default router;
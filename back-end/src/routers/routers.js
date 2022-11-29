import { Router } from "express"; 
import tweetRouter from "./tweetsRouter.js";
import userRouter from "./userRouter.js";


class Router { 
    constructor() { 

    }

    configRouter() { 
        
    }
}
const router = Router();

router.use(userRouter);
router.use(tweetRouter);

export default router;
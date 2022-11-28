import { Router } from "express"; 
import { userController } from "../controller/userController.js";

const userRouter = Router();

userRouter.post('/sign-up',userController.signup);

export default userRouter;
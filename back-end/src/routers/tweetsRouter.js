import { Router } from "express"; 
import tweetController from "../controller/tweetController.js";

const tweetRouter = Router();

tweetRouter.post('/tweets',tweetController.postTweet)
// tweetRouter.get('/tweets/:username',tweetController.userTweets)
// tweetRouter.get('/tweets',tweetController.allTweets)

export default tweetRouter;
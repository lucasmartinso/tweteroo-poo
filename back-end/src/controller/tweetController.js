import { tweetService } from "../service/tweetService.js";

class TweetController { 
    constructor() { 
        this.tweets = [];
        this.postTweet = this.postTweet.bind(this)
    }

    postTweet(req,res) {
        const { tweet, username } = req.body;
    
        if (!username || !tweet) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }
         
        const { avatar } = usuarios.find(user => user.username === username);
         
        this.tweets.push({ username, tweet, avatar });
      
        res.status(201).send('OK, seu tweet foi criado');
    }
}



// function userTweets(req,res) { 
//     const tweetsDoUsuario = tweetService.userTweets();

//     res.status(200).send(tweetsDoUsuario);
// }

// function allTweets(req,res) { 
//     const { page } = req.query;

//     const tweets = tweetService.allTweets(page);

//     if(tweets === 'error') return res.status(400).send('Informe uma página válida!');

//     res.status(200).send(tweets);
// }

export default new TweetController();
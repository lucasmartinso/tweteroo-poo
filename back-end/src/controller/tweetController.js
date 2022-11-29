import userController from "../controller/userController.js";

class TweetController { 
    constructor() { 
        this.tweets = [];
        this.postTweet = this.postTweet.bind(this);
        this.userTweets = this.userTweets.bind(this);
        this.allTweets = this.allTweets.bind(this);
    }

    postTweet(req,res) {
        const { tweet, username } = req.body;
    
        if (!username || !tweet) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }
         
        const { avatar } = userController.getLoggedUser(username);
         
        this.tweets.push({ username, tweet, avatar });
        console.log(this.tweets);
      
        return res.status(201).send('OK, seu tweet foi criado');
    }

    allTweets(req,res) { 
        const { page } = req.query;

        if (page && page < 1) {
            res.status(400).send('Informe uma página válida!');
            return;
        }
        const limite = 10;
        const start = (page - 1) * limite;
        const end = page * limite;
    
        if (tweets.length <= 10) {
            return res.send(reverseTweets());
        } 

        return res.status(200).send([...this.tweets].reverse().slice(start, end));
    }

    userTweets(req,res) { 
        const { username } = req.params;

        const tweetsDoUsuario = this.tweets.filter(t => t.username === username);
    
        return res.status(200).send(tweetsDoUsuario);
    }

    reverseTweets() {
        return [...this.tweets].reverse();
    }
}

export default new TweetController();
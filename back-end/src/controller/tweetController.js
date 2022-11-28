import { tweetService } from "../service/tweetService.js";

function postTweet(req,res) {
    const { tweet, username } = req.body;

    const error = tweetService.postTweet(tweet,username);

    if(error) return res.status(400).send('Todos os campos são obrigatórios!');
  
    res.status(201).send('OK, seu tweet foi criado');
}

function userTweets(req,res) { 
    const tweetsDoUsuario = tweetService.userTweets();

    res.status(200).send(tweetsDoUsuario);
}

function allTweets(req,res) { 
    const { page } = req.query;

    const tweets = tweetService.allTweets(page);

    if(tweets === 'error') return res.status(400).send('Informe uma página válida!');

    res.status(200).send(tweets);
}

export const tweetController = { 
    postTweet, 
    userTweets, 
    allTweets
}
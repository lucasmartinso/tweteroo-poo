import { usuarios, tweets } from "../service/variables.js"

function postTweet(tweet,username) { 
    if (!username || !tweet) {
       return 'error';
    }
    
    const { avatar } = usuarios.find(user => user.username === username);
    
    tweets.push({ username, tweet, avatar });
}

function userTweets() { 
    const { username } = req.params;

    const tweetsDoUsuario = tweets.filter(t => t.username === username);

    return tweetsDoUsuario;
}

function reverseTweets() {
    return [...tweets].reverse();
}

function allTweets(page) { 
    if (page && page < 1) {
        return 'error';
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (tweets.length <= 10) {
        return reverseTweets();
    }
    
    return [...tweets].reverse().slice(start, end);
}

export const tweetService = { 
    postTweet, 
    userTweets, 
    allTweets
}
export const usuarios = [];

export const tweets = [];

export class Usuarios { 
    constructor(username,avatar) { 
        this.username = username;
        this.avatar = avatar;
        this.usuarios = []
    }

    addUser() { 
        return this.usuarios.push({username,avatar})
    }    
}

export class Tweets { 
    constructor(tweet, username) { 
        this.tweet = tweet
        this.username = username;
        this.tweets = []
    }

    addTweet() { 
        console.log(this.tweet);
        this.tweets.push(this.tweet,this.username);
    }
}
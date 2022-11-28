export const usuarios = [];

export const tweets = [];

export class Usuarios { 
    constructor(username,avatar) { 
        this.username = username;
        this.avatar = avatar;
    }
}

export class Tweets { 
    constructor(tweet, username) { 
        this.tweet = tweet
        this.username = username;
    }
}
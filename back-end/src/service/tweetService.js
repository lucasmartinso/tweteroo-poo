// function userTweets() { 
//     const { username } = req.params;

//     const tweetsDoUsuario = tweets.filter(t => t.username === username);

//     return tweetsDoUsuario;
// }

// function reverseTweets() {
//     return [...tweets].reverse();
// }

// function allTweets() { 
//     if (page && page < 1) {
//         res.status(400).send('Informe uma página válida!');
//         return;
//     }
//     const limite = 10;
//     const start = (page - 1) * limite;
//     const end = page * limite;

//     if (tweets.length <= 10) {
//         return res.send(reverseTweets());
//     }
    
//     return [...tweets].reverse().slice(start, end)
// }
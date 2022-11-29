class AuthControlller { 
    constructor() { 
        this.usuarios = [];
        this.signup = this.signup.bind(this);
    }

    signup(req,res) {
        const { username, avatar } = req.body;
    
        if (!username || !avatar) {
            res.status(400).send('Todos os campos são obrigatórios!');
            return;
        }
    
        usuarios.push({ username, avatar });

        return res.status(200).send('OK deu tudo certo');
    }

    getLoggedUser(username) { 
        return this.usuarios.find(user => user.username === username)
    }
}


export default new AuthControlller();
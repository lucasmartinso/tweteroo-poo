import { userService } from "../service/userService.js";

function signup(req,res) {
    
    const { username, avatar } = req.body;

    const error = userService.signup(username,avatar);

    if(error) return res.status(400).send('Todos os campos são obrigatórios!');

    res.status(200).send('OK deu tudo certo');
        
}

export const userController = { 
    signup
}
import { usuarios } from "./variables.js"

function signup(username,avatar) {
     
    if (!username || !avatar) {
        return 'error';
    }

    usuarios.push({ username, avatar });
    console.log(usuarios);
}

export const userService = { 
    signup
}
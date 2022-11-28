function signup(username,avatar) {
    const usuarios = [];
     
    if (!username || !avatar) {
        return 'error';
    }

    usuarios.push({ username, avatar });
    console.log(usuarios);
}

export const userService = { 
    signup
}
function signup(username,avatar) {
    const usuarios = [];
     
    if (!username || !avatar) {
        return 'error';
    }

    usuarios.push({ username, avatar });
}

export const userService = { 
    signup
}
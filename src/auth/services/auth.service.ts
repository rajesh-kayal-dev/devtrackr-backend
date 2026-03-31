interface User{
    id:number,
    email:string,
    password:string,
}

let users: User[] = [];

export const createUserService = (email: string, password: string): User =>{
    const newuser: User = {
        id: Date.now(),
        email,
        password
    };

    users.push(newuser);
    return newuser;
}

export const findByEmail = (email: string) =>{
    return users.find(u => u.email === email);
}
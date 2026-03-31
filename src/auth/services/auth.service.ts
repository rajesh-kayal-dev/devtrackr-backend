import bcrypt from "bcrypt";


interface User{
    id:number,
    email:string,
    password:string,
}

let users: User[] = [];

export const createUserService = async (email: string, password: string) =>{
    const hashedPassword = await bcrypt.hash(password,10);
    
    const newuser: User = {
        id: Date.now(),
        email,
        password: hashedPassword
    };

    users.push(newuser);
    return newuser;
}

export const findByEmail = (email: string) =>{
    return users.find(u => u.email === email);
}
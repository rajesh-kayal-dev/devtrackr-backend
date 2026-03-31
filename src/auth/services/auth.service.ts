import bcrypt from "bcrypt";
type Role = "user" | "admin";

interface User{
    id:number,
    email:string,
    password:string,
    role: Role
}

let users: User[] = [];

export const createUserService = async (email: string, password: string) =>{
    const hashedPassword = await bcrypt.hash(password,10);
    
    const newuser: User = {
        id: Date.now(),
        email,
        password: hashedPassword,
        role:"user"
    };

    users.push(newuser);
    return newuser;
}

export const findByEmail = (email: string) =>{
    return users.find(u => u.email === email);
}
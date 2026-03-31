import { Request, Response } from "express";
import { createUserService } from "../services/auth.service";
import Jwt from "jsonwebtoken";
import { findByEmail } from "../services/auth.service";

export const login = (req:Request, res: Response) =>{
    const{email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message: "Email and password are required"
        })
    }
    const user = findByEmail(email);

    if(!user || user.password !== password){
        return res.status(401).json({
      message: "Invalid credentials"
    });
    }

    const token = Jwt.sign(
        {userId: user.id},
        "secretkey",
        {expiresIn: "1h"}
    );

    res.json({
        message: 'Login successful',
        token
    });
}

export const signup = (req:Request, res: Response)=>{
    const {email, password} = req.body;

    //validation
    if(!email || !password){
        return res.status(400).json({
        message: "Email and password are required"
    });
    }

    const user = createUserService(email, password);

    res.json({
        message:"User created",
        user
    });
} 
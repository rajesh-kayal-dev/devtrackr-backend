import { Request, Response } from "express";
import { createUserService } from "../services/auth.service";

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
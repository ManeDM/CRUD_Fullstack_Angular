import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken'


export const newUser = async (req: Request, res: Response) => {
    
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username}});

    if(user) {
        res.status(400).json({
            msg: `The user ${username} already exists`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    try {
        await User.create({
            username: username,
            password: hashedPassword
        })
        res.json({
            msg: `The user ${username} was created succesfully`,
            
        })
        
    } catch (error) {
        res.status(400).json({
            mrg: "Sorry, something went wrong"
        })
    }
}


export const loginUser = async (req: Request, res: Response) => {
    
    const { username, password } = req.body

    //validamos si el usuario exxiste en la base de datos
    const user: any = await User.findOne({ where: { username}});
    
    if(!user){
        return res.status(400).json({
            msg: `The user with name ${username} doesnt exists at database`
        })
    }
    //validamos paswword

    const passwordValid = await bcrypt.compare(password, user.password)
    if(!passwordValid){
        return res.status(400).json({
            msg: "Wrong Password"
        })
    }

    //generamos Token
    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'mane123');

        res.json(token)
}
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../models/User'
import { sign } from "jsonwebtoken";

import { dbConnect } from '../../db'
dbConnect()
export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if(req.method == "POST"){
       const user = await User.findOne({email:req.body.email})
       if(!user){
           res.status(401).json({
               title: 'user not found',
               error: 'invalid credentials'
           })
       }
       if(req.body.password != user!.password){
           res.status(401).json({
               title: 'login failed',
               error: 'Wrong username or password'
           })
       }
       let token = sign({userId:user!._id}, 'secretKey');
           res.status(200).json({
           title: 'login sucess',
           token: token
       })
    }
   
   }
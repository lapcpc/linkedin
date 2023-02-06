import { NextApiResponse, NextApiRequest } from "next";
import { User } from "../../models/User";

import { dbConnect } from '../../db'
dbConnect()
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method == 'POST'){
        try {
            const newUser= new User({

                email: req.body.email,
                username: req.body.name,
                password: req.body.password,
            })
            const user =  await newUser.save()
            res.status(200).json({
                title: 'signup succes'
            })
            
          } catch (err) {
            res.status(500).json({ error: 'failed to load data' })
          }
        
        
        
        
    }
    
}
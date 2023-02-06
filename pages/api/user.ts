import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { User } from "../../models/User";

import { dbConnect } from '../../db'
dbConnect()
export default function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method == 'GET'){
        let token =  req.headers.token +""
        
        try {
            let verifying =  verify(token, 'secretKey',async (err:any,decoded:any )=>{
                
                
               const user = await User.findOne({_id:decoded.userId})
                if(!user){
                    res.status(401).json({
                        title: 'user not found',
                        error: 'invalid credentials'
                    })
                }
                console.log(user)
                res.status(200).json({
                    title: 'user grabbed',
                    user:{
                        email: user.email,
                        name: user.username,
                    }
                })
            })
        } catch (error) {
            res.status(401).json({
                title:'unauthorized'
            })
        }
    }

}
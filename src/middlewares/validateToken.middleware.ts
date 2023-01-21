import { NextFunction, Request, Response } from "express";
import "dotenv/config"
import jwt from "jsonwebtoken"

const validateTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const isToken = req.headers.authorization

    if(!isToken){
        return res.status(401).json("invalid token")
    }

    const token = isToken.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {

        if(error){
            return res.status(401).json("invalid token")
        }

        req.user = {
            idUser: decoded.sub
        }

        next()

    })

}

export default validateTokenMiddleware
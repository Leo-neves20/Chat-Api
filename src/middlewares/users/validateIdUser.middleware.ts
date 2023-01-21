import { NextFunction, Request, Response } from "express";
import {validate as validateUuid} from "uuid"
import { userRepository } from "../../utils/repositories.utils";

const validateUserIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const id = validateUuid(req.params.id)

    if(!id){
        return res.status(401).json({message: "inavlid user id"})
    }

    const findUser = await userRepository.findOneBy({id: req.params.id})

    if(!findUser){
        return res.status(401).json({message: "inavlid user id"})
    }

    next()

}

export default validateUserIdMiddleware
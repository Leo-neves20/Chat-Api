import { NextFunction, Request, Response } from "express"
import {AnySchema} from "yup"

const verifyBodyMiddleware = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const validated = await schema.validate(req.body, {
            stripUnknown: true,
            abortEarly: false
        })
    
        req.body = validated

        next()

    } catch (error) {

        return res.status(400).json({message: error.errors})
        
    }
}

export default verifyBodyMiddleware
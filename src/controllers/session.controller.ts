import { iSession } from "../interfaces/session.interface";
import { Request, Response } from "express";
import createSessionService from "../servers/session/session.service";
import logoutSessionService from "../servers/session/logout.service";

const createSessionController = async (req: Request, res: Response) => {

    const dataLogin: iSession = req.body
    const token = await createSessionService(dataLogin)

    return res.status(200).json(token)

}

const logoutSessionController = async (req: Request, res: Response) => {
    
    await logoutSessionService(req.user.idUser)

    return res.status(200).json("Finishing Session")
}

export {
    createSessionController, 
    logoutSessionController
}
import { Router } from "express";
import { createSessionController, logoutSessionController } from "../controllers/session.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";

const sessionRoutes = Router()

sessionRoutes.post("/login", 
    createSessionController
)

sessionRoutes.post("/logout", 
    validateTokenMiddleware, 
    logoutSessionController
)

export default sessionRoutes
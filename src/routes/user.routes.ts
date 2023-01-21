import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import verifyBodyMiddleware from "../middlewares/validateBody.middleware";
import { createUserSchema } from "../schema/user/createUser.schema";

const usersRoutes = Router()

usersRoutes.post('/create',
    verifyBodyMiddleware(createUserSchema),
    createUserController
)

export default usersRoutes
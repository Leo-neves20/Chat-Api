import { Router } from "express";
import { AddFriendController, createUserController } from "../controllers/users.controllers";
import { createUserSchema }     from "../schema/user/createUser.schema";
import validateTokenMiddleware  from "../middlewares/validateToken.middleware";
import validateUserIdMiddleware from "../middlewares/users/validateIdUser.middleware";
import verifyBodyMiddleware     from "../middlewares/validateBody.middleware";

const usersRoutes = Router()

usersRoutes.post("/create",
    verifyBodyMiddleware(createUserSchema),
    createUserController
)

usersRoutes.post("/friends/:id",
    validateTokenMiddleware,
    validateUserIdMiddleware,
    AddFriendController
)

export default usersRoutes
import { Request, Response } from "express";
import { iUserRequest } from "../interfaces/user.interface";
import {instanceToPlain} from "class-transformer"
import createUserService from "../servers/users/createUsers.service";

const createUserController = async (req: Request, res: Response) => {
  const dataRequest: iUserRequest = req.body;
  const createUserResponse = await createUserService(dataRequest);

  return res.status(201).json(instanceToPlain(createUserResponse));
};

export { createUserController };

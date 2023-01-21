import { Request, Response } from "express";
import { iUserRequest } from "../interfaces/user.interface";
import {instanceToPlain} from "class-transformer"
import createUserService from "../servers/users/createUsers.service";
import AddFriendService from "../servers/users/addFriend.service";

const createUserController = async (req: Request, res: Response) => {
  const dataRequest: iUserRequest = req.body;
  const createUserResponse = await createUserService(dataRequest);

  return res.status(201).json(instanceToPlain(createUserResponse));
  
};

const AddFriendController = async (req: Request, res: Response) => {
  const idFriend: string = req.params.id
  const userId: string   = req.user.idUser
  const returned = await AddFriendService(userId, idFriend)

  return res.status(200).json({message: returned})
}

export { 
  createUserController, 
  AddFriendController 
};

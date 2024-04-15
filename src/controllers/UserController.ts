import { Request, Response } from "express";
import { UserServices } from "../services/UserServices";
import { error } from "console";

export class UserController {

    userService: UserServices

    constructor(
        userService = new UserServices()
    ){
        this.userService = userService
    }

  createUsers = (request: Request, response: Response) => {
    const user = request.body;



    if (!user.name || !user.email || !user.password) {
      return response.status(400).json({ message: "Bad request!", error });
    }

    this.userService.createUser(user.name, user.email, user.password);
    return response.status(201).json({ message: "Post created!" });
  };

  getUser = (request: Request, response: Response) => {
    const users = this.userService.getUser();
    return response.status(200).json(users);
  };

  deleteUsers = (request: Request, response: Response) => {};
}

import { Request,response,Response } from 'express';
import { UserServices } from '../services/UserServices';


export class PostController{
    createPost = (request:Request, response:Response) => {
        const userService = new UserServices()
        const user = request.body

        if(!user.name){
            return response.status(400).json({message:"Name está vazio!"})
        }

        userService.createUser(user.name, user.email)
        return response.status(201).json({message: "Post created!"})
    }

    getAllUsers = (request:Request, response:Response)=>{
        const userService = new UserServices()

        const users = userService.getAllUsers()
        return response.status(200).json(users)
    }
}
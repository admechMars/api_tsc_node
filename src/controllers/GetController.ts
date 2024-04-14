import { Request,Response } from 'express';

export class GetController{
    getInfo =  (request:Request, response:Response) => {
        return response.status(200).json({message : "get!"})
    
    }
}
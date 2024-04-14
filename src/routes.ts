import { Router } from "express";
import {PostController} from "./controllers/PostController"
import {GetController} from "./controllers/GetController"

export const router = Router();

const getController = new GetController()
const postController = new PostController()

//router.get('/',getController.getInfo)

router.post('/user',  postController.createPost)

router.get('/user', postController.getAllUsers)
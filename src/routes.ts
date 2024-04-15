import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { GetController } from "./controllers/GetController";

export const router = Router();

const getController = new GetController();
const userController = new UserController();

//router.get('/',getController.getInfo)

router.post("/user", userController.createUsers);

router.get("/user", userController.getUser);

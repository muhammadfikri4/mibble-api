import { Router } from "express";
import { validateRequest } from "middleware/validateRequest";
import { CatchWrapper } from "../../utils/CatchWrapper";
import { loginController, registerController } from "./authController";
import { createUserSchema, loginUserSchema } from "./authRequest";

const route = Router()

route.post(
    '/register',
    validateRequest(createUserSchema),
    CatchWrapper(registerController))
route.post(
    '/login',
    validateRequest(loginUserSchema),
    CatchWrapper(loginController))

export default route
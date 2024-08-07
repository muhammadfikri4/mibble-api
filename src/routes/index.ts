import { Router, type Request, type Response } from "express";
import authRouter from '../app/auth/authRoute';
import { MESSAGE_CODE } from "../utils/ErrorCode";
import { MESSAGES } from "../utils/Messages";

const route = Router();

route.use('/auth', authRouter)

route.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Hello World 🚀" })
})

route.use("*", (req: Request, res: Response) => {
    return res.status(404).json({
        status: 404,
        code: MESSAGE_CODE.NOT_FOUND,
        message: MESSAGES.ERROR.NOT_FOUND.ROUTE
    })
})

export default route
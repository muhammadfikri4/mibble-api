import { Router } from "express";
import { VerifyToken } from "middleware/verifyToken";
import { CatchWrapper } from "utils/CatchWrapper";
import { createThreadController } from "./threadController";

export const route = Router()

route.post(
    '/',
    VerifyToken,
    CatchWrapper(createThreadController)
)

export default route
import { NextFunction, type Request, type Response } from "express";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { HandleResponse } from "../../utils/HandleResponse";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import { loginService, registerService } from "./authService";

export const registerController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { body } = req
    const user = await registerService(body)

    if (user instanceof ErrorApp) {
        next(user)
        return
    }
    HandleResponse(res, 201, MESSAGE_CODE.SUCCESS, MESSAGES.CREATED.USER)
}

export const loginController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { body } = req
    const auth = await loginService(body)
    if (auth instanceof ErrorApp) {
        next(auth)
        return
    }
    HandleResponse(res, 200, MESSAGE_CODE.SUCCESS, MESSAGES.SUCCESS.LOGIN, auth)
}
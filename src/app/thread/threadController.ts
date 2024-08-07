import { NextFunction, type Response } from "express";
import { RequestWithAccessToken } from "../../interface/RequestWithAccessToken";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { HandleResponse } from "../../utils/HandleResponse";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import { createThreadService } from "./threadService";

export const createThreadController = async (
    req: RequestWithAccessToken,
    res: Response,
    next: NextFunction
) => {
    const { body, payloadToken } = req
    const thread = await createThreadService(body, payloadToken)
    if (thread instanceof ErrorApp) {
        next(thread)
        return
    }
    HandleResponse(res, 201, MESSAGE_CODE.SUCCESS, MESSAGES.CREATED.THREAD)
}
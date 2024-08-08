import { NextFunction, type Response } from "express";
import { RequestWithAccessToken } from "../../interface/RequestWithAccessToken";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { HandleResponse } from "../../utils/HandleResponse";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import { getProfileService } from "./profileService";

export const getProfileController = async (
    req: RequestWithAccessToken,
    res: Response,
    next: NextFunction
) => {
    const { payloadToken } = req
    const result = await getProfileService(payloadToken)

    if (result instanceof ErrorApp) {
        next(result)
        return
    }
    HandleResponse(res, 200, MESSAGE_CODE.SUCCESS, MESSAGES.SUCCESS.PROFILE.GET, result)

}
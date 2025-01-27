import { NextFunction, type Request, type Response } from "express";
import { TokenDecodeInterface } from "interface";
import { RequestWithAccessToken } from "interface/RequestWithAccessToken";
import { TokenExpiredError, decode, verify } from 'jsonwebtoken';
import { config } from "../libs";
import { MESSAGE_CODE } from "../utils/ErrorCode";
import { HandleResponse } from "../utils/HandleResponse";
import { MESSAGES } from "../utils/Messages";

export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return HandleResponse(res, 401, MESSAGE_CODE.UNAUTHORIZED, MESSAGES.ERROR.UNAUTHORIZED.FORBIDDEN)
    }
    const token = req.headers.authorization?.replace("Bearer ", "")
    verify(token, config.JWT_SECRET as string, (err) => {
        if (err) {
            if (err instanceof TokenExpiredError) {

                return HandleResponse(res, 401, MESSAGE_CODE.UNAUTHORIZED, MESSAGES.ERROR.UNAUTHORIZED.EXPIRED)
            }
            const decodeToken = decode(token)
            if (!(decodeToken as TokenDecodeInterface)?.userId) {
                return HandleResponse(res, 401, MESSAGE_CODE.UNAUTHORIZED, MESSAGES.ERROR.UNAUTHORIZED.RECOGNIZED)
            }
            return HandleResponse(res, 401, MESSAGE_CODE.UNAUTHORIZED, MESSAGES.ERROR.INVALID.AUTH)
        }
    })
    const decoded = (decode(token) as TokenDecodeInterface)?.userId
    if (decoded) {
        (req as RequestWithAccessToken).accessToken = token;
        (req as RequestWithAccessToken).payloadToken = { userId: decoded }
    }

    next()


}
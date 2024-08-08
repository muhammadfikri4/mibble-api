import { PayloadToken } from "../../interface/RequestWithAccessToken";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import { getUserById } from "../users/userRepository";
import { profileMapper } from "./profileMapper";

export const getProfileService = async (
    payloadToken: PayloadToken
) => {
    const { userId } = payloadToken

    const user = await getUserById(userId)
    if (!user) {
        return new ErrorApp(MESSAGES.ERROR.NOT_FOUND.USER, 404, MESSAGE_CODE.NOT_FOUND)
    }

    return profileMapper(user)
}
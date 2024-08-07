import { TokenType } from "utils/TokenType";
import { generateToken } from "utils/generateToken";
import { comparePassword } from "../../utils/ComparePassword";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { hashPassword } from "../../utils/HashPassword";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import { createUser, getUserByEmail } from "../users/userRepository";
import { UserLoginBodyRequest, UserRegistBodyRequest } from "./authDTO";

export const registerService = async (data: UserRegistBodyRequest) => {

    const userExist = await getUserByEmail(data.email)
    if (userExist) {
        return new ErrorApp(MESSAGES.ERROR.ALREADY.USER, 400, MESSAGE_CODE.BAD_REQUEST)
    }
    const hash = await hashPassword(data.password)
    const user = await createUser({ ...data, password: hash })
    return user
}

export const loginService = async (data: UserLoginBodyRequest) => {
    const user = await getUserByEmail(data.email)
    if (!user) {
        return new ErrorApp(MESSAGES.ERROR.NOT_FOUND.USER, 404, MESSAGE_CODE.NOT_FOUND)
    }
    const match = await comparePassword(data.password, user.password)
    if (!match) {
        return new ErrorApp(MESSAGES.ERROR.INVALID.PASSWORD, 400, MESSAGE_CODE.BAD_REQUEST)
    }

    const accessToken = generateToken(user.id, TokenType.ACCESS)

    return {
        accessToken
    }
}
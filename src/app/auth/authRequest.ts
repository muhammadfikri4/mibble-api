import Joi from "joi";
import { MESSAGES } from "../../utils/Messages";

export const createUserSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.NAME,
        "string.base": MESSAGES.ERROR.INVALID.NAME,
    }),
    email: Joi.string().email().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.EMAIL,
        "string.email": MESSAGES.ERROR.INVALID.EMAIL
    }),
    password: Joi.string().required().trim().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.PASSWORD,
        "string.base": MESSAGES.ERROR.INVALID.PASSWORD_TYPE,
        "string.trim": MESSAGES.ERROR.INVALID.PASSWORD_TRIM
    })
})


export const loginUserSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.EMAIL,
        "string.email": MESSAGES.ERROR.INVALID.EMAIL
    }),
    password: Joi.string().required().trim().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.PASSWORD,
        "string.base": MESSAGES.ERROR.INVALID.PASSWORD_TYPE,
        "string.trim": MESSAGES.ERROR.INVALID.PASSWORD_TRIM
    })
})
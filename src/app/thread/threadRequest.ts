import Joi from "joi";
import { MESSAGES } from "../../utils/Messages";

export const createThreadSchema = Joi.object({
    thread: Joi.string().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.THREAD,
        "string.base": MESSAGES.ERROR.INVALID.THREAD
    })
})
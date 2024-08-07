import { PayloadToken } from "../../interface/RequestWithAccessToken"
import { CreateThreadBodyRequest } from "./threadDTO"
import { createThread } from "./threadRepository"


export const createThreadService = async (body: CreateThreadBodyRequest, payload: PayloadToken) => {
    const result = await createThread(body.thread, payload.userId)
    return result
}
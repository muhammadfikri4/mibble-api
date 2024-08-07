import { prisma } from "../../config"

export const createThread = async (thread: string, userId: string) => {
    return await prisma.thread.create({
        data: {
            thread,
            userId
        }
    })
}
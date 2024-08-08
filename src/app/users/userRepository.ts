import { prisma } from "../../config"
import { UserRegistBodyRequest } from "../auth/authDTO"

export const createUser = async (data: UserRegistBodyRequest) => {
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password
        }
    })
}

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findFirst({
        where: {
            email
        }
    })
}

export const getUserById = async (userId: string) => {
    return await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}
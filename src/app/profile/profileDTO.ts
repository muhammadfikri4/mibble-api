import { Role } from "@prisma/client"

export interface ProfileDTO {
    id: string
    name: string
    email: string
    role: Role | null
}
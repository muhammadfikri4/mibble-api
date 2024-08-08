import { User } from "@prisma/client";
import { ProfileDTO } from "./profileDTO";

export const profileMapper = (data: User): ProfileDTO => {
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
    }
}
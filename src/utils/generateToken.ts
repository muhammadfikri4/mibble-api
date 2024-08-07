import { sign } from 'jsonwebtoken'
import { config } from '../libs'

export const generateToken = (id: string, type: 'ACCESS' | 'AUTH' = 'ACCESS') => {
    const token = sign({
        type,
        userId: id,
    }, config.JWT_SECRET as string, {
        expiresIn: config.JWT_EXPIRED
    })
    return token
}
import bcrypt from 'bcrypt'

export const comparePassword = async (password: string, exstPassword: string) => {
    return await bcrypt.compare(password, exstPassword)
}
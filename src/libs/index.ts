import dotenv from 'dotenv'

dotenv.config()

export const config = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRED: process.env.JWT_EXPIRED,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    ANGGOTA_CODE: process.env.ANGGOTA_CODE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_LOGIN: process.env.SMTP_LOGIN,
    EMAIL_SENDER: process.env.EMAIL_SENDER
}
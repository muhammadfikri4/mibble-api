import { type Request } from 'express'

export interface PayloadToken {
    userId: string
}

export interface RequestWithAccessToken extends Request {
    accessToken: string
    payloadToken: PayloadToken
}
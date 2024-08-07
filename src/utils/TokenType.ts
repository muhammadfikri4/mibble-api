export type TokenTypes = 'AUTH' | 'ACCESS'

export interface TokenTypeInterface {
    AUTH: TokenTypes
    ACCESS: TokenTypes
}

export const TokenType: TokenTypeInterface = {
    AUTH: 'AUTH',
    ACCESS: 'ACCESS'
}
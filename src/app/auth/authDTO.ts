export interface UserRegistBodyRequest {
    name: string
    email: string
    password: string
}

export interface UserLoginBodyRequest {
    email: string
    password: string
}
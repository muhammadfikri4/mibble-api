export const MESSAGES = {
    CREATED: {
        USER: "User created successfully"

    },
    ERROR: {
        NOT_FOUND: {
            USER: "User not found",
            ACARA: "Acara not found",
            SUB_ACARA: "Sub Acara not found",
            USER_ID: "User ID not found",
            ROUTE: "Route not found, Check again your endpoint!",
        },
        ALREADY: {
            GLOBAL: {
                EMAIL: "Email is already exist",
                NIDN: "NIDN is already exist",
                NIM: "NIM is already exist"
            },
            USER: "User already exist",
        },
        INVALID: {
            EMAIL: "Email is invalid",
            PASSWORD: "Password is wrong",
            PASSWORD_LENGTH: "Password must be at least 8 characters",
            AUTH: "Invalid credentials token",
            STATUS: "Status must be boolean type",
            NAME: "Name must be a string",
            PASSWORD_TYPE: "Password must be a string",
            PASSWORD_TRIM: "Password must not contain leading or trailing spaces",

        },
        UNAUTHORIZED: {
            AUTH: "If you are not logged in, please log in first",
            FORBIDDEN: "You are not Authorized",
            EXPIRED: "Token Expired, please log in again",
            RECOGNIZED: "Token not recognized"
        },
        REQUIRED: {
            EMAIL: "Email is required",
            PASSWORD: "Password is required",
            NAME: "Name is required",
            IMAGE: "Image is required",
            OLD_PASSWORD: "Old Password is required",
            NEW_PASSWORD: "New Password is required",
            OTP_KEY: "OTP Key is required",
            OTP: "OTP is required",
        },
        RELATION: {
            ANGKATAN: "Angkatan cannot be deleted because it has a relationship"
        },
        SERVER_ERROR: {
            INTERNAL_SERVER_ERROR: "Internal server error"
        }
    },
    SUCCESS: {
        LOGIN: "User logged in successfully",
        ACARA: {
            GET: "Success to fetch Acara",
            DELETE: "Success to delete Acara",
            UPDATE: "Success to update Acara"
        },
        PASSWORD: {
            CHANGE: "Success to change password"
        },
    }
}
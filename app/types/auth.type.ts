import type {User} from "next-auth";

export interface AuthUser extends User {
    accessToken: string;
    role: string;
    expirationTime: string;
}

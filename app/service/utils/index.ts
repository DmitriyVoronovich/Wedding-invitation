import {AuthUser} from "@/app/types/auth.type";

export const getAccessToken = (user: AuthUser) => {
    return user?.accessToken;
}

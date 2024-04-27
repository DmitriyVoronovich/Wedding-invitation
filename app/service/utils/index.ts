import {getSession} from "next-auth/react";
import {AuthUser} from "@/app/types/auth.type";

export const getAccessTokenOnServerSide = async (context: any) => {
    const session = await getSession(context);

    return (session?.user as AuthUser)?.accessToken;
}

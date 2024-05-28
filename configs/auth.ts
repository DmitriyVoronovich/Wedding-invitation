import type {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {AuthUser} from "@types";
import {singInAdmin, singInGuests} from "@/app/service/api/auth.api";

export const authConfig: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            authorize: async (credentials: any) => {
                if (!(credentials?.email && credentials?.password) && !credentials?.inviteId) {
                    return null
                }

                if (credentials?.inviteId) {
                    const resJson = await singInGuests({
                        "inviteId": credentials.inviteId
                    });

                    return resJson?.data || resJson?.error;
                }

                const resJson = await singInAdmin({
                    "email": credentials.email,
                    "password": credentials.password
                });

                return resJson?.data || resJson?.error;
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                const authUser = user as AuthUser;
                token.accessToken = authUser.accessToken
                token.user = authUser
                token.expires = authUser.expirationTime
            }
            return token
        },
        async session({session, token}) {
            session.user = token.user || undefined
            session.expires = new Date(token.expires as string).toISOString()
            return session
        }
    },
}

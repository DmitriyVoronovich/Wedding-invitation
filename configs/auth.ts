import type {AuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export interface AuthUser extends User {
    accessToken: string;
    role: string;
    expirationTime: string;
}

export const authConfig: AuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            authorize: async (credentials: any) => {
                if (!credentials?.email || !credentials?.password) return null

                const res = await fetch('http://localhost:5050/api/auth/login/admin', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "email": credentials.email,
                        "password": credentials.password
                    })
                })

                const resJson = await res.json()

                return resJson?.data || resJson.error;
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
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

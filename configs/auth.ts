import type {AuthOptions} from "next-auth";
import Credentials from 'next-auth/providers/credentials'

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null

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

                if (resJson?.data?.accessToken) {
                    return resJson;
                }
                return null
            }
        }),
    ],
    pages: {
        signIn: '/login'
    }
}
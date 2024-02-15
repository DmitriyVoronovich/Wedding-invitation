import type {AuthOptions, User} from "next-auth";
import GoggleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: '',
            clientSecret: ''
        }),
        Credentials({
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null


                const user = [{email: 'dmitriy.vr20@gmail.com', password: '44Hx5dSQ'}]
                const currentUser = user.find(user => user.email === credentials.email)

                if (currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithoutPass} = currentUser;
                    return userWithoutPass as User;
                }
                return null
            }
        }),
    ],
    pages: {
        signIn: '/login'
    }
}
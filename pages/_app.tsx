import {SessionProvider} from "next-auth/react"

export default function App({
                                Component,
                                pageProps: {session, ...pageProps},
                                otherProps
                            }: any) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

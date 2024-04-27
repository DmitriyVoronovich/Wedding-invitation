import {getSession} from "next-auth/react";
import {AuthUser} from "@/configs/auth";

export async function getServerSideProps(context: any) {
    const session = await getSession(context)
    const isAdmin = (session?.user as AuthUser)?.role === 'admin'
    return {
        redirect: {
            destination:  isAdmin ? '/admin/panel' : '/admin/antLogin',  // redirect destination path
            permanent: false,
        },
    }
}


export default function Admin() {
    return (
        <main>
            <div>
                <h1>Admin Page</h1>
            </div>
        </main>
    );
};

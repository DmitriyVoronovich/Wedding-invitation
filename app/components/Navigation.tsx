'use client'

import Link from "next/link";
import {useSession} from "next-auth/react";

const Navigation = () => {
    const session = useSession()
    console.log(session)
    return (
        <div>
            <Link href={'/'}/>
        </div>
    );
};

export default Navigation;

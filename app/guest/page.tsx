'use client'

import React from 'react';
import Link from "next/link";
import {useSession, signOut} from "next-auth/react";

export default function Guest() {
    const session = useSession()
    console.log(session)
    return (
        <div>
            fvvvav
            {session?.data && <Link href={'#'} onClick={() => signOut({callbackUrl: '/'})}>singUot</Link>}
        </div>
    );
};
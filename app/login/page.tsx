'use client'

import Link from "next/link";
import './login_style.scss';
import type {FormEventHandler} from "react";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

export default function Login() {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
       const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (res && !res.error) {
            router.push('/guest')
        } else {
            console.log(res)
        }
    };

    return (
        <div className={'login_container'}>
            <h3 className={'login_title'}>Login</h3>
            <form className={'login_form'} onSubmit={handleSubmit}>
                <label className={'login_input_label'}>
                    <span className={'login_span_input'}>Login</span>
                    <input className={'login_input'}
                           placeholder={'Enter login!'}
                           name={'email'}
                           type={'email'}
                           required/>
                </label>
                <label className={'login_input_label'}>
                    <span className={'login_span_input'}>Password</span>
                    <input className={'login_input'}
                           placeholder={'Enter password!'}
                           type={"password"}
                           name={'password'}
                           required/>
                </label>
                <div className={'login_button_wrapper'}>
                    <button className={'login_button'} type="submit">singIn</button>
                    <button className={'exit_button'}>
                        <Link href={'/'}>
                            Return to invitation!
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}
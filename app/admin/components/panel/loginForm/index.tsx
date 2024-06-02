import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Button, Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import Link from "next/link";
import styles from './login.module.scss';
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
});

export default function AdminLogin() {
    const router = useRouter();
    const {
        control, handleSubmit, formState: {errors}
    }
        = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async ({email, password}: any) => {
        try {
            const signInResponse = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password
            });

            if (signInResponse?.ok) {
                router.push('/admin/guests');
            }


        } catch (e: any) {
            console.log("error")
        }
    }


    return (
        <div className={`${styles.loginForm}`}>
            <h1 className={styles.headerLoginPage}>Login</h1>
            <Form onFinish={handleSubmit(onSubmit)}>
                <Form.Item name='email' validateStatus={errors.email && 'error'}
                           help={errors.email && 'Email is required.'}>
                    <Controller name={'email'}
                                control={control}
                                render={({field}) => (
                        <Input prefix={<MailOutlined/>} placeholder='Email' {...field} />
                    )}/>
                </Form.Item>

                <Form.Item name='password'
                           validateStatus={errors.password && 'error'}
                           help={errors.password && 'Password is required.'}>
                    <Controller name={'password'} control={control} render={({field}) => (
                        <Input prefix={<LockOutlined/>}
                               type='password'
                               placeholder='Password' {...field} />
                    )}/>
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>Log in</Button>
                </Form.Item>

                <Link href='/'>
                    Return to invitation
                </Link>
            </Form>
        </div>
    )
}

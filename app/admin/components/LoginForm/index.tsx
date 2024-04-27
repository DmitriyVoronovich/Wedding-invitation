import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Button, Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import Link from "next/link";
import styles from './login.module.scss';
import {signIn} from "next-auth/react";
import React from "react";
import {NotificationPlacement} from "antd/es/notification/interface";
import {useRouter} from "next/navigation";

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
});

export default function FormLogin({api, setContext}: any) {
    const router = useRouter();
    const {
        register, control, handleSubmit, formState: {errors}
    }
        = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async ({email, password}: any) => {
        try {
            await signIn('credentials', {
                redirect: false,
                email: email,
                password: password
            });

            router.push('/admin');
        } catch (e: any) {
            openNotification({message: 'Error notification!', description: e.message});
        }
    }

    const openNotification = ({message, description}: any) => {
        api.error({
            message,
            description,
            placement: "topRight" as NotificationPlacement
        });
    };


    return (
        <div className={`${styles.loginForm}`}>
            <h1 className={styles.headerLoginPage}>Login</h1>
            <Form onFinish={handleSubmit(onSubmit)}>
                <Form.Item name='email' validateStatus={errors.email && 'error'}
                           help={errors.email && 'Email is required.'}>
                    <Controller name={'email'} control={control} render={({field}) => (
                        <Input prefix={<MailOutlined/>} placeholder='Email' {...field} />
                    )}/>
                </Form.Item>

                <Form.Item name='password' validateStatus={errors.password && 'error'}
                           help={errors.password && 'Password is required.'}>
                    <Controller name={'password'} control={control} render={({field}) => (
                        <Input prefix={<LockOutlined/>} type='password'
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

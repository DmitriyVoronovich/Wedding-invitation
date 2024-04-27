import React from 'react';
import {Col, notification, Row} from 'antd';
import styles from './login.module.scss';
import LoginForm from '@app/admin/components/LoginForm';

export type NotificationType = {
    message: string;
};

export const Context = React.createContext({message: ''} as NotificationType);


export default function LoginPage() {
    const [context, setContext] = React.useState({message: ''} as NotificationType);
    const [api, contextHolder] = notification.useNotification();

    return (
        <div>
            <Context.Provider value={context}>
                {contextHolder}
                <Row justify='center' align='top' className={`${styles.loginPage}`}>
                    <Col lg={12} xs={20} className={`${styles.loginForm}`}>
                        <Row className={styles.headerLoginPage}>
                            <Col span={24}>
                                <LoginForm api={api} setContext={setContext}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Context.Provider>
        </div>
    );
}

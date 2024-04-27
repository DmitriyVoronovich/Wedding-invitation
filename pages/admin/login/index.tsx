import React from 'react';
import {Col, Row} from 'antd';
import styles from './login.module.scss';
import AdminLogin from "@/app/admin/components/panel/loginForm";


export default function LoginPage() {
    return (
        <Row justify='center' align='top' className={`${styles.loginPage}`}>
            <Col lg={12} xs={20} className={`${styles.loginForm}`}>
                <Row className={styles.headerLoginPage}>
                    <Col span={24}>
                        <AdminLogin/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

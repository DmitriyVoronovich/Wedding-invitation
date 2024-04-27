import {Col, Menu, MenuProps, Row} from "antd";
import styles from "./index.module.scss";
import {ScheduleOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";

const items: MenuProps['items'] = [
    {
        label: 'Guests',
        key: 'guests',
        icon: <UserOutlined/>,
    },
    {
        label: 'Invitations',
        key: 'invitations',
        icon: <TeamOutlined/>,
    },
    {
        label: 'Schedule',
        key: 'schedule',
        icon: <ScheduleOutlined/>,
    },
]

export function PanelMenu({children}: React.PropsWithChildren) {
    return (
        <Row className={styles.panelGlobal} gutter={[8, 8]}>
            <Col span={4}>
                <Menu className={styles.panelMenu} items={items}/>
            </Col>
            <Col span={19}>
                {children}
            </Col>
        </Row>
    )
}

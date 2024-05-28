import {Col, Menu, MenuProps, Row} from "antd";
import styles from "./index.module.scss";
import {ScheduleOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const redirectToAdminPageByKey = (router: AppRouterInstance) => {
    return ({key}: { key: string }) => router.push(key);
}

const prepareMenuItems: (router: AppRouterInstance) => MenuProps['items'] =
    (router: AppRouterInstance): MenuProps['items'] =>
        ([
            {
                label: 'Guests',
                key: 'guests',
                icon: <UserOutlined/>,
                onClick: redirectToAdminPageByKey(router)
            },
            {
                label: 'Invite Groups',
                key: 'inviteGroup',
                icon: <TeamOutlined/>,
                onClick: redirectToAdminPageByKey(router)
            },
            {
                label: 'Survey Response',
                key: 'surveyResponse',
                icon: <ScheduleOutlined/>,
                onClick: redirectToAdminPageByKey(router)
            },
        ])

export function PanelMenu({children}: React.PropsWithChildren) {
    const router = useRouter()

    return (
        <Row className={styles.panelGlobal} gutter={[8, 8]}>
            <Col span={4}>
                <Menu className={styles.panelMenu} items={prepareMenuItems(router)}/>
            </Col>
            <Col span={19}>
                {children}
            </Col>
        </Row>
    )
}

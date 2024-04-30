import {Col, Menu, MenuProps, Row} from 'antd';
import {ScheduleOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import styles from './panel.module.scss';
import {GuestTable} from '@/app/components/admin/panel/guests/guestTable'

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

export default function Panel() {

    return (
        <Row className={styles.panelGlobal} gutter={[8, 8]}>
            <Col span={4}>
                <Menu className={styles.panelMenu} items={items}/>
            </Col>
            <Col span={18}>
                <GuestTable />
            </Col>
        </Row>
    )
}

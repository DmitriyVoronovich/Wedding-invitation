import {Guest} from "@types";
import {Space, TableProps} from "antd/lib";
import {CheckCircleOutlined, CloseCircleOutlined, CopyOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {LastChangeCell, TableOpen} from "@admin-components";
import {TableColumnType} from "antd";

export const GuestColumns: (handleSelectActionGuest: (guest: Guest, tableOpenAction: TableOpen) => void, copyIntoBuffer: (guest: Guest) => Promise<void>, getColumnSearchProps: () => TableColumnType<Guest>) => TableProps<Guest>["columns"] =
    (handleSelectActionGuest: (guest: Guest, tableOpenAction: TableOpen) => void, copyIntoBuffer: (guest: Guest) => Promise<void>, getColumnSearchProps: () => TableColumnType<Guest>): TableProps<Guest>['columns'] =>
        ([
            {
                title: 'Adult',
                dataIndex: 'isAdult',
                key: 'isAdult',
                render: (isAdult: boolean) => isAdult ? 'Yes' : 'No',
                width: 100,
                filters: [
                    {
                        text: 'Adult',
                        value: true,
                    },
                    {
                        text: 'Non Adult',
                        value: false,
                    },
                ],
                onFilter: (value, {isAdult}) => value !== '' && isAdult === value,
            },
            {
                title: 'Invite',
                dataIndex: 'inviteGroup',
                key: 'inviteGroup',
                width: 100,
                render: (inviteGroup: string) => !!inviteGroup ? <CheckCircleOutlined/> : <CloseCircleOutlined/>,
                filters: [
                    {
                        text: 'Exist',
                        value: true,
                    },
                    {
                        text: 'Non Exist',
                        value: false,
                    },
                ],
                onFilter: (value, {inviteGroup}) => !!inviteGroup === value,
            },
            {
                title: 'Last Seen At',
                key: 'lastSeenAt',
                dataIndex: 'lastSeenAt',
                render: (_, guest: Guest) => guest.lastSeenAt ? new Date(guest.lastSeenAt).toLocaleString() : 'Never',
            },
            {
                title: 'Name',
                dataIndex: 'firstName',
                key: 'firstName',
            },
            {
                title: 'Last Name',
                dataIndex: 'lastName',
                key: 'lastName',
                ...getColumnSearchProps(),
            },
            {
                title: 'Side',
                dataIndex: 'side',
                key: 'side',
                filters: [
                    {
                        text: 'Husband',
                        value: 'husband',
                    },
                    {
                        text: 'Wife',
                        value: 'wife',
                    }
                ],
                onFilter: (value, {side}) => value !== '' && side === value,
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
                filters: [
                    {
                        text: 'Male',
                        value: 'male',
                    },
                    {
                        text: 'Female',
                        value: 'female',
                    }
                ],
                onFilter: (value, {gender}) => value !== '' && gender === value,
            },
            {
                title: 'Last changes',
                key: 'lastChanges',
                dataIndex: 'lastChanges',
                render: (_, guest: Guest) => <LastChangeCell objectData={guest}/>
            },
            {
                title: 'Action',
                key: 'action',
                render: (_, guest: Guest) => (
                    <Space size="middle">
                        <EditOutlined onClick={() => handleSelectActionGuest(guest, TableOpen.editDrawer)}/>
                        <DeleteOutlined onClick={() => handleSelectActionGuest(guest, TableOpen.removeConfirm)}/>
                        <CopyOutlined onClick={() => copyIntoBuffer(guest)}/>
                    </Space>
                ),
            },
        ]);

import {Table, Space, TableProps} from "antd/lib";
import React from "react";
import {Guest} from "@/types/guest.type";
import {LastChangeCell} from "./lastChangeCell";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";



const columns: TableProps<Guest>['columns'] = [
    {
        title: 'Adult',
        dataIndex: 'isAdult',
        key: 'isAdult',
        render: (isAdult: boolean) => isAdult ? 'Yes' : 'No'
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'First Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Side',
        dataIndex: 'side',
        key: 'side',
    },
    {
        title: 'Last changes',
        key: 'lastChanges',
        dataIndex: 'lastChanges',
        render: (_, guest: Guest) => <LastChangeCell guest={guest}/>
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, guest: Guest) => (
            <Space size="middle">
                <EditOutlined />
                <DeleteOutlined />
            </Space>
        ),
    },
];

const data: Guest[] = [
    {
        "id": "65c4f617c17a841a58c9ea47",
        "createdAt": "2024-02-08T15:41:11.004Z",
        "updatedAt": "2024-02-09T16:48:28.884Z",
        "role": "guest" as Guest['role'],
        "inviteId": "6d3ce76f-c00a-444c-a7ce-258a84c8e339",
        "firstName": "Виталий",
        "lastName": "Касперко",
        "side": "husband" as Guest['side'],
        "isAdult": true,
        "createdBy": "voronovich.pavel99@gmail.com",
        "modifyBy": "voronovich.pavel99@gmail.com"
    },
    {
        "id": "65c8ec6ac789d85fd5f611b8",
        "createdAt": "2024-02-11T15:48:58.459Z",
        "updatedAt": "2024-02-12T23:25:55.311Z",
        "role": "guest" as Guest['role'],
        "inviteId": "623c9ae0-183a-479f-b36d-b675d85b28dc",
        "firstName": "Виталий 123",
        "lastName": "Касперко",
        "side": "wife" as Guest['side'],
        "isAdult": true,
        "inviteGroup": "65caa28dfba056e3038a1c48",
        "createdBy": "voronovich.pavel99@gmail.com"
    }
];

const GuestTable = () => <Table columns={columns} dataSource={data}/>;

export default GuestTable;

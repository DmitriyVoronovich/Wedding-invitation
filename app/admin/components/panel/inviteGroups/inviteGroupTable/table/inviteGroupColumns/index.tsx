import {Space, TableProps} from "antd/lib";
import {CopyOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {LastChangeCell, TableGroupOpen} from "@admin-components";
import {Guest, InviteGroup} from "@types";
import {TableColumnType} from "antd";
import {ColumnType} from "antd/lib/table";

export const InviteGroupColumns: (handleSelectActionInviteGroup: (inviteGroup: InviteGroup, tableOpenAction: TableGroupOpen) => void, getColumnSearchProps: () => ColumnType<InviteGroup>, copyIntoBuffer: (guest: Guest) => Promise<void>) => TableProps<InviteGroup>["columns"] =
    (handleSelectActionInviteGroup: (inviteGroup: InviteGroup, tableOpenAction: TableGroupOpen) => void, getColumnSearchProps: () => TableColumnType<InviteGroup>, copyIntoBuffer: (guest: Guest) => Promise<void>): TableProps<InviteGroup>['columns'] =>
        ([
            {
                title: 'Survey',
                dataIndex: 'surveyResponses',
                key: 'surveyResponses',
                filters: [
                    {
                        text: 'Answered',
                        value: true,
                    },
                    {
                        text: 'Not Answered',
                        value: false,
                    }
                ],
                onFilter: (value, inviteGroup) => !!inviteGroup?.surveyResponses === value,
                render: (_, {surveyResponses}: InviteGroup) => surveyResponses ? 'Answered' : 'Not Answered'
            },
            {
                title: 'Group Name',
                dataIndex: 'groupName',
                key: 'groupName',
                ...getColumnSearchProps(),
            },
            {
                title: 'Guests',
                dataIndex: 'guests',
                key: 'guests',
                width: 300,
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
                onFilter: (value, {guests}) => guests?.[0]?.side && guests?.[0]?.side === value,
                render: (_, {guests}: InviteGroup) => (
                    <ul>
                        {guests.map((guest) => <li key={guest.firstName}>{guest.firstName} {guest.lastName} <CopyOutlined onClick={() => copyIntoBuffer(guest)}/></li>)}
                    </ul>
                ),
            },
            {
                title: 'Transports From',
                dataIndex: ['invitation', 'transportFrom'],
                key: 'transportFrom',
                filters: [
                    {
                        text: 'Mosty',
                        value: 'mosty',
                    },
                    {
                        text: 'Shchuchyn',
                        value: 'shchuchyn',
                    },
                ],
                onFilter: (value, {invitation}) => invitation && invitation.transportFrom === value,
                render: (_, {invitation}: InviteGroup) => (invitation && invitation.transportFrom) || 'Not set'
            },
            {
                title: 'Action',
                key: 'action',
                render: (_, inviteGroup: InviteGroup) => (
                    <Space size="middle">
                        <EditOutlined
                            onClick={() => handleSelectActionInviteGroup(inviteGroup, TableGroupOpen.editDrawer)}/>
                        <DeleteOutlined
                            onClick={() => handleSelectActionInviteGroup(inviteGroup, TableGroupOpen.removeConfirm)}/>
                    </Space>
                ),
            },
        ]);

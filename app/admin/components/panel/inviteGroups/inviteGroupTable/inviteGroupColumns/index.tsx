import {Space, TableProps} from "antd/lib";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import React from "react";
import {LastChangeCell} from "@admin-components";
import {InviteGroup} from "@/types/inviteGroups.type";
import {TableGroupOpen} from "@/app/admin/components/panel/inviteGroups";
import {TableColumnType} from "antd";

export const InviteGroupColumns: (handleSelectActionInviteGroup: (inviteGroup: InviteGroup, tableOpenAction: TableGroupOpen) => void, getColumnSearchProps: () => TableColumnType<InviteGroup>) => TableProps<InviteGroup>["columns"] =
    (handleSelectActionInviteGroup: (inviteGroup: InviteGroup, tableOpenAction: TableGroupOpen) => void, getColumnSearchProps: () => TableColumnType<InviteGroup>): TableProps<InviteGroup>['columns'] =>
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
                        {guests.map(({firstName, lastName}) => <li key={firstName}>{firstName} {lastName}</li>)}
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
                title: 'Last changes',
                key: 'lastChanges',
                dataIndex: 'lastChanges',
                render: (_, inviteGroup: InviteGroup) => <LastChangeCell objectData={inviteGroup}/>
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

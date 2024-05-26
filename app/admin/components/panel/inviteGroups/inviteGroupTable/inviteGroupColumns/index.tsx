import {Space, TableProps} from "antd/lib";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import React from "react";
import {TableRowSelection} from "antd/es/table/interface";
import {LastChangeCell} from "@admin-components";
import {InviteGroup} from "@/types/inviteGroups.type";
import {TableGroupOpen} from "@/app/admin/components/panel/inviteGroups";

export const rowSelection: TableRowSelection<InviteGroup> = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};

export const InviteGroupColumns: (handleSelectActionInviteGroup: (inviteGroup: InviteGroup, tableOpenAction: TableGroupOpen) => void) => TableProps<InviteGroup>["columns"] =
    (handleSelectActionInviteGroup: (inviteGroup: InviteGroup, tableOpenAction: TableGroupOpen) => void): TableProps<InviteGroup>['columns'] =>
        ([
            {
                title: 'Group Name',
                dataIndex: 'groupName',
                key: 'groupName',
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
                        <EditOutlined onClick={() => handleSelectActionInviteGroup(inviteGroup, TableGroupOpen.editDrawer)}/>
                        <DeleteOutlined onClick={() => handleSelectActionInviteGroup(inviteGroup, TableGroupOpen.removeConfirm)}/>
                    </Space>
                ),
            },
        ]);

import {Guest} from "@/types/guest.type";
import {Space, TableProps} from "antd/lib";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import React from "react";
import {TableRowSelection} from "antd/es/table/interface";
import {LastChangeCell, TableOpen} from "@admin-components";

export const rowSelection: TableRowSelection<Guest> = {
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

export const GuestColumns: (handleSelectActionGuest: (guest: Guest, tableOpenAction: TableOpen) => void) => TableProps<Guest>["columns"] =
    (handleSelectActionGuest: (guest: Guest, tableOpenAction: TableOpen) => void): TableProps<Guest>['columns'] =>
        ([
            {
                title: 'Adult',
                dataIndex: 'isAdult',
                key: 'isAdult',
                render: (isAdult: boolean) => isAdult ? 'Yes' : 'No',
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
                    </Space>
                ),
            },
        ]);

import React, {useRef} from "react";
import {InviteGroupColumns} from "./inviteGroupColumns";
import {createCopyIntoBuffer, TableGroupOpen} from "@admin-components";
import {InviteGroup} from "@types";
import {Space, Table} from "antd/lib";
import {inviteText} from "@/app/admin/components/panel/utils";
import {Button, Input, InputRef, TableColumnType} from "antd";
import {FilterDropdownProps} from "antd/es/table/interface";
import {SearchOutlined} from "@ant-design/icons";

type TableProps = {
    publicUrl: string,
    inviteGroups: InviteGroup[],
    setTableOpen: React.Dispatch<React.SetStateAction<TableGroupOpen>>,
    setSelectedInviteGroup: React.Dispatch<React.SetStateAction<InviteGroup | undefined>>
    notificationMessage: (success: boolean, message: { success: string, error: string }, callback: {
        success?: Function | undefined,
        error?: Function | undefined
    }) => void,
}

export const CustomInviteGroupTable = ({publicUrl, inviteGroups, setSelectedInviteGroup, setTableOpen, notificationMessage}: TableProps) => {
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        _selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
    ) => {
        confirm();
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
    };

    const getColumnSearchProps = (): TableColumnType<InviteGroup> => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm)}
                    style={{marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{width: 90}}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{color: filtered ? '#1677ff' : undefined}}/>
        ),
        onFilter: (value, inviteGroup) =>
            inviteGroup.groupName
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
    });

    const handleSelectActionInviteGroup = (inviteGroup: InviteGroup, tableOpenAction: TableGroupOpen) => {
        setSelectedInviteGroup(inviteGroup);
        setTableOpen(tableOpenAction);
    }

    const copyIntoBuffer = createCopyIntoBuffer(publicUrl, notificationMessage);

    const inviteGroupColumns = InviteGroupColumns(handleSelectActionInviteGroup, getColumnSearchProps, copyIntoBuffer);

    return (
        <Table bordered
               rowKey="id"
               columns={inviteGroupColumns}
               expandable={{
                   expandedRowRender: (inviteGroup) => {
                       return (
                           <p style={{margin: 0}}>
                               {inviteText(inviteGroup)}
                           </p>
                       )
                   },
               }}
               dataSource={inviteGroups}
               pagination={false}/>
    )
}

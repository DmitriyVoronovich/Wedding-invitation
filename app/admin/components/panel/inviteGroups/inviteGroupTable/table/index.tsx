import {InviteGroupColumns} from "@/app/admin/components/panel/inviteGroups/inviteGroupTable/inviteGroupColumns";
import {TableGroupOpen} from "@/app/admin/components/panel/inviteGroups";
import {InviteGroup} from "@types";
import React, {useRef, useState} from "react";
import {Space, Table} from "antd/lib";
import {inviteText} from "@/app/admin/components/panel/utils";
import {Button, Input, InputRef, TableColumnType} from "antd";
import {FilterDropdownProps} from "antd/es/table/interface";
import {SearchOutlined} from "@ant-design/icons";

type TableProps = {
    inviteGroups: InviteGroup[],
    setTableOpen: React.Dispatch<React.SetStateAction<TableGroupOpen>>,
    setSelectedInviteGroup: React.Dispatch<React.SetStateAction<InviteGroup | undefined>>
}

export const CustomInviteGroupTable = ({inviteGroups, setSelectedInviteGroup, setTableOpen}: TableProps) => {
    const [searchText, setSearchText] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (): TableColumnType<InviteGroup> => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
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

    const inviteGroupColumns = InviteGroupColumns(handleSelectActionInviteGroup, getColumnSearchProps);

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

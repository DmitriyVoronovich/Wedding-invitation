import {
    SurveyResponseColumns
} from "./surveyResponseColumns";
import React, {useRef, useState} from "react";
import {Button, Input, InputRef, TableColumnType} from "antd";
import {FilterDropdownProps} from "antd/es/table/interface";
import {Space, Table} from "antd/lib";
import {SearchOutlined} from "@ant-design/icons";
import {InviteGroup} from "@types";

export const SurveyResponseTable = ({inviteGroups}: { inviteGroups: InviteGroup[] }) => {
    const [_searchText, setSearchText] = useState('');
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

    const surveyResponseColumns = SurveyResponseColumns(getColumnSearchProps)

    return (
        <Table bordered
               rowKey="id"
               columns={surveyResponseColumns}
               dataSource={inviteGroups}
               pagination={false}/>
    );
}

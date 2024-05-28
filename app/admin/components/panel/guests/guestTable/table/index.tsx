import {GuestColumns} from "@/app/admin/components/panel/guests/guestTable/guestColumns";
import React, {useRef, useState} from "react";
import {Guest} from "@types";
import {TableOpen} from "@admin-components";
import {Space, Table} from "antd/lib";
import {Button, Input, InputRef, TableColumnType} from "antd";
import {FilterDropdownProps} from "antd/es/table/interface";
import {SearchOutlined} from "@ant-design/icons";

const COPY_MESSAGE = {
    success: 'Copy to clipboard',
    error: 'Could not copy to clipboard'
};

type TableProps = {
    publicUrl: string,
    notificationMessage: (success: boolean, message: { success: string, error: string }, callback: {
        success?: Function | undefined,
        error?: Function | undefined
    }) => void,
    setSelectedGuest: React.Dispatch<React.SetStateAction<Guest | undefined>>,
    setTableOpen: React.Dispatch<React.SetStateAction<TableOpen>>,
    guests: Guest[]
}

export const CustomGuestTable = ({
                                     publicUrl,
                                     notificationMessage,
                                     setSelectedGuest,
                                     setTableOpen,
                                     guests
                                 }: TableProps) => {
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

    const getColumnSearchProps = (): TableColumnType<Guest> => ({
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
        onFilter: (value, guest) =>
            guest.lastName
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
    });

    const handleSelectActionGuest = (guest: Guest, tableOpenAction: TableOpen) => {
        setSelectedGuest(guest);
        setTableOpen(tableOpenAction);
    }

    const copyIntoBuffer = async (guest: Guest) => {
        const copyInviteUrl = `${publicUrl}/invite/${guest.inviteId}`;

        navigator.clipboard.writeText(copyInviteUrl).then(function () {
            notificationMessage(true, COPY_MESSAGE, {});
        }, function () {
            notificationMessage(false, COPY_MESSAGE, {});
        });
    }

    const guestsColumns = GuestColumns(handleSelectActionGuest, copyIntoBuffer, getColumnSearchProps);

    return (
        <Table bordered rowKey="id" columns={guestsColumns} pagination={false}
               dataSource={guests}/>
    )
}

import {Space, Table} from "antd/lib";
import React, {Dispatch, SetStateAction, useMemo, useState} from "react";
import {DrawerTitle} from "app/admin/components/panel/dataDrawer";
import {NotificationInstance} from "antd/es/notification/interface";
import {Button} from "antd";
import {useAdminAccessToken} from "@hooks";
import {InviteGroupColumns, rowSelection} from "./inviteGroupColumns";

import './index.css';
import {inviteText, prepareNotificationMessage} from "@/app/admin/components/panel/utils";
import {InviteGroup} from "@/types/inviteGroups.type";

export enum TableOpen {
    editDrawer = 'editDrawer',
    addDrawer = 'addDrawer',
    removeConfirm = 'removeConfirm',
    nothing = ''

}

export const InviteGroupTable = ({inviteGroups, setInviteGroups, notificationApi}: {
        inviteGroups: InviteGroup[],
        setInviteGroups: Dispatch<SetStateAction<InviteGroup[]>>,
        notificationApi: NotificationInstance
    }) => {
        const accessToken = useAdminAccessToken();
        const [tableOpen, setTableOpen] = useState<TableOpen>(TableOpen.nothing);
        const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
        const [selectedInviteGroup, setSelectedInviteGroup] = useState<InviteGroup | undefined>(undefined);
        const [modalText, setModalText] = useState("Confirm remove");
        const notificationMessage = prepareNotificationMessage(notificationApi);

        const handleSelectActionGuest = (inviteGroup: InviteGroup, tableOpenAction: TableOpen) => {
            setSelectedInviteGroup(inviteGroup);
            setTableOpen(tableOpenAction);
        }

        const closeAll = () => {
            setTableOpen(TableOpen.nothing);
            setConfirmLoading(false);
            setSelectedInviteGroup(undefined);
        }

        const inviteGroupColumns = useMemo(
            () => InviteGroupColumns(handleSelectActionGuest)
            , [handleSelectActionGuest]);

        return (
            <>
                <Space wrap className={'guest-table'}>
                    <Button size={'middle'} ghost type='primary'
                            onClick={() => setTableOpen(TableOpen.addDrawer)}>
                        {DrawerTitle.CREATE_GUEST}
                    </Button>
                </Space>
                <Table bordered
                       rowSelection={rowSelection}
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
                           rowExpandable: (inviteGroup) => !!inviteGroup.guests.length,
                       }}
                       dataSource={inviteGroups}/>
            </>
        )
    }
;

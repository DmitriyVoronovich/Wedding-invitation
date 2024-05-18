import {Space, Table} from "antd/lib";
import React, {Dispatch, SetStateAction, useMemo, useState} from "react";
import {DataDrawer, DrawerTitle} from "app/admin/components/panel/dataDrawer";
import {NotificationInstance} from "antd/es/notification/interface";
import {Button, Modal} from "antd";
import {useAdminAccessToken} from "@hooks";
import {InviteGroupColumns, rowSelection} from "./inviteGroupColumns";

import './index.css';
import {inviteText, prepareNotificationMessage} from "@/app/admin/components/panel/utils";
import {CreateOrEditInviteGroup, InviteGroup} from "@/types/inviteGroups.type";
import {CreateOrEditInviteGroupForm} from "@/app/admin/components/panel/inviteGroups";
import {createInviteGroup, deleteInviteGroup, editInviteGroup} from "@/app/service/api/inviteGroups.api";
import {TableOpen} from "@admin-components";
import {deleteGuest} from "@api";

export enum TableGroupOpen {
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
        const [tableOpen, setTableOpen] = useState<TableGroupOpen>(TableGroupOpen.nothing);
        const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
        const [selectedInviteGroup, setSelectedInviteGroup] = useState<InviteGroup | undefined>(undefined);
        const [modalText, setModalText] = useState("Confirm remove");
        const notificationMessage = prepareNotificationMessage(notificationApi);

        const handleSelectActionInviteGroup = (inviteGroup: InviteGroup, tableOpenAction: TableGroupOpen) => {
            setSelectedInviteGroup(inviteGroup);
            setTableOpen(tableOpenAction);
        }

        const closeAll = () => {
            setTableOpen(TableGroupOpen.nothing);
            setConfirmLoading(false);
            setSelectedInviteGroup(undefined);
        }

        const handleEditInviteGroup = async (editedInviteGroup: CreateOrEditInviteGroup) => {
            const editInviteGroupResp = await editInviteGroup(accessToken, editedInviteGroup);
            closeAll();


            notificationMessage(!!editInviteGroupResp, {
                success: 'Invite group edited',
                error: 'Invite group not edited'
            }, {
                success: () => editInviteGroupResp &&
                    setInviteGroups(inviteGroups.map(item => item.id === selectedInviteGroup?.id ? {...selectedInviteGroup, ...editInviteGroupResp} : item)),
            });
        }

        const handleCreateInviteGroup = async (editedInviteGroup: CreateOrEditInviteGroup) => {
            const editInviteGroupResp = await createInviteGroup(accessToken, editedInviteGroup);
            closeAll();

            notificationMessage(!!editInviteGroupResp, {
                success: 'Invite group created',
                error: 'Invite group not created'
            }, {
                // success: () => editInviteGroupResp && setInviteGroups([...inviteGroups, editInviteGroupResp]),
            });
        }

    const handleDeleteGuest = async () => {
        setModalText('Please wait ...');
        setConfirmLoading(true);

        const isDeleted = await deleteInviteGroup(accessToken, selectedInviteGroup?.id!);
        closeAll();

        notificationMessage(isDeleted, {
            success: 'Invite group removed',
            error: 'Invite group not removed'
        }, {
            success: () => setInviteGroups(inviteGroups.filter(item => item.id !== selectedInviteGroup?.id)),
        });
    }

        const inviteGroupColumns = useMemo(
            () => InviteGroupColumns(handleSelectActionInviteGroup)
            , [handleSelectActionInviteGroup]);
        const drawerOpen = useMemo(
            () => [TableGroupOpen.editDrawer, TableGroupOpen.addDrawer].includes(tableOpen)
            , [tableOpen]);
        const drawerTitle = useMemo(
            () => tableOpen === TableGroupOpen.editDrawer ? DrawerTitle.EDIT_INVITE_GROUP : DrawerTitle.CREATE_INVITE_GROUP
            , [tableOpen]);

        return (
            <>
                <Space wrap className={'guest-table'}>
                    <Button size={'middle'} ghost type='primary'
                            onClick={() => setTableOpen(TableGroupOpen.addDrawer)}>
                        {DrawerTitle.CREATE_INVITE_GROUP}
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
                       }}
                       dataSource={inviteGroups}/>
                <DataDrawer open={drawerOpen} drawerTitle={drawerTitle} onClose={closeAll}>
                    {tableOpen === TableGroupOpen.editDrawer && selectedInviteGroup &&
                        <CreateOrEditInviteGroupForm key={DrawerTitle.EDIT_GUEST} editInviteGroup={selectedInviteGroup}
                                                     handleSubmitForm={handleEditInviteGroup}/>}
                    {tableOpen === TableGroupOpen.addDrawer &&
                        <CreateOrEditInviteGroupForm key={DrawerTitle.CREATE_GUEST} handleSubmitForm={handleCreateInviteGroup}/>}
                </DataDrawer>
                <Modal title={modalText}
                       open={tableOpen === TableGroupOpen.removeConfirm}
                       confirmLoading={confirmLoading}
                       onOk={handleDeleteGuest}
                       onCancel={closeAll}/>
            </>
        )
    }
;

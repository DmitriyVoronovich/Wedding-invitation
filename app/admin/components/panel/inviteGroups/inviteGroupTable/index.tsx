import {Space} from "antd/lib";
import {Dispatch, SetStateAction, useState} from "react";
import {DataDrawer, DrawerTitle} from "app/admin/components/panel/dataDrawer";
import {NotificationInstance} from "antd/es/notification/interface";
import {Button, Modal} from "antd";
import {useAdminAccessToken} from "@hooks";
import {prepareNotificationMessage} from "@/app/admin/components/panel/utils";
import {CreateOrEditInviteGroup, InviteGroup} from "@types";
import {CreateOrEditInviteGroupForm} from "@/app/admin/components/panel/inviteGroups";
import {createInviteGroup, deleteInviteGroup, editInviteGroup} from "@/app/service/api/inviteGroups.api";
import {CustomInviteGroupTable} from "./table";

import './index.css';

export enum TableGroupOpen {
    editDrawer = 'editDrawer',
    addDrawer = 'addDrawer',
    removeConfirm = 'removeConfirm',
    nothing = ''

}

type TableProp = {
    publicUrl: string,
    inviteGroups: InviteGroup[],
    setInviteGroups: Dispatch<SetStateAction<InviteGroup[]>>,
    notificationApi: NotificationInstance
}

export const InviteGroupTable = ({publicUrl, inviteGroups, setInviteGroups, notificationApi}: TableProp) => {
        const accessToken = useAdminAccessToken();
        const [tableOpen, setTableOpen] = useState<TableGroupOpen>(TableGroupOpen.nothing);
        const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
        const [selectedInviteGroup, setSelectedInviteGroup] = useState<InviteGroup | undefined>(undefined);
        const [modalText, setModalText] = useState("Confirm remove");
        const notificationMessage = prepareNotificationMessage(notificationApi);

        const closeAll = () => {
            setTableOpen(TableGroupOpen.nothing);
            setConfirmLoading(false);
            setSelectedInviteGroup(undefined);
        }

        const handleEditInviteGroup = async ({guests, ...editedInviteGroup}: CreateOrEditInviteGroup) => {
            const editInviteGroupResp = await editInviteGroup(accessToken, {id: selectedInviteGroup?.id, ...editedInviteGroup});
            closeAll();


            notificationMessage(!!editInviteGroupResp, {
                success: 'Invite group edited',
                error: 'Invite group not edited'
            }, {
                success: () => editInviteGroupResp &&
                    setInviteGroups(inviteGroups.map(item => item.id === selectedInviteGroup?.id ? {...selectedInviteGroup, ...editInviteGroupResp} : item)),
            });
        }

        const handleCreateInviteGroup = async ({updateGuests, ...editedInviteGroup}: CreateOrEditInviteGroup) => {
            const editInviteGroupResp = await createInviteGroup(accessToken, editedInviteGroup);
            closeAll();

            notificationMessage(!!editInviteGroupResp, {
                success: 'Invite group created',
                error: 'Invite group not created'
            }, {
                success: () => editInviteGroupResp && setInviteGroups([...inviteGroups, editInviteGroupResp]),
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

        const drawerOpen = [TableGroupOpen.editDrawer, TableGroupOpen.addDrawer].includes(tableOpen);
        const drawerTitle = tableOpen === TableGroupOpen.editDrawer ? DrawerTitle.EDIT_INVITE_GROUP : DrawerTitle.CREATE_INVITE_GROUP;

        return (
            <>
                <Space wrap className={'guest-table'}>
                    <Button size={'middle'} ghost type='primary'
                            onClick={() => setTableOpen(TableGroupOpen.addDrawer)}>
                        {DrawerTitle.CREATE_INVITE_GROUP}
                    </Button>
                </Space>
                <CustomInviteGroupTable publicUrl={publicUrl} inviteGroups={inviteGroups}
                                        setSelectedInviteGroup={setSelectedInviteGroup}
                                        setTableOpen={setTableOpen} notificationMessage={notificationMessage}/>
                <DataDrawer open={drawerOpen} drawerTitle={drawerTitle} onClose={closeAll}>
                    {tableOpen === TableGroupOpen.editDrawer && selectedInviteGroup &&
                        <CreateOrEditInviteGroupForm key={DrawerTitle.EDIT_GUEST} editInviteGroup={selectedInviteGroup}
                                                     handleSubmitForm={handleEditInviteGroup}/>}
                    {tableOpen === TableGroupOpen.addDrawer &&
                        <CreateOrEditInviteGroupForm key={DrawerTitle.CREATE_GUEST}
                                                     handleSubmitForm={handleCreateInviteGroup}/>}
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

import {Space, Table} from "antd/lib";
import React, {Dispatch, SetStateAction, useMemo, useState} from "react";
import {CreateOrEditGuest, Guest} from "@/types/guest.type";
import {DataDrawer, DrawerTitle} from "app/admin/components/panel/dataDrawer";
import {NotificationInstance} from "antd/es/notification/interface";
import {Button, Modal} from "antd";
import {createGuest, deleteGuest, editGuest} from "@api";
import {useAdminAccessToken} from "@hooks";
import {GuestColumns, rowSelection} from "./guestColumns";
import {EditGuestForm} from "@admin-components";

import './index.css';
import {prepareNotificationMessage} from "@/app/admin/components/panel/utils";

export enum TableOpen {
    editDrawer = 'editDrawer',
    addDrawer = 'addDrawer',
    removeConfirm = 'removeConfirm',
    nothing = ''

}

export const GuestTable = ({guests, setGuests, notificationApi}: {
        guests: Guest[],
        setGuests: Dispatch<SetStateAction<Guest[]>>,
        notificationApi: NotificationInstance
    }) => {
        const accessToken = useAdminAccessToken();
        const [tableOpen, setTableOpen] = useState<TableOpen>(TableOpen.nothing);
        const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
        const [selectedGuest, setSelectedGuest] = useState<Guest | undefined>(undefined);
        const [modalText, setModalText] = useState("Confirm remove");
        const notificationMessage = prepareNotificationMessage(notificationApi);

        const handleSelectActionGuest = (guest: Guest, tableOpenAction: TableOpen) => {
            setSelectedGuest(guest);
            setTableOpen(tableOpenAction);
        }

        const closeAll = () => {
            setTableOpen(TableOpen.nothing);
            setConfirmLoading(false);
            setSelectedGuest(undefined);
        }

        const handleDeleteGuest = async () => {
            setModalText('Please wait ...');
            setConfirmLoading(true);

            const isDeleted = await deleteGuest(accessToken, selectedGuest?.id!);
            closeAll();

            notificationMessage(isDeleted, {
                success: 'Guest removed',
                error: 'Guest not removed'
            }, {
                success: () => setGuests(guests.filter(guest => guest.id !== selectedGuest?.id)),
            });
        }

        const handleEditGuest = async (editedGuest: CreateOrEditGuest) => {
            const editGuestResp = await editGuest(accessToken, {id: selectedGuest?.id, ...editedGuest});
            closeAll();


            notificationMessage(!!editGuestResp, {
                success: 'Guest edited',
                error: 'Guest not edited'
            }, {
                success: () => editGuestResp &&
                    setGuests(guests.map(guest => guest.id === selectedGuest?.id ? editGuestResp : guest)),
            });
        }

        const handleCreateGuest = async (editedGuest: CreateOrEditGuest) => {
            const createdGuestResp = await createGuest(accessToken, editedGuest);
            closeAll();

            notificationMessage(!!createdGuestResp, {
                success: 'Guest created',
                error: 'Guest not created'
            }, {
                success: () => createdGuestResp && setGuests([...guests, createdGuestResp]),
            });
        }

        const guestsColumns = useMemo(
            () => GuestColumns(handleSelectActionGuest)
            , [handleSelectActionGuest]);
        const drawerOpen = useMemo(
            () => [TableOpen.editDrawer, TableOpen.addDrawer].includes(tableOpen)
            , [tableOpen]);
        const drawerTitle = useMemo(
            () => tableOpen === TableOpen.editDrawer ? DrawerTitle.EDIT_GUEST : DrawerTitle.CREATE_GUEST
            , [tableOpen]);

        return (
            <>
                <Space wrap className={'guest-table'}>
                    <Button size={'middle'} ghost type='primary'
                            onClick={() => setTableOpen(TableOpen.addDrawer)}>
                        {DrawerTitle.CREATE_GUEST}
                    </Button>
                </Space>
                <Table bordered rowSelection={rowSelection} rowKey="id" columns={guestsColumns}
                       dataSource={guests}/>
                <DataDrawer open={drawerOpen} drawerTitle={drawerTitle} onClose={closeAll}>
                    {tableOpen === TableOpen.editDrawer && selectedGuest &&
                        <EditGuestForm key={DrawerTitle.EDIT_GUEST} editGuest={selectedGuest}
                                       handleSubmitForm={handleEditGuest}/>}
                    {tableOpen === TableOpen.addDrawer &&
                        <EditGuestForm key={DrawerTitle.CREATE_GUEST} handleSubmitForm={handleCreateGuest}/>}
                </DataDrawer>
                <Modal title={modalText}
                       open={tableOpen === TableOpen.removeConfirm}
                       confirmLoading={confirmLoading}
                       onOk={handleDeleteGuest}
                       onCancel={closeAll}/>
            </>
        )
    }
;

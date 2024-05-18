import React, {Dispatch, SetStateAction} from "react";
import {Drawer} from "antd/lib";
import {Guest} from "@/types/guest.type";


export enum DrawerTitle {
    CREATE_GUEST = 'Create guest',
    EDIT_GUEST = 'Edit guest',
    CREATE_INVITE_GROUP = 'Create invite group',
    EDIT_INVITE_GROUP = 'Edit invite group',
}

export type DataDrawerProps = {
    open: boolean;
    drawerTitle: DrawerTitle;
    onClose: () => void
    children?: React.ReactNode;
};

export const DataDrawer = ({open, drawerTitle, onClose, children}: DataDrawerProps) => (
    <Drawer
        title={drawerTitle}
        placement={'right'}
        closable={true}
        onClose={onClose}
        open={open}
        key={'right'}
    >
        {children}
    </Drawer>
);

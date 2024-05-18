import {getAccessToken} from "@utils";
import {getAllGuestsOnServer, getAllGuestsWithoutInviteGroup} from "@api";
import {GuestTable, PanelMenu} from "@admin-components";
import {createContext, useMemo, useState} from "react";
import {notification} from "antd";
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {AuthUser} from "@/types/auth.type";
import {Guest} from "@/types/guest.type";
import {getAllInviteGroupsOnServer} from "@/app/service/api/inviteGroups.api";
import {InviteGroup} from "@/types/inviteGroups.type";
import {InviteGroupTable} from "@/app/admin/components/panel/inviteGroups";

const Context = createContext({} as any);

export const isLoggedInInServerSide = (session: any) => {
    return session?.user?.role === 'admin';
}

export async function getServerSideProps(context: any) {
    const session = await getServerSession(context.req, context.res, authConfig);
    const accessToken =  getAccessToken(session?.user as AuthUser);
    const inviteGroups = await getAllInviteGroupsOnServer(accessToken);

    return {
        props: {serverInviteGroups: inviteGroups || [], session: session || null}
    }
}

export default function InviteGroup({serverInviteGroups}: any) {
    const [inviteGroups, setInviteGroups] = useState<InviteGroup[]>(serverInviteGroups || []); // [1
    const [notificationApi, contextHolder] = notification.useNotification();
    const contextValue = useMemo(() => ({} as any), []);

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <PanelMenu>
                <InviteGroupTable inviteGroups={inviteGroups} setInviteGroups={setInviteGroups} notificationApi={notificationApi}  />
            </PanelMenu>
        </Context.Provider>
    )
}

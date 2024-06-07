import {getAccessToken} from "@utils";
import {PanelMenu} from "@admin-components";
import {createContext, useMemo, useState} from "react";
import {notification} from "antd";
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {AuthUser, InviteGroup} from "@types";
import {getAllInviteGroupsOnServer} from "@/app/service/api/inviteGroups.api";
import {InviteGroupTable} from "@/app/admin/components/panel/inviteGroups";

const Context = createContext({} as any);

export const isLoggedInInServerSide = (session: any) => {
    return session?.user?.role === 'admin';
}

export async function getServerSideProps(context: any) {
    const session = await getServerSession(context.req, context.res, authConfig);
    const isAdmin = (session?.user as AuthUser)?.role === 'admin'

    if (!isAdmin) {
        return {
            redirect: {
                destination: '/invite',
                permanent: false,
            },
        }
    }

    const accessToken = getAccessToken(session?.user as AuthUser);
    const inviteGroups = await getAllInviteGroupsOnServer(accessToken);

    return {
        props: {
            serverInviteGroups: inviteGroups || [],
            publicUrl: process.env.NEXT_PRODUTION_URL,
            session: session || null
        }
    }
}

export default function InviteGroup({serverInviteGroups, publicUrl}: any) {
    const [inviteGroups, setInviteGroups] = useState<InviteGroup[]>(serverInviteGroups || []); // [1
    const [notificationApi, contextHolder] = notification.useNotification();
    const contextValue = useMemo(() => ({} as any), []);

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <PanelMenu>
                <InviteGroupTable publicUrl={publicUrl} inviteGroups={inviteGroups} setInviteGroups={setInviteGroups}
                                  notificationApi={notificationApi}/>
            </PanelMenu>
        </Context.Provider>
    )
}

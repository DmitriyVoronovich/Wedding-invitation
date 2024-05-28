import {createContext, useMemo, useState} from "react";
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {getAccessToken} from "@utils";
import {AuthUser, InviteGroup} from "@types";
import {notification} from "antd";
import {PanelMenu} from "@admin-components";
import {SurveyResponseTable} from "@/app/admin/components/panel/surveyResponse";
import {getAllInviteGroupsOnServer} from "@/app/service/api/inviteGroups.api";

const Context = createContext({} as any);

export async function getServerSideProps(context: any) {
    const session = await getServerSession(context.req, context.res, authConfig);
    const accessToken = getAccessToken(session?.user as AuthUser);
    const inviteGroups = await getAllInviteGroupsOnServer(accessToken);

    return {
        props: {serverInviteGroups: inviteGroups || [], session: session || null}
    }
}

export default function SurveyResponse({serverInviteGroups}: any) {
    const [inviteGroups, setInviteGroups] = useState<InviteGroup[]>(serverInviteGroups || []); // [1
    const [notificationApi, contextHolder] = notification.useNotification();
    const contextValue = useMemo(() => ({} as any), []);

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <PanelMenu>
                <SurveyResponseTable inviteGroups={inviteGroups}/>
            </PanelMenu>
        </Context.Provider>
    )
}

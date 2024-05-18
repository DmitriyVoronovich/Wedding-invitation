import {getAccessToken} from "@utils";
import {getAllGuestsOnServer} from "@api";
import {GuestTable, PanelMenu} from "@admin-components";
import {createContext, useMemo, useState} from "react";
import {notification} from "antd";
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {AuthUser} from "@/types/auth.type";
import {Guest} from "@/types/guest.type";

const Context = createContext({} as any);

export const isLoggedInInServerSide = (session: any) => {
    return session?.user?.role === 'admin';
}

export async function getServerSideProps(context: any) {
    const session = await getServerSession(context.req, context.res, authConfig);
    const accessToken = getAccessToken(session?.user as AuthUser);
    const guests = await getAllGuestsOnServer(accessToken);

    return {
        props: {serverGuests: guests || [], session: session || null}
    }
}

export default function Guests({serverGuests}: any) {
    const [guests, setGuests] = useState<Guest[]>(serverGuests || []); // [1
    const [notificationApi, contextHolder] = notification.useNotification();
    const contextValue = useMemo(() => ({} as any), []);

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <PanelMenu>
                <GuestTable notificationApi={notificationApi} guests={guests} setGuests={setGuests}/>
            </PanelMenu>
        </Context.Provider>
    )
}

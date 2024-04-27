import {getAccessTokenOnServerSide} from "@/app/service/utils";
import {getAllGuests} from "@/app/service/api/guests.api";
import {PanelMenu} from "@/admin-components/panel/menu";
import GuestTable from "@/admin-components/panel/guests/guestTable";

export async function getServerSideProps(context: any) {
    const accessToken = await getAccessTokenOnServerSide(context);
    const guests = await getAllGuests(accessToken);

    return {
        props: {guests: guests || []}
    }
}

export default function Guests({guests}: any) {

    console.log(guests)
    return (
        <PanelMenu>
            <GuestTable/>
        </PanelMenu>
    )
}

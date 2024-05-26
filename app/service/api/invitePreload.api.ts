import {getResponseJson} from "@/app/service/api/utils.api";
import {InvitePreload} from "@/types/inviteGroups.type";

export const getInvitePreloadOnServer = async (inviteId: string) => {
    try {
        const json = await getResponseJson({
            server: true,
            url: `/api/data/invitePreload/${inviteId}`
        });
        const {data} = json;

        return data as InvitePreload;
    } catch (error) {
        return null;
    }
}

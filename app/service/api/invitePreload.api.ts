import {getResponseJson, postRequestJson} from "@/app/service/api/utils.api";
import {InvitePreload} from "@/types/inviteGroups.type";
import {CreateOrEditGuest, Guest} from "@/types/guest.type";

export const getInvitePreloadOnServer = async (inviteId: string) => {
    try {
        const json = await getResponseJson({
            server: true,
            url: `/api/data/inviteInfo/${inviteId}`
        });
        const {data} = json;

        return data as InvitePreload;
    } catch (error) {
        return null;
    }
}

export const surveyResponse = async (answer: any): Promise<any | null> => {
    try {
        const json = await postRequestJson({
            server: false,
            url: "/api/data/inviteInfo/surveyResponse1",
            body: answer
        });

        return json;
    } catch (error) {
        return null;
    }
}
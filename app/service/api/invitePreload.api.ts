import {getResponseJson, postRequestJson} from "@/app/service/api/utils.api";
import {InvitePreload} from "@types";

export const getInvitePreloadOn = async (inviteId: string, server: boolean ) => {
    try {
        const json = await getResponseJson({
            server,
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
        return await postRequestJson({
            server: false,
            url: "/api/data/inviteInfo/surveyResponse",
            body: answer
        });
    } catch (error) {
        return null;
    }
}

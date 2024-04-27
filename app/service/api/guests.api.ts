import {Guest} from "@/types/guest.type";
import {getResponseJson} from "@/app/service/api/utils.api";

export const getAllGuests = async (accessToken: string) => {
    try {
        const json = await getResponseJson({url: "/api/guests", accessToken});
        const {data} = json;

        return data as Guest[];
    } catch (error) {
        return null;
    }
}


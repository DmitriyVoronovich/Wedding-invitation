import { CreateOrEditGuest, Guest} from "@types";
import {deleteRequestJson, getResponseJson, postRequestJson, putRequestJson} from "@/app/service/api/utils.api";

export const getAllGuestsOnServer = async (accessToken: string) => {
    try {
        const json = await getResponseJson({
            server: true,
            url: `/api/data/guests`,
            accessToken
        });
        const {data} = json;

        return data as Guest[];
    } catch (error) {
        return null;
    }
}

export const createGuest = async (accessToken: string, addGuest: CreateOrEditGuest): Promise<Guest | null> => {
    try {
        const json = await postRequestJson<CreateOrEditGuest>({
            server: false,
            url: "/api/data/guests",
            accessToken,
            body: addGuest
        });
        const {data} = json;

        return data as Guest;
    } catch (error) {
        return null;
    }
}

export const editGuest = async (accessToken: string, editGuest: CreateOrEditGuest): Promise<Guest | null> => {
    try {
        const json = await putRequestJson<CreateOrEditGuest>({
            server: false,
            url: "/api/data/guests",
            accessToken,
            body: editGuest
        });
        const {data} = json;

        return data as Guest;
    } catch (error) {
        return null;
    }
}


export const deleteGuest = async (accessToken: string, id: string): Promise<boolean> => {
    try {
        const json = await deleteRequestJson({
            server: false,
            url: `/api/data/guests/${id}`,
            accessToken
        });
        const {data} = json;

        return !!data;
    } catch (error) {
        return false;
    }
}

export const getAllGuestsWithoutInviteGroup = async (accessToken: string) => {
    try {
        const json = await getResponseJson({
            server: false,
            url: `/api/data/guests?inviteGroup=empty`,
            accessToken
        });
        const {data} = json;

        return data as Guest[];
    } catch
        (error) {
        return null;
    }
}

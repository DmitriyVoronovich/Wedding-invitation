import { CreateOrEditGuest, Guest} from "@/types/guest.type";
import {deleteRequestJson, getResponseJson, postRequestJson, putRequestJson} from "@/app/service/api/utils.api";

export const getAllGuestsOnServer = async (accessToken: string) => {
    try {
        const json = await getResponseJson({
            server: true,
            url: `/api/data/guests`,
            accessToken
        });
        //
        // const json = {
        //     "data": [
        //         {
        //             "id": "66421a418778d1724d654f03",
        //             "createdAt": "2024-05-13T13:48:49.586Z",
        //             "updatedAt": "2024-05-13T13:48:49.586Z",
        //             "role": "guest",
        //             "isRemoved": false,
        //             "inviteId": "6098fe17-d26e-457d-b59a-878a94af8978",
        //             "firstName": "Павел",
        //             "lastName": "Ролич",
        //             "side": "husband",
        //             "isAdult": true,
        //             "createdBy": "voronovich.pavel99@gmail.com",
        //             "modifyBy": null
        //         },
        //         {
        //             "id": "66421fcb8778d1724d654f04",
        //             "createdAt": "2024-05-13T14:12:27.942Z",
        //             "updatedAt": "2024-05-13T14:12:27.942Z",
        //             "role": "guest",
        //             "isRemoved": false,
        //             "inviteId": "3d7fdede-135f-4164-8949-647ce08b0025",
        //             "firstName": "Роман",
        //             "lastName": "Гурский",
        //             "side": "husband",
        //             "isAdult": true,
        //             "createdBy": "voronovich.pavel99@gmail.com",
        //             "modifyBy": null
        //         },
        //         {
        //             "id": "66421fd98778d1724d654f05",
        //             "createdAt": "2024-05-13T14:12:41.953Z",
        //             "updatedAt": "2024-05-13T14:12:41.953Z",
        //             "role": "guest",
        //             "isRemoved": false,
        //             "inviteId": "ab1c2e6e-51e1-4d1d-9ffa-d3c037805cd0",
        //             "firstName": "Алеся",
        //             "lastName": "Лобач",
        //             "side": "wife",
        //             "isAdult": true,
        //             "createdBy": "voronovich.pavel99@gmail.com",
        //             "modifyBy": null
        //         }
        //     ],
        //     "error": null
        // };
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

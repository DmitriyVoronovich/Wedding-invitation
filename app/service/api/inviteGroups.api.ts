import {CreateOrEditGuest, Guest} from "@/types/guest.type";
import {deleteRequestJson, getResponseJson, postRequestJson, putRequestJson} from "@/app/service/api/utils.api";
import {InviteGroup} from "@/types/inviteGroups.type";

export const getAllInviteGroupsOnServer = async (accessToken: string) => {
    try {
        const json = await getResponseJson({
            server: true,
            url: `/api/data/inviteGroups`,
            accessToken
        });
        // const json = {
        //     data: [
        //         {
        //             "id": "65c6577c2e89361ff9fd4c62",
        //             "createdAt": "2024-02-09T16:49:00.688Z",
        //             "updatedAt": "2024-02-09T16:49:00.688Z",
        //             "groupName": "Яхимчики",
        //             "invitation": {
        //                 "checkSlip": false,
        //                 "checkTransport": true
        //             },
        //             "createdBy": "voronovich.pavel99@gmail.com",
        //             "modifyBy": null,
        //             "guests": []
        //         },
        //         {
        //             "id": "65caa241c215ac0117fa0234",
        //             "createdAt": "2024-02-12T22:57:05.117Z",
        //             "updatedAt": "2024-02-12T22:57:05.117Z",
        //             "groupName": "Яхимчики 2",
        //             "invitation": {
        //                 "inviteTitle": "Дорогие",
        //                 "checkSlip": false,
        //                 "checkTransport": true
        //             },
        //             "createdBy": "voronovich.pavel99@gmail.com",
        //             "modifyBy": null,
        //             "guests": []
        //         },
        //         {
        //             "id": "65caa28dfba056e3038a1c48",
        //             "createdAt": "2024-02-12T22:58:21.177Z",
        //             "updatedAt": "2024-02-12T23:16:06.954Z",
        //             "groupName": "Яхимчики 3",
        //             "invitation": {
        //                 "inviteTitle": "Дорогие",
        //                 "checkSlip": false,
        //                 "checkTransport": true
        //             },
        //             "createdBy": "voronovich.pavel99@gmail.com",
        //             "modifyBy": "voronovich.pavel99@gmail.com",
        //             "guests": [
        //                 {
        //                     "id": "65c8ec6ac789d85fd5f611b8",
        //                     "createdAt": "2024-02-11T15:48:58.459Z",
        //                     "updatedAt": "2024-05-11T22:09:37.098Z",
        //                     "role": "guest",
        //                     "isRemoved": true,
        //                     "inviteId": "623c9ae0-183a-479f-b36d-b675d85b28dc",
        //                     "firstName": "Виталий 123",
        //                     "lastName": "Касперко",
        //                     "side": "wife",
        //                     "isAdult": true,
        //                     "inviteGroup": "65caa28dfba056e3038a1c48",
        //                     "createdBy": "voronovich.pavel99@gmail.com",
        //                     "modifyBy": "voronovich.pavel99@gmail.com"
        //                 }
        //             ]
        //         }
        //     ]
        // };
        const {data} = json;

        return data as InviteGroup[];
    } catch
        (error) {
        return null;
    }
}

export const createInviteGroup = async (accessToken: string, addGuest: CreateOrEditGuest): Promise<Guest | null> => {
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

export const editInviteGroup = async (accessToken: string, editGuest: CreateOrEditGuest): Promise<Guest | null> => {
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


export const deleteInviteGroup = async (accessToken: string, id: string): Promise<boolean> => {
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

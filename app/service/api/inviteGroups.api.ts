import {CreateOrEditGuest, Guest} from "@/types/guest.type";
import {deleteRequestJson, getResponseJson, postRequestJson, putRequestJson} from "@/app/service/api/utils.api";
import {CreateOrEditInviteGroup, InviteGroup} from "@/types/inviteGroups.type";

export const getAllInviteGroupsOnServer = async (accessToken: string) => {
    try {
        const json = await getResponseJson({
            server: true,
            url: `/api/data/inviteGroups`,
            accessToken
        });
        const {data} = json;

        return data as InviteGroup[];
    } catch
        (error) {
        return null;
    }
}

export const createInviteGroup = async (accessToken: string, addInviteGroup: CreateOrEditInviteGroup): Promise<InviteGroup | null> => {
    try {
        // const json = await postRequestJson<CreateOrEditInviteGroup>({
        //     server: false,
        //     url: "/api/data/inviteGroups",
        //     accessToken,
        //     body: addGuest
        // });
        // const {data} = json;
        console.log(addInviteGroup)
        return {addInviteGroup} as InviteGroup;
    } catch (error) {
        return null;
    }
}

export const editInviteGroup = async (accessToken: string, editedInviteGroup: CreateOrEditInviteGroup): Promise<InviteGroup | null> => {
    try {
        // const json = await putRequestJson<CreateOrEditInviteGroup>({
        //     server: false,
        //     url: "/api/data/inviteGroups",
        //     accessToken,
        //     body: editedInviteGroup
        // });
        // const {data} = json;

        console.log(editedInviteGroup)
        return {} as InviteGroup;
    } catch (error) {
        return null;
    }
}


export const deleteInviteGroup = async (accessToken: string, id: string): Promise<boolean> => {
    try {
        // const json = await deleteRequestJson({
        //     server: false,
        //     url: `/api/data/guests/${id}`,
        //     accessToken
        // });
        // const {data} = json;
        console.log(id)
        return !!{};
    } catch (error) {
        return false;
    }
}

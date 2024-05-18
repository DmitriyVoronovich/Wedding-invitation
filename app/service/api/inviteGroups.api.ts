import {deleteRequestJson, getResponseJson, postRequestJson, putRequestJson} from "@/app/service/api/utils.api";
import {CreateInviteGroupRequest, EditInviteGroupRequest, InviteGroup} from "@/types/inviteGroups.type";

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

export const createInviteGroup = async (accessToken: string, addInviteGroup: CreateInviteGroupRequest): Promise<InviteGroup | null> => {
    try {
        const json = await postRequestJson<CreateInviteGroupRequest>({
            server: false,
            url: "/api/data/inviteGroups",
            accessToken,
            body: addInviteGroup
        });
        const {data} = json;

        return data as InviteGroup;
    } catch (error) {
        return null;
    }
}

export const editInviteGroup = async (accessToken: string, editedInviteGroup: EditInviteGroupRequest): Promise<InviteGroup | null> => {
    try {
        const json = await putRequestJson<EditInviteGroupRequest>({
            server: false,
            url: "/api/data/inviteGroups",
            accessToken,
            body: editedInviteGroup
        });
        const {data} = json;

        return data as InviteGroup;
    } catch (error) {
        return null;
    }
}


export const deleteInviteGroup = async (accessToken: string, id: string): Promise<boolean> => {
    try {
        const json = await deleteRequestJson({
            server: false,
            url: `/api/data/inviteGroups/${id}`,
            accessToken
        });
        const {data} = json;

        return !!data;
    } catch (error) {
        return false;
    }
}

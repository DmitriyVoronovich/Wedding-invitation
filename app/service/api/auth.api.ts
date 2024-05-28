import {postRequestJson} from "@/app/service/api/utils.api";

type SingInAdminData = {
    email: string;
    password: string;
}

type SingInGuestsData = {
    inviteId: string;
}

export const singInAdmin = async (loginData: SingInAdminData) => {
    return await postRequestJson<SingInAdminData>({
        server: true,
        url: '/api/data/auth/login/admin',
        body: loginData
    });
}

export const singInGuests = async (loginData: SingInGuestsData) => {
    return await postRequestJson<SingInGuestsData>({
        server: true,
        url: '/api/data/auth/login/guests',
        body: loginData
    });
}

import {postRequestJson} from "@/app/service/api/utils.api";

type SingInAdminData = {
    email: string;
    password: string;
}

export const singInAdmin = async (loginData: SingInAdminData) => {
    return await postRequestJson<SingInAdminData>({
        server: true,
        url: '/api/data/auth/login/admin',
        body: loginData
    });
}

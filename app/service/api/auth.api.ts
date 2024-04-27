import {postRequestJson} from "@/app/service/api/utils.api";

type SingInAdminData = {
    email: string;
    password: string;
}

export const singInAdmin = async (loginData: SingInAdminData) => {
    const response = await postRequestJson<SingInAdminData>({
        url: "/api/auth/login/admin",
        body: loginData
    });

    return await response.json();
}

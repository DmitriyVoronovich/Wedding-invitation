import {AuthUser} from "@/types/auth.type";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {getAccessToken} from "@/app/service/utils";

const isAdminLoggedInOnClientSide = (session: any) => (session?.data?.user as AuthUser)?.role === 'admin';

export const useAdminAccessToken = (): string => {
    const session = useSession();
    const router = useRouter();

    if (isAdminLoggedInOnClientSide(session)) {
        return getAccessToken(session?.data?.user as AuthUser);
    }

    router.push('/admin/login');
    return '';
}

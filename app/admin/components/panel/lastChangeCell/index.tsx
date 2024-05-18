import {UserType} from "@/types/user.type";

const padL = (nr: number, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

const transformDate = (dt: Date) =>
    `${padL(dt.getMonth() + 1)}.${padL(dt.getDate())}.${dt.getFullYear()} ${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())}`;

export const LastChangeCell = ({objectData}: { objectData: UserType }) =>
    (objectData.modifyBy && objectData.updatedAt)
        ? <>Last modify by <b>{objectData.modifyBy}</b> at <b>{transformDate(new Date(objectData.updatedAt))}</b></>
        : <>Created by <b>{objectData.createdBy}</b> at <b>{transformDate(new Date(objectData.createdAt))}</b></>;

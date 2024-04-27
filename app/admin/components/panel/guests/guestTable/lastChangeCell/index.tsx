import {Guest} from "@/types/guest.type";

const padL = (nr: number, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

const transformDate = (dt: Date) =>
    `${padL(dt.getMonth() + 1)}.${padL(dt.getDate())}.${dt.getFullYear()} ${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())}`;

export const LastChangeCell = ({guest}: { guest: Guest }) =>
    (guest.modifyBy && guest.updatedAt)
        ? <>Last modify by <b>{guest.modifyBy}</b> at <b>{transformDate(new Date(guest.updatedAt))}</b></>
        : <>Created by <b>{guest.createdBy}</b> at <b>{transformDate(new Date(guest.createdAt))}</b></>;

import {NotificationInstance} from "antd/es/notification/interface";
import {Guest, GuestGender, InviteGroup, InvitePreload} from "@types";

const COPY_MESSAGE = {
    success: 'Copy to clipboard',
    error: 'Could not copy to clipboard'
};

const padL = (nr: number, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

export const transformDate = (dt: Date) =>
    `${padL(dt.getMonth() + 1)}.${padL(dt.getDate())}.${dt.getFullYear()} ${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())}`;


export const prepareNotificationMessage = (notificationApi: NotificationInstance) =>
    (success: boolean,
     message: {
         success: string,
         error: string
     },
     callback: {
         success?: Function,
         error?: Function
     }) => {
        const fieldName = success ? 'success' : 'error';
        notificationApi[fieldName]({message: message[fieldName], placement: 'topRight'});
        callback?.[fieldName]?.();
    }

export const inviteText = (inviteGroup?: InviteGroup | InvitePreload) => {
    if (!inviteGroup?.guests?.length) {
        return 'Дорогие друзья и близкие!';
    }

    if (inviteGroup.guests.length === 1) {
        return `${inviteGroup.guests[0].gender === GuestGender.male ? 'Дорогой ' : 'Дорогая '} ${inviteGroup.guests[0].firstName}!`;
    }

    return `Дорогие ${inviteGroup.guests.map(guest => guest.firstName).join(', ').replace(/,([^,]*)$/, ' и$1')}!`;
}

export const isOneGuest = (inviteGroup?: InviteGroup | InvitePreload) =>
    inviteGroup?.guests?.length === 1;

export const createCopyIntoBuffer = (publicUrl: string, notificationMessage: (success: boolean, message: {
    success: string,
    error: string
}, callback: {
    success?: Function | undefined,
    error?: Function | undefined
}) => void,) => async (guest: Guest) => {
    const copyInviteUrl = `${publicUrl}/invite/${guest.inviteId}`;

    navigator.clipboard.writeText(copyInviteUrl).then(function () {
        notificationMessage(true, COPY_MESSAGE, {});
    }, function () {
        notificationMessage(false, COPY_MESSAGE, {});
    });
}

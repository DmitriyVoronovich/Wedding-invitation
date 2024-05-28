import {NotificationInstance} from "antd/es/notification/interface";
import {GuestGender, InviteGroup, InvitePreload} from "@types";

export const prepareNotificationMessage = (notificationApi: NotificationInstance) => (success: boolean,
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

import {NotificationInstance} from "antd/es/notification/interface";
import {InviteGroup, InvitePreload} from "@/types/inviteGroups.type";
import {GuestGender} from "@/types/guest.type";

export const prepareNotificationMessage = (notificationApi: NotificationInstance) => (success: boolean,
                                                                                      message: { success: string, error: string },
                                                                                      callback: {
                                                      success?: Function,
                                                      error?: Function
                                                  }) => {
    const fieldName = success ? 'success' : 'error';
    notificationApi[fieldName]({message: message[fieldName], placement: 'topRight'});
    callback?.[fieldName]?.();
}

export const inviteText = (inviteGroup: InviteGroup | InvitePreload) => {
    if (!inviteGroup?.guests?.length) {
        return 'Дорогие гости!';
    }

    if (inviteGroup.guests.length === 1) {
        return `${inviteGroup.guests[0].gender === GuestGender.male ? 'Дорогой ' : 'Дорогая '} ${inviteGroup.guests[0].firstName}!`;
    }

    return `Дорогие ${inviteGroup.guests.map(guest => guest.firstName).join(', ').replace(/,([^,]*)$/, ' и$1')}!`;
}

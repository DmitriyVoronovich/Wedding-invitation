import {Guest} from "@/types/guest.type";
import {UserType} from "@/types/user.type";

export type Invitation = {
    inviteTitle: string;
    checkSlip: boolean;
    checkTransport: boolean;
};

type InviteGroup = UserType & {
    id: string;
    groupName: string;
    guests: Guest[];
    invitation: Invitation;
};

type CreateOrEditInviteGroup = {
    id?: string;
    groupName: string;
    updateGuests: { [key: string]: boolean };
    invitation: Invitation;
};

export type {
    InviteGroup,
    CreateOrEditInviteGroup
};

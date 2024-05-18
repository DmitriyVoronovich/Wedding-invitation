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

type ChangedGuests = {
    [key: string]: boolean;
};

type CreateOrEditInviteGroup = {
    id?: string;
    groupName: string;
    guests: string[];
    updateGuests: ChangedGuests;
    invitation: Invitation;
};

type EditInviteGroupRequest = Omit<CreateOrEditInviteGroup, 'guests'>;

type CreateInviteGroupRequest = Omit<CreateOrEditInviteGroup, 'updateGuests'>


export type {
    ChangedGuests,
    InviteGroup,
    CreateOrEditInviteGroup,
    EditInviteGroupRequest,
    CreateInviteGroupRequest
};

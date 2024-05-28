import {UserType} from "./user.type";
import {InvitePreload} from "./inviteInfo.type";

export type Invitation = {
    checkSlip: boolean;
    transportFrom: string;
    checkTransport: boolean;
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

type InviteGroup = UserType & InvitePreload;

type EditInviteGroupRequest = Omit<CreateOrEditInviteGroup, 'guests'>;

type CreateInviteGroupRequest = Omit<CreateOrEditInviteGroup, 'updateGuests'>


export type {
    InviteGroup,
    ChangedGuests,
    CreateOrEditInviteGroup,
    EditInviteGroupRequest,
    CreateInviteGroupRequest
};

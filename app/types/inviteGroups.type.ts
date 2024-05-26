import {Guest} from "@/types/guest.type";
import {UserType} from "@/types/user.type";

export type Invitation = {
    inviteTitle: string;
    checkSlip: boolean;
    checkTransport: boolean;
};

type InvitePreload = {
    id: string;
    groupName: string;
    guests: Guest[];
    invitation: Invitation;
    surveyResponses: SurveyResponses;
}

type InviteGroup = UserType & InvitePreload;

type SurveyResponses = {
    presentGuests: string[];
    startPlace: string;
    isPrivateTransport: boolean | null;
    presentOnSecondDay: boolean | null;
    needSleepPlace: boolean | null;
    likeDrinks: boolean | null;
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
    InvitePreload,
    CreateOrEditInviteGroup,
    EditInviteGroupRequest,
    CreateInviteGroupRequest
};

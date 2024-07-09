import {Guest} from "./guest.type";
import {Invitation} from "./inviteGroups.type";
import {BaseType} from "./user.type";

type InvitePreload = {
    id: string;
    groupName: string;
    guests: Guest[];
    invitation: Invitation;
    surveyResponses: SurveyResponses;
}

type SurveyResponses = BaseType & {
    presentGuests: string[];
    noAlonePresent: boolean | null;
    startPlace: string;
    isPrivateTransport: boolean | null;
    presentOnSecondDay: string[] | null;
    noAloneOnSecondDay: boolean | null;
    needSleepPlace: boolean | null;
    likeDrinks: string[] | null;
};


export type {
    InvitePreload
}

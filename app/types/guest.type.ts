import {UserType} from './user.type';

enum GuestSide {
    wife = 'wife',
    husband = 'husband'
}

enum GuestGender {
    male = 'male',
    female = 'female'
}

type Guest = UserType & {
    firstName: string;
    lastName: string;
    side: GuestSide;
    gender: GuestGender;
    isAdult: boolean;
    inviteId: string;
    inviteGroup?: string
};

type CreateOrEditGuest = {
    id?: string;
    firstName: string;
    lastName: string;
    isAdult: boolean;
    side: GuestSide;
    gender: GuestGender;
};

export {GuestSide, GuestGender};

export type {Guest, CreateOrEditGuest};

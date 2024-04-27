import {UserType} from './user.type';

enum GuestSide {
    wife = 'wife',
    husband = 'husband'
}

type Guest = UserType & {
    firstName: string;
    lastName: string;
    side: GuestSide;
    isAdult: boolean;
    inviteId: string;
    inviteGroup?: string
    createdBy: string;
    modifyBy?: string;
};


export {GuestSide};

export type {Guest};

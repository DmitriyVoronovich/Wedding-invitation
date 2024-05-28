export enum Role {
  guest = 'guest',
  admin = 'admin'
}

type BaseType = {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  modifyBy?: string;
}

type UserType = BaseType & {
  id: string; // uuid,
  role: Role;
};

export type {
  BaseType,
  UserType
}

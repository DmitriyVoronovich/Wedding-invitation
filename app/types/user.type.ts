export enum Role {
  guest = 'guest',
  admin = 'admin'
}

export type UserType = {
  id: string; // uuid,
  role: Role;
  createdAt: string;
  updatedAt: string;
};

import { IUser } from "../../../../shared/interfaces/user.types";

export interface IUserEditInput extends Omit<IUser, '_id' | 'createdAt'> {}
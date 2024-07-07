import { IUser } from "@/shared/interfaces/user.types";

export interface IProfileInput extends Pick<IUser, 'email' | 'password'> {}
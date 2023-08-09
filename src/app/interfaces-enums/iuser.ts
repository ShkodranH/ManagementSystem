import { Profession } from "./profession";

export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    creditCard: string,
    profession: Profession
}
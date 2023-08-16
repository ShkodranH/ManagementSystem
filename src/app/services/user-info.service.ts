import { Injectable } from "@angular/core";
import { IUser } from "../interfaces-enums/iuser";
import { Profession } from "../interfaces-enums/profession";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: IUser[] = [];
}
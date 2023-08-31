import { Injectable } from "@angular/core";
import { Gender, IUser, Profession, Role } from '../users.config';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: IUser[] = [
        {
            id: 1,
            username: 'shkodi',
            email: 'sh@gmail.com',
            password: 'a',
            creditCard: '1234123412341234',
            gender: Gender.MALE,
            role: Role.USER,
            profession: Profession.FRONT
        },
        {
            id: 2,
            username: 'rina',
            email: 'rh@gmail.com',
            password: 'a',
            creditCard: '1234123412341234',
            gender: Gender.FEMALE,
            role: Role.USER,
            profession: Profession.FRONT
        },
        {
            id: 3,
            username: 'fatbardh',
            email: 'fd@gmail.com',
            password: 'a',
            creditCard: '1234123412341234',
            gender: Gender.MALE,
            role: Role.USER,
            profession: Profession.BACK
        },
        {
            id: 4,
            username: 'nedim',
            email: 'nf@gmail.com',
            password: 'a',
            creditCard: '1234123412341234',
            gender: Gender.MALE,
            role: Role.USER,
            profession: Profession.FRONT
        },
        {
            id: 5,
            username: 'sh',
            email: 's@gmail.com',
            password: 'a',
            creditCard: '1234123412341234',
            gender: Gender.MALE,
            role: Role.ADMIN
        }
    ];
    currentUser: IUser;
    virtualProfile: IUser;
    isLoggedIn: boolean = false;
    userRole: Role = Role.USER;

    delete(id: number): void {
        this.user = this.user.filter(obj => id !== obj.id);
    }

    filterData(jobPosition): IUser[] {
        return this.user.filter(obj => obj.profession === jobPosition)
    }

    loginUser(usernameOrEmail: string, password: string): boolean {
        for(let obj of this.user) {
            if(([obj.username, obj.email].includes(usernameOrEmail)) && password === obj.password) {
                this.isLoggedIn = true;
                this.userRole = obj.role;
                this.currentUser = obj;
                return true;
            }
        }
        return false;
    }
}
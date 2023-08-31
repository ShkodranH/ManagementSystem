export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    creditCard: string,
    gender: Gender,
    role: Role,
    profession?: Profession
}

export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female'
}

export enum Role {
    USER = 'User',
    ADMIN = 'Admin'
}

export enum Profession {
    FRONT = 'Front-End',
    BACK = 'Back-End',
    FULL = 'Full Stack'
}
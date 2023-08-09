import { Component } from '@angular/core';
import { IUser } from '../interfaces-enums/iuser';
import { Profession } from '../interfaces-enums/profession';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  userInfo: IUser[] = [
    {
      id: 4,
      username: 'Rina',
      email: 'rina.hasani@gmail.com',
      password: '12345678',
      creditCard: '1234567887654321',
      profession: Profession.FULL
    },
    {
      id: 1,
      username: 'Shkodi',
      email: 'shkodi.hasani@gmail.com',
      password: '12345678',
      creditCard: '1234567887654321',
      profession: Profession.FRONT
    },
    {
      id: 2,
      username: 'Nedimi',
      email: 'shkodi.hasani@gmail.com',
      password: '12345678',
      creditCard: '1234567887654321',
      profession: Profession.BACK
    },
    {
      id: 3,
      username: 'Fatbardhi',
      email: 'shkodi.hasani@gmail.com',
      password: '12345678',
      creditCard: '1234567887654321',
      profession: Profession.FULL
    }
  ]

  deleteUser(userId: number) {

  }
}

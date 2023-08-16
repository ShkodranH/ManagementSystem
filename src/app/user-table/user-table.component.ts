import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces-enums/iuser';
import { UserService } from '../services/user-info.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userInfo: IUser[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userInfo = this.userService.user;
  }

  deleteUser(id: number) {
    this.userInfo = this.userInfo.filter(user => user.id !== id)
  }
}

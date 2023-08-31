import { Component } from '@angular/core';
import { IUser } from '../users.config';
import { UserService } from '../services/user-info.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private userService: UserService) {}

  frontEndUsers: IUser[] = this.userService.filterData('Front-End');
  backEndUsers: IUser[] = this.userService.filterData('Back-End');
  fullStackUsers: IUser[] = this.userService.filterData('Full Stack');
}

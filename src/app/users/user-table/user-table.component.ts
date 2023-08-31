import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../users.config';
import { UserService } from '../../services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userInfo: IUser[] = [];
  columnNames: string[] = [
    'ID',
    'Username',
    'Email',
    'Password',
    'Credit Card',
    'Profession',
    'Action'
  ]
  @Input() users: IUser[] = [];
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userInfo = this.userService.user;
    this.userService.virtualProfile = null;
  }

  deleteUser(id: number): void {
    this.userService.delete(id);
    this.userInfo = this.userService.user;
  }

  showProfile(userObj: IUser): void {
    this.userService.virtualProfile = userObj;
    this.router.navigate(['profile']);
  }
}

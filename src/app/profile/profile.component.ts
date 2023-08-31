import { Component } from '@angular/core';
import { UserService } from '../services/user-info.service';
import { IUser, Role } from '../users.config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  role = Role;
  constructor(protected userService: UserService) {}

  userData: IUser = (!!this.userService.virtualProfile) ? 
    this.userService.virtualProfile : 
    this.userService.currentUser;
  
  randomNumber: number = Math.ceil(Math.random() * 4);
  generateAvatar(gender: string): string {
    return '../../assets/avatars/' + gender.toLowerCase() + this.randomNumber + '.png';
  }
}

import { Component } from '@angular/core';
import { UserService } from './services/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ManagementSystem';
  constructor(private userService: UserService) {}

}

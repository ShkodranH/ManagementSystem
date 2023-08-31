import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-info.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  name: string = '';
  isLogin: boolean = null;

  constructor(
    protected userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usernameOrEmail: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  submitForm(): void {
    if(this.loginForm.valid) {
      this.isLogin = this.userService.loginUser(
        this.loginForm.get('usernameOrEmail').value, 
        this.loginForm.get('password').value
      );
      if(this.isLogin)
        this.router.navigate(['users']);
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }
}

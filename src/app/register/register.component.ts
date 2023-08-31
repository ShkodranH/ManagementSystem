import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../services/user-info.service';
import { Gender, IUser, Profession, Role } from '../users.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profession = Profession;
  role = Role;
  gender = Gender;
  userData: IUser;
  registerForm: FormGroup;
  counter: number = 1;
  name: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.pattern('^(?=[a-zA-Z])[a-zA-Z0-9-]{3,30}')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[A-Z]).{8,100}')]),
      confirmPass: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[A-Z]).{8,100}')]),
      creditCard: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{16}')]),
      gender: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
      profession: new FormControl(null, Validators.required)
    }, 
    [
      this.checkPassword,
      this.checkUsername,
      this.checkEmail
    ]);
  }

  checkPassword(control: FormControl): ValidationErrors {
    if(control.get('password').value !== control.get('confirmPass').value)
      return {checkPassword: true};
    return null;
  }
  checkUsername = (control: FormControl): ValidationErrors => {
    let usernameArray = this.userService.user.map(obj => obj.username);
    if(usernameArray.includes(control.get('username').value))
      return {checkUsername: true};
    return null;
  }
  checkEmail = (control: FormControl): ValidationErrors => {
    let emailArray = this.userService.user.map(obj => obj.email);
    if(emailArray.includes(control.get('email').value))
      return {checkEmail: true};
    return null;
  }
  
  selectedRole(): void {
    if(this.registerForm.get('role').value === this.role.ADMIN)
      this.registerForm.get('profession').clearValidators();
    else
      this.registerForm.get('profession').setValidators(Validators.required);
    this.registerForm.get('profession').updateValueAndValidity();
  }

  submitForm(): void {
    if(this.registerForm.valid) {
      this.userData = this.registerForm.value;
      if(this.userData.role === this.role.ADMIN)
        delete this.userData.profession;
      this.userService.user.push({id: this.counter++, ...this.userData});
      this.router.navigate(['login']);
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
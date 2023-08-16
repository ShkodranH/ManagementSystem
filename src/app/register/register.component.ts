import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profession } from '../interfaces-enums/profession';
import { UserService } from '../services/user-info.service';
import { IUser } from '../interfaces-enums/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profession = Profession;
  userData: IUser;
  registerForm: FormGroup;
  counter = 1;
  name: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.pattern('^(?=[a-zA-Z])[a-zA-Z0-9-]{3,30}')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[A-Z]).{8,100}')]),
      confirmPass: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[A-Z]).{8,100}')]),
      creditCard: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{16}')]),
      profession: new FormControl(null, Validators.required)
    }, 
    [
      this.checkPassword,
      this.checkUsername,
      this.checkEmail
    ]);

    this.registerForm.get('username').setErrors({
      letter: {invalid: true}
    })
  }

  checkPassword(control: FormControl) {
    if(control.get('password').value !== control.get('confirmPass').value)
      return {checkPassword: true};
    return null;
  }
  checkUsername = (control: FormControl) => {
    let usernameArray = this.userService.user.map(obj => obj.username);
    if(usernameArray.includes(control.get('username').value))
      return {checkUsername: true};
    return null;
  }
  checkEmail = (control: FormControl) => {
    let emailArray = this.userService.user.map(obj => obj.email);
    if(emailArray.includes(control.get('email').value))
      return {checkEmail: true};
    return null;
  }

  submitForm() {
    if(this.registerForm.valid) {
      this.userData = this.registerForm.value;
      this.userService.user.push({id: this.counter++, ...this.userData});
      this.registerForm.reset();
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
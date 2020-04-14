import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

import {DnDUser} from '../../model/DnDUser';
import {UserService} from '../../services/user/user.service';
import { ConfirmPasswordValidator } from 'src/app/validators/confirm-password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registrationForm: FormGroup;
  private registrationAttempted: boolean;

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['',[
        Validators.required,
        Validators.minLength(3)
      ]],
      
      password: ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24)
      ]],

      confirmPassword: ['',[]],

      email: ['',[
        Validators.required,
        Validators.email
      ]]
    }, {validators: ConfirmPasswordValidator});
  }

  register(userData) {
  
    let newUser:DnDUser = new DnDUser();
    newUser.setUsername(userData.username);
    newUser.setPassword(userData.password);
    newUser.setEmail(userData.email);


    this.userService.addNewUser(newUser)
      .subscribe(_ => {
        console.log("User created!... I think (Please figure out how to get HTTP response codes...");
      });
  }

}

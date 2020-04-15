import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

import {DnDUser} from '../../model/DnDUser';
import {UserService} from '../../services/user/user.service';
import { ConfirmPasswordValidator } from 'src/app/validators/confirm-password.validator';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private registrationForm: FormGroup;

  private errorMessage: string;
  private registrationFailed: boolean;

  private successMessage: string;
  private registrationSucceeded: boolean;

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
    
    this.registrationFailed = false;
    this.registrationSucceeded = false;
  
    let newUser:DnDUser = new DnDUser();
    newUser.setUsername(userData.username);
    newUser.setPassword(userData.password);
    newUser.setEmail(userData.email);


    this.userService.addNewUser(newUser)
      .subscribe((resp: HttpResponse<DnDUser>) => {
        this.successMessage = `Account created successfully! Please return to the login screen.`
        this.registrationSucceeded = true;
      },
      (error: HttpResponse<DnDUser>) => {
        switch(error.status) {
          case 409:
            this.errorMessage = "User already exists";
            break;
          default:
            this.errorMessage = "Something went wrong. Please try again later";
            break;
        }
        this.registrationFailed = true;
      });
  }

}

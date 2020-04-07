import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DnDUser } from '../../model/DnDUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private loginAttempted: boolean;

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group ({
      username: ['', [
        Validators.required
      ]],

      password: ['', [
        Validators.required
      ]]
    });
  }

  login(userData) {
    let user:DnDUser = userData as DnDUser;

    console.log(user);

  }
}

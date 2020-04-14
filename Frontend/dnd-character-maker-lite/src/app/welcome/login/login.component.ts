import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DnDUser } from '../../model/DnDUser';
import { UserService } from '../../services/user/user.service';

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
    private fb: FormBuilder,
    private userService: UserService
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
    this.userService.getUserByLogin(userData as DnDUser)
      .subscribe((foundUser: DnDUser) => {
        console.log("Found User: " + JSON.stringify(foundUser)); 
        this.userService.setCurrentUser(foundUser);

        //this.router.navigate(['/characters']);  -- Route to characters page after successfully logging in.
      });
  }
}

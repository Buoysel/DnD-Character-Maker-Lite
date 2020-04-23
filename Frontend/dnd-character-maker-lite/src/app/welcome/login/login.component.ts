import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DnDUser } from '../../model/DnDUser';
import { UserService } from '../../services/user/user.service';
import { HttpResponse } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private loginAttempted: boolean = false;
  private errorMessage: string = '';

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
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

    this.loginAttempted = false;  // Hide the error message.

    this.userService.getUserByLogin(userData as DnDUser)
      .subscribe((resp: HttpResponse<DnDUser>) => { 
        this.userService.setCurrentUser(resp.body as DnDUser);
        console.log(this.userService.getCurrentUser());

        this.router.navigate(['/dashboard']); 
      },
      (error: HttpResponse<DnDUser>) => {
        switch(error.status) {
          case 401:
            this.errorMessage = "Incorrect username/password combination";
            break;
          case 404:
            this.errorMessage = "User not found.";
            break;
          default:
            this.errorMessage = "Something went wrong. Please try again later.";
            break;
        }

        this.loginAttempted = true;
      });
  }
}

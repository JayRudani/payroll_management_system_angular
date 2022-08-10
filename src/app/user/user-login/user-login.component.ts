import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLogin implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/employees']);
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        if(data != null) {
          console.log('login data: ', data[0]);
          this.tokenStorage.saveToken("111");
          this.tokenStorage.saveUser(data[0]);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['/employees']);
        } else {
          this.errorMessage = "Invalid Email and Password. Kindly try again !!!!"
          this.isLoginFailed = true;
        }
       
        //this.reloadPage();
      },
      err => {
        console.log(err.error);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}

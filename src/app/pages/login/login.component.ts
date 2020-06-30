import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(loginForm) {
    this.authenticationService.userlogin(loginForm.value.username, loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : '/welcome';
          this.router.navigate([redirect]);
        },
        error => {
          alert('User name or password is incorrect');
        });
  }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}

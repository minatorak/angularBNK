import { AuthService } from './../../services/auth.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formbuild: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formbuild.group( {
      login: '',
      password: ''
    });
  }

  login() {
    this.authService.authen(this.loginForm.value)
                    .subscribe(data => console.log(data));
  }
}

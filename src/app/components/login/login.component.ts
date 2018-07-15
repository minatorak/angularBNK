import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formbuild: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formbuild.group( {
      login: '',
      password: ''
    });
    this.loginForm.setValue({
      login: 'test',
      password: ''
    });
  }

  login() {
    this.authService.authen(this.loginForm.value)
                    .subscribe(
                    data => {
                      this.authService.setToken(data.token);
                      this.router.navigate(['/admin']);
                    },
                    error => alert(error.message
                    )
                  );
  }
}

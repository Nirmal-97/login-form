import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginForm!: FormGroup;
  apiUrl = environment.apiurl;
  show = false;
  alertText = 'Please enter your email';
  alertTextPassword = 'Please enter your password';

  constructor(
    public httpClient: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submitForm() {
    const onSubmit = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(`${this.apiUrl}/v1/login`);
    this.httpClient.post(`${this.apiUrl}/v1/login`, onSubmit).subscribe(
      () => {
        this.show = true;
        this.router.navigate(['dashboard']);
      },
      (error: string) => {
        this.toastr.error('Invalid Email or Password.');
      }
    );
  }
}

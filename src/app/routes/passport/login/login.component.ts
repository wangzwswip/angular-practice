import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = '';
  loading = false;
  loadingDescription = '登录';
  submitTime = new Date();
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    
    if (this.form.valid) {
      console.log('submit', this.form.value);
      const loginParams = {
        loginId: this.form.value['userName'],
        passcode: this.form.value['password'],
        oneTimeCode: this.submitTime.getTime()
      };
      this.loading = true;
      this.loadingDescription = '登录中...';
      if (loginParams.loginId === 'admin' && loginParams.passcode === '12345678') {
        this.router.navigateByUrl('default/list');
      }
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  get userName() { return this.form.get('userName') }
  get password() { return this.form.get('password') }
}

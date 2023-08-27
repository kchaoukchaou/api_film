import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
   signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {  }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }
  get form()
  {
    return this.signinForm.controls;
  }

  onSubmit() {
    console.log('**************************************');
    console.log(this.signinForm.controls) ;
    console.log('**************************************');
  //   this.authService.loginUser(this.signinForm.value, this.signinForm.password.value)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
   }
}

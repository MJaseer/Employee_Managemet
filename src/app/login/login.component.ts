import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { loginReq } from '../interfaces/employee';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true
})
export class LoginComponent {

  private formBuilder = inject(FormBuilder)
  private router = inject(Router)

  isSubmitted = false
  passWordErr = ''


  loginForm = this.formBuilder.group({
    password: ['', [Validators.required]],
    userName: ['', [Validators.required]]
  })

  login() {
    console.log(this.loginForm.value);

    this.isSubmitted = true
    if (this.loginForm.invalid) {
      console.log('invallid form');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Password or Username',
      })
    } else {

      const data = this.loginForm.value as loginReq
      console.log(data);

      if(data.password == 'touchworldTech' && data.userName == 'touchworld'){
        this.router.navigate(['/employee']);
      }

    }
  }


}

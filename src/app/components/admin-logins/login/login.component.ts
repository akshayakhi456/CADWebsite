import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule, 
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage = '';
  service= inject(AuthService);
  router= inject(Router);
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  get f() {
    return this.loginForm.controls;
  }

  loginFormSubmit(): void {
  this.errorMessage = '';
    if (this.loginForm.invalid) {
      return;
    }
    this.service.login(this.loginForm.value as {username: string; password: string}).subscribe({
      next: (res) => {
        if(res.token) {
          this.router.navigate(['/dashboard']);
        }
      }
    })
  }
}

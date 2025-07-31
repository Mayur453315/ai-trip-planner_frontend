import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    role: 'USER'
  };

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {
    this.authService.register(this.user).subscribe({
      next: res => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: err => {
        alert('Registration failed!');
        console.error(err);
      }
    });
  }
}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  loginUser() {
    this.authService.login(this.credentials).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token || 'dummy-token');
        localStorage.setItem('role', res.role);

        // ✅ Store name and email properly (handle both res.user and res.username/email)
        localStorage.setItem('name', res.user?.name || res.username || '');
        localStorage.setItem('email', res.user?.email || res.email || '');

        alert('Login successful!');

        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else if (res.role === 'USER') {
          this.router.navigate(['/user-dashboard']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: err => {
        alert('Login failed. Please check your credentials.');
        console.error(err);
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html'
})
export class UserNavbarComponent {
  showDropdown = false;
  username = localStorage.getItem('name');
  email = localStorage.getItem('email');

  constructor(private authService: AuthService, private router: Router) {}

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

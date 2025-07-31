import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const expectedRole = route.data['expectedRole']; // 🔍 role from route

    if (!token) {
      alert('Access denied. Please login.');
      this.router.navigate(['/login']);
      return false;
    }

    if (expectedRole && role !== expectedRole) {
      alert('Access denied. You don’t have permission.');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}

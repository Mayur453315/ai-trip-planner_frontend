// src/app/components/admin-user-list/admin-user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html'
})
export class AdminUserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  isEditMode: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<User[]>('http://localhost:8084/api/admin/users').subscribe({
      next: data => this.users = data,
      error: err => console.error('Error fetching users:', err)
    });
  }

  editUser(user: User): void {
    this.selectedUser = { ...user };
    this.isEditMode = true;
  }

  updateUser(): void {
    if (this.selectedUser) {
      this.http.put(`http://localhost:8084/api/admin/users/${this.selectedUser.id}`, this.selectedUser)
        .subscribe({
          next: () => {
            this.isEditMode = false;
            this.selectedUser = null;
            this.fetchUsers();
            alert('User updated successfully!');
          },
          error: err => {
            console.error('Error updating user:', err);
            alert('Failed to update user.');
          }
        });
    }
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`http://localhost:8084/api/admin/users/${id}`, { responseType: 'text' }).subscribe({
        next: () => {
          this.fetchUsers();
          alert('User deleted successfully!');
        },
        error: err => {
          console.error('Error deleting user:', err);
          alert('Failed to delete user.');
        }
      });
    }
  }

  cancelEdit(): void {
    this.selectedUser = null;
    this.isEditMode = false;
  }
}

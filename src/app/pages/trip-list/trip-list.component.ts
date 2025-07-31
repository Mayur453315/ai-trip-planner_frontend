// src/app/pages/trip-list/trip-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];
  userEmail: string = '';

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.userEmail = email;
      this.loadTrips();
    }
  }

  loadTrips(): void {
    this.tripService.getTripsByUser(this.userEmail).subscribe((data: Trip[]) => {
      this.trips = data;
    });
  }

  deleteTrip(id: number): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripService.deleteTrip(id).subscribe(() => this.loadTrips());
    }
  }

  editTrip(id: number): void {
    this.router.navigate(['/edit-trip', id]);
  }
}

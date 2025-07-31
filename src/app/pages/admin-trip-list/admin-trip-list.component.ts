import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-trip-list',
  templateUrl: './admin-trip-list.component.html',
  styleUrls: ['./admin-trip-list.component.css']
})
export class AdminTripListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllTrips();
  }

  loadAllTrips(): void {
    this.tripService.getAllTrips().subscribe(data => {
      this.trips = data;
    });
  }

  deleteTrip(id: number): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripService.deleteTrip(id).subscribe(() => this.loadAllTrips());
    }
  }
}

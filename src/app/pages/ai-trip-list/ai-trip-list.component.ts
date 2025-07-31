import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // ✅ import Router
import { AiTrip } from 'src/app/models/ai-trip.model';
import { AiTripService } from 'src/app/services/ai-trip.service';

@Component({
  selector: 'app-ai-trip-list',
  templateUrl: './ai-trip-list.component.html',
  styleUrls: ['./ai-trip-list.component.css']
})
export class AiTripListComponent implements OnInit {
  trips: AiTrip[] = [];
  isLoading = true;

  constructor(
    private tripService: AiTripService,
    private router: Router // ✅ inject Router
  ) {}

  ngOnInit(): void {
    this.tripService.getAllTrips().subscribe({
      next: (data) => {
        this.trips = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load trips', err);
        this.isLoading = false;
      }
    });
  }

  // ✅ Navigate to details page
  viewTrip(id: number) {
    this.router.navigate(['/Ai-trip-details', id]);
  }

  editTrip(id: number) {
  this.router.navigate(['/edit-ai-trip', id]); // You’ll need to create this route/component
}

deleteTrip(id: number) {
  if (confirm('Are you sure you want to delete this trip?')) {
    this.tripService.deleteTrip(id).subscribe({
      next: () => {
        alert('Trip deleted successfully');
        this.trips = this.trips.filter(t => t.id !== id); // remove deleted trip from list
      },
      error: (err) => {
        console.error('Failed to delete trip', err);
        alert('Failed to delete trip');
      }
    });
  }
}


}

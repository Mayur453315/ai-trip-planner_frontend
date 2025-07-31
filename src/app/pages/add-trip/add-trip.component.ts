// src/app/components/add-trip/add-trip.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  trip: Trip = {
    tripName: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: 0,
    transportation: '',
    notes: ''
  };

  isEditMode = false;
  tripId!: number;

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.tripId = +idParam;
      this.isEditMode = true;
      this.tripService.getTripById(this.tripId).subscribe(data => {
        this.trip = data;
      });
    }
  }

  onSubmit(): void {
  const email = localStorage.getItem('email');  // Get from localStorage

  if (email) {
    this.trip.userEmail = email;  // Add to trip object
  }

  if (this.isEditMode) {
    this.tripService.updateTrip(this.tripId, this.trip).subscribe(() => {
      this.router.navigate(['/trip-list']);
    });
  } else {
    this.tripService.addTrip(this.trip).subscribe(() => {
      this.router.navigate(['/trip-list']);
    });
  }
}

}

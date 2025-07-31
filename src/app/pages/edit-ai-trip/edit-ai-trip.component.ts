import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AiTripService, AiTrip } from 'src/app/services/ai-trip.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-ai-trip',
  templateUrl: './edit-ai-trip.component.html',
  styleUrls: ['./edit-ai-trip.component.css']
})
export class EditAiTripComponent implements OnInit {
  tripForm: FormGroup;
  tripId!: number;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private tripService: AiTripService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.tripForm = this.fb.group({
      destination: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      itinerary: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.tripId = +this.route.snapshot.paramMap.get('id')!;
    this.tripService.getTripById(this.tripId).subscribe({
      next: (trip) => {
        this.tripForm.patchValue(trip);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading trip', err);
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    if (this.tripForm.invalid) return;

    const updatedTrip: AiTrip = {
      id: this.tripId,
      ...this.tripForm.value
    };

    this.tripService.updateTrip(this.tripId, updatedTrip).subscribe({
      next: () => {
        alert('Trip updated successfully!');
        this.router.navigate(['/Ai-trip-list']);
      },
      error: (err) => {
        console.error('Update failed', err);
        alert('Failed to update trip.');
      }
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ai-trip-details',
  templateUrl: './ai-trip-details.component.html',
  styleUrls: ['./ai-trip-details.component.css']
})
export class AiTripDetailsComponent implements OnInit {
  trip: any;
  isLoading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const tripId = this.route.snapshot.paramMap.get('id');

    this.http.get(`http://localhost:8084/api/ai-trips/${tripId}`).subscribe({
      next: (data) => {
        this.trip = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching trip:', err);
        this.isLoading = false;
      }
    });
  }
}

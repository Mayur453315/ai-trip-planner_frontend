// src/app/services/trip.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private baseUrl = 'http://localhost:8084/api/trips';

  constructor(private http: HttpClient) {}

  // ✅ Only use this method to fetch user trips
  getTripsByUser(email: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.baseUrl}/user/${email}`);
  }

  getTripById(id: number): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/${id}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl, trip);
  }

  updateTrip(id: number, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.baseUrl}/${id}`, trip);
  }

  deleteTrip(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllTrips(): Observable<Trip[]> {
  return this.http.get<Trip[]>(this.baseUrl);
}

}

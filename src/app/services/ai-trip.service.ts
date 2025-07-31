import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AiTrip {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  itinerary: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiTripService {
  private baseUrl = 'http://localhost:8084/api/ai-trips';

  constructor(private http: HttpClient) {}

  getAllTrips(): Observable<AiTrip[]> {
    return this.http.get<AiTrip[]>(`${this.baseUrl}/all`);
  }

  saveTrip(trip: Omit<AiTrip, 'id'>): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, trip);
  }

  deleteTrip(id: number) {
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}


updateTrip(id: number, trip: AiTrip): Observable<AiTrip> {
  return this.http.put<AiTrip>(`${this.baseUrl}/${id}`, trip);
}


// ✅ Add new method in ai-trip.service.ts
getTripById(id: number): Observable<AiTrip> {
  return this.http.get<AiTrip>(`${this.baseUrl}/${id}`);
}

getTripsByEmail(email: string): Observable<AiTrip[]> {
  return this.http.get<AiTrip[]>(`${this.baseUrl}/user/${email}`);
}

}

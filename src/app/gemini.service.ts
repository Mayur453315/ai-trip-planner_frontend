// src/app/gemini.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private apiUrl = `${environment.apiBaseUrl}/gemini`;

  constructor(private http: HttpClient) {}

  generateItinerary(destination: string, startDate: string, endDate: string): Observable<string> {
    const body = {
      destination,
      startDate,
      endDate
    };

    return this.http.post(`${this.apiUrl}/generate-itinerary`, body, { responseType: 'text' });
  }
}

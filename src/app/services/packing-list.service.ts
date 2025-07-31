import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackingListService {
  constructor() {}

  generatePackingList(weather: any): string[] {
    const items: string[] = [];

    const temp = weather.main.temp;
    const condition = weather.weather[0].main.toLowerCase();
    const description = weather.weather[0].description.toLowerCase();

    // Temperature
    if (temp > 30) {
      items.push('Sunscreen', 'Sunglasses', 'Hat', 'Water bottle');
    } else if (temp < 15) {
      items.push('Jacket', 'Gloves', 'Thermal wear');
    } else {
      items.push('Light jacket', 'Comfortable shoes');
    }

    // Conditions
    if (condition.includes('rain') || description.includes('rain') || description.includes('overcast')) {
      items.push('Umbrella', 'Raincoat', 'Waterproof shoes');
    } else if (condition.includes('wind')) {
      items.push('Windbreaker');
    }

    return items;
  }
}

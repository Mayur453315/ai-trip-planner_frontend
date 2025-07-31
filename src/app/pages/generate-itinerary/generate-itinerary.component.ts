import { Component } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 
import { Router } from '@angular/router'; 
@Component({ 
selector: 'app-generate-itinerary', 
templateUrl: './generate-itinerary.component.html', 
}) 
export class GenerateItineraryComponent { 
destination = ''; 
startDate = ''; 
endDate = ''; 
rawResult: string = ''; 
translatedResult: string = ''; 
safeHtmlResult: SafeHtml = ''; 
isLoading: boolean = false; 
selectedLanguage = 'en'; 
weatherData: any = null; 
constructor(private http: HttpClient, private sanitizer: DomSanitizer, private router: Router) {} 
generateItinerary() { 
this.rawResult = ''; 
this.safeHtmlResult = ''; 
this.isLoading = true; 
const body = { 
destination: this.destination, 
startDate: this.startDate, 
endDate: this.endDate, 
}; 
this.http.post<any>('http://localhost:8084/api/gemini/generate-itinerary', body).subscribe({ 
next: (res) => { 
this.rawResult = res.itinerary; 
this.translateItinerary(this.rawResult, this.selectedLanguage); 
}, 
error: (err) => { 
console.error('Itinerary Error:', err); 
this.rawResult = 'An error occurred while generating the itinerary.'; 
this.safeHtmlResult = this.rawResult; 
this.isLoading = false; 
}, 
}); 
} 
checkWeatherAndPacking() { 
this.rawResult = ''; 
this.safeHtmlResult = ''; 
this.weatherData = null; 
this.isLoading = true; 
const apiKey = 'cf4280e39d29669fba3fcbd9bfc61b0c'; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.destination}&appid=${apiKey}&units=metric`; 
this.http.get<any>(url).subscribe({ 
next: (data) => { 
this.weatherData = data; 
this.isLoading = false; 
}, 
error: (err) => { 
console.error('Weather Error:', err); 
this.weatherData = null; 
this.isLoading = false; 
} 
}); 
} 
saveTrip() {
  const finalText = this.translatedResult || this.rawResult;
  const htmlFormatted = this.convertToHtml(finalText);

  const tripData = {
    destination: this.destination,
    startDate: this.startDate,
    endDate: this.endDate,
    itinerary: htmlFormatted
  };

  console.log('Sending tripData:', tripData); // ✅ ADD THIS LINE

  this.http.post('http://localhost:8084/api/ai-trips/save', tripData, { responseType: 'text' }).subscribe({
    next: () => {
      alert('Trip saved successfully!');
      this.router.navigate(['/Ai-trip-list']);
    },
    error: (err) => {
      console.error('Save Trip Error:', err);
      alert('Failed to save trip.');
    }
  });
}

translateItinerary(text: string, targetLang: string) { 
if (targetLang === 'en') { 
this.translatedResult = text; 
this.safeHtmlResult = this.sanitizer.bypassSecurityTrustHtml(this.convertToHtml(text)); 
this.isLoading = false; 
return; 
} 
const url = `https://libretranslate.de/translate`; 
const body = { 
q: text, 
source: 'en', 
target: targetLang, 
format: 'text' 
}; 
this.http.post<any>(url, body).subscribe({ 
next: (res) => { 
const translatedText = res.translatedText; 
this.translatedResult = translatedText; 
this.safeHtmlResult = this.sanitizer.bypassSecurityTrustHtml(this.convertToHtml(translatedText)); 
this.isLoading = false; 
}, 
error: (err) => { 
console.error('Translation Error:', err); 
this.translatedResult = text; 
this.safeHtmlResult = this.convertToHtml(text); 
this.isLoading = false; 
}, 
}); 
} 
private convertToHtml(markdown: string): string { 
let html = markdown; 
html = html.replace(/^## (.*$)/gim, '<h3>$1</h3>'); 
html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>'); 
html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>'); 
html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>'); 
html = html.replace(/^\* (.*$)/gim, '<li>$1</li>'); 
html = html.replace(/(<li>[\s\S]*?<\/li>)/gim, '<ul>$1</ul>'); 
html = html.replace(/\n/g, '<br>'); 
return html.trim(); 
} 
}

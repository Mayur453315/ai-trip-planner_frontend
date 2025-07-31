import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AddTripComponent } from './pages/add-trip/add-trip.component';
import { TripListComponent } from './pages/trip-list/trip-list.component';
import { UserNavbarComponent } from './pages/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './pages/admin-navbar/admin-navbar.component';
// import { AiItineraryComponent } from './pages/ai-itinerary/ai-itinerary.component';
import { GenerateItineraryComponent } from './pages/generate-itinerary/generate-itinerary.component';
import { PackingListComponent } from './pages/packing-list/packing-list.component';
import { AiTripListComponent } from './pages/ai-trip-list/ai-trip-list.component';
import { AiTripDetailsComponent } from './pages/ai-trip-details/ai-trip-details.component';
import { EditAiTripComponent } from './pages/edit-ai-trip/edit-ai-trip.component';
import { AdminUserListComponent } from './pages/admin-user-list/admin-user-list.component';
import { AdminTripListComponent } from './pages/admin-trip-list/admin-trip-list.component';



 // ✅ Import this

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AddTripComponent,
    TripListComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    // AiItineraryComponent,
    GenerateItineraryComponent,
    PackingListComponent,
    AiTripListComponent,
    AiTripDetailsComponent,
    EditAiTripComponent,
    AdminUserListComponent,
    AdminTripListComponent,
    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // ❌ Don't add CommonModule here, it's already part of BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

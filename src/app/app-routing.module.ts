import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AddTripComponent } from './pages/add-trip/add-trip.component';
import { TripListComponent } from './pages/trip-list/trip-list.component';
import { GenerateItineraryComponent } from './pages/generate-itinerary/generate-itinerary.component';
import { AuthGuard } from './auth.guard';
import { AiTripListComponent } from './pages/ai-trip-list/ai-trip-list.component';
import { AiTripDetailsComponent } from './pages/ai-trip-details/ai-trip-details.component';
import { EditAiTripComponent } from './pages/edit-ai-trip/edit-ai-trip.component';
import { AdminUserListComponent } from './pages/admin-user-list/admin-user-list.component';
import { AdminTripListComponent } from './pages/admin-trip-list/admin-trip-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
{ path: 'Ai-trip-details/:id', component: AiTripDetailsComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'ADMIN' }
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'USER' }
  },

  {
    path: 'add-trip',
    component: AddTripComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'USER' }
  },
  {
    path: 'trip-list',
    component: TripListComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'USER' }
  },
  {
    path: 'edit-trip/:id',
    component: AddTripComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'USER' }
  },
  {
    path: 'generate-itinerary',
    component: GenerateItineraryComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'USER' }
  },
  {
  path: 'Ai-trip-list',
  component: AiTripListComponent,
  canActivate: [AuthGuard],
  data: { expectedRole: 'USER' }
},

{
  path: 'edit-ai-trip/:id',
  component: EditAiTripComponent  // <-- Make sure this component exists
},

{
  path: 'admin/users',
  component: AdminUserListComponent,
  canActivate: [AuthGuard],
  data: { expectedRole: 'ADMIN' }
},

{ path: 'admin/trips', component: AdminTripListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

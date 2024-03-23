import { Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { LoginComponent } from './pages/admin/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch:'full'
    },
    {
        path:'search',
        component: SearchComponent,
        title: 'Busca de Voos'
    },
    {
        path:'book-flight',
        component: BookFlightComponent,
        title: 'Agendamento de Voo'
    },
    {
        path: 'Bookings',
        component: MyBookingsComponent,
        title: 'Meus Voos'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path:'airport',
                component: AirportComponent
            },
            {
                path: 'city',
                component: CityComponent
            },
            {
                path: 'all-bookings',
                component: BookFlightComponent,
            },
            {
                path: 'new-flight',
                component: NewFlightComponent,
            },
            {
                path:'all-flights',
                component: AllFlightsComponent,

            }
        ]
    }
   

];

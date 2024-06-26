import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLink="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/airport">Airport</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/city">City</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/all-bookings">All-Bookings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/all-Flights">All-Flights</a>
          </li>
        </ul>
      </div>
      <form class="d-flex">
      <label for="">{{loggedUserData?.email}}</label>
        <button class="btn btn-primary" type="button" (click)="logoff()">Log-Off</button>
      </form>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  loggedUserData: any;
  constructor(private router: Router) {
    const localData= localStorage.getItem("FlightUser");
    if(localData != null) {
      this.loggedUserData =  JSON.parse(localData);
    }
  }

  logoff() {
    localStorage.removeItem('FlightUser');
    this.router.navigateByUrl('/login')
  }
}

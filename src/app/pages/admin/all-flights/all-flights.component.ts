import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../../core/services/master.service';

@Component({
  selector: 'app-all-flights',
  standalone: true,
  imports: [],
  template: `
  <div class="row pb-2">
    <div class="col-12 text-end">
        <button class="btn btn-primary" routerLink="/new-flight">Add New</button>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Airline</th>
                    <th>Flight No</th>
                    <th>Arrival Airport </th> 
                    <th>Departure Airport</th>
                    <th>Travel Date</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @for (item of flightList; track $index) {
                <tr>
                    <td>{{item.flightNumber+1}}</td>
                    <td>{{item.vendorName}}
                    <img [src]="item.vendorLogoUrl" style="width: 50px;height: 50px;border-radius: 50%;">
                    </td>
                    <td>{{item.flightNumber}}</td>
                    <td>{{item.arrivalAirportName}}</td>
                    <td>{{item.departureAirportName}}</td>
                   
                    <td>{{item.travelDate }}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button class="btn btn-primary" >Edit</button>
                        <button class="btn btn-primary mx-2">Delete</button>
                    </td>
                </tr>
            }
            </tbody>

            </table>

    </div>
</div>
  `,
  styleUrl: './all-flights.component.scss'
})
export class AllFlightsComponent implements OnInit {
  flightList: any [] = [];
 master = inject(MasterService)

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights() {
    this.master.getAllFlights().subscribe((res:any)=>{
      this.flightList = res.data;
    })
  }
}

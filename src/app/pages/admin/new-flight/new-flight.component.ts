import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../../core/services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-flight',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="container">
    <div class="row pt-3">
        <div class="col-2">
            <label for="">Flight No</label>
            <input type="text" class="form-control" [(ngModel)]="flightObj.flightNumber" placeholder="Ener Flight No">
        </div>
    </div>
    <div class="row pt-3">
        <div class="col-3">
            <label for=""> Scheduled Date</label>
            <input type="date" class="form-control" [(ngModel)]="flightObj.travelDate" placeholder="Select Travel Date">
        </div>
        <div class="col-3">
            <label for=""> Departure Time</label>
            <input type="date" class="form-control" [(ngModel)]="flightObj.departureTime" placeholder="Enter Departure Time">
        
        </div>
        <div class="col-3">
            <label for=""> Arrival Time</label>
            <input type="date" class="form-control" [(ngModel)]="flightObj.arrivalTime" placeholder="Enter Arrival Time">
        
        </div>
    </div>
    <div class="row pt-3">
        <div class="col-4">
            <label for=""> Select Derparture Airport</label>
            <select name="" id="" class="form-select" [(ngModel)]="flightObj.departureAirportId" >
            <option value="0">Select Airport</option>
                @for (item of airportList; track $index) {
                    <option  [attr.value]="item.airportId">{{ item.airportName }}, {{ item.cityName }}</option>
                }
            </select>
        
        </div>
        <div class="col-4">
            <label for=""> Select Arrival Airport</label>
            <select name="" id="" class="form-select" [(ngModel)]="flightObj.arrivalAirportId" >
              <option value="0">Select Airport</option>
                @for (item of airportList; track $index) {
                    <option [attr.value]="item.airportId">{{ item.airportName }}, {{ item.cityName }}</option>
                }
            </select>
        
        </div>
        <div class="row pt-3">
          <div class="col-3">
            <label for="">Total Seats</label>
            <input type="text" [(ngModel)]="flightObj.arriv" >
          </div>
        </div>
    </div>
</div>
<div class="container">
  <div class="row pt-3">
    <div class="col-3">
      <input type="text" [(ngModel)]="flightObj.totalSeats" placeholder="Enter Total Seats" >
    </div>
  </div>
  <div class="row pt-3">
    <div class="col-3">
      <input type="text" [(ngModel)]="flightObj.price" placeholder="Enter Price" >
    </div>
  </div>
  <div class="row pt-5">
    <div class="col-3 text-center">
      Reset
    </div>
    <div class="col-3 text-center">
      <button class="btn btn-success" (click)="onSaveFlight()">Create Flight</button>
    </div>
  </div>
</div>
  `,
  styleUrl: './new-flight.component.scss'
})
export class NewFlightComponent implements OnInit{
  master = inject(MasterService);
  airportList: any []=[];

  flightObj: any = 
    {
      "flightId": 0,
      "flightNumber": "",
      "departureAirportId": 0,
      "departureTime": "",
      "arrivalAirportId": 0,
      "arrivalTime": "",
      "price": 0,
      "totalSeats": 0,
      "flightVendorId": 0,
      "travelDate": ""
    }
  
  

  ngOnInit(): void {
    this.loadAirports();
    const localData = localStorage.getItem("FlightUser");
    if (localData != null) {
      this.flightObj.flightVendorId = JSON.parse(localData).vendorId;
      
    }
    
  }
  loadAirports(){
    this.master.getAllAirport().subscribe((res:any)=>{
      this.airportList = res.data;
    })
  }

  onSaveFlight(){
    const obj = [
      
    ]
    obj.push(this.flightObj);
    this.master.createFlight(obj).subscribe((res:any)=>{
      if (res.result) {
        alert('Voo criado com sucesso')
      }else{
        alert(res.message)
      }
    })
  }


}

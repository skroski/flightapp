import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-city',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="row">
    <div class="col-12 text-end">
        <button class="btn btn-success" (click)="addNew()">Add New</button>
        <button class="btn btn-success" (click)="bulkUpdateCity()">Bulk Update</button>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>City Name</th>
                </tr>
            </thead>
            <tbody>
              @for (city of cityList; track $index) {
                <tr>
                    <td>
                      {{ city.cityId}}
                    </td>
                    <td>
                      {{ city.cityName}}
                        <input type="text" [(ngModel)]="city.cityName" placeholder="Enter City Name" />
                    </td>
                </tr>
              }
            </tbody>
        </table>
    </div>
</div>
  
  `,
  styleUrl: './city.component.scss'
})
export class CityComponent implements OnInit {
   cityList: any [] = [];
   
   constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.getAllCity();
    }

    getAllCity(){
      this.http.get("/api/FlightBooking/GetAllCity").subscribe((res:any)=>{
        this.cityList =  res.data; 
      })
    }
    bulkUpdateCity () {
      this.http.post("/api/FlightBooking/AddUpdateBulkCity", this.cityList).subscribe((res:any)=>{
        if(res.result) {
          alert("Bulk Update Success");
        } else {
          alert(res.message)
        }
      })
    }
  
    addNew() {
      const obj = {
        cityId: 0,
        cityName: ''
      };
      this.cityList.unshift(obj)
    }
}

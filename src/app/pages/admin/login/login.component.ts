import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj:any = { 
    "email": "",
    "password": "" 
};

constructor(private http: HttpClient,private router: Router){}

onLogin() {
  this.http.post("/api/FlightBooking/Login", this.loginObj).subscribe((res:any)=>{
    if(res.result) {
      localStorage.setItem('FlightUser',JSON.stringify(res.data));
      this.router.navigateByUrl('/city');
    } else {
      alert(res.message)
    }
  })
}
}

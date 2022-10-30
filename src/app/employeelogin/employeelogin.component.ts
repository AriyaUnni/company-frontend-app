import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  username=""
  password=""

  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
     console.log(data)
     this.myapi.employeeLogin(data).subscribe(
      (res)=>{
        alert("Successfully logged in")
      }
     )

     this.username=""
     this.password=""
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }

  username=""
  password=""

  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
     console.log(data)
     this.myapi.employeeLogin(data).subscribe(
      (res:any)=>{
        if(res.length>0){
          localStorage.setItem("empid",res[0].id)
          console.log(localStorage.getItem("empid"));
          localStorage.setItem('empname',res[0].name)  
          this.myrouter.navigate(["/applyleave"])
        }else{
          alert("Invalid credentials")
        }
        
      }
     )
  }

  ngOnInit(): void {
  }

}

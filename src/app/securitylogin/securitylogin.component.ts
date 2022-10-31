import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent implements OnInit {

  constructor(private myapi:ApiService,private myrouter:Router) { }

  username=""
  password=""

  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }

    console.log(data)
    this.myapi.securityLogin(data).subscribe(
      (res:any)=>{
        if(res.length>0){
          localStorage.setItem("sec_id",res[0].id)
          localStorage.setItem("sec_name",res[0].name)
          console.log(localStorage.getItem("sec_id"));
          this.myrouter.navigate(["/checkin"])
        }else{
          alert("Invalid Credentials")
        }
      }
    )
  }

  ngOnInit(): void {
  }

}

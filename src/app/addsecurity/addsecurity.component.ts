import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  security_code=""
  name=""
  doj=""
  username=""
  password=""

  status:boolean=false

  readValues=()=>{
    let data={
      "security_code":this.security_code,
      "name":this.name,
      "doj":this.doj,
      "username":this.username,
      "password":this.password
    }
    console.log(data)

    this.myapi.addSecurity(data).subscribe(
      (res)=>{
        console.log(res)
        alert("successfully added")
      }
    )

    this.security_code=""
    this.name=""
    this.doj=""
    this.username=""
    this.password=""

    this.status=true
  }

  ngOnInit(): void {
  }

}

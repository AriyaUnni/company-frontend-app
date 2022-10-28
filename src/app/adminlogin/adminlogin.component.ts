import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myrouter:Router) { }

  username=""
  password=""

  readValues=()=>{
    let data={
      "email":this.username,
      "password":this.password
    }
    if(this.username=="admin" && this.password=="12345"){
      this.myrouter.navigate([])
    }else
    {
      alert("Invalid Credentials")
    }
    console.log(data)
    this.username=""
    this.password=""
  }
  

  ngOnInit(): void {
  }

}

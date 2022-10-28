import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  emp_code=""
  name=""
  designation=""
  doj=""
  username=""
  password=""

  status:boolean=false

  readValues=()=>{
    let data={
      "emp_code":this.emp_code,
      "name":this.name,
      "designation":this.designation,
      "doj":this.doj,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    this.myapi.addEmployee(data).subscribe(
      (res)=>{
        console.log(res)
        alert("Successfully added!!")
      }
    )

    this.emp_code=""
    this.name=""
    this.designation=""
    this.doj=""
    this.username=""
    this.password=""

    this.status=true
  }

  ngOnInit(): void {
  }

}

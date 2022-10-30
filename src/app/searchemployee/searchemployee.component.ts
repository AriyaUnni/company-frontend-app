import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
 
  status:boolean=false
   
  readValues=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchEmployee(data).subscribe(
      (res)=>{
        console.log(res)
        
        this.data=res

        this.name=""

        this.status=true
      }
    )
  }

  updateEmployee=()=>{
    this.myapi.updateEmployee(this.data[0]).subscribe(
      (res)=>{
        alert("Successfully updated")
      }
      
    )
  }

  data:any=[]

  ngOnInit(): void {
  }

}

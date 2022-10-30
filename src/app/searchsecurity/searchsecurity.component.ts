import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""

  status:boolean=false

  readValues=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchSecurity(data).subscribe(
      (res)=>{
        this.data=res

        this.name=""
        this.status=true
      }
    )  
  }

  updateSecurity=()=>{
    this.myapi.editSecurity(this.data[0]).subscribe(
      (res)=>{
        alert("Successfully updated")
      }
    )
  }

  data:any=[]

  ngOnInit(): void {
  }

}

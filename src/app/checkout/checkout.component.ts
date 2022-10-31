import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  empid=""
  login_time=""

  getCheckinData=()=>{
    this.myapi.viewCheckin().subscribe(
      (res)=>{
        console.log("Entered")
        this.dataCheck=res;
        console.log(res)
      }
    )
  }

  checkout=(id:any)=>{
    let data={
      "id":id,
      "logout_id":localStorage.getItem('sec_id')
    }
    this.myapi.checkOut(data).subscribe()
    alert("Checked Out")
    this.getCheckinData()
  }

  displayedColumns:string[]=['empid','login_time','update'];
  

  dataCheck:any=[]


  ngOnInit(): void {
  }

}

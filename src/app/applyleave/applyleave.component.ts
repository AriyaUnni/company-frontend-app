import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  type=""
  applied_date=""
  approveddate=""
  duration=""
  
  reason=""

  status:boolean=false
  

  applyLeave=()=>{
    let data={
      "empid":localStorage.getItem("empid"),
      "type":this.type,
      "applied_date":this.applied_date,
      
      "approveddate":this.approveddate,
      "duration":this.duration,
      "reason":this.reason
      
    }
    console.log(data)
    this.myapi.addLeave(data).subscribe();
    alert("applied")

    this.status=true

    this.type=""
    this.applied_date=""
    this.approveddate=""
    this.duration=""
    this.reason=""
    
  }

  ngOnInit(): void {
  }

}

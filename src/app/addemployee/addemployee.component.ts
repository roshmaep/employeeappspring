import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  code=""
  name=""
  designation=""
  salary=""
  cmpname=""
  mobileno=""
  username=""
  password=""
  constructor(private api:ApiService){}
  addemployee=()=>
  {
    let data:any={"code":this.code,"name":this.name,"designation":this.designation,"salary":this.salary,"cmpname":this.cmpname,"mobileno":this.mobileno,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addemployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Course added successfully")

          this.code=""

          this.name=""

          this.designation=""

          this.salary=""

          this.cmpname=""

          this.mobileno=""

          this.username=""

          this.password=""

         

        }else{

          alert("Something went wrong")

        }
      }
    )
  }
}

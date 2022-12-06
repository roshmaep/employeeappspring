import { Component } from '@angular/core';

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
  addemployee=()=>
  {
    let data:any={"code":this.code,"name":this.name,"designation":this.designation,"salary":this.salary,"cmpname":this.cmpname,"mobileno":this.mobileno,"username":this.username,"password":this.password}
    console.log(data)}
}

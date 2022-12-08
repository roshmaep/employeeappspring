import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchnew',
  templateUrl: './searchnew.component.html',
  styleUrls: ['./searchnew.component.css']
})
export class SearchnewComponent {
  
  constructor(private api:ApiService, private route:Router){}

  code=""

  readValues:any = []

  readValue=()=>

  {

    let data:any={

    "code":this.code}

    console.log(data)

    this.api.readValues(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {

          alert("invalide employee code")

         

        } else {

          this.readValues = response

        }

      }

    )

  }
  deleteBtnclick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("succesfully deleted")
          this.route.navigate(['/view'])
        }
        else{
          alert("invalid input")
        }
      }
    )
  }
}

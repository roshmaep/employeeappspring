import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService){}
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
}

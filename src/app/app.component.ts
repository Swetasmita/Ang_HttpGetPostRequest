import { Component } from '@angular/core';
import { ApiService } from './core/services/api.service';
import { datamodel } from './models/datamodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp';
  myData: any;
  data!:datamodel[];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this. getUsers(); //call this fun
  }
  //Get Request fake Json APi
  sendRequest(){
   this.api.getApi().subscribe((res: any) =>{
    this.myData = res;
    console.log(res);
   });
  }
  //Post Data
  submitUsers(data : datamodel){
    this.api.postData(data).subscribe((result : any) =>{    
      console.log(result);
      this. getUsers(); //call this fun
    });
  }
  //Get Data
 getUsers(){
  this.api.getData().subscribe((result : any)=>{
    this.data = result;
  })
 }
 
}

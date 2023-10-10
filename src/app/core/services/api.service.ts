import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from 'src/app/models/datamodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

//Get method
  getApi(){
    return this.http.get('https://testapi.devtoolsdaily.com/countries');
  }

  //post method
  postData(data: datamodel){
    return this.http.post(this.url, data);
  }

  //get method
  getData(){
    return this.http.get(this.url);
  }
}

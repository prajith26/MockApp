import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseURL = "https://dev.digisuvidhacentre.com/Profile/api/MockUser";
  constructor(private http: HttpClient) { }

  addUser(item){
    return this.http.post(this.baseURL,item);
  }

  getUser(){
    return this.http.get(this.baseURL);
  }
  
  deleteUser(id){
    // console.log(this.baseURL+`/Delete/${id}`);
    return this.http.delete(this.baseURL+`/Delete/${id}`);
  }
  singleUser(id){
    // console.log(this.baseURL+`/Delete/${id}`);
    return this.http.get(this.baseURL+`/${id}`);
  }
}

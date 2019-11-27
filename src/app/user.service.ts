import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:string = "http://localhost:81";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private http:HttpClient) { }

  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(
      this.url+"/user"
    );
  }
  
  addUsers(user):Observable<any>{
    return this.http.post<any>(
      this.url + "/user",
      user,
      {headers:this.headers}
    );
  }


}

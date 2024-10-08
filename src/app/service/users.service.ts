import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://jsonplaceholder.typicode.com/posts" 
  private url1 = "https://jsonplaceholder.typicode.com/users"
  constructor( private http : HttpClient ) { }

getData() : Observable<any> {
  return this.http.get(this.url);
}

getStudentData() : Observable<any>{
  return this.http.get(this.url1)
}
}

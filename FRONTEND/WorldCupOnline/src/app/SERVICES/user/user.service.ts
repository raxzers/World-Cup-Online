import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/MODELS/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private APIurl="https://.../";

  constructor(private http: HttpClient) { }

  getUsers():Observable<User> {
    return this.http.get<User>(this.APIurl);
  } 
}

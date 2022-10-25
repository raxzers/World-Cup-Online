import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userModel } from 'src/app/MODELS/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private APIurl="https://.../";

  constructor(private http: HttpClient) { }

  getUsers():Observable<userModel> {
    return this.http.get<userModel>(this.APIurl);
  } 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/MODELS/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private APIurl="https://.../";

  constructor(private http: HttpClient) { }

  getTeams():Observable<Team> {
    return this.http.get<Team>(this.APIurl);
  } 
}

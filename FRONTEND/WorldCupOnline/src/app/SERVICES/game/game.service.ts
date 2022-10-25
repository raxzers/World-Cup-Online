import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gameModel } from 'src/app/MODELS/gameModel';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  APIurl='http://localhost:3000/api/partido/';
  list: gameModel[];

  constructor(private http: HttpClient) { }

  obtenerPartidos() {
    this.http.get(this.APIurl).toPromise().then(data => { this.list = data as gameModel[]; });
  }
}

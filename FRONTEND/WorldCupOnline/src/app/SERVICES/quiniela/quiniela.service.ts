import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';

@Injectable({
  providedIn: 'root'
})
export class QuinielaService {

  APIurl="https://.../";
  quinielas: quinielaModel[];

  constructor(private http: HttpClient) { }

  getQuinielas() {
    this.http.get('http://localhost:3000/api/quinielas/').toPromise().then(data => { this.quinielas = data as quinielaModel[]; });
  }

}

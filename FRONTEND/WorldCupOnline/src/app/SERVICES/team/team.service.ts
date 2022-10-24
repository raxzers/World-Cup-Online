import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { teamModel } from 'src/app/MODELS/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  APIurl="https://.../";
  list: teamModel[];

  actualizarForm = new BehaviorSubject<teamModel>({} as any);

  constructor(public http: HttpClient) { }

  guardarEquipo(equipo: teamModel): Observable<teamModel> {
    return this.http.post<teamModel>(this.APIurl, equipo);
  }
  obtenerClubs() {
    this.http.get('http://localhost:3000/api/clubes/').toPromise().then(data => {
      this.list = data as teamModel[];
    });
  }
  actualizar(equipo) {
    this.actualizarForm.next(equipo);
  }

  actualizarCliente(cliente: teamModel): Observable<teamModel> {
    return this.http.put<teamModel>(this.APIurl, cliente);
  }
  obtenerClub(): Observable<teamModel> {
    return this.actualizarForm.asObservable();
  }
  obtenerSeleccion():  Observable<teamModel> {
    return this.actualizarForm.asObservable();
  }
  
  
  eliminarCliente(id: number): Observable<teamModel>{
    return this.http.delete<teamModel>('http://localhost:15451/api/Client/'+ id);
  }

  //getTeams():Observable<teamModel> {
  // return this.http.get<teamModel>(this.APIurl);
  //} 
}

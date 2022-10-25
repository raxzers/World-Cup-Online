import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { teamModel } from 'src/app/MODELS/teamModel';
import { HttpHeaders } from '@angular/common/http';
import { seleccionModel } from 'src/app/MODELS/seleccionModel';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  //APIurl="https://.../";
  list: teamModel[];
  list2: seleccionModel[];

  actualizarForm = new BehaviorSubject<teamModel>({} as any);

  actualizarForm2 =new BehaviorSubject<seleccionModel>({} as any);

  constructor(private http: HttpClient) { }

  guardarEquipo(equipo: teamModel): Observable<teamModel> {
    return this.http.post<teamModel>('http://localhost:3000/api/clubes/', equipo);
  }
  obtenerClubs() {
    this.http.get('http://localhost:3000/api/clubes/').toPromise().then(data => { this.list = data as teamModel[]; });
  }
  obtenerSelecciones() {
    this.http.get('http://localhost:3000/api/selecciones/').toPromise().then(data => { this.list2 = data as seleccionModel[]; });
  }
  actualizar(equipo) {
    this.actualizarForm.next(equipo);
  }

  actualizarCliente(equipo: teamModel): Observable<teamModel> {
    return this.http.put<teamModel>('http://localhost:3000/api/clubes/', equipo);
  }
  obtenerClub(): Observable<teamModel> {
    return this.actualizarForm.asObservable();
  }
  obtenerSeleccion(): Observable<seleccionModel> {
    return this.actualizarForm2.asObservable();
  }

  eliminarCliente(id: number): Observable<teamModel> {
    return this.http.delete<teamModel>('http://localhost:15451/api/Client/' + id);
  }
  obtenerClubs1(): Promise<teamModel[]> {
    return this.http.get('http://localhost:3000/api/clubes/')
      .toPromise()
      .then(data => this.list = data as teamModel[]);
  }

  obtenerSelecciones1(): Promise<seleccionModel[]> {
    return this.http.get('http://localhost:3000/api/selecciones/')
      .toPromise()
      .then(data => this.list2 = data as seleccionModel[]);
  }
  //getTeams():Observable<teamModel> {
  // return this.http.get<teamModel>(this.APIurl);
  //} 
}

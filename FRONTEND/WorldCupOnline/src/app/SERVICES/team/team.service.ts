import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { teamModel } from 'src/app/MODELS/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private APIurl="https://.../";
  list: teamModel[];

  private actualizarForm = new BehaviorSubject<teamModel>({} as any);

  constructor(private http: HttpClient) { }

  guardarEquipo(equipo: teamModel): Observable<teamModel> {
    return this.http.post<teamModel>(this.APIurl, equipo);
  }
  obtenerClientes() {
    this.http.get(this.APIurl).toPromise().then(data => {
      this.list = data as teamModel[];
    });
  }
  actualizar(equipo) {
    this.actualizarForm.next(equipo);
  }

  actualizarCliente(cliente: teamModel): Observable<teamModel> {
    return this.http.put<teamModel>(this.APIurl, cliente);
  }
  obtenerCliente(): Observable<teamModel> {
    return this.actualizarForm.asObservable();
  }
  
  //getTeams():Observable<teamModel> {
  // return this.http.get<teamModel>(this.APIurl);
  //} 
}

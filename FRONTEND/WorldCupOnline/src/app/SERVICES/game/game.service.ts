import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gameModel } from 'src/app/MODELS/gameModel';
import { teamModel } from 'src/app/MODELS/teamModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { torneo_equipo_Model } from 'src/app/MODELS/torneo_equipo_Model';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { torneo_fase_Model } from 'src/app/MODELS/torneo_fase_Model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  torneo_URL='http://localhost:3000/api/torneo';
  torneo_equipo_URL='http://localhost:3000/api/torneo_equipo';
  torneo_fase_URL='http://localhost:3000/api/torneo_fase/';
  partido_URL='http://localhost:3000/api/partido/';

  

  teams: teamModel[];
  fases: String[];

  actualizarForm = new BehaviorSubject<teamModel>({} as any);
  constructor(private http: HttpClient) { }
/*
  guardarEquipo(equipo: teamModel): Observable<teamModel> {
    return this.http.post<teamModel>('http://localhost:3000/api/clubes/', equipo);
  }
  */
  
  obtener_torneos():Observable<torneoModel[]> {
    return this.http.get<torneoModel[]>(this.torneo_URL);
  }

  obtener_equipos_del_torneo():Observable<torneo_equipo_Model[]> {
    return this.http.get<torneo_equipo_Model[]>(this.torneo_equipo_URL);
  }

  obtener_fases_del_torneo():Observable<torneo_fase_Model[]> {
    return this.http.get<torneo_fase_Model[]>(this.torneo_fase_URL);
  }

  agregar_partido(partido:gameModel): Observable<gameModel>{
    return this.http.post<gameModel>(this.partido_URL, partido);
  }


  /*
  actualizar(equipo) {
    this.actualizarForm.next(equipo);
  }
  actualizarCliente(equipo: teamModel): Observable<teamModel> {
    return this.http.put<teamModel>('http://localhost:3000/api/clubes/', equipo);
  }
  obtenerClub(): Observable<teamModel> {
    return this.actualizarForm.asObservable();
  }
  obtenerSeleccion(): Observable<teamModel> {
    return this.actualizarForm.asObservable();
  }
  eliminarCliente(id: number): Observable<teamModel> {
    return this.http.delete<teamModel>('http://localhost:15451/api/Client/' + id);
  }
  obtenerClubs1(): Promise<teamModel[]> {
    return this.http.get('http://localhost:3000/api/clubes/')
      .toPromise()
      .then(data => this.list = data as teamModel[]);
  }
  */
}

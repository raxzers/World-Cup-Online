import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gameModel } from 'src/app/MODELS/gameModel';
import { teamModel } from 'src/app/MODELS/teamModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { torneo_equipo_Model } from 'src/app/MODELS/torneo_equipo_Model';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { torneo_fase_Model } from 'src/app/MODELS/torneo_fase_Model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  torneo_URL = 'http://localhost:3000/api/torneo/';
  torneo_equipo_URL = 'http://localhost:3000/api/torneo_equipo/';
  torneo_fase_URL = 'http://localhost:3000/api/torneo_fase/';
  partido_URL = 'http://localhost:3000/api/partido/';



  teams: teamModel[];
  fases: String[];

  actualizarForm = new BehaviorSubject<teamModel>({} as any);
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  /*
    guardarEquipo(equipo: teamModel): Observable<teamModel> {
      return this.http.post<teamModel>('http://localhost:3000/api/clubes/', equipo);
    }
    */

  obtener_partidos(): Observable<gameModel[]> {
    return this.http.get<gameModel[]>(this.partido_URL);
  }

  obtener_torneos(): Observable<torneoModel[]> {
    return this.http.get<torneoModel[]>(this.torneo_URL);
  }

  partido_por_id(id: number): Observable<gameModel> {
    return this.http.get<gameModel>(this.partido_URL + id);
  }

  obtener_equipos_del_torneo(torneo: string): Observable<torneo_equipo_Model[]> {
    return this.http.get<torneo_equipo_Model[]>(this.torneo_equipo_URL + torneo);
  }

  obtener_torneo_nombre(torneo: string): Observable<torneo_equipo_Model[]> {
    return this.http.get<torneo_equipo_Model[]>(this.torneo_equipo_URL + torneo);
  }

  obtener_partidos_por_torneo(torneo: String): Observable<gameModel[]> {
    return this.http.get<gameModel[]>('http://localhost:3000/api/partido/partido_torneo/' + torneo);
  }

  obtener_fases_del_torneo(torneo: string): Observable<torneo_fase_Model[]> {
    return this.http.get<torneo_fase_Model[]>(this.torneo_fase_URL + torneo);
  }

  agregar_partido(partido: gameModel): Observable<gameModel> {
    console.log(partido);
    this.toastr.success("Datos correctos e ingresados correctamente");
    return this.http.post<gameModel>('http://localhost:3000/api/partido/', partido);
  }
}

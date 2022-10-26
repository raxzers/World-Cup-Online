import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { torneoEquipoModel } from 'src/app/MODELS/torneoEquipoModel';

@Injectable({
  providedIn: 'root'
})
export class TorneoServiceService {

  actualizarForm = new BehaviorSubject<torneoModel>({} as any);

  constructor(private http: HttpClient) { }
  guardarTorneo(torneo: torneoModel): Observable<torneoModel> {
    return this.http.post<torneoModel>('http://localhost:3000/api/torneo/', torneo);
  }
  guardarTorneoEquipos(torneoEquipo: torneoEquipoModel): Observable<torneoEquipoModel> {
    return this.http.post<torneoEquipoModel>('http://localhost:3000/api/torneo_equipo/', torneoEquipo);
  }
  actualizar(torneo) {
    this.actualizarForm.next(torneo);
  }
}

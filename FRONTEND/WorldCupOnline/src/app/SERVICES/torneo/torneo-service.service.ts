import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { torneoEquipoModel } from 'src/app/MODELS/torneoEquipoModel';
import { faseModel } from 'src/app/MODELS/faseMode';
import { rankingModel } from 'src/app/MODELS/rankingModel';

@Injectable({
  providedIn: 'root'
})
export class TorneoServiceService {

  actualizarForm = new BehaviorSubject<torneoModel>({} as any);
  torneos:torneoModel[];
  constructor(private http: HttpClient) { }

  guardarTorneo(torneo: torneoModel): Observable<torneoModel> {
    return this.http.post<torneoModel>('http://localhost:3000/api/torneo/', torneo);
  }

  actualizar(torneo) {
    this.actualizarForm.next(torneo);
  }
  obtenerTorneos(): Promise<torneoModel[]> {
    return this.http.get('http://localhost:3000/api/torneo/')
      .toPromise()
      .then(data => this.torneos = data as torneoModel[]);
  }
 // guardarFase(fase: faseModel): Observable<faseModel> {
 //   return this.http.post<faseModel>('http://localhost:3000/api/torneo_fase/', fase);
 // }
  //crearRanking(fase: rankingModel): Observable<rankingModel> {
  //  return this.http.post<rankingModel>('http://localhost:3000/api/ranking/', fase);
  //}http://localhost:3000/api/torneo/
}

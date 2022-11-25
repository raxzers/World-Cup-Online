import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { resultadoModel } from 'src/app/MODELS/resultadoModel';
import { quiniela_torneo_usuario_Model } from 'src/app/MODELS/quinielas_torneo_usuario_Model';

@Injectable({
  providedIn: 'root'
})
export class QuinielaService {

  APIurl = "https://.../";
  quinielas: quinielaModel[];

  constructor(private http: HttpClient) { }

  getQuinielas() {
    this.http.get('http://localhost:3000/api/quinielas/').toPromise().then(data => { this.quinielas = data as quinielaModel[]; });
  }

  getQuinielasUsuario(usuario: string): Observable<quinielaModel[]> {
    return this.http.get<quinielaModel[]>('http://localhost:3000/api/quinielas/' + usuario);
  }

  getQuinielasByTorneo(torneo: string): Observable<quinielaModel[]> {
    return this.http.get<quinielaModel[]>('http://localhost:3000/api/quinielas/name_torneo/' + torneo);
  }

  guardarQuiniela(quiniela: quinielaModel): Observable<quinielaModel> {
    return this.http.post<quinielaModel>('http://localhost:3000/api/quinielas/', quiniela);
  }

  get_quinielas_torneo_usuario(get_quiniela: quiniela_torneo_usuario_Model): Observable<quinielaModel[]> {
    return this.http.post<quinielaModel[]>('http://localhost:3000/api/quinielas/name_usuario/', get_quiniela);
  }

  //////////////
  getResultado(usuario: string): Observable<quinielaModel[]> {
    return this.http.get<quinielaModel[]>('http://localhost:3000/api/resultados/' + usuario);
  }
  ////////////////////////////

  guardarResultado(resultado: resultadoModel): Observable<resultadoModel> {
    return this.http.post<resultadoModel>('http://localhost:3000/api/resultados/', resultado);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comunidadModel } from 'src/app/MODELS/comunidadModel';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  constructor(private http: HttpClient) { }
  
  comunidad: comunidadModel[];

  guardarComunidad(comunidad: comunidadModel): Observable<comunidadModel> {
    return this.http.post<comunidadModel>('http://localhost:3000/api/comunidad_privada/', comunidad);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comunidadModel } from 'src/app/MODELS/comunidadModel';
import { communityGetModel } from 'src/app/MODELS/getComunityModel';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  constructor(private http: HttpClient) { }
  
  comunidad: comunidadModel[];
  comunidadGet:communityGetModel[];
  

  getComunidades(user): Promise<communityGetModel[]> {
    return this.http.get('http://localhost:3000/api/ranking_privado/'+ user)
      .toPromise()
      .then(data => this.comunidadGet = data as communityGetModel[]);
  }
  guardarComunidad(comunidad: comunidadModel): Observable<comunidadModel> {
    return this.http.post<comunidadModel>('http://localhost:3000/api/comunidad_privada/', comunidad);
  }
  
}

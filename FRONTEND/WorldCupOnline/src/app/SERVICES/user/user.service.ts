import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userModel } from 'src/app/MODELS/userModel';
import { paisModel } from 'src/app/MODELS/paisModel';
import { clientsModel } from 'src/app/MODELS/clientsModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private APIurl="https://.../";

  paises:paisModel[];
  constructor(private http: HttpClient) { }
  IsLoggedIn(){
    return JSON.parse(localStorage.getItem('rol'));
  }

  login(usuario :userModel){
    return this.http.post<userModel>('http://localhost:3000/api/usuarios/login/', usuario);
  }
  getUsers():Observable<userModel> {
    return this.http.get<userModel>(this.APIurl);
  } 
  obtenerPaises() {
    this.http.get('http://localhost:3000/api/paises_fifa/').toPromise().then(data => { this.paises = data as paisModel[]; });
  }
  obtenerPaises1(): Promise<paisModel[]> {
    return this.http.get('http://localhost:3000/api/paises_fifa/')
      .toPromise()
      .then(data => this.paises = data as paisModel[]);
  }
  guardarUsuario(usuario: clientsModel): Observable<clientsModel> {
    return this.http.post<clientsModel>('http://localhost:3000/api/usuarios/', usuario);
  }
}

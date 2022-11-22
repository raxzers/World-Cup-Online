import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userModel } from 'src/app/MODELS/userModel';
import { paisModel } from 'src/app/MODELS/paisModel';
import { clientsModel } from 'src/app/MODELS/clientsModel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/PAGES/register/popUp/pop-up/pop-up.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  private APIurl = "https://.../";
  openModal(title: string, message: string, yes: Function = null, no: Function = null) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: title,
      message: message
    };
    dialogConfig.minWidth = 400;

    const dialogRef = this.dialog.open(PopUpComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (yes) {
          yes();
        }
      } else {
        if (no) {
          no();
        }
      }

    });
  }


  paises: paisModel[];

  IsLoggedIn() {
    return JSON.parse(localStorage.getItem('rol'));
  }

  getRol() {
    return localStorage.getItem('rol');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  login(usuario: userModel) {
    return this.http.post<userModel>('http://localhost:3000/api/usuarios/login/', usuario);
  }
  getUsers(): Observable<userModel> {
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

  setAdmin(usuario: userModel): Observable<userModel> {
    return this.http.post<userModel>('http://localhost:3000/api/usuarios/', usuario);
  }
}

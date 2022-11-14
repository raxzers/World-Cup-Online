import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { clientsModel } from 'src/app/MODELS/clientsModel';
import { userModel } from 'src/app/MODELS/userModel';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let user: userModel;
  let registro:clientsModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule, MatDialogModule
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Verificar Login', (done) => {
    let user = {
      Username: 'Traznar',
      Password: 'papugod',
    }
    service.login(user).subscribe(data => {
      expect(JSON.stringify(data)).toEqual(JSON.stringify('admin'));
      done();
    });

  });
  it('Verificar Rol', () => {
    let user = {
      Username: 'Traznar',
      Password: 'papugod',
    }
    let rol=  service.IsLoggedIn();
    expect(rol).toBe('admin');
  });
  it('Verificar Registro', (done) => {
    let registro = {
      Fecha_Nacimiento: new Date("04/04/2000"),
      Nombre:"Brandon",
      Apellido1: "Gomez",
      Pais: "CostaRica",
      Correo: "nada@gmail.com",
      Password: "mac1234a",
      Username: "jajaja",
    }
    
    service.guardarUsuario(registro).subscribe(data => {
      expect(JSON.stringify(data)).toEqual(JSON.stringify("Ya el correo en  existe en la base de datos"));
      done();
    });

  });

})
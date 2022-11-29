import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { clientsModel } from 'src/app/MODELS/clientsModel';
import { userModel } from 'src/app/MODELS/userModel';
import { CommunityComponent } from 'src/app/PAGES/community/community/community.component';
import * as Rx from 'rxjs';
import { UserService } from './user.service';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
}
describe('UserService', () => {
  let service: UserService;
  let user: userModel;
  let registro: clientsModel;
  let fixture: ComponentFixture<CommunityComponent>;
  let matDialog: any;
  let httpClientSpy: { post: jasmine.Spy };
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule, MatDialogModule
      ]
    });
    // service = TestBed.inject(UserService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new UserService(httpClientSpy as any, matDialog as MatDialog);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Enviar registrar usuario', (done: DoneFn) => {
    var date = new Date("20/21/2000");
    const quiniela = { Fecha_Nacimiento: date,
      Nombre:"string",
      Apellido1: "string",
      Pais: "string",
      Correo: "string@gmail.com",
      Password: "abcd1234",
      Username: "string",};
    const error_ = {
      error: "Datos correcto",
      status: 200,
      statusText: "Datos Buenos"
    }
    httpClientSpy.post.and.returnValue(Rx.throwError(error_))
    service.guardarUsuario(quiniela).subscribe(resultado => {
    },
      error => {
        expect(error.status).toEqual(200);
        done();
      })
  });

  it('ver admin', (done: DoneFn) => {
    var date = new Date("20/21/2000");
    const quiniela = { Username: "string",
      Password: "abcd1234"};
    const error_ = {
      error: "Datos correcto",
      status: 200,
      statusText: "Datos Buenos"
    }
    httpClientSpy.post.and.returnValue(Rx.throwError(error_))
    service.setAdmin(quiniela).subscribe(resultado => {
    },
      error => {
        expect(error.status).toEqual(200);
        done();
      })
  });
});


  //DESCOMENTAR
  /* it('Verificar Login', (done) => {
     let user = {
       Username: 'admingod',
       Password: 'abcd1234',
     }
     service.login(user).subscribe(data => {
       expect(JSON.stringify(data)).toEqual(JSON.stringify("El usuario ingresado es incorrecto"));
       done();
     });
 
   });
  /* it('Verificar Rol', () => {
     let user = {
       Username: 'admingod',
       Password: 'abcd1234',
     }
     let rol=  service.IsLoggedIn();
     expect(rol).toBe([]);
   });
  /* it('Verificar Registro', (done) => {
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
 
   });*/

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { QuinielaService } from './quiniela.service';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
}

describe('QuinielaService', () => {
  let service: QuinielaService;
  //let httpClientMock: HttpClientMock;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new QuinielaService(httpClientSpy as any);

    /*
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ToastrModule.forRoot()]
    });

    service = TestBed.inject(QuinielaService);
    //httpClientMock = TestBed.get(QuinielaService);
    */
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //////////////////////////////////////////////////////////////////
  /*
    it('Enviar una quiniela con los datos correctos', (done: DoneFn) => {
      const quiniela = { id_Usuario: 1, id_Partido: 1, id_Jugadores_goles_Eq1: [1, 2], id_Jugadores_asistencias_Eq1: [1, 2], id_Jugadores_goles_Eq2: [3, 4], id_Jugadores_asistencias_Eq2: [3, 4], Goles_Eq1: 6, Goles_Eq2: 9, Autogoles_eq1: 3, Autogoles_eq2: 0, id_Jugador_GOAT: 21 };
      const mockResult = {
        status: 201
      }
  
      httpClientSpy.post.and.returnValue(Response)
      service.guardarQuiniela(quiniela).subscribe(resultado => {
  
        expect(mockResult.status).toEqual(201);
        done();
      },)
    });
    */

  it('Enviar una quiniela con los datos nulos', (done: DoneFn) => {
    const quiniela = { id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null };
    const error_ = {
      error: "Datos incorrectos",
      status: 409,
      statusText: "Datos nulos"
    }
    httpClientSpy.post.and.returnValue(throwError(error_))
    service.guardarQuiniela(quiniela).subscribe(resultado => {
    },
      error => {
        expect(error.status).toEqual(409);
        done();
      })
  });


  it('Enviar un resultado con los datos nulos', (done: DoneFn) => {
    const resultado = { id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null };
    const error_ = {
      error: "Datos incorrectos",
      status: 409,
      statusText: "Datos nulos"
    }
    httpClientSpy.post.and.returnValue(throwError(error_))
    service.guardarResultado(resultado).subscribe(resultado => {
    },
      error => {
        expect(error.status).toEqual(409);
        done();
      })
  });
});

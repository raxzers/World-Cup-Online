import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TorneoServiceService } from './torneo-service.service';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { throwError } from 'rxjs';

describe('TorneoServiceService', () => {
  let service: TorneoServiceService;
  let httpClientSpy: { post: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new TorneoServiceService(httpClientSpy as any);
    /*
    TestBed.configureTestingModule({ imports: [HttpClientModule], });
    service = TestBed.inject(TorneoServiceService);
    */
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //DESCOMENTAR
  /*  it('Verificar creacion torneo', (done) => {
      let registro = {
        Nombre: "Torneo TESTING",
        Fecha_inicio: new Date("04/04/2024"),
        Fecha_fin: new Date("04/04/2026"),
        Equipos: "Seleccion",
        Reglas: "No Rules",
        listaEquipos:["Costa Rica","Ecuador","Jamaica"],
        Fase:["Final, Tercer Lugar"],
      }
      
      service.guardarTorneo(registro).subscribe(data => {
        expect(JSON.stringify(data)).toEqual(JSON.stringify("El nombre del torneo ya existe, favor ingresar otro"));
        done();
      });
    });*/

  it('Enviar torneo con datos nulos', (done: DoneFn) => {
    const torneo = { Nombre: null, Fecha_inicio: null, Fecha_fin: null, Equipos: null, Reglas: null, listaEquipos: null, Fase: null };

    const error_ = {
      error: "Datos incorrectos",
      status: 409,
      statusText: "Datos nulos"
    }
    httpClientSpy.post.and.returnValue(throwError(error_))
    service.guardarTorneo(torneo).subscribe(resultado => {
    },
      error => {
        expect(error.status).toEqual(409);
        done();
      })
  });

});


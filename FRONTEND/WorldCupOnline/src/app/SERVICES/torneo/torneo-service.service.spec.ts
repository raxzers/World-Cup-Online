import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TorneoServiceService } from './torneo-service.service';
import { torneoModel } from 'src/app/MODELS/torneoModel';

describe('TorneoServiceService', () => {
  let service: TorneoServiceService;
  let torneo: torneoModel;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[HttpClientModule],});
    service = TestBed.inject(TorneoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Verificar creacion torneo', (done) => {
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
  });
});

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { VQuinielaComponent } from './v-quiniela.component';

describe('VQuinielaComponent', () => {
  let component: VQuinielaComponent;
  let fixture: ComponentFixture<VQuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VQuinielaComponent],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, MatDialogModule, ReactiveFormsModule, MatIconModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('encuentros de equipos', () => {
    const lista = component.encuentros;
    component.agregar_encuentro('Equipo 1', 'Equipo 2');
    component.agregar_encuentro('Equipo 3', 'Equipo 4');
    component.agregar_encuentro('Equipo 5', 'Equipo 6');

    expect(lista[1]).toEqual('Equipo 3 vs Equipo 4');
  });

  /*
  it('enlistar encuentros', () => {
    const partido_1 = component.partido_quiniela;
    const partido_2 = { ID: 1, Fecha: null, Hora: null, Nombre_Torneo: null, Fase: null, Equipo_1: null, Goles_Equipo_1: null, Equipo_2: null, Goles_Equipo_2: null, Sede: null, Estado_del_partido: null }

    component.set_partido(partido_2);


    expect(partido_1).toEqual(partido_2);
  });
  */

  it('limpiar el registro de datos', () => {

    component.partido_quiniela = { ID: null, Fecha: null, Hora: null, Nombre_Torneo: null, Fase: null, Equipo_1: null, Goles_Equipo_1: null, Equipo_2: null, Goles_Equipo_2: null, Sede: null, Estado_del_partido: null };
    component.Goles_Eq1 = null;
    component.Goles_Eq2 = null;
    component.Autogoles_eq1 = null;
    component.Autogoles_eq2 = null;
    component.mejor_Jugador = null;
    component.quinielas_torneo_usuario = [];
    component.goleadores = [];
    component.asistencias = [];

    component.goleadores_aux = [];
    component.asistencias_aux = [];

    component.encuentros = [];

    component.limpiar();
    let sin_registro: boolean;

    sin_registro = (
      //component.partido_quiniela == { ID: null, Fecha: null, Hora: null, Nombre_Torneo: null, Fase: null, Equipo_1: null, Goles_Equipo_1: null, Equipo_2: null, Goles_Equipo_2: null, Sede: null, Estado_del_partido: null };
      component.Goles_Eq1 == null &&
      component.Goles_Eq2 == null &&
      component.Autogoles_eq1 == null &&
      component.Autogoles_eq2 == null &&
      component.mejor_Jugador == null &&
      component.quinielas_torneo_usuario.length == 0 &&
      component.goleadores.length == 0 &&
      component.asistencias.length == 0 &&
      component.goleadores_aux.length == 0 &&
      component.asistencias_aux.length == 0 &&
      component.encuentros.length == 0
    )
    expect(sin_registro).toEqual(true);
  });

});

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { resultadoModel } from 'src/app/MODELS/resultadoModel';

import { LlenarQuinielaComponent } from './llenar-quiniela.component';

describe('LlenarQuinielaComponent', () => {
  let component: LlenarQuinielaComponent;
  let fixture: ComponentFixture<LlenarQuinielaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LlenarQuinielaComponent],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, MatDialogModule, ReactiveFormsModule, MatIconModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LlenarQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  ////////////////////////////////////////////////////////////////////////////////////

  it('verificar autogoles equipo 1', () => {
    const lista = component.partidos_por_torneo;
    component.auto_goles_1("4");
    let gol: number = component.Autogoles_eq1;
    expect(gol).toEqual(4);
  });

  it('verificar autogoles equipo 2', () => {
    component.auto_goles_2("7");
    let gol: number = component.Autogoles_eq2;
    expect(gol).toEqual(7);
  });

  it('llenar quiniela', () => {
    let quiniela_1: quinielaModel = { id_Usuario: 1, id_Partido: 1, id_Jugadores_goles_Eq1: [1, 2, 3], id_Jugadores_asistencias_Eq1: [1, 2, 3], id_Jugadores_goles_Eq2: [1, 2, 3], id_Jugadores_asistencias_Eq2: [1, 2, 3], Goles_Eq1: 0, Goles_Eq2: 0, Autogoles_eq1: 0, Autogoles_eq2: 0, id_Jugador_GOAT: 1 };
    component.llenar_quiniela(1, 1, [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], 0, 0, 0, 0, 1);
    let quiniela_2 = component.quiniela;
    expect(quiniela_2).toEqual(quiniela_1);
  });

  it('llenar resultado', () => {
    let resultado_1: resultadoModel = { id_Partido: 1, id_Jugadores_goles_Eq1: [1, 2, 3], id_Jugadores_asistencias_Eq1: [1, 2, 3], id_Jugadores_goles_Eq2: [1, 2, 3], id_Jugadores_asistencias_Eq2: [1, 2, 3], Goles_Eq1: 0, Goles_Eq2: 0, Autogoles_eq1: 0, Autogoles_eq2: 0, id_Jugador_GOAT: 1 };
    component.llenar_resultado(1, [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], 0, 0, 0, 0, 1);
    let resultado_2 = component.resultado;
    expect(resultado_2).toEqual(resultado_1);
  });

  it('asignar el mejor jugador', () => {
    component.mejor_jugador(3);
    let jugador = component.id_Jugador_GOAT;
    expect(jugador).toEqual(3);
  });

  it('limpiar el registro de datos', () => {
    component.jugadores_seleccion_1 = [];
    component.jugadores_seleccion_2 = [];
    component.jugadores_club_1 = [];
    component.jugadores_club_2 = [];
    component.Fecha = null;
    component.Hora = null;
    component.Nombre_Torneo = null;
    component.Fase = null;
    component.Equipo_1 = null;
    component.Goles_Equipo_1 = null;
    component.Equipo_2 = null;
    component.Goles_Equipo_2 = null;
    component.Sede = null;
    component.Estado_del_partido = null;

    component.jugadores_goles_1 = [{ ID: null, nombre: null, goles: null }];
    component.jugadores_goles_2 = [{ ID: null, nombre: null, goles: null }];
    component.goleadores = [];
    component.jugadores_asistencias_1 = [{ ID: null, nombre: null, asistencias: null }];
    component.jugadores_asistencias_2 = [{ ID: null, nombre: null, asistencias: null }];
    component.asistencias = [];

    component.Autogoles_eq1 = null;
    component.Autogoles_eq2 = null;
    component.partidos_por_torneo = [];
    component.todos_los_jugadores_seleccion = [];
    component.todos_los_jugadores_club = [];
    component.quiniela = { id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null };

    component.limpiar();
    let sin_registro: boolean;

    sin_registro = (component.jugadores_seleccion_1.length == 0) &&
      (component.jugadores_seleccion_2.length == 0) &&
      (component.jugadores_club_1.length == 0) &&
      (component.jugadores_club_2.length == 0) &&
      (component.Fecha == null) &&
      (component.Hora == null) &&
      (component.Nombre_Torneo == null) &&
      (component.Fase == null) &&
      (component.Equipo_1 == null) &&
      (component.Goles_Equipo_1 == null) &&
      (component.Equipo_2 == null) &&
      (component.Goles_Equipo_2 == null) &&
      (component.Sede == null) &&
      (component.Estado_del_partido == null) &&
      (component.Autogoles_eq1 == null) &&
      (component.Autogoles_eq2 == null) &&
      (component.partidos_por_torneo.length == 0) &&
      (component.todos_los_jugadores_seleccion.length == 0) &&
      (component.todos_los_jugadores_club.length == 0) &&
      (component.goleadores.length == 0) &&
      (component.asistencias.length == 0)
    //component.jugadores_goles_1 == [{ ID: null, nombre: null, goles: null }] && 
    //component.jugadores_goles_2 == [{ ID: null, nombre: null, goles: null }] &&
    //component.jugadores_asistencias_1 == [{ ID: null, nombre: null, asistencias: null }] &&
    //component.jugadores_asistencias_2 == [{ ID: null, nombre: null, asistencias: null }] &&
    //component.quiniela == { id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null };

    expect(sin_registro).toEqual(true);
  });

  it('sumar goles al equipo 1', () => {
    component.sumar_goleadores_1("1", "nombre", "apellido", "7");
    component.confirmar_goleadores_asistencias()
    let goles = component.Goles_Eq1;
    expect(goles).toEqual(7);
  });

  it('sumar goles al equipo 2', () => {
    component.sumar_goleadores_2("1", "nombre", "apellido", "15");
    component.confirmar_goleadores_asistencias()
    let goles = component.Goles_Eq2;
    expect(goles).toEqual(15);
  });

  it('sumar asistencias al equipo 1', () => {
    component.sumar_asistencias_1("1", "nombre", "apellido", "9");
    component.confirmar_goleadores_asistencias()
    let lista_asistencias = component.asistencias;
    let asistencias = lista_asistencias[0].asistencias;
    expect(asistencias).toEqual(9);
  });

  it('sumar asistencias al equipo 2', () => {
    component.sumar_asistencias_2("1", "nombre", "apellido", "14");
    component.confirmar_goleadores_asistencias()
    let lista_asistencias = component.asistencias;
    let asistencias = lista_asistencias[0].asistencias;
    expect(asistencias).toEqual(14);
  });


});

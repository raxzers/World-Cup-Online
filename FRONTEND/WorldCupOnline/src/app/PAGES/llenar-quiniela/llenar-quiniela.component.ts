import { Component, OnInit } from '@angular/core';
import { gameModel } from 'src/app/MODELS/gameModel';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { GameService } from 'src/app/SERVICES/game/game.service';
import { TeamService } from 'src/app/SERVICES/team/team.service';
import { jugador_club_Model } from 'src/app/MODELS/jugador_club_Model';
import { jugador_seleccion_Model } from 'src/app/MODELS/jugador_seleccion_Model';
import { jugador_goles_Model } from 'src/app/MODELS/jugador_goles_Model';
import { jugador_asistencias_Model } from 'src/app/MODELS/jugador_asistencias_Model';
import { LlenarDatosPartido } from 'src/app/LOGIC/llenar_datos_partido';
import { TorneoServiceService } from 'src/app/SERVICES/torneo/torneo-service.service';
import { jugador_quiniela_Model } from 'src/app/MODELS/jugador_quiniela_Model';
import { QuinielaService } from 'src/app/SERVICES/quiniela/quiniela.service';
import { ThisReceiver } from '@angular/compiler';
import { jugadorModel } from 'src/app/MODELS/jugadorModel';

@Component({
  selector: 'app-llenar-quiniela',
  templateUrl: './llenar-quiniela.component.html',
  styleUrls: ['./llenar-quiniela.component.scss']
})


export class LlenarQuinielaComponent implements OnInit {

  datos = new LlenarDatosPartido(this.partidoService, this.equipoService, this.torneoService);

  tipo_torneo: String = '';
  todos_los_jugadores_club: jugador_club_Model[] = [];
  todos_los_jugadores_seleccion: jugador_seleccion_Model[] = [];

  jugadores_1: jugador_quiniela_Model[] = [];
  jugadores_2: jugador_quiniela_Model[] = [];

  displayedColumns: string[] = ['nombre', 'goles', 'asistencias'];
  goleadoresColumns: string[] = ['nombre', 'goles'];
  asistenciasColumns: string[] = ['nombre', 'asistencias'];


  //variables y estructuras para manejar los datos del partido actual
  jugadores_seleccion_1: jugador_seleccion_Model[] = [];
  jugadores_seleccion_2: jugador_seleccion_Model[] = [];
  jugadores_club_1: jugador_club_Model[] = [];
  jugadores_club_2: jugador_club_Model[] = [];

  Fecha: Date;
  Hora: string;
  Nombre_Torneo: string;
  Fase: string;
  Equipo_1: string;
  Goles_Equipo_1: number;
  Equipo_2: string;
  Goles_Equipo_2: number;
  Sede: string;
  Estado_del_partido: string;



  jugadores_goles_1: jugador_goles_Model[] = [{ ID: 0, nombre: '', goles: 0 }];
  jugadores_goles_2: jugador_goles_Model[] = [{ ID: 0, nombre: '', goles: 0 }];
  goleadores: jugador_goles_Model[] = [];

  jugadores_asistencias_1: jugador_asistencias_Model[] = [{ ID: 0, nombre: '', asistencias: 0 }];
  jugadores_asistencias_2: jugador_asistencias_Model[] = [{ ID: 0, nombre: '', asistencias: 0 }];
  asistencias: jugador_asistencias_Model[] = [];


  //variables y estructuras para manejar los datos de la quiniela
  Id: number;
  id_Usuario: number = 0;
  id_Partido: number;
  id_Jugadores_goles_Eq1: number[] = [];
  id_Jugadores_asistencias_Eq1: number[] = [];
  id_Jugador_GOAT: number;
  Goles_Eq1: number = 0;
  Goles_Eq2: number = 0;
  id_Jugadores_goles_Eq2: number[] = [];
  id_Jugadores_asistencias_Eq2: number[] = [];
  Autogoles_eq1: number = 0;
  Autogoles_eq2: number = 0;


  quiniela: quinielaModel = { id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null };

  partidos: gameModel[];
  partidos_por_torneo: gameModel[];
  torneos: torneoModel[];
  //nombre_torneos: string[] = [];

  constructor(public partidoService: GameService, public equipoService: TeamService, public torneoService: TorneoServiceService, public quinielaService: QuinielaService) { }

  ngOnInit(): void {
    this.partidoService.obtener_partidos().subscribe((data: gameModel[]) => {
      this.partidos = data
    });

    this.partidoService.obtener_torneos().subscribe((data: torneoModel[]) => {
      this.torneos = data
      /*
      for (let torn of this.torneos) {
        this.nombre_torneos.push(torn.Nombre)
      }
      */
    });

  }

  obtener_datos_torneo(nombre_torneo: String, tipo_torneo: String) {

    this.partidos_por_torneo = this.datos.obtener_partidos_por_torneo(nombre_torneo);
    this.tipo_torneo = tipo_torneo;
  }
  /*
    obtener_jugadores(partido: gameModel, tipo_torneo: String) {
      this.jugadores_1 = this.datos.jugadores_quiniela_seleccion(partido.Equipo_1)
      this.jugadores_2 = this.datos.jugadores_quiniela_seleccion(partido.Equipo_2)
    }
  
    obtener_partidos_por_torneo(torneo: String) {
      this.partidos_por_torneo = this.datos.obtener_partidos_por_torneo(torneo)
      return this.partidos_por_torneo;
    }
  */
  partido_a_pronosticar(juego: gameModel, tipo_torneo: String) {
    this.id_Partido = juego.ID;
    this.Fecha = juego.Fecha;
    this.Hora = juego.Hora;
    this.Nombre_Torneo = juego.Nombre_Torneo;
    this.Fase = juego.Fase;
    this.Equipo_1 = juego.Equipo_1;
    this.Goles_Equipo_1 = juego.Goles_Equipo_1;
    this.Equipo_2 = juego.Equipo_2;
    this.Goles_Equipo_2 = juego.Goles_Equipo_2;
    this.Sede = juego.Sede;
    this.Estado_del_partido = juego.Estado_del_partido;
    if (tipo_torneo === 'Seleccion') {
      this.jugadores_por_seleccion_1(this.Equipo_1);
      this.jugadores_por_seleccion_2(this.Equipo_2);
    }
    else if (tipo_torneo === 'Club') {
      this.jugadores_por_club_1(this.Equipo_1);
      this.jugadores_por_club_2(this.Equipo_2);
    }
  }


  jugadores_por_seleccion_1(equipo: String) {
    this.equipoService.obtener_jugadores_por_seleccion(equipo).subscribe((data: jugador_seleccion_Model[]) => {
      this.jugadores_seleccion_1 = data
    });
  }

  jugadores_por_seleccion_2(equipo: String) {
    this.equipoService.obtener_jugadores_por_seleccion(equipo).subscribe((data: jugador_seleccion_Model[]) => {
      this.jugadores_seleccion_2 = data
    });
  }

  jugadores_por_club_1(equipo: String) {
    this.equipoService.obtener_jugadores_por_club(equipo).subscribe((data: jugador_club_Model[]) => {
      this.jugadores_club_1 = data
    });
  }

  jugadores_por_club_2(equipo: String) {
    this.equipoService.obtener_jugadores_por_club(equipo).subscribe((data: jugador_club_Model[]) => {
      this.jugadores_club_2 = data
    });
  }

  mejor_jugador(jugador_ID: number) {
    this.id_Jugador_GOAT = jugador_ID;
  }

  listar_jugadores(tipo_torneo: String) {
    this.todos_los_jugadores_seleccion = [];
    this.todos_los_jugadores_club = [];
    let jugador_aux: jugadorModel = { ID: null, nombre: null };

    if (tipo_torneo == 'Seleccion') {
      for (let j1 of this.jugadores_seleccion_1) {
        this.todos_los_jugadores_seleccion.push(j1);
      }

      for (let j2 of this.jugadores_seleccion_2) {
        this.todos_los_jugadores_seleccion.push(j2);
      }
    }
    else if (tipo_torneo == 'Club') {

      for (let j1 of this.jugadores_club_1) {
        this.todos_los_jugadores_club.push(j1);
      }

      for (let j2 of this.jugadores_club_2) {
        this.todos_los_jugadores_club.push(j2);
      }
    }
  }


  limpiar() {
    this.jugadores_seleccion_1 = [];
    this.jugadores_seleccion_2 = [];
    this.jugadores_club_1 = [];
    this.jugadores_club_2 = [];
    this.Fecha = null;
    this.Hora = null;
    this.Nombre_Torneo = null;
    this.Fase = null;
    this.Equipo_1 = null;
    this.Goles_Equipo_1 = null;
    this.Equipo_2 = null;
    this.Goles_Equipo_2 = null;
    this.Sede = null;
    this.Estado_del_partido = null;

    this.jugadores_goles_1 = [{ ID: null, nombre: null, goles: null }];
    this.jugadores_goles_2 = [{ ID: null, nombre: null, goles: null }];
    this.goleadores = [];
    this.jugadores_asistencias_1 = [{ ID: null, nombre: null, asistencias: null }];
    this.jugadores_asistencias_2 = [{ ID: null, nombre: null, asistencias: null }];
    this.asistencias = [];

    this.Autogoles_eq1 = null;
    this.Autogoles_eq2 = null;
    this.partidos_por_torneo = [];
    this.todos_los_jugadores_seleccion = [];
    this.todos_los_jugadores_club = [];
    this.quiniela = { id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null };
  }

  guardar_quiniela() {
    let quiniela = this.quiniela;
    if (quiniela.id_Usuario == null || quiniela.id_Partido == null || quiniela.id_Jugadores_goles_Eq1 == null || quiniela.id_Jugadores_asistencias_Eq1 == null || quiniela.id_Jugadores_goles_Eq2 == null || quiniela.id_Jugadores_asistencias_Eq2 == null || quiniela.Goles_Eq1 == null || quiniela.Goles_Eq2 == null || quiniela.Autogoles_eq1 == null || quiniela.Autogoles_eq2 == null || quiniela.id_Jugador_GOAT == null) {
      console.log('quiniela incompleta')
    }
    else {
      this.quinielaService.guardarQuiniela(quiniela).subscribe(data => { })
    }

    this.limpiar();
  }

  llenar_quiniela(id_Usuario: number, id_Partido: number, id_Jugadores_goles_Eq1: number[], id_Jugadores_asistencias_Eq1: number[], id_Jugadores_goles_Eq2: number[], id_Jugadores_asistencias_Eq2: number[], Goles_Eq1: number, Goles_Eq2: number, Autogoles_eq1: number, Autogoles_eq2: number, id_Jugador_GOAT: number) {
    this.quiniela = { id_Usuario: id_Usuario, id_Partido: id_Partido, id_Jugadores_goles_Eq1: id_Jugadores_goles_Eq1, id_Jugadores_asistencias_Eq1: id_Jugadores_asistencias_Eq1, id_Jugadores_goles_Eq2: id_Jugadores_asistencias_Eq1, id_Jugadores_asistencias_Eq2: id_Jugadores_asistencias_Eq1, Goles_Eq1: Goles_Eq1, Goles_Eq2: Goles_Eq2, Autogoles_eq1: Autogoles_eq1, Autogoles_eq2: Autogoles_eq2, id_Jugador_GOAT: id_Jugador_GOAT };
    return this.quiniela;
  }

  sumar_goleadores_1(ID: string, nombre: string, apellido: string, goles: string) {

    let existe_id = false;
    let nuevo_goleador: jugador_goles_Model = { ID: +ID, nombre: nombre + ' ' + apellido, goles: +goles };

    for (let jugador of this.jugadores_goles_1) {
      if (jugador.ID == +ID) {
        existe_id = true;
      }
    }
    if (existe_id == false) {
      this.jugadores_goles_1.push(nuevo_goleador);
    }
    else {
      for (let jugador of this.jugadores_goles_1) {
        if (jugador.ID == +ID) {
          jugador.goles = +goles;
        }
      }
    }
  }

  sumar_asistencias_1(ID: string, nombre: string, apellido: string, asistencias: string) {

    let existe_id = false;
    let nueva_asistencia: jugador_asistencias_Model = { ID: +ID, nombre: nombre + ' ' + apellido, asistencias: +asistencias };

    for (let jugador of this.jugadores_asistencias_1) {
      if (jugador.ID == +ID) {
        existe_id = true;
      }
    }
    if (existe_id == false) {
      this.jugadores_asistencias_1.push(nueva_asistencia);
    }
    else {
      for (let jugador of this.jugadores_asistencias_1) {
        if (jugador.ID == +ID) {
          jugador.asistencias = +asistencias;
        }
      }
    }
  }


  sumar_goleadores_2(ID: string, nombre: string, apellido: string, goles: string) {
    let existe_id = false;
    let nuevo_goleador: jugador_goles_Model = { ID: +ID, nombre: nombre + ' ' + apellido, goles: +goles };

    for (let jugador of this.jugadores_goles_2) {
      if (jugador.ID == +ID) {
        existe_id = true;
      }
    }
    if (existe_id == false) {
      this.jugadores_goles_2.push(nuevo_goleador);
    }
    else {
      for (let jugador of this.jugadores_goles_2) {
        if (jugador.ID == +ID) {
          jugador.goles = +goles;
        }
      }
    }
  }

  sumar_asistencias_2(ID: string, nombre: string, apellido: string, asistencias: string) {

    let existe_id = false;
    let nueva_asistencia: jugador_asistencias_Model = { ID: +ID, nombre: nombre + ' ' + apellido, asistencias: +asistencias };

    for (let jugador of this.jugadores_asistencias_2) {
      if (jugador.ID == +ID) {
        existe_id = true;
      }
    }
    if (existe_id == false) {
      this.jugadores_asistencias_2.push(nueva_asistencia);
    }
    else {
      for (let jugador of this.jugadores_asistencias_2) {
        if (jugador.ID == +ID) {
          jugador.asistencias = +asistencias;
        }
      }
    }
  }

  confirmar_goleadores_asistencias() {

    this.goleadores = [];
    this.asistencias = [];
    this.Goles_Eq2 = 0;
    this.Goles_Equipo_2 = 0;

    let goles_1: number = 0;
    let goles_2: number = 0;

    for (let jugador of this.jugadores_goles_1) {
      if (jugador.goles <= 0) {
      }
      else if (jugador.goles > 0) {
        goles_1 += jugador.goles;
        this.id_Jugadores_goles_Eq1.push(jugador.ID)
        this.goleadores.push(jugador);
      }
    }

    for (let jugador of this.jugadores_asistencias_1) {
      if (jugador.asistencias <= 0) {
      }
      else if (jugador.asistencias > 0) {
        this.id_Jugadores_asistencias_Eq1.push(jugador.ID)
        this.asistencias.push(jugador);
      }
    }

    for (let jugador of this.jugadores_goles_2) {
      if (jugador.goles <= 0) {
      }
      else if (jugador.goles > 0) {
        goles_2 += jugador.goles;
        this.id_Jugadores_goles_Eq2.push(jugador.ID)
        this.goleadores.push(jugador);
      }
    }

    for (let jugador of this.jugadores_asistencias_2) {
      if (jugador.asistencias <= 0) {
      }
      else if (jugador.asistencias > 0) {
        this.id_Jugadores_asistencias_Eq2.push(jugador.ID)
        this.asistencias.push(jugador);
      }
    }

    this.Goles_Eq1 = goles_1 + this.Autogoles_eq1;
    this.Goles_Equipo_1 = this.Goles_Eq1;

    this.Goles_Eq2 = goles_2 + this.Autogoles_eq2;
    this.Goles_Equipo_2 = this.Goles_Eq2;

    this.llenar_quiniela(this.id_Usuario, this.id_Partido, this.id_Jugadores_goles_Eq1, this.id_Jugadores_asistencias_Eq1, this.id_Jugadores_goles_Eq2, this.id_Jugadores_asistencias_Eq2, this.Goles_Eq1, this.Goles_Eq2, this.Autogoles_eq1, this.Autogoles_eq2, 666)
  }

  auto_goles_1(autogoles: string) {
    if (+autogoles > 0) {
      this.Autogoles_eq1 = +autogoles;
    }
    else {
      this.Autogoles_eq1 = 0;
    }
  }

  auto_goles_2(autogoles: string) {
    if (+autogoles > 0) {
      this.Autogoles_eq2 = +autogoles;
    }
    else {
      this.Autogoles_eq2 = 0;
    }
  }
}

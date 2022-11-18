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

@Component({
  selector: 'app-llenar-quiniela',
  templateUrl: './llenar-quiniela.component.html',
  styleUrls: ['./llenar-quiniela.component.scss']
})


export class LlenarQuinielaComponent implements OnInit {

  datos = new LlenarDatosPartido(this.partidoService, this.equipoService, this.torneoService);

  tipo_torneo: string = '';

  jugadores_seleccion_1: jugador_seleccion_Model[] = [];
  jugadores_seleccion_2: jugador_seleccion_Model[] = [];

  jugadores_club_1: jugador_club_Model[] = [];
  jugadores_club_2: jugador_club_Model[] = [];

  ////////////////////////////////////////////////////////////////////////////////////////////////
  //jugadores: string[] = ['jugador 1', 'jugador 2', 'jugador 3'];

  jugadores_equipo_1: jugador_seleccion_Model[] = [];
  jugadores_equipo_2: jugador_seleccion_Model[] = [];

  displayedColumns: string[] = ['goleador', 'goles', 'asistencias'];
  goleadoresColumns: string[] = ['goleador', 'goles'];
  asistenciasColumns: string[] = ['asiste', 'asistencias'];

  jugadores_goles_1: jugador_goles_Model[] = [{ ID: 0, goles: 0 }];
  jugadores_goles_2: jugador_goles_Model[] = [{ ID: 0, goles: 0 }];
  goleadores: jugador_goles_Model[] = [];

  jugadores_asistencias_1: jugador_asistencias_Model[] = [{ ID: 0, asistencias: 0 }];
  jugadores_asistencias_2: jugador_asistencias_Model[] = [{ ID: 0, asistencias: 0 }];
  asistencias: jugador_asistencias_Model[] = [];

  Id: number;
  id_usuario: number;
  id_Partido: number;
  id_Jugadores_goles_Eq1: number[] = [];
  id_Jugadores_asistencia_Eq1: number[] = [];
  id_Jugador_GOAT: number;
  Goles_Eq1: number = 0;
  Goles_Eq2: number = 0;
  id_Jugadores_goles_Eq2: number[] = [];
  id_Jugadores_asistencias_Eq2: number[] = [];
  Autogoles_eq1: number = 0;
  Autogoles_eq2: number = 0;



  quiniela: quinielaModel;
  // = { Id: 0, id_usuario: 0, id_Partido: 0, id_Jugadores_goles_Eq1: [], id_Jugadores_asistencia_Eq1: [], id_Jugador_GOAT: 0, Goles_Eq1: 0, Goles_Eq2: 0, id_Jugadores_goles_Eq2: [], id_Jugadores_asistencias_Eq2: [], Autogoles_eq1: 0, Autogoles_eq2: 0 };

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

  partidos: gameModel[];
  partidos_por_torneo: gameModel[];
  torneos: torneoModel[];
  nombre_torneos: string[] = [];

  constructor(public partidoService: GameService, public equipoService: TeamService, public torneoService: TorneoServiceService) { }

  ngOnInit(): void {
    this.partidoService.obtener_partidos().subscribe((data: gameModel[]) => {
      this.partidos = data
    });

    this.partidoService.obtener_torneos().subscribe((data: torneoModel[]) => {
      this.torneos = data
      for (let torn of this.torneos) {
        this.nombre_torneos.push(torn.Nombre)
      }
    });

  }

  obtener_datos_torneo(torneo: String) {
    this.partidos_por_torneo = this.datos.obtener_partidos_por_torneo(torneo);
    this.tipo_torneo = this.datos.tipo_torneo(torneo);
  }

  obtener_datos_partido(partido: gameModel, tipo: String) {
    this.jugadores_seleccion_1 = [];
    this.jugadores_seleccion_2 = [];
    this.jugadores_club_1 = [];
    this.jugadores_club_2 = [];

    if (tipo == 'Seleccion') {
      this.jugadores_seleccion_1 = this.datos.jugadores_por_seleccion(partido.Equipo_1)
      this.jugadores_seleccion_2 = this.datos.jugadores_por_seleccion(partido.Equipo_2)
    }
    else if (tipo == 'Seleccion') {
      this.jugadores_club_1 = this.datos.jugadores_por_club(partido.Equipo_1)
      this.jugadores_club_2 = this.datos.jugadores_por_club(partido.Equipo_2)
    }
    else {
      console.log('tipo de torneo incorrecto')
    }


  }

  obtener_partidos_por_torneo(torneo: String) {
    /*
    this.partidoService.obtener_partidos_por_torneo(torneo).subscribe((data: gameModel[]) => {
      this.partidos_por_torneo = data
    });
    return this.partidos_por_torneo;
    */
    this.partidos_por_torneo = this.datos.obtener_partidos_por_torneo(torneo)

    return this.partidos_por_torneo;

  }

  partido_a_pronosticar(juego: gameModel) {
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

    this.jugadores_por_equipo_1(this.Equipo_1);

    this.jugadores_por_equipo_2(this.Equipo_2);


  }

  jugadores_por_equipo_1(equipo: String) {
    this.equipoService.obtener_jugadores_por_seleccion(equipo).subscribe((data: jugador_seleccion_Model[]) => {
      this.jugadores_equipo_1 = data
    });
  }

  jugadores_por_equipo_2(equipo: String) {
    this.equipoService.obtener_jugadores_por_seleccion(equipo).subscribe((data: jugador_seleccion_Model[]) => {
      this.jugadores_equipo_2 = data
    });
  }

  limpiar_lista() {
    this.jugadores_equipo_1 = [];
    this.jugadores_equipo_2 = [];

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
  }

  llenar_quiniela() {
    this.quiniela = { Id: this.Id, id_usuario: this.id_usuario, id_Partido: this.id_Partido, id_Jugadores_goles_Eq1: this.id_Jugadores_goles_Eq1, id_Jugadores_asistencia_Eq1: this.id_Jugadores_asistencia_Eq1, id_Jugador_GOAT: this.id_Jugador_GOAT, Goles_Eq1: this.Goles_Eq1, Goles_Eq2: this.Goles_Eq2, id_Jugadores_goles_Eq2: this.id_Jugadores_goles_Eq2, id_Jugadores_asistencias_Eq2: this.id_Jugadores_asistencias_Eq2, Autogoles_eq1: this.Autogoles_eq1, Autogoles_eq2: this.Autogoles_eq2 };
    return this.quiniela;
  }

  sumar_goleadores_1(ID: string, goles: string) {

    let existe_id = false;
    let nuevo_goleador: jugador_goles_Model = { ID: +ID, goles: +goles };

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

  sumar_asistencias_1(ID: string, asistencias: string) {

    let existe_id = false;
    let nueva_asistencia: jugador_asistencias_Model = { ID: +ID, asistencias: +asistencias };

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


  sumar_goleadores_2(ID: string, goles: string) {
    let existe_id = false;
    let nuevo_goleador: jugador_goles_Model = { ID: +ID, goles: +goles };

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

  sumar_asistencias_2(ID: string, asistencias: string) {

    let existe_id = false;
    let nueva_asistencia: jugador_asistencias_Model = { ID: +ID, asistencias: +asistencias };

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
        this.id_Jugadores_asistencia_Eq1.push(jugador.ID)
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

    this.Goles_Eq1 = goles_1;
    this.Goles_Equipo_1 = goles_1 + this.Autogoles_eq1;
    this.Goles_Eq1 += this.Autogoles_eq2;

    this.Goles_Eq2 = goles_2;
    this.Goles_Equipo_2 = goles_2 + this.Autogoles_eq2;
    this.Goles_Eq2 += this.Autogoles_eq1;

    //this.goleadores = this.goleadores.concat(this.jugadores_goles_1, this.jugadores_goles_2);
    //this.asistencias = this.asistencias.concat(this.jugadores_asistencias_1, this.jugadores_asistencias_2);
  }

  guardar_quiniela() {

  }

  auto_goles_1(autogoles: string) {
    if (+autogoles > 0) {
      this.Autogoles_eq1 = +autogoles;
    }
  }

  auto_goles_2(autogoles: string) {
    if (+autogoles > 0) {
      this.Autogoles_eq2 = +autogoles;
    }
  }

  /*
  x() {
    let ldp = new LlenarDatosPartido(this.partidoService, this.equipoService)
    let result: gameModel[];
    result = ldp.obtener_partidos_por_torneo('Torneo 2')
    console.log(result)
  }
  */

}

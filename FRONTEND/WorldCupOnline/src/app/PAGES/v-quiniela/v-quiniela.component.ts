import { Component, OnInit } from '@angular/core';
import { gameModel } from 'src/app/MODELS/gameModel';
import { jugador_asistencias_Model } from 'src/app/MODELS/jugador_asistencias_Model';
import { jugador_goles_Model } from 'src/app/MODELS/jugador_goles_Model';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { GameService } from 'src/app/SERVICES/game/game.service';
import { QuinielaService } from 'src/app/SERVICES/quiniela/quiniela.service';
import { TeamService } from 'src/app/SERVICES/team/team.service';

@Component({
  selector: 'app-v-quiniela',
  templateUrl: './v-quiniela.component.html',
  styleUrls: ['./v-quiniela.component.scss']
})
export class VQuinielaComponent implements OnInit {

  goleadoresColumns: string[] = ['nombre', 'goles'];
  asistenciasColumns: string[] = ['nombre', 'asistencias'];

  goleadores: jugador_goles_Model[] = [];
  asistencias: jugador_asistencias_Model[] = [];

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

  autogoles1: string;
  autogoles2: string;

  partidos: gameModel[];
  partidos_por_torneo: gameModel[];
  torneos: torneoModel[];

  /*
  quinielas_usuario: quinielaModel[] = [
    { id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null },
    { id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null }
  ];
  */


  constructor(public partidoService: GameService, public equipoService: TeamService, public quinielaService: QuinielaService) { }

  ngOnInit(): void {
    this.partidoService.obtener_partidos().subscribe((data: gameModel[]) => {
      this.partidos = data
    });

    this.partidoService.obtener_torneos().subscribe((data: torneoModel[]) => {
      this.torneos = data
    });
  }

  obtener_partidos_por_torneo(torneo: String) {
    this.partidoService.obtener_partidos_por_torneo(torneo).subscribe((data: gameModel[]) => {
      this.partidos_por_torneo = data
    });
    return this.partidos_por_torneo;
  }

  obtener_quiniela_por_usuario(id_Usuario: string) {
    let q_aux: quinielaModel[] = [];
    let q: quinielaModel[] = [];

    this.quinielaService.getQuinielasUsuario(id_Usuario).subscribe((data: quinielaModel[]) => {
      q_aux = data
      for (let x of q_aux) {
        q.push(x);
      }
    });
    return q
  }

  quiniela_del_partido(juego: gameModel) {
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
    this.autogoles1 = "0";
    this.autogoles2 = "0";
  }

}

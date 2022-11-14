import { Component, OnInit } from '@angular/core';
import { gameModel } from 'src/app/MODELS/gameModel';
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

  Fecha: Date;
  Hora: string;
  Nombre_Torneo: string;
  Fase: string;
  Equipo_1: string;
  Goles_Equipo_1:number;
  Equipo_2: string;
  Goles_Equipo_2:number;
  Sede: string;
  Estado_del_partido: string;

  autogoles1:string;
  autogoles2:string;

  partidos:gameModel[];
  partidos_por_torneo:gameModel[];
  torneos:torneoModel[];
  nombre_torneos:string[] = [];

  quinielas_usuario: quinielaModel[] = [
    { Id: 0, id_usuario: 0, id_Partido: 0, id_Jugadores_goles_Eq1: [], id_Jugadores_asistencia_Eq1: [], id_Jugador_GOAT: 0, Goles_Eq1: 0, Goles_Eq2: 0, id_Jugadores_goles_Eq2: [], id_Jugadores_asistencias_Eq2: [], Autogoles_eq1: 0, Autogoles_eq2: 0 },
    { Id: 1, id_usuario: 0, id_Partido: 0, id_Jugadores_goles_Eq1: [], id_Jugadores_asistencia_Eq1: [], id_Jugador_GOAT: 0, Goles_Eq1: 0, Goles_Eq2: 0, id_Jugadores_goles_Eq2: [], id_Jugadores_asistencias_Eq2: [], Autogoles_eq1: 0, Autogoles_eq2: 0 } 
  ];

  constructor(public partidoService:GameService, public equipoService:TeamService, public quinielaService:QuinielaService) { }

  ngOnInit(): void {
    this.partidoService.obtener_partidos().subscribe((data:gameModel[]) => {
      this.partidos=data
    });

    this.partidoService.obtener_torneos().subscribe((data:torneoModel[]) => {
      this.torneos=data
      for(let torn of this.torneos){
        this.nombre_torneos.push(torn.Nombre)
      }
    });  
  }

  obtener_partidos_por_torneo(torneo: String){
    this.partidoService.obtener_partidos_por_torneo(torneo).subscribe((data:gameModel[]) => {
      this.partidos_por_torneo=data
    });
    return this.partidos_por_torneo;
  }

  quiniela_del_partido(juego:gameModel){
    this.Fecha=juego.Fecha;
    this.Hora=juego.Hora;
    this.Nombre_Torneo=juego.Nombre_Torneo;
    this.Fase=juego.Fase;
    this.Equipo_1=juego.Equipo_1;
    this.Goles_Equipo_1=juego.Goles_Equipo_1;
    this.Equipo_2=juego.Equipo_2;
    this.Goles_Equipo_2=juego.Goles_Equipo_2;
    this.Sede=juego.Sede;
    this.Estado_del_partido=juego.Estado_del_partido;
    this.autogoles1="0";
    this.autogoles2="0";
  }

}

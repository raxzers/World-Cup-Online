import { Component, OnInit } from '@angular/core';
import { gameModel } from 'src/app/MODELS/gameModel';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { GameService } from 'src/app/SERVICES/game/game.service';

@Component({
  selector: 'app-llenar-quiniela',
  templateUrl: './llenar-quiniela.component.html',
  styleUrls: ['./llenar-quiniela.component.scss']
})
export class LlenarQuinielaComponent implements OnInit {

  torns:string[]=['Torneo 1','Torneo 2','Torneo 3','Torneo 4'];

  x: gameModel[] = [
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 1', Fase: 'fase', Equipo_1: 'Heredia', Goles_Equipo_1: 0, Equipo_2: 'Oslo', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 1', Fase: 'fase', Equipo_1: 'Juventus', Goles_Equipo_1: 0, Equipo_2: 'Saprisa', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 1', Fase: 'fase', Equipo_1: 'Alemania', Goles_Equipo_1: 0, Equipo_2: 'Belgica', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 2', Fase: 'fase', Equipo_1: 'FC Barcelona', Goles_Equipo_1: 0, Equipo_2: 'Monterrey', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 2', Fase: 'fase', Equipo_1: 'Milan', Goles_Equipo_1: 0, Equipo_2: 'Liga', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 3', Fase: 'fase', Equipo_1: 'Escocia', Goles_Equipo_1: 0, Equipo_2: 'Nicaragua', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'} 
  ];

  jugadores: string[] = ['jugador 1', 'jugador 2', 'jugador 3'];

  quiniela: quinielaModel[] = [
    { Id: 0, id_usuario: 0, id_Partido: 0, id_Jugadores_goles_Eq1: 0, id_Jugadores_asistencia_Eq1: 0, id_Jugador_GOAT: 0, Goles_Eq1: 0, Goles_Eq2: 0, id_Jugadores_goles_Eq2: 0, id_Jugadores_asistencias_Eq2: 0, Autogoles: 0 }
    
  ];

  partidos:gameModel[];
  partidos_por_torneo:gameModel[];
  torneos:torneoModel[];
  nombre_torneos:string[] = [];

  constructor(public partidoService:GameService) { }

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
  }
  
}

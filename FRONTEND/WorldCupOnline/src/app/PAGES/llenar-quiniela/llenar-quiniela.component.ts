import { Component, OnInit } from '@angular/core';
import { gameModel } from 'src/app/MODELS/gameModel';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { GameService } from 'src/app/SERVICES/game/game.service';
import { TeamService } from 'src/app/SERVICES/team/team.service';
import { jugador_club_Model } from 'src/app/MODELS/jugador_club_Model';
import { jugador_seleccion_Model } from 'src/app/MODELS/jugador_seleccion_Model';

@Component({
  selector: 'app-llenar-quiniela',
  templateUrl: './llenar-quiniela.component.html',
  styleUrls: ['./llenar-quiniela.component.scss']
})


export class LlenarQuinielaComponent implements OnInit {

  jugadores: string[] = ['jugador 1', 'jugador 2', 'jugador 3'];

  jugadores_equipo_1:jugador_seleccion_Model[]=[];
  jugadores_equipo_2:jugador_seleccion_Model[]=[];

  displayedColumns: string[] = ['goleador', 'goles', 'asistencias'];
  
  
  torns:string[]=['Torneo 1','Torneo 2','Torneo 3','Torneo 4'];

  x: gameModel[] = [
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 1', Fase: 'fase', Equipo_1: 'Heredia', Goles_Equipo_1: 0, Equipo_2: 'Oslo', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 1', Fase: 'fase', Equipo_1: 'Juventus', Goles_Equipo_1: 0, Equipo_2: 'Saprisa', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 1', Fase: 'fase', Equipo_1: 'Alemania', Goles_Equipo_1: 0, Equipo_2: 'Belgica', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 2', Fase: 'fase', Equipo_1: 'FC Barcelona', Goles_Equipo_1: 0, Equipo_2: 'Monterrey', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 2', Fase: 'fase', Equipo_1: 'Milan', Goles_Equipo_1: 0, Equipo_2: 'Liga', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'},
    { Fecha: null, Hora: 'hora', Nombre_Torneo: 'Torneo 3', Fase: 'fase', Equipo_1: 'Escocia', Goles_Equipo_1: 0, Equipo_2: 'Nicaragua', Goles_Equipo_2: 0, Sede: 'sede', Estado_del_partido: 'estado'} 
  ];


  quiniela: quinielaModel[] = [
    { Id: 0, id_usuario: 0, id_Partido: 0, id_Jugadores_goles_Eq1: 0, id_Jugadores_asistencia_Eq1: 0, id_Jugador_GOAT: 0, Goles_Eq1: 0, Goles_Eq2: 0, id_Jugadores_goles_Eq2: 0, id_Jugadores_asistencias_Eq2: 0, Autogoles: 0 }
    
  ];

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

  gol_aux:number;
  goles:any[]=[];

  partidos:gameModel[];
  partidos_por_torneo:gameModel[];
  torneos:torneoModel[];
  nombre_torneos:string[] = [];

  constructor(public partidoService:GameService, public equipoService:TeamService) {}

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
  
  partido_a_pronosticar(juego:gameModel){
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

    this.jugadores_por_equipo_1(this.Equipo_1);

    this.jugadores_por_equipo_2(this.Equipo_2);
  }

  jugadores_por_equipo_1(equipo:String){
    this.equipoService.obtener_jugadores_por_seleccion(equipo).subscribe((data:jugador_seleccion_Model[]) => {
      this.jugadores_equipo_1=data
    });
  }

  jugadores_por_equipo_2(equipo:String){
    this.equipoService.obtener_jugadores_por_seleccion(equipo).subscribe((data:jugador_seleccion_Model[]) => {
      this.jugadores_equipo_2=data
    }); 
  }

  limpiar_lista(){
    this.jugadores_equipo_1=[];
    this.jugadores_equipo_2=[];

    this.Fecha=null;
    this.Hora=null;
    this.Nombre_Torneo=null;
    this.Fase=null;
    this.Equipo_1=null;
    this.Goles_Equipo_1=null;
    this.Equipo_2=null;
    this.Goles_Equipo_2=null;
    this.Sede=null;
    this.Estado_del_partido=null;

  }

  guardar_quiniela(){

  }

  sumar_goles_1(goles:any){

    console.log(goles);
    
    
    this.gol_aux=+goles;

    this.Goles_Equipo_1=(this.gol_aux);
  }

  sumar_goles_2(goles:string){
    this.Goles_Equipo_2=(+goles);
  }
}

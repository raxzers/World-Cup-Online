import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { gameModel } from 'src/app/MODELS/gameModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { torneo_equipo_Model } from 'src/app/MODELS/torneo_equipo_Model';
import { torneo_fase_Model } from 'src/app/MODELS/torneo_fase_Model';
import { GameService } from 'src/app/SERVICES/game/game.service';

@Component({
  selector: 'app-new-football-game',
  templateUrl: './new-football-game.component.html',
  styleUrls: ['./new-football-game.component.scss']
})
export class NewFootballGameComponent implements OnInit {

  //torneos:string[]=["torneo1","torneo2","torneo3","torneo4","torneo5","torneo6","torneo7","torneo8"];
  torneos:torneoModel[];

  nombre_torneos:string[] = [];

  //equipos:string[]=["equipo1","equipo2","equipo3","equipo4"];
  equipos:torneo_equipo_Model[];

  nombre_equipos:string[] = [];

  //fases:string[]=["octavos","cuartos","semifinales","final"];
  fases:torneo_fase_Model[];

  nombre_fases:string[] = [];

  sedes:string[]=["sede1","sede2","sede3","sede4"];

  nuevo_partido:gameModel={ Fecha: null, Hora: null, Nombre_Torneo: '', Fase: '', Equipo_1: '', Equipo_2: '', Sede: '', Estado_del_partido: '' };


  constructor(private router:Router, public partidoService:GameService) { }

  actualizar_torneos(torneos:torneoModel[]){
    for(let i=0; i<this.torneos.length; i++){
      this.nombre_torneos.push(torneos[i].Nombre)
    }
  }

  ngOnInit(): void { 
    this.partidoService.obtener_torneos().subscribe((data:torneoModel[]) => {
      this.torneos=data
      for(let torn of this.torneos){
        this.nombre_torneos.push(torn.Nombre)
      }
    });
  }

  to_view_events(){
    this.router.navigate(['/view_events']);
  }

  send_partido(partido:gameModel){
    this.partidoService.agregar_partido(partido);
  }

  save(sede:string){
    this.nuevo_partido.Sede = sede;
    //console.log(this.nuevo_partido);
    
    this.send_partido(this.nuevo_partido);
    sleep(3000);
    this.to_view_events();
    
  }

  to_home(){
    this.router.navigate(['/home']);
  }

  setFecha(event: { value: any; }, fecha:string){
    let newDate = new Date(fecha);
    this.nuevo_partido.Fecha = newDate;
  }

  sethora(event: { value: any; }, hora:string){
    let newDate = new Date(hora);
    this.nuevo_partido.Hora = newDate;
  }

  selected_tounament(torneo:string){ 
    this.nuevo_partido.Nombre_Torneo = torneo;

    
    this.partidoService.obtener_equipos_del_torneo(torneo).subscribe((data:torneo_equipo_Model[]) => {
      this.nombre_equipos=[]
      this.equipos=data     
      for(let equipo of this.equipos){
        this.nombre_equipos.push(equipo.Equipo)
      }
    });

    
    this.partidoService.obtener_fases_del_torneo(torneo).subscribe((data:torneo_fase_Model[]) => {
      this.nombre_fases=[]
      this.fases=data     
      for(let fase of this.fases){
        this.nombre_fases.push(fase.Fase)
      }
    });

    //new Date('2023-10-06 02:20:00')
  }

  tounament_phases(fase:string){
    this.nuevo_partido.Fase = fase;
  }

  selected_team1(team1:string){
    this.nuevo_partido.Equipo_1 = team1;
  }

  selected_team2(team2:string){
    this.nuevo_partido.Equipo_2 = team2;
  }

  selected_sede(sede:string){
    this.nuevo_partido.Sede = sede;
  }

  disableSelect = new UntypedFormControl(false);

}
function sleep(arg0: number) {
  throw new Error('Function not implemented.');
}


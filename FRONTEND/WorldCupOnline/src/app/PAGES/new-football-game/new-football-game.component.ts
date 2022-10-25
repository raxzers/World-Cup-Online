import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { teamModel } from 'src/app/MODELS/teamModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { torneo_equipo_Model } from 'src/app/MODELS/torneo_equipo_Model';
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

  fases:string[]=["octavos","cuartos","semifinales","final"];

  equipos:string[]=["equipo1","equipo2","equipo3","equipo4"];

  sedes:string[]=["sede1","sede2","sede3","sede4"];

  list:torneo_equipo_Model[];

  constructor(private router:Router, public partidoService:GameService) { }

  actualizar_torneos(torneos:torneoModel[]){
    for(let i=0; i<this.torneos.length; i++){
      this.nombre_torneos.push(torneos[i].Nombre)
    }
  }

  ngOnInit(): void { 
    //this.partidoService.obtener_torneos().subscribe((data => {(this.torneos = data), this.actualizar_torneos(this.torneos)}));

    //this.actualizar_torneos(this.torneos);
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

  to_home(){
    this.router.navigate(['/home']);
  }

  

  selected_tounament(torneo:String){
    
    this.partidoService.obtener_torneos().subscribe(data => (console.log(data)));
    console.log(this.list);
    
    
  }

  tounament_phases(fase:String){
    console.log(fase);
  }

  selected_team1(team1:String){
    console.log(team1);
  }

  selected_team2(team2:String){
    console.log(team2);
  }

  selected_sede(sede:String){
    console.log(sede);
  }

  disableSelect = new UntypedFormControl(false);

}

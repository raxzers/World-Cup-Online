import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/SERVICES/game/game.service';

@Component({
  selector: 'app-new-football-game',
  templateUrl: './new-football-game.component.html',
  styleUrls: ['./new-football-game.component.scss']
})
export class NewFootballGameComponent implements OnInit {

  torneos:string[]=["torneo1","torneo2","torneo3","torneo4","torneo5","torneo6","torneo7","torneo8"];

  fases:string[]=["octavos","cuartos","semifinales","final"];

  equipos:string[]=["equipo1","equipo2","equipo3","equipo4"];

  sedes:string[]=["sede1","sede2","sede3","sede4"];

  constructor(private router:Router, public partidoService:GameService) { }

  ngOnInit(): void { }

  to_view_events(){
    this.router.navigate(['/view_events']);
  }

  to_home(){
    this.router.navigate(['/home']);
  }

  selected_tounament(torneo:String){
    console.log(torneo);
    console.log(this.partidoService.obtenerPartidos());
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

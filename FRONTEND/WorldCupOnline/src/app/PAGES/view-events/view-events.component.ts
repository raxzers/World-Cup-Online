import { Component, OnInit } from '@angular/core';
import { gameModel } from 'src/app/MODELS/gameModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { viewEventsModel } from 'src/app/MODELS/viewEventsModel';
import { GameService } from 'src/app/SERVICES/game/game.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss']
})
export class ViewEventsComponent implements OnInit {

  partidos:gameModel[];
  torneos:torneoModel[];
  ver_eventos:viewEventsModel[] = [];

  constructor(public partidoService:GameService) { }

  ngOnInit(): void {
    this.partidoService.obtener_partidos().subscribe((data:gameModel[]) => {
      this.partidos=data
      
    });

    this.partidoService.obtener_torneos().subscribe((data:torneoModel[]) => {
      this.torneos=data
    });
    
  }

  listar_eventos(partidos:gameModel[]){
    this.ver_eventos[0].Nombre_Torneo=partidos[0].Nombre_Torneo;
    this.ver_eventos[0].partidos.push(partidos[0]);
    let evento:viewEventsModel;

    for(let j=0; j<(partidos.length-2); j++){
      for(let i=1; i<(partidos.length-1); i++){
        if(this.ver_eventos[j].Nombre_Torneo==partidos[i].Nombre_Torneo){
          //this.ver_eventos[j].Nombre_Torneo=partidos[i].Nombre_Torneo;
          this.ver_eventos[j].partidos.push(partidos[i]);
        }
        /*
        else if(){

        }
        */
      }    
    }
  }
}

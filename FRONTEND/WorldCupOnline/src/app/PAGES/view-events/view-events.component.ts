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

  torneo_actual:string;

  partidos_por_torneo:gameModel;

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
}


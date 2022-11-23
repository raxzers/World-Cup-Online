import { Component, OnInit } from '@angular/core';
import { rankingModel } from 'src/app/MODELS/rankingModel';
import { RankingService } from 'src/app/SERVICES/ranking/ranking.service';

@Component({
  selector: 'app-v-ranking',
  templateUrl: './v-ranking.component.html',
  styleUrls: ['./v-ranking.component.scss']
})
export class VRankingComponent implements OnInit {
  rankingNames: any[];
  arrayRankTorneos:any[];

  torneos:string[]=['Torneo 1','Torneo 2','Torneo 3','Torneo 4'];

  x: rankingModel[] = [
    { Torneo: 'Torneo 1', Username: 'usuario 1', Puntaje: 1365435636345634 },
    { Torneo: 'Torneo 2', Username: 'usuario 2', Puntaje: 2 },
    { Torneo: 'Torneo 3', Username: 'usuario 3', Puntaje: 3 },
    { Torneo: 'Torneo 1', Username: 'usuario 5', Puntaje: 17 },
    { Torneo: 'Torneo 4', Username: 'usuario 4', Puntaje: 4 },
    { Torneo: 'Torneo 1', Username: 'usuario 6', Puntaje: 3653 }
  ];
  

  constructor( private rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingNames=[];
    this.obtenerClub();
  }
  obtenerClub() {
    this.rankingNames = [];
    this.rankingService.obtenerRankings().then(data => {
      console.log(data);
      this.arrayRankTorneos as rankingModel[];
      this.arrayRankTorneos = data as rankingModel[];
      for (let equipo of this.arrayRankTorneos) {
        var nombreEquipo = equipo.Torneo;
        this.rankingNames.push(nombreEquipo);
      }
      console.log(this.rankingNames); 
    });
    
  }

}

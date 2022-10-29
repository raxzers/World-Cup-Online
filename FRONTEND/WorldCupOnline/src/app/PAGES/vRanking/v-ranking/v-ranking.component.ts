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

  constructor( private rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingNames=[];
    this.obtenerClub();
  }
  obtenerClub() {
    this.rankingNames = [];
    this.rankingService.obtenerClubs1().then(data => {
      this.arrayRankTorneos as rankingModel[];
      this.arrayRankTorneos = data as rankingModel[];
      for (let equipo of this.arrayRankTorneos) {
        var nombreEquipo = equipo.Torneo;
        this.rankingNames.push(nombreEquipo);
      }

    });
    console.log(this.rankingNames);
  }

}

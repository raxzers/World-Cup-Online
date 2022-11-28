import { Component, OnInit } from '@angular/core';
import { communityGetModel } from 'src/app/MODELS/getComunityModel';
import { rankingModel, rankingPrivadoModel } from 'src/app/MODELS/rankingModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { ComunidadService } from 'src/app/SERVICES/comunidad/comunidad.service';
import { RankingService } from 'src/app/SERVICES/ranking/ranking.service';
import { TorneoServiceService } from 'src/app/SERVICES/torneo/torneo-service.service';
import { UserService } from 'src/app/SERVICES/user/user.service';

@Component({
  selector: 'app-v-ranking',
  templateUrl: './v-ranking.component.html',
  styleUrls: ['./v-ranking.component.scss']
})
export class VRankingComponent implements OnInit {
  rankingNames: any[];
  arrayRankTorneos: any[];
  torneosBueno: any[];
  infoRanking: rankingModel[];

  infoRankingPrivado: rankingPrivadoModel[];
  arrayEquipos: any[];
  rol: string;
  torneos: any[];
  comunidades: any[];
  arrayComunidades: any[];
  codigos:any[];

  rankingStateGeneral: boolean = true;
  rankingStatePrivado: boolean = false;

  actualizarTabla: boolean = false;
  // torneos: string[] = ['Torneo 1', 'Torneo 2', 'Torneo 3', 'Torneo 4'];

  // x: rankingModel[] = [
  //   { Torneo: 'Torneo 1', Username: 'usuario 1', Puntaje: 1365435636345634 },
  //   { Torneo: 'Torneo 2', Username: 'usuario 2', Puntaje: 2 },
  //   { Torneo: 'Torneo 3', Username: 'usuario 3', Puntaje: 3 },
  //   { Torneo: 'Torneo 1', Username: 'usuario 5', Puntaje: 17 },
  //   { Torneo: 'Torneo 4', Username: 'usuario 4', Puntaje: 4 },
  //   { Torneo: 'Torneo 1', Username: 'usuario 6', Puntaje: 3653 }
  // ];


  constructor(private comunidadService: ComunidadService, private rankingService: RankingService, private userService: UserService, private torneoService: TorneoServiceService) { }

  ngOnInit(): void {
    this.rol = '';
    this.rankingNames = [];
    this.torneosBueno = [];
    this.infoRanking = [];
    this.infoRankingPrivado = [];
    this.actualizarTabla = true;
    this.codigos=[];
    this.torneos = [];
    this.obtenerClub();
    if (this.userService.getRol() == '"admin"') {
      this.rol = "admin"
    } else {
      this.rol = 'user'
    }
    this.obtenerNombresTorneos();
    console.log(this.rol)
  }

  obtenerClub() {
    this.rankingNames = [];
    this.rankingService.obtenerRankings().then(data => {
      this.torneosBueno = (data) as rankingModel[];
      this.arrayRankTorneos as rankingModel[];
      console.log(this.arrayRankTorneos);
      this.arrayRankTorneos = data as rankingModel[];
      //console.log(this.torneos)
      //console.log(this.rankingNames); 
    });

    console.log(this.torneosBueno)
  }
  obtenerNombresTorneos() {//Nuevo
    this.torneos = [];
    if (this.rankingStateGeneral) {
      this.torneoService.obtenerTorneos().then(data => {
        this.arrayEquipos as torneoModel[];
        this.arrayEquipos = data as torneoModel[];
        for (let equipo of this.arrayEquipos) {
          var nombreEquipo = equipo.Nombre;
          this.torneos.push(nombreEquipo);
        }

      });
    } else {
      this.comunidades = [];
      this.comunidadService.getComunidades(localStorage.getItem('usuario')).then(data => {
        this.arrayEquipos as communityGetModel[];
        this.arrayEquipos = data as communityGetModel[];
        console.log(this.arrayEquipos)
        for (let equipo of this.arrayEquipos) {
          var nombreEquipo = equipo.Nombre;
          this.torneos.push(nombreEquipo);
        }

      });


    }
  }
  setTrue() {
    console.log("cambio")
    this.actualizarTabla = true;
  }
  obtenerPosiciones(torneo) {
    console.log('Clasificamos');
    
    var stayFalse=true;
    if (this.rankingStateGeneral) {
      this.torneos = [];
      this.torneoService.obtenerTorneos().then(data => {
        this.arrayEquipos as torneoModel[];
        this.arrayEquipos = data as torneoModel[];
        for (let equipo of this.arrayEquipos) {
          var nombreEquipo = equipo.Nombre;
          this.torneos.push(nombreEquipo);
        }
        this.rankingStatePrivado = true;
        this.rankingStateGeneral = false;
      });
    }
    this.infoRanking = [];
    this.rankingService.obtenerRankingsBueno(torneo).then(data => {
      this.infoRanking = (data) as rankingModel[];
      console.log(this.infoRanking);
    });
  }
  obtenerPosicionesPrivado(torneo) {
    var index1=0;
    if (this.rankingStatePrivado) {
      this.torneos = [];
      this.codigos=[];
      this.comunidadService.getComunidades(localStorage.getItem('usuario')).then(data => {
        this.arrayEquipos as communityGetModel[];
        this.arrayEquipos = data as communityGetModel[];
        console.log(this.arrayEquipos)
        for (let equipo of this.arrayEquipos) {
          var nombreEquipo = equipo.Nombre;
          var codes= equipo.COD_Invita;
          this.codigos.push(codes);
          this.torneos.push(nombreEquipo);
         
        }
        this.rankingStatePrivado = false; ///ver ahorita
        this.rankingStateGeneral = true;
      });
    }
    for (let i=0; i<this.codigos.length;i++) {
      if(torneo==this.torneos[i]){
        index1=i;
      }
    }
    console.log("aca",index1);
    console.log('Clasificamos');
    console.log(this.codigos);
    this.infoRanking = [];
    this.rankingService.obtenerRankingsPrivados(this.codigos[index1]).then(data => {
      this.infoRanking = (data) as rankingModel[];
      console.log(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { fullUserModel } from 'src/app/MODELS/fullUserModel';
import { gameModel } from 'src/app/MODELS/gameModel';
import { jugador_asistencias_Model } from 'src/app/MODELS/jugador_asistencias_Model';
import { jugador_goles_Model } from 'src/app/MODELS/jugador_goles_Model';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { torneoModel } from 'src/app/MODELS/torneoModel';
import { GameService } from 'src/app/SERVICES/game/game.service';
import { QuinielaService } from 'src/app/SERVICES/quiniela/quiniela.service';
import { TeamService } from 'src/app/SERVICES/team/team.service';
import { UserService } from 'src/app/SERVICES/user/user.service';

@Component({
  selector: 'app-v-quiniela',
  templateUrl: './v-quiniela.component.html',
  styleUrls: ['./v-quiniela.component.scss']
})
export class VQuinielaComponent implements OnInit {

  goleadoresColumns: string[] = ['nombre', 'goles'];
  asistenciasColumns: string[] = ['nombre', 'asistencias'];

  goleadores: jugador_goles_Model[] = [];
  asistencias: jugador_asistencias_Model[] = [];

  username: string = '';
  id_Usuario: number = 0;
  user: fullUserModel = { ID: null, Fecha_Nacimiento: null, Nombre: null, Apellido1: null, Correo: null, Password: null, Rol: null, Username: null, Pais: null };

  quinielas_torneo: quinielaModel[] = [{ id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null }];
  quinielas_torneo_usuario: quinielaModel[] = [{ id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null }];

  partidos: gameModel[];
  partidos_por_torneo: gameModel[];
  torneos: torneoModel[];
  partido_quiniela: gameModel = { ID: null, Fecha: null, Hora: null, Nombre_Torneo: null, Fase: null, Equipo_1: null, Goles_Equipo_1: null, Equipo_2: null, Goles_Equipo_2: null, Sede: null, Estado_del_partido: null };

  Equipo_1: string = '1';
  Equipo_2: string = '2';

  Fecha: Date = null;
  Hora: string = '';
  Sede: string = '';
  Estado_del_partido: string = '';
  Fase: string = '';

  Goles_Eq1: number = 0;
  Goles_Eq2: number = 0;
  Autogoles_eq1: number = 0;
  Autogoles_eq2: number = 0;

  /*
    Fecha: Date;
    Hora: string;
    Nombre_Torneo: string;
    Fase: string;
    Equipo_1: string;
    Goles_Equipo_1: number;
    Equipo_2: string;
    Goles_Equipo_2: number;
    Sede: string;
    Estado_del_partido: string;
  
    autogoles1: string;
    autogoles2: string;
  
    partidos: gameModel[];
    partidos_por_torneo: gameModel[];
    torneos: torneoModel[];
  
    */




  constructor(public userService: UserService, public partidoService: GameService, public equipoService: TeamService, public quinielaService: QuinielaService) { }

  ngOnInit(): void {
    this.partidoService.obtener_partidos().subscribe((data: gameModel[]) => {
      this.partidos = data
    });

    this.partidoService.obtener_torneos().subscribe((data: torneoModel[]) => {
      this.torneos = data
    });

    this.username = this.userService.getUsername();

    this.userService.getUserByUsername(this.username).subscribe((data: fullUserModel) => {
      this.user = data;
      this.id_Usuario = this.user[0].ID;
    });
  }

  quinielas_por_torneo(torneo: string) {

    this.quinielas_torneo_usuario = [];
    this.quinielas_torneo = [];
    //let quiniela_aux: quinielaModel = { id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null };
    //let quiniela_aux: quinielaModel[];
    this.quinielaService.getQuinielasByTorneo(torneo).subscribe((data: quinielaModel[]) => {
      this.quinielas_torneo = data as quinielaModel[];


      for (let quiniela of this.quinielas_torneo) {

        if (quiniela.id_Usuario == this.id_Usuario) {
          this.add_quiniela_por_usuario(quiniela);
          console.log(quiniela)
        }
      }
    });
  }

  add_quiniela_por_usuario(quiniela: quinielaModel) {
    this.quinielas_torneo_usuario.push(quiniela);
  }



  mostrar_quiniela(quiniela: quinielaModel) {

    this.partido_quinela(quiniela.id_Partido);

    this.listar_asistencias(quiniela.id_Jugadores_asistencias_Eq1, quiniela.id_Jugadores_asistencias_Eq2);
    this.listar_goleadores(quiniela.id_Jugadores_goles_Eq1, quiniela.id_Jugadores_goles_Eq2);

    this.Goles_Eq1 = quiniela.Goles_Eq1;
    this.Goles_Eq2 = quiniela.Goles_Eq2;
    this.Autogoles_eq1 = quiniela.Autogoles_eq1;
    this.Autogoles_eq2 = quiniela.Autogoles_eq2;
  }

  partido_quinela(id: number) {
    let partido_quiniela: gameModel;
    this.partidoService.partido_por_id(id).subscribe((data: gameModel) => {
      partido_quiniela = data as gameModel;
      this.set_partido(partido_quiniela)

    });
  }

  set_partido(partido: gameModel) {

    this.partido_quiniela.Equipo_1 = partido[0].Equipo_1;
    this.partido_quiniela.Equipo_2 = partido[0].Equipo_2;
    this.partido_quiniela.Fecha = partido[0].Fecha;
    this.partido_quiniela.Hora = partido[0].Hora;
    this.partido_quiniela.Fase = partido[0].Fase;
    this.partido_quiniela.Sede = partido[0].Sede;
    this.partido_quiniela.Estado_del_partido = partido[0].Estado_del_partido;
    /*
    this.Equipo_1 = partido[0].Equipo_1;
    this.Equipo_2 = partido[0].Equipo_2;
    this.Fecha = partido[0].Fecha;
    this.Hora = partido[0].Hora;
    this.Fase = partido[0].Fase;
    this.Sede = partido[0].Sede;
    this.Estado_del_partido = partido[0].Estado_del_partido;
    */
    console.log(this.quinielas_torneo_usuario);
  }

  listar_goleadores(ids1: number[], ids2: number[]) {

  }

  listar_asistencias(ids1: number[], ids2: number[]) {

  }




  //////////////////////////////////////////////////////////////////////////////////////

  /*
  obtener_partidos_por_torneo(torneo: String) {
    this.partidoService.obtener_partidos_por_torneo(torneo).subscribe((data: gameModel[]) => {
      this.partidos_por_torneo = data
    });
    return this.partidos_por_torneo;
  }

  obtener_quiniela_por_usuario(id_Usuario: string) {
    let q_aux: quinielaModel[] = [];
    let q: quinielaModel[] = [];

    this.quinielaService.getQuinielasUsuario(id_Usuario).subscribe((data: quinielaModel[]) => {
      q_aux = data
      for (let x of q_aux) {
        q.push(x);
      }
    });
    return q
  }

  quiniela_del_partido(juego: gameModel) {
    this.Fecha = juego.Fecha;
    this.Hora = juego.Hora;
    this.Nombre_Torneo = juego.Nombre_Torneo;
    this.Fase = juego.Fase;
    this.Equipo_1 = juego.Equipo_1;
    this.Goles_Equipo_1 = juego.Goles_Equipo_1;
    this.Equipo_2 = juego.Equipo_2;
    this.Goles_Equipo_2 = juego.Goles_Equipo_2;
    this.Sede = juego.Sede;
    this.Estado_del_partido = juego.Estado_del_partido;
    this.autogoles1 = "0";
    this.autogoles2 = "0";
  }
  */

}

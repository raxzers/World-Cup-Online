import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { fullUserModel } from 'src/app/MODELS/fullUserModel';
import { gameModel } from 'src/app/MODELS/gameModel';
import { jugador_asistencias_Model } from 'src/app/MODELS/jugador_asistencias_Model';
import { jugador_goles_Model } from 'src/app/MODELS/jugador_goles_Model';
import { quinielaModel } from 'src/app/MODELS/quinielaModel';
import { quiniela_torneo_usuario_Model } from 'src/app/MODELS/quinielas_torneo_usuario_Model';
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

  encuentros: string[] = [];

  goleadoresColumns: string[] = ['nombre', 'goles'];
  asistenciasColumns: string[] = ['nombre', 'asistencias'];

  goleadores: jugador_goles_Model[] = [];
  goleadores_aux: number[] = [];

  asistencias: jugador_asistencias_Model[] = [];
  asistencias_aux: number[] = [];

  username: string = '';
  id_Usuario: number = 0;
  user: fullUserModel = { ID: null, Fecha_Nacimiento: null, Nombre: null, Apellido1: null, Correo: null, Password: null, Rol: null, Username: null, Pais: null };

  quinielas_torneo: quinielaModel[] = [{ id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null }];
  quinielas_torneo_usuario: quinielaModel[] = [{ id_Usuario: null, id_Partido: null, id_Jugadores_goles_Eq1: null, id_Jugadores_asistencias_Eq1: null, id_Jugadores_goles_Eq2: null, id_Jugadores_asistencias_Eq2: null, Goles_Eq1: null, Goles_Eq2: null, Autogoles_eq1: null, Autogoles_eq2: null, id_Jugador_GOAT: null }];

  partidos: gameModel[];
  partidos_por_torneo: gameModel[];
  torneos: torneoModel[];
  partido_quiniela: gameModel = { ID: null, Fecha: null, Hora: null, Nombre_Torneo: null, Fase: null, Equipo_1: null, Goles_Equipo_1: null, Equipo_2: null, Goles_Equipo_2: null, Sede: null, Estado_del_partido: null };

  Goles_Eq1: number = 0;
  Goles_Eq2: number = 0;
  Autogoles_eq1: number = 0;
  Autogoles_eq2: number = 0;
  mejor_Jugador: number = null;


  constructor(private toastr: ToastrService, public userService: UserService, public partidoService: GameService, public equipoService: TeamService, public quinielaService: QuinielaService) { }

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
    this.encuentros = [];
    this.quinielaService.getQuinielasByTorneo(torneo).subscribe((data: quinielaModel[]) => {
      this.quinielas_torneo = data as quinielaModel[];


      for (let quiniela of this.quinielas_torneo) {

        if (quiniela.id_Usuario == this.id_Usuario) {
          this.add_quiniela_por_usuario(quiniela);

        }
      }
    });
  }

  add_quiniela_por_usuario(quiniela: quinielaModel) {
    this.quinielas_torneo_usuario.push(quiniela);
    this.set_encuentros(quiniela.id_Partido);
  }


  lista_quinielas_torneo_usuario(torneo: string, id_Usuario: number) {
    this.quinielas_torneo_usuario = [];
    let quiniela_aux: quinielaModel[];
    this.encuentros = [];
    let get_quiniela: quiniela_torneo_usuario_Model = { torneo: torneo, id_Usuario: id_Usuario.toString() };

    this.quinielaService.get_quinielas_torneo_usuario(get_quiniela).subscribe((data: quinielaModel[]) => {
      quiniela_aux = data as quinielaModel[];
      for (let quiniela of quiniela_aux) {
        this.add_quiniela_por_usuario(quiniela);
      }
    });

  }

  mostrar_quiniela(quiniela: quinielaModel) {
    this.partido_quinela(quiniela.id_Partido);

    this.listar_asistencias(quiniela.id_Jugadores_asistencias_Eq1, quiniela.id_Jugadores_asistencias_Eq2);
    this.listar_goleadores(quiniela.id_Jugadores_goles_Eq1, quiniela.id_Jugadores_goles_Eq2);

    this.Goles_Eq1 = quiniela.Goles_Eq1;
    this.Goles_Eq2 = quiniela.Goles_Eq2;
    this.Autogoles_eq1 = quiniela.Autogoles_eq1;
    this.Autogoles_eq2 = quiniela.Autogoles_eq2;
    this.mejor_Jugador = quiniela.id_Jugador_GOAT;
  }

  partido_quinela(id_partido: number) {
    let partido_quiniela: gameModel;
    this.partidoService.partido_por_id(id_partido).subscribe((data: gameModel) => {
      partido_quiniela = data as gameModel;
      this.set_partido(partido_quiniela)

    });
  }

  agregar_encuentro(Eq1: string, Eq2: string) {
    this.encuentros.push(Eq1 + ' vs ' + Eq2);
  }

  set_encuentros(id_partido: number) {

    let partido_quiniela: gameModel;
    this.partidoService.partido_por_id(id_partido).subscribe((data: gameModel) => {
      partido_quiniela = data as gameModel;
      this.agregar_encuentro(partido_quiniela[0].Equipo_1, partido_quiniela[0].Equipo_2)
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
  }

  listar_goleadores(ids1: number[], ids2: number[]) {
    this.goleadores_aux = [];

    for (let jugador of ids1) {
      this.goleadores_aux.push(jugador)
    }

    for (let jugador of ids2) {
      this.goleadores_aux.push(jugador)
    }
  }

  listar_asistencias(ids1: number[], ids2: number[]) {
    this.asistencias_aux = [];

    for (let jugador of ids1) {
      this.asistencias_aux.push(jugador)
    }

    for (let jugador of ids2) {
      this.asistencias_aux.push(jugador)
    }
  }

  limpiar() {
    this.partido_quiniela = { ID: null, Fecha: null, Hora: null, Nombre_Torneo: null, Fase: null, Equipo_1: null, Goles_Equipo_1: null, Equipo_2: null, Goles_Equipo_2: null, Sede: null, Estado_del_partido: null };
    this.Goles_Eq1 = null;
    this.Goles_Eq2 = null;
    this.Autogoles_eq1 = null;
    this.Autogoles_eq2 = null;
    this.mejor_Jugador = null;
    this.quinielas_torneo_usuario = [];
    this.goleadores = [];
    this.asistencias = [];

    this.goleadores_aux = [];
    this.asistencias_aux = [];

    this.encuentros = [];
  }

}

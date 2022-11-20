import { gameModel } from "src/app/MODELS/gameModel";
import { GameService } from "src/app/SERVICES/game/game.service";
import { TeamService } from "src/app/SERVICES/team/team.service";
import { jugador_club_Model } from "../MODELS/jugador_club_Model";
import { jugador_quiniela_Model } from "../MODELS/jugador_quiniela_Model";
import { jugador_seleccion_Model } from "../MODELS/jugador_seleccion_Model";
import { torneoModel } from "../MODELS/torneoModel";
import { TorneoServiceService } from "../SERVICES/torneo/torneo-service.service";




export class LlenarDatosPartido {

    constructor(public partidoService: GameService, public equipoService: TeamService, public torneoService: TorneoServiceService) { }


    //devuelve los partidos del torneo que se pasa como parámetro
    obtener_partidos_por_torneo(torneo: String): gameModel[] {
        let partidos: gameModel[] = [];
        let partidos_por_torneo: gameModel[] = [];
        this.partidoService.obtener_partidos_por_torneo(torneo).subscribe((data: gameModel[]) => {
            partidos = data
            for (let partido of partidos) {
                partidos_por_torneo.push(partido)
            }
        });
        return partidos_por_torneo;
    }

    jugadores_por_seleccion(equipo: String): jugador_seleccion_Model[] {
        let jugadores: jugador_seleccion_Model[] = [];
        let jugadores_por_seleccion: jugador_seleccion_Model[] = [];
        this.equipoService.obtener_jugadores_por_seleccion(equipo).subscribe((data: jugador_seleccion_Model[]) => {
            jugadores = data
            for (let jugador of jugadores) {
                jugadores_por_seleccion.push(jugador)
            }
        });
        return jugadores_por_seleccion;
    }

    jugadores_por_club(equipo: String): jugador_club_Model[] {
        let jugadores: jugador_club_Model[] = [];
        let jugadores_por_club: jugador_club_Model[] = [];
        this.equipoService.obtener_jugadores_por_club(equipo).subscribe((data: jugador_club_Model[]) => {
            jugadores = data
            for (let jugador of jugadores) {
                jugadores_por_club.push(jugador)
            }
        });
        return jugadores_por_club;
    }

    jugadores_quiniela_seleccion(equipo: String): jugador_quiniela_Model[] {

        let jugadores: jugador_quiniela_Model[] = [];
        let jugadores_por_seleccion: jugador_seleccion_Model[] = [];
        let js_aux: jugador_seleccion_Model[] = [];
        let jugador: jugador_quiniela_Model = { ID: 0, Nombre: '', goles: 0, asistencias: 0 };

        jugadores_por_seleccion = this.jugadores_por_seleccion(equipo);

        console.log(jugadores_por_seleccion)
        console.log(jugadores_por_seleccion.length)
        for (let js of jugadores_por_seleccion) {
            jugador.ID = js.ID;
            jugador.Nombre = js.Nombre_Jugador;
            jugador = jugador;
            jugadores.push(jugador);
            //console.log(jugador)
        }
        /*
        this.equipoService.obtener_jugadores_por_seleccion(equipo).subscribe((data: jugador_seleccion_Model[]) => {
            jugadores_por_seleccion = data

            for (let js of jugadores_por_seleccion) {
                jugador.ID = js.ID;
                jugador.Nombre = js.Nombre_Jugador;
                jugador = jugador;
                jugadores.push(jugador);
                //console.log(jugador)
            }

        });
        */

        //console.log(jugadores)
        return jugadores;

        /*
        let jugadores: jugador_quiniela_Model[] = [];
        let jugador: jugador_quiniela_Model;

        console.log(jugadores_seleccion.length) //imprime un cero
        console.log(jugadores_seleccion) // imprime la lista de jugadores


        for (let jugador_seleccion of jugadores_seleccion) {
            jugador.ID = jugador_seleccion.ID;
            jugador.Nombre = jugador_seleccion.Nombre_Jugador;
            jugador.goles = 0;
            jugador.asistencias = 0;
            jugadores.push(jugador);
        }

        return jugadores
        */
    }

    jugadores_equipo(equipo: String, tipo_torneo: String) {
        let jugadores_seleccion: jugador_seleccion_Model[] = [];
        let jugadores_club: jugador_club_Model[] = [];
        let jugadores: jugador_quiniela_Model[] = [];
        //let jugador: jugador_quiniela_Model;


        if (tipo_torneo === 'Seleccion') {
            jugadores_seleccion = this.jugadores_por_seleccion(equipo);
            //jugadores = this.jugadores_quiniela_seleccion(jugadores_seleccion)
            /*
            for (let jugador_seleccion of jugadores_seleccion) {
                jugador.ID = jugador_seleccion.ID;
                jugador.Nombre = jugador_seleccion.Nombre_Jugador;
                jugador.goles = 0;
                jugador.asistencias = 0;
                jugadores.push(jugador)
            }
            */

        }
        else if (tipo_torneo === 'Club') {
            jugadores_club = this.jugadores_por_club(equipo)

            /*
            for (let jugador_club of jugadores_club) {
                jugador.ID = jugador_club.ID;
                jugador.Nombre = jugador_club.Nombre_Jugador;
                jugador.goles = 0;
                jugador.asistencias = 0;
                jugadores.push(jugador)
            }
            */
        }
        else {
            console.log('tipo de torneo incorrecto')
        }

        return jugadores;
    }


}

import { gameModel } from "src/app/MODELS/gameModel";
import { GameService } from "src/app/SERVICES/game/game.service";
import { TeamService } from "src/app/SERVICES/team/team.service";
import { jugador_club_Model } from "../MODELS/jugador_club_Model";
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

    tipo_torneo(nombretorneo: String) {
        let torneo: torneoModel;
        let tipoTorneo: string;
        this.torneoService.getTorneo(nombretorneo).subscribe((data: torneoModel) => {
            torneo = data;
            tipoTorneo = torneo.Equipos;
        })
        return tipoTorneo;
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



}

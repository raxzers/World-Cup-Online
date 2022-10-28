import { gameModel } from "./gameModel";

export interface viewEventsModel {
    Nombre_Torneo: string;
    partidos:gameModel[];
}
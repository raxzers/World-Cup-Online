export interface gameModel {
    ID?: number;
    Fecha: Date;
    Hora: string;
    Nombre_Torneo: string;
    Fase: string;
    Equipo_1: string;
    Goles_Equipo_1?:number;
    Equipo_2: string;
    Goles_Equipo_2?:number;
    Sede: string;
    Estado_del_partido: string;
}

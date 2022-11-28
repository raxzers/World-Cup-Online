const pool = require("../../database");
const queries = require('../Queries/queries_resultados');

async function get_resultados(){
    const response = await pool.query(queries.get);
    
    
    return response.rows
    
}

async function getById_resultados(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function getBynametorneo_resultados(nombre){
    const response = await pool.query(queries.getByname_torneo, [nombre]);
    return response.rows
    
}

async function add_resultados(id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT){

    try {
    const response = await pool.query(queries.add, [id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_resultados(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_resultados(id,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT){

    try {
    const response = await pool.query(queries.update, [id, id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_resultados ,
    add_resultados,
    getById_resultados,
    remove_resultados,
    update_resultados,
    getBynametorneo_resultados,
} 
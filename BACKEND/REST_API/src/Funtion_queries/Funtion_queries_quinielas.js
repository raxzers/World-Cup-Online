const pool = require("../../database");
const queries = require('../Queries/queries_quinielas');

async function get_quinielas(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_quinielas(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function getBytorneo_quinielas(torneo){
    const response = await pool.query(queries.getByname_torneo, [torneo]);
    return response.rows
    
}

async function add_quinielas(id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT){

    try {
    const response = await pool.query(queries.add, [id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_quinielas(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function removeByTorneo_quinielas(Torneo){

    try {
    const response = await pool.query(queries.removeBytorneo, [Torneo] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_quinielas(id,id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT){

    try {
    const response = await pool.query(queries.update, [id, id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_quinielas ,
    add_quinielas,
    getById_quinielas,
    getBytorneo_quinielas,
    remove_quinielas,
    update_quinielas,
    removeByTorneo_quinielas,
} 
const pool = require("../../database");
const queries = require('../Queries/queries_jugadores_club');

async function get_jugadores_club(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_jugadores_club(id){
    const response = await pool.query(queries.checkIdExists, [id]);
    return response.rows
    
}

async function getByclub_jugadores_club(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}
async function add_jugadores_club(Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    try {
    const response = await pool.query(queries.add, [Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_jugadores_club(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_jugadores_club(id,Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    try {
    const response = await pool.query(queries.update, [id, Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_jugadores_club ,
    add_jugadores_club,
    getById_jugadores_club,
    remove_jugadores_club,
    update_jugadores_club,
    getByclub_jugadores_club,
} 
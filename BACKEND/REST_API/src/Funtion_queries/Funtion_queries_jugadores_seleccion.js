const pool = require("../../database");
const queries = require('../Queries/queries_jugadores_seleccion');

async function get_jugadores_seleccion(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_jugadores_seleccion(id){
    const response = await pool.query(queries.checkIdExists, [id]);
    return response.rows
    
}

async function getByname_jugadores_seleccion(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function add_jugadores_seleccion(Seleccion,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    try {
    const response = await pool.query(queries.add, [Seleccion,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_jugadores_seleccion(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_jugadores_seleccion(id,Seleccion,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    try {
    const response = await pool.query(queries.update, [id, Seleccion,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_jugadores_seleccion ,
    add_jugadores_seleccion,
    getById_jugadores_seleccion,
    remove_jugadores_seleccion,
    update_jugadores_seleccion,
    getByname_jugadores_seleccion,
} 
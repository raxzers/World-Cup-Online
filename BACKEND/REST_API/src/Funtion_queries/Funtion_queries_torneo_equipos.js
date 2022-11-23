const pool = require("../../database");
const queries = require('../Queries/queries_torneo_equipos');

async function get_torneo_equipos(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_torneo_equipos(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function add_torneo_equipos(Torneo,Equipo){

    try {
    const response = await pool.query(queries.add, [Torneo,Equipo] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_torneo_equipos(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_torneo_equipos_por_torneo(id){

    try {
    const response = await pool.query(queries.remove_por_torneo, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_torneo_equipos(id,Torneo,Equipo){

    try {
    const response = await pool.query(queries.update, [id, Torneo,Equipo,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_torneo_equipos ,
    add_torneo_equipos,
    getById_torneo_equipos,
    remove_torneo_equipos,
    update_torneo_equipos,
    remove_torneo_equipos_por_torneo,
} 
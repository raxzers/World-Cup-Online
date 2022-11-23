const pool = require("../../database");
const queries = require('../Queries/queries_torneo');

async function get_torneo(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_torneo(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function getByname_torneo(Nombre){
    const response = await pool.query(queries.checknameExists, [Nombre]);
    return response.rows
    
}

async function add_torneo(ID,Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas){

    try {
    const response = await pool.query(queries.add, [ID,Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_torneo(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_torneo(id,Fecha_inicio,Fecha_fin,Equipos,Reglas){

    try {
    const response = await pool.query(queries.update, [id,Fecha_inicio,Fecha_fin,Equipos,Reglas,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_torneo ,
    add_torneo,
    getById_torneo,
    remove_torneo,
    update_torneo,
    getByname_torneo,
} 
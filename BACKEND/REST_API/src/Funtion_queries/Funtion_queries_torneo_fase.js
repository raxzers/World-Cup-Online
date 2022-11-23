const pool = require("../../database");
const queries = require('../Queries/queries_torneo_fase');

async function get_torneo_fase(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_torneo_fase(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function add_torneo_fase(Torneo,Fase){

    try {
    const response = await pool.query(queries.add, [Torneo,Fase] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_torneo_fase(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_torneo_fase_por_troneo(id){

    try {
    const response = await pool.query(queries.remove_por_torneo_fase, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_torneo_fase(id,Torneo,Fase){

    try {
    const response = await pool.query(queries.update, [id, Torneo,Fase,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_torneo_fase ,
    add_torneo_fase,
    getById_torneo_fase,
    remove_torneo_fase,
    update_torneo_fase,
    remove_torneo_fase_por_troneo,
} 
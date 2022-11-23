const pool = require("../../database");
const queries = require('../Queries/queries_ranking');

async function get_ranking(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_ranking(id){
    const response = await pool.query(queries.checkIdExists, [id]);
    return response.rows
    
}

async function getByname_ranking(name){
    const response = await pool.query(queries.getById, [name]);
    return response.rows
    
}

async function add_ranking(id_Torneo,id_Usuario,Puntaje){

    try {
    const response = await pool.query(queries.add, [id_Torneo,id_Usuario,Puntaje] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_ranking(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_ranking(id,id_Torneo,id_Usuario,Puntaje){

    try {
    const response = await pool.query(queries.update, [id, id_Torneo,id_Usuario,Puntaje,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_ranking ,
    add_ranking,
    getById_ranking,
    remove_ranking,
    update_ranking,
    getByname_ranking,
} 
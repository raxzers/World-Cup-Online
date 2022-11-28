const pool = require("../../database");
const queries = require('../Queries/queries_ranking_privado');

async function get_ranking_privado(){
    const response = await pool.query(queries.get);
    
    
    return response.rows
    
}

async function getById_ranking_privado(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function getBycomunidad_ranking_privado(comunidad){
    const response = await pool.query(queries.getbycomunidad, [comunidad]);
    return response.rows
    
}

async function add_ranking_privado(Usuario,COD_Invita){

    try {
    const response = await pool.query(queries.add, [Usuario,COD_Invita] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_ranking_privado(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_ranking_privado(id,Usuario,COD_Invita){

    try {
    const response = await pool.query(queries.update, [id, Usuario,COD_Invita,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_ranking_privado ,
    add_ranking_privado,
    getById_ranking_privado,
    remove_ranking_privado,
    update_ranking_privado,
    getBycomunidad_ranking_privado,
} 
const pool = require("../../database");
const queries = require('../Queries/queries_clubes');

async function get_clubes(){
    const response = await pool.query(queries.get);
    
    
    return response.rows
    
}

async function getById_clubes(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function add_clubes(Club){

    try {
    const response = await pool.query(queries.add, [Club] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_clubes(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_clubes(id,Club){

    try {
    const response = await pool.query(queries.update, [id, Club,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_clubes ,
    add_clubes,
    getById_clubes,
    remove_clubes,
    update_clubes,
} 
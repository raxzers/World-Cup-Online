const pool = require("../../database");
const queries = require('../Queries/queries_selecciones');

async function get_selecciones(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_selecciones(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function add_selecciones(Seleccion){

    try {
    const response = await pool.query(queries.add, [Seleccion] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_selecciones(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_selecciones(id,Seleccion){

    try {
    const response = await pool.query(queries.update, [id, Seleccion,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_selecciones ,
    add_selecciones,
    getById_selecciones,
    remove_selecciones,
    update_selecciones,
} 
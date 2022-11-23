const pool = require("../../database");
const queries = require('../Queries/queries_usuarios');

async function get_usuario(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function getById_usuario(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function getBycorreo_usuario(correo){
    const response = await pool.query(queries.getBycorreo, [correo]);
    return response.rows
    
}
async function getByusername_usuario(username){
    const response = await pool.query(queries.getByusername, [username]);
    return response.rows
    
}

async function add_usuario(Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,Username,Pais ){

    try {
    const response = await pool.query(queries.add, [Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,Username,Pais ] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_usuario(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_usuario(id,Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,Username,Pais ){

    try {
    const response = await pool.query(queries.update, [id, Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,"user",Username,Pais ,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_usuario ,
    add_usuario,
    getById_usuario,
    remove_usuario,
    update_usuario,
    getBycorreo_usuario,
    getByusername_usuario,
} 
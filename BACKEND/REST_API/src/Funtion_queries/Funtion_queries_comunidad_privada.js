const pool = require("../../database");
const queries = require('../Queries/queries_comunidad_privada');
const cadenaAleatoria = require("../../extra_f");


async function get_comunidad_privada(){
    const response = await pool.query(queries.get);
    
    return response.rows
    
}

async function getById_comunidad_privada(id){
    const response = await pool.query(queries.getById, [id]);
    return response.rows
    
}

async function getByUseryTorneo(NombreTorneo,Usuario){
    const response = await pool.query(queries.checkUserYTorneo, [NombreTorneo,Usuario]);
    return response.rows
    
}

async function add_comunidad_privada(NombreComunidad,NombreTorneo,Usuario){
//cambiar logica
    const COD_Invita=cadenaAleatoria.cadenaAleatoria();
    try {
    const response = await pool.query(queries.add, [NombreComunidad,COD_Invita,NombreTorneo] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_comunidad_privada(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_comunidad_privada(id,NombreComunidad,COD_Invita,NombreTorneo){

    try {
    const response = await pool.query(queries.update, [id, NombreComunidad,COD_Invita,NombreTorneo,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_comunidad_privada ,
    add_comunidad_privada,
    getById_comunidad_privada,
    remove_comunidad_privada,
    update_comunidad_privada,
    getByUseryTorneo,
} 
const pool = require("../../database");
const queries = require('../Queries/queries_partido');

async function get_partido(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function get_fecha_now(){
    const response = await pool.query("select now()");
    return response.rows[0].now
    
}

async function getById_partido(id){
    const response = await pool.query(queries.checkIdExists, [id]);
    return response.rows
    
}

async function getByname_partido(Nombre_Torneo){
    const response = await pool.query(queries.getById, [Nombre_Torneo]);
    return response.rows
    
}

async function add_partido(Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Equipo_2, Sede, Estado_del_partido){

    try {
    const response = await pool.query(queries.add, [Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Equipo_2, Sede, Estado_del_partido] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_partido(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function removeBytorneo_partido(id){

    try {
    const response = await pool.query(queries.removeBytorneo_partido, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function update_partido(id,Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Goles_Equipo_1,Equipo_2,Goles_Equipo_2,Sede,Estado_del_partido){

    try {
    const response = await pool.query(queries.update, [id,Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Goles_Equipo_1,Equipo_2,Goles_Equipo_2,Sede,Estado_del_partido,id] );}
    catch {
        return (401)
    }
    return ( 200) 
}

module.exports = {
    get_partido ,
    add_partido,
    getById_partido,
    getByname_partido,
    remove_partido,
    update_partido,
    get_fecha_now,
    removeBytorneo_partido,
} 
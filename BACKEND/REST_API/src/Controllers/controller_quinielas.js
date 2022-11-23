const pool = require("../../database");
const queries = require('../Queries/queries_quinielas');
const funciones = require("../Funtion_queries/Funtion_queries_quinielas");

const get = async (req, res) => {
    res.status(200).json(await funciones.get_quinielas());
};

const getById = async (req, res) => {
    const id = req.params.id;
    res.status(200).json(await funciones.getById_quinielas(id));
};

const getByname_Torneo = async (req, res) => {
    const id = req.params.id;
    res.status(200).json(await funciones.getBytorneo_quinielas(id));
};

const add = async (req, res) => {
    const { id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT } = req.body;
    
    var get_var = await funciones.add_quinielas(id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT );
    res.status(get_var).json(get_var);
    
    
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    var get_var = await funciones.getById_quinielas(id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    var get_var2 = await funciones.remove_quinielas(id); 
    res.status(get_var2).json(get_var2);  
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT } = req.body;

    var get_var = await funciones.getById_quinielas(id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    var get_var2 = await funciones.update_quinielas(id,id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT ,id); 
    res.status(get_var2).json(get_var2);
};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
    getByname_Torneo,
}
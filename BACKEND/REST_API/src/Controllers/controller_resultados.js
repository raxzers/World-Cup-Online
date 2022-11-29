const pool = require("../../database");
const queries = require('../Queries/queries_resultados');
const validarRes = require("../../extra_f");
const funciones = require("../Funtion_queries/Funtion_queries_resultados");
const mook = require("../Mooks/Mook_resultados");

const get = async (req, res) => {
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.get_resultado());
    }
    else {
        res.status(200).json(await funciones.get_resultados());
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.getById_resultado(id));
    }
    else {
        res.status(200).json(await funciones.getById_resultados(id));
    }
};

const getByname_Torneo = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.getBynametorneo_resultados(id));
    }
    else {
        res.status(200).json(await funciones.getBynametorneo_resultados(id));
    }
    
};

const add = async (req, res) => {
    const { id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.add_resultado(id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await funciones.add_resultados(id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT);
        validarRes.Calcular_puntos(id_Partido);
        res.status(get_var).json(get_var);
    }
    
            
    
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_resultado(id);
    }
    else {
        var get_var = await funciones.getById_resultados(id);
    }
    const notFound = !get_var.rows.length;
    if(notFound){
        res.send("No existe en la base de datos"); 
    } 
    if (Test== "si"){
        var get_var2 = await mook.remove_resultado(id); 
        res.status(get_var2).json(get_var2); 
    }
    else {
        var get_var2 = await funciones.remove_resultados(id); 
        res.status(get_var2).json(get_var2); 
    }  
    
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_resultado(id);
    }
    else {
        var get_var = await funciones.getById_resultados(id);
    }
    const notFound = !get_var.rows.length;
    if(notFound){
        res.send("No existe en la base de datos");
    }
    if (Test== "si"){
        var get_var2 = await mook.update_resultado(id,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT); 
        res.status(get_var2).json(get_var2); 
    }
    else {
        var get_var2 = await funciones.update_resultados(id,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT); 
        res.status(get_var2).json(get_var2); 
    } 
    

};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
    getByname_Torneo,
}
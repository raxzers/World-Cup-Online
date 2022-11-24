const pool = require("../../database");
const queries = require('../Queries/queries_jugadores_club');
const funciones = require("../Funtion_queries/Funtion_queries_jugadores_club");
const mook = require("../Mooks/Mook_jugadores_club");

const get = async (req, res) => {
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.get_jugadores_club());
    }
    else {
    res.status(200).json(await funciones.get_jugadores_club());
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.getByclub_jugadores_club(id));
    }
    else {
    res.status(200).json(await funciones.getByclub_jugadores_club(id));
    }
};

const add = async (req, res) => {
    const { Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador,Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.add_jugadores_club(Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador));
    }
    else {
        var get_var = await funciones.add_jugadores_club(Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador);
        res.status(get_var).json(get_var);
    }
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_jugadores_club(id);
    }
    else {
        var get_var = await funciones.getById_jugadores_club(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 

    if (Test== "si"){
        var get_var2 = await mook.remove_jugadores_club(id); 
        res.status(get_var2).json(get_var2); 
    }
    else {
        var get_var2 = await funciones.remove_jugadores_club(id); 
        res.status(get_var2).json(get_var2); 
    }
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador,Test} = req.body;

    if (Test== "si"){
        var get_var = await mook.getById_jugadores_club(id);
    }
    else {
        var get_var = await funciones.getById_jugadores_club(id);
    }

    //var get_var = await funciones.getById_jugadores_club(id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.update_jugadores_club(id,Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador,id); 
        res.status(get_var2).json(get_var2);
    }
    else {
        var get_var2 = await funciones.update_jugadores_club(id,Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador,id); 
        res.status(get_var2).json(get_var2);
    }
};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}